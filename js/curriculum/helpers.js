// Nuvemath — darslik ma'lumotlari uchun umumiy yordamchilar (uch tilli matn, masala yasovchilar).
// Har bir qism fayli: var H = NMCurriculum.H; keyin H.L(...), H.whole(...) va h.k.
(function (root) {
  'use strict';
  function L(uz, ru, en) { return { uz: uz, ru: ru, en: en }; }
  function pk(v, l) { return v && typeof v === 'object' && 'uz' in v ? v[l] : v; }
  function mk(fn) { return { uz: fn('uz'), ru: fn('ru'), en: fn('en') }; } // har bir til uchun matn yasash
  // ruscha ko'plik: 1 медаль, 2 медали, 5 медалей
  function rp(n, f) { var a = n % 10, b = n % 100; return n + ' ' + (a === 1 && b !== 11 ? f[0] : a >= 2 && a <= 4 && (b < 12 || b > 14) ? f[1] : f[2]); }
  function ep(n, one, many) { return n + ' ' + (n === 1 ? one : many); }
  var PCS = L('ta', 'шт.', 'pcs'), TOTAL = L('Jami', 'Всего', 'Total'), MORE = L('ko‘p', 'больше', 'more'), LESS = L('kam', 'меньше', 'fewer');
  var P1 = L('I qism', 'I часть', 'Part I'), P2 = L('II qism', 'II часть', 'Part II'), KG = L('kg', 'кг', 'kg'), LT = L('l', 'л', 'L'), CM = L('cm', 'см', 'cm');
  function K() { return root.NMKids; }

  // ---------- Masala yasovchilar (har chaqiruvda yangi sonlar) ----------
  // Butunni topish: a + b = ?
  function whole(o) {
    return function (R) {
      var a = R(o.a[0], o.a[1]), b = R(o.b[0], o.b[1]), u = o.u || PCS;
      return { story: o.text(a, b), pics: o.emoji ? [[o.emoji[0], a, o.labels[0]], [o.emoji[1] || o.emoji[0], b, o.labels[1]]] : null, picsOp: '+',
        cond: [[o.cond ? o.cond[0] : P1, mk(function (l) { return a + ' ' + pk(u, l); })], [o.cond ? o.cond[1] : P2, mk(function (l) { return b + ' ' + pk(u, l); })], [TOTAL, mk(function (l) { return '? ' + pk(u, l); })]],
        scheme: { kind: 'whole', parts: [a, b], show: [a, b], top: mk(function (l) { return '? ' + pk(u, l); }), labels: o.labels },
        expr: [a, '+', b, '=', a + b], ans: a + b, unit: u };
    };
  }
  // Qismni topish: c − a = ?
  function part(o) {
    return function (R) {
      var c = R(o.c[0], o.c[1]), a = R(o.a[0], Math.min(o.a[1], c - 1)), u = o.u || PCS;
      return { story: o.text(c, a), pics: o.emoji ? [[o.emoji, c, TOTAL]] : null,
        cond: [[TOTAL, mk(function (l) { return c + ' ' + pk(u, l); })], [o.cond ? o.cond[0] : P1, mk(function (l) { return a + ' ' + pk(u, l); })], [o.cond ? o.cond[1] : P2, mk(function (l) { return '? ' + pk(u, l); })]],
        scheme: { kind: 'part', parts: [a, c - a], show: [a, '?'], top: mk(function (l) { return c + ' ' + pk(u, l); }), labels: o.labels },
        expr: [c, '−', a, '=', c - a], ans: c - a, unit: u };
    };
  }
  // Orttirish: a dan d ta ko'p
  function more(o) {
    return function (R) {
      var a = R(o.a[0], o.a[1]), d = R(o.d[0], o.d[1]), u = o.u || PCS;
      return { story: o.text(a, d), cond: [[o.who[0], mk(function (l) { return a + ' ' + pk(u, l); })], [o.who[1], mk(function (l) { return '?, ' + (l === 'ru' ? 'на ' : '') + d + ' ' + pk(u, l) + ' ' + pk(MORE, l); })]],
        scheme: { kind: 'more', a: a, b: a + d, show: [a, mk(function (l) { return '? ' + pk(u, l); }), '+' + d], labels: o.who },
        expr: [a, '+', d, '=', a + d], ans: a + d, unit: u };
    };
  }
  // Kamaytirish: a dan d ta kam
  function less(o) {
    return function (R) {
      var a = R(o.a[0], o.a[1]), d = R(o.d[0], Math.min(o.d[1], a - 1)), u = o.u || PCS;
      return { story: o.text(a, d), cond: [[o.who[0], mk(function (l) { return a + ' ' + pk(u, l); })], [o.who[1], mk(function (l) { return '?, ' + (l === 'ru' ? 'на ' : '') + d + ' ' + pk(u, l) + ' ' + pk(LESS, l); })]],
        scheme: { kind: 'less', a: a, b: a - d, show: [a, mk(function (l) { return '? ' + pk(u, l); }), '−' + d], labels: o.who },
        expr: [a, '−', d, '=', a - d], ans: a - d, unit: u };
    };
  }
  // Taqqoslash: necha ta ko'p / kam
  function diff(o) {
    return function (R) {
      var a = R(o.a[0], o.a[1]), b; do { b = R(o.b[0], o.b[1]); } while (b === a);
      var hi = Math.max(a, b), lo = Math.min(a, b), u = o.u || PCS;
      return { story: o.text(a, b), cond: [[o.who[0], mk(function (l) { return a + ' ' + pk(u, l); })], [o.who[1], mk(function (l) { return b + ' ' + pk(u, l); })]],
        scheme: { kind: 'diff', a: a, b: b, show: [a, b, '?'], labels: o.who },
        expr: [hi, '−', lo, '=', hi - lo], ans: hi - lo, unit: u };
    };
  }
  function sumDrill(max) { return function (R) { var a = R(1, max - 1), b = R(1, max - a); return R(0, 1) ? { q: a + ' + ' + b, a: a + b } : { q: (a + b) + ' − ' + b, a: a }; }; }
  function tensDrill(R) { var a = R(1, 9) * 10, b = R(1, 9); return R(0, 1) ? { q: a + ' + ' + b, a: a + b } : { q: (a + b) + ' − ' + b, a: a }; }
  function unitDrill(u) { return function (R) { var a = R(5, 50), b = R(1, 40); return R(0, 1) ? { q: mk(function (l) { return a + ' ' + pk(u, l) + ' + ' + b + ' ' + pk(u, l); }), a: a + b, unit: u } : { q: mk(function (l) { return (a + b) + ' ' + pk(u, l) + ' − ' + b + ' ' + pk(u, l); }), a: a, unit: u }; }; }
  function choice(story, options, a, pics) { return { story: story, options: options, a: a, pics: pics }; }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  var YES_NO_Q = L('Yo‘q, unda savol yo‘q', 'Нет, в нём нет вопроса', 'No, it has no question');


  // qo'shimcha yasovchilar
  var WORDS = {
    uz: ['nol', 'bir', 'ikki', 'uch', 'to‘rt', 'besh', 'olti', 'yetti', 'sakkiz', 'to‘qqiz', 'o‘n'],
    ru: ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять'],
    en: ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'] };
  function word(n) { return { uz: WORDS.uz[n], ru: WORDS.ru[n], en: WORDS.en[n] }; }
  function roman(n) { var v = [[50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']], s = ''; v.forEach(function (p) { while (n >= p[0]) { s += p[1]; n -= p[0]; } }); return s; }
  // bir nechta turli son
  function distinct(R, n, a, b) { var out = []; while (out.length < n) { var x = R(a, b); if (out.indexOf(x) < 0) out.push(x); } return out; }
  // sonlarni o'sish/kamayish tartibida bosish topshirig'i
  function sortNums(n, a, b, desc) {
    return function (R) {
      var xs = distinct(R, n, a, b).sort(function (x, y) { return desc ? y - x : x - y; });
      return { story: desc ? L('Sonlarni <b>kattasidan kichigiga</b> qarab bosing.', 'Нажимайте на числа <b>от большего к меньшему</b>.', 'Tap the numbers <b>from largest to smallest</b>.') : L('Sonlarni <b>kichigidan kattasiga</b> qarab bosing.', 'Нажимайте на числа <b>от меньшего к большему</b>.', 'Tap the numbers <b>from smallest to largest</b>.'),
        items: xs.map(String), sep: '<span class="kd-arr">' + (desc ? '&gt;' : '&lt;') + '</span>' };
    };
  }
  // ikki sonni taqqoslash belgisi
  function compareSign(a1, b1) {
    return function (R) {
      var a = R(a1, b1), b = R(a1, b1);
      return choice(mk(function (l) { return '<span class="kd-big">' + a + ' ◻ ' + b + '</span> — ' + { uz: 'qaysi belgi to‘g‘ri?', ru: 'какой знак верный?', en: 'which sign is correct?' }[l]; }), ['&gt;', '&lt;', '='], a > b ? 0 : a < b ? 1 : 2);
    };
  }
  // noma'lum: □ + b = c, a + □ = c, □ − b = c, a − □ = c
  function unknownDrill(max, kinds) {
    return function (R) {
      var k = pick(kinds || ['x+b', 'a+x', 'x-b', 'a-x']), a = R(1, max - 1), b = R(1, max - a), c = a + b;
      if (k === 'x+b') return { q: '□ + ' + b + ' = ' + c + ';  □', a: a };
      if (k === 'a+x') return { q: a + ' + □ = ' + c + ';  □', a: b };
      if (k === 'x-b') return { q: '□ − ' + b + ' = ' + a + ';  □', a: c };
      return { q: c + ' − □ = ' + a + ';  □', a: b };
    };
  }
  function eqDrill(max) {
    return function (R) {
      var a = R(1, max - 1), b = R(1, max - a), c = a + b, k = R(0, 3);
      if (k === 0) return { q: 'x + ' + b + ' = ' + c + ';  x', a: a };
      if (k === 1) return { q: a + ' + x = ' + c + ';  x', a: b };
      if (k === 2) return { q: 'x − ' + b + ' = ' + a + ';  x', a: c };
      return { q: c + ' − x = ' + a + ';  x', a: b };
    };
  }
  // 5-sinfdan: oddiy kasr, aralash son va o'nli kasr ko'rinishlari
  function gcd(a, b) { return b ? gcd(b, a % b) : Math.abs(a); }
  function fr(a, b) { return '<span class="kd-fr"><b>' + a + '</b><b>' + b + '</b></span>'; }
  function mixed(w, a, b) { return '<span class="kd-mx">' + (w ? w : '') + (a ? fr(a, b) : '') + '</span>'; }
  function r6(x) { return Math.round(x * 1e6) / 1e6; }
  function dec(x, l) { var s = String(r6(x)); return l === 'en' ? s : s.replace('.', ','); }
  // matnni uch tilda o'nli kasrlar bilan qurish: dq(function (D, l) { return D(2.5) + ' · 10'; })
  function dq(fn) { return mk(function (l) { return fn(function (x) { return dec(x, l); }, l); }); }
  root.NMCurriculum.H = { L: L, pk: pk, mk: mk, rp: rp, ep: ep, PCS: PCS, TOTAL: TOTAL, MORE: MORE, LESS: LESS, P1: P1, P2: P2, KG: KG, LT: LT, CM: CM,
    whole: whole, part: part, more: more, less: less, diff: diff, sumDrill: sumDrill, tensDrill: tensDrill, unitDrill: unitDrill, choice: choice, pick: pick,
    word: word, roman: roman, distinct: distinct, sortNums: sortNums, compareSign: compareSign, unknownDrill: unknownDrill, eqDrill: eqDrill,
    gcd: gcd, fr: fr, mixed: mixed, r6: r6, dec: dec, dq: dq };
})(this);
