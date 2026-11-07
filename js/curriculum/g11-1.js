// Nuvemath — 11-sinf, Algebra va analiz asoslari (manba: M.A. Mirzaahmedov, Sh.N. Ismailov, A.Q. Amanov «Matematika 11. Algebra va analiz asoslari, geometriya», I–II qism, Toshkent, 2018).
// Boblar va mavzular tartibi darslikdan olingan; tushuntirishlar, topshiriqlar va chizmalar Nuvemath uchun qayta yozilgan.
(function (root) {
  'use strict';
  var C = root.NMCurriculum, H = C.H, L = H.L, mk = H.mk, choice = H.choice, pick = H.pick;
  var r6 = H.r6;
  function ch(n) { return L(n + '-bob', 'Глава ' + n, 'Chapter ' + n); }
  function ns(x) { return x < 0 ? '−' + (-x) : String(x); }
  function sg(x) { return x < 0 ? ' − ' + (-x) : ' + ' + x; }
  function kx(k, v) { v = v || 'x'; return k === 1 ? v : k === -1 ? '−' + v : ns(k) + v; }
  function fact(n) { var p = 1; for (var i = 2; i <= n; i++) p *= i; return p; }
  function Cnk(n, k) { return fact(n) / (fact(k) * fact(n - k)); }
  function Ank(n, k) { return fact(n) / fact(n - k); }
  function fig(inner, w, h) { return '<div class="kd-fig"><svg viewBox="0 0 ' + (w || 300) + ' ' + (h || 180) + '">' + inner + '</svg></div>'; }
  // y = x² parabola va urinma
  function tangentFig(x0) { var s = '', X = function (x) { return 150 + x * 35; }, Y = function (y) { return 165 - y * 15; };
    s += '<line x1="10" y1="165" x2="290" y2="165" stroke="currentColor" stroke-opacity=".4"/><line x1="150" y1="5" x2="150" y2="175" stroke="currentColor" stroke-opacity=".4"/>';
    var pts = []; for (var x = -3.2; x <= 3.21; x += 0.2) pts.push(X(x).toFixed(1) + ',' + Y(x * x).toFixed(1)); s += '<polyline points="' + pts.join(' ') + '" fill="none" stroke="#4f8dff" stroke-width="3"/>';
    var xa = x0 - 1.6, xb = x0 + 1.6; s += '<line x1="' + X(xa) + '" y1="' + Y(2 * x0 * xa - x0 * x0) + '" x2="' + X(xb) + '" y2="' + Y(2 * x0 * xb - x0 * x0) + '" stroke="#ff6b8b" stroke-width="3"/>';
    s += '<circle cx="' + X(x0) + '" cy="' + Y(x0 * x0) + '" r="5" fill="#f6b73c"/>';
    return fig(s, 300, 180); }
  // integral: egri chiziqli trapetsiya
  function areaFig(b) { var s = '', X = function (x) { return 40 + x * 60; }, Y = function (y) { return 165 - y * 15; }, pts = [X(0) + ',' + Y(0)];
    for (var x = 0; x <= b + 0.001; x += 0.1) pts.push(X(x).toFixed(1) + ',' + Y(x * x).toFixed(1)); pts.push(X(b) + ',' + Y(0));
    s += '<polygon points="' + pts.join(' ') + '" fill="rgba(46,194,126,.35)" stroke="#2ec27e" stroke-width="2.5"/><line x1="20" y1="165" x2="290" y2="165" stroke="currentColor" stroke-opacity=".5"/><line x1="40" y1="5" x2="40" y2="175" stroke="currentColor" stroke-opacity=".5"/>';
    s += '<text x="' + X(b) + '" y="178" font-size="14" font-weight="700" fill="currentColor" text-anchor="middle">' + b + '</text>';
    return fig(s, 300, 182); }

  var part1 = {
    grade: 11, part: 1, edition: L('Matematika 11, I–II qism, 2018-yil nashri', 'Математика 11, I–II часть, издание 2018 г.', 'Mathematics 11, Parts I–II, 2018 edition'),
    title: L('Algebra va analiz asoslari: hosila, integral, statistika va ehtimollik', 'Алгебра и начала анализа: производная, интеграл, статистика и вероятность', 'Algebra and analysis: derivative, integral, statistics and probability'),
    book: L('M.A. Mirzaahmedov, Sh.N. Ismailov, A.Q. Amanov. Matematika 11, I–II qism (Toshkent, 2018)', 'М.А. Мирзаахмедов, Ш.Н. Исмаилов, А.К. Аманов. Математика 11, I–II часть (Ташкент, 2018)', 'M.A. Mirzaakhmedov, Sh.N. Ismailov, A.Q. Amanov. Mathematics 11, Parts I–II (Tashkent, 2018)'),
    intro: L('11-sinfda matematik analizning ikki buyuk g‘oyasi — <b>hosila</b> va <b>integral</b> bilan tanishamiz: o‘zgarish tezligi, urinma, funksiyani tekshirish, optimallashtirish, boshlang‘ich funksiya, yuzlarni hisoblash. So‘ng ma’lumotlar tahlili: kombinatorika, Nyuton binomi, statistika, bog‘liqlik va ehtimollar nazariyasi asoslari.',
      'В 11 классе знакомимся с двумя великими идеями анализа — <b>производной</b> и <b>интегралом</b>: скорость изменения, касательная, исследование функций, оптимизация, первообразная, вычисление площадей. Затем анализ данных: комбинаторика, бином Ньютона, статистика, зависимость и основы теории вероятностей.',
      'Grade 11 meets the two great ideas of calculus — the <b>derivative</b> and the <b>integral</b>: rates of change, tangents, studying functions, optimisation, antiderivatives and areas. Then data analysis: combinatorics, the binomial theorem, statistics, correlation and the basics of probability.'),
    sections: [
      { id: 's1', title: L('Hosila va uning tatbiqlari', 'Производная и её применения', 'The derivative and its uses'), icon: '📈', color: 'blue', topics: [
        { id: 't1', lessons: ch(1), title: L('Orttirmalar nisbati va limit haqida tushuncha', 'Отношение приращений и понятие предела', 'Increments and the idea of a limit'),
          keys: ['Δx, Δy', 'Δy / Δx', L('limit', 'предел', 'limit')],
          scene: [{ obj: 'drone', n: 2, color: 'blue' }],
          explain: L('Argument x₀ dan x₀ + Δx ga o‘zgarsa, funksiya <b>orttirmasi</b> Δy = f(x₀ + Δx) − f(x₀). Nisbat Δy/Δx — o‘rtacha o‘zgarish tezligi. Δx nolga intilganda bu nisbat yaqinlashadigan son — <b>limit</b>. Masalan, f(x) = x² uchun Δy = 2x₀Δx + Δx², Δy/Δx = 2x₀ + Δx → 2x₀.',
            'Если аргумент меняется от x₀ до x₀ + Δx, <b>приращение</b> функции Δy = f(x₀ + Δx) − f(x₀). Отношение Δy/Δx — средняя скорость изменения. Число, к которому оно стремится при Δx → 0, — <b>предел</b>. Например, для f(x) = x²: Δy = 2x₀Δx + Δx², Δy/Δx = 2x₀ + Δx → 2x₀.',
            'If the argument moves from x₀ to x₀ + Δx, the <b>increment</b> of the function is Δy = f(x₀ + Δx) − f(x₀). The ratio Δy/Δx is the average rate of change. The number it approaches as Δx → 0 is the <b>limit</b>. For f(x) = x²: Δy = 2x₀Δx + Δx², so Δy/Δx = 2x₀ + Δx → 2x₀.'),
          rule: 'Δy = f(x₀ + Δx) − f(x₀)',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var x0 = R(-4, 5), d = R(1, 3), k = R(0, 2), a = R(1, 6); return [
              { q: 'f(x) = x², x₀ = ' + ns(x0) + ', Δx = ' + d + ';  Δy', a: 2 * x0 * d + d * d },
              { q: 'f(x) = ' + kx(a) + sg(x0) + ', Δx = ' + d + ';  Δy', a: a * d },
              { q: 'lim<sub>x→' + ns(x0 || 2) + '</sub> (x² − ' + ((x0 || 2) * (x0 || 2)) + ') / (x' + sg(-(x0 || 2)) + ')', a: 2 * (x0 || 2) }][k]; } },
            { type: 'choose', icon: '🔍', make: function () { return pick([
              choice(L('Δy/Δx nimani bildiradi?', 'Что означает Δy/Δx?', 'What does Δy/Δx mean?'), [L('o‘rtacha o‘zgarish tezligi', 'среднюю скорость изменения', 'the average rate of change'), L('funksiya qiymati', 'значение функции', 'the value of the function'), L('aniqlanish sohasi', 'область определения', 'the domain')], 0),
              choice('lim<sub>x→0</sub> (sin x) / x = ?', ['1', '0', '∞'], 0),
              choice('lim<sub>x→∞</sub> 1 / x = ?', ['0', '1', '∞'], 0),
              choice('lim<sub>x→2</sub> (3x + 1) = ?', ['7', '6', '5'], 0)]); } }
          ],
          quiz: [{ q: L('f(x) = x², x₀ = 1, Δx = 1. Δy = ?', 'f(x) = x², x₀ = 1, Δx = 1. Δy = ?', 'f(x) = x², x₀ = 1, Δx = 1. Δy = ?'), o: ['3', '1', '4'], a: 0 }, { q: 'lim<sub>x→3</sub> (x² − 9)/(x − 3) = ?', o: ['6', '0', '3'], a: 0 }] },

        { id: 't2', lessons: ch(1), title: L('Hosila, uning geometrik va fizik ma’nosi', 'Производная, её геометрический и физический смысл', 'The derivative: geometric and physical meaning'),
          keys: ["f′(x₀) = lim Δy/Δx", L('urinma burchak koeffitsiyenti', 'угловой коэффициент касательной', 'slope of the tangent'), L('oniy tezlik', 'мгновенная скорость', 'instantaneous speed')],
          scene: [{ obj: 'ball', n: 2, color: 'orange' }],
          explain: L('<b>Hosila</b> f′(x₀) = lim<sub>Δx→0</sub> Δy/Δx. Geometrik ma’nosi: f′(x₀) — grafikka (x₀; f(x₀)) nuqtada o‘tkazilgan urinmaning burchak koeffitsiyenti, k = tg α. Fizik ma’nosi: s(t) yo‘l bo‘lsa, s′(t) = v(t) — oniy tezlik, v′(t) = a(t) — tezlanish. Hosila tushunchasini Nyuton va Leybnits XVII asrda kiritgan.',
            '<b>Производная</b> f′(x₀) = lim<sub>Δx→0</sub> Δy/Δx. Геометрический смысл: f′(x₀) — угловой коэффициент касательной к графику в точке (x₀; f(x₀)), k = tg α. Физический смысл: если s(t) — путь, то s′(t) = v(t) — мгновенная скорость, v′(t) = a(t) — ускорение. Понятие производной ввели Ньютон и Лейбниц в XVII веке.',
            'The <b>derivative</b> is f′(x₀) = lim<sub>Δx→0</sub> Δy/Δx. Geometrically it is the slope of the tangent to the graph at (x₀; f(x₀)), k = tan α. Physically, if s(t) is distance then s′(t) = v(t) is the instantaneous speed and v′(t) = a(t) the acceleration. Newton and Leibniz introduced the derivative in the 17th century.'),
          rule: "k = tg α = f′(x₀);  v = s′(t)",
          acts: [
            { type: 'choose', title: L('Urinma qiyaligi', 'Наклон касательной', 'Slope of the tangent'), icon: '📐', make: function (R) { var x0 = pick([-2, -1, 1, 2]); return choice(mk(function (l) { return { uz: 'y = x² grafigiga x₀ = ' + ns(x0) + ' nuqtada urinma. Burchak koeffitsiyenti k = ?', ru: 'Касательная к y = x² в точке x₀ = ' + ns(x0) + '. Угловой коэффициент k = ?', en: 'Tangent to y = x² at x₀ = ' + ns(x0) + '. Slope k = ?' }[l] + tangentFig(x0); }), [ns(2 * x0), ns(-2 * x0), ns(4 * x0)], 0); } },
            { type: 'drill', title: L('Oniy tezlik', 'Мгновенная скорость', 'Instantaneous speed'), n: 6, make: function (R) { var a = R(1, 5), b = R(0, 9), t = R(1, 6); return { q: mk(function (l) { return 's(t) = ' + a + 't² + ' + b + 't ' + { uz: '(m);  v(' + t + ') m/s', ru: '(м);  v(' + t + ') м/с', en: '(m);  v(' + t + ') m/s' }[l]; }), a: 2 * a * t + b }; } }
          ],
          quiz: [{ q: L('Hosilaning geometrik ma’nosi?', 'Геометрический смысл производной?', 'Geometric meaning of the derivative?'), o: [L('urinma burchak koeffitsiyenti', 'угловой коэффициент касательной', 'slope of the tangent'), L('grafik ostidagi yuz', 'площадь под графиком', 'area under the graph'), L('funksiya nollari', 'нули функции', 'zeros of the function')], a: 0 }, { q: L('s(t) — yo‘l. s′(t) = ?', 's(t) — путь. s′(t) = ?', 's(t) is distance. s′(t) = ?'), o: [L('tezlik', 'скорость', 'speed'), L('tezlanish', 'ускорение', 'acceleration'), L('vaqt', 'время', 'time')], a: 0 }] },

        { id: 't3', lessons: ch(1), title: L('Hosilani hisoblash qoidalari', 'Правила вычисления производной', 'Rules of differentiation'),
          keys: ['(xⁿ)′ = nxⁿ⁻¹', "(u ± v)′, (uv)′, (u/v)′", "(sin x)′ = cos x"],
          scene: [{ obj: 'cube', n: 3, color: 'violet' }],
          explain: L('Asosiy hosilalar: C′ = 0, (xⁿ)′ = nxⁿ⁻¹, (sin x)′ = cos x, (cos x)′ = −sin x, (eˣ)′ = eˣ, (ln x)′ = 1/x. Qoidalar: (u ± v)′ = u′ ± v′, (Cu)′ = Cu′, (uv)′ = u′v + uv′, (u/v)′ = (u′v − uv′)/v². Masalan, (3x⁴ − 5x + 2)′ = 12x³ − 5.',
            'Основные производные: C′ = 0, (xⁿ)′ = nxⁿ⁻¹, (sin x)′ = cos x, (cos x)′ = −sin x, (eˣ)′ = eˣ, (ln x)′ = 1/x. Правила: (u ± v)′ = u′ ± v′, (Cu)′ = Cu′, (uv)′ = u′v + uv′, (u/v)′ = (u′v − uv′)/v². Например, (3x⁴ − 5x + 2)′ = 12x³ − 5.',
            'Basic derivatives: C′ = 0, (xⁿ)′ = nxⁿ⁻¹, (sin x)′ = cos x, (cos x)′ = −sin x, (eˣ)′ = eˣ, (ln x)′ = 1/x. Rules: (u ± v)′ = u′ ± v′, (Cu)′ = Cu′, (uv)′ = u′v + uv′, (u/v)′ = (u′v − uv′)/v². E.g. (3x⁴ − 5x + 2)′ = 12x³ − 5.'),
          rule: "(xⁿ)′ = n·xⁿ⁻¹",
          acts: [
            { type: 'drill', n: 8, make: function (R) { var a = R(1, 5), n = R(2, 4), x0 = R(-2, 3), b = R(-6, 6), c = R(-9, 9), k = R(0, 2); return [
              { q: 'f(x) = ' + a + 'x<sup>' + n + '</sup>;  f′(' + ns(x0) + ')', a: a * n * Math.pow(x0, n - 1) },
              { q: 'f(x) = ' + a + 'x²' + sg(b) + 'x' + sg(c) + ';  f′(' + ns(x0) + ')', a: 2 * a * x0 + b },
              { q: 'f(x) = x³' + sg(b) + 'x² ;  f′(' + ns(x0) + ')', a: 3 * x0 * x0 + 2 * b * x0 }][k]; } },
            { type: 'choose', icon: '✏️', make: function () { return pick([
              choice("(cos x)′ = ?", ['−sin x', 'sin x', '−cos x'], 0),
              choice("(eˣ)′ = ?", ['eˣ', 'x·eˣ⁻¹', 'ln x'], 0),
              choice("(ln x)′ = ?", ['1/x', 'ln x', 'eˣ'], 0),
              choice("(x·sin x)′ = ?", ['sin x + x cos x', 'cos x', 'x cos x'], 0),
              choice("(√x)′ = ?", ['1/(2√x)', '2√x', '√x/2'], 0)]); } }
          ],
          quiz: [{ q: "(x⁵)′ = ?", o: ['5x⁴', 'x⁴', '5x⁵'], a: 0 }, { q: "(7)′ = ?", o: ['0', '7', '1'], a: 0 }] },

        { id: 't4', lessons: ch(1), title: L('Murakkab funksiyaning hosilasi', 'Производная сложной функции', 'Derivative of a composite function'),
          keys: ["(f(g(x)))′ = f′(g(x))·g′(x)", L('ichki va tashqi funksiya', 'внутренняя и внешняя функции', 'inner and outer functions')],
          scene: [{ obj: 'box', n: 2, color: 'green' }, { obj: 'cube', n: 1, color: 'orange' }],
          explain: L('y = f(g(x)) murakkab funksiya: avval ichki g, so‘ng tashqi f. Qoida («zanjir qoidasi»): y′ = f′(g(x))·g′(x) — tashqi funksiya hosilasi ichki funksiyaning hosilasiga ko‘paytiriladi. Masalan, ((2x + 1)³)′ = 3(2x + 1)²·2 = 6(2x + 1)², (sin 5x)′ = 5 cos 5x, (e<sup>3x</sup>)′ = 3e<sup>3x</sup>.',
            'y = f(g(x)) — сложная функция: сначала внутренняя g, затем внешняя f. Правило («цепное правило»): y′ = f′(g(x))·g′(x) — производная внешней умножается на производную внутренней. Например, ((2x + 1)³)′ = 3(2x + 1)²·2 = 6(2x + 1)², (sin 5x)′ = 5 cos 5x, (e<sup>3x</sup>)′ = 3e<sup>3x</sup>.',
            'y = f(g(x)) is composite: first the inner g, then the outer f. The chain rule: y′ = f′(g(x))·g′(x) — the outer derivative times the inner derivative. E.g. ((2x + 1)³)′ = 3(2x + 1)²·2 = 6(2x + 1)², (sin 5x)′ = 5 cos 5x, (e<sup>3x</sup>)′ = 3e<sup>3x</sup>.'),
          rule: "y′ = f′(g)·g′",
          acts: [
            { type: 'drill', n: 8, make: function (R) { var n = R(2, 3), a = R(1, 3), b = R(-3, 3), x0 = R(0, 2); return { q: 'f(x) = (' + kx(a) + sg(b) + ')<sup>' + n + '</sup>;  f′(' + x0 + ')', a: n * a * Math.pow(a * x0 + b, n - 1) }; } },
            { type: 'choose', icon: '⛓️', make: function (R) { var k = R(2, 9); return pick([
              choice("(sin " + k + "x)′ = ?", [k + ' cos ' + k + 'x', 'cos ' + k + 'x', '−' + k + ' cos ' + k + 'x'], 0),
              choice("(e<sup>" + k + "x</sup>)′ = ?", [k + 'e<sup>' + k + 'x</sup>', 'e<sup>' + k + 'x</sup>', k + 'x·e<sup>' + (k - 1) + 'x</sup>'], 0),
              choice("(cos " + k + "x)′ = ?", ['−' + k + ' sin ' + k + 'x', k + ' sin ' + k + 'x', '−sin ' + k + 'x'], 0),
              choice("(ln(" + k + "x))′ = ?", ['1/x', k + '/x', '1/(' + k + 'x)'], 0)]); } }
          ],
          quiz: [{ q: "((3x − 1)²)′ = ?", o: ['6(3x − 1)', '2(3x − 1)', '3(3x − 1)²'], a: 0 }, { q: "(sin 2x)′ = ?", o: ['2 cos 2x', 'cos 2x', '−2 cos 2x'], a: 0 }] },

        { id: 't5', lessons: ch(1), title: L('Urinma va normal tenglamalari', 'Уравнения касательной и нормали', 'Equations of the tangent and normal'),
          keys: ["y = f(x₀) + f′(x₀)(x − x₀)", L('normal: k = −1/f′(x₀)', 'нормаль: k = −1/f′(x₀)', 'normal: k = −1/f′(x₀)')],
          scene: [{ obj: 'pencil', n: 2, color: 'pink' }],
          explain: L('(x₀; f(x₀)) nuqtadagi <b>urinma</b> tenglamasi: y = f(x₀) + f′(x₀)(x − x₀). <b>Normal</b> — urinmaga perpendikulyar to‘g‘ri chiziq: y = f(x₀) − (x − x₀)/f′(x₀). Masalan, y = x² uchun x₀ = 3 da f(3) = 9, f′(3) = 6, urinma: y = 6x − 9.',
            '<b>Касательная</b> в точке (x₀; f(x₀)): y = f(x₀) + f′(x₀)(x − x₀). <b>Нормаль</b> — прямая, перпендикулярная касательной: y = f(x₀) − (x − x₀)/f′(x₀). Например, для y = x² при x₀ = 3: f(3) = 9, f′(3) = 6, касательная y = 6x − 9.',
            'The <b>tangent</b> at (x₀; f(x₀)) is y = f(x₀) + f′(x₀)(x − x₀). The <b>normal</b> is the line perpendicular to it: y = f(x₀) − (x − x₀)/f′(x₀). For y = x² at x₀ = 3: f(3) = 9, f′(3) = 6, so the tangent is y = 6x − 9.'),
          rule: "y = f(x₀) + f′(x₀)(x − x₀)",
          acts: [
            { type: 'drill', title: L('Urinma y = kx + b', 'Касательная y = kx + b', 'Tangent y = kx + b'), n: 8, make: function (R) { var x0 = R(-4, 4), a = R(1, 3), k = R(0, 1); return k ? { q: 'y = ' + kx(a) + '², x₀ = ' + ns(x0) + ';  k', a: 2 * a * x0 } : { q: 'y = ' + kx(a) + '², x₀ = ' + ns(x0) + ';  b', a: -a * x0 * x0 }; } },
            { type: 'choose', icon: '📏', make: function (R) { var x0 = pick([1, 2, 3]); return pick([
              choice(L('y = x² ga x₀ = ' + x0 + ' da urinma?', 'Касательная к y = x² при x₀ = ' + x0 + '?', 'Tangent to y = x² at x₀ = ' + x0 + '?'), ['y = ' + (2 * x0) + 'x − ' + (x0 * x0), 'y = ' + (2 * x0) + 'x + ' + (x0 * x0), 'y = ' + x0 + 'x − ' + (2 * x0)], 0),
              choice(L('Urinma qiyaligi 2 bo‘lsa, normal qiyaligi?', 'Если наклон касательной 2, наклон нормали?', 'If the tangent’s slope is 2, the normal’s slope is?'), ['−1/2', '2', '−2'], 0),
              choice(L('Urinma gorizontal bo‘lgan nuqtada f′(x₀) = ?', 'Где касательная горизонтальна, f′(x₀) = ?', 'Where the tangent is horizontal, f′(x₀) = ?'), ['0', '1', L('mavjud emas', 'не существует', 'undefined')], 0)]); } }
          ],
          quiz: [{ q: L('y = x², x₀ = 1 dagi urinma?', 'Касательная к y = x² при x₀ = 1?', 'Tangent to y = x² at x₀ = 1?'), o: ['y = 2x − 1', 'y = x + 1', 'y = 2x + 1'], a: 0 }, { q: L('Normal urinmaga...', 'Нормаль к касательной...', 'The normal is ... to the tangent'), o: [L('perpendikulyar', 'перпендикулярна', 'perpendicular'), L('parallel', 'параллельна', 'parallel'), L('teng', 'равна', 'equal')], a: 0 }] },

        { id: 't6', lessons: ch(1), title: L('Hosila yordamida funksiyani tekshirish va grafik yasash', 'Исследование функции и построение графика', 'Studying functions and sketching graphs'),
          keys: [L("f′ > 0 — o‘sadi", "f′ > 0 — возрастает", "f′ > 0 — increasing"), L('kritik nuqta, ekstremum', 'критическая точка, экстремум', 'critical point, extremum')],
          scene: [{ obj: 'drone', n: 1, color: 'cyan' }, { obj: 'star', n: 2, color: 'yellow' }],
          explain: L('Agar oraliqda f′(x) > 0 bo‘lsa, funksiya <b>o‘sadi</b>, f′(x) < 0 bo‘lsa — <b>kamayadi</b>. f′(x) = 0 yoki mavjud bo‘lmagan nuqtalar — <b>kritik nuqtalar</b>. Hosila ishorasi «+» dan «−» ga o‘tsa — maksimum, «−» dan «+» ga o‘tsa — minimum. Tekshirish rejasi: soha, juft/toqlik, nollar, hosila, o‘sish va kamayish oraliqlari, ekstremumlar, grafik.',
            'Если на промежутке f′(x) > 0, функция <b>возрастает</b>, если f′(x) < 0 — <b>убывает</b>. Точки, где f′(x) = 0 или не существует, — <b>критические</b>. Если знак производной меняется с «+» на «−» — максимум, с «−» на «+» — минимум. План: область, чётность, нули, производная, промежутки монотонности, экстремумы, график.',
            'If f′(x) > 0 on an interval the function <b>increases</b>; if f′(x) < 0 it <b>decreases</b>. Points where f′(x) = 0 or does not exist are <b>critical points</b>. A sign change from + to − gives a maximum, from − to + a minimum. Plan: domain, parity, zeros, derivative, monotonic intervals, extrema, graph.'),
          rule: L("f′: + → − maksimum; − → + minimum", "f′: + → − максимум; − → + минимум", "f′: + → − maximum; − → + minimum"),
          acts: [
            { type: 'drill', n: 8, make: function (R) { var p = R(1, 5) * pick([1, -1]), q = R(-9, 20), a = R(1, 3), k = R(0, 2); return [
              { q: 'f(x) = x²' + sg(-2 * p) + 'x' + sg(q) + ';  x<sub>min</sub>', a: p },
              { q: 'f(x) = x²' + sg(-2 * p) + 'x' + sg(q) + ';  f<sub>min</sub>', a: q - p * p },
              { q: 'f(x) = x³ − ' + (3 * a * a) + 'x;  f(x<sub>min</sub>)', a: -2 * a * a * a }][k]; } },
            { type: 'choose', icon: '⛰️', make: function () { return pick([
              choice(L('f′(x) > 0 oraliqda funksiya...', 'Если f′(x) > 0 на промежутке, функция...', 'If f′(x) > 0 on an interval, f is...'), [L('o‘sadi', 'возрастает', 'increasing'), L('kamayadi', 'убывает', 'decreasing'), L('o‘zgarmas', 'постоянна', 'constant')], 0),
              choice(L('f′ ishorasi «+» dan «−» ga o‘tdi. Bu nuqta?', 'Знак f′ сменился с «+» на «−». Эта точка —', 'f′ changes from + to −. The point is a...'), [L('maksimum', 'максимум', 'maximum'), L('minimum', 'минимум', 'minimum'), L('ekstremum emas', 'не экстремум', 'not an extremum')], 0),
              choice(L('f(x) = x³ uchun x = 0 nuqta...', 'Для f(x) = x³ точка x = 0 —', 'For f(x) = x³, x = 0 is...'), [L('kritik, lekin ekstremum emas', 'критическая, но не экстремум', 'critical but not an extremum'), L('minimum', 'минимум', 'a minimum'), L('maksimum', 'максимум', 'a maximum')], 0)]); } }
          ],
          quiz: [{ q: L('f(x) = x² − 4x + 1 ning minimum nuqtasi?', 'Точка минимума f(x) = x² − 4x + 1?', 'Minimum point of f(x) = x² − 4x + 1?'), o: ['x = 2', 'x = −2', 'x = 4'], a: 0 }, { q: L('Kritik nuqtada f′(x) = ?', 'В критической точке f′(x) = ?', 'At a critical point f′(x) = ?'), o: [L('0 yoki mavjud emas', '0 или не существует', '0 or undefined'), '1', L('doim musbat', 'всегда положительна', 'always positive')], a: 0 }] },

        { id: 't7', lessons: ch(1), title: L('Ekstremal masalalar: eng katta va eng kichik qiymat', 'Экстремальные задачи: наибольшее и наименьшее значения', 'Optimisation: greatest and least values'),
          keys: [L('kesmadagi eng katta qiymat', 'наибольшее значение на отрезке', 'greatest value on an interval'), L('optimallashtirish', 'оптимизация', 'optimisation')],
          scene: [{ obj: 'box', n: 2, color: 'orange' }],
          explain: L('[a; b] kesmada uzluksiz funksiyaning eng katta va eng kichik qiymatini topish: kritik nuqtalarni toping, f ni kritik nuqtalarda va kesma uchlarida hisoblang, eng kattasi va kichigini tanlang. Amaliy masalalar: perimetri P bo‘lgan to‘g‘ri to‘rtburchaklar ichida eng katta yuzlisi — kvadrat, S<sub>max</sub> = (P/4)²; yig‘indisi S bo‘lgan ikki son ko‘paytmasi eng katta bo‘lishi uchun ular teng.',
            'Наибольшее и наименьшее значения непрерывной функции на [a; b]: найти критические точки, вычислить f в них и на концах отрезка, выбрать наибольшее и наименьшее. Прикладные задачи: среди прямоугольников с периметром P наибольшую площадь имеет квадрат, S<sub>max</sub> = (P/4)²; произведение двух чисел с суммой S наибольшее, когда они равны.',
            'Greatest and least values of a continuous function on [a; b]: find the critical points, evaluate f there and at the endpoints, pick the largest and smallest. Applied problems: among rectangles with perimeter P, the square has the largest area, S<sub>max</sub> = (P/4)²; two numbers with sum S have the largest product when equal.'),
          rule: L('kritik nuqtalar + kesma uchlari', 'критические точки + концы отрезка', 'critical points + endpoints'),
          acts: [
            { type: 'drill', n: 8, make: function (R) { var k = R(0, 2), m = R(2, 15), a = R(1, 4); return [
              { q: mk(function (l) { return { uz: 'Perimetr ' + (4 * m) + ' bo‘lgan to‘g‘ri to‘rtburchakning eng katta yuzi', ru: 'Наибольшая площадь прямоугольника с периметром ' + (4 * m), en: 'Largest area of a rectangle with perimeter ' + (4 * m) }[l]; }), a: m * m },
              { q: mk(function (l) { return { uz: 'Yig‘indisi ' + (2 * m) + ' bo‘lgan ikki sonning eng katta ko‘paytmasi', ru: 'Наибольшее произведение двух чисел с суммой ' + (2 * m), en: 'Largest product of two numbers with sum ' + (2 * m) }[l]; }), a: m * m },
              { q: mk(function (l) { return { uz: 'f(x) = x² ning [' + (-a) + '; ' + (a + 2) + '] dagi eng katta qiymati', ru: 'Наибольшее значение f(x) = x² на [' + (-a) + '; ' + (a + 2) + ']', en: 'Greatest value of f(x) = x² on [' + (-a) + '; ' + (a + 2) + ']' }[l]; }), a: (a + 2) * (a + 2) }][k]; } },
            { type: 'choose', icon: '📦', make: function () { return pick([
              choice(L('Berilgan perimetrli to‘g‘ri to‘rtburchaklardan eng katta yuzlisi?', 'Прямоугольник данного периметра с наибольшей площадью?', 'Which rectangle of given perimeter has the largest area?'), [L('kvadrat', 'квадрат', 'the square'), L('eng uzuni', 'самый длинный', 'the longest'), L('hammasi teng', 'все равны', 'all equal')], 0),
              choice(L('f(x) = x² ning [−1; 3] dagi eng kichik qiymati?', 'Наименьшее значение x² на [−1; 3]?', 'Least value of x² on [−1; 3]?'), ['0', '1', '9'], 0),
              choice(L('Eng katta qiymat qayerda bo‘lishi mumkin?', 'Где может быть наибольшее значение?', 'Where can the greatest value be?'), [L('kritik nuqtada yoki kesma uchida', 'в критической точке или на конце', 'at a critical point or an endpoint'), L('faqat x = 0 da', 'только при x = 0', 'only at x = 0'), L('faqat o‘rtada', 'только в середине', 'only in the middle')], 0)]); } }
          ],
          quiz: [{ q: L('Perimetr 20. Eng katta yuz?', 'Периметр 20. Наибольшая площадь?', 'Perimeter 20. Largest area?'), o: ['25', '24', '100'], a: 0 }, { q: L('Yig‘indisi 10 bo‘lgan sonlarning eng katta ko‘paytmasi?', 'Наибольшее произведение чисел с суммой 10?', 'Largest product of numbers summing to 10?'), o: ['25', '24', '21'], a: 0 }] },

        { id: 't8', lessons: ch(1), title: L('Taqribiy hisoblashlar', 'Приближённые вычисления', 'Approximate calculations'),
          keys: ["f(x₀ + Δx) ≈ f(x₀) + f′(x₀)Δx", '(1 + x)ⁿ ≈ 1 + nx'],
          scene: [{ obj: 'pencil', n: 1, color: 'yellow' }, { obj: 'cube', n: 2, color: 'blue' }],
          explain: L('Kichik Δx da funksiya orttirmasi taxminan differensialga teng: Δy ≈ f′(x₀)Δx, demak f(x₀ + Δx) ≈ f(x₀) + f′(x₀)Δx. Formulalar: √(a² + Δ) ≈ a + Δ/(2a); (1 + x)ⁿ ≈ 1 + nx; sin x ≈ x (x radianda, kichik). Masalan, √101 ≈ 10 + 1/20 = 10,05 (aniq qiymat 10,0499…).',
            'При малом Δx приращение функции примерно равно дифференциалу: Δy ≈ f′(x₀)Δx, т.е. f(x₀ + Δx) ≈ f(x₀) + f′(x₀)Δx. Формулы: √(a² + Δ) ≈ a + Δ/(2a); (1 + x)ⁿ ≈ 1 + nx; sin x ≈ x (x в радианах, малое). Например, √101 ≈ 10 + 1/20 = 10,05 (точно 10,0499…).',
            'For small Δx the increment is about the differential: Δy ≈ f′(x₀)Δx, so f(x₀ + Δx) ≈ f(x₀) + f′(x₀)Δx. Formulas: √(a² + Δ) ≈ a + Δ/(2a); (1 + x)ⁿ ≈ 1 + nx; sin x ≈ x (small x in radians). E.g. √101 ≈ 10 + 1/20 = 10.05 (exactly 10.0499…).'),
          rule: "f(x₀ + Δx) ≈ f(x₀) + f′(x₀)·Δx",
          acts: [
            { type: 'drill', n: 8, make: function (R) { var k = R(0, 2), d = R(1, 9), n = R(2, 5), a = pick([10, 20]); return [
              { q: '√' + (a * a + d * 2) + ' ≈', a: r6(a + d / a) },
              { q: '(1 + 0,0' + d + ')<sup>' + n + '</sup> ≈', a: r6(1 + n * d / 100) },
              { q: '(1 − 0,0' + d + ')<sup>' + n + '</sup> ≈', a: r6(1 - n * d / 100) }][k]; } },
            { type: 'choose', icon: '≈', make: function () { return pick([
              choice('√(a² + Δ) ≈ ?', ['a + Δ/(2a)', 'a + Δ', 'a + Δ/a'], 0),
              choice(L('Kichik x uchun sin x ≈ ?', 'Для малых x sin x ≈ ?', 'For small x, sin x ≈ ?'), ['x', '1', '0'], 0),
              choice('1,01¹⁰ ≈ ?', ['1,1', '1,01', '10,1'], 0)]); } }
          ],
          quiz: [{ q: '√101 ≈ ?', o: ['10,05', '10,5', '10,1'], a: 0 }, { q: '(1,02)³ ≈ ?', o: ['1,06', '1,02', '1,6'], a: 0 }] },

        { id: 't9', lessons: ch(1), title: L('Hosila yordamida modellashtirish', 'Моделирование с помощью производной', 'Modelling with the derivative'),
          keys: ["v = s′, a = v′", L('o‘zgarish tezligi', 'скорость изменения', 'rate of change'), L('marjinal xarajat', 'предельные издержки', 'marginal cost')],
          scene: [{ obj: 'drone', n: 2, color: 'violet' }],
          explain: L('Hosila — har qanday jarayonning o‘zgarish tezligi. Fizikada: v(t) = s′(t), a(t) = v′(t). Iqtisodda: xarajat C(x) bo‘lsa, C′(x) — marjinal xarajat (bitta qo‘shimcha mahsulot narxi). Biologiyada — populyatsiya o‘sish tezligi, kimyoda — reaksiya tezligi. Masalan, s(t) = t³ − 6t² bo‘lsa, v = 3t² − 12t, a = 6t − 12; t = 2 da tezlanish 0.',
            'Производная — скорость изменения любого процесса. В физике: v(t) = s′(t), a(t) = v′(t). В экономике: если C(x) — издержки, то C′(x) — предельные издержки (стоимость одной дополнительной единицы). В биологии — скорость роста популяции, в химии — скорость реакции. Например, s(t) = t³ − 6t²: v = 3t² − 12t, a = 6t − 12; при t = 2 ускорение 0.',
            'The derivative is the rate of change of any process. In physics, v(t) = s′(t) and a(t) = v′(t). In economics, if C(x) is cost, C′(x) is the marginal cost (cost of one more unit). In biology it is population growth rate; in chemistry, reaction rate. E.g. s(t) = t³ − 6t² gives v = 3t² − 12t and a = 6t − 12, so at t = 2 the acceleration is 0.'),
          rule: "v(t) = s′(t),  a(t) = v′(t)",
          acts: [
            { type: 'drill', n: 8, make: function (R) { var k = R(0, 2), b = R(1, 9), t = R(1, 5), a = R(1, 4); return [
              { q: 's(t) = t³ − ' + b + 't;  v(' + t + ')', a: 3 * t * t - b },
              { q: 's(t) = t³ − ' + b + 't;  a(' + t + ')', a: 6 * t },
              { q: 'C(x) = ' + a + 'x² + ' + b + 'x;  C′(' + (t * 10) + ')', a: 2 * a * t * 10 + b }][k]; } },
            { type: 'choose', icon: '🚀', make: function () { return pick([
              choice(L('Tezlikning hosilasi?', 'Производная скорости?', 'The derivative of speed is?'), [L('tezlanish', 'ускорение', 'acceleration'), L('yo‘l', 'путь', 'distance'), L('vaqt', 'время', 'time')], 0),
              choice(L('C′(x) iqtisodda nima?', 'Что такое C′(x) в экономике?', 'What is C′(x) in economics?'), [L('marjinal xarajat', 'предельные издержки', 'marginal cost'), L('foyda', 'прибыль', 'profit'), L('narx', 'цена', 'price')], 0),
              choice(L('Jism to‘xtagan paytda...', 'В момент остановки тела...', 'At the moment a body stops...'), ['v(t) = 0', 's(t) = 0', 'a(t) = 0'], 0)]); } }
          ],
          quiz: [{ q: 's(t) = t² + 3t. v(2) = ?', o: ['7', '10', '4'], a: 0 }, { q: 'v(t) = 5t. a = ?', o: ['5', '5t', '0'], a: 0 }] }
      ] },

      { id: 's2', title: L('Integral va uning tatbiqlari', 'Интеграл и его применения', 'The integral and its uses'), icon: '∫', color: 'green', topics: [
        { id: 't10', lessons: ch(2), title: L('Boshlang‘ich funksiya va aniqmas integral', 'Первообразная и неопределённый интеграл', 'Antiderivative and indefinite integral'),
          keys: ["F′(x) = f(x)", '∫ f(x) dx = F(x) + C'],
          scene: [{ obj: 'cylinder', n: 2, color: 'green' }],
          explain: L('Agar F′(x) = f(x) bo‘lsa, F — f ning <b>boshlang‘ich funksiyasi</b>. Masalan, x² — 2x ning boshlang‘ichi, chunki (x²)′ = 2x. Har qanday F + C ham boshlang‘ich bo‘ladi. Barcha boshlang‘ichlar to‘plami — <b>aniqmas integral</b>: ∫ f(x) dx = F(x) + C. Integrallash — differensiallashga teskari amal.',
            'Если F′(x) = f(x), то F — <b>первообразная</b> для f. Например, x² — первообразная для 2x, так как (x²)′ = 2x. Любая F + C тоже первообразная. Множество всех первообразных — <b>неопределённый интеграл</b>: ∫ f(x) dx = F(x) + C. Интегрирование — действие, обратное дифференцированию.',
            'If F′(x) = f(x), then F is an <b>antiderivative</b> of f. For example x² is an antiderivative of 2x since (x²)′ = 2x. Any F + C is one too. The set of all antiderivatives is the <b>indefinite integral</b>: ∫ f(x) dx = F(x) + C. Integration undoes differentiation.'),
          rule: '∫ f(x) dx = F(x) + C,  F′ = f',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var c = R(-9, 9), x0 = R(-3, 4), k = R(0, 1); return k ? { q: mk(function (l) { return { uz: 'F — 2x ning boshlang‘ichi, F(0) = ' + ns(c) + ';  F(' + ns(x0) + ')', ru: 'F — первообразная 2x, F(0) = ' + ns(c) + ';  F(' + ns(x0) + ')', en: 'F is an antiderivative of 2x, F(0) = ' + ns(c) + ';  F(' + ns(x0) + ')' }[l]; }), a: x0 * x0 + c } : { q: mk(function (l) { return { uz: 'F — 3x² ning boshlang‘ichi, F(0) = ' + ns(c) + ';  F(' + ns(x0) + ')', ru: 'F — первообразная 3x², F(0) = ' + ns(c) + ';  F(' + ns(x0) + ')', en: 'F is an antiderivative of 3x², F(0) = ' + ns(c) + ';  F(' + ns(x0) + ')' }[l]; }), a: x0 * x0 * x0 + c }; } },
            { type: 'choose', icon: '🔄', make: function () { return pick([
              choice(L('cos x ning boshlang‘ichi?', 'Первообразная cos x?', 'An antiderivative of cos x?'), ['sin x', '−sin x', 'cos x'], 0),
              choice(L('eˣ ning boshlang‘ichi?', 'Первообразная eˣ?', 'An antiderivative of eˣ?'), ['eˣ', 'x·eˣ', 'ln x'], 0),
              choice(L('1/x (x > 0) ning boshlang‘ichi?', 'Первообразная 1/x (x > 0)?', 'An antiderivative of 1/x (x > 0)?'), ['ln x', '−1/x²', 'x'], 0),
              choice(L('sin x ning boshlang‘ichi?', 'Первообразная sin x?', 'An antiderivative of sin x?'), ['−cos x', 'cos x', '−sin x'], 0)]); } }
          ],
          quiz: [{ q: '∫ 2x dx = ?', o: ['x² + C', '2 + C', '2x² + C'], a: 0 }, { q: L('F boshlang‘ich bo‘lsa, F′ = ?', 'Если F — первообразная, F′ = ?', 'If F is an antiderivative, F′ = ?'), o: ['f', 'F', '0'], a: 0 }] },

        { id: 't11', lessons: ch(2), title: L('Integrallar jadvali. Integrallashning sodda qoidalari', 'Таблица интегралов. Простейшие правила', 'Table of integrals. Basic rules'),
          keys: ['∫ xⁿ dx = xⁿ⁺¹/(n + 1) + C', '∫ (f ± g) dx', '∫ k·f dx = k∫ f dx'],
          scene: [{ obj: 'book', n: 2, color: 'blue' }],
          explain: L('Jadval: ∫ xⁿ dx = xⁿ⁺¹/(n + 1) + C (n ≠ −1), ∫ dx/x = ln|x| + C, ∫ eˣ dx = eˣ + C, ∫ sin x dx = −cos x + C, ∫ cos x dx = sin x + C. Qoidalar: yig‘indining integrali integrallar yig‘indisiga teng, o‘zgarmas ko‘paytuvchi integral belgisidan chiqariladi, ∫ f(kx + b) dx = F(kx + b)/k + C.',
            'Таблица: ∫ xⁿ dx = xⁿ⁺¹/(n + 1) + C (n ≠ −1), ∫ dx/x = ln|x| + C, ∫ eˣ dx = eˣ + C, ∫ sin x dx = −cos x + C, ∫ cos x dx = sin x + C. Правила: интеграл суммы равен сумме интегралов, постоянный множитель выносится за знак интеграла, ∫ f(kx + b) dx = F(kx + b)/k + C.',
            'Table: ∫ xⁿ dx = xⁿ⁺¹/(n + 1) + C (n ≠ −1), ∫ dx/x = ln|x| + C, ∫ eˣ dx = eˣ + C, ∫ sin x dx = −cos x + C, ∫ cos x dx = sin x + C. Rules: the integral of a sum is the sum of integrals, a constant factor comes out, and ∫ f(kx + b) dx = F(kx + b)/k + C.'),
          rule: '∫ xⁿ dx = xⁿ⁺¹/(n + 1) + C',
          acts: [
            { type: 'drill', title: L('Koeffitsiyent', 'Коэффициент', 'Coefficient'), n: 8, make: function (R) { var n = R(1, 5), k = R(1, 4), a = k * (n + 1); return { q: '∫ ' + a + 'x' + (n > 1 ? '<sup>' + n + '</sup>' : '') + ' dx = ? · x<sup>' + (n + 1) + '</sup> + C', a: k }; } },
            { type: 'choose', icon: '📚', make: function (R) { var k = R(2, 6); return pick([
              choice('∫ cos ' + k + 'x dx = ?', ['(1/' + k + ') sin ' + k + 'x + C', k + ' sin ' + k + 'x + C', 'sin ' + k + 'x + C'], 0),
              choice('∫ e<sup>' + k + 'x</sup> dx = ?', ['(1/' + k + ') e<sup>' + k + 'x</sup> + C', k + 'e<sup>' + k + 'x</sup> + C', 'e<sup>' + k + 'x</sup> + C'], 0),
              choice('∫ (2x + 3) dx = ?', ['x² + 3x + C', '2 + C', 'x² + 3 + C'], 0),
              choice('∫ dx / x = ?', ['ln|x| + C', '−1/x² + C', 'x + C'], 0)]); } }
          ],
          quiz: [{ q: '∫ x³ dx = ?', o: ['x⁴/4 + C', '3x² + C', 'x⁴ + C'], a: 0 }, { q: '∫ 5 dx = ?', o: ['5x + C', '5 + C', '0'], a: 0 }] },

        { id: 't12', lessons: ch(2), title: L('Aniq integral. Nyuton–Leybnits formulasi', 'Определённый интеграл. Формула Ньютона–Лейбница', 'The definite integral. Newton–Leibniz formula'),
          keys: ['∫ₐᵇ f(x) dx = F(b) − F(a)', L('egri chiziqli trapetsiya', 'криволинейная трапеция', 'curvilinear trapezium')],
          scene: [{ obj: 'flat', n: 1, color: 'green' }, { obj: 'cylinder', n: 1, color: 'yellow' }],
          explain: L('<b>Aniq integral</b> ∫ₐᵇ f(x) dx — f ≥ 0 bo‘lganda y = f(x) grafigi, Ox o‘qi va x = a, x = b to‘g‘ri chiziqlar bilan chegaralangan egri chiziqli trapetsiya yuzi. <b>Nyuton–Leybnits formulasi</b>: ∫ₐᵇ f(x) dx = F(b) − F(a), F — boshlang‘ich. Masalan, ∫₀³ x² dx = 27/3 − 0 = 9.',
            '<b>Определённый интеграл</b> ∫ₐᵇ f(x) dx при f ≥ 0 — площадь криволинейной трапеции, ограниченной графиком y = f(x), осью Ox и прямыми x = a, x = b. <b>Формула Ньютона–Лейбница</b>: ∫ₐᵇ f(x) dx = F(b) − F(a), F — первообразная. Например, ∫₀³ x² dx = 27/3 − 0 = 9.',
            'For f ≥ 0, the <b>definite integral</b> ∫ₐᵇ f(x) dx is the area of the region under y = f(x), above the x-axis, between x = a and x = b. The <b>Newton–Leibniz formula</b>: ∫ₐᵇ f(x) dx = F(b) − F(a), where F is an antiderivative. E.g. ∫₀³ x² dx = 27/3 − 0 = 9.'),
          rule: '∫ₐᵇ f(x) dx = F(b) − F(a)',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var k = R(0, 3), b = R(1, 6), a = R(0, 3), c = R(2, 9); return [
              { q: '∫<sub>0</sub><sup>' + b + '</sup> 2x dx', a: b * b },
              { q: '∫<sub>0</sub><sup>' + b + '</sup> 3x² dx', a: b * b * b },
              { q: '∫<sub>' + a + '</sub><sup>' + (a + b) + '</sup> ' + c + ' dx', a: c * b },
              { q: '∫<sub>1</sub><sup>' + (b + 1) + '</sup> 2x dx', a: (b + 1) * (b + 1) - 1 }][k]; } },
            { type: 'choose', icon: '∫', make: function () { var b = pick([1, 2, 3]); return pick([
              choice(mk(function (l) { return { uz: 'Yashil yuz: ∫₀', ru: 'Зелёная площадь: ∫₀', en: 'Green area: ∫₀' }[l] + '<sup>' + b + '</sup> x² dx = ?' + areaFig(b); }), [b === 3 ? '9' : (b * b * b) + '/3', String(b * b * b), String(b * b * b + 1)], 0),
              choice('∫<sub>0</sub><sup>π</sup> sin x dx = ?', ['2', '0', '1'], 0),
              choice('∫<sub>a</sub><sup>a</sup> f(x) dx = ?', ['0', 'f(a)', '1'], 0)]); } }
          ],
          quiz: [{ q: '∫₀² 2x dx = ?', o: ['4', '2', '8'], a: 0 }, { q: '∫₀¹ x dx = ?', o: ['1/2', '1', '2'], a: 0 }] },

        { id: 't13', lessons: ch(2), title: L('Aniq integralning tatbiqlari: yuzlar', 'Применения интеграла: площади', 'Applications: areas'),
          keys: ['S = ∫ₐᵇ (f₂ − f₁) dx', L('kesishish nuqtalari', 'точки пересечения', 'intersection points'), L('aylanish jismi hajmi', 'объём тела вращения', 'volume of revolution')],
          scene: [{ obj: 'flat', n: 2, color: 'cyan' }],
          explain: L('Ikki egri chiziq orasidagi yuz: S = ∫ₐᵇ (f₂(x) − f₁(x)) dx, bunda f₂ ≥ f₁, a va b — kesishish nuqtalari. Masalan, y = x va y = x² orasida: kesishish 0 va 1 da, S = ∫₀¹ (x − x²) dx = 1/2 − 1/3 = 1/6. Integral bilan aylanish jismlari hajmi ham topiladi: V = π∫ₐᵇ f²(x) dx.',
            'Площадь между двумя кривыми: S = ∫ₐᵇ (f₂(x) − f₁(x)) dx, где f₂ ≥ f₁, a и b — точки пересечения. Например, между y = x и y = x²: пересечения в 0 и 1, S = ∫₀¹ (x − x²) dx = 1/2 − 1/3 = 1/6. Интегралом находят и объёмы тел вращения: V = π∫ₐᵇ f²(x) dx.',
            'Area between two curves: S = ∫ₐᵇ (f₂(x) − f₁(x)) dx with f₂ ≥ f₁ and a, b the intersection points. Between y = x and y = x²: they meet at 0 and 1, so S = ∫₀¹ (x − x²) dx = 1/2 − 1/3 = 1/6. Integrals also give volumes of revolution: V = π∫ₐᵇ f²(x) dx.'),
          rule: 'S = ∫ₐᵇ (f₂(x) − f₁(x)) dx',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var k = R(0, 2), a = pick([3, 6]), b = R(1, 5), c = R(2, 6); return [
              { q: mk(function (l) { return { uz: 'y = x² va y = ' + (a * a) + ' orasidagi yuz', ru: 'Площадь между y = x² и y = ' + (a * a), en: 'Area between y = x² and y = ' + (a * a) }[l]; }), a: 4 * a * a * a / 3 },
              { q: mk(function (l) { return { uz: 'y = 3x², Ox, x = 0, x = ' + b + ' bilan chegaralangan yuz', ru: 'Площадь под y = 3x² от 0 до ' + b, en: 'Area under y = 3x² from 0 to ' + b }[l]; }), a: b * b * b },
              { q: mk(function (l) { return { uz: 'y = ' + c + 'x, Ox, x = ' + b + ' bilan chegaralangan uchburchak yuzi', ru: 'Площадь под y = ' + c + 'x от 0 до ' + b, en: 'Area under y = ' + c + 'x from 0 to ' + b }[l]; }), a: c * b * b / 2 }][k]; } },
            { type: 'choose', icon: '🟩', make: function () { return pick([
              choice(L('y = x va y = x² orasidagi yuz?', 'Площадь между y = x и y = x²?', 'Area between y = x and y = x²?'), ['1/6', '1/2', '1/3'], 0),
              choice(L('Yuz uchun integral chegaralari qanday topiladi?', 'Как найти пределы интегрирования?', 'How do we find the limits for the area?'), [L('chiziqlar kesishish nuqtalaridan', 'по точкам пересечения линий', 'from the intersection points'), L('har doim 0 va 1', 'всегда 0 и 1', 'always 0 and 1'), L('tasodifan', 'наугад', 'at random')], 0),
              choice(L('Aylanish jismi hajmi formulasi?', 'Формула объёма тела вращения?', 'Volume of revolution formula?'), ['V = π∫ f² dx', 'V = ∫ f dx', 'V = 2π∫ f dx'], 0)]); } }
          ],
          quiz: [{ q: L('y = x², Ox, x = 3 bilan chegaralangan yuz?', 'Площадь под y = x² от 0 до 3?', 'Area under y = x² from 0 to 3?'), o: ['9', '27', '3'], a: 0 }, { q: L('f₂ ≥ f₁ bo‘lsa, S = ∫ ... dx', 'Если f₂ ≥ f₁, S = ∫ ... dx', 'If f₂ ≥ f₁, S = ∫ ... dx'), o: ['(f₂ − f₁)', '(f₁ − f₂)', '(f₁ + f₂)'], a: 0 }] },

        { id: 't14', lessons: ch(2), title: L('Taqribiy integrallash', 'Приближённое интегрирование', 'Approximate integration'),
          keys: [L('to‘g‘ri to‘rtburchaklar usuli', 'метод прямоугольников', 'rectangle method'), L('trapetsiyalar usuli', 'метод трапеций', 'trapezium rule'), L('Simpson usuli', 'метод Симпсона', 'Simpson’s rule')],
          scene: [{ obj: 'box', n: 3, color: 'yellow' }],
          explain: L('Boshlang‘ichi topilmaydigan integrallar taqribiy hisoblanadi. [a; b] ni n ta teng bo‘lakka bo‘lamiz, h = (b − a)/n. <b>Trapetsiyalar formulasi</b>: ∫ₐᵇ f dx ≈ h·((y₀ + yₙ)/2 + y₁ + … + yₙ₋₁). To‘g‘ri to‘rtburchaklar usuli soddaroq, Simpson usuli aniqroq. Masalan, ∫₀² x² dx ni n = 2 da trapetsiyalar bilan: 1·(0/2 + 1 + 4/2) = 3 (aniq qiymat 8/3).',
            'Интегралы без элементарной первообразной вычисляют приближённо. Делим [a; b] на n равных частей, h = (b − a)/n. <b>Формула трапеций</b>: ∫ₐᵇ f dx ≈ h·((y₀ + yₙ)/2 + y₁ + … + yₙ₋₁). Метод прямоугольников проще, метод Симпсона точнее. Например, ∫₀² x² dx при n = 2 трапециями: 1·(0/2 + 1 + 4/2) = 3 (точно 8/3).',
            'Integrals without an elementary antiderivative are approximated. Split [a; b] into n equal parts, h = (b − a)/n. <b>Trapezium rule</b>: ∫ₐᵇ f dx ≈ h·((y₀ + yₙ)/2 + y₁ + … + yₙ₋₁). Rectangles are simpler; Simpson’s rule is more accurate. E.g. ∫₀² x² dx with n = 2 trapezia: 1·(0/2 + 1 + 4/2) = 3 (exact value 8/3).'),
          rule: 'h·((y₀ + yₙ)/2 + y₁ + … + yₙ₋₁)',
          acts: [
            { type: 'drill', title: L('Bitta trapetsiya', 'Одна трапеция', 'One trapezium'), n: 8, make: function (R) { var a = R(0, 4), w = R(1, 4), fa = R(1, 12), fb = R(1, 12), k = R(0, 1); return k ? { q: 'a = ' + a + ', b = ' + (a + w) + ', f(a) = ' + fa + ', f(b) = ' + fb + ';  ∫ ≈ (b − a)(f(a) + f(b))/2', a: r6(w * (fa + fb) / 2) } : { q: mk(function (l) { return 'h = ' + w + ', y₀ = ' + fa + ', y₁ = ' + fb + ', y₂ = ' + a + { uz: ';  trapetsiyalar', ru: ';  трапеции', en: ';  trapezium rule' }[l]; }), a: r6(w * ((fa + a) / 2 + fb)) }; } },
            { type: 'choose', icon: '📊', make: function () { return pick([
              choice(L('Chiziqli funksiya uchun trapetsiyalar usuli...', 'Для линейной функции метод трапеций...', 'For a linear function the trapezium rule is...'), [L('aniq natija beradi', 'даёт точный результат', 'exact'), L('doim xato', 'всегда ошибается', 'always wrong'), L('ishlamaydi', 'не работает', 'useless')], 0),
              choice(L('n oshsa, xatolik...', 'При увеличении n погрешность...', 'As n grows, the error...'), [L('kamayadi', 'уменьшается', 'decreases'), L('oshadi', 'растёт', 'grows'), L('o‘zgarmaydi', 'не меняется', 'stays the same')], 0),
              choice(L('Qaysi usul odatda eng aniq?', 'Какой метод обычно точнее?', 'Which method is usually most accurate?'), [L('Simpson', 'Симпсона', 'Simpson’s'), L('chap to‘g‘ri to‘rtburchaklar', 'левых прямоугольников', 'left rectangles'), L('hammasi teng', 'все одинаковы', 'all equal')], 0)]); } }
          ],
          quiz: [{ q: L('h = (b − a)/n — bu...', 'h = (b − a)/n — это...', 'h = (b − a)/n is...'), o: [L('qadam (bo‘lak uzunligi)', 'шаг (длина части)', 'the step'), L('integral', 'интеграл', 'the integral'), L('xatolik', 'погрешность', 'the error')], a: 0 }, { q: L('∫₀² x² dx, trapetsiyalar n = 2?', '∫₀² x² dx, трапеции n = 2?', '∫₀² x² dx, trapezium n = 2?'), o: ['3', '8/3', '4'], a: 0 }] }
      ] },

      { id: 's3', title: L('Ma’lumotlar tahlili. Ehtimollik', 'Анализ данных. Вероятность', 'Data analysis. Probability'), icon: '🎲', color: 'pink', topics: [
        { id: 't15', lessons: ch(3), title: L('Kombinatorika masalalari', 'Задачи комбинаторики', 'Combinatorics'),
          keys: ['Pₙ = n!', 'Aₙᵏ = n!/(n − k)!', 'Cₙᵏ = n!/(k!(n − k)!)'],
          scene: [{ obj: 'cube', n: 3, color: 'pink' }],
          explain: L('<b>O‘rin almashtirishlar</b>: n ta elementni tartiblash usullari Pₙ = n!. <b>O‘rinlashtirishlar</b>: n tadan k tasini tartib muhim holda tanlash Aₙᵏ = n!/(n − k)!. <b>Guruhlashlar</b> (kombinatsiyalar): tartib muhim emas, Cₙᵏ = n!/(k!(n − k)!). Ko‘paytirish qoidasi: birinchi tanlov m usulda, ikkinchisi n usulda — jami m·n.',
            '<b>Перестановки</b>: число способов упорядочить n элементов Pₙ = n!. <b>Размещения</b>: выбор k из n с учётом порядка Aₙᵏ = n!/(n − k)!. <b>Сочетания</b>: порядок не важен, Cₙᵏ = n!/(k!(n − k)!). Правило умножения: первый выбор m способами, второй n способами — всего m·n.',
            '<b>Permutations</b>: ways to order n items, Pₙ = n!. <b>Arrangements</b>: choose k of n where order matters, Aₙᵏ = n!/(n − k)!. <b>Combinations</b>: order does not matter, Cₙᵏ = n!/(k!(n − k)!). Product rule: m ways then n ways gives m·n in total.'),
          rule: 'Cₙᵏ = n! / (k!·(n − k)!)',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var n = R(4, 9), k = R(2, 3), t = R(0, 2); return [
              { q: 'P<sub>' + Math.min(n, 7) + '</sub> = ' + Math.min(n, 7) + '!', a: fact(Math.min(n, 7)) },
              { q: 'A<sub>' + n + '</sub><sup>' + k + '</sup>', a: Ank(n, k) },
              { q: 'C<sub>' + n + '</sub><sup>' + k + '</sup>', a: Cnk(n, k) }][t]; } },
            { type: 'choose', icon: '🧩', make: function () { return pick([
              choice(L('Sinfdan 3 kishilik navbatchilar guruhi tanlanadi. Qaysi formula?', 'Из класса выбирают группу из 3 дежурных. Какая формула?', 'Choosing a group of 3 from a class. Which formula?'), [L('guruhlash Cₙᵏ', 'сочетания Cₙᵏ', 'combinations Cₙᵏ'), L('o‘rin almashtirish', 'перестановки', 'permutations'), L('o‘rinlashtirish', 'размещения', 'arrangements')], 0),
              choice(L('Sardor, o‘rinbosar va kotib saylanadi. Qaysi formula?', 'Выбирают старосту, заместителя и секретаря. Какая формула?', 'Electing a head, deputy and secretary. Which formula?'), [L('o‘rinlashtirish Aₙᵏ', 'размещения Aₙᵏ', 'arrangements Aₙᵏ'), L('guruhlash', 'сочетания', 'combinations'), L('ko‘paytma emas', 'не произведение', 'none')], 0),
              choice('0! = ?', ['1', '0', L('aniqlanmagan', 'не определён', 'undefined')], 0),
              choice('C<sub>n</sub><sup>k</sup> = C<sub>n</sub><sup>?</sup>', ['n − k', 'k + 1', 'n'], 0)]); } }
          ],
          quiz: [{ q: '5! = ?', o: ['120', '25', '60'], a: 0 }, { q: 'C₅² = ?', o: ['10', '20', '5'], a: 0 }] },

        { id: 't16', lessons: ch(3), title: L('Nyuton binomi', 'Бином Ньютона', 'The binomial theorem'),
          keys: ['(a + b)ⁿ = Σ Cₙᵏ aⁿ⁻ᵏ bᵏ', L('Paskal uchburchagi', 'треугольник Паскаля', 'Pascal’s triangle')],
          scene: [{ obj: 'star', n: 3, color: 'yellow' }],
          explain: L('<b>Nyuton binomi</b>: (a + b)ⁿ = Cₙ⁰aⁿ + Cₙ¹aⁿ⁻¹b + … + Cₙⁿbⁿ. Koeffitsiyentlar <b>Paskal uchburchagi</b>dan olinadi: har bir son yuqoridagi ikki son yig‘indisi (1; 1 2 1; 1 3 3 1; 1 4 6 4 1 …). Umumiy had Tₖ₊₁ = Cₙᵏaⁿ⁻ᵏbᵏ. Koeffitsiyentlar yig‘indisi 2ⁿ. Bu qatorni Umar Xayyom va al-Karajiy ham bilgan.',
            '<b>Бином Ньютона</b>: (a + b)ⁿ = Cₙ⁰aⁿ + Cₙ¹aⁿ⁻¹b + … + Cₙⁿbⁿ. Коэффициенты берутся из <b>треугольника Паскаля</b>: каждое число — сумма двух над ним (1; 1 2 1; 1 3 3 1; 1 4 6 4 1 …). Общий член Tₖ₊₁ = Cₙᵏaⁿ⁻ᵏbᵏ. Сумма коэффициентов 2ⁿ. Эти числа знали ещё Омар Хайям и аль-Караджи.',
            'The <b>binomial theorem</b>: (a + b)ⁿ = Cₙ⁰aⁿ + Cₙ¹aⁿ⁻¹b + … + Cₙⁿbⁿ. The coefficients come from <b>Pascal’s triangle</b>: each number is the sum of the two above it (1; 1 2 1; 1 3 3 1; 1 4 6 4 1 …). The general term is Tₖ₊₁ = Cₙᵏaⁿ⁻ᵏbᵏ, and the coefficients sum to 2ⁿ. Omar Khayyam and al-Karaji already knew these numbers.'),
          rule: 'Tₖ₊₁ = Cₙᵏ·aⁿ⁻ᵏ·bᵏ',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var n = R(3, 6), k = R(1, n - 1), c = R(1, 2), t = R(0, 2); return [
              { q: mk(function (l) { return { uz: '(x + ' + c + ')<sup>' + n + '</sup> da x<sup>' + k + '</sup> oldidagi koeffitsiyent', ru: 'Коэффициент при x<sup>' + k + '</sup> в (x + ' + c + ')<sup>' + n + '</sup>', en: 'Coefficient of x<sup>' + k + '</sup> in (x + ' + c + ')<sup>' + n + '</sup>' }[l]; }), a: Cnk(n, k) * Math.pow(c, n - k) },
              { q: mk(function (l) { return { uz: '(a + b)<sup>' + (n + 2) + '</sup> koeffitsiyentlari yig‘indisi', ru: 'Сумма коэффициентов (a + b)<sup>' + (n + 2) + '</sup>', en: 'Sum of coefficients of (a + b)<sup>' + (n + 2) + '</sup>' }[l]; }), a: Math.pow(2, n + 2) },
              { q: mk(function (l) { return { uz: '(a + b)<sup>' + n + '</sup> yoyilmasidagi hadlar soni', ru: 'Число членов в разложении (a + b)<sup>' + n + '</sup>', en: 'Number of terms in (a + b)<sup>' + n + '</sup>' }[l]; }), a: n + 1 }][t]; } },
            { type: 'choose', title: L('Paskal uchburchagi', 'Треугольник Паскаля', 'Pascal’s triangle'), icon: '🔺', make: function () { return pick([
              choice(L('1 4 6 4 1 dan keyingi qator?', 'Строка после 1 4 6 4 1?', 'The row after 1 4 6 4 1?'), ['1 5 10 10 5 1', '1 5 6 6 5 1', '1 4 10 10 4 1'], 0),
              choice('(a + b)² = ?', ['a² + 2ab + b²', 'a² + b²', 'a² + ab + b²'], 0),
              choice('(a − b)³ = ?', ['a³ − 3a²b + 3ab² − b³', 'a³ − b³', 'a³ − 3ab + b³'], 0)]); } }
          ],
          quiz: [{ q: L('(a + b)⁵ da a³b² koeffitsiyenti?', 'Коэффициент при a³b² в (a + b)⁵?', 'Coefficient of a³b² in (a + b)⁵?'), o: ['10', '5', '20'], a: 0 }, { q: L('(a + b)⁴ koeffitsiyentlari yig‘indisi?', 'Сумма коэффициентов (a + b)⁴?', 'Sum of coefficients of (a + b)⁴?'), o: ['16', '8', '4'], a: 0 }] },

        { id: 't17', lessons: ch(3), title: L('Statistik ma’lumotlar: o‘rta qiymat, moda, mediana, chetlanish', 'Статистика: среднее, мода, медиана, отклонение', 'Statistics: mean, mode, median, deviation'),
          keys: [L('o‘rta qiymat', 'среднее', 'mean'), L('moda, mediana', 'мода, медиана', 'mode, median'), L('standart chetlanish σ', 'стандартное отклонение σ', 'standard deviation σ')],
          scene: [{ obj: 'box', n: 3, color: 'violet' }],
          explain: L('Ma’lumotlar jadval, gistogramma, doiraviy diagramma ko‘rinishida beriladi. <b>O‘rta qiymat</b> x̄ = (x₁ + … + xₙ)/n, <b>moda</b> — eng ko‘p uchraydigan qiymat, <b>mediana</b> — tartiblangan qatorning o‘rtasi, <b>kenglik</b> — max − min. Tarqoqlik o‘lchovi: dispersiya D = ((x₁ − x̄)² + … + (xₙ − x̄)²)/n va <b>standart chetlanish</b> σ = √D.',
            'Данные задают таблицей, гистограммой, круговой диаграммой. <b>Среднее</b> x̄ = (x₁ + … + xₙ)/n, <b>мода</b> — самое частое значение, <b>медиана</b> — середина упорядоченного ряда, <b>размах</b> — max − min. Мера разброса: дисперсия D = ((x₁ − x̄)² + … + (xₙ − x̄)²)/n и <b>стандартное отклонение</b> σ = √D.',
            'Data come as tables, histograms and pie charts. The <b>mean</b> is x̄ = (x₁ + … + xₙ)/n, the <b>mode</b> is the most frequent value, the <b>median</b> the middle of the ordered list and the <b>range</b> is max − min. Spread is measured by the variance D = ((x₁ − x̄)² + … + (xₙ − x̄)²)/n and the <b>standard deviation</b> σ = √D.'),
          rule: 'σ = √D,  D = Σ(xᵢ − x̄)² / n',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var m = R(3, 12), d = R(1, 4), xs = [m - 2 * d, m - d, m, m, m + d + d + 1], s = xs.slice().sort(function (a, b) { return a - b; }), k = R(0, 3); var show = xs.slice().sort(function () { return Math.random() - 0.5; }).join('; ');
              return [{ q: mk(function (l) { return show + ';  ' + { uz: 'o‘rta qiymat', ru: 'среднее', en: 'mean' }[l]; }), a: r6((xs[0] + xs[1] + xs[2] + xs[3] + xs[4]) / 5) },
                { q: mk(function (l) { return show + ';  ' + { uz: 'mediana', ru: 'медиана', en: 'median' }[l]; }), a: s[2] },
                { q: mk(function (l) { return show + ';  ' + { uz: 'moda', ru: 'мода', en: 'mode' }[l]; }), a: m },
                { q: mk(function (l) { return show + ';  ' + { uz: 'kenglik', ru: 'размах', en: 'range' }[l]; }), a: s[4] - s[0] }][k]; } },
            { type: 'choose', icon: '📊', make: function () { return pick([
              choice(L('2, 4, 4, 4, 5, 5, 7, 9 uchun σ = ?', 'σ для 2, 4, 4, 4, 5, 5, 7, 9?', 'σ for 2, 4, 4, 4, 5, 5, 7, 9?'), ['2', '4', '5'], 0),
              choice(L('Barcha qiymatlar teng bo‘lsa, σ = ?', 'Если все значения равны, σ = ?', 'If all values are equal, σ = ?'), ['0', '1', L('o‘rta qiymat', 'среднее', 'the mean')], 0),
              choice(L('Katta «chetga chiqqan» qiymatga qaysi biri kam sezgir?', 'Что меньше чувствительно к выбросу?', 'Which is least sensitive to an outlier?'), [L('mediana', 'медиана', 'median'), L('o‘rta qiymat', 'среднее', 'mean'), L('kenglik', 'размах', 'range')], 0)]); } }
          ],
          quiz: [{ q: L('3, 5, 7 ning o‘rta qiymati?', 'Среднее 3, 5, 7?', 'Mean of 3, 5, 7?'), o: ['5', '15', '7'], a: 0 }, { q: L('1, 2, 2, 9 ning modasi?', 'Мода 1, 2, 2, 9?', 'Mode of 1, 2, 2, 9?'), o: ['2', '9', '3,5'], a: 0 }] },

        { id: 't18', lessons: ch(3), title: L('Ikki tur ma’lumotlar o‘rtasidagi bog‘liqlik', 'Зависимость между двумя видами данных', 'Relationship between two variables'),
          keys: [L('nuqtali diagramma', 'диаграмма рассеяния', 'scatter plot'), L('korrelyatsiya', 'корреляция', 'correlation'), L('regressiya to‘g‘ri chizig‘i', 'линия регрессии', 'regression line')],
          scene: [{ obj: 'star', n: 3, color: 'cyan' }],
          explain: L('Ikki o‘zgaruvchi (masalan, bo‘y va vazn) juftliklari <b>nuqtali diagramma</b>da tasvirlanadi. Nuqtalar o‘suvchi chiziq atrofida bo‘lsa — <b>musbat korrelyatsiya</b>, kamayuvchi bo‘lsa — <b>manfiy</b>, tartibsiz bo‘lsa — bog‘liqlik yo‘q. Korrelyatsiya koeffitsiyenti r ∈ [−1; 1]. Eng mos to‘g‘ri chiziq y = kx + b — <b>regressiya chizig‘i</b>, u bashorat uchun ishlatiladi. Korrelyatsiya sabab-oqibatni isbotlamaydi!',
            'Пары значений двух переменных (например, рост и вес) изображают на <b>диаграмме рассеяния</b>. Если точки вдоль возрастающей линии — <b>положительная корреляция</b>, убывающей — <b>отрицательная</b>, хаотично — связи нет. Коэффициент корреляции r ∈ [−1; 1]. Наилучшая прямая y = kx + b — <b>линия регрессии</b>, её используют для прогноза. Корреляция не доказывает причинность!',
            'Pairs of two variables (e.g. height and weight) are shown on a <b>scatter plot</b>. Points along a rising line mean <b>positive correlation</b>, along a falling line <b>negative</b>, scattered points no relationship. The correlation coefficient r lies in [−1; 1]. The best-fit line y = kx + b is the <b>regression line</b>, used for prediction. Correlation does not prove causation!'),
          rule: 'r ∈ [−1; 1]',
          acts: [
            { type: 'drill', title: L('Bashorat', 'Прогноз', 'Prediction'), n: 6, make: function (R) { var k = R(2, 9), b = R(-20, 40), x = R(2, 15); return { q: mk(function (l) { return { uz: 'Regressiya: y = ' + k + 'x' + sg(b) + '. x = ' + x + ' da bashorat', ru: 'Регрессия: y = ' + k + 'x' + sg(b) + '. Прогноз при x = ' + x, en: 'Regression: y = ' + k + 'x' + sg(b) + '. Predict at x = ' + x }[l]; }), a: k * x + b }; } },
            { type: 'choose', icon: '🔗', make: function () { return pick([
              choice(L('O‘qish soatlari va baho — qanday korrelyatsiya kutiladi?', 'Часы учёбы и оценка — какая корреляция?', 'Study hours vs grade — what correlation?'), [L('musbat', 'положительная', 'positive'), L('manfiy', 'отрицательная', 'negative'), L('yo‘q', 'нет', 'none')], 0),
              choice(L('Avtomobil yoshi va narxi?', 'Возраст машины и цена?', 'Car age vs price?'), [L('manfiy', 'отрицательная', 'negative'), L('musbat', 'положительная', 'positive'), L('yo‘q', 'нет', 'none')], 0),
              choice(L('r = 0,95 nimani bildiradi?', 'Что означает r = 0,95?', 'What does r = 0.95 mean?'), [L('kuchli musbat bog‘liqlik', 'сильная положительная связь', 'strong positive link'), L('kuchsiz bog‘liqlik', 'слабая связь', 'weak link'), L('manfiy bog‘liqlik', 'отрицательная связь', 'negative link')], 0),
              choice(L('Muzqaymoq savdosi va cho‘kish holatlari korrelyatsiyada. Demak...', 'Продажи мороженого коррелируют с утоплениями. Значит...', 'Ice-cream sales correlate with drownings. So...'), [L('ikkalasiga issiq havo sabab', 'причина обоих — жара', 'hot weather drives both'), L('muzqaymoq xavfli', 'мороженое опасно', 'ice cream is dangerous'), L('tasodif emas, sabab', 'это причина', 'one causes the other')], 0)]); } }
          ],
          quiz: [{ q: L('Korrelyatsiya koeffitsiyenti oralig‘i?', 'Диапазон коэффициента корреляции?', 'Range of the correlation coefficient?'), o: ['[−1; 1]', '[0; 1]', '[0; 100]'], a: 0 }, { q: 'y = 2x + 1, x = 10 → y = ?', o: ['21', '20', '12'], a: 0 }] },

        { id: 't19', lessons: ch(3), title: L('Hodisalar va ehtimollik: amallar, qo‘shish va ko‘paytirish', 'События и вероятность: сложение и умножение', 'Events and probability: addition and multiplication'),
          keys: ['P(Ā) = 1 − P(A)', 'P(A ∪ B) = P(A) + P(B) − P(AB)', 'P(AB) = P(A)·P(B)'],
          scene: [{ obj: 'cube', n: 2, color: 'orange' }, { obj: 'ball', n: 2, color: 'blue' }],
          explain: L('Klassik ta’rif: P(A) = m/n (qulay natijalar / barcha teng imkonli natijalar). <b>Qarama-qarshi hodisa</b>: P(Ā) = 1 − P(A). Hodisalar ustida amallar Eyler–Venn diagrammalarida tasvirlanadi. <b>Qo‘shish</b>: P(A ∪ B) = P(A) + P(B) − P(A ∩ B), birgalikda bo‘lmasa P(A) + P(B). <b>Ko‘paytirish</b>: erkli hodisalar uchun P(A ∩ B) = P(A)·P(B).',
            'Классическое определение: P(A) = m/n (благоприятные / все равновозможные исходы). <b>Противоположное событие</b>: P(Ā) = 1 − P(A). Действия над событиями изображают диаграммами Эйлера–Венна. <b>Сложение</b>: P(A ∪ B) = P(A) + P(B) − P(A ∩ B), для несовместных P(A) + P(B). <b>Умножение</b>: для независимых P(A ∩ B) = P(A)·P(B).',
            'Classical definition: P(A) = m/n (favourable / all equally likely outcomes). <b>Complement</b>: P(Ā) = 1 − P(A). Operations on events are shown with Euler–Venn diagrams. <b>Addition</b>: P(A ∪ B) = P(A) + P(B) − P(A ∩ B), or P(A) + P(B) if they cannot both happen. <b>Multiplication</b>: for independent events P(A ∩ B) = P(A)·P(B).'),
          rule: 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B)',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var a = R(2, 7) / 10, b = R(2, 7) / 10, c = R(1, 2) / 10, k = R(0, 3); return [
              { q: 'P(A) = ' + String(a).replace('.', ',') + ';  P(Ā)', a: r6(1 - a) },
              { q: mk(function (l) { return 'P(A) = ' + String(a).replace('.', ',') + ', P(B) = ' + String(b).replace('.', ',') + { uz: ' (erkli);  P(A ∩ B)', ru: ' (независимы);  P(A ∩ B)', en: ' (independent);  P(A ∩ B)' }[l]; }), a: r6(a * b) },
              { q: 'P(A) = ' + String(a).replace('.', ',') + ', P(B) = ' + String(b).replace('.', ',') + ', P(A ∩ B) = ' + String(c).replace('.', ',') + ';  P(A ∪ B)', a: r6(a + b - c) },
              { q: mk(function (l) { return { uz: 'Ikki tanga tashlandi. Ikkalasi ham gerb tushish ehtimoli', ru: 'Брошены две монеты. Вероятность двух гербов', en: 'Two coins are tossed. Probability of two heads' }[l]; }), a: 0.25 }][k]; } },
            { type: 'choose', icon: '🎲', make: function () { return pick([
              choice(L('Kubik tashlandi. Juft son tushish ehtimoli?', 'Брошен кубик. Вероятность чётного?', 'A die is rolled. P(even)?'), ['1/2', '1/3', '1/6'], 0),
              choice(L('Ikki kubik: yig‘indi 7 bo‘lish ehtimoli?', 'Два кубика: вероятность суммы 7?', 'Two dice: P(sum = 7)?'), ['1/6', '1/12', '7/36'], 0),
              choice(L('Ikki kubik: ikkalasida ham 6?', 'Два кубика: обе шестёрки?', 'Two dice: both sixes?'), ['1/36', '1/6', '1/12'], 0),
              choice(L('Hech bo‘lmasa bitta 6 (ikki kubik)?', 'Хотя бы одна 6 (два кубика)?', 'At least one 6 (two dice)?'), ['11/36', '1/3', '1/6'], 0)]); } }
          ],
          quiz: [{ q: 'P(A) = 0,3. P(Ā) = ?', o: ['0,7', '0,3', '1,3'], a: 0 }, { q: L('Erkli: P(A) = 0,5, P(B) = 0,4. P(AB) = ?', 'Независимы: P(A) = 0,5, P(B) = 0,4. P(AB) = ?', 'Independent: P(A) = 0.5, P(B) = 0.4. P(AB) = ?'), o: ['0,2', '0,9', '0,1'], a: 0 }] },

        { id: 't20', lessons: ch(3), title: L('Binomial va normal taqsimot haqida tushuncha', 'Биномиальное и нормальное распределения', 'Binomial and normal distributions'),
          keys: ['P(k) = Cₙᵏpᵏqⁿ⁻ᵏ', L('kutilma np', 'матожидание np', 'expected value np'), L('68–95–99,7 qoidasi', 'правило 68–95–99,7', 'the 68–95–99.7 rule')],
          scene: [{ obj: 'ball', n: 3, color: 'green' }],
          explain: L('n ta erkli sinovda har birida «muvaffaqiyat» ehtimoli p (q = 1 − p). k marta muvaffaqiyat ehtimoli — <b>Bernulli formulasi</b>: Pₙ(k) = Cₙᵏpᵏqⁿ⁻ᵏ. Muvaffaqiyatlar sonining o‘rtachasi (kutilma) — np. n katta bo‘lganda taqsimot qo‘ng‘iroqsimon <b>normal taqsimot</b>ga yaqinlashadi: qiymatlarning ≈68% i μ ± σ da, ≈95% i μ ± 2σ da, ≈99,7% i μ ± 3σ da.',
            'В n независимых испытаниях вероятность «успеха» в каждом p (q = 1 − p). Вероятность k успехов — <b>формула Бернулли</b>: Pₙ(k) = Cₙᵏpᵏqⁿ⁻ᵏ. Среднее число успехов (матожидание) — np. При больших n распределение близко к колоколообразному <b>нормальному</b>: ≈68% значений в μ ± σ, ≈95% в μ ± 2σ, ≈99,7% в μ ± 3σ.',
            'In n independent trials, each succeeds with probability p (q = 1 − p). The probability of k successes is <b>Bernoulli’s formula</b>: Pₙ(k) = Cₙᵏpᵏqⁿ⁻ᵏ. The mean number of successes (expected value) is np. For large n the distribution approaches the bell-shaped <b>normal distribution</b>: about 68% of values lie within μ ± σ, 95% within μ ± 2σ and 99.7% within μ ± 3σ.'),
          rule: 'Pₙ(k) = Cₙᵏ·pᵏ·qⁿ⁻ᵏ',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var n = R(2, 4), k = R(0, n), N = R(2, 50) * 10, p = R(1, 9) / 10, t = R(0, 1); return t ? { q: mk(function (l) { return { uz: n + ' ta tanga: aniq ' + k + ' ta gerb ehtimoli', ru: n + ' монеты: ровно ' + k + ' гербов', en: n + ' coins: exactly ' + k + ' heads' }[l]; }), a: r6(Cnk(n, k) / Math.pow(2, n)) } : { q: mk(function (l) { return 'n = ' + N + ', p = ' + String(p).replace('.', ',') + { uz: ';  kutilma np', ru: ';  матожидание np', en: ';  expected value np' }[l]; }), a: r6(N * p) }; } },
            { type: 'choose', icon: '🔔', make: function () { return pick([
              choice(L('Normal taqsimotda μ ± 2σ oralig‘ida qiymatlarning qancha qismi?', 'Какая доля значений в μ ± 2σ при нормальном?', 'Share of values within μ ± 2σ (normal)?'), ['≈ 95%', '≈ 68%', '≈ 50%'], 0),
              choice(L('Normal taqsimot grafigi shakli?', 'Форма графика нормального распределения?', 'Shape of the normal curve?'), [L('qo‘ng‘iroqsimon', 'колокол', 'a bell'), L('to‘g‘ri chiziq', 'прямая', 'a straight line'), L('parabola (yuqoriga)', 'парабола вверх', 'an upward parabola')], 0),
              choice(L('Bo‘y, IQ, o‘lchash xatolari qanday taqsimlanadi?', 'Как распределены рост, IQ, ошибки измерений?', 'How are height, IQ and measurement errors distributed?'), [L('taxminan normal', 'примерно нормально', 'roughly normally'), L('tekis', 'равномерно', 'uniformly'), L('faqat 0 va 1', 'только 0 и 1', 'only 0 and 1')], 0)]); } }
          ],
          quiz: [{ q: L('3 ta tanga: 3 ta gerb ehtimoli?', '3 монеты: 3 герба?', '3 coins: 3 heads?'), o: ['0,125', '0,5', '0,25'], a: 0 }, { q: 'n = 100, p = 0,3. np = ?', o: ['30', '70', '3'], a: 0 }] }
      ] }
    ]
  };
  C.addPart(part1);
})(this);
