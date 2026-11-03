// Nuvemath — nazariya moduli: har bir mavzu uchun sahifalab o'qiladigan batafsil nazariya.
// Ma'lumotlar js/theory/g<sinf>-<qism>.js fayllarida, kerak bo'lganda yuklanadi:
//   NMTheory.add('1-1', 't1', { sections: [ { kind, h, p: [...], ex: [{q, s}], list: [...], table: {head, rows} }, ... ] });
(function (root) {
  'use strict';
  var DATA = {}, LOADING = {};
  var tx = function (v) { return root.NMKids ? root.NMKids.tx(v) : (v && v.uz) || v; };
  var ICON = { intro: '🚀', def: '📘', history: '🏛️', rule: '💡', example: '✏️', steps: '🪜', mistake: '⚠️', life: '🌍', fact: '✨', summary: '🎯', practice: '🧠', table: '📊' };
  var KIND_T = {
    uz: { intro: 'Kirish', def: 'Ta’rif', history: 'Tarixdan', rule: 'Qoida', example: 'Namuna', steps: 'Qadamlar', mistake: 'Xatolar', life: 'Hayotda', fact: 'Qiziqarli', summary: 'Xulosa', practice: 'O‘ylab ko‘ring', table: 'Jadval', contents: 'Mundarija', page: 'sahifa', prev: 'Oldingi', next: 'Keyingi', done: 'Nazariya o‘qildi ✓', toTasks: 'Topshiriqlarga o‘tish ↓', solution: 'Yechim' },
    ru: { intro: 'Введение', def: 'Определение', history: 'Из истории', rule: 'Правило', example: 'Пример', steps: 'Шаги', mistake: 'Ошибки', life: 'В жизни', fact: 'Интересно', summary: 'Итог', practice: 'Подумайте', table: 'Таблица', contents: 'Содержание', page: 'страница', prev: 'Назад', next: 'Дальше', done: 'Теория прочитана ✓', toTasks: 'К заданиям ↓', solution: 'Решение' },
    en: { intro: 'Introduction', def: 'Definition', history: 'From history', rule: 'Rule', example: 'Example', steps: 'Steps', mistake: 'Mistakes', life: 'In real life', fact: 'Fun fact', summary: 'Summary', practice: 'Think about it', table: 'Table', contents: 'Contents', page: 'page', prev: 'Back', next: 'Next', done: 'Theory read ✓', toTasks: 'Go to the tasks ↓', solution: 'Solution' }
  };
  function lang() { return (root.I18n && root.I18n.lang) || localStorage.getItem('ak-lang') || 'uz'; }
  function kt(k) { var l = lang(); return (KIND_T[l] || KIND_T.uz)[k]; }

  var TH = {
    add: function (partKey, tid, spec) { (DATA[partKey] = DATA[partKey] || {})[tid] = spec; },
    get: function (partKey, tid) { return DATA[partKey] && DATA[partKey][tid]; },
    has: function (partKey) { return !!DATA[partKey]; },
    all: function () { return DATA; },
    key: function (part) { return part.grade + '-' + part.part; },
    // qism nazariyasini yuklash (bir marta)
    load: function (part) {
      var k = TH.key(part);
      if (DATA[k]) return Promise.resolve(DATA[k]);
      if (LOADING[k]) return LOADING[k];
      LOADING[k] = new Promise(function (res, rej) {
        var s = document.createElement('script');
        s.src = 'js/theory/g' + k + '.js?v=' + (root.NM_VER || '1');
        s.onload = function () { res(DATA[k] || {}); };
        s.onerror = function () { delete LOADING[k]; res({}); };
        document.head.appendChild(s);
      });
      return LOADING[k];
    },
    // sahifalar HTML
    render: function (box, spec, opts) {
      opts = opts || {};
      var secs = spec && spec.sections || [];
      if (!secs.length) { box.innerHTML = ''; return; }
      var cur = 0, seen = {};
      function page(s, i) {
        var h = '<article class="kd-tp kind-' + (s.kind || 'def') + '"><header><span class="kd-tp-ic">' + (ICON[s.kind] || '📘') + '</span><div><small>' + kt(s.kind || 'def') + ' · ' + (i + 1) + '/' + secs.length + '</small><h3>' + tx(s.h) + '</h3></div></header>';
        (s.p || []).forEach(function (p) { h += '<p>' + tx(p) + '</p>'; });
        if (s.list) h += '<ul>' + s.list.map(function (x) { return '<li>' + tx(x) + '</li>'; }).join('') + '</ul>';
        if (s.table) h += '<div class="kd-tbl"><table><thead><tr>' + s.table.head.map(function (x) { return '<th>' + tx(x) + '</th>'; }).join('') + '</tr></thead><tbody>' + s.table.rows.map(function (r) { return '<tr>' + r.map(function (x) { return '<td>' + tx(x) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>';
        if (s.ex) h += s.ex.map(function (e) { return '<div class="kd-ex-box"><div class="kd-ex-q">' + tx(e.q) + '</div><details><summary>' + kt('solution') + '</summary><div class="kd-ex-s">' + tx(e.s) + '</div></details></div>'; }).join('');
        (s.after || []).forEach(function (p) { h += '<p>' + tx(p) + '</p>'; });
        return h + '</article>';
      }
      box.innerHTML = '<div class="kd-theory">' +
        '<nav class="kd-toc"><b>' + kt('contents') + '</b><ol>' + secs.map(function (s, i) { return '<li><button data-p="' + i + '">' + (ICON[s.kind] || '📘') + ' ' + tx(s.h) + '</button></li>'; }).join('') + '</ol></nav>' +
        '<div class="kd-tbody">' + secs.map(page).join('') + '</div>' +
        '<div class="kd-tnav"><button class="btn ghost sm kd-tprev">← ' + kt('prev') + '</button><span class="kd-tpage"></span><button class="btn sm kd-tnext">' + kt('next') + ' →</button></div></div>';
      var pages = box.querySelectorAll('.kd-tp'), toc = box.querySelectorAll('.kd-toc button'), lbl = box.querySelector('.kd-tpage'), prev = box.querySelector('.kd-tprev'), next = box.querySelector('.kd-tnext');
      function show(i, scroll) {
        cur = Math.max(0, Math.min(secs.length - 1, i)); seen[cur] = 1;
        pages.forEach(function (p, j) { p.classList.toggle('on', j === cur); });
        toc.forEach(function (b, j) { b.classList.toggle('on', j === cur); b.classList.toggle('seen', !!seen[j]); });
        lbl.textContent = (cur + 1) + ' / ' + secs.length + ' ' + kt('page');
        prev.disabled = cur === 0;
        var last = cur === secs.length - 1;
        next.textContent = last ? kt('toTasks') : kt('next') + ' →';
        if (scroll) { var top = box.querySelector('.kd-tbody').getBoundingClientRect().top + root.scrollY - 90; root.scrollTo({ top: top, behavior: 'smooth' }); }
        if (Object.keys(seen).length === secs.length && opts.onAllRead) opts.onAllRead();
      }
      prev.onclick = function () { show(cur - 1, true); };
      next.onclick = function () { if (cur === secs.length - 1) { if (opts.onFinish) opts.onFinish(); } else show(cur + 1, true); };
      toc.forEach(function (b) { b.onclick = function () { show(+b.getAttribute('data-p'), true); }; });
      show(0, false);
    },
    // test uchun: sahifalar va so'zlar soni (til bo'yicha)
    stats: function (spec, l) {
      var words = 0, secs = spec && spec.sections || [];
      function cnt(v) { var s = v && typeof v === 'object' ? v[l] : v; if (typeof s !== 'string') return; words += s.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length; }
      secs.forEach(function (s) { cnt(s.h); (s.p || []).forEach(cnt); (s.list || []).forEach(cnt); (s.after || []).forEach(cnt); (s.ex || []).forEach(function (e) { cnt(e.q); cnt(e.s); }); if (s.table) { s.table.head.forEach(cnt); s.table.rows.forEach(function (r) { r.forEach(cnt); }); } });
      return { pages: secs.length, words: words };
    }
  };
  root.NMTheory = TH;
})(this);
