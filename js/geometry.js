// Nuvemath — jonli geometrik chizma: uchburchak (mediana, balandlik, bissektrisa, tashqi/ichki aylana, Eyler chizig'i),
// aylana (vatar, markaziy va ichki chizilgan burchak), to'rtburchak (turini aniqlash), koordinatalar (masofa, o'rta nuqta, tenglama).
(function (root) {
  'use strict';
  var MODES = ['triangle', 'circle', 'quad', 'coord'];
  var DEFAULTS = {
    triangle: [{ x: -4, y: -2.5 }, { x: 4.5, y: -2.5 }, { x: 1, y: 4 }],
    circle: [{ x: 0, y: 0 }, { x: 4, y: 0 }, { x: -2, y: 3.46 }, { x: 2.5, y: -3.12 }, { x: -3.6, y: -1.7 }],
    quad: [{ x: -4, y: -3 }, { x: 4, y: -3 }, { x: 5, y: 3 }, { x: -3, y: 3 }],
    coord: [{ x: -3, y: -2 }, { x: 4, y: 3 }]
  };
  var LABELS = { triangle: ['A', 'B', 'C'], circle: ['O', 'P', 'A', 'B', 'M'], quad: ['A', 'B', 'C', 'D'], coord: ['A', 'B'] };
  var st = { mode: 'triangle', pts: {}, opts: { median: false, alt: false, bis: false, circum: true, incircle: false, euler: false, grid: true, snap: false }, scale: 40, drag: -1, hover: -1 };
  MODES.forEach(function (m) { st.pts[m] = DEFAULTS[m].map(function (p) { return { x: p.x, y: p.y }; }); });

  var cv, ctx, infoEl, dpr = 1;
  var V = {
    sub: function (a, b) { return { x: a.x - b.x, y: a.y - b.y }; }, add: function (a, b) { return { x: a.x + b.x, y: a.y + b.y }; },
    mul: function (a, k) { return { x: a.x * k, y: a.y * k }; }, dot: function (a, b) { return a.x * b.x + a.y * b.y; },
    cross: function (a, b) { return a.x * b.y - a.y * b.x; }, len: function (a) { return Math.hypot(a.x, a.y); },
    dist: function (a, b) { return Math.hypot(a.x - b.x, a.y - b.y); }, mid: function (a, b) { return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }; }
  };
  function angleAt(p, a, b) { var u = V.sub(a, p), v = V.sub(b, p); return Math.acos(Math.max(-1, Math.min(1, V.dot(u, v) / (V.len(u) * V.len(v))))) * 180 / Math.PI; }
  function foot(p, a, b) { var d = V.sub(b, a), t = V.dot(V.sub(p, a), d) / V.dot(d, d); return V.add(a, V.mul(d, t)); }
  function circumcenter(A, B, C) {
    var d = 2 * (A.x * (B.y - C.y) + B.x * (C.y - A.y) + C.x * (A.y - B.y));
    if (Math.abs(d) < 1e-12) return null;
    var a2 = A.x * A.x + A.y * A.y, b2 = B.x * B.x + B.y * B.y, c2 = C.x * C.x + C.y * C.y;
    return { x: (a2 * (B.y - C.y) + b2 * (C.y - A.y) + c2 * (A.y - B.y)) / d, y: (a2 * (C.x - B.x) + b2 * (A.x - C.x) + c2 * (B.x - A.x)) / d };
  }
  function lineInter(p1, p2, p3, p4) {
    var d = (p1.x - p2.x) * (p3.y - p4.y) - (p1.y - p2.y) * (p3.x - p4.x); if (Math.abs(d) < 1e-12) return null;
    var t = ((p1.x - p3.x) * (p3.y - p4.y) - (p1.y - p3.y) * (p3.x - p4.x)) / d;
    return { x: p1.x + t * (p2.x - p1.x), y: p1.y + t * (p2.y - p1.y) };
  }
  function n2(v) { return (Math.round(v * 100) / 100).toString().replace('-', '−'); }

  // ---------- Chizish ----------
  function W() { return cv.width / dpr; } function H() { return cv.height / dpr; }
  function sx(x) { return W() / 2 + x * st.scale; } function sy(y) { return H() / 2 - y * st.scale; }
  function wx(px) { return (px - W() / 2) / st.scale; } function wy(py) { return (H() / 2 - py) / st.scale; }
  function P(p) { return [sx(p.x), sy(p.y)]; }
  function css(v) { return getComputedStyle(document.documentElement).getPropertyValue(v).trim(); }

  function line(a, b, color, w, dash) { ctx.strokeStyle = color; ctx.lineWidth = w || 1.6; ctx.setLineDash(dash || []); ctx.beginPath(); ctx.moveTo(sx(a.x), sy(a.y)); ctx.lineTo(sx(b.x), sy(b.y)); ctx.stroke(); ctx.setLineDash([]); }
  function infLine(a, b, color, w, dash) { var d = V.sub(b, a), L = 1000 / Math.max(V.len(d), 1e-9); line(V.add(a, V.mul(d, -L)), V.add(a, V.mul(d, L)), color, w, dash); }
  function circle(c, r, color, w, dash, fill) { ctx.beginPath(); ctx.arc(sx(c.x), sy(c.y), r * st.scale, 0, Math.PI * 2); if (fill) { ctx.fillStyle = fill; ctx.fill(); } ctx.strokeStyle = color; ctx.lineWidth = w || 1.6; ctx.setLineDash(dash || []); ctx.stroke(); ctx.setLineDash([]); }
  function dot(p, color, r) { ctx.beginPath(); ctx.arc(sx(p.x), sy(p.y), r || 3.5, 0, 7); ctx.fillStyle = color; ctx.fill(); }
  function label(p, text, color, dx, dy) { ctx.font = '600 13px "Space Grotesk", system-ui, sans-serif'; ctx.fillStyle = color || css('--text') || '#e8eeff'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(text, sx(p.x) + (dx || 0), sy(p.y) + (dy || 0)); }
  function arcAngle(p, a, b, color, text) {
    var a1 = Math.atan2(-(a.y - p.y), a.x - p.x), a2 = Math.atan2(-(b.y - p.y), b.x - p.x);
    var diff = a2 - a1; while (diff > Math.PI) diff -= 2 * Math.PI; while (diff < -Math.PI) diff += 2 * Math.PI;
    var deg = Math.abs(diff) * 180 / Math.PI, R = 26;
    ctx.beginPath();
    if (Math.abs(deg - 90) < 0.05) { // to'g'ri burchak belgisi
      var u = V.mul(V.sub(a, p), 14 / st.scale / V.dist(a, p)), v = V.mul(V.sub(b, p), 14 / st.scale / V.dist(b, p));
      var q1 = V.add(p, u), q2 = V.add(V.add(p, u), v), q3 = V.add(p, v);
      ctx.moveTo(sx(q1.x), sy(q1.y)); ctx.lineTo(sx(q2.x), sy(q2.y)); ctx.lineTo(sx(q3.x), sy(q3.y));
    } else { ctx.moveTo(sx(p.x), sy(p.y)); ctx.arc(sx(p.x), sy(p.y), R, a1, a1 + diff, diff < 0); ctx.closePath(); ctx.fillStyle = color + '33'; ctx.fill(); }
    ctx.strokeStyle = color; ctx.lineWidth = 1.4; ctx.stroke();
    if (text) {
      var mid = a1 + diff / 2;
      ctx.font = '600 11px "IBM Plex Mono", monospace'; ctx.fillStyle = color; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(text, sx(p.x) + Math.cos(mid) * (R + 18), sy(p.y) + Math.sin(mid) * (R + 18));
    }
  }

  function grid() {
    var w = W(), h = H();
    ctx.fillStyle = css('--plot-bg') || '#0b1022'; ctx.fillRect(0, 0, w, h);
    if (!st.opts.grid) return;
    ctx.strokeStyle = css('--grid') || 'rgba(255,255,255,.08)'; ctx.lineWidth = 1; ctx.beginPath();
    for (var x = Math.ceil(wx(0)); x <= wx(w); x++) { ctx.moveTo(Math.round(sx(x)) + .5, 0); ctx.lineTo(Math.round(sx(x)) + .5, h); }
    for (var y = Math.ceil(wy(h)); y <= wy(0); y++) { ctx.moveTo(0, Math.round(sy(y)) + .5); ctx.lineTo(w, Math.round(sy(y)) + .5); }
    ctx.stroke();
    ctx.strokeStyle = css('--axis') || 'rgba(220,230,255,.45)'; ctx.lineWidth = 1.2; ctx.beginPath();
    ctx.moveTo(0, sy(0)); ctx.lineTo(w, sy(0)); ctx.moveTo(sx(0), 0); ctx.lineTo(sx(0), h); ctx.stroke();
    ctx.fillStyle = css('--muted') || '#8a96b8'; ctx.font = '10px "IBM Plex Mono", monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'top';
    var step = st.scale < 30 ? 2 : 1;
    for (x = Math.ceil(wx(0) / step) * step; x <= wx(w); x += step) if (x) ctx.fillText(String(x).replace('-', '−'), sx(x), sy(0) + 3);
    ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
    for (y = Math.ceil(wy(h) / step) * step; y <= wy(0); y += step) if (y) ctx.fillText(String(y).replace('-', '−'), sx(0) - 4, sy(y));
  }

  var C = { main: '#5b9dff', med: '#3ddc97', alt: '#ffb547', bis: '#b48cff', circ: '#ff6b8b', inc: '#3fd0e0', euler: '#ffffff', pt: '#e8eeff' };

  function draw() {
    if (!cv) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    grid();
    var info = ({ triangle: drawTriangle, circle: drawCircle, quad: drawQuad, coord: drawCoord })[st.mode]();
    // nuqtalar
    st.pts[st.mode].forEach(function (p, i) {
      var hot = i === st.drag || i === st.hover;
      ctx.beginPath(); ctx.arc(sx(p.x), sy(p.y), hot ? 9 : 7, 0, 7); ctx.fillStyle = hot ? '#ffffff' : C.main; ctx.fill();
      ctx.lineWidth = 2.5; ctx.strokeStyle = css('--plot-bg') || '#0b1022'; ctx.stroke();
      var c = centroid(), d = V.sub(p, c), L = V.len(d) || 1;
      label({ x: p.x + d.x / L * 0.55, y: p.y + d.y / L * 0.55 }, LABELS[st.mode][i]);
    });
    infoEl.innerHTML = info;
  }
  function centroid() { var ps = st.pts[st.mode], s = { x: 0, y: 0 }; ps.forEach(function (p) { s.x += p.x; s.y += p.y; }); return { x: s.x / ps.length, y: s.y / ps.length }; }
  function row(k, v) { return '<div class="kv"><span>' + k + '</span><b>' + v + '</b></div>'; }

  function drawTriangle() {
    var p = st.pts.triangle, A = p[0], B = p[1], Cc = p[2], o = st.opts;
    var a = V.dist(B, Cc), b = V.dist(A, Cc), c = V.dist(A, B);
    var area = Math.abs(V.cross(V.sub(B, A), V.sub(Cc, A))) / 2, per = a + b + c, s = per / 2;
    var angA = angleAt(A, B, Cc), angB = angleAt(B, A, Cc), angC = angleAt(Cc, A, B);
    ctx.beginPath(); ctx.moveTo.apply(ctx, P(A)); ctx.lineTo.apply(ctx, P(B)); ctx.lineTo.apply(ctx, P(Cc)); ctx.closePath();
    ctx.fillStyle = 'rgba(91,157,255,.10)'; ctx.fill(); ctx.strokeStyle = C.main; ctx.lineWidth = 2.2; ctx.stroke();
    arcAngle(A, B, Cc, css('--accent'), n2(angA) + '°'); arcAngle(B, Cc, A, css('--accent'), n2(angB) + '°'); arcAngle(Cc, A, B, css('--accent'), n2(angC) + '°');
    var G = { x: (A.x + B.x + Cc.x) / 3, y: (A.y + B.y + Cc.y) / 3 }, O = circumcenter(A, B, Cc), R = O ? V.dist(O, A) : 0;
    var I = { x: (a * A.x + b * B.x + c * Cc.x) / per, y: (a * A.y + b * B.y + c * Cc.y) / per }, r = area / s;
    var Hh = lineInter(A, foot(A, B, Cc), B, foot(B, A, Cc));
    if (o.median) { [[A, V.mid(B, Cc)], [B, V.mid(A, Cc)], [Cc, V.mid(A, B)]].forEach(function (q) { line(q[0], q[1], C.med, 1.6); dot(q[1], C.med); }); dot(G, C.med, 5); label(G, 'G', C.med, 12, -10); }
    if (o.alt) {
      [[A, B, Cc], [B, A, Cc], [Cc, A, B]].forEach(function (q) { var f = foot(q[0], q[1], q[2]); line(q[0], f, C.alt, 1.6); line(q[1], f, C.alt, 1, [3, 4]); line(q[2], f, C.alt, 1, [3, 4]); dot(f, C.alt); });
      if (Hh) { dot(Hh, C.alt, 5); label(Hh, 'H', C.alt, 12, -10); }
    }
    if (o.bis) {
      [[A, B, Cc, a, b, c], [B, A, Cc, b, a, c], [Cc, A, B, c, a, b]].forEach(function (q) {
        // bissektrisa qarama-qarshi tomonni yon tomonlarga proporsional bo'ladi
        var P1 = q[1], P2 = q[2], s1 = V.dist(q[0], P1), s2 = V.dist(q[0], P2), D = V.add(P1, V.mul(V.sub(P2, P1), s1 / (s1 + s2)));
        line(q[0], D, C.bis, 1.6); dot(D, C.bis);
      });
      dot(I, C.bis, 5);
    }
    if (o.circum && O) { circle(O, R, C.circ, 1.6, [6, 5]); dot(O, C.circ, 5); label(O, 'O', C.circ, 12, -10); }
    if (o.incircle) { circle(I, r, C.inc, 1.6); dot(I, C.inc, 5); label(I, 'I', C.inc, 12, -10); }
    if (o.euler && O && Hh && V.dist(O, Hh) > 1e-6) { infLine(O, Hh, css('--axis'), 1.2, [8, 6]); dot(G, C.med, 4.5); dot(O, C.circ, 4.5); dot(Hh, C.alt, 4.5); }

    var mx = Math.max(angA, angB, angC), eps = 0.05;
    var kind = Math.abs(mx - 90) < eps ? T('geo.right') : mx > 90 ? T('geo.obtuse') : T('geo.acute');
    var tol = 1e-3 * per, sides = Math.abs(a - b) < tol && Math.abs(b - c) < tol ? T('geo.equi') : (Math.abs(a - b) < tol || Math.abs(b - c) < tol || Math.abs(a - c) < tol) ? T('geo.iso') : T('geo.scal');
    var srt = [a, b, c].sort(function (x, y) { return x - y; });
    var html = '<h4>' + T('geo.triangle') + ' ABC</h4>' +
      row(T('geo.type'), kind + ', ' + sides) +
      row(T('geo.sides'), 'a = ' + n2(a) + ', b = ' + n2(b) + ', c = ' + n2(c)) +
      row(T('geo.angles'), '∠A = ' + n2(angA) + '°, ∠B = ' + n2(angB) + '°, ∠C = ' + n2(angC) + '°') +
      row(T('geo.sum'), n2(angA + angB + angC) + '°') +
      row(T('geo.perim'), 'P = ' + n2(per)) +
      row(T('geo.area'), 'S = ' + n2(area) + ' <span class="muted">(Geron: √(p(p−a)(p−b)(p−c)) = ' + n2(Math.sqrt(Math.max(0, s * (s - a) * (s - b) * (s - c)))) + ')</span>') +
      row(T('geo.R'), 'R = abc / 4S = ' + n2(R)) +
      row(T('geo.r'), 'r = S / p = ' + n2(r));
    if (Math.abs(mx - 90) < eps) html += row(T('geo.pyth'), n2(srt[0]) + '² + ' + n2(srt[1]) + '² = ' + n2(srt[0] * srt[0] + srt[1] * srt[1]) + ' ≈ ' + n2(srt[2]) + '² = ' + n2(srt[2] * srt[2]));
    return html;
  }

  function drawCircle() {
    var p = st.pts.circle, O = p[0], R = V.dist(O, p[1]);
    // A, B, M nuqtalarini aylanaga proyeksiyalaymiz
    for (var i = 2; i < 5; i++) { var d = V.sub(p[i], O), L = V.len(d) || 1; p[i] = V.add(O, V.mul(d, R / L)); }
    var A = p[2], B = p[3], M = p[4];
    circle(O, R, C.main, 2.2, null, 'rgba(91,157,255,.08)');
    line(O, p[1], C.main, 1.4, [5, 4]); label(V.mid(O, p[1]), 'R', C.main, 0, -12);
    line(A, B, C.circ, 2); line(O, A, C.inc, 1.6); line(O, B, C.inc, 1.6); line(M, A, C.med, 1.6); line(M, B, C.med, 1.6);
    var central = angleAt(O, A, B);
    // M qaysi yoyda: agar M va O vatarning bir tomonida bo'lsa ichki burchak = markaziy/2, aks holda 180 − markaziy/2
    var inscribed = angleAt(M, A, B);
    var sameSide = V.cross(V.sub(B, A), V.sub(M, A)) * V.cross(V.sub(B, A), V.sub(O, A)) > 0;
    var centralArc = sameSide ? central : 360 - central;
    arcAngle(O, A, B, C.inc, n2(central) + '°'); arcAngle(M, A, B, C.med, n2(inscribed) + '°');
    dot(O, css('--text'), 4);
    return '<h4>' + T('geo.circle') + '</h4>' +
      row(T('geo.radius'), 'R = ' + n2(R)) +
      row(T('geo.circ'), 'C = 2πR = ' + n2(2 * Math.PI * R)) +
      row(T('geo.area'), 'S = πR² = ' + n2(Math.PI * R * R)) +
      row(T('geo.chord') + ' AB', n2(V.dist(A, B)) + ' = 2R·sin(∠AOB/2) = ' + n2(2 * R * Math.sin(central * Math.PI / 360))) +
      row(T('geo.central') + ' ∠AOB', n2(central) + '°') +
      row(T('geo.inscribed') + ' ∠AMB', n2(inscribed) + '° = ' + n2(centralArc) + '° / 2' + (sameSide ? '' : ' <span class="muted">(360° − ∠AOB)</span>'));
  }

  function drawQuad() {
    var p = st.pts.quad, A = p[0], B = p[1], Cq = p[2], D = p[3];
    ctx.beginPath(); ctx.moveTo.apply(ctx, P(A)); ctx.lineTo.apply(ctx, P(B)); ctx.lineTo.apply(ctx, P(Cq)); ctx.lineTo.apply(ctx, P(D)); ctx.closePath();
    ctx.fillStyle = 'rgba(91,157,255,.10)'; ctx.fill(); ctx.strokeStyle = C.main; ctx.lineWidth = 2.2; ctx.stroke();
    line(A, Cq, C.alt, 1.4, [6, 5]); line(B, D, C.alt, 1.4, [6, 5]);
    var X = lineInter(A, Cq, B, D); if (X) dot(X, C.alt, 4);
    var s = [V.dist(A, B), V.dist(B, Cq), V.dist(Cq, D), V.dist(D, A)];
    var angs = [angleAt(A, D, B), angleAt(B, A, Cq), angleAt(Cq, B, D), angleAt(D, Cq, A)];
    [[A, D, B], [B, A, Cq], [Cq, B, D], [D, Cq, A]].forEach(function (q, i) { arcAngle(q[0], q[1], q[2], css('--accent'), n2(angs[i]) + '°'); });
    var crosses = [V.cross(V.sub(B, A), V.sub(Cq, B)), V.cross(V.sub(Cq, B), V.sub(D, Cq)), V.cross(V.sub(D, Cq), V.sub(A, D)), V.cross(V.sub(A, D), V.sub(B, A))];
    var convex = crosses.every(function (c) { return c > 0; }) || crosses.every(function (c) { return c < 0; });
    var area = Math.abs((A.x * B.y - B.x * A.y) + (B.x * Cq.y - Cq.x * B.y) + (Cq.x * D.y - D.x * Cq.y) + (D.x * A.y - A.x * D.y)) / 2;
    var tol = 0.01 * (s[0] + s[1] + s[2] + s[3]) / 4;
    function par(a1, a2, b1, b2) { return Math.abs(V.cross(V.sub(a2, a1), V.sub(b2, b1))) < 0.01 * V.dist(a1, a2) * V.dist(b1, b2); }
    var p1 = par(A, B, D, Cq), p2 = par(B, Cq, A, D), eqS = Math.abs(s[0] - s[1]) < tol && Math.abs(s[1] - s[2]) < tol && Math.abs(s[2] - s[3]) < tol;
    var right = angs.every(function (x) { return Math.abs(x - 90) < 0.5; });
    var type = !convex ? T('geo.generic') : p1 && p2 ? (eqS && right ? T('geo.square') : right ? T('geo.rect') : eqS ? T('geo.rhombus') : T('geo.para')) : (p1 || p2) ? T('geo.trap') : T('geo.generic');
    return '<h4>' + T('geo.quad') + ' ABCD</h4>' +
      row(T('geo.quadType'), type + ' (' + (convex ? T('geo.convex') : T('geo.concave')) + ')') +
      row(T('geo.sides'), 'AB = ' + n2(s[0]) + ', BC = ' + n2(s[1]) + ', CD = ' + n2(s[2]) + ', DA = ' + n2(s[3])) +
      row(T('geo.angles'), angs.map(function (x, i) { return '∠' + 'ABCD'[i] + ' = ' + n2(x) + '°'; }).join(', ')) +
      row(T('geo.sum'), n2(angs[0] + angs[1] + angs[2] + angs[3]) + '°') +
      row(T('geo.diag'), 'AC = ' + n2(V.dist(A, Cq)) + ', BD = ' + n2(V.dist(B, D))) +
      row(T('geo.perim'), n2(s[0] + s[1] + s[2] + s[3])) +
      row(T('geo.area'), n2(area) + ' <span class="muted">(Gauss)</span>');
  }

  function drawCoord() {
    var p = st.pts.coord, A = p[0], B = p[1], M = V.mid(A, B);
    infLine(A, B, 'rgba(91,157,255,.35)', 1.2);
    line(A, B, C.main, 2.4);
    line(A, { x: B.x, y: A.y }, C.alt, 1.3, [5, 4]); line({ x: B.x, y: A.y }, B, C.alt, 1.3, [5, 4]);
    label({ x: (A.x + B.x) / 2, y: A.y }, 'Δx = ' + n2(B.x - A.x), C.alt, 0, 14);
    label({ x: B.x, y: (A.y + B.y) / 2 }, 'Δy = ' + n2(B.y - A.y), C.alt, 38, 0);
    dot(M, C.med, 5); label(M, 'M', C.med, -12, -12);
    var dx = B.x - A.x, dy = B.y - A.y, eq;
    if (Math.abs(dx) < 1e-9) eq = 'x = ' + n2(A.x);
    else { var k = dy / dx, bb = A.y - k * A.x; eq = 'y = ' + n2(k) + 'x ' + (bb < 0 ? '− ' + n2(-bb) : '+ ' + n2(bb)); }
    return '<h4>' + T('geo.coord') + '</h4>' +
      row('A', '(' + n2(A.x) + '; ' + n2(A.y) + ')') + row('B', '(' + n2(B.x) + '; ' + n2(B.y) + ')') +
      row(T('geo.dist') + ' AB', '√(Δx² + Δy²) = √(' + n2(dx * dx) + ' + ' + n2(dy * dy) + ') = ' + n2(Math.hypot(dx, dy))) +
      row(T('geo.mid') + ' M', '((x₁+x₂)/2; (y₁+y₂)/2) = (' + n2(M.x) + '; ' + n2(M.y) + ')') +
      row(T('geo.slope'), Math.abs(dx) < 1e-9 ? '∞' : 'k = Δy/Δx = ' + n2(dy / dx) + ' (' + n2(Math.atan2(dy, dx) * 180 / Math.PI) + '°)') +
      row(T('geo.lineEq'), eq);
  }

  // ---------- Sudrash ----------
  function hit(px, py) {
    var ps = st.pts[st.mode];
    for (var i = ps.length - 1; i >= 0; i--) if (Math.hypot(sx(ps[i].x) - px, sy(ps[i].y) - py) < 16) return i;
    return -1;
  }
  function bind() {
    cv.addEventListener('pointerdown', function (e) {
      var r = cv.getBoundingClientRect(), i = hit(e.clientX - r.left, e.clientY - r.top);
      if (i >= 0) { st.drag = i; cv.setPointerCapture(e.pointerId); e.preventDefault(); draw(); }
    });
    cv.addEventListener('pointermove', function (e) {
      var r = cv.getBoundingClientRect(), px = e.clientX - r.left, py = e.clientY - r.top;
      if (st.drag >= 0) {
        var x = wx(px), y = wy(py);
        if (st.opts.snap) { x = Math.round(x * 2) / 2; y = Math.round(y * 2) / 2; }
        x = Math.max(wx(8), Math.min(wx(W() - 8), x)); y = Math.max(wy(H() - 8), Math.min(wy(8), y));
        var ps = st.pts[st.mode];
        // circle rejimida markazni sursak, butun shakl birga suriladi
        if (st.mode === 'circle' && st.drag === 0) { var dx = x - ps[0].x, dy = y - ps[0].y; ps.forEach(function (q) { q.x += dx; q.y += dy; }); }
        else { ps[st.drag].x = x; ps[st.drag].y = y; }
        draw();
      } else {
        var h = hit(px, py); if (h !== st.hover) { st.hover = h; cv.style.cursor = h >= 0 ? 'grab' : 'default'; draw(); }
      }
    });
    function up() { if (st.drag >= 0) { st.drag = -1; draw(); } }
    cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up);
    cv.addEventListener('wheel', function (e) { e.preventDefault(); st.scale = Math.max(15, Math.min(120, st.scale * Math.exp(-e.deltaY * 0.001))); draw(); }, { passive: false });
    if (root.ResizeObserver) new ResizeObserver(resize).observe(cv.parentElement);
    window.addEventListener('resize', resize);
  }
  function resize() {
    if (!cv || !cv.isConnected) return;
    var r = cv.parentElement.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    cv.width = Math.max(1, Math.round(r.width * dpr)); cv.height = Math.max(1, Math.round(r.height * dpr));
    st.scale = Math.max(18, Math.min(60, Math.min(r.width, r.height) / 16));
    draw();
  }

  function renderOpts(box) {
    var keys = { triangle: ['median', 'alt', 'bis', 'circum', 'incircle', 'euler'], circle: [], quad: [], coord: [] }[st.mode].concat(['grid', 'snap']);
    var tkey = { median: 'geo.median', alt: 'geo.alt', bis: 'geo.bis', circum: 'geo.circum', incircle: 'geo.incircle', euler: 'geo.euler', grid: 'geo.grid', snap: 'geo.snap' };
    var col = { median: C.med, alt: C.alt, bis: C.bis, circum: C.circ, incircle: C.inc, euler: '#fff' };
    box.innerHTML = keys.map(function (k) { return '<label class="chk"><input type="checkbox" data-o="' + k + '"' + (st.opts[k] ? ' checked' : '') + '> ' + (col[k] ? '<span class="sw" style="background:' + col[k] + '"></span>' : '') + T(tkey[k]) + '</label>'; }).join('') +
      '<button class="btn sm ghost" id="g-reset">↺</button>';
    box.querySelectorAll('[data-o]').forEach(function (c) { c.onchange = function () { st.opts[c.getAttribute('data-o')] = c.checked; draw(); }; });
    box.querySelector('#g-reset').onclick = function () { st.pts[st.mode] = DEFAULTS[st.mode].map(function (p) { return { x: p.x, y: p.y }; }); draw(); };
  }

  function mount(el) {
    el.innerHTML = '<div class="tabs" id="g-tabs">' + MODES.map(function (m) { return '<button class="tab" data-m="' + m + '">' + T('geo.' + m) + '</button>'; }).join('') + '</div>' +
      '<div class="geo-wrap"><div class="card geo-main"><div class="geo-opts" id="g-opts"></div><div class="plot-canvas geo-canvas"><canvas id="g-cv"></canvas></div><p class="hint" data-t="geo.hint"></p></div>' +
      '<aside class="card geo-info" id="g-info"></aside></div>';
    I18n.apply(el);
    cv = el.querySelector('#g-cv'); ctx = cv.getContext('2d'); infoEl = el.querySelector('#g-info');
    var opts = el.querySelector('#g-opts');
    function setMode(m) {
      st.mode = m;
      el.querySelectorAll('#g-tabs .tab').forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-m') === m); });
      renderOpts(opts); draw();
    }
    el.querySelectorAll('#g-tabs .tab').forEach(function (b) { b.onclick = function () { setMode(b.getAttribute('data-m')); }; });
    bind(); setMode(st.mode);
    requestAnimationFrame(resize);
  }
  function setMode(m, opts) { if (MODES.indexOf(m) >= 0) st.mode = m; if (opts) Object.assign(st.opts, opts); }

  root.Geometry = { mount: mount, preset: setMode, _state: st };
})(this);
