// Nuvemath — 6-sinf, I qism (manba: «Matematika. 6-sinf. I qism», Toshkent, yangi nashr).
// Boblar va mavzular tartibi darslikdan olingan; tushuntirishlar, topshiriqlar va chizmalar Nuvemath uchun qayta yozilgan.
(function (root) {
  'use strict';
  var C = root.NMCurriculum, H = C.H, L = H.L, mk = H.mk, PCS = H.PCS, choice = H.choice, pick = H.pick;
  var fr = H.fr, mixed = H.mixed, dq = H.dq, r6 = H.r6, gcd = H.gcd;
  var SOM = L('so‘m', 'сум', 'sum'), CM = H.CM, CM2 = L('cm²', 'см²', 'cm²'), DEG = L('°', '°', '°'), PI = 3.14;
  function fmt(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' '); }
  function ch(n) { return L(n + '-bob', 'Глава ' + n, 'Chapter ' + n); }
  function fig(inner, w, h) { return '<div class="kd-fig"><svg viewBox="0 0 ' + (w || 300) + ' ' + (h || 180) + '">' + inner + '</svg></div>'; }
  var TX = 'font-size="16" font-weight="700" fill="currentColor" text-anchor="middle"', ST = 'stroke="#4f8dff" stroke-width="3"';
  function circleFig(r, what) { return fig('<circle cx="150" cy="95" r="75" fill="rgba(79,141,255,.15)" ' + ST + '/><circle cx="150" cy="95" r="4" fill="#ff6b8b"/>' +
    (what === 'd' ? '<line x1="75" y1="95" x2="225" y2="95" stroke="#ff6b8b" stroke-width="3"/><text x="150" y="85" ' + TX + '>d = ' + 2 * r + ' cm</text>' : '<line x1="150" y1="95" x2="225" y2="95" stroke="#ff6b8b" stroke-width="3"/><text x="188" y="85" ' + TX + '>r = ' + r + ' cm</text>'), 300, 190); }
  function semiFig(r, quarter) { return quarter ? fig('<path d="M80 160 L80 40 A120 120 0 0 1 200 160 Z" fill="rgba(255,107,139,.18)" stroke="#ff6b8b" stroke-width="3"/><text x="140" y="178" ' + TX + '>r = ' + r + ' cm</text>', 300, 190)
    : fig('<path d="M40 150 A110 110 0 0 1 260 150 Z" fill="rgba(255,107,139,.18)" stroke="#ff6b8b" stroke-width="3"/><text x="150" y="172" ' + TX + '>d = ' + 2 * r + ' cm</text>', 300, 185); }
  function triFig(A, B, Cc, ext) { return fig('<polygon points="30,150 230,150 110,30" fill="rgba(79,141,255,.15)" ' + ST + ' stroke-linejoin="round"/>' + (ext ? '<line x1="230" y1="150" x2="290" y2="150" ' + ST + '/>' : '') +
    '<text x="60" y="142" ' + TX + '>' + A + '</text><text x="' + (ext ? 262 : 198) + '" y="' + (ext ? 140 : 142) + '" ' + TX + (B === '?' ? ' style="fill:#ff6b8b"' : '') + '>' + B + '</text><text x="112" y="64" ' + TX + (Cc === '?' ? ' style="fill:#ff6b8b"' : '') + '>' + Cc + '</text>', 300, 170); }

  var part1 = {
    grade: 6, part: 1, edition: L('Yangi nashr', 'Новое издание', 'New edition'),
    title: L('Algebra, kasrlarni bo‘lish, nisbat, foiz va doira', 'Алгебра, деление дробей, отношения, проценты и круг', 'Algebra, dividing fractions, ratios, percentages and circles'),
    book: L('Matematika, 6-sinf, I qism (Toshkent)', 'Математика, 6 класс, часть I (Ташкент)', 'Mathematics, Grade 6, Part I (Tashkent)'),
    intro: L('6-sinfni algebradan boshlaymiz: harflar bilan ifodalar va tenglamalar. So‘ng kasrlarni bo‘lish, nisbat va foizlarga doir masalalar, doira va aylana, shakllardagi burchaklarni o‘rganamiz.',
      'Начинаем 6 класс с алгебры: выражения с буквами и уравнения. Затем деление дробей, задачи на отношения и проценты, круг и окружность, углы в фигурах.',
      'Grade 6 starts with algebra: expressions with letters and equations. Then dividing fractions, ratio and percentage problems, circles, and angles in shapes.'),
    sections: [
      { id: 's1', title: L('Algebra', 'Алгебра', 'Algebra'), icon: '🔤', color: 'blue', topics: [
        { id: 't1', lessons: ch(1), title: L('Algebraik ifodalar', 'Алгебраические выражения', 'Algebraic expressions'),
          keys: [L('o‘zgaruvchi', 'переменная', 'variable'), '3x', 'x + 5'],
          scene: [{ obj: 'box', n: 3, color: 'orange' }, { obj: 'cube', n: 2, color: 'yellow' }],
          explain: L('Noma’lum miqdorni harf bilan belgilaymiz: kepka narxi <b>x</b> so‘m bo‘lsa, 3 ta kepka — <b>3x</b> so‘m, kepka va 25 000 so‘mlik ryukzak — <b>x + 25 000</b> so‘m. 3x — bu 3 · x ning qisqa yozuvi.',
            'Неизвестную величину обозначаем буквой: если кепка стоит <b>x</b> сум, то 3 кепки — <b>3x</b> сум, кепка и рюкзак за 25 000 — <b>x + 25 000</b> сум. 3x — краткая запись 3 · x.',
            'We use a letter for an unknown amount: if a cap costs <b>x</b> sum, 3 caps cost <b>3x</b> sum and a cap plus a 25 000 sum backpack cost <b>x + 25 000</b> sum. 3x is short for 3 · x.'),
          rule: '3x = 3 · x',
          acts: [
            { type: 'choose', title: L('Ifodani tanlang', 'Выберите выражение', 'Pick the expression'), icon: '🔤', make: function (R) { var a = R(2, 9), k = R(0, 3); return [
              choice(L('<b>x</b> sonidan <b>' + a + '</b> ta ko‘p', 'На <b>' + a + '</b> больше, чем <b>x</b>', '<b>' + a + '</b> more than <b>x</b>'), ['x + ' + a, a + 'x', 'x − ' + a], 0),
              choice(L('<b>x</b> ning <b>' + a + '</b> barobari', '<b>x</b>, умноженное на <b>' + a + '</b>', '<b>' + a + '</b> times <b>x</b>'), [a + 'x', 'x + ' + a, 'x : ' + a], 0),
              choice(L('<b>x</b> dan <b>' + a + '</b> ta kam', 'На <b>' + a + '</b> меньше, чем <b>x</b>', '<b>' + a + '</b> less than <b>x</b>'), ['x − ' + a, a + ' − x', 'x + ' + a], 0),
              choice(L('<b>x</b> ni <b>' + a + '</b> ga bo‘lish', '<b>x</b>, делённое на <b>' + a + '</b>', '<b>x</b> divided by <b>' + a + '</b>'), ['x : ' + a, a + ' : x', a + 'x'], 0)][k]; } },
            { type: 'choose', title: L('Masaladan ifodaga', 'От задачи к выражению', 'Story to expression'), icon: '🧢', make: function (R) { var n = R(2, 6), p = R(2, 9) * 5000; return choice(L('Bir dona daftar <b>y</b> so‘m. <b>' + n + '</b> ta daftar va <b>' + fmt(p) + '</b> so‘mlik ruchka qancha turadi?', 'Тетрадь стоит <b>y</b> сум. Сколько стоят <b>' + n + '</b> тетрадей и ручка за <b>' + fmt(p) + '</b> сум?', 'A notebook costs <b>y</b> sum. How much are <b>' + n + '</b> notebooks and a <b>' + fmt(p) + '</b> sum pen?'), [n + 'y + ' + fmt(p), 'y + ' + n + ' + ' + fmt(p), n + '(y − ' + fmt(p) + ')'], 0); } }
          ],
          quiz: [{ q: L('x dan 5 ta ko‘p?', 'На 5 больше x?', '5 more than x?'), o: ['x + 5', '5x', 'x − 5'], a: 0 }, { q: L('3x nimani bildiradi?', 'Что означает 3x?', 'What does 3x mean?'), o: ['3 · x', '3 + x', L('30 dan x gacha', 'от 30 до x', 'from 30 to x')], a: 0 }] },

        { id: 't2', lessons: ch(1), title: L('Algebraik ifodalarni soddalashtirish', 'Упрощение выражений', 'Simplifying expressions'),
          keys: [L('o‘xshash hadlar', 'подобные слагаемые', 'like terms'), '3x + 5x = 8x'],
          scene: [{ obj: 'cube', n: 3, color: 'blue' }, { obj: 'cube', n: 5, color: 'blue' }],
          explain: L('Bir xil harfli hadlarni qo‘shamiz: 3 ta x va yana 5 ta x — jami 8 ta x: 3x + 5x = 8x. Turli harflar va sonlar alohida qoladi: 4a + 2b + 3a + 5 = 7a + 2b + 5.',
            'Складываем слагаемые с одинаковой буквой: 3 икса и ещё 5 иксов — 8 иксов: 3x + 5x = 8x. Разные буквы и числа остаются отдельно: 4a + 2b + 3a + 5 = 7a + 2b + 5.',
            'Add terms with the same letter: 3 x’s and 5 more x’s make 8 x’s: 3x + 5x = 8x. Different letters and plain numbers stay separate: 4a + 2b + 3a + 5 = 7a + 2b + 5.'),
          rule: 'ax + bx = (a + b)x',
          acts: [
            { type: 'drill', title: L('Koeffitsiyentni toping', 'Найдите коэффициент', 'Find the coefficient'), n: 8, make: function (R) { var a = R(2, 15), b = R(2, 15); return R(0, 1) ? { q: a + 'x + ' + b + 'x = □x;  □', a: a + b } : { q: (a + b) + 'y − ' + b + 'y = □y;  □', a: a }; } },
            { type: 'choose', title: L('Soddalashtiring', 'Упростите', 'Simplify'), icon: '🧹', make: function (R) { var a = R(2, 7), b = R(2, 7), c = R(2, 7), d = R(2, 9); return choice('<span class="kd-big">' + a + 'a + ' + c + 'b + ' + b + 'a + ' + d + '</span>', [(a + b) + 'a + ' + c + 'b + ' + d, (a + b + c) + 'ab + ' + d, (a + b + c + d) + 'a'], 0); } }
          ],
          quiz: [{ q: '3x + 5x = ?', o: ['8x', '15x', '8'], a: 0 }, { q: '4a + 2b + 3a = ?', o: ['7a + 2b', '9ab', '9a'], a: 0 }] },

        { id: 't3', lessons: ch(1), title: L('Algebraik ifodalarning qiymatini topish', 'Значение алгебраического выражения', 'Evaluating expressions'),
          keys: [L('o‘rniga qo‘yish', 'подстановка', 'substitution')],
          scene: [{ obj: 'box', n: 2, color: 'green' }],
          explain: L('Harf o‘rniga uning qiymatini qo‘yib hisoblaymiz: x = 4 bo‘lsa, 3x + 7 = 3 · 4 + 7 = 19. Amallar tartibini unutmang!',
            'Подставляем значение вместо буквы и считаем: при x = 4, 3x + 7 = 3 · 4 + 7 = 19. Не забывайте порядок действий!',
            'Replace the letter with its value and calculate: if x = 4, 3x + 7 = 3 · 4 + 7 = 19. Remember the order of operations!'),
          rule: 'x = 4: 3x + 7 = 19',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var x = R(2, 12), a = R(2, 9), b = R(1, 30), k = R(0, 2); return [{ q: a + 'x + ' + b + ',  x = ' + x, a: a * x + b }, { q: a + '(x + ' + b + '),  x = ' + x, a: a * (x + b) }, { q: 'x · x − ' + x + ',  x = ' + x, a: x * x - x }][k]; } },
            { type: 'problem', make: function (R) { var x = R(5, 20) * 1000, n = R(2, 5), p = R(10, 40) * 1000; return { story: L('Kepka <b>x</b> so‘m, ryukzak <b>' + fmt(p) + '</b> so‘m. <b>' + n + '</b> ta kepka va ryukzak narxi: ' + n + 'x + ' + fmt(p) + '. x = <b>' + fmt(x) + '</b> bo‘lsa, <u>qancha</u> to‘lanadi?', 'Кепка стоит <b>x</b> сум, рюкзак — <b>' + fmt(p) + '</b> сум. <b>' + n + '</b> кепки и рюкзак: ' + n + 'x + ' + fmt(p) + '. <u>Сколько</u> платить при x = <b>' + fmt(x) + '</b>?', 'A cap costs <b>x</b> sum and a backpack <b>' + fmt(p) + '</b> sum. <b>' + n + '</b> caps and the backpack: ' + n + 'x + ' + fmt(p) + '. <u>How much</u> if x = <b>' + fmt(x) + '</b>?'), expr: [n, '·', x, '+', p, '=', n * x + p], ans: n * x + p, unit: SOM }; } }
          ],
          quiz: [{ q: 'x = 4: 3x + 7 = ?', o: ['19', '41', '14'], a: 0 }, { q: 'a = 5: 2(a + 1) = ?', o: ['12', '11', '7'], a: 0 }] },

        { id: 't4', lessons: ch(1), title: L('Tenglamalarni yechish', 'Решение уравнений', 'Solving equations'),
          keys: [L('teskari amal', 'обратное действие', 'inverse operation'), '3x + 5 = 20'],
          scene: [{ obj: 'weight', n: 2, color: 'orange' }],
          explain: L('Tenglama — tarozi: ikki tomonda bir xil amal bajarsak, muvozanat buzilmaydi. 3x + 5 = 20: ikki tomondan 5 ni ayiramiz — 3x = 15, so‘ng 3 ga bo‘lamiz — x = 5. Tekshirish: 3 · 5 + 5 = 20 ✓',
            'Уравнение — это весы: одинаковое действие с обеих сторон сохраняет равновесие. 3x + 5 = 20: вычтем 5 — 3x = 15, разделим на 3 — x = 5. Проверка: 3 · 5 + 5 = 20 ✓',
            'An equation is a balance: doing the same thing to both sides keeps it level. 3x + 5 = 20: subtract 5 — 3x = 15, divide by 3 — x = 5. Check: 3 · 5 + 5 = 20 ✓'),
          rule: 'ax + b = c → x = (c − b) : a',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var x = R(2, 20), a = R(2, 9), b = R(1, 40), k = R(0, 3); return [{ q: a + 'x + ' + b + ' = ' + (a * x + b) + ';  x', a: x }, { q: a + 'x − ' + b + ' = ' + (a * x - b) + ';  x', a: x }, { q: 'x : ' + a + ' + ' + b + ' = ' + (x + b) + ';  x', a: a * x }, { q: a + '(x − ' + Math.min(b, x - 1) + ') = ' + a * (x - Math.min(b, x - 1)) + ';  x', a: x }][k]; } },
            { type: 'problem', make: function (R) { var x = R(3, 15) * 1000, n = R(2, 5), p = R(5, 30) * 1000; return { story: L('<b>' + n + '</b> ta bir xil kitob va <b>' + fmt(p) + '</b> so‘mlik albom uchun <b>' + fmt(n * x + p) + '</b> so‘m to‘landi. Tenglama: ' + n + 'x + ' + fmt(p) + ' = ' + fmt(n * x + p) + '. <u>Bitta kitob</u> narxi?', 'За <b>' + n + '</b> одинаковых книг и альбом за <b>' + fmt(p) + '</b> сум заплатили <b>' + fmt(n * x + p) + '</b> сум. Уравнение: ' + n + 'x + ' + fmt(p) + ' = ' + fmt(n * x + p) + '. <u>Цена одной книги</u>?', '<b>' + n + '</b> identical books and a <b>' + fmt(p) + '</b> sum album cost <b>' + fmt(n * x + p) + '</b> sum. Equation: ' + n + 'x + ' + fmt(p) + ' = ' + fmt(n * x + p) + '. <u>Price of one book</u>?'), expr: [n * x + p, '−', p, ':', n, '=', x], ans: x, unit: SOM }; } }
          ],
          quiz: [{ q: '3x + 5 = 20; x = ?', o: ['5', '15', '25'], a: 0 }, { q: '2(x − 1) = 10; x = ?', o: ['6', '4', '5'], a: 0 }] }
      ] },

      { id: 's2', title: L('Oddiy kasrlarni bo‘lish', 'Деление дробей', 'Dividing fractions'), icon: '➗', color: 'pink', topics: [
        { id: 't5', lessons: ch(2), title: L('To‘g‘ri kasrni natural songa bo‘lish', 'Деление дроби на натуральное число', 'Dividing a fraction by a whole number'),
          keys: [L('maxrajni ko‘paytiramiz', 'умножаем знаменатель', 'multiply the denominator')],
          scene: [{ obj: 'ball', n: 4, color: 'pink' }],
          explain: mk(function (l) { return { uz: 'Pitsaning ' + fr(1, 2) + ' qismini 3 kishiga bo‘lsak, har biriga ' + fr(1, 6) + ' tegadi: ' + fr(1, 2) + ' : 3 = ' + fr(1, 2 * 3) + '. Qoida: maxrajni songa ko‘paytiramiz — ' + fr(2, 5) + ' : 4 = ' + fr(2, 20) + ' = ' + fr(1, 10) + '.', ru: 'Если ' + fr(1, 2) + ' пиццы разделить на троих, каждому достанется ' + fr(1, 6) + ': ' + fr(1, 2) + ' : 3 = ' + fr(1, 6) + '. Правило: умножаем знаменатель на число — ' + fr(2, 5) + ' : 4 = ' + fr(2, 20) + ' = ' + fr(1, 10) + '.', en: 'Sharing ' + fr(1, 2) + ' of a pizza among 3 people gives each ' + fr(1, 6) + ': ' + fr(1, 2) + ' : 3 = ' + fr(1, 6) + '. Rule: multiply the denominator by the number — ' + fr(2, 5) + ' : 4 = ' + fr(2, 20) + ' = ' + fr(1, 10) + '.' }[l]; }),
          rule: 'a/b : n = a/(b · n)',
          acts: [
            { type: 'drill', title: L('Maxrajni toping', 'Найдите знаменатель', 'Find the denominator'), n: 6, make: function (R) { var a = R(1, 8), b = R(a + 1, 12), n = R(2, 6); return { q: fr(a, b) + ' : ' + n + ' = ' + fr(a, '□') + ';  □', a: b * n }; } },
            { type: 'problem', make: function (R) { var b = pick([2, 4, 5]), n = pick([2, 5, 10]), a = R(1, b - 1), T = a * 1000 / b; return { story: mk(function (l) { return { uz: fr(a, b) + ' kg (' + T + ' g) shirinlik <b>' + n + '</b> bolaga teng bo‘lindi. Har biriga <u>necha gramm</u> tegdi?', ru: fr(a, b) + ' кг (' + T + ' г) конфет разделили поровну на <b>' + n + '</b> детей. <u>Сколько граммов</u> каждому?', en: fr(a, b) + ' kg (' + T + ' g) of sweets were shared equally among <b>' + n + '</b> children. <u>How many grams</u> each?' }[l]; }), expr: [T, ':', n, '=', r6(T / n)], ans: r6(T / n), unit: L('g', 'г', 'g') }; } }
          ],
          quiz: [{ q: fr(1, 2) + ' : 3 = ?', o: [fr(1, 6), fr(3, 2), fr(1, 5)], a: 0 }, { q: fr(2, 5) + ' : 4 = ?', o: [fr(1, 10), fr(8, 5), fr(2, 9)], a: 0 }] },

        { id: 't6', lessons: ch(2), title: L('Natural sonni kasrga bo‘lish', 'Деление натурального числа на дробь', 'Dividing a whole number by a fraction'),
          keys: [L('nechta sig‘adi?', 'сколько раз помещается?', 'how many fit?'), L('teskari kasr', 'обратная дробь', 'reciprocal')],
          scene: [{ obj: 'bucket', n: 3, color: 'blue' }],
          explain: mk(function (l) { return { uz: '3 litr sharbatni ' + fr(1, 4) + ' litrlik stakanlarga quysak, 3 : ' + fr(1, 4) + ' = 3 · 4 = 12 stakan bo‘ladi. Kasrga bo‘lish — <b>teskari kasrga ko‘paytirish</b>: 6 : ' + fr(2, 3) + ' = 6 · ' + fr(3, 2) + ' = 9.', ru: 'Если 3 литра сока разлить в стаканы по ' + fr(1, 4) + ' л, получится 3 : ' + fr(1, 4) + ' = 3 · 4 = 12 стаканов. Делить на дробь — значит <b>умножать на обратную дробь</b>: 6 : ' + fr(2, 3) + ' = 6 · ' + fr(3, 2) + ' = 9.', en: 'Pouring 3 litres of juice into ' + fr(1, 4) + ' l glasses fills 3 : ' + fr(1, 4) + ' = 3 · 4 = 12 glasses. Dividing by a fraction means <b>multiplying by its reciprocal</b>: 6 : ' + fr(2, 3) + ' = 6 · ' + fr(3, 2) + ' = 9.' }[l]; }),
          rule: 'n : a/b = n · b/a',
          acts: [
            { type: 'drill', n: 6, make: function (R) { var a = R(1, 5), b = R(a + 1, 9), n = a * R(1, 6); return { q: n + ' : ' + fr(a, b), a: n * b / a }; } },
            { type: 'problem', make: function (R) { var b = pick([2, 3, 4, 5]), n = R(2, 9); return { story: mk(function (l) { return { uz: '<b>' + n + '</b> m lentadan ' + fr(1, b) + ' m dan bo‘laklar qirqildi. <u>Nechta bo‘lak</u> chiqdi?', ru: 'От ленты длиной <b>' + n + '</b> м отрезали куски по ' + fr(1, b) + ' м. <u>Сколько кусков</u> получилось?', en: 'A <b>' + n + '</b> m ribbon is cut into ' + fr(1, b) + ' m pieces. <u>How many pieces</u>?' }[l]; }), expr: [n, '·', b, '=', n * b], ans: n * b, unit: PCS }; } }
          ],
          quiz: [{ q: '3 : ' + fr(1, 4) + ' = ?', o: ['12', fr(3, 4), '7'], a: 0 }, { q: '6 : ' + fr(2, 3) + ' = ?', o: ['9', '4', '18'], a: 0 }] },

        { id: 't7', lessons: ch(2), title: L('Kasrni kasrga bo‘lish', 'Деление дроби на дробь', 'Dividing a fraction by a fraction'),
          keys: [L('teskari kasrga ko‘paytirish', 'умножение на обратную', 'multiply by the reciprocal')],
          scene: [{ obj: 'cylinder', n: 2, color: 'violet' }],
          explain: mk(function (l) { return { uz: 'Kasrni kasrga bo‘lish uchun birinchisini ikkinchisiga teskari kasrga ko‘paytiramiz: ' + fr(3, 4) + ' : ' + fr(2, 5) + ' = ' + fr(3, 4) + ' · ' + fr(5, 2) + ' = ' + fr(15, 8) + ' = ' + mixed(1, 7, 8) + '.', ru: 'Чтобы разделить дробь на дробь, умножаем первую на дробь, обратную второй: ' + fr(3, 4) + ' : ' + fr(2, 5) + ' = ' + fr(3, 4) + ' · ' + fr(5, 2) + ' = ' + fr(15, 8) + ' = ' + mixed(1, 7, 8) + '.', en: 'To divide by a fraction, multiply by its reciprocal: ' + fr(3, 4) + ' : ' + fr(2, 5) + ' = ' + fr(3, 4) + ' · ' + fr(5, 2) + ' = ' + fr(15, 8) + ' = ' + mixed(1, 7, 8) + '.' }[l]; }),
          rule: 'a/b : c/d = a/b · d/c',
          acts: [
            { type: 'drill', title: L('Suratni toping', 'Найдите числитель', 'Find the numerator'), n: 6, make: function (R) { var a = R(1, 7), b = R(a + 1, 9), c = R(1, 7), d = R(c + 1, 9); return { q: fr(a, b) + ' : ' + fr(c, d) + ' = ' + fr('□', b * c) + ';  □', a: a * d }; } },
            { type: 'choose', title: L('To‘g‘ri qadam', 'Верный шаг', 'The right step'), icon: '🔁', make: function (R) { var a = R(1, 5), b = R(a + 1, 8), c = R(1, 5), d = R(c + 1, 9); return choice('<span class="kd-big">' + fr(a, b) + ' : ' + fr(c, d) + ' = ?</span>', [fr(a, b) + ' · ' + fr(d, c), fr(b, a) + ' · ' + fr(c, d), fr(a, b) + ' · ' + fr(c, d)], 0); } }
          ],
          quiz: [{ q: fr(3, 4) + ' : ' + fr(2, 5) + ' = ?', o: [fr(15, 8), fr(6, 20), fr(8, 15)], a: 0 }, { q: fr(1, 2) + ' : ' + fr(1, 4) + ' = ?', o: ['2', fr(1, 8), fr(1, 2)], a: 0 }] },

        { id: 't8', lessons: ch(2), title: L('Kasrlarga doir matnli masalalar', 'Задачи с дробями', 'Word problems with fractions'),
          keys: [L('qism', 'часть', 'part'), L('butun', 'целое', 'whole')],
          scene: [{ obj: 'apple', n: 5, color: 'green' }],
          explain: mk(function (l) { return { uz: 'Sonning qismi ma’lum bo‘lsa, butunni bo‘lish bilan topamiz: sinfning ' + fr(3, 5) + ' qismi 18 bola bo‘lsa, butun sinf 18 : ' + fr(3, 5) + ' = 18 · ' + fr(5, 3) + ' = 30 bola.', ru: 'Если известна часть, целое находим делением: ' + fr(3, 5) + ' класса — это 18 детей, значит весь класс 18 : ' + fr(3, 5) + ' = 18 · ' + fr(5, 3) + ' = 30.', en: 'If a part is known, find the whole by dividing: ' + fr(3, 5) + ' of a class is 18 children, so the whole class is 18 : ' + fr(3, 5) + ' = 18 · ' + fr(5, 3) + ' = 30.' }[l]; }),
          rule: L('butun = qism : kasr', 'целое = часть : дробь', 'whole = part : fraction'),
          acts: [
            { type: 'problem', make: function (R) { var b = R(3, 8), a = R(1, b - 1), u = R(2, 9), W = b * u; return { story: mk(function (l) { return { uz: 'Kitobning ' + fr(a, b) + ' qismi <b>' + a * u + '</b> bet. Kitob <u>necha bet</u>?', ru: fr(a, b) + ' книги — это <b>' + a * u + '</b> страниц. <u>Сколько страниц</u> в книге?', en: fr(a, b) + ' of a book is <b>' + a * u + '</b> pages. <u>How many pages</u> in the book?' }[l]; }), expr: [a * u, ':', a, '·', b, '=', W], ans: W, unit: L('bet', 'стр.', 'pages') }; } },
            { type: 'problem', make: function (R) { var b = pick([2, 3, 4]), n = R(2, 8) * b; return { story: mk(function (l) { return { uz: 'Bitta idishga ' + fr(1, b) + ' kg asal sig‘adi. <b>' + n / b + '</b> kg asalga <u>nechta</u> idish kerak?', ru: 'В одну банку помещается ' + fr(1, b) + ' кг мёда. <u>Сколько</u> банок нужно для <b>' + n / b + '</b> кг?', en: 'A jar holds ' + fr(1, b) + ' kg of honey. <u>How many</u> jars for <b>' + n / b + '</b> kg?' }[l]; }), expr: [n / b, '·', b, '=', n], ans: n, unit: PCS }; } }
          ],
          quiz: [{ q: L('3/5 qism = 18. Butun?', '3/5 часть = 18. Целое?', '3/5 of it is 18. The whole?'), o: ['30', '10', '54'], a: 0 }, { q: L('2 kg ni 1/4 kg dan. Nechta?', '2 кг по 1/4 кг. Сколько?', '2 kg in 1/4 kg bags. How many?'), o: ['8', '6', '2'], a: 0 }] }
      ] },

      { id: 's3', title: L('Nisbatlar', 'Отношения', 'Ratios'), icon: '⚖️', color: 'violet', topics: [
        { id: 't9', lessons: ch(3), title: L('Nisbat va kasr', 'Отношение и дробь', 'Ratios and fractions'),
          keys: ['A : B = 3 : 5', 'A = 3/5 · B', 'A = 3/8 · jami'],
          scene: [{ obj: 'ball', n: 3, color: 'blue' }, { obj: 'ball', n: 5, color: 'yellow' }],
          explain: mk(function (l) { return { uz: 'Ko‘k va sariq sharlar 3 : 5 nisbatda bo‘lsa: ko‘klar sariqlarning ' + fr(3, 5) + ' qismi, ko‘klar hamma sharlarning ' + fr(3, 8) + ' qismi. Nisbatni kasr ko‘rinishida yozish masalalarni osonlashtiradi.', ru: 'Если синие и жёлтые шары в отношении 3 : 5, то синих ' + fr(3, 5) + ' от жёлтых и ' + fr(3, 8) + ' от всех шаров. Запись отношения дробью упрощает задачи.', en: 'If blue and yellow balls are in the ratio 3 : 5, the blue are ' + fr(3, 5) + ' of the yellow and ' + fr(3, 8) + ' of all the balls. Writing a ratio as a fraction makes problems easier.' }[l]; }),
          rule: 'a : b → a/b, a/(a + b)',
          acts: [
            { type: 'choose', title: L('Qaysi kasr?', 'Какая дробь?', 'Which fraction?'), icon: '🔵', make: function (R) { var a = R(1, 7), b = R(2, 9); while (b === a || gcd(a, b) !== 1) b = R(2, 9); return choice(L('Ko‘k : sariq = <b>' + a + ' : ' + b + '</b>. Ko‘klar <u>hamma sharlarning</u> qanday qismi?', 'Синие : жёлтые = <b>' + a + ' : ' + b + '</b>. Какую часть <u>всех шаров</u> составляют синие?', 'Blue : yellow = <b>' + a + ' : ' + b + '</b>. What fraction of <u>all the balls</u> is blue?'), [fr(a, a + b), fr(a, b), fr(b, a + b)], 0); } },
            { type: 'problem', make: function (R) { var a = R(2, 7), b = R(2, 9), u = R(3, 12); while (b === a) b = R(2, 9); return { story: L('Akaning pulining ukaning puliga nisbati <b>' + a + ' : ' + b + '</b>. Ukada <b>' + b * u * 1000 + '</b> so‘m bor. Akada <u>qancha</u>?', 'Деньги старшего и младшего брата в отношении <b>' + a + ' : ' + b + '</b>. У младшего <b>' + b * u * 1000 + '</b> сум. <u>Сколько</u> у старшего?', 'The older and younger brothers’ money is in the ratio <b>' + a + ' : ' + b + '</b>. The younger has <b>' + b * u * 1000 + '</b> sum. <u>How much</u> does the older have?'), expr: [b * u * 1000, ':', b, '·', a, '=', a * u * 1000], ans: a * u * 1000, unit: SOM }; } }
          ],
          quiz: [{ q: L('3 : 5 da birinchi miqdor jami qismning?', 'При 3 : 5 первая величина — какая часть всего?', 'In 3 : 5, what fraction of the total is the first?'), o: [fr(3, 8), fr(3, 5), fr(5, 8)], a: 0 }, { q: L('A : B = 2 : 3, B = 12. A?', 'A : B = 2 : 3, B = 12. A?', 'A : B = 2 : 3, B = 12. A?'), o: ['8', '18', '6'], a: 0 }] },

        { id: 't10', lessons: ch(3), title: L('Uch miqdor nisbati. Matnli masalalar', 'Отношение трёх величин. Задачи', 'Three-part ratios. Word problems'),
          keys: ['a : b : c', L('farq bo‘yicha', 'по разности', 'from a difference')],
          scene: [{ obj: 'cube', n: 2, color: 'green' }, { obj: 'cube', n: 3, color: 'blue' }, { obj: 'cube', n: 5, color: 'orange' }],
          explain: L('Agar ikki miqdorning <b>farqi</b> ma’lum bo‘lsa, u ulushlar farqiga to‘g‘ri keladi: 2 : 5 nisbatda farq 3 ulush. Farq 24 bo‘lsa, bir ulush 8, miqdorlar 16 va 40.',
            'Если известна <b>разность</b> двух величин, она соответствует разности частей: при 2 : 5 разность — 3 части. Если разность 24, одна часть 8, величины 16 и 40.',
            'If the <b>difference</b> between two amounts is known, it matches the difference in shares: in 2 : 5 the difference is 3 shares. If it is 24, one share is 8 and the amounts are 16 and 40.'),
          rule: L('bir ulush = farq : (b − a)', 'одна часть = разность : (b − a)', 'one share = difference : (b − a)'),
          acts: [
            { type: 'problem', title: L('Farq ma’lum', 'Известна разность', 'Difference known'), make: function (R) { var a = R(1, 5), b = R(a + 1, 9), u = R(2, 15); return { story: L('Ikki sinfdagi o‘quvchilar <b>' + a + ' : ' + b + '</b> nisbatda. Ikkinchi sinfda birinchisidan <b>' + (b - a) * u + '</b> ta ko‘p o‘quvchi bor. <u>Ikkinchi sinfda</u> nechta?', 'Ученики двух классов в отношении <b>' + a + ' : ' + b + '</b>. Во втором на <b>' + (b - a) * u + '</b> больше. <u>Сколько во втором</u>?', 'Two groups are in the ratio <b>' + a + ' : ' + b + '</b>. The second has <b>' + (b - a) * u + '</b> more. <u>How many in the second</u>?'), expr: [(b - a) * u, ':', b - a, '·', b, '=', b * u], ans: b * u, unit: L('nafar', 'учеников', 'pupils') }; } },
            { type: 'problem', title: L('Uchta miqdor', 'Три величины', 'Three amounts'), make: function (R) { var a = R(1, 4), b = R(2, 5), c = R(3, 7), u = R(2, 10) * 10, T = (a + b + c) * u; return { story: L('<b>' + fmt(T) + '</b> kg meva olma, nok va uzumga <b>' + a + ' : ' + b + ' : ' + c + '</b> nisbatda bo‘lingan. <u>Uzum</u> necha kg?', '<b>' + fmt(T) + '</b> кг фруктов: яблоки, груши и виноград в отношении <b>' + a + ' : ' + b + ' : ' + c + '</b>. <u>Сколько кг винограда</u>?', '<b>' + fmt(T) + '</b> kg of fruit is apples, pears and grapes in the ratio <b>' + a + ' : ' + b + ' : ' + c + '</b>. <u>How many kg of grapes</u>?'), expr: [T, ':', a + b + c, '·', c, '=', c * u], ans: c * u, unit: H.KG }; } }
          ],
          quiz: [{ q: L('2 : 5, farq 24. Katta miqdor?', '2 : 5, разность 24. Большая величина?', '2 : 5, difference 24. The larger amount?'), o: ['40', '16', '24'], a: 0 }, { q: L('1 : 2 : 3, jami 60. Eng kichigi?', '1 : 2 : 3, всего 60. Наименьшая?', '1 : 2 : 3, total 60. The smallest?'), o: ['10', '20', '30'], a: 0 }] },

        { id: 't11', lessons: ch(3), title: L('O‘zgaruvchan nisbatlar', 'Изменяющиеся отношения', 'Changing ratios'),
          keys: [L('oldin', 'до', 'before'), L('keyin', 'после', 'after')],
          scene: [{ obj: 'ball', n: 2, color: 'pink' }, { obj: 'ball', n: 3, color: 'cyan' }],
          explain: L('Miqdorlardan biri o‘zgarsa, nisbat ham o‘zgaradi. Qutida 6 qizil va 9 ko‘k shar (2 : 3). Yana 3 qizil qo‘shilsa: 9 : 9 = 1 : 1. Har doim avval haqiqiy sonlarni topib, so‘ng yangi nisbatni yozing.',
            'Если меняется одна из величин, меняется и отношение. В коробке 6 красных и 9 синих шаров (2 : 3). Добавили 3 красных: 9 : 9 = 1 : 1. Сначала находите настоящие количества, потом новое отношение.',
            'If one amount changes, the ratio changes too. A box has 6 red and 9 blue balls (2 : 3). Add 3 red: 9 : 9 = 1 : 1. Always find the actual numbers first, then write the new ratio.'),
          rule: L('nisbat → sonlar → o‘zgarish → yangi nisbat', 'отношение → числа → изменение → новое отношение', 'ratio → numbers → change → new ratio'),
          acts: [
            { type: 'choose', title: L('Yangi nisbat', 'Новое отношение', 'New ratio'), icon: '🔄', make: function (R) { var a, b, u, k, A, B, g, o; do { a = R(1, 5); b = R(2, 6); u = R(2, 5); k = R(1, 4) * u; A = a * u + k; B = b * u; g = gcd(A, B); o = [A / g + ' : ' + B / g, a + ' : ' + b, (a + k) + ' : ' + b]; } while (o[0] === o[1] || o[0] === o[2] || o[1] === o[2]);
              return choice(L('Qizil va ko‘k sharlar <b>' + a + ' : ' + b + '</b> nisbatda, ko‘klari <b>' + b * u + '</b> ta. Yana <b>' + k + '</b> ta qizil shar qo‘shildi. <u>Yangi nisbat</u>?', 'Красные и синие шары в отношении <b>' + a + ' : ' + b + '</b>, синих <b>' + b * u + '</b>. Добавили <b>' + k + '</b> красных. <u>Новое отношение</u>?', 'Red and blue balls are in the ratio <b>' + a + ' : ' + b + '</b>, with <b>' + b * u + '</b> blue. <b>' + k + '</b> red balls are added. <u>New ratio</u>?'), o, 0); } },
            { type: 'problem', make: function (R) { var a = R(1, 4), b = R(a + 1, 6), u = R(2, 8), k = R(1, 5); return { story: L('Anvar va Botirning markalari <b>' + a + ' : ' + b + '</b> nisbatda, jami <b>' + (a + b) * u + '</b> ta. Anvar yana <b>' + k + '</b> ta marka oldi. Endi Anvarda <u>nechta</u> marka?', 'Марки Анвара и Ботира в отношении <b>' + a + ' : ' + b + '</b>, всего <b>' + (a + b) * u + '</b>. Анвар получил ещё <b>' + k + '</b>. <u>Сколько</u> теперь у Анвара?', 'Anvar’s and Botir’s stamps are in the ratio <b>' + a + ' : ' + b + '</b>, <b>' + (a + b) * u + '</b> in all. Anvar gets <b>' + k + '</b> more. <u>How many</u> does Anvar have now?'), expr: [(a + b) * u, ':', a + b, '·', a, '+', k, '=', a * u + k], ans: a * u + k, unit: PCS }; } }
          ],
          quiz: [{ q: L('6 qizil, 9 ko‘k; +3 qizil. Nisbat?', '6 красных, 9 синих; +3 красных. Отношение?', '6 red, 9 blue; +3 red. Ratio?'), o: ['1 : 1', '2 : 3', '3 : 2'], a: 0 }, { q: L('2 : 3, jami 20. Birinchisi?', '2 : 3, всего 20. Первая?', '2 : 3, total 20. The first?'), o: ['8', '12', '10'], a: 0 }] }
      ] },

      { id: 's4', title: L('Foizlar', 'Проценты', 'Percentages'), icon: '💯', color: 'green', topics: [
        { id: 't12', lessons: ch(4), title: L('Foizi bo‘yicha sonning o‘zini topish', 'Нахождение числа по его проценту', 'Finding a number from its percentage'),
          keys: ['p% → y', 'x = y : p · 100'],
          scene: [{ obj: 'flat', n: 1, color: 'green' }],
          explain: L('Sonning 20% i 15 ga teng. Son nechaga teng? 1% — 15 : 20 = 0,75, 100% — 0,75 · 100 = 75. Qisqasi: x = y : p · 100.',
            '20% числа равны 15. Чему равно число? 1% — 15 : 20 = 0,75, 100% — 0,75 · 100 = 75. Кратко: x = y : p · 100.',
            '20% of a number is 15. What is the number? 1% is 15 : 20 = 0.75, so 100% is 0.75 · 100 = 75. In short: x = y : p · 100.'),
          rule: 'x = y : p · 100',
          acts: [
            { type: 'drill', n: 6, make: function (R) { var p = pick([5, 10, 20, 25, 40, 50, 75]), x = R(1, 40) * 20; return { q: mk(function (l) { return { uz: '? ning ' + p + '% i = ' + x * p / 100, ru: p + '% от ? = ' + x * p / 100, en: p + '% of ? = ' + x * p / 100 }[l]; }), a: x }; } },
            { type: 'problem', make: function (R) { var p = pick([10, 20, 25, 40]), x = R(2, 20) * 20, y = x * p / 100; return { story: L('Sayohatchi yo‘lning <b>' + p + '%</b> ini, ya’ni <b>' + y + '</b> km ni bosib o‘tdi. Yo‘lning <u>umumiy uzunligi</u>?', 'Путешественник прошёл <b>' + p + '%</b> пути, то есть <b>' + y + '</b> км. <u>Длина всего пути</u>?', 'A traveller covered <b>' + p + '%</b> of the route, that is <b>' + y + '</b> km. <u>Total length</u>?'), expr: [y, ':', p, '·', 100, '=', x], ans: x, unit: L('km', 'км', 'km') }; } }
          ],
          quiz: [{ q: L('20% i 15. Son?', '20% числа = 15. Число?', '20% of it is 15. The number?'), o: ['75', '3', '300'], a: 0 }, { q: L('50% i 40. Son?', '50% = 40. Число?', '50% of it is 40. The number?'), o: ['80', '20', '90'], a: 0 }] },

        { id: 't13', lessons: ch(4), title: L('O‘sish va kamayish foizi', 'Процент увеличения и уменьшения', 'Percentage increase and decrease'),
          keys: [L('o‘zgarish : boshlang‘ich · 100', 'изменение : начальное · 100', 'change : original · 100')],
          scene: [{ obj: 'drone', n: 1, color: 'green' }, { obj: 'medal', n: 1, color: 'yellow' }],
          explain: L('Narx 80 000 dan 100 000 so‘mga oshdi. O‘zgarish 20 000. O‘sish foizi = 20 000 : 80 000 · 100 = 25%. Har doim <b>boshlang‘ich</b> qiymatga bo‘lamiz!',
            'Цена выросла с 80 000 до 100 000 сум. Изменение 20 000. Процент роста = 20 000 : 80 000 · 100 = 25%. Делим всегда на <b>начальное</b> значение!',
            'A price rose from 80 000 to 100 000 sum — a change of 20 000. Percentage increase = 20 000 : 80 000 · 100 = 25%. Always divide by the <b>original</b> value!'),
          rule: L('% = o‘zgarish : boshlang‘ich · 100', '% = изменение : начальное · 100', '% = change : original · 100'),
          acts: [
            { type: 'problem', title: L('O‘sish foizi', 'Процент роста', 'Increase'), make: function (R) { var a = R(1, 20) * 20, p = pick([5, 10, 15, 20, 25, 50]), b = a + a * p / 100; return { story: L('Bog‘dagi daraxtlar soni <b>' + a + '</b> tadan <b>' + b + '</b> taga ko‘paydi. <u>Necha foizga</u> ko‘paydi?', 'Число деревьев в саду выросло с <b>' + a + '</b> до <b>' + b + '</b>. <u>На сколько процентов</u>?', 'The trees in an orchard went from <b>' + a + '</b> to <b>' + b + '</b>. <u>By what percent</u>?'), expr: [b, '−', a, ':', a, '·', 100, '=', p], ans: p, unit: '%' }; } },
            { type: 'problem', title: L('Kamayish foizi', 'Процент уменьшения', 'Decrease'), make: function (R) { var a = R(1, 20) * 20000, p = pick([10, 20, 25, 30, 40]), b = a - a * p / 100; return { story: L('Velosiped narxi <b>' + fmt(a) + '</b> so‘mdan <b>' + fmt(b) + '</b> so‘mga tushdi. <u>Necha foizga</u> arzonladi?', 'Цена велосипеда снизилась с <b>' + fmt(a) + '</b> до <b>' + fmt(b) + '</b> сум. <u>На сколько процентов</u>?', 'A bike’s price fell from <b>' + fmt(a) + '</b> to <b>' + fmt(b) + '</b> sum. <u>By what percent</u>?'), expr: [a, '−', b, ':', a, '·', 100, '=', p], ans: p, unit: '%' }; } }
          ],
          quiz: [{ q: L('80 → 100. O‘sish?', '80 → 100. Рост?', '80 → 100. Increase?'), o: ['25%', '20%', '80%'], a: 0 }, { q: L('200 → 150. Kamayish?', '200 → 150. Уменьшение?', '200 → 150. Decrease?'), o: ['25%', '50%', '33%'], a: 0 }] }
      ] },

      { id: 's5', title: L('Doira va aylana', 'Круг и окружность', 'Circles'), icon: '⭕', color: 'orange', topics: [
        { id: 't14', lessons: ch(5), title: L('Doira va aylana elementlari. Aylana uzunligi', 'Элементы круга. Длина окружности', 'Parts of a circle. Circumference'),
          keys: ['d = 2r', 'C = 2πr = πd', 'π ≈ 3,14'],
          scene: [{ obj: 'cylinder', n: 2, color: 'orange' }],
          explain: L('Markazdan aylanagacha — <b>radius</b> r, markaz orqali o‘tgan vatar — <b>diametr</b> d = 2r. Har qanday aylana uzunligi diametridan taxminan 3,14 marta uzun — bu son <b>π</b> (pi). Aylana uzunligi C = πd = 2πr.',
            'От центра до окружности — <b>радиус</b> r, хорда через центр — <b>диаметр</b> d = 2r. Длина любой окружности примерно в 3,14 раза больше диаметра — это число <b>π</b> (пи). Длина окружности C = πd = 2πr.',
            'From the centre to the edge is the <b>radius</b> r; a chord through the centre is the <b>diameter</b> d = 2r. Every circle’s circumference is about 3.14 times its diameter — that number is <b>π</b> (pi). Circumference C = πd = 2πr.'),
          rule: L('C = 2 · 3,14 · r', 'C = 2 · 3,14 · r', 'C = 2 · 3.14 · r'),
          acts: [
            { type: 'problem', title: L('Aylana uzunligi', 'Длина окружности', 'Circumference'), make: function (R) { var r = R(2, 15); return { story: mk(function (l) { return { uz: '<u>Aylana uzunligini</u> toping (π ≈ 3,14).', ru: 'Найдите <u>длину окружности</u> (π ≈ 3,14).', en: 'Find the <u>circumference</u> (π ≈ 3.14).' }[l] + circleFig(r, 'r'); }), expr: [2, '·', PI, '·', r, '=', r6(2 * PI * r)], ans: r6(2 * PI * r), unit: CM }; } },
            { type: 'drill', n: 6, make: function (R) { var r = R(2, 30); return R(0, 1) ? { q: 'r = ' + r + ';  d', a: 2 * r } : { q: 'd = ' + 2 * r + ';  r', a: r }; } }
          ],
          quiz: [{ q: 'r = 5 cm. d = ?', o: ['10', L('2,5', '2,5', '2.5'), '25'], a: 0 }, { q: L('d = 10, π ≈ 3,14. C = ?', 'd = 10, π ≈ 3,14. C = ?', 'd = 10, π ≈ 3.14. C = ?'), o: [L('31,4', '31,4', '31.4'), L('62,8', '62,8', '62.8'), L('314', '314', '314')], a: 0 }] },

        { id: 't15', lessons: ch(5), title: L('Yarim va chorak doira perimetri', 'Периметр полукруга и четверти круга', 'Perimeter of semicircles and quarter circles'),
          keys: [L('yoy + diametr', 'дуга + диаметр', 'arc + diameter'), L('yoy + 2 radius', 'дуга + 2 радиуса', 'arc + 2 radii')],
          scene: [{ obj: 'cone', n: 1, color: 'pink' }],
          explain: L('Yarim doira perimetri = yarim aylana + diametr = πr + 2r. Chorak doira perimetri = aylananing to‘rtdan biri + ikki radius = 2πr : 4 + 2r. To‘g‘ri chiziqli qismlarni unutmang!',
            'Периметр полукруга = половина окружности + диаметр = πr + 2r. Периметр четверти круга = четверть окружности + два радиуса = 2πr : 4 + 2r. Не забывайте прямые части!',
            'A semicircle’s perimeter = half the circumference + the diameter = πr + 2r. A quarter circle’s = a quarter of the circumference + two radii = 2πr : 4 + 2r. Don’t forget the straight edges!'),
          rule: L('yarim: πr + 2r · chorak: πr : 2 + 2r', 'полукруг: πr + 2r · четверть: πr : 2 + 2r', 'semi: πr + 2r · quarter: πr : 2 + 2r'),
          acts: [
            { type: 'problem', title: L('Yarim doira', 'Полукруг', 'Semicircle'), make: function (R) { var r = R(2, 12), arc = r6(PI * r); return { story: mk(function (l) { return { uz: 'Yarim doira <u>perimetrini</u> toping (π ≈ 3,14). Yoy uzunligi: ' + H.dec(arc, l) + ' cm.', ru: 'Найдите <u>периметр</u> полукруга (π ≈ 3,14). Длина дуги: ' + H.dec(arc, l) + ' см.', en: 'Find the semicircle’s <u>perimeter</u> (π ≈ 3.14). Arc length: ' + H.dec(arc, l) + ' cm.' }[l] + semiFig(r); }), expr: [arc, '+', 2 * r, '=', r6(arc + 2 * r)], ans: r6(arc + 2 * r), unit: CM }; } },
            { type: 'problem', title: L('Chorak doira', 'Четверть круга', 'Quarter circle'), make: function (R) { var r = R(1, 10) * 2, arc = r6(2 * PI * r / 4); return { story: mk(function (l) { return { uz: 'Chorak doira <u>perimetrini</u> toping. Yoy: ' + H.dec(arc, l) + ' cm.', ru: 'Найдите <u>периметр</u> четверти круга. Дуга: ' + H.dec(arc, l) + ' см.', en: 'Find the quarter circle’s <u>perimeter</u>. Arc: ' + H.dec(arc, l) + ' cm.' }[l] + semiFig(r, true); }), expr: [arc, '+', 2 * r, '=', r6(arc + 2 * r)], ans: r6(arc + 2 * r), unit: CM }; } }
          ],
          quiz: [{ q: L('r = 10. Yarim doira perimetri?', 'r = 10. Периметр полукруга?', 'r = 10. Semicircle perimeter?'), o: [L('51,4', '51,4', '51.4'), L('31,4', '31,4', '31.4'), L('62,8', '62,8', '62.8')], a: 0 }, { q: L('Chorak doirada nechta to‘g‘ri chiziqli qism?', 'Сколько прямых частей у четверти круга?', 'Straight edges on a quarter circle?'), o: ['2', '1', '0'], a: 0 }] },

        { id: 't16', lessons: ch(5), title: L('Doiraning yuzi. Yarim va chorak doira yuzi', 'Площадь круга, полукруга и четверти', 'Area of circles, semicircles and quarters'),
          keys: ['S = πr²', L('yarmi: πr² : 2', 'половина: πr² : 2', 'half: πr² : 2')],
          scene: [{ obj: 'cylinder', n: 1, color: 'cyan' }],
          explain: L('Doira yuzi S = πr² = π · r · r. r = 10 cm bo‘lsa, S = 3,14 · 10 · 10 = 314 cm². Yarim doira yuzi — uning yarmi, chorak doira — to‘rtdan biri.',
            'Площадь круга S = πr² = π · r · r. При r = 10 см S = 3,14 · 10 · 10 = 314 см². Площадь полукруга — половина, четверти круга — четверть.',
            'A circle’s area is S = πr² = π · r · r. For r = 10 cm, S = 3.14 · 10 · 10 = 314 cm². A semicircle has half that area, a quarter circle a quarter.'),
          rule: L('S = 3,14 · r · r', 'S = 3,14 · r · r', 'S = 3.14 · r · r'),
          acts: [
            { type: 'problem', make: function (R) { var r = R(1, 12); return { story: mk(function (l) { return { uz: 'Doira <u>yuzini</u> toping (π ≈ 3,14).', ru: 'Найдите <u>площадь</u> круга (π ≈ 3,14).', en: 'Find the circle’s <u>area</u> (π ≈ 3.14).' }[l] + circleFig(r, 'r'); }), expr: [PI, '·', r, '·', r, '=', r6(PI * r * r)], ans: r6(PI * r * r), unit: CM2 }; } },
            { type: 'problem', title: L('Yarim doira yuzi', 'Площадь полукруга', 'Semicircle area'), make: function (R) { var r = R(1, 10) * 2; return { story: mk(function (l) { return { uz: 'Yarim doira <u>yuzini</u> toping (π ≈ 3,14).', ru: 'Найдите <u>площадь</u> полукруга (π ≈ 3,14).', en: 'Find the semicircle’s <u>area</u> (π ≈ 3.14).' }[l] + semiFig(r); }), expr: [PI, '·', r, '·', r, ':', 2, '=', r6(PI * r * r / 2)], ans: r6(PI * r * r / 2), unit: CM2 }; } }
          ],
          quiz: [{ q: L('r = 10. S = ?', 'r = 10. S = ?', 'r = 10. S = ?'), o: ['314', L('31,4', '31,4', '31.4'), L('62,8', '62,8', '62.8')], a: 0 }, { q: L('r = 2. Chorak doira yuzi?', 'r = 2. Площадь четверти круга?', 'r = 2. Quarter circle area?'), o: [L('3,14', '3,14', '3.14'), L('12,56', '12,56', '12.56'), L('6,28', '6,28', '6.28')], a: 0 }] },

        { id: 't17', lessons: ch(5), title: L('Murakkab shakllarning yuzi va perimetri', 'Площадь и периметр составных фигур', 'Area and perimeter of composite shapes'),
          keys: [L('kvadrat + yarim doira', 'квадрат + полукруг', 'square + semicircle')],
          scene: [{ obj: 'box', n: 1, color: 'blue' }, { obj: 'cylinder', n: 1, color: 'orange' }],
          explain: L('Murakkab shaklni tanish bo‘laklarga ajratamiz: masalan, kvadrat va uning tomoniga yopishgan yarim doira. Yuz = kvadrat yuzi + yarim doira yuzi. Perimetrda faqat <b>tashqi</b> chegarani hisoblaymiz!',
            'Составную фигуру делим на знакомые части: например, квадрат и полукруг на его стороне. Площадь = площадь квадрата + площадь полукруга. В периметр входит только <b>внешняя</b> граница!',
            'Split a composite shape into familiar parts: e.g. a square with a semicircle on one side. Area = square + semicircle. The perimeter counts only the <b>outside</b> edge!'),
          rule: 'S = a² + πr² : 2',
          acts: [
            { type: 'problem', title: L('Yuz', 'Площадь', 'Area'), make: function (R) { var r = R(1, 6), a = 2 * r, s = r6(PI * r * r / 2); return { story: mk(function (l) { return { uz: 'Tomoni <b>' + a + '</b> cm bo‘lgan kvadratning bir tomoniga yarim doira yopishtirilgan. Yarim doira yuzi ' + H.dec(s, l) + ' cm². <u>Shakl yuzi</u>?', ru: 'К стороне квадрата со стороной <b>' + a + '</b> см приставлен полукруг. Площадь полукруга ' + H.dec(s, l) + ' см². <u>Площадь фигуры</u>?', en: 'A semicircle is attached to one side of a square with side <b>' + a + '</b> cm. The semicircle’s area is ' + H.dec(s, l) + ' cm². <u>Area of the shape</u>?' }[l]; }), expr: [a * a, '+', s, '=', r6(a * a + s)], ans: r6(a * a + s), unit: CM2 }; } },
            { type: 'problem', title: L('Perimetr', 'Периметр', 'Perimeter'), make: function (R) { var r = R(1, 6), a = 2 * r, arc = r6(PI * r); return { story: mk(function (l) { return { uz: 'Xuddi shu shakl: kvadrat tomoni <b>' + a + '</b> cm, yarim aylana ' + H.dec(arc, l) + ' cm. <u>Perimetri</u>? (Kvadratning 3 tomoni tashqarida.)', ru: 'Та же фигура: сторона квадрата <b>' + a + '</b> см, полуокружность ' + H.dec(arc, l) + ' см. <u>Периметр</u>? (Снаружи 3 стороны квадрата.)', en: 'The same shape: square side <b>' + a + '</b> cm, semicircle arc ' + H.dec(arc, l) + ' cm. <u>Perimeter</u>? (3 sides of the square are outside.)' }[l]; }), expr: [3, '·', a, '+', arc, '=', r6(3 * a + arc)], ans: r6(3 * a + arc), unit: CM }; } }
          ],
          quiz: [{ q: L('Kvadrat 4 × 4 + yarim doira (r = 2). S ≈ ?', 'Квадрат 4 × 4 + полукруг (r = 2). S ≈ ?', 'A 4 × 4 square + semicircle (r = 2). S ≈ ?'), o: [L('22,28', '22,28', '22.28'), L('28,56', '28,56', '28.56'), '16'], a: 0 }, { q: L('Perimetrga qaysi chegara kiradi?', 'Какая граница входит в периметр?', 'Which edge counts in the perimeter?'), o: [L('faqat tashqi', 'только внешняя', 'only the outside'), L('ichki ham', 'и внутренняя', 'the inside too'), L('faqat ichki', 'только внутренняя', 'only the inside')], a: 0 }] }
      ] },

      { id: 's6', title: L('Geometrik shakllardagi burchaklar', 'Углы в геометрических фигурах', 'Angles in shapes'), icon: '📐', color: 'cyan', topics: [
        { id: 't18', lessons: ch(6), title: L('Shakllardagi noma’lum burchaklarni topish', 'Нахождение неизвестных углов в фигурах', 'Finding missing angles in shapes'),
          keys: ['180°', '360°', L('tashqi burchak', 'внешний угол', 'exterior angle')],
          scene: [{ obj: 'pyramid', n: 2, color: 'cyan' }],
          explain: L('Eslang: uchburchak burchaklari yig‘indisi 180°, to‘rtburchak — 360°, to‘g‘ri chiziqda — 180°. Uchburchakning <b>tashqi burchagi</b> unga qo‘shni bo‘lmagan ikki ichki burchak yig‘indisiga teng.',
            'Вспомним: сумма углов треугольника 180°, четырёхугольника 360°, на прямой — 180°. <b>Внешний угол</b> треугольника равен сумме двух внутренних углов, не смежных с ним.',
            'Remember: a triangle’s angles add to 180°, a quadrilateral’s to 360°, angles on a line to 180°. A triangle’s <b>exterior angle</b> equals the sum of the two interior angles not next to it.'),
          rule: L('tashqi burchak = A + C', 'внешний угол = A + C', 'exterior angle = A + C'),
          acts: [
            { type: 'problem', title: L('Tashqi burchak', 'Внешний угол', 'Exterior angle'), make: function (R) { var A = R(3, 8) * 10, Cc = R(3, 8) * 10; return { story: mk(function (l) { return { uz: 'Uchburchakning <u>tashqi burchagini</u> (?) toping.', ru: 'Найдите <u>внешний угол</u> (?) треугольника.', en: 'Find the triangle’s <u>exterior angle</u> (?).' }[l] + triFig(A + '°', '?', Cc + '°', true); }), expr: [A, '+', Cc, '=', A + Cc], ans: A + Cc, unit: DEG }; } },
            { type: 'problem', title: L('Ichki burchak', 'Внутренний угол', 'Interior angle'), make: function (R) { var A = R(3, 7) * 10, B = R(3, 7) * 10; return { story: mk(function (l) { return { uz: '<u>?</u> burchakni toping.', ru: 'Найдите угол <u>?</u>.', en: 'Find the angle <u>?</u>.' }[l] + triFig(A + '°', B + '°', '?'); }), expr: [180, '−', A, '−', B, '=', 180 - A - B], ans: 180 - A - B, unit: DEG }; } },
            { type: 'drill', n: 6, make: function (R) { var a = R(6, 12) * 10, b = R(6, 12) * 10, c = R(5, 10) * 10; return R(0, 1) ? { q: a + '° + ' + b + '° + ' + c + '° + ? = 360°', a: 360 - a - b - c } : { q: mk(function (l) { return { uz: 'Teng yonli, uchidagi ' + (a - 40) + '°; asosdagi', ru: 'Равнобедренный, при вершине ' + (a - 40) + '°; при основании', en: 'Isosceles, top ' + (a - 40) + '°; base angle' }[l]; }), a: (180 - (a - 40)) / 2 }; } }
          ],
          quiz: [{ q: L('A = 50°, C = 60°. Tashqi burchak?', 'A = 50°, C = 60°. Внешний угол?', 'A = 50°, C = 60°. Exterior angle?'), o: ['110°', '70°', '130°'], a: 0 }, { q: '80° + 100° + 90° + ? = 360°', o: ['90°', '80°', '100°'], a: 0 }] }
      ] }
    ]
  };
  C.addPart(part1);
})(this);
