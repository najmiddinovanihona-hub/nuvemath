// Nuvemath — avtomatik testlar: node test/run.js
'use strict';
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const Expr = require('../js/expr.js');
const Solver = require('../js/solver.js');
const Practice = require('../js/practice.js');

let passed = 0, failed = 0;
function test(name, fn) {
  try { fn(); passed++; } catch (e) { failed++; console.log('✗ ' + name + '\n   ' + e.message); }
}
const ev = (s, sc) => Expr.evaluate(Expr.parse(s), sc || {});
const near = (a, b, eps) => Math.abs(a - b) < (eps || 1e-9);

// ---------- Ifoda parseri ----------
test('amallar tartibi', () => { assert.strictEqual(ev('2+3*4'), 14); assert.strictEqual(ev('(2+3)*4'), 20); assert.strictEqual(ev('2^3^2'), 512); });
test('unar minus va daraja', () => { assert.strictEqual(ev('-2^2'), -4); assert.strictEqual(ev('(-2)^2'), 4); assert.strictEqual(ev('2^-1'), 0.5); });
test('yashirin ko‘paytirish', () => { assert.strictEqual(ev('2x', { x: 3 }), 6); assert.strictEqual(ev('3(x+1)(x-1)', { x: 2 }), 9); assert.ok(near(ev('2pi'), 2 * Math.PI)); });
test('funksiyalar va konstantalar', () => { assert.ok(near(ev('sin(pi/2)'), 1)); assert.strictEqual(ev('sqrt16'), 4); assert.ok(near(ev('ln(e)'), 1)); assert.strictEqual(ev('log(1000)'), 3); assert.ok(near(ev('sin^2 x + cos^2 x', { x: 0.7 }), 1)); });
test('modul, faktorial, kub ildiz', () => { assert.strictEqual(ev('|x-5|', { x: 2 }), 3); assert.strictEqual(ev('5!'), 120); assert.ok(near(ev('(-8)^(1/3)'), -2)); });
test('unicode belgilar', () => { assert.strictEqual(ev('3×4−2'), 10); assert.strictEqual(ev('x²', { x: 5 }), 25); assert.strictEqual(ev('√9'), 3); assert.strictEqual(ev('2,5*2'), 5); });
test('xato ifodalar', () => {
  ['', '2+', '(1+2', '3 $ 4', ')'].forEach(s => assert.throws(() => Expr.parse(s), Expr.ParseError, s));
  assert.throws(() => ev('y+1', { x: 1 }));
});
test('compile NaN qaytaradi', () => { const f = Expr.compile('sqrt(x)'); assert.ok(Number.isNaN(f(-1))); assert.strictEqual(f(9), 3); });

// ---------- Tenglamalar ----------
const roots = q => Solver.solveEquation(q).roots.map(r => +r.toFixed(9));
test('chiziqli', () => { assert.deepStrictEqual(roots('2x+3=7'), [2]); assert.deepStrictEqual(roots('3(x-2)=x+4'), [5]); assert.deepStrictEqual(roots('3x/4-2=1'), [4]); });
test('kvadrat: ikki ildiz, bitta, kompleks', () => {
  assert.deepStrictEqual(roots('x^2-5x+6=0'), [2, 3]);
  assert.deepStrictEqual(roots('x^2+2x+1=0'), [-1]);
  const c = Solver.solveEquation('x^2+1=0'); assert.strictEqual(c.kind, 'complex'); assert.strictEqual(c.roots.length, 0);
});
test('kvadrat: aniq radikal ko‘rinish', () => { const r = Solver.solveEquation('2x^2-3x-1=0'); assert.ok(r.exact[0].includes('√17')); assert.ok(near(r.roots[0], (3 - Math.sqrt(17)) / 4)); });
test('ayniyat va ziddiyat', () => { assert.strictEqual(Solver.solveEquation('x=x').kind, 'all'); assert.strictEqual(Solver.solveEquation('x+1=x').kind, 'none'); });
test('yuqori darajali ko‘phad', () => { assert.deepStrictEqual(roots('x^3-6x^2+11x-6=0'), [1, 2, 3]); assert.deepStrictEqual(roots('x^4-5x^2+4=0'), [-2, -1, 1, 2]); assert.deepStrictEqual(roots('x^4=16'), [-2, 2]); });
test('transsendent tenglamalar', () => {
  assert.deepStrictEqual(roots('2^x=32'), [5]);
  assert.ok(near(Solver.solveEquation('ln(x)=1').roots[0], Math.E, 1e-9));
  assert.deepStrictEqual(roots('abs(x-2)=3'), [-1, 5]);
  assert.deepStrictEqual(roots('sqrt(x+3)=x-3'), [6]);
  assert.strictEqual(Solver.solveEquation('1/x=0').roots.length, 0); // qutb ildiz emas
  const s = Solver.solveEquation('sin(x)=0.5', null, { lo: 0, hi: 6 }).roots; assert.strictEqual(s.length, 2); assert.ok(near(s[0], Math.PI / 6, 1e-9));
});
test('ikki karrali ildiz (urinish)', () => { assert.deepStrictEqual(roots('(x-1)^2*(x+2)=0'), [-2, 1]); });
test('boshqa harfli o‘zgaruvchi', () => { const r = Solver.solveEquation('y^2=2'); assert.strictEqual(r.v, 'y'); assert.ok(near(r.roots[1], Math.SQRT2)); });
test('ikki noma’lum — xato', () => { assert.throws(() => Solver.solveEquation('x+y=1')); assert.throws(() => Solver.solveEquation('x=1=2')); });
test('sonlarni chiroyli ko‘rsatish', () => {
  assert.ok(Solver.fmtNum(0.75).includes('<span>3</span><span>4</span>'));
  assert.strictEqual(Solver.fmtNum(Math.PI / 6), 'π/6'); assert.strictEqual(Solver.fmtNum(-2), '−2'); assert.strictEqual(Solver.fmtNum(0), '0');
});

// ---------- Sistemalar ----------
test('Gauss: yagona yechim', () => { const r = Solver.solveLinearSystem([[2, 1, -1, 8], [-3, -1, 2, -11], [-2, 1, 2, -3]]); assert.strictEqual(r.status, 'unique'); assert.deepStrictEqual(r.x.map(String), ['2', '3', '-1']); });
test('Gauss: kasr javob', () => { const r = Solver.solveLinearSystem([[3, 2, 1], [1, 4, 2]]); assert.deepStrictEqual(r.x.map(String), ['0', '1/2']); });
test('Gauss: cheksiz va yechimsiz', () => { assert.strictEqual(Solver.solveLinearSystem([[1, 1, 2], [2, 2, 4]]).status, 'infinite'); assert.strictEqual(Solver.solveLinearSystem([[1, 1, 2], [1, 1, 3]]).status, 'none'); });
test('determinant', () => { assert.strictEqual(String(Solver.det([[1, 2], [3, 4]])), '-2'); assert.strictEqual(String(Solver.det([[2, 0, 1], [1, 3, 2], [1, 1, 2]])), '6'); });

// ---------- Mashq generatori ----------
test('har bir generator: 3 daraja × 400 masala o‘zini to‘g‘ri tekshiradi', () => {
  for (const t of Object.keys(Practice.GEN)) for (const lv of [1, 2, 3]) for (let i = 0; i < 400; i++) {
    const p = Practice.generate(t, lv);
    assert.ok(p.ans.length && p.ans.every(Number.isFinite), t + ' ' + lv + ' ' + p.ans);
    ['uz', 'ru', 'en'].forEach(l => assert.ok(p.q[l] && p.hint[l], t + ' matn yo‘q: ' + l));
    assert.ok(Practice.check(p, p.ans.join('; ')).ok, 'o‘z javobi qabul qilinmadi: ' + t);
    assert.ok(!Practice.check(p, p.ans.map(v => v + 1).join('; ')).ok, 'noto‘g‘ri javob qabul qilindi: ' + t);
  }
});
test('javob formatlari', () => {
  assert.ok(Practice.check({ ans: [Math.sqrt(3) / 2] }, 'sqrt(3)/2').ok);
  assert.ok(Practice.check({ ans: [Math.sqrt(3) / 2] }, '√3/2').ok);
  assert.ok(Practice.check({ ans: [2, 3] }, '3, 2').ok);
  assert.ok(Practice.check({ ans: [2.5] }, '2,5').ok);
  assert.ok(Practice.check({ ans: [-2] }, '−2').ok);
  assert.ok(!Practice.check({ ans: [1, 4], ordered: true }, '4; 1').ok);
  assert.ok(Practice.check({ ans: [1] }, 'abc').bad);
});

// ---------- Darslik: sinf → qism → mavzu ma'lumotlari ----------
// uch tilli matn tekshiruvi: {uz, ru, en} obyektlarining hammasida uch til bo'lishi shart
function tri(v, where) {
  if (v && typeof v === 'object' && !Array.isArray(v)) {
    if ('uz' in v) { ['uz', 'ru', 'en'].forEach(l => assert.ok(typeof v[l] === 'string' && v[l].length, where + ': ' + l + ' yo‘q')); return; }
    Object.keys(v).forEach(k => { if (k !== 'section' && k !== 'partRef' && typeof v[k] !== 'function') tri(v[k], where + '.' + k); });
  } else if (Array.isArray(v)) v.forEach((x, i) => tri(x, where + '[' + i + ']'));
}
const asText = (v, l) => v && typeof v === 'object' && 'uz' in v ? v[l] : String(v);

function loadCurriculum() {
  const ctx = {}; ctx.window = ctx; vm.createContext(ctx);
  ['js/kids.js', 'js/curriculum/index.js', 'js/curriculum/helpers.js', 'js/curriculum/g1-1.js', 'js/curriculum/g1-2.js', 'js/curriculum/g1-3.js', 'js/curriculum/g1-4.js', 'js/curriculum/g2-1.js', 'js/curriculum/g2-2.js', 'js/curriculum/g2-3.js', 'js/curriculum/g2-4.js', 'js/curriculum/g3-1.js', 'js/curriculum/g3-2.js', 'js/curriculum/g3-3.js', 'js/curriculum/g3-4.js', 'js/curriculum/g4-1.js', 'js/curriculum/g5-1.js', 'js/curriculum/g5-2.js', 'js/curriculum/g6-1.js', 'js/curriculum/g6-2.js'].forEach(f => vm.runInContext(fs.readFileSync(path.join(__dirname, '..', f), 'utf8'), ctx, { filename: f }));
  return ctx;
}
test('darslik tuzilmasi: 11 sinf, 1–3-sinflarning I–IV qismlari to‘liq', () => {
  const ctx = loadCurriculum(), C = ctx.NMCurriculum;
  assert.strictEqual(C.grades.length, 11);
  assert.strictEqual(JSON.stringify(C.grades[4].parts.map(p => p.part)), '[1,2]', '5-sinf qismlari');
  assert.strictEqual(JSON.stringify(C.grades[5].parts.map(p => p.part)), '[1,2]', '6-sinf qismlari');
  [0, 1, 2].forEach(g => assert.strictEqual(JSON.stringify(C.grades[g].parts.map(p => p.part)), '[1,2,3,4]', (g + 1) + '-sinf qismlari'));
  C.grades[0].parts.concat(C.grades[1].parts, C.grades[2].parts, C.grades[3].parts, C.grades[4].parts, C.grades[5].parts).forEach(p => {
  const tops = C.topics(p); assert.ok(tops.length >= 12, p.part + '-qism mavzular soni ' + tops.length);
  const ids = new Set();
  tops.forEach(t => {
    assert.ok(!ids.has(t.id), 'takroriy id ' + t.id); ids.add(t.id);
    assert.ok(t.title && t.explain && t.rule && t.keys.length, t.id + ' matn yetishmaydi');
    assert.ok(t.acts.length >= 2, p.grade + '-' + p.part + ' ' + t.id + ' topshiriqlar kam');
    assert.ok(t.quiz.length >= 2, t.id + ' test kam');
    assert.ok(t.scene.length && t.scene.every(g => ctx.NMKids.objects.includes(g.obj)), t.id + ' 3D sahna noto‘g‘ri');
    t.quiz.forEach(q => { assert.ok(q.a >= 0 && q.a < q.o.length, t.id + ' test javobi indeksi'); ['uz', 'ru', 'en'].forEach(l => assert.strictEqual(new Set(q.o.map(o => asText(o, l))).size, q.o.length, t.id + ' takroriy variant (' + l + '): ' + asText(q.q, l))); });
    tri({ title: t.title, lessons: t.lessons, keys: t.keys, explain: t.explain, rule: t.rule, quiz: t.quiz, acts: t.acts.map(a => ({ title: a.title, unit: a.unit })) }, t.id);
  });
  tri({ title: p.title, intro: p.intro, book: p.book, edition: p.edition, sections: p.sections.map(s => s.title) }, 'qism');
  });
});
test('dars dvigateli matnlari uch tilda', () => {
  const KT = loadCurriculum().NMKids.KT, keys = Object.keys(KT.uz);
  ['ru', 'en'].forEach(l => assert.deepStrictEqual(keys.filter(k => !(k in KT[l])), [], l + ' da yo‘q'));
});
test('1–6-sinf topshiriqlari: 300 marta yaratilganda ham sonlar to‘g‘ri', () => {
  const ctx = loadCurriculum(), K = ctx.NMKids, C = ctx.NMCurriculum;
  const evalExpr = e => { let v = e[0]; for (let i = 1; i < e.length - 2; i += 2) v = e[i] === '+' ? v + e[i + 1] : e[i] === '·' ? v * e[i + 1] : e[i] === ':' ? v / e[i + 1] : v - e[i + 1]; return v; };
  C.grades[0].parts.concat(C.grades[1].parts, C.grades[2].parts, C.grades[3].parts, C.grades[4].parts, C.grades[5].parts).forEach(P => C.topics(P).forEach(t => t.acts.forEach((a, k) => {
    assert.ok(K.widgets[a.type], t.id + ' noma’lum tur ' + a.type);
    if (!a.make) return;
    for (let i = 0; i < 300; i++) {
      const d = a.make(K.R), lim = P.grade === 1 ? 100 : P.grade === 2 ? 1000 : P.grade === 3 ? 1000000 : 1e9, big = Math.max(lim, 1000), isNum = x => P.grade >= 5 ? Number.isFinite(x) && Math.abs(x * 1e6 - Math.round(x * 1e6)) < 1e-6 : Number.isInteger(x), where = P.grade + '-' + P.part + ' ' + t.id + ' #' + (k + 1) + ' (' + a.type + ')';
      if (i < 20) tri(d, where);
      if (a.type === 'problem' || a.type === 'count3d') {
        assert.ok(isNum(d.ans) && d.ans >= 0 && d.ans <= lim, where + ' javob ' + d.ans);
        if (d.expr) { assert.strictEqual(d.expr[d.expr.length - 2], '=', where); assert.ok(Math.abs(evalExpr(d.expr) - d.ans) < 1e-9, where + ' ifoda ' + d.expr.join(' ')); assert.strictEqual(d.expr[d.expr.length - 1], d.ans, where); }
        d.expr && d.expr.forEach((x, j) => { if (j % 2 === 0) assert.ok(x >= 0, where + ' manfiy son'); });
        if (d.groups) d.groups.forEach(g => assert.ok(g.n >= 1 && g.n <= 12, where + ' guruh ' + g.n));
        if (d.scheme && d.scheme.parts) d.scheme.parts.forEach(x => assert.ok(x > 0, where + ' sxema qismi ' + x));
      } else if (a.type === 'chain') { let v = d.start; d.ops.forEach(o => { v = o[0] === '+' ? v + o[1] : v - o[1]; assert.ok(Number.isInteger(v) && v >= 0 && v <= big, where + ' zanjir ' + v); }); }
      else if (a.type === 'choose') { assert.ok(d.a >= 0 && d.a < d.options.length, where); ['uz', 'ru', 'en'].forEach(l => assert.strictEqual(new Set(d.options.map(o => asText(o, l))).size, d.options.length, where + ' takroriy variant (' + l + ')')); }
      else if (a.type === 'order') ['uz', 'ru', 'en'].forEach(l => assert.strictEqual(new Set(d.items.map(o => asText(o, l))).size, d.items.length, where + ' takroriy element'));
      else if (a.type === 'drill') assert.ok(isNum(d.a) && d.a >= 0 && d.a <= big, where + ' ' + JSON.stringify(d.q) + ' = ' + d.a);
      else if (a.type === 'column') { assert.strictEqual(d.ans, d.op === '+' ? d.a + d.b : d.op === '*' ? d.a * d.b : d.a - d.b, where); assert.ok(d.ans >= 0 && d.ans <= big, where); }
      else if (a.type === 'clock') assert.ok(d.h >= 1 && d.h <= 12 && d.m >= 0 && d.m < 60 && d.m % 5 === 0, where + ' ' + d.h + ':' + d.m);
      else if (a.type === 'grid') { assert.ok(d.a >= 1 && d.a <= 12 && d.b >= 1 && d.b <= 7, where); assert.strictEqual(d.ans, d.ask === 'perimeter' ? 2 * (d.a + d.b) : d.a * d.b, where); }
      else if (a.type === 'ruler') assert.ok(d.len > 0 && (d.start || 0) + d.len <= (d.max || 15), where);
      else if (a.type === 'scale') assert.ok(d.mass > 0 && d.mass <= 30, where);
      else if (a.type === 'jugs') assert.ok(d.cap > 0 && d.cap <= 12, where);
      else if (a.type === 'polygon') assert.strictEqual(d.ans, d.kind === 'rect' ? 2 * (d.sides[0] + d.sides[1]) : d.sides.reduce((x, y) => x + y, 0), where);
      else if (a.type === 'numline') { assert.ok(typeof d.ans === 'number' && Number.isFinite(d.ans), where + ' javob'); assert.ok(d.max > d.min && d.step > 0 && Number.isInteger(Math.round((d.max - d.min) / d.step)), where + ' nur'); (d.points || []).forEach(p => assert.ok(p[0] >= d.min && p[0] <= d.max, where + ' nuqta ' + p[0])); }
      else if (a.type === 'coord') assert.ok([d.x, d.y].every(v => Number.isInteger(v) && v >= 0 && v <= 8), where + ' (' + d.x + ';' + d.y + ')');
      if (d.scene) d.scene.forEach(g => assert.ok(K.objects.includes(g.obj), where + ' 3D ob’ekt ' + g.obj));
      if (d.groups) d.groups.forEach(g => assert.ok(K.objects.includes(g.obj), where + ' 3D ob’ekt ' + g.obj));
    }
  })));
});
test('tarjimalar: barcha kalitlar uch tilda', () => {
  const ctx = { localStorage: { getItem: () => null }, navigator: { language: 'uz' }, document: {} }; ctx.window = ctx; vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(__dirname, '../js/i18n.js'), 'utf8').replace(/\(this\)\s*;\s*$/, '(window);'), ctx);
  const S = ctx.I18n.strings, keys = Object.keys(S.uz);
  ['ru', 'en'].forEach(l => { const miss = keys.filter(k => !(k in S[l])); assert.deepStrictEqual(miss, [], l + ' da yo‘q'); });
  // kodda ishlatilgan T('...') kalitlari mavjudmi
  const src = ['app.js', 'plotter.js', 'geometry.js', 'solids.js', 'solver.js', 'intro.js'].map(f => fs.readFileSync(path.join(__dirname, '../js', f), 'utf8')).join('\n');
  const used = new Set([...src.matchAll(/\b[TF]\('([a-zA-Z]+\.[a-zA-Z0-9]+)'/g)].map(m => m[1]));
  const missing = [...used].filter(k => !(k in S.uz)); assert.deepStrictEqual(missing, []);
});

console.log((failed ? '\n' : '') + passed + ' ta test o‘tdi' + (failed ? ', ' + failed + ' ta xato' : ' ✓'));
process.exit(failed ? 1 : 0);
