// Nuvemath — cheksiz masala generatori: har safar yangi sonlar, javob tekshiruvi, yordam va to'liq yechim.
(function (root) {
  'use strict';
  var Expr = root.Expr || (typeof require !== 'undefined' ? require('./expr.js') : null);
  var Solver = root.Solver || (typeof require !== 'undefined' ? require('./solver.js') : null);

  function L(uz, ru, en) { return { uz: uz, ru: ru, en: en }; }
  function ri(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); }
  function nz(a, b) { var v; do { v = ri(a, b); } while (v === 0); return v; }
  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  function sg(n) { return n < 0 ? '− ' + (-n) : '+ ' + n; }                 // "+ 3" / "− 3"
  function m(n) { return n < 0 ? '−' + (-n) : String(n); }                  // −3
  function coefX(a, v) { v = v || 'x'; return (a === 1 ? '' : a === -1 ? '−' : m(a)) + '<i>' + v + '</i>'; }
  function f(x) { return Solver.fmtNum(x); }

  var GEN = {
    // ---------- ALGEBRA ----------
    linear: function (lv) {
      var x = lv === 1 ? ri(-9, 9) : ri(-15, 15), a = nz(lv === 1 ? 1 : -9, 9), b = ri(-20, 20);
      if (lv === 1) {
        var c = a * x + b;
        return { q: L('Tenglamani yeching:', 'Решите уравнение:', 'Solve the equation:'), math: Solver.polyHTML([b, a]) + ' = ' + m(c), ans: [x],
          hint: L('Ozod hadni o‘ngga o‘tkazing va x oldidagi songa bo‘ling.', 'Перенесите свободный член вправо и разделите на коэффициент при x.', 'Move the constant to the right and divide by the coefficient of x.'),
          sol: coefX(a) + ' = ' + m(c) + ' ' + sg(-b) + ' = ' + m(c - b) + ' &nbsp;⇒&nbsp; <i>x</i> = ' + m(c - b) + ' : ' + (a < 0 ? '(' + m(a) + ')' : a) + ' = ' + m(x) };
      }
      var cc; do { cc = nz(-9, 9); } while (cc === a);
      var d = a * x + b - cc * x;
      return { q: L('Tenglamani yeching:', 'Решите уравнение:', 'Solve the equation:'), math: Solver.polyHTML([b, a]) + ' = ' + Solver.polyHTML([d, cc]), ans: [x],
        hint: L('x qatnashgan hadlarni chapga, sonlarni o‘ngga yig‘ing.', 'Соберите слагаемые с x слева, числа — справа.', 'Collect x-terms on the left and numbers on the right.'),
        sol: coefX(a - cc) + ' = ' + m(d - b) + ' &nbsp;⇒&nbsp; <i>x</i> = ' + m(x) };
    },
    quad: function (lv) {
      var r1 = ri(-9, 9), r2 = ri(-9, 9), a = lv === 3 ? nz(-3, 3) : 1;
      var b = -a * (r1 + r2), c = a * r1 * r2, D = b * b - 4 * a * c;
      var math = Solver.polyHTML([c, b, a]) + ' = 0';
      return { q: L('Kvadrat tenglamaning barcha ildizlarini toping:', 'Найдите все корни квадратного уравнения:', 'Find all roots of the quadratic equation:'), math: math, ans: r1 === r2 ? [r1] : [r1, r2],
        hint: L('D = b² − 4ac, x = (−b ± √D) / 2a. Viyet: x₁ + x₂ = −b/a, x₁·x₂ = c/a.', 'D = b² − 4ac, x = (−b ± √D) / 2a. Виет: x₁ + x₂ = −b/a, x₁·x₂ = c/a.', 'D = b² − 4ac, x = (−b ± √D) / 2a. Vieta: x₁ + x₂ = −b/a, x₁·x₂ = c/a.'),
        sol: 'D = ' + m(b) + '² − 4·' + m(a) + '·' + m(c) + ' = ' + D + ', √D = ' + Math.sqrt(D) + ' &nbsp;⇒&nbsp; <i>x</i> = ' + (r1 === r2 ? m(r1) : m(Math.min(r1, r2)) + '; ' + m(Math.max(r1, r2))) };
    },
    system: function (lv) {
      var x = ri(-6, 6), y = ri(-6, 6), a1, b1, a2, b2;
      do { a1 = nz(-5, 5); b1 = nz(-5, 5); a2 = nz(-5, 5); b2 = nz(-5, 5); } while (a1 * b2 - a2 * b1 === 0 || (lv === 1 && Math.abs(a1) !== 1 && Math.abs(b1) !== 1));
      var c1 = a1 * x + b1 * y, c2 = a2 * x + b2 * y;
      function eq(a, b, c) { return coefX(a) + ' ' + (b < 0 ? '− ' : '+ ') + coefX(Math.abs(b), 'y') + ' = ' + m(c); }
      var D = a1 * b2 - a2 * b1;
      return { q: L('Sistemani yeching. Javob: x; y', 'Решите систему. Ответ: x; y', 'Solve the system. Answer: x; y'), math: '<span class="sys">' + eq(a1, b1, c1) + '<br>' + eq(a2, b2, c2) + '</span>', ans: [x, y], ordered: true,
        hint: L('O‘rniga qo‘yish yoki qo‘shish usulidan foydalaning (yoki Kramer: x = Δx/Δ).', 'Используйте подстановку или сложение (или Крамер: x = Δx/Δ).', 'Use substitution or elimination (or Cramer: x = Δx/Δ).'),
        sol: 'Δ = ' + m(a1) + '·' + m(b2) + ' − ' + m(a2) + '·' + m(b1) + ' = ' + D + ', Δx = ' + (c1 * b2 - c2 * b1) + ', Δy = ' + (a1 * c2 - a2 * c1) + ' &nbsp;⇒&nbsp; x = ' + m(x) + ', y = ' + m(y) };
    },
    power: function (lv) {
      var base = pick([2, 3, 5, 10]), p = ri(1, lv === 1 ? 4 : 6), q = ri(1, 5), r = ri(0, p + q - (base > 3 ? 3 : 1));
      var e = p + q - r;
      if (lv === 3) {
        var k = ri(2, 3), s = ri(1, 3), e2 = k * s + p - r;
        if (e2 < 0 || e2 > 6) e2 = Math.max(0, Math.min(6, e2));
        r = k * s + p - e2;
        return { q: L('Hisoblang:', 'Вычислите:', 'Evaluate:'), math: '(' + base + '<sup>' + s + '</sup>)<sup>' + k + '</sup> · ' + base + '<sup>' + p + '</sup> : ' + base + '<sup>' + r + '</sup>', ans: [Math.pow(base, e2)],
          hint: L('(aᵐ)ⁿ = aᵐⁿ, aᵐ·aⁿ = aᵐ⁺ⁿ, aᵐ : aⁿ = aᵐ⁻ⁿ', '(aᵐ)ⁿ = aᵐⁿ, aᵐ·aⁿ = aᵐ⁺ⁿ, aᵐ : aⁿ = aᵐ⁻ⁿ', '(aᵐ)ⁿ = aᵐⁿ, aᵐ·aⁿ = aᵐ⁺ⁿ, aᵐ : aⁿ = aᵐ⁻ⁿ'),
          sol: base + '<sup>' + (k * s) + ' + ' + p + ' − ' + r + '</sup> = ' + base + '<sup>' + e2 + '</sup> = ' + Math.pow(base, e2) };
      }
      return { q: L('Hisoblang:', 'Вычислите:', 'Evaluate:'), math: base + '<sup>' + p + '</sup> · ' + base + '<sup>' + q + '</sup> : ' + base + '<sup>' + r + '</sup>', ans: [Math.pow(base, e)],
        hint: L('Asoslari bir xil darajalarni ko‘paytirganda ko‘rsatkichlar qo‘shiladi, bo‘lganda ayiriladi.', 'При умножении степеней с одинаковым основанием показатели складываются, при делении — вычитаются.', 'Multiplying powers of the same base adds exponents; dividing subtracts them.'),
        sol: base + '<sup>' + p + ' + ' + q + ' − ' + r + '</sup> = ' + base + '<sup>' + e + '</sup> = ' + Math.pow(base, e) };
    },
    percent: function (lv) {
      if (lv === 1) {
        var p = pick([5, 10, 15, 20, 25, 30, 40, 50, 75]), n = ri(2, 40) * 20;
        return { q: L(n + ' sonining ' + p + '% ini toping.', 'Найдите ' + p + '% от числа ' + n + '.', 'Find ' + p + '% of ' + n + '.'), math: '', ans: [n * p / 100],
          hint: L('a ning p% i = a · p / 100', 'p% от a = a · p / 100', 'p% of a = a · p / 100'), sol: n + ' · ' + p + ' / 100 = ' + f(n * p / 100) };
      }
      var price = ri(4, 40) * 50000, up = pick([10, 20, 25]), down = pick([10, 20, 50]);
      var res = price * (1 + up / 100) * (1 - down / 100);
      return { q: L('Mahsulot narxi ' + price.toLocaleString('ru') + ' so‘m edi. Avval ' + up + '% qimmatladi, so‘ng ' + down + '% arzonladi. Yangi narx necha so‘m?',
        'Товар стоил ' + price.toLocaleString('ru') + ' сум. Сначала подорожал на ' + up + '%, затем подешевел на ' + down + '%. Какова новая цена?',
        'An item cost ' + price.toLocaleString('ru') + ' sum. Its price rose ' + up + '%, then fell ' + down + '%. What is the new price?'), math: '', ans: [res],
        hint: L('Har bir o‘zgarish — ko‘paytuvchi: +p% → ×(1 + p/100), −p% → ×(1 − p/100).', 'Каждое изменение — множитель: +p% → ×(1 + p/100), −p% → ×(1 − p/100).', 'Each change is a factor: +p% → ×(1 + p/100), −p% → ×(1 − p/100).'),
        sol: price + ' · ' + (1 + up / 100) + ' · ' + (1 - down / 100) + ' = ' + res };
    },
    progression: function (lv) {
      if (lv < 3 || Math.random() < 0.5) {
        var a1 = ri(-10, 10), d = nz(-6, 6), n = ri(5, lv === 1 ? 10 : 25), an = a1 + (n - 1) * d;
        if (lv === 1 || Math.random() < 0.5)
          return { q: L('Arifmetik progressiya: a₁ = ' + m(a1) + ', d = ' + m(d) + '. a' + sub(n) + ' ni toping.', 'Арифметическая прогрессия: a₁ = ' + m(a1) + ', d = ' + m(d) + '. Найдите a' + sub(n) + '.', 'Arithmetic progression: a₁ = ' + m(a1) + ', d = ' + m(d) + '. Find a' + sub(n) + '.'), math: '', ans: [an],
            hint: L('aₙ = a₁ + (n − 1)d', 'aₙ = a₁ + (n − 1)d', 'aₙ = a₁ + (n − 1)d'), sol: 'a' + sub(n) + ' = ' + m(a1) + ' + ' + (n - 1) + '·' + (d < 0 ? '(' + m(d) + ')' : d) + ' = ' + m(an) };
        var S = (a1 + an) * n / 2;
        return { q: L('Arifmetik progressiya: a₁ = ' + m(a1) + ', d = ' + m(d) + '. Dastlabki ' + n + ' ta had yig‘indisini toping.', 'Арифметическая прогрессия: a₁ = ' + m(a1) + ', d = ' + m(d) + '. Найдите сумму первых ' + n + ' членов.', 'Arithmetic progression: a₁ = ' + m(a1) + ', d = ' + m(d) + '. Find the sum of the first ' + n + ' terms.'), math: '', ans: [S],
          hint: L('Sₙ = (a₁ + aₙ)·n / 2', 'Sₙ = (a₁ + aₙ)·n / 2', 'Sₙ = (a₁ + aₙ)·n / 2'), sol: 'a' + sub(n) + ' = ' + m(an) + ', S = (' + m(a1) + ' + ' + m(an) + ')·' + n + ' / 2 = ' + m(S) };
      }
      var b1 = nz(-5, 5), q = pick([2, 3, -2, -3, 2]), k = ri(3, 7), bn = b1 * Math.pow(q, k - 1);
      return { q: L('Geometrik progressiya: b₁ = ' + m(b1) + ', q = ' + m(q) + '. b' + sub(k) + ' ni toping.', 'Геометрическая прогрессия: b₁ = ' + m(b1) + ', q = ' + m(q) + '. Найдите b' + sub(k) + '.', 'Geometric progression: b₁ = ' + m(b1) + ', q = ' + m(q) + '. Find b' + sub(k) + '.'), math: '', ans: [bn],
        hint: L('bₙ = b₁·qⁿ⁻¹', 'bₙ = b₁·qⁿ⁻¹', 'bₙ = b₁·qⁿ⁻¹'), sol: 'b' + sub(k) + ' = ' + m(b1) + '·(' + m(q) + ')<sup>' + (k - 1) + '</sup> = ' + m(bn) };
    },
    func: function (lv) {
      var a = nz(-4, 4), b = ri(-6, 6), c = ri(-9, 9), x = ri(-5, 5);
      var src = a + '*x^2' + (b < 0 ? b : '+' + b) + '*x' + (c < 0 ? c : '+' + c);
      if (lv === 1) { src = a + '*x' + (c < 0 ? c : '+' + c); }
      var val = Expr.evaluate(Expr.parse(src), { x: x });
      return { q: L('Funksiya qiymatini toping: f(' + m(x) + ') = ?', 'Найдите значение функции: f(' + m(x) + ') = ?', 'Find the function value: f(' + m(x) + ') = ?'), math: '<i>f</i>(<i>x</i>) = ' + Expr.toHTML(Expr.parse(src)), ans: [val],
        hint: L('x o‘rniga ' + m(x) + ' ni qo‘ying (manfiy sonni qavsga oling).', 'Подставьте ' + m(x) + ' вместо x (отрицательное число — в скобках).', 'Substitute ' + m(x) + ' for x (bracket negative numbers).'),
        sol: '<i>f</i>(' + m(x) + ') = ' + m(val), plot: src.replace(/\*/g, '') };
    },
    // ---------- GEOMETRIYA ----------
    pyth: function (lv) {
      var t = pick([[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25], [6, 8, 10], [9, 12, 15], [20, 21, 29]]), k = lv === 1 ? 1 : ri(1, 3);
      var a = t[0] * k, b = t[1] * k, c = t[2] * k;
      if (lv === 1 || Math.random() < 0.5)
        return { q: L('To‘g‘ri burchakli uchburchak katetlari ' + a + ' va ' + b + '. Gipotenuzani toping.', 'Катеты прямоугольного треугольника ' + a + ' и ' + b + '. Найдите гипотенузу.', 'A right triangle has legs ' + a + ' and ' + b + '. Find the hypotenuse.'), math: '', ans: [c],
          hint: L('c² = a² + b²', 'c² = a² + b²', 'c² = a² + b²'), sol: 'c = √(' + a + '² + ' + b + '²) = √' + (c * c) + ' = ' + c };
      return { q: L('Gipotenuza ' + c + ', bir katet ' + a + '. Ikkinchi katetni toping.', 'Гипотенуза ' + c + ', один катет ' + a + '. Найдите второй катет.', 'Hypotenuse ' + c + ', one leg ' + a + '. Find the other leg.'), math: '', ans: [b],
        hint: L('b² = c² − a²', 'b² = c² − a²', 'b² = c² − a²'), sol: 'b = √(' + c + '² − ' + a + '²) = √' + (b * b) + ' = ' + b };
    },
    triArea: function (lv) {
      if (lv === 1) { var a = ri(2, 20), h = ri(2, 20);
        return { q: L('Uchburchak asosi ' + a + ', unga tushirilgan balandlik ' + h + '. Yuzini toping.', 'Основание треугольника ' + a + ', высота к нему ' + h + '. Найдите площадь.', 'A triangle has base ' + a + ' and height ' + h + '. Find its area.'), math: '', ans: [a * h / 2],
          hint: L('S = ½·a·h', 'S = ½·a·h', 'S = ½·a·h'), sol: 'S = ' + a + '·' + h + ' / 2 = ' + f(a * h / 2) }; }
      if (lv === 2) { var b = ri(2, 12), c = ri(2, 12), ang = pick([30, 90, 150]), s = b * c * Math.sin(ang * Math.PI / 180) / 2;
        return { q: L('Uchburchakning ikki tomoni ' + b + ' va ' + c + ', ular orasidagi burchak ' + ang + '°. Yuzini toping.', 'Две стороны треугольника ' + b + ' и ' + c + ', угол между ними ' + ang + '°. Найдите площадь.', 'Two sides are ' + b + ' and ' + c + ' with included angle ' + ang + '°. Find the area.'), math: '', ans: [s],
          hint: L('S = ½·b·c·sin α', 'S = ½·b·c·sin α', 'S = ½·b·c·sin α'), sol: 'S = ½·' + b + '·' + c + '·sin ' + ang + '° = ' + f(s) }; }
      var t = pick([[13, 14, 15, 84], [5, 5, 6, 12], [5, 5, 8, 12], [10, 13, 13, 60], [9, 10, 17, 36], [17, 25, 26, 204]]);
      var p = (t[0] + t[1] + t[2]) / 2;
      return { q: L('Tomonlari ' + t.slice(0, 3).join(', ') + ' bo‘lgan uchburchak yuzini toping.', 'Найдите площадь треугольника со сторонами ' + t.slice(0, 3).join(', ') + '.', 'Find the area of a triangle with sides ' + t.slice(0, 3).join(', ') + '.'), math: '', ans: [t[3]],
        hint: L('Geron formulasi: S = √(p(p−a)(p−b)(p−c)), p — yarim perimetr.', 'Формула Герона: S = √(p(p−a)(p−b)(p−c)), p — полупериметр.', 'Heron: S = √(p(p−a)(p−b)(p−c)), p is the semi-perimeter.'),
        sol: 'p = ' + p + ', S = √(' + p + '·' + (p - t[0]) + '·' + (p - t[1]) + '·' + (p - t[2]) + ') = ' + t[3] };
    },
    circle: function (lv) {
      var r = ri(1, 15);
      var kind = lv === 1 ? pick(['S', 'C']) : pick(['S', 'C', 'sector']);
      if (kind === 'S') return { q: L('Radiusi ' + r + ' bo‘lgan doira yuzi S = kπ. k ni toping.', 'Площадь круга радиуса ' + r + ' равна kπ. Найдите k.', 'The area of a circle of radius ' + r + ' is kπ. Find k.'), math: '', ans: [r * r], hint: L('S = πr²', 'S = πr²', 'S = πr²'), sol: 'S = π·' + r + '² = ' + (r * r) + 'π' };
      if (kind === 'C') return { q: L('Radiusi ' + r + ' bo‘lgan aylana uzunligi C = kπ. k ni toping.', 'Длина окружности радиуса ' + r + ' равна kπ. Найдите k.', 'The circumference of a circle of radius ' + r + ' is kπ. Find k.'), math: '', ans: [2 * r], hint: L('C = 2πr', 'C = 2πr', 'C = 2πr'), sol: 'C = 2π·' + r + ' = ' + (2 * r) + 'π' };
      var ang = pick([30, 45, 60, 90, 120, 180, 270]), k = r * r * ang / 360;
      return { q: L('Radiusi ' + r + ', markaziy burchagi ' + ang + '° bo‘lgan sektor yuzi S = kπ. k ni toping.', 'Площадь сектора радиуса ' + r + ' с углом ' + ang + '° равна kπ. Найдите k.', 'A sector of radius ' + r + ' and angle ' + ang + '° has area kπ. Find k.'), math: '', ans: [k],
        hint: L('S = πr²·α/360°', 'S = πr²·α/360°', 'S = πr²·α/360°'), sol: 'S = π·' + r + '²·' + ang + '/360 = ' + f(k) + 'π' };
    },
    angles: function (lv) {
      if (lv === 1) { var A = ri(20, 100), B = ri(20, 150 - A);
        return { q: L('Uchburchakning ikki burchagi ' + A + '° va ' + B + '°. Uchinchi burchakni toping (gradusda).', 'Два угла треугольника ' + A + '° и ' + B + '°. Найдите третий угол (в градусах).', 'Two angles of a triangle are ' + A + '° and ' + B + '°. Find the third (in degrees).'), math: '', ans: [180 - A - B],
          hint: L('Uchburchak burchaklari yig‘indisi 180°.', 'Сумма углов треугольника 180°.', 'Angles of a triangle sum to 180°.'), sol: '180° − ' + A + '° − ' + B + '° = ' + (180 - A - B) + '°' }; }
      var n = pick([5, 6, 8, 9, 10, 12, 15, 18, 20]);
      if (lv === 2) return { q: L(n + ' burchakli qavariq ko‘pburchak ichki burchaklari yig‘indisini toping.', 'Найдите сумму внутренних углов выпуклого ' + n + '-угольника.', 'Find the sum of interior angles of a convex ' + n + '-gon.'), math: '', ans: [(n - 2) * 180],
        hint: L('S = (n − 2)·180°', 'S = (n − 2)·180°', 'S = (n − 2)·180°'), sol: '(' + n + ' − 2)·180° = ' + ((n - 2) * 180) + '°' };
      return { q: L('Muntazam ' + n + ' burchakli ko‘pburchakning bitta ichki burchagini toping.', 'Найдите внутренний угол правильного ' + n + '-угольника.', 'Find one interior angle of a regular ' + n + '-gon.'), math: '', ans: [(n - 2) * 180 / n],
        hint: L('α = (n − 2)·180° / n', 'α = (n − 2)·180° / n', 'α = (n − 2)·180° / n'), sol: '(' + n + ' − 2)·180° / ' + n + ' = ' + f((n - 2) * 180 / n) + '°' };
    },
    solid: function (lv) {
      var k = lv === 1 ? 'cube' : pick(['box', 'cyl', 'cone', 'sphere', 'pyr']);
      var a = ri(2, 9), b = ri(2, 9), c = ri(2, 9), r = ri(1, 6), h = ri(1, 9) * 3;
      switch (k) {
        case 'cube': return { q: L('Qirrasi ' + a + ' bo‘lgan kub hajmini toping.', 'Найдите объём куба с ребром ' + a + '.', 'Find the volume of a cube with edge ' + a + '.'), math: '', ans: [a * a * a], hint: L('V = a³', 'V = a³', 'V = a³'), sol: a + '³ = ' + a * a * a, solid: 'cube' };
        case 'box': return { q: L('O‘lchamlari ' + a + '×' + b + '×' + c + ' bo‘lgan parallelepiped to‘la sirtini toping.', 'Найдите полную поверхность параллелепипеда ' + a + '×' + b + '×' + c + '.', 'Find the total surface area of a ' + a + '×' + b + '×' + c + ' cuboid.'), math: '', ans: [2 * (a * b + b * c + a * c)], hint: L('S = 2(ab + bc + ac)', 'S = 2(ab + bc + ac)', 'S = 2(ab + bc + ac)'), sol: '2(' + a * b + ' + ' + b * c + ' + ' + a * c + ') = ' + 2 * (a * b + b * c + a * c), solid: 'box' };
        case 'cyl': return { q: L('Radiusi ' + r + ', balandligi ' + h + ' bo‘lgan silindr hajmi V = kπ. k ni toping.', 'Объём цилиндра радиуса ' + r + ' и высоты ' + h + ' равен kπ. Найдите k.', 'A cylinder with radius ' + r + ' and height ' + h + ' has volume kπ. Find k.'), math: '', ans: [r * r * h], hint: L('V = πr²h', 'V = πr²h', 'V = πr²h'), sol: 'π·' + r + '²·' + h + ' = ' + r * r * h + 'π', solid: 'cylinder' };
        case 'cone': return { q: L('Radiusi ' + r + ', balandligi ' + h + ' bo‘lgan konus hajmi V = kπ. k ni toping.', 'Объём конуса радиуса ' + r + ' и высоты ' + h + ' равен kπ. Найдите k.', 'A cone with radius ' + r + ' and height ' + h + ' has volume kπ. Find k.'), math: '', ans: [r * r * h / 3], hint: L('V = ⅓πr²h', 'V = ⅓πr²h', 'V = ⅓πr²h'), sol: '⅓·π·' + r + '²·' + h + ' = ' + r * r * h / 3 + 'π', solid: 'cone' };
        case 'sphere': var r3 = pick([3, 6, 9, 3]); return { q: L('Radiusi ' + r3 + ' bo‘lgan shar hajmi V = kπ. k ni toping.', 'Объём шара радиуса ' + r3 + ' равен kπ. Найдите k.', 'A sphere of radius ' + r3 + ' has volume kπ. Find k.'), math: '', ans: [4 * r3 * r3 * r3 / 3], hint: L('V = ⁴⁄₃πr³', 'V = ⁴⁄₃πr³', 'V = ⁴⁄₃πr³'), sol: '⁴⁄₃·π·' + r3 + '³ = ' + 4 * r3 * r3 * r3 / 3 + 'π', solid: 'sphere' };
        default: return { q: L('Asosi ' + a + '×' + a + ' kvadrat, balandligi ' + h + ' bo‘lgan piramida hajmini toping.', 'Найдите объём пирамиды с квадратным основанием ' + a + '×' + a + ' и высотой ' + h + '.', 'Find the volume of a pyramid with a ' + a + '×' + a + ' square base and height ' + h + '.'), math: '', ans: [a * a * h / 3], hint: L('V = ⅓·S·h', 'V = ⅓·S·h', 'V = ⅓·S·h'), sol: '⅓·' + a * a + '·' + h + ' = ' + a * a * h / 3, solid: 'pyramid' };
      }
    },
    coord: function (lv) {
      var t = pick([[3, 4], [5, 12], [6, 8], [8, 15], [0, 5], [7, 24]]), x1 = ri(-8, 8), y1 = ri(-8, 8);
      var sx = pick([1, -1]), sy = pick([1, -1]), x2 = x1 + sx * t[0], y2 = y1 + sy * t[1];
      if (Math.random() < 0.5) t = [t[1], t[0]];
      var pts = 'A(' + m(x1) + '; ' + m(y1) + '), B(' + m(x2) + '; ' + m(y2) + ')';
      if (lv === 1 || Math.random() < 0.5) { var d = Math.hypot(x2 - x1, y2 - y1);
        return { q: L(pts + ' nuqtalar orasidagi masofani toping.', 'Найдите расстояние между точками ' + pts + '.', 'Find the distance between ' + pts + '.'), math: '', ans: [d],
          hint: L('AB = √((x₂ − x₁)² + (y₂ − y₁)²)', 'AB = √((x₂ − x₁)² + (y₂ − y₁)²)', 'AB = √((x₂ − x₁)² + (y₂ − y₁)²)'), sol: '√(' + (x2 - x1) * (x2 - x1) + ' + ' + (y2 - y1) * (y2 - y1) + ') = ' + d }; }
      return { q: L(pts + '. AB kesma o‘rtasi M koordinatalarini toping. Javob: x; y', pts + '. Найдите координаты середины M отрезка AB. Ответ: x; y', pts + '. Find the midpoint M of AB. Answer: x; y'), math: '', ans: [(x1 + x2) / 2, (y1 + y2) / 2], ordered: true,
        hint: L('M = ((x₁ + x₂)/2; (y₁ + y₂)/2)', 'M = ((x₁ + x₂)/2; (y₁ + y₂)/2)', 'M = ((x₁ + x₂)/2; (y₁ + y₂)/2)'), sol: 'M(' + f((x1 + x2) / 2) + '; ' + f((y1 + y2) / 2) + ')' };
    },
    trig: function (lv) {
      var angs = lv === 1 ? [0, 30, 45, 60, 90] : [0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 240, 270, 300, 330, 360];
      var a = pick(angs), fn = lv === 1 ? pick(['sin', 'cos']) : pick(['sin', 'cos', 'tg']);
      var rad = a * Math.PI / 180, v = fn === 'sin' ? Math.sin(rad) : fn === 'cos' ? Math.cos(rad) : Math.tan(rad);
      if (fn === 'tg' && Math.abs(Math.cos(rad)) < 1e-9) { fn = 'sin'; v = Math.sin(rad); }
      v = Math.round(v * 1e12) / 1e12;
      return { q: L('Qiymatini toping (masalan: 1/2, sqrt(3)/2, −1):', 'Найдите значение (например: 1/2, sqrt(3)/2, −1):', 'Find the value (e.g. 1/2, sqrt(3)/2, −1):'), math: fn + ' ' + a + '°', ans: [v],
        hint: L('Birlik aylanadan foydalaning: sin — y koordinata, cos — x koordinata, tg = sin/cos.', 'Используйте единичную окружность: sin — y, cos — x, tg = sin/cos.', 'Use the unit circle: sin is y, cos is x, tan = sin/cos.'),
        sol: fn + ' ' + a + '° = ' + trigExact(v) };
    }
  };
  function sub(n) { return String(n).split('').map(function (d) { return '₀₁₂₃₄₅₆₇₈₉'[+d]; }).join(''); }
  function trigExact(v) {
    var map = [[0, '0'], [0.5, '1/2'], [Math.SQRT2 / 2, '√2/2'], [Math.sqrt(3) / 2, '√3/2'], [1, '1'], [Math.sqrt(3), '√3'], [Math.sqrt(3) / 3, '√3/3']];
    for (var i = 0; i < map.length; i++) if (Math.abs(Math.abs(v) - map[i][0]) < 1e-9) return (v < 0 ? '−' : '') + map[i][1];
    return f(v);
  }

  var TOPICS = { algebra: ['linear', 'quad', 'system', 'power', 'percent', 'progression', 'func'], geometry: ['pyth', 'triArea', 'circle', 'angles', 'solid', 'coord', 'trig'] };
  var KEYMAP = { linear: 'pr.linear', quad: 'pr.quad', system: 'pr.system', power: 'pr.power', percent: 'pr.percent', progression: 'pr.progression', func: 'pr.func', pyth: 'pr.pyth', triArea: 'pr.triArea', circle: 'pr.circle', angles: 'pr.angles', solid: 'pr.solid', coord: 'pr.coord', trig: 'pr.trig' };

  function generate(topic, level) {
    var all = TOPICS.algebra.concat(TOPICS.geometry);
    var t = topic === 'all' || !GEN[topic] ? pick(all) : topic;
    var p = GEN[t](level || 1);
    p.topic = t;
    return p;
  }

  // Foydalanuvchi javobini tekshirish: "2; 3", "7/4", "sqrt(3)/2", "−2,5"
  function check(problem, input) {
    var parts = String(input).split(/[;\n]|\s{2,}/).map(function (s) { return s.trim(); }).filter(Boolean);
    // bir nechta javob vergul bilan yozilgan bo'lsa ("2, 3" yoki "2,3"); "2,5" yagona javobda o'nli kasr deb olinadi
    if (parts.length === 1 && problem.ans.length > 1) {
      var bySpace = parts[0].split(/,\s+/);
      if (bySpace.length === problem.ans.length) parts = bySpace;
      else if (parts[0].split(',').length === problem.ans.length) parts = parts[0].split(',');
    }
    var vals = [];
    for (var i = 0; i < parts.length; i++) {
      try { var t = Expr.parse(parts[i].replace(/°/g, '')); if (Object.keys(Expr.variables(t)).length) return { ok: false, bad: true }; vals.push(Expr.evaluate(t, {})); }
      catch (e) { return { ok: false, bad: true }; }
    }
    var want = problem.ans.map(Number);
    if (vals.length !== want.length) return { ok: false };
    function eq(a, b) { var d = Math.abs(a - b); return d < 0.01 || d <= 1e-12 * Math.abs(b); } // 0.01 gacha yaxlitlash qabul qilinadi
    if (problem.ordered) return { ok: vals.every(function (v, k) { return eq(v, want[k]); }) };
    var used = want.map(function () { return false; });
    var ok = vals.every(function (v) { for (var k = 0; k < want.length; k++) if (!used[k] && eq(v, want[k])) { used[k] = true; return true; } return false; });
    return { ok: ok };
  }

  var api = { generate: generate, check: check, TOPICS: TOPICS, KEYMAP: KEYMAP, GEN: GEN };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.Practice = api;
})(this);
