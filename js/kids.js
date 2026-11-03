// Nuvemath — boshlang'ich sinflar uchun interaktiv dars dvigateli:
// 3D sahna (Three.js), masala sxemalari (butun/qism, orttirish/kamaytirish, taqqoslash), to'ldirish joylari,
// sonli zanjir, sehrli kvadrat, jadval, chizg'ich, tarozi, idishlar, tartiblash, tanlash va testlar.
// Har bir topshiriq ma'lumotdan quriladi: { type, make(R) } — make har chaqirilganda yangi sonlar beradi.
(function (root) {
  'use strict';
  var K = {};
  function R(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function h(html) { var d = document.createElement('div'); d.innerHTML = html.trim(); return d.firstElementChild; }
  function num(v) { var s = String(v).trim().replace(/\s+/g, '').replace(',', '.').replace('−', '-'); return s === '' ? NaN : Number(s); }
  K.R = R; K.pick = pick; K.shuffle = shuffle;

  // ---------- Uch tilli matnlar ----------
  var KT = {
    uz: { check: 'Tekshirish', fresh: '↻ Yangi misol', praise: ['Barakalla!', 'Zo‘r!', 'Ajoyib!', 'To‘ppa-to‘g‘ri!', 'Qoyil!'], retry: 'Yana bir bor urinib ko‘ring.',
      cond: 'Qisqa shart', solve: 'Yechish:', answer: 'Javob:', exprOk: 'Javob to‘g‘ri, lekin ifodani tekshiring.', schemeHint: 'Sxemaga qarang: butun = qism + qism.',
      count3d: '3D sahna: sanang', pickHint: '👆 Sanaganingizni bosib belgilang · sudrab aylantiring', marked: 'Belgilandi:', problem: 'Masalani yeching',
      chain: 'Sonli zanjirni to‘ldiring', magic: 'Sehrli kvadrat', magicTask: 'Har bir qator va ustundagi sonlar yig‘indisi <b>15</b> ga teng bo‘lsin. 1 dan 9 gacha sonlar bir martadan.', magicHint: 'Qatorlar va ustunlar yig‘indisini qayta hisoblang.',
      table: 'Jadvalni to‘ldiring', add1: 'Qo‘shiluvchi', add2: 'Qo‘shiluvchi', sum: 'Yig‘indi', min: 'Kamayuvchi', sub: 'Ayriluvchi', diff: 'Ayirma',
      ruler: 'O‘lchang', length: 'Uzunligi:', rulerHint: 'Chizg‘ichdagi boshlang‘ich va oxirgi bo‘linmalarga qarang.',
      scale: 'Tarozida torting', balanced: '⚖️ Muvozanat!', leftHeavy: 'Chap palla og‘ir', rightHeavy: 'O‘ng palla og‘ir', onRight: 'o‘ng pallada:', remove: '↶ Olib tashlash', mass: 'Massasi:', scaleHint: 'Tarozini muvozanatga keltiring: o‘ng pallaga toshlar qo‘ying.',
      jugs: 'Idishni to‘ldiring', full: 'To‘ldi!', poured: 'Quyildi:', jars: 'banka', pourTitle: '1 l quyish', volume: 'Hajmi:', jugsHint: 'Bankani bosib, idish to‘lguncha quying va sanang.',
      order: 'Tartib bilan joylashtiring', orderBad: 'Tartib noto‘g‘ri — boshidan qayta bosing.', choose: 'To‘g‘risini tanlang', chooseFirst: 'Avval javobni tanlang.', chooseBad: 'Masalani yana bir bor diqqat bilan o‘qing.',
      drill: 'Tez hisoblang', q100: 'Mukammal! Siz haqiqiy matematiksiz! 🏆', q80: 'Juda yaxshi natija! ⭐', q50: 'Yaxshi! Yana bir bor takrorlang.', qLow: 'Mavzuni qayta ko‘rib chiqing — siz uddalaysiz!', reQuiz: '↻ Qayta topshirish', qPass: 'Mavzu o‘zlashtirildi — natija 80% dan yuqori! 🎓', qFail: 'Mavzuni o‘zlashtirish uchun kamida 80% to‘plang. Nazariyani qayta o‘qib, yana urinib ko‘ring.', qNeed: 'O‘tish uchun: 80%',
      kg: 'kg', l: 'l', cm: 'cm', dm: 'dm', total: 'jami', perimeter: 'Perimetrni toping', polyHint: 'Barcha tomonlar uzunliklarini qo‘shing.', column: 'Ustun ko‘rinishida hisoblang', columnHint: 'Birliklarni birliklar ostiga, o‘nliklarni o‘nliklar ostiga yozib, o‘ngdan boshlang.', clock: 'Soat necha bo‘ldi?', clockAsk: 'Soat nechani ko‘rsatyapti? Soat va minutni yozing.', clockHint: 'Kalta strelka — soat, uzun strelka — minut.', area: 'Yuzni toping', areaHint: 'Kataklarni qatorlab sanang: qatordagi katak × qatorlar soni.', numline: 'Sonli nur', numlineHint: 'Bo‘linmalarni sanang: har bir qadam qanchaga tengligini aniqlang.', coord: 'Koordinata burchagi', coordAsk: 'Nuqtaning koordinatalarini yozing: avval x (gorizontal), keyin y (vertikal).', coordHint: 'Avval pastga — x o‘qiga, keyin chapga — y o‘qiga qarang.' },
    ru: { check: 'Проверить', fresh: '↻ Новый пример', praise: ['Молодец!', 'Отлично!', 'Супер!', 'Совершенно верно!', 'Браво!'], retry: 'Попробуйте ещё раз.',
      cond: 'Краткая запись', solve: 'Решение:', answer: 'Ответ:', exprOk: 'Ответ верный, но проверьте выражение.', schemeHint: 'Посмотрите на схему: целое = часть + часть.',
      count3d: '3D-сцена: посчитайте', pickHint: '👆 Нажимайте на посчитанные предметы · вращайте перетаскиванием', marked: 'Отмечено:', problem: 'Решите задачу',
      chain: 'Заполните числовую цепочку', magic: 'Магический квадрат', magicTask: 'Сумма чисел в каждой строке и каждом столбце должна быть <b>15</b>. Числа от 1 до 9 — по одному разу.', magicHint: 'Пересчитайте суммы строк и столбцов.',
      table: 'Заполните таблицу', add1: 'Слагаемое', add2: 'Слагаемое', sum: 'Сумма', min: 'Уменьшаемое', sub: 'Вычитаемое', diff: 'Разность',
      ruler: 'Измерьте', length: 'Длина:', rulerHint: 'Посмотрите на начальное и конечное деление линейки.',
      scale: 'Взвесьте на весах', balanced: '⚖️ Равновесие!', leftHeavy: 'Левая чаша тяжелее', rightHeavy: 'Правая чаша тяжелее', onRight: 'на правой чаше:', remove: '↶ Убрать', mass: 'Масса:', scaleHint: 'Уравновесьте весы: кладите гири на правую чашу.',
      jugs: 'Наполните ведро', full: 'Полно!', poured: 'Налито:', jars: 'банок', pourTitle: 'Налить 1 л', volume: 'Объём:', jugsHint: 'Нажимайте на банку, пока ведро не наполнится, и считайте.',
      order: 'Расставьте по порядку', orderBad: 'Порядок неверный — начните заново.', choose: 'Выберите верный ответ', chooseFirst: 'Сначала выберите ответ.', chooseBad: 'Прочитайте задачу ещё раз внимательно.',
      drill: 'Считаем быстро', q100: 'Безупречно! Вы настоящий математик! 🏆', q80: 'Очень хороший результат! ⭐', q50: 'Хорошо! Повторите ещё раз.', qLow: 'Повторите тему — у вас получится!', reQuiz: '↻ Пройти заново', qPass: 'Тема усвоена — результат выше 80%! 🎓', qFail: 'Чтобы усвоить тему, наберите не меньше 80%. Перечитайте теорию и попробуйте снова.', qNeed: 'Проходной балл: 80%',
      kg: 'кг', l: 'л', cm: 'см', dm: 'дм', total: 'всего', perimeter: 'Найдите периметр', polyHint: 'Сложите длины всех сторон.', column: 'Вычислите столбиком', columnHint: 'Пишите единицы под единицами, десятки под десятками и начинайте справа.', clock: 'Который час?', clockAsk: 'Какое время показывают часы? Запишите часы и минуты.', clockHint: 'Короткая стрелка — часы, длинная — минуты.', area: 'Найдите площадь', areaHint: 'Считайте клетки рядами: клеток в ряду × число рядов.', numline: 'Числовой луч', numlineHint: 'Посчитайте деления: сколько стоит один шаг?', coord: 'Координатный угол', coordAsk: 'Запишите координаты точки: сначала x (по горизонтали), потом y (по вертикали).', coordHint: 'Сначала посмотрите вниз — на ось x, потом влево — на ось y.' },
    en: { check: 'Check', fresh: '↻ New example', praise: ['Well done!', 'Great!', 'Awesome!', 'Exactly right!', 'Bravo!'], retry: 'Try once more.',
      cond: 'Short note', solve: 'Solution:', answer: 'Answer:', exprOk: 'The answer is right — now check the expression.', schemeHint: 'Look at the diagram: whole = part + part.',
      count3d: '3D scene: count', pickHint: '👆 Tap the objects you count · drag to rotate', marked: 'Marked:', problem: 'Solve the problem',
      chain: 'Fill in the number chain', magic: 'Magic square', magicTask: 'Every row and column must add up to <b>15</b>. Use 1 to 9 once each.', magicHint: 'Recalculate the row and column sums.',
      table: 'Fill in the table', add1: 'Addend', add2: 'Addend', sum: 'Sum', min: 'Minuend', sub: 'Subtrahend', diff: 'Difference',
      ruler: 'Measure', length: 'Length:', rulerHint: 'Look at the start and end marks on the ruler.',
      scale: 'Weigh it', balanced: '⚖️ Balanced!', leftHeavy: 'Left pan is heavier', rightHeavy: 'Right pan is heavier', onRight: 'on the right pan:', remove: '↶ Remove', mass: 'Mass:', scaleHint: 'Balance the scale by putting weights on the right pan.',
      jugs: 'Fill the bucket', full: 'Full!', poured: 'Poured:', jars: 'jars', pourTitle: 'Pour 1 L', volume: 'Volume:', jugsHint: 'Tap the jar until the bucket is full and count.',
      order: 'Put in order', orderBad: 'Wrong order — start again.', choose: 'Choose the right answer', chooseFirst: 'Choose an answer first.', chooseBad: 'Read the problem carefully once more.',
      drill: 'Quick maths', q100: 'Perfect! You are a real mathematician! 🏆', q80: 'Very good result! ⭐', q50: 'Good! Practise once more.', qLow: 'Review the topic — you can do it!', reQuiz: '↻ Try again', qPass: 'Topic mastered — over 80%! 🎓', qFail: 'Score at least 80% to master the topic. Reread the theory and try again.', qNeed: 'Pass mark: 80%',
      kg: 'kg', l: 'L', cm: 'cm', dm: 'dm', total: 'total', perimeter: 'Find the perimeter', polyHint: 'Add the lengths of all the sides.', column: 'Work it out in a column', columnHint: 'Put ones under ones and tens under tens, and start from the right.', clock: 'What time is it?', clockAsk: 'What time does the clock show? Write the hours and minutes.', clockHint: 'The short hand shows hours, the long hand shows minutes.', area: 'Find the area', areaHint: 'Count the squares in rows: squares in a row × number of rows.', numline: 'Number line', numlineHint: 'Count the marks: how much is each step worth?', coord: 'Coordinate grid', coordAsk: 'Write the point’s coordinates: x first (across), then y (up).', coordHint: 'Look down to the x-axis first, then left to the y-axis.' }
  };
  function lang() { return (root.I18n && root.I18n.lang) || 'uz'; }
  function t(k) { var L = KT[lang()] || KT.uz; return L[k] !== undefined ? L[k] : KT.uz[k]; }
  // {uz, ru, en} obyektidan joriy tildagi matn (oddiy satr bo'lsa o'zi)
  function tx(v) { if (v == null) return ''; if (typeof v === 'object' && !Array.isArray(v) && 'uz' in v) return v[lang()] != null ? v[lang()] : v.uz; return v; }
  K.t = t; K.tx = tx; K.KT = KT;

  // ---------- Konfetti (to'g'ri javob quvonchi) ----------
  var COLORS = ['#5b9dff', '#3ddc97', '#ffb547', '#ff6b8b', '#b48cff', '#3fd0e0'];
  K.confetti = function (target) {
    if (root.matchMedia && root.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var r = target.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + Math.min(r.height / 2, 120);
    for (var i = 0; i < 26; i++) {
      var s = document.createElement('span'); s.className = 'kd-conf';
      var a = Math.random() * Math.PI * 2, d = 60 + Math.random() * 110;
      s.style.cssText = 'left:' + cx + 'px;top:' + cy + 'px;background:' + pick(COLORS) + ';--dx:' + (Math.cos(a) * d).toFixed(0) + 'px;--dy:' + (Math.sin(a) * d - 40).toFixed(0) + 'px;--r:' + R(-360, 360) + 'deg';
      document.body.appendChild(s);
      setTimeout(function (x) { return function () { x.remove(); }; }(s), 1100);
    }
  };

  // ---------- Yo'lboshchi odamcha (intro dagi qahramon) ----------
  var MASCOT = '<svg viewBox="30 14 80 110" class="kd-mascot-svg" aria-hidden="true">' +
    '<rect x="44" y="82" width="52" height="40" rx="22" class="m-body"/><path d="M56 90 Q70 101 84 90" class="m-scarf"/>' +
    '<circle cx="70" cy="50" r="27" class="m-face"/><path d="M46 42 Q52 18 72 21 Q90 22 95 40 Q84 30 70 33 Q58 30 46 42 Z" class="m-hair"/>' +
    '<ellipse cx="61" cy="52" rx="5.6" ry="6.4" class="m-eye"/><ellipse cx="80" cy="52" rx="5.6" ry="6.4" class="m-eye"/>' +
    '<circle cx="62" cy="53" r="2.7" class="m-pupil"/><circle cx="81" cy="53" r="2.7" class="m-pupil"/>' +
    '<circle cx="61" cy="52" r="9" class="m-glass"/><circle cx="80" cy="52" r="9" class="m-glass"/>' +
    '<path d="M63 66 Q70.5 72 78 66" class="m-glass"/></svg>';
  K.say = function (html, cls) { return '<div class="kd-say ' + (cls || '') + '"><div class="kd-mascot">' + MASCOT + '</div><div class="kd-bubble">' + tx(html) + '</div></div>'; };

  // ---------- 3D sahna ----------
  var PAL = { blue: 0x4f8dff, green: 0x3ddc97, orange: 0xffa53d, pink: 0xff6b8b, violet: 0xa78bfa, cyan: 0x3fd0e0, red: 0xff5a5f, yellow: 0xffd23f, gray: 0x8792b0, white: 0xf3f6ff, brown: 0x9c6b3f, gold: 0xffc43d };
  function mat(THREE, c, extra) { return new THREE.MeshStandardMaterial(Object.assign({ color: PAL[c] !== undefined ? PAL[c] : c, roughness: 0.42, metalness: 0.08 }, extra || {})); }
  var RAINBOW = ['#ff5a5f', '#ffa53d', '#ffd23f', '#3ddc97', '#3fd0e0', '#4f8dff', '#a78bfa', '#ff6b8b', '#7bed9f', '#ffb8d1'];
  var BUILD = {
    cube: function (T, c) { var g = new T.Group(), m = new T.Mesh(new T.BoxGeometry(0.78, 0.78, 0.78), mat(T, c)); m.position.y = 0.39; g.add(m);
      var e = new T.LineSegments(new T.EdgesGeometry(m.geometry), new T.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.35 })); e.position.y = 0.39; g.add(e); return g; },
    ball: function (T, c) { var g = new T.Group(), m = new T.Mesh(new T.SphereGeometry(0.42, 28, 18), mat(T, c, { roughness: 0.25 })); m.position.y = 0.42; g.add(m); return g; },
    cone: function (T, c) { var g = new T.Group(), m = new T.Mesh(new T.ConeGeometry(0.42, 0.95, 28), mat(T, c)); m.position.y = 0.48; g.add(m); return g; },
    cylinder: function (T, c) { var g = new T.Group(), m = new T.Mesh(new T.CylinderGeometry(0.38, 0.38, 0.85, 28), mat(T, c)); m.position.y = 0.43; g.add(m); return g; },
    pyramid: function (T, c) { var g = new T.Group(), m = new T.Mesh(new T.ConeGeometry(0.55, 0.85, 4), mat(T, c, { flatShading: true })); m.position.y = 0.43; m.rotation.y = Math.PI / 4; g.add(m); return g; },
    robot: function (T, c) {
      var g = new T.Group(), body = mat(T, c), dark = mat(T, 0x22305a), glow = new T.MeshBasicMaterial({ color: 0x7ff3ff });
      var b = new T.Mesh(new T.BoxGeometry(0.62, 0.55, 0.42), body); b.position.y = 0.45; g.add(b);
      var hd = new T.Mesh(new T.BoxGeometry(0.46, 0.38, 0.38), body); hd.position.y = 0.95; g.add(hd);
      [-0.1, 0.1].forEach(function (x) { var e = new T.Mesh(new T.SphereGeometry(0.055, 12, 8), glow); e.position.set(x, 0.97, 0.2); g.add(e); });
      var an = new T.Mesh(new T.CylinderGeometry(0.02, 0.02, 0.18, 8), dark); an.position.y = 1.22; g.add(an);
      var ab = new T.Mesh(new T.SphereGeometry(0.06, 12, 8), mat(T, 'red')); ab.position.y = 1.33; g.add(ab);
      [-0.4, 0.4].forEach(function (x) { var a = new T.Mesh(new T.BoxGeometry(0.12, 0.42, 0.14), dark); a.position.set(x, 0.48, 0); g.add(a); });
      [-0.15, 0.15].forEach(function (x) { var l = new T.Mesh(new T.BoxGeometry(0.16, 0.2, 0.2), dark); l.position.set(x, 0.1, 0); g.add(l); });
      return g;
    },
    drone: function (T, c) {
      var g = new T.Group(), body = mat(T, c), dark = mat(T, 0x22305a);
      var b = new T.Mesh(new T.BoxGeometry(0.42, 0.14, 0.42), body); b.position.y = 0.55; g.add(b);
      [[1, 1], [1, -1], [-1, 1], [-1, -1]].forEach(function (p) {
        var arm = new T.Mesh(new T.BoxGeometry(0.42, 0.05, 0.06), dark); arm.position.set(p[0] * 0.2, 0.57, p[1] * 0.2); arm.rotation.y = Math.atan2(p[1], p[0]) * -1; g.add(arm);
        var rot = new T.Mesh(new T.CylinderGeometry(0.2, 0.2, 0.015, 20), new T.MeshStandardMaterial({ color: 0xcfe0ff, transparent: true, opacity: 0.55 }));
        rot.position.set(p[0] * 0.36, 0.63, p[1] * 0.36); rot.userData.spin = 1; g.add(rot);
      });
      g.userData.hover = 1; return g;
    },
    medal: function (T, c) {
      var g = new T.Group(), m = new T.Mesh(new T.CylinderGeometry(0.34, 0.34, 0.08, 32), mat(T, c || 'gold', { metalness: 0.7, roughness: 0.25 }));
      m.rotation.x = Math.PI / 2; m.position.y = 0.36; g.add(m);
      var r1 = new T.Mesh(new T.BoxGeometry(0.14, 0.5, 0.03), mat(T, 'blue')); r1.position.set(-0.1, 0.86, 0); r1.rotation.z = 0.25; g.add(r1);
      var r2 = r1.clone(); r2.position.x = 0.1; r2.rotation.z = -0.25; r2.material = mat(T, 'red'); g.add(r2);
      return g;
    },
    apple: function (T, c) {
      var g = new T.Group(), m = new T.Mesh(new T.SphereGeometry(0.4, 26, 18), mat(T, c || 'red', { roughness: 0.3 })); m.scale.y = 0.92; m.position.y = 0.38; g.add(m);
      var s = new T.Mesh(new T.CylinderGeometry(0.025, 0.03, 0.2, 8), mat(T, 'brown')); s.position.y = 0.82; g.add(s);
      var l = new T.Mesh(new T.SphereGeometry(0.11, 12, 8), mat(T, 'green')); l.scale.set(1.4, 0.35, 0.8); l.position.set(0.1, 0.84, 0); g.add(l);
      return g;
    },
    pencil: function (T, c) {
      var g = new T.Group(), b = new T.Mesh(new T.CylinderGeometry(0.1, 0.1, 1.1, 6), mat(T, c, { flatShading: true }));
      b.rotation.z = Math.PI / 2; b.position.y = 0.12; g.add(b);
      var t = new T.Mesh(new T.ConeGeometry(0.1, 0.25, 6), mat(T, 0xf1d3a2)); t.rotation.z = -Math.PI / 2; t.position.set(0.67, 0.12, 0); g.add(t);
      return g;
    },
    book: function (T, c) {
      var g = new T.Group(), cv = new T.Mesh(new T.BoxGeometry(0.75, 0.16, 0.95), mat(T, c)); cv.position.y = 0.08; g.add(cv);
      var p = new T.Mesh(new T.BoxGeometry(0.7, 0.12, 0.88), mat(T, 'white')); p.position.set(0.03, 0.09, 0); g.add(p);
      return g;
    },
    weight: function (T, c) {
      var g = new T.Group(), b = new T.Mesh(new T.CylinderGeometry(0.28, 0.42, 0.55, 28), mat(T, c || 0x4a5570, { metalness: 0.5, roughness: 0.35 })); b.position.y = 0.28; g.add(b);
      var hd = new T.Mesh(new T.TorusGeometry(0.15, 0.05, 10, 24), mat(T, 0x4a5570, { metalness: 0.5 })); hd.position.y = 0.66; g.add(hd);
      return g;
    },
    bucket: function (T, c) {
      var g = new T.Group(), b = new T.Mesh(new T.CylinderGeometry(0.42, 0.33, 0.75, 30, 1, true), mat(T, c, { side: T.DoubleSide })); b.position.y = 0.38; g.add(b);
      var w = new T.Mesh(new T.CylinderGeometry(0.39, 0.34, 0.55, 30), new T.MeshStandardMaterial({ color: 0x3fa9ff, transparent: true, opacity: 0.75, roughness: 0.1 })); w.position.y = 0.3; g.add(w);
      return g;
    },
    rod: function (T, c) { // o'nlik: 10 ta kichik kubdan iborat tayoqcha
      var g = new T.Group(), m = mat(T, c || 'orange'), geo = new T.BoxGeometry(0.2, 0.2, 0.2), eg = new T.EdgesGeometry(geo), lm = new T.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.45 });
      for (var i = 0; i < 10; i++) { var b = new T.Mesh(geo, m); b.position.set(0, 0.11 + i * 0.205, 0); g.add(b); var e = new T.LineSegments(eg, lm); e.position.copy(b.position); g.add(e); }
      return g;
    },
    flat: function (T, c) { // yuzlik: 10×10 kubchali plita
      var g = new T.Group(), b = new T.Mesh(new T.BoxGeometry(2.05, 0.2, 2.05), mat(T, c || 'green')); b.position.y = 0.11; g.add(b);
      var pts = []; for (var i = 0; i <= 10; i++) { var v = -1.025 + i * 0.205; pts.push(new T.Vector3(v, 0.215, -1.025), new T.Vector3(v, 0.215, 1.025), new T.Vector3(-1.025, 0.215, v), new T.Vector3(1.025, 0.215, v)); }
      g.add(new T.LineSegments(new T.BufferGeometry().setFromPoints(pts), new T.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 })));
      return g;
    },
    unit: function (T, c) { var g = new T.Group(), b = new T.Mesh(new T.BoxGeometry(0.2, 0.2, 0.2), mat(T, c || 'blue')); b.position.y = 0.11; g.add(b);
      var e = new T.LineSegments(new T.EdgesGeometry(b.geometry), new T.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.45 })); e.position.copy(b.position); g.add(e); return g; },
    box: function (T, c) { var g = new T.Group(), m = new T.Mesh(new T.BoxGeometry(1.0, 0.55, 0.7), mat(T, c)); m.position.y = 0.28; g.add(m);
      var e = new T.LineSegments(new T.EdgesGeometry(m.geometry), new T.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.35 })); e.position.y = 0.28; g.add(e); return g; },
    star: function (T, c) {
      var s = new T.Shape(); for (var i = 0; i < 10; i++) { var r = i % 2 ? 0.2 : 0.45, a = i / 10 * Math.PI * 2 + Math.PI / 2; if (i) s.lineTo(Math.cos(a) * r, Math.sin(a) * r); else s.moveTo(Math.cos(a) * r, Math.sin(a) * r); }
      var g = new T.Group(), m = new T.Mesh(new T.ExtrudeGeometry(s, { depth: 0.16, bevelEnabled: true, bevelSize: 0.03, bevelThickness: 0.03, bevelSegments: 2 }), mat(T, c || 'yellow', { metalness: 0.3 }));
      m.position.y = 0.48; g.add(m); g.userData.spinSelf = 1; return g;
    }
  };
  K.objects = Object.keys(BUILD);

  // Ochiq 3D sahnalar ro'yxati — sahifa almashganda hammasi yopiladi (WebGL kontekstlari tejaladi)
  var LIVE = [];
  K.disposeAll = function () { LIVE.slice().forEach(function (s) { s.dispose(); }); };

  // groups: [{ obj, n, color }] — har bir guruh o'z joyida, ob'ektlar yuqoridan sakrab tushadi
  K.stage = function (box, groups, opts) {
    opts = opts || {};
    var T = root.THREE;
    if (!T) { box.innerHTML = '<div class="kd-no3d">' + groups.map(function (g) { return '<span>' + g.n + ' × ' + g.obj + '</span>'; }).join(' ') + '</div>'; return null; }
    var cv = document.createElement('canvas'); cv.className = 'kd-3d-cv'; box.appendChild(cv);
    var rnd = new T.WebGLRenderer({ canvas: cv, antialias: true, alpha: true });
    rnd.setPixelRatio(Math.min(root.devicePixelRatio || 1, 1.75)); rnd.outputEncoding = T.sRGBEncoding;
    var scene = new T.Scene(), cam = new T.PerspectiveCamera(36, 1, 0.1, 100);
    scene.add(new T.HemisphereLight(0xdfe9ff, 0x2a2f4a, 0.85));
    var dl = new T.DirectionalLight(0xffffff, 0.9); dl.position.set(4, 8, 6); scene.add(dl);
    var rim = new T.DirectionalLight(0x7fb0ff, 0.5); rim.position.set(-6, 3, -4); scene.add(rim);
    var world = new T.Group(); scene.add(world);
    var items = [], total = 0;
    var gw = groups.map(function (g) { return Math.min(g.n, opts.perRow || 4); }), SC = opts.rainbow ? 1.6 : 1.3;
    var gap = 1.08 * SC, clusterGap = (groups.length > 2 ? 1.7 : 1.0) * SC, widths = gw.map(function (c) { return (c - 1) * gap; });
    var fullW = widths.reduce(function (a, b) { return a + b; }, 0) + clusterGap * (groups.length - 1);
    var x0 = -fullW / 2, delay = 0;
    groups.forEach(function (g, gi) {
      var per = gw[gi], rows = Math.ceil(g.n / per);
      for (var i = 0; i < g.n; i++) {
        var col0 = opts.rainbow ? RAINBOW[(gi * 3 + i) % RAINBOW.length] : (g.color || ['blue', 'orange', 'green', 'pink'][gi % 4]);
        var o = BUILD[g.obj](T, col0);
        if (opts.rainbow) { o.userData.hover = true; o.userData.spinSelf = g.obj !== 'star' && Math.random() < 0.6; o.traverse(function (m) { if (m.material && m.material.emissive && m.material.color) { m.material.emissive.copy(m.material.color).multiplyScalar(0.12); } }); }
        var col = i % per, row = Math.floor(i / per);
        o.userData.home = new T.Vector3(x0 + col * gap, 0, (row - (rows - 1) / 2) * 1.1 * SC); o.scale.setScalar(SC); o.userData.sc = SC;
        o.position.set(o.userData.home.x, 6 + Math.random() * 2, o.userData.home.z);
        o.rotation.y = (Math.random() - 0.5) * 0.6;
        o.userData.vy = 0; o.userData.delay = delay; o.userData.group = gi; delay += 0.09;
        world.add(o); items.push(o); total++;
      }
      x0 += widths[gi] + clusterGap;
    });
    var span = Math.max(fullW, 2), depth = Math.max.apply(0, groups.map(function (g, gi) { return Math.ceil(g.n / gw[gi]); }));
    // yumaloq "sahna" (podium) — ob'ektlar soniga qarab o'lchami
    var PR = Math.max(1.9, span / 2 + 0.9, depth * 0.62 * SC + 0.8);
    var podium = new T.Mesh(new T.CylinderGeometry(PR, PR + 0.15, 0.25, 64), new T.MeshBasicMaterial({ color: 0x1c2d63 }));
    podium.position.y = -0.13; scene.add(podium);
    var ring = new T.Mesh(new T.TorusGeometry(PR + 0.05, 0.035, 8, 96), new T.MeshBasicMaterial({ color: 0x5b9dff })); ring.rotation.x = Math.PI / 2; scene.add(ring);
    // uchqunlar: sahna atrofida suzuvchi rangli zarrachalar
    var sparks = [];
    if (opts.rainbow) for (var si = 0; si < 18; si++) { var sp = new T.Mesh(new T.SphereGeometry(0.06 + Math.random() * 0.05, 8, 8), new T.MeshBasicMaterial({ color: RAINBOW[si % RAINBOW.length], transparent: true, opacity: 0.85 })); sp.userData = { a: Math.random() * Math.PI * 2, r: PR * (0.6 + Math.random() * 0.7), h: 0.4 + Math.random() * 2.2, v: 0.3 + Math.random() * 0.6 }; scene.add(sp); sparks.push(sp); }
    function size() {
      var w = box.clientWidth, hh = box.clientHeight; if (!w || !hh) return;
      rnd.setSize(w, hh, false); cam.aspect = w / hh;
      var t = Math.tan(cam.fov * Math.PI / 360), need = PR * 2 + 0.6;
      var dist = Math.max(need / (2 * t * cam.aspect), (PR + 1.4) / t * 0.75, 5);
      var el = 0.6; // ~34° yuqoridan
      cam.position.set(0, Math.sin(el) * dist + 0.4, Math.cos(el) * dist); cam.lookAt(0, 0.45, 0); cam.updateProjectionMatrix();
    }
    var ro = root.ResizeObserver ? new ResizeObserver(size) : null; if (ro) ro.observe(box); size();
    // sudrab aylantirish va bosib sanash
    var rotY = 0, rotV = 0, drag = null, picked = 0, ray = new T.Raycaster(), mv = new T.Vector2();
    cv.addEventListener('pointerdown', function (e) { drag = { x: e.clientX, r: rotY, moved: false }; cv.setPointerCapture(e.pointerId); });
    cv.addEventListener('pointermove', function (e) { if (!drag) return; var dx = e.clientX - drag.x; if (Math.abs(dx) > 4) drag.moved = true; rotY = drag.r + dx * 0.008; });
    cv.addEventListener('pointerup', function (e) {
      var d = drag; drag = null; if (!d || d.moved || opts.pick === false) return;
      var r = cv.getBoundingClientRect(); mv.set((e.clientX - r.left) / r.width * 2 - 1, -(e.clientY - r.top) / r.height * 2 + 1);
      ray.setFromCamera(mv, cam);
      var hit = ray.intersectObjects(items, true)[0]; if (!hit) return;
      var o = hit.object; while (o.parent && items.indexOf(o) < 0) o = o.parent;
      o.userData.on = !o.userData.on; picked += o.userData.on ? 1 : -1; o.userData.pulse = 1;
      o.traverse(function (m) { if (m.material && m.material.emissive) m.material.emissive.setHex(o.userData.on ? 0x2a4a99 : 0x000000); });
      if (opts.onPick) opts.onPick(picked);
    });
    var visible = true, io = root.IntersectionObserver ? new IntersectionObserver(function (es) { visible = es[0].isIntersecting; if (visible) loop(); }) : null;
    if (io) io.observe(box);
    var t0 = performance.now(), last = t0, raf = 0, alive = true, wasOn = false;
    function loop() {
      if (!alive) return;
      cancelAnimationFrame(raf);
      // karta hali sahifaga qo'shilmagan bo'lsa kutamiz (IntersectionObserver keyin ishga tushiradi); sahifadan olib tashlangan bo'lsa — tozalaymiz
      if (!cv.isConnected) { if (wasOn) dispose(); return; }
      if (!wasOn) { wasOn = true; size(); }
      if (!visible) return;
      raf = requestAnimationFrame(loop);
      var now = performance.now(), dt = Math.min(0.05, (now - last) / 1000), t = (now - t0) / 1000; last = now;
      if (!drag) rotY += Math.sin(t * 0.35) * 0.0012;
      world.rotation.y += (rotY - world.rotation.y) * 0.12;
      ring.material.color.setHSL((t * 0.08) % 1, 0.8, 0.62);
      sparks.forEach(function (sp, k) { var u = sp.userData, a = u.a + t * u.v; sp.position.set(Math.cos(a) * u.r, u.h + Math.sin(t * 1.5 + k) * 0.25, Math.sin(a) * u.r); });
      items.forEach(function (o) {
        var u = o.userData;
        if (t > u.delay) {
          if (!u.landed) { u.vy -= 22 * dt; o.position.y += u.vy * dt; if (o.position.y <= 0) { o.position.y = 0; u.vy = -u.vy * 0.42; if (Math.abs(u.vy) < 0.8) { u.landed = true; u.vy = 0; } } }
          else o.position.y = (u.hover ? 0.25 + Math.sin(t * 2 + u.delay * 9) * 0.08 : 0) + (u.on ? 0.18 : 0);
        }
        if (u.pulse > 0) { u.pulse = Math.max(0, u.pulse - dt * 3); var s = (1 + Math.sin(u.pulse * Math.PI) * 0.25) * (u.sc || 1); o.scale.setScalar(s); }
        if (u.spinSelf) o.rotation.y = Math.sin(t * 0.9 + u.delay * 7) * 0.55; // yulduz yonboshlab qolmasin
        o.children.forEach(function (c) { if (c.userData.spin) c.rotation.y += dt * 25; });
      });
      rnd.render(scene, cam);
    }
    function dispose() {
      if (!alive) return;
      var k = LIVE.indexOf(api); if (k >= 0) LIVE.splice(k, 1);
      alive = false; cancelAnimationFrame(raf); if (ro) ro.disconnect(); if (io) io.disconnect();
      scene.traverse(function (m) { if (m.geometry) m.geometry.dispose(); if (m.material) [].concat(m.material).forEach(function (x) { x.dispose(); }); });
      rnd.dispose(); if (rnd.forceContextLoss) rnd.forceContextLoss();
    }
    loop();
    var api = { dispose: dispose, total: total, picked: function () { return picked; } };
    LIVE.push(api);
    return api;
  };

  // ---------- Masala sxemalari (SVG kesmalar) ----------
  // kind: whole | part | more | less | diff | three
  function bar(x, y, w, cls, txt, delay) {
    return '<g class="kd-seg ' + cls + '" style="--d:' + (delay || 0) + 's"><rect x="' + x + '" y="' + y + '" width="' + Math.max(w, 2) + '" height="26" rx="7"/>' +
      (txt !== undefined ? '<text x="' + (x + w / 2) + '" y="' + (y + 18) + '">' + esc(tx(txt)) + '</text>' : '') + '</g>';
  }
  function brace(x1, x2, y, up, txt, cls) {
    var m = (x1 + x2) / 2, d = up ? -10 : 10;
    return '<g class="kd-brace ' + (cls || '') + '"><path d="M' + x1 + ' ' + y + ' Q' + x1 + ' ' + (y + d) + ' ' + (x1 + 10) + ' ' + (y + d) + ' L' + (m - 8) + ' ' + (y + d) + ' Q' + m + ' ' + (y + d) + ' ' + m + ' ' + (y + d * 1.8) + ' Q' + m + ' ' + (y + d) + ' ' + (m + 8) + ' ' + (y + d) + ' L' + (x2 - 10) + ' ' + (y + d) + ' Q' + x2 + ' ' + (y + d) + ' ' + x2 + ' ' + y + '"/>' +
      '<text x="' + m + '" y="' + (y + d * 2.9 + (up ? 0 : 6)) + '">' + esc(tx(txt)) + '</text></g>';
  }
  K.scheme = function (s) {
    var W = 520, L = 70, unitW = function (v, max) { return (W - L - 20) * v / max; }, out = '', H = 120;
    var lab = function (y, v) { return '<text class="kd-lab" x="' + (L - 10) + '" y="' + (y + 18) + '">' + esc(tx(v)) + '</text>'; };
    if (s.kind === 'whole' || s.kind === 'part' || s.kind === 'three') {
      // bo'lak kengligi proporsional, lekin juda kichik qism ham o'qiladigan bo'lsin (kamida 44px)
      var parts = s.parts, full = W - L - 20, raw = parts.map(function (p) { return Math.max(p, 0.0001); }), sum = raw.reduce(function (a, b) { return a + b; }, 0);
      var ws = raw.map(function (p) { return Math.max(44, full * p / sum); }), k = full / ws.reduce(function (a, b) { return a + b; }, 0);
      ws = ws.map(function (w) { return w * k; });
      var x = L, y = 46;
      parts.forEach(function (p, i) { out += bar(x, y, ws[i] - 3, 'c' + i, s.show[i], i * 0.15); x += ws[i]; });
      out += brace(L, x - 3, y - 4, true, s.top, s.kind === 'whole' ? 'ask' : '');
      if (s.labels) { x = L; parts.forEach(function (p, i) { out += '<text class="kd-cap" x="' + (x + ws[i] / 2) + '" y="' + (y + 46) + '">' + esc(tx(s.labels[i])) + '</text>'; x += ws[i]; }); }
    } else {
      // ikki qator: I — a, II — b (b = a ± d yoki noma'lum), farq qavs bilan
      var a = s.a, b = s.b, max = Math.max(a, b), y1 = 30, y2 = 74, wa = unitW(a, max), wb = unitW(b, max);
      out += lab(y1, s.labels[0]) + lab(y2, s.labels[1]);
      out += bar(L, y1, wa, 'c0', s.show[0], 0);
      if (s.kind === 'more') { out += bar(L, y2, wa - 3, 'c1', '', 0.15) + bar(L + wa, y2, wb - wa, 'c2 extra', s.show[2], 0.3); out += brace(L + wa, L + wb, y2 + 30, false, s.show[1]); }
      else if (s.kind === 'less') { out += bar(L, y2, wb, 'c1', '', 0.15) + '<rect class="kd-ghost" x="' + (L + wb) + '" y="' + y2 + '" width="' + (wa - wb) + '" height="26" rx="7"/>' + '<text class="kd-ghost-t" x="' + (L + wb + (wa - wb) / 2) + '" y="' + (y2 + 18) + '">' + esc(tx(s.show[2])) + '</text>'; out += brace(L, L + wb, y2 + 30, false, s.show[1]); }
      else { var lo = Math.min(wa, wb); out += bar(L, y2, wb, 'c1', s.show[1], 0.15); out += '<line class="kd-dash" x1="' + (L + lo) + '" y1="' + (y1 - 6) + '" x2="' + (L + lo) + '" y2="' + (y2 + 32) + '"/>'; out += brace(L + lo, L + Math.max(wa, wb), (wa > wb ? y1 : y2) - 4, true, s.show[2], 'ask'); }
      H = 140;
    }
    return '<svg class="kd-scheme" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="scheme">' + out + '</svg>';
  };

  // ---------- Topshiriq kartasi ----------
  function card(idx, icon, title, body) {
    title = tx(title);
    return h('<section class="kd-act"><header><span class="kd-act-n">' + idx + '</span><span class="kd-act-ic">' + icon + '</span><h3>' + title + '</h3></header>' +
      '<div class="kd-act-body">' + body + '</div><footer><button class="btn kd-check">' + t('check') + '</button><button class="btn ghost kd-new">' + t('fresh') + '</button><span class="kd-fb" role="status"></span></footer></section>');
  }
  function input(w, attrs) { return '<input class="kd-in" inputmode="numeric" autocomplete="off" style="width:' + (w || 3.2) + 'em" ' + (attrs || '') + '>'; }
  function mark(inp, ok) { inp.classList.remove('ok', 'bad'); void inp.offsetWidth; inp.classList.add(ok ? 'ok' : 'bad'); }
  function feedback(node, ok, msg) {
    var fb = node.querySelector('.kd-fb');
    fb.className = 'kd-fb ' + (ok ? 'ok' : 'bad');
    fb.innerHTML = ok ? '✓ ' + (msg || pick(t('praise'))) : '✗ ' + (msg || t('retry'));
    if (ok) K.confetti(node);
  }
  function pics(emoji, n, cls) { var s = ''; for (var i = 0; i < n; i++) s += '<span class="kd-pic ' + (cls || '') + '" style="--i:' + i + '">' + emoji + '</span>'; return s; }
  K.pics = pics;

  // Ifoda to'ldirish: [a, '+', b, '=', c] — sonlar katak, amal tugma (?, +, −)
  function exprHTML(len) {
    var s = '<div class="kd-expr">';
    for (var i = 0; i < len; i++) {
      if (i % 2) s += i === len - 2 ? '<span class="kd-eq">=</span>' : '<button class="kd-op" type="button" data-op="?">?</button>';
      else s += input(3);
    }
    return s + '</div>';
  }
  exprHTML.check = function (node, expr) { // expr = [n, op, n, (op, n), '=', ans]
    var ins = node.querySelectorAll('.kd-expr .kd-in'), ops = node.querySelectorAll('.kd-expr .kd-op'), vals = [].map.call(ins, function (i) { return num(i.value); });
    var nums = expr.filter(function (x, i) { return i % 2 === 0; }), wantOps = expr.filter(function (x, i) { return i % 2 === 1 && x !== '='; });
    var ok = true, userOps = [].map.call(ops, function (b) { return b.getAttribute('data-op'); });
    // qo'shishda o'rin almashtirish mumkin
    var commut = (wantOps.every(function (o) { return o === '+'; }) || wantOps.every(function (o) { return o === '·'; })) && nums.length === 3 &&
      vals[0] === nums[1] && vals[1] === nums[0] && vals[2] === nums[2];
    [].forEach.call(ins, function (inp, i) { var good = commut || vals[i] === nums[i]; mark(inp, good); ok = ok && good; });
    [].forEach.call(ops, function (b, i) { var good = userOps[i] === wantOps[i]; b.classList.toggle('bad', !good); b.classList.toggle('ok', good); ok = ok && good; });
    return ok;
  };
  function bindOps(node) {
    node.querySelectorAll('.kd-op').forEach(function (b) {
      b.onclick = function () { var o = { '?': '+', '+': '−', '−': '·', '·': ':', ':': '+' }[b.getAttribute('data-op')]; b.setAttribute('data-op', o); b.textContent = o; b.classList.remove('ok', 'bad'); };
    });
  }

  // ---------- Topshiriq turlari ----------
  var W = {};

  // Matnli masala: hikoya + rasm + qisqa shart + sxema + ifoda + javob
  W.problem = function (spec, idx) {
    var node = card(idx, spec.icon || '📝', spec.title || t('problem'), '<div class="kd-p"></div>');
    var box = node.querySelector('.kd-p'), d;
    function build() {
      d = spec.make(R);
      var ex = d.expr, opn = (ex.length - 1) / 2;
      box.innerHTML =
        '<p class="kd-story">' + tx(d.story) + '</p>' +
        (d.pics ? '<div class="kd-pics">' + d.pics.map(function (p) { return '<div class="kd-pic-grp">' + pics(p[0], Math.min(p[1], 20)) + (p[1] > 20 ? '<b class="kd-more">… ' + p[1] + '</b>' : '') + (p[2] ? '<small>' + tx(p[2]) + '</small>' : '') + '</div>'; }).join('<span class="kd-pic-plus">' + (d.picsOp || '') + '</span>') + '</div>' : '') +
        '<div class="kd-row2">' +
        (d.cond ? '<div class="kd-cond"><b>' + t('cond') + '</b>' + d.cond.map(function (c) { return '<div><span>' + tx(c[0]) + '</span> — <i>' + tx(c[1]) + '</i></div>'; }).join('') + '</div>' : '') +
        (d.scheme ? '<div class="kd-sch">' + K.scheme(d.scheme) + '</div>' : '') + '</div>' +
        '<div class="kd-solve"><span class="kd-lbl">' + t('solve') + '</span>' + exprHTML(ex.length) + '</div>' +
        '<div class="kd-solve"><span class="kd-lbl">' + t('answer') + '</span>' + input(3.4, 'data-ans') + ' <span class="kd-unit">' + tx(d.unit || '') + '</span></div>';
      bindOps(box);
      void opn;
    }
    build();
    node.querySelector('.kd-new').onclick = function () { build(); node.querySelector('.kd-fb').textContent = ''; };
    node.querySelector('.kd-check').onclick = function () {
      var ok = exprHTML.check(box, d.expr), a = box.querySelector('[data-ans]'), okA = num(a.value) === d.ans; mark(a, okA);
      ok = ok && okA;
      feedback(node, ok, ok ? null : (okA ? t('exprOk') : t('schemeHint')));
      if (ok && spec.onDone) spec.onDone();
    };
    return node;
  };

  // 3D sanash: guruhlarni sanash va ifoda tuzish
  W.count3d = function (spec, idx) {
    var node = card(idx, '🧊', spec.title || t('count3d'), '<div class="kd-3d"></div><p class="kd-hint">' + t('pickHint') + '</p><div class="kd-q"></div>');
    var st = null, d;
    function build() {
      if (st) st.dispose();
      var stg = node.querySelector('.kd-3d'); stg.innerHTML = '';
      d = spec.make(R);
      st = K.stage(stg, d.groups, { perRow: d.perRow, onPick: function (n) { node.querySelector('.kd-picked').textContent = n; } });
      node.querySelector('.kd-q').innerHTML = '<p class="kd-story">' + tx(d.story) + '</p>' + (d.expr ? '<div class="kd-solve">' + exprHTML(d.expr.length) + '</div>' : '') +
        '<div class="kd-solve"><span class="kd-lbl">' + t('answer') + '</span>' + input(3.4, 'data-ans') + ' <span class="kd-unit">' + tx(d.unit || '') + '</span> <span class="kd-tag">' + t('marked') + ' <b class="kd-picked">0</b></span></div>';
      bindOps(node);
    }
    build();
    node.querySelector('.kd-new').onclick = function () { build(); node.querySelector('.kd-fb').textContent = ''; };
    node.querySelector('.kd-check').onclick = function () {
      var ok = d.expr ? exprHTML.check(node, d.expr) : true, a = node.querySelector('[data-ans]'), okA = num(a.value) === d.ans; mark(a, okA);
      feedback(node, ok && okA);
    };
    return node;
  };

  // Sonli zanjir: start → (+a) → □ → (−b) → □ ...
  W.chain = function (spec, idx) {
    var node = card(idx, '🔗', spec.title || t('chain'), '<div class="kd-chain"></div>');
    var box = node.querySelector('.kd-chain'), vals;
    function build() {
      var d = spec.make(R); vals = [d.start];
      var s = '<span class="kd-node start">' + d.start + '</span>';
      d.ops.forEach(function (o) { var v = o[0] === '+' ? vals[vals.length - 1] + o[1] : vals[vals.length - 1] - o[1]; vals.push(v); s += '<span class="kd-arrow"><i>' + (o[0] === '+' ? '+' : '−') + o[1] + '</i></span>' + input(3); });
      box.innerHTML = s;
    }
    build();
    node.querySelector('.kd-new').onclick = function () { build(); node.querySelector('.kd-fb').textContent = ''; };
    node.querySelector('.kd-check').onclick = function () {
      var ok = true; box.querySelectorAll('.kd-in').forEach(function (inp, i) { var g = num(inp.value) === vals[i + 1]; mark(inp, g); ok = ok && g; });
      feedback(node, ok);
    };
    return node;
  };

  // Sehrli kvadrat (qator va ustunlar yig'indisi 15)
  var MAGIC = [8, 1, 6, 3, 5, 7, 4, 9, 2];
  function magicVariant() {
    var m = MAGIC.slice(), rot = function (a) { return [a[6], a[3], a[0], a[7], a[4], a[1], a[8], a[5], a[2]]; };
    for (var i = R(0, 3); i > 0; i--) m = rot(m);
    if (Math.random() < 0.5) m = [m[2], m[1], m[0], m[5], m[4], m[3], m[8], m[7], m[6]];
    return m;
  }
  W.magic = function (spec, idx) {
    var node = card(idx, '✨', spec.title || t('magic'), '<p class="kd-story">' + t('magicTask') + '</p><div class="kd-magic"></div>');
    var box = node.querySelector('.kd-magic');
    function build() {
      var m = magicVariant(), show = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8]).slice(0, spec.given || 4);
      box.innerHTML = m.map(function (v, i) { return show.indexOf(i) >= 0 ? '<span class="kd-cell fixed">' + v + '</span>' : '<span class="kd-cell">' + input(2) + '</span>'; }).join('');
    }
    build();
    node.querySelector('.kd-new').onclick = function () { build(); node.querySelector('.kd-fb').textContent = ''; };
    node.querySelector('.kd-check').onclick = function () {
      var v = [].map.call(box.children, function (c) { var i = c.querySelector('input'); return i ? num(i.value) : num(c.textContent); });
      var lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8]];
      var uniq = v.slice().sort().join() === '1,2,3,4,5,6,7,8,9';
      var ok = uniq && lines.every(function (l) { return v[l[0]] + v[l[1]] + v[l[2]] === 15; });
      box.querySelectorAll('input').forEach(function (inp) { mark(inp, ok); });
      feedback(node, ok, ok ? null : t('magicHint'));
    };
    return node;
  };

  // Jadval: qo'shiluvchi/qo'shiluvchi/yig'indi yoki kamayuvchi/ayriluvchi/ayirma
  W.table = function (spec, idx) {
    var node = card(idx, '📊', spec.title || t('table'), '<div class="kd-table-wrap"></div>');
    var box = node.querySelector('.kd-table-wrap'), cols;
    function build() {
      var names = spec.kind === 'diff' ? [t('min'), t('sub'), t('diff')] : [t('add1'), t('add2'), t('sum')];
      cols = [];
      for (var c = 0; c < (spec.cols || 5); c++) {
        var a = R(spec.min || 5, spec.max || 60), b = R(1, Math.max(1, (spec.max || 60) - a));
        var col = spec.kind === 'diff' ? [a + b, b, a] : [a, b, a + b];
        cols.push({ v: col, hide: R(0, 2) });
      }
      box.innerHTML = '<table class="kd-table">' + names.map(function (n, r) {
        return '<tr><th>' + n + '</th>' + cols.map(function (c) { return '<td>' + (c.hide === r ? input(2.8) : c.v[r] + (spec.unit ? ' ' + tx(spec.unit) : '')) + '</td>'; }).join('') + '</tr>';
      }).join('') + '</table>';
    }
    build();
    node.querySelector('.kd-new').onclick = function () { build(); node.querySelector('.kd-fb').textContent = ''; };
    node.querySelector('.kd-check').onclick = function () {
      var ok = true, ins = box.querySelectorAll('input'), k = 0;
      cols.forEach(function (c) { var inp = ins[k++], g = num(inp.value) === c.v[c.hide]; mark(inp, g); ok = ok && g; });
      feedback(node, ok);
    };
    return node;
  };

  // Chizg'ich: qalam/kesma uzunligini o'lchash yoki dm-cm ga ajratish
  W.ruler = function (spec, idx) {
    var node = card(idx, '📏', spec.title || t('ruler'), '<div class="kd-ruler-box"></div><div class="kd-q"></div>');
    var box = node.querySelector('.kd-ruler-box'), q = node.querySelector('.kd-q'), d;
    function rulerSVG(len, start, maxCm, dm) {
      var px = 30, W = maxCm * px + 40, s = '<svg class="kd-ruler" viewBox="0 0 ' + W + ' 150">';
      // qalam yoki kesma
      var x1 = 20 + start * px, x2 = 20 + (start + len) * px;
      if (spec.mode === 'segment') s += '<line class="kd-segline" x1="' + x1 + '" y1="40" x2="' + x2 + '" y2="40"/><circle class="kd-segend" cx="' + x1 + '" cy="40" r="5"/><circle class="kd-segend" cx="' + x2 + '" cy="40" r="5"/><text class="kd-cap" x="' + x1 + '" y="24">A</text><text class="kd-cap" x="' + x2 + '" y="24">B</text>';
      else s += '<g class="kd-pencil" style="--w:' + (x2 - x1) + 'px"><rect x="' + x1 + '" y="30" width="' + (x2 - x1 - 22) + '" height="20" rx="3"/><polygon points="' + (x2 - 22) + ',30 ' + x2 + ',40 ' + (x2 - 22) + ',50" class="tip"/><rect x="' + x1 + '" y="30" width="10" height="20" rx="3" class="eraser"/></g>';
      s += '<rect class="kd-rulerbar" x="10" y="64" width="' + (maxCm * px + 20) + '" height="64" rx="8"/>';
      if (dm) for (var b = 0; b < Math.floor(maxCm / 10); b++) s += '<rect class="kd-dmband" x="' + (20 + b * 10 * px) + '" y="64" width="' + (10 * px) + '" height="10"/>';
      for (var i = 0; i <= maxCm * 10; i++) {
        var x = 20 + i * px / 10, big = i % 10 === 0, mid = i % 5 === 0;
        s += '<line class="kd-tick" x1="' + x + '" y1="64" x2="' + x + '" y2="' + (64 + (big ? 22 : mid ? 15 : 9)) + '"/>';
        if (big) s += '<text class="kd-num" x="' + x + '" y="108">' + i / 10 + '</text>';
      }
      return s + '<text class="kd-unit-t" x="' + (maxCm * px + 4) + '" y="122">' + t('cm') + '</text></svg>';
    }
    function build() {
      d = spec.make(R);
      box.innerHTML = rulerSVG(d.len, d.start || 0, d.max || 15, spec.mode === 'dmcm');
      if (spec.mode === 'dmcm') q.innerHTML = '<p class="kd-story">' + tx(d.story) + '</p><div class="kd-solve">' + input(2.6, 'data-a') + ' ' + t('dm') + ' ' + input(2.6, 'data-b') + ' ' + t('cm') + '</div>';
      else q.innerHTML = '<p class="kd-story">' + tx(d.story) + '</p><div class="kd-solve"><span class="kd-lbl">' + t('length') + '</span>' + input(3, 'data-a') + ' ' + t('cm') + '</div>';
    }
    build();
    node.querySelector('.kd-new').onclick = function () { build(); node.querySelector('.kd-fb').textContent = ''; };
    node.querySelector('.kd-check').onclick = function () {
      var a = q.querySelector('[data-a]'), ok;
      if (spec.mode === 'dmcm') { var b = q.querySelector('[data-b]'), g1 = num(a.value) === Math.floor(d.len / 10), g2 = num(b.value) === d.len % 10; mark(a, g1); mark(b, g2); ok = g1 && g2; }
      else { ok = num(a.value) === d.len; mark(a, ok); }
      feedback(node, ok, ok ? null : t('rulerHint'));
    };
    return node;
  };

  // Pallali tarozi: toshlar qo'yib muvozanatlang
  W.scale = function (spec, idx) {
    var node = card(idx, '⚖️', spec.title || t('scale'), '<div class="kd-scale"></div><div class="kd-weights"></div><div class="kd-q"></div>');
    var box = node.querySelector('.kd-scale'), wb = node.querySelector('.kd-weights'), q = node.querySelector('.kd-q'), d, put = [];
    function draw() {
      var sum = put.reduce(function (a, b) { return a + b; }, 0), diff = d.mass - sum, ang = Math.max(-14, Math.min(14, diff * 3));
      box.innerHTML = '<svg viewBox="0 0 360 210" class="kd-scale-svg"><rect x="170" y="60" width="20" height="120" rx="6" class="kd-post"/><rect x="120" y="180" width="120" height="16" rx="8" class="kd-post"/>' +
        '<g style="transform:rotate(' + ang + 'deg);transform-origin:180px 64px;transition:transform .6s cubic-bezier(.3,1.6,.5,1)"><rect x="40" y="58" width="280" height="12" rx="6" class="kd-beam"/>' +
        '<g style="transform:rotate(' + (-ang) + 'deg);transform-origin:60px 64px;transition:transform .6s cubic-bezier(.3,1.6,.5,1)"><line x1="60" y1="64" x2="30" y2="130" class="kd-rope"/><line x1="60" y1="64" x2="90" y2="130" class="kd-rope"/><path d="M20 130 Q60 150 100 130 Z" class="kd-pan"/><text x="60" y="122" class="kd-scale-obj">' + d.obj + '</text></g>' +
        '<g style="transform:rotate(' + (-ang) + 'deg);transform-origin:300px 64px;transition:transform .6s cubic-bezier(.3,1.6,.5,1)"><line x1="300" y1="64" x2="270" y2="130" class="kd-rope"/><line x1="300" y1="64" x2="330" y2="130" class="kd-rope"/><path d="M260 130 Q300 150 340 130 Z" class="kd-pan"/>' +
        put.map(function (w, i) { return '<g class="kd-wt"><rect x="' + (266 + (i % 4) * 18) + '" y="' + (112 - Math.floor(i / 4) * 16) + '" width="16" height="16" rx="3"/><text x="' + (274 + (i % 4) * 18) + '" y="' + (124 - Math.floor(i / 4) * 16) + '">' + w + '</text></g>'; }).join('') + '</g></g>' +
        '<polygon points="180,40 172,54 188,54" class="kd-needle" style="transform:rotate(' + ang + 'deg);transform-origin:180px 64px;transition:transform .6s"/></svg>' +
        '<div class="kd-balance ' + (diff === 0 ? 'ok' : '') + '">' + (diff === 0 ? t('balanced') : diff > 0 ? t('leftHeavy') : t('rightHeavy')) + ' · ' + t('onRight') + ' <b>' + sum + ' ' + t('kg') + '</b></div>';
    }
    function build() {
      d = spec.make(R); put = [];
      wb.innerHTML = [1, 2, 5].map(function (w) { return '<button class="kd-wbtn" data-w="' + w + '">+ ' + w + ' ' + t('kg') + '</button>'; }).join('') + '<button class="kd-wbtn ghost" data-w="0">' + t('remove') + '</button>';
      wb.querySelectorAll('[data-w]').forEach(function (b) { b.onclick = function () { var w = +b.getAttribute('data-w'); if (w) { if (put.length < 12) put.push(w); } else put.pop(); draw(); }; });
      q.innerHTML = '<p class="kd-story">' + tx(d.story) + '</p><div class="kd-solve"><span class="kd-lbl">' + t('mass') + '</span>' + input(3, 'data-a') + ' ' + t('kg') + '</div>';
      draw();
    }
    build();
    node.querySelector('.kd-new').onclick = function () { build(); node.querySelector('.kd-fb').textContent = ''; };
    node.querySelector('.kd-check').onclick = function () { var a = q.querySelector('[data-a]'), ok = num(a.value) === d.mass; mark(a, ok); feedback(node, ok, ok ? null : t('scaleHint')); };
    return node;
  };

  // Idishlar: 1 litrli banka bilan chelakni to'ldirish
  W.jugs = function (spec, idx) {
    var node = card(idx, '🪣', spec.title || t('jugs'), '<div class="kd-jugs"></div><div class="kd-q"></div>');
    var box = node.querySelector('.kd-jugs'), q = node.querySelector('.kd-q'), d, poured = 0;
    function draw(anim) {
      var lvl = poured / d.cap;
      box.innerHTML = '<div class="kd-jug-row"><button class="kd-jar" title="' + t('pourTitle') + '">🫙<small>1 ' + t('l') + '</small></button><span class="kd-pour ' + (anim ? 'go' : '') + '">💧</span>' +
        '<div class="kd-tank"><div class="kd-water" style="height:' + (lvl * 100) + '%"></div>' + Array.apply(null, Array(d.cap)).map(function (x, i) { return '<i style="bottom:' + ((i + 1) / d.cap * 100) + '%"></i>'; }).join('') + '<b>' + (poured === d.cap ? t('full') : '?') + '</b></div>' +
        '<div class="kd-jug-count">' + t('poured') + ' <b>' + poured + '</b> ' + t('jars') + '</div></div>';
      box.querySelector('.kd-jar').onclick = function () { if (poured < d.cap) { poured++; draw(true); } };
    }
    function build() {
      d = spec.make(R); poured = 0;
      q.innerHTML = '<p class="kd-story">' + tx(d.story) + '</p><div class="kd-solve"><span class="kd-lbl">' + t('volume') + '</span>' + input(3, 'data-a') + ' ' + t('l') + '</div>';
      draw();
    }
    build();
    node.querySelector('.kd-new').onclick = function () { build(); node.querySelector('.kd-fb').textContent = ''; };
    node.querySelector('.kd-check').onclick = function () { var a = q.querySelector('[data-a]'), ok = num(a.value) === d.cap; mark(a, ok); feedback(node, ok, ok ? null : t('jugsHint')); };
    return node;
  };

  // Tartiblash: elementlarni to'g'ri ketma-ketlikda bosing
  W.order = function (spec, idx) {
    var node = card(idx, '🔢', spec.title || t('order'), '<p class="kd-story"></p><div class="kd-slots"></div><div class="kd-chips"></div>');
    var d, got = [];
    function build() {
      d = spec.make(R); got = []; d.items = d.items.map(tx);
      node.querySelector('.kd-story').innerHTML = tx(d.story);
      var chips = node.querySelector('.kd-chips');
      chips.innerHTML = shuffle(d.items).map(function (t) { return '<button class="kd-chip" type="button">' + t + '</button>'; }).join('');
      draw();
      chips.querySelectorAll('.kd-chip').forEach(function (c) { c.onclick = function () { if (c.disabled) return; c.disabled = true; got.push(c.innerHTML); draw(); }; });
    }
    function draw() {
      node.querySelector('.kd-slots').innerHTML = d.items.map(function (x, i) { return '<span class="kd-slot ' + (got[i] !== undefined ? 'full' : '') + '">' + (got[i] !== undefined ? got[i] : i + 1) + '</span>'; }).join(d.sep || '');
    }
    build();
    node.querySelector('.kd-new').onclick = function () { build(); node.querySelector('.kd-fb').textContent = ''; };
    node.querySelector('.kd-check').onclick = function () {
      var ok = got.length === d.items.length && got.every(function (g, i) { return g === d.items[i]; });
      if (!ok) { got = []; node.querySelectorAll('.kd-chip').forEach(function (c) { c.disabled = false; }); draw(); }
      feedback(node, ok, ok ? null : t('orderBad'));
    };
    return node;
  };

  // Tanlash: to'g'ri ifoda/javobni tanlang
  W.choose = function (spec, idx) {
    var node = card(idx, spec.icon || '🎯', spec.title || t('choose'), '<div class="kd-p"></div>');
    var box = node.querySelector('.kd-p'), d, sel = -1, st = null;
    function build() {
      d = spec.make(R); sel = -1;
      var opts = d.options.map(function (o, i) { return { o: o, i: i }; }); opts = shuffle(opts);
      if (st) { st.dispose(); st = null; }
      box.innerHTML = '<p class="kd-story">' + tx(d.story) + '</p>' + (d.scene ? '<div class="kd-3d small"></div>' : '') + (d.pics ? tx(d.pics) : '') + '<div class="kd-opts">' + opts.map(function (x) { return '<button class="kd-opt" data-i="' + x.i + '">' + tx(x.o) + '</button>'; }).join('') + '</div>';
      box.querySelectorAll('.kd-opt').forEach(function (b) { b.onclick = function () { box.querySelectorAll('.kd-opt').forEach(function (x) { x.classList.remove('sel', 'ok', 'bad'); }); b.classList.add('sel'); sel = +b.getAttribute('data-i'); }; });
      if (d.scene) st = K.stage(box.querySelector('.kd-3d'), d.scene, { pick: false, perRow: d.perRow });
    }
    build();
    node.querySelector('.kd-new').onclick = function () { build(); node.querySelector('.kd-fb').textContent = ''; };
    node.querySelector('.kd-check').onclick = function () {
      var b = box.querySelector('.kd-opt.sel'); if (!b) return feedback(node, false, t('chooseFirst'));
      var ok = sel === d.a; b.classList.add(ok ? 'ok' : 'bad'); feedback(node, ok, ok ? null : t('chooseBad'));
    };
    return node;
  };

  // Hisoblash kartochkalari: bir nechta misol
  W.drill = function (spec, idx) {
    var node = card(idx, '⚡', spec.title || t('drill'), '<div class="kd-drill"></div>');
    var box = node.querySelector('.kd-drill'), ex;
    function build() {
      ex = []; for (var i = 0; i < (spec.n || 6); i++) ex.push(spec.make(R));
      box.innerHTML = ex.map(function (e) { return '<label class="kd-ex"><span>' + tx(e.q) + ' =</span>' + input(3) + (e.unit ? ' <small>' + tx(e.unit) + '</small>' : '') + '</label>'; }).join('');
    }
    build();
    node.querySelector('.kd-new').onclick = function () { build(); node.querySelector('.kd-fb').textContent = ''; };
    node.querySelector('.kd-check').onclick = function () {
      var ok = true; box.querySelectorAll('.kd-in').forEach(function (inp, i) { var g = num(inp.value) === ex[i].a; mark(inp, g); ok = ok && g; });
      feedback(node, ok);
    };
    return node;
  };

  // Ko'pburchak perimetri yoki siniq chiziq uzunligi: SVG shakl, tomonlar uzunligi yozilgan
  W.polygon = function (spec, idx) {
    var node = card(idx, '⬠', spec.title || t('perimeter'), '<div class="kd-poly"></div><div class="kd-q"></div>');
    var box = node.querySelector('.kd-poly'), q = node.querySelector('.kd-q'), d;
    function build() {
      d = spec.make(R);
      var n = d.sides.length, pts = [], W0 = 360, H0 = 220, cx = W0 / 2, cy = H0 / 2;
      if (d.kind === 'rect') { var w = 60 + d.sides[0] * 16, hh = 40 + d.sides[1] * 12; pts = [[cx - w / 2, cy - hh / 2], [cx + w / 2, cy - hh / 2], [cx + w / 2, cy + hh / 2], [cx - w / 2, cy + hh / 2]]; }
      else if (d.kind === 'broken') { for (var i = 0; i <= n; i++) pts.push([30 + i * (300 / n), i % 2 ? 50 : 170]); }
      else { for (var k = 0; k < n; k++) { var a = -Math.PI / 2 + k * 2 * Math.PI / n, rr = 88 + (k % 2) * 8; pts.push([cx + Math.cos(a) * rr * 1.25, cy + Math.sin(a) * rr]); } }
      var path = pts.map(function (p, i) { return (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1); }).join(' ') + (d.kind === 'broken' ? '' : ' Z');
      var labels = '', segs = d.kind === 'broken' ? n : pts.length;
      for (var j = 0; j < segs; j++) {
        var p1 = pts[j], p2 = pts[(j + 1) % pts.length], mx = (p1[0] + p2[0]) / 2, my = (p1[1] + p2[1]) / 2;
        var ox = mx - cx, oy = my - cy, L0 = Math.hypot(ox, oy) || 1, off = d.kind === 'broken' ? 0 : 16;
        var val = d.kind === 'rect' ? d.sides[j % 2] : d.sides[j];
        labels += '<text class="kd-side" x="' + (mx + ox / L0 * off).toFixed(1) + '" y="' + (my + oy / L0 * off + (d.kind === 'broken' ? (j % 2 ? 18 : -8) : 5)).toFixed(1) + '">' + val + ' ' + tx(d.unit || t('cm')) + '</text>';
      }
      box.innerHTML = '<svg viewBox="0 0 360 220" class="kd-poly-svg"><path d="' + path + '" class="kd-poly-shape' + (d.kind === 'broken' ? ' open' : '') + '"/>' +
        pts.map(function (p) { return '<circle cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="4" class="kd-poly-pt"/>'; }).join('') + labels + '</svg>';
      q.innerHTML = '<p class="kd-story">' + tx(d.story) + '</p><div class="kd-solve"><span class="kd-lbl">' + t('answer') + '</span>' + input(3.4, 'data-a') + ' ' + tx(d.unit || t('cm')) + '</div>';
    }
    build();
    node.querySelector('.kd-new').onclick = function () { build(); node.querySelector('.kd-fb').textContent = ''; };
    node.querySelector('.kd-check').onclick = function () { var a = q.querySelector('[data-a]'), ok = num(a.value) === d.ans; mark(a, ok); feedback(node, ok, ok ? null : t('polyHint')); };
    return node;
  };

  // Ustun ko'rinishida qo'shish/ayirish
  W.column = function (spec, idx) {
    var node = card(idx, '🧾', spec.title || t('column'), '<div class="kd-colw"></div>');
    var box = node.querySelector('.kd-colw'), d;
    function build() {
      d = spec.make(R);
      var w = Math.max(String(d.a).length, String(d.b).length, String(d.ans).length) + 1;
      function row(v, op) { var s = String(v); while (s.length < w) s = ' ' + s; return '<div class="kd-colr"><span class="kd-colop">' + (op || '') + '</span>' + s.split('').map(function (c) { return '<span>' + (c === ' ' ? '' : c) + '</span>'; }).join('') + '</div>'; }
      box.innerHTML = (d.story ? '<p class="kd-story">' + tx(d.story) + '</p>' : '') + '<div class="kd-colbox" style="--w:' + w + '">' + row(d.a) + row(d.b, d.op === '-' ? '−' : d.op === '*' ? '×' : '+') + '<div class="kd-colline"></div>' +
        '<div class="kd-colr"><span class="kd-colop"></span>' + input(Math.max(3, w * 0.9), 'data-a') + '</div></div>';
    }
    build();
    node.querySelector('.kd-new').onclick = function () { build(); node.querySelector('.kd-fb').textContent = ''; };
    node.querySelector('.kd-check').onclick = function () { var a = box.querySelector('[data-a]'), ok = num(a.value) === d.ans; mark(a, ok); feedback(node, ok, ok ? null : t('columnHint')); };
    return node;
  };

  // Soat: strelkalarga qarab vaqtni yozish
  W.clock = function (spec, idx) {
    var node = card(idx, '🕒', spec.title || t('clock'), '<div class="kd-clockw"></div><div class="kd-q"></div>');
    var box = node.querySelector('.kd-clockw'), q = node.querySelector('.kd-q'), d;
    function build() {
      d = spec.make(R);
      var ticks = '', nums = '';
      for (var i = 0; i < 60; i++) { var a = i * Math.PI / 30, big = i % 5 === 0, r1 = big ? 78 : 83; ticks += '<line x1="' + (100 + Math.sin(a) * r1).toFixed(1) + '" y1="' + (100 - Math.cos(a) * r1).toFixed(1) + '" x2="' + (100 + Math.sin(a) * 88).toFixed(1) + '" y2="' + (100 - Math.cos(a) * 88).toFixed(1) + '" class="' + (big ? 'kd-tk big' : 'kd-tk') + '"/>'; }
      for (var k = 1; k <= 12; k++) { var b = k * Math.PI / 6; nums += '<text x="' + (100 + Math.sin(b) * 64).toFixed(1) + '" y="' + (106 - Math.cos(b) * 64).toFixed(1) + '" class="kd-cnum">' + k + '</text>'; }
      var ha = ((d.h % 12) + d.m / 60) * 30, ma = d.m * 6;
      box.innerHTML = '<svg viewBox="0 0 200 200" class="kd-clock"><circle cx="100" cy="100" r="94" class="kd-cface"/>' + ticks + nums +
        '<line x1="100" y1="100" x2="100" y2="52" class="kd-hh" style="transform:rotate(' + ha + 'deg)"/><line x1="100" y1="100" x2="100" y2="24" class="kd-mh" style="transform:rotate(' + ma + 'deg)"/><circle cx="100" cy="100" r="6" class="kd-cpin"/></svg>';
      q.innerHTML = '<p class="kd-story">' + tx(d.story || t('clockAsk')) + '</p><div class="kd-solve">' + input(2.6, 'data-h') + ' <b>:</b> ' + input(2.6, 'data-m') + '</div>';
    }
    build();
    node.querySelector('.kd-new').onclick = function () { build(); node.querySelector('.kd-fb').textContent = ''; };
    node.querySelector('.kd-check').onclick = function () {
      var hI = q.querySelector('[data-h]'), mI = q.querySelector('[data-m]'), hv = num(hI.value), okH = hv === d.h || hv === d.h + 12 || (d.h === 12 && hv === 0), okM = num(mI.value) === d.m;
      mark(hI, okH); mark(mI, okM); feedback(node, okH && okM, okH && okM ? null : t('clockHint'));
    };
    return node;
  };

  // Katak qog'ozda yuz (yoki perimetr)
  W.grid = function (spec, idx) {
    var node = card(idx, '▦', spec.title || t('area'), '<div class="kd-gridw"></div><div class="kd-q"></div>');
    var box = node.querySelector('.kd-gridw'), q = node.querySelector('.kd-q'), d;
    function build() {
      d = spec.make(R);
      var cols = 12, rows = 7, c = 26, x0 = R(0, cols - d.a), y0 = R(0, rows - d.b), s = '<svg viewBox="0 0 ' + (cols * c + 2) + ' ' + (rows * c + 2) + '" class="kd-gridsvg">';
      for (var i = 0; i <= cols; i++) s += '<line x1="' + (1 + i * c) + '" y1="1" x2="' + (1 + i * c) + '" y2="' + (1 + rows * c) + '" class="kd-gl"/>';
      for (var j = 0; j <= rows; j++) s += '<line x1="1" y1="' + (1 + j * c) + '" x2="' + (1 + cols * c) + '" y2="' + (1 + j * c) + '" class="kd-gl"/>';
      for (var y = 0; y < d.b; y++) for (var x = 0; x < d.a; x++) s += '<rect x="' + (2 + (x0 + x) * c) + '" y="' + (2 + (y0 + y) * c) + '" width="' + (c - 2) + '" height="' + (c - 2) + '" rx="3" class="kd-gcell" style="--i:' + (y * d.a + x) + '"/>';
      s += '<rect x="' + (1 + x0 * c) + '" y="' + (1 + y0 * c) + '" width="' + d.a * c + '" height="' + d.b * c + '" class="kd-gfig"/></svg>';
      box.innerHTML = s;
      q.innerHTML = '<p class="kd-story">' + tx(d.story) + '</p><div class="kd-solve"><span class="kd-lbl">' + t('answer') + '</span>' + input(3.4, 'data-a') + ' ' + tx(d.unit || '') + '</div>';
    }
    build();
    node.querySelector('.kd-new').onclick = function () { build(); node.querySelector('.kd-fb').textContent = ''; };
    node.querySelector('.kd-check').onclick = function () { var a = q.querySelector('[data-a]'), ok = num(a.value) === d.ans; mark(a, ok); feedback(node, ok, ok ? null : t(d.ask === 'perimeter' ? 'polyHint' : 'areaHint')); };
    return node;
  };

  // Sonli (koordinata) nur: nuqta koordinatasini topish yoki sakrashlar bilan qo'shish/ayirish
  W.numline = function (spec, idx) {
    var node = card(idx, '📍', spec.title || t('numline'), '<div class="kd-nlw"></div><div class="kd-q"></div>');
    var box = node.querySelector('.kd-nlw'), q = node.querySelector('.kd-q'), d;
    function build() {
      d = spec.make(R);
      var n = Math.round((d.max - d.min) / d.step), W0 = 560, x0 = 30, dx = (W0 - 60) / n, X = function (v) { return x0 + (v - d.min) / d.step * dx; }, sv = '<svg viewBox="0 0 ' + W0 + ' 130" class="kd-nl">';
      sv += '<line x1="10" y1="80" x2="' + (W0 - 10) + '" y2="80" class="kd-nlaxis"/><polygon points="' + (W0 - 10) + ',80 ' + (W0 - 22) + ',73 ' + (W0 - 22) + ',87" class="kd-nlarrow"/>';
      for (var i = 0; i <= n; i++) { var v = d.min + i * d.step, big = !d.labelEvery || i % d.labelEvery === 0; sv += '<line x1="' + X(v) + '" y1="' + (big ? 70 : 74) + '" x2="' + X(v) + '" y2="' + (big ? 90 : 86) + '" class="kd-nltick"/>' + (big ? '<text x="' + X(v) + '" y="110" class="kd-nlnum">' + v + '</text>' : ''); }
      if (d.jumps) { var from = d.jumps[0]; d.jumps.slice(1).forEach(function (to, k) { var a = X(from), b = X(to), m = (a + b) / 2, hgt = 18 + Math.min(40, Math.abs(b - a) / 4); sv += '<path d="M' + a + ' 74 Q' + m + ' ' + (74 - hgt * 2) + ' ' + b + ' 74" class="kd-nljump" style="--d:' + (k * 0.3) + 's"/><text x="' + m + '" y="' + (70 - hgt) + '" class="kd-nljt">' + (to > from ? '+' : '−') + Math.abs(to - from) + '</text>'; from = to; }); }
      (d.points || []).forEach(function (p) { sv += '<circle cx="' + X(p[0]) + '" cy="80" r="7" class="kd-nlpt"/><text x="' + X(p[0]) + '" y="58" class="kd-nlpl">' + p[1] + '</text>'; });
      box.innerHTML = sv + '</svg>';
      q.innerHTML = '<p class="kd-story">' + tx(d.story) + '</p><div class="kd-solve"><span class="kd-lbl">' + t('answer') + '</span>' + input(4, 'data-a') + '</div>';
    }
    build();
    node.querySelector('.kd-new').onclick = function () { build(); node.querySelector('.kd-fb').textContent = ''; };
    node.querySelector('.kd-check').onclick = function () { var a = q.querySelector('[data-a]'), ok = num(a.value) === d.ans; mark(a, ok); feedback(node, ok, ok ? null : t('numlineHint')); };
    return node;
  };

  // Koordinata burchagi: nuqtaning (x; y) koordinatalari
  W.coord = function (spec, idx) {
    var node = card(idx, '📐', spec.title || t('coord'), '<div class="kd-cow"></div><div class="kd-q"></div>');
    var box = node.querySelector('.kd-cow'), q = node.querySelector('.kd-q'), d;
    function build() {
      d = spec.make(R);
      var N = 8, c = 34, o = 30, sv = '<svg viewBox="0 0 ' + (o + N * c + 30) + ' ' + (N * c + 60) + '" class="kd-co">', Y = function (v) { return 20 + (N - v) * c; }, X = function (v) { return o + v * c; };
      for (var i = 0; i <= N; i++) { sv += '<line x1="' + X(i) + '" y1="' + Y(0) + '" x2="' + X(i) + '" y2="' + Y(N) + '" class="kd-gl"/><line x1="' + X(0) + '" y1="' + Y(i) + '" x2="' + X(N) + '" y2="' + Y(i) + '" class="kd-gl"/>'; if (i) sv += '<text x="' + X(i) + '" y="' + (Y(0) + 18) + '" class="kd-nlnum">' + i + '</text><text x="' + (X(0) - 12) + '" y="' + (Y(i) + 5) + '" class="kd-nlnum">' + i + '</text>'; }
      sv += '<text x="' + (X(0) - 10) + '" y="' + (Y(0) + 18) + '" class="kd-nlnum">0</text><line x1="' + X(0) + '" y1="' + Y(0) + '" x2="' + (X(N) + 16) + '" y2="' + Y(0) + '" class="kd-nlaxis"/><line x1="' + X(0) + '" y1="' + Y(0) + '" x2="' + X(0) + '" y2="' + (Y(N) - 14) + '" class="kd-nlaxis"/>';
      sv += '<text x="' + (X(N) + 18) + '" y="' + (Y(0) - 6) + '" class="kd-nlpl">x</text><text x="' + (X(0) + 10) + '" y="' + (Y(N) - 6) + '" class="kd-nlpl">y</text>';
      sv += '<line x1="' + X(d.x) + '" y1="' + Y(d.y) + '" x2="' + X(d.x) + '" y2="' + Y(0) + '" class="kd-codash"/><line x1="' + X(d.x) + '" y1="' + Y(d.y) + '" x2="' + X(0) + '" y2="' + Y(d.y) + '" class="kd-codash"/>';
      sv += '<circle cx="' + X(d.x) + '" cy="' + Y(d.y) + '" r="8" class="kd-nlpt"/><text x="' + (X(d.x) + 14) + '" y="' + (Y(d.y) - 10) + '" class="kd-nlpl">' + (d.name || 'A') + '</text></svg>';
      box.innerHTML = sv;
      q.innerHTML = '<p class="kd-story">' + tx(d.story || t('coordAsk')) + '</p><div class="kd-solve"><b>' + (d.name || 'A') + '</b> (' + input(2.4, 'data-x') + ' ; ' + input(2.4, 'data-y') + ')</div>';
    }
    build();
    node.querySelector('.kd-new').onclick = function () { build(); node.querySelector('.kd-fb').textContent = ''; };
    node.querySelector('.kd-check').onclick = function () { var xi = q.querySelector('[data-x]'), yi = q.querySelector('[data-y]'), ox = num(xi.value) === d.x, oy = num(yi.value) === d.y; mark(xi, ox); mark(yi, oy); feedback(node, ox && oy, ox && oy ? null : t('coordHint')); };
    return node;
  };

  K.widgets = W;
  K.renderActivity = function (spec, idx) {
    if (!W[spec.type]) throw new Error('Unknown activity type: ' + spec.type);
    var n = W[spec.type](spec, idx);
    n.addEventListener('keydown', function (e) { if (e.key === 'Enter' && e.target.classList.contains('kd-in')) n.querySelector('.kd-check').click(); });
    return n;
  };

  // ---------- Test ----------
  K.quiz = function (box, questions, onDone) {
    var qs = questions.map(function (q) { var o = q.o.map(function (v, i) { return { t: tx(v), ok: i === q.a }; }); return { q: tx(q.q), o: shuffle(o), pic: q.pic }; });
    var done = 0, right = 0;
    box.innerHTML = '<div class="kd-quiz">' + qs.map(function (q, i) {
      return '<div class="kd-qz" data-i="' + i + '"><p class="kd-qz-q"><span>' + (i + 1) + '</span>' + q.q + '</p>' + (q.pic ? '<div class="kd-qz-pic">' + q.pic + '</div>' : '') +
        '<div class="kd-qz-o">' + q.o.map(function (o, j) { return '<button class="kd-opt" data-j="' + j + '">' + o.t + '</button>'; }).join('') + '</div></div>';
    }).join('') + '<div class="kd-qz-res"></div></div>';
    box.querySelectorAll('.kd-qz').forEach(function (el) {
      var q = qs[+el.getAttribute('data-i')];
      el.querySelectorAll('.kd-opt').forEach(function (b) {
        b.onclick = function () {
          if (el.classList.contains('done')) return; el.classList.add('done');
          var o = q.o[+b.getAttribute('data-j')];
          b.classList.add(o.ok ? 'ok' : 'bad');
          q.o.forEach(function (x, j) { if (x.ok) el.querySelectorAll('.kd-opt')[j].classList.add('ok'); });
          done++; if (o.ok) right++;
          if (done === qs.length) {
            var pct = Math.round(right / qs.length * 100), res = box.querySelector('.kd-qz-res');
            res.innerHTML = '<div class="kd-score ' + (pct >= 80 ? 'great' : pct >= 50 ? 'ok' : 'low') + '"><b>' + right + ' / ' + qs.length + '</b><span>' +
              (pct === 100 ? t('q100') : pct >= 80 ? t('q80') : pct >= 50 ? t('q50') : t('qLow')) +
              '</span><button class="btn sm ghost kd-retry">' + t('reQuiz') + '</button></div>';
            if (pct >= 80) K.confetti(res);
            if (questions.gate) res.innerHTML += '<p class="kd-gate ' + (pct >= 80 ? 'ok' : 'no') + '">' + (pct >= 80 ? t('qPass') : t('qFail')) + '</p>';
            res.querySelector('.kd-retry').onclick = function () { K.quiz(box, questions.rebuild ? questions.rebuild() : questions, onDone); };
            if (onDone) onDone(right, qs.length, pct);
          }
        };
      });
    });
  };

  // Mavzu testi: qo'lda yozilgan savollar + topshiriq generatorlaridan tuzilgan savollar, kamida `n` ta
  function stripFig(h) { return String(h).replace(/<div class="kd-(fig|pics)"[\s\S]*?<\/svg><\/div>/g, '').replace(/<div class="kd-pics">[\s\S]*?<\/div>/g, ''); }
  function fmtAns(v, l) { if (typeof v !== 'number') return String(v); var s = String(Math.round(v * 1e6) / 1e6); return l === 'en' ? s : s.replace('.', ','); }
  function distract(a) {
    var out = [], c = [a + 1, a - 1, a + 2, a - 2, a * 2, a + 10, a - 10, a * 10, Math.round(a / 2), a + 100, a - 100, a + 0.1, a - 0.1, -a, a + 5, a - 5];
    if (typeof a !== 'number' || !isFinite(a)) return ['?', '??'];
    for (var i = 0; i < c.length && out.length < 2; i++) { var v = Math.round(c[i] * 1e6) / 1e6; if (v !== a && out.indexOf(v) < 0 && (a >= 0 ? v >= 0 : true) && Number.isInteger(a) === Number.isInteger(v)) out.push(v); }
    while (out.length < 2) out.push(a + out.length + 3);
    return out;
  }
  function L3(fn) { return { uz: fn('uz'), ru: fn('ru'), en: fn('en') }; }
  K.buildQuiz = function (topic, n) {
    n = n || 10;
    var GEN = ['drill', 'problem', 'choose', 'count3d', 'chain', 'grid', 'column', 'polygon', 'numline', 'coord', 'ruler', 'scale', 'jugs', 'clock'];
    var qs = topic.quiz.slice(), gens = topic.acts.filter(function (a) { return a.make && GEN.indexOf(a.type) >= 0; });
    var tries = 0, seen = {};
    function L3s(v) { return L3(function (l) { return stripFig(typeof v === 'object' && v && 'uz' in v ? v[l] : v); }); }
    function num3(ans, unit) { var w = distract(ans); return [ans, w[0], w[1]].map(function (v) { return L3(function (l) { return fmtAns(v, l) + (unit ? ' ' + (typeof unit === 'object' ? unit[l] : unit) : ''); }); }); }
    qs.forEach(function (q) { seen[JSON.stringify(q.q) + '|' + JSON.stringify(q.o[q.a])] = 1; });
    while (qs.length < Math.max(n, topic.quiz.length) && gens.length && tries++ < 200) {
      var a = gens[tries % gens.length], d = a.make(R), q = null, ty = a.type;
      try {
        if (ty === 'choose') q = { q: d.story, o: d.options, a: d.a, pic: d.pics ? tx(d.pics) : undefined };
        else if (ty === 'drill') q = { q: L3(function (l) { return tx(typeof d.q === 'object' && 'uz' in d.q ? d.q[l] : d.q) + ' = ?'; }), o: num3(d.a), a: 0 };
        else if (ty === 'problem' || ty === 'count3d' || ty === 'grid' || ty === 'numline' || ty === 'polygon') {
          var st = d.story || (ty === 'count3d' ? { uz: 'Jami nechta?', ru: 'Сколько всего?', en: 'How many in all?' } : ty === 'polygon' ? { uz: 'Tomonlari ' + d.sides.join(', ') + '. Perimetri?', ru: 'Стороны ' + d.sides.join(', ') + '. Периметр?', en: 'Sides ' + d.sides.join(', ') + '. Perimeter?' } : { uz: 'Javob?', ru: 'Ответ?', en: 'Answer?' });
          if (ty === 'count3d' && d.groups) st = L3(function (l) { return (typeof d.story === 'object' && d.story && 'uz' in d.story ? d.story[l] : d.story || '') + ' (' + d.groups.map(function (g) { return g.n; }).join(' + ') + ')'; });
          if (ty === 'grid') st = L3(function (l) { return (d.ask === 'perimeter' ? { uz: 'Perimetr: ', ru: 'Периметр: ', en: 'Perimeter: ' } : { uz: 'Yuz: ', ru: 'Площадь: ', en: 'Area: ' })[l] + d.a + ' × ' + d.b; });
          q = { q: L3s(st), o: num3(d.ans, d.unit), a: 0 };
        }
        else if (ty === 'chain') { var v = d.start; d.ops.forEach(function (o) { v = o[0] === '+' ? v + o[1] : v - o[1]; }); q = { q: L3(function () { return d.start + ' ' + d.ops.map(function (o) { return (o[0] === '+' ? '+ ' : '− ') + o[1]; }).join(' ') + ' = ?'; }), o: num3(v), a: 0 }; }
        else if (ty === 'column') q = { q: L3(function () { return d.a + ' ' + (d.op === '-' ? '−' : d.op === '*' ? '×' : '+') + ' ' + d.b + ' = ?'; }), o: num3(d.ans), a: 0 };
        else if (ty === 'coord') q = { q: L3(function (l) { return { uz: 'Nuqta A(' + d.x + '; ' + d.y + ') — x koordinatasi?', ru: 'Точка A(' + d.x + '; ' + d.y + ') — координата x?', en: 'Point A(' + d.x + '; ' + d.y + ') — the x-coordinate?' }[l]; }), o: num3(d.x), a: 0 };
        else if (ty === 'ruler') q = { q: L3(function (l) { return { uz: 'Kesma ' + (d.start || 0) + ' dan ' + ((d.start || 0) + d.len) + ' gacha. Uzunligi (cm)?', ru: 'Отрезок от ' + (d.start || 0) + ' до ' + ((d.start || 0) + d.len) + '. Длина (см)?', en: 'A segment from ' + (d.start || 0) + ' to ' + ((d.start || 0) + d.len) + '. Length (cm)?' }[l]; }), o: num3(d.len), a: 0 };
        else if (ty === 'scale') q = { q: L3(function (l) { return { uz: 'Tarozi: toshlar ' + d.mass + ' kg ni ko‘rsatadi. Massa?', ru: 'Весы: гири показывают ' + d.mass + ' кг. Масса?', en: 'The scale shows ' + d.mass + ' kg of weights. Mass?' }[l]; }), o: num3(d.mass, { uz: 'kg', ru: 'кг', en: 'kg' }), a: 0 };
        else if (ty === 'jugs') q = { q: L3(function (l) { return { uz: 'Idish sig‘imi ' + d.cap + ' l. Ikkita shunday idish?', ru: 'Ёмкость сосуда ' + d.cap + ' л. Два таких сосуда?', en: 'A jug holds ' + d.cap + ' l. Two such jugs?' }[l]; }), o: num3(d.cap * 2, { uz: 'l', ru: 'л', en: 'l' }), a: 0 };
        else if (ty === 'clock') { var mm = (d.m < 10 ? '0' : '') + d.m; q = { q: L3(function (l) { return { uz: 'Soat ' + d.h + ':' + mm + '. Soat strelkasi qaysi raqamda (yoki undan keyin)?', ru: 'Время ' + d.h + ':' + mm + '. На какой цифре (или после неё) часовая стрелка?', en: 'The time is ' + d.h + ':' + mm + '. Which number is the hour hand on (or just past)?' }[l]; }), o: num3(d.h), a: 0 }; }
      } catch (e) { q = null; }
      if (!q || !q.o || q.o.length < 2) continue;
      var key = JSON.stringify(q.q) + '|' + JSON.stringify(q.o[q.a]); if (seen[key]) continue; seen[key] = 1;
      qs.push(q);
    }
    var out = shuffle(qs).slice(0, Math.max(n, Math.min(qs.length, 12)));
    out.gate = true; out.rebuild = function () { return K.buildQuiz(topic, n); };
    return out;
  };
  root.NMKids = K;
})(this);
