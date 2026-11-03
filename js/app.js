// Nuvemath — ilova: marshrutlash (#hash), til va mavzu rangi, bosh sahifa, darslik, yechuvchi, mashq, progress.
(function () {
  'use strict';
  var view = document.getElementById('view');
  var ROUTES = ['home', 'darslik', 'grafik', 'yechuvchi', 'chizma', 'jismlar', 'mashq'];
  var NAV = { home: 'nav.home', darslik: 'nav.lessons', grafik: 'nav.plot', yechuvchi: 'nav.solve', chizma: 'nav.geo', jismlar: 'nav.solids', mashq: 'nav.practice' };
  var ICONS = { home: '⌂', darslik: '📖', grafik: '📈', yechuvchi: '🧮', chizma: '📐', jismlar: '🧊', mashq: '🎯' };

  // ---------- Progress (localStorage) ----------
  var P = load();
  function load() { try { return Object.assign({ read: {}, quiz: {}, tests: {}, solved: 0, tried: 0, best: 0, byTopic: {} }, JSON.parse(localStorage.getItem('ak-progress') || '{}')); } catch (e) { return { read: {}, quiz: {}, tests: {}, solved: 0, tried: 0, best: 0, byTopic: {} }; } }
  function save() { try { localStorage.setItem('ak-progress', JSON.stringify(P)); } catch (e) {} }

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function pk(o) { return I18n.pick(o); }

  // ---------- Navigatsiya ----------
  function renderNav() {
    var nav = document.getElementById('nav');
    nav.innerHTML = ROUTES.map(function (r) { return '<a href="#' + r + '" data-r="' + r + '"><span class="ni">' + ICONS[r] + '</span><span>' + T(NAV[r]) + '</span></a>'; }).join('');
    document.querySelectorAll('.lang button').forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-l') === I18n.lang); });
    document.getElementById('tagline').textContent = T('brand.tag');
    document.getElementById('foot').textContent = T('foot.made');
    document.getElementById('replay').textContent = T('intro.replay');
  }
  function route() {
    var h = decodeURIComponent(location.hash.replace(/^#\/?/, '')), parts = h.split('/'), r = parts[0] || 'home';
    if (ROUTES.indexOf(r) < 0) r = 'home';
    document.querySelectorAll('#nav a').forEach(function (a) { a.classList.toggle('on', a.getAttribute('data-r') === r); });
    document.body.setAttribute('data-route', r);
    if (window.NMKids) NMKids.disposeAll();
    view.classList.remove('enter'); void view.offsetWidth; view.classList.add('enter');
    ({ home: home, darslik: lessons, grafik: function () { Plotter.mount(view); }, yechuvchi: solver, chizma: function () { Geometry.mount(view); }, jismlar: function () { Solids.mount(view); }, mashq: practice })[r](parts.slice(1));
    window.scrollTo(0, 0);
    document.getElementById('nav').classList.remove('open');
  }
  function go(hash) { if (location.hash === '#' + hash) route(); else location.hash = hash; }

  // ---------- Bosh sahifa ----------
  function home() {
    var allT = window.NMCurriculum.allTopics().length, nRead = Object.keys(P.read).filter(function (k) { return /^g\d+p\d+-/.test(k); }).length;
    var cards = [['darslik', 'home.c.lessons'], ['grafik', 'home.c.plot'], ['yechuvchi', 'home.c.solve'], ['chizma', 'home.c.geo'], ['jismlar', 'home.c.solids'], ['mashq', 'home.c.practice']];
    view.innerHTML =
      '<section class="hero">' +
      '<div class="hero-logo"><img class="on-dark" src="assets/emblem-dark.png" alt="Nuvemath"><img class="on-light" src="assets/emblem.png" alt="Nuvemath"></div>' +
      '<p class="slogan">See Math. Explore Dimensions.</p>' +
      '<h1>' + T('home.title') + '</h1><p class="lead">' + T('home.sub') + '</p>' +
      '<div class="row gap center"><a class="btn" href="#darslik">' + T('home.start') + '</a><a class="btn ghost" href="#yechuvchi">' + T('home.try') + '</a></div>' +
      '</section>' +
      '<section class="cards">' + cards.map(function (c) { return '<a class="card feat" href="#' + c[0] + '"><span class="fi">' + ICONS[c[0]] + '</span><h3>' + T(NAV[c[0]]) + '</h3><p>' + T(c[1]) + '</p></a>'; }).join('') + '</section>' +
      '<section class="card stats"><h3>' + T('home.progress') + '</h3><div class="stat-row">' +
      stat(nRead + ' / ' + allT, T('home.read')) + stat(P.solved, T('home.solved')) + stat(P.best, T('home.streak')) +
      '</div><div class="bar"><span style="width:' + Math.round(nRead / Math.max(1, allT) * 100) + '%"></span></div></section>';
  }
  function stat(v, l) { return '<div class="stat"><b>' + v + '</b><span>' + l + '</span></div>'; }
  // ---------- Darslik: sinf → qism → bo'lim → mavzu ----------
  var CUR = window.NMCurriculum, Kd = window.NMKids, ROM = CUR.ROMAN, tx = Kd.tx;
  function F(key, map) { return T(key).replace(/\{(\w+)\}/g, function (m, k) { return map[k] !== undefined ? map[k] : m; }); }
  function uid(part, t) { return 'g' + part.grade + 'p' + part.part + '-' + t; }
  function gName(g) { return F('dl.gradeShort', { n: g }); }
  function pName(p) { return F('dl.partShort', { p: ROM[p.part] }); }
  function crumbs(list) { return '<nav class="kd-crumbs">' + list.map(function (c, i) { return i < list.length - 1 ? '<a href="#' + c[1] + '">' + c[0] + '</a>' : '<span>' + c[0] + '</span>'; }).join('<i>›</i>') + '</nav>'; }
  // harakatlanuvchi fon shakllari
  function floaters(n) {
    var SH = ['<circle cx="20" cy="20" r="16"/>', '<polygon points="20,3 37,35 3,35"/>', '<rect x="5" y="5" width="30" height="30" rx="6"/>', '<path d="M20 2 L25 15 L38 15 L27 23 L31 37 L20 29 L9 37 L13 23 L2 15 L15 15 Z"/>', '<text x="20" y="31">π</text>', '<text x="20" y="31">+</text>', '<text x="20" y="31">=</text>', '<text x="20" y="31">7</text>'];
    var s = '<div class="kd-floaters" aria-hidden="true">';
    for (var i = 0; i < (n || 10); i++) s += '<svg viewBox="0 0 40 40" class="kd-fl f' + (i % 5) + '" style="--x:' + Math.round(Math.random() * 92) + '%;--y:' + Math.round(Math.random() * 80) + '%;--s:' + (0.6 + Math.random() * 0.9).toFixed(2) + ';--d:' + (6 + Math.random() * 8).toFixed(1) + 's;--dl:-' + (Math.random() * 6).toFixed(1) + 's">' + SH[i % SH.length] + '</svg>';
    return s + '</div>';
  }
  function lessons(args) {
    var g = +args[0], p = +args[1], t = args[2], grade = g && CUR.grades[g - 1];
    if (!grade) return gradesView();
    if (!p) return gradeView(grade);
    var part = CUR.part(g, p); if (!part) return gradeView(grade);
    if (t === 'test') return testView(part, args[3]);
    var topic = t && CUR.topics(part).filter(function (x) { return x.id === t; })[0];
    if (topic) return topicView(part, topic);
    partView(part);
  }
  function gradesView() {
    view.innerHTML = '<section class="kd-hero">' + floaters(12) + '<h1>' + T('nav.lessons') + '</h1><p>' + T('dl.heroSub') + '</p></section>' +
      '<div class="kd-grades">' + CUR.grades.map(function (g) {
        var ok = g.parts.length > 0, nT = g.parts.reduce(function (a, p) { return a + CUR.topics(p).length; }, 0);
        return '<a class="kd-grade' + (ok ? '' : ' soon') + '" ' + (ok ? 'href="#darslik/' + g.n + '"' : 'aria-disabled="true"') + '><b>' + g.n + '</b><span>' + T('dl.grade') + '</span><small>' +
          (ok ? F('dl.partsTopics', { p: g.parts.length, t: nT }) : T('dl.soon')) + '</small></a>';
      }).join('') + '</div>';
  }
  function gradeView(grade) {
    view.innerHTML = crumbs([[T('nav.lessons'), 'darslik'], [gName(grade.n), '']]) +
      '<section class="kd-hero small">' + floaters(8) + '<h1>' + F('dl.gradeTitle', { n: grade.n }) + '</h1><p>' + T('dl.pickPart') + '</p></section>' +
      '<div class="kd-parts">' + grade.parts.map(function (p) {
        var tops = CUR.topics(p), done = tops.filter(function (t) { return P.read[uid(p, t.id)]; }).length;
        return '<a class="kd-part" href="#darslik/' + grade.n + '/' + p.part + '"><span class="kd-roman">' + ROM[p.part] + '</span><div><h3>' + gName(grade.n) + ' · ' + pName(p) + '</h3><p>' + tx(p.title) + '</p><small>' +
          F('dl.partMeta', { s: p.sections.length, t: tops.length }) + ' · ' + tx(p.edition) + '</small>' +
          '<div class="bar"><span style="width:' + Math.round(done / tops.length * 100) + '%"></span></div></div></a>';
      }).join('') + '<div class="kd-part soon"><span class="kd-roman">…</span><div><h3>' + T('dl.otherParts') + '</h3><p>' + T('dl.otherSoon') + '</p></div></div></div>';
  }
  function partView(part) {
    var g = part.grade, base = 'darslik/' + g + '/' + part.part, tops = CUR.topics(part), n = 0;
    var done = tops.filter(function (t) { return P.read[uid(part, t.id)]; }).length, fin = P.tests[uid(part, 'final')];
    view.innerHTML = crumbs([[T('nav.lessons'), 'darslik'], [gName(g), 'darslik/' + g], [pName(part), '']]) +
      '<section class="kd-hero">' + floaters(12) + '<span class="kd-badge">' + gName(g) + ' · ' + pName(part) + '</span><h1>' + tx(part.title) + '</h1><p>' + tx(part.intro) + '</p>' +
      '<div class="kd-progress"><div class="bar"><span style="width:' + Math.round(done / tops.length * 100) + '%"></span></div><small>' + F('dl.learned', { a: done, b: tops.length }) + '</small></div>' +
      '<p class="kd-src">' + T('dl.source') + ' ' + tx(part.book) + '</p></section>' +
      part.sections.map(function (s, si) {
        var tk = P.tests[uid(part, s.id)];
        return '<section class="kd-sec c-' + s.color + '"><header><span class="kd-sec-ic">' + s.icon + '</span><div><small>' + F('dl.secN', { n: si + 1 }) + '</small><h2>' + tx(s.title) + '</h2></div></header><ol class="kd-topics">' +
          s.topics.map(function (t) {
            n++; var id = uid(part, t.id), q = P.quiz[id];
            return '<li><a href="#' + base + '/' + t.id + '"><span class="kd-tn">' + n + '</span><span class="kd-tt"><b>' + tx(t.title) + '</b><small>' + tx(t.lessons) + ' · ' + F('dl.topicMeta', { a: t.acts.length, q: t.quiz.length }) + '</small></span>' +
              '<span class="kd-ts">' + (P.read[id] ? '<i class="ok">✓</i>' : '') + (q ? '<i>' + q.best + '/' + q.total + '</i>' : '') + '</span></a></li>';
          }).join('') + '</ol><a class="kd-sec-test" href="#' + base + '/test/' + s.id + '">📝 ' + T('dl.secTest') + (tk ? ' <b>' + tk.best + '/' + tk.total + '</b>' : '') + '</a></section>';
      }).join('') +
      '<a class="kd-final" href="#' + base + '/test/final">🏆 ' + F('dl.finalOf', { p: ROM[part.part] }) + (fin ? ' — ' + T('dl.best') + ': <b>' + fin.best + '/' + fin.total + '</b>' : '') + '</a>';
  }
  function topicView(part, t) {
    var tops = CUR.topics(part), i = tops.indexOf(t), prev = tops[i - 1], next = tops[i + 1], base = 'darslik/' + part.grade + '/' + part.part, id = uid(part, t.id);
    P.read[id] = P.read[id] || Date.now(); save();
    view.innerHTML = crumbs([[T('nav.lessons'), 'darslik'], [gName(part.grade), 'darslik/' + part.grade], [pName(part), base], [tx(t.title), '']]) +
      '<section class="kd-topic-hero c-' + t.section.color + '">' + floaters(10) +
      '<div class="kd-th-text"><span class="kd-badge">' + F('dl.topicN', { n: i + 1 }) + ' · ' + tx(t.lessons) + '</span><h1>' + tx(t.title) + '</h1>' +
      '<div class="kd-keys"><span>' + T('dl.keys') + '</span>' + t.keys.map(function (k) { return '<b>' + tx(k) + '</b>'; }).join('') + '</div></div>' +
      '<div class="kd-th-3d" id="kd-hero3d"></div></section>' +
      Kd.say(t.explain) +
      '<div class="kd-rule"><span>💡 ' + T('dl.remember') + '</span><div>' + tx(t.rule) + '</div></div>' +
      '<h2 class="kd-h2">' + T('dl.tasks') + '</h2><div id="kd-acts" class="kd-acts"></div>' +
      '<h2 class="kd-h2">' + T('dl.topicTest') + '</h2><div class="card" id="kd-quiz"></div>' +
      '<div class="les-foot">' + (prev ? '<a class="btn ghost sm" href="#' + base + '/' + prev.id + '">← ' + tx(prev.title) + '</a>' : '') + '<span class="grow"></span>' +
      (next ? '<a class="btn sm" href="#' + base + '/' + next.id + '">' + tx(next.title) + ' →</a>' : '<a class="btn sm" href="#' + base + '/test/final">🏆 ' + T('dl.finalTest') + ' →</a>') + '</div>';
    Kd.stage(document.getElementById('kd-hero3d'), t.scene, { pick: false });
    var acts = document.getElementById('kd-acts');
    t.acts.forEach(function (a, k) { acts.appendChild(Kd.renderActivity(a, k + 1)); });
    Kd.quiz(document.getElementById('kd-quiz'), t.quiz, function (r, n) { var pr = P.quiz[id]; P.quiz[id] = { best: Math.max(r, pr ? pr.best : 0), total: n }; save(); });
  }
  function testView(part, sid) {
    var base = 'darslik/' + part.grade + '/' + part.part, sec = part.sections.filter(function (s) { return s.id === sid; })[0];
    var topics = sec ? sec.topics : CUR.topics(part), pool = [];
    topics.forEach(function (t) { t.quiz.forEach(function (q) { pool.push(q); }); });
    var qs = Kd.shuffle(pool).slice(0, sec ? 10 : 15), key = uid(part, sec ? sec.id : 'final'), name = sec ? T('dl.secTest') : T('dl.finalTest');
    view.innerHTML = crumbs([[T('nav.lessons'), 'darslik'], [gName(part.grade), 'darslik/' + part.grade], [pName(part), base], [name, '']]) +
      '<section class="kd-hero small">' + floaters(8) + '<span class="kd-badge">' + (sec ? sec.icon + ' ' + tx(sec.title) : '🏆 ' + pName(part)) + '</span><h1>' + name + '</h1><p>' + F('dl.qCount', { n: qs.length }) + '</p></section>' +
      '<div class="card" id="kd-test"></div><div class="les-foot"><a class="btn ghost sm" href="#' + base + '">← ' + T('dl.backList') + '</a></div>';
    Kd.quiz(document.getElementById('kd-test'), qs, function (r, n) { var pr = P.tests[key]; P.tests[key] = { best: Math.max(r, pr ? pr.best : 0), total: n }; save(); });
  }

  // ---------- Yechuvchi ----------
  var solverTab = 'eq', sysSize = 2, sysM = null;
  function solver(args) {
    if (args[0] === 'eq' || args[0] === 'sys' || args[0] === 'calc') solverTab = args[0];
    view.innerHTML = '<div class="tabs" id="sv-tabs">' + [['eq', 'solve.eq'], ['sys', 'solve.sys'], ['calc', 'solve.calc']].map(function (t) { return '<button class="tab' + (solverTab === t[0] ? ' on' : '') + '" data-t2="' + t[0] + '">' + T(t[1]) + '</button>'; }).join('') + '</div><div id="sv-body"></div>';
    view.querySelectorAll('#sv-tabs .tab').forEach(function (b) { b.onclick = function () { go('yechuvchi/' + b.getAttribute('data-t2')); }; });
    var body = document.getElementById('sv-body');
    if (solverTab === 'eq') eqBox(body, args[0] === 'eq' && args[1] ? args.slice(1).join('/') : null);
    else if (solverTab === 'sys') {
      if (args[0] === 'sys' && args[1]) { try { sysM = JSON.parse(args.slice(1).join('/')); sysSize = sysM.length; } catch (e) {} }
      sysBox(body);
    } else calcBox(body, null);
  }
  var lastEq = 'x^2 - 5x + 6 = 0';
  function eqBox(body, preset) {
    if (preset) lastEq = preset;
    var EX = ['2x + 3 = 7', 'x^2 - 5x + 6 = 0', '2x^2 - 3x - 1 = 0', 'x^2 + 2x + 5 = 0', 'x^3 - 6x^2 + 11x - 6 = 0', '(x+1)/3 = x - 1', 'sin(x) = 0.5', '2^x = 32', 'sqrt(x+3) = x - 3', 'abs(x - 2) = 3'];
    body.innerHTML = '<div class="card"><div class="row gap wrap"><input class="inp big grow" id="eq-in" spellcheck="false" autocomplete="off" placeholder="' + T('solve.eqPh') + '" value="' + esc(lastEq) + '"><button class="btn" id="eq-go">' + T('solve.go') + '</button></div>' +
      '<div class="keys" id="eq-keys">' + [['x', 'x'], ['x^2', 'x²'], ['^', 'xⁿ'], ['(', '('], [')', ')'], ['/', '÷'], ['sqrt(', '√'], ['sin(', 'sin'], ['cos(', 'cos'], ['ln(', 'ln'], ['pi', 'π'], ['=', '=']].map(function (k) { return '<button class="key" data-k="' + k[0] + '">' + k[1] + '</button>'; }).join('') + '</div>' +
      '<div class="row gap wrap small"><span class="muted">' + T('solve.range') + ':</span> <input class="inp xs" id="eq-lo" type="number" value="-20"> … <input class="inp xs" id="eq-hi" type="number" value="20"></div>' +
      '<div class="examples">' + EX.map(function (e) { return '<button class="chip" data-ex="' + esc(e) + '">' + esc(e) + '</button>'; }).join('') + '</div></div>' +
      '<div id="eq-out"></div>';
    var inp = document.getElementById('eq-in');
    document.getElementById('eq-go').onclick = run;
    inp.onkeydown = function (e) { if (e.key === 'Enter') run(); };
    body.querySelectorAll('[data-ex]').forEach(function (b) { b.onclick = function () { inp.value = b.getAttribute('data-ex'); run(); }; });
    body.querySelectorAll('[data-k]').forEach(function (b) { b.onclick = function () { insertAt(inp, b.getAttribute('data-k')); }; });
    run();
    function run() {
      lastEq = inp.value;
      var out = document.getElementById('eq-out');
      try {
        var r = Solver.solveEquation(inp.value, T, { lo: +document.getElementById('eq-lo').value, hi: +document.getElementById('eq-hi').value });
        var ans;
        if (r.kind === 'all') ans = T('solve.all');
        else if (r.kind === 'none') ans = T('solve.noneEq');
        else if (r.kind === 'complex') ans = T('solve.complex') + ' ' + r.exact.join('; ');
        else if (!r.roots.length) ans = T('st.noReal');
        else ans = r.roots.map(function (x, i) { return '<i>' + r.v + '</i>' + (r.roots.length > 1 ? '<sub>' + (i + 1) + '</sub>' : '') + ' = ' + r.exact[i]; }).join('; &nbsp;');
        out.innerHTML = '<div class="card answer"><span class="muted">' + T('solve.answer') + '</span><div class="ans">' + ans + '</div>' +
          '<button class="btn sm ghost" id="eq-plot">' + T('solve.showPlot') + ' →</button></div>' +
          '<div class="card"><h3>' + T('solve.steps') + '</h3><ol class="steps big">' + r.steps.map(function (s) { return '<li' + (s.check ? ' class="chk-step"' : '') + '>' + (s.t ? '<span class="st-t">' + s.t + '</span>' : '') + (s.m ? '<div class="st-m">' + s.m + '</div>' : '') + '</li>'; }).join('') + '</ol></div>';
        document.getElementById('eq-plot').onclick = function () {
          var sides = inp.value.split('='), fns = sides.map(function (s) { return s.trim().replace(new RegExp('\\b' + r.v + '\\b', 'g'), 'x'); });
          if (fns.length < 2 || fns[1] === '0') fns = [fns[0]];
          Plotter.setFunctions(fns, { cx: r.roots.length ? (r.roots[0] + r.roots[r.roots.length - 1]) / 2 : 0, cy: 0, scale: 40 }); go('grafik');
        };
      } catch (e) {
        out.innerHTML = '<div class="card err">⚠ ' + (e instanceof Expr.ParseError ? T('err.parse') : esc(e.message)) + '</div>';
      }
    }
  }
  function insertAt(inp, text) {
    var s = inp.selectionStart || inp.value.length, e = inp.selectionEnd || s;
    inp.value = inp.value.slice(0, s) + text + inp.value.slice(e); inp.focus();
    inp.selectionStart = inp.selectionEnd = s + text.length;
  }
  function sysBox(body) {
    if (!sysM || sysM.length !== sysSize) sysM = sysSize === 2 ? [[2, 3, 13], [1, -1, -1]] : sysSize === 3 ? [[2, 1, -1, 8], [-3, -1, 2, -11], [-2, 1, 2, -3]] : identity(sysSize);
    var V = ['x', 'y', 'z', 't', 'u'];
    body.innerHTML = '<div class="card"><div class="row gap wrap"><span class="muted">' + T('solve.size') + ':</span>' + [2, 3, 4, 5].map(function (n) { return '<button class="chip' + (n === sysSize ? ' on' : '') + '" data-n="' + n + '">' + n + '</button>'; }).join('') + '</div>' +
      '<p class="muted small">' + T('solve.sysHint') + '</p><div class="sys-grid" style="--n:' + sysSize + '">' +
      sysM.map(function (row, i) {
        return '<div class="sys-row">' + row.map(function (v, j) {
          return (j === sysSize ? '<span class="eqs">=</span>' : j ? '<span class="pl">+</span>' : '') + '<input class="inp xs" data-i="' + i + '" data-j="' + j + '" value="' + v + '">' + (j < sysSize ? '<i>' + V[j] + '</i>' : '');
        }).join('') + '</div>';
      }).join('') + '</div><button class="btn" id="sys-go">' + T('solve.go') + '</button></div><div id="sys-out"></div>';
    body.querySelectorAll('[data-n]').forEach(function (b) { b.onclick = function () { sysSize = +b.getAttribute('data-n'); sysM = null; sysBox(body); }; });
    body.querySelectorAll('.sys-row input').forEach(function (inp) { inp.oninput = function () { sysM[+inp.getAttribute('data-i')][+inp.getAttribute('data-j')] = inp.value; }; });
    document.getElementById('sys-go').onclick = run;
    run();
    function run() {
      var out = document.getElementById('sys-out');
      try {
        var M = sysM.map(function (r) { return r.map(function (v) { var x = Expr.evaluate(Expr.parse(String(v) || '0'), {}); if (!isFinite(x)) throw 0; return x; }); });
        var res = Solver.solveLinearSystem(M);
        var D = Solver.det(M.map(function (r) { return r.slice(0, sysSize); }));
        var head = res.status === 'unique' ? T('solve.unique') : res.status === 'infinite' ? T('solve.infinite') : T('solve.noneSys');
        var ans = res.status === 'unique' ? res.x.map(function (x, i) { return '<i>' + V[i] + '</i> = ' + x.html(); }).join('; &nbsp;') : '';
        out.innerHTML = '<div class="card answer"><span class="muted">' + head + '</span><div class="ans">' + ans + '</div><span class="muted">' + T('solve.det') + ': Δ = ' + D.html() + '</span></div>' +
          '<div class="card"><h3>' + T('solve.steps') + ' (Gauss)</h3><div class="gauss">' + res.steps.map(function (s) {
            return '<div class="g-step"><p class="st-t">' + opText(s.op) + '</p>' + matrixHTML(s.M, sysSize) + '</div>';
          }).join('') + '</div></div>';
      } catch (e) { out.innerHTML = '<div class="card err">⚠ ' + T('err.parse') + '</div>'; }
    }
  }
  function identity(n) { var M = []; for (var i = 0; i < n; i++) { M.push([]); for (var j = 0; j <= n; j++) M[i].push(j === n ? i + 1 : i === j ? 1 : 0); } return M; }
  function opText(op) {
    if (!op) return T('op.start');
    if (op.swap) return T('op.swap').replace('{a}', op.swap[0]).replace('{b}', op.swap[1]);
    if (op.scale) return T('op.scale').replace('{a}', op.scale[0]).replace('{k}', op.scale[1].html());
    return T('op.elim').replace('{a}', op.elim[0]).replace('{k}', op.elim[1].html()).replace('{b}', op.elim[2]);
  }
  function matrixHTML(M, n) {
    return '<table class="mx"><tbody>' + M.map(function (r) { return '<tr>' + r.map(function (x, j) { return '<td' + (j === n ? ' class="aug"' : '') + '>' + x.html() + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table>';
  }
  function calcBox(body, preset) {
    body.innerHTML = '<div class="card calc"><div class="row gap wrap"><input class="inp big grow" id="c-in" spellcheck="false" autocomplete="off" placeholder="' + T('solve.calcPh') + '" value="' + esc(preset || 'sqrt(2)*sin(pi/4) + 3!') + '"></div>' +
      '<div class="calc-out"><span class="muted">' + T('solve.calcRes') + '</span><div class="ans" id="c-out"></div><div class="muted small" id="c-pretty"></div></div></div>';
    var inp = body.querySelector('#c-in');
    function run() {
      var o = body.querySelector('#c-out'), pr = body.querySelector('#c-pretty');
      try {
        var t = Expr.parse(inp.value), v = Expr.evaluate(t, {});
        o.innerHTML = Solver.fmtNum(v) + (Solver.fmtNum(v).indexOf('<') >= 0 || /π|√/.test(Solver.fmtNum(v)) ? ' <span class="muted">≈ ' + (+v.toPrecision(12)) + '</span>' : '');
        pr.innerHTML = Expr.toHTML(t);
      } catch (e) { o.textContent = '…'; pr.textContent = e instanceof Expr.ParseError ? T('err.parse') : (e.message && e.message.indexOf('var:') === 0 ? T('err.parse') : ''); }
    }
    inp.oninput = run; run();
  }

  // ---------- Mashq ----------
  var prTopic = 'all', prLevel = 1;
  function practice() {
    var opts = '<option value="all">' + T('pr.all') + '</option>' +
      '<optgroup label="' + T('les.algebra') + '">' + Practice.TOPICS.algebra.map(o).join('') + '</optgroup>' +
      '<optgroup label="' + T('les.geometry') + '">' + Practice.TOPICS.geometry.map(o).join('') + '</optgroup>';
    function o(k) { return '<option value="' + k + '"' + (k === prTopic ? ' selected' : '') + '>' + T(Practice.KEYMAP[k]) + '</option>'; }
    view.innerHTML = '<div class="pr-head card"><label>' + T('pr.topic') + ' <select class="inp" id="pr-t">' + opts + '</select></label>' +
      '<label>' + T('pr.level') + ' <span class="seg" id="pr-l">' + [1, 2, 3].map(function (l) { return '<button data-l="' + l + '"' + (l === prLevel ? ' class="on"' : '') + '>' + T(['', 'pr.easy', 'pr.mid', 'pr.hard'][l]) + '</button>'; }).join('') + '</span></label>' +
      '<span class="grow"></span><span class="score" id="pr-score"></span><button class="btn sm ghost" id="pr-reset">' + T('pr.reset') + '</button></div><div id="pr-box"></div>';
    document.getElementById('pr-t').value = prTopic;
    document.getElementById('pr-t').onchange = function () { prTopic = this.value; practiceBox(document.getElementById('pr-box'), prTopic, prLevel); };
    view.querySelectorAll('#pr-l button').forEach(function (b) { b.onclick = function () { prLevel = +b.getAttribute('data-l'); view.querySelectorAll('#pr-l button').forEach(function (x) { x.classList.toggle('on', x === b); }); practiceBox(document.getElementById('pr-box'), prTopic, prLevel); }; });
    document.getElementById('pr-reset').onclick = function () { P.solved = 0; P.tried = 0; P.best = 0; P.byTopic = {}; streak = 0; save(); score(); };
    practiceBox(document.getElementById('pr-box'), prTopic, prLevel);
    score();
  }
  var streak = 0;
  function score() { var s = document.getElementById('pr-score'); if (s) s.innerHTML = T('pr.score') + ': <b>' + P.solved + '/' + P.tried + '</b> · ' + T('pr.streak') + ': <b>' + streak + '</b>'; }
  function practiceBox(box, topic, level, compact) {
    var p = Practice.generate(topic, level), done = false;
    box.innerHTML = '<div class="card problem' + (compact ? ' compact' : '') + '"><span class="pill">' + T(Practice.KEYMAP[p.topic]) + '</span>' +
      '<p class="pq">' + pk(p.q) + '</p>' + (p.math ? '<div class="pm">' + p.math + '</div>' : '') +
      '<div class="row gap wrap"><input class="inp big grow" id="pa" autocomplete="off" spellcheck="false" placeholder="' + T('pr.answer') + '"><button class="btn" id="pc">' + T('pr.check') + '</button><button class="btn ghost" id="ph">' + T('pr.hint') + '</button></div>' +
      '<p class="muted small">' + T('pr.format') + '</p><div id="pres"></div></div>';
    var inp = box.querySelector('#pa'), res = box.querySelector('#pres');
    if (!compact) inp.focus();
    box.querySelector('#ph').onclick = function () { res.innerHTML = '<div class="hintbox">💡 ' + pk(p.hint) + '</div>'; };
    box.querySelector('#pc').onclick = check;
    // preventDefault: aks holda Enter fokuslangan "Keyingi" tugmasini ham bosib yuboradi va natija ko'rinmay qoladi
    inp.onkeydown = function (e) { if (e.key === 'Enter') { e.preventDefault(); if (done) practiceBox(box, topic, level, compact); else check(); } };
    function check() {
      if (done) return;
      if (!inp.value.trim()) { inp.focus(); return; }
      var r = Practice.check(p, inp.value);
      if (r.bad) { res.innerHTML = '<div class="hintbox">⚠ ' + T('err.parse') + '</div>'; return; }
      done = true; P.tried++;
      if (r.ok) { P.solved++; streak++; P.best = Math.max(P.best, streak); } else streak = 0;
      var bt = P.byTopic[p.topic] || (P.byTopic[p.topic] = [0, 0]); bt[1]++; if (r.ok) bt[0]++;
      save(); score();
      inp.disabled = true;
      res.innerHTML = '<div class="verdict ' + (r.ok ? 'ok' : 'bad') + '">' + (r.ok ? '✓ ' + T('pr.correct') : '✗ ' + T('pr.wrong') + ' ' + T('solve.answer') + ': <b>' + p.ans.map(Solver.fmtNum).join('; ') + '</b>') + '</div>' +
        '<div class="sol"><span class="muted">' + T('pr.solution') + ':</span> ' + p.sol + '</div>' +
        '<button class="btn" id="pn">' + T('pr.next') + '</button>';
      var nb = res.querySelector('#pn'); nb.onclick = function () { practiceBox(box, topic, level, compact); }; nb.focus();
    }
  }

  // ---------- Til va mavzu ----------
  document.querySelectorAll('.lang button').forEach(function (b) { b.onclick = function () { I18n.set(b.getAttribute('data-l')); renderNav(); route(); }; });
  var themeBtn = document.getElementById('theme');
  function setTheme(t) { document.documentElement.setAttribute('data-theme', t); try { localStorage.setItem('ak-theme', t); } catch (e) {} themeBtn.textContent = t === 'light' ? '☾' : '☀'; }
  themeBtn.onclick = function () { setTheme(document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light'); route(); };
  var savedTheme = 'dark'; try { savedTheme = localStorage.getItem('ak-theme') || 'dark'; } catch (e) {}
  setTheme(savedTheme);
  document.getElementById('replay').onclick = function () { if (window.NuvemathIntro) NuvemathIntro.play({ force: true, focus: false }); };
  document.getElementById('burger').onclick = function () { document.getElementById('nav').classList.toggle('open'); };

  I18n.set(I18n.lang);
  renderNav();
  window.addEventListener('hashchange', route);
  route();
})();
