// Nuvemath — darslik mavzulari (uch tilda): nazariya, formulalar, namunaviy misol, interaktiv qism va test.
// widget: { type: 'plot', fns } | { type: 'geo', mode, opts } | { type: 'solid', kind } | { type: 'solve', eq } | { type: 'practice', topic }
(function (root) {
  'use strict';
  function L(uz, ru, en) { return { uz: uz, ru: ru, en: en }; }

  var LESSONS = [
    // ===================== ALGEBRA =====================
    { id: 'a1', sec: 'algebra', icon: 'ℝ',
      title: L('Sonlar va ifodalar', 'Числа и выражения', 'Numbers and expressions'),
      theory: L(
        '<p>Sonlar to‘plamlari bir-birining ichiga joylashgan: <b>ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ</b>. Natural sonlar (1, 2, 3, …) sanash uchun, butun sonlar manfiylarni ham o‘z ichiga oladi, ratsional sonlar — <i>p/q</i> ko‘rinishidagi kasrlar, haqiqiy sonlar esa √2, π kabi irratsional sonlarni ham qamraydi.</p><p><b>Amallar tartibi:</b> qavslar → darajalar → ko‘paytirish va bo‘lish (chapdan o‘ngga) → qo‘shish va ayirish.</p>',
        '<p>Числовые множества вложены друг в друга: <b>ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ</b>. Натуральные числа (1, 2, 3, …) служат для счёта, целые включают отрицательные, рациональные — дроби вида <i>p/q</i>, а действительные включают и иррациональные числа, такие как √2 и π.</p><p><b>Порядок действий:</b> скобки → степени → умножение и деление (слева направо) → сложение и вычитание.</p>',
        '<p>Number sets are nested: <b>ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ</b>. Natural numbers (1, 2, 3, …) are for counting, integers add the negatives, rationals are fractions <i>p/q</i>, and reals also include irrationals such as √2 and π.</p><p><b>Order of operations:</b> brackets → powers → multiplication and division (left to right) → addition and subtraction.</p>'),
      formulas: [['a/b + c/d', '(ad + bc) / bd'], ['a/b · c/d', 'ac / bd'], ['a/b : c/d', 'ad / bc'], ['|a|', 'a, a ≥ 0; −a, a < 0']],
      example: { q: '2 + 3·(8 − 2)² : 4', steps: ['8 − 2 = 6', '6² = 36', '3·36 = 108', '108 : 4 = 27', '2 + 27 = <b>29</b>'] },
      widget: { type: 'calc', expr: '2 + 3*(8 - 2)^2 / 4' },
      quiz: [
        { q: '7 − 2·3 = ?', o: ['15', '1', '−1', '13'], a: 1 },
        { q: L('Qaysi son irratsional?', 'Какое число иррационально?', 'Which number is irrational?'), o: ['0.25', '√9', '√5', '−7/3'], a: 2 },
        { q: '1/2 + 1/3 = ?', o: ['2/5', '5/6', '1/6', '2/6'], a: 1 }
      ] },
    { id: 'a2', sec: 'algebra', icon: 'xⁿ',
      title: L('Darajalar va ildizlar', 'Степени и корни', 'Powers and roots'),
      theory: L(
        '<p><i>a</i><sup>n</sup> — <i>a</i> sonini o‘ziga <i>n</i> marta ko‘paytirish. Nolinchi daraja: <i>a</i><sup>0</sup> = 1 (<i>a</i> ≠ 0), manfiy daraja: <i>a</i><sup>−n</sup> = 1/<i>a</i><sup>n</sup>.</p><p>Arifmetik ildiz √<i>a</i> — kvadrati <i>a</i> ga teng bo‘lgan manfiy bo‘lmagan son. Ildizni kasr daraja sifatida yozish mumkin: <sup>n</sup>√<i>a</i><sup>m</sup> = <i>a</i><sup>m/n</sup>.</p>',
        '<p><i>a</i><sup>n</sup> — произведение <i>n</i> множителей, равных <i>a</i>. Нулевая степень: <i>a</i><sup>0</sup> = 1 (<i>a</i> ≠ 0), отрицательная: <i>a</i><sup>−n</sup> = 1/<i>a</i><sup>n</sup>.</p><p>Арифметический корень √<i>a</i> — неотрицательное число, квадрат которого равен <i>a</i>. Корень можно записать как дробную степень: <sup>n</sup>√<i>a</i><sup>m</sup> = <i>a</i><sup>m/n</sup>.</p>',
        '<p><i>a</i><sup>n</sup> is <i>a</i> multiplied by itself <i>n</i> times. Zero power: <i>a</i><sup>0</sup> = 1 (<i>a</i> ≠ 0); negative power: <i>a</i><sup>−n</sup> = 1/<i>a</i><sup>n</sup>.</p><p>The principal root √<i>a</i> is the non-negative number whose square is <i>a</i>. Roots are fractional powers: <sup>n</sup>√<i>a</i><sup>m</sup> = <i>a</i><sup>m/n</sup>.</p>'),
      formulas: [['aᵐ · aⁿ', 'aᵐ⁺ⁿ'], ['aᵐ : aⁿ', 'aᵐ⁻ⁿ'], ['(aᵐ)ⁿ', 'aᵐⁿ'], ['(ab)ⁿ', 'aⁿbⁿ'], ['√(ab)', '√a · √b'], ['√(a²)', '|a|']],
      example: { q: '(2³)² · 2⁻⁴', steps: ['(2³)² = 2⁶', '2⁶ · 2⁻⁴ = 2²', '= <b>4</b>'] },
      widget: { type: 'plot', fns: ['2^x', 'x^2', 'sqrt(x)'] },
      quiz: [
        { q: '5⁰ = ?', o: ['0', '5', '1', '—'], a: 2 },
        { q: '2⁻³ = ?', o: ['−8', '1/8', '−6', '8'], a: 1 },
        { q: '√50 = ?', o: ['25', '5√2', '2√5', '10√5'], a: 1 }
      ] },
    { id: 'a3', sec: 'algebra', icon: '(a+b)²',
      title: L('Qisqa ko‘paytirish formulalari', 'Формулы сокращённого умножения', 'Special products'),
      theory: L(
        '<p>Bu formulalar ko‘phadlarni tez ochish va, aksincha, ko‘paytuvchilarga ajratish uchun ishlatiladi. Masalan, <i>x</i>² − 9 = (<i>x</i> − 3)(<i>x</i> + 3) — kvadratlar ayirmasi.</p><p>Geometrik ma’nosi: (<i>a</i> + <i>b</i>)² — tomoni <i>a</i> + <i>b</i> bo‘lgan kvadrat yuzi; u <i>a</i>², <i>b</i>² va ikkita <i>ab</i> to‘g‘ri to‘rtburchakdan iborat.</p>',
        '<p>Эти формулы позволяют быстро раскрывать скобки и раскладывать многочлены на множители. Например, <i>x</i>² − 9 = (<i>x</i> − 3)(<i>x</i> + 3) — разность квадратов.</p><p>Геометрический смысл: (<i>a</i> + <i>b</i>)² — площадь квадрата со стороной <i>a</i> + <i>b</i>; он состоит из <i>a</i>², <i>b</i>² и двух прямоугольников <i>ab</i>.</p>',
        '<p>These identities let you expand brackets quickly and, conversely, factor polynomials. For example, <i>x</i>² − 9 = (<i>x</i> − 3)(<i>x</i> + 3) — a difference of squares.</p><p>Geometrically, (<i>a</i> + <i>b</i>)² is the area of a square of side <i>a</i> + <i>b</i>, made of <i>a</i>², <i>b</i>² and two <i>ab</i> rectangles.</p>'),
      formulas: [['(a + b)²', 'a² + 2ab + b²'], ['(a − b)²', 'a² − 2ab + b²'], ['a² − b²', '(a − b)(a + b)'], ['(a + b)³', 'a³ + 3a²b + 3ab² + b³'], ['a³ + b³', '(a + b)(a² − ab + b²)'], ['a³ − b³', '(a − b)(a² + ab + b²)']],
      example: { q: '102² = ?', steps: ['102² = (100 + 2)²', '= 100² + 2·100·2 + 2²', '= 10000 + 400 + 4 = <b>10404</b>'] },
      widget: { type: 'plot', fns: ['(x+1)^2', 'x^2 + 2x + 1'] },
      quiz: [
        { q: '(x − 3)² = ?', o: ['x² − 9', 'x² − 6x + 9', 'x² + 9', 'x² − 3x + 9'], a: 1 },
        { q: '49 − y² = ?', o: ['(7 − y)²', '(7 − y)(7 + y)', '(y − 7)(y + 7)', '(49 − y)(49 + y)'], a: 1 },
        { q: '99 · 101 = ?', o: ['9999', '10001', '9899', '10099'], a: 0 }
      ] },
    { id: 'a4', sec: 'algebra', icon: 'y=kx+b',
      title: L('Chiziqli tenglama va chiziqli funksiya', 'Линейное уравнение и функция', 'Linear equations and functions'),
      theory: L(
        '<p><i>ax</i> + <i>b</i> = 0 ko‘rinishidagi tenglama chiziqli deyiladi. <i>a</i> ≠ 0 bo‘lsa, yagona yechim <i>x</i> = −<i>b</i>/<i>a</i>; <i>a</i> = 0 va <i>b</i> = 0 bo‘lsa — cheksiz ko‘p, <i>a</i> = 0, <i>b</i> ≠ 0 bo‘lsa — yechim yo‘q.</p><p><i>y</i> = <i>kx</i> + <i>b</i> funksiyaning grafigi — to‘g‘ri chiziq. <i>k</i> — burchak koeffitsiyenti (qiyalik, <i>k</i> = tg α), <i>b</i> — chiziqning <i>Oy</i> o‘qini kesish nuqtasi.</p>',
        '<p>Уравнение вида <i>ax</i> + <i>b</i> = 0 называется линейным. При <i>a</i> ≠ 0 единственное решение <i>x</i> = −<i>b</i>/<i>a</i>; при <i>a</i> = 0 и <i>b</i> = 0 — бесконечно много, при <i>a</i> = 0, <i>b</i> ≠ 0 — нет решений.</p><p>График функции <i>y</i> = <i>kx</i> + <i>b</i> — прямая. <i>k</i> — угловой коэффициент (<i>k</i> = tg α), <i>b</i> — точка пересечения с осью <i>Oy</i>.</p>',
        '<p>An equation <i>ax</i> + <i>b</i> = 0 is linear. If <i>a</i> ≠ 0 the unique solution is <i>x</i> = −<i>b</i>/<i>a</i>; if <i>a</i> = 0 and <i>b</i> = 0 every number works; if <i>a</i> = 0, <i>b</i> ≠ 0 there is none.</p><p>The graph of <i>y</i> = <i>kx</i> + <i>b</i> is a straight line. <i>k</i> is the slope (<i>k</i> = tan α) and <i>b</i> is the <i>y</i>-intercept.</p>'),
      formulas: [['ax + b = 0', 'x = −b/a'], ['y = kx + b', 'k = (y₂ − y₁)/(x₂ − x₁)'], [L('Parallel', 'Параллельны', 'Parallel'), 'k₁ = k₂'], [L('Perpendikulyar', 'Перпендикулярны', 'Perpendicular'), 'k₁·k₂ = −1']],
      example: { q: '3(x − 2) = x + 4', steps: ['3x − 6 = x + 4', '3x − x = 4 + 6', '2x = 10', '<b>x = 5</b>'] },
      widget: { type: 'plot', fns: ['a*x + 1', '-x/2 + 3'] },
      solve: '3(x - 2) = x + 4',
      quiz: [
        { q: '5x − 3 = 2x + 9 ⇒ x = ?', o: ['2', '4', '6', '−4'], a: 1 },
        { q: L('y = −2x + 3 grafigi Oy o‘qini qaysi nuqtada kesadi?', 'Где график y = −2x + 3 пересекает ось Oy?', 'Where does y = −2x + 3 cross the y-axis?'), o: ['(0; −2)', '(0; 3)', '(3; 0)', '(1.5; 0)'], a: 1 },
        { q: L('y = 2x + 1 ga parallel to‘g‘ri chiziq:', 'Прямая, параллельная y = 2x + 1:', 'A line parallel to y = 2x + 1:'), o: ['y = −2x + 1', 'y = x/2', 'y = 2x − 5', 'y = −x/2'], a: 2 }
      ] },
    { id: 'a5', sec: 'algebra', icon: 'D',
      title: L('Kvadrat tenglamalar', 'Квадратные уравнения', 'Quadratic equations'),
      theory: L(
        '<p><i>ax</i>² + <i>bx</i> + <i>c</i> = 0 (<i>a</i> ≠ 0) — kvadrat tenglama. Yechish uchun diskriminant hisoblanadi: <b>D = b² − 4ac</b>.</p><p>D &gt; 0 — ikkita turli haqiqiy ildiz; D = 0 — bitta (ikki karrali) ildiz; D &lt; 0 — haqiqiy ildiz yo‘q. <b>Viyet teoremasi:</b> <i>x</i>₁ + <i>x</i>₂ = −<i>b</i>/<i>a</i>, <i>x</i>₁·<i>x</i>₂ = <i>c</i>/<i>a</i>.</p>',
        '<p><i>ax</i>² + <i>bx</i> + <i>c</i> = 0 (<i>a</i> ≠ 0) — квадратное уравнение. Для решения вычисляют дискриминант: <b>D = b² − 4ac</b>.</p><p>D &gt; 0 — два различных корня; D = 0 — один (двукратный) корень; D &lt; 0 — действительных корней нет. <b>Теорема Виета:</b> <i>x</i>₁ + <i>x</i>₂ = −<i>b</i>/<i>a</i>, <i>x</i>₁·<i>x</i>₂ = <i>c</i>/<i>a</i>.</p>',
        '<p><i>ax</i>² + <i>bx</i> + <i>c</i> = 0 (<i>a</i> ≠ 0) is a quadratic equation. Compute the discriminant <b>D = b² − 4ac</b>.</p><p>D &gt; 0 — two distinct real roots; D = 0 — one double root; D &lt; 0 — no real roots. <b>Vieta’s formulas:</b> <i>x</i>₁ + <i>x</i>₂ = −<i>b</i>/<i>a</i>, <i>x</i>₁·<i>x</i>₂ = <i>c</i>/<i>a</i>.</p>'),
      formulas: [['D', 'b² − 4ac'], ['x₁,₂', '(−b ± √D) / 2a'], ['x₁ + x₂', '−b/a'], ['x₁ · x₂', 'c/a'], ['ax² + bx + c', 'a(x − x₁)(x − x₂)']],
      example: { q: 'x² − 5x + 6 = 0', steps: ['a = 1, b = −5, c = 6', 'D = 25 − 24 = 1', 'x = (5 ± 1) / 2', '<b>x₁ = 2, x₂ = 3</b>'] },
      widget: { type: 'plot', fns: ['x^2 - 5x + 6'] },
      solve: 'x^2 - 5x + 6 = 0',
      quiz: [
        { q: L('x² + 4x + 4 = 0 tenglamaning nechta ildizi bor?', 'Сколько корней у x² + 4x + 4 = 0?', 'How many roots does x² + 4x + 4 = 0 have?'), o: ['0', '1', '2', '∞'], a: 1 },
        { q: L('x² − 7x + 10 = 0 ildizlari yig‘indisi:', 'Сумма корней x² − 7x + 10 = 0:', 'Sum of the roots of x² − 7x + 10 = 0:'), o: ['−7', '10', '7', '3'], a: 2 },
        { q: 'x² + 1 = 0', o: [L('x = ±1', 'x = ±1', 'x = ±1'), L('x = −1', 'x = −1', 'x = −1'), L('Haqiqiy ildiz yo‘q', 'Нет действительных корней', 'No real roots'), 'x = 0'], a: 2 }
      ] },
    { id: 'a6', sec: 'algebra', icon: '∪',
      title: L('Kvadrat funksiya — parabola', 'Квадратичная функция — парабола', 'The quadratic function'),
      theory: L(
        '<p><i>y</i> = <i>ax</i>² + <i>bx</i> + <i>c</i> grafigi — parabola. <i>a</i> &gt; 0 bo‘lsa shoxlari yuqoriga, <i>a</i> &lt; 0 bo‘lsa pastga qaragan. |<i>a</i>| qancha katta bo‘lsa, parabola shuncha “tor”.</p><p>Uchi: <i>x</i>₀ = −<i>b</i>/2<i>a</i>, <i>y</i>₀ = −D/4<i>a</i>. Simmetriya o‘qi — <i>x</i> = <i>x</i>₀ to‘g‘ri chizig‘i. Grafikda <b>a</b> parametrini o‘zgartirib, parabola shakli qanday o‘zgarishini kuzating.</p>',
        '<p>График <i>y</i> = <i>ax</i>² + <i>bx</i> + <i>c</i> — парабола. При <i>a</i> &gt; 0 ветви направлены вверх, при <i>a</i> &lt; 0 — вниз. Чем больше |<i>a</i>|, тем «уже» парабола.</p><p>Вершина: <i>x</i>₀ = −<i>b</i>/2<i>a</i>, <i>y</i>₀ = −D/4<i>a</i>. Ось симметрии — прямая <i>x</i> = <i>x</i>₀. Меняйте параметр <b>a</b> на графике и наблюдайте форму параболы.</p>',
        '<p>The graph of <i>y</i> = <i>ax</i>² + <i>bx</i> + <i>c</i> is a parabola, opening up if <i>a</i> &gt; 0 and down if <i>a</i> &lt; 0. The larger |<i>a</i>|, the narrower it is.</p><p>Vertex: <i>x</i>₀ = −<i>b</i>/2<i>a</i>, <i>y</i>₀ = −D/4<i>a</i>; the axis of symmetry is <i>x</i> = <i>x</i>₀. Move the <b>a</b> slider on the graph to watch the shape change.</p>'),
      formulas: [['x₀', '−b / 2a'], ['y₀', '−D / 4a'], [L('Kanonik ko‘rinish', 'Канонический вид', 'Vertex form'), 'y = a(x − x₀)² + y₀']],
      example: { q: 'y = x² − 4x + 3', steps: ['x₀ = 4/2 = 2', 'y₀ = 4 − 8 + 3 = −1', L('Uchi (2; −1), nollari x = 1 va x = 3', 'Вершина (2; −1), нули x = 1 и x = 3', 'Vertex (2; −1), zeros x = 1 and x = 3')] },
      widget: { type: 'plot', fns: ['a*x^2 - 4x + 3', 'x^2'] },
      quiz: [
        { q: L('y = −2x² + 3 parabolasining shoxlari:', 'Ветви параболы y = −2x² + 3:', 'The parabola y = −2x² + 3 opens:'), o: [L('yuqoriga', 'вверх', 'up'), L('pastga', 'вниз', 'down'), L('o‘ngga', 'вправо', 'right'), L('chapga', 'влево', 'left')], a: 1 },
        { q: L('y = x² − 6x + 1 uchining abssissasi:', 'Абсцисса вершины y = x² − 6x + 1:', 'Vertex x-coordinate of y = x² − 6x + 1:'), o: ['−3', '3', '6', '1'], a: 1 },
        { q: L('y = (x − 2)² + 5 ning eng kichik qiymati:', 'Наименьшее значение y = (x − 2)² + 5:', 'Minimum value of y = (x − 2)² + 5:'), o: ['2', '−2', '5', '0'], a: 2 }
      ] },
    { id: 'a7', sec: 'algebra', icon: '{ }',
      title: L('Tenglamalar sistemasi', 'Системы уравнений', 'Systems of equations'),
      theory: L(
        '<p>Bir nechta tenglamani bir vaqtda qanoatlantiruvchi qiymatlar to‘plami — sistema yechimi. Ikki noma’lumli chiziqli sistema geometrik jihatdan ikki to‘g‘ri chiziqning kesishish nuqtasi.</p><p>Usullar: <b>o‘rniga qo‘yish</b>, <b>qo‘shish</b>, <b>Kramer</b> (determinantlar) va <b>Gauss</b> (matritsani pog‘onali ko‘rinishga keltirish). Yechuvchi bo‘limida Gauss usulini qadam-baqadam ko‘rishingiz mumkin.</p>',
        '<p>Решение системы — значения, удовлетворяющие всем уравнениям одновременно. Линейная система с двумя неизвестными геометрически — точка пересечения двух прямых.</p><p>Методы: <b>подстановка</b>, <b>сложение</b>, <b>Крамер</b> (определители) и <b>Гаусс</b> (приведение матрицы к ступенчатому виду). В разделе «Решатель» метод Гаусса показан пошагово.</p>',
        '<p>A solution of a system satisfies every equation at once. A two-variable linear system is geometrically the intersection of two lines.</p><p>Methods: <b>substitution</b>, <b>elimination</b>, <b>Cramer’s rule</b> (determinants) and <b>Gaussian elimination</b>. The Solver shows Gaussian elimination step by step.</p>'),
      formulas: [['Δ', 'a₁b₂ − a₂b₁'], ['x', 'Δx / Δ'], ['y', 'Δy / Δ'], [L('Δ = 0', 'Δ = 0', 'Δ = 0'), L('yechim yo‘q yoki cheksiz ko‘p', 'нет решений или бесконечно много', 'none or infinitely many')]],
      example: { q: '{ x + y = 5;  x − y = 1 }', steps: [L('Qo‘shamiz: 2x = 6 ⇒ x = 3', 'Складываем: 2x = 6 ⇒ x = 3', 'Add: 2x = 6 ⇒ x = 3'), 'y = 5 − 3 = 2', '<b>(3; 2)</b>'] },
      widget: { type: 'plot', fns: ['5 - x', 'x - 1'] },
      system: [[1, 1, 5], [1, -1, 1]],
      quiz: [
        { q: '{ x + y = 7; x − y = 3 }', o: ['(5; 2)', '(2; 5)', '(4; 3)', '(3; 4)'], a: 0 },
        { q: L('y = 2x + 1 va y = 2x − 3 sistemasining yechimlari soni:', 'Число решений системы y = 2x + 1 и y = 2x − 3:', 'Number of solutions of y = 2x + 1 and y = 2x − 3:'), o: ['0', '1', '2', '∞'], a: 0 }
      ] },
    { id: 'a8', sec: 'algebra', icon: '<',
      title: L('Tengsizliklar', 'Неравенства', 'Inequalities'),
      theory: L(
        '<p>Tengsizlikni yechish tenglamaga o‘xshaydi, ammo bitta muhim qoida bor: ikkala tomonni <b>manfiy songa</b> ko‘paytirsak yoki bo‘lsak, tengsizlik belgisi <b>teskarisiga</b> o‘zgaradi.</p><p>Kvadrat tengsizliklar <b>oraliqlar usuli</b> bilan yechiladi: ildizlarni son o‘qiga qo‘yib, har bir oraliqda ifoda ishorasini aniqlaymiz. Grafikda: <i>f</i>(<i>x</i>) &gt; 0 — parabola <i>Ox</i> o‘qidan yuqorida joylashgan qism.</p>',
        '<p>Неравенства решаются как уравнения, но с важным правилом: при умножении или делении обеих частей на <b>отрицательное число</b> знак неравенства <b>меняется</b>.</p><p>Квадратные неравенства решают <b>методом интервалов</b>: отмечают корни на числовой оси и определяют знак выражения на каждом промежутке. На графике <i>f</i>(<i>x</i>) &gt; 0 — часть параболы выше оси <i>Ox</i>.</p>',
        '<p>Inequalities are solved like equations with one key rule: multiplying or dividing both sides by a <b>negative number</b> <b>reverses</b> the inequality sign.</p><p>Quadratic inequalities use the <b>interval method</b>: mark the roots on the number line and find the sign on each interval. On the graph, <i>f</i>(<i>x</i>) &gt; 0 is where the parabola lies above the <i>x</i>-axis.</p>'),
      formulas: [['−2x > 6', 'x < −3'], ['(x − a)(x − b) < 0, a < b', 'a < x < b'], ['(x − a)(x − b) > 0, a < b', 'x < a ∨ x > b'], ['|x| < a', '−a < x < a']],
      example: { q: 'x² − x − 6 < 0', steps: [L('Ildizlar: x = −2, x = 3', 'Корни: x = −2, x = 3', 'Roots: x = −2, x = 3'), L('Parabola shoxlari yuqoriga ⇒ ildizlar orasida manfiy', 'Ветви вверх ⇒ между корнями отрицательна', 'Opens upward ⇒ negative between the roots'), '<b>−2 &lt; x &lt; 3</b>'] },
      widget: { type: 'plot', fns: ['x^2 - x - 6'] },
      quiz: [
        { q: '−3x ≤ 12', o: ['x ≤ −4', 'x ≥ −4', 'x ≤ 4', 'x ≥ 4'], a: 1 },
        { q: 'x² < 9', o: ['x < 3', 'x > ±3', '−3 < x < 3', 'x < −3 ∨ x > 3'], a: 2 }
      ] },
    { id: 'a9', sec: 'algebra', icon: 'aₙ',
      title: L('Progressiyalar', 'Прогрессии', 'Progressions'),
      theory: L(
        '<p><b>Arifmetik progressiya</b> — har bir hadi oldingisiga bir xil <i>d</i> sonni (ayirma) qo‘shish bilan hosil bo‘ladigan ketma-ketlik: 2, 5, 8, 11, … (<i>d</i> = 3).</p><p><b>Geometrik progressiya</b> — har bir hadi oldingisini bir xil <i>q</i> songa (maxraj) ko‘paytirish bilan hosil bo‘ladi: 3, 6, 12, 24, … (<i>q</i> = 2). Afsonaga ko‘ra, shaxmat ixtirochisi taxtadagi har katakka ikki baravar ko‘p bug‘doy so‘ragan: 2⁶⁴ − 1 ta don!</p>',
        '<p><b>Арифметическая прогрессия</b> — последовательность, где каждый член получается прибавлением одного и того же числа <i>d</i> (разности): 2, 5, 8, 11, … (<i>d</i> = 3).</p><p><b>Геометрическая прогрессия</b> — каждый член получается умножением предыдущего на одно и то же число <i>q</i> (знаменатель): 3, 6, 12, 24, … (<i>q</i> = 2). По легенде, изобретатель шахмат попросил вдвое больше зёрен на каждую клетку: 2⁶⁴ − 1 зёрен!</p>',
        '<p>An <b>arithmetic progression</b> adds the same number <i>d</i> (common difference) each step: 2, 5, 8, 11, … (<i>d</i> = 3).</p><p>A <b>geometric progression</b> multiplies by the same number <i>q</i> (common ratio): 3, 6, 12, 24, … (<i>q</i> = 2). Legend says the inventor of chess asked for doubling grains on each square — 2⁶⁴ − 1 grains!</p>'),
      formulas: [['aₙ', 'a₁ + (n − 1)d'], ['Sₙ', '(a₁ + aₙ)·n / 2'], ['bₙ', 'b₁·qⁿ⁻¹'], ['Sₙ (q ≠ 1)', 'b₁(qⁿ − 1)/(q − 1)'], ['S (|q| < 1)', 'b₁ / (1 − q)']],
      example: { q: '1 + 2 + 3 + … + 100', steps: ['a₁ = 1, a₁₀₀ = 100, n = 100', 'S = (1 + 100)·100 / 2', '= <b>5050</b> (Gauss)'] },
      widget: { type: 'practice', topic: 'progression' },
      quiz: [
        { q: '4, 7, 10, … a₁₀ = ?', o: ['31', '30', '34', '28'], a: 0 },
        { q: '2, 6, 18, … q = ?', o: ['4', '3', '2', '6'], a: 1 },
        { q: '1 + 1/2 + 1/4 + … = ?', o: ['∞', '1.5', '2', '4'], a: 2 }
      ] },
    { id: 'a10', sec: 'algebra', icon: 'log',
      title: L('Ko‘rsatkichli va logarifmik funksiyalar', 'Показательная и логарифмическая функции', 'Exponential and logarithmic functions'),
      theory: L(
        '<p><b>log<sub>a</sub>b</b> — <i>b</i> sonini hosil qilish uchun <i>a</i> ni ko‘tarish kerak bo‘lgan daraja: log₂8 = 3, chunki 2³ = 8. Shartlar: <i>a</i> &gt; 0, <i>a</i> ≠ 1, <i>b</i> &gt; 0.</p><p><i>y</i> = <i>a</i><sup>x</sup> va <i>y</i> = log<sub>a</sub><i>x</i> o‘zaro teskari funksiyalar — grafiklari <i>y</i> = <i>x</i> to‘g‘ri chizig‘iga nisbatan simmetrik. Muhim asoslar: <i>e</i> ≈ 2.718 (natural logarifm ln) va 10 (o‘nli logarifm lg).</p>',
        '<p><b>log<sub>a</sub>b</b> — показатель степени, в которую нужно возвести <i>a</i>, чтобы получить <i>b</i>: log₂8 = 3, так как 2³ = 8. Условия: <i>a</i> &gt; 0, <i>a</i> ≠ 1, <i>b</i> &gt; 0.</p><p><i>y</i> = <i>a</i><sup>x</sup> и <i>y</i> = log<sub>a</sub><i>x</i> — взаимно обратные функции, их графики симметричны относительно прямой <i>y</i> = <i>x</i>. Важные основания: <i>e</i> ≈ 2.718 (натуральный логарифм ln) и 10 (десятичный lg).</p>',
        '<p><b>log<sub>a</sub>b</b> is the power you raise <i>a</i> to in order to get <i>b</i>: log₂8 = 3 because 2³ = 8. Conditions: <i>a</i> &gt; 0, <i>a</i> ≠ 1, <i>b</i> &gt; 0.</p><p><i>y</i> = <i>a</i><sup>x</sup> and <i>y</i> = log<sub>a</sub><i>x</i> are inverse functions — their graphs are mirror images in the line <i>y</i> = <i>x</i>. Key bases: <i>e</i> ≈ 2.718 (natural log ln) and 10 (common log lg).</p>'),
      formulas: [['log_a(bc)', 'log_a b + log_a c'], ['log_a(b/c)', 'log_a b − log_a c'], ['log_a(bⁿ)', 'n·log_a b'], ['log_a b', 'ln b / ln a'], ['a^(log_a b)', 'b']],
      example: { q: '2ˣ = 32', steps: ['32 = 2⁵', '2ˣ = 2⁵', '<b>x = 5</b>'] },
      widget: { type: 'plot', fns: ['2^x', 'ln(x)/ln(2)', 'x'] },
      solve: '2^x = 32',
      quiz: [
        { q: 'log₃81 = ?', o: ['3', '4', '27', '9'], a: 1 },
        { q: 'lg 1000 = ?', o: ['100', '3', '10', '30'], a: 1 },
        { q: 'log₂3 + log₂(4/3) = ?', o: ['1', '2', 'log₂7', '3'], a: 1 }
      ] },
    { id: 'a11', sec: 'algebra', icon: 'sin',
      title: L('Trigonometriya asoslari', 'Основы тригонометрии', 'Trigonometry basics'),
      theory: L(
        '<p>To‘g‘ri burchakli uchburchakda: sin α = qarshi katet / gipotenuza, cos α = yopishgan katet / gipotenuza, tg α = sin α / cos α.</p><p>Birlik aylanada α burchakka mos nuqtaning koordinatalari (cos α; sin α). Shuning uchun <b>sin²α + cos²α = 1</b>. Radian: 180° = π rad. Sinus va kosinus grafiklari — davri 2π bo‘lgan to‘lqinlar.</p>',
        '<p>В прямоугольном треугольнике: sin α = противолежащий катет / гипотенуза, cos α = прилежащий катет / гипотенуза, tg α = sin α / cos α.</p><p>На единичной окружности точка, соответствующая углу α, имеет координаты (cos α; sin α). Поэтому <b>sin²α + cos²α = 1</b>. Радиан: 180° = π рад. Графики синуса и косинуса — волны с периодом 2π.</p>',
        '<p>In a right triangle: sin α = opposite / hypotenuse, cos α = adjacent / hypotenuse, tan α = sin α / cos α.</p><p>On the unit circle the point at angle α is (cos α; sin α), so <b>sin²α + cos²α = 1</b>. Radians: 180° = π rad. Sine and cosine graphs are waves with period 2π.</p>'),
      formulas: [['sin²α + cos²α', '1'], ['sin 2α', '2 sin α cos α'], ['cos 2α', 'cos²α − sin²α'], ['sin 30°', '1/2'], ['sin 45°', '√2/2'], ['sin 60°', '√3/2']],
      example: { q: L('sin α = 3/5, α o‘tkir. cos α = ?', 'sin α = 3/5, α острый. cos α = ?', 'sin α = 3/5, α acute. cos α = ?'), steps: ['cos²α = 1 − 9/25 = 16/25', '<b>cos α = 4/5</b>'] },
      widget: { type: 'plot', fns: ['sin(x)', 'cos(x)', 'a*sin(x)'] },
      quiz: [
        { q: 'cos 60° = ?', o: ['√3/2', '1/2', '1', '0'], a: 1 },
        { q: 'tg 45° = ?', o: ['0', '√3', '1', '√2/2'], a: 2 },
        { q: L('sin x funksiyaning davri:', 'Период функции sin x:', 'Period of sin x:'), o: ['π', '2π', 'π/2', '360'], a: 1 }
      ] },

    // ===================== GEOMETRIYA =====================
    { id: 'g1', sec: 'geometry', icon: '∠',
      title: L('Asosiy tushunchalar: nuqta, to‘g‘ri chiziq, burchak', 'Основные понятия: точка, прямая, угол', 'Points, lines and angles'),
      theory: L(
        '<p>Geometriyaning asosiy tushunchalari — <b>nuqta</b>, <b>to‘g‘ri chiziq</b> va <b>tekislik</b> — ta’riflanmaydi, ular aksiomalar orqali tavsiflanadi. Masalan: ikki nuqtadan faqat bitta to‘g‘ri chiziq o‘tadi.</p><p>Burchak turlari: o‘tkir (&lt; 90°), to‘g‘ri (= 90°), o‘tmas (90°…180°), yoyiq (180°). <b>Qo‘shni</b> burchaklar yig‘indisi 180°, <b>vertikal</b> burchaklar teng. Ikki parallel to‘g‘ri chiziqni kesuvchi kesganda ichki almashinuvchi burchaklar teng.</p>',
        '<p>Основные понятия геометрии — <b>точка</b>, <b>прямая</b> и <b>плоскость</b> — не определяются, а описываются аксиомами. Например: через две точки проходит ровно одна прямая.</p><p>Виды углов: острый (&lt; 90°), прямой (= 90°), тупой (90°…180°), развёрнутый (180°). Сумма <b>смежных</b> углов 180°, <b>вертикальные</b> углы равны. При пересечении двух параллельных прямых секущей накрест лежащие углы равны.</p>',
        '<p>The basic notions — <b>point</b>, <b>line</b> and <b>plane</b> — are not defined but described by axioms, e.g. exactly one line passes through two points.</p><p>Angles: acute (&lt; 90°), right (= 90°), obtuse (90°…180°), straight (180°). <b>Adjacent</b> (supplementary) angles sum to 180° and <b>vertical</b> angles are equal. A transversal of two parallel lines makes equal alternate interior angles.</p>'),
      formulas: [[L('Qo‘shni burchaklar', 'Смежные углы', 'Supplementary'), 'α + β = 180°'], [L('Vertikal burchaklar', 'Вертикальные углы', 'Vertical'), 'α = β'], ['1 rad', '180°/π ≈ 57.3°']],
      example: { q: L('Qo‘shni burchaklardan biri ikkinchisidan 40° katta. Burchaklarni toping.', 'Один из смежных углов на 40° больше другого. Найдите углы.', 'One supplementary angle is 40° larger than the other. Find them.'), steps: ['x + (x + 40°) = 180°', '2x = 140°', '<b>70°, 110°</b>'] },
      widget: { type: 'geo', mode: 'coord' },
      quiz: [
        { q: L('Vertikal burchaklardan biri 35°. Ikkinchisi:', 'Один из вертикальных углов 35°. Второй:', 'One vertical angle is 35°. The other:'), o: ['145°', '35°', '55°', '70°'], a: 1 },
        { q: L('Qo‘shni burchaklardan biri 125°. Ikkinchisi:', 'Один из смежных углов 125°. Второй:', 'One supplementary angle is 125°. The other:'), o: ['55°', '65°', '125°', '235°'], a: 0 }
      ] },
    { id: 'g2', sec: 'geometry', icon: '△',
      title: L('Uchburchaklar', 'Треугольники', 'Triangles'),
      theory: L(
        '<p>Uchburchak burchaklari yig‘indisi har doim <b>180°</b>. Har bir tomon qolgan ikki tomon yig‘indisidan kichik (<b>uchburchak tengsizligi</b>). Katta tomon qarshisida katta burchak yotadi.</p><p>Uchburchaklar tengligi alomatlari: <b>TBT</b> (ikki tomon va ular orasidagi burchak), <b>BTB</b>, <b>TTT</b>. Chizmada uchlarni sudrab, burchaklar yig‘indisi doim 180° ekanini tekshiring.</p>',
        '<p>Сумма углов треугольника всегда <b>180°</b>. Каждая сторона меньше суммы двух других (<b>неравенство треугольника</b>). Против большей стороны лежит больший угол.</p><p>Признаки равенства треугольников: <b>СУС</b> (две стороны и угол между ними), <b>УСУ</b>, <b>ССС</b>. Перетаскивайте вершины на чертеже и убедитесь, что сумма углов всегда 180°.</p>',
        '<p>The angles of a triangle always sum to <b>180°</b>. Each side is shorter than the sum of the other two (<b>triangle inequality</b>), and the larger side faces the larger angle.</p><p>Congruence tests: <b>SAS</b>, <b>ASA</b>, <b>SSS</b>. Drag the vertices in the sketch and check that the angle sum is always 180°.</p>'),
      formulas: [['α + β + γ', '180°'], ['S', '½·a·hₐ'], ['S', '½·a·b·sin γ'], [L('Geron', 'Герон', 'Heron'), '√(p(p−a)(p−b)(p−c))'], [L('Sinuslar t.', 'Т. синусов', 'Law of sines'), 'a/sin α = 2R'], [L('Kosinuslar t.', 'Т. косинусов', 'Law of cosines'), 'c² = a² + b² − 2ab·cos γ']],
      example: { q: L('Tomonlari 13, 14, 15 bo‘lgan uchburchak yuzi', 'Площадь треугольника со сторонами 13, 14, 15', 'Area of a triangle with sides 13, 14, 15'), steps: ['p = 21', 'S = √(21·8·7·6) = √7056', '<b>S = 84</b>'] },
      widget: { type: 'geo', mode: 'triangle', opts: { circum: false } },
      quiz: [
        { q: L('Uchburchakning ikki burchagi 50° va 70°. Uchinchisi:', 'Два угла треугольника 50° и 70°. Третий:', 'Two angles are 50° and 70°. The third:'), o: ['50°', '60°', '70°', '80°'], a: 1 },
        { q: L('Qaysi uchlik uchburchak tomonlari bo‘la oladi?', 'Какая тройка может быть сторонами треугольника?', 'Which triple can be a triangle’s sides?'), o: ['1, 2, 3', '2, 3, 6', '3, 4, 5', '1, 1, 3'], a: 2 }
      ] },
    { id: 'g3', sec: 'geometry', icon: 'a²+b²',
      title: L('Pifagor teoremasi', 'Теорема Пифагора', 'Pythagorean theorem'),
      theory: L(
        '<p>To‘g‘ri burchakli uchburchakda gipotenuza kvadrati katetlar kvadratlari yig‘indisiga teng: <b>c² = a² + b²</b>. Teskari teorema ham o‘rinli: agar c² = a² + b² bo‘lsa, uchburchak to‘g‘ri burchakli.</p><p>Butun sonli “Pifagor uchliklari”: (3, 4, 5), (5, 12, 13), (8, 15, 17), (7, 24, 25). Qadimgi Misrda 3–4–5 tugunli arqon bilan to‘g‘ri burchak yasashgan. Chizmada to‘rga yopishishni yoqib, uchburchakni 3–4–5 shaklida yasab ko‘ring.</p>',
        '<p>В прямоугольном треугольнике квадрат гипотенузы равен сумме квадратов катетов: <b>c² = a² + b²</b>. Верна и обратная теорема: если c² = a² + b², треугольник прямоугольный.</p><p>Целочисленные «пифагоровы тройки»: (3, 4, 5), (5, 12, 13), (8, 15, 17), (7, 24, 25). В Древнем Египте прямой угол строили верёвкой с узлами 3–4–5. Включите привязку к сетке и постройте треугольник 3–4–5.</p>',
        '<p>In a right triangle the square of the hypotenuse equals the sum of the squares of the legs: <b>c² = a² + b²</b>. The converse also holds: if c² = a² + b², the triangle is right-angled.</p><p>Integer “Pythagorean triples”: (3, 4, 5), (5, 12, 13), (8, 15, 17), (7, 24, 25). Ancient Egyptians made right angles with a 3–4–5 knotted rope. Turn on grid snapping and build a 3–4–5 triangle.</p>'),
      formulas: [['c²', 'a² + b²'], ['c', '√(a² + b²)'], ['h (c ga)', 'ab / c'], [L('Kvadrat diagonali', 'Диагональ квадрата', 'Square diagonal'), 'a√2']],
      example: { q: L('Katetlar 6 va 8. Gipotenuza?', 'Катеты 6 и 8. Гипотенуза?', 'Legs 6 and 8. Hypotenuse?'), steps: ['c² = 36 + 64 = 100', '<b>c = 10</b>'] },
      widget: { type: 'geo', mode: 'triangle', opts: { snap: true, circum: false }, pts: [{ x: -3, y: -2 }, { x: 1, y: -2 }, { x: -3, y: 1 }] },
      quiz: [
        { q: L('Katetlar 5 va 12. Gipotenuza:', 'Катеты 5 и 12. Гипотенуза:', 'Legs 5 and 12. Hypotenuse:'), o: ['17', '13', '√119', '15'], a: 1 },
        { q: L('Tomoni 1 bo‘lgan kvadrat diagonali:', 'Диагональ квадрата со стороной 1:', 'Diagonal of a unit square:'), o: ['2', '1', '√2', '√3'], a: 2 }
      ] },
    { id: 'g4', sec: 'geometry', icon: '⊙',
      title: L('Uchburchakning ajoyib nuqtalari', 'Замечательные точки треугольника', 'Triangle centres'),
      theory: L(
        '<p><b>Medianalar</b> bitta nuqtada — og‘irlik markazi G da kesishadi va u har bir medianani uchidan hisoblaganda 2 : 1 nisbatda bo‘ladi. <b>Bissektrisalar</b> ichki chizilgan aylana markazi I da, <b>tomonlarning o‘rta perpendikulyarlari</b> tashqi chizilgan aylana markazi O da, <b>balandliklar</b> ortomarkaz H da kesishadi.</p><p>Hayratlanarli fakt: O, G va H har doim bitta to‘g‘ri chiziqda — <b>Eyler chizig‘ida</b> yotadi va HG = 2·GO. Chizmada barchasini yoqib, uchlarni sudrang!</p>',
        '<p><b>Медианы</b> пересекаются в центре тяжести G, который делит каждую медиану в отношении 2 : 1 от вершины. <b>Биссектрисы</b> пересекаются в центре вписанной окружности I, <b>серединные перпендикуляры</b> — в центре описанной окружности O, <b>высоты</b> — в ортоцентре H.</p><p>Удивительный факт: O, G и H всегда лежат на одной прямой — <b>прямой Эйлера</b>, причём HG = 2·GO. Включите всё на чертеже и двигайте вершины!</p>',
        '<p>The <b>medians</b> meet at the centroid G, which divides each median 2 : 1 from the vertex. The <b>angle bisectors</b> meet at the incentre I, the <b>perpendicular bisectors</b> at the circumcentre O, and the <b>altitudes</b> at the orthocentre H.</p><p>Remarkably, O, G and H always lie on one line — the <b>Euler line</b> — with HG = 2·GO. Switch everything on in the sketch and drag the vertices!</p>'),
      formulas: [['R', 'abc / 4S'], ['r', 'S / p'], ['AG : GM', '2 : 1'], ['HG', '2·GO']],
      example: { q: L('Teng tomonli uchburchak (a = 6): R va r', 'Равносторонний треугольник (a = 6): R и r', 'Equilateral triangle (a = 6): R and r'), steps: ['R = a/√3 = 2√3 ≈ 3.46', 'r = a/(2√3) = √3 ≈ 1.73', 'R = 2r'] },
      widget: { type: 'geo', mode: 'triangle', opts: { median: true, alt: true, circum: true, incircle: true, euler: true } },
      quiz: [
        { q: L('Medianalar kesishish nuqtasi medianani qanday nisbatda bo‘ladi?', 'В каком отношении точка пересечения медиан делит медиану?', 'In what ratio does the centroid divide a median?'), o: ['1 : 1', '2 : 1', '3 : 1', '3 : 2'], a: 1 },
        { q: L('To‘g‘ri burchakli uchburchakda tashqi aylana markazi qayerda?', 'Где центр описанной окружности прямоугольного треугольника?', 'Where is the circumcentre of a right triangle?'), o: [L('To‘g‘ri burchak uchida', 'В вершине прямого угла', 'At the right angle'), L('Gipotenuza o‘rtasida', 'В середине гипотенузы', 'At the hypotenuse midpoint'), L('Uchburchak ichida', 'Внутри треугольника', 'Inside the triangle'), L('Tashqarida', 'Снаружи', 'Outside')], a: 1 }
      ] },
    { id: 'g5', sec: 'geometry', icon: '▱',
      title: L('To‘rtburchaklar', 'Четырёхугольники', 'Quadrilaterals'),
      theory: L(
        '<p>Qavariq to‘rtburchak burchaklari yig‘indisi <b>360°</b>. <b>Parallelogramm</b> — qarama-qarshi tomonlari parallel; diagonallari kesishish nuqtasida teng ikkiga bo‘linadi. <b>To‘g‘ri to‘rtburchak</b> — burchaklari to‘g‘ri; <b>romb</b> — tomonlari teng, diagonallari perpendikulyar; <b>kvadrat</b> — ikkalasi ham.</p><p><b>Trapetsiya</b> — faqat bir juft tomoni parallel. Chizmada uchlarni sudrab, platforma to‘rtburchak turini avtomatik aniqlashini kuzating.</p>',
        '<p>Сумма углов выпуклого четырёхугольника <b>360°</b>. <b>Параллелограмм</b> — противоположные стороны параллельны; диагонали делятся точкой пересечения пополам. <b>Прямоугольник</b> — все углы прямые; <b>ромб</b> — все стороны равны, диагонали перпендикулярны; <b>квадрат</b> — и то, и другое.</p><p><b>Трапеция</b> — параллельна только одна пара сторон. Двигайте вершины и смотрите, как платформа автоматически определяет вид четырёхугольника.</p>',
        '<p>A convex quadrilateral’s angles sum to <b>360°</b>. A <b>parallelogram</b> has opposite sides parallel and diagonals that bisect each other. A <b>rectangle</b> has right angles, a <b>rhombus</b> equal sides and perpendicular diagonals, and a <b>square</b> both.</p><p>A <b>trapezoid</b> has exactly one pair of parallel sides. Drag the vertices and watch the platform identify the type automatically.</p>'),
      formulas: [[L('Parallelogramm', 'Параллелограмм', 'Parallelogram'), 'S = a·h'], [L('Romb', 'Ромб', 'Rhombus'), 'S = d₁d₂ / 2'], [L('Trapetsiya', 'Трапеция', 'Trapezoid'), 'S = (a + b)·h / 2'], [L('To‘g‘ri to‘rtburchak', 'Прямоугольник', 'Rectangle'), 'd² = a² + b²']],
      example: { q: L('Trapetsiya asoslari 6 va 10, balandligi 4. Yuzi?', 'Основания трапеции 6 и 10, высота 4. Площадь?', 'Trapezoid bases 6 and 10, height 4. Area?'), steps: ['S = (6 + 10)·4 / 2', '<b>S = 32</b>'] },
      widget: { type: 'geo', mode: 'quad' },
      quiz: [
        { q: L('Rombning diagonallari 6 va 8. Yuzi:', 'Диагонали ромба 6 и 8. Площадь:', 'Rhombus diagonals 6 and 8. Area:'), o: ['48', '24', '14', '28'], a: 1 },
        { q: L('Parallelogrammning bir burchagi 70°. Qo‘shni burchagi:', 'Один угол параллелограмма 70°. Соседний угол:', 'One angle of a parallelogram is 70°. An adjacent angle:'), o: ['70°', '20°', '110°', '290°'], a: 2 }
      ] },
    { id: 'g6', sec: 'geometry', icon: '○',
      title: L('Aylana va doira', 'Окружность и круг', 'Circles'),
      theory: L(
        '<p>Aylana — markazdan bir xil <i>R</i> masofada yotgan nuqtalar to‘plami; doira — aylana bilan chegaralangan tekislik qismi. <b>π ≈ 3.14159</b> — aylana uzunligining diametrga nisbati.</p><p><b>Ichki chizilgan burchak</b> o‘zi tiralgan yoyga mos markaziy burchakning yarmiga teng. Shuning uchun diametrga tiralgan ichki burchak doim 90°. Chizmada M nuqtani aylana bo‘ylab suring — burchak o‘zgarmaydi!</p>',
        '<p>Окружность — множество точек на одинаковом расстоянии <i>R</i> от центра; круг — часть плоскости, ограниченная окружностью. <b>π ≈ 3.14159</b> — отношение длины окружности к диаметру.</p><p><b>Вписанный угол</b> равен половине центрального угла, опирающегося на ту же дугу. Поэтому угол, опирающийся на диаметр, всегда 90°. Двигайте точку M по окружности — угол не меняется!</p>',
        '<p>A circle is the set of points at distance <i>R</i> from a centre; a disc is the region it bounds. <b>π ≈ 3.14159</b> is the ratio of circumference to diameter.</p><p>An <b>inscribed angle</b> is half the central angle on the same arc, so an angle subtending a diameter is always 90°. Slide M around the circle — the angle stays the same!</p>'),
      formulas: [['C', '2πR'], ['S', 'πR²'], [L('Yoy uzunligi', 'Длина дуги', 'Arc length'), 'l = πRα / 180°'], [L('Sektor yuzi', 'Площадь сектора', 'Sector area'), 'S = πR²α / 360°'], [L('Ichki burchak', 'Вписанный угол', 'Inscribed angle'), 'φ = ∠AOB / 2']],
      example: { q: L('R = 5. Aylana uzunligi va doira yuzi', 'R = 5. Длина окружности и площадь круга', 'R = 5. Circumference and area'), steps: ['C = 2π·5 = 10π ≈ 31.42', 'S = π·25 = 25π ≈ 78.54'] },
      widget: { type: 'geo', mode: 'circle' },
      quiz: [
        { q: L('Markaziy burchak 100°. Shu yoyga tiralgan ichki burchak:', 'Центральный угол 100°. Вписанный угол на ту же дугу:', 'Central angle 100°. Inscribed angle on the same arc:'), o: ['100°', '200°', '50°', '80°'], a: 2 },
        { q: L('Diametri 10 bo‘lgan doira yuzi:', 'Площадь круга диаметром 10:', 'Area of a disc with diameter 10:'), o: ['100π', '25π', '10π', '20π'], a: 1 }
      ] },
    { id: 'g7', sec: 'geometry', icon: '(x;y)',
      title: L('Koordinatalar metodi', 'Метод координат', 'Coordinate geometry'),
      theory: L(
        '<p>Dekart koordinatalarida har bir nuqta (<i>x</i>; <i>y</i>) sonlar jufti bilan beriladi. Bu geometrik masalalarni algebra yordamida yechish imkonini beradi.</p><p>Masofa formulasi Pifagor teoremasidan kelib chiqadi. Aylana tenglamasi (<i>x</i> − <i>a</i>)² + (<i>y</i> − <i>b</i>)² = <i>R</i>² — markazdan <i>R</i> masofadagi barcha nuqtalar. Chizmada A va B nuqtalarni surib, formulalar qanday ishlashini ko‘ring.</p>',
        '<p>В декартовых координатах каждая точка задаётся парой чисел (<i>x</i>; <i>y</i>). Это позволяет решать геометрические задачи алгебраически.</p><p>Формула расстояния следует из теоремы Пифагора. Уравнение окружности (<i>x</i> − <i>a</i>)² + (<i>y</i> − <i>b</i>)² = <i>R</i>² — все точки на расстоянии <i>R</i> от центра. Двигайте точки A и B и смотрите, как работают формулы.</p>',
        '<p>In Cartesian coordinates every point is a pair (<i>x</i>; <i>y</i>), letting us solve geometry problems with algebra.</p><p>The distance formula comes from Pythagoras. The circle equation (<i>x</i> − <i>a</i>)² + (<i>y</i> − <i>b</i>)² = <i>R</i>² describes all points at distance <i>R</i> from the centre. Move A and B to see the formulas at work.</p>'),
      formulas: [['AB', '√((x₂−x₁)² + (y₂−y₁)²)'], ['M', '((x₁+x₂)/2; (y₁+y₂)/2)'], ['k', '(y₂ − y₁)/(x₂ − x₁)'], [L('Aylana', 'Окружность', 'Circle'), '(x − a)² + (y − b)² = R²']],
      example: { q: 'A(1; 2), B(4; 6)', steps: ['AB = √(9 + 16) = 5', 'M(2.5; 4)', 'k = 4/3'] },
      widget: { type: 'geo', mode: 'coord' },
      quiz: [
        { q: L('O(0; 0) va P(6; 8) orasidagi masofa:', 'Расстояние между O(0; 0) и P(6; 8):', 'Distance from O(0; 0) to P(6; 8):'), o: ['14', '10', '48', '√14'], a: 1 },
        { q: L('A(−2; 4), B(6; 0) o‘rtasi:', 'Середина A(−2; 4), B(6; 0):', 'Midpoint of A(−2; 4), B(6; 0):'), o: ['(4; 4)', '(2; 2)', '(8; −4)', '(−4; 2)'], a: 1 }
      ] },
    { id: 'g8', sec: 'geometry', icon: '⬡',
      title: L('Ko‘pyoqlar: prizma va piramida', 'Многогранники: призма и пирамида', 'Polyhedra: prisms and pyramids'),
      theory: L(
        '<p><b>Prizma</b> — ikki teng va parallel asosli, yon yoqlari parallelogramm bo‘lgan ko‘pyoq. Hajmi asos yuzining balandlikka ko‘paytmasi. <b>Piramida</b> — asosi ko‘pburchak, yon yoqlari umumiy uchga ega uchburchaklar; hajmi xuddi shu asos va balandlikdagi prizmaning <b>uchdan biri</b>.</p><p>Eyler formulasi: har qanday qavariq ko‘pyoq uchun <b>U − Q + Y = 2</b> (uchlar − qirralar + yoqlar). Kub uchun: 8 − 12 + 6 = 2. “Yoyilma”ni yoqib, jism qanday qog‘ozdan yasalishini ko‘ring.</p>',
        '<p><b>Призма</b> — многогранник с двумя равными параллельными основаниями и боковыми гранями-параллелограммами. Объём — площадь основания на высоту. <b>Пирамида</b> — основание многоугольник, боковые грани — треугольники с общей вершиной; объём — <b>треть</b> объёма призмы с тем же основанием и высотой.</p><p>Формула Эйлера: для любого выпуклого многогранника <b>В − Р + Г = 2</b>. Для куба: 8 − 12 + 6 = 2. Включите «Развёртку», чтобы увидеть, как тело склеивается из бумаги.</p>',
        '<p>A <b>prism</b> has two congruent parallel bases and parallelogram side faces; its volume is base area × height. A <b>pyramid</b> has a polygon base and triangular faces meeting at an apex; its volume is <b>one third</b> of the prism with the same base and height.</p><p>Euler’s formula: for every convex polyhedron <b>V − E + F = 2</b>. For a cube: 8 − 12 + 6 = 2. Turn on “Net” to see how the solid folds from paper.</p>'),
      formulas: [[L('Prizma', 'Призма', 'Prism'), 'V = S·h'], [L('Piramida', 'Пирамида', 'Pyramid'), 'V = ⅓·S·h'], [L('Kub', 'Куб', 'Cube'), 'V = a³, d = a√3'], [L('Parallelepiped', 'Параллелепипед', 'Cuboid'), 'd² = a² + b² + c²'], ['Euler', 'V − E + F = 2']],
      example: { q: L('Asosi 6×6, balandligi 10 bo‘lgan piramida hajmi', 'Объём пирамиды с основанием 6×6 и высотой 10', 'Volume of a pyramid with 6×6 base and height 10'), steps: ['S = 36', 'V = ⅓·36·10', '<b>V = 120</b>'] },
      widget: { type: 'solid', kind: 'pyramid' },
      quiz: [
        { q: L('Qirrasi 3 bo‘lgan kub hajmi:', 'Объём куба с ребром 3:', 'Volume of a cube with edge 3:'), o: ['9', '27', '54', '18'], a: 1 },
        { q: L('Uchburchakli prizmaning nechta qirrasi bor?', 'Сколько рёбер у треугольной призмы?', 'How many edges does a triangular prism have?'), o: ['6', '8', '9', '12'], a: 2 }
      ] },
    { id: 'g9', sec: 'geometry', icon: '◉',
      title: L('Aylanish jismlari', 'Тела вращения', 'Solids of revolution'),
      theory: L(
        '<p>To‘g‘ri to‘rtburchakni tomoni atrofida aylantirsak <b>silindr</b>, to‘g‘ri burchakli uchburchakni katet atrofida aylantirsak <b>konus</b>, yarim doirani diametri atrofida aylantirsak <b>shar</b> hosil bo‘ladi.</p><p>Arximed kashfiyoti: silindrga ichki chizilgan shar hajmi silindr hajmining <b>2/3</b> qismiga teng. U bu natijadan shunchalik faxrlanganki, qabr toshiga shar va silindr tasvirini o‘yishni so‘ragan.</p>',
        '<p>Вращая прямоугольник вокруг стороны, получаем <b>цилиндр</b>; прямоугольный треугольник вокруг катета — <b>конус</b>; полукруг вокруг диаметра — <b>шар</b>.</p><p>Открытие Архимеда: объём шара, вписанного в цилиндр, составляет <b>2/3</b> объёма цилиндра. Он так гордился этим, что завещал высечь шар и цилиндр на своём надгробии.</p>',
        '<p>Rotating a rectangle about a side gives a <b>cylinder</b>, a right triangle about a leg gives a <b>cone</b>, and a semicircle about its diameter gives a <b>sphere</b>.</p><p>Archimedes found that a sphere inscribed in a cylinder has <b>2/3</b> of the cylinder’s volume — he was so proud that he asked for a sphere and cylinder on his tombstone.</p>'),
      formulas: [[L('Silindr', 'Цилиндр', 'Cylinder'), 'V = πr²h, S = 2πr(r + h)'], [L('Konus', 'Конус', 'Cone'), 'V = ⅓πr²h, S = πr(r + l)'], [L('Shar', 'Шар', 'Sphere'), 'V = ⁴⁄₃πr³, S = 4πr²']],
      example: { q: L('r = 3, h = 4 konus', 'Конус r = 3, h = 4', 'Cone r = 3, h = 4'), steps: ['l = √(9 + 16) = 5', 'V = ⅓π·9·4 = 12π', 'S = π·3·(3 + 5) = 24π'] },
      widget: { type: 'solid', kind: 'cone' },
      quiz: [
        { q: L('Radiusi 3 bo‘lgan shar sirti:', 'Площадь поверхности шара радиуса 3:', 'Surface area of a sphere of radius 3:'), o: ['12π', '36π', '9π', '27π'], a: 1 },
        { q: L('Bir xil r va h li konus hajmi silindr hajmining:', 'Объём конуса с теми же r и h составляет от цилиндра:', 'A cone with the same r and h has what fraction of the cylinder’s volume?'), o: ['1/2', '1/3', '2/3', '1/4'], a: 1 }
      ] }
  ];

  root.LESSONS = LESSONS;
})(this);
