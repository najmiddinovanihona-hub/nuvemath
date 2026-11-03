// Nuvemath — tenglama yechuvchi: ko'phadni aniq (qadam-baqadam), qolganini sonli usulda yechadi;
// chiziqli tenglamalar sistemasini Gauss usulida kasrlar bilan yechadi.
(function (root) {
  'use strict';
  var Expr = root.Expr || (typeof require !== 'undefined' ? require('./expr.js') : null);

  // ---------- Kasrlar ----------
  function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = b; b = a % b; a = t; } return a || 1; }
  function Frac(n, d) {
    if (!(this instanceof Frac)) return new Frac(n, d);
    d = d === undefined ? 1 : d;
    if (d < 0) { n = -n; d = -d; }
    var g = gcd(n, d); this.n = n / g; this.d = d / g;
  }
  Frac.from = function (x) {
    if (x instanceof Frac) return x;
    if (Number.isInteger(x)) return new Frac(x, 1);
    var r = approxRational(x, 10000);
    return r ? new Frac(r[0], r[1]) : null;
  };
  Frac.prototype.add = function (o) { return new Frac(this.n * o.d + o.n * this.d, this.d * o.d); };
  Frac.prototype.sub = function (o) { return new Frac(this.n * o.d - o.n * this.d, this.d * o.d); };
  Frac.prototype.mul = function (o) { return new Frac(this.n * o.n, this.d * o.d); };
  Frac.prototype.div = function (o) { return new Frac(this.n * o.d, this.d * o.n); };
  Frac.prototype.neg = function () { return new Frac(-this.n, this.d); };
  Frac.prototype.isZero = function () { return this.n === 0; };
  Frac.prototype.val = function () { return this.n / this.d; };
  Frac.prototype.toString = function () { return this.d === 1 ? String(this.n) : this.n + '/' + this.d; };
  Frac.prototype.html = function () {
    if (this.d === 1) return fmtInt(this.n);
    return (this.n < 0 ? '−' : '') + '<span class="fr"><span>' + Math.abs(this.n) + '</span><span>' + this.d + '</span></span>';
  };
  function fmtInt(n) { return n < 0 ? '−' + (-n) : String(n); }

  // Uzluksiz kasr orqali ratsional yaqinlashish
  function approxRational(x, maxDen) {
    if (!isFinite(x)) return null;
    var sign = x < 0 ? -1 : 1; x = Math.abs(x);
    var h1 = 1, h0 = 0, k1 = 0, k0 = 1, b = x;
    for (var i = 0; i < 40; i++) {
      var a = Math.floor(b);
      var h2 = a * h1 + h0, k2 = a * k1 + k0;
      if (k2 > maxDen) break;
      h0 = h1; h1 = h2; k0 = k1; k1 = k2;
      if (Math.abs(x - h1 / k1) < 1e-9 * Math.max(1, x)) return [sign * h1, k1];
      if (b - a < 1e-12) break;
      b = 1 / (b - a);
    }
    return Math.abs(x - h1 / k1) < 1e-9 * Math.max(1, x) ? [sign * h1, k1] : null;
  }

  // Sonni chiroyli ko'rsatish: butun, kasr, √ yoki o'nli
  function fmtNum(x) {
    if (!isFinite(x)) return x > 0 ? '∞' : x < 0 ? '−∞' : '—';
    if (Math.abs(x) < 1e-12) return '0';
    var f = Frac.from(x);
    if (f && f.d <= 100 && Math.abs(f.n) < 100000) return f.html();
    // π ga karrali sonlar: 0.5236 → π/6
    var fp = Frac.from(x / Math.PI);
    if (fp && fp.d <= 12 && Math.abs(fp.n) <= 200) return (fp.n < 0 ? '−' : '') + (Math.abs(fp.n) === 1 ? '' : Math.abs(fp.n)) + 'π' + (fp.d === 1 ? '' : '/' + fp.d);
    var r = +x.toPrecision(10);
    return (r < 0 ? '−' : '') + Math.abs(r);
  }

  // √n ni k√m ko'rinishiga keltirish
  function simplifyRoot(n) {
    var k = 1, m = n;
    for (var i = 2; i * i <= m; i++) while (m % (i * i) === 0) { m /= i * i; k *= i; }
    return { k: k, m: m };
  }

  // ---------- AST → ko'phad (koeffitsiyentlar massivi, c[i] = x^i oldidagi son) ----------
  function polyAdd(a, b) { var r = []; for (var i = 0; i < Math.max(a.length, b.length); i++) r[i] = (a[i] || 0) + (b[i] || 0); return r; }
  function polyMul(a, b) { var r = []; for (var i = 0; i < a.length; i++) for (var j = 0; j < b.length; j++) r[i + j] = (r[i + j] || 0) + a[i] * b[j]; for (var k = 0; k < r.length; k++) r[k] = r[k] || 0; return r; }
  function polyScale(a, s) { return a.map(function (c) { return c * s; }); }
  function trim(a) { a = a.map(function (c) { return Math.abs(c) < 1e-12 ? 0 : c; }); while (a.length > 1 && a[a.length - 1] === 0) a.pop(); return a; }

  function toPoly(node, v) {
    switch (node.k) {
      case 'num': return [node.v];
      case 'const': return [Expr.evaluate(node)];
      case 'var': return node.v === v ? [0, 1] : null;
      case 'neg': var p = toPoly(node.a, v); return p && polyScale(p, -1);
      case 'fn':
        if (Expr.variables(node.a)[v]) return null;
        return [Expr.evaluate(node)];
      case 'bin':
        var a = toPoly(node.a, v); if (!a) return null;
        if (node.op === '^') {
          if (Expr.variables(node.b)[v]) return null;
          var e = Expr.evaluate(node.b);
          if (trim(a).length === 1) return [Math.pow(a[0], e)];
          if (e < 0 || e !== Math.floor(e) || e > 12) return null;
          var r = [1]; for (var i = 0; i < e; i++) r = polyMul(r, a); return r;
        }
        var b = toPoly(node.b, v); if (!b) return null;
        if (node.op === '+') return polyAdd(a, b);
        if (node.op === '-') return polyAdd(a, polyScale(b, -1));
        if (node.op === '*') return polyMul(a, b);
        if (node.op === '/') { b = trim(b); if (b.length !== 1 || b[0] === 0) return null; return polyScale(a, 1 / b[0]); }
    }
    return null;
  }

  function polyHTML(c, v) {
    v = v || 'x';
    var parts = [];
    for (var i = c.length - 1; i >= 0; i--) {
      var a = c[i]; if (Math.abs(a) < 1e-12) continue;
      var abs = Math.abs(a), coef = fmtNum(abs);
      var term = i === 0 ? coef : (abs === 1 ? '' : coef) + '<i>' + v + '</i>' + (i > 1 ? '<sup>' + i + '</sup>' : '');
      parts.push({ s: a < 0 ? '−' : '+', t: term });
    }
    if (!parts.length) return '0';
    return parts.map(function (p, k) { return k === 0 ? (p.s === '−' ? '−' : '') + p.t : ' ' + p.s + ' ' + p.t; }).join('');
  }

  // ---------- Sonli ildiz qidirish ----------
  function numericRoots(f, lo, hi) {
    lo = lo === undefined ? -20 : lo; hi = hi === undefined ? 20 : hi;
    var roots = [];
    function push(r) {
      if (!isFinite(r)) return;
      for (var i = 0; i < roots.length; i++) if (Math.abs(roots[i] - r) < 1e-6 * Math.max(1, Math.abs(r))) return;
      roots.push(r);
    }
    function refine(a, b) {
      var fa = f(a);
      for (var i = 0; i < 200; i++) {
        var m = (a + b) / 2, fm = f(m);
        if (fm === 0 || (b - a) / 2 < 1e-14 * Math.max(1, Math.abs(m))) return m;
        if ((fm < 0) === (fa < 0)) { a = m; fa = fm; } else b = m;
      }
      return (a + b) / 2;
    }
    // Oraliq bo'ylab bir tekis to'r (har birlikka ~200 nuqta, jami ≤ 40000)
    var xs = [], n = Math.min(40000, Math.max(2000, Math.round((hi - lo) * 200)));
    for (var g = 0; g <= n; g++) xs.push(lo + (hi - lo) * g / n);
    var prevX = xs[0], prevY = f(prevX);
    var scale = 0; xs.forEach(function (x) { var y = Math.abs(f(x)); if (isFinite(y)) scale = Math.max(scale, Math.min(y, 1e6)); });
    var tol = 1e-7 * Math.max(1, scale);
    for (var i = 1; i < xs.length; i++) {
      var x = xs[i], y = f(x);
      if (isFinite(y) && isFinite(prevY)) {
        if (y === 0) push(x);
        else if ((y < 0) !== (prevY < 0) && prevY !== 0) {
          var r = refine(prevX, x), fr = Math.abs(f(r));
          if (fr < 1e-6 * Math.max(1, Math.abs(y), Math.abs(prevY)) || fr < 1e-9) push(r); // qutbni (1/x) ildiz deb olmaslik
        }
      }
      // Ildizga urinib o'tish (x²=0): |f| lokal minimum va juda kichik
      if (i < xs.length - 1) {
        var y2 = f(xs[i + 1]);
        if (isFinite(y) && Math.abs(y) < Math.abs(prevY) && Math.abs(y) <= Math.abs(y2) && (y > 0) === (prevY > 0) && (y > 0) === (y2 > 0)) {
          var m = goldenMin(function (t) { return Math.abs(f(t)); }, prevX, xs[i + 1]);
          if (Math.abs(f(m)) < tol) push(m);
        }
      }
      prevX = x; prevY = y;
    }
    return roots.map(clean).sort(function (a, b) { return a - b; });
  }
  function goldenMin(g, a, b) {
    var r = (Math.sqrt(5) - 1) / 2, c = b - r * (b - a), d = a + r * (b - a);
    for (var i = 0; i < 100; i++) { if (g(c) < g(d)) b = d; else a = c; c = b - r * (b - a); d = a + r * (b - a); }
    return (a + b) / 2;
  }
  function clean(x) {
    var rx = Math.round(x);
    if (Math.abs(x - rx) < 1e-9) return rx;
    var f = Frac.from(x); if (f && f.d <= 100 && Math.abs(f.val() - x) < 1e-10) return f.val();
    return x;
  }

  // ---------- Tenglamani yechish (qadamlar bilan) ----------
  // T — tarjima funksiyasi (kalit → matn), bo'lmasa kalitning o'zi
  function solveEquation(input, T, opts) {
    opts = opts || {};
    T = T || function (k) { return k; };
    var src = String(input).trim();
    var sides = src.split('=');
    if (sides.length > 2) throw new Error(T('err.manyEq'));
    var lhs = Expr.parse(sides[0]), rhs = Expr.parse(sides.length === 2 ? sides[1] : '0');
    var vars = Object.keys(Object.assign(Expr.variables(lhs), Expr.variables(rhs)));
    if (vars.length > 1) throw new Error(T('err.manyVar') + ' ' + vars.join(', '));
    var v = vars[0] || 'x';
    var diff = { k: 'bin', op: '-', a: lhs, b: rhs };
    var f = function (x) { var s = {}; s[v] = x; try { return Expr.evaluate(diff, s); } catch (e) { return NaN; } };
    var steps = [], roots = [], kind = 'numeric', exact = [];

    steps.push({ t: T('st.given'), m: Expr.toHTML(lhs) + ' = ' + Expr.toHTML(rhs) });
    var p = toPoly(diff, v);
    if (p) {
      p = trim(p);
      var deg = p.length - 1;
      steps.push({ t: T('st.standard'), m: polyHTML(p, v) + ' = 0' });
      if (deg === 0) {
        kind = 'const';
        steps.push({ t: Math.abs(p[0]) < 1e-12 ? T('st.identity') : T('st.noSolution'), m: '' });
        return { v: v, kind: Math.abs(p[0]) < 1e-12 ? 'all' : 'none', roots: [], exact: [], steps: steps, f: f };
      }
      if (deg === 1) {
        kind = 'linear';
        var a = p[1], b = p[0];
        steps.push({ t: T('st.moveB'), m: fmtNum(a) + '<i>' + v + '</i> = ' + fmtNum(-b) });
        steps.push({ t: T('st.divideA'), m: '<i>' + v + '</i> = ' + fmtNum(-b) + ' : ' + (a < 0 ? '(' + fmtNum(a) + ')' : fmtNum(a)) + ' = ' + fmtNum(-b / a) });
        roots = [clean(-b / a)]; exact = [fmtNum(-b / a)];
      } else if (deg === 2) {
        kind = 'quadratic';
        var A = p[2], B = p[1], C = p[0], D = B * B - 4 * A * C;
        steps.push({ t: T('st.coeffs'), m: 'a = ' + fmtNum(A) + ', b = ' + fmtNum(B) + ', c = ' + fmtNum(C) });
        steps.push({ t: T('st.disc'), m: 'D = b² − 4ac = ' + par(B) + '² − 4·' + par(A) + '·' + par(C) + ' = ' + fmtNum(D) });
        if (Math.abs(D) < 1e-12) {
          var r0 = -B / (2 * A);
          steps.push({ t: T('st.d0'), m: '<i>' + v + '</i> = −b / 2a = ' + fmtNum(r0) });
          roots = [clean(r0)]; exact = [fmtNum(r0)];
        } else if (D < 0) {
          var re = -B / (2 * A), im = Math.sqrt(-D) / (2 * Math.abs(A));
          steps.push({ t: T('st.dneg'), m: '<i>' + v + '</i><sub>1,2</sub> = ' + fmtNum(re) + ' ± ' + fmtNum(im) + '<i>i</i>' });
          kind = 'complex';
          exact = [fmtNum(re) + ' + ' + fmtNum(im) + 'i', fmtNum(re) + ' − ' + fmtNum(im) + 'i'];
        } else {
          steps.push({ t: T('st.dpos'), m: '<i>' + v + '</i><sub>1,2</sub> = (−b ± √D) / 2a' });
          var x1 = (-B - Math.sqrt(D)) / (2 * A), x2 = (-B + Math.sqrt(D)) / (2 * A);
          var ex = exactQuadratic(A, B, D);
          steps.push({ t: '', m: '<i>' + v + '</i><sub>1</sub> = ' + ex[0] + (ex.approx ? ' ≈ ' + round4(Math.min(x1, x2)) : '') + ', &nbsp; <i>' + v + '</i><sub>2</sub> = ' + ex[1] + (ex.approx ? ' ≈ ' + round4(Math.max(x1, x2)) : '') });
          roots = [clean(Math.min(x1, x2)), clean(Math.max(x1, x2))]; exact = ex.slice(0, 2);
          steps.push({ t: T('st.vieta'), m: '<i>' + v + '</i><sub>1</sub> + <i>' + v + '</i><sub>2</sub> = −b/a = ' + fmtNum(-B / A) + ', &nbsp; <i>' + v + '</i><sub>1</sub>·<i>' + v + '</i><sub>2</sub> = c/a = ' + fmtNum(C / A) });
        }
      } else {
        kind = 'poly';
        steps.push({ t: T('st.polyN').replace('{n}', deg), m: '' });
        var bound = 1; for (var q = 0; q < deg; q++) bound = Math.max(bound, 1 + Math.abs(p[q] / p[deg]));
        roots = numericRoots(f, -bound - 1, bound + 1);
        exact = roots.map(fmtNum);
      }
    } else {
      roots = numericRoots(f, opts.lo, opts.hi);
      exact = roots.map(fmtNum);
      steps.push({ t: T('st.numeric').replace('{a}', opts.lo === undefined ? -20 : opts.lo).replace('{b}', opts.hi === undefined ? 20 : opts.hi), m: '' });
    }
    if (kind !== 'complex' && kind !== 'linear' && kind !== 'quadratic') {
      steps.push({ t: roots.length ? T('st.found') : T('st.noReal'), m: roots.map(function (r, i) { return '<i>' + v + '</i><sub>' + (i + 1) + '</sub> = ' + exact[i]; }).join(', &nbsp; ') });
    }
    // Tekshirish
    roots.forEach(function (r) {
      var s = {}; s[v] = r;
      var l = Expr.evaluate(lhs, s), rr = Expr.evaluate(rhs, s);
      steps.push({ t: T('st.check'), m: '<i>' + v + '</i> = ' + fmtNum(r) + ': &nbsp;' + round4(l) + ' = ' + round4(rr) + ' ✓', check: true });
    });
    return { v: v, kind: kind, roots: roots, exact: exact, steps: steps, f: f };
  }
  function par(x) { return x < 0 ? '(' + fmtNum(x) + ')' : fmtNum(x); }
  function round4(x) { var r = Math.round(x * 1e4) / 1e4; return (r < 0 ? '−' : '') + Math.abs(r); }

  // (−b ± √D)/2a ni aniq ko'rinishda (masalan (3 ± 2√5)/4)
  function exactQuadratic(A, B, D) {
    var sq = Math.sqrt(D);
    if (Math.abs(sq - Math.round(sq)) < 1e-9 || !Number.isInteger(D) || !Number.isInteger(A) || !Number.isInteger(B)) {
      var x1 = (-B - sq) / (2 * A), x2 = (-B + sq) / (2 * A);
      var lo = Math.min(x1, x2), hi = Math.max(x1, x2);
      var r = [fmtNum(lo), fmtNum(hi)];
      r.approx = !Frac.from(lo) || Frac.from(lo).d > 1000;
      return r;
    }
    var s = simplifyRoot(D), den = 2 * A, k = s.k, nb = -B;
    var g = gcd(gcd(nb, k), den);
    nb /= g; k /= g; den /= g;
    if (den < 0) { den = -den; nb = -nb; }
    var rad = (k === 1 ? '' : k) + '√' + s.m;
    function one(sign) {
      var top = (nb === 0 ? (sign === '−' ? '−' : '') + rad : fmtInt(nb) + ' ' + sign + ' ' + rad);
      return den === 1 ? top : '(' + top + ')/' + den;
    }
    var res = [one('−'), one('+')]; res.approx = true;
    return res;
  }

  // ---------- Chiziqli sistema: Gauss usuli (kasrlar bilan) ----------
  // M — n×(n+1) kengaytirilgan matritsa (sonlar)
  function solveLinearSystem(M) {
    var n = M.length, A = M.map(function (row) { return row.map(function (x) { return Frac.from(x) || new Frac(Math.round(x * 1e6), 1e6); }); });
    var steps = [snapshot(A, null)];
    var rank = 0, pivCols = [];
    for (var col = 0; col < n && rank < n; col++) {
      var piv = -1;
      for (var r = rank; r < n; r++) if (!A[r][col].isZero()) { piv = r; break; }
      if (piv < 0) continue;
      if (piv !== rank) { var tmp = A[piv]; A[piv] = A[rank]; A[rank] = tmp; steps.push(snapshot(A, { swap: [rank + 1, piv + 1] })); }
      var pv = A[rank][col];
      if (!(pv.n === 1 && pv.d === 1)) { A[rank] = A[rank].map(function (x) { return x.div(pv); }); steps.push(snapshot(A, { scale: [rank + 1, pv] })); }
      for (var r2 = 0; r2 < n; r2++) {
        if (r2 === rank || A[r2][col].isZero()) continue;
        var fct = A[r2][col];
        A[r2] = A[r2].map(function (x, j) { return x.sub(fct.mul(A[rank][j])); });
        steps.push(snapshot(A, { elim: [r2 + 1, fct, rank + 1] }));
      }
      pivCols.push(col); rank++;
    }
    // Ziddiyat: 0 = c (c ≠ 0)
    for (var r3 = rank; r3 < n; r3++) if (!A[r3][n].isZero()) return { status: 'none', steps: steps };
    if (rank < n) return { status: 'infinite', steps: steps, rank: rank };
    return { status: 'unique', x: A.map(function (row) { return row[n]; }), steps: steps };
  }
  function snapshot(A, op) { return { op: op, M: A.map(function (r) { return r.slice(); }) }; }

  function det(M) {
    var n = M.length, A = M.map(function (r) { return r.map(function (x) { return Frac.from(x); }); }), d = new Frac(1);
    for (var c = 0; c < n; c++) {
      var p = -1; for (var r = c; r < n; r++) if (!A[r][c].isZero()) { p = r; break; }
      if (p < 0) return new Frac(0);
      if (p !== c) { var t = A[p]; A[p] = A[c]; A[c] = t; d = d.neg(); }
      d = d.mul(A[c][c]);
      for (var r2 = c + 1; r2 < n; r2++) { var f = A[r2][c].div(A[c][c]); A[r2] = A[r2].map(function (x, j) { return x.sub(f.mul(A[c][j])); }); }
    }
    return d;
  }

  var api = { Frac: Frac, fmtNum: fmtNum, toPoly: toPoly, trim: trim, polyHTML: polyHTML, numericRoots: numericRoots, solveEquation: solveEquation, solveLinearSystem: solveLinearSystem, det: det, simplifyRoot: simplifyRoot, approxRational: approxRational, gcd: gcd };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.Solver = api;
})(this);
