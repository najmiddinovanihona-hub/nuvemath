// Nuvemath — 3-sinf, IV qism (manba: I.V. Repyova, «Matematika. 3-sinf. IV qism», Toshkent, 2023).
// Mavzular tartibi va nomlari darslikdan olingan; tushuntirishlar, topshiriqlar va rasmlar Nuvemath uchun qayta yozilgan.
(function (root) {
  'use strict';
  var C = root.NMCurriculum, H = C.H, L = H.L, mk = H.mk, PCS = H.PCS, choice = H.choice, pick = H.pick;
  var KM = L('km', 'км', 'km'), KMH = L('km/soat', 'км/ч', 'km/h'), HRS = L('soat', 'ч', 'h'), SOM = L('so‘m', 'сум', 'sum'), CM = H.CM, CM2 = L('cm²', 'см²', 'cm²'), CM3 = L('cm³', 'см³', 'cm³');
  // Eyler-Venn diagrammasi: ikki to'plam va ularning elementlari
  function venn(A, B, both, la, lb) {
    var t = function (arr, x, y) { return arr.map(function (v, i) { return '<text x="' + x + '" y="' + (y + i * 18) + '" text-anchor="middle" font-size="15" font-weight="700" fill="currentColor">' + v + '</text>'; }).join(''); };
    return '<div class="kd-pics" style="color:var(--text)"><svg viewBox="0 0 260 150" style="max-width:300px;width:100%"><circle cx="95" cy="75" r="62" fill="rgba(79,141,255,.22)" stroke="#4f8dff" stroke-width="3"/><circle cx="165" cy="75" r="62" fill="rgba(255,107,139,.2)" stroke="#ff6b8b" stroke-width="3"/>' +
      '<text x="60" y="18" font-size="14" font-weight="800" fill="#4f8dff">' + la + '</text><text x="190" y="18" font-size="14" font-weight="800" fill="#ff6b8b">' + lb + '</text>' + t(A, 70, 60) + t(both, 130, 60) + t(B, 192, 60) + '</svg></div>';
  }

  var part4 = {
    grade: 3, part: 4, edition: L('2023-yil nashri', 'Издание 2023 г.', '2023 edition'),
    title: L('Harakat, qiymat, unumdorlik va to‘plamlar', 'Движение, стоимость, производительность и множества', 'Motion, cost, work rate and sets'),
    book: L('I.V. Repyova. Matematika, 3-sinf, IV qism (Toshkent, 2023)', 'И.В. Репьева. Математика, 3 класс, часть IV (Ташкент, 2023)', 'I.V. Repyova. Mathematics, Grade 3, Part IV (Tashkent, 2023)'),
    intro: L('Yil yakunida hayotiy masalalar bilan ishlaymiz: tezlik va masofa, narx va qiymat, ish unumdorligi. Shuningdek to‘plamlar va Eyler-Venn diagrammalari bilan tanishamiz.',
      'В конце года решаем жизненные задачи: скорость и расстояние, цена и стоимость, производительность. А ещё знакомимся с множествами и диаграммами Эйлера–Венна.',
      'To finish the year we solve real-life problems: speed and distance, price and cost, work rate. We also meet sets and Euler–Venn diagrams.'),
    sections: [
      { id: 's1', title: L('Yuz, hajm va qoldiqli bo‘lish', 'Площадь, объём и деление с остатком', 'Area, volume and remainders'), icon: '🧊', color: 'cyan', topics: [
        { id: 't1', lessons: L('111–112-darslar', 'Уроки 111–112', 'Lessons 111–112'), title: L('Muntazam shakllar perimetri. To‘g‘ri to‘rtburchak va kvadrat yuzi', 'Периметр правильных фигур. Площадь прямоугольника и квадрата', 'Perimeter of regular shapes. Area of rectangles and squares'),
          keys: ['P = n · a', 'S = a · b', 'S = a · a'],
          scene: [{ obj: 'box', n: 1, color: 'green' }, { obj: 'cube', n: 1, color: 'yellow' }],
          explain: L('Muntazam shakl perimetri: P = tomonlar soni · tomon. To‘g‘ri to‘rtburchak yuzi S = a · b, kvadrat yuzi S = a · a.',
            'Периметр правильной фигуры: P = число сторон · сторона. Площадь прямоугольника S = a · b, квадрата S = a · a.',
            'Perimeter of a regular shape: P = number of sides · side. Area of a rectangle S = a · b; of a square S = a · a.'),
          rule: 'P = n · a · S = a · b',
          acts: [
            { type: 'grid', make: function (R) { var a = R(2, 11), b = R(2, 7); return { a: a, b: b, ask: 'area', ans: a * b, unit: CM2, story: L('<b>Yuzni</b> toping (1 katak = 1 cm²).', 'Найдите <b>площадь</b> (1 клетка = 1 см²).', 'Find the <b>area</b> (1 square = 1 cm²).') }; } },
            { type: 'drill', n: 6, make: function (R) { var a = R(3, 25), b = R(2, 20), n = R(3, 8); return pick([{ q: 'S, a = ' + a + ', b = ' + b, a: a * b }, { q: 'S, a = ' + a + ' (□)', a: a * a }, { q: 'P, n = ' + n + ', a = ' + a, a: n * a }]); } }
          ],
          quiz: [{ q: L('Kvadrat, a = 8 cm. S = ?', 'Квадрат, a = 8 см. S = ?', 'Square, a = 8 cm. S = ?'), o: ['64', '32', '16'], a: 0 }, { q: L('Muntazam oltiburchak, a = 7. P = ?', 'Правильный шестиугольник, a = 7. P = ?', 'Regular hexagon, a = 7. P = ?'), o: ['42', '49', '13'], a: 0 }] },

        { id: 't2', lessons: L('113-dars', 'Урок 113', 'Lesson 113'), title: L('Kuboidning hajmi', 'Объём прямоугольного параллелепипеда', 'Volume of a cuboid'),
          keys: ['V = a · b · c', 'cm³'],
          scene: [{ obj: 'cube', n: 3, color: 'cyan' }, { obj: 'cube', n: 3, color: 'blue' }],
          explain: L('Kuboid hajmi = uzunlik · eni · balandligi: V = a · b · c. Bir qatlamda a · b kubik bor, c ta qatlam — demak V = a · b · c. 4 × 3 × 2 kuboidda 24 ta kubik!',
            'Объём прямоугольного параллелепипеда = длина · ширина · высота: V = a · b · c. В одном слое a · b кубиков, слоёв c — значит V = a · b · c. В параллелепипеде 4 × 3 × 2 — 24 кубика!',
            'A cuboid’s volume = length · width · height: V = a · b · c. One layer has a · b cubes and there are c layers, so V = a · b · c. A 4 × 3 × 2 cuboid holds 24 cubes!'),
          rule: 'V = a · b · c',
          acts: [
            { type: 'count3d', title: L('3D: kubiklardan kuboid', '3D: параллелепипед из кубиков', '3D: a cuboid of cubes'), make: function (R) { var a = R(2, 4), b = R(2, 3); var g = []; for (var i = 0; i < b; i++) g.push({ obj: 'cube', n: a * 2, color: ['cyan', 'blue', 'violet'][i] }); return { groups: g, perRow: a, story: L('Har qatlamda <b>' + a + ' × 2</b> kubik, <b>' + b + '</b> ta qatlam. <b>Hajmi</b> necha kubik?', 'В каждом слое <b>' + a + ' × 2</b> кубика, слоёв — <b>' + b + '</b>. <b>Объём</b> в кубиках?', 'Each layer has <b>' + a + ' × 2</b> cubes and there are <b>' + b + '</b> layers. <b>Volume</b> in cubes?'), expr: [a * 2, '·', b, '=', a * 2 * b], ans: a * 2 * b, unit: CM3 }; } },
            { type: 'drill', n: 6, make: function (R) { var a = R(2, 10), b = R(2, 8), c = R(2, 6); return { q: 'V = ' + a + ' · ' + b + ' · ' + c, a: a * b * c }; } }
          ],
          quiz: [{ q: L('5 × 4 × 3 kuboid hajmi?', 'Объём 5 × 4 × 3?', 'Volume of 5 × 4 × 3?'), o: ['60', '12', '47'], a: 0 }, { q: L('Kub, a = 3 cm. V = ?', 'Куб, a = 3 см. V = ?', 'Cube, a = 3 cm. V = ?'), o: ['27', '9', '12'], a: 0 }] },

        { id: 't3', lessons: L('114–116-darslar', 'Уроки 114–116', 'Lessons 114–116'), title: L('Qoldiqli bo‘lish. Amaliy masalalar', 'Деление с остатком. Практические задачи', 'Division with remainders. Practical problems'),
          keys: [L('qoldiq', 'остаток', 'remainder'), L('yaxlitlash', 'округление', 'rounding up')],
          scene: [{ obj: 'box', n: 3, color: 'orange' }, { obj: 'cube', n: 2, color: 'pink' }],
          explain: L('Hayotda qoldiqqa e’tibor berish kerak: 26 bola 4 o‘rinli qayiqlarga o‘tirsa, 26 : 4 = 6 (qoldiq 2). Ortgan 2 bola uchun yana bitta qayiq kerak — jami <b>7</b> qayiq!',
            'В жизни важно учитывать остаток: 26 детей садятся в 4-местные лодки: 26 : 4 = 6 (ост. 2). Для оставшихся двоих нужна ещё лодка — всего <b>7</b>!',
            'In real life the remainder matters: 26 children in 4-seat boats: 26 : 4 = 6 (rem. 2). The 2 left over need one more boat — <b>7</b> boats in all!'),
          rule: L('Qoldiq bo‘lsa — yana bitta idish kerak', 'Есть остаток — нужна ещё одна ёмкость', 'A remainder means one more container'),
          acts: [
            { type: 'problem', make: function (R) { var k = R(3, 6), q = R(3, 9), r = R(1, k - 1), n = k * q + r; return { story: L('<b>' + n + '</b> o‘quvchi <b>' + k + '</b> o‘rinli mashinalarga o‘tirishi kerak. <u>Kamida nechta mashina</u> kerak?', '<b>' + n + '</b> учеников рассаживают в <b>' + k + '</b>-местные машины. <u>Сколько машин нужно как минимум</u>?', '<b>' + n + '</b> pupils ride in <b>' + k + '</b>-seat cars. <u>How many cars are needed at least</u>?'), expr: [q, '+', 1, '=', q + 1], ans: q + 1, unit: PCS }; } },
            { type: 'drill', title: L('Qoldiqni toping', 'Найдите остаток', 'Find the remainder'), n: 6, make: function (R) { var b = R(3, 9), q = R(5, 30), r = R(1, b - 1); return { q: mk(function (l) { return (b * q + r) + ' : ' + b + ' = ' + q + ' (' + { uz: 'qoldiq', ru: 'ост.', en: 'rem.' }[l] + ' ?)'; }), a: r }; } }
          ],
          quiz: [{ q: L('30 kishi 4 o‘rinli qayiqlarda. Nechta qayiq?', '30 человек в 4-местных лодках. Сколько лодок?', '30 people in 4-seat boats. How many boats?'), o: ['8', '7', '6'], a: 0 }, { q: L('50 : 7 = 7 (qoldiq ?)', '50 : 7 = 7 (ост. ?)', '50 : 7 = 7 (rem. ?)'), o: ['1', '7', '3'], a: 0 }] }
      ] },

      { id: 's2', title: L('Hayotiy masalalar', 'Задачи из жизни', 'Real-life problems'), icon: '🚗', color: 'orange', topics: [
        { id: 't4', lessons: L('117–120-darslar', 'Уроки 117–120', 'Lessons 117–120'), title: L('Harakat: masofa, vaqt, tezlik', 'Движение: расстояние, время, скорость', 'Motion: distance, time, speed'),
          keys: ['S = v · t', 'v = S : t', 't = S : v'],
          scene: [{ obj: 'drone', n: 2, color: 'blue' }],
          explain: L('<b>Tezlik</b> — bir soatda (yoki minutda) bosib o‘tilgan yo‘l. Masofa = tezlik · vaqt: 60 km/soat tezlikdagi mashina 3 soatda 180 km yuradi. Tezlik = masofa : vaqt, vaqt = masofa : tezlik.',
            '<b>Скорость</b> — путь за один час (или минуту). Расстояние = скорость · время: машина со скоростью 60 км/ч за 3 часа проедет 180 км. Скорость = расстояние : время, время = расстояние : скорость.',
            '<b>Speed</b> is the distance covered in one hour (or minute). Distance = speed · time: a car at 60 km/h travels 180 km in 3 hours. Speed = distance : time, time = distance : speed.'),
          rule: 'S = v · t · v = S : t · t = S : v',
          acts: [
            { type: 'problem', title: L('Masofani toping', 'Найдите расстояние', 'Find the distance'), make: function (R) { var v = R(4, 9) * 10, t = R(2, 6); return { story: L('Avtobus <b>' + v + '</b> km/soat tezlik bilan <b>' + t + '</b> soat yurdi. <u>Qancha masofa</u> bosib o‘tdi?', 'Автобус ехал <b>' + t + '</b> ч со скоростью <b>' + v + '</b> км/ч. <u>Какое расстояние</u> он проехал?', 'A bus travelled at <b>' + v + '</b> km/h for <b>' + t + '</b> hours. <u>How far</u> did it go?'), cond: [['v', v + ' km/h'], ['t', t + ' h'], ['S', '?']], expr: [v, '·', t, '=', v * t], ans: v * t, unit: KM }; } },
            { type: 'problem', title: L('Tezlikni toping', 'Найдите скорость', 'Find the speed'), make: function (R) { var v = R(3, 9) * 10, t = R(2, 5); return { story: L('Poyezd <b>' + v * t + '</b> km yo‘lni <b>' + t + '</b> soatda bosib o‘tdi. <u>Tezligi</u> qancha?', 'Поезд прошёл <b>' + v * t + '</b> км за <b>' + t + '</b> ч. <u>Какова его скорость</u>?', 'A train covered <b>' + v * t + '</b> km in <b>' + t + '</b> hours. <u>What was its speed</u>?'), expr: [v * t, ':', t, '=', v], ans: v, unit: KMH }; } },
            { type: 'problem', title: L('Vaqtni toping', 'Найдите время', 'Find the time'), make: function (R) { var v = R(2, 9) * 10, t = R(2, 8); return { story: L('Velosipedchi <b>' + v + '</b> km/soat tezlikda <b>' + v * t + '</b> km yurdi. <u>Necha soat</u> yurdi?', 'Велосипедист проехал <b>' + v * t + '</b> км со скоростью <b>' + v + '</b> км/ч. <u>Сколько часов</u> он ехал?', 'A cyclist rode <b>' + v * t + '</b> km at <b>' + v + '</b> km/h. <u>How many hours</u> did it take?'), expr: [v * t, ':', v, '=', t], ans: t, unit: HRS }; } }
          ],
          quiz: [{ q: 'v = 50 km/h, t = 4 h. S = ?', o: ['200', '54', '46'], a: 0 }, { q: 'S = 240 km, t = 3 h. v = ?', o: ['80', '720', '237'], a: 0 }, { q: 'S = 90 km, v = 30 km/h. t = ?', o: ['3', '60', '120'], a: 0 }] },

        { id: 't5', lessons: L('121–124-darslar', 'Уроки 121–124', 'Lessons 121–124'), title: L('Narx, miqdor, qiymat', 'Цена, количество, стоимость', 'Price, quantity, cost'),
          keys: [L('qiymat = narx · miqdor', 'стоимость = цена · количество', 'cost = price · quantity')],
          scene: [{ obj: 'apple', n: 4, color: 'red' }, { obj: 'book', n: 2, color: 'violet' }],
          explain: L('Qiymat = narx · miqdor. Narx = qiymat : miqdor. Miqdor = qiymat : narx. Murakkab masalalarda bir nechta xarid qiymatini qo‘shamiz.',
            'Стоимость = цена · количество. Цена = стоимость : количество. Количество = стоимость : цена. В составных задачах складываем стоимость нескольких покупок.',
            'Cost = price · quantity. Price = cost : quantity. Quantity = cost : price. In multi-step problems we add up the cost of several purchases.'),
          rule: L('Q = N · M · N = Q : M · M = Q : N', 'С = Ц · К · Ц = С : К · К = С : Ц', 'C = P · Q · P = C : Q · Q = C : P'),
          acts: [
            { type: 'problem', title: L('Ikki xarid', 'Две покупки', 'Two purchases'), make: function (R) { var p1 = R(2, 9) * 1000, q1 = R(2, 5), p2 = R(1, 9) * 500, q2 = R(2, 6);
              return { story: L('<b>' + q1 + '</b> ta kitob <b>' + p1 + '</b> so‘mdan va <b>' + q2 + '</b> ta daftar <b>' + p2 + '</b> so‘mdan olindi. <u>Jami qancha</u> to‘landi?', 'Купили <b>' + q1 + '</b> книги по <b>' + p1 + '</b> сум и <b>' + q2 + '</b> тетрадей по <b>' + p2 + '</b> сум. <u>Сколько заплатили всего</u>?', '<b>' + q1 + '</b> books at <b>' + p1 + '</b> sum and <b>' + q2 + '</b> notebooks at <b>' + p2 + '</b> sum. <u>What was the total</u>?'),
                expr: [p1 * q1, '+', p2 * q2, '=', p1 * q1 + p2 * q2], ans: p1 * q1 + p2 * q2, unit: SOM }; } },
            { type: 'problem', title: L('Miqdorni toping', 'Найдите количество', 'Find the quantity'), make: function (R) { var p = R(2, 9) * 500, q = R(2, 9); return { story: L('Har biri <b>' + p + '</b> so‘mlik ruchkalarga <b>' + p * q + '</b> so‘m to‘landi. <u>Nechta ruchka</u> olindi?', 'За ручки по <b>' + p + '</b> сум заплатили <b>' + p * q + '</b> сум. <u>Сколько ручек</u> купили?', '<b>' + p * q + '</b> sum was paid for pens at <b>' + p + '</b> sum each. <u>How many pens</u>?'), expr: [p * q, ':', p, '=', q], ans: q, unit: PCS }; } }
          ],
          quiz: [{ q: L('Narx 2 500, miqdor 4. Qiymat?', 'Цена 2 500, количество 4. Стоимость?', 'Price 2 500, quantity 4. Cost?'), o: ['10000', '2504', '8000'], a: 0 }, { q: L('Qiymat 18 000, narx 3 000. Miqdor?', 'Стоимость 18 000, цена 3 000. Количество?', 'Cost 18 000, price 3 000. Quantity?'), o: ['6', '15000', '54'], a: 0 }] },

        { id: 't6', lessons: L('125–127-darslar', 'Уроки 125–127', 'Lessons 125–127'), title: L('Unumdorlik', 'Производительность', 'Work rate'),
          keys: [L('ish hajmi = unumdorlik · vaqt', 'работа = производительность · время', 'work = rate · time')],
          scene: [{ obj: 'robot', n: 3, color: 'green' }],
          explain: L('<b>Unumdorlik</b> — vaqt birligida bajarilgan ish. Robot soatiga 40 ta detal yasasa, 6 soatda 40 · 6 = 240 ta yasaydi. Ish hajmi = unumdorlik · vaqt.',
            '<b>Производительность</b> — работа за единицу времени. Если робот делает 40 деталей в час, за 6 часов он сделает 40 · 6 = 240. Работа = производительность · время.',
            '<b>Work rate</b> is the work done per unit of time. A robot making 40 parts an hour makes 40 · 6 = 240 in 6 hours. Work = rate · time.'),
          rule: L('A = u · t · u = A : t · t = A : u', 'А = П · t · П = А : t · t = А : П', 'W = r · t · r = W : t · t = W : r'),
          acts: [
            { type: 'problem', make: function (R) { var u = R(2, 9) * 10, t = R(3, 8); return { story: L('Robot soatiga <b>' + u + '</b> ta detal yasaydi. <b>' + t + '</b> soatda <u>nechta</u> yasaydi?', 'Робот делает <b>' + u + '</b> деталей в час. <u>Сколько</u> он сделает за <b>' + t + '</b> часов?', 'A robot makes <b>' + u + '</b> parts an hour. <u>How many</u> in <b>' + t + '</b> hours?'), expr: [u, '·', t, '=', u * t], ans: u * t, unit: PCS }; } },
            { type: 'problem', make: function (R) { var u = R(3, 9) * 5, t = R(2, 8); return { story: L('Usta <b>' + t + '</b> kunda <b>' + u * t + '</b> ta stul yasadi. <u>Bir kunda nechta</u> yasagan?', 'Мастер сделал <b>' + u * t + '</b> стульев за <b>' + t + '</b> дней. <u>Сколько в день</u>?', 'A carpenter made <b>' + u * t + '</b> chairs in <b>' + t + '</b> days. <u>How many a day</u>?'), expr: [u * t, ':', t, '=', u], ans: u, unit: PCS }; } }
          ],
          quiz: [{ q: L('Soatiga 25 ta, 4 soat. Jami?', '25 в час, 4 часа. Всего?', '25 an hour for 4 hours. Total?'), o: ['100', '29', '75'], a: 0 }, { q: L('120 ta ishni 6 soatda. Unumdorlik?', '120 за 6 часов. Производительность?', '120 jobs in 6 hours. Rate?'), o: ['20', '720', '114'], a: 0 }] }
      ] },

      { id: 's3', title: L('To‘plamlar', 'Множества', 'Sets'), icon: '⭕', color: 'violet', topics: [
        { id: 't7', lessons: L('128–130, 132-darslar', 'Уроки 128–130, 132', 'Lessons 128–130, 132'), title: L('To‘plamlar va qismto‘plamlar. Tegishlilik', 'Множества и подмножества. Принадлежность', 'Sets and subsets. Membership'),
          keys: [L('to‘plam', 'множество', 'set'), L('element ∈', 'элемент ∈', 'element ∈'), L('qismto‘plam ⊂', 'подмножество ⊂', 'subset ⊂')],
          scene: [{ obj: 'ball', n: 3, color: 'pink' }, { obj: 'cube', n: 3, color: 'blue' }],
          explain: L('Umumiy xossasi bor narsalar — <b>to‘plam</b>, ular — uning <b>elementlari</b>. 3 ∈ {1, 3, 5} — «3 bu to‘plamga tegishli». Bir to‘plamning hamma elementlari boshqasida ham bo‘lsa — u <b>qismto‘plam</b>: {1, 3} ⊂ {1, 2, 3}.',
            'Предметы с общим свойством образуют <b>множество</b>, они — его <b>элементы</b>. 3 ∈ {1, 3, 5} — «3 принадлежит множеству». Если все элементы одного множества есть в другом — это <b>подмножество</b>: {1, 3} ⊂ {1, 2, 3}.',
            'Things that share a property form a <b>set</b>; they are its <b>elements</b>. 3 ∈ {1, 3, 5} means “3 belongs to the set”. If every element of one set is in another, it is a <b>subset</b>: {1, 3} ⊂ {1, 2, 3}.'),
          rule: '3 ∈ {1, 3, 5} · 4 ∉ {1, 3, 5} · {1, 3} ⊂ {1, 2, 3}',
          acts: [
            { type: 'choose', title: L('Tegishlimi?', 'Принадлежит?', 'Does it belong?'), icon: '∈', make: function (R) { var set = H.distinct(R, 4, 1, 20).sort(function (a, b) { return a - b; }), x = R(0, 1) ? pick(set) : R(1, 20); return choice('<span class="kd-big">' + x + ' ◻ {' + set.join(', ') + '}</span>', ['∈', '∉'], set.indexOf(x) >= 0 ? 0 : 1); } },
            { type: 'choose', title: L('Ortiqcha element', 'Лишний элемент', 'The odd element'), icon: '🔍', make: function () { return pick([
              choice(L('{2, 4, 6, 7, 8} — juft sonlar to‘plamiga qaysi biri tegishli emas?', '{2, 4, 6, 7, 8} — что не принадлежит множеству чётных чисел?', '{2, 4, 6, 7, 8} — which is not an even number?'), ['7', '6', '2'], 0),
              choice(L('{🍎, 🍐, 🥕, 🍌} — mevalar to‘plamiga qaysi biri tegishli emas?', '{🍎, 🍐, 🥕, 🍌} — что не фрукт?', '{🍎, 🍐, 🥕, 🍌} — which is not a fruit?'), ['🥕', '🍐', '🍌'], 0),
              choice(L('{△, □, ○, 5} — shakllar to‘plamiga qaysi biri tegishli emas?', '{△, □, ○, 5} — что не фигура?', '{△, □, ○, 5} — which is not a shape?'), ['5', '○', '□'], 0)]); } }
          ],
          quiz: [{ q: L('{a, b, c} to‘plamida nechta element?', 'Сколько элементов в {a, b, c}?', 'How many elements in {a, b, c}?'), o: ['3', '1', '6'], a: 0 }, { q: '{1, 2} ◻ {1, 2, 3}', o: ['⊂', '∈', '='], a: 0 }] },

        { id: 't8', lessons: L('131, 133–135-darslar', 'Уроки 131, 133–135', 'Lessons 131, 133–135'), title: L('Eyler-Venn diagrammasi. Kesishma va birlashma', 'Диаграмма Эйлера–Венна. Пересечение и объединение', 'Euler–Venn diagrams. Intersection and union'),
          keys: [L('kesishma ∩', 'пересечение ∩', 'intersection ∩'), L('birlashma ∪', 'объединение ∪', 'union ∪')],
          scene: [{ obj: 'ball', n: 2, color: 'blue' }, { obj: 'ball', n: 2, color: 'pink' }],
          explain: L('To‘plamlarni doiralar bilan tasvirlaymiz — bu <b>Eyler-Venn diagrammasi</b>. Ikkala doiraga ham tegishli qism — <b>kesishma</b> (∩). Hamma elementlar birga — <b>birlashma</b> (∪).',
            'Множества изображают кругами — это <b>диаграмма Эйлера–Венна</b>. Общая часть двух кругов — <b>пересечение</b> (∩). Все элементы вместе — <b>объединение</b> (∪).',
            'We draw sets as circles — an <b>Euler–Venn diagram</b>. The part shared by both circles is the <b>intersection</b> (∩). All the elements together are the <b>union</b> (∪).'),
          rule: '{1, 2, 3} ∩ {2, 3, 4} = {2, 3} · {1, 2, 3} ∪ {2, 3, 4} = {1, 2, 3, 4}',
          acts: [
            { type: 'choose', title: L('Kesishmani toping', 'Найдите пересечение', 'Find the intersection'), icon: '∩', make: function (R) { var both = H.distinct(R, 2, 1, 9), rest = H.distinct(R, 6, 10, 30), A = rest.slice(0, 2), B = rest.slice(2, 4);
              return choice(L('A va B to‘plamlarning <b>kesishmasi</b> qaysi?', 'Какое <b>пересечение</b> множеств A и B?', 'What is the <b>intersection</b> of A and B?'), ['{' + both.join(', ') + '}', '{' + A.join(', ') + '}', '{' + B.concat(both).join(', ') + '}'], 0, venn(A, B, both, 'A', 'B')); } },
            { type: 'problem', title: L('Diagramma bo‘yicha masala', 'Задача по диаграмме', 'Diagram problem'), make: function (R) { var a = R(5, 12), b = R(4, 10), both = R(2, 4);
              return { story: L('Sinfda <b>' + (a + both) + '</b> nafar bola futbolga, <b>' + (b + both) + '</b> nafari shaxmatga qatnashadi; <b>' + both + '</b> nafari ikkalasiga ham. Sinfda <u>nechta bola</u> to‘garakka qatnashadi?', 'В классе <b>' + (a + both) + '</b> детей ходят на футбол, <b>' + (b + both) + '</b> — на шахматы; <b>' + both + '</b> — на оба. <u>Сколько детей</u> ходят в кружки?', 'In a class <b>' + (a + both) + '</b> children play football and <b>' + (b + both) + '</b> play chess; <b>' + both + '</b> do both. <u>How many children</u> go to clubs?'),
                expr: [a + both, '+', b + both, '−', both, '=', a + b + both], ans: a + b + both, unit: L('nafar', 'детей', 'children') }; } }
          ],
          quiz: [{ q: '{1, 2, 3} ∩ {3, 4} = ?', o: ['{3}', '{1, 2, 3, 4}', '{4}'], a: 0 }, { q: '{a, b} ∪ {b, c} = ?', o: ['{a, b, c}', '{b}', '{a, c}'], a: 0 }] },

        { id: 't9', lessons: L('136–137-darslar', 'Уроки 136–137', 'Lessons 136–137'), title: L('Mulohazalar', 'Высказывания', 'Statements'),
          keys: [L('rost', 'истинно', 'true'), L('yolg‘on', 'ложно', 'false')],
          scene: [{ obj: 'star', n: 3, color: 'yellow' }],
          explain: L('<b>Mulohaza</b> — rost yoki yolg‘on bo‘lishi mumkin bo‘lgan gap. «7 &gt; 5» — rost, «Kvadratning 3 ta tomoni bor» — yolg‘on. Savol yoki buyruq mulohaza emas.',
            '<b>Высказывание</b> — предложение, которое может быть истинным или ложным. «7 &gt; 5» — истинно, «У квадрата 3 стороны» — ложно. Вопрос или приказ — не высказывание.',
            'A <b>statement</b> is a sentence that is either true or false. “7 &gt; 5” is true; “A square has 3 sides” is false. Questions and commands are not statements.'),
          rule: L('Mulohaza: rost yoki yolg‘on', 'Высказывание: истинно или ложно', 'Statement: true or false'),
          acts: [
            { type: 'choose', title: L('Rostmi?', 'Истинно?', 'True?'), icon: '✅', make: function (R) { var a = R(2, 9), b = R(2, 9), ok = R(0, 1), v = ok ? a * b : a * b + pick([1, -1, a]);
              return choice('<span class="kd-big">' + a + ' · ' + b + ' = ' + v + '</span>', [L('rost', 'истинно', 'true'), L('yolg‘on', 'ложно', 'false')], ok ? 0 : 1); } },
            { type: 'choose', title: L('Mulohazami?', 'Высказывание?', 'A statement?'), icon: '💬', make: function () { return pick([
              choice(L('«Toshkent — O‘zbekiston poytaxti.» Bu...', '«Ташкент — столица Узбекистана.» Это...', '“Tashkent is the capital of Uzbekistan.” This is...'), [L('rost mulohaza', 'истинное высказывание', 'a true statement'), L('yolg‘on mulohaza', 'ложное высказывание', 'a false statement'), L('mulohaza emas', 'не высказывание', 'not a statement')], 0),
              choice(L('«Soat necha bo‘ldi?» Bu...', '«Который час?» Это...', '“What time is it?” This is...'), [L('mulohaza emas', 'не высказывание', 'not a statement'), L('rost mulohaza', 'истинное высказывание', 'a true statement'), L('yolg‘on mulohaza', 'ложное высказывание', 'a false statement')], 0),
              choice(L('«Uchburchakning 4 ta burchagi bor.» Bu...', '«У треугольника 4 угла.» Это...', '“A triangle has 4 angles.” This is...'), [L('yolg‘on mulohaza', 'ложное высказывание', 'a false statement'), L('rost mulohaza', 'истинное высказывание', 'a true statement'), L('mulohaza emas', 'не высказывание', 'not a statement')], 0)]); } }
          ],
          quiz: [{ q: L('«9 juft son» — bu...', '«9 — чётное число» — это...', '“9 is even” is...'), o: [L('yolg‘on', 'ложно', 'false'), L('rost', 'истинно', 'true')], a: 0 }, { q: L('Qaysi biri mulohaza?', 'Что является высказыванием?', 'Which is a statement?'), o: ['5 + 5 = 10', L('Kitobni och!', 'Открой книгу!', 'Open the book!'), L('Necha yoshdasan?', 'Сколько тебе лет?', 'How old are you?')], a: 0 }] }
      ] },

      { id: 's4', title: L('Takrorlash', 'Повторение', 'Review'), icon: '🏁', color: 'green', topics: [
        { id: 't10', lessons: L('138–140-darslar', 'Уроки 138–140', 'Lessons 138–140'), title: L('Takrorlash: sonlar va amallar', 'Повторение: числа и действия', 'Review: numbers and operations'),
          keys: [L('ko‘p xonali sonlar', 'многозначные числа', 'large numbers'), L('ustun', 'столбик', 'column'), L('amallar tartibi', 'порядок действий', 'order of operations')],
          scene: [{ obj: 'flat', n: 3, color: 'green' }],
          explain: L('Yil davomida o‘rganganlarimizni takrorlaymiz: ko‘p xonali sonlar bilan to‘rt amal, amallar tartibi va tenglamalar.',
            'Повторим изученное за год: четыре действия с многозначными числами, порядок действий и уравнения.',
            'Let’s review the year: the four operations with large numbers, order of operations and equations.'),
          rule: L('( ) → · : → + −', '( ) → · : → + −', '( ) → · : → + −'),
          acts: [
            { type: 'column', make: function (R) { var a = R(1000, 6000), b = R(1000, 3999); return R(0, 1) ? { a: a, b: b, op: '+', ans: a + b } : { a: a + b, b: b, op: '-', ans: a }; } },
            { type: 'drill', n: 8, make: function (R) { var a = R(11, 99), k = R(2, 9), x = R(2, 50); return pick([{ q: a + ' · ' + k, a: a * k }, { q: (a * k) + ' : ' + k, a: a }, { q: x + ' + ' + k + ' · ' + a, a: x + k * a }, H.eqDrill(500)(R)]); } }
          ],
          quiz: [{ q: '1 250 + 2 750 = ?', o: ['4000', '3900', '3000'], a: 0 }, { q: '48 · 5 = ?', o: ['240', '200', '53'], a: 0 }, { q: '100 − 4 · 20 = ?', o: ['20', '1920', '80'], a: 0 }] },

        { id: 't11', lessons: L('141–143-darslar', 'Уроки 141–143', 'Lessons 141–143'), title: L('Takrorlash: geometriya, kattaliklar va masalalar', 'Повторение: геометрия, величины и задачи', 'Review: geometry, measures and problems'),
          keys: ['P, S, V', 'S = v · t', L('qiymat', 'стоимость', 'cost')],
          scene: [{ obj: 'box', n: 1, color: 'orange' }, { obj: 'drone', n: 1, color: 'blue' }],
          explain: L('Perimetr, yuz, hajm, o‘lchov birliklari va hayotiy masalalarni takrorlaymiz. Siz 4-sinfga tayyorsiz!',
            'Повторяем периметр, площадь, объём, единицы измерения и задачи из жизни. Вы готовы к 4 классу!',
            'We review perimeter, area, volume, units and real-life problems. You’re ready for Grade 4!'),
          rule: 'P = 2 · (a + b) · S = a · b · V = a · b · c · S = v · t',
          acts: [
            { type: 'polygon', make: function (R) { var a = R(5, 25), b = R(3, a); return { kind: 'rect', sides: [a, b], ans: 2 * (a + b), story: L('<b>Perimetr</b>?', '<b>Периметр</b>?', '<b>Perimeter</b>?') }; } },
            { type: 'coord', make: function (R) { return { x: R(1, 8), y: R(1, 8) }; } },
            { type: 'problem', make: function (R) { var v = R(5, 9) * 10, t = R(2, 4); return { story: L('Mashina <b>' + v + '</b> km/soat tezlikda <b>' + t + '</b> soat yurdi. <u>Masofa</u>?', 'Машина ехала <b>' + t + '</b> ч со скоростью <b>' + v + '</b> км/ч. <u>Расстояние</u>?', 'A car drove at <b>' + v + '</b> km/h for <b>' + t + '</b> hours. <u>Distance</u>?'), expr: [v, '·', t, '=', v * t], ans: v * t, unit: KM }; } }
          ],
          quiz: [{ q: L('V, 2 × 3 × 4 = ?', 'V, 2 × 3 × 4 = ?', 'V, 2 × 3 × 4 = ?'), o: ['24', '9', '20'], a: 0 }, { q: L('1 t = ? kg', '1 т = ? кг', '1 t = ? kg'), o: ['1000', '100', '10'], a: 0 }, { q: L('12 ning 1/3 qismi?', '1/3 от 12?', '1/3 of 12?'), o: ['4', '36', '9'], a: 0 }] },

        { id: 't12', lessons: L('Mantiqiy masalalar', 'Логические задачи', 'Logic puzzles'), title: L('Mantiqiy masalalar', 'Логические задачи', 'Logic puzzles'),
          keys: [L('mantiq', 'логика', 'logic')],
          scene: [{ obj: 'star', n: 5, color: 'yellow' }],
          explain: L('Yil oxirida zukkolik sinovi! Qonuniyatlarni toping, sehrli kvadratni to‘ldiring.',
            'Испытание на смекалку в конце года! Найдите закономерности, заполните магический квадрат.',
            'An end-of-year brain challenge! Spot the patterns and complete the magic square.'),
          rule: L('O‘yla → taxmin qil → tekshir', 'Подумай → предположи → проверь', 'Think → guess → check'),
          acts: [
            { type: 'magic', given: 3 },
            { type: 'choose', title: L('Qonuniyat', 'Закономерность', 'Pattern'), icon: '🔮', make: function (R) { var s = R(1, 9), d = R(3, 12), seq = [s, s + d, s + 2 * d, s + 3 * d]; return choice(mk(function (l) { return { uz: 'Keyingi son?', ru: 'Следующее число?', en: 'Next number?' }[l] + ' <span class="kd-big">' + seq.join(', ') + ', ?</span>'; }), [String(s + 4 * d), String(s + 4 * d + 1), String(s + 3 * d + 1)], 0); } }
          ],
          quiz: [{ q: '1, 4, 9, 16, ?', o: ['25', '20', '24'], a: 0 }, { q: '2, 6, 18, 54, ?', o: ['162', '108', '60'], a: 0 }] }
      ] }
    ]
  };
  C.addPart(part4);
})(this);
