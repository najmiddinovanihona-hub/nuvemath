// Nuvemath — «Formulalar» bo‘limi: 5–11-sinf formulalari, qidiruv, sinf bo‘yicha saralash, sevimlilar, kalkulyator va chop etish.
(function (root) {
  'use strict';
  var Kd = root.NMKids, tx = Kd.tx;
  function L(uz, ru, en) { return { uz: uz, ru: ru, en: en }; }
  function lang() { return (root.I18n && I18n.lang) || 'uz'; }
  var S = {
    title: L('Formulalar', 'Формулы', 'Formulas'),
    sub: L('5–11-sinf matematikasining barcha asosiy formulalari bir joyda: algebra, trigonometriya, hosila va integral, ehtimollik, planimetriya va stereometriya. Ko‘pchiligida kalkulyator bor — sonlarni kiriting va natijani darhol ko‘ring.', 'Все основные формулы математики 5–11 классов в одном месте: алгебра, тригонометрия, производная и интеграл, вероятность, планиметрия и стереометрия. У многих есть калькулятор — введите числа и сразу увидите результат.', 'All the key formulas of grades 5–11 in one place: algebra, trigonometry, derivatives and integrals, probability, plane and solid geometry. Many have a calculator — type numbers and see the result at once.'),
    count: L('{n} ta formula · {c} bo‘lim', '{n} формул · {c} разделов', '{n} formulas · {c} sections'),
    search: L('Formula qidirish: Pifagor, diskriminant, sin 2α, shar hajmi…', 'Поиск формулы: Пифагор, дискриминант, sin 2α, объём шара…', 'Find a formula: Pythagoras, discriminant, sin 2α, sphere volume…'),
    all: L('Hammasi', 'Все', 'All'), upTo: L('{n}-sinfgacha', 'до {n} класса', 'up to grade {n}'), anyGrade: L('Barcha sinflar', 'Все классы', 'All grades'),
    fav: L('Sevimlilar', 'Избранное', 'Favourites'), print: L('Chop etish', 'Печать', 'Print'), alg: L('Algebra va analiz', 'Алгебра и анализ', 'Algebra and analysis'), geo: L('Geometriya', 'Геометрия', 'Geometry'),
    calc: L('Hisoblash', 'Вычислить', 'Calculate'), lesson: L('Darslikda', 'В учебнике', 'In the textbook'), grade: L('{n}-sinf', '{n} класс', 'grade {n}'),
    none: L('Hech narsa topilmadi. Boshqa so‘z bilan qidirib ko‘ring.', 'Ничего не найдено. Попробуйте другое слово.', 'Nothing found. Try another word.'), noFav: L('Sevimlilar ro‘yxati bo‘sh — formulaning ☆ belgisini bosing.', 'Избранное пусто — нажмите ☆ у формулы.', 'No favourites yet — tap ☆ on a formula.'),
    result: L('Natija', 'Результат', 'Result'), copy: L('Nusxa olindi', 'Скопировано', 'Copied'), shown: L('Ko‘rsatilmoqda: {n}', 'Показано: {n}', 'Showing: {n}')
  };
  function s(k, m) { var t = tx(S[k]); if (m) Object.keys(m).forEach(function (x) { t = t.replace('{' + x + '}', m[x]); }); return t; }
  // pastki indekslarni tilga moslash (S_yon → S_бок / S_lat)
  var SUB = { ru: { yon: 'бок', asos: 'осн', yangi: 'нов', 'o‘r': 'ср' }, en: { yon: 'lat', asos: 'base', yangi: 'new', 'o‘r': 'avg' } };
  function loc(h) { var m = SUB[lang()]; if (!m) return h; return String(h).replace(/<sub>(yon|asos|yangi|o‘r)<\/sub>/g, function (a, k) { return '<sub>' + m[k] + '</sub>'; }); }
  function fx(it) { return loc(typeof it.f === 'string' ? it.f : tx(it.f)); }
  function norm(x) { return String(x || '').toLowerCase().replace(/<[^>]+>/g, ' ').replace(/[‘’ʻ'`]/g, '').replace(/ё/g, 'е').replace(/\s+/g, ' '); }
  function num(v) {
    if (typeof v === 'object' && v && v.uz) return tx(v);
    if (typeof v !== 'number' || !isFinite(v)) return '—';
    var r = Math.abs(v) >= 1e6 ? +v.toPrecision(8) : Math.round(v * 1e4) / 1e4;
    var t = String(r); return lang() === 'en' ? t : t.replace('.', ',');
  }
  function favs() { try { return JSON.parse(localStorage.getItem('nm-fav') || '[]'); } catch (e) { return []; } }
  function setFavs(a) { try { localStorage.setItem('nm-fav', JSON.stringify(a)); } catch (e) {} }
  function href(ln) { var m = ln && ln.match(/^g(\d+)p(\d+)-(t\d+)$/); return m ? '#darslik/' + m[1] + '/' + m[2] + '/' + m[3] : null; }

  var st = { q: '', g: 0, fav: false, cat: '' };
  function mount(view, args) {
    var F = root.NMFormulas; if (!F) { view.innerHTML = '<p class="muted">…</p>'; return; }
    st.cat = args && args[0] || '';
    var cats = F.cats;
    view.innerHTML =
      '<section class="kd-hero fm-hero"><span class="kd-badge">∑ ' + s('title') + '</span><h1>' + s('title') + '</h1><p>' + s('sub') + '</p><small class="fm-count">' + s('count', { n: F.total, c: cats.length }) + '</small></section>' +
      '<div class="fm-bar no-print"><input class="inp grow" id="fm-q" type="search" autocomplete="off" spellcheck="false" placeholder="' + s('search') + '">' +
      '<select class="inp" id="fm-g"><option value="0">' + s('anyGrade') + '</option>' + [5, 6, 7, 8, 9, 10, 11].map(function (g) { return '<option value="' + g + '">' + s('upTo', { n: g }) + '</option>'; }).join('') + '</select>' +
      '<button class="btn sm ghost" id="fm-fav">☆ ' + s('fav') + '</button><button class="btn sm ghost" id="fm-print">🖨️ ' + s('print') + '</button></div>' +
      '<nav class="fm-chips no-print"><a class="chip" data-c="">' + s('all') + '</a>' + cats.map(function (c) { return '<a class="chip" data-c="' + c.id + '"><b>' + c.ic + '</b> ' + tx(c.t) + '</a>'; }).join('') + '</nav>' +
      '<p class="muted small fm-shown no-print" id="fm-shown"></p><div id="fm-list"></div>';
    var q = view.querySelector('#fm-q'), g = view.querySelector('#fm-g'), fb = view.querySelector('#fm-fav');
    q.value = st.q; g.value = st.g; fb.classList.toggle('on', st.fav);
    q.oninput = function () { st.q = q.value; draw(); };
    g.onchange = function () { st.g = +g.value; draw(); };
    fb.onclick = function () { st.fav = !st.fav; fb.classList.toggle('on', st.fav); fb.textContent = (st.fav ? '★ ' : '☆ ') + s('fav'); draw(); };
    if (st.fav) fb.textContent = '★ ' + s('fav');
    view.querySelector('#fm-print').onclick = function () { window.print(); };
    view.querySelectorAll('.fm-chips .chip').forEach(function (a) { a.onclick = function () { st.cat = a.getAttribute('data-c'); history.replaceState(null, '', '#formulalar' + (st.cat ? '/' + st.cat : '')); draw(); window.scrollTo({ top: view.querySelector('.fm-bar').getBoundingClientRect().top + scrollY - 70, behavior: 'smooth' }); }; });
    draw();

    function draw() {
      var words = norm(st.q).split(' ').filter(Boolean), fv = favs(), shown = 0, html = '';
      view.querySelectorAll('.fm-chips .chip').forEach(function (a) { a.classList.toggle('on', a.getAttribute('data-c') === st.cat); });
      ['alg', 'geo'].forEach(function (grp) {
        var part = '';
        cats.filter(function (c) { return c.group === grp && (!st.cat || c.id === st.cat); }).forEach(function (c) {
          var items = c.items.map(function (it, i) { return { it: it, id: c.id + '-' + i }; }).filter(function (x) {
            if (st.g && x.it.g > st.g) return false;
            if (st.fav && fv.indexOf(x.id) < 0) return false;
            if (!words.length) return true;
            var hay = norm([x.it.n.uz, x.it.n.ru, x.it.n.en, typeof x.it.f === 'string' ? x.it.f : x.it.f.uz + ' ' + x.it.f.ru + ' ' + x.it.f.en, tx(c.t), x.it.note ? tx(x.it.note) : ''].join(' '));
            return words.every(function (w) { return hay.indexOf(w) >= 0; });
          });
          if (!items.length) return;
          shown += items.length;
          part += '<section class="fm-sec" id="fm-' + c.id + '"><h2 class="fm-h"><span>' + c.ic + '</span>' + tx(c.t) + ' <small>' + items.length + '</small></h2><div class="fm-grid">' + items.map(function (x) { return card(x.it, x.id, fv.indexOf(x.id) >= 0); }).join('') + '</div></section>';
        });
        if (part) html += '<h3 class="ex-grp">' + s(grp) + '</h3>' + part;
      });
      var list = view.querySelector('#fm-list');
      list.innerHTML = html || '<div class="card"><p>' + (st.fav && !words.length ? s('noFav') : s('none')) + '</p></div>';
      view.querySelector('#fm-shown').textContent = s('shown', { n: shown });
      bind(list);
    }
    function card(it, id, on) {
      var h = href(it.ln);
      return '<article class="fm-card" data-id="' + id + '"><header><h4>' + tx(it.n) + '</h4><button class="fm-star' + (on ? ' on' : '') + '" title="' + s('fav') + '">' + (on ? '★' : '☆') + '</button></header>' +
        '<div class="fm-f">' + fx(it) + '</div>' + (it.note ? '<p class="fm-note">' + loc(tx(it.note)) + '</p>' : '') +
        '<footer><span class="fm-g">' + s('grade', { n: it.g }) + '</span>' + (h ? '<a href="' + h + '">📖 ' + s('lesson') + '</a>' : '') + (it.c ? '<button class="fm-cb">🧮 ' + s('calc') + '</button>' : '') + '</footer>' +
        (it.c ? '<div class="fm-calc" hidden><div class="fm-in">' + it.c.v.map(function (v, k) { return '<label><span>' + v + '</span><input class="inp xs" type="number" step="any" data-k="' + k + '"></label>'; }).join('') + '</div><div class="fm-out"></div></div>' : '') + '</article>';
    }
    function bind(list) {
      var F2 = root.NMFormulas;
      list.querySelectorAll('.fm-card').forEach(function (el) {
        var id = el.getAttribute('data-id'), ci = id.lastIndexOf('-'), c = F2.cats.filter(function (x) { return x.id === id.slice(0, ci); })[0], it = c.items[+id.slice(ci + 1)];
        el.querySelector('.fm-star').onclick = function () { var a = favs(), k = a.indexOf(id); if (k >= 0) a.splice(k, 1); else a.push(id); setFavs(a); this.classList.toggle('on', k < 0); this.textContent = k < 0 ? '★' : '☆'; if (st.fav && k >= 0) draw(); };
        var cb = el.querySelector('.fm-cb'); if (!cb) return;
        var box = el.querySelector('.fm-calc'), out = el.querySelector('.fm-out'), ins = el.querySelectorAll('.fm-in input');
        cb.onclick = function () { box.hidden = !box.hidden; cb.classList.toggle('on', !box.hidden); if (!box.hidden) ins[0].focus(); };
        function run() {
          var vals = [].map.call(ins, function (i) { return i.value === '' ? NaN : parseFloat(i.value.replace(',', '.')); });
          if (vals.some(function (v) { return !isFinite(v); })) { out.innerHTML = '<span class="muted">' + it.c.v.join(', ') + ' = ?</span>'; return; }
          var r; try { r = it.c.r.apply(null, vals); } catch (e) { r = NaN; }
          out.innerHTML = Array.isArray(r) ? r.map(function (p) { return '<span><i>' + loc(typeof p[0] === 'object' ? tx(p[0]) : p[0]) + ' =</i> <b>' + num(p[1]) + '</b></span>'; }).join('') : '<span><i>' + s('result') + ' =</i> <b>' + num(r) + '</b></span>';
        }
        ins.forEach(function (i) { i.oninput = run; }); run();
      });
      if (st.cat && !st.q) { var t = document.getElementById('fm-' + st.cat); void t; }
    }
  }
  root.NMFormulaPage = { mount: mount };
})(this);
