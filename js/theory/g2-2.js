// Nuvemath — 2-sinf, II qism nazariyasi. Format: js/theory/GUIDE.md
(function (root) {
  'use strict';
  var L = root.NMCurriculum.H.L, T = root.NMTheory, P = '2-2';

  // ---------- t1. Yuzlik. Yuzliklar bilan hisoblash ----------
  T.add(P, 't1', { sections: [
    { kind: 'intro', h: L('Yuzlar olamiga xush kelibsiz!', 'Добро пожаловать в мир сотен!', 'Welcome to the world of hundreds!'), p: [
      L('Salom, do‘stim! O‘tgan qismda biz 100 gacha sanashni o‘rgandik. Endi oldimizda yangi, kattaroq olam turibdi — <b>yuzliklar</b> olami. Tasavvur qiling: maktab kutubxonasida 300 ta kitob, stadionda 800 ta o‘rindiq, do‘konda bir kilogramm olma 900 so‘m. Bu sonlarning hammasi yuzliklar bilan aytiladi.', 'Привет, друг! В прошлой части мы научились считать до 100. Теперь перед нами новый, больший мир — мир <b>сотен</b>. Представь: в школьной библиотеке 300 книг, на стадионе 800 мест, в магазине килограмм яблок стоит 900 сумов. Все эти числа называют сотнями.', 'Hello, friend! In the last part we learned to count to 100. Now a new, bigger world is in front of us: the world of <b>hundreds</b>. Imagine: the school library has 300 books, the stadium has 800 seats, a kilogram of apples in the shop costs 900 soms. All these numbers are said in hundreds.'),
      L('Yuzlik — bu juda qulay «paket». Agar 100 ta kubchani bitta katta plitaga yopishtirsak, uni sanash oson bo‘ladi: bitta plita, ikkita plita, uchta plita… Sahnadagi yashil plita aynan shunday — uning ichida 100 ta kichik kubcha bor.', 'Сотня — это очень удобная «упаковка». Если склеить 100 кубиков в одну большую плиту, считать становится легко: одна плита, две плиты, три плиты… Зелёная плита на сцене именно такая — внутри неё 100 маленьких кубиков.', 'A hundred is a very handy “package”. If we glue 100 small cubes into one big plate, counting becomes easy: one plate, two plates, three plates… The green plate on the stage is exactly that; inside it there are 100 little cubes.'),
      L('Bu mavzuda biz yuzliklarni sanashni, ularni qo‘shish va ayirishni o‘rganamiz. Ko‘rasiz: 300 + 200 ni hisoblash 3 + 2 ni hisoblashdan qiyin emas!', 'В этой теме мы научимся считать сотнями, складывать и вычитать их. Увидишь: посчитать 300 + 200 не сложнее, чем 3 + 2!', 'In this topic we will learn to count in hundreds and to add and subtract them. You will see: working out 300 + 200 is no harder than 3 + 2!')
    ] },
    { kind: 'def', h: L('Yuzlik nima?', 'Что такое сотня?', 'What is a hundred?'), p: [
      L('Eslang: 10 ta birlik birlashsa — <b>1 o‘nlik</b> hosil bo‘ladi. Xuddi shunday, 10 ta o‘nlik birlashsa — <b>1 yuzlik</b> hosil bo‘ladi. Yuzlik 100 deb yoziladi: birinchi raqam 1, keyin ikkita nol.', 'Вспомни: 10 единиц вместе дают <b>1 десяток</b>. Точно так же 10 десятков вместе дают <b>1 сотню</b>. Сотня записывается как 100: сначала цифра 1, потом два нуля.', 'Remember: 10 ones together make <b>1 ten</b>. In the same way, 10 tens together make <b>1 hundred</b>. A hundred is written as 100: the digit 1 first, then two zeros.')
    ], list: [
      L('<b>Birlik</b> — bitta kubcha. 1.', '<b>Единица</b> — один кубик. 1.', '<b>One</b> — a single cube. 1.'),
      L('<b>O‘nlik</b> — 10 ta kubchadan yasalgan tayoqcha. 10.', '<b>Десяток</b> — палочка из 10 кубиков. 10.', '<b>Ten</b> — a rod made of 10 cubes. 10.'),
      L('<b>Yuzlik</b> — 10 ta tayoqchadan yasalgan plita. 100.', '<b>Сотня</b> — плита из 10 палочек. 100.', '<b>Hundred</b> — a plate made of 10 rods. 100.')
    ], after: [
      L('Yuzliklarni sanaymiz: bir yuz, ikki yuz, uch yuz, to‘rt yuz, besh yuz, olti yuz, yetti yuz, sakkiz yuz, to‘qqiz yuz. Yozuvda: 100, 200, 300, 400, 500, 600, 700, 800, 900. Har bir sonda birinchi raqam yuzliklar sonini, ikkita nol esa bo‘sh o‘nlik va birlik xonalarini bildiradi.', 'Считаем сотнями: сто, двести, триста, четыреста, пятьсот, шестьсот, семьсот, восемьсот, девятьсот. На письме: 100, 200, 300, 400, 500, 600, 700, 800, 900. В каждом числе первая цифра показывает число сотен, а два нуля — пустые разряды десятков и единиц.', 'Count in hundreds: one hundred, two hundred, three hundred, four hundred, five hundred, six hundred, seven hundred, eight hundred, nine hundred. In writing: 100, 200, 300, 400, 500, 600, 700, 800, 900. In each number the first digit shows how many hundreds, and the two zeros show the empty tens and ones places.'),
      L('10 ta yuzlik birlashsa, <b>ming</b> hosil bo‘ladi — 1000. Bu bizning qismdagi eng katta son, unga yetib boramiz!', 'Если собрать 10 сотен, получится <b>тысяча</b> — 1000. Это самое большое число в нашей части, и мы до него доберёмся!', 'If we gather 10 hundreds we get a <b>thousand</b>: 1000. It is the biggest number in this part, and we will reach it!')
    ] },
    { kind: 'history', h: L('Yuz raqami tarixdan', 'Число сто в истории', 'One hundred in history'), p: [
      L('Qadimgi Misrda, bundan 4 ming yil oldin, har bir son uchun alohida belgi bo‘lgan. Birlik — kichik tayoqcha, o‘nlik — taqa shakli, yuzlik esa — o‘ralgan arqon rasmi. 300 ni yozish uchun misrliklar uchta arqon chizishgan.', 'В Древнем Египте, 4 тысячи лет назад, для каждого разряда был свой знак. Единица — чёрточка, десяток — подкова, а сотня — свёрнутая верёвка. Чтобы записать 300, египтяне рисовали три верёвки.', 'In Ancient Egypt, 4 000 years ago, each place had its own sign. A one was a small stroke, a ten was a horseshoe shape, and a hundred was a coiled rope. To write 300 the Egyptians drew three ropes.'),
      L('Qadimgi Rimda yuzlik <b>C</b> harfi bilan belgilangan — lotincha «centum», ya’ni «yuz» so‘zidan. Hozir ham «santimetr» so‘zida shu ildiz bor: 1 metrda 100 santimetr!', 'В Древнем Риме сотню обозначали буквой <b>C</b> — от латинского «centum», то есть «сто». И сегодня это слово живёт в «сантиметре»: в 1 метре — 100 сантиметров!', 'In Ancient Rome a hundred was the letter <b>C</b>, from the Latin word “centum”, meaning “hundred”. The same root lives in “centimetre”: there are 100 centimetres in 1 metre!'),
      L('Biz hozir ishlatadigan 0, 1, 2 … 9 raqamlari Hindistonda paydo bo‘lgan. Ularni butun dunyoga buyuk vatandoshimiz <b>Muhammad al-Xorazmiy</b> (taxminan 783–850) o‘z kitobida tushuntirib bergan. Uning tufayli 300 ni uchta arqon emas, faqat uchta raqam bilan yozamiz.', 'Цифры 0, 1, 2 … 9, которыми мы пользуемся, появились в Индии. Всему миру их объяснил в своей книге наш великий земляк <b>Мухаммад аль-Хорезми</b> (около 783–850). Благодаря ему мы пишем 300 не тремя верёвками, а всего тремя цифрами.', 'The digits 0, 1, 2 … 9 that we use today appeared in India. Our great countryman <b>Muhammad al-Khwarizmi</b> (about 783–850) explained them to the whole world in his book. Thanks to him we write 300 with just three digits instead of three ropes.')
    ] },
    { kind: 'rule', h: L('Yuzliklar bilan hisoblash qoidasi', 'Правило счёта сотнями', 'The rule for counting in hundreds'), p: [
      L('Yuzliklarni qo‘shish va ayirish juda oson. Sir shundaki, yuzliklarni xuddi oddiy birliklar kabi sanaymiz:', 'Складывать и вычитать сотни очень легко. Секрет в том, что сотни считаем точно так же, как простые единицы:', 'Adding and subtracting hundreds is very easy. The secret is that we count hundreds just like ordinary ones:')
    ], list: [
      L('3 + 2 = 5, demak <b>3 yuzlik + 2 yuzlik = 5 yuzlik</b>, ya’ni 300 + 200 = 500.', '3 + 2 = 5, значит <b>3 сотни + 2 сотни = 5 сотен</b>, то есть 300 + 200 = 500.', '3 + 2 = 5, so <b>3 hundreds + 2 hundreds = 5 hundreds</b>, that is 300 + 200 = 500.'),
      L('7 − 4 = 3, demak <b>7 yuzlik − 4 yuzlik = 3 yuzlik</b>, ya’ni 700 − 400 = 300.', '7 − 4 = 3, значит <b>7 сотен − 4 сотни = 3 сотни</b>, то есть 700 − 400 = 300.', '7 − 4 = 3, so <b>7 hundreds − 4 hundreds = 3 hundreds</b>, that is 700 − 400 = 300.'),
      L('Nollar o‘z joyida qoladi: avval birinchi raqamlarni hisoblang, keyin ikkita nolni qo‘shib yozing.', 'Нули остаются на своём месте: сначала посчитай первые цифры, потом припиши два нуля.', 'The zeros stay where they are: first work with the first digits, then write the two zeros after the answer.')
    ], after: [
      L('Qoida: <b>yuzliklarni birliklar kabi qo‘shamiz va ayiramiz, javobga ikkita nol yozamiz.</b> Faqat bir narsani unutmang: javob 1000 dan oshmasligi kerak, chunki 10 yuzlik — bu ming.', 'Правило: <b>сотни складываем и вычитаем как единицы, а к ответу приписываем два нуля.</b> Только не забудь: ответ не должен быть больше 1000, потому что 10 сотен — это тысяча.', 'The rule: <b>add and subtract hundreds like ones, then write two zeros after the answer.</b> Just remember: the answer must not be more than 1000, because 10 hundreds is a thousand.')
    ] },
    { kind: 'steps', h: L('Qadamma-qadam: 600 − 200', 'Шаг за шагом: 600 − 200', 'Step by step: 600 − 200'), p: [
      L('Keling, bitta misolni sekin, bosqichma-bosqich yechamiz.', 'Давай решим один пример медленно, по шагам.', 'Let us solve one example slowly, step by step.')
    ], list: [
      L('1-qadam. Har bir sonda nechta yuzlik borligini aniqlang: 600 — bu 6 yuzlik, 200 — bu 2 yuzlik.', 'Шаг 1. Определи, сколько сотен в каждом числе: 600 — это 6 сотен, 200 — это 2 сотни.', 'Step 1. Find how many hundreds are in each number: 600 is 6 hundreds, 200 is 2 hundreds.'),
      L('2-qadam. Yuzliklar sonini hisoblang: 6 − 2 = 4.', 'Шаг 2. Посчитай число сотен: 6 − 2 = 4.', 'Step 2. Work with the number of hundreds: 6 − 2 = 4.'),
      L('3-qadam. Javob — 4 yuzlik. Uni yozing: 400.', 'Шаг 3. Ответ — 4 сотни. Запиши: 400.', 'Step 3. The answer is 4 hundreds. Write it: 400.'),
      L('4-qadam. Tekshiring: 400 + 200 = 600 ✓.', 'Шаг 4. Проверь: 400 + 200 = 600 ✓.', 'Step 4. Check: 400 + 200 = 600 ✓.')
    ], after: [
      L('Qo‘shishda ham xuddi shunday: 300 + 400 → 3 + 4 = 7 → 700. Plitalar bilan tasavvur qiling: uchta yashil plitaga to‘rtta yashil plita qo‘shsangiz, yettita plita bo‘ladi.', 'При сложении так же: 300 + 400 → 3 + 4 = 7 → 700. Представь плиты: к трём зелёным плитам добавили четыре — стало семь плит.', 'Adding works the same way: 300 + 400 → 3 + 4 = 7 → 700. Picture the plates: add four green plates to three green plates and you have seven plates.')
    ] },
    { kind: 'example', h: L('Yechilgan namunalar', 'Разобранные примеры', 'Worked examples'), p: [
      L('Avval o‘zingiz yeching, keyin javobni oching.', 'Сначала реши сам, потом открой ответ.', 'Solve it yourself first, then open the answer.')
    ], ex: [
      { q: L('200 + 500 = ?', '200 + 500 = ?', '200 + 500 = ?'), s: L('2 yuzlik + 5 yuzlik = 7 yuzlik. Javob: <b>700</b>.', '2 сотни + 5 сотен = 7 сотен. Ответ: <b>700</b>.', '2 hundreds + 5 hundreds = 7 hundreds. Answer: <b>700</b>.') },
      { q: L('900 − 300 = ?', '900 − 300 = ?', '900 − 300 = ?'), s: L('9 yuzlik − 3 yuzlik = 6 yuzlik. Javob: <b>600</b>. Tekshiramiz: 600 + 300 = 900 ✓.', '9 сотен − 3 сотни = 6 сотен. Ответ: <b>600</b>. Проверка: 600 + 300 = 900 ✓.', '9 hundreds − 3 hundreds = 6 hundreds. Answer: <b>600</b>. Check: 600 + 300 = 900 ✓.') },
      { q: L('Do‘konda 400 ta daftar bor edi. Yana 300 ta keltirildi. Jami nechta daftar bo‘ldi?', 'В магазине было 400 тетрадей. Привезли ещё 300. Сколько тетрадей стало?', 'A shop had 400 notebooks. 300 more were delivered. How many notebooks are there now?'), s: L('Bor edi — 4 yuzlik, keltirildi — 3 yuzlik. 4 + 3 = 7. Javob: <b>700 ta daftar</b>.', 'Было 4 сотни, привезли 3 сотни. 4 + 3 = 7. Ответ: <b>700 тетрадей</b>.', 'There were 4 hundreds, 3 hundreds arrived. 4 + 3 = 7. Answer: <b>700 notebooks</b>.') },
      { q: L('1000 − 100 = ?', '1000 − 100 = ?', '1000 − 100 = ?'), s: L('1000 — bu 10 yuzlik. 10 − 1 = 9. Javob: <b>900</b>.', '1000 — это 10 сотен. 10 − 1 = 9. Ответ: <b>900</b>.', '1000 is 10 hundreds. 10 − 1 = 9. Answer: <b>900</b>.') },
      { q: L('100 + 200 + 300 = ?', '100 + 200 + 300 = ?', '100 + 200 + 300 = ?'), s: L('1 + 2 + 3 = 6 yuzlik. Javob: <b>600</b>.', '1 + 2 + 3 = 6 сотен. Ответ: <b>600</b>.', '1 + 2 + 3 = 6 hundreds. Answer: <b>600</b>.') }
    ] },
    { kind: 'table', h: L('Yuzliklar jadvali', 'Таблица сотен', 'Table of hundreds'), p: [
      L('Jadvalda har bir yuzlikning nomi va u nechta o‘nlik hamda birlikdan iboratligi ko‘rsatilgan. Diqqat bilan qarang: o‘nliklar soni yuzliklar sonidan 10 marta katta.', 'В таблице показано название каждой сотни и сколько в ней десятков и единиц. Посмотри внимательно: десятков в 10 раз больше, чем сотен.', 'The table shows the name of each hundred and how many tens and ones it contains. Look carefully: the number of tens is 10 times the number of hundreds.')
    ], table: { head: [L('Son', 'Число', 'Number'), L('Nomi', 'Название', 'Name'), L('Yuzliklar', 'Сотен', 'Hundreds'), L('O‘nliklar', 'Десятков', 'Tens'), L('Birliklar', 'Единиц', 'Ones')], rows: [
      ['100', L('bir yuz', 'сто', 'one hundred'), '1', '10', '100'],
      ['200', L('ikki yuz', 'двести', 'two hundred'), '2', '20', '200'],
      ['300', L('uch yuz', 'триста', 'three hundred'), '3', '30', '300'],
      ['500', L('besh yuz', 'пятьсот', 'five hundred'), '5', '50', '500'],
      ['900', L('to‘qqiz yuz', 'девятьсот', 'nine hundred'), '9', '90', '900'],
      ['1000', L('ming', 'тысяча', 'one thousand'), '10', '100', '1000']
    ] }, after: [
      L('Savol: 700 da nechta o‘nlik bor? Jadval qoidasi bo‘yicha — 70 ta. Nechta birlik? 700 ta.', 'Вопрос: сколько десятков в 700? По правилу таблицы — 70. А единиц? 700.', 'Question: how many tens are in 700? By the table’s rule, 70. How many ones? 700.')
    ] },
    { kind: 'mistake', h: L('Tipik xatolar', 'Типичные ошибки', 'Common mistakes'), p: [
      L('Yuzliklar bilan ishlaganda bolalar ko‘pincha shunday xatolarga yo‘l qo‘yadi:', 'Работая с сотнями, дети часто ошибаются вот так:', 'When working with hundreds, children often make these mistakes:')
    ], list: [
      L('<b>Nollarni unutish.</b> 300 + 200 = 5 — noto‘g‘ri! 5 yuzlik — bu 500. Javobga ikkita nolni albatta yozing.', '<b>Забывать нули.</b> 300 + 200 = 5 — неверно! 5 сотен — это 500. Обязательно припиши два нуля.', '<b>Forgetting the zeros.</b> 300 + 200 = 5 is wrong! 5 hundreds is 500. Always write the two zeros.'),
      L('<b>Ortiqcha nol yozish.</b> 300 + 200 = 5000 — bu ham xato. Ikkita yuzlikni qo‘shsak, yana yuzlik chiqadi, ming emas.', '<b>Писать лишний ноль.</b> 300 + 200 = 5000 — тоже ошибка. Складывая сотни, получаем сотни, а не тысячи.', '<b>Writing an extra zero.</b> 300 + 200 = 5000 is also wrong. Adding hundreds gives hundreds, not thousands.'),
      L('<b>Yuzlik va o‘nlikni aralashtirish.</b> 300 + 20 ≠ 500. Bu yerda 20 — bu 2 o‘nlik, yuzlik emas. 300 + 20 = 320.', '<b>Путать сотни и десятки.</b> 300 + 20 ≠ 500. Здесь 20 — это 2 десятка, а не сотни. 300 + 20 = 320.', '<b>Mixing hundreds and tens.</b> 300 + 20 ≠ 500. Here 20 is 2 tens, not hundreds. 300 + 20 = 320.'),
      L('<b>1000 ni unutish.</b> 600 + 400 = 10 yuzlik = <b>1000</b>, «100» emas.', '<b>Забывать про 1000.</b> 600 + 400 = 10 сотен = <b>1000</b>, а не «100».', '<b>Forgetting 1000.</b> 600 + 400 = 10 hundreds = <b>1000</b>, not “100”.')
    ] },
    { kind: 'life', h: L('Hayotda yuzliklar', 'Сотни в жизни', 'Hundreds in everyday life'), p: [
      L('<b>Do‘konda.</b> Bir dona non 900 so‘m, bir shisha suv 500 so‘m. O‘zbekistonda 100, 200, 500 so‘mlik tangalar bor — ular bilan yuzliklarni qo‘shish juda qulay: 500 + 200 + 200 = 900.', '<b>В магазине.</b> Лепёшка стоит 900 сумов, бутылка воды — 500 сумов. В Узбекистане есть монеты в 100, 200 и 500 сумов — ими очень удобно складывать сотни: 500 + 200 + 200 = 900.', '<b>At the shop.</b> A loaf of bread costs 900 soms, a bottle of water 500 soms. Uzbekistan has coins of 100, 200 and 500 soms; adding hundreds with them is easy: 500 + 200 + 200 = 900.'),
      L('<b>Sportda.</b> Stadiondagi yugurish yo‘lakchasi 400 metr. Ikki marta aylansangiz — 800 metr. Suzuvchilar 100, 200, 400 metrga musobaqalashadi.', '<b>В спорте.</b> Беговая дорожка стадиона — 400 метров. Пробежал два круга — 800 метров. Пловцы соревнуются на 100, 200 и 400 метров.', '<b>In sport.</b> A running track is 400 metres long. Run it twice and you have done 800 metres. Swimmers race over 100, 200 and 400 metres.'),
      L('<b>Maktabda.</b> Kutubxonada 300 ta ertak kitobi va 200 ta she’r kitobi bo‘lsa, jami 500 ta kitob. O‘quv yili taxminan 200 kun davom etadi.', '<b>В школе.</b> Если в библиотеке 300 книг сказок и 200 книг стихов, всего 500 книг. Учебный год длится около 200 дней.', '<b>At school.</b> If the library has 300 fairy-tale books and 200 poetry books, that is 500 books in total. A school year lasts about 200 days.'),
      L('<b>Yo‘lda.</b> Toshkentdan Samarqandgacha taxminan 300 km, Buxorogacha esa 600 km. Yuzliklarni bilsangiz, xaritadagi masofalarni o‘qiy olasiz.', '<b>В дороге.</b> От Ташкента до Самарканда около 300 км, до Бухары — 600 км. Зная сотни, ты сможешь читать расстояния на карте.', '<b>On the road.</b> From Tashkent to Samarkand is about 300 km, to Bukhara about 600 km. Knowing hundreds lets you read distances on a map.')
    ] },
    { kind: 'fact', h: L('Qiziqarli faktlar', 'Интересные факты', 'Fun facts'), list: [
      L('«Asr» so‘zi 100 yilni bildiradi. Biz hozir <b>XXI asrda</b> yashayapmiz — bu 2001-yildan 2100-yilgacha.', 'Слово «век» означает 100 лет. Мы живём в <b>XXI веке</b> — с 2001 по 2100 год.', 'The word “century” means 100 years. We live in the <b>21st century</b>, which runs from 2001 to 2100.'),
      L('Qirqoyoq (ko‘poyoq) nomida «100» bor, lekin aslida uning oyoqlari 30 dan 350 tagacha bo‘lishi mumkin!', 'В названии сороконожки «спрятано» число, но на самом деле у неё бывает от 30 до 350 ног!', 'A centipede’s name means “100 feet”, but it can actually have anywhere from 30 to 350 legs!'),
      L('Fil kuniga taxminan 100–150 kg o‘simlik yeydi. Ko‘k kit esa dunyodagi eng katta jonivor — uzunligi 30 metrgacha, og‘irligi 100 tonnadan oshadi.', 'Слон съедает в день примерно 100–150 кг растений. А синий кит — самое большое животное: длина до 30 метров, масса больше 100 тонн.', 'An elephant eats about 100–150 kg of plants a day. The blue whale is the largest animal: up to 30 metres long and over 100 tonnes.'),
      L('100 gacha sekin sanasangiz, taxminan 1 minut o‘tadi. 1000 gacha sanash uchun esa 10 minutdan ko‘proq kerak!', 'Если медленно считать до 100, пройдёт примерно 1 минута. А чтобы досчитать до 1000, нужно больше 10 минут!', 'If you count slowly to 100, about 1 minute passes. Counting to 1000 takes more than 10 minutes!')
    ] },
    { kind: 'practice', h: L('O‘ylab ko‘ring', 'Подумай', 'Think about it'), p: [
      L('Javob berishdan oldin «nechta yuzlik?» deb so‘rang.', 'Перед ответом спроси себя: «сколько сотен?»', 'Before answering, ask yourself “how many hundreds?”')
    ], list: [
      L('500 + 300 = ? 800 − 500 = ? 1000 − 400 = ?', '500 + 300 = ? 800 − 500 = ? 1000 − 400 = ?', '500 + 300 = ? 800 − 500 = ? 1000 − 400 = ?'),
      L('Qaysi son katta: 7 yuzlik yoki 70 o‘nlik?', 'Какое число больше: 7 сотен или 70 десятков?', 'Which is bigger: 7 hundreds or 70 tens?'),
      L('Dadam 1000 so‘m berdi. Men 600 so‘mga qalam oldim. Necha so‘m qoldi?', 'Папа дал 1000 сумов. Я купил карандаш за 600 сумов. Сколько сумов осталось?', 'Dad gave me 1000 soms. I bought a pencil for 600 soms. How many soms are left?'),
      L('100 dan 1000 gacha yuzliklab sanang: 100, 200, … Keyin teskarisiga: 1000, 900, …', 'Посчитай сотнями от 100 до 1000: 100, 200, … Потом обратно: 1000, 900, …', 'Count in hundreds from 100 to 1000: 100, 200, … Then backwards: 1000, 900, …')
    ], after: [
      L('Javoblar: 800, 300, 600. Ikkinchi savol: ular teng — 70 o‘nlik ham 700. Uchinchi: 1000 − 600 = 400 so‘m.', 'Ответы: 800, 300, 600. Второй вопрос: они равны — 70 десятков тоже 700. Третий: 1000 − 600 = 400 сумов.', 'Answers: 800, 300, 600. Second question: they are equal, since 70 tens is also 700. Third: 1000 − 600 = 400 soms.')
    ] },
    { kind: 'summary', h: L('Xulosa', 'Итог', 'Summary'), list: [
      L('10 ta o‘nlik = <b>1 yuzlik</b> = 100.', '10 десятков = <b>1 сотня</b> = 100.', '10 tens = <b>1 hundred</b> = 100.'),
      L('Yuzliklar: 100, 200, 300 … 900. 10 yuzlik = 1000 (ming).', 'Сотни: 100, 200, 300 … 900. 10 сотен = 1000 (тысяча).', 'Hundreds: 100, 200, 300 … 900. 10 hundreds = 1000 (a thousand).'),
      L('Yuzliklarni birliklar kabi qo‘shamiz va ayiramiz, javobga ikkita nol yozamiz.', 'Сотни складываем и вычитаем как единицы, к ответу приписываем два нуля.', 'Add and subtract hundreds like ones, then write two zeros after the answer.'),
      L('300 + 200 = 500, 700 − 400 = 300.', '300 + 200 = 500, 700 − 400 = 300.', '300 + 200 = 500, 700 − 400 = 300.'),
      L('Yuzlikni o‘nlik bilan aralashtirmang: 300 + 20 = 320.', 'Не путай сотни с десятками: 300 + 20 = 320.', 'Don’t mix hundreds with tens: 300 + 20 = 320.'),
      L('Yuzliklar pulda, sportda, xaritada — hamma joyda uchraydi.', 'Сотни встречаются везде: в деньгах, спорте, на карте.', 'Hundreds are everywhere: in money, sport and on maps.')
    ] }
  ] });

  // ---------- t2. Uch xonali sonlarning nomlanishi va yozilishi ----------
  T.add(P, 't2', { sections: [
    { kind: 'intro', h: L('Uchta raqam — bitta son', 'Три цифры — одно число', 'Three digits, one number'), p: [
      L('Yuzliklarni o‘rgandik. Lekin hayotda sonlar faqat 100, 200, 300 bo‘lmaydi. Kitobda 245 sahifa, avtobusda 37-marshrut emas, 137-marshrut, sinfda 28 emas, uyda 128-xonadon… Bunday sonlar <b>uch xonali</b> deb ataladi, chunki ular uchta raqamdan iborat.', 'Сотни мы изучили. Но в жизни числа — не только 100, 200, 300. В книге 245 страниц, автобус идёт по маршруту 137, в доме квартира 128… Такие числа называются <b>трёхзначными</b>, потому что состоят из трёх цифр.', 'We have learned hundreds. But in real life numbers are not only 100, 200, 300. A book has 245 pages, the bus is route 137, the flat is number 128… Such numbers are called <b>three-digit numbers</b>, because they are made of three digits.'),
      L('Uch xonali sonda har bir raqam o‘z o‘rnida turadi va o‘z vazifasini bajaradi. Birinchi raqam yuzliklarni, ikkinchisi o‘nliklarni, uchinchisi birliklarni ko‘rsatadi. Xuddi uch qavatli uydagi kabi: har bir qavatda o‘z aholisi yashaydi.', 'В трёхзначном числе каждая цифра стоит на своём месте и выполняет свою работу. Первая показывает сотни, вторая — десятки, третья — единицы. Как в трёхэтажном доме: на каждом этаже живут свои жильцы.', 'In a three-digit number each digit has its own place and its own job. The first shows hundreds, the second tens, the third ones. It is like a three-storey house: each floor has its own residents.'),
      L('Bu mavzuda biz uch xonali sonlarni to‘g‘ri o‘qishni, yozishni va ularni xona qo‘shiluvchilariga ajratishni o‘rganamiz.', 'В этой теме мы научимся правильно читать и записывать трёхзначные числа и раскладывать их на разрядные слагаемые.', 'In this topic we learn to read and write three-digit numbers correctly and to split them into place-value parts.')
    ] },
    { kind: 'def', h: L('Xonalar: yuzlik, o‘nlik, birlik', 'Разряды: сотни, десятки, единицы', 'Places: hundreds, tens, ones'), p: [
      L('Sondagi raqamning o‘rni <b>xona</b> deb ataladi. Uch xonali sonda uchta xona bor. O‘ngdan chapga sanaymiz:', 'Место цифры в числе называется <b>разрядом</b>. В трёхзначном числе три разряда. Считаем справа налево:', 'The position of a digit in a number is called its <b>place</b>. A three-digit number has three places. We count from right to left:')
    ], list: [
      L('<b>Birliklar xonasi</b> — eng o‘ngdagi raqam. 345 sonida bu 5.', '<b>Разряд единиц</b> — самая правая цифра. В числе 345 это 5.', '<b>Ones place</b> — the rightmost digit. In 345 it is 5.'),
      L('<b>O‘nliklar xonasi</b> — o‘rtadagi raqam. 345 sonida bu 4, ya’ni 4 o‘nlik = 40.', '<b>Разряд десятков</b> — средняя цифра. В числе 345 это 4, то есть 4 десятка = 40.', '<b>Tens place</b> — the middle digit. In 345 it is 4, meaning 4 tens = 40.'),
      L('<b>Yuzliklar xonasi</b> — eng chapdagi raqam. 345 sonida bu 3, ya’ni 3 yuzlik = 300.', '<b>Разряд сотен</b> — самая левая цифра. В числе 345 это 3, то есть 3 сотни = 300.', '<b>Hundreds place</b> — the leftmost digit. In 345 it is 3, meaning 3 hundreds = 300.')
    ], after: [
      L('Demak, 345 = 300 + 40 + 5. Bu yozuv <b>xona qo‘shiluvchilari yig‘indisi</b> deb ataladi. Sonni o‘qiganda ham shu tartibda aytamiz: «uch yuz qirq besh».', 'Значит, 345 = 300 + 40 + 5. Такая запись называется <b>суммой разрядных слагаемых</b>. Читаем число в том же порядке: «триста сорок пять».', 'So 345 = 300 + 40 + 5. This is called the <b>sum of place-value parts</b>. We read the number in the same order: “three hundred and forty-five”.'),
      L('Eng kichik uch xonali son — 100, eng kattasi — 999. 99 dan keyin 100 keladi, 999 dan keyin esa 1000 — to‘rt xonali son.', 'Самое маленькое трёхзначное число — 100, самое большое — 999. После 99 идёт 100, а после 999 — 1000, уже четырёхзначное.', 'The smallest three-digit number is 100, the largest is 999. After 99 comes 100, and after 999 comes 1000, which has four digits.')
    ] },
    { kind: 'history', h: L('Nol qanday paydo bo‘lgan?', 'Как появился ноль?', 'How did zero appear?'), p: [
      L('Uch xonali sonlarni yozishda nol juda muhim: 305 va 35 — butunlay har xil sonlar! Lekin qadimda odamlar nolni bilmagan. Qadimgi Bobilda (bundan 4 ming yil oldin) bo‘sh xona o‘rniga shunchaki bo‘sh joy qoldirilgan, va bu ko‘p chalkashlik keltirib chiqargan.', 'При записи трёхзначных чисел ноль очень важен: 305 и 35 — совсем разные числа! Но в древности ноля не знали. В Древнем Вавилоне (4 тысячи лет назад) вместо пустого разряда просто оставляли пробел, и это вызывало много путаницы.', 'Zero is very important for writing three-digit numbers: 305 and 35 are completely different! But in ancient times people did not know zero. In ancient Babylon (4 000 years ago) they simply left a gap for an empty place, and that caused a lot of confusion.'),
      L('Nol belgisini birinchi bo‘lib hind olimlari o‘ylab topgan — taxminan 1500 yil oldin. Ular uni kichik doira shaklida chizgan va «shunya», ya’ni «bo‘shlik» deb atagan.', 'Знак ноль первыми придумали индийские учёные — примерно 1500 лет назад. Они рисовали его маленьким кружком и называли «шунья» — «пустота».', 'The symbol for zero was invented by Indian scholars about 1 500 years ago. They drew it as a small circle and called it “shunya”, meaning “emptiness”.'),
      L('Al-Xorazmiy o‘z kitobida nolni qanday ishlatishni tushuntirgan: «Agar xonada hech narsa bo‘lmasa, kichik doira qo‘ying, toki o‘rin bo‘sh qolmasin». Shu qoida tufayli biz 305 ni aniq va tushunarli yozamiz.', 'Аль-Хорезми в своей книге объяснил, как пользоваться нолём: «Если в разряде ничего нет, поставь маленький кружок, чтобы место не пустовало». Благодаря этому правилу мы пишем 305 ясно и понятно.', 'Al-Khwarizmi explained in his book how to use zero: “If there is nothing in a place, put a small circle so the place is not left empty.” Thanks to this rule we write 305 clearly.')
    ] },
    { kind: 'rule', h: L('Uch xonali sonni o‘qish va yozish qoidasi', 'Правило чтения и записи', 'The rule for reading and writing'), p: [
      L('Uch xonali sonni o‘qiganda avval yuzliklarni, keyin o‘nliklarni, oxirida birliklarni aytamiz:', 'Читая трёхзначное число, сначала называем сотни, потом десятки, в конце — единицы:', 'When reading a three-digit number we say the hundreds first, then the tens, then the ones:')
    ], list: [
      L('472 — <b>to‘rt yuz</b> yetmish ikki.', '472 — <b>четыреста</b> семьдесят два.', '472 — <b>four hundred</b> and seventy-two.'),
      L('610 — <b>olti yuz</b> o‘n. Birlik yo‘q, shuning uchun oxirida 0.', '610 — <b>шестьсот</b> десять. Единиц нет, поэтому в конце 0.', '610 — <b>six hundred</b> and ten. No ones, so there is a 0 at the end.'),
      L('805 — <b>sakkiz yuz</b> besh. O‘nlik yo‘q — o‘rtada 0.', '805 — <b>восемьсот</b> пять. Десятков нет — в середине 0.', '805 — <b>eight hundred</b> and five. No tens, so there is a 0 in the middle.'),
      L('900 — <b>to‘qqiz yuz</b>. Na o‘nlik, na birlik — ikkita 0.', '900 — <b>девятьсот</b>. Ни десятков, ни единиц — два нуля.', '900 — <b>nine hundred</b>. No tens and no ones, so two zeros.')
    ], after: [
      L('Yozish qoidasi: <b>har bir xonaga bittadan raqam yoziladi. Xona bo‘sh bo‘lsa — 0 yoziladi.</b> «Uch yuz besh» — bu 3 yuzlik, 0 o‘nlik, 5 birlik, ya’ni 305. Hech qachon 35 yoki 3005 deb yozmang!', 'Правило записи: <b>в каждый разряд пишем по одной цифре. Если разряд пустой — пишем 0.</b> «Триста пять» — это 3 сотни, 0 десятков, 5 единиц, то есть 305. Никогда не пиши 35 или 3005!', 'The writing rule: <b>one digit goes in each place. If a place is empty, write 0.</b> “Three hundred and five” is 3 hundreds, 0 tens, 5 ones: 305. Never write 35 or 3005!')
    ] },
    { kind: 'steps', h: L('Qadamma-qadam: sonni xonalarga ajratish', 'Шаг за шагом: раскладываем число', 'Step by step: splitting a number'), p: [
      L('Sonni xona qo‘shiluvchilariga ajratish uchun shunday qilamiz. Misol: 583.', 'Чтобы разложить число на разрядные слагаемые, делаем так. Пример: 583.', 'To split a number into its place-value parts we do this. Example: 583.')
    ], list: [
      L('1-qadam. Birinchi raqam — yuzliklar: 5 → 500.', 'Шаг 1. Первая цифра — сотни: 5 → 500.', 'Step 1. The first digit is hundreds: 5 → 500.'),
      L('2-qadam. Ikkinchi raqam — o‘nliklar: 8 → 80.', 'Шаг 2. Вторая цифра — десятки: 8 → 80.', 'Step 2. The second digit is tens: 8 → 80.'),
      L('3-qadam. Uchinchi raqam — birliklar: 3 → 3.', 'Шаг 3. Третья цифра — единицы: 3 → 3.', 'Step 3. The third digit is ones: 3 → 3.'),
      L('4-qadam. Yig‘indi sifatida yozing: 583 = 500 + 80 + 3.', 'Шаг 4. Запиши в виде суммы: 583 = 500 + 80 + 3.', 'Step 4. Write it as a sum: 583 = 500 + 80 + 3.')
    ], after: [
      L('Teskari yo‘nalishda ham ishlaydi: 200 + 70 + 9 = 279. Agar biror qo‘shiluvchi yo‘q bo‘lsa, o‘sha xonaga 0 qo‘ying: 400 + 6 = 406.', 'Работает и в обратную сторону: 200 + 70 + 9 = 279. Если какого-то слагаемого нет, в этот разряд ставим 0: 400 + 6 = 406.', 'It works the other way too: 200 + 70 + 9 = 279. If a part is missing, put 0 in that place: 400 + 6 = 406.'),
      L('Sahnadagi plitalar, tayoqchalar va kubchalar aynan shunday: 3 plita, 4 tayoqcha, 5 kubcha = 345.', 'Плиты, палочки и кубики на сцене — ровно об этом: 3 плиты, 4 палочки, 5 кубиков = 345.', 'The plates, rods and cubes on the stage show exactly this: 3 plates, 4 rods, 5 cubes = 345.')
    ] },
    { kind: 'example', h: L('Yechilgan namunalar', 'Разобранные примеры', 'Worked examples'), p: [
      L('Har bir misolda avval o‘zingiz javob bering.', 'В каждом примере сначала ответь сам.', 'Answer each one yourself first.')
    ], ex: [
      { q: L('7 yuzlik, 2 o‘nlik va 6 birlikdan iborat sonni yozing.', 'Запиши число из 7 сотен, 2 десятков и 6 единиц.', 'Write the number made of 7 hundreds, 2 tens and 6 ones.'), s: L('Yuzliklar — 7, o‘nliklar — 2, birliklar — 6. Yonma-yon yozamiz: <b>726</b>. O‘qiymiz: yetti yuz yigirma olti.', 'Сотни — 7, десятки — 2, единицы — 6. Пишем подряд: <b>726</b>. Читаем: семьсот двадцать шесть.', 'Hundreds 7, tens 2, ones 6. Write them side by side: <b>726</b>. Read: seven hundred and twenty-six.') },
      { q: L('«Besh yuz to‘qqiz» sonini raqamlar bilan yozing.', 'Запиши цифрами число «пятьсот девять».', 'Write “five hundred and nine” in digits.'), s: L('Besh yuz — 5 yuzlik. O‘nlik aytilmadi — demak 0. To‘qqiz — 9 birlik. Javob: <b>509</b>. 59 emas!', 'Пятьсот — 5 сотен. Десятки не названы — значит 0. Девять — 9 единиц. Ответ: <b>509</b>. Не 59!', 'Five hundred: 5 hundreds. No tens were said, so 0. Nine: 9 ones. Answer: <b>509</b>. Not 59!') },
      { q: L('860 sonini xona qo‘shiluvchilariga ajrating.', 'Разложи число 860 на разрядные слагаемые.', 'Split 860 into place-value parts.'), s: L('8 yuzlik = 800, 6 o‘nlik = 60, birlik 0. Javob: <b>860 = 800 + 60</b>.', '8 сотен = 800, 6 десятков = 60, единиц 0. Ответ: <b>860 = 800 + 60</b>.', '8 hundreds = 800, 6 tens = 60, no ones. Answer: <b>860 = 800 + 60</b>.') },
      { q: L('300 + 40 + 1 = ?', '300 + 40 + 1 = ?', '300 + 40 + 1 = ?'), s: L('Yuzlik 3, o‘nlik 4, birlik 1. Javob: <b>341</b>.', 'Сотен 3, десятков 4, единиц 1. Ответ: <b>341</b>.', '3 hundreds, 4 tens, 1 one. Answer: <b>341</b>.') },
      { q: L('452 sonida nechta o‘nlik bor?', 'Сколько десятков в числе 452?', 'How many tens are in 452?'), s: L('Ikki xil javob bor! O‘nliklar xonasida 5 turibdi. Lekin umumiy o‘nliklar soni — 45 ta, chunki 4 yuzlik = 40 o‘nlik, va yana 5. Odatda «o‘nliklar xonasi» so‘ralsa, javob <b>5</b>.', 'Есть два ответа! В разряде десятков стоит 5. А всего десятков — 45, потому что 4 сотни = 40 десятков, и ещё 5. Если спрашивают про разряд десятков, ответ <b>5</b>.', 'There are two answers! The tens place holds 5. But the total number of tens is 45, because 4 hundreds = 40 tens, plus 5 more. If the question is about the tens place, the answer is <b>5</b>.') }
    ] },
    { kind: 'table', h: L('Xonalar jadvali', 'Таблица разрядов', 'Place-value table'), p: [
      L('Xonalar jadvali sonni «ko‘rish»ga yordam beradi. Har bir raqamni o‘z ustuniga yozing — va son o‘z-o‘zidan tushunarli bo‘ladi.', 'Таблица разрядов помогает «увидеть» число. Запиши каждую цифру в свой столбец — и число станет понятным само собой.', 'A place-value table helps you “see” a number. Write each digit in its own column and the number explains itself.')
    ], table: { head: [L('Son', 'Число', 'Number'), L('Yuzliklar', 'Сотни', 'Hundreds'), L('O‘nliklar', 'Десятки', 'Tens'), L('Birliklar', 'Единицы', 'Ones'), L('Yig‘indi', 'Сумма', 'Sum')], rows: [
      ['345', '3', '4', '5', '300 + 40 + 5'],
      ['305', '3', '0', '5', '300 + 5'],
      ['350', '3', '5', '0', '300 + 50'],
      ['999', '9', '9', '9', '900 + 90 + 9'],
      ['100', '1', '0', '0', '100'],
      ['708', '7', '0', '8', '700 + 8']
    ] }, after: [
      L('Diqqat: 345, 305 va 350 bir xil raqamlardan iborat, lekin bu uch xil son! Raqamning o‘rni uning qiymatini o‘zgartiradi.', 'Внимание: 345, 305 и 350 состоят из одинаковых цифр, но это три разных числа! Место цифры меняет её значение.', 'Notice: 345, 305 and 350 use the same digits, yet they are three different numbers! A digit’s place changes its value.')
    ] },
    { kind: 'mistake', h: L('Tipik xatolar', 'Типичные ошибки', 'Common mistakes'), p: [
      L('Uch xonali sonlarni yozishda eng ko‘p uchraydigan xatolar:', 'Самые частые ошибки при записи трёхзначных чисел:', 'The most common mistakes when writing three-digit numbers:')
    ], list: [
      L('<b>Nolni tushirib qoldirish.</b> «Olti yuz to‘rt» ni 64 deb yozish. To‘g‘risi — 604: o‘nliklar xonasi bo‘sh, unga 0 qo‘yamiz.', '<b>Пропускать ноль.</b> «Шестьсот четыре» записать как 64. Правильно — 604: разряд десятков пустой, ставим 0.', '<b>Dropping the zero.</b> Writing “six hundred and four” as 64. Correct: 604, the tens place is empty, so we put 0.'),
      L('<b>Eshitganini yozish.</b> «Uch yuz yigirma» ni 30020 deb yozish. Uch xonali sonda faqat uchta raqam bo‘ladi: 320.', '<b>Писать так, как слышится.</b> «Триста двадцать» записать как 30020. В трёхзначном числе только три цифры: 320.', '<b>Writing what you hear.</b> Writing “three hundred and twenty” as 30020. A three-digit number has only three digits: 320.'),
      L('<b>Raqamlar o‘rnini almashtirish.</b> 5 yuzlik va 2 birlik — bu 502, 205 emas. Avval yuzlik, oxirida birlik.', '<b>Менять цифры местами.</b> 5 сотен и 2 единицы — это 502, а не 205. Сначала сотни, в конце единицы.', '<b>Swapping digits.</b> 5 hundreds and 2 ones is 502, not 205. Hundreds first, ones last.'),
      L('<b>O‘nlikni birlik deb o‘ylash.</b> 470 da 7 — bu 7 o‘nlik, ya’ni 70, 7 emas.', '<b>Принимать десятки за единицы.</b> В 470 цифра 7 — это 7 десятков, то есть 70, а не 7.', '<b>Treating tens as ones.</b> In 470 the digit 7 means 7 tens, that is 70, not 7.')
    ] },
    { kind: 'life', h: L('Uch xonali sonlar atrofimizda', 'Трёхзначные числа вокруг нас', 'Three-digit numbers around us'), p: [
      L('<b>Uyda.</b> Xonadon raqamlari (125-xonadon), televizor kanallari, kitob sahifalari — hammasi uch xonali sonlar. «Kitobni 148-sahifadan oching» deyilganda, siz sonni to‘g‘ri o‘qib, kerakli sahifani topasiz.', '<b>Дома.</b> Номера квартир (квартира 125), телеканалы, страницы книг — всё это трёхзначные числа. Когда говорят «открой книгу на странице 148», ты читаешь число и находишь нужную страницу.', '<b>At home.</b> Flat numbers (flat 125), TV channels, book pages: all three-digit numbers. When someone says “open the book at page 148”, you read the number and find the page.'),
      L('<b>Do‘konda.</b> Narxlar: shokolad 850 so‘m, sharbat 950 so‘m. Narx yorlig‘idagi sonni to‘g‘ri o‘qish — xarid qilishning birinchi qadami.', '<b>В магазине.</b> Цены: шоколад 850 сумов, сок 950 сумов. Правильно прочитать число на ценнике — первый шаг покупки.', '<b>At the shop.</b> Prices: chocolate 850 soms, juice 950 soms. Reading the number on the price tag correctly is the first step of shopping.'),
      L('<b>Transportda.</b> Avtobus marshrutlari (137), poyezd raqamlari, samolyot reyslari, mashina raqamlari — uch xonali sonlar hamma joyda. Favqulodda xizmat raqamlari ham: 101, 102, 103, 112.', '<b>В транспорте.</b> Маршруты автобусов (137), номера поездов, рейсы самолётов, автомобильные номера. Номера экстренных служб тоже: 101, 102, 103, 112.', '<b>In transport.</b> Bus routes (137), train numbers, flight numbers, car plates: three-digit numbers are everywhere. Emergency numbers too: 101, 102, 103, 112.'),
      L('<b>Sportda.</b> Futbolchi 100 ta gol urdi, yuguruvchi 400 metr masofani bosdi, sportchi 120 kg shtanga ko‘tardi. Natijalar uch xonali sonlar bilan yoziladi.', '<b>В спорте.</b> Футболист забил 100 голов, бегун пробежал 400 метров, штангист поднял 120 кг. Результаты записывают трёхзначными числами.', '<b>In sport.</b> A footballer scored 100 goals, a runner covered 400 metres, a weightlifter lifted 120 kg. Results are written with three-digit numbers.')
    ] },
    { kind: 'fact', h: L('Qiziqarli faktlar', 'Интересные факты', 'Fun facts'), list: [
      L('Uch xonali sonlar jami <b>900 ta</b>: 100 dan 999 gacha. Ikki xonali sonlar esa faqat 90 ta, bir xonalilar — 10 ta (0 ni ham sanasak).', 'Трёхзначных чисел всего <b>900</b>: от 100 до 999. Двузначных — лишь 90, а однозначных — 10 (если считать 0).', 'There are <b>900</b> three-digit numbers in all: from 100 to 999. There are only 90 two-digit numbers and 10 one-digit numbers (counting 0).'),
      L('Raqamlari bir xil bo‘lgan uch xonali sonlar — 111, 222, 333 … 999 — jami 9 ta. Ularni «repdigit» deyishadi.', 'Трёхзначных чисел с одинаковыми цифрами — 111, 222, 333 … 999 — всего 9. Их называют «репдигиты».', 'Three-digit numbers with all digits the same (111, 222, 333 … 999) are just 9 in number. They are called “repdigits”.'),
      L('Gepard — eng tez yuguruvchi hayvon: soatiga 100 km dan tez yuguradi. Lekin faqat qisqa masofaga — taxminan 500 metrgacha.', 'Гепард — самое быстрое животное: бегает быстрее 100 км в час. Но только на короткие расстояния — примерно до 500 метров.', 'The cheetah is the fastest land animal: it runs faster than 100 km per hour, but only for short distances, about 500 metres.'),
      L('Insonning tanasida 206 ta suyak bor. Chaqaloq esa 300 ga yaqin suyak bilan tug‘iladi — keyin ularning ba’zilari birlashib ketadi.', 'В теле человека 206 костей. А младенец рождается почти с 300 костями — потом некоторые срастаются.', 'The human body has 206 bones. A baby is born with about 300, and some of them join together as it grows.')
    ] },
    { kind: 'practice', h: L('O‘ylab ko‘ring', 'Подумай', 'Think about it'), p: [
      L('Har bir sonni avval ovoz chiqarib o‘qing, keyin yozing.', 'Каждое число сначала прочитай вслух, потом запиши.', 'Read each number aloud first, then write it.')
    ], list: [
      L('Raqamlar bilan yozing: to‘rt yuz o‘n yetti; sakkiz yuz olti; olti yuz sakson.', 'Запиши цифрами: четыреста семнадцать; восемьсот шесть; шестьсот восемьдесят.', 'Write in digits: four hundred and seventeen; eight hundred and six; six hundred and eighty.'),
      L('Xona qo‘shiluvchilariga ajrating: 256, 703, 990.', 'Разложи на разрядные слагаемые: 256, 703, 990.', 'Split into place-value parts: 256, 703, 990.'),
      L('2, 5 va 0 raqamlaridan nechta har xil uch xonali son tuzish mumkin? (Son 0 bilan boshlanmaydi!)', 'Сколько разных трёхзначных чисел можно составить из цифр 2, 5 и 0? (Число не начинается с 0!)', 'How many different three-digit numbers can you make from the digits 2, 5 and 0? (A number cannot start with 0!)'),
      L('100 dan 999 gacha sanasangiz, nechta son aytasiz?', 'Если считать от 100 до 999, сколько чисел ты назовёшь?', 'If you count from 100 to 999, how many numbers will you say?')
    ], after: [
      L('Javoblar: 417, 806, 680. 256 = 200 + 50 + 6; 703 = 700 + 3; 990 = 900 + 90. Uchinchi savol: 4 ta — 250, 205, 520, 502. To‘rtinchi: 900 ta.', 'Ответы: 417, 806, 680. 256 = 200 + 50 + 6; 703 = 700 + 3; 990 = 900 + 90. Третий вопрос: 4 числа — 250, 205, 520, 502. Четвёртый: 900.', 'Answers: 417, 806, 680. 256 = 200 + 50 + 6; 703 = 700 + 3; 990 = 900 + 90. Third question: 4 numbers — 250, 205, 520, 502. Fourth: 900.')
    ] },
    { kind: 'summary', h: L('Xulosa', 'Итог', 'Summary'), list: [
      L('Uch xonali son uchta raqamdan iborat: <b>yuzliklar, o‘nliklar, birliklar</b>.', 'Трёхзначное число состоит из трёх цифр: <b>сотни, десятки, единицы</b>.', 'A three-digit number has three digits: <b>hundreds, tens, ones</b>.'),
      L('Sonni chapdan o‘ngga o‘qiymiz: 345 — uch yuz qirq besh.', 'Читаем число слева направо: 345 — триста сорок пять.', 'Read from left to right: 345 is three hundred and forty-five.'),
      L('345 = 300 + 40 + 5 — xona qo‘shiluvchilari yig‘indisi.', '345 = 300 + 40 + 5 — сумма разрядных слагаемых.', '345 = 300 + 40 + 5 is the sum of place-value parts.'),
      L('Bo‘sh xonaga <b>0</b> yoziladi: uch yuz besh — 305.', 'В пустой разряд пишем <b>0</b>: триста пять — 305.', 'An empty place gets a <b>0</b>: three hundred and five is 305.'),
      L('Raqamning o‘rni uning qiymatini belgilaydi: 350 ≠ 305 ≠ 503.', 'Место цифры определяет её значение: 350 ≠ 305 ≠ 503.', 'A digit’s place sets its value: 350 ≠ 305 ≠ 503.'),
      L('Eng kichik uch xonali son — 100, eng kattasi — 999.', 'Самое маленькое трёхзначное число — 100, самое большое — 999.', 'The smallest three-digit number is 100, the largest is 999.')
    ] }
  ] });

  // ---------- t3. Uch xonali sonlarni taqqoslash ----------
  T.add(P, 't3', { sections: [
    { kind: 'intro', h: L('Qaysi biri ko‘proq?', 'Что больше?', 'Which is more?'), p: [
      L('Ikki do‘st — Aziz va Malika — marka yig‘ishadi. Azizda 452 ta, Malikada 425 ta marka bor. Kimning kolleksiyasi kattaroq? Sonlar juda o‘xshash: bir xil raqamlar, faqat o‘rni almashgan. Javob berish uchun uch xonali sonlarni <b>taqqoslash</b>ni bilish kerak.', 'Два друга — Азиз и Малика — собирают марки. У Азиза 452 марки, у Малики — 425. Чья коллекция больше? Числа очень похожи: те же цифры, только местами. Чтобы ответить, нужно уметь <b>сравнивать</b> трёхзначные числа.', 'Two friends, Aziz and Malika, collect stamps. Aziz has 452, Malika has 425. Whose collection is bigger? The numbers look alike: the same digits, just in different places. To answer, we need to know how to <b>compare</b> three-digit numbers.'),
      L('Siz ikki xonali sonlarni taqqoslashni allaqachon bilasiz: avval o‘nliklarga qaraymiz, keyin birliklarga. Uch xonali sonlarda ham shunday, faqat bitta qadam ko‘proq — avval yuzliklarga qaraymiz.', 'Ты уже умеешь сравнивать двузначные числа: сначала смотрим на десятки, потом на единицы. С трёхзначными так же, только на один шаг больше — сначала смотрим на сотни.', 'You already know how to compare two-digit numbers: look at the tens first, then the ones. Three-digit numbers work the same way, with just one extra step: look at the hundreds first.'),
      L('Bu mavzuda biz «>», «<» va «=» belgilarini uch xonali sonlar bilan ishlatishni, sonlarni tartiblashni va sonlar qatorida ularning o‘rnini topishni o‘rganamiz.', 'В этой теме мы научимся ставить знаки «>», «<» и «=» между трёхзначными числами, упорядочивать их и находить их место в числовом ряду.', 'In this topic we learn to use the signs “>”, “<” and “=” with three-digit numbers, to put numbers in order and to find their place on the number line.')
    ] },
    { kind: 'def', h: L('Taqqoslash belgilari', 'Знаки сравнения', 'Comparison signs'), p: [
      L('Ikki sonni taqqoslaganda uchta holat bo‘lishi mumkin:', 'При сравнении двух чисел возможны три случая:', 'When we compare two numbers there are three possible cases:')
    ], list: [
      L('<b>Katta</b> — belgi «>». 452 > 425 — «452 katta 425 dan».', '<b>Больше</b> — знак «>». 452 > 425 — «452 больше 425».', '<b>Greater</b> — the sign “>”. 452 > 425: “452 is greater than 425”.'),
      L('<b>Kichik</b> — belgi «<». 425 < 452 — «425 kichik 452 dan».', '<b>Меньше</b> — знак «<». 425 < 452 — «425 меньше 452».', '<b>Less</b> — the sign “<”. 425 < 452: “425 is less than 452”.'),
      L('<b>Teng</b> — belgi «=». 300 + 40 = 340.', '<b>Равно</b> — знак «=». 300 + 40 = 340.', '<b>Equal</b> — the sign “=”. 300 + 40 = 340.')
    ], after: [
      L('Belgini eslab qolish oson: uning ochiq, keng tomoni doim <b>katta songa</b>, uchi esa kichik songa qaraydi. Tasavvur qiling, bu — och timsohning og‘zi: u doim kattaroq «ovqat»ni tanlaydi!', 'Запомнить знак легко: его открытая, широкая сторона всегда смотрит на <b>большее число</b>, а острый конец — на меньшее. Представь, что это пасть голодного крокодила: он всегда выбирает «еду» побольше!', 'The sign is easy to remember: its open, wide side always faces the <b>bigger number</b> and its point faces the smaller one. Imagine a hungry crocodile’s mouth: it always picks the bigger “meal”!'),
      L('Sonlar qatorida chapdagi son doim o‘ngdagidan kichik: 100 < 101 < 102 < … < 999.', 'В числовом ряду число слева всегда меньше числа справа: 100 < 101 < 102 < … < 999.', 'On the number line the number on the left is always smaller than the one on the right: 100 < 101 < 102 < … < 999.')
    ] },
    { kind: 'history', h: L('Belgilar tarixi', 'История знаков', 'The history of the signs'), p: [
      L('«>» va «<» belgilari unchalik qadimiy emas. Ularni ingliz matematigi <b>Tomas Harriot</b> o‘ylab topgan, va ular 1631-yilda, u vafot etganidan keyin chop etilgan kitobida paydo bo‘lgan. Ungacha olimlar «katta» va «kichik» so‘zlarini to‘liq yozishgan.', 'Знаки «>» и «<» не такие уж древние. Их придумал английский математик <b>Томас Хэрриот</b>, и они появились в его книге, изданной в 1631 году, уже после его смерти. До этого учёные писали слова «больше» и «меньше» целиком.', 'The signs “>” and “<” are not very old. They were invented by the English mathematician <b>Thomas Harriot</b> and appeared in his book published in 1631, after his death. Before that, scholars wrote the words “greater” and “less” in full.'),
      L('«=» belgisi biroz oldinroq, 1557-yilda paydo bo‘lgan. Uni uels matematigi <b>Robert Rekord</b> taklif qilgan. U ikkita parallel chiziqni tanlagan, chunki, uning so‘zlari bilan aytganda, «ikkita bir xil narsadan ko‘ra tengroq narsa yo‘q».', 'Знак «=» появился чуть раньше, в 1557 году. Его предложил валлийский математик <b>Роберт Рекорд</b>. Он выбрал две параллельные чёрточки, потому что, по его словам, «нет ничего более равного, чем две одинаковые линии».', 'The “=” sign appeared a little earlier, in 1557. It was proposed by the Welsh mathematician <b>Robert Recorde</b>. He chose two parallel lines because, in his words, no two things could be more equal.'),
      L('Lekin sonlarni taqqoslash belgilardan ancha oldin ham bo‘lgan. Qadimgi savdogarlar Buyuk Ipak yo‘lida, Samarqand va Buxoro bozorlarida tovarlarni tarozida tortib, qaysi tomon og‘irroq ekanini aniqlashgan. Tarozi — eng qadimiy «taqqoslash belgisi».', 'Но сравнивали числа задолго до знаков. Древние купцы на Великом шёлковом пути, на базарах Самарканда и Бухары взвешивали товары и смотрели, какая чаша тяжелее. Весы — самый древний «знак сравнения».', 'But people compared numbers long before the signs existed. Ancient merchants on the Silk Road, in the markets of Samarkand and Bukhara, weighed goods and watched which pan sank lower. The scales are the oldest “comparison sign”.')
    ] },
    { kind: 'rule', h: L('Taqqoslash qoidasi', 'Правило сравнения', 'The comparison rule'), p: [
      L('Uch xonali sonlarni taqqoslash uchun xonalarga <b>chapdan o‘ngga</b> qaraymiz: avval yuzliklar, keyin o‘nliklar, oxirida birliklar.', 'Чтобы сравнить трёхзначные числа, смотрим на разряды <b>слева направо</b>: сначала сотни, потом десятки, в конце единицы.', 'To compare three-digit numbers we look at the places <b>from left to right</b>: hundreds first, then tens, then ones.')
    ], list: [
      L('<b>Yuzliklar har xil</b> bo‘lsa — yuzligi ko‘p son katta. 700 > 599, chunki 7 yuzlik > 5 yuzlik. Qolgan raqamlar muhim emas!', '<b>Если сотни разные</b> — больше то число, где сотен больше. 700 > 599, потому что 7 сотен > 5 сотен. Остальные цифры не важны!', '<b>If the hundreds differ</b>, the number with more hundreds is bigger. 700 > 599 because 7 hundreds > 5 hundreds. The other digits do not matter!'),
      L('<b>Yuzliklar teng</b> bo‘lsa — o‘nliklarga qaraymiz. 452 > 425, chunki 5 o‘nlik > 2 o‘nlik.', '<b>Если сотни равны</b> — смотрим на десятки. 452 > 425, потому что 5 десятков > 2 десятков.', '<b>If the hundreds are equal</b>, look at the tens. 452 > 425 because 5 tens > 2 tens.'),
      L('<b>Yuzliklar ham, o‘nliklar ham teng</b> bo‘lsa — birliklarga qaraymiz. 348 < 349, chunki 8 < 9.', '<b>Если равны и сотни, и десятки</b> — смотрим на единицы. 348 < 349, потому что 8 < 9.', '<b>If both hundreds and tens are equal</b>, look at the ones. 348 < 349 because 8 < 9.'),
      L('Hamma raqamlar teng bo‘lsa — sonlar teng: 505 = 505.', 'Если все цифры равны — числа равны: 505 = 505.', 'If all digits are equal, the numbers are equal: 505 = 505.')
    ], after: [
      L('Yana bir oddiy qoida: <b>raqamlari ko‘p son katta.</b> Har qanday uch xonali son har qanday ikki xonali sondan katta: 100 > 99, garchi 99 da to‘qqizlar bo‘lsa ham.', 'Ещё одно простое правило: <b>больше то число, в котором больше цифр.</b> Любое трёхзначное число больше любого двузначного: 100 > 99, хотя в 99 стоят девятки.', 'One more simple rule: <b>the number with more digits is bigger.</b> Any three-digit number is bigger than any two-digit number: 100 > 99, even though 99 is made of nines.')
    ] },
    { kind: 'steps', h: L('Qadamma-qadam: 638 va 683', 'Шаг за шагом: 638 и 683', 'Step by step: 638 and 683'), p: [
      L('Sonlar juda o‘xshash, shuning uchun shoshilmaymiz.', 'Числа очень похожи, поэтому не спешим.', 'The numbers look very alike, so we take our time.')
    ], list: [
      L('1-qadam. Raqamlar sonini solishtiring: ikkalasi ham uch xonali. Davom etamiz.', 'Шаг 1. Сравни количество цифр: оба трёхзначные. Идём дальше.', 'Step 1. Compare the number of digits: both have three. Carry on.'),
      L('2-qadam. Yuzliklar: 6 va 6. Teng. Davom etamiz.', 'Шаг 2. Сотни: 6 и 6. Равны. Идём дальше.', 'Step 2. Hundreds: 6 and 6. Equal. Carry on.'),
      L('3-qadam. O‘nliklar: 3 va 8. 3 < 8. To‘xtaymiz!', 'Шаг 3. Десятки: 3 и 8. 3 < 8. Останавливаемся!', 'Step 3. Tens: 3 and 8. 3 < 8. Stop here!'),
      L('4-qadam. Javobni yozamiz: 638 < 683. Birliklarga qarash shart emas.', 'Шаг 4. Записываем ответ: 638 < 683. На единицы смотреть не нужно.', 'Step 4. Write the answer: 638 < 683. No need to look at the ones.')
    ], after: [
      L('Bir nechta sonni tartiblash ham shu qoida bilan: avval eng kichigini toping, uni yozing, keyin qolganlaridan eng kichigini, va hokazo. 320, 203, 302, 230 → 203, 230, 302, 320.', 'Несколько чисел упорядочиваем по тому же правилу: найди самое маленькое, запиши, потом самое маленькое из оставшихся, и так далее. 320, 203, 302, 230 → 203, 230, 302, 320.', 'Putting several numbers in order uses the same rule: find the smallest, write it, then the smallest of the rest, and so on. 320, 203, 302, 230 → 203, 230, 302, 320.')
    ] },
    { kind: 'example', h: L('Yechilgan namunalar', 'Разобранные примеры', 'Worked examples'), p: [
      L('Qaysi xonada to‘xtaganimizga e’tibor bering.', 'Обрати внимание, на каком разряде мы останавливаемся.', 'Notice at which place we stop.')
    ], ex: [
      { q: L('527 ◻ 572', '527 ◻ 572', '527 ◻ 572'), s: L('Yuzliklar: 5 = 5. O‘nliklar: 2 < 7. Javob: <b>527 < 572</b>.', 'Сотни: 5 = 5. Десятки: 2 < 7. Ответ: <b>527 < 572</b>.', 'Hundreds: 5 = 5. Tens: 2 < 7. Answer: <b>527 < 572</b>.') },
      { q: L('810 ◻ 801', '810 ◻ 801', '810 ◻ 801'), s: L('Yuzliklar: 8 = 8. O‘nliklar: 1 > 0. Javob: <b>810 > 801</b>.', 'Сотни: 8 = 8. Десятки: 1 > 0. Ответ: <b>810 > 801</b>.', 'Hundreds: 8 = 8. Tens: 1 > 0. Answer: <b>810 > 801</b>.') },
      { q: L('399 ◻ 401', '399 ◻ 401', '399 ◻ 401'), s: L('Yuzliklar: 3 < 4. Darhol to‘xtaymiz. Javob: <b>399 < 401</b>. 399 da to‘qqizlar ko‘p bo‘lsa ham, yuzligi kam!', 'Сотни: 3 < 4. Сразу останавливаемся. Ответ: <b>399 < 401</b>. Пусть в 399 много девяток — сотен меньше!', 'Hundreds: 3 < 4. Stop at once. Answer: <b>399 < 401</b>. Even though 399 has lots of nines, it has fewer hundreds!') },
      { q: L('Azizda 452, Malikada 425 marka. Kimda ko‘p?', 'У Азиза 452 марки, у Малики 425. У кого больше?', 'Aziz has 452 stamps, Malika has 425. Who has more?'), s: L('Yuzliklar teng (4 = 4). O‘nliklar: 5 > 2. 452 > 425. Javob: <b>Azizda ko‘p</b>, 27 taga ko‘p.', 'Сотни равны (4 = 4). Десятки: 5 > 2. 452 > 425. Ответ: <b>у Азиза больше</b>, на 27 марок.', 'Hundreds are equal (4 = 4). Tens: 5 > 2. 452 > 425. Answer: <b>Aziz has more</b>, by 27 stamps.') },
      { q: L('Sonlarni kamayish tartibida yozing: 476, 764, 467, 746.', 'Запиши числа в порядке убывания: 476, 764, 467, 746.', 'Write in decreasing order: 476, 764, 467, 746.'), s: L('Yuzligi 7 bo‘lganlar katta: 764 va 746; ulardan 764 > 746. Keyin yuzligi 4 lar: 476 > 467. Javob: <b>764, 746, 476, 467</b>.', 'С сотнями 7 больше: 764 и 746; из них 764 > 746. Потом с сотнями 4: 476 > 467. Ответ: <b>764, 746, 476, 467</b>.', 'Those with 7 hundreds are bigger: 764 and 746; of these 764 > 746. Then those with 4 hundreds: 476 > 467. Answer: <b>764, 746, 476, 467</b>.') }
    ] },
    { kind: 'table', h: L('Qo‘shnilar jadvali', 'Таблица соседей', 'Table of neighbours'), p: [
      L('Har bir sonning ikki qo‘shnisi bor: bittasi 1 ga kichik, bittasi 1 ga katta. Yuzlik chegarasidan o‘tganda ehtiyot bo‘ling!', 'У каждого числа два соседа: один на 1 меньше, другой на 1 больше. Будь внимателен при переходе через сотню!', 'Every number has two neighbours: one is 1 less, the other is 1 more. Be careful when crossing a hundred!')
    ], table: { head: [L('Oldingi', 'Предыдущее', 'Before'), L('Son', 'Число', 'Number'), L('Keyingi', 'Следующее', 'After')], rows: [
      ['345', '346', '347'],
      ['199', '200', '201'],
      ['498', '499', '500'],
      ['609', '610', '611'],
      ['899', '900', '901'],
      ['998', '999', '1000']
    ] }, after: [
      L('Qarang: 499 dan keyin 500 keladi — hamma raqamlar o‘zgardi! 999 dan keyin esa 1000, to‘rt xonali son. Bu «chegaradan o‘tish» deyiladi.', 'Смотри: после 499 идёт 500 — изменились все цифры! А после 999 — 1000, четырёхзначное число. Это называется «переход через разряд».', 'Look: after 499 comes 500, and every digit changed! After 999 comes 1000, a four-digit number. This is called “crossing a place”.')
    ] },
    { kind: 'mistake', h: L('Tipik xatolar', 'Типичные ошибки', 'Common mistakes'), p: [
      L('Taqqoslashda shoshilgan bolalar shunday xatolarga yo‘l qo‘yadi:', 'Торопясь, дети ошибаются при сравнении вот так:', 'Children who rush make these comparison mistakes:')
    ], list: [
      L('<b>Birliklardan boshlash.</b> «425 > 452, chunki 5 > 2» — xato! Avval yuzlik, keyin o‘nlik, oxirida birlik. To‘g‘risi: 425 < 452.', '<b>Начинать с единиц.</b> «425 > 452, потому что 5 > 2» — ошибка! Сначала сотни, потом десятки, в конце единицы. Верно: 425 < 452.', '<b>Starting with the ones.</b> “425 > 452 because 5 > 2” is wrong! Hundreds first, then tens, then ones. Correct: 425 < 452.'),
      L('<b>Katta raqamlarga aldanish.</b> 299 da to‘qqizlar bor, lekin 299 < 300. Yuzliklar hal qiladi.', '<b>Обманываться большими цифрами.</b> В 299 стоят девятки, но 299 < 300. Решают сотни.', '<b>Being fooled by big digits.</b> 299 has nines in it, but 299 < 300. The hundreds decide.'),
      L('<b>Belgini teskari qo‘yish.</b> Timsohni eslang: ochiq og‘iz katta songa qaraydi. 300 > 200, 200 < 300.', '<b>Ставить знак наоборот.</b> Вспомни крокодила: открытая пасть смотрит на большее число. 300 > 200, 200 < 300.', '<b>Putting the sign backwards.</b> Remember the crocodile: the open mouth faces the bigger number. 300 > 200, 200 < 300.'),
      L('<b>Qo‘shnini noto‘g‘ri topish.</b> 500 dan oldingi son 499, «400» emas. 1 ni ayirish kerak, 100 ni emas.', '<b>Неверно находить соседа.</b> Перед 500 стоит 499, а не «400». Вычитаем 1, а не 100.', '<b>Getting the neighbour wrong.</b> The number before 500 is 499, not “400”. Subtract 1, not 100.')
    ] },
    { kind: 'life', h: L('Hayotda taqqoslash', 'Сравнение в жизни', 'Comparing in everyday life'), p: [
      L('<b>Do‘konda.</b> Bir do‘konda daftar 650 so‘m, boshqasida 560 so‘m. Qaysi biri arzon? 560 < 650 — ikkinchi do‘kon arzonroq. Narxlarni taqqoslash pulni tejashga yordam beradi.', '<b>В магазине.</b> В одном магазине тетрадь стоит 650 сумов, в другом — 560. Где дешевле? 560 < 650 — во втором. Сравнение цен помогает экономить.', '<b>At the shop.</b> One shop sells a notebook for 650 soms, another for 560. Which is cheaper? 560 < 650, so the second shop. Comparing prices saves money.'),
      L('<b>Sportda.</b> Futbol o‘yinida tomoshabinlar: birinchi kuni 820 kishi, ikkinchi kuni 802 kishi keldi. Qaysi kuni ko‘proq? 820 > 802 — birinchi kuni.', '<b>В спорте.</b> Зрители на футболе: в первый день пришло 820 человек, во второй — 802. Когда больше? 820 > 802 — в первый день.', '<b>In sport.</b> Football spectators: 820 came on the first day, 802 on the second. Which day had more? 820 > 802, the first day.'),
      L('<b>Tabiatda.</b> Qaysi daryo uzun: Chirchiq (161 km) yoki Zarafshon (877 km)? 877 > 161 — Zarafshon ancha uzun. Qaysi tog‘ baland? Balandliklarni taqqoslaymiz.', '<b>В природе.</b> Какая река длиннее: Чирчик (161 км) или Зеравшан (877 км)? 877 > 161 — Зеравшан намного длиннее. Какая гора выше? Сравниваем высоты.', '<b>In nature.</b> Which river is longer: the Chirchik (161 km) or the Zarafshan (877 km)? 877 > 161, so the Zarafshan is much longer. Which mountain is higher? We compare heights.'),
      L('<b>Uyda.</b> Kitobda 240 sahifa, siz 185-sahifadasiz. Ko‘p qoldimi? 185 < 240, 55 sahifa qoldi. Sonlarni taqqoslamasdan rejalashtirib bo‘lmaydi.', '<b>Дома.</b> В книге 240 страниц, ты на 185-й. Много ли осталось? 185 < 240, осталось 55 страниц. Без сравнения чисел нельзя ничего спланировать.', '<b>At home.</b> The book has 240 pages and you are on page 185. Is there much left? 185 < 240, 55 pages to go. Without comparing numbers you cannot plan anything.')
    ] },
    { kind: 'fact', h: L('Qiziqarli faktlar', 'Интересные факты', 'Fun facts'), list: [
      L('Dunyodagi eng baland daraxt — Kaliforniyadagi sekvoya, balandligi 116 metr. Eng baland hayvon — jirafa, 6 metrgacha. 116 > 6 — daraxt 19 ta jirafadan baland!', 'Самое высокое дерево в мире — секвойя в Калифорнии, 116 метров. Самое высокое животное — жираф, до 6 метров. 116 > 6 — дерево выше 19 жирафов!', 'The tallest tree in the world is a redwood in California, 116 metres high. The tallest animal is the giraffe, up to 6 metres. 116 > 6: the tree is taller than 19 giraffes!'),
      L('Tuyaqush soatiga 70 km, quyon 55 km, odam esa eng tez yugurganda ham 45 km tezlikda yuguradi. 70 > 55 > 45.', 'Страус бегает со скоростью 70 км в час, заяц — 55, а человек даже на рекорде — 45. 70 > 55 > 45.', 'An ostrich runs at 70 km per hour, a hare at 55, and a human at best about 45. 70 > 55 > 45.'),
      L('Oy Yerdan 384 ming km uzoqda. Bu masofani mashinada to‘xtamasdan bosib o‘tish uchun 5 oydan ko‘proq vaqt kerak bo‘lardi.', 'Луна находится в 384 тысячах км от Земли. Чтобы проехать это расстояние на машине без остановок, нужно больше 5 месяцев.', 'The Moon is 384 thousand km from Earth. Driving that distance without stopping would take more than 5 months.'),
      L('999 — eng katta uch xonali son. Unga 1 qo‘shsangiz, uchala raqam ham o‘zgaradi: 999 + 1 = 1000.', '999 — самое большое трёхзначное число. Прибавь 1 — и все три цифры изменятся: 999 + 1 = 1000.', '999 is the largest three-digit number. Add 1 and all three digits change: 999 + 1 = 1000.')
    ] },
    { kind: 'practice', h: L('O‘ylab ko‘ring', 'Подумай', 'Think about it'), p: [
      L('Yuzliklardan boshlang!', 'Начинай с сотен!', 'Start with the hundreds!')
    ], list: [
      L('Belgi qo‘ying: 374 ◻ 347; 509 ◻ 590; 1000 ◻ 999; 600 ◻ 60.', 'Поставь знак: 374 ◻ 347; 509 ◻ 590; 1000 ◻ 999; 600 ◻ 60.', 'Put the sign: 374 ◻ 347; 509 ◻ 590; 1000 ◻ 999; 600 ◻ 60.'),
      L('O‘sish tartibida yozing: 505, 550, 500, 555, 55.', 'Запиши в порядке возрастания: 505, 550, 500, 555, 55.', 'Write in increasing order: 505, 550, 500, 555, 55.'),
      L('Qaysi son 700 dan kichik, lekin 695 dan katta? Barcha javoblarni toping.', 'Какие числа меньше 700, но больше 695? Найди все.', 'Which numbers are less than 700 but more than 695? Find all of them.'),
      L('Raqamlari har xil eng katta uch xonali sonni yozing.', 'Запиши самое большое трёхзначное число с разными цифрами.', 'Write the largest three-digit number with all digits different.')
    ], after: [
      L('Javoblar: 374 > 347, 509 < 590, 1000 > 999, 600 > 60. Tartib: 55, 500, 505, 550, 555. Uchinchi: 696, 697, 698, 699. To‘rtinchi: 987.', 'Ответы: 374 > 347, 509 < 590, 1000 > 999, 600 > 60. Порядок: 55, 500, 505, 550, 555. Третий: 696, 697, 698, 699. Четвёртый: 987.', 'Answers: 374 > 347, 509 < 590, 1000 > 999, 600 > 60. Order: 55, 500, 505, 550, 555. Third: 696, 697, 698, 699. Fourth: 987.')
    ] },
    { kind: 'summary', h: L('Xulosa', 'Итог', 'Summary'), list: [
      L('Taqqoslash belgilari: <b>></b> katta, <b><</b> kichik, <b>=</b> teng. Ochiq tomon katta songa qaraydi.', 'Знаки сравнения: <b>></b> больше, <b><</b> меньше, <b>=</b> равно. Открытая сторона смотрит на большее число.', 'Comparison signs: <b>></b> greater, <b><</b> less, <b>=</b> equal. The open side faces the bigger number.'),
      L('Raqamlari ko‘p son katta: 100 > 99.', 'Число с большим количеством цифр больше: 100 > 99.', 'The number with more digits is bigger: 100 > 99.'),
      L('Uch xonali sonlarni taqqoslash tartibi: <b>yuzliklar → o‘nliklar → birliklar</b>.', 'Порядок сравнения трёхзначных чисел: <b>сотни → десятки → единицы</b>.', 'Order for comparing three-digit numbers: <b>hundreds → tens → ones</b>.'),
      L('Birinchi farq topilgan xonada to‘xtaymiz — qolgan raqamlar muhim emas.', 'Останавливаемся на первом разряде, где есть разница, — остальные цифры не важны.', 'Stop at the first place where the digits differ; the rest do not matter.'),
      L('Har bir sonning qo‘shnilari bor: 499 → 500 → 501.', 'У каждого числа есть соседи: 499 → 500 → 501.', 'Every number has neighbours: 499 → 500 → 501.'),
      L('Taqqoslash narx, masofa va natijalarni solishtirishda har kuni kerak.', 'Сравнение нужно каждый день: цены, расстояния, результаты.', 'Comparing is needed every day: prices, distances, results.')
    ] }
  ] });
})(this);
(function (root) { 'use strict'; var L = root.NMCurriculum.H.L, T = root.NMTheory, P = '2-2';

  // ---------- t4. Uch xonali sonlarni qo'shish ----------
  T.add(P, 't4', { sections: [
    { kind: 'intro', h: L('Katta sonlarni qo‘shamiz', 'Складываем большие числа', 'Adding big numbers'), p: [
      L('Maktab bog‘ida o‘quvchilar daraxt ekishdi: kuzda 234 ta, bahorda yana 152 ta. Jami nechta daraxt ekildi? Bu savolga javob berish uchun <b>uch xonali sonlarni qo‘shish</b>ni bilish kerak. Qo‘rqmang, bu juda oson! Siz allaqachon ikki xonali sonlarni qo‘shishni bilasiz.', 'В школьном саду ученики сажали деревья: осенью 234, весной ещё 152. Сколько деревьев посадили всего? Чтобы ответить, нужно уметь <b>складывать трёхзначные числа</b>. Не бойся, это очень просто! Ты уже умеешь складывать двузначные числа.', 'In the school garden pupils planted trees: 234 in autumn and 152 more in spring. How many trees were planted in all? To answer, we need to know how to <b>add three-digit numbers</b>. Don’t worry, it is very easy! You already know how to add two-digit numbers.'),
      L('Sir shundaki, katta sonni bo‘laklarga bo‘lamiz: yuzliklar alohida, o‘nliklar alohida, birliklar alohida. Har bir bo‘lakni qo‘shish oson, keyin natijalarni birlashtiramiz. Xuddi uyni g‘ishtma-g‘isht qurgandek!', 'Секрет в том, что большое число делим на части: сотни отдельно, десятки отдельно, единицы отдельно. Каждую часть сложить легко, а потом объединяем результаты. Как будто строим дом по кирпичику!', 'The secret is to split a big number into parts: hundreds, tens and ones separately. Each part is easy to add, and then we put the results together. Just like building a house brick by brick!'),
      L('Bu mavzuda biz uch xonali sonlarni xonama-xona qo‘shishni, ustun usulida yozishni va natijani tekshirishni o‘rganamiz.', 'В этой теме мы научимся складывать трёхзначные числа по разрядам, записывать их столбиком и проверять результат.', 'In this topic we learn to add three-digit numbers place by place, to write them in a column and to check the result.')
    ] },
    { kind: 'def', h: L('Qo‘shish atamalari', 'Термины сложения', 'Words for addition'), p: [
      L('Qo‘shishdagi sonlarning o‘z nomlari bor. 234 + 152 = 386 misolida:', 'У чисел при сложении есть свои названия. В примере 234 + 152 = 386:', 'The numbers in an addition have their own names. In 234 + 152 = 386:')
    ], list: [
      L('234 va 152 — <b>qo‘shiluvchilar</b>.', '234 и 152 — <b>слагаемые</b>.', '234 and 152 are the <b>addends</b>.'),
      L('386 — <b>yig‘indi</b>.', '386 — <b>сумма</b>.', '386 is the <b>sum</b>.'),
      L('234 + 152 yozuvining o‘zi ham yig‘indi deb ataladi.', 'Сама запись 234 + 152 тоже называется суммой.', 'The expression 234 + 152 itself is also called a sum.')
    ], after: [
      L('<b>Xonalab qo‘shish</b> — bu yuzliklarni yuzliklarga, o‘nliklarni o‘nliklarga, birliklarni birliklarga qo‘shish demakdir. Hech qachon yuzlikni birlikka qo‘shmaymiz — xuddi olmalarni olmalarga, nokni nokka qo‘shgandek.', '<b>Поразрядное сложение</b> — это когда сотни складываем с сотнями, десятки с десятками, единицы с единицами. Сотни с единицами не складываем никогда — как яблоки с яблоками, а груши с грушами.', '<b>Adding place by place</b> means adding hundreds to hundreds, tens to tens and ones to ones. We never add hundreds to ones, just as we count apples with apples and pears with pears.'),
      L('Qo‘shiluvchilarning o‘rnini almashtirsak, yig‘indi o‘zgarmaydi: 234 + 152 = 152 + 234. Bu qoida ham yordam beradi.', 'От перестановки слагаемых сумма не меняется: 234 + 152 = 152 + 234. Это правило тоже помогает.', 'Swapping the addends does not change the sum: 234 + 152 = 152 + 234. This rule helps too.')
    ] },
    { kind: 'history', h: L('Qo‘shish tarixdan', 'Сложение в истории', 'Addition in history'), p: [
      L('Qadimgi odamlar katta sonlarni qo‘shish uchun <b>cho‘t</b> (abak) ishlatgan. Bu ramkadagi simlarga terilgan munchoqlar edi: bir simda birliklar, boshqasida o‘nliklar, uchinchisida yuzliklar. Xitoyda u «suanpan», Rossiyada «schyoti» deb atalgan. Bozorlarda cho‘tni 50 yil oldin ham ko‘rish mumkin edi!', 'Древние люди складывали большие числа на <b>счётах</b> (абаке). Это бусины на проволоках в рамке: на одной проволоке единицы, на другой десятки, на третьей сотни. В Китае их называли «суаньпань», в России — «счёты». На базарах счёты можно было увидеть ещё 50 лет назад!', 'People long ago added big numbers with an <b>abacus</b>: beads on wires in a frame, one wire for ones, another for tens, a third for hundreds. In China it was called the “suanpan”, in Russia the “schoty”. You could still see one in markets 50 years ago!'),
      L('Bugun biz ishlatadigan ustun usulida qo‘shishni Xorazmiy o‘z kitobida tushuntirgan. U hind raqamlari bilan har bir xonani alohida qo‘shishni va «yodda saqlashni» ko‘rsatgan. Uning kitobi lotin tiliga tarjima qilinib, Yevropada yuzlab yillar davomida darslik bo‘lgan.', 'Сложение столбиком, которым мы пользуемся сегодня, объяснил в своей книге аль-Хорезми. Он показал, как складывать каждый разряд отдельно индийскими цифрами и «держать в уме». Его книгу перевели на латынь, и в Европе она сотни лет была учебником.', 'The column addition we use today was explained by al-Khwarizmi in his book. He showed how to add each place separately using Indian digits and how to “carry”. His book was translated into Latin and was a textbook in Europe for hundreds of years.'),
      L('Shu sababli Yevropada hisoblash qoidalari uzoq vaqt «algorizm» deb atalgan — Xorazmiy ismidan. Hozirgi «algoritm» so‘zi ham shundan kelib chiqqan!', 'Поэтому в Европе правила счёта долго называли «алгоризм» — от имени аль-Хорезми. Отсюда же и современное слово «алгоритм»!', 'That is why in Europe the rules of calculation were long called “algorism”, after al-Khwarizmi’s name. The modern word “algorithm” comes from it too!')
    ] },
    { kind: 'rule', h: L('Xonalab qo‘shish qoidasi', 'Правило поразрядного сложения', 'The place-by-place rule'), p: [
      L('234 + 152 ni hisoblaymiz. Har bir sonni xona qo‘shiluvchilariga ajratamiz:', 'Вычислим 234 + 152. Разложим каждое число на разрядные слагаемые:', 'Let us work out 234 + 152. Split each number into its place-value parts:')
    ], list: [
      L('Yuzliklar: 200 + 100 = 300.', 'Сотни: 200 + 100 = 300.', 'Hundreds: 200 + 100 = 300.'),
      L('O‘nliklar: 30 + 50 = 80.', 'Десятки: 30 + 50 = 80.', 'Tens: 30 + 50 = 80.'),
      L('Birliklar: 4 + 2 = 6.', 'Единицы: 4 + 2 = 6.', 'Ones: 4 + 2 = 6.'),
      L('Birlashtiramiz: 300 + 80 + 6 = <b>386</b>.', 'Объединяем: 300 + 80 + 6 = <b>386</b>.', 'Put together: 300 + 80 + 6 = <b>386</b>.')
    ], after: [
      L('<b>Ustun usuli.</b> Sonlarni bir-birining ostiga shunday yozamizki, birliklar birliklar ostida, o‘nliklar o‘nliklar ostida, yuzliklar yuzliklar ostida tursin. Qo‘shishni <b>birliklardan</b> boshlaymiz, o‘ngdan chapga.', '<b>Столбик.</b> Пишем числа одно под другим так, чтобы единицы стояли под единицами, десятки под десятками, сотни под сотнями. Складываем, начиная <b>с единиц</b>, справа налево.', '<b>The column method.</b> Write the numbers one under the other so that ones are under ones, tens under tens, hundreds under hundreds. Start adding <b>from the ones</b>, right to left.'),
      L('Agar birliklar yig‘indisi 10 yoki undan ko‘p bo‘lsa, 1 o‘nlikni «yodda saqlab», o‘nliklar xonasiga qo‘shamiz. Masalan, 148 + 236: 8 + 6 = 14 — 4 ni yozamiz, 1 ni yodda saqlaymiz; 4 + 3 + 1 = 8; 1 + 2 = 3. Javob: 384.', 'Если сумма единиц 10 или больше, 1 десяток «держим в уме» и прибавляем к десяткам. Например, 148 + 236: 8 + 6 = 14 — пишем 4, 1 в уме; 4 + 3 + 1 = 8; 1 + 2 = 3. Ответ: 384.', 'If the ones add up to 10 or more, we “carry” 1 ten into the tens place. For example, 148 + 236: 8 + 6 = 14, write 4 and carry 1; 4 + 3 + 1 = 8; 1 + 2 = 3. Answer: 384.')
    ] },
    { kind: 'steps', h: L('Qadamma-qadam: ustunda 325 + 241', 'Шаг за шагом: 325 + 241 столбиком', 'Step by step: 325 + 241 in a column'), p: [
      L('Ustun usulida qo‘shish algoritmi:', 'Алгоритм сложения столбиком:', 'The algorithm for column addition:')
    ], list: [
      L('1-qadam. Sonlarni xonama-xona to‘g‘ri yozing: 5 ostida 1, 2 ostida 4, 3 ostida 2.', 'Шаг 1. Запиши числа разряд под разрядом: под 5 — 1, под 2 — 4, под 3 — 2.', 'Step 1. Write the numbers place under place: 1 under 5, 4 under 2, 2 under 3.'),
      L('2-qadam. Birliklarni qo‘shing: 5 + 1 = 6. Birliklar ostiga 6 yozing.', 'Шаг 2. Сложи единицы: 5 + 1 = 6. Пиши 6 под единицами.', 'Step 2. Add the ones: 5 + 1 = 6. Write 6 under the ones.'),
      L('3-qadam. O‘nliklarni qo‘shing: 2 + 4 = 6. O‘nliklar ostiga 6 yozing.', 'Шаг 3. Сложи десятки: 2 + 4 = 6. Пиши 6 под десятками.', 'Step 3. Add the tens: 2 + 4 = 6. Write 6 under the tens.'),
      L('4-qadam. Yuzliklarni qo‘shing: 3 + 2 = 5. Yuzliklar ostiga 5 yozing.', 'Шаг 4. Сложи сотни: 3 + 2 = 5. Пиши 5 под сотнями.', 'Step 4. Add the hundreds: 3 + 2 = 5. Write 5 under the hundreds.'),
      L('5-qadam. Javobni o‘qing: <b>566</b>. Taxminiy tekshiring: 300 + 200 = 500, javob 500 ga yaqin — to‘g‘ri.', 'Шаг 5. Прочитай ответ: <b>566</b>. Прикинь: 300 + 200 = 500, ответ близок к 500 — верно.', 'Step 5. Read the answer: <b>566</b>. Estimate: 300 + 200 = 500, the answer is near 500, so it makes sense.')
    ] },
    { kind: 'example', h: L('Yechilgan namunalar', 'Разобранные примеры', 'Worked examples'), p: [
      L('Oddiydan murakkabga boramiz.', 'Идём от простого к сложному.', 'We go from easy to harder.')
    ], ex: [
      { q: L('321 + 456 = ?', '321 + 456 = ?', '321 + 456 = ?'), s: L('Birliklar: 1 + 6 = 7. O‘nliklar: 2 + 5 = 7. Yuzliklar: 3 + 4 = 7. Javob: <b>777</b>.', 'Единицы: 1 + 6 = 7. Десятки: 2 + 5 = 7. Сотни: 3 + 4 = 7. Ответ: <b>777</b>.', 'Ones: 1 + 6 = 7. Tens: 2 + 5 = 7. Hundreds: 3 + 4 = 7. Answer: <b>777</b>.') },
      { q: L('500 + 250 = ?', '500 + 250 = ?', '500 + 250 = ?'), s: L('Yuzliklar: 5 + 2 = 7, o‘nliklar: 0 + 5 = 5, birliklar: 0. Javob: <b>750</b>.', 'Сотни: 5 + 2 = 7, десятки: 0 + 5 = 5, единицы: 0. Ответ: <b>750</b>.', 'Hundreds: 5 + 2 = 7, tens: 0 + 5 = 5, ones: 0. Answer: <b>750</b>.') },
      { q: L('148 + 236 = ? (o‘tish bilan)', '148 + 236 = ? (с переходом)', '148 + 236 = ? (with carrying)'), s: L('Birliklar: 8 + 6 = 14 → 4 yozamiz, 1 yodda. O‘nliklar: 4 + 3 + 1 = 8. Yuzliklar: 1 + 2 = 3. Javob: <b>384</b>.', 'Единицы: 8 + 6 = 14 → пишем 4, 1 в уме. Десятки: 4 + 3 + 1 = 8. Сотни: 1 + 2 = 3. Ответ: <b>384</b>.', 'Ones: 8 + 6 = 14 → write 4, carry 1. Tens: 4 + 3 + 1 = 8. Hundreds: 1 + 2 = 3. Answer: <b>384</b>.') },
      { q: L('Kuzda 234 ta, bahorda 152 ta daraxt ekildi. Jami nechta?', 'Осенью посадили 234 дерева, весной 152. Сколько всего?', '234 trees were planted in autumn and 152 in spring. How many in all?'), s: L('234 + 152: birliklar 4 + 2 = 6, o‘nliklar 3 + 5 = 8, yuzliklar 2 + 1 = 3. Javob: <b>386 ta daraxt</b>.', '234 + 152: единицы 4 + 2 = 6, десятки 3 + 5 = 8, сотни 2 + 1 = 3. Ответ: <b>386 деревьев</b>.', '234 + 152: ones 4 + 2 = 6, tens 3 + 5 = 8, hundreds 2 + 1 = 3. Answer: <b>386 trees</b>.') },
      { q: L('Narx 450 so‘mga arzonlashdi va endi 380 so‘m bo‘ldi. Avval qancha edi?', 'Цена снизилась на 450 и стала 380. Какой была цена раньше?', 'A price went down by 450 and is now 380. What was it before?'), s: L('Avvalgi narx = hozirgi + arzonlashgan: 380 + 450. Birliklar 0, o‘nliklar 8 + 5 = 13 → 3, 1 yodda, yuzliklar 3 + 4 + 1 = 8. Javob: <b>830</b>.', 'Прежняя цена = нынешняя + скидка: 380 + 450. Единицы 0, десятки 8 + 5 = 13 → 3, 1 в уме, сотни 3 + 4 + 1 = 8. Ответ: <b>830</b>.', 'Old price = new price + discount: 380 + 450. Ones 0, tens 8 + 5 = 13 → 3, carry 1, hundreds 3 + 4 + 1 = 8. Answer: <b>830</b>.') }
    ] },
    { kind: 'table', h: L('Xonalab qo‘shish jadvali', 'Таблица поразрядного сложения', 'Place-by-place table'), p: [
      L('Jadvalda har bir xona alohida qo‘shilgan. Qatorlarni chapdan o‘ngga o‘qing.', 'В таблице каждый разряд сложен отдельно. Читай строки слева направо.', 'In the table each place is added separately. Read each row from left to right.')
    ], table: { head: [L('Misol', 'Пример', 'Sum'), L('Yuzliklar', 'Сотни', 'Hundreds'), L('O‘nliklar', 'Десятки', 'Tens'), L('Birliklar', 'Единицы', 'Ones'), L('Javob', 'Ответ', 'Answer')], rows: [
      ['234 + 152', '2 + 1 = 3', '3 + 5 = 8', '4 + 2 = 6', '386'],
      ['410 + 365', '4 + 3 = 7', '1 + 6 = 7', '0 + 5 = 5', '775'],
      ['603 + 204', '6 + 2 = 8', '0 + 0 = 0', '3 + 4 = 7', '807'],
      ['527 + 142', '5 + 1 = 6', '2 + 4 = 6', '7 + 2 = 9', '669'],
      ['148 + 236', '1 + 2 = 3', '4 + 3 + 1 = 8', '8 + 6 = 14', '384']
    ] }, after: [
      L('Oxirgi qatorga qarang: birliklarda 14 chiqdi, shuning uchun 1 o‘nlik o‘nliklar xonasiga o‘tdi.', 'Посмотри на последнюю строку: в единицах получилось 14, поэтому 1 десяток перешёл в разряд десятков.', 'Look at the last row: the ones made 14, so 1 ten moved over to the tens place.')
    ] },
    { kind: 'mistake', h: L('Tipik xatolar', 'Типичные ошибки', 'Common mistakes'), p: [
      L('Uch xonali sonlarni qo‘shganda eng ko‘p uchraydigan xatolar:', 'Самые частые ошибки при сложении трёхзначных чисел:', 'The most common mistakes when adding three-digit numbers:')
    ], list: [
      L('<b>Xonalarni siljitib yozish.</b> 325 + 41 da 41 ni chapga surib yozsangiz, 4 yuzliklar ostiga tushadi. Birliklarni birliklar ostiga yozing: javob 366.', '<b>Сдвигать разряды.</b> В 325 + 41, если сдвинуть 41 влево, 4 попадёт под сотни. Единицы пиши под единицами: ответ 366.', '<b>Misaligning places.</b> In 325 + 41, if you shift 41 to the left, the 4 lands under the hundreds. Put ones under ones: the answer is 366.'),
      L('<b>Yoddagini unutish.</b> 148 + 236 = 374 — xato, chunki yoddagi 1 qo‘shilmagan. To‘g‘risi 384.', '<b>Забыть то, что в уме.</b> 148 + 236 = 374 — ошибка, единицу из ума не прибавили. Верно — 384.', '<b>Forgetting the carry.</b> 148 + 236 = 374 is wrong because the carried 1 was left out. Correct: 384.'),
      L('<b>14 ni butunligicha yozish.</b> 8 + 6 = 14 bo‘lsa, birliklar ostiga faqat 4 yoziladi, 1 esa keyingi xonaga o‘tadi. Aks holda 31414 kabi g‘alati son chiqadi.', '<b>Писать 14 целиком.</b> Если 8 + 6 = 14, под единицами пишем только 4, а 1 переходит в следующий разряд. Иначе получится странное число вроде 31414.', '<b>Writing 14 whole.</b> If 8 + 6 = 14, only 4 goes under the ones and the 1 moves to the next place. Otherwise you get a strange number like 31414.'),
      L('<b>Chapdan boshlash.</b> Ustunda qo‘shishni doim birliklardan, o‘ngdan boshlang — aks holda yoddagi sonni qo‘shishga kech qolasiz.', '<b>Начинать слева.</b> Столбиком всегда начинай с единиц, справа, — иначе не успеешь прибавить то, что в уме.', '<b>Starting from the left.</b> In a column always start with the ones, on the right, or you will be too late to add the carry.')
    ] },
    { kind: 'life', h: L('Hayotda qo‘shish', 'Сложение в жизни', 'Addition in everyday life'), p: [
      L('<b>Do‘konda.</b> Siz 350 so‘mlik ruchka va 420 so‘mlik o‘chirg‘ich oldingiz. Kassada 350 + 420 = 770 so‘m to‘laysiz. Kassir aynan shunday hisoblaydi.', '<b>В магазине.</b> Ты купил ручку за 350 сумов и ластик за 420. На кассе платишь 350 + 420 = 770 сумов. Кассир считает именно так.', '<b>At the shop.</b> You bought a pen for 350 soms and an eraser for 420. At the till you pay 350 + 420 = 770 soms. The cashier adds it exactly this way.'),
      L('<b>Sayohatda.</b> Toshkentdan Samarqandgacha 300 km, Samarqanddan Buxorogacha yana 270 km. Butun yo‘l: 300 + 270 = 570 km.', '<b>В путешествии.</b> От Ташкента до Самарканда около 300 км, от Самарканда до Бухары ещё 270 км. Весь путь: 300 + 270 = 570 км.', '<b>On a trip.</b> From Tashkent to Samarkand is about 300 km, and from Samarkand to Bukhara another 270 km. The whole journey: 300 + 270 = 570 km.'),
      L('<b>Maktabda.</b> Maktabda 2-sinflarda 125 o‘quvchi, 3-sinflarda 132 o‘quvchi. Ikkalasida birga 257 o‘quvchi — direktor shuncha daftar buyurtma qiladi.', '<b>В школе.</b> Во 2-х классах 125 учеников, в 3-х — 132. Вместе 257 — столько тетрадей заказывает директор.', '<b>At school.</b> The second grades have 125 pupils and the third grades 132. Together that is 257, so the head teacher orders that many notebooks.'),
      L('<b>Sportda.</b> Basketbolchi birinchi mavsumda 215 ochko, ikkinchisida 340 ochko to‘pladi. Jami 555 ochko.', '<b>В спорте.</b> Баскетболист набрал 215 очков в первом сезоне и 340 во втором. Всего 555 очков.', '<b>In sport.</b> A basketball player scored 215 points in his first season and 340 in his second: 555 points in all.')
    ] },
    { kind: 'fact', h: L('Qiziqarli faktlar', 'Интересные факты', 'Fun facts'), list: [
      L('Mashhur nemis matematigi <b>Karl Gauss</b> bolaligida 1 dan 100 gacha bo‘lgan barcha sonlarning yig‘indisini bir necha daqiqada topgan: 5050! U sonlarni juftlab qo‘shgan: 1 + 100, 2 + 99, … har bir juft 101 ga teng, juftlar esa 50 ta.', 'Знаменитый немецкий математик <b>Карл Гаусс</b> в детстве за несколько минут нашёл сумму всех чисел от 1 до 100: 5050! Он складывал парами: 1 + 100, 2 + 99, … каждая пара даёт 101, а пар 50.', 'The famous German mathematician <b>Carl Gauss</b>, as a boy, found the sum of all numbers from 1 to 100 in a few minutes: 5050! He added them in pairs: 1 + 100, 2 + 99, … each pair makes 101, and there are 50 pairs.'),
      L('Yapon maktablarida bolalar hali ham soroban (cho‘t) bilan hisoblashni o‘rganadi. Tajribali hisobchilar uch xonali sonlarni kalkulyatordan tezroq qo‘shadi!', 'В японских школах дети до сих пор учатся считать на соробане (счётах). Опытные счётчики складывают трёхзначные числа быстрее калькулятора!', 'In Japanese schools children still learn to count on the soroban, an abacus. Skilled users add three-digit numbers faster than a calculator!'),
      L('Asalarilar bitta qoshiq asal yig‘ish uchun yuzlab gullarga qo‘nadi. Bir uyadagi asalarilar kuniga minglab gulni aylanib chiqadi.', 'Пчёлы садятся на сотни цветков, чтобы собрать одну ложку мёда. Пчёлы одного улья облетают тысячи цветков в день.', 'Bees visit hundreds of flowers to collect a single spoonful of honey. The bees of one hive visit thousands of flowers a day.')
    ] },
    { kind: 'practice', h: L('O‘ylab ko‘ring', 'Подумай', 'Think about it'), p: [
      L('Ustunda yozing va birliklardan boshlang.', 'Запиши столбиком и начни с единиц.', 'Write it in a column and start with the ones.')
    ], list: [
      L('412 + 375 = ? 630 + 209 = ? 257 + 316 = ?', '412 + 375 = ? 630 + 209 = ? 257 + 316 = ?', '412 + 375 = ? 630 + 209 = ? 257 + 316 = ?'),
      L('Kutubxonaga 245 ta ertak va 138 ta ensiklopediya keltirildi. Jami nechta kitob?', 'В библиотеку привезли 245 сказок и 138 энциклопедий. Сколько всего книг?', 'A library received 245 fairy-tale books and 138 encyclopaedias. How many books in all?'),
      L('Qaysi raqam yo‘qolgan: 3◻4 + 215 = 549?', 'Какая цифра пропущена: 3◻4 + 215 = 549?', 'Which digit is missing: 3◻4 + 215 = 549?')
    ], after: [
      L('Javoblar: 787, 839, 573. Ikkinchi: 245 + 138 = 383 ta kitob. Uchinchi: o‘nliklar ◻ + 1 = 4, demak ◻ = 3, son 334.', 'Ответы: 787, 839, 573. Второй: 245 + 138 = 383 книги. Третий: десятки ◻ + 1 = 4, значит ◻ = 3, число 334.', 'Answers: 787, 839, 573. Second: 245 + 138 = 383 books. Third: tens ◻ + 1 = 4, so ◻ = 3 and the number is 334.')
    ] },
    { kind: 'summary', h: L('Xulosa', 'Итог', 'Summary'), list: [
      L('Qo‘shiluvchi + qo‘shiluvchi = <b>yig‘indi</b>.', 'Слагаемое + слагаемое = <b>сумма</b>.', 'Addend + addend = <b>sum</b>.'),
      L('Uch xonali sonlarni <b>xonalab</b> qo‘shamiz: yuzlik + yuzlik, o‘nlik + o‘nlik, birlik + birlik.', 'Трёхзначные числа складываем <b>поразрядно</b>: сотни с сотнями, десятки с десятками, единицы с единицами.', 'Add three-digit numbers <b>place by place</b>: hundreds, tens and ones separately.'),
      L('Ustunda birliklarni birliklar ostiga yozamiz va <b>o‘ngdan</b> boshlaymiz.', 'В столбике единицы пишем под единицами и начинаем <b>справа</b>.', 'In a column put ones under ones and start <b>from the right</b>.'),
      L('Xonada 10 yoki ko‘p chiqsa, 1 ni keyingi xonaga o‘tkazamiz: 148 + 236 = 384.', 'Если в разряде получилось 10 или больше, 1 переносим в следующий разряд: 148 + 236 = 384.', 'If a place makes 10 or more, carry 1 to the next place: 148 + 236 = 384.'),
      L('Javobni taxminan tekshiring: 234 + 152 ≈ 200 + 200 = 400, 386 ga yaqin.', 'Проверь ответ прикидкой: 234 + 152 ≈ 200 + 200 = 400, близко к 386.', 'Check by estimating: 234 + 152 ≈ 200 + 200 = 400, close to 386.')
    ] }
  ] });

  // ---------- t5. Uch xonali sonlarni ayirish ----------
  T.add(P, 't5', { sections: [
    { kind: 'intro', h: L('Qancha qoldi?', 'Сколько осталось?', 'How many are left?'), p: [
      L('Omborda 586 kg kartoshka bor edi. Bozor kuni 243 kg sotildi. Qancha qoldi? Yoki: kitobda 320 sahifa, siz 175 sahifani o‘qidingiz — yana qanchasi qoldi? Bunday savollarga <b>ayirish</b> javob beradi.', 'На складе было 586 кг картофеля. В базарный день продали 243 кг. Сколько осталось? Или: в книге 320 страниц, ты прочитал 175 — сколько осталось? На такие вопросы отвечает <b>вычитание</b>.', 'A store had 586 kg of potatoes. On market day 243 kg were sold. How much is left? Or: a book has 320 pages and you have read 175. How many are left? <b>Subtraction</b> answers such questions.'),
      L('Ayirish qo‘shishga juda o‘xshaydi: bu yerda ham xonalab ishlaymiz. Lekin bitta yangi hiyla bor — agar biror xonada raqam yetmasa, qo‘shni xonadan «qarz» olamiz, ya’ni bitta o‘nlik yoki yuzlikni maydalaymiz.', 'Вычитание очень похоже на сложение: здесь тоже работаем по разрядам. Но есть одна новая хитрость — если в каком-то разряде не хватает, берём «взаймы» у соседнего разряда, то есть разменяем один десяток или сотню.', 'Subtraction is a lot like addition: we work place by place here too. But there is one new trick: if a place doesn’t have enough, we “borrow” from the next place, that is, we break one ten or one hundred.'),
      L('Bu mavzuda uch xonali sonlarni ayirishni, yuzlik va o‘nlikni maydalashni va javobni qo‘shish bilan tekshirishni o‘rganamiz.', 'В этой теме мы научимся вычитать трёхзначные числа, разменивать сотни и десятки и проверять ответ сложением.', 'In this topic we learn to subtract three-digit numbers, to break hundreds and tens, and to check the answer by adding.')
    ] },
    { kind: 'def', h: L('Ayirish atamalari', 'Термины вычитания', 'Words for subtraction'), p: [
      L('586 − 243 = 343 misolida har bir sonning nomi bor:', 'В примере 586 − 243 = 343 у каждого числа есть название:', 'In 586 − 243 = 343 each number has a name:')
    ], list: [
      L('586 — <b>kamayuvchi</b> (undan ayiramiz).', '586 — <b>уменьшаемое</b> (из него вычитаем).', '586 is the <b>minuend</b> (the number we take away from).'),
      L('243 — <b>ayriluvchi</b> (uni ayiramiz).', '243 — <b>вычитаемое</b> (его вычитаем).', '243 is the <b>subtrahend</b> (the number we take away).'),
      L('343 — <b>ayirma</b> (natija).', '343 — <b>разность</b> (результат).', '343 is the <b>difference</b> (the result).')
    ], after: [
      L('<b>Maydalash</b> — bu katta xona birligini kichik birliklarga almashtirish. 1 yuzlik = 10 o‘nlik, 1 o‘nlik = 10 birlik. Xuddi 100 so‘mlik tangani o‘nta 10 so‘mlikka almashtirgandek.', '<b>Размен</b> — это замена единицы старшего разряда на младшие. 1 сотня = 10 десятков, 1 десяток = 10 единиц. Как разменять монету в 100 сумов на десять по 10.', '<b>Breaking</b> means swapping one unit of a bigger place for smaller units: 1 hundred = 10 tens, 1 ten = 10 ones. Like changing a 100-som coin for ten 10-som coins.'),
      L('Ayirmani qo‘shish bilan tekshirish mumkin: ayirma + ayriluvchi = kamayuvchi. 343 + 243 = 586 ✓.', 'Разность можно проверить сложением: разность + вычитаемое = уменьшаемое. 343 + 243 = 586 ✓.', 'A difference can be checked by adding: difference + subtrahend = minuend. 343 + 243 = 586 ✓.')
    ] },
    { kind: 'history', h: L('Ayirish va «qarz» tarixi', 'История вычитания и «займа»', 'The history of subtraction and borrowing'), p: [
      L('Qadimgi Misrda ayirish qo‘shish orqali bajarilgan: kotiblar «nimani qo‘shsam, kerakli son chiqadi?» deb hisoblashgan. Bu hozirgi tekshirish usulimizga juda o‘xshaydi!', 'В Древнем Египте вычитали через сложение: писцы считали, «что нужно прибавить, чтобы получилось нужное число?». Это очень похоже на наш способ проверки!', 'In Ancient Egypt subtraction was done through addition: scribes asked “what must I add to get the number I need?”. That is very like our way of checking today!'),
      L('Xorazmiy kitobida ayirish ham xonalab, chapdan yoki o‘ngdan bajarilishi tushuntirilgan. Raqam yetmasa, yuqori xonadan bittasini olib, uni o‘nta qilib maydalash kerakligi aytilgan. Bu usul bugungacha deyarli o‘zgarmagan.', 'В книге аль-Хорезми вычитание тоже объяснено по разрядам. Там сказано: если цифры не хватает, возьми одну единицу из старшего разряда и раздели её на десять. Этот способ почти не изменился до наших дней.', 'Al-Khwarizmi’s book also explains subtraction place by place. It says that if a digit is too small, you take one unit from the higher place and break it into ten. The method has hardly changed since.'),
      L('Minus belgisi «−» esa ancha keyin, taxminan 500 yil oldin Germaniyada paydo bo‘lgan. Savdogarlar bochkalarga yetishmayotgan og‘irlikni belgilash uchun shunday chiziqcha chizishgan.', 'Знак минус «−» появился гораздо позже, около 500 лет назад в Германии. Купцы рисовали такую чёрточку на бочках, чтобы отметить недостающий вес.', 'The minus sign “−” came much later, about 500 years ago in Germany. Merchants drew such a dash on barrels to mark missing weight.')
    ] },
    { kind: 'rule', h: L('Xonalab ayirish qoidasi', 'Правило поразрядного вычитания', 'The place-by-place rule'), p: [
      L('586 − 243 ni xonalab hisoblaymiz:', 'Вычислим 586 − 243 по разрядам:', 'Work out 586 − 243 place by place:')
    ], list: [
      L('Birliklar: 6 − 3 = 3.', 'Единицы: 6 − 3 = 3.', 'Ones: 6 − 3 = 3.'),
      L('O‘nliklar: 8 − 4 = 4.', 'Десятки: 8 − 4 = 4.', 'Tens: 8 − 4 = 4.'),
      L('Yuzliklar: 5 − 2 = 3.', 'Сотни: 5 − 2 = 3.', 'Hundreds: 5 − 2 = 3.'),
      L('Javob: <b>343</b>.', 'Ответ: <b>343</b>.', 'Answer: <b>343</b>.')
    ], after: [
      L('<b>Raqam yetmasa — maydalaymiz.</b> 504 − 7: birliklarda 4 − 7 bo‘lmaydi. O‘nliklarda 0, demak yuzlikdan olamiz: 5 yuzlik → 4 yuzlik va 10 o‘nlik; bitta o‘nlikni maydalaymiz → 9 o‘nlik va 14 birlik. 14 − 7 = 7, o‘nliklar 9, yuzliklar 4. Javob: 497.', '<b>Если не хватает — разменяем.</b> 504 − 7: в единицах 4 − 7 не получится. В десятках 0, значит, берём из сотен: 5 сотен → 4 сотни и 10 десятков; один десяток разменяем → 9 десятков и 14 единиц. 14 − 7 = 7, десятков 9, сотен 4. Ответ: 497.', '<b>Not enough? Break one.</b> 504 − 7: in the ones, 4 − 7 won’t work. The tens are 0, so we take from the hundreds: 5 hundreds → 4 hundreds and 10 tens; break one ten → 9 tens and 14 ones. 14 − 7 = 7, tens 9, hundreds 4. Answer: 497.'),
      L('Ustunda ayirishni ham doim <b>birliklardan</b> boshlaymiz. Qarz olingan xonaning ustiga nuqta qo‘yib qo‘ysangiz, uni unutmaysiz.', 'Столбиком вычитаем тоже всегда начиная <b>с единиц</b>. Поставь точку над разрядом, у которого взял взаймы, — и не забудешь.', 'In a column we also always start <b>with the ones</b>. Put a dot over the place you borrowed from so you won’t forget it.')
    ] },
    { kind: 'steps', h: L('Qadamma-qadam: 652 − 381', 'Шаг за шагом: 652 − 381', 'Step by step: 652 − 381'), p: [
      L('Bu misolda o‘nliklar yetmaydi. Kuzating:', 'В этом примере не хватает десятков. Следи:', 'Here the tens are not enough. Watch:')
    ], list: [
      L('1-qadam. Ustunda yozamiz: 652 ostiga 381, birlik birlik ostida.', 'Шаг 1. Пишем столбиком: под 652 — 381, единицы под единицами.', 'Step 1. Write in a column: 381 under 652, ones under ones.'),
      L('2-qadam. Birliklar: 2 − 1 = 1.', 'Шаг 2. Единицы: 2 − 1 = 1.', 'Step 2. Ones: 2 − 1 = 1.'),
      L('3-qadam. O‘nliklar: 5 − 8 bo‘lmaydi. Yuzliklardan 1 ni olamiz: 6 yuzlik → 5 yuzlik, 5 o‘nlik → 15 o‘nlik. 15 − 8 = 7.', 'Шаг 3. Десятки: 5 − 8 не получится. Берём 1 из сотен: 6 сотен → 5, 5 десятков → 15. 15 − 8 = 7.', 'Step 3. Tens: 5 − 8 won’t work. Take 1 from the hundreds: 6 hundreds → 5, 5 tens → 15. 15 − 8 = 7.'),
      L('4-qadam. Yuzliklar: endi 5 − 3 = 2.', 'Шаг 4. Сотни: теперь 5 − 3 = 2.', 'Step 4. Hundreds: now 5 − 3 = 2.'),
      L('5-qadam. Javob: <b>271</b>. Tekshiramiz: 271 + 381 = 652 ✓.', 'Шаг 5. Ответ: <b>271</b>. Проверка: 271 + 381 = 652 ✓.', 'Step 5. Answer: <b>271</b>. Check: 271 + 381 = 652 ✓.')
    ] },
    { kind: 'example', h: L('Yechilgan namunalar', 'Разобранные примеры', 'Worked examples'), p: [
      L('Avval maydalash kerakmi-yo‘qmi, aniqlang.', 'Сначала определи, нужен ли размен.', 'First decide whether you need to break a unit.')
    ], ex: [
      { q: L('875 − 432 = ?', '875 − 432 = ?', '875 − 432 = ?'), s: L('Birliklar 5 − 2 = 3, o‘nliklar 7 − 3 = 4, yuzliklar 8 − 4 = 4. Javob: <b>443</b>.', 'Единицы 5 − 2 = 3, десятки 7 − 3 = 4, сотни 8 − 4 = 4. Ответ: <b>443</b>.', 'Ones 5 − 2 = 3, tens 7 − 3 = 4, hundreds 8 − 4 = 4. Answer: <b>443</b>.') },
      { q: L('600 − 250 = ?', '600 − 250 = ?', '600 − 250 = ?'), s: L('Birliklar 0 − 0 = 0. O‘nliklar 0 − 5 bo‘lmaydi: yuzlikni maydalaymiz → 5 yuzlik, 10 o‘nlik. 10 − 5 = 5, 5 − 2 = 3. Javob: <b>350</b>.', 'Единицы 0 − 0 = 0. Десятки 0 − 5 не выйдет: разменяем сотню → 5 сотен, 10 десятков. 10 − 5 = 5, 5 − 2 = 3. Ответ: <b>350</b>.', 'Ones 0 − 0 = 0. Tens 0 − 5 won’t work: break a hundred → 5 hundreds, 10 tens. 10 − 5 = 5, 5 − 2 = 3. Answer: <b>350</b>.') },
      { q: L('504 − 7 = ?', '504 − 7 = ?', '504 − 7 = ?'), s: L('4 − 7 bo‘lmaydi, o‘nlik 0. Yuzlikdan olamiz: 4 yuzlik, 9 o‘nlik, 14 birlik. 14 − 7 = 7. Javob: <b>497</b>.', '4 − 7 не выйдет, десятков 0. Берём из сотен: 4 сотни, 9 десятков, 14 единиц. 14 − 7 = 7. Ответ: <b>497</b>.', '4 − 7 won’t work and the tens are 0. Take from the hundreds: 4 hundreds, 9 tens, 14 ones. 14 − 7 = 7. Answer: <b>497</b>.') },
      { q: L('Omborda 586 kg kartoshka bor edi, 243 kg sotildi. Qancha qoldi?', 'На складе было 586 кг картофеля, продали 243 кг. Сколько осталось?', 'A store had 586 kg of potatoes and 243 kg were sold. How much is left?'), s: L('586 − 243 = 343. Tekshiruv: 343 + 243 = 586 ✓. Javob: <b>343 kg</b>.', '586 − 243 = 343. Проверка: 343 + 243 = 586 ✓. Ответ: <b>343 кг</b>.', '586 − 243 = 343. Check: 343 + 243 = 586 ✓. Answer: <b>343 kg</b>.') },
      { q: L('Kitobda 320 sahifa. Malika 175 sahifani o‘qidi. Necha sahifa qoldi?', 'В книге 320 страниц. Малика прочитала 175. Сколько осталось?', 'A book has 320 pages. Malika has read 175. How many are left?'), s: L('320 − 175: 0 − 5 bo‘lmaydi → 2 ni 1 qilamiz, 10 − 5 = 5. O‘nliklar 1 − 7 bo‘lmaydi → 3 ni 2 qilamiz, 11 − 7 = 4. Yuzliklar 2 − 1 = 1. Javob: <b>145 sahifa</b>.', '320 − 175: 0 − 5 не выйдет → 2 десятка становятся 1, 10 − 5 = 5. Десятки 1 − 7 не выйдет → 3 сотни становятся 2, 11 − 7 = 4. Сотни 2 − 1 = 1. Ответ: <b>145 страниц</b>.', '320 − 175: 0 − 5 won’t work → 2 tens become 1, 10 − 5 = 5. Tens 1 − 7 won’t work → 3 hundreds become 2, 11 − 7 = 4. Hundreds 2 − 1 = 1. Answer: <b>145 pages</b>.') }
    ] },
    { kind: 'table', h: L('Maydalash jadvali', 'Таблица размена', 'Breaking table'), p: [
      L('Bitta son turli yo‘l bilan yozilishi mumkin. Maydalaganda son o‘zgarmaydi, faqat ko‘rinishi o‘zgaradi.', 'Одно и то же число можно записать по-разному. При размене число не меняется, меняется только запись.', 'The same number can be written in different ways. Breaking does not change the number, only how it is written.')
    ], table: { head: [L('Son', 'Число', 'Number'), L('Odatdagi', 'Обычно', 'Usual'), L('Maydalangan', 'После размена', 'After breaking')], rows: [
      ['500', L('5 yuz', '5 сот.', '5 hundreds'), L('4 yuz 10 o‘n', '4 сот. 10 дес.', '4 hundreds 10 tens')],
      ['652', L('6 yuz 5 o‘n 2 bir', '6 сот. 5 дес. 2 ед.', '6 h 5 t 2 o'), L('5 yuz 15 o‘n 2 bir', '5 сот. 15 дес. 2 ед.', '5 h 15 t 2 o')],
      ['504', L('5 yuz 0 o‘n 4 bir', '5 сот. 0 дес. 4 ед.', '5 h 0 t 4 o'), L('4 yuz 9 o‘n 14 bir', '4 сот. 9 дес. 14 ед.', '4 h 9 t 14 o')],
      ['320', L('3 yuz 2 o‘n 0 bir', '3 сот. 2 дес. 0 ед.', '3 h 2 t 0 o'), L('2 yuz 11 o‘n 10 bir', '2 сот. 11 дес. 10 ед.', '2 h 11 t 10 o')]
    ] }, after: [
      L('Tekshirib ko‘ring: 4 yuzlik 9 o‘nlik 14 birlik = 400 + 90 + 14 = 504 ✓.', 'Проверь: 4 сотни 9 десятков 14 единиц = 400 + 90 + 14 = 504 ✓.', 'Check it: 4 hundreds 9 tens 14 ones = 400 + 90 + 14 = 504 ✓.')
    ] },
    { kind: 'mistake', h: L('Tipik xatolar', 'Типичные ошибки', 'Common mistakes'), p: [
      L('Ayirishda bolalar ko‘pincha shunday xato qiladi:', 'При вычитании дети часто ошибаются так:', 'Children often make these subtraction mistakes:')
    ], list: [
      L('<b>Kichikdan kattani emas, kattadan kichikni ayirish.</b> 652 − 381 da o‘nliklarda «8 − 5 = 3» deb yozish xato. Yuqoridagi raqamdan pastdagini ayiramiz: 5 − 8 bo‘lmasa — maydalaymiz.', '<b>Вычитать меньшее из большего, переставив цифры.</b> В 652 − 381 писать в десятках «8 − 5 = 3» — ошибка. Из верхней цифры вычитаем нижнюю: если 5 − 8 нельзя — разменяем.', '<b>Flipping the digits.</b> In 652 − 381, writing “8 − 5 = 3” in the tens is wrong. We always take the bottom digit from the top one; if 5 − 8 won’t work, break a unit.'),
      L('<b>Qarzni unutish.</b> Yuzlikdan bittasini olgandan keyin uni kamaytirmaslik: 652 − 381 = 371 — xato, to‘g‘risi 271.', '<b>Забыть про заём.</b> Взяли одну сотню, но не уменьшили сотни: 652 − 381 = 371 — ошибка, верно 271.', '<b>Forgetting the borrow.</b> Taking one hundred but not reducing the hundreds: 652 − 381 = 371 is wrong; it is 271.'),
      L('<b>Nol bilan adashish.</b> 504 − 7 da o‘nliklar 0, ularni ham maydalash kerak: javob 497, «507» yoki «503» emas.', '<b>Путаница с нулём.</b> В 504 − 7 десятков 0, их тоже нужно разменять: ответ 497, а не «507» или «503».', '<b>Getting stuck on zero.</b> In 504 − 7 the tens are 0, so they also need breaking: the answer is 497, not “507” or “503”.'),
      L('<b>Tekshirmaslik.</b> Har doim qo‘shish bilan tekshiring — bu 10 soniya oladi va xatoni darhol ko‘rsatadi.', '<b>Не проверять.</b> Всегда проверяй сложением — это займёт 10 секунд и сразу покажет ошибку.', '<b>Not checking.</b> Always check by adding: it takes 10 seconds and shows a mistake at once.')
    ] },
    { kind: 'life', h: L('Hayotda ayirish', 'Вычитание в жизни', 'Subtraction in everyday life'), p: [
      L('<b>Qaytim.</b> Siz 1000 so‘m berib, 650 so‘mlik muzqaymoq oldingiz. Sotuvchi 1000 − 650 = 350 so‘m qaytaradi. Qaytimni tekshirishni bilish — foydali odat.', '<b>Сдача.</b> Ты дал 1000 сумов за мороженое за 650. Продавец вернёт 1000 − 650 = 350 сумов. Уметь проверять сдачу — полезная привычка.', '<b>Change.</b> You pay 1000 soms for an ice cream that costs 650. The seller gives back 1000 − 650 = 350 soms. Checking your change is a useful habit.'),
      L('<b>Yo‘lda.</b> Toshkentdan Farg‘onagacha taxminan 310 km. 175 km yurdik. Yana 310 − 175 = 135 km qoldi.', '<b>В дороге.</b> От Ташкента до Ферганы около 310 км. Проехали 175 км. Осталось 310 − 175 = 135 км.', '<b>On the road.</b> From Tashkent to Fergana is about 310 km. We have driven 175 km, so 310 − 175 = 135 km are left.'),
      L('<b>Sportda.</b> Velosipedchi 500 metrlik poygada 380 metrni bosib o‘tdi. Marragacha 120 metr qoldi.', '<b>В спорте.</b> Велосипедист в гонке на 500 метров проехал 380 метров. До финиша осталось 120 метров.', '<b>In sport.</b> A cyclist in a 500-metre race has covered 380 metres. There are 120 metres to the finish.'),
      L('<b>Taqqoslash.</b> «Qanchaga ko‘p?» degan savolga ham ayirish javob beradi: Zarafshon (877 km) Chirchiqdan (161 km) 716 km uzun.', '<b>Сравнение.</b> На вопрос «на сколько больше?» тоже отвечает вычитание: Зеравшан (877 км) длиннее Чирчика (161 км) на 716 км.', '<b>Comparing.</b> Subtraction also answers “how much more?”: the Zarafshan (877 km) is 716 km longer than the Chirchik (161 km).'),
      L('<b>Oshxonada.</b> Onam palov uchun 500 gramm guruch oldi, lekin qozonga 350 grammini soldi. Idishda 500 − 350 = 150 gramm guruch qoldi — ertaga sho‘rva uchun yetadi. Ko‘rib turganingizdek, ayirish bizga har kuni, hatto ovqat tayyorlashda ham yordam beradi.', '<b>На кухне.</b> Мама купила 500 граммов риса для плова, а в казан положила 350. В пакете осталось 500 − 350 = 150 граммов — хватит на суп завтра. Как видишь, вычитание помогает каждый день, даже при готовке.', '<b>In the kitchen.</b> Mum bought 500 grams of rice for plov but put 350 grams in the pot. 500 − 350 = 150 grams are left in the bag, enough for soup tomorrow. As you can see, subtraction helps every day, even when cooking.')
    ] },
    { kind: 'fact', h: L('Qiziqarli faktlar', 'Интересные факты', 'Fun facts'), list: [
      L('Bir xil raqamlardan tuzilgan sonlar o‘yini: 3 ta har xil raqam oling (masalan, 7, 4, 1), ulardan eng katta sonni (741) va eng kichigini (147) tuzing. Ayiring: 741 − 147 = 594. Yana takrorlang: 954 − 459 = 495. Va yana: 954 − 459 = 495! Har doim 495 da to‘xtaysiz.', 'Игра с цифрами: возьми 3 разные цифры (например, 7, 4, 1), составь самое большое число (741) и самое маленькое (147). Вычти: 741 − 147 = 594. Повтори: 954 − 459 = 495. И снова 954 − 459 = 495! Всегда остановишься на 495.', 'A digit game: take 3 different digits (say 7, 4, 1), make the largest number (741) and the smallest (147). Subtract: 741 − 147 = 594. Repeat: 954 − 459 = 495. Again: 954 − 459 = 495! You always end up at 495.'),
      L('Ilk mexanik hisoblash mashinasini 1642-yilda 19 yoshli fransuz <b>Blez Paskal</b> otasiga soliq hisoblashda yordam berish uchun yasagan. U qo‘shish va ayirishni bajarardi.', 'Первую механическую счётную машину в 1642 году построил 19-летний француз <b>Блез Паскаль</b>, чтобы помочь отцу считать налоги. Она складывала и вычитала.', 'One of the first mechanical calculators was built in 1642 by 19-year-old <b>Blaise Pascal</b> in France to help his father with tax sums. It could add and subtract.'),
      L('Qaytimni «qo‘shib» berish usuli: sotuvchi 650 dan boshlab sanaydi: 700 (+50), 800, 900, 1000 (+300). Jami 350. Bu ham ayirish, faqat qo‘shish orqali!', 'Способ сдачи «прибавлением»: продавец считает от 650: 700 (+50), 800, 900, 1000 (+300). Всего 350. Это тоже вычитание, только через сложение!', 'Making change by “counting up”: the seller counts from 650: 700 (+50), 800, 900, 1000 (+300). That is 350 in all. It is subtraction done by adding!')
    ] },
    { kind: 'practice', h: L('O‘ylab ko‘ring', 'Подумай', 'Think about it'), p: [
      L('Har bir javobni qo‘shish bilan tekshiring.', 'Каждый ответ проверь сложением.', 'Check each answer by adding.')
    ], list: [
      L('968 − 523 = ? 700 − 340 = ? 812 − 256 = ?', '968 − 523 = ? 700 − 340 = ? 812 − 256 = ?', '968 − 523 = ? 700 − 340 = ? 812 − 256 = ?'),
      L('Maktabda 640 o‘quvchi bor. Ulardan 285 tasi qizlar. Nechta o‘g‘il bola?', 'В школе 640 учеников, из них 285 девочек. Сколько мальчиков?', 'A school has 640 pupils, 285 of whom are girls. How many boys?'),
      L('Qaysi son 400 dan 125 ta kam?', 'Какое число на 125 меньше 400?', 'Which number is 125 less than 400?')
    ], after: [
      L('Javoblar: 445, 360, 556. O‘g‘il bolalar: 640 − 285 = 355. Uchinchi: 400 − 125 = 275.', 'Ответы: 445, 360, 556. Мальчиков: 640 − 285 = 355. Третий: 400 − 125 = 275.', 'Answers: 445, 360, 556. Boys: 640 − 285 = 355. Third: 400 − 125 = 275.')
    ] },
    { kind: 'summary', h: L('Xulosa', 'Итог', 'Summary'), list: [
      L('Kamayuvchi − ayriluvchi = <b>ayirma</b>.', 'Уменьшаемое − вычитаемое = <b>разность</b>.', 'Minuend − subtrahend = <b>difference</b>.'),
      L('Xonalab ayiramiz, ustunda <b>birliklardan</b> boshlaymiz.', 'Вычитаем по разрядам, в столбике начинаем <b>с единиц</b>.', 'Subtract place by place; in a column start <b>with the ones</b>.'),
      L('Raqam yetmasa — yuqori xonadan bittasini <b>maydalaymiz</b>: 1 yuzlik = 10 o‘nlik, 1 o‘nlik = 10 birlik.', 'Если не хватает — <b>разменяем</b> единицу старшего разряда: 1 сотня = 10 десятков, 1 десяток = 10 единиц.', 'If a digit is too small, <b>break</b> one from the higher place: 1 hundred = 10 tens, 1 ten = 10 ones.'),
      L('Qarz olingan xonani bittaga kamaytirishni unutmang.', 'Не забудь уменьшить на 1 разряд, у которого взял взаймы.', 'Remember to reduce by 1 the place you borrowed from.'),
      L('Tekshirish: ayirma + ayriluvchi = kamayuvchi.', 'Проверка: разность + вычитаемое = уменьшаемое.', 'Check: difference + subtrahend = minuend.')
    ] }
  ] });

  // ---------- t6. Bir nechta sonni ustunda qo'shish. Masalalar ----------
  T.add(P, 't6', { sections: [
    { kind: 'intro', h: L('Uchta, to‘rtta son birga', 'Три, четыре числа вместе', 'Three or four numbers together'), p: [
      L('Uch kun davomida kutubxonaga kitob keltirildi: dushanba 120 ta, seshanba 245 ta, chorshanba 315 ta. Jami nechta? Bu yerda ikkita emas, <b>uchta qo‘shiluvchi</b> bor. Hayotda ko‘pincha shunday bo‘ladi: xarid savatchasida bir nechta narsa, haftalik sayr — bir necha kunlik yo‘l.', 'Три дня в библиотеку привозили книги: в понедельник 120, во вторник 245, в среду 315. Сколько всего? Здесь не два, а <b>три слагаемых</b>. В жизни так бывает часто: в корзине несколько покупок, в походе — путь за несколько дней.', 'For three days books were delivered to a library: 120 on Monday, 245 on Tuesday, 315 on Wednesday. How many in all? Here there are not two but <b>three addends</b>. This happens a lot in life: a shopping basket holds several items, a hike lasts several days.'),
      L('Yaxshi xabar: bir nechta sonni qo‘shish ikki sonni qo‘shishdan deyarli farq qilmaydi. Hammasini ustunga yozamiz va har bir xonani alohida qo‘shamiz. Faqat diqqat ko‘proq kerak, chunki yoddagi son 1 emas, 2 ham bo‘lishi mumkin!', 'Хорошая новость: сложить несколько чисел почти так же, как два. Пишем все в столбик и складываем каждый разряд отдельно. Только внимания нужно больше, ведь в уме может быть не 1, а 2!', 'Good news: adding several numbers is almost the same as adding two. We write them all in a column and add each place separately. You just need more care, because the carry can be 2, not only 1!'),
      L('Bu mavzuda bir nechta sonni ustunda qo‘shishni, qulay guruhlashni va masalalarni yechishni o‘rganamiz.', 'В этой теме научимся складывать несколько чисел столбиком, удобно их группировать и решать задачи.', 'In this topic we learn to add several numbers in a column, to group them cleverly and to solve word problems.')
    ] },
    { kind: 'def', h: L('Bir nechta qo‘shiluvchi', 'Несколько слагаемых', 'Several addends'), p: [
      L('120 + 245 + 315 = 680 yozuvida uchta qo‘shiluvchi va bitta yig‘indi bor. Qo‘shiluvchilar ikkitadan ko‘p bo‘lsa ham, ularning nomi o‘zgarmaydi.', 'В записи 120 + 245 + 315 = 680 три слагаемых и одна сумма. Даже если слагаемых больше двух, названия не меняются.', 'In 120 + 245 + 315 = 680 there are three addends and one sum. Even with more than two addends, the names stay the same.')
    ], list: [
      L('<b>O‘rin almashtirish xossasi:</b> qo‘shiluvchilar o‘rnini almashtirsak, yig‘indi o‘zgarmaydi. 120 + 245 + 315 = 315 + 245 + 120.', '<b>Переместительное свойство:</b> от перестановки слагаемых сумма не меняется. 120 + 245 + 315 = 315 + 245 + 120.', '<b>The swap property:</b> changing the order of the addends does not change the sum. 120 + 245 + 315 = 315 + 245 + 120.'),
      L('<b>Guruhlash xossasi:</b> qo‘shiluvchilarni istalgan tartibda guruhlab qo‘shish mumkin. (125 + 75) + 50 = 125 + (75 + 50).', '<b>Сочетательное свойство:</b> слагаемые можно группировать как угодно. (125 + 75) + 50 = 125 + (75 + 50).', '<b>The grouping property:</b> addends can be grouped in any way. (125 + 75) + 50 = 125 + (75 + 50).')
    ], after: [
      L('Bu ikki xossa bizga <b>qulay juftlarni</b> topishga imkon beradi: yig‘indisi butun yuzlik yoki o‘nlik bo‘ladigan sonlarni avval qo‘shamiz. Masalan, 125 + 75 = 200 — juda yumaloq son!', 'Эти два свойства помогают находить <b>удобные пары</b>: сначала складываем числа, которые дают круглые сотни или десятки. Например, 125 + 75 = 200 — очень круглое число!', 'These two properties let us find <b>friendly pairs</b>: first add the numbers that make whole hundreds or tens. For example, 125 + 75 = 200, a nice round number!')
    ] },
    { kind: 'history', h: L('Hisob-kitob daftarlari', 'Счётные книги', 'Account books'), p: [
      L('Qadimgi Bobilda, bundan 4 ming yil oldin, kotiblar loy taxtachalarga omborlardagi don, qo‘y va moy miqdorini yozishgan. Har oyning oxirida ular uzun ustunlarni qo‘shib, yillik hisobni chiqarishgan. Arxeologlar topgan taxtachalarda o‘nlab qo‘shiluvchili ustunlar bor!', 'В Древнем Вавилоне, 4 тысячи лет назад, писцы записывали на глиняных табличках количество зерна, овец и масла на складах. В конце месяца они складывали длинные столбцы и подводили годовой итог. На найденных археологами табличках — столбцы из десятков слагаемых!', 'In ancient Babylon, 4 000 years ago, scribes recorded grain, sheep and oil in storehouses on clay tablets. At the end of each month they added long columns to get yearly totals. Tablets found by archaeologists have columns with dozens of addends!'),
      L('Buyuk Ipak yo‘li karvonsaroylarida savdogarlar daftarlariga har bir tuya yukini yozib, kun oxirida jamlashgan. Beruniy o‘z asarlarida turli mamlakatlarning o‘lchov va pul birliklarini taqqoslab, ular bilan murakkab hisob-kitoblar qilgan.', 'В караван-сараях Великого шёлкового пути купцы записывали груз каждого верблюда, а вечером подводили итог. Беруни в своих трудах сравнивал меры и деньги разных стран и проводил с ними сложные расчёты.', 'In the caravanserais of the Silk Road merchants wrote down each camel’s load and added them up in the evening. Biruni, in his works, compared the measures and coins of different countries and made complex calculations with them.'),
      L('Bugun kompyuter jadvallari (masalan, Excel) ham xuddi shu ishni qiladi: ustundagi sonlarni qo‘shadi. Lekin uning ichidagi qoida — Xorazmiy davridagi ustun usuli!', 'Сегодня компьютерные таблицы (например, Excel) делают то же самое: складывают числа в столбце. Но внутри — всё тот же столбик времён аль-Хорезми!', 'Today computer spreadsheets such as Excel do the same job: they add the numbers in a column. But inside, it is the same column method from al-Khwarizmi’s time!')
    ] },
    { kind: 'rule', h: L('Ustunda qo‘shish qoidasi', 'Правило сложения столбиком', 'The column rule'), p: [
      L('Bir nechta sonni ustunda qo‘shish uchun:', 'Чтобы сложить несколько чисел столбиком:', 'To add several numbers in a column:')
    ], list: [
      L('Hamma sonlarni bir-birining ostiga yozing: birliklar bir ustunda, o‘nliklar bir ustunda, yuzliklar bir ustunda.', 'Запиши все числа одно под другим: единицы в одном столбце, десятки в одном, сотни в одном.', 'Write all the numbers one under another: ones in one column, tens in one, hundreds in one.'),
      L('Birliklar ustunidagi hamma raqamlarni qo‘shing. Natija 10 dan katta bo‘lsa, birliklarni yozing, o‘nliklarni (1 yoki 2) keyingi ustunga o‘tkazing.', 'Сложи все цифры в столбце единиц. Если получилось больше 10, пиши единицы, а десятки (1 или 2) переноси в следующий столбец.', 'Add all the digits in the ones column. If the total is over 10, write the ones and carry the tens (1 or 2) to the next column.'),
      L('O‘nliklar ustunini qo‘shing va yoddagini qo‘shing. Keyin yuzliklarni.', 'Сложи столбец десятков и прибавь то, что в уме. Потом сотни.', 'Add the tens column plus the carry. Then the hundreds.')
    ], after: [
      L('Misol: 120 + 245 + 315. Birliklar: 0 + 5 + 5 = 10 → 0 yozamiz, 1 yodda. O‘nliklar: 2 + 4 + 1 + 1 = 8. Yuzliklar: 1 + 2 + 3 = 6. Javob: <b>680</b>.', 'Пример: 120 + 245 + 315. Единицы: 0 + 5 + 5 = 10 → пишем 0, 1 в уме. Десятки: 2 + 4 + 1 + 1 = 8. Сотни: 1 + 2 + 3 = 6. Ответ: <b>680</b>.', 'Example: 120 + 245 + 315. Ones: 0 + 5 + 5 = 10 → write 0, carry 1. Tens: 2 + 4 + 1 + 1 = 8. Hundreds: 1 + 2 + 3 = 6. Answer: <b>680</b>.'),
      L('Ustunni qo‘shishda raqamlardan qulay juftlar qidiring: 3 + 7, 4 + 6, 5 + 5 — har biri 10.', 'Складывая столбец, ищи удобные пары цифр: 3 + 7, 4 + 6, 5 + 5 — каждая даёт 10.', 'When adding a column, look for friendly pairs of digits: 3 + 7, 4 + 6, 5 + 5, each makes 10.')
    ] },
    { kind: 'steps', h: L('Masalani yechish bosqichlari', 'Как решать задачу', 'How to solve a word problem'), p: [
      L('Matnli masalani yechishda shunday reja yordam beradi:', 'При решении текстовой задачи помогает такой план:', 'This plan helps when solving a word problem:')
    ], list: [
      L('1-qadam. Masalani diqqat bilan o‘qing. Nima ma’lum? Nima so‘ralyapti?', 'Шаг 1. Внимательно прочитай задачу. Что известно? Что спрашивают?', 'Step 1. Read the problem carefully. What do we know? What is being asked?'),
      L('2-qadam. Qisqa shart yozing: Du — 120, Se — 245, Chor — 315, jami — ?', 'Шаг 2. Запиши краткое условие: Пн — 120, Вт — 245, Ср — 315, всего — ?', 'Step 2. Write a short note: Mon 120, Tue 245, Wed 315, total ?'),
      L('3-qadam. Amalni tanlang. «Jami», «hammasi» — qo‘shish. «Qoldi», «qanchaga ko‘p» — ayirish.', 'Шаг 3. Выбери действие. «Всего», «вместе» — сложение. «Осталось», «на сколько больше» — вычитание.', 'Step 3. Choose the operation. “In all”, “together” mean add. “Left”, “how many more” mean subtract.'),
      L('4-qadam. Hisoblang (ustunda yoki qulay guruhlab).', 'Шаг 4. Вычисли (столбиком или удобно сгруппировав).', 'Step 4. Calculate (in a column or by grouping).'),
      L('5-qadam. Javobni birligi bilan yozing va mantiqiyligini tekshiring: «680 ta kitob».', 'Шаг 5. Запиши ответ с наименованием и проверь, разумен ли он: «680 книг».', 'Step 5. Write the answer with its unit and check it makes sense: “680 books”.')
    ] },
    { kind: 'example', h: L('Yechilgan namunalar', 'Разобранные примеры', 'Worked examples'), p: [
      L('Har birida qulay yo‘lni qidiring.', 'В каждом ищи удобный путь.', 'Look for the easy way in each.')
    ], ex: [
      { q: L('200 + 300 + 100 = ?', '200 + 300 + 100 = ?', '200 + 300 + 100 = ?'), s: L('Faqat yuzliklar: 2 + 3 + 1 = 6. Javob: <b>600</b>.', 'Только сотни: 2 + 3 + 1 = 6. Ответ: <b>600</b>.', 'Only hundreds: 2 + 3 + 1 = 6. Answer: <b>600</b>.') },
      { q: L('125 + 75 + 50 = ?', '125 + 75 + 50 = ?', '125 + 75 + 50 = ?'), s: L('Qulay juft: 125 + 75 = 200. Keyin 200 + 50 = <b>250</b>.', 'Удобная пара: 125 + 75 = 200. Потом 200 + 50 = <b>250</b>.', 'Friendly pair: 125 + 75 = 200. Then 200 + 50 = <b>250</b>.') },
      { q: L('Kutubxonaga 120, 245 va 315 ta kitob keltirildi. Jami nechta?', 'В библиотеку привезли 120, 245 и 315 книг. Сколько всего?', 'A library received 120, 245 and 315 books. How many in all?'), s: L('Ustunda: birliklar 0 + 5 + 5 = 10 → 0, 1 yodda; o‘nliklar 2 + 4 + 1 + 1 = 8; yuzliklar 1 + 2 + 3 = 6. Javob: <b>680 ta kitob</b>.', 'Столбиком: единицы 0 + 5 + 5 = 10 → 0, 1 в уме; десятки 2 + 4 + 1 + 1 = 8; сотни 1 + 2 + 3 = 6. Ответ: <b>680 книг</b>.', 'In a column: ones 0 + 5 + 5 = 10 → 0, carry 1; tens 2 + 4 + 1 + 1 = 8; hundreds 1 + 2 + 3 = 6. Answer: <b>680 books</b>.') },
      { q: L('Onam bozordan 350 so‘mlik non, 280 so‘mlik sut va 170 so‘mlik tuz oldi. Hammasi qancha?', 'Мама купила хлеб за 350 сумов, молоко за 280 и соль за 170. Сколько всё стоит?', 'Mum bought bread for 350 soms, milk for 280 and salt for 170. What is the total?'), s: L('Qulay juft: 280 + 170 = 450 (8 + 7 = 15 o‘nlik). Keyin 350 + 450 = 800. Javob: <b>800 so‘m</b>.', 'Удобная пара: 280 + 170 = 450. Потом 350 + 450 = 800. Ответ: <b>800 сумов</b>.', 'Friendly pair: 280 + 170 = 450. Then 350 + 450 = 800. Answer: <b>800 soms</b>.') },
      { q: L('148 + 236 + 99 = ?', '148 + 236 + 99 = ?', '148 + 236 + 99 = ?'), s: L('Birliklar: 8 + 6 + 9 = 23 → 3 yozamiz, <b>2</b> yodda. O‘nliklar: 4 + 3 + 9 + 2 = 18 → 8, 1 yodda. Yuzliklar: 1 + 2 + 1 = 4. Javob: <b>483</b>.', 'Единицы: 8 + 6 + 9 = 23 → пишем 3, <b>2</b> в уме. Десятки: 4 + 3 + 9 + 2 = 18 → 8, 1 в уме. Сотни: 1 + 2 + 1 = 4. Ответ: <b>483</b>.', 'Ones: 8 + 6 + 9 = 23 → write 3, carry <b>2</b>. Tens: 4 + 3 + 9 + 2 = 18 → 8, carry 1. Hundreds: 1 + 2 + 1 = 4. Answer: <b>483</b>.') }
    ] },
    { kind: 'table', h: L('Qulay juftlar', 'Удобные пары', 'Friendly pairs'), p: [
      L('Bu juftlarni eslab qolsangiz, bir nechta sonni qo‘shish ancha tezlashadi.', 'Запомнишь эти пары — складывать несколько чисел станет намного быстрее.', 'Remember these pairs and adding several numbers becomes much faster.')
    ], table: { head: [L('Juft', 'Пара', 'Pair'), L('Yig‘indi', 'Сумма', 'Sum'), L('Juft', 'Пара', 'Pair'), L('Yig‘indi', 'Сумма', 'Sum')], rows: [
      ['30 + 70', '100', '125 + 75', '200'],
      ['40 + 60', '100', '250 + 250', '500'],
      ['25 + 75', '100', '350 + 650', '1000'],
      ['55 + 45', '100', '480 + 20', '500'],
      ['99 + 1', '100', '199 + 1', '200']
    ] }, after: [
      L('Masalan: 30 + 145 + 70 = (30 + 70) + 145 = 100 + 145 = 245. Uch soniyada!', 'Например: 30 + 145 + 70 = (30 + 70) + 145 = 100 + 145 = 245. За три секунды!', 'For example: 30 + 145 + 70 = (30 + 70) + 145 = 100 + 145 = 245. In three seconds!')
    ] },
    { kind: 'mistake', h: L('Tipik xatolar', 'Типичные ошибки', 'Common mistakes'), p: [
      L('Bir nechta sonni qo‘shishda ehtiyot bo‘ling:', 'Складывая несколько чисел, будь внимателен:', 'Be careful when adding several numbers:')
    ], list: [
      L('<b>Bitta sonni tashlab ketish.</b> Ustunda uchta son bo‘lsa, har bir ustunda uchta raqamni qo‘shing. Barmog‘ingiz bilan ko‘rsatib sanang.', '<b>Пропустить число.</b> Если в столбике три числа, в каждом столбце складывай три цифры. Показывай пальцем.', '<b>Skipping a number.</b> If the column has three numbers, add three digits in each column. Point with your finger.'),
      L('<b>Yoddagi 2 ni 1 deb olish.</b> 8 + 6 + 9 = 23 bo‘lsa, keyingi xonaga 2 o‘tadi, 1 emas.', '<b>Брать в уме 1 вместо 2.</b> Если 8 + 6 + 9 = 23, в следующий разряд переходит 2, а не 1.', '<b>Carrying 1 instead of 2.</b> If 8 + 6 + 9 = 23, carry 2 to the next place, not 1.'),
      L('<b>Ikki xonali sonni noto‘g‘ri yozish.</b> 99 ni ustunda yuzliklar ostiga surib qo‘ymang: 9 o‘nliklar ostida, 9 birliklar ostida.', '<b>Неверно записать двузначное число.</b> Не сдвигай 99 под сотни: 9 под десятками, 9 под единицами.', '<b>Misplacing a two-digit number.</b> Don’t shift 99 under the hundreds: one 9 under the tens and one under the ones.'),
      L('<b>Masalada noto‘g‘ri amal.</b> «Jami» so‘zi bo‘lsa — qo‘shamiz. Har bir son masalada nimani bildirishini tushunib oling.', '<b>Неверное действие в задаче.</b> Если сказано «всего» — складываем. Пойми, что означает каждое число в задаче.', '<b>Wrong operation in a problem.</b> If it says “in all”, we add. Understand what each number in the problem means.')
    ] },
    { kind: 'life', h: L('Hayotda', 'В жизни', 'In everyday life'), p: [
      L('<b>Xarid.</b> Kassada chek: daftar 300, qalam 150, chizg‘ich 250 so‘m. Jami 700 so‘m. Kassa apparati ham xuddi ustunda qo‘shadi.', '<b>Покупки.</b> На кассе чек: тетрадь 300, карандаш 150, линейка 250 сумов. Всего 700 сумов. Кассовый аппарат тоже складывает столбиком.', '<b>Shopping.</b> A receipt: notebook 300, pencil 150, ruler 250 soms. Total 700 soms. The till adds in a column too.'),
      L('<b>Sayohat.</b> Oila uch kun sayohat qildi: 1-kuni 210 km, 2-kuni 180 km, 3-kuni 250 km. Jami 640 km.', '<b>Путешествие.</b> Семья путешествовала три дня: 210 км, 180 км, 250 км. Всего 640 км.', '<b>Travel.</b> A family travelled for three days: 210 km, 180 km and 250 km. That is 640 km in all.'),
      L('<b>Sport.</b> Futbol jamoasi uch o‘yinda tomoshabinlar: 320, 415, 265 kishi. Jami 1000 kishi!', '<b>Спорт.</b> На три матча команды пришли 320, 415 и 265 зрителей. Всего 1000 человек!', '<b>Sport.</b> A team’s three matches had 320, 415 and 265 spectators: 1000 people in all!'),
      L('<b>Tabiat.</b> Asalari oilasi uch oyda 120, 150 va 130 gramm asal yig‘di — jami 400 gramm.', '<b>Природа.</b> Пчелиная семья за три месяца собрала 120, 150 и 130 граммов мёда — всего 400 граммов.', '<b>Nature.</b> A bee colony gathered 120, 150 and 130 grams of honey over three months: 400 grams in all.')
    ] },
    { kind: 'fact', h: L('Qiziqarli faktlar', 'Интересные факты', 'Fun facts'), list: [
      L('Sehrli kvadrat: 3 × 3 katakka 1 dan 9 gacha sonlar shunday joylanganki, har bir qator, ustun va diagonal yig‘indisi 15 ga teng. Xitoyda bu kvadrat 2000 yildan ko‘proq vaqt oldin ma’lum bo‘lgan.', 'Магический квадрат: в клетках 3 × 3 числа от 1 до 9 расставлены так, что сумма в каждой строке, столбце и диагонали равна 15. В Китае его знали больше 2000 лет назад.', 'A magic square: in a 3 × 3 grid the numbers 1 to 9 are placed so that every row, column and diagonal adds up to 15. It was known in China more than 2 000 years ago.'),
      L('Bir yilda 365 kun bor. Uni oylar bo‘yicha qo‘shsangiz: 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31 = 365. O‘n ikkita qo‘shiluvchi!', 'В году 365 дней. Сложи дни по месяцам: 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31 = 365. Двенадцать слагаемых!', 'A year has 365 days. Add the months: 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31 = 365. Twelve addends!'),
      L('Tez hisoblovchilar musobaqalarida ishtirokchilar ekranda tez-tez chiqadigan 15 ta uch xonali sonni bir necha soniyada qo‘shishadi.', 'На соревнованиях по устному счёту участники складывают 15 трёхзначных чисел, мелькающих на экране, за несколько секунд.', 'In mental-arithmetic contests, people add 15 three-digit numbers flashing on a screen in just a few seconds.')
    ] },
    { kind: 'practice', h: L('O‘ylab ko‘ring', 'Подумай', 'Think about it'), p: [
      L('Avval qulay juft qidiring, keyin ustunda tekshiring.', 'Сначала ищи удобную пару, потом проверь столбиком.', 'Look for a friendly pair first, then check in a column.')
    ], list: [
      L('160 + 275 + 40 = ? 333 + 222 + 111 = ? 45 + 180 + 55 = ?', '160 + 275 + 40 = ? 333 + 222 + 111 = ? 45 + 180 + 55 = ?', '160 + 275 + 40 = ? 333 + 222 + 111 = ? 45 + 180 + 55 = ?'),
      L('Bog‘dan birinchi kuni 135 kg, ikkinchi kuni 210 kg, uchinchi kuni 165 kg olma terildi. Jami necha kg?', 'В саду собрали яблоки: в первый день 135 кг, во второй 210 кг, в третий 165 кг. Сколько всего?', 'Apples were picked in an orchard: 135 kg on day one, 210 kg on day two, 165 kg on day three. How much in all?'),
      L('To‘rtta sonning yig‘indisi 1000. Uchtasi 250, 300 va 150. To‘rtinchisi qancha?', 'Сумма четырёх чисел равна 1000. Три из них — 250, 300 и 150. Чему равно четвёртое?', 'Four numbers add up to 1000. Three of them are 250, 300 and 150. What is the fourth?')
    ], after: [
      L('Javoblar: 475, 666, 280. Olma: 135 + 165 = 300, 300 + 210 = 510 kg. To‘rtinchi son: 250 + 300 + 150 = 700, 1000 − 700 = 300.', 'Ответы: 475, 666, 280. Яблоки: 135 + 165 = 300, 300 + 210 = 510 кг. Четвёртое число: 250 + 300 + 150 = 700, 1000 − 700 = 300.', 'Answers: 475, 666, 280. Apples: 135 + 165 = 300, 300 + 210 = 510 kg. Fourth number: 250 + 300 + 150 = 700, 1000 − 700 = 300.')
    ] },
    { kind: 'summary', h: L('Xulosa', 'Итог', 'Summary'), list: [
      L('Bir nechta sonni ustunda qo‘shganda hammasini <b>xonama-xona</b> yozamiz.', 'Складывая несколько чисел столбиком, пишем их <b>разряд под разрядом</b>.', 'When adding several numbers, write them <b>place under place</b>.'),
      L('Har bir ustunni birliklardan boshlab qo‘shamiz; yoddagi son 1 yoki 2 bo‘lishi mumkin.', 'Складываем каждый столбец, начиная с единиц; в уме может быть 1 или 2.', 'Add each column starting with the ones; the carry can be 1 or 2.'),
      L('Qo‘shiluvchilarni almashtirish va guruhlash mumkin — yig‘indi o‘zgarmaydi.', 'Слагаемые можно переставлять и группировать — сумма не меняется.', 'Addends can be swapped and grouped; the sum does not change.'),
      L('Qulay juftlar (125 + 75 = 200) hisoblashni tezlashtiradi.', 'Удобные пары (125 + 75 = 200) ускоряют счёт.', 'Friendly pairs (125 + 75 = 200) speed things up.'),
      L('Masala: o‘qing → qisqa shart → amal → hisoblash → birligi bilan javob.', 'Задача: прочитай → краткое условие → действие → вычисление → ответ с наименованием.', 'Word problem: read → short note → operation → calculate → answer with its unit.')
    ] }
  ] });
})(this);
(function (root) { 'use strict'; var L = root.NMCurriculum.H.L, T = root.NMTheory, P = '2-2';

  // ---------- t7. Metr, detsimetr, santimetr ----------
  T.add(P, 't7', { sections: [
    { kind: 'intro', h: L('Uzun narsalarni o‘lchaymiz', 'Измеряем длинное', 'Measuring long things'), p: [
      L('Qalamni santimetrlar bilan o‘lchash qulay: 15 cm. Lekin sinf xonasining uzunligini santimetrda o‘lchab ko‘ring — 800 cm chiqadi! Bu juda katta son. Shuning uchun uzun narsalar uchun kattaroq birlik bor — <b>metr</b>.', 'Карандаш удобно мерить сантиметрами: 15 см. А попробуй измерить в сантиметрах длину класса — выйдет 800 см! Это очень большое число. Поэтому для длинного есть единица побольше — <b>метр</b>.', 'A pencil is easy to measure in centimetres: 15 cm. But try measuring a classroom in centimetres and you get 800 cm! That is a very big number. So for long things there is a bigger unit, the <b>metre</b>.'),
      L('Metr — taxminan katta odamning bir qadami yoki eshikning yarmidan sal kattaroq. Siz qo‘lingizni yonga cho‘zsangiz, bir qo‘l uchidan ikkinchisigacha 1 metrdan sal oshiqroq bo‘ladi.', 'Метр — это примерно большой шаг взрослого или чуть больше половины высоты двери. Если ты разведёшь руки в стороны, от кончиков одних пальцев до других будет чуть больше метра.', 'A metre is about one big step of a grown-up, or a little more than half the height of a door. If you stretch your arms out sideways, it is a bit more than a metre from fingertip to fingertip.'),
      L('Bu mavzuda metr, detsimetr va santimetr orasidagi bog‘lanishni, bir birlikdan boshqasiga o‘tishni va qaysi birlikni qachon ishlatishni o‘rganamiz.', 'В этой теме узнаем, как связаны метр, дециметр и сантиметр, как переводить одни единицы в другие и когда какую единицу использовать.', 'In this topic we learn how metres, decimetres and centimetres are linked, how to convert between them and which unit to use when.')
    ] },
    { kind: 'def', h: L('Uzunlik birliklari', 'Единицы длины', 'Units of length'), p: [
      L('Biz bilgan uzunlik birliklari kichikdan kattaga:', 'Известные нам единицы длины от маленькой к большой:', 'The units of length we know, from small to large:')
    ], list: [
      L('<b>Santimetr</b> (cm) — chizg‘ichdagi raqamlar orasidagi masofa. Kichik barmog‘ingizning eni taxminan 1 cm.', '<b>Сантиметр</b> (см) — расстояние между цифрами на линейке. Ширина мизинца — примерно 1 см.', '<b>Centimetre</b> (cm) — the gap between numbers on a ruler. Your little finger is about 1 cm wide.'),
      L('<b>Detsimetr</b> (dm) — 10 santimetr. Kaftingizning eni taxminan 1 dm.', '<b>Дециметр</b> (дм) — 10 сантиметров. Ширина ладони — примерно 1 дм.', '<b>Decimetre</b> (dm) — 10 centimetres. The width of your palm is about 1 dm.'),
      L('<b>Metr</b> (m) — 10 detsimetr yoki 100 santimetr.', '<b>Метр</b> (м) — 10 дециметров или 100 сантиметров.', '<b>Metre</b> (m) — 10 decimetres or 100 centimetres.')
    ], after: [
      L('Asosiy bog‘lanishlar: <b>1 m = 10 dm = 100 cm</b>, <b>1 dm = 10 cm</b>. Har bir keyingi birlik oldingisidan 10 marta katta — xuddi birlik, o‘nlik va yuzlik kabi!', 'Главные связи: <b>1 м = 10 дм = 100 см</b>, <b>1 дм = 10 см</b>. Каждая следующая единица в 10 раз больше предыдущей — совсем как единицы, десятки и сотни!', 'The key links: <b>1 m = 10 dm = 100 cm</b>, <b>1 dm = 10 cm</b>. Each unit is 10 times the one before, just like ones, tens and hundreds!'),
      L('Nomlarga e’tibor bering: «santi» — yuzdan bir (metrning yuzdan bir qismi), «detsi» — o‘ndan bir (metrning o‘ndan bir qismi).', 'Обрати внимание на названия: «санти» — сотая (сотая часть метра), «деци» — десятая (десятая часть метра).', 'Notice the names: “centi” means a hundredth (a hundredth of a metre), “deci” means a tenth (a tenth of a metre).')
    ] },
    { kind: 'history', h: L('Metr qanday paydo bo‘lgan?', 'Как появился метр?', 'How the metre was born'), p: [
      L('Qadimda har bir xalq o‘z o‘lchovidan foydalangan: <b>qarich</b> (bosh va kichik barmoq orasidagi masofa), <b>tirsak</b> (tirsakdan barmoq uchigacha), <b>qadam</b>, <b>quloch</b> (ikki qo‘l yoyilganda). O‘zbekistonda gaz (taxminan 70 cm) bilan mato o‘lchashgan. Muammo shundaki, har kimning qo‘li har xil!', 'В древности у каждого народа были свои меры: <b>пядь</b> (между большим пальцем и мизинцем), <b>локоть</b> (от локтя до кончиков пальцев), <b>шаг</b>, <b>сажень</b> (размах рук). В Узбекистане ткань мерили газом (около 70 см). Проблема в том, что руки у всех разные!', 'Long ago every people had its own measures: the <b>span</b> (thumb to little finger), the <b>cubit</b> (elbow to fingertips), the <b>pace</b>, the <b>fathom</b> (arms outstretched). In Uzbekistan cloth was measured by the gaz (about 70 cm). The trouble was that everyone’s arms are different!'),
      L('Qadimgi Misrda piramidalarni qurish uchun «qirollik tirsagi» — taxminan 52 cm uzunlikdagi namuna-tayoq bo‘lgan. Barcha quruvchilar o‘z tayoqlarini u bilan tekshirib turishgan.', 'В Древнем Египте для строительства пирамид был «царский локоть» — эталонная палка около 52 см. Все строители сверяли с ним свои мерки.', 'In Ancient Egypt the pyramid builders used a “royal cubit”, a master rod about 52 cm long. All builders checked their own rods against it.'),
      L('1790-yillarda Fransiyada olimlar hamma uchun bir xil birlik yaratishga qaror qilishdi. Ular Yer meridianining bir qismini o‘lchab, <b>metr</b>ni belgilashdi. 1799-yilda platinadan metr namunasi yasaldi. Hozir metr ko‘pchilik mamlakatlarda, jumladan O‘zbekistonda ham ishlatiladi.', 'В 1790-х годах во Франции учёные решили создать одну единицу для всех. Они измерили часть земного меридиана и определили <b>метр</b>. В 1799 году был изготовлен платиновый эталон метра. Сейчас метром пользуются почти во всех странах, и в Узбекистане тоже.', 'In the 1790s scientists in France decided to create one unit for everyone. They measured part of the Earth’s meridian and defined the <b>metre</b>. In 1799 a platinum master metre was made. Today the metre is used in almost every country, Uzbekistan included.')
    ] },
    { kind: 'rule', h: L('Birliklarni almashtirish qoidasi', 'Правило перевода единиц', 'The conversion rule'), p: [
      L('Katta birlikdan kichik birlikka o‘tganda son <b>kattalashadi</b> (chunki kichik bo‘laklar ko‘p kerak):', 'При переходе от большей единицы к меньшей число <b>увеличивается</b> (ведь маленьких частей нужно больше):', 'Going from a bigger unit to a smaller one, the number gets <b>bigger</b> (you need more small pieces):')
    ], list: [
      L('m → dm: 10 ga ko‘paytiramiz (oxiriga 0 yozamiz). 3 m = 30 dm.', 'м → дм: умножаем на 10 (приписываем 0). 3 м = 30 дм.', 'm → dm: multiply by 10 (add one 0). 3 m = 30 dm.'),
      L('m → cm: 100 ga ko‘paytiramiz (oxiriga 00 yozamiz). 3 m = 300 cm.', 'м → см: умножаем на 100 (приписываем 00). 3 м = 300 см.', 'm → cm: multiply by 100 (add two 0s). 3 m = 300 cm.'),
      L('dm → cm: 10 ga ko‘paytiramiz. 4 dm = 40 cm.', 'дм → см: умножаем на 10. 4 дм = 40 см.', 'dm → cm: multiply by 10. 4 dm = 40 cm.')
    ], after: [
      L('<b>Aralash o‘lchovlar:</b> 2 m 35 cm = 200 cm + 35 cm = 235 cm. Teskarisi: 235 cm — bu 2 ta to‘liq metr (200 cm) va yana 35 cm, ya’ni 2 m 35 cm.', '<b>Составные величины:</b> 2 м 35 см = 200 см + 35 см = 235 см. Обратно: 235 см — это 2 полных метра (200 см) и ещё 35 см, то есть 2 м 35 см.', '<b>Mixed measures:</b> 2 m 35 cm = 200 cm + 35 cm = 235 cm. The other way: 235 cm is 2 whole metres (200 cm) plus 35 cm, that is 2 m 35 cm.'),
      L('Diqqat: 1 m 5 cm = 105 cm, «15 cm» emas! Santimetrlar uchun ikkita xona bor: 1 m 5 cm = 100 + 5 = 105.', 'Внимание: 1 м 5 см = 105 см, а не «15 см»! Для сантиметров два разряда: 1 м 5 см = 100 + 5 = 105.', 'Careful: 1 m 5 cm = 105 cm, not “15 cm”! Centimetres take two places: 1 m 5 cm = 100 + 5 = 105.')
    ] },
    { kind: 'steps', h: L('Qadamma-qadam: metr tasmasi bilan o‘lchash', 'Шаг за шагом: измеряем рулеткой', 'Step by step: measuring with a tape'), p: [
      L('Sinf doskasining uzunligini o‘lchaymiz:', 'Измерим длину классной доски:', 'Let us measure the length of the classroom board:')
    ], list: [
      L('1-qadam. Tasmaning 0 belgisini doskaning chap chetiga to‘g‘ri qo‘ying.', 'Шаг 1. Приложи отметку 0 рулетки точно к левому краю доски.', 'Step 1. Put the 0 mark of the tape exactly at the left edge of the board.'),
      L('2-qadam. Tasmani tekis, egilmasdan doska bo‘ylab torting.', 'Шаг 2. Натяни рулетку ровно вдоль доски, без провисаний.', 'Step 2. Pull the tape straight along the board without sagging.'),
      L('3-qadam. O‘ng chetdagi belgini o‘qing: masalan, 2 m 40 cm.', 'Шаг 3. Прочитай отметку у правого края: например, 2 м 40 см.', 'Step 3. Read the mark at the right edge: for example, 2 m 40 cm.'),
      L('4-qadam. Javobni kerakli birlikda yozing: 2 m 40 cm = 240 cm = 24 dm.', 'Шаг 4. Запиши ответ в нужных единицах: 2 м 40 см = 240 см = 24 дм.', 'Step 4. Write the answer in the unit you need: 2 m 40 cm = 240 cm = 24 dm.')
    ], after: [
      L('Agar tasma yo‘q bo‘lsa, 1 metrli ip yasang va uni bir necha marta qo‘yib o‘lchang. Bu usulni qadimgi quruvchilar ham ishlatgan.', 'Если рулетки нет, сделай верёвку длиной 1 метр и откладывай её несколько раз. Так делали и древние строители.', 'If you have no tape, make a 1-metre string and lay it down several times. Ancient builders did the same.')
    ] },
    { kind: 'example', h: L('Yechilgan namunalar', 'Разобранные примеры', 'Worked examples'), p: [
      L('Avval qaysi birlikdan qaysisiga o‘tayotganimizni aniqlaymiz.', 'Сначала определяем, из какой единицы в какую переводим.', 'First decide which unit we are converting from and to.')
    ], ex: [
      { q: L('5 m = ? cm', '5 м = ? см', '5 m = ? cm'), s: L('1 m = 100 cm, demak 5 m = 5 ta 100 = <b>500 cm</b>.', '1 м = 100 см, значит 5 м = 5 раз по 100 = <b>500 см</b>.', '1 m = 100 cm, so 5 m = 5 lots of 100 = <b>500 cm</b>.') },
      { q: L('7 dm = ? cm', '7 дм = ? см', '7 dm = ? cm'), s: L('1 dm = 10 cm, demak 7 dm = <b>70 cm</b>.', '1 дм = 10 см, значит 7 дм = <b>70 см</b>.', '1 dm = 10 cm, so 7 dm = <b>70 cm</b>.') },
      { q: L('3 m 8 cm = ? cm', '3 м 8 см = ? см', '3 m 8 cm = ? cm'), s: L('3 m = 300 cm. 300 + 8 = <b>308 cm</b>. «38» emas!', '3 м = 300 см. 300 + 8 = <b>308 см</b>. Не «38»!', '3 m = 300 cm. 300 + 8 = <b>308 cm</b>. Not “38”!') },
      { q: L('460 cm ni metr va santimetrda yozing.', 'Запиши 460 см в метрах и сантиметрах.', 'Write 460 cm in metres and centimetres.'), s: L('460 = 400 + 60. 400 cm = 4 m. Javob: <b>4 m 60 cm</b>.', '460 = 400 + 60. 400 см = 4 м. Ответ: <b>4 м 60 см</b>.', '460 = 400 + 60. 400 cm = 4 m. Answer: <b>4 m 60 cm</b>.') },
      { q: L('Qaysi uzun: 2 m yoki 150 cm?', 'Что длиннее: 2 м или 150 см?', 'Which is longer: 2 m or 150 cm?'), s: L('Bir xil birlikka keltiramiz: 2 m = 200 cm. 200 > 150. Javob: <b>2 m uzunroq</b>, 50 cm ga.', 'Приводим к одной единице: 2 м = 200 см. 200 > 150. Ответ: <b>2 м длиннее</b>, на 50 см.', 'Use the same unit: 2 m = 200 cm. 200 > 150. Answer: <b>2 m is longer</b>, by 50 cm.') }
    ] },
    { kind: 'table', h: L('Qaysi birlik qulay?', 'Какая единица удобнее?', 'Which unit fits?'), p: [
      L('Narsaning kattaligiga qarab birlik tanlaymiz.', 'Единицу выбираем по размеру предмета.', 'We choose a unit to suit the size of the object.')
    ], table: { head: [L('Narsa', 'Предмет', 'Object'), L('Taxminiy uzunlik', 'Примерная длина', 'About'), L('Qulay birlik', 'Удобная единица', 'Best unit')], rows: [
      [L('Qalam', 'Карандаш', 'Pencil'), '15 cm', 'cm'],
      [L('Daftar', 'Тетрадь', 'Notebook'), '2 dm', 'dm / cm'],
      [L('Parta', 'Парта', 'Desk'), '12 dm', 'dm / cm'],
      [L('Sinf xonasi', 'Класс', 'Classroom'), '8 m', 'm'],
      [L('Futbol maydoni', 'Футбольное поле', 'Football pitch'), '105 m', 'm'],
      [L('Shaharlar orasi', 'Между городами', 'Between cities'), '300 km', 'km']
    ] }, after: [
      L('Juda katta masofalar uchun <b>kilometr</b> bor: 1 km = 1000 m. Uni yuqori sinflarda batafsil o‘rganamiz.', 'Для очень больших расстояний есть <b>километр</b>: 1 км = 1000 м. Его подробно изучим в старших классах.', 'For very long distances there is the <b>kilometre</b>: 1 km = 1000 m. We will study it in detail in later grades.')
    ] },
    { kind: 'mistake', h: L('Tipik xatolar', 'Типичные ошибки', 'Common mistakes'), p: [
      L('Uzunlik birliklari bilan ishlaganda shunday xatolar uchraydi:', 'При работе с единицами длины встречаются такие ошибки:', 'These mistakes happen when working with units of length:')
    ], list: [
      L('<b>Birliksiz taqqoslash.</b> «3 m < 50 cm, chunki 3 < 50» — xato! Avval bir xil birlikka keltiring: 300 cm > 50 cm.', '<b>Сравнивать без единиц.</b> «3 м < 50 см, потому что 3 < 50» — ошибка! Сначала приведи к одной единице: 300 см > 50 см.', '<b>Comparing without units.</b> “3 m < 50 cm because 3 < 50” is wrong! Convert first: 300 cm > 50 cm.'),
      L('<b>Nolni unutish.</b> 2 m 5 cm = 25 cm — xato. To‘g‘risi 205 cm.', '<b>Забыть ноль.</b> 2 м 5 см = 25 см — ошибка. Верно: 205 см.', '<b>Forgetting the zero.</b> 2 m 5 cm = 25 cm is wrong. Correct: 205 cm.'),
      L('<b>10 va 100 ni aralashtirish.</b> 1 m = 10 cm emas, 1 m = 100 cm. 10 cm — bu 1 dm.', '<b>Путать 10 и 100.</b> 1 м не 10 см, а 100 см. 10 см — это 1 дм.', '<b>Mixing up 10 and 100.</b> 1 m is not 10 cm; it is 100 cm. 10 cm is 1 dm.'),
      L('<b>Chizg‘ichni 1 dan boshlash.</b> O‘lchashni har doim 0 belgisidan boshlang, aks holda javob 1 cm ga ko‘p chiqadi.', '<b>Начинать линейку с 1.</b> Всегда начинай измерение с отметки 0, иначе ответ будет на 1 см больше.', '<b>Starting the ruler at 1.</b> Always start measuring at the 0 mark, or your answer will be 1 cm too long.')
    ] },
    { kind: 'life', h: L('Hayotda metr', 'Метр в жизни', 'Metres in everyday life'), p: [
      L('<b>Uyda.</b> Yangi gilam olishdan oldin xonani metr bilan o‘lchaymiz: 4 m ga 3 m. Duradgor javon uchun taxtani santimetrgacha aniq o‘lchaydi — «ikki marta o‘lcha, bir marta kes» degan maqol bor.', '<b>Дома.</b> Перед покупкой ковра измеряем комнату метром: 4 м на 3 м. Столяр меряет доску для полки с точностью до сантиметра — недаром говорят «семь раз отмерь, один раз отрежь».', '<b>At home.</b> Before buying a carpet we measure the room in metres: 4 m by 3 m. A carpenter measures a shelf board to the centimetre: “measure twice, cut once”.'),
      L('<b>Sportda.</b> Uzunlikka sakrash natijasi metr va santimetrda yoziladi: 3 m 20 cm. Basketbol halqasi poldan 3 m 5 cm balandlikda.', '<b>В спорте.</b> Результат прыжка в длину пишут в метрах и сантиметрах: 3 м 20 см. Баскетбольное кольцо висит на высоте 3 м 5 см.', '<b>In sport.</b> Long-jump results are written in metres and centimetres: 3 m 20 cm. A basketball hoop hangs 3 m 5 cm above the floor.'),
      L('<b>Shifokorda.</b> Bo‘yingizni santimetrda o‘lchashadi: 2-sinf o‘quvchisi odatda 120–130 cm, ya’ni 1 m 20 cm atrofida.', '<b>У врача.</b> Рост измеряют в сантиметрах: второклассник обычно 120–130 см, то есть около 1 м 20 см.', '<b>At the doctor’s.</b> Your height is measured in centimetres: a second-grader is usually 120–130 cm, about 1 m 20 cm.'),
      L('<b>Do‘konda.</b> Mato, sim, shlang metrlab sotiladi: «menga 3 metr mato bering».', '<b>В магазине.</b> Ткань, провод, шланг продают на метры: «дайте мне 3 метра ткани».', '<b>At the shop.</b> Cloth, wire and hoses are sold by the metre: “3 metres of cloth, please”.')
    ] },
    { kind: 'fact', h: L('Qiziqarli faktlar', 'Интересные факты', 'Fun facts'), list: [
      L('Hozir metr yorug‘lik orqali aniqlanadi: yorug‘lik bir soniyaning juda kichik ulushida bosib o‘tadigan masofa. Shunday qilib, metr har qanday laboratoriyada bir xil.', 'Сейчас метр определяют через свет: это путь, который свет проходит за очень маленькую долю секунды. Поэтому метр одинаков в любой лаборатории.', 'Today the metre is defined by light: the distance light travels in a tiny fraction of a second. That way the metre is the same in every laboratory.'),
      L('Toshkent teleminorasining balandligi 375 metr — Markaziy Osiyodagi eng baland inshootlardan biri.', 'Высота Ташкентской телебашни — 375 метров, это одно из самых высоких сооружений Центральной Азии.', 'The Tashkent TV Tower is 375 metres tall, one of the tallest structures in Central Asia.'),
      L('Dunyodagi eng baland odam Robert Uodlou bo‘yi 2 m 72 cm bo‘lgan. Eng uzun ilon — to‘rsimon piton, 7 metrdan oshadi.', 'Самый высокий человек в истории, Роберт Уодлоу, имел рост 2 м 72 см. Самая длинная змея — сетчатый питон, больше 7 метров.', 'The tallest person on record, Robert Wadlow, was 2 m 72 cm tall. The longest snake, the reticulated python, can be more than 7 metres long.'),
      L('AQSh va Britaniyada hali ham fut (taxminan 30 cm) va dyuym (taxminan 2,5 cm) ishlatiladi. Ba’zan bu chalkashliklarga sabab bo‘ladi!', 'В США и Британии до сих пор пользуются футами (около 30 см) и дюймами (около 2,5 см). Иногда это приводит к путанице!', 'The USA and Britain still use feet (about 30 cm) and inches (about 2.5 cm). Sometimes this causes mix-ups!')
    ] },
    { kind: 'practice', h: L('O‘ylab ko‘ring', 'Подумай', 'Think about it'), p: [
      L('Avval bir xil birlikka keltiring!', 'Сначала приведи к одной единице!', 'Convert to the same unit first!')
    ], list: [
      L('Aylantiring: 6 m = ? dm; 9 dm = ? cm; 4 m 25 cm = ? cm; 507 cm = ? m ? cm.', 'Переведи: 6 м = ? дм; 9 дм = ? см; 4 м 25 см = ? см; 507 см = ? м ? см.', 'Convert: 6 m = ? dm; 9 dm = ? cm; 4 m 25 cm = ? cm; 507 cm = ? m ? cm.'),
      L('Belgi qo‘ying: 1 m ◻ 99 cm; 5 dm ◻ 50 cm; 2 m ◻ 25 dm.', 'Поставь знак: 1 м ◻ 99 см; 5 дм ◻ 50 см; 2 м ◻ 25 дм.', 'Put the sign: 1 m ◻ 99 cm; 5 dm ◻ 50 cm; 2 m ◻ 25 dm.'),
      L('Qadamingiz uzunligini o‘lchang. 1 metr uchun necha qadam kerak?', 'Измерь длину своего шага. Сколько шагов в 1 метре?', 'Measure your step. How many steps make 1 metre?')
    ], after: [
      L('Javoblar: 60 dm, 90 cm, 425 cm, 5 m 7 cm. Belgilar: 1 m > 99 cm, 5 dm = 50 cm, 2 m < 25 dm (20 dm < 25 dm).', 'Ответы: 60 дм, 90 см, 425 см, 5 м 7 см. Знаки: 1 м > 99 см, 5 дм = 50 см, 2 м < 25 дм (20 дм < 25 дм).', 'Answers: 60 dm, 90 cm, 425 cm, 5 m 7 cm. Signs: 1 m > 99 cm, 5 dm = 50 cm, 2 m < 25 dm (20 dm < 25 dm).')
    ] },
    { kind: 'summary', h: L('Xulosa', 'Итог', 'Summary'), list: [
      L('Uzun narsalar <b>metr</b>da o‘lchanadi.', 'Длинные предметы измеряют в <b>метрах</b>.', 'Long things are measured in <b>metres</b>.'),
      L('<b>1 m = 10 dm = 100 cm</b>, 1 dm = 10 cm.', '<b>1 м = 10 дм = 100 см</b>, 1 дм = 10 см.', '<b>1 m = 10 dm = 100 cm</b>, 1 dm = 10 cm.'),
      L('Katta birlikdan kichigiga o‘tganda son kattalashadi: 3 m = 300 cm.', 'При переходе к меньшей единице число растёт: 3 м = 300 см.', 'Moving to a smaller unit makes the number bigger: 3 m = 300 cm.'),
      L('Aralash o‘lchov: 2 m 35 cm = 235 cm; 2 m 5 cm = 205 cm.', 'Составная величина: 2 м 35 см = 235 см; 2 м 5 см = 205 см.', 'Mixed measures: 2 m 35 cm = 235 cm; 2 m 5 cm = 205 cm.'),
      L('Taqqoslashdan oldin bir xil birlikka keltiring.', 'Перед сравнением приведи к одной единице.', 'Convert to one unit before comparing.'),
      L('Metr 1799-yilda Fransiyada hamma uchun yagona birlik sifatida yaratilgan.', 'Метр создан во Франции в 1799 году как единая мера для всех.', 'The metre was created in France in 1799 as one measure for everyone.')
    ] }
  ] });

  // ---------- t8. Detsimetr, santimetr, millimetr ----------
  T.add(P, 't8', { sections: [
    { kind: 'intro', h: L('Eng kichik chiziqchalar', 'Самые маленькие чёрточки', 'The tiniest marks'), p: [
      L('Chizg‘ichingizga yaqindan qarang. Katta raqamlar orasida mayda chiziqchalar bor. 0 dan 1 gacha ularni sanang — 10 ta oraliq! Har bir oraliq — <b>millimetr</b>. Bu biz o‘rganadigan eng kichik uzunlik birligi.', 'Посмотри на линейку поближе. Между большими цифрами есть маленькие чёрточки. Посчитай промежутки от 0 до 1 — их 10! Каждый промежуток — <b>миллиметр</b>. Это самая маленькая единица длины, которую мы изучим.', 'Look closely at your ruler. Between the big numbers there are tiny marks. Count the gaps from 0 to 1: there are 10! Each gap is a <b>millimetre</b>. It is the smallest unit of length we will learn.'),
      L('Millimetr juda kichik: guruch donining eni taxminan 2 mm, chumolining uzunligi 3–5 mm, tanga qalinligi 1–2 mm. Bunday kichik narsalarni santimetr bilan aniq o‘lchab bo‘lmaydi.', 'Миллиметр очень маленький: рисинка шириной около 2 мм, муравей длиной 3–5 мм, монета толщиной 1–2 мм. Такие мелочи сантиметром точно не измеришь.', 'A millimetre is very small: a grain of rice is about 2 mm wide, an ant is 3–5 mm long, a coin is 1–2 mm thick. You cannot measure such small things precisely in centimetres.'),
      L('Bu mavzuda millimetrni, uning santimetr va detsimetr bilan bog‘lanishini va aniq o‘lchashni o‘rganamiz.', 'В этой теме мы узнаем про миллиметр, его связь с сантиметром и дециметром и научимся мерить точно.', 'In this topic we learn about the millimetre, how it links to the centimetre and decimetre, and how to measure precisely.'),
      L('Nega aniqlik shunchalik muhim? Tasavvur qiling: duradgor eshikni 5 mm kalta qilib qo‘ydi — tagidan shamol kiradi. Tikuvchi yengni 1 cm uzun tikdi — kiyim chiroyli turmaydi. Shifokor dori miqdorini, muhandis ko‘prik qismlarini, soatsoz esa mayda g‘ildirakchalarni millimetrgacha hisoblaydi. Bir millimetr kichik ko‘rinadi, lekin ba’zan u juda katta farq qiladi!', 'Почему точность так важна? Представь: столяр сделал дверь на 5 мм короче — снизу будет дуть. Портной пришил рукав на 1 см длиннее — одежда сидит некрасиво. Врач считает дозу лекарства, инженер — детали моста, часовщик — крошечные колёсики с точностью до миллиметра. Миллиметр кажется маленьким, но иногда он очень важен!', 'Why does precision matter so much? Imagine a carpenter makes a door 5 mm too short: a draught blows under it. A tailor sews a sleeve 1 cm too long: the clothes look wrong. Doctors, engineers building bridges and watchmakers with their tiny wheels all work to the millimetre. A millimetre looks small, but sometimes it makes a big difference!')
    ] },
    { kind: 'def', h: L('Millimetr nima?', 'Что такое миллиметр?', 'What is a millimetre?'), p: [
      L('<b>Millimetr</b> (mm) — santimetrning o‘ndan bir qismi. «Milli» so‘zi «mingdan bir» degani: 1 metrda 1000 ta millimetr bor.', '<b>Миллиметр</b> (мм) — десятая часть сантиметра. Слово «милли» означает «тысячная»: в 1 метре 1000 миллиметров.', 'A <b>millimetre</b> (mm) is a tenth of a centimetre. “Milli” means “thousandth”: there are 1000 millimetres in 1 metre.')
    ], list: [
      L('<b>1 cm = 10 mm</b>', '<b>1 см = 10 мм</b>', '<b>1 cm = 10 mm</b>'),
      L('<b>1 dm = 10 cm = 100 mm</b>', '<b>1 дм = 10 см = 100 мм</b>', '<b>1 dm = 10 cm = 100 mm</b>'),
      L('<b>1 m = 10 dm = 100 cm = 1000 mm</b>', '<b>1 м = 10 дм = 100 см = 1000 мм</b>', '<b>1 m = 10 dm = 100 cm = 1000 mm</b>')
    ], after: [
      L('Zinapoya kabi tasavvur qiling: mm → cm → dm → m. Har bir pog‘ona 10 marta katta. Pastga tushsangiz — 10 ga ko‘paytirasiz, yuqoriga chiqsangiz — 10 ga bo‘lasiz.', 'Представь лестницу: мм → см → дм → м. Каждая ступенька в 10 раз больше. Спускаешься — умножаешь на 10, поднимаешься — делишь на 10.', 'Picture a staircase: mm → cm → dm → m. Each step is 10 times bigger. Going down you multiply by 10; going up you divide by 10.'),
      L('Masalan, 4 cm 5 mm = 40 mm + 5 mm = 45 mm.', 'Например, 4 см 5 мм = 40 мм + 5 мм = 45 мм.', 'For example, 4 cm 5 mm = 40 mm + 5 mm = 45 mm.')
    ] },
    { kind: 'history', h: L('Aniqlik tarixi', 'История точности', 'A history of precision'), p: [
      L('Abu Rayhon <b>Beruniy</b> (973–1048) o‘lchashda juda aniq bo‘lgan. U Yerning kattaligini hisoblash uchun tog‘ balandligini va ufq burchagini o‘lchagan. Uning natijasi hozirgi qiymatdan atigi bir necha foizga farq qiladi — ming yil oldin, kompyutersiz!', 'Абу Райхан <b>Беруни</b> (973–1048) был очень точен в измерениях. Чтобы вычислить размер Земли, он измерил высоту горы и угол горизонта. Его результат отличается от современного всего на несколько процентов — тысячу лет назад и без компьютера!', 'Abu Rayhan <b>Biruni</b> (973–1048) was extremely precise in measuring. To work out the size of the Earth he measured a mountain’s height and the angle of the horizon. His result differs from today’s value by only a few per cent, a thousand years ago and without a computer!'),
      L('Millimetr metr bilan birga, 1790-yillarda Fransiyada paydo bo‘lgan. Olimlar hamma birliklar 10 ga bog‘langan bo‘lishini xohlashgan, shunda hisoblash oson bo‘ladi. Bu tizim <b>metrik tizim</b> deb ataladi.', 'Миллиметр появился вместе с метром во Франции в 1790-х. Учёные хотели, чтобы все единицы были связаны числом 10 — так считать проще. Эта система называется <b>метрической</b>.', 'The millimetre appeared together with the metre in France in the 1790s. Scientists wanted all units linked by 10, which makes calculating easy. This is called the <b>metric system</b>.'),
      L('Bugun soatsozlar, zargarlar va muhandislar millimetrdan ham kichik o‘lchovlar bilan ishlaydi. Telefon ichidagi qismlar millimetrning mingdan bir ulushigacha aniq yasaladi!', 'Сегодня часовщики, ювелиры и инженеры работают с размерами меньше миллиметра. Детали внутри телефона делают с точностью до тысячных долей миллиметра!', 'Today watchmakers, jewellers and engineers work with sizes smaller than a millimetre. Parts inside a phone are made accurate to thousandths of a millimetre!')
    ] },
    { kind: 'rule', h: L('Millimetrga va aksincha', 'В миллиметры и обратно', 'To millimetres and back'), p: [
      L('Santimetrdan millimetrga o‘tish uchun santimetrlar sonini 10 ga ko‘paytiramiz (oxiriga 0 yozamiz):', 'Чтобы перевести сантиметры в миллиметры, число сантиметров умножаем на 10 (приписываем 0):', 'To change centimetres to millimetres, multiply the number of centimetres by 10 (add a 0):')
    ], list: [
      L('6 cm = 60 mm.', '6 см = 60 мм.', '6 cm = 60 mm.'),
      L('6 cm 3 mm = 60 mm + 3 mm = 63 mm.', '6 см 3 мм = 60 мм + 3 мм = 63 мм.', '6 cm 3 mm = 60 mm + 3 mm = 63 mm.'),
      L('2 dm = 20 cm = 200 mm.', '2 дм = 20 см = 200 мм.', '2 dm = 20 cm = 200 mm.')
    ], after: [
      L('Teskari yo‘l: 63 mm da nechta to‘liq santimetr bor? 63 = 60 + 3 → 6 cm 3 mm. O‘nliklar soni — santimetrlar, birliklar — millimetrlar. Juda qulay!', 'Обратно: сколько полных сантиметров в 63 мм? 63 = 60 + 3 → 6 см 3 мм. Число десятков — сантиметры, единицы — миллиметры. Очень удобно!', 'The other way: how many whole centimetres are in 63 mm? 63 = 60 + 3 → 6 cm 3 mm. The tens are centimetres and the ones are millimetres. Very handy!'),
      L('Taqqoslashda ham mm ga keltiramiz: 5 cm 2 mm va 48 mm → 52 mm > 48 mm.', 'При сравнении тоже переводим в мм: 5 см 2 мм и 48 мм → 52 мм > 48 мм.', 'When comparing, convert to mm too: 5 cm 2 mm and 48 mm → 52 mm > 48 mm.')
    ] },
    { kind: 'steps', h: L('Qadamma-qadam: aniq o‘lchash', 'Шаг за шагом: точное измерение', 'Step by step: precise measuring'), p: [
      L('Qalam uzunligini millimetrgacha aniq o‘lchaymiz:', 'Измерим длину карандаша с точностью до миллиметра:', 'Let us measure a pencil to the nearest millimetre:')
    ], list: [
      L('1-qadam. Qalamning bir uchini chizg‘ichning 0 belgisiga qo‘ying.', 'Шаг 1. Приложи один конец карандаша к отметке 0.', 'Step 1. Put one end of the pencil at the 0 mark.'),
      L('2-qadam. Ikkinchi uchi qaysi katta raqamdan keyin turibdi? Masalan, 12 dan keyin — 12 cm.', 'Шаг 2. После какой большой цифры стоит второй конец? Например, после 12 — 12 см.', 'Step 2. Which big number does the other end pass? For example, 12, so 12 cm.'),
      L('3-qadam. 12 dan keyin nechta mayda chiziqcha bor? Masalan, 7 ta — 7 mm.', 'Шаг 3. Сколько маленьких чёрточек после 12? Например, 7 — это 7 мм.', 'Step 3. How many small marks after 12? For example, 7, so 7 mm.'),
      L('4-qadam. Javob: 12 cm 7 mm = 127 mm.', 'Шаг 4. Ответ: 12 см 7 мм = 127 мм.', 'Step 4. Answer: 12 cm 7 mm = 127 mm.')
    ], after: [
      L('Ko‘pchilik chizg‘ichlarda 5 mm belgisi biroz uzunroq chizilgan — sanashni osonlashtirish uchun. Undan sanasangiz tezroq bo‘ladi: 5, 6, 7.', 'На многих линейках отметка 5 мм чуть длиннее — чтобы было легче считать. Считай от неё: 5, 6, 7.', 'On many rulers the 5 mm mark is a little longer to make counting easier. Count on from it: 5, 6, 7.')
    ] },
    { kind: 'example', h: L('Yechilgan namunalar', 'Разобранные примеры', 'Worked examples'), p: [
      L('Har birida birliklar zinapoyasini eslang.', 'В каждом вспоминай лестницу единиц.', 'Remember the staircase of units in each one.')
    ], ex: [
      { q: L('8 cm = ? mm', '8 см = ? мм', '8 cm = ? mm'), s: L('1 cm = 10 mm, demak 8 cm = <b>80 mm</b>.', '1 см = 10 мм, значит 8 см = <b>80 мм</b>.', '1 cm = 10 mm, so 8 cm = <b>80 mm</b>.') },
      { q: L('4 cm 5 mm = ? mm', '4 см 5 мм = ? мм', '4 cm 5 mm = ? mm'), s: L('40 mm + 5 mm = <b>45 mm</b>.', '40 мм + 5 мм = <b>45 мм</b>.', '40 mm + 5 mm = <b>45 mm</b>.') },
      { q: L('1 dm = ? mm', '1 дм = ? мм', '1 dm = ? mm'), s: L('1 dm = 10 cm, 10 cm = 100 mm. Javob: <b>100 mm</b>.', '1 дм = 10 см, 10 см = 100 мм. Ответ: <b>100 мм</b>.', '1 dm = 10 cm, and 10 cm = 100 mm. Answer: <b>100 mm</b>.') },
      { q: L('76 mm ni santimetr va millimetrda yozing.', 'Запиши 76 мм в сантиметрах и миллиметрах.', 'Write 76 mm in centimetres and millimetres.'), s: L('76 = 70 + 6. 70 mm = 7 cm. Javob: <b>7 cm 6 mm</b>.', '76 = 70 + 6. 70 мм = 7 см. Ответ: <b>7 см 6 мм</b>.', '76 = 70 + 6. 70 mm = 7 cm. Answer: <b>7 cm 6 mm</b>.') },
      { q: L('Chumoli 4 mm, qo‘ng‘iz 2 cm. Qo‘ng‘iz chumolidan qancha uzun?', 'Муравей 4 мм, жук 2 см. На сколько жук длиннее?', 'An ant is 4 mm long, a beetle 2 cm. How much longer is the beetle?'), s: L('2 cm = 20 mm. 20 − 4 = 16. Javob: <b>16 mm</b> ga uzun.', '2 см = 20 мм. 20 − 4 = 16. Ответ: длиннее на <b>16 мм</b>.', '2 cm = 20 mm. 20 − 4 = 16. Answer: <b>16 mm</b> longer.') }
    ] },
    { kind: 'table', h: L('Birliklar zinapoyasi', 'Лестница единиц', 'The unit staircase'), p: [
      L('Har bir qatorda bir xil uzunlik turli birliklarda yozilgan.', 'В каждой строке одна и та же длина записана в разных единицах.', 'Each row shows the same length in different units.')
    ], table: { head: ['m', 'dm', 'cm', 'mm'], rows: [
      ['1', '10', '100', '1000'],
      ['—', '1', '10', '100'],
      ['—', '—', '1', '10'],
      ['—', '5', '50', '500'],
      ['—', '—', '3', '30']
    ] }, after: [
      L('Qatorga qarab bir birlikdan boshqasiga o‘tish oson: 5 dm = 50 cm = 500 mm.', 'Глядя на строку, легко переходить от единицы к единице: 5 дм = 50 см = 500 мм.', 'Reading along a row makes converting easy: 5 dm = 50 cm = 500 mm.')
    ] },
    { kind: 'mistake', h: L('Tipik xatolar', 'Типичные ошибки', 'Common mistakes'), p: [
      L('Millimetr bilan ishlashda ehtiyot bo‘ling:', 'Работая с миллиметрами, будь внимателен:', 'Take care with millimetres:')
    ], list: [
      L('<b>cm va mm ni qo‘shib yuborish.</b> 3 cm + 5 mm = 8 — xato! Bir xil birlikka keltiring: 30 mm + 5 mm = 35 mm.', '<b>Складывать см и мм как одно.</b> 3 см + 5 мм = 8 — ошибка! Приведи к одной единице: 30 мм + 5 мм = 35 мм.', '<b>Adding cm and mm as if they were the same.</b> 3 cm + 5 mm = 8 is wrong! Use one unit: 30 mm + 5 mm = 35 mm.'),
      L('<b>1 cm = 100 mm deb o‘ylash.</b> Yo‘q, 1 cm = 10 mm. 100 mm — bu 1 dm.', '<b>Думать, что 1 см = 100 мм.</b> Нет, 1 см = 10 мм. 100 мм — это 1 дм.', '<b>Thinking 1 cm = 100 mm.</b> No: 1 cm = 10 mm. 100 mm is 1 dm.'),
      L('<b>Chiziqchalarni emas, oraliqlarni sanash kerak.</b> Ikki chiziqcha orasidagi masofa — 1 mm.', '<b>Считать нужно промежутки, а не чёрточки.</b> Расстояние между двумя соседними чёрточками — 1 мм.', '<b>Count the gaps, not the marks.</b> The distance between two neighbouring marks is 1 mm.'),
      L('<b>Chizg‘ich chetidan o‘lchash.</b> Ko‘p chizg‘ichlarda 0 chetdan biroz ichkarida — 0 belgisidan boshlang.', '<b>Мерить от края линейки.</b> На многих линейках 0 стоит не у самого края — начинай с отметки 0.', '<b>Measuring from the edge.</b> On many rulers 0 is a little in from the edge; start at the 0 mark.')
    ] },
    { kind: 'life', h: L('Hayotda millimetr', 'Миллиметр в жизни', 'Millimetres in everyday life'), p: [
      L('<b>Ob-havoda.</b> Yomg‘ir miqdori millimetrda o‘lchanadi: «bugun 5 mm yog‘in tushdi». Bu yerga tushgan suv qatlamining qalinligi.', '<b>В погоде.</b> Количество дождя измеряют в миллиметрах: «сегодня выпало 5 мм осадков». Это толщина слоя воды на земле.', '<b>In the weather.</b> Rainfall is measured in millimetres: “5 mm of rain fell today”. That is the depth of the water layer on the ground.'),
      L('<b>Maktabda.</b> Chizmachilikda va geometriyada chiziqlar millimetrgacha aniq chiziladi. Katakli daftardagi har bir katak tomoni 5 mm.', '<b>В школе.</b> В черчении и геометрии линии чертят с точностью до миллиметра. Сторона клетки в тетради — 5 мм.', '<b>At school.</b> In technical drawing and geometry, lines are drawn to the millimetre. Each square in a squared notebook is 5 mm wide.'),
      L('<b>Ustaxonada.</b> Mix, vint, burg‘u o‘lchami millimetrda yoziladi: «6 mm li burg‘u». Usta xato qilsa, vint teshikka tushmaydi.', '<b>В мастерской.</b> Размеры гвоздей, шурупов, свёрл пишут в миллиметрах: «сверло 6 мм». Ошибётся мастер — шуруп не войдёт.', '<b>In the workshop.</b> Nails, screws and drill bits are sized in millimetres: “a 6 mm drill bit”. If the carpenter gets it wrong, the screw will not fit.'),
      L('<b>Tabiatda.</b> Kolibri tuxumi taxminan 13 mm, eng kichik qurbaqa 8 mm atrofida.', '<b>В природе.</b> Яйцо колибри — около 13 мм, самая маленькая лягушка — около 8 мм.', '<b>In nature.</b> A hummingbird egg is about 13 mm long; the smallest frog is about 8 mm.'),
      L('<b>Do‘konda.</b> Telefon ekrani, televizor, velosiped g‘ildiragi o‘lchamlari ham ko‘pincha millimetr yoki santimetrda yoziladi. Yangi qalam sotib olayotganda «0,5 mm» yozuvini ko‘rgansiz — bu qalam uchidagi sharchaning kattaligi. Ruchkaning chizig‘i qanchalik ingichka bo‘lishi shunga bog‘liq.', '<b>В магазине.</b> Размеры экрана телефона, телевизора, колеса велосипеда тоже часто пишут в миллиметрах или сантиметрах. Покупая ручку, ты видел надпись «0,5 мм» — это размер шарика на кончике. От него зависит, насколько тонкой будет линия.', '<b>At the shop.</b> The sizes of phone screens, TVs and bicycle wheels are often written in millimetres or centimetres. On a new pen you may have seen “0.5 mm”: that is the size of the ball at its tip. It decides how thin the line will be.')
    ] },
    { kind: 'fact', h: L('Qiziqarli faktlar', 'Интересные факты', 'Fun facts'), list: [
      L('Inson sochining qalinligi taxminan 0,1 mm — bitta millimetrga 10 ta soch tolasi yonma-yon sig‘adi.', 'Толщина человеческого волоса — около 0,1 мм: в одном миллиметре помещаются 10 волосков.', 'A human hair is about 0.1 mm thick: 10 hairs side by side fit in one millimetre.'),
      L('Tirnoqlar oyiga taxminan 3 mm, sochlar esa 10–15 mm o‘sadi.', 'Ногти растут примерно на 3 мм в месяц, а волосы — на 10–15 мм.', 'Fingernails grow about 3 mm a month, hair about 10–15 mm.'),
      L('Dunyodagi eng kichik qurbaqalardan biri Papua — Yangi Gvineyada yashaydi va uzunligi 8 mm ga ham yetmaydi — no‘xatdan kichik!', 'Одна из самых маленьких лягушек мира живёт в Папуа — Новой Гвинее, её длина меньше 8 мм — она меньше горошины!', 'One of the smallest frogs in the world lives in Papua New Guinea and is less than 8 mm long: smaller than a pea!'),
      L('Ertalab bo‘yingiz kechqurundagidan taxminan 10 mm ga baland bo‘ladi — kun davomida umurtqalar biroz siqiladi.', 'Утром твой рост примерно на 10 мм больше, чем вечером: за день позвоночник немного сжимается.', 'You are about 10 mm taller in the morning than in the evening: your spine squashes a little during the day.'),
      L('Kitob sahifasining qalinligi taxminan 0,1 mm. Demak, 100 varaqli kitobning qalinligi taxminan 1 cm bo‘ladi. O‘z kitobingizni o‘lchab, buni tekshirib ko‘ring!', 'Толщина страницы книги — около 0,1 мм. Значит, книга из 100 листов толщиной примерно 1 см. Измерь свою книгу и проверь!', 'A book page is about 0.1 mm thick. So a book of 100 sheets is about 1 cm thick. Measure your own book and check!')
    ] },
    { kind: 'practice', h: L('O‘ylab ko‘ring', 'Подумай', 'Think about it'), p: [
      L('Chizg‘ichni qo‘lingizga oling!', 'Возьми в руки линейку!', 'Pick up your ruler!')
    ], list: [
      L('Aylantiring: 9 cm = ? mm; 2 cm 8 mm = ? mm; 54 mm = ? cm ? mm; 3 dm = ? mm.', 'Переведи: 9 см = ? мм; 2 см 8 мм = ? мм; 54 мм = ? см ? мм; 3 дм = ? мм.', 'Convert: 9 cm = ? mm; 2 cm 8 mm = ? mm; 54 mm = ? cm ? mm; 3 dm = ? mm.'),
      L('Belgi qo‘ying: 6 cm ◻ 59 mm; 1 dm ◻ 100 mm; 4 cm 2 mm ◻ 24 mm.', 'Поставь знак: 6 см ◻ 59 мм; 1 дм ◻ 100 мм; 4 см 2 мм ◻ 24 мм.', 'Put the sign: 6 cm ◻ 59 mm; 1 dm ◻ 100 mm; 4 cm 2 mm ◻ 24 mm.'),
      L('O‘chirg‘ich, tanga va qalam uchini millimetrda o‘lchang.', 'Измерь в миллиметрах ластик, монету и грифель карандаша.', 'Measure an eraser, a coin and a pencil tip in millimetres.')
    ], after: [
      L('Javoblar: 90 mm, 28 mm, 5 cm 4 mm, 300 mm. Belgilar: 6 cm > 59 mm (60 > 59), 1 dm = 100 mm, 4 cm 2 mm > 24 mm (42 > 24).', 'Ответы: 90 мм, 28 мм, 5 см 4 мм, 300 мм. Знаки: 6 см > 59 мм (60 > 59), 1 дм = 100 мм, 4 см 2 мм > 24 мм (42 > 24).', 'Answers: 90 mm, 28 mm, 5 cm 4 mm, 300 mm. Signs: 6 cm > 59 mm (60 > 59), 1 dm = 100 mm, 4 cm 2 mm > 24 mm (42 > 24).')
    ] },
    { kind: 'summary', h: L('Xulosa', 'Итог', 'Summary'), list: [
      L('<b>Millimetr</b> — chizg‘ichdagi eng kichik bo‘linma.', '<b>Миллиметр</b> — самое маленькое деление линейки.', 'The <b>millimetre</b> is the smallest mark on a ruler.'),
      L('<b>1 cm = 10 mm</b>, 1 dm = 100 mm, 1 m = 1000 mm.', '<b>1 см = 10 мм</b>, 1 дм = 100 мм, 1 м = 1000 мм.', '<b>1 cm = 10 mm</b>, 1 dm = 100 mm, 1 m = 1000 mm.'),
      L('4 cm 5 mm = 45 mm; 76 mm = 7 cm 6 mm.', '4 см 5 мм = 45 мм; 76 мм = 7 см 6 мм.', '4 cm 5 mm = 45 mm; 76 mm = 7 cm 6 mm.'),
      L('Har xil birliklarni qo‘shish yoki taqqoslashdan oldin bir xil birlikka keltiring.', 'Прежде чем складывать или сравнивать, приведи к одной единице.', 'Convert to one unit before adding or comparing.'),
      L('O‘lchashni doim 0 belgisidan boshlang.', 'Всегда начинай измерение с отметки 0.', 'Always start measuring at 0.')
    ] }
  ] });

  // ---------- t9. Siniq chiziq uzunligi. Ko'pburchak perimetri ----------
  T.add(P, 't9', { sections: [
    { kind: 'intro', h: L('Atrofini aylanib chiqamiz', 'Обходим вокруг', 'Walking all the way round'), p: [
      L('Bobom bog‘ini to‘r bilan o‘ramoqchi. Bog‘ to‘rtburchak shaklida, tomonlari 12 m, 8 m, 12 m va 8 m. Qancha to‘r kerak? Buning uchun bog‘ atrofini to‘liq aylanib chiqish uzunligini, ya’ni <b>perimetr</b>ni topish kerak.', 'Дедушка хочет огородить сад сеткой. Сад прямоугольный, стороны 12 м, 8 м, 12 м и 8 м. Сколько нужно сетки? Для этого нужно найти длину пути вокруг сада — <b>периметр</b>.', 'Grandpa wants to fence his garden with netting. The garden is a rectangle with sides of 12 m, 8 m, 12 m and 8 m. How much netting does he need? We must find the length of the path all round the garden, the <b>perimeter</b>.'),
      L('Undan oldin <b>siniq chiziq</b> bilan tanishamiz. Uydan maktabga to‘g‘ri yo‘l bilan bormaymiz — ko‘chalar burilib ketadi. Bunday yo‘l bir nechta to‘g‘ri bo‘laklardan iborat — bu siniq chiziq.', 'Но сначала познакомимся с <b>ломаной линией</b>. Из дома в школу мы идём не по прямой — улицы поворачивают. Такой путь состоит из нескольких прямых кусочков — это ломаная.', 'But first let us meet the <b>broken line</b>. We don’t walk from home to school in a straight line; the streets turn. Such a path is made of several straight pieces: it is a broken line.'),
      L('Bu mavzuda siniq chiziq uzunligini va ko‘pburchak perimetrini topishni o‘rganamiz.', 'В этой теме мы научимся находить длину ломаной и периметр многоугольника.', 'In this topic we learn to find the length of a broken line and the perimeter of a polygon.')
    ] },
    { kind: 'def', h: L('Siniq chiziq va perimetr', 'Ломаная и периметр', 'Broken lines and perimeter'), p: [
      L('Asosiy tushunchalar:', 'Главные понятия:', 'The key ideas:')
    ], list: [
      L('<b>Siniq chiziq</b> — bir-biriga uchlari bilan ulangan kesmalardan iborat chiziq. Har bir kesma — <b>bo‘g‘in</b>, ular ulangan nuqtalar — <b>uchlar</b>.', '<b>Ломаная</b> — линия из отрезков, соединённых концами. Каждый отрезок — <b>звено</b>, точки соединения — <b>вершины</b>.', 'A <b>broken line</b> is made of segments joined end to end. Each segment is a <b>link</b>, and the joining points are <b>vertices</b>.'),
      L('<b>Yopiq siniq chiziq</b> — oxiri boshiga qaytib keladi. U <b>ko‘pburchak</b> hosil qiladi: uchburchak, to‘rtburchak, beshburchak…', '<b>Замкнутая ломаная</b> — её конец возвращается к началу. Она образует <b>многоугольник</b>: треугольник, четырёхугольник, пятиугольник…', 'A <b>closed broken line</b> ends where it began. It makes a <b>polygon</b>: a triangle, a quadrilateral, a pentagon…'),
      L('<b>Perimetr</b> (P) — ko‘pburchak barcha tomonlari uzunliklarining yig‘indisi.', '<b>Периметр</b> (P) — сумма длин всех сторон многоугольника.', 'The <b>perimeter</b> (P) is the sum of the lengths of all the sides of a polygon.')
    ], after: [
      L('«Perimetr» so‘zi yunoncha: «peri» — atrofida, «metr» — o‘lchash. Ya’ni «atrofini o‘lchash».', 'Слово «периметр» греческое: «пери» — вокруг, «метр» — мерить. То есть «мерить вокруг».', 'The word “perimeter” is Greek: “peri” means around and “metre” means measure. So it means “measuring around”.'),
      L('Perimetrni chumoli yo‘li deb tasavvur qiling: chumoli shaklning bir burchagidan chiqib, hamma tomonlar bo‘ylab yurib, yana o‘sha burchakka qaytib keladi. U bosib o‘tgan butun yo‘l — perimetr. Shakl ichidagi joy esa perimetrga kirmaydi, faqat chegara chizig‘i hisoblanadi.', 'Представь периметр как путь муравья: муравей выходит из одного угла фигуры, идёт вдоль всех сторон и возвращается в тот же угол. Весь его путь — периметр. Место внутри фигуры в периметр не входит, считается только линия границы.', 'Think of the perimeter as an ant’s walk: the ant leaves one corner of the shape, walks along every side and comes back to the same corner. Its whole path is the perimeter. The space inside the shape does not count, only the boundary line.')
    ] },
    { kind: 'history', h: L('Yer o‘lchovchilar', 'Землемеры', 'The land measurers'), p: [
      L('Qadimgi Misrda Nil daryosi har yili toshib, dalalar chegarasini yuvib ketardi. Har gal yer o‘lchovchilar arqon bilan dalalarni qayta o‘lchashgan. Ularni «arqon tortuvchilar» deyishgan. Ular arqonga teng oraliqlarda tugun bog‘lashgan.', 'В Древнем Египте Нил каждый год разливался и смывал границы полей. Каждый раз землемеры заново измеряли поля верёвкой. Их называли «натягивателями верёвки». На верёвке они вязали узлы через равные промежутки.', 'In Ancient Egypt the Nile flooded every year and washed away the field boundaries. Each time, land measurers re-measured the fields with ropes. They were called “rope-stretchers” and tied knots in the rope at equal spaces.'),
      L('Shu ishdan <b>geometriya</b> fani tug‘ilgan: yunoncha «geo» — yer, «metriya» — o‘lchash. Keyinchalik yunon olimi <b>Yevklid</b> (taxminan 2300 yil oldin) shakllar haqidagi bilimlarni «Negizlar» kitobida to‘plagan.', 'Из этой работы родилась наука <b>геометрия</b>: по-гречески «гео» — земля, «метрия» — измерение. Позже греческий учёный <b>Евклид</b> (около 2300 лет назад) собрал знания о фигурах в книге «Начала».', 'Out of this work came the science of <b>geometry</b>: in Greek “geo” means earth and “metry” means measuring. Later the Greek scholar <b>Euclid</b> (about 2 300 years ago) gathered knowledge about shapes in his book “Elements”.'),
      L('Xorazmiy ham o‘z kitobida yer maydonlarini o‘lchash, meros bo‘lish va qurilish uchun geometriya qoidalarini yozgan. Uning masalalari dehqonlar va quruvchilarga yordam bergan.', 'Аль-Хорезми тоже писал в своей книге правила геометрии для измерения земли, раздела наследства и строительства. Его задачи помогали крестьянам и строителям.', 'Al-Khwarizmi also wrote rules of geometry in his book for measuring land, dividing inheritances and building. His problems helped farmers and builders.')
    ] },
    { kind: 'rule', h: L('Qoidalar', 'Правила', 'The rules'), p: [
      L('Ikki asosiy qoida:', 'Два главных правила:', 'Two main rules:')
    ], list: [
      L('<b>Siniq chiziq uzunligi</b> = barcha bo‘g‘inlar uzunliklarining yig‘indisi. Bo‘g‘inlar 3 cm, 5 cm, 4 cm bo‘lsa: 3 + 5 + 4 = 12 cm.', '<b>Длина ломаной</b> = сумма длин всех звеньев. Звенья 3 см, 5 см, 4 см: 3 + 5 + 4 = 12 см.', '<b>Length of a broken line</b> = the sum of all its links. Links of 3 cm, 5 cm and 4 cm: 3 + 5 + 4 = 12 cm.'),
      L('<b>Perimetr</b>: P = a + b + c + … — barcha tomonlar yig‘indisi. Uchburchak tomonlari 12, 15, 20 cm: P = 47 cm.', '<b>Периметр</b>: P = a + b + c + … — сумма всех сторон. Треугольник со сторонами 12, 15, 20 см: P = 47 см.', '<b>Perimeter</b>: P = a + b + c + …, the sum of all sides. A triangle with sides 12, 15 and 20 cm: P = 47 cm.')
    ], after: [
      L('<b>Kvadrat</b>ning hamma 4 tomoni teng. Tomoni 7 cm bo‘lsa: P = 7 + 7 + 7 + 7 = 28 cm.', 'У <b>квадрата</b> все 4 стороны равны. При стороне 7 см: P = 7 + 7 + 7 + 7 = 28 см.', 'A <b>square</b> has 4 equal sides. With a side of 7 cm: P = 7 + 7 + 7 + 7 = 28 cm.'),
      L('<b>To‘g‘ri to‘rtburchak</b>ning qarama-qarshi tomonlari teng. Tomonlari 12 m va 8 m bo‘lsa: P = 12 + 8 + 12 + 8 = 40 m. Bobomga 40 m to‘r kerak!', 'У <b>прямоугольника</b> противоположные стороны равны. Стороны 12 м и 8 м: P = 12 + 8 + 12 + 8 = 40 м. Дедушке нужно 40 м сетки!', 'A <b>rectangle</b> has equal opposite sides. With sides 12 m and 8 m: P = 12 + 8 + 12 + 8 = 40 m. Grandpa needs 40 m of netting!'),
      L('Barcha tomonlar <b>bir xil birlikda</b> bo‘lishi kerak. Javobga birlikni yozishni unutmang.', 'Все стороны должны быть в <b>одних единицах</b>. Не забудь написать единицу в ответе.', 'All sides must be in the <b>same unit</b>. Don’t forget to write the unit in the answer.')
    ] },
    { kind: 'steps', h: L('Qadamma-qadam: perimetrni topish', 'Шаг за шагом: находим периметр', 'Step by step: finding a perimeter'), p: [
      L('Beshburchak tomonlari: 4 cm, 6 cm, 5 cm, 3 cm, 7 cm.', 'Стороны пятиугольника: 4 см, 6 см, 5 см, 3 см, 7 см.', 'A pentagon has sides of 4 cm, 6 cm, 5 cm, 3 cm and 7 cm.')
    ], list: [
      L('1-qadam. Tomonlar sonini sanang: 5 ta. Hech birini tashlab ketmaslik uchun har birini belgilab chiqing.', 'Шаг 1. Посчитай стороны: 5. Отмечай каждую, чтобы не пропустить.', 'Step 1. Count the sides: 5. Tick each one so you don’t miss any.'),
      L('2-qadam. Birliklar bir xilligini tekshiring: hammasi cm.', 'Шаг 2. Проверь, что единицы одинаковые: всё в см.', 'Step 2. Check the units match: all in cm.'),
      L('3-qadam. Qulay juftlarni qo‘shing: (4 + 6) + (3 + 7) + 5 = 10 + 10 + 5 = 25.', 'Шаг 3. Сложи удобными парами: (4 + 6) + (3 + 7) + 5 = 10 + 10 + 5 = 25.', 'Step 3. Add in friendly pairs: (4 + 6) + (3 + 7) + 5 = 10 + 10 + 5 = 25.'),
      L('4-qadam. Javob: P = 25 cm.', 'Шаг 4. Ответ: P = 25 см.', 'Step 4. Answer: P = 25 cm.')
    ], after: [
      L('Agar tomon uzunliklari berilmagan bo‘lsa, ularni chizg‘ich bilan o‘lchang, keyin qo‘shing.', 'Если длины сторон не даны, измерь их линейкой, а потом сложи.', 'If the side lengths are not given, measure them with a ruler and then add.')
    ] },
    { kind: 'example', h: L('Yechilgan namunalar', 'Разобранные примеры', 'Worked examples'), p: [
      L('Barcha tomonlarni sanab chiqing!', 'Посчитай все стороны!', 'Count every side!')
    ], ex: [
      { q: L('Siniq chiziq bo‘g‘inlari: 15 mm, 22 mm, 18 mm. Uzunligi?', 'Звенья ломаной: 15 мм, 22 мм, 18 мм. Длина?', 'A broken line has links of 15 mm, 22 mm and 18 mm. Its length?'), s: L('15 + 22 + 18 = 55. Javob: <b>55 mm</b>.', '15 + 22 + 18 = 55. Ответ: <b>55 мм</b>.', '15 + 22 + 18 = 55. Answer: <b>55 mm</b>.') },
      { q: L('Uchburchak tomonlari 12, 15, 20 cm. P = ?', 'Стороны треугольника 12, 15, 20 см. P = ?', 'A triangle has sides of 12, 15 and 20 cm. P = ?'), s: L('P = 12 + 15 + 20 = <b>47 cm</b>.', 'P = 12 + 15 + 20 = <b>47 см</b>.', 'P = 12 + 15 + 20 = <b>47 cm</b>.') },
      { q: L('Kvadrat tomoni 9 cm. P = ?', 'Сторона квадрата 9 см. P = ?', 'A square has sides of 9 cm. P = ?'), s: L('Kvadratda 4 ta teng tomon: 9 + 9 + 9 + 9 = <b>36 cm</b>.', 'У квадрата 4 равные стороны: 9 + 9 + 9 + 9 = <b>36 см</b>.', 'A square has 4 equal sides: 9 + 9 + 9 + 9 = <b>36 cm</b>.') },
      { q: L('Futbol maydoni 100 m ga 60 m. Uni bir marta aylanib yugursangiz, necha metr bo‘ladi?', 'Футбольное поле 100 м на 60 м. Сколько метров, если пробежать вокруг один раз?', 'A football pitch is 100 m by 60 m. How far is one lap around it?'), s: L('P = 100 + 60 + 100 + 60 = <b>320 m</b>.', 'P = 100 + 60 + 100 + 60 = <b>320 м</b>.', 'P = 100 + 60 + 100 + 60 = <b>320 m</b>.') },
      { q: L('Uchburchak perimetri 30 cm. Ikki tomoni 8 cm va 10 cm. Uchinchisi?', 'Периметр треугольника 30 см. Две стороны 8 см и 10 см. Третья?', 'A triangle’s perimeter is 30 cm. Two sides are 8 cm and 10 cm. The third?'), s: L('Ma’lum tomonlar: 8 + 10 = 18. 30 − 18 = <b>12 cm</b>.', 'Известные стороны: 8 + 10 = 18. 30 − 18 = <b>12 см</b>.', 'Known sides: 8 + 10 = 18. 30 − 18 = <b>12 cm</b>.') }
    ] },
    { kind: 'table', h: L('Shakllar va perimetrlar', 'Фигуры и периметры', 'Shapes and perimeters'), p: [
      L('Tomonlari soni har xil shakllar va ularning perimetrlari:', 'Фигуры с разным числом сторон и их периметры:', 'Shapes with different numbers of sides and their perimeters:')
    ], table: { head: [L('Shakl', 'Фигура', 'Shape'), L('Tomonlar', 'Стороны', 'Sides'), L('Uzunliklar', 'Длины', 'Lengths'), 'P'], rows: [
      [L('Uchburchak', 'Треугольник', 'Triangle'), '3', '5, 6, 7 cm', '18 cm'],
      [L('Kvadrat', 'Квадрат', 'Square'), '4', '6, 6, 6, 6 cm', '24 cm'],
      [L('To‘g‘ri to‘rtburchak', 'Прямоугольник', 'Rectangle'), '4', '10, 4, 10, 4 cm', '28 cm'],
      [L('Beshburchak', 'Пятиугольник', 'Pentagon'), '5', '4, 6, 5, 3, 7 cm', '25 cm'],
      [L('Oltiburchak', 'Шестиугольник', 'Hexagon'), '6', '5 cm × 6', '30 cm']
    ] }, after: [
      L('Asalari uyalari muntazam oltiburchak shaklida — barcha 6 tomoni teng. Tomoni 3 mm bo‘lsa, perimetri 18 mm.', 'Соты пчёл — правильные шестиугольники, все 6 сторон равны. При стороне 3 мм периметр 18 мм.', 'Honeycomb cells are regular hexagons with 6 equal sides. With a side of 3 mm the perimeter is 18 mm.')
    ] },
    { kind: 'mistake', h: L('Tipik xatolar', 'Типичные ошибки', 'Common mistakes'), p: [
      L('Perimetr bilan ishlaganda ko‘p uchraydigan xatolar:', 'Частые ошибки при нахождении периметра:', 'Common mistakes with perimeter:')
    ], list: [
      L('<b>Tomonni tashlab ketish.</b> To‘g‘ri to‘rtburchakda faqat ikkita son berilgan bo‘lsa ham, tomonlar 4 ta: 12 + 8 = 20 emas, 12 + 8 + 12 + 8 = 40.', '<b>Пропустить сторону.</b> Даже если у прямоугольника даны два числа, сторон 4: не 12 + 8 = 20, а 12 + 8 + 12 + 8 = 40.', '<b>Missing a side.</b> Even if a rectangle shows only two numbers, it has 4 sides: not 12 + 8 = 20 but 12 + 8 + 12 + 8 = 40.'),
      L('<b>Har xil birliklarni qo‘shish.</b> 2 dm + 5 cm + 7 cm ≠ 14. Avval 2 dm = 20 cm: 20 + 5 + 7 = 32 cm.', '<b>Складывать разные единицы.</b> 2 дм + 5 см + 7 см ≠ 14. Сначала 2 дм = 20 см: 20 + 5 + 7 = 32 см.', '<b>Adding different units.</b> 2 dm + 5 cm + 7 cm ≠ 14. First 2 dm = 20 cm: 20 + 5 + 7 = 32 cm.'),
      L('<b>Ochiq siniq chiziqni ko‘pburchak deb o‘ylash.</b> Agar oxiri boshiga qaytmasa — bu ko‘pburchak emas, uning perimetri yo‘q, faqat uzunligi bor.', '<b>Путать незамкнутую ломаную с многоугольником.</b> Если конец не вернулся к началу — это не многоугольник, у него нет периметра, есть только длина.', '<b>Treating an open broken line as a polygon.</b> If the end does not return to the start, it is not a polygon; it has a length but no perimeter.'),
      L('<b>Birlikni yozmaslik.</b> «P = 40» — nima 40? 40 m yoki 40 cm — katta farq!', '<b>Не писать единицу.</b> «P = 40» — 40 чего? 40 м или 40 см — большая разница!', '<b>Leaving out the unit.</b> “P = 40”: 40 what? 40 m or 40 cm is a big difference!')
    ] },
    { kind: 'life', h: L('Hayotda perimetr', 'Периметр в жизни', 'Perimeter in everyday life'), p: [
      L('<b>Bog‘da.</b> Tomorqani devor yoki to‘r bilan o‘rash uchun perimetr kerak. Qancha ko‘p to‘r — shuncha ko‘p pul, shuning uchun aniq hisoblash muhim.', '<b>В саду.</b> Чтобы огородить участок забором или сеткой, нужен периметр. Больше сетки — больше денег, поэтому важно точно посчитать.', '<b>In the garden.</b> To fence a plot with a wall or netting you need its perimeter. More netting costs more money, so accurate sums matter.'),
      L('<b>Uyda.</b> Xonaga plintus (devor tagidagi taxta) o‘rnatish, rasm ramkasi yasash, stol cheti bo‘ylab lenta yopishtirish — hammasi perimetr.', '<b>Дома.</b> Поставить плинтус в комнате, сделать раму для картины, наклеить ленту по краю стола — всё это периметр.', '<b>At home.</b> Fitting skirting boards in a room, making a picture frame, sticking tape round a table edge: all perimeter.'),
      L('<b>Sportda.</b> Stadion yo‘lakchasi, futbol maydoni chizig‘i, suzish havzasi atrofidagi yo‘l — hammasining uzunligi perimetr orqali topiladi.', '<b>В спорте.</b> Беговая дорожка, разметка футбольного поля, дорожка вокруг бассейна — длину всего этого находят через периметр.', '<b>In sport.</b> A running track, the lines of a football pitch, the path round a pool: their lengths come from the perimeter.'),
      L('<b>Yo‘lda.</b> Siniq chiziq — bu sizning marshrutingiz: uydan do‘konga 200 m, do‘kondan maktabga 350 m. Jami yo‘l 550 m.', '<b>В дороге.</b> Ломаная — это твой маршрут: от дома до магазина 200 м, от магазина до школы 350 м. Весь путь 550 м.', '<b>On the way.</b> A broken line is your route: 200 m from home to the shop, 350 m from the shop to school. 550 m in all.')
    ] },
    { kind: 'fact', h: L('Qiziqarli faktlar', 'Интересные факты', 'Fun facts'), list: [
      L('Xitoy devori — dunyodagi eng uzun inshoot. Barcha qismlari bilan uning uzunligi 20 ming km dan oshadi.', 'Великая Китайская стена — самое длинное сооружение в мире. Со всеми ответвлениями её длина больше 20 тысяч км.', 'The Great Wall of China is the longest structure in the world. With all its branches it is more than 20 thousand km long.'),
      L('Qadimgi Xiva shahrining ichki qal’asi — Ichan qal’a devori bilan o‘ralgan, uning uzunligi 2 km dan ortiq.', 'Внутренний город древней Хивы — Ичан-Кала — окружён стеной длиной более 2 км.', 'The inner town of ancient Khiva, Itchan Kala, is surrounded by a wall more than 2 km long.'),
      L('Bir xil perimetrli shakllar har xil ko‘rinishda bo‘lishi mumkin: tomoni 5 cm kvadrat va tomonlari 8 va 2 cm to‘g‘ri to‘rtburchak — ikkalasining perimetri 20 cm!', 'Фигуры с одинаковым периметром могут выглядеть по-разному: квадрат со стороной 5 см и прямоугольник 8 на 2 см — у обоих периметр 20 см!', 'Shapes with the same perimeter can look very different: a square with 5 cm sides and an 8 cm by 2 cm rectangle both have a perimeter of 20 cm!')
    ] },
    { kind: 'practice', h: L('O‘ylab ko‘ring', 'Подумай', 'Think about it'), p: [
      L('Tomonlarni sanashni unutmang!', 'Не забывай считать стороны!', 'Don’t forget to count the sides!')
    ], list: [
      L('Siniq chiziq bo‘g‘inlari 7 cm, 9 cm, 3 cm, 11 cm. Uzunligi?', 'Звенья ломаной: 7 см, 9 см, 3 см, 11 см. Длина?', 'A broken line has links of 7 cm, 9 cm, 3 cm and 11 cm. Its length?'),
      L('To‘g‘ri to‘rtburchak tomonlari 25 m va 15 m. P = ?', 'Стороны прямоугольника 25 м и 15 м. P = ?', 'A rectangle has sides of 25 m and 15 m. P = ?'),
      L('Kvadrat perimetri 40 cm. Tomoni qancha?', 'Периметр квадрата 40 см. Чему равна сторона?', 'A square’s perimeter is 40 cm. How long is each side?'),
      L('Daftaringiz muqovasining perimetrini o‘lchang.', 'Измерь периметр обложки своей тетради.', 'Measure the perimeter of your notebook cover.')
    ], after: [
      L('Javoblar: 30 cm; 25 + 15 + 25 + 15 = 80 m; 10 cm (10 + 10 + 10 + 10 = 40).', 'Ответы: 30 см; 25 + 15 + 25 + 15 = 80 м; 10 см (10 + 10 + 10 + 10 = 40).', 'Answers: 30 cm; 25 + 15 + 25 + 15 = 80 m; 10 cm (10 + 10 + 10 + 10 = 40).')
    ] },
    { kind: 'summary', h: L('Xulosa', 'Итог', 'Summary'), list: [
      L('<b>Siniq chiziq</b> kesmalardan (bo‘g‘inlardan) iborat; uzunligi — bo‘g‘inlar yig‘indisi.', '<b>Ломаная</b> состоит из отрезков (звеньев); её длина — сумма звеньев.', 'A <b>broken line</b> is made of segments (links); its length is the sum of the links.'),
      L('Yopiq siniq chiziq <b>ko‘pburchak</b> hosil qiladi.', 'Замкнутая ломаная образует <b>многоугольник</b>.', 'A closed broken line makes a <b>polygon</b>.'),
      L('<b>Perimetr</b>: P = a + b + c + … — barcha tomonlar yig‘indisi.', '<b>Периметр</b>: P = a + b + c + … — сумма всех сторон.', '<b>Perimeter</b>: P = a + b + c + …, the sum of all sides.'),
      L('Kvadrat: 4 ta teng tomon. To‘g‘ri to‘rtburchak: qarama-qarshi tomonlar teng.', 'Квадрат: 4 равные стороны. Прямоугольник: противоположные стороны равны.', 'Square: 4 equal sides. Rectangle: opposite sides equal.'),
      L('Barcha tomonlar bir xil birlikda bo‘lsin; javobga birlik yozing.', 'Все стороны — в одних единицах; в ответе пиши единицу.', 'Keep all sides in one unit and write the unit in the answer.'),
      L('Geometriya qadimgi Misrdagi yer o‘lchashdan boshlangan.', 'Геометрия началась с измерения земли в Древнем Египте.', 'Geometry began with measuring land in Ancient Egypt.')
    ] }
  ] });
})(this);
(function (root) { 'use strict'; var L = root.NMCurriculum.H.L, T = root.NMTheory, P = '2-2';

  // ---------- t10. Qo'shish va ayirish bog'liqligi. Teskari amallar ----------
  T.add(P, 't10', { sections: [
    { kind: 'intro', h: L('Borib, qaytib kelamiz', 'Туда и обратно', 'There and back again'), p: [
      L('Tasavvur qiling: siz uydan chiqib, do‘konga 200 qadam yurdingiz. Uyga qaytish uchun nima qilasiz? Xuddi shu 200 qadamni teskari tomonga yurasiz. Matematikada ham shunday: har bir amalning o‘zini «bekor qiladigan» <b>teskari amali</b> bor.', 'Представь: ты вышел из дома и прошёл до магазина 200 шагов. Как вернуться домой? Пройти те же 200 шагов в обратную сторону. В математике так же: у каждого действия есть <b>обратное действие</b>, которое его «отменяет».', 'Imagine you leave home and walk 200 steps to the shop. How do you get back? Walk the same 200 steps the other way. Maths is the same: every operation has an <b>inverse operation</b> that “undoes” it.'),
      L('Qo‘shish va ayirish — xuddi aka-uka kabi. Biri qo‘shadi, ikkinchisi olib tashlaydi. Agar 245 ga 130 ni qo‘shsangiz, 375 chiqadi. 375 dan yana 130 ni ayirsangiz — yana 245 ga qaytasiz! Bu sehr emas, bu matematika qonuni.', 'Сложение и вычитание — как два брата. Один прибавляет, другой убирает. Прибавь к 245 число 130 — получишь 375. Вычти из 375 те же 130 — снова вернёшься к 245! Это не волшебство, а закон математики.', 'Addition and subtraction are like two brothers. One adds, the other takes away. Add 130 to 245 and you get 375. Take 130 away from 375 and you are back at 245! It is not magic; it is a law of maths.'),
      L('Bu mavzuda qo‘shish va ayirish orasidagi bog‘lanishni, bitta misoldan yana uchta misol tuzishni va javobni teskari amal bilan tekshirishni o‘rganamiz. Bu sizga xatolarni topishda juda yordam beradi.', 'В этой теме узнаем, как связаны сложение и вычитание, как из одного примера составить ещё три и как проверить ответ обратным действием. Это очень поможет находить ошибки.', 'In this topic we learn how addition and subtraction are linked, how to make three more examples from one, and how to check an answer with the inverse operation. This will help you find mistakes.')
    ] },
    { kind: 'def', h: L('Teskari amal nima?', 'Что такое обратное действие?', 'What is an inverse operation?'), p: [
      L('<b>Teskari amal</b> — oldingi amal qilgan ishni bekor qiladigan amal. Qo‘shishning teskarisi — ayirish, ayirishning teskarisi — qo‘shish.', '<b>Обратное действие</b> — то, что отменяет результат предыдущего. Сложению обратно вычитание, вычитанию — сложение.', 'An <b>inverse operation</b> undoes what the previous one did. The inverse of addition is subtraction, and the inverse of subtraction is addition.')
    ], list: [
      L('Agar <b>a + b = c</b> bo‘lsa, unda <b>c − b = a</b> va <b>c − a = b</b>.', 'Если <b>a + b = c</b>, то <b>c − b = a</b> и <b>c − a = b</b>.', 'If <b>a + b = c</b>, then <b>c − b = a</b> and <b>c − a = b</b>.'),
      L('Yig‘indidan bitta qo‘shiluvchini ayirsak, ikkinchi qo‘shiluvchi qoladi.', 'Если из суммы вычесть одно слагаемое, получится другое слагаемое.', 'If you subtract one addend from the sum, you get the other addend.'),
      L('Ayirmaga ayriluvchini qo‘shsak, kamayuvchi hosil bo‘ladi.', 'Если к разности прибавить вычитаемое, получится уменьшаемое.', 'If you add the subtrahend to the difference, you get the minuend.')
    ], after: [
      L('Uchta son bir «oila»ni tashkil qiladi: 200, 300 va 500. Ulardan to‘rtta misol tuzish mumkin: 200 + 300 = 500, 300 + 200 = 500, 500 − 300 = 200, 500 − 200 = 300. Buni <b>sonlar uchligi</b> yoki «misollar oilasi» deyishadi.', 'Три числа образуют «семью»: 200, 300 и 500. Из них можно составить четыре примера: 200 + 300 = 500, 300 + 200 = 500, 500 − 300 = 200, 500 − 200 = 300. Это называют <b>тройкой чисел</b> или «семьёй примеров».', 'Three numbers form a “family”: 200, 300 and 500. They give four examples: 200 + 300 = 500, 300 + 200 = 500, 500 − 300 = 200, 500 − 200 = 300. This is called a <b>number triple</b> or a “fact family”.'),
      L('Oilada eng katta son doim yig‘indi yoki kamayuvchi bo‘ladi. Shuni eslab qolsangiz, misollarni tuzish juda oson.', 'В семье самое большое число всегда сумма или уменьшаемое. Запомнишь это — составлять примеры будет очень легко.', 'In a family, the biggest number is always the sum or the minuend. Remember that and making examples is easy.')
    ] },
    { kind: 'history', h: L('Tarozi va teskari amal', 'Весы и обратное действие', 'Scales and inverse operations'), p: [
      L('Muhammad al-Xorazmiyning eng mashhur kitobi «Al-jabr val-muqobala» deb ataladi. «Al-jabr» — «tiklash», ya’ni bir tomondan olingan narsani ikkinchi tomonga qo‘shib, muvozanatni tiklash. Bu aynan teskari amal g‘oyasi! «Algebra» so‘zi shu kitob nomidan kelib chiqqan.', 'Самая знаменитая книга Мухаммада аль-Хорезми называется «Аль-джабр валь-мукабала». «Аль-джабр» — «восстановление»: то, что убрали с одной стороны, добавляют к другой, восстанавливая равновесие. Это и есть идея обратного действия! От названия этой книги произошло слово «алгебра».', 'Muhammad al-Khwarizmi’s most famous book is called “Al-jabr wa’l-muqabala”. “Al-jabr” means “restoring”: what is taken from one side is added to the other to restore balance. That is exactly the idea of the inverse operation! The word “algebra” comes from this book’s title.'),
      L('Bozordagi savdogarlar tarozida buni har kuni ko‘rishgan: bir pallaga yuk qo‘shilsa, muvozanat buziladi, uni tiklash uchun ikkinchi pallaga xuddi shuncha qo‘shish yoki birinchidan olib tashlash kerak.', 'Торговцы на базаре видели это каждый день на весах: если на одну чашу добавили груз, равновесие нарушается, и чтобы восстановить его, нужно добавить столько же на другую чашу или убрать с первой.', 'Market traders saw this every day on their scales: if weight is added to one pan the balance tips, and to restore it you add the same to the other pan or take it off the first.'),
      L('Qadimgi Misr kotiblari ayirishni qo‘shish orqali bajarishgan: «10 hosil bo‘lishi uchun 7 ga nima qo‘shish kerak?» — deb so‘rashgan. Bu ham teskari amal!', 'Писцы Древнего Египта вычитали через сложение: спрашивали «что нужно прибавить к 7, чтобы получить 10?». Это тоже обратное действие!', 'Ancient Egyptian scribes subtracted by adding, asking “what must be added to 7 to make 10?”. That is an inverse operation too!')
    ] },
    { kind: 'rule', h: L('Tekshirish qoidasi', 'Правило проверки', 'The checking rule'), p: [
      L('Har qanday misolni teskari amal bilan tekshirish mumkin:', 'Любой пример можно проверить обратным действием:', 'Any example can be checked with the inverse operation:')
    ], list: [
      L('<b>Qo‘shishni ayirish bilan tekshiramiz.</b> 245 + 130 = 375. Tekshiruv: 375 − 130 = 245 ✓. Natija birinchi qo‘shiluvchiga teng bo‘lsa — to‘g‘ri.', '<b>Сложение проверяем вычитанием.</b> 245 + 130 = 375. Проверка: 375 − 130 = 245 ✓. Если получилось первое слагаемое — верно.', '<b>Check addition with subtraction.</b> 245 + 130 = 375. Check: 375 − 130 = 245 ✓. If you get the first addend back, it is right.'),
      L('<b>Ayirishni qo‘shish bilan tekshiramiz.</b> 600 − 250 = 350. Tekshiruv: 350 + 250 = 600 ✓. Natija kamayuvchiga teng bo‘lsa — to‘g‘ri.', '<b>Вычитание проверяем сложением.</b> 600 − 250 = 350. Проверка: 350 + 250 = 600 ✓. Если получилось уменьшаемое — верно.', '<b>Check subtraction with addition.</b> 600 − 250 = 350. Check: 350 + 250 = 600 ✓. If you get the minuend back, it is right.'),
      L('Ayirishni ayirish bilan ham tekshirish mumkin: 600 − 350 = 250 ✓.', 'Вычитание можно проверить и вычитанием: 600 − 350 = 250 ✓.', 'Subtraction can also be checked by subtraction: 600 − 350 = 250 ✓.')
    ], after: [
      L('Agar tekshiruvda boshqa son chiqsa — birinchi hisobda xato bor. Masalan, 452 − 178 = 284 deb yozdingiz. Tekshiramiz: 284 + 178 = 462 ≠ 452. Demak, xato! To‘g‘risi: 274.', 'Если при проверке вышло другое число — в первом вычислении ошибка. Например, написал 452 − 178 = 284. Проверим: 284 + 178 = 462 ≠ 452. Значит, ошибка! Верно: 274.', 'If the check gives a different number, the first sum has a mistake. Say you wrote 452 − 178 = 284. Check: 284 + 178 = 462 ≠ 452. So it is wrong! The correct answer is 274.')
    ] },
    { kind: 'steps', h: L('Qadamma-qadam: misollar oilasini tuzish', 'Шаг за шагом: семья примеров', 'Step by step: building a fact family'), p: [
      L('Berilgan: 320 + 150 = 470. Yana uchta misol tuzamiz.', 'Дано: 320 + 150 = 470. Составим ещё три примера.', 'Given: 320 + 150 = 470. Let us make three more examples.')
    ], list: [
      L('1-qadam. Eng katta sonni toping: 470. U yig‘indi.', 'Шаг 1. Найди самое большое число: 470. Это сумма.', 'Step 1. Find the biggest number: 470. It is the sum.'),
      L('2-qadam. Qo‘shiluvchilar o‘rnini almashtiring: 150 + 320 = 470.', 'Шаг 2. Поменяй слагаемые местами: 150 + 320 = 470.', 'Step 2. Swap the addends: 150 + 320 = 470.'),
      L('3-qadam. Yig‘indidan birinchi qo‘shiluvchini ayiring: 470 − 320 = 150.', 'Шаг 3. Из суммы вычти первое слагаемое: 470 − 320 = 150.', 'Step 3. Take the first addend from the sum: 470 − 320 = 150.'),
      L('4-qadam. Yig‘indidan ikkinchi qo‘shiluvchini ayiring: 470 − 150 = 320.', 'Шаг 4. Из суммы вычти второе слагаемое: 470 − 150 = 320.', 'Step 4. Take the second addend from the sum: 470 − 150 = 320.')
    ], after: [
      L('Endi to‘rtta misolingiz bor va ularning hammasi to‘g‘ri, chunki bir xil uchta sondan tuzilgan. Bunday oilalarni tuzish teskari amallarni yaxshi tushunishga yordam beradi.', 'Теперь у тебя четыре примера, и все верные, потому что составлены из тех же трёх чисел. Составление таких семей помогает хорошо понять обратные действия.', 'Now you have four examples, all correct, because they use the same three numbers. Building fact families helps you really understand inverse operations.')
    ] },
    { kind: 'example', h: L('Yechilgan namunalar', 'Разобранные примеры', 'Worked examples'), p: [
      L('Har bir misolda teskari amaldan foydalanamiz.', 'В каждом примере пользуемся обратным действием.', 'We use the inverse operation in each one.')
    ], ex: [
      { q: L('350 + 120 = 470 bo‘lsa, 470 − 120 = ?', 'Если 350 + 120 = 470, то 470 − 120 = ?', 'If 350 + 120 = 470, then 470 − 120 = ?'), s: L('Yig‘indidan bitta qo‘shiluvchini ayirsak, ikkinchisi qoladi. Hisoblamasdan javob: <b>350</b>.', 'Из суммы вычли одно слагаемое — осталось другое. Ответ без вычислений: <b>350</b>.', 'Taking one addend from the sum leaves the other. Answer without calculating: <b>350</b>.') },
      { q: L('Tekshiring: 563 − 247 = 316. To‘g‘rimi?', 'Проверь: 563 − 247 = 316. Верно?', 'Check: 563 − 247 = 316. Is it right?'), s: L('Qo‘shish bilan: 316 + 247. Birliklar 6 + 7 = 13 → 3, 1 yodda; o‘nliklar 1 + 4 + 1 = 6; yuzliklar 3 + 2 = 5. 563 ✓. Javob: <b>to‘g‘ri</b>.', 'Сложением: 316 + 247. Единицы 6 + 7 = 13 → 3, 1 в уме; десятки 1 + 4 + 1 = 6; сотни 3 + 2 = 5. 563 ✓. Ответ: <b>верно</b>.', 'By adding: 316 + 247. Ones 6 + 7 = 13 → 3, carry 1; tens 1 + 4 + 1 = 6; hundreds 3 + 2 = 5. 563 ✓. Answer: <b>correct</b>.') },
      { q: L('Tekshiring: 284 + 159 = 433. To‘g‘rimi?', 'Проверь: 284 + 159 = 433. Верно?', 'Check: 284 + 159 = 433. Is it right?'), s: L('Ayirish bilan: 433 − 159 = 274. Lekin birinchi qo‘shiluvchi 284 edi! 274 ≠ 284 — <b>xato</b>. To‘g‘risi: 284 + 159 = 443.', 'Вычитанием: 433 − 159 = 274. А первое слагаемое было 284! 274 ≠ 284 — <b>ошибка</b>. Верно: 284 + 159 = 443.', 'By subtracting: 433 − 159 = 274. But the first addend was 284! 274 ≠ 284, so it is <b>wrong</b>. Correct: 284 + 159 = 443.') },
      { q: L('Sonni o‘yladim, unga 200 qo‘shdim va 650 chiqdi. Qaysi sonni o‘yladim?', 'Я задумал число, прибавил 200 и получил 650. Какое число я задумал?', 'I thought of a number, added 200 and got 650. What was my number?'), s: L('Qo‘shishni bekor qilamiz — ayiramiz: 650 − 200 = <b>450</b>. Tekshiruv: 450 + 200 = 650 ✓.', 'Отменяем сложение вычитанием: 650 − 200 = <b>450</b>. Проверка: 450 + 200 = 650 ✓.', 'Undo the adding by subtracting: 650 − 200 = <b>450</b>. Check: 450 + 200 = 650 ✓.') },
      { q: L('245 + 380 − 380 = ?', '245 + 380 − 380 = ?', '245 + 380 − 380 = ?'), s: L('380 ni qo‘shib, keyin xuddi shu 380 ni ayirdik — ular bir-birini bekor qiladi. Javob: <b>245</b>.', 'Прибавили 380 и тут же вычли 380 — они отменяют друг друга. Ответ: <b>245</b>.', 'We added 380 and then took the same 380 away; they cancel out. Answer: <b>245</b>.') }
    ] },
    { kind: 'table', h: L('Misollar oilalari', 'Семьи примеров', 'Fact families'), p: [
      L('Har bir qatorda uchta sondan tuzilgan to‘rtta misol:', 'В каждой строке — четыре примера из трёх чисел:', 'Each row shows four examples made from three numbers:')
    ], table: { head: [L('Sonlar', 'Числа', 'Numbers'), L('Qo‘shish', 'Сложение', 'Adding'), L('Ayirish', 'Вычитание', 'Subtracting')], rows: [
      ['200, 300, 500', '200 + 300 = 500 · 300 + 200 = 500', '500 − 300 = 200 · 500 − 200 = 300'],
      ['245, 130, 375', '245 + 130 = 375 · 130 + 245 = 375', '375 − 130 = 245 · 375 − 245 = 130'],
      ['410, 90, 500', '410 + 90 = 500 · 90 + 410 = 500', '500 − 90 = 410 · 500 − 410 = 90'],
      ['650, 350, 1000', '650 + 350 = 1000 · 350 + 650 = 1000', '1000 − 350 = 650 · 1000 − 650 = 350']
    ] }, after: [
      L('Qarang: har bir oilada ikkita qo‘shish va ikkita ayirish misoli bor, va eng katta son doim bir xil o‘rinda turadi.', 'Смотри: в каждой семье два примера на сложение и два на вычитание, а самое большое число всегда на одном месте.', 'Notice: each family has two adding and two subtracting examples, and the biggest number always sits in the same place.')
    ] },
    { kind: 'mistake', h: L('Tipik xatolar', 'Типичные ошибки', 'Common mistakes'), p: [
      L('Teskari amallarda bolalar ko‘pincha shunday adashadi:', 'С обратными действиями дети часто путаются так:', 'Children often get mixed up with inverse operations like this:')
    ], list: [
      L('<b>Noto‘g‘ri amal bilan tekshirish.</b> 245 + 130 = 375 ni 375 + 130 bilan tekshirish — xato. Qo‘shishni <b>ayirish</b> bilan tekshiramiz.', '<b>Проверять не тем действием.</b> Проверять 245 + 130 = 375 через 375 + 130 — ошибка. Сложение проверяем <b>вычитанием</b>.', '<b>Checking with the wrong operation.</b> Checking 245 + 130 = 375 with 375 + 130 is wrong. Check adding with <b>subtracting</b>.'),
      L('<b>Kichikdan kattani ayirish.</b> Oila tuzganda 130 − 375 deb yozish mumkin emas. Ayirishda doim eng katta sondan boshlaymiz.', '<b>Вычитать большее из меньшего.</b> Составляя семью, нельзя написать 130 − 375. При вычитании всегда начинаем с самого большого числа.', '<b>Subtracting the bigger from the smaller.</b> In a fact family you cannot write 130 − 375. Subtraction always starts with the biggest number.'),
      L('<b>Tekshiruvni «ko‘zda» qilish.</b> Tekshiruvni ham to‘liq hisoblash kerak, aks holda xatoni ko‘rmay qolasiz.', '<b>Проверять «на глаз».</b> Проверку тоже нужно считать полностью, иначе ошибку не заметишь.', '<b>Checking “by eye”.</b> The check must be worked out in full too, or you will miss the mistake.'),
      L('<b>Tekshiruvda xato chiqsa, javobni o‘zgartirmaslik.</b> Tekshiruv natijasi mos kelmasa, misolni qaytadan yeching.', '<b>Не исправлять ответ, если проверка не сошлась.</b> Если проверка не совпала — реши пример заново.', '<b>Not fixing the answer when the check fails.</b> If the check does not match, solve the example again.')
    ] },
    { kind: 'life', h: L('Hayotda teskari amallar', 'Обратные действия в жизни', 'Inverse operations in everyday life'), p: [
      L('<b>Do‘konda.</b> Siz 1000 so‘m berdingiz, xarid 650 so‘m. Qaytim 350 so‘m. Uni tekshirish uchun: 650 + 350 = 1000 ✓. Har bir ehtiyotkor xaridor shunday qiladi.', '<b>В магазине.</b> Ты дал 1000 сумов, покупка стоит 650. Сдача — 350. Проверка: 650 + 350 = 1000 ✓. Так делает каждый внимательный покупатель.', '<b>At the shop.</b> You paid 1000 soms for a 650-som purchase. The change is 350. Check it: 650 + 350 = 1000 ✓. Every careful shopper does this.'),
      L('<b>Cho‘ntak pulida.</b> Hamyoningizda 800 so‘m bor edi, endi 500 so‘m. Qancha sarfladingiz? 800 − 500 = 300 so‘m. Tekshiruv: 500 + 300 = 800 ✓.', '<b>С карманными деньгами.</b> В кошельке было 800 сумов, теперь 500. Сколько потратил? 800 − 500 = 300 сумов. Проверка: 500 + 300 = 800 ✓.', '<b>Pocket money.</b> You had 800 soms in your purse and now have 500. How much did you spend? 800 − 500 = 300 soms. Check: 500 + 300 = 800 ✓.'),
      L('<b>Liftda.</b> Lift 3 qavat yuqoriga chiqdi, keyin 3 qavat pastga tushdi — u yana o‘sha qavatda. Bu ham teskari amal!', '<b>В лифте.</b> Лифт поднялся на 3 этажа, потом спустился на 3 — и он снова на том же этаже. Это тоже обратное действие!', '<b>In a lift.</b> A lift goes up 3 floors and then down 3 floors: it is back on the same floor. That is an inverse operation too!'),
      L('<b>Kompyuterda.</b> «Bekor qilish» (Ctrl + Z) tugmasi — oxirgi harakatning teskarisini bajaradi. Dasturchilar ham teskari amal g‘oyasidan foydalanadi.', '<b>В компьютере.</b> Кнопка «Отменить» (Ctrl + Z) выполняет действие, обратное последнему. Программисты тоже пользуются идеей обратного действия.', '<b>On a computer.</b> The “Undo” button (Ctrl + Z) does the inverse of your last action. Programmers use the idea of inverse operations too.')
    ] },
    { kind: 'fact', h: L('Qiziqarli faktlar', 'Интересные факты', 'Fun facts'), list: [
      L('«Son o‘ylash» fokusi: biror son o‘ylang, unga 100 qo‘shing, keyin 30 qo‘shing, keyin 100 ni ayiring. Javobni ayting — men undan 30 ni ayirib, o‘ylagan soningizni topaman! Bu teskari amallarga asoslangan.', 'Фокус «угадай число»: задумай число, прибавь 100, потом прибавь 30, потом вычти 100. Назови ответ — я вычту 30 и угадаю твоё число! Фокус основан на обратных действиях.', 'A “guess the number” trick: think of a number, add 100, add 30, then subtract 100. Tell me the answer, I subtract 30 and find your number! The trick is built on inverse operations.'),
      L('Ba’zi qadimgi hisob-kitob kitoblarida har bir misolning yonida albatta tekshiruv yozilgan. Hisobchilar xato uchun jarima to‘lashlari mumkin edi!', 'В некоторых старинных счётных книгах рядом с каждым примером обязательно записывали проверку. За ошибку счетовод мог заплатить штраф!', 'In some old account books a check was always written next to every sum. A bookkeeper could be fined for a mistake!'),
      L('Rubik kubigini ham teskari harakatlar bilan boshlang‘ich holatga qaytarish mumkin: har bir burilishning teskari burilishi bor.', 'Кубик Рубика тоже можно вернуть в исходное состояние обратными ходами: у каждого поворота есть обратный поворот.', 'A Rubik’s Cube can also be returned to the start with reverse moves: every turn has an opposite turn.')
    ] },
    { kind: 'practice', h: L('O‘ylab ko‘ring', 'Подумай', 'Think about it'), p: [
      L('Teskari amalni ishlating.', 'Пользуйся обратным действием.', 'Use the inverse operation.')
    ], list: [
      L('420 + 280 = 700. Shu sonlardan yana uchta misol tuzing.', '420 + 280 = 700. Составь из этих чисел ещё три примера.', '420 + 280 = 700. Make three more examples from these numbers.'),
      L('Tekshiring: 715 − 368 = 357. To‘g‘rimi?', 'Проверь: 715 − 368 = 357. Верно?', 'Check: 715 − 368 = 357. Is it right?'),
      L('Men sonni o‘yladim, undan 150 ni ayirdim va 300 chiqdi. Qaysi son?', 'Я задумал число, вычел 150 и получил 300. Какое число?', 'I thought of a number, took away 150 and got 300. What was it?'),
      L('Hisoblamasdan javob bering: 567 + 233 − 233 = ?', 'Ответь без вычислений: 567 + 233 − 233 = ?', 'Answer without calculating: 567 + 233 − 233 = ?')
    ], after: [
      L('Javoblar: 280 + 420 = 700, 700 − 420 = 280, 700 − 280 = 420. Ikkinchi: 357 + 368 = 725 ≠ 715 — xato, to‘g‘risi 347. Uchinchi: 300 + 150 = 450. To‘rtinchi: 567.', 'Ответы: 280 + 420 = 700, 700 − 420 = 280, 700 − 280 = 420. Второй: 357 + 368 = 725 ≠ 715 — ошибка, верно 347. Третий: 300 + 150 = 450. Четвёртый: 567.', 'Answers: 280 + 420 = 700, 700 − 420 = 280, 700 − 280 = 420. Second: 357 + 368 = 725 ≠ 715, so it is wrong; the answer is 347. Third: 300 + 150 = 450. Fourth: 567.')
    ] },
    { kind: 'summary', h: L('Xulosa', 'Итог', 'Summary'), list: [
      L('Qo‘shish va ayirish — bir-biriga <b>teskari</b> amallar.', 'Сложение и вычитание — <b>обратные</b> друг другу действия.', 'Addition and subtraction are <b>inverse</b> operations.'),
      L('a + b = c bo‘lsa, c − b = a va c − a = b.', 'Если a + b = c, то c − b = a и c − a = b.', 'If a + b = c, then c − b = a and c − a = b.'),
      L('Uchta sondan to‘rtta misol tuziladi — «misollar oilasi».', 'Из трёх чисел получаются четыре примера — «семья примеров».', 'Three numbers give four examples, a “fact family”.'),
      L('Qo‘shishni ayirish bilan, ayirishni qo‘shish bilan tekshiramiz.', 'Сложение проверяем вычитанием, вычитание — сложением.', 'Check adding by subtracting and subtracting by adding.'),
      L('Tekshiruv mos kelmasa — misolni qaytadan yeching.', 'Если проверка не сошлась — реши пример заново.', 'If the check does not match, solve it again.'),
      L('«Algebra» so‘zi Xorazmiyning «al-jabr» — «tiklash» kitobidan kelgan.', 'Слово «алгебра» пришло из книги аль-Хорезми: «аль-джабр» — «восстановление».', 'The word “algebra” comes from al-Khwarizmi’s book: “al-jabr” means “restoring”.')
    ] }
  ] });

  // ---------- t11. Tenglamalar ----------
  T.add(P, 't11', { sections: [
    { kind: 'intro', h: L('Sirli quti', 'Загадочная коробка', 'The mystery box'), p: [
      L('Stol ustida yopiq quti turibdi. Ichida nechta konfet borligini bilmaymiz. Lekin bilamizki, agar unga yana 120 ta konfet solsak, jami 450 ta bo‘ladi. Qutida nechta konfet bor edi? Matematiklar bunday savolni qisqa yozishadi: <b>x + 120 = 450</b>. Bu — <b>tenglama</b>.', 'На столе закрытая коробка. Сколько в ней конфет, мы не знаем. Но знаем: если положить туда ещё 120 конфет, всего станет 450. Сколько конфет было в коробке? Математики записывают такой вопрос коротко: <b>x + 120 = 450</b>. Это — <b>уравнение</b>.', 'There is a closed box on the table. We don’t know how many sweets are inside. But we know that if we put in 120 more, there will be 450 in all. How many were in the box? Mathematicians write this question briefly: <b>x + 120 = 450</b>. That is an <b>equation</b>.'),
      L('x harfi — bu yopiq quti, noma’lum son. Bizning vazifamiz — qutini «ochish», ya’ni x ning qiymatini topish. Buning uchun o‘tgan mavzudagi bilimimiz — teskari amallar — kerak bo‘ladi.', 'Буква x — это закрытая коробка, неизвестное число. Наша задача — «открыть» коробку, то есть найти, чему равен x. Для этого пригодится то, что мы узнали в прошлой теме, — обратные действия.', 'The letter x is the closed box, the unknown number. Our job is to “open” the box, that is, to find what x equals. For this we need what we learned in the last topic: inverse operations.'),
      L('Bu mavzuda tenglama nima ekanini, noma’lum qo‘shiluvchi, kamayuvchi va ayriluvchini topishni hamda yechimni tekshirishni o‘rganamiz. Tenglamalar — katta matematikaga ochiladigan eshik!', 'В этой теме узнаем, что такое уравнение, как найти неизвестное слагаемое, уменьшаемое и вычитаемое и как проверить решение. Уравнения — это дверь в большую математику!', 'In this topic we learn what an equation is, how to find an unknown addend, minuend or subtrahend, and how to check the solution. Equations are the door to big mathematics!')
    ] },
    { kind: 'def', h: L('Tenglama nima?', 'Что такое уравнение?', 'What is an equation?'), p: [
      L('<b>Tenglama</b> — noma’lum son qatnashgan tenglik. Noma’lum son odatda lotin harfi <b>x</b> bilan belgilanadi.', '<b>Уравнение</b> — это равенство с неизвестным числом. Неизвестное обычно обозначают латинской буквой <b>x</b>.', 'An <b>equation</b> is an equality with an unknown number in it. The unknown is usually written as the Latin letter <b>x</b>.')
    ], list: [
      L('<b>Tenglamani yechish</b> — x ning shunday qiymatini topish demakki, uni qo‘yganda tenglik to‘g‘ri bo‘lsin.', '<b>Решить уравнение</b> — найти такое значение x, при котором равенство станет верным.', '<b>Solving an equation</b> means finding the value of x that makes the equality true.'),
      L('Topilgan son tenglamaning <b>ildizi</b> yoki <b>yechimi</b> deb ataladi.', 'Найденное число называется <b>корнем</b> или <b>решением</b> уравнения.', 'The number we find is called the <b>root</b> or <b>solution</b> of the equation.'),
      L('x + 120 = 450 tenglamasining ildizi — 330, chunki 330 + 120 = 450.', 'Корень уравнения x + 120 = 450 — 330, потому что 330 + 120 = 450.', 'The root of x + 120 = 450 is 330, because 330 + 120 = 450.')
    ], after: [
      L('Tenglamani taroziga o‘xshatish mumkin: «=» belgisi — tarozining o‘rtasi. Chap palla va o‘ng palla teng og‘irlikda bo‘lishi kerak. Sahnadagi tarozi aynan shuni ko‘rsatadi.', 'Уравнение похоже на весы: знак «=» — середина весов. Левая и правая чаши должны весить одинаково. Весы на сцене показывают именно это.', 'An equation is like a pair of scales: the “=” sign is the middle. The left pan and the right pan must weigh the same. The scales on the stage show exactly this.'),
      L('5 + 3 = 8 — bu tenglik, lekin tenglama emas, chunki unda noma’lum yo‘q. x + 3 = 8 esa tenglama.', '5 + 3 = 8 — это равенство, но не уравнение: неизвестного нет. А x + 3 = 8 — уравнение.', '5 + 3 = 8 is an equality but not an equation, because nothing is unknown. x + 3 = 8 is an equation.')
    ] },
    { kind: 'history', h: L('Tenglamalar otasi', 'Отец уравнений', 'The father of equations'), p: [
      L('Muhammad ibn Muso al-Xorazmiy taxminan 783-yilda Xorazmda tug‘ilgan va Bag‘doddagi «Bayt ul-hikma» — «Donishmandlar uyi»da ishlagan. U tenglamalarni yechish usullarini birinchi bo‘lib tartibli kitob qilib yozgan. Shuning uchun uni ko‘pincha <b>algebraning otasi</b> deb atashadi.', 'Мухаммад ибн Муса аль-Хорезми родился около 783 года в Хорезме и работал в Багдаде в «Байт аль-хикма» — «Доме мудрости». Он первым собрал способы решения уравнений в стройную книгу. Поэтому его часто называют <b>отцом алгебры</b>.', 'Muhammad ibn Musa al-Khwarizmi was born around 783 in Khorezm and worked in Baghdad at the “Bayt al-Hikma”, the “House of Wisdom”. He was the first to set out the methods for solving equations in an orderly book. That is why he is often called the <b>father of algebra</b>.'),
      L('Xorazmiy davrida harflar ishlatilmagan — tenglamalar so‘zlar bilan yozilgan: «Bir narsaga o‘nni qo‘shsang, o‘ttiz bo‘ladi. Narsa qancha?» Noma’lumni u «shay» — «narsa» deb atagan.', 'Во времена аль-Хорезми буквами не пользовались — уравнения записывали словами: «Если к вещи прибавить десять, будет тридцать. Чему равна вещь?» Неизвестное он называл «шай» — «вещь».', 'In al-Khwarizmi’s time letters were not used; equations were written in words: “If you add ten to a thing, you get thirty. What is the thing?” He called the unknown “shay”, meaning “thing”.'),
      L('Noma’lumni x harfi bilan belgilashni ancha keyin, 1637-yilda fransuz olimi <b>Rene Dekart</b> ommalashtirgan. Shundan beri butun dunyo o‘quvchilari «x ni toping» degan topshiriqni bajaradi!', 'Обозначать неизвестное буквой x стал гораздо позже, в 1637 году, французский учёный <b>Рене Декарт</b>. С тех пор школьники всего мира выполняют задание «найди x»!', 'Writing the unknown as x was made popular much later, in 1637, by the French scholar <b>René Descartes</b>. Ever since, pupils all over the world have been asked to “find x”!')
    ] },
    { kind: 'rule', h: L('Noma’lumni topish qoidalari', 'Правила нахождения неизвестного', 'Rules for finding the unknown'), p: [
      L('Uch xil oddiy tenglama bor. Har biri uchun teskari amal qoidasi:', 'Есть три вида простых уравнений. Для каждого — своё правило обратного действия:', 'There are three kinds of simple equation. Each has its own inverse rule:')
    ], list: [
      L('<b>Noma’lum qo‘shiluvchi:</b> x + a = b → x = b − a. Yig‘indidan ma’lum qo‘shiluvchini ayiramiz. x + 120 = 450 → x = 450 − 120 = 330.', '<b>Неизвестное слагаемое:</b> x + a = b → x = b − a. Из суммы вычитаем известное слагаемое. x + 120 = 450 → x = 450 − 120 = 330.', '<b>Unknown addend:</b> x + a = b → x = b − a. Subtract the known addend from the sum. x + 120 = 450 → x = 450 − 120 = 330.'),
      L('<b>Noma’lum kamayuvchi:</b> x − a = b → x = b + a. Ayirmaga ayriluvchini qo‘shamiz. x − 50 = 100 → x = 100 + 50 = 150.', '<b>Неизвестное уменьшаемое:</b> x − a = b → x = b + a. К разности прибавляем вычитаемое. x − 50 = 100 → x = 100 + 50 = 150.', '<b>Unknown minuend:</b> x − a = b → x = b + a. Add the subtrahend to the difference. x − 50 = 100 → x = 100 + 50 = 150.'),
      L('<b>Noma’lum ayriluvchi:</b> a − x = b → x = a − b. Kamayuvchidan ayirmani ayiramiz. 500 − x = 200 → x = 500 − 200 = 300.', '<b>Неизвестное вычитаемое:</b> a − x = b → x = a − b. Из уменьшаемого вычитаем разность. 500 − x = 200 → x = 500 − 200 = 300.', '<b>Unknown subtrahend:</b> a − x = b → x = a − b. Subtract the difference from the minuend. 500 − x = 200 → x = 500 − 200 = 300.')
    ], after: [
      L('Har doim <b>tekshiring</b>: topilgan sonni x o‘rniga qo‘ying va tenglik to‘g‘ri chiqishini ko‘ring. 330 + 120 = 450 ✓.', 'Всегда <b>проверяй</b>: подставь найденное число вместо x и убедись, что равенство верное. 330 + 120 = 450 ✓.', 'Always <b>check</b>: put the number you found in place of x and see that the equality is true. 330 + 120 = 450 ✓.')
    ] },
    { kind: 'steps', h: L('Qadamma-qadam: x − 240 = 360', 'Шаг за шагом: x − 240 = 360', 'Step by step: x − 240 = 360'), p: [
      L('Tenglamani yechishning to‘rt qadami:', 'Четыре шага решения уравнения:', 'Four steps to solve an equation:')
    ], list: [
      L('1-qadam. x qayerda turibdi? U kamayuvchi — undan ayiryapmiz.', 'Шаг 1. Где стоит x? Это уменьшаемое — из него вычитают.', 'Step 1. Where is x? It is the minuend; something is taken from it.'),
      L('2-qadam. Qoidani tanlang: noma’lum kamayuvchini topish uchun ayirmaga ayriluvchini qo‘shamiz.', 'Шаг 2. Выбери правило: чтобы найти уменьшаемое, к разности прибавляем вычитаемое.', 'Step 2. Choose the rule: to find a minuend, add the subtrahend to the difference.'),
      L('3-qadam. Hisoblang: x = 360 + 240 = 600.', 'Шаг 3. Вычисли: x = 360 + 240 = 600.', 'Step 3. Calculate: x = 360 + 240 = 600.'),
      L('4-qadam. Tekshiring: 600 − 240 = 360 ✓. Javob: x = 600.', 'Шаг 4. Проверь: 600 − 240 = 360 ✓. Ответ: x = 600.', 'Step 4. Check: 600 − 240 = 360 ✓. Answer: x = 600.')
    ], after: [
      L('Yozuv shakli: tenglama, ostida yechim, ostida tekshiruv. Bunday tartibli yozuv xatolardan saqlaydi.', 'Форма записи: уравнение, под ним решение, ниже проверка. Такая аккуратная запись защищает от ошибок.', 'The layout: the equation, the solution below it, the check below that. A tidy layout protects you from mistakes.')
    ] },
    { kind: 'example', h: L('Yechilgan namunalar', 'Разобранные примеры', 'Worked examples'), p: [
      L('Avval x qaysi komponent ekanini aniqlang.', 'Сначала определи, каким компонентом является x.', 'First work out which part x is.')
    ], ex: [
      { q: 'x + 200 = 650', s: L('x — noma’lum qo‘shiluvchi. x = 650 − 200 = <b>450</b>. Tekshiruv: 450 + 200 = 650 ✓.', 'x — неизвестное слагаемое. x = 650 − 200 = <b>450</b>. Проверка: 450 + 200 = 650 ✓.', 'x is an unknown addend. x = 650 − 200 = <b>450</b>. Check: 450 + 200 = 650 ✓.') },
      { q: 'x − 50 = 100', s: L('x — noma’lum kamayuvchi. x = 100 + 50 = <b>150</b>. Tekshiruv: 150 − 50 = 100 ✓.', 'x — неизвестное уменьшаемое. x = 100 + 50 = <b>150</b>. Проверка: 150 − 50 = 100 ✓.', 'x is an unknown minuend. x = 100 + 50 = <b>150</b>. Check: 150 − 50 = 100 ✓.') },
      { q: '800 − x = 350', s: L('x — noma’lum ayriluvchi. x = 800 − 350 = <b>450</b>. Tekshiruv: 800 − 450 = 350 ✓.', 'x — неизвестное вычитаемое. x = 800 − 350 = <b>450</b>. Проверка: 800 − 450 = 350 ✓.', 'x is an unknown subtrahend. x = 800 − 350 = <b>450</b>. Check: 800 − 450 = 350 ✓.') },
      { q: L('Qutida konfetlar bor edi. 120 ta qo‘shildi va 450 ta bo‘ldi. Qutida nechta edi?', 'В коробке были конфеты. Добавили 120, стало 450. Сколько было?', 'A box had some sweets. 120 were added and now there are 450. How many were there?'), s: L('Tenglama: x + 120 = 450. x = 450 − 120 = <b>330 ta</b>.', 'Уравнение: x + 120 = 450. x = 450 − 120 = <b>330 конфет</b>.', 'Equation: x + 120 = 450. x = 450 − 120 = <b>330 sweets</b>.') },
      { q: L('Avtobusda yo‘lovchilar bor edi. Bekatda 15 kishi tushdi va 28 kishi qoldi. Avval nechta edi?', 'В автобусе ехали пассажиры. На остановке вышли 15, осталось 28. Сколько было?', 'A bus had some passengers. 15 got off at a stop and 28 were left. How many were there?'), s: L('x − 15 = 28. x = 28 + 15 = <b>43 kishi</b>. Tekshiruv: 43 − 15 = 28 ✓.', 'x − 15 = 28. x = 28 + 15 = <b>43 человека</b>. Проверка: 43 − 15 = 28 ✓.', 'x − 15 = 28. x = 28 + 15 = <b>43 people</b>. Check: 43 − 15 = 28 ✓.') }
    ] },
    { kind: 'table', h: L('Qoidalar jadvali', 'Таблица правил', 'Rules table'), p: [
      L('Bu jadvalni eslab qolsangiz, har qanday oddiy tenglamani yecha olasiz.', 'Запомнишь эту таблицу — решишь любое простое уравнение.', 'Remember this table and you can solve any simple equation.')
    ], table: { head: [L('Tenglama', 'Уравнение', 'Equation'), L('x nima?', 'Что такое x?', 'What is x?'), L('Qanday topamiz', 'Как найти', 'How to find it'), L('Misol', 'Пример', 'Example')], rows: [
      ['x + a = b', L('qo‘shiluvchi', 'слагаемое', 'addend'), 'x = b − a', 'x + 30 = 90, x = 60'],
      ['a + x = b', L('qo‘shiluvchi', 'слагаемое', 'addend'), 'x = b − a', '70 + x = 100, x = 30'],
      ['x − a = b', L('kamayuvchi', 'уменьшаемое', 'minuend'), 'x = b + a', 'x − 40 = 60, x = 100'],
      ['a − x = b', L('ayriluvchi', 'вычитаемое', 'subtrahend'), 'x = a − b', '500 − x = 200, x = 300']
    ] }, after: [
      L('Diqqat: faqat bitta holatda — x kamayuvchi bo‘lganda — qo‘shamiz. Qolgan hamma holatlarda ayiramiz.', 'Внимание: только в одном случае — когда x уменьшаемое — складываем. Во всех остальных вычитаем.', 'Note: only in one case, when x is the minuend, do we add. In all the others we subtract.')
    ] },
    { kind: 'mistake', h: L('Tipik xatolar', 'Типичные ошибки', 'Common mistakes'), p: [
      L('Tenglamalarda ko‘p uchraydigan xatolar:', 'Частые ошибки в уравнениях:', 'Common mistakes with equations:')
    ], list: [
      L('<b>Belgiga qarab amal tanlash.</b> «+ bor ekan, qo‘shaman»: x + 200 = 650 → x = 850 — xato! Teskari amal kerak: x = 650 − 200 = 450.', '<b>Выбирать действие по знаку.</b> «Стоит +, значит, складываю»: x + 200 = 650 → x = 850 — ошибка! Нужно обратное действие: x = 650 − 200 = 450.', '<b>Choosing by the sign.</b> “There’s a +, so I add”: x + 200 = 650 → x = 850 is wrong! You need the inverse: x = 650 − 200 = 450.'),
      L('<b>Kamayuvchi va ayriluvchini adashtirish.</b> 500 − x = 200 da x = 700 emas. x ayriluvchi: x = 500 − 200 = 300.', '<b>Путать уменьшаемое и вычитаемое.</b> В 500 − x = 200 x не 700. x — вычитаемое: x = 500 − 200 = 300.', '<b>Mixing up minuend and subtrahend.</b> In 500 − x = 200, x is not 700. x is the subtrahend: x = 500 − 200 = 300.'),
      L('<b>Tekshirmaslik.</b> Tekshiruv yechimning bir qismi. U xatoni darhol ko‘rsatadi: 850 + 200 = 1050 ≠ 650.', '<b>Не проверять.</b> Проверка — часть решения. Она сразу показывает ошибку: 850 + 200 = 1050 ≠ 650.', '<b>Not checking.</b> The check is part of the solution. It shows a mistake at once: 850 + 200 = 1050 ≠ 650.'),
      L('<b>Javobni noto‘g‘ri yozish.</b> Javob «x = 450» shaklida yoziladi, masalada esa birligi bilan: «330 ta konfet».', '<b>Неверно записывать ответ.</b> Ответ пишем «x = 450», а в задаче — с наименованием: «330 конфет».', '<b>Writing the answer wrongly.</b> Write “x = 450”, and in a word problem add the unit: “330 sweets”.')
    ] },
    { kind: 'life', h: L('Hayotda tenglamalar', 'Уравнения в жизни', 'Equations in everyday life'), p: [
      L('<b>Jamg‘arma.</b> Velosiped 900 ming so‘m. Sizda 650 ming bor. Yana qancha kerak? x + 650 = 900, x = 250 ming so‘m. Har bir tejamkor odam shunday tenglama tuzadi.', '<b>Копилка.</b> Велосипед стоит 900 тысяч сумов. У тебя 650 тысяч. Сколько ещё нужно? x + 650 = 900, x = 250 тысяч. Так рассуждает каждый, кто копит.', '<b>Saving up.</b> A bicycle costs 900 thousand soms. You have 650 thousand. How much more do you need? x + 650 = 900, x = 250 thousand. Everyone who saves thinks like this.'),
      L('<b>Oshxonada.</b> Retseptda 500 g un kerak, idishda 320 g bor. Qancha qo‘shish kerak? 320 + x = 500, x = 180 g.', '<b>На кухне.</b> По рецепту нужно 500 г муки, в миске 320 г. Сколько добавить? 320 + x = 500, x = 180 г.', '<b>In the kitchen.</b> A recipe needs 500 g of flour and the bowl has 320 g. How much should you add? 320 + x = 500, x = 180 g.'),
      L('<b>Sportda.</b> Jamoa o‘yinda 85 ochko to‘pladi, ikkinchi yarimda 40 ochko. Birinchi yarimda qancha edi? x + 40 = 85, x = 45.', '<b>В спорте.</b> Команда набрала за игру 85 очков, во второй половине 40. Сколько в первой? x + 40 = 85, x = 45.', '<b>In sport.</b> A team scored 85 points in a game, 40 of them in the second half. How many in the first half? x + 40 = 85, x = 45.'),
      L('<b>Tarozida.</b> Bozorda sotuvchi tarozining bir pallasiga noma’lum yuk, ikkinchisiga toshlar qo‘yib, muvozanat orqali og‘irlikni topadi — bu jonli tenglama!', '<b>На весах.</b> Продавец на базаре кладёт на одну чашу неизвестный груз, на другую — гири, и по равновесию находит вес — это живое уравнение!', '<b>On the scales.</b> A market seller puts an unknown load on one pan and weights on the other, and finds the weight from the balance: a living equation!')
    ] },
    { kind: 'fact', h: L('Qiziqarli faktlar', 'Интересные факты', 'Fun facts'), list: [
      L('Xivada Xorazmiyga haykal o‘rnatilgan. Uning nomi bilan Toshkentdagi axborot texnologiyalari universiteti ham ataladi.', 'В Хиве установлен памятник аль-Хорезми. Его имя носит и Ташкентский университет информационных технологий.', 'There is a statue of al-Khwarizmi in Khiva. The Tashkent University of Information Technologies is named after him too.'),
      L('Qadimgi Misrning Rind papirusida (taxminan 3600 yil oldin) «aha» masalalari bor — noma’lum «aha» («uyum») sonini topish. Bu dunyodagi eng qadimgi tenglamalardan!', 'В египетском папирусе Ахмеса (около 3600 лет назад) есть задачи «аха» — найти неизвестное число «аха» («куча»). Это одни из древнейших уравнений в мире!', 'The Egyptian Rhind Papyrus (about 3 600 years old) has “aha” problems: find the unknown number “aha” (“heap”). They are among the oldest equations in the world!'),
      L('Sun’iy yo‘ldoshlarning uchish yo‘li, ob-havo bashorati, kompyuter o‘yinlari — hammasi minglab tenglamalar yordamida hisoblanadi.', 'Полёт спутников, прогноз погоды, компьютерные игры — всё это рассчитывают с помощью тысяч уравнений.', 'Satellite paths, weather forecasts and computer games are all worked out with thousands of equations.')
    ] },
    { kind: 'practice', h: L('O‘ylab ko‘ring', 'Подумай', 'Think about it'), p: [
      L('Har bir tenglamani tekshirishni unutmang.', 'Не забудь проверить каждое уравнение.', 'Don’t forget to check each equation.')
    ], list: [
      L('x + 340 = 900; x − 125 = 275; 600 − x = 450.', 'x + 340 = 900; x − 125 = 275; 600 − x = 450.', 'x + 340 = 900; x − 125 = 275; 600 − x = 450.'),
      L('Masalaga tenglama tuzing: «Kitobda bir necha sahifa bor. 180 sahifa o‘qilgandan keyin 70 sahifa qoldi».', 'Составь уравнение к задаче: «В книге несколько страниц. Прочитали 180, осталось 70».', 'Write an equation: “A book has some pages. After reading 180, there are 70 left.”'),
      L('O‘zingiz x + ◻ = ◻ ko‘rinishidagi tenglama o‘ylab toping va do‘stingizga yechishga bering.', 'Придумай своё уравнение вида x + ◻ = ◻ и дай решить другу.', 'Make up your own equation like x + ◻ = ◻ and give it to a friend to solve.')
    ], after: [
      L('Javoblar: x = 560, x = 400, x = 150. Masala: x − 180 = 70, x = 250 sahifa.', 'Ответы: x = 560, x = 400, x = 150. Задача: x − 180 = 70, x = 250 страниц.', 'Answers: x = 560, x = 400, x = 150. Problem: x − 180 = 70, x = 250 pages.')
    ] },
    { kind: 'summary', h: L('Xulosa', 'Итог', 'Summary'), list: [
      L('<b>Tenglama</b> — noma’lum son (x) qatnashgan tenglik.', '<b>Уравнение</b> — равенство с неизвестным числом (x).', 'An <b>equation</b> is an equality with an unknown number (x).'),
      L('Tenglamani yechish — tenglikni to‘g‘ri qiladigan x ni topish.', 'Решить уравнение — найти x, при котором равенство верно.', 'Solving it means finding the x that makes it true.'),
      L('x + a = b → x = b − a; x − a = b → x = b + a; a − x = b → x = a − b.', 'x + a = b → x = b − a; x − a = b → x = b + a; a − x = b → x = a − b.', 'x + a = b → x = b − a; x − a = b → x = b + a; a − x = b → x = a − b.'),
      L('Amalni belgiga qarab emas, x ning o‘rniga qarab tanlaymiz.', 'Действие выбираем не по знаку, а по месту x.', 'Choose the operation by where x is, not by the sign.'),
      L('Har doim tekshiramiz: x ni qo‘yib, tenglik to‘g‘riligini ko‘ramiz.', 'Всегда проверяем: подставляем x и смотрим, верно ли равенство.', 'Always check: put x back in and see if the equality holds.'),
      L('Algebra asoschisi — vatandoshimiz Muhammad al-Xorazmiy.', 'Основатель алгебры — наш земляк Мухаммад аль-Хорезми.', 'The founder of algebra is our countryman Muhammad al-Khwarizmi.')
    ] }
  ] });
})(this);
(function (root) { 'use strict'; var L = root.NMCurriculum.H.L, T = root.NMTheory, P = '2-2';

  // ---------- t12. Soat va minut ----------
  T.add(P, 't12', { sections: [
    { kind: 'intro', h: L('Soat nima deyapti?', 'Что говорят часы?', 'What does the clock say?'), p: [
      L('Ertalab onangiz: «Tur, soat yetti bo‘ldi!» deydi. Maktabda qo‘ng‘iroq soat 8:00 da chalinadi. Multfilm soat 18:30 da boshlanadi. Biz kun bo‘yi vaqtga qarab yashaymiz. Vaqtni bilish uchun esa <b>soatni o‘qiy olish</b> kerak.', 'Утром мама говорит: «Вставай, уже семь часов!» В школе звонок звенит в 8:00. Мультфильм начинается в 18:30. Мы весь день живём по времени. А чтобы знать время, нужно <b>уметь читать часы</b>.', 'In the morning Mum says, “Get up, it’s seven o’clock!” At school the bell rings at 8:00. The cartoon starts at 18:30. We live by time all day long. To know the time, you need to <b>be able to read a clock</b>.'),
      L('Devordagi oddiy soatga qarang. Uning yumaloq yuzida 1 dan 12 gacha raqamlar bor va ikkita strelka aylanib turadi — biri kalta, biri uzun. Ular har xil tezlikda yuradi va har biri o‘z ishini bajaradi.', 'Посмотри на обычные настенные часы. На круглом циферблате цифры от 1 до 12 и две вращающиеся стрелки — короткая и длинная. Они движутся с разной скоростью, и у каждой своя работа.', 'Look at an ordinary wall clock. Its round face has the numbers 1 to 12 and two hands that turn: one short, one long. They move at different speeds and each has its own job.'),
      L('Bu mavzuda soat va minut nima ekanini, strelkalar qanday ishlashini va vaqtni to‘g‘ri aytishni o‘rganamiz. Bu bilim sizga darsga kechikmaslik va kuningizni rejalashtirishda yordam beradi.', 'В этой теме узнаем, что такое час и минута, как работают стрелки и как правильно называть время. Это поможет не опаздывать на уроки и планировать свой день.', 'In this topic we learn what hours and minutes are, how the hands work and how to tell the time correctly. This will help you be on time for lessons and plan your day.')
    ] },
    { kind: 'def', h: L('Soat, minut, strelkalar', 'Час, минута, стрелки', 'Hours, minutes and hands'), p: [
      L('Vaqt birliklari va soat qismlari:', 'Единицы времени и части часов:', 'Units of time and the parts of a clock:')
    ], list: [
      L('<b>Minut</b> — qisqa vaqt. Bir minutda qo‘lingizni 60 marta qarsak chalishingiz mumkin.', '<b>Минута</b> — короткое время. За минуту можно хлопнуть в ладоши около 60 раз.', '<b>Minute</b> — a short time. In one minute you can clap about 60 times.'),
      L('<b>Soat</b> — 60 minut. Bitta dars 45 minut, ya’ni soatdan sal kamroq.', '<b>Час</b> — 60 минут. Один урок длится 45 минут, чуть меньше часа.', '<b>Hour</b> — 60 minutes. One lesson lasts 45 minutes, a little less than an hour.'),
      L('<b>Kalta strelka</b> (soat strelkasi) soatni ko‘rsatadi. U sekin yuradi: bir raqamdan keyingisiga 1 soatda o‘tadi.', '<b>Короткая стрелка</b> (часовая) показывает часы. Она движется медленно: от одной цифры до следующей — за 1 час.', 'The <b>short hand</b> (hour hand) shows the hours. It moves slowly: from one number to the next in 1 hour.'),
      L('<b>Uzun strelka</b> (minut strelkasi) minutlarni ko‘rsatadi. U tez yuradi: to‘liq aylanishi 60 minut.', '<b>Длинная стрелка</b> (минутная) показывает минуты. Она быстрая: полный круг — 60 минут.', 'The <b>long hand</b> (minute hand) shows the minutes. It is fast: one full turn takes 60 minutes.')
    ], after: [
      L('Soat yuzidagi ikki qo‘shni raqam orasida 5 ta mayda bo‘linma bor — har biri 1 minut. Demak, uzun strelka bir raqamdan keyingisiga o‘tsa, <b>5 minut</b> o‘tadi. Shuning uchun minutlarni beshlab sanaymiz: 5, 10, 15, 20…', 'Между двумя соседними цифрами на циферблате 5 маленьких делений — по 1 минуте. Значит, когда длинная стрелка переходит от цифры к цифре, проходит <b>5 минут</b>. Поэтому минуты считаем пятёрками: 5, 10, 15, 20…', 'Between two neighbouring numbers on the clock face there are 5 small marks, each 1 minute. So when the long hand moves from one number to the next, <b>5 minutes</b> pass. That is why we count minutes in fives: 5, 10, 15, 20…'),
      L('Bir sutkada 24 soat bor. Kalta strelka sutkada ikki marta aylanadi: tungi 12 dan kunduzgi 12 gacha va kunduzgi 12 dan tungi 12 gacha.', 'В сутках 24 часа. Короткая стрелка за сутки делает два круга: с полуночи до полудня и с полудня до полуночи.', 'A day has 24 hours. The short hand goes round twice a day: from midnight to noon and from noon to midnight.')
    ] },
    { kind: 'history', h: L('Soatlar tarixi', 'История часов', 'A history of clocks'), p: [
      L('Eng qadimgi soat — <b>quyosh soati</b>. Qadimgi Misrda, 3500 yil oldin, yerga tayoq qadab, uning soyasiga qarab vaqtni bilishgan. Lekin bulutli kunda va kechasi bu soat ishlamagan!', 'Самые древние часы — <b>солнечные</b>. В Древнем Египте, 3500 лет назад, втыкали в землю палку и узнавали время по её тени. Но в пасмурный день и ночью такие часы не работали!', 'The oldest clock is the <b>sundial</b>. In Ancient Egypt, 3 500 years ago, people pushed a stick into the ground and told the time by its shadow. But on a cloudy day or at night it didn’t work!'),
      L('Shuning uchun <b>suv soati</b> va <b>qum soati</b> o‘ylab topilgan: idishdan suv yoki qum bir tekis oqib, vaqtni o‘lchagan. Soatni 60 minutga, minutni 60 sekundga bo‘lish odati qadimgi <b>Bobil</b>dan kelgan — ular 60 lik sanoq tizimidan foydalangan.', 'Поэтому придумали <b>водяные</b> и <b>песочные часы</b>: вода или песок равномерно вытекали и отмеряли время. Привычка делить час на 60 минут, а минуту на 60 секунд пришла из древнего <b>Вавилона</b> — там пользовались счётом шестидесятками.', 'So people invented <b>water clocks</b> and <b>hourglasses</b>: water or sand flowed out evenly and measured time. Splitting an hour into 60 minutes and a minute into 60 seconds comes from ancient <b>Babylon</b>, where people counted in sixties.'),
      L('Buyuk olim <b>Beruniy</b> vaqtni o‘lchash va taqvimlar haqida katta kitob yozgan. U turli xalqlarning kunlarni, oylarni va yillarni qanday hisoblashini taqqoslagan. Mirzo Ulug‘bek esa Samarqanddagi rasadxonasida yulduzlarni kuzatib, yil uzunligini juda aniq hisoblagan.', 'Великий учёный <b>Беруни</b> написал большую книгу об измерении времени и календарях. Он сравнил, как разные народы считают дни, месяцы и годы. А Мирзо Улугбек в своей обсерватории в Самарканде, наблюдая звёзды, очень точно вычислил длину года.', 'The great scholar <b>Biruni</b> wrote a big book on measuring time and on calendars, comparing how different peoples counted days, months and years. Mirzo Ulugbek, watching the stars from his observatory in Samarkand, calculated the length of the year very precisely.')
    ] },
    { kind: 'rule', h: L('Vaqtni o‘qish qoidasi', 'Правило чтения времени', 'The rule for reading the time'), p: [
      L('Soatni o‘qish uchun ikkita savolga javob beramiz:', 'Чтобы прочитать часы, отвечаем на два вопроса:', 'To read a clock we answer two questions:')
    ], list: [
      L('<b>Kalta strelka qaysi raqamda yoki qaysi raqamdan o‘tgan?</b> Bu — soat.', '<b>На какой цифре короткая стрелка или какую цифру она прошла?</b> Это — часы.', '<b>Which number is the short hand on, or which has it just passed?</b> That is the hour.'),
      L('<b>Uzun strelka qayerda?</b> Raqamni 5 ga ko‘paytiring (beshlab sanang) — bu minutlar.', '<b>Где длинная стрелка?</b> Посчитай пятёрками до неё — это минуты.', '<b>Where is the long hand?</b> Count in fives up to it: that is the minutes.')
    ], after: [
      L('Uzun strelka 12 da — <b>butun soat</b>: 3:00, «soat uch». Uzun strelka 6 da — <b>yarim</b>: 3:30, «uch yarim». Uzun strelka 3 da — 15 minut (chorak), 9 da — 45 minut.', 'Длинная стрелка на 12 — <b>ровно</b>: 3:00, «три часа». На 6 — <b>половина</b>: 3:30, «половина четвёртого». На 3 — 15 минут (четверть), на 9 — 45 минут.', 'Long hand on 12: <b>o’clock</b>, 3:00, “three o’clock”. On 6: <b>half past</b>, 3:30. On 3: 15 minutes (a quarter past); on 9: 45 minutes.'),
      L('Asosiy bog‘lanishlar: <b>1 soat = 60 minut</b>, <b>yarim soat = 30 minut</b>, <b>chorak soat = 15 minut</b>.', 'Главные связи: <b>1 час = 60 минут</b>, <b>полчаса = 30 минут</b>, <b>четверть часа = 15 минут</b>.', 'Key facts: <b>1 hour = 60 minutes</b>, <b>half an hour = 30 minutes</b>, <b>a quarter of an hour = 15 minutes</b>.')
    ] },
    { kind: 'steps', h: L('Qadamma-qadam: soatni o‘qiymiz', 'Шаг за шагом: читаем часы', 'Step by step: reading a clock'), p: [
      L('Soatda kalta strelka 4 dan sal o‘tgan, uzun strelka 4 da turibdi.', 'На часах короткая стрелка чуть дальше 4, длинная стоит на 4.', 'On the clock the short hand is just past 4 and the long hand is on 4.')
    ], list: [
      L('1-qadam. Kalta strelkaga qarang: u 4 dan o‘tgan, lekin 5 ga yetmagan. Demak, soat — 4.', 'Шаг 1. Смотри на короткую стрелку: она прошла 4, но не дошла до 5. Значит, часов — 4.', 'Step 1. Look at the short hand: it has passed 4 but not reached 5. So the hour is 4.'),
      L('2-qadam. Uzun strelkaga qarang: u 4 da. Beshlab sanaymiz: 5, 10, 15, 20. Demak, 20 minut.', 'Шаг 2. Смотри на длинную стрелку: она на 4. Считаем пятёрками: 5, 10, 15, 20. Значит, 20 минут.', 'Step 2. Look at the long hand: it is on 4. Count in fives: 5, 10, 15, 20. So 20 minutes.'),
      L('3-qadam. Birlashtiring: <b>4:20</b>, «to‘rtdan yigirma minut o‘tdi».', 'Шаг 3. Соедини: <b>4:20</b>, «двадцать минут пятого».', 'Step 3. Put it together: <b>4:20</b>, “twenty past four”.'),
      L('4-qadam. Kun vaqtini o‘ylang: kunduzimi yoki ertalabmi? Kunduzi bo‘lsa — 16:20.', 'Шаг 4. Подумай о времени суток: день или утро? Если день — 16:20.', 'Step 4. Think about the time of day: is it morning or afternoon? In the afternoon it is 16:20.')
    ], after: [
      L('Elektron soatlarda vaqt raqamlar bilan yoziladi: ikki nuqtadan oldin — soat, keyin — minut. 07:45 — yetti soat qirq besh minut.', 'На электронных часах время пишут цифрами: до двоеточия — часы, после — минуты. 07:45 — семь часов сорок пять минут.', 'Digital clocks show the time in numbers: hours before the colon, minutes after. 07:45 is seven forty-five.')
    ] },
    { kind: 'example', h: L('Yechilgan namunalar', 'Разобранные примеры', 'Worked examples'), p: [
      L('Avval kalta, keyin uzun strelkaga qarang.', 'Сначала смотри на короткую стрелку, потом на длинную.', 'Look at the short hand first, then the long one.')
    ], ex: [
      { q: L('Kalta strelka 9 da, uzun strelka 12 da. Soat necha?', 'Короткая стрелка на 9, длинная на 12. Который час?', 'Short hand on 9, long hand on 12. What time is it?'), s: L('Uzun strelka 12 da — butun soat. Javob: <b>9:00</b>, soat to‘qqiz.', 'Длинная на 12 — ровно. Ответ: <b>9:00</b>, девять часов.', 'Long hand on 12 means o’clock. Answer: <b>9:00</b>, nine o’clock.') },
      { q: L('Kalta strelka 2 va 3 orasida, uzun strelka 6 da. Soat necha?', 'Короткая между 2 и 3, длинная на 6. Который час?', 'Short hand between 2 and 3, long hand on 6. What time is it?'), s: L('Soat 2, uzun strelka 6 da — 30 minut. Javob: <b>2:30</b>, ikki yarim.', 'Часов 2, длинная на 6 — 30 минут. Ответ: <b>2:30</b>, половина третьего.', 'The hour is 2; the long hand on 6 means 30 minutes. Answer: <b>2:30</b>, half past two.') },
      { q: L('Uzun strelka 9 da, kalta strelka 7 dan o‘tgan. Soat necha?', 'Длинная на 9, короткая прошла 7. Который час?', 'Long hand on 9, short hand just past 7. What time is it?'), s: L('9 × 5: beshlab sanaymiz — 45 minut. Javob: <b>7:45</b>.', 'Считаем пятёрками до 9 — 45 минут. Ответ: <b>7:45</b>.', 'Count in fives to 9: 45 minutes. Answer: <b>7:45</b>.') },
      { q: L('2 soat necha minut?', 'Сколько минут в 2 часах?', 'How many minutes are in 2 hours?'), s: L('1 soat = 60 minut. 60 + 60 = <b>120 minut</b>.', '1 час = 60 минут. 60 + 60 = <b>120 минут</b>.', '1 hour = 60 minutes. 60 + 60 = <b>120 minutes</b>.') },
      { q: L('Qaysi uzoq: 1 soat yoki 50 minut?', 'Что дольше: 1 час или 50 минут?', 'Which is longer: 1 hour or 50 minutes?'), s: L('1 soat = 60 minut. 60 > 50. Javob: <b>1 soat uzoqroq</b>, 10 minutga.', '1 час = 60 минут. 60 > 50. Ответ: <b>1 час дольше</b>, на 10 минут.', '1 hour = 60 minutes. 60 > 50. Answer: <b>1 hour is longer</b>, by 10 minutes.') }
    ] },
    { kind: 'table', h: L('Uzun strelka va minutlar', 'Длинная стрелка и минуты', 'The long hand and the minutes'), p: [
      L('Uzun strelka qaysi raqamda tursa, necha minut bo‘ladi:', 'Сколько минут, когда длинная стрелка стоит на цифре:', 'How many minutes when the long hand points at each number:')
    ], table: { head: [L('Raqam', 'Цифра', 'Number'), L('Minut', 'Минуты', 'Minutes'), L('Raqam', 'Цифра', 'Number'), L('Minut', 'Минуты', 'Minutes')], rows: [
      ['1', '5', '7', '35'],
      ['2', '10', '8', '40'],
      [L('3 (chorak)', '3 (четверть)', '3 (quarter)'), '15', '9', '45'],
      ['4', '20', '10', '50'],
      ['5', '25', '11', '55'],
      [L('6 (yarim)', '6 (половина)', '6 (half)'), '30', '12', '0 / 60']
    ] }, after: [
      L('Bu aslida 5 ga ko‘paytirish jadvali! Beshlab sanashni bilsangiz, soatni juda tez o‘qiysiz.', 'Это на самом деле таблица умножения на 5! Умеешь считать пятёрками — будешь читать часы очень быстро.', 'This is really the 5 times table! If you can count in fives, you can read a clock very quickly.')
    ] },
    { kind: 'mistake', h: L('Tipik xatolar', 'Типичные ошибки', 'Common mistakes'), p: [
      L('Soatni o‘qishda bolalar ko‘pincha shunday xato qiladi:', 'Читая часы, дети часто ошибаются так:', 'Children often make these mistakes when reading a clock:')
    ], list: [
      L('<b>Strelkalarni adashtirish.</b> Kalta — soat, uzun — minut. Eslab qolish: «uzun yo‘l — ko‘p minut».', '<b>Путать стрелки.</b> Короткая — часы, длинная — минуты. Запомни: «длинный путь — много минут».', '<b>Mixing up the hands.</b> Short is hours, long is minutes. Remember: “long hand, lots of minutes”.'),
      L('<b>Raqamni minut deb o‘qish.</b> Uzun strelka 4 da bo‘lsa, bu 4 minut emas, 20 minut! Beshlab sanang.', '<b>Читать цифру как минуты.</b> Длинная стрелка на 4 — это не 4 минуты, а 20! Считай пятёрками.', '<b>Reading the number as minutes.</b> Long hand on 4 is not 4 minutes but 20! Count in fives.'),
      L('<b>Keyingi soatni aytish.</b> Kalta strelka 7 va 8 orasida bo‘lsa, hali 7 soat. 8 ga yetganda — 8 soat.', '<b>Называть следующий час.</b> Если короткая между 7 и 8, это ещё 7 часов. 8 будет, когда дойдёт до 8.', '<b>Saying the next hour.</b> If the short hand is between 7 and 8, it is still 7. It is 8 when it reaches 8.'),
      L('<b>1 soat = 100 minut deb o‘ylash.</b> Yo‘q! Vaqt 10 lab emas, 60 lab hisoblanadi: 1 soat = 60 minut.', '<b>Думать, что 1 час = 100 минут.</b> Нет! Время считают не десятками, а шестидесятками: 1 час = 60 минут.', '<b>Thinking 1 hour = 100 minutes.</b> No! Time counts in sixties, not tens: 1 hour = 60 minutes.')
    ] },
    { kind: 'life', h: L('Hayotda soat', 'Часы в жизни', 'Clocks in everyday life'), p: [
      L('<b>Maktabda.</b> Dars 45 minut, tanaffus 10 minut. Qo‘ng‘iroq jadvalini bilish darsga kechikmaslikka yordam beradi.', '<b>В школе.</b> Урок — 45 минут, перемена — 10 минут. Знание расписания звонков помогает не опаздывать.', '<b>At school.</b> A lesson is 45 minutes and a break 10 minutes. Knowing the bell times helps you not to be late.'),
      L('<b>Uyda.</b> Kun tartibi: 7:00 da turish, 7:30 da nonushta, 21:00 da uxlash. Bolalarga kuniga taxminan 10 soat uxlash kerak.', '<b>Дома.</b> Режим дня: подъём в 7:00, завтрак в 7:30, сон в 21:00. Детям нужно спать около 10 часов в сутки.', '<b>At home.</b> A daily routine: up at 7:00, breakfast at 7:30, bed at 21:00. Children need about 10 hours of sleep a day.'),
      L('<b>Transportda.</b> Poyezd va samolyot jadvali minutgacha aniq: «Toshkent — Samarqand poyezdi 8:00 da jo‘naydi». Bir minut kechiksangiz — poyezd ketib qoladi!', '<b>В транспорте.</b> Расписание поездов и самолётов точно до минуты: «Поезд Ташкент — Самарканд отправляется в 8:00». Опоздаешь на минуту — поезд уйдёт!', '<b>In transport.</b> Train and plane timetables are exact to the minute: “The Tashkent to Samarkand train leaves at 8:00.” Be a minute late and the train is gone!'),
      L('<b>Oshxonada.</b> Tuxum 10 minut qaynatiladi, pirog 40 minut pishadi. Taymer — bu ham soat!', '<b>На кухне.</b> Яйцо варят 10 минут, пирог печётся 40 минут. Таймер — это тоже часы!', '<b>In the kitchen.</b> An egg boils for 10 minutes and a pie bakes for 40. A timer is a clock too!'),
      L('<b>Sportda.</b> Futbol o‘yinining har bir bo‘limi 45 minut davom etadi. Hakam qo‘lidagi soatga qarab o‘yinni boshlaydi va tugatadi. Yuguruvchilar va suzuvchilar esa natijani minut va sekundlarda o‘lchaydi — ba’zan g‘olibni bir sekundning ulushi hal qiladi! Vaqtni bilish har bir sportchi uchun juda muhim.', '<b>В спорте.</b> Каждый тайм футбольного матча длится 45 минут. Судья начинает и заканчивает игру, глядя на часы. А бегуны и пловцы измеряют результат в минутах и секундах — иногда победителя решает доля секунды! Знать время очень важно каждому спортсмену.', '<b>In sport.</b> Each half of a football match lasts 45 minutes. The referee starts and ends the game by watching the clock. Runners and swimmers measure their results in minutes and seconds, and sometimes a fraction of a second decides the winner! Knowing the time matters to every athlete.')
    ] },
    { kind: 'fact', h: L('Qiziqarli faktlar', 'Интересные факты', 'Fun facts'), list: [
      L('Londondagi mashhur «Big Ben» soatining minut strelkasi uzunligi taxminan 4 metr — ikki katta odamning bo‘yidan ham uzun!', 'Минутная стрелка знаменитых лондонских часов «Биг-Бен» длиной около 4 метров — больше роста двух взрослых!', 'The minute hand of London’s famous Big Ben clock is about 4 metres long, taller than two grown-ups!'),
      L('Toshkentdagi Kurantlar 1947-yilda qurilgan va hozir ham shaharning ramzlaridan biri.', 'Ташкентские Куранты построены в 1947 году и до сих пор остаются одним из символов города.', 'The Tashkent Chimes clock tower was built in 1947 and is still one of the city’s symbols.'),
      L('Yurak bir minutda taxminan 70–100 marta uradi. Bir soatda — 4 mingdan ko‘proq!', 'Сердце бьётся примерно 70–100 раз в минуту. За час — больше 4 тысяч раз!', 'Your heart beats about 70–100 times a minute: more than 4 000 times an hour!'),
      L('Eng aniq atom soatlari millionlab yil davomida bir sekund ham adashmaydi.', 'Самые точные атомные часы не ошибутся даже на секунду за миллионы лет.', 'The most accurate atomic clocks would not lose even a second in millions of years.')
    ] },
    { kind: 'practice', h: L('O‘ylab ko‘ring', 'Подумай', 'Think about it'), p: [
      L('Uydagi soatga qarab mashq qiling.', 'Потренируйся по часам дома.', 'Practise with a clock at home.')
    ], list: [
      L('Uzun strelka 12 da, kalta strelka 6 da. Soat necha?', 'Длинная на 12, короткая на 6. Который час?', 'Long hand on 12, short hand on 6. What time is it?'),
      L('Uzun strelka 3 da, kalta strelka 10 dan o‘tgan. Soat necha?', 'Длинная на 3, короткая прошла 10. Который час?', 'Long hand on 3, short hand past 10. What time is it?'),
      L('Yarim soat + chorak soat = necha minut?', 'Полчаса + четверть часа = сколько минут?', 'Half an hour + a quarter of an hour = how many minutes?'),
      L('Bir minutda necha marta sakray olasiz? Sinab ko‘ring!', 'Сколько раз ты подпрыгнешь за минуту? Проверь!', 'How many times can you jump in a minute? Try it!')
    ], after: [
      L('Javoblar: 6:00; 10:15; 30 + 15 = 45 minut.', 'Ответы: 6:00; 10:15; 30 + 15 = 45 минут.', 'Answers: 6:00; 10:15; 30 + 15 = 45 minutes.')
    ] },
    { kind: 'summary', h: L('Xulosa', 'Итог', 'Summary'), list: [
      L('<b>1 soat = 60 minut</b>; yarim soat = 30 minut; chorak soat = 15 minut.', '<b>1 час = 60 минут</b>; полчаса = 30 минут; четверть часа = 15 минут.', '<b>1 hour = 60 minutes</b>; half an hour = 30 minutes; a quarter of an hour = 15 minutes.'),
      L('Kalta strelka — soat, uzun strelka — minut.', 'Короткая стрелка — часы, длинная — минуты.', 'Short hand: hours. Long hand: minutes.'),
      L('Ikki raqam orasida 5 minut — minutlarni beshlab sanaymiz.', 'Между двумя цифрами 5 минут — минуты считаем пятёрками.', 'Between two numbers is 5 minutes, so count minutes in fives.'),
      L('Uzun strelka 12 da — butun soat, 6 da — yarim.', 'Длинная на 12 — ровно, на 6 — половина.', 'Long hand on 12: o’clock; on 6: half past.'),
      L('Sutkada 24 soat bor.', 'В сутках 24 часа.', 'A day has 24 hours.'),
      L('Soatni 60 minutga bo‘lish qadimgi Bobildan kelgan.', 'Деление часа на 60 минут пришло из древнего Вавилона.', 'Splitting the hour into 60 minutes comes from ancient Babylon.')
    ] }
  ] });

  // ---------- t13. Soat va minutlar bilan hisoblash. Masalalar ----------
  T.add(P, 't13', { sections: [
    { kind: 'intro', h: L('Vaqtni hisoblaymiz', 'Считаем время', 'Calculating with time'), p: [
      L('Futbol o‘yini 16:00 da boshlandi va 1 soat 30 minut davom etdi. U qachon tugadi? Avtobus yo‘lda 2 soat yurdi — bu necha minut? Siz uy vazifasini 25 minut, kitob o‘qishni 35 minut bajardingiz — jami qancha vaqt? Bunday savollar uchun vaqt bilan <b>hisoblash</b>ni bilish kerak.', 'Футбольный матч начался в 16:00 и длился 1 час 30 минут. Когда он закончился? Автобус ехал 2 часа — это сколько минут? Ты делал уроки 25 минут и читал 35 минут — сколько всего? Для таких вопросов нужно уметь <b>считать</b> время.', 'A football match started at 16:00 and lasted 1 hour 30 minutes. When did it end? A bus travelled for 2 hours: how many minutes is that? You did homework for 25 minutes and read for 35: how long in all? For such questions you need to <b>calculate</b> with time.'),
      L('Vaqtni qo‘shish va ayirish oddiy sonlarnikiga o‘xshaydi, lekin bitta muhim farq bor: 60 minut to‘lsa, u 1 soatga aylanadi, 100 da emas! Shuning uchun ehtiyot bo‘lish kerak.', 'Складывать и вычитать время похоже на обычные числа, но есть важное отличие: когда набирается 60 минут, они превращаются в 1 час, а не в 100! Поэтому нужна осторожность.', 'Adding and subtracting time is like ordinary numbers, with one important difference: when you reach 60 minutes it becomes 1 hour, not 100! So you must be careful.'),
      L('Bu mavzuda soat va minutlarni bir-biriga aylantirishni, vaqt oralig‘ini topishni, tugash va boshlanish vaqtini hisoblashni hamda mantiqiy masalalarni yechishni o‘rganamiz.', 'В этой теме научимся переводить часы в минуты и обратно, находить промежуток времени, вычислять время начала и конца и решать логические задачи.', 'In this topic we learn to convert between hours and minutes, find time intervals, work out start and end times and solve logic puzzles.')
    ] },
    { kind: 'def', h: L('Vaqt oralig‘i', 'Промежуток времени', 'Time intervals'), p: [
      L('Vaqt haqidagi masalalarda uchta kattalik bor:', 'В задачах о времени есть три величины:', 'Time problems involve three quantities:')
    ], list: [
      L('<b>Boshlanish vaqti</b> — voqea qachon boshlandi (masalan, 8:00).', '<b>Время начала</b> — когда событие началось (например, 8:00).', '<b>Start time</b> — when something began (for example, 8:00).'),
      L('<b>Davomiylik</b> yoki <b>vaqt oralig‘i</b> — qancha davom etdi (45 minut).', '<b>Продолжительность</b> или <b>промежуток</b> — сколько длилось (45 минут).', '<b>Duration</b> or <b>interval</b> — how long it lasted (45 minutes).'),
      L('<b>Tugash vaqti</b> — qachon tugadi (8:45).', '<b>Время окончания</b> — когда закончилось (8:45).', '<b>End time</b> — when it finished (8:45).')
    ], after: [
      L('Ular orasidagi bog‘lanish: <b>boshlanish + davomiylik = tugash</b>. Ikkitasini bilsak, uchinchisini topamiz — xuddi qo‘shiluvchilar va yig‘indi kabi! Tugash − boshlanish = davomiylik; tugash − davomiylik = boshlanish.', 'Связь между ними: <b>начало + продолжительность = конец</b>. Зная две, найдём третью — как слагаемые и сумму! Конец − начало = продолжительность; конец − продолжительность = начало.', 'They are linked: <b>start + duration = end</b>. Knowing two, we find the third, just like addends and a sum! End − start = duration; end − duration = start.'),
      L('Aralash yozuv: 1 soat 20 minut = 60 + 20 = 80 minut. Teskarisi: 80 minut = 1 soat 20 minut.', 'Составная запись: 1 ч 20 мин = 60 + 20 = 80 мин. Обратно: 80 мин = 1 ч 20 мин.', 'Mixed form: 1 h 20 min = 60 + 20 = 80 min. The other way: 80 min = 1 h 20 min.')
    ] },
    { kind: 'history', h: L('Taqvimlar va kun tartibi', 'Календари и распорядок', 'Calendars and timetables'), p: [
      L('Qadimgi odamlar vaqtni Quyosh, Oy va yulduzlar bo‘yicha hisoblashgan. Bir kun — Yerning o‘z o‘qi atrofida bir marta aylanishi, bir yil — Quyosh atrofida bir marta aylanishi. Qadimgi misrliklar yilni 365 kunga bo‘lishgan.', 'Древние люди считали время по Солнцу, Луне и звёздам. Сутки — один оборот Земли вокруг своей оси, год — один оборот вокруг Солнца. Древние египтяне делили год на 365 дней.', 'People long ago measured time by the Sun, the Moon and the stars. A day is one turn of the Earth on its axis; a year is one trip around the Sun. The ancient Egyptians split the year into 365 days.'),
      L('<b>Beruniy</b> «Qadimgi xalqlardan qolgan yodgorliklar» kitobida forslar, yunonlar, yahudiylar, arablar, xorazmliklar va boshqa xalqlarning taqvimlari va bayramlarini taqqoslab yozgan. U bir taqvimdagi sanani boshqasiga aylantirish usullarini ko‘rsatgan — bu juda murakkab hisob edi!', '<b>Беруни</b> в книге «Памятники минувших поколений» сравнил календари и праздники персов, греков, евреев, арабов, хорезмийцев и других народов. Он показал, как переводить дату из одного календаря в другой — это был очень сложный расчёт!', 'In his book “The Remaining Signs of Past Centuries” <b>Biruni</b> compared the calendars and festivals of the Persians, Greeks, Jews, Arabs, Khorezmians and other peoples. He showed how to convert a date from one calendar to another, a very complicated calculation!'),
      L('<b>Mirzo Ulug‘bek</b> rasadxonasida yil uzunligini 365 kun 6 soat 10 minut deb hisoblagan. Bu hozirgi aniq qiymatdan bir minutdan sal ko‘proq farq qiladi — 600 yil oldin, teleskopsiz!', '<b>Мирзо Улугбек</b> в своей обсерватории вычислил длину года: 365 дней 6 часов 10 минут. Это отличается от современного значения чуть больше чем на минуту — 600 лет назад, без телескопа!', 'At his observatory <b>Mirzo Ulugbek</b> calculated the year as 365 days 6 hours 10 minutes. That is only a little over a minute off today’s value, 600 years ago and without a telescope!')
    ] },
    { kind: 'rule', h: L('Vaqt bilan hisoblash qoidalari', 'Правила вычислений со временем', 'Rules for calculating with time'), p: [
      L('Uchta asosiy qoida:', 'Три главных правила:', 'Three main rules:')
    ], list: [
      L('<b>Soatni minutga:</b> soatlar sonini 60 ga ko‘paytiramiz va minutlarni qo‘shamiz. 2 soat 15 min = 60 + 60 + 15 = 135 min.', '<b>Часы в минуты:</b> каждый час — 60 минут, прибавляем минуты. 2 ч 15 мин = 60 + 60 + 15 = 135 мин.', '<b>Hours to minutes:</b> each hour is 60 minutes, then add the minutes. 2 h 15 min = 60 + 60 + 15 = 135 min.'),
      L('<b>Minutni soatga:</b> 60 minutlik to‘liq bo‘laklarni ajratamiz. 100 min = 60 + 40 = 1 soat 40 min.', '<b>Минуты в часы:</b> выделяем полные куски по 60 минут. 100 мин = 60 + 40 = 1 ч 40 мин.', '<b>Minutes to hours:</b> take out whole blocks of 60 minutes. 100 min = 60 + 40 = 1 h 40 min.'),
      L('<b>Vaqt qo‘shish:</b> minutlarni minutlarga, soatlarni soatlarga qo‘shamiz. Minutlar 60 yoki ko‘p bo‘lsa, 60 minutni 1 soatga aylantiramiz. 8:40 + 30 min = 8 soat 70 min = <b>9:10</b>.', '<b>Сложение времени:</b> минуты с минутами, часы с часами. Если минут 60 или больше, 60 минут превращаем в 1 час. 8:40 + 30 мин = 8 ч 70 мин = <b>9:10</b>.', '<b>Adding time:</b> minutes to minutes, hours to hours. If the minutes reach 60 or more, turn 60 minutes into 1 hour. 8:40 + 30 min = 8 h 70 min = <b>9:10</b>.')
    ], after: [
      L('Qulay usul: avval butun soatgacha to‘ldiramiz. 8:40 dan 9:00 gacha — 20 minut, 30 minutdan yana 10 minut qoldi → 9:10. Bu usul xatoni kamaytiradi.', 'Удобный способ: сначала дополняем до целого часа. От 8:40 до 9:00 — 20 минут, из 30 осталось ещё 10 → 9:10. Так ошибок меньше.', 'An easy method: first fill up to the whole hour. From 8:40 to 9:00 is 20 minutes, leaving 10 more of the 30 → 9:10. This cuts down mistakes.')
    ] },
    { kind: 'steps', h: L('Qadamma-qadam: vaqt oralig‘ini topish', 'Шаг за шагом: находим промежуток', 'Step by step: finding an interval'), p: [
      L('Kino 15:20 da boshlanib, 17:05 da tugadi. U qancha davom etdi?', 'Фильм начался в 15:20 и закончился в 17:05. Сколько он длился?', 'A film started at 15:20 and ended at 17:05. How long did it last?')
    ], list: [
      L('1-qadam. Boshlanishdan keyingi butun soatgacha: 15:20 → 16:00 — 40 minut.', 'Шаг 1. От начала до ближайшего целого часа: 15:20 → 16:00 — 40 минут.', 'Step 1. From the start to the next whole hour: 15:20 → 16:00 is 40 minutes.'),
      L('2-qadam. Butun soatlar: 16:00 → 17:00 — 1 soat.', 'Шаг 2. Целые часы: 16:00 → 17:00 — 1 час.', 'Step 2. Whole hours: 16:00 → 17:00 is 1 hour.'),
      L('3-qadam. Oxirgi qism: 17:00 → 17:05 — 5 minut.', 'Шаг 3. Последний кусок: 17:00 → 17:05 — 5 минут.', 'Step 3. The last piece: 17:00 → 17:05 is 5 minutes.'),
      L('4-qadam. Qo‘shamiz: 40 min + 1 soat + 5 min = 1 soat 45 min = 105 minut.', 'Шаг 4. Складываем: 40 мин + 1 ч + 5 мин = 1 ч 45 мин = 105 минут.', 'Step 4. Add them: 40 min + 1 h + 5 min = 1 h 45 min = 105 minutes.')
    ], after: [
      L('Bu «ko‘prik» usuli: butun soatlar orqali sakrab o‘tamiz. Soat yuzida ham shunday sanash mumkin.', 'Это способ «мостиков»: перескакиваем через целые часы. Так же можно считать и по циферблату.', 'This is the “bridge” method: hop across using whole hours. You can count the same way on a clock face.')
    ] },
    { kind: 'example', h: L('Yechilgan namunalar', 'Разобранные примеры', 'Worked examples'), p: [
      L('Har bir masalada 1 soat = 60 minutni eslang.', 'В каждой задаче помни: 1 час = 60 минут.', 'Remember 1 hour = 60 minutes in every problem.')
    ], ex: [
      { q: L('1 soat 15 min = ? min', '1 ч 15 мин = ? мин', '1 h 15 min = ? min'), s: L('60 + 15 = <b>75 min</b>.', '60 + 15 = <b>75 мин</b>.', '60 + 15 = <b>75 min</b>.') },
      { q: L('Dars 9:00 da boshlanib 40 minut davom etdi. Qachon tugadi?', 'Урок начался в 9:00 и длился 40 минут. Когда закончился?', 'A lesson started at 9:00 and lasted 40 minutes. When did it end?'), s: L('9:00 + 40 min = <b>9:40</b>.', '9:00 + 40 мин = <b>9:40</b>.', '9:00 + 40 min = <b>9:40</b>.') },
      { q: L('120 minut = ? soat', '120 минут = ? ч', '120 minutes = ? hours'), s: L('60 + 60 = 120, demak <b>2 soat</b>.', '60 + 60 = 120, значит <b>2 часа</b>.', '60 + 60 = 120, so <b>2 hours</b>.') },
      { q: L('Futbol o‘yini 16:00 da boshlanib, 1 soat 30 min davom etdi. Qachon tugadi?', 'Матч начался в 16:00 и длился 1 ч 30 мин. Когда закончился?', 'A match started at 16:00 and lasted 1 h 30 min. When did it end?'), s: L('16:00 + 1 soat = 17:00, + 30 min = <b>17:30</b>.', '16:00 + 1 ч = 17:00, + 30 мин = <b>17:30</b>.', '16:00 + 1 h = 17:00, + 30 min = <b>17:30</b>.') },
      { q: L('Poyezd 10:50 da yetib keldi. Yo‘lda 2 soat 20 min yurgan. Qachon jo‘nagan?', 'Поезд прибыл в 10:50. В пути был 2 ч 20 мин. Когда отправился?', 'A train arrived at 10:50 after 2 h 20 min on the way. When did it leave?'), s: L('Teskari amal — ayiramiz: 10:50 − 2 soat = 8:50, − 20 min = <b>8:30</b>. Tekshiruv: 8:30 + 2 soat 20 min = 10:50 ✓.', 'Обратное действие — вычитаем: 10:50 − 2 ч = 8:50, − 20 мин = <b>8:30</b>. Проверка: 8:30 + 2 ч 20 мин = 10:50 ✓.', 'Use the inverse, subtract: 10:50 − 2 h = 8:50, − 20 min = <b>8:30</b>. Check: 8:30 + 2 h 20 min = 10:50 ✓.') }
    ] },
    { kind: 'table', h: L('Maktab kuni jadvali', 'Расписание школьного дня', 'A school-day timetable'), p: [
      L('Dars 45 minut, tanaffus 10 minut. Jadvalni tekshirib ko‘ring:', 'Урок — 45 минут, перемена — 10 минут. Проверь расписание:', 'Lessons are 45 minutes and breaks 10 minutes. Check the timetable:')
    ], table: { head: [L('Dars', 'Урок', 'Lesson'), L('Boshlanish', 'Начало', 'Start'), L('Tugash', 'Конец', 'End'), L('Tanaffus', 'Перемена', 'Break')], rows: [
      ['1', '8:00', '8:45', '10 min'],
      ['2', '8:55', '9:40', '10 min'],
      ['3', '9:50', '10:35', '20 min'],
      ['4', '10:55', '11:40', '10 min'],
      ['5', '11:50', '12:35', '—']
    ] }, after: [
      L('Savol: 1-dars boshlanishidan 5-dars tugashigacha qancha vaqt o‘tadi? 8:00 dan 12:35 gacha — 4 soat 35 minut.', 'Вопрос: сколько времени проходит от начала 1-го урока до конца 5-го? С 8:00 до 12:35 — 4 часа 35 минут.', 'Question: how long is it from the start of lesson 1 to the end of lesson 5? From 8:00 to 12:35 is 4 hours 35 minutes.')
    ] },
    { kind: 'mistake', h: L('Tipik xatolar', 'Типичные ошибки', 'Common mistakes'), p: [
      L('Vaqt bilan hisoblashda eng ko‘p uchraydigan xatolar:', 'Самые частые ошибки при вычислениях со временем:', 'The most common mistakes with time sums:')
    ], list: [
      L('<b>100 lab hisoblash.</b> 8:40 + 30 min = 8:70 — xato! 70 minut = 1 soat 10 minut, demak 9:10.', '<b>Считать сотнями.</b> 8:40 + 30 мин = 8:70 — ошибка! 70 минут = 1 ч 10 мин, значит, 9:10.', '<b>Counting in hundreds.</b> 8:40 + 30 min = 8:70 is wrong! 70 minutes = 1 h 10 min, so 9:10.'),
      L('<b>1 soat 20 min = 120 min deb o‘ylash.</b> Yo‘q: 60 + 20 = 80 minut.', '<b>Думать, что 1 ч 20 мин = 120 мин.</b> Нет: 60 + 20 = 80 минут.', '<b>Thinking 1 h 20 min = 120 min.</b> No: 60 + 20 = 80 minutes.'),
      L('<b>Soat va minutlarni qo‘shib yuborish.</b> 2 soat + 30 min ≠ 32. Javob: 2 soat 30 min yoki 150 min.', '<b>Складывать часы с минутами как числа.</b> 2 ч + 30 мин ≠ 32. Ответ: 2 ч 30 мин или 150 мин.', '<b>Adding hours and minutes as plain numbers.</b> 2 h + 30 min ≠ 32. The answer is 2 h 30 min or 150 min.'),
      L('<b>Vaqt oralig‘ini noto‘g‘ri topish.</b> 9:50 dan 10:10 gacha 60 minut emas, 20 minut. Butun soat orqali «ko‘prik» bilan sanang.', '<b>Неверно находить промежуток.</b> С 9:50 до 10:10 не 60 минут, а 20. Считай через целый час «мостиком».', '<b>Getting intervals wrong.</b> From 9:50 to 10:10 is 20 minutes, not 60. Use the “bridge” through the whole hour.')
    ] },
    { kind: 'life', h: L('Hayotda vaqt hisobi', 'Счёт времени в жизни', 'Time sums in everyday life'), p: [
      L('<b>Sayohatda.</b> Toshkentdan Samarqandgacha tezyurar «Afrosiyob» poyezdi taxminan 2 soat yuradi. 8:00 da jo‘nasa, 10:00 atrofida yetib boradi.', '<b>В путешествии.</b> Скоростной поезд «Афросиаб» идёт от Ташкента до Самарканда около 2 часов. Отправится в 8:00 — прибудет примерно в 10:00.', '<b>Travelling.</b> The high-speed Afrosiyob train takes about 2 hours from Tashkent to Samarkand. Leave at 8:00 and you arrive around 10:00.'),
      L('<b>Oshxonada.</b> Palov tayyorlashga taxminan 1 soat 30 minut kerak. Mehmonlar 19:00 da kelsa, qachon boshlash kerak? 19:00 − 1 soat 30 min = 17:30.', '<b>На кухне.</b> Плов готовится около 1 ч 30 мин. Гости придут в 19:00 — когда начинать? 19:00 − 1 ч 30 мин = 17:30.', '<b>In the kitchen.</b> Plov takes about 1 h 30 min to cook. If guests arrive at 19:00, when should you start? 19:00 − 1 h 30 min = 17:30.'),
      L('<b>Sportda.</b> Futbol o‘yini 2 ta 45 minutlik bo‘limdan iborat, orada 15 minut tanaffus. Jami: 45 + 15 + 45 = 105 minut = 1 soat 45 minut.', '<b>В спорте.</b> Футбольный матч — два тайма по 45 минут и перерыв 15 минут. Всего: 45 + 15 + 45 = 105 минут = 1 ч 45 мин.', '<b>In sport.</b> A football match has two 45-minute halves with a 15-minute break. In all: 45 + 15 + 45 = 105 minutes = 1 h 45 min.'),
      L('<b>Uyda.</b> Ekran oldida o‘tkaziladigan vaqtni hisoblang: 30 min multfilm + 25 min o‘yin = 55 min. Bu deyarli bir soat — dam olib, tashqarida o‘ynash vaqti!', '<b>Дома.</b> Посчитай время у экрана: 30 мин мультиков + 25 мин игр = 55 мин. Это почти час — пора отдохнуть и погулять!', '<b>At home.</b> Add up your screen time: 30 min of cartoons + 25 min of games = 55 min. That is nearly an hour, time for a break and some play outside!')
    ] },
    { kind: 'fact', h: L('Mantiqiy masalalar va faktlar', 'Логические задачи и факты', 'Logic puzzles and facts'), list: [
      L('<b>Topishmoq:</b> 3 ta tuxumni bir vaqtda qaynatish 10 minut oladi. 6 ta tuxumni bir qozonda qaynatish qancha vaqt oladi? Javob: baribir 10 minut — ular birga qaynaydi!', '<b>Загадка:</b> 3 яйца вместе варятся 10 минут. Сколько варятся 6 яиц в одной кастрюле? Ответ: тоже 10 минут — они варятся одновременно!', '<b>Riddle:</b> 3 eggs boiled together take 10 minutes. How long do 6 eggs take in one pot? Answer: still 10 minutes, because they boil at the same time!'),
      L('<b>Topishmoq:</b> Arra bilan yog‘ochni bir marta kesish 5 minut oladi. Yog‘ochni 3 bo‘lakka bo‘lish uchun qancha vaqt kerak? Javob: 10 minut — faqat 2 marta kesish kerak.', '<b>Загадка:</b> Один распил бревна занимает 5 минут. Сколько времени нужно, чтобы распилить бревно на 3 части? Ответ: 10 минут — нужно всего 2 распила.', '<b>Riddle:</b> One saw cut through a log takes 5 minutes. How long to cut the log into 3 pieces? Answer: 10 minutes, since only 2 cuts are needed.'),
      L('Har 4 yilda bir marta fevral 29 kunlik bo‘ladi — bu <b>kabisa yili</b>. U yilda 366 kun bo‘ladi, chunki Yer Quyosh atrofini 365 kun va qariyb 6 soatda aylanadi.', 'Раз в 4 года в феврале 29 дней — это <b>високосный год</b>. В нём 366 дней, потому что Земля облетает Солнце за 365 дней и почти 6 часов.', 'Once every 4 years February has 29 days: a <b>leap year</b>. It has 366 days because the Earth goes round the Sun in 365 days and nearly 6 hours.')
    ] },
    { kind: 'practice', h: L('O‘ylab ko‘ring', 'Подумай', 'Think about it'), p: [
      L('60 minut = 1 soat ekanini unutmang.', 'Помни: 60 минут = 1 час.', 'Remember: 60 minutes = 1 hour.')
    ], list: [
      L('Aylantiring: 3 soat = ? min; 1 soat 45 min = ? min; 90 min = ? soat ? min.', 'Переведи: 3 ч = ? мин; 1 ч 45 мин = ? мин; 90 мин = ? ч ? мин.', 'Convert: 3 h = ? min; 1 h 45 min = ? min; 90 min = ? h ? min.'),
      L('Multfilm 17:40 da boshlanib, 35 minut davom etdi. Qachon tugadi?', 'Мультфильм начался в 17:40 и длился 35 минут. Когда закончился?', 'A cartoon started at 17:40 and lasted 35 minutes. When did it end?'),
      L('Aziz 14:15 da uy vazifasini boshladi va 15:00 da tugatdi. Qancha vaqt ishladi?', 'Азиз начал уроки в 14:15 и закончил в 15:00. Сколько времени он занимался?', 'Aziz started his homework at 14:15 and finished at 15:00. How long did he work?')
    ], after: [
      L('Javoblar: 180 min, 105 min, 1 soat 30 min. Multfilm 18:15 da tugadi (17:40 + 20 = 18:00, + 15 = 18:15). Aziz 45 minut ishladi.', 'Ответы: 180 мин, 105 мин, 1 ч 30 мин. Мультфильм закончился в 18:15 (17:40 + 20 = 18:00, + 15 = 18:15). Азиз занимался 45 минут.', 'Answers: 180 min, 105 min, 1 h 30 min. The cartoon ended at 18:15 (17:40 + 20 = 18:00, + 15 = 18:15). Aziz worked for 45 minutes.')
    ] },
    { kind: 'summary', h: L('Xulosa', 'Итог', 'Summary'), list: [
      L('<b>Boshlanish + davomiylik = tugash</b>; ikkitasini bilsak, uchinchisini topamiz.', '<b>Начало + продолжительность = конец</b>; зная две величины, найдём третью.', '<b>Start + duration = end</b>; knowing two, we can find the third.'),
      L('1 soat 20 min = 80 min; 100 min = 1 soat 40 min.', '1 ч 20 мин = 80 мин; 100 мин = 1 ч 40 мин.', '1 h 20 min = 80 min; 100 min = 1 h 40 min.'),
      L('60 minut to‘lsa — 1 soatga aylantiramiz: 8:40 + 30 min = 9:10.', 'Набралось 60 минут — превращаем в 1 час: 8:40 + 30 мин = 9:10.', 'When 60 minutes build up, turn them into 1 hour: 8:40 + 30 min = 9:10.'),
      L('Vaqt oralig‘ini butun soat orqali «ko‘prik» bilan sanash qulay.', 'Промежуток удобно считать «мостиком» через целый час.', 'Count intervals with a “bridge” through the whole hour.'),
      L('Mantiqiy masalalarda shoshilmang: 6 ta tuxum ham 10 minutda pishadi!', 'В логических задачах не спеши: 6 яиц тоже варятся 10 минут!', 'Don’t rush logic puzzles: 6 eggs still take 10 minutes!'),
      L('Ulug‘bek yil uzunligini 600 yil oldin deyarli aniq hisoblagan.', 'Улугбек почти точно вычислил длину года 600 лет назад.', 'Ulugbek calculated the length of the year almost exactly 600 years ago.')
    ] }
  ] });
})(this);
