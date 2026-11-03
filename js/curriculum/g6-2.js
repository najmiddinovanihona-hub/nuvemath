// Nuvemath — 6-sinf, II qism (manba: «Matematika. 6-sinf. II qism», Toshkent, yangi nashr).
// Boblar va mavzular tartibi darslikdan olingan; tushuntirishlar, topshiriqlar va chizmalar Nuvemath uchun qayta yozilgan.
(function (root) {
  'use strict';
  var C = root.NMCurriculum, H = C.H, L = H.L, mk = H.mk, PCS = H.PCS, choice = H.choice, pick = H.pick;
  var r6 = H.r6, dq = H.dq;
  var KM = L('km', 'км', 'km'), KMH = L('km/soat', 'км/ч', 'km/h'), HRS = L('soat', 'ч', 'h'), CM = H.CM, CM2 = L('cm²', 'см²', 'cm²'), CM3 = L('cm³', 'см³', 'cm³');
  function fmt(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' '); }
  function ch(n) { return L(n + '-bob', 'Глава ' + n, 'Chapter ' + n); }
  function fig(inner, w, h) { return '<div class="kd-fig"><svg viewBox="0 0 ' + (w || 300) + ' ' + (h || 180) + '">' + inner + '</svg></div>'; }
  var TX = 'font-size="15" font-weight="700" fill="currentColor" text-anchor="middle"';
  var COLS = ['#4f8dff', '#ff6b8b', '#2ec27e', '#f6b73c', '#a77bff'];
  // doiraviy diagramma: parts = [[foiz, yorliq], ...]
  function pieChart(parts) { var s = '', a0 = -90, cx = 110, cy = 100, r = 80;
    parts.forEach(function (p, i) { var a1 = a0 + p[0] * 3.6, x0 = cx + r * Math.cos(a0 * Math.PI / 180), y0 = cy + r * Math.sin(a0 * Math.PI / 180), x1 = cx + r * Math.cos(a1 * Math.PI / 180), y1 = cy + r * Math.sin(a1 * Math.PI / 180), m = (a0 + a1) / 2;
      s += '<path d="M' + cx + ' ' + cy + ' L' + x0.toFixed(1) + ' ' + y0.toFixed(1) + ' A' + r + ' ' + r + ' 0 ' + (p[0] > 50 ? 1 : 0) + ' 1 ' + x1.toFixed(1) + ' ' + y1.toFixed(1) + ' Z" fill="' + COLS[i] + '" stroke="#0f1a36" stroke-width="2"/>';
      s += '<text x="' + (cx + 52 * Math.cos(m * Math.PI / 180)).toFixed(1) + '" y="' + (cy + 52 * Math.sin(m * Math.PI / 180) + 5).toFixed(1) + '" font-size="14" font-weight="800" fill="#fff" text-anchor="middle">' + p[0] + '%</text>';
      s += '<rect x="210" y="' + (30 + i * 26) + '" width="14" height="14" rx="3" fill="' + COLS[i] + '"/><text x="230" y="' + (42 + i * 26) + '" font-size="14" font-weight="700" fill="currentColor">' + p[1] + '</text>';
      a0 = a1; });
    return fig(s, 330, 200); }
  // yoyilmalar
  var NETS = {
    cube: '<g fill="rgba(79,141,255,.2)" stroke="#4f8dff" stroke-width="2.5"><rect x="110" y="10" width="40" height="40"/><rect x="70" y="50" width="40" height="40"/><rect x="110" y="50" width="40" height="40"/><rect x="150" y="50" width="40" height="40"/><rect x="190" y="50" width="40" height="40"/><rect x="110" y="90" width="40" height="40"/></g>',
    cylinder: '<g fill="rgba(46,194,126,.2)" stroke="#2ec27e" stroke-width="2.5"><rect x="60" y="45" width="180" height="60"/><circle cx="150" cy="22" r="22"/><circle cx="150" cy="128" r="22"/></g>',
    cone: '<g fill="rgba(246,183,60,.2)" stroke="#f6b73c" stroke-width="2.5"><path d="M150 10 L80 100 A90 90 0 0 0 220 100 Z"/><circle cx="150" cy="128" r="22"/></g>',
    pyramid: '<g fill="rgba(255,107,139,.2)" stroke="#ff6b8b" stroke-width="2.5"><rect x="120" y="55" width="50" height="50"/><polygon points="120,55 170,55 145,10"/><polygon points="120,105 170,105 145,145"/><polygon points="120,55 120,105 75,80"/><polygon points="170,55 170,105 215,80"/></g>',
    prism: '<g fill="rgba(167,123,255,.2)" stroke="#a77bff" stroke-width="2.5"><rect x="60" y="50" width="60" height="50"/><rect x="120" y="50" width="60" height="50"/><rect x="180" y="50" width="60" height="50"/><polygon points="120,50 180,50 150,12"/><polygon points="120,100 180,100 150,138"/></g>'
  };
  var SOL = { cube: L('kub', 'куб', 'cube'), cylinder: L('silindr', 'цилиндр', 'cylinder'), cone: L('konus', 'конус', 'cone'), pyramid: L('to‘rtburchakli piramida', 'четырёхугольная пирамида', 'square pyramid'), prism: L('uchburchakli prizma', 'треугольная призма', 'triangular prism') };

  var part2 = {
    grade: 6, part: 2, edition: L('Yangi nashr', 'Новое издание', 'New edition'),
    title: L('Tezlik, hajm, diagrammalar va fazoviy jismlar', 'Скорость, объём, диаграммы и тела', 'Speed, volume, pie charts and solids'),
    book: L('Matematika, 6-sinf, II qism (Toshkent)', 'Математика, 6 класс, часть II (Ташкент)', 'Mathematics, Grade 6, Part II (Tashkent)'),
    intro: L('Ikkinchi qismda tezlik va harakatga doir masalalar, kuboid va kubning qirrasini topish, doiraviy diagrammalar hamda konus, silindr, prizma, piramida va ularning yoyilmalarini o‘rganamiz.',
      'Во второй части — задачи на скорость и движение, нахождение ребра параллелепипеда и куба, круговые диаграммы, а также конус, цилиндр, призма, пирамида и их развёртки.',
      'Part II covers speed and motion problems, finding the edges of cuboids and cubes, pie charts, and cones, cylinders, prisms, pyramids and their nets.'),
    sections: [
      { id: 's1', title: L('Tezlik', 'Скорость', 'Speed'), icon: '🚀', color: 'orange', topics: [
        { id: 't1', lessons: ch(7), title: L('Tezlik, masofa va vaqtni topish', 'Скорость, расстояние и время', 'Speed, distance and time'),
          keys: ['v = S : t', 'S = v · t', 't = S : v', 'm/s, km/soat'],
          scene: [{ obj: 'drone', n: 2, color: 'orange' }],
          explain: L('Tezlik — vaqt birligida bosib o‘tilgan masofa. Toshbaqa 100 cm ni 40 sekundda bossa, tezligi 100 : 40 = 2,5 cm/s. Birliklarga e’tibor bering: km/soat, m/s, m/min.',
            'Скорость — расстояние за единицу времени. Черепаха прошла 100 см за 40 секунд: её скорость 100 : 40 = 2,5 см/с. Следите за единицами: км/ч, м/с, м/мин.',
            'Speed is distance per unit of time. A tortoise covering 100 cm in 40 seconds goes 100 : 40 = 2.5 cm/s. Watch the units: km/h, m/s, m/min.'),
          rule: 'v = S : t · S = v · t · t = S : v',
          acts: [
            { type: 'problem', title: L('Tezlik', 'Скорость', 'Speed'), make: function (R) { var t = pick([4, 5, 8, 10, 20, 40]), S = R(2, 20) * 10; return { story: L('Toshbaqa <b>' + S + '</b> cm masofani <b>' + t + '</b> sekundda bosib o‘tdi. <u>Tezligi</u> qancha (cm/s)?', 'Черепаха прошла <b>' + S + '</b> см за <b>' + t + '</b> секунд. <u>Её скорость</u> (см/с)?', 'A tortoise covered <b>' + S + '</b> cm in <b>' + t + '</b> seconds. <u>Its speed</u> (cm/s)?'), expr: [S, ':', t, '=', r6(S / t)], ans: r6(S / t), unit: L('cm/s', 'см/с', 'cm/s') }; } },
            { type: 'drill', n: 6, make: function (R) { var v = R(3, 12) * 5, t = R(2, 9); return [{ q: 'v = ' + v + ', t = ' + t + ';  S', a: v * t }, { q: 'S = ' + v * t + ', t = ' + t + ';  v', a: v }, { q: 'S = ' + v * t + ', v = ' + v + ';  t', a: t }][R(0, 2)]; } }
          ],
          quiz: [{ q: L('100 cm, 40 s. v = ?', '100 см, 40 с. v = ?', '100 cm, 40 s. v = ?'), o: [L('2,5 cm/s', '2,5 см/с', '2.5 cm/s'), L('4 cm/s', '4 см/с', '4 cm/s'), L('140 cm/s', '140 см/с', '140 cm/s')], a: 0 }, { q: 'v = 60 km/h, t = 2,5 h. S = ?', o: ['150', '24', L('62,5', '62,5', '62.5')], a: 0 }] },

        { id: 't2', lessons: ch(7), title: L('Ikki xil tezlikdagi harakat', 'Движение с двумя скоростями', 'Travelling at two speeds'),
          keys: ['S = S₁ + S₂', L('har bir qism alohida', 'каждая часть отдельно', 'each leg separately')],
          scene: [{ obj: 'drone', n: 1, color: 'blue' }, { obj: 'drone', n: 1, color: 'green' }],
          explain: L('Yo‘l ikki qismdan iborat bo‘lsa, har bir qismni alohida hisoblaymiz: avtobus 2 soat 60 km/soat, so‘ng 3 soat 80 km/soat yurdi. S = 60 · 2 + 80 · 3 = 120 + 240 = 360 km.',
            'Если путь состоит из двух участков, считаем каждый отдельно: автобус ехал 2 ч со скоростью 60 км/ч, затем 3 ч — 80 км/ч. S = 60 · 2 + 80 · 3 = 120 + 240 = 360 км.',
            'If a trip has two legs, work each out separately: a bus drove 2 h at 60 km/h, then 3 h at 80 km/h. S = 60 · 2 + 80 · 3 = 120 + 240 = 360 km.'),
          rule: 'S = v₁ · t₁ + v₂ · t₂',
          acts: [
            { type: 'problem', make: function (R) { var v1 = R(4, 7) * 10, t1 = R(1, 4), v2 = R(6, 9) * 10, t2 = R(1, 4); return { story: L('Avtobus <b>' + t1 + '</b> soat <b>' + v1 + '</b> km/soat, so‘ng <b>' + t2 + '</b> soat <b>' + v2 + '</b> km/soat tezlikda yurdi. <u>Jami masofa</u>? (1-qism: ' + v1 * t1 + ' km.)', 'Автобус ехал <b>' + t1 + '</b> ч со скоростью <b>' + v1 + '</b> км/ч, затем <b>' + t2 + '</b> ч — <b>' + v2 + '</b> км/ч. <u>Всё расстояние</u>? (1-й участок: ' + v1 * t1 + ' км.)', 'A bus drove <b>' + t1 + '</b> h at <b>' + v1 + '</b> km/h, then <b>' + t2 + '</b> h at <b>' + v2 + '</b> km/h. <u>Total distance</u>? (Leg 1: ' + v1 * t1 + ' km.)'), expr: [v2, '·', t2, '+', v1 * t1, '=', v1 * t1 + v2 * t2], ans: v1 * t1 + v2 * t2, unit: KM }; } },
            { type: 'problem', make: function (R) { var v1 = R(4, 6) * 10, t1 = R(2, 4), v2 = R(7, 9) * 10, t2 = R(1, 3), S = v1 * t1 + v2 * t2; return { story: L('Shaharlar orasi <b>' + S + '</b> km. Mashina <b>' + t1 + '</b> soat <b>' + v1 + '</b> km/soat tezlikda yurdi, qolgan yo‘lni <b>' + v2 + '</b> km/soat tezlikda o‘tdi. Qolgan yo‘lga <u>necha soat</u> ketdi?', 'Между городами <b>' + S + '</b> км. Машина ехала <b>' + t1 + '</b> ч со скоростью <b>' + v1 + '</b> км/ч, остаток — <b>' + v2 + '</b> км/ч. <u>Сколько часов</u> на остаток?', 'The cities are <b>' + S + '</b> km apart. A car drove <b>' + t1 + '</b> h at <b>' + v1 + '</b> km/h and the rest at <b>' + v2 + '</b> km/h. <u>How many hours</u> for the rest?'), expr: [S, '−', v1 * t1, ':', v2, '=', t2], ans: t2, unit: HRS }; } }
          ],
          quiz: [{ q: L('60 km/soat · 2 soat + 80 km/soat · 3 soat = ?', '60 км/ч · 2 ч + 80 км/ч · 3 ч = ?', '60 km/h · 2 h + 80 km/h · 3 h = ?'), o: ['360', '140', '700'], a: 0 }, { q: L('Ikki qismli yo‘lda nima qo‘shiladi?', 'Что складываем при двух участках?', 'What do we add for two legs?'), o: [L('masofalar', 'расстояния', 'distances'), L('tezliklar', 'скорости', 'speeds'), L('hech narsa', 'ничего', 'nothing')], a: 0 }] },

        { id: 't3', lessons: ch(7), title: L('O‘rtacha tezlik', 'Средняя скорость', 'Average speed'),
          keys: [L('v = umumiy S : umumiy t', 'v = весь путь : всё время', 'v = total distance : total time')],
          scene: [{ obj: 'drone', n: 3, color: 'violet' }],
          explain: L('<b>O‘rtacha tezlik</b> = butun masofa : butun vaqt. Diqqat: bu tezliklarning o‘rtachasi emas! 2 soat 60 km/soat va 1 soat 90 km/soat: S = 120 + 90 = 210 km, t = 3 soat, v = 70 km/soat (75 emas!).',
            '<b>Средняя скорость</b> = весь путь : всё время. Внимание: это не среднее скоростей! 2 ч по 60 км/ч и 1 ч по 90 км/ч: S = 120 + 90 = 210 км, t = 3 ч, v = 70 км/ч (а не 75!).',
            '<b>Average speed</b> = total distance : total time. Careful: it is not the average of the speeds! 2 h at 60 km/h and 1 h at 90 km/h: S = 120 + 90 = 210 km, t = 3 h, v = 70 km/h (not 75!).'),
          rule: L('v = (S₁ + S₂) : (t₁ + t₂)', 'v = (S₁ + S₂) : (t₁ + t₂)', 'v = (S₁ + S₂) : (t₁ + t₂)'),
          acts: [
            { type: 'problem', make: function (R) { var v, t1, t2, v1, v2, S; do { t1 = R(1, 4); t2 = R(1, 4); v1 = R(4, 8) * 10; v2 = R(5, 10) * 10; S = v1 * t1 + v2 * t2; } while (S % (t1 + t2)); v = S / (t1 + t2);
              return { story: L('Poyezd <b>' + t1 + '</b> soat <b>' + v1 + '</b> km/soat, keyin <b>' + t2 + '</b> soat <b>' + v2 + '</b> km/soat tezlikda yurdi (jami ' + S + ' km). <u>O‘rtacha tezligi</u>?', 'Поезд ехал <b>' + t1 + '</b> ч со скоростью <b>' + v1 + '</b> км/ч, затем <b>' + t2 + '</b> ч — <b>' + v2 + '</b> км/ч (всего ' + S + ' км). <u>Средняя скорость</u>?', 'A train went <b>' + t1 + '</b> h at <b>' + v1 + '</b> km/h, then <b>' + t2 + '</b> h at <b>' + v2 + '</b> km/h (' + S + ' km in all). <u>Average speed</u>?'), expr: [S, ':', t1 + t2, '=', v], ans: v, unit: KMH }; } },
            { type: 'choose', title: L('Tuzoqli savol', 'Вопрос с подвохом', 'Trick question'), icon: '🤔', make: function () { return choice(L('2 soat 60 km/soat, 1 soat 90 km/soat. O‘rtacha tezlik?', '2 ч по 60 км/ч, 1 ч по 90 км/ч. Средняя скорость?', '2 h at 60 km/h, 1 h at 90 km/h. Average speed?'), [L('70 km/soat', '70 км/ч', '70 km/h'), L('75 km/soat', '75 км/ч', '75 km/h'), L('150 km/soat', '150 км/ч', '150 km/h')], 0); } }
          ],
          quiz: [{ q: L('210 km 3 soatda. O‘rtacha tezlik?', '210 км за 3 ч. Средняя скорость?', '210 km in 3 h. Average speed?'), o: ['70', '75', '630'], a: 0 }, { q: L('O‘rtacha tezlik = ?', 'Средняя скорость = ?', 'Average speed = ?'), o: [L('butun S : butun t', 'весь S : всё t', 'total S : total t'), L('(v₁ + v₂) : 2', '(v₁ + v₂) : 2', '(v₁ + v₂) : 2'), 'v₁ · v₂'], a: 0 }] },

        { id: 't4', lessons: ch(7), title: L('Ikki jism harakatiga doir masalalar', 'Задачи на движение двух тел', 'Two moving objects'),
          keys: [L('qarama-qarshi: v₁ + v₂', 'навстречу: v₁ + v₂', 'towards: v₁ + v₂'), L('quvib yetish: v₁ − v₂', 'вдогонку: v₁ − v₂', 'catching up: v₁ − v₂')],
          scene: [{ obj: 'drone', n: 1, color: 'pink' }, { obj: 'drone', n: 1, color: 'cyan' }],
          explain: L('Bir-biriga qarab harakatda yaqinlashish tezligi <b>v₁ + v₂</b>. Bir yo‘nalishda quvib yetishda — <b>v₁ − v₂</b>. Uchrashish vaqti = oradagi masofa : yaqinlashish tezligi.',
            'При движении навстречу скорость сближения <b>v₁ + v₂</b>. При движении вдогонку — <b>v₁ − v₂</b>. Время встречи = расстояние между ними : скорость сближения.',
            'Moving towards each other, the closing speed is <b>v₁ + v₂</b>. Catching up in the same direction, it is <b>v₁ − v₂</b>. Meeting time = gap : closing speed.'),
          rule: L('t = S : (v₁ ± v₂)', 't = S : (v₁ ± v₂)', 't = S : (v₁ ± v₂)'),
          acts: [
            { type: 'problem', title: L('Qarama-qarshi', 'Навстречу', 'Towards'), make: function (R) { var v1 = R(4, 9) * 10, v2 = R(4, 9) * 10, t = R(2, 6); return { story: L('Oralaridagi masofa <b>' + (v1 + v2) * t + '</b> km bo‘lgan ikki shahardan bir-biriga qarab <b>' + v1 + '</b> va <b>' + v2 + '</b> km/soat tezlikda ikki mashina chiqdi. <u>Necha soatdan keyin</u> uchrashadi?', 'Из двух городов, между которыми <b>' + (v1 + v2) * t + '</b> км, навстречу друг другу выехали машины со скоростями <b>' + v1 + '</b> и <b>' + v2 + '</b> км/ч. <u>Через сколько часов</u> встретятся?', 'Two cars leave cities <b>' + (v1 + v2) * t + '</b> km apart towards each other at <b>' + v1 + '</b> and <b>' + v2 + '</b> km/h. <u>After how many hours</u> do they meet?'), expr: [(v1 + v2) * t, ':', v1 + v2, '=', t], ans: t, unit: HRS }; } },
            { type: 'problem', title: L('Quvib yetish', 'Вдогонку', 'Catching up'), make: function (R) { var v2 = R(4, 7) * 10, d = R(1, 3) * 10, v1 = v2 + d, t = R(2, 6); return { story: L('Yuk mashinasi <b>' + v2 + '</b> km/soat tezlikda ketmoqda. Undan <b>' + d * t + '</b> km orqada <b>' + v1 + '</b> km/soat tezlikdagi avtobus bor. Avtobus <u>necha soatda</u> quvib yetadi?', 'Грузовик едет со скоростью <b>' + v2 + '</b> км/ч. В <b>' + d * t + '</b> км позади — автобус со скоростью <b>' + v1 + '</b> км/ч. <u>Через сколько часов</u> он догонит грузовик?', 'A lorry drives at <b>' + v2 + '</b> km/h. <b>' + d * t + '</b> km behind it is a bus at <b>' + v1 + '</b> km/h. <u>In how many hours</u> does the bus catch up?'), expr: [d * t, ':', d, '=', t], ans: t, unit: HRS }; } }
          ],
          quiz: [{ q: L('Qarama-qarshi: 50 va 70 km/soat, 360 km. Vaqt?', 'Навстречу: 50 и 70 км/ч, 360 км. Время?', 'Towards: 50 and 70 km/h, 360 km apart. Time?'), o: ['3', '18', '5'], a: 0 }, { q: L('Quvib yetish tezligi: 80 va 60 km/soat?', 'Скорость сближения вдогонку: 80 и 60 км/ч?', 'Catch-up speed: 80 and 60 km/h?'), o: ['20', '140', '70'], a: 0 }] }
      ] },

      { id: 's2', title: L('Hajm', 'Объём', 'Volume'), icon: '🧊', color: 'cyan', topics: [
        { id: 't5', lessons: ch(8), title: L('Kuboidning qirrasini topish', 'Нахождение ребра параллелепипеда', 'Finding a cuboid’s edge'),
          keys: ['c = V : (a · b)'],
          scene: [{ obj: 'box', n: 2, color: 'cyan' }],
          explain: L('V = a · b · c dan noma’lum qirrani topamiz: c = V : (a · b). Hajmi 120 cm³, uzunligi 6 cm, eni 5 cm bo‘lsa, balandligi 120 : 30 = 4 cm.',
            'Из V = a · b · c находим неизвестное ребро: c = V : (a · b). Объём 120 см³, длина 6 см, ширина 5 см — высота 120 : 30 = 4 см.',
            'From V = a · b · c find the missing edge: c = V : (a · b). Volume 120 cm³, length 6 cm, width 5 cm gives height 120 : 30 = 4 cm.'),
          rule: 'c = V : (a · b)',
          acts: [
            { type: 'problem', make: function (R) { var a = R(3, 15), b = R(2, 10), c = R(2, 12); return { story: L('Kuboid hajmi <b>' + a * b * c + '</b> cm³, uzunligi <b>' + a + '</b> cm, eni <b>' + b + '</b> cm. <u>Balandligi</u>?', 'Объём параллелепипеда <b>' + a * b * c + '</b> см³, длина <b>' + a + '</b> см, ширина <b>' + b + '</b> см. <u>Высота</u>?', 'A cuboid has volume <b>' + a * b * c + '</b> cm³, length <b>' + a + '</b> cm, width <b>' + b + '</b> cm. <u>Height</u>?'), expr: [a * b * c, ':', a * b, '=', c], ans: c, unit: CM }; } },
            { type: 'drill', n: 6, make: function (R) { var a = R(2, 12), b = R(2, 10), c = R(2, 10); return { q: 'V = ' + a * b * c + ', a = ' + a + ', b = ' + b + ';  c', a: c }; } }
          ],
          quiz: [{ q: 'V = 120, a = 6, b = 5. c = ?', o: ['4', '109', '20'], a: 0 }, { q: 'V = 60, a = 5, c = 3. b = ?', o: ['4', '12', '20'], a: 0 }] },

        { id: 't6', lessons: ch(8), title: L('Kubning qirrasini topish', 'Нахождение ребра куба', 'Finding a cube’s edge'),
          keys: ['V = a³', '2³ = 8, 3³ = 27, 4³ = 64, 5³ = 125'],
          scene: [{ obj: 'cube', n: 8, color: 'yellow' }],
          explain: L('Kub hajmi V = a · a · a = a³. Hajm ma’lum bo‘lsa, qirrani tanlab topamiz: qaysi son o‘zini o‘ziga uch marta ko‘paytirsa V chiqadi? V = 64 → a = 4, chunki 4 · 4 · 4 = 64.',
            'Объём куба V = a · a · a = a³. Если объём известен, ребро подбираем: какое число, умноженное само на себя три раза, даёт V? V = 64 → a = 4, ведь 4 · 4 · 4 = 64.',
            'A cube’s volume is V = a · a · a = a³. Given the volume, find the edge by trying: which number times itself three times gives V? V = 64 → a = 4, since 4 · 4 · 4 = 64.'),
          rule: 'V = 64 → a = 4',
          acts: [
            { type: 'drill', title: L('Qirrani toping', 'Найдите ребро', 'Find the edge'), n: 6, make: function (R) { var a = R(1, 12); return { q: 'V = ' + fmt(a * a * a) + ' cm³;  a', a: a }; } },
            { type: 'count3d', title: L('3D: kubdan kub', '3D: куб из кубиков', '3D: a cube of cubes'), make: function (R) { var a = R(2, 3), g = []; for (var i = 0; i < a; i++) g.push({ obj: 'cube', n: a * a, color: ['yellow', 'orange', 'pink'][i] }); return { groups: g, perRow: a, story: L('Katta kub <b>' + a * a * a + '</b> ta kichik kubikdan yasalgan. Uning <u>qirrasida</u> nechta kubik bor?', 'Большой куб собран из <b>' + a * a * a + '</b> кубиков. <u>Сколько кубиков</u> на его ребре?', 'A big cube is built from <b>' + a * a * a + '</b> small cubes. <u>How many cubes</u> along an edge?'), ans: a, unit: PCS }; } }
          ],
          quiz: [{ q: 'V = 125. a = ?', o: ['5', '25', '41'], a: 0 }, { q: 'a = 3. V = ?', o: ['27', '9', '12'], a: 0 }] },

        { id: 't7', lessons: ch(8), title: L('Kuboid va kubning bir yog‘i yuzini topish', 'Площадь грани параллелепипеда и куба', 'Area of one face'),
          keys: ['S = V : h', L('asos yuzi', 'площадь основания', 'base area')],
          scene: [{ obj: 'box', n: 1, color: 'green' }],
          explain: L('Kuboid hajmi = asos yuzi · balandlik. Demak asos yuzi S = V : h. Hajmi 240 cm³, balandligi 8 cm bo‘lsa, asos yuzi 30 cm². Kubning har bir yog‘i yuzi a · a.',
            'Объём параллелепипеда = площадь основания · высота. Значит S = V : h. При объёме 240 см³ и высоте 8 см площадь основания 30 см². Каждая грань куба имеет площадь a · a.',
            'A cuboid’s volume = base area · height, so the base area S = V : h. Volume 240 cm³ and height 8 cm give a 30 cm² base. Each face of a cube has area a · a.'),
          rule: 'V = S · h → S = V : h',
          acts: [
            { type: 'problem', make: function (R) { var S = R(6, 40), h = R(2, 12); return { story: L('Akvarium hajmi <b>' + fmt(S * h * 100) + '</b> cm³, suv balandligi <b>' + h * 10 + '</b> cm. <u>Tubining yuzi</u>?', 'Объём аквариума <b>' + fmt(S * h * 100) + '</b> см³, высота <b>' + h * 10 + '</b> см. <u>Площадь дна</u>?', 'A tank has volume <b>' + fmt(S * h * 100) + '</b> cm³ and height <b>' + h * 10 + '</b> cm. <u>Area of the base</u>?'), expr: [S * h * 100, ':', h * 10, '=', S * 10], ans: S * 10, unit: CM2 }; } },
            { type: 'drill', n: 6, make: function (R) { var a = R(2, 10); return R(0, 1) ? { q: mk(function (l) { return { uz: 'Kub, V = ', ru: 'Куб, V = ', en: 'Cube, V = ' }[l] + a * a * a + '; ' + { uz: 'bir yog‘i yuzi', ru: 'площадь грани', en: 'face area' }[l]; }), a: a * a } : { q: mk(function (l) { return { uz: 'Kub, a = ', ru: 'Куб, a = ', en: 'Cube, a = ' }[l] + a + '; ' + { uz: 'sirt yuzi', ru: 'площадь поверхности', en: 'surface area' }[l]; }), a: 6 * a * a }; } }
          ],
          quiz: [{ q: 'V = 240, h = 8. S = ?', o: ['30', '232', '1920'], a: 0 }, { q: L('Kub, a = 4. Bir yog‘i yuzi?', 'Куб, a = 4. Площадь грани?', 'Cube, a = 4. Face area?'), o: ['16', '64', '96'], a: 0 }] },

        { id: 't8', lessons: ch(8), title: L('Hajmga doir matnli masalalar', 'Задачи на объём', 'Volume word problems'),
          keys: ['1 l = 1 000 cm³', L('suv sathi', 'уровень воды', 'water level')],
          scene: [{ obj: 'bucket', n: 2, color: 'blue' }, { obj: 'box', n: 1, color: 'cyan' }],
          explain: L('Akvarium tubi 50 × 40 cm. Unga 30 l (30 000 cm³) suv quyilsa, suv balandligi 30 000 : 2 000 = 15 cm bo‘ladi. Litrni cm³ ga o‘tkazishni unutmang!',
            'Дно аквариума 50 × 40 см. Если налить 30 л (30 000 см³), уровень воды будет 30 000 : 2 000 = 15 см. Не забывайте переводить литры в см³!',
            'A tank’s base is 50 × 40 cm. Pour in 30 l (30 000 cm³) and the water is 30 000 : 2 000 = 15 cm deep. Remember to convert litres to cm³!'),
          rule: L('h = V : (a · b)', 'h = V : (a · b)', 'h = V : (a · b)'),
          acts: [
            { type: 'problem', make: function (R) { var a = R(3, 6) * 10, b = R(2, 4) * 10, h = R(5, 20), V = a * b * h; return { story: L('Akvarium tubi <b>' + a + ' × ' + b + '</b> cm. Unga <b>' + r6(V / 1000) + '</b> l (' + fmt(V) + ' cm³) suv quyildi. Suv <u>balandligi</u>?', 'Дно аквариума <b>' + a + ' × ' + b + '</b> см. Налили <b>' + r6(V / 1000) + '</b> л (' + fmt(V) + ' см³) воды. <u>Высота воды</u>?', 'A tank’s base is <b>' + a + ' × ' + b + '</b> cm. <b>' + r6(V / 1000) + '</b> l (' + fmt(V) + ' cm³) of water is poured in. <u>Water depth</u>?'), expr: [V, ':', a * b, '=', h], ans: h, unit: CM }; } },
            { type: 'problem', make: function (R) { var a = R(2, 6), b = R(2, 5), c = R(2, 4), k = R(2, 4); return { story: L('Quti <b>' + a * k + ' × ' + b * k + ' × ' + c * k + '</b> cm. Unga qirrasi <b>' + k + '</b> cm bo‘lgan kubiklar joylanadi. <u>Nechta</u> kubik sig‘adi?', 'Коробка <b>' + a * k + ' × ' + b * k + ' × ' + c * k + '</b> см. В неё кладут кубики с ребром <b>' + k + '</b> см. <u>Сколько</u> кубиков поместится?', 'A box is <b>' + a * k + ' × ' + b * k + ' × ' + c * k + '</b> cm. It is filled with cubes of edge <b>' + k + '</b> cm. <u>How many</u> cubes fit?'), expr: [a, '·', b, '·', c, '=', a * b * c], ans: a * b * c, unit: PCS }; } }
          ],
          quiz: [{ q: L('Tub 50 × 40, 30 l suv. Balandlik?', 'Дно 50 × 40, 30 л. Высота?', 'Base 50 × 40, 30 l. Depth?'), o: ['15', '150', L('1,5', '1,5', '1.5')], a: 0 }, { q: '2 l = ? cm³', o: ['2000', '200', '20'], a: 0 }] }
      ] },

      { id: 's3', title: L('Doiraviy diagrammalar', 'Круговые диаграммы', 'Pie charts'), icon: '🥧', color: 'pink', topics: [
        { id: 't9', lessons: ch(9), title: L('Ma’lumotlarni doiraviy diagrammada taqdim etish', 'Представление данных на круговой диаграмме', 'Showing data in a pie chart'),
          keys: ['100% = 360°', '1% = 3,6°', '25% = 90°'],
          scene: [{ obj: 'cylinder', n: 1, color: 'pink' }],
          explain: L('Doiraviy diagrammada butun doira — 100%, ya’ni 360°. Har bir bo‘lak burchagi = foiz · 3,6°. 25% — 90° (chorak), 50% — 180° (yarim). Avval har bir qismning foizini toping: qism : jami · 100.',
            'На круговой диаграмме весь круг — 100%, то есть 360°. Угол сектора = процент · 3,6°. 25% — 90° (четверть), 50% — 180° (половина). Сначала найдите процент каждой части: часть : всего · 100.',
            'In a pie chart the whole circle is 100%, i.e. 360°. Each slice’s angle = percent · 3.6°. 25% is 90° (a quarter), 50% is 180° (a half). First find each part’s percentage: part : total · 100.'),
          rule: L('burchak = foiz · 3,6°', 'угол = процент · 3,6°', 'angle = percent · 3.6°'),
          acts: [
            { type: 'drill', title: L('Sektor burchagi', 'Угол сектора', 'Slice angle'), n: 6, make: function (R) { var p = pick([5, 10, 15, 20, 25, 30, 40, 50, 75]); return { q: p + '% → °', a: r6(p * 3.6) }; } },
            { type: 'problem', title: L('Foizni toping', 'Найдите процент', 'Find the percent'), make: function (R) { var T = pick([20, 40, 50, 200, 400]), p = pick([10, 20, 25, 30, 40, 50]), x = T * p / 100; return { story: L('Sinfdagi <b>' + T + '</b> o‘quvchidan <b>' + x + '</b> nafari futbolni yoqtiradi. Diagrammada bu <u>necha foiz</u>?', 'Из <b>' + T + '</b> учеников <b>' + x + '</b> любят футбол. <u>Сколько процентов</u> это на диаграмме?', 'Of <b>' + T + '</b> pupils, <b>' + x + '</b> like football. <u>What percent</u> is that on the chart?'), expr: [x, ':', T, '·', 100, '=', p], ans: p, unit: '%' }; } }
          ],
          quiz: [{ q: '25% = ?°', o: ['90', '25', '45'], a: 0 }, { q: '180° = ?%', o: ['50', '18', '180'], a: 0 }] },

        { id: 't10', lessons: ch(9), title: L('Doiraviy diagrammani o‘qish va talqin qilish', 'Чтение круговых диаграмм', 'Reading pie charts'),
          keys: [L('qism = jami : 100 · foiz', 'часть = всего : 100 · процент', 'part = total : 100 · percent')],
          scene: [{ obj: 'ball', n: 3, color: 'yellow' }],
          explain: L('Diagrammadan miqdorni topish: jami 200 o‘quvchi, «shaxmat» bo‘lagi 15% — demak 200 : 100 · 15 = 30 o‘quvchi. Eng katta bo‘lak — eng ko‘p tanlangan javob.',
            'Находим количество по диаграмме: всего 200 учеников, сектор «шахматы» — 15%, значит 200 : 100 · 15 = 30 учеников. Самый большой сектор — самый популярный ответ.',
            'Reading a chart: 200 pupils in all and the “chess” slice is 15%, so 200 : 100 · 15 = 30 pupils. The biggest slice is the most popular answer.'),
          rule: L('qism = jami : 100 · p', 'часть = всего : 100 · p', 'part = total : 100 · p'),
          acts: [
            { type: 'problem', make: function (R) { var sets = [[40, 25, 20, 15], [50, 25, 15, 10], [35, 30, 20, 15], [45, 30, 15, 10]], ps = pick(sets), T = pick([200, 400, 600, 800, 1000]), k = R(0, 3);
              var NM = { uz: ['futbol', 'shaxmat', 'suzish', 'tennis'], ru: ['футбол', 'шахматы', 'плавание', 'теннис'], en: ['football', 'chess', 'swimming', 'tennis'] };
              return { story: mk(function (l) { return { uz: '<b>' + T + '</b> o‘quvchi sevimli sport turini tanladi. <u>' + NM.uz[k] + '</u>ni nechta o‘quvchi tanlagan?', ru: '<b>' + T + '</b> учеников выбрали любимый спорт. <u>Сколько</u> выбрали «' + NM.ru[k] + '»?', en: '<b>' + T + '</b> pupils chose a favourite sport. <u>How many</u> chose ' + NM.en[k] + '?' }[l] + pieChart(ps.map(function (p, i) { return [p, NM[l][i]]; })); }), expr: [T, ':', 100, '·', ps[k], '=', T * ps[k] / 100], ans: T * ps[k] / 100, unit: L('nafar', 'учеников', 'pupils') }; } },
            { type: 'choose', title: L('Eng katta bo‘lak', 'Самый большой сектор', 'Biggest slice'), icon: '🥧', make: function (R) { var ps = pick([[15, 45, 25, 15], [20, 30, 10, 40], [50, 20, 20, 10]]), NM = { uz: ['olma', 'banan', 'uzum', 'nok'], ru: ['яблоко', 'банан', 'виноград', 'груша'], en: ['apple', 'banana', 'grapes', 'pear'] }, best = ps.indexOf(Math.max.apply(null, ps)), others = [0, 1, 2, 3].filter(function (i) { return i !== best; }).slice(0, 2);
              return choice(L('Qaysi meva eng ko‘p tanlangan?', 'Какой фрукт выбрали чаще всего?', 'Which fruit was chosen most?'), [best].concat(others).map(function (i) { return L(NM.uz[i], NM.ru[i], NM.en[i]); }), 0, mk(function (l) { return pieChart(ps.map(function (p, i) { return [p, NM[l][i]]; })); })); } }
          ],
          quiz: [{ q: L('Jami 200, bo‘lak 15%. Nechta?', 'Всего 200, сектор 15%. Сколько?', 'Total 200, slice 15%. How many?'), o: ['30', '15', '185'], a: 0 }, { q: L('Butun doira necha foiz?', 'Весь круг — сколько процентов?', 'The whole circle is what percent?'), o: ['100', '360', '50'], a: 0 }] }
      ] },

      { id: 's4', title: L('Fazoviy jismlar va yoyilmalar', 'Пространственные тела и развёртки', 'Solids and nets'), icon: '🔷', color: 'violet', topics: [
        { id: 't11', lessons: ch(10), title: L('Konus, silindr, prizma va piramida', 'Конус, цилиндр, призма и пирамида', 'Cones, cylinders, prisms and pyramids'),
          keys: [L('yoq', 'грань', 'face'), L('qirra', 'ребро', 'edge'), L('uch', 'вершина', 'vertex')],
          scene: [{ obj: 'cone', n: 1, color: 'yellow' }, { obj: 'cylinder', n: 1, color: 'green' }, { obj: 'pyramid', n: 1, color: 'pink' }],
          explain: L('<b>Prizma</b> — ikkita bir xil asos va to‘rtburchak yon yoqlar. <b>Piramida</b> — bitta asos va bir uchda tutashgan uchburchak yoqlar. <b>Silindr</b> — ikkita doira asos, <b>konus</b> — bitta doira asos va uch. Kubda 6 yoq, 12 qirra, 8 uch bor.',
            '<b>Призма</b> — два одинаковых основания и прямоугольные боковые грани. <b>Пирамида</b> — одно основание и треугольные грани, сходящиеся в вершине. <b>Цилиндр</b> — два круга-основания, <b>конус</b> — один круг и вершина. У куба 6 граней, 12 рёбер, 8 вершин.',
            'A <b>prism</b> has two identical bases and rectangular sides. A <b>pyramid</b> has one base and triangular faces meeting at a point. A <b>cylinder</b> has two circular bases; a <b>cone</b> has one circle and an apex. A cube has 6 faces, 12 edges and 8 vertices.'),
          rule: L('kub: 6 yoq, 12 qirra, 8 uch', 'куб: 6 граней, 12 рёбер, 8 вершин', 'cube: 6 faces, 12 edges, 8 vertices'),
          acts: [
            { type: 'drill', n: 6, make: function (R) { var T = pick([['cube', 6, 12, 8], ['prism', 5, 9, 6], ['pyramid', 5, 8, 5]]), k = R(1, 3), W = { uz: ['', 'yoqlari', 'qirralari', 'uchlari'], ru: ['', 'граней', 'рёбер', 'вершин'], en: ['', 'faces', 'edges', 'vertices'] };
              return { q: mk(function (l) { return SOL[T[0]][l] + ' — ' + W[l][k]; }), a: T[k] }; } },
            { type: 'choose', title: L('Qaysi jism?', 'Какое тело?', 'Which solid?'), icon: '🔷', make: function () { return pick([
              choice(L('Ikkita doira asosi bor, uchi yo‘q.', 'Два круглых основания, вершин нет.', 'Two circular bases, no apex.'), [SOL.cylinder, SOL.cone, SOL.prism], 0),
              choice(L('Bitta doira asosi va bitta uchi bor.', 'Одно круглое основание и одна вершина.', 'One circular base and one apex.'), [SOL.cone, SOL.cylinder, SOL.pyramid], 0),
              choice(L('Kvadrat asos va 4 ta uchburchak yoq.', 'Квадратное основание и 4 треугольные грани.', 'A square base and 4 triangular faces.'), [SOL.pyramid, SOL.prism, SOL.cube], 0),
              choice(L('Ikkita uchburchak asos va 3 ta to‘rtburchak yoq.', 'Два треугольных основания и 3 прямоугольные грани.', 'Two triangular bases and 3 rectangular faces.'), [SOL.prism, SOL.pyramid, SOL.cone], 0)]); } }
          ],
          quiz: [{ q: L('Kubning qirralari soni?', 'Сколько рёбер у куба?', 'How many edges does a cube have?'), o: ['12', '6', '8'], a: 0 }, { q: L('Uchburchakli prizmaning yoqlari?', 'Граней у треугольной призмы?', 'Faces of a triangular prism?'), o: ['5', '6', '3'], a: 0 }] },

        { id: 't12', lessons: ch(10), title: L('Uch o‘lchamli chizmalar va yoyilmalar', 'Объёмные рисунки и развёртки', '3D drawings and nets'),
          keys: [L('yoyilma', 'развёртка', 'net'), L('buklash', 'сгибание', 'folding')],
          scene: [{ obj: 'cube', n: 1, color: 'blue' }, { obj: 'pyramid', n: 1, color: 'orange' }, { obj: 'cone', n: 1, color: 'green' }],
          explain: L('Jismni qirralari bo‘ylab qirqib, tekislikka yoysak — <b>yoyilma</b> hosil bo‘ladi. Kub yoyilmasi — 6 ta kvadrat, silindrniki — to‘g‘ri to‘rtburchak va 2 doira, konusniki — doira bo‘lagi (sektor) va doira.',
            'Если разрезать тело по рёбрам и разложить на плоскости, получится <b>развёртка</b>. Развёртка куба — 6 квадратов, цилиндра — прямоугольник и 2 круга, конуса — сектор и круг.',
            'Cut a solid along its edges and lay it flat to get a <b>net</b>. A cube’s net is 6 squares; a cylinder’s is a rectangle and 2 circles; a cone’s is a sector and a circle.'),
          rule: L('kub yoyilmasi = 6 kvadrat', 'развёртка куба = 6 квадратов', 'cube net = 6 squares'),
          acts: [
            { type: 'choose', title: L('Bu qaysi jismning yoyilmasi?', 'Развёртка какого тела?', 'Whose net is this?'), icon: '✂️', make: function (R) { var keys = ['cube', 'cylinder', 'cone', 'pyramid', 'prism'], k = pick(keys), others = keys.filter(function (x) { return x !== k; }).sort(function () { return R(0, 1) - 0.5; }).slice(0, 2);
              return choice(L('Yoyilmani buklasak, qaysi jism hosil bo‘ladi?', 'Какое тело получится, если сложить развёртку?', 'Which solid does this net fold into?'), [k].concat(others).map(function (x) { return SOL[x]; }), 0, fig(NETS[k], 300, 152)); } },
            { type: 'drill', title: L('Yoyilma yuzi', 'Площадь развёртки', 'Net area'), n: 5, make: function (R) { var a = R(2, 9), b = R(2, 7), c = R(2, 6); return R(0, 1) ? { q: mk(function (l) { return { uz: 'Kub yoyilmasi yuzi, a = ', ru: 'Площадь развёртки куба, a = ', en: 'Cube net area, a = ' }[l] + a; }), a: 6 * a * a } : { q: mk(function (l) { return { uz: 'Kuboid yoyilmasi yuzi, ', ru: 'Площадь развёртки параллелепипеда, ', en: 'Cuboid net area, ' }[l] + a + ' × ' + b + ' × ' + c; }), a: 2 * (a * b + b * c + a * c) }; } }
          ],
          quiz: [{ q: L('Kub yoyilmasida nechta kvadrat?', 'Сколько квадратов в развёртке куба?', 'How many squares in a cube net?'), o: ['6', '4', '8'], a: 0 }, { q: L('Silindr yoyilmasida nechta doira?', 'Сколько кругов в развёртке цилиндра?', 'Circles in a cylinder net?'), o: ['2', '1', '0'], a: 0 }] }
      ] }
    ]
  };
  C.addPart(part2);
})(this);
