// Mavzu testlari: har bir mavzu uchun buildQuiz kamida 10 ta to'g'ri savol beradimi? node test/quiz-check.js
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.join(__dirname, '..');
const ctx = {}; ctx.window = ctx; vm.createContext(ctx);
const files = ['js/kids.js', 'js/theory.js', 'js/curriculum/index.js', 'js/curriculum/helpers.js'].concat(fs.readdirSync(path.join(root, 'js/curriculum')).filter(f => /^g\d/.test(f)).sort().map(f => 'js/curriculum/' + f));
files.forEach(f => vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx, { filename: f }));
const C = ctx.NMCurriculum, K = ctx.NMKids;
const bad = new Set(); let tot = 0, min = 99;
const asText = (v, l) => v && typeof v === 'object' && 'uz' in v ? v[l] : String(v);
C.grades.forEach(g => g.parts.forEach(p => C.topics(p).forEach(t => {
  for (let i = 0; i < 5; i++) {
    const qs = K.buildQuiz(t, 10); tot++; min = Math.min(min, qs.length);
    if (qs.length < 10) bad.add(p.grade + '-' + p.part + ' ' + t.id + ' n=' + qs.length + ' acts=' + t.acts.map(a => a.type).join(','));
    qs.forEach(q => ['uz', 'ru', 'en'].forEach(l => {
      const o = q.o.map(x => asText(x, l));
      if (new Set(o).size !== o.length) bad.add(p.grade + '-' + p.part + ' ' + t.id + ' dup ' + l + ': ' + o.join(' | '));
      if (!(q.a >= 0 && q.a < o.length)) bad.add(p.grade + '-' + p.part + ' ' + t.id + ' idx');
      if (!asText(q.q, l)) bad.add(p.grade + '-' + p.part + ' ' + t.id + ' empty q ' + l);
    }));
  }
})));
console.log('checked', tot, 'quizzes; min questions', min, '; problems', bad.size);
console.log([...bad].slice(0, 40).join('\n'));
process.exit(bad.size ? 1 : 0);
