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

// ---------- Darslik ma'lumotlari ----------
test('darsliklar to‘liq va uch tilda', () => {
  const ctx = {}; vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(__dirname, '../js/lessons.js'), 'utf8'), ctx);
  const L = ctx.LESSONS; assert.ok(L.length >= 18);
  const ids = new Set();
  L.forEach(l => {
    assert.ok(!ids.has(l.id), 'takroriy id ' + l.id); ids.add(l.id);
    ['title', 'theory'].forEach(k => ['uz', 'ru', 'en'].forEach(lang => assert.ok(l[k][lang], l.id + ' ' + k + ' ' + lang)));
    assert.ok(l.formulas.length && l.example.steps.length && l.quiz.length, l.id);
    l.quiz.forEach(q => assert.ok(q.a >= 0 && q.a < q.o.length, l.id + ' quiz javob indeksi'));
    assert.ok(['plot', 'geo', 'solid', 'calc', 'practice'].includes(l.widget.type), l.id);
    if (l.solve) Solver.solveEquation(l.solve);
    if (l.widget.fns) l.widget.fns.forEach(f => Expr.parse(f));
  });
});
test('tarjimalar: barcha kalitlar uch tilda', () => {
  const ctx = { localStorage: { getItem: () => null }, navigator: { language: 'uz' }, document: {} }; ctx.window = ctx; vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(__dirname, '../js/i18n.js'), 'utf8').replace(/\(this\)\s*;\s*$/, '(window);'), ctx);
  const S = ctx.I18n.strings, keys = Object.keys(S.uz);
  ['ru', 'en'].forEach(l => { const miss = keys.filter(k => !(k in S[l])); assert.deepStrictEqual(miss, [], l + ' da yo‘q'); });
  // kodda ishlatilgan T('...') kalitlari mavjudmi
  const src = ['app.js', 'plotter.js', 'geometry.js', 'solids.js', 'solver.js'].map(f => fs.readFileSync(path.join(__dirname, '../js', f), 'utf8')).join('\n');
  const used = new Set([...src.matchAll(/T\('([a-zA-Z]+\.[a-zA-Z0-9]+)'\)/g)].map(m => m[1]));
  const missing = [...used].filter(k => !(k in S.uz)); assert.deepStrictEqual(missing, []);
});

console.log((failed ? '\n' : '') + passed + ' ta test o‘tdi' + (failed ? ', ' + failed + ' ta xato' : ' ✓'));
process.exit(failed ? 1 : 0);
