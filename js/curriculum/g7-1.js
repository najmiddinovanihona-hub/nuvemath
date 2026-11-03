// Nuvemath — 7-sinf, I qism (manba: Chou Vai Keung, Huo Da, Ng Kok Min. «Matematika. Tadqiqot va kashfiyot. 7-sinf. I qism», Toshkent, 2026).
// Boblar va mavzular tartibi darslikdan olingan; tushuntirishlar, topshiriqlar va chizmalar Nuvemath uchun qayta yozilgan.
(function (root) {
  'use strict';
  var C = root.NMCurriculum, H = C.H, L = H.L, mk = H.mk, PCS = H.PCS, choice = H.choice, pick = H.pick;
  var fr = H.fr, dq = H.dq, r6 = H.r6, gcd = H.gcd;
  var SOM = L('so‘m', 'сум', 'sum'), DEG = L('°', '°', '°');
  function ch(n) { return L(n + '-bob', 'Глава ' + n, 'Chapter ' + n); }
  function ns(x) { return x < 0 ? '−' + (-x) : String(x); }          // −5
  function ps(x) { return x < 0 ? '(−' + (-x) + ')' : String(x); }    // (−5)
  function lcm(a, b) { return a / gcd(a, b) * b; }
  function factor(n) { var f = [], p = 2; while (n > 1) { while (n % p === 0) { f.push(p); n /= p; } p++; } return f; }
  function powStr(n) { var f = factor(n), m = {}, o = []; f.forEach(function (p) { m[p] = (m[p] || 0) + 1; }); Object.keys(m).forEach(function (p) { o.push(p + (m[p] > 1 ? '<sup>' + m[p] + '</sup>' : '')); }); return o.join(' · '); }
  function fig(inner, w, h) { return '<div class="kd-fig"><svg viewBox="0 0 ' + (w || 300) + ' ' + (h || 180) + '">' + inner + '</svg></div>'; }
  var TX = 'font-size="15" font-weight="700" fill="currentColor" text-anchor="middle"', ST = 'stroke="#4f8dff" stroke-width="3" stroke-linecap="round"';
  function pt(cx, cy, r, deg) { var a = deg * Math.PI / 180; return [cx + r * Math.cos(a), cy - r * Math.sin(a)]; }
  function lbl(cx, cy, r, deg, t, q) { var p = pt(cx, cy, r, deg); return '<text x="' + p[0].toFixed(1) + '" y="' + (p[1] + 5).toFixed(1) + '" ' + TX + (q ? ' style="fill:#ff6b8b"' : '') + '>' + t + '</text>'; }
  // ikki parallel to'g'ri chiziq va kesuvchi; a — o'tkir burchak; s1/s2 — sektorlar (0: yuqori-o'ng, 1: yuqori-chap, 2: pastki-chap, 3: pastki-o'ng)
  function parFig(a, s1, s2, v1) { var t = Math.tan(a * Math.PI / 180), x1 = 150 + 40 / t, x2 = 150 - 40 / t, mids = [a / 2, 90 + a / 2, 180 + a / 2, 270 + a / 2];
    var e1 = pt(x1, 60, 70, a), e2 = pt(x2, 140, 70, 180 + a);
    return fig('<line x1="20" y1="60" x2="280" y2="60" ' + ST + '/><line x1="20" y1="140" x2="280" y2="140" ' + ST + '/><line x1="' + e2[0].toFixed(1) + '" y1="' + e2[1].toFixed(1) + '" x2="' + e1[0].toFixed(1) + '" y2="' + e1[1].toFixed(1) + '" stroke="#ff6b8b" stroke-width="3"/>' +
      '<text x="270" y="52" ' + TX + '>a</text><text x="270" y="132" ' + TX + '>b</text>' + lbl(x1, 60, 30, mids[s1], v1 + '°') + lbl(x2, 140, 30, mids[s2], '?', true), 300, 200); }

  var part1 = {
    grade: 7, part: 1, edition: L('2026-yil nashri', 'Издание 2026 г.', '2026 edition'),
    title: L('Matematika: sonlar, algebra asoslari va geometriya', 'Математика: числа, основы алгебры и геометрия', 'Mathematics: numbers, algebra basics and geometry'),
    book: L('Chou Vai Keung va boshq. Matematika. Tadqiqot va kashfiyot, 7-sinf, I qism (Toshkent, 2026)', 'Чоу Вай Кенг и др. Математика. Исследование и открытие, 7 класс, часть I (Ташкент, 2026)', 'Chou Wai Keung et al. Mathematics. Inquiry and Discovery, Grade 7, Part I (Tashkent, 2026)'),
    intro: L('Yangi darslik: tub sonlar va EKUB/EKUK, manfiy va haqiqiy sonlar, yaxlitlash, algebraik almashtirishlar, chiziqli tenglamalar, burchaklar va parallel to‘g‘ri chiziqlar, ko‘pburchaklar.',
      'Новый учебник: простые числа и НОД/НОК, отрицательные и действительные числа, округление, алгебраические преобразования, линейные уравнения, углы и параллельные прямые, многоугольники.',
      'The new textbook: primes, HCF and LCM, negative and real numbers, rounding, algebraic manipulation, linear equations, angles and parallel lines, polygons.'),
    sections: [
      { id: 's1', title: L('Sonning ko‘paytuvchilari va karralilari', 'Делители и кратные', 'Factors and multiples'), icon: '🔢', color: 'blue', topics: [
        { id: 't1', lessons: ch(1), title: L('Tub sonlar, tub ko‘paytuvchilarga ajratish va daraja', 'Простые числа, разложение на множители и степени', 'Primes, prime factorisation and powers'),
          keys: [L('tub son', 'простое число', 'prime'), '72 = 2³ · 3²'],
          scene: [{ obj: 'cube', n: 2, color: 'blue' }, { obj: 'cube', n: 3, color: 'green' }],
          explain: L('<b>Tub son</b> faqat 1 ga va o‘ziga bo‘linadi: 2, 3, 5, 7, 11, 13… Har qanday murakkab son tub ko‘paytuvchilarga yagona tarzda ajraladi: 72 = 2 · 2 · 2 · 3 · 3 = 2³ · 3². Bir xil ko‘paytuvchilarni daraja bilan yozamiz.',
            '<b>Простое число</b> делится только на 1 и на себя: 2, 3, 5, 7, 11, 13… Любое составное число единственным образом раскладывается на простые множители: 72 = 2 · 2 · 2 · 3 · 3 = 2³ · 3². Одинаковые множители записываем степенью.',
            'A <b>prime</b> divides only by 1 and itself: 2, 3, 5, 7, 11, 13… Every composite number splits into primes in exactly one way: 72 = 2 · 2 · 2 · 3 · 3 = 2³ · 3². Repeated factors are written as powers.'),
          rule: '72 = 2³ · 3²',
          acts: [
            { type: 'choose', title: L('Tub sonni toping', 'Найдите простое число', 'Find the prime'), icon: '🔍', make: function (R) { var P = [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97], Cm = [21, 27, 33, 39, 49, 51, 57, 63, 69, 77, 81, 87, 91, 93, 95], a = pick(P), b = pick(Cm), c = pick(Cm); while (c === b) c = pick(Cm); return choice(L('Qaysi son <b>tub</b>?', 'Какое число <b>простое</b>?', 'Which number is <b>prime</b>?'), [String(a), String(b), String(c)], 0); } },
            { type: 'choose', title: L('Tub ko‘paytuvchilar', 'Простые множители', 'Prime factors'), icon: '🌳', make: function (R) { var n = pick([12, 18, 20, 24, 28, 36, 40, 45, 48, 54, 60, 72, 84, 90, 96, 100, 108, 120]), f = factor(n), w1 = pick([n / 2 + ' · 2', '2 · ' + n / 2]), w2 = f.slice(1).join(' · ');
              return choice('<span class="kd-big">' + n + ' = ?</span>', [powStr(n), w1, w2 === powStr(n) ? f.join(' + ') : w2], 0); } },
            { type: 'drill', title: L('Darajani hisoblang', 'Вычислите степень', 'Evaluate the power'), n: 6, make: function (R) { var b = R(2, 9), e = R(2, b < 5 ? 5 : 3); return { q: b + '<sup>' + e + '</sup>', a: Math.pow(b, e) }; } }
          ],
          quiz: [{ q: L('Qaysi son tub?', 'Какое число простое?', 'Which is prime?'), o: ['29', '27', '39'], a: 0 }, { q: '72 = ?', o: ['2³ · 3²', '2² · 3³', '8 · 3²'], a: 0 }] },

        { id: 't2', lessons: ch(1), title: L('EKUB va EKUK', 'НОД и НОК', 'HCF and LCM'),
          keys: [L('EKUB — eng katta umumiy bo‘luvchi', 'НОД — наибольший общий делитель', 'HCF — highest common factor'), L('EKUK — eng kichik umumiy karrali', 'НОК — наименьшее общее кратное', 'LCM — lowest common multiple')],
          scene: [{ obj: 'cube', n: 4, color: 'orange' }, { obj: 'cube', n: 6, color: 'violet' }],
          explain: L('24 = 2³ · 3 va 36 = 2² · 3². <b>EKUB</b> — umumiy tub ko‘paytuvchilarning eng kichik darajalari: 2² · 3 = 12. <b>EKUK</b> — barcha ko‘paytuvchilarning eng katta darajalari: 2³ · 3² = 72. Tekshiruv: EKUB · EKUK = 24 · 36.',
            '24 = 2³ · 3 и 36 = 2² · 3². <b>НОД</b> — общие простые множители в наименьших степенях: 2² · 3 = 12. <b>НОК</b> — все множители в наибольших степенях: 2³ · 3² = 72. Проверка: НОД · НОК = 24 · 36.',
            '24 = 2³ · 3 and 36 = 2² · 3². The <b>HCF</b> takes common primes to the lowest powers: 2² · 3 = 12. The <b>LCM</b> takes every prime to the highest power: 2³ · 3² = 72. Check: HCF · LCM = 24 · 36.'),
          rule: L('EKUB(a, b) · EKUK(a, b) = a · b', 'НОД(a, b) · НОК(a, b) = a · b', 'HCF(a, b) · LCM(a, b) = a · b'),
          acts: [
            { type: 'drill', n: 8, make: function (R) { var g = R(2, 12), a = g * R(1, 9), b = g * R(1, 9); while (a === b) b = g * R(1, 9); return R(0, 1) ? { q: mk(function (l) { return { uz: 'EKUB', ru: 'НОД', en: 'HCF' }[l] + '(' + a + ', ' + b + ')'; }), a: gcd(a, b) } : { q: mk(function (l) { return { uz: 'EKUK', ru: 'НОК', en: 'LCM' }[l] + '(' + a + ', ' + b + ')'; }), a: lcm(a, b) }; } },
            { type: 'problem', title: L('Avtobuslar', 'Автобусы', 'Buses'), make: function (R) { var a = pick([6, 8, 10, 12, 15]), b = pick([9, 10, 12, 18, 20]); while (b === a) b = pick([9, 10, 12, 18, 20]); return { story: L('Bekatdan bir avtobus har <b>' + a + '</b> minutda, ikkinchisi har <b>' + b + '</b> minutda jo‘naydi. Ular soat 8:00 da birga jo‘nadi. <u>Necha minutdan keyin</u> yana birga jo‘naydi?', 'С остановки один автобус уходит каждые <b>' + a + '</b> мин, другой — каждые <b>' + b + '</b> мин. В 8:00 они ушли вместе. <u>Через сколько минут</u> снова уйдут вместе?', 'One bus leaves every <b>' + a + '</b> min and another every <b>' + b + '</b> min. They left together at 8:00. <u>After how many minutes</u> do they leave together again?'), expr: [a, '·', b, ':', gcd(a, b), '=', lcm(a, b)], ans: lcm(a, b), unit: L('min', 'мин', 'min') }; } }
          ],
          quiz: [{ q: L('EKUB(24, 36)?', 'НОД(24, 36)?', 'HCF(24, 36)?'), o: ['12', '6', '72'], a: 0 }, { q: L('EKUK(4, 6)?', 'НОК(4, 6)?', 'LCM(4, 6)?'), o: ['12', '24', '2'], a: 0 }] },

        { id: 't3', lessons: ch(1), title: L('Kvadrat ildiz va kub ildiz', 'Квадратный и кубический корень', 'Square roots and cube roots'),
          keys: ['√49 = 7', '∛64 = 4'],
          scene: [{ obj: 'cube', n: 8, color: 'cyan' }],
          explain: L('<b>Kvadrat ildiz</b>: √49 = 7, chunki 7² = 49. <b>Kub ildiz</b>: ∛64 = 4, chunki 4³ = 64. Tub ko‘paytuvchilar yordam beradi: 144 = 2⁴ · 3² → √144 = 2² · 3 = 12.',
            '<b>Квадратный корень</b>: √49 = 7, так как 7² = 49. <b>Кубический корень</b>: ∛64 = 4, так как 4³ = 64. Помогают простые множители: 144 = 2⁴ · 3² → √144 = 2² · 3 = 12.',
            '<b>Square root</b>: √49 = 7 because 7² = 49. <b>Cube root</b>: ∛64 = 4 because 4³ = 64. Prime factors help: 144 = 2⁴ · 3² → √144 = 2² · 3 = 12.'),
          rule: '√a² = a · ∛a³ = a',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var a = R(2, 20), b = R(2, 10); return R(0, 2) ? { q: '√' + a * a, a: a } : { q: '∛' + b * b * b, a: b }; } },
            { type: 'problem', title: L('Kvadrat maydon', 'Квадратная площадка', 'Square plot'), make: function (R) { var a = R(5, 30); return { story: L('Kvadrat shaklidagi maydon yuzi <b>' + a * a + '</b> m². Uning <u>tomoni</u>?', 'Площадь квадратной площадки <b>' + a * a + '</b> м². <u>Её сторона</u>?', 'A square plot has area <b>' + a * a + '</b> m². <u>Its side</u>?'), expr: [a * a, ':', a, '=', a], ans: a, unit: L('m', 'м', 'm') }; } }
          ],
          quiz: [{ q: '√144 = ?', o: ['12', '72', '14'], a: 0 }, { q: '∛125 = ?', o: ['5', '25', '15'], a: 0 }] }
      ] },

      { id: 's2', title: L('Haqiqiy sonlar', 'Действительные числа', 'Real numbers'), icon: '➖', color: 'pink', topics: [
        { id: 't4', lessons: ch(2), title: L('Manfiy sonlar va sonlar o‘qi', 'Отрицательные числа и числовая ось', 'Negative numbers and the number line'),
          keys: [L('manfiy', 'отрицательное', 'negative'), L('modul |a|', 'модуль |a|', 'absolute value |a|'), L('qarama-qarshi son', 'противоположное число', 'opposite')],
          scene: [{ obj: 'rod', n: 3, color: 'pink' }],
          explain: L('Noldan kichik sonlar — <b>manfiy</b>: −3 °C, dengiz sathidan −20 m. Sonlar o‘qida ular noldan chapda. −5 va 5 — <b>qarama-qarshi</b> sonlar. Sonning <b>moduli</b> — noldan masofa: |−5| = 5. O‘qda o‘ngdagi son katta: −2 &gt; −7.',
            'Числа меньше нуля — <b>отрицательные</b>: −3 °C, −20 м ниже уровня моря. На числовой оси они левее нуля. −5 и 5 — <b>противоположные</b> числа. <b>Модуль</b> — расстояние до нуля: |−5| = 5. Правее на оси — больше: −2 &gt; −7.',
            'Numbers below zero are <b>negative</b>: −3 °C, 20 m below sea level. On the number line they sit left of zero. −5 and 5 are <b>opposites</b>. The <b>absolute value</b> is the distance from zero: |−5| = 5. Further right is bigger: −2 &gt; −7.'),
          rule: '−2 &gt; −7 · |−5| = 5',
          acts: [
            { type: 'choose', title: L('Taqqoslang', 'Сравните', 'Compare'), icon: '⚖️', make: function (R) { var a = R(-20, 15), b = R(-20, 15); while (b === a) b = R(-20, 15); return choice('<span class="kd-big">' + ns(a) + ' ◻ ' + ns(b) + '</span>', ['&gt;', '&lt;'], a > b ? 0 : 1); } },
            { type: 'drill', n: 6, make: function (R) { var a = R(1, 50); return R(0, 1) ? { q: '|−' + a + '|', a: a } : { q: mk(function (l) { return { uz: '−' + a + ' ga qarama-qarshi son', ru: 'число, противоположное −' + a, en: 'the opposite of −' + a }[l]; }), a: a }; } },
            { type: 'problem', title: L('Harorat', 'Температура', 'Temperature'), make: function (R) { var a = R(-12, -1), d = R(3, 15); return { story: L('Ertalab harorat <b>' + ns(a) + ' °C</b> edi, kunduzi <b>' + d + '</b> °C ga ko‘tarildi. <u>Kunduzgi harorat</u>?', 'Утром было <b>' + ns(a) + ' °C</b>, днём потеплело на <b>' + d + '</b> °C. <u>Дневная температура</u>?', 'It was <b>' + ns(a) + ' °C</b> in the morning and rose by <b>' + d + '</b> °C. <u>Daytime temperature</u>?'), expr: [a, '+', d, '=', a + d], ans: a + d, unit: '°C' }; } }
          ],
          quiz: [{ q: '−2 ◻ −7', o: ['&gt;', '&lt;', '='], a: 0 }, { q: '|−8| = ?', o: ['8', '−8', '0'], a: 0 }] },

        { id: 't5', lessons: ch(2), title: L('Butun sonlarni qo‘shish va ayirish', 'Сложение и вычитание целых чисел', 'Adding and subtracting integers'),
          keys: ['−3 + 5 = 2', 'a − b = a + (−b)'],
          scene: [{ obj: 'ball', n: 3, color: 'pink' }, { obj: 'ball', n: 5, color: 'blue' }],
          explain: L('Ishoralari bir xil — modullarni qo‘shib, ishorani saqlaymiz: −3 + (−4) = −7. Ishoralari har xil — kattadan kichikni ayiramiz, kattasining ishorasini olamiz: −8 + 5 = −3. Ayirish — qarama-qarshi sonni qo‘shish: 4 − (−6) = 4 + 6 = 10.',
            'Знаки одинаковые — складываем модули и сохраняем знак: −3 + (−4) = −7. Знаки разные — из большего модуля вычитаем меньший, берём знак большего: −8 + 5 = −3. Вычитание — это прибавление противоположного: 4 − (−6) = 4 + 6 = 10.',
            'Same signs: add the sizes and keep the sign: −3 + (−4) = −7. Different signs: subtract the smaller size from the larger and take the larger’s sign: −8 + 5 = −3. Subtracting is adding the opposite: 4 − (−6) = 4 + 6 = 10.'),
          rule: 'a − (−b) = a + b',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var a = R(-20, 20), b = R(-20, 20); return R(0, 1) ? { q: ns(a) + ' + ' + ps(b), a: a + b } : { q: ns(a) + ' − ' + ps(b), a: a - b }; } },
            { type: 'problem', title: L('Lift', 'Лифт', 'The lift'), make: function (R) { var a = R(1, 9), d = R(a + 1, a + 4); return { story: L('Lift <b>' + a + '</b>-qavatda edi, <b>' + d + '</b> qavat pastga tushdi (yerto‘la qavatlari manfiy). <u>Qaysi qavatda</u>?', 'Лифт был на <b>' + a + '</b>-м этаже и опустился на <b>' + d + '</b> этажей (подземные этажи — отрицательные). <u>На каком этаже</u>?', 'A lift was on floor <b>' + a + '</b> and went down <b>' + d + '</b> floors (basement floors are negative). <u>Which floor</u>?'), expr: [a, '−', d, '=', a - d], ans: a - d, unit: '' }; } }
          ],
          quiz: [{ q: '−8 + 5 = ?', o: ['−3', '3', '−13'], a: 0 }, { q: '4 − (−6) = ?', o: ['10', '−2', '2'], a: 0 }] },

        { id: 't6', lessons: ch(2), title: L('Butun sonlarni ko‘paytirish va bo‘lish', 'Умножение и деление целых чисел', 'Multiplying and dividing integers'),
          keys: ['(−) · (−) = (+)', '(−) · (+) = (−)'],
          scene: [{ obj: 'cube', n: 4, color: 'violet' }],
          explain: L('Ishoralari bir xil bo‘lsa, natija <b>musbat</b>: (−3) · (−4) = 12. Har xil bo‘lsa — <b>manfiy</b>: (−3) · 4 = −12, (−20) : 5 = −4. Juft sondagi manfiy ko‘paytuvchi — musbat, toq sonda — manfiy.',
            'При одинаковых знаках результат <b>положительный</b>: (−3) · (−4) = 12. При разных — <b>отрицательный</b>: (−3) · 4 = −12, (−20) : 5 = −4. Чётное число отрицательных множителей — плюс, нечётное — минус.',
            'Same signs give a <b>positive</b> result: (−3) · (−4) = 12. Different signs give a <b>negative</b>: (−3) · 4 = −12, (−20) : 5 = −4. An even number of negative factors gives plus, an odd number gives minus.'),
          rule: '(−a) · (−b) = ab',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var a = R(-12, 12) || 3, b = R(-9, 9) || -2; return R(0, 1) ? { q: ps(a) + ' · ' + ps(b), a: a * b } : { q: ps(a * b) + ' : ' + ps(b), a: a }; } },
            { type: 'choose', title: L('Ishorani aniqlang', 'Определите знак', 'Find the sign'), icon: '±', make: function (R) { var k = R(1, 5), parts = []; for (var i = 0; i < 4; i++) parts.push(i < k % 5 ? '(−' + R(1, 9) + ')' : String(R(1, 9))); var neg = parts.filter(function (x) { return x[0] === '('; }).length;
              return choice('<span class="kd-big">' + parts.join(' · ') + '</span>', [L('musbat', 'положительное', 'positive'), L('manfiy', 'отрицательное', 'negative')], neg % 2 ? 1 : 0); } }
          ],
          quiz: [{ q: '(−3) · (−4) = ?', o: ['12', '−12', '−7'], a: 0 }, { q: '(−20) : 5 = ?', o: ['−4', '4', '−15'], a: 0 }] },

        { id: 't7', lessons: ch(2), title: L('Ratsional, irratsional va haqiqiy sonlar', 'Рациональные, иррациональные и действительные числа', 'Rational, irrational and real numbers'),
          keys: [L('ratsional: a/b', 'рациональное: a/b', 'rational: a/b'), L('irratsional: √2, π', 'иррациональное: √2, π', 'irrational: √2, π')],
          scene: [{ obj: 'ball', n: 1, color: 'yellow' }],
          explain: mk(function (l) { return { uz: '<b>Ratsional</b> son — kasr ko‘rinishida yoziladi: 0,75 = ' + fr(3, 4) + ', −2 = ' + fr(-2, 1) + ', 0,(3) = ' + fr(1, 3) + '. <b>Irratsional</b> son kasr ko‘rinishida yozilmaydi, o‘nli yozuvi cheksiz va davriy emas: √2 = 1,41421…, π = 3,14159… Ikkalasi birga — <b>haqiqiy</b> sonlar.', ru: '<b>Рациональное</b> число записывается дробью: 0,75 = ' + fr(3, 4) + ', −2 = ' + fr(-2, 1) + ', 0,(3) = ' + fr(1, 3) + '. <b>Иррациональное</b> дробью не записывается, его десятичная запись бесконечна и непериодична: √2 = 1,41421…, π = 3,14159… Вместе они — <b>действительные</b> числа.', en: 'A <b>rational</b> number can be written as a fraction: 0.75 = ' + fr(3, 4) + ', −2 = ' + fr(-2, 1) + ', 0.(3) = ' + fr(1, 3) + '. An <b>irrational</b> number cannot; its decimal goes on forever without repeating: √2 = 1.41421…, π = 3.14159… Together they are the <b>real</b> numbers.' }[l]; }),
          rule: L('haqiqiy = ratsional ∪ irratsional', 'действительные = рациональные ∪ иррациональные', 'real = rational ∪ irrational'),
          acts: [
            { type: 'choose', title: L('Irratsional son', 'Иррациональное число', 'Irrational number'), icon: '∞', make: function (R) { var irr = pick(['√2', '√3', '√5', '√7', 'π', '√10']), rat = ['√16', '√25', '0,5', fr(2, 3), '−7', '√49', '1,25'].sort(function () { return R(0, 1) - 0.5; }); return choice(L('Qaysi son <b>irratsional</b>?', 'Какое число <b>иррациональное</b>?', 'Which number is <b>irrational</b>?'), [irr, rat[0], rat[1]], 0); } },
            { type: 'drill', title: L('Kasrni o‘nli kasrga', 'Дробь в десятичную', 'Fraction to decimal'), n: 5, make: function (R) { var b = pick([2, 4, 5, 8, 10, 20, 25]), a = R(1, b - 1), sg = R(0, 1) ? -1 : 1; return { q: (sg < 0 ? '−' : '') + fr(a, b), a: r6(sg * a / b) }; } }
          ],
          quiz: [{ q: L('Qaysi biri ratsional?', 'Что из этого рационально?', 'Which is rational?'), o: ['√16', '√2', 'π'], a: 0 }, { q: L('π qanday son?', 'Какое число π?', 'What kind of number is π?'), o: [L('irratsional', 'иррациональное', 'irrational'), L('butun', 'целое', 'integer'), L('natural', 'натуральное', 'natural')], a: 0 }] }
      ] },

      { id: 's3', title: L('Yaxlitlash va chamalash', 'Округление и прикидка', 'Rounding and estimating'), icon: '≈', color: 'green', topics: [
        { id: 't8', lessons: ch(3), title: L('Xonagacha va ahamiyatli raqamgacha yaxlitlash', 'Округление до разряда и значащих цифр', 'Rounding to a place and to significant figures'),
          keys: [L('ahamiyatli raqam', 'значащая цифра', 'significant figure'), '3,1416 ≈ 3,14'],
          scene: [{ obj: 'rod', n: 5, color: 'green' }],
          explain: L('Yaxlitlashda keyingi raqamga qaraymiz: 5–9 bo‘lsa yuqoriga, 0–4 bo‘lsa pastga. 3,1416 ≈ 3,14 (yuzdan birlargacha). <b>Ahamiyatli raqamlar</b> birinchi noldan farqli raqamdan sanaladi: 0,004 57 ≈ 0,0046 (2 ta ahamiyatli raqam); 48 370 ≈ 48 000 (2 ta).',
            'При округлении смотрим на следующую цифру: 5–9 — вверх, 0–4 — вниз. 3,1416 ≈ 3,14 (до сотых). <b>Значащие цифры</b> считаются с первой ненулевой: 0,004 57 ≈ 0,0046 (2 значащие); 48 370 ≈ 48 000 (2 значащие).',
            'To round, look at the next digit: 5–9 rounds up, 0–4 rounds down. 3.1416 ≈ 3.14 (to hundredths). <b>Significant figures</b> count from the first non-zero digit: 0.00457 ≈ 0.0046 (2 s.f.); 48 370 ≈ 48 000 (2 s.f.).'),
          rule: L('5–9 → yuqoriga, 0–4 → pastga', '5–9 → вверх, 0–4 → вниз', '5–9 → up, 0–4 → down'),
          acts: [
            { type: 'drill', title: L('O‘ndan birgacha', 'До десятых', 'To tenths'), n: 6, make: function (R) { var x = R(100, 9999) / 100; return { q: dq(function (D, l) { return D(x) + ' → ' + { uz: 'o‘ndan birgacha', ru: 'до десятых', en: 'to 1 d.p.' }[l]; }), a: r6(Math.round(x * 10) / 10) }; } },
            { type: 'drill', title: L('2 ta ahamiyatli raqam', '2 значащие цифры', '2 significant figures'), n: 6, make: function (R) { var n = R(1000, 99999), k = Math.pow(10, String(n).length - 2); return { q: mk(function (l) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' → ' + { uz: '2 ahamiyatli raqam', ru: '2 знач. цифры', en: '2 s.f.' }[l]; }), a: Math.round(n / k) * k }; } }
          ],
          quiz: [{ q: L('3,1416 ≈ ? (yuzdan birgacha)', '3,1416 ≈ ? (до сотых)', '3.1416 ≈ ? (2 d.p.)'), o: [L('3,14', '3,14', '3.14'), L('3,15', '3,15', '3.15'), L('3,1', '3,1', '3.1')], a: 0 }, { q: L('48 370 (2 ahamiyatli raqam)', '48 370 (2 знач. цифры)', '48 370 (2 s.f.)'), o: ['48 000', '48 400', '50 000'], a: 0 }] },

        { id: 't9', lessons: ch(3), title: L('Chamalash', 'Прикидка', 'Estimating'),
          keys: [L('taxminiy hisob', 'приближённый расчёт', 'rough calculation')],
          scene: [{ obj: 'box', n: 2, color: 'orange' }],
          explain: L('Chamalashda sonlarni bitta ahamiyatli raqamgacha yaxlitlab, tez hisoblaymiz: 487 · 21 ≈ 500 · 20 = 10 000. Bu javobning to‘g‘riligini tekshirishga yordam beradi (aniq javob 10 227).',
            'При прикидке округляем числа до одной значащей цифры и быстро считаем: 487 · 21 ≈ 500 · 20 = 10 000. Это помогает проверить ответ (точно — 10 227).',
            'To estimate, round each number to 1 significant figure and calculate quickly: 487 · 21 ≈ 500 · 20 = 10 000. It helps check an answer (exactly 10 227).'),
          rule: '487 · 21 ≈ 500 · 20',
          acts: [
            { type: 'choose', icon: '≈', make: function (R) { var a = R(2, 9) * 100 + R(-30, 30), b = R(2, 9) * 10 + R(-3, 3), ea = Math.round(a / 100) * 100, eb = Math.round(b / 10) * 10, e = ea * eb; return choice('<span class="kd-big">' + a + ' · ' + b + ' ≈ ?</span>', [String(e), String(e * 10), String(e / 10)], 0); } },
            { type: 'problem', title: L('Xarid', 'Покупка', 'Shopping'), make: function (R) { var p = R(2, 9) * 10000, n = R(2, 9); return { story: L('Bitta kitob taxminan <b>' + (p - R(1, 9) * 100) + '</b> so‘m (≈ ' + p + '). <b>' + n + '</b> ta kitobga <u>taxminan qancha</u> pul kerak?', 'Книга стоит около <b>' + (p - R(1, 9) * 100) + '</b> сум (≈ ' + p + '). <u>Примерно сколько</u> денег нужно на <b>' + n + '</b> книг?', 'A book costs about <b>' + (p - R(1, 9) * 100) + '</b> sum (≈ ' + p + '). <u>Roughly how much</u> for <b>' + n + '</b> books?'), expr: [p, '·', n, '=', p * n], ans: p * n, unit: SOM }; } }
          ],
          quiz: [{ q: '487 · 21 ≈ ?', o: ['10 000', '1 000', '100 000'], a: 0 }, { q: '3 980 : 41 ≈ ?', o: ['100', '10', '1 000'], a: 0 }] }
      ] },

      { id: 's4', title: L('Algebra asoslari', 'Основы алгебры', 'Algebra basics'), icon: '🔤', color: 'violet', topics: [
        { id: 't10', lessons: ch(4), title: L('Chiziqli ifodalarni soddalashtirish va qavslarni ochish', 'Упрощение выражений и раскрытие скобок', 'Simplifying and expanding'),
          keys: ['3(x + 2) = 3x + 6', '−(a − b) = −a + b'],
          scene: [{ obj: 'cube', n: 3, color: 'violet' }, { obj: 'cube', n: 2, color: 'green' }],
          explain: L('Qavsni ochishda oldidagi sonni har bir hadga ko‘paytiramiz: 3(x + 2) = 3x + 6, −2(y − 5) = −2y + 10. Qavs oldida «−» bo‘lsa, ichidagi ishoralar o‘zgaradi. So‘ng o‘xshash hadlarni jamlaymiz: 4x + 3(x − 1) = 7x − 3.',
            'Раскрывая скобки, умножаем число перед ними на каждое слагаемое: 3(x + 2) = 3x + 6, −2(y − 5) = −2y + 10. Перед скобкой «−» — знаки внутри меняются. Затем приводим подобные: 4x + 3(x − 1) = 7x − 3.',
            'To expand, multiply the number outside by each term inside: 3(x + 2) = 3x + 6, −2(y − 5) = −2y + 10. A minus in front flips the signs inside. Then collect like terms: 4x + 3(x − 1) = 7x − 3.'),
          rule: 'a(b + c) = ab + ac',
          acts: [
            { type: 'choose', title: L('Qavsni oching', 'Раскройте скобки', 'Expand'), icon: '( )', make: function (R) { var a = R(2, 9) * (R(0, 1) ? 1 : -1), b = R(1, 9), sg = R(0, 1) ? '+' : '−', bb = sg === '+' ? b : -b, c = a * bb;
              var good = ns(a) + 'x ' + (c < 0 ? '− ' + (-c) : '+ ' + c), w1 = ns(a) + 'x ' + (bb < 0 ? '− ' + b : '+ ' + b), w2 = ns(a) + 'x ' + (c < 0 ? '+ ' + (-c) : '− ' + c);
              return choice('<span class="kd-big">' + ns(a) + '(x ' + sg + ' ' + b + ')</span>', [good, w1, w2], 0); } },
            { type: 'drill', title: L('x oldidagi son', 'Коэффициент при x', 'Coefficient of x'), n: 6, make: function (R) { var a = R(2, 9), b = R(2, 6), c = R(1, 9); return { q: a + 'x + ' + b + '(x − ' + c + ') = □x − ' + b * c + ';  □', a: a + b }; } }
          ],
          quiz: [{ q: '3(x + 2) = ?', o: ['3x + 6', '3x + 2', 'x + 6'], a: 0 }, { q: '−(a − b) = ?', o: ['−a + b', '−a − b', 'a − b'], a: 0 }] },

        { id: 't11', lessons: ch(4), title: L('Algebraik ifodalarni ko‘paytuvchilarga ajratish', 'Разложение на множители', 'Factorising'),
          keys: [L('umumiy ko‘paytuvchi', 'общий множитель', 'common factor'), '6x + 9 = 3(2x + 3)'],
          scene: [{ obj: 'box', n: 3, color: 'cyan' }],
          explain: L('Qavs ochishning teskarisi: barcha hadlardagi umumiy ko‘paytuvchini qavsdan tashqariga chiqaramiz: 6x + 9 = 3(2x + 3), 4ab − 6a = 2a(2b − 3). Tekshirish uchun qavsni qayta oching.',
            'Обратное раскрытию скобок: выносим общий множитель всех слагаемых за скобки: 6x + 9 = 3(2x + 3), 4ab − 6a = 2a(2b − 3). Для проверки раскройте скобки.',
            'The reverse of expanding: take the common factor of every term outside a bracket: 6x + 9 = 3(2x + 3), 4ab − 6a = 2a(2b − 3). Check by expanding again.'),
          rule: 'ab + ac = a(b + c)',
          acts: [
            { type: 'drill', title: L('Umumiy ko‘paytuvchi', 'Общий множитель', 'Common factor'), n: 6, make: function (R) { var g = R(2, 9), a = R(1, 7), b = R(1, 7); while (gcd(a, b) !== 1) b = R(1, 7); return { q: g * a + 'x + ' + g * b + ' = □(' + (a === 1 ? '' : a) + 'x + ' + b + ');  □', a: g }; } },
            { type: 'choose', icon: '🧩', make: function (R) { var g = R(2, 6), a = R(2, 5), b = R(1, 7); while (gcd(a, b) !== 1) b = R(1, 7); return choice('<span class="kd-big">' + g * a + 'x − ' + g * b + ' = ?</span>', [g + '(' + a + 'x − ' + b + ')', g + '(' + a + 'x + ' + b + ')', (g * a) + '(x − ' + b + ')'], 0); } }
          ],
          quiz: [{ q: '6x + 9 = ?', o: ['3(2x + 3)', '6(x + 9)', '3(2x + 9)'], a: 0 }, { q: '5a − 5b = ?', o: ['5(a − b)', '5(a + b)', 'a(5 − 5b)'], a: 0 }] }
      ] },

      { id: 's5', title: L('Bir o‘zgaruvchili chiziqli tenglamalar', 'Линейные уравнения', 'Linear equations'), icon: '⚖️', color: 'orange', topics: [
        { id: 't12', lessons: ch(5), title: L('Sodda chiziqli tenglamalar', 'Простые линейные уравнения', 'Simple linear equations'),
          keys: ['ax + b = c', L('hadni ko‘chirish', 'перенос слагаемого', 'moving a term')],
          scene: [{ obj: 'weight', n: 2, color: 'orange' }],
          explain: L('Hadni tenglikning boshqa tomoniga o‘tkazganda uning ishorasi o‘zgaradi: 5x − 7 = 2x + 8 → 5x − 2x = 8 + 7 → 3x = 15 → x = 5. Ildiz manfiy bo‘lishi ham mumkin: 2x + 10 = 4 → x = −3.',
            'При переносе слагаемого в другую часть его знак меняется: 5x − 7 = 2x + 8 → 5x − 2x = 8 + 7 → 3x = 15 → x = 5. Корень может быть и отрицательным: 2x + 10 = 4 → x = −3.',
            'Moving a term to the other side flips its sign: 5x − 7 = 2x + 8 → 5x − 2x = 8 + 7 → 3x = 15 → x = 5. The root can be negative too: 2x + 10 = 4 → x = −3.'),
          rule: 'ax + b = cx + d → x = (d − b) : (a − c)',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var x = R(-10, 12), a = R(2, 9), c = R(1, a - 1), b = R(-20, 20), d = (a - c) * x + b; return { q: a + 'x ' + (b < 0 ? '− ' + (-b) : '+ ' + b) + ' = ' + (c === 1 ? '' : c) + 'x ' + (d < 0 ? '− ' + (-d) : '+ ' + d) + ';  x', a: x }; } },
            { type: 'problem', make: function (R) { var x = R(-8, -1), a = R(2, 6), b = R(5, 30); return { story: L('Tenglamani yeching: <b>' + a + 'x + ' + b + ' = ' + (a * x + b) + '</b>', 'Решите уравнение: <b>' + a + 'x + ' + b + ' = ' + (a * x + b) + '</b>', 'Solve: <b>' + a + 'x + ' + b + ' = ' + (a * x + b) + '</b>'), expr: [a * x + b, '−', b, ':', a, '=', x], ans: x, unit: '' }; } }
          ],
          quiz: [{ q: '5x − 7 = 2x + 8; x = ?', o: ['5', '3', '15'], a: 0 }, { q: '2x + 10 = 4; x = ?', o: ['−3', '3', '7'], a: 0 }] },

        { id: 't13', lessons: ch(5), title: L('Qavs va kasrlar qatnashgan tenglamalar', 'Уравнения со скобками и дробями', 'Equations with brackets and fractions'),
          keys: [L('umumiy maxraj', 'общий знаменатель', 'common denominator')],
          scene: [{ obj: 'weight', n: 3, color: 'violet' }],
          explain: mk(function (l) { return { uz: 'Avval qavslarni ochamiz: 3(x − 2) = 2(x + 1) → 3x − 6 = 2x + 2 → x = 8. Kasrli tenglamada ikki tomonni umumiy maxrajga ko‘paytiramiz: ' + fr('x', 3) + ' + ' + fr('x', 6) + ' = 5 → 2x + x = 30 → x = 10.', ru: 'Сначала раскрываем скобки: 3(x − 2) = 2(x + 1) → 3x − 6 = 2x + 2 → x = 8. В уравнении с дробями умножаем обе части на общий знаменатель: ' + fr('x', 3) + ' + ' + fr('x', 6) + ' = 5 → 2x + x = 30 → x = 10.', en: 'First expand: 3(x − 2) = 2(x + 1) → 3x − 6 = 2x + 2 → x = 8. With fractions, multiply both sides by the common denominator: ' + fr('x', 3) + ' + ' + fr('x', 6) + ' = 5 → 2x + x = 30 → x = 10.' }[l]; }),
          rule: L('qavs → o‘xshash hadlar → x', 'скобки → подобные → x', 'brackets → like terms → x'),
          acts: [
            { type: 'drill', n: 6, make: function (R) { var x = R(-5, 12), a = R(2, 6), b = R(1, 9), c = R(1, a - 1), d = a * (x - b) - c * x; return { q: a + '(x − ' + b + ') = ' + (c === 1 ? '' : c) + 'x ' + (d < 0 ? '− ' + (-d) : '+ ' + d) + ';  x', a: x }; } },
            { type: 'drill', title: L('Kasrli tenglamalar', 'Уравнения с дробями', 'Equations with fractions'), n: 5, make: function (R) { var p = pick([[2, 3], [2, 4], [3, 6], [2, 6], [4, 4]]), k = R(1, 6), x = p[0] * p[1] * k / gcd(p[0], p[1]), s = x / p[0] + x / p[1]; return { q: fr('x', p[0]) + ' + ' + fr('x', p[1]) + ' = ' + s + ';  x', a: x }; } }
          ],
          quiz: [{ q: '3(x − 2) = 2(x + 1); x = ?', o: ['8', '−8', '4'], a: 0 }, { q: 'x/3 + x/6 = 5; x = ?', o: ['10', '15', '30'], a: 0 }] },

        { id: 't14', lessons: ch(5), title: L('Tenglama tuzib yechiladigan masalalar', 'Задачи на составление уравнений', 'Word problems with equations'),
          keys: [L('x ni tanlash', 'выбор x', 'choosing x'), L('shart → tenglama', 'условие → уравнение', 'story → equation')],
          scene: [{ obj: 'book', n: 3, color: 'blue' }],
          explain: L('1) Noma’lumni x deb belgilang. 2) Qolgan miqdorlarni x orqali ifodalang. 3) Tenglama tuzing va yeching. 4) Javobni shartga qo‘yib tekshiring. Masalan: ikki sonning yig‘indisi 50, biri ikkinchisidan 8 ta ko‘p: x + (x + 8) = 50 → x = 21.',
            '1) Обозначьте неизвестное через x. 2) Выразите остальное через x. 3) Составьте и решите уравнение. 4) Проверьте по условию. Например: сумма двух чисел 50, одно больше другого на 8: x + (x + 8) = 50 → x = 21.',
            '1) Call the unknown x. 2) Write the other amounts using x. 3) Form and solve an equation. 4) Check against the story. E.g. two numbers add to 50 and one is 8 more: x + (x + 8) = 50 → x = 21.'),
          rule: L('x → ifoda → tenglama → tekshiruv', 'x → выражение → уравнение → проверка', 'x → expression → equation → check'),
          acts: [
            { type: 'problem', make: function (R) { var x = R(5, 40), d = R(2, 15); return { story: L('Ikki sonning yig‘indisi <b>' + (2 * x + d) + '</b>, biri ikkinchisidan <b>' + d + '</b> ta ko‘p. <u>Kichik son</u>? (x + x + ' + d + ' = ' + (2 * x + d) + ')', 'Сумма двух чисел <b>' + (2 * x + d) + '</b>, одно больше другого на <b>' + d + '</b>. <u>Меньшее число</u>? (x + x + ' + d + ' = ' + (2 * x + d) + ')', 'Two numbers add to <b>' + (2 * x + d) + '</b> and one is <b>' + d + '</b> more. <u>The smaller</u>? (x + x + ' + d + ' = ' + (2 * x + d) + ')'), expr: [2 * x + d, '−', d, ':', 2, '=', x], ans: x, unit: '' }; } },
            { type: 'problem', make: function (R) { var x = R(4, 15), k = R(2, 4), y = R(2, 10); return { story: L('Otaning yoshi o‘g‘lining yoshidan <b>' + k + '</b> marta katta. <b>' + y + '</b> yildan keyin ularning yoshlari yig‘indisi <b>' + ((k + 1) * x + 2 * y) + '</b> bo‘ladi. <u>O‘g‘il hozir necha yoshda</u>?', 'Отец в <b>' + k + '</b> раза старше сына. Через <b>' + y + '</b> лет сумма их возрастов будет <b>' + ((k + 1) * x + 2 * y) + '</b>. <u>Сколько лет сыну сейчас</u>?', 'A father is <b>' + k + '</b> times as old as his son. In <b>' + y + '</b> years their ages will add to <b>' + ((k + 1) * x + 2 * y) + '</b>. <u>How old is the son now</u>?'), expr: [(k + 1) * x + 2 * y, '−', 2 * y, ':', k + 1, '=', x], ans: x, unit: L('yosh', 'лет', 'years') }; } }
          ],
          quiz: [{ q: L('Yig‘indi 50, farq 8. Kichigi?', 'Сумма 50, разность 8. Меньшее?', 'Sum 50, difference 8. Smaller?'), o: ['21', '29', '25'], a: 0 }, { q: L('x ning 3 barobari 7 dan 8 ta ko‘p. x?', 'Утроенное x на 8 больше 7. x?', 'Three times x is 8 more than 7. x?'), o: ['5', '15', '3'], a: 0 }] }
      ] },

      { id: 's6', title: L('Burchaklar va parallel to‘g‘ri chiziqlar', 'Углы и параллельные прямые', 'Angles and parallel lines'), icon: '📐', color: 'cyan', topics: [
        { id: 't15', lessons: ch(6), title: L('Nuqta, to‘g‘ri chiziq, tekislik. Burchaklar', 'Точка, прямая, плоскость. Углы', 'Points, lines, planes. Angles'),
          keys: [L('qo‘shni burchaklar: 180°', 'смежные углы: 180°', 'adjacent on a line: 180°'), L('vertikal burchaklar teng', 'вертикальные углы равны', 'vertical angles equal'), L('to‘ldiruvchi: 90°', 'дополнительные: 90°', 'complementary: 90°')],
          scene: [{ obj: 'rod', n: 2, color: 'cyan' }],
          explain: L('Yig‘indisi 90° bo‘lgan burchaklar — <b>to‘ldiruvchi</b>, 180° — <b>qo‘shimcha</b> (qo‘shni) burchaklar. Ikki to‘g‘ri chiziq kesishganda <b>vertikal</b> burchaklar teng. Nuqta atrofidagi burchaklar yig‘indisi 360°.',
            'Углы с суммой 90° — <b>дополнительные</b>, с суммой 180° — <b>смежные</b>. При пересечении прямых <b>вертикальные</b> углы равны. Сумма углов вокруг точки — 360°.',
            'Angles adding to 90° are <b>complementary</b>; to 180°, <b>supplementary</b>. When lines cross, <b>vertical</b> angles are equal. Angles around a point add to 360°.'),
          rule: '90° · 180° · 360°',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var a = R(10, 80); return [{ q: mk(function (l) { return a + '° — ' + { uz: 'to‘ldiruvchisi', ru: 'дополнительный', en: 'complement' }[l]; }), a: 90 - a }, { q: mk(function (l) { return a + '° — ' + { uz: 'qo‘shnisi', ru: 'смежный', en: 'supplement' }[l]; }), a: 180 - a }, { q: mk(function (l) { return a + '° — ' + { uz: 'vertikal', ru: 'вертикальный', en: 'vertical' }[l]; }), a: a }][R(0, 2)]; } },
            { type: 'problem', title: L('Tenglama bilan', 'С уравнением', 'With an equation'), make: function (R) { var x = R(10, 40), k = R(2, 3); while ((k + 1) * x >= 180) x--; var b = 180 - (k + 1) * x; return { story: L('Qo‘shni burchaklar <b>x</b> va <b>' + k + 'x + ' + b + '</b> gradus. <u>x</u>? (x + ' + k + 'x + ' + b + ' = 180)', 'Смежные углы равны <b>x</b> и <b>' + k + 'x + ' + b + '</b> градусов. <u>x</u>? (x + ' + k + 'x + ' + b + ' = 180)', 'Supplementary angles are <b>x</b> and <b>' + k + 'x + ' + b + '</b> degrees. <u>x</u>? (x + ' + k + 'x + ' + b + ' = 180)'), expr: [180, '−', b, ':', k + 1, '=', x], ans: x, unit: DEG }; } }
          ],
          quiz: [{ q: L('35° ning to‘ldiruvchisi?', 'Дополнительный к 35°?', 'Complement of 35°?'), o: ['55°', '145°', '35°'], a: 0 }, { q: L('Vertikal burchaklar...', 'Вертикальные углы...', 'Vertical angles are...'), o: [L('teng', 'равны', 'equal'), L('yig‘indisi 90°', 'в сумме 90°', 'sum to 90°'), L('yig‘indisi 360°', 'в сумме 360°', 'sum to 360°')], a: 0 }] },

        { id: 't16', lessons: ch(6), title: L('Parallel to‘g‘ri chiziqlar va kesuvchi', 'Параллельные прямые и секущая', 'Parallel lines and a transversal'),
          keys: [L('mos burchaklar teng', 'соответственные равны', 'corresponding equal'), L('ichki almashinuvchi teng', 'накрест лежащие равны', 'alternate equal'), L('ichki bir tomonli: 180°', 'односторонние: 180°', 'co-interior: 180°')],
          scene: [{ obj: 'rod', n: 4, color: 'blue' }],
          explain: L('a ∥ b bo‘lsa va ularni kesuvchi kesib o‘tsa: <b>mos</b> burchaklar teng, <b>ichki almashinuvchi</b> burchaklar teng, <b>ichki bir tomonli</b> burchaklar yig‘indisi 180°.',
            'Если a ∥ b и их пересекает секущая: <b>соответственные</b> углы равны, <b>накрест лежащие</b> равны, сумма <b>односторонних</b> углов 180°.',
            'If a ∥ b and a transversal crosses them: <b>corresponding</b> angles are equal, <b>alternate</b> angles are equal, and <b>co-interior</b> angles add to 180°.'),
          rule: L('mos = mos · almashinuvchi = almashinuvchi · bir tomonli: 180°', 'соответственные = · накрест = · односторонние: 180°', 'corresponding = · alternate = · co-interior: 180°'),
          acts: [
            { type: 'problem', make: function (R) { var a = R(4, 8) * 10 + pick([0, 5]), s = pick([[2, 1], [0, 1], [0, 3]]); return { story: mk(function (l) { return { uz: 'a ∥ b. <u>?</u> burchakni toping.', ru: 'a ∥ b. Найдите угол <u>?</u>.', en: 'a ∥ b. Find the angle <u>?</u>.' }[l] + parFig(a, s[0], s[1], a); }), expr: [180, '−', a, '=', 180 - a], ans: 180 - a, unit: DEG }; } },
            { type: 'choose', title: L('Burchak turini aniqlang', 'Определите вид углов', 'Name the angle pair'), icon: '∥', make: function (R) { var a = R(5, 7) * 10, k = R(0, 2), s = [[0, 0], [2, 0], [2, 1]][k]; return choice(mk(function (l) { return { uz: 'Belgilangan burchaklar qanday juftlik?', ru: 'Какая это пара углов?', en: 'Which pair of angles is marked?' }[l] + parFig(a, s[0], s[1], a); }), [L('mos', 'соответственные', 'corresponding'), L('ichki almashinuvchi', 'накрест лежащие', 'alternate'), L('ichki bir tomonli', 'односторонние', 'co-interior')], k); } }
          ],
          quiz: [{ q: L('Mos burchaklardan biri 65°. Ikkinchisi?', 'Соответственный угол 65°. Второй?', 'One corresponding angle is 65°. The other?'), o: ['65°', '115°', '25°'], a: 0 }, { q: L('Ichki bir tomonli burchak 70°. Ikkinchisi?', 'Односторонний угол 70°. Второй?', 'A co-interior angle is 70°. The other?'), o: ['110°', '70°', '20°'], a: 0 }] }
      ] },

      { id: 's7', title: L('Uchburchak, to‘rtburchak va ko‘pburchaklar', 'Треугольники, четырёхугольники и многоугольники', 'Triangles, quadrilaterals and polygons'), icon: '⬠', color: 'green', topics: [
        { id: 't17', lessons: ch(7), title: L('Uchburchaklar va to‘rtburchaklar', 'Треугольники и четырёхугольники', 'Triangles and quadrilaterals'),
          keys: ['A + B + C = 180°', 'A + B + C + D = 360°', L('tashqi burchak', 'внешний угол', 'exterior angle')],
          scene: [{ obj: 'pyramid', n: 2, color: 'green' }],
          explain: L('Uchburchak burchaklari yig‘indisi 180°, tashqi burchagi esa unga qo‘shni bo‘lmagan ikki ichki burchak yig‘indisiga teng. To‘rtburchak burchaklari yig‘indisi 360°: u diagonal bilan ikki uchburchakka bo‘linadi.',
            'Сумма углов треугольника 180°, а внешний угол равен сумме двух внутренних, не смежных с ним. Сумма углов четырёхугольника 360°: диагональ делит его на два треугольника.',
            'A triangle’s angles add to 180°, and an exterior angle equals the two interior angles not next to it. A quadrilateral’s angles add to 360°: a diagonal splits it into two triangles.'),
          rule: L('tashqi = ikki ichki burchak yig‘indisi', 'внешний = сумма двух внутренних', 'exterior = sum of the two opposite interior angles'),
          acts: [
            { type: 'drill', n: 8, make: function (R) { var a = R(3, 8) * 10, b = R(3, 8) * 10, c = R(6, 12) * 10; return [{ q: a + '° + ' + b + '° + ? = 180°', a: 180 - a - b }, { q: mk(function (l) { return { uz: 'tashqi burchak; ichki: ', ru: 'внешний угол; внутренние: ', en: 'exterior angle; interior: ' }[l] + a + '°, ' + b + '°'; }), a: a + b }, { q: a + '° + ' + b + '° + ' + c + '° + ? = 360°', a: 360 - a - b - c }][R(0, 2)]; } },
            { type: 'problem', title: L('Tenglama bilan', 'С уравнением', 'With an equation'), make: function (R) { var km = pick([[2, 3], [1, 2], [2, 2], [3, 5], [4, 5], [2, 7]]), k = km[0], m = km[1], S = 1 + k + m, x = 180 / S; return { story: L('Uchburchak burchaklari <b>x</b>, <b>' + k + 'x</b> va <b>' + m + 'x</b>. <u>x</u>? (' + S + 'x = 180)', 'Углы треугольника <b>x</b>, <b>' + k + 'x</b> и <b>' + m + 'x</b>. <u>x</u>? (' + S + 'x = 180)', 'A triangle’s angles are <b>x</b>, <b>' + k + 'x</b> and <b>' + m + 'x</b>. <u>x</u>? (' + S + 'x = 180)'), expr: [180, ':', S, '=', x], ans: x, unit: DEG }; } }
          ],
          quiz: [{ q: L('Ichki 50° va 60°. Tashqi burchak?', 'Внутренние 50° и 60°. Внешний?', 'Interior 50° and 60°. Exterior?'), o: ['110°', '70°', '130°'], a: 0 }, { q: L('To‘rtburchak burchaklari yig‘indisi?', 'Сумма углов четырёхугольника?', 'Sum of a quadrilateral’s angles?'), o: ['360°', '180°', '540°'], a: 0 }] },

        { id: 't18', lessons: ch(7), title: L('Ko‘pburchaklar', 'Многоугольники', 'Polygons'),
          keys: ['(n − 2) · 180°', L('tashqi burchaklar: 360°', 'внешние углы: 360°', 'exterior angles: 360°'), L('muntazam', 'правильный', 'regular')],
          scene: [{ obj: 'star', n: 1, color: 'yellow' }],
          explain: L('n burchakli ko‘pburchakni bir uchidan diagonallar bilan (n − 2) ta uchburchakka bo‘lish mumkin, shuning uchun ichki burchaklar yig‘indisi (n − 2) · 180°. Beshburchakda — 540°. Tashqi burchaklar yig‘indisi har doim 360°. <b>Muntazam</b> ko‘pburchakda barcha burchaklar teng.',
            'n-угольник диагоналями из одной вершины делится на (n − 2) треугольника, поэтому сумма внутренних углов (n − 2) · 180°. У пятиугольника — 540°. Сумма внешних углов всегда 360°. У <b>правильного</b> многоугольника все углы равны.',
            'Diagonals from one vertex split an n-sided polygon into (n − 2) triangles, so the interior angles add to (n − 2) · 180°. A pentagon: 540°. The exterior angles always add to 360°. In a <b>regular</b> polygon all angles are equal.'),
          rule: 'S = (n − 2) · 180°',
          acts: [
            { type: 'drill', n: 6, make: function (R) { var n = R(5, 12), m = pick([5, 6, 8, 9, 10, 12]); return [{ q: 'n = ' + n + ';  S', a: (n - 2) * 180 }, { q: mk(function (l) { return { uz: 'muntazam ', ru: 'правильный ', en: 'regular ' }[l] + 'n = ' + m + '; ' + { uz: 'tashqi burchak', ru: 'внешний угол', en: 'exterior angle' }[l]; }), a: 360 / m }][R(0, 1)]; } },
            { type: 'problem', title: L('Muntazam ko‘pburchak', 'Правильный многоугольник', 'Regular polygon'), make: function (R) { var n = pick([5, 6, 8, 9, 10, 12]); return { story: L('Muntazam <b>' + n + '</b> burchakli ko‘pburchakning <u>bitta ichki burchagi</u>? (Yig‘indi: ' + (n - 2) * 180 + '°.)', 'Правильный <b>' + n + '</b>-угольник: <u>один внутренний угол</u>? (Сумма: ' + (n - 2) * 180 + '°.)', 'A regular <b>' + n + '</b>-sided polygon: <u>one interior angle</u>? (Sum: ' + (n - 2) * 180 + '°.)'), expr: [n - 2, '·', 180, ':', n, '=', (n - 2) * 180 / n], ans: (n - 2) * 180 / n, unit: DEG }; } }
          ],
          quiz: [{ q: L('Beshburchak burchaklari yig‘indisi?', 'Сумма углов пятиугольника?', 'Angle sum of a pentagon?'), o: ['540°', '360°', '720°'], a: 0 }, { q: L('Muntazam oltiburchak ichki burchagi?', 'Внутренний угол правильного шестиугольника?', 'Interior angle of a regular hexagon?'), o: ['120°', '60°', '135°'], a: 0 }] }
      ] }
    ]
  };
  C.addPart(part1);
})(this);
