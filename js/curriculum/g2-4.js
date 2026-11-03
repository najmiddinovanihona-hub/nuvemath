// Nuvemath — 2-sinf, IV qism (manba: I.V. Repyova, «Matematika. 2-sinf. IV qism», Toshkent, 2023).
// Mavzular tartibi va nomlari darslikdan olingan; tushuntirishlar, topshiriqlar va rasmlar Nuvemath uchun qayta yozilgan.
(function (root) {
  'use strict';
  var C = root.NMCurriculum, H = C.H, L = H.L, mk = H.mk, PCS = H.PCS, choice = H.choice, pick = H.pick;
  var KM = L('km', 'км', 'km'), M = L('m', 'м', 'm');
  function svg(inner) { return '<div class="kd-pics"><svg viewBox="0 0 200 140" style="max-width:240px;width:100%">' + inner + '</svg></div>'; }

  var part4 = {
    grade: 2, part: 4, edition: L('2023-yil nashri', 'Издание 2023 г.', '2023 edition'),
    title: L('Ko‘paytirish xossalari, ming va doira', 'Свойства умножения, тысяча и круг', 'Properties of multiplication, thousands and circles'),
    book: L('I.V. Repyova. Matematika, 2-sinf, IV qism (Toshkent, 2023)', 'И.В. Репьева. Математика, 2 класс, часть IV (Ташкент, 2023)', 'I.V. Repyova. Mathematics, Grade 2, Part IV (Tashkent, 2023)'),
    intro: L('Yil yakunida ko‘paytirish xossalari, amallar tartibi, 10 va 100 ga ko‘paytirish, ming va kilometr, taqsimot xossasi, hajmli shakllar va aylana bilan tanishamiz.',
      'В конце года изучим свойства умножения, порядок действий, умножение на 10 и 100, тысячу и километр, распределительное свойство, объёмные фигуры и окружность.',
      'To finish the year we learn the properties of multiplication, order of operations, multiplying by 10 and 100, thousands and kilometres, the distributive property, solids and circles.'),
    sections: [
      { id: 's1', title: L('Xossalar va amallar tartibi', 'Свойства и порядок действий', 'Properties and order of operations'), icon: '🔁', color: 'violet', topics: [
        { id: 't1', lessons: L('117–118-darslar', 'Уроки 117–118', 'Lessons 117–118'), title: L('Ko‘paytirish xossalari', 'Свойства умножения', 'Properties of multiplication'),
          keys: ['a · b = b · a', '(a · b) · c = a · (b · c)'],
          scene: [{ obj: 'cube', n: 3, color: 'blue' }, { obj: 'cube', n: 3, color: 'blue' }],
          explain: L('Ko‘paytuvchilar o‘rnini almashtirsak yoki ularni qulay guruhlasak, ko‘paytma o‘zgarmaydi. 2 · 7 · 5 = (2 · 5) · 7 = 10 · 7 = <b>70</b> — og‘zaki hisoblash oson!',
            'От перестановки и группировки множителей произведение не меняется. 2 · 7 · 5 = (2 · 5) · 7 = 10 · 7 = <b>70</b> — легко считать в уме!',
            'Swapping or grouping factors doesn’t change the product. 2 · 7 · 5 = (2 · 5) · 7 = 10 · 7 = <b>70</b> — easy mental maths!'),
          rule: 'a · b = b · a · (a · b) · c = a · (b · c)',
          acts: [
            { type: 'drill', title: L('Qulay usulda', 'Удобным способом', 'The smart way'), n: 6, make: function (R) { var a = R(2, 9); return pick([{ q: '2 · ' + a + ' · 5', a: a * 10 }, { q: '5 · ' + a + ' · 2', a: a * 10 }, { q: '4 · ' + a + ' · 5', a: a * 20 }]); } },
            { type: 'choose', title: L('Qaysi xossa?', 'Какое свойство?', 'Which property?'), icon: '🔁', make: function (R) { var a = R(2, 9), b = R(2, 9); return choice('<span class="kd-big">' + a + ' · ' + b + ' = ' + b + ' · ' + a + '</span>', [L('o‘rin almashtirish', 'переместительное', 'commutative'), L('guruhlash', 'сочетательное', 'associative'), L('taqsimot', 'распределительное', 'distributive')], 0); } }
          ],
          quiz: [{ q: '6 · 4 = 4 · ?', o: ['6', '4', '24'], a: 0 }, { q: '2 · 9 · 5 = ?', o: ['90', '16', '45'], a: 0 }] },

        { id: 't2', lessons: L('119–120-darslar', 'Уроки 119–120', 'Lessons 119–120'), title: L('Nol va bir xossalari', 'Свойства нуля и единицы', 'Zero and one'),
          keys: ['a · 0 = 0', 'a · 1 = a', 'a : 1 = a', '0 : a = 0'],
          scene: [{ obj: 'box', n: 1, color: 'orange' }],
          explain: L('Har qanday son 0 ga ko‘paytirilsa — <b>0</b>. 1 ga ko‘paytirilsa yoki bo‘linsa — o‘zi qoladi. 0 ni istalgan songa bo‘lsak — 0. Lekin <b>0 ga bo‘lish mumkin emas!</b>',
            'Любое число, умноженное на 0, равно <b>0</b>. При умножении или делении на 1 число не меняется. 0, делённый на любое число, — 0. Но <b>на 0 делить нельзя!</b>',
            'Any number times 0 is <b>0</b>. Multiplying or dividing by 1 leaves a number unchanged. 0 divided by any number is 0. But <b>you can’t divide by 0!</b>'),
          rule: 'a · 0 = 0 · a · 1 = a · a : 1 = a · 0 : a = 0',
          acts: [
            { type: 'choose', title: L('Natija qanday?', 'Какой результат?', 'What is the result?'), icon: '0️⃣', make: function (R) { var a = R(2, 99); return pick([
              choice('<span class="kd-big">' + a + ' · 0</span>', ['0', String(a), '1'], 0), choice('<span class="kd-big">0 : ' + a + '</span>', ['0', String(a), L('bo‘lib bo‘lmaydi', 'делить нельзя', 'can’t be done')], 0),
              choice('<span class="kd-big">' + a + ' : 0</span>', [L('bo‘lib bo‘lmaydi', 'делить нельзя', 'can’t be done'), '0', String(a)], 0)]); } },
            { type: 'drill', n: 8, make: function (R) { var a = R(2, 99); return pick([{ q: a + ' · 0', a: 0 }, { q: a + ' · 1', a: a }, { q: a + ' : 1', a: a }, { q: '0 : ' + a, a: 0 }, { q: a + ' : ' + a, a: 1 }]); } }
          ],
          quiz: [{ q: '45 · 0 = ?', o: ['0', '45', '1'], a: 0 }, { q: '37 : 1 = ?', o: ['37', '1', '0'], a: 0 }, { q: L('Qaysi amalni bajarib bo‘lmaydi?', 'Что сделать нельзя?', 'Which can’t be done?'), o: ['5 : 0', '0 : 5', '5 · 0'], a: 0 }] },

        { id: 't3', lessons: L('121–125-darslar', 'Уроки 121–125', 'Lessons 121–125'), title: L('Ikki amalli ifodalar. Amallar tartibi', 'Выражения в два действия. Порядок действий', 'Two-step expressions. Order of operations'),
          keys: [L('avval · va :', 'сначала · и :', 'first · and :'), L('keyin + va −', 'потом + и −', 'then + and −'), L('qavs', 'скобки', 'brackets')],
          scene: [{ obj: 'robot', n: 2, color: 'violet' }],
          explain: L('Qavssiz ifodada avval <b>ko‘paytirish va bo‘lish</b>, keyin <b>qo‘shish va ayirish</b> bajariladi. Qavs bo‘lsa — avval qavs ichi. 5 + 3 · 4 = 5 + 12 = <b>17</b>, (5 + 3) · 4 = 8 · 4 = <b>32</b>.',
            'В выражении без скобок сначала выполняют <b>умножение и деление</b>, потом <b>сложение и вычитание</b>. Со скобками — сначала в скобках. 5 + 3 · 4 = 5 + 12 = <b>17</b>, (5 + 3) · 4 = 8 · 4 = <b>32</b>.',
            'Without brackets do <b>multiplying and dividing</b> first, then <b>adding and subtracting</b>. With brackets, do the brackets first. 5 + 3 · 4 = 5 + 12 = <b>17</b>, (5 + 3) · 4 = 8 · 4 = <b>32</b>.'),
          rule: L('( ) → · : → + −', '( ) → · : → + −', '( ) → · : → + −'),
          acts: [
            { type: 'drill', title: L('Amallar tartibi', 'Порядок действий', 'Order of operations'), n: 8, make: function (R) { var a = R(2, 20), b = R(2, 9), c = R(2, 9); return pick([{ q: a + ' + ' + b + ' · ' + c, a: a + b * c }, { q: '(' + a + ' + ' + b + ') · ' + c, a: (a + b) * c }, { q: (b * c + a) + ' − ' + b + ' · ' + c, a: a }, { q: (b * c) + ' : ' + b + ' + ' + a, a: c + a }]); } },
            { type: 'choose', title: L('Qaysi amal birinchi?', 'Какое действие первое?', 'Which comes first?'), icon: '1️⃣', make: function (R) { var a = R(10, 40), b = R(2, 9), c = R(2, 9); return choice('<span class="kd-big">' + a + ' − ' + b + ' · ' + c + '</span>', [b + ' · ' + c, a + ' − ' + b], 0); } }
          ],
          quiz: [{ q: '10 + 2 · 3 = ?', o: ['16', '36', '15'], a: 0 }, { q: '(10 + 2) · 3 = ?', o: ['36', '16', '15'], a: 0 }, { q: '20 − 12 : 4 = ?', o: ['17', '2', '8'], a: 0 }] },

        { id: 't4', lessons: L('126–129-darslar', 'Уроки 126–129', 'Lessons 126–129'), title: L('Tenglamalar. Masalalar yechish', 'Уравнения. Решение задач', 'Equations. Problem solving'),
          keys: ['x · a = b', 'x : a = b', 'a : x = b'],
          scene: [{ obj: 'box', n: 1, color: 'green' }, { obj: 'weight', n: 1 }],
          explain: L('Ko‘paytirish va bo‘lishli tenglamalar ham teskari amal bilan yechiladi: x · 4 = 28 → x = 28 : 4 = 7. x : 3 = 6 → x = 6 · 3 = 18.',
            'Уравнения с умножением и делением тоже решают обратным действием: x · 4 = 28 → x = 28 : 4 = 7. x : 3 = 6 → x = 6 · 3 = 18.',
            'Equations with multiplying and dividing are solved with the inverse operation: x · 4 = 28 → x = 28 : 4 = 7. x : 3 = 6 → x = 6 · 3 = 18.'),
          rule: 'x · a = b → x = b : a · x : a = b → x = b · a · a : x = b → x = a : b',
          acts: [
            { type: 'drill', title: L('x ni toping', 'Найдите x', 'Find x'), n: 8, make: function (R) { var a = R(2, 9), x = R(2, 9), k = R(0, 3); if (k === 0) return { q: 'x · ' + a + ' = ' + a * x + ';  x', a: x }; if (k === 1) return { q: a + ' · x = ' + a * x + ';  x', a: x }; if (k === 2) return { q: 'x : ' + a + ' = ' + x + ';  x', a: a * x }; return { q: (a * x) + ' : x = ' + a + ';  x', a: x }; } },
            { type: 'problem', make: function (R) { var k = R(3, 6), x = R(4, 9);
              return { story: L('<b>' + k * x + '</b> ta qalam <b>' + k + '</b> ta qutiga teng joylandi. <u>Har bir qutida nechta</u> qalam?', '<b>' + k * x + '</b> карандашей разложили поровну в <b>' + k + '</b> коробок. <u>Сколько в каждой коробке</u>?', '<b>' + k * x + '</b> pencils were packed equally into <b>' + k + '</b> boxes. <u>How many in each box</u>?'),
                expr: [k * x, ':', k, '=', x], ans: x, unit: PCS }; } }
          ],
          quiz: [{ q: 'x · 5 = 35; x = ?', o: ['7', '30', '40'], a: 0 }, { q: 'x : 4 = 8; x = ?', o: ['32', '2', '12'], a: 0 }] }
      ] },

      { id: 's2', title: L('10, 100 va 1000', '10, 100 и 1000', '10, 100 and 1000'), icon: '🔟', color: 'green', topics: [
        { id: 't5', lessons: L('130–131-darslar', 'Уроки 130–131', 'Lessons 130–131'), title: L('10 ga va 100 ga ko‘paytirish va bo‘lish', 'Умножение и деление на 10 и 100', 'Multiplying and dividing by 10 and 100'),
          keys: ['· 10', '· 100', ': 10', ': 100'],
          scene: [{ obj: 'rod', n: 5, color: 'orange' }, { obj: 'flat', n: 1, color: 'green' }],
          explain: L('Sonni 10 ga ko‘paytirish uchun uning oxiriga bitta 0 yozamiz: 7 · 10 = 70. 100 ga — ikkita 0: 7 · 100 = 700. Bo‘lishda esa nollarni olib tashlaymiz: 300 : 10 = 30, 300 : 100 = 3.',
            'Чтобы умножить на 10, приписываем к числу один 0: 7 · 10 = 70. На 100 — два нуля: 7 · 100 = 700. При делении нули убираем: 300 : 10 = 30, 300 : 100 = 3.',
            'To multiply by 10, write one 0 at the end: 7 · 10 = 70. By 100 — two zeros: 7 · 100 = 700. When dividing, remove the zeros: 300 : 10 = 30, 300 : 100 = 3.'),
          rule: '7 · 10 = 70 · 7 · 100 = 700 · 300 : 10 = 30',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var a = R(2, 9), b = R(11, 99); return pick([{ q: a + ' · 10', a: a * 10 }, { q: a + ' · 100', a: a * 100 }, { q: b + ' · 10', a: b * 10 }, { q: (b * 10) + ' : 10', a: b }, { q: (a * 100) + ' : 100', a: a }]); } },
            { type: 'count3d', title: L('3D: o‘nta o‘nlik', '3D: десять десятков', '3D: ten tens'), make: function (R) { var t = R(3, 9); return { groups: [{ obj: 'rod', n: t, color: 'orange' }], story: L('<b>' + t + ' · 10</b> = ? Tayoqchalarni sanang.', '<b>' + t + ' · 10</b> = ? Посчитайте палочки.', '<b>' + t + ' · 10</b> = ? Count the rods.'), expr: [t, '·', 10, '=', t * 10], ans: t * 10, unit: '' }; } }
          ],
          quiz: [{ q: '45 · 10 = ?', o: ['450', '4500', '55'], a: 0 }, { q: '800 : 100 = ?', o: ['8', '80', '700'], a: 0 }, { q: '6 · 100 = ?', o: ['600', '60', '106'], a: 0 }] },

        { id: 't6', lessons: L('132–133-darslar', 'Уроки 132–133', 'Lessons 132–133'), title: L('Ming. Kilometr', 'Тысяча. Километр', 'A thousand. The kilometre'),
          keys: ['1000', '10 · 100 = 1000', '1 km = 1000 m'],
          scene: [{ obj: 'flat', n: 10, color: 'green' }],
          explain: L('10 ta yuzlik birlashsa — <b>1000</b> (ming) bo‘ladi. Sahnadagi 10 ta plita — 1000 ta kubcha! Uzoq masofalar <b>kilometr</b> (km) bilan o‘lchanadi: 1 km = 1000 m — taxminan 15 daqiqalik piyoda yo‘l.',
            '10 сотен вместе — это <b>1000</b> (тысяча). 10 плит на сцене — 1000 кубиков! Большие расстояния измеряют <b>километрами</b> (км): 1 км = 1000 м — примерно 15 минут пешком.',
            '10 hundreds together make <b>1000</b> (a thousand). The 10 plates on the stage are 1000 little cubes! Long distances are measured in <b>kilometres</b> (km): 1 km = 1000 m — about a 15-minute walk.'),
          rule: '1000 = 10 · 100 · 1 km = 1000 m',
          acts: [
            { type: 'drill', n: 6, make: function (R) { var a = R(1, 9) * 100; return pick([{ q: a + ' + ' + (1000 - a), a: 1000 }, { q: '1000 − ' + a, a: 1000 - a }, { q: mk(function (l) { return '1 ' + H.pk(KM, l) + ' = ? ' + H.pk(M, l); }), a: 1000 }, { q: mk(function (l) { return '1 ' + H.pk(KM, l) + ' − ' + a + ' ' + H.pk(M, l) + ' = ? ' + H.pk(M, l); }), a: 1000 - a }]); } },
            { type: 'choose', title: L('m yoki km?', 'м или км?', 'm or km?'), icon: '🛣️', make: function () { return pick([choice(L('Toshkentdan Samarqandgacha masofa?', 'Расстояние от Ташкента до Самарканда?', 'The distance from Tashkent to Samarkand?'), [KM, M, L('cm', 'см', 'cm')], 0), choice(L('Sinf xonasining uzunligi?', 'Длина классной комнаты?', 'The length of a classroom?'), [M, KM, L('mm', 'мм', 'mm')], 0)]); } }
          ],
          quiz: [{ q: L('1 km = ? m', '1 км = ? м', '1 km = ? m'), o: ['1000', '100', '10'], a: 0 }, { q: '600 + 400 = ?', o: ['1000', '100', '10000'], a: 0 }] },

        { id: 't7', lessons: L('134–137-darslar', 'Уроки 134–137', 'Lessons 134–137'), title: L('Yaxlit sonlarni ko‘paytirish va bo‘lish', 'Умножение и деление круглых чисел', 'Multiplying and dividing round numbers'),
          keys: ['30 · 2', '80 : 4', '600 : 3'],
          scene: [{ obj: 'rod', n: 6, color: 'orange' }],
          explain: L('30 · 2 — bu 3 o‘nlik · 2 = 6 o‘nlik = <b>60</b>. 80 : 4 — bu 8 o‘nlik : 4 = 2 o‘nlik = <b>20</b>. Jadvalni bilsak, yaxlit sonlar bilan ham tez hisoblaymiz!',
            '30 · 2 — это 3 десятка · 2 = 6 десятков = <b>60</b>. 80 : 4 — это 8 десятков : 4 = 2 десятка = <b>20</b>. Зная таблицу, быстро считаем и с круглыми числами!',
            '30 · 2 is 3 tens · 2 = 6 tens = <b>60</b>. 80 : 4 is 8 tens : 4 = 2 tens = <b>20</b>. Knowing the tables makes round numbers quick too!'),
          rule: '30 · 2 = 60 · 80 : 4 = 20 · 600 : 3 = 200',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var a = R(2, 9), b = R(2, 9 / 1); var p = a * b; return pick([{ q: (a * 10) + ' · ' + b, a: p * 10 }, { q: (p * 10) + ' : ' + a, a: b * 10 }, { q: (a * 100) + ' · ' + (b > 4 ? 2 : b), a: a * 100 * (b > 4 ? 2 : b) }].filter(function (x) { return x.a <= 1000; })); } },
            { type: 'problem', make: function (R) { var a = R(2, 9) * 10, k = R(2, 5); return { story: L('Bir qutida <b>' + a + '</b> ta qalam bor. <b>' + k + '</b> ta qutida <u>nechta qalam</u> bor?', 'В одной коробке <b>' + a + '</b> карандашей. <u>Сколько карандашей</u> в <b>' + k + '</b> коробках?', 'One box holds <b>' + a + '</b> pencils. <u>How many pencils</u> are in <b>' + k + '</b> boxes?'), expr: [a, '·', k, '=', a * k], ans: a * k, unit: PCS }; } }
          ],
          quiz: [{ q: '40 · 3 = ?', o: ['120', '43', '12'], a: 0 }, { q: '90 : 3 = ?', o: ['30', '3', '27'], a: 0 }, { q: '200 · 4 = ?', o: ['800', '80', '204'], a: 0 }] }
      ] },

      { id: 's3', title: L('Taqsimot xossasi', 'Распределительное свойство', 'The distributive property'), icon: '🧮', color: 'blue', topics: [
        { id: 't8', lessons: L('138–140-darslar', 'Уроки 138–140', 'Lessons 138–140'), title: L('Yig‘indini songa ko‘paytirish. Taqsimot xossasi', 'Умножение суммы на число. Распределительное свойство', 'Multiplying a sum. The distributive property'),
          keys: ['(a + b) · c = a · c + b · c'],
          scene: [{ obj: 'cube', n: 3, color: 'blue' }, { obj: 'cube', n: 2, color: 'pink' }, { obj: 'cube', n: 3, color: 'blue' }, { obj: 'cube', n: 2, color: 'pink' }],
          explain: L('Yig‘indini songa ko‘paytirish uchun har bir qo‘shiluvchini alohida ko‘paytirib, natijalarni qo‘shish mumkin: (3 + 2) · 4 = 3 · 4 + 2 · 4 = 12 + 8 = <b>20</b>.',
            'Чтобы умножить сумму на число, можно умножить каждое слагаемое и сложить результаты: (3 + 2) · 4 = 3 · 4 + 2 · 4 = 12 + 8 = <b>20</b>.',
            'To multiply a sum by a number, you can multiply each addend and add the results: (3 + 2) · 4 = 3 · 4 + 2 · 4 = 12 + 8 = <b>20</b>.'),
          rule: '(a + b) · c = a · c + b · c',
          acts: [
            { type: 'drill', n: 6, make: function (R) { var a = R(2, 9), b = R(2, 9), c = R(2, 9); return pick([{ q: '(' + a + ' + ' + b + ') · ' + c, a: (a + b) * c }, { q: a + ' · ' + c + ' + ' + b + ' · ' + c, a: (a + b) * c }]); } },
            { type: 'choose', title: L('Teng ifodani toping', 'Найдите равное выражение', 'Find the equal expression'), icon: '🟰', make: function (R) { var a = R(2, 9), b = R(2, 9), c = R(2, 9); while (b === a) b = R(2, 9); return choice('<span class="kd-big">(' + a + ' + ' + b + ') · ' + c + '</span>', [a + ' · ' + c + ' + ' + b + ' · ' + c, a + ' + ' + b + ' · ' + c, a + ' · ' + b + ' + ' + c], 0); } }
          ],
          quiz: [{ q: '(4 + 3) · 5 = ?', o: ['35', '19', '23'], a: 0 }, { q: '6 · 2 + 4 · 2 = (6 + 4) · ?', o: ['2', '6', '4'], a: 0 }] },

        { id: 't9', lessons: L('141–142-darslar', 'Уроки 141–142', 'Lessons 141–142'), title: L('Ikki xonali sonni ko‘paytirish', 'Умножение двузначного числа', 'Multiplying a two-digit number'),
          keys: ['23 · 3 = 20 · 3 + 3 · 3'],
          scene: [{ obj: 'rod', n: 2, color: 'orange' }, { obj: 'unit', n: 3, color: 'blue' }],
          explain: L('23 · 3 ni taqsimot xossasi bilan hisoblaymiz: 23 = 20 + 3, demak 23 · 3 = 20 · 3 + 3 · 3 = 60 + 9 = <b>69</b>.',
            '23 · 3 вычислим по распределительному свойству: 23 = 20 + 3, значит 23 · 3 = 20 · 3 + 3 · 3 = 60 + 9 = <b>69</b>.',
            'Work out 23 · 3 with the distributive property: 23 = 20 + 3, so 23 · 3 = 20 · 3 + 3 · 3 = 60 + 9 = <b>69</b>.'),
          rule: '23 · 3 = (20 + 3) · 3 = 60 + 9 = 69',
          acts: [
            { type: 'chain', title: L('Bosqichma-bosqich', 'Пошагово', 'Step by step'), make: function (R) { var t = R(1, 4), u = R(1, 9), k = R(2, 4); return { start: t * 10 * k, ops: [['+', u * k]] }; } },
            { type: 'drill', n: 8, make: function (R) { var a = R(11, 49), k = R(2, 4); return { q: a + ' · ' + k, a: a * k }; } }
          ],
          quiz: [{ q: '14 · 3 = ?', o: ['42', '17', '312'], a: 0 }, { q: '25 · 4 = ?', o: ['100', '29', '80'], a: 0 }, { q: '32 · 2 = ?', o: ['64', '34', '62'], a: 0 }] }
      ] },

      { id: 's4', title: L('Shakllar va takrorlash', 'Фигуры и повторение', 'Shapes and review'), icon: '⭕', color: 'orange', topics: [
        { id: 't10', lessons: L('143–144-darslar', 'Уроки 143–144', 'Lessons 143–144'), title: L('Hajmli shakllar. Shakllarning hajmi', 'Объёмные фигуры. Объём фигур', 'Solids. Volume'),
          keys: [L('hajm', 'объём', 'volume'), L('kubik', 'кубик', 'unit cube'), L('parallelepiped', 'параллелепипед', 'cuboid')],
          scene: [{ obj: 'cube', n: 6, color: 'cyan' }, { obj: 'box', n: 1, color: 'orange' }],
          explain: L('Jism qancha joy egallashi — uning <b>hajmi</b>. Uni kichik kubchalar bilan o‘lchaymiz: nechta kubcha sig‘sa, hajm shuncha. Bir qatlamda 3 · 2 = 6 kubcha bo‘lsa, 2 qatlamda 12 ta.',
            'Сколько места занимает тело — его <b>объём</b>. Его измеряют маленькими кубиками: сколько кубиков поместилось, таков и объём. В одном слое 3 · 2 = 6 кубиков, в двух слоях — 12.',
            'How much space a solid takes up is its <b>volume</b>. We measure it in little cubes: however many fit, that is the volume. One layer of 3 · 2 = 6 cubes; two layers make 12.'),
          rule: L('Hajm = qatlamdagi kubchalar · qatlamlar soni', 'Объём = кубиков в слое · число слоёв', 'Volume = cubes per layer · number of layers'),
          acts: [
            { type: 'count3d', title: L('3D: kubchalarni sanang', '3D: посчитайте кубики', '3D: count the cubes'), make: function (R) { var a = R(2, 4), b = R(2, 3); var g = []; for (var i = 0; i < b; i++) g.push({ obj: 'cube', n: a, color: ['cyan', 'blue', 'violet'][i] }); return { groups: g, perRow: a, story: L('Har qatorda <b>' + a + '</b> ta kubcha, <b>' + b + '</b> ta qator. <b>Jami nechta</b>?', 'В каждом ряду <b>' + a + '</b> кубика, рядов — <b>' + b + '</b>. <b>Сколько всего</b>?', '<b>' + a + '</b> cubes in each row, <b>' + b + '</b> rows. <b>How many in total</b>?'), expr: [a, '·', b, '=', a * b], ans: a * b, unit: PCS }; } },
            { type: 'choose', title: L('3D: shaklni taniying', '3D: узнайте фигуру', '3D: name the solid'), icon: '🧊', make: function () { var SH = { cube: L('kub', 'куб', 'cube'), box: L('parallelepiped', 'параллелепипед', 'cuboid'), cylinder: L('silindr', 'цилиндр', 'cylinder'), cone: L('konus', 'конус', 'cone'), ball: L('shar', 'шар', 'sphere'), pyramid: L('piramida', 'пирамида', 'pyramid') }, keys = Object.keys(SH), k = pick(keys), o = keys.filter(function (x) { return x !== k; }).sort(function () { return Math.random() - 0.5; });
              var ch = choice(L('Bu qaysi shakl?', 'Что это за фигура?', 'Which solid is this?'), [SH[k], SH[o[0]], SH[o[1]]], 0); ch.scene = [{ obj: k, n: 1, color: 'violet' }]; return ch; } }
          ],
          quiz: [{ q: L('Qatlamda 4 kubcha, 3 qatlam. Hajm?', 'В слое 4 кубика, 3 слоя. Объём?', '4 cubes a layer, 3 layers. Volume?'), o: ['12', '7', '43'], a: 0 }, { q: L('Kubning nechta yog‘i bor?', 'Сколько граней у куба?', 'How many faces does a cube have?'), o: ['6', '4', '8'], a: 0 }] },

        { id: 't11', lessons: L('145–146-darslar', 'Уроки 145–146', 'Lessons 145–146'), title: L('Aylana va doira', 'Окружность и круг', 'Circle and disc'),
          keys: [L('aylana', 'окружность', 'circle'), L('doira', 'круг', 'disc'), L('markaz', 'центр', 'centre'), L('radius', 'радиус', 'radius'), L('diametr', 'диаметр', 'diameter')],
          scene: [{ obj: 'cylinder', n: 2, color: 'yellow' }, { obj: 'ball', n: 1, color: 'pink' }],
          explain: L('<b>Aylana</b> — markazdan bir xil masofada yotgan nuqtalar chizig‘i; uning ichi bilan birga — <b>doira</b>. Markazdan aylanagacha — <b>radius</b>, markaz orqali o‘tgan kesma — <b>diametr</b>: d = 2 · r.',
            '<b>Окружность</b> — линия из точек на одинаковом расстоянии от центра; вместе с внутренней частью — <b>круг</b>. От центра до окружности — <b>радиус</b>, отрезок через центр — <b>диаметр</b>: d = 2 · r.',
            'A <b>circle</b> is the line of points the same distance from the centre; together with its inside it is a <b>disc</b>. Centre to edge is the <b>radius</b>; a segment through the centre is the <b>diameter</b>: d = 2 · r.'),
          rule: 'd = 2 · r · r = d : 2',
          acts: [
            { type: 'drill', title: L('Radius va diametr', 'Радиус и диаметр', 'Radius and diameter'), n: 6, make: function (R) { var r = R(2, 20); return R(0, 1) ? { q: 'r = ' + r + ';  d', a: 2 * r } : { q: 'd = ' + 2 * r + ';  r', a: r }; } },
            { type: 'choose', title: L('Bu qaysi kesma?', 'Какой это отрезок?', 'Which segment is it?'), icon: '⭕', make: function () { var isR = Math.random() < 0.5;
              return choice(L('Rasmdagi qizil kesma nima?', 'Что за красный отрезок на рисунке?', 'What is the red segment?'), [isR ? L('radius', 'радиус', 'radius') : L('diametr', 'диаметр', 'diameter'), isR ? L('diametr', 'диаметр', 'diameter') : L('radius', 'радиус', 'radius'), L('perimetr', 'периметр', 'perimeter')], 0,
                svg('<circle cx="100" cy="70" r="55" fill="rgba(79,141,255,.15)" stroke="#4f8dff" stroke-width="4"/><circle cx="100" cy="70" r="4" fill="#fff"/><line x1="' + (isR ? 100 : 45) + '" y1="70" x2="155" y2="70" stroke="#ff6b8b" stroke-width="4"/>')); } }
          ],
          quiz: [{ q: L('r = 5 cm. d = ?', 'r = 5 см. d = ?', 'r = 5 cm. d = ?'), o: ['10', '5', '25'], a: 0 }, { q: L('d = 18 cm. r = ?', 'd = 18 см. r = ?', 'd = 18 cm. r = ?'), o: ['9', '36', '18'], a: 0 }] },

        { id: 't12', lessons: L('147–149-darslar', 'Уроки 147–149', 'Lessons 147–149'), title: L('Takrorlash', 'Повторение', 'Review'),
          keys: [L('ko‘paytirish jadvali', 'таблица умножения', 'times table'), L('ustun', 'столбик', 'column'), L('masalalar', 'задачи', 'problems')],
          scene: [{ obj: 'star', n: 5, color: 'yellow' }],
          explain: L('Yil davomida o‘rganganlarimizni takrorlaymiz: 1000 gacha sonlar, ustunda qo‘shish va ayirish, ko‘paytirish jadvali, amallar tartibi, uzunlik va vaqt. Siz bunga tayyorsiz!',
            'Повторим всё, что изучили за год: числа до 1000, сложение и вычитание столбиком, таблицу умножения, порядок действий, длину и время. Вы готовы!',
            'Let’s review the whole year: numbers to 1000, column adding and subtracting, the times tables, order of operations, length and time. You’re ready!'),
          rule: L('Ishonch bilan hisoblang va har doim tekshiring!', 'Считайте уверенно и всегда проверяйте!', 'Calculate with confidence and always check!'),
          acts: [
            { type: 'drill', title: L('Aralash misollar', 'Разные примеры', 'Mixed sums'), n: 10, make: function (R) { var k = R(0, 4), a = R(2, 9), b = R(2, 9); if (k === 0) return { q: a + ' · ' + b, a: a * b }; if (k === 1) return { q: (a * b) + ' : ' + a, a: b }; if (k === 2) { var x = R(100, 500), y = R(100, 400); return { q: x + ' + ' + y, a: x + y }; } if (k === 3) { var z = R(300, 900), w = R(100, z - 50); return { q: z + ' − ' + w, a: z - w }; } return { q: a + ' + ' + b + ' · 3', a: a + b * 3 }; } },
            { type: 'column', make: function (R) { var a = R(200, 600), b = R(100, 399); return R(0, 1) ? { a: a, b: b, op: '+', ans: a + b } : { a: a + b, b: b, op: '-', ans: a }; } },
            { type: 'clock', make: function (R) { return { h: R(1, 12), m: R(0, 11) * 5 }; } }
          ],
          quiz: [{ q: '8 · 7 = ?', o: ['56', '54', '63'], a: 0 }, { q: '345 + 255 = ?', o: ['600', '590', '500'], a: 0 }, { q: '4 + 6 · 2 = ?', o: ['16', '20', '12'], a: 0 }, { q: L('1 soat = ? min', '1 час = ? мин', '1 hour = ? min'), o: ['60', '100', '24'], a: 0 }] }
      ] }
    ]
  };
  C.addPart(part4);
})(this);
