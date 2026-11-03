// Nuvemath — xavfsiz matematik ifoda parseri (eval ishlatilmaydi).
// Qo'llab-quvvatlaydi: + - * / ^, qavslar, unar minus, yashirin ko'paytirish (2x, 3(x+1), x sin x),
// funksiyalar (sin, cos, tan, cot, asin, acos, atan, sqrt, cbrt, abs, ln, log, exp, floor, ceil, sign),
// konstantalar (pi, e) va istalgan o'zgaruvchilar (x, y, a ...).
(function (root) {
  'use strict';

  var FUNCS = {
    sin: Math.sin, cos: Math.cos, tan: Math.tan,
    cot: function (v) { return 1 / Math.tan(v); },
    asin: Math.asin, acos: Math.acos, atan: Math.atan,
    arcsin: Math.asin, arccos: Math.acos, arctg: Math.atan, tg: Math.tan, ctg: function (v) { return 1 / Math.tan(v); },
    sqrt: Math.sqrt, cbrt: Math.cbrt, abs: Math.abs,
    ln: Math.log, log: Math.log10, lg: Math.log10, exp: Math.exp,
    floor: Math.floor, ceil: Math.ceil, sign: Math.sign, round: Math.round
  };
  var CONSTS = { pi: Math.PI, 'π': Math.PI, e: Math.E };

  function ParseError(msg, pos) { this.message = msg; this.pos = pos; }
  ParseError.prototype = Object.create(Error.prototype);
  ParseError.prototype.name = 'ParseError';

  function tokenize(src) {
    var s = String(src).replace(/[×·]/g, '*').replace(/÷/g, '/').replace(/−/g, '-').replace(/,/g, '.').replace(/²/g, '^2').replace(/³/g, '^3').replace(/√/g, 'sqrt');
    var out = [], i = 0;
    while (i < s.length) {
      var c = s[i];
      if (/\s/.test(c)) { i++; continue; }
      if (/[0-9.]/.test(c)) {
        var m = /^(\d+\.?\d*|\.\d+)(e[+-]?\d+)?/i.exec(s.slice(i));
        if (!m) throw new ParseError('num', i);
        out.push({ t: 'num', v: parseFloat(m[0]), p: i }); i += m[0].length; continue;
      }
      if (/[a-zA-Zπ_]/.test(c)) {
        var w = /^[a-zA-Zπ_]+/.exec(s.slice(i))[0];
        // "xsin" → x, sin ; "2pi" handled by implicit mult. Split unknown words into known pieces.
        var pieces = splitWord(w);
        for (var k = 0; k < pieces.length; k++) out.push({ t: 'id', v: pieces[k], p: i });
        i += w.length; continue;
      }
      if ('+-*/^()|!'.indexOf(c) >= 0) { out.push({ t: 'op', v: c, p: i }); i++; continue; }
      throw new ParseError('char', i);
    }
    return out;
  }

  // Bitta so'zni funksiya/konstanta/bir harfli o'zgaruvchilarga bo'lish: "xy" → x,y ; "pix" → pi,x
  function splitWord(w) {
    var lw = w.toLowerCase();
    if (FUNCS[lw] || CONSTS[lw] || w.length === 1) return [FUNCS[lw] || CONSTS[lw] ? lw : w];
    var res = [], i = 0;
    while (i < w.length) {
      var found = null;
      for (var L = Math.min(6, w.length - i); L >= 2; L--) {
        var part = w.substr(i, L).toLowerCase();
        if (FUNCS[part] || CONSTS[part]) { found = part; break; }
      }
      if (found) { res.push(found); i += found.length; }
      else { res.push(w[i]); i++; }
    }
    return res;
  }

  // Rekursiv tushish parseri → AST
  function parse(src) {
    var toks = tokenize(src), pos = 0;
    if (!toks.length) throw new ParseError('empty', 0);
    function peek() { return toks[pos]; }
    function eat(v) { var t = toks[pos]; if (t && t.t === 'op' && t.v === v) { pos++; return true; } return false; }

    function expr() {
      var n = term();
      for (;;) {
        if (eat('+')) n = { k: 'bin', op: '+', a: n, b: term() };
        else if (eat('-')) n = { k: 'bin', op: '-', a: n, b: term() };
        else return n;
      }
    }
    function startsFactor(t) {
      return t && (t.t === 'num' || t.t === 'id' || (t.t === 'op' && (t.v === '(' )));
    }
    function term() {
      var n = unary();
      for (;;) {
        if (eat('*')) n = { k: 'bin', op: '*', a: n, b: unary() };
        else if (eat('/')) n = { k: 'bin', op: '/', a: n, b: unary() };
        else if (startsFactor(peek())) n = { k: 'bin', op: '*', a: n, b: power() }; // yashirin ko'paytirish
        else return n;
      }
    }
    function unary() {
      if (eat('-')) return { k: 'neg', a: unary() };
      if (eat('+')) return unary();
      return power();
    }
    function power() {
      var base = postfix();
      if (eat('^')) return { k: 'bin', op: '^', a: base, b: unary() }; // o'ngga bog'lanadi
      return base;
    }
    function postfix() {
      var n = atom();
      while (eat('!')) n = { k: 'fn', f: 'fact', a: n };
      return n;
    }
    function atom() {
      var t = peek();
      if (!t) throw new ParseError('end', toks.length ? toks[toks.length - 1].p + 1 : 0);
      if (t.t === 'num') { pos++; return { k: 'num', v: t.v }; }
      if (eat('(')) { var e = expr(); if (!eat(')')) throw new ParseError('paren', t.p); return e; }
      if (eat('|')) { var a = expr(); if (!eat('|')) throw new ParseError('abs', t.p); return { k: 'fn', f: 'abs', a: a }; }
      if (t.t === 'id') {
        pos++;
        var name = t.v, lname = name.toLowerCase();
        if (FUNCS[lname]) {
          var arg;
          var nt = peek();
          if (nt && nt.t === 'op' && nt.v === '^') { // sin^2 x
            pos++; var ex = unary(); arg = power();
            return { k: 'bin', op: '^', a: { k: 'fn', f: lname, a: arg }, b: ex };
          }
          arg = power();
          return { k: 'fn', f: lname, a: arg };
        }
        if (CONSTS[lname] !== undefined && (lname !== 'e' || name === 'e')) return { k: 'const', v: lname };
        return { k: 'var', v: name };
      }
      throw new ParseError('unexpected', t.p);
    }
    var tree = expr();
    if (pos < toks.length) throw new ParseError('unexpected', toks[pos].p);
    return tree;
  }

  function fact(n) {
    if (n < 0 || n !== Math.floor(n)) return NaN;
    if (n > 170) return Infinity;
    var r = 1; for (var i = 2; i <= n; i++) r *= i; return r;
  }

  function evaluate(node, scope) {
    scope = scope || {};
    switch (node.k) {
      case 'num': return node.v;
      case 'const': return CONSTS[node.v];
      case 'var':
        if (!(node.v in scope)) throw new ParseError('var:' + node.v, 0);
        return scope[node.v];
      case 'neg': return -evaluate(node.a, scope);
      case 'fn':
        var x = evaluate(node.a, scope);
        return node.f === 'fact' ? fact(x) : FUNCS[node.f](x);
      case 'bin':
        var a = evaluate(node.a, scope), b = evaluate(node.b, scope);
        switch (node.op) {
          case '+': return a + b;
          case '-': return a - b;
          case '*': return a * b;
          case '/': return a / b;
          case '^':
            // manfiy asosning toq maxrajli kasr darajasi: (-8)^(1/3) = -2
            if (a < 0 && b !== Math.floor(b)) {
              for (var q = 3; q <= 15; q += 2) {
                var p = Math.round(b * q);
                if (Math.abs(p / q - b) < 1e-12) return (p % 2 ? -1 : 1) * Math.pow(-a, b);
              }
            }
            return Math.pow(a, b);
        }
    }
    return NaN;
  }

  function variables(node, acc) {
    acc = acc || {};
    if (!node) return acc;
    if (node.k === 'var') acc[node.v] = true;
    if (node.a) variables(node.a, acc);
    if (node.b) variables(node.b, acc);
    return acc;
  }

  // Bir o'zgaruvchili funksiya yasash: compile("x^2+1", "x") → f(x)
  function compile(src, varName) {
    var tree = parse(src);
    var v = varName || 'x';
    return function (val) { var sc = {}; sc[v] = val; try { return evaluate(tree, sc); } catch (e) { return NaN; } };
  }

  // Chiroyli ko'rinishdagi matn (LaTeX'siz, HTML)
  function toHTML(node) {
    function prec(n) { if (n.k === 'bin') return { '+': 1, '-': 1, '*': 2, '/': 2, '^': 3 }[n.op]; if (n.k === 'neg') return 1.5; return 4; }
    function w(n, p) { var s = toHTML(n); return prec(n) < p ? '(' + s + ')' : s; }
    switch (node.k) {
      case 'num': return String(+node.v.toPrecision(12));
      case 'const': return node.v === 'pi' ? 'π' : node.v;
      case 'var': return '<i>' + node.v + '</i>';
      case 'neg': return '−' + w(node.a, 2);
      case 'fn': return node.f === 'fact' ? w(node.a, 4) + '!' : (node.f === 'abs' ? '|' + toHTML(node.a) + '|' : node.f === 'sqrt' ? '√(' + toHTML(node.a) + ')' : node.f + '(' + toHTML(node.a) + ')');
      case 'bin':
        if (node.op === '^') return w(node.a, 4) + '<sup>' + toHTML(node.b) + '</sup>';
        if (node.op === '*') {
          var implicit = node.a.k === 'num' && (node.b.k === 'var' || node.b.k === 'fn' || node.b.k === 'const' || (node.b.k === 'bin' && node.b.op === '^' && node.b.a.k === 'var'));
          return w(node.a, 2) + (implicit ? '' : '·') + w(node.b, 2.5);
        }
        if (node.op === '/') return w(node.a, 2) + '/' + w(node.b, 2.5);
        return w(node.a, 1) + ' ' + (node.op === '-' ? '−' : '+') + ' ' + w(node.b, node.op === '-' ? 1.5 : 1);
    }
    return '';
  }

  var api = { parse: parse, evaluate: evaluate, compile: compile, variables: variables, toHTML: toHTML, tokenize: tokenize, ParseError: ParseError, FUNCS: FUNCS };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.Expr = api;
})(this);
