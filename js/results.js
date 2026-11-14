// Nuvemath — natijalar paneli (o‘quvchi, ota-ona va o‘qituvchi uchun) va chop etiladigan ish varaqlari.
(function (root) {
  'use strict';
  var Kd = root.NMKids, CUR = root.NMCurriculum, tx = Kd.tx;
  function L(uz, ru, en) { return { uz: uz, ru: ru, en: en }; }
  var S = {
    title: L('Natijalarim', 'Мои результаты', 'My results'),
    sub: L('Barcha sinflar bo‘yicha o‘qilgan mavzular, test natijalari, zaif joylar va yutuqlar. Sahifani chop etib, o‘qituvchi yoki ota-onaga ko‘rsatish mumkin.', 'Прочитанные темы, результаты тестов, слабые места и достижения по всем классам. Страницу можно распечатать и показать учителю или родителям.', 'Topics read, test scores, weak spots and achievements across all grades. Print this page to show a teacher or parent.'),
    print: L('Chop etish / PDF', 'Печать / PDF', 'Print / PDF'), read: L('o‘qilgan mavzu', 'прочитано тем', 'topics read'), tests: L('topshirilgan test', 'пройдено тестов', 'tests taken'),
    avg: L('o‘rtacha natija', 'средний результат', 'average score'), mastered: L('o‘zlashtirilgan (≥80%)', 'усвоено (≥80%)', 'mastered (≥80%)'), ready: L('imtihonga tayyorgarlik', 'готовность к экзамену', 'exam readiness'),
    byGrade: L('Sinflar bo‘yicha', 'По классам', 'By grade'), grade: L('sinf', 'класс', 'grade'), weak: L('Zaif mavzular (test natijasi 60% dan past)', 'Слабые темы (результат ниже 60%)', 'Weak topics (score below 60%)'),
    noWeak: L('Zaif mavzular yo‘q — ajoyib! 👏', 'Слабых тем нет — отлично! 👏', 'No weak topics — great! 👏'), recent: L('So‘nggi testlar', 'Последние тесты', 'Recent tests'), noRecent: L('Hali test topshirilmagan.', 'Тестов пока нет.', 'No tests yet.'),
    review: L('Takrorlash kerak', 'Нужно повторить', 'Due for review'), open: L('Ochish', 'Открыть', 'Open'), date: L('Sana', 'Дата', 'Date'),
    sheet: L('Ish varag‘i', 'Рабочий лист', 'Worksheet'), name: L('Ism-familiya', 'Имя и фамилия', 'Name'), cls: L('Sinf', 'Класс', 'Class'),
    answers: L('Javoblar', 'Ответы', 'Answer key'), newVar: L('Yangi variant', 'Новый вариант', 'New version'), variant: L('Variant', 'Вариант', 'Version'),
    instr: L('Har bir savolga to‘g‘ri javobni belgilang.', 'Отметьте правильный ответ на каждый вопрос.', 'Circle the correct answer to each question.'), back: L('Mavzuga qaytish', 'Вернуться к теме', 'Back to the topic'),
    score: L('Ball', 'Баллы', 'Score')
  };
  function s(k) { return tx(S[k]); }
  function P() { try { return JSON.parse(localStorage.getItem('ak-progress') || '{}'); } catch (e) { return {}; } }
  function uid(p, t) { return 'g' + p.grade + 'p' + p.part + '-' + t; }
  function pc(c) { return c >= 80 ? 'great' : c >= 50 ? 'ok' : 'low'; }

  function mount(view) {
    var pr = P(), read = pr.read || {}, quiz = pr.quiz || {}, all = [], weak = [], recent = [];
    CUR.grades.forEach(function (g) { g.parts.forEach(function (p) { CUR.topics(p).forEach(function (t) { var id = uid(p, t.id), q = quiz[id]; all.push({ g: g.n, p: p, t: t, id: id, read: !!read[id], q: q }); }); }); });
    var tested = all.filter(function (x) { return x.q && x.q.total; });
    var avg = tested.length ? Math.round(tested.reduce(function (a, x) { return a + x.q.best / x.q.total; }, 0) / tested.length * 100) : 0;
    var mast = tested.filter(function (x) { return x.q.best / x.q.total >= 0.8; }).length;
    tested.forEach(function (x) { if (x.q.best / x.q.total < 0.6) weak.push(x); if (x.q.at) recent.push(x); });
    weak.sort(function (a, b) { return a.q.best / a.q.total - b.q.best / b.q.total; });
    recent.sort(function (a, b) { return b.q.at - a.q.at; });
    var ex = (function () { try { return JSON.parse(localStorage.getItem('nm-exam') || '{}'); } catch (e) { return {}; } })(), chs = root.NMExam ? root.NMExam.chapters : [];
    var ready = chs.length ? Math.round(chs.reduce(function (a, c) { var r = ex.ch && ex.ch[c.id]; return a + (r ? r.best / r.total : 0); }, 0) / chs.length * 100) : 0;
    var rv = root.NMReview ? root.NMReview.counts() : { due: 0, total: 0 };
    function stat(v, l, cls) { return '<div class="rs-st ' + (cls || '') + '"><b>' + v + '</b><span>' + l + '</span></div>'; }
    view.innerHTML =
      '<section class="kd-hero rs-hero"><span class="kd-badge">📊 ' + s('title') + '</span><h1>' + s('title') + '</h1><p>' + s('sub') + '</p>' +
      '<div class="row gap wrap no-print"><button class="btn" id="rs-print">🖨️ ' + s('print') + '</button>' + (rv.total ? '<a class="btn ghost" href="#takror">🔁 ' + s('review') + ': ' + rv.due + '</a>' : '') + '</div>' +
      '<p class="rs-date">' + s('date') + ': ' + new Date().toLocaleDateString() + '</p></section>' +
      '<div class="rs-stats">' + stat(all.filter(function (x) { return x.read; }).length + ' / ' + all.length, s('read')) + stat(tested.length, s('tests')) + stat(avg + '%', s('avg'), pc(avg)) + stat(mast, s('mastered'), 'great') + stat(ready + '%', s('ready')) + '</div>' +
      (root.NMGame ? root.NMGame.panel() : '') +
      '<div class="card"><h3>📚 ' + s('byGrade') + '</h3><div class="rs-grades">' + CUR.grades.filter(function (g) { return g.parts.length; }).map(function (g) {
        var tops = all.filter(function (x) { return x.g === g.n; }), rd = tops.filter(function (x) { return x.read; }).length, ts = tops.filter(function (x) { return x.q && x.q.total; });
        var av = ts.length ? Math.round(ts.reduce(function (a, x) { return a + x.q.best / x.q.total; }, 0) / ts.length * 100) : null;
        return '<a class="rs-gr" href="#darslik/' + g.n + '"><b>' + g.n + '</b><div><small>' + g.n + '-' + s('grade') + ' · ' + rd + '/' + tops.length + ' · ' + ts.length + ' ' + s('tests') + '</small><div class="bar"><span style="width:' + Math.round(rd / tops.length * 100) + '%"></span></div></div>' +
          (av !== null ? '<i class="ex-pc ' + pc(av) + '">' + av + '%</i>' : '<i class="rs-na">—</i>') + '</a>';
      }).join('') + '</div></div>' +
      '<div class="card"><h3>⚠️ ' + s('weak') + '</h3>' + (weak.length ? '<ul class="rs-list">' + weak.slice(0, 30).map(function (x) { var c = Math.round(x.q.best / x.q.total * 100); return '<li><a href="#darslik/' + x.g + '/' + x.p.part + '/' + x.t.id + '">' + x.g + '-' + s('grade') + ' · ' + tx(x.t.title) + '</a><i class="ex-pc ' + pc(c) + '">' + x.q.best + '/' + x.q.total + '</i></li>'; }).join('') + '</ul>' : '<p>' + s('noWeak') + '</p>') + '</div>' +
      '<div class="card"><h3>🕘 ' + s('recent') + '</h3>' + (recent.length ? '<ul class="rs-list">' + recent.slice(0, 12).map(function (x) { var c = Math.round(x.q.best / x.q.total * 100); return '<li><a href="#darslik/' + x.g + '/' + x.p.part + '/' + x.t.id + '">' + x.g + '-' + s('grade') + ' · ' + tx(x.t.title) + '</a><small>' + new Date(x.q.at).toLocaleDateString() + '</small><i class="ex-pc ' + pc(c) + '">' + c + '%</i></li>'; }).join('') + '</ul>' : '<p class="muted">' + s('noRecent') + '</p>') + '</div>';
    document.getElementById('rs-print').onclick = function () { window.print(); };
  }

  // ---------- Ish varag'i: #varaq/<sinf>/<qism>/<mavzu> ----------
  function sheet(view, args) {
    var part = CUR.part(+args[0], +args[1]), t = part && CUR.topics(part).filter(function (x) { return x.id === args[2]; })[0];
    if (!t) { view.innerHTML = '<p class="muted">—</p>'; return; }
    var v = Math.floor(Math.random() * 900) + 100, qs = Kd.buildQuiz(t, 12).slice(0, 12);
    var opts = qs.map(function (q) { return Kd.shuffle(q.o.map(function (o, i) { return { t: tx(o), ok: i === q.a }; })); });
    var key = opts.map(function (o) { for (var j = 0; j < o.length; j++) if (o[j].ok) return 'ABCD'[j]; return '?'; });
    view.innerHTML = '<div class="row gap wrap no-print ws-tools"><a class="btn ghost sm" href="#darslik/' + part.grade + '/' + part.part + '/' + t.id + '">← ' + s('back') + '</a><span class="grow"></span><button class="btn sm ghost" id="ws-new">🔀 ' + s('newVar') + '</button><button class="btn sm" id="ws-print">🖨️ ' + s('print') + '</button></div>' +
      '<article class="ws-page"><header class="ws-head"><div><b>Nuvemath · ' + s('sheet') + '</b><small>' + part.grade + '-' + s('grade') + ' · ' + tx(t.title) + '</small></div><div class="ws-v">' + s('variant') + ' ' + v + '</div></header>' +
      '<div class="ws-fields"><span>' + s('name') + ': ______________________________</span><span>' + s('cls') + ': ______</span><span>' + s('date') + ': ____________</span></div>' +
      '<p class="ws-instr">' + s('instr') + '</p><ol class="ws-qs">' + qs.map(function (q, i) {
        return '<li><div class="ws-q">' + tx(q.q) + '</div>' + (q.pic ? '<div class="ws-pic">' + q.pic + '</div>' : '') + '<div class="ws-o">' + opts[i].map(function (o, j) { return '<span><b>' + 'ABCD'[j] + ')</b> ' + o.t + '</span>'; }).join('') + '</div></li>';
      }).join('') + '</ol><div class="ws-score">' + s('score') + ': ____ / ' + qs.length + '</div></article>' +
      '<article class="ws-page ws-key"><header class="ws-head"><div><b>' + s('answers') + '</b><small>' + tx(t.title) + '</small></div><div class="ws-v">' + s('variant') + ' ' + v + '</div></header>' +
      '<div class="ws-keys">' + key.map(function (k, i) { return '<span>' + (i + 1) + ' — <b>' + k + '</b></span>'; }).join('') + '</div></article>';
    document.getElementById('ws-print').onclick = function () { window.print(); };
    document.getElementById('ws-new').onclick = function () { sheet(view, args); };
  }

  root.NMResults = { mount: mount, sheet: sheet };
})(this);
