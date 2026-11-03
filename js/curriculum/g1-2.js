// Nuvemath — 1-sinf, II qism (manba: I.V. Repyova, Y.V. Zemlina, «Matematika. 1-sinf. II qism», Toshkent, 2023).
// Mavzular tartibi va nomlari darslikdan olingan; tushuntirishlar, topshiriqlar va rasmlar Nuvemath uchun qayta yozilgan.
(function (root) {
  'use strict';
  var C = root.NMCurriculum, H = C.H, L = H.L, mk = H.mk, PCS = H.PCS, choice = H.choice, pick = H.pick;
  // 3D o'nliklar (tayoqchalar) va birliklar (kubchalar)
  function tens(n) { var t = Math.floor(n / 10), u = n % 10, g = []; if (t) g.push({ obj: 'rod', n: t, color: 'orange' }); if (u) g.push({ obj: 'unit', n: u, color: 'blue' }); return g; }
  var TENS = L('o‘nlik', 'десятков', 'tens'), ONES = L('birlik', 'единиц', 'ones');
  function placeCount(lo, hi) {
    return function (R) { var n = R(lo, hi), t = Math.floor(n / 10), u = n % 10;
      return { groups: tens(n), story: L('To‘q sariq tayoqcha — <b>1 o‘nlik</b> (10 ta kubcha), ko‘k kubcha — <b>1 birlik</b>. Sahnada <b>qaysi son</b> tasvirlangan?', 'Оранжевая палочка — <b>1 десяток</b> (10 кубиков), синий кубик — <b>1 единица</b>. Какое <b>число</b> показано на сцене?', 'An orange rod is <b>1 ten</b> (10 little cubes), a blue cube is <b>1 one</b>. Which <b>number</b> is shown?'),
        expr: [t * 10, '+', u, '=', n], ans: n, unit: '' }; };
  }
  function addNoCarry(R) { var a = R(1, 8) * 10 + R(0, 4), b = R(1, 9 - Math.floor(a / 10)) * 10 + R(0, 5); while (a % 10 + b % 10 > 9) b--; return { q: a + ' + ' + b, a: a + b }; }
  function subNoBorrow(R) { var a = R(3, 9) * 10 + R(4, 9), b = R(1, Math.floor(a / 10) - 1) * 10 + R(0, a % 10); return { q: a + ' − ' + b, a: a - b }; }
  function crossTen(R) { var a = R(2, 9), b = R(11 - a, 9); return { q: a + ' + ' + b, a: a + b }; }
  function subCross(R) { var c = R(11, 18), b = R(c - 9, 9); return { q: c + ' − ' + b, a: c - b }; }

  var part2 = {
    grade: 1, part: 2, edition: L('2023-yil nashri', 'Издание 2023 г.', '2023 edition'),
    title: L('100 gacha sonlar', 'Числа до 100', 'Numbers to 100'),
    book: L('I.V. Repyova, Y.V. Zemlina. Matematika, 1-sinf, II qism (Toshkent, 2023)', 'И.В. Репьева, Ю.В. Земцова. Математика, 1 класс, часть II (Ташкент, 2023)', 'I.V. Repyova, Y.V. Zemlina. Mathematics, Grade 1, Part II (Tashkent, 2023)'),
    intro: L('Bu qismda 10 dan katta sonlar olamiga sayohat qilamiz: o‘nlik va birliklar, o‘nlikdan o‘tib qo‘shish va ayirish, qavslar, 100 gacha bo‘lgan sonlar va ikki xonali sonlar bilan amallar.',
      'В этой части мы отправимся в мир чисел больше 10: десятки и единицы, сложение и вычитание с переходом через десяток, скобки, числа до 100 и действия с двузначными числами.',
      'In this part we travel into numbers bigger than 10: tens and ones, adding and subtracting across ten, brackets, numbers to 100 and working with two-digit numbers.'),
    sections: [
      // ============ 1-BO'LIM ============
      { id: 's1', title: L('11 dan 20 gacha sonlar', 'Числа от 11 до 20', 'Numbers 11 to 20'), icon: '🔟', color: 'orange', topics: [
        { id: 't1', lessons: L('42–43-darslar', 'Уроки 42–43', 'Lessons 42–43'), title: L('11 dan 20 gacha sonlar va ularning o‘nlikda yozilishi', 'Числа от 11 до 20 и их запись', 'Numbers 11–20: tens and ones'),
          keys: [L('o‘nlik', 'десяток', 'ten'), L('birlik', 'единица', 'one'), L('ikki xonali son', 'двузначное число', 'two-digit number')],
          scene: [{ obj: 'rod', n: 1, color: 'orange' }, { obj: 'unit', n: 4, color: 'blue' }],
          explain: L('10 ta birlik birlashsa — <b>1 o‘nlik</b> bo‘ladi. 14 soni = <b>1 o‘nlik</b> va <b>4 birlik</b>. Ikki xonali sonda chapdagi raqam — o‘nliklar, o‘ngdagisi — birliklar.',
            '10 единиц вместе — это <b>1 десяток</b>. Число 14 = <b>1 десяток</b> и <b>4 единицы</b>. В двузначном числе левая цифра — десятки, правая — единицы.',
            '10 ones together make <b>1 ten</b>. 14 = <b>1 ten</b> and <b>4 ones</b>. In a two-digit number the left digit is tens, the right digit is ones.'),
          rule: '14 = 10 + 4 · 17 = 10 + 7 · 20 = 10 + 10',
          acts: [
            { type: 'count3d', title: L('3D: o‘nlik va birliklar', '3D: десятки и единицы', '3D: tens and ones'), make: placeCount(11, 20) },
            { type: 'drill', title: L('Xona qo‘shiluvchilari', 'Разрядные слагаемые', 'Tens and ones'), make: function (R) { var u = R(1, 9); return pick([{ q: '10 + ' + u, a: 10 + u }, { q: (10 + u) + ' − ' + u, a: 10 }, { q: (10 + u) + ' − 10', a: u }]); } }
          ],
          quiz: [
            { q: L('16 da nechta birlik?', 'Сколько единиц в числе 16?', 'How many ones are in 16?'), o: ['6', '1', '16'], a: 0 },
            { q: '10 + 8 = ?', o: ['18', '108', '81'], a: 0 },
            { q: L('1 o‘nlik nechta birlik?', 'Сколько единиц в 1 десятке?', 'How many ones make 1 ten?'), o: ['10', '1', '100'], a: 0 }
          ] },

        { id: 't2', lessons: L('44–48-darslar', 'Уроки 44–48', 'Lessons 44–48'), title: L('11 dan 20 gacha sonlar bilan tanishuv', 'Знакомство с числами 11–20', 'Getting to know 11–20'),
          keys: ['11, 12, 13, 14, 15', '16, 17, 18, 19, 20', L('oldingi va keyingi son', 'предыдущее и следующее число', 'before and after')],
          scene: [{ obj: 'rod', n: 2, color: 'orange' }],
          explain: L('11 dan 20 gacha har bir son <b>bir o‘nlik va bir necha birlik</b>dan iborat. 20 esa — <b>ikki o‘nlik</b>. Har keyingi son oldingisidan bittaga ko‘p.',
            'Каждое число от 11 до 20 состоит из <b>одного десятка и нескольких единиц</b>. А 20 — это <b>два десятка</b>. Каждое следующее число на один больше.',
            'Each number from 11 to 20 is <b>one ten and some ones</b>. 20 is <b>two tens</b>. Each next number is one more.'),
          rule: L('Keyingi son: +1 · Oldingi son: −1', 'Следующее: +1 · Предыдущее: −1', 'Next: +1 · Before: −1'),
          acts: [
            { type: 'order', title: L('Sonlarni tartiblang', 'Расставьте по порядку', 'Put in order'), make: H.sortNums(6, 11, 20) },
            { type: 'drill', title: L('Oldingi va keyingi', 'Предыдущее и следующее', 'Before and after'), make: function (R) { var n = R(11, 19); return pick([{ q: n + ' + 1', a: n + 1 }, { q: n + ' − 1', a: n - 1 }]); } },
            { type: 'count3d', title: L('3D: sonni o‘qing', '3D: прочитайте число', '3D: read the number'), make: placeCount(11, 20) }
          ],
          quiz: [
            { q: L('15 dan keyingi son?', 'Число после 15?', 'The number after 15?'), o: ['16', '14', '51'], a: 0 },
            { q: L('20 da nechta o‘nlik?', 'Сколько десятков в 20?', 'How many tens are in 20?'), o: ['2', '20', '0'], a: 0 },
            { q: L('1 o‘nlik va 9 birlik?', '1 десяток и 9 единиц?', '1 ten and 9 ones?'), o: ['19', '91', '10'], a: 0 }
          ] },

        { id: 't3', lessons: L('49-dars', 'Урок 49', 'Lesson 49'), title: L('Sonlarni taqqoslash', 'Сравнение чисел', 'Comparing numbers'),
          keys: ['>', '<', '='],
          scene: [{ obj: 'rod', n: 1, color: 'orange' }, { obj: 'unit', n: 7, color: 'blue' }],
          explain: L('Ikki xonali sonlarni taqqoslashda avval <b>o‘nliklarni</b>, ular teng bo‘lsa — <b>birliklarni</b> taqqoslaymiz.',
            'Сравнивая двузначные числа, сначала сравниваем <b>десятки</b>, а если они равны — <b>единицы</b>.',
            'To compare two-digit numbers, compare the <b>tens</b> first; if they are equal, compare the <b>ones</b>.'),
          rule: '17 &gt; 13 (7 &gt; 3) · 20 &gt; 19',
          acts: [
            { type: 'choose', title: L('Belgi qo‘ying', 'Поставьте знак', 'Choose the sign'), icon: '⚖️', make: H.compareSign(10, 20) },
            { type: 'order', title: L('Kattasidan kichigiga', 'От большего к меньшему', 'Largest to smallest'), make: H.sortNums(5, 10, 20, true) }
          ],
          quiz: [
            { q: '18 ◻ 12', o: ['>', '<', '='], a: 0 },
            { q: '11 ◻ 19', o: ['<', '>', '='], a: 0 },
            { q: L('Eng katta son: 14, 20, 17?', 'Самое большое: 14, 20, 17?', 'The largest: 14, 20, 17?'), o: ['20', '17', '14'], a: 0 }
          ] }
      ] },

      // ============ 2-BO'LIM ============
      { id: 's2', title: L('Qavslar va o‘nlikdan o‘tish', 'Скобки и переход через десяток', 'Brackets and crossing ten'), icon: '🧮', color: 'blue', topics: [
        { id: 't4', lessons: L('50–51-darslar', 'Уроки 50–51', 'Lessons 50–51'), title: L('Qavslar', 'Скобки', 'Brackets'),
          keys: [L('qavs ( )', 'скобки ( )', 'brackets ( )'), L('amallar tartibi', 'порядок действий', 'order of operations')],
          scene: [{ obj: 'cube', n: 3, color: 'violet' }, { obj: 'cube', n: 2, color: 'yellow' }],
          explain: L('Qavs — «avval meni hisobla!» degan belgi. Ifodada qavs bo‘lsa, <b>avval qavs ichidagi amal</b> bajariladi, keyin qolgani.',
            'Скобки говорят: «сначала посчитай меня!» Если в выражении есть скобки, <b>сначала выполняют действие в скобках</b>, потом остальное.',
            'Brackets say “work me out first!” If an expression has brackets, do the <b>operation inside the brackets first</b>, then the rest.'),
          rule: '10 − (3 + 2) = 10 − 5 = 5<br>(10 − 3) + 2 = 7 + 2 = 9',
          acts: [
            { type: 'drill', title: L('Qavsli misollar', 'Примеры со скобками', 'Sums with brackets'), make: function (R) { var a = R(8, 20), b = R(1, 5), c = R(1, 4); return pick([{ q: a + ' − (' + b + ' + ' + c + ')', a: a - b - c }, { q: '(' + a + ' − ' + b + ') + ' + c, a: a - b + c }, { q: '(' + b + ' + ' + c + ') + ' + a, a: a + b + c }]); } },
            { type: 'choose', title: L('Qaysi biri avval?', 'Что сначала?', 'Which first?'), icon: '1️⃣', make: function (R) { var a = R(10, 18), b = R(1, 4), c = R(1, 4); return choice(L('<span class="kd-big">' + a + ' − (' + b + ' + ' + c + ')</span> — qaysi amal birinchi bajariladi?', '<span class="kd-big">' + a + ' − (' + b + ' + ' + c + ')</span> — какое действие выполняется первым?', '<span class="kd-big">' + a + ' − (' + b + ' + ' + c + ')</span> — which operation comes first?'), [b + ' + ' + c, a + ' − ' + b], 0); } }
          ],
          quiz: [
            { q: '12 − (4 + 3) = ?', o: ['5', '11', '9'], a: 0 },
            { q: '(9 − 4) + 5 = ?', o: ['10', '0', '18'], a: 0 },
            { q: L('Qavs bo‘lsa, avval nima bajariladi?', 'Если есть скобки, что делаем сначала?', 'With brackets, what do we do first?'), o: [L('Qavs ichidagi amal', 'Действие в скобках', 'The operation in brackets'), L('Chapdagi amal', 'Левое действие', 'The left operation'), L('O‘ngdagi amal', 'Правое действие', 'The right operation')], a: 0 }
          ] },

        { id: 't5', lessons: L('52–54-darslar', 'Уроки 52–54', 'Lessons 52–54'), title: L('Bir xonali sonlarni o‘nlikdan o‘tib qo‘shish', 'Сложение однозначных чисел с переходом через десяток', 'Adding across ten'),
          keys: [L('10 gacha to‘ldirish', 'дополнить до 10', 'make 10'), L('o‘nlikdan o‘tish', 'переход через десяток', 'crossing ten')],
          scene: [{ obj: 'unit', n: 8, color: 'blue' }, { obj: 'unit', n: 5, color: 'pink' }],
          explain: L('8 + 5 ni hisoblash uchun avval 8 ni <b>10 gacha to‘ldiramiz</b>: 8 + 2 = 10. 5 dan 2 ni oldik, 3 qoldi: 10 + 3 = <b>13</b>.',
            'Чтобы вычислить 8 + 5, сначала <b>дополняем 8 до 10</b>: 8 + 2 = 10. От 5 взяли 2, осталось 3: 10 + 3 = <b>13</b>.',
            'To work out 8 + 5, first <b>make 8 up to 10</b>: 8 + 2 = 10. We took 2 from 5, so 3 are left: 10 + 3 = <b>13</b>.'),
          rule: '8 + 5 = 8 + 2 + 3 = 10 + 3 = 13',
          acts: [
            { type: 'count3d', title: L('3D: 10 ni to‘ldiring', '3D: дополните до 10', '3D: make 10'), make: function (R) { var a = R(6, 9), b = R(11 - a, 9); return { groups: [{ obj: 'unit', n: a, color: 'blue' }, { obj: 'unit', n: b, color: 'pink' }], story: L('Ko‘k va pushti kubchalarni qo‘shing. Avval ko‘klarni 10 gacha to‘ldirishni o‘ylang.', 'Сложите синие и розовые кубики. Сначала подумайте, как дополнить синие до 10.', 'Add the blue and pink cubes. First think how to make the blue ones up to 10.'), expr: [a, '+', b, '=', a + b], ans: a + b, unit: PCS }; } },
            { type: 'drill', title: L('O‘nlikdan o‘tib qo‘shish', 'Сложение с переходом', 'Adding across ten'), n: 8, make: crossTen },
            { type: 'problem', make: H.whole({ a: [6, 9], b: [4, 9], emoji: ['🍬', '🍭'], labels: [L('konfet', 'конфеты', 'sweets'), L('ledenets', 'леденцы', 'lollipops')], cond: [L('Konfetlar', 'Конфеты', 'Sweets'), L('Ledenetslar', 'Леденцы', 'Lollipops')],
              text: function (a, b) { return L('Idishda <b>' + a + '</b> ta konfet va <b>' + b + '</b> ta ledenets bor. <u>Jami nechta</u> shirinlik bor?', 'В вазе конфет — <b>' + a + '</b>, леденцов — <b>' + b + '</b>. <u>Сколько всего</u> сладостей?', 'A bowl has <b>' + a + '</b> sweets and <b>' + b + '</b> lollipops. <u>How many treats</u> in total?'); } }) }
          ],
          quiz: [
            { q: '9 + 4 = ?', o: ['13', '14', '12'], a: 0 },
            { q: '7 + 6 = ?', o: ['13', '12', '14'], a: 0 },
            { q: L('8 ni 10 gacha to‘ldirish uchun nechta kerak?', 'Сколько нужно, чтобы дополнить 8 до 10?', 'How many make 8 up to 10?'), o: ['2', '3', '8'], a: 0 }
          ] },

        { id: 't6', lessons: L('55–56-darslar', 'Уроки 55–56', 'Lessons 55–56'), title: L('Sonlarni ayirish. Bo‘laklab ayirish', 'Вычитание. Вычитание по частям', 'Subtracting. Subtracting in parts'),
          keys: [L('bo‘laklab ayirish', 'вычитание по частям', 'subtract in parts')],
          scene: [{ obj: 'rod', n: 1, color: 'orange' }, { obj: 'unit', n: 3, color: 'blue' }],
          explain: L('13 − 5 ni bo‘laklab ayiramiz: avval 13 dan <b>3 ni</b> ayirib 10 ga tushamiz, keyin qolgan <b>2 ni</b> ayiramiz: 10 − 2 = <b>8</b>.',
            'Вычтем 13 − 5 по частям: сначала вычтем <b>3</b>, получим 10, потом вычтем оставшиеся <b>2</b>: 10 − 2 = <b>8</b>.',
            'Subtract 13 − 5 in parts: first take away <b>3</b> to get to 10, then take away the other <b>2</b>: 10 − 2 = <b>8</b>.'),
          rule: '13 − 5 = 13 − 3 − 2 = 10 − 2 = 8',
          acts: [
            { type: 'chain', title: L('Bo‘laklab ayirish zanjiri', 'Цепочка вычитания по частям', 'Subtract-in-parts chain'), make: function (R) { var c = R(11, 18), u = c - 10, b = R(u + 1, 9); return { start: c, ops: [['−', u], ['−', b - u]] }; } },
            { type: 'drill', title: L('O‘nlikdan o‘tib ayirish', 'Вычитание с переходом', 'Subtracting across ten'), n: 8, make: subCross }
          ],
          quiz: [
            { q: '14 − 6 = ?', o: ['8', '10', '7'], a: 0 },
            { q: '12 − 5 = ?', o: ['7', '8', '6'], a: 0 },
            { q: '15 − 5 − 3 = ?', o: ['7', '13', '10'], a: 0 }
          ] },

        { id: 't7', lessons: L('57-dars', 'Урок 57', 'Lesson 57'), title: L('O‘nlikdan ayirish usuli', 'Вычитание из десятка', 'Subtracting from the ten'),
          keys: [L('o‘nlikdan ayirish', 'вычитание из десятка', 'subtract from ten')],
          scene: [{ obj: 'rod', n: 1, color: 'orange' }, { obj: 'unit', n: 2, color: 'blue' }],
          explain: L('12 − 7 ni boshqacha ham hisoblash mumkin: 7 ni <b>o‘nlikdan</b> ayiramiz: 10 − 7 = 3, keyin qolgan birliklarni qo‘shamiz: 3 + 2 = <b>5</b>.',
            '12 − 7 можно посчитать иначе: вычтем 7 <b>из десятка</b>: 10 − 7 = 3, а потом прибавим оставшиеся единицы: 3 + 2 = <b>5</b>.',
            'Another way for 12 − 7: take 7 <b>from the ten</b>: 10 − 7 = 3, then add the ones that were left: 3 + 2 = <b>5</b>.'),
          rule: '12 − 7 = (10 − 7) + 2 = 3 + 2 = 5',
          acts: [
            { type: 'drill', title: L('O‘nlikdan ayiring', 'Вычитайте из десятка', 'Take from the ten'), n: 6, make: function (R) { var u = R(1, 8), b = R(u + 1, 9); return pick([{ q: '(10 − ' + b + ') + ' + u, a: 10 - b + u }, { q: (10 + u) + ' − ' + b, a: 10 + u - b }]); } },
            { type: 'problem', make: H.part({ c: [11, 18], a: [5, 9], emoji: '🎈', labels: [L('yorildi', 'лопнули', 'popped'), L('qoldi', 'остались', 'left')], cond: [L('Yorildi', 'Лопнули', 'Popped'), L('Qoldi', 'Остались', 'Left')],
              text: function (c, a) { return L('Bayramda <b>' + c + '</b> ta shar bor edi. <b>' + a + '</b> tasi yorildi. <u>Nechta shar qoldi</u>?', 'На празднике было <b>' + c + '</b> шаров. <b>' + a + '</b> лопнули. <u>Сколько шаров осталось</u>?', 'There were <b>' + c + '</b> balloons at the party. <b>' + a + '</b> popped. <u>How many are left</u>?'); } }) }
          ],
          quiz: [
            { q: '11 − 8 = ?', o: ['3', '2', '19'], a: 0 },
            { q: '(10 − 6) + 3 = ?', o: ['7', '1', '13'], a: 0 },
            { q: '16 − 9 = ?', o: ['7', '6', '8'], a: 0 }
          ] }
      ] },

      // ============ 3-BO'LIM ============
      { id: 's3', title: L('100 gacha bo‘lgan sonlar', 'Числа до 100', 'Numbers to 100'), icon: '💯', color: 'green', topics: [
        { id: 't8', lessons: L('58-dars', 'Урок 58', 'Lesson 58'), title: L('Yaxlit sonlar', 'Круглые числа', 'Round numbers (tens)'),
          keys: ['10, 20, 30 … 100', L('yaxlit o‘nliklar', 'круглые десятки', 'whole tens')],
          scene: [{ obj: 'rod', n: 5, color: 'orange' }],
          explain: L('Faqat o‘nliklardan iborat sonlar — <b>yaxlit sonlar</b>: 10, 20, 30, ..., 100. 3 o‘nlik — 30, 7 o‘nlik — 70, 10 o‘nlik — <b>100</b>! Yaxlit sonlarni o‘nliklar kabi qo‘shamiz: 3 o‘nlik + 2 o‘nlik = 5 o‘nlik.',
            'Числа, состоящие только из десятков, — <b>круглые</b>: 10, 20, 30, ..., 100. 3 десятка — 30, 7 десятков — 70, 10 десятков — <b>100</b>! Складываем их как десятки: 3 десятка + 2 десятка = 5 десятков.',
            'Numbers made only of tens are <b>round numbers</b>: 10, 20, 30, ..., 100. 3 tens = 30, 7 tens = 70, 10 tens = <b>100</b>! Add them like tens: 3 tens + 2 tens = 5 tens.'),
          rule: '30 + 20 = 50 · 80 − 30 = 50 · 10 × 10 = 100',
          acts: [
            { type: 'count3d', title: L('3D: o‘nliklarni sanang', '3D: посчитайте десятки', '3D: count the tens'), make: function (R) { var t = R(2, 9); return { groups: [{ obj: 'rod', n: t, color: 'orange' }], story: L('Har bir tayoqcha — 10. <b>Qaysi son</b> hosil bo‘ldi?', 'Каждая палочка — 10. Какое <b>число</b> получилось?', 'Each rod is 10. Which <b>number</b> is it?'), ans: t * 10, unit: '' }; } },
            { type: 'drill', title: L('Yaxlit sonlar bilan', 'С круглыми числами', 'With round numbers'), make: function (R) { var a = R(1, 8), b = R(1, 9 - a); return pick([{ q: a * 10 + ' + ' + b * 10, a: (a + b) * 10 }, { q: (a + b) * 10 + ' − ' + b * 10, a: a * 10 }]); } }
          ],
          quiz: [
            { q: L('6 o‘nlik = ?', '6 десятков = ?', '6 tens = ?'), o: ['60', '6', '16'], a: 0 },
            { q: '40 + 30 = ?', o: ['70', '7', '43'], a: 0 },
            { q: L('100 da nechta o‘nlik?', 'Сколько десятков в 100?', 'How many tens in 100?'), o: ['10', '100', '1'], a: 0 }
          ] },

        { id: 't9', lessons: L('59–61-darslar', 'Уроки 59–61', 'Lessons 59–61'), title: L('21 dan 100 gacha sonlar: o‘qilishi va yozilishi', 'Числа от 21 до 100: чтение и запись', 'Numbers 21–100: reading and writing'),
          keys: [L('o‘nliklar xonasi', 'разряд десятков', 'tens place'), L('birliklar xonasi', 'разряд единиц', 'ones place')],
          scene: [{ obj: 'rod', n: 4, color: 'orange' }, { obj: 'unit', n: 6, color: 'blue' }],
          explain: L('46 sonida <b>4 o‘nlik</b> va <b>6 birlik</b> bor: 46 = 40 + 6. Son qanday o‘qilsa, xuddi shunday yoziladi: avval o‘nliklar, keyin birliklar.',
            'В числе 46 — <b>4 десятка</b> и <b>6 единиц</b>: 46 = 40 + 6. Как число читается, так и пишется: сначала десятки, потом единицы.',
            '46 has <b>4 tens</b> and <b>6 ones</b>: 46 = 40 + 6. We write a number the way we read it: tens first, then ones.'),
          rule: '46 = 40 + 6 · 83 = 80 + 3 · 99 + 1 = 100',
          acts: [
            { type: 'count3d', title: L('3D: sonni yig‘ing', '3D: соберите число', '3D: build the number'), make: placeCount(21, 99) },
            { type: 'drill', title: L('Xona qo‘shiluvchilari', 'Разрядные слагаемые', 'Tens and ones'), make: function (R) { var t = R(2, 9), u = R(1, 9); return pick([{ q: t * 10 + ' + ' + u, a: t * 10 + u }, { q: (t * 10 + u) + ' − ' + u, a: t * 10 }, { q: (t * 10 + u) + ' − ' + t * 10, a: u }]); } },
            { type: 'choose', title: L('Nechta o‘nlik?', 'Сколько десятков?', 'How many tens?'), icon: '🔟', make: function (R) { var n = R(21, 99), t = Math.floor(n / 10), u = n % 10; return choice(mk(function (l) { return '<span class="kd-big">' + n + '</span> — ' + { uz: 'nechta o‘nlik?', ru: 'сколько десятков?', en: 'how many tens?' }[l]; }), [String(t), String(u === t ? t + 1 : u), String(n)], 0); } }
          ],
          quiz: [
            { q: L('7 o‘nlik va 5 birlik?', '7 десятков и 5 единиц?', '7 tens and 5 ones?'), o: ['75', '57', '12'], a: 0 },
            { q: '60 + 8 = ?', o: ['68', '86', '14'], a: 0 },
            { q: '99 + 1 = ?', o: ['100', '910', '98'], a: 0 }
          ] },

        { id: 't10', lessons: L('62-dars', 'Урок 62', 'Lesson 62'), title: L('Ikki xonali sonlarni taqqoslash', 'Сравнение двузначных чисел', 'Comparing two-digit numbers'),
          keys: ['>', '<', '='],
          scene: [{ obj: 'rod', n: 3, color: 'orange' }, { obj: 'rod', n: 2, color: 'green' }],
          explain: L('Avval o‘nliklarni taqqoslaymiz: 52 &gt; 48, chunki 5 o‘nlik 4 o‘nlikdan ko‘p. O‘nliklar teng bo‘lsa, birliklarga qaraymiz: 63 &lt; 67.',
            'Сначала сравниваем десятки: 52 &gt; 48, потому что 5 десятков больше 4. Если десятки равны, смотрим на единицы: 63 &lt; 67.',
            'First compare the tens: 52 &gt; 48 because 5 tens are more than 4 tens. If the tens are equal, look at the ones: 63 &lt; 67.'),
          rule: L('O‘nliklar → keyin birliklar', 'Десятки → потом единицы', 'Tens first → then ones'),
          acts: [
            { type: 'choose', title: L('Belgi qo‘ying', 'Поставьте знак', 'Choose the sign'), icon: '⚖️', make: H.compareSign(20, 99) },
            { type: 'order', title: L('Kichigidan kattasiga', 'От меньшего к большему', 'Smallest to largest'), make: H.sortNums(5, 20, 99) }
          ],
          quiz: [
            { q: '47 ◻ 74', o: ['<', '>', '='], a: 0 },
            { q: '85 ◻ 58', o: ['>', '<', '='], a: 0 },
            { q: L('Eng kichigi: 61, 16, 66?', 'Самое маленькое: 61, 16, 66?', 'The smallest: 61, 16, 66?'), o: ['16', '61', '66'], a: 0 }
          ] }
      ] },

      // ============ 4-BO'LIM ============
      { id: 's4', title: L('Ikki xonali sonlar bilan amallar', 'Действия с двузначными числами', 'Working with two-digit numbers'), icon: '➕', color: 'violet', topics: [
        { id: 't11', lessons: L('63–65-darslar', 'Уроки 63–65', 'Lessons 63–65'), title: L('Ikki xonali sonlarni qo‘shish', 'Сложение двузначных чисел', 'Adding two-digit numbers'),
          keys: [L('o‘nlik + o‘nlik', 'десятки + десятки', 'tens + tens'), L('birlik + birlik', 'единицы + единицы', 'ones + ones')],
          scene: [{ obj: 'rod', n: 3, color: 'orange' }, { obj: 'unit', n: 4, color: 'blue' }],
          explain: L('34 + 25: o‘nliklarni o‘nliklarga (30 + 20 = 50), birliklarni birliklarga (4 + 5 = 9) qo‘shamiz. Natija: <b>59</b>.',
            '34 + 25: складываем десятки с десятками (30 + 20 = 50), единицы с единицами (4 + 5 = 9). Получаем <b>59</b>.',
            '34 + 25: add tens to tens (30 + 20 = 50) and ones to ones (4 + 5 = 9). The answer is <b>59</b>.'),
          rule: '34 + 25 = (30 + 20) + (4 + 5) = 50 + 9 = 59',
          acts: [
            { type: 'drill', title: L('Qo‘shing', 'Сложите', 'Add'), n: 8, make: addNoCarry },
            { type: 'problem', make: H.whole({ a: [21, 45], b: [12, 43], emoji: ['📗', '📘'], labels: [L('1-javon', '1-я полка', 'shelf 1'), L('2-javon', '2-я полка', 'shelf 2')], cond: [L('1-javon', '1-я полка', 'Shelf 1'), L('2-javon', '2-я полка', 'Shelf 2')],
              text: function (a, b) { return L('Kutubxonaning birinchi javonida <b>' + a + '</b> ta, ikkinchisida <b>' + b + '</b> ta kitob bor. <u>Jami nechta</u> kitob bor?', 'На первой полке библиотеки книг — <b>' + a + '</b>, на второй — <b>' + b + '</b>. <u>Сколько всего</u> книг?', 'The first library shelf has <b>' + a + '</b> books and the second has <b>' + b + '</b>. <u>How many books</u> in total?'); } }) }
          ],
          quiz: [
            { q: '23 + 45 = ?', o: ['68', '86', '22'], a: 0 },
            { q: '50 + 34 = ?', o: ['84', '54', '89'], a: 0 },
            { q: '41 + 6 = ?', o: ['47', '101', '46'], a: 0 }
          ] },

        { id: 't12', lessons: L('66–68-darslar', 'Уроки 66–68', 'Lessons 66–68'), title: L('Ikki xonali sonlarni ayirish', 'Вычитание двузначных чисел', 'Subtracting two-digit numbers'),
          keys: [L('o‘nlik − o‘nlik', 'десятки − десятки', 'tens − tens'), L('birlik − birlik', 'единицы − единицы', 'ones − ones')],
          scene: [{ obj: 'rod', n: 5, color: 'orange' }, { obj: 'unit', n: 8, color: 'blue' }],
          explain: L('58 − 23: o‘nliklardan o‘nliklarni (50 − 20 = 30), birliklardan birliklarni (8 − 3 = 5) ayiramiz. Natija: <b>35</b>.',
            '58 − 23: из десятков вычитаем десятки (50 − 20 = 30), из единиц — единицы (8 − 3 = 5). Получаем <b>35</b>.',
            '58 − 23: subtract tens from tens (50 − 20 = 30) and ones from ones (8 − 3 = 5). The answer is <b>35</b>.'),
          rule: '58 − 23 = (50 − 20) + (8 − 3) = 30 + 5 = 35',
          acts: [
            { type: 'drill', title: L('Ayiring', 'Вычтите', 'Subtract'), n: 8, make: subNoBorrow },
            { type: 'problem', make: H.part({ c: [45, 99], a: [12, 34], emoji: '🌳', labels: [L('olma', 'яблони', 'apple'), L('o‘rik', 'абрикосы', 'apricot')], cond: [L('Olma', 'Яблони', 'Apple trees'), L('O‘rik', 'Абрикосы', 'Apricot trees')],
              text: function (c, a) { return L('Bog‘da <b>' + c + '</b> tup daraxt bor. Ulardan <b>' + a + '</b> tupi olma, qolgani o‘rik. <u>Nechta o‘rik</u> daraxti bor?', 'В саду <b>' + c + '</b> деревьев. Из них яблонь — <b>' + a + '</b>, остальные абрикосы. <u>Сколько абрикосовых деревьев</u>?', 'An orchard has <b>' + c + '</b> trees. <b>' + a + '</b> are apple trees and the rest are apricots. <u>How many apricot trees</u>?'); } }) }
          ],
          quiz: [
            { q: '76 − 24 = ?', o: ['52', '100', '42'], a: 0 },
            { q: '90 − 40 = ?', o: ['50', '130', '5'], a: 0 },
            { q: '68 − 5 = ?', o: ['63', '18', '73'], a: 0 }
          ] },

        { id: 't13', lessons: L('69–71-darslar', 'Уроки 69–71', 'Lessons 69–71'), title: L('Qo‘shish va ayirish bog‘lanishi. Guruhlash xossasi', 'Связь сложения и вычитания. Сочетательное свойство', 'Linking + and −. Grouping addends'),
          keys: [L('ko‘p komponentli qo‘shish', 'сложение нескольких чисел', 'adding several numbers'), L('guruhlash', 'сочетательное свойство', 'grouping (associative)')],
          scene: [{ obj: 'cube', n: 3, color: 'orange' }, { obj: 'cube', n: 7, color: 'green' }],
          explain: L('Bir nechta sonni qo‘shganda ularni qulay <b>guruhlash</b> mumkin: 3 + 8 + 7 = 3 + (8 + 7)? Yaxshisi (3 + 7) + 8 = 10 + 8 = <b>18</b>. Yig‘indi o‘zgarmaydi!',
            'Складывая несколько чисел, их можно удобно <b>сгруппировать</b>: 3 + 8 + 7 = (3 + 7) + 8 = 10 + 8 = <b>18</b>. Сумма не меняется!',
            'When adding several numbers we can <b>group</b> them conveniently: 3 + 8 + 7 = (3 + 7) + 8 = 10 + 8 = <b>18</b>. The sum stays the same!'),
          rule: '(a + b) + c = a + (b + c)',
          acts: [
            { type: 'drill', title: L('Qulay usulda qo‘shing', 'Сложите удобным способом', 'Add the smart way'), n: 6, make: function (R) { var a = R(1, 9), b = 10 - a, c = R(2, 9); return pick([{ q: a + ' + ' + c + ' + ' + b, a: 10 + c }, { q: c + ' + ' + a + ' + ' + b, a: 10 + c }, { q: (a * 10) + ' + ' + c + ' + ' + (b * 10), a: 100 + c }]); } },
            { type: 'choose', title: L('Qaysi juftlik 10 beradi?', 'Какая пара даёт 10?', 'Which pair makes 10?'), icon: '🔟', make: function (R) { var a = R(1, 9), b = 10 - a, c = R(1, 9); while (c === b || c === a) c = R(1, 9); return choice('<span class="kd-big">' + a + ' + ' + c + ' + ' + b + '</span>', [a + ' + ' + b, a + ' + ' + c, c + ' + ' + b], 0); } }
          ],
          quiz: [
            { q: '6 + 9 + 4 = ?', o: ['19', '18', '20'], a: 0 },
            { q: '(2 + 8) + 5 = 2 + (8 + ?)', o: ['5', '2', '8'], a: 0 },
            { q: L('35 + 12 = 47 bo‘lsa, 47 − 12 = ?', 'Если 35 + 12 = 47, то 47 − 12 = ?', 'If 35 + 12 = 47, then 47 − 12 = ?'), o: ['35', '59', '12'], a: 0 }
          ] },

        { id: 't14', lessons: L('72–74-darslar', 'Уроки 72–74', 'Lessons 72–74'), title: L('Tarkibli ifodalar. Misol va masalalar', 'Составные выражения. Примеры и задачи', 'Multi-step expressions. Practice'),
          keys: [L('tarkibli ifoda', 'составное выражение', 'multi-step expression'), L('qavs', 'скобки', 'brackets')],
          scene: [{ obj: 'robot', n: 2, color: 'violet' }],
          explain: L('Bir nechta amalli ifoda — <b>tarkibli ifoda</b>. Qavs bo‘lsa — avval qavs ichi, bo‘lmasa — chapdan o‘ngga hisoblaymiz.',
            'Выражение с несколькими действиями — <b>составное</b>. Если есть скобки — сначала действие в них, если нет — считаем слева направо.',
            'An expression with several operations is a <b>multi-step expression</b>. With brackets, do them first; otherwise work from left to right.'),
          rule: '45 − (20 + 5) = 20 · 45 − 20 + 5 = 30',
          acts: [
            { type: 'drill', title: L('Tarkibli ifodalar', 'Составные выражения', 'Multi-step expressions'), n: 6, make: function (R) { var a = R(4, 9) * 10, b = R(1, 3) * 10, c = R(1, 9); return pick([{ q: a + ' − (' + b + ' + ' + c + ')', a: a - b - c }, { q: a + ' − ' + b + ' + ' + c, a: a - b + c }, { q: '(' + a + ' − ' + b + ') − ' + c, a: a - b - c }]); } },
            { type: 'problem', title: L('Ikki amalli masala', 'Задача в два действия', 'Two-step problem'), make: function (R) { var a = R(30, 60), b = R(10, 20), c = R(5, 15);
              return { story: L('Avtobusda <b>' + a + '</b> yo‘lovchi bor edi. Bekatda <b>' + b + '</b> kishi tushdi va <b>' + c + '</b> kishi chiqdi. Avtobusda <u>nechta yo‘lovchi bo‘ldi</u>?', 'В автобусе было <b>' + a + '</b> пассажиров. На остановке <b>' + b + '</b> вышли и <b>' + c + '</b> вошли. <u>Сколько пассажиров стало</u>?', 'A bus had <b>' + a + '</b> passengers. At a stop <b>' + b + '</b> got off and <b>' + c + '</b> got on. <u>How many passengers are there now</u>?'),
                expr: [a, '−', b, '+', c, '=', a - b + c], ans: a - b + c, unit: PCS }; } }
          ],
          quiz: [
            { q: '60 − (10 + 5) = ?', o: ['45', '55', '75'], a: 0 },
            { q: '50 − 20 + 4 = ?', o: ['34', '26', '74'], a: 0 },
            { q: '(30 + 7) − 7 = ?', o: ['30', '44', '37'], a: 0 }
          ] }
      ] }
    ]
  };

  C.addPart(part2);
})(this);
