// Nuvemath — 5-sinf, II qism (manba: «Matematika. 5-sinf. II qism», Toshkent, 2024, yangi nashr).
// Boblar va mavzular tartibi darslikdan olingan; tushuntirishlar, topshiriqlar va chizmalar Nuvemath uchun qayta yozilgan.
(function (root) {
  'use strict';
  var C = root.NMCurriculum, H = C.H, L = H.L, mk = H.mk, PCS = H.PCS, choice = H.choice, pick = H.pick;
  var fr = H.fr, dq = H.dq, r6 = H.r6;
  var SOM = L('so‘m', 'сум', 'sum'), DEG = L('°', '°', '°'), KM = L('km', 'км', 'km'), LT = H.LT;
  function fmt(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' '); }
  function pg(a, b) { return b ? L(a + '–' + b + '-betlar', 'Стр. ' + a + '–' + b, 'Pages ' + a + '–' + b) : L(a + '-bet', 'Стр. ' + a, 'Page ' + a); }
  function fig(inner, w, h) { return '<div class="kd-fig"><svg viewBox="0 0 ' + (w || 300) + ' ' + (h || 180) + '">' + inner + '</svg></div>'; }
  var TX = 'font-size="16" font-weight="700" fill="currentColor" text-anchor="middle"', ST = 'stroke="#4f8dff" stroke-width="3" stroke-linecap="round"';
  function pt(cx, cy, r, deg) { var a = deg * Math.PI / 180; return [cx + r * Math.cos(a), cy - r * Math.sin(a)]; }
  function lbl(cx, cy, r, deg, t, col) { var p = pt(cx, cy, r, deg); return '<text x="' + p[0].toFixed(1) + '" y="' + (p[1] + 6).toFixed(1) + '" ' + TX + (col ? ' style="fill:' + col + '"' : '') + '>' + t + '</text>'; }
  function ray(cx, cy, r, deg) { var p = pt(cx, cy, r, deg); return '<line x1="' + cx + '" y1="' + cy + '" x2="' + p[0].toFixed(1) + '" y2="' + p[1].toFixed(1) + '" ' + ST + '/>'; }
  // nuqtadan chiqqan nurlar (gradusda), har bir burchak orasiga yorliq
  function raysFig(dirs, labels) { var cx = 150, cy = 100, s = '<circle cx="150" cy="100" r="5" fill="#ff6b8b"/>'; dirs.forEach(function (d) { s += ray(cx, cy, 95, d); });
    for (var i = 0; i < labels.length; i++) { var a = dirs[i], b = i + 1 < dirs.length ? dirs[i + 1] : dirs[0] + 360, m = (a + b) / 2; s += lbl(cx, cy, 45, m, labels[i], labels[i] === '?' ? '#ff6b8b' : null); }
    return fig(s, 300, 200); }
  function lineFig(a) { return fig('<line x1="15" y1="130" x2="285" y2="130" ' + ST + '/>' + ray(150, 130, 110, a) + '<circle cx="150" cy="130" r="5" fill="#ff6b8b"/>' + lbl(150, 130, 42, a / 2, a + '°') + lbl(150, 130, 42, (a + 180) / 2, '?', '#ff6b8b'), 300, 160); }
  function crossFig(a) { return fig(ray(150, 90, 120, a) + ray(150, 90, 120, a + 180) + ray(150, 90, 120, 0) + ray(150, 90, 120, 180) + '<circle cx="150" cy="90" r="5" fill="#ff6b8b"/>' + lbl(150, 90, 40, a / 2, a + '°') + lbl(150, 90, 40, 180 + a / 2, '?', '#ff6b8b'), 300, 180); }
  function triFig(A, B, Cc) { return fig('<polygon points="30,160 270,160 120,30" fill="rgba(79,141,255,.15)" ' + ST + ' stroke-linejoin="round"/>' +
    '<text x="62" y="152" ' + TX + '>' + A + '</text><text x="236" y="152" ' + TX + '>' + B + '</text><text x="122" y="64" ' + TX + (Cc === '?' ? ' style="fill:#ff6b8b"' : '') + '>' + Cc + '</text>', 300, 180); }
  function quadFig(kind, A, B) { var P = { par: '50,150 230,150 270,40 90,40', trap: '30,150 270,150 200,40 100,40' }[kind];
    return fig('<polygon points="' + P + '" fill="rgba(255,107,139,.14)" stroke="#ff6b8b" stroke-width="3" stroke-linejoin="round"/><text x="' + (kind === 'par' ? 80 : 62) + '" y="142" ' + TX + '>' + A + '</text><text x="' + (kind === 'par' ? 218 : 236) + '" y="142" ' + TX + ' style="fill:#4f8dff">' + B + '</text>', 300, 180); }

  var part2 = {
    grade: 5, part: 2, edition: L('2024-yil yangi nashri', 'Новое издание 2024 г.', '2024 new edition'),
    title: L('O‘nli kasrlar, me’yor, foizlar va geometriya', 'Десятичные дроби, норма, проценты и геометрия', 'Decimals, rates, percentages and geometry'),
    book: L('Matematika, 5-sinf, II qism (Toshkent, 2024)', 'Математика, 5 класс, часть II (Ташкент, 2024)', 'Mathematics, Grade 5, Part II (Tashkent, 2024)'),
    intro: L('Ikkinchi qismda o‘nli kasrlar bilan amallar, me’yor (birlikka to‘g‘ri keladigan miqdor), foizlar va o‘rtacha qiymatni o‘rganamiz. Geometriyada burchaklar, uchburchak va to‘rtburchaklar xossalari bilan tanishamiz.',
      'Во второй части изучаем действия с десятичными дробями, норму (величину на единицу), проценты и среднее значение. В геометрии знакомимся с углами, свойствами треугольников и четырёхугольников.',
      'In Part II we work with decimals, rates (amount per unit), percentages and averages. In geometry we explore angles and the properties of triangles and quadrilaterals.'),
    sections: [
      { id: 's1', title: L('O‘nli kasrlar', 'Десятичные дроби', 'Decimals'), icon: '🔟', color: 'blue', topics: [
        { id: 't1', lessons: pg(2, 16), title: L('O‘nli kasrni 10, 100 va 1000 ga ko‘paytirish va bo‘lish', 'Умножение и деление десятичной дроби на 10, 100 и 1000', 'Multiplying and dividing decimals by 10, 100 and 1000'),
          keys: [L('vergulni surish', 'перенос запятой', 'moving the point'), '· 10 → ⇢', ': 10 → ⇠'],
          scene: [{ obj: 'rod', n: 10, color: 'orange' }, { obj: 'unit', n: 5, color: 'blue' }],
          explain: L('10 ga ko‘paytirganda vergul bir xona <b>o‘ngga</b>, 100 ga — ikki xona, 1000 ga — uch xona suriladi: 3,25 · 100 = 325. Bo‘lishda vergul <b>chapga</b> suriladi: 48,6 : 10 = 4,86; 7 : 1000 = 0,007.',
            'При умножении на 10 запятая сдвигается на один знак <b>вправо</b>, на 100 — на два, на 1000 — на три: 3,25 · 100 = 325. При делении запятая сдвигается <b>влево</b>: 48,6 : 10 = 4,86; 7 : 1000 = 0,007.',
            'Multiplying by 10 moves the decimal point one place <b>right</b>, by 100 two places, by 1000 three: 3.25 · 100 = 325. Dividing moves it <b>left</b>: 48.6 : 10 = 4.86; 7 : 1000 = 0.007.'),
          rule: L('3,25 · 100 = 325 · 48,6 : 10 = 4,86', '3,25 · 100 = 325 · 48,6 : 10 = 4,86', '3.25 · 100 = 325 · 48.6 : 10 = 4.86'),
          acts: [
            { type: 'drill', n: 8, make: function (R) { var x = r6(R(1, 9999) / pick([10, 100])), k = pick([10, 100, 1000]); return R(0, 1) ? { q: dq(function (D) { return D(x) + ' · ' + fmt(k); }), a: r6(x * k) } : { q: dq(function (D) { return D(x) + ' : ' + fmt(k); }), a: r6(x / k) }; } },
            { type: 'choose', title: L('Vergul qayerda?', 'Где запятая?', 'Where is the point?'), icon: '⇄', make: function (R) { var n = R(1001, 9999), k = pick([10, 100]), v = r6(n / 100 * k), w1 = r6(n / 100 / k), w2 = r6(v * 10); return choice(dq(function (D) { return '<span class="kd-big">' + D(n / 100) + ' · ' + k + ' = ?</span>'; }), [dq(function (D) { return D(v); }), dq(function (D) { return D(w1); }), dq(function (D) { return D(w2); })], 0); } }
          ],
          quiz: [{ q: L('3,25 · 100 = ?', '3,25 · 100 = ?', '3.25 · 100 = ?'), o: ['325', L('32,5', '32,5', '32.5'), L('0,0325', '0,0325', '0.0325')], a: 0 }, { q: L('48,6 : 10 = ?', '48,6 : 10 = ?', '48.6 : 10 = ?'), o: [L('4,86', '4,86', '4.86'), '486', L('0,486', '0,486', '0.486')], a: 0 }] },

        { id: 't2', lessons: pg(9, 18), title: L('O‘nli kasrni o‘nlik, yuzlik va mingliklarga ko‘paytirish va bo‘lish', 'Умножение и деление десятичной дроби на десятки, сотни и тысячи', 'Decimals times and divided by tens, hundreds and thousands'),
          keys: ['0,4 · 300 = 0,4 · 3 · 100', '2,4 : 30 = 2,4 : 3 : 10'],
          scene: [{ obj: 'flat', n: 2, color: 'green' }],
          explain: L('300 = 3 · 100, shuning uchun 0,4 · 300 = (0,4 · 3) · 100 = 1,2 · 100 = 120. Bo‘lishda ham bosqichma-bosqich: 2,4 : 30 = (2,4 : 3) : 10 = 0,8 : 10 = 0,08.',
            '300 = 3 · 100, поэтому 0,4 · 300 = (0,4 · 3) · 100 = 1,2 · 100 = 120. Деление тоже по шагам: 2,4 : 30 = (2,4 : 3) : 10 = 0,8 : 10 = 0,08.',
            '300 = 3 · 100, so 0.4 · 300 = (0.4 · 3) · 100 = 1.2 · 100 = 120. Divide in steps too: 2.4 : 30 = (2.4 : 3) : 10 = 0.8 : 10 = 0.08.'),
          rule: L('0,4 · 300 = 120 · 2,4 : 30 = 0,08', '0,4 · 300 = 120 · 2,4 : 30 = 0,08', '0.4 · 300 = 120 · 2.4 : 30 = 0.08'),
          acts: [
            { type: 'drill', n: 8, make: function (R) { var x = r6(R(2, 99) / 10), d = R(2, 9), z = pick([10, 100]); return R(0, 1) ? { q: dq(function (D) { return D(x) + ' · ' + d * z; }), a: r6(x * d * z) } : { q: dq(function (D) { return D(x * d) + ' : ' + d * z; }), a: r6(x / z) }; } },
            { type: 'problem', make: function (R) { var w = r6(R(2, 9) / 10 + R(0, 2)), n = R(2, 9) * 10; return { story: dq(function (D, l) { return { uz: 'Bitta g‘isht <b>' + D(w) + '</b> kg. <b>' + n + '</b> ta g‘ishtning <u>massasi</u>?', ru: 'Один кирпич весит <b>' + D(w) + '</b> кг. <u>Масса</u> <b>' + n + '</b> кирпичей?', en: 'One brick weighs <b>' + D(w) + '</b> kg. <u>Mass</u> of <b>' + n + '</b> bricks?' }[l]; }), expr: [w, '·', n, '=', r6(w * n)], ans: r6(w * n), unit: H.KG }; } }
          ],
          quiz: [{ q: L('0,4 · 300 = ?', '0,4 · 300 = ?', '0.4 · 300 = ?'), o: ['120', '12', '1200'], a: 0 }, { q: L('2,4 : 30 = ?', '2,4 : 30 = ?', '2.4 : 30 = ?'), o: [L('0,08', '0,08', '0.08'), L('0,8', '0,8', '0.8'), '8'], a: 0 }] },

        { id: 't3', lessons: pg(19, 25), title: L('O‘lchov birliklarini almashtirish', 'Перевод единиц измерения', 'Converting units'),
          keys: ['1 km = 1 000 m', '1 m = 100 cm', '1 kg = 1 000 g', '1 l = 1 000 ml'],
          scene: [{ obj: 'weight', n: 2, color: 'orange' }, { obj: 'bucket', n: 1, color: 'blue' }],
          explain: L('Katta birlikdan kichigiga o‘tishda <b>ko‘paytiramiz</b>: 2,5 kg = 2,5 · 1 000 g = 2 500 g. Kichigidan kattasiga — <b>bo‘lamiz</b>: 350 cm = 350 : 100 m = 3,5 m.',
            'Из большей единицы в меньшую — <b>умножаем</b>: 2,5 кг = 2,5 · 1 000 г = 2 500 г. Из меньшей в большую — <b>делим</b>: 350 см = 350 : 100 м = 3,5 м.',
            'From a bigger unit to a smaller one, <b>multiply</b>: 2.5 kg = 2.5 · 1 000 g = 2 500 g. From smaller to bigger, <b>divide</b>: 350 cm = 350 : 100 m = 3.5 m.'),
          rule: L('katta → kichik: ·  ·  kichik → katta: :', 'большая → меньшая: ·  ·  меньшая → большая: :', 'big → small: ·  ·  small → big: :'),
          acts: [
            { type: 'drill', n: 8, make: function (R) { var U = pick([['kg', 'g', 1000, 'кг', 'г'], ['km', 'm', 1000, 'км', 'м'], ['m', 'cm', 100, 'м', 'см'], ['l', 'ml', 1000, 'л', 'мл']]), x = r6(R(11, 99) / 10);
              return R(0, 1) ? { q: dq(function (D, l) { return D(x) + ' ' + (l === 'ru' ? U[3] : U[0]) + ' = ? ' + (l === 'ru' ? U[4] : U[1]); }), a: r6(x * U[2]) } : { q: dq(function (D, l) { return fmt(Math.round(x * U[2])) + ' ' + (l === 'ru' ? U[4] : U[1]) + ' = ? ' + (l === 'ru' ? U[3] : U[0]); }), a: x }; } },
            { type: 'problem', make: function (R) { var a = R(12, 40) * 100, b = R(5, 30) * 100; return { story: L('Sayohatchi birinchi kuni <b>' + fmt(a) + '</b> m, ikkinchi kuni <b>' + fmt(b) + '</b> m yurdi. <u>Jami necha km</u> yurdi?', 'Путешественник прошёл в первый день <b>' + fmt(a) + '</b> м, во второй — <b>' + fmt(b) + '</b> м. <u>Сколько всего км</u>?', 'A hiker walked <b>' + fmt(a) + '</b> m on day 1 and <b>' + fmt(b) + '</b> m on day 2. <u>How many km in all</u>?'), expr: [a + b, ':', 1000, '=', r6((a + b) / 1000)], ans: r6((a + b) / 1000), unit: KM }; } }
          ],
          quiz: [{ q: L('2,5 kg = ? g', '2,5 кг = ? г', '2.5 kg = ? g'), o: ['2500', '250', '25'], a: 0 }, { q: L('350 cm = ? m', '350 см = ? м', '350 cm = ? m'), o: [L('3,5', '3,5', '3.5'), '35', L('0,35', '0,35', '0.35')], a: 0 }] },

        { id: 't4', lessons: pg(26, 32), title: L('O‘nli kasrlarga doir matnli masalalar', 'Задачи с десятичными дробями', 'Word problems with decimals'),
          keys: [L('narx', 'цена', 'price'), L('massa', 'масса', 'mass'), L('masofa', 'расстояние', 'distance')],
          scene: [{ obj: 'apple', n: 4, color: 'green' }],
          explain: L('O‘nli kasrlar hayotda doim uchraydi: 2,5 kg olma, 1,5 l sut, 3,2 km yo‘l. Hisoblashda vergul o‘rniga e’tibor bering va javobni mantiqan tekshiring.',
            'Десятичные дроби встречаются всюду: 2,5 кг яблок, 1,5 л молока, 3,2 км пути. Следите за запятой и проверяйте, разумен ли ответ.',
            'Decimals are everywhere: 2.5 kg of apples, 1.5 l of milk, 3.2 km of road. Watch the decimal point and check the answer makes sense.'),
          rule: L('vergulga e’tibor!', 'следите за запятой!', 'mind the point!'),
          acts: [
            { type: 'problem', make: function (R) { var m = r6(R(1, 4) + pick([0.5, 0.25, 0.75])), p = R(8, 30) * 1000; return { story: dq(function (D, l) { return { uz: '1 kg olma <b>' + fmt(p) + '</b> so‘m. <b>' + D(m) + '</b> kg olma <u>qancha</u> turadi?', ru: '1 кг яблок стоит <b>' + fmt(p) + '</b> сум. <u>Сколько стоят</u> <b>' + D(m) + '</b> кг?', en: '1 kg of apples costs <b>' + fmt(p) + '</b> sum. <u>How much</u> for <b>' + D(m) + '</b> kg?' }[l]; }), expr: [p, '·', m, '=', p * m], ans: p * m, unit: SOM }; } },
            { type: 'problem', make: function (R) { var a = r6(R(11, 49) / 10), b = r6(R(11, 49) / 10); return { story: dq(function (D, l) { return { uz: 'Ip uzunligi <b>' + D(a + b) + '</b> m edi. Undan <b>' + D(b) + '</b> m kesib olindi. <u>Necha metr</u> qoldi?', ru: 'Длина нитки была <b>' + D(a + b) + '</b> м. Отрезали <b>' + D(b) + '</b> м. <u>Сколько метров</u> осталось?', en: 'A string was <b>' + D(a + b) + '</b> m long. <b>' + D(b) + '</b> m was cut off. <u>How many metres</u> are left?' }[l]; }), expr: [r6(a + b), '−', b, '=', a], ans: a, unit: L('m', 'м', 'm') }; } }
          ],
          quiz: [{ q: L('1 kg 10 000 so‘m. 2,5 kg?', '1 кг — 10 000 сум. 2,5 кг?', '1 kg costs 10 000 sum. 2.5 kg?'), o: ['25000', '20500', '2500'], a: 0 }, { q: L('3,2 + 1,8 = ?', '3,2 + 1,8 = ?', '3.2 + 1.8 = ?'), o: ['5', L('4,10', '4,10', '4.10'), L('4,1', '4,1', '4.1')], a: 0 }] }
      ] },

      { id: 's2', title: L('Me’yor', 'Норма', 'Rates'), icon: '⏱️', color: 'orange', topics: [
        { id: 't5', lessons: pg(34, 37), title: L('Me’yorni topish', 'Нахождение нормы', 'Finding a rate'),
          keys: [L('bir birlikka', 'на единицу', 'per unit'), 'km/soat', 'l/min'],
          scene: [{ obj: 'drone', n: 1, color: 'blue' }, { obj: 'bucket', n: 2, color: 'cyan' }],
          explain: L('<b>Me’yor</b> — bir birlikka (1 soat, 1 kg, 1 kishi…) to‘g‘ri keladigan miqdor. Mashina 4 soatda 360 km yursa, me’yor 360 : 4 = 90 km/soat. Nasos 8 minutda 1 200 l suv chiqarsa — 150 l/min.',
            '<b>Норма</b> — величина, приходящаяся на одну единицу (1 час, 1 кг, 1 человек…). Машина за 4 часа проехала 360 км — норма 360 : 4 = 90 км/ч. Насос за 8 минут выкачал 1 200 л — 150 л/мин.',
            'A <b>rate</b> is the amount per one unit (1 hour, 1 kg, 1 person…). A car going 360 km in 4 hours has a rate of 360 : 4 = 90 km/h. A pump moving 1 200 l in 8 minutes runs at 150 l/min.'),
          rule: L('me’yor = jami : birliklar soni', 'норма = всего : число единиц', 'rate = total : number of units'),
          acts: [
            { type: 'problem', make: function (R) { var r = R(5, 15) * 10, t = R(2, 9); return { story: L('Nasos <b>' + t + '</b> minutda <b>' + fmt(r * t) + '</b> l suv chiqardi. Nasos <u>bir minutda</u> necha litr chiqaradi?', 'Насос за <b>' + t + '</b> мин выкачал <b>' + fmt(r * t) + '</b> л воды. <u>Сколько литров в минуту</u>?', 'A pump moved <b>' + fmt(r * t) + '</b> l of water in <b>' + t + '</b> minutes. <u>How many litres per minute</u>?'), expr: [r * t, ':', t, '=', r], ans: r, unit: L('l/min', 'л/мин', 'l/min') }; } },
            { type: 'problem', make: function (R) { var p = R(4, 30) * 500, n = R(2, 9); return { story: L('<b>' + n + '</b> kg shakar <b>' + fmt(p * n) + '</b> so‘m turadi. <u>1 kg</u> shakar narxi?', '<b>' + n + '</b> кг сахара стоят <b>' + fmt(p * n) + '</b> сум. <u>Цена 1 кг</u>?', '<b>' + n + '</b> kg of sugar cost <b>' + fmt(p * n) + '</b> sum. <u>Price of 1 kg</u>?'), expr: [p * n, ':', n, '=', p], ans: p, unit: SOM }; } }
          ],
          quiz: [{ q: L('360 km 4 soatda. Tezlik?', '360 км за 4 ч. Скорость?', '360 km in 4 h. Speed?'), o: ['90', '1440', '356'], a: 0 }, { q: L('1 200 l 8 minutda. l/min?', '1 200 л за 8 мин. л/мин?', '1 200 l in 8 min. l/min?'), o: ['150', '9600', '120'], a: 0 }] },

        { id: 't6', lessons: pg(38, 50), title: L('Me’yorga ko‘ra umumiy miqdor va birliklar sonini topish', 'Общее количество и число единиц по норме', 'Total and number of units from a rate'),
          keys: [L('jami = me’yor · son', 'всего = норма · число', 'total = rate · number'), L('son = jami : me’yor', 'число = всего : норма', 'number = total : rate')],
          scene: [{ obj: 'robot', n: 2, color: 'green' }],
          explain: L('Me’yor ma’lum bo‘lsa: <b>jami</b> = me’yor · birliklar soni (printer minutiga 25 bet — 12 minutda 300 bet). <b>Birliklar soni</b> = jami : me’yor (300 betni 25 betdan — 12 minut).',
            'Если норма известна: <b>всего</b> = норма · число единиц (принтер печатает 25 страниц в минуту — за 12 минут 300 страниц). <b>Число единиц</b> = всего : норма (300 страниц по 25 — 12 минут).',
            'If the rate is known: <b>total</b> = rate · number of units (a printer doing 25 pages a minute prints 300 in 12 minutes). <b>Number of units</b> = total : rate (300 pages at 25 a minute takes 12 minutes).'),
          rule: L('jami = me’yor · son', 'всего = норма · число', 'total = rate · number'),
          acts: [
            { type: 'problem', title: L('Jami', 'Всего', 'Total'), make: function (R) { var r = R(15, 45), t = R(6, 20); return { story: L('Printer minutiga <b>' + r + '</b> bet chop etadi. <b>' + t + '</b> minutda <u>necha bet</u> chop etadi?', 'Принтер печатает <b>' + r + '</b> страниц в минуту. <u>Сколько страниц</u> за <b>' + t + '</b> минут?', 'A printer prints <b>' + r + '</b> pages a minute. <u>How many pages</u> in <b>' + t + '</b> minutes?'), expr: [r, '·', t, '=', r * t], ans: r * t, unit: L('bet', 'стр.', 'pages') }; } },
            { type: 'problem', title: L('Birliklar soni', 'Число единиц', 'Number of units'), make: function (R) { var r = R(4, 12), n = R(5, 25); return { story: L('Har bir shishaga <b>' + r + '</b> dl sharbat quyiladi. <b>' + r * n + '</b> dl sharbatga <u>nechta shisha</u> kerak?', 'В каждую бутылку наливают <b>' + r + '</b> дл сока. <u>Сколько бутылок</u> нужно для <b>' + r * n + '</b> дл?', 'Each bottle takes <b>' + r + '</b> dl of juice. <u>How many bottles</u> for <b>' + r * n + '</b> dl?'), expr: [r * n, ':', r, '=', n], ans: n, unit: PCS }; } }
          ],
          quiz: [{ q: L('Minutiga 25 bet, 12 minut. Jami?', '25 стр./мин, 12 мин. Всего?', '25 pages/min for 12 min. Total?'), o: ['300', '37', '250'], a: 0 }, { q: L('300 bet, minutiga 25. Necha minut?', '300 стр., по 25 в мин. Сколько минут?', '300 pages at 25 a minute. Minutes?'), o: ['12', '275', '7500'], a: 0 }] }
      ] },

      { id: 's3', title: L('Foizlar', 'Проценты', 'Percentages'), icon: '💯', color: 'green', topics: [
        { id: 't7', lessons: pg(52, 61), title: L('Foiz tushunchasi. Kasr, o‘nli kasr va foiz', 'Понятие процента. Дробь, десятичная дробь и процент', 'Percent. Fractions, decimals and percentages'),
          keys: ['1% = 1/100', '50% = 1/2', '25% = 0,25'],
          scene: [{ obj: 'flat', n: 1, color: 'green' }],
          explain: mk(function (l) { var c = l === 'en' ? '.' : ','; return { uz: '<b>Foiz</b> — yuzdan bir qism: 1% = ' + fr(1, 100) + ' = 0' + c + '01. 100 ta katakdan 35 tasi bo‘yalsa — 35%. ' + fr(3, 4) + ' = ' + fr(75, 100) + ' = 0' + c + '75 = 75%. Foizni o‘nli kasrga o‘tkazish uchun 100 ga bo‘lamiz: 40% = 0' + c + '4.',
            ru: '<b>Процент</b> — одна сотая: 1% = ' + fr(1, 100) + ' = 0' + c + '01. Если закрашено 35 клеток из 100 — это 35%. ' + fr(3, 4) + ' = ' + fr(75, 100) + ' = 0' + c + '75 = 75%. Чтобы перевести процент в десятичную дробь, делим на 100: 40% = 0' + c + '4.',
            en: 'A <b>percent</b> is one hundredth: 1% = ' + fr(1, 100) + ' = 0' + c + '01. If 35 of 100 squares are shaded, that is 35%. ' + fr(3, 4) + ' = ' + fr(75, 100) + ' = 0' + c + '75 = 75%. To turn a percent into a decimal, divide by 100: 40% = 0' + c + '4.' }[l]; }),
          rule: L('3/4 = 0,75 = 75%', '3/4 = 0,75 = 75%', '3/4 = 0.75 = 75%'),
          acts: [
            { type: 'choose', title: L('Foizga aylantiring', 'Переведите в проценты', 'Write as a percent'), icon: '%', make: function (R) { var f = pick([[1, 2], [1, 4], [3, 4], [1, 5], [2, 5], [3, 5], [4, 5], [1, 10], [3, 10], [7, 10], [1, 20], [9, 20], [1, 25], [3, 25]]), p = f[0] * 100 / f[1], w = f[0] * 10 + f[1]; if (w === p) w = p + 5;
              return choice('<span class="kd-big">' + fr(f[0], f[1]) + ' = ?</span>', [p + '%', w + '%', (100 - p === p ? p + 10 : 100 - p) + '%'], 0); } },
            { type: 'drill', n: 6, make: function (R) { var p = R(1, 99); return R(0, 1) ? { q: dq(function (D) { return D(p / 100) + ' → %'; }), a: p } : { q: mk(function (l) { return p + '% → ' + { uz: 'o‘nli kasr', ru: 'десятичная дробь', en: 'decimal' }[l]; }), a: r6(p / 100) }; } }
          ],
          quiz: [{ q: fr(3, 4) + ' = ?%', o: ['75', '34', '43'], a: 0 }, { q: L('40% = ? (o‘nli kasr)', '40% = ? (десятичная)', '40% = ? (decimal)'), o: [L('0,4', '0,4', '0.4'), '40', L('0,04', '0,04', '0.04')], a: 0 }] },

        { id: 't8', lessons: pg(62, 68), title: L('Miqdorning foizi', 'Процент от величины', 'A percentage of an amount'),
          keys: ['p% · N = N : 100 · p', '10% = N : 10'],
          scene: [{ obj: 'cube', n: 5, color: 'orange' }],
          explain: L('Sonning foizini topish: songa 100 ga bo‘lib, foiz soniga ko‘paytiramiz. 240 ning 15% i = 240 : 100 · 15 = 36. Qulay usullar: 10% — 10 ga bo‘lish, 50% — yarmi, 25% — chorak.',
            'Чтобы найти процент от числа, делим число на 100 и умножаем на число процентов. 15% от 240 = 240 : 100 · 15 = 36. Удобно: 10% — делим на 10, 50% — половина, 25% — четверть.',
            'To find a percentage of a number, divide by 100 and multiply by the percent. 15% of 240 = 240 : 100 · 15 = 36. Shortcuts: 10% — divide by 10, 50% — half, 25% — a quarter.'),
          rule: L('N ning p% i = N : 100 · p', 'p% от N = N : 100 · p', 'p% of N = N : 100 · p'),
          acts: [
            { type: 'drill', n: 8, make: function (R) { var p = pick([5, 10, 15, 20, 25, 30, 40, 50, 75]), N = R(1, 50) * 20; return { q: mk(function (l) { return { uz: N + ' ning ' + p + '% i', ru: p + '% от ' + N, en: p + '% of ' + N }[l]; }), a: N * p / 100 }; } },
            { type: 'problem', make: function (R) { var p = pick([10, 20, 25, 40, 60]), N = R(2, 12) * 20; return { story: L('Maktabda <b>' + N + '</b> o‘quvchi bor, ularning <b>' + p + '%</b> i to‘garakka qatnashadi. <u>Necha o‘quvchi</u> to‘garakka qatnashadi?', 'В школе <b>' + N + '</b> учеников, <b>' + p + '%</b> из них ходят в кружки. <u>Сколько учеников</u> ходят в кружки?', 'A school has <b>' + N + '</b> pupils and <b>' + p + '%</b> of them go to clubs. <u>How many pupils</u> go to clubs?'), expr: [N, ':', 100, '·', p, '=', N * p / 100], ans: N * p / 100, unit: L('nafar', 'учеников', 'pupils') }; } }
          ],
          quiz: [{ q: L('240 ning 15% i?', '15% от 240?', '15% of 240?'), o: ['36', '24', '16'], a: 0 }, { q: L('80 ning 50% i?', '50% от 80?', '50% of 80?'), o: ['40', '50', '30'], a: 0 }] },

        { id: 't9', lessons: pg(69, 77), title: L('QQS, chegirma va omonat foizi', 'НДС, скидка и процент по вкладу', 'VAT, discounts and savings interest'),
          keys: [L('chegirma', 'скидка', 'discount'), 'QQS 12%', L('omonat', 'вклад', 'deposit')],
          scene: [{ obj: 'medal', n: 2, color: 'yellow' }, { obj: 'box', n: 2, color: 'pink' }],
          explain: L('<b>Chegirma</b>: 200 000 so‘mlik ko‘ylakka 20% chegirma — 40 000 so‘m arzon, 160 000 so‘m to‘laymiz. <b>QQS</b> (qo‘shilgan qiymat solig‘i) narxga qo‘shiladi: 12%. <b>Omonat</b>: bankka 1 000 000 so‘m yillik 20% bilan qo‘yilsa, bir yilda 200 000 so‘m foyda keladi.',
            '<b>Скидка</b>: на рубашку за 200 000 сум скидка 20% — дешевле на 40 000, платим 160 000 сум. <b>НДС</b> (налог на добавленную стоимость) прибавляется к цене: 12%. <b>Вклад</b>: 1 000 000 сум под 20% годовых приносят за год 200 000 сум.',
            '<b>Discount</b>: 20% off a 200 000 sum shirt is 40 000 off, so we pay 160 000 sum. <b>VAT</b> (value added tax) is added to the price: 12%. <b>Savings</b>: 1 000 000 sum at 20% a year earns 200 000 sum in a year.'),
          rule: L('yangi narx = narx − narx : 100 · p', 'новая цена = цена − цена : 100 · p', 'new price = price − price : 100 · p'),
          acts: [
            { type: 'problem', title: L('Chegirma', 'Скидка', 'Discount'), make: function (R) { var P = R(5, 40) * 10000, p = pick([10, 15, 20, 25, 30, 50]), d = P * p / 100; return { story: L('Krossovka <b>' + fmt(P) + '</b> so‘m. Unga <b>' + p + '%</b> chegirma berildi. <u>Yangi narxi</u>? (Chegirma: ' + fmt(d) + ' so‘m.)', 'Кроссовки стоят <b>' + fmt(P) + '</b> сум. Скидка <b>' + p + '%</b>. <u>Новая цена</u>? (Скидка: ' + fmt(d) + ' сум.)', 'Trainers cost <b>' + fmt(P) + '</b> sum with a <b>' + p + '%</b> discount. <u>New price</u>? (Discount: ' + fmt(d) + ' sum.)'), expr: [P, '−', d, '=', P - d], ans: P - d, unit: SOM }; } },
            { type: 'problem', title: L('Omonat', 'Вклад', 'Savings'), make: function (R) { var S = R(1, 20) * 100000, p = pick([10, 15, 20, 25]), g = S * p / 100; return { story: L('Bankka <b>' + fmt(S) + '</b> so‘m yillik <b>' + p + '%</b> bilan qo‘yildi. Bir yildan keyin hisobda <u>qancha</u> bo‘ladi? (Foyda: ' + fmt(g) + ' so‘m.)', 'В банк положили <b>' + fmt(S) + '</b> сум под <b>' + p + '%</b> годовых. <u>Сколько</u> будет на счёте через год? (Доход: ' + fmt(g) + ' сум.)', '<b>' + fmt(S) + '</b> sum is saved at <b>' + p + '%</b> a year. <u>How much</u> is in the account after a year? (Interest: ' + fmt(g) + ' sum.)'), expr: [S, '+', g, '=', S + g], ans: S + g, unit: SOM }; } },
            { type: 'problem', title: L('QQS', 'НДС', 'VAT'), make: function (R) { var P = R(1, 40) * 25000, t = P * 12 / 100; return { story: L('Tovar narxi QQSsiz <b>' + fmt(P) + '</b> so‘m. QQS — <b>12%</b>. <u>QQS miqdori</u> qancha?', 'Цена товара без НДС — <b>' + fmt(P) + '</b> сум. НДС — <b>12%</b>. <u>Сумма НДС</u>?', 'An item costs <b>' + fmt(P) + '</b> sum before VAT. VAT is <b>12%</b>. <u>How much VAT</u>?'), expr: [P, ':', 100, '·', 12, '=', t], ans: t, unit: SOM }; } }
          ],
          quiz: [{ q: L('200 000 ga 20% chegirma. Narx?', '200 000 со скидкой 20%. Цена?', '200 000 with 20% off. Price?'), o: ['160000', '180000', '40000'], a: 0 }, { q: L('100 000 so‘m, yillik 10%. Bir yildan keyin?', '100 000 сум под 10% годовых. Через год?', '100 000 sum at 10% a year. After a year?'), o: ['110000', '100010', '10000'], a: 0 }] }
      ] },

      { id: 's4', title: L('O‘rtacha qiymat', 'Среднее значение', 'Averages'), icon: '📊', color: 'cyan', topics: [
        { id: 't10', lessons: pg(79, 82), title: L('O‘rtacha qiymat tushunchasi', 'Понятие среднего значения', 'What an average is'),
          keys: [L('yig‘indi : soni', 'сумма : количество', 'sum : count')],
          scene: [{ obj: 'cube', n: 3, color: 'blue' }, { obj: 'cube', n: 5, color: 'green' }, { obj: 'cube', n: 4, color: 'orange' }],
          explain: L('<b>O‘rtacha qiymat</b> — barcha qiymatlar yig‘indisini ularning soniga bo‘lish. Ustunlar 3, 5 va 4 kubdan bo‘lsa, ularni tenglashtirsak har birida (3 + 5 + 4) : 3 = 4 kub bo‘ladi.',
            '<b>Среднее значение</b> — сумма всех значений, делённая на их количество. Если в столбиках 3, 5 и 4 кубика, после выравнивания в каждом будет (3 + 5 + 4) : 3 = 4.',
            'The <b>average</b> is the sum of all values divided by how many there are. With towers of 3, 5 and 4 cubes, levelling them gives (3 + 5 + 4) : 3 = 4 in each.'),
          rule: L('o‘rtacha = yig‘indi : soni', 'среднее = сумма : количество', 'average = sum : count'),
          acts: [
            { type: 'problem', make: function (R) { var n = R(3, 4), m = R(40, 90), xs = [], s = 0; for (var i = 0; i < n - 1; i++) { var x = m + R(-15, 15); xs.push(x); s += x; } xs.push(m * n - s);
              var ex = []; xs.forEach(function (x, i) { if (i) ex.push('+'); ex.push(x); }); ex.push(':', n, '=', m);
              return { story: L('O‘quvchining test ballari: <b>' + xs.join(', ') + '</b>. <u>O‘rtacha ball</u>?', 'Баллы ученика за тесты: <b>' + xs.join(', ') + '</b>. <u>Средний балл</u>?', 'A pupil’s test scores: <b>' + xs.join(', ') + '</b>. <u>Average score</u>?'), expr: ex, ans: m, unit: L('ball', 'баллов', 'points') }; } },
            { type: 'count3d', title: L('3D: ustunlarni tenglang', '3D: выровняйте столбики', '3D: level the towers'), make: function (R) { var m = R(3, 6), d = R(1, m - 1), a = m - d, b = m + d, c = m; return { groups: [{ obj: 'cube', n: a, color: 'blue' }, { obj: 'cube', n: b, color: 'green' }, { obj: 'cube', n: c, color: 'orange' }], perRow: 4, story: L('Uchta ustun: <b>' + a + '</b>, <b>' + b + '</b> va <b>' + c + '</b> kub. Tenglashtirsak, har birida <u>nechta</u> bo‘ladi?', 'Три столбика: <b>' + a + '</b>, <b>' + b + '</b> и <b>' + c + '</b> кубиков. Сколько будет <u>в каждом</u> после выравнивания?', 'Three towers: <b>' + a + '</b>, <b>' + b + '</b> and <b>' + c + '</b> cubes. Levelled, <u>how many</u> in each?'), expr: [a, '+', b, '+', c, ':', 3, '=', m], ans: m, unit: PCS }; } }
          ],
          quiz: [{ q: L('3, 5, 4 ning o‘rtachasi?', 'Среднее 3, 5, 4?', 'Average of 3, 5, 4?'), o: ['4', '12', '5'], a: 0 }, { q: L('10, 20, 30, 40 ning o‘rtachasi?', 'Среднее 10, 20, 30, 40?', 'Average of 10, 20, 30, 40?'), o: ['25', '100', '20'], a: 0 }] },

        { id: 't11', lessons: pg(83, 89), title: L('O‘rtacha qiymat, jami qiymat va soni', 'Среднее, сумма и количество', 'Average, total and count'),
          keys: [L('jami = o‘rtacha · soni', 'сумма = среднее · количество', 'total = average · count')],
          scene: [{ obj: 'book', n: 4, color: 'violet' }],
          explain: L('O‘rtacha va soni ma’lum bo‘lsa, jamini topamiz: 5 kunda o‘rtacha 30 bet o‘qilgan bo‘lsa, jami 150 bet. Noma’lum qiymat = jami − ma’lum qiymatlar yig‘indisi.',
            'Зная среднее и количество, находим сумму: если 5 дней читали в среднем по 30 страниц, всего 150 страниц. Неизвестное значение = сумма − сумма известных.',
            'Knowing the average and the count gives the total: 5 days at an average of 30 pages is 150 pages. A missing value = total − the sum of the known values.'),
          rule: L('jami = o‘rtacha · soni', 'сумма = среднее · количество', 'total = average · count'),
          acts: [
            { type: 'problem', title: L('Jami', 'Сумма', 'Total'), make: function (R) { var m = R(15, 60), n = R(3, 7); return { story: L('Lola <b>' + n + '</b> kun davomida kuniga o‘rtacha <b>' + m + '</b> bet kitob o‘qidi. <u>Jami necha bet</u> o‘qidi?', 'Лола <b>' + n + '</b> дней читала в среднем по <b>' + m + '</b> страниц. <u>Сколько всего страниц</u>?', 'Lola read an average of <b>' + m + '</b> pages a day for <b>' + n + '</b> days. <u>How many pages</u> in all?'), expr: [m, '·', n, '=', m * n], ans: m * n, unit: L('bet', 'стр.', 'pages') }; } },
            { type: 'problem', title: L('Noma’lum qiymat', 'Неизвестное значение', 'Missing value'), make: function (R) { var m = R(60, 90), a = m + R(-10, 10), b = m + R(-10, 10), c = 3 * m - a - b; return { story: L('Uch test ballarining o‘rtachasi <b>' + m + '</b>. Birinchisi <b>' + a + '</b>, ikkinchisi <b>' + b + '</b>. <u>Uchinchisi</u>? (Jami: ' + 3 * m + '.)', 'Средний балл за три теста — <b>' + m + '</b>. Первый — <b>' + a + '</b>, второй — <b>' + b + '</b>. <u>Третий</u>? (Сумма: ' + 3 * m + '.)', 'Three tests average <b>' + m + '</b>. The first is <b>' + a + '</b> and the second <b>' + b + '</b>. <u>The third</u>? (Total: ' + 3 * m + '.)'), expr: [3 * m, '−', a, '−', b, '=', c], ans: c, unit: L('ball', 'баллов', 'points') }; } }
          ],
          quiz: [{ q: L('5 kunda o‘rtacha 30. Jami?', 'В среднем 30 за 5 дней. Всего?', 'Average 30 over 5 days. Total?'), o: ['150', '35', '6'], a: 0 }, { q: L('O‘rtacha 10, soni 4, uchtasi 8, 10, 12. To‘rtinchisi?', 'Среднее 10, их 4, три из них 8, 10, 12. Четвёртое?', 'Average 10 of 4 values; three are 8, 10, 12. The fourth?'), o: ['10', '30', '8'], a: 0 }] }
      ] },

      { id: 's5', title: L('Burchaklar', 'Углы', 'Angles'), icon: '📐', color: 'pink', topics: [
        { id: 't12', lessons: pg(91, 99), title: L('To‘g‘ri chiziqdagi burchaklar. Vertikal burchaklar', 'Углы на прямой. Вертикальные углы', 'Angles on a line. Vertically opposite angles'),
          keys: ['180°', L('vertikal burchaklar teng', 'вертикальные углы равны', 'vertical angles are equal')],
          scene: [{ obj: 'rod', n: 2, color: 'pink' }],
          explain: L('To‘g‘ri chiziqdagi bir nuqtada hosil bo‘lgan burchaklar yig‘indisi <b>180°</b>: agar biri 65° bo‘lsa, ikkinchisi 180° − 65° = 115°. Ikki to‘g‘ri chiziq kesishganda qarama-qarshi (vertikal) burchaklar <b>teng</b>.',
            'Сумма углов на прямой в одной точке — <b>180°</b>: если один 65°, другой 180° − 65° = 115°. При пересечении двух прямых противоположные (вертикальные) углы <b>равны</b>.',
            'Angles on a straight line at one point add up to <b>180°</b>: if one is 65°, the other is 180° − 65° = 115°. When two lines cross, opposite (vertical) angles are <b>equal</b>.'),
          rule: L('a + b = 180° · vertikal burchaklar teng', 'a + b = 180° · вертикальные углы равны', 'a + b = 180° · vertical angles are equal'),
          acts: [
            { type: 'problem', title: L('Chiziqdagi burchak', 'Угол на прямой', 'Angle on a line'), make: function (R) { var a = R(4, 16) * 10 + pick([0, 5]); return { story: mk(function (l) { return { uz: '<u>?</u> burchakni toping.', ru: 'Найдите угол <u>?</u>.', en: 'Find the angle <u>?</u>.' }[l] + lineFig(a); }), expr: [180, '−', a, '=', 180 - a], ans: 180 - a, unit: DEG }; } },
            { type: 'choose', title: L('Vertikal burchak', 'Вертикальный угол', 'Vertical angle'), icon: '✖️', make: function (R) { var a = R(3, 7) * 10 + pick([0, 5]); return choice(mk(function (l) { return { uz: 'Ikki to‘g‘ri chiziq kesishdi. <b>?</b> burchak nechaga teng?', ru: 'Две прямые пересеклись. Чему равен угол <b>?</b>?', en: 'Two lines cross. What is angle <b>?</b>?' }[l]; }), [a + '°', (180 - a) + '°', (90 - a !== a ? 90 - a : a + 20) + '°'], 0, crossFig(a)); } }
          ],
          quiz: [{ q: L('Chiziqda: 65° va ?', 'На прямой: 65° и ?', 'On a line: 65° and ?'), o: ['115°', '25°', '65°'], a: 0 }, { q: L('Vertikal burchaklar...', 'Вертикальные углы...', 'Vertical angles are...'), o: [L('teng', 'равны', 'equal'), L('yig‘indisi 90°', 'в сумме 90°', 'add to 90°'), L('har doim 90°', 'всегда 90°', 'always 90°')], a: 0 }] },

        { id: 't13', lessons: pg(100, 109), title: L('Nuqta atrofidagi burchaklar. Noma’lum burchaklar', 'Углы вокруг точки. Неизвестные углы', 'Angles around a point. Missing angles'),
          keys: ['360°', L('to‘liq aylanish', 'полный оборот', 'full turn')],
          scene: [{ obj: 'star', n: 1, color: 'yellow' }],
          explain: L('Bir nuqta atrofidagi barcha burchaklar yig‘indisi — to‘liq aylanish, <b>360°</b>. Agar uchta burchakdan ikkitasi 120° va 150° bo‘lsa, uchinchisi 360° − 120° − 150° = 90°.',
            'Сумма всех углов вокруг одной точки — полный оборот, <b>360°</b>. Если два из трёх углов 120° и 150°, третий равен 360° − 120° − 150° = 90°.',
            'All the angles around a point add up to a full turn, <b>360°</b>. If two of three angles are 120° and 150°, the third is 360° − 120° − 150° = 90°.'),
          rule: 'a + b + c = 360°',
          acts: [
            { type: 'problem', make: function (R) { var a = R(7, 15) * 10, b = R(7, 15) * 10, c = 360 - a - b; return { story: mk(function (l) { return { uz: 'Nuqta atrofidagi <u>?</u> burchakni toping.', ru: 'Найдите угол <u>?</u> вокруг точки.', en: 'Find the angle <u>?</u> around the point.' }[l] + raysFig([90, 90 + a, 90 + a + b], [a + '°', b + '°', '?']); }), expr: [360, '−', a, '−', b, '=', c], ans: c, unit: DEG }; } },
            { type: 'drill', n: 6, make: function (R) { var a = R(2, 16) * 10, b = R(1, 17 - a / 10) * 10; return R(0, 1) ? { q: a + '° + ? = 180°', a: 180 - a } : { q: a + '° + ' + b + '° + ? = 360°', a: 360 - a - b }; } }
          ],
          quiz: [{ q: '120° + 150° + ? = 360°', o: ['90°', '270°', '30°'], a: 0 }, { q: L('To‘liq aylanish?', 'Полный оборот?', 'A full turn?'), o: ['360°', '180°', '90°'], a: 0 }] }
      ] },

      { id: 's6', title: L('Uchburchakning xossalari', 'Свойства треугольника', 'Triangle properties'), icon: '🔺', color: 'violet', topics: [
        { id: 't14', lessons: pg(111, 122), title: L('Uchburchakning turlari. Uchburchak chizish', 'Виды треугольников. Построение', 'Types of triangles. Drawing triangles'),
          keys: [L('o‘tkir, to‘g‘ri, o‘tmas', 'остро-, прямо-, тупоугольный', 'acute, right, obtuse'), L('teng tomonli, teng yonli', 'равносторонний, равнобедренный', 'equilateral, isosceles')],
          scene: [{ obj: 'pyramid', n: 3, color: 'violet' }],
          explain: L('Burchaklari bo‘yicha: hamma burchagi 90° dan kichik — <b>o‘tkir burchakli</b>, bittasi 90° — <b>to‘g‘ri burchakli</b>, bittasi 90° dan katta — <b>o‘tmas burchakli</b>. Tomonlari bo‘yicha: hamma tomoni teng — <b>teng tomonli</b>, ikkitasi teng — <b>teng yonli</b>, hammasi har xil — <b>turli tomonli</b>.',
            'По углам: все углы меньше 90° — <b>остроугольный</b>, один 90° — <b>прямоугольный</b>, один больше 90° — <b>тупоугольный</b>. По сторонам: все равны — <b>равносторонний</b>, две равны — <b>равнобедренный</b>, все разные — <b>разносторонний</b>.',
            'By angles: all under 90° — <b>acute</b>, one is 90° — <b>right</b>, one over 90° — <b>obtuse</b>. By sides: all equal — <b>equilateral</b>, two equal — <b>isosceles</b>, all different — <b>scalene</b>.'),
          rule: L('90° → to‘g‘ri · &gt; 90° → o‘tmas', '90° → прямоугольный · &gt; 90° → тупоугольный', '90° → right · &gt; 90° → obtuse'),
          acts: [
            { type: 'choose', title: L('Burchaklari bo‘yicha', 'По углам', 'By angles'), icon: '📐', make: function (R) { var k = R(0, 2), A, B; if (k === 0) { A = R(50, 80); B = R(50, 85); } else if (k === 1) { A = 90; B = R(20, 70); } else { A = R(100, 140); B = R(10, 175 - A - 5); }
              var Cc = 180 - A - B; return choice(L('Burchaklari <b>' + A + '°, ' + B + '°, ' + Cc + '°</b> bo‘lgan uchburchak qanday?', 'Треугольник с углами <b>' + A + '°, ' + B + '°, ' + Cc + '°</b> —', 'A triangle with angles <b>' + A + '°, ' + B + '°, ' + Cc + '°</b> is'), [L('o‘tkir burchakli', 'остроугольный', 'acute'), L('to‘g‘ri burchakli', 'прямоугольный', 'right-angled'), L('o‘tmas burchakli', 'тупоугольный', 'obtuse')], Math.max(A, B, Cc) < 90 ? 0 : Math.max(A, B, Cc) === 90 ? 1 : 2); } },
            { type: 'choose', title: L('Tomonlari bo‘yicha', 'По сторонам', 'By sides'), icon: '📏', make: function (R) { var k = R(0, 2), a = R(4, 12), s = k === 0 ? [a, a, a] : k === 1 ? [a, a, a + R(1, 3)] : [a, a + 1, a + R(2, 3)];
              return choice(L('Tomonlari <b>' + s.join(', ') + '</b> cm bo‘lgan uchburchak:', 'Треугольник со сторонами <b>' + s.join(', ') + '</b> см —', 'A triangle with sides <b>' + s.join(', ') + '</b> cm is'), [L('teng tomonli', 'равносторонний', 'equilateral'), L('teng yonli', 'равнобедренный', 'isosceles'), L('turli tomonli', 'разносторонний', 'scalene')], k); } }
          ],
          quiz: [{ q: L('Burchaklari 90°, 45°, 45° bo‘lgan uchburchak?', 'Треугольник с углами 90°, 45°, 45°?', 'A triangle with angles 90°, 45°, 45°?'), o: [L('to‘g‘ri burchakli', 'прямоугольный', 'right-angled'), L('o‘tmas burchakli', 'тупоугольный', 'obtuse'), L('teng tomonli', 'равносторонний', 'equilateral')], a: 0 }, { q: L('5, 5, 5 cm tomonli uchburchak?', 'Треугольник со сторонами 5, 5, 5 см?', 'Sides 5, 5, 5 cm?'), o: [L('teng tomonli', 'равносторонний', 'equilateral'), L('turli tomonli', 'разносторонний', 'scalene'), L('o‘tmas burchakli', 'тупоугольный', 'obtuse')], a: 0 }] },

        { id: 't15', lessons: pg(123, 131), title: L('Uchburchakning burchaklari', 'Углы треугольника', 'Angles of a triangle'),
          keys: ['A + B + C = 180°', L('teng yonli: asosdagi burchaklar teng', 'равнобедренный: углы при основании равны', 'isosceles: base angles equal')],
          scene: [{ obj: 'pyramid', n: 1, color: 'orange' }],
          explain: L('Har qanday uchburchak burchaklarining yig‘indisi <b>180°</b>. Uchburchakni qirqib, uchta burchagini yonma-yon qo‘ysak — to‘g‘ri chiziq hosil bo‘ladi! Teng yonli uchburchakda asosdagi ikki burchak teng.',
            'Сумма углов любого треугольника — <b>180°</b>. Если оторвать три угла и сложить их рядом, получится прямая линия! В равнобедренном треугольнике углы при основании равны.',
            'The angles of any triangle add up to <b>180°</b>. Tear off the three corners and put them side by side — they make a straight line! In an isosceles triangle the two base angles are equal.'),
          rule: 'A + B + C = 180°',
          acts: [
            { type: 'problem', make: function (R) { var A = R(3, 9) * 10, B = R(2, 13 - A / 10) * 10, Cc = 180 - A - B; return { story: mk(function (l) { return { uz: 'Uchburchakning <u>?</u> burchagini toping.', ru: 'Найдите угол <u>?</u> треугольника.', en: 'Find the triangle’s angle <u>?</u>.' }[l] + triFig(A + '°', B + '°', '?'); }), expr: [180, '−', A, '−', B, '=', Cc], ans: Cc, unit: DEG }; } },
            { type: 'problem', title: L('Teng yonli uchburchak', 'Равнобедренный треугольник', 'Isosceles triangle'), make: function (R) { var top = R(2, 14) * 10, base = (180 - top) / 2; return { story: L('Teng yonli uchburchakning uchidagi burchagi <b>' + top + '°</b>. Asosidagi <u>har bir burchagi</u>?', 'Угол при вершине равнобедренного треугольника — <b>' + top + '°</b>. <u>Каждый угол при основании</u>?', 'The top angle of an isosceles triangle is <b>' + top + '°</b>. <u>Each base angle</u>?'), expr: [180, '−', top, ':', 2, '=', base], ans: base, unit: DEG }; } }
          ],
          quiz: [{ q: '50° + 60° + ? = 180°', o: ['70°', '80°', '250°'], a: 0 }, { q: L('Teng tomonli uchburchak burchagi?', 'Угол равностороннего треугольника?', 'Each angle of an equilateral triangle?'), o: ['60°', '90°', '45°'], a: 0 }] }
      ] },

      { id: 's7', title: L('Parallelogramm, romb va trapetsiya', 'Параллелограмм, ромб и трапеция', 'Parallelograms, rhombuses and trapezia'), icon: '▱', color: 'green', topics: [
        { id: 't16', lessons: pg(133, 149), title: L('Parallelogramm, romb va trapetsiyaning xossalari', 'Свойства параллелограмма, ромба и трапеции', 'Properties of parallelograms, rhombuses and trapezia'),
          keys: [L('parallel tomonlar', 'параллельные стороны', 'parallel sides'), L('qarama-qarshi burchaklar', 'противолежащие углы', 'opposite angles')],
          scene: [{ obj: 'flat', n: 2, color: 'green' }],
          explain: L('<b>Parallelogramm</b> — qarama-qarshi tomonlari parallel va teng; qarama-qarshi burchaklari teng. <b>Romb</b> — barcha tomonlari teng parallelogramm. <b>Trapetsiya</b> — faqat bir juft tomoni parallel to‘rtburchak.',
            '<b>Параллелограмм</b> — противоположные стороны параллельны и равны; противолежащие углы равны. <b>Ромб</b> — параллелограмм, у которого все стороны равны. <b>Трапеция</b> — четырёхугольник, у которого параллельна только одна пара сторон.',
            'A <b>parallelogram</b> has opposite sides parallel and equal, and opposite angles equal. A <b>rhombus</b> is a parallelogram with all sides equal. A <b>trapezium</b> has exactly one pair of parallel sides.'),
          rule: L('romb ⊂ parallelogramm', 'ромб ⊂ параллелограмм', 'rhombus ⊂ parallelogram'),
          acts: [
            { type: 'choose', title: L('Shaklni aniqlang', 'Определите фигуру', 'Name the shape'), icon: '🔷', make: function () { return pick([
              choice(L('Barcha tomonlari teng, burchaklari 90° emas. Bu...', 'Все стороны равны, углы не 90°. Это...', 'All sides equal, angles not 90°. It is a...'), [L('romb', 'ромб', 'rhombus'), L('trapetsiya', 'трапеция', 'trapezium'), L('to‘g‘ri to‘rtburchak', 'прямоугольник', 'rectangle')], 0),
              choice(L('Faqat bir juft tomoni parallel. Bu...', 'Параллельна только одна пара сторон. Это...', 'Only one pair of sides is parallel. It is a...'), [L('trapetsiya', 'трапеция', 'trapezium'), L('romb', 'ромб', 'rhombus'), L('parallelogramm', 'параллелограмм', 'parallelogram')], 0),
              choice(L('Qarama-qarshi tomonlari parallel va teng. Bu...', 'Противоположные стороны параллельны и равны. Это...', 'Opposite sides parallel and equal. It is a...'), [L('parallelogramm', 'параллелограмм', 'parallelogram'), L('trapetsiya', 'трапеция', 'trapezium'), L('uchburchak', 'треугольник', 'triangle')], 0)]); } },
            { type: 'problem', title: L('Perimetr', 'Периметр', 'Perimeter'), make: function (R) { var k = R(0, 1), a = R(3, 15), b = R(2, 12); return k ? { story: L('Romb tomoni <b>' + a + '</b> cm. <u>Perimetri</u>?', 'Сторона ромба <b>' + a + '</b> см. <u>Периметр</u>?', 'A rhombus has side <b>' + a + '</b> cm. <u>Perimeter</u>?'), expr: [a, '·', 4, '=', 4 * a], ans: 4 * a, unit: H.CM } : { story: L('Parallelogramm tomonlari <b>' + a + '</b> cm va <b>' + b + '</b> cm. <u>Perimetri</u>?', 'Стороны параллелограмма <b>' + a + '</b> см и <b>' + b + '</b> см. <u>Периметр</u>?', 'A parallelogram has sides <b>' + a + '</b> cm and <b>' + b + '</b> cm. <u>Perimeter</u>?'), expr: [a, '+', b, '·', 2, '=', 2 * (a + b)], ans: 2 * (a + b), unit: H.CM }; } }
          ],
          quiz: [{ q: L('Rombning tomonlari...', 'Стороны ромба...', 'A rhombus’s sides are...'), o: [L('hammasi teng', 'все равны', 'all equal'), L('hammasi har xil', 'все разные', 'all different'), L('faqat ikkitasi teng', 'равны только две', 'only two equal')], a: 0 }, { q: L('Trapetsiyada nechta juft parallel tomon?', 'Сколько пар параллельных сторон у трапеции?', 'Pairs of parallel sides in a trapezium?'), o: ['1', '2', '0'], a: 0 }] },

        { id: 't17', lessons: pg(150, 156), title: L('To‘rtburchakning noma’lum burchaklarini topish', 'Неизвестные углы четырёхугольника', 'Missing angles in quadrilaterals'),
          keys: ['A + B + C + D = 360°', L('qo‘shni burchaklar: 180°', 'соседние углы: 180°', 'adjacent angles: 180°')],
          scene: [{ obj: 'flat', n: 1, color: 'pink' }],
          explain: L('To‘rtburchak burchaklarining yig‘indisi <b>360°</b>. Parallelogrammda qo‘shni burchaklar yig‘indisi 180°: biri 70° bo‘lsa, qo‘shnisi 110°. Trapetsiyada yon tomonga yopishgan ikki burchak yig‘indisi ham 180°.',
            'Сумма углов четырёхугольника — <b>360°</b>. В параллелограмме сумма соседних углов 180°: если один 70°, соседний 110°. В трапеции два угла при боковой стороне тоже в сумме 180°.',
            'A quadrilateral’s angles add up to <b>360°</b>. In a parallelogram neighbouring angles add to 180°: if one is 70°, its neighbour is 110°. In a trapezium the two angles along a slanted side also add to 180°.'),
          rule: L('qo‘shni burchaklar: a + b = 180°', 'соседние углы: a + b = 180°', 'adjacent angles: a + b = 180°'),
          acts: [
            { type: 'problem', title: L('Parallelogramm', 'Параллелограмм', 'Parallelogram'), make: function (R) { var a = R(5, 8) * 10 + pick([0, 5]); return { story: mk(function (l) { return { uz: 'Parallelogrammning bitta burchagi <b>' + a + '°</b>. Unga <u>qo‘shni burchak</u>?', ru: 'Один угол параллелограмма — <b>' + a + '°</b>. <u>Соседний угол</u>?', en: 'One angle of a parallelogram is <b>' + a + '°</b>. <u>The neighbouring angle</u>?' }[l] + quadFig('par', a + '°', '?'); }), expr: [180, '−', a, '=', 180 - a], ans: 180 - a, unit: DEG }; } },
            { type: 'problem', title: L('To‘rtburchak', 'Четырёхугольник', 'Quadrilateral'), make: function (R) { var a = R(6, 12) * 10, b = R(6, 12) * 10, c = R(6, 10) * 10, d = 360 - a - b - c; return { story: L('To‘rtburchakning uchta burchagi <b>' + a + '°</b>, <b>' + b + '°</b> va <b>' + c + '°</b>. <u>To‘rtinchisi</u>?', 'Три угла четырёхугольника — <b>' + a + '°</b>, <b>' + b + '°</b> и <b>' + c + '°</b>. <u>Четвёртый</u>?', 'Three angles of a quadrilateral are <b>' + a + '°</b>, <b>' + b + '°</b> and <b>' + c + '°</b>. <u>The fourth</u>?'), expr: [360, '−', a, '−', b, '−', c, '=', d], ans: d, unit: DEG }; } }
          ],
          quiz: [{ q: L('Parallelogramm: 70° ning qo‘shnisi?', 'Параллелограмм: соседний к 70°?', 'Parallelogram: neighbour of 70°?'), o: ['110°', '70°', '290°'], a: 0 }, { q: '90° + 90° + 100° + ? = 360°', o: ['80°', '100°', '90°'], a: 0 }] }
      ] }
    ]
  };
  C.addPart(part2);
})(this);
