// Nuvemath — 5-sinf, I qism (manba: «Matematika. 5-sinf. I qism», Toshkent, 2024, yangi nashr).
// Boblar va mavzular tartibi darslikdan olingan; tushuntirishlar, topshiriqlar va rasmlar Nuvemath uchun qayta yozilgan.
(function (root) {
  'use strict';
  var C = root.NMCurriculum, H = C.H, L = H.L, mk = H.mk, PCS = H.PCS, choice = H.choice, pick = H.pick;
  var fr = H.fr, mixed = H.mixed, dq = H.dq, r6 = H.r6, gcd = H.gcd;
  var SOM = L('so‘m', 'сум', 'sum'), CM2 = L('cm²', 'см²', 'cm²'), CM3 = L('cm³', 'см³', 'cm³'), LT = H.LT;
  function fmt(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' '); }
  function pg(a, b) { return b ? L(a + '–' + b + '-betlar', 'Стр. ' + a + '–' + b, 'Pages ' + a + '–' + b) : L(a + '-bet', 'Стр. ' + a, 'Page ' + a); }
  function fig(inner, w, h) { return '<div class="kd-fig"><svg viewBox="0 0 ' + (w || 300) + ' ' + (h || 180) + '">' + inner + '</svg></div>'; }
  var TX = 'font-size="16" font-weight="700" fill="currentColor" text-anchor="middle"';
  // uchburchak: asos a, balandlik h (shtrix bilan)
  function triFig(a, h) { return fig('<polygon points="30,150 270,150 110,30" fill="rgba(79,141,255,.18)" stroke="#4f8dff" stroke-width="3"/><line x1="110" y1="30" x2="110" y2="150" stroke="#ff6b8b" stroke-width="2.5" stroke-dasharray="7 5"/><rect x="110" y="138" width="12" height="12" fill="none" stroke="#ff6b8b" stroke-width="2"/>' +
    '<text x="150" y="172" ' + TX + '>a = ' + a + ' cm</text><text x="135" y="95" ' + TX + ' fill="#ff6b8b" text-anchor="start">h = ' + h + ' cm</text>'); }
  // to'g'ri to'rtburchak ustida uchburchak
  function houseFig(a, b, h) { return fig('<rect x="60" y="80" width="180" height="80" fill="rgba(79,141,255,.18)" stroke="#4f8dff" stroke-width="3"/><polygon points="60,80 240,80 150,20" fill="rgba(255,107,139,.2)" stroke="#ff6b8b" stroke-width="3"/><line x1="150" y1="20" x2="150" y2="80" stroke="#ff6b8b" stroke-width="2" stroke-dasharray="6 5"/>' +
    '<text x="150" y="178" ' + TX + '>' + a + ' cm</text><text x="252" y="125" ' + TX + ' text-anchor="start">' + b + '</text><text x="158" y="58" ' + TX + ' text-anchor="start">' + h + '</text>'); }

  var part1 = {
    grade: 5, part: 1, edition: L('2024-yil yangi nashri', 'Новое издание 2024 г.', '2024 new edition'),
    title: L('Natural sonlar, kasrlar, yuz, hajm va nisbatlar', 'Натуральные числа, дроби, площадь, объём и отношения', 'Whole numbers, fractions, area, volume and ratios'),
    book: L('Matematika, 5-sinf, I qism (Toshkent, 2024)', 'Математика, 5 класс, часть I (Ташкент, 2024)', 'Mathematics, Grade 5, Part I (Tashkent, 2024)'),
    intro: L('5-sinfning birinchi qismida 10 milliongacha sonlar va to‘rt amalni mustahkamlaymiz, oddiy kasrlar bilan amallarni o‘rganamiz, uchburchak yuzi va jismlar hajmini topamiz, nisbatlar bilan tanishamiz.',
      'В первой части 5 класса закрепляем числа до 10 миллионов и четыре действия, учимся действиям с обыкновенными дробями, находим площадь треугольника и объём тел, знакомимся с отношениями.',
      'In Part I of Grade 5 we strengthen numbers up to 10 million and the four operations, learn to work with fractions, find triangle areas and volumes, and meet ratios.'),
    sections: [
      { id: 's1', title: L('Natural sonlar', 'Натуральные числа', 'Whole numbers'), icon: '🔢', color: 'blue', topics: [
        { id: 't1', lessons: pg(4, 7), title: L('1 milliongacha bo‘lgan sonlar', 'Числа до 1 миллиона', 'Numbers up to 1 million'),
          keys: [L('xona', 'разряд', 'place'), L('sinf', 'класс', 'period'), '1 000 000'],
          scene: [{ obj: 'cube', n: 10, color: 'blue' }],
          explain: L('Sonni o‘ngdan uchtadan sinflarga ajratib o‘qiymiz: 704 518 — «yetti yuz to‘rt ming besh yuz o‘n sakkiz». Har bir raqamning qiymati uning xonasiga bog‘liq: 704 518 da 7 — 700 000.',
            'Число читаем, разбивая его справа на классы по три цифры: 704 518 — «семьсот четыре тысячи пятьсот восемнадцать». Значение цифры зависит от разряда: в 704 518 цифра 7 — это 700 000.',
            'Read a number by splitting it into periods of three from the right: 704 518 — “seven hundred and four thousand five hundred and eighteen”. A digit’s value depends on its place: in 704 518 the 7 means 700 000.'),
          rule: '704 518 = 700 000 + 4 000 + 500 + 10 + 8',
          acts: [
            { type: 'drill', title: L('Raqamlar bilan yozing', 'Запишите цифрами', 'Write in digits'), n: 6, make: function (R) { var t = R(1, 999), u = R(0, 999); return { q: mk(function (l) { var W = { uz: ' ming ', ru: ' тыс. ', en: ' thousand ' }[l]; return t + W + (u || ''); }), a: t * 1000 + u }; } },
            { type: 'choose', title: L('Raqam qiymati', 'Значение цифры', 'Digit value'), icon: '🔢', make: function (R) { var n = R(100000, 999999), s = String(n), k = R(0, 5), dgt = +s[k]; while (dgt === 0) { n = R(100000, 999999); s = String(n); dgt = +s[k]; } var val = dgt * Math.pow(10, 5 - k);
              var wrong = [0, 1, 2, 3, 4, 5].map(function (e) { return dgt * Math.pow(10, e); }).filter(function (x) { return x !== val; }).sort(function () { return R(0, 1) - 0.5; });
              return choice(mk(function (l) { return '<span class="kd-big">' + fmt(n) + '</span> — ' + { uz: (k + 1) + '-raqam (' + dgt + ') qiymati?', ru: 'значение ' + (k + 1) + '-й цифры (' + dgt + ')?', en: 'value of digit ' + (k + 1) + ' (' + dgt + ')?' }[l]; }), [fmt(val), fmt(wrong[0]), fmt(wrong[1])], 0); } }
          ],
          quiz: [{ q: L('704 518 da 7 raqamining qiymati?', 'Значение цифры 7 в 704 518?', 'Value of the 7 in 704 518?'), o: ['700000', '70000', '7'], a: 0 }, { q: L('999 999 dan keyingi son?', 'Число после 999 999?', 'The number after 999 999?'), o: ['1000000', '100000', '999990'], a: 0 }] },

        { id: 't2', lessons: pg(8, 12), title: L('10 milliongacha bo‘lgan sonlar', 'Числа до 10 миллионов', 'Numbers up to 10 million'),
          keys: [L('taqqoslash', 'сравнение', 'comparing'), L('yaxlitlash', 'округление', 'rounding')],
          scene: [{ obj: 'cube', n: 8, color: 'green' }, { obj: 'cube', n: 8, color: 'cyan' }],
          explain: L('2023-yilda Toshkent aholisi 3 000 000 nafardan oshdi! Katta sonlarni taqqoslashda avval xonalar sonini, so‘ng chapdan raqamlarni solishtiramiz. Yaxlitlashda keyingi xona raqamiga qaraymiz: 5 va undan katta bo‘lsa — yuqoriga.',
            'В 2023 году население Ташкента превысило 3 000 000! Сравнивая большие числа, сначала сравниваем число разрядов, потом цифры слева. При округлении смотрим на следующий разряд: 5 и больше — округляем вверх.',
            'In 2023 Tashkent’s population passed 3 000 000! To compare large numbers, first count the digits, then compare from the left. To round, look at the next digit: 5 or more rounds up.'),
          rule: L('3 486 512 ≈ 3 487 000 (minglargacha)', '3 486 512 ≈ 3 487 000 (до тысяч)', '3 486 512 ≈ 3 487 000 (to thousands)'),
          acts: [
            { type: 'drill', title: L('Minglargacha yaxlitlang', 'Округлите до тысяч', 'Round to thousands'), n: 6, make: function (R) { var n = R(1000000, 9999999); return { q: mk(function (l) { return fmt(n) + ' → ' + { uz: 'minglargacha', ru: 'до тысяч', en: 'to thousands' }[l]; }), a: Math.round(n / 1000) * 1000 }; } },
            { type: 'choose', title: L('Taqqoslang', 'Сравните', 'Compare'), icon: '⚖️', make: function (R) { var a = R(1000000, 9999999), b = R(0, 1) ? a + pick([1, -1]) * pick([10, 1000, 100000]) : R(1000000, 9999999); if (b === a) b++; return choice('<span class="kd-big">' + fmt(a) + ' ◻ ' + fmt(b) + '</span>', ['&gt;', '&lt;'], a > b ? 0 : 1); } },
            { type: 'order', title: L('Kichigidan kattasiga', 'От меньшего к большему', 'Smallest to largest'), make: function (R) { var xs = H.distinct(R, 4, 1000000, 9999999).sort(function (a, b) { return a - b; }); return { story: L('Sonlarni kichigidan kattasiga bosing.', 'Нажимайте от меньшего к большему.', 'Tap from smallest to largest.'), items: xs.map(fmt), sep: '<span class="kd-arr">&lt;</span>' }; } }
          ],
          quiz: [{ q: L('3 486 512 ni minglargacha yaxlitlang', 'Округлите 3 486 512 до тысяч', 'Round 3 486 512 to thousands'), o: ['3 487 000', '3 486 000', '3 490 000'], a: 0 }, { q: '5 040 000 ◻ 5 400 000', o: ['&lt;', '&gt;', '='], a: 0 }] }
      ] },

      { id: 's2', title: L('Sonlar ustida to‘rt amal', 'Четыре действия с числами', 'The four operations'), icon: '➗', color: 'orange', topics: [
        { id: 't3', lessons: pg(14, 21), title: L('Sonni 10, 100 va 1000 ga ko‘paytirish va bo‘lish', 'Умножение и деление на 10, 100 и 1000', 'Multiplying and dividing by 10, 100 and 1000'),
          keys: ['· 10 → +0', ': 100 → −00'],
          scene: [{ obj: 'rod', n: 10, color: 'orange' }],
          explain: L('10 ga ko‘paytirganda har bir raqam bir xona chapga suriladi — oxiriga bitta nol qo‘shiladi: 375 · 10 = 3 750. 100 ga — ikkita, 1000 ga — uchta nol. Bo‘lishda esa nollar olib tashlanadi: 48 000 : 100 = 480.',
            'При умножении на 10 каждая цифра сдвигается на разряд влево — справа приписываем нуль: 375 · 10 = 3 750. На 100 — два нуля, на 1000 — три. При делении нули отбрасываем: 48 000 : 100 = 480.',
            'Multiplying by 10 shifts every digit one place left — add one zero: 375 · 10 = 3 750. By 100 add two zeros, by 1000 three. Dividing removes zeros: 48 000 : 100 = 480.'),
          rule: '375 · 100 = 37 500 · 48 000 : 100 = 480',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var a = R(12, 999), k = pick([10, 100, 1000]); return R(0, 1) ? { q: a + ' · ' + fmt(k), a: a * k } : { q: fmt(a * k) + ' : ' + fmt(k), a: a }; } },
            { type: 'problem', make: function (R) { var p = R(12, 95) * 100, k = pick([10, 100]); return { story: L('Bitta daftar <b>' + fmt(p) + '</b> so‘m. <b>' + k + '</b> ta daftar <u>qancha</u> turadi?', 'Тетрадь стоит <b>' + fmt(p) + '</b> сум. <u>Сколько стоят</u> <b>' + k + '</b> тетрадей?', 'A notebook costs <b>' + fmt(p) + '</b> sum. <u>How much</u> do <b>' + k + '</b> notebooks cost?'), expr: [p, '·', k, '=', p * k], ans: p * k, unit: SOM }; } }
          ],
          quiz: [{ q: '375 · 100 = ?', o: ['37500', '3750', '375000'], a: 0 }, { q: '48 000 : 1 000 = ?', o: ['48', '480', '4800'], a: 0 }] },

        { id: 't4', lessons: pg(19, 28), title: L('O‘nlik, yuzlik va mingliklarga ko‘paytirish va bo‘lish', 'Умножение и деление на десятки, сотни и тысячи', 'Multiplying and dividing by tens, hundreds and thousands'),
          keys: ['34 · 300 = 34 · 3 · 100', '8 400 : 70 = 840 : 7'],
          scene: [{ obj: 'flat', n: 3, color: 'green' }],
          explain: L('300 = 3 · 100, shuning uchun 34 · 300 = (34 · 3) · 100 = 10 200. Bo‘lishda bo‘linuvchi va bo‘luvchidan bir xil sondagi nollarni olib tashlaymiz: 8 400 : 70 = 840 : 7 = 120.',
            '300 = 3 · 100, поэтому 34 · 300 = (34 · 3) · 100 = 10 200. При делении убираем одинаковое число нулей у делимого и делителя: 8 400 : 70 = 840 : 7 = 120.',
            '300 = 3 · 100, so 34 · 300 = (34 · 3) · 100 = 10 200. When dividing, remove the same number of zeros from both: 8 400 : 70 = 840 : 7 = 120.'),
          rule: '34 · 300 = 10 200 · 8 400 : 70 = 120',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var a = R(12, 99), d = R(2, 9), z = pick([10, 100, 1000]); return R(0, 1) ? { q: a + ' · ' + fmt(d * z), a: a * d * z } : { q: fmt(a * d * z) + ' : ' + fmt(d * z), a: a }; } },
            { type: 'problem', make: function (R) { var w = R(3, 9) * 100, n = R(12, 40); return { story: L('Har bir qutida <b>' + w + '</b> g pechenye bor. <b>' + n + '</b> ta qutida <u>necha gramm</u> pechenye bor?', 'В каждой коробке <b>' + w + '</b> г печенья. <u>Сколько граммов</u> в <b>' + n + '</b> коробках?', 'Each box holds <b>' + w + '</b> g of biscuits. <u>How many grams</u> in <b>' + n + '</b> boxes?'), expr: [w, '·', n, '=', w * n], ans: w * n, unit: L('g', 'г', 'g') }; } }
          ],
          quiz: [{ q: '34 · 300 = ?', o: ['10200', '1020', '102000'], a: 0 }, { q: '8 400 : 70 = ?', o: ['120', '12', '1200'], a: 0 }] },

        { id: 't5', lessons: pg(29, 38), title: L('Ifodalarda amallarni bajarish tartibi', 'Порядок действий в выражениях', 'Order of operations'),
          keys: ['( )', '· :', '+ −'],
          scene: [{ obj: 'medal', n: 3, color: 'yellow' }],
          explain: L('Avval qavs ichidagi amallar, so‘ng ko‘paytirish va bo‘lish, oxirida qo‘shish va ayirish — har bir bosqichda chapdan o‘ngga. 600 − (120 + 30) · 4 = 600 − 150 · 4 = 600 − 600 = 0.',
            'Сначала действия в скобках, затем умножение и деление, в конце сложение и вычитание — на каждом шаге слева направо. 600 − (120 + 30) · 4 = 600 − 150 · 4 = 600 − 600 = 0.',
            'First brackets, then multiplication and division, finally addition and subtraction — each step left to right. 600 − (120 + 30) · 4 = 600 − 150 · 4 = 600 − 600 = 0.'),
          rule: L('( ) → · : → + −', '( ) → · : → + −', '( ) → · : → + −'),
          acts: [
            { type: 'drill', n: 8, make: function (R) { var a = R(10, 90), b = R(10, 90), c = R(2, 9), d = R(100, 900); return pick([{ q: d + ' + ' + a + ' · ' + c, a: d + a * c }, { q: '(' + a + ' + ' + b + ') · ' + c + ' − ' + a, a: (a + b) * c - a }, { q: (d + a * c) + ' − ' + (a * c) + ' : ' + c + ' · ' + c, a: d }, { q: '(' + (a * c) + ' + ' + (b * c) + ') : ' + c, a: a + b }]); } },
            { type: 'choose', title: L('Birinchi amal', 'Первое действие', 'The first step'), icon: '1️⃣', make: function (R) { var a = R(10, 99), b = R(2, 9), c = R(2, 9), k = R(0, 2); return [
              choice('<span class="kd-big">' + a + ' − ' + b + ' · ' + c + '</span>', ['·', '−'], 0),
              choice('<span class="kd-big">(' + a + ' − ' + b + ') · ' + c + '</span>', ['−', '·'], 0),
              choice('<span class="kd-big">' + (a * c) + ' : ' + c + ' + ' + b + '</span>', [':', '+'], 0)][k]; } }
          ],
          quiz: [{ q: '600 − (120 + 30) · 4 = ?', o: ['0', '1920', '450'], a: 0 }, { q: '20 + 80 : 4 = ?', o: ['40', '25', '100'], a: 0 }] },

        { id: 't6', lessons: pg(39, 44), title: L('Matnli masalalar', 'Текстовые задачи', 'Word problems'),
          keys: [L('reja', 'план', 'plan'), L('bosqichlar', 'шаги', 'steps')],
          scene: [{ obj: 'book', n: 2, color: 'violet' }, { obj: 'pencil', n: 3, color: 'orange' }],
          explain: L('Masalani yechish rejasi: 1) nima berilgan, nima so‘ralgan; 2) qaysi amallar kerak; 3) hisoblash; 4) javobni tekshirish. Ko‘p bosqichli masalada oraliq natijalarni yozib boring.',
            'План решения: 1) что дано и что спрашивается; 2) какие действия нужны; 3) вычисления; 4) проверка ответа. В задаче в несколько действий записывайте промежуточные результаты.',
            'A plan for solving: 1) what is given and what is asked; 2) which operations; 3) calculate; 4) check. In multi-step problems write down each intermediate result.'),
          rule: L('Berilgan → reja → hisob → tekshiruv', 'Дано → план → вычисления → проверка', 'Given → plan → calculate → check'),
          acts: [
            { type: 'problem', make: function (R) { var p1 = R(20, 60) * 1000, n1 = R(2, 5), p2 = R(5, 15) * 1000, n2 = R(2, 6), have = Math.ceil((p1 * n1 + p2 * n2) / 50000) * 50000 + 50000; return { story: L('Oyimning <b>' + fmt(have) + '</b> so‘mi bor edi. U <b>' + fmt(p1) + '</b> so‘mdan <b>' + n1 + '</b> kg go‘sht va <b>' + fmt(p2) + '</b> so‘mdan <b>' + n2 + '</b> kg sabzavot oldi. <u>Qancha pul qoldi</u>? (Avval xaridlar narxini toping.)', 'У мамы было <b>' + fmt(have) + '</b> сум. Она купила <b>' + n1 + '</b> кг мяса по <b>' + fmt(p1) + '</b> сум и <b>' + n2 + '</b> кг овощей по <b>' + fmt(p2) + '</b> сум. <u>Сколько денег осталось</u>? (Сначала найдите стоимость покупок.)', 'Mum had <b>' + fmt(have) + '</b> sum. She bought <b>' + n1 + '</b> kg of meat at <b>' + fmt(p1) + '</b> sum and <b>' + n2 + '</b> kg of vegetables at <b>' + fmt(p2) + '</b> sum. <u>How much money is left</u>? (First find the cost of the shopping.)'),
              expr: [have, '−', p1 * n1, '−', p2 * n2, '=', have - p1 * n1 - p2 * n2], ans: have - p1 * n1 - p2 * n2, unit: SOM }; } },
            { type: 'problem', make: function (R) { var v = R(6, 9) * 10, t = R(3, 6); return { story: L('Avtobus <b>' + v + '</b> km/soat tezlikda <b>' + t + '</b> soat yurdi. <u>Necha km</u> yurdi?', 'Автобус ехал <b>' + t + '</b> ч со скоростью <b>' + v + '</b> км/ч. <u>Сколько км</u> он проехал?', 'A bus drove at <b>' + v + '</b> km/h for <b>' + t + '</b> hours. <u>How many km</u> did it go?'), expr: [v, '·', t, '=', v * t], ans: v * t, unit: L('km', 'км', 'km') }; } }
          ],
          quiz: [{ q: L('3 ta daftar 4 500 so‘m. 5 tasi?', '3 тетради — 4 500 сум. 5 тетрадей?', '3 notebooks cost 4 500 sum. 5 notebooks?'), o: ['7500', '9000', '6000'], a: 0 }, { q: L('1 000 − 4 · 150 = ?', '1 000 − 4 · 150 = ?', '1 000 − 4 · 150 = ?'), o: ['400', '127 000', '850'], a: 0 }] }
      ] },

      { id: 's3', title: L('Oddiy kasrlar', 'Обыкновенные дроби', 'Fractions'), icon: '🍕', color: 'pink', topics: [
        { id: 't7', lessons: pg(46, 51), title: L('Bo‘lishni kasr ko‘rinishida ifodalash. Aralash sonlar', 'Деление как дробь. Смешанные числа', 'Division as a fraction. Mixed numbers'),
          keys: [L('surat', 'числитель', 'numerator'), L('maxraj', 'знаменатель', 'denominator'), L('aralash son', 'смешанное число', 'mixed number')],
          scene: [{ obj: 'ball', n: 3, color: 'pink' }, { obj: 'ball', n: 4, color: 'yellow' }],
          explain: mk(function (l) { return { uz: '3 ta pitsani 4 kishiga bo‘lsak, har biriga 3 : 4 = ' + fr(3, 4) + ' pitsa tegadi. Surat maxrajdan katta bo‘lsa — <b>noto‘g‘ri kasr</b>; uni aralash son qilamiz: ' + fr(7, 3) + ' = 7 : 3 = 2 (qoldiq 1) = ' + mixed(2, 1, 3) + '.',
            ru: 'Если 3 пиццы разделить на 4 человек, каждому достанется 3 : 4 = ' + fr(3, 4) + ' пиццы. Если числитель больше знаменателя — это <b>неправильная дробь</b>; её превращаем в смешанное число: ' + fr(7, 3) + ' = 7 : 3 = 2 (ост. 1) = ' + mixed(2, 1, 3) + '.',
            en: 'Sharing 3 pizzas among 4 people gives each 3 : 4 = ' + fr(3, 4) + ' of a pizza. When the numerator is bigger than the denominator it is an <b>improper fraction</b>; turn it into a mixed number: ' + fr(7, 3) + ' = 7 : 3 = 2 (rem. 1) = ' + mixed(2, 1, 3) + '.' }[l]; }),
          rule: 'a : b = a/b · 7/3 = 2 1/3',
          acts: [
            { type: 'choose', title: L('Kasr ko‘rinishida', 'В виде дроби', 'As a fraction'), icon: '🍕', make: function (R) { var a = R(1, 9), b = R(2, 12); while (b === a) b = R(2, 12); return choice('<span class="kd-big">' + a + ' : ' + b + ' = ?</span>', [fr(a, b), fr(b, a), fr(a, a + b)], 0); } },
            { type: 'choose', title: L('Aralash songa aylantiring', 'Переведите в смешанное число', 'Make a mixed number'), icon: '🔄', make: function (R) { var b = R(3, 9), q = R(2, 6), r = R(1, b - 1), n = q * b + r; return choice('<span class="kd-big">' + fr(n, b) + ' = ?</span>', [mixed(q, r, b), mixed(q + 1, r, b), mixed(q - 1, r, b)], 0); } },
            { type: 'drill', title: L('Butun qismi', 'Целая часть', 'Whole part'), n: 5, make: function (R) { var b = R(2, 9), q = R(1, 9), r = R(0, b - 1); return { q: mk(function (l) { return fr(q * b + r, b) + ' — ' + { uz: 'butun qismi', ru: 'целая часть', en: 'whole part' }[l]; }), a: q }; } }
          ],
          quiz: [{ q: '5 : 8 = ?', o: [fr(5, 8), fr(8, 5), fr(5, 13)], a: 0 }, { q: fr(11, 4) + ' = ?', o: [mixed(2, 3, 4), mixed(3, 2, 4), mixed(2, 1, 4)], a: 0 }] },

        { id: 't8', lessons: pg(52, 55), title: L('Oddiy kasrni o‘nli kasrga aylantirish', 'Перевод обыкновенной дроби в десятичную', 'Fractions to decimals'),
          keys: [L('o‘ndan bir', 'десятые', 'tenths'), L('yuzdan bir', 'сотые', 'hundredths')],
          scene: [{ obj: 'flat', n: 1, color: 'cyan' }, { obj: 'rod', n: 5, color: 'orange' }],
          explain: mk(function (l) { var c = l === 'en' ? '.' : ','; return { uz: 'Maxrajni 10, 100 yoki 1000 ga keltiramiz: ' + fr(3, 4) + ' = ' + fr(75, 100) + ' = 0' + c + '75. ' + fr(2, 5) + ' = ' + fr(4, 10) + ' = 0' + c + '4. Yoki suratni maxrajga bo‘lamiz: 3 : 4 = 0' + c + '75.',
            ru: 'Приводим знаменатель к 10, 100 или 1000: ' + fr(3, 4) + ' = ' + fr(75, 100) + ' = 0' + c + '75. ' + fr(2, 5) + ' = ' + fr(4, 10) + ' = 0' + c + '4. Или делим числитель на знаменатель: 3 : 4 = 0' + c + '75.',
            en: 'Make the denominator 10, 100 or 1000: ' + fr(3, 4) + ' = ' + fr(75, 100) + ' = 0' + c + '75. ' + fr(2, 5) + ' = ' + fr(4, 10) + ' = 0' + c + '4. Or divide the numerator by the denominator: 3 : 4 = 0' + c + '75.' }[l]; }),
          rule: L('3/4 = 75/100 = 0,75', '3/4 = 75/100 = 0,75', '3/4 = 75/100 = 0.75'),
          acts: [
            { type: 'drill', title: L('O‘nli kasr ko‘rinishida yozing', 'Запишите десятичной дробью', 'Write as a decimal'), n: 6, make: function (R) { var b = pick([2, 4, 5, 10, 20, 25, 50, 100]), a = R(1, b - 1); return { q: fr(a, b), a: r6(a / b) }; } },
            { type: 'choose', icon: '🔟', make: function (R) { var b = pick([4, 5, 20, 25]), a = R(1, b - 1); while (gcd(a, b) !== 1) a = R(1, b - 1); var v = r6(a / b), w1 = r6(a / 10), w2 = r6(v + (v < 0.5 ? 0.5 : -0.25)); if (w1 === v) w1 = r6(v + 0.1);
              return choice('<span class="kd-big">' + fr(a, b) + ' = ?</span>', [H.dec(v, 'uz'), H.dec(w1, 'uz'), H.dec(w2, 'uz')].map(function (s) { return L(s, s, s.replace(',', '.')); }), 0); } }
          ],
          quiz: [{ q: fr(3, 4) + ' = ?', o: [L('0,75', '0,75', '0.75'), L('0,34', '0,34', '0.34'), L('3,4', '3,4', '3.4')], a: 0 }, { q: fr(1, 5) + ' = ?', o: [L('0,2', '0,2', '0.2'), L('0,15', '0,15', '0.15'), L('1,5', '1,5', '1.5')], a: 0 }] },

        { id: 't9', lessons: pg(56, 64), title: L('Aralash sonlarni qo‘shish va ayirish', 'Сложение и вычитание смешанных чисел', 'Adding and subtracting mixed numbers'),
          keys: [L('butun qismlar', 'целые части', 'whole parts'), L('kasr qismlar', 'дробные части', 'fraction parts')],
          scene: [{ obj: 'ball', n: 2, color: 'orange' }, { obj: 'ball', n: 3, color: 'green' }],
          explain: mk(function (l) { return { uz: 'Butun qismlarni alohida, kasr qismlarni alohida qo‘shamiz: ' + mixed(2, 1, 5) + ' + ' + mixed(1, 3, 5) + ' = ' + mixed(3, 4, 5) + '. Kasr qismi 1 dan oshsa, uni butunga o‘tkazamiz: ' + mixed(1, 4, 5) + ' + ' + mixed(1, 3, 5) + ' = ' + mixed(2, 7, 5) + ' = ' + mixed(3, 2, 5) + '.',
            ru: 'Целые части складываем отдельно, дробные — отдельно: ' + mixed(2, 1, 5) + ' + ' + mixed(1, 3, 5) + ' = ' + mixed(3, 4, 5) + '. Если дробная часть больше 1 — выделяем целое: ' + mixed(1, 4, 5) + ' + ' + mixed(1, 3, 5) + ' = ' + mixed(2, 7, 5) + ' = ' + mixed(3, 2, 5) + '.',
            en: 'Add the whole parts and the fraction parts separately: ' + mixed(2, 1, 5) + ' + ' + mixed(1, 3, 5) + ' = ' + mixed(3, 4, 5) + '. If the fraction part goes over 1, carry a whole: ' + mixed(1, 4, 5) + ' + ' + mixed(1, 3, 5) + ' = ' + mixed(2, 7, 5) + ' = ' + mixed(3, 2, 5) + '.' }[l]; }),
          rule: L('butun + butun, kasr + kasr', 'целые + целые, дроби + дроби', 'wholes + wholes, fractions + fractions'),
          acts: [
            { type: 'drill', title: L('Suratni toping', 'Найдите числитель', 'Find the numerator'), n: 6, make: function (R) { var b = R(5, 12), a1 = R(1, b - 2), a2 = R(1, b - 1 - a1); return R(0, 1) ? { q: fr(a1, b) + ' + ' + fr(a2, b) + ' = ' + fr('□', b) + ';  □', a: a1 + a2 } : { q: fr(a1 + a2, b) + ' − ' + fr(a2, b) + ' = ' + fr('□', b) + ';  □', a: a1 }; } },
            { type: 'choose', title: L('Aralash sonlar yig‘indisi', 'Сумма смешанных чисел', 'Sum of mixed numbers'), icon: '➕', make: function (R) { var b = R(3, 9), w1 = R(1, 5), w2 = R(1, 5), a1 = R(1, b - 1), a2 = R(1, b - 1), n = a1 + a2, W = w1 + w2 + Math.floor(n / b), N = n % b;
              return choice('<span class="kd-big">' + mixed(w1, a1, b) + ' + ' + mixed(w2, a2, b) + ' = ?</span>', [mixed(W, N, b), mixed(W + 1, N, b), mixed(W > 1 ? W - 1 : W + 2, N, b)], 0); } }
          ],
          quiz: [{ q: mixed(2, 1, 5) + ' + ' + mixed(1, 3, 5) + ' = ?', o: [mixed(3, 4, 5), mixed(3, 4, 10), mixed(2, 4, 5)], a: 0 }, { q: mixed(4, 5, 7) + ' − ' + mixed(1, 2, 7) + ' = ?', o: [mixed(3, 3, 7), mixed(4, 3, 7), mixed(5, 3, 7)], a: 0 }] },

        { id: 't10', lessons: pg(65, 69), title: L('Kasrni natural songa ko‘paytirish', 'Умножение дроби на натуральное число', 'Multiplying a fraction by a whole number'),
          keys: [L('suratni ko‘paytiramiz', 'умножаем числитель', 'multiply the numerator'), L('kasr qismi', 'часть от числа', 'fraction of a number')],
          scene: [{ obj: 'apple', n: 6, color: 'red' }],
          explain: mk(function (l) { return { uz: 'Kasrni natural songa ko‘paytirganda suratni ko‘paytiramiz, maxraj o‘zgarmaydi: ' + fr(2, 7) + ' · 3 = ' + fr(6, 7) + '. Sonning kasr qismini topish ham shunday: 24 ning ' + fr(3, 4) + ' qismi = 24 : 4 · 3 = 18.',
            ru: 'При умножении дроби на натуральное число умножаем числитель, знаменатель не меняется: ' + fr(2, 7) + ' · 3 = ' + fr(6, 7) + '. Так же находим часть от числа: ' + fr(3, 4) + ' от 24 = 24 : 4 · 3 = 18.',
            en: 'To multiply a fraction by a whole number, multiply the numerator; the denominator stays: ' + fr(2, 7) + ' · 3 = ' + fr(6, 7) + '. Finding a fraction of a number works the same way: ' + fr(3, 4) + ' of 24 = 24 : 4 · 3 = 18.' }[l]; }),
          rule: 'a/b · n = (a · n)/b',
          acts: [
            { type: 'drill', title: L('Suratni toping', 'Найдите числитель', 'Find the numerator'), n: 6, make: function (R) { var b = R(5, 15), n = R(2, 5), a = R(1, Math.max(1, Math.floor((b - 1) / n))); return { q: fr(a, b) + ' · ' + n + ' = ' + fr('□', b) + ';  □', a: a * n }; } },
            { type: 'problem', title: L('Sonning qismi', 'Часть числа', 'Part of a number'), make: function (R) { var b = R(3, 8), a = R(1, b - 1), n = b * R(3, 12); return { story: mk(function (l) { return { uz: 'Sinfda <b>' + n + '</b> o‘quvchi bor, ularning ' + fr(a, b) + ' qismi sportga qatnashadi. <u>Necha o‘quvchi</u> sportga qatnashadi?', ru: 'В классе <b>' + n + '</b> учеников, ' + fr(a, b) + ' из них занимаются спортом. <u>Сколько учеников</u> занимаются спортом?', en: 'A class has <b>' + n + '</b> pupils and ' + fr(a, b) + ' of them do sport. <u>How many pupils</u> do sport?' }[l]; }), expr: [n, ':', b, '·', a, '=', n / b * a], ans: n / b * a, unit: L('nafar', 'учеников', 'pupils') }; } }
          ],
          quiz: [{ q: fr(2, 7) + ' · 3 = ?', o: [fr(6, 7), fr(6, 21), fr(5, 7)], a: 0 }, { q: L('24 ning 3/4 qismi?', '3/4 от 24?', '3/4 of 24?'), o: ['18', '32', '6'], a: 0 }] },

        { id: 't11', lessons: pg(69, 78), title: L('Kasrlarni ko‘paytirish', 'Умножение дробей', 'Multiplying fractions'),
          keys: [L('surat · surat', 'числитель · числитель', 'top · top'), L('maxraj · maxraj', 'знаменатель · знаменатель', 'bottom · bottom'), L('qisqartirish', 'сокращение', 'simplifying')],
          scene: [{ obj: 'box', n: 2, color: 'violet' }],
          explain: mk(function (l) { return { uz: 'Ikki kasrni ko‘paytirishda suratni suratga, maxrajni maxrajga ko‘paytiramiz: ' + fr(2, 3) + ' · ' + fr(4, 5) + ' = ' + fr(8, 15) + '. Noto‘g‘ri kasrlar ham xuddi shunday: ' + fr(5, 2) + ' · ' + fr(3, 4) + ' = ' + fr(15, 8) + ' = ' + mixed(1, 7, 8) + '. Iloji bo‘lsa, javobni qisqartiring.',
            ru: 'Чтобы умножить две дроби, перемножаем числители и знаменатели: ' + fr(2, 3) + ' · ' + fr(4, 5) + ' = ' + fr(8, 15) + '. С неправильными дробями так же: ' + fr(5, 2) + ' · ' + fr(3, 4) + ' = ' + fr(15, 8) + ' = ' + mixed(1, 7, 8) + '. Если можно, сокращайте ответ.',
            en: 'To multiply two fractions, multiply top by top and bottom by bottom: ' + fr(2, 3) + ' · ' + fr(4, 5) + ' = ' + fr(8, 15) + '. Improper fractions work the same: ' + fr(5, 2) + ' · ' + fr(3, 4) + ' = ' + fr(15, 8) + ' = ' + mixed(1, 7, 8) + '. Simplify the answer when you can.' }[l]; }),
          rule: 'a/b · c/d = (a · c)/(b · d)',
          acts: [
            { type: 'drill', title: L('Suratni toping', 'Найдите числитель', 'Find the numerator'), n: 6, make: function (R) { var a = R(1, 6), b = R(a + 1, 9), c = R(1, 8), d = R(2, 9); return { q: fr(a, b) + ' · ' + fr(c, d) + ' = ' + fr('□', b * d) + ';  □', a: a * c }; } },
            { type: 'choose', title: L('Qisqartirilgan javob', 'Сокращённый ответ', 'Simplified answer'), icon: '✂️', make: function (R) { var a, b, c, d, n, m, g, o;
              do { a = R(1, 5); b = R(a + 1, 9); c = R(1, 5); d = R(c + 1, 9); n = a * c; m = b * d; g = gcd(n, m); o = [fr(n / g, m / g), fr(n, m), fr(a + c, b + d)]; } while (g === 1 || o[2] === o[0] || o[2] === o[1]);
              return choice('<span class="kd-big">' + fr(a, b) + ' · ' + fr(c, d) + ' = ?</span>', o, 0); } }
          ],
          quiz: [{ q: fr(2, 3) + ' · ' + fr(4, 5) + ' = ?', o: [fr(8, 15), fr(6, 8), fr(10, 12)], a: 0 }, { q: fr(1, 2) + ' · ' + fr(1, 2) + ' = ?', o: [fr(1, 4), '1', fr(1, 2)], a: 0 }] },

        { id: 't12', lessons: pg(79, 81), title: L('Aralash sonlarni natural songa ko‘paytirish', 'Умножение смешанного числа на натуральное', 'Multiplying a mixed number by a whole number'),
          keys: [L('noto‘g‘ri kasrga aylantirish', 'перевод в неправильную дробь', 'convert to improper')],
          scene: [{ obj: 'cylinder', n: 3, color: 'orange' }],
          explain: mk(function (l) { return { uz: 'Aralash sonni avval noto‘g‘ri kasrga aylantiramiz: ' + mixed(2, 1, 4) + ' = ' + fr(9, 4) + '. So‘ng ko‘paytiramiz: ' + fr(9, 4) + ' · 8 = ' + fr(72, 4) + ' = 18. Yoki qismlab: 2 · 8 + ' + fr(1, 4) + ' · 8 = 16 + 2 = 18.',
            ru: 'Сначала переводим смешанное число в неправильную дробь: ' + mixed(2, 1, 4) + ' = ' + fr(9, 4) + '. Затем умножаем: ' + fr(9, 4) + ' · 8 = ' + fr(72, 4) + ' = 18. Или по частям: 2 · 8 + ' + fr(1, 4) + ' · 8 = 16 + 2 = 18.',
            en: 'First turn the mixed number into an improper fraction: ' + mixed(2, 1, 4) + ' = ' + fr(9, 4) + '. Then multiply: ' + fr(9, 4) + ' · 8 = ' + fr(72, 4) + ' = 18. Or in parts: 2 · 8 + ' + fr(1, 4) + ' · 8 = 16 + 2 = 18.' }[l]; }),
          rule: 'w a/b · n = w · n + a/b · n',
          acts: [
            { type: 'drill', n: 6, make: function (R) { var b = R(2, 6), a = R(1, b - 1), w = R(1, 5), n = b * R(1, 4); return { q: mixed(w, a, b) + ' · ' + n, a: w * n + a * n / b }; } },
            { type: 'problem', make: function (R) { var b = pick([2, 4]), a = b === 2 ? 1 : pick([1, 3]), w = R(1, 3), n = b * R(2, 5); return { story: mk(function (l) { return { uz: 'Bitta qutida ' + mixed(w, a, b) + ' kg olma bor. <b>' + n + '</b> ta qutida <u>necha kg</u> olma bor?', ru: 'В одном ящике ' + mixed(w, a, b) + ' кг яблок. <u>Сколько кг</u> в <b>' + n + '</b> ящиках?', en: 'One crate holds ' + mixed(w, a, b) + ' kg of apples. <u>How many kg</u> in <b>' + n + '</b> crates?' }[l]; }), expr: [w * n, '+', a * n / b, '=', w * n + a * n / b], ans: w * n + a * n / b, unit: H.KG }; } }
          ],
          quiz: [{ q: mixed(2, 1, 4) + ' · 8 = ?', o: ['18', '17', '16'], a: 0 }, { q: mixed(1, 1, 2) + ' · 6 = ?', o: ['9', '7', '12'], a: 0 }] },

        { id: 't13', lessons: pg(82, 88), title: L('Qolgan qismning qismi. Matnli masalalar', 'Часть от остатка. Текстовые задачи', 'A fraction of the rest. Word problems'),
          keys: [L('qolgan qism', 'остаток', 'the rest'), L('bosqichma-bosqich', 'по шагам', 'step by step')],
          scene: [{ obj: 'box', n: 3, color: 'green' }, { obj: 'cube', n: 3, color: 'yellow' }],
          explain: mk(function (l) { return { uz: 'Alining 120 ming so‘mi bor edi. U pulning ' + fr(1, 3) + ' qismiga kitob oldi — 40 ming, qoldi 80 ming. Qolganining ' + fr(1, 4) + ' qismiga qalam oldi — 20 ming. Oxirida 60 ming qoldi. Har safar <b>qaysi miqdorning</b> qismi ekaniga e’tibor bering!',
            ru: 'У Али было 120 тысяч сум. На ' + fr(1, 3) + ' денег он купил книгу — 40 тысяч, осталось 80 тысяч. На ' + fr(1, 4) + ' остатка купил ручки — 20 тысяч. В итоге осталось 60 тысяч. Каждый раз смотрите, <b>от какой величины</b> берётся часть!',
            en: 'Ali had 120 thousand sum. He spent ' + fr(1, 3) + ' of it on a book — 40 thousand, leaving 80 thousand. Then ' + fr(1, 4) + ' of the rest on pens — 20 thousand. 60 thousand was left. Always check <b>which amount</b> the fraction is of!' }[l]; }),
          rule: L('qism → qoldiq → qoldiqning qismi', 'часть → остаток → часть остатка', 'part → rest → part of the rest'),
          acts: [
            { type: 'problem', make: function (R) { var a = R(2, 5), b = R(2, 5), T = a * b * R(2, 10) * 10, s1 = T / a, rest = T - s1, s2 = rest / b; return { story: mk(function (l) { return { uz: 'Do‘konda <b>' + T + '</b> kg un bor edi. Birinchi kuni unning ' + fr(1, a) + ' qismi, ikkinchi kuni <u>qolganining</u> ' + fr(1, b) + ' qismi sotildi. <u>Necha kg</u> un qoldi? (1-kun: ' + s1 + ' kg.)', ru: 'В магазине было <b>' + T + '</b> кг муки. В первый день продали ' + fr(1, a) + ' муки, во второй — ' + fr(1, b) + ' <u>остатка</u>. <u>Сколько кг</u> осталось? (1-й день: ' + s1 + ' кг.)', en: 'A shop had <b>' + T + '</b> kg of flour. On day 1 it sold ' + fr(1, a) + ' of it, on day 2 ' + fr(1, b) + ' of <u>the rest</u>. <u>How many kg</u> are left? (Day 1: ' + s1 + ' kg.)' }[l]; }),
              expr: [rest, '−', s2, '=', rest - s2], ans: rest - s2, unit: H.KG }; } },
            { type: 'problem', make: function (R) { var b = R(3, 6), a = R(1, b - 1), n = b * R(4, 15); return { story: mk(function (l) { return { uz: 'Kitob <b>' + n + '</b> betdan iborat. Salim kitobning ' + fr(a, b) + ' qismini o‘qidi. <u>Yana necha bet</u> o‘qishi kerak?', ru: 'В книге <b>' + n + '</b> страниц. Салим прочитал ' + fr(a, b) + ' книги. <u>Сколько страниц</u> ему осталось?', en: 'A book has <b>' + n + '</b> pages. Salim has read ' + fr(a, b) + ' of it. <u>How many pages</u> are left?' }[l]; }), expr: [n, '−', n / b * a, '=', n - n / b * a], ans: n - n / b * a, unit: L('bet', 'стр.', 'pages') }; } }
          ],
          quiz: [{ q: L('60 ning 1/3 qismi, so‘ng qolganining 1/2 qismi olindi. Qoldi?', 'От 60 взяли 1/3, затем 1/2 остатка. Осталось?', 'Take 1/3 of 60, then 1/2 of the rest. What is left?'), o: ['20', '10', '30'], a: 0 }, { q: L('120 ning 3/4 qismi?', '3/4 от 120?', '3/4 of 120?'), o: ['90', '30', '160'], a: 0 }] }
      ] },

      { id: 's4', title: L('Uchburchakning yuzi', 'Площадь треугольника', 'Area of a triangle'), icon: '🔺', color: 'green', topics: [
        { id: 't14', lessons: pg(91, 102), title: L('Uchburchakning asosi, balandligi va yuzi', 'Основание, высота и площадь треугольника', 'Base, height and area of a triangle'),
          keys: [L('asos', 'основание', 'base'), L('balandlik', 'высота', 'height'), 'S = a · h : 2'],
          scene: [{ obj: 'pyramid', n: 2, color: 'green' }],
          explain: L('<b>Balandlik</b> — uchidan asosga tushirilgan perpendikular. Uchburchak yuzi — asosi va balandligi shunday bo‘lgan to‘g‘ri to‘rtburchak yuzining yarmi: S = a · h : 2. Masalan, a = 10 cm, h = 6 cm bo‘lsa, S = 30 cm².',
            '<b>Высота</b> — перпендикуляр из вершины на основание. Площадь треугольника — половина площади прямоугольника с теми же основанием и высотой: S = a · h : 2. Например, a = 10 см, h = 6 см, S = 30 см².',
            'The <b>height</b> is the perpendicular from a vertex to the base. A triangle’s area is half the rectangle with the same base and height: S = a · h : 2. E.g. a = 10 cm, h = 6 cm gives S = 30 cm².'),
          rule: 'S = a · h : 2',
          acts: [
            { type: 'problem', title: L('Uchburchak yuzi', 'Площадь треугольника', 'Triangle area'), make: function (R) { var a = R(3, 15) * 2, h = R(3, 14); return { story: mk(function (l) { return { uz: 'Uchburchakning <u>yuzini</u> toping.', ru: 'Найдите <u>площадь</u> треугольника.', en: 'Find the triangle’s <u>area</u>.' }[l] + triFig(a, h); }), expr: [a, '·', h, ':', 2, '=', a * h / 2], ans: a * h / 2, unit: CM2 }; } },
            { type: 'drill', n: 6, make: function (R) { var a = R(2, 20), h = R(1, 10) * 2; return pick([{ q: 'S, a = ' + a + ', h = ' + h, a: a * h / 2 }, { q: mk(function (l) { return 'S = ' + (a * h / 2) + ', a = ' + a + '; h'; }), a: h }]); } }
          ],
          quiz: [{ q: 'a = 10, h = 6. S = ?', o: ['30', '60', '16'], a: 0 }, { q: 'S = 24, a = 8. h = ?', o: ['6', '3', '16'], a: 0 }] },

        { id: 't15', lessons: pg(103, 108), title: L('Murakkab shakllarning yuzi', 'Площадь составных фигур', 'Area of composite shapes'),
          keys: [L('bo‘laklarga ajratish', 'разбиение на части', 'split into parts'), 'S = S₁ + S₂'],
          scene: [{ obj: 'box', n: 1, color: 'blue' }, { obj: 'pyramid', n: 1, color: 'pink' }],
          explain: L('Murakkab shaklni to‘g‘ri to‘rtburchak va uchburchaklarga ajratamiz, har birining yuzini topib qo‘shamiz. «Uycha» shakli: to‘g‘ri to‘rtburchak + tomdagi uchburchak.',
            'Составную фигуру разбиваем на прямоугольники и треугольники, находим площадь каждой части и складываем. Фигура «домик»: прямоугольник + треугольник-крыша.',
            'Split a composite shape into rectangles and triangles, find each area and add them. A “house” shape is a rectangle plus a triangular roof.'),
          rule: 'S = a · b + a · h : 2',
          acts: [
            { type: 'problem', title: L('Uycha', 'Домик', 'The house'), make: function (R) { var a = R(3, 10) * 2, b = R(3, 9), h = R(2, 8); return { story: mk(function (l) { return { uz: 'Uychaning <u>yuzini</u> toping: devor ' + a + ' × ' + b + ' cm, tom balandligi ' + h + ' cm.', ru: 'Найдите <u>площадь</u> домика: стена ' + a + ' × ' + b + ' см, высота крыши ' + h + ' см.', en: 'Find the house’s <u>area</u>: wall ' + a + ' × ' + b + ' cm, roof height ' + h + ' cm.' }[l] + houseFig(a, b, h); }), expr: [a * b, '+', a * h / 2, '=', a * b + a * h / 2], ans: a * b + a * h / 2, unit: CM2 }; } },
            { type: 'problem', title: L('Kesib olingan shakl', 'Вырезанная фигура', 'A cut-out shape'), make: function (R) { var a = R(6, 15), b = R(4, 10), c = R(1, 3) * 2, d = R(1, 3); return { story: L('<b>' + a + ' × ' + b + '</b> cm to‘g‘ri to‘rtburchakdan asosi <b>' + c + '</b> cm, balandligi <b>' + d + '</b> cm bo‘lgan uchburchak kesib olindi. <u>Qolgan yuz</u>?', 'Из прямоугольника <b>' + a + ' × ' + b + '</b> см вырезали треугольник с основанием <b>' + c + '</b> см и высотой <b>' + d + '</b> см. <u>Оставшаяся площадь</u>?', 'A triangle with base <b>' + c + '</b> cm and height <b>' + d + '</b> cm is cut from a <b>' + a + ' × ' + b + '</b> cm rectangle. <u>Area left</u>?'), expr: [a * b, '−', c * d / 2, '=', a * b - c * d / 2], ans: a * b - c * d / 2, unit: CM2 }; } }
          ],
          quiz: [{ q: L('6 × 4 to‘rtburchak + asosi 6, balandligi 2 uchburchak. S = ?', 'Прямоугольник 6 × 4 + треугольник с основанием 6 и высотой 2. S = ?', 'A 6 × 4 rectangle + a triangle with base 6 and height 2. S = ?'), o: ['30', '36', '28'], a: 0 }, { q: L('Kvadrat 4 × 4, diagonal bo‘yicha yarmi. S = ?', 'Половина квадрата 4 × 4 по диагонали. S = ?', 'Half of a 4 × 4 square cut on the diagonal. S = ?'), o: ['8', '16', '4'], a: 0 }] }
      ] },

      { id: 's5', title: L('Hajm', 'Объём', 'Volume'), icon: '🧊', color: 'cyan', topics: [
        { id: 't16', lessons: pg(110, 119), title: L('Fazoviy jismlarning hajmi. Jismlarni chizish', 'Объём тел. Изображение тел', 'Volume of solids. Drawing solids'),
          keys: [L('kub birlik', 'кубическая единица', 'cubic unit'), L('ko‘rinishlar', 'виды', 'views')],
          scene: [{ obj: 'cube', n: 6, color: 'cyan' }, { obj: 'cube', n: 6, color: 'blue' }],
          explain: L('<b>Hajm</b> — jism egallagan fazo. Uni kub birliklarda o‘lchaymiz: nechta birlik kubdan qurilgan bo‘lsa, hajmi shuncha. Jismni oldidan, yonidan va yuqoridan qarab chizish mumkin — bu uning <b>ko‘rinishlari</b>.',
            '<b>Объём</b> — пространство, которое занимает тело. Его измеряют кубическими единицами: из скольких единичных кубиков построено тело, такой у него объём. Тело можно нарисовать спереди, сбоку и сверху — это его <b>виды</b>.',
            '<b>Volume</b> is the space a solid takes up. We measure it in cubic units: however many unit cubes build it, that is its volume. We can draw a solid from the front, side and top — its <b>views</b>.'),
          rule: L('hajm = birlik kublar soni', 'объём = число единичных кубиков', 'volume = number of unit cubes'),
          acts: [
            { type: 'count3d', title: L('3D: kubiklarni sanang', '3D: посчитайте кубики', '3D: count the cubes'), make: function (R) { var a = R(2, 4), layers = R(2, 3), g = []; for (var i = 0; i < layers; i++) g.push({ obj: 'cube', n: a * 2, color: ['cyan', 'blue', 'violet'][i] }); return { groups: g, perRow: a, story: L('Jism <b>' + layers + '</b> qatlamdan iborat. <u>Hajmi</u> necha kub birlik?', 'Тело из <b>' + layers + '</b> слоёв. <u>Объём</u> в кубических единицах?', 'The solid has <b>' + layers + '</b> layers. <u>Volume</u> in cubic units?'), expr: [a * 2, '·', layers, '=', a * 2 * layers], ans: a * 2 * layers, unit: L('kub birlik', 'куб. ед.', 'cubic units') }; } },
            { type: 'choose', title: L('Qaysi ko‘rinish?', 'Какой вид?', 'Which view?'), icon: '👀', make: function () { return pick([
              choice(L('Kubni <b>yuqoridan</b> qarasak qanday shakl ko‘rinadi?', 'Какую фигуру видно, если смотреть на куб <b>сверху</b>?', 'What shape do you see looking at a cube <b>from above</b>?'), [L('kvadrat', 'квадрат', 'square'), L('doira', 'круг', 'circle'), L('uchburchak', 'треугольник', 'triangle')], 0),
              choice(L('Silindrni <b>yuqoridan</b> qarasak?', 'Цилиндр <b>сверху</b>?', 'A cylinder <b>from above</b>?'), [L('doira', 'круг', 'circle'), L('kvadrat', 'квадрат', 'square'), L('uchburchak', 'треугольник', 'triangle')], 0),
              choice(L('Piramidani <b>oldidan</b> qarasak?', 'Пирамида <b>спереди</b>?', 'A pyramid <b>from the front</b>?'), [L('uchburchak', 'треугольник', 'triangle'), L('doira', 'круг', 'circle'), L('kvadrat', 'квадрат', 'square')], 0)]); } }
          ],
          quiz: [{ q: L('3 × 2 × 2 kubiklardan jism. Hajmi?', 'Тело из кубиков 3 × 2 × 2. Объём?', 'A 3 × 2 × 2 solid of cubes. Volume?'), o: ['12', '7', '10'], a: 0 }, { q: L('Hajm nima bilan o‘lchanadi?', 'В чём измеряют объём?', 'What measures volume?'), o: ['cm³', 'cm²', 'cm'], a: 0 }] },

        { id: 't17', lessons: pg(120, 128), title: L('Kuboid va kubning hajmi. cm³ va m³', 'Объём параллелепипеда и куба. см³ и м³', 'Volume of cuboids and cubes. cm³ and m³'),
          keys: ['V = a · b · c', 'V = a · a · a', '1 m³ = 1 000 000 cm³'],
          scene: [{ obj: 'box', n: 1, color: 'orange' }, { obj: 'cube', n: 1, color: 'yellow' }],
          explain: L('Kuboid hajmi V = a · b · c, kub hajmi V = a · a · a. 1 cm³ — qirrasi 1 cm bo‘lgan kub. 1 m³ = 100 · 100 · 100 = 1 000 000 cm³ — juda katta!',
            'Объём параллелепипеда V = a · b · c, куба V = a · a · a. 1 см³ — куб с ребром 1 см. 1 м³ = 100 · 100 · 100 = 1 000 000 см³ — очень много!',
            'A cuboid’s volume is V = a · b · c, a cube’s V = a · a · a. 1 cm³ is a cube with 1 cm edges. 1 m³ = 100 · 100 · 100 = 1 000 000 cm³ — a lot!'),
          rule: 'V = a · b · c',
          acts: [
            { type: 'drill', n: 6, make: function (R) { var a = R(2, 15), b = R(2, 12), c = R(2, 10); return R(0, 2) ? { q: 'V = ' + a + ' · ' + b + ' · ' + c, a: a * b * c } : { q: mk(function (l) { return { uz: 'Kub, a = ', ru: 'Куб, a = ', en: 'Cube, a = ' }[l] + c + '; V'; }), a: c * c * c }; } },
            { type: 'problem', title: L('Noma’lum qirra', 'Неизвестное ребро', 'Missing edge'), make: function (R) { var a = R(3, 12), b = R(2, 10), c = R(2, 9); return { story: L('Kuboid hajmi <b>' + a * b * c + '</b> cm³, uzunligi <b>' + a + '</b> cm, eni <b>' + b + '</b> cm. <u>Balandligi</u>?', 'Объём параллелепипеда <b>' + a * b * c + '</b> см³, длина <b>' + a + '</b> см, ширина <b>' + b + '</b> см. <u>Высота</u>?', 'A cuboid has volume <b>' + a * b * c + '</b> cm³, length <b>' + a + '</b> cm and width <b>' + b + '</b> cm. <u>Height</u>?'), expr: [a * b * c, ':', a * b, '=', c], ans: c, unit: H.CM }; } }
          ],
          quiz: [{ q: 'V, 5 × 4 × 3 = ?', o: ['60', '12', '47'], a: 0 }, { q: '1 m³ = ? cm³', o: ['1000000', '1000', '100'], a: 0 }] },

        { id: 't18', lessons: pg(129, 138), title: L('Suyuqlik hajmi. Matnli masalalar', 'Объём жидкости. Текстовые задачи', 'Volume of liquids. Word problems'),
          keys: ['1 l = 1 000 cm³', '1 ml = 1 cm³', '1 m³ = 1 000 l'],
          scene: [{ obj: 'bucket', n: 2, color: 'blue' }],
          explain: L('Suyuqlik hajmini litr va millilitrda ham o‘lchaymiz: 1 l = 1 000 ml = 1 000 cm³. 50 × 30 × 40 cm akvariumga 60 000 cm³ = 60 l suv sig‘adi.',
            'Объём жидкости измеряют и в литрах, и в миллилитрах: 1 л = 1 000 мл = 1 000 см³. В аквариум 50 × 30 × 40 см помещается 60 000 см³ = 60 л воды.',
            'Liquid volume is also measured in litres and millilitres: 1 l = 1 000 ml = 1 000 cm³. A 50 × 30 × 40 cm tank holds 60 000 cm³ = 60 l of water.'),
          rule: '1 l = 1 000 cm³',
          acts: [
            { type: 'problem', title: L('Akvarium', 'Аквариум', 'Fish tank'), make: function (R) { var a = R(3, 8) * 10, b = R(2, 5) * 10, c = R(2, 5) * 10, v = a * b * c; return { story: L('Akvarium o‘lchamlari <b>' + a + ' × ' + b + ' × ' + c + '</b> cm. Unga <u>necha litr</u> suv sig‘adi? (V = ' + fmt(v) + ' cm³)', 'Аквариум <b>' + a + ' × ' + b + ' × ' + c + '</b> см. <u>Сколько литров</u> воды в него войдёт? (V = ' + fmt(v) + ' см³)', 'A tank measures <b>' + a + ' × ' + b + ' × ' + c + '</b> cm. <u>How many litres</u> does it hold? (V = ' + fmt(v) + ' cm³)'), expr: [v, ':', 1000, '=', v / 1000], ans: v / 1000, unit: LT }; } },
            { type: 'drill', title: L('Aylantiring', 'Переведите', 'Convert'), n: 6, make: function (R) { var x = R(1, 9), y = R(1, 99) * 10; return pick([{ q: mk(function (l) { return x + { uz: ' l = ? cm³', ru: ' л = ? см³', en: ' l = ? cm³' }[l]; }), a: x * 1000 }, { q: mk(function (l) { return fmt(x * 1000 + y) + { uz: ' ml = ? cm³', ru: ' мл = ? см³', en: ' ml = ? cm³' }[l]; }), a: x * 1000 + y }, { q: mk(function (l) { return x + { uz: ' m³ = ? l', ru: ' м³ = ? л', en: ' m³ = ? l' }[l]; }), a: x * 1000 }]); } }
          ],
          quiz: [{ q: '3 l = ? cm³', o: ['3000', '300', '30'], a: 0 }, { q: L('20 × 10 × 10 cm idishga necha litr?', 'Сколько литров в сосуде 20 × 10 × 10 см?', 'Litres in a 20 × 10 × 10 cm box?'), o: ['2', '20', '200'], a: 0 }] }
      ] },

      { id: 's6', title: L('Nisbatlar', 'Отношения', 'Ratios'), icon: '⚖️', color: 'violet', topics: [
        { id: 't19', lessons: pg(140, 154), title: L('Nisbat tushunchasi. Teng kuchli nisbatlar', 'Понятие отношения. Равные отношения', 'Ratios. Equivalent ratios'),
          keys: ['a : b', L('qisqartirish', 'сокращение', 'simplifying')],
          scene: [{ obj: 'ball', n: 2, color: 'blue' }, { obj: 'ball', n: 3, color: 'pink' }],
          explain: L('Savatda 2 ta ko‘k va 3 ta qizil to‘p bor: ko‘klarning qizillarga <b>nisbati</b> 2 : 3. Nisbatning ikkala hadini bir xil songa ko‘paytirsak yoki bo‘lsak, <b>teng kuchli</b> nisbat hosil bo‘ladi: 2 : 3 = 4 : 6 = 10 : 15. 12 : 18 = 2 : 3 — eng sodda ko‘rinish.',
            'В корзине 2 синих и 3 красных мяча: <b>отношение</b> синих к красным 2 : 3. Если оба члена умножить или разделить на одно число, получим <b>равное</b> отношение: 2 : 3 = 4 : 6 = 10 : 15. 12 : 18 = 2 : 3 — простейший вид.',
            'A basket has 2 blue and 3 red balls: the <b>ratio</b> of blue to red is 2 : 3. Multiplying or dividing both terms by the same number gives an <b>equivalent</b> ratio: 2 : 3 = 4 : 6 = 10 : 15. 12 : 18 = 2 : 3 is the simplest form.'),
          rule: 'a : b = (a · k) : (b · k)',
          acts: [
            { type: 'drill', title: L('Teng kuchli nisbat', 'Равное отношение', 'Equivalent ratio'), n: 6, make: function (R) { var a = R(1, 9), b = R(1, 9), k = R(2, 9); while (b === a) b = R(1, 9); return R(0, 1) ? { q: a + ' : ' + b + ' = ' + a * k + ' : □;  □', a: b * k } : { q: (a * k) + ' : ' + (b * k) + ' = ' + a + ' : □;  □', a: b }; } },
            { type: 'choose', title: L('Eng sodda ko‘rinish', 'Простейший вид', 'Simplest form'), icon: '✂️', make: function (R) { var a = R(1, 7), b = R(2, 9); while (gcd(a, b) !== 1) b = R(2, 9); var k = R(2, 8); return choice('<span class="kd-big">' + a * k + ' : ' + b * k + ' = ?</span>', [a + ' : ' + b, b + ' : ' + a, (a + 1) + ' : ' + b], 0); } },
            { type: 'count3d', title: L('3D: nisbatni toping', '3D: найдите отношение', '3D: find the ratio'), make: function (R) { var a = R(2, 5), b = R(2, 6); return { groups: [{ obj: 'ball', n: a, color: 'blue' }, { obj: 'ball', n: b, color: 'pink' }], perRow: 6, story: L('Ko‘k to‘plar <b>' + a + '</b> ta. Pushti to‘plar <u>nechta</u>? (nisbat ' + a + ' : ?)', 'Синих мячей <b>' + a + '</b>. <u>Сколько</u> розовых? (отношение ' + a + ' : ?)', 'There are <b>' + a + '</b> blue balls. <u>How many</u> pink? (ratio ' + a + ' : ?)'), ans: b, unit: PCS }; } }
          ],
          quiz: [{ q: '12 : 18 = 2 : ?', o: ['3', '6', '9'], a: 0 }, { q: '2 : 5 = ? : 20', o: ['8', '17', '10'], a: 0 }] },

        { id: 't20', lessons: pg(155, 164), title: L('Nisbat bo‘yicha miqdorlarni topish', 'Нахождение величин по отношению', 'Finding amounts from a ratio'),
          keys: [L('bir ulush', 'одна часть', 'one share'), L('jami', 'всего', 'total')],
          scene: [{ obj: 'apple', n: 3, color: 'red' }, { obj: 'apple', n: 5, color: 'green' }],
          explain: L('Olma va nok 3 : 5 nisbatda, jami 40 ta. Ulushlar soni 3 + 5 = 8, bir ulush 40 : 8 = 5. Olma 3 · 5 = 15, nok 5 · 5 = 25. Agar faqat olma 15 ta ekani ma’lum bo‘lsa: bir ulush 15 : 3 = 5, nok 5 · 5 = 25.',
            'Яблоки и груши в отношении 3 : 5, всего 40. Частей 3 + 5 = 8, одна часть 40 : 8 = 5. Яблок 3 · 5 = 15, груш 5 · 5 = 25. Если известно только, что яблок 15: одна часть 15 : 3 = 5, груш 5 · 5 = 25.',
            'Apples and pears are in the ratio 3 : 5, 40 in all. There are 3 + 5 = 8 shares, one share is 40 : 8 = 5. Apples 3 · 5 = 15, pears 5 · 5 = 25. If we only know there are 15 apples: one share is 15 : 3 = 5, pears 5 · 5 = 25.'),
          rule: L('jami : ulushlar soni = bir ulush', 'всего : число частей = одна часть', 'total : number of shares = one share'),
          acts: [
            { type: 'problem', title: L('Jami ma’lum', 'Известно всего', 'Total known'), make: function (R) { var a = R(1, 5), b = R(2, 7), u = R(2, 12); while (b === a) b = R(2, 7); var T = (a + b) * u; return { story: L('Sinfdagi o‘g‘il va qiz bolalar soni <b>' + a + ' : ' + b + '</b> nisbatda, jami <b>' + T + '</b> nafar. <u>Qizlar</u> necha nafar?', 'Мальчики и девочки в классе в отношении <b>' + a + ' : ' + b + '</b>, всего <b>' + T + '</b>. <u>Сколько девочек</u>?', 'Boys and girls in a class are in the ratio <b>' + a + ' : ' + b + '</b>, <b>' + T + '</b> in all. <u>How many girls</u>?'), expr: [T, ':', a + b, '·', b, '=', b * u], ans: b * u, unit: L('nafar', 'чел.', 'girls') }; } },
            { type: 'problem', title: L('Bitta miqdor ma’lum', 'Известна одна величина', 'One amount known'), make: function (R) { var a = R(2, 6), b = R(2, 9), u = R(2, 15); while (b === a) b = R(2, 9); return { story: L('Sharbatda olma va uzum sharbati <b>' + a + ' : ' + b + '</b> nisbatda. Olma sharbati <b>' + a * u + '</b> ml. <u>Uzum sharbati</u> necha ml?', 'В соке яблочный и виноградный в отношении <b>' + a + ' : ' + b + '</b>. Яблочного <b>' + a * u + '</b> мл. <u>Сколько мл виноградного</u>?', 'A drink mixes apple and grape juice in the ratio <b>' + a + ' : ' + b + '</b>. There is <b>' + a * u + '</b> ml of apple. <u>How much grape</u>?'), expr: [a * u, ':', a, '·', b, '=', b * u], ans: b * u, unit: L('ml', 'мл', 'ml') }; } }
          ],
          quiz: [{ q: L('3 : 5 nisbat, jami 40. Kichik qism?', 'Отношение 3 : 5, всего 40. Меньшая часть?', 'Ratio 3 : 5, total 40. Smaller part?'), o: ['15', '25', '8'], a: 0 }, { q: L('2 : 3 nisbat, birinchisi 10. Ikkinchisi?', 'Отношение 2 : 3, первое 10. Второе?', 'Ratio 2 : 3, the first is 10. The second?'), o: ['15', '5', '30'], a: 0 }] },

        { id: 't21', lessons: pg(165, 172), title: L('Uchta miqdorning nisbati', 'Отношение трёх величин', 'Ratios of three amounts'),
          keys: ['a : b : c', L('ulushlar yig‘indisi', 'сумма частей', 'sum of shares')],
          scene: [{ obj: 'cube', n: 2, color: 'blue' }, { obj: 'cube', n: 3, color: 'green' }, { obj: 'cube', n: 4, color: 'orange' }],
          explain: L('Uch aka-uka 90 ta yong‘oqni 2 : 3 : 4 nisbatda bo‘lishdi. Ulushlar 2 + 3 + 4 = 9, bir ulush 90 : 9 = 10. Ular 20, 30 va 40 tadan oldi. Tekshiramiz: 20 + 30 + 40 = 90 ✓',
            'Три брата разделили 90 орехов в отношении 2 : 3 : 4. Частей 2 + 3 + 4 = 9, одна часть 90 : 9 = 10. Они получили 20, 30 и 40. Проверка: 20 + 30 + 40 = 90 ✓',
            'Three brothers shared 90 nuts in the ratio 2 : 3 : 4. There are 2 + 3 + 4 = 9 shares, one share is 90 : 9 = 10. They got 20, 30 and 40. Check: 20 + 30 + 40 = 90 ✓'),
          rule: L('bir ulush = jami : (a + b + c)', 'одна часть = всего : (a + b + c)', 'one share = total : (a + b + c)'),
          acts: [
            { type: 'problem', make: function (R) { var a = R(1, 4), b = R(2, 5), c = R(3, 7), u = R(2, 12), T = (a + b + c) * u, who = R(0, 2), part = [a, b, c][who]; return { story: mk(function (l) { var nm = { uz: ['Anvar', 'Bobur', 'Dilnoza'], ru: ['Анвар', 'Бобур', 'Дильноза'], en: ['Anvar', 'Bobur', 'Dilnoza'] }[l][who]; return { uz: '<b>' + T + '</b> ta qalam uch bolaga <b>' + a + ' : ' + b + ' : ' + c + '</b> nisbatda bo‘lindi (Anvar, Bobur, Dilnoza). <u>' + nm + '</u> nechta oldi?', ru: '<b>' + T + '</b> карандашей разделили между тремя детьми в отношении <b>' + a + ' : ' + b + ' : ' + c + '</b> (Анвар, Бобур, Дильноза). <u>Сколько получил(а) ' + nm + '</u>?', en: '<b>' + T + '</b> pencils were shared among three children in the ratio <b>' + a + ' : ' + b + ' : ' + c + '</b> (Anvar, Bobur, Dilnoza). <u>How many did ' + nm + ' get</u>?' }[l]; }), expr: [T, ':', a + b + c, '·', part, '=', part * u], ans: part * u, unit: PCS }; } },
            { type: 'drill', title: L('Bir ulush', 'Одна часть', 'One share'), n: 5, make: function (R) { var a = R(1, 5), b = R(1, 5), c = R(1, 5), u = R(2, 20); return { q: mk(function (l) { return a + ' : ' + b + ' : ' + c + ', ' + { uz: 'jami ', ru: 'всего ', en: 'total ' }[l] + (a + b + c) * u + '; ' + { uz: '1 ulush', ru: '1 часть', en: '1 share' }[l]; }), a: u }; } }
          ],
          quiz: [{ q: L('2 : 3 : 4, jami 90. Eng katta qism?', '2 : 3 : 4, всего 90. Наибольшая часть?', '2 : 3 : 4, total 90. Largest part?'), o: ['40', '30', '45'], a: 0 }, { q: L('1 : 1 : 2, jami 20. Uchinchisi?', '1 : 1 : 2, всего 20. Третья часть?', '1 : 1 : 2, total 20. The third?'), o: ['10', '5', '20'], a: 0 }] }
      ] }
    ]
  };
  C.addPart(part1);
})(this);
