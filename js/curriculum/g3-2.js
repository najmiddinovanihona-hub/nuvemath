// Nuvemath — 3-sinf, II qism (manba: I.V. Repyova, «Matematika. 3-sinf. II qism», Toshkent, 2023).
// Mavzular tartibi va nomlari darslikdan olingan; tushuntirishlar, topshiriqlar va rasmlar Nuvemath uchun qayta yozilgan.
(function (root) {
  'use strict';
  var C = root.NMCurriculum, H = C.H, L = H.L, mk = H.mk, PCS = H.PCS, choice = H.choice, pick = H.pick;
  var CM = H.CM, CM2 = L('cm²', 'см²', 'cm²');

  var part2 = {
    grade: 3, part: 2, edition: L('2023-yil nashri', 'Издание 2023 г.', '2023 edition'),
    title: L('Bo‘lish, perimetr va yuz', 'Деление, периметр и площадь', 'Division, perimeter and area'),
    book: L('I.V. Repyova. Matematika, 3-sinf, II qism (Toshkent, 2023)', 'И.В. Репьева. Математика, 3 класс, часть II (Ташкент, 2023)', 'I.V. Repyova. Mathematics, Grade 3, Part II (Tashkent, 2023)'),
    intro: L('Bu qismda qoldiqli bo‘lish va burchakli (ustunda) bo‘lishni, bo‘luvchilar va karralilarni o‘rganamiz. So‘ng turli shakllarning perimetri va yuzini topamiz.',
      'В этой части изучим деление с остатком и деление уголком, делители и кратные. Потом найдём периметр и площадь разных фигур.',
      'In this part we learn division with remainders and long division, factors and multiples, and then find the perimeter and area of different shapes.'),
    sections: [
      { id: 's1', title: L('Bir xonali songa bo‘lish', 'Деление на однозначное число', 'Dividing by a one-digit number'), icon: '➗', color: 'green', topics: [
        { id: 't1', lessons: L('40–41-darslar', 'Уроки 40–41', 'Lessons 40–41'), title: L('Yig‘indini songa bo‘lish. Ikki xonali sonni bo‘lish', 'Деление суммы на число. Деление двузначного числа', 'Dividing a sum. Dividing a two-digit number'),
          keys: ['(a + b) : c = a : c + b : c'],
          scene: [{ obj: 'rod', n: 4, color: 'orange' }, { obj: 'unit', n: 8, color: 'blue' }],
          explain: L('48 : 4 ni qulay yig‘indiga ajratib bo‘lamiz: 48 = 40 + 8, demak 48 : 4 = 40 : 4 + 8 : 4 = 10 + 2 = <b>12</b>.',
            '48 : 4 удобно разделить, разложив число на сумму: 48 = 40 + 8, значит 48 : 4 = 40 : 4 + 8 : 4 = 10 + 2 = <b>12</b>.',
            'Split 48 into a handy sum to divide by 4: 48 = 40 + 8, so 48 : 4 = 40 : 4 + 8 : 4 = 10 + 2 = <b>12</b>.'),
          rule: '(a + b) : c = a : c + b : c',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var k = R(2, 4), q = R(11, Math.floor(99 / k)); return { q: (k * q) + ' : ' + k, a: q }; } },
            { type: 'chain', title: L('Qismlarga bo‘lib', 'По частям', 'In parts'), make: function (R) { var k = R(2, 4), t = R(1, 2), u = R(1, 4); return { start: t * 10 * k, ops: [['+', u * k]] }; } }
          ],
          quiz: [{ q: '84 : 4 = ?', o: ['21', '20', '24'], a: 0 }, { q: '96 : 3 = ?', o: ['32', '31', '33'], a: 0 }] },

        { id: 't2', lessons: L('42–43-darslar', 'Уроки 42–43', 'Lessons 42–43'), title: L('Qoldiq. Qoldiqli bo‘lish', 'Остаток. Деление с остатком', 'Remainders. Division with a remainder'),
          keys: [L('qoldiq', 'остаток', 'remainder'), L('qoldiq < bo‘luvchi', 'остаток < делителя', 'remainder < divisor')],
          scene: [{ obj: 'apple', n: 3, color: 'red' }, { obj: 'apple', n: 3, color: 'red' }, { obj: 'apple', n: 1, color: 'green' }],
          explain: L('Har doim ham teng bo‘lib bo‘lmaydi: 7 ta olmani 2 kishiga bo‘lsak, har biriga 3 tadan, 1 tasi ortadi. 7 : 2 = 3 (qoldiq 1). Qoldiq doim <b>bo‘luvchidan kichik</b> bo‘ladi!',
            'Не всегда делится поровну: 7 яблок на двоих — каждому по 3, одно остаётся. 7 : 2 = 3 (ост. 1). Остаток всегда <b>меньше делителя</b>!',
            'Things don’t always share equally: 7 apples between 2 people gives 3 each with 1 left over. 7 : 2 = 3 (remainder 1). The remainder is always <b>less than the divisor</b>!'),
          rule: L('a = b · q + r, r < b', 'a = b · q + r, r < b', 'a = b · q + r, r < b'),
          acts: [
            { type: 'count3d', title: L('3D: nechtasi ortadi?', '3D: сколько останется?', '3D: how many left over?'), make: function (R) { var k = R(2, 3), q = R(2, 3), r = R(1, k - 1), g = []; for (var i = 0; i < k; i++) g.push({ obj: 'apple', n: q, color: 'red' }); g.push({ obj: 'apple', n: r, color: 'green' });
              return { groups: g, perRow: 2, story: L('<b>' + (k * q + r) + '</b> ta olma <b>' + k + '</b> ta savatga teng solinsa, har biriga ' + q + ' tadan tushdi. <b>Nechta olma ortib qoldi</b>?', '<b>' + (k * q + r) + '</b> яблок разложили в <b>' + k + '</b> корзины, в каждую по ' + q + '. <b>Сколько яблок осталось</b>?', '<b>' + (k * q + r) + '</b> apples went into <b>' + k + '</b> baskets, ' + q + ' in each. <b>How many are left over</b>?'), expr: [k * q + r, '−', k * q, '=', r], ans: r, unit: PCS }; } },
            { type: 'drill', title: L('Qoldiqni toping', 'Найдите остаток', 'Find the remainder'), n: 8, make: function (R) { var b = R(2, 9), q = R(1, 9), r = R(1, b - 1); return { q: mk(function (l) { return (b * q + r) + ' : ' + b + ' = ' + q + ' (' + { uz: 'qoldiq', ru: 'ост.', en: 'rem.' }[l] + ' ?)'; }), a: r }; } }
          ],
          quiz: [{ q: L('17 : 5 = 3 (qoldiq ?)', '17 : 5 = 3 (ост. ?)', '17 : 5 = 3 (rem. ?)'), o: ['2', '3', '5'], a: 0 }, { q: L('7 ga bo‘lganda eng katta qoldiq?', 'Наибольший остаток при делении на 7?', 'Largest remainder when dividing by 7?'), o: ['6', '7', '1'], a: 0 }] },

        { id: 't3', lessons: L('44–47-darslar', 'Уроки 44–47', 'Lessons 44–47'), title: L('Burchakli bo‘lish', 'Деление уголком', 'Long division'),
          keys: [L('burchak', 'уголок', 'bracket'), L('to‘liqsiz bo‘linuvchi', 'неполное делимое', 'partial dividend')],
          scene: [{ obj: 'flat', n: 2, color: 'green' }, { obj: 'rod', n: 5, color: 'orange' }],
          explain: L('252 : 4 ni burchakli bo‘lamiz: 2 ni 4 ga bo‘lib bo‘lmaydi, shuning uchun 25 ni olamiz: 25 : 4 = 6 (qoldiq 1). 1 ni pastga tushirilgan 2 bilan qo‘shib 12 hosil qilamiz: 12 : 4 = 3. Javob: <b>63</b>.',
            'Делим 252 : 4 уголком: 2 на 4 не делится, берём 25: 25 : 4 = 6 (ост. 1). Сносим 2, получаем 12: 12 : 4 = 3. Ответ: <b>63</b>.',
            'Long-divide 252 : 4: 2 won’t divide by 4, so take 25: 25 : 4 = 6 (remainder 1). Bring down the 2 to make 12: 12 : 4 = 3. Answer: <b>63</b>.'),
          rule: L('Bo‘l → ko‘paytir → ayir → pastga tushir', 'Дели → умножай → вычитай → сноси', 'Divide → multiply → subtract → bring down'),
          acts: [
            { type: 'drill', title: L('Burchakli bo‘ling', 'Разделите уголком', 'Long division'), n: 8, make: function (R) { var k = R(2, 9), q = R(12, 99); return { q: (k * q) + ' : ' + k, a: q }; } },
            { type: 'problem', make: function (R) { var k = R(3, 8), q = R(15, 60); return { story: L('<b>' + k * q + '</b> ta kitobni <b>' + k + '</b> ta javonga teng joylashtirishdi. <u>Har bir javonda nechta</u>?', '<b>' + k * q + '</b> книг расставили поровну на <b>' + k + '</b> полок. <u>Сколько на каждой</u>?', '<b>' + k * q + '</b> books were shared equally across <b>' + k + '</b> shelves. <u>How many on each</u>?'), expr: [k * q, ':', k, '=', q], ans: q, unit: PCS }; } }
          ],
          quiz: [{ q: '156 : 4 = ?', o: ['39', '38', '41'], a: 0 }, { q: '378 : 6 = ?', o: ['63', '62', '68'], a: 0 }] },

        { id: 't4', lessons: L('48–51-darslar', 'Уроки 48–51', 'Lessons 48–51'), title: L('Ko‘p xonali sonlarni bo‘lish. Nolli sonlar', 'Деление многозначных чисел. Числа с нулями', 'Dividing large numbers. Numbers with zeros'),
          keys: ['1 206 : 3', '4 800 : 6'],
          scene: [{ obj: 'flat', n: 4, color: 'green' }],
          explain: L('O‘rtasida 0 bo‘lgan sonni bo‘lishda bo‘linmada ham 0 paydo bo‘lishi mumkin: 618 : 3 = 206. 0 bilan tugagan sonni bo‘lganda nolni chetga qo‘yamiz: 4 800 : 6 = 48 : 6 · 100 = 800.',
            'При делении числа с нулём в середине в частном тоже может появиться 0: 618 : 3 = 206. Нули на конце отложим: 4 800 : 6 = 48 : 6 · 100 = 800.',
            'When a number has a zero in the middle, the answer may have a zero too: 618 : 3 = 206. With trailing zeros, set them aside: 4 800 : 6 = 48 : 6 · 100 = 800.'),
          rule: '618 : 3 = 206 · 4 800 : 6 = 800',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var k = R(2, 9), q = R(1, 9) * 100 + R(1, 9), z = R(2, 9) * 100; return pick([{ q: (k * q) + ' : ' + k, a: q }, { q: (k * z) + ' : ' + k, a: z }]); } },
            { type: 'problem', make: function (R) { var k = R(2, 4), q = R(101, 209), n = k * q; return { story: L('<b>' + n + '</b> kg olma <b>' + k + '</b> ta do‘konga teng taqsimlandi. <u>Har biriga</u> necha kg?', '<b>' + n + '</b> кг яблок поровну раздали <b>' + k + '</b> магазинам. <u>Сколько кг каждому</u>?', '<b>' + n + '</b> kg of apples were shared equally among <b>' + k + '</b> shops. <u>How many kg each</u>?'), expr: [n, ':', k, '=', q], ans: q, unit: H.KG }; } }
          ],
          quiz: [{ q: '816 : 4 = ?', o: ['204', '24', '214'], a: 0 }, { q: '3 600 : 9 = ?', o: ['400', '40', '4000'], a: 0 }] },

        { id: 't5', lessons: L('52–53-darslar', 'Уроки 52–53', 'Lessons 52–53'), title: L('Bo‘lishning geometrik ma’nosi. Masalalar', 'Геометрический смысл деления. Задачи', 'Division as area. Problems'),
          keys: ['S : a = b'],
          scene: [{ obj: 'box', n: 1, color: 'cyan' }],
          explain: L('Agar to‘g‘ri to‘rtburchak yuzi va bir tomoni ma’lum bo‘lsa, ikkinchi tomonni bo‘lish bilan topamiz: S = 48 cm², a = 8 cm → b = 48 : 8 = 6 cm.',
            'Если известны площадь прямоугольника и одна сторона, другую найдём делением: S = 48 см², a = 8 см → b = 48 : 8 = 6 см.',
            'If we know a rectangle’s area and one side, we find the other side by dividing: S = 48 cm², a = 8 cm → b = 48 : 8 = 6 cm.'),
          rule: 'b = S : a',
          acts: [
            { type: 'problem', make: function (R) { var a = R(3, 12), b = R(2, 9); return { story: L('To‘g‘ri to‘rtburchak yuzi <b>' + a * b + '</b> cm², bo‘yi <b>' + a + '</b> cm. <u>Eni</u> necha cm?', 'Площадь прямоугольника <b>' + a * b + '</b> см², длина <b>' + a + '</b> см. <u>Какова ширина</u>?', 'A rectangle’s area is <b>' + a * b + '</b> cm² and its length is <b>' + a + '</b> cm. <u>What is its width</u>?'), expr: [a * b, ':', a, '=', b], ans: b, unit: CM }; } },
            { type: 'grid', make: function (R) { var a = R(3, 9), b = R(2, 6); return { a: a, b: b, ask: 'area', ans: a * b, unit: CM2, story: L('Har bir katak — 1 cm². <b>Yuz</b>?', 'Каждая клетка — 1 см². <b>Площадь</b>?', 'Each square is 1 cm². <b>Area</b>?') }; } }
          ],
          quiz: [{ q: L('S = 48 cm², b = 6 cm. a = ?', 'S = 48 см², b = 6 см. a = ?', 'S = 48 cm², b = 6 cm. a = ?'), o: ['8', '42', '54'], a: 0 }, { q: L('S = 56 cm², a = 7 cm. b = ?', 'S = 56 см², a = 7 см. b = ?', 'S = 56 cm², a = 7 cm. b = ?'), o: ['8', '49', '63'], a: 0 }] }
      ] },

      { id: 's2', title: L('Ko‘p xonali songa bo‘lish', 'Деление на многозначное число', 'Dividing by larger numbers'), icon: '🧮', color: 'blue', topics: [
        { id: 't6', lessons: L('54–55-darslar', 'Уроки 54–55', 'Lessons 54–55'), title: L('Ikki xonali songa burchakli bo‘lish', 'Деление уголком на двузначное число', 'Long division by a two-digit number'),
          keys: [L('bo‘linmani tanlash', 'подбор частного', 'estimating the quotient')],
          scene: [{ obj: 'rod', n: 6, color: 'orange' }],
          explain: L('Ikki xonali songa bo‘lishda bo‘linmani tanlab topamiz: 96 : 24 — 24 ni nechaga ko‘paytirsak 96 chiqadi? 24 · 4 = 96, demak <b>4</b>. Tekshirish doim ko‘paytirish bilan!',
            'При делении на двузначное число частное подбираем: 96 : 24 — на что умножить 24, чтобы получить 96? 24 · 4 = 96, значит <b>4</b>. Проверяем умножением!',
            'When dividing by a two-digit number we estimate: 96 : 24 — what times 24 makes 96? 24 · 4 = 96, so <b>4</b>. Always check by multiplying!'),
          rule: '96 : 24 = 4 ↔ 24 · 4 = 96',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var d = R(11, 49), q = R(2, 9); return { q: (d * q) + ' : ' + d, a: q }; } },
            { type: 'problem', make: function (R) { var d = R(12, 25), q = R(3, 9); return { story: L('<b>' + d * q + '</b> ta daftar <b>' + d + '</b> tadan pachkalarga joylandi. <u>Nechta pachka</u> bo‘ldi?', '<b>' + d * q + '</b> тетрадей разложили в пачки по <b>' + d + '</b>. <u>Сколько пачек</u>?', '<b>' + d * q + '</b> notebooks were packed <b>' + d + '</b> to a pack. <u>How many packs</u>?'), expr: [d * q, ':', d, '=', q], ans: q, unit: H.PCS }; } }
          ],
          quiz: [{ q: '75 : 25 = ?', o: ['3', '4', '50'], a: 0 }, { q: '168 : 12 = ?', o: ['14', '13', '16'], a: 0 }] },

        { id: 't7', lessons: L('56–58-darslar', 'Уроки 56–58', 'Lessons 56–58'), title: L('Uch xonali songa burchakli bo‘lish', 'Деление уголком на трёхзначное число', 'Long division by a three-digit number'),
          keys: ['2 460 : 123'],
          scene: [{ obj: 'flat', n: 5, color: 'green' }],
          explain: L('Uch xonali songa bo‘lish ham xuddi shu tartibda: bo‘l, ko‘paytir, ayir, pastga tushir. 1 476 : 123 → 123 · 12 = 1 476, demak <b>12</b>.',
            'Деление на трёхзначное число — в том же порядке: дели, умножай, вычитай, сноси. 1 476 : 123 → 123 · 12 = 1 476, значит <b>12</b>.',
            'Dividing by a three-digit number follows the same steps: divide, multiply, subtract, bring down. 1 476 : 123 → 123 · 12 = 1 476, so <b>12</b>.'),
          rule: L('Tekshirish: bo‘linma · bo‘luvchi = bo‘linuvchi', 'Проверка: частное · делитель = делимое', 'Check: quotient · divisor = dividend'),
          acts: [
            { type: 'drill', n: 6, make: function (R) { var d = R(101, 250), q = R(2, 15); return { q: (d * q) + ' : ' + d, a: q }; } },
            { type: 'problem', make: function (R) { var d = R(11, 25) * 10, q = R(2, 9); return { story: L('<b>' + d * q + '</b> kg yuk <b>' + d + '</b> kg dan qoplarga solindi. <u>Nechta qop</u> kerak bo‘ldi?', '<b>' + d * q + '</b> кг груза разложили в мешки по <b>' + d + '</b> кг. <u>Сколько мешков</u>?', '<b>' + d * q + '</b> kg of cargo went into <b>' + d + '</b> kg sacks. <u>How many sacks</u>?'), expr: [d * q, ':', d, '=', q], ans: q, unit: H.PCS }; } }
          ],
          quiz: [{ q: '600 : 150 = ?', o: ['4', '5', '450'], a: 0 }, { q: '2 400 : 200 = ?', o: ['12', '120', '2200'], a: 0 }] },

        { id: 't8', lessons: L('59–61-darslar', 'Уроки 59–61', 'Lessons 59–61'), title: L('Bo‘luvchilar va karralilar. Amaliy topshiriqlar', 'Делители и кратные. Практические задания', 'Factors and multiples. Practice'),
          keys: [L('bo‘luvchi', 'делитель', 'factor'), L('karrali', 'кратное', 'multiple')],
          scene: [{ obj: 'cube', n: 6, color: 'violet' }, { obj: 'cube', n: 6, color: 'violet' }],
          explain: L('Agar a son b ga qoldiqsiz bo‘linsa, b — a ning <b>bo‘luvchisi</b>, a esa b ga <b>karrali</b>. 12 ning bo‘luvchilari: 1, 2, 3, 4, 6, 12.',
            'Если a делится на b без остатка, то b — <b>делитель</b> a, а a — <b>кратное</b> b. Делители 12: 1, 2, 3, 4, 6, 12.',
            'If a divides by b exactly, b is a <b>factor</b> of a and a is a <b>multiple</b> of b. The factors of 12 are 1, 2, 3, 4, 6, 12.'),
          rule: L('12 ning bo‘luvchilari: 1, 2, 3, 4, 6, 12', 'Делители 12: 1, 2, 3, 4, 6, 12', 'Factors of 12: 1, 2, 3, 4, 6, 12'),
          acts: [
            { type: 'choose', title: L('Bo‘luvchimi?', 'Делитель?', 'A factor?'), icon: '🔍', make: function (R) { var n = pick([12, 18, 20, 24, 30, 36, 40, 48]), d = R(2, 9); return choice(mk(function (l) { return '<span class="kd-big">' + d + '</span> — ' + { uz: n + ' ning bo‘luvchisimi?', ru: 'делитель числа ' + n + '?', en: 'a factor of ' + n + '?' }[l]; }), [L('ha', 'да', 'yes'), L('yo‘q', 'нет', 'no')], n % d === 0 ? 0 : 1); } },
            { type: 'order', title: L('Karralilarni tartiblang', 'Расставьте кратные', 'Order the multiples'), make: function (R) { var k = R(3, 9), xs = H.distinct(R, 4, 1, 10).map(function (x) { return x * k; }).sort(function (a, b) { return a - b; }); return { story: L(k + ' ga karrali sonlarni kichigidan kattasiga bosing.', 'Нажимайте на числа, кратные ' + k + ', по возрастанию.', 'Tap the multiples of ' + k + ' from smallest to largest.'), items: xs.map(String), sep: '<span class="kd-arr">&lt;</span>' }; } }
          ],
          quiz: [{ q: L('Qaysi biri 30 ning bo‘luvchisi?', 'Какое число — делитель 30?', 'Which is a factor of 30?'), o: ['5', '4', '7'], a: 0 }, { q: L('Qaysi biri 6 ga karrali?', 'Какое число кратно 6?', 'Which is a multiple of 6?'), o: ['42', '32', '16'], a: 0 }] }
      ] },

      { id: 's3', title: L('Perimetr va yuz', 'Периметр и площадь', 'Perimeter and area'), icon: '📐', color: 'cyan', topics: [
        { id: 't9', lessons: L('62-dars', 'Урок 62', 'Lesson 62'), title: L('Kesmani teng bo‘laklarga bo‘lish', 'Деление отрезка на равные части', 'Splitting a segment equally'),
          keys: [L('teng bo‘laklar', 'равные части', 'equal parts')],
          scene: [{ obj: 'pencil', n: 3, color: 'orange' }],
          explain: L('12 cm li kesmani 3 ta teng bo‘lakka bo‘lsak, har bir bo‘lak 12 : 3 = <b>4 cm</b>. Bo‘lish — teng bo‘laklarga ajratish!',
            'Если отрезок 12 см разделить на 3 равные части, каждая будет 12 : 3 = <b>4 см</b>. Деление — это разбиение на равные части!',
            'Split a 12 cm segment into 3 equal parts and each part is 12 : 3 = <b>4 cm</b>. Division means splitting into equal parts!'),
          rule: L('bo‘lak = uzunlik : bo‘laklar soni', 'часть = длина : число частей', 'part = length : number of parts'),
          acts: [
            { type: 'numline', title: L('Teng qadamlar', 'Равные шаги', 'Equal steps'), make: function (R) { var k = R(2, 5), s = R(2, 5), len = k * s; var j = [0]; for (var i = 1; i <= k; i++) j.push(i * s); return { min: 0, max: len, step: 1, labelEvery: s, jumps: j, story: L(len + ' cm li kesma ' + k + ' ta teng bo‘lakka bo‘lindi. <b>Bir bo‘lak necha cm</b>?', 'Отрезок ' + len + ' см разделили на ' + k + ' равные части. <b>Сколько см в одной части</b>?', 'A ' + len + ' cm segment was split into ' + k + ' equal parts. <b>How long is one part</b>?'), ans: s }; } },
            { type: 'problem', make: function (R) { var k = R(2, 6), q = R(2, 9); return { story: L('<b>' + k * q + '</b> cm lentani <b>' + k + '</b> ta teng bo‘lakka qirqishdi. <u>Bir bo‘lak</u> uzunligi?', 'Ленту длиной <b>' + k * q + '</b> см разрезали на <b>' + k + '</b> равных частей. <u>Длина одной части</u>?', 'A <b>' + k * q + '</b> cm ribbon was cut into <b>' + k + '</b> equal pieces. <u>Length of one piece</u>?'), expr: [k * q, ':', k, '=', q], ans: q, unit: H.CM }; } }
          ],
          quiz: [{ q: L('36 cm ni 6 bo‘lakka. Bir bo‘lak?', '36 см на 6 частей. Одна часть?', '36 cm into 6 parts. One part?'), o: ['6', '30', '42'], a: 0 }, { q: L('20 cm ni 4 bo‘lakka. Bir bo‘lak?', '20 см на 4 части. Одна часть?', '20 cm into 4 parts. One part?'), o: ['5', '16', '80'], a: 0 }] },

        { id: 't10', lessons: L('63–65-darslar', 'Уроки 63–65', 'Lessons 63–65'), title: L('To‘g‘ri to‘rtburchak, muntazam va nostandart shakllar perimetri', 'Периметр прямоугольника, правильных и сложных фигур', 'Perimeter of rectangles, regular and irregular shapes'),
          keys: ['P = 2 · (a + b)', L('muntazam: P = n · a', 'правильная: P = n · a', 'regular: P = n · a')],
          scene: [{ obj: 'pyramid', n: 2, color: 'violet' }],
          explain: L('<b>Muntazam</b> ko‘pburchakning hamma tomonlari teng: P = tomonlar soni · tomon. Masalan, muntazam oltiburchak, a = 5 cm: P = 6 · 5 = 30 cm. Nostandart shaklda esa barcha tomonlarni qo‘shamiz.',
            'У <b>правильного</b> многоугольника все стороны равны: P = число сторон · сторона. Например, правильный шестиугольник, a = 5 см: P = 6 · 5 = 30 см. У сложной фигуры складываем все стороны.',
            'A <b>regular</b> polygon has all sides equal: P = number of sides · side. E.g. a regular hexagon with a = 5 cm: P = 6 · 5 = 30 cm. For an irregular shape we add all the sides.'),
          rule: 'P = n · a · P = 2 · (a + b)',
          acts: [
            { type: 'polygon', title: L('Muntazam ko‘pburchak', 'Правильный многоугольник', 'Regular polygon'), make: function (R) { var n = R(3, 6), a = R(3, 15), s = []; for (var i = 0; i < n; i++) s.push(a); return { kind: 'poly', sides: s, ans: n * a, story: L('Muntazam ko‘pburchak <b>perimetri</b>?', '<b>Периметр</b> правильного многоугольника?', '<b>Perimeter</b> of the regular polygon?') }; } },
            { type: 'polygon', title: L('To‘g‘ri to‘rtburchak', 'Прямоугольник', 'Rectangle'), make: function (R) { var a = R(8, 30), b = R(3, a - 1); return { kind: 'rect', sides: [a, b], ans: 2 * (a + b), story: L('<b>Perimetrni</b> toping.', 'Найдите <b>периметр</b>.', 'Find the <b>perimeter</b>.') }; } }
          ],
          quiz: [{ q: L('Kvadrat, a = 9 cm. P = ?', 'Квадрат, a = 9 см. P = ?', 'Square, a = 9 cm. P = ?'), o: ['36', '81', '18'], a: 0 }, { q: L('Muntazam beshburchak, a = 4 cm. P = ?', 'Правильный пятиугольник, a = 4 см. P = ?', 'Regular pentagon, a = 4 cm. P = ?'), o: ['20', '16', '9'], a: 0 }] },

        { id: 't11', lessons: L('66–68-darslar', 'Уроки 66–68', 'Lessons 66–68'), title: L('Yuzning xossalari. Nostandart shakllar yuzi', 'Свойства площади. Площадь сложных фигур', 'Properties of area. Area of irregular shapes'),
          keys: [L('yuzlarni qo‘shish', 'сложение площадей', 'adding areas'), L('bo‘laklarga ajratish', 'разбиение на части', 'splitting into parts')],
          scene: [{ obj: 'box', n: 2, color: 'green' }],
          explain: L('Shaklni bir nechta to‘g‘ri to‘rtburchakka ajratsak, uning yuzi bo‘laklar yuzlarining <b>yig‘indisi</b>ga teng. Masalan, «G» harfi shaklidagi figura: 4 · 2 + 3 · 2 = 8 + 6 = 14 cm².',
            'Если разбить фигуру на прямоугольники, её площадь равна <b>сумме</b> площадей частей. Например, фигура в форме буквы «Г»: 4 · 2 + 3 · 2 = 8 + 6 = 14 см².',
            'Split a shape into rectangles and its area is the <b>sum</b> of their areas. E.g. an L-shape: 4 · 2 + 3 · 2 = 8 + 6 = 14 cm².'),
          rule: 'S = S₁ + S₂',
          acts: [
            { type: 'problem', title: L('Ikki bo‘lakli shakl', 'Фигура из двух частей', 'A two-part shape'), make: function (R) { var a = R(2, 8), b = R(2, 6), c = R(2, 8), d = R(2, 6);
              return { story: L('Shakl ikki to‘g‘ri to‘rtburchakdan iborat: <b>' + a + '×' + b + '</b> cm va <b>' + c + '×' + d + '</b> cm. <u>Shaklning yuzi</u>?', 'Фигура состоит из двух прямоугольников: <b>' + a + '×' + b + '</b> см и <b>' + c + '×' + d + '</b> см. <u>Площадь фигуры</u>?', 'The shape is made of two rectangles: <b>' + a + '×' + b + '</b> cm and <b>' + c + '×' + d + '</b> cm. <u>Area of the shape</u>?'), expr: [a * b, '+', c * d, '=', a * b + c * d], ans: a * b + c * d, unit: CM2 }; } },
            { type: 'grid', make: function (R) { var a = R(3, 10), b = R(2, 6); return { a: a, b: b, ask: 'area', ans: a * b, unit: CM2, story: L('<b>Yuz</b>?', '<b>Площадь</b>?', '<b>Area</b>?') }; } }
          ],
          quiz: [{ q: L('6 × 4 to‘rtburchakdan 2 × 2 kvadrat kesildi. S = ?', 'Из прямоугольника 6 × 4 вырезали квадрат 2 × 2. S = ?', 'A 2 × 2 square is cut from a 6 × 4 rectangle. S = ?'), o: ['20', '24', '16'], a: 0 }, { q: L('S₁ = 12 cm², S₂ = 9 cm². S = ?', 'S₁ = 12 см², S₂ = 9 см². S = ?', 'S₁ = 12 cm², S₂ = 9 cm². S = ?'), o: ['21', '108', '3'], a: 0 }] },

        { id: 't12', lessons: L('Mantiqiy masalalar', 'Логические задачи', 'Logic puzzles'), title: L('Mantiqiy masalalar', 'Логические задачи', 'Logic puzzles'),
          keys: [L('mantiq', 'логика', 'logic'), L('qonuniyat', 'закономерность', 'pattern')],
          scene: [{ obj: 'star', n: 4, color: 'yellow' }],
          explain: L('Mantiqiy masalalarda shoshilmasdan fikrlaymiz: qonuniyat topamiz, taxmin qilib tekshiramiz va chizma chizamiz.',
            'В логических задачах рассуждаем не спеша: ищем закономерность, предполагаем и проверяем, рисуем схему.',
            'In logic puzzles we think calmly: look for a pattern, guess and check, and draw a picture.'),
          rule: L('O‘yla → taxmin qil → tekshir', 'Подумай → предположи → проверь', 'Think → guess → check'),
          acts: [
            { type: 'choose', title: L('Qonuniyat', 'Закономерность', 'Pattern'), icon: '🔮', make: function (R) { var s = R(1, 5), k = R(2, 3), seq = [s, s * k, s * k * k, s * k * k * k]; return choice(mk(function (l) { return { uz: 'Keyingi son?', ru: 'Следующее число?', en: 'Next number?' }[l] + ' <span class="kd-big">' + seq.join(', ') + ', ?</span>'; }), [String(s * Math.pow(k, 4)), String(seq[3] + k), String(seq[3] * 2 + 1)], 0); } },
            { type: 'magic', given: 3 }
          ],
          quiz: [{ q: '3, 6, 12, 24, ?', o: ['48', '36', '30'], a: 0 }, { q: '100, 90, 80, 70, ?', o: ['60', '50', '65'], a: 0 }] }
      ] }
    ]
  };
  C.addPart(part2);
})(this);
