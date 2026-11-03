// Nuvemath — 7-sinf, Algebra (manba: A. Akmalov va boshq. «Algebra. 7-sinf», Toshkent, 2022, yangi nashr).
// Boblar va mavzular tartibi darslikdan olingan; tushuntirishlar, topshiriqlar va chizmalar Nuvemath uchun qayta yozilgan.
(function (root) {
  'use strict';
  var C = root.NMCurriculum, H = C.H, L = H.L, mk = H.mk, PCS = H.PCS, choice = H.choice, pick = H.pick;
  var fr = H.fr, gcd = H.gcd;
  var SOM = L('so‘m', 'сум', 'sum');
  function ch(n) { return L(n + '-bob', 'Глава ' + n, 'Chapter ' + n); }
  function ns(x) { return x < 0 ? '−' + (-x) : String(x); }
  function ps(x) { return x < 0 ? '(−' + (-x) + ')' : String(x); }
  function sg(x) { return x < 0 ? ' − ' + (-x) : ' + ' + x; }          // " + 3" / " − 3"
  function kx(k, v) { v = v || 'x'; return k === 1 ? v : k === -1 ? '−' + v : ns(k) + v; }
  function fact(n) { return n < 2 ? 1 : n * fact(n - 1); }
  function fig(inner, w, h) { return '<div class="kd-fig"><svg viewBox="0 0 ' + (w || 300) + ' ' + (h || 180) + '">' + inner + '</svg></div>'; }
  // y = kx + b grafigi, −6..6 panjara
  function lineGraph(k, b) { var s = '', c = 130, u = 20, X = function (x) { return c + x * u; }, Y = function (y) { return c - y * u; };
    for (var i = -6; i <= 6; i++) s += '<line x1="' + X(i) + '" y1="' + Y(-6) + '" x2="' + X(i) + '" y2="' + Y(6) + '" stroke="rgba(127,150,200,.25)"/><line x1="' + X(-6) + '" y1="' + Y(i) + '" x2="' + X(6) + '" y2="' + Y(i) + '" stroke="rgba(127,150,200,.25)"/>';
    s += '<line x1="' + X(-6) + '" y1="' + c + '" x2="' + X(6) + '" y2="' + c + '" stroke="currentColor" stroke-width="2"/><line x1="' + c + '" y1="' + Y(-6) + '" x2="' + c + '" y2="' + Y(6) + '" stroke="currentColor" stroke-width="2"/>';
    s += '<text x="' + (X(6) + 8) + '" y="' + (c + 5) + '" font-size="14" fill="currentColor">x</text><text x="' + (c + 6) + '" y="' + (Y(6) - 4) + '" font-size="14" fill="currentColor">y</text><text x="' + (X(1)) + '" y="' + (c + 16) + '" font-size="12" fill="currentColor" text-anchor="middle">1</text><text x="' + (c - 8) + '" y="' + (Y(1) + 4) + '" font-size="12" fill="currentColor" text-anchor="middle">1</text>';
    var x1 = -6, x2 = 6; if (k) { var xa = (-6 - b) / k, xb = (6 - b) / k; x1 = Math.max(-6, Math.min(xa, xb)); x2 = Math.min(6, Math.max(xa, xb)); }
    s += '<line x1="' + X(x1).toFixed(1) + '" y1="' + Y(k * x1 + b).toFixed(1) + '" x2="' + X(x2).toFixed(1) + '" y2="' + Y(k * x2 + b).toFixed(1) + '" stroke="#ff6b8b" stroke-width="3"/><circle cx="' + c + '" cy="' + Y(b) + '" r="4" fill="#ff6b8b"/>';
    return fig(s, 290, 270); }

  var part2 = {
    grade: 7, part: 2, edition: L('Algebra, 2022-yil nashri', 'Алгебра, издание 2022 г.', 'Algebra, 2022 edition'),
    title: L('Algebra: ko‘phadlar, formulalar, funksiya va sistemalar', 'Алгебра: многочлены, формулы, функция и системы', 'Algebra: polynomials, identities, functions and systems'),
    book: L('A. Akmalov va boshq. Algebra, 7-sinf (Toshkent, 2022)', 'А. Акмалов и др. Алгебра, 7 класс (Ташкент, 2022)', 'A. Akmalov et al. Algebra, Grade 7 (Tashkent, 2022)'),
    intro: L('Al-Xorazmiy asos solgan algebra: daraja va birhadlar, ko‘phadlar ustida amallar, qisqa ko‘paytirish formulalari, algebraik kasrlar, chiziqli tenglama va funksiya, tenglamalar sistemasi va kombinatorika.',
      'Алгебра, основанная аль-Хорезми: степени и одночлены, действия с многочленами, формулы сокращённого умножения, алгебраические дроби, линейное уравнение и функция, системы уравнений и комбинаторика.',
      'Algebra, founded by al-Khwarizmi: powers and monomials, operations on polynomials, special products, algebraic fractions, linear equations and functions, simultaneous equations and combinatorics.'),
    sections: [
      { id: 's1', title: L('Algebraik ifodalar va daraja', 'Алгебраические выражения и степень', 'Expressions and powers'), icon: '🔤', color: 'blue', topics: [
        { id: 't1', lessons: ch(1), title: L('Sonli va algebraik ifodalar. Formulalar', 'Числовые и алгебраические выражения. Формулы', 'Expressions and formulas'),
          keys: [L('ifoda qiymati', 'значение выражения', 'value'), 'S = v · t', 'P = 2(a + b)'],
          scene: [{ obj: 'book', n: 2, color: 'blue' }],
          explain: L('Harflar qatnashgan ifoda — <b>algebraik ifoda</b>. Harflar o‘rniga sonlar qo‘yib, uning qiymatini topamiz. <b>Formula</b> — miqdorlar orasidagi bog‘lanish: P = 2(a + b), S = vt. a = −2, b = 3 bo‘lsa, a² − 2ab = 4 + 12 = 16.',
            'Выражение с буквами — <b>алгебраическое</b>. Подставляя числа вместо букв, находим его значение. <b>Формула</b> — связь между величинами: P = 2(a + b), S = vt. При a = −2, b = 3: a² − 2ab = 4 + 12 = 16.',
            'An expression with letters is <b>algebraic</b>. Substitute numbers for the letters to find its value. A <b>formula</b> links quantities: P = 2(a + b), S = vt. If a = −2 and b = 3, a² − 2ab = 4 + 12 = 16.'),
          rule: L('a = −2, b = 3: a² − 2ab = 16', 'a = −2, b = 3: a² − 2ab = 16', 'a = −2, b = 3: a² − 2ab = 16'),
          acts: [
            { type: 'drill', n: 8, make: function (R) { var a = R(-6, 6) || 2, b = R(-5, 5) || -1; return [{ q: 'a² − 2ab,  a = ' + ns(a) + ', b = ' + ns(b), a: a * a - 2 * a * b }, { q: '3a + 2b,  a = ' + ns(a) + ', b = ' + ns(b), a: 3 * a + 2 * b }, { q: '(a − b)²,  a = ' + ns(a) + ', b = ' + ns(b), a: (a - b) * (a - b) }][R(0, 2)]; } },
            { type: 'problem', title: L('Formula', 'Формула', 'Formula'), make: function (R) { var a = R(3, 20), b = R(2, 15); return { story: L('To‘g‘ri to‘rtburchak perimetri P = 2(a + b). a = <b>' + a + '</b>, b = <b>' + b + '</b> bo‘lsa, <u>P</u>?', 'Периметр прямоугольника P = 2(a + b). При a = <b>' + a + '</b>, b = <b>' + b + '</b> <u>P</u> = ?', 'A rectangle’s perimeter is P = 2(a + b). If a = <b>' + a + '</b> and b = <b>' + b + '</b>, <u>P</u> = ?'), expr: [a, '+', b, '·', 2, '=', 2 * (a + b)], ans: 2 * (a + b), unit: H.CM }; } }
          ],
          quiz: [{ q: 'a = −2, b = 3: a² − 2ab = ?', o: ['16', '−8', '8'], a: 0 }, { q: 'x = −1: x² + x = ?', o: ['0', '−2', '2'], a: 0 }] },

        { id: 't2', lessons: ch(1), title: L('Natural ko‘rsatkichli daraja va uning xossalari', 'Степень с натуральным показателем и её свойства', 'Powers and their laws'),
          keys: ['aᵐ · aⁿ = aᵐ⁺ⁿ', 'aᵐ : aⁿ = aᵐ⁻ⁿ', '(aᵐ)ⁿ = aᵐⁿ', '(ab)ⁿ = aⁿbⁿ'],
          scene: [{ obj: 'cube', n: 8, color: 'violet' }],
          explain: L('aⁿ = a · a · … · a (n marta). Xossalar: a³ · a⁴ = a⁷ (ko‘rsatkichlar qo‘shiladi), a⁹ : a⁵ = a⁴ (ayiriladi), (a²)³ = a⁶ (ko‘paytiriladi), (2a)³ = 8a³. Manfiy sonning juft darajasi musbat: (−2)⁴ = 16, toq darajasi manfiy: (−2)³ = −8.',
            'aⁿ = a · a · … · a (n раз). Свойства: a³ · a⁴ = a⁷ (показатели складываются), a⁹ : a⁵ = a⁴ (вычитаются), (a²)³ = a⁶ (умножаются), (2a)³ = 8a³. Чётная степень отрицательного числа положительна: (−2)⁴ = 16, нечётная — отрицательна: (−2)³ = −8.',
            'aⁿ = a · a · … · a (n times). Laws: a³ · a⁴ = a⁷ (add exponents), a⁹ : a⁵ = a⁴ (subtract), (a²)³ = a⁶ (multiply), (2a)³ = 8a³. An even power of a negative is positive: (−2)⁴ = 16; an odd power is negative: (−2)³ = −8.'),
          rule: 'aᵐ · aⁿ = aᵐ⁺ⁿ · (aᵐ)ⁿ = aᵐⁿ',
          acts: [
            { type: 'drill', title: L('Ko‘rsatkichni toping', 'Найдите показатель', 'Find the exponent'), n: 8, make: function (R) { var m = R(2, 9), n = R(2, 6); return [{ q: 'a<sup>' + m + '</sup> · a<sup>' + n + '</sup> = a<sup>□</sup>;  □', a: m + n }, { q: 'a<sup>' + (m + n) + '</sup> : a<sup>' + n + '</sup> = a<sup>□</sup>;  □', a: m }, { q: '(a<sup>' + m + '</sup>)<sup>' + n + '</sup> = a<sup>□</sup>;  □', a: m * n }][R(0, 2)]; } },
            { type: 'drill', title: L('Hisoblang', 'Вычислите', 'Evaluate'), n: 6, make: function (R) { var b = R(-5, 5) || -2, e = R(2, 4); return { q: ps(b) + '<sup>' + e + '</sup>', a: Math.pow(b, e) }; } }
          ],
          quiz: [{ q: 'a³ · a⁴ = ?', o: ['a⁷', 'a¹²', '2a⁷'], a: 0 }, { q: '(−2)³ = ?', o: ['−8', '8', '−6'], a: 0 }] },

        { id: 't3', lessons: ch(1), title: L('Birhadlar. Standart shakl, ko‘paytirish va bo‘lish', 'Одночлены. Стандартный вид, умножение и деление', 'Monomials'),
          keys: [L('koeffitsiyent', 'коэффициент', 'coefficient'), '3a²b · 2ab³ = 6a³b⁴'],
          scene: [{ obj: 'box', n: 2, color: 'orange' }],
          explain: L('<b>Birhad</b> — sonlar va harflarning ko‘paytmasi: 3a²b. Standart shaklda oldin son (<b>koeffitsiyent</b>), so‘ng harflar darajalari bilan yoziladi. Ko‘paytirishda koeffitsiyentlar ko‘paytiriladi, bir xil harflar darajalari qo‘shiladi: 3a²b · 2ab³ = 6a³b⁴.',
            '<b>Одночлен</b> — произведение чисел и букв: 3a²b. В стандартном виде сначала число (<b>коэффициент</b>), затем буквы со степенями. При умножении коэффициенты перемножаем, показатели одинаковых букв складываем: 3a²b · 2ab³ = 6a³b⁴.',
            'A <b>monomial</b> is a product of numbers and letters: 3a²b. In standard form the number (<b>coefficient</b>) comes first, then letters with powers. To multiply, multiply coefficients and add the powers of matching letters: 3a²b · 2ab³ = 6a³b⁴.'),
          rule: '3a²b · 2ab³ = 6a³b⁴',
          acts: [
            { type: 'drill', title: L('Koeffitsiyent', 'Коэффициент', 'Coefficient'), n: 6, make: function (R) { var a = R(-6, 6) || 2, b = R(2, 7), m = R(1, 4), n = R(1, 4); return R(0, 1) ? { q: ns(a) + 'x<sup>' + m + '</sup> · ' + b + 'x<sup>' + n + '</sup> = □x<sup>' + (m + n) + '</sup>;  □', a: a * b } : { q: ns(a * b) + 'x<sup>' + (m + n) + '</sup> : ' + b + 'x<sup>' + n + '</sup> = □x<sup>' + m + '</sup>;  □', a: a }; } },
            { type: 'choose', icon: '✖️', make: function (R) { var a = R(2, 5), b = R(3, 5), m = R(1, 3), n = R(1, 3); return choice('<span class="kd-big">' + a + 'a<sup>' + m + '</sup>b · ' + b + 'ab<sup>' + n + '</sup></span>', [a * b + 'a<sup>' + (m + 1) + '</sup>b<sup>' + (n + 1) + '</sup>', (a + b) + 'a<sup>' + (m + 1) + '</sup>b<sup>' + (n + 1) + '</sup>', a * b + 'a<sup>' + m + '</sup>b<sup>' + n + '</sup>'], 0); } }
          ],
          quiz: [{ q: '3a²b · 2ab³ = ?', o: ['6a³b⁴', '5a³b⁴', '6a²b³'], a: 0 }, { q: L('−5x²y koeffitsiyenti?', 'Коэффициент −5x²y?', 'Coefficient of −5x²y?'), o: ['−5', '5', '2'], a: 0 }] },

        { id: 't4', lessons: ch(1), title: L('Ko‘phadlar. O‘xshash hadlar, qo‘shish va ayirish', 'Многочлены. Подобные члены, сложение и вычитание', 'Polynomials: like terms, adding and subtracting'),
          keys: [L('ko‘phad', 'многочлен', 'polynomial'), L('o‘xshash hadlar', 'подобные члены', 'like terms')],
          scene: [{ obj: 'cube', n: 3, color: 'green' }, { obj: 'cube', n: 3, color: 'blue' }],
          explain: L('<b>Ko‘phad</b> — birhadlar yig‘indisi: 2x² − 3x + 5. Harf qismi bir xil hadlar — o‘xshash, ularni jamlaymiz. Ayirishda ikkinchi ko‘phad ishoralari o‘zgaradi: (3x² + 2x) − (x² − 4x) = 2x² + 6x.',
            '<b>Многочлен</b> — сумма одночленов: 2x² − 3x + 5. Члены с одинаковой буквенной частью — подобные, их приводим. При вычитании знаки второго многочлена меняются: (3x² + 2x) − (x² − 4x) = 2x² + 6x.',
            'A <b>polynomial</b> is a sum of monomials: 2x² − 3x + 5. Terms with the same letter part are like terms; combine them. When subtracting, flip the signs of the second polynomial: (3x² + 2x) − (x² − 4x) = 2x² + 6x.'),
          rule: '(3x² + 2x) − (x² − 4x) = 2x² + 6x',
          acts: [
            { type: 'drill', title: L('x² oldidagi son', 'Коэффициент при x²', 'Coefficient of x²'), n: 6, make: function (R) { var a = R(1, 9), b = R(1, 9), c = R(-9, 9), d = R(-9, 9); return R(0, 1) ? { q: '(' + a + 'x²' + sg(c) + 'x) + (' + b + 'x²' + sg(d) + 'x) = □x²' + sg(c + d) + 'x;  □', a: a + b } : { q: '(' + a + 'x²' + sg(c) + 'x) − (' + b + 'x²' + sg(d) + 'x) = □x²' + sg(c - d) + 'x;  □', a: a - b }; } },
            { type: 'choose', icon: '🧹', make: function (R) { var a = R(2, 6), b = R(2, 6), c = R(2, 9); return choice('<span class="kd-big">(' + a + 'x² + ' + c + 'x) − (' + b + 'x² − ' + c + 'x)</span>', [kx(a - b, 'x²') + ' + ' + 2 * c + 'x', kx(a - b, 'x²'), kx(a + b, 'x²') + ' + ' + 2 * c + 'x'].map(function (s) { return s.replace(/^0x² \+ /, '').replace(/^0x²$/, '0'); }), 0); } }
          ],
          quiz: [{ q: '(3x² + 2x) − (x² − 4x) = ?', o: ['2x² + 6x', '2x² − 2x', '4x² + 6x'], a: 0 }, { q: '5ab − 2ab + ab = ?', o: ['4ab', '3ab', '8ab'], a: 0 }] },

        { id: 't5', lessons: ch(1), title: L('Ko‘phadlarni ko‘paytirish va bo‘lish', 'Умножение и деление многочленов', 'Multiplying and dividing polynomials'),
          keys: ['(a + b)(c + d) = ac + ad + bc + bd'],
          scene: [{ obj: 'flat', n: 4, color: 'orange' }],
          explain: L('Ko‘phadni ko‘phadga ko‘paytirishda birinchisining har bir hadini ikkinchisining har bir hadiga ko‘paytiramiz: (x + 3)(x − 2) = x² − 2x + 3x − 6 = x² + x − 6. Ko‘phadni birhadga bo‘lishda har bir hadni bo‘lamiz: (6x³ − 4x²) : 2x = 3x² − 2x.',
            'При умножении многочлена на многочлен каждый член первого умножаем на каждый член второго: (x + 3)(x − 2) = x² − 2x + 3x − 6 = x² + x − 6. При делении на одночлен делим каждый член: (6x³ − 4x²) : 2x = 3x² − 2x.',
            'To multiply polynomials, multiply each term of the first by each term of the second: (x + 3)(x − 2) = x² − 2x + 3x − 6 = x² + x − 6. To divide by a monomial, divide each term: (6x³ − 4x²) : 2x = 3x² − 2x.'),
          rule: '(x + a)(x + b) = x² + (a + b)x + ab',
          acts: [
            { type: 'drill', title: L('x oldidagi son', 'Коэффициент при x', 'Coefficient of x'), n: 6, make: function (R) { var a = R(-9, 9) || 4, b = R(-9, 9) || -3; return R(0, 1) ? { q: '(x' + sg(a) + ')(x' + sg(b) + ') = x² + □x' + sg(a * b) + ';  □', a: a + b } : { q: '(x' + sg(a) + ')(x' + sg(b) + ') = x²' + sg(a + b) + 'x + □;  □', a: a * b }; } },
            { type: 'choose', icon: '✖️', make: function (R) { var a = R(1, 6), b = R(1, 6); if (a === b) b = a % 6 + 1; return choice('<span class="kd-big">(x + ' + a + ')(x − ' + b + ')</span>', ['x²' + (a - b ? sg(a - b) + 'x' : '') + ' − ' + a * b, 'x² − ' + a * b, 'x²' + sg(a + b) + 'x − ' + a * b], 0); } }
          ],
          quiz: [{ q: '(x + 3)(x − 2) = ?', o: ['x² + x − 6', 'x² − 6', 'x² + 5x − 6'], a: 0 }, { q: '(6x³ − 4x²) : 2x = ?', o: ['3x² − 2x', '3x³ − 2x²', '4x² − 2x'], a: 0 }] },

        { id: 't6', lessons: ch(1), title: L('Ko‘phadni ko‘paytuvchilarga ajratish', 'Разложение многочлена на множители', 'Factorising polynomials'),
          keys: [L('qavsdan chiqarish', 'вынесение за скобки', 'taking out a factor'), L('guruhlash', 'группировка', 'grouping')],
          scene: [{ obj: 'box', n: 4, color: 'violet' }],
          explain: L('Umumiy ko‘paytuvchini qavsdan chiqaramiz: 4x³ − 6x² = 2x²(2x − 3). Guruhlash usuli: ax + ay + 3x + 3y = a(x + y) + 3(x + y) = (x + y)(a + 3).',
            'Выносим общий множитель за скобки: 4x³ − 6x² = 2x²(2x − 3). Способ группировки: ax + ay + 3x + 3y = a(x + y) + 3(x + y) = (x + y)(a + 3).',
            'Take out the common factor: 4x³ − 6x² = 2x²(2x − 3). Grouping: ax + ay + 3x + 3y = a(x + y) + 3(x + y) = (x + y)(a + 3).'),
          rule: 'ax + ay + bx + by = (x + y)(a + b)',
          acts: [
            { type: 'choose', icon: '🧩', make: function (R) { var g = R(2, 6), a = R(2, 5), b = R(1, 7); while (gcd(a, b) !== 1) b = R(1, 7); return choice('<span class="kd-big">' + g * a + 'x² − ' + g * b + 'x</span>', [g + 'x(' + a + 'x − ' + b + ')', g + '(' + a + 'x² − ' + b + ')', g + 'x(' + a + 'x + ' + b + ')'], 0); } },
            { type: 'choose', title: L('Guruhlash', 'Группировка', 'Grouping'), icon: '🧺', make: function (R) { var b = R(2, 9); return choice('<span class="kd-big">ax + ay + ' + b + 'x + ' + b + 'y</span>', ['(x + y)(a + ' + b + ')', '(x + ' + b + ')(a + y)', 'a(x + y) + ' + b], 0); } }
          ],
          quiz: [{ q: '4x³ − 6x² = ?', o: ['2x²(2x − 3)', '2x(2x² − 3)', 'x²(4x − 6x)'], a: 0 }, { q: 'ab + ac = ?', o: ['a(b + c)', 'b(a + c)', 'abc'], a: 0 }] }
      ] },

      { id: 's2', title: L('Qisqa ko‘paytirish formulalari', 'Формулы сокращённого умножения', 'Special products'), icon: '⚡', color: 'orange', topics: [
        { id: 't7', lessons: ch(2), title: L('Yig‘indi va ayirmaning kvadrati', 'Квадрат суммы и разности', 'Square of a sum and difference'),
          keys: ['(a + b)² = a² + 2ab + b²', '(a − b)² = a² − 2ab + b²'],
          scene: [{ obj: 'flat', n: 2, color: 'orange' }, { obj: 'flat', n: 2, color: 'yellow' }],
          explain: L('(a + b)² = a² + 2ab + b²: kvadratni a va b qismlarga bo‘lsak — bitta a² kvadrat, bitta b² kvadrat va ikkita ab to‘g‘ri to‘rtburchak. (x − 5)² = x² − 10x + 25. Tez hisob: 51² = (50 + 1)² = 2 500 + 100 + 1 = 2 601.',
            '(a + b)² = a² + 2ab + b²: разрежьте квадрат на части a и b — получится квадрат a², квадрат b² и два прямоугольника ab. (x − 5)² = x² − 10x + 25. Быстрый счёт: 51² = (50 + 1)² = 2 500 + 100 + 1 = 2 601.',
            '(a + b)² = a² + 2ab + b²: split a square into parts a and b — you get an a² square, a b² square and two ab rectangles. (x − 5)² = x² − 10x + 25. Quick maths: 51² = (50 + 1)² = 2 500 + 100 + 1 = 2 601.'),
          rule: '(a ± b)² = a² ± 2ab + b²',
          acts: [
            { type: 'drill', title: L('O‘rta had', 'Средний член', 'Middle term'), n: 6, make: function (R) { var b = R(1, 12), m = R(0, 1); return { q: '(x ' + (m ? '−' : '+') + ' ' + b + ')² = x² ' + (m ? '−' : '+') + ' □x + ' + b * b + ';  □', a: 2 * b }; } },
            { type: 'drill', title: L('Tez hisob', 'Быстрый счёт', 'Quick maths'), n: 6, make: function (R) { var t = R(2, 9) * 10, d = pick([1, 2, -1, -2]); return { q: (t + d) + '² = (' + t + sg(d) + ')²', a: (t + d) * (t + d) }; } }
          ],
          quiz: [{ q: '(x − 5)² = ?', o: ['x² − 10x + 25', 'x² − 25', 'x² + 25'], a: 0 }, { q: '51² = ?', o: ['2601', '2501', '2551'], a: 0 }] },

        { id: 't8', lessons: ch(2), title: L('Kvadratlar ayirmasi', 'Разность квадратов', 'Difference of squares'),
          keys: ['a² − b² = (a − b)(a + b)'],
          scene: [{ obj: 'flat', n: 3, color: 'green' }],
          explain: L('(a − b)(a + b) = a² − b². Bu formula ko‘paytuvchilarga ajratishda va tez hisoblashda juda qulay: x² − 49 = (x − 7)(x + 7); 47 · 53 = (50 − 3)(50 + 3) = 2 500 − 9 = 2 491.',
            '(a − b)(a + b) = a² − b². Формула удобна для разложения и быстрого счёта: x² − 49 = (x − 7)(x + 7); 47 · 53 = (50 − 3)(50 + 3) = 2 500 − 9 = 2 491.',
            '(a − b)(a + b) = a² − b². Great for factorising and quick maths: x² − 49 = (x − 7)(x + 7); 47 · 53 = (50 − 3)(50 + 3) = 2 500 − 9 = 2 491.'),
          rule: 'a² − b² = (a − b)(a + b)',
          acts: [
            { type: 'drill', title: L('Tez hisob', 'Быстрый счёт', 'Quick maths'), n: 6, make: function (R) { var t = R(2, 9) * 10, d = R(1, 4); return { q: (t - d) + ' · ' + (t + d), a: t * t - d * d }; } },
            { type: 'choose', icon: '🧩', make: function (R) { var b = R(2, 12), k = R(1, 3); return choice('<span class="kd-big">' + (k * k === 1 ? '' : k * k) + 'x² − ' + b * b + '</span>', ['(' + (k === 1 ? '' : k) + 'x − ' + b + ')(' + (k === 1 ? '' : k) + 'x + ' + b + ')', '(' + (k === 1 ? '' : k) + 'x − ' + b + ')²', '(' + (k === 1 ? '' : k) + 'x + ' + b + ')²'], 0); } }
          ],
          quiz: [{ q: 'x² − 49 = ?', o: ['(x − 7)(x + 7)', '(x − 7)²', '(x − 49)(x + 1)'], a: 0 }, { q: '47 · 53 = ?', o: ['2491', '2509', '2500'], a: 0 }] },

        { id: 't9', lessons: ch(2), title: L('Yig‘indi va ayirmaning kubi. Kublar yig‘indisi va ayirmasi', 'Куб суммы и разности. Сумма и разность кубов', 'Cubes of sums. Sum and difference of cubes'),
          keys: ['(a + b)³ = a³ + 3a²b + 3ab² + b³', 'a³ − b³ = (a − b)(a² + ab + b²)'],
          scene: [{ obj: 'cube', n: 8, color: 'cyan' }],
          explain: L('(a ± b)³ = a³ ± 3a²b + 3ab² ± b³. Kublar yig‘indisi va ayirmasi: a³ + b³ = (a + b)(a² − ab + b²), a³ − b³ = (a − b)(a² + ab + b²). Masalan, x³ − 8 = (x − 2)(x² + 2x + 4).',
            '(a ± b)³ = a³ ± 3a²b + 3ab² ± b³. Сумма и разность кубов: a³ + b³ = (a + b)(a² − ab + b²), a³ − b³ = (a − b)(a² + ab + b²). Например, x³ − 8 = (x − 2)(x² + 2x + 4).',
            '(a ± b)³ = a³ ± 3a²b + 3ab² ± b³. Sum and difference of cubes: a³ + b³ = (a + b)(a² − ab + b²), a³ − b³ = (a − b)(a² + ab + b²). E.g. x³ − 8 = (x − 2)(x² + 2x + 4).'),
          rule: 'a³ ± b³ = (a ± b)(a² ∓ ab + b²)',
          acts: [
            { type: 'drill', title: L('Koeffitsiyent', 'Коэффициент', 'Coefficient'), n: 6, make: function (R) { var b = R(1, 5); return R(0, 1) ? { q: '(x + ' + b + ')³ = x³ + □x² + ' + 3 * b * b + 'x + ' + b * b * b + ';  □', a: 3 * b } : { q: '(x − ' + b + ')³ = x³ − ' + 3 * b + 'x² + □x − ' + b * b * b + ';  □', a: 3 * b * b }; } },
            { type: 'choose', icon: '🧊', make: function (R) { var b = R(1, 5); return choice('<span class="kd-big">x³ − ' + b * b * b + '</span>', ['(x − ' + b + ')(x² + ' + b + 'x + ' + b * b + ')', '(x − ' + b + ')(x² − ' + b + 'x + ' + b * b + ')', '(x − ' + b + ')³'], 0); } }
          ],
          quiz: [{ q: 'x³ − 8 = ?', o: ['(x − 2)(x² + 2x + 4)', '(x − 2)³', '(x − 2)(x² − 2x + 4)'], a: 0 }, { q: '(a + 1)³ = a³ + ?a² + 3a + 1', o: ['3', '1', '6'], a: 0 }] }
      ] },

      { id: 's3', title: L('Algebraik kasrlar', 'Алгебраические дроби', 'Algebraic fractions'), icon: '➗', color: 'pink', topics: [
        { id: 't10', lessons: ch(3), title: L('Algebraik kasrni qisqartirish va umumiy maxrajga keltirish', 'Сокращение и приведение к общему знаменателю', 'Simplifying and common denominators'),
          keys: [L('qisqartirish', 'сокращение', 'simplifying'), L('x ≠ …', 'x ≠ …', 'x ≠ …')],
          scene: [{ obj: 'cylinder', n: 2, color: 'pink' }],
          explain: mk(function (l) { return { uz: 'Surat va maxrajni ko‘paytuvchilarga ajratib, umumiy ko‘paytuvchiga qisqartiramiz: ' + fr('x² − 9', 'x + 3') + ' = ' + fr('(x − 3)(x + 3)', 'x + 3') + ' = x − 3 (x ≠ −3). Maxraj nolga teng bo‘lmasligi kerak!', ru: 'Раскладываем числитель и знаменатель на множители и сокращаем: ' + fr('x² − 9', 'x + 3') + ' = ' + fr('(x − 3)(x + 3)', 'x + 3') + ' = x − 3 (x ≠ −3). Знаменатель не может быть нулём!', en: 'Factorise top and bottom and cancel the common factor: ' + fr('x² − 9', 'x + 3') + ' = ' + fr('(x − 3)(x + 3)', 'x + 3') + ' = x − 3 (x ≠ −3). The denominator can never be zero!' }[l]; }),
          rule: 'ac/bc = a/b',
          acts: [
            { type: 'choose', icon: '✂️', make: function (R) { var b = R(2, 9); return choice('<span class="kd-big">' + fr('x² − ' + b * b, 'x + ' + b) + '</span>', ['x − ' + b, 'x + ' + b, 'x − ' + b * b], 0); } },
            { type: 'drill', title: L('Maxraj nolga teng bo‘ladigan x', 'x, при котором знаменатель = 0', 'x that makes the bottom zero'), n: 5, make: function (R) { var b = R(-9, 9) || 4; return { q: fr(1, 'x' + sg(b)) + ';  x ≠', a: -b }; } }
          ],
          quiz: [{ q: fr('x² − 9', 'x + 3') + ' = ?', o: ['x − 3', 'x + 3', 'x − 9'], a: 0 }, { q: fr('6a²', '3a') + ' = ?', o: ['2a', '3a', '2a²'], a: 0 }] },

        { id: 't11', lessons: ch(3), title: L('Algebraik kasrlar ustida amallar', 'Действия с алгебраическими дробями', 'Operations on algebraic fractions'),
          keys: [L('umumiy maxraj', 'общий знаменатель', 'common denominator'), L('teskari kasr', 'обратная дробь', 'reciprocal')],
          scene: [{ obj: 'cylinder', n: 3, color: 'violet' }],
          explain: mk(function (l) { return { uz: 'Qo‘shish: ' + fr(2, 'x') + ' + ' + fr(3, 'x') + ' = ' + fr(5, 'x') + '; maxrajlar har xil bo‘lsa — umumiy maxrajga keltiramiz: ' + fr(1, 'a') + ' + ' + fr(1, 'b') + ' = ' + fr('b + a', 'ab') + '. Ko‘paytirish: ' + fr('a', 'b') + ' · ' + fr('c', 'd') + ' = ' + fr('ac', 'bd') + '. Bo‘lish — teskarisiga ko‘paytirish.', ru: 'Сложение: ' + fr(2, 'x') + ' + ' + fr(3, 'x') + ' = ' + fr(5, 'x') + '; при разных знаменателях приводим к общему: ' + fr(1, 'a') + ' + ' + fr(1, 'b') + ' = ' + fr('b + a', 'ab') + '. Умножение: ' + fr('a', 'b') + ' · ' + fr('c', 'd') + ' = ' + fr('ac', 'bd') + '. Деление — умножение на обратную.', en: 'Adding: ' + fr(2, 'x') + ' + ' + fr(3, 'x') + ' = ' + fr(5, 'x') + '; with different bottoms use a common denominator: ' + fr(1, 'a') + ' + ' + fr(1, 'b') + ' = ' + fr('b + a', 'ab') + '. Multiplying: ' + fr('a', 'b') + ' · ' + fr('c', 'd') + ' = ' + fr('ac', 'bd') + '. Dividing means multiplying by the reciprocal.' }[l]; }),
          rule: 'a/b · c/d = ac/bd',
          acts: [
            { type: 'drill', title: L('Suratni toping', 'Найдите числитель', 'Find the numerator'), n: 6, make: function (R) { var a = R(1, 9), b = R(1, 9); return R(0, 1) ? { q: fr(a, 'x') + ' + ' + fr(b, 'x') + ' = ' + fr('□', 'x') + ';  □', a: a + b } : { q: fr(a, 'x') + ' − ' + fr(b, '2x') + ' = ' + fr('□', '2x') + ';  □', a: 2 * a - b }; } },
            { type: 'choose', icon: '✖️', make: function (R) { var a = R(2, 6), b = R(2, 6); return choice('<span class="kd-big">' + fr(a + 'x', 'y') + ' · ' + fr('y²', b + 'x²') + '</span>', [fr(a + 'y', b + 'x'), fr(a + 'x', b + 'y'), fr(a * b + 'y', 'x')], 0); } }
          ],
          quiz: [{ q: fr(2, 'x') + ' + ' + fr(3, 'x') + ' = ?', o: [fr(5, 'x'), fr(5, '2x'), fr(6, 'x')], a: 0 }, { q: fr(1, 'a') + ' + ' + fr(1, 'b') + ' = ?', o: [fr('a + b', 'ab'), fr(2, 'a + b'), fr(1, 'ab')], a: 0 }] }
      ] },

      { id: 's4', title: L('Chiziqli tenglama', 'Линейное уравнение', 'Linear equations'), icon: '⚖️', color: 'green', topics: [
        { id: 't12', lessons: ch(4), title: L('Tenglama va uning ildizi. Al-Xorazmiy usuli', 'Уравнение и его корень. Метод аль-Хорезми', 'Equations and roots. Al-Khwarizmi’s method'),
          keys: [L('al-jabr — to‘ldirish', 'аль-джабр — восполнение', 'al-jabr — restoring'), L('al-muqobala — qarshilash', 'аль-мукабала — противопоставление', 'al-muqabala — balancing')],
          scene: [{ obj: 'weight', n: 2, color: 'green' }],
          explain: L('Al-Xorazmiy ikki amalni ishlatgan: <b>al-jabr</b> — manfiy hadni ikkinchi tomonga o‘tkazib «to‘ldirish», <b>al-muqobala</b> — ikki tomondagi o‘xshash hadlarni qisqartirish. 5x − 4 = 2x + 11 → (al-jabr) 5x = 2x + 15 → (al-muqobala) 3x = 15 → x = 5.',
            'Аль-Хорезми использовал два действия: <b>аль-джабр</b> — перенос отрицательного члена в другую часть («восполнение»), <b>аль-мукабала</b> — сокращение подобных в обеих частях. 5x − 4 = 2x + 11 → 5x = 2x + 15 → 3x = 15 → x = 5.',
            'Al-Khwarizmi used two moves: <b>al-jabr</b> — moving a negative term to the other side (“restoring”) and <b>al-muqabala</b> — cancelling like terms on both sides. 5x − 4 = 2x + 11 → 5x = 2x + 15 → 3x = 15 → x = 5.'),
          rule: L('al-jabr → al-muqobala → x', 'аль-джабр → аль-мукабала → x', 'al-jabr → al-muqabala → x'),
          acts: [
            { type: 'drill', n: 8, make: function (R) { var x = R(-9, 12), a = R(3, 9), c = R(1, a - 1), b = R(1, 20), d = (a - c) * x - b; return { q: a + 'x − ' + b + ' = ' + kx(c) + sg(d) + ';  x', a: x }; } },
            { type: 'choose', title: L('Ildizmi?', 'Корень?', 'A root?'), icon: '✔️', make: function (R) { var x = R(-5, 8), a = R(2, 7), b = R(-10, 10), t = R(0, 1) ? x : x + pick([1, -1, 2]); return choice(mk(function (l) { return 'x = ' + ns(t) + ' — ' + { uz: 'tenglama ildizimi', ru: 'корень уравнения', en: 'a root of' }[l] + ' <b>' + a + 'x' + sg(b) + ' = ' + ns(a * x + b) + '</b>?'; }), [L('ha', 'да', 'yes'), L('yo‘q', 'нет', 'no')], t === x ? 0 : 1); } }
          ],
          quiz: [{ q: '5x − 4 = 2x + 11; x = ?', o: ['5', '−5', '3'], a: 0 }, { q: L('0 · x = 5 tenglamaning ildizi?', 'Корень уравнения 0 · x = 5?', 'Root of 0 · x = 5?'), o: [L('yo‘q', 'нет корней', 'none'), '5', '0'], a: 0 }] },

        { id: 't13', lessons: ch(4), title: L('Masalalarni tenglama yordamida yechish', 'Решение задач с помощью уравнений', 'Solving problems with equations'),
          keys: [L('x ni tanlash', 'выбор x', 'choose x'), L('tekshiruv', 'проверка', 'check')],
          scene: [{ obj: 'book', n: 3, color: 'orange' }],
          explain: L('Masala: «Daftar ruchkadan 2 000 so‘m qimmat. 3 daftar va 2 ruchka 26 000 so‘m.» Ruchka — x, daftar — x + 2 000: 3(x + 2 000) + 2x = 26 000 → 5x = 20 000 → x = 4 000.',
            'Задача: «Тетрадь на 2 000 сум дороже ручки. 3 тетради и 2 ручки стоят 26 000 сум.» Ручка — x, тетрадь — x + 2 000: 3(x + 2 000) + 2x = 26 000 → 5x = 20 000 → x = 4 000.',
            'Problem: “A notebook costs 2 000 sum more than a pen. 3 notebooks and 2 pens cost 26 000 sum.” Pen = x, notebook = x + 2 000: 3(x + 2 000) + 2x = 26 000 → 5x = 20 000 → x = 4 000.'),
          rule: L('shart → tenglama → ildiz → javob', 'условие → уравнение → корень → ответ', 'story → equation → root → answer'),
          acts: [
            { type: 'problem', make: function (R) { var x = R(2, 9) * 1000, d = R(1, 4) * 1000, m = R(2, 4), n = R(1, 3), T = m * (x + d) + n * x; return { story: L('Daftar ruchkadan <b>' + d + '</b> so‘m qimmat. <b>' + m + '</b> daftar va <b>' + n + '</b> ruchka <b>' + T + '</b> so‘m. <u>Ruchka narxi</u>? (' + m + '(x + ' + d + ') + ' + n + 'x = ' + T + ')', 'Тетрадь на <b>' + d + '</b> сум дороже ручки. <b>' + m + '</b> тетради и <b>' + n + '</b> ручки стоят <b>' + T + '</b> сум. <u>Цена ручки</u>? (' + m + '(x + ' + d + ') + ' + n + 'x = ' + T + ')', 'A notebook costs <b>' + d + '</b> sum more than a pen. <b>' + m + '</b> notebooks and <b>' + n + '</b> pens cost <b>' + T + '</b> sum. <u>Price of a pen</u>? (' + m + '(x + ' + d + ') + ' + n + 'x = ' + T + ')'), expr: [T, '−', m * d, ':', m + n, '=', x], ans: x, unit: SOM }; } },
            { type: 'problem', make: function (R) { var x = R(20, 60), k = R(2, 3); return { story: L('Ikki tokchada jami <b>' + ((k + 1) * x) + '</b> ta kitob, birinchisida ikkinchisidagidan <b>' + k + '</b> marta ko‘p. <u>Ikkinchi tokchada</u> nechta?', 'На двух полках <b>' + ((k + 1) * x) + '</b> книг, на первой в <b>' + k + '</b> раза больше, чем на второй. <u>Сколько на второй</u>?', 'Two shelves hold <b>' + ((k + 1) * x) + '</b> books; the first has <b>' + k + '</b> times as many as the second. <u>How many on the second</u>?'), expr: [(k + 1) * x, ':', k + 1, '=', x], ans: x, unit: PCS }; } }
          ],
          quiz: [{ q: L('x + 2x = 36. x?', 'x + 2x = 36. x?', 'x + 2x = 36. x?'), o: ['12', '18', '24'], a: 0 }, { q: L('Ketma-ket uch sonning yig‘indisi 60. Birinchisi?', 'Сумма трёх последовательных чисел 60. Первое?', 'Three consecutive numbers add to 60. The first?'), o: ['19', '20', '21'], a: 0 }] }
      ] },

      { id: 's5', title: L('Chiziqli funksiya', 'Линейная функция', 'Linear functions'), icon: '📈', color: 'cyan', topics: [
        { id: 't14', lessons: ch(5), title: L('Dekart koordinatalar sistemasi. Funksiya tushunchasi', 'Декартова система координат. Понятие функции', 'Coordinates. What a function is'),
          keys: ['(x; y)', L('argument', 'аргумент', 'input'), L('funksiya qiymati', 'значение функции', 'output')],
          scene: [{ obj: 'drone', n: 1, color: 'cyan' }],
          explain: L('Tekislikdagi har bir nuqta ikki son bilan aniqlanadi: (x; y). <b>Funksiya</b> — har bir x ga bitta y mos keladigan qoida: y = 2x + 1. x = 3 bo‘lsa, y = 7. Barcha (x; y) nuqtalar funksiya <b>grafigini</b> hosil qiladi.',
            'Каждая точка плоскости задаётся двумя числами: (x; y). <b>Функция</b> — правило, по которому каждому x соответствует одно y: y = 2x + 1. При x = 3 y = 7. Все точки (x; y) образуют <b>график</b>.',
            'Every point in the plane is given by two numbers: (x; y). A <b>function</b> is a rule giving one y for each x: y = 2x + 1. If x = 3, y = 7. All the points (x; y) form its <b>graph</b>.'),
          rule: 'y = f(x)',
          acts: [
            { type: 'coord', make: function (R) { return { x: R(1, 8), y: R(1, 8) }; } },
            { type: 'drill', title: L('Funksiya qiymati', 'Значение функции', 'Function value'), n: 6, make: function (R) { var k = R(-5, 5) || 2, b = R(-9, 9), x = R(-5, 5); return { q: 'y = ' + kx(k) + sg(b) + ',  x = ' + ns(x) + ';  y', a: k * x + b }; } }
          ],
          quiz: [{ q: 'y = 2x + 1, x = 3. y = ?', o: ['7', '6', '9'], a: 0 }, { q: L('(0; 5) nuqta qayerda?', 'Где лежит точка (0; 5)?', 'Where is the point (0; 5)?'), o: [L('y o‘qida', 'на оси y', 'on the y-axis'), L('x o‘qida', 'на оси x', 'on the x-axis'), L('koordinata boshida', 'в начале координат', 'at the origin')], a: 0 }] },

        { id: 't15', lessons: ch(5), title: L('Chiziqli funksiya y = kx + b', 'Линейная функция y = kx + b', 'The linear function y = kx + b'),
          keys: [L('k — burchak koeffitsiyenti', 'k — угловой коэффициент', 'k — gradient'), L('b — y o‘qini kesish nuqtasi', 'b — пересечение с осью y', 'b — y-intercept')],
          scene: [{ obj: 'rod', n: 3, color: 'pink' }],
          explain: L('y = kx + b ning grafigi — <b>to‘g‘ri chiziq</b>. b — chiziq y o‘qini kesgan nuqta (0; b). k &gt; 0 bo‘lsa, chiziq o‘ngga ko‘tariladi, k &lt; 0 bo‘lsa — tushadi. x 1 ga oshsa, y k ga o‘zgaradi.',
            'График y = kx + b — <b>прямая</b>. b — точка пересечения с осью y: (0; b). При k &gt; 0 прямая поднимается вправо, при k &lt; 0 — опускается. Когда x растёт на 1, y меняется на k.',
            'The graph of y = kx + b is a <b>straight line</b>. b is where it crosses the y-axis: (0; b). If k &gt; 0 the line rises to the right; if k &lt; 0 it falls. When x goes up by 1, y changes by k.'),
          rule: L('(0; b) va qiyalik k', '(0; b) и наклон k', '(0; b) and slope k'),
          acts: [
            { type: 'choose', title: L('Grafik formulasi', 'Формула графика', 'Equation of the graph'), icon: '📈', make: function (R) { var k = pick([-3, -2, -1, 1, 2, 3]), b = R(-4, 4), w1 = kx(-k) + (b ? sg(b) : ''), w2 = kx(k) + (b ? sg(-b) : sg(1)); return choice(mk(function (l) { return { uz: 'Grafik qaysi funksiyaga tegishli?', ru: 'Чей это график?', en: 'Which function is graphed?' }[l] + lineGraph(k, b); }), ['y = ' + kx(k) + (b ? sg(b) : ''), 'y = ' + w1, 'y = ' + w2], 0); } },
            { type: 'drill', n: 6, make: function (R) { var k = R(-4, 4) || 3, b = R(-8, 8), x = R(-4, 4); return [{ q: 'y = ' + kx(k) + sg(b) + ';  b', a: b }, { q: 'y = ' + kx(k) + sg(b) + ';  k', a: k }, { q: 'y = ' + kx(k) + sg(b) + ', y = ' + ns(k * x + b) + ';  x', a: x }][R(0, 2)]; } }
          ],
          quiz: [{ q: L('y = −2x + 3: chiziq y o‘qini qayerda kesadi?', 'y = −2x + 3: где прямая пересекает ось y?', 'y = −2x + 3: where does it cross the y-axis?'), o: ['(0; 3)', '(3; 0)', '(0; −2)'], a: 0 }, { q: L('k &lt; 0 bo‘lsa, chiziq...', 'При k &lt; 0 прямая...', 'If k &lt; 0 the line...'), o: [L('tushadi', 'убывает', 'falls'), L('ko‘tariladi', 'возрастает', 'rises'), L('gorizontal', 'горизонтальна', 'is flat')], a: 0 }] }
      ] },

      { id: 's6', title: L('Chiziqli tenglamalar sistemasi', 'Системы линейных уравнений', 'Simultaneous equations'), icon: '🔗', color: 'violet', topics: [
        { id: 't16', lessons: ch(6), title: L('Sistemani yechish usullari', 'Способы решения систем', 'Solving systems'),
          keys: [L('o‘rniga qo‘yish', 'подстановка', 'substitution'), L('qo‘shish', 'сложение', 'elimination')],
          scene: [{ obj: 'rod', n: 2, color: 'violet' }],
          explain: L('{ x + y = 10; x − y = 4 }. <b>Qo‘shish usuli</b>: tenglamalarni qo‘shsak 2x = 14, x = 7, y = 3. <b>O‘rniga qo‘yish</b>: birinchidan y = 10 − x, ikkinchisiga qo‘yamiz. Grafik ma’nosi — ikki to‘g‘ri chiziqning kesishish nuqtasi.',
            '{ x + y = 10; x − y = 4 }. <b>Способ сложения</b>: складываем — 2x = 14, x = 7, y = 3. <b>Подстановка</b>: из первого y = 10 − x, подставляем во второе. Геометрически — точка пересечения двух прямых.',
            '{ x + y = 10; x − y = 4 }. <b>Elimination</b>: add them — 2x = 14, x = 7, y = 3. <b>Substitution</b>: from the first, y = 10 − x; put it into the second. On a graph it is where the two lines cross.'),
          rule: '{ x + y = s; x − y = d } → x = (s + d) : 2',
          acts: [
            { type: 'drill', n: 6, make: function (R) { var x = R(-6, 12), y = R(-6, 12), a = R(1, 3), b = R(1, 3); return R(0, 1) ? { q: '{ x + y = ' + ns(x + y) + ';  x − y = ' + ns(x - y) + ' };  x', a: x } : { q: '{ ' + kx(a) + ' + y = ' + ns(a * x + y) + ';  ' + kx(b) + ' − y = ' + ns(b * x - y) + ' };  x', a: x }; } },
            { type: 'choose', title: L('Yechimni tanlang', 'Выберите решение', 'Pick the solution'), icon: '🎯', make: function (R) { var x = R(-4, 6), y = R(-4, 6), a = R(2, 4); if (x === y) y = x + 2; return choice('<span class="kd-big">{ x + y = ' + ns(x + y) + ';  ' + a + 'x − y = ' + ns(a * x - y) + ' }</span>', ['(' + ns(x) + '; ' + ns(y) + ')', '(' + ns(y) + '; ' + ns(x) + ')', '(' + ns(x + 1) + '; ' + ns(y + 1) + ')'], 0); } }
          ],
          quiz: [{ q: '{ x + y = 10; x − y = 4 }', o: ['(7; 3)', '(3; 7)', '(6; 4)'], a: 0 }, { q: L('Sistemaning grafik ma’nosi?', 'Геометрический смысл решения?', 'What is the solution on a graph?'), o: [L('kesishish nuqtasi', 'точка пересечения', 'the crossing point'), L('koordinata boshi', 'начало координат', 'the origin'), L('parallel chiziqlar', 'параллельные прямые', 'parallel lines')], a: 0 }] },

        { id: 't17', lessons: ch(6), title: L('Sistema yordamida masalalar yechish', 'Задачи с помощью систем', 'Problems with simultaneous equations'),
          keys: [L('ikki noma’lum', 'два неизвестных', 'two unknowns')],
          scene: [{ obj: 'apple', n: 3, color: 'red' }, { obj: 'apple', n: 2, color: 'green' }],
          explain: L('Masala: «3 ta olma va 2 ta nok 14 000 so‘m, 1 ta olma va 2 ta nok 10 000 so‘m.» Olma x, nok y: { 3x + 2y = 14 000; x + 2y = 10 000 }. Ayiramiz: 2x = 4 000, x = 2 000, y = 4 000.',
            'Задача: «3 яблока и 2 груши стоят 14 000 сум, 1 яблоко и 2 груши — 10 000 сум.» Яблоко x, груша y: { 3x + 2y = 14 000; x + 2y = 10 000 }. Вычитаем: 2x = 4 000, x = 2 000, y = 4 000.',
            'Problem: “3 apples and 2 pears cost 14 000 sum; 1 apple and 2 pears cost 10 000 sum.” Apple x, pear y: { 3x + 2y = 14 000; x + 2y = 10 000 }. Subtract: 2x = 4 000, x = 2 000, y = 4 000.'),
          rule: L('ikki shart → ikki tenglama', 'два условия → два уравнения', 'two facts → two equations'),
          acts: [
            { type: 'problem', make: function (R) { var x = R(1, 5) * 1000, y = R(2, 6) * 1000, a = R(2, 4), b = R(1, 3); return { story: L('<b>' + a + '</b> ta olma va <b>' + b + '</b> ta nok <b>' + (a * x + b * y) + '</b> so‘m, <b>1</b> ta olma va <b>' + b + '</b> ta nok <b>' + (x + b * y) + '</b> so‘m. <u>Bitta olma narxi</u>?', '<b>' + a + '</b> яблок и <b>' + b + '</b> груш стоят <b>' + (a * x + b * y) + '</b> сум, <b>1</b> яблоко и <b>' + b + '</b> груш — <b>' + (x + b * y) + '</b> сум. <u>Цена яблока</u>?', '<b>' + a + '</b> apples and <b>' + b + '</b> pears cost <b>' + (a * x + b * y) + '</b> sum; <b>1</b> apple and <b>' + b + '</b> pears cost <b>' + (x + b * y) + '</b> sum. <u>Price of an apple</u>?'), expr: [a * x + b * y, '−', x + b * y, ':', a - 1, '=', x], ans: x, unit: SOM }; } },
            { type: 'problem', make: function (R) { var x = R(5, 20), y = R(3, 15); return { story: L('Hovlida tovuq va quyonlar bor: jami <b>' + (x + y) + '</b> ta bosh va <b>' + (2 * x + 4 * y) + '</b> ta oyoq. <u>Nechta quyon</u> bor?', 'Во дворе куры и кролики: всего <b>' + (x + y) + '</b> голов и <b>' + (2 * x + 4 * y) + '</b> ног. <u>Сколько кроликов</u>?', 'A yard has chickens and rabbits: <b>' + (x + y) + '</b> heads and <b>' + (2 * x + 4 * y) + '</b> legs. <u>How many rabbits</u>?'), expr: [2 * x + 4 * y, '−', 2 * (x + y), ':', 2, '=', y], ans: y, unit: PCS }; } }
          ],
          quiz: [{ q: L('Bosh 10, oyoq 28 (tovuq/quyon). Quyon?', '10 голов, 28 ног (куры/кролики). Кроликов?', '10 heads, 28 legs (chickens/rabbits). Rabbits?'), o: ['4', '6', '7'], a: 0 }, { q: L('Ikki son yig‘indisi 20, ayirmasi 6. Kattasi?', 'Сумма 20, разность 6. Большее?', 'Sum 20, difference 6. The larger?'), o: ['13', '14', '7'], a: 0 }] }
      ] },

      { id: 's7', title: L('Ma’lumotlar bilan ishlash. Kombinatorika', 'Работа с данными. Комбинаторика', 'Working with data. Combinatorics'), icon: '🎲', color: 'yellow', topics: [
        { id: 't18', lessons: ch(7), title: L('Kombinatorikaning asosiy qoidalari', 'Основные правила комбинаторики', 'Counting rules'),
          keys: [L('qo‘shish qoidasi', 'правило суммы', 'addition rule'), L('ko‘paytirish qoidasi', 'правило произведения', 'multiplication rule')],
          scene: [{ obj: 'cube', n: 3, color: 'yellow' }, { obj: 'ball', n: 2, color: 'pink' }],
          explain: L('<b>Qo‘shish qoidasi</b>: 5 ta olma yoki 3 ta nokdan bittasini tanlash — 5 + 3 = 8 usul. <b>Ko‘paytirish qoidasi</b>: 3 ta ko‘ylak va 4 ta shimdan bitta kiyim to‘plami — 3 · 4 = 12 usul.',
            '<b>Правило суммы</b>: выбрать одно из 5 яблок или 3 груш — 5 + 3 = 8 способов. <b>Правило произведения</b>: комплект из одной из 3 рубашек и одних из 4 брюк — 3 · 4 = 12 способов.',
            '<b>Addition rule</b>: choosing one of 5 apples or 3 pears — 5 + 3 = 8 ways. <b>Multiplication rule</b>: an outfit from 3 shirts and 4 trousers — 3 · 4 = 12 ways.'),
          rule: L('«yoki» → +, «va» → ·', '«или» → +, «и» → ·', '“or” → +, “and” → ·'),
          acts: [
            { type: 'problem', title: L('Kiyim to‘plami', 'Комплект одежды', 'Outfits'), make: function (R) { var a = R(2, 6), b = R(2, 6), c = R(2, 4); return { story: L('<b>' + a + '</b> ta ko‘ylak, <b>' + b + '</b> ta shim va <b>' + c + '</b> juft poyabzal bor. <u>Nechta turli</u> to‘plam tuzish mumkin?', 'Есть <b>' + a + '</b> рубашек, <b>' + b + '</b> брюк и <b>' + c + '</b> пары обуви. <u>Сколько разных</u> комплектов?', 'There are <b>' + a + '</b> shirts, <b>' + b + '</b> trousers and <b>' + c + '</b> pairs of shoes. <u>How many different</u> outfits?'), expr: [a, '·', b, '·', c, '=', a * b * c], ans: a * b * c, unit: PCS }; } },
            { type: 'drill', title: L('Ikki xonali sonlar', 'Двузначные числа', 'Two-digit numbers'), n: 4, make: function (R) { var n = R(3, 5), digs = [1, 2, 3, 4, 5].slice(0, n).join(', '); return R(0, 1) ? { q: mk(function (l) { return digs + ' — ' + { uz: 'ikki xonali sonlar (raqam takrorlanishi mumkin)', ru: 'двузначные числа (цифры могут повторяться)', en: 'two-digit numbers (repeats allowed)' }[l]; }), a: n * n } : { q: mk(function (l) { return digs + ' — ' + { uz: 'ikki xonali sonlar (takrorlanmasdan)', ru: 'двузначные числа (без повторов)', en: 'two-digit numbers (no repeats)' }[l]; }), a: n * (n - 1) }; } }
          ],
          quiz: [{ q: L('3 ko‘ylak va 4 shim. To‘plamlar?', '3 рубашки и 4 брюк. Комплектов?', '3 shirts and 4 trousers. Outfits?'), o: ['12', '7', '34'], a: 0 }, { q: L('5 olma yoki 3 nokdan bittasi. Usullar?', 'Одно из 5 яблок или 3 груш. Способов?', 'One of 5 apples or 3 pears. Ways?'), o: ['8', '15', '2'], a: 0 }] },

        { id: 't19', lessons: ch(7), title: L('Kombinatorik masalalar. O‘rin almashtirishlar', 'Комбинаторные задачи. Перестановки', 'Combinatorial problems. Arrangements'),
          keys: ['n! = 1 · 2 · … · n', L('tartib muhim', 'порядок важен', 'order matters')],
          scene: [{ obj: 'book', n: 4, color: 'pink' }],
          explain: L('n ta turli narsani qatorga terish usullari soni — <b>n!</b> (n faktorial): birinchi o‘ringa n ta, ikkinchisiga n − 1 ta tanlov… 4 ta kitob: 4! = 4 · 3 · 2 · 1 = 24 usul. 5 kishidan sardor va o‘rinbosar tanlash: 5 · 4 = 20.',
            'Число способов расставить n разных предметов в ряд — <b>n!</b> (эн факториал): на первое место n вариантов, на второе n − 1… 4 книги: 4! = 4 · 3 · 2 · 1 = 24. Выбрать из 5 человек старосту и заместителя: 5 · 4 = 20.',
            'The number of ways to line up n different things is <b>n!</b> (n factorial): n choices for the first place, n − 1 for the second… 4 books: 4! = 4 · 3 · 2 · 1 = 24. Choosing a captain and a deputy from 5 people: 5 · 4 = 20.'),
          rule: '4! = 24',
          acts: [
            { type: 'drill', n: 6, make: function (R) { var n = R(2, 7); return R(0, 1) ? { q: n + '!', a: fact(n) } : { q: mk(function (l) { return n + 1 + { uz: ' kishidan sardor va o‘rinbosar', ru: ' человек: староста и заместитель', en: ' people: captain and deputy' }[l]; }), a: (n + 1) * n }; } },
            { type: 'problem', make: function (R) { var n = R(3, 6); return { story: L('<b>' + n + '</b> nafar o‘quvchini bir qatorga necha xil usulda <u>joylashtirish</u> mumkin?', 'Сколькими способами можно <u>рассадить</u> в ряд <b>' + n + '</b> учеников?', 'In how many ways can <b>' + n + '</b> pupils be <u>lined up</u>?'), expr: n === 3 ? [3, '·', 2, '·', 1, '=', 6] : n === 4 ? [4, '·', 3, '·', 2, '=', 24] : n === 5 ? [5, '·', 4, '·', 3, '·', 2, '=', 120] : [6, '·', 5, '·', 4, '·', 3, '·', 2, '=', 720], ans: fact(n), unit: L('usul', 'способов', 'ways') }; } }
          ],
          quiz: [{ q: '4! = ?', o: ['24', '10', '16'], a: 0 }, { q: L('5 kishidan sardor va o‘rinbosar?', 'Из 5 человек — староста и зам.?', 'Captain and deputy from 5?'), o: ['20', '10', '25'], a: 0 }] }
      ] }
    ]
  };
  C.addPart(part2);
})(this);
