// Nuvemath — 11-sinf, Geometriya (manba: B.Q. Xaydarov «Matematika 11. Geometriya», I–II qism, Toshkent, 2018).
// Boblar va mavzular tartibi darslikdan olingan; tushuntirishlar, topshiriqlar va chizmalar Nuvemath uchun qayta yozilgan.
(function (root) {
  'use strict';
  var C = root.NMCurriculum, H = C.H, L = H.L, mk = H.mk, choice = H.choice, pick = H.pick;
  var r6 = H.r6;
  function ch(n) { return L(n + '-bob', 'Глава ' + n, 'Chapter ' + n); }
  function ns(x) { return x < 0 ? '−' + (-x) : String(x); }
  function P3(p) { return '(' + p.map(ns).join('; ') + ')'; }
  var T3 = [[1, 2, 2, 3], [2, 3, 6, 7], [1, 4, 8, 9], [2, 6, 9, 11], [4, 4, 7, 9], [3, 4, 12, 13], [2, 10, 11, 15], [6, 6, 7, 11]];
  var TR = [[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [9, 12, 15], [12, 16, 20]];
  function W(o) { return mk(function (l) { return o[l]; }); }
  function fig(inner, w, h) { return '<div class="kd-fig"><svg viewBox="0 0 ' + (w || 300) + ' ' + (h || 180) + '">' + inner + '</svg></div>'; }
  var TX = 'font-size="15" font-weight="700" fill="currentColor" text-anchor="middle"';
  function coneFig(r, h, l) { return fig('<ellipse cx="150" cy="150" rx="80" ry="18" fill="rgba(79,141,255,.15)" stroke="#4f8dff" stroke-width="2.5"/><line x1="70" y1="150" x2="150" y2="20" stroke="#4f8dff" stroke-width="2.5"/><line x1="230" y1="150" x2="150" y2="20" stroke="#ff6b8b" stroke-width="3"/><line x1="150" y1="20" x2="150" y2="150" stroke="#2ec27e" stroke-width="2.5" stroke-dasharray="6 4"/><line x1="150" y1="150" x2="230" y2="150" stroke="#f6b73c" stroke-width="3"/>' +
    '<text x="138" y="95" ' + TX + '>' + h + '</text><text x="205" y="80" ' + TX + '>' + l + '</text><text x="190" y="170" ' + TX + '>' + r + '</text>', 300, 180); }
  function sphereFig(R, d, r) { return fig('<circle cx="150" cy="95" r="80" fill="rgba(79,141,255,.12)" stroke="#4f8dff" stroke-width="2.5"/><ellipse cx="150" cy="47" rx="64" ry="12" fill="rgba(246,183,60,.25)" stroke="#f6b73c" stroke-width="2.5"/><line x1="150" y1="95" x2="150" y2="47" stroke="#2ec27e" stroke-width="2.5"/><line x1="150" y1="95" x2="214" y2="47" stroke="#ff6b8b" stroke-width="3"/><line x1="150" y1="47" x2="214" y2="47" stroke="#f6b73c" stroke-width="3"/><circle cx="150" cy="95" r="4" fill="currentColor"/>' +
    '<text x="137" y="76" ' + TX + '>' + d + '</text><text x="196" y="82" ' + TX + '>' + R + '</text><text x="185" y="40" ' + TX + '>' + r + '</text>', 300, 185); }

  var part2 = {
    grade: 11, part: 2, edition: L('Matematika 11 (Geometriya), I–II qism, 2018-yil nashri', 'Математика 11 (Геометрия), I–II часть, издание 2018 г.', 'Mathematics 11 (Geometry), Parts I–II, 2018 edition'),
    title: L('Geometriya: fazoda koordinatalar va vektorlar, jismlarning sirti va hajmi', 'Геометрия: координаты и векторы в пространстве, поверхности и объёмы тел', 'Geometry: coordinates and vectors in space, surface areas and volumes'),
    book: L('B.Q. Xaydarov. Matematika 11, Geometriya, I–II qism (Toshkent, 2018)', 'Б.К. Хайдаров. Математика 11, Геометрия, I–II часть (Ташкент, 2018)', 'B.Q. Khaydarov. Mathematics 11, Geometry, Parts I–II (Tashkent, 2018)'),
    intro: L('11-sinf geometriyasi stereometriyani yakunlaydi: fazoda dekart koordinatalari va vektorlar, almashtirishlar va o‘xshashlik, so‘ng asosiy jismlar — prizma, silindr, piramida, konus, shar — ularning sirt yuzi va hajmi. Yakunda butun stereometriya takrorlanadi.',
      'Геометрия 11 класса завершает стереометрию: декартовы координаты и векторы в пространстве, преобразования и подобие, затем основные тела — призма, цилиндр, пирамида, конус, шар — их площади поверхности и объёмы. В конце — повторение всей стереометрии.',
      'Grade 11 geometry completes solid geometry: Cartesian coordinates and vectors in space, transformations and similarity, then the main solids — prism, cylinder, pyramid, cone and sphere — with their surface areas and volumes. It ends with a review of all solid geometry.'),
    sections: [
      { id: 's1', title: L('Fazoda koordinatalar sistemasi va vektorlar', 'Координаты и векторы в пространстве', 'Coordinates and vectors in space'), icon: '🧭', color: 'blue', topics: [
        { id: 't1', lessons: ch(1), title: L('Fazoda dekart koordinatalari sistemasi', 'Декартовы координаты в пространстве', 'Cartesian coordinates in space'),
          keys: ['(x; y; z)', 'd = √(Δx² + Δy² + Δz²)', L('kesma o‘rtasi', 'середина отрезка', 'midpoint')],
          scene: [{ obj: 'cube', n: 2, color: 'blue' }, { obj: 'rod', n: 1, color: 'orange' }],
          explain: L('Fazoda o‘zaro perpendikulyar uchta o‘q — Ox (abssissa), Oy (ordinata), Oz (applikata) — koordinatalar sistemasini hosil qiladi; har bir nuqta uchta son (x; y; z) bilan beriladi. Ikki nuqta orasidagi masofa: d = √((x₂ − x₁)² + (y₂ − y₁)² + (z₂ − z₁)²). Kesma o‘rtasi: ((x₁ + x₂)/2; (y₁ + y₂)/2; (z₁ + z₂)/2). Oz o‘qidagi nuqtada x = y = 0, Oxy tekisligida z = 0.',
            'Три взаимно перпендикулярные оси — Ox (абсцисса), Oy (ордината), Oz (аппликата) — образуют систему координат в пространстве; каждая точка задаётся тремя числами (x; y; z). Расстояние: d = √((x₂ − x₁)² + (y₂ − y₁)² + (z₂ − z₁)²). Середина отрезка: ((x₁ + x₂)/2; (y₁ + y₂)/2; (z₁ + z₂)/2). У точки на оси Oz x = y = 0, в плоскости Oxy z = 0.',
            'Three mutually perpendicular axes — Ox, Oy and Oz — form a coordinate system in space; each point is given by three numbers (x; y; z). Distance: d = √((x₂ − x₁)² + (y₂ − y₁)² + (z₂ − z₁)²). Midpoint: ((x₁ + x₂)/2; (y₁ + y₂)/2; (z₁ + z₂)/2). A point on the Oz axis has x = y = 0; in the Oxy plane z = 0.'),
          rule: 'd = √((x₂ − x₁)² + (y₂ − y₁)² + (z₂ − z₁)²)',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var t = pick(T3), A = [R(-4, 4), R(-4, 4), R(-4, 4)], k = R(0, 2), B = [A[0] + t[0], A[1] - t[1], A[2] + t[2]], D = [A[0] + 2 * R(-3, 3), A[1] + 2 * R(-3, 3), A[2] + 2 * R(-3, 3)]; return [
              { q: 'A' + P3(A) + ', B' + P3(B) + ';  AB', a: t[3] },
              { q: 'A' + P3(A) + ', B' + P3(D) + ';  x<sub>M</sub> + y<sub>M</sub> + z<sub>M</sub>', a: (A[0] + D[0] + A[1] + D[1] + A[2] + D[2]) / 2 },
              { q: W({ uz: 'O(0; 0; 0) dan ' + P3([t[0], t[1], t[2]]) + ' gacha masofa', ru: 'Расстояние от O(0; 0; 0) до ' + P3([t[0], t[1], t[2]]), en: 'Distance from O(0; 0; 0) to ' + P3([t[0], t[1], t[2]]) }), a: t[3] }][k]; } },
            { type: 'choose', icon: '🧭', make: function (R) { var a = R(1, 9), b = R(1, 9); return pick([
              choice(L('Qaysi nuqta Oz o‘qida yotadi?', 'Какая точка лежит на оси Oz?', 'Which point lies on the Oz axis?'), [P3([0, 0, a]), P3([a, 0, 0]), P3([0, a, b])], 0),
              choice(L('Qaysi nuqta Oxy tekisligida yotadi?', 'Какая точка лежит в плоскости Oxy?', 'Which point lies in the Oxy plane?'), [P3([a, b, 0]), P3([0, 0, a]), P3([a, 0, b])], 0),
              choice(W({ uz: P3([a, b, a + b + 1]) + ' nuqtadan Oxy tekisligigacha masofa?', ru: 'Расстояние от ' + P3([a, b, a + b + 1]) + ' до плоскости Oxy?', en: 'Distance from ' + P3([a, b, a + b + 1]) + ' to the Oxy plane?' }), [String(a + b + 1), String(a + b), String(a + b + 3)], 0)]); } }
          ],
          quiz: [{ q: 'A(0; 0; 0), B(2; 3; 6). AB = ?', o: ['7', '11', '√11'], a: 0 }, { q: L('A(2; 4; 6), B(4; 0; 2) o‘rtasi?', 'Середина A(2; 4; 6), B(4; 0; 2)?', 'Midpoint of A(2; 4; 6), B(4; 0; 2)?'), o: ['(3; 2; 4)', '(6; 4; 8)', '(1; 2; 2)'], a: 0 }] },

        { id: 't2', lessons: ch(1), title: L('Fazoda vektorlar va ular ustida amallar', 'Векторы в пространстве и действия над ними', 'Vectors in space and operations'),
          keys: ['a⃗(x; y; z)', '|a⃗| = √(x² + y² + z²)', 'a⃗·b⃗ = x₁x₂ + y₁y₂ + z₁z₂'],
          scene: [{ obj: 'drone', n: 2, color: 'violet' }],
          explain: L('Fazoda vektor uchta koordinata bilan beriladi: A(x₁; y₁; z₁), B(x₂; y₂; z₂) bo‘lsa, AB⃗ = (x₂ − x₁; y₂ − y₁; z₂ − z₁). Qo‘shish va songa ko‘paytirish koordinatalar bo‘yicha bajariladi. Uzunlik |a⃗| = √(x² + y² + z²). <b>Skalyar ko‘paytma</b>: a⃗·b⃗ = x₁x₂ + y₁y₂ + z₁z₂ = |a⃗||b⃗|cos φ; a⃗·b⃗ = 0 ⇔ a⃗ ⊥ b⃗. Bu formulalar fazoviy masalalarni algebraga aylantiradi.',
            'Вектор в пространстве задаётся тремя координатами: если A(x₁; y₁; z₁), B(x₂; y₂; z₂), то AB⃗ = (x₂ − x₁; y₂ − y₁; z₂ − z₁). Сложение и умножение на число — покоординатно. Длина |a⃗| = √(x² + y² + z²). <b>Скалярное произведение</b>: a⃗·b⃗ = x₁x₂ + y₁y₂ + z₁z₂ = |a⃗||b⃗|cos φ; a⃗·b⃗ = 0 ⇔ a⃗ ⊥ b⃗. Эти формулы превращают пространственные задачи в алгебру.',
            'A vector in space has three coordinates: for A(x₁; y₁; z₁) and B(x₂; y₂; z₂), AB⃗ = (x₂ − x₁; y₂ − y₁; z₂ − z₁). Addition and scaling work coordinate by coordinate. Length |a⃗| = √(x² + y² + z²). The <b>dot product</b> a⃗·b⃗ = x₁x₂ + y₁y₂ + z₁z₂ = |a⃗||b⃗|cos φ, and a⃗·b⃗ = 0 ⇔ a⃗ ⊥ b⃗. These formulas turn spatial problems into algebra.'),
          rule: 'a⃗·b⃗ = x₁x₂ + y₁y₂ + z₁z₂',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var a = [R(-5, 5), R(-5, 5), R(-5, 5)], b = [R(-5, 5), R(-5, 5), R(-5, 5)], t = pick(T3), k = R(0, 2); return [
              { q: 'a⃗' + P3(a) + ', b⃗' + P3(b) + ';  a⃗·b⃗', a: a[0] * b[0] + a[1] * b[1] + a[2] * b[2] },
              { q: '|a⃗|, a⃗' + P3([t[0], -t[1], t[2]]), a: t[3] },
              { q: 'a⃗' + P3(a) + ', b⃗' + P3(b) + ';  a⃗ + b⃗:  z', a: a[2] + b[2] }][k]; } },
            { type: 'choose', icon: '➡️', make: function (R) { var m = R(1, 4); return pick([
              choice(W({ uz: 'a⃗(1; 2; ' + m + ') va b⃗(' + m + '; −' + m + '; 1). Burchak?', ru: 'a⃗(1; 2; ' + m + ') и b⃗(' + m + '; −' + m + '; 1). Угол?', en: 'a⃗(1; 2; ' + m + ') and b⃗(' + m + '; −' + m + '; 1). Angle?' }), ['90°', '0°', '45°'], 0),
              choice(L('a⃗·b⃗ &lt; 0 bo‘lsa, burchak...', 'Если a⃗·b⃗ &lt; 0, угол...', 'If a⃗·b⃗ &lt; 0, the angle is...'), [L('o‘tmas', 'тупой', 'obtuse'), L('o‘tkir', 'острый', 'acute'), L('to‘g‘ri', 'прямой', 'right')], 0),
              choice(W({ uz: 'a⃗(1; 2; 3), 2a⃗ = ?', ru: 'a⃗(1; 2; 3), 2a⃗ = ?', en: 'a⃗(1; 2; 3), 2a⃗ = ?' }), ['(2; 4; 6)', '(3; 4; 5)', '(2; 2; 3)'], 0)]); } }
          ],
          quiz: [{ q: 'a⃗(1; 2; 3)·b⃗(4; 0; −1) = ?', o: ['1', '7', '−1'], a: 0 }, { q: '|a⃗(2; 3; 6)| = ?', o: ['7', '11', '49'], a: 0 }] },

        { id: 't3', lessons: ch(1), title: L('Fazoda almashtirishlar va o‘xshashlik', 'Преобразования и подобие в пространстве', 'Transformations and similarity in space'),
          keys: [L('simmetriya, parallel ko‘chirish', 'симметрия, параллельный перенос', 'symmetry, translation'), L('o‘xshashlik: yuz k², hajm k³', 'подобие: площадь k², объём k³', 'similarity: area k², volume k³')],
          scene: [{ obj: 'cube', n: 2, color: 'green' }, { obj: 'box', n: 1, color: 'pink' }],
          explain: L('Fazoda harakatlar: markaziy simmetriya (x; y; z) → (−x; −y; −z), Oxy tekisligiga nisbatan simmetriya (x; y; z) → (x; y; −z), o‘qqa nisbatan simmetriya, parallel ko‘chirish (x + a; y + b; z + c), burish. Ular masofani saqlaydi. <b>O‘xshashlik</b> koeffitsiyenti k bo‘lsa: uzunliklar k marta, yuzlar k² marta, hajmlar k³ marta o‘zgaradi.',
            'Движения пространства: центральная симметрия (x; y; z) → (−x; −y; −z), симметрия относительно плоскости Oxy (x; y; z) → (x; y; −z), осевая симметрия, параллельный перенос (x + a; y + b; z + c), поворот. Они сохраняют расстояния. При <b>подобии</b> с коэффициентом k длины меняются в k раз, площади в k², объёмы в k³ раз.',
            'Motions of space: central symmetry (x; y; z) → (−x; −y; −z), reflection in the Oxy plane (x; y; z) → (x; y; −z), reflection in an axis, translation (x + a; y + b; z + c) and rotation. They preserve distance. Under <b>similarity</b> with ratio k, lengths scale by k, areas by k² and volumes by k³.'),
          rule: L('V₂ / V₁ = k³', 'V₂ / V₁ = k³', 'V₂ / V₁ = k³'),
          acts: [
            { type: 'drill', n: 8, make: function (R) { var k = R(2, 5), V = R(2, 9), S = R(2, 9), t = R(0, 2), p = [R(-6, 6), R(-6, 6), R(-6, 6)]; return [
              { q: W({ uz: 'k = ' + k + ', V₁ = ' + V + ';  V₂', ru: 'k = ' + k + ', V₁ = ' + V + ';  V₂', en: 'k = ' + k + ', V₁ = ' + V + ';  V₂' }), a: V * k * k * k },
              { q: W({ uz: 'k = ' + k + ', S₁ = ' + S + ';  S₂', ru: 'k = ' + k + ', S₁ = ' + S + ';  S₂', en: 'k = ' + k + ', S₁ = ' + S + ';  S₂' }), a: S * k * k },
              { q: W({ uz: P3(p) + ' ning Oxy ga nisbatan simmetrigi: z', ru: 'Симметрия ' + P3(p) + ' относительно Oxy: z', en: 'Reflection of ' + P3(p) + ' in Oxy: z' }), a: 0 - p[2] || 0 }][t]; } },
            { type: 'choose', icon: '🪞', make: function (R) { var a = R(1, 7), b = R(1, 7), c = R(1, 7); return pick([
              choice(W({ uz: P3([a, b, c]) + ' ning O ga nisbatan simmetrigi?', ru: 'Точка, симметричная ' + P3([a, b, c]) + ' относительно O?', en: 'Image of ' + P3([a, b, c]) + ' under symmetry in O?' }), [P3([-a, -b, -c]), P3([a, b, -c]), P3([-a, b, c])], 0),
              choice(L('Kub qirrasi 2 marta oshdi. Hajmi?', 'Ребро куба увеличили в 2 раза. Объём?', 'A cube’s edge doubles. Its volume?'), [L('8 marta oshadi', 'увеличится в 8 раз', 'grows 8 times'), L('2 marta', 'в 2 раза', '2 times'), L('4 marta', 'в 4 раза', '4 times')], 0),
              choice(L('Qaysi almashtirish masofani saqlamaydi?', 'Какое преобразование не сохраняет расстояния?', 'Which does not preserve distance?'), [L('k = 3 bilan o‘xshashlik', 'подобие с k = 3', 'similarity with k = 3'), L('parallel ko‘chirish', 'параллельный перенос', 'translation'), L('burish', 'поворот', 'rotation')], 0)]); } }
          ],
          quiz: [{ q: L('O‘xshashlik k = 3. Hajmlar nisbati?', 'Подобие k = 3. Отношение объёмов?', 'Similarity k = 3. Ratio of volumes?'), o: ['27', '9', '3'], a: 0 }, { q: L('(1; 2; 3) ning Oxy ga simmetrigi?', 'Симметрия (1; 2; 3) относительно Oxy?', 'Reflection of (1; 2; 3) in Oxy?'), o: ['(1; 2; −3)', '(−1; −2; −3)', '(1; −2; 3)'], a: 0 }] }
      ] },

      { id: 's2', title: L('Prizma va silindr', 'Призма и цилиндр', 'Prism and cylinder'), icon: '🧊', color: 'cyan', topics: [
        { id: 't4', lessons: ch(2), title: L('Ko‘pyoqli burchaklar va ko‘pyoqlar', 'Многогранные углы и многогранники', 'Polyhedral angles and polyhedra'),
          keys: [L('uchyoqli burchak', 'трёхгранный угол', 'trihedral angle'), L('yassi burchaklar yig‘indisi &lt; 360°', 'сумма плоских углов &lt; 360°', 'sum of face angles &lt; 360°')],
          scene: [{ obj: 'pyramid', n: 2, color: 'violet' }, { obj: 'cube', n: 1, color: 'cyan' }],
          explain: L('Bir nuqtadan chiquvchi bir necha nur va ular orasidagi tekis burchaklar <b>ko‘pyoqli burchak</b> hosil qiladi; eng soddasi — uchyoqli burchak. Xossalar: uchyoqli burchakning har bir yassi burchagi qolgan ikkitasi yig‘indisidan kichik; qavariq ko‘pyoqli burchak yassi burchaklari yig‘indisi 360° dan kichik. Shu sababli muntazam ko‘pyoqlar faqat beshta: uchida 3, 4 yoki 5 ta uchburchak, 3 ta kvadrat yoki 3 ta beshburchak uchrashadi.',
            'Несколько лучей из одной точки и плоские углы между ними образуют <b>многогранный угол</b>; простейший — трёхгранный. Свойства: каждый плоский угол трёхгранного угла меньше суммы двух других; сумма плоских углов выпуклого многогранного угла меньше 360°. Поэтому правильных многогранников всего пять: в вершине сходятся 3, 4 или 5 треугольников, 3 квадрата или 3 пятиугольника.',
            'Several rays from one point and the flat angles between them form a <b>polyhedral angle</b>; the simplest is the trihedral angle. Properties: each face angle of a trihedral angle is less than the sum of the other two; the face angles of a convex polyhedral angle sum to less than 360°. That is why there are only five regular polyhedra: 3, 4 or 5 triangles, 3 squares or 3 pentagons meet at a vertex.'),
          rule: L('Σ yassi burchaklar &lt; 360°', 'Σ плоских углов &lt; 360°', 'Σ face angles &lt; 360°'),
          acts: [
            { type: 'drill', title: L('Uchdagi burchaklar yig‘indisi', 'Сумма углов при вершине', 'Angle sum at a vertex'), n: 6, make: function () { var T = pick([[{ uz: 'kub', ru: 'куб', en: 'cube' }, 270], [{ uz: 'tetraedr', ru: 'тетраэдр', en: 'tetrahedron' }, 180], [{ uz: 'oktaedr', ru: 'октаэдр', en: 'octahedron' }, 240], [{ uz: 'ikosaedr', ru: 'икосаэдр', en: 'icosahedron' }, 300], [{ uz: 'dodekaedr', ru: 'додекаэдр', en: 'dodecahedron' }, 324]]); return { q: mk(function (l) { return T[0][l] + { uz: ': bir uchidagi yassi burchaklar yig‘indisi', ru: ': сумма плоских углов при вершине', en: ': sum of face angles at a vertex' }[l]; }), a: T[1] }; } },
            { type: 'choose', icon: '🔷', make: function () { return pick([
              choice(L('Uchyoqli burchakning yassi burchaklari 50°, 60° va ... bo‘la oladi', 'Плоские углы трёхгранного: 50°, 60° и ...', 'A trihedral angle can have face angles 50°, 60° and ...'), ['100°', '120°', '150°'], 0),
              choice(L('Bir uchda 6 ta teng tomonli uchburchak uchrashsa...', 'Если в вершине сходятся 6 правильных треугольников...', 'If 6 equilateral triangles meet at a vertex...'), [L('tekis bo‘lib qoladi (360°)', 'получится плоскость (360°)', 'they lie flat (360°)'), L('ikosaedr', 'икосаэдр', 'an icosahedron'), L('oktaedr', 'октаэдр', 'an octahedron')], 0),
              choice(L('Kub uchida nechta yoq uchrashadi?', 'Сколько граней сходится в вершине куба?', 'Faces meeting at a cube vertex?'), ['3', '4', '6'], 0)]); } }
          ],
          quiz: [{ q: L('Qavariq ko‘pyoqli burchak yassi burchaklari yig‘indisi...', 'Сумма плоских углов выпуклого многогранного угла...', 'The face angles of a convex polyhedral angle sum to...'), o: ['&lt; 360°', '= 360°', '&gt; 360°'], a: 0 }, { q: L('Kub uchidagi yassi burchaklar yig‘indisi?', 'Сумма плоских углов при вершине куба?', 'Face angle sum at a cube vertex?'), o: ['270°', '360°', '180°'], a: 0 }] },

        { id: 't5', lessons: ch(2), title: L('Prizma va uning sirti', 'Призма и её поверхность', 'The prism and its surface'),
          keys: [L('S<sub>yon</sub> = P · h (to‘g‘ri prizma)', 'S<sub>бок</sub> = P · h (прямая призма)', 'S<sub>lat</sub> = P · h (right prism)'), 'S = 2(ab + bc + ca)'],
          scene: [{ obj: 'box', n: 2, color: 'cyan' }],
          explain: L('<b>Prizma</b> — ikki yog‘i (asoslari) teng va parallel ko‘pburchaklar, qolganlari parallelogrammlar bo‘lgan ko‘pyoq. Yon qirralari asosga perpendikulyar bo‘lsa — to‘g‘ri prizma, asosi muntazam ko‘pburchak bo‘lsa — muntazam prizma. To‘g‘ri prizma yon sirti S<sub>yon</sub> = P<sub>asos</sub>·h, to‘la sirti S = S<sub>yon</sub> + 2S<sub>asos</sub>. To‘g‘ri burchakli parallelepiped: S = 2(ab + bc + ca).',
            '<b>Призма</b> — многогранник, две грани которого (основания) — равные параллельные многоугольники, остальные — параллелограммы. Если боковые рёбра перпендикулярны основанию — прямая призма, если основание правильное — правильная. Боковая поверхность прямой призмы S<sub>бок</sub> = P<sub>осн</sub>·h, полная S = S<sub>бок</sub> + 2S<sub>осн</sub>. Прямоугольный параллелепипед: S = 2(ab + bc + ca).',
            'A <b>prism</b> is a polyhedron whose two faces (bases) are equal parallel polygons and whose other faces are parallelograms. If the lateral edges are perpendicular to the base it is a right prism; with a regular base it is a regular prism. A right prism’s lateral area is S<sub>lat</sub> = P<sub>base</sub>·h and its total area S = S<sub>lat</sub> + 2S<sub>base</sub>. For a cuboid, S = 2(ab + bc + ca).'),
          rule: 'S = P·h + 2S<sub>asos</sub>',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var a = R(2, 9), b = R(2, 9), c = R(2, 9), n = R(3, 8), k = R(0, 2); return [
              { q: 'a = ' + a + ', b = ' + b + ', c = ' + c + ';  S = 2(ab + bc + ca)', a: 2 * (a * b + b * c + c * a) },
              { q: W({ uz: 'Muntazam ' + n + '-burchakli to‘g‘ri prizma: asos tomoni ' + a + ', h = ' + c + ';  S<sub>yon</sub>', ru: 'Правильная ' + n + '-угольная прямая призма: сторона ' + a + ', h = ' + c + ';  S<sub>бок</sub>', en: 'Regular right ' + n + '-gonal prism: side ' + a + ', h = ' + c + ';  S<sub>lat</sub>' }), a: n * a * c },
              { q: W({ uz: 'Kub qirrasi ' + a + ';  to‘la sirt', ru: 'Ребро куба ' + a + ';  полная поверхность', en: 'Cube edge ' + a + ';  total surface' }), a: 6 * a * a }][k]; } },
            { type: 'choose', icon: '📦', make: function () { return pick([
              choice(L('Prizma yon yoqlari qanday shakl?', 'Какие боковые грани у призмы?', 'What shape are a prism’s lateral faces?'), [L('parallelogramm', 'параллелограммы', 'parallelograms'), L('uchburchak', 'треугольники', 'triangles'), L('trapetsiya', 'трапеции', 'trapezia')], 0),
              choice(L('To‘g‘ri prizma yon yoqlari...', 'Боковые грани прямой призмы —', 'A right prism’s lateral faces are...'), [L('to‘g‘ri to‘rtburchaklar', 'прямоугольники', 'rectangles'), L('romblar', 'ромбы', 'rhombi'), L('kvadratlar (doim)', 'квадраты (всегда)', 'always squares')], 0),
              choice(L('Kubning to‘la sirti, qirra a?', 'Полная поверхность куба с ребром a?', 'Total surface of a cube with edge a?'), ['6a²', '4a²', 'a³'], 0)]); } }
          ],
          quiz: [{ q: L('2 × 3 × 4 parallelepiped sirti?', 'Поверхность параллелепипеда 2 × 3 × 4?', 'Surface of a 2 × 3 × 4 cuboid?'), o: ['52', '24', '26'], a: 0 }, { q: L('P = 12, h = 5. To‘g‘ri prizma yon sirti?', 'P = 12, h = 5. Боковая поверхность?', 'P = 12, h = 5. Lateral area?'), o: ['60', '17', '120'], a: 0 }] },

        { id: 't6', lessons: ch(2), title: L('Prizmaning hajmi', 'Объём призмы', 'Volume of a prism'),
          keys: ['V = S<sub>asos</sub> · h', 'V = abc', L('Kavalyeri prinsipi', 'принцип Кавальери', 'Cavalieri’s principle')],
          scene: [{ obj: 'box', n: 2, color: 'orange' }, { obj: 'cube', n: 2, color: 'yellow' }],
          explain: L('Hajm — jism egallagan fazo o‘lchovi; birlik — qirrasi 1 bo‘lgan kub. Xossalar: teng jismlar hajmi teng, bo‘laklar hajmlari qo‘shiladi. To‘g‘ri burchakli parallelepiped: V = abc, kub: V = a³. Har qanday prizma: V = S<sub>asos</sub>·h. <b>Kavalyeri prinsipi</b>: barcha parallel kesimlari teng yuzli ikki jismning hajmlari teng — shuning uchun og‘ma prizma hajmi ham S·h.',
            'Объём — мера пространства, занимаемого телом; единица — куб с ребром 1. Свойства: равные тела имеют равные объёмы, объёмы частей складываются. Прямоугольный параллелепипед: V = abc, куб: V = a³. Любая призма: V = S<sub>осн</sub>·h. <b>Принцип Кавальери</b>: если все параллельные сечения двух тел равновелики, их объёмы равны — поэтому и у наклонной призмы V = S·h.',
            'Volume measures the space a solid occupies; the unit is a cube of edge 1. Equal solids have equal volumes and volumes of parts add up. A cuboid has V = abc, a cube V = a³, and any prism V = S<sub>base</sub>·h. <b>Cavalieri’s principle</b>: two solids whose parallel cross-sections all have equal areas have equal volumes — so an oblique prism also has V = S·h.'),
          rule: 'V = S<sub>asos</sub> · h',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var a = R(2, 9), b = R(2, 9), c = R(2, 12), k = R(0, 2); return [
              { q: 'a = ' + a + ', b = ' + b + ', c = ' + c + ';  V', a: a * b * c },
              { q: W({ uz: 'Asosi katetlari ' + a + ' va ' + (2 * b) + ' bo‘lgan to‘g‘ri burchakli uchburchak, h = ' + c + ';  V', ru: 'Основание — прямоугольный треугольник с катетами ' + a + ' и ' + (2 * b) + ', h = ' + c + ';  V', en: 'Base: right triangle with legs ' + a + ' and ' + (2 * b) + ', h = ' + c + ';  V' }), a: a * b * c },
              { q: W({ uz: 'Kub qirrasi ' + a + ';  V', ru: 'Ребро куба ' + a + ';  V', en: 'Cube edge ' + a + ';  V' }), a: a * a * a }][k]; } },
            { type: 'choose', icon: '🧱', make: function () { return pick([
              choice(L('1 m³ necha litr?', 'Сколько литров в 1 м³?', 'How many litres in 1 m³?'), ['1000', '100', '10'], 0),
              choice(L('Og‘ma prizma hajmi?', 'Объём наклонной призмы?', 'Volume of an oblique prism?'), ['S · h', 'S · l (qirra)', 'S · h / 3'], 0),
              choice(L('Kub hajmi 64. Qirrasi?', 'Объём куба 64. Ребро?', 'Cube volume 64. Edge?'), ['4', '8', '16'], 0)]); } }
          ],
          quiz: [{ q: L('3 × 4 × 5 parallelepiped hajmi?', 'Объём 3 × 4 × 5?', 'Volume of 3 × 4 × 5?'), o: ['60', '47', '94'], a: 0 }, { q: 'S = 12, h = 5. V = ?', o: ['60', '20', '17'], a: 0 }] },

        { id: 't7', lessons: ch(2), title: L('Silindrning sirti va hajmi', 'Поверхность и объём цилиндра', 'Surface and volume of a cylinder'),
          keys: ['S<sub>yon</sub> = 2πrh', 'S = 2πr(r + h)', 'V = πr²h'],
          scene: [{ obj: 'cylinder', n: 3, color: 'green' }],
          explain: L('<b>Silindr</b> — to‘g‘ri to‘rtburchakni bir tomoni atrofida aylantirishdan hosil bo‘lgan jism; asoslari — teng doiralar. Yon sirt yoyilmasi — tomonlari 2πr va h bo‘lgan to‘g‘ri to‘rtburchak: S<sub>yon</sub> = 2πrh. To‘la sirt S = 2πr(r + h). Hajm (prizma kabi) V = S<sub>asos</sub>·h = πr²h. Masalan, r = 3, h = 5 da V = 45π ≈ 141,4.',
            '<b>Цилиндр</b> — тело, полученное вращением прямоугольника вокруг стороны; основания — равные круги. Развёртка боковой поверхности — прямоугольник со сторонами 2πr и h: S<sub>бок</sub> = 2πrh. Полная S = 2πr(r + h). Объём (как у призмы) V = S<sub>осн</sub>·h = πr²h. Например, при r = 3, h = 5 V = 45π ≈ 141,4.',
            'A <b>cylinder</b> is the solid made by spinning a rectangle about one side; its bases are equal discs. The lateral surface unrolls into a rectangle 2πr by h, so S<sub>lat</sub> = 2πrh, and the total is S = 2πr(r + h). Like a prism, V = S<sub>base</sub>·h = πr²h. With r = 3, h = 5: V = 45π ≈ 141.4.'),
          rule: 'V = πr²h',
          acts: [
            { type: 'drill', title: L('π oldidagi son', 'Число перед π', 'Coefficient of π'), n: 8, make: function (R) { var r = R(1, 8), h = R(1, 12), k = R(0, 2); return [
              { q: 'r = ' + r + ', h = ' + h + ';  V = ?·π', a: r * r * h },
              { q: 'r = ' + r + ', h = ' + h + ';  S<sub>yon</sub> = ?·π', a: 2 * r * h },
              { q: 'r = ' + r + ', h = ' + h + ';  S = ?·π', a: 2 * r * (r + h) }][k]; } },
            { type: 'choose', icon: '🥫', make: function () { return pick([
              choice(L('Silindr yon sirti yoyilmasi?', 'Развёртка боковой поверхности цилиндра?', 'The unrolled lateral surface of a cylinder?'), [L('to‘g‘ri to‘rtburchak', 'прямоугольник', 'a rectangle'), L('doiraviy sektor', 'круговой сектор', 'a sector'), L('trapetsiya', 'трапеция', 'a trapezium')], 0),
              choice(L('Radius 2 marta oshsa, hajm...', 'Если радиус увеличить в 2 раза, объём...', 'Doubling the radius makes the volume...'), [L('4 marta oshadi', 'вырастет в 4 раза', '4 times larger'), L('2 marta', 'в 2 раза', '2 times larger'), L('8 marta', 'в 8 раз', '8 times larger')], 0),
              choice(L('Silindr o‘q kesimi?', 'Осевое сечение цилиндра?', 'Axial section of a cylinder?'), [L('to‘g‘ri to‘rtburchak', 'прямоугольник', 'a rectangle'), L('doira', 'круг', 'a disc'), L('uchburchak', 'треугольник', 'a triangle')], 0)]); } }
          ],
          quiz: [{ q: 'r = 2, h = 5. V = ?', o: ['20π', '10π', '40π'], a: 0 }, { q: 'r = 3, h = 4. S<sub>yon</sub> = ?', o: ['24π', '12π', '36π'], a: 0 }] }
      ] },

      { id: 's3', title: L('Piramida va konus', 'Пирамида и конус', 'Pyramid and cone'), icon: '🔺', color: 'orange', topics: [
        { id: 't8', lessons: ch(3), title: L('Piramida va kesik piramida', 'Пирамида и усечённая пирамида', 'Pyramid and frustum'),
          keys: [L('apofema', 'апофема', 'apothem'), L('S<sub>yon</sub> = ½ P · l', 'S<sub>бок</sub> = ½ P · l', 'S<sub>lat</sub> = ½ P · l'), L('kesik piramida', 'усечённая пирамида', 'frustum')],
          scene: [{ obj: 'pyramid', n: 3, color: 'orange' }],
          explain: L('<b>Piramida</b> — asosi ko‘pburchak, yon yoqlari umumiy uchli uchburchaklar bo‘lgan ko‘pyoq. <b>Muntazam piramida</b>: asosi muntazam ko‘pburchak, balandlik asosi uning markaziga tushadi. Yon yoq balandligi — <b>apofema</b> l. Muntazam piramida yon sirti S<sub>yon</sub> = ½·P·l. Balandlik h, apofema l va asos markazidan tomongacha masofa r: l² = h² + r². <b>Kesik piramida</b>: S<sub>yon</sub> = ½(P₁ + P₂)·l.',
            '<b>Пирамида</b> — многогранник с многоугольником в основании и боковыми гранями-треугольниками с общей вершиной. <b>Правильная пирамида</b>: основание правильное, высота падает в его центр. Высота боковой грани — <b>апофема</b> l. Боковая поверхность правильной пирамиды S<sub>бок</sub> = ½·P·l. Высота h, апофема l и расстояние r от центра до стороны: l² = h² + r². <b>Усечённая пирамида</b>: S<sub>бок</sub> = ½(P₁ + P₂)·l.',
            'A <b>pyramid</b> has a polygon base and triangular lateral faces meeting at one apex. In a <b>regular pyramid</b> the base is regular and the height lands at its centre. The height of a lateral face is the <b>apothem</b> l. Lateral area S<sub>lat</sub> = ½·P·l. With height h and distance r from the centre to a side, l² = h² + r². For a <b>frustum</b>, S<sub>lat</sub> = ½(P₁ + P₂)·l.'),
          rule: 'S<sub>yon</sub> = ½ · P · l',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var t = pick(TR), a = R(2, 10), l = R(3, 12), k = R(0, 2); return [
              { q: W({ uz: 'Muntazam to‘rtburchakli piramida: asos tomoni ' + a + ', apofema ' + l + ';  S<sub>yon</sub>', ru: 'Правильная четырёхугольная пирамида: сторона ' + a + ', апофема ' + l + ';  S<sub>бок</sub>', en: 'Regular square pyramid: side ' + a + ', apothem ' + l + ';  S<sub>lat</sub>' }), a: 2 * a * l },
              { q: W({ uz: 'Muntazam to‘rtburchakli piramida: asos tomoni ' + (2 * t[0]) + ', h = ' + t[1] + ';  apofema', ru: 'Правильная четырёхугольная пирамида: сторона ' + (2 * t[0]) + ', h = ' + t[1] + ';  апофема', en: 'Regular square pyramid: side ' + (2 * t[0]) + ', h = ' + t[1] + ';  apothem' }), a: t[2] },
              { q: W({ uz: 'Muntazam to‘rtburchakli piramida: tomon ' + a + ', apofema ' + l + ';  to‘la sirt', ru: 'Правильная четырёхугольная пирамида: сторона ' + a + ', апофема ' + l + ';  полная поверхность', en: 'Regular square pyramid: side ' + a + ', apothem ' + l + ';  total surface' }), a: a * a + 2 * a * l }][k]; } },
            { type: 'choose', icon: '🔺', make: function () { return pick([
              choice(L('Muntazam piramida yon yoqlari?', 'Боковые грани правильной пирамиды?', 'Lateral faces of a regular pyramid?'), [L('teng yonli teng uchburchaklar', 'равные равнобедренные треугольники', 'equal isosceles triangles'), L('kvadratlar', 'квадраты', 'squares'), L('turli uchburchaklar', 'разные треугольники', 'different triangles')], 0),
              choice(L('Kesik piramida yon yoqlari?', 'Боковые грани усечённой пирамиды?', 'Lateral faces of a frustum?'), [L('trapetsiyalar', 'трапеции', 'trapezia'), L('uchburchaklar', 'треугольники', 'triangles'), L('to‘g‘ri to‘rtburchaklar', 'прямоугольники', 'rectangles')], 0),
              choice(L('Apofema — bu...', 'Апофема — это...', 'The apothem is...'), [L('yon yoq balandligi', 'высота боковой грани', 'the height of a lateral face'), L('piramida balandligi', 'высота пирамиды', 'the pyramid’s height'), L('yon qirra', 'боковое ребро', 'a lateral edge')], 0)]); } }
          ],
          quiz: [{ q: L('Asos tomoni 6, h = 4 (muntazam to‘rtburchakli). Apofema?', 'Сторона 6, h = 4 (правильная четырёхугольная). Апофема?', 'Side 6, h = 4 (regular square). Apothem?'), o: ['5', '√52', '10'], a: 0 }, { q: L('n-burchakli piramidada nechta yoq?', 'Сколько граней у n-угольной пирамиды?', 'Faces of an n-gonal pyramid?'), o: ['n + 1', '2n', 'n'], a: 0 }] },

        { id: 't9', lessons: ch(3), title: L('Piramidaning hajmi', 'Объём пирамиды', 'Volume of a pyramid'),
          keys: ['V = ⅓ S h', L('kesik piramida: V = h/3 · (S₁ + S₂ + √(S₁S₂))', 'усечённая: V = h/3 · (S₁ + S₂ + √(S₁S₂))', 'frustum: V = h/3 · (S₁ + S₂ + √(S₁S₂))')],
          scene: [{ obj: 'pyramid', n: 2, color: 'yellow' }, { obj: 'cube', n: 1, color: 'blue' }],
          explain: L('<b>Piramida hajmi</b> V = ⅓·S<sub>asos</sub>·h — xuddi shu asos va balandlikli prizma hajmining uchdan biri (kubni markazdan 6 ta teng piramidaga bo‘lish mumkin). <b>Kesik piramida</b>: V = (h/3)(S₁ + S₂ + √(S₁S₂)). Misrning Xeops piramidasi: asos tomoni ≈ 230 m, balandligi ≈ 146 m, hajmi ≈ 2,6 mln m³. Kesik piramida formulasini qadimgi misrliklar Moskva papirusida bilgan.',
            '<b>Объём пирамиды</b> V = ⅓·S<sub>осн</sub>·h — треть объёма призмы с тем же основанием и высотой (куб делится из центра на 6 равных пирамид). <b>Усечённая пирамида</b>: V = (h/3)(S₁ + S₂ + √(S₁S₂)). Пирамида Хеопса: сторона ≈ 230 м, высота ≈ 146 м, объём ≈ 2,6 млн м³. Формулу усечённой пирамиды знали древние египтяне (Московский папирус).',
            'The <b>volume of a pyramid</b> is V = ⅓·S<sub>base</sub>·h — a third of the prism with the same base and height (a cube splits from its centre into 6 equal pyramids). For a <b>frustum</b>, V = (h/3)(S₁ + S₂ + √(S₁S₂)). The Great Pyramid: side ≈ 230 m, height ≈ 146 m, volume ≈ 2.6 million m³. The ancient Egyptians knew the frustum formula (Moscow Papyrus).'),
          rule: 'V = ⅓ · S · h',
          acts: [
            { type: 'drill', n: 8, make: function (R) { var a = R(2, 10), h = 3 * R(1, 5), b = R(1, a - 1), S = 3 * R(2, 20), H = R(2, 12), k = R(0, 2); return [
              { q: W({ uz: 'Asosi kvadrat, tomoni ' + a + ', h = ' + h + ';  V', ru: 'Основание — квадрат со стороной ' + a + ', h = ' + h + ';  V', en: 'Square base side ' + a + ', h = ' + h + ';  V' }), a: a * a * h / 3 },
              { q: 'S = ' + S + ', h = ' + H + ';  V = ⅓Sh', a: S * H / 3 },
              { q: W({ uz: 'Kesik piramida: asoslar — tomonlari ' + a + ' va ' + b + ' bo‘lgan kvadratlar, h = 3;  V', ru: 'Усечённая пирамида: квадраты со сторонами ' + a + ' и ' + b + ', h = 3;  V', en: 'Frustum: square bases ' + a + ' and ' + b + ', h = 3;  V' }), a: a * a + b * b + a * b }][k]; } },
            { type: 'choose', icon: '🏜️', make: function () { return pick([
              choice(L('Piramida hajmi bir xil asos va balandlikli prizma hajmining qanchasi?', 'Какую часть объёма призмы составляет пирамида?', 'What fraction of the prism is the pyramid?'), ['1/3', '1/2', '2/3'], 0),
              choice(L('Kub markazidan nechta teng piramidaga bo‘linadi?', 'На сколько равных пирамид делится куб из центра?', 'Into how many equal pyramids does a cube split from its centre?'), ['6', '3', '8'], 0),
              choice(L('Piramida balandligi 2 marta oshdi. Hajm?', 'Высоту увеличили в 2 раза. Объём?', 'The height doubles. The volume?'), [L('2 marta oshadi', 'в 2 раза больше', '2 times larger'), L('8 marta', 'в 8 раз', '8 times larger'), L('o‘zgarmaydi', 'не меняется', 'unchanged')], 0)]); } }
          ],
          quiz: [{ q: 'S = 9, h = 4. V = ?', o: ['12', '36', '13'], a: 0 }, { q: L('Kub qirrasi 6. Markazidan uchiga piramida hajmi (1/6)?', 'Куб с ребром 6. Объём одной из 6 пирамид?', 'Cube edge 6. Volume of one of the 6 pyramids?'), o: ['36', '216', '72'], a: 0 }] },

        { id: 't10', lessons: ch(3), title: L('Konus va kesik konus', 'Конус и усечённый конус', 'Cone and truncated cone'),
          keys: ['S<sub>yon</sub> = πrl', 'V = ⅓πr²h', 'l² = r² + h²'],
          scene: [{ obj: 'cone', n: 3, color: 'pink' }],
          explain: L('<b>Konus</b> — to‘g‘ri burchakli uchburchakni kateti atrofida aylantirishdan hosil bo‘ladi: r — asos radiusi, h — balandlik, l — yasovchi, l² = r² + h². Yon sirt yoyilmasi — doiraviy sektor: S<sub>yon</sub> = πrl, to‘la sirt S = πr(r + l). Hajm V = ⅓πr²h. <b>Kesik konus</b>: S<sub>yon</sub> = π(r₁ + r₂)l, V = ⅓πh(r₁² + r₁r₂ + r₂²).',
            '<b>Конус</b> получается вращением прямоугольного треугольника вокруг катета: r — радиус основания, h — высота, l — образующая, l² = r² + h². Развёртка боковой поверхности — круговой сектор: S<sub>бок</sub> = πrl, полная S = πr(r + l). Объём V = ⅓πr²h. <b>Усечённый конус</b>: S<sub>бок</sub> = π(r₁ + r₂)l, V = ⅓πh(r₁² + r₁r₂ + r₂²).',
            'A <b>cone</b> comes from spinning a right triangle about a leg: r is the base radius, h the height and l the slant height, with l² = r² + h². The lateral surface unrolls into a sector: S<sub>lat</sub> = πrl, total S = πr(r + l). Volume V = ⅓πr²h. For a <b>truncated cone</b>, S<sub>lat</sub> = π(r₁ + r₂)l and V = ⅓πh(r₁² + r₁r₂ + r₂²).'),
          rule: 'V = ⅓πr²h,  S<sub>yon</sub> = πrl',
          acts: [
            { type: 'choose', title: L('Yasovchi', 'Образующая', 'Slant height'), icon: '🍦', make: function () { var t = pick(TR); return choice(mk(function (l) { return { uz: 'r (sariq) = ' + t[0] + ', h (yashil) = ' + t[1] + '. Yasovchi l (qizil) = ?', ru: 'r (жёлтый) = ' + t[0] + ', h (зелёный) = ' + t[1] + '. Образующая l (красная) = ?', en: 'r (yellow) = ' + t[0] + ', h (green) = ' + t[1] + '. Slant l (red) = ?' }[l] + coneFig(t[0], t[1], '?'); }), [String(t[2]), String(t[0] + t[1]), String(t[2] + 1)], 0); } },
            { type: 'drill', title: L('π oldidagi son', 'Число перед π', 'Coefficient of π'), n: 8, make: function (R) { var t = pick(TR), r = R(1, 9), h = 3 * R(1, 4), k = R(0, 2); return [
              { q: 'r = ' + r + ', h = ' + h + ';  V = ?·π', a: r * r * h / 3 },
              { q: 'r = ' + t[0] + ', h = ' + t[1] + ';  S<sub>yon</sub> = ?·π', a: t[0] * t[2] },
              { q: 'r = ' + t[0] + ', h = ' + t[1] + ';  S = ?·π', a: t[0] * (t[0] + t[2]) }][k]; } }
          ],
          quiz: [{ q: 'r = 3, h = 4. S<sub>yon</sub> = ?', o: ['15π', '12π', '24π'], a: 0 }, { q: 'r = 3, h = 5. V = ?', o: ['15π', '45π', '5π'], a: 0 }] }
      ] },

      { id: 's4', title: L('Sfera va shar', 'Сфера и шар', 'Sphere and ball'), icon: '🌐', color: 'violet', topics: [
        { id: 't11', lessons: ch(4), title: L('Shar va uning elementlari', 'Шар и его элементы', 'The ball and its elements'),
          keys: [L('sfera, shar, katta doira', 'сфера, шар, большой круг', 'sphere, ball, great circle'), 'r = √(R² − d²)', L('urinma tekislik', 'касательная плоскость', 'tangent plane')],
          scene: [{ obj: 'ball', n: 3, color: 'violet' }],
          explain: L('<b>Sfera</b> — markazdan R masofadagi nuqtalar to‘plami, <b>shar</b> — sfera bilan chegaralangan jism. Tenglama: (x − a)² + (y − b)² + (z − c)² = R². Sharni tekislik bilan kesish — doira; markazdan d masofadagi kesim radiusi r = √(R² − d²). Markazdan o‘tgan kesim — <b>katta doira</b>. Urinma tekislik urinish nuqtasiga o‘tkazilgan radiusga perpendikulyar.',
            '<b>Сфера</b> — множество точек на расстоянии R от центра, <b>шар</b> — тело, ограниченное сферой. Уравнение: (x − a)² + (y − b)² + (z − c)² = R². Сечение шара плоскостью — круг; радиус сечения на расстоянии d от центра r = √(R² − d²). Сечение через центр — <b>большой круг</b>. Касательная плоскость перпендикулярна радиусу, проведённому в точку касания.',
            'A <b>sphere</b> is the set of points at distance R from the centre; a <b>ball</b> is the solid it bounds. Equation: (x − a)² + (y − b)² + (z − c)² = R². A plane cuts a ball in a disc; at distance d from the centre its radius is r = √(R² − d²). The section through the centre is a <b>great circle</b>. A tangent plane is perpendicular to the radius at the point of contact.'),
          rule: 'r = √(R² − d²)',
          acts: [
            { type: 'choose', title: L('Kesim radiusi', 'Радиус сечения', 'Section radius'), icon: '🌐', make: function () { var t = pick(TR); return choice(mk(function (l) { return { uz: 'R (qizil) = ' + t[2] + ', markazdan masofa d (yashil) = ' + t[0] + '. Kesim radiusi r?', ru: 'R (красный) = ' + t[2] + ', расстояние d (зелёный) = ' + t[0] + '. Радиус сечения r?', en: 'R (red) = ' + t[2] + ', distance d (green) = ' + t[0] + '. Section radius r?' }[l] + sphereFig(t[2], t[0], '?'); }), [String(t[1]), String(t[2] - t[0]), String(t[1] + 1)], 0); } },
            { type: 'drill', n: 8, make: function (R) { var t = pick(TR), a = R(-5, 5), b = R(-5, 5), c = R(-5, 5), r = R(2, 9), k = R(0, 2); return [
              { q: 'R = ' + t[2] + ', r = ' + t[1] + ';  d', a: t[0] },
              { q: W({ uz: '(x' + (a < 0 ? ' + ' + (-a) : ' − ' + a) + ')² + (y' + (b < 0 ? ' + ' + (-b) : ' − ' + b) + ')² + (z' + (c < 0 ? ' + ' + (-c) : ' − ' + c) + ')² = ' + (r * r) + ';  R', ru: '(x' + (a < 0 ? ' + ' + (-a) : ' − ' + a) + ')² + (y' + (b < 0 ? ' + ' + (-b) : ' − ' + b) + ')² + (z' + (c < 0 ? ' + ' + (-c) : ' − ' + c) + ')² = ' + (r * r) + ';  R', en: '(x' + (a < 0 ? ' + ' + (-a) : ' − ' + a) + ')² + (y' + (b < 0 ? ' + ' + (-b) : ' − ' + b) + ')² + (z' + (c < 0 ? ' + ' + (-c) : ' − ' + c) + ')² = ' + (r * r) + ';  R' }), a: r },
              { q: W({ uz: 'R = ' + r + ';  katta doira diametri', ru: 'R = ' + r + ';  диаметр большого круга', en: 'R = ' + r + ';  diameter of a great circle' }), a: 2 * r }][k]; } }
          ],
          quiz: [{ q: L('R = 5, d = 3. Kesim radiusi?', 'R = 5, d = 3. Радиус сечения?', 'R = 5, d = 3. Section radius?'), o: ['4', '2', '8'], a: 0 }, { q: L('Urinma tekislik radiusga...', 'Касательная плоскость к радиусу...', 'A tangent plane is ... to the radius'), o: [L('perpendikulyar', 'перпендикулярна', 'perpendicular'), L('parallel', 'параллельна', 'parallel'), L('45° ostida', 'под 45°', 'at 45°')], a: 0 }] },

        { id: 't12', lessons: ch(4), title: L('Shar va uning bo‘laklari hajmi', 'Объём шара и его частей', 'Volume of a ball and its parts'),
          keys: ['V = ⁴⁄₃πR³', L('shar segmenti: V = πh²(R − h/3)', 'шаровой сегмент: V = πh²(R − h/3)', 'cap: V = πh²(R − h/3)')],
          scene: [{ obj: 'ball', n: 2, color: 'orange' }, { obj: 'cylinder', n: 1, color: 'cyan' }],
          explain: L('<b>Shar hajmi</b> V = ⁴⁄₃πR³. Arximed isbotlagan: sharga tashqi chizilgan silindr hajmi shar hajmidan 1,5 marta katta (3 : 2) — u buni qabr toshiga chizishni vasiyat qilgan. Yarim shar: ⅔πR³. <b>Shar segmenti</b> (balandligi h): V = πh²(R − h/3). <b>Shar sektori</b>: V = ⅔πR²h. Masalan, R = 3 bo‘lsa, V = 36π ≈ 113,1.',
            '<b>Объём шара</b> V = ⁴⁄₃πR³. Архимед доказал: объём описанного около шара цилиндра в 1,5 раза больше объёма шара (3 : 2) — и завещал изобразить это на своей могиле. Полушар: ⅔πR³. <b>Шаровой сегмент</b> высоты h: V = πh²(R − h/3). <b>Шаровой сектор</b>: V = ⅔πR²h. Например, при R = 3 V = 36π ≈ 113,1.',
            'The <b>volume of a ball</b> is V = ⁴⁄₃πR³. Archimedes proved that the cylinder circumscribed about a ball has 1.5 times its volume (3 : 2) and asked for this to be carved on his tomb. A hemisphere has ⅔πR³. A <b>spherical cap</b> of height h has V = πh²(R − h/3), and a <b>spherical sector</b> V = ⅔πR²h. With R = 3, V = 36π ≈ 113.1.'),
          rule: 'V = ⁴⁄₃ π R³',
          acts: [
            { type: 'drill', title: L('π oldidagi son', 'Число перед π', 'Coefficient of π'), n: 8, make: function (R) { var r = 3 * R(1, 4), k = R(0, 2); return [
              { q: 'R = ' + r + ';  V = ?·π', a: 4 * r * r * r / 3 },
              { q: W({ uz: 'Yarim shar, R = ' + r + ';  V = ?·π', ru: 'Полушар, R = ' + r + ';  V = ?·π', en: 'Hemisphere, R = ' + r + ';  V = ?·π' }), a: 2 * r * r * r / 3 },
              { q: W({ uz: 'Shar segmenti: R = ' + r + ', h = 3;  V = ?·π', ru: 'Шаровой сегмент: R = ' + r + ', h = 3;  V = ?·π', en: 'Cap: R = ' + r + ', h = 3;  V = ?·π' }), a: 9 * (r - 1) }][k]; } },
            { type: 'choose', icon: '🏺', make: function () { return pick([
              choice(L('Arximed: silindr va ichki chizilgan shar hajmlari nisbati?', 'Архимед: отношение объёмов цилиндра и вписанного шара?', 'Archimedes: cylinder to inscribed ball volume ratio?'), ['3 : 2', '2 : 1', '4 : 3'], 0),
              choice(L('Radius 2 marta oshsa, shar hajmi...', 'Если радиус вдвое больше, объём шара...', 'Doubling the radius makes the ball’s volume...'), [L('8 marta oshadi', 'в 8 раз больше', '8 times larger'), L('4 marta', 'в 4 раза', '4 times larger'), L('2 marta', 'в 2 раза', '2 times larger')], 0),
              choice(L('Yer va Oy radiuslari nisbati ≈ 3,67. Hajmlar nisbati ≈ ?', 'Отношение радиусов Земли и Луны ≈ 3,67. Объёмов ≈ ?', 'Earth/Moon radius ratio ≈ 3.67. Volume ratio ≈ ?'), ['49', '13', '3,67'], 0)]); } }
          ],
          quiz: [{ q: 'R = 3. V = ?', o: ['36π', '12π', '27π'], a: 0 }, { q: L('Yarim shar, R = 3. V = ?', 'Полушар, R = 3. V = ?', 'Hemisphere, R = 3. V = ?'), o: ['18π', '36π', '9π'], a: 0 }] },

        { id: 't13', lessons: ch(4), title: L('Sfera sirtining yuzi', 'Площадь сферы', 'Surface area of a sphere'),
          keys: ['S = 4πR²', L('4 ta katta doira', '4 больших круга', '4 great circles')],
          scene: [{ obj: 'ball', n: 3, color: 'blue' }],
          explain: L('<b>Sfera yuzi</b> S = 4πR² — to‘rtta katta doira yuziga teng. Arximed: sfera yuzi tashqi chizilgan silindr yon sirtiga teng (2πR·2R = 4πR²). Shar hajmini sirtdan ham chiqarish mumkin: sharni markazda uchi bo‘lgan juda ko‘p «piramidalar»ga bo‘lsak, V = ⅓·S·R = ⁴⁄₃πR³. Yer sirti ≈ 4π·6371² ≈ 510 mln km².',
            '<b>Площадь сферы</b> S = 4πR² — четыре площади большого круга. Архимед: площадь сферы равна боковой поверхности описанного цилиндра (2πR·2R = 4πR²). Объём шара можно получить из площади: разбив шар на множество «пирамид» с вершиной в центре, V = ⅓·S·R = ⁴⁄₃πR³. Поверхность Земли ≈ 4π·6371² ≈ 510 млн км².',
            'The <b>surface area of a sphere</b> is S = 4πR² — four great-circle areas. Archimedes showed it equals the lateral area of the circumscribed cylinder (2πR·2R = 4πR²). The volume follows from the area: split the ball into many thin “pyramids” with apex at the centre, so V = ⅓·S·R = ⁴⁄₃πR³. Earth’s surface ≈ 4π·6371² ≈ 510 million km².'),
          rule: 'S = 4πR²',
          acts: [
            { type: 'drill', title: L('π oldidagi son', 'Число перед π', 'Coefficient of π'), n: 8, make: function (R) { var r = R(1, 10), k = R(0, 2); return [
              { q: 'R = ' + r + ';  S = ?·π', a: 4 * r * r },
              { q: W({ uz: 'Diametr ' + (2 * r) + ';  S = ?·π', ru: 'Диаметр ' + (2 * r) + ';  S = ?·π', en: 'Diameter ' + (2 * r) + ';  S = ?·π' }), a: 4 * r * r },
              { q: 'S = ' + (4 * r * r) + 'π;  R', a: r }][k]; } },
            { type: 'choose', icon: '🌍', make: function () { return pick([
              choice(L('Sfera yuzi nechta katta doira yuziga teng?', 'Сколько площадей большого круга в площади сферы?', 'A sphere’s area equals how many great circles?'), ['4', '2', 'π'], 0),
              choice(L('Radius 3 marta oshsa, sfera yuzi...', 'Если радиус втрое больше, площадь сферы...', 'Tripling the radius makes the area...'), [L('9 marta oshadi', 'в 9 раз больше', '9 times larger'), L('3 marta', 'в 3 раза', '3 times larger'), L('27 marta', 'в 27 раз', '27 times larger')], 0),
              choice(L('Yarim sfera (tubi bilan) to‘la sirti?', 'Полная поверхность полушара (с дном)?', 'Total surface of a solid hemisphere?'), ['3πR²', '2πR²', '4πR²'], 0)]); } }
          ],
          quiz: [{ q: 'R = 5. S = ?', o: ['100π', '25π', '20π'], a: 0 }, { q: 'S = 36π. R = ?', o: ['3', '6', '9'], a: 0 }] },

        { id: 't14', lessons: ch(5), title: L('Takrorlash: stereometriya', 'Повторение: стереометрия', 'Review: solid geometry'),
          keys: [L('prizma, silindr: V = Sh', 'призма, цилиндр: V = Sh', 'prism, cylinder: V = Sh'), L('piramida, konus: V = ⅓Sh', 'пирамида, конус: V = ⅓Sh', 'pyramid, cone: V = ⅓Sh'), 'V = ⁴⁄₃πR³'],
          scene: [{ obj: 'cube', n: 1, color: 'green' }, { obj: 'cone', n: 1, color: 'orange' }, { obj: 'ball', n: 1, color: 'pink' }, { obj: 'cylinder', n: 1, color: 'blue' }],
          explain: L('Barcha jismlar ikki oilaga bo‘linadi: «to‘g‘ri» jismlar (prizma, silindr) — V = S·h, «uchli» jismlar (piramida, konus) — V = ⅓S·h; shar — V = ⁴⁄₃πR³. Bir xil asos va balandlikli konus, shar va silindr hajmlari nisbati 1 : 2 : 3 (shar diametri = balandlik). Masalalarda Pifagor teoremasi, o‘xshashlik (k, k², k³) va koordinatalar asosiy qurol.',
            'Все тела делятся на два семейства: «прямые» (призма, цилиндр) — V = S·h, «остроконечные» (пирамида, конус) — V = ⅓S·h; шар — V = ⁴⁄₃πR³. Конус, шар и цилиндр с одинаковым основанием и высотой (высота = диаметр шара) имеют объёмы 1 : 2 : 3. Главные инструменты: теорема Пифагора, подобие (k, k², k³) и координаты.',
            'Solids fall into two families: “straight” ones (prism, cylinder) with V = S·h and “pointed” ones (pyramid, cone) with V = ⅓S·h; the ball has V = ⁴⁄₃πR³. A cone, ball and cylinder with the same base and height (height = the ball’s diameter) have volumes in the ratio 1 : 2 : 3. The main tools are Pythagoras, similarity (k, k², k³) and coordinates.'),
          rule: L('konus : shar : silindr = 1 : 2 : 3', 'конус : шар : цилиндр = 1 : 2 : 3', 'cone : ball : cylinder = 1 : 2 : 3'),
          acts: [
            { type: 'drill', n: 8, make: function (R) { var t = pick(T3), r = 3 * R(1, 3), a = R(2, 9), k = R(0, 3); return [
              { q: 'a = ' + t[0] + ', b = ' + t[1] + ', c = ' + t[2] + ';  d', a: t[3] },
              { q: W({ uz: 'Silindr, r = ' + r + ', h = ' + (2 * r) + '; shar, R = ' + r + ';  V<sub>sil</sub> : V<sub>shar</sub> · 2', ru: 'Цилиндр r = ' + r + ', h = ' + (2 * r) + '; шар R = ' + r + ';  V<sub>цил</sub> : V<sub>шар</sub> · 2', en: 'Cylinder r = ' + r + ', h = ' + (2 * r) + '; ball R = ' + r + ';  V<sub>cyl</sub> : V<sub>ball</sub> · 2' }), a: 3 },
              { q: W({ uz: 'Kub qirrasi ' + a + ';  ichki chizilgan shar radiusi × 2', ru: 'Ребро куба ' + a + ';  радиус вписанного шара × 2', en: 'Cube edge ' + a + ';  inscribed ball radius × 2' }), a: a },
              { q: W({ uz: 'Konus va silindr asosi va balandligi bir xil, V<sub>sil</sub> = ' + (3 * a * 10) + ';  V<sub>konus</sub>', ru: 'Конус и цилиндр с одинаковыми основанием и высотой, V<sub>цил</sub> = ' + (3 * a * 10) + ';  V<sub>кон</sub>', en: 'Cone and cylinder with same base and height, V<sub>cyl</sub> = ' + (3 * a * 10) + ';  V<sub>cone</sub>' }), a: a * 10 }][k]; } },
            { type: 'choose', icon: '🏆', make: function (R) { var a = R(2, 9); return pick([
              choice(W({ uz: 'Kub qirrasi ' + a + '. Diagonali?', ru: 'Ребро куба ' + a + '. Диагональ?', en: 'Cube edge ' + a + '. Diagonal?' }), [a + '√3', a + '√2', String(3 * a)], 0),
              choice(L('Konus : shar : silindr hajmlari (bir xil r, h = 2r)?', 'Объёмы конус : шар : цилиндр (одинаковые r, h = 2r)?', 'Cone : ball : cylinder volumes (same r, h = 2r)?'), ['1 : 2 : 3', '1 : 3 : 2', '1 : 1 : 1'], 0),
              choice(L('Qaysi jism hajmi V = ⅓Sh?', 'У какого тела V = ⅓Sh?', 'Which solid has V = ⅓Sh?'), [L('konus', 'конус', 'cone'), L('silindr', 'цилиндр', 'cylinder'), L('prizma', 'призма', 'prism')], 0)]); } }
          ],
          quiz: [{ q: L('Kubga ichki chizilgan shar, qirra 4. R = ?', 'Шар, вписанный в куб с ребром 4. R = ?', 'Ball inscribed in a cube of edge 4. R = ?'), o: ['2', '4', '2√3'], a: 0 }, { q: L('Silindr hajmi 30. Xuddi shunday konus hajmi?', 'Объём цилиндра 30. Объём такого же конуса?', 'Cylinder volume 30. Matching cone volume?'), o: ['10', '15', '90'], a: 0 }] }
      ] }
    ]
  };
  C.addPart(part2);
})(this);
