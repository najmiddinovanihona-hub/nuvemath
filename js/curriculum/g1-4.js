// Nuvemath — 1-sinf, IV qism (manba: I.V. Repyova, Y.V. Zemlina, «Matematika. 1-sinf. IV qism», Toshkent, 2023).
// Mavzular tartibi va nomlari darslikdan olingan; tushuntirishlar, topshiriqlar va rasmlar Nuvemath uchun qayta yozilgan.
(function (root) {
  'use strict';
  var C = root.NMCurriculum, H = C.H, L = H.L, mk = H.mk, PCS = H.PCS, CM = H.CM, choice = H.choice, pick = H.pick;
  var SH = { cube: L('kub', 'куб', 'cube'), ball: L('shar', 'шар', 'sphere'), cone: L('konus', 'конус', 'cone'), cylinder: L('silindr', 'цилиндр', 'cylinder'), pyramid: L('piramida', 'пирамида', 'pyramid'), box: L('parallelepiped', 'параллелепипед', 'cuboid') };
  var COLORS = ['blue', 'orange', 'green', 'pink', 'violet', 'cyan'];
  function svg(inner, w) { return '<div class="kd-pics"><svg viewBox="0 0 200 120" style="max-width:' + (w || 240) + 'px;width:100%">' + inner + '</svg></div>'; }
  var ST = 'fill="rgba(79,141,255,.18)" stroke="#4f8dff" stroke-width="4" stroke-linejoin="round"';
  var ANG = {
    right: svg('<polyline points="40,20 40,100 170,100" fill="none" stroke="#4f8dff" stroke-width="5" stroke-linejoin="round"/><rect x="40" y="82" width="18" height="18" fill="none" stroke="#ff6b8b" stroke-width="3"/>'),
    acute: svg('<polyline points="150,20 40,100 180,100" fill="none" stroke="#4f8dff" stroke-width="5" stroke-linejoin="round"/>'),
    obtuse: svg('<polyline points="10,30 70,100 190,100" fill="none" stroke="#4f8dff" stroke-width="5" stroke-linejoin="round"/>') };
  var FIG = {
    tri: svg('<polygon points="100,12 180,108 20,108" ' + ST + '/>'),
    quad: svg('<polygon points="30,20 170,30 150,105 45,95" ' + ST + '/>'),
    pent: svg('<polygon points="100,10 185,55 150,110 50,110 15,55" ' + ST + '/>'),
    hex: svg('<polygon points="55,10 145,10 190,60 145,110 55,110 10,60" ' + ST + '/>'),
    square: svg('<rect x="50" y="10" width="100" height="100" ' + ST + '/>'),
    rect: svg('<rect x="15" y="25" width="170" height="70" ' + ST + '/>'),
    circle: svg('<circle cx="100" cy="60" r="50" ' + ST + '/>') };

  var part4 = {
    grade: 1, part: 4, edition: L('2023-yil nashri', 'Издание 2023 г.', '2023 edition'),
    title: L('Shakllar, ifodalar va tenglamalar', 'Фигуры, выражения и уравнения', 'Shapes, expressions and equations'),
    book: L('I.V. Repyova, Y.V. Zemlina. Matematika, 1-sinf, IV qism (Toshkent, 2023)', 'И.В. Репьева, Ю.В. Земцова. Математика, 1 класс, часть IV (Ташкент, 2023)', 'I.V. Repyova, Y.V. Zemlina. Mathematics, Grade 1, Part IV (Tashkent, 2023)'),
    intro: L('Bu qismda kesmalarni o‘lchaymiz, ko‘pburchaklar perimetrini topamiz, burchak va simmetriya bilan tanishamiz, ifodalar va Rim raqamlarini o‘rganamiz hamda birinchi tenglamalarimizni yechamiz!',
      'В этой части мы измеряем отрезки, находим периметр многоугольников, знакомимся с углами и симметрией, изучаем выражения и римские цифры и решаем первые уравнения!',
      'In this part we measure segments, find the perimeter of polygons, meet angles and symmetry, learn about expressions and Roman numerals and solve our first equations!'),
    sections: [
      // ============ 1-BO'LIM ============
      { id: 's1', title: L('Kesmalar va ko‘pburchaklar', 'Отрезки и многоугольники', 'Segments and polygons'), icon: '📏', color: 'cyan', topics: [
        { id: 't1', lessons: L('112–114, 141-darslar', 'Уроки 112–114, 141', 'Lessons 112–114, 141'), title: L('Kesma va uning uzunligi', 'Отрезок и его длина', 'A segment and its length'),
          keys: [L('kesma', 'отрезок', 'segment'), L('uzunlik', 'длина', 'length'), L('chizg‘ich', 'линейка', 'ruler')],
          scene: [{ obj: 'pencil', n: 3, color: 'cyan' }],
          explain: L('Kesmaning ikki uchi bor, uning uzunligini chizg‘ich bilan o‘lchaymiz. Agar kesmani nuqta bilan ikki qismga bo‘lsak, qismlar uzunliklari yig‘indisi butun kesma uzunligiga teng.',
            'У отрезка два конца, его длину измеряют линейкой. Если точка делит отрезок на две части, сумма их длин равна длине всего отрезка.',
            'A segment has two ends and we measure its length with a ruler. If a point splits a segment into two parts, their lengths add up to the whole segment.'),
          rule: 'AB = AC + CB',
          acts: [
            { type: 'ruler', title: L('Kesmani o‘lchang', 'Измерьте отрезок', 'Measure the segment'), mode: 'segment', make: function (R) { var s = R(0, 4), l = R(3, 10); return { len: l, start: s, max: 15, story: L('AB kesma uzunligi necha cm?', 'Какова длина отрезка AB в см?', 'How long is segment AB in cm?') }; } },
            { type: 'problem', title: L('Kesma qismlari', 'Части отрезка', 'Parts of a segment'), make: H.whole({ a: [2, 9], b: [2, 9], u: CM, labels: ['AC', 'CB'], cond: ['AC', 'CB'],
              text: function (a, b) { return L('C nuqta AB kesmani ikki qismga bo‘ldi: AC = <b>' + a + '</b> cm, CB = <b>' + b + '</b> cm. <u>AB kesma uzunligi</u> qancha?', 'Точка C делит отрезок AB: AC = <b>' + a + '</b> см, CB = <b>' + b + '</b> см. <u>Какова длина AB</u>?', 'Point C splits AB: AC = <b>' + a + '</b> cm, CB = <b>' + b + '</b> cm. <u>How long is AB</u>?'); } }) }
          ],
          quiz: [
            { q: L('AC = 4 cm, CB = 5 cm. AB = ?', 'AC = 4 см, CB = 5 см. AB = ?', 'AC = 4 cm, CB = 5 cm. AB = ?'), o: ['9', '1', '45'], a: 0 },
            { q: L('AB = 10 cm, AC = 3 cm. CB = ?', 'AB = 10 см, AC = 3 см. CB = ?', 'AB = 10 cm, AC = 3 cm. CB = ?'), o: ['7', '13', '3'], a: 0 },
            { q: L('Kesma uzunligi nima bilan o‘lchanadi?', 'Чем измеряют длину отрезка?', 'What measures a segment’s length?'), o: [L('Chizg‘ich', 'Линейкой', 'A ruler'), L('Tarozi', 'Весами', 'Scales'), L('Soat', 'Часами', 'A clock')], a: 0 }
          ] },

        { id: 't2', lessons: L('115-dars', 'Урок 115', 'Lesson 115'), title: L('Siniq chiziqning uzunligi', 'Длина ломаной', 'Length of a broken line'),
          keys: [L('siniq chiziq', 'ломаная', 'broken line'), L('bo‘g‘in', 'звено', 'link')],
          scene: [{ obj: 'pencil', n: 4, color: 'orange' }],
          explain: L('Siniq chiziq bir nechta kesmadan — <b>bo‘g‘in</b>lardan iborat. Uning uzunligini topish uchun barcha bo‘g‘inlar uzunliklarini <b>qo‘shamiz</b>.',
            'Ломаная состоит из нескольких отрезков — <b>звеньев</b>. Чтобы найти её длину, <b>складываем</b> длины всех звеньев.',
            'A broken line is made of several segments called <b>links</b>. To find its length we <b>add</b> the lengths of all the links.'),
          rule: L('Uzunlik = 1-bo‘g‘in + 2-bo‘g‘in + ...', 'Длина = 1-е звено + 2-е звено + ...', 'Length = link 1 + link 2 + ...'),
          acts: [
            { type: 'polygon', title: L('Siniq chiziq uzunligi', 'Длина ломаной', 'Broken-line length'), make: function (R) { var n = R(3, 4), s = []; for (var i = 0; i < n; i++) s.push(R(2, 9)); return { kind: 'broken', sides: s, ans: s.reduce(function (a, b) { return a + b; }, 0), story: L('Siniq chiziq uzunligini toping.', 'Найдите длину ломаной.', 'Find the length of the broken line.') }; } },
            { type: 'polygon', title: L('Yana bitta', 'Ещё одна', 'One more'), make: function (R) { var s = [R(5, 15), R(5, 15)]; return { kind: 'broken', sides: s, ans: s[0] + s[1], story: L('Ikki bo‘g‘inli siniq chiziq uzunligi?', 'Длина ломаной из двух звеньев?', 'Length of a two-link broken line?') }; } }
          ],
          quiz: [
            { q: L('Bo‘g‘inlar 3, 4, 5 cm. Uzunlik?', 'Звенья 3, 4, 5 см. Длина?', 'Links 3, 4, 5 cm. Length?'), o: ['12', '7', '60'], a: 0 },
            { q: L('Siniq chiziq nimalardan tuzilgan?', 'Из чего состоит ломаная?', 'What is a broken line made of?'), o: [L('Bo‘g‘inlardan', 'Из звеньев', 'Links'), L('Doiralardan', 'Из кругов', 'Circles'), L('Nuqtadan', 'Из точки', 'A point')], a: 0 }
          ] },

        { id: 't3', lessons: L('116–118-darslar', 'Уроки 116–118', 'Lessons 116–118'), title: L('Ko‘pburchak va uning perimetri', 'Многоугольник и его периметр', 'Polygons and perimeter'),
          keys: [L('ko‘pburchak', 'многоугольник', 'polygon'), L('perimetr', 'периметр', 'perimeter'), L('tomon', 'сторона', 'side'), L('uch', 'вершина', 'vertex')],
          scene: [{ obj: 'pyramid', n: 2, color: 'violet' }],
          explain: L('Yopiq siniq chiziq bilan chegaralangan shakl — <b>ko‘pburchak</b>: uchburchak, to‘rtburchak, beshburchak... Ko‘pburchakning barcha tomonlari uzunliklari yig‘indisi — <b>perimetr</b> (P).',
            'Фигура, ограниченная замкнутой ломаной, — <b>многоугольник</b>: треугольник, четырёхугольник, пятиугольник... Сумма длин всех сторон — <b>периметр</b> (P).',
            'A shape bounded by a closed broken line is a <b>polygon</b>: triangle, quadrilateral, pentagon... The sum of all its side lengths is the <b>perimeter</b> (P).'),
          rule: L('P = barcha tomonlar yig‘indisi', 'P = сумма всех сторон', 'P = sum of all sides'),
          acts: [
            { type: 'polygon', make: function (R) { var n = R(3, 5), s = []; for (var i = 0; i < n; i++) s.push(R(2, 9)); return { kind: 'poly', sides: s, ans: s.reduce(function (a, b) { return a + b; }, 0), story: L('Ko‘pburchak <b>perimetrini</b> toping.', 'Найдите <b>периметр</b> многоугольника.', 'Find the <b>perimeter</b> of the polygon.') }; } },
            { type: 'choose', title: L('Nechta burchakli?', 'Сколько углов?', 'How many corners?'), icon: '⬠', make: function () { var f = pick([['tri', 3], ['quad', 4], ['pent', 5], ['hex', 6]]), names = { 3: L('uchburchak', 'треугольник', 'triangle'), 4: L('to‘rtburchak', 'четырёхугольник', 'quadrilateral'), 5: L('beshburchak', 'пятиугольник', 'pentagon'), 6: L('oltiburchak', 'шестиугольник', 'hexagon') };
              var others = [3, 4, 5, 6].filter(function (x) { return x !== f[1]; }).slice(0, 2);
              return choice(L('Bu shakl qanday ataladi?', 'Как называется эта фигура?', 'What is this shape called?'), [names[f[1]], names[others[0]], names[others[1]]], 0, FIG[f[0]]); } }
          ],
          quiz: [
            { q: L('Uchburchak tomonlari 3, 4, 5 cm. P = ?', 'Стороны треугольника 3, 4, 5 см. P = ?', 'Triangle sides 3, 4, 5 cm. P = ?'), o: ['12', '345', '9'], a: 0 },
            { q: L('Beshburchakning nechta tomoni bor?', 'Сколько сторон у пятиугольника?', 'How many sides does a pentagon have?'), o: ['5', '4', '6'], a: 0 },
            { q: L('Perimetr nima?', 'Что такое периметр?', 'What is perimeter?'), o: [L('Tomonlar uzunliklari yig‘indisi', 'Сумма длин сторон', 'The sum of the side lengths'), L('Uchlar soni', 'Число вершин', 'The number of corners'), L('Eng uzun tomon', 'Самая длинная сторона', 'The longest side')], a: 0 }
          ] },

        { id: 't4', lessons: L('119–120-darslar', 'Уроки 119–120', 'Lessons 119–120'), title: L('To‘g‘ri to‘rtburchak va kvadrat', 'Прямоугольник и квадрат', 'Rectangle and square'),
          keys: [L('to‘g‘ri to‘rtburchak', 'прямоугольник', 'rectangle'), L('kvadrat', 'квадрат', 'square'), L('qarama-qarshi tomonlar', 'противоположные стороны', 'opposite sides')],
          scene: [{ obj: 'box', n: 2, color: 'green' }, { obj: 'cube', n: 1, color: 'yellow' }],
          explain: L('<b>To‘g‘ri to‘rtburchak</b>ning barcha burchaklari to‘g‘ri, qarama-qarshi tomonlari teng. <b>Kvadrat</b> — barcha tomonlari teng bo‘lgan to‘g‘ri to‘rtburchak.',
            'У <b>прямоугольника</b> все углы прямые, противоположные стороны равны. <b>Квадрат</b> — прямоугольник, у которого все стороны равны.',
            'A <b>rectangle</b> has four right angles and equal opposite sides. A <b>square</b> is a rectangle with all sides equal.'),
          rule: L('To‘g‘ri to‘rtburchak: P = a + b + a + b · Kvadrat: P = a + a + a + a', 'Прямоугольник: P = a + b + a + b · Квадрат: P = a + a + a + a', 'Rectangle: P = a + b + a + b · Square: P = a + a + a + a'),
          acts: [
            { type: 'polygon', title: L('To‘g‘ri to‘rtburchak perimetri', 'Периметр прямоугольника', 'Rectangle perimeter'), make: function (R) { var a = R(3, 9), b = R(2, a); return { kind: 'rect', sides: [a, b], ans: 2 * (a + b), story: L('Qarama-qarshi tomonlar teng. <b>Perimetrni</b> toping.', 'Противоположные стороны равны. Найдите <b>периметр</b>.', 'Opposite sides are equal. Find the <b>perimeter</b>.') }; } },
            { type: 'choose', title: L('Kvadratmi yoki to‘g‘ri to‘rtburchak?', 'Квадрат или прямоугольник?', 'Square or rectangle?'), icon: '⬜', make: function () { var sq = Math.random() < 0.5; return choice(L('Bu qaysi shakl?', 'Какая это фигура?', 'Which shape is this?'), [L('kvadrat', 'квадрат', 'square'), L('to‘g‘ri to‘rtburchak', 'прямоугольник', 'rectangle'), L('uchburchak', 'треугольник', 'triangle')], sq ? 0 : 1, sq ? FIG.square : FIG.rect); } }
          ],
          quiz: [
            { q: L('Kvadrat tomoni 4 cm. P = ?', 'Сторона квадрата 4 см. P = ?', 'A square has side 4 cm. P = ?'), o: ['16', '8', '4'], a: 0 },
            { q: L('To‘g‘ri to‘rtburchak 5 cm va 2 cm. P = ?', 'Прямоугольник 5 см и 2 см. P = ?', 'A rectangle 5 cm by 2 cm. P = ?'), o: ['14', '7', '10'], a: 0 },
            { q: L('Kvadratning nechta tomoni teng?', 'Сколько равных сторон у квадрата?', 'How many equal sides does a square have?'), o: ['4', '2', '3'], a: 0 }
          ] },

        { id: 't5', lessons: L('121–122-darslar', 'Уроки 121–122', 'Lessons 121–122'), title: L('Burchak. To‘rtburchaklar', 'Угол. Четырёхугольники', 'Angles. Quadrilaterals'),
          keys: [L('burchak', 'угол', 'angle'), L('to‘g‘ri burchak', 'прямой угол', 'right angle'), L('o‘tkir', 'острый', 'acute'), L('o‘tmas', 'тупой', 'obtuse')],
          scene: [{ obj: 'box', n: 1, color: 'orange' }],
          explain: L('Bir nuqtadan chiqqan ikki nur <b>burchak</b> hosil qiladi. Daftar varag‘ining burchagi — <b>to‘g‘ri burchak</b>. Undan kichigi — <b>o‘tkir</b>, kattasi — <b>o‘tmas</b> burchak.',
            'Два луча из одной точки образуют <b>угол</b>. Уголок тетрадного листа — <b>прямой угол</b>. Меньше прямого — <b>острый</b>, больше — <b>тупой</b>.',
            'Two rays from one point make an <b>angle</b>. The corner of a notebook page is a <b>right angle</b>. Smaller than that is <b>acute</b>, bigger is <b>obtuse</b>.'),
          rule: L('O‘tkir &lt; to‘g‘ri &lt; o‘tmas', 'Острый &lt; прямой &lt; тупой', 'Acute &lt; right &lt; obtuse'),
          acts: [
            { type: 'choose', title: L('Qanday burchak?', 'Какой угол?', 'What kind of angle?'), icon: '📐', make: function () { var k = pick(['right', 'acute', 'obtuse']), names = { right: L('to‘g‘ri', 'прямой', 'right'), acute: L('o‘tkir', 'острый', 'acute'), obtuse: L('o‘tmas', 'тупой', 'obtuse') };
              return choice(L('Rasmdagi burchak qanday?', 'Какой угол на рисунке?', 'What angle is shown?'), [names[k]].concat(['right', 'acute', 'obtuse'].filter(function (x) { return x !== k; }).map(function (x) { return names[x]; })), 0, ANG[k]); } },
            { type: 'choose', title: L('Nechta burchak?', 'Сколько углов?', 'How many angles?'), icon: '🔺', make: function () { var f = pick([['tri', 3], ['quad', 4], ['pent', 5], ['hex', 6]]); return choice(L('Shaklning nechta burchagi bor?', 'Сколько углов у фигуры?', 'How many angles does the shape have?'), [String(f[1]), String(f[1] + 1), String(f[1] - 1)], 0, FIG[f[0]]); } }
          ],
          quiz: [
            { q: L('Kvadratning burchaklari qanday?', 'Какие углы у квадрата?', 'What angles does a square have?'), o: [L('to‘g‘ri', 'прямые', 'right'), L('o‘tkir', 'острые', 'acute'), L('o‘tmas', 'тупые', 'obtuse')], a: 0 },
            { q: L('To‘g‘ri burchakdan kichik burchak?', 'Угол меньше прямого?', 'An angle smaller than a right angle?'), o: [L('o‘tkir', 'острый', 'acute'), L('o‘tmas', 'тупой', 'obtuse'), L('yoyiq', 'развёрнутый', 'straight')], a: 0 },
            { q: L('To‘rtburchakning nechta burchagi bor?', 'Сколько углов у четырёхугольника?', 'How many angles does a quadrilateral have?'), o: ['4', '3', '5'], a: 0 }
          ] }
      ] },

      // ============ 2-BO'LIM ============
      { id: 's2', title: L('Shakllar olami', 'Мир фигур', 'The world of shapes'), icon: '🔷', color: 'violet', topics: [
        { id: 't6', lessons: L('123–125-darslar', 'Уроки 123–125', 'Lessons 123–125'), title: L('Sohalar va chegaralar. Teng shakllar', 'Области и границы. Равные фигуры', 'Regions and borders. Equal shapes'),
          keys: [L('ichki soha', 'внутренняя область', 'inside'), L('tashqi soha', 'внешняя область', 'outside'), L('chegara', 'граница', 'border'), L('teng shakllar', 'равные фигуры', 'equal shapes')],
          scene: [{ obj: 'cube', n: 2, color: 'pink' }],
          explain: L('Yopiq chiziq tekislikni <b>ichki</b> va <b>tashqi</b> sohaga ajratadi, chiziqning o‘zi — <b>chegara</b>. Ustma-ust qo‘yganda to‘liq ustma-ust tushadigan shakllar — <b>teng shakllar</b>. Kichik shakllardan katta shakl tuzish mumkin!',
            'Замкнутая линия делит плоскость на <b>внутреннюю</b> и <b>внешнюю</b> области, а сама линия — <b>граница</b>. Фигуры, которые совпадают при наложении, — <b>равные</b>. Из маленьких фигур можно сложить большую!',
            'A closed line splits the page into an <b>inside</b> and an <b>outside</b>; the line itself is the <b>border</b>. Shapes that match exactly when placed on top of each other are <b>equal</b>. Small shapes can build a big one!'),
          rule: L('2 ta teng uchburchak → 1 ta kvadrat', '2 равных треугольника → 1 квадрат', '2 equal triangles → 1 square'),
          acts: [
            { type: 'choose', title: L('Ichkarida yoki tashqarida?', 'Внутри или снаружи?', 'Inside or outside?'), icon: '⭕', make: function () { var inside = Math.random() < 0.5;
              return choice(L('Yulduzcha doiraning qayerida?', 'Где звёздочка относительно круга?', 'Where is the star compared with the circle?'), [L('ichida', 'внутри', 'inside'), L('tashqarisida', 'снаружи', 'outside'), L('chegarasida', 'на границе', 'on the border')], inside ? 0 : 1,
                svg('<circle cx="80" cy="60" r="45" ' + ST + '/><text x="' + (inside ? 80 : 170) + '" y="' + (inside ? 70 : 40) + '" font-size="28" text-anchor="middle">⭐</text>')); } },
            { type: 'choose', title: L('Shakl tuzing', 'Составьте фигуру', 'Build a shape'), icon: '🧩', make: function () { return pick([
              choice(L('Ikkita teng uchburchakdan qaysi shakl tuziladi?', 'Какую фигуру можно сложить из двух равных треугольников?', 'Which shape can two equal triangles make?'), [L('kvadrat', 'квадрат', 'square'), L('doira', 'круг', 'circle'), L('beshburchak', 'пятиугольник', 'pentagon')], 0),
              choice(L('Ikkita teng kvadratdan qaysi shakl tuziladi?', 'Какую фигуру можно сложить из двух равных квадратов?', 'Which shape can two equal squares make?'), [L('to‘g‘ri to‘rtburchak', 'прямоугольник', 'rectangle'), L('uchburchak', 'треугольник', 'triangle'), L('doira', 'круг', 'circle')], 0)]); } }
          ],
          quiz: [
            { q: L('Yopiq chiziqning o‘zi nima deyiladi?', 'Как называется сама замкнутая линия?', 'What is the closed line itself called?'), o: [L('chegara', 'граница', 'border'), L('soha', 'область', 'region'), L('nuqta', 'точка', 'point')], a: 0 },
            { q: L('Teng shakllar ustma-ust qo‘yilganda...', 'Равные фигуры при наложении...', 'Equal shapes placed on top of each other...'), o: [L('to‘liq ustma-ust tushadi', 'полностью совпадают', 'match exactly'), L('rangi o‘zgaradi', 'меняют цвет', 'change colour'), L('kattalashadi', 'увеличиваются', 'grow')], a: 0 }
          ] },

        { id: 't7', lessons: L('126–127-darslar', 'Уроки 126–127', 'Lessons 126–127'), title: L('Simmetriya', 'Симметрия', 'Symmetry'),
          keys: [L('simmetriya', 'симметрия', 'symmetry'), L('simmetriya o‘qi', 'ось симметрии', 'line of symmetry')],
          scene: [{ obj: 'star', n: 3, color: 'yellow' }],
          explain: L('Shaklni bir chiziq bo‘ylab buklasak va ikki yarmi to‘liq ustma-ust tushsa, shakl <b>simmetrik</b>, chiziq esa <b>simmetriya o‘qi</b>. Kapalak, barg, yurak — simmetrik!',
            'Если фигуру сложить по линии и половинки совпадут, фигура <b>симметрична</b>, а линия — <b>ось симметрии</b>. Бабочка, листок, сердечко — симметричны!',
            'If you fold a shape along a line and the two halves match, the shape is <b>symmetrical</b> and the line is a <b>line of symmetry</b>. Butterflies, leaves and hearts are symmetrical!'),
          rule: L('Kvadratda 4 ta, doirada esa son-sanoqsiz simmetriya o‘qi bor.', 'У квадрата 4 оси симметрии, у круга — бесконечно много.', 'A square has 4 lines of symmetry; a circle has infinitely many.'),
          acts: [
            { type: 'choose', title: L('Simmetrikmi?', 'Симметрична?', 'Symmetrical?'), icon: '🦋', make: function () { var items = [['🦋', 1], ['❤️', 1], ['⭐', 1], ['🍁', 1], ['🔺', 1], ['🐌', 0], ['☁️', 0], ['🦒', 0]], it = pick(items);
              return choice(L('Bu rasm simmetrikmi?', 'Этот рисунок симметричен?', 'Is this picture symmetrical?'), [L('ha', 'да', 'yes'), L('yo‘q', 'нет', 'no')], it[1] ? 0 : 1, '<div class="kd-pics"><span style="font-size:4rem">' + it[0] + '</span></div>'); } },
            { type: 'choose', title: L('Nechta o‘q?', 'Сколько осей?', 'How many lines?'), icon: '➗', make: function () { return pick([
              choice(L('Kvadratning nechta simmetriya o‘qi bor?', 'Сколько осей симметрии у квадрата?', 'How many lines of symmetry does a square have?'), ['4', '2', '1'], 0, FIG.square),
              choice(L('To‘g‘ri to‘rtburchakning (kvadrat emas) nechta simmetriya o‘qi bor?', 'Сколько осей симметрии у прямоугольника (не квадрата)?', 'How many lines of symmetry does a (non-square) rectangle have?'), ['2', '4', '1'], 0, FIG.rect)]); } }
          ],
          quiz: [
            { q: L('Qaysi biri simmetrik?', 'Что симметрично?', 'Which is symmetrical?'), o: ['🦋', '🐌', '☁️'], a: 0 },
            { q: L('Kvadratning simmetriya o‘qlari soni?', 'Число осей симметрии квадрата?', 'Lines of symmetry of a square?'), o: ['4', '1', '0'], a: 0 }
          ] },

        { id: 't8', lessons: L('128-dars', 'Урок 128', 'Lesson 128'), title: L('Hajmli shakllar', 'Объёмные фигуры', 'Solid shapes'),
          keys: [L('kub', 'куб', 'cube'), L('parallelepiped', 'параллелепипед', 'cuboid'), L('shar', 'шар', 'sphere'), L('silindr', 'цилиндр', 'cylinder'), L('konus', 'конус', 'cone'), L('piramida', 'пирамида', 'pyramid')],
          scene: [{ obj: 'cube', n: 1, color: 'blue' }, { obj: 'box', n: 1, color: 'orange' }, { obj: 'pyramid', n: 1, color: 'violet' }, { obj: 'cylinder', n: 1, color: 'green' }],
          explain: L('Hajmli shakllarning <b>yoqlari</b>, <b>qirralari</b> va <b>uchlari</b> bor. Kubning 6 ta yog‘i (hammasi kvadrat), 12 ta qirrasi va 8 ta uchi bor. Shar, silindr va konus — dumalaydi, chunki ularda egri sirt bor.',
            'У объёмных фигур есть <b>грани</b>, <b>рёбра</b> и <b>вершины</b>. У куба 6 граней (все — квадраты), 12 рёбер и 8 вершин. Шар, цилиндр и конус катятся, потому что у них есть кривая поверхность.',
            'Solids have <b>faces</b>, <b>edges</b> and <b>vertices</b>. A cube has 6 faces (all squares), 12 edges and 8 vertices. Spheres, cylinders and cones roll because they have curved surfaces.'),
          rule: L('Kub: 6 yoq · 12 qirra · 8 uch', 'Куб: 6 граней · 12 рёбер · 8 вершин', 'Cube: 6 faces · 12 edges · 8 vertices'),
          acts: [
            { type: 'choose', title: L('3D: shaklni taniying', '3D: узнайте фигуру', '3D: name the solid'), icon: '🧊', make: function () { var keys = Object.keys(SH), k = pick(keys), o = keys.filter(function (x) { return x !== k; }).sort(function () { return Math.random() - 0.5; }).slice(0, 2);
              var ch = choice(L('Sahnada qaysi shakl?', 'Какая фигура на сцене?', 'Which solid is on the stage?'), [SH[k], SH[o[0]], SH[o[1]]], 0); ch.scene = [{ obj: k, n: 1, color: pick(COLORS) }]; return ch; } },
            { type: 'choose', title: L('Dumalaydimi?', 'Катится?', 'Does it roll?'), icon: '🎳', make: function () { var k = pick(Object.keys(SH)), rolls = ['ball', 'cylinder', 'cone'].indexOf(k) >= 0;
              var ch = choice(L('Bu shakl dumalay oladimi?', 'Может ли эта фигура катиться?', 'Can this solid roll?'), [L('ha', 'да', 'yes'), L('yo‘q', 'нет', 'no')], rolls ? 0 : 1); ch.scene = [{ obj: k, n: 1, color: pick(COLORS) }]; return ch; } },
            { type: 'count3d', title: L('3D: jismlarni sanang', '3D: посчитайте тела', '3D: count the solids'), make: function (R) { var a = R(1, 4), b = R(1, 4); return { groups: [{ obj: 'pyramid', n: a, color: 'violet' }, { obj: 'box', n: b, color: 'orange' }], story: L('Piramida va parallelepipedlar <b>jami nechta</b>?', 'Сколько <b>всего</b> пирамид и параллелепипедов?', 'How many pyramids and cuboids <b>in total</b>?'), expr: [a, '+', b, '=', a + b], ans: a + b, unit: PCS }; } }
          ],
          quiz: [
            { q: L('Kubning nechta yog‘i bor?', 'Сколько граней у куба?', 'How many faces does a cube have?'), o: ['6', '8', '12'], a: 0 },
            { q: L('Kubning nechta uchi bor?', 'Сколько вершин у куба?', 'How many vertices does a cube have?'), o: ['8', '6', '12'], a: 0 },
            { q: L('Qaysi shakl dumalaydi?', 'Какая фигура катится?', 'Which solid rolls?'), o: [L('shar', 'шар', 'sphere'), L('kub', 'куб', 'cube'), L('piramida', 'пирамида', 'pyramid')], a: 0 }
          ] }
      ] },

      // ============ 3-BO'LIM ============
      { id: 's3', title: L('Ifodalar va tengsizliklar', 'Выражения и неравенства', 'Expressions and inequalities'), icon: '🧮', color: 'orange', topics: [
        { id: 't9', lessons: L('129, 135-darslar', 'Уроки 129, 135', 'Lessons 129, 135'), title: L('Tenglik va tengsizliklar', 'Равенства и неравенства', 'Equalities and inequalities'),
          keys: [L('tenglik (=)', 'равенство (=)', 'equality (=)'), L('tengsizlik (>, <)', 'неравенство (>, <)', 'inequality (>, <)'), L('to‘g‘ri / noto‘g‘ri', 'верное / неверное', 'true / false')],
          scene: [{ obj: 'weight', n: 2 }],
          explain: L('«=» belgili yozuv — <b>tenglik</b> (5 + 2 = 7), «&gt;» yoki «&lt;» belgili yozuv — <b>tengsizlik</b> (8 &gt; 3). Ular <b>to‘g‘ri</b> yoki <b>noto‘g‘ri</b> bo‘lishi mumkin: 4 + 1 = 6 — noto‘g‘ri!',
            'Запись со знаком «=» — <b>равенство</b> (5 + 2 = 7), со знаком «&gt;» или «&lt;» — <b>неравенство</b> (8 &gt; 3). Они бывают <b>верными</b> и <b>неверными</b>: 4 + 1 = 6 — неверно!',
            'A statement with “=” is an <b>equality</b> (5 + 2 = 7); with “&gt;” or “&lt;” it is an <b>inequality</b> (8 &gt; 3). They can be <b>true</b> or <b>false</b>: 4 + 1 = 6 is false!'),
          rule: L('Hisoblang va tekshiring: ikkala tomon qiymatini taqqoslang.', 'Вычислите и проверьте: сравните значения обеих частей.', 'Work it out and check: compare the values of both sides.'),
          acts: [
            { type: 'choose', title: L('To‘g‘rimi?', 'Верно?', 'True?'), icon: '✅', make: function (R) { var a = R(2, 40), b = R(1, 30), off = pick([0, 0, 1, -1, 10]), c = a + b + off;
              return choice('<span class="kd-big">' + a + ' + ' + b + ' = ' + c + '</span>', [L('to‘g‘ri', 'верно', 'true'), L('noto‘g‘ri', 'неверно', 'false')], off === 0 ? 0 : 1); } },
            { type: 'choose', title: L('Belgi qo‘ying', 'Поставьте знак', 'Choose the sign'), icon: '⚖️', make: function (R) { var a = R(10, 50), b = R(1, 20), c = R(10, 50), d = R(1, 20), x = a + b, y = c + d;
              return choice('<span class="kd-big">' + a + ' + ' + b + ' ◻ ' + c + ' + ' + d + '</span>', ['&gt;', '&lt;', '='], x > y ? 0 : x < y ? 1 : 2); } }
          ],
          quiz: [
            { q: L('Qaysi biri tengsizlik?', 'Что из этого неравенство?', 'Which is an inequality?'), o: ['9 > 4', '3 + 2 = 5', '7'], a: 0 },
            { q: L('«6 + 3 = 8» qanday?', '«6 + 3 = 8» — это...', '“6 + 3 = 8” is...'), o: [L('noto‘g‘ri', 'неверно', 'false'), L('to‘g‘ri', 'верно', 'true')], a: 0 },
            { q: '15 + 5 ◻ 30 − 10', o: ['=', '>', '<'], a: 0 }
          ] },

        { id: 't10', lessons: L('130–131-darslar', 'Уроки 130–131', 'Lessons 130–131'), title: L('Sonli va harfiy ifodalar', 'Числовые и буквенные выражения', 'Number and letter expressions'),
          keys: [L('sonli ifoda', 'числовое выражение', 'number expression'), L('harfiy ifoda', 'буквенное выражение', 'letter expression'), 'a + 5'],
          scene: [{ obj: 'cube', n: 3, color: 'cyan' }],
          explain: L('Sonli ifodada faqat sonlar bor: 7 + 3. <b>Harfiy ifodada</b> son o‘rnida harf turadi: a + 3. Harf o‘rniga son qo‘ysak, ifoda qiymatini topamiz: a = 4 bo‘lsa, a + 3 = 7.',
            'В числовом выражении только числа: 7 + 3. В <b>буквенном</b> вместо числа стоит буква: a + 3. Подставив число вместо буквы, найдём значение: если a = 4, то a + 3 = 7.',
            'A number expression has only numbers: 7 + 3. A <b>letter expression</b> has a letter in place of a number: a + 3. Put a number in for the letter to find its value: if a = 4, a + 3 = 7.'),
          rule: L('a = 6 bo‘lsa: a + 4 = 6 + 4 = 10', 'Если a = 6: a + 4 = 6 + 4 = 10', 'If a = 6: a + 4 = 6 + 4 = 10'),
          acts: [
            { type: 'drill', title: L('Harf o‘rniga son qo‘ying', 'Подставьте число', 'Substitute the number'), n: 6, make: function (R) { var a = R(2, 30), b = R(1, 20); return pick([{ q: 'a = ' + a + ';  a + ' + b, a: a + b }, { q: 'a = ' + (a + b) + ';  a − ' + b, a: a }, { q: 'b = ' + b + ';  ' + a + ' + b', a: a + b }]); } },
            { type: 'choose', title: L('Qaysi ifoda harfiy?', 'Какое выражение буквенное?', 'Which is a letter expression?'), icon: '🔤', make: function (R) { var a = R(2, 9), b = R(2, 9); return choice(L('Harfiy ifodani tanlang.', 'Выберите буквенное выражение.', 'Choose the letter expression.'), ['c + ' + a, a + ' + ' + b, String(a + b)], 0); } }
          ],
          quiz: [
            { q: L('a = 5 bo‘lsa, a + 7 = ?', 'Если a = 5, то a + 7 = ?', 'If a = 5, a + 7 = ?'), o: ['12', '57', '2'], a: 0 },
            { q: L('Qaysi biri harfiy ifoda?', 'Что из этого буквенное выражение?', 'Which is a letter expression?'), o: ['x − 3', '8 − 3', '5'], a: 0 },
            { q: L('b = 10 bo‘lsa, 20 − b = ?', 'Если b = 10, то 20 − b = ?', 'If b = 10, 20 − b = ?'), o: ['10', '30', '2'], a: 0 }
          ] },

        { id: 't11', lessons: L('132–133-darslar', 'Уроки 132–133', 'Lessons 132–133'), title: L('Ifodalarni taqqoslash va qiymatini hisoblash', 'Сравнение и вычисление выражений', 'Comparing and working out expressions'),
          keys: [L('ifoda qiymati', 'значение выражения', 'value'), L('amallar tartibi', 'порядок действий', 'order of operations')],
          scene: [{ obj: 'weight', n: 1 }, { obj: 'apple', n: 3, color: 'red' }],
          explain: L('Ifodalarni taqqoslash uchun avval har birining <b>qiymatini</b> hisoblaymiz. Qavssiz ifodada amallar chapdan o‘ngga, qavsli ifodada esa avval qavs ichi bajariladi.',
            'Чтобы сравнить выражения, сначала вычисляем <b>значение</b> каждого. Без скобок действия выполняем слева направо, со скобками — сначала в скобках.',
            'To compare expressions, first work out each <b>value</b>. Without brackets go left to right; with brackets do the brackets first.'),
          rule: '40 − 10 + 5 = 35 · 40 − (10 + 5) = 25',
          acts: [
            { type: 'drill', title: L('Qiymatini toping', 'Найдите значение', 'Find the value'), n: 6, make: function (R) { var a = R(3, 9) * 10, b = R(1, 2) * 10, c = R(1, 9); return pick([{ q: a + ' − ' + b + ' + ' + c, a: a - b + c }, { q: a + ' − (' + b + ' + ' + c + ')', a: a - b - c }, { q: '(' + a + ' + ' + c + ') − ' + b, a: a + c - b }]); } },
            { type: 'choose', title: L('Taqqoslang', 'Сравните', 'Compare'), icon: '⚖️', make: function (R) { var a = R(3, 9) * 10, b = R(1, 2) * 10, c = R(1, 9), x = a - b + c, y = a - (b + c); return choice('<span class="kd-big">' + a + ' − ' + b + ' + ' + c + ' ◻ ' + a + ' − (' + b + ' + ' + c + ')</span>', ['&gt;', '&lt;', '='], x > y ? 0 : x < y ? 1 : 2); } }
          ],
          quiz: [
            { q: '50 − 20 + 3 = ?', o: ['33', '27', '73'], a: 0 },
            { q: '50 − (20 + 3) = ?', o: ['27', '33', '73'], a: 0 },
            { q: '10 + 5 ◻ 20 − 5', o: ['=', '>', '<'], a: 0 }
          ] },

        { id: 't12', lessons: L('134-dars', 'Урок 134', 'Lesson 134'), title: L('Matematik amallarning xossalari', 'Свойства действий', 'Properties of operations'),
          keys: [L('o‘rin almashtirish', 'переместительное', 'commutative'), L('guruhlash', 'сочетательное', 'associative'), L('nol bilan', 'с нулём', 'with zero')],
          scene: [{ obj: 'cube', n: 4, color: 'blue' }, { obj: 'cube', n: 6, color: 'pink' }],
          explain: L('Qo‘shishda: o‘rin almashtirish (a + b = b + a), guruhlash ((a + b) + c = a + (b + c)), nol (a + 0 = a). Ayirishda: a − 0 = a, a − a = 0. Bu xossalar hisoblashni osonlashtiradi!',
            'Сложение: переместительное (a + b = b + a), сочетательное ((a + b) + c = a + (b + c)), с нулём (a + 0 = a). Вычитание: a − 0 = a, a − a = 0. Эти свойства упрощают вычисления!',
            'For adding: swapping (a + b = b + a), grouping ((a + b) + c = a + (b + c)), zero (a + 0 = a). For subtracting: a − 0 = a, a − a = 0. These properties make sums easier!'),
          rule: 'a + b = b + a · a + 0 = a · a − a = 0',
          acts: [
            { type: 'drill', title: L('Xossalardan foydalaning', 'Используйте свойства', 'Use the properties'), n: 8, make: function (R) { var a = R(5, 60), b = R(1, 9), c = 10 - b; return pick([{ q: a + ' + 0', a: a }, { q: a + ' − ' + a, a: 0 }, { q: b + ' + ' + a + ' + ' + c, a: a + 10 }, { q: a + ' − 0', a: a }]); } },
            { type: 'choose', title: L('Qaysi xossa?', 'Какое свойство?', 'Which property?'), icon: '🔁', make: function (R) { var a = R(2, 9), b = R(2, 9); return choice('<span class="kd-big">' + a + ' + ' + b + ' = ' + b + ' + ' + a + '</span>', [L('o‘rin almashtirish', 'переместительное', 'swapping (commutative)'), L('guruhlash', 'сочетательное', 'grouping (associative)'), L('nol xossasi', 'свойство нуля', 'zero property')], 0); } }
          ],
          quiz: [
            { q: '27 + 0 = ?', o: ['27', '0', '270'], a: 0 },
            { q: '45 − 45 = ?', o: ['0', '45', '90'], a: 0 },
            { q: '8 + 15 + 2 = ?', o: ['25', '23', '35'], a: 0 }
          ] },

        { id: 't13', lessons: L('136-dars', 'Урок 136', 'Lesson 136'), title: L('Rim raqamlari', 'Римские цифры', 'Roman numerals'),
          keys: ['I = 1', 'V = 5', 'X = 10', 'L = 50'],
          scene: [{ obj: 'star', n: 3, color: 'gold' }],
          explain: L('Qadimgi Rimda sonlar harflar bilan yozilgan: <b>I</b> = 1, <b>V</b> = 5, <b>X</b> = 10, <b>L</b> = 50. Kichik raqam katta raqamdan <b>o‘ngda</b> tursa — qo‘shiladi (VI = 6), <b>chapda</b> tursa — ayriladi (IV = 4). Soatlarda ham uchraydi!',
            'В Древнем Риме числа писали буквами: <b>I</b> = 1, <b>V</b> = 5, <b>X</b> = 10, <b>L</b> = 50. Меньшая цифра <b>справа</b> от большей прибавляется (VI = 6), <b>слева</b> — вычитается (IV = 4). Их можно увидеть на часах!',
            'In ancient Rome numbers were written with letters: <b>I</b> = 1, <b>V</b> = 5, <b>X</b> = 10, <b>L</b> = 50. A smaller numeral to the <b>right</b> of a bigger one is added (VI = 6); to the <b>left</b> it is subtracted (IV = 4). You can see them on clocks!'),
          rule: 'II = 2 · IV = 4 · VI = 6 · IX = 9 · XI = 11 · XX = 20',
          acts: [
            { type: 'drill', title: L('Rim raqamini o‘qing', 'Прочитайте римское число', 'Read the Roman numeral'), n: 6, make: function (R) { var n = R(1, 30); return { q: '<b>' + H.roman(n) + '</b>', a: n }; } },
            { type: 'choose', title: L('Rim raqamida yozing', 'Запишите римскими цифрами', 'Write in Roman numerals'), icon: '🏛️', make: function (R) { var n = R(2, 20), o = H.distinct(R, 3, 1, 20).filter(function (x) { return x !== n; }).slice(0, 2);
              return choice(mk(function (l) { return '<span class="kd-big">' + n + '</span> — ' + { uz: 'Rim raqamida qanday yoziladi?', ru: 'как записать римскими цифрами?', en: 'in Roman numerals?' }[l]; }), [H.roman(n), H.roman(o[0]), H.roman(o[1])], 0); } }
          ],
          quiz: [
            { q: 'IX = ?', o: ['9', '11', '4'], a: 0 },
            { q: 'XII = ?', o: ['12', '7', '21'], a: 0 },
            { q: L('5 Rim raqamida?', '5 римскими цифрами?', '5 in Roman numerals?'), o: ['V', 'X', 'IIIII'], a: 0 }
          ] }
      ] },

      // ============ 4-BO'LIM ============
      { id: 's4', title: L('Tenglamalar', 'Уравнения', 'Equations'), icon: '🟰', color: 'green', topics: [
        { id: 't14', lessons: L('137–139-darslar', 'Уроки 137–139', 'Lessons 137–139'), title: L('Tenglamalar', 'Уравнения', 'Equations'),
          keys: [L('tenglama', 'уравнение', 'equation'), L('noma’lum x', 'неизвестное x', 'unknown x'), L('ildiz', 'корень', 'root')],
          scene: [{ obj: 'box', n: 1, color: 'green' }, { obj: 'weight', n: 2 }],
          explain: L('Noma’lum son harf bilan belgilangan tenglik — <b>tenglama</b>: x + 5 = 12. Tenglamani yechish — x ni topish, ya’ni <b>ildizini</b> topish. Qutichadagi sonni topgandek: x = 12 − 5 = 7. Tekshiramiz: 7 + 5 = 12 ✓.',
            'Равенство с неизвестным, обозначенным буквой, — <b>уравнение</b>: x + 5 = 12. Решить уравнение — найти x, то есть его <b>корень</b>. Как с окошком: x = 12 − 5 = 7. Проверка: 7 + 5 = 12 ✓.',
            'An equality with an unknown written as a letter is an <b>equation</b>: x + 5 = 12. Solving it means finding x — its <b>root</b>. Just like the hidden-number box: x = 12 − 5 = 7. Check: 7 + 5 = 12 ✓.'),
          rule: 'x + b = c → x = c − b<br>x − b = c → x = c + b<br>a − x = c → x = a − c',
          acts: [
            { type: 'drill', title: L('Tenglamani yeching', 'Решите уравнение', 'Solve the equation'), n: 6, make: H.eqDrill(50) },
            { type: 'scale', title: L('Tarozi-tenglama', 'Весы-уравнение', 'Balance equation'), make: function (R) { var m = R(3, 12); return { mass: m, obj: '📦', story: L('Qutining massasi — <b>x</b> kg. Tarozini muvozanatga keltiring va <b>x</b> ni toping.', 'Масса коробки — <b>x</b> кг. Уравновесьте весы и найдите <b>x</b>.', 'The box weighs <b>x</b> kg. Balance the scales and find <b>x</b>.') }; } },
            { type: 'choose', title: L('Ildizni tanlang', 'Выберите корень', 'Choose the root'), icon: '🎯', make: function (R) { var x = R(2, 30), b = R(2, 20); return choice('<span class="kd-big">x + ' + b + ' = ' + (x + b) + '</span>', ['x = ' + x, 'x = ' + (x + 2 * b), 'x = ' + (x + 1)], 0); } }
          ],
          quiz: [
            { q: 'x + 6 = 15; x = ?', o: ['9', '21', '6'], a: 0 },
            { q: 'x − 4 = 10; x = ?', o: ['14', '6', '40'], a: 0 },
            { q: '20 − x = 8; x = ?', o: ['12', '28', '8'], a: 0 }
          ] },

        { id: 't15', lessons: L('140, 142–144-darslar', 'Уроки 140, 142–144', 'Lessons 140, 142–144'), title: L('Masalalarni tenglamalar yordamida yechish. Takrorlash', 'Решение задач с помощью уравнений. Повторение', 'Solving problems with equations. Review'),
          keys: [L('masala → tenglama', 'задача → уравнение', 'problem → equation'), L('takrorlash', 'повторение', 'review')],
          scene: [{ obj: 'robot', n: 1, color: 'green' }, { obj: 'star', n: 2, color: 'yellow' }],
          explain: L('Masaladagi noma’lumni <b>x</b> deb belgilab, tenglama tuzamiz va yechamiz. Masalan: «Qutida bir nechta qalam bor edi, yana 6 ta solindi, 14 ta bo‘ldi» → x + 6 = 14 → x = 8.',
            'Обозначим неизвестное в задаче буквой <b>x</b>, составим уравнение и решим его. Например: «В коробке было несколько карандашей, положили ещё 6, стало 14» → x + 6 = 14 → x = 8.',
            'Call the unknown in a problem <b>x</b>, write an equation and solve it. For example: “A box had some pencils, 6 more were added and now there are 14” → x + 6 = 14 → x = 8.'),
          rule: L('1) noma’lum → x · 2) tenglama · 3) yechish · 4) tekshirish', '1) неизвестное → x · 2) уравнение · 3) решение · 4) проверка', '1) unknown → x · 2) equation · 3) solve · 4) check'),
          acts: [
            { type: 'problem', title: L('Tenglama tuzib yeching', 'Решите с помощью уравнения', 'Solve with an equation'), make: function (R) { var x = R(5, 40), b = R(3, 20), c = x + b;
              return { story: L('Avtobusda bir necha yo‘lovchi bor edi. Bekatda yana <b>' + b + '</b> kishi chiqdi va <b>' + c + '</b> kishi bo‘ldi. Avval <u>nechta yo‘lovchi bor edi</u>? (x + ' + b + ' = ' + c + ')', 'В автобусе было несколько пассажиров. На остановке вошли ещё <b>' + b + '</b>, и стало <b>' + c + '</b>. <u>Сколько пассажиров было сначала</u>? (x + ' + b + ' = ' + c + ')', 'A bus had some passengers. <b>' + b + '</b> more got on and now there are <b>' + c + '</b>. <u>How many were there at first</u>? (x + ' + b + ' = ' + c + ')'),
                cond: [[L('Bor edi', 'Было', 'At first'), 'x'], [L('Chiqdi', 'Вошли', 'Got on'), String(b)], [L('Bo‘ldi', 'Стало', 'Now'), String(c)]],
                scheme: { kind: 'part', parts: [x, b], show: ['x', b], top: String(c), labels: [L('bor edi', 'было', 'at first'), L('chiqdi', 'вошли', 'got on')] },
                expr: [c, '−', b, '=', x], ans: x, unit: PCS }; } },
            { type: 'drill', title: L('Takrorlash: aralash misollar', 'Повторение: разные примеры', 'Review: mixed sums'), n: 8, make: function (R) { var k = R(0, 3); if (k === 0) return H.eqDrill(30)(R); if (k === 1) { var a = R(20, 70), b = R(10, 29); return { q: a + ' + ' + b, a: a + b }; } if (k === 2) { var n = R(1, 20); return { q: '<b>' + H.roman(n) + '</b>', a: n }; } var c = R(30, 90), d = R(10, 29); return { q: c + ' − ' + d, a: c - d }; } },
            { type: 'magic', title: L('Sehrli kvadrat', 'Магический квадрат', 'Magic square'), given: 4 }
          ],
          quiz: [
            { q: L('x + 5 = 20 tenglamaning yechimi qaysi?', 'Решение уравнения x + 5 = 20?', 'The solution of x + 5 = 20?'), o: ['x = 20 − 5', 'x = 20 + 5', '20 = x − 5'], a: 0 },
            { q: L('x − 5 = 10 da x qaysi amal bilan topiladi?', 'Каким действием находят x в x − 5 = 10?', 'In x − 5 = 10, which operation finds x?'), o: [L('Qo‘shish', 'Сложением', 'Addition'), L('Ayirish', 'Вычитанием', 'Subtraction'), L('Taqqoslash', 'Сравнением', 'Comparison')], a: 0 },
            { q: L('Hajm o‘lchov birligi?', 'Единица объёма?', 'A unit of volume?'), o: [L('litr', 'литр', 'litre'), L('kilogramm', 'килограмм', 'kilogram'), L('santimetr', 'сантиметр', 'centimetre')], a: 0 },
            { q: L('Qo‘shish bilan qanday masala yechiladi?', 'Какая задача решается сложением?', 'Which problem is solved by adding?'), o: [L('butunni topishga doir', 'на нахождение целого', 'finding the whole'), L('qismni topishga doir', 'на нахождение части', 'finding a part'), L('farqni topishga doir', 'на нахождение разницы', 'finding the difference')], a: 0 }
          ] }
      ] }
    ]
  };

  C.addPart(part4);
})(this);
