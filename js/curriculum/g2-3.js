// Nuvemath — 2-sinf, III qism (manba: I.V. Repyova, «Matematika. 2-sinf. III qism», Toshkent, 2023).
// Mavzular tartibi va nomlari darslikdan olingan; tushuntirishlar, topshiriqlar va rasmlar Nuvemath uchun qayta yozilgan.
(function (root) {
  'use strict';
  var C = root.NMCurriculum, H = C.H, L = H.L, mk = H.mk, PCS = H.PCS, choice = H.choice, pick = H.pick;
  var CELLS = L('katak', 'клеток', 'squares'), CM2 = L('cm²', 'см²', 'cm²');
  var OBJS = ['apple', 'ball', 'cube', 'star', 'pencil'], COLS = ['red', 'orange', 'blue', 'yellow', 'pink'];
  function svg(inner) { return '<div class="kd-pics"><svg viewBox="0 0 200 120" style="max-width:240px;width:100%">' + inner + '</svg></div>'; }
  var ANG = {
    right: svg('<polyline points="40,20 40,100 170,100" fill="none" stroke="#4f8dff" stroke-width="5" stroke-linejoin="round"/><rect x="40" y="82" width="18" height="18" fill="none" stroke="#ff6b8b" stroke-width="3"/>'),
    acute: svg('<polyline points="150,20 40,100 180,100" fill="none" stroke="#4f8dff" stroke-width="5" stroke-linejoin="round"/>'),
    obtuse: svg('<polyline points="10,30 70,100 190,100" fill="none" stroke="#4f8dff" stroke-width="5" stroke-linejoin="round"/>') };
  // a ta guruh, har birida b ta narsa (3D)
  function groups3d(a, b) { var o = pick(OBJS), g = []; for (var i = 0; i < a; i++) g.push({ obj: o, n: b, color: COLS[i % COLS.length] }); return g; }
  function mulCount(lo, hi) {
    return function (R) { var a = R(2, 4), b = R(lo, hi);
      return { groups: groups3d(a, b), perRow: 2, story: L('Sahnada <b>' + a + '</b> ta guruh, har birida <b>' + b + '</b> tadan. Teng qo‘shiluvchilar yig‘indisi bilan yozing: <b>jami nechta</b>?', 'На сцене <b>' + a + '</b> группы по <b>' + b + '</b> предмета. Запишите сложением одинаковых слагаемых: <b>сколько всего</b>?', 'There are <b>' + a + '</b> groups of <b>' + b + '</b>. Add the equal groups: <b>how many in total</b>?'),
        expr: a === 2 ? [b, '+', b, '=', a * b] : a === 3 ? [b, '+', b, '+', b, '=', a * b] : [b, '+', b, '+', b, '+', b, '=', a * b], ans: a * b, unit: PCS }; };
  }
  // k soni bilan ko'paytirish/bo'lish mashqi
  function tableDrill(ks, div) {
    return function (R) { var k = pick(ks), x = R(1, 10); if (div && R(0, 1)) return { q: (k * x) + ' : ' + k, a: x }; return R(0, 1) ? { q: k + ' · ' + x, a: k * x } : { q: x + ' · ' + k, a: k * x }; };
  }
  function shareProblem(ks) {
    return function (R) { var k = pick(ks), x = R(2, 9), n = k * x;
      return { story: L('<b>' + n + '</b> ta olmani <b>' + k + '</b> ta savatga teng bo‘lib solishdi. <u>Har bir savatda nechtadan</u> olma bor?', '<b>' + n + '</b> яблок разложили поровну в <b>' + k + '</b> корзины. <u>Сколько яблок в каждой корзине</u>?', '<b>' + n + '</b> apples were shared equally into <b>' + k + '</b> baskets. <u>How many apples are in each basket</u>?'),
        cond: [[L('Jami', 'Всего', 'Total'), String(n)], [L('Savatlar', 'Корзин', 'Baskets'), String(k)], [L('Har birida', 'В каждой', 'In each'), '?']], ans: x, unit: PCS, expr: [n, ':', k, '=', x] };
    };
  }
  function divDrill(k) { return function (R) { var x = R(1, 10); return { q: (k * x) + ' : ' + k, a: x }; }; }
  function timesTopic(id, lessons, a, b, color) {
    var ks = [a, b];
    return { id: id, lessons: lessons, title: L(a + ' va ' + b + ' ga ko‘paytirish va bo‘lish', 'Умножение и деление на ' + a + ' и ' + b, 'Multiplying and dividing by ' + a + ' and ' + b),
      keys: [a + ' · x', b + ' · x', ': ' + a, ': ' + b],
      scene: [{ obj: 'cube', n: a, color: color }, { obj: 'cube', n: b, color: 'orange' }],
      explain: L(a + ' ga ko‘paytirish — ' + a + ' ni necha marta qo‘shishni bildiradi: ' + a + ' · 3 = ' + a + ' + ' + a + ' + ' + a + ' = ' + (a * 3) + '. Bo‘lish — ko‘paytirishga teskari: ' + (a * 3) + ' : ' + a + ' = 3. Jadvalni yod olish uchun har kuni bir oz takrorlang!',
        'Умножить на ' + a + ' — значит сложить ' + a + ' несколько раз: ' + a + ' · 3 = ' + a + ' + ' + a + ' + ' + a + ' = ' + (a * 3) + '. Деление — обратное действие: ' + (a * 3) + ' : ' + a + ' = 3. Повторяйте таблицу понемногу каждый день!',
        'Multiplying by ' + a + ' means adding ' + a + ' several times: ' + a + ' · 3 = ' + a + ' + ' + a + ' + ' + a + ' = ' + (a * 3) + '. Division undoes it: ' + (a * 3) + ' : ' + a + ' = 3. Practise the table a little every day!'),
      rule: a + ' · 2 = ' + a * 2 + ' · ' + a + ' · 5 = ' + a * 5 + ' · ' + b + ' · 4 = ' + b * 4 + ' · ' + b * 6 + ' : ' + b + ' = 6',
      acts: [
        { type: 'drill', title: L(a + ' va ' + b + ' jadvali', 'Таблица на ' + a + ' и ' + b, 'Tables of ' + a + ' and ' + b), n: 8, make: tableDrill(ks, true) },
        { type: 'problem', title: L('Teng bo‘lish', 'Делим поровну', 'Share equally'), make: shareProblem(ks) },
        { type: 'chain', make: function (R) { var x = R(2, 5); return { start: x, ops: [['+', x * (a - 1)], ['+', x], ['−', x * 2]] }; } }
      ],
      quiz: [{ q: a + ' · 7 = ?', o: [String(a * 7), String(a + 7), String(a * 7 + a)], a: 0 }, { q: b + ' · 6 = ?', o: [String(b * 6), String(b + 6), String(b * 6 - b)], a: 0 }, { q: (b * 8) + ' : ' + b + ' = ?', o: ['8', String(b), String(b * 8 - b)], a: 0 }] };
  }

  var part3 = {
    grade: 2, part: 3, edition: L('2023-yil nashri', 'Издание 2023 г.', '2023 edition'),
    title: L('Shakllar, yuz va ko‘paytirish jadvali', 'Фигуры, площадь и таблица умножения', 'Shapes, area and times tables'),
    book: L('I.V. Repyova. Matematika, 2-sinf, III qism (Toshkent, 2023)', 'И.В. Репьева. Математика, 2 класс, часть III (Ташкент, 2023)', 'I.V. Repyova. Mathematics, Grade 2, Part III (Tashkent, 2023)'),
    intro: L('Bu qismda nur va burchaklarni, to‘g‘ri to‘rtburchak yuzini o‘rganamiz va eng muhimi — ko‘paytirish va bo‘lish jadvalini 3D guruhlar yordamida o‘zlashtiramiz!',
      'В этой части изучим лучи и углы, площадь прямоугольника и, самое главное, освоим таблицу умножения и деления с помощью 3D-групп!',
      'In this part we study rays and angles and the area of a rectangle — and most importantly, we master the multiplication and division tables with 3D groups!'),
    sections: [
      { id: 's1', title: L('Chiziqlar, burchaklar va yuz', 'Линии, углы и площадь', 'Lines, angles and area'), icon: '📐', color: 'cyan', topics: [
        { id: 't1', lessons: L('73–74-darslar', 'Уроки 73–74', 'Lessons 73–74'), title: L('To‘g‘ri chiziq, nur, kesma. Tekislik', 'Прямая, луч, отрезок. Плоскость', 'Line, ray, segment. Plane'),
          keys: [L('to‘g‘ri chiziq', 'прямая', 'line'), L('nur', 'луч', 'ray'), L('kesma', 'отрезок', 'segment'), L('tekislik', 'плоскость', 'plane')],
          scene: [{ obj: 'pencil', n: 3, color: 'blue' }],
          explain: L('<b>To‘g‘ri chiziq</b>ning oxiri yo‘q — ikki tomonga cheksiz davom etadi. <b>Nur</b>ning bitta boshi bor, ikkinchi tomonga cheksiz ketadi (quyosh nuri kabi). <b>Kesma</b>ning ikkala uchi bor. Stol usti, devor — <b>tekislik</b> bo‘lagi.',
            '<b>Прямая</b> не имеет концов — она бесконечна в обе стороны. У <b>луча</b> есть начало, а в другую сторону он бесконечен (как солнечный луч). У <b>отрезка</b> два конца. Крышка стола, стена — части <b>плоскости</b>.',
            'A <b>line</b> has no ends — it goes on forever both ways. A <b>ray</b> has a start and goes on forever the other way (like a sunbeam). A <b>segment</b> has two ends. A tabletop or a wall is part of a <b>plane</b>.'),
          rule: L('Chiziq — 0 uch · Nur — 1 uch · Kesma — 2 uch', 'Прямая — 0 концов · Луч — 1 · Отрезок — 2', 'Line — 0 ends · Ray — 1 · Segment — 2'),
          acts: [
            { type: 'choose', title: L('Bu nima?', 'Что это?', 'What is it?'), icon: '➖', make: function () { var arrow = '<polygon points="0,-6 12,0 0,6" fill="#4f8dff"/>';
              var v = pick([[0, svg('<line x1="20" y1="60" x2="180" y2="60" stroke="#4f8dff" stroke-width="4"/><g transform="translate(180,60)">' + arrow + '</g><g transform="translate(20,60) rotate(180)">' + arrow + '</g>')], [1, svg('<line x1="20" y1="60" x2="180" y2="60" stroke="#4f8dff" stroke-width="4"/><circle cx="20" cy="60" r="6" fill="#ff6b8b"/><g transform="translate(180,60)">' + arrow + '</g>')], [2, svg('<line x1="20" y1="60" x2="180" y2="60" stroke="#4f8dff" stroke-width="4"/><circle cx="20" cy="60" r="6" fill="#ff6b8b"/><circle cx="180" cy="60" r="6" fill="#ff6b8b"/>')]]);
              var names = [L('to‘g‘ri chiziq', 'прямая', 'line'), L('nur', 'луч', 'ray'), L('kesma', 'отрезок', 'segment')];
              return choice(L('Rasmdagi shakl nima?', 'Что изображено?', 'What is shown?'), [names[v[0]]].concat(names.filter(function (x, i) { return i !== v[0]; })), 0, v[1]); } },
            { type: 'choose', title: L('Necha uchi bor?', 'Сколько концов?', 'How many ends?'), icon: '🔢', make: function () { return pick([choice(L('Nurning nechta uchi bor?', 'Сколько концов у луча?', 'How many ends does a ray have?'), ['1', '2', '0'], 0), choice(L('Kesmaning nechta uchi bor?', 'Сколько концов у отрезка?', 'How many ends does a segment have?'), ['2', '1', '0'], 0), choice(L('To‘g‘ri chiziqning nechta uchi bor?', 'Сколько концов у прямой?', 'How many ends does a line have?'), ['0', '1', '2'], 0)]); } }
          ],
          quiz: [{ q: L('Bir boshi bor, ikkinchi tomoni cheksiz:', 'Есть начало, другой конец бесконечен:', 'Has a start, goes on forever the other way:'), o: [L('nur', 'луч', 'ray'), L('kesma', 'отрезок', 'segment'), L('nuqta', 'точка', 'point')], a: 0 }, { q: L('Kesma nechta uchga ega?', 'Сколько концов у отрезка?', 'How many ends does a segment have?'), o: ['2', '1', '0'], a: 0 }] },

        { id: 't2', lessons: L('75, 78-darslar', 'Уроки 75, 78', 'Lessons 75, 78'), title: L('Burchak. Burchak turlari', 'Угол. Виды углов', 'Angles. Kinds of angles'),
          keys: [L('to‘g‘ri', 'прямой', 'right'), L('o‘tkir', 'острый', 'acute'), L('o‘tmas', 'тупой', 'obtuse')],
          scene: [{ obj: 'box', n: 1, color: 'orange' }],
          explain: L('Bitta nuqtadan chiqqan ikki nur <b>burchak</b> hosil qiladi. Daftar varag‘ining burchagi — <b>to‘g‘ri</b>; undan kichigi <b>o‘tkir</b>, kattasi <b>o‘tmas</b>. To‘g‘ri burchakni varaqni ikki marta buklab yasash mumkin!',
            'Два луча из одной точки образуют <b>угол</b>. Уголок тетрадного листа — <b>прямой</b>; меньше — <b>острый</b>, больше — <b>тупой</b>. Прямой угол можно сделать, сложив лист дважды!',
            'Two rays from one point make an <b>angle</b>. A page corner is a <b>right</b> angle; smaller is <b>acute</b>, bigger is <b>obtuse</b>. Fold a sheet twice to make a right angle!'),
          rule: L('o‘tkir &lt; to‘g‘ri &lt; o‘tmas', 'острый &lt; прямой &lt; тупой', 'acute &lt; right &lt; obtuse'),
          acts: [
            { type: 'choose', title: L('Qanday burchak?', 'Какой угол?', 'Which angle?'), icon: '📐', make: function () { var k = pick(['right', 'acute', 'obtuse']), n = { right: L('to‘g‘ri', 'прямой', 'right'), acute: L('o‘tkir', 'острый', 'acute'), obtuse: L('o‘tmas', 'тупой', 'obtuse') };
              return choice(L('Rasmdagi burchak qanday?', 'Какой угол на рисунке?', 'What angle is this?'), [n[k]].concat(['right', 'acute', 'obtuse'].filter(function (x) { return x !== k; }).map(function (x) { return n[x]; })), 0, ANG[k]); } },
            { type: 'choose', title: L('Soat strelkalari burchagi', 'Угол между стрелками часов', 'Angle between clock hands'), icon: '🕒', make: function () { var v = pick([[3, 'right'], [9, 'right'], [1, 'acute'], [2, 'acute'], [5, 'obtuse'], [4, 'obtuse']]), n = { right: L('to‘g‘ri', 'прямой', 'right'), acute: L('o‘tkir', 'острый', 'acute'), obtuse: L('o‘tmas', 'тупой', 'obtuse') };
              return choice(L('Soat ' + v[0] + ':00 ni ko‘rsatganda strelkalar qanday burchak hosil qiladi?', 'Какой угол образуют стрелки, когда часы показывают ' + v[0] + ':00?', 'What angle do the hands make at ' + v[0] + ':00?'), [n[v[1]]].concat(['right', 'acute', 'obtuse'].filter(function (x) { return x !== v[1]; }).map(function (x) { return n[x]; })), 0); } }
          ],
          quiz: [{ q: L('Kvadrat burchaklari qanday?', 'Какие углы у квадрата?', 'What are a square’s angles?'), o: [L('to‘g‘ri', 'прямые', 'right'), L('o‘tkir', 'острые', 'acute'), L('o‘tmas', 'тупые', 'obtuse')], a: 0 }, { q: L('To‘g‘ri burchakdan katta burchak?', 'Угол больше прямого?', 'An angle bigger than a right angle?'), o: [L('o‘tmas', 'тупой', 'obtuse'), L('o‘tkir', 'острый', 'acute')], a: 0 }] },

        { id: 't3', lessons: L('76–80-darslar', 'Уроки 76–80', 'Lessons 76–80'), title: L('To‘g‘ri to‘rtburchak va kvadrat xossalari', 'Свойства прямоугольника и квадрата', 'Properties of rectangles and squares'),
          keys: [L('qarama-qarshi tomonlar teng', 'противоположные стороны равны', 'opposite sides equal'), L('4 ta to‘g‘ri burchak', '4 прямых угла', '4 right angles'), L('katak qog‘oz', 'клетчатая бумага', 'squared paper')],
          scene: [{ obj: 'box', n: 2, color: 'green' }, { obj: 'cube', n: 1, color: 'yellow' }],
          explain: L('To‘g‘ri to‘rtburchakning 4 burchagi ham to‘g‘ri, qarama-qarshi tomonlari teng. Kvadratning esa 4 tomoni ham teng. Katak qog‘ozda ularni kataklar bo‘ylab oson chizish mumkin.',
            'У прямоугольника все 4 угла прямые, противоположные стороны равны. У квадрата равны все 4 стороны. На клетчатой бумаге их легко чертить по клеткам.',
            'A rectangle has 4 right angles and equal opposite sides. A square has all 4 sides equal. On squared paper they are easy to draw along the lines.'),
          rule: L('Perimetr: to‘g‘ri to‘rtburchak (a + b) + (a + b), kvadrat a + a + a + a', 'Периметр: прямоугольник (a + b) + (a + b), квадрат a + a + a + a', 'Perimeter: rectangle (a + b) + (a + b), square a + a + a + a'),
          acts: [
            { type: 'polygon', title: L('To‘g‘ri to‘rtburchak perimetri', 'Периметр прямоугольника', 'Rectangle perimeter'), make: function (R) { var a = R(4, 12), b = R(2, a); return { kind: 'rect', sides: [a, b], ans: 2 * (a + b), story: L('<b>Perimetrni</b> toping.', 'Найдите <b>периметр</b>.', 'Find the <b>perimeter</b>.') }; } },
            { type: 'grid', title: L('Katak qog‘ozda perimetr', 'Периметр на клетках', 'Perimeter on squared paper'), make: function (R) { var a = R(2, 8), b = R(2, 5); return { a: a, b: b, ask: 'perimeter', ans: 2 * (a + b), unit: L('katak tomoni', 'сторон клеток', 'square sides'), story: L('Shakl perimetrini katak tomonlarida toping.', 'Найдите периметр фигуры в сторонах клеток.', 'Find the perimeter in square sides.') }; } }
          ],
          quiz: [{ q: L('To‘g‘ri to‘rtburchakning nechta to‘g‘ri burchagi bor?', 'Сколько прямых углов у прямоугольника?', 'How many right angles does a rectangle have?'), o: ['4', '2', '1'], a: 0 }, { q: L('6 cm va 3 cm to‘g‘ri to‘rtburchak. P = ?', 'Прямоугольник 6 см и 3 см. P = ?', 'A 6 cm by 3 cm rectangle. P = ?'), o: ['18', '9', '12'], a: 0 }] },

        { id: 't4', lessons: L('81–84-darslar', 'Уроки 81–84', 'Lessons 81–84'), title: L('Yuz. Yuz o‘lchov birliklari', 'Площадь. Единицы площади', 'Area. Units of area'),
          keys: [L('yuz', 'площадь', 'area'), L('kvadrat santimetr (cm²)', 'квадратный сантиметр (см²)', 'square centimetre (cm²)')],
          scene: [{ obj: 'cube', n: 6, color: 'cyan' }],
          explain: L('Shakl qancha joy egallashi — uning <b>yuzi</b>. Uni kataklar bilan o‘lchaymiz: nechta katak sig‘sa, yuz shuncha. Tomoni 1 cm bo‘lgan kvadrat — <b>1 cm²</b> (kvadrat santimetr).',
            'Сколько места занимает фигура — это её <b>площадь</b>. Её измеряют клетками: сколько клеток помещается, такова и площадь. Квадрат со стороной 1 см — это <b>1 см²</b>.',
            'How much space a shape covers is its <b>area</b>. We measure it in squares: however many squares fit, that is the area. A square with 1 cm sides is <b>1 cm²</b>.'),
          rule: L('Yuz = kataklar soni · 1 cm² — tomoni 1 cm li kvadrat', 'Площадь = число клеток · 1 см² — квадрат со стороной 1 см', 'Area = number of squares · 1 cm² — a square with 1 cm sides'),
          acts: [
            { type: 'grid', title: L('Kataklarni sanang', 'Посчитайте клетки', 'Count the squares'), make: function (R) { var a = R(2, 6), b = R(2, 4); return { a: a, b: b, ask: 'area', ans: a * b, unit: CELLS, story: L('Shakl <b>nechta katakdan</b> iborat? Bu uning yuzi.', 'Из <b>скольких клеток</b> состоит фигура? Это её площадь.', 'How <b>many squares</b> make the shape? That is its area.') }; } },
            { type: 'choose', title: L('Qaysi biri kattaroq?', 'Что больше?', 'Which is bigger?'), icon: '▦', make: function (R) { var a = R(2, 5), b = R(2, 5), c = R(2, 5), d = R(2, 5); while (a * b === c * d) d = R(2, 5);
              return choice(L('A: ' + a + '×' + b + ' katak, B: ' + c + '×' + d + ' katak. Qaysi shaklning yuzi katta?', 'A: ' + a + '×' + b + ' клеток, B: ' + c + '×' + d + ' клеток. У какой фигуры площадь больше?', 'A: ' + a + '×' + b + ' squares, B: ' + c + '×' + d + ' squares. Which has the bigger area?'), ['A', 'B'], a * b > c * d ? 0 : 1); } }
          ],
          quiz: [{ q: L('3 qatorda 4 tadan katak. Yuz?', '3 ряда по 4 клетки. Площадь?', '3 rows of 4 squares. Area?'), o: ['12', '7', '14'], a: 0 }, { q: L('Yuz birligi?', 'Единица площади?', 'A unit of area?'), o: ['cm²', 'cm', 'kg'], a: 0 }] }
      ] },

      { id: 's2', title: L('Ko‘paytirish', 'Умножение', 'Multiplication'), icon: '✖️', color: 'violet', topics: [
        { id: 't5', lessons: L('85-dars', 'Урок 85', 'Lesson 85'), title: L('Ko‘paytirish tushunchasi', 'Понятие умножения', 'What multiplication is'),
          keys: [L('teng qo‘shiluvchilar', 'одинаковые слагаемые', 'equal addends'), L('ko‘paytirish (·)', 'умножение (·)', 'multiplying (·)')],
          scene: [{ obj: 'apple', n: 3, color: 'red' }, { obj: 'apple', n: 3, color: 'red' }, { obj: 'apple', n: 3, color: 'red' }],
          explain: L('Teng qo‘shiluvchilarni qisqa yozish mumkin: 3 + 3 + 3 + 3 = 3 · 4 = 12. Bu — <b>ko‘paytirish</b>: «3 ni 4 marta olish». Sahnadagi teng guruhlarni sanang!',
            'Одинаковые слагаемые можно записать короче: 3 + 3 + 3 + 3 = 3 · 4 = 12. Это <b>умножение</b>: «взять 3 четыре раза». Посчитайте равные группы на сцене!',
            'Equal addends can be written shorter: 3 + 3 + 3 + 3 = 3 · 4 = 12. That is <b>multiplication</b>: “take 3 four times”. Count the equal groups on the stage!'),
          rule: '3 + 3 + 3 + 3 = 3 · 4 = 12',
          acts: [
            { type: 'count3d', title: L('3D: teng guruhlar', '3D: равные группы', '3D: equal groups'), make: mulCount(2, 5) },
            { type: 'drill', title: L('Qo‘shishni ko‘paytirishga', 'Сложение → умножение', 'Addition → multiplication'), n: 6, make: function (R) { var a = R(2, 9), n = R(2, 5), s = []; for (var i = 0; i < n; i++) s.push(a); return { q: s.join(' + '), a: a * n }; } }
          ],
          quiz: [{ q: '4 + 4 + 4 = 4 · ?', o: ['3', '4', '12'], a: 0 }, { q: '5 · 2 = ?', o: ['10', '7', '52'], a: 0 }, { q: L('2 · 6 bu...', '2 · 6 — это...', '2 · 6 means...'), o: ['2 + 2 + 2 + 2 + 2 + 2', '2 + 6', '6 + 6 + 6'], a: 0 }] },

        { id: 't6', lessons: L('86–88-darslar', 'Уроки 86–88', 'Lessons 86–88'), title: L('To‘g‘ri to‘rtburchak yuzi. Ko‘paytirish komponentlari', 'Площадь прямоугольника. Компоненты умножения', 'Rectangle area. Parts of multiplication'),
          keys: [L('ko‘paytuvchi', 'множитель', 'factor'), L('ko‘paytma', 'произведение', 'product'), 'S = a · b', 'a · b = b · a'],
          scene: [{ obj: 'cube', n: 4, color: 'blue' }, { obj: 'cube', n: 4, color: 'blue' }, { obj: 'cube', n: 4, color: 'blue' }],
          explain: L('3 · 4 = 12: 3 va 4 — <b>ko‘paytuvchilar</b>, 12 — <b>ko‘paytma</b>. To‘g‘ri to‘rtburchak yuzi = bo‘yi · eni (qatordagi kataklar × qatorlar). Ko‘paytuvchilar o‘rnini almashtirsa, ko‘paytma o‘zgarmaydi.',
            '3 · 4 = 12: 3 и 4 — <b>множители</b>, 12 — <b>произведение</b>. Площадь прямоугольника = длина · ширина (клеток в ряду × ряды). От перестановки множителей произведение не меняется.',
            '3 · 4 = 12: 3 and 4 are <b>factors</b>, 12 is the <b>product</b>. A rectangle’s area = length · width (squares in a row × rows). Swapping the factors doesn’t change the product.'),
          rule: 'S = a · b · a · b = b · a',
          acts: [
            { type: 'grid', title: L('Yuzni ko‘paytirib toping', 'Найдите площадь умножением', 'Find the area by multiplying'), make: function (R) { var a = R(2, 9), b = R(2, 6); return { a: a, b: b, ask: 'area', ans: a * b, unit: CM2, story: L('Har bir katak — 1 cm². Bo‘yi ' + a + ' cm, eni ' + b + ' cm. <b>Yuzi</b>?', 'Каждая клетка — 1 см². Длина ' + a + ' см, ширина ' + b + ' см. <b>Площадь</b>?', 'Each square is 1 cm². Length ' + a + ' cm, width ' + b + ' cm. <b>Area</b>?') }; } },
            { type: 'choose', title: L('Nomini toping', 'Назовите', 'Name it'), icon: '🏷️', make: function (R) { var a = R(2, 9), b = R(2, 9); return choice(L(a + ' · ' + b + ' = ' + a * b + ' ifodada <b>' + a * b + '</b> nima?', 'Что такое <b>' + a * b + '</b> в ' + a + ' · ' + b + ' = ' + a * b + '?', 'In ' + a + ' · ' + b + ' = ' + a * b + ', what is <b>' + a * b + '</b>?'), [L('ko‘paytma', 'произведение', 'product'), L('ko‘paytuvchi', 'множитель', 'factor'), L('yig‘indi', 'сумма', 'sum')], 0); } }
          ],
          quiz: [{ q: L('Bo‘yi 5 cm, eni 3 cm. Yuzi?', 'Длина 5 см, ширина 3 см. Площадь?', '5 cm by 3 cm. Area?'), o: ['15', '8', '16'], a: 0 }, { q: '7 · 2 = 2 · ?', o: ['7', '2', '14'], a: 0 }] },

        { id: 't7', lessons: L('89–92-darslar', 'Уроки 89–92', 'Lessons 89–92'), title: L('1 ga va 2 ga ko‘paytirish', 'Умножение на 1 и на 2', 'Multiplying by 1 and 2'),
          keys: ['a · 1 = a', '2 · a = a + a'],
          scene: [{ obj: 'ball', n: 2, color: 'pink' }, { obj: 'ball', n: 2, color: 'pink' }, { obj: 'ball', n: 2, color: 'pink' }],
          explain: L('Har qanday sonni 1 ga ko‘paytirsak — o‘zi qoladi: 47 · 1 = 47. 2 ga ko‘paytirish — sonni ikki marta olish: 2 · 8 = 8 + 8 = 16.',
            'Любое число, умноженное на 1, не меняется: 47 · 1 = 47. Умножить на 2 — взять число дважды: 2 · 8 = 8 + 8 = 16.',
            'Any number times 1 stays the same: 47 · 1 = 47. Multiplying by 2 means taking the number twice: 2 · 8 = 8 + 8 = 16.'),
          rule: 'a · 1 = a · 2 · a = a + a',
          acts: [
            { type: 'count3d', title: L('3D: ikkitadan', '3D: по два', '3D: in twos'), make: function (R) { var a = R(2, 4); return { groups: groups3d(a, 2), perRow: 2, story: L('Har guruhda 2 tadan. <b>Jami nechta</b>?', 'В каждой группе по 2. <b>Сколько всего</b>?', 'Two in each group. <b>How many in total</b>?'), expr: a === 2 ? [2, '+', 2, '=', 4] : a === 3 ? [2, '+', 2, '+', 2, '=', 6] : [2, '+', 2, '+', 2, '+', 2, '=', 8], ans: a * 2, unit: PCS }; } },
            { type: 'drill', title: L('1 va 2 ga ko‘paytirish', 'Умножение на 1 и 2', 'Times 1 and 2'), n: 8, make: function (R) { var x = R(1, 10), y = R(10, 99); return pick([{ q: '2 · ' + x, a: 2 * x }, { q: x + ' · 2', a: 2 * x }, { q: y + ' · 1', a: y }, { q: '1 · ' + y, a: y }]); } }
          ],
          quiz: [{ q: '58 · 1 = ?', o: ['58', '59', '1'], a: 0 }, { q: '2 · 9 = ?', o: ['18', '11', '29'], a: 0 }, { q: '7 · 2 = ?', o: ['14', '9', '72'], a: 0 }] }
      ] },

      { id: 's3', title: L('Bo‘lish va jadval: 2–5', 'Деление и таблица: 2–5', 'Division and tables: 2–5'), icon: '➗', color: 'green', topics: [
        { id: 't8', lessons: L('93-dars', 'Урок 93', 'Lesson 93'), title: L('Sonni bo‘lish. Bo‘lish komponentlari', 'Деление. Компоненты деления', 'Division. Parts of division'),
          keys: [L('bo‘linuvchi', 'делимое', 'dividend'), L('bo‘luvchi', 'делитель', 'divisor'), L('bo‘linma', 'частное', 'quotient')],
          scene: [{ obj: 'apple', n: 4, color: 'red' }, { obj: 'apple', n: 4, color: 'green' }],
          explain: L('<b>Bo‘lish</b> — teng taqsimlash. 8 ta olmani 2 kishiga teng bo‘lsak, har biriga 4 ta: 8 : 2 = 4. 8 — <b>bo‘linuvchi</b>, 2 — <b>bo‘luvchi</b>, 4 — <b>bo‘linma</b>.',
            '<b>Деление</b> — это раздел поровну. Если 8 яблок разделить на двоих, каждому достанется 4: 8 : 2 = 4. 8 — <b>делимое</b>, 2 — <b>делитель</b>, 4 — <b>частное</b>.',
            '<b>Division</b> is sharing equally. Share 8 apples between 2 people and each gets 4: 8 : 2 = 4. 8 is the <b>dividend</b>, 2 the <b>divisor</b>, 4 the <b>quotient</b>.'),
          rule: L('bo‘linuvchi : bo‘luvchi = bo‘linma', 'делимое : делитель = частное', 'dividend : divisor = quotient'),
          acts: [
            { type: 'count3d', title: L('3D: teng bo‘ling', '3D: разделите поровну', '3D: share equally'), make: function (R) { var k = R(2, 3), x = R(2, 4), o = pick(OBJS), g = []; for (var i = 0; i < k; i++) g.push({ obj: o, n: x, color: COLS[i] });
              return { groups: g, perRow: 2, story: L('<b>' + k * x + '</b> ta narsa <b>' + k + '</b> ta guruhga teng bo‘lindi. <b>Har guruhda nechta</b>?', '<b>' + k * x + '</b> предметов разделили поровну на <b>' + k + '</b> группы. <b>Сколько в каждой</b>?', '<b>' + k * x + '</b> objects were shared equally into <b>' + k + '</b> groups. <b>How many in each</b>?'), ans: x, unit: PCS }; } },
            { type: 'choose', title: L('Nomini toping', 'Назовите', 'Name it'), icon: '🏷️', make: function (R) { var a = R(2, 9), b = R(2, 9); return choice(L(a * b + ' : ' + a + ' = ' + b + ' da <b>' + a + '</b> nima?', 'Что такое <b>' + a + '</b> в ' + a * b + ' : ' + a + ' = ' + b + '?', 'In ' + a * b + ' : ' + a + ' = ' + b + ', what is <b>' + a + '</b>?'), [L('bo‘luvchi', 'делитель', 'divisor'), L('bo‘linuvchi', 'делимое', 'dividend'), L('bo‘linma', 'частное', 'quotient')], 0); } }
          ],
          quiz: [{ q: '10 : 2 = ?', o: ['5', '8', '12'], a: 0 }, { q: L('12 : 3 = 4. 4 nima?', '12 : 3 = 4. Что такое 4?', '12 : 3 = 4. What is 4?'), o: [L('bo‘linma', 'частное', 'quotient'), L('bo‘luvchi', 'делитель', 'divisor'), L('bo‘linuvchi', 'делимое', 'dividend')], a: 0 }] },

        { id: 't9', lessons: L('94–96-darslar', 'Уроки 94–96', 'Lessons 94–96'), title: L('2 ga bo‘lish. Juft va toq sonlar', 'Деление на 2. Чётные и нечётные', 'Dividing by 2. Even and odd'),
          keys: [': 2', L('juft', 'чётное', 'even'), L('toq', 'нечётное', 'odd')],
          scene: [{ obj: 'cube', n: 5, color: 'blue' }, { obj: 'cube', n: 5, color: 'pink' }],
          explain: L('2 ga qoldiqsiz bo‘linadigan sonlar — <b>juft</b> (0, 2, 4, 6, 8 bilan tugaydi). Qolganlari — <b>toq</b> (1, 3, 5, 7, 9 bilan tugaydi). 18 : 2 = 9, chunki 9 · 2 = 18.',
            'Числа, которые делятся на 2 без остатка, — <b>чётные</b> (оканчиваются на 0, 2, 4, 6, 8). Остальные — <b>нечётные</b> (на 1, 3, 5, 7, 9). 18 : 2 = 9, потому что 9 · 2 = 18.',
            'Numbers that divide by 2 exactly are <b>even</b> (they end in 0, 2, 4, 6, 8). The rest are <b>odd</b> (ending in 1, 3, 5, 7, 9). 18 : 2 = 9 because 9 · 2 = 18.'),
          rule: '18 : 2 = 9 ↔ 9 · 2 = 18',
          acts: [
            { type: 'drill', title: L('2 ga bo‘ling', 'Разделите на 2', 'Divide by 2'), n: 8, make: divDrill(2) },
            { type: 'choose', title: L('Juftmi yoki toq?', 'Чётное или нечётное?', 'Even or odd?'), icon: '🧦', make: function (R) { var n = R(10, 99); return choice('<span class="kd-big">' + n + '</span>', [L('juft', 'чётное', 'even'), L('toq', 'нечётное', 'odd')], n % 2 ? 1 : 0); } }
          ],
          quiz: [{ q: '16 : 2 = ?', o: ['8', '14', '32'], a: 0 }, { q: L('Qaysi son juft?', 'Какое число чётное?', 'Which is even?'), o: ['34', '27', '51'], a: 0 }] },

        timesTopic('t10', L('97–98-darslar', 'Уроки 97–98', 'Lessons 97–98'), 3, 2, 'violet'),
        timesTopic('t11', L('99–102-darslar', 'Уроки 99–102', 'Lessons 99–102'), 4, 5, 'cyan'),

        { id: 't12', lessons: L('103–104-darslar', 'Уроки 103–104', 'Lessons 103–104'), title: L('Bir necha marta orttirish va kamaytirish', 'Увеличение и уменьшение в несколько раз', 'Times as many and times fewer'),
          keys: [L('… marta ko‘p (·)', 'в … раз больше (·)', '… times as many (·)'), L('… marta kam (:)', 'в … раз меньше (:)', '… times fewer (:)')],
          scene: [{ obj: 'star', n: 2, color: 'yellow' }, { obj: 'star', n: 6, color: 'pink' }],
          explain: L('«3 <b>marta</b> ko‘p» — ko‘paytiramiz: 4 · 3 = 12. «3 marta kam» — bo‘lamiz: 12 : 3 = 4. «Ta ko‘p» (qo‘shish) bilan «marta ko‘p» (ko‘paytirish)ni adashtirmang!',
            '«В 3 <b>раза</b> больше» — умножаем: 4 · 3 = 12. «В 3 раза меньше» — делим: 12 : 3 = 4. Не путайте «на … больше» (сложение) и «в … раз больше» (умножение)!',
            '“3 <b>times</b> as many” — multiply: 4 · 3 = 12. “3 times fewer” — divide: 12 : 3 = 4. Don’t mix up “… more” (adding) with “… times as many” (multiplying)!'),
          rule: L('marta ko‘p → · · marta kam → :', 'в … раз больше → · · в … раз меньше → :', 'times as many → · · times fewer → :'),
          acts: [
            { type: 'problem', title: L('Marta ko‘p', 'В несколько раз больше', 'Times as many'), make: function (R) { var a = R(2, 9), k = R(2, 5);
              return { story: L('Akmalda <b>' + a + '</b> ta marka bor. Sardorda <b>' + k + ' marta</b> ko‘p. <u>Sardorda nechta</u>?', 'У Акмаля <b>' + a + '</b> марок. У Сардора в <b>' + k + ' раза</b> больше. <u>Сколько у Сардора</u>?', 'Akmal has <b>' + a + '</b> stamps. Sardor has <b>' + k + ' times</b> as many. <u>How many does Sardor have</u>?'),
                ans: a * k, unit: PCS, expr: [a, '·', k, '=', a * k] }; } },
            { type: 'choose', title: L('Qaysi amal?', 'Какое действие?', 'Which operation?'), icon: '❓', make: function (R) { var a = R(3, 9) * 2, k = 2; return pick([
              choice(L(a + ' dan 2 marta kam son?', 'Число в 2 раза меньше, чем ' + a + '?', 'Half as many as ' + a + '?'), [String(a / 2), String(a - 2), String(a * 2)], 0),
              choice(L(a + ' dan 2 ta kam son?', 'Число на 2 меньше, чем ' + a + '?', '2 fewer than ' + a + '?'), [String(a - 2), String(a / 2), String(a + 2)], 0),
              choice(L(a + ' dan 2 marta ko‘p son?', 'Число в 2 раза больше, чем ' + a + '?', 'Twice as many as ' + a + '?'), [String(a * k), String(a + 2), String(a / 2)], 0)]); } }
          ],
          quiz: [{ q: L('5 dan 3 marta ko‘p?', 'В 3 раза больше, чем 5?', '3 times as many as 5?'), o: ['15', '8', '2'], a: 0 }, { q: L('20 dan 4 marta kam?', 'В 4 раза меньше, чем 20?', '4 times fewer than 20?'), o: ['5', '16', '80'], a: 0 }] }
      ] },

      { id: 's4', title: L('Jadval: 6–9', 'Таблица: 6–9', 'Tables: 6–9'), icon: '🧮', color: 'orange', topics: [
        timesTopic('t13', L('105–108-darslar', 'Уроки 105–108', 'Lessons 105–108'), 6, 7, 'pink'),
        timesTopic('t14', L('109–112-darslar', 'Уроки 109–112', 'Lessons 109–112'), 8, 9, 'green'),
        { id: 't15', lessons: L('113–116-darslar', 'Уроки 113–116', 'Lessons 113–116'), title: L('Ko‘paytirish jadvali. Bo‘luvchilar va karralilar', 'Таблица умножения. Делители и кратные', 'The times table. Factors and multiples'),
          keys: [L('ko‘paytirish jadvali', 'таблица умножения', 'times table'), L('bo‘luvchi', 'делитель', 'factor'), L('karrali', 'кратное', 'multiple')],
          scene: [{ obj: 'cube', n: 9, color: 'yellow' }],
          explain: L('Butun ko‘paytirish jadvalini bilsak, bo‘lish ham oson: 7 · 8 = 56 → 56 : 8 = 7, 56 : 7 = 8. 56 soni 7 ga va 8 ga <b>karrali</b>, 7 va 8 esa 56 ning <b>bo‘luvchilari</b>.',
            'Зная всю таблицу умножения, легко делить: 7 · 8 = 56 → 56 : 8 = 7, 56 : 7 = 8. Число 56 <b>кратно</b> 7 и 8, а 7 и 8 — <b>делители</b> 56.',
            'Know the whole times table and division is easy: 7 · 8 = 56 → 56 : 8 = 7 and 56 : 7 = 8. 56 is a <b>multiple</b> of 7 and 8; 7 and 8 are <b>factors</b> of 56.'),
          rule: 'a · b = c → c : b = a, c : a = b',
          acts: [
            { type: 'drill', title: L('Aralash jadval', 'Вся таблица', 'Mixed tables'), n: 10, make: tableDrill([2, 3, 4, 5, 6, 7, 8, 9], true) },
            { type: 'choose', title: L('Karralimi?', 'Кратно?', 'A multiple?'), icon: '🔢', make: function (R) { var k = R(2, 9), yes = R(0, 1), n = yes ? k * R(2, 10) : k * R(2, 9) + R(1, k - 1);
              return choice(mk(function (l) { return '<span class="kd-big">' + n + '</span> — ' + { uz: k + ' ga karralimi?', ru: 'кратно ' + k + '?', en: 'a multiple of ' + k + '?' }[l]; }), [L('ha', 'да', 'yes'), L('yo‘q', 'нет', 'no')], yes ? 0 : 1); } },
            { type: 'problem', title: L('Teng bo‘lish', 'Делим поровну', 'Share equally'), make: shareProblem([6, 7, 8, 9]) }
          ],
          quiz: [{ q: '6 · 7 = ?', o: ['42', '36', '48'], a: 0 }, { q: '72 : 9 = ?', o: ['8', '7', '9'], a: 0 }, { q: L('Qaysi biri 24 ning bo‘luvchisi?', 'Какое число — делитель 24?', 'Which is a factor of 24?'), o: ['6', '5', '7'], a: 0 }] }
      ] }
    ]
  };
  C.addPart(part3);
})(this);
