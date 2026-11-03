// Nuvemath — 7-sinf, Geometriya (manba: B. Xaydarov, N. Tashtemirova, I. Asrorov. «Geometriya. 7-sinf», Toshkent, 2022, yangi nashr).
// Boblar va mavzular tartibi darslikdan olingan; tushuntirishlar, topshiriqlar va chizmalar Nuvemath uchun qayta yozilgan.
(function (root) {
  'use strict';
  var C = root.NMCurriculum, H = C.H, L = H.L, mk = H.mk, choice = H.choice, pick = H.pick;
  var CM = H.CM, DEG = L('°', '°', '°');
  function ch(n) { return L(n + '-bob', 'Глава ' + n, 'Chapter ' + n); }
  function fig(inner, w, h) { return '<div class="kd-fig"><svg viewBox="0 0 ' + (w || 300) + ' ' + (h || 180) + '">' + inner + '</svg></div>'; }
  var TX = 'font-size="15" font-weight="700" fill="currentColor" text-anchor="middle"', ST = 'stroke="#4f8dff" stroke-width="3" stroke-linecap="round"', Q = ' style="fill:#ff6b8b"';
  function segFig(a, b) { return fig('<line x1="20" y1="80" x2="280" y2="80" ' + ST + '/>' + [20, 20 + 260 * a / (a + b), 280].map(function (x, i) { return '<circle cx="' + x + '" cy="80" r="5" fill="#ff6b8b"/><text x="' + x + '" y="62" ' + TX + '>' + 'ACB'[i] + '</text>'; }).join('') +
    '<text x="' + (20 + 130 * a / (a + b)) + '" y="108" ' + TX + '>' + a + '</text><text x="' + (20 + 260 * a / (a + b) + 130 * b / (a + b)) + '" y="108" ' + TX + Q + '>?</text>', 300, 130); }
  function triFig(A, B, Cc, extra) { return fig('<polygon points="30,160 270,160 110,30" fill="rgba(79,141,255,.15)" ' + ST + ' stroke-linejoin="round"/>' + (extra || '') +
    '<text x="62" y="152" ' + TX + (A === '?' ? Q : '') + '>' + A + '</text><text x="236" y="152" ' + TX + (B === '?' ? Q : '') + '>' + B + '</text><text x="112" y="64" ' + TX + (Cc === '?' ? Q : '') + '>' + Cc + '</text>', 300, 180); }
  // to'g'ri burchakli uchburchak
  function rightFig(lab) { return fig('<polygon points="40,150 260,150 40,40" fill="rgba(46,194,126,.15)" stroke="#2ec27e" stroke-width="3" stroke-linejoin="round"/><rect x="40" y="136" width="14" height="14" fill="none" stroke="#2ec27e" stroke-width="2"/>' + lab, 300, 175); }

  var part3 = {
    grade: 7, part: 3, edition: L('Geometriya, 2022-yil nashri', 'Геометрия, издание 2022 г.', 'Geometry, 2022 edition'),
    title: L('Geometriya: uchburchaklar, parallellik va yasashlar', 'Геометрия: треугольники, параллельность и построения', 'Geometry: triangles, parallels and constructions'),
    book: L('B. Xaydarov, N. Tashtemirova, I. Asrorov. Geometriya, 7-sinf (Toshkent, 2022)', 'Б. Хайдаров, Н. Таштемирова, И. Асроров. Геометрия, 7 класс (Ташкент, 2022)', 'B. Khaydarov, N. Tashtemirova, I. Asrorov. Geometry, Grade 7 (Tashkent, 2022)'),
    intro: L('«Geometriya» yunoncha «yer o‘lchash» degani. Bu kursda ta’rif, aksioma va teoremalar bilan ishlaymiz: kesma va burchaklar, uchburchaklar tengligi alomatlari, parallel to‘g‘ri chiziqlar, uchburchak tomon va burchaklari, sirkul va chizg‘ich bilan yasashlar.',
      '«Геометрия» по-гречески — «измерение земли». В этом курсе работаем с определениями, аксиомами и теоремами: отрезки и углы, признаки равенства треугольников, параллельные прямые, стороны и углы треугольника, построения циркулем и линейкой.',
      '“Geometry” is Greek for “measuring the earth”. This course works with definitions, axioms and theorems: segments and angles, congruence tests, parallel lines, sides and angles of triangles, and compass-and-ruler constructions.'),
    sections: [
      { id: 's1', title: L('Geometriyaning boshlang‘ich tushunchalari', 'Начальные понятия геометрии', 'First ideas of geometry'), icon: '📏', color: 'blue', topics: [
        { id: 't1', lessons: ch(1), title: L('Eng sodda shakllar. Kesmalarni o‘lchash', 'Простейшие фигуры. Измерение отрезков', 'Simple figures. Measuring segments'),
          keys: [L('nuqta, to‘g‘ri chiziq, nur, kesma', 'точка, прямая, луч, отрезок', 'point, line, ray, segment'), 'AB = AC + CB'],
          scene: [{ obj: 'rod', n: 3, color: 'blue' }],
          explain: L('Ikki nuqta orqali faqat bitta to‘g‘ri chiziq o‘tadi (aksioma). <b>Kesma</b> — to‘g‘ri chiziqning ikki nuqta orasidagi qismi, <b>nur</b> — bir tomonga cheksiz davom etadi. C nuqta AB kesmada yotsa: AB = AC + CB. Kesma <b>o‘rtasi</b> uni teng ikkiga bo‘ladi.',
            'Через две точки проходит только одна прямая (аксиома). <b>Отрезок</b> — часть прямой между двумя точками, <b>луч</b> бесконечен в одну сторону. Если точка C лежит на отрезке AB: AB = AC + CB. <b>Середина</b> делит отрезок пополам.',
            'Exactly one line passes through two points (an axiom). A <b>segment</b> is the part of a line between two points; a <b>ray</b> goes on forever one way. If C lies on AB: AB = AC + CB. The <b>midpoint</b> splits a segment in half.'),
          rule: 'AB = AC + CB',
          acts: [
            { type: 'problem', make: function (R) { var a = R(2, 12), b = R(2, 12); return { story: mk(function (l) { return { uz: 'AB = <b>' + (a + b) + '</b> cm, AC = <b>' + a + '</b> cm. <u>CB</u>?', ru: 'AB = <b>' + (a + b) + '</b> см, AC = <b>' + a + '</b> см. <u>CB</u>?', en: 'AB = <b>' + (a + b) + '</b> cm, AC = <b>' + a + '</b> cm. <u>CB</u>?' }[l] + segFig(a, b); }), expr: [a + b, '−', a, '=', b], ans: b, unit: CM }; } },
            { type: 'drill', n: 6, make: function (R) { var a = R(2, 20); return R(0, 1) ? { q: mk(function (l) { return { uz: 'AB = ', ru: 'AB = ', en: 'AB = ' }[l] + 2 * a + '; ' + { uz: 'M — o‘rtasi; AM', ru: 'M — середина; AM', en: 'M is the midpoint; AM' }[l]; }), a: a } : { q: mk(function (l) { return 'AM = ' + a + '; ' + { uz: 'M — AB o‘rtasi; AB', ru: 'M — середина AB; AB', en: 'M is the midpoint of AB; AB' }[l]; }), a: 2 * a }; } }
          ],
          quiz: [{ q: 'AB = 10, AC = 4. CB = ?', o: ['6', '14', '4'], a: 0 }, { q: L('Ikki nuqta orqali nechta to‘g‘ri chiziq o‘tadi?', 'Сколько прямых проходит через две точки?', 'How many lines pass through two points?'), o: ['1', '2', L('cheksiz', 'бесконечно', 'infinitely many')], a: 0 }] },

        { id: 't2', lessons: ch(1), title: L('Burchak va uning turlari. Qo‘shni va vertikal burchaklar', 'Угол и его виды. Смежные и вертикальные углы', 'Angles. Adjacent and vertical angles'),
          keys: [L('o‘tkir &lt; 90° &lt; o‘tmas', 'острый &lt; 90° &lt; тупой', 'acute &lt; 90° &lt; obtuse'), L('qo‘shni: 180°', 'смежные: 180°', 'adjacent: 180°'), L('vertikal: teng', 'вертикальные: равны', 'vertical: equal')],
          scene: [{ obj: 'rod', n: 2, color: 'orange' }],
          explain: L('Burchak turlari: <b>o‘tkir</b> (&lt; 90°), <b>to‘g‘ri</b> (90°), <b>o‘tmas</b> (90°…180°), <b>yoyiq</b> (180°). <b>Qo‘shni</b> burchaklarning bir tomoni umumiy, qolgan tomonlari to‘g‘ri chiziq hosil qiladi — yig‘indisi 180°. <b>Vertikal</b> burchaklar teng (teorema).',
            'Виды углов: <b>острый</b> (&lt; 90°), <b>прямой</b> (90°), <b>тупой</b> (90°…180°), <b>развёрнутый</b> (180°). У <b>смежных</b> углов одна сторона общая, а две другие образуют прямую — сумма 180°. <b>Вертикальные</b> углы равны (теорема).',
            'Angle types: <b>acute</b> (&lt; 90°), <b>right</b> (90°), <b>obtuse</b> (90°–180°), <b>straight</b> (180°). <b>Adjacent</b> angles share a side and their other sides form a line — they add to 180°. <b>Vertical</b> angles are equal (a theorem).'),
          rule: L('qo‘shni: α + β = 180° · vertikal: α = β', 'смежные: α + β = 180° · вертикальные: α = β', 'adjacent: α + β = 180° · vertical: α = β'),
          acts: [
            { type: 'choose', title: L('Burchak turi', 'Вид угла', 'Angle type'), icon: '📐', make: function (R) { var k = R(0, 3), v = [R(10, 85), 90, R(95, 175), 180][k]; return choice('<span class="kd-big">' + v + '°</span>', [L('o‘tkir', 'острый', 'acute'), L('to‘g‘ri', 'прямой', 'right'), L('o‘tmas', 'тупой', 'obtuse'), L('yoyiq', 'развёрнутый', 'straight')], k); } },
            { type: 'problem', title: L('Qo‘shni burchaklar', 'Смежные углы', 'Adjacent angles'), make: function (R) { var d = R(1, 7) * 10, x = (180 - d) / 2; return { story: L('Qo‘shni burchaklardan biri ikkinchisidan <b>' + d + '°</b> katta. <u>Kichigi</u>? (x + x + ' + d + ' = 180)', 'Один из смежных углов на <b>' + d + '°</b> больше другого. <u>Меньший</u>? (x + x + ' + d + ' = 180)', 'One adjacent angle is <b>' + d + '°</b> bigger than the other. <u>The smaller</u>? (x + x + ' + d + ' = 180)'), expr: [180, '−', d, ':', 2, '=', x], ans: x, unit: DEG }; } }
          ],
          quiz: [{ q: L('Qo‘shni burchaklardan biri 70°. Ikkinchisi?', 'Один из смежных углов 70°. Другой?', 'One adjacent angle is 70°. The other?'), o: ['110°', '70°', '20°'], a: 0 }, { q: L('120° qanday burchak?', 'Какой угол 120°?', 'What kind of angle is 120°?'), o: [L('o‘tmas', 'тупой', 'obtuse'), L('o‘tkir', 'острый', 'acute'), L('yoyiq', 'развёрнутый', 'straight')], a: 0 }] },

        { id: 't3', lessons: ch(1), title: L('Perpendikulyar to‘g‘ri chiziqlar', 'Перпендикулярные прямые', 'Perpendicular lines'),
          keys: ['a ⊥ b', L('to‘rtta to‘g‘ri burchak', 'четыре прямых угла', 'four right angles'), L('nuqtadan masofa', 'расстояние от точки', 'distance from a point')],
          scene: [{ obj: 'rod', n: 2, color: 'green' }],
          explain: L('To‘g‘ri burchak ostida kesishgan to‘g‘ri chiziqlar — <b>perpendikulyar</b>: a ⊥ b. Bunda to‘rtta to‘g‘ri burchak hosil bo‘ladi. Nuqtadan to‘g‘ri chiziqqa faqat bitta perpendikulyar tushirish mumkin; uning uzunligi — nuqtadan to‘g‘ri chiziqqacha <b>masofa</b>.',
            'Прямые, пересекающиеся под прямым углом, — <b>перпендикулярные</b>: a ⊥ b. При этом образуются четыре прямых угла. Из точки на прямую можно опустить только один перпендикуляр; его длина — <b>расстояние</b> от точки до прямой.',
            'Lines meeting at a right angle are <b>perpendicular</b>: a ⊥ b, making four right angles. From a point only one perpendicular can be dropped to a line; its length is the <b>distance</b> from the point to the line.'),
          rule: 'a ⊥ b → 90°',
          acts: [
            { type: 'choose', icon: '⊥', make: function () { return pick([
              choice(L('a ⊥ b. Ular hosil qilgan burchaklardan biri necha gradus?', 'a ⊥ b. Чему равен один из углов?', 'a ⊥ b. What is one of the angles?'), ['90°', '180°', '45°'], 0),
              choice(L('Nuqtadan to‘g‘ri chiziqqa nechta perpendikulyar tushirish mumkin?', 'Сколько перпендикуляров можно опустить из точки на прямую?', 'How many perpendiculars from a point to a line?'), ['1', '2', L('cheksiz', 'бесконечно', 'infinitely many')], 0),
              choice(L('Nuqtadan to‘g‘ri chiziqqacha eng qisqa yo‘l...', 'Кратчайший путь от точки до прямой —', 'The shortest path from a point to a line is the...'), [L('perpendikulyar', 'перпендикуляр', 'perpendicular'), L('og‘ma', 'наклонная', 'slanted line'), L('nur', 'луч', 'ray')], 0)]); } },
            { type: 'drill', n: 5, make: function (R) { var a = R(10, 80); return { q: mk(function (l) { return 'OC ⊥ AB, ∠AOD = ' + a + '° (' + { uz: 'D — ∠AOC ichida', ru: 'D внутри ∠AOC', en: 'D inside ∠AOC' }[l] + ');  ∠DOC'; }), a: 90 - a }; } }
          ],
          quiz: [{ q: L('Perpendikulyar to‘g‘ri chiziqlar burchagi?', 'Угол между перпендикулярными прямыми?', 'Angle between perpendicular lines?'), o: ['90°', '180°', '0°'], a: 0 }, { q: L('a ⊥ b va b ⊥ c bo‘lsa, a va c...', 'Если a ⊥ b и b ⊥ c, то a и c...', 'If a ⊥ b and b ⊥ c, then a and c are...'), o: [L('parallel', 'параллельны', 'parallel'), L('perpendikulyar', 'перпендикулярны', 'perpendicular'), L('kesishadi', 'пересекаются', 'crossing')], a: 0 }] }
      ] },

      { id: 's2', title: L('Uchburchaklar', 'Треугольники', 'Triangles'), icon: '🔺', color: 'orange', topics: [
        { id: 't4', lessons: ch(2), title: L('Uchburchak, uning turlari va elementlari', 'Треугольник, виды и элементы', 'Triangles: types and elements'),
          keys: [L('mediana', 'медиана', 'median'), L('bissektrisa', 'биссектриса', 'angle bisector'), L('balandlik', 'высота', 'altitude')],
          scene: [{ obj: 'pyramid', n: 1, color: 'orange' }],
          explain: L('Uchburchakning muhim kesmalari: <b>mediana</b> — uchni qarshi tomon o‘rtasi bilan tutashtiradi; <b>bissektrisa</b> — burchakni teng ikkiga bo‘ladi; <b>balandlik</b> — uchdan qarshi tomonga tushirilgan perpendikulyar. Har bir uchburchakda uchtadan mediana, bissektrisa va balandlik bor.',
            'Важные отрезки треугольника: <b>медиана</b> соединяет вершину с серединой противоположной стороны; <b>биссектриса</b> делит угол пополам; <b>высота</b> — перпендикуляр из вершины на противоположную сторону. В каждом треугольнике по три медианы, биссектрисы и высоты.',
            'Key segments in a triangle: a <b>median</b> joins a vertex to the midpoint of the opposite side; an <b>angle bisector</b> halves an angle; an <b>altitude</b> is the perpendicular from a vertex to the opposite side. Every triangle has three of each.'),
          rule: L('mediana → o‘rta · bissektrisa → burchak yarmi · balandlik → 90°', 'медиана → середина · биссектриса → половина угла · высота → 90°', 'median → midpoint · bisector → half angle · altitude → 90°'),
          acts: [
            { type: 'choose', title: L('Kesmani aniqlang', 'Определите отрезок', 'Name the segment'), icon: '🔺', make: function () { return pick([
              choice(L('Uchni qarshi tomon o‘rtasi bilan tutashtiruvchi kesma...', 'Отрезок из вершины к середине противоположной стороны —', 'A segment from a vertex to the midpoint of the opposite side is a...'), [L('mediana', 'медиана', 'median'), L('bissektrisa', 'биссектриса', 'bisector'), L('balandlik', 'высота', 'altitude')], 0),
              choice(L('Burchakni teng ikkiga bo‘luvchi kesma...', 'Отрезок, делящий угол пополам, —', 'A segment halving an angle is a...'), [L('bissektrisa', 'биссектриса', 'bisector'), L('mediana', 'медиана', 'median'), L('balandlik', 'высота', 'altitude')], 0),
              choice(L('Uchdan qarshi tomonga tushirilgan perpendikulyar...', 'Перпендикуляр из вершины на противоположную сторону —', 'A perpendicular from a vertex to the opposite side is an...'), [L('balandlik', 'высота', 'altitude'), L('mediana', 'медиана', 'median'), L('bissektrisa', 'биссектриса', 'bisector')], 0)]); } },
            { type: 'drill', n: 6, make: function (R) { var a = R(3, 20), b = R(10, 80) * 2; return R(0, 1) ? { q: mk(function (l) { return 'BC = ' + 2 * a + ', AM — ' + { uz: 'mediana', ru: 'медиана', en: 'median' }[l] + ';  BM'; }), a: a } : { q: mk(function (l) { return '∠A = ' + b + '°, AL — ' + { uz: 'bissektrisa', ru: 'биссектриса', en: 'bisector' }[l] + ';  ∠BAL'; }), a: b / 2 }; } }
          ],
          quiz: [{ q: L('Uchburchakda nechta mediana?', 'Сколько медиан у треугольника?', 'How many medians does a triangle have?'), o: ['3', '1', '6'], a: 0 }, { q: L('∠A = 80°, AL bissektrisa. ∠BAL?', '∠A = 80°, AL — биссектриса. ∠BAL?', '∠A = 80°, AL bisects it. ∠BAL?'), o: ['40°', '80°', '160°'], a: 0 }] },

        { id: 't5', lessons: ch(2), title: L('Uchburchaklar tengligi alomatlari', 'Признаки равенства треугольников', 'Congruence tests'),
          keys: [L('TBT (ikki tomon va burchak)', 'СУС (две стороны и угол)', 'SAS'), L('BTB (tomon va ikki burchak)', 'УСУ (сторона и два угла)', 'ASA'), L('TTT (uch tomon)', 'ССС (три стороны)', 'SSS')],
          scene: [{ obj: 'pyramid', n: 2, color: 'violet' }],
          explain: L('Ikki uchburchak teng, agar: 1) ikki tomoni va ular orasidagi burchagi mos ravishda teng bo‘lsa (<b>TBT</b>); 2) bir tomoni va unga yopishgan ikki burchagi teng bo‘lsa (<b>BTB</b>); 3) uchala tomoni teng bo‘lsa (<b>TTT</b>). Teng uchburchaklarning mos elementlari teng.',
            'Два треугольника равны, если: 1) две стороны и угол между ними соответственно равны (<b>СУС</b>); 2) сторона и два прилежащих угла равны (<b>УСУ</b>); 3) три стороны равны (<b>ССС</b>). У равных треугольников соответствующие элементы равны.',
            'Two triangles are congruent if: 1) two sides and the angle between them match (<b>SAS</b>); 2) a side and the two angles on it match (<b>ASA</b>); 3) all three sides match (<b>SSS</b>). Congruent triangles have all matching parts equal.'),
          rule: L('TBT · BTB · TTT', 'СУС · УСУ · ССС', 'SAS · ASA · SSS'),
          acts: [
            { type: 'choose', title: L('Qaysi alomat?', 'Какой признак?', 'Which test?'), icon: '≅', make: function () { var O = [L('TBT (1-alomat)', 'СУС (1-й признак)', 'SAS'), L('BTB (2-alomat)', 'УСУ (2-й признак)', 'ASA'), L('TTT (3-alomat)', 'ССС (3-й признак)', 'SSS')]; return pick([
              choice(L('AB = A₁B₁, AC = A₁C₁, ∠A = ∠A₁', 'AB = A₁B₁, AC = A₁C₁, ∠A = ∠A₁', 'AB = A₁B₁, AC = A₁C₁, ∠A = ∠A₁'), O, 0),
              choice(L('AB = A₁B₁, ∠A = ∠A₁, ∠B = ∠B₁', 'AB = A₁B₁, ∠A = ∠A₁, ∠B = ∠B₁', 'AB = A₁B₁, ∠A = ∠A₁, ∠B = ∠B₁'), O, 1),
              choice(L('AB = A₁B₁, BC = B₁C₁, AC = A₁C₁', 'AB = A₁B₁, BC = B₁C₁, AC = A₁C₁', 'AB = A₁B₁, BC = B₁C₁, AC = A₁C₁'), O, 2)]); } },
            { type: 'drill', title: L('Mos elementlar', 'Соответственные элементы', 'Matching parts'), n: 5, make: function (R) { var a = R(3, 15), b = R(20, 80); return R(0, 1) ? { q: mk(function (l) { return '△ABC = △MNK, AB = ' + a + ';  MN'; }), a: a } : { q: '△ABC = △MNK, ∠C = ' + b + '°;  ∠K', a: b }; } }
          ],
          quiz: [{ q: L('Uch tomoni teng uchburchaklar — qaysi alomat?', 'Три стороны равны — какой признак?', 'Three equal sides — which test?'), o: [L('TTT', 'ССС', 'SSS'), L('TBT', 'СУС', 'SAS'), L('BTB', 'УСУ', 'ASA')], a: 0 }, { q: L('△ABC = △MNK, BC = 7. NK = ?', '△ABC = △MNK, BC = 7. NK = ?', '△ABC ≅ △MNK, BC = 7. NK = ?'), o: ['7', '14', L('aniqlab bo‘lmaydi', 'нельзя определить', 'cannot tell')], a: 0 }] },

        { id: 't6', lessons: ch(2), title: L('Teng yonli uchburchakning xossalari', 'Свойства равнобедренного треугольника', 'Isosceles triangles'),
          keys: [L('asosdagi burchaklar teng', 'углы при основании равны', 'base angles equal'), L('mediana = bissektrisa = balandlik', 'медиана = биссектриса = высота', 'median = bisector = altitude')],
          scene: [{ obj: 'pyramid', n: 1, color: 'pink' }],
          explain: L('Teng yonli uchburchakda ikki <b>yon tomon</b> teng, uchinchisi — <b>asos</b>. Asosdagi burchaklar teng. Asosga tushirilgan mediana bir vaqtda bissektrisa va balandlik ham bo‘ladi.',
            'В равнобедренном треугольнике две <b>боковые стороны</b> равны, третья — <b>основание</b>. Углы при основании равны. Медиана к основанию одновременно биссектриса и высота.',
            'An isosceles triangle has two equal <b>legs</b>; the third side is the <b>base</b>. The base angles are equal. The median to the base is also the angle bisector and the altitude.'),
          rule: L('∠A = ∠C (asosda)', '∠A = ∠C (при основании)', '∠A = ∠C (base angles)'),
          acts: [
            { type: 'problem', make: function (R) { var top = R(2, 14) * 10; return { story: mk(function (l) { return { uz: 'Teng yonli uchburchak uchidagi burchak <b>' + top + '°</b>. <u>Asosdagi burchak</u>?', ru: 'Угол при вершине равнобедренного треугольника <b>' + top + '°</b>. <u>Угол при основании</u>?', en: 'The top angle of an isosceles triangle is <b>' + top + '°</b>. <u>A base angle</u>?' }[l] + triFig('?', '?', top + '°'); }), expr: [180, '−', top, ':', 2, '=', (180 - top) / 2], ans: (180 - top) / 2, unit: DEG }; } },
            { type: 'problem', title: L('Perimetr', 'Периметр', 'Perimeter'), make: function (R) { var s = R(5, 20), b = R(2, 2 * s - 1); return { story: L('Teng yonli uchburchakning yon tomoni <b>' + s + '</b> cm, asosi <b>' + b + '</b> cm. <u>Perimetri</u>?', 'Боковая сторона равнобедренного треугольника <b>' + s + '</b> см, основание <b>' + b + '</b> см. <u>Периметр</u>?', 'An isosceles triangle has legs of <b>' + s + '</b> cm and a base of <b>' + b + '</b> cm. <u>Perimeter</u>?'), expr: [s, '·', 2, '+', b, '=', 2 * s + b], ans: 2 * s + b, unit: CM }; } }
          ],
          quiz: [{ q: L('Uchidagi burchak 40°. Asosdagi?', 'При вершине 40°. При основании?', 'Top angle 40°. Base angle?'), o: ['70°', '140°', '40°'], a: 0 }, { q: L('Asosga tushirilgan mediana yana...', 'Медиана к основанию также...', 'The median to the base is also...'), o: [L('bissektrisa va balandlik', 'биссектриса и высота', 'bisector and altitude'), L('faqat balandlik', 'только высота', 'only an altitude'), L('hech narsa', 'ничего', 'nothing')], a: 0 }] }
      ] },

      { id: 's3', title: L('Parallel to‘g‘ri chiziqlar', 'Параллельные прямые', 'Parallel lines'), icon: '∥', color: 'green', topics: [
        { id: 't7', lessons: ch(3), title: L('Parallel to‘g‘ri chiziqlar va parallellik alomatlari', 'Параллельные прямые и признаки параллельности', 'Parallel lines and tests for parallelism'),
          keys: ['a ∥ b', L('parallellik aksiomasi', 'аксиома параллельных', 'parallel postulate')],
          scene: [{ obj: 'rod', n: 4, color: 'green' }],
          explain: L('Bir tekislikda yotib, kesishmaydigan to‘g‘ri chiziqlar — <b>parallel</b>. Aksioma: to‘g‘ri chiziqda yotmagan nuqtadan unga parallel faqat bitta to‘g‘ri chiziq o‘tadi. Alomatlar: kesuvchi bilan hosil bo‘lgan ichki almashinuvchi yoki mos burchaklar teng bo‘lsa, yoki ichki bir tomonli burchaklar yig‘indisi 180° bo‘lsa — a ∥ b.',
            'Прямые в одной плоскости, которые не пересекаются, — <b>параллельные</b>. Аксиома: через точку вне прямой проходит только одна параллельная ей прямая. Признаки: если накрест лежащие или соответственные углы равны, либо сумма односторонних 180°, то a ∥ b.',
            'Lines in a plane that never meet are <b>parallel</b>. Axiom: through a point off a line exactly one parallel line passes. Tests: if alternate or corresponding angles are equal, or co-interior angles add to 180°, then a ∥ b.'),
          rule: L('almashinuvchi = → a ∥ b', 'накрест лежащие = → a ∥ b', 'alternate equal → a ∥ b'),
          acts: [
            { type: 'choose', title: L('Parallelmi?', 'Параллельны?', 'Parallel?'), icon: '∥', make: function (R) { var a = R(4, 13) * 10, k = R(0, 2), ok = R(0, 1), b = ok ? (k === 2 ? 180 - a : a) : (k === 2 ? 180 - a + 10 : a + 10), nm = [L('mos burchaklar', 'соответственные углы', 'corresponding angles'), L('ichki almashinuvchi burchaklar', 'накрест лежащие углы', 'alternate angles'), L('ichki bir tomonli burchaklar', 'односторонние углы', 'co-interior angles')][k];
              return choice(mk(function (l) { return nm[l] + ': ' + a + '° ' + { uz: 'va', ru: 'и', en: 'and' }[l] + ' ' + b + '°. a ∥ b?'; }), [L('ha', 'да', 'yes'), L('yo‘q', 'нет', 'no')], ok ? 0 : 1); } },
            { type: 'drill', n: 5, make: function (R) { var a = R(3, 15) * 10; return { q: mk(function (l) { return { uz: 'a ∥ b uchun ichki bir tomonli burchak: ', ru: 'Для a ∥ b односторонний угол: ', en: 'For a ∥ b, co-interior angle: ' }[l] + a + '° + ? = 180°'; }), a: 180 - a }; } }
          ],
          quiz: [{ q: L('Nuqtadan to‘g‘ri chiziqqa nechta parallel o‘tadi?', 'Сколько параллельных через точку вне прямой?', 'How many parallels through a point off a line?'), o: ['1', '2', '0'], a: 0 }, { q: L('Ichki bir tomonli: 70° va 110°. a ∥ b?', 'Односторонние: 70° и 110°. a ∥ b?', 'Co-interior: 70° and 110°. a ∥ b?'), o: [L('ha', 'да', 'yes'), L('yo‘q', 'нет', 'no')], a: 0 }] },

        { id: 't8', lessons: ch(3), title: L('Parallel to‘g‘ri chiziqlar va kesuvchi hosil qilgan burchaklar', 'Углы при параллельных прямых и секущей', 'Angles made by parallels and a transversal'),
          keys: [L('8 ta burchak', '8 углов', '8 angles'), L('faqat ikki xil qiymat', 'только два значения', 'only two values')],
          scene: [{ obj: 'rod', n: 3, color: 'cyan' }],
          explain: L('Parallel to‘g‘ri chiziqlarni kesuvchi kesib o‘tganda 8 ta burchak hosil bo‘ladi, ammo ular faqat ikki xil: α va 180° − α. Mos va almashinuvchi burchaklar teng, bir tomonlilar yig‘indisi 180°.',
            'Секущая, пересекающая две параллельные прямые, образует 8 углов, но у них только два значения: α и 180° − α. Соответственные и накрест лежащие равны, сумма односторонних 180°.',
            'A transversal crossing two parallel lines makes 8 angles, but they take only two values: α and 180° − α. Corresponding and alternate angles are equal; co-interior ones add to 180°.'),
          rule: L('α yoki 180° − α', 'α или 180° − α', 'α or 180° − α'),
          acts: [
            { type: 'problem', make: function (R) { var k = R(2, 3); return { story: L('a ∥ b. Ichki bir tomonli burchaklar <b>x</b> va <b>' + k + 'x</b>. <u>x</u>?', 'a ∥ b. Односторонние углы <b>x</b> и <b>' + k + 'x</b>. <u>x</u>?', 'a ∥ b. Co-interior angles are <b>x</b> and <b>' + k + 'x</b>. <u>x</u>?'), expr: [180, ':', k + 1, '=', 180 / (k + 1)], ans: 180 / (k + 1), unit: DEG }; } },
            { type: 'drill', n: 6, make: function (R) { var a = R(3, 8) * 10 + pick([0, 5]), k = R(0, 2), nm = [{ uz: 'mos', ru: 'соответственный', en: 'corresponding' }, { uz: 'almashinuvchi', ru: 'накрест лежащий', en: 'alternate' }, { uz: 'bir tomonli', ru: 'односторонний', en: 'co-interior' }][k]; return { q: mk(function (l) { return 'a ∥ b: ' + a + '°; ' + nm[l]; }), a: k === 2 ? 180 - a : a }; } }
          ],
          quiz: [{ q: L('a ∥ b, almashinuvchi burchak 50°. Ikkinchisi?', 'a ∥ b, накрест лежащий 50°. Второй?', 'a ∥ b, alternate angle 50°. The other?'), o: ['50°', '130°', '40°'], a: 0 }, { q: L('Bir tomonlilar x va 2x. x?', 'Односторонние x и 2x. x?', 'Co-interior x and 2x. x?'), o: ['60°', '90°', '45°'], a: 0 }] }
      ] },

      { id: 's4', title: L('Uchburchak tomonlari va burchaklari', 'Стороны и углы треугольника', 'Sides and angles of triangles'), icon: '📐', color: 'pink', topics: [
        { id: 't9', lessons: ch(4), title: L('Uchburchak ichki burchaklari yig‘indisi. Tashqi burchak', 'Сумма углов треугольника. Внешний угол', 'Angle sum. Exterior angles'),
          keys: ['∠A + ∠B + ∠C = 180°', L('tashqi = ∠A + ∠B', 'внешний = ∠A + ∠B', 'exterior = ∠A + ∠B')],
          scene: [{ obj: 'pyramid', n: 1, color: 'cyan' }],
          explain: L('Teorema: uchburchak ichki burchaklari yig‘indisi 180°. Isboti: uchidan qarshi tomonga parallel to‘g‘ri chiziq o‘tkazamiz — almashinuvchi burchaklar yoyiq burchakni to‘ldiradi. Natija: tashqi burchak unga qo‘shni bo‘lmagan ikki ichki burchak yig‘indisiga teng.',
            'Теорема: сумма углов треугольника 180°. Доказательство: через вершину проводим прямую, параллельную противоположной стороне, — накрест лежащие углы составляют развёрнутый угол. Следствие: внешний угол равен сумме двух внутренних, не смежных с ним.',
            'Theorem: a triangle’s angles add to 180°. Proof: draw a line through a vertex parallel to the opposite side — the alternate angles fill a straight angle. Corollary: an exterior angle equals the sum of the two opposite interior angles.'),
          rule: '∠A + ∠B + ∠C = 180°',
          acts: [
            { type: 'problem', make: function (R) { var A = R(3, 8) * 10, B = R(3, 8) * 10; return { story: mk(function (l) { return { uz: '<u>?</u> burchakni toping.', ru: 'Найдите угол <u>?</u>.', en: 'Find the angle <u>?</u>.' }[l] + triFig(A + '°', B + '°', '?'); }), expr: [180, '−', A, '−', B, '=', 180 - A - B], ans: 180 - A - B, unit: DEG }; } },
            { type: 'drill', n: 6, make: function (R) { var A = R(3, 7) * 10, B = R(3, 7) * 10; return R(0, 1) ? { q: mk(function (l) { return '∠A = ' + A + '°, ∠B = ' + B + '°; ' + { uz: 'C dagi tashqi burchak', ru: 'внешний угол при C', en: 'exterior angle at C' }[l]; }), a: A + B } : { q: mk(function (l) { return { uz: 'tashqi burchak ', ru: 'внешний угол ', en: 'exterior angle ' }[l] + (A + B) + '°, ∠A = ' + A + '°;  ∠B'; }), a: B }; } }
          ],
          quiz: [{ q: '∠A = 50°, ∠B = 60°. ∠C = ?', o: ['70°', '110°', '80°'], a: 0 }, { q: L('Tashqi burchak 120°, bitta ichkisi 50°. Ikkinchisi?', 'Внешний 120°, один внутренний 50°. Другой?', 'Exterior 120°, one interior 50°. The other?'), o: ['70°', '60°', '10°'], a: 0 }] },

        { id: 't10', lessons: ch(4), title: L('To‘g‘ri burchakli uchburchaklar. Bissektrisa xossasi', 'Прямоугольные треугольники. Свойство биссектрисы', 'Right triangles. The bisector property'),
          keys: [L('katet, gipotenuza', 'катет, гипотенуза', 'legs, hypotenuse'), L('30° qarshisidagi katet = gipotenuza / 2', 'катет против 30° = гипотенуза / 2', 'leg opposite 30° = hypotenuse / 2')],
          scene: [{ obj: 'pyramid', n: 1, color: 'green' }],
          explain: L('To‘g‘ri burchakli uchburchakda o‘tkir burchaklar yig‘indisi 90°. Muhim xossa: 30° li burchak qarshisidagi katet gipotenuzaning yarmiga teng. Burchak bissektrisasidagi har bir nuqta burchak tomonlaridan teng uzoqlikda yotadi.',
            'В прямоугольном треугольнике сумма острых углов 90°. Важное свойство: катет против угла 30° равен половине гипотенузы. Каждая точка биссектрисы угла равноудалена от его сторон.',
            'In a right triangle the two acute angles add to 90°. Key fact: the leg opposite a 30° angle is half the hypotenuse. Every point on an angle bisector is the same distance from both sides of the angle.'),
          rule: L('∠A + ∠B = 90° · a = c : 2 (30°)', '∠A + ∠B = 90° · a = c : 2 (30°)', '∠A + ∠B = 90° · a = c : 2 (30°)'),
          acts: [
            { type: 'problem', title: L('30° li burchak', 'Угол 30°', 'The 30° angle'), make: function (R) { var c = R(2, 15) * 2; return { story: mk(function (l) { return { uz: 'To‘g‘ri burchakli uchburchakda gipotenuza <b>' + c + '</b> cm, bir burchagi <b>30°</b>. Shu burchak <u>qarshisidagi katet</u>?', ru: 'В прямоугольном треугольнике гипотенуза <b>' + c + '</b> см, один угол <b>30°</b>. <u>Катет против него</u>?', en: 'A right triangle has hypotenuse <b>' + c + '</b> cm and a <b>30°</b> angle. <u>The leg opposite it</u>?' }[l] + rightFig('<text x="215" y="140" ' + TX + '>30°</text><text x="165" y="85" ' + TX + '>' + c + '</text><text x="22" y="100" ' + TX + Q + '>?</text>'); }), expr: [c, ':', 2, '=', c / 2], ans: c / 2, unit: CM }; } },
            { type: 'drill', n: 6, make: function (R) { var a = R(10, 80); return { q: mk(function (l) { return { uz: 'To‘g‘ri burchakli △: ', ru: 'Прямоугольный △: ', en: 'Right △: ' }[l] + '∠A = ' + a + '°;  ∠B'; }), a: 90 - a }; } }
          ],
          quiz: [{ q: L('Gipotenuza 12, burchak 30°. Qarshi katet?', 'Гипотенуза 12, угол 30°. Катет против?', 'Hypotenuse 12, angle 30°. Opposite leg?'), o: ['6', '12', '24'], a: 0 }, { q: L('To‘g‘ri burchakli △: ∠A = 35°. ∠B?', 'Прямоугольный △: ∠A = 35°. ∠B?', 'Right △: ∠A = 35°. ∠B?'), o: ['55°', '145°', '35°'], a: 0 }] },

        { id: 't11', lessons: ch(4), title: L('Tomonlar va burchaklar munosabati. Uchburchak tengsizligi', 'Соотношения сторон и углов. Неравенство треугольника', 'Sides vs angles. Triangle inequality'),
          keys: ['a &lt; b + c', L('katta tomon qarshisida katta burchak', 'против большей стороны — больший угол', 'bigger side ↔ bigger angle')],
          scene: [{ obj: 'rod', n: 3, color: 'violet' }],
          explain: L('Uchburchakda katta tomon qarshisida katta burchak yotadi va aksincha. <b>Uchburchak tengsizligi</b>: har bir tomon qolgan ikkitasining yig‘indisidan kichik. 3, 4, 8 cm kesmalardan uchburchak yasab bo‘lmaydi, chunki 8 &gt; 3 + 4.',
            'В треугольнике против большей стороны лежит больший угол, и наоборот. <b>Неравенство треугольника</b>: каждая сторона меньше суммы двух других. Из отрезков 3, 4, 8 см треугольник не построить: 8 &gt; 3 + 4.',
            'In a triangle the bigger side faces the bigger angle and vice versa. <b>Triangle inequality</b>: each side is less than the sum of the other two. You cannot make a triangle from 3, 4 and 8 cm because 8 &gt; 3 + 4.'),
          rule: 'a &lt; b + c',
          acts: [
            { type: 'choose', title: L('Uchburchak bo‘ladimi?', 'Получится треугольник?', 'Is it a triangle?'), icon: '🔺', make: function (R) { var a = R(2, 10), b = R(2, 10), ok = R(0, 1), c = ok ? R(Math.abs(a - b) + 1, a + b - 1) : a + b + R(0, 4); return choice(mk(function (l) { return a + ', ' + b + ', ' + c + ' cm — ' + { uz: 'uchburchak yasash mumkinmi?', ru: 'можно построить треугольник?', en: 'can these make a triangle?' }[l]; }), [L('ha', 'да', 'yes'), L('yo‘q', 'нет', 'no')], ok ? 0 : 1); } },
            { type: 'choose', title: L('Eng katta burchak', 'Наибольший угол', 'Largest angle'), icon: '📐', make: function (R) { var s; do { s = H.distinct(R, 3, 4, 12).sort(function (x, y) { return x - y; }); } while (s[2] >= s[0] + s[1]); return choice('AB = ' + s[0] + ', BC = ' + s[1] + ', AC = ' + s[2] + '. ' + '∠?', ['∠B', '∠C', '∠A'], 0); } }
          ],
          quiz: [{ q: L('3, 4, 8 — uchburchakmi?', '3, 4, 8 — треугольник?', '3, 4, 8 — a triangle?'), o: [L('yo‘q', 'нет', 'no'), L('ha', 'да', 'yes')], a: 0 }, { q: L('Uchburchakning 2 tomoni 5 va 8. Uchinchisi bo‘lishi mumkin:', 'Две стороны 5 и 8. Третья может быть:', 'Two sides are 5 and 8. The third could be:'), o: ['10', '13', '2'], a: 0 }] }
      ] },

      { id: 's5', title: L('Yasashga doir masalalar', 'Задачи на построение', 'Constructions'), icon: '🧭', color: 'yellow', topics: [
        { id: 't12', lessons: ch(5), title: L('Sirkul va chizg‘ich yordamida yasash', 'Построения циркулем и линейкой', 'Compass-and-ruler constructions'),
          keys: [L('o‘rta perpendikulyar', 'серединный перпендикуляр', 'perpendicular bisector'), L('burchak bissektrisasi', 'биссектриса угла', 'angle bisector'), L('uchta tomon bo‘yicha', 'по трём сторонам', 'from three sides')],
          scene: [{ obj: 'pencil', n: 2, color: 'yellow' }],
          explain: L('Klassik yasashlar faqat sirkul va chizg‘ich bilan bajariladi: berilgan burchakka teng burchak, burchak bissektrisasi, kesmaning o‘rtasi (o‘rta perpendikulyar), nuqtadan perpendikulyar, uch tomoni bo‘yicha uchburchak. Kesma o‘rtasi: uchlaridan bir xil radius bilan ikki yoy chizib, kesishish nuqtalarini tutashtiramiz.',
            'Классические построения выполняются только циркулем и линейкой: угол, равный данному, биссектриса угла, середина отрезка (серединный перпендикуляр), перпендикуляр из точки, треугольник по трём сторонам. Середина отрезка: из концов чертим дуги одного радиуса и соединяем точки их пересечения.',
            'Classic constructions use only a compass and a straight edge: copying an angle, bisecting an angle, the midpoint of a segment (perpendicular bisector), a perpendicular from a point, a triangle from three sides. Midpoint: draw equal arcs from both ends and join where they cross.'),
          rule: L('sirkul + chizg‘ich', 'циркуль + линейка', 'compass + straight edge'),
          acts: [
            { type: 'order', title: L('Kesma o‘rtasini yasash qadamlari', 'Шаги построения середины отрезка', 'Steps to find a midpoint'), make: function () { return { story: L('Qadamlarni to‘g‘ri tartibda bosing.', 'Нажимайте шаги в правильном порядке.', 'Tap the steps in order.'), items: [L('A uchidan yoy chizish', 'дуга из точки A', 'arc from A'), L('B uchidan shu radiusli yoy', 'дуга того же радиуса из B', 'same arc from B'), L('kesishish nuqtalarini tutashtirish', 'соединить точки пересечения', 'join the crossings'), L('AB bilan kesishgan nuqta — o‘rta', 'точка на AB — середина', 'point on AB is the midpoint')], sep: '<span class="kd-arr">→</span>' }; } },
            { type: 'choose', title: L('Qaysi asbob?', 'Какой инструмент?', 'Which tool?'), icon: '🧭', make: function () { return pick([
              choice(L('Aylana va yoylar nima bilan chiziladi?', 'Чем чертят окружности и дуги?', 'What draws circles and arcs?'), [L('sirkul', 'циркуль', 'compass'), L('chizg‘ich', 'линейка', 'straight edge'), L('transportir', 'транспортир', 'protractor')], 0),
              choice(L('Klassik yasashda qaysi asbobdan foydalanilmaydi?', 'Что НЕ используют в классических построениях?', 'Which tool is NOT used in classic constructions?'), [L('transportir', 'транспортир', 'protractor'), L('sirkul', 'циркуль', 'compass'), L('chizg‘ich', 'линейка', 'straight edge')], 0),
              choice(L('Uch tomoni 3, 4 va 9 cm bo‘lgan uchburchakni yasash mumkinmi?', 'Можно ли построить треугольник со сторонами 3, 4 и 9 см?', 'Can you construct a triangle with sides 3, 4 and 9 cm?'), [L('yo‘q', 'нет', 'no'), L('ha', 'да', 'yes')], 0)]); } }
          ],
          quiz: [{ q: L('Sirkul bilan nima chiziladi?', 'Что чертят циркулем?', 'What does a compass draw?'), o: [L('aylana va yoylar', 'окружности и дуги', 'circles and arcs'), L('to‘g‘ri chiziqlar', 'прямые', 'straight lines'), L('burchaklar', 'углы', 'angles')], a: 0 }, { q: L('Burchak bissektrisasini yasashda birinchi qadam?', 'Первый шаг при построении биссектрисы?', 'First step in bisecting an angle?'), o: [L('uchidan yoy chizish', 'дуга из вершины', 'an arc from the vertex'), L('transportir qo‘yish', 'приложить транспортир', 'use a protractor'), L('tomonni o‘lchash', 'измерить сторону', 'measure a side')], a: 0 }, { q: L('Uch tomoni bo‘yicha uchburchak yasash uchun tomonlar...', 'Чтобы построить треугольник по трём сторонам, стороны должны...', 'To construct a triangle from three sides, the sides must...'), o: [L('uchburchak tengsizligini qanoatlantirsin', 'удовлетворять неравенству треугольника', 'satisfy the triangle inequality'), L('teng bo‘lsin', 'быть равными', 'be equal'), L('juft bo‘lsin', 'быть чётными', 'be even')], a: 0 }, { q: L('Berilganga teng burchak yasash uchun nechta yoy kerak?', 'Сколько дуг нужно, чтобы построить угол, равный данному?', 'How many arcs to copy an angle?'), o: [L('kamida 3', 'не меньше 3', 'at least 3'), '1', '0'], a: 0 }, { q: L('O‘rta perpendikulyar kesmani qanday bo‘ladi?', 'Как серединный перпендикуляр делит отрезок?', 'How does the perpendicular bisector cut a segment?'), o: [L('teng ikkiga va 90° ostida', 'пополам и под 90°', 'in half and at 90°'), L('uchga', 'на три части', 'into three'), L('ixtiyoriy', 'произвольно', 'anywhere')], a: 0 }, { q: L('Chizg‘ich klassik yasashda nima uchun ishlatiladi?', 'Для чего линейка в классических построениях?', 'What is the straight edge for in classic constructions?'), o: [L('faqat to‘g‘ri chiziq o‘tkazish', 'только проводить прямые', 'only drawing straight lines'), L('uzunlik o‘lchash', 'измерять длину', 'measuring length'), L('burchak o‘lchash', 'измерять угол', 'measuring angles')], a: 0 }, { q: L('Kesma o‘rtasini topish uchun nima yasaladi?', 'Что строят, чтобы найти середину отрезка?', 'What do you construct to find a midpoint?'), o: [L('o‘rta perpendikulyar', 'серединный перпендикуляр', 'perpendicular bisector'), L('bissektrisa', 'биссектриса', 'angle bisector'), L('mediana', 'медиана', 'median')], a: 0 }, { q: L('Yasashda qaysi asboblar ishlatiladi?', 'Какие инструменты используют?', 'Which tools are used?'), o: [L('sirkul va chizg‘ich', 'циркуль и линейка', 'compass and straight edge'), L('transportir', 'транспортир', 'protractor'), L('kalkulyator', 'калькулятор', 'calculator')], a: 0 }] }
      ] }
    ]
  };
  C.addPart(part3);
})(this);
