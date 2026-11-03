// Nazariya tekshiruvi: node test/theory-check.js [1-1 2-3 ...]  (argumentsiz — hamma qismlar)
// Talablar: har bir mavzuda kamida 10 sahifa (section), uz ≥ 1000 so'z, ru ≥ 800, en ≥ 800, hamma matnlar uch tilda.
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.join(__dirname, '..');
const MIN = { pages: 10, uz: 1000, ru: 800, en: 800 };
const KINDS = ['intro', 'def', 'history', 'rule', 'example', 'steps', 'mistake', 'life', 'fact', 'summary', 'practice', 'table'];
const ctx = { console }; ctx.window = ctx; vm.createContext(ctx);
const files = ['js/kids.js', 'js/theory.js', 'js/curriculum/index.js', 'js/curriculum/helpers.js'].concat(fs.readdirSync(path.join(root, 'js/curriculum')).filter(f => /^g\d/.test(f)).sort().map(f => 'js/curriculum/' + f));
files.forEach(f => vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx, { filename: f }));
const C = ctx.NMCurriculum, TH = ctx.NMTheory;
const want = process.argv.slice(2);
let problems = [], okTopics = 0, total = 0;
function tri(v, where) {
  if (v && typeof v === 'object' && !Array.isArray(v)) {
    if ('uz' in v) { ['uz', 'ru', 'en'].forEach(l => { if (typeof v[l] !== 'string' || !v[l].trim()) problems.push(where + ': ' + l + ' yo‘q'); }); return; }
    Object.keys(v).forEach(k => tri(v[k], where + '.' + k));
  } else if (Array.isArray(v)) v.forEach((x, i) => tri(x, where + '[' + i + ']'));
  else if (typeof v === 'string' && v.length > 3 && !/^[\d\s.,;:+\-−·×:=()%°√π²³⁴^<>≤≥≈∞∥⊥∈∉⊂∩∪!?/'’‘"a-zA-Z]*$/.test(v)) problems.push(where + ': bir tilli matn: ' + v.slice(0, 40));
}
C.grades.forEach(g => g.parts.forEach(p => {
  const key = p.grade + '-' + p.part; if (want.length && want.indexOf(key) < 0) return;
  const f = path.join(root, 'js/theory/g' + key + '.js');
  if (!fs.existsSync(f)) { problems.push(key + ': fayl yo‘q (js/theory/g' + key + '.js)'); C.topics(p).forEach(() => total++); return; }
  try { vm.runInContext(fs.readFileSync(f, 'utf8'), ctx, { filename: f }); } catch (e) { problems.push(key + ': sintaksis xatosi — ' + e.message); return; }
  C.topics(p).forEach(t => {
    total++;
    const spec = TH.get(key, t.id), where = key + ' ' + t.id;
    if (!spec) { problems.push(where + ': nazariya yo‘q'); return; }
    const secs = spec.sections || [];
    const st = { uz: TH.stats(spec, 'uz'), ru: TH.stats(spec, 'ru'), en: TH.stats(spec, 'en') };
    let bad = 0;
    if (secs.length < MIN.pages) { problems.push(where + ': sahifalar ' + secs.length + ' < ' + MIN.pages); bad++; }
    ['uz', 'ru', 'en'].forEach(l => { if (st[l].words < MIN[l]) { problems.push(where + ': ' + l + ' so‘zlar ' + st[l].words + ' < ' + MIN[l]); bad++; } });
    secs.forEach((s, i) => {
      if (!s.h) { problems.push(where + ' [' + i + ']: sarlavha yo‘q'); bad++; }
      if (s.kind && KINDS.indexOf(s.kind) < 0) { problems.push(where + ' [' + i + ']: noma’lum kind ' + s.kind); bad++; }
      if (!(s.p && s.p.length) && !s.list && !s.table && !s.ex) { problems.push(where + ' [' + i + ']: bo‘sh sahifa'); bad++; }
    });
    const before = problems.length; tri(spec, where); if (problems.length > before) bad++;
    const hasEx = secs.some(s => s.ex && s.ex.length), hasMist = secs.some(s => s.kind === 'mistake'), hasLife = secs.some(s => s.kind === 'life'), hasSum = secs.some(s => s.kind === 'summary');
    if (!hasEx) { problems.push(where + ': yechilgan namuna (ex) yo‘q'); bad++; }
    if (!hasMist || !hasLife || !hasSum) { problems.push(where + ': mistake/life/summary sahifalaridan biri yo‘q'); bad++; }
    if (!bad) okTopics++;
    if (want.length) console.log((bad ? '✗ ' : '✓ ') + where + '  ' + secs.length + ' p · uz ' + st.uz.words + ' · ru ' + st.ru.words + ' · en ' + st.en.words);
  });
}));
console.log('\n' + okTopics + ' / ' + total + ' mavzu talabga javob beradi' + (problems.length ? ', muammolar: ' + problems.length : ' ✓'));
if (problems.length) console.log(problems.slice(0, 60).join('\n'));
process.exit(problems.length ? 1 : 0);
