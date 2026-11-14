// Nuvemath — o‘yin elementlari: tajriba ballari (XP), daraja, kunlik seriya (🔥), kunlik maqsad va nishonlar.
// Ma'lumotlar faqat shu brauzerda (localStorage 'nm-game') saqlanadi.
(function (root) {
  'use strict';
  function L(uz, ru, en) { return { uz: uz, ru: ru, en: en }; }
  function tx(o) { var l = (root.I18n && I18n.lang) || 'uz'; return o[l] || o.uz; }
  var GOAL = 50;
  var S = {
    xp: L('XP', 'XP', 'XP'), level: L('Daraja', 'Уровень', 'Level'), streak: L('kun ketma-ket', 'дн. подряд', 'day streak'),
    goal: L('Bugungi maqsad', 'Цель на сегодня', 'Today’s goal'), badges: L('Nishonlar', 'Значки', 'Badges'), newBadge: L('Yangi nishon!', 'Новый значок!', 'New badge!'),
    mine: L('Yutuqlarim', 'Мои достижения', 'My achievements'), toNext: L('keyingi darajagacha', 'до следующего уровня', 'to the next level'),
    best: L('eng uzun seriya', 'лучшая серия', 'best streak'), week: L('So‘nggi 7 kun', 'Последние 7 дней', 'Last 7 days'), done: L('Bajarildi! 🎉', 'Выполнено! 🎉', 'Done! 🎉')
  };
  var BADGES = [
    { id: 'first', ic: '🌱', t: L('Birinchi qadam', 'Первый шаг', 'First step'), d: L('Birinchi testni topshiring', 'Пройдите первый тест', 'Finish your first test'), ok: function (g) { return g.c.test >= 1; } },
    { id: 'test10', ic: '📝', t: L('10 ta test', '10 тестов', '10 tests'), d: L('10 ta mavzu testini topshiring', 'Пройдите 10 тестов по темам', 'Finish 10 topic tests'), ok: function (g) { return g.c.test >= 10; } },
    { id: 'test50', ic: '📚', t: L('Test ustasi', 'Мастер тестов', 'Test master'), d: L('50 ta test', '50 тестов', '50 tests'), ok: function (g) { return g.c.test >= 50; } },
    { id: 'perfect', ic: '💯', t: L('Mukammal', 'Идеально', 'Perfect'), d: L('Testdan 100% oling', 'Получите 100% за тест', 'Score 100% on a test'), ok: function (g) { return g.c.perfect >= 1; } },
    { id: 'perfect10', ic: '🏆', t: L('10 marta 100%', '10 раз по 100%', '100% ten times'), d: L('10 ta testdan 100%', '10 тестов на 100%', '100% on 10 tests'), ok: function (g) { return g.c.perfect >= 10; } },
    { id: 'theory', ic: '📖', t: L('Kitobxon', 'Читатель', 'Reader'), d: L('10 ta mavzu nazariyasini oxirigacha o‘qing', 'Дочитайте теорию 10 тем', 'Read the theory of 10 topics'), ok: function (g) { return g.c.theory >= 10; } },
    { id: 'streak3', ic: '🔥', t: L('3 kun ketma-ket', '3 дня подряд', '3-day streak'), d: L('3 kun ketma-ket shug‘ullaning', 'Занимайтесь 3 дня подряд', 'Practise 3 days in a row'), ok: function (g) { return g.best >= 3; } },
    { id: 'streak7', ic: '⚡', t: L('Bir hafta', 'Неделя', 'One week'), d: L('7 kun ketma-ket', '7 дней подряд', '7 days in a row'), ok: function (g) { return g.best >= 7; } },
    { id: 'streak30', ic: '🌟', t: L('Bir oy', 'Месяц', 'One month'), d: L('30 kun ketma-ket', '30 дней подряд', '30 days in a row'), ok: function (g) { return g.best >= 30; } },
    { id: 'practice', ic: '🎯', t: L('Mergan', 'Снайпер', 'Sharpshooter'), d: L('Mashqda 25 ta masala yeching', 'Решите 25 задач в практике', 'Solve 25 practice problems'), ok: function (g) { return g.c.practice >= 25; } },
    { id: 'exam', ic: '🎓', t: L('Imtihonchi', 'Экзаменуемый', 'Examinee'), d: L('Birinchi sinov imtihonini topshiring', 'Сдайте первый пробный экзамен', 'Finish your first mock exam'), ok: function (g) { return g.c.mock >= 1; } },
    { id: 'exam5', ic: '🥇', t: L('Tayyor!', 'Готов!', 'Ready!'), d: L('5 ta sinov imtihoni', '5 пробных экзаменов', '5 mock exams'), ok: function (g) { return g.c.mock >= 5; } },
    { id: 'review', ic: '🔁', t: L('Xatolar ustida ish', 'Работа над ошибками', 'Learning from mistakes'), d: L('Takrorlashda 20 ta savolni to‘g‘rilang', 'Исправьте 20 вопросов в повторении', 'Fix 20 questions in review'), ok: function (g) { return g.c.review >= 20; } },
    { id: 'lvl5', ic: '🚀', t: L('5-daraja', '5-й уровень', 'Level 5'), d: L('5-darajaga chiqing', 'Достигните 5-го уровня', 'Reach level 5'), ok: function (g) { return level(g.xp).n >= 5; } },
    { id: 'lvl10', ic: '👑', t: L('10-daraja', '10-й уровень', 'Level 10'), d: L('10-darajaga chiqing', 'Достигните 10-го уровня', 'Reach level 10'), ok: function (g) { return level(g.xp).n >= 10; } }
  ];

  function today(d) { d = d || new Date(); return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); }
  function load() {
    var g; try { g = JSON.parse(localStorage.getItem('nm-game') || '{}'); } catch (e) { g = {}; }
    g.xp = g.xp || 0; g.days = g.days || {}; g.c = g.c || {}; g.badges = g.badges || {}; g.streak = g.streak || 0; g.best = g.best || 0;
    ['test', 'perfect', 'theory', 'practice', 'exam', 'mock', 'review', 'read'].forEach(function (k) { g.c[k] = g.c[k] || 0; });
    // seriya uzilganmi?
    if (g.last && g.last !== today()) { var y = new Date(); y.setDate(y.getDate() - 1); if (g.last !== today(y)) g.streak = 0; }
    return g;
  }
  function save(g) { try { localStorage.setItem('nm-game', JSON.stringify(g)); } catch (e) {} }
  function level(xp) { var n = Math.floor(Math.sqrt(xp / 40)) + 1, lo = 40 * (n - 1) * (n - 1), hi = 40 * n * n; return { n: n, lo: lo, hi: hi, pct: Math.round((xp - lo) / (hi - lo) * 100) }; }

  function award(xp, reason, extra) {
    xp = Math.max(0, Math.round(xp || 0));
    var g = load(), d = today(), before = level(g.xp).n;
    if (g.last !== d) { var y = new Date(); y.setDate(y.getDate() - 1); g.streak = g.last === today(y) ? g.streak + 1 : 1; g.last = d; g.best = Math.max(g.best, g.streak); }
    var goalBefore = (g.days[d] || 0) >= GOAL;
    g.xp += xp; g.days[d] = (g.days[d] || 0) + xp;
    if (reason && g.c[reason] !== undefined) g.c[reason]++;
    if (extra && extra.perfect) g.c.perfect++;
    var keys = Object.keys(g.days).sort(); if (keys.length > 60) keys.slice(0, keys.length - 60).forEach(function (k) { delete g.days[k]; });
    var fresh = BADGES.filter(function (b) { return !g.badges[b.id] && b.ok(g); });
    fresh.forEach(function (b) { g.badges[b.id] = Date.now(); });
    save(g);
    if (xp) toast('+' + xp + ' XP', 'xp');
    if (!goalBefore && g.days[d] >= GOAL) toast('🎯 ' + tx(S.goal) + ': ' + tx(S.done), 'goal');
    if (level(g.xp).n > before) toast('🚀 ' + tx(S.level) + ' ' + level(g.xp).n + '!', 'lvl');
    fresh.forEach(function (b) { toast(b.ic + ' ' + tx(S.newBadge) + ' ' + tx(b.t), 'badge'); });
    chip();
  }

  // ---------- Bildirishnomalar ----------
  var box = null;
  function toast(text, kind) {
    if (!document.body) return;
    if (!box) { box = document.createElement('div'); box.className = 'gm-toasts'; document.body.appendChild(box); }
    var el = document.createElement('div'); el.className = 'gm-toast ' + (kind || ''); el.textContent = text; box.appendChild(el);
    setTimeout(function () { el.classList.add('out'); }, kind === 'xp' ? 1600 : 3200);
    setTimeout(function () { el.remove(); }, kind === 'xp' ? 2100 : 3700);
  }

  // ---------- Sarlavhadagi belgi ----------
  function chip() {
    var tools = document.querySelector('.top .tools'); if (!tools) return;
    var el = document.getElementById('gm-chip');
    if (!el) { el = document.createElement('a'); el.id = 'gm-chip'; el.className = 'gm-chip'; el.href = '#natija'; tools.insertBefore(el, tools.firstChild); }
    var g = load(), lv = level(g.xp);
    el.innerHTML = '<span class="' + (g.streak ? 'on' : '') + '">🔥 ' + g.streak + '</span><span>⭐ ' + lv.n + '</span>';
    el.title = tx(S.level) + ' ' + lv.n + ' · ' + g.xp + ' XP · ' + g.streak + ' ' + tx(S.streak);
  }

  // ---------- Panel (bosh sahifa va natijalar sahifasi uchun) ----------
  function panel() {
    var g = load(), lv = level(g.xp), d = today(), td = g.days[d] || 0, week = [];
    for (var i = 6; i >= 0; i--) { var x = new Date(); x.setDate(x.getDate() - i); var k = today(x); week.push({ k: k, v: g.days[k] || 0, w: x.toLocaleDateString((root.I18n && I18n.lang) === 'en' ? 'en' : (root.I18n && I18n.lang) === 'ru' ? 'ru' : 'uz', { weekday: 'short' }) }); }
    var mx = Math.max(GOAL, Math.max.apply(null, week.map(function (w) { return w.v; })));
    return '<section class="card gm-panel"><h3>🏅 ' + tx(S.mine) + '</h3>' +
      '<div class="gm-top"><div class="gm-lvl"><b>' + lv.n + '</b><span>' + tx(S.level) + '</span></div>' +
      '<div class="gm-xp"><div class="gm-row"><b>' + g.xp + ' XP</b><small>' + (lv.hi - g.xp) + ' XP ' + tx(S.toNext) + '</small></div><div class="bar"><span style="width:' + lv.pct + '%"></span></div>' +
      '<div class="gm-row"><span>🎯 ' + tx(S.goal) + ': <b>' + Math.min(td, GOAL) + ' / ' + GOAL + '</b></span><span>🔥 <b>' + g.streak + '</b> ' + tx(S.streak) + ' · ' + tx(S.best) + ': ' + g.best + '</span></div>' +
      '<div class="bar gm-goal"><span style="width:' + Math.min(100, Math.round(td / GOAL * 100)) + '%"></span></div></div></div>' +
      '<h4>' + tx(S.week) + '</h4><div class="gm-week">' + week.map(function (w) { return '<div class="gm-day' + (w.k === d ? ' now' : '') + '"><span style="height:' + Math.max(4, Math.round(w.v / mx * 100)) + '%" class="' + (w.v >= GOAL ? 'hit' : '') + '"></span><b>' + w.v + '</b><small>' + w.w + '</small></div>'; }).join('') + '</div>' +
      '<h4>' + tx(S.badges) + ' · ' + Object.keys(g.badges).length + ' / ' + BADGES.length + '</h4><div class="gm-badges">' + BADGES.map(function (b) { var got = !!g.badges[b.id]; return '<div class="gm-badge' + (got ? ' got' : '') + '" title="' + tx(b.d) + '"><span>' + b.ic + '</span><b>' + tx(b.t) + '</b><small>' + tx(b.d) + '</small></div>'; }).join('') + '</div></section>';
  }

  root.NMGame = { award: award, panel: panel, chip: chip, state: load, level: level, toast: toast, badges: BADGES };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', chip); else chip();
})(this);
