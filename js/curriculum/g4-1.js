// Nuvemath — 4-sinf, I qism (manba: V.Y. Uvarova va boshq., «Matematika. 4-sinf. I qism», Toshkent, 2026, yangi nashr).
// Mavzular tartibi va nomlari darslikdan olingan; tushuntirishlar, topshiriqlar va rasmlar Nuvemath uchun qayta yozilgan.
(function (root) {
  'use strict';
  var C = root.NMCurriculum, H = C.H, L = H.L, mk = H.mk, PCS = H.PCS, choice = H.choice, pick = H.pick;
  var SOM = L('so‘m', 'сум', 'sum'), KM = L('km', 'км', 'km'), KG = H.KG, LT = H.LT, MIN = L('min', 'мин', 'min');
  function fmt(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' '); }
  function divisors(n) { var o = []; for (var i = 1; i <= n; i++) if (n % i === 0) o.push(i); return o; }
  // bitta to'g'ri (k ga bo'linadigan) va ikkita noto'g'ri son
  function divPick(R, k, lo, hi) {
    var good = R(Math.ceil(lo / k), Math.floor(hi / k)) * k, bad = [];
    while (bad.length < 2) { var x = R(lo, hi); if (x % k && bad.indexOf(x) < 0) bad.push(x); }
    return choice(mk(function (l) { return { uz: 'Qaysi son <b>' + k + ' ga</b> qoldiqsiz bo‘linadi?', ru: 'Какое число делится на <b>' + k + '</b> без остатка?', en: 'Which number is divisible by <b>' + k + '</b>?' }[l]; }), [fmt(good), fmt(bad[0]), fmt(bad[1])], 0);
  }
  function digitSum(n) { return String(n).split('').reduce(function (s, c) { return s + +c; }, 0); }

  var part1 = {
    grade: 4, part: 1, edition: L('2026-yil yangi nashri', 'Новое издание 2026 г.', '2026 new edition'),
    title: L('Amallar tartibi, ko‘paytirish, bo‘lish va million', 'Порядок действий, умножение, деление и миллион', 'Order of operations, multiplication, division and the million'),
    book: L('V.Y. Uvarova va boshq. Matematika, 4-sinf, I qism (Toshkent, 2026)', 'В.Ю. Уварова и др. Математика, 4 класс, часть I (Ташкент, 2026)', 'V.Y. Uvarova et al. Mathematics, Grade 4, Part I (Tashkent, 2026)'),
    intro: L('4-sinfni takrorlashdan boshlaymiz, so‘ng ko‘p xonali sonlarni ikki va uch xonali songa ko‘paytirish va bo‘lishni, bo‘linish alomatlarini o‘rganamiz. Oxirida million va millionlar sinfi bilan tanishamiz.',
      'Начинаем 4 класс с повторения, затем учимся умножать и делить многозначные числа на двузначные и трёхзначные, изучаем признаки делимости. В конце знакомимся с миллионом и классом миллионов.',
      'We start Grade 4 with a review, then learn to multiply and divide large numbers by two- and three-digit numbers and meet the divisibility rules. Finally we get to know the million and the millions period.'),
    sections: [
      { id: 's1', title: L('Takrorlash', 'Повторение', 'Review'), icon: '🔁', color: 'blue', topics: [
        { id: 't1', lessons: L('1-dars', 'Урок 1', 'Lesson 1'), title: L('O‘rganilganlarni takrorlash', 'Повторение изученного', 'Reviewing what we know'),
          keys: [L('xona qo‘shiluvchilari', 'разрядные слагаемые', 'expanded form'), L('minglar', 'тысячи', 'thousands')],
          scene: [{ obj: 'cube', n: 2, color: 'green' }, { obj: 'flat', n: 3, color: 'blue' }, { obj: 'rod', n: 4, color: 'orange' }],
          explain: L('52 647 sonida: 5 ta o‘n minglik, 2 ta minglik, 6 ta yuzlik, 4 ta o‘nlik va 7 ta birlik. Sonni xona qo‘shiluvchilari yig‘indisi ko‘rinishida yozamiz: 50 000 + 2 000 + 600 + 40 + 7.',
            'В числе 52 647: 5 десятков тысяч, 2 тысячи, 6 сотен, 4 десятка и 7 единиц. Записываем число суммой разрядных слагаемых: 50 000 + 2 000 + 600 + 40 + 7.',
            'In 52 647 there are 5 ten-thousands, 2 thousands, 6 hundreds, 4 tens and 7 ones. In expanded form: 50 000 + 2 000 + 600 + 40 + 7.'),
          rule: '52 647 = 50 000 + 2 000 + 600 + 40 + 7',
          acts: [
            { type: 'drill', title: L('Sonni yozing', 'Запишите число', 'Write the number'), n: 6, make: function (R) { var a = R(1, 9), b = R(0, 9), c = R(0, 9), d = R(1, 9), e = R(0, 9), parts = [a * 10000, b * 1000, c * 100, d * 10, e].filter(function (x) { return x; }); return { q: parts.map(fmt).join(' + '), a: a * 10000 + b * 1000 + c * 100 + d * 10 + e }; } },
            { type: 'column', make: function (R) { var a = R(1000, 7999), b = R(1000, 1999); return R(0, 1) ? { a: a, b: b, op: '+', ans: a + b } : { a: a + b, b: b, op: '-', ans: a }; } },
            { type: 'problem', make: function (R) { var k = R(12, 25), n = R(4, 9); return { story: L('Maktab bog‘iga <b>' + n + '</b> qator daraxt ekildi, har qatorda <b>' + k + '</b> tadan. <u>Jami nechta</u> daraxt?', 'В школьном саду посадили <b>' + n + '</b> рядов деревьев, по <b>' + k + '</b> в каждом. <u>Сколько всего</u> деревьев?', '<b>' + n + '</b> rows of <b>' + k + '</b> trees were planted in the school garden. <u>How many</u> trees in all?'), expr: [k, '·', n, '=', k * n], ans: k * n, unit: PCS }; } }
          ],
          quiz: [{ q: L('23 007 da nechta minglik bor?', 'Сколько тысяч в 23 007?', 'How many thousands in 23 007?'), o: ['3', '23', '7'], a: 0 }, { q: '4 245 − 2 899 = ?', o: ['1346', '1446', '2346'], a: 0 }] },

        { id: 't2', lessons: L('2–3-darslar', 'Уроки 2–3', 'Lessons 2–3'), title: L('Qavssiz ifodalarda amallar tartibi', 'Порядок действий в выражениях без скобок', 'Order of operations without brackets'),
          keys: [L('avval · va :', 'сначала · и :', 'first · and :'), L('valyuta kursi', 'курс валюты', 'exchange rate')],
          scene: [{ obj: 'medal', n: 3, color: 'yellow' }],
          explain: L('Qavs bo‘lmasa, avval ko‘paytirish va bo‘lish (chapdan o‘ngga), keyin qo‘shish va ayirish bajariladi: 20 + 30 · 2 = 20 + 60 = 80. <b>Valyuta kursi</b> — bir davlat pulining boshqa davlat pulidagi narxi.',
            'Если скобок нет, сначала выполняем умножение и деление (слева направо), потом сложение и вычитание: 20 + 30 · 2 = 20 + 60 = 80. <b>Курс валюты</b> — цена денег одной страны в деньгах другой.',
            'Without brackets, do multiplication and division first (left to right), then addition and subtraction: 20 + 30 · 2 = 20 + 60 = 80. An <b>exchange rate</b> is the price of one country’s money in another’s.'),
          rule: L('· : → + −', '· : → + −', '· : → + −'),
          acts: [
            { type: 'choose', title: L('Birinchi amal', 'Первое действие', 'The first operation'), icon: '1️⃣', make: function (R) { var a = R(10, 99), b = R(2, 9), c = R(2, 9), d = R(1, 20), k = R(0, 1); return choice('<span class="kd-big">' + a + (k ? ' + ' + b + ' · ' + c + ' − ' : ' − ' + (b * c) + ' : ' + c + ' + ') + d + '</span>', k ? ['·', '+', '−'] : [':', '−', '+'], 0); } },
            { type: 'drill', n: 8, make: function (R) { var a = R(10, 500), b = R(2, 9), c = R(2, 90); return pick([{ q: a + ' + ' + b + ' · ' + c, a: a + b * c }, { q: (a + b * c) + ' − ' + b + ' · ' + c, a: a }, { q: a + ' + ' + (b * c) + ' : ' + b, a: a + c }, { q: (b * c * 2) + ' : ' + b + ' − ' + c, a: c }]); } },
            { type: 'problem', title: L('Valyuta kursi', 'Курс валюты', 'Exchange rate'), make: function (R) { var p = R(5, 40), rate = pick([12000, 12500, 13000]); return { story: L('1 dollar = <b>' + fmt(rate) + '</b> so‘m. Narxi <b>' + p + '</b> dollar bo‘lgan fleshka <u>necha so‘m</u> turadi?', '1 доллар = <b>' + fmt(rate) + '</b> сум. Флешка стоит <b>' + p + '</b> долларов. <u>Сколько это в сумах</u>?', '1 dollar = <b>' + fmt(rate) + '</b> sum. A flash drive costs <b>' + p + '</b> dollars. <u>How many sum</u> is that?'), expr: [rate, '·', p, '=', rate * p], ans: rate * p, unit: SOM }; } }
          ],
          quiz: [{ q: '20 + 30 · 2 = ?', o: ['80', '100', '52'], a: 0 }, { q: '100 − 40 : 4 = ?', o: ['90', '15', '60'], a: 0 }] },

        { id: 't3', lessons: L('4–5-darslar', 'Уроки 4–5', 'Lessons 4–5'), title: L('Qavsli ifodalarda amallar tartibi', 'Порядок действий в выражениях со скобками', 'Order of operations with brackets'),
          keys: ['( )', L('amallar tartibi', 'порядок действий', 'order of operations')],
          scene: [{ obj: 'cube', n: 3, color: 'violet' }, { obj: 'cube', n: 3, color: 'cyan' }],
          explain: L('Qavs ichidagi amal <b>birinchi</b> bajariladi: (20 + 30) · 2 = 50 · 2 = 100. Qavssiz esa natija boshqacha: 20 + 30 · 2 = 80. Qavs — «avval meni hisobla!» degan belgi.',
            'Действие в скобках выполняется <b>первым</b>: (20 + 30) · 2 = 50 · 2 = 100. Без скобок результат другой: 20 + 30 · 2 = 80. Скобки говорят: «сначала посчитай меня!»',
            'The operation in brackets comes <b>first</b>: (20 + 30) · 2 = 50 · 2 = 100. Without brackets the result differs: 20 + 30 · 2 = 80. Brackets say “work me out first!”'),
          rule: L('( ) → · : → + −', '( ) → · : → + −', '( ) → · : → + −'),
          acts: [
            { type: 'drill', n: 8, make: function (R) { var a = R(10, 90), b = R(10, 90), c = R(2, 9); return pick([{ q: '(' + a + ' + ' + b + ') · ' + c, a: (a + b) * c }, { q: c + ' · (' + (a + b) + ' − ' + b + ')', a: c * a }, { q: '(' + (a * c) + ' + ' + (b * c) + ') : ' + c, a: a + b }, { q: '(' + (a + b) + ' − ' + a + ') · ' + c, a: b * c }]); } },
            { type: 'choose', title: L('Qaysi biri katta?', 'Что больше?', 'Which is greater?'), icon: '⚖️', make: function (R) { var a = R(5, 40), b = R(5, 40), c = R(2, 9); return choice(L('Qaysi ifodaning qiymati <b>katta</b>?', 'Значение какого выражения <b>больше</b>?', 'Which expression has the <b>greater</b> value?'), ['(' + a + ' + ' + b + ') · ' + c, a + ' + ' + b + ' · ' + c], 0); } }
          ],
          quiz: [{ q: '(20 + 30) · 2 = ?', o: ['100', '80', '52'], a: 0 }, { q: '(90 − 30) : 6 = ?', o: ['10', '85', '60'], a: 0 }] },

        { id: 't4', lessons: L('6–7-darslar', 'Уроки 6–7', 'Lessons 6–7'), title: L('Misol va masalalar yechish', 'Решение примеров и задач', 'Solving examples and problems'),
          keys: [L('qarama-qarshi harakat', 'встречное движение', 'moving towards each other'), '1 t = 10 q = 1 000 kg'],
          scene: [{ obj: 'drone', n: 2, color: 'orange' }],
          explain: L('Ikki poyezd bir-biriga qarab yursa, ular orasidagi masofa har soatda <b>tezliklar yig‘indisi</b>cha qisqaradi: S = (v₁ + v₂) · t. Massa birliklari: 1 t = 10 q, 1 q = 100 kg.',
            'Если два поезда едут навстречу друг другу, расстояние между ними каждый час уменьшается на <b>сумму скоростей</b>: S = (v₁ + v₂) · t. Единицы массы: 1 т = 10 ц, 1 ц = 100 кг.',
            'When two trains move towards each other, the gap shrinks every hour by the <b>sum of their speeds</b>: S = (v₁ + v₂) · t. Mass units: 1 t = 10 q, 1 q = 100 kg.'),
          rule: 'S = (v₁ + v₂) · t',
          acts: [
            { type: 'problem', title: L('Qarama-qarshi harakat', 'Встречное движение', 'Towards each other'), make: function (R) { var v1 = R(6, 9) * 10, v2 = R(5, 9) * 10, t = R(2, 5); return { story: L('Ikki shahardan bir-biriga qarab ikki poyezd chiqdi: biri <b>' + v1 + '</b> km/soat, ikkinchisi <b>' + v2 + '</b> km/soat tezlikda. Ular <b>' + t + '</b> soatda uchrashdi. Shaharlar orasidagi <u>masofa</u>?', 'Из двух городов навстречу друг другу вышли два поезда: со скоростью <b>' + v1 + '</b> км/ч и <b>' + v2 + '</b> км/ч. Они встретились через <b>' + t + '</b> ч. <u>Расстояние</u> между городами?', 'Two trains left two cities towards each other at <b>' + v1 + '</b> km/h and <b>' + v2 + '</b> km/h. They met after <b>' + t + '</b> hours. <u>Distance</u> between the cities?'), expr: [v1, '+', v2, '·', t, '=', (v1 + v2) * t], ans: (v1 + v2) * t, unit: KM }; } },
            { type: 'drill', title: L('Kilogrammga aylantiring', 'Переведите в килограммы', 'Convert to kilograms'), n: 6, make: function (R) { var t = R(1, 9), q = R(0, 9), kg = R(0, 99); return { q: mk(function (l) { return t + { uz: ' t ', ru: ' т ', en: ' t ' }[l] + q + { uz: ' q ', ru: ' ц ', en: ' q ' }[l] + (kg ? kg + { uz: ' kg', ru: ' кг', en: ' kg' }[l] : '') + ' = ? ' + { uz: 'kg', ru: 'кг', en: 'kg' }[l]; }), a: t * 1000 + q * 100 + kg }; } },
            { type: 'problem', title: L('Ikki bosqichli masala', 'Задача в два действия', 'Two-step problem'), make: function (R) { var u = R(6, 12) * 10, k = R(2, 4), m = R(k + 1, 9); return { story: L('<b>' + k + '</b> ta bir xil yuk mashinasida <b>' + k * u + '</b> yashik olma tashildi. <b>' + m * u + '</b> yashik uchun <u>nechta</u> shunday mashina kerak? (Avval bitta mashinaga necha yashik sig‘ishini toping.)', 'В <b>' + k + '</b> одинаковых грузовиках перевезли <b>' + k * u + '</b> ящиков яблок. <u>Сколько</u> таких грузовиков нужно для <b>' + m * u + '</b> ящиков? (Сначала узнайте, сколько ящиков в одном.)', '<b>' + k + '</b> identical trucks carried <b>' + k * u + '</b> crates of apples. <u>How many</u> such trucks are needed for <b>' + m * u + '</b> crates? (First find how many fit in one.)'), expr: [m * u, ':', u, '=', m], ans: m, unit: PCS }; } }
          ],
          quiz: [{ q: L('3 t 5 q = ? kg', '3 т 5 ц = ? кг', '3 t 5 q = ? kg'), o: ['3500', '350', '8000'], a: 0 }, { q: L('v₁ = 60, v₂ = 40 km/soat, t = 3 soat. S = ?', 'v₁ = 60, v₂ = 40 км/ч, t = 3 ч. S = ?', 'v₁ = 60, v₂ = 40 km/h, t = 3 h. S = ?'), o: ['300', '60', '180'], a: 0 }] }
      ] },

      { id: 's2', title: L('Ko‘p xonali sonlarni ko‘paytirish', 'Умножение многозначных чисел', 'Multiplying large numbers'), icon: '✖️', color: 'orange', topics: [
        { id: 't5', lessons: L('8-dars', 'Урок 8', 'Lesson 8'), title: L('Ko‘p xonali sonni ikki xonali songa ko‘paytirish', 'Умножение многозначного числа на двузначное', 'Multiplying by a two-digit number'),
          keys: [L('taqsimot xossasi', 'распределительное свойство', 'distributive property'), '23 = 20 + 3'],
          scene: [{ obj: 'flat', n: 2, color: 'green' }, { obj: 'rod', n: 3, color: 'orange' }],
          explain: L('Ikki xonali sonni o‘nliklar va birliklarga ajratamiz: 324 · 23 = 324 · 20 + 324 · 3 = 6 480 + 972 = 7 452. Bu — ko‘paytirishning <b>taqsimot xossasi</b>.',
            'Раскладываем двузначное число на десятки и единицы: 324 · 23 = 324 · 20 + 324 · 3 = 6 480 + 972 = 7 452. Это <b>распределительное свойство</b> умножения.',
            'Split the two-digit number into tens and ones: 324 · 23 = 324 · 20 + 324 · 3 = 6 480 + 972 = 7 452. This is the <b>distributive property</b>.'),
          rule: 'a · (b + c) = a · b + a · c',
          acts: [
            { type: 'choose', title: L('To‘g‘ri yoyilma', 'Верное разложение', 'The right split'), icon: '🧩', make: function (R) { var a = R(101, 999), t = R(2, 9), u = R(1, 9); return choice('<span class="kd-big">' + a + ' · ' + (t * 10 + u) + ' = ?</span>', [a + ' · ' + t * 10 + ' + ' + a + ' · ' + u, a + ' · ' + t * 10 + ' + ' + u, a + ' · ' + t + ' + ' + a + ' · ' + u], 0); } },
            { type: 'drill', n: 6, make: function (R) { var a = R(12, 99), t = R(1, 9) * 10; return pick([{ q: a + ' · ' + t, a: a * t }, { q: a + ' · ' + (t + 1), a: a * (t + 1) }, { q: a + ' · ' + t + ' + ' + a + ' · 2', a: a * (t + 2) }]); } }
          ],
          quiz: [{ q: '324 · 23 = 324 · 20 + 324 · ?', o: ['3', '23', '2'], a: 0 }, { q: '25 · 12 = ?', o: ['300', '250', '37'], a: 0 }] },

        { id: 't6', lessons: L('9–10-darslar', 'Уроки 9–10', 'Lessons 9–10'), title: L('Ikki xonali songa ko‘paytirish algoritmi', 'Алгоритм умножения на двузначное число', 'Algorithm: multiplying by a two-digit number'),
          keys: [L('ustunda ko‘paytirish', 'умножение столбиком', 'column multiplication'), L('to‘liqsiz ko‘paytma', 'неполное произведение', 'partial product')],
          scene: [{ obj: 'robot', n: 1, color: 'blue' }, { obj: 'cube', n: 4, color: 'yellow' }],
          explain: L('Ustunda ko‘paytiramiz: avval birliklarga (1-to‘liqsiz ko‘paytma), so‘ng o‘nliklarga — natijani bir xona chapga surib yozamiz (2-to‘liqsiz ko‘paytma). Oxirida ikkalasini qo‘shamiz.',
            'Умножаем столбиком: сначала на единицы (1-е неполное произведение), затем на десятки — записываем со сдвигом на один разряд влево (2-е неполное произведение). Потом складываем.',
            'Multiply in a column: first by the ones (1st partial product), then by the tens, writing it one place to the left (2nd partial product). Then add them.'),
          rule: L('birliklar → o‘nliklar (surib) → qo‘shish', 'единицы → десятки (со сдвигом) → сложение', 'ones → tens (shifted) → add'),
          acts: [
            { type: 'column', title: L('Ustunda ko‘paytiring', 'Умножьте столбиком', 'Multiply in a column'), make: function (R) { var a = R(102, 989), b = R(12, 98); return { a: a, b: b, op: '*', ans: a * b }; } },
            { type: 'problem', make: function (R) { var k = R(36, 48), n = R(11, 15); return { story: L('Oromgohga <b>' + n + '</b> ta avtobus keldi, har birida <b>' + k + '</b> nafardan bola. <u>Jami nechta</u> bola keldi?', 'В лагерь приехали <b>' + n + '</b> автобусов, в каждом по <b>' + k + '</b> детей. <u>Сколько всего</u> детей?', '<b>' + n + '</b> buses came to the camp with <b>' + k + '</b> children each. <u>How many</u> children in all?'), expr: [k, '·', n, '=', k * n], ans: k * n, unit: L('nafar', 'детей', 'children') }; } }
          ],
          quiz: [{ q: '45 · 12 = ?', o: ['540', '450', '57'], a: 0 }, { q: '123 · 11 = ?', o: ['1353', '1233', '134'], a: 0 }] },

        { id: 't7', lessons: L('11–12-darslar', 'Уроки 11–12', 'Lessons 11–12'), title: L('Uch xonali songa ko‘paytirish', 'Умножение на трёхзначное число', 'Multiplying by a three-digit number'),
          keys: [L('uchta to‘liqsiz ko‘paytma', 'три неполных произведения', 'three partial products')],
          scene: [{ obj: 'cube', n: 3, color: 'green' }, { obj: 'cube', n: 3, color: 'orange' }, { obj: 'cube', n: 3, color: 'blue' }],
          explain: L('Uch xonali songa ko‘paytirishda uchta to‘liqsiz ko‘paytma hosil bo‘ladi: birliklarga, o‘nliklarga va yuzliklarga. Har biri bir xona chapga suriladi. Masalan, 214 · 123 = 214 · 100 + 214 · 20 + 214 · 3 = 26 322.',
            'При умножении на трёхзначное число получаются три неполных произведения: на единицы, десятки и сотни. Каждое сдвигаем на разряд влево. Например, 214 · 123 = 214 · 100 + 214 · 20 + 214 · 3 = 26 322.',
            'Multiplying by a three-digit number gives three partial products: by the ones, tens and hundreds, each shifted one place left. E.g. 214 · 123 = 214 · 100 + 214 · 20 + 214 · 3 = 26 322.'),
          rule: '214 · 123 = 214 · 100 + 214 · 20 + 214 · 3',
          acts: [
            { type: 'column', make: function (R) { var a = R(102, 999), b = R(101, 399); return { a: a, b: b, op: '*', ans: a * b }; } },
            { type: 'drill', title: L('Yaxlit sonlar', 'Круглые числа', 'Round numbers'), n: 6, make: function (R) { var a = R(2, 9) * 10, b = R(1, 9) * 100, c = R(11, 99); return pick([{ q: a + ' · ' + b, a: a * b }, { q: c + ' · ' + b, a: c * b }, { q: (c * 10) + ' · ' + a, a: c * 10 * a }]); } }
          ],
          quiz: [{ q: '250 · 400 = ?', o: ['100000', '10000', '650'], a: 0 }, { q: '111 · 111 = ?', o: ['12321', '1221', '11111'], a: 0 }] },

        { id: 't8', lessons: L('15–16-darslar', 'Уроки 15–16', 'Lessons 15–16'), title: L('O‘rtasida nol bo‘lgan sonlarni ko‘paytirish. Masalalar', 'Умножение чисел с нулём в середине. Задачи', 'Multiplying numbers with a zero in the middle. Problems'),
          keys: ['305 · 24', '4 200 · 30', L('qiymat', 'стоимость', 'cost')],
          scene: [{ obj: 'box', n: 3, color: 'pink' }],
          explain: L('O‘rtadagi nol ham xona: 305 · 24 da o‘nliklar xonasiga 0 · 24 = 0 yoziladi. Nollar bilan tugaydigan sonlarda nollarni chetga olib qo‘yamiz: 4 200 · 30 → 42 · 3 = 126 va uchta nol: 126 000.',
            'Нуль в середине — тоже разряд: в 305 · 24 в разряд десятков пишем 0 · 24 = 0. У чисел с нулями на конце нули откладываем: 4 200 · 30 → 42 · 3 = 126 и три нуля: 126 000.',
            'A middle zero is still a place: in 305 · 24 the tens place gets 0 · 24 = 0. With trailing zeros, set the zeros aside: 4 200 · 30 → 42 · 3 = 126 plus three zeros: 126 000.'),
          rule: '4 200 · 30 = 42 · 3 · 1 000 = 126 000',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var a = R(1, 9) * 100 + R(1, 9), b = R(12, 49), c = R(11, 99), z = R(2, 9); return pick([{ q: a + ' · ' + b, a: a * b }, { q: fmt(c * 100) + ' · ' + z * 10, a: c * 100 * z * 10 }]); } },
            { type: 'problem', title: L('Xarid', 'Покупка', 'Shopping'), make: function (R) { var p1 = R(30, 60) * 1000, q1 = R(2, 6), p2 = R(40, 90) * 1000, q2 = R(2, 4); return { story: L('Akmal har biri <b>' + fmt(p1) + '</b> so‘mdan <b>' + q1 + '</b> ta kitob va har biri <b>' + fmt(p2) + '</b> so‘mdan <b>' + q2 + '</b> ta albom oldi. <u>Jami qancha</u> to‘ladi?', 'Акмаль купил <b>' + q1 + '</b> книг по <b>' + fmt(p1) + '</b> сум и <b>' + q2 + '</b> альбома по <b>' + fmt(p2) + '</b> сум. <u>Сколько всего</u> он заплатил?', 'Akmal bought <b>' + q1 + '</b> books at <b>' + fmt(p1) + '</b> sum and <b>' + q2 + '</b> albums at <b>' + fmt(p2) + '</b> sum. <u>How much</u> did he pay?'), expr: [p1 * q1, '+', p2 * q2, '=', p1 * q1 + p2 * q2], ans: p1 * q1 + p2 * q2, unit: SOM }; } }
          ],
          quiz: [{ q: '305 · 24 = ?', o: ['7320', '780', '6120'], a: 0 }, { q: '4 200 · 30 = ?', o: ['126000', '12600', '1260'], a: 0 }] }
      ] },

      { id: 's3', title: L('Ko‘p xonali sonlarni bo‘lish', 'Деление многозначных чисел', 'Dividing large numbers'), icon: '➗', color: 'violet', topics: [
        { id: 't9', lessons: L('17-dars', 'Урок 17', 'Lesson 17'), title: L('Bo‘luvchilar va karralilar', 'Делители и кратные', 'Divisors and multiples'),
          keys: [L('bo‘luvchi', 'делитель', 'divisor'), L('karrali', 'кратное', 'multiple')],
          scene: [{ obj: 'cube', n: 6, color: 'cyan' }, { obj: 'cube', n: 6, color: 'pink' }],
          explain: L('Agar 20 soni 4 ga qoldiqsiz bo‘linsa, 4 — 20 ning <b>bo‘luvchisi</b>, 20 esa 4 ga <b>karrali</b>. 20 ning bo‘luvchilari: 1, 2, 4, 5, 10, 20. 5 ga karrali sonlar: 5, 10, 15, 20, … — ular cheksiz ko‘p!',
            'Если 20 делится на 4 без остатка, то 4 — <b>делитель</b> числа 20, а 20 <b>кратно</b> 4. Делители 20: 1, 2, 4, 5, 10, 20. Числа, кратные 5: 5, 10, 15, 20, … — их бесконечно много!',
            'If 20 divides by 4 with no remainder, 4 is a <b>divisor</b> of 20 and 20 is a <b>multiple</b> of 4. Divisors of 20: 1, 2, 4, 5, 10, 20. Multiples of 5: 5, 10, 15, 20, … — endlessly many!'),
          rule: L('20 : 4 = 5 → 4 — bo‘luvchi, 20 — karrali', '20 : 4 = 5 → 4 — делитель, 20 — кратное', '20 : 4 = 5 → 4 is a divisor, 20 a multiple'),
          acts: [
            { type: 'choose', title: L('Bo‘luvchini toping', 'Найдите делитель', 'Find the divisor'), icon: '🔎', make: function (R) { var n = pick([12, 18, 20, 24, 28, 30, 36, 40, 45, 48]), ds = divisors(n).filter(function (x) { return x > 1 && x < n; }), good = pick(ds), bad = []; while (bad.length < 2) { var x = R(2, n - 1); if (n % x && bad.indexOf(x) < 0) bad.push(x); }
              return choice(mk(function (l) { return { uz: 'Qaysi son <b>' + n + '</b> ning bo‘luvchisi?', ru: 'Какое число — делитель <b>' + n + '</b>?', en: 'Which number is a divisor of <b>' + n + '</b>?' }[l]; }), [String(good), String(bad[0]), String(bad[1])], 0); } },
            { type: 'drill', title: L('Bo‘luvchilar soni', 'Количество делителей', 'How many divisors'), n: 5, make: function (R) { var n = pick([6, 8, 10, 12, 15, 16, 18, 20, 24, 30, 36]); return { q: mk(function (l) { return { uz: n + ' ning nechta bo‘luvchisi bor?', ru: 'Сколько делителей у ' + n + '?', en: 'How many divisors does ' + n + ' have?' }[l]; }), a: divisors(n).length }; } }
          ],
          quiz: [{ q: L('24 ning bo‘luvchisi qaysi?', 'Какое число — делитель 24?', 'Which divides 24?'), o: ['8', '5', '7'], a: 0 }, { q: L('Qaysi son 15 ga karrali?', 'Какое число кратно 15?', 'Which is a multiple of 15?'), o: ['45', '25', '50'], a: 0 }] },

        { id: 't10', lessons: L('18, 20-darslar', 'Уроки 18, 20', 'Lessons 18, 20'), title: L('2, 4, 5 va 10 ga bo‘linish alomatlari', 'Признаки делимости на 2, 4, 5 и 10', 'Divisibility by 2, 4, 5 and 10'),
          keys: [L('juft son', 'чётное число', 'even number'), L('oxirgi raqam', 'последняя цифра', 'last digit')],
          scene: [{ obj: 'ball', n: 4, color: 'green' }, { obj: 'ball', n: 5, color: 'orange' }],
          explain: L('<b>2 ga</b>: oxirgi raqam juft (0, 2, 4, 6, 8). <b>5 ga</b>: oxirgi raqam 0 yoki 5. <b>10 ga</b>: oxirgi raqam 0. <b>4 ga</b>: oxirgi ikki raqam 00 yoki 4 ga bo‘linadigan son (7 904 → 04 → ha!).',
            '<b>На 2</b>: последняя цифра чётная (0, 2, 4, 6, 8). <b>На 5</b>: последняя цифра 0 или 5. <b>На 10</b>: последняя цифра 0. <b>На 4</b>: две последние цифры — 00 или число, делящееся на 4 (7 904 → 04 → да!).',
            '<b>By 2</b>: last digit even (0, 2, 4, 6, 8). <b>By 5</b>: last digit 0 or 5. <b>By 10</b>: last digit 0. <b>By 4</b>: the last two digits are 00 or form a number divisible by 4 (7 904 → 04 → yes!).'),
          rule: L('2: juft · 5: 0/5 · 10: 0 · 4: oxirgi ikki raqam', '2: чётная · 5: 0/5 · 10: 0 · 4: две последние цифры', '2: even · 5: 0/5 · 10: 0 · 4: last two digits'),
          acts: [
            { type: 'choose', title: L('Alomatni qo‘llang', 'Примените признак', 'Use the rule'), icon: '🔍', make: function (R) { return divPick(R, pick([2, 4, 5, 10]), 1000, 99999); } },
            { type: 'choose', title: L('4 ga bo‘linadimi?', 'Делится на 4?', 'Divisible by 4?'), icon: '4️⃣', make: function (R) { var n = R(100, 9999) * 100 + R(0, 99); return choice('<span class="kd-big">' + fmt(n) + '</span>', [L('4 ga bo‘linadi', 'делится на 4', 'divisible by 4'), L('4 ga bo‘linmaydi', 'не делится на 4', 'not divisible by 4')], n % 4 === 0 ? 0 : 1); } }
          ],
          quiz: [{ q: L('Qaysi son 5 ga bo‘linadi?', 'Какое число делится на 5?', 'Which is divisible by 5?'), o: ['215', '317', '103'], a: 0 }, { q: L('Qaysi son 4 ga bo‘linadi?', 'Какое число делится на 4?', 'Which is divisible by 4?'), o: ['7904', '8742', '6003'], a: 0 }] },

        { id: 't11', lessons: L('19-dars', 'Урок 19', 'Lesson 19'), title: L('3 va 9 ga bo‘linish alomatlari', 'Признаки делимости на 3 и 9', 'Divisibility by 3 and 9'),
          keys: [L('raqamlar yig‘indisi', 'сумма цифр', 'digit sum')],
          scene: [{ obj: 'box', n: 3, color: 'yellow' }, { obj: 'box', n: 3, color: 'violet' }],
          explain: L('Son raqamlarining <b>yig‘indisi</b> 3 ga bo‘linsa — son ham 3 ga bo‘linadi; 9 ga bo‘linsa — son 9 ga bo‘linadi. 4 572: 4 + 5 + 7 + 2 = 18 → 3 ga ham, 9 ga ham bo‘linadi!',
            'Если <b>сумма цифр</b> делится на 3 — число делится на 3; если на 9 — число делится на 9. 4 572: 4 + 5 + 7 + 2 = 18 → делится и на 3, и на 9!',
            'If the <b>sum of the digits</b> divides by 3, so does the number; the same for 9. 4 572: 4 + 5 + 7 + 2 = 18 → divisible by both 3 and 9!'),
          rule: L('raqamlar yig‘indisi : 3 (: 9)', 'сумма цифр : 3 (: 9)', 'digit sum : 3 (: 9)'),
          acts: [
            { type: 'drill', title: L('Raqamlar yig‘indisi', 'Сумма цифр', 'Digit sum'), n: 5, make: function (R) { var n = R(1000, 99999); return { q: mk(function (l) { return { uz: fmt(n) + ' — raqamlar yig‘indisi', ru: fmt(n) + ' — сумма цифр', en: fmt(n) + ' — digit sum' }[l]; }), a: digitSum(n) }; } },
            { type: 'choose', title: L('3 yoki 9', '3 или 9', '3 or 9'), icon: '9️⃣', make: function (R) { return divPick(R, pick([3, 9]), 100, 9999); } }
          ],
          quiz: [{ q: L('4 572 qaysi songa bo‘linadi?', 'На что делится 4 572?', '4 572 is divisible by?'), o: ['9', '5', '10'], a: 0 }, { q: L('Qaysi son 3 ga bo‘linadi?', 'Какое число делится на 3?', 'Which is divisible by 3?'), o: ['123', '124', '125'], a: 0 }] },

        { id: 't12', lessons: L('23–25-darslar', 'Уроки 23–25', 'Lessons 23–25'), title: L('Ikki xonali songa bo‘lish. Tanlash', 'Деление на двузначное число. Подбор', 'Dividing by a two-digit number. Estimating'),
          keys: [L('bo‘linmani tanlash', 'подбор частного', 'estimating the quotient'), L('tekshirish', 'проверка', 'checking')],
          scene: [{ obj: 'bucket', n: 3, color: 'blue' }],
          explain: L('Bo‘linmani yaxlitlab tanlaymiz: 2 280 : 38 — 38 ≈ 40, 2 280 : 40 ≈ 57, sinab ko‘ramiz: 38 · 60 = 2 280. Demak 60! Har doim ko‘paytirib tekshiring.',
            'Частное подбираем округлением: 2 280 : 38 — 38 ≈ 40, 2 280 : 40 ≈ 57, пробуем: 38 · 60 = 2 280. Значит, 60! Всегда проверяйте умножением.',
            'Estimate by rounding: 2 280 : 38 — 38 ≈ 40, 2 280 : 40 ≈ 57, try: 38 · 60 = 2 280. So it’s 60! Always check by multiplying.'),
          rule: '2 280 : 38 = 60 ↔ 38 · 60 = 2 280',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var d = R(12, 98), q = R(11, 99); return { q: fmt(d * q) + ' : ' + d, a: q }; } },
            { type: 'problem', title: L('Jo‘mrak', 'Кран', 'The tap'), make: function (R) { var r = R(12, 25), t = R(11, 40); return { story: L('Jo‘mrakdan har minutda <b>' + r + '</b> l suv oqadi. <b>' + r * t + '</b> l suv <u>necha minutda</u> oqib chiqadi?', 'Из крана каждую минуту вытекает <b>' + r + '</b> л воды. <u>За сколько минут</u> вытечет <b>' + r * t + '</b> л?', 'A tap runs <b>' + r + '</b> l of water a minute. <u>How many minutes</u> for <b>' + r * t + '</b> l?'), expr: [r * t, ':', r, '=', t], ans: t, unit: MIN }; } }
          ],
          quiz: [{ q: '2 280 : 38 = ?', o: ['60', '6', '57'], a: 0 }, { q: '8 400 : 12 = ?', o: ['700', '70', '7000'], a: 0 }] },

        { id: 't13', lessons: L('26–27-darslar', 'Уроки 26–27', 'Lessons 26–27'), title: L('Uch xonali songa bo‘lish', 'Деление на трёхзначное число', 'Dividing by a three-digit number'),
          keys: ['14 336 : 256', L('burchak usuli', 'деление уголком', 'long division')],
          scene: [{ obj: 'box', n: 4, color: 'green' }],
          explain: L('Uch xonali songa bo‘lish ham xuddi shunday: bo‘linuvchidan birinchi to‘liqsiz bo‘linuvchini ajratamiz, bo‘linma raqamini tanlaymiz, ko‘paytirib ayiramiz. 14 336 : 256 = 56, chunki 256 · 56 = 14 336.',
            'Деление на трёхзначное число устроено так же: выделяем первое неполное делимое, подбираем цифру частного, умножаем и вычитаем. 14 336 : 256 = 56, потому что 256 · 56 = 14 336.',
            'Dividing by a three-digit number works the same way: take the first partial dividend, estimate a quotient digit, multiply and subtract. 14 336 : 256 = 56 because 256 · 56 = 14 336.'),
          rule: '14 336 : 256 = 56 ↔ 256 · 56 = 14 336',
          acts: [
            { type: 'drill', n: 6, make: function (R) { var d = R(101, 499), q = R(2, 60); return { q: fmt(d * q) + ' : ' + d, a: q }; } },
            { type: 'problem', make: function (R) { var s = R(3, 6), q = R(110, 250); return { story: L('Mashinadagi <b>' + fmt(s * q) + '</b> kg meva <b>' + s + '</b> ta do‘konga teng taqsimlandi. <u>Har bir do‘konga</u> necha kg?', '<b>' + fmt(s * q) + '</b> кг фруктов из машины поровну раздали <b>' + s + '</b> магазинам. <u>Сколько кг каждому</u>?', '<b>' + fmt(s * q) + '</b> kg of fruit from a truck were shared equally among <b>' + s + '</b> shops. <u>How many kg each</u>?'), expr: [s * q, ':', s, '=', q], ans: q, unit: KG }; } }
          ],
          quiz: [{ q: '14 336 : 256 = ?', o: ['56', '65', '46'], a: 0 }, { q: '2 400 : 200 = ?', o: ['12', '120', '1200'], a: 0 }] },

        { id: 't14', lessons: L('21–22, 28–29-darslar', 'Уроки 21–22, 28–29', 'Lessons 21–22, 28–29'), title: L('Misol va masalalar yechish', 'Решение примеров и задач', 'Solving examples and problems'),
          keys: [L('tenglama', 'уравнение', 'equation'), L('farq', 'разность', 'difference')],
          scene: [{ obj: 'star', n: 3, color: 'yellow' }],
          explain: L('Murakkab tenglamalarni oxiridan boshlab yechamiz: (x − 145) : 5 = 21 → x − 145 = 21 · 5 = 105 → x = 250. Masalada avval har bir qismni hisoblab, so‘ng taqqoslaymiz.',
            'Сложные уравнения решаем «с конца»: (x − 145) : 5 = 21 → x − 145 = 21 · 5 = 105 → x = 250. В задаче сначала считаем каждую часть, потом сравниваем.',
            'Solve compound equations from the outside in: (x − 145) : 5 = 21 → x − 145 = 21 · 5 = 105 → x = 250. In problems compute each part first, then compare.'),
          rule: '(x − a) : b = c → x = c · b + a',
          acts: [
            { type: 'drill', n: 6, make: function (R) { var x = R(150, 900), a = R(10, 140), b = R(2, 9), d = R(12, 40), q = R(11, 60); return pick([{ q: 'x · ' + d + ' = ' + fmt(d * q) + ';  x', a: q }, { q: 'x : ' + d + ' = ' + q + ';  x', a: d * q }, { q: '(x − ' + a + ') · ' + b + ' = ' + fmt((x - a) * b) + ';  x', a: x }]); } },
            { type: 'problem', title: L('Kim ko‘p?', 'Где больше?', 'Which is more?'), make: function (R) { var a = R(40, 49), n1 = R(12, 15), b = R(30, 39), n2 = R(10, 12); return { story: L('Birinchi oromgohga har birida <b>' + a + '</b> nafardan bola bo‘lgan <b>' + n1 + '</b> ta avtobus, ikkinchisiga har birida <b>' + b + '</b> nafardan bola bo‘lgan <b>' + n2 + '</b> ta avtobus keldi. Birinchisiga <u>necha nafar ko‘p</u> bola keldi?', 'В первый лагерь приехали <b>' + n1 + '</b> автобусов по <b>' + a + '</b> детей, во второй — <b>' + n2 + '</b> автобусов по <b>' + b + '</b> детей. <u>На сколько больше</u> детей в первом?', '<b>' + n1 + '</b> buses with <b>' + a + '</b> children each came to the first camp, and <b>' + n2 + '</b> buses with <b>' + b + '</b> each to the second. <u>How many more</u> children in the first?'), expr: [a * n1, '−', b * n2, '=', a * n1 - b * n2], ans: a * n1 - b * n2, unit: L('nafar', 'детей', 'children') }; } }
          ],
          quiz: [{ q: '(x − 145) : 5 = 21; x = ?', o: ['250', '105', '40'], a: 0 }, { q: 'x · 25 = 1 000; x = ?', o: ['40', '25000', '975'], a: 0 }] }
      ] },

      { id: 's4', title: L('Ko‘p xonali sonlar. Million', 'Многозначные числа. Миллион', 'Large numbers. The million'), icon: '🏙️', color: 'green', topics: [
        { id: 't15', lessons: L('32–33-darslar', 'Уроки 32–33', 'Lessons 32–33'), title: L('Xonalar va sinflar. Million', 'Разряды и классы. Миллион', 'Places and periods. The million'),
          keys: ['1 000 000', L('millionlar sinfi', 'класс миллионов', 'millions period')],
          scene: [{ obj: 'cube', n: 10, color: 'blue' }],
          explain: L('999 999 dan keyin <b>1 000 000</b> (bir million) keladi. Million = 1 000 ta ming. Sonlar uchtadan xonali <b>sinflarga</b> bo‘linadi: birliklar, minglar, millionlar. 25 304 019: 25 million 304 ming 19.',
            'После 999 999 идёт <b>1 000 000</b> (миллион). Миллион = 1 000 тысяч. Число делится на <b>классы</b> по три разряда: единицы, тысячи, миллионы. 25 304 019: 25 миллионов 304 тысячи 19.',
            'After 999 999 comes <b>1 000 000</b> (one million). A million = 1 000 thousands. Digits group into <b>periods</b> of three: ones, thousands, millions. 25 304 019: 25 million 304 thousand 19.'),
          rule: '1 000 000 = 1 000 · 1 000',
          acts: [
            { type: 'choose', title: L('Raqam qiymati', 'Значение цифры', 'Digit value'), icon: '🔢', make: function (R) { var n = R(1000000, 9999999), s = String(n), k = R(0, 6), dgt = +s[k]; while (dgt === 0) { n = R(1000000, 9999999); s = String(n); dgt = +s[k]; } var val = dgt * Math.pow(10, 6 - k);
              var wrong = [0, 1, 2, 3, 4, 5, 6].map(function (e) { return dgt * Math.pow(10, e); }).filter(function (x) { return x !== val; }).sort(function () { return R(0, 1) - 0.5; });
              return choice(mk(function (l) { return '<span class="kd-big">' + fmt(n) + '</span> — ' + { uz: (k + 1) + '-raqam (' + dgt + ') qiymati?', ru: 'значение ' + (k + 1) + '-й цифры (' + dgt + ')?', en: 'value of digit ' + (k + 1) + ' (' + dgt + ')?' }[l]; }), [fmt(val), fmt(wrong[0]), fmt(wrong[1])], 0); } },
            { type: 'drill', title: L('Qo‘shni sonlar', 'Соседние числа', 'Neighbours'), n: 6, make: function (R) { var n = pick([R(1, 9) * 100000, R(1, 9) * 1000000, R(10, 99) * 10000]), up = R(0, 1); return { q: mk(function (l) { return (up ? { uz: 'Keyingi son: ', ru: 'Следующее: ', en: 'Next: ' } : { uz: 'Oldingi son: ', ru: 'Предыдущее: ', en: 'Previous: ' })[l] + fmt(n) + (up ? ' + 1' : ' − 1'); }), a: up ? n + 1 : n - 1 }; } }
          ],
          quiz: [{ q: L('1 million = ? ming', '1 миллион = ? тысяч', '1 million = ? thousand'), o: ['1000', '100', '10000'], a: 0 }, { q: L('999 999 dan keyingi son?', 'Число после 999 999?', 'The number after 999 999?'), o: ['1000000', '9999910', '100000'], a: 0 }] },

        { id: 't16', lessons: L('34–36-darslar', 'Уроки 34–36', 'Lessons 34–36'), title: L('Ko‘p xonali sonlarni o‘qish, yozish va taqqoslash', 'Чтение, запись и сравнение многозначных чисел', 'Reading, writing and comparing large numbers'),
          keys: [L('sinflar bo‘yicha o‘qish', 'чтение по классам', 'read by periods'), '&gt; &lt; ='],
          scene: [{ obj: 'book', n: 3, color: 'violet' }],
          explain: L('Ko‘p xonali sonni sinflarga ajratib, chapdan o‘qiymiz: 3 045 007 — «3 million 45 ming 7». Taqqoslashda avval xonalar sonini, teng bo‘lsa — chapdan raqamlarni solishtiramiz.',
            'Многозначное число делим на классы и читаем слева: 3 045 007 — «3 миллиона 45 тысяч 7». При сравнении сначала сравниваем количество разрядов, если равно — цифры слева направо.',
            'Split a large number into periods and read from the left: 3 045 007 — “3 million 45 thousand 7”. To compare, first count the digits; if equal, compare digits from the left.'),
          rule: '3 045 007 = 3 mln 45 ming 7',
          acts: [
            { type: 'drill', title: L('Raqamlar bilan yozing', 'Запишите цифрами', 'Write in digits'), n: 6, make: function (R) { var m = R(1, 99), t = R(0, 999), u = R(0, 999); return { q: mk(function (l) { var W = { uz: [' mln ', ' ming '], ru: [' млн ', ' тыс. '], en: [' million ', ' thousand '] }[l]; return m + W[0] + (t ? t + W[1] : '') + (u || ''); }), a: m * 1000000 + t * 1000 + u }; } },
            { type: 'choose', title: L('Taqqoslang', 'Сравните', 'Compare'), icon: '⚖️', make: function (R) { var a = R(100000, 9999999), b = R(0, 1) ? a + pick([1, -1]) * pick([10, 1000, 100000]) : R(100000, 9999999); if (b === a) b++; return choice('<span class="kd-big">' + fmt(a) + ' ◻ ' + fmt(b) + '</span>', ['&gt;', '&lt;'], a > b ? 0 : 1); } },
            { type: 'order', title: L('Kichigidan kattasiga', 'От меньшего к большему', 'Smallest to largest'), make: function (R) { var xs = H.distinct(R, 4, 100000, 9999999).sort(function (a, b) { return a - b; }); return { story: L('Sonlarni kichigidan kattasiga bosing.', 'Нажимайте от меньшего к большему.', 'Tap from smallest to largest.'), items: xs.map(fmt), sep: '<span class="kd-arr">&lt;</span>' }; } }
          ],
          quiz: [{ q: '3 045 007 ◻ 3 405 007', o: ['&lt;', '&gt;', '='], a: 0 }, { q: L('Eng katta son?', 'Самое большое число?', 'The largest number?'), o: ['1 000 000', '999 999', '100 000'], a: 0 }] },

        { id: 't17', lessons: L('37–38-darslar', 'Уроки 37–38', 'Lessons 37–38'), title: L('Ko‘p xonali sonlarni qo‘shish va ayirish', 'Сложение и вычитание многозначных чисел', 'Adding and subtracting large numbers'),
          keys: [L('ustunda', 'столбиком', 'in a column'), L('xona ostiga xona', 'разряд под разрядом', 'place under place')],
          scene: [{ obj: 'flat', n: 4, color: 'cyan' }],
          explain: L('Ko‘p xonali sonlarni ustunda qo‘shamiz va ayiramiz: birliklar ostiga birliklar, o‘nliklar ostiga o‘nliklar. O‘ngdan chapga hisoblaymiz, 10 dan oshsa — keyingi xonaga o‘tkazamiz.',
            'Многозначные числа складываем и вычитаем столбиком: единицы под единицами, десятки под десятками. Считаем справа налево, переходя через десяток — переносим в следующий разряд.',
            'Add and subtract large numbers in a column: ones under ones, tens under tens. Work right to left; past ten, carry into the next place.'),
          rule: L('o‘ngdan chapga', 'справа налево', 'right to left'),
          acts: [
            { type: 'column', make: function (R) { var a = R(100000, 600000), b = R(100000, 399999); return R(0, 1) ? { a: a, b: b, op: '+', ans: a + b } : { a: a + b, b: b, op: '-', ans: a }; } },
            { type: 'drill', n: 6, make: function (R) { var a = R(1, 90) * 10000, b = R(1, 90) * 1000; return pick([{ q: fmt(a) + ' + ' + fmt(b), a: a + b }, { q: fmt(a + b) + ' − ' + fmt(b), a: a }, { q: '1 000 000 − ' + fmt(a), a: 1000000 - a }]); } }
          ],
          quiz: [{ q: '450 000 + 550 000 = ?', o: ['1000000', '900000', '1100000'], a: 0 }, { q: '1 000 000 − 1 = ?', o: ['999999', '999000', '99999'], a: 0 }] },

        { id: 't18', lessons: L('39–40-darslar', 'Уроки 39–40', 'Lessons 39–40'), title: L('Ko‘p xonali sonlarni ko‘paytirish va bo‘lish', 'Умножение и деление многозначных чисел', 'Multiplying and dividing large numbers'),
          keys: ['36 000 : 4', '50 · 140', L('sayohat narxi', 'цена поездки', 'trip price')],
          scene: [{ obj: 'drone', n: 1, color: 'green' }, { obj: 'box', n: 2, color: 'orange' }],
          explain: L('Nollarni chetga olib, qolganini ko‘paytiramiz yoki bo‘lamiz: 36 000 : 4 = 36 : 4 ming = 9 000; 50 · 140 = 5 · 14 · 100 = 7 000.',
            'Откладываем нули и умножаем или делим остальное: 36 000 : 4 = 36 : 4 тысяч = 9 000; 50 · 140 = 5 · 14 · 100 = 7 000.',
            'Set the zeros aside and multiply or divide the rest: 36 000 : 4 = (36 : 4) thousand = 9 000; 50 · 140 = 5 · 14 · 100 = 7 000.'),
          rule: '36 000 : 4 = 9 000 · 50 · 140 = 7 000',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var a = R(2, 9), b = R(2, 9), z = pick([100, 1000, 10000]); return pick([{ q: fmt(a * b * z) + ' : ' + a, a: b * z }, { q: fmt(a * z) + ' · ' + b, a: a * b * z }, { q: (a * 10) + ' · ' + (b * 10 + R(1, 9)) * 10, a: 0 }].map(function (o) { if (o.a === 0) { var p = o.q.split(' · '); o.a = +p[0] * +p[1]; } return o; })); } },
            { type: 'problem', title: L('Sayohat', 'Путешествие', 'A trip'), make: function (R) { var p = R(10, 20) * 100000, n = R(2, 5); return { story: L('Ko‘lga sayohat narxi bir kishi uchun <b>' + fmt(p) + '</b> so‘m. <b>' + n + '</b> kishilik oila <u>qancha</u> to‘laydi?', 'Поездка на озеро стоит <b>' + fmt(p) + '</b> сум на человека. <u>Сколько</u> заплатит семья из <b>' + n + '</b> человек?', 'A lake trip costs <b>' + fmt(p) + '</b> sum per person. <u>How much</u> does a family of <b>' + n + '</b> pay?'), expr: [p, '·', n, '=', p * n], ans: p * n, unit: SOM }; } }
          ],
          quiz: [{ q: '36 000 : 4 = ?', o: ['9000', '900', '90000'], a: 0 }, { q: '50 · 140 = ?', o: ['7000', '700', '190'], a: 0 }] },

        { id: 't19', lessons: L('41, 44-darslar', 'Уроки 41, 44', 'Lessons 41, 44'), title: L('Misol va masalalar. Mantiqiy topshiriqlar', 'Примеры и задачи. Логические задания', 'Examples and problems. Logic puzzles'),
          keys: [L('mantiq', 'логика', 'logic'), L('karrali', 'кратное', 'multiple')],
          scene: [{ obj: 'star', n: 5, color: 'yellow' }],
          explain: L('Mantiqiy masalalarda shartlarni birma-bir tekshiramiz. Masalan: 50 dan oshmaydigan, 2, 3 va 4 ga bo‘linadigan, ammo 5 ga bo‘lganda 3 qoladigan son — 12, 24, 36, 48 dan faqat <b>48</b> mos keladi.',
            'В логических задачах проверяем условия по очереди. Например: число не больше 50, делится на 2, 3 и 4, а при делении на 5 даёт остаток 3 — из 12, 24, 36, 48 подходит только <b>48</b>.',
            'In logic puzzles we test the conditions one by one. E.g. a number up to 50, divisible by 2, 3 and 4, leaving 3 when divided by 5 — of 12, 24, 36, 48 only <b>48</b> fits.'),
          rule: L('Shart → tekshir → javob', 'Условие → проверь → ответ', 'Condition → check → answer'),
          acts: [
            { type: 'choose', title: L('Qavatlar', 'Этажи', 'Floors'), icon: '🏢', make: function () { return choice(L('To‘rt do‘st 2–5-qavatlarda yashaydi. Doniyor — 2-qavatda, Jasur — 5-qavatda, Aziz Doniyordan yuqorida, Kamron Azizdan pastda. <b>Aziz</b> qaysi qavatda?', 'Четыре друга живут на 2–5 этажах. Дониёр — на 2-м, Жасур — на 5-м, Азиз выше Дониёра, Камрон ниже Азиза. На каком этаже <b>Азиз</b>?', 'Four friends live on floors 2–5. Doniyor is on 2, Jasur on 5, Aziz above Doniyor, Kamron below Aziz. Which floor is <b>Aziz</b> on?'), ['4', '3', '2'], 0); } },
            { type: 'choose', title: L('Sirli son', 'Загадочное число', 'Mystery number'), icon: '🍬', make: function (R) { var r = R(1, 4), cands = [12, 24, 36, 48], good = cands.filter(function (x) { return x % 5 === r; })[0], bad = cands.filter(function (x) { return x !== good; }).slice(0, 2);
              return choice(L('Qutida 50 tadan ko‘p bo‘lmagan konfet bor. Ularni 2, 3 va 4 nafar bolaga teng bo‘lish mumkin, 5 nafarga bo‘lganda <b>' + r + '</b> ta ortadi. <u>Nechta</u> konfet?', 'В коробке не больше 50 конфет. Их можно поровну разделить на 2, 3 и 4 детей, а при делении на 5 остаётся <b>' + r + '</b>. <u>Сколько</u> конфет?', 'A box holds at most 50 sweets. They share equally among 2, 3 or 4 children, but among 5 there are <b>' + r + '</b> left over. <u>How many</u> sweets?'), [String(good), String(bad[0]), String(bad[1])], 0); } },
            { type: 'magic', given: 3 }
          ],
          quiz: [{ q: L('45 ning nechta bo‘luvchisi bor?', 'Сколько делителей у 45?', 'How many divisors does 45 have?'), o: ['6', '4', '5'], a: 0 }, { q: L('1 000 000 dan oldingi son?', 'Число перед 1 000 000?', 'The number before 1 000 000?'), o: ['999999', '100000', '999000'], a: 0 }] }
      ] }
    ]
  };
  C.addPart(part1);
})(this);
