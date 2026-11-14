// Nuvemath — xatolar ustida ishlash (oraliqli takrorlash, Leitner qutilari).
// Mavzu testlari va imtihonlarda xato qilingan savollar saqlanadi va 1, 3, 7, 16, 35 kundan keyin qayta so‘raladi.
(function (root) {
  'use strict';
  function L(uz, ru, en) { return { uz: uz, ru: ru, en: en }; }
  function tx(o) { return root.NMKids ? NMKids.tx(o) : (o && o.uz) || o; }
  var DAYS = [0, 1, 3, 7, 16, 35], MAX = 300, DAY = 864e5;
  var S = {
    title: L('Xatolar ustida ishlash', 'Работа над ошибками', 'Learning from mistakes'),
    sub: L('Testlar va imtihonlarda xato qilgan savollaringiz shu yerda yig‘iladi. Har biri bir necha kundan keyin qayta so‘raladi: to‘g‘ri javob bersangiz, keyingi takrorlash uzoqroq kunga suriladi; 5 marta to‘g‘ri javobdan so‘ng savol «o‘zlashtirildi» deb chiqariladi.', 'Здесь собираются вопросы, в которых вы ошиблись в тестах и экзаменах. Каждый вопрос повторяется через несколько дней: при верном ответе следующий повтор откладывается дальше; после 5 верных ответов вопрос считается усвоенным.', 'Questions you got wrong in tests and exams collect here. Each comes back after a few days: answer correctly and the next review moves further out; after 5 correct answers it counts as mastered.'),
    due: L('Bugun takrorlash kerak', 'Повторить сегодня', 'Due today'), total: L('Jami saqlangan', 'Всего сохранено', 'Saved in total'), mastered: L('O‘zlashtirildi', 'Усвоено', 'Mastered'),
    start: L('Takrorlashni boshlash', 'Начать повторение', 'Start review'), none: L('Hozircha takrorlanadigan savol yo‘q. Testlarni yechishda davom eting! 🎉', 'Пока нечего повторять. Продолжайте решать тесты! 🎉', 'Nothing to review right now. Keep taking tests! 🎉'),
    empty: L('Hali xato qilingan savollar yo‘q.', 'Ошибок пока нет.', 'No mistakes saved yet.'), byTopic: L('Mavzular bo‘yicha', 'По темам', 'By topic'),
    next: L('Keyingi', 'Далее', 'Next'), right: L('To‘g‘ri! Keyingi takrorlash', 'Верно! Следующий повтор через', 'Correct! Next review in'), days: L('kundan keyin', 'дн.', 'days'),
    wrong: L('Noto‘g‘ri. Ertaga yana so‘raladi.', 'Неверно. Спросим снова завтра.', 'Wrong. It will come back tomorrow.'), lesson: L('Mavzuni ochish', 'Открыть тему', 'Open the topic'),
    fin: L('Takrorlash yakunlandi', 'Повторение завершено', 'Review finished'), back: L('Orqaga', 'Назад', 'Back'), soon: L('Keyingi takrorlash', 'Следующий повтор', 'Next review'), clear: L('Ro‘yxatni tozalash', 'Очистить список', 'Clear the list'), sure: L('Barcha saqlangan xatolar o‘chirilsinmi?', 'Удалить все сохранённые ошибки?', 'Delete all saved mistakes?')
  };
  function s(k) { return tx(S[k]); }
  function load() { try { var d = JSON.parse(localStorage.getItem('nm-review') || '{}'); d.items = d.items || {}; d.mastered = d.mastered || 0; return d; } catch (e) { return { items: {}, mastered: 0 }; } }
  function save(d) { try { localStorage.setItem('nm-review', JSON.stringify(d)); } catch (e) {} }
  function sig(q) { return JSON.stringify(q.q).slice(0, 400) + '|' + JSON.stringify(q.o[q.a]); }
  function slim(q) { return { q: q.q, o: q.o, a: q.a, pic: q.pic && String(q.pic).length < 6000 ? q.pic : undefined }; }

  // meta: { key: 'g8p1-t3', href: 'darslik/8/1/t3', title: L(...) }
  function record(q, ok, meta) {
    if (!q || !q.o || q.a === undefined) return;
    var d = load(), k = sig(q), it = d.items[k];
    if (ok) return;
    if (it) { it.box = 0; it.due = Date.now(); it.wrong++; }
    else d.items[k] = { q: slim(q), key: meta && meta.key, href: meta && meta.href, title: meta && meta.title, box: 0, due: Date.now(), wrong: 1, added: Date.now() };
    var keys = Object.keys(d.items); if (keys.length > MAX) keys.sort(function (a, b) { return d.items[a].added - d.items[b].added; }).slice(0, keys.length - MAX).forEach(function (x) { delete d.items[x]; });
    save(d);
  }
  function dueList(d) { var now = Date.now(); return Object.keys(d.items).filter(function (k) { return d.items[k].due <= now; }); }
  function counts() { var d = load(); return { due: dueList(d).length, total: Object.keys(d.items).length, mastered: d.mastered }; }

  var view;
  function mount(el, args) { view = el; if (args[0] === 'boshla') return session(); page(); }
  function page() {
    var d = load(), keys = Object.keys(d.items), due = dueList(d), groups = {};
    keys.forEach(function (k) { var it = d.items[k], g = it.href || '?'; (groups[g] = groups[g] || { it: it, n: 0, due: 0 }).n++; if (it.due <= Date.now()) groups[g].due++; });
    var nextDue = keys.length ? Math.min.apply(null, keys.map(function (k) { return d.items[k].due; })) : 0;
    view.innerHTML = '<section class="kd-hero rv-hero"><span class="kd-badge">🔁 ' + s('title') + '</span><h1>' + s('title') + '</h1><p>' + s('sub') + '</p></section>' +
      '<div class="rv-stats"><div class="rv-st due"><b>' + due.length + '</b><span>' + s('due') + '</span></div><div class="rv-st"><b>' + keys.length + '</b><span>' + s('total') + '</span></div><div class="rv-st ok"><b>' + d.mastered + '</b><span>' + s('mastered') + '</span></div></div>' +
      (due.length ? '<a class="btn rv-go" href="#takror/boshla">▶ ' + s('start') + ' (' + Math.min(due.length, 15) + ')</a>' : '<div class="card"><p>' + (keys.length ? s('none') + ' <br><small class="muted">' + s('soon') + ': ' + new Date(nextDue).toLocaleDateString() + '</small>' : s('empty')) + '</p></div>') +
      (keys.length ? '<div class="card"><h3>' + s('byTopic') + '</h3><ul class="rv-topics">' + Object.keys(groups).sort(function (a, b) { return groups[b].n - groups[a].n; }).map(function (g) { var x = groups[g]; return '<li><a href="#' + g + '">' + (x.it.title ? tx(x.it.title) : g) + '</a><span>' + x.n + (x.due ? ' · <b>' + x.due + '</b> 🔔' : '') + '</span></li>'; }).join('') + '</ul><button class="btn sm ghost" id="rv-clear">🗑 ' + s('clear') + '</button></div>' : '');
    var c = document.getElementById('rv-clear'); if (c) c.onclick = function () { if (confirm(s('sure'))) { save({ items: {}, mastered: d.mastered }); page(); } };
  }
  function session() {
    var d = load(), list = root.NMKids.shuffle(dueList(d)).slice(0, 15), i = 0, right = 0;
    if (!list.length) return page();
    function show() {
      if (i >= list.length) {
        view.innerHTML = '<section class="kd-hero small rv-hero"><h1>✅ ' + s('fin') + '</h1><p><b>' + right + ' / ' + list.length + '</b></p></section><div class="row gap"><a class="btn" href="#takror">← ' + s('back') + '</a></div>';
        if (right === list.length && root.NMKids.confetti) root.NMKids.confetti(view.querySelector('.rv-hero'));
        return;
      }
      var k = list[i], it = load().items[k]; if (!it) { i++; return show(); }
      var opts = root.NMKids.shuffle(it.q.o.map(function (v, j) { return { t: tx(v), ok: j === it.q.a }; }));
      view.innerHTML = '<nav class="kd-crumbs"><a href="#takror">' + s('title') + '</a><i>›</i><span>' + (i + 1) + ' / ' + list.length + '</span></nav>' +
        '<div class="bar rv-prog"><span style="width:' + Math.round(i / list.length * 100) + '%"></span></div>' +
        '<div class="card rv-card"><small class="muted">' + (it.title ? tx(it.title) : '') + ' · ✗' + it.wrong + '</small>' +
        '<div class="kd-qz"><p class="kd-qz-q"><span>?</span>' + tx(it.q.q) + '</p>' + (it.q.pic ? '<div class="kd-qz-pic">' + it.q.pic + '</div>' : '') +
        '<div class="kd-qz-o">' + opts.map(function (o, j) { return '<button class="kd-opt" data-j="' + j + '">' + o.t + '</button>'; }).join('') + '</div></div><div id="rv-fb"></div></div>';
      view.querySelectorAll('.kd-opt').forEach(function (b) {
        b.onclick = function () {
          var qz = view.querySelector('.kd-qz'); if (qz.classList.contains('done')) return; qz.classList.add('done');
          var ok = opts[+b.getAttribute('data-j')].ok; b.classList.add(ok ? 'ok' : 'bad');
          opts.forEach(function (o, j) { if (o.ok) view.querySelectorAll('.kd-opt')[j].classList.add('ok'); });
          var D = load(), x = D.items[k], msg;
          if (x) {
            if (ok) { right++; x.box++; if (x.box >= DAYS.length) { delete D.items[k]; D.mastered++; msg = '🏅 ' + s('mastered') + '!'; } else { x.due = Date.now() + DAYS[x.box] * DAY; msg = s('right') + ' ' + DAYS[x.box] + ' ' + s('days'); } }
            else { x.box = 0; x.wrong++; x.due = Date.now() + DAY; msg = s('wrong'); }
            save(D);
          }
          if (ok && root.NMGame) root.NMGame.award(4, 'review');
          document.getElementById('rv-fb').innerHTML = '<p class="verdict ' + (ok ? 'ok' : 'bad') + '">' + (ok ? '✓ ' : '✗ ') + msg + '</p><div class="row gap wrap">' +
            '<button class="btn" id="rv-next">' + s('next') + ' →</button>' + (it.href ? '<a class="btn ghost sm" href="#' + it.href + '">📖 ' + s('lesson') + '</a>' : '') + '</div>';
          var nb = document.getElementById('rv-next'); nb.onclick = function () { i++; show(); }; nb.focus();
        };
      });
    }
    show();
  }
  root.NMReview = { record: record, counts: counts, mount: mount };
})(this);
