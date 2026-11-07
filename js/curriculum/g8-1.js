// Nuvemath — 8-sinf, Algebra (manba: Sh.A. Alimov, A.R. Xalmuxamedov, M.A. Mirzaahmedov. «Algebra. 8-sinf», Toshkent, 2019, 4-nashr).
// Boblar va mavzular tartibi darslikdan olingan; tushuntirishlar, topshiriqlar va chizmalar Nuvemath uchun qayta yozilgan.
(function (root) {
  'use strict';
  var C = root.NMCurriculum, H = C.H, L = H.L, mk = H.mk, PCS = H.PCS, choice = H.choice, pick = H.pick;
  var fr = H.fr, r6 = H.r6, gcd = H.gcd;
  function ch(n) { return L(n + '-bob', 'Глава ' + n, 'Chapter ' + n); }
  function ns(x) { return x < 0 ? '−' + (-x) : String(x); }
  function sg(x) { return x < 0 ? ' − ' + (-x) : ' + ' + x; }
  function kx(k, v) { v = v || 'x'; return k === 1 ? v : k === -1 ? '−' + v : ns(k) + v; }
  function fact(n) { return n < 2 ? 1 : n * fact(n - 1); }
  function cnt(arr, v) { return arr.filter(function (x) { return x === v; }).length; }
  var YES = L('ha', 'да', 'yes'), NO = L('yo‘q', 'нет', 'no');

  var part1 = {
    grade: 8, part: 1, edition: L('Algebra, 2019-yil nashri', 'Алгебра, издание 2019 г.', 'Algebra, 2019 edition'),
    title: L('Algebra: kasrlar, ildizlar, tengsizliklar va kvadrat tenglamalar', 'Алгебра: дроби, корни, неравенства и квадратные уравнения', 'Algebra: fractions, roots, inequalities and quadratics'),
    book: L('Sh.A. Alimov va boshq. Algebra, 8-sinf (Toshkent, 2019)', 'Ш.А. Алимов и др. Алгебра, 8 класс (Ташкент, 2019)', 'Sh.A. Alimov et al. Algebra, Grade 8 (Tashkent, 2019)'),
    intro: L('8-sinf algebrasi: algebraik kasrlar va y = k/x funksiyasi, arifmetik ildiz va ratsional ko‘rsatkichli daraja, tengsizliklar va ularning sistemalari, taqribiy hisoblash, kvadrat tenglamalar va Viyet teoremasi, ma’lumotlar tahlili.',
      'Алгебра 8 класса: алгебраические дроби и функция y = k/x, арифметический корень и степень с рациональным показателем, неравенства и их системы, приближённые вычисления, квадратные уравнения и теорема Виета, анализ данных.',
      'Grade 8 algebra: algebraic fractions and y = k/x, roots and rational exponents, inequalities and systems, approximation, quadratic equations and Vieta’s theorem, data analysis.'),
    sections: [
      { id: 's1', title: L('Algebraik kasrlar', 'Алгебраические дроби', 'Algebraic fractions'), icon: '➗', color: 'blue', topics: [
        { id: 't1', lessons: ch(1), title: L('Algebraik ifodalar. Kasrlarni qisqartirish', 'Алгебраические выражения. Сокращение дробей', 'Algebraic expressions. Simplifying fractions'),
          keys: [L('aniqlanish sohasi', 'область определения', 'domain'), L('qisqartirish', 'сокращение', 'cancelling')],
          scene: [{ obj: 'cylinder', n: 2, color: 'blue' }, { obj: 'cube', n: 2, color: 'pink' }],
          explain: mk(function (l) { return { uz: 'Algebraik kasrda maxraj nolga teng bo‘lmasligi kerak: ' + fr(1, 'x − 2') + ' da x ≠ 2. Kasrni qisqartirish uchun surat va maxrajni ko‘paytuvchilarga ajratamiz: ' + fr('x² − 4', 'x − 2') + ' = ' + fr('(x − 2)(x + 2)', 'x − 2') + ' = x + 2.', ru: 'В алгебраической дроби знаменатель не равен нулю: в ' + fr(1, 'x − 2') + ' x ≠ 2. Чтобы сократить дробь, раскладываем числитель и знаменатель на множители: ' + fr('x² − 4', 'x − 2') + ' = ' + fr('(x − 2)(x + 2)', 'x − 2') + ' = x + 2.', en: 'In an algebraic fraction the denominator cannot be zero: in ' + fr(1, 'x − 2') + ', x ≠ 2. To simplify, factorise top and bottom: ' + fr('x² − 4', 'x − 2') + ' = ' + fr('(x − 2)(x + 2)', 'x − 2') + ' = x + 2.' }[l]; }),
          rule: 'ac/bc = a/b (c ≠ 0)',
          acts: [
            { type: 'drill', title: L('Maxraj nolga teng bo‘ladigan x', 'x, при котором знаменатель равен 0', 'x that makes the bottom zero'), n: 6, make: function (R) { var b = R(-9, 9) || 3; return { q: fr(R(1, 9), 'x' + sg(-b)) + ';  x ≠', a: b }; } },
            { type: 'choose', title: L('Qisqartiring', 'Сократите', 'Simplify'), icon: '✂️', make: function (R) { var b = R(2, 9); return choice('<span class="kd-big">' + fr('x² − ' + b * b, 'x − ' + b) + '</span>', ['x + ' + b, 'x − ' + b, 'x + ' + b * b], 0); } },
            { type: 'drill', title: L('Kasr qiymati', 'Значение дроби', 'Value of the fraction'), n: 5, make: function (R) { var b = R(1, 6), d = R(1, 5), k = R(-4, 6), x = b + d, a = k * d - x; if (a === 0) { k++; a = d; } return { q: fr('x' + sg(a), 'x − ' + b) + ',  x = ' + x, a: (x + a) / d }; } }
          ],
          quiz: [{ q: fr('x² − 9', 'x + 3') + ' = ?', o: ['x − 3', 'x + 3', 'x − 9'], a: 0 }, { q: fr(5, 'x + 4') + ': x ≠ ?', o: ['−4', '4', '5'], a: 0 }, { q: fr('6a²b', '3ab') + ' = ?', o: ['2a', '2ab', '3a'], a: 0 }] },

        { id: 't2', lessons: ch(1), title: L('Umumiy maxraj. Kasrlarni qo‘shish va ayirish', 'Общий знаменатель. Сложение и вычитание дробей', 'Common denominators. Adding and subtracting'),
          keys: [L('umumiy maxraj', 'общий знаменатель', 'common denominator'), L('qo‘shimcha ko‘paytuvchi', 'дополнительный множитель', 'extra factor')],
          scene: [{ obj: 'cylinder', n: 3, color: 'green' }],
          explain: mk(function (l) { return { uz: 'Maxrajlari bir xil bo‘lsa, suratlarni qo‘shamiz: ' + fr(3, 'x') + ' + ' + fr(5, 'x') + ' = ' + fr(8, 'x') + '. Har xil bo‘lsa, umumiy maxrajga keltiramiz: ' + fr(1, 'x − 1') + ' − ' + fr(1, 'x + 1') + ' = ' + fr('(x + 1) − (x − 1)', 'x² − 1') + ' = ' + fr(2, 'x² − 1') + '.', ru: 'При одинаковых знаменателях складываем числители: ' + fr(3, 'x') + ' + ' + fr(5, 'x') + ' = ' + fr(8, 'x') + '. При разных — приводим к общему: ' + fr(1, 'x − 1') + ' − ' + fr(1, 'x + 1') + ' = ' + fr('(x + 1) − (x − 1)', 'x² − 1') + ' = ' + fr(2, 'x² − 1') + '.', en: 'With the same bottom, add the tops: ' + fr(3, 'x') + ' + ' + fr(5, 'x') + ' = ' + fr(8, 'x') + '. With different bottoms, use a common one: ' + fr(1, 'x − 1') + ' − ' + fr(1, 'x + 1') + ' = ' + fr('(x + 1) − (x − 1)', 'x² − 1') + ' = ' + fr(2, 'x² − 1') + '.' }[l]; }),
          rule: 'a/c ± b/c = (a ± b)/c',
          acts: [
            { type: 'drill', title: L('Suratni toping', 'Найдите числитель', 'Find the numerator'), n: 8, make: function (R) { var a = R(1, 9), b = R(1, 9), k = R(0, 2); return [{ q: fr(a, 'x') + ' + ' + fr(b, 'x') + ' = ' + fr('□', 'x') + ';  □', a: a + b }, { q: fr(a, 'x') + ' + ' + fr(b, '2x') + ' = ' + fr('□', '2x') + ';  □', a: 2 * a + b }, { q: fr(1, 'x − ' + a) + ' − ' + fr(1, 'x + ' + a) + ' = ' + fr('□', 'x² − ' + a * a) + ';  □', a: 2 * a }][k]; } },
            { type: 'choose', title: L('Umumiy maxraj', 'Общий знаменатель', 'Common denominator'), icon: '🔗', make: function (R) { var a = R(2, 6), b = R(2, 6); while (b === a) b = R(2, 6); return choice(mk(function (l) { return { uz: 'Eng kichik umumiy maxraj: ', ru: 'Наименьший общий знаменатель: ', en: 'Lowest common denominator: ' }[l] + fr(1, a + 'x') + ' ' + { uz: 'va', ru: 'и', en: 'and' }[l] + ' ' + fr(1, b + 'x²'); }), [(a * b / gcd(a, b)) + 'x²', (a * b) + 'x³', (a + b) + 'x²'].filter(function (v, i, A) { return A.indexOf(v) === i; }).concat([(a * b / gcd(a, b)) + 'x']).slice(0, 3), 0); } }
          ],
          quiz: [{ q: fr(3, 'x') + ' + ' + fr(5, 'x') + ' = ?', o: [fr(8, 'x'), fr(8, '2x'), fr(15, 'x')], a: 0 }, { q: fr(1, 'a') + ' − ' + fr(1, 'b') + ' = ?', o: [fr('b − a', 'ab'), fr('a − b', 'ab'), fr(0, 'ab')], a: 0 }] },

        { id: 't3', lessons: ch(1), title: L('Kasrlarni ko‘paytirish va bo‘lish. Ayniy almashtirishlar', 'Умножение и деление дробей. Тождественные преобразования', 'Multiplying and dividing fractions. Identities'),
          keys: [L('teskari kasr', 'обратная дробь', 'reciprocal'), L('ayniyat', 'тождество', 'identity')],
          scene: [{ obj: 'cylinder', n: 2, color: 'violet' }, { obj: 'box', n: 1, color: 'orange' }],
          explain: mk(function (l) { return { uz: 'Ko‘paytirish: ' + fr('a', 'b') + ' · ' + fr('c', 'd') + ' = ' + fr('ac', 'bd') + '. Bo‘lish — teskarisiga ko‘paytirish: ' + fr('x² − 9', 'x') + ' : ' + fr('x − 3', 'x²') + ' = ' + fr('(x − 3)(x + 3)', 'x') + ' · ' + fr('x²', 'x − 3') + ' = x(x + 3). Natijani har doim qisqartiring.', ru: 'Умножение: ' + fr('a', 'b') + ' · ' + fr('c', 'd') + ' = ' + fr('ac', 'bd') + '. Деление — умножение на обратную: ' + fr('x² − 9', 'x') + ' : ' + fr('x − 3', 'x²') + ' = ' + fr('(x − 3)(x + 3)', 'x') + ' · ' + fr('x²', 'x − 3') + ' = x(x + 3). Всегда сокращайте результат.', en: 'Multiplying: ' + fr('a', 'b') + ' · ' + fr('c', 'd') + ' = ' + fr('ac', 'bd') + '. Dividing means multiplying by the reciprocal: ' + fr('x² − 9', 'x') + ' : ' + fr('x − 3', 'x²') + ' = ' + fr('(x − 3)(x + 3)', 'x') + ' · ' + fr('x²', 'x − 3') + ' = x(x + 3). Always simplify.' }[l]; }),
          rule: 'a/b : c/d = ad/bc',
          acts: [
            { type: 'choose', icon: '✖️', make: function (R) { var a = R(2, 6), b = R(3, 7); while (b === a) b = R(3, 7); return choice('<span class="kd-big">' + fr(a + 'x', 'y') + ' · ' + fr('y²', b + 'x²') + '</span>', [fr(a + 'y', b + 'x'), fr(a + 'x', b + 'y'), fr(a * b + 'y', 'x')], 0); } },
            { type: 'drill', n: 6, make: function (R) { var b = R(2, 9), k = R(2, 9); return { q: fr('x² − ' + b * b, 'x + ' + b) + ' : ' + fr('x − ' + b, k), a: k }; } }
          ],
          quiz: [{ q: fr('a', 'b') + ' : ' + fr('c', 'd') + ' = ?', o: [fr('ad', 'bc'), fr('ac', 'bd'), fr('bc', 'ad')], a: 0 }, { q: fr('2x', 3) + ' · ' + fr(9, 'x²') + ' = ?', o: [fr(6, 'x'), fr(18, 'x'), fr('6x', 1)], a: 0 }] },

        { id: 't4', lessons: ch(1), title: L('y = k/x funksiya, xossalari va grafigi', 'Функция y = k/x, свойства и график', 'The function y = k/x'),
          keys: [L('teskari proporsionallik', 'обратная пропорциональность', 'inverse proportion'), L('giperbola', 'гипербола', 'hyperbola')],
          scene: [{ obj: 'rod', n: 3, color: 'cyan' }],
          explain: L('y = k/x (k ≠ 0) — <b>teskari proporsionallik</b>: x necha marta oshsa, y shuncha marta kamayadi, xy = k o‘zgarmas. Grafigi — <b>giperbola</b>: k &gt; 0 da I va III choraklarda, k &lt; 0 da II va IV choraklarda. x = 0 da funksiya aniqlanmagan.',
            'y = k/x (k ≠ 0) — <b>обратная пропорциональность</b>: во сколько раз растёт x, во столько раз уменьшается y, xy = k постоянно. График — <b>гипербола</b>: при k &gt; 0 в I и III четвертях, при k &lt; 0 — во II и IV. При x = 0 функция не определена.',
            'y = k/x (k ≠ 0) is <b>inverse proportion</b>: when x is multiplied by some number, y is divided by it, and xy = k stays constant. Its graph is a <b>hyperbola</b>: in quadrants I and III if k &gt; 0, in II and IV if k &lt; 0. It is undefined at x = 0.'),
          rule: 'y = k/x ⇔ xy = k',
          acts: [
            { type: 'drill', n: 6, make: function (R) { var x = R(-6, 6) || 2, m = R(-9, 9) || 3, k = x * m; return { q: 'y = ' + ns(k) + '/x,  x = ' + ns(x) + ';  y', a: m }; } },
            { type: 'problem', title: L('Ishchilar', 'Рабочие', 'Workers'), make: function (R) { var n1 = R(2, 6), d1 = R(4, 12), n2 = pick([2, 3, 4, 6, 8, 12].filter(function (v) { return v !== n1 && (n1 * d1) % v === 0; }).concat([n1 * 2])); return { story: L('<b>' + n1 + '</b> ishchi ishni <b>' + d1 + '</b> kunda tugatadi. <b>' + n2 + '</b> ishchi <u>necha kunda</u> tugatadi? (ish hajmi o‘zgarmas)', '<b>' + n1 + '</b> рабочих выполнят работу за <b>' + d1 + '</b> дней. <u>За сколько дней</u> справятся <b>' + n2 + '</b>? (объём работы постоянен)', '<b>' + n1 + '</b> workers finish a job in <b>' + d1 + '</b> days. <u>How many days</u> for <b>' + n2 + '</b> workers? (same job)'), expr: [n1, '·', d1, ':', n2, '=', r6(n1 * d1 / n2)], ans: r6(n1 * d1 / n2), unit: L('kun', 'дней', 'days') }; } },
            { type: 'choose', title: L('Grafik qayerda?', 'Где график?', 'Where is the graph?'), icon: '📈', make: function (R) { var k = (R(1, 9)) * (R(0, 1) ? 1 : -1); return choice('<span class="kd-big">y = ' + ns(k) + '/x</span>', [L('I va III choraklarda', 'в I и III четвертях', 'in quadrants I and III'), L('II va IV choraklarda', 'во II и IV четвертях', 'in quadrants II and IV')], k > 0 ? 0 : 1); } }
          ],
          quiz: [{ q: 'y = 12/x, x = 3. y = ?', o: ['4', '36', '9'], a: 0 }, { q: L('y = −5/x grafigi qaysi choraklarda?', 'В каких четвертях график y = −5/x?', 'Which quadrants hold y = −5/x?'), o: ['II, IV', 'I, III', 'I, II'], a: 0 }] }
      ] },

      { id: 's2', title: L('Arifmetik ildiz va daraja', 'Арифметический корень и степень', 'Roots and powers'), icon: '√', color: 'violet', topics: [
        { id: 't5', lessons: ch(1), title: L('Natural ko‘rsatkichli arifmetik ildiz va uning xossalari', 'Арифметический корень n-й степени и его свойства', 'Roots and their properties'),
          keys: ['√(ab) = √a · √b', '√(a²) = |a|', 'ⁿ√a'],
          scene: [{ obj: 'cube', n: 8, color: 'violet' }],
          explain: L('a ≥ 0 sonning n-darajali <b>arifmetik ildizi</b> — n-darajasi a ga teng bo‘lgan manfiy bo‘lmagan son: ∛8 = 2, ⁴√81 = 3. Xossalar: √(ab) = √a·√b, √(a/b) = √a/√b, √(a²) = |a|. Ildiz ostidan chiqarish: √50 = √(25·2) = 5√2.',
            '<b>Арифметический корень</b> n-й степени из a ≥ 0 — неотрицательное число, n-я степень которого равна a: ∛8 = 2, ⁴√81 = 3. Свойства: √(ab) = √a·√b, √(a/b) = √a/√b, √(a²) = |a|. Вынесение из-под корня: √50 = √(25·2) = 5√2.',
            'The <b>n-th root</b> of a ≥ 0 is the non-negative number whose n-th power is a: ∛8 = 2, ⁴√81 = 3. Rules: √(ab) = √a·√b, √(a/b) = √a/√b, √(a²) = |a|. Taking factors out: √50 = √(25·2) = 5√2.'),
          rule: '√(ab) = √a · √b',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var p = pick([[2, 8], [3, 12], [2, 18], [5, 20], [3, 27], [6, 24], [2, 32], [7, 28], [2, 50], [3, 48]]), a = R(2, 12), b = R(2, 5); return [{ q: '√' + p[0] + ' · √' + p[1], a: Math.sqrt(p[0] * p[1]) }, { q: '√' + a * a, a: a }, { q: '∛' + b * b * b, a: b }, { q: '⁴√' + Math.pow(b, 4), a: b }][R(0, 3)]; } },
            { type: 'choose', title: L('Ildiz ostidan chiqaring', 'Вынесите из-под корня', 'Take factors out'), icon: '√', make: function (R) { var n = R(2, 9), m = pick([2, 3, 5, 6, 7]); while (m === n) m = pick([2, 3, 5, 6, 7]); return choice('<span class="kd-big">√' + n * n * m + '</span>', [n + '√' + m, m + '√' + n, n * n + '√' + m], 0); } }
          ],
          quiz: [{ q: '√50 = ?', o: ['5√2', '2√5', '25√2'], a: 0 }, { q: '√((−7)²) = ?', o: ['7', '−7', '49'], a: 0 }, { q: '∛27 = ?', o: ['3', '9', '27'], a: 0 }] },

        { id: 't6', lessons: ch(1), title: L('Ratsional ko‘rsatkichli daraja', 'Степень с рациональным показателем', 'Rational exponents'),
          keys: ['a^(m/n) = ⁿ√(aᵐ)', 'a⁻ⁿ = 1/aⁿ', 'a⁰ = 1'],
          scene: [{ obj: 'cube', n: 4, color: 'pink' }],
          explain: L('Daraja ko‘rsatkichi kasr ham bo‘lishi mumkin: a^(1/n) = ⁿ√a, a^(m/n) = ⁿ√(aᵐ). Masalan, 8^(2/3) = (∛8)² = 4. Manfiy ko‘rsatkich: a⁻ⁿ = 1/aⁿ, a⁰ = 1. Barcha daraja xossalari saqlanadi: a^p · a^q = a^(p + q).',
            'Показатель степени может быть дробным: a^(1/n) = ⁿ√a, a^(m/n) = ⁿ√(aᵐ). Например, 8^(2/3) = (∛8)² = 4. Отрицательный показатель: a⁻ⁿ = 1/aⁿ, a⁰ = 1. Все свойства степеней сохраняются: a^p · a^q = a^(p + q).',
            'Exponents can be fractions: a^(1/n) = ⁿ√a, a^(m/n) = ⁿ√(aᵐ). E.g. 8^(2/3) = (∛8)² = 4. Negative exponents: a⁻ⁿ = 1/aⁿ, and a⁰ = 1. All the power laws still hold: a^p · a^q = a^(p + q).'),
          rule: 'a^(m/n) = (ⁿ√a)ᵐ',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var T = pick([['8', '1/3', 2], ['27', '2/3', 9], ['16', '3/4', 8], ['4', '1/2', 2], ['9', '3/2', 27], ['32', '2/5', 4], ['64', '2/3', 16], ['81', '3/4', 27], ['4', '−1/2', 0.5], ['25', '−1/2', 0.2], ['2', '−2', 0.25], ['7', '0', 1]]); return { q: T[0] + '<sup>' + T[1] + '</sup>', a: T[2] }; } },
            { type: 'drill', title: L('Ko‘rsatkichni toping', 'Найдите показатель', 'Find the exponent'), n: 5, make: function (R) { var p = R(1, 5), q = R(1, 5), n = pick([2, 3, 4]); return { q: 'a<sup>' + p + '/' + n + '</sup> · a<sup>' + q + '/' + n + '</sup> = a<sup>□/' + n + '</sup>;  □', a: p + q }; } }
          ],
          quiz: [{ q: '8^(2/3) = ?', o: ['4', '16/3', '2'], a: 0 }, { q: '5⁰ = ?', o: ['1', '0', '5'], a: 0 }, { q: L('2⁻³ = ?', '2⁻³ = ?', '2⁻³ = ?'), o: ['1/8', '−8', '−6'], a: 0 }] }
      ] },

      { id: 's3', title: L('Tengsizliklar', 'Неравенства', 'Inequalities'), icon: '⚖️', color: 'orange', topics: [
        { id: 't7', lessons: ch(2), title: L('Sonli tengsizliklar va ularning xossalari', 'Числовые неравенства и их свойства', 'Numerical inequalities and their properties'),
          keys: ['a &gt; b ⇔ a − b &gt; 0', L('ishorani almashtirish', 'смена знака', 'flipping the sign')],
          scene: [{ obj: 'weight', n: 2, color: 'orange' }],
          explain: L('a &gt; b, agar a − b &gt; 0 bo‘lsa. Xossalar: ikki tomonga bir xil son qo‘shsak, belgi saqlanadi; <b>musbat</b> songa ko‘paytirsak — saqlanadi; <b>manfiy</b> songa ko‘paytirsak — belgi <b>teskarisiga</b> almashadi: 3 &gt; 1 → −3 &lt; −1. Bir xil yo‘nalishdagi tengsizliklarni qo‘shish mumkin.',
            'a &gt; b, если a − b &gt; 0. Свойства: прибавляя к обеим частям одно число, знак сохраняем; умножая на <b>положительное</b> — сохраняем; на <b>отрицательное</b> — знак <b>меняется</b>: 3 &gt; 1 → −3 &lt; −1. Неравенства одного знака можно складывать.',
            'a &gt; b means a − b &gt; 0. Rules: adding the same number to both sides keeps the sign; multiplying by a <b>positive</b> keeps it; multiplying by a <b>negative</b> <b>flips</b> it: 3 &gt; 1 → −3 &lt; −1. Inequalities pointing the same way can be added.'),
          rule: 'a &gt; b, c &lt; 0 ⇒ ac &lt; bc',
          acts: [
            { type: 'choose', title: L('Belgini qo‘ying', 'Поставьте знак', 'Pick the sign'), icon: '⚖️', make: function (R) { var k = R(0, 3), c = R(2, 9); return [
              choice('a &gt; b ⇒ a + ' + c + ' ◻ b + ' + c, ['&gt;', '&lt;'], 0),
              choice('a &gt; b ⇒ ' + c + 'a ◻ ' + c + 'b', ['&gt;', '&lt;'], 0),
              choice('a &gt; b ⇒ −' + c + 'a ◻ −' + c + 'b', ['&gt;', '&lt;'], 1),
              choice('a &lt; b ⇒ a − ' + c + ' ◻ b − ' + c, ['&gt;', '&lt;'], 1)][k]; } },
            { type: 'choose', title: L('Taqqoslang', 'Сравните', 'Compare'), icon: '🔍', make: function (R) { var a, b, c, d; do { a = R(1, 8); b = R(a + 1, 9); c = R(1, 8); d = R(c + 1, 9); } while (a * d === b * c); return choice('<span class="kd-big">' + fr(a, b) + ' ◻ ' + fr(c, d) + '</span>', ['&gt;', '&lt;'], a * d > b * c ? 0 : 1); } }
          ],
          quiz: [{ q: L('5 &gt; 2 ni −1 ga ko‘paytirsak?', 'Умножим 5 &gt; 2 на −1?', 'Multiply 5 &gt; 2 by −1?'), o: ['−5 &lt; −2', '−5 &gt; −2', '5 &lt; 2'], a: 0 }, { q: L('a &gt; b va c &gt; d bo‘lsa?', 'Если a &gt; b и c &gt; d, то?', 'If a &gt; b and c &gt; d, then?'), o: ['a + c &gt; b + d', 'a − c &gt; b − d', 'ac &lt; bd'], a: 0 }] },

        { id: 't8', lessons: ch(2), title: L('Bir noma’lumli tengsizliklar', 'Неравенства с одним неизвестным', 'Linear inequalities'),
          keys: ['ax + b &gt; c', L('yechimlar to‘plami', 'множество решений', 'solution set')],
          scene: [{ obj: 'rod', n: 4, color: 'orange' }],
          explain: L('Tengsizlik tenglama kabi yechiladi, faqat manfiy songa bo‘lganda belgi almashadi: −2x + 3 &gt; 9 → −2x &gt; 6 → x &lt; −3. Javob — son oralig‘i: (−∞; −3).',
            'Неравенство решают как уравнение, но при делении на отрицательное число знак меняется: −2x + 3 &gt; 9 → −2x &gt; 6 → x &lt; −3. Ответ — промежуток: (−∞; −3).',
            'Solve an inequality like an equation, except dividing by a negative flips the sign: −2x + 3 &gt; 9 → −2x &gt; 6 → x &lt; −3. The answer is an interval: (−∞; −3).'),
          rule: L('manfiyga bo‘lsak — belgi almashadi', 'делим на отрицательное — знак меняется', 'divide by a negative — flip the sign'),
          acts: [
            { type: 'choose', icon: '⚖️', make: function (R) { var x0 = R(-6, 6), a = pick([-5, -4, -3, -2, 2, 3, 4, 5]), b = R(-9, 9), c = a * x0 + b; return choice('<span class="kd-big">' + kx(a) + sg(b) + ' &gt; ' + ns(c) + '</span>', a > 0 ? ['x &gt; ' + ns(x0), 'x &lt; ' + ns(x0), 'x ≥ ' + ns(x0)] : ['x &lt; ' + ns(x0), 'x &gt; ' + ns(x0), 'x ≤ ' + ns(x0)], 0); } },
            { type: 'drill', title: L('Eng kichik butun yechim', 'Наименьшее целое решение', 'Smallest whole solution'), n: 6, make: function (R) { var x0 = R(-8, 8), a = R(2, 6), b = R(-9, 9); return { q: kx(a) + sg(b) + ' &gt; ' + ns(a * x0 + b) + ';  x<sub>min</sub>', a: x0 + 1 }; } }
          ],
          quiz: [{ q: '−2x + 3 &gt; 9', o: ['x &lt; −3', 'x &gt; −3', 'x &gt; 3'], a: 0 }, { q: '3x ≤ 12', o: ['x ≤ 4', 'x ≥ 4', 'x &lt; 4'], a: 0 }] },

        { id: 't9', lessons: ch(2), title: L('Tengsizliklar sistemasi. Sonli oraliqlar', 'Системы неравенств. Числовые промежутки', 'Systems of inequalities. Intervals'),
          keys: ['(a; b)', '[a; b]', L('kesishma', 'пересечение', 'intersection')],
          scene: [{ obj: 'rod', n: 3, color: 'green' }],
          explain: L('Sistema yechimi — har bir tengsizlik yechimlarining <b>kesishmasi</b>. { x &gt; 2; x ≤ 7 } → (2; 7]. Kvadrat qavs — chegara kiradi, oddiy qavs — kirmaydi. Agar oraliqlar kesishmasa, sistema yechimga ega emas.',
            'Решение системы — <b>пересечение</b> решений каждого неравенства. { x &gt; 2; x ≤ 7 } → (2; 7]. Квадратная скобка — граница входит, круглая — не входит. Если промежутки не пересекаются, решений нет.',
            'The solution of a system is the <b>intersection</b> of each inequality’s solutions. { x &gt; 2; x ≤ 7 } → (2; 7]. A square bracket includes the end, a round one does not. If the intervals do not overlap, there is no solution.'),
          rule: '{ x &gt; a; x ≤ b } → (a; b]',
          acts: [
            { type: 'choose', icon: '📏', make: function (R) { var a = R(-6, 3), b = R(a + 2, 9); return choice('<span class="kd-big">{ x &gt; ' + ns(a) + ';  x ≤ ' + ns(b) + ' }</span>', ['(' + ns(a) + '; ' + ns(b) + ']', '[' + ns(a) + '; ' + ns(b) + ')', '(' + ns(a) + '; ' + ns(b) + ')'], 0); } },
            { type: 'drill', title: L('Nechta butun son?', 'Сколько целых чисел?', 'How many whole numbers?'), n: 6, make: function (R) { var a = R(-8, 4), b = R(a + 1, 10); return { q: '(' + ns(a) + '; ' + ns(b) + ']', a: b - a }; } }
          ],
          quiz: [{ q: '{ x &gt; 2; x ≤ 7 }', o: ['(2; 7]', '[2; 7)', '(2; 7)'], a: 0 }, { q: '{ x &gt; 5; x &lt; 1 }', o: [L('yechim yo‘q', 'нет решений', 'no solution'), '(1; 5)', '(5; 1)'], a: 0 }] },

        { id: 't10', lessons: ch(2), title: L('Modul qatnashgan tenglama va tengsizliklar', 'Уравнения и неравенства с модулем', 'Equations and inequalities with absolute value'),
          keys: ['|x| = a ⇒ x = ±a', '|x| &lt; a ⇒ −a &lt; x &lt; a'],
          scene: [{ obj: 'rod', n: 2, color: 'pink' }],
          explain: L('|x| — x dan 0 gacha masofa. |x − 3| = 5 → x − 3 = 5 yoki x − 3 = −5 → x = 8 yoki x = −2. |x| &lt; 4 → −4 &lt; x &lt; 4; |x| &gt; 4 → x &lt; −4 yoki x &gt; 4.',
            '|x| — расстояние от x до 0. |x − 3| = 5 → x − 3 = 5 или x − 3 = −5 → x = 8 или x = −2. |x| &lt; 4 → −4 &lt; x &lt; 4; |x| &gt; 4 → x &lt; −4 или x &gt; 4.',
            '|x| is the distance from x to 0. |x − 3| = 5 → x − 3 = 5 or x − 3 = −5 → x = 8 or x = −2. |x| &lt; 4 → −4 &lt; x &lt; 4; |x| &gt; 4 → x &lt; −4 or x &gt; 4.'),
          rule: '|x − a| = b ⇒ x = a ± b',
          acts: [
            { type: 'drill', title: L('Katta ildiz', 'Больший корень', 'Larger root'), n: 6, make: function (R) { var a = R(-6, 6), b = R(1, 9); return { q: '|x' + sg(-a) + '| = ' + b + ';  x<sub>max</sub>', a: a + b }; } },
            { type: 'choose', icon: '|x|', make: function (R) { var b = R(2, 9); return R(0, 1) ? choice('<span class="kd-big">|x| &lt; ' + b + '</span>', ['(−' + b + '; ' + b + ')', '(−∞; ' + b + ')', '(' + b + '; +∞)'], 0) : choice('<span class="kd-big">|x| &gt; ' + b + '</span>', ['(−∞; −' + b + ') ∪ (' + b + '; +∞)', '(−' + b + '; ' + b + ')', '(' + b + '; +∞)'], 0); } }
          ],
          quiz: [{ q: '|x − 3| = 5', o: ['8; −2', '8', '2; −8'], a: 0 }, { q: '|x| = −2', o: [L('yechim yo‘q', 'нет решений', 'no solution'), '2; −2', '−2'], a: 0 }] },

        { id: 't11', lessons: ch(2), title: L('Taqribiy hisoblash. Absolyut va nisbiy xatolik', 'Приближённые вычисления. Абсолютная и относительная погрешность', 'Approximation. Absolute and relative error'),
          keys: [L('absolyut xatolik |x − a|', 'абсолютная погрешность |x − a|', 'absolute error |x − a|'), L('nisbiy xatolik', 'относительная погрешность', 'relative error')],
          scene: [{ obj: 'weight', n: 1, color: 'yellow' }],
          explain: L('x — aniq qiymat, a — taqribiy. <b>Absolyut xatolik</b> |x − a|; <b>nisbiy xatolik</b> |x − a| : |x| · 100%. Masalan, x = 50, a = 49 bo‘lsa, absolyut xatolik 1, nisbiy — 2%. Nisbiy xatolik o‘lchash sifatini taqqoslashga yordam beradi.',
            'x — точное значение, a — приближённое. <b>Абсолютная погрешность</b> |x − a|; <b>относительная</b> |x − a| : |x| · 100%. Например, x = 50, a = 49: абсолютная 1, относительная 2%. Относительная погрешность позволяет сравнивать качество измерений.',
            'x is the exact value and a the approximation. <b>Absolute error</b> is |x − a|; <b>relative error</b> is |x − a| : |x| · 100%. E.g. x = 50, a = 49: absolute error 1, relative 2%. Relative error lets us compare the quality of measurements.'),
          rule: 'δ = |x − a| : |x| · 100%',
          acts: [
            { type: 'drill', title: L('Nisbiy xatolik, %', 'Относительная погрешность, %', 'Relative error, %'), n: 6, make: function (R) { var x = pick([20, 25, 40, 50, 80, 100, 200, 250, 400, 500]), p = pick([1, 2, 4, 5, 10]), d = r6(x * p / 100); return { q: H.dq(function (D) { return 'x = ' + x + ',  a = ' + D(r6(x - d)); }), a: p }; } },
            { type: 'drill', title: L('O‘ndan birgacha yaxlitlang', 'Округлите до десятых', 'Round to tenths'), n: 6, make: function (R) { var v = R(100, 9999) / 100; return { q: H.dq(function (D) { return D(v) + ' ≈'; }), a: r6(Math.round(v * 10) / 10) }; } }
          ],
          quiz: [{ q: L('x = 50, a = 49. Nisbiy xatolik?', 'x = 50, a = 49. Относительная погрешность?', 'x = 50, a = 49. Relative error?'), o: ['2%', '1%', '49%'], a: 0 }, { q: L('π ≈ 3,14 — absolyut xatolik taxminan?', 'π ≈ 3,14 — абсолютная погрешность примерно?', 'π ≈ 3.14 — absolute error about?'), o: [L('0,0016', '0,0016', '0.0016'), L('0,14', '0,14', '0.14'), '3'], a: 0 }] }
      ] },

      { id: 's4', title: L('Kvadrat tenglamalar', 'Квадратные уравнения', 'Quadratic equations'), icon: '²', color: 'green', topics: [
        { id: 't12', lessons: ch(3), title: L('Kvadrat tenglama. Chala kvadrat tenglamalar', 'Квадратное уравнение. Неполные квадратные уравнения', 'Quadratic equations. Incomplete quadratics'),
          keys: ['ax² + bx + c = 0', 'ax² + bx = 0', 'ax² + c = 0'],
          scene: [{ obj: 'flat', n: 2, color: 'green' }],
          explain: L('<b>Kvadrat tenglama</b>: ax² + bx + c = 0, a ≠ 0. Chala tenglamalar: ax² = 0 → x = 0; ax² + bx = 0 → x(ax + b) = 0 → x = 0 yoki x = −b/a; ax² + c = 0 → x² = −c/a: agar −c/a &gt; 0 bo‘lsa, x = ±√(−c/a), aks holda ildiz yo‘q.',
            '<b>Квадратное уравнение</b>: ax² + bx + c = 0, a ≠ 0. Неполные: ax² = 0 → x = 0; ax² + bx = 0 → x(ax + b) = 0 → x = 0 или x = −b/a; ax² + c = 0 → x² = −c/a: при −c/a &gt; 0 x = ±√(−c/a), иначе корней нет.',
            'A <b>quadratic equation</b> is ax² + bx + c = 0 with a ≠ 0. Incomplete ones: ax² = 0 → x = 0; ax² + bx = 0 → x(ax + b) = 0 → x = 0 or x = −b/a; ax² + c = 0 → x² = −c/a: if −c/a &gt; 0 then x = ±√(−c/a), otherwise no roots.'),
          rule: 'x(ax + b) = 0 ⇒ x = 0; x = −b/a',
          acts: [
            { type: 'drill', title: L('Musbat ildiz', 'Положительный корень', 'Positive root'), n: 8, make: function (R) { var a = R(1, 4), r = R(2, 9), k = R(0, 1); return k ? { q: (a === 1 ? '' : a) + 'x² − ' + a * r * r + ' = 0;  x &gt; 0', a: r } : { q: (a === 1 ? '' : a) + 'x² − ' + a * r + 'x = 0;  x ≠ 0', a: r }; } },
            { type: 'drill', title: L('Koeffitsiyentlar', 'Коэффициенты', 'Coefficients'), n: 5, make: function (R) { var a = R(1, 6), b = R(-9, 9), c = R(-9, 9), k = R(0, 2); return { q: kx(a, 'x²') + sg(b) + 'x' + sg(c) + ' = 0;  ' + 'abc'[k], a: [a, b, c][k] }; } }
          ],
          quiz: [{ q: 'x² − 16 = 0', o: ['±4', '4', '16'], a: 0 }, { q: 'x² + 9 = 0', o: [L('ildiz yo‘q', 'нет корней', 'no roots'), '±3', '−9'], a: 0 }, { q: '2x² − 6x = 0', o: ['0; 3', '3', '0; −3'], a: 0 }] },

        { id: 't13', lessons: ch(3), title: L('Kvadrat tenglama ildizlari formulasi. Diskriminant', 'Формула корней квадратного уравнения. Дискриминант', 'The quadratic formula. Discriminant'),
          keys: ['D = b² − 4ac', 'x = (−b ± √D) / 2a'],
          scene: [{ obj: 'flat', n: 3, color: 'cyan' }],
          explain: L('<b>Diskriminant</b> D = b² − 4ac. D &gt; 0 — ikki ildiz, D = 0 — bitta, D &lt; 0 — haqiqiy ildiz yo‘q. Ildizlar: x = (−b ± √D) / 2a. Masalan, x² − 5x + 6 = 0: D = 25 − 24 = 1, x = (5 ± 1)/2 → 3 va 2.',
            '<b>Дискриминант</b> D = b² − 4ac. D &gt; 0 — два корня, D = 0 — один, D &lt; 0 — действительных корней нет. Корни: x = (−b ± √D) / 2a. Например, x² − 5x + 6 = 0: D = 25 − 24 = 1, x = (5 ± 1)/2 → 3 и 2.',
            'The <b>discriminant</b> is D = b² − 4ac. D &gt; 0 — two roots, D = 0 — one, D &lt; 0 — no real roots. Roots: x = (−b ± √D) / 2a. E.g. x² − 5x + 6 = 0: D = 25 − 24 = 1, x = (5 ± 1)/2 → 3 and 2.'),
          rule: 'x = (−b ± √D) / 2a',
          acts: [
            { type: 'drill', title: L('Diskriminant', 'Дискриминант', 'Discriminant'), n: 5, make: function (R) { var a = R(1, 4), b = R(-9, 9), c = R(-6, 6); return { q: kx(a, 'x²') + sg(b) + 'x' + sg(c) + ' = 0;  D', a: b * b - 4 * a * c }; } },
            { type: 'drill', title: L('Katta ildiz', 'Больший корень', 'Larger root'), n: 6, make: function (R) { var p = R(-7, 7), q = R(-7, 7); if (p === q) q = p + 2; return { q: 'x²' + sg(-(p + q)) + 'x' + sg(p * q) + ' = 0;  x<sub>max</sub>', a: Math.max(p, q) }; } },
            { type: 'choose', title: L('Nechta ildiz?', 'Сколько корней?', 'How many roots?'), icon: '🔢', make: function (R) { var k = R(0, 2), a = 1, b, c; if (k === 0) { b = 2 * R(1, 5); c = b * b / 4 - R(1, 6); } else if (k === 1) { b = 2 * R(1, 5); c = b * b / 4; } else { b = R(0, 6); c = Math.floor(b * b / 4) + R(1, 6); } return choice('<span class="kd-big">x²' + sg(-b) + 'x' + sg(c) + ' = 0</span>', [L('ikkita', 'два', 'two'), L('bitta', 'один', 'one'), L('yo‘q', 'нет', 'none')], k); } }
          ],
          quiz: [{ q: 'x² − 5x + 6 = 0', o: ['2; 3', '−2; −3', '1; 6'], a: 0 }, { q: 'D &lt; 0', o: [L('haqiqiy ildiz yo‘q', 'действительных корней нет', 'no real roots'), L('ikki ildiz', 'два корня', 'two roots'), L('bitta ildiz', 'один корень', 'one root')], a: 0 }] },

        { id: 't14', lessons: ch(3), title: L('Viyet teoremasi. Ko‘paytuvchilarga ajratish', 'Теорема Виета. Разложение на множители', 'Vieta’s theorem. Factorising quadratics'),
          keys: ['x₁ + x₂ = −p', 'x₁ · x₂ = q', 'ax² + bx + c = a(x − x₁)(x − x₂)'],
          scene: [{ obj: 'box', n: 2, color: 'violet' }],
          explain: L('Keltirilgan kvadrat tenglama x² + px + q = 0 ildizlari uchun: x₁ + x₂ = −p, x₁ · x₂ = q (Fransua Viyet, XVI asr). Bundan kvadrat uchhadni ajratish: x² − 7x + 12 = (x − 3)(x − 4), chunki 3 + 4 = 7 va 3 · 4 = 12.',
            'Для корней приведённого уравнения x² + px + q = 0: x₁ + x₂ = −p, x₁ · x₂ = q (Франсуа Виет, XVI век). Отсюда разложение трёхчлена: x² − 7x + 12 = (x − 3)(x − 4), ведь 3 + 4 = 7 и 3 · 4 = 12.',
            'For the roots of x² + px + q = 0: x₁ + x₂ = −p and x₁ · x₂ = q (François Viète, 16th century). This factorises the trinomial: x² − 7x + 12 = (x − 3)(x − 4), since 3 + 4 = 7 and 3 · 4 = 12.'),
          rule: 'x₁ + x₂ = −p · x₁x₂ = q',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var p = R(-9, 9), q = R(-9, 9); return R(0, 1) ? { q: 'x²' + sg(p) + 'x' + sg(q) + ' = 0;  x₁ + x₂', a: -p } : { q: 'x²' + sg(p) + 'x' + sg(q) + ' = 0;  x₁ · x₂', a: q }; } },
            { type: 'choose', title: L('Ko‘paytuvchilarga ajrating', 'Разложите на множители', 'Factorise'), icon: '🧩', make: function (R) { var p = R(1, 7), q = R(1, 7); while (q === p) q = R(1, 7); return choice('<span class="kd-big">x²' + sg(-(p + q)) + 'x' + sg(p * q) + '</span>', ['(x − ' + p + ')(x − ' + q + ')', '(x + ' + p + ')(x + ' + q + ')', '(x − ' + p + ')(x + ' + q + ')'], 0); } }
          ],
          quiz: [{ q: L('x² − 7x + 12 = 0: x₁ + x₂ = ?', 'x² − 7x + 12 = 0: x₁ + x₂ = ?', 'x² − 7x + 12 = 0: x₁ + x₂ = ?'), o: ['7', '−7', '12'], a: 0 }, { q: 'x² − 7x + 12 = ?', o: ['(x − 3)(x − 4)', '(x + 3)(x + 4)', '(x − 2)(x − 6)'], a: 0 }] },

        { id: 't15', lessons: ch(3), title: L('Bikvadrat tenglamalar. Kvadrat tenglamaga keltiriladigan tenglamalar', 'Биквадратные уравнения и сводящиеся к квадратным', 'Biquadratic equations'),
          keys: ['ax⁴ + bx² + c = 0', 't = x²'],
          scene: [{ obj: 'cube', n: 4, color: 'green' }],
          explain: L('ax⁴ + bx² + c = 0 tenglamada t = x² belgilash kiritamiz: at² + bt + c = 0. Masalan, x⁴ − 5x² + 4 = 0 → t² − 5t + 4 = 0 → t = 1 yoki 4 → x = ±1, ±2. Faqat t ≥ 0 ildizlar yaroqli!',
            'В ax⁴ + bx² + c = 0 вводим t = x²: at² + bt + c = 0. Например, x⁴ − 5x² + 4 = 0 → t² − 5t + 4 = 0 → t = 1 или 4 → x = ±1, ±2. Годятся только t ≥ 0!',
            'In ax⁴ + bx² + c = 0 put t = x²: at² + bt + c = 0. E.g. x⁴ − 5x² + 4 = 0 → t² − 5t + 4 = 0 → t = 1 or 4 → x = ±1, ±2. Only t ≥ 0 works!'),
          rule: 't = x², t ≥ 0',
          acts: [
            { type: 'drill', title: L('Eng katta ildiz', 'Наибольший корень', 'Largest root'), n: 6, make: function (R) { var p = R(1, 5), q = R(1, 6); if (q === p) q = p + 1; return { q: 'x⁴' + sg(-(p * p + q * q)) + 'x²' + sg(p * p * q * q) + ' = 0;  x<sub>max</sub>', a: Math.max(p, q) }; } },
            { type: 'choose', title: L('Nechta ildiz?', 'Сколько корней?', 'How many roots?'), icon: '🔢', make: function (R) { var p = R(1, 4), k = R(0, 2); return [choice('<span class="kd-big">x⁴' + sg(-(p * p + (p + 1) * (p + 1))) + 'x²' + sg(p * p * (p + 1) * (p + 1)) + ' = 0</span>', ['4', '2', '0'], 0), choice('<span class="kd-big">x⁴' + sg(p * p - 1) + 'x² − ' + p * p + ' = 0</span>', ['2', '4', '0'], 0), choice('<span class="kd-big">x⁴ + ' + (p + 1) + 'x² + ' + p + ' = 0</span>', ['0', '2', '4'], 0)][k]; } }
          ],
          quiz: [{ q: 'x⁴ − 5x² + 4 = 0', o: ['±1; ±2', '1; 4', '±1; ±4'], a: 0 }, { q: L('t = x² da qaysi t yaroqsiz?', 'Какое t не подходит при t = x²?', 'Which t is not allowed for t = x²?'), o: ['t = −4', 't = 0', 't = 9'], a: 0 }] },

        { id: 't16', lessons: ch(3), title: L('Kvadrat tenglamalar yordamida masalalar yechish', 'Решение задач с помощью квадратных уравнений', 'Word problems with quadratics'),
          keys: [L('masala sharti', 'условие задачи', 'conditions'), L('chet ildiz', 'посторонний корень', 'extraneous root')],
          scene: [{ obj: 'box', n: 1, color: 'orange' }],
          explain: L('Masala: to‘g‘ri to‘rtburchak yuzi 60 cm², bir tomoni ikkinchisidan 7 cm uzun. x(x + 7) = 60 → x² + 7x − 60 = 0 → x = 5 yoki x = −12. Uzunlik manfiy bo‘lmaydi, javob: 5 va 12 cm. Ildizlarni shart bo‘yicha tekshiring!',
            'Задача: площадь прямоугольника 60 см², одна сторона на 7 см длиннее другой. x(x + 7) = 60 → x² + 7x − 60 = 0 → x = 5 или x = −12. Длина не бывает отрицательной, ответ: 5 и 12 см. Проверяйте корни по условию!',
            'Problem: a rectangle has area 60 cm² and one side is 7 cm longer. x(x + 7) = 60 → x² + 7x − 60 = 0 → x = 5 or x = −12. A length cannot be negative, so the sides are 5 and 12 cm. Always check roots against the story!'),
          rule: L('tenglama → ildizlar → shartga mos', 'уравнение → корни → проверка по условию', 'equation → roots → check the story'),
          acts: [
            { type: 'drill', title: L('Kichik tomon', 'Меньшая сторона', 'Shorter side'), n: 6, make: function (R) { var x = R(2, 12), d = R(1, 8); return { q: mk(function (l) { return 'x(x + ' + d + ') = ' + x * (x + d) + ',  x &gt; 0'; }), a: x }; } },
            { type: 'choose', title: L('Ketma-ket sonlar', 'Последовательные числа', 'Consecutive numbers'), icon: '🔢', make: function (R) { var n = R(4, 20); return choice(L('Ikki ketma-ket natural sonning ko‘paytmasi <b>' + n * (n + 1) + '</b>. Kichigi?', 'Произведение двух последовательных натуральных чисел равно <b>' + n * (n + 1) + '</b>. Меньшее?', 'Two consecutive whole numbers multiply to <b>' + n * (n + 1) + '</b>. The smaller?'), [String(n), String(n + 1), String(n - 1)], 0); } }
          ],
          quiz: [{ q: L('x(x + 7) = 60, x &gt; 0', 'x(x + 7) = 60, x &gt; 0', 'x(x + 7) = 60, x &gt; 0'), o: ['5', '12', '−12'], a: 0 }, { q: L('Kvadrat yuzi 81. Tomoni?', 'Площадь квадрата 81. Сторона?', 'A square has area 81. Side?'), o: ['9', '±9', '40,5'], a: 0 }] }
      ] },

      { id: 's5', title: L('Ma’lumotlar tahlili', 'Анализ данных', 'Data analysis'), icon: '📊', color: 'pink', topics: [
        { id: 't17', lessons: ch(4), title: L('Ma’lumotlarni tasvirlash', 'Представление данных', 'Representing data'),
          keys: [L('chastota', 'частота', 'frequency'), L('jadval, diagramma', 'таблица, диаграмма', 'table, chart')],
          scene: [{ obj: 'rod', n: 5, color: 'pink' }],
          explain: L('Ma’lumotlarni jadval, ustunli, chiziqli va doiraviy diagramma bilan tasvirlaymiz. Har bir qiymat necha marta uchrashi — uning <b>chastotasi</b>. Chastotalar yig‘indisi — kuzatuvlar soniga teng. Vaqt bo‘yicha o‘zgarish uchun chiziqli, ulushlar uchun doiraviy diagramma qulay.',
            'Данные представляют таблицей, столбчатой, линейной и круговой диаграммами. Сколько раз встречается значение — его <b>частота</b>. Сумма частот равна числу наблюдений. Для изменения во времени удобна линейная диаграмма, для долей — круговая.',
            'Data can be shown in a table, bar chart, line graph or pie chart. How often a value appears is its <b>frequency</b>. The frequencies add up to the number of observations. Line graphs suit change over time; pie charts suit shares.'),
          rule: L('Σ chastotalar = kuzatuvlar soni', 'Σ частот = число наблюдений', 'Σ frequencies = number of observations'),
          acts: [
            { type: 'drill', title: L('Chastota', 'Частота', 'Frequency'), n: 6, make: function (R) { var arr = []; for (var i = 0; i < 9; i++) arr.push(R(1, 5)); var v = pick(arr); return { q: mk(function (l) { return arr.join(', ') + ' — ' + { uz: v + ' necha marta?', ru: 'сколько раз ' + v + '?', en: 'how many times is ' + v + '?' }[l]; }), a: cnt(arr, v) }; } },
            { type: 'choose', title: L('Qaysi diagramma?', 'Какая диаграмма?', 'Which chart?'), icon: '📈', make: function () { return pick([
              choice(L('Bir yil davomida havo harorati qanday o‘zgargani...', 'Как менялась температура за год...', 'How the temperature changed over a year...'), [L('chiziqli diagramma', 'линейная диаграмма', 'line graph'), L('doiraviy diagramma', 'круговая диаграмма', 'pie chart')], 0),
              choice(L('Sinfdagi o‘quvchilarning qaysi qismi qaysi sportni tanlagani...', 'Какая доля класса выбрала какой спорт...', 'What share of the class chose each sport...'), [L('doiraviy diagramma', 'круговая диаграмма', 'pie chart'), L('chiziqli diagramma', 'линейная диаграмма', 'line graph')], 0)]); } }
          ],
          quiz: [{ q: L('Chastotalar yig‘indisi nimaga teng?', 'Чему равна сумма частот?', 'What do the frequencies add up to?'), o: [L('kuzatuvlar soniga', 'числу наблюдений', 'the number of observations'), '100', L('eng katta qiymatga', 'наибольшему значению', 'the largest value')], a: 0 }, { q: '2, 3, 3, 5, 3 — 3 ?', o: ['3', '1', '5'], a: 0 }] },

        { id: 't18', lessons: ch(4), title: L('O‘rta qiymat, moda va mediana', 'Среднее, мода и медиана', 'Mean, mode and median'),
          keys: [L('o‘rta qiymat', 'среднее', 'mean'), L('moda', 'мода', 'mode'), L('mediana', 'медиана', 'median')],
          scene: [{ obj: 'cube', n: 5, color: 'yellow' }],
          explain: L('<b>O‘rta qiymat</b> — yig‘indi : soni. <b>Moda</b> — eng ko‘p uchraydigan qiymat. <b>Mediana</b> — tartiblangan qatorning o‘rtasidagi son (juft sonli qatorda — o‘rtadagi ikkitasining o‘rtachasi). 2, 3, 3, 7, 10: o‘rtacha 5, moda 3, mediana 3.',
            '<b>Среднее</b> — сумма : количество. <b>Мода</b> — самое частое значение. <b>Медиана</b> — число в середине упорядоченного ряда (при чётном числе — среднее двух средних). 2, 3, 3, 7, 10: среднее 5, мода 3, медиана 3.',
            'The <b>mean</b> is sum : count. The <b>mode</b> is the most common value. The <b>median</b> is the middle of the ordered list (for an even count, the average of the two middle ones). 2, 3, 3, 7, 10: mean 5, mode 3, median 3.'),
          rule: L('mediana — o‘rtadagi son', 'медиана — число посередине', 'median — the middle value'),
          acts: [
            { type: 'drill', n: 8, make: function (R) { var k = R(0, 2), n = 5, arr = []; for (var i = 0; i < n; i++) arr.push(R(1, 20)); if (k === 0) { var s = arr.reduce(function (a, b) { return a + b; }, 0); arr[4] += (5 - s % 5) % 5; return { q: mk(function (l) { return arr.join(', ') + ' — ' + { uz: 'o‘rta qiymat', ru: 'среднее', en: 'mean' }[l]; }), a: arr.reduce(function (a, b) { return a + b; }, 0) / 5 }; } if (k === 1) { var srt = arr.slice().sort(function (a, b) { return a - b; }); return { q: mk(function (l) { return arr.join(', ') + ' — ' + { uz: 'mediana', ru: 'медиана', en: 'median' }[l]; }), a: srt[2] }; } var m = R(1, 9), a2 = H.distinct(R, 3, 10, 20); var list = [m, a2[0], m, a2[1], m, a2[2]]; return { q: mk(function (l) { return list.join(', ') + ' — ' + { uz: 'moda', ru: 'мода', en: 'mode' }[l]; }), a: m }; } },
            { type: 'problem', title: L('Baholar', 'Оценки', 'Marks'), make: function (R) { var m = R(3, 5), a = m + pick([-1, 0, 1]), b = m + pick([-1, 0, 1]), c = 3 * m - a - b; if (c < 1 || c > 5) { a = m; b = m; c = m; } return { story: L('Uch baho: <b>' + a + '</b>, <b>' + b + '</b>, <b>' + c + '</b>. <u>O‘rta qiymat</u>?', 'Три оценки: <b>' + a + '</b>, <b>' + b + '</b>, <b>' + c + '</b>. <u>Среднее</u>?', 'Three marks: <b>' + a + '</b>, <b>' + b + '</b>, <b>' + c + '</b>. <u>Mean</u>?'), expr: [a, '+', b, '+', c, ':', 3, '=', m], ans: m, unit: '' }; } }
          ],
          quiz: [{ q: L('2, 3, 3, 7, 10 — mediana?', '2, 3, 3, 7, 10 — медиана?', '2, 3, 3, 7, 10 — median?'), o: ['3', '5', '7'], a: 0 }, { q: L('1, 2, 3, 4 — mediana?', '1, 2, 3, 4 — медиана?', '1, 2, 3, 4 — median?'), o: [L('2,5', '2,5', '2.5'), '2', '3'], a: 0 }, { q: L('4, 4, 5, 6, 4 — moda?', '4, 4, 5, 6, 4 — мода?', '4, 4, 5, 6, 4 — mode?'), o: ['4', '5', '6'], a: 0 }] },

        { id: 't19', lessons: ch(4), title: L('Kombinatorikaning asosiy qoidasi. Tanlash usuli', 'Основное правило комбинаторики. Метод перебора', 'Counting principle. Listing'),
          keys: ['n!', 'Aₙᵏ', 'Cₙ²'],
          scene: [{ obj: 'cube', n: 3, color: 'pink' }, { obj: 'ball', n: 3, color: 'blue' }],
          explain: L('Agar birinchi tanlovni m usulda, ikkinchisini n usulda qilish mumkin bo‘lsa, ikkalasini birga — m · n usulda (<b>ko‘paytirish qoidasi</b>). n ta elementdan k tasini tartib bilan tanlash: n(n − 1)…(n − k + 1). Juftliklar soni (tartibsiz): n(n − 1)/2. Kichik masalalarda variantlarni daraxt chizib sanaymiz.',
            'Если первый выбор можно сделать m способами, а второй — n, то оба — m · n способами (<b>правило произведения</b>). Выбор k из n с порядком: n(n − 1)…(n − k + 1). Число пар без порядка: n(n − 1)/2. В небольших задачах варианты перебираем деревом.',
            'If the first choice can be made in m ways and the second in n, both can be made in m · n ways (<b>multiplication rule</b>). Choosing k of n in order: n(n − 1)…(n − k + 1). Unordered pairs: n(n − 1)/2. For small problems, list the options with a tree.'),
          rule: 'm · n · Cₙ² = n(n − 1)/2',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var n = R(3, 8), k = R(0, 2); return [{ q: n + '!', a: fact(n) }, { q: mk(function (l) { return n + { uz: ' kishi bir-biri bilan qo‘l berib ko‘rishdi; qo‘l berishlar', ru: ' человек пожали руки друг другу; рукопожатий', en: ' people all shake hands; handshakes' }[l]; }), a: n * (n - 1) / 2 }, { q: mk(function (l) { return n + { uz: ' kishidan sardor va o‘rinbosar', ru: ' человек: староста и заместитель', en: ' people: captain and deputy' }[l]; }), a: n * (n - 1) }][k]; } },
            { type: 'problem', make: function (R) { var a = R(2, 5), b = R(2, 5), c = R(2, 4); return { story: L('Kafeda <b>' + a + '</b> xil salat, <b>' + b + '</b> xil asosiy taom va <b>' + c + '</b> xil ichimlik bor. <u>Nechta turli</u> tushlik tuzish mumkin?', 'В кафе <b>' + a + '</b> салата, <b>' + b + '</b> основных блюда и <b>' + c + '</b> напитка. <u>Сколько разных</u> обедов можно составить?', 'A café has <b>' + a + '</b> salads, <b>' + b + '</b> mains and <b>' + c + '</b> drinks. <u>How many different</u> lunches?'), expr: [a, '·', b, '·', c, '=', a * b * c], ans: a * b * c, unit: L('xil', 'вариантов', 'lunches') }; } }
          ],
          quiz: [{ q: L('5 kishi qo‘l berib ko‘rishdi. Necha marta?', '5 человек пожали руки. Сколько рукопожатий?', '5 people shake hands. How many handshakes?'), o: ['10', '20', '25'], a: 0 }, { q: '4! = ?', o: ['24', '16', '10'], a: 0 }] }
      ] }
    ]
  };
  C.addPart(part1);
})(this);
