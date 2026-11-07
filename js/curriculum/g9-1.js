// Nuvemath — 9-sinf, Algebra (manba: Sh.A. Alimov va boshq. «Algebra. 9-sinf», Toshkent).
// Boblar va mavzular tartibi darslikdan olingan; tushuntirishlar, topshiriqlar va chizmalar Nuvemath uchun qayta yozilgan.
(function (root) {
  'use strict';
  var C = root.NMCurriculum, H = C.H, L = H.L, mk = H.mk, PCS = H.PCS, choice = H.choice, pick = H.pick;
  var fr = H.fr, r6 = H.r6, gcd = H.gcd;
  function ch(n) { return L(n + '-bob', 'Глава ' + n, 'Chapter ' + n); }
  function ns(x) { return x < 0 ? '−' + (-x) : String(x); }
  function sg(x) { return x < 0 ? ' − ' + (-x) : ' + ' + x; }
  function kx(k, v) { v = v || 'x'; return k === 1 ? v : k === -1 ? '−' + v : ns(k) + v; }
  function fig(inner, w, h) { return '<div class="kd-fig"><svg viewBox="0 0 ' + (w || 300) + ' ' + (h || 180) + '">' + inner + '</svg></div>'; }
  // y = a(x − p)(x − q) parabola sxemasi
  function parab(a, p, q) { var f = function (x) { return a * (x - p) * (x - q); }, v = Math.abs(f((p + q) / 2)), sy = Math.min(9, 90 / Math.max(v, 1)), s = '', X = function (x) { return 150 + x * 18; }, Y = function (y) { return 110 - y * sy; };
    s += '<line x1="10" y1="110" x2="290" y2="110" stroke="currentColor" stroke-width="1.5"/><line x1="150" y1="5" x2="150" y2="215" stroke="currentColor" stroke-width="1.5"/>';
    var d = '', pen = false; for (var x = -7.5; x <= 7.5; x += 0.1) { var y = f(x); if (Math.abs(y) * sy > 104) { pen = false; continue; } d += (pen ? ' L' : ' M') + X(x).toFixed(1) + ' ' + Y(y).toFixed(1); pen = true; }
    s += '<path d="' + d + '" fill="none" stroke="#ff6b8b" stroke-width="3"/>' + [p, q].map(function (r) { return '<circle cx="' + X(r) + '" cy="110" r="4" fill="#4f8dff"/><text x="' + X(r) + '" y="128" font-size="13" font-weight="700" fill="currentColor" text-anchor="middle">' + ns(r) + '</text>'; }).join('');
    return fig(s, 300, 220); }
  var TRIG = [[0, '0', '1', '0'], [30, '1/2', '√3/2', '√3/3'], [45, '√2/2', '√2/2', '1'], [60, '√3/2', '1/2', '√3'], [90, '1', '0', L('mavjud emas', 'не существует', 'undefined')]];
  var RAD = [[30, 'π/6'], [45, 'π/4'], [60, 'π/3'], [90, 'π/2'], [120, '2π/3'], [135, '3π/4'], [150, '5π/6'], [180, 'π'], [270, '3π/2'], [360, '2π']];

  var part1 = {
    grade: 9, part: 1, edition: L('Algebra', 'Алгебра', 'Algebra'),
    title: L('Algebra: kvadrat funksiya, trigonometriya, progressiyalar va ehtimollik', 'Алгебра: квадратичная функция, тригонометрия, прогрессии и вероятность', 'Algebra: quadratic functions, trigonometry, progressions and probability'),
    book: L('Sh.A. Alimov va boshq. Algebra, 9-sinf (Toshkent)', 'Ш.А. Алимов и др. Алгебра, 9 класс (Ташкент)', 'Sh.A. Alimov et al. Algebra, Grade 9 (Tashkent)'),
    intro: L('9-sinf algebrasi: kvadrat funksiya va uning grafigi, kvadrat tengsizliklar va intervallar usuli, ikkinchi darajali sistemalar, trigonometriya elementlari, arifmetik va geometrik progressiyalar, ehtimollar nazariyasi va statistika elementlari.',
      'Алгебра 9 класса: квадратичная функция и её график, квадратные неравенства и метод интервалов, системы второй степени, элементы тригонометрии, арифметическая и геометрическая прогрессии, элементы теории вероятностей и статистики.',
      'Grade 9 algebra: the quadratic function and its graph, quadratic inequalities and the interval method, second-degree systems, trigonometry, arithmetic and geometric progressions, and the basics of probability and statistics.'),
    sections: [
      { id: 's1', title: L('Kvadrat funksiya. Kvadrat tengsizliklar', 'Квадратичная функция. Квадратные неравенства', 'Quadratic functions and inequalities'), icon: '⌒', color: 'blue', topics: [
        { id: 't1', lessons: ch(1), title: L('Kvadrat funksiya. y = x² va y = ax² funksiyalar', 'Квадратичная функция. Функции y = x² и y = ax²', 'Quadratic functions. y = x² and y = ax²'),
          keys: [L('parabola', 'парабола', 'parabola'), L('parabola uchi', 'вершина параболы', 'vertex'), 'a &gt; 0 ⌣ · a &lt; 0 ⌢'],
          scene: [{ obj: 'ball', n: 3, color: 'blue' }],
          explain: L('y = ax² + bx + c (a ≠ 0) — <b>kvadrat funksiya</b>. Eng soddasi y = x²: grafigi — <b>parabola</b>, uchi (0; 0), Oy o‘qiga nisbatan simmetrik. y = ax² da a &gt; 0 bo‘lsa shoxlar yuqoriga, a &lt; 0 bo‘lsa pastga; |a| qancha katta bo‘lsa, parabola shuncha «tor».',
            'y = ax² + bx + c (a ≠ 0) — <b>квадратичная функция</b>. Простейшая y = x²: график — <b>парабола</b> с вершиной (0; 0), симметричная относительно Oy. У y = ax² при a &gt; 0 ветви вверх, при a &lt; 0 — вниз; чем больше |a|, тем «уже» парабола.',
            'y = ax² + bx + c (a ≠ 0) is a <b>quadratic function</b>. The simplest is y = x²: its graph is a <b>parabola</b> with vertex (0; 0), symmetric about the y-axis. For y = ax², branches point up if a &gt; 0 and down if a &lt; 0; the larger |a|, the narrower the parabola.'),
          rule: L('a &gt; 0 — shoxlar yuqoriga', 'a &gt; 0 — ветви вверх', 'a &gt; 0 — opens upward'),
          acts: [
            { type: 'drill', n: 8, make: function (R) { var a = pick([-3, -2, -1, 1, 2, 3, 4]), x = R(-5, 5); return { q: 'y = ' + kx(a, 'x²') + ',  x = ' + ns(x) + ';  y', a: a * x * x }; } },
            { type: 'choose', title: L('Shoxlar yo‘nalishi', 'Направление ветвей', 'Which way it opens'), icon: '⌒', make: function (R) { var a = pick([-5, -3, -2, -1, 1, 2, 3, 5]); return choice('<span class="kd-big">y = ' + kx(a, 'x²') + '</span>', [L('shoxlar yuqoriga', 'ветви вверх', 'opens upward'), L('shoxlar pastga', 'ветви вниз', 'opens downward')], a > 0 ? 0 : 1); } }
          ],
          quiz: [{ q: 'y = x², x = −3. y = ?', o: ['9', '−9', '6'], a: 0 }, { q: L('y = −2x² parabolasining uchi?', 'Вершина параболы y = −2x²?', 'Vertex of y = −2x²?'), o: ['(0; 0)', '(0; −2)', '(−2; 0)'], a: 0 }] },

        { id: 't2', lessons: ch(1), title: L('y = ax² + bx + c funksiya va uning grafigi', 'Функция y = ax² + bx + c и её график', 'The function y = ax² + bx + c'),
          keys: ['x₀ = −b / 2a', L('simmetriya o‘qi', 'ось симметрии', 'axis of symmetry'), L('Oy bilan kesishish: (0; c)', 'пересечение с Oy: (0; c)', 'y-intercept (0; c)')],
          scene: [{ obj: 'ball', n: 2, color: 'pink' }],
          explain: L('Parabola uchining abssissasi x₀ = −b/2a, ordinatasi y₀ = f(x₀). Simmetriya o‘qi — x = x₀ to‘g‘ri chizig‘i. Grafik yasash: 1) uchini toping; 2) shoxlar yo‘nalishi; 3) Oy bilan kesishish (0; c); 4) Ox bilan kesishish — ax² + bx + c = 0 ildizlari; 5) bir necha nuqta.',
            'Абсцисса вершины x₀ = −b/2a, ордината y₀ = f(x₀). Ось симметрии — прямая x = x₀. Построение: 1) вершина; 2) направление ветвей; 3) пересечение с Oy (0; c); 4) с Ox — корни ax² + bx + c = 0; 5) несколько точек.',
            'The vertex has x₀ = −b/2a and y₀ = f(x₀). The axis of symmetry is the line x = x₀. To sketch: 1) find the vertex; 2) the direction; 3) the y-intercept (0; c); 4) the x-intercepts — roots of ax² + bx + c = 0; 5) a few more points.'),
          rule: 'x₀ = −b/2a · y₀ = f(x₀)',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var a = pick([-2, -1, 1, 2, 3]), x0 = R(-4, 4), y0 = R(-9, 9), b = -2 * a * x0, c = a * x0 * x0 + y0, k = R(0, 2); return { q: 'y = ' + kx(a, 'x²') + (b ? sg(b) + 'x' : '') + sg(c) + ';  ' + ['x₀', 'y₀', 'y(0)'][k], a: [x0, y0, c][k] }; } },
            { type: 'choose', title: L('Grafikka mos formula', 'Формула графика', 'Equation of the graph'), icon: '📈', make: function (R) { var p = R(-5, -1), q = R(1, 5), a = pick([1, -1]); return choice(mk(function (l) { return { uz: 'Qaysi funksiya grafigi?', ru: 'Чей это график?', en: 'Which function is graphed?' }[l] + parab(a, p, q); }), ['y = ' + (a < 0 ? '−' : '') + '(x' + sg(-p) + ')(x' + sg(-q) + ')', 'y = ' + (a < 0 ? '' : '−') + '(x' + sg(-p) + ')(x' + sg(-q) + ')', 'y = ' + (a < 0 ? '−' : '') + '(x' + sg(p) + ')(x' + sg(q) + ')'], 0); } }
          ],
          quiz: [{ q: L('y = x² − 4x + 3: uchining abssissasi?', 'y = x² − 4x + 3: абсцисса вершины?', 'y = x² − 4x + 3: vertex x?'), o: ['2', '−2', '4'], a: 0 }, { q: L('y = 2x² + 5: Oy bilan kesishish?', 'y = 2x² + 5: пересечение с Oy?', 'y = 2x² + 5: y-intercept?'), o: ['(0; 5)', '(5; 0)', '(0; 2)'], a: 0 }] },

        { id: 't3', lessons: ch(1), title: L('Kvadrat tengsizlik va uning yechimi', 'Квадратное неравенство и его решение', 'Quadratic inequalities'),
          keys: ['ax² + bx + c &gt; 0', L('parabola Ox dan yuqorida/pastda', 'парабола выше/ниже Ox', 'parabola above/below the axis')],
          scene: [{ obj: 'rod', n: 3, color: 'violet' }],
          explain: L('ax² + bx + c &gt; 0 ni yechish uchun y = ax² + bx + c parabolasini tasavvur qilamiz: ildizlarni topamiz va parabola Ox dan qayerda yuqorida ekanini ko‘ramiz. a &gt; 0 va x₁ &lt; x₂ bo‘lsa: (x − x₁)(x − x₂) &lt; 0 ⇔ x₁ &lt; x &lt; x₂; &gt; 0 ⇔ x &lt; x₁ yoki x &gt; x₂.',
            'Чтобы решить ax² + bx + c &gt; 0, представим параболу y = ax² + bx + c: находим корни и смотрим, где парабола выше Ox. При a &gt; 0 и x₁ &lt; x₂: (x − x₁)(x − x₂) &lt; 0 ⇔ x₁ &lt; x &lt; x₂; &gt; 0 ⇔ x &lt; x₁ или x &gt; x₂.',
            'To solve ax² + bx + c &gt; 0, picture the parabola: find the roots and see where it lies above the x-axis. With a &gt; 0 and x₁ &lt; x₂: (x − x₁)(x − x₂) &lt; 0 ⇔ x₁ &lt; x &lt; x₂, and &gt; 0 ⇔ x &lt; x₁ or x &gt; x₂.'),
          rule: '(x − x₁)(x − x₂) &lt; 0 ⇔ x₁ &lt; x &lt; x₂',
          acts: [
            { type: 'choose', icon: '⌣', make: function (R) { var p = R(-6, 2), q = R(p + 1, 7), lt = R(0, 1); return choice('<span class="kd-big">x²' + sg(-(p + q)) + 'x' + sg(p * q) + (lt ? ' &lt; 0' : ' &gt; 0') + '</span>', lt ? ['(' + ns(p) + '; ' + ns(q) + ')', '(−∞; ' + ns(p) + ') ∪ (' + ns(q) + '; +∞)', '[' + ns(p) + '; ' + ns(q) + ']'] : ['(−∞; ' + ns(p) + ') ∪ (' + ns(q) + '; +∞)', '(' + ns(p) + '; ' + ns(q) + ')', '[' + ns(p) + '; ' + ns(q) + ']'], 0); } },
            { type: 'drill', title: L('Butun yechimlar soni', 'Число целых решений', 'Number of whole solutions'), n: 6, make: function (R) { var p = R(-6, 2), q = R(p + 2, 8); return { q: 'x²' + sg(-(p + q)) + 'x' + sg(p * q) + ' &lt; 0', a: q - p - 1 }; } }
          ],
          quiz: [{ q: 'x² − 5x + 6 &lt; 0', o: ['(2; 3)', '(−∞; 2) ∪ (3; +∞)', '[2; 3]'], a: 0 }, { q: 'x² + 1 &gt; 0', o: [L('barcha x', 'все x', 'all x'), L('yechim yo‘q', 'нет решений', 'no solution'), 'x &gt; −1'], a: 0 }] },

        { id: 't4', lessons: ch(1), title: L('Intervallar usuli', 'Метод интервалов', 'The interval method'),
          keys: [L('nollar', 'нули', 'zeros'), L('ishoralar almashinadi', 'знаки чередуются', 'signs alternate')],
          scene: [{ obj: 'rod', n: 4, color: 'orange' }],
          explain: L('(x − a)(x − b)(x − c) &gt; 0 kabi tengsizlikda nollarni son o‘qiga belgilaymiz — u oraliqlarga bo‘linadi. Eng o‘ng oraliqda ishora «+», keyin har bir oddiy noldan o‘tganda ishora almashadi. Kerakli ishorali oraliqlarni tanlaymiz. Kasr tengsizlikda maxraj nollari doim chiqariladi.',
            'В неравенстве вида (x − a)(x − b)(x − c) &gt; 0 отмечаем нули на числовой оси — она делится на интервалы. В крайнем правом знак «+», при переходе через каждый простой нуль знак меняется. Выбираем интервалы с нужным знаком. Нули знаменателя всегда исключаются.',
            'For (x − a)(x − b)(x − c) &gt; 0, mark the zeros on the number line, splitting it into intervals. The rightmost interval is “+”, and the sign flips at each simple zero. Pick the intervals with the sign you need. Zeros of a denominator are always excluded.'),
          rule: L('o‘ngdan: +, −, +, …', 'справа: +, −, +, …', 'from the right: +, −, +, …'),
          acts: [
            { type: 'choose', icon: '±', make: function (R) { var z = H.distinct(R, 3, -6, 6).sort(function (a, b) { return a - b; }), x = pick([z[0] - 1, (z[0] + z[1]) / 2, (z[1] + z[2]) / 2, z[2] + 1]); var v = (x - z[0]) * (x - z[1]) * (x - z[2]); return choice(mk(function (l) { return '(x' + sg(-z[0]) + ')(x' + sg(-z[1]) + ')(x' + sg(-z[2]) + ') — x = ' + H.dec(x, l) + { uz: ' da ishora?', ru: ': знак?', en: ': sign?' }[l]; }), ['+', '−'], v > 0 ? 0 : 1); } },
            { type: 'drill', title: L('Butun yechimlar', 'Целые решения', 'Whole solutions'), n: 5, make: function (R) { var a = R(-5, 0), b = R(a + 2, 7); return { q: fr('x' + sg(-a), 'x' + sg(-b)) + ' &lt; 0', a: b - a - 1 }; } }
          ],
          quiz: [{ q: '(x + 1)(x − 2)(x − 5) &gt; 0, x = 3', o: [L('bajarilmaydi', 'не выполнено', 'false'), L('bajariladi', 'выполнено', 'true')], a: 0 }, { q: L('Maxraj nollari javobga...', 'Нули знаменателя в ответ...', 'Zeros of the denominator are...'), o: [L('kirmaydi', 'не входят', 'excluded'), L('kiradi', 'входят', 'included'), L('ba’zan kiradi', 'иногда входят', 'sometimes included')], a: 0 }] },

        { id: 't5', lessons: ch(1), title: L('Funksiyaning aniqlanish sohasi, o‘sishi, juftligi', 'Область определения, монотонность, чётность функции', 'Domain, monotonicity and parity'),
          keys: ['D(f)', L('o‘suvchi / kamayuvchi', 'возрастающая / убывающая', 'increasing / decreasing'), 'f(−x) = ±f(x)'],
          scene: [{ obj: 'rod', n: 3, color: 'green' }],
          explain: L('<b>Aniqlanish sohasi</b> — formula ma’noga ega bo‘lgan barcha x: √(x − 3) uchun x ≥ 3, 1/(x + 2) uchun x ≠ −2. x oshganda f(x) oshsa — <b>o‘suvchi</b>. f(−x) = f(x) bo‘lsa <b>juft</b> (grafik Oy ga simmetrik, masalan x²), f(−x) = −f(x) bo‘lsa <b>toq</b> (koordinata boshiga simmetrik, masalan x³).',
            '<b>Область определения</b> — все x, при которых формула имеет смысл: для √(x − 3) x ≥ 3, для 1/(x + 2) x ≠ −2. Если при росте x растёт f(x) — функция <b>возрастающая</b>. f(−x) = f(x) — <b>чётная</b> (график симметричен Oy, например x²), f(−x) = −f(x) — <b>нечётная</b> (симметричен началу координат, например x³).',
            'The <b>domain</b> is every x where the formula makes sense: x ≥ 3 for √(x − 3), x ≠ −2 for 1/(x + 2). If f(x) grows as x grows, f is <b>increasing</b>. If f(−x) = f(x) it is <b>even</b> (symmetric about the y-axis, like x²); if f(−x) = −f(x) it is <b>odd</b> (symmetric about the origin, like x³).'),
          rule: L('juft: f(−x) = f(x) · toq: f(−x) = −f(x)', 'чётная: f(−x) = f(x) · нечётная: f(−x) = −f(x)', 'even: f(−x) = f(x) · odd: f(−x) = −f(x)'),
          acts: [
            { type: 'choose', title: L('Juft yoki toq?', 'Чётная или нечётная?', 'Even or odd?'), icon: '🪞', make: function () { var T = pick([['x⁴ + 2x²', 0], ['|x|', 0], ['x³ − x', 1], ['5x', 1], ['x² + x', 2], ['x + 1', 2]]); return choice('<span class="kd-big">f(x) = ' + T[0] + '</span>', [L('juft', 'чётная', 'even'), L('toq', 'нечётная', 'odd'), L('na juft, na toq', 'ни чётная, ни нечётная', 'neither')], T[1]); } },
            { type: 'drill', title: L('Aniqlanish sohasi chegarasi', 'Граница области определения', 'Domain boundary'), n: 6, make: function (R) { var a = R(-9, 9); return R(0, 1) ? { q: '√(x' + sg(-a) + ');  x ≥', a: a } : { q: fr(1, 'x' + sg(-a)) + ';  x ≠', a: a }; } }
          ],
          quiz: [{ q: L('f(x) = x² qanday funksiya?', 'Какая функция f(x) = x²?', 'f(x) = x² is'), o: [L('juft', 'чётная', 'even'), L('toq', 'нечётная', 'odd'), L('na juft, na toq', 'ни та ни другая', 'neither')], a: 0 }, { q: L('√(x − 3) aniqlanish sohasi?', 'Область определения √(x − 3)?', 'Domain of √(x − 3)?'), o: ['x ≥ 3', 'x &gt; 3', 'x ≤ 3'], a: 0 }] },

        { id: 't6', lessons: ch(1), title: L('Daraja qatnashgan tenglama va tengsizliklar', 'Уравнения и неравенства со степенями', 'Equations and inequalities with powers'),
          keys: ['xⁿ = a', L('juft n: ±', 'чётное n: ±', 'even n: ±'), L('toq n: bitta ildiz', 'нечётное n: один корень', 'odd n: one root')],
          scene: [{ obj: 'cube', n: 4, color: 'cyan' }],
          explain: L('xⁿ = a: n toq bo‘lsa, yagona ildiz x = ⁿ√a (a manfiy ham bo‘lishi mumkin: x³ = −8 → x = −2). n juft bo‘lsa: a &gt; 0 — ikki ildiz ±ⁿ√a, a = 0 — bitta, a &lt; 0 — ildiz yo‘q. x⁴ &lt; 16 ⇔ −2 &lt; x &lt; 2.',
            'xⁿ = a: при нечётном n единственный корень x = ⁿ√a (a может быть отрицательным: x³ = −8 → x = −2). При чётном n: a &gt; 0 — два корня ±ⁿ√a, a = 0 — один, a &lt; 0 — корней нет. x⁴ &lt; 16 ⇔ −2 &lt; x &lt; 2.',
            'xⁿ = a: for odd n there is one root x = ⁿ√a (a may be negative: x³ = −8 → x = −2). For even n: a &gt; 0 gives two roots ±ⁿ√a, a = 0 gives one, a &lt; 0 gives none. x⁴ &lt; 16 ⇔ −2 &lt; x &lt; 2.'),
          rule: L('juft n, a &gt; 0: x = ±ⁿ√a', 'чётное n, a &gt; 0: x = ±ⁿ√a', 'even n, a &gt; 0: x = ±ⁿ√a'),
          acts: [
            { type: 'drill', n: 8, make: function (R) { var b = R(2, 5), n = pick([3, 5]), s = R(0, 1) ? -1 : 1; return R(0, 1) ? { q: 'x<sup>' + n + '</sup> = ' + ns(s * Math.pow(b, n)) + ';  x', a: s * b } : { q: 'x<sup>4</sup> = ' + Math.pow(b, 4) + ';  x &gt; 0', a: b }; } },
            { type: 'choose', title: L('Nechta ildiz?', 'Сколько корней?', 'How many roots?'), icon: '🔢', make: function (R) { var k = R(0, 2), b = R(2, 9); return [choice('<span class="kd-big">x⁴ = ' + Math.pow(b, 4) + '</span>', ['2', '1', '0'], 0), choice('<span class="kd-big">x³ = −' + b * b * b + '</span>', ['1', '2', '0'], 0), choice('<span class="kd-big">x⁶ = −' + b + '</span>', ['0', '1', '2'], 0)][k]; } }
          ],
          quiz: [{ q: 'x³ = −8', o: ['−2', '2', '±2'], a: 0 }, { q: 'x⁴ &lt; 16', o: ['(−2; 2)', '(−∞; 2)', '(2; +∞)'], a: 0 }] }
      ] },

      { id: 's2', title: L('Tenglamalar va tengsizliklar sistemalari', 'Системы уравнений и неравенств', 'Systems of equations and inequalities'), icon: '🔗', color: 'violet', topics: [
        { id: 't7', lessons: ch(2), title: L('Ikkinchi darajali tenglamalar sistemasi', 'Системы уравнений второй степени', 'Second-degree systems'),
          keys: [L('o‘rniga qo‘yish', 'подстановка', 'substitution'), L('grafik usul', 'графический способ', 'graphical method')],
          scene: [{ obj: 'ball', n: 2, color: 'violet' }],
          explain: L('{ x + y = 5; xy = 6 }: birinchidan y = 5 − x, ikkinchisiga qo‘yamiz: x(5 − x) = 6 → x² − 5x + 6 = 0 → x = 2 yoki 3. Yechimlar (2; 3) va (3; 2). Grafik ma’nosi — to‘g‘ri chiziq va giperbola kesishish nuqtalari. Yig‘indi va ko‘paytma berilsa, Viyet teoremasi ham yordam beradi.',
            '{ x + y = 5; xy = 6 }: из первого y = 5 − x, подставляем: x(5 − x) = 6 → x² − 5x + 6 = 0 → x = 2 или 3. Решения (2; 3) и (3; 2). Геометрически — точки пересечения прямой и гиперболы. Если даны сумма и произведение, помогает теорема Виета.',
            '{ x + y = 5; xy = 6 }: from the first, y = 5 − x; substitute: x(5 − x) = 6 → x² − 5x + 6 = 0 → x = 2 or 3. Solutions (2; 3) and (3; 2). Graphically: where a line meets a hyperbola. Given a sum and a product, Vieta’s theorem helps too.'),
          rule: '{ x + y = s; xy = p } → t² − st + p = 0',
          acts: [
            { type: 'drill', title: L('Katta qiymat', 'Большее значение', 'Larger value'), n: 6, make: function (R) { var x = R(-5, 9), y = R(-5, 9); if (x === y) y++; return { q: '{ x + y = ' + ns(x + y) + ';  xy = ' + ns(x * y) + ' };  max(x, y)', a: Math.max(x, y) }; } },
            { type: 'choose', icon: '⭕', make: function (R) { var t = pick([[3, 4, 5], [6, 8, 10], [5, 12, 13]]); return choice('<span class="kd-big">{ x² + y² = ' + t[2] * t[2] + ';  x = ' + t[0] + ' }</span>', ['y = ±' + t[1], 'y = ' + t[1], 'y = ±' + t[2]], 0); } }
          ],
          quiz: [{ q: '{ x + y = 5; xy = 6 }', o: ['(2; 3), (3; 2)', '(1; 6)', '(2; 3)'], a: 0 }, { q: L('{ y = x²; y = 4 } nechta yechim?', 'Сколько решений { y = x²; y = 4 }?', 'How many solutions: { y = x²; y = 4 }?'), o: ['2', '1', '0'], a: 0 }] },

        { id: 't8', lessons: ch(2), title: L('Ikkinchi darajali tengsizliklar sistemalari. Tengsizliklarni isbotlash', 'Системы неравенств второй степени. Доказательство неравенств', 'Systems of quadratic inequalities. Proving inequalities'),
          keys: [L('kesishma', 'пересечение', 'intersection'), '(a + b)/2 ≥ √(ab)', 'a² + b² ≥ 2ab'],
          scene: [{ obj: 'weight', n: 2, color: 'pink' }],
          explain: L('Sistema yechimi — har bir tengsizlik yechimlarining kesishmasi. Isbotlash usuli: ayirmani tuzib, uning ishorasini aniqlaymiz. a² + b² − 2ab = (a − b)² ≥ 0, demak a² + b² ≥ 2ab. Bundan a, b ≥ 0 uchun o‘rta arifmetik ≥ o‘rta geometrik: (a + b)/2 ≥ √(ab) (Koshi tengsizligi).',
            'Решение системы — пересечение решений неравенств. Доказательство: составляем разность и определяем её знак. a² + b² − 2ab = (a − b)² ≥ 0, значит a² + b² ≥ 2ab. Отсюда при a, b ≥ 0 среднее арифметическое ≥ среднего геометрического: (a + b)/2 ≥ √(ab) (неравенство Коши).',
            'A system’s solution is the intersection of the solutions. To prove an inequality, look at the sign of the difference: a² + b² − 2ab = (a − b)² ≥ 0, so a² + b² ≥ 2ab. Hence for a, b ≥ 0 the arithmetic mean is at least the geometric mean: (a + b)/2 ≥ √(ab) (the AM–GM inequality).'),
          rule: '(a + b)/2 ≥ √(ab)',
          acts: [
            { type: 'choose', icon: '📏', make: function (R) { var b = R(2, 5), c = R(1 - b, b - 1); return choice('<span class="kd-big">{ x² &lt; ' + b * b + ';  x &gt; ' + ns(c) + ' }</span>', ['(' + ns(c) + '; ' + b + ')', '(−' + b + '; ' + b + ')', '(' + ns(c) + '; +∞)'], 0); } },
            { type: 'drill', title: L('O‘rta geometrik', 'Среднее геометрическое', 'Geometric mean'), n: 6, make: function (R) { var p = pick([[1, 4], [1, 9], [4, 9], [2, 8], [3, 12], [4, 16], [9, 16], [1, 16], [5, 20]]); return R(0, 1) ? { q: '√(' + p[0] + ' · ' + p[1] + ')', a: Math.sqrt(p[0] * p[1]) } : { q: '(' + p[0] + ' + ' + p[1] + ')/2', a: (p[0] + p[1]) / 2 }; } }
          ],
          quiz: [{ q: 'a² + b² ◻ 2ab', o: ['≥', '&lt;', '='], a: 0 }, { q: L('4 va 9 ning o‘rta geometrigi?', 'Среднее геометрическое 4 и 9?', 'Geometric mean of 4 and 9?'), o: ['6', L('6,5', '6,5', '6.5'), '36'], a: 0 }] }
      ] },

      { id: 's3', title: L('Trigonometriya elementlari', 'Элементы тригонометрии', 'Trigonometry'), icon: '📐', color: 'orange', topics: [
        { id: 't9', lessons: ch(3), title: L('Burchakning radian o‘lchovi. Nuqtani burish', 'Радианная мера угла. Поворот точки', 'Radians. Rotating a point'),
          keys: ['π rad = 180°', '1 rad ≈ 57°', L('birlik aylana', 'единичная окружность', 'unit circle')],
          scene: [{ obj: 'cylinder', n: 1, color: 'orange' }],
          explain: L('Uzunligi radiusga teng yoyga tiralgan markaziy burchak — <b>1 radian</b> (≈ 57°18′). Butun aylana 2π radian, demak π rad = 180°. Gradusdan radianga: α · π/180. Birlik aylanada (1; 0) nuqtani α burchakka burish — trigonometrik funksiyalarning asosi.',
            'Центральный угол, опирающийся на дугу длиной в радиус, — <b>1 радиан</b> (≈ 57°18′). Вся окружность — 2π радиан, значит π рад = 180°. Градусы в радианы: α · π/180. Поворот точки (1; 0) единичной окружности на угол α — основа тригонометрических функций.',
            'The central angle on an arc as long as the radius is <b>1 radian</b> (≈ 57°18′). A full turn is 2π radians, so π rad = 180°. Degrees to radians: α · π/180. Rotating the point (1; 0) on the unit circle by α is the basis of the trig functions.'),
          rule: 'α° = α · π/180 rad',
          acts: [
            { type: 'choose', title: L('Radianga o‘tkazing', 'В радианы', 'To radians'), icon: '🔄', make: function (R) { var i = R(0, RAD.length - 1), w = RAD.filter(function (x, j) { return j !== i; }).sort(function () { return R(0, 1) - 0.5; }); return choice('<span class="kd-big">' + RAD[i][0] + '° = ?</span>', [RAD[i][1], w[0][1], w[1][1]], 0); } },
            { type: 'drill', title: L('Gradusga o‘tkazing', 'В градусы', 'To degrees'), n: 6, make: function (R) { var i = R(0, RAD.length - 1); return { q: RAD[i][1] + ' = ?°', a: RAD[i][0] }; } }
          ],
          quiz: [{ q: 'π/3 = ?°', o: ['60', '30', '120'], a: 0 }, { q: '270° = ?', o: ['3π/2', '3π/4', '2π/3'], a: 0 }] },

        { id: 't10', lessons: ch(3), title: L('Sinus, kosinus, tangens va kotangens. Ishoralari', 'Синус, косинус, тангенс, котангенс. Знаки', 'Sine, cosine, tangent, cotangent. Signs'),
          keys: ['sin α = y', 'cos α = x', 'tg α = sin α / cos α'],
          scene: [{ obj: 'ball', n: 1, color: 'yellow' }],
          explain: L('(1; 0) nuqtani α ga burib, (x; y) nuqtani olsak: cos α = x, sin α = y, tg α = y/x, ctg α = x/y. Choraklar bo‘yicha ishoralar: I — hammasi musbat; II — faqat sin musbat; III — tg va ctg musbat; IV — faqat cos musbat. Muhim qiymatlar: sin 30° = 1/2, cos 60° = 1/2, tg 45° = 1.',
            'Повернув (1; 0) на α, получаем (x; y): cos α = x, sin α = y, tg α = y/x, ctg α = x/y. Знаки по четвертям: I — все положительны; II — положителен только sin; III — tg и ctg; IV — только cos. Важные значения: sin 30° = 1/2, cos 60° = 1/2, tg 45° = 1.',
            'Rotate (1; 0) by α to get (x; y): cos α = x, sin α = y, tan α = y/x, cot α = x/y. Signs by quadrant: I — all positive; II — only sin; III — tan and cot; IV — only cos. Key values: sin 30° = 1/2, cos 60° = 1/2, tan 45° = 1.'),
          rule: 'sin = y · cos = x',
          acts: [
            { type: 'choose', title: L('Qiymatni toping', 'Найдите значение', 'Find the value'), icon: '📐', make: function (R) { var i = R(1, 3), f = R(1, 3), v = TRIG[i][f], fn = ['', 'sin', 'cos', 'tg'][f]; var opts = [v].concat(['1/2', '√3/2', '√2/2', '√3', '√3/3', '1'].filter(function (x) { return x !== v; }).sort(function () { return R(0, 1) - 0.5; }).slice(0, 2)); return choice('<span class="kd-big">' + fn + ' ' + TRIG[i][0] + '° = ?</span>', opts, 0); } },
            { type: 'choose', title: L('Ishorani aniqlang', 'Определите знак', 'Find the sign'), icon: '±', make: function (R) { var a = pick([20, 70, 110, 160, 200, 250, 290, 340]), fn = pick(['sin', 'cos', 'tg']), q = Math.floor(a / 90), s = fn === 'sin' ? (q < 2) : fn === 'cos' ? (q === 0 || q === 3) : (q === 0 || q === 2); return choice('<span class="kd-big">' + fn + ' ' + a + '°</span>', [L('musbat', 'положительный', 'positive'), L('manfiy', 'отрицательный', 'negative')], s ? 0 : 1); } }
          ],
          quiz: [{ q: 'sin 30° = ?', o: ['1/2', '√3/2', '1'], a: 0 }, { q: L('II chorakda qaysi biri musbat?', 'Что положительно во II четверти?', 'What is positive in quadrant II?'), o: ['sin', 'cos', 'tg'], a: 0 }] },

        { id: 't11', lessons: ch(3), title: L('Trigonometrik ayniyatlar', 'Тригонометрические тождества', 'Trigonometric identities'),
          keys: ['sin²α + cos²α = 1', 'tg α · ctg α = 1', '1 + tg²α = 1/cos²α'],
          scene: [{ obj: 'ball', n: 2, color: 'green' }],
          explain: L('Birlik aylanada x² + y² = 1, shuning uchun <b>asosiy ayniyat</b>: sin²α + cos²α = 1. Undan: agar sin α = 3/5 va α — o‘tkir bo‘lsa, cos α = √(1 − 9/25) = 4/5, tg α = 3/4. Boshqa ayniyatlar: tg α · ctg α = 1, 1 + tg²α = 1/cos²α.',
            'На единичной окружности x² + y² = 1, поэтому <b>основное тождество</b>: sin²α + cos²α = 1. Если sin α = 3/5 и α острый, то cos α = √(1 − 9/25) = 4/5, tg α = 3/4. Другие тождества: tg α · ctg α = 1, 1 + tg²α = 1/cos²α.',
            'On the unit circle x² + y² = 1, so the <b>main identity</b> is sin²α + cos²α = 1. If sin α = 3/5 and α is acute, then cos α = √(1 − 9/25) = 4/5 and tan α = 3/4. Other identities: tan α · cot α = 1 and 1 + tan²α = 1/cos²α.'),
          rule: 'sin²α + cos²α = 1',
          acts: [
            { type: 'choose', icon: '🧮', make: function (R) { var t = pick([[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25]]), k = R(0, 1); return k ? choice('sin α = ' + t[0] + '/' + t[2] + ', 0° &lt; α &lt; 90°. cos α = ?', [t[1] + '/' + t[2], t[0] + '/' + t[1], t[2] + '/' + t[1]], 0) : choice('sin α = ' + t[0] + '/' + t[2] + ', 0° &lt; α &lt; 90°. tg α = ?', [t[0] + '/' + t[1], t[1] + '/' + t[0], t[0] + '/' + t[2]], 0); } },
            { type: 'drill', n: 5, make: function (R) { var a = R(10, 80); return R(0, 1) ? { q: 'sin²' + a + '° + cos²' + a + '°', a: 1 } : { q: 'tg ' + a + '° · ctg ' + a + '°', a: 1 }; } }
          ],
          quiz: [{ q: 'sin α = 3/5 (α o‘tkir). cos α = ?', o: ['4/5', '3/4', '5/4'], a: 0 }, { q: '1 − sin²α = ?', o: ['cos²α', 'tg²α', '1'], a: 0 }] },

        { id: 't12', lessons: ch(3), title: L('−α burchak. Qo‘shish formulalari', 'Угол −α. Формулы сложения', 'Negative angles. Addition formulas'),
          keys: ['sin(−α) = −sin α', 'cos(−α) = cos α', 'sin(α ± β)', 'cos(α ± β)'],
          scene: [{ obj: 'cylinder', n: 2, color: 'pink' }],
          explain: L('−α ga burish — α ga teskari yo‘nalishda: sin(−α) = −sin α (toq), cos(−α) = cos α (juft). Qo‘shish formulalari: sin(α ± β) = sin α cos β ± cos α sin β; cos(α ± β) = cos α cos β ∓ sin α sin β. Masalan, cos 15° = cos(45° − 30°) = (√6 + √2)/4.',
            'Поворот на −α — в обратную сторону: sin(−α) = −sin α (нечётная), cos(−α) = cos α (чётная). Формулы сложения: sin(α ± β) = sin α cos β ± cos α sin β; cos(α ± β) = cos α cos β ∓ sin α sin β. Например, cos 15° = cos(45° − 30°) = (√6 + √2)/4.',
            'Rotating by −α goes the other way: sin(−α) = −sin α (odd), cos(−α) = cos α (even). Addition formulas: sin(α ± β) = sin α cos β ± cos α sin β; cos(α ± β) = cos α cos β ∓ sin α sin β. E.g. cos 15° = cos(45° − 30°) = (√6 + √2)/4.'),
          rule: 'sin(α + β) = sin α cos β + cos α sin β',
          acts: [
            { type: 'choose', icon: '➕', make: function () { return pick([
              choice('sin(α + β) = ?', ['sin α cos β + cos α sin β', 'sin α sin β + cos α cos β', 'sin α + sin β'], 0),
              choice('cos(α + β) = ?', ['cos α cos β − sin α sin β', 'cos α cos β + sin α sin β', 'cos α + cos β'], 0),
              choice('cos(−α) = ?', ['cos α', '−cos α', 'sin α'], 0),
              choice('sin(−α) = ?', ['−sin α', 'sin α', 'cos α'], 0)]); } },
            { type: 'drill', title: L('Hisoblang', 'Вычислите', 'Evaluate'), n: 5, make: function (R) { var a = R(1, 8) * 10; return pick([{ q: 'sin ' + a + '° cos ' + (90 - a) + '° + cos ' + a + '° sin ' + (90 - a) + '°', a: 1 }, { q: 'cos ' + (a + 10) + '° cos ' + (80 - a) + '° − sin ' + (a + 10) + '° sin ' + (80 - a) + '°', a: 0 }, { q: 'sin 20° cos 10° + cos 20° sin 10°', a: 0.5 }]); } }
          ],
          quiz: [{ q: 'sin(−30°) = ?', o: ['−1/2', '1/2', '√3/2'], a: 0 }, { q: 'cos(60° + 30°) = ?', o: ['0', '1', '1/2'], a: 0 }] },

        { id: 't13', lessons: ch(3), title: L('Ikkilangan burchak va keltirish formulalari', 'Формулы двойного угла и приведения', 'Double-angle and reduction formulas'),
          keys: ['sin 2α = 2 sin α cos α', 'cos 2α = cos²α − sin²α', 'sin(90° − α) = cos α'],
          scene: [{ obj: 'cylinder', n: 1, color: 'violet' }],
          explain: L('Qo‘shish formulasida β = α desak: sin 2α = 2 sin α cos α, cos 2α = cos²α − sin²α = 1 − 2sin²α. <b>Keltirish formulalari</b> istalgan burchakni o‘tkir burchakka keltiradi: sin(180° − α) = sin α, cos(180° − α) = −cos α, sin(90° − α) = cos α. Masalan, cos 120° = −cos 60° = −1/2.',
            'Положив β = α в формулах сложения: sin 2α = 2 sin α cos α, cos 2α = cos²α − sin²α = 1 − 2sin²α. <b>Формулы приведения</b> сводят любой угол к острому: sin(180° − α) = sin α, cos(180° − α) = −cos α, sin(90° − α) = cos α. Например, cos 120° = −cos 60° = −1/2.',
            'Setting β = α in the addition formulas: sin 2α = 2 sin α cos α, cos 2α = cos²α − sin²α = 1 − 2sin²α. <b>Reduction formulas</b> turn any angle into an acute one: sin(180° − α) = sin α, cos(180° − α) = −cos α, sin(90° − α) = cos α. E.g. cos 120° = −cos 60° = −1/2.'),
          rule: 'sin 2α = 2 sin α cos α',
          acts: [
            { type: 'choose', icon: '🔁', make: function (R) { var T = pick([['cos 120°', '−1/2', '1/2', '−√3/2'], ['sin 150°', '1/2', '−1/2', '√3/2'], ['cos 135°', '−√2/2', '√2/2', '−1/2'], ['sin 120°', '√3/2', '−√3/2', '1/2'], ['cos 180°', '−1', '1', '0'], ['tg 135°', '−1', '1', '√3']]); return choice('<span class="kd-big">' + T[0] + ' = ?</span>', [T[1], T[2], T[3]], 0); } },
            { type: 'drill', n: 5, make: function (R) { return pick([{ q: '2 sin 15° cos 15°', a: 0.5 }, { q: '2 sin 45° cos 45°', a: 1 }, { q: '1 − 2sin²30°', a: 0.5 }, { q: 'cos²45° − sin²45°', a: 0 }, { q: '2 sin 75° cos 75°', a: 0.5 }]); } }
          ],
          quiz: [{ q: 'sin 2α = ?', o: ['2 sin α cos α', 'sin²α − cos²α', '2 sin α'], a: 0 }, { q: 'cos 120° = ?', o: ['−1/2', '1/2', '−√3/2'], a: 0 }] },

        { id: 't14', lessons: ch(3), title: L('Sinuslar va kosinuslar yig‘indisi va ayirmasi', 'Сумма и разность синусов и косинусов', 'Sums and differences of sines and cosines'),
          keys: ['sin α + sin β = 2 sin((α+β)/2) cos((α−β)/2)', 'cos α + cos β = 2 cos((α+β)/2) cos((α−β)/2)'],
          scene: [{ obj: 'cylinder', n: 2, color: 'blue' }],
          explain: L('Yig‘indini ko‘paytmaga aylantirish: sin α + sin β = 2 sin((α + β)/2) cos((α − β)/2), cos α + cos β = 2 cos((α + β)/2) cos((α − β)/2), cos α − cos β = −2 sin((α + β)/2) sin((α − β)/2). Masalan, sin 75° + sin 15° = 2 sin 45° cos 30° = √6/2.',
            'Преобразование суммы в произведение: sin α + sin β = 2 sin((α + β)/2) cos((α − β)/2), cos α + cos β = 2 cos((α + β)/2) cos((α − β)/2), cos α − cos β = −2 sin((α + β)/2) sin((α − β)/2). Например, sin 75° + sin 15° = 2 sin 45° cos 30° = √6/2.',
            'Turning sums into products: sin α + sin β = 2 sin((α + β)/2) cos((α − β)/2), cos α + cos β = 2 cos((α + β)/2) cos((α − β)/2), cos α − cos β = −2 sin((α + β)/2) sin((α − β)/2). E.g. sin 75° + sin 15° = 2 sin 45° cos 30° = √6/2.'),
          rule: 'sin α + sin β = 2 sin((α+β)/2) cos((α−β)/2)',
          acts: [
            { type: 'choose', icon: '🔀', make: function () { return pick([
              choice('sin α + sin β = ?', ['2 sin((α+β)/2) cos((α−β)/2)', '2 cos((α+β)/2) cos((α−β)/2)', 'sin(α + β)'], 0),
              choice('cos α + cos β = ?', ['2 cos((α+β)/2) cos((α−β)/2)', '2 sin((α+β)/2) sin((α−β)/2)', 'cos(α + β)'], 0)]); } },
            { type: 'drill', n: 5, make: function (R) { var a = R(1, 8) * 10; return R(0, 1) ? { q: 'sin ' + (60 + a) + '° − sin ' + (120 - a) + '° + 1', a: 1 } : { q: 'cos ' + a + '° − cos ' + (360 - a) + '°', a: 0 }; } }
          ],
          quiz: [{ q: 'cos 30° + cos 90° = 2 cos ?° cos ?°', o: ['60°, 30°', '30°, 60°', '120°, 60°'], a: 0 }, { q: 'sin 40° − sin 140° = ?', o: ['0', '1', '2 sin 40°'], a: 0 }] }
      ] },

      { id: 's4', title: L('Sonli ketma-ketliklar. Progressiyalar', 'Последовательности. Прогрессии', 'Sequences and progressions'), icon: '📶', color: 'green', topics: [
        { id: 't15', lessons: ch(4), title: L('Sonli ketma-ketliklar', 'Числовые последовательности', 'Number sequences'),
          keys: ['aₙ', L('n-hadi formulasi', 'формула n-го члена', 'n-th term formula'), L('rekurrent', 'рекуррентная', 'recursive')],
          scene: [{ obj: 'cube', n: 5, color: 'green' }],
          explain: L('<b>Sonli ketma-ketlik</b> — natural sonlarga mos qo‘yilgan sonlar: a₁, a₂, …, aₙ. U formula bilan (aₙ = n² + 1) yoki rekurrent usulda beriladi (a₁ = 1, aₙ₊₁ = 2aₙ). Fibonachchi ketma-ketligi: 1, 1, 2, 3, 5, 8, … — har bir had oldingi ikkitasining yig‘indisi.',
            '<b>Числовая последовательность</b> — числа, сопоставленные натуральным: a₁, a₂, …, aₙ. Задаётся формулой (aₙ = n² + 1) или рекуррентно (a₁ = 1, aₙ₊₁ = 2aₙ). Последовательность Фибоначчи: 1, 1, 2, 3, 5, 8, … — каждый член равен сумме двух предыдущих.',
            'A <b>sequence</b> assigns numbers to the natural numbers: a₁, a₂, …, aₙ. It can be given by a formula (aₙ = n² + 1) or recursively (a₁ = 1, aₙ₊₁ = 2aₙ). Fibonacci: 1, 1, 2, 3, 5, 8, … — each term is the sum of the previous two.'),
          rule: 'aₙ = f(n)',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var n = R(1, 10), a = R(1, 5), b = R(-5, 5); return pick([{ q: 'aₙ = ' + kx(a, 'n') + sg(b) + ';  a<sub>' + n + '</sub>', a: a * n + b }, { q: 'aₙ = n² ' + sg(b).trim() + ';  a<sub>' + n + '</sub>', a: n * n + b }]); } },
            { type: 'choose', title: L('Keyingi had', 'Следующий член', 'Next term'), icon: '🔮', make: function (R) { var k = R(0, 2), s = R(1, 5); var seq = k === 0 ? [s, s + 3, s + 6, s + 9] : k === 1 ? [s, 2 * s, 4 * s, 8 * s] : [1, 1, 2, 3, 5, 8]; var nx = k === 0 ? s + 12 : k === 1 ? 16 * s : 13; return choice('<span class="kd-big">' + seq.join(', ') + ', ?</span>', [String(nx), String(nx + 1), String(nx - 2)], 0); } }
          ],
          quiz: [{ q: 'aₙ = 2n + 1. a₅ = ?', o: ['11', '10', '7'], a: 0 }, { q: '1, 1, 2, 3, 5, 8, ?', o: ['13', '11', '16'], a: 0 }] },

        { id: 't16', lessons: ch(4), title: L('Arifmetik progressiya va uning yig‘indisi', 'Арифметическая прогрессия и её сумма', 'Arithmetic progressions and their sums'),
          keys: ['aₙ = a₁ + (n − 1)d', 'Sₙ = (a₁ + aₙ) · n / 2'],
          scene: [{ obj: 'rod', n: 6, color: 'orange' }],
          explain: L('Har bir had oldingisiga bir xil d son qo‘shib hosil bo‘ladi — <b>arifmetik progressiya</b>: aₙ = a₁ + (n − 1)d. Yig‘indi: Sₙ = (a₁ + aₙ)n/2. Kichik Gauss 1 dan 100 gacha sonlarni shunday qo‘shgan: (1 + 100) · 100/2 = 5050.',
            'Каждый член получается прибавлением одного числа d — <b>арифметическая прогрессия</b>: aₙ = a₁ + (n − 1)d. Сумма: Sₙ = (a₁ + aₙ)n/2. Маленький Гаусс так сложил числа от 1 до 100: (1 + 100) · 100/2 = 5050.',
            'Each term adds the same number d — an <b>arithmetic progression</b>: aₙ = a₁ + (n − 1)d. Its sum is Sₙ = (a₁ + aₙ)n/2. Young Gauss added 1 to 100 this way: (1 + 100) · 100/2 = 5050.'),
          rule: 'Sₙ = (a₁ + aₙ)n/2',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var a1 = R(-5, 10), d = R(-3, 5) || 2, n = R(5, 20), an = a1 + (n - 1) * d; return R(0, 1) ? { q: 'a₁ = ' + ns(a1) + ', d = ' + ns(d) + ';  a<sub>' + n + '</sub>', a: an } : { q: 'a₁ = ' + ns(a1) + ', d = ' + ns(d) + ';  S<sub>' + n + '</sub>', a: (a1 + an) * n / 2 }; } },
            { type: 'problem', title: L('Gauss usuli', 'Метод Гаусса', 'Gauss’s trick'), make: function (R) { var n = pick([10, 20, 40, 50, 100, 200]); return { story: L('1 dan <b>' + n + '</b> gacha bo‘lgan barcha natural sonlar <u>yig‘indisi</u>?', '<u>Сумма</u> всех натуральных чисел от 1 до <b>' + n + '</b>?', '<u>Sum</u> of all whole numbers from 1 to <b>' + n + '</b>?'), expr: [1, '+', n, '·', n, ':', 2, '=', (1 + n) * n / 2], ans: (1 + n) * n / 2, unit: '' }; } }
          ],
          quiz: [{ q: 'a₁ = 3, d = 2. a₁₀ = ?', o: ['21', '23', '20'], a: 0 }, { q: '1 + 2 + … + 100 = ?', o: ['5050', '5000', '10100'], a: 0 }] },

        { id: 't17', lessons: ch(4), title: L('Geometrik progressiya va uning yig‘indisi', 'Геометрическая прогрессия и её сумма', 'Geometric progressions and their sums'),
          keys: ['bₙ = b₁ qⁿ⁻¹', 'Sₙ = b₁(qⁿ − 1)/(q − 1)'],
          scene: [{ obj: 'cube', n: 8, color: 'yellow' }],
          explain: L('Har bir had oldingisini bir xil q ga ko‘paytirib hosil bo‘ladi — <b>geometrik progressiya</b>: bₙ = b₁qⁿ⁻¹. Yig‘indi (q ≠ 1): Sₙ = b₁(qⁿ − 1)/(q − 1). Shaxmat afsonasi: 64 katakka 1, 2, 4, … don — jami 2⁶⁴ − 1 ≈ 1,8 · 10¹⁹ don! Beruniy bu sonni hisoblagan.',
            'Каждый член получается умножением на одно число q — <b>геометрическая прогрессия</b>: bₙ = b₁qⁿ⁻¹. Сумма (q ≠ 1): Sₙ = b₁(qⁿ − 1)/(q − 1). Легенда о шахматах: на 64 клетки 1, 2, 4, … зерна — всего 2⁶⁴ − 1 ≈ 1,8 · 10¹⁹! Беруни вычислил это число.',
            'Each term multiplies by the same q — a <b>geometric progression</b>: bₙ = b₁qⁿ⁻¹. Its sum (q ≠ 1) is Sₙ = b₁(qⁿ − 1)/(q − 1). The chessboard legend: 1, 2, 4, … grains on 64 squares — 2⁶⁴ − 1 ≈ 1.8 · 10¹⁹ grains! Biruni worked out this number.'),
          rule: 'bₙ = b₁qⁿ⁻¹',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var b1 = R(1, 5), q = pick([2, 3, -2]), n = R(3, 7), bn = b1 * Math.pow(q, n - 1); return R(0, 1) ? { q: 'b₁ = ' + b1 + ', q = ' + ns(q) + ';  b<sub>' + n + '</sub>', a: bn } : { q: 'b₁ = ' + b1 + ', q = ' + ns(q) + ';  S<sub>' + n + '</sub>', a: b1 * (Math.pow(q, n) - 1) / (q - 1) }; } },
            { type: 'problem', title: L('Bakteriyalar', 'Бактерии', 'Bacteria'), make: function (R) { var b = R(1, 5) * 10, n = R(3, 6); return { story: L('Bakteriyalar soni har soatda 2 marta ko‘payadi. Boshida <b>' + b + '</b> ta edi. <b>' + n + '</b> soatdan keyin <u>nechta</u>?', 'Число бактерий удваивается каждый час. Вначале <b>' + b + '</b>. <u>Сколько</u> через <b>' + n + '</b> ч?', 'Bacteria double every hour. There are <b>' + b + '</b> at first. <u>How many</u> after <b>' + n + '</b> hours?'), expr: [b, '·', Math.pow(2, n), '=', b * Math.pow(2, n)], ans: b * Math.pow(2, n), unit: PCS }; } }
          ],
          quiz: [{ q: 'b₁ = 2, q = 3. b₄ = ?', o: ['54', '18', '162'], a: 0 }, { q: '1 + 2 + 4 + 8 + 16 = ?', o: ['31', '32', '30'], a: 0 }] },

        { id: 't18', lessons: ch(4), title: L('Cheksiz kamayuvchi geometrik progressiya', 'Бесконечно убывающая геометрическая прогрессия', 'Infinite geometric series'),
          keys: ['|q| &lt; 1', 'S = b₁ / (1 − q)'],
          scene: [{ obj: 'cube', n: 4, color: 'cyan' }],
          explain: L('|q| &lt; 1 bo‘lsa, qⁿ nolga yaqinlashadi va cheksiz yig‘indi chekli songa intiladi: S = b₁/(1 − q). Masalan, 1 + 1/2 + 1/4 + … = 2. Bu usul bilan davriy o‘nli kasrni oddiy kasrga aylantiramiz: 0,(3) = 3/10 + 3/100 + … = 1/3.',
            'При |q| &lt; 1 qⁿ стремится к нулю, и бесконечная сумма равна конечному числу: S = b₁/(1 − q). Например, 1 + 1/2 + 1/4 + … = 2. Так периодическую дробь обращают в обыкновенную: 0,(3) = 3/10 + 3/100 + … = 1/3.',
            'If |q| &lt; 1, qⁿ shrinks to zero and the infinite sum is a finite number: S = b₁/(1 − q). E.g. 1 + 1/2 + 1/4 + … = 2. This turns repeating decimals into fractions: 0.(3) = 3/10 + 3/100 + … = 1/3.'),
          rule: 'S = b₁ / (1 − q)',
          acts: [
            { type: 'drill', n: 6, make: function (R) { var T = pick([[1, 2], [3, 2], [4, 2], [2, 3], [6, 3], [9, 3], [5, 5], [8, 5], [3, 4]]); return { q: 'b₁ = ' + T[0] + ', q = 1/' + T[1] + ';  S', a: r6(T[0] * T[1] / (T[1] - 1)) }; } },
            { type: 'choose', title: L('Davriy kasr', 'Периодическая дробь', 'Repeating decimal'), icon: '♾️', make: function (R) { var T = pick([['0,(3)', '1/3', '3/10'], ['0,(6)', '2/3', '6/10'], ['0,(1)', '1/9', '1/10'], ['0,(4)', '4/9', '4/10'], ['0,(27)', '3/11', '27/100']]); return choice('<span class="kd-big">' + T[0] + ' = ?</span>', [T[1], T[2], '1/2'], 0); } }
          ],
          quiz: [{ q: '1 + 1/2 + 1/4 + … = ?', o: ['2', L('1,5', '1,5', '1.5'), '∞'], a: 0 }, { q: L('Cheksiz yig‘indi qachon chekli?', 'Когда сумма конечна?', 'When is the infinite sum finite?'), o: ['|q| &lt; 1', 'q &gt; 1', 'q = 1'], a: 0 }] }
      ] },

      { id: 's5', title: L('Ehtimollar nazariyasi va statistika', 'Теория вероятностей и статистика', 'Probability and statistics'), icon: '🎲', color: 'pink', topics: [
        { id: 't19', lessons: ch(5), title: L('Hodisalar. Hodisaning ehtimolligi. Nisbiy chastota', 'События. Вероятность. Относительная частота', 'Events, probability and relative frequency'),
          keys: ['P(A) = m / n', '0 ≤ P ≤ 1', L('nisbiy chastota', 'относительная частота', 'relative frequency')],
          scene: [{ obj: 'cube', n: 2, color: 'pink' }, { obj: 'ball', n: 3, color: 'yellow' }],
          explain: L('Teng imkoniyatli n natijadan m tasi A hodisaga qulay bo‘lsa, P(A) = m/n. Muqarrar hodisa ehtimolligi 1, mumkin bo‘lmagani 0. Kubik tashlaganda juft son tushishi: 3/6 = 1/2. Ko‘p tajribada nisbiy chastota (m/n) ehtimollikka yaqinlashadi.',
            'Если из n равновозможных исходов m благоприятствуют A, то P(A) = m/n. Достоверное событие имеет вероятность 1, невозможное — 0. Выпадение чётного числа на кубике: 3/6 = 1/2. При многих опытах относительная частота (m/n) приближается к вероятности.',
            'If m of n equally likely outcomes favour A, then P(A) = m/n. A certain event has probability 1, an impossible one 0. Rolling an even number on a die: 3/6 = 1/2. Over many trials the relative frequency (m/n) approaches the probability.'),
          rule: 'P(A) = m / n',
          acts: [
            { type: 'drill', title: L('Ehtimollik (o‘nli kasr)', 'Вероятность (десятичная)', 'Probability (decimal)'), n: 6, make: function (R) { var n = pick([4, 5, 10, 20, 25, 50]), m = R(1, n - 1); return { q: mk(function (l) { return { uz: 'Qutida ' + n + ' ta shar, ' + m + ' tasi qizil. P(qizil)', ru: 'В коробке ' + n + ' шаров, ' + m + ' красных. P(красный)', en: n + ' balls in a box, ' + m + ' red. P(red)' }[l]; }), a: r6(m / n) }; } },
            { type: 'choose', title: L('Kubik', 'Кубик', 'Die'), icon: '🎲', make: function (R) { var T = pick([[L('juft son', 'чётное число', 'an even number'), '1/2'], [L('6 tushishi', 'выпадет 6', 'a 6'), '1/6'], [L('3 dan katta son', 'число больше 3', 'more than 3'), '1/2'], [L('5 yoki 6', '5 или 6', 'a 5 or 6'), '1/3'], [L('7 tushishi', 'выпадет 7', 'a 7'), '0'], [L('6 dan oshmaydigan son', 'не больше 6', 'at most 6'), '1']]); var w = ['1/2', '1/6', '1/3', '0', '1', '2/3'].filter(function (x) { return x !== T[1]; }).sort(function () { return R(0, 1) - 0.5; }); return choice(mk(function (l) { return { uz: 'Kubik tashlandi: ', ru: 'Брошен кубик: ', en: 'A die is rolled: ' }[l] + T[0][l] + '. P = ?'; }), [T[1], w[0], w[1]], 0); } }
          ],
          quiz: [{ q: L('Tanga tashlandi. P(gerb)?', 'Брошена монета. P(герб)?', 'A coin is tossed. P(heads)?'), o: ['1/2', '1', '1/4'], a: 0 }, { q: L('Mumkin bo‘lmagan hodisa ehtimolligi?', 'Вероятность невозможного события?', 'Probability of an impossible event?'), o: ['0', '1', '1/2'], a: 0 }] },

        { id: 't20', lessons: ch(5), title: L('Tasodifiy miqdorlar va ularning sonli xarakteristikalari', 'Случайные величины и их числовые характеристики', 'Random variables and their characteristics'),
          keys: [L('o‘rta qiymat', 'среднее', 'mean'), L('dispersiya', 'дисперсия', 'variance'), L('kenglik', 'размах', 'range')],
          scene: [{ obj: 'cube', n: 3, color: 'violet' }],
          explain: L('Tajriba natijasida tasodifiy qiymat oladigan son — <b>tasodifiy miqdor</b> (masalan, kubikdagi ochko). Uning xarakteristikalari: o‘rta qiymat, moda, mediana, kenglik (eng katta − eng kichik) va <b>dispersiya</b> — qiymatlarning o‘rtachadan chetlanishi kvadratlarining o‘rtachasi. 2, 4, 6 uchun o‘rtacha 4, dispersiya (4 + 0 + 4)/3 = 8/3.',
            'Число, принимающее случайное значение в опыте, — <b>случайная величина</b> (например, очки на кубике). Характеристики: среднее, мода, медиана, размах (наибольшее − наименьшее) и <b>дисперсия</b> — среднее квадратов отклонений от среднего. Для 2, 4, 6: среднее 4, дисперсия (4 + 0 + 4)/3 = 8/3.',
            'A number that takes a random value in an experiment is a <b>random variable</b> (e.g. the score on a die). Its characteristics: mean, mode, median, range (largest − smallest) and <b>variance</b> — the mean of the squared deviations from the mean. For 2, 4, 6: mean 4, variance (4 + 0 + 4)/3 = 8/3.'),
          rule: 'D = Σ(xᵢ − x̄)² / n',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var m = R(3, 10), d = R(1, 4), xs = [m - d, m, m + d], k = R(0, 2); return [{ q: xs.join(', ') + ';  x̄', a: m }, { q: mk(function (l) { return xs.join(', ') + '; ' + { uz: 'kenglik', ru: 'размах', en: 'range' }[l]; }), a: 2 * d }, { q: mk(function (l) { return xs.join(', ') + '; ' + { uz: 'dispersiya', ru: 'дисперсия', en: 'variance' }[l]; }), a: r6(2 * d * d / 3) }][k]; } },
            { type: 'problem', title: L('O‘rtacha ball', 'Средний балл', 'Mean score'), make: function (R) { var m = R(60, 90), a = m + R(-10, 10), b = m + R(-10, 10), c = 3 * m - a - b; return { story: L('Uchta test natijasi: <b>' + a + '</b>, <b>' + b + '</b>, <b>' + c + '</b>. <u>O‘rta qiymat</u>?', 'Три результата теста: <b>' + a + '</b>, <b>' + b + '</b>, <b>' + c + '</b>. <u>Среднее</u>?', 'Three test scores: <b>' + a + '</b>, <b>' + b + '</b>, <b>' + c + '</b>. <u>Mean</u>?'), expr: [a, '+', b, '+', c, ':', 3, '=', m], ans: m, unit: '' }; } }
          ],
          quiz: [{ q: L('2, 4, 6 ning o‘rtachasi?', 'Среднее 2, 4, 6?', 'Mean of 2, 4, 6?'), o: ['4', '6', '12'], a: 0 }, { q: L('3, 7, 10 ning kengligi?', 'Размах 3, 7, 10?', 'Range of 3, 7, 10?'), o: ['7', '10', '3'], a: 0 }] }
      ] }
    ]
  };
  C.addPart(part1);
})(this);
