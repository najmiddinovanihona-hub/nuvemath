// Nuvemath — qo‘shimchalar: nazariyani ovoz chiqarib o‘qish (Web Speech API), umumiy qidiruv va oflayn rejim (service worker).
(function (root) {
  'use strict';
  function L(uz, ru, en) { return { uz: uz, ru: ru, en: en }; }
  function lang() { return (root.I18n && I18n.lang) || 'uz'; }
  function tx(o) { return o && typeof o === 'object' ? (o[lang()] || o.uz) : o; }
  var S = {
    say: L('Ovoz chiqarib o‘qish', 'Прочитать вслух', 'Read aloud'), stop: L('To‘xtatish', 'Остановить', 'Stop'),
    noVoice: L('Bu brauzerda o‘zbekcha ovoz topilmadi. Ovozli o‘qish Microsoft Edge brauzerida (Madina, Sardor ovozlari) ishlaydi; boshqa tilni tanlab ham tinglashingiz mumkin.', 'В этом браузере нет узбекского голоса. Озвучка на узбекском работает в Microsoft Edge; можно также выбрать другой язык.', 'No Uzbek voice in this browser. Uzbek read-aloud works in Microsoft Edge; you can also switch to another language.'),
    noTts: L('Brauzeringiz ovozli o‘qishni qo‘llab-quvvatlamaydi.', 'Ваш браузер не поддерживает озвучивание.', 'Your browser does not support read-aloud.'),
    search: L('Qidirish: mavzu, formula, bo‘lim…', 'Поиск: тема, формула, раздел…', 'Search: topic, formula, section…'), none: L('Hech narsa topilmadi', 'Ничего не найдено', 'Nothing found'),
    tools: L('Bo‘limlar', 'Разделы', 'Sections'), topics: L('Mavzular', 'Темы', 'Topics'), grade: L('sinf', 'класс', 'grade'), exam: L('Imtihon bobi', 'Глава экзамена', 'Exam chapter')
  };

  // ---------- Ovozli o'qish ----------
  var TTS = root.speechSynthesis, speaking = false;
  var CODE = { uz: 'uz', ru: 'ru', en: 'en' };
  function voice() {
    if (!TTS) return null; var l = CODE[lang()], vs = TTS.getVoices();
    var cand = vs.filter(function (v) { return v.lang && v.lang.toLowerCase().indexOf(l) === 0; });
    cand.sort(function (a, b) { return (/natural|online/i.test(b.name) ? 1 : 0) - (/natural|online/i.test(a.name) ? 1 : 0); });
    return cand[0] || null;
  }
  var SYM = {
    uz: [[/−|–/g, ' minus '], [/=/g, ' teng '], [/²/g, ' kvadrat '], [/³/g, ' kub '], [/√/g, ' ildiz '], [/π/g, ' pi '], [/≤/g, ' kichik yoki teng '], [/≥/g, ' katta yoki teng '], [/</g, ' kichik '], [/>/g, ' katta '], [/·|×/g, ' karra '], [/÷/g, ' bo‘lingan '], [/%/g, ' foiz '], [/∫/g, ' integral '], [/°/g, ' gradus ']],
    ru: [[/−|–/g, ' минус '], [/=/g, ' равно '], [/²/g, ' в квадрате '], [/³/g, ' в кубе '], [/√/g, ' корень '], [/π/g, ' пи '], [/≤/g, ' меньше или равно '], [/≥/g, ' больше или равно '], [/</g, ' меньше '], [/>/g, ' больше '], [/·|×/g, ' умножить на '], [/%/g, ' процентов '], [/∫/g, ' интеграл '], [/°/g, ' градусов ']],
    en: [[/−|–/g, ' minus '], [/=/g, ' equals '], [/²/g, ' squared '], [/³/g, ' cubed '], [/√/g, ' root '], [/π/g, ' pi '], [/≤/g, ' at most '], [/≥/g, ' at least '], [/</g, ' less than '], [/>/g, ' greater than '], [/·|×/g, ' times '], [/%/g, ' percent '], [/∫/g, ' integral '], [/°/g, ' degrees ']]
  };
  function clean(t) { (SYM[lang()] || []).forEach(function (r) { t = t.replace(r[0], r[1]); }); return t.replace(/[‘’ʻ]/g, '\'').replace(/\s+/g, ' ').trim(); }
  function stop() { if (TTS) TTS.cancel(); speaking = false; document.querySelectorAll('.kd-tsay').forEach(function (b) { b.classList.remove('on'); b.textContent = '🔊 ' + tx(S.say); }); }
  function speak(text, btn) {
    if (!TTS) { alert(tx(S.noTts)); return; }
    if (speaking) { stop(); return; }
    var v = voice();
    if (!v) { alert(tx(S.noVoice)); return; }
    var parts = clean(text).match(/[^.!?;:]+[.!?;:]?/g) || [], i = 0;
    speaking = true; if (btn) { btn.classList.add('on'); btn.textContent = '⏹ ' + tx(S.stop); }
    (function nextPart() {
      if (!speaking) return;
      if (i >= parts.length) { stop(); return; }
      var u = new SpeechSynthesisUtterance(parts[i++]); u.voice = v; u.lang = v.lang; u.rate = 0.95;
      u.onend = nextPart; u.onerror = function () { stop(); };
      TTS.speak(u);
    })();
  }
  if (TTS && TTS.onvoiceschanged !== undefined) TTS.onvoiceschanged = function () {};
  // nazariya o'quvchisiga tugma qo'shish: .kd-tnav paydo bo'lganda
  function enhanceTheory() {
    document.querySelectorAll('.kd-theory').forEach(function (th) {
      if (th.querySelector('.kd-tsay')) return;
      var nav = th.querySelector('.kd-tnav'); if (!nav) return;
      var b = document.createElement('button'); b.className = 'btn ghost sm kd-tsay'; b.type = 'button'; b.textContent = '🔊 ' + tx(S.say);
      b.onclick = function () { var p = th.querySelector('.kd-tp.on'); if (p) speak(p.innerText, b); };
      nav.insertBefore(b, nav.querySelector('.kd-tpage'));
      th.querySelectorAll('.kd-tprev, .kd-tnext, .kd-toc button').forEach(function (x) { x.addEventListener('click', stop); });
    });
  }
  new MutationObserver(function () { enhanceTheory(); }).observe(document.documentElement, { childList: true, subtree: true });
  root.addEventListener('hashchange', stop);

  // ---------- Qidiruv ----------
  function norm(s) { return String(s || '').toLowerCase().replace(/<[^>]+>/g, ' ').replace(/[‘’ʻ'`]/g, '').replace(/ё/g, 'е').replace(/\s+/g, ' '); }
  var IDX = null;
  function buildIndex() {
    var out = [], C = root.NMCurriculum;
    [['darslik', 'nav.lessons', '📖'], ['formulalar', 'nav.formulas', '∑'], ['imtihon', 'nav.exam', '🎓'], ['grafik', 'nav.plot', '📈'], ['yechuvchi', 'nav.solve', '🧮'], ['chizma', 'nav.geo', '📐'], ['jismlar', 'nav.solids', '🧊'], ['mashq', 'nav.practice', '🎯'], ['natija', 'nav.results', '📊'], ['takror', null, '🔁']].forEach(function (r) {
      out.push({ kind: 'tool', ic: r[2], href: '#' + r[0], name: function () { return r[1] ? T(r[1]) : tx(L('Xatolar ustida ishlash', 'Работа над ошибками', 'Learning from mistakes')); }, hay: function () { return norm((r[1] ? T(r[1]) : 'takror xato ошибки mistakes') + ' ' + r[0]); } });
    });
    if (C) C.grades.forEach(function (g) { g.parts.forEach(function (p) { C.topics(p).forEach(function (t) {
      out.push({ kind: 'topic', ic: t.section && t.section.icon || '📘', href: '#darslik/' + p.grade + '/' + p.part + '/' + t.id, g: p.grade,
        name: function () { return tx(t.title); }, sub: function () { return p.grade + '-' + tx(S.grade) + ' · ' + tx(t.section ? t.section.title : p.title); },
        hay: function () { return norm(tx(t.title) + ' ' + (t.keys || []).map(tx).join(' ') + ' ' + tx(t.rule) + ' ' + p.grade); } });
    }); }); });
    if (root.NMFormulas) root.NMFormulas.cats.forEach(function (c) { c.items.forEach(function (it) {
      out.push({ kind: 'formula', ic: '∑', href: '#formulalar/' + c.id, name: function () { return tx(it.n); }, sub: function () { return T('nav.formulas') + ' · ' + tx(c.t); }, hay: function () { return norm(it.n.uz + ' ' + it.n.ru + ' ' + it.n.en + ' ' + (typeof it.f === 'string' ? it.f : it.f.uz)); } });
    }); });
    if (root.NMExam) root.NMExam.chapters.forEach(function (c) { out.push({ kind: 'exam', ic: c.ic, href: '#imtihon/bob/' + c.id, name: function () { return tx(c.t); }, sub: function () { return tx(S.exam); }, hay: function () { return norm(tx(c.t) + ' imtihon экзамен exam'); } }); });
    return out;
  }
  function search(q) {
    if (!IDX) IDX = buildIndex();
    var words = norm(q).split(' ').filter(Boolean); if (!words.length) return [];
    return IDX.map(function (it) { var h = it.hay(), n = norm(it.name()), sc = 0; for (var i = 0; i < words.length; i++) { if (h.indexOf(words[i]) < 0) return null; sc += n.indexOf(words[i]) >= 0 ? 3 : 1; if (n.indexOf(words[i]) === 0) sc += 2; } if (it.kind === 'tool') sc += 2; return { it: it, sc: sc }; })
      .filter(Boolean).sort(function (a, b) { return b.sc - a.sc || (a.it.g || 0) - (b.it.g || 0); }).slice(0, 24).map(function (x) { return x.it; });
  }
  function openSearch() {
    var ov = document.getElementById('nm-search');
    if (!ov) {
      ov = document.createElement('div'); ov.id = 'nm-search'; ov.className = 'sr-ov';
      ov.innerHTML = '<div class="sr-box"><input class="inp big" id="sr-in" autocomplete="off" spellcheck="false"><div class="sr-res" id="sr-res"></div></div>';
      document.body.appendChild(ov);
      ov.addEventListener('click', function (e) { if (e.target === ov) close(); });
      var inp = ov.querySelector('#sr-in'), res = ov.querySelector('#sr-res'), sel = 0, cur = [];
      function draw() {
        cur = search(inp.value); sel = Math.min(sel, Math.max(0, cur.length - 1));
        res.innerHTML = inp.value.trim() ? (cur.length ? cur.map(function (it, i) { return '<a class="sr-it' + (i === sel ? ' on' : '') + '" href="' + it.href + '"><span>' + it.ic + '</span><div><b>' + it.name() + '</b>' + (it.sub ? '<small>' + it.sub() + '</small>' : '') + '</div></a>'; }).join('') : '<p class="muted">' + tx(S.none) + '</p>') : '';
        res.querySelectorAll('.sr-it').forEach(function (a) { a.onclick = close; });
      }
      inp.oninput = function () { sel = 0; draw(); };
      inp.onkeydown = function (e) {
        if (e.key === 'Escape') close();
        else if (e.key === 'ArrowDown') { sel = Math.min(cur.length - 1, sel + 1); draw(); e.preventDefault(); }
        else if (e.key === 'ArrowUp') { sel = Math.max(0, sel - 1); draw(); e.preventDefault(); }
        else if (e.key === 'Enter' && cur[sel]) { location.hash = cur[sel].href.slice(1); close(); }
      };
    }
    var i2 = ov.querySelector('#sr-in'); i2.placeholder = tx(S.search); ov.classList.add('on'); i2.value = ''; ov.querySelector('#sr-res').innerHTML = ''; setTimeout(function () { i2.focus(); }, 30);
  }
  function close() { var ov = document.getElementById('nm-search'); if (ov) ov.classList.remove('on'); }
  function addButton() {
    var tools = document.querySelector('.top .tools'); if (!tools || document.getElementById('sr-btn')) return;
    var b = document.createElement('button'); b.id = 'sr-btn'; b.className = 'icon-btn'; b.title = 'Ctrl+K'; b.textContent = '🔍'; b.onclick = openSearch;
    tools.insertBefore(b, tools.querySelector('.lang'));
  }
  document.addEventListener('keydown', function (e) { if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K') && !document.body.classList.contains('kd-secure')) { e.preventDefault(); openSearch(); } });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', addButton); else addButton();

  // ---------- Oflayn rejim ----------
  if ('serviceWorker' in navigator && location.protocol === 'https:') {
    root.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').catch(function () {}); });
  }

  root.NMExtras = { speak: speak, stop: stop, search: search, openSearch: openSearch };
})(this);
