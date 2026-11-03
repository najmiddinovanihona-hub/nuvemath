// Nuvemath — 2-sinf, I qism (manba: I.V. Repyova, «Matematika. 2-sinf. I qism», Toshkent, 2023).
// Mavzular tartibi va nomlari darslikdan olingan; tushuntirishlar, topshiriqlar va rasmlar Nuvemath uchun qayta yozilgan.
(function (root) {
  'use strict';
  var C = root.NMCurriculum, H = C.H, L = H.L, mk = H.mk, PCS = H.PCS, choice = H.choice, pick = H.pick;
  function tens(n) { var t = Math.floor(n / 10), u = n % 10, g = []; if (t) g.push({ obj: 'rod', n: t, color: 'orange' }); if (u) g.push({ obj: 'unit', n: u, color: 'blue' }); return g; }
  function col(op, lo, hi, carry) { // ustun usuli uchun misol
    return function (R) { var a, b; do { a = R(lo, hi); b = R(10, op === '+' ? hi - a + 10 : a - 1); } while ((op === '+' ? a + b > 100 : b >= a) || (carry !== undefined && ((op === '+') ? ((a % 10 + b % 10 > 9) !== carry) : ((a % 10 < b % 10) !== carry)))); return { a: a, b: b, op: op, ans: op === '+' ? a + b : a - b }; };
  }

  var part1 = {
    grade: 2, part: 1, edition: L('2023-yil nashri', 'Издание 2023 г.', '2023 edition'),
    title: L('100 ichida qo‘shish va ayirish', 'Сложение и вычитание в пределах 100', 'Adding and subtracting within 100'),
    book: L('I.V. Repyova. Matematika, 2-sinf, I qism (Toshkent, 2023)', 'И.В. Репьева. Математика, 2 класс, часть I (Ташкент, 2023)', 'I.V. Repyova. Mathematics, Grade 2, Part I (Tashkent, 2023)'),
    intro: L('Ikkinchi sinfga xush kelibsiz! Bu qismda 100 gacha sonlarni takrorlaymiz, o‘nlikdan o‘tib qo‘shish va ayirishni, ustun usulini va og‘zaki hisoblash sirlarini o‘rganamiz.',
      'Добро пожаловать во второй класс! В этой части повторим числа до 100, научимся складывать и вычитать с переходом через десяток, считать столбиком и устно.',
      'Welcome to Grade 2! In this part we review numbers to 100 and learn to add and subtract across ten, in a column and in our heads.'),
    sections: [
      { id: 's1', title: L('Takrorlash va yaxlit sonlar', 'Повторение и круглые числа', 'Review and round numbers'), icon: '🔁', color: 'blue', topics: [
        { id: 't1', lessons: L('1–8-darslar', 'Уроки 1–8', 'Lessons 1–8'), title: L('100 gacha sonlar: takrorlash', 'Числа до 100: повторение', 'Numbers to 100: review'),
          keys: [L('o‘nlik', 'десяток', 'ten'), L('birlik', 'единица', 'one'), L('taqqoslash', 'сравнение', 'comparing')],
          scene: [{ obj: 'rod', n: 4, color: 'orange' }, { obj: 'unit', n: 7, color: 'blue' }],
          explain: L('1-sinfda o‘rgangan narsalarni eslaymiz: ikki xonali son o‘nlik va birliklardan iborat (47 = 40 + 7). Sonlarni avval o‘nliklar, keyin birliklar bo‘yicha taqqoslaymiz.',
            'Вспомним первый класс: двузначное число состоит из десятков и единиц (47 = 40 + 7). Числа сравниваем сначала по десяткам, потом по единицам.',
            'Let’s remember Grade 1: a two-digit number is made of tens and ones (47 = 40 + 7). We compare numbers by tens first, then ones.'),
          rule: '47 = 40 + 7 · 52 &gt; 48 · 99 + 1 = 100',
          acts: [
            { type: 'count3d', title: L('3D: sonni o‘qing', '3D: прочитайте число', '3D: read the number'), make: function (R) { var n = R(21, 99); return { groups: tens(n), story: L('Tayoqcha — 10, kubcha — 1. <b>Qaysi son?</b>', 'Палочка — 10, кубик — 1. <b>Какое число?</b>', 'A rod is 10, a cube is 1. <b>Which number?</b>'), expr: [n - n % 10, '+', n % 10, '=', n], ans: n, unit: '' }; } },
            { type: 'choose', title: L('Belgi qo‘ying', 'Поставьте знак', 'Choose the sign'), icon: '⚖️', make: H.compareSign(10, 99) },
            { type: 'drill', title: L('Og‘zaki takrorlash', 'Устное повторение', 'Quick review'), make: function (R) { var a = R(2, 9) * 10, b = R(1, 9); return pick([{ q: a + ' + ' + b, a: a + b }, { q: (a + b) + ' − ' + b, a: a }, { q: (a + b) + ' − ' + a, a: b }, { q: a + ' + 10', a: a + 10 }]); } }
          ],
          quiz: [
            { q: L('83 da nechta o‘nlik?', 'Сколько десятков в 83?', 'How many tens in 83?'), o: ['8', '3', '83'], a: 0 },
            { q: '64 ◻ 46', o: ['>', '<', '='], a: 0 },
            { q: '70 + 9 = ?', o: ['79', '97', '16'], a: 0 }
          ] },

        { id: 't2', lessons: L('9–10-darslar', 'Уроки 9–10', 'Lessons 9–10'), title: L('Sonlarni qo‘shish va ayirish', 'Сложение и вычитание чисел', 'Adding and subtracting'),
          keys: [L('o‘nliklar bilan', 'с десятками', 'with tens'), L('birliklar bilan', 'с единицами', 'with ones')],
          scene: [{ obj: 'rod', n: 3, color: 'orange' }, { obj: 'unit', n: 5, color: 'blue' }],
          explain: L('Ikki xonali songa o‘nliklarni qo‘shsak — faqat o‘nliklar o‘zgaradi (35 + 20 = 55). Birliklarni qo‘shsak (o‘nlikdan o‘tmasdan) — faqat birliklar o‘zgaradi (35 + 4 = 39).',
            'Прибавляя десятки, меняем только десятки (35 + 20 = 55). Прибавляя единицы без перехода через десяток — только единицы (35 + 4 = 39).',
            'Adding tens only changes the tens (35 + 20 = 55). Adding ones without crossing ten only changes the ones (35 + 4 = 39).'),
          rule: '35 + 20 = 55 · 35 + 4 = 39 · 58 − 30 = 28 · 58 − 6 = 52',
          acts: [
            { type: 'drill', title: L('Hisoblang', 'Вычислите', 'Work it out'), n: 8, make: function (R) { var a = R(2, 7) * 10 + R(1, 5), k = R(0, 3); if (k === 0) { var b = R(1, 9 - Math.floor(a / 10)) * 10; return { q: a + ' + ' + b, a: a + b }; } if (k === 1) { var u = R(1, 9 - a % 10); return { q: a + ' + ' + u, a: a + u }; } if (k === 2) { var t = R(1, Math.floor(a / 10)) * 10; return { q: a + ' − ' + t, a: a - t }; } var v = R(1, a % 10); return { q: a + ' − ' + v, a: a - v }; } },
            { type: 'problem', make: H.whole({ a: [21, 45], b: [11, 30], emoji: ['🌷', '🌹'], labels: [L('lola', 'тюльпаны', 'tulips'), L('atirgul', 'розы', 'roses')], cond: [L('Lola', 'Тюльпаны', 'Tulips'), L('Atirgul', 'Розы', 'Roses')],
              text: function (a, b) { return L('Gulzorda <b>' + a + '</b> ta lola va <b>' + b + '</b> ta atirgul o‘sadi. <u>Jami nechta gul</u> bor?', 'В цветнике растут тюльпаны — <b>' + a + '</b> и розы — <b>' + b + '</b>. <u>Сколько всего цветов</u>?', 'A flowerbed has <b>' + a + '</b> tulips and <b>' + b + '</b> roses. <u>How many flowers</u> in total?'); } }) }
          ],
          quiz: [{ q: '46 + 30 = ?', o: ['76', '49', '16'], a: 0 }, { q: '87 − 5 = ?', o: ['82', '37', '92'], a: 0 }, { q: '64 − 40 = ?', o: ['24', '60', '104'], a: 0 }] },

        { id: 't3', lessons: L('11–14-darslar', 'Уроки 11–14', 'Lessons 11–14'), title: L('Yaxlit songacha qo‘shish va yaxlit sondan ayirish', 'Сложение до круглого числа и вычитание из круглого', 'Adding up to a ten and subtracting from a ten'),
          keys: ['31 + 9', '40 − 9', '30 − 7'],
          scene: [{ obj: 'rod', n: 4, color: 'orange' }],
          explain: L('31 + 9: birliklar 1 + 9 = 10, ya’ni yangi o‘nlik — <b>40</b> chiqadi. 30 − 7: bitta o‘nlikni birliklarga «maydalaymiz»: 30 = 20 + 10, 10 − 7 = 3, natija <b>23</b>.',
            '31 + 9: единицы 1 + 9 = 10 — новый десяток, получаем <b>40</b>. 30 − 7: «разменяем» один десяток: 30 = 20 + 10, 10 − 7 = 3, ответ <b>23</b>.',
            '31 + 9: the ones make 1 + 9 = 10 — a new ten, so we get <b>40</b>. 30 − 7: “break” one ten: 30 = 20 + 10, 10 − 7 = 3, so the answer is <b>23</b>.'),
          rule: '31 + 9 = 40 · 30 − 7 = 20 + (10 − 7) = 23',
          acts: [
            { type: 'drill', title: L('Yaxlit songacha', 'До круглого числа', 'Up to a ten'), n: 6, make: function (R) { var t = R(1, 8), u = R(1, 9); return { q: (t * 10 + u) + ' + ' + (10 - u), a: (t + 1) * 10 }; } },
            { type: 'drill', title: L('Yaxlit sondan ayiring', 'Вычтите из круглого', 'Subtract from a ten'), n: 6, make: function (R) { var t = R(2, 9), u = R(1, 9); return { q: t * 10 + ' − ' + u, a: t * 10 - u }; } },
            { type: 'chain', make: function (R) { var t = R(2, 6), u = R(1, 9); return { start: t * 10 + u, ops: [['+', 10 - u], ['−', R(1, 9)], ['+', R(1, 9)], ['+', 10]] }; } }
          ],
          quiz: [{ q: '57 + 3 = ?', o: ['60', '50', '87'], a: 0 }, { q: '40 − 6 = ?', o: ['34', '46', '36'], a: 0 }, { q: '80 − 1 = ?', o: ['79', '70', '81'], a: 0 }] },

        { id: 't4', lessons: L('15–18-darslar', 'Уроки 15–18', 'Lessons 15–18'), title: L('21 + 39 va 50 − 22 ko‘rinishidagi hisoblashlar', 'Вычисления вида 21 + 39 и 50 − 22', 'Sums like 21 + 39 and 50 − 22'),
          keys: [L('o‘nliklar + o‘nliklar', 'десятки + десятки', 'tens + tens'), L('birliklar + birliklar', 'единицы + единицы', 'ones + ones')],
          scene: [{ obj: 'rod', n: 2, color: 'orange' }, { obj: 'rod', n: 4, color: 'green' }],
          explain: L('21 + 39: o‘nliklar 20 + 30 = 50, birliklar 1 + 9 = 10, jami 50 + 10 = <b>60</b>. 50 − 22: avval 50 − 20 = 30, keyin 30 − 2 = <b>28</b>.',
            '21 + 39: десятки 20 + 30 = 50, единицы 1 + 9 = 10, всего 50 + 10 = <b>60</b>. 50 − 22: сначала 50 − 20 = 30, потом 30 − 2 = <b>28</b>.',
            '21 + 39: tens 20 + 30 = 50, ones 1 + 9 = 10, total 50 + 10 = <b>60</b>. 50 − 22: first 50 − 20 = 30, then 30 − 2 = <b>28</b>.'),
          rule: '50 − 22 = (50 − 20) − 2 = 28',
          acts: [
            { type: 'drill', title: L('Yaxlit natija', 'Круглый ответ', 'Round answers'), n: 6, make: function (R) { var a = R(1, 5) * 10 + R(1, 9), u = 10 - a % 10, b = R(1, 3) * 10 + u; return { q: a + ' + ' + b, a: a + b }; } },
            { type: 'drill', title: L('Yaxlit sondan ikki xonali son', 'Из круглого — двузначное', 'Two-digit from a ten'), n: 6, make: function (R) { var a = R(4, 9) * 10, b = R(1, Math.floor(a / 10) - 1) * 10 + R(1, 9); return { q: a + ' − ' + b, a: a - b }; } },
            { type: 'problem', make: H.part({ c: [50, 90], a: [11, 38], emoji: '📒', labels: [L('ishlatildi', 'использовали', 'used'), L('qoldi', 'осталось', 'left')], cond: [L('Ishlatildi', 'Использовали', 'Used'), L('Qoldi', 'Осталось', 'Left')],
              text: function (c, a) { return L('Do‘konda <b>' + c + '</b> ta daftar bor edi. <b>' + a + '</b> tasi sotildi. <u>Nechta qoldi</u>?', 'В магазине было <b>' + c + '</b> тетрадей. Продали <b>' + a + '</b>. <u>Сколько осталось</u>?', 'A shop had <b>' + c + '</b> notebooks. <b>' + a + '</b> were sold. <u>How many are left</u>?'); } }) }
          ],
          quiz: [{ q: '34 + 26 = ?', o: ['60', '50', '58'], a: 0 }, { q: '70 − 34 = ?', o: ['36', '44', '46'], a: 0 }, { q: '45 + 15 = ?', o: ['60', '50', '70'], a: 0 }] }
      ] },

      { id: 's2', title: L('O‘nlikdan o‘tib hisoblash', 'Сложение и вычитание с переходом', 'Crossing ten'), icon: '🔟', color: 'green', topics: [
        { id: 't5', lessons: L('19–21-darslar', 'Уроки 19–21', 'Lessons 19–21'), title: L('25 + 6 va 6 + 25 ko‘rinishidagi qo‘shish', 'Сложение вида 25 + 6 и 6 + 25', 'Adding like 25 + 6 and 6 + 25'),
          keys: [L('10 gacha to‘ldirish', 'дополнение до 10', 'make the next ten'), L('o‘rin almashtirish', 'перестановка', 'swap')],
          scene: [{ obj: 'rod', n: 2, color: 'orange' }, { obj: 'unit', n: 5, color: 'blue' }, { obj: 'unit', n: 6, color: 'pink' }],
          explain: L('25 + 6: avval 25 ni yaxlit songacha to‘ldiramiz: 25 + 5 = 30, keyin qolgan 1 ni qo‘shamiz: 30 + 1 = <b>31</b>. 6 + 25 ni esa o‘rin almashtirib 25 + 6 deb hisoblash qulay.',
            '25 + 6: сначала дополним 25 до круглого: 25 + 5 = 30, потом прибавим оставшуюся 1: 30 + 1 = <b>31</b>. А 6 + 25 удобно переставить: 25 + 6.',
            '25 + 6: first make 25 up to the next ten: 25 + 5 = 30, then add the 1 left over: 30 + 1 = <b>31</b>. For 6 + 25 it is easier to swap: 25 + 6.'),
          rule: '25 + 6 = 25 + 5 + 1 = 31',
          acts: [
            { type: 'count3d', title: L('3D: o‘nlikni to‘ldiring', '3D: дополните десяток', '3D: complete the ten'), make: function (R) { var t = R(1, 6), u = R(3, 9), b = R(11 - u, 9); return { groups: [{ obj: 'rod', n: t, color: 'orange' }, { obj: 'unit', n: u, color: 'blue' }, { obj: 'unit', n: b, color: 'pink' }], story: L('<b>' + (t * 10 + u) + ' + ' + b + '</b> ni hisoblang.', 'Вычислите <b>' + (t * 10 + u) + ' + ' + b + '</b>.', 'Work out <b>' + (t * 10 + u) + ' + ' + b + '</b>.'), expr: [t * 10 + u, '+', b, '=', t * 10 + u + b], ans: t * 10 + u + b, unit: '' }; } },
            { type: 'drill', title: L('O‘nlikdan o‘tib qo‘shing', 'Сложите с переходом', 'Add across ten'), n: 8, make: function (R) { var a = R(1, 8) * 10 + R(2, 9), b = R(11 - a % 10, 9); return R(0, 1) ? { q: a + ' + ' + b, a: a + b } : { q: b + ' + ' + a, a: a + b }; } }
          ],
          quiz: [{ q: '47 + 5 = ?', o: ['52', '42', '97'], a: 0 }, { q: '8 + 36 = ?', o: ['44', '116', '34'], a: 0 }, { q: '69 + 3 = ?', o: ['72', '62', '99'], a: 0 }] },

        { id: 't6', lessons: L('22–24-darslar', 'Уроки 22–24', 'Lessons 22–24'), title: L('33 − 7 va 43 − 7 ko‘rinishidagi ayirish', 'Вычитание вида 33 − 7 и 43 − 7', 'Subtracting like 33 − 7'),
          keys: [L('bo‘laklab ayirish', 'вычитание по частям', 'subtract in parts')],
          scene: [{ obj: 'rod', n: 4, color: 'orange' }, { obj: 'unit', n: 3, color: 'blue' }],
          explain: L('43 − 7: avval birliklarni ayirib yaxlit songa tushamiz: 43 − 3 = 40, keyin qolgan 4 ni ayiramiz: 40 − 4 = <b>36</b>.',
            '43 − 7: сначала вычтем единицы до круглого числа: 43 − 3 = 40, потом оставшиеся 4: 40 − 4 = <b>36</b>.',
            '43 − 7: first take away the ones to reach a ten: 43 − 3 = 40, then take the other 4: 40 − 4 = <b>36</b>.'),
          rule: '43 − 7 = 43 − 3 − 4 = 36',
          acts: [
            { type: 'chain', title: L('Bo‘laklab ayirish', 'Вычитание по частям', 'Subtract in parts'), make: function (R) { var t = R(2, 9), u = R(1, 8), b = R(u + 1, 9); return { start: t * 10 + u, ops: [['−', u], ['−', b - u]] }; } },
            { type: 'drill', title: L('O‘nlikdan o‘tib ayiring', 'Вычтите с переходом', 'Subtract across ten'), n: 8, make: function (R) { var t = R(2, 9), u = R(0, 8), b = R(u + 1, 9); return { q: (t * 10 + u) + ' − ' + b, a: t * 10 + u - b }; } }
          ],
          quiz: [{ q: '52 − 6 = ?', o: ['46', '56', '48'], a: 0 }, { q: '31 − 4 = ?', o: ['27', '35', '23'], a: 0 }, { q: '80 − 8 = ?', o: ['72', '88', '78'], a: 0 }] },

        { id: 't7', lessons: L('25–26-darslar', 'Уроки 25–26', 'Lessons 25–26'), title: L('28 + 14 ko‘rinishidagi qo‘shish', 'Сложение вида 28 + 14', 'Adding like 28 + 14'),
          keys: [L('o‘nlikdan o‘tish', 'переход через десяток', 'crossing ten')],
          scene: [{ obj: 'rod', n: 3, color: 'orange' }, { obj: 'unit', n: 12, color: 'blue' }],
          explain: L('28 + 14: o‘nliklar 20 + 10 = 30, birliklar 8 + 4 = 12. 30 + 12 = <b>42</b>. Birliklar 10 dan oshsa, yangi o‘nlik hosil bo‘ladi!',
            '28 + 14: десятки 20 + 10 = 30, единицы 8 + 4 = 12. 30 + 12 = <b>42</b>. Если единиц больше 10, образуется новый десяток!',
            '28 + 14: tens 20 + 10 = 30, ones 8 + 4 = 12. 30 + 12 = <b>42</b>. When the ones go past 10 they make a new ten!'),
          rule: '28 + 14 = (20 + 10) + (8 + 4) = 30 + 12 = 42',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var a, b; do { a = R(11, 69); b = R(11, 89 - a); } while (a % 10 + b % 10 < 10 || a + b > 100); return { q: a + ' + ' + b, a: a + b }; } },
            { type: 'problem', make: H.whole({ a: [18, 49], b: [13, 39], emoji: ['🍎', '🍏'], labels: [L('qizil', 'красные', 'red'), L('yashil', 'зелёные', 'green')], cond: [L('Qizil', 'Красные', 'Red'), L('Yashil', 'Зелёные', 'Green')],
              text: function (a, b) { return L('Bog‘dan <b>' + a + '</b> kg qizil va <b>' + b + '</b> kg yashil olma terildi. <u>Jami necha kg</u> olma terildi?', 'В саду собрали <b>' + a + '</b> кг красных и <b>' + b + '</b> кг зелёных яблок. <u>Сколько всего кг</u> яблок?', '<b>' + a + '</b> kg of red and <b>' + b + '</b> kg of green apples were picked. <u>How many kg</u> in total?'); }, u: H.KG }) }
          ],
          quiz: [{ q: '37 + 25 = ?', o: ['62', '52', '512'], a: 0 }, { q: '19 + 19 = ?', o: ['38', '28', '39'], a: 0 }, { q: '46 + 27 = ?', o: ['73', '63', '613'], a: 0 }] },

        { id: 't8', lessons: L('28–29-darslar', 'Уроки 28–29', 'Lessons 28–29'), title: L('43 − 16 ko‘rinishidagi ayirish', 'Вычитание вида 43 − 16', 'Subtracting like 43 − 16'),
          keys: [L('o‘nlikni maydalash', 'размен десятка', 'breaking a ten')],
          scene: [{ obj: 'rod', n: 4, color: 'orange' }, { obj: 'unit', n: 3, color: 'blue' }],
          explain: L('43 − 16: avval o‘nliklarni ayiramiz: 43 − 10 = 33, keyin birliklarni bo‘laklab: 33 − 3 = 30, 30 − 3 = <b>27</b>.',
            '43 − 16: сначала вычтем десятки: 43 − 10 = 33, потом единицы по частям: 33 − 3 = 30, 30 − 3 = <b>27</b>.',
            '43 − 16: first subtract the tens: 43 − 10 = 33, then the ones in parts: 33 − 3 = 30, 30 − 3 = <b>27</b>.'),
          rule: '43 − 16 = 43 − 10 − 3 − 3 = 27',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var a, b; do { a = R(30, 99); b = R(11, a - 5); } while (a % 10 >= b % 10); return { q: a + ' − ' + b, a: a - b }; } },
            { type: 'problem', make: H.diff({ a: [30, 70], b: [12, 60], who: [L('1-sinf', '1 класс', 'Class 1'), L('2-sinf', '2 класс', 'Class 2')],
              text: function (a, b) { return L('1-sinf <b>' + a + '</b> kg, 2-sinf <b>' + b + '</b> kg qog‘oz yig‘di. <u>Bir sinf ikkinchisidan necha kg ko‘p</u> yig‘di?', '1 класс собрал <b>' + a + '</b> кг макулатуры, 2 класс — <b>' + b + '</b> кг. <u>На сколько кг больше</u> собрал один класс?', 'Class 1 collected <b>' + a + '</b> kg of paper and Class 2 collected <b>' + b + '</b> kg. <u>How many kg more</u> did one class collect?'); }, u: H.KG }) }
          ],
          quiz: [{ q: '52 − 17 = ?', o: ['35', '45', '25'], a: 0 }, { q: '60 − 24 = ?', o: ['36', '44', '46'], a: 0 }, { q: '71 − 38 = ?', o: ['33', '43', '47'], a: 0 }] }
      ] },

      { id: 's3', title: L('Ustun usuli va og‘zaki hisob', 'Столбик и устный счёт', 'Column method and mental maths'), icon: '🧾', color: 'violet', topics: [
        { id: 't9', lessons: L('27, 30, 32-darslar', 'Уроки 27, 30, 32', 'Lessons 27, 30, 32'), title: L('Ustun ko‘rinishida qo‘shish va ayirish', 'Сложение и вычитание столбиком', 'Column addition and subtraction'),
          keys: [L('ustun', 'столбик', 'column'), L('xona', 'разряд', 'place'), L('o‘nlikni eslab qolish', 'запоминаем десяток', 'carrying a ten')],
          scene: [{ obj: 'rod', n: 3, color: 'orange' }, { obj: 'unit', n: 8, color: 'blue' }],
          explain: L('Ustunda birliklarni birliklar ostiga, o‘nliklarni o‘nliklar ostiga yozamiz va <b>o‘ngdan</b> boshlaymiz. Birliklar yig‘indisi 10 dan oshsa, 1 o‘nlikni «yodda tutib» o‘nliklarga qo‘shamiz.',
            'В столбике пишем единицы под единицами, десятки под десятками и начинаем <b>справа</b>. Если единиц больше 10, «запоминаем» десяток и прибавляем его к десяткам.',
            'In a column we write ones under ones and tens under tens and start from the <b>right</b>. If the ones add up to more than 10, we “carry” a ten to the tens.'),
          rule: '  38<br>+ 25<br>——<br>  63',
          acts: [
            { type: 'column', title: L('Ustunda qo‘shing', 'Сложите столбиком', 'Add in a column'), make: col('+', 12, 79, true) },
            { type: 'column', title: L('Ustunda ayiring', 'Вычтите столбиком', 'Subtract in a column'), make: col('-', 30, 99, true) },
            { type: 'column', title: L('Yana bitta', 'Ещё один', 'One more'), make: function (R) { return R(0, 1) ? col('+', 12, 79)(R) : col('-', 30, 99)(R); } }
          ],
          quiz: [{ q: '38 + 25 = ?', o: ['63', '53', '513'], a: 0 }, { q: '64 − 28 = ?', o: ['36', '44', '46'], a: 0 }, { q: L('Ustunda qayerdan boshlaymiz?', 'С чего начинаем в столбике?', 'Where do we start in a column?'), o: [L('Birliklardan (o‘ngdan)', 'С единиц (справа)', 'The ones (right)'), L('O‘nliklardan', 'С десятков', 'The tens'), L('Ixtiyoriy', 'Неважно', 'Anywhere')], a: 0 }] },

        { id: 't10', lessons: L('31, 33-darslar', 'Уроки 31, 33', 'Lessons 31, 33'), title: L('Qo‘shishning xossalari. Og‘zaki hisoblash usullari', 'Свойства сложения. Приёмы устного счёта', 'Properties of addition. Mental maths tricks'),
          keys: [L('o‘rin almashtirish', 'перестановка', 'swapping'), L('guruhlash', 'группировка', 'grouping'), L('qulay usul', 'удобный способ', 'smart way')],
          scene: [{ obj: 'cube', n: 3, color: 'pink' }, { obj: 'cube', n: 7, color: 'cyan' }],
          explain: L('Qo‘shiluvchilarni o‘rnini almashtirsak yoki qulay guruhlasak, yig‘indi o‘zgarmaydi. 17 + 25 + 3: avval 17 + 3 = 20, keyin 20 + 25 = <b>45</b> — og‘zaki hisoblash juda oson!',
            'От перестановки и группировки слагаемых сумма не меняется. 17 + 25 + 3: сначала 17 + 3 = 20, потом 20 + 25 = <b>45</b> — считать в уме легко!',
            'Swapping or grouping addends does not change the sum. 17 + 25 + 3: first 17 + 3 = 20, then 20 + 25 = <b>45</b> — easy mental maths!'),
          rule: 'a + b = b + a · (a + b) + c = a + (b + c)',
          acts: [
            { type: 'drill', title: L('Qulay usulda', 'Удобным способом', 'The smart way'), n: 6, make: function (R) { var a = R(11, 39), u = 10 - a % 10, b = R(1, 3) * 10 + u, c = R(11, 40); return pick([{ q: a + ' + ' + c + ' + ' + b, a: a + b + c }, { q: c + ' + ' + a + ' + ' + b, a: a + b + c }]); } },
            { type: 'choose', title: L('Qaysi juftni avval qo‘shamiz?', 'Какую пару сложить сначала?', 'Which pair first?'), icon: '🧠', make: function (R) { var a = R(11, 39), u = 10 - a % 10, b = R(1, 3) * 10 + u, c; do { c = R(11, 40); } while ((a + c) % 10 === 0 || (b + c) % 10 === 0); return choice('<span class="kd-big">' + a + ' + ' + c + ' + ' + b + '</span>', [a + ' + ' + b, a + ' + ' + c, c + ' + ' + b], 0); } }
          ],
          quiz: [{ q: '26 + 18 + 4 = ?', o: ['48', '44', '58'], a: 0 }, { q: '15 + 37 = 37 + ?', o: ['15', '52', '22'], a: 0 }, { q: '9 + 56 + 1 = ?', o: ['66', '65', '56'], a: 0 }] },

        { id: 't11', lessons: L('34–37-darslar', 'Уроки 34–37', 'Lessons 34–37'), title: L('Yig‘indidan sonni va sondan yig‘indini ayirish', 'Вычитание числа из суммы и суммы из числа', 'Subtracting from a sum and a sum from a number'),
          keys: ['(a + b) − c', 'a − (b + c)'],
          scene: [{ obj: 'apple', n: 5, color: 'red' }, { obj: 'apple', n: 3, color: 'green' }],
          explain: L('(30 + 8) − 5: ayiriladigan sonni qulay qo‘shiluvchidan ayiramiz: 30 + (8 − 5) = <b>33</b>. 40 − (10 + 6): avval 10 ni, keyin 6 ni ayiramiz: 40 − 10 − 6 = <b>24</b>.',
            '(30 + 8) − 5: вычитаем число из удобного слагаемого: 30 + (8 − 5) = <b>33</b>. 40 − (10 + 6): вычитаем сначала 10, потом 6: 40 − 10 − 6 = <b>24</b>.',
            '(30 + 8) − 5: subtract from the handy addend: 30 + (8 − 5) = <b>33</b>. 40 − (10 + 6): subtract 10, then 6: 40 − 10 − 6 = <b>24</b>.'),
          rule: '(a + b) − c = a + (b − c) · a − (b + c) = a − b − c',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var a = R(2, 9) * 10, b = R(5, 9), c = R(1, b); var d = R(1, Math.floor(a / 10) - 1) * 10, e = R(1, 9); return pick([{ q: '(' + a + ' + ' + b + ') − ' + c, a: a + b - c }, { q: a + ' − (' + d + ' + ' + e + ')', a: a - d - e }]); } },
            { type: 'problem', make: function (R) { var a = R(20, 40), b = R(10, 20), c = R(5, 15);
              return { story: L('Kutubxonada <b>' + a + '</b> ta ertak va <b>' + b + '</b> ta she’rlar kitobi bor edi. O‘quvchilar <b>' + c + '</b> ta kitob olishdi. <u>Nechta kitob qoldi</u>?', 'В библиотеке было <b>' + a + '</b> книг сказок и <b>' + b + '</b> книг стихов. Ученики взяли <b>' + c + '</b> книг. <u>Сколько книг осталось</u>?', 'A library had <b>' + a + '</b> fairy-tale books and <b>' + b + '</b> poetry books. Pupils borrowed <b>' + c + '</b>. <u>How many books are left</u>?'),
                expr: [a, '+', b, '−', c, '=', a + b - c], ans: a + b - c, unit: PCS }; } }
          ],
          quiz: [{ q: '(40 + 7) − 4 = ?', o: ['43', '51', '33'], a: 0 }, { q: '50 − (20 + 5) = ?', o: ['25', '35', '75'], a: 0 }, { q: '(60 + 9) − 9 = ?', o: ['60', '69', '78'], a: 0 }] },

        { id: 't12', lessons: L('38–41-darslar', 'Уроки 38–41', 'Lessons 38–41'), title: L('Masalalar yechish va amaliy topshiriqlar', 'Решение задач и практические задания', 'Problem solving and practice'),
          keys: [L('masala', 'задача', 'problem'), L('sxema', 'схема', 'diagram'), L('tekshirish', 'проверка', 'check')],
          scene: [{ obj: 'robot', n: 2, color: 'violet' }, { obj: 'star', n: 2, color: 'yellow' }],
          explain: L('O‘rganganlarimizni masalalarda qo‘llaymiz: shartni o‘qiymiz, sxema chizamiz, amalni tanlaymiz va javobni tekshiramiz.',
            'Применим всё изученное в задачах: читаем условие, рисуем схему, выбираем действие и проверяем ответ.',
            'Let’s use everything in word problems: read the condition, draw a diagram, choose the operation and check the answer.'),
          rule: L('O‘qi → sxema → amal → javob → tekshir', 'Прочитай → схема → действие → ответ → проверь', 'Read → diagram → operation → answer → check'),
          acts: [
            { type: 'problem', make: H.more({ a: [25, 60], d: [8, 25], who: [L('Dushanba', 'Понедельник', 'Monday'), L('Seshanba', 'Вторник', 'Tuesday')],
              text: function (a, d) { return L('Dushanba kuni do‘konga <b>' + a + '</b> ta non keltirildi, seshanba kuni esa <b>' + d + '</b> ta ko‘p. <u>Seshanba kuni nechta</u> non keltirildi?', 'В понедельник в магазин привезли <b>' + a + '</b> батонов, а во вторник — на <b>' + d + '</b> больше. <u>Сколько батонов привезли во вторник</u>?', 'On Monday <b>' + a + '</b> loaves were delivered and on Tuesday <b>' + d + '</b> more. <u>How many on Tuesday</u>?'); } }) },
            { type: 'problem', make: H.less({ a: [40, 90], d: [12, 35], who: [L('Akmal', 'Акмаль', 'Akmal'), L('Madina', 'Мадина', 'Madina')],
              text: function (a, d) { return L('Akmal <b>' + a + '</b> ta marka yig‘di, Madina undan <b>' + d + '</b> ta kam. <u>Madina nechta</u> marka yig‘di?', 'Акмаль собрал <b>' + a + '</b> марок, а Мадина на <b>' + d + '</b> меньше. <u>Сколько марок у Мадины</u>?', 'Akmal collected <b>' + a + '</b> stamps and Madina <b>' + d + '</b> fewer. <u>How many does Madina have</u>?'); } }) },
            { type: 'magic', given: 4 }
          ],
          quiz: [{ q: L('35 tadan 17 ta ko‘p?', 'На 17 больше, чем 35?', '17 more than 35?'), o: ['52', '18', '42'], a: 0 }, { q: L('60 dan 25 ta kam?', 'На 25 меньше, чем 60?', '25 fewer than 60?'), o: ['35', '85', '45'], a: 0 }, { q: '48 + 16 − 20 = ?', o: ['44', '84', '24'], a: 0 }] }
      ] }
    ]
  };
  C.addPart(part1);
})(this);
