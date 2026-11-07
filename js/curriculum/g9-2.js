// Nuvemath — 9-sinf, Geometriya (manba: B. Xaydarov, E. Sariqov, A. Qo‘chqorov. «Geometriya. 9-sinf», Toshkent, 2019, 4-nashr).
// Boblar va mavzular tartibi darslikdan olingan; tushuntirishlar, topshiriqlar va chizmalar Nuvemath uchun qayta yozilgan.
(function (root) {
  'use strict';
  var C = root.NMCurriculum, H = C.H, L = H.L, mk = H.mk, choice = H.choice, pick = H.pick;
  var r6 = H.r6;
  var CM = H.CM, CM2 = L('cm²', 'см²', 'cm²'), DEG = L('°', '°', '°'), PI = 3.14;
  function ch(n) { return L(n + '-bob', 'Глава ' + n, 'Chapter ' + n); }
  function ns(x) { return x < 0 ? '−' + (-x) : String(x); }
  function fig(inner, w, h) { return '<div class="kd-fig"><svg viewBox="0 0 ' + (w || 300) + ' ' + (h || 180) + '">' + inner + '</svg></div>'; }
  var TX = 'font-size="15" font-weight="700" fill="currentColor" text-anchor="middle"', Q = ' style="fill:#ff6b8b"';
  function lab(v) { return v === '?' ? Q : ''; }
  // ikki o'xshash uchburchak
  function simFig(a, b, A, B) { return fig('<polygon points="20,150 110,150 50,90" fill="rgba(79,141,255,.15)" stroke="#4f8dff" stroke-width="3"/><polygon points="140,150 290,150 190,50" fill="rgba(255,107,139,.14)" stroke="#ff6b8b" stroke-width="3"/>' +
    '<text x="65" y="170" ' + TX + '>' + a + '</text><text x="20" y="115" ' + TX + '>' + b + '</text><text x="215" y="170" ' + TX + lab(A) + '>' + A + '</text><text x="150" y="95" ' + TX + lab(B) + '>' + B + '</text>', 300, 180); }
  // uchburchak: ikki tomon va orasidagi burchak
  function sasFig(a, b, g, c) { return fig('<polygon points="30,150 270,150 110,40" fill="rgba(79,141,255,.15)" stroke="#4f8dff" stroke-width="3" stroke-linejoin="round"/>' +
    '<text x="150" y="172" ' + TX + '>' + a + '</text><text x="55" y="95" ' + TX + '>' + b + '</text><text x="62" y="142" ' + TX + '>' + g + '</text><text x="205" y="88" ' + TX + lab(c) + '>' + c + '</text>', 300, 180); }
  // 60° va 120° burchakli butun tomonli uchburchaklar: [a, b, c]
  var T60 = [[3, 8, 7], [5, 8, 7], [7, 15, 13], [8, 15, 13], [5, 21, 19], [16, 21, 19], [7, 40, 37], [33, 40, 37]];
  var T120 = [[3, 5, 7], [7, 8, 13], [5, 16, 19], [11, 24, 31], [7, 33, 37]];
  var TRIPLES = [[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25], [6, 8, 10], [9, 12, 15]];

  var part2 = {
    grade: 9, part: 2, edition: L('Geometriya, 2019-yil nashri', 'Геометрия, издание 2019 г.', 'Geometry, 2019 edition'),
    title: L('Geometriya: o‘xshashlik, almashtirishlar, trigonometriya va aylana', 'Геометрия: подобие, преобразования, тригонометрия и окружность', 'Geometry: similarity, transformations, trigonometry and circles'),
    book: L('B. Xaydarov, E. Sariqov, A. Qo‘chqorov. Geometriya, 9-sinf (Toshkent, 2019)', 'Б. Хайдаров, Э. Сарыков, А. Кучкаров. Геометрия, 9 класс (Ташкент, 2019)', 'B. Khaydarov, E. Sarikov, A. Kuchkarov. Geometry, Grade 9 (Tashkent, 2019)'),
    intro: L('Planimetriya kursining yakuni: o‘xshash uchburchaklar va ularning alomatlari, tekislikdagi almashtirishlar va gomotetiya, uchburchak trigonometriyasi (sinuslar va kosinuslar teoremalari), muntazam ko‘pburchaklar, aylana uzunligi va doira yuzi, proporsional kesmalar.',
      'Завершение курса планиметрии: подобные треугольники и признаки подобия, преобразования плоскости и гомотетия, тригонометрия треугольника (теоремы синусов и косинусов), правильные многоугольники, длина окружности и площадь круга, пропорциональные отрезки.',
      'The end of plane geometry: similar triangles and the similarity tests, transformations and dilations, triangle trigonometry (the sine and cosine rules), regular polygons, circumference and the area of a circle, and proportional segments.'),
    sections: [
      { id: 's1', title: L('Takrorlash va o‘xshashlik', 'Повторение и подобие', 'Review and similarity'), icon: '🔺', color: 'blue', topics: [
        { id: 't1', lessons: ch(1), title: L('8-sinfni takrorlash: Pifagor teoremasi va yuzlar', 'Повторение 8 класса: теорема Пифагора и площади', 'Review: Pythagoras and areas'),
          keys: ['a² + b² = c²', 'S = ½ a h', 'S = (a + b)/2 · h'],
          scene: [{ obj: 'pyramid', n: 1, color: 'blue' }, { obj: 'box', n: 1, color: 'orange' }],
          explain: L('Takrorlaymiz: to‘g‘ri burchakli uchburchakda c² = a² + b²; uchburchak yuzi ½ah, parallelogrammniki ah, trapetsiyaniki (a + b)h/2, rombniki d₁d₂/2. Bu formulalar 9-sinf masalalarining asosiy quroli.',
            'Повторим: в прямоугольном треугольнике c² = a² + b²; площадь треугольника ½ah, параллелограмма ah, трапеции (a + b)h/2, ромба d₁d₂/2. Эти формулы — основной инструмент задач 9 класса.',
            'Review: in a right triangle c² = a² + b²; areas are ½ah for a triangle, ah for a parallelogram, (a + b)h/2 for a trapezium and d₁d₂/2 for a rhombus. These are the main tools for grade 9 problems.'),
          rule: 'c² = a² + b²',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var t = pick(TRIPLES), a = R(3, 15), h = R(1, 8) * 2, k = R(0, 2); return [{ q: 'a = ' + t[0] + ', b = ' + t[1] + ';  c', a: t[2] }, { q: 'S△, a = ' + a + ', h = ' + h, a: a * h / 2 }, { q: 'c = ' + t[2] + ', a = ' + t[0] + ';  b', a: t[1] }][k]; } },
            { type: 'problem', title: L('Trapetsiya yuzi', 'Площадь трапеции', 'Trapezium area'), make: function (R) { var b = R(3, 10), a = b + 2 * R(1, 6), h = R(2, 10); return { story: L('Trapetsiya asoslari <b>' + a + '</b> va <b>' + b + '</b> cm, balandligi <b>' + h + '</b> cm. <u>Yuzi</u>?', 'Основания трапеции <b>' + a + '</b> и <b>' + b + '</b> см, высота <b>' + h + '</b> см. <u>Площадь</u>?', 'A trapezium has bases <b>' + a + '</b> and <b>' + b + '</b> cm and height <b>' + h + '</b> cm. <u>Area</u>?'), expr: [a, '+', b, ':', 2, '·', h, '=', (a + b) / 2 * h], ans: (a + b) / 2 * h, unit: CM2 }; } }
          ],
          quiz: [{ q: L('Katetlar 6 va 8. Gipotenuza?', 'Катеты 6 и 8. Гипотенуза?', 'Legs 6 and 8. Hypotenuse?'), o: ['10', '14', '48'], a: 0 }, { q: L('Romb diagonallari 10 va 6. Yuz?', 'Диагонали ромба 10 и 6. Площадь?', 'Rhombus diagonals 10 and 6. Area?'), o: ['30', '60', '16'], a: 0 }] },

        { id: 't2', lessons: ch(2), title: L('O‘xshash ko‘pburchaklar va uchburchaklar', 'Подобные многоугольники и треугольники', 'Similar polygons and triangles'),
          keys: [L('o‘xshashlik koeffitsiyenti k', 'коэффициент подобия k', 'scale factor k'), 'P₁/P₂ = k', 'S₁/S₂ = k²'],
          scene: [{ obj: 'pyramid', n: 2, color: 'violet' }],
          explain: L('Burchaklari mos ravishda teng va mos tomonlari proporsional ko‘pburchaklar — <b>o‘xshash</b>. Tomonlar nisbati k — o‘xshashlik koeffitsiyenti. Perimetrlar nisbati ham k ga, yuzlar nisbati esa <b>k²</b> ga teng: tomonlar 3 marta katta bo‘lsa, yuz 9 marta katta.',
            'Многоугольники с соответственно равными углами и пропорциональными сторонами — <b>подобные</b>. Отношение сторон k — коэффициент подобия. Отношение периметров тоже k, а площадей — <b>k²</b>: стороны больше в 3 раза — площадь больше в 9 раз.',
            'Polygons with equal corresponding angles and proportional sides are <b>similar</b>. The ratio of sides k is the scale factor. Perimeters are in ratio k, but areas are in ratio <b>k²</b>: sides 3 times bigger means area 9 times bigger.'),
          rule: 'S₁ / S₂ = k²',
          acts: [
            { type: 'problem', title: L('Noma’lum tomon', 'Неизвестная сторона', 'Missing side'), make: function (R) { var a = R(2, 8), b = R(2, 8), k = R(2, 4); return { story: mk(function (l) { return { uz: 'Uchburchaklar o‘xshash, k = ' + k + '. <u>?</u> tomonni toping.', ru: 'Треугольники подобны, k = ' + k + '. Найдите сторону <u>?</u>.', en: 'The triangles are similar with k = ' + k + '. Find side <u>?</u>.' }[l] + simFig(a, b, a * k, '?'); }), expr: [b, '·', k, '=', b * k], ans: b * k, unit: CM }; } },
            { type: 'drill', n: 6, make: function (R) { var k = R(2, 5), S = R(2, 9), P = R(5, 20); return pick([{ q: 'k = ' + k + ', S₁ = ' + S + ';  S₂', a: S * k * k }, { q: 'k = ' + k + ', P₁ = ' + P + ';  P₂', a: P * k }, { q: 'S₂ : S₁ = ' + k * k + ';  k', a: k }]); } }
          ],
          quiz: [{ q: L('k = 3. Yuzlar nisbati?', 'k = 3. Отношение площадей?', 'k = 3. Ratio of areas?'), o: ['9', '3', '6'], a: 0 }, { q: L('O‘xshash uchburchaklarda burchaklar...', 'В подобных треугольниках углы...', 'In similar triangles the angles are...'), o: [L('teng', 'равны', 'equal'), L('proporsional', 'пропорциональны', 'proportional'), L('k marta katta', 'в k раз больше', 'k times bigger')], a: 0 }] },

        { id: 't3', lessons: ch(2), title: L('Uchburchaklar o‘xshashligining alomatlari', 'Признаки подобия треугольников', 'Tests for similar triangles'),
          keys: [L('BB: ikki burchak', 'УУ: два угла', 'AA: two angles'), L('TBT: ikki tomon va burchak', 'СУС: две стороны и угол', 'SAS'), L('TTT: uch tomon', 'ССС: три стороны', 'SSS')],
          scene: [{ obj: 'pyramid', n: 3, color: 'orange' }],
          explain: L('Uchburchaklar o‘xshash, agar: 1) ikki burchagi mos ravishda teng bo‘lsa; 2) ikki tomoni proporsional va ular orasidagi burchaklar teng bo‘lsa; 3) uchala tomoni proporsional bo‘lsa. Eng ko‘p ishlatiladigani — birinchisi: masalan, parallel to‘g‘ri chiziq uchburchakdan o‘xshash uchburchak kesib oladi.',
            'Треугольники подобны, если: 1) два угла соответственно равны; 2) две стороны пропорциональны и углы между ними равны; 3) три стороны пропорциональны. Чаще всего применяют первый: например, прямая, параллельная стороне, отсекает подобный треугольник.',
            'Triangles are similar if: 1) two angles match; 2) two sides are proportional with equal included angles; 3) all three sides are proportional. The first is used most: e.g. a line parallel to a side cuts off a similar triangle.'),
          rule: L('BB · TBT · TTT', 'УУ · СУС · ССС', 'AA · SAS · SSS'),
          acts: [
            { type: 'choose', title: L('O‘xshashmi?', 'Подобны?', 'Similar?'), icon: '🔺', make: function (R) { var s = pick([[3, 4, 5], [2, 3, 4], [4, 5, 6], [5, 7, 8]]), k = R(2, 3), ok = R(0, 1), t = s.map(function (x) { return x * k; }); if (!ok) t[2] += 1; return choice(s.join(', ') + ' ' + '&amp;' + ' ' + t.join(', '), [L('o‘xshash', 'подобны', 'similar'), L('o‘xshash emas', 'не подобны', 'not similar')], ok ? 0 : 1); } },
            { type: 'drill', title: L('Uchinchi burchak', 'Третий угол', 'Third angle'), n: 5, make: function (R) { var a = R(3, 8) * 10, b = R(3, 8) * 10; return { q: mk(function (l) { return { uz: '△ABC ~ △MNK, ∠A = ', ru: '△ABC ~ △MNK, ∠A = ', en: '△ABC ~ △MNK, ∠A = ' }[l] + a + '°, ∠B = ' + b + '°;  ∠K'; }), a: 180 - a - b }; } }
          ],
          quiz: [{ q: L('3, 4, 5 va 6, 8, 10 — o‘xshashmi?', '3, 4, 5 и 6, 8, 10 — подобны?', '3, 4, 5 and 6, 8, 10 — similar?'), o: [L('ha', 'да', 'yes'), L('yo‘q', 'нет', 'no')], a: 0 }, { q: L('Ikki burchagi teng uchburchaklar...', 'Треугольники с двумя равными углами...', 'Triangles with two equal angles are...'), o: [L('o‘xshash', 'подобны', 'similar'), L('teng', 'равны', 'congruent'), L('to‘g‘ri burchakli', 'прямоугольные', 'right-angled')], a: 0 }] },

        { id: 't4', lessons: ch(2), title: L('To‘g‘ri burchakli uchburchaklar o‘xshashligi. Tatbiqlar', 'Подобие прямоугольных треугольников. Применения', 'Similar right triangles. Applications'),
          keys: [L('bitta o‘tkir burchak', 'один острый угол', 'one acute angle'), L('soya usuli', 'метод тени', 'shadow method')],
          scene: [{ obj: 'pyramid', n: 1, color: 'green' }, { obj: 'rod', n: 2, color: 'yellow' }],
          explain: L('To‘g‘ri burchakli uchburchaklar o‘xshash bo‘lishi uchun bitta o‘tkir burchagi teng bo‘lishi yetarli. Bu balandlikni o‘lchashda qo‘l keladi: 2 m lik tayoqning soyasi 3 m, daraxt soyasi 15 m bo‘lsa, daraxt balandligi 2 · 15/3 = 10 m. Fales piramida balandligini shunday o‘lchagan.',
            'Для подобия прямоугольных треугольников достаточно равенства одного острого угла. Это помогает измерять высоту: тень двухметрового шеста 3 м, тень дерева 15 м — высота дерева 2 · 15/3 = 10 м. Так Фалес измерил высоту пирамиды.',
            'Two right triangles are similar if one acute angle matches. This helps measure heights: a 2 m pole casts a 3 m shadow and a tree casts 15 m, so the tree is 2 · 15/3 = 10 m tall. Thales measured a pyramid this way.'),
          rule: 'h₁ / s₁ = h₂ / s₂',
          acts: [
            { type: 'problem', title: L('Soya usuli', 'Метод тени', 'Shadow method'), make: function (R) { var h = R(1, 3), s = R(2, 4), k = R(3, 10); return { story: L('<b>' + h + '</b> m lik tayoq soyasi <b>' + s + '</b> m. Shu payt minora soyasi <b>' + s * k + '</b> m. Minora <u>balandligi</u>?', 'Тень шеста высотой <b>' + h + '</b> м — <b>' + s + '</b> м. Тень башни в то же время — <b>' + s * k + '</b> м. <u>Высота башни</u>?', 'A <b>' + h + '</b> m pole casts a <b>' + s + '</b> m shadow; a tower casts <b>' + s * k + '</b> m at the same time. <u>Tower height</u>?'), expr: [s * k, ':', s, '·', h, '=', h * k], ans: h * k, unit: L('m', 'м', 'm') }; } },
            { type: 'choose', icon: '📐', make: function () { return pick([
              choice(L('To‘g‘ri burchakli uchburchaklar o‘xshash bo‘lishi uchun yetarli:', 'Для подобия прямоугольных треугольников достаточно:', 'Two right triangles are similar if:'), [L('bitta o‘tkir burchak teng', 'равен один острый угол', 'one acute angle matches'), L('bitta tomon teng', 'равна одна сторона', 'one side matches'), L('gipotenuzalar teng', 'равны гипотенузы', 'the hypotenuses match')], 0),
              choice(L('Katetlar proporsional bo‘lsa, uchburchaklar...', 'Если катеты пропорциональны, треугольники...', 'If the legs are proportional, the triangles are...'), [L('o‘xshash', 'подобны', 'similar'), L('teng', 'равны', 'congruent'), L('aniqlab bo‘lmaydi', 'неизвестно', 'unknown')], 0)]); } }
          ],
          quiz: [{ q: L('Tayoq 2 m, soyasi 3 m; daraxt soyasi 15 m. Balandlik?', 'Шест 2 м, тень 3 м; тень дерева 15 м. Высота?', 'Pole 2 m, shadow 3 m; tree shadow 15 m. Height?'), o: ['10', '22,5', '7,5'], a: 0 }, { q: L('Piramida balandligini soya bilan kim o‘lchagan?', 'Кто измерил пирамиду по тени?', 'Who measured a pyramid by its shadow?'), o: [L('Fales', 'Фалес', 'Thales'), L('Arximed', 'Архимед', 'Archimedes'), L('Nyuton', 'Ньютон', 'Newton')], a: 0 }] }
      ] },

      { id: 's2', title: L('Tekislikda geometrik almashtirishlar', 'Преобразования плоскости', 'Transformations of the plane'), icon: '🔄', color: 'violet', topics: [
        { id: 't5', lessons: ch(3), title: L('Harakat va parallel ko‘chirish', 'Движение и параллельный перенос', 'Isometries and translations'),
          keys: [L('masofa saqlanadi', 'расстояния сохраняются', 'distances are kept'), '(x; y) → (x + a; y + b)'],
          scene: [{ obj: 'drone', n: 2, color: 'violet' }],
          explain: L('Nuqtalar orasidagi masofani saqlaydigan almashtirish — <b>harakat</b>; u har qanday shaklni o‘ziga teng shaklga o‘tkazadi. <b>Parallel ko‘chirish</b> — har bir nuqtani bir xil vektorga siljitish: (x; y) → (x + a; y + b).',
            'Преобразование, сохраняющее расстояния между точками, — <b>движение</b>; оно переводит фигуру в равную ей. <b>Параллельный перенос</b> — сдвиг каждой точки на один и тот же вектор: (x; y) → (x + a; y + b).',
            'A transformation that keeps distances between points is an <b>isometry</b>; it maps any figure to a congruent one. A <b>translation</b> moves every point by the same vector: (x; y) → (x + a; y + b).'),
          rule: '(x; y) → (x + a; y + b)',
          acts: [
            { type: 'drill', n: 6, make: function (R) { var x = R(-6, 6), y = R(-6, 6), a = R(-5, 5), b = R(-5, 5); return R(0, 1) ? { q: 'A(' + ns(x) + '; ' + ns(y) + ') → a→(' + ns(a) + '; ' + ns(b) + ');  x′', a: x + a } : { q: 'A(' + ns(x) + '; ' + ns(y) + ') → a→(' + ns(a) + '; ' + ns(b) + ');  y′', a: y + b }; } },
            { type: 'choose', icon: '➡️', make: function () { return pick([
              choice(L('Harakatda nima saqlanadi?', 'Что сохраняется при движении?', 'What does an isometry keep?'), [L('masofalar', 'расстояния', 'distances'), L('faqat yo‘nalish', 'только направление', 'only direction'), L('hech narsa', 'ничего', 'nothing')], 0),
              choice(L('Parallel ko‘chirishda to‘g‘ri chiziq...', 'При параллельном переносе прямая переходит в...', 'A translation maps a line to...'), [L('o‘ziga parallel to‘g‘ri chiziqqa', 'параллельную прямую', 'a parallel line'), L('aylanaga', 'окружность', 'a circle'), L('perpendikulyar chiziqqa', 'перпендикулярную прямую', 'a perpendicular line')], 0)]); } }
          ],
          quiz: [{ q: L('A(2; 3), a→(1; −4). A′?', 'A(2; 3), a→(1; −4). A′?', 'A(2; 3), a→(1; −4). A′?'), o: ['(3; −1)', '(1; 7)', '(2; −12)'], a: 0 }, { q: L('Harakat shaklni ... shaklga o‘tkazadi', 'Движение переводит фигуру в ... фигуру', 'An isometry maps a figure to a ... one'), o: [L('teng', 'равную', 'congruent'), L('kattaroq', 'большую', 'bigger'), L('o‘xshash, lekin kichik', 'подобную меньшую', 'smaller similar')], a: 0 }] },

        { id: 't6', lessons: ch(3), title: L('O‘q va markaziy simmetriya. Burish', 'Осевая и центральная симметрия. Поворот', 'Reflections and rotations'),
          keys: [L('Ox: (x; −y)', 'Ox: (x; −y)', 'Ox: (x; −y)'), L('O: (−x; −y)', 'O: (−x; −y)', 'O: (−x; −y)'), L('90° burish: (−y; x)', 'поворот на 90°: (−y; x)', '90° turn: (−y; x)')],
          scene: [{ obj: 'star', n: 2, color: 'pink' }],
          explain: L('Simmetriya va burish — harakatlar. Koordinatalarda: Ox ga nisbatan (x; y) → (x; −y); Oy ga nisbatan → (−x; y); koordinata boshiga nisbatan → (−x; −y). Koordinata boshi atrofida 90° ga soat mili teskarisiga burish: (x; y) → (−y; x); 180° burish markaziy simmetriya bilan bir xil.',
            'Симметрия и поворот — движения. В координатах: относительно Ox (x; y) → (x; −y); относительно Oy → (−x; y); относительно начала → (−x; −y). Поворот вокруг начала на 90° против часовой: (x; y) → (−y; x); поворот на 180° совпадает с центральной симметрией.',
            'Reflections and rotations are isometries. In coordinates: about Ox, (x; y) → (x; −y); about Oy → (−x; y); about the origin → (−x; −y). A 90° anticlockwise turn about the origin sends (x; y) → (−y; x); a 180° turn is the same as point symmetry.'),
          rule: '90°: (x; y) → (−y; x)',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var x = R(-7, 7) || 2, y = R(-7, 7) || -3, k = R(0, 3), names = [{ uz: 'Ox; y′', ru: 'Ox; y′', en: 'Ox; y′' }, { uz: 'Oy; x′', ru: 'Oy; x′', en: 'Oy; x′' }, { uz: 'O; x′', ru: 'O; x′', en: 'O; x′' }, { uz: '90° burish; x′', ru: 'поворот 90°; x′', en: '90° turn; x′' }]; return { q: mk(function (l) { return 'A(' + ns(x) + '; ' + ns(y) + '), ' + names[k][l]; }), a: [-y, -x, -x, -y][k] }; } },
            { type: 'choose', icon: '🔄', make: function () { return pick([
              choice(L('180° burish nima bilan bir xil?', 'Поворот на 180° совпадает с...', 'A 180° turn is the same as...'), [L('markaziy simmetriya', 'центральной симметрией', 'point symmetry'), L('o‘q simmetriyasi', 'осевой симметрией', 'a reflection'), L('parallel ko‘chirish', 'параллельным переносом', 'a translation')], 0),
              choice(L('Muntazam oltiburchak qaysi burchakka burilganda o‘ziga o‘tadi?', 'При каком повороте правильный шестиугольник совпадает с собой?', 'Which turn maps a regular hexagon onto itself?'), ['60°', '45°', '90°'], 0)]); } }
          ],
          quiz: [{ q: L('(3; 2) ni 90° ga burish', 'Поворот (3; 2) на 90°', 'Turn (3; 2) by 90°'), o: ['(−2; 3)', '(2; −3)', '(−3; −2)'], a: 0 }, { q: L('(4; −1) ning Ox ga nisbatan simmetrigi', 'Симметрия (4; −1) относительно Ox', 'Reflect (4; −1) in Ox'), o: ['(4; 1)', '(−4; −1)', '(−4; 1)'], a: 0 }] },

        { id: 't7', lessons: ch(3), title: L('Gomotetiya va o‘xshashlik', 'Гомотетия и подобие', 'Dilations and similarity'),
          keys: [L('markaz O, koeffitsiyent k', 'центр O, коэффициент k', 'centre O, factor k'), 'OA′ = |k| · OA'],
          scene: [{ obj: 'cube', n: 3, color: 'green' }],
          explain: L('<b>Gomotetiya</b> — O markazli, k koeffitsiyentli almashtirish: har bir A nuqta OA′ = k · OA vektor shartini qanoatlantiruvchi A′ ga o‘tadi. Koordinata boshi markaz bo‘lsa: (x; y) → (kx; ky). Gomotetiya shaklni o‘xshash shaklga o‘tkazadi; |k| &gt; 1 — kattalashtirish, |k| &lt; 1 — kichraytirish. Proyektor va fotoapparat shunday ishlaydi.',
            '<b>Гомотетия</b> с центром O и коэффициентом k переводит A в A′ так, что OA′ = k · OA (векторы). При центре в начале координат: (x; y) → (kx; ky). Гомотетия переводит фигуру в подобную; |k| &gt; 1 — увеличение, |k| &lt; 1 — уменьшение. Так работают проектор и фотоаппарат.',
            'A <b>dilation</b> with centre O and factor k sends A to A′ with OA′ = k · OA (as vectors). With the origin as centre: (x; y) → (kx; ky). It maps a figure to a similar one: |k| &gt; 1 enlarges, |k| &lt; 1 shrinks. Projectors and cameras work this way.'),
          rule: '(x; y) → (kx; ky)',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var x = R(-6, 6) || 1, y = R(-6, 6) || 2, k = pick([2, 3, -2, -1]), S = R(2, 10); return pick([{ q: 'A(' + ns(x) + '; ' + ns(y) + '), k = ' + ns(k) + ';  x′', a: k * x }, { q: 'A(' + ns(x) + '; ' + ns(y) + '), k = ' + ns(k) + ';  y′', a: k * y }, { q: 'S = ' + S + ', k = ' + ns(k) + ';  S′', a: k * k * S }]); } },
            { type: 'choose', icon: '🔍', make: function (R) { var k = pick([-3, -2, -0.5, 0.5, 2, 3]); return choice(mk(function (l) { return 'k = ' + H.dec(k, l); }), [Math.abs(k) > 1 ? L('kattalashtirish', 'увеличение', 'enlargement') : L('kichraytirish', 'уменьшение', 'reduction'), Math.abs(k) > 1 ? L('kichraytirish', 'уменьшение', 'reduction') : L('kattalashtirish', 'увеличение', 'enlargement'), L('o‘lcham o‘zgarmaydi', 'размер не меняется', 'same size')], 0); } }
          ],
          quiz: [{ q: L('k = 3. Yuz necha marta ortadi?', 'k = 3. Во сколько раз растёт площадь?', 'k = 3. Area grows by?'), o: ['9', '3', '6'], a: 0 }, { q: L('k = −1 gomotetiya — bu...', 'Гомотетия с k = −1 — это...', 'A dilation with k = −1 is...'), o: [L('markaziy simmetriya', 'центральная симметрия', 'point symmetry'), L('parallel ko‘chirish', 'параллельный перенос', 'a translation'), L('o‘q simmetriyasi', 'осевая симметрия', 'a reflection')], a: 0 }] }
      ] },

      { id: 's3', title: L('Uchburchak trigonometriyasi', 'Тригонометрия треугольника', 'Triangle trigonometry'), icon: '📐', color: 'orange', topics: [
        { id: 't8', lessons: ch(4), title: L('0° dan 180° gacha burchakning sinusi, kosinusi va tangensi', 'Синус, косинус и тангенс углов от 0° до 180°', 'Sine, cosine and tangent from 0° to 180°'),
          keys: ['sin(180° − α) = sin α', 'cos(180° − α) = −cos α', 'sin²α + cos²α = 1'],
          scene: [{ obj: 'ball', n: 1, color: 'orange' }],
          explain: L('Yarim birlik aylanadagi M(x; y) nuqta uchun: cos α = x, sin α = y, tg α = y/x. O‘tmas burchakda kosinus manfiy: cos 120° = −1/2, sin 120° = √3/2. Formulalar: sin(180° − α) = sin α, cos(180° − α) = −cos α.',
            'Для точки M(x; y) полуокружности единичного радиуса: cos α = x, sin α = y, tg α = y/x. Для тупого угла косинус отрицателен: cos 120° = −1/2, sin 120° = √3/2. Формулы: sin(180° − α) = sin α, cos(180° − α) = −cos α.',
            'For the point M(x; y) on the unit semicircle: cos α = x, sin α = y, tan α = y/x. For obtuse angles the cosine is negative: cos 120° = −1/2, sin 120° = √3/2. Rules: sin(180° − α) = sin α and cos(180° − α) = −cos α.'),
          rule: 'cos(180° − α) = −cos α',
          acts: [
            { type: 'choose', icon: '📐', make: function (R) { var T = pick([['sin 30°', '1/2', '√3/2', '−1/2'], ['cos 60°', '1/2', '−1/2', '√3/2'], ['cos 120°', '−1/2', '1/2', '−√3/2'], ['sin 150°', '1/2', '−1/2', '√3/2'], ['cos 135°', '−√2/2', '√2/2', '1'], ['sin 90°', '1', '0', '−1'], ['cos 180°', '−1', '1', '0'], ['tg 45°', '1', '√3', '0']]); return choice('<span class="kd-big">' + T[0] + ' = ?</span>', [T[1], T[2], T[3]], 0); } },
            { type: 'drill', n: 5, make: function (R) { var a = R(10, 170); return pick([{ q: 'sin²' + a + '° + cos²' + a + '°', a: 1 }, { q: 'sin ' + a + '° − sin ' + (180 - a) + '°', a: 0 }, { q: 'cos ' + a + '° + cos ' + (180 - a) + '°', a: 0 }]); } }
          ],
          quiz: [{ q: 'cos 120° = ?', o: ['−1/2', '1/2', '√3/2'], a: 0 }, { q: 'sin 150° = ?', o: ['1/2', '−1/2', '√3/2'], a: 0 }] },

        { id: 't9', lessons: ch(4), title: L('Uchburchak yuzini sinus yordamida hisoblash', 'Площадь треугольника через синус', 'Triangle area with the sine'),
          keys: ['S = ½ ab sin C'],
          scene: [{ obj: 'pyramid', n: 1, color: 'yellow' }],
          explain: L('Uchburchak yuzi — ikki tomoni va ular orasidagi burchak sinusi ko‘paytmasining yarmi: S = ½ ab sin C. Isbot: b tomonga balandlik h = a sin C, S = ½ b h. Masalan, a = 8, b = 6, C = 30° → S = ½ · 8 · 6 · ½ = 12. Parallelogramm uchun S = ab sin α.',
            'Площадь треугольника — половина произведения двух сторон на синус угла между ними: S = ½ ab sin C. Доказательство: высота к b равна h = a sin C, S = ½ b h. Например, a = 8, b = 6, C = 30° → S = ½ · 8 · 6 · ½ = 12. Для параллелограмма S = ab sin α.',
            'A triangle’s area is half the product of two sides and the sine of the angle between them: S = ½ ab sin C. Proof: the height to b is h = a sin C, so S = ½ b h. E.g. a = 8, b = 6, C = 30° → S = ½ · 8 · 6 · ½ = 12. For a parallelogram S = ab sin α.'),
          rule: 'S = ½ ab sin C',
          acts: [
            { type: 'problem', make: function (R) { var a = R(2, 12) * 2, b = R(2, 12), g = pick([30, 150]); return { story: mk(function (l) { return { uz: '<u>Yuzni</u> toping (sin ' + g + '° = 1/2).', ru: 'Найдите <u>площадь</u> (sin ' + g + '° = 1/2).', en: 'Find the <u>area</u> (sin ' + g + '° = 1/2).' }[l] + sasFig(a, b, g + '°', ''); }), expr: [a, '·', b, ':', 4, '=', a * b / 4], ans: a * b / 4, unit: CM2 }; } },
            { type: 'drill', n: 5, make: function (R) { var a = R(2, 15), b = R(2, 15); return { q: 'a = ' + a + ', b = ' + b + ', C = 90°;  S', a: a * b / 2 }; } }
          ],
          quiz: [{ q: 'a = 8, b = 6, C = 30°. S = ?', o: ['12', '24', '48'], a: 0 }, { q: L('Parallelogramm, a = 5, b = 4, α = 90°. S?', 'Параллелограмм, a = 5, b = 4, α = 90°. S?', 'Parallelogram, a = 5, b = 4, α = 90°. S?'), o: ['20', '10', '9'], a: 0 }] },

        { id: 't10', lessons: ch(4), title: L('Sinuslar teoremasi', 'Теорема синусов', 'The sine rule'),
          keys: ['a / sin A = b / sin B = c / sin C = 2R'],
          scene: [{ obj: 'pyramid', n: 2, color: 'pink' }],
          explain: L('<b>Sinuslar teoremasi</b>: uchburchak tomonlari qarshisidagi burchaklar sinuslariga proporsional va nisbat tashqi chizilgan aylana diametriga teng: a/sin A = b/sin B = c/sin C = 2R. A = 30° bo‘lsa, a = 2R · ½ = R. Ikki burchak va bir tomon ma’lum bo‘lsa, qolgan tomonlarni topamiz.',
            '<b>Теорема синусов</b>: стороны треугольника пропорциональны синусам противолежащих углов, и отношение равно диаметру описанной окружности: a/sin A = b/sin B = c/sin C = 2R. При A = 30° a = 2R · ½ = R. Зная два угла и сторону, находим остальные стороны.',
            'The <b>sine rule</b>: the sides are proportional to the sines of the opposite angles, and the ratio is the circumcircle’s diameter: a/sin A = b/sin B = c/sin C = 2R. If A = 30°, a = 2R · ½ = R. Given two angles and a side, you can find the other sides.'),
          rule: 'a / sin A = 2R',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var Rr = R(2, 15), A = pick([30, 90, 150]); return R(0, 1) ? { q: 'R = ' + Rr + ', A = ' + A + '°;  a', a: A === 90 ? 2 * Rr : Rr } : { q: 'a = ' + (A === 90 ? 2 * Rr : Rr) + ', A = ' + A + '°;  R', a: Rr }; } },
            { type: 'problem', make: function (R) { var a = R(2, 12); return { story: L('Uchburchakda A = 30°, B = 90°, BC = <b>' + a + '</b> (A qarshisida). <u>AC</u>? (sin 30° = 1/2)', 'В треугольнике A = 30°, B = 90°, BC = <b>' + a + '</b> (против A). <u>AC</u>? (sin 30° = 1/2)', 'A triangle has A = 30°, B = 90° and BC = <b>' + a + '</b> (opposite A). <u>AC</u>? (sin 30° = 1/2)'), expr: [a, ':', 0.5, '=', 2 * a], ans: 2 * a, unit: CM }; } }
          ],
          quiz: [{ q: 'a = 10, A = 30°. 2R = ?', o: ['20', '10', '5'], a: 0 }, { q: L('Sinuslar teoremasidagi 2R — bu...', '2R в теореме синусов — это...', '2R in the sine rule is...'), o: [L('tashqi aylana diametri', 'диаметр описанной окружности', 'the circumcircle’s diameter'), L('ichki aylana radiusi', 'радиус вписанной окружности', 'the inradius'), L('perimetr', 'периметр', 'the perimeter')], a: 0 }] },

        { id: 't11', lessons: ch(4), title: L('Kosinuslar teoremasi va tatbiqlari', 'Теорема косинусов и её применения', 'The cosine rule and its uses'),
          keys: ['c² = a² + b² − 2ab cos C', L('o‘tmas: c² &gt; a² + b²', 'тупоугольный: c² &gt; a² + b²', 'obtuse: c² &gt; a² + b²')],
          scene: [{ obj: 'pyramid', n: 1, color: 'cyan' }],
          explain: L('<b>Kosinuslar teoremasi</b>: c² = a² + b² − 2ab cos C — Pifagor teoremasining umumlashmasi (C = 90° da cos C = 0). C = 60° da c² = a² + b² − ab, C = 120° da c² = a² + b² + ab. Natija: c² &lt; a² + b² — C o‘tkir, &gt; — o‘tmas.',
            '<b>Теорема косинусов</b>: c² = a² + b² − 2ab cos C — обобщение теоремы Пифагора (при C = 90° cos C = 0). При C = 60° c² = a² + b² − ab, при C = 120° c² = a² + b² + ab. Следствие: c² &lt; a² + b² — C острый, &gt; — тупой.',
            'The <b>cosine rule</b>: c² = a² + b² − 2ab cos C — Pythagoras generalised (cos 90° = 0). For C = 60°, c² = a² + b² − ab; for C = 120°, c² = a² + b² + ab. So c² &lt; a² + b² means C is acute and &gt; means obtuse.'),
          rule: 'c² = a² + b² − 2ab cos C',
          acts: [
            { type: 'choose', icon: '📐', make: function (R) { var k = R(0, 1), T = pick(k ? T120 : T60); return choice(mk(function (l) { return { uz: '<u>Uchinchi tomonni</u> toping.', ru: 'Найдите <u>третью сторону</u>.', en: 'Find the <u>third side</u>.' }[l] + sasFig(T[0], T[1], (k ? 120 : 60) + '°', '?'); }), [String(T[2]), String(T[2] + 1), String(T[0] + T[1] + 1)], 0); } },
            { type: 'choose', title: L('Burchak turi', 'Вид угла', 'Angle type'), icon: '∠', make: function (R) { var a = R(3, 9), b = R(3, 9), k = R(0, 2), s = a * a + b * b, c2 = k === 0 ? s - R(1, 10) : k === 1 ? s : s + R(1, 10); return choice('a = ' + a + ', b = ' + b + ', c² = ' + c2 + ' → C?', [L('o‘tkir', 'острый', 'acute'), L('to‘g‘ri', 'прямой', 'right'), L('o‘tmas', 'тупой', 'obtuse')], k); } }
          ],
          quiz: [{ q: 'a = 3, b = 8, C = 60°. c = ?', o: ['7', '11', '√73'], a: 0 }, { q: 'a = 3, b = 5, C = 120°. c = ?', o: ['7', '8', '√34'], a: 0 }] },

        { id: 't12', lessons: ch(4), title: L('Vektorlar orasidagi burchak. Uchburchaklarni yechish', 'Угол между векторами. Решение треугольников', 'Angle between vectors. Solving triangles'),
          keys: ['cos φ = (a→ · b→) / (|a→| |b→|)', L('uchburchakni yechish', 'решение треугольника', 'solving a triangle')],
          scene: [{ obj: 'drone', n: 1, color: 'blue' }, { obj: 'pyramid', n: 1, color: 'orange' }],
          explain: L('Skalyar ko‘paytma ta’rifidan: cos φ = (a→ · b→)/(|a→| |b→|). Masalan, (1; 0) va (1; 1) orasida cos φ = 1/√2, φ = 45°. <b>Uchburchakni yechish</b> — uchta ma’lum element bo‘yicha qolganlarini topish: ikki tomon va burchak — kosinuslar teoremasi; ikki burchak va tomon — sinuslar teoremasi; uch tomon — kosinuslar teoremasi orqali burchaklar.',
            'Из определения скалярного произведения: cos φ = (a→ · b→)/(|a→| |b→|). Например, между (1; 0) и (1; 1) cos φ = 1/√2, φ = 45°. <b>Решить треугольник</b> — по трём известным элементам найти остальные: две стороны и угол — теорема косинусов; два угла и сторона — теорема синусов; три стороны — углы по теореме косинусов.',
            'From the dot product: cos φ = (a→ · b→)/(|a→| |b→|). E.g. between (1; 0) and (1; 1), cos φ = 1/√2 and φ = 45°. <b>Solving a triangle</b> means finding the rest from three known parts: two sides and an angle — the cosine rule; two angles and a side — the sine rule; three sides — angles by the cosine rule.'),
          rule: 'cos φ = (a→ · b→) / (|a→| |b→|)',
          acts: [
            { type: 'choose', title: L('Vektorlar orasidagi burchak', 'Угол между векторами', 'Angle between vectors'), icon: '∠', make: function (R) { var T = pick([['(1; 0)', '(0; 3)', '90°'], ['(2; 0)', '(1; 1)', '45°'], ['(1; 0)', '(−4; 0)', '180°'], ['(3; 0)', '(5; 0)', '0°'], ['(1; 1)', '(1; −1)', '90°'], ['(0; 2)', '(−1; 1)', '45°']]); var w = ['0°', '45°', '90°', '135°', '180°'].filter(function (x) { return x !== T[2]; }).sort(function () { return R(0, 1) - 0.5; }); return choice('a→ = ' + T[0] + ', b→ = ' + T[1], [T[2], w[0], w[1]], 0); } },
            { type: 'drill', title: L('Uchinchi burchak', 'Третий угол', 'Third angle'), n: 5, make: function (R) { var a = R(3, 9) * 10, b = R(2, 9) * 10; if (a + b >= 180) b = 170 - a; return { q: '∠A = ' + a + '°, ∠B = ' + b + '°;  ∠C', a: 180 - a - b }; } }
          ],
          quiz: [{ q: L('a→ · b→ = 0 bo‘lsa, burchak?', 'Если a→ · b→ = 0, угол?', 'If a→ · b→ = 0, the angle is'), o: ['90°', '0°', '180°'], a: 0 }, { q: L('Ikki burchak va tomon ma’lum — qaysi teorema?', 'Известны два угла и сторона — какая теорема?', 'Two angles and a side — which rule?'), o: [L('sinuslar', 'синусов', 'sine rule'), L('kosinuslar', 'косинусов', 'cosine rule'), L('Pifagor', 'Пифагора', 'Pythagoras')], a: 0 }] }
      ] },

      { id: 's4', title: L('Muntazam ko‘pburchaklar. Aylana uzunligi va doira yuzi', 'Правильные многоугольники. Длина окружности и площадь круга', 'Regular polygons. Circumference and area'), icon: '⬡', color: 'green', topics: [
        { id: 't13', lessons: ch(5), title: L('Aylanaga ichki va tashqi chizilgan ko‘pburchaklar', 'Вписанные и описанные многоугольники', 'Inscribed and circumscribed polygons'),
          keys: [L('ichki: ∠A + ∠C = 180°', 'вписанный: ∠A + ∠C = 180°', 'inscribed: ∠A + ∠C = 180°'), L('tashqi: a + c = b + d', 'описанный: a + c = b + d', 'circumscribed: a + c = b + d')],
          scene: [{ obj: 'cylinder', n: 1, color: 'green' }],
          explain: L('Uchlari aylanada yotgan ko‘pburchak aylanaga <b>ichki chizilgan</b>. To‘rtburchakka aylana tashqi chizish mumkin ⇔ qarama-qarshi burchaklari yig‘indisi 180°. Tomonlari aylanaga urinsa — <b>tashqi chizilgan</b>; to‘rtburchakka aylana ichki chizish mumkin ⇔ qarama-qarshi tomonlari yig‘indilari teng.',
            'Многоугольник с вершинами на окружности — <b>вписанный</b>. Около четырёхугольника можно описать окружность ⇔ сумма противоположных углов 180°. Если стороны касаются окружности — многоугольник <b>описанный</b>; в четырёхугольник можно вписать окружность ⇔ суммы противоположных сторон равны.',
            'A polygon with its vertices on a circle is <b>inscribed</b>. A quadrilateral has a circumcircle ⇔ its opposite angles add to 180°. If its sides touch a circle it is <b>circumscribed</b>; a quadrilateral has an incircle ⇔ the sums of opposite sides are equal.'),
          rule: L('∠A + ∠C = 180° · a + c = b + d', '∠A + ∠C = 180° · a + c = b + d', '∠A + ∠C = 180° · a + c = b + d'),
          acts: [
            { type: 'drill', n: 6, make: function (R) { var A = R(4, 14) * 10, a = R(3, 10), b = R(3, 10), c = R(3, 10); return R(0, 1) ? { q: mk(function (l) { return { uz: 'Ichki chizilgan, ∠A = ', ru: 'Вписанный, ∠A = ', en: 'Inscribed, ∠A = ' }[l] + A + '°;  ∠C'; }), a: 180 - A } : { q: mk(function (l) { return { uz: 'Tashqi chizilgan, a = ', ru: 'Описанный, a = ', en: 'Circumscribed, a = ' }[l] + a + ', b = ' + b + ', c = ' + c + ';  d'; }), a: a + c - b > 0 ? a + c - b : 0 }; } },
            { type: 'choose', icon: '⭕', make: function () { return pick([
              choice(L('Qaysi to‘rtburchakka doim tashqi aylana chizish mumkin?', 'Около какого четырёхугольника всегда можно описать окружность?', 'Which quadrilateral always has a circumcircle?'), [L('to‘g‘ri to‘rtburchak', 'прямоугольник', 'rectangle'), L('romb', 'ромб', 'rhombus'), L('parallelogramm', 'параллелограмм', 'parallelogram')], 0),
              choice(L('Qaysi to‘rtburchakka doim ichki aylana chizish mumkin?', 'В какой четырёхугольник всегда можно вписать окружность?', 'Which quadrilateral always has an incircle?'), [L('romb', 'ромб', 'rhombus'), L('to‘g‘ri to‘rtburchak', 'прямоугольник', 'rectangle'), L('trapetsiya', 'трапеция', 'trapezium')], 0)]); } }
          ],
          quiz: [{ q: L('Ichki chizilgan to‘rtburchakda ∠A = 70°. ∠C?', 'Вписанный четырёхугольник, ∠A = 70°. ∠C?', 'Inscribed quadrilateral, ∠A = 70°. ∠C?'), o: ['110°', '70°', '290°'], a: 0 }, { q: L('Tashqi chizilgan: a = 5, b = 7, c = 6. d?', 'Описанный: a = 5, b = 7, c = 6. d?', 'Circumscribed: a = 5, b = 7, c = 6. d?'), o: ['4', '8', '6'], a: 0 }] },

        { id: 't14', lessons: ch(5), title: L('Muntazam ko‘pburchaklar va ularning aylanalari', 'Правильные многоугольники и их окружности', 'Regular polygons and their circles'),
          keys: [L('oltiburchak: a = R', 'шестиугольник: a = R', 'hexagon: a = R'), L('kvadrat: a = R√2', 'квадрат: a = R√2', 'square: a = R√2'), 'a = 2R sin(180°/n)'],
          scene: [{ obj: 'star', n: 1, color: 'yellow' }],
          explain: L('Barcha tomonlari va burchaklari teng qavariq ko‘pburchak — <b>muntazam</b>. Unga doim ichki va tashqi aylana chizish mumkin, markazlari ustma-ust tushadi. Tomon formulasi: a = 2R sin(180°/n). Muntazam oltiburchakda a = R, kvadratda a = R√2, teng tomonli uchburchakda a = R√3, r = R/2.',
            'Выпуклый многоугольник с равными сторонами и углами — <b>правильный</b>. В него всегда можно вписать и около него описать окружность, их центры совпадают. Сторона: a = 2R sin(180°/n). У правильного шестиугольника a = R, у квадрата a = R√2, у правильного треугольника a = R√3, r = R/2.',
            'A convex polygon with all sides and angles equal is <b>regular</b>. It always has an incircle and a circumcircle with the same centre. Side: a = 2R sin(180°/n). A regular hexagon has a = R, a square a = R√2, an equilateral triangle a = R√3 with r = R/2.'),
          rule: 'a = 2R sin(180° / n)',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var Rr = R(2, 15), k = R(0, 2); return [{ q: mk(function (l) { return { uz: 'Muntazam oltiburchak, R = ', ru: 'Правильный шестиугольник, R = ', en: 'Regular hexagon, R = ' }[l] + Rr + ';  P'; }), a: 6 * Rr }, { q: mk(function (l) { return { uz: 'Teng tomonli △, R = ', ru: 'Правильный △, R = ', en: 'Equilateral △, R = ' }[l] + 2 * Rr + ';  r'; }), a: Rr }, { q: mk(function (l) { return { uz: 'Kvadrat, a = ', ru: 'Квадрат, a = ', en: 'Square, a = ' }[l] + 2 * Rr + ';  r'; }), a: Rr }][k]; } },
            { type: 'choose', icon: '⬡', make: function (R) { var n = pick([3, 4, 6]); return choice(mk(function (l) { return { uz: 'Muntazam ' + n + '-burchak: tomon a = ?', ru: 'Правильный ' + n + '-угольник: сторона a = ?', en: 'Regular ' + n + '-gon: side a = ?' }[l]; }), [{ 3: 'R√3', 4: 'R√2', 6: 'R' }[n], { 3: 'R√2', 4: 'R', 6: 'R√3' }[n], { 3: 'R', 4: 'R√3', 6: 'R√2' }[n]], 0); } }
          ],
          quiz: [{ q: L('Muntazam oltiburchak, R = 5. Tomon?', 'Правильный шестиугольник, R = 5. Сторона?', 'Regular hexagon, R = 5. Side?'), o: ['5', '10', L('2,5', '2,5', '2.5')], a: 0 }, { q: L('Teng tomonli △: r va R nisbati?', 'Правильный △: отношение r к R?', 'Equilateral △: r : R?'), o: ['1 : 2', '1 : 3', '1 : 1'], a: 0 }] },

        { id: 't15', lessons: ch(5), title: L('Aylana uzunligi. Yoy uzunligi. Radian', 'Длина окружности и дуги. Радиан', 'Circumference, arc length, radians'),
          keys: ['C = 2πR', 'l = πRα / 180', 'l = Rα (rad)'],
          scene: [{ obj: 'cylinder', n: 2, color: 'orange' }],
          explain: L('Aylana uzunligi C = 2πR (π ≈ 3,14). α gradusli yoy uzunligi l = πRα/180; radianlarda esa l = Rα. 1 radian — uzunligi radiusga teng yoyning markaziy burchagi, 180° = π rad. Al-Koshiy 1424-yilda π ni 16 ta to‘g‘ri raqam bilan hisoblagan.',
            'Длина окружности C = 2πR (π ≈ 3,14). Длина дуги в α градусов l = πRα/180; в радианах l = Rα. 1 радиан — центральный угол дуги длиной в радиус, 180° = π рад. Аль-Каши в 1424 году вычислил π с 16 верными знаками.',
            'The circumference is C = 2πR (π ≈ 3.14). An arc of α degrees has length l = πRα/180, or l = Rα in radians. One radian is the central angle of an arc as long as the radius, and 180° = π rad. In 1424 al-Kashi computed π to 16 correct digits.'),
          rule: 'l = πRα / 180',
          acts: [
            { type: 'problem', title: L('Aylana uzunligi', 'Длина окружности', 'Circumference'), make: function (R) { var r = R(2, 20); return { story: L('Radiusi <b>' + r + '</b> cm bo‘lgan aylana <u>uzunligi</u>? (π ≈ 3,14)', '<u>Длина</u> окружности радиуса <b>' + r + '</b> см? (π ≈ 3,14)', '<u>Circumference</u> of a circle with radius <b>' + r + '</b> cm? (π ≈ 3.14)'), expr: [2, '·', PI, '·', r, '=', r6(2 * PI * r)], ans: r6(2 * PI * r), unit: CM }; } },
            { type: 'drill', title: L('Yoy uzunligi (π ≈ 3,14)', 'Длина дуги (π ≈ 3,14)', 'Arc length (π ≈ 3.14)'), n: 6, make: function (R) { var r = R(1, 10) * 2, a = pick([90, 180, 60, 120, 45, 30]); return { q: 'R = ' + r + ', α = ' + a + '°;  l', a: r6(PI * r * a / 180) }; } }
          ],
          quiz: [{ q: L('R = 10, π ≈ 3,14. C = ?', 'R = 10, π ≈ 3,14. C = ?', 'R = 10, π ≈ 3.14. C = ?'), o: [L('62,8', '62,8', '62.8'), L('31,4', '31,4', '31.4'), '314'], a: 0 }, { q: '180° = ? rad', o: ['π', '2π', 'π/2'], a: 0 }] },

        { id: 't16', lessons: ch(5), title: L('Doira yuzi va doira bo‘laklari yuzi', 'Площадь круга и его частей', 'Area of circles, sectors and segments'),
          keys: ['S = πR²', L('sektor: πR²α/360', 'сектор: πR²α/360', 'sector: πR²α/360'), L('segment = sektor − △', 'сегмент = сектор − △', 'segment = sector − △')],
          scene: [{ obj: 'cylinder', n: 1, color: 'pink' }],
          explain: L('Doira yuzi S = πR². <b>Sektor</b> — ikki radius va yoy bilan chegaralangan bo‘lak: S = πR²α/360. <b>Segment</b> — vatar va yoy bilan chegaralangan bo‘lak: uning yuzi sektor yuzidan uchburchak yuzini ayirib topiladi. Masalan, R = 10, α = 90°: sektor 78,5, segment 78,5 − 50 = 28,5.',
            'Площадь круга S = πR². <b>Сектор</b> — часть между двумя радиусами и дугой: S = πR²α/360. <b>Сегмент</b> — часть между хордой и дугой: его площадь — площадь сектора минус площадь треугольника. Например, R = 10, α = 90°: сектор 78,5, сегмент 78,5 − 50 = 28,5.',
            'A circle’s area is S = πR². A <b>sector</b> lies between two radii and an arc: S = πR²α/360. A <b>segment</b> lies between a chord and an arc: its area is the sector minus the triangle. E.g. R = 10, α = 90°: sector 78.5, segment 78.5 − 50 = 28.5.'),
          rule: 'S = πR² · S<sub>sek</sub> = πR²α/360',
          acts: [
            { type: 'drill', title: L('π ≈ 3,14', 'π ≈ 3,14', 'π ≈ 3.14'), n: 8, make: function (R) { var r = R(1, 10) * 2, a = pick([90, 180, 60, 120, 45, 36]); return R(0, 1) ? { q: 'R = ' + r + ';  S', a: r6(PI * r * r) } : { q: 'R = ' + r + ', α = ' + a + '°;  S<sub>sector</sub>', a: r6(PI * r * r * a / 360) }; } },
            { type: 'problem', title: L('Segment', 'Сегмент', 'Segment'), make: function (R) { var r = R(1, 6) * 2, sec = r6(PI * r * r / 4); return { story: mk(function (l) { return { uz: 'R = <b>' + r + '</b>, α = 90°. Sektor yuzi ' + H.dec(sec, l) + '. <u>Segment yuzi</u>? (uchburchak yuzi R²/2)', ru: 'R = <b>' + r + '</b>, α = 90°. Площадь сектора ' + H.dec(sec, l) + '. <u>Площадь сегмента</u>? (площадь треугольника R²/2)', en: 'R = <b>' + r + '</b>, α = 90°. Sector area ' + H.dec(sec, l) + '. <u>Segment area</u>? (triangle area R²/2)' }[l]; }), expr: [sec, '−', r * r / 2, '=', r6(sec - r * r / 2)], ans: r6(sec - r * r / 2), unit: CM2 }; } }
          ],
          quiz: [{ q: L('R = 10. Doira yuzi (π ≈ 3,14)?', 'R = 10. Площадь круга (π ≈ 3,14)?', 'R = 10. Circle area (π ≈ 3.14)?'), o: ['314', L('62,8', '62,8', '62.8'), L('31,4', '31,4', '31.4')], a: 0 }, { q: L('Yarim doira — bu necha gradusli sektor?', 'Полукруг — сектор в сколько градусов?', 'A semicircle is a sector of how many degrees?'), o: ['180°', '90°', '360°'], a: 0 }] }
      ] },

      { id: 's5', title: L('Proporsional kesmalar', 'Пропорциональные отрезки', 'Proportional segments'), icon: '📏', color: 'violet', topics: [
        { id: 't17', lessons: ch(6), title: L('To‘g‘ri burchakli uchburchakdagi proporsional kesmalar', 'Пропорциональные отрезки в прямоугольном треугольнике', 'Proportional segments in right triangles'),
          keys: ['h² = a<sub>c</sub> · b<sub>c</sub>', 'a² = c · a<sub>c</sub>', L('o‘rta proporsional', 'среднее пропорциональное', 'mean proportional')],
          scene: [{ obj: 'pyramid', n: 1, color: 'violet' }],
          explain: L('To‘g‘ri burchak uchidan gipotenuzaga tushirilgan balandlik uchburchakni ikkita o‘xshash uchburchakka bo‘ladi. Natijalar: h² = a<sub>c</sub> · b<sub>c</sub> (balandlik — proyeksiyalarning o‘rta proporsionali), a² = c · a<sub>c</sub>, b² = c · b<sub>c</sub> (katet — gipotenuza va o‘z proyeksiyasining o‘rta proporsionali). Masalan, proyeksiyalar 9 va 16 → h = 12, katetlar 15 va 20.',
            'Высота из вершины прямого угла делит треугольник на два подобных. Следствия: h² = a<sub>c</sub> · b<sub>c</sub> (высота — среднее пропорциональное проекций), a² = c · a<sub>c</sub>, b² = c · b<sub>c</sub> (катет — среднее пропорциональное гипотенузы и своей проекции). Например, проекции 9 и 16 → h = 12, катеты 15 и 20.',
            'The altitude from the right angle splits the triangle into two similar ones. So h² = a<sub>c</sub> · b<sub>c</sub> (the altitude is the mean proportional of the projections), and a² = c · a<sub>c</sub>, b² = c · b<sub>c</sub> (each leg is the mean proportional of the hypotenuse and its own projection). E.g. projections 9 and 16 → h = 12, legs 15 and 20.'),
          rule: 'h² = a<sub>c</sub> · b<sub>c</sub>',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var T = pick([[9, 16, 12, 15, 20], [36, 64, 48, 60, 80], [1, 4, 2, 0, 0], [4, 9, 6, 0, 0], [4, 16, 8, 0, 0], [2, 8, 4, 0, 0], [1, 9, 3, 0, 0], [18, 32, 24, 30, 40]]), k = T[3] ? R(0, 1) : 0; return k ? { q: 'a<sub>c</sub> = ' + T[0] + ', b<sub>c</sub> = ' + T[1] + ';  a', a: T[3] } : { q: 'a<sub>c</sub> = ' + T[0] + ', b<sub>c</sub> = ' + T[1] + ';  h', a: T[2] }; } },
            { type: 'drill', title: L('O‘rta proporsional', 'Среднее пропорциональное', 'Mean proportional'), n: 5, make: function (R) { var p = pick([[2, 8], [3, 12], [4, 9], [1, 25], [5, 20], [9, 16], [4, 25]]); return { q: '√(' + p[0] + ' · ' + p[1] + ')', a: Math.sqrt(p[0] * p[1]) }; } }
          ],
          quiz: [{ q: L('Proyeksiyalar 4 va 9. Balandlik?', 'Проекции 4 и 9. Высота?', 'Projections 4 and 9. Altitude?'), o: ['6', '13', L('6,5', '6,5', '6.5')], a: 0 }, { q: L('Balandlik uchburchakni qanday uchburchaklarga bo‘ladi?', 'На какие треугольники делит высота?', 'The altitude splits it into triangles that are...'), o: [L('o‘xshash', 'подобные', 'similar'), L('teng', 'равные', 'congruent'), L('teng yonli', 'равнобедренные', 'isosceles')], a: 0 }] },

        { id: 't18', lessons: ch(6), title: L('Aylanadagi proporsional kesmalar', 'Пропорциональные отрезки в окружности', 'Proportional segments in circles'),
          keys: ['AE · EB = CE · ED', 'PA² = PB · PC'],
          scene: [{ obj: 'cylinder', n: 1, color: 'blue' }],
          explain: L('Ikki vatar E nuqtada kesishsa, birining bo‘laklari ko‘paytmasi ikkinchisining bo‘laklari ko‘paytmasiga teng: AE · EB = CE · ED. Tashqi P nuqtadan urinma va kesuvchi o‘tkazilsa: PA² = PB · PC (urinma kvadrati kesuvchi va uning tashqi qismi ko‘paytmasiga teng). Isbot — o‘xshash uchburchaklar orqali.',
            'Если две хорды пересекаются в E, произведения их отрезков равны: AE · EB = CE · ED. Из внешней точки P касательная и секущая: PA² = PB · PC (квадрат касательной равен произведению секущей на её внешнюю часть). Доказательство — через подобные треугольники.',
            'If two chords cross at E, the products of their pieces are equal: AE · EB = CE · ED. From an outside point P, a tangent and a secant satisfy PA² = PB · PC (the tangent squared equals the whole secant times its outside part). Proof: similar triangles.'),
          rule: 'AE · EB = CE · ED',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var a = R(2, 9), b = R(2, 9), c = pick([1, 2, 3, 4, 6].filter(function (x) { return (a * b) % x === 0; })); var t = R(2, 6), out = R(1, t); return R(0, 1) ? { q: 'AE = ' + a + ', EB = ' + b + ', CE = ' + c + ';  ED', a: a * b / c } : { q: 'PB = ' + out + ', PC = ' + out * t * t + ';  PA', a: out * t }; } },
            { type: 'choose', icon: '⭕', make: function () { return pick([
              choice(L('Kesishuvchi vatarlar uchun:', 'Для пересекающихся хорд:', 'For crossing chords:'), ['AE · EB = CE · ED', 'AE + EB = CE + ED', 'AE : EB = CE : ED'], 0),
              choice(L('Urinma va kesuvchi uchun:', 'Для касательной и секущей:', 'For a tangent and a secant:'), ['PA² = PB · PC', 'PA = PB + PC', 'PA² = PB² + PC²'], 0)]); } }
          ],
          quiz: [{ q: 'AE = 4, EB = 6, CE = 3. ED = ?', o: ['8', '7', '5'], a: 0 }, { q: 'PB = 4, PC = 9. PA = ?', o: ['6', L('6,5', '6,5', '6.5'), '13'], a: 0 }] }
      ] }
    ]
  };
  C.addPart(part2);
})(this);
