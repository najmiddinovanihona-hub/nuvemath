// Nuvemath — 3-sinf, III qism (manba: I.V. Repyova, «Matematika. 3-sinf. III qism», Toshkent, 2023).
// Mavzular tartibi va nomlari darslikdan olingan; tushuntirishlar, topshiriqlar va rasmlar Nuvemath uchun qayta yozilgan.
(function (root) {
  'use strict';
  var C = root.NMCurriculum, H = C.H, L = H.L, mk = H.mk, PCS = H.PCS, choice = H.choice, pick = H.pick, pk = H.pk;
  var G = L('g', 'г', 'g'), KG = H.KG, T = L('t', 'т', 't'), SNT = L('s', 'ц', 'q'), CM = H.CM, M = L('m', 'м', 'm'), KM = L('km', 'км', 'km'), DM = L('dm', 'дм', 'dm'), MM = L('mm', 'мм', 'mm'), LT = H.LT, ML = L('ml', 'мл', 'ml');
  function conv(a, ua, b, ub, k) { return function (R) { var x = R(a[0], a[1]); return { q: mk(function (l) { return x + ' ' + pk(ua, l) + ' = ? ' + pk(ub, l); }), a: x * k }; }; }
  function svg(inner, w) { return '<div class="kd-pics"><svg viewBox="0 0 200 140" style="max-width:' + (w || 220) + 'px;width:100%">' + inner + '</svg></div>'; }
  // doira n ta bo'lakka bo'lingan, k tasi bo'yalgan
  function pie(n, k) { var s = '', cx = 100, cy = 70, r = 60; for (var i = 0; i < n; i++) { var a1 = -Math.PI / 2 + i * 2 * Math.PI / n, a2 = a1 + 2 * Math.PI / n, x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1), x2 = cx + r * Math.cos(a2), y2 = cy + r * Math.sin(a2);
    s += '<path d="M' + cx + ' ' + cy + ' L' + x1.toFixed(1) + ' ' + y1.toFixed(1) + ' A' + r + ' ' + r + ' 0 0 1 ' + x2.toFixed(1) + ' ' + y2.toFixed(1) + ' Z" fill="' + (i < k ? '#4f8dff' : 'rgba(79,141,255,.12)') + '" stroke="#cfe0ff" stroke-width="2"/>'; } return svg(s); }
  var CUBE_SH = { cube: L('kub', 'куб', 'cube'), box: L('parallelepiped', 'параллелепипед', 'cuboid'), cylinder: L('silindr', 'цилиндр', 'cylinder'), pyramid: L('piramida', 'пирамида', 'pyramid') };

  var part3 = {
    grade: 3, part: 3, edition: L('2023-yil nashri', 'Издание 2023 г.', '2023 edition'),
    title: L('O‘lchovlar, ulushlar va koordinatalar', 'Величины, доли и координаты', 'Measures, fractions and coordinates'),
    book: L('I.V. Repyova. Matematika, 3-sinf, III qism (Toshkent, 2023)', 'И.В. Репьева. Математика, 3 класс, часть III (Ташкент, 2023)', 'I.V. Repyova. Mathematics, Grade 3, Part III (Tashkent, 2023)'),
    intro: L('Bu qismda massa, uzunlik, yuz va hajm birliklarini, kub va parallelepipedni, doira ulushlarini, sonli nur va koordinata burchagini, simmetriya va tenglamalarni o‘rganamiz.',
      'В этой части изучим единицы массы, длины, площади и объёма, куб и параллелепипед, доли круга, числовой луч и координатный угол, симметрию и уравнения.',
      'In this part we study units of mass, length, area and volume, cubes and cuboids, fractions of a circle, the number line and coordinate grid, symmetry and equations.'),
    sections: [
      { id: 's1', title: L('O‘lchov birliklari', 'Единицы измерения', 'Units of measurement'), icon: '⚖️', color: 'orange', topics: [
        { id: 't1', lessons: L('69–71-darslar', 'Уроки 69–71', 'Lessons 69–71'), title: L('Massa birliklari: gramm, kilogramm, sentner, tonna', 'Единицы массы: грамм, килограмм, центнер, тонна', 'Units of mass: gram, kilogram, quintal, tonne'),
          keys: ['1 kg = 1 000 g', '1 s = 100 kg', '1 t = 1 000 kg'],
          scene: [{ obj: 'weight', n: 3 }, { obj: 'apple', n: 2, color: 'red' }],
          explain: L('Yengil narsalar <b>gramm</b>da (g), og‘irlari <b>kilogramm</b>da o‘lchanadi. Juda og‘ir yuklar — <b>sentner</b> (100 kg) va <b>tonna</b> (1 000 kg) da. Fil taxminan 5 tonna!',
            'Лёгкие предметы взвешивают в <b>граммах</b> (г), тяжёлые — в <b>килограммах</b>. Очень тяжёлые грузы — в <b>центнерах</b> (100 кг) и <b>тоннах</b> (1 000 кг). Слон весит около 5 тонн!',
            'Light things are weighed in <b>grams</b> (g), heavier ones in <b>kilograms</b>. Very heavy loads use <b>quintals</b> (100 kg) and <b>tonnes</b> (1 000 kg). An elephant weighs about 5 tonnes!'),
          rule: '1 kg = 1 000 g · 1 s = 100 kg · 1 t = 10 s = 1 000 kg',
          acts: [
            { type: 'drill', title: L('Aylantiring', 'Переведите', 'Convert'), n: 8, make: function (R) { return pick([conv([1, 9], KG, 0, G, 1000), conv([1, 9], T, 0, KG, 1000), conv([1, 9], SNT, 0, KG, 100), conv([1, 9], T, 0, SNT, 10)])(R); } },
            { type: 'scale', make: function (R) { var m = R(2, 12); return { mass: m, obj: '🎃', story: L('Qovoq necha kg?', 'Сколько кг весит тыква?', 'How many kg is the pumpkin?') }; } }
          ],
          quiz: [{ q: L('3 kg = ? g', '3 кг = ? г', '3 kg = ? g'), o: ['3000', '300', '30'], a: 0 }, { q: L('2 t = ? kg', '2 т = ? кг', '2 t = ? kg'), o: ['2000', '200', '20'], a: 0 }] },

        { id: 't2', lessons: L('72–74-darslar', 'Уроки 72–74', 'Lessons 72–74'), title: L('Uzunlik birliklari va ularning bog‘liqligi', 'Единицы длины и их связь', 'Units of length and how they link'),
          keys: ['mm, cm, dm, m, km', '1 km = 1 000 m'],
          scene: [{ obj: 'pencil', n: 3, color: 'cyan' }],
          explain: L('Uzunlik birliklari zinapoyasi: 1 cm = 10 mm, 1 dm = 10 cm, 1 m = 10 dm = 100 cm, 1 km = 1 000 m. Katta birlikdan kichigiga o‘tishda ko‘paytiramiz, aksincha — bo‘lamiz.',
            'Лестница единиц длины: 1 см = 10 мм, 1 дм = 10 см, 1 м = 10 дм = 100 см, 1 км = 1 000 м. От большей единицы к меньшей — умножаем, наоборот — делим.',
            'The length ladder: 1 cm = 10 mm, 1 dm = 10 cm, 1 m = 10 dm = 100 cm, 1 km = 1 000 m. Going to a smaller unit we multiply; to a bigger one we divide.'),
          rule: '1 km = 1 000 m = 100 000 cm',
          acts: [
            { type: 'drill', n: 8, make: function (R) { return pick([conv([1, 9], KM, 0, M, 1000), conv([1, 9], M, 0, CM, 100), conv([1, 9], DM, 0, MM, 100), conv([2, 9], M, 0, DM, 10)])(R); } },
            { type: 'choose', title: L('Qaysi kattaroq?', 'Что больше?', 'Which is longer?'), icon: '📏', make: function (R) { var m = R(1, 5), c = R(50, 600); while (c === m * 100) c += 7; return choice(mk(function (l) { return '<span class="kd-big">' + m + ' ' + pk(M, l) + ' ◻ ' + c + ' ' + pk(CM, l) + '</span>'; }), ['&gt;', '&lt;', '='], m * 100 > c ? 0 : 1); } }
          ],
          quiz: [{ q: L('5 km = ? m', '5 км = ? м', '5 km = ? m'), o: ['5000', '500', '50'], a: 0 }, { q: L('3 m 7 cm = ? cm', '3 м 7 см = ? см', '3 m 7 cm = ? cm'), o: ['307', '37', '370'], a: 0 }] },

        { id: 't3', lessons: L('75–78-darslar', 'Уроки 75–78', 'Lessons 75–78'), title: L('Yuz birliklari', 'Единицы площади', 'Units of area'),
          keys: ['cm²', 'dm²', 'm²', '1 dm² = 100 cm²'],
          scene: [{ obj: 'flat', n: 1, color: 'green' }],
          explain: L('Tomoni 1 dm bo‘lgan kvadrat — <b>1 dm²</b>. Unga 10 · 10 = <b>100</b> ta cm² sig‘adi (sahnadagi plitaga qarang!). Xuddi shunday 1 m² = 100 dm² = 10 000 cm².',
            'Квадрат со стороной 1 дм — это <b>1 дм²</b>. В нём помещается 10 · 10 = <b>100</b> см² (посмотрите на плиту на сцене!). Так же 1 м² = 100 дм² = 10 000 см².',
            'A square with 1 dm sides is <b>1 dm²</b>. It holds 10 · 10 = <b>100</b> cm² (look at the plate on the stage!). Likewise 1 m² = 100 dm² = 10 000 cm².'),
          rule: '1 dm² = 100 cm² · 1 m² = 100 dm²',
          acts: [
            { type: 'drill', n: 6, make: function (R) { return pick([conv([1, 9], L('dm²', 'дм²', 'dm²'), 0, L('cm²', 'см²', 'cm²'), 100), conv([1, 9], L('m²', 'м²', 'm²'), 0, L('dm²', 'дм²', 'dm²'), 100)])(R); } },
            { type: 'problem', make: function (R) { var a = R(3, 12), b = R(2, 9); return { story: L('Xona polining bo‘yi <b>' + a + '</b> m, eni <b>' + b + '</b> m. <u>Pol yuzi</u> necha m²?', 'Длина пола комнаты <b>' + a + '</b> м, ширина <b>' + b + '</b> м. <u>Какова площадь пола</u>?', 'A room’s floor is <b>' + a + '</b> m by <b>' + b + '</b> m. <u>What is its area</u> in m²?'), expr: [a, '·', b, '=', a * b], ans: a * b, unit: L('m²', 'м²', 'm²') }; } }
          ],
          quiz: [{ q: L('1 dm² = ? cm²', '1 дм² = ? см²', '1 dm² = ? cm²'), o: ['100', '10', '1000'], a: 0 }, { q: L('Xona polini nimada o‘lchash qulay?', 'В чём удобно измерять площадь пола?', 'Best unit for a floor’s area?'), o: ['m²', 'cm²', 'mm²'], a: 0 }] },

        { id: 't4', lessons: L('79–81-darslar', 'Уроки 79–81', 'Lessons 79–81'), title: L('Hajm birliklari', 'Единицы объёма', 'Units of volume'),
          keys: ['cm³', 'dm³ = 1 l', '1 l = 1 000 ml'],
          scene: [{ obj: 'cube', n: 3, color: 'cyan' }, { obj: 'bucket', n: 1, color: 'blue' }],
          explain: L('Qirrasi 1 cm bo‘lgan kub — <b>1 cm³</b>. Qirrasi 1 dm bo‘lgan kubga 1 000 cm³ sig‘adi — bu <b>1 litr</b>! 1 l = 1 000 ml.',
            'Куб с ребром 1 см — это <b>1 см³</b>. В куб с ребром 1 дм помещается 1 000 см³ — это <b>1 литр</b>! 1 л = 1 000 мл.',
            'A cube with 1 cm edges is <b>1 cm³</b>. A cube with 1 dm edges holds 1 000 cm³ — that is <b>1 litre</b>! 1 L = 1 000 ml.'),
          rule: '1 dm³ = 1 000 cm³ = 1 l = 1 000 ml',
          acts: [
            { type: 'drill', n: 6, make: function (R) { return pick([conv([1, 9], LT, 0, ML, 1000), conv([1, 9], L('dm³', 'дм³', 'dm³'), 0, L('cm³', 'см³', 'cm³'), 1000)])(R); } },
            { type: 'jugs', make: function (R) { var c = R(3, 9); return { cap: c, story: L('Akvariumga <b>necha litr</b> suv sig‘adi?', '<b>Сколько литров</b> воды вмещает аквариум?', '<b>How many litres</b> does the tank hold?') }; } }
          ],
          quiz: [{ q: L('2 l = ? ml', '2 л = ? мл', '2 L = ? ml'), o: ['2000', '200', '20'], a: 0 }, { q: L('1 dm³ = ?', '1 дм³ = ?', '1 dm³ = ?'), o: ['1 l', '1 kg', '1 m'], a: 0 }] }
      ] },

      { id: 's2', title: L('Jismlar va doira', 'Тела и круг', 'Solids and circles'), icon: '🧊', color: 'violet', topics: [
        { id: 't5', lessons: L('82–83-darslar', 'Уроки 82–83', 'Lessons 82–83'), title: L('Yuzni paletka yordamida hisoblash', 'Вычисление площади палеткой', 'Measuring area with a grid'),
          keys: [L('paletka', 'палетка', 'grid overlay')],
          scene: [{ obj: 'flat', n: 1, color: 'cyan' }],
          explain: L('<b>Paletka</b> — kataklarga bo‘lingan shaffof varaq. Uni shakl ustiga qo‘yib, to‘liq kataklarni sanaymiz. Shu usul bilan har qanday shaklning yuzini taxminan topish mumkin.',
            '<b>Палетка</b> — прозрачный лист, расчерченный на клетки. Кладём её на фигуру и считаем целые клетки. Так можно примерно найти площадь любой фигуры.',
            'A <b>grid overlay</b> is a clear sheet ruled into squares. Lay it on a shape and count the whole squares. That gives the approximate area of any shape.'),
          rule: L('Yuz ≈ to‘liq kataklar soni', 'Площадь ≈ число целых клеток', 'Area ≈ number of whole squares'),
          acts: [
            { type: 'grid', make: function (R) { var a = R(3, 11), b = R(2, 6); return { a: a, b: b, ask: 'area', ans: a * b, unit: L('cm²', 'см²', 'cm²'), story: L('Paletka bilan <b>yuzni</b> toping (1 katak = 1 cm²).', 'Найдите <b>площадь</b> палеткой (1 клетка = 1 см²).', 'Use the grid to find the <b>area</b> (1 square = 1 cm²).') }; } },
            { type: 'problem', title: L('To‘liq va yarim kataklar', 'Полные и неполные клетки', 'Full and partial squares'), make: function (R) { var f = R(6, 30), h = R(1, 8) * 2; return { story: L('Paletkada shaklga <b>' + f + '</b> ta to‘liq va <b>' + h + '</b> ta yarim katak tushdi. Ikki yarim katak = 1 katak. <u>Yuz</u> taxminan?', 'На палетке у фигуры <b>' + f + '</b> полных и <b>' + h + '</b> неполных клеток. Две неполные = 1 клетка. <u>Площадь</u> примерно?', 'On the grid the shape covers <b>' + f + '</b> full and <b>' + h + '</b> partial squares. Two partial = 1 square. <u>Area</u> about?'), expr: [f, '+', h / 2, '=', f + h / 2], ans: f + h / 2, unit: L('cm²', 'см²', 'cm²') }; } }
          ],
          quiz: [{ q: L('10 ta to‘liq, 6 ta yarim katak. S ≈ ?', '10 полных, 6 неполных клеток. S ≈ ?', '10 full, 6 partial squares. S ≈ ?'), o: ['13', '16', '10'], a: 0 }, { q: L('Shaklga 18 ta to‘liq katak tushdi. Yuz?', 'На фигуру легли 18 целых клеток. Площадь?', '18 whole squares cover the shape. Area?'), o: ['18 cm²', '18 cm', '36 cm²'], a: 0 }] },

        { id: 't6', lessons: L('84–88-darslar', 'Уроки 84–88', 'Lessons 84–88'), title: L('Parallelepiped va kub. Qirralar yig‘indisi. Yoyilma', 'Параллелепипед и куб. Сумма рёбер. Развёртка', 'Cuboids and cubes. Edge sum. Nets'),
          keys: [L('qirra', 'ребро', 'edge'), L('yoq', 'грань', 'face'), L('uch', 'вершина', 'vertex'), L('yoyilma', 'развёртка', 'net')],
          scene: [{ obj: 'cube', n: 1, color: 'blue' }, { obj: 'box', n: 1, color: 'orange' }],
          explain: L('Kub va parallelepipedning 6 ta yog‘i, 12 ta qirrasi va 8 ta uchi bor. Kub qirralari yig‘indisi = 12 · a. Parallelepiped qirralari yig‘indisi = 4 · (a + b + c). Ularni qog‘ozdan <b>yoyilma</b> orqali yasash mumkin.',
            'У куба и параллелепипеда 6 граней, 12 рёбер и 8 вершин. Сумма рёбер куба = 12 · a. Сумма рёбер параллелепипеда = 4 · (a + b + c). Их можно склеить из бумажной <b>развёртки</b>.',
            'Cubes and cuboids have 6 faces, 12 edges and 8 vertices. A cube’s edge sum = 12 · a. A cuboid’s edge sum = 4 · (a + b + c). They can be folded from a paper <b>net</b>.'),
          rule: L('Kub: 12 · a · Parallelepiped: 4 · (a + b + c)', 'Куб: 12 · a · Параллелепипед: 4 · (a + b + c)', 'Cube: 12 · a · Cuboid: 4 · (a + b + c)'),
          acts: [
            { type: 'drill', title: L('Qirralar yig‘indisi', 'Сумма рёбер', 'Edge sum'), n: 6, make: function (R) { var a = R(2, 9), b = R(2, 9), c = R(2, 9); return R(0, 1) ? { q: mk(function (l) { return { uz: 'Kub', ru: 'Куб', en: 'Cube' }[l] + ', a = ' + a; }), a: 12 * a } : { q: mk(function (l) { return { uz: 'Parallelepiped', ru: 'Параллелепипед', en: 'Cuboid' }[l] + ' ' + a + '×' + b + '×' + c; }), a: 4 * (a + b + c) }; } },
            { type: 'choose', title: L('3D: shaklni taniying', '3D: узнайте фигуру', '3D: name it'), icon: '🧊', make: function () { var keys = Object.keys(CUBE_SH), k = pick(keys), o = keys.filter(function (x) { return x !== k; }).sort(function () { return Math.random() - 0.5; }); var ch = choice(L('Bu qaysi jism?', 'Что это за тело?', 'Which solid is this?'), [CUBE_SH[k], CUBE_SH[o[0]], CUBE_SH[o[1]]], 0); ch.scene = [{ obj: k, n: 1, color: 'orange' }]; return ch; } }
          ],
          quiz: [{ q: L('Kubning nechta qirrasi bor?', 'Сколько рёбер у куба?', 'How many edges does a cube have?'), o: ['12', '8', '6'], a: 0 }, { q: L('Kub, a = 5 cm. Qirralar yig‘indisi?', 'Куб, a = 5 см. Сумма рёбер?', 'Cube, a = 5 cm. Edge sum?'), o: ['60', '30', '125'], a: 0 }] },

        { id: 't7', lessons: L('89–91-darslar', 'Уроки 89–91', 'Lessons 89–91'), title: L('Doira va aylana. Aylana yasash', 'Круг и окружность. Построение окружности', 'Circles. Drawing with compasses'),
          keys: [L('sirkul', 'циркуль', 'compasses'), 'r', 'd = 2 · r'],
          scene: [{ obj: 'cylinder', n: 2, color: 'yellow' }],
          explain: L('Aylanani <b>sirkul</b> bilan chizamiz: ignasini markazga qo‘yib, qalam uchini aylantiramiz. Sirkul oyoqlari orasidagi masofa — radius. Aylanalardan chiroyli naqshlar yasash mumkin!',
            'Окружность чертят <b>циркулем</b>: ставим иглу в центр и вращаем грифель. Расстояние между ножками циркуля — радиус. Из окружностей получаются красивые узоры!',
            'We draw a circle with <b>compasses</b>: put the point at the centre and turn the pencil. The gap between the legs is the radius. Circles make beautiful patterns!'),
          rule: 'd = 2 · r',
          acts: [
            { type: 'drill', n: 6, make: function (R) { var r = R(2, 30); return R(0, 1) ? { q: 'r = ' + r + ';  d', a: 2 * r } : { q: 'd = ' + 2 * r + ';  r', a: r }; } },
            { type: 'choose', title: L('Radius va diametr', 'Радиус и диаметр', 'Radius and diameter'), icon: '⭕', make: function (R) { var r = R(3, 15), dia = R(0, 1); return dia ? choice(L('Radius <b>' + r + '</b> cm. Diametr?', 'Радиус <b>' + r + '</b> см. Диаметр?', 'Radius <b>' + r + '</b> cm. Diameter?'), [String(2 * r), String(r), String(r + 2)], 0) : choice(L('Diametr <b>' + 2 * r + '</b> cm. Radius?', 'Диаметр <b>' + 2 * r + '</b> см. Радиус?', 'Diameter <b>' + 2 * r + '</b> cm. Radius?'), [String(r), String(4 * r), String(2 * r + 2)], 0); } }
          ],
          quiz: [{ q: L('r = 7 cm. d = ?', 'r = 7 см. d = ?', 'r = 7 cm. d = ?'), o: ['14', '7', '49'], a: 0 }, { q: L('Aylana nima bilan chiziladi?', 'Чем чертят окружность?', 'What draws a circle?'), o: [L('sirkul', 'циркуль', 'compasses'), L('chizg‘ich', 'линейка', 'ruler'), L('transportir', 'транспортир', 'protractor')], a: 0 }] },

        { id: 't8', lessons: L('92–95-darslar', 'Уроки 92–95', 'Lessons 92–95'), title: L('Doiraning ulushlari. Sonning ulushini topish', 'Доли круга. Нахождение доли числа', 'Fractions of a circle. A fraction of a number'),
          keys: ['1/2', '1/4', '1/3', L('ulush', 'доля', 'fraction')],
          scene: [{ obj: 'cylinder', n: 1, color: 'orange' }],
          explain: L('Doirani teng bo‘laklarga bo‘lsak, har bir bo‘lak — <b>ulush</b>. 4 ta teng bo‘lakdan biri — chorak (1/4). Sonning ulushini topish uchun uni bo‘laklar soniga bo‘lamiz: 12 ning 1/4 qismi = 12 : 4 = <b>3</b>. Soat ham doira: chorak soat — 15 minut!',
            'Если разделить круг на равные части, каждая часть — <b>доля</b>. Одна из 4 частей — четверть (1/4). Чтобы найти долю числа, делим его на число частей: 1/4 от 12 = 12 : 4 = <b>3</b>. Циферблат — тоже круг: четверть часа — 15 минут!',
            'Split a circle into equal parts and each part is a <b>fraction</b>. One of 4 equal parts is a quarter (1/4). To find a fraction of a number, divide by the number of parts: 1/4 of 12 = 12 : 4 = <b>3</b>. A clock face is a circle too: a quarter of an hour is 15 minutes!'),
          rule: L('a ning 1/n qismi = a : n', '1/n от a = a : n', '1/n of a = a : n'),
          acts: [
            { type: 'choose', title: L('Qancha bo‘yalgan?', 'Какая часть закрашена?', 'How much is shaded?'), icon: '🥧', make: function (R) { var n = pick([2, 3, 4, 6, 8]), k = R(1, n - 1); var wrong = [(k + 1) + '/' + n, k + '/' + (n + 1 + (k + 1 === n ? 1 : 0))]; return choice(L('Doiraning qancha qismi bo‘yalgan?', 'Какая часть круга закрашена?', 'What fraction is shaded?'), [k + '/' + n].concat(wrong), 0, pie(n, k)); } },
            { type: 'drill', title: L('Sonning ulushi', 'Доля числа', 'Fraction of a number'), n: 8, make: function (R) { var n = R(2, 9), x = R(2, 12); return { q: mk(function (l) { return { uz: (n * x) + ' ning 1/' + n + ' qismi', ru: '1/' + n + ' от ' + (n * x), en: '1/' + n + ' of ' + (n * x) }[l]; }), a: x }; } }
          ],
          quiz: [{ q: L('20 ning 1/4 qismi?', '1/4 от 20?', '1/4 of 20?'), o: ['5', '16', '80'], a: 0 }, { q: L('Yarim soat = ? min', 'Полчаса = ? мин', 'Half an hour = ? min'), o: ['30', '50', '15'], a: 0 }, { q: L('Chorak soat = ? min', 'Четверть часа = ? мин', 'A quarter of an hour = ? min'), o: ['15', '25', '4'], a: 0 }] }
      ] },

      { id: 's3', title: L('Sonli nur va koordinatalar', 'Числовой луч и координаты', 'Number line and coordinates'), icon: '📍', color: 'cyan', topics: [
        { id: 't9', lessons: L('96–97-darslar', 'Уроки 96–97', 'Lessons 96–97'), title: L('Parallel va perpendikular to‘g‘ri chiziqlar', 'Параллельные и перпендикулярные прямые', 'Parallel and perpendicular lines'),
          keys: [L('parallel ∥', 'параллельные ∥', 'parallel ∥'), L('perpendikular ⊥', 'перпендикулярные ⊥', 'perpendicular ⊥')],
          scene: [{ obj: 'pencil', n: 4, color: 'green' }],
          explain: L('Hech qachon kesishmaydigan to‘g‘ri chiziqlar — <b>parallel</b> (temir yo‘l relslari kabi). To‘g‘ri burchak ostida kesishadiganlari — <b>perpendikular</b> (daftar kataklari chiziqlari kabi).',
            'Прямые, которые никогда не пересекаются, — <b>параллельные</b> (как рельсы). Пересекающиеся под прямым углом — <b>перпендикулярные</b> (как линии клеток в тетради).',
            'Lines that never meet are <b>parallel</b> (like railway tracks). Lines that cross at a right angle are <b>perpendicular</b> (like the lines on squared paper).'),
          rule: 'a ∥ b · a ⊥ c',
          acts: [
            { type: 'choose', title: L('Qanday chiziqlar?', 'Какие прямые?', 'Which lines?'), icon: '∥', make: function () { var k = pick(['par', 'perp', 'cross']), n = { par: L('parallel', 'параллельные', 'parallel'), perp: L('perpendikular', 'перпендикулярные', 'perpendicular'), cross: L('kesishadi, lekin perpendikular emas', 'пересекаются, но не перпендикулярны', 'they cross but aren’t perpendicular') };
              var pic = { par: svg('<line x1="20" y1="40" x2="180" y2="40" stroke="#4f8dff" stroke-width="4"/><line x1="20" y1="100" x2="180" y2="100" stroke="#ff6b8b" stroke-width="4"/>'), perp: svg('<line x1="20" y1="70" x2="180" y2="70" stroke="#4f8dff" stroke-width="4"/><line x1="100" y1="10" x2="100" y2="130" stroke="#ff6b8b" stroke-width="4"/><rect x="100" y="52" width="18" height="18" fill="none" stroke="#ffcf3f" stroke-width="2"/>'), cross: svg('<line x1="20" y1="110" x2="180" y2="30" stroke="#4f8dff" stroke-width="4"/><line x1="20" y1="40" x2="180" y2="90" stroke="#ff6b8b" stroke-width="4"/>') }[k];
              return choice(L('Rasmdagi to‘g‘ri chiziqlar qanday?', 'Как расположены прямые?', 'How are the lines arranged?'), [n[k]].concat(['par', 'perp', 'cross'].filter(function (x) { return x !== k; }).map(function (x) { return n[x]; })), 0, pic); } },
            { type: 'choose', title: L('Chiziqlarni aniqlang', 'Определите прямые', 'Name the lines'), icon: '📏', make: function (R) { var k = R(0, 2), sv = ['<line x1="20" y1="40" x2="220" y2="40"/><line x1="20" y1="100" x2="220" y2="100"/>', '<line x1="20" y1="70" x2="220" y2="70"/><line x1="120" y1="10" x2="120" y2="130"/>', '<line x1="20" y1="20" x2="220" y2="120"/><line x1="20" y1="110" x2="220" y2="50"/>'][k];
              return choice(L('Bu to‘g‘ri chiziqlar qanday?', 'Как расположены прямые?', 'How are these lines placed?'), [L('parallel', 'параллельны', 'parallel'), L('perpendikular', 'перпендикулярны', 'perpendicular'), L('kesishadi (to‘g‘ri burchaksiz)', 'пересекаются (не под прямым углом)', 'intersecting (not at a right angle)')], k, '<div class="kd-pics"><svg viewBox="0 0 240 140" style="max-width:260px;width:100%" stroke="#4f8dff" stroke-width="5" stroke-linecap="round">' + sv + '</svg></div>'); } }
          ],
          quiz: [{ q: L('Parallel chiziqlar...', 'Параллельные прямые...', 'Parallel lines...'), o: [L('hech qachon kesishmaydi', 'никогда не пересекаются', 'never meet'), L('bir nuqtada kesishadi', 'пересекаются в точке', 'cross at a point'), L('to‘g‘ri burchak hosil qiladi', 'образуют прямой угол', 'make a right angle')], a: 0 }, { q: L('Deraza romining qo‘shni tomonlari...', 'Соседние стороны оконной рамы...', 'Adjacent sides of a window frame are...'), o: [L('perpendikular', 'перпендикулярны', 'perpendicular'), L('parallel', 'параллельны', 'parallel')], a: 0 }, { q: L('Parallellik belgisi?', 'Знак параллельности?', 'The symbol for parallel?'), o: ['∥', '⊥', '='], a: 0 }, { q: L('Temir yo‘l relslari...', 'Рельсы железной дороги...', 'Railway tracks are...'), o: [L('parallel', 'параллельны', 'parallel'), L('perpendikular', 'перпендикулярны', 'perpendicular')], a: 0 }, { q: L('Perpendikular chiziqlar qanday burchak hosil qiladi?', 'Какой угол образуют перпендикулярные прямые?', 'What angle do perpendicular lines make?'), o: [L('to‘g‘ri', 'прямой', 'right'), L('o‘tkir', 'острый', 'acute'), L('o‘tmas', 'тупой', 'obtuse')], a: 0 }] },

        { id: 't10', lessons: L('98–102-darslar', 'Уроки 98–102', 'Lessons 98–102'), title: L('Koordinata nuri. Sonli nurda amallar', 'Координатный луч. Действия на числовом луче', 'The number line. Operations on it'),
          keys: [L('koordinata nuri', 'координатный луч', 'number line'), L('birlik kesma', 'единичный отрезок', 'unit step'), L('koordinata', 'координата', 'coordinate')],
          scene: [{ obj: 'rod', n: 3, color: 'orange' }],
          explain: L('<b>Koordinata nuri</b> — 0 dan boshlanib, teng qadamlar bilan bo‘lingan nur. Har bir nuqtaning soni — uning <b>koordinatasi</b>. O‘ngga yurish — qo‘shish, chapga — ayirish. O‘ngdagi son har doim katta!',
            '<b>Координатный луч</b> начинается с 0 и размечен равными шагами. Число точки — её <b>координата</b>. Шаг вправо — сложение, влево — вычитание. Число правее всегда больше!',
            'A <b>number line</b> starts at 0 and is marked in equal steps. A point’s number is its <b>coordinate</b>. Moving right is adding, left is subtracting. The number further right is always bigger!'),
          rule: L('O‘ng → katta · chap → kichik', 'Правее → больше · левее → меньше', 'Right → bigger · left → smaller'),
          acts: [
            { type: 'numline', title: L('Nuqtaning koordinatasi', 'Координата точки', 'Coordinate of a point'), make: function (R) { var step = pick([1, 2, 5, 10]), n = 10, v = R(1, n - 1) * step; return { min: 0, max: n * step, step: step, labelEvery: 5, points: [[v, 'A']], story: L('A nuqtaning <b>koordinatasi</b> nechaga teng?', 'Какая <b>координата</b> у точки A?', 'What is the <b>coordinate</b> of point A?'), ans: v }; } },
            { type: 'numline', title: L('Sakrashlar bilan hisoblash', 'Счёт прыжками', 'Counting with jumps'), make: function (R) { var a = R(1, 8), b = R(2, 10 - a + 4), plus = R(0, 1); if (!plus && b > a) b = R(1, a); var end = plus ? a + b : a - b; if (end > 14) { end = a + 1; b = 1; plus = 1; } return { min: 0, max: 15, step: 1, labelEvery: 1, jumps: [a, end], story: L('Sakrash qayerga olib keldi? ' + a + (plus ? ' + ' : ' − ') + b + ' = ?', 'Куда привёл прыжок? ' + a + (plus ? ' + ' : ' − ') + b + ' = ?', 'Where did the jump land? ' + a + (plus ? ' + ' : ' − ') + b + ' = ?'), ans: end }; } }
          ],
          quiz: [{ q: L('Nurda 7 va 4. Qaysi biri o‘ngda?', 'На луче 7 и 4. Какое правее?', '7 and 4 on the line. Which is further right?'), o: ['7', '4'], a: 0 }, { q: L('Bir qadam 5. Uchinchi bo‘linma?', 'Шаг 5. Третье деление?', 'Step 5. The third mark?'), o: ['15', '3', '8'], a: 0 }] },

        { id: 't11', lessons: L('100, 103–104-darslar', 'Уроки 100, 103–104', 'Lessons 100, 103–104'), title: L('Tengsizliklar va sodda tenglamalar', 'Неравенства и простые уравнения', 'Inequalities and simple equations'),
          keys: ['x < 5', 'x + 3 = 9', L('yechimlar', 'решения', 'solutions')],
          scene: [{ obj: 'box', n: 1, color: 'pink' }],
          explain: L('x &lt; 5 tengsizligining natural yechimlari: 1, 2, 3, 4 — sonli nurda 5 dan chapdagi sonlar. Tenglamaning esa bitta yechimi bo‘ladi: x + 3 = 9 → x = 6.',
            'Натуральные решения неравенства x &lt; 5: 1, 2, 3, 4 — числа левее 5 на числовом луче. У уравнения одно решение: x + 3 = 9 → x = 6.',
            'The whole-number solutions of x &lt; 5 are 1, 2, 3, 4 — the numbers left of 5 on the number line. An equation has one solution: x + 3 = 9 → x = 6.'),
          rule: 'x < 4 → 1, 2, 3 · x + 3 = 9 → x = 6',
          acts: [
            { type: 'drill', title: L('Tenglamalar', 'Уравнения', 'Equations'), n: 6, make: H.eqDrill(100) },
            { type: 'choose', title: L('Yechimlar soni', 'Сколько решений', 'How many solutions'), icon: '🔢', make: function (R) { var n = R(3, 9); return choice(mk(function (l) { return '<span class="kd-big">x &lt; ' + n + '</span> — ' + { uz: 'nechta natural yechim?', ru: 'сколько натуральных решений?', en: 'how many whole-number solutions?' }[l]; }), [String(n - 1), String(n), String(n + 1)], 0); } }
          ],
          quiz: [{ q: L('x < 3 ning natural yechimlari?', 'Натуральные решения x < 3?', 'Whole-number solutions of x < 3?'), o: ['1, 2', '1, 2, 3', '3'], a: 0 }, { q: 'x − 7 = 13; x = ?', o: ['20', '6', '91'], a: 0 }] },

        { id: 't12', lessons: L('105–106-darslar', 'Уроки 105–106', 'Lessons 105–106'), title: L('Koordinata burchagi. Nuqtalar yasash', 'Координатный угол. Построение точек', 'The coordinate grid. Plotting points'),
          keys: ['(x; y)', L('x o‘qi', 'ось x', 'x-axis'), L('y o‘qi', 'ось y', 'y-axis')],
          scene: [{ obj: 'star', n: 3, color: 'yellow' }],
          explain: L('Ikkita perpendikular sonli nur <b>koordinata burchagini</b> hosil qiladi. Har bir nuqta ikki son bilan beriladi: avval x (o‘ngga), keyin y (yuqoriga). A(3; 5) — 3 qadam o‘ngga, 5 qadam yuqoriga.',
            'Два перпендикулярных луча образуют <b>координатный угол</b>. Каждая точка задаётся двумя числами: сначала x (вправо), потом y (вверх). A(3; 5) — 3 шага вправо, 5 вверх.',
            'Two perpendicular number lines make a <b>coordinate grid</b>. Each point is given by two numbers: x first (across), then y (up). A(3; 5) is 3 steps right and 5 steps up.'),
          rule: L('(x; y) — avval o‘ngga, keyin yuqoriga', '(x; y) — сначала вправо, потом вверх', '(x; y) — across first, then up'),
          acts: [
            { type: 'coord', make: function (R) { return { x: R(1, 8), y: R(1, 8), name: pick(['A', 'B', 'C', 'M', 'K']) }; } },
            { type: 'coord', title: L('Yana bitta nuqta', 'Ещё одна точка', 'Another point'), make: function (R) { return { x: R(0, 8), y: R(0, 8), name: pick(['D', 'E', 'P']) }; } }
          ],
          quiz: [{ q: L('A(2; 7): x = ?', 'A(2; 7): x = ?', 'A(2; 7): x = ?'), o: ['2', '7', '9'], a: 0 }, { q: L('Koordinatalar boshi?', 'Начало координат?', 'The origin?'), o: ['(0; 0)', '(1; 1)', '(0; 1)'], a: 0 }] },

        { id: 't13', lessons: L('107–108-darslar', 'Уроки 107–108', 'Lessons 107–108'), title: L('O‘qli simmetriya. Simmetrik shakllar', 'Осевая симметрия. Симметричные фигуры', 'Line symmetry. Symmetrical shapes'),
          keys: [L('simmetriya o‘qi', 'ось симметрии', 'line of symmetry'), L('ko‘zgu', 'зеркало', 'mirror')],
          scene: [{ obj: 'star', n: 2, color: 'pink' }],
          explain: L('Simmetriya o‘qi — ko‘zguga o‘xshaydi: bir tomondagi nuqta ikkinchi tomonda xuddi shu masofada aks etadi. Kapalak, yaproq, ko‘p harflar (A, M, Ш) simmetrik.',
            'Ось симметрии похожа на зеркало: точка с одной стороны отражается на таком же расстоянии с другой. Бабочка, лист, многие буквы (А, М, Ш) симметричны.',
            'A line of symmetry is like a mirror: a point on one side is reflected the same distance away on the other. Butterflies, leaves and many letters (A, M, H) are symmetrical.'),
          rule: L('Nuqta va uning aksi o‘qdan bir xil masofada', 'Точка и её отражение равноудалены от оси', 'A point and its reflection are the same distance from the line'),
          acts: [
            { type: 'choose', title: L('Simmetrik harf', 'Симметричная буква', 'Symmetrical letter'), icon: '🔤', make: function () { var yes = pick(['A', 'M', 'T', 'H', 'O', 'X', 'W', 'V']), no = ['F', 'G', 'J', 'L', 'P', 'R', 'S', 'Z'].sort(function () { return Math.random() - 0.5; }); return choice(L('Qaysi harfning vertikal yoki gorizontal simmetriya o‘qi bor?', 'У какой буквы есть ось симметрии?', 'Which letter has a line of symmetry?'), [yes, no[0], no[1]], 0); } },
            { type: 'choose', title: L('Simmetrikmi?', 'Симметрично?', 'Symmetrical?'), icon: '🦋', make: function () { var it = pick([['🦋', 1], ['❤️', 1], ['⭐', 1], ['🍁', 1], ['🐌', 0], ['☁️', 0], ['🦒', 0], ['🐟', 1]]); return choice(L('Bu rasm simmetrikmi?', 'Этот рисунок симметричен?', 'Is this picture symmetrical?'), [L('ha', 'да', 'yes'), L('yo‘q', 'нет', 'no')], it[1] ? 0 : 1, '<div class="kd-pics"><span style="font-size:4rem">' + it[0] + '</span></div>'); } }
          ],
          quiz: [{ q: L('Simmetrik harf?', 'Симметричная буква?', 'A symmetrical letter?'), o: ['H', 'F', 'G'], a: 0 }, { q: L('A nuqta o‘qdan 3 cm. Uning aksi o‘qdan?', 'Точка A в 3 см от оси. Её отражение?', 'A is 3 cm from the line. Its reflection?'), o: ['3 cm', '6 cm', '0 cm'], a: 0 }] },

        { id: 't14', lessons: L('109–110-darslar', 'Уроки 109–110', 'Lessons 109–110'), title: L('Tarkibli tenglamalar. Soddalashtirish', 'Составные уравнения. Упрощение', 'Multi-step equations. Simplifying'),
          keys: ['x + 15 + 7 = 40', '(x − 5) · 3 = 21'],
          scene: [{ obj: 'box', n: 1, color: 'green' }, { obj: 'weight', n: 2 }],
          explain: L('Tarkibli tenglamada avval soddalashtiramiz: x + 15 + 7 = 40 → x + 22 = 40 → x = 18. (x − 5) · 3 = 21 → x − 5 = 7 → x = 12. Har doim tekshiramiz!',
            'В составном уравнении сначала упрощаем: x + 15 + 7 = 40 → x + 22 = 40 → x = 18. (x − 5) · 3 = 21 → x − 5 = 7 → x = 12. Всегда проверяем!',
            'In a multi-step equation simplify first: x + 15 + 7 = 40 → x + 22 = 40 → x = 18. (x − 5) · 3 = 21 → x − 5 = 7 → x = 12. Always check!'),
          rule: L('Soddalashtir → yech → tekshir', 'Упрости → реши → проверь', 'Simplify → solve → check'),
          acts: [
            { type: 'drill', n: 6, make: function (R) { var x = R(2, 40), a = R(2, 20), b = R(2, 20), k = R(2, 6); return pick([{ q: 'x + ' + a + ' + ' + b + ' = ' + (x + a + b) + ';  x', a: x }, { q: '(x − ' + a + ') · ' + k + ' = ' + (x * k) + ';  x', a: x + a }, { q: 'x · ' + k + ' + ' + a + ' = ' + (x * k + a) + ';  x', a: x }]); } },
            { type: 'problem', title: L('O‘ylangan son', 'Задуманное число', 'Mystery number'), make: function (R) { var x = R(2, 20), a = R(2, 9), b = R(2, 6), c = (x + a) * b; return { story: L('Men bir son o‘yladim, unga <b>' + a + '</b> qo‘shdim, natijani <b>' + b + '</b> ga ko‘paytirdim va <b>' + c + '</b> chiqdi. <u>Qaysi son</u>?', 'Я задумал число, прибавил <b>' + a + '</b>, умножил на <b>' + b + '</b> и получил <b>' + c + '</b>. <u>Какое число</u>?', 'I thought of a number, added <b>' + a + '</b>, multiplied by <b>' + b + '</b> and got <b>' + c + '</b>. <u>What was it</u>?'), expr: [c, ':', b, '−', a, '=', x], ans: x }; } }
          ],
          quiz: [{ q: 'x + 10 + 5 = 30; x = ?', o: ['15', '45', '25'], a: 0 }, { q: '(x + 2) · 4 = 20; x = ?', o: ['3', '5', '18'], a: 0 }] }
      ] }
    ]
  };
  C.addPart(part3);
})(this);
