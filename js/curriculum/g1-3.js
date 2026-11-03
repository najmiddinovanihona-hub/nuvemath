// Nuvemath — 1-sinf, III qism (manba: I.V. Repyova, «Matematika. 1-sinf. III qism», Toshkent, 2024).
// Mavzular tartibi va nomlari darslikdan olingan; tushuntirishlar, masalalar va rasmlar Nuvemath uchun qayta yozilgan.
// Barcha matnlar uch tilda: L(uz, ru, en). Masala yasovchilar ham har uch tildagi matnni qaytaradi.
(function (root) {
  'use strict';
  var C = root.NMCurriculum;
  function L(uz, ru, en) { return { uz: uz, ru: ru, en: en }; }
  function pk(v, l) { return v && typeof v === 'object' && 'uz' in v ? v[l] : v; }
  function mk(fn) { return { uz: fn('uz'), ru: fn('ru'), en: fn('en') }; } // har bir til uchun matn yasash
  // ruscha ko'plik: 1 медаль, 2 медали, 5 медалей
  function rp(n, f) { var a = n % 10, b = n % 100; return n + ' ' + (a === 1 && b !== 11 ? f[0] : a >= 2 && a <= 4 && (b < 12 || b > 14) ? f[1] : f[2]); }
  function ep(n, one, many) { return n + ' ' + (n === 1 ? one : many); }
  var PCS = L('ta', 'шт.', 'pcs'), TOTAL = L('Jami', 'Всего', 'Total'), MORE = L('ko‘p', 'больше', 'more'), LESS = L('kam', 'меньше', 'fewer');
  var P1 = L('I qism', 'I часть', 'Part I'), P2 = L('II qism', 'II часть', 'Part II'), KG = L('kg', 'кг', 'kg'), LT = L('l', 'л', 'L'), CM = L('cm', 'см', 'cm');
  function K() { return root.NMKids; }

  // ---------- Masala yasovchilar (har chaqiruvda yangi sonlar) ----------
  // Butunni topish: a + b = ?
  function whole(o) {
    return function (R) {
      var a = R(o.a[0], o.a[1]), b = R(o.b[0], o.b[1]), u = o.u || PCS;
      return { story: o.text(a, b), pics: o.emoji ? [[o.emoji[0], a, o.labels[0]], [o.emoji[1] || o.emoji[0], b, o.labels[1]]] : null, picsOp: '+',
        cond: [[o.cond ? o.cond[0] : P1, mk(function (l) { return a + ' ' + pk(u, l); })], [o.cond ? o.cond[1] : P2, mk(function (l) { return b + ' ' + pk(u, l); })], [TOTAL, mk(function (l) { return '? ' + pk(u, l); })]],
        scheme: { kind: 'whole', parts: [a, b], show: [a, b], top: mk(function (l) { return '? ' + pk(u, l); }), labels: o.labels },
        expr: [a, '+', b, '=', a + b], ans: a + b, unit: u };
    };
  }
  // Qismni topish: c − a = ?
  function part(o) {
    return function (R) {
      var c = R(o.c[0], o.c[1]), a = R(o.a[0], Math.min(o.a[1], c - 1)), u = o.u || PCS;
      return { story: o.text(c, a), pics: o.emoji ? [[o.emoji, c, TOTAL]] : null,
        cond: [[TOTAL, mk(function (l) { return c + ' ' + pk(u, l); })], [o.cond ? o.cond[0] : P1, mk(function (l) { return a + ' ' + pk(u, l); })], [o.cond ? o.cond[1] : P2, mk(function (l) { return '? ' + pk(u, l); })]],
        scheme: { kind: 'part', parts: [a, c - a], show: [a, '?'], top: mk(function (l) { return c + ' ' + pk(u, l); }), labels: o.labels },
        expr: [c, '−', a, '=', c - a], ans: c - a, unit: u };
    };
  }
  // Orttirish: a dan d ta ko'p
  function more(o) {
    return function (R) {
      var a = R(o.a[0], o.a[1]), d = R(o.d[0], o.d[1]), u = o.u || PCS;
      return { story: o.text(a, d), cond: [[o.who[0], mk(function (l) { return a + ' ' + pk(u, l); })], [o.who[1], mk(function (l) { return '?, ' + (l === 'ru' ? 'на ' : '') + d + ' ' + pk(u, l) + ' ' + pk(MORE, l); })]],
        scheme: { kind: 'more', a: a, b: a + d, show: [a, mk(function (l) { return '? ' + pk(u, l); }), '+' + d], labels: o.who },
        expr: [a, '+', d, '=', a + d], ans: a + d, unit: u };
    };
  }
  // Kamaytirish: a dan d ta kam
  function less(o) {
    return function (R) {
      var a = R(o.a[0], o.a[1]), d = R(o.d[0], Math.min(o.d[1], a - 1)), u = o.u || PCS;
      return { story: o.text(a, d), cond: [[o.who[0], mk(function (l) { return a + ' ' + pk(u, l); })], [o.who[1], mk(function (l) { return '?, ' + (l === 'ru' ? 'на ' : '') + d + ' ' + pk(u, l) + ' ' + pk(LESS, l); })]],
        scheme: { kind: 'less', a: a, b: a - d, show: [a, mk(function (l) { return '? ' + pk(u, l); }), '−' + d], labels: o.who },
        expr: [a, '−', d, '=', a - d], ans: a - d, unit: u };
    };
  }
  // Taqqoslash: necha ta ko'p / kam
  function diff(o) {
    return function (R) {
      var a = R(o.a[0], o.a[1]), b; do { b = R(o.b[0], o.b[1]); } while (b === a);
      var hi = Math.max(a, b), lo = Math.min(a, b), u = o.u || PCS;
      return { story: o.text(a, b), cond: [[o.who[0], mk(function (l) { return a + ' ' + pk(u, l); })], [o.who[1], mk(function (l) { return b + ' ' + pk(u, l); })]],
        scheme: { kind: 'diff', a: a, b: b, show: [a, b, '?'], labels: o.who },
        expr: [hi, '−', lo, '=', hi - lo], ans: hi - lo, unit: u };
    };
  }
  function sumDrill(max) { return function (R) { var a = R(1, max - 1), b = R(1, max - a); return R(0, 1) ? { q: a + ' + ' + b, a: a + b } : { q: (a + b) + ' − ' + b, a: a }; }; }
  function tensDrill(R) { var a = R(1, 9) * 10, b = R(1, 9); return R(0, 1) ? { q: a + ' + ' + b, a: a + b } : { q: (a + b) + ' − ' + b, a: a }; }
  function unitDrill(u) { return function (R) { var a = R(5, 50), b = R(1, 40); return R(0, 1) ? { q: mk(function (l) { return a + ' ' + pk(u, l) + ' + ' + b + ' ' + pk(u, l); }), a: a + b, unit: u } : { q: mk(function (l) { return (a + b) + ' ' + pk(u, l) + ' − ' + b + ' ' + pk(u, l); }), a: a, unit: u }; }; }
  function choice(story, options, a, pics) { return { story: story, options: options, a: a, pics: pics }; }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  var YES_NO_Q = L('Yo‘q, unda savol yo‘q', 'Нет, в нём нет вопроса', 'No, it has no question');

  var part3 = {
    grade: 1, part: 3, edition: L('Yangi nashr, 2024', 'Новое издание, 2024', 'New edition, 2024'),
    title: L('Masalalar va kattaliklar', 'Задачи и величины', 'Word problems and measurements'),
    book: L('I.V. Repyova. Matematika, 1-sinf, III qism (Toshkent, 2024)', 'И.В. Репьева. Математика, 1 класс, часть III (Ташкент, 2024)', 'I.V. Repyova. Mathematics, Grade 1, Part III (Tashkent, 2024)'),
    intro: L('Bu qismda biz masalalar bilan do‘stlashamiz: ularni o‘qish, sxema chizish, ifoda tuzish va javob topishni o‘rganamiz. So‘ng uzunlik, massa va hajmni o‘lchaymiz.',
      'В этой части мы подружимся с задачами: научимся их читать, рисовать схему, составлять выражение и находить ответ. А потом будем измерять длину, массу и объём.',
      'In this part we make friends with word problems: we learn to read them, draw a diagram, write an expression and find the answer. Then we measure length, mass and volume.'),
    sections: [
      // ================= 1-BO'LIM =================
      { id: 's1', title: L('Masala nima?', 'Что такое задача?', 'What is a word problem?'), icon: '📝', color: 'blue', topics: [
        { id: 't1', lessons: L('1-dars', 'Урок 1', 'Lesson 1'), title: L('Masalaning tarkibi', 'Из чего состоит задача', 'Parts of a word problem'),
          keys: [L('masala', 'задача', 'problem'), L('shart', 'условие', 'condition'), L('savol', 'вопрос', 'question'), L('yechim', 'решение', 'solution'), L('javob', 'ответ', 'answer')],
          scene: [{ obj: 'medal', n: 3, color: 'gold' }, { obj: 'medal', n: 2, color: 'gray' }],
          explain: L('Masala — bu kichik hikoya, uning oxirida <b>savol</b> bo‘ladi. Hikoyada bizga berilgan sonlar — <b>shart</b>. Savolga javob topish uchun ifoda tuzamiz — bu <b>yechim</b>. Oxirida <b>javob</b>ni yozamiz.',
            'Задача — это маленькая история, в конце которой есть <b>вопрос</b>. Числа, которые нам даны, — это <b>условие</b>. Чтобы ответить на вопрос, составляем выражение — это <b>решение</b>. В конце записываем <b>ответ</b>.',
            'A word problem is a short story that ends with a <b>question</b>. The numbers we are given are the <b>condition</b>. To answer the question we write an expression — the <b>solution</b>. Finally we write the <b>answer</b>.'),
          rule: L('<b>Masala</b> = <span class="hl1">shart</span> + <span class="hl2">savol</span>.<br>Yechim → ifoda, masalan <b>12 + 7 = 19</b>. Javob: <b>19 ta</b>.',
            '<b>Задача</b> = <span class="hl1">условие</span> + <span class="hl2">вопрос</span>.<br>Решение → выражение, например <b>12 + 7 = 19</b>. Ответ: <b>19</b>.',
            '<b>Problem</b> = <span class="hl1">condition</span> + <span class="hl2">question</span>.<br>Solution → an expression, e.g. <b>12 + 7 = 19</b>. Answer: <b>19</b>.'),
          acts: [
            { type: 'problem', title: L('Medallarni sanang', 'Посчитайте медали', 'Count the medals'), make: whole({ a: [8, 15], b: [5, 12], emoji: ['🥇', '🥈'], labels: [L('oltin', 'золотые', 'gold'), L('kumush', 'серебряные', 'silver')], cond: [L('Oltin', 'Золотые', 'Gold'), L('Kumush', 'Серебряные', 'Silver')],
              text: function (a, b) { return L('Devorga <b>' + a + '</b> ta oltin va <b>' + b + '</b> ta kumush medal osildi. Devorda <u>jami nechta medal</u> bor?',
                'На стену повесили медали: золотых — <b>' + a + '</b>, серебряных — <b>' + b + '</b>. <u>Сколько всего медалей</u> на стене?',
                'There are <b>' + a + '</b> gold and <b>' + b + '</b> silver medals on the wall. <u>How many medals</u> are there in total?'); } }) },
            { type: 'choose', title: L('Bu masalami?', 'Это задача?', 'Is it a problem?'), icon: '🤔', make: function (R) {
              var a = R(3, 9), b = R(2, 8);
              return pick([
                choice(L('«Bog‘da ' + a + ' ta olma daraxti va ' + b + ' ta nok daraxti o‘sadi.» Bu matn masalami?', '«В саду растут яблони — ' + a + ' и груши — ' + b + '.» Это задача?', '“There are ' + a + ' apple trees and ' + b + ' pear trees in the garden.” Is this a word problem?'),
                  [YES_NO_Q, L('Ha, bu masala', 'Да, это задача', 'Yes, it is a problem'), L('Ha, chunki sonlar bor', 'Да, ведь в нём есть числа', 'Yes, because it has numbers')], 0),
                choice(L('«Savatda ' + a + ' ta olma bor edi. Yana ' + b + ' ta olma solishdi. Savatda nechta olma bo‘ldi?» Bu matnning <b>savoli</b> qaysi?', '«В корзине было ' + rp(a, ['яблоко', 'яблока', 'яблок']) + '. Положили ещё ' + b + '. Сколько яблок стало в корзине?» Где здесь <b>вопрос</b>?', '“A basket had ' + a + ' apples. ' + b + ' more were added. How many apples are in the basket now?” Which part is the <b>question</b>?'),
                  [L('Savatda nechta olma bo‘ldi?', 'Сколько яблок стало в корзине?', 'How many apples are in the basket now?'), L('Savatda ' + a + ' ta olma bor edi', 'В корзине было ' + rp(a, ['яблоко', 'яблока', 'яблок']), 'A basket had ' + a + ' apples'), L('Yana ' + b + ' ta olma solishdi', 'Положили ещё ' + b, b + ' more were added')], 0),
                choice(L('«Robot ' + a + ' ta kub va ' + b + ' ta shar yasadi. Robot jami nechta shakl yasadi?» Masalaning <b>sharti</b> qaysi?', '«Робот сделал кубики — ' + a + ' и шарики — ' + b + '. Сколько всего фигур сделал робот?» Где <b>условие</b>?', '“A robot made ' + a + ' cubes and ' + b + ' balls. How many shapes did it make in total?” Which part is the <b>condition</b>?'),
                  [L('Robot ' + a + ' ta kub va ' + b + ' ta shar yasadi', 'Робот сделал кубики — ' + a + ' и шарики — ' + b, 'A robot made ' + a + ' cubes and ' + b + ' balls'), L('Robot jami nechta shakl yasadi?', 'Сколько всего фигур сделал робот?', 'How many shapes did it make in total?'), a + ' + ' + b], 0)
              ]);
            } },
            { type: 'magic', title: L('Sehrli kvadratni to‘ldiring', 'Заполните магический квадрат', 'Complete the magic square'), given: 5 }
          ],
          quiz: [
            { q: L('Masala qanday qismlardan iborat?', 'Из каких частей состоит задача?', 'What parts does a word problem have?'), o: [L('Shart va savol', 'Условие и вопрос', 'Condition and question'), L('Faqat sonlar', 'Только числа', 'Only numbers'), L('Faqat savol', 'Только вопрос', 'Only a question'), L('Rasm va sonlar', 'Рисунок и числа', 'A picture and numbers')], a: 0 },
            { q: L('Masalaning savoli nimani ko‘rsatadi?', 'Что показывает вопрос задачи?', 'What does the question of a problem tell us?'), o: [L('Nimani topish kerakligini', 'Что нужно найти', 'What we need to find'), L('Berilgan sonlarni', 'Данные числа', 'The given numbers'), L('Javobni', 'Ответ', 'The answer'), L('Rasmni', 'Рисунок', 'The picture')], a: 0 },
            { q: L('12 ta rangli va 7 ta oq-qora rasm bor. Jami nechta rasm?', 'Есть 12 цветных и 7 чёрно-белых картинок. Сколько всего картинок?', 'There are 12 colour and 7 black-and-white pictures. How many in total?'), o: ['19', '5', '17', '20'], a: 0 },
            { q: L('Qaysi matn masala?', 'Какой текст — задача?', 'Which text is a word problem?'), o: [L('Qutida 5 ta qalam bor. Yana 3 ta solishdi. Qutida nechta qalam bo‘ldi?', 'В коробке 5 карандашей. Положили ещё 3. Сколько карандашей стало?', 'A box has 5 pencils. 3 more are added. How many pencils are there now?'), L('Qutida 5 ta qalam bor.', 'В коробке 5 карандашей.', 'A box has 5 pencils.'), L('Qalamlar rangli.', 'Карандаши цветные.', 'The pencils are coloured.'), '5 + 3'], a: 0 }
          ] },

        { id: 't2', lessons: L('2-dars', 'Урок 2', 'Lesson 2'), title: L('Masalani yechish algoritmi', 'Алгоритм решения задачи', 'How to solve a problem: the algorithm'),
          keys: [L('reja', 'план', 'plan'), L('berilganlar', 'данные', 'given data'), L('savol', 'вопрос', 'question'), L('ifoda', 'выражение', 'expression'), L('javob', 'ответ', 'answer')],
          scene: [{ obj: 'robot', n: 2, color: 'blue' }, { obj: 'cube', n: 3, color: 'orange' }],
          explain: L('Algoritm — bu ishni bosqichma-bosqich bajarish rejasi. Robotlar ham shunday ishlaydi: avval birinchi qadam, keyin ikkinchisi... Masalani yechishda ham 4 qadamli reja bor.',
            'Алгоритм — это план, по которому работу делают шаг за шагом. Роботы работают так же: сначала первый шаг, потом второй... У решения задачи тоже есть план из 4 шагов.',
            'An algorithm is a step-by-step plan. Robots work like this: first step one, then step two... Solving a word problem also has a 4-step plan.'),
          rule: L('<b>Masalani yechish rejasi:</b><br>1) berilganlarni ajratish;<br>2) savolni aniqlash;<br>3) ifoda tuzish;<br>4) javobni yozish.',
            '<b>План решения задачи:</b><br>1) выделить данные;<br>2) понять вопрос;<br>3) составить выражение;<br>4) записать ответ.',
            '<b>Problem-solving plan:</b><br>1) pick out the given data;<br>2) find the question;<br>3) write an expression;<br>4) write the answer.'),
          acts: [
            { type: 'order', title: L('Rejani to‘g‘ri tartiblang', 'Расставьте шаги плана', 'Put the plan in order'), make: function () { return { story: L('Masalani yechish qadamlarini to‘g‘ri tartibda bosing.', 'Нажимайте на шаги решения задачи в правильном порядке.', 'Tap the problem-solving steps in the right order.'),
              items: [L('Berilganlarni ajratish', 'Выделить данные', 'Pick out the data'), L('Savolni aniqlash', 'Понять вопрос', 'Find the question'), L('Ifoda tuzish', 'Составить выражение', 'Write an expression'), L('Javobni yozish', 'Записать ответ', 'Write the answer')], sep: '<span class="kd-arr">→</span>' }; } },
            { type: 'chain', title: L('Robot algoritmi: amallarni bajaring', 'Алгоритм робота: выполните действия', 'Robot algorithm: do the operations'), make: function (R) { var s = R(10, 30); return { start: s, ops: [['+', R(5, 20)], ['−', R(2, 9)], ['+', R(10, 30)], ['−', R(5, 15)]] }; } },
            { type: 'problem', title: L('Rejaga ko‘ra yeching', 'Решите по плану', 'Solve using the plan'), make: whole({ a: [20, 40], b: [10, 30], emoji: ['🤖', '🦾'], labels: [L('robot', 'роботы', 'robots'), L('robot qo‘l', 'манипуляторы', 'robot arms')], cond: [L('Robotlar', 'Роботы', 'Robots'), L('Robot qo‘llar', 'Манипуляторы', 'Robot arms')],
              text: function (a, b) { return L('Zavodda <b>' + a + '</b> ta robot va <b>' + b + '</b> ta robot qo‘l yig‘ildi. Zavodda <u>jami nechta</u> qurilma yig‘ildi?',
                'На заводе собрали роботов — <b>' + a + '</b> и роботов-манипуляторов — <b>' + b + '</b>. <u>Сколько всего</u> устройств собрали?',
                'A factory built <b>' + a + '</b> robots and <b>' + b + '</b> robot arms. <u>How many machines</u> did it build in total?'); } }) }
          ],
          quiz: [
            { q: L('Masalani yechishning birinchi qadami qaysi?', 'Какой первый шаг решения задачи?', 'What is the first step in solving a problem?'), o: [L('Berilganlarni ajratish', 'Выделить данные', 'Pick out the data'), L('Javobni yozish', 'Записать ответ', 'Write the answer'), L('Ifoda tuzish', 'Составить выражение', 'Write an expression'), L('Rasm chizish', 'Нарисовать рисунок', 'Draw a picture')], a: 0 },
            { q: L('Ifoda qachon tuziladi?', 'Когда составляют выражение?', 'When do we write the expression?'), o: [L('Savolni aniqlagandan keyin', 'После того, как поняли вопрос', 'After finding the question'), L('Javobdan keyin', 'После ответа', 'After the answer'), L('Eng boshida', 'В самом начале', 'At the very start'), L('Hech qachon', 'Никогда', 'Never')], a: 0 },
            { q: '15 → +5 → −3 → ?', o: ['17', '23', '13', '20'], a: 0 },
            { q: L('Algoritm nima?', 'Что такое алгоритм?', 'What is an algorithm?'), o: [L('Ishni bajarish rejasi', 'План выполнения работы', 'A plan for doing a task'), L('Son', 'Число', 'A number'), L('Shakl', 'Фигура', 'A shape'), L('Rasm', 'Рисунок', 'A picture')], a: 0 }
          ] },

        { id: 't3', lessons: L('3-dars', 'Урок 3', 'Lesson 3'), title: L('Sodda masalalar', 'Простые задачи', 'Simple problems'),
          keys: [L('sodda masala', 'простая задача', 'simple problem'), L('butun', 'целое', 'whole'), L('qism', 'часть', 'part')],
          scene: [{ obj: 'apple', n: 4, color: 'red' }, { obj: 'apple', n: 3, color: 'green' }],
          explain: L('Bitta amal (qo‘shish yoki ayirish) bilan yechiladigan masala — <b>sodda masala</b>. Bunday masalalarni <b>sxema</b> bilan tasvirlaymiz: uzun chiziq — <b>butun</b>, uning bo‘laklari — <b>qismlar</b>.',
            'Задача, которая решается одним действием (сложением или вычитанием), — <b>простая задача</b>. Её изображают <b>схемой</b>: длинный отрезок — <b>целое</b>, его кусочки — <b>части</b>.',
            'A problem solved with one operation (adding or subtracting) is a <b>simple problem</b>. We draw it as a <b>diagram</b>: the long bar is the <b>whole</b>, its pieces are the <b>parts</b>.'),
          rule: L('<b>qism + qism = butun</b><br><b>butun − qism = qism</b>', '<b>часть + часть = целое</b><br><b>целое − часть = часть</b>', '<b>part + part = whole</b><br><b>whole − part = part</b>'),
          acts: [
            { type: 'count3d', title: L('3D savat: olmalarni sanang', '3D-корзина: посчитайте яблоки', '3D basket: count the apples'), make: function (R) { var a = R(2, 6), b = R(2, 5); return { groups: [{ obj: 'apple', n: a, color: 'red' }, { obj: 'apple', n: b, color: 'green' }],
              story: L('Savatda qizil va yashil olmalar bor. Ifoda tuzing: <b>jami nechta olma</b>?', 'В корзине красные и зелёные яблоки. Составьте выражение: <b>сколько всего яблок</b>?', 'The basket has red and green apples. Write an expression: <b>how many apples in total</b>?'),
              expr: [a, '+', b, '=', a + b], ans: a + b, unit: L('ta olma', 'яблок', 'apples') }; } },
            { type: 'problem', make: part({ c: [12, 30], a: [3, 15], emoji: '🎈', labels: [L('qizil', 'красные', 'red'), L('ko‘k', 'синие', 'blue')], cond: [L('Qizil', 'Красные', 'Red'), L('Ko‘k', 'Синие', 'Blue')],
              text: function (c, a) { return L('Bayramga <b>' + c + '</b> ta shar olib kelishdi. Ulardan <b>' + a + '</b> tasi qizil, qolganlari ko‘k. <u>Nechta ko‘k shar</u> bor?',
                'На праздник принесли шары — всего <b>' + c + '</b>. Из них красных — <b>' + a + '</b>, остальные синие. <u>Сколько синих шаров</u>?',
                'They brought <b>' + c + '</b> balloons to the party. <b>' + a + '</b> are red and the rest are blue. <u>How many blue balloons</u> are there?'); } }) },
            { type: 'drill', title: L('Tez hisoblang', 'Считаем быстро', 'Quick maths'), make: sumDrill(20) }
          ],
          quiz: [
            { q: L('Sodda masala nechta amal bilan yechiladi?', 'Сколькими действиями решается простая задача?', 'How many operations solve a simple problem?'), o: [L('Bitta', 'Одним', 'One'), L('Ikkita', 'Двумя', 'Two'), L('Uchta', 'Тремя', 'Three'), L('Amalsiz', 'Без действий', 'None')], a: 0 },
            { q: L('Butunni topish uchun qismlarni nima qilamiz?', 'Что делаем с частями, чтобы найти целое?', 'What do we do with the parts to find the whole?'), o: [L('Qo‘shamiz', 'Складываем', 'Add them'), L('Ayiramiz', 'Вычитаем', 'Subtract them'), L('Taqqoslaymiz', 'Сравниваем', 'Compare them'), L('Sanamaymiz', 'Не считаем', 'Nothing')], a: 0 },
            { q: L('Butun 15, bir qismi 9. Ikkinchi qism?', 'Целое 15, одна часть 9. Вторая часть?', 'The whole is 15, one part is 9. The other part?'), o: ['6', '24', '5', '9'], a: 0 },
            { q: '8 + 7 = ?', o: ['15', '14', '16', '1'], a: 0 }
          ] },

        { id: 't4', lessons: L('4-dars', 'Урок 4', 'Lesson 4'), title: L('Masala shartining berilish usullari', 'Способы записи условия задачи', 'Ways to give the condition'),
          keys: [L('matn', 'текст', 'text'), L('rasm', 'рисунок', 'picture'), L('qisqa yozuv', 'краткая запись', 'short note'), L('sxema', 'схема', 'diagram')],
          scene: [{ obj: 'book', n: 3, color: 'violet' }, { obj: 'pencil', n: 3, color: 'yellow' }],
          explain: L('Bitta masalani turli usulda aytish mumkin: <b>matn</b> bilan yozish, <b>rasm</b> chizish, <b>qisqa yozuv</b> qilish yoki <b>sxema</b> chizish. Qaysi usul sizga qulay bo‘lsa — shundan foydalaning!',
            'Одну и ту же задачу можно рассказать по-разному: написать <b>текстом</b>, нарисовать <b>рисунок</b>, сделать <b>краткую запись</b> или начертить <b>схему</b>. Пользуйтесь тем способом, который вам удобнее!',
            'The same problem can be told in different ways: as <b>text</b>, as a <b>picture</b>, as a <b>short note</b> or as a <b>diagram</b>. Use whichever way you like best!'),
          rule: L('Qisqa yozuv namunasi:<br>I qism — <b>8 ta</b><br>II qism — <b>5 ta</b><br>Jami — <b>?</b>', 'Пример краткой записи:<br>I часть — <b>8 шт.</b><br>II часть — <b>5 шт.</b><br>Всего — <b>?</b>', 'Short note example:<br>Part I — <b>8</b><br>Part II — <b>5</b><br>Total — <b>?</b>'),
          acts: [
            { type: 'problem', title: L('Matn → qisqa yozuv → sxema', 'Текст → краткая запись → схема', 'Text → short note → diagram'), make: whole({ a: [6, 25], b: [4, 20], emoji: ['📕', '✏️'], labels: [L('kitob', 'книги', 'books'), L('daftar', 'тетради', 'notebooks')], cond: [L('Kitoblar', 'Книги', 'Books'), L('Daftarlar', 'Тетради', 'Notebooks')],
              text: function (a, b) { return L('Javonda <b>' + a + '</b> ta kitob va <b>' + b + '</b> ta daftar turibdi. Javonda <u>jami nechta</u> kitob va daftar bor?',
                'На полке стоят книги — <b>' + a + '</b> и тетради — <b>' + b + '</b>. <u>Сколько всего</u> книг и тетрадей на полке?',
                'A shelf holds <b>' + a + '</b> books and <b>' + b + '</b> notebooks. <u>How many</u> books and notebooks are there in total?'); } }) },
            { type: 'choose', title: L('Sxemaga mos masalani tanlang', 'Выберите задачу к выражению', 'Pick the matching problem'), icon: '🧩', make: function (R) {
              var a = R(5, 15), b = R(3, 12);
              return choice(L('Qaysi masala <b>' + a + ' + ' + b + '</b> ifodasi bilan yechiladi?', 'Какая задача решается выражением <b>' + a + ' + ' + b + '</b>?', 'Which problem is solved by <b>' + a + ' + ' + b + '</b>?'), [
                L('Qutida ' + a + ' ta qizil va ' + b + ' ta ko‘k qalam bor. Jami nechta qalam?', 'В коробке красных карандашей — ' + a + ', синих — ' + b + '. Сколько всего карандашей?', 'A box has ' + a + ' red and ' + b + ' blue pencils. How many pencils in total?'),
                L('Qutida ' + (a + b) + ' ta qalam bor edi, ' + b + ' tasini olishdi. Nechta qoldi?', 'В коробке было ' + (a + b) + ' карандашей, взяли ' + b + '. Сколько осталось?', 'A box had ' + (a + b) + ' pencils and ' + b + ' were taken. How many are left?'),
                L(a + ' ta qalamdan ' + b + ' tasi ko‘k. Nechtasi qizil?', 'Из ' + a + ' карандашей синих — ' + b + '. Сколько красных?', b + ' of ' + a + ' pencils are blue. How many are red?')], 0);
            } },
            { type: 'magic', title: L('Kim tezroq: sehrli kvadrat', 'Кто быстрее: магический квадрат', 'Race: magic square'), given: 4 }
          ],
          quiz: [
            { q: L('Masala sharti qanday berilishi mumkin?', 'Как может быть дано условие задачи?', 'How can the condition of a problem be given?'), o: [L('Matn, rasm, qisqa yozuv yoki sxema', 'Текстом, рисунком, краткой записью или схемой', 'As text, picture, short note or diagram'), L('Faqat matn', 'Только текстом', 'Only as text'), L('Faqat rasm', 'Только рисунком', 'Only as a picture'), L('Faqat son', 'Только числом', 'Only as a number')], a: 0 },
            { q: L('«I qism — 6, II qism — 4, Jami — ?» Bu nima?', '«I часть — 6, II часть — 4, Всего — ?» Что это?', '“Part I — 6, Part II — 4, Total — ?” What is this?'), o: [L('Qisqa yozuv', 'Краткая запись', 'A short note'), L('Rasm', 'Рисунок', 'A picture'), L('Javob', 'Ответ', 'An answer'), L('Savol', 'Вопрос', 'A question')], a: 0 },
            { q: L('Qisqa yozuv bo‘yicha javob: I — 6, II — 4, Jami — ?', 'Ответ по краткой записи: I — 6, II — 4, Всего — ?', 'Answer from the note: I — 6, II — 4, Total — ?'), o: ['10', '2', '64', '11'], a: 0 }
          ] },

        { id: 't5', lessons: L('5-dars', 'Урок 5', 'Lesson 5'), title: L('Masalalar yechish', 'Решение задач', 'Solving problems'),
          keys: [L('butun va qismlar', 'целое и части', 'whole and parts'), L('ifodalar', 'выражения', 'expressions')],
          scene: [{ obj: 'robot', n: 3, color: 'green' }],
          explain: L('Endi o‘rgangan hamma narsani birlashtiramiz: masalani o‘qiymiz, qisqa yozuv qilamiz, sxema chizamiz, ifoda tuzamiz va javob yozamiz. Ekolog-robotlar shaharni tozalashga yordam beryapti!',
            'Теперь соединим всё, что узнали: читаем задачу, делаем краткую запись, рисуем схему, составляем выражение и пишем ответ. Роботы-экологи помогают убирать город!',
            'Now we put everything together: read the problem, make a short note, draw a diagram, write an expression and the answer. Eco-robots are helping to clean the city!'),
          rule: L('Yechimni tekshirish: javobni masala shartiga qo‘yib ko‘ring — mos kelsa, to‘g‘ri!', 'Проверка: подставьте ответ в условие задачи — если всё сходится, ответ верный!', 'Check: put your answer back into the problem — if it fits, it is right!'),
          acts: [
            { type: 'problem', make: whole({ a: [20, 50], b: [20, 45], u: L('qop', 'мешков', 'bags'), emoji: ['🗑️', '🗑️'], labels: [L('I robot', 'I робот', 'robot 1'), L('II robot', 'II робот', 'robot 2')], cond: [L('I robot', 'I робот', 'Robot 1'), L('II robot', 'II робот', 'Robot 2')],
              text: function (a, b) { return L('Birinchi robot mashinaga <b>' + a + '</b> qop, ikkinchisi <b>' + b + '</b> qop chiqindi yukladi. Mashina <u>jami necha qop</u> chiqindini olib ketadi?',
                'Первый робот погрузил в машину мешки с мусором — <b>' + a + '</b>, второй — <b>' + b + '</b>. <u>Сколько всего мешков</u> увезёт машина?',
                'The first robot loaded <b>' + a + '</b> bags of rubbish onto the truck and the second loaded <b>' + b + '</b>. <u>How many bags</u> will the truck take away?'); } }) },
            { type: 'order', title: L('Javoblarni kamayish tartibida joylang', 'Расставьте ответы по убыванию', 'Order the answers from largest'), make: function (R) {
              var ex = []; while (ex.length < 5) { var a = R(10, 60), b = R(1, 30), v = a + b; if (ex.every(function (e) { return e.v !== v; })) ex.push({ q: a + ' + ' + b, v: v }); }
              ex.sort(function (x, y) { return y.v - x.v; });
              return { story: L('Har bir misolni yeching va javobi <b>kattasidan kichigiga</b> qarab bosing.', 'Решите каждый пример и нажимайте на них <b>от большего ответа к меньшему</b>.', 'Solve each sum and tap them <b>from the largest answer to the smallest</b>.'), items: ex.map(function (e) { return e.q; }), sep: '<span class="kd-arr">›</span>' };
            } },
            { type: 'drill', title: L('O‘nliklar bilan hisoblang', 'Считаем с десятками', 'Tens and ones'), make: tensDrill }
          ],
          quiz: [
            { q: L('46 qop + 42 qop = ?', '46 мешков + 42 мешка = ?', '46 bags + 42 bags = ?'), o: ['88', '84', '4', '98'], a: 0 },
            { q: L('Javobni qanday tekshiramiz?', 'Как проверить ответ?', 'How do we check the answer?'), o: [L('Shartga qo‘yib ko‘ramiz', 'Подставим в условие', 'Put it back into the problem'), L('Taxmin qilamiz', 'Угадаем', 'Guess'), L('Tekshirmaymiz', 'Не проверяем', 'We don’t check'), L('Rasm chizamiz', 'Нарисуем рисунок', 'Draw a picture')], a: 0 },
            { q: '70 + 5 = ?', o: ['75', '57', '12', '705'], a: 0 }
          ] }
      ] },

      // ================= 2-BO'LIM =================
      { id: 's2', title: L('Butun va qismlar', 'Целое и части', 'Whole and parts'), icon: '🧩', color: 'green', topics: [
        { id: 't6', lessons: L('6–8-darslar', 'Уроки 6–8', 'Lessons 6–8'), title: L('Butunni topishga doir masalalar', 'Задачи на нахождение целого', 'Finding the whole'),
          keys: [L('butun va qismlar', 'целое и части', 'whole and parts'), L('qism + qism = butun', 'часть + часть = целое', 'part + part = whole')],
          scene: [{ obj: 'drone', n: 3, color: 'blue' }, { obj: 'drone', n: 2, color: 'orange' }],
          explain: L('Ikkita qismni bilsak, <b>butun</b>ni topish oson: ularni qo‘shamiz! Masalan, bir hovlida harbiy va fuqarolik dronlari bor. Ularning hammasini topish uchun ikkala guruhni qo‘shamiz.',
            'Если известны обе части, найти <b>целое</b> легко: нужно их сложить! Например, во дворе есть военные и гражданские дроны. Чтобы узнать, сколько их всего, складываем обе группы.',
            'If we know both parts, finding the <b>whole</b> is easy: add them! For example, a yard has military and civilian drones. To find how many there are, we add both groups.'),
          rule: L('<b>qism + qism = butun</b><br>Sxemada: ikki bo‘lak birlashib bitta uzun kesmani hosil qiladi.', '<b>часть + часть = целое</b><br>На схеме два кусочка вместе образуют один длинный отрезок.', '<b>part + part = whole</b><br>In the diagram two pieces join into one long bar.'),
          acts: [
            { type: 'count3d', title: L('3D: dronlar uchyapti!', '3D: летят дроны!', '3D: drones are flying!'), make: function (R) { var a = R(2, 5), b = R(2, 5); return { groups: [{ obj: 'drone', n: a, color: 'blue' }, { obj: 'drone', n: b, color: 'orange' }],
              story: L('Ko‘k — fuqarolik, to‘q sariq — yuk dronlari. <b>Jami nechta dron</b> uchyapti?', 'Синие — гражданские, оранжевые — грузовые дроны. <b>Сколько всего дронов</b> летит?', 'Blue drones are civilian, orange ones carry cargo. <b>How many drones</b> are flying in total?'),
              expr: [a, '+', b, '=', a + b], ans: a + b, unit: L('ta dron', 'дронов', 'drones') }; } },
            { type: 'problem', make: whole({ a: [10, 40], b: [10, 40], emoji: ['🚁', '🛸'], labels: [L('harbiy', 'военные', 'military'), L('fuqarolik', 'гражданские', 'civilian')], cond: [L('Harbiy', 'Военные', 'Military'), L('Fuqarolik', 'Гражданские', 'Civilian')],
              text: function (a, b) { return L('Ko‘rgazmada <b>' + a + '</b> ta harbiy va <b>' + b + '</b> ta fuqarolik droni bor. Ko‘rgazmada <u>jami nechta dron</u> bor?',
                'На выставке военных дронов — <b>' + a + '</b>, гражданских — <b>' + b + '</b>. <u>Сколько всего дронов</u> на выставке?',
                'An exhibition has <b>' + a + '</b> military and <b>' + b + '</b> civilian drones. <u>How many drones</u> are there in total?'); } }) },
            { type: 'problem', make: whole({ a: [15, 50], b: [10, 40], emoji: ['🤖', '🤖'], labels: [L('1-qavat', '1-й этаж', 'floor 1'), L('2-qavat', '2-й этаж', 'floor 2')], cond: [L('1-qavatda', 'На 1-м этаже', 'Floor 1'), L('2-qavatda', 'На 2-м этаже', 'Floor 2')],
              text: function (a, b) { return L('Kasalxonaning birinchi qavatida <b>' + a + '</b> ta, ikkinchi qavatida <b>' + b + '</b> ta robot-yordamchi ishlayapti. Kasalxonada <u>jami nechta robot</u> ishlayapti?',
                'В больнице на первом этаже работают роботы-помощники — <b>' + a + '</b>, на втором — <b>' + b + '</b>. <u>Сколько всего роботов</u> работает в больнице?',
                'In a hospital, <b>' + a + '</b> helper robots work on the first floor and <b>' + b + '</b> on the second. <u>How many robots</u> work there in total?'); } }) },
            { type: 'table', title: L('Yig‘indilar jadvali', 'Таблица сумм', 'Table of sums'), kind: 'sum', max: 100, min: 5 }
          ],
          quiz: [
            { q: L('Butunni qanday topamiz?', 'Как найти целое?', 'How do we find the whole?'), o: [L('Qismlarni qo‘shamiz', 'Складываем части', 'Add the parts'), L('Qismlarni ayiramiz', 'Вычитаем части', 'Subtract the parts'), L('Kattasini olamiz', 'Берём большую', 'Take the bigger one'), L('Kichigini olamiz', 'Берём меньшую', 'Take the smaller one')], a: 0 },
            { q: L('30 ta va 25 ta dron. Jami?', '30 и 25 дронов. Сколько всего?', '30 and 25 drones. How many in total?'), o: ['55', '5', '50', '65'], a: 0 },
            { q: L('Qo‘shiluvchilar 13 va 54. Yig‘indi?', 'Слагаемые 13 и 54. Сумма?', 'Addends 13 and 54. The sum?'), o: ['67', '41', '57', '77'], a: 0 },
            { q: L('qism + qism = ?', 'часть + часть = ?', 'part + part = ?'), o: [L('butun', 'целое', 'whole'), L('qism', 'часть', 'part'), L('ayirma', 'разность', 'difference'), L('nol', 'ноль', 'zero')], a: 0 }
          ] },

        { id: 't7', lessons: L('9–10-darslar', 'Уроки 9–10', 'Lessons 9–10'), title: L('Qismlarni topishga doir masalalar', 'Задачи на нахождение части', 'Finding a part'),
          keys: [L('butun va qismlar', 'целое и части', 'whole and parts'), L('butun − qism = qism', 'целое − часть = часть', 'whole − part = part')],
          scene: [{ obj: 'cone', n: 3, color: 'violet' }, { obj: 'cylinder', n: 3, color: 'cyan' }],
          explain: L('Agar butunni va uning bitta qismini bilsak, ikkinchi qismni topish uchun butundan ma’lum qismni <b>ayiramiz</b>. Xuddi pirogdan bir bo‘lagi yeyilsa, qolganini topgandek!',
            'Если известны целое и одна его часть, то, чтобы найти другую часть, из целого <b>вычитаем</b> известную часть. Как будто от пирога съели кусочек и считаем, сколько осталось!',
            'If we know the whole and one part, we <b>subtract</b> the known part from the whole to find the other part — like working out what is left of a cake after a slice is eaten!'),
          rule: L('<b>butun − qism = qism</b><br>Tekshirish: topilgan qismni ma’lum qismga qo‘shsak, butun chiqadi.', '<b>целое − часть = часть</b><br>Проверка: найденная часть + известная часть = целое.', '<b>whole − part = part</b><br>Check: the part you found + the known part = the whole.'),
          acts: [
            { type: 'problem', make: part({ c: [40, 90], a: [10, 35], emoji: '🔷', labels: [L('konus', 'конусы', 'cones'), L('silindr', 'цилиндры', 'cylinders')], cond: [L('Konuslar', 'Конусы', 'Cones'), L('Silindrlar', 'Цилиндры', 'Cylinders')],
              text: function (c, a) { return L('Qutida <b>' + c + '</b> ta hajmli jism bor: <b>' + a + '</b> tasi konus, qolganlari silindr. Qutida <u>nechta silindr</u> bor?',
                'В коробке объёмных фигур — <b>' + c + '</b>: конусов — <b>' + a + '</b>, остальные цилиндры. <u>Сколько цилиндров</u> в коробке?',
                'A box holds <b>' + c + '</b> solid shapes: <b>' + a + '</b> are cones and the rest are cylinders. <u>How many cylinders</u> are there?'); } }) },
            { type: 'problem', make: part({ c: [20, 60], a: [5, 25], labels: [L('egri', 'кривые', 'curved'), L('siniq', 'ломаные', 'broken')], cond: [L('Egri chiziqlar', 'Кривые линии', 'Curved lines'), L('Siniq chiziqlar', 'Ломаные линии', 'Broken lines')],
              text: function (c, a) { return L('Daftarga <b>' + c + '</b> ta chiziq chizildi. Ulardan <b>' + a + '</b> tasi egri chiziq, qolganlari siniq chiziq. <u>Nechta siniq chiziq</u> chizildi?',
                'В тетради нарисовали линии — всего <b>' + c + '</b>. Из них кривых — <b>' + a + '</b>, остальные ломаные. <u>Сколько ломаных линий</u>?',
                '<b>' + c + '</b> lines were drawn in a notebook. <b>' + a + '</b> of them are curved and the rest are broken lines. <u>How many broken lines</u> are there?'); } }) },
            { type: 'table', title: L('Ayirmalar jadvali', 'Таблица разностей', 'Table of differences'), kind: 'diff', max: 80, min: 5 }
          ],
          quiz: [
            { q: L('Qismni qanday topamiz?', 'Как найти часть?', 'How do we find a part?'), o: [L('Butundan ma’lum qismni ayiramiz', 'Из целого вычитаем известную часть', 'Subtract the known part from the whole'), L('Qismlarni qo‘shamiz', 'Складываем части', 'Add the parts'), L('Butunga qism qo‘shamiz', 'К целому прибавляем часть', 'Add a part to the whole'), L('Hech narsa', 'Ничего', 'Nothing')], a: 0 },
            { q: L('24 ta egri + ? ta siniq = 69 ta chiziq', '24 кривые + ? ломаных = 69 линий', '24 curved + ? broken = 69 lines'), o: ['45', '93', '35', '55'], a: 0 },
            { q: L('62 ta konus + ? ta silindr = 89 ta jism', '62 конуса + ? цилиндров = 89 фигур', '62 cones + ? cylinders = 89 shapes'), o: ['27', '151', '37', '26'], a: 0 },
            { q: L('Butun 50, qism 20. Ikkinchi qism?', 'Целое 50, часть 20. Другая часть?', 'Whole 50, part 20. The other part?'), o: ['30', '70', '20', '25'], a: 0 }
          ] },

        { id: 't8', lessons: L('11-dars', 'Урок 11', 'Lesson 11'), title: L('Masalalar yechish (takrorlash)', 'Решение задач (повторение)', 'Solving problems (review)'),
          keys: [L('qism + qism = butun', 'часть + часть = целое', 'part + part = whole'), L('butun − qism = qism', 'целое − часть = часть', 'whole − part = part')],
          scene: [{ obj: 'ball', n: 4, color: 'pink' }, { obj: 'cube', n: 3, color: 'blue' }],
          explain: L('Endi o‘zingiz tanlang: masalada <b>butun</b> so‘ralganmi yoki <b>qism</b>? Butun so‘ralsa — qo‘shamiz, qism so‘ralsa — ayiramiz. Sxema doim yordam beradi!',
            'Теперь выбирайте сами: в задаче спрашивают <b>целое</b> или <b>часть</b>? Если целое — складываем, если часть — вычитаем. Схема всегда поможет!',
            'Now you decide: does the problem ask for the <b>whole</b> or a <b>part</b>? For the whole we add, for a part we subtract. The diagram always helps!'),
          rule: L('Savol <b>«jami»</b>, <b>«hammasi»</b> desa — ko‘pincha qo‘shish.<br>Savol <b>«qolgani»</b>, <b>«qolganlari»</b> desa — ko‘pincha ayirish.', 'Слова <b>«всего»</b>, <b>«вместе»</b> — чаще сложение.<br>Слова <b>«осталось»</b>, <b>«остальные»</b> — чаще вычитание.', 'Words like <b>“in total”</b>, <b>“altogether”</b> usually mean adding.<br>Words like <b>“left”</b>, <b>“the rest”</b> usually mean subtracting.'),
          acts: [
            { type: 'choose', title: L('Qaysi amal kerak?', 'Какое действие нужно?', 'Which operation?'), icon: '➕', make: function (R) {
              var c = R(30, 80), a = R(10, c - 5);
              return pick([
                choice(L('Pochtachi <b>' + c + '</b> ta xat olib chiqdi. <b>' + a + '</b> tasini tarqatdi. Nechta xat qoldi?', 'Почтальон взял письма — <b>' + c + '</b>. Разнёс — <b>' + a + '</b>. Сколько писем осталось?', 'A postman took <b>' + c + '</b> letters and delivered <b>' + a + '</b>. How many letters are left?'), [c + ' − ' + a, c + ' + ' + a, a + ' − ' + c], 0),
                choice(L('Bir qutida <b>' + a + '</b> ta, ikkinchisida <b>' + (c - a) + '</b> ta xat bor. Jami nechta xat?', 'В одном ящике писем — <b>' + a + '</b>, в другом — <b>' + (c - a) + '</b>. Сколько всего писем?', 'One box has <b>' + a + '</b> letters and another has <b>' + (c - a) + '</b>. How many letters in total?'), [a + ' + ' + (c - a), c + ' − ' + a, a + ' − ' + (c - a)], 0)
              ]);
            } },
            { type: 'table', title: L('Jadvalni to‘ldiring', 'Заполните таблицу', 'Fill in the table'), kind: 'diff', max: 70 },
            { type: 'chain', make: function (R) { var s = R(40, 60); return { start: s, ops: [['−', R(10, 20)], ['+', R(5, 15)], ['−', R(3, 9)], ['+', R(10, 20)]] }; } }
          ],
          quiz: [
            { q: L('«Qoldi» so‘zi ko‘pincha qaysi amalga ishora qiladi?', 'На какое действие чаще указывает слово «осталось»?', 'Which operation does the word “left” usually point to?'), o: [L('Ayirish', 'Вычитание', 'Subtraction'), L('Qo‘shish', 'Сложение', 'Addition'), L('Taqqoslash', 'Сравнение', 'Comparison'), L('Hech qaysi', 'Никакое', 'None')], a: 0 },
            { q: L('Kamayuvchi 70, ayriluvchi 20. Ayirma?', 'Уменьшаемое 70, вычитаемое 20. Разность?', 'Minuend 70, subtrahend 20. The difference?'), o: ['50', '90', '30', '40'], a: 0 },
            { q: L('Kamayuvchi 14, ayirma 7. Ayriluvchi?', 'Уменьшаемое 14, разность 7. Вычитаемое?', 'Minuend 14, difference 7. The subtrahend?'), o: ['7', '21', '6', '14'], a: 0 }
          ] }
      ] },

      // ================= 3-BO'LIM =================
      { id: 's3', title: L('Ko‘p, kam va taqqoslash', 'Больше, меньше и сравнение', 'More, fewer and comparing'), icon: '⚖️', color: 'orange', topics: [
        { id: 't9', lessons: L('14–17-darslar', 'Уроки 14–17', 'Lessons 14–17'), title: L('Sonni orttirish va kamaytirishga doir masalalar', 'Задачи на увеличение и уменьшение числа', 'Increasing and decreasing a number'),
          keys: [L('… ta ortiq (+)', 'на … больше (+)', '… more (+)'), L('… ta kam (−)', 'на … меньше (−)', '… fewer (−)')],
          scene: [{ obj: 'pencil', n: 4, color: 'pink' }, { obj: 'pencil', n: 6, color: 'cyan' }],
          explain: L('«<b>… ta ko‘p</b>» deyilsa — sonni o‘sha songa <b>orttiramiz</b> (qo‘shamiz). «<b>… ta kam</b>» deyilsa — sonni <b>kamaytiramiz</b> (ayiramiz). Sxemada ikkita kesma chizamiz: biri ikkinchisidan uzunroq yoki qisqaroq.',
            'Если сказано «<b>на … больше</b>» — число <b>увеличиваем</b> (прибавляем). Если «<b>на … меньше</b>» — число <b>уменьшаем</b> (вычитаем). На схеме рисуем два отрезка: один длиннее или короче другого.',
            'If it says “<b>… more</b>”, we <b>increase</b> the number (add). If it says “<b>… fewer</b>”, we <b>decrease</b> it (subtract). The diagram has two bars: one longer or shorter than the other.'),
          rule: L('<b>a dan d ta ko‘p → a + d</b><br><b>a dan d ta kam → a − d</b>', '<b>на d больше, чем a → a + d</b><br><b>на d меньше, чем a → a − d</b>', '<b>d more than a → a + d</b><br><b>d fewer than a → a − d</b>'),
          acts: [
            { type: 'problem', title: L('«… ta ko‘p» masalasi', 'Задача «на … больше»', '“… more” problem'), make: more({ a: [5, 30], d: [2, 15], who: [L('Aziza', 'Азиза', 'Aziza'), L('Umida', 'Умида', 'Umida')],
              text: function (a, d) { return L('Azizaning <b>' + a + '</b> ta rangli qalami bor. Umidaning qalamlari esa Azizanikidan <b>' + d + '</b> ta ko‘p. <u>Umidaning nechta</u> qalami bor?',
                'У Азизы цветных карандашей — <b>' + a + '</b>. У Умиды на <b>' + d + '</b> больше. <u>Сколько карандашей у Умиды</u>?',
                'Aziza has <b>' + a + '</b> coloured pencils. Umida has <b>' + d + '</b> more than Aziza. <u>How many pencils does Umida have</u>?'); } }) },
            { type: 'problem', title: L('«… ta kam» masalasi', 'Задача «на … меньше»', '“… fewer” problem'), make: less({ a: [10, 40], d: [2, 9], who: [L('Aziza', 'Азиза', 'Aziza'), L('Sardor', 'Сардор', 'Sardor')],
              text: function (a, d) { return L('Azizaning <b>' + a + '</b> ta qalami bor. Sardorning qalamlari Azizanikidan <b>' + d + '</b> ta kam. <u>Sardorning nechta</u> qalami bor?',
                'У Азизы карандашей — <b>' + a + '</b>. У Сардора на <b>' + d + '</b> меньше. <u>Сколько карандашей у Сардора</u>?',
                'Aziza has <b>' + a + '</b> pencils. Sardor has <b>' + d + '</b> fewer than Aziza. <u>How many pencils does Sardor have</u>?'); } }) },
            { type: 'problem', title: L('Tokchadagi darsliklar', 'Учебники на полках', 'Textbooks on the shelves'), make: more({ a: [7, 25], d: [3, 12], who: [L('Yuqori tokcha', 'Верхняя полка', 'Top shelf'), L('Pastki tokcha', 'Нижняя полка', 'Bottom shelf')],
              text: function (a, d) { return L('Shkafning yuqori tokchasida <b>' + a + '</b> ta darslik turibdi. Pastki tokchada <b>' + d + '</b> ta ko‘p. <u>Pastki tokchada nechta</u> darslik bor?',
                'На верхней полке шкафа учебников — <b>' + a + '</b>. На нижней — на <b>' + d + '</b> больше. <u>Сколько учебников на нижней полке</u>?',
                'The top shelf holds <b>' + a + '</b> textbooks. The bottom shelf holds <b>' + d + '</b> more. <u>How many textbooks are on the bottom shelf</u>?'); } }) },
            { type: 'count3d', title: L('3D: qalamlarni taqqoslang', '3D: сравните карандаши', '3D: compare the pencils'), make: function (R) { var a = R(2, 5), d = R(1, 3); return { groups: [{ obj: 'pencil', n: a, color: 'pink' }, { obj: 'pencil', n: a + d, color: 'cyan' }],
              story: L('Pushti qalamlar — <b>' + a + '</b> ta. Havorang qalamlar ulardan <b>' + d + '</b> ta ko‘p. Havorang qalamlar nechta?', 'Розовых карандашей — <b>' + a + '</b>. Голубых на <b>' + d + '</b> больше. Сколько голубых карандашей?', 'There are <b>' + a + '</b> pink pencils. There are <b>' + d + '</b> more light-blue pencils. How many light-blue pencils?'),
              expr: [a, '+', d, '=', a + d], ans: a + d, unit: PCS }; } }
          ],
          quiz: [
            { q: L('6 dan 4 ta ko‘p son?', 'Какое число на 4 больше, чем 6?', 'Which number is 4 more than 6?'), o: ['10', '2', '24', '64'], a: 0 },
            { q: L('9 dan 2 ta kam son?', 'Какое число на 2 меньше, чем 9?', 'Which number is 2 less than 9?'), o: ['7', '11', '18', '6'], a: 0 },
            { q: L('«… ta ko‘p» deyilsa qaysi amal?', 'Какое действие, если сказано «на … больше»?', 'Which operation for “… more”?'), o: [L('Qo‘shish', 'Сложение', 'Addition'), L('Ayirish', 'Вычитание', 'Subtraction'), L('Hech qaysi', 'Никакое', 'None'), L('Taqqoslash', 'Сравнение', 'Comparison')], a: 0 },
            { q: L('Yuqorida 7 ta kitob, pastda 4 ta ko‘p. Pastda?', 'Наверху 7 книг, внизу на 4 больше. Сколько внизу?', '7 books on top, 4 more below. How many below?'), o: ['11', '3', '74', '10'], a: 0 }
          ] },

        { id: 't10', lessons: L('18–21-darslar', 'Уроки 18–21', 'Lessons 18–21'), title: L('Taqqoslashga doir masalalar', 'Задачи на сравнение', 'Comparison problems'),
          keys: [L('nechta ko‘p?', 'на сколько больше?', 'how many more?'), L('nechta kam?', 'на сколько меньше?', 'how many fewer?'), L('farq', 'разница', 'difference')],
          scene: [{ obj: 'star', n: 5, color: 'yellow' }, { obj: 'star', n: 3, color: 'pink' }],
          explain: L('Ikki sonni <b>taqqoslash</b> — biri ikkinchisidan nechtaga ko‘p yoki kam ekanini bilish. Buning uchun <b>kattasidan kichigini ayiramiz</b>. Farq — ikki kesma uzunliklari orasidagi bo‘lak.',
            '<b>Сравнить</b> два числа — значит узнать, на сколько одно больше или меньше другого. Для этого <b>из большего вычитаем меньшее</b>. Разница — это кусочек между длинами двух отрезков.',
            'To <b>compare</b> two numbers is to find how many more or fewer one has than the other. We <b>subtract the smaller from the larger</b>. The difference is the gap between the two bars.'),
          rule: L('<b>Nechta ko‘p? Nechta kam? → katta − kichik</b><br>Masalan, 9 ta va 5 ta: 9 − 5 = 4 (4 ta ko‘p, 4 ta kam).', '<b>На сколько больше? На сколько меньше? → большее − меньшее</b><br>Например, 9 и 5: 9 − 5 = 4 (на 4 больше, на 4 меньше).', '<b>How many more? How many fewer? → larger − smaller</b><br>E.g. 9 and 5: 9 − 5 = 4 (4 more, 4 fewer).'),
          acts: [
            { type: 'problem', title: L('Kim ko‘p yig‘di?', 'Кто собрал больше?', 'Who collected more?'), make: diff({ a: [10, 50], b: [10, 50], who: [L('Dilshod', 'Дильшод', 'Dilshod'), L('Malika', 'Малика', 'Malika')],
              text: function (a, b) { var dw = a > b;
                return L('Dilshod <b>' + a + '</b> ta, Malika <b>' + b + '</b> ta yong‘oq yig‘di. ' + (dw ? 'Dilshod Malikadan' : 'Malika Dilshoddan') + ' <u>nechta ko‘p</u> yong‘oq yig‘di?',
                  'Дильшод собрал орехов — <b>' + a + '</b>, Малика — <b>' + b + '</b>. <u>На сколько больше</u> орехов собрал' + (dw ? ' Дильшод, чем Малика' : 'а Малика, чем Дильшод') + '?',
                  'Dilshod collected <b>' + a + '</b> nuts and Malika collected <b>' + b + '</b>. <u>How many more</u> nuts did ' + (dw ? 'Dilshod' : 'Malika') + ' collect?'); } }) },
            { type: 'count3d', title: L('3D: yulduzlarni taqqoslang', '3D: сравните звёзды', '3D: compare the stars'), make: function (R) { var a = R(4, 7), b = R(1, a - 1); return { groups: [{ obj: 'star', n: a, color: 'yellow' }, { obj: 'star', n: b, color: 'pink' }],
              story: L('Sariq yulduzlar pushti yulduzlardan <b>nechta ko‘p</b>?', 'На сколько жёлтых звёзд <b>больше</b>, чем розовых?', 'How many <b>more</b> yellow stars are there than pink stars?'), expr: [a, '−', b, '=', a - b], ans: a - b, unit: PCS }; } },
            { type: 'choose', title: L('Belgi qo‘ying', 'Поставьте знак', 'Choose the sign'), icon: '⚖️', make: function (R) {
              var a = R(10, 99), b; do { b = R(10, 99); } while (b === a);
              return choice(mk(function (l) { return '<span class="kd-big">' + a + ' ◻ ' + b + '</span> — ' + { uz: 'qaysi belgi to‘g‘ri?', ru: 'какой знак верный?', en: 'which sign is correct?' }[l]; }), ['&gt;', '&lt;', '='], a > b ? 0 : 1);
            } }
          ],
          quiz: [
            { q: L('9 ta va 5 ta. Nechta ko‘p?', '9 и 5. На сколько больше?', '9 and 5. How many more?'), o: ['4', '14', '5', '3'], a: 0 },
            { q: L('Taqqoslash uchun qaysi amal?', 'Какое действие нужно для сравнения?', 'Which operation do we use to compare?'), o: [L('Kattasidan kichigini ayiramiz', 'Из большего вычитаем меньшее', 'Subtract the smaller from the larger'), L('Qo‘shamiz', 'Складываем', 'Add'), L('Kichigidan kattasini ayiramiz', 'Из меньшего вычитаем большее', 'Subtract the larger from the smaller'), L('Sanaymiz', 'Считаем', 'Count')], a: 0 },
            { q: L('45 va 32 farqi?', 'Разница между 45 и 32?', 'The difference between 45 and 32?'), o: ['13', '77', '12', '23'], a: 0 },
            { q: '58 ◻ 85', o: ['<', '>', '='], a: 0 }
          ] }
      ] },

      // ================= 4-BO'LIM =================
      { id: 's4', title: L('Murakkab va qiziqarli masalalar', 'Составные и занимательные задачи', 'Multi-step and puzzle problems'), icon: '🧠', color: 'violet', topics: [
        { id: 't11', lessons: L('22-dars', 'Урок 22', 'Lesson 22'), title: L('Murakkab masalalar yechish', 'Решение составных задач', 'Solving multi-step problems'),
          keys: [L('ikki savol', 'два вопроса', 'two questions'), L('reja', 'план', 'plan'), L('ifoda', 'выражение', 'expression')],
          scene: [{ obj: 'robot', n: 2, color: 'violet' }, { obj: 'ball', n: 3, color: 'cyan' }],
          explain: L('Ba’zi masalalarni bir amal bilan yechib bo‘lmaydi. Avval <b>yordamchi savol</b>ga javob topamiz, keyin asosiy savolga. Bu — <b>murakkab masala</b>.',
            'Некоторые задачи нельзя решить одним действием. Сначала отвечаем на <b>вспомогательный вопрос</b>, потом — на главный. Это <b>составная задача</b>.',
            'Some problems cannot be solved with one operation. First we answer a <b>helper question</b>, then the main one. This is a <b>multi-step problem</b>.'),
          rule: L('1) Avval nima topiladi? → birinchi amal.<br>2) Keyin asosiy savol → ikkinchi amal.', '1) Что найдём сначала? → первое действие.<br>2) Потом главный вопрос → второе действие.', '1) What do we find first? → first operation.<br>2) Then the main question → second operation.'),
          acts: [
            { type: 'problem', title: L('Ikki qadamli masala', 'Задача в два действия', 'A two-step problem'), make: function (R) {
              var a = R(10, 30), d = R(3, 9), b = a + d;
              return { story: L('Birinchi sinf <b>' + a + '</b> ta daraxt ekdi. Ikkinchi sinf <b>' + d + '</b> ta ko‘p ekdi. Ikkala sinf <u>jami nechta</u> daraxt ekdi?',
                  'Первый класс посадил деревьев — <b>' + a + '</b>. Второй класс — на <b>' + d + '</b> больше. <u>Сколько всего</u> деревьев посадили оба класса?',
                  'Class 1 planted <b>' + a + '</b> trees. Class 2 planted <b>' + d + '</b> more. <u>How many trees</u> did both classes plant in total?'),
                cond: [[L('I sinf', 'I класс', 'Class 1'), mk(function (l) { return a + ' ' + pk(PCS, l); })], [L('II sinf', 'II класс', 'Class 2'), mk(function (l) { return '?, ' + (l === 'ru' ? 'на ' : '') + d + ' ' + pk(PCS, l) + ' ' + pk(MORE, l); })], [TOTAL, '?']],
                scheme: { kind: 'more', a: a, b: b, show: [a, String(b), '+' + d], labels: [L('I sinf', 'I класс', 'Class 1'), L('II sinf', 'II класс', 'Class 2')] },
                expr: [a, '+', b, '=', a + b], ans: a + b, unit: mk(function (l) { return { uz: 'ta (avval ', ru: 'шт. (сначала ', en: '(first ' }[l] + a + ' + ' + d + ' = ' + b + ')'; }) };
            } },
            { type: 'problem', title: L('Avval topib oling', 'Сначала найдите', 'Find this first'), make: function (R) {
              var a = R(20, 40), b = R(10, 25), c = R(5, a + b - 10);
              return { story: L('Do‘konda <b>' + a + '</b> ta qizil va <b>' + b + '</b> ta yashil olma bor edi. <b>' + c + '</b> ta olma sotildi. <u>Nechta olma qoldi</u>?',
                  'В магазине было яблок: красных — <b>' + a + '</b>, зелёных — <b>' + b + '</b>. Продали <b>' + c + '</b>. <u>Сколько яблок осталось</u>?',
                  'A shop had <b>' + a + '</b> red and <b>' + b + '</b> green apples. <b>' + c + '</b> apples were sold. <u>How many apples are left</u>?'),
                cond: [[L('Qizil', 'Красные', 'Red'), String(a)], [L('Yashil', 'Зелёные', 'Green'), String(b)], [L('Sotildi', 'Продали', 'Sold'), String(c)], [L('Qoldi', 'Осталось', 'Left'), '?']],
                expr: [a, '+', b, '−', c, '=', a + b - c], ans: a + b - c, unit: PCS };
            } }
          ],
          quiz: [
            { q: L('Murakkab masala nechta amal bilan yechiladi?', 'Сколькими действиями решается составная задача?', 'How many operations solve a multi-step problem?'), o: [L('Ikki yoki undan ko‘p', 'Двумя или больше', 'Two or more'), L('Bitta', 'Одним', 'One'), L('Amalsiz', 'Без действий', 'None'), L('Faqat qo‘shish', 'Только сложением', 'Only addition')], a: 0 },
            { q: L('Birinchida 10 ta, ikkinchida 5 ta ko‘p. Ikkalasi jami?', 'В первом 10, во втором на 5 больше. Сколько всего?', 'The first has 10, the second 5 more. How many altogether?'), o: ['25', '15', '20', '5'], a: 0 },
            { q: '20 + 15 − 10 = ?', o: ['25', '45', '5', '35'], a: 0 }
          ] },

        { id: 't12', lessons: L('23-dars', 'Урок 23', 'Lesson 23'), title: L('Shartni yetishmayotgan ma’lumotlar bilan to‘ldirish', 'Дополнение условия недостающими данными', 'Completing a problem with missing data'),
          keys: [L('yetishmayotgan son', 'недостающее число', 'missing number'), L('shartni to‘ldirish', 'дополнить условие', 'complete the condition')],
          scene: [{ obj: 'cube', n: 4, color: 'green' }],
          explain: L('Ba’zan masalada <b>son yetishmaydi</b> va uni yechib bo‘lmaydi. Unda shartga kerakli sonni qo‘shib, masalani «to‘ldiramiz». Avval o‘ylang: savolga javob berish uchun nimani bilish kerak?',
            'Иногда в задаче <b>не хватает числа</b>, и её нельзя решить. Тогда добавляем нужное число в условие — «дополняем» задачу. Сначала подумайте: что нужно знать, чтобы ответить на вопрос?',
            'Sometimes a problem is <b>missing a number</b> and cannot be solved. Then we add the needed number to the condition — we “complete” the problem. First think: what do we need to know to answer?'),
          rule: L('Javob berish uchun <b>barcha kerakli sonlar</b> shartda bo‘lishi shart.', 'Чтобы ответить, в условии должны быть <b>все нужные числа</b>.', 'To answer, the condition must contain <b>all the numbers we need</b>.'),
          acts: [
            { type: 'choose', title: L('Nima yetishmayapti?', 'Чего не хватает?', 'What is missing?'), icon: '🔍', make: function (R) {
              var a = R(5, 20);
              return pick([
                choice(L('«Savatda <b>' + a + '</b> ta olma bor edi. Bir nechtasini yeyishdi. Nechta olma qoldi?» Masalani yechish uchun nima yetishmayapti?', '«В корзине было яблок — <b>' + a + '</b>. Несколько съели. Сколько яблок осталось?» Чего не хватает для решения?', '“A basket had <b>' + a + '</b> apples. Some were eaten. How many are left?” What is missing?'),
                  [L('Nechta olma yeyilgani', 'Сколько яблок съели', 'How many apples were eaten'), L('Savatdagi olmalar soni', 'Сколько яблок было в корзине', 'How many apples the basket had'), L('Savol', 'Вопрос', 'The question')], 0),
                choice(L('«Lolada <b>' + a + '</b> ta rangli qalam bor. Lolada va Hasanda jami nechta qalam bor?» Nima yetishmayapti?', '«У Лолы цветных карандашей — <b>' + a + '</b>. Сколько всего карандашей у Лолы и Хасана?» Чего не хватает?', '“Lola has <b>' + a + '</b> coloured pencils. How many pencils do Lola and Hasan have together?” What is missing?'),
                  [L('Hasanning qalamlari soni', 'Сколько карандашей у Хасана', 'How many pencils Hasan has'), L('Lolaning qalamlari soni', 'Сколько карандашей у Лолы', 'How many pencils Lola has'), L('Savol', 'Вопрос', 'The question')], 0)
              ]);
            } },
            { type: 'problem', title: L('Endi to‘ldirilgan masalani yeching', 'Теперь решите дополненную задачу', 'Now solve the completed problem'), make: part({ c: [15, 40], a: [3, 12], emoji: '🍎', labels: [L('yeyildi', 'съели', 'eaten'), L('qoldi', 'осталось', 'left')], cond: [L('Yeyildi', 'Съели', 'Eaten'), L('Qoldi', 'Осталось', 'Left')],
              text: function (c, a) { return L('Savatda <b>' + c + '</b> ta olma bor edi. Ulardan <b>' + a + '</b> tasini yeyishdi. <u>Nechta olma qoldi</u>?', 'В корзине было яблок — <b>' + c + '</b>. Из них съели <b>' + a + '</b>. <u>Сколько яблок осталось</u>?', 'A basket had <b>' + c + '</b> apples. <b>' + a + '</b> were eaten. <u>How many apples are left</u>?'); } }) }
          ],
          quiz: [
            { q: L('«Qutida 10 ta shar bor edi, bir nechtasi yorildi. Nechta qoldi?» Nima yetishmaydi?', '«В коробке было 10 шаров, несколько лопнули. Сколько осталось?» Чего не хватает?', '“A box had 10 balloons, some popped. How many are left?” What is missing?'), o: [L('Nechta shar yorilgani', 'Сколько шаров лопнуло', 'How many balloons popped'), L('Savol', 'Вопрос', 'The question'), L('Qutidagi sharlar soni', 'Сколько шаров было', 'How many balloons there were'), L('Hech narsa', 'Ничего', 'Nothing')], a: 0 },
            { q: L('Masalani yechish uchun nima kerak?', 'Что нужно для решения задачи?', 'What do we need to solve a problem?'), o: [L('Barcha kerakli sonlar va savol', 'Все нужные числа и вопрос', 'All the needed numbers and a question'), L('Faqat savol', 'Только вопрос', 'Only a question'), L('Faqat rasm', 'Только рисунок', 'Only a picture'), L('Faqat javob', 'Только ответ', 'Only the answer')], a: 0 }
          ] },

        { id: 't13', lessons: L('24-dars', 'Урок 24', 'Lesson 24'), title: L('Nostandart masalalar', 'Нестандартные задачи', 'Puzzle problems'),
          keys: [L('mantiq', 'логика', 'logic'), L('qonuniyat', 'закономерность', 'pattern'), L('zukkolik', 'смекалка', 'quick wits')],
          scene: [{ obj: 'pyramid', n: 3, color: 'orange' }, { obj: 'ball', n: 2, color: 'violet' }],
          explain: L('Nostandart masalalar — <b>zukkolik</b> masalalari. Ularda faqat hisoblash emas, <b>o‘ylash</b> ham kerak: qonuniyatni topish, mantiqiy fikrlash, rasmga diqqat bilan qarash.',
            'Нестандартные задачи — задачи на <b>смекалку</b>. В них нужно не только считать, но и <b>думать</b>: находить закономерность, рассуждать логически, внимательно смотреть на рисунок.',
            'Puzzle problems test your <b>wits</b>. You need to <b>think</b>, not just calculate: spot patterns, reason logically and look carefully.'),
          rule: L('Shoshilmang! Rasmni chizing, sanab ko‘ring, taxmin qiling va tekshiring.', 'Не спешите! Нарисуйте, посчитайте, предположите и проверьте.', 'Take your time! Draw it, count, guess and check.'),
          acts: [
            { type: 'choose', title: L('Qonuniyatni toping', 'Найдите закономерность', 'Find the pattern'), icon: '🔮', make: function (R) {
              var s = R(2, 20), d = R(2, 6), seq = [s, s + d, s + 2 * d, s + 3 * d], nx = s + 4 * d;
              return choice(mk(function (l) { return { uz: 'Keyingi son qaysi?', ru: 'Какое число следующее?', en: 'Which number comes next?' }[l] + ' <span class="kd-big">' + seq.join(', ') + ', ?</span>'; }), [String(nx), String(nx + 1), String(nx - d - 1)], 0);
            } },
            { type: 'choose', title: L('Mantiqiy masala', 'Логическая задача', 'Logic puzzle'), icon: '🧠', make: function () {
              return pick([
                choice(L('Ali Validan baland, Vali Solidan baland. Kim eng past?', 'Али выше Вали, Вали выше Соли. Кто самый низкий?', 'Ali is taller than Vali, and Vali is taller than Soli. Who is the shortest?'), [L('Soli', 'Соли', 'Soli'), L('Ali', 'Али', 'Ali'), L('Vali', 'Вали', 'Vali')], 0),
                choice(L('Ikkita ota va ikkita o‘g‘il 3 ta olmani teng bo‘lishdi — har biriga bittadan tegdi. Bu qanday bo‘lishi mumkin?', 'Два отца и два сына разделили 3 яблока поровну — каждому досталось по одному. Как так?', 'Two fathers and two sons shared 3 apples equally — each got one. How is that possible?'),
                  [L('Ular — bobo, ota va o‘g‘il', 'Это дедушка, отец и сын', 'They are a grandfather, a father and a son'), L('Bu mumkin emas', 'Так не бывает', 'It is impossible'), L('Bitta olma ortib qoldi', 'Одно яблоко осталось', 'One apple was left over')], 0),
                choice(L('Uchta mushuk 3 ta sichqonni 3 daqiqada tutadi. 1 ta mushuk 1 ta sichqonni necha daqiqada tutadi?', 'Три кошки ловят 3 мышки за 3 минуты. За сколько минут 1 кошка поймает 1 мышку?', 'Three cats catch 3 mice in 3 minutes. How long does 1 cat take to catch 1 mouse?'),
                  [L('3 daqiqada', 'За 3 минуты', 'In 3 minutes'), L('1 daqiqada', 'За 1 минуту', 'In 1 minute'), L('9 daqiqada', 'За 9 минут', 'In 9 minutes')], 0)
              ]);
            } },
            { type: 'magic', title: L('Sehrli kvadrat (qiyin)', 'Магический квадрат (сложный)', 'Magic square (hard)'), given: 3 }
          ],
          quiz: [
            { q: '2, 4, 6, 8, ?', o: ['10', '9', '12', '16'], a: 0 },
            { q: '5, 10, 15, 20, ?', o: ['25', '21', '30', '35'], a: 0 },
            { q: L('Ali Validan baland, Vali Solidan baland. Eng balandi kim?', 'Али выше Вали, Вали выше Соли. Кто самый высокий?', 'Ali is taller than Vali, Vali is taller than Soli. Who is the tallest?'), o: [L('Ali', 'Али', 'Ali'), L('Vali', 'Вали', 'Vali'), L('Soli', 'Соли', 'Soli'), L('Bilib bo‘lmaydi', 'Нельзя узнать', 'Can’t tell')], a: 0 }
          ] },

        { id: 't14', lessons: L('25–26-darslar', 'Уроки 25–26', 'Lessons 25–26'), title: L('Ikki amalli va murakkab masalalar', 'Задачи в два действия', 'Two-operation problems'),
          keys: [L('ikki amal', 'два действия', 'two operations'), L('amallar tartibi', 'порядок действий', 'order of operations')],
          scene: [{ obj: 'apple', n: 3, color: 'yellow' }, { obj: 'bucket', n: 1, color: 'orange' }],
          explain: L('Ikki amalli masalada ketma-ket ikki ish bajariladi: masalan, avval nimadir qo‘shiladi, keyin nimadir olinadi. Ifodani bir qatorda yozish mumkin: <b>a + b − c</b>. Qavssiz ifodada amallar <b>chapdan o‘ngga</b> bajariladi.',
            'В задаче в два действия выполняются два шага подряд: например, сначала что-то добавили, потом что-то забрали. Выражение можно записать в одну строку: <b>a + b − c</b>. Без скобок действия выполняются <b>слева направо</b>.',
            'A two-operation problem has two steps in a row: for example, something is added and then something is taken away. We can write it in one line: <b>a + b − c</b>. Without brackets we work <b>from left to right</b>.'),
          rule: L('<b>a + b − c</b>: avval a + b, keyin natijadan c ni ayiramiz.', '<b>a + b − c</b>: сначала a + b, потом из результата вычитаем c.', '<b>a + b − c</b>: first a + b, then subtract c from the result.'),
          acts: [
            { type: 'problem', title: L('Vinni-Puxning asali', 'Мёд Винни-Пуха', 'Winnie-the-Pooh’s honey'), make: function (R) {
              var eat = R(4, 9), d = R(1, eat - 1), left = eat - d, tot = eat + left;
              return { story: L('Bochkada asal bor edi. Vinni-Pux <b>' + eat + '</b> kg asal yedi. Boyqushga Vinni-Pux yeganidan <b>' + d + '</b> kg kam asal qoldi. Bochkada <u>qancha asal bo‘lgan</u>?',
                  'В бочке был мёд. Винни-Пух съел <b>' + eat + '</b> кг. Сове осталось на <b>' + d + '</b> кг меньше, чем съел Винни-Пух. <u>Сколько мёда было</u> в бочке?',
                  'There was honey in a barrel. Winnie-the-Pooh ate <b>' + eat + '</b> kg. <b>' + d + '</b> kg less than he ate was left for Owl. <u>How much honey was in the barrel</u>?'),
                cond: [[L('Yedi', 'Съел', 'Ate'), mk(function (l) { return eat + ' ' + pk(KG, l); })], [L('Qoldi', 'Осталось', 'Left'), mk(function (l) { return '?, ' + (l === 'ru' ? 'на ' : '') + d + ' ' + pk(KG, l) + ' ' + pk(LESS, l); })], [L('Bor edi', 'Было', 'At first'), '?']],
                expr: [eat, '+', eat, '−', d, '=', tot], ans: tot, unit: KG };
            } },
            { type: 'drill', title: L('Ikki amalli misollar', 'Примеры в два действия', 'Two-step sums'), n: 6, make: function (R) { var a = R(10, 40), b = R(5, 30), c = R(1, a + b - 1); return R(0, 1) ? { q: a + ' + ' + b + ' − ' + c, a: a + b - c } : { q: (a + b) + ' − ' + b + ' + ' + c, a: a + c }; } }
          ],
          quiz: [
            { q: '30 + 20 − 10 = ?', o: ['40', '60', '20', '0'], a: 0 },
            { q: L('Qavssiz ifodada amallar qanday bajariladi?', 'Как выполняются действия в выражении без скобок?', 'In what order do we work without brackets?'), o: [L('Chapdan o‘ngga', 'Слева направо', 'Left to right'), L('O‘ngdan chapga', 'Справа налево', 'Right to left'), L('Ixtiyoriy', 'В любом порядке', 'Any order'), L('Avval ayirish', 'Сначала вычитание', 'Subtraction first')], a: 0 },
            { q: '50 − 20 + 5 = ?', o: ['35', '25', '75', '45'], a: 0 }
          ] }
      ] },

      // ================= 5-BO'LIM =================
      { id: 's5', title: L('Kattaliklar: uzunlik, massa, hajm', 'Величины: длина, масса, объём', 'Measures: length, mass, volume'), icon: '📏', color: 'cyan', topics: [
        { id: 't15', lessons: L('30–31-darslar', 'Уроки 30–31', 'Lessons 30–31'), title: L('Uzunlik. Santimetr. Kesmalarni o‘lchash', 'Длина. Сантиметр. Измерение отрезков', 'Length. Centimetre. Measuring segments'),
          keys: [L('uzunlik', 'длина', 'length'), L('santimetr (cm)', 'сантиметр (см)', 'centimetre (cm)'), L('chizg‘ich', 'линейка', 'ruler'), L('kesma', 'отрезок', 'segment')],
          scene: [{ obj: 'pencil', n: 3, color: 'orange' }, { obj: 'pencil', n: 2, color: 'green' }],
          explain: L('Narsalarning uzunligini <b>chizg‘ich</b> bilan o‘lchaymiz. Uzunlik birligi — <b>santimetr</b> (qisqacha <b>cm</b>). O‘lchaganda narsaning boshi chizg‘ichdagi <b>0</b> ga to‘g‘ri kelishi kerak!',
            'Длину предметов измеряют <b>линейкой</b>. Единица длины — <b>сантиметр</b> (кратко <b>см</b>). При измерении начало предмета должно совпадать с <b>0</b> на линейке!',
            'We measure length with a <b>ruler</b>. The unit of length is the <b>centimetre</b> (<b>cm</b> for short). When measuring, the start of the object must be at <b>0</b> on the ruler!'),
          rule: L('Chizg‘ichdagi ikki katta chiziq orasi — <b>1 cm</b>.<br>Kesma boshi 0 da bo‘lmasa: <b>oxiri − boshi</b>.', 'Между двумя большими делениями линейки — <b>1 см</b>.<br>Если отрезок начинается не с 0: <b>конец − начало</b>.', 'The gap between two big marks on a ruler is <b>1 cm</b>.<br>If a segment doesn’t start at 0: <b>end − start</b>.'),
          acts: [
            { type: 'ruler', title: L('Qalamni o‘lchang', 'Измерьте карандаш', 'Measure the pencil'), mode: 'pencil', make: function (R) { var l = R(4, 14); return { len: l, start: 0, max: 15, story: L('Qalamning uzunligi necha santimetr?', 'Какова длина карандаша в сантиметрах?', 'How long is the pencil in centimetres?') }; } },
            { type: 'ruler', title: L('Kesmani o‘lchang (qiyinroq!)', 'Измерьте отрезок (сложнее!)', 'Measure the segment (harder!)'), mode: 'segment', make: function (R) { var s = R(1, 5), l = R(3, 9);
              return { len: l, start: s, max: 15, story: L('AB kesma ' + s + ' dan boshlanyapti. Uning uzunligi necha cm?', 'Отрезок AB начинается с ' + s + '. Какова его длина в см?', 'Segment AB starts at ' + s + '. How long is it in cm?') }; } },
            { type: 'drill', title: L('Santimetrlar bilan hisoblang', 'Считаем сантиметры', 'Working with centimetres'), make: unitDrill(CM) }
          ],
          quiz: [
            { q: L('Uzunlik nima bilan o‘lchanadi?', 'Чем измеряют длину?', 'What do we measure length with?'), o: [L('Chizg‘ich bilan', 'Линейкой', 'A ruler'), L('Tarozi bilan', 'Весами', 'Scales'), L('Soat bilan', 'Часами', 'A clock'), L('Banka bilan', 'Банкой', 'A jar')], a: 0 },
            { q: L('Santimetrning qisqa yozilishi?', 'Как кратко записывают сантиметр?', 'How do we write centimetre for short?'), o: [L('cm', 'см', 'cm'), L('kg', 'кг', 'kg'), L('l', 'л', 'L'), L('dm', 'дм', 'dm')], a: 0 },
            { q: L('Kesma 2 dan 9 gacha. Uzunligi?', 'Отрезок от 2 до 9. Его длина?', 'A segment goes from 2 to 9. Its length?'), o: [L('7 cm', '7 см', '7 cm'), L('9 cm', '9 см', '9 cm'), L('11 cm', '11 см', '11 cm'), L('2 cm', '2 см', '2 cm')], a: 0 },
            { q: L('15 cm + 8 cm = ?', '15 см + 8 см = ?', '15 cm + 8 cm = ?'), o: [L('23 cm', '23 см', '23 cm'), L('7 cm', '7 см', '7 cm'), L('22 cm', '22 см', '22 cm'), L('158 cm', '158 см', '158 cm')], a: 0 }
          ] },

        { id: 't16', lessons: L('32–34-darslar', 'Уроки 32–34', 'Lessons 32–34'), title: L('Santimetr va detsimetr', 'Сантиметр и дециметр', 'Centimetre and decimetre'),
          keys: [L('detsimetr (dm)', 'дециметр (дм)', 'decimetre (dm)'), L('1 dm = 10 cm', '1 дм = 10 см', '1 dm = 10 cm')],
          scene: [{ obj: 'cube', n: 5, color: 'cyan' }],
          explain: L('10 ta santimetrni birlashtirsak, yangi katta birlik hosil bo‘ladi — <b>detsimetr</b> (<b>dm</b>). Kaftingiz eni taxminan 1 dm! 17 cm = 1 dm 7 cm, chunki 17 da 1 ta o‘nlik va 7 ta birlik bor.',
            'Если сложить 10 сантиметров, получится новая, большая единица — <b>дециметр</b> (<b>дм</b>). Ширина вашей ладони — примерно 1 дм! 17 см = 1 дм 7 см, потому что в 17 один десяток и 7 единиц.',
            'Put 10 centimetres together and you get a bigger unit — the <b>decimetre</b> (<b>dm</b>). Your palm is about 1 dm wide! 17 cm = 1 dm 7 cm, because 17 has 1 ten and 7 ones.'),
          rule: L('<b>1 dm = 10 cm</b><br>2 dm = 20 cm · 3 dm 5 cm = 35 cm', '<b>1 дм = 10 см</b><br>2 дм = 20 см · 3 дм 5 см = 35 см', '<b>1 dm = 10 cm</b><br>2 dm = 20 cm · 3 dm 5 cm = 35 cm'),
          acts: [
            { type: 'ruler', title: L('Detsimetr va santimetrga ajrating', 'Разложите на дм и см', 'Split into dm and cm'), mode: 'dmcm', make: function (R) { var l = R(11, 29);
              return { len: l, start: 0, max: 30, story: L('Lenta uzunligi <b>' + l + ' cm</b>. Uni detsimetr va santimetrda yozing.', 'Длина ленты <b>' + l + ' см</b>. Запишите её в дециметрах и сантиметрах.', 'A ribbon is <b>' + l + ' cm</b> long. Write it in decimetres and centimetres.') }; } },
            { type: 'drill', title: L('Aylantiring', 'Переведите', 'Convert'), make: function (R) { var dm = R(1, 9), cm = R(0, 9);
              return R(0, 1) ? { q: L(dm + ' dm ' + cm + ' cm (cm da)', dm + ' дм ' + cm + ' см (в см)', dm + ' dm ' + cm + ' cm (in cm)'), a: dm * 10 + cm, unit: CM } : { q: L(dm + ' dm (cm da)', dm + ' дм (в см)', dm + ' dm (in cm)'), a: dm * 10, unit: CM }; } },
            { type: 'choose', title: L('Taqqoslang', 'Сравните', 'Compare'), icon: '📐', make: function (R) {
              var dm = R(1, 6), cm = R(dm * 10 - 8, dm * 10 + 8); if (cm === dm * 10) cm += 3;
              return choice(L('<span class="kd-big">' + dm + ' dm ◻ ' + cm + ' cm</span>', '<span class="kd-big">' + dm + ' дм ◻ ' + cm + ' см</span>', '<span class="kd-big">' + dm + ' dm ◻ ' + cm + ' cm</span>'), ['&gt;', '&lt;', '='], dm * 10 > cm ? 0 : 1);
            } }
          ],
          quiz: [
            { q: L('1 dm = ?', '1 дм = ?', '1 dm = ?'), o: [L('10 cm', '10 см', '10 cm'), L('100 cm', '100 см', '100 cm'), L('1 cm', '1 см', '1 cm'), L('5 cm', '5 см', '5 cm')], a: 0 },
            { q: L('4 dm = ?', '4 дм = ?', '4 dm = ?'), o: [L('40 cm', '40 см', '40 cm'), L('4 cm', '4 см', '4 cm'), L('14 cm', '14 см', '14 cm'), L('400 cm', '400 см', '400 cm')], a: 0 },
            { q: L('35 cm = ?', '35 см = ?', '35 cm = ?'), o: [L('3 dm 5 cm', '3 дм 5 см', '3 dm 5 cm'), L('5 dm 3 cm', '5 дм 3 см', '5 dm 3 cm'), L('35 dm', '35 дм', '35 dm'), L('3 dm', '3 дм', '3 dm')], a: 0 },
            { q: L('6 dm va 58 cm. Qaysi uzun?', '6 дм и 58 см. Что длиннее?', '6 dm or 58 cm. Which is longer?'), o: [L('6 dm', '6 дм', '6 dm'), L('58 cm', '58 см', '58 cm'), L('Teng', 'Равны', 'Equal')], a: 0 }
          ] },

        { id: 't17', lessons: L('35–36-darslar', 'Уроки 35–36', 'Lessons 35–36'), title: L('Massa va massa birliklari', 'Масса и единицы массы', 'Mass and units of mass'),
          keys: [L('massa', 'масса', 'mass'), L('kilogramm (kg)', 'килограмм (кг)', 'kilogram (kg)'), L('tarozi', 'весы', 'scales')],
          scene: [{ obj: 'weight', n: 3 }, { obj: 'apple', n: 3, color: 'red' }],
          explain: L('Narsaning qanchalik <b>og‘ir</b>ligini <b>massa</b> deymiz. Massani <b>tarozi</b>da tortamiz. Massa birligi — <b>kilogramm</b> (<b>kg</b>). Pallali tarozi <b>muvozanat</b>ga kelsa, ikki palladagi massalar teng bo‘ladi.',
            'То, насколько предмет <b>тяжёлый</b>, называют <b>массой</b>. Массу измеряют на <b>весах</b>. Единица массы — <b>килограмм</b> (<b>кг</b>). Если чашечные весы в <b>равновесии</b>, массы на обеих чашах равны.',
            'How <b>heavy</b> something is is called its <b>mass</b>. We measure mass on <b>scales</b>. The unit of mass is the <b>kilogram</b> (<b>kg</b>). When a balance is <b>level</b>, the masses on both pans are equal.'),
          rule: L('Tarozi muvozanatda → <b>chap = o‘ng</b>.<br>Masalan: tarvuz = 2 kg + 5 kg = <b>7 kg</b>.', 'Весы в равновесии → <b>слева = справа</b>.<br>Например: арбуз = 2 кг + 5 кг = <b>7 кг</b>.', 'Balance is level → <b>left = right</b>.<br>E.g. watermelon = 2 kg + 5 kg = <b>7 kg</b>.'),
          acts: [
            { type: 'scale', title: L('Tarvuzni torting', 'Взвесьте арбуз', 'Weigh the watermelon'), make: function (R) { var m = R(3, 15); return { mass: m, obj: '🍉', story: L('Chap pallada tarvuz. O‘ng pallaga toshlar qo‘yib, tarozini muvozanatga keltiring. <b>Tarvuz necha kg?</b>', 'На левой чаше арбуз. Кладите гири на правую чашу, чтобы уравновесить весы. <b>Сколько кг весит арбуз?</b>', 'A watermelon is on the left pan. Put weights on the right pan to balance the scales. <b>How many kg is the watermelon?</b>') }; } },
            { type: 'scale', title: L('Qovunni torting', 'Взвесьте дыню', 'Weigh the melon'), make: function (R) { var m = R(2, 9); return { mass: m, obj: '🍈', story: L('Qovunning massasini toping.', 'Найдите массу дыни.', 'Find the mass of the melon.') }; } },
            { type: 'problem', make: whole({ a: [5, 30], b: [5, 30], u: KG, labels: [L('olma', 'яблоки', 'apples'), L('nok', 'груши', 'pears')], cond: [L('Olma', 'Яблоки', 'Apples'), L('Nok', 'Груши', 'Pears')],
              text: function (a, b) { return L('Do‘konga <b>' + a + '</b> kg olma va <b>' + b + '</b> kg nok keltirildi. <u>Jami necha kg</u> meva keltirildi?', 'В магазин привезли <b>' + a + '</b> кг яблок и <b>' + b + '</b> кг груш. <u>Сколько всего кг</u> фруктов привезли?', 'A shop received <b>' + a + '</b> kg of apples and <b>' + b + '</b> kg of pears. <u>How many kg</u> of fruit is that in total?'); } }) }
          ],
          quiz: [
            { q: L('Massa nima bilan o‘lchanadi?', 'Чем измеряют массу?', 'What do we measure mass with?'), o: [L('Tarozi bilan', 'Весами', 'Scales'), L('Chizg‘ich bilan', 'Линейкой', 'A ruler'), L('Soat bilan', 'Часами', 'A clock'), L('Termometr bilan', 'Термометром', 'A thermometer')], a: 0 },
            { q: L('Massa birligi?', 'Единица массы?', 'A unit of mass?'), o: [L('kg', 'кг', 'kg'), L('cm', 'см', 'cm'), L('l', 'л', 'L'), L('dm', 'дм', 'dm')], a: 0 },
            { q: L('Tarozida: qovun = 2 kg + 1 kg. Qovun?', 'На весах: дыня = 2 кг + 1 кг. Сколько весит дыня?', 'On the scales: melon = 2 kg + 1 kg. The melon?'), o: [L('3 kg', '3 кг', '3 kg'), L('21 kg', '21 кг', '21 kg'), L('1 kg', '1 кг', '1 kg'), L('2 kg', '2 кг', '2 kg')], a: 0 },
            { q: L('12 kg + 8 kg = ?', '12 кг + 8 кг = ?', '12 kg + 8 kg = ?'), o: [L('20 kg', '20 кг', '20 kg'), L('4 kg', '4 кг', '4 kg'), L('18 kg', '18 кг', '18 kg'), L('128 kg', '128 кг', '128 kg')], a: 0 }
          ] },

        { id: 't18', lessons: L('37–38-darslar', 'Уроки 37–38', 'Lessons 37–38'), title: L('Hajm va hajm birliklari', 'Объём и единицы объёма', 'Volume and units of volume'),
          keys: [L('hajm', 'объём', 'volume'), L('litr (l)', 'литр (л)', 'litre (L)'), L('idish', 'сосуд', 'container')],
          scene: [{ obj: 'bucket', n: 3, color: 'blue' }],
          explain: L('Idishga qancha suv sig‘ishini <b>hajm</b> (sig‘im) deymiz. Hajm birligi — <b>litr</b> (<b>l</b>). Chelakka 1 litrli bankada suv quyib sanasak, chelak hajmini bilib olamiz.',
            'Сколько воды помещается в сосуд, называют <b>объёмом</b> (вместимостью). Единица объёма — <b>литр</b> (<b>л</b>). Если наливать воду в ведро литровой банкой и считать, узнаем объём ведра.',
            'How much water a container holds is its <b>volume</b> (capacity). The unit of volume is the <b>litre</b> (<b>L</b>). Pour water into a bucket with a 1-litre jar and count — that is the bucket’s volume.'),
          rule: L('Chelakka 1 l li bankadan 8 marta quyildi → <b>chelak hajmi 8 l</b>.', 'В ведро налили 8 литровых банок → <b>объём ведра 8 л</b>.', '8 one-litre jars filled the bucket → <b>the bucket holds 8 L</b>.'),
          acts: [
            { type: 'jugs', title: L('Chelakni to‘ldiring', 'Наполните ведро', 'Fill the bucket'), make: function (R) { var c = R(3, 10); return { cap: c, story: L('Bankani bosib, chelakni to‘ldiring. <b>Chelakka necha litr</b> suv sig‘adi?', 'Нажимайте на банку и наполните ведро. <b>Сколько литров</b> воды вмещает ведро?', 'Tap the jar to fill the bucket. <b>How many litres</b> does the bucket hold?') }; } },
            { type: 'problem', make: part({ c: [10, 40], a: [2, 15], u: LT, labels: [L('ishlatildi', 'израсходовали', 'used'), L('qoldi', 'осталось', 'left')], cond: [L('Ishlatildi', 'Израсходовали', 'Used'), L('Qoldi', 'Осталось', 'Left')],
              text: function (c, a) { return L('Bochkada <b>' + c + '</b> l suv bor edi. Gullarni sug‘orishga <b>' + a + '</b> l ishlatildi. Bochkada <u>necha litr suv qoldi</u>?', 'В бочке было <b>' + c + '</b> л воды. На полив цветов израсходовали <b>' + a + '</b> л. <u>Сколько литров воды осталось</u>?', 'A barrel had <b>' + c + '</b> L of water. <b>' + a + '</b> L were used to water the flowers. <u>How many litres are left</u>?'); } }) },
            { type: 'drill', title: L('Litrlar bilan hisoblang', 'Считаем литры', 'Working with litres'), make: unitDrill(LT) }
          ],
          quiz: [
            { q: L('Hajm birligi?', 'Единица объёма?', 'A unit of volume?'), o: [L('litr (l)', 'литр (л)', 'litre (L)'), L('kilogramm', 'килограмм', 'kilogram'), L('santimetr', 'сантиметр', 'centimetre'), L('detsimetr', 'дециметр', 'decimetre')], a: 0 },
            { q: L('Chelakka 1 l li banka bilan 6 marta quyildi. Hajmi?', 'В ведро налили 6 литровых банок. Его объём?', '6 one-litre jars filled a bucket. Its volume?'), o: [L('6 l', '6 л', '6 L'), L('1 l', '1 л', '1 L'), L('7 l', '7 л', '7 L'), L('16 l', '16 л', '16 L')], a: 0 },
            { q: L('30 l + 12 l = ?', '30 л + 12 л = ?', '30 L + 12 L = ?'), o: [L('42 l', '42 л', '42 L'), L('18 l', '18 л', '18 L'), L('32 l', '32 л', '32 L'), L('312 l', '312 л', '312 L')], a: 0 }
          ] },

        { id: 't19', lessons: L('39–42-darslar', 'Уроки 39–42', 'Lessons 39–42'), title: L('Kattaliklar va ularning xossalari', 'Величины и их свойства', 'Measures and their properties'),
          keys: [L('uzunlik (cm, dm)', 'длина (см, дм)', 'length (cm, dm)'), L('massa (kg)', 'масса (кг)', 'mass (kg)'), L('hajm (l)', 'объём (л)', 'volume (L)')],
          scene: [{ obj: 'pencil', n: 2, color: 'orange' }, { obj: 'weight', n: 1 }, { obj: 'bucket', n: 1, color: 'cyan' }],
          explain: L('Uzunlik, massa va hajm — <b>kattaliklar</b>. Ularni qo‘shish va ayirish mumkin, lekin <b>faqat bir xil birlikdagilarni</b>: santimetrni santimetrga, kilogrammni kilogrammga!',
            'Длина, масса и объём — это <b>величины</b>. Их можно складывать и вычитать, но <b>только в одинаковых единицах</b>: сантиметры с сантиметрами, килограммы с килограммами!',
            'Length, mass and volume are <b>measures</b>. We can add and subtract them, but <b>only in the same units</b>: centimetres with centimetres, kilograms with kilograms!'),
          rule: L('<b>cm, dm</b> — uzunlik · <b>kg</b> — massa · <b>l</b> — hajm.<br>5 kg + 3 kg = 8 kg ✔︎ · 5 kg + 3 cm — ✘ (qo‘shib bo‘lmaydi)', '<b>см, дм</b> — длина · <b>кг</b> — масса · <b>л</b> — объём.<br>5 кг + 3 кг = 8 кг ✔︎ · 5 кг + 3 см — ✘ (складывать нельзя)', '<b>cm, dm</b> — length · <b>kg</b> — mass · <b>L</b> — volume.<br>5 kg + 3 kg = 8 kg ✔︎ · 5 kg + 3 cm — ✘ (can’t be added)'),
          acts: [
            { type: 'choose', title: L('Qaysi birlik mos?', 'Какая единица подходит?', 'Which unit fits?'), icon: '🧪', make: function () {
              return pick([
                choice(L('Tarvuzning <b>massasi</b> qanday birlikda o‘lchanadi?', 'В каких единицах измеряют <b>массу</b> арбуза?', 'Which unit measures the <b>mass</b> of a watermelon?'), [KG, CM, LT], 0),
                choice(L('Choynakka sig‘adigan <b>suv</b> qanday birlikda o‘lchanadi?', 'В каких единицах измеряют <b>воду</b> в чайнике?', 'Which unit measures the <b>water</b> in a kettle?'), [LT, KG, L('dm', 'дм', 'dm')], 0),
                choice(L('Qalamning <b>uzunligi</b> qanday birlikda o‘lchanadi?', 'В каких единицах измеряют <b>длину</b> карандаша?', 'Which unit measures the <b>length</b> of a pencil?'), [CM, KG, LT], 0),
                choice(L('Partaning <b>uzunligi</b> uchun qaysi birlik qulay?', 'Какая единица удобна для <b>длины</b> парты?', 'Which unit suits the <b>length</b> of a desk?'), [L('dm', 'дм', 'dm'), KG, LT], 0)
              ]);
            } },
            { type: 'table', title: L('Kattaliklar jadvali (cm)', 'Таблица величин (см)', 'Measures table (cm)'), kind: 'sum', max: 90, unit: CM, cols: 4 },
            { type: 'problem', make: less({ a: [20, 60], d: [5, 15], u: CM, who: [L('Jo‘va', 'Скалка', 'Rolling pin'), L('Pichoq', 'Нож', 'Knife')],
              text: function (a, d) { return L('Jo‘vaning uzunligi <b>' + a + '</b> cm. Pichoq jo‘vadan <b>' + d + '</b> cm qisqa. <u>Pichoqning uzunligi</u> necha santimetr?', 'Длина скалки <b>' + a + '</b> см. Нож на <b>' + d + '</b> см короче скалки. <u>Какова длина ножа</u> в сантиметрах?', 'A rolling pin is <b>' + a + '</b> cm long. A knife is <b>' + d + '</b> cm shorter. <u>How long is the knife</u> in centimetres?'); } }) }
          ],
          quiz: [
            { q: L('Qaysilarini qo‘shish mumkin?', 'Что можно сложить?', 'Which can be added?'), o: [L('5 kg va 3 kg', '5 кг и 3 кг', '5 kg and 3 kg'), L('5 kg va 3 cm', '5 кг и 3 см', '5 kg and 3 cm'), L('5 l va 3 kg', '5 л и 3 кг', '5 L and 3 kg'), L('5 cm va 3 l', '5 см и 3 л', '5 cm and 3 L')], a: 0 },
            { q: L('Qaysi biri uzunlik birligi?', 'Какая из них — единица длины?', 'Which one is a unit of length?'), o: [L('dm', 'дм', 'dm'), L('kg', 'кг', 'kg'), L('l', 'л', 'L'), L('soat', 'час', 'hour')], a: 0 },
            { q: L('60 l − 30 l = ?', '60 л − 30 л = ?', '60 L − 30 L = ?'), o: [L('30 l', '30 л', '30 L'), L('90 l', '90 л', '90 L'), L('3 l', '3 л', '3 L'), L('20 l', '20 л', '20 L')], a: 0 },
            { q: L('50 cm + 8 dm (cm da)?', '50 см + 8 дм (в см)?', '50 cm + 8 dm (in cm)?'), o: [L('130 cm', '130 см', '130 cm'), L('58 cm', '58 см', '58 cm'), L('508 cm', '508 см', '508 cm'), L('13 cm', '13 см', '13 cm')], a: 0 }
          ] }
      ] }
    ]
  };

  if (C) C.addPart(part3);
  else if (typeof module !== 'undefined') module.exports = part3;
})(this);
