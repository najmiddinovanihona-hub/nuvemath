// Nuvemath — 2-sinf, II qism (manba: I.V. Repyova, «Matematika. 2-sinf. II qism», Toshkent, 2023).
// Mavzular tartibi va nomlari darslikdan olingan; tushuntirishlar, topshiriqlar va rasmlar Nuvemath uchun qayta yozilgan.
(function (root) {
  'use strict';
  var C = root.NMCurriculum, H = C.H, L = H.L, mk = H.mk, PCS = H.PCS, CM = H.CM, choice = H.choice, pick = H.pick;
  // 3D: yuzlik plitalar, o'nlik tayoqchalar, birlik kubchalar
  function blocks(n) { var h = Math.floor(n / 100), t = Math.floor(n / 10) % 10, u = n % 10, g = []; if (h) g.push({ obj: 'flat', n: h, color: 'green' }); if (t) g.push({ obj: 'rod', n: t, color: 'orange' }); if (u) g.push({ obj: 'unit', n: u, color: 'blue' }); return g; }
  var MIN = L('min', 'мин', 'min'), HR = L('soat', 'ч', 'h'), MM = L('mm', 'мм', 'mm'), DM = L('dm', 'дм', 'dm'), M = L('m', 'м', 'm');
  function three(R) { return R(1, 9) * 100 + R(0, 9) * 10 + R(0, 9); }

  var part2 = {
    grade: 2, part: 2, edition: L('2023-yil nashri', 'Издание 2023 г.', '2023 edition'),
    title: L('1000 gacha sonlar, uzunlik va vaqt', 'Числа до 1000, длина и время', 'Numbers to 1000, length and time'),
    book: L('I.V. Repyova. Matematika, 2-sinf, II qism (Toshkent, 2023)', 'И.В. Репьева. Математика, 2 класс, часть II (Ташкент, 2023)', 'I.V. Repyova. Mathematics, Grade 2, Part II (Tashkent, 2023)'),
    intro: L('Endi yuzliklar olamiga kiramiz: uch xonali sonlarni o‘qiymiz, yozamiz, taqqoslaymiz, qo‘shamiz va ayiramiz. So‘ng metr va millimetrni, soat va minutni o‘rganamiz.',
      'Теперь входим в мир сотен: читаем, пишем, сравниваем, складываем и вычитаем трёхзначные числа. Потом изучаем метр и миллиметр, часы и минуты.',
      'Now we enter the world of hundreds: read, write, compare, add and subtract three-digit numbers. Then we learn metres and millimetres, hours and minutes.'),
    sections: [
      { id: 's1', title: L('Uch xonali sonlar', 'Трёхзначные числа', 'Three-digit numbers'), icon: '💯', color: 'green', topics: [
        { id: 't1', lessons: L('42-dars', 'Урок 42', 'Lesson 42'), title: L('Yuzlik. Yuzliklar bilan hisoblash', 'Сотня. Счёт сотнями', 'Hundreds. Counting in hundreds'),
          keys: [L('yuzlik', 'сотня', 'hundred'), '100, 200 … 900'],
          scene: [{ obj: 'flat', n: 2, color: 'green' }, { obj: 'rod', n: 3, color: 'orange' }],
          explain: L('10 ta o‘nlik birlashsa — <b>1 yuzlik</b> (100) bo‘ladi. Sahnadagi yashil plita — 100 ta kubcha. Yuzliklarni xuddi birliklar kabi qo‘shamiz: 3 yuzlik + 2 yuzlik = 5 yuzlik = 500.',
            '10 десятков вместе — <b>1 сотня</b> (100). Зелёная плита на сцене — это 100 кубиков. Сотни складываем как единицы: 3 сотни + 2 сотни = 5 сотен = 500.',
            '10 tens together make <b>1 hundred</b> (100). The green plate on the stage is 100 little cubes. We add hundreds like ones: 3 hundreds + 2 hundreds = 5 hundreds = 500.'),
          rule: '10 × 10 = 100 · 300 + 200 = 500 · 700 − 400 = 300',
          acts: [
            { type: 'count3d', title: L('3D: yuzliklarni sanang', '3D: посчитайте сотни', '3D: count the hundreds'), make: function (R) { var h = R(2, 9); return { groups: [{ obj: 'flat', n: h, color: 'green' }], perRow: 3, story: L('Har bir plita — 100. <b>Qaysi son?</b>', 'Каждая плита — 100. <b>Какое число?</b>', 'Each plate is 100. <b>Which number?</b>'), ans: h * 100, unit: '' }; } },
            { type: 'drill', title: L('Yuzliklar bilan', 'С сотнями', 'With hundreds'), make: function (R) { var a = R(1, 8), b = R(1, 9 - a); return pick([{ q: a * 100 + ' + ' + b * 100, a: (a + b) * 100 }, { q: (a + b) * 100 + ' − ' + b * 100, a: a * 100 }]); } }
          ],
          quiz: [{ q: L('100 da nechta o‘nlik?', 'Сколько десятков в 100?', 'How many tens in 100?'), o: ['10', '100', '1'], a: 0 }, { q: '400 + 300 = ?', o: ['700', '7', '1000'], a: 0 }, { q: '900 − 600 = ?', o: ['300', '3', '1500'], a: 0 }] },

        { id: 't2', lessons: L('43–46-darslar', 'Уроки 43–46', 'Lessons 43–46'), title: L('Uch xonali sonlarning nomlanishi va yozilishi', 'Названия и запись трёхзначных чисел', 'Naming and writing three-digit numbers'),
          keys: [L('yuzliklar', 'сотни', 'hundreds'), L('o‘nliklar', 'десятки', 'tens'), L('birliklar', 'единицы', 'ones')],
          scene: [{ obj: 'flat', n: 3, color: 'green' }, { obj: 'rod', n: 4, color: 'orange' }, { obj: 'unit', n: 5, color: 'blue' }],
          explain: L('345 sonida <b>3 yuzlik</b>, <b>4 o‘nlik</b> va <b>5 birlik</b> bor: 345 = 300 + 40 + 5. Agar biror xona bo‘sh bo‘lsa, o‘rniga 0 yoziladi: 3 yuzlik va 5 birlik = 305.',
            'В числе 345 — <b>3 сотни</b>, <b>4 десятка</b> и <b>5 единиц</b>: 345 = 300 + 40 + 5. Если разряд пустой, пишем 0: 3 сотни и 5 единиц = 305.',
            '345 has <b>3 hundreds</b>, <b>4 tens</b> and <b>5 ones</b>: 345 = 300 + 40 + 5. If a place is empty we write 0: 3 hundreds and 5 ones = 305.'),
          rule: '345 = 300 + 40 + 5 · 305 = 300 + 5',
          acts: [
            { type: 'count3d', title: L('3D: sonni yig‘ing', '3D: соберите число', '3D: build the number'), make: function (R) { var n = R(1, 3) * 100 + R(0, 6) * 10 + R(0, 8); return { groups: blocks(n), perRow: 3, story: L('Plita — 100, tayoqcha — 10, kubcha — 1. <b>Qaysi son?</b>', 'Плита — 100, палочка — 10, кубик — 1. <b>Какое число?</b>', 'Plate = 100, rod = 10, cube = 1. <b>Which number?</b>'), ans: n, unit: '' }; } },
            { type: 'drill', title: L('Xona qo‘shiluvchilari', 'Разрядные слагаемые', 'Place values'), n: 6, make: function (R) { var h = R(1, 9), t = R(0, 9), u = R(0, 9); return pick([{ q: h * 100 + ' + ' + t * 10 + ' + ' + u, a: h * 100 + t * 10 + u }, { q: (h * 100 + t * 10 + u) + ' − ' + u, a: h * 100 + t * 10 }, { q: (h * 100 + t * 10 + u) + ' − ' + h * 100, a: t * 10 + u }]); } },
            { type: 'choose', title: L('Nechta yuzlik?', 'Сколько сотен?', 'How many hundreds?'), icon: '💯', make: function (R) { var h = R(1, 9), t = R(0, 9), u = R(0, 9), n = h * 100 + t * 10 + u, alt = [t, u, h + 1].filter(function (x, i, a) { return x !== h && a.indexOf(x) === i; }); while (alt.length < 2) alt.push(alt.length ? alt[0] + 2 : h + 2);
              return choice(mk(function (l) { return '<span class="kd-big">' + n + '</span> — ' + { uz: 'nechta yuzlik?', ru: 'сколько сотен?', en: 'how many hundreds?' }[l]; }), [String(h), String(alt[0]), String(alt[1])], 0); } }
          ],
          quiz: [{ q: L('5 yuzlik, 2 o‘nlik, 7 birlik?', '5 сотен, 2 десятка, 7 единиц?', '5 hundreds, 2 tens, 7 ones?'), o: ['527', '725', '257'], a: 0 }, { q: L('6 yuzlik va 4 birlik?', '6 сотен и 4 единицы?', '6 hundreds and 4 ones?'), o: ['604', '64', '640'], a: 0 }, { q: '800 + 30 + 1 = ?', o: ['831', '8301', '813'], a: 0 }] },

        { id: 't3', lessons: L('47–49-darslar', 'Уроки 47–49', 'Lessons 47–49'), title: L('Uch xonali sonlarni taqqoslash', 'Сравнение трёхзначных чисел', 'Comparing three-digit numbers'),
          keys: ['>', '<', L('yuzliklardan boshlab', 'начиная с сотен', 'start with hundreds')],
          scene: [{ obj: 'flat', n: 3, color: 'green' }, { obj: 'flat', n: 2, color: 'cyan' }],
          explain: L('Avval <b>yuzliklarni</b>, ular teng bo‘lsa — <b>o‘nliklarni</b>, ular ham teng bo‘lsa — <b>birliklarni</b> taqqoslaymiz. 452 &gt; 425, chunki o‘nliklar 5 &gt; 2.',
            'Сравниваем сначала <b>сотни</b>, если равны — <b>десятки</b>, если и они равны — <b>единицы</b>. 452 &gt; 425, потому что десятков 5 &gt; 2.',
            'Compare the <b>hundreds</b> first; if equal, the <b>tens</b>; if those are equal too, the <b>ones</b>. 452 &gt; 425 because 5 tens &gt; 2 tens.'),
          rule: L('Yuzliklar → o‘nliklar → birliklar', 'Сотни → десятки → единицы', 'Hundreds → tens → ones'),
          acts: [
            { type: 'choose', title: L('Belgi qo‘ying', 'Поставьте знак', 'Choose the sign'), icon: '⚖️', make: H.compareSign(100, 999) },
            { type: 'order', title: L('Kichigidan kattasiga', 'От меньшего к большему', 'Smallest to largest'), make: H.sortNums(5, 100, 999) }
          ],
          quiz: [{ q: '527 ◻ 572', o: ['<', '>', '='], a: 0 }, { q: '810 ◻ 801', o: ['>', '<', '='], a: 0 }, { q: L('Eng katta uch xonali son?', 'Самое большое трёхзначное число?', 'The largest three-digit number?'), o: ['999', '1000', '900'], a: 0 }] }
      ] },

      { id: 's2', title: L('Uch xonali sonlar bilan amallar', 'Действия с трёхзначными числами', 'Working with three-digit numbers'), icon: '➕', color: 'blue', topics: [
        { id: 't4', lessons: L('50–51-darslar', 'Уроки 50–51', 'Lessons 50–51'), title: L('Uch xonali sonlarni qo‘shish', 'Сложение трёхзначных чисел', 'Adding three-digit numbers'),
          keys: [L('xonalab qo‘shish', 'поразрядное сложение', 'add place by place')],
          scene: [{ obj: 'flat', n: 2, color: 'green' }, { obj: 'rod', n: 3, color: 'orange' }],
          explain: L('Uch xonali sonlarni xonama-xona qo‘shamiz: yuzliklarni yuzliklarga, o‘nliklarni o‘nliklarga, birliklarni birliklarga. 234 + 152 = 386.',
            'Трёхзначные числа складываем поразрядно: сотни с сотнями, десятки с десятками, единицы с единицами. 234 + 152 = 386.',
            'Add three-digit numbers place by place: hundreds with hundreds, tens with tens, ones with ones. 234 + 152 = 386.'),
          rule: '234 + 152 = (200 + 100) + (30 + 50) + (4 + 2) = 386',
          acts: [
            { type: 'column', title: L('Ustunda qo‘shing', 'Сложите столбиком', 'Add in a column'), make: function (R) { var a, b; do { a = R(100, 600); b = R(100, 899 - a); } while (a + b > 999); return { a: a, b: b, op: '+', ans: a + b }; } },
            { type: 'drill', n: 6, make: function (R) { var a = R(1, 5) * 100 + R(0, 4) * 10 + R(0, 4), b = R(1, 3) * 100 + R(0, 5) * 10 + R(0, 5); return { q: a + ' + ' + b, a: a + b }; } }
          ],
          quiz: [{ q: '321 + 456 = ?', o: ['777', '135', '767'], a: 0 }, { q: '500 + 250 = ?', o: ['750', '525', '755'], a: 0 }, { q: '148 + 236 = ?', o: ['384', '374', '3814'], a: 0 }] },

        { id: 't5', lessons: L('52–55-darslar', 'Уроки 52–55', 'Lessons 52–55'), title: L('Uch xonali sonlarni ayirish', 'Вычитание трёхзначных чисел', 'Subtracting three-digit numbers'),
          keys: [L('xonalab ayirish', 'поразрядное вычитание', 'subtract place by place'), L('yuzlikni maydalash', 'размен сотни', 'breaking a hundred')],
          scene: [{ obj: 'flat', n: 5, color: 'green' }],
          explain: L('Ayirishda ham xonalab ishlaymiz: 586 − 243 = 343. Agar birlik yoki o‘nlik yetmasa, yuqori xonadan bittasini «maydalab» olamiz — xuddi ustun usulidagidek.',
            'При вычитании тоже работаем по разрядам: 586 − 243 = 343. Если единиц или десятков не хватает, «разменяем» один из старшего разряда — как в столбике.',
            'Subtract place by place too: 586 − 243 = 343. If there aren’t enough ones or tens, “break” one from the next place — just like in a column.'),
          rule: '586 − 243 = (500 − 200) + (80 − 40) + (6 − 3) = 343',
          acts: [
            { type: 'column', title: L('Ustunda ayiring', 'Вычтите столбиком', 'Subtract in a column'), make: function (R) { var a = R(300, 999), b = R(100, a - 50); return { a: a, b: b, op: '-', ans: a - b }; } },
            { type: 'problem', make: H.part({ c: [300, 900], a: [100, 280], labels: [L('sotildi', 'продали', 'sold'), L('qoldi', 'осталось', 'left')], cond: [L('Sotildi', 'Продали', 'Sold'), L('Qoldi', 'Осталось', 'Left')], u: H.KG,
              text: function (c, a) { return L('Omborda <b>' + c + '</b> kg kartoshka bor edi. <b>' + a + '</b> kg sotildi. <u>Necha kg qoldi</u>?', 'На складе было <b>' + c + '</b> кг картофеля. Продали <b>' + a + '</b> кг. <u>Сколько кг осталось</u>?', 'A store had <b>' + c + '</b> kg of potatoes. <b>' + a + '</b> kg were sold. <u>How many kg are left</u>?'); } }) }
          ],
          quiz: [{ q: '875 − 432 = ?', o: ['443', '1307', '453'], a: 0 }, { q: '600 − 250 = ?', o: ['350', '450', '850'], a: 0 }, { q: '504 − 7 = ?', o: ['497', '507', '411'], a: 0 }] },

        { id: 't6', lessons: L('56–57-darslar', 'Уроки 56–57', 'Lessons 56–57'), title: L('Bir nechta sonni ustunda qo‘shish. Masalalar', 'Сложение нескольких чисел столбиком. Задачи', 'Adding several numbers. Problems'),
          keys: [L('bir nechta qo‘shiluvchi', 'несколько слагаемых', 'several addends')],
          scene: [{ obj: 'box', n: 3, color: 'orange' }],
          explain: L('Bir nechta sonni ustunda qo‘shganda ham har bir xonani alohida qo‘shamiz va o‘nliklarni yodda tutishni unutmaymiz.',
            'Складывая несколько чисел столбиком, тоже складываем каждый разряд отдельно и не забываем переносить десятки.',
            'When adding several numbers in a column, add each place separately and don’t forget to carry.'),
          rule: '120 + 245 + 315 = 680',
          acts: [
            { type: 'drill', title: L('Uch qo‘shiluvchi', 'Три слагаемых', 'Three addends'), n: 6, make: function (R) { var a = R(1, 3) * 100 + R(0, 9) * 10, b = R(1, 3) * 100 + R(0, 9) * 5, c = R(10, 99); return { q: a + ' + ' + b + ' + ' + c, a: a + b + c }; } },
            { type: 'problem', make: function (R) { var a = R(100, 300), b = R(100, 300), c = R(50, 200);
              return { story: L('Uch kunda kutubxonaga <b>' + a + '</b>, <b>' + b + '</b> va <b>' + c + '</b> ta kitob keltirildi. <u>Jami nechta</u> kitob keltirildi?', 'За три дня в библиотеку привезли <b>' + a + '</b>, <b>' + b + '</b> и <b>' + c + '</b> книг. <u>Сколько всего</u> книг привезли?', 'Over three days a library received <b>' + a + '</b>, <b>' + b + '</b> and <b>' + c + '</b> books. <u>How many books</u> in total?'),
                expr: [a, '+', b, '+', c, '=', a + b + c], ans: a + b + c, unit: PCS }; } }
          ],
          quiz: [{ q: '200 + 300 + 100 = ?', o: ['600', '500', '700'], a: 0 }, { q: '125 + 75 + 50 = ?', o: ['250', '200', '240'], a: 0 }] }
      ] },

      { id: 's3', title: L('Uzunlik birliklari', 'Единицы длины', 'Units of length'), icon: '📏', color: 'cyan', topics: [
        { id: 't7', lessons: L('58–61-darslar', 'Уроки 58–61', 'Lessons 58–61'), title: L('Metr, detsimetr, santimetr', 'Метр, дециметр, сантиметр', 'Metre, decimetre, centimetre'),
          keys: ['1 m = 10 dm', '1 m = 100 cm', '1 dm = 10 cm'],
          scene: [{ obj: 'rod', n: 10, color: 'cyan' }],
          explain: L('Katta masofalar <b>metr</b> (m) bilan o‘lchanadi: sinf xonasining uzunligi — bir necha metr. 1 m = 10 dm = 100 cm. Sahnadagi 10 ta tayoqcha birga — xuddi 1 metrli tasma!',
            'Большие расстояния измеряют <b>метрами</b> (м): длина класса — несколько метров. 1 м = 10 дм = 100 см. 10 палочек на сцене вместе — как метровая лента!',
            'Longer distances are measured in <b>metres</b> (m): a classroom is a few metres long. 1 m = 10 dm = 100 cm. The 10 rods on the stage together are like a 1-metre tape!'),
          rule: '1 m = 10 dm = 100 cm · 2 m 35 cm = 235 cm',
          acts: [
            { type: 'drill', title: L('Aylantiring', 'Переведите', 'Convert'), n: 6, make: function (R) { var m = R(1, 9), c = R(1, 99); return pick([{ q: mk(function (l) { return m + ' ' + H.pk(M, l) + ' = ? ' + H.pk(CM, l); }), a: m * 100 }, { q: mk(function (l) { return m + ' ' + H.pk(M, l) + ' = ? ' + H.pk(DM, l); }), a: m * 10 }, { q: mk(function (l) { return m + ' ' + H.pk(M, l) + ' ' + c + ' ' + H.pk(CM, l) + ' = ? ' + H.pk(CM, l); }), a: m * 100 + c }]); } },
            { type: 'choose', title: L('Qaysi birlik qulay?', 'Какая единица удобнее?', 'Which unit fits best?'), icon: '📐', make: function () { return pick([
              choice(L('Sinf xonasining uzunligi?', 'Длина классной комнаты?', 'The length of a classroom?'), [M, CM, MM], 0),
              choice(L('Qalamning uzunligi?', 'Длина карандаша?', 'The length of a pencil?'), [CM, M, L('km', 'км', 'km')], 0),
              choice(L('Chumolining uzunligi?', 'Длина муравья?', 'The length of an ant?'), [MM, M, DM], 0)]); } }
          ],
          quiz: [{ q: L('1 m = ? cm', '1 м = ? см', '1 m = ? cm'), o: ['100', '10', '1000'], a: 0 }, { q: L('3 m = ? dm', '3 м = ? дм', '3 m = ? dm'), o: ['30', '300', '3'], a: 0 }, { q: L('1 m 50 cm = ? cm', '1 м 50 см = ? см', '1 m 50 cm = ? cm'), o: ['150', '1050', '51'], a: 0 }] },

        { id: 't8', lessons: L('62-dars', 'Урок 62', 'Lesson 62'), title: L('Detsimetr, santimetr, millimetr', 'Дециметр, сантиметр, миллиметр', 'Decimetre, centimetre, millimetre'),
          keys: ['1 cm = 10 mm', '1 dm = 100 mm'],
          scene: [{ obj: 'pencil', n: 3, color: 'pink' }],
          explain: L('Chizg‘ichdagi eng kichik bo‘linmalar — <b>millimetr</b> (mm). 1 santimetrda 10 ta millimetr bor. Chumoli, tugma, qalam uchi — millimetrlarda o‘lchanadi.',
            'Самые маленькие деления на линейке — <b>миллиметры</b> (мм). В 1 сантиметре 10 миллиметров. Муравья, пуговицу, кончик карандаша измеряют в миллиметрах.',
            'The tiniest marks on a ruler are <b>millimetres</b> (mm). There are 10 mm in 1 cm. Ants, buttons and pencil tips are measured in millimetres.'),
          rule: '1 cm = 10 mm · 1 dm = 10 cm = 100 mm',
          acts: [
            { type: 'ruler', title: L('Qalamni o‘lchang', 'Измерьте карандаш', 'Measure the pencil'), mode: 'pencil', make: function (R) { var l = R(5, 14); return { len: l, start: 0, max: 15, story: L('Qalam uzunligi necha cm? (Har bir cm da 10 ta mm bor.)', 'Длина карандаша в см? (В каждом см — 10 мм.)', 'How long is the pencil in cm? (Each cm has 10 mm.)') }; } },
            { type: 'drill', title: L('mm ga aylantiring', 'Переведите в мм', 'Convert to mm'), n: 6, make: function (R) { var c = R(1, 9), m = R(1, 9); return pick([{ q: mk(function (l) { return c + ' ' + H.pk(CM, l) + ' = ? ' + H.pk(MM, l); }), a: c * 10 }, { q: mk(function (l) { return c + ' ' + H.pk(CM, l) + ' ' + m + ' ' + H.pk(MM, l) + ' = ? ' + H.pk(MM, l); }), a: c * 10 + m }]); } }
          ],
          quiz: [{ q: L('1 cm = ? mm', '1 см = ? мм', '1 cm = ? mm'), o: ['10', '100', '1'], a: 0 }, { q: L('4 cm 5 mm = ? mm', '4 см 5 мм = ? мм', '4 cm 5 mm = ? mm'), o: ['45', '405', '9'], a: 0 }] },

        { id: 't9', lessons: L('63-dars', 'Урок 63', 'Lesson 63'), title: L('Siniq chiziq uzunligi. Ko‘pburchak perimetri', 'Длина ломаной. Периметр многоугольника', 'Broken-line length. Polygon perimeter'),
          keys: [L('perimetr', 'периметр', 'perimeter'), L('siniq chiziq', 'ломаная', 'broken line')],
          scene: [{ obj: 'pyramid', n: 2, color: 'violet' }],
          explain: L('Siniq chiziq uzunligi — bo‘g‘inlar uzunliklari yig‘indisi. Ko‘pburchak perimetri — barcha tomonlar yig‘indisi.',
            'Длина ломаной — сумма длин звеньев. Периметр многоугольника — сумма всех сторон.',
            'A broken line’s length is the sum of its links. A polygon’s perimeter is the sum of all its sides.'),
          rule: 'P = a + b + c + …',
          acts: [
            { type: 'polygon', make: function (R) { var n = R(3, 6), s = []; for (var i = 0; i < n; i++) s.push(R(4, 25)); return { kind: 'poly', sides: s, ans: s.reduce(function (a, b) { return a + b; }, 0), story: L('Ko‘pburchak <b>perimetrini</b> toping.', 'Найдите <b>периметр</b>.', 'Find the <b>perimeter</b>.') }; } },
            { type: 'polygon', make: function (R) { var s = [R(5, 30), R(5, 30), R(5, 30)]; return { kind: 'broken', sides: s, ans: s[0] + s[1] + s[2], story: L('Siniq chiziq uzunligi?', 'Длина ломаной?', 'Length of the broken line?') }; } }
          ],
          quiz: [{ q: L('Tomonlari 12, 15, 20 cm. P = ?', 'Стороны 12, 15, 20 см. P = ?', 'Sides 12, 15, 20 cm. P = ?'), o: ['47', '37', '57'], a: 0 }, { q: L('Kvadrat tomoni 7 cm. P = ?', 'Сторона квадрата 7 см. P = ?', 'Square side 7 cm. P = ?'), o: ['28', '14', '49'], a: 0 }] }
      ] },

      { id: 's4', title: L('Teskari amallar va vaqt', 'Обратные действия и время', 'Inverse operations and time'), icon: '🕒', color: 'orange', topics: [
        { id: 't10', lessons: L('64–66, 68-darslar', 'Уроки 64–66, 68', 'Lessons 64–66, 68'), title: L('Qo‘shish va ayirish bog‘liqligi. Teskari amallar', 'Связь сложения и вычитания. Обратные действия', 'Linking + and −. Inverse operations'),
          keys: [L('teskari amal', 'обратное действие', 'inverse operation'), L('tekshirish', 'проверка', 'checking')],
          scene: [{ obj: 'weight', n: 2 }],
          explain: L('Ayirish — qo‘shishga <b>teskari</b> amal. Qo‘shishni ayirish bilan, ayirishni qo‘shish bilan <b>tekshiramiz</b>: 245 + 130 = 375 → 375 − 130 = 245 ✓.',
            'Вычитание — действие, <b>обратное</b> сложению. Сложение <b>проверяем</b> вычитанием, вычитание — сложением: 245 + 130 = 375 → 375 − 130 = 245 ✓.',
            'Subtraction is the <b>inverse</b> of addition. We <b>check</b> adding by subtracting and subtracting by adding: 245 + 130 = 375 → 375 − 130 = 245 ✓.'),
          rule: 'a + b = c → c − b = a',
          acts: [
            { type: 'drill', title: L('Teskari amal bilan', 'Обратным действием', 'Use the inverse'), n: 6, make: function (R) { var a = R(100, 500), b = R(100, 400); return pick([{ q: (a + b) + ' − ' + b, a: a }, { q: (a + b) + ' − ' + a, a: b }, { q: (a - 0) + ' + ' + b + ' − ' + b, a: a }]); } },
            { type: 'chain', title: L('Boring va qayting', 'Туда и обратно', 'There and back'), make: function (R) { var s = R(100, 400), x = R(50, 300), y = R(10, 90); return { start: s, ops: [['+', x], ['−', x], ['+', y], ['−', y]] }; } }
          ],
          quiz: [{ q: L('350 + 120 = 470 bo‘lsa, 470 − 120 = ?', 'Если 350 + 120 = 470, то 470 − 120 = ?', 'If 350 + 120 = 470, then 470 − 120 = ?'), o: ['350', '590', '120'], a: 0 }, { q: L('Ayirishni qanday tekshiramiz?', 'Как проверить вычитание?', 'How do we check subtraction?'), o: [L('Qo‘shish bilan', 'Сложением', 'With addition'), L('Ayirish bilan', 'Вычитанием', 'With subtraction'), L('Tekshirmaymiz', 'Никак', 'We don’t')], a: 0 }] },

        { id: 't11', lessons: L('67-dars', 'Урок 67', 'Lesson 67'), title: L('Tenglamalar', 'Уравнения', 'Equations'),
          keys: ['x + a = b', 'x − a = b', 'a − x = b'],
          scene: [{ obj: 'box', n: 1, color: 'green' }],
          explain: L('Tenglamada noma’lumni x bilan belgilaymiz va teskari amal yordamida topamiz: x + 120 = 450 → x = 450 − 120 = 330.',
            'В уравнении неизвестное обозначаем x и находим обратным действием: x + 120 = 450 → x = 450 − 120 = 330.',
            'In an equation the unknown is x and we find it with the inverse operation: x + 120 = 450 → x = 450 − 120 = 330.'),
          rule: 'x + a = b → x = b − a · x − a = b → x = b + a',
          acts: [
            { type: 'drill', title: L('x ni toping', 'Найдите x', 'Find x'), n: 6, make: H.eqDrill(500) },
            { type: 'scale', make: function (R) { var m = R(3, 15); return { mass: m, obj: '🎁', story: L('Sovg‘a massasi — x kg. Tarozini muvozanatga keltirib, x ni toping.', 'Масса подарка — x кг. Уравновесьте весы и найдите x.', 'The gift weighs x kg. Balance the scales to find x.') }; } }
          ],
          quiz: [{ q: 'x + 200 = 650; x = ?', o: ['450', '850', '200'], a: 0 }, { q: 'x − 50 = 100; x = ?', o: ['150', '50', '200'], a: 0 }] },

        { id: 't12', lessons: L('69-dars', 'Урок 69', 'Lesson 69'), title: L('Soat va minut', 'Часы и минуты', 'Hours and minutes'),
          keys: ['1 soat = 60 min', L('kalta strelka', 'короткая стрелка', 'short hand'), L('uzun strelka', 'длинная стрелка', 'long hand')],
          scene: [{ obj: 'cylinder', n: 1, color: 'yellow' }],
          explain: L('Soatning <b>kalta</b> strelkasi soatni, <b>uzun</b> strelkasi minutni ko‘rsatadi. Uzun strelka bir to‘liq aylansa — 60 minut, ya’ni <b>1 soat</b> o‘tadi. Ikki raqam orasidagi masofa — 5 minut.',
            '<b>Короткая</b> стрелка показывает часы, <b>длинная</b> — минуты. Когда длинная стрелка делает полный круг, проходит 60 минут — <b>1 час</b>. Между двумя цифрами — 5 минут.',
            'The <b>short</b> hand shows the hours and the <b>long</b> hand shows the minutes. One full turn of the long hand is 60 minutes — <b>1 hour</b>. Between two numbers is 5 minutes.'),
          rule: L('1 soat = 60 minut · yarim soat = 30 minut', '1 час = 60 минут · полчаса = 30 минут', '1 hour = 60 minutes · half an hour = 30 minutes'),
          acts: [
            { type: 'clock', title: L('Soatni o‘qing', 'Определите время', 'Read the clock'), make: function (R) { return { h: R(1, 12), m: R(0, 11) * 5 }; } },
            { type: 'clock', title: L('Butun va yarim soat', 'Ровно и половина', 'O’clock and half past'), make: function (R) { return { h: R(1, 12), m: pick([0, 30]) }; } }
          ],
          quiz: [{ q: L('1 soatda necha minut?', 'Сколько минут в часе?', 'How many minutes in an hour?'), o: ['60', '100', '30'], a: 0 }, { q: L('Yarim soat = ? minut', 'Полчаса = ? минут', 'Half an hour = ? minutes'), o: ['30', '50', '15'], a: 0 }, { q: L('Qaysi strelka soatni ko‘rsatadi?', 'Какая стрелка показывает часы?', 'Which hand shows the hours?'), o: [L('kalta', 'короткая', 'the short one'), L('uzun', 'длинная', 'the long one')], a: 0 }] },

        { id: 't13', lessons: L('70–73-darslar', 'Уроки 70–73', 'Lessons 70–73'), title: L('Soat va minutlar bilan hisoblash. Masalalar', 'Вычисления с часами и минутами. Задачи', 'Working with hours and minutes. Problems'),
          keys: [L('vaqt oralig‘i', 'промежуток времени', 'time interval'), L('mantiqiy masalalar', 'логические задачи', 'logic puzzles')],
          scene: [{ obj: 'robot', n: 1, color: 'cyan' }, { obj: 'star', n: 2, color: 'yellow' }],
          explain: L('Vaqtni qo‘shish va ayirish mumkin: dars 8:00 da boshlanib 45 minut davom etsa, 8:45 da tugaydi. Soatlar bilan minutlarni aralashtirmang: 1 soat 20 min = 80 min.',
            'Время можно складывать и вычитать: если урок начался в 8:00 и длится 45 минут, он закончится в 8:45. Не путайте часы и минуты: 1 ч 20 мин = 80 мин.',
            'Time can be added and subtracted: a lesson that starts at 8:00 and lasts 45 minutes ends at 8:45. Don’t mix hours and minutes: 1 h 20 min = 80 min.'),
          rule: L('1 soat 20 min = 60 + 20 = 80 min', '1 ч 20 мин = 60 + 20 = 80 мин', '1 h 20 min = 60 + 20 = 80 min'),
          acts: [
            { type: 'drill', title: L('Minutlarga aylantiring', 'Переведите в минуты', 'Convert to minutes'), n: 6, make: function (R) { var h = R(1, 3), m = R(1, 11) * 5; return pick([{ q: mk(function (l) { return h + ' ' + H.pk(HR, l) + ' = ? ' + H.pk(MIN, l); }), a: h * 60 }, { q: mk(function (l) { return h + ' ' + H.pk(HR, l) + ' ' + m + ' ' + H.pk(MIN, l) + ' = ? ' + H.pk(MIN, l); }), a: h * 60 + m }]); } },
            { type: 'clock', title: L('Dars qachon tugaydi?', 'Когда закончится урок?', 'When does the lesson end?'), make: function (R) { var h = R(8, 12), d = pick([30, 40, 45]); return { h: h > 12 ? h - 12 : h, m: d, story: L('Dars soat ' + h + ':00 da boshlanib, ' + d + ' minut davom etdi. Soat dars tugagan vaqtni ko‘rsatyapti — uni yozing.', 'Урок начался в ' + h + ':00 и длился ' + d + ' минут. Часы показывают время окончания — запишите его.', 'A lesson started at ' + h + ':00 and lasted ' + d + ' minutes. The clock shows when it ended — write it.') }; } }
          ],
          quiz: [{ q: L('1 soat 15 min = ? min', '1 ч 15 мин = ? мин', '1 h 15 min = ? min'), o: ['75', '115', '65'], a: 0 }, { q: L('9:00 dan 40 minut keyin?', 'Через 40 минут после 9:00?', '40 minutes after 9:00?'), o: ['9:40', '10:40', '9:04'], a: 0 }, { q: L('120 minut = ? soat', '120 минут = ? ч', '120 minutes = ? hours'), o: ['2', '12', '1'], a: 0 }] }
      ] }
    ]
  };
  C.addPart(part2);
})(this);
