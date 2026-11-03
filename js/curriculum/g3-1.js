// Nuvemath — 3-sinf, I qism (manba: I.V. Repyova, «Matematika. 3-sinf. I qism», Toshkent, 2023).
// Mavzular tartibi va nomlari darslikdan olingan; tushuntirishlar, topshiriqlar va rasmlar Nuvemath uchun qayta yozilgan.
(function (root) {
  'use strict';
  var C = root.NMCurriculum, H = C.H, L = H.L, mk = H.mk, PCS = H.PCS, choice = H.choice, pick = H.pick;
  var SOM = L('so‘m', 'сум', 'sum'), SEC = L('s', 'с', 's'), MIN = L('min', 'мин', 'min');
  function fmt(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' '); }
  function blocks(n) { var h = Math.floor(n / 100), t = Math.floor(n / 10) % 10, u = n % 10, g = []; if (h) g.push({ obj: 'flat', n: h, color: 'green' }); if (t) g.push({ obj: 'rod', n: t, color: 'orange' }); if (u) g.push({ obj: 'unit', n: u, color: 'blue' }); return g; }

  var part1 = {
    grade: 3, part: 1, edition: L('2023-yil nashri', 'Издание 2023 г.', '2023 edition'),
    title: L('Ko‘p xonali sonlar va ko‘paytirish', 'Многозначные числа и умножение', 'Large numbers and multiplication'),
    book: L('I.V. Repyova. Matematika, 3-sinf, I qism (Toshkent, 2023)', 'И.В. Репьева. Математика, 3 класс, часть I (Ташкент, 2023)', 'I.V. Repyova. Mathematics, Grade 3, Part I (Tashkent, 2023)'),
    intro: L('Uchinchi sinfda sonlar mingdan ham kattalashadi! Ko‘p xonali sonlarni o‘qish, yozish, qo‘shish va ayirishni, ko‘p xonali sonlarni ko‘paytirishni hamda narx va vaqtga doir masalalarni o‘rganamiz.',
      'В третьем классе числа становятся больше тысячи! Научимся читать, писать, складывать и вычитать многозначные числа, умножать их и решать задачи на цену и время.',
      'In Grade 3 numbers grow beyond a thousand! We learn to read, write, add, subtract and multiply large numbers and solve problems about price and time.'),
    sections: [
      { id: 's1', title: L('Takrorlash', 'Повторение', 'Review'), icon: '🔁', color: 'blue', topics: [
        { id: 't1', lessons: L('1–3-darslar', 'Уроки 1–3', 'Lessons 1–3'), title: L('Takrorlash: sonlar va uzunlik', 'Повторение: числа и длина', 'Review: numbers and length'),
          keys: [L('uch xonali son', 'трёхзначное число', 'three-digit number'), 'm, dm, cm, mm'],
          scene: [{ obj: 'flat', n: 2, color: 'green' }, { obj: 'rod', n: 3, color: 'orange' }, { obj: 'unit', n: 6, color: 'blue' }],
          explain: L('Eslaymiz: 236 = 2 yuzlik + 3 o‘nlik + 6 birlik. Uzunlik birliklari: 1 m = 10 dm = 100 cm, 1 cm = 10 mm.',
            'Вспомним: 236 = 2 сотни + 3 десятка + 6 единиц. Единицы длины: 1 м = 10 дм = 100 см, 1 см = 10 мм.',
            'Let’s remember: 236 = 2 hundreds + 3 tens + 6 ones. Length units: 1 m = 10 dm = 100 cm, 1 cm = 10 mm.'),
          rule: '236 = 200 + 30 + 6 · 1 m = 100 cm',
          acts: [
            { type: 'count3d', title: L('3D: sonni o‘qing', '3D: прочитайте число', '3D: read the number'), make: function (R) { var n = R(1, 3) * 100 + R(1, 6) * 10 + R(1, 8); return { groups: blocks(n), perRow: 3, story: L('<b>Qaysi son</b>?', '<b>Какое число</b>?', '<b>Which number</b>?'), ans: n, unit: '' }; } },
            { type: 'drill', n: 6, make: function (R) { var m = R(1, 9), c = R(1, 99), x = R(100, 499), y = R(100, 400); return pick([{ q: mk(function (l) { return l === 'ru' ? m + ' м ' + c + ' см = ? см' : m + ' m ' + c + ' cm = ? cm'; }), a: m * 100 + c }, { q: x + ' + ' + y, a: x + y }, { q: (x + y) + ' − ' + y, a: x }]); } }
          ],
          quiz: [{ q: '400 + 50 + 7 = ?', o: ['457', '4507', '475'], a: 0 }, { q: L('2 m = ? cm', '2 м = ? см', '2 m = ? cm'), o: ['200', '20', '2000'], a: 0 }] },

        { id: 't2', lessons: L('4–7-darslar', 'Уроки 4–7', 'Lessons 4–7'), title: L('Takrorlash: ko‘paytirish va uning xossalari', 'Повторение: умножение и его свойства', 'Review: multiplication and its properties'),
          keys: [L('jadval', 'таблица', 'table'), 'a · 0 = 0', 'a · 1 = a', '(a + b) · c'],
          scene: [{ obj: 'cube', n: 4, color: 'violet' }, { obj: 'cube', n: 4, color: 'pink' }, { obj: 'cube', n: 4, color: 'cyan' }],
          explain: L('Ko‘paytirish jadvalini eslaymiz. Nol va bir xossalari: a · 0 = 0, a · 1 = a. Nol bilan tugaydigan sonlar: 40 · 3 = 120. Taqsimot xossasi: (10 + 4) · 3 = 30 + 12 = 42.',
            'Вспомним таблицу умножения. Свойства нуля и единицы: a · 0 = 0, a · 1 = a. Числа с нулём на конце: 40 · 3 = 120. Распределительное свойство: (10 + 4) · 3 = 30 + 12 = 42.',
            'Remember the times tables. Zero and one: a · 0 = 0, a · 1 = a. Numbers ending in zero: 40 · 3 = 120. Distributive property: (10 + 4) · 3 = 30 + 12 = 42.'),
          rule: '(a + b) · c = a · c + b · c',
          acts: [
            { type: 'drill', n: 10, make: function (R) { var a = R(2, 9), b = R(2, 9); return pick([{ q: a + ' · ' + b, a: a * b }, { q: (a * b) + ' : ' + a, a: b }, { q: (a * 10) + ' · ' + b, a: a * b * 10 }, { q: a + ' · 0', a: 0 }, { q: '(10 + ' + a + ') · ' + b, a: (10 + a) * b }]); } },
            { type: 'choose', title: L('Xossani tanlang', 'Выберите свойство', 'Pick the property'), icon: '✖️', make: function (R) { var a = R(2, 9), b = R(2, 9), c = R(2, 9);
              return choice('<span class="kd-big">(' + a + ' + ' + b + ') · ' + c + ' = ?</span>', [a + ' · ' + c + ' + ' + b + ' · ' + c, a + ' + ' + b + ' · ' + c, a + ' · ' + b + ' + ' + c], 0); } }
          ],
          quiz: [{ q: '7 · 8 = ?', o: ['56', '54', '15'], a: 0 }, { q: '60 · 4 = ?', o: ['240', '24', '64'], a: 0 }, { q: '(10 + 3) · 5 = ?', o: ['65', '18', '53'], a: 0 }] },

        { id: 't3', lessons: L('8–9-darslar', 'Уроки 8–9', 'Lessons 8–9'), title: L('Takrorlash: soat va to‘g‘ri to‘rtburchak', 'Повторение: время и прямоугольник', 'Review: time and rectangles'),
          keys: ['1 soat = 60 min', 'P = 2 · (a + b)', 'S = a · b'],
          scene: [{ obj: 'box', n: 2, color: 'orange' }],
          explain: L('Soatda 60 minut bor. To‘g‘ri to‘rtburchak perimetri P = 2 · (a + b), yuzi S = a · b.',
            'В часе 60 минут. Периметр прямоугольника P = 2 · (a + b), площадь S = a · b.',
            'An hour has 60 minutes. A rectangle’s perimeter is P = 2 · (a + b) and its area is S = a · b.'),
          rule: 'P = 2 · (a + b) · S = a · b',
          acts: [
            { type: 'clock', make: function (R) { return { h: R(1, 12), m: R(0, 11) * 5 }; } },
            { type: 'grid', make: function (R) { var a = R(3, 9), b = R(2, 6), per = R(0, 1); return { a: a, b: b, ask: per ? 'perimeter' : 'area', ans: per ? 2 * (a + b) : a * b, unit: per ? L('cm', 'см', 'cm') : L('cm²', 'см²', 'cm²'), story: per ? L('Har bir katak tomoni 1 cm. <b>Perimetrni</b> toping.', 'Сторона клетки — 1 см. Найдите <b>периметр</b>.', 'Each square side is 1 cm. Find the <b>perimeter</b>.') : L('Har bir katak — 1 cm². <b>Yuzni</b> toping.', 'Каждая клетка — 1 см². Найдите <b>площадь</b>.', 'Each square is 1 cm². Find the <b>area</b>.') }; } }
          ],
          quiz: [{ q: L('a = 6, b = 4. P = ?', 'a = 6, b = 4. P = ?', 'a = 6, b = 4. P = ?'), o: ['20', '24', '10'], a: 0 }, { q: L('a = 6, b = 4. S = ?', 'a = 6, b = 4. S = ?', 'a = 6, b = 4. S = ?'), o: ['24', '20', '10'], a: 0 }] }
      ] },

      { id: 's2', title: L('Ko‘p xonali sonlar', 'Многозначные числа', 'Large numbers'), icon: '🔢', color: 'green', topics: [
        { id: 't4', lessons: L('10–11-darslar', 'Уроки 10–11', 'Lessons 10–11'), title: L('Ko‘p xonali sonlar. Pozitsion sanoq sistemasi', 'Многозначные числа. Позиционная система', 'Large numbers. Place value'),
          keys: [L('sinf', 'класс', 'period'), L('xona', 'разряд', 'place'), L('minglar', 'тысячи', 'thousands')],
          scene: [{ obj: 'flat', n: 10, color: 'green' }],
          explain: L('Raqamning qiymati uning <b>o‘rniga (xonasiga)</b> bog‘liq: 3 333 sonida birinchi 3 — uch ming, oxirgisi — uch birlik. Uch xonadan iborat guruh — <b>sinf</b>: birliklar sinfi va minglar sinfi. Sahnada 10 ta yuzlik — 1 000!',
            'Значение цифры зависит от её <b>места (разряда)</b>: в числе 3 333 первая тройка — три тысячи, последняя — три единицы. Группа из трёх разрядов — <b>класс</b>: класс единиц и класс тысяч. На сцене 10 сотен — 1 000!',
            'A digit’s value depends on its <b>place</b>: in 3 333 the first 3 is three thousand and the last is three ones. A group of three places is a <b>period</b>: the ones period and the thousands period. The stage shows 10 hundreds — 1 000!'),
          rule: '45 307 = 40 000 + 5 000 + 300 + 7',
          acts: [
            { type: 'choose', title: L('Raqam qiymati', 'Значение цифры', 'Digit value'), icon: '🔢', make: function (R) { var n = R(10000, 99999), s = String(n), k = R(0, 4), dgt = +s[k]; while (dgt === 0) { n = R(10000, 99999); s = String(n); dgt = +s[k]; } var val = dgt * Math.pow(10, 4 - k);
              var wrong = [0, 1, 2, 3, 4].map(function (e) { return dgt * Math.pow(10, e); }).filter(function (x) { return x !== val; }).sort(function () { return R(0, 1) - 0.5; });
              return choice(mk(function (l) { return '<span class="kd-big">' + fmt(n) + '</span> — ' + { uz: (k + 1) + '-raqam (' + dgt + ') qiymati?', ru: 'значение ' + (k + 1) + '-й цифры (' + dgt + ')?', en: 'value of digit ' + (k + 1) + ' (' + dgt + ')?' }[l]; }), [fmt(val), fmt(wrong[0]), fmt(wrong[1])], 0); } },
            { type: 'drill', title: L('Xona qo‘shiluvchilari', 'Разрядные слагаемые', 'Expanded form'), n: 6, make: function (R) { var a = R(1, 9), b = R(0, 9), c = R(1, 9); return { q: a * 1000 + ' + ' + b * 100 + ' + ' + c, a: a * 1000 + b * 100 + c }; } }
          ],
          quiz: [{ q: L('5 024 da nechta ming?', 'Сколько тысяч в 5 024?', 'How many thousands in 5 024?'), o: ['5', '50', '24'], a: 0 }, { q: '7 000 + 300 + 9 = ?', o: ['7309', '7390', '739'], a: 0 }] },

        { id: 't5', lessons: L('12–15-darslar', 'Уроки 12–15', 'Lessons 12–15'), title: L('Ko‘p xonali sonlarni o‘qish, yozish va taqqoslash', 'Чтение, запись и сравнение многозначных чисел', 'Reading, writing and comparing large numbers'),
          keys: ['>', '<', L('xonalab taqqoslash', 'поразрядное сравнение', 'compare place by place')],
          scene: [{ obj: 'flat', n: 4, color: 'green' }, { obj: 'flat', n: 3, color: 'cyan' }],
          explain: L('Ko‘p xonali sonni o‘qishda uni o‘ngdan 3 tadan sinflarga ajratamiz: 45 307 → «45 ming 307». Taqqoslashda avval xonalar sonini, keyin chapdan boshlab raqamlarni taqqoslaymiz.',
            'Читая многозначное число, делим его справа на классы по 3 цифры: 45 307 → «45 тысяч 307». Сравнивая, смотрим сначала на количество разрядов, потом на цифры слева направо.',
            'To read a large number, split it into groups of 3 from the right: 45 307 → “45 thousand 307”. To compare, look at the number of digits first, then the digits from the left.'),
          rule: '45 307 &gt; 45 073 · 9 999 &lt; 10 000',
          acts: [
            { type: 'choose', title: L('Belgi qo‘ying', 'Поставьте знак', 'Choose the sign'), icon: '⚖️', make: function (R) { var a = R(1000, 99999), b = R(0, 1) ? a + pick([-100, 100, -10, 10, 1000, -1000, 9, -9]) : R(1000, 99999); return choice('<span class="kd-big">' + fmt(a) + ' ◻ ' + fmt(b) + '</span>', ['&gt;', '&lt;', '='], a > b ? 0 : a < b ? 1 : 2); } },
            { type: 'order', title: L('Kichigidan kattasiga', 'От меньшего к большему', 'Smallest to largest'), make: function (R) { var xs = H.distinct(R, 4, 1000, 99999).sort(function (a, b) { return a - b; }); return { story: L('Sonlarni kichigidan kattasiga bosing.', 'Нажимайте от меньшего к большему.', 'Tap from smallest to largest.'), items: xs.map(fmt), sep: '<span class="kd-arr">&lt;</span>' }; } }
          ],
          quiz: [{ q: '12 345 ◻ 12 354', o: ['<', '>', '='], a: 0 }, { q: L('Eng katta 4 xonali son?', 'Самое большое четырёхзначное?', 'The largest 4-digit number?'), o: ['9999', '1000', '9000'], a: 0 }] },

        { id: 't6', lessons: L('16–22-darslar', 'Уроки 16–22', 'Lessons 16–22'), title: L('Ko‘p xonali sonlarni qo‘shish va ayirish', 'Сложение и вычитание многозначных чисел', 'Adding and subtracting large numbers'),
          keys: [L('ustun', 'столбик', 'column'), L('xonama-xona', 'поразрядно', 'place by place')],
          scene: [{ obj: 'flat', n: 3, color: 'green' }, { obj: 'rod', n: 5, color: 'orange' }],
          explain: L('Ko‘p xonali sonlarni ustunda qo‘shamiz va ayiramiz: xonalarni bir-birining ostiga yozamiz va birliklardan boshlaymiz. O‘nliklarni o‘tkazish va «maydalash» qoidasi o‘zgarmaydi.',
            'Многозначные числа складываем и вычитаем столбиком: пишем разряды друг под другом и начинаем с единиц. Правила переноса и «размена» те же.',
            'We add and subtract large numbers in a column: line up the places and start with the ones. Carrying and borrowing work the same way.'),
          rule: '  4 568<br>+ 2 735<br>———<br>  7 303',
          acts: [
            { type: 'column', title: L('Ustunda qo‘shing', 'Сложите столбиком', 'Add in a column'), make: function (R) { var a = R(1000, 5999), b = R(1000, 3999); return { a: a, b: b, op: '+', ans: a + b }; } },
            { type: 'column', title: L('Ustunda ayiring', 'Вычтите столбиком', 'Subtract in a column'), make: function (R) { var a = R(3000, 9999), b = R(1000, a - 100); return { a: a, b: b, op: '-', ans: a - b }; } },
            { type: 'problem', make: H.part({ c: [2000, 9000], a: [500, 1900], labels: [L('sotildi', 'продали', 'sold'), L('qoldi', 'осталось', 'left')], cond: [L('Sotildi', 'Продали', 'Sold'), L('Qoldi', 'Осталось', 'Left')], u: H.KG,
              text: function (c, a) { return L('Omborda <b>' + c + '</b> kg un bor edi. <b>' + a + '</b> kg sotildi. <u>Necha kg qoldi</u>?', 'На складе было <b>' + c + '</b> кг муки. Продали <b>' + a + '</b> кг. <u>Сколько кг осталось</u>?', 'A warehouse had <b>' + c + '</b> kg of flour. <b>' + a + '</b> kg was sold. <u>How many kg are left</u>?'); } }) }
          ],
          quiz: [{ q: '3 450 + 1 270 = ?', o: ['4720', '4620', '2180'], a: 0 }, { q: '8 000 − 2 500 = ?', o: ['5500', '6500', '10500'], a: 0 }] }
      ] },

      { id: 's3', title: L('Ko‘p xonali sonlarni ko‘paytirish', 'Умножение многозначных чисел', 'Multiplying large numbers'), icon: '✖️', color: 'violet', topics: [
        { id: 't7', lessons: L('23–25-darslar', 'Уроки 23–25', 'Lessons 23–25'), title: L('10, 100, 1000 ga ko‘paytirish va bo‘lish. Yaxlit sonlar', 'Умножение и деление на 10, 100, 1000. Круглые числа', 'Multiplying and dividing by 10, 100, 1000'),
          keys: ['· 10', '· 100', '· 1000', ': 10'],
          scene: [{ obj: 'rod', n: 6, color: 'orange' }],
          explain: L('10, 100, 1000 ga ko‘paytirganda sonning oxiriga mos ravishda 1, 2, 3 ta 0 yoziladi; bo‘lganda esa shuncha 0 olib tashlanadi. 300 · 20 = 3 · 2 · 1000 = 6 000.',
            'При умножении на 10, 100, 1000 к числу приписывают 1, 2, 3 нуля; при делении столько же нулей отбрасывают. 300 · 20 = 3 · 2 · 1000 = 6 000.',
            'Multiplying by 10, 100, 1000 adds 1, 2 or 3 zeros; dividing removes that many zeros. 300 · 20 = 3 · 2 · 1000 = 6 000.'),
          rule: '45 · 100 = 4 500 · 7 000 : 10 = 700',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var a = R(2, 99), k = pick([10, 100, 1000]), b = R(2, 9), c = R(2, 9); return pick([{ q: a + ' · ' + k, a: a * k }, { q: (a * k) + ' : ' + k, a: a }, { q: (b * 100) + ' · ' + c * 10, a: b * c * 1000 }, { q: (b * c * 100) + ' : ' + b, a: c * 100 }]); } },
            { type: 'problem', make: function (R) { var a = R(2, 9), k = pick([10, 100]); return { story: L('Bir qutida <b>' + k + '</b> ta qalam bor. <b>' + a + '</b> ta qutida <u>nechta</u> qalam?', 'В коробке <b>' + k + '</b> карандашей. <u>Сколько</u> карандашей в <b>' + a + '</b> коробках?', 'A box holds <b>' + k + '</b> pencils. <u>How many</u> pencils in <b>' + a + '</b> boxes?'), expr: [k, '·', a, '=', k * a], ans: k * a, unit: H.PCS }; } }
          ],
          quiz: [{ q: '36 · 100 = ?', o: ['3600', '360', '36000'], a: 0 }, { q: '8 000 : 100 = ?', o: ['80', '800', '8'], a: 0 }, { q: '40 · 50 = ?', o: ['2000', '200', '90'], a: 0 }] },

        { id: 't8', lessons: L('26–29-darslar', 'Уроки 26–29', 'Lessons 26–29'), title: L('Ko‘p xonali sonni bir xonali songa ko‘paytirish', 'Умножение многозначного числа на однозначное', 'Multiplying by a one-digit number'),
          keys: [L('ustunda ko‘paytirish', 'умножение столбиком', 'column multiplication')],
          scene: [{ obj: 'rod', n: 4, color: 'orange' }, { obj: 'unit', n: 7, color: 'blue' }],
          explain: L('47 · 3: birliklarni ko‘paytiramiz 7 · 3 = 21 → 1 ni yozamiz, 2 o‘nlikni yodda tutamiz. O‘nliklar: 4 · 3 = 12, + 2 = 14. Javob: <b>141</b>. Ko‘p xonali sonlarda ham shunday — o‘ngdan chapga.',
            '47 · 3: умножаем единицы 7 · 3 = 21 → пишем 1, 2 десятка запоминаем. Десятки: 4 · 3 = 12, + 2 = 14. Ответ: <b>141</b>. С многозначными — так же, справа налево.',
            '47 · 3: multiply the ones 7 · 3 = 21 → write 1, carry 2 tens. Tens: 4 · 3 = 12, + 2 = 14. Answer: <b>141</b>. Larger numbers work the same, right to left.'),
          rule: '47 · 3 = 40 · 3 + 7 · 3 = 120 + 21 = 141',
          acts: [
            { type: 'drill', title: L('Ko‘paytiring', 'Умножьте', 'Multiply'), n: 8, make: function (R) { var a = pick([R(12, 99), R(100, 999), R(1000, 2999)]), k = R(2, 9); return { q: a + ' · ' + k, a: a * k }; } },
            { type: 'problem', make: function (R) { var a = R(120, 480), k = R(3, 8); return { story: L('Bir kunda zavod <b>' + a + '</b> ta velosiped ishlab chiqaradi. <b>' + k + '</b> kunda <u>nechta</u>?', 'Завод выпускает <b>' + a + '</b> велосипедов в день. <u>Сколько</u> за <b>' + k + '</b> дней?', 'A factory makes <b>' + a + '</b> bicycles a day. <u>How many</u> in <b>' + k + '</b> days?'), expr: [a, '·', k, '=', a * k], ans: a * k, unit: PCS }; } }
          ],
          quiz: [{ q: '23 · 4 = ?', o: ['92', '82', '27'], a: 0 }, { q: '215 · 3 = ?', o: ['645', '635', '218'], a: 0 }] },

        { id: 't9', lessons: L('30–32-darslar', 'Уроки 30–32', 'Lessons 30–32'), title: L('Ikki va uch xonali songa ko‘paytirish', 'Умножение на двузначное и трёхзначное число', 'Multiplying by two- and three-digit numbers'),
          keys: [L('to‘liqsiz ko‘paytmalar', 'неполные произведения', 'partial products')],
          scene: [{ obj: 'cube', n: 4, color: 'blue' }, { obj: 'cube', n: 4, color: 'blue' }],
          explain: L('34 · 25 = 34 · 20 + 34 · 5 = 680 + 170 = <b>850</b>. Har bir xona uchun alohida ko‘paytma (to‘liqsiz ko‘paytma) topamiz va ularni qo‘shamiz.',
            '34 · 25 = 34 · 20 + 34 · 5 = 680 + 170 = <b>850</b>. Для каждого разряда находим своё (неполное) произведение и складываем их.',
            '34 · 25 = 34 · 20 + 34 · 5 = 680 + 170 = <b>850</b>. Find a partial product for each place and add them up.'),
          rule: 'a · 25 = a · 20 + a · 5',
          acts: [
            { type: 'drill', n: 6, make: function (R) { var a = R(11, 99), b = R(11, 49); return { q: a + ' · ' + b, a: a * b }; } },
            { type: 'chain', title: L('To‘liqsiz ko‘paytmalar', 'Неполные произведения', 'Partial products'), make: function (R) { var a = R(12, 49), t = R(1, 4), u = R(2, 9); return { start: a * t * 10, ops: [['+', a * u]] }; } }
          ],
          quiz: [{ q: '12 · 15 = ?', o: ['180', '170', '27'], a: 0 }, { q: '25 · 24 = ?', o: ['600', '500', '49'], a: 0 }] },

        { id: 't10', lessons: L('33–34-darslar', 'Уроки 33–34', 'Lessons 33–34'), title: L('Yaxlit va o‘rtasida nol bo‘lgan sonlarni ko‘paytirish', 'Умножение круглых чисел и чисел с нулём в середине', 'Multiplying round numbers and numbers with a middle zero'),
          keys: ['230 · 40', '305 · 6'],
          scene: [{ obj: 'flat', n: 3, color: 'green' }, { obj: 'unit', n: 5, color: 'blue' }],
          explain: L('230 · 40: nollarni chetga qo‘yib 23 · 4 = 92 ni topamiz va ikkita 0 qo‘shamiz: <b>9 200</b>. 305 · 6: o‘rtadagi nol — o‘nliklar yo‘q: 300 · 6 + 5 · 6 = 1 800 + 30 = <b>1 830</b>.',
            '230 · 40: отложим нули, найдём 23 · 4 = 92 и припишем два нуля: <b>9 200</b>. 305 · 6: ноль в середине — десятков нет: 300 · 6 + 5 · 6 = 1 800 + 30 = <b>1 830</b>.',
            '230 · 40: set the zeros aside, work out 23 · 4 = 92 and add two zeros: <b>9 200</b>. 305 · 6: the middle zero means no tens: 300 · 6 + 5 · 6 = 1 800 + 30 = <b>1 830</b>.'),
          rule: '230 · 40 = 23 · 4 · 100 = 9 200',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var a = R(11, 49) * 10, b = R(2, 9) * 10, c = R(1, 9) * 100 + R(1, 9), k = R(2, 9); return pick([{ q: a + ' · ' + b, a: a * b }, { q: c + ' · ' + k, a: c * k }]); } },
            { type: 'problem', make: function (R) { var a = R(2, 9) * 10, b = R(2, 9) * 10; return { story: L('Bog‘da <b>' + a + '</b> qator daraxt, har qatorda <b>' + b + '</b> tadan. <u>Jami nechta</u> daraxt?', 'В саду <b>' + a + '</b> рядов деревьев, в каждом по <b>' + b + '</b>. <u>Сколько всего</u> деревьев?', 'An orchard has <b>' + a + '</b> rows of <b>' + b + '</b> trees. <u>How many</u> trees in all?'), expr: [a, '·', b, '=', a * b], ans: a * b, unit: H.PCS }; } }
          ],
          quiz: [{ q: '120 · 30 = ?', o: ['3600', '360', '150'], a: 0 }, { q: '407 · 2 = ?', o: ['814', '8014', '409'], a: 0 }] }
      ] },

      { id: 's4', title: L('Masalalar, narx va vaqt', 'Задачи, цена и время', 'Problems, price and time'), icon: '🛒', color: 'orange', topics: [
        { id: 't11', lessons: L('35–36, 38-darslar', 'Уроки 35–36, 38', 'Lessons 35–36, 38'), title: L('Masalalar yechish', 'Решение задач', 'Problem solving'),
          keys: [L('ikki amalli masala', 'задача в два действия', 'two-step problem')],
          scene: [{ obj: 'robot', n: 2, color: 'green' }],
          explain: L('Murakkab masalada avval yordamchi savolga javob topamiz. Masalan, 4 ta qutida 125 tadan qalam bor, 180 tasi tarqatildi: avval 125 · 4 = 500, keyin 500 − 180 = 320.',
            'В составной задаче сначала отвечаем на вспомогательный вопрос. Например, в 4 коробках по 125 карандашей, 180 раздали: сначала 125 · 4 = 500, потом 500 − 180 = 320.',
            'In a multi-step problem answer the helper question first. E.g. 4 boxes of 125 pencils, 180 given out: first 125 · 4 = 500, then 500 − 180 = 320.'),
          rule: L('Reja: 1) … 2) … Javob: …', 'План: 1) … 2) … Ответ: …', 'Plan: 1) … 2) … Answer: …'),
          acts: [
            { type: 'problem', make: function (R) { var a = R(100, 250), k = R(3, 6), c = R(50, a * k - 100); return { story: L('<b>' + k + '</b> ta qutida <b>' + a + '</b> tadan daftar bor. <b>' + c + '</b> tasi tarqatildi. <u>Nechta qoldi</u>?', 'В <b>' + k + '</b> коробках по <b>' + a + '</b> тетрадей. <b>' + c + '</b> раздали. <u>Сколько осталось</u>?', '<b>' + k + '</b> boxes hold <b>' + a + '</b> notebooks each. <b>' + c + '</b> were handed out. <u>How many are left</u>?'), expr: [a, '·', k, '−', c, '=', a * k - c], ans: a * k - c, unit: PCS }; } },
            { type: 'problem', make: H.more({ a: [1200, 4000], d: [300, 900], who: [L('1-kun', '1-й день', 'Day 1'), L('2-kun', '2-й день', 'Day 2')], text: function (a, d) { return L('Birinchi kuni muzeyga <b>' + a + '</b> kishi keldi, ikkinchi kuni <b>' + d + '</b> kishi ko‘p. <u>Ikkinchi kuni nechta</u>?', 'В первый день в музей пришли <b>' + a + '</b> человек, во второй — на <b>' + d + '</b> больше. <u>Сколько во второй день</u>?', 'On day 1 <b>' + a + '</b> people visited a museum; on day 2, <b>' + d + '</b> more. <u>How many on day 2</u>?'); } }) }
          ],
          quiz: [{ q: '150 · 4 − 200 = ?', o: ['400', '600', '350'], a: 0 }, { q: '(300 + 200) · 3 = ?', o: ['1500', '900', '503'], a: 0 }] },

        { id: 't12', lessons: L('37-dars', 'Урок 37', 'Lesson 37'), title: L('Narx, miqdor va qiymat', 'Цена, количество и стоимость', 'Price, quantity and cost'),
          keys: [L('narx', 'цена', 'price'), L('miqdor', 'количество', 'quantity'), L('qiymat', 'стоимость', 'cost')],
          scene: [{ obj: 'book', n: 3, color: 'orange' }],
          explain: L('Bitta narsaning puli — <b>narx</b>, nechta olingani — <b>miqdor</b>, jami to‘langan pul — <b>qiymat</b>. Qiymat = narx · miqdor. Narx = qiymat : miqdor.',
            'Сколько стоит одна вещь — <b>цена</b>, сколько купили — <b>количество</b>, сколько заплатили всего — <b>стоимость</b>. Стоимость = цена · количество. Цена = стоимость : количество.',
            'What one item costs is the <b>price</b>, how many you buy is the <b>quantity</b>, the total paid is the <b>cost</b>. Cost = price · quantity. Price = cost : quantity.'),
          rule: L('Qiymat = narx · miqdor', 'Стоимость = цена · количество', 'Cost = price · quantity'),
          acts: [
            { type: 'problem', make: function (R) { var p = R(2, 9) * 500, q = R(2, 8); return { story: L('Bitta daftar <b>' + p + '</b> so‘m. <b>' + q + '</b> ta daftarning <u>qiymati</u> qancha?', 'Одна тетрадь стоит <b>' + p + '</b> сум. <u>Сколько стоят</u> <b>' + q + '</b> тетрадей?', 'One notebook costs <b>' + p + '</b> sum. <u>What do</u> <b>' + q + '</b> notebooks cost?'), cond: [[L('Narx', 'Цена', 'Price'), p + ''], [L('Miqdor', 'Количество', 'Quantity'), q + ''], [L('Qiymat', 'Стоимость', 'Cost'), '?']], expr: [p, '·', q, '=', p * q], ans: p * q, unit: SOM }; } },
            { type: 'problem', make: function (R) { var p = R(2, 9) * 1000, q = R(2, 6); return { story: L('<b>' + q + '</b> ta kitob uchun <b>' + p * q + '</b> so‘m to‘landi. <u>Bitta kitobning narxi</u>?', 'За <b>' + q + '</b> книг заплатили <b>' + p * q + '</b> сум. <u>Какова цена одной книги</u>?', '<b>' + q + '</b> books cost <b>' + p * q + '</b> sum. <u>What is the price of one book</u>?'), expr: [p * q, ':', q, '=', p], ans: p, unit: SOM }; } }
          ],
          quiz: [{ q: L('Narx 3 000, miqdor 4. Qiymat?', 'Цена 3 000, количество 4. Стоимость?', 'Price 3 000, quantity 4. Cost?'), o: ['12000', '3004', '7000'], a: 0 }, { q: L('Qiymat 10 000, miqdor 5. Narx?', 'Стоимость 10 000, количество 5. Цена?', 'Cost 10 000, quantity 5. Price?'), o: ['2000', '50000', '9995'], a: 0 }] },

        { id: 't13', lessons: L('39-dars', 'Урок 39', 'Lesson 39'), title: L('Soatlar, minutlar, sekundlar', 'Часы, минуты, секунды', 'Hours, minutes, seconds'),
          keys: ['1 min = 60 s', '1 soat = 60 min', '1 sutka = 24 soat'],
          scene: [{ obj: 'cylinder', n: 1, color: 'yellow' }],
          explain: L('Juda qisqa vaqt <b>sekund</b>larda o‘lchanadi: 1 min = 60 s. Bir sutkada 24 soat bor.',
            'Очень короткое время измеряют <b>секундами</b>: 1 мин = 60 с. В сутках 24 часа.',
            'Very short times are measured in <b>seconds</b>: 1 min = 60 s. A day has 24 hours.'),
          rule: L('1 min = 60 s · 1 soat = 60 min = 3 600 s', '1 мин = 60 с · 1 ч = 60 мин = 3 600 с', '1 min = 60 s · 1 h = 60 min = 3 600 s'),
          acts: [
            { type: 'drill', n: 6, make: function (R) { var m = R(1, 9), s = R(1, 59); return pick([{ q: mk(function (l) { return m + ' ' + H.pk(MIN, l) + ' = ? ' + H.pk(SEC, l); }), a: m * 60 }, { q: mk(function (l) { return m + ' ' + H.pk(MIN, l) + ' ' + s + ' ' + H.pk(SEC, l) + ' = ? ' + H.pk(SEC, l); }), a: m * 60 + s }, { q: mk(function (l) { return (m * 60) + ' ' + H.pk(SEC, l) + ' = ? ' + H.pk(MIN, l); }), a: m }]); } },
            { type: 'clock', make: function (R) { return { h: R(1, 12), m: R(0, 11) * 5 }; } }
          ],
          quiz: [{ q: L('2 min = ? s', '2 мин = ? с', '2 min = ? s'), o: ['120', '200', '62'], a: 0 }, { q: L('Sutkada necha soat?', 'Сколько часов в сутках?', 'Hours in a day?'), o: ['24', '12', '60'], a: 0 }] }
      ] }
    ]
  };
  C.addPart(part1);
})(this);
