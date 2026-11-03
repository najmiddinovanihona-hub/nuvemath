// Nuvemath — darslik tuzilmasi: sinf → qism → bo'lim → mavzu.
// Har bir qism alohida faylda (masalan g1-3.js) NMCurriculum.addPart(...) orqali qo'shiladi.
(function (root) {
  'use strict';
  var GRADES = [];
  for (var g = 1; g <= 11; g++) GRADES.push({ n: g, parts: [] });
  var C = {
    grades: GRADES,
    addPart: function (p) {
      var gr = GRADES[p.grade - 1];
      gr.parts.push(p); gr.parts.sort(function (a, b) { return a.part - b.part; });
      p.sections.forEach(function (s) { s.topics.forEach(function (t) { t.section = s; t.partRef = p; }); });
    },
    part: function (grade, part) { var g = GRADES[grade - 1]; return g && g.parts.filter(function (p) { return p.part === part; })[0]; },
    topics: function (p) { return p.sections.reduce(function (a, s) { return a.concat(s.topics); }, []); },
    allTopics: function () { var a = []; GRADES.forEach(function (g) { g.parts.forEach(function (p) { a = a.concat(C.topics(p)); }); }); return a; },
    ROMAN: ['', 'I', 'II', 'III', 'IV']
  };
  root.NMCurriculum = C;
})(this);
