// Nuvemath — formulalar to‘plami (5–11-sinf): algebra, analiz, ehtimollik va geometriya.
// Har bir yozuv: f(nomi, formula HTML, sinf, darslik mavzusi, kalkulyator, izoh).
// Kalkulyator: { v: ['a', 'b'], r: function (a, b) { return natija yoki [[nom, qiymat], ...]; } }
(function (root) {
  'use strict';
  function L(uz, ru, en) { return { uz: uz, ru: ru, en: en }; }
  // stack-kasr va ildiz uchun HTML yordamchilar
  function fr(n, d) { return '<span class="fx-fr"><span>' + n + '</span><span>' + d + '</span></span>'; }
  function rt(x, n) { return '<span class="fx-rt">' + (n ? '<sup>' + n + '</sup>' : '') + '√<span>' + x + '</span></span>'; }
  function vec(x) { return '<var class="vec">' + x + '</var>'; }
  var D2R = Math.PI / 180, CATS = [], cur = null;
  function cat(id, ic, group, t) { cur = { id: id, ic: ic, group: group, t: t, items: [] }; CATS.push(cur); }
  function f(nm, fx, g, ln, calc, note) { cur.items.push({ n: nm, f: fx, g: g, ln: ln || null, c: calc || null, note: note || null }); }

  // ======================= ALGEBRA =======================
  cat('ar', '🔢', 'alg', L('Sonlar, kasrlar va foizlar', 'Числа, дроби и проценты', 'Numbers, fractions and percentages'));
  f(L('Taqsimot qonuni', 'Распределительный закон', 'Distributive law'), 'a(b + c) = ab + ac', 5, 'g5p1-t5');
  f(L('EKUB va EKUK bog‘lanishi', 'Связь НОД и НОК', 'GCD and LCM'), 'EKUB(a; b) · EKUK(a; b) = a · b', 7, 'g7p1-t2', { v: ['a', 'b'], r: function (a, b) { function g(x, y) { x = Math.abs(Math.round(x)); y = Math.abs(Math.round(y)); while (y) { var t = y; y = x % y; x = t; } return x; } var d = g(a, b); return [[L('EKUB', 'НОД', 'GCD'), d], [L('EKUK', 'НОК', 'LCM'), d ? Math.abs(a * b) / d : 0]]; } });
  f(L('Kasrlarni qo‘shish', 'Сложение дробей', 'Adding fractions'), fr('a', 'b') + ' + ' + fr('c', 'd') + ' = ' + fr('ad + bc', 'bd'), 5, 'g5p1-t9');
  f(L('Kasrlarni ko‘paytirish va bo‘lish', 'Умножение и деление дробей', 'Multiplying and dividing fractions'), fr('a', 'b') + ' · ' + fr('c', 'd') + ' = ' + fr('ac', 'bd') + ',  ' + fr('a', 'b') + ' : ' + fr('c', 'd') + ' = ' + fr('ad', 'bc'), 6, 'g6p1-t7');
  f(L('Proporsiyaning asosiy xossasi', 'Основное свойство пропорции', 'Property of a proportion'), fr('a', 'b') + ' = ' + fr('c', 'd') + '  ⇒  ad = bc', 6, 'g6p1-t9', { v: ['a', 'b', 'c'], r: function (a, b, c) { return [['d', c * b / a]]; } }, L('Noma’lum had: d = bc / a', 'Неизвестный член: d = bc / a', 'Unknown term: d = bc / a'));
  f(L('Sonning foizi', 'Процент от числа', 'Percentage of a number'), 'p% · a = ' + fr('a · p', '100'), 5, 'g5p2-t8', { v: ['a', 'p'], r: function (a, p) { return a * p / 100; } });
  f(L('Foizi bo‘yicha sonni topish', 'Число по его проценту', 'Number from its percentage'), 'a = ' + fr('b · 100', 'p'), 6, 'g6p1-t12', { v: ['b', 'p'], r: function (b, p) { return b * 100 / p; } });
  f(L('Foizga o‘zgarish', 'Изменение на процент', 'Percentage change'), 'a<sub>yangi</sub> = a · (1 ± ' + fr('p', '100') + ')', 6, 'g6p1-t13', { v: ['a', 'p'], r: function (a, p) { return [['+p%', a * (1 + p / 100)], ['−p%', a * (1 - p / 100)]]; } });
  f(L('Murakkab foiz', 'Сложные проценты', 'Compound interest'), 'S = a · (1 + ' + fr('p', '100') + ')<sup>n</sup>', 10, 'g10p1-t15', { v: ['a', 'p', 'n'], r: function (a, p, n) { return a * Math.pow(1 + p / 100, n); } });
  f(L('O‘rta arifmetik', 'Среднее арифметическое', 'Arithmetic mean'), 'x̄ = ' + fr('x<sub>1</sub> + x<sub>2</sub> + … + x<sub>n</sub>', 'n'), 5, 'g5p2-t10');
  f(L('O‘rta geometrik', 'Среднее геометрическое', 'Geometric mean'), 'G = ' + rt('a · b'), 8, 'g8p1-t5', { v: ['a', 'b'], r: function (a, b) { return Math.sqrt(a * b); } });
  f(L('Sonning moduli', 'Модуль числа', 'Absolute value'), L('|a| = a, agar a ≥ 0;  |a| = −a, agar a &lt; 0', '|a| = a, если a ≥ 0;  |a| = −a, если a &lt; 0', '|a| = a if a ≥ 0;  |a| = −a if a &lt; 0'), 7, 'g7p1-t4');
  f(L('Tezlik, masofa, vaqt', 'Скорость, расстояние, время', 'Speed, distance, time'), 's = v · t,  v = ' + fr('s', 't') + ',  t = ' + fr('s', 'v'), 6, 'g6p2-t1', { v: ['v', 't'], r: function (v, t) { return v * t; } });
  f(L('O‘rtacha tezlik', 'Средняя скорость', 'Average speed'), 'v<sub>o‘r</sub> = ' + fr('s<sub>1</sub> + s<sub>2</sub>', 't<sub>1</sub> + t<sub>2</sub>'), 6, 'g6p2-t3');
  f(L('Nisbiy xatolik', 'Относительная погрешность', 'Relative error'), 'ε = ' + fr('|x − a|', '|x|') + ' · 100%', 8, 'g8p1-t11');

  cat('pw', 'xⁿ', 'alg', L('Daraja va ildiz', 'Степени и корни', 'Powers and roots'));
  f(L('Darajalarni ko‘paytirish', 'Умножение степеней', 'Multiplying powers'), 'a<sup>m</sup> · a<sup>n</sup> = a<sup>m + n</sup>', 7, 'g7p2-t2');
  f(L('Darajalarni bo‘lish', 'Деление степеней', 'Dividing powers'), 'a<sup>m</sup> : a<sup>n</sup> = a<sup>m − n</sup>', 7, 'g7p2-t2');
  f(L('Darajani darajaga ko‘tarish', 'Возведение степени в степень', 'Power of a power'), '(a<sup>m</sup>)<sup>n</sup> = a<sup>mn</sup>', 7, 'g7p2-t2');
  f(L('Ko‘paytma va bo‘linma darajasi', 'Степень произведения и частного', 'Power of a product and quotient'), '(ab)<sup>n</sup> = a<sup>n</sup>b<sup>n</sup>,  (' + fr('a', 'b') + ')<sup>n</sup> = ' + fr('a<sup>n</sup>', 'b<sup>n</sup>'), 7, 'g7p2-t2');
  f(L('Nol va manfiy daraja', 'Нулевая и отрицательная степень', 'Zero and negative exponents'), 'a<sup>0</sup> = 1,  a<sup>−n</sup> = ' + fr('1', 'a<sup>n</sup>') + '  (a ≠ 0)', 8, 'g8p1-t6');
  f(L('Ratsional ko‘rsatkichli daraja', 'Степень с рациональным показателем', 'Rational exponent'), 'a<sup>m/n</sup> = ' + rt('a<sup>m</sup>', 'n'), 8, 'g8p1-t6', { v: ['a', 'm', 'n'], r: function (a, m, n) { return Math.pow(a, m / n); } });
  f(L('Ko‘paytmaning ildizi', 'Корень из произведения', 'Root of a product'), rt('ab') + ' = ' + rt('a') + ' · ' + rt('b') + '  (a, b ≥ 0)', 8, 'g8p1-t5');
  f(L('Bo‘linmaning ildizi', 'Корень из частного', 'Root of a quotient'), rt(fr('a', 'b')) + ' = ' + fr(rt('a'), rt('b')), 8, 'g8p1-t5');
  f(L('Kvadratning ildizi', 'Корень из квадрата', 'Square root of a square'), rt('a<sup>2</sup>') + ' = |a|,  (' + rt('a') + ')<sup>2</sup> = a', 8, 'g8p1-t5');
  f(L('Maxrajni irratsionallikdan qutqarish', 'Избавление от иррациональности', 'Rationalising the denominator'), fr('1', rt('a') + ' ± ' + rt('b')) + ' = ' + fr(rt('a') + ' ∓ ' + rt('b'), 'a − b'), 8, 'g8p1-t5');

  cat('sm', '(a+b)²', 'alg', L('Qisqa ko‘paytirish formulalari', 'Формулы сокращённого умножения', 'Special products'));
  f(L('Yig‘indining kvadrati', 'Квадрат суммы', 'Square of a sum'), '(a + b)<sup>2</sup> = a<sup>2</sup> + 2ab + b<sup>2</sup>', 7, 'g7p2-t7', { v: ['a', 'b'], r: function (a, b) { return (a + b) * (a + b); } });
  f(L('Ayirmaning kvadrati', 'Квадрат разности', 'Square of a difference'), '(a − b)<sup>2</sup> = a<sup>2</sup> − 2ab + b<sup>2</sup>', 7, 'g7p2-t7');
  f(L('Kvadratlar ayirmasi', 'Разность квадратов', 'Difference of squares'), 'a<sup>2</sup> − b<sup>2</sup> = (a − b)(a + b)', 7, 'g7p2-t8', { v: ['a', 'b'], r: function (a, b) { return a * a - b * b; } });
  f(L('Yig‘indining kubi', 'Куб суммы', 'Cube of a sum'), '(a + b)<sup>3</sup> = a<sup>3</sup> + 3a<sup>2</sup>b + 3ab<sup>2</sup> + b<sup>3</sup>', 7, 'g7p2-t9');
  f(L('Ayirmaning kubi', 'Куб разности', 'Cube of a difference'), '(a − b)<sup>3</sup> = a<sup>3</sup> − 3a<sup>2</sup>b + 3ab<sup>2</sup> − b<sup>3</sup>', 7, 'g7p2-t9');
  f(L('Kublar yig‘indisi', 'Сумма кубов', 'Sum of cubes'), 'a<sup>3</sup> + b<sup>3</sup> = (a + b)(a<sup>2</sup> − ab + b<sup>2</sup>)', 7, 'g7p2-t9');
  f(L('Kublar ayirmasi', 'Разность кубов', 'Difference of cubes'), 'a<sup>3</sup> − b<sup>3</sup> = (a − b)(a<sup>2</sup> + ab + b<sup>2</sup>)', 7, 'g7p2-t9');
  f(L('Uch had yig‘indisining kvadrati', 'Квадрат суммы трёх слагаемых', 'Square of a trinomial'), '(a + b + c)<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> + 2ab + 2bc + 2ac', 7, 'g7p2-t7');

  cat('eq', '=', 'alg', L('Tenglamalar', 'Уравнения', 'Equations'));
  f(L('Chiziqli tenglama', 'Линейное уравнение', 'Linear equation'), 'ax + b = 0  ⇒  x = −' + fr('b', 'a') + '  (a ≠ 0)', 7, 'g7p1-t12', { v: ['a', 'b'], r: function (a, b) { return -b / a; } });
  f(L('Diskriminant', 'Дискриминант', 'Discriminant'), 'D = b<sup>2</sup> − 4ac', 8, 'g8p1-t13', { v: ['a', 'b', 'c'], r: function (a, b, c) { return b * b - 4 * a * c; } }, L('D &gt; 0 — ikki ildiz, D = 0 — bitta, D &lt; 0 — haqiqiy ildiz yo‘q', 'D &gt; 0 — два корня, D = 0 — один, D &lt; 0 — нет действительных корней', 'D &gt; 0 — two roots, D = 0 — one, D &lt; 0 — no real roots'));
  f(L('Kvadrat tenglama ildizlari', 'Корни квадратного уравнения', 'Quadratic formula'), 'x<sub>1,2</sub> = ' + fr('−b ± ' + rt('D'), '2a'), 8, 'g8p1-t13', { v: ['a', 'b', 'c'], r: function (a, b, c) { var D = b * b - 4 * a * c; if (D < 0) return [['D', D], ['x', L('haqiqiy ildiz yo‘q', 'нет действительных корней', 'no real roots')]]; return [['D', D], ['x₁', (-b - Math.sqrt(D)) / (2 * a)], ['x₂', (-b + Math.sqrt(D)) / (2 * a)]]; } });
  f(L('Juft koeffitsiyentli formula', 'Формула для чётного b', 'Formula for even b'), 'b = 2k:  x<sub>1,2</sub> = ' + fr('−k ± ' + rt('k<sup>2</sup> − ac'), 'a'), 8, 'g8p1-t13');
  f(L('Keltirilgan kvadrat tenglama', 'Приведённое квадратное уравнение', 'Monic quadratic'), 'x<sup>2</sup> + px + q = 0:  x<sub>1,2</sub> = −' + fr('p', '2') + ' ± ' + rt('(' + fr('p', '2') + ')<sup>2</sup> − q'), 8, 'g8p1-t13');
  f(L('Viyet teoremasi', 'Теорема Виета', 'Vieta’s formulas'), 'x<sub>1</sub> + x<sub>2</sub> = −' + fr('b', 'a') + ',  x<sub>1</sub> · x<sub>2</sub> = ' + fr('c', 'a'), 8, 'g8p1-t14', { v: ['a', 'b', 'c'], r: function (a, b, c) { return [['x₁ + x₂', -b / a], ['x₁·x₂', c / a]]; } });
  f(L('Kvadrat uchhadni ko‘paytuvchilarga ajratish', 'Разложение квадратного трёхчлена', 'Factoring a quadratic'), 'ax<sup>2</sup> + bx + c = a(x − x<sub>1</sub>)(x − x<sub>2</sub>)', 8, 'g8p1-t14');
  f(L('Bikvadrat tenglama', 'Биквадратное уравнение', 'Biquadratic equation'), 'ax<sup>4</sup> + bx<sup>2</sup> + c = 0:  t = x<sup>2</sup> ≥ 0', 8, 'g8p1-t15');
  f(L('Kramer qoidasi (2×2)', 'Правило Крамера (2×2)', 'Cramer’s rule (2×2)'), 'x = ' + fr('Δ<sub>x</sub>', 'Δ') + ',  y = ' + fr('Δ<sub>y</sub>', 'Δ') + ',  Δ = a<sub>1</sub>b<sub>2</sub> − a<sub>2</sub>b<sub>1</sub>', 7, 'g7p2-t16', { v: ['a₁', 'b₁', 'c₁', 'a₂', 'b₂', 'c₂'], r: function (a1, b1, c1, a2, b2, c2) { var d = a1 * b2 - a2 * b1; if (!d) return [['Δ', 0]]; return [['Δ', d], ['x', (c1 * b2 - c2 * b1) / d], ['y', (a1 * c2 - a2 * c1) / d]]; } }, L('a₁x + b₁y = c₁, a₂x + b₂y = c₂', 'a₁x + b₁y = c₁, a₂x + b₂y = c₂', 'a₁x + b₁y = c₁, a₂x + b₂y = c₂'));
  f(L('Modulli tenglama', 'Уравнение с модулем', 'Absolute value equation'), '|x| = a (a ≥ 0)  ⇒  x = ±a', 8, 'g8p1-t10');
  f(L('Irratsional tenglama', 'Иррациональное уравнение', 'Irrational equation'), rt('f(x)') + ' = g(x)  ⇔  f(x) = g<sup>2</sup>(x),  g(x) ≥ 0', 10, 'g10p1-t9');

  cat('ineq', '≤', 'alg', L('Tengsizliklar', 'Неравенства', 'Inequalities'));
  f(L('Tengsizlikka son qo‘shish', 'Прибавление числа', 'Adding a number'), 'a &gt; b  ⇒  a + c &gt; b + c', 8, 'g8p1-t7');
  f(L('Musbat songa ko‘paytirish', 'Умножение на положительное', 'Multiplying by a positive'), 'a &gt; b, c &gt; 0  ⇒  ac &gt; bc', 8, 'g8p1-t7');
  f(L('Manfiy songa ko‘paytirish', 'Умножение на отрицательное', 'Multiplying by a negative'), 'a &gt; b, c &lt; 0  ⇒  ac &lt; bc', 8, 'g8p1-t7', null, L('Ishora teskarisiga o‘zgaradi!', 'Знак меняется на противоположный!', 'The sign flips!'));
  f(L('Modulli tengsizliklar', 'Неравенства с модулем', 'Absolute value inequalities'), L('|x| &lt; a  ⇔  −a &lt; x &lt; a;   |x| &gt; a  ⇔  x &lt; −a  yoki  x &gt; a', '|x| &lt; a  ⇔  −a &lt; x &lt; a;   |x| &gt; a  ⇔  x &lt; −a  или  x &gt; a', '|x| &lt; a  ⇔  −a &lt; x &lt; a;   |x| &gt; a  ⇔  x &lt; −a  or  x &gt; a'), 8, 'g8p1-t10');
  f(L('Kvadrat tengsizlik (a &gt; 0)', 'Квадратное неравенство (a &gt; 0)', 'Quadratic inequality (a &gt; 0)'), 'ax<sup>2</sup> + bx + c &lt; 0  ⇔  x<sub>1</sub> &lt; x &lt; x<sub>2</sub>', 9, 'g9p1-t3');
  f(L('Koshi tengsizligi', 'Неравенство Коши', 'AM–GM inequality'), fr('a + b', '2') + ' ≥ ' + rt('ab') + '  (a, b ≥ 0)', 9, 'g9p1-t8');

  cat('fn', 'f(x)', 'alg', L('Funksiyalar va grafiklar', 'Функции и графики', 'Functions and graphs'));
  f(L('Chiziqli funksiya', 'Линейная функция', 'Linear function'), 'y = kx + b,  k = ' + fr('y<sub>2</sub> − y<sub>1</sub>', 'x<sub>2</sub> − x<sub>1</sub>'), 7, 'g7p2-t15', { v: ['x₁', 'y₁', 'x₂', 'y₂'], r: function (x1, y1, x2, y2) { var k = (y2 - y1) / (x2 - x1); return [['k', k], ['b', y1 - k * x1]]; } });
  f(L('Parallel va perpendikulyar to‘g‘ri chiziqlar', 'Параллельные и перпендикулярные прямые', 'Parallel and perpendicular lines'), 'k<sub>1</sub> = k<sub>2</sub>  (∥);   k<sub>1</sub> · k<sub>2</sub> = −1  (⊥)', 7, 'g7p2-t15');
  f(L('Teskari proporsionallik', 'Обратная пропорциональность', 'Inverse proportion'), L('y = ' + fr('k', 'x') + '  (giperbola)', 'y = ' + fr('k', 'x') + '  (гипербола)', 'y = ' + fr('k', 'x') + '  (hyperbola)'), 8, 'g8p1-t4');
  f(L('Parabola uchi', 'Вершина параболы', 'Vertex of a parabola'), 'x<sub>0</sub> = −' + fr('b', '2a') + ',  y<sub>0</sub> = −' + fr('D', '4a'), 9, 'g9p1-t2', { v: ['a', 'b', 'c'], r: function (a, b, c) { var x = -b / (2 * a); return [['x₀', x], ['y₀', a * x * x + b * x + c]]; } });
  f(L('Kvadrat funksiyaning kanonik ko‘rinishi', 'Канонический вид квадратичной функции', 'Vertex form'), 'y = a(x − x<sub>0</sub>)<sup>2</sup> + y<sub>0</sub>', 9, 'g9p1-t2');
  f(L('Grafikni siljitish', 'Сдвиг графика', 'Shifting a graph'), L('y = f(x − a) + b:  a birlik o‘ngga, b birlik yuqoriga', 'y = f(x − a) + b:  на a вправо, на b вверх', 'y = f(x − a) + b:  a units right, b units up'), 10, 'g10p1-t5');
  f(L('Juft va toq funksiya', 'Чётная и нечётная функция', 'Even and odd functions'), L('f(−x) = f(x) — juft;  f(−x) = −f(x) — toq', 'f(−x) = f(x) — чётная;  f(−x) = −f(x) — нечётная', 'f(−x) = f(x) — even;  f(−x) = −f(x) — odd'), 9, 'g9p1-t5');
  f(L('Davriy funksiya', 'Периодическая функция', 'Periodic function'), 'f(x + T) = f(x);  sin kx, cos kx: T = ' + fr('2π', '|k|') + ';  tg kx: T = ' + fr('π', '|k|'), 10, 'g10p1-t4');
  f(L('Teskari funksiya', 'Обратная функция', 'Inverse function'), L('f(g(x)) = x,  grafiklari y = x ga nisbatan simmetrik', 'f(g(x)) = x,  графики симметричны относительно y = x', 'f(g(x)) = x,  graphs are symmetric about y = x'), 10, 'g10p1-t3');

  cat('prog', '⋯', 'alg', L('Progressiyalar', 'Прогрессии', 'Progressions'));
  f(L('Arifmetik progressiya n-hadi', 'n-й член арифметической прогрессии', 'n-th term (arithmetic)'), 'a<sub>n</sub> = a<sub>1</sub> + (n − 1)d', 9, 'g9p1-t16', { v: ['a₁', 'd', 'n'], r: function (a, d, n) { return a + (n - 1) * d; } });
  f(L('Arifmetik progressiya yig‘indisi', 'Сумма арифметической прогрессии', 'Arithmetic series'), 'S<sub>n</sub> = ' + fr('(a<sub>1</sub> + a<sub>n</sub>) · n', '2') + ' = ' + fr('(2a<sub>1</sub> + (n − 1)d) · n', '2'), 9, 'g9p1-t16', { v: ['a₁', 'd', 'n'], r: function (a, d, n) { return (2 * a + (n - 1) * d) * n / 2; } });
  f(L('Arifmetik progressiya xossasi', 'Свойство арифметической прогрессии', 'Arithmetic mean property'), 'a<sub>n</sub> = ' + fr('a<sub>n−1</sub> + a<sub>n+1</sub>', '2'), 9, 'g9p1-t16');
  f(L('Geometrik progressiya n-hadi', 'n-й член геометрической прогрессии', 'n-th term (geometric)'), 'b<sub>n</sub> = b<sub>1</sub> · q<sup>n − 1</sup>', 9, 'g9p1-t17', { v: ['b₁', 'q', 'n'], r: function (b, q, n) { return b * Math.pow(q, n - 1); } });
  f(L('Geometrik progressiya yig‘indisi', 'Сумма геометрической прогрессии', 'Geometric series'), 'S<sub>n</sub> = ' + fr('b<sub>1</sub>(q<sup>n</sup> − 1)', 'q − 1') + '  (q ≠ 1)', 9, 'g9p1-t17', { v: ['b₁', 'q', 'n'], r: function (b, q, n) { return q === 1 ? b * n : b * (Math.pow(q, n) - 1) / (q - 1); } });
  f(L('Geometrik progressiya xossasi', 'Свойство геометрической прогрессии', 'Geometric mean property'), 'b<sub>n</sub><sup>2</sup> = b<sub>n−1</sub> · b<sub>n+1</sub>', 9, 'g9p1-t17');
  f(L('Cheksiz kamayuvchi geometrik progressiya', 'Бесконечно убывающая геом. прогрессия', 'Infinite geometric series'), 'S = ' + fr('b<sub>1</sub>', '1 − q') + '  (|q| &lt; 1)', 9, 'g9p1-t18', { v: ['b₁', 'q'], r: function (b, q) { return Math.abs(q) < 1 ? b / (1 - q) : NaN; } });

  cat('log', 'log', 'alg', L('Ko‘rsatkichli funksiya va logarifmlar', 'Показательная функция и логарифмы', 'Exponentials and logarithms'));
  f(L('Logarifm ta’rifi', 'Определение логарифма', 'Definition of a logarithm'), 'log<sub>a</sub> b = c  ⇔  a<sup>c</sup> = b  (a &gt; 0, a ≠ 1, b &gt; 0)', 10, 'g10p1-t12', { v: ['a', 'b'], r: function (a, b) { return Math.log(b) / Math.log(a); } });
  f(L('Asosiy logarifmik ayniyat', 'Основное логарифмическое тождество', 'Basic identity'), 'a<sup>log<sub>a</sub> b</sup> = b', 10, 'g10p1-t12');
  f(L('Ko‘paytmaning logarifmi', 'Логарифм произведения', 'Log of a product'), 'log<sub>a</sub>(xy) = log<sub>a</sub> x + log<sub>a</sub> y', 10, 'g10p1-t13');
  f(L('Bo‘linmaning logarifmi', 'Логарифм частного', 'Log of a quotient'), 'log<sub>a</sub> ' + fr('x', 'y') + ' = log<sub>a</sub> x − log<sub>a</sub> y', 10, 'g10p1-t13');
  f(L('Darajaning logarifmi', 'Логарифм степени', 'Log of a power'), 'log<sub>a</sub> x<sup>p</sup> = p · log<sub>a</sub> x;   log<sub>a<sup>k</sup></sub> b = ' + fr('1', 'k') + ' log<sub>a</sub> b', 10, 'g10p1-t13');
  f(L('Yangi asosga o‘tish', 'Переход к новому основанию', 'Change of base'), 'log<sub>a</sub> b = ' + fr('log<sub>c</sub> b', 'log<sub>c</sub> a') + ',   log<sub>a</sub> b = ' + fr('1', 'log<sub>b</sub> a'), 10, 'g10p1-t13');
  f(L('O‘nli va natural logarifm', 'Десятичный и натуральный логарифм', 'Common and natural log'), 'lg x = log<sub>10</sub> x,  ln x = log<sub>e</sub> x,  e ≈ 2,718', 10, 'g10p1-t12', { v: ['x'], r: function (x) { return [['lg x', Math.log10(x)], ['ln x', Math.log(x)]]; } });
  f(L('Ko‘rsatkichli tenglama', 'Показательное уравнение', 'Exponential equation'), 'a<sup>f(x)</sup> = a<sup>g(x)</sup>  ⇔  f(x) = g(x)', 10, 'g10p1-t11');
  f(L('Ko‘rsatkichli tengsizlik', 'Показательное неравенство', 'Exponential inequality'), L('a &gt; 1: a<sup>f</sup> &gt; a<sup>g</sup> ⇔ f &gt; g;   0 &lt; a &lt; 1: ishora o‘zgaradi', 'a &gt; 1: a<sup>f</sup> &gt; a<sup>g</sup> ⇔ f &gt; g;   0 &lt; a &lt; 1: знак меняется', 'a &gt; 1: a<sup>f</sup> &gt; a<sup>g</sup> ⇔ f &gt; g;   0 &lt; a &lt; 1: the sign flips'), 10, 'g10p1-t11');
  f(L('Yarim yemirilish', 'Период полураспада', 'Half-life'), 'm = m<sub>0</sub> · (' + fr('1', '2') + ')<sup>t/T</sup>', 10, 'g10p1-t15', { v: ['m₀', 't', 'T'], r: function (m, t, T) { return m * Math.pow(0.5, t / T); } });

  cat('trig', 'sin', 'alg', L('Trigonometriya', 'Тригонометрия', 'Trigonometry'));
  f(L('Radian va gradus', 'Радианы и градусы', 'Radians and degrees'), 'π rad = 180°,  α<sub>rad</sub> = ' + fr('π · α°', '180'), 9, 'g9p1-t9', { v: ['α°'], r: function (a) { return a * D2R; } });
  f(L('Asosiy trigonometrik ayniyat', 'Основное тригонометрическое тождество', 'Pythagorean identity'), 'sin<sup>2</sup> α + cos<sup>2</sup> α = 1', 9, 'g9p1-t11');
  f(L('Tangens va kotangens', 'Тангенс и котангенс', 'Tangent and cotangent'), 'tg α = ' + fr('sin α', 'cos α') + ',  ctg α = ' + fr('cos α', 'sin α') + ',  tg α · ctg α = 1', 9, 'g9p1-t10');
  f(L('Tangens orqali ayniyatlar', 'Тождества с тангенсом', 'Identities with tangent'), '1 + tg<sup>2</sup> α = ' + fr('1', 'cos<sup>2</sup> α') + ',  1 + ctg<sup>2</sup> α = ' + fr('1', 'sin<sup>2</sup> α'), 9, 'g9p1-t11');
  f(L('Qo‘shish formulalari: sinus', 'Формулы сложения: синус', 'Addition formula: sine'), 'sin(α ± β) = sin α cos β ± cos α sin β', 9, 'g9p1-t12');
  f(L('Qo‘shish formulalari: kosinus', 'Формулы сложения: косинус', 'Addition formula: cosine'), 'cos(α ± β) = cos α cos β ∓ sin α sin β', 9, 'g9p1-t12');
  f(L('Qo‘shish formulalari: tangens', 'Формулы сложения: тангенс', 'Addition formula: tangent'), 'tg(α ± β) = ' + fr('tg α ± tg β', '1 ∓ tg α · tg β'), 9, 'g9p1-t12');
  f(L('Ikkilangan burchak sinusi', 'Синус двойного угла', 'Double angle: sine'), 'sin 2α = 2 sin α cos α', 9, 'g9p1-t13');
  f(L('Ikkilangan burchak kosinusi', 'Косинус двойного угла', 'Double angle: cosine'), 'cos 2α = cos<sup>2</sup> α − sin<sup>2</sup> α = 2cos<sup>2</sup> α − 1 = 1 − 2sin<sup>2</sup> α', 9, 'g9p1-t13');
  f(L('Ikkilangan burchak tangensi', 'Тангенс двойного угла', 'Double angle: tangent'), 'tg 2α = ' + fr('2 tg α', '1 − tg<sup>2</sup> α'), 9, 'g9p1-t13');
  f(L('Darajani pasaytirish', 'Понижение степени', 'Power reduction'), 'sin<sup>2</sup> α = ' + fr('1 − cos 2α', '2') + ',  cos<sup>2</sup> α = ' + fr('1 + cos 2α', '2'), 9, 'g9p1-t13');
  f(L('Sinuslar yig‘indisi va ayirmasi', 'Сумма и разность синусов', 'Sum-to-product: sines'), 'sin α ± sin β = 2 sin ' + fr('α ± β', '2') + ' cos ' + fr('α ∓ β', '2'), 9, 'g9p1-t14');
  f(L('Kosinuslar yig‘indisi va ayirmasi', 'Сумма и разность косинусов', 'Sum-to-product: cosines'), 'cos α + cos β = 2 cos ' + fr('α + β', '2') + ' cos ' + fr('α − β', '2') + ';  cos α − cos β = −2 sin ' + fr('α + β', '2') + ' sin ' + fr('α − β', '2'), 9, 'g9p1-t14');
  f(L('Keltirish formulalari (qoida)', 'Формулы приведения (правило)', 'Reduction formulas (rule)'), 'sin(90° − α) = cos α,  cos(180° − α) = −cos α,  sin(180° − α) = sin α', 9, 'g9p1-t13', null, L('90° yoki 270° bo‘lsa — funksiya nomi almashadi, ishora chorakdan olinadi', 'Для 90° и 270° функция меняется на кофункцию, знак — по четверти', 'With 90° or 270° the function changes to its co-function; the sign comes from the quadrant'));
  f(L('sin, cos, tg qiymatlari', 'Значения sin, cos, tg', 'Values of sin, cos, tan'), 'sin 30° = ' + fr('1', '2') + ',  sin 45° = ' + fr(rt('2'), '2') + ',  sin 60° = ' + fr(rt('3'), '2') + ',  tg 45° = 1,  tg 60° = ' + rt('3'), 8, 'g9p1-t10', { v: ['α°'], r: function (a) { var r = a * D2R; return [['sin', Math.sin(r)], ['cos', Math.cos(r)], ['tg', Math.abs(Math.cos(r)) < 1e-12 ? NaN : Math.tan(r)]]; } });
  f(L('sin x = a tenglamasi', 'Уравнение sin x = a', 'Equation sin x = a'), 'x = (−1)<sup>n</sup> arcsin a + πn,  n ∈ Z  (|a| ≤ 1)', 10, 'g10p1-t18');
  f(L('cos x = a tenglamasi', 'Уравнение cos x = a', 'Equation cos x = a'), 'x = ± arccos a + 2πn,  n ∈ Z  (|a| ≤ 1)', 10, 'g10p1-t18');
  f(L('tg x = a tenglamasi', 'Уравнение tg x = a', 'Equation tan x = a'), 'x = arctg a + πn,  n ∈ Z', 10, 'g10p1-t18');
  f(L('Teskari trigonometrik funksiyalar', 'Обратные тригонометрические функции', 'Inverse trig functions'), 'arcsin(−a) = −arcsin a,  arccos(−a) = π − arccos a,  arcsin a + arccos a = ' + fr('π', '2'), 10, 'g10p1-t17');

  cat('der', 'f′', 'alg', L('Hosila', 'Производная', 'Derivative'));
  f(L('Hosila ta’rifi', 'Определение производной', 'Definition of the derivative'), 'f′(x<sub>0</sub>) = lim<sub>Δx→0</sub> ' + fr('f(x<sub>0</sub> + Δx) − f(x<sub>0</sub>)', 'Δx'), 11, 'g11p1-t2');
  f(L('Asosiy hosilalar', 'Основные производные', 'Basic derivatives'), 'C′ = 0,  (x<sup>n</sup>)′ = nx<sup>n−1</sup>,  (' + rt('x') + ')′ = ' + fr('1', '2' + rt('x')) + ',  (' + fr('1', 'x') + ')′ = −' + fr('1', 'x<sup>2</sup>'), 11, 'g11p1-t3', { v: ['n', 'x'], r: function (n, x) { return [['x<sup>n</sup>', Math.pow(x, n)], ['(x<sup>n</sup>)′', n * Math.pow(x, n - 1)]]; } });
  f(L('Trigonometrik funksiyalar hosilasi', 'Производные тригонометрических функций', 'Derivatives of trig functions'), '(sin x)′ = cos x,  (cos x)′ = −sin x,  (tg x)′ = ' + fr('1', 'cos<sup>2</sup> x') + ',  (ctg x)′ = −' + fr('1', 'sin<sup>2</sup> x'), 11, 'g11p1-t3');
  f(L('Ko‘rsatkichli va logarifmik funksiyalar hosilasi', 'Производные показательной и логарифмической функций', 'Derivatives of exp and log'), '(e<sup>x</sup>)′ = e<sup>x</sup>,  (a<sup>x</sup>)′ = a<sup>x</sup> ln a,  (ln x)′ = ' + fr('1', 'x') + ',  (log<sub>a</sub> x)′ = ' + fr('1', 'x ln a'), 11, 'g11p1-t3');
  f(L('Yig‘indi va ko‘paytma hosilasi', 'Производная суммы и произведения', 'Sum and product rules'), '(u ± v)′ = u′ ± v′,  (Cu)′ = Cu′,  (uv)′ = u′v + uv′', 11, 'g11p1-t3');
  f(L('Bo‘linma hosilasi', 'Производная частного', 'Quotient rule'), '(' + fr('u', 'v') + ')′ = ' + fr('u′v − uv′', 'v<sup>2</sup>'), 11, 'g11p1-t3');
  f(L('Murakkab funksiya hosilasi', 'Производная сложной функции', 'Chain rule'), '(f(g(x)))′ = f′(g(x)) · g′(x)', 11, 'g11p1-t4');
  f(L('Urinma tenglamasi', 'Уравнение касательной', 'Tangent line'), 'y = f(x<sub>0</sub>) + f′(x<sub>0</sub>)(x − x<sub>0</sub>)', 11, 'g11p1-t5');
  f(L('Hosilaning fizik ma’nosi', 'Физический смысл производной', 'Physical meaning'), 'v(t) = s′(t),  a(t) = v′(t) = s″(t)', 11, 'g11p1-t2');
  f(L('Taqribiy hisoblash', 'Приближённые вычисления', 'Linear approximation'), 'f(x<sub>0</sub> + Δx) ≈ f(x<sub>0</sub>) + f′(x<sub>0</sub>) · Δx', 11, 'g11p1-t8');

  cat('int', '∫', 'alg', L('Boshlang‘ich funksiya va integral', 'Первообразная и интеграл', 'Antiderivative and integral'));
  f(L('Darajali funksiya integrali', 'Интеграл степенной функции', 'Power rule'), '∫ x<sup>n</sup> dx = ' + fr('x<sup>n+1</sup>', 'n + 1') + ' + C  (n ≠ −1)', 11, 'g11p1-t11');
  f(L('Integrallar jadvali', 'Таблица интегралов', 'Table of integrals'), '∫ ' + fr('dx', 'x') + ' = ln|x| + C,  ∫ e<sup>x</sup> dx = e<sup>x</sup> + C,  ∫ a<sup>x</sup> dx = ' + fr('a<sup>x</sup>', 'ln a') + ' + C', 11, 'g11p1-t11');
  f(L('Trigonometrik integrallar', 'Тригонометрические интегралы', 'Trig integrals'), '∫ sin x dx = −cos x + C,  ∫ cos x dx = sin x + C,  ∫ ' + fr('dx', 'cos<sup>2</sup> x') + ' = tg x + C', 11, 'g11p1-t11');
  f(L('Chiziqli almashtirish', 'Линейная замена', 'Linear substitution'), '∫ f(kx + b) dx = ' + fr('1', 'k') + ' F(kx + b) + C', 11, 'g11p1-t11');
  f(L('Nyuton–Leybnits formulasi', 'Формула Ньютона–Лейбница', 'Newton–Leibniz formula'), '∫<sub>a</sub><sup>b</sup> f(x) dx = F(b) − F(a)', 11, 'g11p1-t12', { v: ['n', 'a', 'b'], r: function (n, a, b) { return n === -1 ? Math.log(Math.abs(b)) - Math.log(Math.abs(a)) : (Math.pow(b, n + 1) - Math.pow(a, n + 1)) / (n + 1); } }, L('Kalkulyator: ∫ xⁿ dx, a dan b gacha', 'Калькулятор: ∫ xⁿ dx от a до b', 'Calculator: ∫ xⁿ dx from a to b'));
  f(L('Ikki chiziq orasidagi yuz', 'Площадь между кривыми', 'Area between curves'), 'S = ∫<sub>a</sub><sup>b</sup> (f<sub>2</sub>(x) − f<sub>1</sub>(x)) dx', 11, 'g11p1-t13');
  f(L('Aylanish jismi hajmi', 'Объём тела вращения', 'Volume of revolution'), 'V = π ∫<sub>a</sub><sup>b</sup> f<sup>2</sup>(x) dx', 11, 'g11p1-t13');
  f(L('Trapetsiyalar formulasi', 'Формула трапеций', 'Trapezium rule'), '∫<sub>a</sub><sup>b</sup> f dx ≈ h · (' + fr('y<sub>0</sub> + y<sub>n</sub>', '2') + ' + y<sub>1</sub> + … + y<sub>n−1</sub>),  h = ' + fr('b − a', 'n'), 11, 'g11p1-t14');

  cat('prob', '🎲', 'alg', L('Kombinatorika, ehtimollik va statistika', 'Комбинаторика, вероятность и статистика', 'Combinatorics, probability and statistics'));
  f(L('O‘rin almashtirishlar', 'Перестановки', 'Permutations'), 'P<sub>n</sub> = n! = 1 · 2 · … · n', 7, 'g7p2-t19', { v: ['n'], r: function (n) { var p = 1; for (var i = 2; i <= n; i++) p *= i; return p; } });
  f(L('O‘rinlashtirishlar', 'Размещения', 'Arrangements'), 'A<sub>n</sub><sup>k</sup> = ' + fr('n!', '(n − k)!'), 11, 'g11p1-t15', { v: ['n', 'k'], r: function (n, k) { var p = 1; for (var i = n - k + 1; i <= n; i++) p *= i; return p; } });
  f(L('Guruhlashlar', 'Сочетания', 'Combinations'), 'C<sub>n</sub><sup>k</sup> = ' + fr('n!', 'k! (n − k)!'), 11, 'g11p1-t15', { v: ['n', 'k'], r: function (n, k) { var p = 1; for (var i = 1; i <= k; i++) p = p * (n - k + i) / i; return Math.round(p); } });
  f(L('Guruhlashlar xossalari', 'Свойства сочетаний', 'Properties of combinations'), 'C<sub>n</sub><sup>k</sup> = C<sub>n</sub><sup>n−k</sup>,  C<sub>n</sub><sup>k</sup> + C<sub>n</sub><sup>k+1</sup> = C<sub>n+1</sub><sup>k+1</sup>', 11, 'g11p1-t16');
  f(L('Nyuton binomi', 'Бином Ньютона', 'Binomial theorem'), '(a + b)<sup>n</sup> = Σ C<sub>n</sub><sup>k</sup> a<sup>n−k</sup> b<sup>k</sup>,  T<sub>k+1</sub> = C<sub>n</sub><sup>k</sup> a<sup>n−k</sup> b<sup>k</sup>', 11, 'g11p1-t16');
  f(L('Klassik ehtimollik', 'Классическая вероятность', 'Classical probability'), 'P(A) = ' + fr('m', 'n'), 9, 'g9p1-t19', { v: ['m', 'n'], r: function (m, n) { return m / n; } });
  f(L('Qarama-qarshi hodisa', 'Противоположное событие', 'Complement'), 'P(Ā) = 1 − P(A)', 9, 'g9p1-t19');
  f(L('Ehtimolliklarni qo‘shish', 'Сложение вероятностей', 'Addition rule'), 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B)', 11, 'g11p1-t19');
  f(L('Erkli hodisalar', 'Независимые события', 'Independent events'), 'P(A ∩ B) = P(A) · P(B)', 11, 'g11p1-t19');
  f(L('Bernulli formulasi', 'Формула Бернулли', 'Bernoulli formula'), 'P<sub>n</sub>(k) = C<sub>n</sub><sup>k</sup> p<sup>k</sup> q<sup>n−k</sup>,  q = 1 − p', 11, 'g11p1-t20', { v: ['n', 'k', 'p'], r: function (n, k, p) { var c = 1; for (var i = 1; i <= k; i++) c = c * (n - k + i) / i; return c * Math.pow(p, k) * Math.pow(1 - p, n - k); } });
  f(L('Dispersiya va standart chetlanish', 'Дисперсия и стандартное отклонение', 'Variance and standard deviation'), 'D = ' + fr('Σ (x<sub>i</sub> − x̄)<sup>2</sup>', 'n') + ',  σ = ' + rt('D'), 11, 'g11p1-t17');
  f(L('Kutilma (binomial)', 'Матожидание (биномиальное)', 'Expected value (binomial)'), 'M = np,  σ = ' + rt('npq'), 11, 'g11p1-t20', { v: ['n', 'p'], r: function (n, p) { return [['M', n * p], ['σ', Math.sqrt(n * p * (1 - p))]]; } });

  // ======================= GEOMETRIYA =======================
  cat('ang', '∠', 'geo', L('Burchaklar va ko‘pburchaklar', 'Углы и многоугольники', 'Angles and polygons'));
  f(L('Qo‘shni burchaklar', 'Смежные углы', 'Adjacent angles'), 'α + β = 180°', 7, 'g7p3-t2');
  f(L('Vertikal burchaklar', 'Вертикальные углы', 'Vertical angles'), 'α = β', 7, 'g7p3-t2');
  f(L('Uchburchak burchaklari yig‘indisi', 'Сумма углов треугольника', 'Angle sum of a triangle'), '∠A + ∠B + ∠C = 180°', 7, 'g7p3-t9');
  f(L('Uchburchakning tashqi burchagi', 'Внешний угол треугольника', 'Exterior angle'), L('φ = ∠A + ∠B  (qo‘shni bo‘lmagan ikki burchak)', 'φ = ∠A + ∠B  (два угла, не смежных с ним)', 'φ = ∠A + ∠B  (the two remote angles)'), 7, 'g7p3-t9');
  f(L('Ko‘pburchak ichki burchaklari yig‘indisi', 'Сумма углов многоугольника', 'Interior angle sum'), 'S = 180° · (n − 2)', 8, 'g8p2-t1', { v: ['n'], r: function (n) { return [[L('yig‘indi', 'сумма', 'sum'), 180 * (n - 2)], [L('muntazamda bitta burchak', 'один угол правильного', 'one angle (regular)'), 180 * (n - 2) / n]]; } });
  f(L('Tashqi burchaklar yig‘indisi', 'Сумма внешних углов', 'Exterior angle sum'), 'Σ φ = 360°', 8, 'g8p2-t1');
  f(L('Diagonallar soni', 'Число диагоналей', 'Number of diagonals'), 'd = ' + fr('n(n − 3)', '2'), 8, 'g8p2-t1', { v: ['n'], r: function (n) { return n * (n - 3) / 2; } });
  f(L('Parallel to‘g‘ri chiziqlar va kesuvchi', 'Параллельные прямые и секущая', 'Parallel lines and a transversal'), L('ichki almashinuvchi burchaklar teng; ichki bir tomonli burchaklar yig‘indisi 180°', 'накрест лежащие углы равны; сумма односторонних углов 180°', 'alternate angles are equal; co-interior angles add up to 180°'), 7, 'g7p3-t8');

  cat('tri', '△', 'geo', L('Uchburchak', 'Треугольник', 'Triangle'));
  f(L('Pifagor teoremasi', 'Теорема Пифагора', 'Pythagorean theorem'), 'c<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup>', 8, 'g8p2-t11', { v: ['a', 'b'], r: function (a, b) { return Math.sqrt(a * a + b * b); } });
  f(L('Uchburchak yuzi (asos va balandlik)', 'Площадь (основание и высота)', 'Area (base and height)'), 'S = ' + fr('1', '2') + ' a · h', 5, 'g5p1-t14', { v: ['a', 'h'], r: function (a, h) { return a * h / 2; } });
  f(L('Ikki tomon va burchak orqali yuz', 'Площадь через две стороны и угол', 'Area from two sides and angle'), 'S = ' + fr('1', '2') + ' ab sin C', 9, 'g9p2-t9', { v: ['a', 'b', 'C°'], r: function (a, b, c) { return a * b * Math.sin(c * D2R) / 2; } });
  f(L('Geron formulasi', 'Формула Герона', 'Heron’s formula'), 'S = ' + rt('p(p − a)(p − b)(p − c)') + ',  p = ' + fr('a + b + c', '2'), 8, 'g8p2-t13', { v: ['a', 'b', 'c'], r: function (a, b, c) { var p = (a + b + c) / 2, q = p * (p - a) * (p - b) * (p - c); return q < 0 ? NaN : Math.sqrt(q); } });
  f(L('Ichki chizilgan aylana radiusi', 'Радиус вписанной окружности', 'Inradius'), 'S = p · r  ⇒  r = ' + fr('S', 'p'), 8, 'g8p2-t17');
  f(L('Tashqi chizilgan aylana radiusi', 'Радиус описанной окружности', 'Circumradius'), 'R = ' + fr('abc', '4S'), 9, 'g9p2-t13', { v: ['a', 'b', 'c'], r: function (a, b, c) { var p = (a + b + c) / 2, S = Math.sqrt(p * (p - a) * (p - b) * (p - c)); return [['S', S], ['R', a * b * c / (4 * S)], ['r', S / p]]; } });
  f(L('Sinuslar teoremasi', 'Теорема синусов', 'Law of sines'), fr('a', 'sin A') + ' = ' + fr('b', 'sin B') + ' = ' + fr('c', 'sin C') + ' = 2R', 9, 'g9p2-t10');
  f(L('Kosinuslar teoremasi', 'Теорема косинусов', 'Law of cosines'), 'c<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup> − 2ab cos C', 9, 'g9p2-t11', { v: ['a', 'b', 'C°'], r: function (a, b, c) { return Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(c * D2R)); } });
  f(L('Mediana uzunligi', 'Длина медианы', 'Length of a median'), 'm<sub>a</sub> = ' + fr('1', '2') + ' ' + rt('2b<sup>2</sup> + 2c<sup>2</sup> − a<sup>2</sup>'), 9, 'g9p2-t11', { v: ['a', 'b', 'c'], r: function (a, b, c) { return Math.sqrt(2 * b * b + 2 * c * c - a * a) / 2; } });
  f(L('Bissektrisa xossasi', 'Свойство биссектрисы', 'Angle bisector property'), fr('m', 'n') + ' = ' + fr('a', 'b'), 7, 'g7p3-t10');
  f(L('O‘rta chiziq', 'Средняя линия', 'Midline'), L('m = ' + fr('a', '2') + '  (asosga parallel)', 'm = ' + fr('a', '2') + '  (параллельна основанию)', 'm = ' + fr('a', '2') + '  (parallel to the base)'), 8, 'g8p2-t4');
  f(L('To‘g‘ri burchakli uchburchakda trigonometriya', 'Тригонометрия в прямоугольном треугольнике', 'Right-triangle trigonometry'), 'sin A = ' + fr('a', 'c') + ',  cos A = ' + fr('b', 'c') + ',  tg A = ' + fr('a', 'b'), 8, 'g9p2-t8');
  f(L('To‘g‘ri burchakli uchburchakda proporsional kesmalar', 'Пропорциональные отрезки в прямоугольном треугольнике', 'Proportional segments'), 'h<sup>2</sup> = a<sub>c</sub> · b<sub>c</sub>,  a<sup>2</sup> = c · a<sub>c</sub>,  h = ' + fr('ab', 'c'), 9, 'g9p2-t17');
  f(L('Teng tomonli uchburchak', 'Равносторонний треугольник', 'Equilateral triangle'), 'S = ' + fr('a<sup>2</sup>' + rt('3'), '4') + ',  h = ' + fr('a' + rt('3'), '2') + ',  R = ' + fr('a', rt('3')) + ',  r = ' + fr('a', '2' + rt('3')), 8, 'g8p2-t13', { v: ['a'], r: function (a) { return [['S', a * a * Math.sqrt(3) / 4], ['h', a * Math.sqrt(3) / 2], ['R', a / Math.sqrt(3)], ['r', a / (2 * Math.sqrt(3))]]; } });
  f(L('Uchburchak tengsizligi', 'Неравенство треугольника', 'Triangle inequality'), '|a − b| &lt; c &lt; a + b', 7, 'g7p3-t11');
  f(L('O‘xshash uchburchaklar', 'Подобные треугольники', 'Similar triangles'), fr('a<sub>1</sub>', 'a') + ' = k,  ' + fr('S<sub>1</sub>', 'S') + ' = k<sup>2</sup>,  ' + fr('V<sub>1</sub>', 'V') + ' = k<sup>3</sup>', 9, 'g9p2-t2');

  cat('quad', '▱', 'geo', L('To‘rtburchaklar', 'Четырёхугольники', 'Quadrilaterals'));
  f(L('Kvadrat', 'Квадрат', 'Square'), 'S = a<sup>2</sup>,  P = 4a,  d = a' + rt('2'), 5, 'g8p2-t3', { v: ['a'], r: function (a) { return [['S', a * a], ['P', 4 * a], ['d', a * Math.SQRT2]]; } });
  f(L('To‘g‘ri to‘rtburchak', 'Прямоугольник', 'Rectangle'), 'S = ab,  P = 2(a + b),  d = ' + rt('a<sup>2</sup> + b<sup>2</sup>'), 5, 'g8p2-t8', { v: ['a', 'b'], r: function (a, b) { return [['S', a * b], ['P', 2 * (a + b)], ['d', Math.hypot(a, b)]]; } });
  f(L('Parallelogramm yuzi', 'Площадь параллелограмма', 'Parallelogram area'), 'S = a · h = ab sin α', 8, 'g8p2-t9', { v: ['a', 'b', 'α°'], r: function (a, b, al) { return a * b * Math.sin(al * D2R); } });
  f(L('Parallelogramm diagonallari', 'Диагонали параллелограмма', 'Parallelogram diagonals'), 'd<sub>1</sub><sup>2</sup> + d<sub>2</sub><sup>2</sup> = 2(a<sup>2</sup> + b<sup>2</sup>)', 9, 'g9p2-t11');
  f(L('Romb yuzi', 'Площадь ромба', 'Rhombus area'), 'S = ' + fr('d<sub>1</sub> · d<sub>2</sub>', '2') + ' = a · h', 8, 'g8p2-t10', { v: ['d₁', 'd₂'], r: function (a, b) { return [['S', a * b / 2], ['a', Math.hypot(a, b) / 2]]; } });
  f(L('Trapetsiya yuzi', 'Площадь трапеции', 'Trapezium area'), 'S = ' + fr('a + b', '2') + ' · h', 8, 'g8p2-t10', { v: ['a', 'b', 'h'], r: function (a, b, h) { return (a + b) * h / 2; } });
  f(L('Trapetsiyaning o‘rta chizig‘i', 'Средняя линия трапеции', 'Midline of a trapezium'), 'm = ' + fr('a + b', '2'), 8, 'g8p2-t5');
  f(L('Ixtiyoriy qavariq to‘rtburchak yuzi', 'Площадь выпуклого четырёхугольника', 'Area of a convex quadrilateral'), 'S = ' + fr('1', '2') + ' d<sub>1</sub> d<sub>2</sub> sin φ', 9, 'g8p2-t10');

  cat('circ', '◯', 'geo', L('Aylana va doira', 'Окружность и круг', 'Circle and disc'));
  f(L('Aylana uzunligi', 'Длина окружности', 'Circumference'), 'C = 2πR = πd', 6, 'g6p1-t14', { v: ['R'], r: function (R) { return 2 * Math.PI * R; } });
  f(L('Doira yuzi', 'Площадь круга', 'Area of a disc'), 'S = πR<sup>2</sup>', 6, 'g6p1-t16', { v: ['R'], r: function (R) { return Math.PI * R * R; } });
  f(L('Yoy uzunligi', 'Длина дуги', 'Arc length'), 'l = ' + fr('πRα', '180°') + ' = Rα<sub>rad</sub>', 9, 'g9p2-t15', { v: ['R', 'α°'], r: function (R, a) { return Math.PI * R * a / 180; } });
  f(L('Sektor yuzi', 'Площадь сектора', 'Sector area'), 'S = ' + fr('πR<sup>2</sup>α', '360°') + ' = ' + fr('lR', '2'), 9, 'g9p2-t16', { v: ['R', 'α°'], r: function (R, a) { return Math.PI * R * R * a / 360; } });
  f(L('Segment yuzi', 'Площадь сегмента', 'Segment area'), 'S = ' + fr('R<sup>2</sup>', '2') + ' (α<sub>rad</sub> − sin α)', 9, 'g9p2-t16', { v: ['R', 'α°'], r: function (R, a) { return R * R / 2 * (a * D2R - Math.sin(a * D2R)); } });
  f(L('Ichki chizilgan burchak', 'Вписанный угол', 'Inscribed angle'), L('α<sub>ichki</sub> = ' + fr('1', '2') + ' α<sub>markaziy</sub>', 'α<sub>впис</sub> = ' + fr('1', '2') + ' α<sub>центр</sub>', 'α<sub>inscr</sub> = ' + fr('1', '2') + ' α<sub>central</sub>'), 8, 'g8p2-t16');
  f(L('Kesishuvchi vatarlar', 'Пересекающиеся хорды', 'Intersecting chords'), 'AE · EB = CE · ED', 9, 'g9p2-t18');
  f(L('Urinma va kesuvchi', 'Касательная и секущая', 'Tangent–secant'), 'MT<sup>2</sup> = MA · MB', 9, 'g9p2-t18');
  f(L('Muntazam ko‘pburchak tomoni', 'Сторона правильного многоугольника', 'Side of a regular polygon'), 'a<sub>n</sub> = 2R sin ' + fr('180°', 'n') + ',  r = R cos ' + fr('180°', 'n'), 9, 'g9p2-t14', { v: ['R', 'n'], r: function (R, n) { return [['a', 2 * R * Math.sin(Math.PI / n)], ['r', R * Math.cos(Math.PI / n)], ['S', n * R * R * Math.sin(2 * Math.PI / n) / 2]]; } });
  f(L('Aylana tenglamasi', 'Уравнение окружности', 'Equation of a circle'), '(x − a)<sup>2</sup> + (y − b)<sup>2</sup> = R<sup>2</sup>', 9, 'g9p2-t15');

  cat('vec', '→', 'geo', L('Koordinatalar va vektorlar', 'Координаты и векторы', 'Coordinates and vectors'));
  f(L('Ikki nuqta orasidagi masofa', 'Расстояние между точками', 'Distance between points'), 'd = ' + rt('(x<sub>2</sub> − x<sub>1</sub>)<sup>2</sup> + (y<sub>2</sub> − y<sub>1</sub>)<sup>2</sup>'), 8, 'g10p2-t2', { v: ['x₁', 'y₁', 'x₂', 'y₂'], r: function (a, b, c, d) { return Math.hypot(c - a, d - b); } });
  f(L('Kesma o‘rtasi', 'Середина отрезка', 'Midpoint'), 'M(' + fr('x<sub>1</sub> + x<sub>2</sub>', '2') + '; ' + fr('y<sub>1</sub> + y<sub>2</sub>', '2') + ')', 8, 'g10p2-t2', { v: ['x₁', 'y₁', 'x₂', 'y₂'], r: function (a, b, c, d) { return [['x', (a + c) / 2], ['y', (b + d) / 2]]; } });
  f(L('Vektor koordinatalari', 'Координаты вектора', 'Vector coordinates'), vec('AB') + ' = (x<sub>2</sub> − x<sub>1</sub>; y<sub>2</sub> − y<sub>1</sub>)', 8, 'g8p2-t19');
  f(L('Vektor uzunligi', 'Длина вектора', 'Length of a vector'), (function (A, B) { return L(A + '  (fazoda: ' + B + ')', A + '  (в пространстве: ' + B + ')', A + '  (in space: ' + B + ')'); })('|' + vec('a') + '| = ' + rt('x<sup>2</sup> + y<sup>2</sup>'), rt('x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup>')), 8, 'g8p2-t19', { v: ['x', 'y', 'z'], r: function (x, y, z) { return Math.sqrt(x * x + y * y + z * z); } });
  f(L('Skalyar ko‘paytma', 'Скалярное произведение', 'Dot product'), vec('a') + ' · ' + vec('b') + ' = x<sub>1</sub>x<sub>2</sub> + y<sub>1</sub>y<sub>2</sub> = |' + vec('a') + '| · |' + vec('b') + '| · cos φ', 8, 'g8p2-t20', { v: ['x₁', 'y₁', 'x₂', 'y₂'], r: function (a, b, c, d) { var s = a * c + b * d, m = Math.hypot(a, b) * Math.hypot(c, d); return [[L('ko‘paytma', 'произведение', 'product'), s], ['φ°', m ? Math.acos(Math.max(-1, Math.min(1, s / m))) / D2R : NaN]]; } });
  f(L('Perpendikulyarlik va kollinearlik', 'Перпендикулярность и коллинеарность', 'Perpendicular and collinear'), vec('a') + ' ⊥ ' + vec('b') + ' ⇔ ' + vec('a') + ' · ' + vec('b') + ' = 0;   ' + vec('a') + ' ∥ ' + vec('b') + ' ⇔ ' + fr('x<sub>1</sub>', 'x<sub>2</sub>') + ' = ' + fr('y<sub>1</sub>', 'y<sub>2</sub>'), 8, 'g8p2-t20');
  f(L('Fazoda masofa', 'Расстояние в пространстве', 'Distance in space'), 'd = ' + rt('Δx<sup>2</sup> + Δy<sup>2</sup> + Δz<sup>2</sup>'), 11, 'g11p2-t1');
  f(L('To‘g‘ri chiziq tenglamasi', 'Уравнение прямой', 'Equation of a line'), 'ax + by + c = 0;  ' + fr('x − x<sub>1</sub>', 'x<sub>2</sub> − x<sub>1</sub>') + ' = ' + fr('y − y<sub>1</sub>', 'y<sub>2</sub> − y<sub>1</sub>'), 9, 'g7p2-t15');
  f(L('Nuqtadan to‘g‘ri chiziqqacha masofa', 'Расстояние от точки до прямой', 'Point-to-line distance'), 'd = ' + fr('|ax<sub>0</sub> + by<sub>0</sub> + c|', rt('a<sup>2</sup> + b<sup>2</sup>')), 9, 'g9p2-t12', { v: ['a', 'b', 'c', 'x₀', 'y₀'], r: function (a, b, c, x, y) { return Math.abs(a * x + b * y + c) / Math.hypot(a, b); } });

  cat('sol', '🧊', 'geo', L('Fazoviy jismlar: hajm va sirt', 'Тела: объём и поверхность', 'Solids: volume and surface'));
  f(L('Kub', 'Куб', 'Cube'), 'V = a<sup>3</sup>,  S = 6a<sup>2</sup>,  d = a' + rt('3'), 5, 'g5p1-t17', { v: ['a'], r: function (a) { return [['V', a * a * a], ['S', 6 * a * a], ['d', a * Math.sqrt(3)]]; } });
  f(L('To‘g‘ri burchakli parallelepiped', 'Прямоугольный параллелепипед', 'Cuboid'), 'V = abc,  S = 2(ab + bc + ac),  d = ' + rt('a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup>'), 5, 'g11p2-t6', { v: ['a', 'b', 'c'], r: function (a, b, c) { return [['V', a * b * c], ['S', 2 * (a * b + b * c + a * c)], ['d', Math.sqrt(a * a + b * b + c * c)]]; } });
  f(L('Prizma', 'Призма', 'Prism'), L('V = S<sub>asos</sub> · h,  S<sub>yon</sub> = P<sub>asos</sub> · h (to‘g‘ri prizma)', 'V = S<sub>осн</sub> · h,  S<sub>бок</sub> = P<sub>осн</sub> · h (прямая призма)', 'V = S<sub>base</sub> · h,  S<sub>lat</sub> = P<sub>base</sub> · h (right prism)'), 11, 'g11p2-t6', { v: ['S', 'h'], r: function (S, h) { return S * h; } });
  f(L('Piramida', 'Пирамида', 'Pyramid'), L('V = ' + fr('1', '3') + ' S<sub>asos</sub> · h,  S<sub>yon</sub> = ' + fr('1', '2') + ' P · l (muntazam)', 'V = ' + fr('1', '3') + ' S<sub>осн</sub> · h,  S<sub>бок</sub> = ' + fr('1', '2') + ' P · l (правильная)', 'V = ' + fr('1', '3') + ' S<sub>base</sub> · h,  S<sub>lat</sub> = ' + fr('1', '2') + ' P · l (regular)'), 11, 'g11p2-t9', { v: ['S', 'h'], r: function (S, h) { return S * h / 3; } });
  f(L('Kesik piramida', 'Усечённая пирамида', 'Frustum of a pyramid'), 'V = ' + fr('h', '3') + ' (S<sub>1</sub> + S<sub>2</sub> + ' + rt('S<sub>1</sub>S<sub>2</sub>') + ')', 11, 'g11p2-t9', { v: ['S₁', 'S₂', 'h'], r: function (a, b, h) { return h / 3 * (a + b + Math.sqrt(a * b)); } });
  f(L('Silindr', 'Цилиндр', 'Cylinder'), 'V = πr<sup>2</sup>h,  S<sub>yon</sub> = 2πrh,  S = 2πr(r + h)', 11, 'g11p2-t7', { v: ['r', 'h'], r: function (r, h) { return [['V', Math.PI * r * r * h], ['S<sub>yon</sub>', 2 * Math.PI * r * h], ['S', 2 * Math.PI * r * (r + h)]]; } });
  f(L('Konus', 'Конус', 'Cone'), 'V = ' + fr('1', '3') + ' πr<sup>2</sup>h,  S<sub>yon</sub> = πrl,  l = ' + rt('r<sup>2</sup> + h<sup>2</sup>'), 11, 'g11p2-t10', { v: ['r', 'h'], r: function (r, h) { var l = Math.hypot(r, h); return [['l', l], ['V', Math.PI * r * r * h / 3], ['S<sub>yon</sub>', Math.PI * r * l], ['S', Math.PI * r * (r + l)]]; } });
  f(L('Kesik konus', 'Усечённый конус', 'Truncated cone'), 'V = ' + fr('1', '3') + ' πh(R<sup>2</sup> + Rr + r<sup>2</sup>),  S<sub>yon</sub> = π(R + r)l', 11, 'g11p2-t10', { v: ['R', 'r', 'h'], r: function (R, r, h) { var l = Math.hypot(R - r, h); return [['V', Math.PI * h * (R * R + R * r + r * r) / 3], ['S<sub>yon</sub>', Math.PI * (R + r) * l]]; } });
  f(L('Shar va sfera', 'Шар и сфера', 'Ball and sphere'), 'V = ' + fr('4', '3') + ' πR<sup>3</sup>,  S = 4πR<sup>2</sup>', 11, 'g11p2-t12', { v: ['R'], r: function (R) { return [['V', 4 / 3 * Math.PI * R * R * R], ['S', 4 * Math.PI * R * R]]; } });
  f(L('Shar segmenti', 'Шаровой сегмент', 'Spherical cap'), 'V = πh<sup>2</sup>(R − ' + fr('h', '3') + '),  S = 2πRh', 11, 'g11p2-t12', { v: ['R', 'h'], r: function (R, h) { return [['V', Math.PI * h * h * (R - h / 3)], ['S', 2 * Math.PI * R * h]]; } });
  f(L('Shar kesimi radiusi', 'Радиус сечения шара', 'Radius of a section'), 'r = ' + rt('R<sup>2</sup> − d<sup>2</sup>'), 11, 'g11p2-t11', { v: ['R', 'd'], r: function (R, d) { return Math.sqrt(R * R - d * d); } });
  f(L('Eyler formulasi', 'Формула Эйлера', 'Euler’s formula'), L('U − Q + Y = 2  (uchlar − qirralar + yoqlar)', 'В − Р + Г = 2  (вершины − рёбра + грани)', 'V − E + F = 2  (vertices − edges + faces)'), 10, 'g10p2-t4');
  f(L('Ortogonal proyeksiya yuzi', 'Площадь ортогональной проекции', 'Area of a projection'), 'S<sub>pr</sub> = S · cos φ', 10, 'g10p2-t14', { v: ['S', 'φ°'], r: function (S, p) { return S * Math.cos(p * D2R); } });
  f(L('Perpendikulyar va og‘ma', 'Перпендикуляр и наклонная', 'Perpendicular and slant'), L('l<sup>2</sup> = h<sup>2</sup> + p<sup>2</sup>  (l — og‘ma, h — perpendikulyar, p — proyeksiya)', 'l<sup>2</sup> = h<sup>2</sup> + p<sup>2</sup>  (l — наклонная, h — перпендикуляр, p — проекция)', 'l<sup>2</sup> = h<sup>2</sup> + p<sup>2</sup>  (l — slant, h — perpendicular, p — projection)'), 10, 'g10p2-t11');

  root.NMFormulas = { cats: CATS, total: CATS.reduce(function (a, c) { return a + c.items.length; }, 0) };
})(this);
