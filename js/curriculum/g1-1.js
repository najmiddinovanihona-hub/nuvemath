// Nuvemath — 1-sinf, I qism (manba: I.V. Repyova, Y.V. Zemlina, «Matematika. 1-sinf. I qism», Toshkent, 2023).
// Mavzular tartibi va nomlari darslikdan olingan; tushuntirishlar, topshiriqlar va rasmlar Nuvemath uchun qayta yozilgan.
(function (root) {
  'use strict';
  var C = root.NMCurriculum, H = C.H, L = H.L, mk = H.mk, PCS = H.PCS, choice = H.choice, pick = H.pick, word = H.word;
  var SH = { cube: L('kub', 'куб', 'cube'), ball: L('shar', 'шар', 'sphere'), cone: L('konus', 'конус', 'cone'), cylinder: L('silindr', 'цилиндр', 'cylinder'), pyramid: L('piramida', 'пирамида', 'pyramid'), box: L('parallelepiped', 'параллелепипед', 'cuboid') };
  var COLORS = ['blue', 'orange', 'green', 'pink', 'violet', 'cyan', 'yellow', 'red'];
  function dots(n, e) { var s = ''; for (var i = 0; i < n; i++) s += '<span class="kd-pic" style="--i:' + i + '">' + e + '</span>'; return '<div class="kd-pics"><div class="kd-pic-grp">' + s + '</div></div>'; }

  var part1 = {
    grade: 1, part: 1, edition: L('2023-yil nashri', 'Издание 2023 г.', '2023 edition'),
    title: L('Narsalar, sonlar va shakllar', 'Предметы, числа и фигуры', 'Objects, numbers and shapes'),
    book: L('I.V. Repyova, Y.V. Zemlina. Matematika, 1-sinf, I qism (Toshkent, 2023)', 'И.В. Репьева, Ю.В. Земцова. Математика, 1 класс, часть I (Ташкент, 2023)', 'I.V. Repyova, Y.V. Zemlina. Mathematics, Grade 1, Part I (Tashkent, 2023)'),
    intro: L('Matematika olamiga xush kelibsiz! Bu qismda narsalarni taqqoslaymiz, 0 dan 10 gacha sanaymiz, raqamlarni yozamiz, qo‘shish va ayirishni o‘rganamiz, shakllar bilan tanishamiz.',
      'Добро пожаловать в мир математики! В этой части мы сравниваем предметы, считаем от 0 до 10, пишем цифры, учимся складывать и вычитать и знакомимся с фигурами.',
      'Welcome to the world of maths! In this part we compare objects, count from 0 to 10, write digits, learn to add and subtract and meet shapes.'),
    sections: [
      // ============ 1-BO'LIM ============
      { id: 's1', title: L('Atrofimizdagi narsalar', 'Предметы вокруг нас', 'Objects around us'), icon: '🧸', color: 'pink', topics: [
        { id: 't1', lessons: L('1–2-darslar', 'Уроки 1–2', 'Lessons 1–2'), title: L('Narsalarning xossalari. O‘xshashlik va farq', 'Свойства предметов. Сходство и различие', 'Properties of objects. Alike and different'),
          keys: [L('rang', 'цвет', 'colour'), L('shakl', 'форма', 'shape'), L('o‘lcham', 'размер', 'size'), L('o‘xshash', 'похожие', 'alike'), L('farq', 'различие', 'difference')],
          scene: [{ obj: 'ball', n: 3, color: 'red' }, { obj: 'cube', n: 3, color: 'blue' }],
          explain: L('Har bir narsaning <b>xossalari</b> bor: rangi, shakli, o‘lchami. Ikki narsani solishtirsak, ular nimasi bilan <b>o‘xshash</b> va nimasi bilan <b>farq</b> qilishini topamiz.',
            'У каждого предмета есть <b>свойства</b>: цвет, форма, размер. Сравнивая два предмета, мы находим, чем они <b>похожи</b> и чем <b>отличаются</b>.',
            'Every object has <b>properties</b>: colour, shape and size. When we compare two objects we find how they are <b>alike</b> and how they are <b>different</b>.'),
          rule: L('Taqqoslashda so‘raymiz: <b>rangi? shakli? o‘lchami?</b>', 'Сравнивая, спрашиваем: <b>цвет? форма? размер?</b>', 'When comparing, ask: <b>colour? shape? size?</b>'),
          acts: [
            { type: 'choose', title: L('Ortiqchasini toping', 'Найдите лишний', 'Find the odd one out'), icon: '🔍', make: function (R) {
              var sets = [[['🍎', '🍐', '🍌'], '🚗'], [['🐶', '🐱', '🐰'], '⚽'], [['✏️', '🖊️', '🖍️'], '🍕'], [['🚗', '🚌', '🚲'], '🍉'], [['⭐', '🌙', '☀️'], '🐟']];
              var s = pick(sets), row = s[0].concat([s[1]]).sort(function () { return Math.random() - 0.5; });
              return choice(L('Qaysi biri ortiqcha?', 'Что здесь лишнее?', 'Which one does not belong?'), [s[1]].concat(s[0]), 0,
                '<div class="kd-pics"><div class="kd-pic-grp">' + row.map(function (e, i) { return '<span class="kd-pic" style="--i:' + i + ';font-size:2.2rem">' + e + '</span>'; }).join('') + '</div></div>');
            } },
            { type: 'choose', title: L('3D: nimasi bilan farq qiladi?', '3D: чем отличаются?', '3D: how are they different?'), icon: '🧊', make: function (R) {
              var c1 = pick(COLORS), c2; do { c2 = pick(COLORS); } while (c2 === c1);
              return pick([
                choice(L('Ikkala jism nimasi bilan farq qiladi?', 'Чем отличаются эти два тела?', 'How are the two solids different?'), [L('Shakli bilan', 'Формой', 'By shape'), L('Rangi bilan', 'Цветом', 'By colour'), L('Hech nimasi', 'Ничем', 'Not at all')], 0, null),
                choice(L('Ikkala kub nimasi bilan farq qiladi?', 'Чем отличаются эти два куба?', 'How are the two cubes different?'), [L('Rangi bilan', 'Цветом', 'By colour'), L('Shakli bilan', 'Формой', 'By shape'), L('Hech nimasi', 'Ничем', 'Not at all')], 0, null)
              ].map(function (ch, i) { ch.scene = i === 0 ? [{ obj: 'cube', n: 1, color: c1 }, { obj: 'ball', n: 1, color: c1 }] : [{ obj: 'cube', n: 1, color: c1 }, { obj: 'cube', n: 1, color: c2 }]; return ch; }));
            } }
          ],
          quiz: [
            { q: L('Qaysi biri narsaning xossasi emas?', 'Что не является свойством предмета?', 'Which is NOT a property of an object?'), o: [L('Ismi', 'Имя', 'Its name'), L('Rangi', 'Цвет', 'Colour'), L('Shakli', 'Форма', 'Shape'), L('O‘lchami', 'Размер', 'Size')], a: 0 },
            { q: L('Qizil shar va qizil kub nimasi bilan o‘xshash?', 'Чем похожи красный шар и красный куб?', 'How are a red ball and a red cube alike?'), o: [L('Rangi bilan', 'Цветом', 'Colour'), L('Shakli bilan', 'Формой', 'Shape'), L('Hech nimasi', 'Ничем', 'Nothing')], a: 0 },
            { q: L('Ortiqchasi: olma, nok, banan, mashina', 'Лишнее: яблоко, груша, банан, машина', 'Odd one out: apple, pear, banana, car'), o: [L('mashina', 'машина', 'car'), L('olma', 'яблоко', 'apple'), L('nok', 'груша', 'pear'), L('banan', 'банан', 'banana')], a: 0 }
          ] },

        { id: 't2', lessons: L('3-dars', 'Урок 3', 'Lesson 3'), title: L('Narsalarning joylashishi', 'Расположение предметов', 'Where things are'),
          keys: [L('chap', 'слева', 'left'), L('o‘ng', 'справа', 'right'), L('ustida', 'над', 'above'), L('ostida', 'под', 'below'), L('orasida', 'между', 'between')],
          scene: [{ obj: 'box', n: 1, color: 'orange' }, { obj: 'ball', n: 1, color: 'pink' }, { obj: 'cube', n: 1, color: 'blue' }],
          explain: L('Narsa qayerda turganini aytish uchun <b>chapda, o‘ngda, ustida, ostida, oldida, orqasida, orasida</b> so‘zlaridan foydalanamiz.',
            'Чтобы сказать, где находится предмет, используем слова <b>слева, справа, над, под, перед, за, между</b>.',
            'To say where something is, we use words like <b>left, right, above, below, in front of, behind, between</b>.'),
          rule: L('Chap qo‘lingizni ko‘taring — bu <b>chap</b> tomon. Ikkinchisi — <b>o‘ng</b>.', 'Поднимите левую руку — это <b>лево</b>. Другая — <b>право</b>.', 'Raise your left hand — that side is <b>left</b>. The other is <b>right</b>.'),
          acts: [
            { type: 'choose', title: L('Qayerda?', 'Где?', 'Where?'), icon: '🧭', make: function () {
              var row = ['🐱', '📦', '🐶'];
              return pick([
                choice(L('Mushuk qutining qaysi tomonida?', 'С какой стороны от коробки кошка?', 'Which side of the box is the cat on?'), [L('Chapda', 'Слева', 'Left'), L('O‘ngda', 'Справа', 'Right'), L('Ustida', 'Сверху', 'On top')], 0, '<div class="kd-pics"><div class="kd-pic-grp" style="font-size:2.4rem">' + row.join(' ') + '</div></div>'),
                choice(L('Quti kim bilan kim orasida?', 'Между кем стоит коробка?', 'The box is between which two?'), [L('Mushuk va kuchuk', 'Кошкой и собакой', 'The cat and the dog'), L('Faqat mushuk', 'Только кошкой', 'Only the cat'), L('Hech kim', 'Ни между кем', 'Nobody')], 0, '<div class="kd-pics"><div class="kd-pic-grp" style="font-size:2.4rem">' + row.join(' ') + '</div></div>'),
                choice(L('Kuchuk qutining qaysi tomonida?', 'С какой стороны от коробки собака?', 'Which side of the box is the dog on?'), [L('O‘ngda', 'Справа', 'Right'), L('Chapda', 'Слева', 'Left'), L('Ostida', 'Снизу', 'Below')], 0, '<div class="kd-pics"><div class="kd-pic-grp" style="font-size:2.4rem">' + row.join(' ') + '</div></div>')
              ]);
            } },
            { type: 'choose', title: L('Yuqori yoki past?', 'Вверху или внизу?', 'Up or down?'), icon: '⬆️', make: function () {
              return pick([
                choice(L('Qush daraxtning qayerida? 🐦 shoxda, 🍄 esa yerda.', 'Где птица? 🐦 на ветке, а 🍄 на земле.', 'Where is the bird? 🐦 is on a branch and 🍄 is on the ground.'), [L('Yuqorida', 'Вверху', 'Up high'), L('Pastda', 'Внизу', 'Down low')], 0),
                choice(L('Qo‘ziqorin qayerda? 🐦 shoxda, 🍄 esa yerda.', 'Где гриб? 🐦 на ветке, а 🍄 на земле.', 'Where is the mushroom? 🐦 is on a branch and 🍄 is on the ground.'), [L('Pastda', 'Внизу', 'Down low'), L('Yuqorida', 'Вверху', 'Up high')], 0)
              ]);
            } }
          ],
          quiz: [{ q: L('Quyosh osmonda qayerda?', 'Где находится солнце?', 'Where is the sun?'), o: [L('yuqorida', 'вверху', 'above'), L('pastda', 'внизу', 'below'), L('ichida', 'внутри', 'inside')], a: 0 }, { q: L('Ildiz daraxtning qayerida?', 'Где у дерева корни?', 'Where are a tree’s roots?'), o: [L('pastda', 'внизу', 'below'), L('yuqorida', 'вверху', 'above'), L('o‘ng tomonda', 'справа', 'on the right')], a: 0 }, { q: L('Kitob stol ustida turibdi. Stol kitobning qayerida?', 'Книга на столе. Где стол относительно книги?', 'A book is on the table. Where is the table?'), o: [L('ostida', 'под ней', 'under it'), L('ustida', 'над ней', 'over it'), L('yonida', 'рядом', 'next to it')], a: 0 }, 
            { q: L('🍎 🍌 🍐 — banan qayerda?', '🍎 🍌 🍐 — где банан?', '🍎 🍌 🍐 — where is the banana?'), o: [L('Olma va nok orasida', 'Между яблоком и грушей', 'Between the apple and the pear'), L('Eng chapda', 'Крайний слева', 'Far left'), L('Eng o‘ngda', 'Крайний справа', 'Far right')], a: 0 },
            { q: L('🍎 🍌 🍐 — eng chapdagisi?', '🍎 🍌 🍐 — крайний слева?', '🍎 🍌 🍐 — which is far left?'), o: ['🍎', '🍌', '🍐'], a: 0 },
            { q: L('Shift (ship) xonaning qayerida bo‘ladi?', 'Где в комнате потолок?', 'Where is the ceiling in a room?'), o: [L('Yuqorida', 'Вверху', 'Above'), L('Pastda', 'Внизу', 'Below'), L('Chapda', 'Слева', 'On the left')], a: 0 }
          ] },

        { id: 't3', lessons: L('4, 10-darslar', 'Уроки 4, 10', 'Lessons 4, 10'), title: L('Narsalar sanog‘i', 'Счёт предметов', 'Counting objects'),
          keys: [L('sanash', 'счёт', 'counting'), L('nechta?', 'сколько?', 'how many?'), L('tartib', 'порядок', 'order')],
          scene: [{ obj: 'ball', n: 5, color: 'yellow' }],
          explain: L('Sanaganda har bir narsani <b>bir martadan</b> sanaymiz va hech birini tashlab ketmaymiz. Oxirgi aytilgan son — narsalar <b>soni</b>.',
            'Считая, называем каждый предмет <b>один раз</b> и ничего не пропускаем. Последнее названное число — это <b>количество</b> предметов.',
            'When counting, we count each object <b>once</b> and skip nothing. The last number we say is <b>how many</b> there are.'),
          rule: L('Sanash: 1, 2, 3, 4, 5... Oxirgi son — javob!', 'Счёт: 1, 2, 3, 4, 5... Последнее число — ответ!', 'Count: 1, 2, 3, 4, 5... The last number is the answer!'),
          acts: [
            { type: 'count3d', title: L('3D: sharlarni sanang', '3D: посчитайте шары', '3D: count the balls'), make: function (R) { var n = R(3, 10); return { groups: [{ obj: 'ball', n: n, color: pick(COLORS) }], story: L('Sahnada <b>nechta shar</b> bor? Bosib sanang.', 'Сколько <b>шаров</b> на сцене? Нажимайте и считайте.', 'How many <b>balls</b> are on the stage? Tap to count.'), ans: n, unit: PCS }; } },
            { type: 'count3d', title: L('3D: kublarni sanang', '3D: посчитайте кубики', '3D: count the cubes'), make: function (R) { var n = R(2, 9); return { groups: [{ obj: 'cube', n: n, color: pick(COLORS) }], story: L('<b>Nechta kub</b> bor?', 'Сколько <b>кубиков</b>?', 'How many <b>cubes</b>?'), ans: n, unit: PCS }; } }
          ],
          quiz: [
            { q: '⭐⭐⭐⭐ — ?', o: ['4', '3', '5'], a: 0 },
            { q: '🍎🍎🍎🍎🍎🍎🍎 — ?', o: ['7', '6', '8'], a: 0 },
            { q: L('Sanaganda har bir narsani necha marta sanaymiz?', 'Сколько раз считаем каждый предмет?', 'How many times do we count each object?'), o: [L('Bir marta', 'Один раз', 'Once'), L('Ikki marta', 'Два раза', 'Twice'), L('Sanamaymiz', 'Не считаем', 'Not at all')], a: 0 }
          ] },

        { id: 't4', lessons: L('5-dars', 'Урок 5', 'Lesson 5'), title: L('Yassi va hajmli shakllar', 'Плоские и объёмные фигуры', 'Flat and solid shapes'),
          keys: [L('yassi', 'плоская', 'flat'), L('hajmli', 'объёмная', 'solid'), L('kub', 'куб', 'cube'), L('shar', 'шар', 'sphere'), L('konus', 'конус', 'cone'), L('silindr', 'цилиндр', 'cylinder')],
          scene: [{ obj: 'cube', n: 1, color: 'blue' }, { obj: 'ball', n: 1, color: 'pink' }, { obj: 'cone', n: 1, color: 'yellow' }, { obj: 'cylinder', n: 1, color: 'green' }],
          explain: L('Qog‘ozga chizilgan doira, kvadrat, uchburchak — <b>yassi</b> shakllar. Qo‘lga olib aylantirsa bo‘ladigan kub, shar, konus, silindr — <b>hajmli</b> shakllar. Sahnadagi shakllarni sudrab aylantirib ko‘ring!',
            'Круг, квадрат, треугольник на бумаге — <b>плоские</b> фигуры. Куб, шар, конус, цилиндр, которые можно взять в руки и повертеть, — <b>объёмные</b>. Покрутите фигуры на сцене!',
            'A circle, square or triangle drawn on paper are <b>flat</b> shapes. A cube, sphere, cone or cylinder you can hold and turn are <b>solid</b> shapes. Drag the shapes on the stage to turn them!'),
          rule: L('Shar — 🏀, kub — 🎲, silindr — 🥫, konus — 🍦', 'Шар — 🏀, куб — 🎲, цилиндр — 🥫, конус — 🍦', 'Sphere — 🏀, cube — 🎲, cylinder — 🥫, cone — 🍦'),
          acts: [
            { type: 'choose', title: L('3D: bu qaysi shakl?', '3D: что это за фигура?', '3D: which shape is this?'), icon: '🧊', make: function () {
              var keys = ['cube', 'ball', 'cone', 'cylinder', 'pyramid'], k = pick(keys), others = keys.filter(function (x) { return x !== k; }).sort(function () { return Math.random() - 0.5; }).slice(0, 2);
              var ch = choice(L('Sahnada qaysi hajmli shakl?', 'Какая объёмная фигура на сцене?', 'Which solid is on the stage?'), [SH[k], SH[others[0]], SH[others[1]]], 0); ch.scene = [{ obj: k, n: 1, color: pick(COLORS) }]; return ch;
            } },
            { type: 'count3d', title: L('3D: shakllarni sanang', '3D: посчитайте фигуры', '3D: count the shapes'), make: function (R) { var a = R(1, 4), b = R(1, 4); return { groups: [{ obj: 'cone', n: a, color: 'yellow' }, { obj: 'cylinder', n: b, color: 'green' }],
              story: L('Konuslar va silindrlar <b>jami nechta</b>?', 'Сколько <b>всего</b> конусов и цилиндров?', 'How many cones and cylinders <b>in total</b>?'), expr: [a, '+', b, '=', a + b], ans: a + b, unit: PCS }; } }
          ],
          quiz: [
            { q: L('Qaysi shakl yassi?', 'Какая фигура плоская?', 'Which shape is flat?'), o: [L('Kvadrat', 'Квадрат', 'Square'), L('Kub', 'Куб', 'Cube'), L('Shar', 'Шар', 'Sphere'), L('Silindr', 'Цилиндр', 'Cylinder')], a: 0 },
            { q: L('Koptok qaysi shaklga o‘xshaydi?', 'На какую фигуру похож мяч?', 'A ball looks like which shape?'), o: [L('Shar', 'Шар', 'Sphere'), L('Kub', 'Куб', 'Cube'), L('Konus', 'Конус', 'Cone')], a: 0 },
            { q: L('Muzqaymoq vafli stakanchasi qaysi shakl?', 'На что похож вафельный рожок?', 'An ice-cream cone looks like which shape?'), o: [L('Konus', 'Конус', 'Cone'), L('Shar', 'Шар', 'Sphere'), L('Kub', 'Куб', 'Cube')], a: 0 }
          ] },

        { id: 't5', lessons: L('6-dars', 'Урок 6', 'Lesson 6'), title: L('Vaqt bo‘yicha ketma-ketlik', 'Последовательность во времени', 'Order in time'),
          keys: [L('avval', 'сначала', 'first'), L('keyin', 'потом', 'then'), L('oxirida', 'в конце', 'finally'), L('kecha, bugun, ertaga', 'вчера, сегодня, завтра', 'yesterday, today, tomorrow')],
          scene: [{ obj: 'star', n: 3, color: 'yellow' }],
          explain: L('Voqealar ketma-ket bo‘ladi: <b>avval</b> nimadir, <b>keyin</b> boshqa narsa, <b>oxirida</b> yana boshqasi. Masalan: ertalab — kunduzi — kechqurun — tun.',
            'События идут по порядку: <b>сначала</b> одно, <b>потом</b> другое, <b>в конце</b> третье. Например: утро — день — вечер — ночь.',
            'Events happen in order: <b>first</b> one thing, <b>then</b> another, <b>finally</b> something else. For example: morning — afternoon — evening — night.'),
          rule: L('Kecha → bugun → ertaga', 'Вчера → сегодня → завтра', 'Yesterday → today → tomorrow'),
          acts: [
            { type: 'order', title: L('Kun qismlarini tartiblang', 'Расставьте части суток', 'Order the parts of the day'), make: function () { return { story: L('Kun qismlarini to‘g‘ri tartibda bosing.', 'Нажимайте на части суток по порядку.', 'Tap the parts of the day in order.'), items: [L('🌅 Ertalab', '🌅 Утро', '🌅 Morning'), L('☀️ Kunduzi', '☀️ День', '☀️ Afternoon'), L('🌇 Kechqurun', '🌇 Вечер', '🌇 Evening'), L('🌙 Tun', '🌙 Ночь', '🌙 Night')], sep: '<span class="kd-arr">→</span>' }; } },
            { type: 'order', title: L('O‘simlik qanday o‘sadi?', 'Как растёт растение?', 'How does a plant grow?'), make: function () { return { story: L('Rasmlarni voqealar tartibida bosing.', 'Нажимайте на картинки по порядку событий.', 'Tap the pictures in the order they happen.'), items: ['🌰', '🌱', '🌿', '🌳'], sep: '<span class="kd-arr">→</span>' }; } },
            { type: 'order', title: L('Fasllar', 'Времена года', 'Seasons'), make: function () { return { story: L('Fasllarni qishdan boshlab tartiblang.', 'Расставьте времена года, начиная с зимы.', 'Order the seasons starting from winter.'), items: [L('❄️ Qish', '❄️ Зима', '❄️ Winter'), L('🌷 Bahor', '🌷 Весна', '🌷 Spring'), L('☀️ Yoz', '☀️ Лето', '☀️ Summer'), L('🍂 Kuz', '🍂 Осень', '🍂 Autumn')], sep: '<span class="kd-arr">→</span>' }; } }
          ],
          quiz: [{ q: L('Qaysi biri avval keladi?', 'Что бывает раньше?', 'Which comes first?'), o: [L('ertalab', 'утро', 'morning'), L('kechqurun', 'вечер', 'evening'), L('tun', 'ночь', 'night')], a: 0 }, { q: L('Haftaning birinchi kuni?', 'Первый день недели?', 'The first day of the week?'), o: [L('dushanba', 'понедельник', 'Monday'), L('juma', 'пятница', 'Friday'), L('yakshanba', 'воскресенье', 'Sunday')], a: 0 }, { q: L('Qishdan keyin qaysi fasl keladi?', 'Какое время года после зимы?', 'Which season comes after winter?'), o: [L('bahor', 'весна', 'spring'), L('kuz', 'осень', 'autumn'), L('yoz', 'лето', 'summer')], a: 0 }, { q: L('Kecha, bugun, …?', 'Вчера, сегодня, …?', 'Yesterday, today, …?'), o: [L('ertaga', 'завтра', 'tomorrow'), L('kecha', 'вчера', 'yesterday'), L('hozir', 'сейчас', 'now')], a: 0 }, { q: L('Urug‘ → nihol → …?', 'Семя → росток → …?', 'Seed → sprout → …?'), o: [L('gul', 'цветок', 'flower'), L('urug‘', 'семя', 'seed'), L('tosh', 'камень', 'stone')], a: 0 }, { q: L('Avval nima qilamiz: kiyinamizmi yoki ko‘chaga chiqamizmi?', 'Что сначала: одеться или выйти на улицу?', 'What first: get dressed or go outside?'), o: [L('kiyinamiz', 'одеться', 'get dressed'), L('ko‘chaga chiqamiz', 'выйти', 'go outside')], a: 0 }, { q: L('Bir sutkada nechta soat bor?', 'Сколько часов в сутках?', 'How many hours in a day?'), o: ['24', '12', '7'], a: 0 }, { q: L('Haftada necha kun bor?', 'Сколько дней в неделе?', 'How many days in a week?'), o: ['7', '5', '10'], a: 0 }, 
            { q: L('Bugundan keyin nima keladi?', 'Что наступит после сегодня?', 'What comes after today?'), o: [L('Ertaga', 'Завтра', 'Tomorrow'), L('Kecha', 'Вчера', 'Yesterday'), L('O‘tgan yil', 'Прошлый год', 'Last year')], a: 0 },
            { q: L('Ertalabdan keyin?', 'После утра?', 'After morning?'), o: [L('Kunduzi', 'День', 'Afternoon'), L('Tun', 'Ночь', 'Night'), L('Kechqurun', 'Вечер', 'Evening')], a: 0 },
            { q: L('Bahordan keyin qaysi fasl?', 'Какое время года после весны?', 'Which season comes after spring?'), o: [L('Yoz', 'Лето', 'Summer'), L('Qish', 'Зима', 'Winter'), L('Kuz', 'Осень', 'Autumn')], a: 0 }
          ] },

        { id: 't6', lessons: L('7–8-darslar', 'Уроки 7–8', 'Lessons 7–8'), title: L('Narsalar guruhi. Guruhlarni taqqoslash', 'Группы предметов. Сравнение групп', 'Groups of objects. Comparing groups'),
          keys: [L('guruh', 'группа', 'group'), L('ko‘p', 'больше', 'more'), L('kam', 'меньше', 'fewer'), L('teng', 'поровну', 'equal')],
          scene: [{ obj: 'apple', n: 4, color: 'red' }, { obj: 'apple', n: 3, color: 'green' }],
          explain: L('Umumiy belgisi bor narsalar — <b>guruh</b>. Ikki guruhni taqqoslash uchun ularni <b>juftlab</b> qo‘yamiz: juftsiz qolganlar qaysi guruhda bo‘lsa, o‘sha guruhda <b>ko‘p</b>.',
            'Предметы с общим признаком образуют <b>группу</b>. Чтобы сравнить две группы, ставим предметы <b>парами</b>: в какой группе остались лишние — там <b>больше</b>.',
            'Objects that share something form a <b>group</b>. To compare two groups, we <b>pair them up</b>: the group with leftovers has <b>more</b>.'),
          rule: L('Juftlab qo‘ying → ortib qolgani ko‘p guruhni ko‘rsatadi.', 'Ставим парами → лишние показывают, где больше.', 'Pair them up → the leftovers show which group has more.'),
          acts: [
            { type: 'count3d', title: L('3D: qaysi guruh ko‘p?', '3D: какой группы больше?', '3D: which group has more?'), make: function (R) { var a = R(3, 7), b; do { b = R(2, 7); } while (b === a); var hi = Math.max(a, b), lo = Math.min(a, b);
              return { groups: [{ obj: 'apple', n: a, color: 'red' }, { obj: 'apple', n: b, color: 'green' }], story: L('Qizil va yashil olmalarni taqqoslang. Bir guruhda <b>nechta ortiq</b>?', 'Сравните красные и зелёные яблоки. На сколько в одной группе <b>больше</b>?', 'Compare the red and green apples. How many <b>more</b> are in one group?'), expr: [hi, '−', lo, '=', hi - lo], ans: hi - lo, unit: PCS }; } },
            { type: 'choose', title: L('Ko‘p, kam yoki teng?', 'Больше, меньше или поровну?', 'More, fewer or equal?'), icon: '⚖️', make: function (R) {
              var a = R(2, 7), b = R(2, 7);
              return choice(L('🐟 ' + a + ' ta, 🐱 ' + b + ' ta. Baliqlar mushuklarga nisbatan:', '🐟 — ' + a + ', 🐱 — ' + b + '. Рыбок по сравнению с кошками:', '🐟 ' + a + ', 🐱 ' + b + '. Compared with the cats, the fish are:'),
                [L('ko‘p', 'больше', 'more'), L('kam', 'меньше', 'fewer'), L('teng', 'поровну', 'equal')], a > b ? 0 : a < b ? 1 : 2, dots(a, '🐟') + dots(b, '🐱'));
            } }
          ],
          quiz: [
            { q: L('3 ta qalam va 3 ta daftar. Qaysi ko‘p?', '3 карандаша и 3 тетради. Чего больше?', '3 pencils and 3 notebooks. Which is more?'), o: [L('Teng', 'Поровну', 'Equal'), L('Qalam', 'Карандашей', 'Pencils'), L('Daftar', 'Тетрадей', 'Notebooks')], a: 0 },
            { q: L('5 ta 🐟 va 3 ta 🐱. Nechta baliq ortiq?', '5 🐟 и 3 🐱. На сколько рыбок больше?', '5 🐟 and 3 🐱. How many more fish?'), o: ['2', '8', '3'], a: 0 },
            { q: L('Guruhlarni qanday taqqoslaymiz?', 'Как сравнить группы?', 'How do we compare groups?'), o: [L('Juftlab qo‘yamiz', 'Ставим парами', 'Pair them up'), L('Rangiga qaraymiz', 'Смотрим на цвет', 'Look at the colour'), L('Taxmin qilamiz', 'Угадываем', 'Guess')], a: 0 }
          ] }
      ] },

      // ============ 2-BO'LIM ============
      { id: 's2', title: L('0 dan 10 gacha sonlar', 'Числа от 0 до 10', 'Numbers 0 to 10'), icon: '🔢', color: 'blue', topics: [
        { id: 't7', lessons: L('9-dars', 'Урок 9', 'Lesson 9'), title: L('1 dan 10 gacha bo‘lgan sonlar', 'Числа от 1 до 10', 'Numbers from 1 to 10'),
          keys: [L('son', 'число', 'number'), L('raqam', 'цифра', 'digit'), L('sanoq', 'счёт', 'counting')],
          scene: [{ obj: 'cube', n: 10, color: 'cyan' }],
          explain: L('Narsalar sonini <b>son</b> bilan aytamiz, sonni yozish uchun esa <b>raqam</b>lardan foydalanamiz. 1 dan 10 gacha sanab chiqing: har keyingi son oldingisidan <b>bittaga ko‘p</b>.',
            'Количество предметов называем <b>числом</b>, а записываем числа <b>цифрами</b>. Посчитайте от 1 до 10: каждое следующее число <b>на один больше</b> предыдущего.',
            'We say how many with a <b>number</b> and write numbers with <b>digits</b>. Count from 1 to 10: each next number is <b>one more</b> than the one before.'),
          rule: L('1, 2, 3, 4, 5, 6, 7, 8, 9, 10 — har biri oldingisidan +1.', '1, 2, 3, 4, 5, 6, 7, 8, 9, 10 — каждое на 1 больше.', '1, 2, 3, 4, 5, 6, 7, 8, 9, 10 — each is +1.'),
          acts: [
            { type: 'order', title: L('Sonlarni tartiblang', 'Расставьте числа по порядку', 'Put the numbers in order'), make: H.sortNums(6, 1, 10) },
            { type: 'chain', title: L('Qadamlab sanash', 'Считаем шагами', 'Counting in steps'), make: function (R) { var s = R(0, 3); return { start: s, ops: [['+', 1], ['+', 1], ['+', 2], ['+', 2], ['+', 1]] }; } },
            { type: 'count3d', title: L('3D: kublar minorasi', '3D: башня из кубиков', '3D: a tower of cubes'), make: function (R) { var n = R(4, 10); return { groups: [{ obj: 'cube', n: n, color: pick(COLORS) }], story: L('<b>Nechta kub</b>?', '<b>Сколько кубиков</b>?', '<b>How many cubes</b>?'), ans: n, unit: PCS }; } }
          ],
          quiz: [
            { q: L('7 dan keyingi son?', 'Какое число идёт после 7?', 'Which number comes after 7?'), o: ['8', '6', '9'], a: 0 },
            { q: L('5 dan oldingi son?', 'Какое число перед 5?', 'Which number comes before 5?'), o: ['4', '6', '3'], a: 0 },
            { q: L('Eng katta bir xonali son?', 'Самое большое однозначное число?', 'The largest one-digit number?'), o: ['9', '10', '8'], a: 0 }
          ] },

        { id: 't8', lessons: L('11–12-darslar', 'Уроки 11–12', 'Lessons 11–12'), title: L('Qo‘shish va ayirish', 'Сложение и вычитание', 'Adding and subtracting'),
          keys: [L('qo‘shish (+)', 'сложение (+)', 'adding (+)'), L('ayirish (−)', 'вычитание (−)', 'subtracting (−)'), L('teng (=)', 'равно (=)', 'equals (=)')],
          scene: [{ obj: 'ball', n: 3, color: 'orange' }, { obj: 'ball', n: 2, color: 'blue' }],
          explain: L('Ikki guruhni birlashtirsak — <b>qo‘shamiz</b> (+), narsalar ko‘payadi. Guruhdan bir qismini olib qo‘ysak — <b>ayiramiz</b> (−), narsalar kamayadi.',
            'Если соединяем две группы — <b>складываем</b> (+), предметов становится больше. Если убираем часть — <b>вычитаем</b> (−), предметов становится меньше.',
            'When we put two groups together we <b>add</b> (+) and there are more. When we take some away we <b>subtract</b> (−) and there are fewer.'),
          rule: L('3 + 2 = 5 · 5 − 2 = 3', '3 + 2 = 5 · 5 − 2 = 3', '3 + 2 = 5 · 5 − 2 = 3'),
          acts: [
            { type: 'count3d', title: L('3D: birlashtiring', '3D: объедините', '3D: put them together'), make: function (R) { var a = R(1, 5), b = R(1, 5); return { groups: [{ obj: 'ball', n: a, color: 'orange' }, { obj: 'ball', n: b, color: 'blue' }], story: L('To‘q sariq va ko‘k sharlar <b>jami nechta</b>?', 'Сколько <b>всего</b> оранжевых и синих шаров?', 'How many orange and blue balls <b>in total</b>?'), expr: [a, '+', b, '=', a + b], ans: a + b, unit: PCS }; } },
            { type: 'drill', title: L('10 gacha qo‘shish va ayirish', 'Сложение и вычитание до 10', 'Adding and subtracting to 10'), make: H.sumDrill(10) },
            { type: 'problem', make: H.part({ c: [5, 10], a: [1, 4], emoji: '🐦', labels: [L('uchib ketdi', 'улетели', 'flew away'), L('qoldi', 'остались', 'stayed')], cond: [L('Uchib ketdi', 'Улетели', 'Flew away'), L('Qoldi', 'Остались', 'Stayed')],
              text: function (c, a) { return L('Shoxda <b>' + c + '</b> ta qush o‘tirgan edi. <b>' + a + '</b> tasi uchib ketdi. <u>Nechta qush qoldi</u>?', 'На ветке сидели птицы — <b>' + c + '</b>. <b>' + a + '</b> улетели. <u>Сколько птиц осталось</u>?', '<b>' + c + '</b> birds sat on a branch. <b>' + a + '</b> flew away. <u>How many birds are left</u>?'); } }) }
          ],
          quiz: [
            { q: '4 + 3 = ?', o: ['7', '1', '6'], a: 0 },
            { q: '9 − 4 = ?', o: ['5', '13', '4'], a: 0 },
            { q: L('Birlashtirganda qaysi amal?', 'Какое действие, когда объединяем?', 'Which operation when we put together?'), o: [L('Qo‘shish', 'Сложение', 'Addition'), L('Ayirish', 'Вычитание', 'Subtraction')], a: 0 }
          ] },

        { id: 't9', lessons: L('13, 27-darslar', 'Уроки 13, 27', 'Lessons 13, 27'), title: L('Sonlarni taqqoslash', 'Сравнение чисел', 'Comparing numbers'),
          keys: [L('katta (>)', 'больше (>)', 'greater (>)'), L('kichik (<)', 'меньше (<)', 'less (<)'), L('teng (=)', 'равно (=)', 'equal (=)')],
          scene: [{ obj: 'cube', n: 5, color: 'green' }, { obj: 'cube', n: 3, color: 'pink' }],
          explain: L('Sanoqda keyin keladigan son <b>katta</b>. Belgining «og‘zi» doim <b>katta son</b>ga ochiladi: 7 &gt; 4, 2 &lt; 6.',
            'Число, которое при счёте идёт позже, — <b>больше</b>. «Клювик» знака всегда открыт к <b>большему числу</b>: 7 &gt; 4, 2 &lt; 6.',
            'The number that comes later when counting is <b>greater</b>. The sign’s “mouth” always opens towards the <b>bigger number</b>: 7 &gt; 4, 2 &lt; 6.'),
          rule: L('<b>&gt;</b> katta · <b>&lt;</b> kichik · <b>=</b> teng', '<b>&gt;</b> больше · <b>&lt;</b> меньше · <b>=</b> равно', '<b>&gt;</b> greater · <b>&lt;</b> less · <b>=</b> equal'),
          acts: [
            { type: 'choose', title: L('Belgi qo‘ying', 'Поставьте знак', 'Choose the sign'), icon: '⚖️', make: H.compareSign(0, 10) },
            { type: 'order', title: L('Kichigidan kattasiga', 'От меньшего к большему', 'Smallest to largest'), make: H.sortNums(5, 0, 10) },
            { type: 'order', title: L('Kattasidan kichigiga', 'От большего к меньшему', 'Largest to smallest'), make: H.sortNums(5, 0, 10, true) }
          ],
          quiz: [
            { q: '8 ◻ 5', o: ['>', '<', '='], a: 0 },
            { q: '3 ◻ 9', o: ['<', '>', '='], a: 0 },
            { q: L('Qaysi son eng kichik: 6, 2, 9?', 'Какое число самое маленькое: 6, 2, 9?', 'Which is the smallest: 6, 2, 9?'), o: ['2', '6', '9'], a: 0 }
          ] },

        { id: 't10', lessons: L('14–20-darslar', 'Уроки 14–20', 'Lessons 14–20'), title: L('1 dan 5 gacha sonlar va raqamlar', 'Числа и цифры от 1 до 5', 'Numbers and digits 1 to 5'),
          keys: [L('1, 2, 3, 4, 5', '1, 2, 3, 4, 5', '1, 2, 3, 4, 5'), L('sonning tarkibi', 'состав числа', 'number bonds')],
          scene: [{ obj: 'star', n: 5, color: 'yellow' }],
          explain: L('Har bir sonni ikki qismga ajratish mumkin — bu <b>sonning tarkibi</b>. Masalan, 5 = 1 + 4 = 2 + 3. Barmoqlaringiz bilan tekshirib ko‘ring!',
            'Каждое число можно разложить на две части — это <b>состав числа</b>. Например, 5 = 1 + 4 = 2 + 3. Проверьте на пальцах!',
            'Every number can be split into two parts — these are <b>number bonds</b>. For example, 5 = 1 + 4 = 2 + 3. Check on your fingers!'),
          rule: '5 = 1 + 4 · 5 = 2 + 3 · 4 = 1 + 3 · 4 = 2 + 2',
          acts: [
            { type: 'choose', title: L('Son va so‘z', 'Число и слово', 'Number and word'), icon: '🔤', make: function (R) { var n = R(1, 5), o = H.distinct(R, 2, 1, 5).filter(function (x) { return x !== n; }); if (o.length < 2) o = [n === 1 ? 2 : 1, n === 5 ? 4 : 5].filter(function (x) { return x !== n; }); return choice(mk(function (l) { return '<span class="kd-big">' + n + '</span> — ' + { uz: 'qanday o‘qiladi?', ru: 'как читается?', en: 'how do we say it?' }[l]; }), [word(n)].concat(o.slice(0, 2).map(word)), 0, dots(n, '⭐')); } },
            { type: 'drill', title: L('Sonning tarkibi (5 gacha)', 'Состав числа (до 5)', 'Number bonds to 5'), make: H.unknownDrill(5, ['x+b', 'a+x']) },
            { type: 'count3d', title: L('3D: 5 ni tuzing', '3D: составьте 5', '3D: make 5'), make: function (R) { var a = R(1, 4); return { groups: [{ obj: 'star', n: a, color: 'yellow' }, { obj: 'star', n: 5 - a, color: 'pink' }], story: L('Sariq va pushti yulduzlar birgalikda 5 ta. Ifodani to‘ldiring.', 'Жёлтых и розовых звёзд вместе 5. Заполните выражение.', 'Yellow and pink stars make 5 together. Complete the expression.'), expr: [a, '+', 5 - a, '=', 5], ans: 5, unit: PCS }; } }
          ],
          quiz: [
            { q: '5 = 2 + ?', o: ['3', '2', '4'], a: 0 },
            { q: '4 = 1 + ?', o: ['3', '4', '5'], a: 0 },
            { q: L('«To‘rt» qaysi raqam?', 'Какая цифра — «четыре»?', 'Which digit is “four”?'), o: ['4', '3', '5'], a: 0 }
          ] },

        { id: 't11', lessons: L('21–26-darslar', 'Уроки 21–26', 'Lessons 21–26'), title: L('6, 7, 8, 9, 10 va 0 sonlari', 'Числа 6, 7, 8, 9, 10 и 0', 'Numbers 6, 7, 8, 9, 10 and 0'),
          keys: [L('6 – 10', '6 – 10', '6 – 10'), L('nol (0)', 'ноль (0)', 'zero (0)'), L('sonning tarkibi', 'состав числа', 'number bonds')],
          scene: [{ obj: 'ball', n: 10, color: 'violet' }],
          explain: L('<b>0</b> — hech narsa yo‘q degani: savatdan hamma olmani olsak, 0 ta qoladi. <b>10</b> — birinchi ikki xonali son, u ikki raqam bilan yoziladi: 1 va 0.',
            '<b>0</b> — значит ничего нет: если взять все яблоки из корзины, останется 0. <b>10</b> — первое двузначное число, оно записывается двумя цифрами: 1 и 0.',
            '<b>0</b> means nothing at all: take every apple out of a basket and 0 are left. <b>10</b> is the first two-digit number — written with two digits, 1 and 0.'),
          rule: L('a + 0 = a · a − 0 = a · a − a = 0', 'a + 0 = a · a − 0 = a · a − a = 0', 'a + 0 = a · a − 0 = a · a − a = 0'),
          acts: [
            { type: 'choose', title: L('Son va so‘z', 'Число и слово', 'Number and word'), icon: '🔤', make: function (R) { var n = R(6, 10), o = n === 6 ? [7, 8] : n === 10 ? [8, 9] : [n - 1, n + 1]; return choice(mk(function (l) { return '<span class="kd-big">' + n + '</span> — ' + { uz: 'qanday o‘qiladi?', ru: 'как читается?', en: 'how do we say it?' }[l]; }), [word(n), word(o[0]), word(o[1])], 0); } },
            { type: 'drill', title: L('10 gacha sonning tarkibi', 'Состав чисел до 10', 'Number bonds to 10'), make: H.unknownDrill(10, ['x+b', 'a+x']) },
            { type: 'drill', title: L('Nol bilan', 'С нулём', 'With zero'), make: function (R) { var a = R(1, 10); return pick([{ q: a + ' + 0', a: a }, { q: a + ' − 0', a: a }, { q: a + ' − ' + a, a: 0 }, { q: '0 + ' + a, a: a }]); } }
          ],
          quiz: [
            { q: '7 − 7 = ?', o: ['0', '7', '14'], a: 0 },
            { q: '8 + 0 = ?', o: ['8', '0', '80'], a: 0 },
            { q: '10 = 6 + ?', o: ['4', '5', '6'], a: 0 }
          ] },

        { id: 't12', lessons: L('28–29-darslar', 'Уроки 28–29', 'Lessons 28–29'), title: L('Natural sonlar. Juft va toq sonlar', 'Натуральные числа. Чётные и нечётные', 'Natural numbers. Even and odd'),
          keys: [L('natural son', 'натуральное число', 'natural number'), L('juft', 'чётное', 'even'), L('toq', 'нечётное', 'odd')],
          scene: [{ obj: 'cube', n: 4, color: 'blue' }, { obj: 'cube', n: 3, color: 'orange' }],
          explain: L('Sanashda ishlatiladigan sonlar — <b>natural sonlar</b>: 1, 2, 3, ... Narsalarni juft-juft qilib bo‘lsak, hech biri ortib qolmasa — son <b>juft</b> (2, 4, 6, 8, 10), bittasi ortib qolsa — <b>toq</b> (1, 3, 5, 7, 9).',
            'Числа, которыми мы считаем, — <b>натуральные</b>: 1, 2, 3, ... Если предметы делятся на пары без остатка — число <b>чётное</b> (2, 4, 6, 8, 10), если один остаётся — <b>нечётное</b> (1, 3, 5, 7, 9).',
            'The numbers we count with are <b>natural numbers</b>: 1, 2, 3, ... If objects pair up with none left over the number is <b>even</b> (2, 4, 6, 8, 10); if one is left over it is <b>odd</b> (1, 3, 5, 7, 9).'),
          rule: L('Juft: 2, 4, 6, 8, 10 · Toq: 1, 3, 5, 7, 9', 'Чётные: 2, 4, 6, 8, 10 · Нечётные: 1, 3, 5, 7, 9', 'Even: 2, 4, 6, 8, 10 · Odd: 1, 3, 5, 7, 9'),
          acts: [
            { type: 'choose', title: L('Juftmi yoki toq?', 'Чётное или нечётное?', 'Even or odd?'), icon: '🧦', make: function (R) { var n = R(1, 10); return choice(mk(function (l) { return '<span class="kd-big">' + n + '</span> — ' + { uz: 'qanday son?', ru: 'какое это число?', en: 'what kind of number?' }[l]; }), [L('juft', 'чётное', 'even'), L('toq', 'нечётное', 'odd')], n % 2 ? 1 : 0, dots(n, '🧦')); } },
            { type: 'order', title: L('Juft sonlarni tartiblang', 'Расставьте чётные числа', 'Order the even numbers'), make: function (R) { var xs = H.distinct(R, 4, 1, 5).map(function (x) { return x * 2; }).sort(function (a, b) { return a - b; }); return { story: L('Juft sonlarni kichigidan kattasiga bosing.', 'Нажимайте на чётные числа от меньшего к большему.', 'Tap the even numbers from smallest to largest.'), items: xs.map(String), sep: '<span class="kd-arr">&lt;</span>' }; } }
          ],
          quiz: [
            { q: L('Qaysi son juft?', 'Какое число чётное?', 'Which number is even?'), o: ['6', '7', '9'], a: 0 },
            { q: L('Qaysi son toq?', 'Какое число нечётное?', 'Which number is odd?'), o: ['5', '4', '8'], a: 0 },
            { q: L('Eng kichik natural son?', 'Самое маленькое натуральное число?', 'The smallest natural number?'), o: ['1', '0', '10'], a: 0 }
          ] }
      ] },

      // ============ 3-BO'LIM ============
      { id: 's3', title: L('Geometriya boshlanishi', 'Начала геометрии', 'First steps in geometry'), icon: '📐', color: 'violet', topics: [
        { id: 't13', lessons: L('30–31-darslar', 'Уроки 30–31', 'Lessons 30–31'), title: L('Nuqta. To‘g‘ri va egri chiziq. Kesma. Siniq chiziq', 'Точка. Прямая и кривая. Отрезок. Ломаная', 'Point. Straight and curved lines. Segment. Broken line'),
          keys: [L('nuqta', 'точка', 'point'), L('to‘g‘ri chiziq', 'прямая', 'straight line'), L('egri chiziq', 'кривая', 'curve'), L('kesma', 'отрезок', 'segment'), L('siniq chiziq', 'ломаная', 'broken line')],
          scene: [{ obj: 'pencil', n: 3, color: 'violet' }],
          explain: L('Qalam uchini qog‘ozga tekkizsak — <b>nuqta</b>. Chizg‘ich bo‘ylab chizsak — <b>to‘g‘ri chiziq</b>, chizg‘ichsiz egilib ketsa — <b>egri chiziq</b>. To‘g‘ri chiziqning ikki nuqta orasidagi bo‘lagi — <b>kesma</b>. Bir nechta kesma ketma-ket ulansa — <b>siniq chiziq</b>.',
            'Коснёмся бумаги карандашом — получится <b>точка</b>. Проведём по линейке — <b>прямая линия</b>, без линейки, с изгибами — <b>кривая</b>. Часть прямой между двумя точками — <b>отрезок</b>. Несколько отрезков подряд — <b>ломаная</b>.',
            'Touch the paper with a pencil — that is a <b>point</b>. Draw along a ruler — a <b>straight line</b>; a bending line is a <b>curve</b>. The part of a line between two points is a <b>segment</b>. Several segments joined end to end make a <b>broken line</b>.'),
          rule: L('Kesmaning <b>ikki uchi</b> bor. Siniq chiziq — kesmalardan tuzilgan.', 'У отрезка <b>два конца</b>. Ломаная состоит из отрезков.', 'A segment has <b>two ends</b>. A broken line is made of segments.'),
          acts: [
            { type: 'choose', title: L('Bu qanday chiziq?', 'Какая это линия?', 'What kind of line is it?'), icon: '〰️', make: function () {
              var lines = [
                ['<svg viewBox="0 0 200 60" style="max-width:240px"><line x1="10" y1="30" x2="190" y2="30" stroke="#4f8dff" stroke-width="4" stroke-linecap="round"/><circle cx="10" cy="30" r="5" fill="#ff6b8b"/><circle cx="190" cy="30" r="5" fill="#ff6b8b"/></svg>', 0],
                ['<svg viewBox="0 0 200 60" style="max-width:240px"><path d="M10 40 Q50 0 100 30 T190 25" fill="none" stroke="#4f8dff" stroke-width="4" stroke-linecap="round"/></svg>', 1],
                ['<svg viewBox="0 0 200 60" style="max-width:240px"><polyline points="10,50 60,10 110,50 160,12 190,40" fill="none" stroke="#4f8dff" stroke-width="4" stroke-linejoin="round"/></svg>', 2]];
              var p = pick(lines);
              return choice(L('Rasmdagi chiziq qanday nomlanadi?', 'Как называется линия на рисунке?', 'What is the line in the picture called?'), [[L('Kesma', 'Отрезок', 'Segment'), L('Egri chiziq', 'Кривая', 'Curve'), L('Siniq chiziq', 'Ломаная', 'Broken line')][p[1]]].concat([L('Kesma', 'Отрезок', 'Segment'), L('Egri chiziq', 'Кривая', 'Curve'), L('Siniq chiziq', 'Ломаная', 'Broken line')].filter(function (x, i) { return i !== p[1]; })), 0, '<div class="kd-pics">' + p[0] + '</div>');
            } },
            { type: 'polygon', title: L('Siniq chiziq bo‘g‘inlari', 'Звенья ломаной', 'Parts of a broken line'), make: function (R) { var n = R(2, 4), s = []; for (var i = 0; i < n; i++) s.push(R(1, 4)); var sum = s.reduce(function (a, b) { return a + b; }, 0); return { kind: 'broken', sides: s, ans: sum, story: L('Siniq chiziq bo‘g‘inlari uzunliklarini qo‘shing. <b>Siniq chiziq uzunligi</b> necha cm?', 'Сложите длины звеньев. <b>Какова длина ломаной</b> в см?', 'Add the lengths of the parts. <b>How long is the broken line</b> in cm?') }; } }
          ],
          quiz: [
            { q: L('Kesmaning nechta uchi bor?', 'Сколько концов у отрезка?', 'How many ends does a segment have?'), o: ['2', '1', '0'], a: 0 },
            { q: L('Chizg‘ichsiz egilib chizilgan chiziq?', 'Линия с изгибами, проведённая без линейки?', 'A bending line drawn without a ruler?'), o: [L('Egri chiziq', 'Кривая', 'Curve'), L('Kesma', 'Отрезок', 'Segment'), L('Nuqta', 'Точка', 'Point')], a: 0 },
            { q: L('Siniq chiziq nimadan tuzilgan?', 'Из чего состоит ломаная?', 'What is a broken line made of?'), o: [L('Kesmalardan', 'Из отрезков', 'Segments'), L('Nuqtadan', 'Из одной точки', 'One point'), L('Doiralardan', 'Из кругов', 'Circles')], a: 0 }
          ] }
      ] },

      // ============ 4-BO'LIM ============
      { id: 's4', title: L('Qo‘shish va ayirish sirlari', 'Секреты сложения и вычитания', 'Secrets of adding and subtracting'), icon: '➕', color: 'green', topics: [
        { id: 't14', lessons: L('32–33-darslar', 'Уроки 32–33', 'Lessons 32–33'), title: L('Qo‘shish va ayirish hadlari', 'Компоненты сложения и вычитания', 'Names in adding and subtracting'),
          keys: [L('qo‘shiluvchi', 'слагаемое', 'addend'), L('yig‘indi', 'сумма', 'sum'), L('kamayuvchi', 'уменьшаемое', 'minuend'), L('ayriluvchi', 'вычитаемое', 'subtrahend'), L('ayirma', 'разность', 'difference')],
          scene: [{ obj: 'cube', n: 4, color: 'green' }, { obj: 'cube', n: 3, color: 'violet' }],
          explain: L('Har bir sonning o‘z nomi bor! <b>4 + 3 = 7</b>: 4 va 3 — <b>qo‘shiluvchilar</b>, 7 — <b>yig‘indi</b>. <b>7 − 3 = 4</b>: 7 — <b>kamayuvchi</b>, 3 — <b>ayriluvchi</b>, 4 — <b>ayirma</b>.',
            'У каждого числа своё имя! <b>4 + 3 = 7</b>: 4 и 3 — <b>слагаемые</b>, 7 — <b>сумма</b>. <b>7 − 3 = 4</b>: 7 — <b>уменьшаемое</b>, 3 — <b>вычитаемое</b>, 4 — <b>разность</b>.',
            'Every number has a name! <b>4 + 3 = 7</b>: 4 and 3 are <b>addends</b>, 7 is the <b>sum</b>. <b>7 − 3 = 4</b>: 7 is the <b>minuend</b>, 3 the <b>subtrahend</b>, 4 the <b>difference</b>.'),
          rule: L('qo‘shiluvchi + qo‘shiluvchi = yig‘indi<br>kamayuvchi − ayriluvchi = ayirma', 'слагаемое + слагаемое = сумма<br>уменьшаемое − вычитаемое = разность', 'addend + addend = sum<br>minuend − subtrahend = difference'),
          acts: [
            { type: 'table', title: L('Yig‘indilar jadvali', 'Таблица сумм', 'Table of sums'), kind: 'sum', max: 10, min: 1, cols: 5 },
            { type: 'table', title: L('Ayirmalar jadvali', 'Таблица разностей', 'Table of differences'), kind: 'diff', max: 10, min: 1, cols: 5 },
            { type: 'choose', title: L('Nomini toping', 'Назовите', 'Name it'), icon: '🏷️', make: function (R) { var a = R(3, 9), b = R(1, a - 1);
              return pick([
                choice(L(a + ' − ' + b + ' = ' + (a - b) + ' ifodada <b>' + a + '</b> qanday ataladi?', 'Как называется <b>' + a + '</b> в ' + a + ' − ' + b + ' = ' + (a - b) + '?', 'In ' + a + ' − ' + b + ' = ' + (a - b) + ', what is <b>' + a + '</b> called?'), [L('kamayuvchi', 'уменьшаемое', 'minuend'), L('ayriluvchi', 'вычитаемое', 'subtrahend'), L('ayirma', 'разность', 'difference')], 0),
                choice(L(b + ' + ' + (a - b) + ' = ' + a + ' ifodada <b>' + a + '</b> qanday ataladi?', 'Как называется <b>' + a + '</b> в ' + b + ' + ' + (a - b) + ' = ' + a + '?', 'In ' + b + ' + ' + (a - b) + ' = ' + a + ', what is <b>' + a + '</b> called?'), [L('yig‘indi', 'сумма', 'sum'), L('qo‘shiluvchi', 'слагаемое', 'addend'), L('ayirma', 'разность', 'difference')], 0)
              ]); } }
          ],
          quiz: [
            { q: L('5 + 2 = 7. 7 qanday ataladi?', '5 + 2 = 7. Как называется 7?', '5 + 2 = 7. What is 7 called?'), o: [L('yig‘indi', 'сумма', 'sum'), L('qo‘shiluvchi', 'слагаемое', 'addend'), L('ayirma', 'разность', 'difference')], a: 0 },
            { q: L('9 − 4 = 5. 4 qanday ataladi?', '9 − 4 = 5. Как называется 4?', '9 − 4 = 5. What is 4 called?'), o: [L('ayriluvchi', 'вычитаемое', 'subtrahend'), L('kamayuvchi', 'уменьшаемое', 'minuend'), L('yig‘indi', 'сумма', 'sum')], a: 0 },
            { q: L('Qo‘shiluvchilar 6 va 3. Yig‘indi?', 'Слагаемые 6 и 3. Сумма?', 'Addends 6 and 3. The sum?'), o: ['9', '3', '18'], a: 0 }
          ] },

        { id: 't15', lessons: L('34–36-darslar', 'Уроки 34–36', 'Lessons 34–36'), title: L('Noma’lum sonni topish', 'Нахождение неизвестного числа', 'Finding the unknown number'),
          keys: [L('noma’lum qo‘shiluvchi', 'неизвестное слагаемое', 'unknown addend'), L('noma’lum kamayuvchi', 'неизвестное уменьшаемое', 'unknown minuend'), L('noma’lum ayriluvchi', 'неизвестное вычитаемое', 'unknown subtrahend')],
          scene: [{ obj: 'box', n: 1, color: 'orange' }, { obj: 'cube', n: 3, color: 'blue' }],
          explain: L('Qutichada (□) yashiringan sonni topamiz. <b>Noma’lum qo‘shiluvchi</b> = yig‘indi − ma’lum qo‘shiluvchi. <b>Noma’lum kamayuvchi</b> = ayirma + ayriluvchi. <b>Noma’lum ayriluvchi</b> = kamayuvchi − ayirma.',
            'Найдём число, спрятанное в окошке (□). <b>Неизвестное слагаемое</b> = сумма − известное слагаемое. <b>Неизвестное уменьшаемое</b> = разность + вычитаемое. <b>Неизвестное вычитаемое</b> = уменьшаемое − разность.',
            'Let’s find the number hidden in the box (□). <b>Unknown addend</b> = sum − known addend. <b>Unknown minuend</b> = difference + subtrahend. <b>Unknown subtrahend</b> = minuend − difference.'),
          rule: '□ + 3 = 8 → □ = 8 − 3 = 5<br>□ − 3 = 4 → □ = 4 + 3 = 7<br>9 − □ = 6 → □ = 9 − 6 = 3',
          acts: [
            { type: 'drill', title: L('Qutichadagi sonni toping', 'Найдите число в окошке', 'Find the hidden number'), make: H.unknownDrill(10) },
            { type: 'count3d', title: L('3D: nechtasi qutida yashiringan?', '3D: сколько спрятано в коробке?', '3D: how many are hidden?'), make: function (R) { var tot = R(5, 10), v = R(1, tot - 1); return { groups: [{ obj: 'cube', n: v, color: 'blue' }], story: L('Jami <b>' + tot + '</b> ta kub bor edi, ba’zilari qutiga yashirildi. Ko‘rinib turganini sanang va <b>yashiringanini</b> toping.', 'Всего было <b>' + tot + '</b> кубиков, часть спрятали в коробку. Посчитайте видимые и найдите <b>спрятанные</b>.', 'There were <b>' + tot + '</b> cubes and some were hidden in a box. Count the visible ones and find the <b>hidden</b> ones.'), expr: [tot, '−', v, '=', tot - v], ans: tot - v, unit: PCS }; } }
          ],
          quiz: [
            { q: '□ + 4 = 9', o: ['5', '13', '4'], a: 0 },
            { q: '□ − 2 = 6', o: ['8', '4', '6'], a: 0 },
            { q: '10 − □ = 7', o: ['3', '17', '7'], a: 0 }
          ] },

        { id: 't16', lessons: L('37–38-darslar', 'Уроки 37–38', 'Lessons 37–38'), title: L('Qo‘shish va ayirish bog‘liqligi. O‘rin almashtirish xossasi', 'Связь сложения и вычитания. Переместительное свойство', 'Adding and subtracting are linked. Swapping addends'),
          keys: [L('o‘rin almashtirish', 'переместительное свойство', 'commutative'), L('teskari amal', 'обратное действие', 'inverse operation')],
          scene: [{ obj: 'ball', n: 2, color: 'orange' }, { obj: 'ball', n: 5, color: 'cyan' }],
          explain: L('Qo‘shiluvchilarning o‘rni almashsa, yig‘indi <b>o‘zgarmaydi</b>: 2 + 5 = 5 + 2. Bitta qo‘shish misolidan ikkita ayirish misoli hosil bo‘ladi: 2 + 5 = 7 → 7 − 5 = 2 va 7 − 2 = 5.',
            'От перестановки слагаемых сумма <b>не меняется</b>: 2 + 5 = 5 + 2. Из одного примера на сложение получаются два на вычитание: 2 + 5 = 7 → 7 − 5 = 2 и 7 − 2 = 5.',
            'Swapping the addends does <b>not change</b> the sum: 2 + 5 = 5 + 2. One addition fact gives two subtraction facts: 2 + 5 = 7 → 7 − 5 = 2 and 7 − 2 = 5.'),
          rule: '<b>a + b = b + a</b><br>a + b = c → c − b = a, c − a = b',
          acts: [
            { type: 'count3d', title: L('3D: o‘rnini almashtiring', '3D: поменяйте местами', '3D: swap them'), make: function (R) { var a = R(1, 5), b = R(1, 5); return { groups: [{ obj: 'ball', n: b, color: 'cyan' }, { obj: 'ball', n: a, color: 'orange' }], story: L(a + ' + ' + b + ' = ' + (a + b) + '. Endi o‘rnini almashtiring: sahnadagi guruhlarni yozing.', a + ' + ' + b + ' = ' + (a + b) + '. Теперь поменяйте слагаемые местами: запишите группы на сцене.', a + ' + ' + b + ' = ' + (a + b) + '. Now swap them: write the groups on the stage.'), expr: [b, '+', a, '=', a + b], ans: a + b, unit: PCS }; } },
            { type: 'drill', title: L('Bog‘liq misollar', 'Связанные примеры', 'Related facts'), make: function (R) { var a = R(1, 9), b = R(1, 10 - a); return pick([{ q: (a + b) + ' − ' + b, a: a }, { q: (a + b) + ' − ' + a, a: b }, { q: b + ' + ' + a, a: a + b }]); } }
          ],
          quiz: [
            { q: '3 + 6 = 6 + ?', o: ['3', '9', '6'], a: 0 },
            { q: L('4 + 5 = 9 bo‘lsa, 9 − 5 = ?', 'Если 4 + 5 = 9, то 9 − 5 = ?', 'If 4 + 5 = 9, then 9 − 5 = ?'), o: ['4', '5', '14'], a: 0 },
            { q: L('O‘rin almashtirganda yig‘indi...', 'От перестановки слагаемых сумма...', 'When we swap the addends the sum...'), o: [L('o‘zgarmaydi', 'не меняется', 'stays the same'), L('kattalashadi', 'увеличивается', 'grows'), L('kichrayadi', 'уменьшается', 'shrinks')], a: 0 }
          ] },

        { id: 't17', lessons: L('39–41-darslar', 'Уроки 39–41', 'Lessons 39–41'), title: L('Qo‘shish jadvali. Taqqoslash. Ifodalar', 'Таблица сложения. Сравнение. Выражения', 'Addition table. Comparing. Expressions'),
          keys: [L('qo‘shish jadvali', 'таблица сложения', 'addition table'), L('ifoda', 'выражение', 'expression'), L('ifoda qiymati', 'значение выражения', 'value of an expression')],
          scene: [{ obj: 'cube', n: 6, color: 'yellow' }],
          explain: L('<b>Ifoda</b> — sonlar va amal belgilaridan tuzilgan yozuv, masalan 3 + 4. Uni hisoblasak, <b>ifoda qiymati</b> chiqadi: 7. Ikki ifodani taqqoslash uchun ularning qiymatlarini taqqoslaymiz.',
            '<b>Выражение</b> — запись из чисел и знаков действий, например 3 + 4. Если его вычислить, получится <b>значение выражения</b>: 7. Чтобы сравнить два выражения, сравниваем их значения.',
            'An <b>expression</b> is made of numbers and operation signs, like 3 + 4. Working it out gives the <b>value of the expression</b>: 7. To compare two expressions we compare their values.'),
          rule: L('3 + 4 ◻ 2 + 6 → 7 &lt; 8, demak 3 + 4 &lt; 2 + 6', '3 + 4 ◻ 2 + 6 → 7 &lt; 8, значит 3 + 4 &lt; 2 + 6', '3 + 4 ◻ 2 + 6 → 7 &lt; 8, so 3 + 4 &lt; 2 + 6'),
          acts: [
            { type: 'drill', title: L('Qo‘shish jadvali', 'Таблица сложения', 'Addition table'), n: 8, make: function (R) { var a = R(1, 9), b = R(1, 10 - a); return { q: a + ' + ' + b, a: a + b }; } },
            { type: 'choose', title: L('Ifodalarni taqqoslang', 'Сравните выражения', 'Compare the expressions'), icon: '⚖️', make: function (R) { var a = R(1, 6), b = R(1, 4), c = R(1, 6), d = R(1, 4); var x = a + b, y = c + d;
              return choice('<span class="kd-big">' + a + ' + ' + b + ' ◻ ' + c + ' + ' + d + '</span>', ['&gt;', '&lt;', '='], x > y ? 0 : x < y ? 1 : 2); } },
            { type: 'chain', make: function (R) { var s = R(1, 4); return { start: s, ops: [['+', R(1, 3)], ['+', R(1, 2)], ['−', R(1, 2)], ['+', R(1, 2)]] }; } }
          ],
          quiz: [
            { q: '6 + 3 = ?', o: ['9', '8', '3'], a: 0 },
            { q: '2 + 5 ◻ 4 + 4', o: ['<', '>', '='], a: 0 },
            { q: L('«5 + 2» bu nima?', 'Что такое «5 + 2»?', 'What is “5 + 2”?'), o: [L('ifoda', 'выражение', 'an expression'), L('javob', 'ответ', 'an answer'), L('raqam', 'цифра', 'a digit')], a: 0 }
          ] }
      ] }
    ]
  };

  C.addPart(part1);
})(this);
