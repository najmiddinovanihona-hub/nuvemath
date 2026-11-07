// Nuvemath — 8-sinf, Geometriya (manba: A.A. Rahimqoriyev, M.A. To‘xtaxo‘jayeva. «Geometriya. 8-sinf», Toshkent, 2014, 3-nashr).
// Boblar va mavzular tartibi darslikdan olingan; tushuntirishlar, topshiriqlar va chizmalar Nuvemath uchun qayta yozilgan.
(function (root) {
  'use strict';
  var C = root.NMCurriculum, H = C.H, L = H.L, mk = H.mk, choice = H.choice, pick = H.pick;
  var r6 = H.r6;
  var CM = H.CM, CM2 = L('cm²', 'см²', 'cm²'), DEG = L('°', '°', '°');
  function ch(n) { return L(n + '-bob', 'Глава ' + n, 'Chapter ' + n); }
  function ns(x) { return x < 0 ? '−' + (-x) : String(x); }
  function fig(inner, w, h) { return '<div class="kd-fig"><svg viewBox="0 0 ' + (w || 300) + ' ' + (h || 180) + '">' + inner + '</svg></div>'; }
  var TX = 'font-size="15" font-weight="700" fill="currentColor" text-anchor="middle"', Q = ' style="fill:#ff6b8b"';
  var TRIPLES = [[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25], [20, 21, 29], [9, 40, 41]];
  var HERON = [[13, 14, 15, 84], [5, 5, 6, 12], [5, 5, 8, 12], [10, 13, 13, 60], [9, 10, 17, 36], [6, 25, 29, 60], [17, 25, 26, 204], [13, 20, 21, 126]];
  function triple(R) { var t = pick(TRIPLES), k = t[2] > 20 ? 1 : R(1, 3); return [t[0] * k, t[1] * k, t[2] * k]; }
  function paraFig(a, b, lab) { return fig('<polygon points="50,140 230,140 270,40 90,40" fill="rgba(79,141,255,.15)" stroke="#4f8dff" stroke-width="3" stroke-linejoin="round"/>' + (lab || '') + '<text x="140" y="162" ' + TX + '>' + a + '</text><text x="268" y="98" ' + TX + '>' + b + '</text>', 300, 175); }
  function trapFig(a, b, m) { return fig('<polygon points="30,150 270,150 210,40 90,40" fill="rgba(255,107,139,.14)" stroke="#ff6b8b" stroke-width="3" stroke-linejoin="round"/><line x1="60" y1="95" x2="240" y2="95" stroke="#4f8dff" stroke-width="3" stroke-dasharray="7 5"/>' +
    '<text x="150" y="32" ' + TX + '>' + b + '</text><text x="150" y="170" ' + TX + '>' + a + '</text><text x="150" y="88" ' + TX + (m === '?' ? Q : '') + '>' + m + '</text>', 300, 180); }
  function rightFig(a, b, c) { return fig('<polygon points="40,150 250,150 40,40" fill="rgba(46,194,126,.15)" stroke="#2ec27e" stroke-width="3" stroke-linejoin="round"/><rect x="40" y="136" width="14" height="14" fill="none" stroke="#2ec27e" stroke-width="2"/>' +
    '<text x="22" y="100" ' + TX + (a === '?' ? Q : '') + '>' + a + '</text><text x="145" y="170" ' + TX + (b === '?' ? Q : '') + '>' + b + '</text><text x="160" y="85" ' + TX + (c === '?' ? Q : '') + '>' + c + '</text>', 300, 180); }
  function circFig(inner) { return fig('<circle cx="150" cy="95" r="75" fill="rgba(79,141,255,.12)" stroke="#4f8dff" stroke-width="3"/><circle cx="150" cy="95" r="4" fill="#ff6b8b"/>' + inner, 300, 190); }

  var part2 = {
    grade: 8, part: 2, edition: L('Geometriya, 2014-yil nashri', 'Геометрия, издание 2014 г.', 'Geometry, 2014 edition'),
    title: L('Geometriya: to‘rtburchaklar, yuzlar, Pifagor, aylana va vektorlar', 'Геометрия: четырёхугольники, площади, Пифагор, окружность и векторы', 'Geometry: quadrilaterals, area, Pythagoras, circles and vectors'),
    book: L('A.A. Rahimqoriyev, M.A. To‘xtaxo‘jayeva. Geometriya, 8-sinf (Toshkent, 2014)', 'А.А. Рахимкориев, М.А. Тухтахаджаева. Геометрия, 8 класс (Ташкент, 2014)', 'A.A. Rahimqoriyev, M.A. Tukhtakhodjaeva. Geometry, Grade 8 (Tashkent, 2014)'),
    intro: L('8-sinf geometriyasi: parallelogramm, romb, trapetsiya va Fales teoremasi, simmetriya, shakllarning yuzlari, Pifagor teoremasi va Geron formulasi, aylana va unga ichki/tashqi chizilgan shakllar, vektorlar.',
      'Геометрия 8 класса: параллелограмм, ромб, трапеция и теорема Фалеса, симметрия, площади фигур, теорема Пифагора и формула Герона, окружность и вписанные/описанные фигуры, векторы.',
      'Grade 8 geometry: parallelograms, rhombuses, trapezia and Thales’ theorem, symmetry, areas, Pythagoras’ theorem and Heron’s formula, circles with inscribed and circumscribed figures, and vectors.'),
    sections: [
      { id: 's1', title: L('To‘rtburchaklar', 'Четырёхугольники', 'Quadrilaterals'), icon: '▱', color: 'blue', topics: [
        { id: 't1', lessons: ch(1), title: L('Ko‘pburchaklar. Ichki va tashqi burchaklar yig‘indisi', 'Многоугольники. Сумма внутренних и внешних углов', 'Polygons. Interior and exterior angle sums'),
          keys: ['(n − 2) · 180°', '360°', 'n(n − 3)/2'],
          scene: [{ obj: 'star', n: 1, color: 'yellow' }, { obj: 'cube', n: 2, color: 'blue' }],
          explain: L('Qavariq n burchakli ko‘pburchakda ichki burchaklar yig‘indisi (n − 2) · 180°, tashqi burchaklar yig‘indisi har doim 360°. Diagonallar soni n(n − 3)/2: har bir uchdan (n − 3) ta diagonal chiqadi, har biri ikki marta sanaladi.',
            'В выпуклом n-угольнике сумма внутренних углов (n − 2) · 180°, сумма внешних всегда 360°. Число диагоналей n(n − 3)/2: из каждой вершины выходит (n − 3) диагонали, каждая посчитана дважды.',
            'In a convex n-gon the interior angles add to (n − 2) · 180° and the exterior angles always add to 360°. There are n(n − 3)/2 diagonals: (n − 3) leave each vertex, and each is counted twice.'),
          rule: 'S = (n − 2) · 180° · d = n(n − 3)/2',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var n = R(4, 12), m = pick([5, 6, 8, 9, 10, 12]); return [{ q: 'n = ' + n + ';  S°', a: (n - 2) * 180 }, { q: mk(function (l) { return { uz: 'diagonallar soni, n = ', ru: 'число диагоналей, n = ', en: 'number of diagonals, n = ' }[l] + n; }), a: n * (n - 3) / 2 }, { q: mk(function (l) { return { uz: 'muntazam, n = ', ru: 'правильный, n = ', en: 'regular, n = ' }[l] + m + '; ' + { uz: 'ichki burchak', ru: 'внутренний угол', en: 'interior angle' }[l]; }), a: (m - 2) * 180 / m }][R(0, 2)]; } },
            { type: 'drill', title: L('Tomonlar soni', 'Число сторон', 'Number of sides'), n: 4, make: function (R) { var n = R(5, 15); return { q: 'S = ' + (n - 2) * 180 + '°;  n', a: n }; } }
          ],
          quiz: [{ q: L('Oltiburchak burchaklari yig‘indisi?', 'Сумма углов шестиугольника?', 'Angle sum of a hexagon?'), o: ['720°', '540°', '1080°'], a: 0 }, { q: L('Tashqi burchaklar yig‘indisi?', 'Сумма внешних углов?', 'Sum of exterior angles?'), o: ['360°', '180°', '(n − 2) · 180°'], a: 0 }] },

        { id: 't2', lessons: ch(1), title: L('Parallelogramm, uning xossalari va alomatlari', 'Параллелограмм: свойства и признаки', 'Parallelograms: properties and tests'),
          keys: [L('qarama-qarshi tomonlar teng', 'противоположные стороны равны', 'opposite sides equal'), L('diagonallar teng ikkiga bo‘linadi', 'диагонали делятся пополам', 'diagonals bisect each other')],
          scene: [{ obj: 'flat', n: 2, color: 'blue' }],
          explain: L('<b>Parallelogramm</b> — qarama-qarshi tomonlari juft-jufti bilan parallel to‘rtburchak. Xossalari: qarama-qarshi tomonlar va burchaklar teng; qo‘shni burchaklar yig‘indisi 180°; diagonallar kesishish nuqtasida teng ikkiga bo‘linadi. Alomatlar: ikki tomoni teng va parallel bo‘lsa, yoki diagonallari teng ikkiga bo‘linsa — bu parallelogramm.',
            '<b>Параллелограмм</b> — четырёхугольник, у которого противоположные стороны попарно параллельны. Свойства: противоположные стороны и углы равны; сумма соседних углов 180°; диагонали точкой пересечения делятся пополам. Признаки: две стороны равны и параллельны, или диагонали делятся пополам — это параллелограмм.',
            'A <b>parallelogram</b> has both pairs of opposite sides parallel. Properties: opposite sides and angles are equal; neighbouring angles add to 180°; the diagonals bisect each other. Tests: if one pair of sides is equal and parallel, or the diagonals bisect each other, it is a parallelogram.'),
          rule: 'P = 2(a + b) · ∠A + ∠B = 180°',
          acts: [
            { type: 'problem', title: L('Perimetr', 'Периметр', 'Perimeter'), make: function (R) { var a = R(4, 20), b = R(3, 15); return { story: mk(function (l) { return { uz: 'Parallelogramm <u>perimetri</u>?', ru: '<u>Периметр</u> параллелограмма?', en: 'The parallelogram’s <u>perimeter</u>?' }[l] + paraFig(a + ' cm', b + ' cm'); }), expr: [a, '+', b, '·', 2, '=', 2 * (a + b)], ans: 2 * (a + b), unit: CM }; } },
            { type: 'drill', n: 6, make: function (R) { var a = R(4, 17) * 5, d = R(3, 20); return [{ q: mk(function (l) { return '∠A = ' + a + '°; ' + { uz: '∠B (qo‘shni)', ru: '∠B (соседний)', en: '∠B (next to A)' }[l]; }), a: 180 - a }, { q: mk(function (l) { return '∠A = ' + a + '°; ' + { uz: '∠C (qarama-qarshi)', ru: '∠C (противолежащий)', en: '∠C (opposite)' }[l]; }), a: a }, { q: 'AC = ' + 2 * d + ';  AO', a: d }][R(0, 2)]; } }
          ],
          quiz: [{ q: L('Parallelogramm diagonallari...', 'Диагонали параллелограмма...', 'A parallelogram’s diagonals...'), o: [L('teng ikkiga bo‘linadi', 'делятся пополам', 'bisect each other'), L('doim teng', 'всегда равны', 'are always equal'), L('doim perpendikulyar', 'всегда перпендикулярны', 'are always perpendicular')], a: 0 }, { q: L('∠A = 70°. ∠B?', '∠A = 70°. ∠B?', '∠A = 70°. ∠B?'), o: ['110°', '70°', '20°'], a: 0 }] },

        { id: 't3', lessons: ch(1), title: L('To‘g‘ri to‘rtburchak, romb va kvadrat', 'Прямоугольник, ромб и квадрат', 'Rectangles, rhombuses and squares'),
          keys: [L('diagonallar teng', 'диагонали равны', 'equal diagonals'), L('diagonallar perpendikulyar', 'диагонали перпендикулярны', 'perpendicular diagonals')],
          scene: [{ obj: 'flat', n: 3, color: 'green' }],
          explain: L('<b>To‘g‘ri to‘rtburchak</b> — burchaklari to‘g‘ri parallelogramm; diagonallari teng. <b>Romb</b> — tomonlari teng parallelogramm; diagonallari perpendikulyar va burchaklarni teng ikkiga bo‘ladi. <b>Kvadrat</b> — ham to‘g‘ri to‘rtburchak, ham romb: barcha xossalar unda bor.',
            '<b>Прямоугольник</b> — параллелограмм с прямыми углами; диагонали равны. <b>Ромб</b> — параллелограмм с равными сторонами; диагонали перпендикулярны и делят углы пополам. <b>Квадрат</b> — и прямоугольник, и ромб: у него все эти свойства.',
            'A <b>rectangle</b> is a parallelogram with right angles; its diagonals are equal. A <b>rhombus</b> is a parallelogram with equal sides; its diagonals are perpendicular and bisect the angles. A <b>square</b> is both, so it has every one of these properties.'),
          rule: L('kvadrat = to‘g‘ri to‘rtburchak ∩ romb', 'квадрат = прямоугольник ∩ ромб', 'square = rectangle ∩ rhombus'),
          acts: [
            { type: 'choose', icon: '🔷', make: function () { return pick([
              choice(L('Diagonallari teng va perpendikulyar parallelogramm...', 'Параллелограмм с равными перпендикулярными диагоналями —', 'A parallelogram with equal, perpendicular diagonals is a...'), [L('kvadrat', 'квадрат', 'square'), L('romb', 'ромб', 'rhombus'), L('trapetsiya', 'трапеция', 'trapezium')], 0),
              choice(L('Diagonallari teng parallelogramm...', 'Параллелограмм с равными диагоналями —', 'A parallelogram with equal diagonals is a...'), [L('to‘g‘ri to‘rtburchak', 'прямоугольник', 'rectangle'), L('romb', 'ромб', 'rhombus'), L('trapetsiya', 'трапеция', 'trapezium')], 0),
              choice(L('Diagonallari perpendikulyar parallelogramm...', 'Параллелограмм с перпендикулярными диагоналями —', 'A parallelogram with perpendicular diagonals is a...'), [L('romb', 'ромб', 'rhombus'), L('to‘g‘ri to‘rtburchak', 'прямоугольник', 'rectangle'), L('trapetsiya', 'трапеция', 'trapezium')], 0)]); } },
            { type: 'drill', n: 6, make: function (R) { var a = R(2, 16) * 5, t = triple(R); return [{ q: mk(function (l) { return { uz: 'Romb, ∠A = ', ru: 'Ромб, ∠A = ', en: 'Rhombus, ∠A = ' }[l] + 2 * a + '°; ∠BAC'; }), a: a }, { q: mk(function (l) { return { uz: 'To‘g‘ri to‘rtburchak ', ru: 'Прямоугольник ', en: 'Rectangle ' }[l] + t[0] + ' × ' + t[1] + '; ' + { uz: 'diagonal', ru: 'диагональ', en: 'diagonal' }[l]; }), a: t[2] }][R(0, 1)]; } }
          ],
          quiz: [{ q: L('Romb diagonallari...', 'Диагонали ромба...', 'A rhombus’s diagonals...'), o: [L('perpendikulyar', 'перпендикулярны', 'are perpendicular'), L('doim teng', 'всегда равны', 'are always equal'), L('parallel', 'параллельны', 'are parallel')], a: 0 }, { q: L('6 × 8 to‘g‘ri to‘rtburchak diagonali?', 'Диагональ прямоугольника 6 × 8?', 'Diagonal of a 6 × 8 rectangle?'), o: ['10', '14', '48'], a: 0 }] },

        { id: 't4', lessons: ch(1), title: L('Uchburchakning o‘rta chizig‘i', 'Средняя линия треугольника', 'The midline of a triangle'),
          keys: [L('o‘rta chiziq = asos / 2', 'средняя линия = основание / 2', 'midline = base / 2')],
          scene: [{ obj: 'pyramid', n: 1, color: 'orange' }],
          explain: L('Uchburchak ikki tomonining o‘rtalarini tutashtiruvchi kesma — <b>o‘rta chiziq</b>. Teorema: o‘rta chiziq uchinchi tomonga parallel va uning yarmiga teng. Uchala o‘rta chiziq uchburchakni 4 ta teng uchburchakka bo‘ladi; ular hosil qilgan uchburchak perimetri asl perimetrning yarmi.',
            'Отрезок, соединяющий середины двух сторон треугольника, — <b>средняя линия</b>. Теорема: средняя линия параллельна третьей стороне и равна её половине. Три средние линии делят треугольник на 4 равных; периметр треугольника из них — половина исходного.',
            'The segment joining the midpoints of two sides is a <b>midline</b>. Theorem: it is parallel to the third side and half as long. The three midlines cut the triangle into 4 equal triangles, and the midline triangle has half the original perimeter.'),
          rule: 'MN ∥ AC · MN = AC / 2',
          acts: [
            { type: 'drill', n: 6, make: function (R) { var a = R(2, 20); return R(0, 1) ? { q: 'AC = ' + 2 * a + ';  MN', a: a } : { q: 'MN = ' + a + ';  AC', a: 2 * a }; } },
            { type: 'problem', make: function (R) { var a = R(3, 12) * 2, b = R(3, 12) * 2, c = R(3, 12) * 2; while (a + b <= c || a + c <= b || b + c <= a) c = R(3, 12) * 2; return { story: L('Uchburchak tomonlari <b>' + a + '</b>, <b>' + b + '</b> va <b>' + c + '</b> cm. O‘rta chiziqlardan hosil bo‘lgan uchburchakning <u>perimetri</u>?', 'Стороны треугольника <b>' + a + '</b>, <b>' + b + '</b> и <b>' + c + '</b> см. <u>Периметр</u> треугольника из средних линий?', 'A triangle has sides <b>' + a + '</b>, <b>' + b + '</b> and <b>' + c + '</b> cm. <u>Perimeter</u> of the midline triangle?'), expr: [a, '+', b, '+', c, ':', 2, '=', (a + b + c) / 2], ans: (a + b + c) / 2, unit: CM }; } }
          ],
          quiz: [{ q: 'AC = 18. MN = ?', o: ['9', '18', '36'], a: 0 }, { q: L('O‘rta chiziq uchinchi tomonga...', 'Средняя линия третьей стороне...', 'The midline is ... to the third side'), o: [L('parallel', 'параллельна', 'parallel'), L('perpendikulyar', 'перпендикулярна', 'perpendicular'), L('teng', 'равна', 'equal')], a: 0 }] },

        { id: 't5', lessons: ch(1), title: L('Trapetsiya va uning o‘rta chizig‘i', 'Трапеция и её средняя линия', 'Trapezia and their midline'),
          keys: [L('asoslar', 'основания', 'bases'), 'm = (a + b) / 2', L('teng yonli', 'равнобедренная', 'isosceles')],
          scene: [{ obj: 'flat', n: 2, color: 'pink' }],
          explain: L('<b>Trapetsiya</b> — faqat ikki tomoni (asoslari) parallel to‘rtburchak. O‘rta chizig‘i asoslarga parallel va ularning yarim yig‘indisiga teng: m = (a + b)/2. Teng yonli trapetsiyada asosdagi burchaklar teng va diagonallar teng; yon tomonga yopishgan burchaklar yig‘indisi 180°.',
            '<b>Трапеция</b> — четырёхугольник, у которого параллельны только две стороны (основания). Средняя линия параллельна основаниям и равна их полусумме: m = (a + b)/2. В равнобедренной трапеции углы при основании равны и диагонали равны; углы при боковой стороне в сумме 180°.',
            'A <b>trapezium</b> has exactly one pair of parallel sides (the bases). Its midline is parallel to them and equals half their sum: m = (a + b)/2. In an isosceles trapezium the base angles are equal and so are the diagonals; angles along a leg add to 180°.'),
          rule: 'm = (a + b) / 2',
          acts: [
            { type: 'problem', title: L('O‘rta chiziq', 'Средняя линия', 'Midline'), make: function (R) { var b = R(3, 12), a = b + 2 * R(1, 8); return { story: mk(function (l) { return { uz: 'Trapetsiya asoslari ' + a + ' va ' + b + ' cm. <u>O‘rta chizig‘i</u>?', ru: 'Основания трапеции ' + a + ' и ' + b + ' см. <u>Средняя линия</u>?', en: 'The bases are ' + a + ' and ' + b + ' cm. <u>The midline</u>?' }[l] + trapFig(a, b, '?'); }), expr: [a, '+', b, ':', 2, '=', (a + b) / 2], ans: (a + b) / 2, unit: CM }; } },
            { type: 'drill', n: 6, make: function (R) { var a = R(6, 17) * 5, m = R(5, 20), b = R(2, m - 1); return [{ q: mk(function (l) { return { uz: 'Teng yonli trapetsiya, ∠A = ', ru: 'Равнобедренная трапеция, ∠A = ', en: 'Isosceles trapezium, ∠A = ' }[l] + a + '°;  ∠B'; }), a: 180 - a }, { q: 'm = ' + m + ', b = ' + b + ';  a', a: 2 * m - b }][R(0, 1)]; } }
          ],
          quiz: [{ q: L('Asoslar 10 va 6. O‘rta chiziq?', 'Основания 10 и 6. Средняя линия?', 'Bases 10 and 6. Midline?'), o: ['8', '16', '4'], a: 0 }, { q: L('Trapetsiyada nechta juft parallel tomon?', 'Сколько пар параллельных сторон у трапеции?', 'Pairs of parallel sides in a trapezium?'), o: ['1', '2', '0'], a: 0 }] },

        { id: 't6', lessons: ch(1), title: L('Fales teoremasi va uning tatbiqi', 'Теорема Фалеса и её применение', 'Thales’ theorem and its uses'),
          keys: [L('teng kesmalar', 'равные отрезки', 'equal segments'), L('proporsional kesmalar', 'пропорциональные отрезки', 'proportional segments')],
          scene: [{ obj: 'rod', n: 4, color: 'violet' }],
          explain: L('<b>Fales teoremasi</b>: burchakning bir tomonida teng kesmalar ajratib, ularning uchlaridan parallel to‘g‘ri chiziqlar o‘tkazsak, ikkinchi tomonda ham teng kesmalar hosil bo‘ladi. Umumlashgani: parallel to‘g‘ri chiziqlar burchak tomonlarida proporsional kesmalar ajratadi. Bu yordamida kesmani istalgan sonli teng bo‘lakka bo‘lish mumkin.',
            '<b>Теорема Фалеса</b>: если на одной стороне угла отложить равные отрезки и через их концы провести параллельные прямые, то на другой стороне тоже получатся равные отрезки. Обобщение: параллельные прямые отсекают на сторонах угла пропорциональные отрезки. Так любой отрезок делят на любое число равных частей.',
            '<b>Thales’ theorem</b>: mark equal segments on one side of an angle and draw parallel lines through their ends — the other side is cut into equal segments too. Generally, parallel lines cut the sides of an angle proportionally. This lets you divide any segment into any number of equal parts.'),
          rule: 'a₁ : a₂ = b₁ : b₂',
          acts: [
            { type: 'drill', title: L('Proporsional kesma', 'Пропорциональный отрезок', 'Proportional segment'), n: 6, make: function (R) { var a = R(2, 9), b = R(2, 9), k = R(2, 5); return { q: 'a₁ = ' + a + ', a₂ = ' + b + ', b₁ = ' + a * k + ';  b₂', a: b * k }; } },
            { type: 'drill', title: L('Teng bo‘laklar', 'Равные части', 'Equal parts'), n: 4, make: function (R) { var n = R(3, 7), x = R(2, 9); return { q: mk(function (l) { return 'AB = ' + n * x + ', ' + { uz: n + ' ta teng bo‘lak; bir bo‘lak', ru: n + ' равных частей; одна часть', en: n + ' equal parts; one part' }[l]; }), a: x }; } }
          ],
          quiz: [{ q: 'a₁ = 3, a₂ = 5, b₁ = 6. b₂ = ?', o: ['10', '8', '15'], a: 0 }, { q: L('Fales qaysi davlatdan?', 'Откуда был Фалес?', 'Where was Thales from?'), o: [L('Qadimgi Yunoniston (Milet)', 'Древняя Греция (Милет)', 'Ancient Greece (Miletus)'), L('Misr', 'Египет', 'Egypt'), L('Hindiston', 'Индия', 'India')], a: 0 }] },

        { id: 't7', lessons: ch(1), title: L('O‘q va markaziy simmetriya', 'Осевая и центральная симметрия', 'Line and point symmetry'),
          keys: [L('simmetriya o‘qi', 'ось симметрии', 'line of symmetry'), L('simmetriya markazi', 'центр симметрии', 'centre of symmetry')],
          scene: [{ obj: 'star', n: 2, color: 'pink' }],
          explain: L('A va A₁ nuqtalar l to‘g‘ri chiziqqa nisbatan simmetrik, agar l AA₁ ga perpendikulyar bo‘lib, uni teng ikkiga bo‘lsa. O nuqtaga nisbatan simmetrik — agar O AA₁ ning o‘rtasi bo‘lsa. Koordinatalarda: Ox ga nisbatan (x; y) → (x; −y), Oy ga nisbatan → (−x; y), O ga nisbatan → (−x; −y). Parallelogrammda markaziy simmetriya bor, to‘g‘ri to‘rtburchakda — ikki o‘q ham.',
            'Точки A и A₁ симметричны относительно прямой l, если l перпендикулярна AA₁ и делит её пополам; относительно точки O — если O середина AA₁. В координатах: относительно Ox (x; y) → (x; −y), относительно Oy → (−x; y), относительно O → (−x; −y). У параллелограмма есть центр симметрии, у прямоугольника ещё и две оси.',
            'A and A₁ are symmetric about line l if l is perpendicular to AA₁ and bisects it; about point O if O is the midpoint of AA₁. In coordinates: about Ox, (x; y) → (x; −y); about Oy → (−x; y); about O → (−x; −y). A parallelogram has a centre of symmetry; a rectangle also has two lines.'),
          rule: 'O: (x; y) → (−x; −y)',
          acts: [
            { type: 'drill', n: 6, make: function (R) { var x = R(-8, 8) || 3, y = R(-8, 8) || -2, k = R(0, 2); return { q: mk(function (l) { return 'A(' + ns(x) + '; ' + ns(y) + '), ' + [{ uz: 'Ox ga nisbatan; y', ru: 'относительно Ox; y', en: 'about Ox; y' }, { uz: 'Oy ga nisbatan; x', ru: 'относительно Oy; x', en: 'about Oy; x' }, { uz: 'O ga nisbatan; x', ru: 'относительно O; x', en: 'about O; x' }][k][l]; }), a: [-y, -x, -x][k] }; } },
            { type: 'choose', icon: '🪞', make: function () { return pick([
              choice(L('Qaysi harfda simmetriya markazi bor?', 'У какой буквы есть центр симметрии?', 'Which letter has a centre of symmetry?'), ['N', 'A', 'T'], 0),
              choice(L('Kvadratning nechta simmetriya o‘qi bor?', 'Сколько осей симметрии у квадрата?', 'How many lines of symmetry has a square?'), ['4', '2', '1'], 0),
              choice(L('Teng tomonli uchburchakda simmetriya markazi bormi?', 'Есть ли центр симметрии у равностороннего треугольника?', 'Does an equilateral triangle have a centre of symmetry?'), [L('yo‘q', 'нет', 'no'), L('ha', 'да', 'yes')], 0)]); } }
          ],
          quiz: [{ q: L('(3; −2) ning O ga nisbatan simmetrigi?', 'Точка, симметричная (3; −2) относительно O?', 'The point symmetric to (3; −2) about O?'), o: ['(−3; 2)', '(3; 2)', '(−3; −2)'], a: 0 }, { q: L('Doiraning nechta simmetriya o‘qi bor?', 'Сколько осей симметрии у круга?', 'Lines of symmetry of a circle?'), o: [L('cheksiz ko‘p', 'бесконечно много', 'infinitely many'), '2', '1'], a: 0 }] }
      ] },

      { id: 's2', title: L('Yuzlar', 'Площади', 'Area'), icon: '⬛', color: 'green', topics: [
        { id: 't8', lessons: ch(2), title: L('Yuz tushunchasi. To‘g‘ri to‘rtburchakning yuzi', 'Понятие площади. Площадь прямоугольника', 'Area. Area of a rectangle'),
          keys: [L('tengdosh shakllar', 'равновеликие фигуры', 'figures of equal area'), 'S = ab'],
          scene: [{ obj: 'flat', n: 4, color: 'green' }],
          explain: L('Yuz xossalari: teng shakllar yuzlari teng; shakl bo‘laklarga bo‘linsa, yuz bo‘laklar yuzlari yig‘indisiga teng; tomoni 1 bo‘lgan kvadrat yuzi 1. Yuzlari teng shakllar — <b>tengdosh</b>. To‘g‘ri to‘rtburchak yuzi S = ab. Birliklar: 1 m² = 10 000 cm², 1 ga = 10 000 m².',
            'Свойства площади: равные фигуры имеют равные площади; если фигура разбита на части, её площадь равна сумме площадей частей; площадь квадрата со стороной 1 равна 1. Фигуры с равными площадями — <b>равновеликие</b>. Площадь прямоугольника S = ab. Единицы: 1 м² = 10 000 см², 1 га = 10 000 м².',
            'Area rules: equal figures have equal areas; a figure cut into pieces has the sum of their areas; a unit square has area 1. Figures with the same area are <b>equal in area</b>. A rectangle’s area is S = ab. Units: 1 m² = 10 000 cm², 1 ha = 10 000 m².'),
          rule: 'S = a · b',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var a = R(2, 30), b = R(2, 25), k = R(0, 2), m = R(1, 9); return [{ q: 'a = ' + a + ', b = ' + b + ';  S', a: a * b }, { q: 'S = ' + a * b + ', a = ' + a + ';  b', a: b }, { q: m + ' m² = ? cm²', a: m * 10000 }][k]; } },
            { type: 'problem', make: function (R) { var a = R(3, 9), b = R(2, 6), t = pick([20, 25, 50]); return { story: L('Xona <b>' + a + ' × ' + b + '</b> m. Uni <b>' + t + ' × ' + t + '</b> cm li plitkalar bilan qoplash uchun <u>nechta</u> plitka kerak? (1 m² ga ' + (10000 / (t * t)) + ' ta)', 'Комната <b>' + a + ' × ' + b + '</b> м. <u>Сколько</u> плиток <b>' + t + ' × ' + t + '</b> см нужно? (на 1 м² — ' + (10000 / (t * t)) + ' шт.)', 'A room is <b>' + a + ' × ' + b + '</b> m. <u>How many</u> <b>' + t + ' × ' + t + '</b> cm tiles are needed? (' + (10000 / (t * t)) + ' per m²)'), expr: [a * b, '·', 10000 / (t * t), '=', a * b * 10000 / (t * t)], ans: a * b * 10000 / (t * t), unit: H.PCS }; } }
          ],
          quiz: [{ q: '1 m² = ? cm²', o: ['10000', '100', '1000'], a: 0 }, { q: L('Tengdosh shakllar...', 'Равновеликие фигуры...', 'Figures equal in area...'), o: [L('yuzlari teng', 'имеют равные площади', 'have the same area'), L('doim teng', 'всегда равны', 'are always congruent'), L('perimetrlari teng', 'имеют равные периметры', 'have the same perimeter')], a: 0 }] },

        { id: 't9', lessons: ch(2), title: L('Parallelogramm va uchburchakning yuzi', 'Площадь параллелограмма и треугольника', 'Area of parallelograms and triangles'),
          keys: ['S = a · h', 'S = ½ · a · h', 'S = ½ · ab (∠C = 90°)'],
          scene: [{ obj: 'pyramid', n: 2, color: 'orange' }],
          explain: L('Parallelogrammdan uchburchakni kesib, qarama-qarshi tomonga ko‘chirsak, to‘g‘ri to‘rtburchak hosil bo‘ladi, shuning uchun S = a · h (h — a tomonga tushirilgan balandlik). Diagonal parallelogrammni ikkita teng uchburchakka bo‘ladi: uchburchak yuzi S = ½ a h. To‘g‘ri burchakli uchburchakda S = ½ · katet · katet.',
            'Отрезав от параллелограмма треугольник и перенеся его на другую сторону, получим прямоугольник, поэтому S = a · h (h — высота к стороне a). Диагональ делит параллелограмм на два равных треугольника: S треугольника = ½ a h. В прямоугольном треугольнике S = ½ · катет · катет.',
            'Cut a triangle off a parallelogram and move it to the other side: you get a rectangle, so S = a · h (h is the height to side a). A diagonal splits it into two equal triangles, so a triangle has S = ½ a h. In a right triangle, S = ½ · leg · leg.'),
          rule: 'S = a·h · S△ = ½ a h',
          acts: [
            { type: 'problem', make: function (R) { var a = R(4, 20), h = R(3, 12); return { story: mk(function (l) { return { uz: 'Parallelogramm asosi ' + a + ' cm, balandligi ' + h + ' cm. <u>Yuzi</u>?', ru: 'Основание параллелограмма ' + a + ' см, высота ' + h + ' см. <u>Площадь</u>?', en: 'A parallelogram has base ' + a + ' cm and height ' + h + ' cm. <u>Area</u>?' }[l] + paraFig(a + ' cm', '', '<line x1="90" y1="40" x2="90" y2="140" stroke="#ff6b8b" stroke-width="2.5" stroke-dasharray="6 5"/><text x="105" y="95" ' + TX + '>h</text>'); }), expr: [a, '·', h, '=', a * h], ans: a * h, unit: CM2 }; } },
            { type: 'drill', n: 6, make: function (R) { var a = R(2, 20), h = R(1, 10) * 2, t = triple(R); return [{ q: 'S△, a = ' + a + ', h = ' + h, a: a * h / 2 }, { q: mk(function (l) { return { uz: 'To‘g‘ri burchakli △, katetlar ', ru: 'Прямоугольный △, катеты ', en: 'Right △, legs ' }[l] + t[0] + ', ' + t[1] + ';  S'; }), a: t[0] * t[1] / 2 }, { q: 'S△ = ' + a * h / 2 + ', a = ' + a + ';  h', a: h }][R(0, 2)]; } }
          ],
          quiz: [{ q: L('a = 10, h = 6. Parallelogramm yuzi?', 'a = 10, h = 6. Площадь параллелограмма?', 'a = 10, h = 6. Parallelogram area?'), o: ['60', '30', '16'], a: 0 }, { q: L('Katetlar 6 va 8. Yuz?', 'Катеты 6 и 8. Площадь?', 'Legs 6 and 8. Area?'), o: ['24', '48', '14'], a: 0 }] },

        { id: 't10', lessons: ch(2), title: L('Romb, trapetsiya va ko‘pburchakning yuzi', 'Площадь ромба, трапеции и многоугольника', 'Area of rhombuses, trapezia and polygons'),
          keys: ['S = d₁d₂ / 2', 'S = (a + b)/2 · h'],
          scene: [{ obj: 'flat', n: 2, color: 'violet' }],
          explain: L('Romb yuzi diagonallar ko‘paytmasining yarmi: S = d₁d₂/2 (diagonallar perpendikulyar bo‘lgani uchun). Trapetsiya yuzi: S = (a + b)/2 · h = o‘rta chiziq · balandlik. Ixtiyoriy ko‘pburchak yuzini uchburchaklarga bo‘lib topamiz.',
            'Площадь ромба — половина произведения диагоналей: S = d₁d₂/2 (диагонали перпендикулярны). Площадь трапеции: S = (a + b)/2 · h = средняя линия · высота. Площадь любого многоугольника находят, разбивая его на треугольники.',
            'A rhombus has area half the product of its diagonals: S = d₁d₂/2 (they are perpendicular). A trapezium: S = (a + b)/2 · h = midline · height. Any polygon’s area is found by splitting it into triangles.'),
          rule: 'S = (a + b)/2 · h',
          acts: [
            { type: 'problem', title: L('Trapetsiya', 'Трапеция', 'Trapezium'), make: function (R) { var b = R(3, 10), a = b + 2 * R(1, 6), h = R(2, 10); return { story: mk(function (l) { return { uz: 'Trapetsiya asoslari ' + a + ' va ' + b + ' cm, balandligi ' + h + ' cm. <u>Yuzi</u>?', ru: 'Основания трапеции ' + a + ' и ' + b + ' см, высота ' + h + ' см. <u>Площадь</u>?', en: 'A trapezium has bases ' + a + ' and ' + b + ' cm and height ' + h + ' cm. <u>Area</u>?' }[l] + trapFig(a, b, (a + b) / 2); }), expr: [a, '+', b, ':', 2, '·', h, '=', (a + b) / 2 * h], ans: (a + b) / 2 * h, unit: CM2 }; } },
            { type: 'drill', n: 6, make: function (R) { var d1 = R(2, 12) * 2, d2 = R(2, 15); return { q: mk(function (l) { return { uz: 'Romb, d₁ = ', ru: 'Ромб, d₁ = ', en: 'Rhombus, d₁ = ' }[l] + d1 + ', d₂ = ' + d2 + ';  S'; }), a: d1 * d2 / 2 }; } }
          ],
          quiz: [{ q: L('Romb diagonallari 6 va 8. Yuz?', 'Диагонали ромба 6 и 8. Площадь?', 'Rhombus diagonals 6 and 8. Area?'), o: ['24', '48', '14'], a: 0 }, { q: L('Asoslar 4 va 6, h = 5. Trapetsiya yuzi?', 'Основания 4 и 6, h = 5. Площадь трапеции?', 'Bases 4 and 6, h = 5. Trapezium area?'), o: ['25', '50', '120'], a: 0 }] }
      ] },

      { id: 's3', title: L('Pifagor teoremasi', 'Теорема Пифагора', 'Pythagoras’ theorem'), icon: '📐', color: 'orange', topics: [
        { id: 't11', lessons: ch(3), title: L('Pifagor teoremasi va uning isboti', 'Теорема Пифагора и её доказательство', 'Pythagoras’ theorem and its proof'),
          keys: ['a² + b² = c²', L('katet, gipotenuza', 'катет, гипотенуза', 'legs, hypotenuse')],
          scene: [{ obj: 'pyramid', n: 1, color: 'green' }],
          explain: L('To‘g‘ri burchakli uchburchakda gipotenuza kvadrati katetlar kvadratlari yig‘indisiga teng: c² = a² + b². Isbot g‘oyasi: tomoni a + b bo‘lgan kvadrat ichiga 4 ta teng uchburchak joylashtirsak, o‘rtada tomoni c bo‘lgan kvadrat qoladi: (a + b)² = 4 · ab/2 + c² ⇒ a² + b² = c².',
            'В прямоугольном треугольнике квадрат гипотенузы равен сумме квадратов катетов: c² = a² + b². Идея доказательства: в квадрат со стороной a + b укладываем 4 равных треугольника, в середине остаётся квадрат со стороной c: (a + b)² = 4 · ab/2 + c² ⇒ a² + b² = c².',
            'In a right triangle the square on the hypotenuse equals the sum of the squares on the legs: c² = a² + b². Proof idea: place 4 equal triangles inside a square of side a + b; a square of side c is left in the middle: (a + b)² = 4 · ab/2 + c² ⇒ a² + b² = c².'),
          rule: 'c² = a² + b²',
          acts: [
            { type: 'choose', title: L('Gipotenuza', 'Гипотенуза', 'Hypotenuse'), icon: '📐', make: function (R) { var t = triple(R), d = mk(function (l) { return { uz: 'Katetlar ' + t[0] + ' va ' + t[1] + '. <u>Gipotenuza</u>? (c² = ' + (t[0] * t[0] + t[1] * t[1]) + ')', ru: 'Катеты ' + t[0] + ' и ' + t[1] + '. <u>Гипотенуза</u>? (c² = ' + (t[0] * t[0] + t[1] * t[1]) + ')', en: 'Legs ' + t[0] + ' and ' + t[1] + '. <u>Hypotenuse</u>? (c² = ' + (t[0] * t[0] + t[1] * t[1]) + ')' }[l] + rightFig(t[0], t[1], '?'); }); return choice(d, [String(t[2]), String(t[0] + t[1]), String(t[2] + 1)], 0); } },
            { type: 'choose', title: L('Narvon', 'Лестница', 'Ladder'), icon: '🪜', make: function (R) { var t = pick([[6, 8, 10], [5, 12, 13], [9, 12, 15], [8, 15, 17]]); return choice(L('<b>' + t[2] + '</b> m uzunlikdagi narvon devorga suyalgan, pastki uchi devordan <b>' + t[0] + '</b> m uzoqda. Narvon devorga <u>qanday balandlikda</u> tegadi?', 'Лестница длиной <b>' + t[2] + '</b> м приставлена к стене, её низ в <b>' + t[0] + '</b> м от стены. <u>На какой высоте</u> она касается стены?', 'A <b>' + t[2] + '</b> m ladder leans on a wall with its foot <b>' + t[0] + '</b> m out. <u>How high</u> up the wall does it reach?'), [t[1] + ' m', (t[2] - t[0]) + ' m', (t[1] + 1) + ' m'], 0); } }
          ],
          quiz: [{ q: L('Katetlar 3 va 4. Gipotenuza?', 'Катеты 3 и 4. Гипотенуза?', 'Legs 3 and 4. Hypotenuse?'), o: ['5', '7', '25'], a: 0 }, { q: L('Gipotenuza 13, katet 5. Ikkinchi katet?', 'Гипотенуза 13, катет 5. Второй катет?', 'Hypotenuse 13, leg 5. Other leg?'), o: ['12', '8', '18'], a: 0 }] },

        { id: 't12', lessons: ch(3), title: L('Pifagor teoremasining natijalari. Teskari teorema', 'Следствия теоремы Пифагора. Обратная теорема', 'Consequences and the converse'),
          keys: [L('katet &lt; gipotenuza', 'катет &lt; гипотенузы', 'leg &lt; hypotenuse'), L('teskari teorema', 'обратная теорема', 'converse')],
          scene: [{ obj: 'pyramid', n: 2, color: 'pink' }],
          explain: L('Natijalar: katet gipotenuzadan kichik; kvadrat diagonali a√2; perpendikulyar og‘madan qisqa. <b>Teskari teorema</b>: agar a² + b² = c² bo‘lsa, uchburchak to‘g‘ri burchakli. Misrliklar 3, 4, 5 tugunli arqon bilan to‘g‘ri burchak yasagan.',
            'Следствия: катет меньше гипотенузы; диагональ квадрата a√2; перпендикуляр короче наклонной. <b>Обратная теорема</b>: если a² + b² = c², треугольник прямоугольный. Египтяне строили прямой угол верёвкой с узлами 3, 4, 5.',
            'Consequences: a leg is shorter than the hypotenuse; a square’s diagonal is a√2; a perpendicular is shorter than any slanted line. <b>Converse</b>: if a² + b² = c², the triangle is right-angled. Egyptians made right angles with a rope knotted into 3, 4, 5.'),
          rule: 'a² + b² = c² ⇒ ∠C = 90°',
          acts: [
            { type: 'choose', title: L('To‘g‘ri burchaklimi?', 'Прямоугольный?', 'Right-angled?'), icon: '📐', make: function (R) { var t = triple(R), ok = R(0, 1), c = ok ? t[2] : t[2] + 1; return choice(t[0] + ', ' + t[1] + ', ' + c, [YES3(), NO3()], ok ? 0 : 1); } },
            { type: 'drill', title: L('Katet', 'Катет', 'Leg'), n: 6, make: function (R) { var t = triple(R); return { q: 'c = ' + t[2] + ', a = ' + t[0] + ';  b', a: t[1] }; } }
          ],
          quiz: [{ q: L('5, 12, 13 — to‘g‘ri burchaklimi?', '5, 12, 13 — прямоугольный?', '5, 12, 13 — right-angled?'), o: [L('ha', 'да', 'yes'), L('yo‘q', 'нет', 'no')], a: 0 }, { q: L('Kvadrat tomoni 1. Diagonali?', 'Сторона квадрата 1. Диагональ?', 'Square side 1. Diagonal?'), o: ['√2', '2', '1'], a: 0 }] },

        { id: 't13', lessons: ch(3), title: L('Uchburchak balandligi. Geron formulasi', 'Высота треугольника. Формула Герона', 'Triangle heights. Heron’s formula'),
          keys: ['p = (a + b + c)/2', 'S = √(p(p − a)(p − b)(p − c))', 'h = 2S / a'],
          scene: [{ obj: 'pyramid', n: 1, color: 'violet' }],
          explain: L('Uchta tomoni ma’lum uchburchak yuzi — <b>Geron formulasi</b>: S = √(p(p − a)(p − b)(p − c)), bunda p — yarim perimetr. Masalan, 13, 14, 15: p = 21, S = √(21·8·7·6) = 84. Balandlik: h = 2S/a, masalan 14 ga tushirilgan balandlik 12.',
            'Площадь треугольника по трём сторонам — <b>формула Герона</b>: S = √(p(p − a)(p − b)(p − c)), где p — полупериметр. Например, 13, 14, 15: p = 21, S = √(21·8·7·6) = 84. Высота: h = 2S/a, к стороне 14 — 12.',
            'Area from three sides — <b>Heron’s formula</b>: S = √(p(p − a)(p − b)(p − c)), where p is the semi-perimeter. E.g. 13, 14, 15: p = 21, S = √(21·8·7·6) = 84. Height: h = 2S/a, so the height to 14 is 12.'),
          rule: 'S = √(p(p − a)(p − b)(p − c))',
          acts: [
            { type: 'drill', n: 6, make: function (R) { var t = pick(HERON); return R(0, 1) ? { q: t[0] + ', ' + t[1] + ', ' + t[2] + ';  S', a: t[3] } : { q: t[0] + ', ' + t[1] + ', ' + t[2] + ';  p', a: (t[0] + t[1] + t[2]) / 2 }; } },
            { type: 'drill', title: L('Balandlik', 'Высота', 'Height'), n: 4, make: function (R) { var t = pick(HERON.filter(function (x) { return (2 * x[3]) % x[2] === 0; })); return { q: 'S = ' + t[3] + ', a = ' + t[2] + ';  h', a: 2 * t[3] / t[2] }; } }
          ],
          quiz: [{ q: L('13, 14, 15 uchburchak yuzi?', 'Площадь треугольника 13, 14, 15?', 'Area of the 13, 14, 15 triangle?'), o: ['84', '42', '168'], a: 0 }, { q: L('Geron qayerda yashagan?', 'Где жил Герон?', 'Where did Heron live?'), o: [L('Iskandariya', 'Александрия', 'Alexandria'), L('Samarqand', 'Самарканд', 'Samarkand'), L('Rim', 'Рим', 'Rome')], a: 0 }] }
      ] },

      { id: 's4', title: L('Aylana', 'Окружность', 'Circles'), icon: '⭕', color: 'cyan', topics: [
        { id: 't14', lessons: ch(4), title: L('Aylana. Markaziy burchak. Vatar va diametr xossalari', 'Окружность. Центральный угол. Хорды и диаметр', 'Circles. Central angles. Chords'),
          keys: [L('markaziy burchak = yoy', 'центральный угол = дуга', 'central angle = arc'), L('diametr ⊥ vatar', 'диаметр ⊥ хорде', 'diameter ⊥ chord')],
          scene: [{ obj: 'cylinder', n: 2, color: 'cyan' }],
          explain: L('Uchi markazda bo‘lgan burchak — <b>markaziy burchak</b>; u tiralgan yoy gradus o‘lchovi unga teng. Vatarga perpendikulyar diametr vatarni va uning yoyini teng ikkiga bo‘ladi. Shuning uchun vatar yarmi: √(r² − d²), d — markazdan vatargacha masofa.',
            'Угол с вершиной в центре — <b>центральный</b>; дуга, на которую он опирается, имеет ту же градусную меру. Диаметр, перпендикулярный хорде, делит её и дугу пополам. Поэтому половина хорды равна √(r² − d²), d — расстояние от центра до хорды.',
            'An angle with its vertex at the centre is a <b>central angle</b>; its arc has the same degree measure. A diameter perpendicular to a chord bisects the chord and its arc, so half the chord is √(r² − d²), where d is the distance from the centre.'),
          rule: 'AB = 2√(r² − d²)',
          acts: [
            { type: 'problem', title: L('Vatar', 'Хорда', 'Chord'), make: function (R) { var t = pick([[5, 3, 4], [5, 4, 3], [10, 6, 8], [13, 5, 12], [13, 12, 5], [17, 8, 15], [25, 7, 24], [10, 8, 6]]); return { story: mk(function (l) { return { uz: 'r = ' + t[0] + ', markazdan vatargacha masofa ' + t[1] + '. <u>Vatar uzunligi</u>? (yarmi ' + t[2] + ')', ru: 'r = ' + t[0] + ', расстояние от центра до хорды ' + t[1] + '. <u>Длина хорды</u>? (половина — ' + t[2] + ')', en: 'r = ' + t[0] + ', distance from the centre to the chord ' + t[1] + '. <u>Chord length</u>? (half is ' + t[2] + ')' }[l] + circFig('<line x1="90" y1="140" x2="210" y2="140" stroke="#ff6b8b" stroke-width="3"/><line x1="150" y1="95" x2="150" y2="140" stroke="#ff6b8b" stroke-width="2" stroke-dasharray="5 4"/><line x1="150" y1="95" x2="210" y2="140" stroke="#4f8dff" stroke-width="2"/>'); }), expr: [t[2], '·', 2, '=', 2 * t[2]], ans: 2 * t[2], unit: '' }; } },
            { type: 'drill', n: 6, make: function (R) { var a = R(2, 34) * 5; return R(0, 1) ? { q: mk(function (l) { return { uz: 'markaziy burchak ', ru: 'центральный угол ', en: 'central angle ' }[l] + a + '°; ' + { uz: 'yoy', ru: 'дуга', en: 'arc' }[l]; }), a: a } : { q: mk(function (l) { return { uz: 'yoy ', ru: 'дуга ', en: 'arc ' }[l] + a + '°; ' + { uz: 'qolgan yoy', ru: 'оставшаяся дуга', en: 'the rest of the circle' }[l]; }), a: 360 - a }; } }
          ],
          quiz: [{ q: L('r = 5, masofa 3. Vatar?', 'r = 5, расстояние 3. Хорда?', 'r = 5, distance 3. Chord?'), o: ['8', '4', '6'], a: 0 }, { q: L('Eng uzun vatar?', 'Самая длинная хорда?', 'The longest chord?'), o: [L('diametr', 'диаметр', 'the diameter'), L('radius', 'радиус', 'the radius'), L('urinma', 'касательная', 'a tangent')], a: 0 }] },

        { id: 't15', lessons: ch(4), title: L('To‘g‘ri chiziq va aylana. Urinma', 'Прямая и окружность. Касательная', 'Lines and circles. Tangents'),
          keys: [L('urinma ⊥ radius', 'касательная ⊥ радиусу', 'tangent ⊥ radius'), L('urinma kesmalari teng', 'отрезки касательных равны', 'tangent lengths are equal')],
          scene: [{ obj: 'ball', n: 2, color: 'blue' }],
          explain: L('Markazdan to‘g‘ri chiziqqacha masofa d: d &gt; r — umumiy nuqta yo‘q, d = r — bitta (urinma), d &lt; r — ikkita (kesuvchi). Urinma urinish nuqtasiga o‘tkazilgan radiusga perpendikulyar. Bir nuqtadan o‘tkazilgan ikki urinma kesmalari teng; urinma uzunligi √(OP² − r²).',
            'Расстояние d от центра до прямой: d &gt; r — общих точек нет, d = r — одна (касательная), d &lt; r — две (секущая). Касательная перпендикулярна радиусу в точке касания. Отрезки двух касательных из одной точки равны; длина касательной √(OP² − r²).',
            'Distance d from the centre to a line: d &gt; r — no common points; d = r — one (a tangent); d &lt; r — two (a secant). A tangent is perpendicular to the radius at the touching point. Two tangents from one point have equal lengths, each √(OP² − r²).'),
          rule: 'PA = √(OP² − r²)',
          acts: [
            { type: 'drill', title: L('Urinma uzunligi', 'Длина касательной', 'Tangent length'), n: 6, make: function (R) { var t = triple(R); return { q: 'OP = ' + t[2] + ', r = ' + t[0] + ';  PA', a: t[1] }; } },
            { type: 'choose', icon: '⭕', make: function (R) { var r = R(3, 9), k = R(0, 2), d = [r + R(1, 4), r, r - R(1, r - 1)][k]; return choice('r = ' + r + ', d = ' + d, [L('umumiy nuqta yo‘q', 'нет общих точек', 'no common points'), L('urinadi (1 nuqta)', 'касается (1 точка)', 'touches (1 point)'), L('kesadi (2 nuqta)', 'пересекает (2 точки)', 'crosses (2 points)')], k); } }
          ],
          quiz: [{ q: L('Urinma va radius orasidagi burchak?', 'Угол между касательной и радиусом?', 'Angle between a tangent and the radius?'), o: ['90°', '45°', '180°'], a: 0 }, { q: 'OP = 10, r = 6. PA = ?', o: ['8', '4', '16'], a: 0 }] },

        { id: 't16', lessons: ch(4), title: L('Aylanaga ichki chizilgan burchak', 'Вписанный угол', 'Inscribed angles'),
          keys: [L('ichki burchak = yoy / 2', 'вписанный = дуга / 2', 'inscribed = arc / 2'), L('diametrga tiralgan — 90°', 'опирается на диаметр — 90°', 'on a diameter — 90°')],
          scene: [{ obj: 'cylinder', n: 1, color: 'violet' }],
          explain: L('Uchi aylanada, tomonlari vatar bo‘lgan burchak — <b>ichki chizilgan</b>. U tiralgan yoyning yarmiga, ya’ni shu yoyga tiralgan markaziy burchakning yarmiga teng. Natijalar: bir yoyga tiralgan ichki burchaklar teng; diametrga tiralgan ichki burchak 90°.',
            'Угол с вершиной на окружности, стороны которого — хорды, — <b>вписанный</b>. Он равен половине дуги, на которую опирается, т.е. половине центрального угла. Следствия: вписанные углы, опирающиеся на одну дугу, равны; опирающийся на диаметр — 90°.',
            'An angle with its vertex on the circle and chords as sides is <b>inscribed</b>. It equals half its arc, i.e. half the central angle on the same arc. So inscribed angles on the same arc are equal, and one standing on a diameter is 90°.'),
          rule: '∠ABC = ∠AOC / 2',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var a = R(2, 34) * 5; return R(0, 1) ? { q: mk(function (l) { return { uz: 'markaziy ', ru: 'центральный ', en: 'central ' }[l] + 2 * a + '°; ' + { uz: 'ichki chizilgan', ru: 'вписанный', en: 'inscribed' }[l]; }), a: a } : { q: mk(function (l) { return { uz: 'ichki chizilgan ', ru: 'вписанный ', en: 'inscribed ' }[l] + a + '°; ' + { uz: 'yoy', ru: 'дуга', en: 'arc' }[l]; }), a: 2 * a }; } },
            { type: 'choose', icon: '∠', make: function () { return pick([
              choice(L('Diametrga tiralgan ichki burchak?', 'Вписанный угол, опирающийся на диаметр?', 'An inscribed angle on a diameter?'), ['90°', '180°', '45°'], 0),
              choice(L('Bir yoyga tiralgan ikki ichki burchak...', 'Два вписанных угла на одной дуге...', 'Two inscribed angles on the same arc are...'), [L('teng', 'равны', 'equal'), L('yig‘indisi 180°', 'в сумме 180°', 'supplementary'), L('har xil', 'разные', 'different')], 0)]); } }
          ],
          quiz: [{ q: L('Yoy 100°. Ichki chizilgan burchak?', 'Дуга 100°. Вписанный угол?', 'Arc 100°. Inscribed angle?'), o: ['50°', '100°', '200°'], a: 0 }, { q: L('Diametrga tiralgan burchak?', 'Угол на диаметр?', 'Angle on a diameter?'), o: ['90°', '60°', '180°'], a: 0 }] },

        { id: 't17', lessons: ch(4), title: L('Ichki va tashqi chizilgan aylanalar', 'Вписанная и описанная окружности', 'Inscribed and circumscribed circles'),
          keys: [L('bissektrisalar kesishmasi', 'точка пересечения биссектрис', 'where bisectors meet'), L('o‘rta perpendikulyarlar', 'серединные перпендикуляры', 'perpendicular bisectors'), 'r = S / p'],
          scene: [{ obj: 'ball', n: 1, color: 'yellow' }, { obj: 'pyramid', n: 1, color: 'orange' }],
          explain: L('Uchburchakka <b>ichki chizilgan</b> aylana markazi — bissektrisalar kesishmasi, radiusi r = S/p. <b>Tashqi chizilgan</b> aylana markazi — tomonlarga o‘rta perpendikulyarlar kesishmasi; to‘g‘ri burchakli uchburchakda u gipotenuza o‘rtasida, R = c/2. To‘rtburchakka tashqi aylana chizish uchun qarama-qarshi burchaklar yig‘indisi 180° bo‘lishi kerak.',
            'Центр <b>вписанной</b> в треугольник окружности — пересечение биссектрис, радиус r = S/p. Центр <b>описанной</b> — пересечение серединных перпендикуляров; в прямоугольном треугольнике это середина гипотенузы, R = c/2. Около четырёхугольника можно описать окружность, если сумма противоположных углов 180°.',
            'The centre of the <b>inscribed</b> circle is where the angle bisectors meet; its radius is r = S/p. The centre of the <b>circumscribed</b> circle is where the perpendicular bisectors meet; in a right triangle it is the midpoint of the hypotenuse, R = c/2. A quadrilateral has a circumcircle if its opposite angles add to 180°.'),
          rule: 'r = S/p · R = c/2 (∠C = 90°)',
          acts: [
            { type: 'drill', n: 6, make: function (R) { var t = triple(R); return R(0, 1) ? { q: mk(function (l) { return { uz: 'To‘g‘ri burchakli △ ', ru: 'Прямоугольный △ ', en: 'Right △ ' }[l] + t.join(', ') + ';  R'; }), a: t[2] / 2 } : { q: mk(function (l) { return { uz: 'To‘g‘ri burchakli △ ', ru: 'Прямоугольный △ ', en: 'Right △ ' }[l] + t.join(', ') + ';  r'; }), a: (t[0] + t[1] - t[2]) / 2 }; } },
            { type: 'drill', title: L('Ichki aylana radiusi', 'Радиус вписанной окружности', 'Inradius'), n: 4, make: function (R) { var t = pick([[13, 14, 15, 84], [5, 5, 6, 12], [10, 13, 13, 60], [9, 10, 17, 36], [17, 25, 26, 204]]); return { q: t[0] + ', ' + t[1] + ', ' + t[2] + ' (S = ' + t[3] + ');  r', a: r6(t[3] / ((t[0] + t[1] + t[2]) / 2)) }; } }
          ],
          quiz: [{ q: L('6, 8, 10 uchburchak: tashqi aylana radiusi?', 'Треугольник 6, 8, 10: радиус описанной?', 'Triangle 6, 8, 10: circumradius?'), o: ['5', '10', '4'], a: 0 }, { q: L('Ichki aylana markazi — ... kesishmasi', 'Центр вписанной — пересечение ...', 'The incentre is where the ... meet'), o: [L('bissektrisalar', 'биссектрис', 'angle bisectors'), L('medianalar', 'медиан', 'medians'), L('balandliklar', 'высот', 'altitudes')], a: 0 }] }
      ] },

      { id: 's5', title: L('Vektorlar', 'Векторы', 'Vectors'), icon: '➡️', color: 'violet', topics: [
        { id: 't18', lessons: ch(5), title: L('Vektor tushunchasi. Qo‘shish, ayirish, songa ko‘paytirish', 'Вектор. Сложение, вычитание, умножение на число', 'Vectors. Adding, subtracting, scaling'),
          keys: ['AB→ + BC→ = AC→', L('uchburchak qoidasi', 'правило треугольника', 'triangle rule'), '|k·a→| = |k|·|a→|'],
          scene: [{ obj: 'drone', n: 2, color: 'violet' }],
          explain: L('<b>Vektor</b> — yo‘nalgan kesma: uzunligi (moduli) va yo‘nalishi bor. Qo‘shish: uchburchak qoidasi AB→ + BC→ = AC→ yoki parallelogramm qoidasi. Ayirish: a→ − b→ = a→ + (−b→). Songa ko‘paytirish: uzunlik |k| marta o‘zgaradi, k &lt; 0 da yo‘nalish teskari bo‘ladi.',
            '<b>Вектор</b> — направленный отрезок: у него есть длина (модуль) и направление. Сложение: правило треугольника AB→ + BC→ = AC→ или параллелограмма. Вычитание: a→ − b→ = a→ + (−b→). Умножение на число: длина меняется в |k| раз, при k &lt; 0 направление меняется на противоположное.',
            'A <b>vector</b> is a directed segment with a length (magnitude) and a direction. Adding: the triangle rule AB→ + BC→ = AC→, or the parallelogram rule. Subtracting: a→ − b→ = a→ + (−b→). Scaling by k multiplies the length by |k| and reverses the direction if k &lt; 0.'),
          rule: 'AB→ + BC→ = AC→',
          acts: [
            { type: 'choose', icon: '➡️', make: function () { return pick([
              choice('AB→ + BC→ = ?', ['AC→', 'CA→', 'BA→'], 0),
              choice('AB→ + BA→ = ?', ['0→', '2AB→', 'AA→ + BB→'], 0),
              choice('AB→ − AC→ = ?', ['CB→', 'BC→', 'AB→'], 0)]); } },
            { type: 'drill', n: 6, make: function (R) { var a = R(2, 12), k = R(-5, 5) || 3; return { q: '|a→| = ' + a + ';  |' + ns(k) + 'a→|', a: Math.abs(k) * a }; } }
          ],
          quiz: [{ q: 'AB→ + BC→ + CD→ = ?', o: ['AD→', 'DA→', 'AC→'], a: 0 }, { q: L('|a→| = 4. |−3a→| = ?', '|a→| = 4. |−3a→| = ?', '|a→| = 4. |−3a→| = ?'), o: ['12', '−12', '7'], a: 0 }] },

        { id: 't19', lessons: ch(5), title: L('Vektorning koordinatalari va ular ustida amallar', 'Координаты вектора и действия с ними', 'Vector coordinates and operations'),
          keys: ['AB→ = (x₂ − x₁; y₂ − y₁)', '|a→| = √(x² + y²)'],
          scene: [{ obj: 'rod', n: 3, color: 'blue' }],
          explain: L('A(x₁; y₁), B(x₂; y₂) bo‘lsa, AB→ = (x₂ − x₁; y₂ − y₁). Uzunlik |a→| = √(x² + y²). Amallar koordinatalar bo‘yicha: (a₁; a₂) + (b₁; b₂) = (a₁ + b₁; a₂ + b₂), k(a₁; a₂) = (ka₁; ka₂).',
            'Если A(x₁; y₁), B(x₂; y₂), то AB→ = (x₂ − x₁; y₂ − y₁). Длина |a→| = √(x² + y²). Действия покоординатно: (a₁; a₂) + (b₁; b₂) = (a₁ + b₁; a₂ + b₂), k(a₁; a₂) = (ka₁; ka₂).',
            'If A(x₁; y₁) and B(x₂; y₂), then AB→ = (x₂ − x₁; y₂ − y₁). Length |a→| = √(x² + y²). Operations go coordinate by coordinate: (a₁; a₂) + (b₁; b₂) = (a₁ + b₁; a₂ + b₂), k(a₁; a₂) = (ka₁; ka₂).'),
          rule: '|a→| = √(x² + y²)',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var x1 = R(-6, 6), y1 = R(-6, 6), x2 = R(-6, 6), y2 = R(-6, 6), t = triple(R), a = R(-5, 5), b = R(-5, 5), k = R(0, 2); return [{ q: 'A(' + ns(x1) + '; ' + ns(y1) + '), B(' + ns(x2) + '; ' + ns(y2) + ');  AB→ x', a: x2 - x1 }, { q: '|(' + t[0] + '; ' + ns(-t[1]) + ')|', a: t[2] }, { q: '(' + ns(a) + '; 2) + (' + ns(b) + '; 5);  x', a: a + b }][k]; } },
            { type: 'coord', make: function (R) { return { x: R(1, 8), y: R(1, 8) }; } }
          ],
          quiz: [{ q: 'A(1; 2), B(4; 6). |AB→| = ?', o: ['5', '7', '25'], a: 0 }, { q: '2 · (3; −1) = ?', o: ['(6; −2)', '(5; 1)', '(6; 2)'], a: 0 }] },

        { id: 't20', lessons: ch(5), title: L('Vektorlarning skalyar ko‘paytmasi. Tatbiqlar', 'Скалярное произведение векторов. Применения', 'The dot product. Applications'),
          keys: ['a→ · b→ = x₁x₂ + y₁y₂', 'a→ ⊥ b→ ⇔ a→ · b→ = 0'],
          scene: [{ obj: 'drone', n: 1, color: 'green' }, { obj: 'box', n: 1, color: 'orange' }],
          explain: L('Skalyar ko‘paytma a→ · b→ = |a→| |b→| cos φ = x₁x₂ + y₁y₂. Agar u 0 ga teng bo‘lsa — vektorlar perpendikulyar. Fizikada: kuchning bajargan ishi A = F→ · s→. Vektorlar yordamida geometrik masalalarni (masalan, perpendikulyarlikni) koordinatalar orqali yechamiz.',
            'Скалярное произведение a→ · b→ = |a→| |b→| cos φ = x₁x₂ + y₁y₂. Если оно равно 0 — векторы перпендикулярны. В физике: работа силы A = F→ · s→. Векторы позволяют решать геометрические задачи (например, на перпендикулярность) через координаты.',
            'The dot product is a→ · b→ = |a→| |b→| cos φ = x₁x₂ + y₁y₂. If it is 0, the vectors are perpendicular. In physics, work is A = F→ · s→. Vectors let us solve geometry problems (such as checking perpendicularity) with coordinates.'),
          rule: 'a→ · b→ = x₁x₂ + y₁y₂',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var a = R(-6, 6), b = R(-6, 6), c = R(-6, 6), d = R(-6, 6); return { q: '(' + ns(a) + '; ' + ns(b) + ') · (' + ns(c) + '; ' + ns(d) + ')', a: a * c + b * d }; } },
            { type: 'choose', title: L('Perpendikulyarmi?', 'Перпендикулярны?', 'Perpendicular?'), icon: '⊥', make: function (R) { var a = R(1, 6), b = R(1, 6), ok = R(0, 1), c = ok ? -b : -b + 1, d = a; return choice('(' + a + '; ' + b + ') ' + '&amp; (' + ns(c) + '; ' + d + ')', [L('ha', 'да', 'yes'), L('yo‘q', 'нет', 'no')], a * c + b * d === 0 ? 0 : 1); } }
          ],
          quiz: [{ q: '(2; 3) · (4; −1) = ?', o: ['5', '11', '8'], a: 0 }, { q: L('a→ · b→ = 0 bo‘lsa...', 'Если a→ · b→ = 0, то...', 'If a→ · b→ = 0, then...'), o: [L('perpendikulyar', 'перпендикулярны', 'perpendicular'), L('parallel', 'параллельны', 'parallel'), L('teng', 'равны', 'equal')], a: 0 }] }
      ] }
    ]
  };
  function YES3() { return L('ha', 'да', 'yes'); }
  function NO3() { return L('yo‘q', 'нет', 'no'); }
  C.addPart(part2);
})(this);
