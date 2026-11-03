// Nuvemath — 1-sinf, III qism (manba: I.V. Repyova, «Matematika. 1-sinf. III qism», Toshkent, 2024).
// Mavzular tartibi va nomlari darslikdan olingan; tushuntirishlar, masalalar va rasmlar Nuvemath uchun qayta yozilgan.
(function (root) {
  'use strict';
  var C = root.NMCurriculum || (typeof require !== 'undefined' ? null : null);

  // ---------- Masala yasovchilar (har chaqiruvda yangi sonlar) ----------
  // Butunni topish: a + b = ?
  function whole(o) {
    return function (R) {
      var a = R(o.a[0], o.a[1]), b = R(o.b[0], o.b[1]);
      return { story: o.text(a, b), pics: o.emoji ? [[o.emoji[0], a, o.labels[0]], [o.emoji[1] || o.emoji[0], b, o.labels[1]]] : null, picsOp: '+',
        cond: [[o.cond ? o.cond[0] : 'I qism', a + ' ' + o.u], [o.cond ? o.cond[1] : 'II qism', b + ' ' + o.u], ['Jami', '? ' + o.u]],
        scheme: { kind: 'whole', parts: [a, b], show: [a, b], top: '? ' + o.u, labels: o.labels },
        expr: [a, '+', b, '=', a + b], ans: a + b, unit: o.u };
    };
  }
  // Qismni topish: c − a = ?
  function part(o) {
    return function (R) {
      var c = R(o.c[0], o.c[1]), a = R(o.a[0], Math.min(o.a[1], c - 1));
      return { story: o.text(c, a), pics: o.emoji ? [[o.emoji, c, 'jami']] : null,
        cond: [['Jami', c + ' ' + o.u], [o.cond ? o.cond[0] : 'I qism', a + ' ' + o.u], [o.cond ? o.cond[1] : 'II qism', '? ' + o.u]],
        scheme: { kind: 'part', parts: [a, c - a], show: [a, '?'], top: c + ' ' + o.u, labels: o.labels },
        expr: [c, '−', a, '=', c - a], ans: c - a, unit: o.u };
    };
  }
  // Orttirish: a dan d ta ko'p
  function more(o) {
    return function (R) {
      var a = R(o.a[0], o.a[1]), d = R(o.d[0], o.d[1]);
      return { story: o.text(a, d), cond: [[o.who[0], a + ' ' + o.u], [o.who[1], '?, ' + d + ' ' + o.u + ' ko‘p']],
        scheme: { kind: 'more', a: a, b: a + d, show: [a, '? ' + o.u, '+' + d], labels: o.who },
        expr: [a, '+', d, '=', a + d], ans: a + d, unit: o.u };
    };
  }
  // Kamaytirish: a dan d ta kam
  function less(o) {
    return function (R) {
      var a = R(o.a[0], o.a[1]), d = R(o.d[0], Math.min(o.d[1], a - 1));
      return { story: o.text(a, d), cond: [[o.who[0], a + ' ' + o.u], [o.who[1], '?, ' + d + ' ' + o.u + ' kam']],
        scheme: { kind: 'less', a: a, b: a - d, show: [a, '? ' + o.u, '−' + d], labels: o.who },
        expr: [a, '−', d, '=', a - d], ans: a - d, unit: o.u };
    };
  }
  // Taqqoslash: necha ta ko'p / kam
  function diff(o) {
    return function (R) {
      var a = R(o.a[0], o.a[1]), b; do { b = R(o.b[0], o.b[1]); } while (b === a);
      var hi = Math.max(a, b), lo = Math.min(a, b);
      return { story: o.text(a, b), cond: [[o.who[0], a + ' ' + o.u], [o.who[1], b + ' ' + o.u]],
        scheme: { kind: 'diff', a: a, b: b, show: [a, b, '?'], labels: o.who },
        expr: [hi, '−', lo, '=', hi - lo], ans: hi - lo, unit: o.u };
    };
  }
  function sumDrill(max) { return function (R) { var a = R(1, max - 1), b = R(1, max - a); return Math.random() < 0.5 ? { q: a + ' + ' + b, a: a + b } : { q: (a + b) + ' − ' + b, a: a }; }; }
  function tensDrill(R) { var a = R(1, 9) * 10, b = R(1, 9); return pick2(R) ? { q: a + ' + ' + b, a: a + b } : { q: (a + b) + ' − ' + b, a: a }; }
  function pick2(R) { return R(0, 1) === 1; }
  function choice(story, options, a, pics) { return { story: story, options: options, a: a, pics: pics }; }

  var part3 = {
    grade: 1, part: 3, edition: 'Yangi nashr, 2024',
    title: 'Masalalar va kattaliklar',
    book: 'I.V. Repyova. Matematika, 1-sinf, III qism (Toshkent, 2024)',
    intro: 'Bu qismda biz masalalar bilan do‘stlashamiz: ularni o‘qish, sxema chizish, ifoda tuzish va javob topishni o‘rganamiz. So‘ng uzunlik, massa va hajmni o‘lchaymiz.',
    sections: [
      // ================= 1-BO'LIM =================
      { id: 's1', title: 'Masala nima?', icon: '📝', color: 'blue', topics: [
        { id: 't1', lessons: '1-dars', title: 'Masalaning tarkibi', keys: ['masala', 'shart', 'savol', 'yechim', 'javob'],
          scene: [{ obj: 'medal', n: 3, color: 'gold' }, { obj: 'medal', n: 2, color: 'gray' }],
          explain: 'Masala — bu kichik hikoya, uning oxirida <b>savol</b> bo‘ladi. Hikoyada bizga berilgan sonlar — <b>shart</b>. Savolga javob topish uchun ifoda tuzamiz — bu <b>yechim</b>. Oxirida <b>javob</b>ni yozamiz.',
          rule: '<b>Masala</b> = <span class="hl1">shart</span> + <span class="hl2">savol</span>.<br>Yechim → ifoda, masalan <b>12 + 7 = 19</b>. Javob: <b>19 ta</b>.',
          acts: [
            { type: 'problem', title: 'Medallarni sanang', make: whole({ a: [8, 15], b: [5, 12], u: 'ta', emoji: ['🥇', '🥈'], labels: ['oltin', 'kumush'], cond: ['Oltin', 'Kumush'],
              text: function (a, b) { return 'Devorga <b>' + a + '</b> ta oltin va <b>' + b + '</b> ta kumush medal osildi. Devorda <u>jami nechta medal</u> bor?'; } }) },
            { type: 'choose', title: 'Bu masalami?', icon: '🤔', make: function (R) {
              var a = R(3, 9), b = R(2, 8);
              return K().pick([
                choice('«Bog‘da ' + a + ' ta olma daraxti va ' + b + ' ta nok daraxti o‘sadi.» Bu matn masalami?', ['Yo‘q, unda savol yo‘q', 'Ha, bu masala', 'Ha, chunki sonlar bor'], 0),
                choice('«Savatda ' + a + ' ta olma bor edi. Yana ' + b + ' ta olma solishdi. Savatda nechta olma bo‘ldi?» Bu matnning <b>savoli</b> qaysi?', ['Savatda nechta olma bo‘ldi?', 'Savatda ' + a + ' ta olma bor edi', 'Yana ' + b + ' ta olma solishdi'], 0),
                choice('«Robot ' + a + ' ta kub va ' + b + ' ta shar yasadi. Robot jami nechta shakl yasadi?» Masalaning <b>sharti</b> qaysi?', ['Robot ' + a + ' ta kub va ' + b + ' ta shar yasadi', 'Robot jami nechta shakl yasadi?', a + ' + ' + b], 0)
              ]);
            } },
            { type: 'magic', title: 'Sehrli kvadratni to‘ldiring', given: 5 }
          ],
          quiz: [
            { q: 'Masala qanday qismlardan iborat?', o: ['Shart va savol', 'Faqat sonlar', 'Faqat savol', 'Rasm va sonlar'], a: 0 },
            { q: 'Masalaning savoli nimani ko‘rsatadi?', o: ['Nimani topish kerakligini', 'Berilgan sonlarni', 'Javobni', 'Rasmni'], a: 0 },
            { q: '12 ta rangli va 7 ta oq-qora rasm bor. Jami nechta rasm?', o: ['19', '5', '17', '20'], a: 0 },
            { q: 'Qaysi matn masala?', o: ['Qutida 5 ta qalam bor. Yana 3 ta solishdi. Qutida nechta qalam bo‘ldi?', 'Qutida 5 ta qalam bor.', 'Qalamlar rangli.', '5 + 3'], a: 0 }
          ] },

        { id: 't2', lessons: '2-dars', title: 'Masalani yechish algoritmi', keys: ['reja', 'berilganlar', 'savol', 'ifoda', 'javob'],
          scene: [{ obj: 'robot', n: 2, color: 'blue' }, { obj: 'cube', n: 3, color: 'orange' }],
          explain: 'Algoritm — bu ishni bosqichma-bosqich bajarish rejasi. Robotlar ham shunday ishlaydi: avval birinchi qadam, keyin ikkinchisi... Masalani yechishda ham 4 qadamli reja bor.',
          rule: '<b>Masalani yechish rejasi:</b><br>1) berilganlarni ajratish;<br>2) savolni aniqlash;<br>3) ifoda tuzish;<br>4) javobni yozish.',
          acts: [
            { type: 'order', title: 'Rejani to‘g‘ri tartiblang', make: function () { return { story: 'Masalani yechish qadamlarini to‘g‘ri tartibda bosing.', items: ['Berilganlarni ajratish', 'Savolni aniqlash', 'Ifoda tuzish', 'Javobni yozish'], sep: '<span class="kd-arr">→</span>' }; } },
            { type: 'chain', title: 'Robot algoritmi: amallarni bajaring', make: function (R) { var s = R(10, 30); return { start: s, ops: [['+', R(5, 20)], ['−', R(2, 9)], ['+', R(10, 30)], ['−', R(5, 15)]] }; } },
            { type: 'problem', title: 'Rejaga ko‘ra yeching', make: whole({ a: [20, 40], b: [10, 30], u: 'ta', emoji: ['🤖', '🦾'], labels: ['robot', 'robot qo‘l'], cond: ['Robotlar', 'Robot qo‘llar'],
              text: function (a, b) { return 'Zavodda <b>' + a + '</b> ta robot va <b>' + b + '</b> ta robot qo‘l yig‘ildi. Zavodda <u>jami nechta</u> qurilma yig‘ildi?'; } }) }
          ],
          quiz: [
            { q: 'Masalani yechishning birinchi qadami qaysi?', o: ['Berilganlarni ajratish', 'Javobni yozish', 'Ifoda tuzish', 'Rasm chizish'], a: 0 },
            { q: 'Ifoda qachon tuziladi?', o: ['Savolni aniqlagandan keyin', 'Javobdan keyin', 'Eng boshida', 'Hech qachon'], a: 0 },
            { q: '15 → +5 → −3 → ?', o: ['17', '23', '13', '20'], a: 0 },
            { q: 'Algoritm nima?', o: ['Ishni bajarish rejasi', 'Son', 'Shakl', 'Rasm'], a: 0 }
          ] },

        { id: 't3', lessons: '3-dars', title: 'Sodda masalalar', keys: ['sodda masala', 'butun', 'qism'],
          scene: [{ obj: 'apple', n: 4, color: 'red' }, { obj: 'apple', n: 3, color: 'green' }],
          explain: 'Bitta amal (qo‘shish yoki ayirish) bilan yechiladigan masala — <b>sodda masala</b>. Bunday masalalarni <b>sxema</b> bilan tasvirlaymiz: uzun chiziq — <b>butun</b>, uning bo‘laklari — <b>qismlar</b>.',
          rule: '<b>qism + qism = butun</b><br><b>butun − qism = qism</b>',
          acts: [
            { type: 'count3d', title: '3D savat: olmalarni sanang', make: function (R) { var a = R(2, 6), b = R(2, 5); return { groups: [{ obj: 'apple', n: a, color: 'red' }, { obj: 'apple', n: b, color: 'green' }], story: 'Savatda qizil va yashil olmalar bor. Ifoda tuzing: <b>jami nechta olma</b>?', expr: [a, '+', b, '=', a + b], ans: a + b, unit: 'ta olma' }; } },
            { type: 'problem', make: part({ c: [12, 30], a: [3, 15], u: 'ta', emoji: '🎈', labels: ['qizil', 'ko‘k'], cond: ['Qizil', 'Ko‘k'],
              text: function (c, a) { return 'Bayramga <b>' + c + '</b> ta shar olib kelishdi. Ulardan <b>' + a + '</b> tasi qizil, qolganlari ko‘k. <u>Nechta ko‘k shar</u> bor?'; } }) },
            { type: 'drill', title: 'Tez hisoblang', make: sumDrill(20) }
          ],
          quiz: [
            { q: 'Sodda masala nechta amal bilan yechiladi?', o: ['Bitta', 'Ikkita', 'Uchta', 'Amalsiz'], a: 0 },
            { q: 'Butunni topish uchun qismlarni nima qilamiz?', o: ['Qo‘shamiz', 'Ayiramiz', 'Taqqoslaymiz', 'Sanamaymiz'], a: 0 },
            { q: 'Butun 15, bir qismi 9. Ikkinchi qism?', o: ['6', '24', '5', '9'], a: 0 },
            { q: '8 + 7 = ?', o: ['15', '14', '16', '1'], a: 0 }
          ] },

        { id: 't4', lessons: '4-dars', title: 'Masala shartining berilish usullari', keys: ['matn', 'rasm', 'qisqa yozuv', 'sxema'],
          scene: [{ obj: 'book', n: 3, color: 'violet' }, { obj: 'pencil', n: 3, color: 'yellow' }],
          explain: 'Bitta masalani turli usulda aytish mumkin: <b>matn</b> bilan yozish, <b>rasm</b> chizish, <b>qisqa yozuv</b> qilish yoki <b>sxema</b> chizish. Qaysi usul sizga qulay bo‘lsa — shundan foydalaning!',
          rule: 'Qisqa yozuv namunasi:<br>I qism — <b>8 ta</b><br>II qism — <b>5 ta</b><br>Jami — <b>?</b>',
          acts: [
            { type: 'problem', title: 'Matn → qisqa yozuv → sxema', make: whole({ a: [6, 25], b: [4, 20], u: 'ta', emoji: ['📕', '✏️'], labels: ['kitob', 'daftar'], cond: ['Kitoblar', 'Daftarlar'],
              text: function (a, b) { return 'Javonda <b>' + a + '</b> ta kitob va <b>' + b + '</b> ta daftar turibdi. Javonda <u>jami nechta</u> kitob va daftar bor?'; } }) },
            { type: 'choose', title: 'Sxemaga mos masalani tanlang', icon: '🧩', make: function (R) {
              var a = R(5, 15), b = R(3, 12);
              return choice('Qaysi masala <b>' + a + ' + ' + b + '</b> ifodasi bilan yechiladi?', ['Qutida ' + a + ' ta qizil va ' + b + ' ta ko‘k qalam bor. Jami nechta qalam?', 'Qutida ' + (a + b) + ' ta qalam bor edi, ' + b + ' tasini olishdi. Nechta qoldi?', a + ' ta qalamdan ' + b + ' tasi ko‘k. Nechtasi qizil?'], 0);
            } },
            { type: 'magic', title: 'Kim tezroq: sehrli kvadrat', given: 4 }
          ],
          quiz: [
            { q: 'Masala sharti qanday berilishi mumkin?', o: ['Matn, rasm, qisqa yozuv yoki sxema', 'Faqat matn', 'Faqat rasm', 'Faqat son'], a: 0 },
            { q: '«I qism — 6, II qism — 4, Jami — ?» Bu nima?', o: ['Qisqa yozuv', 'Rasm', 'Javob', 'Savol'], a: 0 },
            { q: 'Qisqa yozuv bo‘yicha javob: I — 6, II — 4, Jami — ?', o: ['10', '2', '64', '11'], a: 0 }
          ] },

        { id: 't5', lessons: '5-dars', title: 'Masalalar yechish', keys: ['butun va qismlar', 'ifodalar'],
          scene: [{ obj: 'robot', n: 3, color: 'green' }],
          explain: 'Endi o‘rgangan hamma narsani birlashtiramiz: masalani o‘qiymiz, qisqa yozuv qilamiz, sxema chizamiz, ifoda tuzamiz va javob yozamiz. Ekolog-robotlar shaharni tozalashga yordam beryapti!',
          rule: 'Yechimni tekshirish: javobni masala shartiga qo‘yib ko‘ring — mos kelsa, to‘g‘ri!',
          acts: [
            { type: 'problem', make: whole({ a: [20, 50], b: [20, 45], u: 'qop', emoji: ['🗑️', '🗑️'], labels: ['I robot', 'II robot'], cond: ['I robot', 'II robot'],
              text: function (a, b) { return 'Birinchi robot mashinaga <b>' + a + '</b> qop, ikkinchisi <b>' + b + '</b> qop chiqindi yukladi. Mashina <u>jami necha qop</u> chiqindini olib ketadi?'; } }) },
            { type: 'order', title: 'Javoblarni kamayish tartibida joylang', make: function (R) {
              var ex = []; while (ex.length < 5) { var a = R(10, 60), b = R(1, 30), v = a + b; if (ex.every(function (e) { return e.v !== v; })) ex.push({ q: a + ' + ' + b, v: v }); }
              ex.sort(function (x, y) { return y.v - x.v; });
              return { story: 'Har bir misolni yeching va javobi <b>kattasidan kichigiga</b> qarab bosing.', items: ex.map(function (e) { return e.q; }), sep: '<span class="kd-arr">›</span>' };
            } },
            { type: 'drill', title: 'O‘nliklar bilan hisoblang', make: tensDrill }
          ],
          quiz: [
            { q: '46 qop + 42 qop = ?', o: ['88 qop', '84 qop', '4 qop', '98 qop'], a: 0 },
            { q: 'Javobni qanday tekshiramiz?', o: ['Shartga qo‘yib ko‘ramiz', 'Taxmin qilamiz', 'Tekshirmaymiz', 'Rasm chizamiz'], a: 0 },
            { q: '70 + 5 = ?', o: ['75', '57', '12', '705'], a: 0 }
          ] }
      ] },

      // ================= 2-BO'LIM =================
      { id: 's2', title: 'Butun va qismlar', icon: '🧩', color: 'green', topics: [
        { id: 't6', lessons: '6–8-darslar', title: 'Butunni topishga doir masalalar', keys: ['butun va qismlar', 'qism + qism = butun'],
          scene: [{ obj: 'drone', n: 3, color: 'blue' }, { obj: 'drone', n: 2, color: 'orange' }],
          explain: 'Ikkita qismni bilsak, <b>butun</b>ni topish oson: ularni qo‘shamiz! Masalan, bir hovlida harbiy va fuqarolik dronlari bor. Ularning hammasini topish uchun ikkala guruhni qo‘shamiz.',
          rule: '<b>qism + qism = butun</b><br>Sxemada: ikki bo‘lak birlashib bitta uzun kesmani hosil qiladi.',
          acts: [
            { type: 'count3d', title: '3D: dronlar uchyapti!', make: function (R) { var a = R(2, 5), b = R(2, 5); return { groups: [{ obj: 'drone', n: a, color: 'blue' }, { obj: 'drone', n: b, color: 'orange' }], story: 'Ko‘k — fuqarolik, to‘q sariq — yuk dronlari. <b>Jami nechta dron</b> uchyapti?', expr: [a, '+', b, '=', a + b], ans: a + b, unit: 'ta dron' }; } },
            { type: 'problem', make: whole({ a: [10, 40], b: [10, 40], u: 'ta', emoji: ['🚁', '🛸'], labels: ['harbiy', 'fuqarolik'], cond: ['Harbiy', 'Fuqarolik'],
              text: function (a, b) { return 'Ko‘rgazmada <b>' + a + '</b> ta harbiy va <b>' + b + '</b> ta fuqarolik droni bor. Ko‘rgazmada <u>jami nechta dron</u> bor?'; } }) },
            { type: 'problem', make: whole({ a: [15, 50], b: [10, 40], u: 'ta', emoji: ['🤖', '🤖'], labels: ['1-qavat', '2-qavat'], cond: ['1-qavatda', '2-qavatda'],
              text: function (a, b) { return 'Kasalxonaning birinchi qavatida <b>' + a + '</b> ta, ikkinchi qavatida <b>' + b + '</b> ta robot-yordamchi ishlayapti. Kasalxonada <u>jami nechta robot</u> ishlayapti?'; } }) },
            { type: 'table', title: 'Yig‘indilar jadvali', kind: 'sum', max: 100, min: 5 }
          ],
          quiz: [
            { q: 'Butunni qanday topamiz?', o: ['Qismlarni qo‘shamiz', 'Qismlarni ayiramiz', 'Kattasini olamiz', 'Kichigini olamiz'], a: 0 },
            { q: '30 ta va 25 ta dron. Jami?', o: ['55', '5', '50', '65'], a: 0 },
            { q: 'Qo‘shiluvchilar 13 va 54. Yig‘indi?', o: ['67', '41', '57', '77'], a: 0 },
            { q: 'qism + qism = ?', o: ['butun', 'qism', 'ayirma', 'nol'], a: 0 }
          ] },

        { id: 't7', lessons: '9–10-darslar', title: 'Qismlarni topishga doir masalalar', keys: ['butun va qismlar', 'butun − qism = qism'],
          scene: [{ obj: 'cone', n: 3, color: 'violet' }, { obj: 'cylinder', n: 3, color: 'cyan' }],
          explain: 'Agar butunni va uning bitta qismini bilsak, ikkinchi qismni topish uchun butundan ma’lum qismni <b>ayiramiz</b>. Xuddi pirogdan bir bo‘lagi yeyilsa, qolganini topgandek!',
          rule: '<b>butun − qism = qism</b><br>Tekshirish: topilgan qismni ma’lum qismga qo‘shsak, butun chiqadi.',
          acts: [
            { type: 'problem', make: part({ c: [40, 90], a: [10, 35], u: 'ta', emoji: '🔷', labels: ['konus', 'silindr'], cond: ['Konuslar', 'Silindrlar'],
              text: function (c, a) { return 'Qutida <b>' + c + '</b> ta hajmli jism bor: <b>' + a + '</b> tasi konus, qolganlari silindr. Qutida <u>nechta silindr</u> bor?'; } }) },
            { type: 'problem', make: part({ c: [20, 60], a: [5, 25], u: 'ta', labels: ['egri', 'siniq'], cond: ['Egri chiziqlar', 'Siniq chiziqlar'],
              text: function (c, a) { return 'Daftarga <b>' + c + '</b> ta chiziq chizildi. Ulardan <b>' + a + '</b> tasi egri chiziq, qolganlari siniq chiziq. <u>Nechta siniq chiziq</u> chizildi?'; } }) },
            { type: 'table', title: 'Ayirmalar jadvali', kind: 'diff', max: 80, min: 5 }
          ],
          quiz: [
            { q: 'Qismni qanday topamiz?', o: ['Butundan ma’lum qismni ayiramiz', 'Qismlarni qo‘shamiz', 'Butunga qism qo‘shamiz', 'Hech narsa'], a: 0 },
            { q: '24 ta egri + ? ta siniq = 69 ta chiziq', o: ['45', '93', '35', '55'], a: 0 },
            { q: '62 ta konus + ? ta silindr = 89 ta jism', o: ['27', '151', '37', '26'], a: 0 },
            { q: 'Butun 50, qism 20. Ikkinchi qism?', o: ['30', '70', '20', '25'], a: 0 }
          ] },

        { id: 't8', lessons: '11-dars', title: 'Masalalar yechish (takrorlash)', keys: ['qism + qism = butun', 'butun − qism = qism'],
          scene: [{ obj: 'ball', n: 4, color: 'pink' }, { obj: 'cube', n: 3, color: 'blue' }],
          explain: 'Endi o‘zingiz tanlang: masalada <b>butun</b> so‘ralganmi yoki <b>qism</b>? Butun so‘ralsa — qo‘shamiz, qism so‘ralsa — ayiramiz. Sxema doim yordam beradi!',
          rule: 'Savol <b>«jami»</b>, <b>«hammasi»</b> desa — ko‘pincha qo‘shish.<br>Savol <b>«qolgani»</b>, <b>«qolganlari»</b> desa — ko‘pincha ayirish.',
          acts: [
            { type: 'choose', title: 'Qaysi amal kerak?', icon: '➕', make: function (R) {
              var c = R(30, 80), a = R(10, c - 5);
              return K().pick([
                choice('Pochtachi <b>' + c + '</b> ta xat olib chiqdi. <b>' + a + '</b> tasini tarqatdi. Nechta xat qoldi?', [c + ' − ' + a, c + ' + ' + a, a + ' − ' + c], 0),
                choice('Bir qutida <b>' + a + '</b> ta, ikkinchisida <b>' + (c - a) + '</b> ta xat bor. Jami nechta xat?', [a + ' + ' + (c - a), c + ' − ' + a, a + ' − ' + (c - a)], 0)
              ]);
            } },
            { type: 'table', title: 'Jadvalni to‘ldiring', kind: 'diff', max: 70 },
            { type: 'chain', make: function (R) { var s = R(40, 60); return { start: s, ops: [['−', R(10, 20)], ['+', R(5, 15)], ['−', R(3, 9)], ['+', R(10, 20)]] }; } }
          ],
          quiz: [
            { q: '«Qoldi» so‘zi ko‘pincha qaysi amalga ishora qiladi?', o: ['Ayirish', 'Qo‘shish', 'Taqqoslash', 'Hech qaysi'], a: 0 },
            { q: 'Kamayuvchi 70, ayriluvchi 20. Ayirma?', o: ['50', '90', '30', '40'], a: 0 },
            { q: 'Kamayuvchi 14, ayirma 7. Ayriluvchi?', o: ['7', '21', '6', '14'], a: 0 }
          ] }
      ] },

      // ================= 3-BO'LIM =================
      { id: 's3', title: 'Ko‘p, kam va taqqoslash', icon: '⚖️', color: 'orange', topics: [
        { id: 't9', lessons: '14–17-darslar', title: 'Sonni orttirish va kamaytirishga doir masalalar', keys: ['… ta ortiq (+)', '… ta kam (−)'],
          scene: [{ obj: 'pencil', n: 4, color: 'pink' }, { obj: 'pencil', n: 6, color: 'cyan' }],
          explain: '«<b>… ta ko‘p</b>» deyilsa — sonni o‘sha songa <b>orttiramiz</b> (qo‘shamiz). «<b>… ta kam</b>» deyilsa — sonni <b>kamaytiramiz</b> (ayiramiz). Sxemada ikkita kesma chizamiz: biri ikkinchisidan uzunroq yoki qisqaroq.',
          rule: '<b>a dan d ta ko‘p → a + d</b><br><b>a dan d ta kam → a − d</b>',
          acts: [
            { type: 'problem', title: '«… ta ko‘p» masalasi', make: more({ a: [5, 30], d: [2, 15], u: 'ta', who: ['Aziza', 'Umida'],
              text: function (a, d) { return 'Azizaning <b>' + a + '</b> ta rangli qalami bor. Umidaning qalamlari esa Azizanikidan <b>' + d + '</b> ta ko‘p. <u>Umidaning nechta</u> qalami bor?'; } }) },
            { type: 'problem', title: '«… ta kam» masalasi', make: less({ a: [10, 40], d: [2, 9], u: 'ta', who: ['Aziza', 'Sardor'],
              text: function (a, d) { return 'Azizaning <b>' + a + '</b> ta qalami bor. Sardorning qalamlari Azizanikidan <b>' + d + '</b> ta kam. <u>Sardorning nechta</u> qalami bor?'; } }) },
            { type: 'problem', title: 'Tokchadagi darsliklar', make: more({ a: [7, 25], d: [3, 12], u: 'ta', who: ['Yuqori tokcha', 'Pastki tokcha'],
              text: function (a, d) { return 'Shkafning yuqori tokchasida <b>' + a + '</b> ta darslik turibdi. Pastki tokchada <b>' + d + '</b> ta ko‘p. <u>Pastki tokchada nechta</u> darslik bor?'; } }) },
            { type: 'count3d', title: '3D: qalamlarni taqqoslang', make: function (R) { var a = R(2, 5), d = R(1, 3); return { groups: [{ obj: 'pencil', n: a, color: 'pink' }, { obj: 'pencil', n: a + d, color: 'cyan' }], story: 'Pushti qalamlar — <b>' + a + '</b> ta. Havorang qalamlar ulardan <b>' + d + '</b> ta ko‘p. Havorang qalamlar nechta?', expr: [a, '+', d, '=', a + d], ans: a + d, unit: 'ta' }; } }
          ],
          quiz: [
            { q: '6 dan 4 ta ko‘p son?', o: ['10', '2', '24', '64'], a: 0 },
            { q: '9 dan 2 ta kam son?', o: ['7', '11', '18', '6'], a: 0 },
            { q: '«… ta ko‘p» deyilsa qaysi amal?', o: ['Qo‘shish', 'Ayirish', 'Hech qaysi', 'Taqqoslash'], a: 0 },
            { q: 'Yuqorida 7 ta kitob, pastda 4 ta ko‘p. Pastda?', o: ['11', '3', '74', '10'], a: 0 }
          ] },

        { id: 't10', lessons: '18–21-darslar', title: 'Taqqoslashga doir masalalar', keys: ['nechta ko‘p?', 'nechta kam?', 'farq'],
          scene: [{ obj: 'star', n: 5, color: 'yellow' }, { obj: 'star', n: 3, color: 'pink' }],
          explain: 'Ikki sonni <b>taqqoslash</b> — biri ikkinchisidan nechtaga ko‘p yoki kam ekanini bilish. Buning uchun <b>kattasidan kichigini ayiramiz</b>. Farq — ikki kesma uzunliklari orasidagi bo‘lak.',
          rule: '<b>Nechta ko‘p? Nechta kam? → katta − kichik</b><br>Masalan, 9 ta va 5 ta: 9 − 5 = 4 (4 ta ko‘p, 4 ta kam).',
          acts: [
            { type: 'problem', title: 'Kim ko‘p yig‘di?', make: diff({ a: [10, 50], b: [10, 50], u: 'ta', who: ['Dilshod', 'Malika'],
              text: function (a, b) { return 'Dilshod <b>' + a + '</b> ta, Malika <b>' + b + '</b> ta yong‘oq yig‘di. ' + (a > b ? 'Dilshod Malikadan' : 'Malika Dilshoddan') + ' <u>nechta ko‘p</u> yong‘oq yig‘di?'; } }) },
            { type: 'count3d', title: '3D: yulduzlarni taqqoslang', make: function (R) { var a = R(4, 7), b = R(1, a - 1); return { groups: [{ obj: 'star', n: a, color: 'yellow' }, { obj: 'star', n: b, color: 'pink' }], story: 'Sariq yulduzlar pushti yulduzlardan <b>nechta ko‘p</b>?', expr: [a, '−', b, '=', a - b], ans: a - b, unit: 'ta' }; } },
            { type: 'choose', title: 'Belgi qo‘ying', icon: '⚖️', make: function (R) {
              var a = R(10, 99), b; do { b = R(10, 99); } while (b === a);
              return choice('<span class="kd-big">' + a + ' ◻ ' + b + '</span> — qaysi belgi to‘g‘ri?', ['&gt;', '&lt;', '='], a > b ? 0 : 1);
            } }
          ],
          quiz: [
            { q: '9 ta va 5 ta. Nechta ko‘p?', o: ['4', '14', '5', '3'], a: 0 },
            { q: 'Taqqoslash uchun qaysi amal?', o: ['Kattasidan kichigini ayiramiz', 'Qo‘shamiz', 'Kichigidan kattasini ayiramiz', 'Sanaymiz'], a: 0 },
            { q: '45 va 32 farqi?', o: ['13', '77', '12', '23'], a: 0 },
            { q: '58 ◻ 85', o: ['<', '>', '='], a: 0 }
          ] }
      ] },

      // ================= 4-BO'LIM =================
      { id: 's4', title: 'Murakkab va qiziqarli masalalar', icon: '🧠', color: 'violet', topics: [
        { id: 't11', lessons: '22-dars', title: 'Murakkab masalalar yechish', keys: ['ikki savol', 'reja', 'ifoda'],
          scene: [{ obj: 'robot', n: 2, color: 'violet' }, { obj: 'ball', n: 3, color: 'cyan' }],
          explain: 'Ba’zi masalalarni bir amal bilan yechib bo‘lmaydi. Avval <b>yordamchi savol</b>ga javob topamiz, keyin asosiy savolga. Bu — <b>murakkab masala</b>.',
          rule: '1) Avval nima topiladi? → birinchi amal.<br>2) Keyin asosiy savol → ikkinchi amal.',
          acts: [
            { type: 'problem', title: 'Ikki qadamli masala', make: function (R) {
              var a = R(10, 30), d = R(3, 9), b = a + d;
              return { story: 'Birinchi sinf <b>' + a + '</b> ta daraxt ekdi. Ikkinchi sinf <b>' + d + '</b> ta ko‘p ekdi. Ikkala sinf <u>jami nechta</u> daraxt ekdi?',
                cond: [['I sinf', a + ' ta'], ['II sinf', '?, ' + d + ' ta ko‘p'], ['Jami', '?']],
                scheme: { kind: 'more', a: a, b: b, show: [a, b + ' ta', '+' + d], labels: ['I sinf', 'II sinf'] },
                expr: [a, '+', b, '=', a + b], ans: a + b, unit: 'ta (avval ' + a + ' + ' + d + ' = ' + b + ')' };
            } },
            { type: 'problem', title: 'Avval topib oling', make: function (R) {
              var a = R(20, 40), b = R(10, 25), c = R(5, a + b - 10);
              return { story: 'Do‘konda <b>' + a + '</b> ta qizil va <b>' + b + '</b> ta yashil olma bor edi. <b>' + c + '</b> ta olma sotildi. <u>Nechta olma qoldi</u>?',
                cond: [['Qizil', a + ' ta'], ['Yashil', b + ' ta'], ['Sotildi', c + ' ta'], ['Qoldi', '?']],
                expr: [a, '+', b, '−', c, '=', a + b - c], ans: a + b - c, unit: 'ta' };
            } }
          ],
          quiz: [
            { q: 'Murakkab masala nechta amal bilan yechiladi?', o: ['Ikki yoki undan ko‘p', 'Bitta', 'Amalsiz', 'Faqat qo‘shish'], a: 0 },
            { q: '10 ta + 5 ta ko‘p. Ikkalasi jami?', o: ['25', '15', '20', '5'], a: 0 },
            { q: '20 + 15 − 10 = ?', o: ['25', '45', '5', '35'], a: 0 }
          ] },

        { id: 't12', lessons: '23-dars', title: 'Shartni yetishmayotgan ma’lumotlar bilan to‘ldirish', keys: ['yetishmayotgan son', 'shartni to‘ldirish'],
          scene: [{ obj: 'cube', n: 4, color: 'green' }],
          explain: 'Ba’zan masalada <b>son yetishmaydi</b> va uni yechib bo‘lmaydi. Unda shartga kerakli sonni qo‘shib, masalani «to‘ldiramiz». Avval o‘ylang: savolga javob berish uchun nimani bilish kerak?',
          rule: 'Javob berish uchun <b>barcha kerakli sonlar</b> shartda bo‘lishi shart.',
          acts: [
            { type: 'choose', title: 'Nima yetishmayapti?', icon: '🔍', make: function (R) {
              var a = R(5, 20);
              return K().pick([
                choice('«Savatda <b>' + a + '</b> ta olma bor edi. Bir nechtasini yeyishdi. Nechta olma qoldi?» Masalani yechish uchun nima yetishmayapti?', ['Nechta olma yeyilgani', 'Savatdagi olmalar soni', 'Savol'], 0),
                choice('«Lolada <b>' + a + '</b> ta rangli qalam bor. Lolada va Hasanda jami nechta qalam bor?» Nima yetishmayapti?', ['Hasanning qalamlari soni', 'Lolaning qalamlari soni', 'Savol'], 0)
              ]);
            } },
            { type: 'problem', title: 'Endi to‘ldirilgan masalani yeching', make: part({ c: [15, 40], a: [3, 12], u: 'ta', emoji: '🍎', labels: ['yeyildi', 'qoldi'], cond: ['Yeyildi', 'Qoldi'],
              text: function (c, a) { return 'Savatda <b>' + c + '</b> ta olma bor edi. Ulardan <b>' + a + '</b> tasini yeyishdi. <u>Nechta olma qoldi</u>?'; } }) }
          ],
          quiz: [
            { q: '«Qutida 10 ta shar bor edi, bir nechtasi yorildi. Nechta qoldi?» Nima yetishmaydi?', o: ['Nechta shar yorilgani', 'Savol', 'Qutidagi sharlar soni', 'Hech narsa'], a: 0 },
            { q: 'Masalani yechish uchun nima kerak?', o: ['Barcha kerakli sonlar va savol', 'Faqat savol', 'Faqat rasm', 'Faqat javob'], a: 0 }
          ] },

        { id: 't13', lessons: '24-dars', title: 'Nostandart masalalar', keys: ['mantiq', 'qonuniyat', 'zukkolik'],
          scene: [{ obj: 'pyramid', n: 3, color: 'orange' }, { obj: 'ball', n: 2, color: 'violet' }],
          explain: 'Nostandart masalalar — <b>zukkolik</b> masalalari. Ularda faqat hisoblash emas, <b>o‘ylash</b> ham kerak: qonuniyatni topish, mantiqiy fikrlash, rasmga diqqat bilan qarash.',
          rule: 'Shoshilmang! Rasmni chizing, sanab ko‘ring, taxmin qiling va tekshiring.',
          acts: [
            { type: 'choose', title: 'Qonuniyatni toping', icon: '🔮', make: function (R) {
              var s = R(2, 20), d = R(2, 6), seq = [s, s + d, s + 2 * d, s + 3 * d], nx = s + 4 * d;
              return choice('Keyingi son qaysi? <span class="kd-big">' + seq.join(', ') + ', ?</span>', [String(nx), String(nx + 1), String(nx - d - 1)], 0);
            } },
            { type: 'choose', title: 'Mantiqiy masala', icon: '🧠', make: function () {
              return K().pick([
                choice('Ali Validan baland, Vali Soliddan baland. Kim eng past?', ['Soli', 'Ali', 'Vali'], 0),
                choice('Ikkita ota va ikkita o‘g‘il 3 ta olmani teng bo‘lishdi — har biriga bittadan tegdi. Bu qanday bo‘lishi mumkin?', ['Ular — bobo, ota va o‘g‘il', 'Bu mumkin emas', 'Bitta olma ortib qoldi'], 0),
                choice('Uchta mushuk 3 ta sichqonni 3 daqiqada tutadi. 1 ta mushuk 1 ta sichqonni necha daqiqada tutadi?', ['3 daqiqada', '1 daqiqada', '9 daqiqada'], 0)
              ]);
            } },
            { type: 'magic', title: 'Sehrli kvadrat (qiyin)', given: 3 }
          ],
          quiz: [
            { q: '2, 4, 6, 8, ?', o: ['10', '9', '12', '16'], a: 0 },
            { q: '5, 10, 15, 20, ?', o: ['25', '21', '30', '35'], a: 0 },
            { q: 'Ali Validan baland, Vali Solidan baland. Eng balandi kim?', o: ['Ali', 'Vali', 'Soli', 'Bilib bo‘lmaydi'], a: 0 }
          ] },

        { id: 't14', lessons: '25–26-darslar', title: 'Ikki amalli va murakkab masalalar', keys: ['ikki amal', 'amallar tartibi'],
          scene: [{ obj: 'apple', n: 3, color: 'yellow' }, { obj: 'bucket', n: 1, color: 'orange' }],
          explain: 'Ikki amalli masalada ketma-ket ikki ish bajariladi: masalan, avval nimadir qo‘shiladi, keyin nimadir olinadi. Ifodani bir qatorda yozish mumkin: <b>a + b − c</b>. Qavssiz ifodada amallar <b>chapdan o‘ngga</b> bajariladi.',
          rule: '<b>a + b − c</b>: avval a + b, keyin natijadan c ni ayiramiz.',
          acts: [
            { type: 'problem', title: 'Vinni-Puxning asali', make: function (R) {
              var eat = R(4, 9), d = R(1, eat - 1), left = eat - d, tot = eat + left;
              return { story: 'Bochkada asal bor edi. Vinni-Pux <b>' + eat + '</b> kg asal yedi. Boyqushga Vinni-Pux yeganidan <b>' + d + '</b> kg kam asal qoldi. Bochkada <u>qancha asal bo‘lgan</u>?',
                cond: [['Yedi', eat + ' kg'], ['Qoldi', '?, ' + d + ' kg kam'], ['Bor edi', '?']],
                expr: [eat, '+', eat, '−', d, '=', tot], ans: tot, unit: 'kg' };
            } },
            { type: 'drill', title: 'Ikki amalli misollar', n: 6, make: function (R) { var a = R(10, 40), b = R(5, 30), c = R(1, a + b - 1); return R(0, 1) ? { q: a + ' + ' + b + ' − ' + c, a: a + b - c } : { q: (a + b) + ' − ' + b + ' + ' + c, a: a + c }; } }
          ],
          quiz: [
            { q: '30 + 20 − 10 = ?', o: ['40', '60', '20', '0'], a: 0 },
            { q: 'Qavssiz ifodada amallar qanday bajariladi?', o: ['Chapdan o‘ngga', 'O‘ngdan chapga', 'Ixtiyoriy', 'Avval ayirish'], a: 0 },
            { q: '50 − 20 + 5 = ?', o: ['35', '25', '75', '45'], a: 0 }
          ] }
      ] },

      // ================= 5-BO'LIM =================
      { id: 's5', title: 'Kattaliklar: uzunlik, massa, hajm', icon: '📏', color: 'cyan', topics: [
        { id: 't15', lessons: '30–31-darslar', title: 'Uzunlik. Santimetr. Kesmalarni o‘lchash', keys: ['uzunlik', 'santimetr (cm)', 'chizg‘ich', 'kesma'],
          scene: [{ obj: 'pencil', n: 3, color: 'orange' }, { obj: 'pencil', n: 2, color: 'green' }],
          explain: 'Narsalarning uzunligini <b>chizg‘ich</b> bilan o‘lchaymiz. Uzunlik birligi — <b>santimetr</b> (qisqacha <b>cm</b>). O‘lchaganda narsaning boshi chizg‘ichdagi <b>0</b> ga to‘g‘ri kelishi kerak!',
          rule: 'Chizg‘ichdagi ikki katta chiziq orasi — <b>1 cm</b>.<br>Kesma boshi 0 da bo‘lmasa: <b>oxiri − boshi</b>.',
          acts: [
            { type: 'ruler', title: 'Qalamni o‘lchang', mode: 'pencil', make: function (R) { var l = R(4, 14); return { len: l, start: 0, max: 15, story: 'Qalamning uzunligi necha santimetr?' }; } },
            { type: 'ruler', title: 'Kesmani o‘lchang (qiyinroq!)', mode: 'segment', make: function (R) { var s = R(1, 5), l = R(3, 9); return { len: l, start: s, max: 15, story: 'AB kesma ' + s + ' dan boshlanyapti. Uning uzunligi necha cm?' }; } },
            { type: 'drill', title: 'Santimetrlar bilan hisoblang', make: function (R) { var a = R(5, 50), b = R(1, 40); return R(0, 1) ? { q: a + ' cm + ' + b + ' cm', a: a + b, unit: 'cm' } : { q: (a + b) + ' cm − ' + b + ' cm', a: a, unit: 'cm' }; } }
          ],
          quiz: [
            { q: 'Uzunlik nima bilan o‘lchanadi?', o: ['Chizg‘ich bilan', 'Tarozi bilan', 'Soat bilan', 'Banka bilan'], a: 0 },
            { q: 'Santimetrning qisqa yozilishi?', o: ['cm', 'kg', 'l', 'dm'], a: 0 },
            { q: 'Kesma 2 dan 9 gacha. Uzunligi?', o: ['7 cm', '9 cm', '11 cm', '2 cm'], a: 0 },
            { q: '15 cm + 8 cm = ?', o: ['23 cm', '7 cm', '22 cm', '158 cm'], a: 0 }
          ] },

        { id: 't16', lessons: '32–34-darslar', title: 'Santimetr va detsimetr', keys: ['detsimetr (dm)', '1 dm = 10 cm'],
          scene: [{ obj: 'cube', n: 5, color: 'cyan' }],
          explain: '10 ta santimetrni birlashtirsak, yangi katta birlik hosil bo‘ladi — <b>detsimetr</b> (<b>dm</b>). Kaftingiz eni taxminan 1 dm! 17 cm = 1 dm 7 cm, chunki 17 da 1 ta o‘nlik va 7 ta birlik bor.',
          rule: '<b>1 dm = 10 cm</b><br>2 dm = 20 cm · 3 dm 5 cm = 35 cm',
          acts: [
            { type: 'ruler', title: 'Detsimetr va santimetrga ajrating', mode: 'dmcm', make: function (R) { var l = R(11, 29); return { len: l, start: 0, max: 30, story: 'Lenta uzunligi <b>' + l + ' cm</b>. Uni detsimetr va santimetrda yozing.' }; } },
            { type: 'drill', title: 'Aylantiring', make: function (R) { var dm = R(1, 9), cm = R(0, 9); return R(0, 1) ? { q: dm + ' dm ' + cm + ' cm (cm da)', a: dm * 10 + cm, unit: 'cm' } : { q: dm + ' dm (cm da)', a: dm * 10, unit: 'cm' }; } },
            { type: 'choose', title: 'Taqqoslang', icon: '📐', make: function (R) {
              var dm = R(1, 6), cm = R(dm * 10 - 8, dm * 10 + 8); if (cm === dm * 10) cm += 3;
              return choice('<span class="kd-big">' + dm + ' dm ◻ ' + cm + ' cm</span>', ['&gt;', '&lt;', '='], dm * 10 > cm ? 0 : 1);
            } }
          ],
          quiz: [
            { q: '1 dm = ?', o: ['10 cm', '100 cm', '1 cm', '5 cm'], a: 0 },
            { q: '4 dm = ?', o: ['40 cm', '4 cm', '14 cm', '400 cm'], a: 0 },
            { q: '35 cm = ?', o: ['3 dm 5 cm', '5 dm 3 cm', '35 dm', '3 dm'], a: 0 },
            { q: '6 dm va 58 cm. Qaysi uzun?', o: ['6 dm', '58 cm', 'Teng'], a: 0 }
          ] },

        { id: 't17', lessons: '35–36-darslar', title: 'Massa va massa birliklari', keys: ['massa', 'kilogramm (kg)', 'tarozi'],
          scene: [{ obj: 'weight', n: 3 }, { obj: 'apple', n: 3, color: 'red' }],
          explain: 'Narsaning qanchalik <b>og‘ir</b>ligini <b>massa</b> deymiz. Massani <b>tarozi</b>da tortamiz. Massa birligi — <b>kilogramm</b> (<b>kg</b>). Pallali tarozi <b>muvozanat</b>ga kelsa, ikki palladagi massalar teng bo‘ladi.',
          rule: 'Tarozi muvozanatda → <b>chap = o‘ng</b>.<br>Masalan: tarvuz = 2 kg + 5 kg = <b>7 kg</b>.',
          acts: [
            { type: 'scale', title: 'Tarvuzni torting', make: function (R) { var m = R(3, 15); return { mass: m, obj: '🍉', story: 'Chap pallada tarvuz. O‘ng pallaga toshlar qo‘yib, tarozini muvozanatga keltiring. <b>Tarvuz necha kg?</b>' }; } },
            { type: 'scale', title: 'Qovunni torting', make: function (R) { var m = R(2, 9); return { mass: m, obj: '🍈', story: 'Qovunning massasini toping.' }; } },
            { type: 'problem', make: whole({ a: [5, 30], b: [5, 30], u: 'kg', labels: ['olma', 'nok'], cond: ['Olma', 'Nok'],
              text: function (a, b) { return 'Do‘konga <b>' + a + '</b> kg olma va <b>' + b + '</b> kg nok keltirildi. <u>Jami necha kg</u> meva keltirildi?'; } }) }
          ],
          quiz: [
            { q: 'Massa nima bilan o‘lchanadi?', o: ['Tarozi bilan', 'Chizg‘ich bilan', 'Soat bilan', 'Termometr bilan'], a: 0 },
            { q: 'Massa birligi?', o: ['kg', 'cm', 'l', 'dm'], a: 0 },
            { q: 'Tarozida: qovun = 2 kg + 1 kg. Qovun?', o: ['3 kg', '21 kg', '1 kg', '2 kg'], a: 0 },
            { q: '12 kg + 8 kg = ?', o: ['20 kg', '4 kg', '18 kg', '128 kg'], a: 0 }
          ] },

        { id: 't18', lessons: '37–38-darslar', title: 'Hajm va hajm birliklari', keys: ['hajm', 'litr (l)', 'idish'],
          scene: [{ obj: 'bucket', n: 3, color: 'blue' }],
          explain: 'Idishga qancha suv sig‘ishini <b>hajm</b> (sig‘im) deymiz. Hajm birligi — <b>litr</b> (<b>l</b>). Chelakka 1 litrli bankada suv quyib sanasak, chelak hajmini bilib olamiz.',
          rule: 'Chelakka 1 l li bankadan 8 marta quyildi → <b>chelak hajmi 8 l</b>.',
          acts: [
            { type: 'jugs', title: 'Chelakni to‘ldiring', make: function (R) { var c = R(3, 10); return { cap: c, story: 'Bankani bosib, chelakni to‘ldiring. <b>Chelakka necha litr</b> suv sig‘adi?' }; } },
            { type: 'problem', make: part({ c: [10, 40], a: [2, 15], u: 'l', labels: ['ishlatildi', 'qoldi'], cond: ['Ishlatildi', 'Qoldi'],
              text: function (c, a) { return 'Bochkada <b>' + c + '</b> l suv bor edi. Gullarni sug‘orishga <b>' + a + '</b> l ishlatildi. Bochkada <u>necha litr suv qoldi</u>?'; } }) },
            { type: 'drill', title: 'Litrlar bilan hisoblang', make: function (R) { var a = R(5, 60), b = R(1, 30); return R(0, 1) ? { q: a + ' l + ' + b + ' l', a: a + b, unit: 'l' } : { q: (a + b) + ' l − ' + b + ' l', a: a, unit: 'l' }; } }
          ],
          quiz: [
            { q: 'Hajm birligi?', o: ['litr (l)', 'kilogramm', 'santimetr', 'detsimetr'], a: 0 },
            { q: 'Chelakka 1 l li banka bilan 6 marta quyildi. Hajmi?', o: ['6 l', '1 l', '7 l', '16 l'], a: 0 },
            { q: '30 l + 12 l = ?', o: ['42 l', '18 l', '32 l', '312 l'], a: 0 }
          ] },

        { id: 't19', lessons: '39–42-darslar', title: 'Kattaliklar va ularning xossalari', keys: ['uzunlik (cm, dm)', 'massa (kg)', 'hajm (l)'],
          scene: [{ obj: 'pencil', n: 2, color: 'orange' }, { obj: 'weight', n: 1 }, { obj: 'bucket', n: 1, color: 'cyan' }],
          explain: 'Uzunlik, massa va hajm — <b>kattaliklar</b>. Ularni qo‘shish va ayirish mumkin, lekin <b>faqat bir xil birlikdagilarni</b>: santimetrni santimetrga, kilogrammni kilogrammga!',
          rule: '<b>cm, dm</b> — uzunlik · <b>kg</b> — massa · <b>l</b> — hajm.<br>5 kg + 3 kg = 8 kg ✔︎ · 5 kg + 3 cm — ✘ (qo‘shib bo‘lmaydi)',
          acts: [
            { type: 'choose', title: 'Qaysi birlik mos?', icon: '🧪', make: function (R) {
              return K().pick([
                choice('Tarvuzning <b>massasi</b> qanday birlikda o‘lchanadi?', ['kg', 'cm', 'l'], 0),
                choice('Choynakka sig‘adigan <b>suv</b> qanday birlikda o‘lchanadi?', ['l', 'kg', 'dm'], 0),
                choice('Qalamning <b>uzunligi</b> qanday birlikda o‘lchanadi?', ['cm', 'kg', 'l'], 0),
                choice('Partaning <b>uzunligi</b> uchun qaysi birlik qulay?', ['dm', 'kg', 'l'], 0)
              ]);
            } },
            { type: 'table', title: 'Kattaliklar jadvali (cm)', kind: 'sum', max: 90, unit: 'cm', cols: 4 },
            { type: 'problem', make: less({ a: [20, 60], d: [5, 15], u: 'cm', who: ['Jo‘va', 'Pichoq'],
              text: function (a, d) { return 'Jo‘vaning uzunligi <b>' + a + '</b> cm. Pichoq jo‘vadan <b>' + d + '</b> cm qisqa. <u>Pichoqning uzunligi</u> necha santimetr?'; } }) }
          ],
          quiz: [
            { q: 'Qaysilarini qo‘shish mumkin?', o: ['5 kg va 3 kg', '5 kg va 3 cm', '5 l va 3 kg', '5 cm va 3 l'], a: 0 },
            { q: 'Qaysi biri uzunlik birligi?', o: ['dm', 'kg', 'l', 'soat'], a: 0 },
            { q: '60 l − 30 l = ?', o: ['30 l', '90 l', '3 l', '20 l'], a: 0 },
            { q: '50 cm + 8 dm (cm da)?', o: ['130 cm', '58 cm', '508 cm', '13 cm'], a: 0 }
          ] }
      ] }
    ]
  };

  function K() { return root.NMKids || { pick: function (a) { return a[Math.floor(Math.random() * a.length)]; } }; }
  if (C) C.addPart(part3);
  else if (typeof module !== 'undefined') module.exports = part3;
})(this);
