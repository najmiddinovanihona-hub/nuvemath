// Nuvemath — 10-sinf, Algebra va analiz asoslari (manba: A. Zaitov, R. Hamrayeva va boshq. «Algebra va analiz asoslari. 10-sinf», Toshkent, 2022, yangi nashr).
// Boblar va mavzular tartibi darslikdan olingan; tushuntirishlar, topshiriqlar va chizmalar Nuvemath uchun qayta yozilgan.
(function (root) {
  'use strict';
  var C = root.NMCurriculum, H = C.H, L = H.L, mk = H.mk, PCS = H.PCS, choice = H.choice, pick = H.pick;
  var fr = H.fr, r6 = H.r6;
  function ch(n) { return L(n + '-bob', 'Глава ' + n, 'Chapter ' + n); }
  function ns(x) { return x < 0 ? '−' + (-x) : String(x); }
  function sg(x) { return x < 0 ? ' − ' + (-x) : ' + ' + x; }
  function kx(k, v) { v = v || 'x'; return k === 1 ? v : k === -1 ? '−' + v : ns(k) + v; }
  var SOM = L('so‘m', 'сум', 'sum');

  var part1 = {
    grade: 10, part: 1, edition: L('Algebra va analiz asoslari, 2022-yil nashri', 'Алгебра и начала анализа, издание 2022 г.', 'Algebra and analysis, 2022 edition'),
    title: L('Algebra va analiz asoslari: funksiyalar, logarifmlar, trigonometriya', 'Алгебра и начала анализа: функции, логарифмы, тригонометрия', 'Algebra and analysis: functions, logarithms, trigonometry'),
    book: L('A. Zaitov va boshq. Algebra va analiz asoslari, 10-sinf (Toshkent, 2022)', 'А. Заитов и др. Алгебра и начала анализа, 10 класс (Ташкент, 2022)', 'A. Zaitov et al. Algebra and Analysis, Grade 10 (Tashkent, 2022)'),
    intro: L('10-sinfda funksiya tushunchasini chuqurlashtiramiz: murakkab, teskari va davriy funksiyalar, grafik almashtirishlar. So‘ng ratsional va irratsional tenglamalar, ko‘rsatkichli va logarifmik funksiyalar, trigonometrik funksiyalar va tenglamalar, ehtimollik ta’riflarini o‘rganamiz.',
      'В 10 классе углубляем понятие функции: сложные, обратные и периодические функции, преобразования графиков. Затем рациональные и иррациональные уравнения, показательная и логарифмическая функции, тригонометрические функции и уравнения, определения вероятности.',
      'Grade 10 deepens the idea of a function: composite, inverse and periodic functions and graph transformations. Then rational and irrational equations, exponential and logarithmic functions, trigonometric functions and equations, and definitions of probability.'),
    sections: [
      { id: 's0', title: L('9-sinfni takrorlash', 'Повторение 9 класса', 'Review of grade 9'), icon: '🔁', color: 'blue', topics: [
        { id: 't1', lessons: L('Takrorlash', 'Повторение', 'Review'), title: L('Takrorlash: kvadrat funksiya, progressiyalar, trigonometrik ayniyatlar', 'Повторение: квадратичная функция, прогрессии, тождества', 'Review: quadratics, progressions, identities'),
          keys: ['x₀ = −b/2a', 'aₙ = a₁ + (n − 1)d', 'sin²α + cos²α = 1'],
          scene: [{ obj: 'ball', n: 2, color: 'blue' }, { obj: 'cube', n: 3, color: 'orange' }],
          explain: L('10-sinf kursiga tayyorlanish uchun asosiy natijalarni takrorlaymiz: parabola uchi x₀ = −b/2a, kvadrat tengsizlikni parabola yordamida yechish, arifmetik va geometrik progressiya formulalari, asosiy trigonometrik ayniyat sin²α + cos²α = 1 va qo‘shish formulalari.',
            'Чтобы подготовиться к 10 классу, повторим главное: вершина параболы x₀ = −b/2a, решение квадратного неравенства по параболе, формулы арифметической и геометрической прогрессий, основное тождество sin²α + cos²α = 1 и формулы сложения.',
            'To get ready for grade 10, we review the key results: the vertex x₀ = −b/2a, solving quadratic inequalities with the parabola, the arithmetic and geometric progression formulas, sin²α + cos²α = 1 and the addition formulas.'),
          rule: 'x₀ = −b/2a · Sₙ = (a₁ + aₙ)n/2',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var a1 = R(-5, 9), d = R(1, 6), n = R(5, 15), b1 = R(1, 4), q = pick([2, 3]), m = R(3, 6), x0 = R(-4, 4); return pick([{ q: 'a₁ = ' + ns(a1) + ', d = ' + d + ';  a<sub>' + n + '</sub>', a: a1 + (n - 1) * d }, { q: 'b₁ = ' + b1 + ', q = ' + q + ';  b<sub>' + m + '</sub>', a: b1 * Math.pow(q, m - 1) }, { q: 'y = x²' + sg(-2 * x0) + 'x + 1;  x₀', a: x0 }, { q: 'sin²37° + cos²37°', a: 1 }]); } },
            { type: 'choose', icon: '⌣', make: function (R) { var p = R(-6, 2), q = R(p + 1, 7); return choice('<span class="kd-big">x²' + sg(-(p + q)) + 'x' + sg(p * q) + ' ≤ 0</span>', ['[' + ns(p) + '; ' + ns(q) + ']', '(' + ns(p) + '; ' + ns(q) + ')', '(−∞; ' + ns(p) + '] ∪ [' + ns(q) + '; +∞)'], 0); } }
          ],
          quiz: [{ q: L('y = x² − 6x + 1: x₀ = ?', 'y = x² − 6x + 1: x₀ = ?', 'y = x² − 6x + 1: x₀ = ?'), o: ['3', '−3', '6'], a: 0 }, { q: 'sin²α + cos²α = ?', o: ['1', '0', '2'], a: 0 }] }
      ] },

      { id: 's1', title: L('Funksiyalar', 'Функции', 'Functions'), icon: 'ƒ', color: 'violet', topics: [
        { id: 't2', lessons: ch(1), title: L('Funksiya, berilish usullari, aniqlanish sohasi va qiymatlar to‘plami', 'Функция, способы задания, область определения и значений', 'Functions: how they are given, domain and range'),
          keys: ['D(f)', 'E(f)', L('jadval, formula, grafik', 'таблица, формула, график', 'table, formula, graph')],
          scene: [{ obj: 'rod', n: 3, color: 'violet' }],
          explain: L('Har bir x ∈ D ga yagona y mos qo‘yilsa — <b>funksiya</b>. U formula, jadval, grafik yoki so‘z bilan beriladi. <b>Aniqlanish sohasi</b> D(f) — formula ma’noga ega bo‘lgan x lar; <b>qiymatlar to‘plami</b> E(f) — funksiya qabul qiladigan qiymatlar. Masalan, y = √(4 − x²): D = [−2; 2], E = [0; 2].',
            'Если каждому x ∈ D сопоставлено единственное y — это <b>функция</b>. Её задают формулой, таблицей, графиком или словами. <b>Область определения</b> D(f) — значения x, при которых формула имеет смысл; <b>множество значений</b> E(f) — значения функции. Например, y = √(4 − x²): D = [−2; 2], E = [0; 2].',
            'A <b>function</b> assigns exactly one y to each x ∈ D. It can be given by a formula, a table, a graph or in words. The <b>domain</b> D(f) is where the formula makes sense; the <b>range</b> E(f) is the set of values it takes. E.g. y = √(4 − x²): D = [−2; 2], E = [0; 2].'),
          rule: 'D(f) · E(f)',
          acts: [
            { type: 'choose', title: L('Aniqlanish sohasi', 'Область определения', 'Domain'), icon: '📏', make: function (R) { var a = R(1, 9), k = R(0, 2); return [choice('<span class="kd-big">y = √(x − ' + a + ')</span>', ['[' + a + '; +∞)', '(' + a + '; +∞)', '(−∞; ' + a + ']'], 0), choice('<span class="kd-big">y = ' + fr(1, 'x − ' + a) + '</span>', ['x ≠ ' + a, 'x &gt; ' + a, 'x ≠ 0'], 0), choice('<span class="kd-big">y = √(' + a * a + ' − x²)</span>', ['[−' + a + '; ' + a + ']', '(−' + a + '; ' + a + ')', '[0; ' + a + ']'], 0)][k]; } },
            { type: 'drill', title: L('Qiymatlar to‘plami chegarasi', 'Граница множества значений', 'Range boundary'), n: 6, make: function (R) { var a = R(-6, 6), b = R(1, 4); return R(0, 1) ? { q: 'y = x²' + sg(a) + ';  min y', a: a } : { q: 'y = ' + b + 'sin x' + sg(a) + ';  max y', a: a + b }; } }
          ],
          quiz: [{ q: L('y = √(4 − x²): aniqlanish sohasi?', 'y = √(4 − x²): область определения?', 'y = √(4 − x²): domain?'), o: ['[−2; 2]', '(−2; 2)', '[0; 2]'], a: 0 }, { q: L('y = x² + 3: qiymatlar to‘plami?', 'y = x² + 3: множество значений?', 'y = x² + 3: range?'), o: ['[3; +∞)', '(3; +∞)', L('barcha sonlar', 'все числа', 'all numbers')], a: 0 }] },

        { id: 't3', lessons: ch(1), title: L('Funksiyalar ustida amallar. Murakkab va teskari funksiya', 'Действия над функциями. Сложная и обратная функция', 'Operations on functions. Composite and inverse functions'),
          keys: ['f(g(x))', 'f⁻¹', L('y = x ga simmetrik', 'симметрия относительно y = x', 'mirror in y = x')],
          scene: [{ obj: 'box', n: 2, color: 'pink' }],
          explain: L('<b>Murakkab funksiya</b> f(g(x)): avval g, so‘ng f. f(x) = 2x + 1, g(x) = x² bo‘lsa, f(g(3)) = f(9) = 19, g(f(3)) = g(7) = 49. <b>Teskari funksiya</b> f⁻¹ f ni «bekor qiladi»: y = 2x + 1 → x = (y − 1)/2, demak f⁻¹(x) = (x − 1)/2. Grafiklari y = x to‘g‘ri chizig‘iga nisbatan simmetrik.',
            '<b>Сложная функция</b> f(g(x)): сначала g, затем f. При f(x) = 2x + 1, g(x) = x²: f(g(3)) = f(9) = 19, g(f(3)) = g(7) = 49. <b>Обратная функция</b> f⁻¹ «отменяет» f: y = 2x + 1 → x = (y − 1)/2, значит f⁻¹(x) = (x − 1)/2. Графики симметричны относительно y = x.',
            'A <b>composite function</b> f(g(x)) applies g, then f. With f(x) = 2x + 1 and g(x) = x²: f(g(3)) = f(9) = 19 and g(f(3)) = g(7) = 49. The <b>inverse</b> f⁻¹ undoes f: y = 2x + 1 → x = (y − 1)/2, so f⁻¹(x) = (x − 1)/2. Their graphs mirror each other in y = x.'),
          rule: 'f(f⁻¹(x)) = x',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var a = R(2, 5), b = R(-5, 5), x = R(-3, 4), k = R(0, 2); return [{ q: 'f(x) = ' + kx(a) + sg(b) + ', g(x) = x²;  f(g(' + ns(x) + '))', a: a * x * x + b }, { q: 'f(x) = ' + kx(a) + sg(b) + ', g(x) = x²;  g(f(' + ns(x) + '))', a: Math.pow(a * x + b, 2) }, { q: 'f(x) = ' + kx(a) + sg(b) + ';  f⁻¹(' + ns(a * x + b) + ')', a: x }][k]; } },
            { type: 'choose', title: L('Teskari funksiya', 'Обратная функция', 'Inverse function'), icon: '↩️', make: function (R) { var a = R(2, 6), b = R(1, 9); return choice('<span class="kd-big">f(x) = ' + a + 'x + ' + b + '</span>', ['f⁻¹(x) = (x − ' + b + ')/' + a, 'f⁻¹(x) = (x + ' + b + ')/' + a, 'f⁻¹(x) = ' + a + 'x − ' + b], 0); } }
          ],
          quiz: [{ q: 'f(x) = 2x + 1, g(x) = x². f(g(3)) = ?', o: ['19', '49', '7'], a: 0 }, { q: L('f va f⁻¹ grafiklari qaysi chiziqqa simmetrik?', 'Графики f и f⁻¹ симметричны относительно...', 'f and f⁻¹ are mirror images in...'), o: ['y = x', 'Ox', 'Oy'], a: 0 }] },

        { id: 't4', lessons: ch(1), title: L('Davriy funksiyalar. Funksiya xossalari', 'Периодические функции. Свойства функций', 'Periodic functions. Properties of functions'),
          keys: ['f(x + T) = f(x)', L('juft/toq', 'чётность', 'even/odd'), L('monotonlik, ekstremum', 'монотонность, экстремум', 'monotonicity, extrema')],
          scene: [{ obj: 'cylinder', n: 2, color: 'green' }],
          explain: L('f(x + T) = f(x) barcha x uchun bajarilsa — f <b>davriy</b>, T — davr. sin x va cos x ning eng kichik musbat davri 2π, tg x niki π; sin kx niki 2π/k. Funksiya xossalari: aniqlanish sohasi, nollari, ishorasi, juft/toqligi, o‘sish va kamayish oraliqlari, eng katta va eng kichik qiymatlari.',
            'Если f(x + T) = f(x) для всех x — f <b>периодическая</b>, T — период. Наименьший положительный период sin x и cos x равен 2π, tg x — π; у sin kx — 2π/k. Свойства функции: область определения, нули, знаки, чётность, промежутки возрастания и убывания, наибольшее и наименьшее значения.',
            'If f(x + T) = f(x) for every x, f is <b>periodic</b> with period T. sin x and cos x have smallest positive period 2π, tan x has π, and sin kx has 2π/k. A function’s properties: domain, zeros, sign, parity, intervals of increase and decrease, largest and smallest values.'),
          rule: L('sin kx davri: 2π/k', 'период sin kx: 2π/k', 'period of sin kx: 2π/k'),
          acts: [
            { type: 'choose', title: L('Eng kichik davr', 'Наименьший период', 'Smallest period'), icon: '🔁', make: function (R) { var k = pick([2, 3, 4, 6]), f = pick(['sin', 'cos', 'tg']); var T = f === 'tg' ? (k === 1 ? 'π' : 'π/' + k) : (k === 2 ? 'π' : '2π/' + k); var W = f === 'tg' ? ['2π/' + k, k + 'π'] : ['π/' + k, k + 'π']; return choice('<span class="kd-big">y = ' + f + ' ' + k + 'x</span>', [T, W[0], W[1]].filter(function (v, i, A) { return A.indexOf(v) === i; }).concat(['2π']).slice(0, 3), 0); } },
            { type: 'drill', title: L('Davriylikdan foydalaning', 'Используйте периодичность', 'Use periodicity'), n: 5, make: function (R) { var T = R(2, 6), v = R(-9, 9), n = R(2, 9); return { q: mk(function (l) { return 'T = ' + T + ', f(1) = ' + ns(v) + ';  f(' + (1 + n * T) + ')'; }), a: v }; } }
          ],
          quiz: [{ q: L('sin x ning davri?', 'Период sin x?', 'Period of sin x?'), o: ['2π', 'π', 'π/2'], a: 0 }, { q: L('tg x ning davri?', 'Период tg x?', 'Period of tan x?'), o: ['π', '2π', 'π/2'], a: 0 }] },

        { id: 't5', lessons: ch(1), title: L('Funksiya grafigi ustida sodda almashtirishlar', 'Простейшие преобразования графиков', 'Graph transformations'),
          keys: ['f(x − a)', 'f(x) + b', 'k · f(x)', '−f(x), f(−x)'],
          scene: [{ obj: 'drone', n: 2, color: 'cyan' }],
          explain: L('y = f(x − a) — grafik a birlik <b>o‘ngga</b> siljiydi (a &gt; 0); y = f(x) + b — b birlik <b>yuqoriga</b>; y = k·f(x) — Oy bo‘yicha k marta cho‘ziladi; y = −f(x) — Ox ga nisbatan aks; y = f(−x) — Oy ga nisbatan aks; y = |f(x)| — Ox dan pastdagi qism yuqoriga ko‘chiriladi.',
            'y = f(x − a) — график сдвигается на a <b>вправо</b> (a &gt; 0); y = f(x) + b — на b <b>вверх</b>; y = k·f(x) — растяжение вдоль Oy в k раз; y = −f(x) — отражение относительно Ox; y = f(−x) — относительно Oy; y = |f(x)| — часть ниже Ox отражается вверх.',
            'y = f(x − a) shifts the graph a units <b>right</b> (a &gt; 0); y = f(x) + b shifts it b units <b>up</b>; y = k·f(x) stretches it vertically by k; y = −f(x) reflects in Ox; y = f(−x) reflects in Oy; y = |f(x)| flips the part below Ox upward.'),
          rule: L('f(x − a) + b: o‘ngga a, yuqoriga b', 'f(x − a) + b: вправо a, вверх b', 'f(x − a) + b: right a, up b'),
          acts: [
            { type: 'choose', icon: '↔️', make: function (R) { var a = R(1, 6), b = R(1, 6), k = R(0, 3); return [choice('<span class="kd-big">y = (x − ' + a + ')²</span>', [L(a + ' birlik o‘ngga', 'на ' + a + ' вправо', a + ' units right'), L(a + ' birlik chapga', 'на ' + a + ' влево', a + ' units left'), L(a + ' birlik yuqoriga', 'на ' + a + ' вверх', a + ' units up')], 0), choice('<span class="kd-big">y = x² − ' + b + '</span>', [L(b + ' birlik pastga', 'на ' + b + ' вниз', b + ' units down'), L(b + ' birlik o‘ngga', 'на ' + b + ' вправо', b + ' units right'), L(b + ' birlik yuqoriga', 'на ' + b + ' вверх', b + ' units up')], 0), choice('<span class="kd-big">y = −x²</span>', [L('Ox ga nisbatan aks', 'отражение от Ox', 'reflection in Ox'), L('Oy ga nisbatan aks', 'отражение от Oy', 'reflection in Oy'), L('siljish', 'сдвиг', 'a shift')], 0), choice('<span class="kd-big">y = (x + ' + a + ')² + ' + b + '</span>', [L('uchi (−' + a + '; ' + b + ')', 'вершина (−' + a + '; ' + b + ')', 'vertex (−' + a + '; ' + b + ')'), L('uchi (' + a + '; ' + b + ')', 'вершина (' + a + '; ' + b + ')', 'vertex (' + a + '; ' + b + ')'), L('uchi (' + b + '; −' + a + ')', 'вершина (' + b + '; −' + a + ')', 'vertex (' + b + '; −' + a + ')')], 0)][k]; } },
            { type: 'drill', title: L('Parabola uchi', 'Вершина параболы', 'Vertex'), n: 6, make: function (R) { var a = R(-6, 6), b = R(-6, 6); return R(0, 1) ? { q: 'y = (x' + sg(-a) + ')²' + sg(b) + ';  x₀', a: a } : { q: 'y = (x' + sg(-a) + ')²' + sg(b) + ';  y₀', a: b }; } }
          ],
          quiz: [{ q: L('y = (x − 3)² + 2 uchi?', 'Вершина y = (x − 3)² + 2?', 'Vertex of y = (x − 3)² + 2?'), o: ['(3; 2)', '(−3; 2)', '(2; 3)'], a: 0 }, { q: L('y = f(−x) — bu...', 'y = f(−x) — это...', 'y = f(−x) is...'), o: [L('Oy ga nisbatan aks', 'отражение от Oy', 'a reflection in Oy'), L('Ox ga nisbatan aks', 'отражение от Ox', 'a reflection in Ox'), L('siljish', 'сдвиг', 'a shift')], a: 0 }] },

        { id: 't6', lessons: ch(1), title: L('Chiziqli va kvadratik modellashtirish', 'Линейное и квадратичное моделирование', 'Linear and quadratic models'),
          keys: [L('chiziqli model y = kx + b', 'линейная модель y = kx + b', 'linear model y = kx + b'), L('kvadratik model', 'квадратичная модель', 'quadratic model'), L('optimallashtirish', 'оптимизация', 'optimisation')],
          scene: [{ obj: 'box', n: 2, color: 'orange' }],
          explain: L('Hayotdagi jarayonlarni funksiya bilan tasvirlaymiz. O‘zgarmas tezlikdagi o‘sish — <b>chiziqli</b> model: taksi narxi = 5 000 + 2 000 · km. Yuqoriga otilgan jism balandligi, foyda yoki yuz — <b>kvadratik</b> model; eng katta yoki eng kichik qiymat parabola uchida bo‘ladi. Masalan, perimetri 40 bo‘lgan to‘g‘ri to‘rtburchakning eng katta yuzi x(20 − x) ⇒ x = 10, S = 100.',
            'Реальные процессы описываем функциями. Рост с постоянной скоростью — <b>линейная</b> модель: цена такси = 5 000 + 2 000 · км. Высота брошенного вверх тела, прибыль или площадь — <b>квадратичная</b> модель; наибольшее или наименьшее значение — в вершине параболы. Например, наибольшая площадь прямоугольника с периметром 40: x(20 − x) ⇒ x = 10, S = 100.',
            'We describe real processes with functions. Steady growth is a <b>linear</b> model: taxi fare = 5 000 + 2 000 · km. The height of a thrown ball, profit or area give a <b>quadratic</b> model, with the maximum or minimum at the vertex. E.g. the largest rectangle with perimeter 40: x(20 − x) ⇒ x = 10, S = 100.'),
          rule: L('maksimum/minimum — parabola uchida', 'максимум/минимум — в вершине', 'max/min at the vertex'),
          acts: [
            { type: 'problem', title: L('Taksi', 'Такси', 'Taxi'), make: function (R) { var b = R(3, 8) * 1000, k = R(2, 5) * 500, x = R(3, 15); return { story: L('Taksi narxi: <b>' + b + '</b> so‘m + har km uchun <b>' + k + '</b> so‘m. <b>' + x + '</b> km yo‘l <u>qancha</u> turadi?', 'Такси: <b>' + b + '</b> сум + <b>' + k + '</b> сум за км. <u>Сколько стоят</u> <b>' + x + '</b> км?', 'A taxi charges <b>' + b + '</b> sum + <b>' + k + '</b> sum per km. <u>Cost of</u> <b>' + x + '</b> km?'), expr: [k, '·', x, '+', b, '=', k * x + b], ans: k * x + b, unit: SOM }; } },
            { type: 'drill', title: L('Eng katta yuz', 'Наибольшая площадь', 'Largest area'), n: 5, make: function (R) { var P = R(2, 10) * 8; return { q: mk(function (l) { return { uz: 'Perimetr ' + P + ' bo‘lgan to‘g‘ri to‘rtburchakning eng katta yuzi', ru: 'Наибольшая площадь прямоугольника с периметром ' + P, en: 'Largest area of a rectangle with perimeter ' + P }[l]; }), a: (P / 4) * (P / 4) }; } }
          ],
          quiz: [{ q: L('Perimetr 40. Eng katta yuz?', 'Периметр 40. Наибольшая площадь?', 'Perimeter 40. Largest area?'), o: ['100', '400', '96'], a: 0 }, { q: L('h(t) = −5t² + 20t: eng baland nuqta qachon?', 'h(t) = −5t² + 20t: когда наивысшая точка?', 'h(t) = −5t² + 20t: when is it highest?'), o: ['t = 2', 't = 4', 't = 20'], a: 0 }] }
      ] },

      { id: 's2', title: L('Ratsional va irratsional tenglamalar', 'Рациональные и иррациональные уравнения', 'Rational and irrational equations'), icon: '√', color: 'orange', topics: [
        { id: 't7', lessons: ch(2), title: L('Ratsional tenglamalar va ularning sistemalari', 'Рациональные уравнения и их системы', 'Rational equations and systems'),
          keys: [L('umumiy maxraj', 'общий знаменатель', 'common denominator'), L('chet ildiz', 'посторонний корень', 'extraneous root')],
          scene: [{ obj: 'cylinder', n: 2, color: 'orange' }],
          explain: L('Kasr-ratsional tenglamani yechish: 1) aniqlanish sohasini toping (maxraj ≠ 0); 2) umumiy maxrajga ko‘paytiring; 3) hosil bo‘lgan butun tenglamani yeching; 4) maxrajni nolga aylantiradigan ildizlarni tashlang. Masalan, (x² − 4)/(x − 2) = 5 → x + 2 = 5 → x = 3 (x ≠ 2).',
            'Решение дробно-рационального уравнения: 1) найти ОДЗ (знаменатель ≠ 0); 2) умножить на общий знаменатель; 3) решить целое уравнение; 4) отбросить корни, обращающие знаменатель в нуль. Например, (x² − 4)/(x − 2) = 5 → x + 2 = 5 → x = 3 (x ≠ 2).',
            'To solve a rational equation: 1) find the domain (denominator ≠ 0); 2) multiply by the common denominator; 3) solve the resulting equation; 4) discard roots that make a denominator zero. E.g. (x² − 4)/(x − 2) = 5 → x + 2 = 5 → x = 3 (x ≠ 2).'),
          rule: L('maxraj ≠ 0 — ildizlarni tekshiring!', 'знаменатель ≠ 0 — проверяйте корни!', 'denominator ≠ 0 — check the roots!'),
          acts: [
            { type: 'drill', n: 6, make: function (R) { var b = R(1, 9), k = R(-6, 9); if (k === 2 * b) k++; return { q: fr('x² − ' + b * b, 'x − ' + b) + ' = ' + ns(k) + ';  x', a: k - b }; } },
            { type: 'drill', title: L('Ildiz', 'Корень', 'Root'), n: 5, make: function (R) { var x = R(2, 9), a = R(1, 5); return { q: fr(a, 'x') + ' + ' + fr(a, '2x') + ' = ' + fr(3 * a, 2 * x) + ';  x', a: x }; } }
          ],
          quiz: [{ q: '(x² − 4)/(x − 2) = 5; x = ?', o: ['3', '2', L('3 va 2', '3 и 2', '3 and 2')], a: 0 }, { q: L('x/(x − 1) = 1/(x − 1). Ildiz?', 'x/(x − 1) = 1/(x − 1). Корень?', 'x/(x − 1) = 1/(x − 1). Root?'), o: [L('yo‘q', 'нет', 'none'), '1', '0'], a: 0 }] },

        { id: 't8', lessons: ch(2), title: L('Ratsional tengsizliklar va ularning sistemalari', 'Рациональные неравенства и их системы', 'Rational inequalities and systems'),
          keys: [L('intervallar usuli', 'метод интервалов', 'interval method'), 'P(x)/Q(x) &gt; 0'],
          scene: [{ obj: 'rod', n: 4, color: 'pink' }],
          explain: L('P(x)/Q(x) &gt; 0 tengsizlik (P · Q &gt; 0, Q ≠ 0) ga teng kuchli. Surat va maxraj nollarini son o‘qiga belgilaymiz, intervallar usuli bilan ishoralarni aniqlaymiz. Maxraj nollari doim «teshik» nuqta. Masalan, (x − 1)/(x + 3) ≤ 0 → (−3; 1].',
            'Неравенство P(x)/Q(x) &gt; 0 равносильно P · Q &gt; 0, Q ≠ 0. Отмечаем нули числителя и знаменателя, методом интервалов находим знаки. Нули знаменателя — всегда «выколотые» точки. Например, (x − 1)/(x + 3) ≤ 0 → (−3; 1].',
            'P(x)/Q(x) &gt; 0 is equivalent to P · Q &gt; 0 with Q ≠ 0. Mark the zeros of top and bottom and find signs by the interval method. Zeros of the denominator are always open points. E.g. (x − 1)/(x + 3) ≤ 0 → (−3; 1].'),
          rule: 'P/Q &gt; 0 ⇔ P · Q &gt; 0',
          acts: [
            { type: 'choose', icon: '±', make: function (R) { var a = R(1, 6), b = R(1, 6); return choice('<span class="kd-big">' + fr('x − ' + a, 'x + ' + b) + ' ≤ 0</span>', ['(−' + b + '; ' + a + ']', '[−' + b + '; ' + a + ']', '(−∞; −' + b + ') ∪ [' + a + '; +∞)'], 0); } },
            { type: 'drill', title: L('Butun yechimlar soni', 'Число целых решений', 'Number of integer solutions'), n: 5, make: function (R) { var a = R(-5, 2), b = R(a + 2, 8); return { q: fr('x' + sg(-b), 'x' + sg(-a)) + ' &lt; 0', a: b - a - 1 }; } }
          ],
          quiz: [{ q: '(x − 1)/(x + 3) ≤ 0', o: ['(−3; 1]', '[−3; 1]', '(−3; 1)'], a: 0 }, { q: L('Maxraj nollari javobga...', 'Нули знаменателя...', 'Zeros of the denominator are...'), o: [L('kirmaydi', 'не входят', 'excluded'), L('kiradi', 'входят', 'included'), L('ba’zan kiradi', 'иногда входят', 'sometimes included')], a: 0 }] },

        { id: 't9', lessons: ch(2), title: L('Irratsional tenglamalar va ularning sistemalari', 'Иррациональные уравнения и их системы', 'Irrational equations'),
          keys: [L('kvadratga ko‘tarish', 'возведение в квадрат', 'squaring'), L('tekshirish majburiy', 'проверка обязательна', 'checking is essential')],
          scene: [{ obj: 'cube', n: 3, color: 'violet' }],
          explain: L('O‘zgaruvchi ildiz ostida bo‘lgan tenglama — <b>irratsional</b>. Ikki tomonni kvadratga ko‘taramiz, lekin bunda chet ildizlar paydo bo‘lishi mumkin, shuning uchun tekshirish shart. √(x + 3) = x − 3 → x + 3 = x² − 6x + 9 → x = 6 yoki 1; x = 1 da o‘ng tomon manfiy — chet ildiz. Javob: 6.',
            'Уравнение с переменной под корнем — <b>иррациональное</b>. Возводим обе части в квадрат, но могут появиться посторонние корни, поэтому проверка обязательна. √(x + 3) = x − 3 → x + 3 = x² − 6x + 9 → x = 6 или 1; при x = 1 правая часть отрицательна — посторонний корень. Ответ: 6.',
            'An equation with the variable under a root is <b>irrational</b>. Square both sides — but extraneous roots may appear, so always check. √(x + 3) = x − 3 → x + 3 = x² − 6x + 9 → x = 6 or 1; at x = 1 the right side is negative, so it is extraneous. Answer: 6.'),
          rule: '√f = g ⇒ f = g², g ≥ 0',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var x = R(1, 12), a = R(-9, 9), k = R(0, 1); return k ? { q: '√(x' + sg(a) + ') = ' + x + ';  x', a: x * x - a } : { q: '√(2x' + sg(a) + ') = ' + x + ';  x', a: r6((x * x - a) / 2) }; } },
            { type: 'choose', title: L('Chet ildiz', 'Посторонний корень', 'Extraneous root'), icon: '⚠️', make: function () { return pick([
              choice('√(x + 3) = x − 3', ['x = 6', 'x = 1', 'x = 6; x = 1'], 0),
              choice('√(2x + 1) = x − 1', ['x = 4', 'x = 0', 'x = 4; x = 0'], 0),
              choice('√(x + 7) = x + 1', ['x = 2', 'x = −3', 'x = 2; x = −3'], 0)]); } }
          ],
          quiz: [{ q: '√(x + 3) = x − 3', o: ['6', '1', L('6 va 1', '6 и 1', '6 and 1')], a: 0 }, { q: L('√x = −2 ning ildizi?', 'Корень √x = −2?', 'Root of √x = −2?'), o: [L('yo‘q', 'нет', 'none'), '4', '−4'], a: 0 }] }
      ] },

      { id: 's3', title: L('Ko‘rsatkichli va logarifmik funksiyalar', 'Показательная и логарифмическая функции', 'Exponential and logarithmic functions'), icon: '📈', color: 'green', topics: [
        { id: 't10', lessons: ch(3), title: L('Ko‘rsatkichli funksiya', 'Показательная функция', 'The exponential function'),
          keys: ['y = aˣ', L('a &gt; 1 — o‘suvchi', 'a &gt; 1 — возрастает', 'a &gt; 1 — increasing'), '(0; 1)'],
          scene: [{ obj: 'cube', n: 6, color: 'green' }],
          explain: L('y = aˣ (a &gt; 0, a ≠ 1) — <b>ko‘rsatkichli funksiya</b>. D = ℝ, E = (0; +∞), grafik doim (0; 1) nuqtadan o‘tadi. a &gt; 1 da o‘suvchi, 0 &lt; a &lt; 1 da kamayuvchi. Bakteriyalar ko‘payishi, murakkab foiz, radioaktiv parchalanish — hammasi ko‘rsatkichli qonun.',
            'y = aˣ (a &gt; 0, a ≠ 1) — <b>показательная функция</b>. D = ℝ, E = (0; +∞), график всегда проходит через (0; 1). При a &gt; 1 возрастает, при 0 &lt; a &lt; 1 убывает. Рост бактерий, сложные проценты, радиоактивный распад — всё это показательный закон.',
            'y = aˣ (a &gt; 0, a ≠ 1) is the <b>exponential function</b>. D = ℝ, E = (0; +∞), and the graph always passes through (0; 1). It increases if a &gt; 1 and decreases if 0 &lt; a &lt; 1. Bacterial growth, compound interest and radioactive decay all follow this law.'),
          rule: 'a⁰ = 1 · aˣ &gt; 0',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var a = pick([2, 3, 5, 10]), x = R(-2, 4); return { q: a + '<sup>' + ns(x) + '</sup>', a: r6(Math.pow(a, x)) }; } },
            { type: 'choose', title: L('O‘suvchimi?', 'Возрастает?', 'Increasing?'), icon: '📈', make: function (R) { var T = pick([['2ˣ', 0], ['(1/3)ˣ', 1], ['5ˣ', 0], ['0,5ˣ', 1], ['(3/2)ˣ', 0], ['(2/7)ˣ', 1]]); return choice('<span class="kd-big">y = ' + T[0] + '</span>', [L('o‘suvchi', 'возрастающая', 'increasing'), L('kamayuvchi', 'убывающая', 'decreasing')], T[1]); } }
          ],
          quiz: [{ q: L('y = aˣ grafigi qaysi nuqtadan o‘tadi?', 'Через какую точку проходит y = aˣ?', 'Which point lies on every y = aˣ?'), o: ['(0; 1)', '(1; 0)', '(0; 0)'], a: 0 }, { q: '2⁻³ = ?', o: ['1/8', '−8', '−6'], a: 0 }] },

        { id: 't11', lessons: ch(3), title: L('Ko‘rsatkichli tenglama va tengsizliklar', 'Показательные уравнения и неравенства', 'Exponential equations and inequalities'),
          keys: ['a^f(x) = a^g(x) ⇒ f = g', L('a &gt; 1: belgi saqlanadi', 'a &gt; 1: знак сохраняется', 'a &gt; 1: sign kept')],
          scene: [{ obj: 'cube', n: 4, color: 'yellow' }],
          explain: L('Ikki tomonni bir asosga keltiramiz: 2ˣ = 32 = 2⁵ ⇒ x = 5; 9ˣ = 27 → 3²ˣ = 3³ ⇒ x = 3/2. Yangi o‘zgaruvchi: 4ˣ − 3 · 2ˣ − 4 = 0 → t = 2ˣ &gt; 0, t² − 3t − 4 = 0 → t = 4 → x = 2. Tengsizlikda a &gt; 1 bo‘lsa belgi saqlanadi, 0 &lt; a &lt; 1 bo‘lsa almashadi.',
            'Приводим к одному основанию: 2ˣ = 32 = 2⁵ ⇒ x = 5; 9ˣ = 27 → 3²ˣ = 3³ ⇒ x = 3/2. Замена: 4ˣ − 3 · 2ˣ − 4 = 0 → t = 2ˣ &gt; 0, t² − 3t − 4 = 0 → t = 4 → x = 2. В неравенстве при a &gt; 1 знак сохраняется, при 0 &lt; a &lt; 1 меняется.',
            'Write both sides with the same base: 2ˣ = 32 = 2⁵ ⇒ x = 5; 9ˣ = 27 → 3²ˣ = 3³ ⇒ x = 3/2. Substitution: 4ˣ − 3 · 2ˣ − 4 = 0 → t = 2ˣ &gt; 0, t² − 3t − 4 = 0 → t = 4 → x = 2. In inequalities the sign stays if a &gt; 1 and flips if 0 &lt; a &lt; 1.'),
          rule: L('bir asosga keltirish', 'приведение к одному основанию', 'same base'),
          acts: [
            { type: 'drill', n: 8, make: function (R) { var a = pick([2, 3, 5]), x = R(1, 5), k = R(0, 2), b = R(1, 3); return [{ q: a + '<sup>x</sup> = ' + Math.pow(a, x) + ';  x', a: x }, { q: a + '<sup>x − ' + b + '</sup> = ' + Math.pow(a, x) + ';  x', a: x + b }, { q: (a * a) + '<sup>x</sup> = ' + Math.pow(a, 2 * x) + ';  x', a: x }][k]; } },
            { type: 'choose', icon: '⚖️', make: function (R) { var x = R(1, 5); return R(0, 1) ? choice('<span class="kd-big">2<sup>x</sup> &gt; ' + Math.pow(2, x) + '</span>', ['x &gt; ' + x, 'x &lt; ' + x, 'x &gt; ' + Math.pow(2, x)], 0) : choice('<span class="kd-big">(1/2)<sup>x</sup> &gt; ' + fr(1, Math.pow(2, x)) + '</span>', ['x &lt; ' + x, 'x &gt; ' + x, 'x &lt; −' + x], 0); } }
          ],
          quiz: [{ q: '2ˣ = 32; x = ?', o: ['5', '16', '4'], a: 0 }, { q: '(1/3)ˣ &gt; 1/9', o: ['x &lt; 2', 'x &gt; 2', 'x &gt; 3'], a: 0 }] },

        { id: 't12', lessons: ch(3), title: L('Logarifm tushunchasi. Logarifmik funksiya', 'Логарифм. Логарифмическая функция', 'Logarithms. The logarithmic function'),
          keys: ['logₐb = c ⇔ aᶜ = b', 'y = logₐx', 'lg, ln'],
          scene: [{ obj: 'rod', n: 5, color: 'green' }],
          explain: L('b sonining a asosga ko‘ra <b>logarifmi</b> — a ni qanday darajaga ko‘tarsak b chiqadi: log₂8 = 3, chunki 2³ = 8. Shartlar: a &gt; 0, a ≠ 1, b &gt; 0. lg — o‘nli (10 asos), ln — natural (e ≈ 2,718 asos). y = logₐx — y = aˣ ga teskari funksiya: D = (0; +∞), grafik (1; 0) dan o‘tadi.',
            '<b>Логарифм</b> b по основанию a — степень, в которую надо возвести a, чтобы получить b: log₂8 = 3, так как 2³ = 8. Условия: a &gt; 0, a ≠ 1, b &gt; 0. lg — десятичный (основание 10), ln — натуральный (основание e ≈ 2,718). y = logₐx — обратная к y = aˣ: D = (0; +∞), график проходит через (1; 0).',
            'The <b>logarithm</b> of b to base a is the power you raise a to in order to get b: log₂8 = 3 because 2³ = 8. Conditions: a &gt; 0, a ≠ 1, b &gt; 0. lg is base 10, ln is base e ≈ 2.718. y = logₐx is the inverse of y = aˣ: D = (0; +∞) and the graph passes through (1; 0).'),
          rule: 'logₐb = c ⇔ aᶜ = b',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var a = pick([2, 3, 5, 10]), c = R(-2, 4), k = R(0, 1); return k ? { q: 'log<sub>' + a + '</sub>' + (c >= 0 ? Math.pow(a, c) : '(1/' + Math.pow(a, -c) + ')'), a: c } : { q: a + '<sup>log<sub>' + a + '</sub>' + (c + 7) + '</sup>', a: c + 7 }; } },
            { type: 'choose', title: L('Aniqlanish sohasi', 'Область определения', 'Domain'), icon: '📏', make: function (R) { var a = R(1, 9); return choice('<span class="kd-big">y = log<sub>2</sub>(x − ' + a + ')</span>', ['(' + a + '; +∞)', '[' + a + '; +∞)', 'x ≠ ' + a], 0); } }
          ],
          quiz: [{ q: 'log₂8 = ?', o: ['3', '4', '16'], a: 0 }, { q: 'lg 1000 = ?', o: ['3', '100', '1000'], a: 0 }, { q: 'logₐ1 = ?', o: ['0', '1', 'a'], a: 0 }] },

        { id: 't13', lessons: ch(3), title: L('Logarifmik ifodalarni ayniy almashtirish', 'Тождественные преобразования логарифмов', 'Laws of logarithms'),
          keys: ['logₐ(bc) = logₐb + logₐc', 'logₐbⁿ = n logₐb', 'logₐb = log_c b / log_c a'],
          scene: [{ obj: 'rod', n: 3, color: 'cyan' }],
          explain: L('Asosiy xossalar: logₐ(bc) = logₐb + logₐc; logₐ(b/c) = logₐb − logₐc; logₐbⁿ = n·logₐb; yangi asosga o‘tish: logₐb = log_c b / log_c a. Masalan, lg 2 + lg 5 = lg 10 = 1; log₂ 48 − log₂ 3 = log₂ 16 = 4. Logarifm ko‘paytirishni qo‘shishga aylantiradi — shuning uchun XVII asrda hisoblashni tezlashtirgan.',
            'Основные свойства: logₐ(bc) = logₐb + logₐc; logₐ(b/c) = logₐb − logₐc; logₐbⁿ = n·logₐb; переход к новому основанию: logₐb = log_c b / log_c a. Например, lg 2 + lg 5 = lg 10 = 1; log₂ 48 − log₂ 3 = log₂ 16 = 4. Логарифм превращает умножение в сложение — поэтому в XVII веке он ускорил вычисления.',
            'Main laws: logₐ(bc) = logₐb + logₐc; logₐ(b/c) = logₐb − logₐc; logₐbⁿ = n·logₐb; change of base: logₐb = log_c b / log_c a. E.g. lg 2 + lg 5 = lg 10 = 1; log₂ 48 − log₂ 3 = log₂ 16 = 4. Logarithms turn multiplication into addition — that is why they sped up calculation in the 17th century.'),
          rule: 'logₐ(bc) = logₐb + logₐc',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var a = pick([2, 3]), m = R(1, 4), n = R(1, 4), c = R(2, 7); return pick([{ q: 'lg 2 + lg 5', a: 1 }, { q: 'lg ' + Math.pow(10, m) * 4 + ' − lg 4', a: m }, { q: 'log<sub>' + a + '</sub>' + Math.pow(a, m) * c + ' − log<sub>' + a + '</sub>' + c, a: m }, { q: 'log<sub>' + a + '</sub>' + Math.pow(a, m) + ' + log<sub>' + a + '</sub>' + Math.pow(a, n), a: m + n }, { q: 'log<sub>' + Math.pow(a, 2) + '</sub>' + Math.pow(a, 2 * m), a: m }]); } },
            { type: 'choose', icon: '🔀', make: function () { return pick([
              choice('logₐ(bc) = ?', ['logₐb + logₐc', 'logₐb · logₐc', 'logₐb − logₐc'], 0),
              choice('logₐbⁿ = ?', ['n logₐb', '(logₐb)ⁿ', 'logₐb + n'], 0),
              choice('logₐb = ?', ['log_c b / log_c a', 'log_c a / log_c b', 'log_c b − log_c a'], 0)]); } }
          ],
          quiz: [{ q: 'lg 2 + lg 5 = ?', o: ['1', 'lg 7', '10'], a: 0 }, { q: 'log₂48 − log₂3 = ?', o: ['4', '45', '16'], a: 0 }] },

        { id: 't14', lessons: ch(3), title: L('Logarifmik tenglama va tengsizliklar', 'Логарифмические уравнения и неравенства', 'Logarithmic equations and inequalities'),
          keys: ['logₐf(x) = c ⇒ f(x) = aᶜ', L('ADS: f(x) &gt; 0', 'ОДЗ: f(x) &gt; 0', 'domain: f(x) &gt; 0')],
          scene: [{ obj: 'rod', n: 4, color: 'blue' }],
          explain: L('log₂(x − 1) = 3 → x − 1 = 2³ → x = 9. logₐf = logₐg ⇒ f = g (lekin f, g &gt; 0 ni tekshiring!). Tengsizlikda: a &gt; 1 da belgi saqlanadi, 0 &lt; a &lt; 1 da almashadi, va doim ADS: log₂ x &lt; 3 ⇔ 0 &lt; x &lt; 8.',
            'log₂(x − 1) = 3 → x − 1 = 2³ → x = 9. logₐf = logₐg ⇒ f = g (но проверьте f, g &gt; 0!). В неравенстве при a &gt; 1 знак сохраняется, при 0 &lt; a &lt; 1 меняется, и всегда ОДЗ: log₂ x &lt; 3 ⇔ 0 &lt; x &lt; 8.',
            'log₂(x − 1) = 3 → x − 1 = 2³ → x = 9. logₐf = logₐg ⇒ f = g (but check f, g &gt; 0!). For inequalities the sign stays if a &gt; 1 and flips if 0 &lt; a &lt; 1 — and always respect the domain: log₂ x &lt; 3 ⇔ 0 &lt; x &lt; 8.'),
          rule: 'log₂x &lt; 3 ⇔ 0 &lt; x &lt; 8',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var a = pick([2, 3, 5]), c = R(1, 4), b = R(-5, 5); return { q: 'log<sub>' + a + '</sub>(x' + sg(b) + ') = ' + c + ';  x', a: Math.pow(a, c) - b }; } },
            { type: 'choose', icon: '⚖️', make: function (R) { var c = R(1, 4); return R(0, 1) ? choice('<span class="kd-big">log<sub>2</sub>x &lt; ' + c + '</span>', ['(0; ' + Math.pow(2, c) + ')', '(−∞; ' + Math.pow(2, c) + ')', '(' + Math.pow(2, c) + '; +∞)'], 0) : choice('<span class="kd-big">log<sub>1/2</sub>x &gt; ' + c + '</span>', ['(0; 1/' + Math.pow(2, c) + ')', '(1/' + Math.pow(2, c) + '; +∞)', '(−∞; 1/' + Math.pow(2, c) + ')'], 0); } }
          ],
          quiz: [{ q: 'log₂(x − 1) = 3; x = ?', o: ['9', '7', '8'], a: 0 }, { q: 'log₂x &lt; 3', o: ['(0; 8)', '(−∞; 8)', '(8; +∞)'], a: 0 }] },

        { id: 't15', lessons: ch(3), title: L('Ko‘rsatkichli va logarifmik funksiyalarning tatbiqi', 'Применения показательной и логарифмической функций', 'Applications of exponentials and logs'),
          keys: [L('murakkab foiz', 'сложные проценты', 'compound interest'), L('yarim yemirilish davri', 'период полураспада', 'half-life'), 'pH, dB'],
          scene: [{ obj: 'medal', n: 2, color: 'yellow' }],
          explain: L('<b>Murakkab foiz</b>: S = S₀(1 + p/100)ⁿ — 1 000 000 so‘m yiliga 10% bilan 2 yilda 1 210 000 bo‘ladi. <b>Radioaktiv parchalanish</b>: m = m₀ · (1/2)^(t/T), T — yarim yemirilish davri. Logarifmik shkalalar: zilzila kuchi (Rixter), tovush (desibel), kislotalik (pH = −lg[H⁺]).',
            '<b>Сложные проценты</b>: S = S₀(1 + p/100)ⁿ — 1 000 000 сум под 10% годовых за 2 года станут 1 210 000. <b>Радиоактивный распад</b>: m = m₀ · (1/2)^(t/T), T — период полураспада. Логарифмические шкалы: сила землетрясения (Рихтер), звук (децибелы), кислотность (pH = −lg[H⁺]).',
            '<b>Compound interest</b>: S = S₀(1 + p/100)ⁿ — 1 000 000 sum at 10% a year becomes 1 210 000 in 2 years. <b>Radioactive decay</b>: m = m₀ · (1/2)^(t/T), where T is the half-life. Logarithmic scales: earthquakes (Richter), sound (decibels), acidity (pH = −lg[H⁺]).'),
          rule: 'S = S₀(1 + p/100)ⁿ',
          acts: [
            { type: 'problem', title: L('Murakkab foiz', 'Сложные проценты', 'Compound interest'), make: function (R) { var S = R(1, 9) * 100000, p = pick([10, 20]), k = 1 + p / 100; return { story: L('Bankka <b>' + S + '</b> so‘m yillik <b>' + p + '%</b> murakkab foiz bilan qo‘yildi. <b>2</b> yildan keyin <u>qancha</u> bo‘ladi?', 'В банк положили <b>' + S + '</b> сум под <b>' + p + '%</b> годовых (сложные проценты). <u>Сколько</u> будет через <b>2</b> года?', '<b>' + S + '</b> sum is deposited at <b>' + p + '%</b> compound interest. <u>How much</u> after <b>2</b> years?'), expr: [S, '·', k, '·', k, '=', r6(S * k * k)], ans: r6(S * k * k), unit: SOM }; } },
            { type: 'drill', title: L('Yarim yemirilish', 'Полураспад', 'Half-life'), n: 5, make: function (R) { var m = pick([64, 128, 256, 512, 800]), n = R(1, 4), T = R(2, 30); return { q: mk(function (l) { return 'm₀ = ' + m + ' g, T = ' + T + { uz: ' yil, t = ', ru: ' лет, t = ', en: ' years, t = ' }[l] + n * T + ';  m'; }), a: m / Math.pow(2, n) }; } }
          ],
          quiz: [{ q: L('1 000 000 so‘m, 10%, 2 yil?', '1 000 000 сум, 10%, 2 года?', '1 000 000 sum, 10%, 2 years?'), o: ['1 210 000', '1 200 000', '1 100 000'], a: 0 }, { q: L('100 g, 2 ta yarim yemirilish davridan keyin?', '100 г после 2 периодов полураспада?', '100 g after 2 half-lives?'), o: ['25', '50', '0'], a: 0 }] }
      ] },

      { id: 's4', title: L('Trigonometrik funksiyalar', 'Тригонометрические функции', 'Trigonometric functions'), icon: '〰️', color: 'pink', topics: [
        { id: 't16', lessons: ch(4), title: L('Trigonometrik funksiyalar va davriy jarayonlar', 'Тригонометрические функции и периодические процессы', 'Trig functions and periodic processes'),
          keys: ['y = A sin(ωx + φ)', L('amplituda A', 'амплитуда A', 'amplitude A'), 'T = 2π/ω'],
          scene: [{ obj: 'ball', n: 3, color: 'pink' }],
          explain: L('y = sin x — sinusoida: D = ℝ, E = [−1; 1], davri 2π, toq. y = cos x — juft, xuddi shu shakl π/2 ga siljigan. Garmonik tebranish y = A sin(ωx + φ): A — amplituda, T = 2π/ω — davr, φ — boshlang‘ich faza. Mayatnik, o‘zgaruvchan tok, tovush to‘lqinlari, kun uzunligi — davriy jarayonlar.',
            'y = sin x — синусоида: D = ℝ, E = [−1; 1], период 2π, нечётная. y = cos x — чётная, та же форма, сдвинутая на π/2. Гармоническое колебание y = A sin(ωx + φ): A — амплитуда, T = 2π/ω — период, φ — начальная фаза. Маятник, переменный ток, звук, длина дня — периодические процессы.',
            'y = sin x is a sine wave: D = ℝ, E = [−1; 1], period 2π, odd. y = cos x is even — the same shape shifted by π/2. A harmonic oscillation is y = A sin(ωx + φ): A is the amplitude, T = 2π/ω the period, φ the phase. Pendulums, AC current, sound and day length are periodic processes.'),
          rule: 'y = A sin(ωx + φ): T = 2π/ω',
          acts: [
            { type: 'drill', n: 6, make: function (R) { var A = R(1, 9), w = pick([1, 2, 3, 4]), b = R(-5, 5); return pick([{ q: 'y = ' + A + ' sin ' + (w === 1 ? '' : w) + 'x;  max y', a: A }, { q: 'y = ' + A + ' cos x' + sg(b) + ';  min y', a: b - A }, { q: 'y = ' + A + ' sin x' + sg(b) + ';  max y', a: A + b }]); } },
            { type: 'choose', icon: '〰️', make: function (R) { var w = pick([2, 3, 4, 6]); return choice('<span class="kd-big">y = 5 sin ' + w + 'x</span> — T = ?', [w === 2 ? 'π' : '2π/' + w, 'π/' + w, w + 'π'].filter(function (v, i, A) { return A.indexOf(v) === i; }).concat(['2π']).slice(0, 3), 0); } }
          ],
          quiz: [{ q: L('y = sin x qiymatlar to‘plami?', 'Множество значений y = sin x?', 'Range of y = sin x?'), o: ['[−1; 1]', '[0; 1]', L('barcha sonlar', 'все числа', 'all numbers')], a: 0 }, { q: L('y = 3 sin 2x davri?', 'Период y = 3 sin 2x?', 'Period of y = 3 sin 2x?'), o: ['π', '2π', '3π'], a: 0 }] },

        { id: 't17', lessons: ch(4), title: L('Teskari trigonometrik funksiyalar', 'Обратные тригонометрические функции', 'Inverse trigonometric functions'),
          keys: ['arcsin a ∈ [−π/2; π/2]', 'arccos a ∈ [0; π]', 'arctg a ∈ (−π/2; π/2)'],
          scene: [{ obj: 'cylinder', n: 1, color: 'violet' }],
          explain: L('arcsin a — sinusi a ga teng bo‘lgan [−π/2; π/2] dagi burchak: arcsin(1/2) = π/6 (30°). arccos a — [0; π] dagi burchak: arccos(−1/2) = 2π/3 (120°). arctg a — (−π/2; π/2) dagi burchak: arctg 1 = π/4. Xossalar: arcsin(−a) = −arcsin a, arccos(−a) = π − arccos a.',
            'arcsin a — угол из [−π/2; π/2], синус которого равен a: arcsin(1/2) = π/6 (30°). arccos a — угол из [0; π]: arccos(−1/2) = 2π/3 (120°). arctg a — угол из (−π/2; π/2): arctg 1 = π/4. Свойства: arcsin(−a) = −arcsin a, arccos(−a) = π − arccos a.',
            'arcsin a is the angle in [−π/2; π/2] whose sine is a: arcsin(1/2) = π/6 (30°). arccos a is the angle in [0; π]: arccos(−1/2) = 2π/3 (120°). arctan a lies in (−π/2; π/2): arctan 1 = π/4. Rules: arcsin(−a) = −arcsin a, arccos(−a) = π − arccos a.'),
          rule: 'arccos(−a) = π − arccos a',
          acts: [
            { type: 'drill', title: L('Gradusda', 'В градусах', 'In degrees'), n: 8, make: function (R) { var T = pick([['arcsin(1/2)', 30], ['arcsin(−1/2)', -30], ['arccos(1/2)', 60], ['arccos(−1/2)', 120], ['arctg 1', 45], ['arctg(−1)', -45], ['arccos 0', 90], ['arcsin 1', 90], ['arccos(−1)', 180], ['arctg √3', 60], ['arccos(√2/2)', 45], ['arcsin 0', 0]]); return { q: T[0] + ' = ?°', a: T[1] }; } },
            { type: 'choose', icon: '↩️', make: function () { return pick([
              choice(L('arcsin qiymatlari oralig‘i?', 'Множество значений arcsin?', 'Range of arcsin?'), ['[−π/2; π/2]', '[0; π]', '(−π/2; π/2)'], 0),
              choice(L('arccos qiymatlari oralig‘i?', 'Множество значений arccos?', 'Range of arccos?'), ['[0; π]', '[−π/2; π/2]', '[0; 2π]'], 0),
              choice('arccos(−a) = ?', ['π − arccos a', '−arccos a', 'arccos a'], 0)]); } }
          ],
          quiz: [{ q: 'arcsin(1/2) = ?', o: ['π/6', 'π/3', '30'], a: 0 }, { q: 'arccos(−1/2) = ?', o: ['2π/3', '−π/3', 'π/3'], a: 0 }] }
      ] },

      { id: 's5', title: L('Trigonometrik tenglama va tengsizliklar', 'Тригонометрические уравнения и неравенства', 'Trigonometric equations and inequalities'), icon: '📐', color: 'cyan', topics: [
        { id: 't18', lessons: ch(5), title: L('Sodda trigonometrik tenglamalar', 'Простейшие тригонометрические уравнения', 'Basic trigonometric equations'),
          keys: ['sin x = a ⇒ x = (−1)ⁿ arcsin a + πn', 'cos x = a ⇒ x = ±arccos a + 2πn', 'tg x = a ⇒ x = arctg a + πn'],
          scene: [{ obj: 'cylinder', n: 2, color: 'cyan' }],
          explain: L('|a| ≤ 1 bo‘lsa: sin x = a ⇒ x = (−1)ⁿ arcsin a + πn; cos x = a ⇒ x = ±arccos a + 2πn; tg x = a ⇒ x = arctg a + πn (n ∈ ℤ). |a| &gt; 1 bo‘lsa sin x = a va cos x = a ning yechimi yo‘q. Xususiy holatlar: sin x = 0 ⇒ x = πn, cos x = 0 ⇒ x = π/2 + πn.',
            'При |a| ≤ 1: sin x = a ⇒ x = (−1)ⁿ arcsin a + πn; cos x = a ⇒ x = ±arccos a + 2πn; tg x = a ⇒ x = arctg a + πn (n ∈ ℤ). При |a| &gt; 1 у sin x = a и cos x = a решений нет. Частные случаи: sin x = 0 ⇒ x = πn, cos x = 0 ⇒ x = π/2 + πn.',
            'For |a| ≤ 1: sin x = a ⇒ x = (−1)ⁿ arcsin a + πn; cos x = a ⇒ x = ±arccos a + 2πn; tan x = a ⇒ x = arctan a + πn (n ∈ ℤ). If |a| &gt; 1, sin x = a and cos x = a have no solutions. Special cases: sin x = 0 ⇒ x = πn, cos x = 0 ⇒ x = π/2 + πn.'),
          rule: 'cos x = a ⇒ x = ±arccos a + 2πn',
          acts: [
            { type: 'drill', title: L('[0°; 360°) dagi eng kichik yechim', 'Наименьшее решение в [0°; 360°)', 'Smallest solution in [0°; 360°)'), n: 8, make: function (R) { var T = pick([['sin x = 1/2', 30], ['cos x = 1/2', 60], ['tg x = 1', 45], ['sin x = 1', 90], ['cos x = −1', 180], ['cos x = 0', 90], ['sin x = −1', 270], ['tg x = √3', 60], ['sin x = √3/2', 60], ['cos x = −1/2', 120]]); return { q: T[0] + ';  x° ', a: T[1] }; } },
            { type: 'choose', icon: '📐', make: function () { return pick([
              choice('sin x = 2', [L('yechim yo‘q', 'нет решений', 'no solution'), 'x = arcsin 2', 'x = π/2'], 0),
              choice('sin x = 0', ['x = πn', 'x = 2πn', 'x = π/2 + πn'], 0),
              choice('cos x = 0', ['x = π/2 + πn', 'x = πn', 'x = 2πn'], 0),
              choice('tg x = 1', ['x = π/4 + πn', 'x = π/4 + 2πn', 'x = ±π/4 + 2πn'], 0)]); } }
          ],
          quiz: [{ q: 'cos x = 1/2', o: ['x = ±π/3 + 2πn', 'x = π/3 + πn', 'x = ±π/6 + 2πn'], a: 0 }, { q: 'cos x = 3', o: [L('yechim yo‘q', 'нет решений', 'no solution'), 'x = arccos 3', 'x = 0'], a: 0 }] },

        { id: 't19', lessons: ch(5), title: L('Trigonometrik tenglamalarni yechish usullari. Tengsizliklar', 'Методы решения тригонометрических уравнений. Неравенства', 'Methods for trig equations. Inequalities'),
          keys: [L('yangi o‘zgaruvchi', 'замена переменной', 'substitution'), L('ko‘paytuvchilarga ajratish', 'разложение на множители', 'factorising'), L('bir jinsli tenglama', 'однородное уравнение', 'homogeneous equation')],
          scene: [{ obj: 'ball', n: 2, color: 'blue' }],
          explain: L('Usullar: 1) <b>yangi o‘zgaruvchi</b>: 2sin²x − 3sin x + 1 = 0 → t = sin x, t = 1 yoki 1/2; 2) <b>ko‘paytuvchilarga ajratish</b>: sin 2x = sin x → sin x(2cos x − 1) = 0; 3) <b>bir jinsli</b>: sin x = cos x → tg x = 1. Tengsizliklar birlik aylanada yoki grafikda yechiladi: sin x &gt; 1/2 ⇔ π/6 + 2πn &lt; x &lt; 5π/6 + 2πn.',
            'Методы: 1) <b>замена</b>: 2sin²x − 3sin x + 1 = 0 → t = sin x, t = 1 или 1/2; 2) <b>разложение на множители</b>: sin 2x = sin x → sin x(2cos x − 1) = 0; 3) <b>однородные</b>: sin x = cos x → tg x = 1. Неравенства решают на единичной окружности или по графику: sin x &gt; 1/2 ⇔ π/6 + 2πn &lt; x &lt; 5π/6 + 2πn.',
            'Methods: 1) <b>substitution</b>: 2sin²x − 3sin x + 1 = 0 → t = sin x, t = 1 or 1/2; 2) <b>factorising</b>: sin 2x = sin x → sin x(2cos x − 1) = 0; 3) <b>homogeneous</b>: sin x = cos x → tan x = 1. Inequalities are solved on the unit circle or the graph: sin x &gt; 1/2 ⇔ π/6 + 2πn &lt; x &lt; 5π/6 + 2πn.'),
          rule: L('t = sin x, |t| ≤ 1', 't = sin x, |t| ≤ 1', 't = sin x, |t| ≤ 1'),
          acts: [
            { type: 'choose', title: L('Yangi o‘zgaruvchi', 'Замена', 'Substitution'), icon: '🔁', make: function (R) { var T = pick([['2sin²x − 3sin x + 1 = 0', 'sin x = 1; sin x = 1/2', 'sin x = −1; sin x = −1/2'], ['2cos²x − cos x − 1 = 0', 'cos x = 1; cos x = −1/2', 'cos x = −1; cos x = 1/2'], ['sin²x − sin x = 0', 'sin x = 0; sin x = 1', 'sin x = 0; sin x = −1']]); return choice('<span class="kd-big">' + T[0] + '</span>', [T[1], T[2], L('yechim yo‘q', 'нет решений', 'no solution')], 0); } },
            { type: 'drill', title: L('[0°; 360°) dagi yechimlar soni', 'Число решений в [0°; 360°)', 'Number of solutions in [0°; 360°)'), n: 5, make: function (R) { var T = pick([['sin x = 1/2', 2], ['cos x = 1', 1], ['sin x = 0', 2], ['tg x = 1', 2], ['cos x = 2', 0], ['sin x = −1', 1], ['sin x · cos x = 0', 4]]); return { q: T[0], a: T[1] }; } }
          ],
          quiz: [{ q: 'sin x = cos x', o: ['x = π/4 + πn', 'x = π/4 + 2πn', 'x = πn'], a: 0 }, { q: L('sin x &gt; 1/2 (bir aylanma ichida)', 'sin x &gt; 1/2 (в пределах одного оборота)', 'sin x &gt; 1/2 (within one turn)'), o: ['(π/6; 5π/6)', '(0; π/6)', '(π/3; 2π/3)'], a: 0 }] }
      ] },

      { id: 's6', title: L('Ehtimollar nazariyasi', 'Теория вероятностей', 'Probability'), icon: '🎲', color: 'yellow', topics: [
        { id: 't20', lessons: ch(6), title: L('Tasodifiy hodisalar. Ehtimollik ta’riflari', 'Случайные события. Определения вероятности', 'Random events. Definitions of probability'),
          keys: [L('klassik', 'классическое', 'classical'), L('statistik', 'статистическое', 'statistical'), L('geometrik', 'геометрическое', 'geometric'), 'P(A ∪ B)'],
          scene: [{ obj: 'cube', n: 2, color: 'yellow' }, { obj: 'ball', n: 2, color: 'pink' }],
          explain: L('<b>Klassik</b> ta’rif: P(A) = m/n (teng imkoniyatli natijalar). <b>Statistik</b>: ko‘p tajribadagi nisbiy chastota. <b>Geometrik</b>: P = qulay soha o‘lchovi / butun soha o‘lchovi (masalan, nishonga tegish). Qarama-qarshi hodisa: P(Ā) = 1 − P(A). Birgalikda bo‘lmagan hodisalar uchun P(A ∪ B) = P(A) + P(B); bog‘liq bo‘lmaganlar uchun P(A ∩ B) = P(A) · P(B).',
            '<b>Классическое</b> определение: P(A) = m/n (равновозможные исходы). <b>Статистическое</b>: относительная частота при многих опытах. <b>Геометрическое</b>: P = мера благоприятной области / мера всей области (например, попадание в мишень). Противоположное событие: P(Ā) = 1 − P(A). Для несовместных P(A ∪ B) = P(A) + P(B); для независимых P(A ∩ B) = P(A) · P(B).',
            'The <b>classical</b> definition: P(A) = m/n (equally likely outcomes). <b>Statistical</b>: the relative frequency over many trials. <b>Geometric</b>: P = measure of the favourable region / measure of the whole (e.g. hitting a target). Complement: P(Ā) = 1 − P(A). For mutually exclusive events P(A ∪ B) = P(A) + P(B); for independent ones P(A ∩ B) = P(A) · P(B).'),
          rule: 'P(Ā) = 1 − P(A)',
          acts: [
            { type: 'drill', title: L('O‘nli kasrda', 'Десятичной дробью', 'As a decimal'), n: 8, make: function (R) { var k = R(0, 3), p = pick([0.1, 0.2, 0.25, 0.4, 0.5, 0.6, 0.75, 0.8]), q = pick([0.5, 0.2, 0.4, 0.8]); return [{ q: 'P(A) = ' + p + ';  P(Ā)', a: r6(1 - p) }, { q: mk(function (l) { return { uz: 'Ikki tanga: P(ikkalasi gerb)', ru: 'Две монеты: P(оба герба)', en: 'Two coins: P(both heads)' }[l]; }), a: 0.25 }, { q: mk(function (l) { return 'P(A) = ' + p + ', P(B) = ' + q + { uz: ' (bog‘liq emas);  P(A ∩ B)', ru: ' (независимы);  P(A ∩ B)', en: ' (independent);  P(A ∩ B)' }[l]; }), a: r6(p * q) }, { q: mk(function (l) { return { uz: 'Tanga 3 marta tashlandi: P(3 ta gerb)', ru: 'Монету бросили 3 раза: P(3 герба)', en: 'A coin is tossed 3 times: P(3 heads)' }[l]; }), a: 0.125 }][k]; } },
            { type: 'choose', title: L('Geometrik ehtimollik', 'Геометрическая вероятность', 'Geometric probability'), icon: '🎯', make: function (R) { var r = R(1, 4), Rr = r * 2; return choice(L('Radiusi <b>' + Rr + '</b> bo‘lgan doiraga tasodifan nuqta tashlandi. U markazdagi radiusi <b>' + r + '</b> bo‘lgan doiraga tushish ehtimolligi?', 'В круг радиуса <b>' + Rr + '</b> наугад бросают точку. Вероятность попасть в центральный круг радиуса <b>' + r + '</b>?', 'A point is dropped at random in a disc of radius <b>' + Rr + '</b>. Probability it lands in the central disc of radius <b>' + r + '</b>?'), ['1/4', '1/2', '1/8'], 0); } }
          ],
          quiz: [{ q: 'P(A) = 0,3. P(Ā) = ?', o: [L('0,7', '0,7', '0.7'), L('0,3', '0,3', '0.3'), '1'], a: 0 }, { q: L('Ikki kubik, yig‘indi 12. Ehtimollik?', 'Два кубика, сумма 12. Вероятность?', 'Two dice, sum 12. Probability?'), o: ['1/36', '1/12', '1/6'], a: 0 }] }
      ] }
    ]
  };
  C.addPart(part1);
})(this);
