// Nuvemath — Imtihonga tayyorlov: boblar bo‘yicha testlar va vaqtli sinov imtihoni.
// Boblar tuzilishi F.R. Usmonov, R.D. Isomov, B.O. Xo‘jayev «Matematikadan qo‘llanma» (I qism — algebra, II qism — geometriya)
// mundarijasiga mos; savollar Nuvemath darsligidagi (5–11-sinf) mavzu testlari va topshiriq generatorlaridan har safar yangidan tuziladi.
(function (root) {
  'use strict';
  var Kd = root.NMKids, CUR = root.NMCurriculum, tx = Kd.tx;
  function L(uz, ru, en) { return { uz: uz, ru: ru, en: en }; }
  function rng(p, a, b) { var o = []; for (var i = a; i <= b; i++) o.push(p + '-t' + i); return o; }

  // ---------- Boblar (Usmonov qo‘llanmasi mundarijasi bo‘yicha) → darslik mavzulari ----------
  var CH = [
    { id: 'A1', ic: '🔢', t: L('Natural sonlar', 'Натуральные числа', 'Natural numbers'), tp: ['g5p1-t3', 'g5p1-t5', 'g7p1-t1', 'g7p1-t2'] },
    { id: 'A2', ic: '½', t: L('Ratsional va irratsional sonlar. Foizlar', 'Рациональные и иррациональные числа. Проценты', 'Rational and irrational numbers. Percentages'), tp: ['g5p1-t8', 'g5p1-t9', 'g5p1-t11', 'g6p1-t7', 'g7p1-t7', 'g5p1-t19', 'g5p2-t7', 'g5p2-t8', 'g6p1-t12', 'g6p1-t13', 'g5p2-t10'] },
    { id: 'A3', ic: '𝑥²', t: L('Birhadlar va ko‘phadlar. Algebraik kasrlar', 'Одночлены и многочлены. Алгебраические дроби', 'Monomials and polynomials. Algebraic fractions'), tp: rng('g7p2', 2, 11).concat(rng('g8p1', 1, 3)) },
    { id: 'A4', ic: '⚖️', t: L('Chiziqli tenglama va tengsizliklar', 'Линейные уравнения и неравенства', 'Linear equations and inequalities'), tp: ['g7p1-t12', 'g7p1-t13', 'g7p2-t12', 'g7p2-t15', 'g7p2-t16', 'g8p1-t7', 'g8p1-t8', 'g8p1-t9', 'g8p1-t10'] },
    { id: 'A5', ic: '√', t: L('Ildizlar va ratsional ko‘rsatkichli daraja', 'Корни и степень с рациональным показателем', 'Roots and rational exponents'), tp: ['g7p1-t3', 'g7p2-t2', 'g8p1-t5', 'g8p1-t6'] },
    { id: 'A6', ic: '𝐷', t: L('Kvadrat tenglamalar va kvadrat funksiya', 'Квадратные уравнения и квадратичная функция', 'Quadratic equations and functions'), tp: rng('g8p1', 12, 16).concat(['g9p1-t1', 'g9p1-t2', 'g9p1-t7']) },
    { id: 'A7', ic: '≥', t: L('Ikkinchi darajali tengsizliklar. Irratsional tenglamalar', 'Неравенства второй степени. Иррациональные уравнения', 'Quadratic inequalities. Irrational equations'), tp: ['g9p1-t3', 'g9p1-t4', 'g9p1-t8', 'g10p1-t8', 'g10p1-t9'] },
    { id: 'A8', ic: '𝑓', t: L('Funksiya va uning xossalari', 'Функция и её свойства', 'Functions and their properties'), tp: ['g7p2-t14', 'g8p1-t4', 'g9p1-t5', 'g10p1-t2', 'g10p1-t3', 'g10p1-t4', 'g10p1-t5'] },
    { id: 'A9', ic: '𝑃', t: L('Ko‘phadlar va ratsional tenglamalar', 'Многочлены и рациональные уравнения', 'Polynomials and rational equations'), tp: ['g7p2-t5', 'g7p2-t6', 'g9p1-t6', 'g10p1-t7'] },
    { id: 'A10', ic: '⋯', t: L('Sonli ketma-ketliklar. Progressiyalar', 'Числовые последовательности. Прогрессии', 'Sequences. Progressions'), tp: rng('g9p1', 15, 18) },
    { id: 'A11', ic: '㏒', t: L('Ko‘rsatkichli va logarifmik funksiyalar', 'Показательная и логарифмическая функции', 'Exponential and logarithmic functions'), tp: rng('g10p1', 10, 15) },
    { id: 'A12', ic: '∡', t: L('Trigonometriya. Trigonometrik funksiyalar', 'Тригонометрия. Тригонометрические функции', 'Trigonometry. Trigonometric functions'), tp: rng('g9p1', 9, 14).concat(['g10p1-t16', 'g10p1-t17']) },
    { id: 'A13', ic: '∿', t: L('Trigonometrik tenglama va tengsizliklar', 'Тригонометрические уравнения и неравенства', 'Trigonometric equations and inequalities'), tp: ['g10p1-t18', 'g10p1-t19'] },
    { id: 'A14', ic: '𝑓′', t: L('Hosila va uning tatbiqlari', 'Производная и её применения', 'The derivative and its uses'), tp: rng('g11p1', 1, 9) },
    { id: 'A15', ic: '∫', t: L('Boshlang‘ich funksiya va integral', 'Первообразная и интеграл', 'Antiderivative and integral'), tp: rng('g11p1', 10, 14) },
    { id: 'A16', ic: '🎲', t: L('Kombinatorika, statistika va ehtimollik', 'Комбинаторика, статистика и вероятность', 'Combinatorics, statistics and probability'), tp: ['g7p2-t18', 'g8p1-t18', 'g8p1-t19', 'g9p1-t19', 'g9p1-t20', 'g10p1-t20'].concat(rng('g11p1', 15, 20)) },
    { id: 'G1', ic: '📐', t: L('Geometriyaning asosiy tushunchalari', 'Основные понятия геометрии', 'Basic notions of geometry'), tp: ['g5p2-t12', 'g5p2-t13', 'g7p3-t1', 'g7p3-t2', 'g7p3-t3', 'g7p3-t7', 'g7p3-t8'] },
    { id: 'G2', ic: '△', t: L('Uchburchak. Metrik munosabatlar', 'Треугольник. Метрические соотношения', 'Triangles. Metric relations'), tp: ['g7p3-t4', 'g7p3-t5', 'g7p3-t6', 'g7p3-t9', 'g7p3-t10', 'g7p3-t11', 'g8p2-t11', 'g8p2-t12', 'g8p2-t13', 'g9p2-t2', 'g9p2-t3', 'g9p2-t4', 'g9p2-t8', 'g9p2-t9', 'g9p2-t10', 'g9p2-t11', 'g9p2-t17'] },
    { id: 'G3', ic: '▱', t: L('To‘rtburchaklar va ularning xossalari', 'Четырёхугольники и их свойства', 'Quadrilaterals and their properties'), tp: ['g8p2-t2', 'g8p2-t3', 'g8p2-t4', 'g8p2-t5', 'g8p2-t6', 'g8p2-t8', 'g8p2-t9', 'g8p2-t10'] },
    { id: 'G4', ic: '⬡', t: L('Ko‘pburchaklar', 'Многоугольники', 'Polygons'), tp: ['g7p1-t18', 'g8p2-t1', 'g9p2-t13', 'g9p2-t14'] },
    { id: 'G5', ic: '◯', t: L('Aylana va doira', 'Окружность и круг', 'Circle and disc'), tp: ['g6p1-t14', 'g6p1-t16', 'g8p2-t14', 'g8p2-t15', 'g8p2-t16', 'g8p2-t17', 'g9p2-t15', 'g9p2-t16', 'g9p2-t18'] },
    { id: 'G6', ic: '➡️', t: L('Vektorlar va almashtirishlar', 'Векторы и преобразования', 'Vectors and transformations'), tp: ['g8p2-t18', 'g8p2-t19', 'g8p2-t20', 'g9p2-t5', 'g9p2-t6', 'g9p2-t7', 'g9p2-t12'] },
    { id: 'G7', ic: '🧊', t: L('Stereometriyaning asosiy tushunchalari', 'Основные понятия стереометрии', 'Basics of solid geometry'), tp: rng('g10p2', 3, 14) },
    { id: 'G8', ic: '🧭', t: L('Fazoda koordinatalar va vektorlar', 'Координаты и векторы в пространстве', 'Coordinates and vectors in space'), tp: rng('g11p2', 1, 3) },
    { id: 'G9', ic: '🔺', t: L('Ko‘pyoqlar: prizma va piramida', 'Многогранники: призма и пирамида', 'Polyhedra: prism and pyramid'), tp: ['g10p2-t4', 'g11p2-t4', 'g11p2-t5', 'g11p2-t6', 'g11p2-t8', 'g11p2-t9'] },
    { id: 'G10', ic: '🌐', t: L('Aylanish jismlari: silindr, konus, shar', 'Тела вращения: цилиндр, конус, шар', 'Solids of revolution: cylinder, cone, ball'), tp: ['g11p2-t7', 'g11p2-t10', 'g11p2-t11', 'g11p2-t12', 'g11p2-t13'] }
  ];
  var BY = {}; CH.forEach(function (c) { BY[c.id] = c; });

  var S = {
    title: L('Imtihonga tayyorlov', 'Подготовка к экзамену', 'Exam preparation'),
    sub: L('Milliy sertifikat, DTM va bitiruv imtihonlariga tayyorlaning: boblar bo‘yicha testlar va vaqt cheklangan to‘liq sinov imtihoni. Savollar har safar yangidan tuziladi.', 'Готовьтесь к национальному сертификату, вступительным и выпускным экзаменам: тесты по главам и полный пробный экзамен на время. Вопросы каждый раз новые.', 'Prepare for the national certificate, entrance and final exams: chapter tests and a full timed mock exam. Questions are new every time.'),
    src: L('Boblar tuzilishi: F.R. Usmonov, R.D. Isomov, B.O. Xo‘jayev, «Matematikadan qo‘llanma», I–II qism. Savollar — Nuvemath darsligi (5–11-sinf) asosida.', 'Структура глав: Ф.Р. Усмонов, Р.Д. Исомов, Б.О. Ходжаев, «Пособие по математике», ч. I–II. Вопросы — по учебнику Nuvemath (5–11 классы).', 'Chapter structure: F.R. Usmonov, R.D. Isomov, B.O. Khojayev, “A Mathematics Handbook”, parts I–II. Questions come from the Nuvemath textbook (grades 5–11).'),
    mock: L('Sinov imtihoni', 'Пробный экзамен', 'Mock exam'),
    mockFull: L('To‘liq: 30 savol · 60 daqiqa', 'Полный: 30 вопросов · 60 минут', 'Full: 30 questions · 60 minutes'),
    mockShort: L('Qisqa: 15 savol · 25 daqiqa', 'Короткий: 15 вопросов · 25 минут', 'Short: 15 questions · 25 minutes'),
    mockAlg: L('Faqat algebra: 20 savol · 40 daqiqa', 'Только алгебра: 20 вопросов · 40 минут', 'Algebra only: 20 questions · 40 minutes'),
    mockGeo: L('Faqat geometriya: 20 savol · 40 daqiqa', 'Только геометрия: 20 вопросов · 40 минут', 'Geometry only: 20 questions · 40 minutes'),
    mockNote: L('Javoblar oxirida ko‘rsatiladi. Vaqt tugasa, imtihon avtomatik yakunlanadi.', 'Ответы показываются в конце. Когда время выйдет, экзамен завершится автоматически.', 'Answers are shown at the end. When time runs out, the exam ends automatically.'),
    chapters: L('Boblar bo‘yicha tayyorlov', 'Подготовка по главам', 'Practice by chapter'),
    alg: L('Algebra va analiz asoslari', 'Алгебра и начала анализа', 'Algebra and analysis'), geo: L('Geometriya', 'Геометрия', 'Geometry'),
    topics: L('mavzu', 'тем', 'topics'), best: L('eng yaxshi', 'лучший', 'best'), start: L('Boshlash', 'Начать', 'Start'),
    finish: L('Imtihonni yakunlash', 'Завершить экзамен', 'Finish the exam'), left: L('Qolgan vaqt', 'Осталось', 'Time left'),
    answered: L('Javob berildi', 'Отвечено', 'Answered'), confirm: L('Hamma savollarga javob bermadingiz. Baribir yakunlaysizmi?', 'Вы ответили не на все вопросы. Всё равно завершить?', 'You have not answered every question. Finish anyway?'),
    result: L('Natija', 'Результат', 'Result'), byCh: L('Boblar bo‘yicha', 'По главам', 'By chapter'), weak: L('Takrorlash tavsiya etiladi', 'Рекомендуется повторить', 'Worth reviewing'),
    review: L('Savollar tahlili', 'Разбор вопросов', 'Question review'), your: L('Sizning javobingiz', 'Ваш ответ', 'Your answer'), none: L('javob berilmagan', 'нет ответа', 'not answered'),
    again: L('Yana topshirish', 'Пройти снова', 'Try again'), back: L('Imtihon bo‘limiga', 'К разделу экзаменов', 'Back to exams'), time: L('Sarflangan vaqt', 'Затрачено', 'Time used'),
    lessons: L('Shu bob mavzulari (darslik)', 'Темы главы (учебник)', 'Lessons in this chapter'), chTest: L('Bob testi: 15 savol', 'Тест по главе: 15 вопросов', 'Chapter test: 15 questions'),
    history: L('So‘nggi sinov imtihonlari', 'Последние пробные экзамены', 'Recent mock exams'), noHist: L('Hali sinov imtihoni topshirilmagan.', 'Пробных экзаменов ещё не было.', 'No mock exams yet.'),
    grade: L('Baho', 'Оценка', 'Grade'), perfect: L('Ajoyib! Imtihonga tayyorsiz.', 'Отлично! Вы готовы к экзамену.', 'Excellent! You are exam-ready.'),
    good: L('Yaxshi natija. Zaif boblarni takrorlang.', 'Хороший результат. Повторите слабые главы.', 'Good result. Review the weaker chapters.'),
    mid: L('O‘rtacha. Quyidagi boblar ustida ishlang.', 'Средне. Поработайте над главами ниже.', 'Average. Work on the chapters below.'),
    low: L('Ko‘proq tayyorlanish kerak — boblarni birma-bir o‘ting.', 'Нужно больше подготовки — пройдите главы по очереди.', 'More practice needed — go through the chapters one by one.'),
    readiness: L('Tayyorgarlik darajasi', 'Уровень готовности', 'Readiness'), q: L('savol', 'вопросов', 'questions'), min: L('daq', 'мин', 'min')
  };
  function s(k) { return tx(S[k]); }

  // ---------- Saqlash ----------
  function load() { try { return Object.assign({ ch: {}, mocks: [] }, JSON.parse(localStorage.getItem('nm-exam') || '{}')); } catch (e) { return { ch: {}, mocks: [] }; } }
  function save(d) { try { localStorage.setItem('nm-exam', JSON.stringify(d)); } catch (e) {} }

  // ---------- Mavzu va savollar ----------
  var TOP = null;
  function topicIndex() {
    if (TOP) return TOP; TOP = {};
    CUR.grades.forEach(function (g) { g.parts.forEach(function (p) { CUR.topics(p).forEach(function (t) { TOP['g' + p.grade + 'p' + p.part + '-' + t.id] = { t: t, p: p }; }); }); });
    return TOP;
  }
  function chTopics(c) { var I = topicIndex(); return c.tp.map(function (k) { return I[k] ? { key: k, t: I[k].t, p: I[k].p } : null; }).filter(Boolean); }
  // n ta savol: boblar va mavzular bo‘yicha teng taqsimlanadi, takrorlanmaydi
  function makeQuestions(chs, n) {
    var pools = {}, out = [], seen = {}, order = [], guard = 0;
    chs.forEach(function (c) { chTopics(c).forEach(function (x) { order.push({ c: c, x: x }); }); });
    if (!order.length) return out;
    var byCh = chs.map(function (c) { return Kd.shuffle(order.filter(function (o) { return o.c === c; })); }).filter(function (a) { return a.length; });
    var ci = Math.floor(Math.random() * byCh.length), ti = {};
    while (out.length < n && guard++ < n * 30) {
      var list = byCh[ci % byCh.length], k = ci % byCh.length; ci++;
      ti[k] = (ti[k] || 0) + 1; var o = list[ti[k] % list.length];
      var pk = o.x.key, pool = pools[pk] || (pools[pk] = Kd.buildQuiz(o.x.t, 10).slice());
      var q = pool.pop(); if (!q) continue;
      var sig = JSON.stringify(q.q); if (seen[sig]) continue; seen[sig] = 1;
      out.push({ q: q, ch: o.c.id, key: pk, grade: o.x.p.grade, part: o.x.p.part, tid: o.x.t.id });
    }
    return Kd.shuffle(out);
  }

  // ---------- Ko‘rinishlar ----------
  var view, timer = null;
  function stopTimer() { if (timer) { clearInterval(timer); timer = null; } }
  function mount(el, args) {
    view = el; stopTimer();
    if (args[0] === 'bob' && BY[args[1]]) return runExam({ kind: 'ch', chs: [BY[args[1]]], n: 15, mins: 0, title: tx(BY[args[1]].t) });
    if (args[0] === 'sinov') {
      var m = MOCKS[args[1]] || MOCKS.full;
      return runExam({ kind: 'mock', mode: args[1] || 'full', chs: m.chs(), n: m.n, mins: m.mins, title: s('mock') + ' · ' + tx(S[m.label]) });
    }
    landing();
  }
  var MOCKS = {
    full: { n: 30, mins: 60, label: 'mockFull', chs: function () { return CH; } },
    short: { n: 15, mins: 25, label: 'mockShort', chs: function () { return CH; } },
    alg: { n: 20, mins: 40, label: 'mockAlg', chs: function () { return CH.filter(function (c) { return c.id[0] === 'A'; }); } },
    geo: { n: 20, mins: 40, label: 'mockGeo', chs: function () { return CH.filter(function (c) { return c.id[0] === 'G'; }); } }
  };
  function pctClass(p) { return p >= 80 ? 'great' : p >= 50 ? 'ok' : 'low'; }
  function landing() {
    var D = load();
    function card(c) {
      var r = D.ch[c.id], p = r ? Math.round(r.best / r.total * 100) : null;
      return '<a class="ex-ch" href="#imtihon/bob/' + c.id + '"><span class="ex-ic">' + c.ic + '</span><span class="ex-tt"><b>' + tx(c.t) + '</b><small>' + chTopics(c).length + ' ' + s('topics') + '</small></span>' +
        (p !== null ? '<span class="ex-pc ' + pctClass(p) + '">' + p + '%</span>' : '<span class="ex-go">' + s('start') + ' →</span>') + '</a>';
    }
    var hist = D.mocks.slice(-6).reverse();
    var ready = (function () { var ids = CH.map(function (c) { return c.id; }), sum = 0; ids.forEach(function (id) { var r = D.ch[id]; sum += r ? r.best / r.total : 0; }); return Math.round(sum / ids.length * 100); })();
    view.innerHTML =
      '<section class="kd-hero ex-hero"><span class="kd-badge">🎓 ' + s('title') + '</span><h1>' + s('title') + '</h1><p>' + s('sub') + '</p>' +
      '<div class="kd-progress"><div class="bar"><span style="width:' + ready + '%"></span></div><small>' + s('readiness') + ': <b>' + ready + '%</b></small></div></section>' +
      '<h2 class="kd-h2">⏱️ ' + s('mock') + '</h2><p class="muted small">' + s('mockNote') + '</p>' +
      '<div class="ex-mocks">' + ['full', 'short', 'alg', 'geo'].map(function (k) { return '<a class="ex-mock m-' + k + '" href="#imtihon/sinov/' + k + '"><b>' + tx(S[MOCKS[k].label]).split(':')[0] + '</b><span>' + tx(S[MOCKS[k].label]).split(':')[1] + '</span></a>'; }).join('') + '</div>' +
      '<div class="card ex-hist"><h3>📈 ' + s('history') + '</h3>' + (hist.length ? '<div class="ex-hbars">' + hist.map(function (h) { var p = Math.round(h.r / h.n * 100); return '<div class="ex-hb"><span class="' + pctClass(p) + '" style="height:' + Math.max(6, p) + '%"></span><b>' + p + '%</b><small>' + new Date(h.d).toLocaleDateString() + '</small></div>'; }).join('') + '</div>' : '<p class="muted">' + s('noHist') + '</p>') + '</div>' +
      '<h2 class="kd-h2">📚 ' + s('chapters') + '</h2>' +
      '<h3 class="ex-grp">' + s('alg') + '</h3><div class="ex-chs">' + CH.filter(function (c) { return c.id[0] === 'A'; }).map(card).join('') + '</div>' +
      '<h3 class="ex-grp">' + s('geo') + '</h3><div class="ex-chs">' + CH.filter(function (c) { return c.id[0] === 'G'; }).map(card).join('') + '</div>' +
      '<p class="kd-src">' + s('src') + '</p>';
  }

  function fmtTime(sec) { sec = Math.max(0, sec); var m = Math.floor(sec / 60), x = sec % 60; return m + ':' + (x < 10 ? '0' : '') + x; }
  function runExam(cfg) {
    var qs = makeQuestions(cfg.chs, cfg.n), ans = qs.map(function () { return -1; }), t0 = Date.now(), finished = false;
    var opts = qs.map(function (it) { return Kd.shuffle(it.q.o.map(function (v, i) { return { t: tx(v), ok: i === it.q.a }; })); });
    var c = cfg.kind === 'ch' ? cfg.chs[0] : null;
    view.innerHTML =
      '<nav class="kd-crumbs"><a href="#imtihon">' + s('title') + '</a><i>›</i><span>' + cfg.title + '</span></nav>' +
      '<section class="kd-hero small ex-hero"><span class="kd-badge">' + (c ? c.ic + ' ' + s('chTest') : '⏱️ ' + s('mock')) + '</span><h1>' + cfg.title + '</h1><p>' + qs.length + ' ' + s('q') + (cfg.mins ? ' · ' + cfg.mins + ' ' + s('min') : '') + ' · ' + s('mockNote') + '</p></section>' +
      '<div class="ex-bar" id="ex-bar"><span>' + s('answered') + ': <b id="ex-ans">0</b> / ' + qs.length + '</span>' + (cfg.mins ? '<span class="ex-timer" id="ex-timer">⏱ ' + fmtTime(cfg.mins * 60) + '</span>' : '') + '<button class="btn sm" id="ex-fin">' + s('finish') + '</button></div>' +
      '<div class="card ex-qs kd-secure-zone">' + qs.map(function (it, i) {
        return '<div class="kd-qz ex-q" data-i="' + i + '"><p class="kd-qz-q"><span>' + (i + 1) + '</span>' + tx(it.q.q) + '</p>' + (it.q.pic ? '<div class="kd-qz-pic">' + it.q.pic + '</div>' : '') +
          '<div class="kd-qz-o">' + opts[i].map(function (o, j) { return '<button class="kd-opt" data-j="' + j + '">' + String.fromCharCode(65 + j) + ') ' + o.t + '</button>'; }).join('') + '</div></div>';
      }).join('') + '</div><div id="ex-res"></div>' +
      (c ? '<div class="card"><h3>📖 ' + s('lessons') + '</h3><ul class="ex-links">' + chTopics(c).map(function (x) { return '<li><a href="#darslik/' + x.p.grade + '/' + x.p.part + '/' + x.t.id + '">' + x.p.grade + '-sinf · ' + tx(x.t.title) + '</a></li>'; }).join('') + '</ul></div>' : '');
    view.querySelectorAll('.ex-q').forEach(function (el) {
      var i = +el.getAttribute('data-i');
      el.querySelectorAll('.kd-opt').forEach(function (b) {
        b.onclick = function () { if (finished) return; ans[i] = +b.getAttribute('data-j'); el.querySelectorAll('.kd-opt').forEach(function (x) { x.classList.toggle('sel', x === b); }); el.classList.add('done'); document.getElementById('ex-ans').textContent = ans.filter(function (a) { return a >= 0; }).length; };
      });
    });
    document.getElementById('ex-fin').onclick = function () { if (ans.indexOf(-1) >= 0 && !confirm(s('confirm'))) return; finish(); };
    if (cfg.mins) {
      var end = t0 + cfg.mins * 60000;
      timer = setInterval(function () {
        var el = document.getElementById('ex-timer'); if (!el) { stopTimer(); return; }
        var left = Math.round((end - Date.now()) / 1000); el.textContent = '⏱ ' + fmtTime(left); el.classList.toggle('warn', left < 300);
        if (left <= 0) finish();
      }, 1000);
    }
    function finish() {
      if (finished) return; finished = true; stopTimer();
      var right = 0, per = {};
      qs.forEach(function (it, i) {
        var ok = ans[i] >= 0 && opts[i][ans[i]].ok; if (ok) right++;
        var pc = per[it.ch] || (per[it.ch] = { r: 0, n: 0, keys: {} }); pc.n++; if (ok) pc.r++; else pc.keys[it.key] = it;
        var el = view.querySelector('.ex-q[data-i="' + i + '"]'); el.classList.add('done', ok ? 'ex-ok' : 'ex-bad');
        el.querySelectorAll('.kd-opt').forEach(function (b, j) { if (opts[i][j].ok) b.classList.add('ok'); else if (j === ans[i]) b.classList.add('bad'); });
        if (ans[i] < 0) el.insertAdjacentHTML('beforeend', '<p class="ex-none">— ' + s('none') + '</p>');
      });
      var n = qs.length, pct = Math.round(right / Math.max(1, n) * 100), used = Math.round((Date.now() - t0) / 1000), D = load();
      if (cfg.kind === 'ch') { var id = cfg.chs[0].id, pr = D.ch[id]; if (!pr || right / n > pr.best / pr.total) D.ch[id] = { best: right, total: n }; }
      else { D.mocks.push({ d: Date.now(), r: right, n: n, t: used, m: cfg.mode }); if (D.mocks.length > 30) D.mocks = D.mocks.slice(-30); Object.keys(per).forEach(function (cid) { var p = per[cid], pr2 = D.ch[cid]; if (p.n >= 3 && (!pr2 || p.r / p.n > pr2.best / pr2.total)) D.ch[cid] = { best: p.r, total: p.n }; }); }
      save(D);
      if (root.NMGame) root.NMGame.award(right * 5, cfg.kind === 'mock' ? 'mock' : 'exam');
      var weak = Object.keys(per).map(function (cid) { return { c: BY[cid], p: per[cid] }; }).filter(function (w) { return w.p.r / w.p.n < 0.7; }).sort(function (a, b) { return a.p.r / a.p.n - b.p.r / b.p.n; });
      var grade = pct >= 86 ? 5 : pct >= 71 ? 4 : pct >= 56 ? 3 : 2;
      var res = document.getElementById('ex-res');
      res.innerHTML = '<div class="card ex-result"><h2>📊 ' + s('result') + '</h2><div class="ex-score ' + pctClass(pct) + '"><b>' + right + ' / ' + n + '</b><span>' + pct + '%</span><i>' + s('grade') + ': ' + grade + '</i></div>' +
        '<p>' + (pct >= 90 ? s('perfect') : pct >= 70 ? s('good') : pct >= 50 ? s('mid') : s('low')) + '</p><p class="muted small">' + s('time') + ': ' + fmtTime(used) + '</p>' +
        (cfg.kind === 'mock' ? '<h3>' + s('byCh') + '</h3><div class="ex-per">' + Object.keys(per).sort(function (x, y) { return CH.indexOf(BY[x]) - CH.indexOf(BY[y]); }).map(function (cid) { var p = per[cid], q = Math.round(p.r / p.n * 100); return '<a class="ex-pr" href="#imtihon/bob/' + cid + '"><span>' + BY[cid].ic + ' ' + tx(BY[cid].t) + '</span><div class="bar"><span class="' + pctClass(q) + '" style="width:' + q + '%"></span></div><b>' + p.r + '/' + p.n + '</b></a>'; }).join('') + '</div>' : '') +
        (weak.length ? '<h3>⚠️ ' + s('weak') + '</h3><ul class="ex-links">' + weak.map(function (w) { return Object.keys(w.p.keys).map(function (k) { var it = w.p.keys[k], I = topicIndex()[k]; return '<li><a href="#darslik/' + it.grade + '/' + it.part + '/' + it.tid + '">' + it.grade + '-sinf · ' + tx(I.t.title) + '</a></li>'; }).join(''); }).join('') + '</ul>' : '') +
        '<div class="row gap wrap"><button class="btn" id="ex-again">🔁 ' + s('again') + '</button><a class="btn ghost" href="#imtihon">← ' + s('back') + '</a></div><p class="muted small">↓ ' + s('review') + '</p></div>';
      if (pct >= 80) Kd.confetti(res);
      document.getElementById('ex-again').onclick = function () { runExam(cfg); window.scrollTo(0, 0); };
      document.getElementById('ex-fin').disabled = true;
      res.scrollIntoView({ behavior: 'smooth', block: 'start' });
      var qsEl = view.querySelector('.ex-qs'); res.parentNode.insertBefore(res, qsEl);
    }
  }

  root.NMExam = { mount: mount, chapters: CH, makeQuestions: makeQuestions, chTopics: chTopics, stop: stopTimer };
})(this);
