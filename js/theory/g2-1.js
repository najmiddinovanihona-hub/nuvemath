// Nuvemath — 2-sinf, I qism nazariyasi. Format: js/theory/GUIDE.md
(function (root) {
  'use strict';
  var L = root.NMCurriculum.H.L, T = root.NMTheory, P = '2-1';

  // ---------- t1. 100 gacha sonlar: takrorlash ----------
  T.add(P, 't1', { sections: [
    { kind: 'intro', h: L('Ikkinchi sinfga xush kelibsiz!', 'Добро пожаловать во второй класс!', 'Welcome to Grade 2!'), p: [
      L('Salom, do‘stim! Yoz tugadi, maktab yana ochildi. Birinchi sinfda biz 100 gacha sanashni, sonlarni yozishni va taqqoslashni o‘rgangan edik. Bugun hammasini eslaymiz, chunki bu bilimlar butun yil davomida kerak bo‘ladi.', 'Привет, друг! Лето закончилось, школа снова открыта. В первом классе мы научились считать до 100, записывать и сравнивать числа. Сегодня всё это вспомним, потому что эти знания понадобятся весь год.', 'Hello, friend! Summer is over and school is open again. In Grade 1 we learned to count to 100, to write numbers and to compare them. Today we will remember all of it, because we will need it all year long.'),
      L('Sonlar hamma joyda: uyingiz raqami, avtobus raqami, do‘kondagi narx, futbol o‘yinidagi hisob. Ko‘chada 47 raqamli uyni topish uchun 47 nima ekanini bilish kerak: 4 ta o‘nlik va 7 ta birlik.', 'Числа повсюду: номер дома, номер автобуса, цена в магазине, счёт в футбольном матче. Чтобы найти на улице дом номер 47, нужно понимать, что такое 47: 4 десятка и 7 единиц.', 'Numbers are everywhere: your house number, the bus number, a price in a shop, the score in a football match. To find house number 47 in a street you need to understand what 47 is: 4 tens and 7 ones.'),
      L('Bu mavzuda biz ikki xonali sonlarning tuzilishini, ularni o‘qish va yozishni, sonlar qatorini va taqqoslashni takrorlaymiz. Tayyormisiz? Boshladik!', 'В этой теме мы повторим, как устроены двузначные числа, как их читать и записывать, вспомним числовой ряд и сравнение. Готовы? Начинаем!', 'In this topic we will review how two-digit numbers are built, how to read and write them, the number line and comparing. Ready? Let’s begin!')
    ] },
    { kind: 'def', h: L('O‘nlik va birlik', 'Десяток и единица', 'Tens and ones'), p: [
      L('Sanash uchun bizda o‘nta raqam bor: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9. Bir xonali sonlar bitta raqam bilan yoziladi. 10 dan boshlab sonlar <b>ikki xonali</b> bo‘ladi — ular ikkita raqamdan iborat.', 'Для счёта у нас есть десять цифр: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9. Однозначные числа записываются одной цифрой. Начиная с 10 числа становятся <b>двузначными</b> — они состоят из двух цифр.', 'We have ten digits for counting: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9. One-digit numbers are written with one digit. From 10 onwards numbers are <b>two-digit</b>: they are made of two digits.'),
      L('Ikki xonali sonda chap tomondagi raqam <b>o‘nliklar</b>ni, o‘ng tomondagi raqam <b>birliklar</b>ni bildiradi. 47 sonida 4 — o‘nliklar xonasi, 7 — birliklar xonasi. Demak, 47 = 40 + 7.', 'В двузначном числе левая цифра показывает <b>десятки</b>, а правая — <b>единицы</b>. В числе 47 цифра 4 стоит в разряде десятков, а 7 — в разряде единиц. Значит, 47 = 40 + 7.', 'In a two-digit number the left digit shows the <b>tens</b> and the right digit shows the <b>ones</b>. In 47 the 4 is in the tens place and the 7 is in the ones place. So 47 = 40 + 7.')
    ], list: [
      L('<b>O‘nlik</b> — o‘nta birlikdan iborat guruh. 10 ta kubchani bog‘lasak, bitta tayoqcha bo‘ladi.', '<b>Десяток</b> — группа из десяти единиц. Свяжем 10 кубиков — получится одна палочка.', 'A <b>ten</b> is a group of ten ones. Tie 10 cubes together and you get one rod.'),
      L('<b>Birlik</b> — alohida turgan bitta narsa. 7 ta kubcha — 7 ta birlik.', '<b>Единица</b> — один отдельный предмет. 7 кубиков — 7 единиц.', 'A <b>one</b> is a single item. 7 cubes are 7 ones.'),
      L('<b>Yaxlit son</b> — birliklari 0 bo‘lgan son: 10, 20, 30, … 90, 100.', '<b>Круглое число</b> — число, у которого единиц 0: 10, 20, 30, … 90, 100.', 'A <b>round number</b> has 0 ones: 10, 20, 30, … 90, 100.'),
      L('<b>100</b> — yuz. Bu uch xonali son: 10 ta o‘nlik yoki 100 ta birlik.', '<b>100</b> — сто. Это трёхзначное число: 10 десятков или 100 единиц.', '<b>100</b> — one hundred. It is a three-digit number: 10 tens or 100 ones.')
    ] },
    { kind: 'history', h: L('Sonlar qanday paydo bo‘lgan?', 'Как появились числа?', 'Where did numbers come from?'), p: [
      L('Juda qadimda odamlar sanash uchun barmoqlaridan foydalangan. Ikki qo‘lda o‘nta barmoq bor — shuning uchun biz o‘nlik bilan sanaymiz! O‘nta barmoq tugagach, odamlar tosh qo‘yishgan yoki tayoqqa chiziq tortishgan. Shunday qilib «o‘nlik» tushunchasi paydo bo‘lgan.', 'В глубокой древности люди считали на пальцах. На двух руках десять пальцев — вот почему мы считаем десятками! Когда пальцы заканчивались, люди откладывали камешек или делали зарубку на палке. Так появилось понятие «десяток».', 'Long ago people counted on their fingers. Two hands have ten fingers — that is why we count in tens! When the fingers ran out, people put down a pebble or cut a notch in a stick. That is how the idea of a “ten” was born.'),
      L('Biz ishlatadigan raqamlar — 0, 1, 2 … 9 — qadimgi Hindistonda o‘ylab topilgan. Ularni dunyoga mashhur qilgan olim — vatandoshimiz <b>Muhammad al-Xorazmiy</b>. U taxminan 1200 yil oldin Xorazmda tug‘ilgan va Bag‘dodda ishlagan. Uning hind raqamlari haqidagi kitobi Yevropaga yetib borgan, va olimning nomidan «<b>algoritm</b>» so‘zi kelib chiqqan — bu «qadamma-qadam qoida» degani.', 'Цифры, которыми мы пользуемся, — 0, 1, 2 … 9 — придумали в Древней Индии. А прославил их на весь мир наш земляк <b>Мухаммад аль-Хорезми</b>. Он родился около 1200 лет назад в Хорезме и работал в Багдаде. Его книга об индийских цифрах дошла до Европы, а от имени учёного произошло слово «<b>алгоритм</b>» — «правило по шагам».', 'The digits we use — 0, 1, 2 … 9 — were invented in ancient India. The scholar who made them famous around the world was our countryman <b>Muhammad al-Khwarizmi</b>. He was born about 1 200 years ago in Khorezm and worked in Baghdad. His book on Indian numerals reached Europe, and the word “<b>algorithm</b>”, meaning a step-by-step rule, comes from his name.'),
      L('Qadimgi Rim raqamlarida o‘nlik ham, birlik ham alohida belgi bilan yozilgan: X — o‘n, I — bir. 47 ni rimliklar XLVII deb yozgan — yetti belgi! Bizning yozuvimizda faqat ikkita raqam kerak. Shuning uchun hind-arab raqamlari butun dunyoda g‘alaba qozondi.', 'В древнеримских числах десятки и единицы записывались отдельными знаками: X — десять, I — один. Число 47 римляне писали как XLVII — семь знаков! В нашей записи нужны всего две цифры. Поэтому индо-арабские цифры победили во всём мире.', 'In ancient Roman numerals tens and ones had separate signs: X for ten, I for one. The Romans wrote 47 as XLVII — seven signs! In our system only two digits are needed. That is why the Hindu-Arabic digits won all over the world.')
    ] },
    { kind: 'rule', h: L('Sonlarni taqqoslash qoidasi', 'Правило сравнения чисел', 'The rule for comparing numbers'), p: [
      L('Ikki sonni taqqoslaganda «&gt;» (katta), «&lt;» (kichik) yoki «=» (teng) belgisini qo‘yamiz. Belgining ochiq tomoni doim katta songa qaraydi: 52 &gt; 48.', 'Сравнивая два числа, ставим знак «&gt;» (больше), «&lt;» (меньше) или «=» (равно). Открытая сторона знака всегда смотрит на большее число: 52 &gt; 48.', 'When we compare two numbers we write “&gt;” (greater), “&lt;” (less) or “=” (equal). The open side of the sign always faces the bigger number: 52 &gt; 48.')
    ], list: [
      L('<b>1-qoida.</b> Bir xonali son har doim ikki xonali sondan kichik: 9 &lt; 10, 8 &lt; 23.', '<b>Правило 1.</b> Однозначное число всегда меньше двузначного: 9 &lt; 10, 8 &lt; 23.', '<b>Rule 1.</b> A one-digit number is always less than a two-digit number: 9 &lt; 10, 8 &lt; 23.'),
      L('<b>2-qoida.</b> Ikki xonali sonlarda avval o‘nliklarni solishtiramiz. Kimning o‘nligi ko‘p — o‘sha katta: 61 &gt; 59, chunki 6 o‘nlik 5 o‘nlikdan ko‘p.', '<b>Правило 2.</b> У двузначных чисел сначала сравниваем десятки. У кого десятков больше — то число больше: 61 &gt; 59, потому что 6 десятков больше 5 десятков.', '<b>Rule 2.</b> For two-digit numbers compare the tens first. More tens means a bigger number: 61 &gt; 59, because 6 tens are more than 5 tens.'),
      L('<b>3-qoida.</b> O‘nliklar teng bo‘lsa, birliklarni solishtiramiz: 34 &lt; 37, chunki 4 &lt; 7.', '<b>Правило 3.</b> Если десятки равны, сравниваем единицы: 34 &lt; 37, потому что 4 &lt; 7.', '<b>Rule 3.</b> If the tens are equal, compare the ones: 34 &lt; 37, because 4 &lt; 7.'),
      L('<b>4-qoida.</b> 100 har qanday ikki xonali sondan katta: 100 &gt; 99.', '<b>Правило 4.</b> 100 больше любого двузначного числа: 100 &gt; 99.', '<b>Rule 4.</b> 100 is greater than any two-digit number: 100 &gt; 99.')
    ], after: [
      L('Sonlar qatorida qaysi son o‘ngda tursa, o‘sha katta. 48 dan keyin 49, 50, 51, 52 keladi — demak 52 o‘ngda, u katta.', 'В числовом ряду больше то число, которое стоит правее. После 48 идут 49, 50, 51, 52 — значит, 52 стоит правее и оно больше.', 'On the number line the number further to the right is bigger. After 48 come 49, 50, 51, 52 — so 52 is to the right and it is bigger.')
    ] },
    { kind: 'steps', h: L('Sonni qanday o‘qiymiz va yozamiz', 'Как читать и записывать число', 'How to read and write a number'), p: [
      L('Rasmda 4 ta tayoqcha va 7 ta kubcha bo‘lsa, sonni shunday topamiz:', 'Если на картинке 4 палочки и 7 кубиков, число находим так:', 'If a picture shows 4 rods and 7 cubes, we find the number like this:')
    ], list: [
      L('1-qadam. Tayoqchalarni sanaymiz — bu o‘nliklar: 4 ta o‘nlik, ya’ni 40.', 'Шаг 1. Считаем палочки — это десятки: 4 десятка, то есть 40.', 'Step 1. Count the rods — these are tens: 4 tens, that is 40.'),
      L('2-qadam. Kubchalarni sanaymiz — bu birliklar: 7 ta birlik.', 'Шаг 2. Считаем кубики — это единицы: 7 единиц.', 'Step 2. Count the cubes — these are ones: 7 ones.'),
      L('3-qadam. Qo‘shamiz: 40 + 7 = 47.', 'Шаг 3. Складываем: 40 + 7 = 47.', 'Step 3. Add them: 40 + 7 = 47.'),
      L('4-qadam. Yozamiz: avval o‘nliklar raqami (4), keyin birliklar raqami (7). O‘qiymiz: «qirq yetti».', 'Шаг 4. Записываем: сначала цифру десятков (4), потом цифру единиц (7). Читаем: «сорок семь».', 'Step 4. Write it: the tens digit first (4), then the ones digit (7). Read it: “forty-seven”.')
    ], after: [
      L('Teskari yo‘nalishda ham ishlaymiz: 83 sonida nechta o‘nlik? Chap raqamga qaraymiz — 8. Nechta birlik? O‘ng raqam — 3. 83 = 80 + 3.', 'Работаем и в обратную сторону: сколько десятков в числе 83? Смотрим на левую цифру — 8. Сколько единиц? Правая цифра — 3. 83 = 80 + 3.', 'We can go the other way too: how many tens are in 83? Look at the left digit — 8. How many ones? The right digit — 3. 83 = 80 + 3.'),
      L('Diqqat: 70 sonida birliklar yo‘q, shuning uchun o‘ngda 0 yozamiz. Nolni tashlab yuborsak, 7 bo‘lib qoladi — bu butunlay boshqa son!', 'Внимание: в числе 70 единиц нет, поэтому справа пишем 0. Если ноль потерять, получится 7 — совсем другое число!', 'Careful: 70 has no ones, so we write 0 on the right. Drop the zero and you get 7 — a completely different number!')
    ] },
    { kind: 'example', h: L('Yechilgan namunalar', 'Разобранные примеры', 'Worked examples'), p: [
      L('Avval o‘zingiz yechib ko‘ring, keyin javobni oching.', 'Сначала попробуй решить сам, потом открой ответ.', 'Try to solve each one yourself first, then open the answer.')
    ], ex: [
      { q: L('64 sonida nechta o‘nlik va nechta birlik bor?', 'Сколько десятков и единиц в числе 64?', 'How many tens and ones are in 64?'), s: L('Chap raqam — 6, demak 6 ta o‘nlik. O‘ng raqam — 4, demak 4 ta birlik. 64 = 60 + 4.', 'Левая цифра — 6, значит 6 десятков. Правая цифра — 4, значит 4 единицы. 64 = 60 + 4.', 'The left digit is 6, so 6 tens. The right digit is 4, so 4 ones. 64 = 60 + 4.') },
      { q: L('9 ta o‘nlik va 2 ta birlikdan qanday son hosil bo‘ladi?', 'Какое число получится из 9 десятков и 2 единиц?', 'What number is made of 9 tens and 2 ones?'), s: L('9 ta o‘nlik — bu 90. Yana 2 ta birlik: 90 + 2 = <b>92</b>. Yozamiz: 9 chapda, 2 o‘ngda.', '9 десятков — это 90. Ещё 2 единицы: 90 + 2 = <b>92</b>. Записываем: 9 слева, 2 справа.', '9 tens is 90. Plus 2 ones: 90 + 2 = <b>92</b>. Write 9 on the left and 2 on the right.') },
      { q: L('Taqqoslang: 58 va 85.', 'Сравните: 58 и 85.', 'Compare 58 and 85.'), s: L('Raqamlar bir xil, lekin o‘rinlari har xil! 58 da 5 ta o‘nlik, 85 da 8 ta o‘nlik. 5 &lt; 8, demak <b>58 &lt; 85</b>.', 'Цифры те же, но стоят на разных местах! В 58 — 5 десятков, в 85 — 8 десятков. 5 &lt; 8, значит <b>58 &lt; 85</b>.', 'The digits are the same but in different places! 58 has 5 tens, 85 has 8 tens. 5 &lt; 8, so <b>58 &lt; 85</b>.') },
      { q: L('Taqqoslang: 71 va 76.', 'Сравните: 71 и 76.', 'Compare 71 and 76.'), s: L('O‘nliklar teng: 7 va 7. Birliklarga qaraymiz: 1 va 6. 1 &lt; 6, demak <b>71 &lt; 76</b>.', 'Десятки равны: 7 и 7. Смотрим на единицы: 1 и 6. 1 &lt; 6, значит <b>71 &lt; 76</b>.', 'The tens are equal: 7 and 7. Look at the ones: 1 and 6. 1 &lt; 6, so <b>71 &lt; 76</b>.') },
      { q: L('99 dan keyin qaysi son keladi?', 'Какое число идёт после 99?', 'Which number comes after 99?'), s: L('99 + 1 = <b>100</b>. 9 ta o‘nlik va 9 ta birlikka yana 1 qo‘shsak, 10 ta o‘nlik bo‘ladi — bu yuz.', '99 + 1 = <b>100</b>. К 9 десяткам и 9 единицам прибавим 1 — получится 10 десятков, то есть сто.', '99 + 1 = <b>100</b>. Add 1 to 9 tens and 9 ones and you get 10 tens — one hundred.') }
    ] },
    { kind: 'table', h: L('O‘nliklar jadvali', 'Таблица десятков', 'The table of tens'), p: [
      L('Yaxlit sonlar — sonlar qatorining «ustunlari». Jadvalda har bir yaxlit sonning nomi va tarkibi ko‘rsatilgan.', 'Круглые числа — «опоры» числового ряда. В таблице показано название и состав каждого круглого числа.', 'Round numbers are the “pillars” of the number line. The table shows the name and make-up of each one.')
    ], table: { head: [L('Son', 'Число', 'Number'), L('O‘qilishi', 'Название', 'Name'), L('O‘nliklar', 'Десятков', 'Tens'), L('Birliklar', 'Единиц', 'Ones')], rows: [
      ['10', L('o‘n', 'десять', 'ten'), '1', '10'],
      ['20', L('yigirma', 'двадцать', 'twenty'), '2', '20'],
      ['30', L('o‘ttiz', 'тридцать', 'thirty'), '3', '30'],
      ['50', L('ellik', 'пятьдесят', 'fifty'), '5', '50'],
      ['70', L('yetmish', 'семьдесят', 'seventy'), '7', '70'],
      ['90', L('to‘qson', 'девяносто', 'ninety'), '9', '90'],
      ['100', L('yuz', 'сто', 'one hundred'), '10', '100']
    ] }, after: [
      L('Yaxlit sonlar orasida to‘qqiztadan son bor: 20 va 30 orasida 21, 22, 23, 24, 25, 26, 27, 28, 29 turadi. Hammasida 2 ta o‘nlik, faqat birliklar o‘zgaradi.', 'Между круглыми числами стоят по девять чисел: между 20 и 30 — 21, 22, 23, 24, 25, 26, 27, 28, 29. У всех 2 десятка, меняются только единицы.', 'Between two round numbers there are nine numbers: between 20 and 30 come 21, 22, 23, 24, 25, 26, 27, 28, 29. All of them have 2 tens; only the ones change.')
    ] },
    { kind: 'mistake', h: L('Tipik xatolar', 'Типичные ошибки', 'Common mistakes'), p: [
      L('Sonlar bilan ishlaganda bolalar ko‘pincha shu xatolarga yo‘l qo‘yadi. Ularni bilib oling va takrorlamang!', 'Работая с числами, дети часто ошибаются вот так. Узнай эти ошибки и не повторяй!', 'When working with numbers children often make these mistakes. Learn them and avoid them!')
    ], list: [
      L('<b>Raqamlarni o‘rin almashtirish.</b> «Yigirma to‘rt» deganda 42 deb yozish. Avval o‘nlik (2), keyin birlik (4): 24.', '<b>Менять цифры местами.</b> Слыша «двадцать четыре», писать 42. Сначала десятки (2), потом единицы (4): 24.', '<b>Swapping the digits.</b> Hearing “twenty-four” and writing 42. Tens first (2), then ones (4): 24.'),
      L('<b>Nolni unutish.</b> «Oltmish» ni 6 deb yozish. Oltmish — bu 6 ta o‘nlik va 0 ta birlik: 60.', '<b>Забывать ноль.</b> Писать «шестьдесят» как 6. Шестьдесят — это 6 десятков и 0 единиц: 60.', '<b>Forgetting the zero.</b> Writing “sixty” as 6. Sixty is 6 tens and 0 ones: 60.'),
      L('<b>Birliklardan boshlab taqqoslash.</b> 39 va 41: «9 katta, demak 39 katta». Yo‘q! Avval o‘nliklar: 3 &lt; 4, demak 39 &lt; 41.', '<b>Сравнивать с единиц.</b> 39 и 41: «9 больше, значит 39 больше». Нет! Сначала десятки: 3 &lt; 4, значит 39 &lt; 41.', '<b>Comparing by ones first.</b> 39 and 41: “9 is bigger, so 39 is bigger.” No! Tens first: 3 &lt; 4, so 39 &lt; 41.'),
      L('<b>Belgini teskari qo‘yish.</b> Belgining ochiq («keng») tomoni katta songa qarashi kerak: 52 &gt; 48.', '<b>Ставить знак наоборот.</b> Открытая («широкая») сторона знака должна смотреть на большее число: 52 &gt; 48.', '<b>Writing the sign backwards.</b> The open (“wide”) side of the sign must face the bigger number: 52 &gt; 48.'),
      L('<b>99 dan keyin «to‘qson o‘n» deyish.</b> 99 dan keyin 100 keladi — yangi, uch xonali son.', '<b>После 99 говорить «девяносто десять».</b> После 99 идёт 100 — новое, трёхзначное число.', '<b>Saying “ninety-ten” after 99.</b> After 99 comes 100 — a new, three-digit number.')
    ] },
    { kind: 'life', h: L('Hayotda qayerda kerak?', 'Где это нужно в жизни?', 'Where is this used in life?'), p: [
      L('<b>Do‘konda.</b> Non 3 ming, sut 12 ming, shirinlik 25 ming so‘m. Qaysi narsa qimmatroq? Sonlarni taqqoslaymiz: 25 &gt; 12 &gt; 3. Pul sanaganda ham o‘nliklar kerak: ikki 10 minglik va bitta 5 minglik — 25 ming.', '<b>В магазине.</b> Хлеб 3 тысячи, молоко 12 тысяч, сладости 25 тысяч сумов. Что дороже? Сравниваем числа: 25 &gt; 12 &gt; 3. Считая деньги, тоже пользуемся десятками: две купюры по 10 тысяч и одна по 5 — 25 тысяч.', '<b>In the shop.</b> Bread costs 3 thousand, milk 12 thousand, sweets 25 thousand som. Which is dearer? Compare: 25 &gt; 12 &gt; 3. Counting money uses tens too: two 10-thousand notes and one 5-thousand note make 25 thousand.'),
      L('<b>Ko‘chada.</b> Uylar tartib bilan raqamlangan. 36-uyni qidirsangiz va 30-uy oldida tursangiz, yana oldinga yurish kerak, chunki 36 &gt; 30.', '<b>На улице.</b> Дома пронумерованы по порядку. Если ищешь дом 36 и стоишь у дома 30, нужно идти дальше, ведь 36 &gt; 30.', '<b>In the street.</b> Houses are numbered in order. If you are looking for number 36 and you are standing at number 30, keep walking, because 36 &gt; 30.'),
      L('<b>Sportda.</b> Futbolchilar ko‘ylagida raqam bor: 7, 10, 23. Yugurish musobaqasida 28 soniya 31 soniyadan kam — demak, 28 soniyada yugurgan bola g‘olib.', '<b>В спорте.</b> На футболках игроков номера: 7, 10, 23. В беге 28 секунд меньше, чем 31, — значит, победил тот, кто пробежал за 28 секунд.', '<b>In sport.</b> Footballers wear numbers: 7, 10, 23. In a race 28 seconds is less than 31, so the child who ran in 28 seconds wins.'),
      L('<b>Maktabda.</b> Sinfda 24 o‘quvchi, kutubxonada 100 ta kitob, darslik 96-betda ochilgan. Har kuni biz ikki xonali sonlarni o‘qiymiz va yozamiz.', '<b>В школе.</b> В классе 24 ученика, в библиотеке 100 книг, учебник открыт на странице 96. Каждый день мы читаем и записываем двузначные числа.', '<b>At school.</b> There are 24 pupils in the class, 100 books in the library, the textbook is open at page 96. Every day we read and write two-digit numbers.')
    ] },
    { kind: 'fact', h: L('Qiziqarli faktlar', 'Интересные факты', 'Fun facts'), list: [
      L('Nol raqami boshqa raqamlardan ancha keyin paydo bo‘lgan. Hindistonlik olimlar uni taxminan 1500 yil oldin ishlata boshlagan. Nolsiz 70 va 7 ni farqlash qiyin bo‘lar edi!', 'Цифра ноль появилась намного позже других. Индийские учёные стали её использовать около 1500 лет назад. Без нуля было бы трудно отличить 70 от 7!', 'The digit zero appeared much later than the other digits. Indian scholars began using it about 1 500 years ago. Without zero it would be hard to tell 70 from 7!'),
      L('Ba’zi xalqlar o‘nlik bilan emas, yigirmalik bilan sanagan — qo‘l va oyoq barmoqlarini birga hisoblab! Fransuz tilida 80 hali ham «to‘rtta yigirma» deb aytiladi.', 'Некоторые народы считали не десятками, а двадцатками — вместе пальцами рук и ног! Во французском языке 80 до сих пор звучит как «четыре двадцатки».', 'Some peoples counted in twenties instead of tens — using fingers and toes together! In French, 80 is still said as “four twenties”.'),
      L('Yuzoyoq nomiga qaramay, aslida 100 ta oyoqqa ega emas: turlariga qarab 30 dan 350 gacha oyog‘i bo‘ladi.', 'Сороконожка, несмотря на название, не имеет ровно 40 ног: у разных видов их от 30 до 350.', 'Despite its name, a centipede does not have exactly 100 legs: different kinds have from 30 to 350.'),
      L('Eng katta ikki xonali son — 99, eng kichigi — 10. Ikki xonali sonlar jami 90 ta.', 'Самое большое двузначное число — 99, самое маленькое — 10. Всего двузначных чисел 90.', 'The largest two-digit number is 99 and the smallest is 10. There are 90 two-digit numbers in all.')
    ] },
    { kind: 'practice', h: L('O‘ylab ko‘ring', 'Подумай', 'Think about it'), p: [
      L('Javob berishdan oldin eslang: avval o‘nliklar, keyin birliklar!', 'Перед ответом вспомни: сначала десятки, потом единицы!', 'Before answering, remember: tens first, then ones!')
    ], list: [
      L('5 ta o‘nlik va 5 ta birlikdan qanday son hosil bo‘ladi?', 'Какое число получится из 5 десятков и 5 единиц?', 'What number is made of 5 tens and 5 ones?'),
      L('Sonlarni o‘sish tartibida yozing: 61, 16, 60, 6.', 'Запиши числа в порядке возрастания: 61, 16, 60, 6.', 'Write the numbers in increasing order: 61, 16, 60, 6.'),
      L('Qaysi son 79 dan katta, lekin 81 dan kichik?', 'Какое число больше 79, но меньше 81?', 'Which number is greater than 79 but less than 81?'),
      L('3 va 8 raqamlaridan ikkita har xil ikki xonali son tuzing. Qaysi biri katta?', 'Составь из цифр 3 и 8 два разных двузначных числа. Какое больше?', 'Make two different two-digit numbers from the digits 3 and 8. Which is bigger?')
    ], after: [
      L('Javoblar: 55; 6, 16, 60, 61; 80; 38 va 83 — 83 katta.', 'Ответы: 55; 6, 16, 60, 61; 80; 38 и 83 — больше 83.', 'Answers: 55; 6, 16, 60, 61; 80; 38 and 83 — 83 is bigger.')
    ] },
    { kind: 'summary', h: L('Xulosa', 'Итог', 'Summary'), list: [
      L('Ikki xonali son <b>o‘nliklar</b> va <b>birliklar</b>dan iborat: 47 = 40 + 7.', 'Двузначное число состоит из <b>десятков</b> и <b>единиц</b>: 47 = 40 + 7.', 'A two-digit number is made of <b>tens</b> and <b>ones</b>: 47 = 40 + 7.'),
      L('Chap raqam — o‘nliklar, o‘ng raqam — birliklar.', 'Левая цифра — десятки, правая — единицы.', 'The left digit is tens, the right digit is ones.'),
      L('Yaxlit sonlarda birliklar 0: 10, 20, … 90. Nolni tashlab bo‘lmaydi!', 'У круглых чисел единиц 0: 10, 20, … 90. Ноль терять нельзя!', 'Round numbers have 0 ones: 10, 20, … 90. Never drop the zero!'),
      L('Taqqoslashda avval o‘nliklar, teng bo‘lsa — birliklar.', 'При сравнении сначала десятки, если равны — единицы.', 'To compare, look at the tens first; if equal, at the ones.'),
      L('Belgining ochiq tomoni katta songa qaraydi: 52 &gt; 48.', 'Открытая сторона знака смотрит на большее число: 52 &gt; 48.', 'The open side of the sign faces the bigger number: 52 &gt; 48.'),
      L('99 + 1 = 100 — yuz, 10 ta o‘nlik.', '99 + 1 = 100 — сто, 10 десятков.', '99 + 1 = 100 — one hundred, 10 tens.'),
      L('Bizning raqamlarimiz Hindistondan kelgan, ularni dunyoga Al-Xorazmiy tanitgan.', 'Наши цифры пришли из Индии, а миру их открыл аль-Хорезми.', 'Our digits came from India; al-Khwarizmi introduced them to the world.')
    ] }
  ] });

  // ---------- t2. Sonlarni qo'shish va ayirish (o'nliklar va birliklar bilan) ----------
  T.add(P, 't2', { sections: [
    { kind: 'intro', h: L('O‘nliklar va birliklar bilan ishlaymiz', 'Работаем с десятками и единицами', 'Working with tens and ones'), p: [
      L('Madina do‘konga bordi. Unda 35 ming so‘m bor edi, onasi yana 20 ming berdi. Endi qancha puli bor? Madina o‘yladi: «20 ming — bu 2 ta o‘n minglik. 35 ming — 3 ta o‘n minglik va 5 minglik. Demak, 3 + 2 = 5 ta o‘n minglik va 5 minglik — 55 ming!»', 'Мадина пошла в магазин. У неё было 35 тысяч сумов, мама дала ещё 20 тысяч. Сколько денег теперь? Мадина подумала: «20 тысяч — это 2 десятки. 35 тысяч — 3 десятки и 5. Значит, 3 + 2 = 5 десяток и 5 — 55 тысяч!»', 'Madina went to the shop. She had 35 thousand som and her mother gave her 20 thousand more. How much does she have now? Madina thought: “20 thousand is 2 tens. 35 thousand is 3 tens and 5. So 3 + 2 = 5 tens and 5 — 55 thousand!”'),
      L('Madina qo‘shishning eng muhim sirini bildi: <b>o‘nliklarni o‘nliklarga, birliklarni birliklarga</b> qo‘shamiz. Bu mavzuda biz ikki xonali songa yaxlit sonni va bir xonali sonni qo‘shishni, shuningdek ayirishni o‘rganamiz.', 'Мадина открыла главный секрет сложения: <b>десятки складываем с десятками, единицы — с единицами</b>. В этой теме мы научимся прибавлять к двузначному числу круглое и однозначное число, а также вычитать их.', 'Madina discovered the main secret of adding: <b>tens go with tens, ones go with ones</b>. In this topic we learn to add a round number and a one-digit number to a two-digit number, and to subtract them too.'),
      L('Bu usul juda qulay: hech qanday qog‘oz kerak emas, hammasini og‘zaki hisoblash mumkin. Keling, sinab ko‘ramiz!', 'Этот способ очень удобен: не нужна бумага, всё можно посчитать устно. Давай попробуем!', 'This method is very handy: no paper needed, you can do it all in your head. Let’s try!')
    ] },
    { kind: 'def', h: L('To‘rt xil misol', 'Четыре вида примеров', 'Four kinds of sums'), p: [
      L('Bu mavzuda to‘rt xil misol uchraydi. Hammasida bitta qoida ishlaydi: o‘zgaradigan xonani toping!', 'В этой теме встречаются четыре вида примеров. Во всех работает одно правило: найди разряд, который меняется!', 'In this topic there are four kinds of sums. One rule works for all of them: find the place that changes!')
    ], list: [
      L('<b>Yaxlit sonni qo‘shish:</b> 35 + 20 = 55. Faqat o‘nliklar o‘zgardi: 3 + 2 = 5. Birliklar (5) o‘z joyida qoldi.', '<b>Прибавить круглое число:</b> 35 + 20 = 55. Изменились только десятки: 3 + 2 = 5. Единицы (5) остались на месте.', '<b>Adding a round number:</b> 35 + 20 = 55. Only the tens changed: 3 + 2 = 5. The ones (5) stayed.'),
      L('<b>Bir xonali sonni qo‘shish:</b> 35 + 4 = 39. Faqat birliklar o‘zgardi: 5 + 4 = 9. O‘nliklar (3) o‘z joyida qoldi.', '<b>Прибавить однозначное число:</b> 35 + 4 = 39. Изменились только единицы: 5 + 4 = 9. Десятки (3) остались.', '<b>Adding a one-digit number:</b> 35 + 4 = 39. Only the ones changed: 5 + 4 = 9. The tens (3) stayed.'),
      L('<b>Yaxlit sonni ayirish:</b> 58 − 30 = 28. O‘nliklar: 5 − 3 = 2. Birliklar (8) o‘zgarmadi.', '<b>Вычесть круглое число:</b> 58 − 30 = 28. Десятки: 5 − 3 = 2. Единицы (8) не изменились.', '<b>Subtracting a round number:</b> 58 − 30 = 28. Tens: 5 − 3 = 2. The ones (8) did not change.'),
      L('<b>Bir xonali sonni ayirish:</b> 58 − 6 = 52. Birliklar: 8 − 6 = 2. O‘nliklar (5) o‘zgarmadi.', '<b>Вычесть однозначное число:</b> 58 − 6 = 52. Единицы: 8 − 6 = 2. Десятки (5) не изменились.', '<b>Subtracting a one-digit number:</b> 58 − 6 = 52. Ones: 8 − 6 = 2. The tens (5) did not change.')
    ], after: [
      L('Hozircha birliklar 10 dan oshmaydigan va ayirishda yetarli bo‘lgan misollarni yechamiz. O‘nlikdan o‘tish keyingi mavzularda.', 'Пока решаем примеры, где единицы не превышают 10, а при вычитании их хватает. Переход через десяток — в следующих темах.', 'For now we solve sums where the ones do not go past 10 and there are enough ones to subtract. Crossing ten comes in later topics.')
    ] },
    { kind: 'history', h: L('Abak — qadimgi hisoblagich', 'Абак — древний калькулятор', 'The abacus — an ancient calculator'), p: [
      L('O‘nliklar va birliklarni alohida qo‘shish g‘oyasi juda qadimiy. Bundan 2500 yil oldin qadimgi Bobil va Yunonistonda odamlar <b>abak</b> deb atalgan hisob taxtasidan foydalangan. Taxtada chiziqlar bo‘lgan: bittasi birliklar uchun, bittasi o‘nliklar uchun, bittasi yuzliklar uchun. Har chiziqqa toshchalar qo‘yilgan.', 'Идея складывать десятки и единицы отдельно очень древняя. 2500 лет назад в Древнем Вавилоне и Греции люди пользовались счётной доской — <b>абаком</b>. На доске были линии: одна для единиц, одна для десятков, одна для сотен. На каждую линию клали камешки.', 'The idea of adding tens and ones separately is very old. 2 500 years ago people in ancient Babylon and Greece used a counting board called an <b>abacus</b>. The board had lines: one for ones, one for tens, one for hundreds. Pebbles were placed on each line.'),
      L('35 + 20 ni hisoblash uchun savdogar o‘nliklar chizig‘iga 2 ta tosh qo‘shgan — tamom! Birliklar chizig‘iga tegmagan. Xuddi biz qilgandek.', 'Чтобы сосчитать 35 + 20, торговец добавлял на линию десятков 2 камешка — и всё! Линию единиц он не трогал. Точно так, как делаем мы.', 'To work out 35 + 20 a merchant added 2 pebbles to the tens line — done! He did not touch the ones line. Exactly as we do.'),
      L('Lotincha «calculus» so‘zi «toshcha» degan ma’noni bildiradi. Hozirgi «kalkulyator» so‘zi aynan shu qadimgi toshchalardan kelib chiqqan! O‘rta Osiyoda esa savdogarlar cho‘t (abak turi) bilan 20-asrgacha hisob-kitob qilishgan.', 'Латинское слово «calculus» означает «камешек». Современное слово «калькулятор» произошло именно от этих древних камешков! А в Средней Азии торговцы считали на счётах (разновидность абака) вплоть до XX века.', 'The Latin word “calculus” means “pebble”. The modern word “calculator” comes from those ancient pebbles! In Central Asia merchants used counting frames (a kind of abacus) right up to the 20th century.')
    ] },
    { kind: 'rule', h: L('Asosiy qoida', 'Главное правило', 'The main rule'), p: [
      L('Qo‘shish va ayirishda <b>har bir xona o‘z xonasi bilan</b> ishlaydi:', 'При сложении и вычитании <b>каждый разряд работает со своим разрядом</b>:', 'When adding and subtracting, <b>each place works with its own place</b>:')
    ], list: [
      L('Yaxlit son qo‘shilsa yoki ayirilsa — faqat <b>o‘nliklar</b> o‘zgaradi. 42 + 30 = 72, 42 − 30 = 12.', 'Прибавляем или вычитаем круглое число — меняются только <b>десятки</b>. 42 + 30 = 72, 42 − 30 = 12.', 'Add or subtract a round number and only the <b>tens</b> change. 42 + 30 = 72, 42 − 30 = 12.'),
      L('Bir xonali son qo‘shilsa yoki ayirilsa — faqat <b>birliklar</b> o‘zgaradi. 42 + 5 = 47, 42 − 2 = 40.', 'Прибавляем или вычитаем однозначное число — меняются только <b>единицы</b>. 42 + 5 = 47, 42 − 2 = 40.', 'Add or subtract a one-digit number and only the <b>ones</b> change. 42 + 5 = 47, 42 − 2 = 40.')
    ], after: [
      L('Nega shunday? Chunki 30 — bu 3 ta tayoqcha, kubchalar yo‘q. Tayoqchani tayoqchaga qo‘shamiz, kubchalar sonini o‘zgartirmaymiz. 5 esa 5 ta kubcha — ularni kubchalarga qo‘shamiz.', 'Почему так? Потому что 30 — это 3 палочки, без кубиков. Палочки кладём к палочкам, число кубиков не меняем. А 5 — это 5 кубиков, их кладём к кубикам.', 'Why? Because 30 is 3 rods with no cubes. Rods go with rods and the number of cubes stays the same. And 5 is 5 cubes — they go with the cubes.'),
      L('Tekshirish usuli: qo‘shishdan keyin natijadan ayirib ko‘ring. 35 + 20 = 55, tekshiramiz: 55 − 20 = 35. To‘g‘ri!', 'Способ проверки: после сложения вычти обратно. 35 + 20 = 55, проверяем: 55 − 20 = 35. Верно!', 'A way to check: after adding, subtract back. 35 + 20 = 55; check: 55 − 20 = 35. Correct!')
    ] },
    { kind: 'steps', h: L('Qadamma-qadam', 'Шаг за шагом', 'Step by step'), p: [
      L('64 + 30 ni hisoblaymiz:', 'Вычислим 64 + 30:', 'Let’s work out 64 + 30:')
    ], list: [
      L('1-qadam. Qo‘shilayotgan son qanday? 30 — yaxlit son. Demak, o‘nliklar o‘zgaradi.', 'Шаг 1. Какое число прибавляем? 30 — круглое. Значит, меняются десятки.', 'Step 1. What are we adding? 30 is a round number. So the tens change.'),
      L('2-qadam. 64 ni ajratamiz: 60 va 4.', 'Шаг 2. Разложим 64: 60 и 4.', 'Step 2. Split 64: 60 and 4.'),
      L('3-qadam. O‘nliklarni qo‘shamiz: 60 + 30 = 90.', 'Шаг 3. Складываем десятки: 60 + 30 = 90.', 'Step 3. Add the tens: 60 + 30 = 90.'),
      L('4-qadam. Birliklarni qaytaramiz: 90 + 4 = 94.', 'Шаг 4. Возвращаем единицы: 90 + 4 = 94.', 'Step 4. Put the ones back: 90 + 4 = 94.')
    ], after: [
      L('Endi 64 − 3: ayirilayotgan son 3 — bir xonali, demak birliklar o‘zgaradi. 64 = 60 + 4. Birliklardan ayiramiz: 4 − 3 = 1. Javob: 60 + 1 = 61.', 'Теперь 64 − 3: вычитаем 3 — однозначное, значит, меняются единицы. 64 = 60 + 4. Вычитаем из единиц: 4 − 3 = 1. Ответ: 60 + 1 = 61.', 'Now 64 − 3: we subtract 3, a one-digit number, so the ones change. 64 = 60 + 4. Subtract from the ones: 4 − 3 = 1. Answer: 60 + 1 = 61.'),
      L('Ko‘nikib qolsangiz, qadamlarni yozmasdan, darrov javobni aytasiz: 64 + 30 — «oltmish to‘rt qo‘shuv o‘ttiz — to‘qson to‘rt».', 'Когда привыкнешь, шаги писать не придётся — ответ будешь говорить сразу: 64 + 30 — «шестьдесят четыре плюс тридцать — девяносто четыре».', 'Once you get used to it, you will not need to write the steps — you will just say the answer: 64 + 30 — “sixty-four plus thirty is ninety-four”.')
    ] },
    { kind: 'example', h: L('Yechilgan namunalar', 'Разобранные примеры', 'Worked examples'), p: [
      L('Har bir misolda avval «qaysi xona o‘zgaradi?» deb so‘rang.', 'В каждом примере сначала спроси: «какой разряд меняется?»', 'For each sum, first ask: “which place changes?”')
    ], ex: [
      { q: L('46 + 30 = ?', '46 + 30 = ?', '46 + 30 = ?'), s: L('30 — yaxlit son, o‘nliklar o‘zgaradi. 40 + 30 = 70, birliklar 6. Javob: <b>76</b>.', '30 — круглое, меняются десятки. 40 + 30 = 70, единицы 6. Ответ: <b>76</b>.', '30 is round, so the tens change. 40 + 30 = 70, ones are 6. Answer: <b>76</b>.') },
      { q: L('23 + 5 = ?', '23 + 5 = ?', '23 + 5 = ?'), s: L('5 — bir xonali, birliklar o‘zgaradi. 3 + 5 = 8, o‘nliklar 2. Javob: <b>28</b>.', '5 — однозначное, меняются единицы. 3 + 5 = 8, десятки 2. Ответ: <b>28</b>.', '5 is one-digit, so the ones change. 3 + 5 = 8, tens are 2. Answer: <b>28</b>.') },
      { q: L('87 − 5 = ?', '87 − 5 = ?', '87 − 5 = ?'), s: L('Birliklardan ayiramiz: 7 − 5 = 2. O‘nliklar 8. Javob: <b>82</b>.', 'Вычитаем из единиц: 7 − 5 = 2. Десятки 8. Ответ: <b>82</b>.', 'Subtract from the ones: 7 − 5 = 2. Tens are 8. Answer: <b>82</b>.') },
      { q: L('64 − 40 = ?', '64 − 40 = ?', '64 − 40 = ?'), s: L('O‘nliklardan ayiramiz: 60 − 40 = 20. Birliklar 4. Javob: <b>24</b>.', 'Вычитаем из десятков: 60 − 40 = 20. Единицы 4. Ответ: <b>24</b>.', 'Subtract from the tens: 60 − 40 = 20. Ones are 4. Answer: <b>24</b>.') },
      { q: L('Gulzorda 32 ta lola va 24 ta atirgul bor. Jami nechta gul?', 'В цветнике 32 тюльпана и 24 розы. Сколько всего цветов?', 'A flowerbed has 32 tulips and 24 roses. How many flowers in all?'), s: L('32 + 24 ni ikki bosqichda hisoblaymiz: avval 32 + 20 = 52, keyin 52 + 4 = 56. Javob: <b>56 ta gul</b>.', '32 + 24 считаем в два шага: сначала 32 + 20 = 52, потом 52 + 4 = 56. Ответ: <b>56 цветов</b>.', 'Work out 32 + 24 in two steps: first 32 + 20 = 52, then 52 + 4 = 56. Answer: <b>56 flowers</b>.') }
    ] },
    { kind: 'table', h: L('Taqqoslash jadvali', 'Сравнительная таблица', 'Comparison table'), p: [
      L('Bir xil son — 53 — bilan to‘rt xil amal. Qaysi raqam o‘zgarganiga e’tibor bering.', 'Одно и то же число — 53 — и четыре разных действия. Обрати внимание, какая цифра меняется.', 'The same number, 53, with four different operations. Notice which digit changes.')
    ], table: { head: [L('Misol', 'Пример', 'Sum'), L('Nima o‘zgaradi', 'Что меняется', 'What changes'), L('Hisob', 'Счёт', 'Working'), L('Javob', 'Ответ', 'Answer')], rows: [
      ['53 + 20', L('o‘nliklar', 'десятки', 'tens'), '50 + 20 = 70', '73'],
      ['53 + 4', L('birliklar', 'единицы', 'ones'), '3 + 4 = 7', '57'],
      ['53 − 20', L('o‘nliklar', 'десятки', 'tens'), '50 − 20 = 30', '33'],
      ['53 − 3', L('birliklar', 'единицы', 'ones'), '3 − 3 = 0', '50'],
      ['53 + 40', L('o‘nliklar', 'десятки', 'tens'), '50 + 40 = 90', '93'],
      ['53 − 50', L('o‘nliklar', 'десятки', 'tens'), '50 − 50 = 0', '3']
    ] }, after: [
      L('Oxirgi qatorga qarang: 53 − 50 = 3. O‘nliklar butunlay yo‘qoldi, faqat birliklar qoldi. 53 − 3 = 50 da esa birliklar yo‘qoldi — yaxlit son chiqdi.', 'Посмотри на последнюю строку: 53 − 50 = 3. Десятки исчезли совсем, остались одни единицы. А в 53 − 3 = 50 исчезли единицы — получилось круглое число.', 'Look at the last row: 53 − 50 = 3. The tens vanished completely and only ones remain. In 53 − 3 = 50 the ones vanished — a round number appeared.')
    ] },
    { kind: 'mistake', h: L('Tipik xatolar', 'Типичные ошибки', 'Common mistakes'), p: [
      L('Bu misollar oson ko‘rinadi, lekin shoshilganda xato chiqadi. Mana eng ko‘p uchraydiganlari:', 'Эти примеры кажутся лёгкими, но в спешке появляются ошибки. Вот самые частые:', 'These sums look easy, but rushing causes mistakes. Here are the most common ones:')
    ], list: [
      L('<b>Yaxlit sonni birliklarga qo‘shish.</b> 35 + 20 = 37? Yo‘q! 20 — bu 2 ta o‘nlik, uni o‘nliklarga qo‘shamiz: 55.', '<b>Прибавлять круглое число к единицам.</b> 35 + 20 = 37? Нет! 20 — это 2 десятка, прибавляем к десяткам: 55.', '<b>Adding a round number to the ones.</b> 35 + 20 = 37? No! 20 is 2 tens, so add it to the tens: 55.'),
      L('<b>Bir xonali sonni o‘nliklarga qo‘shish.</b> 35 + 4 = 75? Yo‘q! 4 — bu 4 ta birlik: 39.', '<b>Прибавлять однозначное число к десяткам.</b> 35 + 4 = 75? Нет! 4 — это 4 единицы: 39.', '<b>Adding a one-digit number to the tens.</b> 35 + 4 = 75? No! 4 is 4 ones: 39.'),
      L('<b>Ayirishda qo‘shib yuborish.</b> 58 − 30 = 88? Belgiga qarang: minus! 58 − 30 = 28.', '<b>Складывать вместо вычитания.</b> 58 − 30 = 88? Посмотри на знак: минус! 58 − 30 = 28.', '<b>Adding instead of subtracting.</b> 58 − 30 = 88? Look at the sign: minus! 58 − 30 = 28.'),
      L('<b>Nolni yo‘qotish.</b> 46 − 6 = 4? Birliklar 6 − 6 = 0, o‘nliklar 4 qoldi: 40.', '<b>Терять ноль.</b> 46 − 6 = 4? Единицы 6 − 6 = 0, десятки 4 остались: 40.', '<b>Losing the zero.</b> 46 − 6 = 4? The ones give 6 − 6 = 0, the 4 tens remain: 40.'),
      L('<b>Tekshirmaslik.</b> Javobni topgach, teskari amal bilan tekshiring: 28 + 30 = 58 bo‘lsa, 58 − 30 = 28 to‘g‘ri.', '<b>Не проверять.</b> Найдя ответ, проверь обратным действием: если 28 + 30 = 58, то 58 − 30 = 28 верно.', '<b>Not checking.</b> After finding the answer, check with the opposite operation: if 28 + 30 = 58, then 58 − 30 = 28 is right.')
    ] },
    { kind: 'life', h: L('Hayotda qayerda kerak?', 'Где это нужно в жизни?', 'Where is this used in life?'), p: [
      L('<b>Bozorda.</b> Olma 1 kilosi 12 ming so‘m, siz 2 kilo oldingiz: 12 + 12 = 24 ming. Yana 3 ming so‘mlik non: 24 + 3 = 27 ming. 50 ming berdingiz — qaytim: 50 − 27 = 23 ming (bu keyinroq o‘rganadigan misol, lekin usul o‘sha!).', '<b>На рынке.</b> Килограмм яблок стоит 12 тысяч сумов, ты купил 2 кг: 12 + 12 = 24 тысячи. Ещё хлеб за 3 тысячи: 24 + 3 = 27 тысяч. Дал 50 тысяч — сдача: 50 − 27 = 23 тысячи (такой пример разберём позже, но способ тот же!).', '<b>At the market.</b> A kilo of apples costs 12 thousand som and you buy 2 kilos: 12 + 12 = 24 thousand. Plus bread for 3 thousand: 24 + 3 = 27 thousand. You pay 50 thousand — change: 50 − 27 = 23 thousand (we will study that sum later, but the method is the same!).'),
      L('<b>Avtobusda.</b> Avtobusda 43 yo‘lovchi bor edi. Bekatda 3 kishi tushdi: 43 − 3 = 40. Keyin 10 kishi chiqdi: 40 + 10 = 50 yo‘lovchi.', '<b>В автобусе.</b> В автобусе было 43 пассажира. На остановке вышли 3 человека: 43 − 3 = 40. Потом вошли 10: 40 + 10 = 50 пассажиров.', '<b>On the bus.</b> There were 43 passengers on the bus. At a stop 3 got off: 43 − 3 = 40. Then 10 got on: 40 + 10 = 50 passengers.'),
      L('<b>Sportda.</b> Basketbol jamoasi 56 ochko to‘plagan edi, yana 2 ochkoli to‘p tashladi: 56 + 2 = 58. Raqib jamoada 40 ochko, ular 20 ochko ortda: 60 − 40 = 20.', '<b>В спорте.</b> Баскетбольная команда набрала 56 очков и забросила ещё двухочковый: 56 + 2 = 58. У соперника 40 очков, они отстают на 20: 60 − 40 = 20.', '<b>In sport.</b> A basketball team had 56 points and scored a 2-pointer: 56 + 2 = 58. The other team has 40 points and is 20 behind: 60 − 40 = 20.'),
      L('<b>Kitob o‘qiganda.</b> Siz 24-betdasiz, bugun yana 30 bet o‘qidingiz: 24 + 30 = 54-betga yetdingiz.', '<b>При чтении.</b> Ты на 24-й странице, сегодня прочитал ещё 30: 24 + 30 = 54 — дошёл до 54-й страницы.', '<b>Reading a book.</b> You are on page 24 and read 30 more pages today: 24 + 30 = 54 — you reached page 54.')
    ] },
    { kind: 'fact', h: L('Qiziqarli faktlar', 'Интересные факты', 'Fun facts'), list: [
      L('Yapon maktablarida bolalar hali ham «soroban» — yapon abakida hisoblashni o‘rganadi. Tajribali o‘quvchilar abakda kalkulyatordan tezroq qo‘shadi!', 'В японских школах дети до сих пор учатся считать на «соробане» — японском абаке. Опытные ученики складывают на нём быстрее калькулятора!', 'In Japanese schools children still learn to count on the “soroban”, a Japanese abacus. Skilled pupils add on it faster than a calculator!'),
      L('Dunyodagi eng tez og‘zaki hisoblovchilar bir necha soniyada o‘nlab sonni qo‘shadi. Ularning siri — aynan o‘nliklar va birliklarni alohida ko‘rish.', 'Самые быстрые счётчики в мире складывают десятки чисел за несколько секунд. Их секрет — именно умение видеть десятки и единицы отдельно.', 'The fastest mental calculators in the world add dozens of numbers in a few seconds. Their secret is exactly this: seeing tens and ones separately.'),
      L('Qadimgi Misrda yozuvchilar (ularni «kotib» deyishgan) sonlarni qo‘shish uchun o‘nlik belgisini — taqa shaklidagi belgini — qayta-qayta chizgan. 30 — uchta taqa!', 'В Древнем Египте писцы, складывая числа, рисовали знак десятка — символ в виде подковы — несколько раз. 30 — три подковы!', 'In ancient Egypt scribes drew the symbol for ten, shaped like a horseshoe, again and again to add numbers. 30 was three horseshoes!'),
      L('Fil kuniga 100 kg gacha o‘simlik yeydi — bu 10 ta o‘nlik kilogramm!', 'Слон съедает до 100 кг растений в день — это 10 десятков килограммов!', 'An elephant eats up to 100 kg of plants a day — that is 10 tens of kilograms!')
    ] },
    { kind: 'practice', h: L('O‘ylab ko‘ring', 'Подумай', 'Think about it'), p: [
      L('Har bir misolda qaysi xona o‘zgarishini aytib, keyin hisoblang.', 'В каждом примере скажи, какой разряд меняется, а потом считай.', 'For each sum, say which place changes, then calculate.')
    ], list: [
      L('27 + 50 = ?   27 + 2 = ?', '27 + 50 = ?   27 + 2 = ?', '27 + 50 = ?   27 + 2 = ?'),
      L('96 − 60 = ?   96 − 6 = ?', '96 − 60 = ?   96 − 6 = ?', '96 − 60 = ?   96 − 6 = ?'),
      L('Qaysi son 38 dan 40 ta ko‘p? Qaysi son 38 dan 4 ta kam?', 'Какое число на 40 больше 38? Какое на 4 меньше 38?', 'Which number is 40 more than 38? Which is 4 less than 38?'),
      L('Akmalda 45 ta marka bor edi. U 5 tasini do‘stiga berdi, keyin 20 ta yangi marka oldi. Nechta bo‘ldi?', 'У Акмаля было 45 марок. 5 он отдал другу, потом получил 20 новых. Сколько стало?', 'Akmal had 45 stamps. He gave 5 to a friend, then got 20 new ones. How many now?')
    ], after: [
      L('Javoblar: 77 va 29; 36 va 90; 78 va 34; 45 − 5 = 40, 40 + 20 = 60 ta marka.', 'Ответы: 77 и 29; 36 и 90; 78 и 34; 45 − 5 = 40, 40 + 20 = 60 марок.', 'Answers: 77 and 29; 36 and 90; 78 and 34; 45 − 5 = 40, 40 + 20 = 60 stamps.')
    ] },
    { kind: 'summary', h: L('Xulosa', 'Итог', 'Summary'), list: [
      L('O‘nliklarni o‘nliklarga, birliklarni birliklarga qo‘shamiz va ayiramiz.', 'Десятки складываем и вычитаем с десятками, единицы — с единицами.', 'Add and subtract tens with tens and ones with ones.'),
      L('Yaxlit son (20, 30, 40…) — faqat o‘nliklar o‘zgaradi: 35 + 20 = 55, 58 − 30 = 28.', 'Круглое число (20, 30, 40…) — меняются только десятки: 35 + 20 = 55, 58 − 30 = 28.', 'A round number (20, 30, 40…) changes only the tens: 35 + 20 = 55, 58 − 30 = 28.'),
      L('Bir xonali son — faqat birliklar o‘zgaradi: 35 + 4 = 39, 58 − 6 = 52.', 'Однозначное число — меняются только единицы: 35 + 4 = 39, 58 − 6 = 52.', 'A one-digit number changes only the ones: 35 + 4 = 39, 58 − 6 = 52.'),
      L('Avval «qaysi xona o‘zgaradi?» deb so‘rang, keyin hisoblang.', 'Сначала спроси «какой разряд меняется?», потом считай.', 'First ask “which place changes?”, then calculate.'),
      L('Javobni teskari amal bilan tekshiring.', 'Проверяй ответ обратным действием.', 'Check the answer with the opposite operation.'),
      L('Qadimgi odamlar abakda xuddi shunday hisoblagan — har xona o‘z chizig‘ida.', 'Древние люди считали так же на абаке — каждый разряд на своей линии.', 'Ancient people counted the same way on an abacus — each place on its own line.')
    ] }
  ] });

  // ---------- t3. Yaxlit songacha qo'shish va yaxlit sondan ayirish ----------
  T.add(P, 't3', { sections: [
    { kind: 'intro', h: L('Yaxlit songa yetib olamiz', 'Доходим до круглого числа', 'Reaching the round number'), p: [
      L('Sardor tug‘ilgan kuniga 31 ta shar shishirdi. Dadasi yana 9 ta shar olib keldi. Sardor sanadi: 31 + 9 … birliklar 1 + 9 = 10! O‘nta shar — bu butun bir o‘nlik. Demak, 3 ta o‘nlik va yana 1 ta o‘nlik — 40 ta shar!', 'Сардор надул к дню рождения 31 шарик. Папа принёс ещё 9. Сардор посчитал: 31 + 9 … единицы 1 + 9 = 10! Десять шариков — это целый десяток. Значит, 3 десятка и ещё 1 десяток — 40 шариков!', 'Sardor blew up 31 balloons for his birthday. His dad brought 9 more. Sardor counted: 31 + 9 … the ones give 1 + 9 = 10! Ten balloons make a whole ten. So 3 tens and 1 more ten — 40 balloons!'),
      L('Bu mavzuda ikkita yangi narsani o‘rganamiz. Birinchisi: birliklar qo‘shilib 10 bo‘lsa, yangi o‘nlik hosil bo‘ladi va javob <b>yaxlit son</b> chiqadi. Ikkinchisi: yaxlit sondan birliklarni ayirish uchun bitta o‘nlikni «maydalash» kerak: 30 − 7 = 23.', 'В этой теме мы узнаем две новые вещи. Первая: если единицы в сумме дают 10, образуется новый десяток и ответ — <b>круглое число</b>. Вторая: чтобы вычесть единицы из круглого числа, нужно «разменять» один десяток: 30 − 7 = 23.', 'In this topic we learn two new things. First: when the ones add up to 10, a new ten appears and the answer is a <b>round number</b>. Second: to take ones away from a round number we need to “break” one ten: 30 − 7 = 23.'),
      L('Bu ikki usul — o‘nlikdan o‘tib hisoblashning birinchi qadami. Ularni yaxshi o‘rgansangiz, keyingi mavzular juda oson bo‘ladi.', 'Эти два приёма — первый шаг к счёту с переходом через десяток. Освоишь их — следующие темы будут совсем лёгкими.', 'These two tricks are the first step to crossing ten. Master them and the next topics will be easy.')
    ] },
    { kind: 'def', h: L('10 ning tarkibi', 'Состав числа 10', 'The parts of 10'), p: [
      L('Bu mavzuning kaliti — 10 sonining tarkibini yoddan bilish. 10 ni ikki songa shunday bo‘lish mumkin:', 'Ключ к этой теме — знать наизусть состав числа 10. Число 10 можно разбить на две части так:', 'The key to this topic is knowing the parts of 10 by heart. 10 can be split into two parts like this:')
    ], list: [
      L('1 + 9 = 10 va 9 + 1 = 10', '1 + 9 = 10 и 9 + 1 = 10', '1 + 9 = 10 and 9 + 1 = 10'),
      L('2 + 8 = 10 va 8 + 2 = 10', '2 + 8 = 10 и 8 + 2 = 10', '2 + 8 = 10 and 8 + 2 = 10'),
      L('3 + 7 = 10 va 7 + 3 = 10', '3 + 7 = 10 и 7 + 3 = 10', '3 + 7 = 10 and 7 + 3 = 10'),
      L('4 + 6 = 10 va 6 + 4 = 10', '4 + 6 = 10 и 6 + 4 = 10', '4 + 6 = 10 and 6 + 4 = 10'),
      L('5 + 5 = 10', '5 + 5 = 10', '5 + 5 = 10')
    ], after: [
      L('<b>Yaxlit songacha to‘ldirish</b> — ikki xonali songa shunday birlik qo‘shishki, natija yaxlit bo‘lsin. 31 ga 9 yetmaydi, 47 ga 3 yetmaydi, 85 ga 5 yetmaydi.', '<b>Дополнить до круглого</b> — прибавить к двузначному числу столько единиц, чтобы получилось круглое число. До круглого 31 не хватает 9, 47 — 3, 85 — 5.', '<b>Making up to a ten</b> means adding just enough ones to a two-digit number to get a round number. 31 needs 9, 47 needs 3, 85 needs 5.'),
      L('<b>O‘nlikni maydalash</b> — bitta tayoqchani 10 ta kubchaga almashtirish. 30 = 20 + 10. Endi 10 ta kubchadan istalgancha ayirish mumkin.', '<b>Разменять десяток</b> — заменить одну палочку на 10 кубиков. 30 = 20 + 10. Теперь из 10 кубиков можно вычесть сколько нужно.', '<b>Breaking a ten</b> means swapping one rod for 10 cubes. 30 = 20 + 10. Now we can take as many as we need from the 10 cubes.')
    ] },
    { kind: 'history', h: L('Bobilliklar va oltmishlik', 'Вавилоняне и число 60', 'The Babylonians and sixty'), p: [
      L('Biz o‘nlik bilan sanaymiz, lekin hamma xalqlar ham shunday qilmagan. Bundan 4000 yil oldin qadimgi Bobilda (hozirgi Iroq) odamlar <b>oltmishlik</b> bilan sanashgan! Ularda «yangi guruh» 10 ta emas, 60 ta birlikdan keyin boshlangan.', 'Мы считаем десятками, но так делали не все народы. 4000 лет назад в Древнем Вавилоне (нынешний Ирак) люди считали <b>шестидесятками</b>! У них «новая группа» начиналась не после 10, а после 60 единиц.', 'We count in tens, but not every people did. 4 000 years ago in ancient Babylon (today’s Iraq) people counted in <b>sixties</b>! For them a “new group” started not after 10 but after 60 units.'),
      L('Bobilliklarning bu odati bizgacha yetib kelgan: bir soatda 60 daqiqa, bir daqiqada 60 soniya bor. Soatga qarasangiz, qadimgi Bobil sanog‘ini ko‘rasiz!', 'Эта привычка вавилонян дошла до нас: в часе 60 минут, в минуте 60 секунд. Глядя на часы, ты видишь древний вавилонский счёт!', 'This Babylonian habit has survived to our day: an hour has 60 minutes and a minute has 60 seconds. When you look at a clock, you see ancient Babylonian counting!'),
      L('Lekin o‘nlik sanoq osonroq bo‘lib chiqdi — chunki barmoqlar o‘nta. Buyuk olim <b>Abu Rayhon Beruniy</b> (973–1048) o‘z kitoblarida hind raqamlari va o‘nlik sanoq haqida yozgan va uni boshqa xalqlar tizimi bilan taqqoslagan. U sonlarni «bo‘lib qo‘shish» — xuddi biz 31 + 9 da qilgandek — usulini yaxshi bilgan.', 'Но десятичный счёт оказался удобнее — ведь пальцев десять. Великий учёный <b>Абу Райхан Беруни</b> (973–1048) писал в своих книгах об индийских цифрах и десятичном счёте и сравнивал его с системами других народов. Он хорошо знал приём «сложения по частям» — такой же, как в нашем 31 + 9.', 'But counting in tens turned out to be easier, because we have ten fingers. The great scholar <b>Abu Rayhan Biruni</b> (973–1048) wrote in his books about Indian numerals and counting in tens, and compared it with other peoples’ systems. He knew the trick of “adding in parts” well — just like our 31 + 9.')
    ] },
    { kind: 'rule', h: L('Ikki qoida', 'Два правила', 'Two rules'), p: [
      L('<b>1-qoida. Yaxlit songacha qo‘shish.</b> Agar birliklar yig‘indisi 10 bo‘lsa, ular yangi o‘nlikka aylanadi. O‘nliklar soni 1 taga oshadi, birliklar 0 bo‘ladi.', '<b>Правило 1. Сложение до круглого числа.</b> Если сумма единиц равна 10, они превращаются в новый десяток. Десятков становится на 1 больше, единиц — 0.', '<b>Rule 1. Adding up to a ten.</b> If the ones add up to 10, they become a new ten. The number of tens goes up by 1 and the ones become 0.'),
      L('31 + 9: birliklar 1 + 9 = 10 — bu yangi o‘nlik. 3 ta o‘nlik + 1 ta o‘nlik = 4 ta o‘nlik. Javob: <b>40</b>.', '31 + 9: единицы 1 + 9 = 10 — это новый десяток. 3 десятка + 1 десяток = 4 десятка. Ответ: <b>40</b>.', '31 + 9: the ones give 1 + 9 = 10 — a new ten. 3 tens + 1 ten = 4 tens. Answer: <b>40</b>.'),
      L('<b>2-qoida. Yaxlit sondan ayirish.</b> Yaxlit sonda birliklar yo‘q, shuning uchun bitta o‘nlikni 10 ta birlikka maydalaymiz va shundan ayiramiz.', '<b>Правило 2. Вычитание из круглого числа.</b> У круглого числа нет единиц, поэтому один десяток разменяем на 10 единиц и вычитаем из них.', '<b>Rule 2. Subtracting from a ten.</b> A round number has no ones, so we break one ten into 10 ones and subtract from those.'),
      L('30 − 7: 30 = 20 + 10. 10 − 7 = 3. 20 + 3 = <b>23</b>.', '30 − 7: 30 = 20 + 10. 10 − 7 = 3. 20 + 3 = <b>23</b>.', '30 − 7: 30 = 20 + 10. 10 − 7 = 3. 20 + 3 = <b>23</b>.')
    ], after: [
      L('Ikki qoida bir-biriga teskari: 23 + 7 = 30 va 30 − 7 = 23. Bittasini bilsangiz, ikkinchisini tekshirasiz.', 'Два правила обратны друг другу: 23 + 7 = 30 и 30 − 7 = 23. Знаешь одно — проверишь другое.', 'The two rules are opposites: 23 + 7 = 30 and 30 − 7 = 23. Know one and you can check the other.')
    ] },
    { kind: 'steps', h: L('Qadamma-qadam', 'Шаг за шагом', 'Step by step'), p: [
      L('<b>Qo‘shish: 56 + 4.</b>', '<b>Сложение: 56 + 4.</b>', '<b>Adding: 56 + 4.</b>')
    ], list: [
      L('1-qadam. Birliklarni qo‘shamiz: 6 + 4 = 10. Bu o‘nlik!', 'Шаг 1. Складываем единицы: 6 + 4 = 10. Это десяток!', 'Step 1. Add the ones: 6 + 4 = 10. That is a ten!'),
      L('2-qadam. O‘nliklarga 1 qo‘shamiz: 5 + 1 = 6 ta o‘nlik.', 'Шаг 2. Прибавляем к десяткам 1: 5 + 1 = 6 десятков.', 'Step 2. Add 1 to the tens: 5 + 1 = 6 tens.'),
      L('3-qadam. Javob: 60.', 'Шаг 3. Ответ: 60.', 'Step 3. Answer: 60.'),
      L('<b>Ayirish: 50 − 8.</b>', '<b>Вычитание: 50 − 8.</b>', '<b>Subtracting: 50 − 8.</b>'),
      L('1-qadam. 50 ni ajratamiz: 40 va 10.', 'Шаг 1. Разложим 50: 40 и 10.', 'Step 1. Split 50: 40 and 10.'),
      L('2-qadam. 10 dan ayiramiz: 10 − 8 = 2.', 'Шаг 2. Вычитаем из 10: 10 − 8 = 2.', 'Step 2. Subtract from 10: 10 − 8 = 2.'),
      L('3-qadam. Qo‘shamiz: 40 + 2 = 42.', 'Шаг 3. Складываем: 40 + 2 = 42.', 'Step 3. Add: 40 + 2 = 42.')
    ], after: [
      L('Ayirishda tez usul: javobning o‘nliklari — berilgan yaxlit sondan bitta kam, birliklari esa 10 ning tarkibidan. 50 − 8: o‘nlik 4, birlik 10 − 8 = 2, javob 42. 80 − 1: o‘nlik 7, birlik 9, javob 79.', 'Быстрый способ при вычитании: десятков в ответе на один меньше, чем в круглом числе, а единицы — из состава 10. 50 − 8: десятков 4, единиц 10 − 8 = 2, ответ 42. 80 − 1: десятков 7, единиц 9, ответ 79.', 'A quick way to subtract: the answer has one ten fewer than the round number, and its ones come from the parts of 10. 50 − 8: 4 tens, 10 − 8 = 2 ones, answer 42. 80 − 1: 7 tens, 9 ones, answer 79.')
    ] },
    { kind: 'example', h: L('Yechilgan namunalar', 'Разобранные примеры', 'Worked examples'), p: [
      L('Har misolda 10 ning tarkibini eslang.', 'В каждом примере вспоминай состав числа 10.', 'In each sum remember the parts of 10.')
    ], ex: [
      { q: L('57 + 3 = ?', '57 + 3 = ?', '57 + 3 = ?'), s: L('Birliklar: 7 + 3 = 10 — yangi o‘nlik. O‘nliklar: 5 + 1 = 6. Javob: <b>60</b>.', 'Единицы: 7 + 3 = 10 — новый десяток. Десятки: 5 + 1 = 6. Ответ: <b>60</b>.', 'Ones: 7 + 3 = 10 — a new ten. Tens: 5 + 1 = 6. Answer: <b>60</b>.') },
      { q: L('85 + 5 = ?', '85 + 5 = ?', '85 + 5 = ?'), s: L('5 + 5 = 10. O‘nliklar 8 + 1 = 9. Javob: <b>90</b>.', '5 + 5 = 10. Десятки 8 + 1 = 9. Ответ: <b>90</b>.', '5 + 5 = 10. Tens 8 + 1 = 9. Answer: <b>90</b>.') },
      { q: L('40 − 6 = ?', '40 − 6 = ?', '40 − 6 = ?'), s: L('40 = 30 + 10. 10 − 6 = 4. 30 + 4 = <b>34</b>. Tekshiramiz: 34 + 6 = 40. To‘g‘ri!', '40 = 30 + 10. 10 − 6 = 4. 30 + 4 = <b>34</b>. Проверка: 34 + 6 = 40. Верно!', '40 = 30 + 10. 10 − 6 = 4. 30 + 4 = <b>34</b>. Check: 34 + 6 = 40. Correct!') },
      { q: L('80 − 1 = ?', '80 − 1 = ?', '80 − 1 = ?'), s: L('80 dan 1 ta kam — bu 80 dan oldingi son: <b>79</b>. Qoida bo‘yicha ham: 70 + (10 − 1) = 79.', '80 без 1 — это число перед 80: <b>79</b>. По правилу тоже: 70 + (10 − 1) = 79.', '1 less than 80 is the number just before 80: <b>79</b>. By the rule too: 70 + (10 − 1) = 79.') },
      { q: L('Qutida 60 ta tuxum bor edi. 8 tasi ishlatildi. Nechta qoldi?', 'В коробке было 60 яиц. 8 использовали. Сколько осталось?', 'A box had 60 eggs. 8 were used. How many are left?'), s: L('60 − 8. 60 = 50 + 10, 10 − 8 = 2, 50 + 2 = <b>52 ta tuxum</b>.', '60 − 8. 60 = 50 + 10, 10 − 8 = 2, 50 + 2 = <b>52 яйца</b>.', '60 − 8. 60 = 50 + 10, 10 − 8 = 2, 50 + 2 = <b>52 eggs</b>.') }
    ] },
    { kind: 'table', h: L('Yaxlit songacha nima yetmaydi?', 'Сколько не хватает до круглого?', 'How much is missing to the next ten?'), p: [
      L('Jadvalda har bir son uchun yaxlit songacha yetmaydigan birliklar ko‘rsatilgan. Ularni yoddan bilish og‘zaki hisobni juda tezlashtiradi.', 'В таблице для каждого числа показано, сколько единиц не хватает до круглого. Если знать их наизусть, устный счёт станет очень быстрым.', 'The table shows how many ones each number needs to reach the next ten. Knowing them by heart makes mental maths very fast.')
    ], table: { head: [L('Son', 'Число', 'Number'), L('Yetmaydi', 'Не хватает', 'Needs'), L('Yaxlit son', 'Круглое число', 'Next ten'), L('Teskarisi', 'Обратно', 'Reverse')], rows: [
      ['21', '9', '30', '30 − 9 = 21'],
      ['42', '8', '50', '50 − 8 = 42'],
      ['63', '7', '70', '70 − 7 = 63'],
      ['74', '6', '80', '80 − 6 = 74'],
      ['35', '5', '40', '40 − 5 = 35'],
      ['86', '4', '90', '90 − 4 = 86'],
      ['97', '3', '100', '100 − 3 = 97']
    ] }, after: [
      L('E’tibor bering: oxirgi ustun — ayirish. Har bir qo‘shish misoli ayirish misoliga aylanadi. 97 + 3 = 100 bo‘lsa, 100 − 3 = 97.', 'Обрати внимание: последний столбец — вычитание. Каждый пример на сложение превращается в пример на вычитание. Если 97 + 3 = 100, то 100 − 3 = 97.', 'Notice the last column — subtraction. Every addition turns into a subtraction. If 97 + 3 = 100, then 100 − 3 = 97.')
    ] },
    { kind: 'mistake', h: L('Tipik xatolar', 'Типичные ошибки', 'Common mistakes'), p: [
      L('O‘nlik hosil bo‘lganda yoki maydalanganda bolalar ko‘pincha shunday xato qiladi:', 'Когда десяток образуется или разменивается, дети часто ошибаются так:', 'When a ten is made or broken, children often make these mistakes:')
    ], list: [
      L('<b>Yangi o‘nlikni unutish.</b> 31 + 9 = 30? Birliklar 10 bo‘ldi — bu o‘nlik, uni o‘nliklarga qo‘shish kerak: 40.', '<b>Забыть новый десяток.</b> 31 + 9 = 30? Единиц стало 10 — это десяток, его нужно прибавить к десяткам: 40.', '<b>Forgetting the new ten.</b> 31 + 9 = 30? The ones became 10 — that is a ten and must be added to the tens: 40.'),
      L('<b>10 ni yonma-yon yozish.</b> 31 + 9 = 310? Birliklar xonasiga faqat bitta raqam sig‘adi. 10 birlik = 1 o‘nlik.', '<b>Писать 10 рядом.</b> 31 + 9 = 310? В разряд единиц помещается только одна цифра. 10 единиц = 1 десяток.', '<b>Writing 10 next to the tens.</b> 31 + 9 = 310? Only one digit fits in the ones place. 10 ones = 1 ten.'),
      L('<b>Yaxlit sondan ayirganda o‘nlikni kamaytirmaslik.</b> 30 − 7 = 33? Bitta o‘nlik maydalandi, demak o‘nliklar 2 ta qoldi: 23.', '<b>Не уменьшать десятки при вычитании из круглого.</b> 30 − 7 = 33? Один десяток разменяли, значит, десятков осталось 2: 23.', '<b>Not reducing the tens when subtracting from a ten.</b> 30 − 7 = 33? One ten was broken, so 2 tens remain: 23.'),
      L('<b>Noldan ayirishga urinish.</b> «0 − 7 bo‘lmaydi» deb to‘xtab qolish. To‘g‘ri, bo‘lmaydi — shuning uchun o‘nlikni maydalaymiz: 10 − 7 = 3.', '<b>Пытаться вычесть из нуля.</b> Останавливаться со словами «0 − 7 нельзя». Верно, нельзя — поэтому разменяем десяток: 10 − 7 = 3.', '<b>Trying to subtract from zero.</b> Stopping with “0 − 7 is impossible”. True — so we break a ten: 10 − 7 = 3.'),
      L('<b>10 ning tarkibini chalkashtirish.</b> 40 − 6 = 36 emas, 34! Chunki 10 − 6 = 4.', '<b>Путать состав 10.</b> 40 − 6 — это не 36, а 34! Потому что 10 − 6 = 4.', '<b>Mixing up the parts of 10.</b> 40 − 6 is not 36 but 34! Because 10 − 6 = 4.')
    ] },
    { kind: 'life', h: L('Hayotda qayerda kerak?', 'Где это нужно в жизни?', 'Where is this used in life?'), p: [
      L('<b>Do‘konda qaytim.</b> Siz 50 ming so‘m berdingiz, xarid 7 ming so‘m. Qaytim: 50 − 7 = 43 ming. Sotuvchilar har kuni yuzlab marta yaxlit sondan ayiradi!', '<b>Сдача в магазине.</b> Ты дал 50 тысяч сумов, покупка стоит 7 тысяч. Сдача: 50 − 7 = 43 тысячи. Продавцы каждый день сотни раз вычитают из круглых чисел!', '<b>Change in a shop.</b> You pay 50 thousand som and the purchase costs 7 thousand. Change: 50 − 7 = 43 thousand. Shopkeepers subtract from round numbers hundreds of times a day!'),
      L('<b>Oshxonada.</b> Retseptda 40 gramm shakar kerak, qoshiqda 6 gramm bor. Yana qancha? 40 − 6 = 34 gramm.', '<b>На кухне.</b> По рецепту нужно 40 граммов сахара, в ложке уже 6. Сколько ещё? 40 − 6 = 34 грамма.', '<b>In the kitchen.</b> A recipe needs 40 grams of sugar and the spoon already holds 6. How much more? 40 − 6 = 34 grams.'),
      L('<b>Sportda.</b> Yuguruvchi 100 metr yugurishi kerak. U 93 metr yugurdi. Marragacha 7 metr qoldi, chunki 93 + 7 = 100.', '<b>В спорте.</b> Бегун должен пробежать 100 метров. Он пробежал 93. До финиша 7 метров, потому что 93 + 7 = 100.', '<b>In sport.</b> A runner has to run 100 metres. She has run 93. 7 metres remain to the finish, because 93 + 7 = 100.'),
      L('<b>Vaqt.</b> Soat 60 daqiqa. Dars 45 daqiqa davom etdi, lekin 10 ning tarkibi bu yerda ham ishlaydi: 60 − 5 = 55 daqiqa — dars tugashiga 5 daqiqa qolganda.', '<b>Время.</b> В часе 60 минут. Если урок длится 45 минут, состав 10 поможет и здесь: 60 − 5 = 55 минут — когда до конца часа остаётся 5 минут.', '<b>Time.</b> An hour has 60 minutes. The parts of 10 help here too: 60 − 5 = 55 minutes — when 5 minutes remain to the end of the hour.')
    ] },
    { kind: 'fact', h: L('Qiziqarli faktlar', 'Интересные факты', 'Fun facts'), list: [
      L('Inson qo‘lida 10 ta barmoq, oyog‘ida ham 10 ta. Shuning uchun ko‘p tillarda «o‘n» so‘zi «ikki qo‘l» degan ma’noni bergan.', 'У человека 10 пальцев на руках и 10 на ногах. Поэтому во многих языках слово «десять» когда-то означало «две руки».', 'A person has 10 fingers and 10 toes. That is why in many languages the word for “ten” once meant “two hands”.'),
      L('Futbol maydonida 10 raqamli ko‘ylakni odatda eng mohir o‘yinchi kiyadi. Pele va Maradona 10-raqam bilan o‘ynagan.', 'На футбольном поле майку с номером 10 обычно носит самый искусный игрок. Пеле и Марадона играли под номером 10.', 'On a football pitch the number 10 shirt usually goes to the most skilful player. Pelé and Maradona wore number 10.'),
      L('Boulingda 10 ta kegli bor. Hammasini bitta zarba bilan yiqitish «strayk» deyiladi.', 'В боулинге 10 кеглей. Сбить все одним броском называется «страйк».', 'Bowling has 10 pins. Knocking them all down with one ball is called a “strike”.'),
      L('100 soni yaxlit sonlarning «qiroli»: u 10 ta o‘nlik. Qadimgi rimliklarda 100 askarga «senturion» boshchilik qilgan — «yuz» so‘zidan.', 'Число 100 — «король» круглых чисел: это 10 десятков. У древних римлян сотней солдат командовал «центурион» — от слова «сто».', '100 is the “king” of round numbers: 10 tens. In ancient Rome a hundred soldiers were led by a “centurion”, from the word for “hundred”.')
    ] },
    { kind: 'practice', h: L('O‘ylab ko‘ring', 'Подумай', 'Think about it'), p: [
      L('Avval 10 ning tarkibini eslang, keyin yeching.', 'Сначала вспомни состав 10, потом решай.', 'First remember the parts of 10, then solve.')
    ], list: [
      L('68 + 2 = ?   44 + 6 = ?   91 + 9 = ?', '68 + 2 = ?   44 + 6 = ?   91 + 9 = ?', '68 + 2 = ?   44 + 6 = ?   91 + 9 = ?'),
      L('70 − 3 = ?   90 − 9 = ?   20 − 5 = ?', '70 − 3 = ?   90 − 9 = ?   20 − 5 = ?', '70 − 3 = ?   90 − 9 = ?   20 − 5 = ?'),
      L('58 ga qancha qo‘shsak 60 bo‘ladi? 73 ga qancha qo‘shsak 80 bo‘ladi?', 'Сколько прибавить к 58, чтобы получить 60? К 73, чтобы получить 80?', 'How much do we add to 58 to get 60? To 73 to get 80?'),
      L('Avtoturargohda 40 ta joy bor. 4 tasi bo‘sh. Nechta mashina turibdi?', 'На парковке 40 мест. 4 свободны. Сколько машин стоит?', 'A car park has 40 spaces. 4 are empty. How many cars are parked?')
    ], after: [
      L('Javoblar: 70, 50, 100; 67, 81, 15; 2 va 7; 40 − 4 = 36 ta mashina.', 'Ответы: 70, 50, 100; 67, 81, 15; 2 и 7; 40 − 4 = 36 машин.', 'Answers: 70, 50, 100; 67, 81, 15; 2 and 7; 40 − 4 = 36 cars.')
    ] },
    { kind: 'summary', h: L('Xulosa', 'Итог', 'Summary'), list: [
      L('10 ning tarkibini yoddan biling: 1+9, 2+8, 3+7, 4+6, 5+5.', 'Знай состав 10 наизусть: 1+9, 2+8, 3+7, 4+6, 5+5.', 'Know the parts of 10 by heart: 1+9, 2+8, 3+7, 4+6, 5+5.'),
      L('Birliklar 10 bo‘lsa — yangi o‘nlik: 31 + 9 = 40.', 'Если единиц стало 10 — это новый десяток: 31 + 9 = 40.', 'When the ones make 10, that is a new ten: 31 + 9 = 40.'),
      L('Yaxlit sondan ayirganda bitta o‘nlikni maydalaymiz: 30 − 7 = 20 + (10 − 7) = 23.', 'Вычитая из круглого числа, разменяем один десяток: 30 − 7 = 20 + (10 − 7) = 23.', 'To subtract from a round number, break one ten: 30 − 7 = 20 + (10 − 7) = 23.'),
      L('Javobda o‘nliklar bitta kamayadi, birliklar 10 ning tarkibidan.', 'В ответе десятков на один меньше, а единицы — из состава 10.', 'The answer has one ten fewer, and its ones come from the parts of 10.'),
      L('Qo‘shish va ayirish bir-birini tekshiradi: 23 + 7 = 30, 30 − 7 = 23.', 'Сложение и вычитание проверяют друг друга: 23 + 7 = 30, 30 − 7 = 23.', 'Adding and subtracting check each other: 23 + 7 = 30, 30 − 7 = 23.'),
      L('Bobilliklar 60 lik bilan sanagan — soatdagi 60 daqiqa shundan qolgan.', 'Вавилоняне считали шестидесятками — отсюда 60 минут в часе.', 'The Babylonians counted in sixties — that is where the 60 minutes in an hour come from.')
    ] }
  ] });
})(this);
(function (root) {
  'use strict';
  var L = root.NMCurriculum.H.L, T = root.NMTheory, P = '2-1';

  // ---------- t4. 21 + 39 va 50 − 22 ko'rinishidagi hisoblashlar ----------
  T.add(P, 't4', { sections: [
    { kind: 'intro', h: L('Ikki xonali sonlar uchrashadi', 'Встреча двузначных чисел', 'When two-digit numbers meet'), p: [
      L('Maktab kutubxonasiga ikki quti kitob keldi: birida 21 ta, ikkinchisida 39 ta. Kutubxonachi opa so‘radi: «Jami nechta kitob?» Nodira darrov javob berdi: «60 ta! Chunki 20 va 30 — 50, 1 va 9 — yana 10. 50 va 10 — 60.»', 'В школьную библиотеку привезли две коробки книг: в одной 21, в другой 39. Библиотекарь спросила: «Сколько всего книг?» Нодира сразу ответила: «60! Ведь 20 и 30 — это 50, а 1 и 9 — ещё 10. 50 и 10 — 60».', 'Two boxes of books arrived at the school library: one had 21 and the other 39. The librarian asked, “How many books in all?” Nodira answered at once: “60! Because 20 and 30 make 50, and 1 and 9 make another 10. 50 and 10 make 60.”'),
      L('Oldingi mavzularda biz ikki xonali songa yaxlit sonni yoki bir xonali sonni qo‘shgan edik. Endi esa <b>ikkita ikki xonali sonni</b> qo‘shamiz, va birliklar qo‘shilib roppa-rosa 10 bo‘ladi — javob yaxlit son chiqadi.', 'В прошлых темах мы прибавляли к двузначному числу круглое или однозначное. Теперь будем складывать <b>два двузначных числа</b>, причём единицы в сумме дают ровно 10 — ответ получается круглым.', 'In earlier topics we added a round number or a one-digit number to a two-digit number. Now we add <b>two two-digit numbers</b>, and the ones add up to exactly 10, so the answer is a round number.'),
      L('Shuningdek, yaxlit sondan ikki xonali sonni ayirishni o‘rganamiz: 50 − 22. Bu ikki usul do‘konda, sport o‘yinida va kundalik hayotda juda ko‘p kerak bo‘ladi.', 'Ещё мы научимся вычитать двузначное число из круглого: 50 − 22. Эти два приёма очень часто нужны в магазине, в спортивных играх и в жизни.', 'We will also learn to subtract a two-digit number from a round number: 50 − 22. These two tricks are needed all the time in shops, in games and in everyday life.')
    ] },
    { kind: 'def', h: L('Qo‘shiluvchi, yig‘indi, kamayuvchi, ayriluvchi', 'Слагаемое, сумма, уменьшаемое, вычитаемое', 'Addends, sum, and the parts of subtraction'), p: [
      L('Matematikada har bir sonning o‘z nomi bor. Ularni bilish masalalarni tushunishga yordam beradi.', 'В математике у каждого числа в примере есть своё название. Знать их полезно — так легче понимать задачи.', 'In maths every number in a sum has its own name. Knowing these names helps us understand problems.')
    ], list: [
      L('21 + 39 = 60. Bu yerda 21 va 39 — <b>qo‘shiluvchilar</b>, 60 — <b>yig‘indi</b>.', '21 + 39 = 60. Здесь 21 и 39 — <b>слагаемые</b>, 60 — <b>сумма</b>.', '21 + 39 = 60. Here 21 and 39 are the <b>addends</b> and 60 is the <b>sum</b>.'),
      L('50 − 22 = 28. Bu yerda 50 — <b>kamayuvchi</b> (undan olinadi), 22 — <b>ayriluvchi</b> (olinadigan son), 28 — <b>ayirma</b>.', '50 − 22 = 28. Здесь 50 — <b>уменьшаемое</b> (из него вычитают), 22 — <b>вычитаемое</b>, 28 — <b>разность</b>.', '50 − 22 = 28. Here 50 is the number we take from, 22 is the number taken away, and 28 is the <b>difference</b>.'),
      L('<b>Yaxlit yig‘indi</b> — qo‘shiluvchilarning birliklari 10 ni tashkil qilsa hosil bo‘ladi: 21 + 39, 34 + 26, 45 + 15.', '<b>Круглая сумма</b> получается, если единицы слагаемых дают вместе 10: 21 + 39, 34 + 26, 45 + 15.', 'A <b>round sum</b> appears when the ones of the addends make 10 together: 21 + 39, 34 + 26, 45 + 15.')
    ], after: [
      L('Yodda tuting: qo‘shiluvchilar o‘rnini almashtirsak, yig‘indi o‘zgarmaydi: 21 + 39 = 39 + 21. Ayirishda esa o‘rinlarni almashtirib bo‘lmaydi: 50 − 22 va 22 − 50 — butunlay boshqa narsa.', 'Запомни: от перестановки слагаемых сумма не меняется: 21 + 39 = 39 + 21. А в вычитании менять числа местами нельзя: 50 − 22 и 22 − 50 — совсем разные вещи.', 'Remember: swapping the addends does not change the sum: 21 + 39 = 39 + 21. But in subtraction you cannot swap: 50 − 22 and 22 − 50 are completely different.')
    ] },
    { kind: 'history', h: L('Xorazmiy va «al-jabr»', 'Хорезми и «аль-джабр»', 'Al-Khwarizmi and “al-jabr”'), p: [
      L('Taxminan 1200 yil oldin <b>Muhammad ibn Muso al-Xorazmiy</b> Bag‘doddagi «Bilimlar uyi»da ishlagan. U yerda olimlar dunyoning turli joylaridan kelgan kitoblarni o‘qib, tarjima qilishgan. Xorazmiy hisoblashni oson qiladigan qoidalarni yozib qoldirgan.', 'Около 1200 лет назад <b>Мухаммад ибн Муса аль-Хорезми</b> работал в багдадском «Доме мудрости». Там учёные читали и переводили книги со всего света. Хорезми записал правила, которые делают счёт проще.', 'About 1 200 years ago <b>Muhammad ibn Musa al-Khwarizmi</b> worked in the “House of Wisdom” in Baghdad. Scholars there read and translated books from all over the world. Al-Khwarizmi wrote down rules that make calculating easier.'),
      L('Uning bir kitobi nomida «al-jabr» so‘zi bor. Bu so‘z «to‘ldirish, tiklash» degan ma’noni beradi. Bugun butun dunyo «algebra» deb ataydigan fan aynan shu so‘zdan kelib chiqqan! «To‘ldirish» g‘oyasi bizning mavzuda ham bor: 21 ga 9 qo‘shib, uni 30 gacha to‘ldiramiz.', 'В названии одной из его книг есть слово «аль-джабр». Оно означает «восполнение, восстановление». От этого слова произошла наука, которую сегодня весь мир называет «алгеброй»! Идея «восполнения» есть и в нашей теме: прибавляя 9 к 21, мы дополняем его до 30.', 'One of his books has the word “al-jabr” in its title. It means “completing” or “restoring”. The science the whole world now calls “algebra” comes from this word! The idea of “completing” is in our topic too: adding 9 to 21 completes it to 30.'),
      L('Xorazmiy tug‘ilgan Xorazm — hozirgi O‘zbekiston hududida. Uning nomidan kelib chiqqan «algoritm» so‘zini bugun har bir dasturchi va har bir kompyuter biladi.', 'Хорезм, где родился аль-Хорезми, находится на территории нынешнего Узбекистана. Слово «алгоритм», произошедшее от его имени, сегодня знает каждый программист и каждый компьютер.', 'Khorezm, where al-Khwarizmi was born, is in what is now Uzbekistan. The word “algorithm”, which comes from his name, is known today by every programmer and every computer.')
    ] },
    { kind: 'rule', h: L('Ikki qoida', 'Два правила', 'Two rules'), p: [
      L('<b>Qo‘shish (21 + 39).</b> O‘nliklarni alohida, birliklarni alohida qo‘shamiz, keyin natijalarni birlashtiramiz:', '<b>Сложение (21 + 39).</b> Складываем отдельно десятки, отдельно единицы, потом объединяем:', '<b>Adding (21 + 39).</b> Add the tens separately and the ones separately, then put them together:'),
      L('o‘nliklar: 20 + 30 = 50; birliklar: 1 + 9 = 10; jami: 50 + 10 = <b>60</b>.', 'десятки: 20 + 30 = 50; единицы: 1 + 9 = 10; всего: 50 + 10 = <b>60</b>.', 'tens: 20 + 30 = 50; ones: 1 + 9 = 10; total: 50 + 10 = <b>60</b>.'),
      L('<b>Ayirish (50 − 22).</b> Ayriluvchini o‘nlik va birlikka ajratamiz va bo‘laklab ayiramiz: avval o‘nliklarni, keyin birliklarni.', '<b>Вычитание (50 − 22).</b> Раскладываем вычитаемое на десятки и единицы и вычитаем по частям: сначала десятки, потом единицы.', '<b>Subtracting (50 − 22).</b> Split the number being taken away into tens and ones and subtract in parts: tens first, then ones.'),
      L('22 = 20 + 2. 50 − 20 = 30. 30 − 2 = <b>28</b>.', '22 = 20 + 2. 50 − 20 = 30. 30 − 2 = <b>28</b>.', '22 = 20 + 2. 50 − 20 = 30. 30 − 2 = <b>28</b>.')
    ], after: [
      L('Ikkinchi qadam (30 − 2) — oldingi mavzudagi «yaxlit sondan ayirish». Ko‘ryapsizmi, eski bilim yangi masalada yordam beradi!', 'Второй шаг (30 − 2) — это «вычитание из круглого числа» из прошлой темы. Видишь, старые знания помогают в новой задаче!', 'The second step (30 − 2) is “subtracting from a round number” from the last topic. See how old knowledge helps with a new problem!'),
      L('Tekshirish: 28 + 22 = 50. O‘nliklar 20 + 20 = 40, birliklar 8 + 2 = 10, jami 50. To‘g‘ri!', 'Проверка: 28 + 22 = 50. Десятки 20 + 20 = 40, единицы 8 + 2 = 10, всего 50. Верно!', 'Check: 28 + 22 = 50. Tens 20 + 20 = 40, ones 8 + 2 = 10, total 50. Correct!')
    ] },
    { kind: 'steps', h: L('Qadamma-qadam', 'Шаг за шагом', 'Step by step'), p: [
      L('<b>34 + 26 ni hisoblaymiz.</b>', '<b>Вычислим 34 + 26.</b>', '<b>Let’s work out 34 + 26.</b>')
    ], list: [
      L('1-qadam. Har bir sonni ajratamiz: 34 = 30 + 4, 26 = 20 + 6.', 'Шаг 1. Раскладываем числа: 34 = 30 + 4, 26 = 20 + 6.', 'Step 1. Split each number: 34 = 30 + 4, 26 = 20 + 6.'),
      L('2-qadam. O‘nliklarni qo‘shamiz: 30 + 20 = 50.', 'Шаг 2. Складываем десятки: 30 + 20 = 50.', 'Step 2. Add the tens: 30 + 20 = 50.'),
      L('3-qadam. Birliklarni qo‘shamiz: 4 + 6 = 10.', 'Шаг 3. Складываем единицы: 4 + 6 = 10.', 'Step 3. Add the ones: 4 + 6 = 10.'),
      L('4-qadam. Birlashtiramiz: 50 + 10 = 60.', 'Шаг 4. Объединяем: 50 + 10 = 60.', 'Step 4. Combine: 50 + 10 = 60.')
    ], after: [
      L('<b>70 − 34 ni hisoblaymiz.</b> 1) Ayriluvchini ajratamiz: 34 = 30 + 4. 2) O‘nliklarni ayiramiz: 70 − 30 = 40. 3) Birliklarni ayiramiz: 40 − 4 = 36. Javob: 36.', '<b>Вычислим 70 − 34.</b> 1) Раскладываем вычитаемое: 34 = 30 + 4. 2) Вычитаем десятки: 70 − 30 = 40. 3) Вычитаем единицы: 40 − 4 = 36. Ответ: 36.', '<b>Let’s work out 70 − 34.</b> 1) Split the number taken away: 34 = 30 + 4. 2) Subtract the tens: 70 − 30 = 40. 3) Subtract the ones: 40 − 4 = 36. Answer: 36.'),
      L('Bu usulni «bo‘laklab hisoblash» deyishadi. Katta misolni kichik va oson qadamlarga bo‘lamiz — xuddi Xorazmiy o‘rgatgan algoritm kabi.', 'Этот приём называют «счётом по частям». Большой пример делим на маленькие лёгкие шаги — как в алгоритме, которому учил аль-Хорезми.', 'This trick is called “calculating in parts”. We split a big sum into small, easy steps — just like an algorithm of the kind al-Khwarizmi taught.')
    ] },
    { kind: 'example', h: L('Yechilgan namunalar', 'Разобранные примеры', 'Worked examples'), p: [
      L('Avval o‘zingiz yechib ko‘ring, keyin javobni tekshiring.', 'Сначала реши сам, потом проверь ответ.', 'Solve each one yourself first, then check the answer.')
    ], ex: [
      { q: L('45 + 15 = ?', '45 + 15 = ?', '45 + 15 = ?'), s: L('O‘nliklar: 40 + 10 = 50. Birliklar: 5 + 5 = 10. Jami: 50 + 10 = <b>60</b>.', 'Десятки: 40 + 10 = 50. Единицы: 5 + 5 = 10. Всего: 50 + 10 = <b>60</b>.', 'Tens: 40 + 10 = 50. Ones: 5 + 5 = 10. Total: 50 + 10 = <b>60</b>.') },
      { q: L('57 + 33 = ?', '57 + 33 = ?', '57 + 33 = ?'), s: L('O‘nliklar: 50 + 30 = 80. Birliklar: 7 + 3 = 10. Jami: <b>90</b>.', 'Десятки: 50 + 30 = 80. Единицы: 7 + 3 = 10. Всего: <b>90</b>.', 'Tens: 50 + 30 = 80. Ones: 7 + 3 = 10. Total: <b>90</b>.') },
      { q: L('60 − 25 = ?', '60 − 25 = ?', '60 − 25 = ?'), s: L('60 − 20 = 40, keyin 40 − 5 = <b>35</b>. Tekshiramiz: 35 + 25 = 60.', '60 − 20 = 40, потом 40 − 5 = <b>35</b>. Проверка: 35 + 25 = 60.', '60 − 20 = 40, then 40 − 5 = <b>35</b>. Check: 35 + 25 = 60.') },
      { q: L('90 − 47 = ?', '90 − 47 = ?', '90 − 47 = ?'), s: L('90 − 40 = 50, keyin 50 − 7 = <b>43</b>. Tekshiramiz: 43 + 47 → 80 + 10 = 90.', '90 − 40 = 50, потом 50 − 7 = <b>43</b>. Проверка: 43 + 47 → 80 + 10 = 90.', '90 − 40 = 50, then 50 − 7 = <b>43</b>. Check: 43 + 47 → 80 + 10 = 90.') },
      { q: L('Do‘konda 80 ta daftar bor edi. 36 tasi sotildi. Nechta qoldi?', 'В магазине было 80 тетрадей. Продали 36. Сколько осталось?', 'A shop had 80 notebooks. 36 were sold. How many are left?'), s: L('80 − 36: 80 − 30 = 50, 50 − 6 = 44. Javob: <b>44 ta daftar</b>.', '80 − 36: 80 − 30 = 50, 50 − 6 = 44. Ответ: <b>44 тетради</b>.', '80 − 36: 80 − 30 = 50, 50 − 6 = 44. Answer: <b>44 notebooks</b>.') }
    ] },
    { kind: 'table', h: L('Yaxlit yig‘indilar jadvali', 'Таблица круглых сумм', 'A table of round sums'), p: [
      L('Har qatorda qo‘shish misoli va unga teskari ayirish misoli bor. Birliklar doim 10 ni tashkil qilishiga e’tibor bering.', 'В каждой строке — пример на сложение и обратный ему пример на вычитание. Обрати внимание: единицы всегда дают 10.', 'Each row has an addition and the matching subtraction. Notice that the ones always make 10.')
    ], table: { head: [L('Qo‘shish', 'Сложение', 'Addition'), L('O‘nliklar', 'Десятки', 'Tens'), L('Birliklar', 'Единицы', 'Ones'), L('Teskari ayirish', 'Обратное вычитание', 'Reverse subtraction')], rows: [
      ['21 + 39 = 60', '20 + 30 = 50', '1 + 9 = 10', '60 − 39 = 21'],
      ['34 + 26 = 60', '30 + 20 = 50', '4 + 6 = 10', '60 − 26 = 34'],
      ['42 + 18 = 60', '40 + 10 = 50', '2 + 8 = 10', '60 − 18 = 42'],
      ['55 + 25 = 80', '50 + 20 = 70', '5 + 5 = 10', '80 − 25 = 55'],
      ['63 + 27 = 90', '60 + 20 = 80', '3 + 7 = 10', '90 − 27 = 63'],
      ['28 + 72 = 100', '20 + 70 = 90', '8 + 2 = 10', '100 − 72 = 28']
    ] }, after: [
      L('Oxirgi qatorga qarang: 28 + 72 = 100. Ikki xonali sonlar qo‘shilib yuzni ham berishi mumkin!', 'Посмотри на последнюю строку: 28 + 72 = 100. Сумма двузначных чисел может дать даже сто!', 'Look at the last row: 28 + 72 = 100. Two-digit numbers can even add up to one hundred!')
    ] },
    { kind: 'mistake', h: L('Tipik xatolar', 'Типичные ошибки', 'Common mistakes'), p: [
      L('Bu misollarda eng ko‘p uchraydigan xatolar:', 'Самые частые ошибки в таких примерах:', 'The most common mistakes in these sums:')
    ], list: [
      L('<b>Birliklardan chiqqan o‘nlikni yo‘qotish.</b> 21 + 39 = 50? Birliklar 1 + 9 = 10 — bu yana bitta o‘nlik! To‘g‘risi 60.', '<b>Терять десяток из единиц.</b> 21 + 39 = 50? Единицы 1 + 9 = 10 — это ещё один десяток! Правильно 60.', '<b>Losing the ten from the ones.</b> 21 + 39 = 50? The ones give 1 + 9 = 10 — another ten! The right answer is 60.'),
      L('<b>Raqamlarni yonma-yon yozish.</b> 21 + 39 = 510? «5 o‘nlik va 10 birlik» degani 510 emas, 60.', '<b>Писать цифры рядом.</b> 21 + 39 = 510? «5 десятков и 10 единиц» — это не 510, а 60.', '<b>Writing the parts side by side.</b> 21 + 39 = 510? “5 tens and 10 ones” is not 510 but 60.'),
      L('<b>Ayirishda birlikni ayirmay qo‘yish.</b> 50 − 22 = 30? Faqat 20 ni ayirdingiz, yana 2 ni ayirish kerak: 28.', '<b>Забыть вычесть единицы.</b> 50 − 22 = 30? Вычли только 20, нужно ещё вычесть 2: 28.', '<b>Forgetting to subtract the ones.</b> 50 − 22 = 30? You only took away 20; you must take away 2 more: 28.'),
      L('<b>«Kattadan kichikni» ayirish.</b> 50 − 22 da birliklarda 0 − 2 bo‘lmagani uchun «2 − 0 = 2» deb 32 yozish. Bu noto‘g‘ri! 30 − 2 = 28.', '<b>Вычитать «из большего меньшее».</b> В 50 − 22 в единицах 0 − 2 нельзя, и пишут «2 − 0 = 2», получая 32. Это неверно! 30 − 2 = 28.', '<b>Subtracting “small from big” in the ones.</b> In 50 − 22, 0 − 2 is impossible, so some write “2 − 0 = 2” and get 32. Wrong! 30 − 2 = 28.'),
      L('<b>Tekshirmaslik.</b> Ayirma bilan ayriluvchini qo‘shing — kamayuvchi chiqishi kerak.', '<b>Не проверять.</b> Сложи разность и вычитаемое — должно получиться уменьшаемое.', '<b>Not checking.</b> Add the difference to the number taken away — you must get the starting number.')
    ] },
    { kind: 'life', h: L('Hayotda qayerda kerak?', 'Где это нужно в жизни?', 'Where is this used in life?'), p: [
      L('<b>Do‘konda.</b> Daftar 21 ming, ruchka to‘plami 39 ming so‘m. Jami: 60 ming. Siz 100 ming berdingiz — qaytim 40 ming. Hisob oson, chunki yig‘indi yaxlit!', '<b>В магазине.</b> Тетради стоят 21 тысячу, набор ручек — 39 тысяч сумов. Всего 60 тысяч. Ты дал 100 тысяч — сдача 40 тысяч. Считать легко, потому что сумма круглая!', '<b>In a shop.</b> Notebooks cost 21 thousand and a set of pens 39 thousand som. Total: 60 thousand. You pay 100 thousand — change is 40 thousand. Easy, because the sum is round!'),
      L('<b>Sportda.</b> Futbol jamoasi mavsumda 50 ta gol urishni maqsad qildi. Hozircha 22 ta urdi. Yana nechta kerak? 50 − 22 = 28 ta gol.', '<b>В спорте.</b> Футбольная команда хочет забить за сезон 50 голов. Пока забила 22. Сколько ещё нужно? 50 − 22 = 28 голов.', '<b>In sport.</b> A football team wants to score 50 goals this season. So far it has 22. How many more? 50 − 22 = 28 goals.'),
      L('<b>Sayohatda.</b> Toshkentdan bog‘gacha 70 km. Biz 45 km yo‘l bosdik. Qancha qoldi? 70 − 45: 70 − 40 = 30, 30 − 5 = 25 km.', '<b>В поездке.</b> От Ташкента до дачи 70 км. Мы проехали 45 км. Сколько осталось? 70 − 45: 70 − 40 = 30, 30 − 5 = 25 км.', '<b>On a trip.</b> It is 70 km from Tashkent to the dacha. We have driven 45 km. How far is left? 70 − 45: 70 − 40 = 30, 30 − 5 = 25 km.'),
      L('<b>Sinfda.</b> 2-«A» sinfda 26 o‘quvchi, 2-«B» da 24 o‘quvchi. Ekskursiyaga jami 50 bola boradi — bitta katta avtobus yetadi.', '<b>В классе.</b> Во 2 «А» 26 учеников, во 2 «Б» — 24. На экскурсию едут всего 50 детей — хватит одного большого автобуса.', '<b>At school.</b> Class 2A has 26 pupils and 2B has 24. In all 50 children go on the trip — one big bus is enough.')
    ] },
    { kind: 'fact', h: L('Qiziqarli faktlar', 'Интересные факты', 'Fun facts'), list: [
      L('Shaxmat taxtasida 64 ta katak bor, har tomonda 16 tadan dona. 16 + 16 = 32 ta dona, 64 − 32 = 32 ta katak bo‘sh qoladi.', 'На шахматной доске 64 клетки, у каждой стороны по 16 фигур. 16 + 16 = 32 фигуры, и 64 − 32 = 32 клетки остаются пустыми.', 'A chessboard has 64 squares and each side has 16 pieces. 16 + 16 = 32 pieces, so 64 − 32 = 32 squares stay empty.'),
      L('Katta odamda 32 ta tish bor, bolada esa 20 ta sut tishi. Farqi: 32 − 20 = 12 ta tish keyinroq o‘sib chiqadi.', 'У взрослого человека 32 зуба, а у ребёнка 20 молочных. Разница: 32 − 20 = 12 зубов вырастут позже.', 'An adult has 32 teeth, while a child has 20 milk teeth. The difference: 32 − 20 = 12 teeth grow later.'),
      L('Yilning 52 haftasi bor. Yozgi ta’til taxminan 13 hafta davom etadi.', 'В году 52 недели. Летние каникулы длятся примерно 13 недель.', 'A year has 52 weeks. The summer holidays last about 13 weeks.'),
      L('Tovuq tuxumdan 21 kunda chiqadi, o‘rdak esa taxminan 28 kunda. O‘rdak 7 kun ko‘proq kutadi!', 'Цыплёнок вылупляется через 21 день, а утёнок — примерно через 28. Утёнок ждёт на 7 дней дольше!', 'A chick hatches after 21 days and a duckling after about 28. The duckling waits 7 days longer!')
    ] },
    { kind: 'practice', h: L('O‘ylab ko‘ring', 'Подумай', 'Think about it'), p: [
      L('Bo‘laklab hisoblang va javobni teskari amal bilan tekshiring.', 'Считай по частям и проверяй ответ обратным действием.', 'Calculate in parts and check the answer with the opposite operation.')
    ], list: [
      L('36 + 44 = ?   19 + 41 = ?   53 + 37 = ?', '36 + 44 = ?   19 + 41 = ?   53 + 37 = ?', '36 + 44 = ?   19 + 41 = ?   53 + 37 = ?'),
      L('40 − 13 = ?   80 − 52 = ?   100 − 35 = ?', '40 − 13 = ?   80 − 52 = ?   100 − 35 = ?', '40 − 13 = ?   80 − 52 = ?   100 − 35 = ?'),
      L('67 ga qaysi ikki xonali sonni qo‘shsak, 90 chiqadi?', 'Какое двузначное число нужно прибавить к 67, чтобы получить 90?', 'Which two-digit number added to 67 gives 90?'),
      L('Bog‘da 70 tup daraxt bor. 38 tasi olma, qolgani o‘rik. Nechta o‘rik?', 'В саду 70 деревьев. 38 из них — яблони, остальные — абрикосы. Сколько абрикосов?', 'An orchard has 70 trees. 38 are apple trees and the rest are apricots. How many apricot trees?')
    ], after: [
      L('Javoblar: 80, 60, 90; 27, 28, 65; 23; 70 − 38 = 32 tup o‘rik.', 'Ответы: 80, 60, 90; 27, 28, 65; 23; 70 − 38 = 32 абрикоса.', 'Answers: 80, 60, 90; 27, 28, 65; 23; 70 − 38 = 32 apricot trees.')
    ] },
    { kind: 'summary', h: L('Xulosa', 'Итог', 'Summary'), list: [
      L('Ikki xonali sonlarni qo‘shishda o‘nliklarni va birliklarni alohida qo‘shamiz.', 'Складывая двузначные числа, складываем отдельно десятки и единицы.', 'To add two-digit numbers, add the tens and the ones separately.'),
      L('Birliklar 10 bo‘lsa, ular yangi o‘nlik beradi: 21 + 39 = 50 + 10 = 60.', 'Если единицы дают 10, получается новый десяток: 21 + 39 = 50 + 10 = 60.', 'If the ones make 10, they give a new ten: 21 + 39 = 50 + 10 = 60.'),
      L('Yaxlit sondan ayirishda ayriluvchini bo‘laklaymiz: 50 − 22 = 50 − 20 − 2 = 28.', 'Вычитая из круглого числа, раскладываем вычитаемое: 50 − 22 = 50 − 20 − 2 = 28.', 'To subtract from a round number, split the number taken away: 50 − 22 = 50 − 20 − 2 = 28.'),
      L('Avval o‘nliklarni, keyin birliklarni ayiramiz.', 'Сначала вычитаем десятки, потом единицы.', 'Subtract the tens first, then the ones.'),
      L('Tekshirish: ayirma + ayriluvchi = kamayuvchi.', 'Проверка: разность + вычитаемое = уменьшаемое.', 'Check: difference + number taken away = starting number.'),
      L('«Algebra» va «algoritm» so‘zlari vatandoshimiz al-Xorazmiy bilan bog‘liq.', 'Слова «алгебра» и «алгоритм» связаны с нашим земляком аль-Хорезми.', 'The words “algebra” and “algorithm” are linked to our countryman al-Khwarizmi.')
    ] }
  ] });

  // ---------- t5. 25 + 6 va 6 + 25 ko'rinishidagi qo'shish ----------
  T.add(P, 't5', { sections: [
    { kind: 'intro', h: L('O‘nlikdan o‘tib qo‘shamiz', 'Сложение с переходом через десяток', 'Adding across a ten'), p: [
      L('Jasur yong‘oq terdi. Savatchasida 25 ta yong‘oq bor edi, yana 6 ta topdi. Birliklarni qo‘shsa: 5 + 6 = 11. Bu 10 dan ko‘p! Jasur o‘yladi: «11 ta birlik — bu 1 ta o‘nlik va 1 ta birlik. Demak, 2 ta o‘nlik va yana 1 ta — 3 ta o‘nlik va 1 ta birlik. 31 ta yong‘oq!»', 'Жасур собирал орехи. В корзинке было 25 орехов, он нашёл ещё 6. Складывает единицы: 5 + 6 = 11. Это больше 10! Жасур подумал: «11 единиц — это 1 десяток и 1 единица. Значит, 2 десятка и ещё 1 — 3 десятка и 1 единица. 31 орех!»', 'Jasur was collecting walnuts. His basket had 25 and he found 6 more. Adding the ones: 5 + 6 = 11. That is more than 10! Jasur thought: “11 ones are 1 ten and 1 one. So 2 tens plus 1 more is 3 tens and 1 one. 31 walnuts!”'),
      L('Bu mavzuda biz <b>o‘nlikdan o‘tib qo‘shishni</b> o‘rganamiz. Bu 2-sinf matematikasining eng muhim ko‘nikmalaridan biri. Bitta qulay usul bor: avval yaxlit songacha to‘ldiramiz, keyin qolganini qo‘shamiz.', 'В этой теме мы научимся <b>складывать с переходом через десяток</b>. Это одно из самых важных умений во втором классе. Есть удобный приём: сначала дополняем до круглого числа, потом прибавляем остаток.', 'In this topic we learn to <b>add across a ten</b>. It is one of the most important skills in Grade 2. There is a handy trick: first make up to a round number, then add what is left.'),
      L('Yana bir sir: 6 + 25 ni hisoblash kerak bo‘lsa, sonlar o‘rnini almashtiramiz — 25 + 6. Javob o‘zgarmaydi, hisoblash esa osonlashadi.', 'И ещё один секрет: если нужно сосчитать 6 + 25, поменяем числа местами — 25 + 6. Ответ не изменится, а считать станет проще.', 'One more secret: if you need 6 + 25, swap the numbers — 25 + 6. The answer stays the same and it is easier to work out.')
    ] },
    { kind: 'def', h: L('O‘nlikdan o‘tish nima?', 'Что такое переход через десяток?', 'What does crossing a ten mean?'), p: [
      L('<b>O‘nlikdan o‘tish</b> — qo‘shish natijasida sonlar keyingi o‘nlikka «sakrab» o‘tishi. 25 yigirmalikda turibdi, 31 esa o‘ttizlikda. Biz 30 chegarasidan o‘tdik.', '<b>Переход через десяток</b> — когда при сложении число «перепрыгивает» в следующий десяток. 25 находится в третьем десятке (двадцатки), а 31 — уже в тридцатках. Мы перешли границу 30.', '<b>Crossing a ten</b> means that adding makes a number “jump” into the next ten. 25 is in the twenties, but 31 is in the thirties. We crossed the 30 border.')
    ], list: [
      L('O‘nlikdan o‘tish <b>bo‘ladi</b>, agar birliklar yig‘indisi 10 dan katta bo‘lsa: 25 + 6 (5 + 6 = 11).', 'Переход <b>есть</b>, если сумма единиц больше 10: 25 + 6 (5 + 6 = 11).', 'There <b>is</b> a crossing when the ones add up to more than 10: 25 + 6 (5 + 6 = 11).'),
      L('O‘nlikdan o‘tish <b>bo‘lmaydi</b>, agar birliklar yig‘indisi 10 dan kichik bo‘lsa: 25 + 3 (5 + 3 = 8).', 'Перехода <b>нет</b>, если сумма единиц меньше 10: 25 + 3 (5 + 3 = 8).', 'There is <b>no</b> crossing when the ones add up to less than 10: 25 + 3 (5 + 3 = 8).'),
      L('<b>Qo‘shiluvchini bo‘laklash</b> — qo‘shiladigan sonni ikki qismga bo‘lish: 6 = 5 + 1. Birinchi qism yaxlit songacha to‘ldiradi, ikkinchisi — qoldiq.', '<b>Разложение слагаемого</b> — разбиваем прибавляемое число на две части: 6 = 5 + 1. Первая часть дополняет до круглого, вторая — остаток.', '<b>Splitting the addend</b> means breaking the number we add into two parts: 6 = 5 + 1. The first part makes up to the round number; the second is what is left.'),
      L('<b>O‘rin almashtirish xossasi</b>: a + b = b + a. 6 + 25 = 25 + 6.', '<b>Переместительное свойство</b>: a + b = b + a. 6 + 25 = 25 + 6.', '<b>The swap (commutative) property</b>: a + b = b + a. 6 + 25 = 25 + 6.')
    ] },
    { kind: 'history', h: L('Qadimgi Misr va sakrovchi sonlar', 'Древний Египет и «прыгающие» числа', 'Ancient Egypt and jumping numbers'), p: [
      L('Qadimgi Misrda, bundan 4000 yildan ko‘proq vaqt oldin, sonlar rasmlar bilan yozilgan. Bir — tayoqcha, o‘n — taqaga o‘xshash belgi, yuz — o‘ralgan arqon. 25 ni yozish uchun ikkita taqa va beshta tayoqcha chizilgan.', 'В Древнем Египте, больше 4000 лет назад, числа записывали картинками. Единица — палочка, десяток — знак, похожий на подкову, сотня — свёрнутая верёвка. Чтобы записать 25, рисовали две подковы и пять палочек.', 'In ancient Egypt, more than 4 000 years ago, numbers were written with pictures. One was a stick, ten was a sign like a horseshoe, and a hundred was a coiled rope. To write 25 you drew two horseshoes and five sticks.'),
      L('25 ga 6 qo‘shilsa, misrlik kotib 11 ta tayoqchani ko‘rgan. U 10 tasini o‘chirib, o‘rniga bitta taqa chizgan! Natijada uchta taqa va bitta tayoqcha — 31. Bu aynan bizning «o‘nlikdan o‘tish»imiz, faqat rasmda.', 'Прибавляя к 25 число 6, египетский писец видел 11 палочек. Он стирал 10 из них и рисовал вместо них одну подкову! Получалось три подковы и одна палочка — 31. Это и есть наш «переход через десяток», только в картинках.', 'Adding 6 to 25, an Egyptian scribe saw 11 sticks. He rubbed out 10 of them and drew one horseshoe instead! The result was three horseshoes and one stick — 31. That is exactly our “crossing a ten”, only in pictures.'),
      L('Bu haqda biz <b>Rind papirusi</b>dan bilamiz. U taxminan 3600 yil oldin yozilgan va unda 80 dan ortiq matematik masala bor. Hozir bu papirus Londondagi Britaniya muzeyida saqlanadi.', 'Об этом мы знаем из <b>папируса Ринда</b>. Он написан около 3600 лет назад, и в нём больше 80 математических задач. Сейчас этот папирус хранится в Британском музее в Лондоне.', 'We know this from the <b>Rhind Papyrus</b>. It was written about 3 600 years ago and contains more than 80 maths problems. Today it is kept in the British Museum in London.')
    ] },
    { kind: 'rule', h: L('Qoida: avval yaxlit songacha', 'Правило: сначала до круглого', 'The rule: first to the round number'), p: [
      L('Ikki xonali songa bir xonali sonni o‘nlikdan o‘tib qo‘shish uchun:', 'Чтобы прибавить к двузначному числу однозначное с переходом через десяток:', 'To add a one-digit number to a two-digit number across a ten:')
    ], list: [
      L('Ikki xonali son yaxlit songacha qancha yetmasligini toping: 25 ga 5 yetmaydi (25 + 5 = 30).', 'Найди, сколько не хватает двузначному числу до круглого: 25 не хватает 5 (25 + 5 = 30).', 'Find how much the two-digit number needs to reach a round number: 25 needs 5 (25 + 5 = 30).'),
      L('Qo‘shiladigan sonni ikki qismga bo‘ling: 6 = 5 + 1.', 'Разложи прибавляемое число на две части: 6 = 5 + 1.', 'Split the number being added into two parts: 6 = 5 + 1.'),
      L('Avval birinchi qismni qo‘shing: 25 + 5 = 30.', 'Прибавь сначала первую часть: 25 + 5 = 30.', 'Add the first part: 25 + 5 = 30.'),
      L('Keyin qoldiqni qo‘shing: 30 + 1 = 31.', 'Потом прибавь остаток: 30 + 1 = 31.', 'Then add the rest: 30 + 1 = 31.')
    ], after: [
      L('Qisqacha yozuv: 25 + 6 = 25 + 5 + 1 = 31.', 'Краткая запись: 25 + 6 = 25 + 5 + 1 = 31.', 'Short form: 25 + 6 = 25 + 5 + 1 = 31.'),
      L('Agar bir xonali son birinchi tursa (6 + 25), avval o‘rinlarni almashtiramiz: 25 + 6. Kichik sonni katta songa qo‘shish har doim osonroq.', 'Если однозначное число стоит первым (6 + 25), сначала поменяем местами: 25 + 6. Прибавлять меньшее к большему всегда легче.', 'If the one-digit number comes first (6 + 25), swap them first: 25 + 6. Adding the smaller number to the bigger one is always easier.')
    ] },
    { kind: 'steps', h: L('Qadamma-qadam: 47 + 8', 'Шаг за шагом: 47 + 8', 'Step by step: 47 + 8'), p: [
      L('Keling, 47 + 8 ni birga hisoblaymiz:', 'Давай вместе вычислим 47 + 8:', 'Let’s work out 47 + 8 together:')
    ], list: [
      L('1-qadam. 47 dan keyingi yaxlit son — 50. 47 ga 3 yetmaydi.', 'Шаг 1. Следующее круглое число после 47 — 50. Числу 47 не хватает 3.', 'Step 1. The next round number after 47 is 50. 47 needs 3.'),
      L('2-qadam. 8 ni bo‘lamiz: 8 = 3 + 5.', 'Шаг 2. Раскладываем 8: 8 = 3 + 5.', 'Step 2. Split 8: 8 = 3 + 5.'),
      L('3-qadam. 47 + 3 = 50.', 'Шаг 3. 47 + 3 = 50.', 'Step 3. 47 + 3 = 50.'),
      L('4-qadam. 50 + 5 = 55. Javob: 55.', 'Шаг 4. 50 + 5 = 55. Ответ: 55.', 'Step 4. 50 + 5 = 55. Answer: 55.')
    ], after: [
      L('Boshqa usul ham bor: birliklarni qo‘shamiz 7 + 8 = 15, ya’ni 1 o‘nlik va 5 birlik. O‘nliklar 4 + 1 = 5. Javob yana 55. Qaysi usul sizga qulay bo‘lsa, shuni tanlang.', 'Есть и другой способ: складываем единицы 7 + 8 = 15, то есть 1 десяток и 5 единиц. Десятков 4 + 1 = 5. Ответ снова 55. Выбирай способ, который тебе удобнее.', 'There is another way too: add the ones, 7 + 8 = 15, that is 1 ten and 5 ones. Tens: 4 + 1 = 5. The answer is 55 again. Choose whichever method suits you.'),
      L('Sonlar o‘qida bu ikki «sakrash»ga o‘xshaydi: 47 dan 50 gacha kichik sakrash (3), keyin 50 dan 55 gacha (5).', 'На числовом луче это похоже на два «прыжка»: маленький от 47 до 50 (3), потом от 50 до 55 (5).', 'On a number line this looks like two “jumps”: a small one from 47 to 50 (3), then from 50 to 55 (5).')
    ] },
    { kind: 'example', h: L('Yechilgan namunalar', 'Разобранные примеры', 'Worked examples'), p: [
      L('Har bir misolda: yaxlit songacha qancha? Qancha qoladi?', 'В каждом примере: сколько до круглого? Сколько остаётся?', 'In each sum: how much to the round number? How much is left?')
    ], ex: [
      { q: L('38 + 5 = ?', '38 + 5 = ?', '38 + 5 = ?'), s: L('38 ga 2 yetmaydi. 5 = 2 + 3. 38 + 2 = 40, 40 + 3 = <b>43</b>.', 'До 40 не хватает 2. 5 = 2 + 3. 38 + 2 = 40, 40 + 3 = <b>43</b>.', '38 needs 2 to reach 40. 5 = 2 + 3. 38 + 2 = 40, 40 + 3 = <b>43</b>.') },
      { q: L('69 + 3 = ?', '69 + 3 = ?', '69 + 3 = ?'), s: L('69 ga 1 yetmaydi. 3 = 1 + 2. 69 + 1 = 70, 70 + 2 = <b>72</b>.', 'До 70 не хватает 1. 3 = 1 + 2. 69 + 1 = 70, 70 + 2 = <b>72</b>.', '69 needs 1. 3 = 1 + 2. 69 + 1 = 70, 70 + 2 = <b>72</b>.') },
      { q: L('8 + 36 = ?', '8 + 36 = ?', '8 + 36 = ?'), s: L('O‘rin almashtiramiz: 36 + 8. 36 ga 4 yetmaydi, 8 = 4 + 4. 36 + 4 = 40, 40 + 4 = <b>44</b>.', 'Переставим: 36 + 8. До 40 не хватает 4, 8 = 4 + 4. 36 + 4 = 40, 40 + 4 = <b>44</b>.', 'Swap: 36 + 8. 36 needs 4, 8 = 4 + 4. 36 + 4 = 40, 40 + 4 = <b>44</b>.') },
      { q: L('74 + 9 = ?', '74 + 9 = ?', '74 + 9 = ?'), s: L('74 ga 6 yetmaydi. 9 = 6 + 3. 74 + 6 = 80, 80 + 3 = <b>83</b>.', 'До 80 не хватает 6. 9 = 6 + 3. 74 + 6 = 80, 80 + 3 = <b>83</b>.', '74 needs 6. 9 = 6 + 3. 74 + 6 = 80, 80 + 3 = <b>83</b>.') },
      { q: L('Avtobusda 57 yo‘lovchi bor edi. Bekatda yana 7 kishi chiqdi. Nechta yo‘lovchi bo‘ldi?', 'В автобусе было 57 пассажиров. На остановке вошли ещё 7. Сколько стало?', 'A bus had 57 passengers. At a stop 7 more got on. How many now?'), s: L('57 + 7. 57 ga 3 yetmaydi, 7 = 3 + 4. 57 + 3 = 60, 60 + 4 = <b>64 yo‘lovchi</b>.', '57 + 7. До 60 не хватает 3, 7 = 3 + 4. 57 + 3 = 60, 60 + 4 = <b>64 пассажира</b>.', '57 + 7. 57 needs 3, 7 = 3 + 4. 57 + 3 = 60, 60 + 4 = <b>64 passengers</b>.') }
    ] },
    { kind: 'table', h: L('Bo‘laklash jadvali', 'Таблица разложения', 'The splitting table'), p: [
      L('Jadvalda qo‘shiladigan son qanday bo‘laklanishi ko‘rsatilgan. Birinchi qism — yaxlit songacha, ikkinchisi — qoldiq.', 'В таблице показано, как раскладывается прибавляемое число. Первая часть — до круглого, вторая — остаток.', 'The table shows how the added number is split. The first part reaches the round number; the second is what is left.')
    ], table: { head: [L('Misol', 'Пример', 'Sum'), L('Bo‘laklash', 'Разложение', 'Split'), L('Yaxlit songacha', 'До круглого', 'To the ten'), L('Javob', 'Ответ', 'Answer')], rows: [
      ['25 + 6', '5 + 1', '25 + 5 = 30', '31'],
      ['47 + 5', '3 + 2', '47 + 3 = 50', '52'],
      ['18 + 7', '2 + 5', '18 + 2 = 20', '25'],
      ['66 + 8', '4 + 4', '66 + 4 = 70', '74'],
      ['89 + 4', '1 + 3', '89 + 1 = 90', '93'],
      ['93 + 7', '7 + 0', '93 + 7 = 100', '100']
    ] }, after: [
      L('Oxirgi qatorda qoldiq 0 — bunday holat oldingi mavzudagi «yaxlit songacha qo‘shish»ga o‘xshaydi.', 'В последней строке остаток 0 — это как «сложение до круглого числа» из прошлой темы.', 'In the last row the remainder is 0 — just like “adding up to a ten” from an earlier topic.')
    ] },
    { kind: 'mistake', h: L('Tipik xatolar', 'Типичные ошибки', 'Common mistakes'), p: [
      L('O‘nlikdan o‘tishda ko‘p uchraydigan xatolar:', 'Частые ошибки при переходе через десяток:', 'Common mistakes when crossing a ten:')
    ], list: [
      L('<b>O‘nlikni unutish.</b> 25 + 6 = 21? Birliklar 11 bo‘ldi, lekin o‘nlik qo‘shilmadi. To‘g‘risi 31.', '<b>Забыть десяток.</b> 25 + 6 = 21? Единиц стало 11, но десяток не прибавили. Правильно 31.', '<b>Forgetting the ten.</b> 25 + 6 = 21? The ones made 11 but the ten was not added. The right answer is 31.'),
      L('<b>211 deb yozish.</b> 2 ta o‘nlik va 11 ta birlik — bu 211 emas! 11 birlik = 1 o‘nlik + 1 birlik, javob 31.', '<b>Писать 211.</b> 2 десятка и 11 единиц — это не 211! 11 единиц = 1 десяток + 1 единица, ответ 31.', '<b>Writing 211.</b> 2 tens and 11 ones is not 211! 11 ones = 1 ten + 1 one, so the answer is 31.'),
      L('<b>Noto‘g‘ri bo‘laklash.</b> 47 + 8 da 8 ni 5 + 3 deb bo‘lish va 47 + 5 = 52 qilish. Yaxlit songacha 3 kerak edi: 8 = 3 + 5.', '<b>Неверное разложение.</b> В 47 + 8 разложить 8 как 5 + 3 и получить 47 + 5 = 52. До круглого нужно было 3: 8 = 3 + 5.', '<b>Splitting wrongly.</b> In 47 + 8, splitting 8 as 5 + 3 and doing 47 + 5 = 52. To reach the round number you needed 3: 8 = 3 + 5.'),
      L('<b>6 + 25 ni o‘nliklarga qo‘shish.</b> 6 + 25 = 85? 6 — bu birliklar, o‘nliklar emas. O‘rinlarni almashtiring: 25 + 6 = 31.', '<b>Прибавлять 6 к десяткам в 6 + 25.</b> 6 + 25 = 85? 6 — это единицы, а не десятки. Переставь: 25 + 6 = 31.', '<b>Adding 6 to the tens in 6 + 25.</b> 6 + 25 = 85? 6 is ones, not tens. Swap: 25 + 6 = 31.'),
      L('<b>Qoldiqni unutish.</b> 38 + 5: 38 + 2 = 40 va to‘xtash. Yana 3 qoldi: 43.', '<b>Забыть остаток.</b> 38 + 5: 38 + 2 = 40 и остановиться. Осталось ещё 3: 43.', '<b>Forgetting the rest.</b> 38 + 5: doing 38 + 2 = 40 and stopping. There are 3 more to add: 43.')
    ] },
    { kind: 'life', h: L('Hayotda qayerda kerak?', 'Где это нужно в жизни?', 'Where is this used in life?'), p: [
      L('<b>Yoshni hisoblash.</b> Opangiz 16 yoshda. 7 yildan keyin necha yoshda bo‘ladi? 16 + 4 = 20, 20 + 3 = 23 yosh.', '<b>Считаем возраст.</b> Сестре 16 лет. Сколько ей будет через 7 лет? 16 + 4 = 20, 20 + 3 = 23 года.', '<b>Working out ages.</b> Your sister is 16. How old will she be in 7 years? 16 + 4 = 20, 20 + 3 = 23.'),
      L('<b>Do‘konda.</b> Savatchangizda 45 ming so‘mlik mahsulot bor, yana 8 ming so‘mlik sharbat qo‘shdingiz: 45 + 5 = 50, 50 + 3 = 53 ming so‘m.', '<b>В магазине.</b> В корзине товаров на 45 тысяч сумов, ты добавил сок за 8 тысяч: 45 + 5 = 50, 50 + 3 = 53 тысячи.', '<b>In a shop.</b> Your basket holds 45 thousand som of goods and you add juice for 8 thousand: 45 + 5 = 50, 50 + 3 = 53 thousand.'),
      L('<b>Sportda.</b> Basketbolchi o‘yinda 28 ochko to‘pladi, oxirgi daqiqada yana 3 ochkoli to‘p tashladi: 28 + 2 = 30, 30 + 1 = 31 ochko.', '<b>В спорте.</b> Баскетболист набрал за игру 28 очков, а в последнюю минуту забросил трёхочковый: 28 + 2 = 30, 30 + 1 = 31 очко.', '<b>In sport.</b> A basketball player had 28 points and scored a 3-pointer in the last minute: 28 + 2 = 30, 30 + 1 = 31 points.'),
      L('<b>Kalendarda.</b> Bugun oyning 24-kuni. 9 kundan keyin tug‘ilgan kuningiz. Lekin oyda 30 kun bo‘lsa, 24 + 6 = 30, keyin yangi oyning 3-kuni! Kalendarda ham «o‘nlikdan o‘tish»ga o‘xshash «oydan o‘tish» bor.', '<b>В календаре.</b> Сегодня 24-е число. День рождения через 9 дней. Но если в месяце 30 дней, то 24 + 6 = 30, а потом 3-е число нового месяца! В календаре тоже есть «переход», только через месяц.', '<b>On a calendar.</b> Today is the 24th. Your birthday is in 9 days. If the month has 30 days, 24 + 6 = 30 and then it is the 3rd of the next month! Calendars also have a kind of “crossing” — into a new month.')
    ] },
    { kind: 'fact', h: L('Qiziqarli faktlar', 'Интересные факты', 'Fun facts'), list: [
      L('Ilonbaliqlar va ba’zi baliqlar o‘z uyasiga minglab kilometr yo‘l bosib qaytadi — lekin ular sanamaydi. Asalarilar esa 4 gacha sanay olishi tajribada isbotlangan!', 'Угри и некоторые рыбы возвращаются к месту рождения за тысячи километров — но они не считают. А вот пчёлы, как показали опыты, умеют считать до 4!', 'Eels and some fish travel thousands of kilometres back to where they were born — but they do not count. Bees, however, have been shown in experiments to count up to 4!'),
      L('Ko‘pchilik qushlar uyasidagi tuxumlar soni o‘zgarganini sezadi. Qarg‘alar esa 6–7 gacha bo‘lgan narsalar sonini «sezadi».', 'Многие птицы различают количество яиц в гнезде. А вороны «чувствуют» количество предметов до 6–7.', 'Many birds can notice how many eggs are in their nest. Crows can “sense” numbers of objects up to 6 or 7.'),
      L('Xitoyda qadimdan cho‘t (suanpan) ishlatilgan. Unda har bir ustunda yuqorida 2 ta va pastda 5 ta munchoq bor — o‘nlikdan o‘tishni qo‘lda bajarish uchun.', 'В Китае издавна пользовались счётами «суаньпань». На каждой проволоке сверху 2 бусины и снизу 5 — чтобы делать переход через десяток руками.', 'In China people have long used a counting frame called the suanpan. Each rod has 2 beads at the top and 5 below — for crossing a ten by hand.'),
      L('Inson yuragi bir daqiqada taxminan 70–80 marta uradi. Yugurganda esa bu son 100 dan oshadi!', 'Сердце человека бьётся примерно 70–80 раз в минуту. А при беге — больше 100!', 'A person’s heart beats about 70–80 times a minute. When running, it goes above 100!')
    ] },
    { kind: 'practice', h: L('O‘ylab ko‘ring', 'Подумай', 'Think about it'), p: [
      L('Har birida avval yaxlit songacha to‘ldiring.', 'В каждом примере сначала дополни до круглого.', 'In each one, first make up to the round number.')
    ], list: [
      L('27 + 5 = ?   56 + 9 = ?   88 + 6 = ?', '27 + 5 = ?   56 + 9 = ?   88 + 6 = ?', '27 + 5 = ?   56 + 9 = ?   88 + 6 = ?'),
      L('7 + 45 = ?   4 + 79 = ?', '7 + 45 = ?   4 + 79 = ?', '7 + 45 = ?   4 + 79 = ?'),
      L('Qaysi misollarda o‘nlikdan o‘tish bor: 34 + 5, 34 + 7, 61 + 8, 66 + 6?', 'В каких примерах есть переход через десяток: 34 + 5, 34 + 7, 61 + 8, 66 + 6?', 'Which sums cross a ten: 34 + 5, 34 + 7, 61 + 8, 66 + 6?'),
      L('Lolada 39 ta rasm bor edi. Unga yana 4 ta rasm sovg‘a qilishdi. Nechta bo‘ldi?', 'У Лолы было 39 рисунков. Ей подарили ещё 4. Сколько стало?', 'Lola had 39 pictures. She was given 4 more. How many does she have now?')
    ], after: [
      L('Javoblar: 32, 65, 94; 52, 83; 34 + 7 va 66 + 6; 39 + 1 = 40, 40 + 3 = 43 ta rasm.', 'Ответы: 32, 65, 94; 52, 83; 34 + 7 и 66 + 6; 39 + 1 = 40, 40 + 3 = 43 рисунка.', 'Answers: 32, 65, 94; 52, 83; 34 + 7 and 66 + 6; 39 + 1 = 40, 40 + 3 = 43 pictures.')
    ] },
    { kind: 'summary', h: L('Xulosa', 'Итог', 'Summary'), list: [
      L('Birliklar yig‘indisi 10 dan oshsa — o‘nlikdan o‘tish bo‘ladi.', 'Если сумма единиц больше 10 — есть переход через десяток.', 'If the ones add up to more than 10, we cross a ten.'),
      L('Avval yaxlit songacha to‘ldiramiz, keyin qoldiqni qo‘shamiz: 25 + 6 = 25 + 5 + 1 = 31.', 'Сначала дополняем до круглого, потом прибавляем остаток: 25 + 6 = 25 + 5 + 1 = 31.', 'First make up to the round number, then add the rest: 25 + 6 = 25 + 5 + 1 = 31.'),
      L('Qo‘shiladigan sonni 10 ning tarkibi yordamida bo‘laklaymiz.', 'Прибавляемое число раскладываем с помощью состава 10.', 'Split the added number using the parts of 10.'),
      L('6 + 25 da o‘rinlarni almashtiramiz: 25 + 6. Yig‘indi o‘zgarmaydi.', 'В 6 + 25 меняем числа местами: 25 + 6. Сумма не меняется.', 'For 6 + 25, swap: 25 + 6. The sum does not change.'),
      L('11 ta birlik — bu 1 o‘nlik va 1 birlik, 211 emas!', '11 единиц — это 1 десяток и 1 единица, а не 211!', '11 ones are 1 ten and 1 one, not 211!'),
      L('Misrliklar 10 ta tayoqchani bitta taqa belgisiga almashtirgan — bu ham o‘nlikdan o‘tish.', 'Египтяне заменяли 10 палочек одной «подковой» — это тоже переход через десяток.', 'The Egyptians swapped 10 sticks for one horseshoe sign — that is crossing a ten too.')
    ] }
  ] });
})(this);
(function (root) {
  'use strict';
  var L = root.NMCurriculum.H.L, T = root.NMTheory, P = '2-1';

  // ---------- t6. 33 − 7 va 43 − 7 ko'rinishidagi ayirish ----------
  T.add(P, 't6', { sections: [
    { kind: 'intro', h: L('O‘nlikdan o‘tib ayiramiz', 'Вычитание с переходом через десяток', 'Subtracting across a ten'), p: [
      L('Dilnozaning qutisida 43 ta rangli qalam bor edi. U sinfdoshlariga 7 tasini berdi. Birliklarga qaradi: 3 ta. 3 dan 7 ni ayirib bo‘lmaydi! Nima qilish kerak?', 'В коробке у Дильнозы было 43 цветных карандаша. Она отдала одноклассникам 7. Посмотрела на единицы: 3. Из 3 нельзя вычесть 7! Что же делать?', 'Dilnoza had 43 coloured pencils in her box. She gave 7 to her classmates. She looked at the ones: 3. You cannot take 7 from 3! What should she do?'),
      L('Dilnoza aqlli yo‘l topdi: «Avval 3 tasini beraman — 40 ta qoladi. Yana 4 tasini berishim kerak: 40 − 4 = 36.» Ana shunday qilib u <b>bo‘laklab ayirish</b> usulini qo‘lladi.', 'Дильноза нашла умный путь: «Сначала отдам 3 — останется 40. Нужно отдать ещё 4: 40 − 4 = 36». Так она применила приём <b>вычитания по частям</b>.', 'Dilnoza found a clever way: “First I give 3 — that leaves 40. I still need to give 4: 40 − 4 = 36.” That is how she used <b>subtracting in parts</b>.'),
      L('Bu mavzuda biz ikki xonali sondan bir xonali sonni o‘nlikdan o‘tib ayirishni o‘rganamiz. Bu oldingi mavzuning teskarisi: u yerda yaxlit songacha qo‘shgan edik, bu yerda yaxlit songacha ayiramiz.', 'В этой теме мы научимся вычитать однозначное число из двузначного с переходом через десяток. Это обратное прошлой теме: там мы прибавляли до круглого числа, а здесь вычитаем до круглого.', 'In this topic we learn to subtract a one-digit number from a two-digit number across a ten. It is the reverse of the last topic: there we added up to a round number, here we subtract down to one.')
    ] },
    { kind: 'def', h: L('Asosiy tushunchalar', 'Основные понятия', 'Key ideas'), p: [
      L('O‘nlikdan o‘tib ayirish kerak bo‘ladi, agar kamayuvchining birliklari ayriluvchidan kichik bo‘lsa.', 'Вычитать с переходом через десяток нужно, если единиц в уменьшаемом меньше, чем вычитаемое.', 'We need to subtract across a ten when the starting number has fewer ones than the number we take away.')
    ], list: [
      L('43 − 7: birliklar 3 &lt; 7 — o‘nlikdan o‘tish <b>bor</b>.', '43 − 7: единиц 3 &lt; 7 — переход <b>есть</b>.', '43 − 7: ones 3 &lt; 7 — we <b>do</b> cross a ten.'),
      L('48 − 7: birliklar 8 &gt; 7 — o‘nlikdan o‘tish <b>yo‘q</b>, javob 41.', '48 − 7: единиц 8 &gt; 7 — перехода <b>нет</b>, ответ 41.', '48 − 7: ones 8 &gt; 7 — <b>no</b> crossing, answer 41.'),
      L('<b>Bo‘laklab ayirish</b> — ayriluvchini ikki qismga bo‘lish: birinchi qism yaxlit songacha tushiradi, ikkinchisi yaxlit sondan ayiriladi. 7 = 3 + 4.', '<b>Вычитание по частям</b> — разбиваем вычитаемое на две части: первая доводит до круглого числа, вторая вычитается из круглого. 7 = 3 + 4.', '<b>Subtracting in parts</b> means splitting the number taken away into two parts: the first brings us down to a round number, the second is taken from the round number. 7 = 3 + 4.'),
      L('33 − 7 va 43 − 7: bir xil usul, faqat o‘nliklar har xil. 33 − 7 = 26, 43 − 7 = 36. Javoblarning birliklari bir xil — 6!', '33 − 7 и 43 − 7: способ один, отличаются только десятки. 33 − 7 = 26, 43 − 7 = 36. Единицы в ответах одинаковые — 6!', '33 − 7 and 43 − 7: the same method, only the tens differ. 33 − 7 = 26, 43 − 7 = 36. The ones in both answers are the same — 6!')
    ] },
    { kind: 'history', h: L('Beruniy va aniq hisob', 'Беруни и точный счёт', 'Biruni and careful calculation'), p: [
      L('<b>Abu Rayhon Beruniy</b> 973-yilda Xorazmning Kat shahrida tug‘ilgan. U astronomiya, geografiya, matematika va tibbiyot bilan shug‘ullangan va 150 dan ortiq asar yozgan. Beruniy Yer aylanasining uzunligini tog‘ cho‘qqisidan turib o‘lchagan va juda aniq natija olgan.', '<b>Абу Райхан Беруни</b> родился в 973 году в городе Кят в Хорезме. Он занимался астрономией, географией, математикой и медициной и написал больше 150 трудов. Беруни измерил длину окружности Земли, стоя на вершине горы, и получил очень точный результат.', '<b>Abu Rayhan Biruni</b> was born in 973 in the town of Kath in Khorezm. He studied astronomy, geography, maths and medicine and wrote more than 150 works. Biruni measured the size of the Earth from the top of a mountain and got a very accurate result.'),
      L('Bunday ishlar uchun minglab ayirish va qo‘shish kerak bo‘lgan. Beruniy katta sonlarni ham bo‘laklab hisoblagan — xuddi biz 43 − 7 ni 43 − 3 − 4 deb hisoblaganimizdek. Katta masalani kichik qadamlarga bo‘lish — barcha olimlarning siri.', 'Для таких работ нужны были тысячи вычитаний и сложений. Беруни и большие числа считал по частям — так же, как мы считаем 43 − 7 как 43 − 3 − 4. Делить большую задачу на маленькие шаги — секрет всех учёных.', 'Work like that needed thousands of subtractions and additions. Biruni calculated big numbers in parts too — just as we work out 43 − 7 as 43 − 3 − 4. Breaking a big problem into small steps is the secret of every scientist.'),
      L('Beruniy shunday degan ma’noda yozgan: bilim olish uchun sabr va diqqat kerak. Ayirishda ham shunday — shoshilmasdan, qadamma-qadam ishlasangiz, xato qilmaysiz.', 'Беруни писал о том, что для знаний нужны терпение и внимание. Так и в вычитании: если работать не спеша, шаг за шагом, ошибок не будет.', 'Biruni wrote that learning needs patience and care. Subtraction is the same: work step by step without rushing and you will not make mistakes.')
    ] },
    { kind: 'rule', h: L('Qoida', 'Правило', 'The rule'), p: [
      L('Ikki xonali sondan bir xonali sonni o‘nlikdan o‘tib ayirish uchun:', 'Чтобы вычесть однозначное число из двузначного с переходом через десяток:', 'To subtract a one-digit number from a two-digit number across a ten:')
    ], list: [
      L('Ayriluvchini ikki qismga bo‘ling: birinchi qism — kamayuvchining birliklariga teng. 43 − 7 da: 7 = 3 + 4.', 'Разложи вычитаемое на две части: первая равна единицам уменьшаемого. В 43 − 7: 7 = 3 + 4.', 'Split the number taken away into two parts: the first equals the ones of the starting number. In 43 − 7: 7 = 3 + 4.'),
      L('Birinchi qismni ayiring — yaxlit son chiqadi: 43 − 3 = 40.', 'Вычти первую часть — получится круглое число: 43 − 3 = 40.', 'Subtract the first part — you get a round number: 43 − 3 = 40.'),
      L('Ikkinchi qismni yaxlit sondan ayiring: 40 − 4 = 36.', 'Вычти вторую часть из круглого числа: 40 − 4 = 36.', 'Subtract the second part from the round number: 40 − 4 = 36.')
    ], after: [
      L('Qisqa yozuv: 43 − 7 = 43 − 3 − 4 = 36.', 'Краткая запись: 43 − 7 = 43 − 3 − 4 = 36.', 'Short form: 43 − 7 = 43 − 3 − 4 = 36.'),
      L('Tekshirish: 36 + 7 = 36 + 4 + 3 = 43. To‘g‘ri! Ayirishni har doim qo‘shish bilan tekshirish mumkin.', 'Проверка: 36 + 7 = 36 + 4 + 3 = 43. Верно! Вычитание всегда можно проверить сложением.', 'Check: 36 + 7 = 36 + 4 + 3 = 43. Correct! Subtraction can always be checked by adding.')
    ] },
    { kind: 'steps', h: L('Qadamma-qadam: 52 − 6', 'Шаг за шагом: 52 − 6', 'Step by step: 52 − 6'), p: [
      L('52 − 6 ni birga hisoblaymiz:', 'Вычислим вместе 52 − 6:', 'Let’s work out 52 − 6 together:')
    ], list: [
      L('1-qadam. Birliklarga qaraymiz: 2 &lt; 6. O‘nlikdan o‘tish kerak.', 'Шаг 1. Смотрим на единицы: 2 &lt; 6. Нужен переход через десяток.', 'Step 1. Look at the ones: 2 &lt; 6. We need to cross a ten.'),
      L('2-qadam. 6 ni bo‘lamiz: avval 2 (52 dagi birliklar), qolgani 4. 6 = 2 + 4.', 'Шаг 2. Раскладываем 6: сначала 2 (единицы числа 52), остаётся 4. 6 = 2 + 4.', 'Step 2. Split 6: first 2 (the ones in 52), leaving 4. 6 = 2 + 4.'),
      L('3-qadam. 52 − 2 = 50.', 'Шаг 3. 52 − 2 = 50.', 'Step 3. 52 − 2 = 50.'),
      L('4-qadam. 50 − 4 = 46. Javob: 46.', 'Шаг 4. 50 − 4 = 46. Ответ: 46.', 'Step 4. 50 − 4 = 46. Answer: 46.')
    ], after: [
      L('Sonlar o‘qida bu orqaga ikki sakrash: 52 dan 50 gacha (2 qadam), keyin 50 dan 46 gacha (4 qadam). Jami 6 qadam orqaga.', 'На числовом луче это два прыжка назад: от 52 до 50 (2 шага), потом от 50 до 46 (4 шага). Всего 6 шагов назад.', 'On a number line these are two jumps back: from 52 to 50 (2 steps), then from 50 to 46 (4 steps). 6 steps back in all.'),
      L('Yana bir usul: 52 = 40 + 12. 12 − 6 = 6. 40 + 6 = 46. Bu ham to‘g‘ri — bitta o‘nlikni «ochib», 12 dan ayirdik.', 'Ещё один способ: 52 = 40 + 12. 12 − 6 = 6. 40 + 6 = 46. Тоже верно — мы «открыли» один десяток и вычли из 12.', 'Another way: 52 = 40 + 12. 12 − 6 = 6. 40 + 6 = 46. Also right — we “opened” one ten and subtracted from 12.')
    ] },
    { kind: 'example', h: L('Yechilgan namunalar', 'Разобранные примеры', 'Worked examples'), p: [
      L('Har misolda ayriluvchini to‘g‘ri bo‘laklang.', 'В каждом примере правильно раскладывай вычитаемое.', 'In each sum, split the number taken away correctly.')
    ], ex: [
      { q: L('33 − 7 = ?', '33 − 7 = ?', '33 − 7 = ?'), s: L('7 = 3 + 4. 33 − 3 = 30, 30 − 4 = <b>26</b>.', '7 = 3 + 4. 33 − 3 = 30, 30 − 4 = <b>26</b>.', '7 = 3 + 4. 33 − 3 = 30, 30 − 4 = <b>26</b>.') },
      { q: L('31 − 4 = ?', '31 − 4 = ?', '31 − 4 = ?'), s: L('4 = 1 + 3. 31 − 1 = 30, 30 − 3 = <b>27</b>.', '4 = 1 + 3. 31 − 1 = 30, 30 − 3 = <b>27</b>.', '4 = 1 + 3. 31 − 1 = 30, 30 − 3 = <b>27</b>.') },
      { q: L('65 − 9 = ?', '65 − 9 = ?', '65 − 9 = ?'), s: L('9 = 5 + 4. 65 − 5 = 60, 60 − 4 = <b>56</b>. Tekshiramiz: 56 + 9 = 65.', '9 = 5 + 4. 65 − 5 = 60, 60 − 4 = <b>56</b>. Проверка: 56 + 9 = 65.', '9 = 5 + 4. 65 − 5 = 60, 60 − 4 = <b>56</b>. Check: 56 + 9 = 65.') },
      { q: L('84 − 8 = ?', '84 − 8 = ?', '84 − 8 = ?'), s: L('8 = 4 + 4. 84 − 4 = 80, 80 − 4 = <b>76</b>.', '8 = 4 + 4. 84 − 4 = 80, 80 − 4 = <b>76</b>.', '8 = 4 + 4. 84 − 4 = 80, 80 − 4 = <b>76</b>.') },
      { q: L('Daraxtda 22 ta qush o‘tirgan edi. 5 tasi uchib ketdi. Nechta qoldi?', 'На дереве сидели 22 птицы. 5 улетели. Сколько осталось?', '22 birds sat in a tree. 5 flew away. How many are left?'), s: L('22 − 5. 5 = 2 + 3. 22 − 2 = 20, 20 − 3 = <b>17 ta qush</b>.', '22 − 5. 5 = 2 + 3. 22 − 2 = 20, 20 − 3 = <b>17 птиц</b>.', '22 − 5. 5 = 2 + 3. 22 − 2 = 20, 20 − 3 = <b>17 birds</b>.') }
    ] },
    { kind: 'table', h: L('Bir xil birliklar — bir xil yechim', 'Одинаковые единицы — одинаковое решение', 'Same ones, same solution'), p: [
      L('Jadvalga qarang: kamayuvchining birliklari bir xil bo‘lsa, ayriluvchi ham bir xil bo‘laklanadi.', 'Посмотри на таблицу: если у уменьшаемого одинаковые единицы, вычитаемое раскладывается одинаково.', 'Look at the table: if the starting numbers have the same ones, the number taken away is split the same way.')
    ], table: { head: [L('Misol', 'Пример', 'Sum'), L('Bo‘laklash', 'Разложение', 'Split'), L('Yaxlit songacha', 'До круглого', 'Down to the ten'), L('Javob', 'Ответ', 'Answer')], rows: [
      ['23 − 7', '3 + 4', '23 − 3 = 20', '16'],
      ['33 − 7', '3 + 4', '33 − 3 = 30', '26'],
      ['43 − 7', '3 + 4', '43 − 3 = 40', '36'],
      ['53 − 7', '3 + 4', '53 − 3 = 50', '46'],
      ['71 − 5', '1 + 4', '71 − 1 = 70', '66'],
      ['94 − 6', '4 + 2', '94 − 4 = 90', '88']
    ] }, after: [
      L('Birinchi to‘rt qatorda javoblar 16, 26, 36, 46 — har safar 10 taga oshadi, chunki kamayuvchi ham 10 taga oshgan. Matematikada bunday naqshlarni topish juda qiziq!', 'В первых четырёх строках ответы 16, 26, 36, 46 — каждый раз на 10 больше, потому что и уменьшаемое выросло на 10. Находить такие закономерности в математике очень интересно!', 'In the first four rows the answers are 16, 26, 36, 46 — each time 10 more, because the starting number also grew by 10. Spotting patterns like this in maths is great fun!')
    ] },
    { kind: 'mistake', h: L('Tipik xatolar', 'Типичные ошибки', 'Common mistakes'), p: [
      L('O‘nlikdan o‘tib ayirishda ko‘p uchraydigan xatolar:', 'Частые ошибки при вычитании с переходом:', 'Common mistakes when subtracting across a ten:')
    ], list: [
      L('<b>Kattadan kichikni ayirish.</b> 43 − 7 da «7 − 3 = 4» deb 44 yozish. Bu noto‘g‘ri! Birliklarni almashtirib bo‘lmaydi. To‘g‘risi 36.', '<b>Вычитать «из большего меньшее».</b> В 43 − 7 считать «7 − 3 = 4» и писать 44. Это неверно! Единицы менять местами нельзя. Правильно 36.', '<b>Taking small from big.</b> In 43 − 7 doing “7 − 3 = 4” and writing 44. Wrong! You cannot swap the ones. The right answer is 36.'),
      L('<b>O‘nlikni kamaytirmaslik.</b> 43 − 7 = 46? O‘nlikdan o‘tdik, demak o‘nliklar 4 dan 3 ga tushadi: 36.', '<b>Не уменьшать десятки.</b> 43 − 7 = 46? Мы перешли через десяток, значит, десятков стало не 4, а 3: 36.', '<b>Not reducing the tens.</b> 43 − 7 = 46? We crossed a ten, so the tens drop from 4 to 3: 36.'),
      L('<b>Noto‘g‘ri bo‘laklash.</b> 52 − 6 da 6 = 3 + 3 deb olish. 52 − 3 = 49 — yaxlit son chiqmadi. Birinchi qism kamayuvchining birliklariga teng bo‘lishi kerak: 6 = 2 + 4.', '<b>Неверное разложение.</b> В 52 − 6 брать 6 = 3 + 3. 52 − 3 = 49 — круглое число не получилось. Первая часть должна равняться единицам уменьшаемого: 6 = 2 + 4.', '<b>Splitting wrongly.</b> In 52 − 6 using 6 = 3 + 3. 52 − 3 = 49 — not a round number. The first part must equal the ones of the starting number: 6 = 2 + 4.'),
      L('<b>Ikkinchi qismni unutish.</b> 31 − 4: 31 − 1 = 30 da to‘xtab qolish. Yana 3 ni ayirish kerak: 27.', '<b>Забыть вторую часть.</b> 31 − 4: остановиться на 31 − 1 = 30. Нужно ещё вычесть 3: 27.', '<b>Forgetting the second part.</b> 31 − 4: stopping at 31 − 1 = 30. You still need to take 3: 27.')
    ] },
    { kind: 'life', h: L('Hayotda qayerda kerak?', 'Где это нужно в жизни?', 'Where is this used in life?'), p: [
      L('<b>Pul.</b> Hamyoningizda 32 ming so‘m bor. Muzqaymoq 5 ming so‘m. Qancha qoladi? 32 − 2 = 30, 30 − 3 = 27 ming so‘m.', '<b>Деньги.</b> В кошельке 32 тысячи сумов. Мороженое стоит 5 тысяч. Сколько останется? 32 − 2 = 30, 30 − 3 = 27 тысяч.', '<b>Money.</b> You have 32 thousand som in your purse. An ice cream costs 5 thousand. How much is left? 32 − 2 = 30, 30 − 3 = 27 thousand.'),
      L('<b>Vaqt.</b> Darsgacha 21 daqiqa qoldi. 4 daqiqa o‘tdi. Endi qancha qoldi? 21 − 1 = 20, 20 − 3 = 17 daqiqa.', '<b>Время.</b> До урока 21 минута. Прошло 4 минуты. Сколько осталось? 21 − 1 = 20, 20 − 3 = 17 минут.', '<b>Time.</b> There are 21 minutes until the lesson. 4 minutes pass. How many are left? 21 − 1 = 20, 20 − 3 = 17 minutes.'),
      L('<b>Sportda.</b> Futbol turnirida 64 jamoa bor edi. Birinchi kunda 8 jamoa chiqib ketdi: 64 − 4 = 60, 60 − 4 = 56 jamoa qoldi.', '<b>В спорте.</b> В турнире было 64 команды. В первый день выбыли 8: 64 − 4 = 60, 60 − 4 = 56 команд осталось.', '<b>In sport.</b> A tournament had 64 teams. On the first day 8 were knocked out: 64 − 4 = 60, 60 − 4 = 56 teams left.'),
      L('<b>Uyda.</b> Tokchada 45 ta tuxum bor edi. Onam pirog uchun 6 ta ishlatdi: 45 − 5 = 40, 40 − 1 = 39 ta tuxum.', '<b>Дома.</b> На полке было 45 яиц. Мама взяла 6 для пирога: 45 − 5 = 40, 40 − 1 = 39 яиц.', '<b>At home.</b> There were 45 eggs on the shelf. Mum used 6 for a pie: 45 − 5 = 40, 40 − 1 = 39 eggs.')
    ] },
    { kind: 'fact', h: L('Qiziqarli faktlar', 'Интересные факты', 'Fun facts'), list: [
      L('Kosmik raketa uchishidan oldin teskari sanaladi: 10, 9, 8 … 1, «Start!». Bu — har safar 1 ni ayirish!', 'Перед запуском ракеты ведут обратный отсчёт: 10, 9, 8 … 1, «Пуск!». Это вычитание по 1 каждый раз!', 'Before a rocket launch there is a countdown: 10, 9, 8 … 1, “Lift-off!”. That is subtracting 1 each time!'),
      L('Beruniy Yerning radiusini o‘lchaganda 6339 km atrofida natija olgan. Hozirgi o‘lchov — taxminan 6371 km. Farqi juda kichik!', 'Беруни, измеряя радиус Земли, получил около 6339 км. Современное значение — около 6371 км. Разница очень маленькая!', 'When Biruni measured the Earth’s radius he got about 6 339 km. The modern value is about 6 371 km. A tiny difference!'),
      L('Kunda 24 soat bor. Bolalar taxminan 10 soat uxlashi kerak: 24 − 10 = 14 soat uyg‘oq bo‘lamiz.', 'В сутках 24 часа. Детям нужно спать около 10 часов: 24 − 10 = 14 часов мы бодрствуем.', 'A day has 24 hours. Children need about 10 hours of sleep: 24 − 10 = 14 hours awake.'),
      L('Mushuk kuniga 12–16 soat uxlaydi — sutkaning yarmidan ko‘pi! 24 − 16 = 8 soat u uyg‘oq bo‘ladi.', 'Кошка спит 12–16 часов в сутки — больше половины суток! 24 − 16 = 8 часов она бодрствует.', 'A cat sleeps 12–16 hours a day — more than half the day! 24 − 16 = 8 hours awake.')
    ] },
    { kind: 'practice', h: L('O‘ylab ko‘ring', 'Подумай', 'Think about it'), p: [
      L('Avval birliklarni solishtiring: o‘nlikdan o‘tish bormi?', 'Сначала сравни единицы: есть ли переход?', 'First compare the ones: is there a crossing?')
    ], list: [
      L('42 − 5 = ?   61 − 3 = ?   75 − 8 = ?', '42 − 5 = ?   61 − 3 = ?   75 − 8 = ?', '42 − 5 = ?   61 − 3 = ?   75 − 8 = ?'),
      L('Qaysilarida o‘nlikdan o‘tish bor: 56 − 4, 56 − 7, 90 − 1, 38 − 9?', 'В каких есть переход: 56 − 4, 56 − 7, 90 − 1, 38 − 9?', 'Which ones cross a ten: 56 − 4, 56 − 7, 90 − 1, 38 − 9?'),
      L('Qaysi sondan 6 ni ayirsak, 47 qoladi?', 'Из какого числа нужно вычесть 6, чтобы осталось 47?', 'From which number do we subtract 6 to get 47?'),
      L('Akvariumda 24 ta baliq bor edi. 6 tasini boshqa akvariumga o‘tkazishdi. Nechta qoldi?', 'В аквариуме было 24 рыбки. 6 пересадили в другой. Сколько осталось?', 'An aquarium had 24 fish. 6 were moved to another tank. How many are left?')
    ], after: [
      L('Javoblar: 37, 58, 67; 56 − 7, 90 − 1, 38 − 9; 53 (chunki 47 + 6 = 53); 24 − 4 − 2 = 18 ta baliq.', 'Ответы: 37, 58, 67; 56 − 7, 90 − 1, 38 − 9; 53 (ведь 47 + 6 = 53); 24 − 4 − 2 = 18 рыбок.', 'Answers: 37, 58, 67; 56 − 7, 90 − 1, 38 − 9; 53 (because 47 + 6 = 53); 24 − 4 − 2 = 18 fish.')
    ] },
    { kind: 'summary', h: L('Xulosa', 'Итог', 'Summary'), list: [
      L('Kamayuvchining birliklari ayriluvchidan kichik bo‘lsa — o‘nlikdan o‘tib ayiramiz.', 'Если единиц в уменьшаемом меньше вычитаемого — вычитаем с переходом.', 'If the starting number has fewer ones than the number taken away, we cross a ten.'),
      L('Ayriluvchini bo‘laklaymiz: avval yaxlit songacha, keyin qolganini.', 'Раскладываем вычитаемое: сначала до круглого числа, потом остаток.', 'Split the number taken away: first down to the round number, then the rest.'),
      L('43 − 7 = 43 − 3 − 4 = 36.', '43 − 7 = 43 − 3 − 4 = 36.', '43 − 7 = 43 − 3 − 4 = 36.'),
      L('O‘nlikdan o‘tganda o‘nliklar bitta kamayadi.', 'При переходе через десяток десятков становится на один меньше.', 'When we cross a ten, the tens go down by one.'),
      L('Birliklarni o‘rin almashtirib ayirmang: 43 − 7 ≠ 44!', 'Не вычитай единицы «наоборот»: 43 − 7 ≠ 44!', 'Never subtract the ones backwards: 43 − 7 ≠ 44!'),
      L('Ayirishni qo‘shish bilan tekshiring: 36 + 7 = 43.', 'Проверяй вычитание сложением: 36 + 7 = 43.', 'Check subtraction by adding: 36 + 7 = 43.')
    ] }
  ] });
})(this);
(function (root) {
  'use strict';
  var L = root.NMCurriculum.H.L, T = root.NMTheory, P = '2-1';

  // ---------- t7. 28 + 14 ko'rinishidagi qo'shish ----------
  T.add(P, 't7', { sections: [
    { kind: 'intro', h: L('Ikki xonali + ikki xonali, o‘nlikdan o‘tib', 'Двузначное + двузначное с переходом', 'Two-digit + two-digit, crossing a ten'), p: [
      L('Bog‘da olma terim mavsumi! Ertalab bobom 28 kg olma terdi, kechqurun yana 14 kg. Jami qancha? Nabirasi Ulug‘bek hisobladi: «O‘nliklar: 20 + 10 = 30. Birliklar: 8 + 4 = 12. 30 va 12 — 42 kg!»', 'В саду сбор яблок! Утром дедушка собрал 28 кг, вечером ещё 14 кг. Сколько всего? Внук Улугбек посчитал: «Десятки: 20 + 10 = 30. Единицы: 8 + 4 = 12. 30 и 12 — 42 кг!»', 'It is apple-picking time in the orchard! In the morning Grandpa picked 28 kg, in the evening 14 kg more. How much in all? His grandson Ulugbek worked it out: “Tens: 20 + 10 = 30. Ones: 8 + 4 = 12. 30 and 12 make 42 kg!”'),
      L('Ulug‘bek ikki narsani birlashtirdi: ikki xonali sonlarni xonalab qo‘shishni (t4 mavzusi) va o‘nlikdan o‘tishni (t5 mavzusi). Birliklar 12 bo‘ldi — bu 1 o‘nlik va 2 birlik. Shuning uchun javobda o‘nliklar 3 emas, 4 ta!', 'Улугбек соединил два умения: сложение двузначных чисел по разрядам и переход через десяток. Единиц получилось 12 — это 1 десяток и 2 единицы. Поэтому в ответе десятков не 3, а 4!', 'Ulugbek combined two skills: adding two-digit numbers place by place, and crossing a ten. The ones made 12 — that is 1 ten and 2 ones. So the answer has not 3 tens but 4!'),
      L('Bu mavzuda shunday misollarni ishonch bilan yechishni o‘rganamiz. Bu usul keyinroq ustun usulida ham, katta sonlarda ham kerak bo‘ladi.', 'В этой теме мы научимся уверенно решать такие примеры. Этот приём позже понадобится и в столбике, и с большими числами.', 'In this topic we learn to solve such sums with confidence. This method will be needed later in column addition and with bigger numbers too.')
    ] },
    { kind: 'def', h: L('Yangi o‘nlik qayerdan keladi?', 'Откуда берётся новый десяток?', 'Where does the new ten come from?'), p: [
      L('Ikki xonali sonlarni qo‘shganda birliklar yig‘indisi uch xil bo‘lishi mumkin:', 'При сложении двузначных чисел сумма единиц бывает трёх видов:', 'When adding two-digit numbers, the ones can add up in three ways:')
    ], list: [
      L('<b>10 dan kichik</b>: 23 + 15 → 3 + 5 = 8. O‘nlikdan o‘tish yo‘q. Javob 38.', '<b>Меньше 10</b>: 23 + 15 → 3 + 5 = 8. Перехода нет. Ответ 38.', '<b>Less than 10</b>: 23 + 15 → 3 + 5 = 8. No crossing. Answer 38.'),
      L('<b>Roppa-rosa 10</b>: 23 + 17 → 3 + 7 = 10. Yaxlit javob: 40.', '<b>Ровно 10</b>: 23 + 17 → 3 + 7 = 10. Круглый ответ: 40.', '<b>Exactly 10</b>: 23 + 17 → 3 + 7 = 10. A round answer: 40.'),
      L('<b>10 dan katta</b>: 28 + 14 → 8 + 4 = 12. Yangi o‘nlik va 2 birlik. Javob 42.', '<b>Больше 10</b>: 28 + 14 → 8 + 4 = 12. Новый десяток и 2 единицы. Ответ 42.', '<b>More than 10</b>: 28 + 14 → 8 + 4 = 12. A new ten and 2 ones. Answer 42.')
    ], after: [
      L('Uchinchi holatda birliklar o‘z xonasiga sig‘maydi. 12 ta kubchadan 10 tasini bog‘lab tayoqcha qilamiz va uni o‘nliklarga qo‘shamiz. Bu jarayonni ba’zan «o‘nlikni xotirada saqlash» ham deyishadi.', 'В третьем случае единицы не помещаются в своём разряде. Из 12 кубиков 10 связываем в палочку и добавляем её к десяткам. Этот процесс иногда называют «запомнить десяток».', 'In the third case the ones do not fit in their place. We tie 10 of the 12 cubes into a rod and add it to the tens. This is sometimes called “carrying a ten”.')
    ] },
    { kind: 'history', h: L('Hind raqamlari Yevropaga qanday yetib bordi?', 'Как индийские цифры попали в Европу', 'How Indian numerals reached Europe'), p: [
      L('Al-Xorazmiyning hind raqamlari va ular bilan hisoblash haqidagi kitobi XII asrda lotin tiliga tarjima qilingan. Kitob «Algoritmi de numero Indorum» deb boshlangan — «Algoritmi hind sonlari haqida». «Algoritmi» — bu Xorazmiy ismining lotincha shakli.', 'Книгу аль-Хорезми об индийских цифрах и счёте с ними в XII веке перевели на латынь. Перевод начинался словами «Algoritmi de numero Indorum» — «Алгоритми об индийском счёте». «Алгоритми» — латинская форма имени Хорезми.', 'Al-Khwarizmi’s book about Indian numerals and calculating with them was translated into Latin in the 12th century. It began “Algoritmi de numero Indorum” — “Algoritmi on Indian numbers”. “Algoritmi” is the Latin form of al-Khwarizmi’s name.'),
      L('1202-yilda italiyalik <b>Leonardo Fibonachchi</b> «Abak kitobi»ni yozdi. U savdogarlarga yangi raqamlar bilan qo‘shishni, xususan, o‘nlikni keyingi xonaga o‘tkazishni o‘rgatdi. Avval ko‘p odamlar Rim raqamlaridan voz kechishni xohlamagan, lekin yangi usul ancha tez bo‘lib chiqdi.', 'В 1202 году итальянец <b>Леонардо Фибоначчи</b> написал «Книгу абака». Он учил торговцев складывать новыми цифрами и, в частности, переносить десяток в следующий разряд. Сначала многие не хотели отказываться от римских цифр, но новый способ оказался гораздо быстрее.', 'In 1202 the Italian <b>Leonardo Fibonacci</b> wrote the “Book of the Abacus”. He taught merchants to add with the new digits and, in particular, to carry a ten into the next place. At first many people did not want to give up Roman numerals, but the new way turned out much faster.'),
      L('Shunday qilib, siz bugun 28 + 14 ni hisoblaganda, 1200 yil oldin Xorazmda tug‘ilgan olimning bilimidan foydalanasiz!', 'Так что, считая сегодня 28 + 14, ты пользуешься знаниями учёного, родившегося 1200 лет назад в Хорезме!', 'So when you work out 28 + 14 today, you are using the knowledge of a scholar born 1 200 years ago in Khorezm!')
    ] },
    { kind: 'rule', h: L('Qoida', 'Правило', 'The rule'), p: [
      L('Ikki xonali sonlarni o‘nlikdan o‘tib qo‘shish uchun:', 'Чтобы сложить двузначные числа с переходом через десяток:', 'To add two-digit numbers across a ten:')
    ], list: [
      L('O‘nliklarni qo‘shamiz: 20 + 10 = 30.', 'Складываем десятки: 20 + 10 = 30.', 'Add the tens: 20 + 10 = 30.'),
      L('Birliklarni qo‘shamiz: 8 + 4 = 12.', 'Складываем единицы: 8 + 4 = 12.', 'Add the ones: 8 + 4 = 12.'),
      L('Natijalarni qo‘shamiz: 30 + 12 = 42.', 'Складываем результаты: 30 + 12 = 42.', 'Add the results: 30 + 12 = 42.')
    ], after: [
      L('Qisqa yozuv: 28 + 14 = (20 + 10) + (8 + 4) = 30 + 12 = 42.', 'Краткая запись: 28 + 14 = (20 + 10) + (8 + 4) = 30 + 12 = 42.', 'Short form: 28 + 14 = (20 + 10) + (8 + 4) = 30 + 12 = 42.'),
      L('Ikkinchi usul — ikkinchi qo‘shiluvchini bo‘laklab qo‘shish: 28 + 14 = 28 + 10 + 4. 28 + 10 = 38, 38 + 4 = 42 (38 + 2 = 40, 40 + 2 = 42). Ikkala usul ham bir xil javob beradi.', 'Второй способ — прибавлять второе слагаемое по частям: 28 + 14 = 28 + 10 + 4. 28 + 10 = 38, 38 + 4 = 42 (38 + 2 = 40, 40 + 2 = 42). Оба способа дают один ответ.', 'A second way is to add the second number in parts: 28 + 14 = 28 + 10 + 4. 28 + 10 = 38, 38 + 4 = 42 (38 + 2 = 40, 40 + 2 = 42). Both ways give the same answer.')
    ] },
    { kind: 'steps', h: L('Qadamma-qadam: 37 + 25', 'Шаг за шагом: 37 + 25', 'Step by step: 37 + 25'), p: [
      L('37 + 25 ni birga hisoblaymiz:', 'Вычислим вместе 37 + 25:', 'Let’s work out 37 + 25 together:')
    ], list: [
      L('1-qadam. Sonlarni ajratamiz: 37 = 30 + 7, 25 = 20 + 5.', 'Шаг 1. Раскладываем: 37 = 30 + 7, 25 = 20 + 5.', 'Step 1. Split: 37 = 30 + 7, 25 = 20 + 5.'),
      L('2-qadam. O‘nliklar: 30 + 20 = 50.', 'Шаг 2. Десятки: 30 + 20 = 50.', 'Step 2. Tens: 30 + 20 = 50.'),
      L('3-qadam. Birliklar: 7 + 5 = 12. Bu 10 dan katta — yangi o‘nlik bor!', 'Шаг 3. Единицы: 7 + 5 = 12. Больше 10 — есть новый десяток!', 'Step 3. Ones: 7 + 5 = 12. More than 10 — there is a new ten!'),
      L('4-qadam. Birlashtiramiz: 50 + 12 = 62.', 'Шаг 4. Объединяем: 50 + 12 = 62.', 'Step 4. Combine: 50 + 12 = 62.'),
      L('5-qadam. Tekshiramiz: 62 to‘g‘rimi? Taxminan: 37 ≈ 40, 25 ≈ 20, 40 + 20 = 60. 62 ga yaqin — demak, to‘g‘ri bo‘lishi mumkin.', 'Шаг 5. Проверяем: 62 правдоподобно? Прикинем: 37 ≈ 40, 25 ≈ 20, 40 + 20 = 60. Близко к 62 — похоже на правду.', 'Step 5. Check: is 62 sensible? Estimate: 37 ≈ 40, 25 ≈ 20, 40 + 20 = 60. Close to 62 — it looks right.')
    ], after: [
      L('Oxirgi qadam — <b>chamalab tekshirish</b>. Sonlarni yaqin yaxlit songa yaxlitlab, javob taxminan qancha bo‘lishini bilib olamiz. Agar 37 + 25 = 512 chiqsa, chamalash darrov xatoni ko‘rsatadi!', 'Последний шаг — <b>прикидка</b>. Округлив числа до ближайших круглых, узнаём, каким примерно должен быть ответ. Если вышло 37 + 25 = 512, прикидка сразу покажет ошибку!', 'The last step is <b>estimating</b>. Rounding to the nearest tens tells us roughly what the answer should be. If you got 37 + 25 = 512, the estimate shows the mistake at once!')
    ] },
    { kind: 'example', h: L('Yechilgan namunalar', 'Разобранные примеры', 'Worked examples'), p: [
      L('O‘nliklar alohida, birliklar alohida — va yangi o‘nlikni unutmang!', 'Десятки отдельно, единицы отдельно — и не забывай новый десяток!', 'Tens separately, ones separately — and do not forget the new ten!')
    ], ex: [
      { q: L('19 + 19 = ?', '19 + 19 = ?', '19 + 19 = ?'), s: L('O‘nliklar: 10 + 10 = 20. Birliklar: 9 + 9 = 18. 20 + 18 = <b>38</b>.', 'Десятки: 10 + 10 = 20. Единицы: 9 + 9 = 18. 20 + 18 = <b>38</b>.', 'Tens: 10 + 10 = 20. Ones: 9 + 9 = 18. 20 + 18 = <b>38</b>.') },
      { q: L('46 + 27 = ?', '46 + 27 = ?', '46 + 27 = ?'), s: L('O‘nliklar: 40 + 20 = 60. Birliklar: 6 + 7 = 13. 60 + 13 = <b>73</b>.', 'Десятки: 40 + 20 = 60. Единицы: 6 + 7 = 13. 60 + 13 = <b>73</b>.', 'Tens: 40 + 20 = 60. Ones: 6 + 7 = 13. 60 + 13 = <b>73</b>.') },
      { q: L('55 + 38 = ?', '55 + 38 = ?', '55 + 38 = ?'), s: L('O‘nliklar: 50 + 30 = 80. Birliklar: 5 + 8 = 13. 80 + 13 = <b>93</b>.', 'Десятки: 50 + 30 = 80. Единицы: 5 + 8 = 13. 80 + 13 = <b>93</b>.', 'Tens: 50 + 30 = 80. Ones: 5 + 8 = 13. 80 + 13 = <b>93</b>.') },
      { q: L('64 + 29 = ? (ikkinchi usulda)', '64 + 29 = ? (вторым способом)', '64 + 29 = ? (the second way)'), s: L('64 + 20 = 84. 84 + 9: 84 + 6 = 90, 90 + 3 = <b>93</b>.', '64 + 20 = 84. 84 + 9: 84 + 6 = 90, 90 + 3 = <b>93</b>.', '64 + 20 = 84. 84 + 9: 84 + 6 = 90, 90 + 3 = <b>93</b>.') },
      { q: L('Sinfda 18 ta qiz va 16 ta o‘g‘il bola bor. Jami nechta o‘quvchi?', 'В классе 18 девочек и 16 мальчиков. Сколько всего учеников?', 'A class has 18 girls and 16 boys. How many pupils in all?'), s: L('18 + 16: 10 + 10 = 20, 8 + 6 = 14, 20 + 14 = <b>34 o‘quvchi</b>.', '18 + 16: 10 + 10 = 20, 8 + 6 = 14, 20 + 14 = <b>34 ученика</b>.', '18 + 16: 10 + 10 = 20, 8 + 6 = 14, 20 + 14 = <b>34 pupils</b>.') }
    ] },
    { kind: 'table', h: L('Birliklar 10 dan oshganda', 'Когда единиц больше 10', 'When the ones go past 10'), p: [
      L('Jadvalda birliklar yig‘indisi qanday qilib yangi o‘nlik berishini ko‘rasiz.', 'В таблице видно, как сумма единиц даёт новый десяток.', 'The table shows how the ones give a new ten.')
    ], table: { head: [L('Misol', 'Пример', 'Sum'), L('O‘nliklar', 'Десятки', 'Tens'), L('Birliklar', 'Единицы', 'Ones'), L('Javob', 'Ответ', 'Answer')], rows: [
      ['28 + 14', '20 + 10 = 30', '8 + 4 = 12', '42'],
      ['37 + 25', '30 + 20 = 50', '7 + 5 = 12', '62'],
      ['49 + 23', '40 + 20 = 60', '9 + 3 = 12', '72'],
      ['16 + 18', '10 + 10 = 20', '6 + 8 = 14', '34'],
      ['58 + 35', '50 + 30 = 80', '8 + 5 = 13', '93'],
      ['29 + 39', '20 + 30 = 50', '9 + 9 = 18', '68']
    ] }, after: [
      L('Ikki bir xonali sonning eng katta yig‘indisi 9 + 9 = 18. Demak, birliklardan har doim faqat <b>bitta</b> yangi o‘nlik chiqadi, ikkita emas.', 'Наибольшая сумма двух однозначных чисел — 9 + 9 = 18. Значит, из единиц всегда получается только <b>один</b> новый десяток, не два.', 'The biggest sum of two one-digit numbers is 9 + 9 = 18. So the ones always give only <b>one</b> new ten, never two.')
    ] },
    { kind: 'mistake', h: L('Tipik xatolar', 'Типичные ошибки', 'Common mistakes'), p: [
      L('Bu misollarda bolalar ko‘pincha shunday xato qiladi:', 'В таких примерах дети часто ошибаются так:', 'In these sums children often make these mistakes:')
    ], list: [
      L('<b>Yangi o‘nlikni yo‘qotish.</b> 28 + 14 = 32? Birliklardan faqat 2 ni yozib, 10 ni unutish. To‘g‘risi 42.', '<b>Потерять новый десяток.</b> 28 + 14 = 32? Записали из единиц только 2, а 10 забыли. Правильно 42.', '<b>Losing the new ten.</b> 28 + 14 = 32? Writing only the 2 from the ones and forgetting the 10. The right answer is 42.'),
      L('<b>Yonma-yon yozish.</b> 28 + 14 = 312? 3 o‘nlik va 12 birlik — 312 emas, 42.', '<b>Писать рядом.</b> 28 + 14 = 312? 3 десятка и 12 единиц — это не 312, а 42.', '<b>Writing side by side.</b> 28 + 14 = 312? 3 tens and 12 ones is not 312 but 42.'),
      L('<b>O‘nlik va birlikni aralashtirish.</b> 28 + 14 da 20 + 4 va 8 + 10 deb qo‘shish. Har bir xona faqat o‘z xonasi bilan qo‘shiladi.', '<b>Смешивать десятки и единицы.</b> В 28 + 14 складывать 20 + 4 и 8 + 10. Каждый разряд складывается только со своим.', '<b>Mixing tens and ones.</b> In 28 + 14 adding 20 + 4 and 8 + 10. Each place adds only with its own place.'),
      L('<b>Chamalamaslik.</b> Javob juda katta yoki juda kichik chiqsa, sonlarni yaxlitlab tekshiring: 28 + 14 ≈ 30 + 10 = 40.', '<b>Не делать прикидку.</b> Если ответ слишком большой или маленький, округли и проверь: 28 + 14 ≈ 30 + 10 = 40.', '<b>Not estimating.</b> If the answer looks too big or too small, round and check: 28 + 14 ≈ 30 + 10 = 40.')
    ] },
    { kind: 'life', h: L('Hayotda qayerda kerak?', 'Где это нужно в жизни?', 'Where is this used in life?'), p: [
      L('<b>Bozorda.</b> Kartoshka 18 ming, piyoz 9 ming, go‘sht 65 ming so‘m. Kartoshka va go‘sht: 18 + 65 → 70 + 13 = 83 ming so‘m.', '<b>На рынке.</b> Картошка 18 тысяч, лук 9 тысяч, мясо 65 тысяч сумов. Картошка и мясо: 18 + 65 → 70 + 13 = 83 тысячи.', '<b>At the market.</b> Potatoes cost 18 thousand, onions 9 thousand and meat 65 thousand som. Potatoes and meat: 18 + 65 → 70 + 13 = 83 thousand.'),
      L('<b>Sport.</b> Velosiped poygasida birinchi kuni 37 km, ikkinchi kuni 45 km yurildi. Jami: 70 + 12 = 82 km.', '<b>Спорт.</b> В велогонке в первый день проехали 37 км, во второй — 45 км. Всего: 70 + 12 = 82 км.', '<b>Sport.</b> In a cycle race riders covered 37 km on day one and 45 km on day two. Total: 70 + 12 = 82 km.'),
      L('<b>Kutubxona.</b> Siz sentyabrda 26 ta, oktyabrda 35 ta ertak o‘qidingiz. Jami 50 + 11 = 61 ta ertak — ajoyib natija!', '<b>Библиотека.</b> В сентябре ты прочитал 26 сказок, в октябре — 35. Всего 50 + 11 = 61 сказка — отличный результат!', '<b>Library.</b> You read 26 fairy tales in September and 35 in October. Total 50 + 11 = 61 tales — a great result!'),
      L('<b>Sayohat.</b> Toshkentdan Chirchiqqacha taxminan 36 km, Chirchiqdan Chorvoqqacha 47 km atrofida. Jami: 70 + 13 = 83 km.', '<b>Поездка.</b> От Ташкента до Чирчика около 36 км, от Чирчика до Чарвака — около 47 км. Всего: 70 + 13 = 83 км.', '<b>A trip.</b> It is about 36 km from Tashkent to Chirchiq and about 47 km from Chirchiq to Charvak. Total: 70 + 13 = 83 km.')
    ] },
    { kind: 'fact', h: L('Qiziqarli faktlar', 'Интересные факты', 'Fun facts'), list: [
      L('Fibonachchi sonlar ketma-ketligini ham kashf qilgan: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89… Har bir son oldingi ikkitasining yig‘indisi! 34 + 55 = 89 — bu ham o‘nlikdan o‘tib qo‘shish.', 'Фибоначчи известен и своей последовательностью: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89… Каждое число — сумма двух предыдущих! 34 + 55 = 89 — тоже сложение с переходом.', 'Fibonacci is also famous for his sequence: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89… Each number is the sum of the two before it! 34 + 55 = 89 — another sum that crosses a ten.'),
      L('Kungaboqar gulining o‘rtasidagi urug‘lar spirallarda joylashadi va spirallar soni ko‘pincha Fibonachchi sonlari bo‘ladi: 34 va 55 yoki 55 va 89.', 'Семена в серединке подсолнуха сидят по спиралям, и число спиралей часто равно числам Фибоначчи: 34 и 55 или 55 и 89.', 'The seeds in the middle of a sunflower sit in spirals, and the number of spirals is often a Fibonacci number: 34 and 55, or 55 and 89.'),
      L('Bir yilda 52 hafta va yana 1 yoki 2 kun bor. 52 = 26 + 26 — yilning yarmi 26 hafta.', 'В году 52 недели и ещё 1 или 2 дня. 52 = 26 + 26 — полгода это 26 недель.', 'A year has 52 weeks plus 1 or 2 days. 52 = 26 + 26 — half a year is 26 weeks.'),
      L('Pianinoda 88 ta klavish bor: 52 ta oq va 36 ta qora. 52 + 36 = 88.', 'У пианино 88 клавиш: 52 белые и 36 чёрных. 52 + 36 = 88.', 'A piano has 88 keys: 52 white and 36 black. 52 + 36 = 88.')
    ] },
    { kind: 'practice', h: L('O‘ylab ko‘ring', 'Подумай', 'Think about it'), p: [
      L('Hisoblang va chamalab tekshiring.', 'Вычисли и проверь прикидкой.', 'Work them out and check by estimating.')
    ], list: [
      L('27 + 15 = ?   39 + 26 = ?   48 + 48 = ?', '27 + 15 = ?   39 + 26 = ?   48 + 48 = ?', '27 + 15 = ?   39 + 26 = ?   48 + 48 = ?'),
      L('Qaysi misolda o‘nlikdan o‘tish yo‘q: 34 + 25, 34 + 28, 47 + 46?', 'В каком примере нет перехода: 34 + 25, 34 + 28, 47 + 46?', 'Which sum does not cross a ten: 34 + 25, 34 + 28, 47 + 46?'),
      L('Yetishmayotgan raqamni toping: 2◻ + 19 = 45.', 'Найди пропущенную цифру: 2◻ + 19 = 45.', 'Find the missing digit: 2◻ + 19 = 45.'),
      L('Aziz 35 ta, Malika 27 ta o‘yinchoq mashina yig‘di. Ikkalasida jami nechta?', 'Азиз собрал 35 машинок, Малика — 27. Сколько у них вместе?', 'Aziz collected 35 toy cars and Malika 27. How many do they have together?')
    ], after: [
      L('Javoblar: 42, 65, 96; 34 + 25 = 59; 26 (26 + 19 = 45); 35 + 27 = 50 + 12 = 62 ta mashina.', 'Ответы: 42, 65, 96; 34 + 25 = 59; 26 (26 + 19 = 45); 35 + 27 = 50 + 12 = 62 машинки.', 'Answers: 42, 65, 96; 34 + 25 = 59; 26 (26 + 19 = 45); 35 + 27 = 50 + 12 = 62 cars.')
    ] },
    { kind: 'summary', h: L('Xulosa', 'Итог', 'Summary'), list: [
      L('O‘nliklarni o‘nliklarga, birliklarni birliklarga qo‘shamiz.', 'Десятки складываем с десятками, единицы — с единицами.', 'Add tens to tens and ones to ones.'),
      L('Birliklar 10 dan oshsa, yangi o‘nlik hosil bo‘ladi: 8 + 4 = 12 = 10 + 2.', 'Если единиц больше 10, образуется новый десяток: 8 + 4 = 12 = 10 + 2.', 'If the ones go past 10, a new ten appears: 8 + 4 = 12 = 10 + 2.'),
      L('28 + 14 = 30 + 12 = 42.', '28 + 14 = 30 + 12 = 42.', '28 + 14 = 30 + 12 = 42.'),
      L('Ikkinchi usul: 28 + 14 = 28 + 10 + 4.', 'Второй способ: 28 + 14 = 28 + 10 + 4.', 'Second way: 28 + 14 = 28 + 10 + 4.'),
      L('Birliklardan har doim faqat bitta yangi o‘nlik chiqadi (eng ko‘pi 9 + 9 = 18).', 'Из единиц всегда получается только один новый десяток (максимум 9 + 9 = 18).', 'The ones always give at most one new ten (the most is 9 + 9 = 18).'),
      L('Javobni chamalab tekshiring.', 'Проверяй ответ прикидкой.', 'Check your answer by estimating.')
    ] }
  ] });

  // ---------- t8. 43 − 16 ko'rinishidagi ayirish ----------
  T.add(P, 't8', { sections: [
    { kind: 'intro', h: L('Ikki xonalidan ikki xonalini ayiramiz', 'Вычитаем двузначное из двузначного', 'Taking a two-digit number from a two-digit number'), p: [
      L('Maktab bayramiga 43 ta shar tayyorlandi. Bolalar 16 tasini zalga osishdi. Qutida nechta shar qoldi? Bu safar ayiriladigan son ikki xonali, ustiga-ustak birliklar yetmaydi: 3 dan 6 ni ayirib bo‘lmaydi.', 'К школьному празднику приготовили 43 шарика. Дети повесили 16 в зале. Сколько шариков осталось в коробке? На этот раз вычитаемое двузначное, да ещё и единиц не хватает: из 3 нельзя вычесть 6.', '43 balloons were prepared for the school party. The children hung 16 in the hall. How many are left in the box? This time the number taken away has two digits, and there are not enough ones: you cannot take 6 from 3.'),
      L('Lekin bizda allaqachon ikkita kuchli quroli bor: yaxlit sonni ayirish (t2) va o‘nlikdan o‘tib ayirish (t6). Ularni birlashtiramiz: avval o‘nliklarni ayiramiz 43 − 10 = 33, keyin birliklarni bo‘laklab: 33 − 3 = 30, 30 − 3 = 27.', 'Но у нас уже есть два сильных приёма: вычитание круглого числа и вычитание с переходом через десяток. Соединим их: сначала вычтем десятки 43 − 10 = 33, потом единицы по частям: 33 − 3 = 30, 30 − 3 = 27.', 'But we already have two strong tools: subtracting a round number and subtracting across a ten. Let’s combine them: first take away the tens, 43 − 10 = 33, then the ones in parts: 33 − 3 = 30, 30 − 3 = 27.'),
      L('Bu 2-sinfning I qismidagi eng «qiyin» hisob, lekin qadamma-qadam ishlasak, u ham oson bo‘ladi.', 'Это самый «трудный» счёт в первой части второго класса, но если работать шаг за шагом, и он станет лёгким.', 'This is the “hardest” calculation in Part 1 of Grade 2, but if we go step by step it becomes easy too.')
    ] },
    { kind: 'def', h: L('O‘nlikni maydalash', 'Размен десятка', 'Breaking a ten'), p: [
      L('<b>O‘nlikni maydalash</b> — bitta o‘nlikni 10 ta birlikka almashtirish. 43 da 4 ta o‘nlik va 3 ta birlik bor. Agar bitta o‘nlikni maydalasak, 3 ta o‘nlik va 13 ta birlik bo‘ladi. Son o‘zgarmadi: 30 + 13 = 43!', '<b>Разменять десяток</b> — заменить один десяток на 10 единиц. В 43 четыре десятка и 3 единицы. Если разменять один десяток, будет 3 десятка и 13 единиц. Число не изменилось: 30 + 13 = 43!', '<b>Breaking a ten</b> means swapping one ten for 10 ones. 43 has 4 tens and 3 ones. If we break one ten, we get 3 tens and 13 ones. The number has not changed: 30 + 13 = 43!')
    ], list: [
      L('43 = 40 + 3 = 30 + 13.', '43 = 40 + 3 = 30 + 13.', '43 = 40 + 3 = 30 + 13.'),
      L('Endi birliklardan ayirish mumkin: 13 − 6 = 7.', 'Теперь из единиц можно вычесть: 13 − 6 = 7.', 'Now we can subtract from the ones: 13 − 6 = 7.'),
      L('O‘nliklardan ayiramiz: 30 − 10 = 20.', 'Из десятков вычитаем: 30 − 10 = 20.', 'Subtract from the tens: 30 − 10 = 20.'),
      L('Javob: 20 + 7 = 27.', 'Ответ: 20 + 7 = 27.', 'Answer: 20 + 7 = 27.')
    ], after: [
      L('Pul bilan ham shunday: 10 ming so‘mlik pulni o‘nta 1 minglikka maydalash mumkin. Pul miqdori o‘zgarmaydi, lekin endi undan kerakli summani berish oson.', 'С деньгами так же: купюру в 10 тысяч можно разменять на десять по 1 тысяче. Сумма не меняется, зато теперь легко отдать нужную часть.', 'Money works the same way: a 10-thousand note can be changed into ten 1-thousand notes. The amount does not change, but now it is easy to pay the part you need.')
    ] },
    { kind: 'history', h: L('Cho‘t — ota-bobolarimiz kalkulyatori', 'Счёты — калькулятор наших дедов', 'The counting frame — our grandparents’ calculator'), p: [
      L('Bundan 50–60 yil oldin O‘zbekistondagi har bir do‘konda va idorada <b>cho‘t</b> bo‘lgan. Bu ramkaga o‘rnatilgan simlar va ularga taqilgan munchoqlar. Har bir simda 10 ta munchoq: pastki sim — birliklar, keyingisi — o‘nliklar, undan keyingisi — yuzliklar.', 'Лет 50–60 назад в каждом магазине и конторе Узбекистана были <b>счёты</b>: рамка с проволоками, на которые нанизаны костяшки. На каждой проволоке 10 костяшек: нижняя — единицы, следующая — десятки, потом — сотни.', '50 or 60 years ago every shop and office in Uzbekistan had a <b>counting frame</b> (abacus): a frame with wires and beads. Each wire held 10 beads: the bottom wire for ones, the next for tens, the next for hundreds.'),
      L('Cho‘tda 43 − 16 ni hisoblash uchun hisobchi o‘nliklar simidan 1 ta munchoqni surgan. Birliklar simida faqat 3 ta munchoq bo‘lgan — 6 ni olib bo‘lmaydi. Shunda u o‘nliklar simidan yana 1 ta munchoqni olib, birliklar simiga 10 ta qo‘ygan. Mana, o‘nlikni maydalash — qo‘l bilan!', 'Чтобы посчитать на счётах 43 − 16, счетовод сдвигал 1 костяшку на проволоке десятков. На проволоке единиц было только 3 костяшки — 6 не убрать. Тогда он убирал ещё 1 костяшку десятков и добавлял 10 на проволоку единиц. Вот он, размен десятка — руками!', 'To work out 43 − 16 on a counting frame, the clerk moved 1 bead on the tens wire. The ones wire had only 3 beads — you cannot take 6. So he took 1 more bead from the tens wire and put 10 on the ones wire. There it is — breaking a ten by hand!'),
      L('Rus cho‘ti (schyoti) XVI–XVII asrlarda keng tarqalgan. Mohir hisobchilar unda shunchalik tez ishlaganki, birinchi kalkulyatorlar bilan musobaqada ham yutib chiqishgan.', 'Русские счёты широко распространились в XVI–XVII веках. Опытные счетоводы работали на них так быстро, что выигрывали даже соревнования с первыми калькуляторами.', 'The Russian counting frame spread widely in the 16th and 17th centuries. Skilled clerks worked so fast on it that they even beat the first calculators in contests.')
    ] },
    { kind: 'rule', h: L('Qoida', 'Правило', 'The rule'), p: [
      L('43 − 16 kabi misollarni ikki usulda yechish mumkin.', 'Примеры вида 43 − 16 можно решать двумя способами.', 'Sums like 43 − 16 can be solved in two ways.')
    ], list: [
      L('<b>1-usul (bo‘laklab ayirish).</b> Ayriluvchini o‘nlik va birlikka ajratamiz: 16 = 10 + 6. Avval 10 ni: 43 − 10 = 33. Keyin 6 ni o‘nlikdan o‘tib: 33 − 3 = 30, 30 − 3 = 27.', '<b>Способ 1 (по частям).</b> Раскладываем вычитаемое: 16 = 10 + 6. Сначала 10: 43 − 10 = 33. Потом 6 с переходом: 33 − 3 = 30, 30 − 3 = 27.', '<b>Way 1 (in parts).</b> Split the number taken away: 16 = 10 + 6. First the 10: 43 − 10 = 33. Then the 6 across a ten: 33 − 3 = 30, 30 − 3 = 27.'),
      L('<b>2-usul (o‘nlikni maydalash).</b> 43 = 30 + 13. Birliklar: 13 − 6 = 7. O‘nliklar: 30 − 10 = 20. Javob: 27.', '<b>Способ 2 (размен десятка).</b> 43 = 30 + 13. Единицы: 13 − 6 = 7. Десятки: 30 − 10 = 20. Ответ: 27.', '<b>Way 2 (breaking a ten).</b> 43 = 30 + 13. Ones: 13 − 6 = 7. Tens: 30 − 10 = 20. Answer: 27.')
    ], after: [
      L('Ikkala usul ham bir xil javob beradi. Og‘zaki hisoblashda 1-usul qulayroq, ustun usulida esa 2-usul ishlatiladi (buni t9 mavzusida ko‘ramiz).', 'Оба способа дают один ответ. Устно удобнее способ 1, а в столбике используется способ 2 (это увидим в следующей теме).', 'Both ways give the same answer. Way 1 is handier in your head; Way 2 is used in column subtraction (we will see that in the next topic).'),
      L('Tekshirish: 27 + 16 = 30 + 13 = 43. To‘g‘ri!', 'Проверка: 27 + 16 = 30 + 13 = 43. Верно!', 'Check: 27 + 16 = 30 + 13 = 43. Correct!')
    ] },
    { kind: 'steps', h: L('Qadamma-qadam: 71 − 38', 'Шаг за шагом: 71 − 38', 'Step by step: 71 − 38'), p: [
      L('71 − 38 ni 1-usulda hisoblaymiz:', 'Вычислим 71 − 38 первым способом:', 'Let’s work out 71 − 38 the first way:')
    ], list: [
      L('1-qadam. Ayriluvchini ajratamiz: 38 = 30 + 8.', 'Шаг 1. Раскладываем вычитаемое: 38 = 30 + 8.', 'Step 1. Split the number taken away: 38 = 30 + 8.'),
      L('2-qadam. O‘nliklarni ayiramiz: 71 − 30 = 41.', 'Шаг 2. Вычитаем десятки: 71 − 30 = 41.', 'Step 2. Take away the tens: 71 − 30 = 41.'),
      L('3-qadam. 8 ni bo‘laklaymiz: 8 = 1 + 7.', 'Шаг 3. Раскладываем 8: 8 = 1 + 7.', 'Step 3. Split 8: 8 = 1 + 7.'),
      L('4-qadam. 41 − 1 = 40.', 'Шаг 4. 41 − 1 = 40.', 'Step 4. 41 − 1 = 40.'),
      L('5-qadam. 40 − 7 = 33. Javob: 33.', 'Шаг 5. 40 − 7 = 33. Ответ: 33.', 'Step 5. 40 − 7 = 33. Answer: 33.')
    ], after: [
      L('Tekshirish: 33 + 38 = 60 + 11 = 71. To‘g‘ri! Chamalash: 71 ≈ 70, 38 ≈ 40, 70 − 40 = 30 — javob 33 ga yaqin.', 'Проверка: 33 + 38 = 60 + 11 = 71. Верно! Прикидка: 71 ≈ 70, 38 ≈ 40, 70 − 40 = 30 — близко к 33.', 'Check: 33 + 38 = 60 + 11 = 71. Correct! Estimate: 71 ≈ 70, 38 ≈ 40, 70 − 40 = 30 — close to 33.')
    ] },
    { kind: 'example', h: L('Yechilgan namunalar', 'Разобранные примеры', 'Worked examples'), p: [
      L('Har birini bo‘laklab yeching va tekshiring.', 'Решай каждый по частям и проверяй.', 'Solve each one in parts and check it.')
    ], ex: [
      { q: L('52 − 17 = ?', '52 − 17 = ?', '52 − 17 = ?'), s: L('52 − 10 = 42. 7 = 2 + 5: 42 − 2 = 40, 40 − 5 = <b>35</b>. Tekshiruv: 35 + 17 = 52.', '52 − 10 = 42. 7 = 2 + 5: 42 − 2 = 40, 40 − 5 = <b>35</b>. Проверка: 35 + 17 = 52.', '52 − 10 = 42. 7 = 2 + 5: 42 − 2 = 40, 40 − 5 = <b>35</b>. Check: 35 + 17 = 52.') },
      { q: L('60 − 24 = ?', '60 − 24 = ?', '60 − 24 = ?'), s: L('60 − 20 = 40, 40 − 4 = <b>36</b>.', '60 − 20 = 40, 40 − 4 = <b>36</b>.', '60 − 20 = 40, 40 − 4 = <b>36</b>.') },
      { q: L('83 − 45 = ?', '83 − 45 = ?', '83 − 45 = ?'), s: L('2-usul: 83 = 70 + 13. 13 − 5 = 8, 70 − 40 = 30. Javob: <b>38</b>.', 'Способ 2: 83 = 70 + 13. 13 − 5 = 8, 70 − 40 = 30. Ответ: <b>38</b>.', 'Way 2: 83 = 70 + 13. 13 − 5 = 8, 70 − 40 = 30. Answer: <b>38</b>.') },
      { q: L('94 − 59 = ?', '94 − 59 = ?', '94 − 59 = ?'), s: L('94 − 50 = 44. 9 = 4 + 5: 44 − 4 = 40, 40 − 5 = <b>35</b>.', '94 − 50 = 44. 9 = 4 + 5: 44 − 4 = 40, 40 − 5 = <b>35</b>.', '94 − 50 = 44. 9 = 4 + 5: 44 − 4 = 40, 40 − 5 = <b>35</b>.') },
      { q: L('1-sinf 62 kg, 2-sinf 37 kg makulatura yig‘di. 1-sinf necha kg ko‘p yig‘di?', '1 класс собрал 62 кг макулатуры, 2 класс — 37 кг. На сколько кг больше собрал 1 класс?', 'Class 1 collected 62 kg of waste paper and Class 2 collected 37 kg. How many kg more did Class 1 collect?'), s: L('«Necha ko‘p» — ayirish bilan topiladi: 62 − 37. 62 − 30 = 32, 32 − 2 = 30, 30 − 5 = 25. Javob: <b>25 kg ko‘p</b>.', '«На сколько больше» находим вычитанием: 62 − 37. 62 − 30 = 32, 32 − 2 = 30, 30 − 5 = 25. Ответ: <b>на 25 кг больше</b>.', '“How many more” is found by subtracting: 62 − 37. 62 − 30 = 32, 32 − 2 = 30, 30 − 5 = 25. Answer: <b>25 kg more</b>.') }
    ] },
    { kind: 'table', h: L('Ikki usul yonma-yon', 'Два способа рядом', 'The two ways side by side'), p: [
      L('Bir xil misollarni ikki usulda yechamiz. Qaysi biri sizga yoqadi?', 'Решаем одни и те же примеры двумя способами. Какой тебе нравится больше?', 'We solve the same sums both ways. Which do you prefer?')
    ], table: { head: [L('Misol', 'Пример', 'Sum'), L('1-usul: bo‘laklab', 'Способ 1: по частям', 'Way 1: in parts'), L('2-usul: maydalash', 'Способ 2: размен', 'Way 2: breaking a ten'), L('Javob', 'Ответ', 'Answer')], rows: [
      ['43 − 16', '33 − 3 − 3', '(13 − 6) + 20', '27'],
      ['52 − 17', '42 − 2 − 5', '(12 − 7) + 30', '35'],
      ['71 − 38', '41 − 1 − 7', '(11 − 8) + 30', '33'],
      ['65 − 29', '45 − 5 − 4', '(15 − 9) + 30', '36'],
      ['90 − 46', '50 − 6', '(10 − 6) + 40', '44'],
      ['84 − 57', '34 − 4 − 3', '(14 − 7) + 20', '27']
    ] }, after: [
      L('2-usulda birliklar ustuni 11 dan 18 gacha bo‘lgan sonlardan ayirishga keladi. Shuning uchun «ayirish jadvali» (11 − 2, 12 − 5, 14 − 7 …) ni yoddan bilish juda foydali.', 'Во втором способе приходится вычитать из чисел от 11 до 18. Поэтому таблицу вычитания (11 − 2, 12 − 5, 14 − 7 …) очень полезно знать наизусть.', 'In Way 2 you subtract from numbers between 11 and 18. That is why it is so useful to know the subtraction facts (11 − 2, 12 − 5, 14 − 7 …) by heart.')
    ] },
    { kind: 'mistake', h: L('Tipik xatolar', 'Типичные ошибки', 'Common mistakes'), p: [
      L('43 − 16 kabi misollarda eng ko‘p uchraydigan xatolar:', 'Самые частые ошибки в примерах вида 43 − 16:', 'The most common mistakes in sums like 43 − 16:')
    ], list: [
      L('<b>Teskari ayirish.</b> Birliklarda «6 − 3 = 3» deb 33 yozish. Kamayuvchi birliklaridan ayiramiz, teskari emas! To‘g‘risi 27.', '<b>Вычитать наоборот.</b> В единицах считать «6 − 3 = 3» и писать 33. Вычитаем из единиц уменьшаемого, а не наоборот! Правильно 27.', '<b>Subtracting backwards.</b> In the ones doing “6 − 3 = 3” and writing 33. We subtract from the starting number’s ones, not the other way! The right answer is 27.'),
      L('<b>Maydalangan o‘nlikni unutish.</b> 43 = 30 + 13 qildik, lekin keyin 40 − 10 = 30 deb hisobladik: 37. O‘nliklardan bittasi birliklarga o‘tgan — 30 − 10 = 20, javob 27.', '<b>Забыть про разменянный десяток.</b> Сделали 43 = 30 + 13, а потом считали 40 − 10 = 30 и получили 37. Один десяток ушёл к единицам — 30 − 10 = 20, ответ 27.', '<b>Forgetting the broken ten.</b> We wrote 43 = 30 + 13 but then did 40 − 10 = 30 and got 37. One ten moved to the ones — 30 − 10 = 20, answer 27.'),
      L('<b>Faqat o‘nliklarni ayirish.</b> 43 − 16 = 33 — 6 ni ayirish esdan chiqdi.', '<b>Вычесть только десятки.</b> 43 − 16 = 33 — забыли вычесть 6.', '<b>Taking away only the tens.</b> 43 − 16 = 33 — the 6 was forgotten.'),
      L('<b>«Necha ko‘p» masalasida qo‘shish.</b> «62 kg 37 kg dan necha kg ko‘p?» — bu ayirish: 62 − 37 = 25, qo‘shish emas.', '<b>Складывать в задаче «на сколько больше».</b> «На сколько 62 кг больше 37 кг?» — это вычитание: 62 − 37 = 25, а не сложение.', '<b>Adding in a “how many more” problem.</b> “How much more is 62 kg than 37 kg?” is subtraction: 62 − 37 = 25, not addition.')
    ] },
    { kind: 'life', h: L('Hayotda qayerda kerak?', 'Где это нужно в жизни?', 'Where is this used in life?'), p: [
      L('<b>Qaytim.</b> Kitob 37 ming so‘m, siz 50 ming berdingiz. Qaytim: 50 − 37 = 13 ming so‘m. Sotuvchi buni bir zumda hisoblaydi!', '<b>Сдача.</b> Книга стоит 37 тысяч сумов, ты дал 50 тысяч. Сдача: 50 − 37 = 13 тысяч. Продавец считает это мгновенно!', '<b>Change.</b> A book costs 37 thousand som and you pay 50 thousand. Change: 50 − 37 = 13 thousand. The seller works it out in a flash!'),
      L('<b>Yosh farqi.</b> Bobom 72 yoshda, dadam 45 yoshda. Bobom dadamdan necha yosh katta? 72 − 45 = 27 yosh.', '<b>Разница в возрасте.</b> Дедушке 72 года, папе 45. На сколько лет дедушка старше? 72 − 45 = 27 лет.', '<b>Age difference.</b> Grandpa is 72 and Dad is 45. How much older is Grandpa? 72 − 45 = 27 years.'),
      L('<b>Sport.</b> Futbol o‘yini 90 daqiqa. 34 daqiqa o‘tdi. Qancha qoldi? 90 − 34 = 56 daqiqa.', '<b>Спорт.</b> Футбольный матч длится 90 минут. Прошло 34. Сколько осталось? 90 − 34 = 56 минут.', '<b>Sport.</b> A football match lasts 90 minutes. 34 minutes have gone. How many are left? 90 − 34 = 56 minutes.'),
      L('<b>Kitob o‘qish.</b> Kitobda 85 bet, siz 48 betini o‘qidingiz. Oxirigacha 85 − 48 = 37 bet qoldi.', '<b>Чтение.</b> В книге 85 страниц, ты прочитал 48. До конца 85 − 48 = 37 страниц.', '<b>Reading.</b> A book has 85 pages and you have read 48. There are 85 − 48 = 37 pages to go.')
    ] },
    { kind: 'fact', h: L('Qiziqarli faktlar', 'Интересные факты', 'Fun facts'), list: [
      L('Yer yuzidagi eng baland tog‘ — Everest, taxminan 8849 metr. O‘zbekistondagi eng baland cho‘qqi — Hazrati Sulton, taxminan 4643 metr.', 'Самая высокая гора на Земле — Эверест, около 8849 метров. Самая высокая вершина Узбекистана — Хазрет-Султан, около 4643 метров.', 'The highest mountain on Earth is Everest, about 8 849 metres. The highest peak in Uzbekistan is Hazrat Sultan, about 4 643 metres.'),
      L('Gepard soatiga 100 km dan tezroq yugura oladi, odam esa eng tez yugurganda soatiga 44 km atrofida. Farqi: 100 − 44 = 56 km!', 'Гепард бегает быстрее 100 км в час, а самый быстрый человек — около 44 км в час. Разница: 100 − 44 = 56 км!', 'A cheetah can run faster than 100 km per hour, while the fastest human reaches about 44 km per hour. Difference: 100 − 44 = 56 km!'),
      L('Oyda 28–31 kun bor. Fevral eng qisqa oy — odatda 28 kun. 31 − 28 = 3 kun farq.', 'В месяце 28–31 день. Февраль — самый короткий, обычно 28 дней. 31 − 28 = 3 дня разницы.', 'A month has 28 to 31 days. February is the shortest, usually 28 days. 31 − 28 = 3 days’ difference.'),
      L('Toshbaqalar 100 yildan ortiq yashashi mumkin, it esa odatda 10–15 yil yashaydi.', 'Черепахи могут жить больше 100 лет, а собака обычно живёт 10–15 лет.', 'Tortoises can live more than 100 years, while a dog usually lives 10 to 15 years.')
    ] },
    { kind: 'practice', h: L('O‘ylab ko‘ring', 'Подумай', 'Think about it'), p: [
      L('Bo‘laklab hisoblang, javobni qo‘shish bilan tekshiring.', 'Считай по частям и проверяй сложением.', 'Work in parts and check by adding.')
    ], list: [
      L('54 − 18 = ?   73 − 46 = ?   81 − 29 = ?', '54 − 18 = ?   73 − 46 = ?   81 − 29 = ?', '54 − 18 = ?   73 − 46 = ?   81 − 29 = ?'),
      L('Qaysi son 35 dan 17 ta kam?', 'Какое число на 17 меньше 35?', 'Which number is 17 less than 35?'),
      L('Yetishmayotgan sonni toping: 62 − ◻ = 38.', 'Найди пропущенное число: 62 − ◻ = 38.', 'Find the missing number: 62 − ◻ = 38.'),
      L('Bekatda 45 kishi avtobus kutayotgan edi. 28 kishi avtobusga chiqdi. Nechta kishi qoldi?', 'На остановке 45 человек ждали автобус. 28 из них сели. Сколько осталось?', '45 people were waiting at a bus stop. 28 got on the bus. How many are left?')
    ], after: [
      L('Javoblar: 36, 27, 52; 18; 24 (62 − 24 = 38); 45 − 28 = 17 kishi.', 'Ответы: 36, 27, 52; 18; 24 (62 − 24 = 38); 45 − 28 = 17 человек.', 'Answers: 36, 27, 52; 18; 24 (62 − 24 = 38); 45 − 28 = 17 people.')
    ] },
    { kind: 'summary', h: L('Xulosa', 'Итог', 'Summary'), list: [
      L('43 − 16 da birliklar yetmaydi — bitta o‘nlikni maydalaymiz yoki bo‘laklab ayiramiz.', 'В 43 − 16 не хватает единиц — разменяем десяток или вычитаем по частям.', 'In 43 − 16 there are not enough ones — break a ten or subtract in parts.'),
      L('1-usul: 43 − 10 = 33, 33 − 3 = 30, 30 − 3 = 27.', 'Способ 1: 43 − 10 = 33, 33 − 3 = 30, 30 − 3 = 27.', 'Way 1: 43 − 10 = 33, 33 − 3 = 30, 30 − 3 = 27.'),
      L('2-usul: 43 = 30 + 13; 13 − 6 = 7; 30 − 10 = 20; javob 27.', 'Способ 2: 43 = 30 + 13; 13 − 6 = 7; 30 − 10 = 20; ответ 27.', 'Way 2: 43 = 30 + 13; 13 − 6 = 7; 30 − 10 = 20; answer 27.'),
      L('Maydalangan o‘nlikni o‘nliklardan ayirishni unutmang.', 'Не забывай, что разменянный десяток уже ушёл из десятков.', 'Remember that the broken ten has left the tens.'),
      L('Birliklarni teskari ayirmang: 6 − 3 emas, 13 − 6!', 'Не вычитай единицы наоборот: не 6 − 3, а 13 − 6!', 'Never subtract the ones backwards: not 6 − 3 but 13 − 6!'),
      L('Tekshirish: ayirma + ayriluvchi = kamayuvchi (27 + 16 = 43).', 'Проверка: разность + вычитаемое = уменьшаемое (27 + 16 = 43).', 'Check: difference + number taken away = starting number (27 + 16 = 43).')
    ] }
  ] });
})(this);
(function (root) {
  'use strict';
  var L = root.NMCurriculum.H.L, T = root.NMTheory, P = '2-1';

  // ---------- t9. Ustun ko'rinishida qo'shish va ayirish ----------
  T.add(P, 't9', { sections: [
    { kind: 'intro', h: L('Sonlar ustunga tizilsa', 'Когда числа встают в столбик', 'When numbers line up in a column'), p: [
      L('Shu paytgacha biz hammasini og‘zaki hisobladik. Lekin sonlar ko‘payib, misollar qiyinlashsa, hammasini yodda saqlash qiyin. Shunda bizga <b>ustun usuli</b> yordam beradi: sonlarni bir-birining ostiga yozamiz va xonama-xona hisoblaymiz.', 'До сих пор мы считали всё устно. Но когда числа растут и примеры усложняются, держать всё в голове трудно. Тогда на помощь приходит <b>столбик</b>: пишем числа одно под другим и считаем по разрядам.', 'Until now we did everything in our heads. But when numbers grow and sums get harder, it is difficult to keep everything in mind. That is when the <b>column method</b> helps: we write the numbers one under the other and work place by place.'),
      L('Ustun usuli — butun dunyo maktablarida o‘rgatiladigan universal usul. Siz uni o‘rgansangiz, keyinchalik uch, to‘rt va undan ham ko‘p xonali sonlarni xuddi shunday oson qo‘sha olasiz.', 'Столбик — универсальный способ, которому учат в школах всего мира. Освоив его, ты потом так же легко будешь складывать трёх-, четырёхзначные и ещё большие числа.', 'The column method is a universal method taught in schools all over the world. Once you learn it, you will later add three-digit, four-digit and even bigger numbers just as easily.'),
      L('Bu mavzuda ustunda qo‘shish va ayirishni, «o‘nlikni yodda tutish» va «o‘nlikni olish»ni o‘rganamiz.', 'В этой теме научимся складывать и вычитать в столбик, «запоминать десяток» и «занимать десяток».', 'In this topic we learn column addition and subtraction, “carrying a ten” and “borrowing a ten”.')
    ] },
    { kind: 'def', h: L('Ustun usuli qoidalari', 'Правила записи в столбик', 'Rules for writing a column'), p: [
      L('Ustunda to‘g‘ri yozish — yarim muvaffaqiyat. Uchta asosiy qoida bor:', 'Правильная запись в столбик — половина успеха. Есть три главных правила:', 'Writing the column correctly is half the battle. There are three main rules:')
    ], list: [
      L('<b>Birliklar birliklar ostida, o‘nliklar o‘nliklar ostida.</b> Har bir raqam o‘z xonasida turishi kerak — daftar kataklari bunga yordam beradi.', '<b>Единицы под единицами, десятки под десятками.</b> Каждая цифра стоит в своём разряде — клеточки тетради в этом помогают.', '<b>Ones under ones, tens under tens.</b> Each digit must stand in its own place — the squares in your exercise book help with this.'),
      L('<b>Amal belgisi chapda</b>, sonlar o‘rtasida. Ostiga chiziq tortamiz, javob chiziq ostida yoziladi.', '<b>Знак действия слева</b>, между числами. Под ними проводим черту, ответ пишем под чертой.', '<b>The operation sign goes on the left</b>, between the numbers. We draw a line underneath and write the answer below it.'),
      L('<b>Hisob o‘ngdan boshlanadi</b> — birliklardan. Keyin o‘nliklarga o‘tamiz.', '<b>Считаем справа</b> — с единиц. Потом переходим к десяткам.', '<b>We start on the right</b> — with the ones. Then we move to the tens.')
    ], after: [
      L('Nega o‘ngdan? Chunki birliklardan yangi o‘nlik chiqishi mumkin, va uni o‘nliklarga qo‘shish kerak. Agar o‘nliklardan boshlasak, keyin javobni o‘zgartirishga to‘g‘ri keladi.', 'Почему справа? Потому что из единиц может получиться новый десяток, и его надо прибавить к десяткам. Если начать с десятков, ответ придётся переделывать.', 'Why from the right? Because the ones may make a new ten, which has to be added to the tens. If we started with the tens, we would have to change the answer afterwards.')
    ] },
    { kind: 'history', h: L('Ustun usuli tarixi', 'История счёта столбиком', 'The history of the column method'), p: [
      L('Ustun usuli faqat <b>o‘rin qiymatli</b> yozuvda ishlaydi — ya’ni raqamning ma’nosi uning joyiga bog‘liq bo‘lganda. 47 da 4 «qirq», 74 da esa «to‘rt». Rim raqamlari bilan ustunda hisoblab bo‘lmaydi, shuning uchun rimliklar abakdan foydalangan.', 'Столбик работает только в <b>позиционной</b> записи — когда значение цифры зависит от её места. В 47 цифра 4 означает «сорок», а в 74 — «четыре». С римскими цифрами в столбик не посчитаешь, поэтому римляне пользовались абаком.', 'The column method works only with <b>place value</b> — when the meaning of a digit depends on its position. In 47 the 4 means “forty”, but in 74 it means “four”. You cannot do columns with Roman numerals, so the Romans used an abacus.'),
      L('Hind olimlari o‘rin qiymatli yozuvni va nolni o‘ylab topgan. Al-Xorazmiy esa IX asrda bu raqamlar bilan qo‘shish, ayirish va boshqa amallarni bajarish qoidalarini kitobida tushuntirib bergan. Uning kitobida sonlarni xonama-xona qo‘shish va o‘nlikni keyingi xonaga o‘tkazish usullari bayon qilingan.', 'Индийские учёные придумали позиционную запись и ноль. А аль-Хорезми в IX веке объяснил в своей книге правила сложения, вычитания и других действий с этими цифрами. В ней описано, как складывать числа по разрядам и переносить десяток в следующий разряд.', 'Indian scholars invented place value and zero. In the 9th century al-Khwarizmi explained in his book the rules for adding, subtracting and other operations with these digits. It describes adding numbers place by place and carrying a ten into the next place.'),
      L('Qadimda hisob ko‘pincha qum yoki chang sepilgan taxtada bajarilgan — raqamlarni o‘chirib, qayta yozish oson bo‘lgan. Qog‘oz arzonlashgach, ustun usuli hozirgi ko‘rinishini oldi.', 'В старину считали часто на доске, посыпанной песком или пылью, — цифры легко было стереть и написать заново. Когда бумага подешевела, столбик принял нынешний вид.', 'In the old days calculations were often done on a board sprinkled with sand or dust, so digits could be rubbed out and rewritten easily. Once paper became cheap, the column method took on its present form.')
    ] },
    { kind: 'rule', h: L('O‘nlikni yodda tutish va olish', 'Запоминаем и занимаем десяток', 'Carrying and borrowing a ten'), p: [
      L('<b>Qo‘shishda.</b> Birliklar yig‘indisi 10 yoki undan ko‘p bo‘lsa, birliklar xonasiga faqat oxirgi raqamni yozamiz, 1 o‘nlikni esa «yodda tutamiz» va o‘nliklarga qo‘shamiz. Ko‘pincha bu 1 o‘nliklar ustiga kichkina qilib yoziladi.', '<b>При сложении.</b> Если сумма единиц 10 или больше, в разряд единиц пишем только последнюю цифру, а 1 десяток «запоминаем» и прибавляем к десяткам. Часто эту 1 пишут маленькой над десятками.', '<b>In addition.</b> If the ones add up to 10 or more, write only the last digit in the ones place and “carry” 1 ten to the tens. This 1 is often written small above the tens.'),
      L('38 + 25: 8 + 5 = 13 → 3 ni yozamiz, 1 yodda. 3 + 2 = 5, yana 1 — 6. Javob: <b>63</b>.', '38 + 25: 8 + 5 = 13 → пишем 3, 1 в уме. 3 + 2 = 5, да ещё 1 — 6. Ответ: <b>63</b>.', '38 + 25: 8 + 5 = 13 → write 3, carry 1. 3 + 2 = 5, plus 1 — 6. Answer: <b>63</b>.'),
      L('<b>Ayirishda.</b> Yuqoridagi birliklar pastdagidan kam bo‘lsa, o‘nliklardan 1 o‘nlikni «olamiz». Birliklarga 10 qo‘shiladi, o‘nliklar esa 1 taga kamayadi. Ko‘pincha o‘nliklar ustiga nuqta qo‘yiladi.', '<b>При вычитании.</b> Если единиц вверху меньше, чем внизу, «занимаем» 1 десяток. К единицам прибавляется 10, а десятков становится на 1 меньше. Часто над десятками ставят точку.', '<b>In subtraction.</b> If the top ones are smaller than the bottom ones, “borrow” 1 ten. The ones get 10 more and the tens go down by 1. Often a dot is put above the tens.'),
      L('64 − 28: 4 dan 8 ni olib bo‘lmaydi, o‘nlik olamiz: 14 − 8 = 6. O‘nliklar: 5 − 2 = 3. Javob: <b>36</b>.', '64 − 28: из 4 нельзя вычесть 8, занимаем десяток: 14 − 8 = 6. Десятки: 5 − 2 = 3. Ответ: <b>36</b>.', '64 − 28: you cannot take 8 from 4, so borrow a ten: 14 − 8 = 6. Tens: 5 − 2 = 3. Answer: <b>36</b>.')
    ] },
    { kind: 'steps', h: L('Ustunda qo‘shish: qadamlar', 'Сложение в столбик: шаги', 'Column addition: the steps'), p: [
      L('<b>47 + 36</b> ni ustunda hisoblaymiz:', 'Вычислим в столбик <b>47 + 36</b>:', 'Let’s work out <b>47 + 36</b> in a column:'),
      L('&nbsp;&nbsp;47<br>+ 36<br>——<br>&nbsp;&nbsp;83', '&nbsp;&nbsp;47<br>+ 36<br>——<br>&nbsp;&nbsp;83', '&nbsp;&nbsp;47<br>+ 36<br>——<br>&nbsp;&nbsp;83')
    ], list: [
      L('1-qadam. 36 ni 47 ostiga yozamiz: 6 — 7 ostida, 3 — 4 ostida. Chapga «+» qo‘yib, chiziq tortamiz.', 'Шаг 1. Пишем 36 под 47: 6 под 7, 3 под 4. Слева ставим «+», проводим черту.', 'Step 1. Write 36 under 47: 6 under 7, 3 under 4. Put “+” on the left and draw a line.'),
      L('2-qadam. Birliklar: 7 + 6 = 13. Birliklar ostiga 3 yozamiz, 1 o‘nlikni yodda tutamiz.', 'Шаг 2. Единицы: 7 + 6 = 13. Под единицами пишем 3, 1 десяток запоминаем.', 'Step 2. Ones: 7 + 6 = 13. Write 3 under the ones and carry 1 ten.'),
      L('3-qadam. O‘nliklar: 4 + 3 = 7, yana yoddagi 1 — 8. O‘nliklar ostiga 8 yozamiz.', 'Шаг 3. Десятки: 4 + 3 = 7, да ещё 1 в уме — 8. Под десятками пишем 8.', 'Step 3. Tens: 4 + 3 = 7, plus the carried 1 — 8. Write 8 under the tens.'),
      L('4-qadam. O‘qiymiz: 83.', 'Шаг 4. Читаем ответ: 83.', 'Step 4. Read the answer: 83.')
    ], after: [
      L('<b>Ayirish 72 − 45:</b> birliklar 2 dan 5 ni olib bo‘lmaydi — o‘nlik olamiz: 12 − 5 = 7. O‘nliklar: 7 edi, 1 tasini oldik — 6. 6 − 4 = 2. Javob: 27. Tekshiruv: 27 + 45 = 72.', '<b>Вычитание 72 − 45:</b> из 2 нельзя вычесть 5 — занимаем десяток: 12 − 5 = 7. Десятков было 7, один заняли — 6. 6 − 4 = 2. Ответ: 27. Проверка: 27 + 45 = 72.', '<b>Subtracting 72 − 45:</b> you cannot take 5 from 2, so borrow a ten: 12 − 5 = 7. There were 7 tens; we borrowed 1 — 6. 6 − 4 = 2. Answer: 27. Check: 27 + 45 = 72.')
    ] },
    { kind: 'example', h: L('Yechilgan namunalar', 'Разобранные примеры', 'Worked examples'), p: [
      L('Har bir misolni daftaringizga ustunda yozib, yechib ko‘ring.', 'Запиши каждый пример в тетради столбиком и реши.', 'Write each sum in a column in your exercise book and solve it.')
    ], ex: [
      { q: L('Ustunda: 38 + 25', 'Столбиком: 38 + 25', 'In a column: 38 + 25'), s: L('Birliklar: 8 + 5 = 13, 3 yozamiz, 1 yodda. O‘nliklar: 3 + 2 + 1 = 6. Javob: <b>63</b>.', 'Единицы: 8 + 5 = 13, пишем 3, 1 в уме. Десятки: 3 + 2 + 1 = 6. Ответ: <b>63</b>.', 'Ones: 8 + 5 = 13, write 3, carry 1. Tens: 3 + 2 + 1 = 6. Answer: <b>63</b>.') },
      { q: L('Ustunda: 54 + 32', 'Столбиком: 54 + 32', 'In a column: 54 + 32'), s: L('Birliklar: 4 + 2 = 6 — o‘tish yo‘q. O‘nliklar: 5 + 3 = 8. Javob: <b>86</b>.', 'Единицы: 4 + 2 = 6 — перехода нет. Десятки: 5 + 3 = 8. Ответ: <b>86</b>.', 'Ones: 4 + 2 = 6 — no carrying. Tens: 5 + 3 = 8. Answer: <b>86</b>.') },
      { q: L('Ustunda: 64 − 28', 'Столбиком: 64 − 28', 'In a column: 64 − 28'), s: L('4 &lt; 8, o‘nlik olamiz: 14 − 8 = 6. O‘nliklar: 6 − 1 = 5, 5 − 2 = 3. Javob: <b>36</b>.', '4 &lt; 8, занимаем десяток: 14 − 8 = 6. Десятки: 6 − 1 = 5, 5 − 2 = 3. Ответ: <b>36</b>.', '4 &lt; 8, borrow a ten: 14 − 8 = 6. Tens: 6 − 1 = 5, 5 − 2 = 3. Answer: <b>36</b>.') },
      { q: L('Ustunda: 90 − 37', 'Столбиком: 90 − 37', 'In a column: 90 − 37'), s: L('0 dan 7 ni olib bo‘lmaydi, o‘nlik olamiz: 10 − 7 = 3. O‘nliklar: 9 − 1 = 8, 8 − 3 = 5. Javob: <b>53</b>.', 'Из 0 нельзя вычесть 7, занимаем десяток: 10 − 7 = 3. Десятки: 9 − 1 = 8, 8 − 3 = 5. Ответ: <b>53</b>.', 'You cannot take 7 from 0, so borrow a ten: 10 − 7 = 3. Tens: 9 − 1 = 8, 8 − 3 = 5. Answer: <b>53</b>.') },
      { q: L('Ustunda: 66 + 34', 'Столбиком: 66 + 34', 'In a column: 66 + 34'), s: L('Birliklar: 6 + 4 = 10, 0 yozamiz, 1 yodda. O‘nliklar: 6 + 3 + 1 = 10. Javob: <b>100</b> — yuz!', 'Единицы: 6 + 4 = 10, пишем 0, 1 в уме. Десятки: 6 + 3 + 1 = 10. Ответ: <b>100</b> — сто!', 'Ones: 6 + 4 = 10, write 0, carry 1. Tens: 6 + 3 + 1 = 10. Answer: <b>100</b> — one hundred!') }
    ] },
    { kind: 'table', h: L('Ustun usuli jadvali', 'Таблица столбика', 'A column-method table'), p: [
      L('Har bir misolda birliklar va o‘nliklar alohida hisoblanadi. «Yodda» ustuniga e’tibor bering.', 'В каждом примере единицы и десятки считаются отдельно. Обрати внимание на столбец «в уме».', 'In each sum the ones and tens are worked out separately. Notice the “carry/borrow” column.')
    ], table: { head: [L('Misol', 'Пример', 'Sum'), L('Birliklar', 'Единицы', 'Ones'), L('Yodda / olindi', 'В уме / заняли', 'Carry / borrow'), L('O‘nliklar', 'Десятки', 'Tens'), L('Javob', 'Ответ', 'Answer')], rows: [
      ['38 + 25', '8 + 5 = 13; 3', L('1 yodda', '1 в уме', 'carry 1'), '3 + 2 + 1 = 6', '63'],
      ['47 + 36', '7 + 6 = 13; 3', L('1 yodda', '1 в уме', 'carry 1'), '4 + 3 + 1 = 8', '83'],
      ['52 + 41', '2 + 1 = 3', L('yo‘q', 'нет', 'none'), '5 + 4 = 9', '93'],
      ['64 − 28', '14 − 8 = 6', L('1 olindi', '1 заняли', 'borrow 1'), '5 − 2 = 3', '36'],
      ['72 − 45', '12 − 5 = 7', L('1 olindi', '1 заняли', 'borrow 1'), '6 − 4 = 2', '27'],
      ['89 − 35', '9 − 5 = 4', L('yo‘q', 'нет', 'none'), '8 − 3 = 5', '54']
    ] }, after: [
      L('Qo‘shishda o‘nliklarga 1 qo‘shiladi, ayirishda esa o‘nliklardan 1 ayriladi. Buni aralashtirmang!', 'При сложении к десяткам прибавляется 1, а при вычитании из десятков вычитается 1. Не перепутай!', 'In addition 1 is added to the tens; in subtraction 1 is taken from the tens. Do not mix them up!')
    ] },
    { kind: 'mistake', h: L('Tipik xatolar', 'Типичные ошибки', 'Common mistakes'), p: [
      L('Ustun usulida eng ko‘p uchraydigan xatolar:', 'Самые частые ошибки в столбике:', 'The most common mistakes in the column method:')
    ], list: [
      L('<b>Noto‘g‘ri yozish.</b> 47 + 6 ni yozganda 6 ni 4 ostiga qo‘yish. 6 — birlik, u 7 ostida turishi kerak!', '<b>Неправильная запись.</b> Записывая 47 + 6, ставить 6 под 4. 6 — единицы, её место под 7!', '<b>Lining up wrongly.</b> Writing 47 + 6 with the 6 under the 4. 6 is ones; it belongs under the 7!'),
      L('<b>Chapdan boshlash.</b> O‘nliklardan boshlasangiz, yoddagi 1 ni qo‘shishga kech qolasiz.', '<b>Начинать слева.</b> Если начать с десятков, потом будет поздно прибавлять 1 из ума.', '<b>Starting on the left.</b> If you start with the tens, it is too late to add the carried 1.'),
      L('<b>Yoddagi 1 ni unutish.</b> 38 + 25 = 53? Birliklardan chiqqan o‘nlik qo‘shilmagan. To‘g‘risi 63.', '<b>Забыть 1 в уме.</b> 38 + 25 = 53? Десяток из единиц не прибавили. Правильно 63.', '<b>Forgetting the carried 1.</b> 38 + 25 = 53? The ten from the ones was not added. The right answer is 63.'),
      L('<b>Olingan o‘nlikni unutish.</b> 64 − 28 = 46? Birliklar to‘g‘ri (6), lekin o‘nliklar 6 − 2 = 4 emas, 5 − 2 = 3. Javob 36.', '<b>Забыть занятый десяток.</b> 64 − 28 = 46? Единицы верно (6), но десятки не 6 − 2 = 4, а 5 − 2 = 3. Ответ 36.', '<b>Forgetting the borrowed ten.</b> 64 − 28 = 46? The ones are right (6), but the tens are not 6 − 2 = 4 but 5 − 2 = 3. Answer 36.'),
      L('<b>Teskari ayirish.</b> 64 − 28 da «8 − 4 = 4» deb yozish. Har doim yuqoridagi sondan pastdagini ayiramiz.', '<b>Вычитать наоборот.</b> В 64 − 28 писать «8 − 4 = 4». Всегда из верхнего числа вычитаем нижнее.', '<b>Subtracting upside down.</b> In 64 − 28 writing “8 − 4 = 4”. Always take the bottom number from the top one.')
    ] },
    { kind: 'life', h: L('Hayotda qayerda kerak?', 'Где это нужно в жизни?', 'Where is this used in life?'), p: [
      L('<b>Do‘kondagi chek.</b> Kassa mashinasi ham ustun usulida hisoblaydi — narxlarni bir-birining ostiga yozib, yig‘indini topadi. Chekka qarasangiz, narxlar aynan ustunda tizilgan!', '<b>Чек в магазине.</b> Кассовый аппарат тоже считает столбиком — пишет цены одну под другой и находит сумму. Посмотри на чек: цены выстроены именно в столбик!', '<b>A shop receipt.</b> The till also adds in a column — it lists the prices one under another and finds the total. Look at a receipt: the prices are lined up in a column!'),
      L('<b>Oilaviy byudjet.</b> Ota-onalar oylik xarajatlarni daftarga ustunga yozib qo‘shishadi: non, sut, yo‘l kira, kommunal to‘lovlar.', '<b>Семейный бюджет.</b> Родители записывают расходы за месяц в тетрадь столбиком и складывают: хлеб, молоко, проезд, коммунальные платежи.', '<b>A family budget.</b> Parents write the month’s spending in a column in a notebook and add it up: bread, milk, bus fares, bills.'),
      L('<b>Sport jadvali.</b> Futbol ligasida har bir jamoaning ochkolari ustunda yoziladi. Murabbiy g‘alabalar va duranglardan olingan ochkolarni qo‘shib, umumiy natijani topadi.', '<b>Спортивная таблица.</b> В футбольной лиге очки каждой команды пишут в столбик. Тренер складывает очки за победы и ничьи и получает общий итог.', '<b>A sports table.</b> In a football league each team’s points are written in a column. The coach adds the points for wins and draws to get the total.'),
      L('<b>Kompyuter.</b> Kompyuter protsessori ham sonlarni xonama-xona qo‘shadi va «yoddagi» birlikni keyingi xonaga o‘tkazadi — faqat juda-juda tez!', '<b>Компьютер.</b> Процессор компьютера тоже складывает числа по разрядам и переносит «запомненную» единицу в следующий разряд — только очень-очень быстро!', '<b>Computers.</b> A computer’s processor also adds numbers place by place and carries the “remembered” 1 into the next place — only very, very fast!')
    ] },
    { kind: 'fact', h: L('Qiziqarli faktlar', 'Интересные факты', 'Fun facts'), list: [
      L('Zamonaviy kompyuter bir soniyada milliardlab qo‘shish amalini bajaradi. Har birida «o‘nlikni yodda tutish» kabi «ko‘chirish» bor.', 'Современный компьютер выполняет миллиарды сложений в секунду. В каждом есть «перенос», как наш «десяток в уме».', 'A modern computer does billions of additions a second. Each one has a “carry”, just like our “ten in mind”.'),
      L('Ba’zi mamlakatlarda ayirishni ustunda boshqacha yozishadi: o‘nlik olish o‘rniga pastki songa 1 qo‘shishadi. Usullar har xil, javob esa bir xil!', 'В некоторых странах вычитание в столбик записывают иначе: вместо того чтобы занимать десяток, прибавляют 1 к нижнему числу. Способы разные, а ответ один!', 'In some countries column subtraction is written differently: instead of borrowing a ten, they add 1 to the bottom number. The methods differ, but the answer is the same!'),
      L('Birinchi mexanik hisoblash mashinasini 1642-yilda fransuz olimi Blez Paskal 19 yoshida ixtiro qilgan. U otasiga soliqlarni hisoblashda yordam berish uchun yasagan, va mashina o‘nlikni keyingi xonaga avtomatik o‘tkazgan.', 'Одну из первых механических счётных машин изобрёл в 1642 году 19-летний французский учёный Блез Паскаль. Он сделал её, чтобы помочь отцу считать налоги, и машина сама переносила десяток в следующий разряд.', 'One of the first mechanical calculating machines was invented in 1642 by the French scientist Blaise Pascal when he was 19. He built it to help his father with tax sums, and it carried tens to the next place automatically.'),
      L('Yapon maktab o‘quvchilari ustunda hisoblashni 2-sinfda o‘rganadi — xuddi siz kabi!', 'Японские школьники учатся считать в столбик во 2 классе — так же, как ты!', 'Japanese schoolchildren learn column calculation in Grade 2 — just like you!')
    ] },
    { kind: 'practice', h: L('O‘ylab ko‘ring', 'Подумай', 'Think about it'), p: [
      L('Daftaringizga ustunda yozib yeching.', 'Реши в тетради столбиком.', 'Solve these in a column in your exercise book.')
    ], list: [
      L('29 + 47 = ?   56 + 38 = ?   45 + 55 = ?', '29 + 47 = ?   56 + 38 = ?   45 + 55 = ?', '29 + 47 = ?   56 + 38 = ?   45 + 55 = ?'),
      L('81 − 36 = ?   70 − 24 = ?   95 − 58 = ?', '81 − 36 = ?   70 − 24 = ?   95 − 58 = ?', '81 − 36 = ?   70 − 24 = ?   95 − 58 = ?'),
      L('Xatoni toping: 46 + 28 = 64.', 'Найди ошибку: 46 + 28 = 64.', 'Find the mistake: 46 + 28 = 64.'),
      L('Bog‘da 57 tup olma va 26 tup nok daraxti bor. Jami nechta daraxt?', 'В саду 57 яблонь и 26 груш. Сколько всего деревьев?', 'An orchard has 57 apple trees and 26 pear trees. How many trees in all?')
    ], after: [
      L('Javoblar: 76, 94, 100; 45, 46, 37; yoddagi 1 qo‘shilmagan — to‘g‘risi 74; 57 + 26 = 83 tup.', 'Ответы: 76, 94, 100; 45, 46, 37; забыли 1 в уме — правильно 74; 57 + 26 = 83 дерева.', 'Answers: 76, 94, 100; 45, 46, 37; the carried 1 was forgotten — it should be 74; 57 + 26 = 83 trees.')
    ] },
    { kind: 'summary', h: L('Xulosa', 'Итог', 'Summary'), list: [
      L('Ustunda birliklarni birliklar ostiga, o‘nliklarni o‘nliklar ostiga yozamiz.', 'В столбике пишем единицы под единицами, десятки под десятками.', 'In a column write ones under ones and tens under tens.'),
      L('Hisobni o‘ngdan — birliklardan boshlaymiz.', 'Начинаем счёт справа — с единиц.', 'Start on the right — with the ones.'),
      L('Qo‘shishda birliklar 10 dan oshsa — 1 o‘nlikni yodda tutib, o‘nliklarga qo‘shamiz.', 'При сложении, если единиц больше 10, — 1 десяток запоминаем и прибавляем к десяткам.', 'In addition, if the ones make 10 or more, carry 1 ten to the tens.'),
      L('Ayirishda birliklar yetmasa — 1 o‘nlikni olamiz, o‘nliklar 1 taga kamayadi.', 'При вычитании, если единиц не хватает, — занимаем 1 десяток, десятков становится на 1 меньше.', 'In subtraction, if the ones are too few, borrow 1 ten; the tens go down by 1.'),
      L('Har doim yuqoridagi sondan pastdagini ayiramiz.', 'Всегда вычитаем нижнее число из верхнего.', 'Always subtract the bottom number from the top one.'),
      L('Ustun usuli o‘rin qiymatli yozuv tufayli ishlaydi — bu hind olimlari va al-Xorazmiyning merosi.', 'Столбик работает благодаря позиционной записи — наследию индийских учёных и аль-Хорезми.', 'The column method works thanks to place value — a legacy of Indian scholars and al-Khwarizmi.')
    ] }
  ] });

  // ---------- t10. Qo'shishning xossalari. Og'zaki hisoblash usullari ----------
  T.add(P, 't10', { sections: [
    { kind: 'intro', h: L('Hisoblashning sehrli sirlari', 'Волшебные секреты счёта', 'The magic secrets of calculating'), p: [
      L('O‘qituvchi doskaga yozdi: 17 + 25 + 3. Bolalar ustun usulini boshlashdi, lekin Shahzoda darrov qo‘l ko‘tardi: «45!» Qanday qilib shunchalik tez? Shahzoda tushuntirdi: «17 va 3 — bu 20. 20 va 25 — 45. Men sonlarni qulay qilib guruhladim.»', 'Учительница написала на доске: 17 + 25 + 3. Дети начали считать столбиком, но Шахзода сразу подняла руку: «45!» Как так быстро? Шахзода объяснила: «17 и 3 — это 20. 20 и 25 — 45. Я удобно сгруппировала числа».', 'The teacher wrote on the board: 17 + 25 + 3. The children started on columns, but Shahzoda put up her hand at once: “45!” How so fast? Shahzoda explained: “17 and 3 make 20. 20 and 25 make 45. I grouped the numbers in a handy way.”'),
      L('Shahzoda qo‘shishning ikkita muhim <b>xossasi</b>dan foydalandi. Ular har qanday sonlar uchun to‘g‘ri va og‘zaki hisoblashni juda tezlashtiradi.', 'Шахзода воспользовалась двумя важными <b>свойствами</b> сложения. Они верны для любых чисел и очень ускоряют устный счёт.', 'Shahzoda used two important <b>properties</b> of addition. They are true for any numbers and make mental maths much faster.'),
      L('Bu mavzuda shu xossalarni va bir nechta og‘zaki hisoblash «hiyla»larini o‘rganamiz. Ular bilan siz sinfdagi eng tez hisoblovchi bo‘lishingiz mumkin!', 'В этой теме изучим эти свойства и несколько «хитростей» устного счёта. С ними ты можешь стать самым быстрым счётчиком в классе!', 'In this topic we learn these properties and a few mental-maths “tricks”. With them you could become the fastest calculator in your class!')
    ] },
    { kind: 'def', h: L('Qo‘shishning ikki xossasi', 'Два свойства сложения', 'Two properties of addition'), p: [
      L('Qo‘shishning ikkita asosiy xossasi bor:', 'У сложения два главных свойства:', 'Addition has two main properties:')
    ], list: [
      L('<b>O‘rin almashtirish xossasi:</b> qo‘shiluvchilarning o‘rni almashtirilsa, yig‘indi o‘zgarmaydi. a + b = b + a. Masalan: 15 + 37 = 37 + 15 = 52.', '<b>Переместительное свойство:</b> от перестановки слагаемых сумма не меняется. a + b = b + a. Например: 15 + 37 = 37 + 15 = 52.', '<b>The swap (commutative) property:</b> swapping the addends does not change the sum. a + b = b + a. For example: 15 + 37 = 37 + 15 = 52.'),
      L('<b>Guruhlash xossasi:</b> uchta sonni qo‘shganda, ularni istalgan tartibda guruhlash mumkin — yig‘indi o‘zgarmaydi. (a + b) + c = a + (b + c). Masalan: (26 + 18) + 2 = 26 + (18 + 2) = 46.', '<b>Сочетательное свойство:</b> складывая три числа, их можно группировать как угодно — сумма не изменится. (a + b) + c = a + (b + c). Например: (26 + 18) + 2 = 26 + (18 + 2) = 46.', '<b>The grouping (associative) property:</b> when adding three numbers you can group them any way — the sum does not change. (a + b) + c = a + (b + c). For example: (26 + 18) + 2 = 26 + (18 + 2) = 46.')
    ], after: [
      L('Qavslar «buni avval hisobla» degan ma’noni bildiradi. (26 + 18) + 2 da avval 26 + 18 = 44, keyin 44 + 2 = 46. 26 + (18 + 2) da avval 18 + 2 = 20, keyin 26 + 20 = 46. Ikkinchi yo‘l ancha oson!', 'Скобки означают «посчитай это сначала». В (26 + 18) + 2 сначала 26 + 18 = 44, потом 44 + 2 = 46. В 26 + (18 + 2) сначала 18 + 2 = 20, потом 26 + 20 = 46. Второй путь гораздо легче!', 'Brackets mean “work this out first”. In (26 + 18) + 2 first 26 + 18 = 44, then 44 + 2 = 46. In 26 + (18 + 2) first 18 + 2 = 20, then 26 + 20 = 46. The second way is much easier!'),
      L('Diqqat: ayirishda bu xossalar ishlamaydi! 10 − 3 ≠ 3 − 10.', 'Внимание: для вычитания эти свойства не работают! 10 − 3 ≠ 3 − 10.', 'Careful: these properties do not work for subtraction! 10 − 3 ≠ 3 − 10.')
    ] },
    { kind: 'history', h: L('Yosh Gauss va 1 dan 100 gacha yig‘indi', 'Юный Гаусс и сумма от 1 до 100', 'Young Gauss and the sum from 1 to 100'), p: [
      L('Taxminan 240 yil oldin Germaniyada bir o‘qituvchi o‘quvchilarini band qilish uchun topshiriq berdi: 1 dan 100 gacha bo‘lgan barcha sonlarni qo‘shing. Bolalar 1 + 2 + 3 + … deb uzoq hisoblashga tushdi. Lekin 9–10 yoshli <b>Karl Fridrix Gauss</b> bir necha daqiqada javobni aytdi: 5050!', 'Около 240 лет назад в Германии учитель дал ученикам задание, чтобы надолго их занять: сложить все числа от 1 до 100. Дети принялись долго считать 1 + 2 + 3 + … А 9–10-летний <b>Карл Фридрих Гаусс</b> через несколько минут назвал ответ: 5050!', 'About 240 years ago in Germany a teacher set his pupils a task to keep them busy: add all the numbers from 1 to 100. The children began the long count 1 + 2 + 3 + … But 9- or 10-year-old <b>Carl Friedrich Gauss</b> gave the answer in a few minutes: 5050!'),
      L('Gauss sonlarni qulay juftlarga guruhladi: 1 + 100 = 101, 2 + 99 = 101, 3 + 98 = 101… Bunday juftlar 50 ta, har biri 101. Bu aynan biz o‘rganayotgan o‘rin almashtirish va guruhlash xossalari!', 'Гаусс сгруппировал числа в удобные пары: 1 + 100 = 101, 2 + 99 = 101, 3 + 98 = 101… Таких пар 50, в каждой 101. Это и есть переместительное и сочетательное свойства, которые мы изучаем!', 'Gauss grouped the numbers into handy pairs: 1 + 100 = 101, 2 + 99 = 101, 3 + 98 = 101… There are 50 such pairs, each worth 101. These are exactly the swap and grouping properties we are learning!'),
      L('Keyinchalik Gauss dunyodagi eng buyuk matematiklardan biriga aylandi. Uni hatto «matematiklar qiroli» deb atashgan. Hammasi esa aqlli guruhlashdan boshlangan edi.', 'Позже Гаусс стал одним из величайших математиков мира. Его даже называли «королём математиков». А началось всё с умной группировки.', 'Gauss later became one of the greatest mathematicians in the world. He was even called the “prince of mathematicians”. And it all began with clever grouping.')
    ] },
    { kind: 'rule', h: L('Og‘zaki hisoblash usullari', 'Приёмы устного счёта', 'Mental maths tricks'), p: [
      L('Xossalardan foydalanib, quyidagi usullar bilan tez hisoblash mumkin:', 'Пользуясь свойствами, можно быстро считать такими приёмами:', 'Using the properties, you can calculate quickly with these tricks:')
    ], list: [
      L('<b>«Do‘st sonlar»ni toping.</b> Birliklari qo‘shilib 10 beradigan sonlarni birga qo‘shing: 17 + 25 + 3 → (17 + 3) + 25 = 45.', '<b>Найди «числа-друзья».</b> Складывай вместе числа, у которых единицы дают 10: 17 + 25 + 3 → (17 + 3) + 25 = 45.', '<b>Find “friendly numbers”.</b> Add together the numbers whose ones make 10: 17 + 25 + 3 → (17 + 3) + 25 = 45.'),
      L('<b>Kattasidan boshlang.</b> 4 + 58 ni 58 + 4 deb hisoblash oson.', '<b>Начинай с большего.</b> 4 + 58 легче считать как 58 + 4.', '<b>Start with the bigger number.</b> 4 + 58 is easier as 58 + 4.'),
      L('<b>Yaxlitlab, keyin tuzating.</b> 36 + 19: 19 ≈ 20. 36 + 20 = 56, lekin 1 ortiqcha qo‘shdik: 56 − 1 = 55.', '<b>Округли, потом поправь.</b> 36 + 19: 19 ≈ 20. 36 + 20 = 56, но прибавили на 1 больше: 56 − 1 = 55.', '<b>Round, then fix.</b> 36 + 19: 19 ≈ 20. 36 + 20 = 56, but we added 1 too many: 56 − 1 = 55.'),
      L('<b>O‘nliklar va birliklarni alohida.</b> 34 + 25 + 6: o‘nliklar 30 + 20 = 50, birliklar 4 + 5 + 6 = 15, jami 65.', '<b>Десятки и единицы отдельно.</b> 34 + 25 + 6: десятки 30 + 20 = 50, единицы 4 + 5 + 6 = 15, всего 65.', '<b>Tens and ones separately.</b> 34 + 25 + 6: tens 30 + 20 = 50, ones 4 + 5 + 6 = 15, total 65.')
    ] },
    { kind: 'steps', h: L('Qadamma-qadam: 26 + 18 + 4', 'Шаг за шагом: 26 + 18 + 4', 'Step by step: 26 + 18 + 4'), p: [
      L('Uchta sonni qulay usulda qo‘shamiz:', 'Сложим три числа удобным способом:', 'Let’s add three numbers the smart way:')
    ], list: [
      L('1-qadam. Hamma sonlarning birliklariga qaraymiz: 6, 8, 4.', 'Шаг 1. Смотрим на единицы всех чисел: 6, 8, 4.', 'Step 1. Look at the ones of all the numbers: 6, 8, 4.'),
      L('2-qadam. Qaysi ikkitasi 10 beradi? 6 + 4 = 10. Demak, 26 va 4 — «do‘stlar».', 'Шаг 2. Какие две дают 10? 6 + 4 = 10. Значит, 26 и 4 — «друзья».', 'Step 2. Which two make 10? 6 + 4 = 10. So 26 and 4 are “friends”.'),
      L('3-qadam. Ularni birga qo‘shamiz: 26 + 4 = 30.', 'Шаг 3. Складываем их вместе: 26 + 4 = 30.', 'Step 3. Add them together: 26 + 4 = 30.'),
      L('4-qadam. Qolganini qo‘shamiz: 30 + 18 = 48.', 'Шаг 4. Прибавляем оставшееся: 30 + 18 = 48.', 'Step 4. Add the rest: 30 + 18 = 48.')
    ], after: [
      L('Agar tartib bilan hisoblaganimizda: 26 + 18 = 44 (o‘nlikdan o‘tish!), 44 + 4 = 48. Javob bir xil, lekin birinchi yo‘l osonroq va xato qilish ehtimoli kamroq.', 'А если считать по порядку: 26 + 18 = 44 (с переходом!), 44 + 4 = 48. Ответ тот же, но первый путь проще и ошибиться в нём труднее.', 'If we went in order: 26 + 18 = 44 (crossing a ten!), 44 + 4 = 48. Same answer, but the first way is easier and harder to get wrong.')
    ] },
    { kind: 'example', h: L('Yechilgan namunalar', 'Разобранные примеры', 'Worked examples'), p: [
      L('Har birida eng qulay yo‘lni toping.', 'В каждом найди самый удобный путь.', 'Find the handiest way in each one.')
    ], ex: [
      { q: L('9 + 56 + 1 = ?', '9 + 56 + 1 = ?', '9 + 56 + 1 = ?'), s: L('9 + 1 = 10 — do‘st sonlar! 10 + 56 = <b>66</b>.', '9 + 1 = 10 — числа-друзья! 10 + 56 = <b>66</b>.', '9 + 1 = 10 — friendly numbers! 10 + 56 = <b>66</b>.') },
      { q: L('15 + 37 = 37 + ?', '15 + 37 = 37 + ?', '15 + 37 = 37 + ?'), s: L('O‘rin almashtirish xossasi: 15 + 37 = 37 + <b>15</b>. Hisoblash shart emas!', 'Переместительное свойство: 15 + 37 = 37 + <b>15</b>. Считать даже не нужно!', 'The swap property: 15 + 37 = 37 + <b>15</b>. No calculating needed!') },
      { q: L('23 + 14 + 7 + 6 = ?', '23 + 14 + 7 + 6 = ?', '23 + 14 + 7 + 6 = ?'), s: L('Juftlaymiz: (23 + 7) + (14 + 6) = 30 + 20 = <b>50</b>.', 'Группируем пары: (23 + 7) + (14 + 6) = 30 + 20 = <b>50</b>.', 'Pair them up: (23 + 7) + (14 + 6) = 30 + 20 = <b>50</b>.') },
      { q: L('47 + 29 = ?', '47 + 29 = ?', '47 + 29 = ?'), s: L('Yaxlitlaymiz: 29 ≈ 30. 47 + 30 = 77, 1 ortiqcha: 77 − 1 = <b>76</b>.', 'Округляем: 29 ≈ 30. 47 + 30 = 77, лишняя 1: 77 − 1 = <b>76</b>.', 'Round: 29 ≈ 30. 47 + 30 = 77, 1 too many: 77 − 1 = <b>76</b>.') },
      { q: L('Do‘konda 18 ta qizil, 35 ta ko‘k va 12 ta sariq shar bor. Jami nechta?', 'В магазине 18 красных, 35 синих и 12 жёлтых шаров. Сколько всего?', 'A shop has 18 red, 35 blue and 12 yellow balloons. How many in all?'), s: L('18 + 12 = 30 (8 + 2 = 10). 30 + 35 = <b>65 ta shar</b>.', '18 + 12 = 30 (8 + 2 = 10). 30 + 35 = <b>65 шаров</b>.', '18 + 12 = 30 (8 + 2 = 10). 30 + 35 = <b>65 balloons</b>.') }
    ] },
    { kind: 'table', h: L('«Do‘st sonlar» jadvali', 'Таблица «чисел-друзей»', 'A table of friendly numbers'), p: [
      L('Bu juftlarning birliklari 10 ni tashkil qiladi, shuning uchun yig‘indi doim yaxlit son.', 'У этих пар единицы дают 10, поэтому сумма всегда круглая.', 'The ones in these pairs make 10, so the sum is always a round number.')
    ], table: { head: [L('Juftlik', 'Пара', 'Pair'), L('Birliklar', 'Единицы', 'Ones'), L('Yig‘indi', 'Сумма', 'Sum')], rows: [
      ['17 + 3', '7 + 3', '20'],
      ['26 + 4', '6 + 4', '30'],
      ['18 + 12', '8 + 2', '30'],
      ['35 + 15', '5 + 5', '50'],
      ['41 + 29', '1 + 9', '70'],
      ['64 + 36', '4 + 6', '100']
    ] }, after: [
      L('Uzun misolda avval shunday juftlarni qidiring — ular hisobni ikki barobar tezlashtiradi.', 'В длинном примере сначала ищи такие пары — они ускоряют счёт вдвое.', 'In a long sum, look for such pairs first — they make calculating twice as fast.')
    ] },
    { kind: 'mistake', h: L('Tipik xatolar', 'Типичные ошибки', 'Common mistakes'), p: [
      L('Xossalarni qo‘llaganda ehtiyot bo‘ling:', 'Применяя свойства, будь внимателен:', 'Be careful when using the properties:')
    ], list: [
      L('<b>Ayirishda o‘rin almashtirish.</b> 30 − 8 ni «8 − 30» deb bo‘lmaydi! O‘rin almashtirish faqat qo‘shishda ishlaydi.', '<b>Переставлять при вычитании.</b> 30 − 8 нельзя заменить на «8 − 30»! Перестановка работает только для сложения.', '<b>Swapping in subtraction.</b> You cannot turn 30 − 8 into “8 − 30”! Swapping works only for addition.'),
      L('<b>Biror sonni yo‘qotish.</b> 23 + 14 + 7 + 6 da juftlab, bitta sonni unutish. Hisoblagan sonlarni chizib qo‘ying.', '<b>Потерять число.</b> Группируя 23 + 14 + 7 + 6, забыть одно из чисел. Зачёркивай уже сложенные числа.', '<b>Losing a number.</b> Pairing up 23 + 14 + 7 + 6 and forgetting one. Cross out numbers you have already used.'),
      L('<b>Yaxlitlagandan keyin tuzatmaslik.</b> 47 + 29 = 47 + 30 = 77? 1 ortiqcha qo‘shdik, javob 76.', '<b>Не поправлять после округления.</b> 47 + 29 = 47 + 30 = 77? Прибавили лишнюю 1, ответ 76.', '<b>Not fixing after rounding.</b> 47 + 29 = 47 + 30 = 77? We added 1 extra, so the answer is 76.'),
      L('<b>Noto‘g‘ri tomonga tuzatish.</b> 47 + 29: 77 + 1 = 78 — noto‘g‘ri. Ko‘p qo‘shgan bo‘lsak, ayiramiz.', '<b>Поправлять не в ту сторону.</b> 47 + 29: 77 + 1 = 78 — неверно. Прибавили больше — значит, вычитаем.', '<b>Fixing the wrong way.</b> 47 + 29: 77 + 1 = 78 — wrong. If we added too much, we subtract.')
    ] },
    { kind: 'life', h: L('Hayotda qayerda kerak?', 'Где это нужно в жизни?', 'Where is this used in life?'), p: [
      L('<b>Do‘konda.</b> Siz 17 ming, 25 ming va 3 ming so‘mlik narsalar oldingiz. Kassaga yetguncha hisoblang: 17 + 3 = 20, 20 + 25 = 45 ming. Pulingiz yetadimi — darrov bilasiz!', '<b>В магазине.</b> Ты взял товары за 17, 25 и 3 тысячи сумов. Посчитай, пока идёшь к кассе: 17 + 3 = 20, 20 + 25 = 45 тысяч. Сразу ясно, хватит ли денег!', '<b>In a shop.</b> You pick items costing 17, 25 and 3 thousand som. Add them on the way to the till: 17 + 3 = 20, 20 + 25 = 45 thousand. You know at once whether you have enough!'),
      L('<b>Sportda.</b> Gimnastikachi uch mashqda 8, 7 va 2 ball oldi (shartli misol). 8 + 2 = 10, 10 + 7 = 17 ball.', '<b>В спорте.</b> Гимнаст получил за три упражнения 8, 7 и 2 балла (условный пример). 8 + 2 = 10, 10 + 7 = 17 баллов.', '<b>In sport.</b> A gymnast scores 8, 7 and 2 points in three routines (a made-up example). 8 + 2 = 10, 10 + 7 = 17 points.'),
      L('<b>Ziyofatga tayyorgarlik.</b> Mehmonlarga 24 ta somsa, 16 ta pirojki va 35 ta konfet tayyorlandi. Somsa va pirojki: 24 + 16 = 40 dona.', '<b>Подготовка к празднику.</b> Для гостей приготовили 24 самсы, 16 пирожков и 35 конфет. Самса и пирожки: 24 + 16 = 40 штук.', '<b>Getting ready for a party.</b> For the guests there are 24 samsas, 16 pies and 35 sweets. Samsas and pies: 24 + 16 = 40 pieces.'),
      L('<b>Vaqt.</b> Uy vazifasiga 25 daqiqa, kitob o‘qishga 15 daqiqa, rasm chizishga 20 daqiqa. 25 + 15 = 40, 40 + 20 = 60 daqiqa — roppa-rosa 1 soat!', '<b>Время.</b> На домашнее задание 25 минут, на чтение 15, на рисование 20. 25 + 15 = 40, 40 + 20 = 60 минут — ровно час!', '<b>Time.</b> Homework takes 25 minutes, reading 15 and drawing 20. 25 + 15 = 40, 40 + 20 = 60 minutes — exactly an hour!')
    ] },
    { kind: 'fact', h: L('Qiziqarli faktlar', 'Интересные факты', 'Fun facts'), list: [
      L('1 dan 10 gacha sonlar yig‘indisi 55 ga teng. Gauss usuli bilan: (1 + 10) + (2 + 9) + … — 5 ta juft, har biri 11.', 'Сумма чисел от 1 до 10 равна 55. По способу Гаусса: (1 + 10) + (2 + 9) + … — 5 пар по 11.', 'The numbers from 1 to 10 add up to 55. Gauss’s way: (1 + 10) + (2 + 9) + … — 5 pairs of 11.'),
      L('Sehrli kvadratda har bir qator, ustun va diagonal yig‘indisi bir xil. 3 × 3 sehrli kvadratda 1 dan 9 gacha sonlar ishlatiladi va har bir qator yig‘indisi 15.', 'В магическом квадрате суммы всех строк, столбцов и диагоналей одинаковы. В квадрате 3 × 3 из чисел от 1 до 9 каждая сумма равна 15.', 'In a magic square every row, column and diagonal has the same sum. In a 3 × 3 magic square using 1 to 9, each line adds up to 15.'),
      L('Eng qadimgi ma’lum sehrli kvadrat — Xitoyning «Lo Shu»si. Afsonaga ko‘ra, uni daryodan chiqqan toshbaqa kosasida ko‘rishgan.', 'Самый древний известный магический квадрат — китайский «Ло Шу». По легенде, его увидели на панцире черепахи, вышедшей из реки.', 'The oldest known magic square is the Chinese “Lo Shu”. Legend says it was seen on the shell of a turtle that came out of a river.'),
      L('Og‘zaki hisoblash bo‘yicha jahon chempionatlari o‘tkaziladi. Ishtirokchilar 10 ta o‘n xonali sonni kalkulyatorsiz qo‘shadi!', 'Проводятся чемпионаты мира по устному счёту. Участники складывают 10 десятизначных чисел без калькулятора!', 'There are world championships in mental calculation. Contestants add ten 10-digit numbers without a calculator!')
    ] },
    { kind: 'practice', h: L('O‘ylab ko‘ring', 'Подумай', 'Think about it'), p: [
      L('Eng qulay yo‘lni tanlang.', 'Выбери самый удобный путь.', 'Choose the handiest way.')
    ], list: [
      L('8 + 37 + 2 = ?   44 + 19 + 6 = ?', '8 + 37 + 2 = ?   44 + 19 + 6 = ?', '8 + 37 + 2 = ?   44 + 19 + 6 = ?'),
      L('21 + 15 + 9 + 5 = ?', '21 + 15 + 9 + 5 = ?', '21 + 15 + 9 + 5 = ?'),
      L('58 + 39 = ? (yaxlitlash usulida)', '58 + 39 = ? (способом округления)', '58 + 39 = ? (by rounding)'),
      L('To‘g‘rimi: 25 + 48 = 48 + 25? 25 − 8 = 8 − 25?', 'Верно ли: 25 + 48 = 48 + 25? 25 − 8 = 8 − 25?', 'True or false: 25 + 48 = 48 + 25? 25 − 8 = 8 − 25?')
    ], after: [
      L('Javoblar: 47, 69; (21 + 9) + (15 + 5) = 50; 58 + 40 − 1 = 97; birinchisi to‘g‘ri, ikkinchisi noto‘g‘ri.', 'Ответы: 47, 69; (21 + 9) + (15 + 5) = 50; 58 + 40 − 1 = 97; первое верно, второе нет.', 'Answers: 47, 69; (21 + 9) + (15 + 5) = 50; 58 + 40 − 1 = 97; the first is true, the second false.')
    ] },
    { kind: 'summary', h: L('Xulosa', 'Итог', 'Summary'), list: [
      L('O‘rin almashtirish: a + b = b + a.', 'Переместительное свойство: a + b = b + a.', 'Swap property: a + b = b + a.'),
      L('Guruhlash: (a + b) + c = a + (b + c).', 'Сочетательное свойство: (a + b) + c = a + (b + c).', 'Grouping property: (a + b) + c = a + (b + c).'),
      L('Bu xossalar faqat qo‘shishda ishlaydi, ayirishda emas.', 'Эти свойства работают только для сложения, не для вычитания.', 'These properties work only for addition, not subtraction.'),
      L('«Do‘st sonlar»ni (birliklari 10 beradigan) birga qo‘shing.', 'Складывай вместе «числа-друзья» (единицы дают 10).', 'Add “friendly numbers” (whose ones make 10) together.'),
      L('Yaxlitlab hisoblang, keyin tuzating: 36 + 19 = 36 + 20 − 1.', 'Округли, потом поправь: 36 + 19 = 36 + 20 − 1.', 'Round, then fix: 36 + 19 = 36 + 20 − 1.'),
      L('Yosh Gauss ham 1 dan 100 gacha yig‘indini aqlli guruhlash bilan topgan.', 'Юный Гаусс нашёл сумму от 1 до 100 тоже умной группировкой.', 'Young Gauss found the sum from 1 to 100 by clever grouping too.')
    ] }
  ] });
})(this);
(function (root) {
  'use strict';
  var L = root.NMCurriculum.H.L, T = root.NMTheory, P = '2-1';

  // ---------- t11. Yig'indidan sonni va sondan yig'indini ayirish ----------
  T.add(P, 't11', { sections: [
    { kind: 'intro', h: L('Qavslar bilan aqlli ayirish', 'Умное вычитание со скобками', 'Smart subtraction with brackets'), p: [
      L('Kutubxonada 30 ta ertak va 8 ta she’rlar kitobi bor edi. O‘quvchilar 5 ta she’rlar kitobini olishdi. Nechta kitob qoldi? Buni (30 + 8) − 5 deb yozamiz. Avval qo‘shib 38 − 5 qilish mumkin, lekin yana ham oson yo‘l bor: 5 ni 8 dan ayiramiz — 30 + 3 = 33.', 'В библиотеке было 30 книг сказок и 8 книг стихов. Ученики взяли 5 книг стихов. Сколько книг осталось? Запишем: (30 + 8) − 5. Можно сначала сложить и получить 38 − 5, но есть путь ещё проще: вычтем 5 из 8 — 30 + 3 = 33.', 'A library had 30 fairy-tale books and 8 poetry books. Pupils borrowed 5 poetry books. How many books are left? We write (30 + 8) − 5. We could add first and do 38 − 5, but there is an even easier way: take 5 from 8 — 30 + 3 = 33.'),
      L('Bu mavzuda ikki yangi qoidani o‘rganamiz: <b>yig‘indidan sonni ayirish</b> va <b>sondan yig‘indini ayirish</b>. Ular bilan ko‘p misollarni og‘zaki, bir zumda yechish mumkin.', 'В этой теме мы узнаем два новых правила: <b>вычитание числа из суммы</b> и <b>вычитание суммы из числа</b>. С ними многие примеры решаются устно и мгновенно.', 'In this topic we learn two new rules: <b>subtracting a number from a sum</b> and <b>subtracting a sum from a number</b>. With them many sums can be solved in your head in a flash.'),
      L('Qavslar bizga qaysi amalni avval bajarishni ko‘rsatadi. Lekin aqlli hisoblovchi qavslar ichidagi sonlar bilan «o‘ynab», eng qulay yo‘lni topa oladi.', 'Скобки показывают, какое действие выполнять первым. Но умный вычислитель может «поиграть» с числами в скобках и найти самый удобный путь.', 'Brackets tell us which operation to do first. But a smart calculator can “play” with the numbers in the brackets and find the handiest way.')
    ] },
    { kind: 'def', h: L('Qavslar va tartib', 'Скобки и порядок действий', 'Brackets and order'), p: [
      L('<b>Qavslar</b> ( ) — «avval buni hisobla» degan belgi. (30 + 8) − 5 da avval qavs ichini, keyin ayirishni bajaramiz. 40 − (10 + 6) da ham avval qavs ichini: 10 + 6 = 16, keyin 40 − 16 = 24.', '<b>Скобки</b> ( ) — знак «сначала посчитай это». В (30 + 8) − 5 сначала считаем в скобках, потом вычитаем. В 40 − (10 + 6) тоже сначала скобки: 10 + 6 = 16, потом 40 − 16 = 24.', '<b>Brackets</b> ( ) are a sign that means “work this out first”. In (30 + 8) − 5 we work out the brackets first, then subtract. In 40 − (10 + 6) also the brackets first: 10 + 6 = 16, then 40 − 16 = 24.')
    ], list: [
      L('<b>Yig‘indidan sonni ayirish:</b> (a + b) − c. Masalan: (30 + 8) − 5.', '<b>Вычитание числа из суммы:</b> (a + b) − c. Например: (30 + 8) − 5.', '<b>Subtracting a number from a sum:</b> (a + b) − c. For example: (30 + 8) − 5.'),
      L('<b>Sondan yig‘indini ayirish:</b> a − (b + c). Masalan: 40 − (10 + 6).', '<b>Вычитание суммы из числа:</b> a − (b + c). Например: 40 − (10 + 6).', '<b>Subtracting a sum from a number:</b> a − (b + c). For example: 40 − (10 + 6).'),
      L('Qavslar bo‘lmasa, amallar chapdan o‘ngga tartib bilan bajariladi: 48 + 16 − 20 = 64 − 20 = 44.', 'Если скобок нет, действия выполняются по порядку слева направо: 48 + 16 − 20 = 64 − 20 = 44.', 'Without brackets, operations go in order from left to right: 48 + 16 − 20 = 64 − 20 = 44.')
    ], after: [
      L('Qavslarsiz va qavsli misollar har xil javob berishi mumkin: 20 − 5 + 3 = 18, lekin 20 − (5 + 3) = 12. Shuning uchun qavslarga doim e’tibor bering!', 'Примеры со скобками и без могут давать разные ответы: 20 − 5 + 3 = 18, а 20 − (5 + 3) = 12. Поэтому всегда обращай внимание на скобки!', 'Sums with and without brackets can give different answers: 20 − 5 + 3 = 18, but 20 − (5 + 3) = 12. So always pay attention to brackets!')
    ] },
    { kind: 'history', h: L('Qavslar va belgilar tarixi', 'История скобок и знаков', 'The history of brackets and signs'), p: [
      L('Biz ishlatadigan «+» va «−» belgilari unchalik qadimiy emas. Ular taxminan 500 yil oldin, 1489-yilda Germaniyada bosilgan arifmetika kitobida paydo bo‘lgan. Undan oldin odamlar «qo‘sh», «ayir» so‘zlarini yozishgan yoki boshqa qisqartmalardan foydalanishgan.', 'Знаки «+» и «−», которыми мы пользуемся, не такие уж древние. Они появились около 500 лет назад, в арифметической книге, напечатанной в Германии в 1489 году. До этого люди писали слова «прибавь», «отними» или другие сокращения.', 'The “+” and “−” signs we use are not that old. They appeared about 500 years ago, in an arithmetic book printed in Germany in 1489. Before that people wrote out words like “add” and “take away” or used other abbreviations.'),
      L('«=» belgisini 1557-yilda uelslik olim Robert Rekord o‘ylab topgan. U yozganidek, «ikkita parallel chiziqdan ko‘ra tengroq narsa yo‘q». Qavslar esa XVI–XVII asrlarda keng tarqalgan.', 'Знак «=» придумал в 1557 году валлийский учёный Роберт Рекорд. Он объяснил, что нет ничего более равного, чем две параллельные линии. А скобки широко распространились в XVI–XVII веках.', 'The “=” sign was invented in 1557 by the Welsh scholar Robert Recorde. He explained that nothing is more equal than two parallel lines. Brackets came into wide use in the 16th and 17th centuries.'),
      L('Al-Xorazmiy davrida esa matematika belgilarsiz, so‘zlar bilan yozilgan! «Bir narsaga o‘nni qo‘shib, undan beshni ayir…» Bugungi qisqa yozuv — ko‘p asrlik ixtirolar natijasi.', 'А во времена аль-Хорезми математику записывали без знаков, словами! «К вещи прибавь десять и отними пять…» Нынешняя краткая запись — результат многовековых изобретений.', 'In al-Khwarizmi’s time maths was written without signs, in words! “To a thing add ten and take away five…” Today’s short notation is the result of centuries of inventions.')
    ] },
    { kind: 'rule', h: L('Ikki qoida', 'Два правила', 'Two rules'), p: [
      L('<b>1-qoida. Yig‘indidan sonni ayirish.</b> Sonni qo‘shiluvchilardan biridan ayirib, natijaga ikkinchi qo‘shiluvchini qo‘shish mumkin:', '<b>Правило 1. Вычитание числа из суммы.</b> Можно вычесть число из одного слагаемого и прибавить к результату другое слагаемое:', '<b>Rule 1. Subtracting a number from a sum.</b> You can subtract the number from one of the addends and then add the other addend:'),
      L('(a + b) − c = a + (b − c) yoki (a − c) + b. Masalan: (30 + 8) − 5 = 30 + (8 − 5) = 33. Yoki (20 + 9) − 10 = (20 − 10) + 9 = 19.', '(a + b) − c = a + (b − c) или (a − c) + b. Например: (30 + 8) − 5 = 30 + (8 − 5) = 33. Или (20 + 9) − 10 = (20 − 10) + 9 = 19.', '(a + b) − c = a + (b − c) or (a − c) + b. For example: (30 + 8) − 5 = 30 + (8 − 5) = 33. Or (20 + 9) − 10 = (20 − 10) + 9 = 19.'),
      L('<b>2-qoida. Sondan yig‘indini ayirish.</b> Qo‘shiluvchilarni birin-ketin ayirish mumkin:', '<b>Правило 2. Вычитание суммы из числа.</b> Можно вычитать слагаемые одно за другим:', '<b>Rule 2. Subtracting a sum from a number.</b> You can subtract the addends one after the other:'),
      L('a − (b + c) = a − b − c. Masalan: 40 − (10 + 6) = 40 − 10 − 6 = 30 − 6 = 24.', 'a − (b + c) = a − b − c. Например: 40 − (10 + 6) = 40 − 10 − 6 = 30 − 6 = 24.', 'a − (b + c) = a − b − c. For example: 40 − (10 + 6) = 40 − 10 − 6 = 30 − 6 = 24.')
    ], after: [
      L('Qaysi qo‘shiluvchidan ayirishni tanlash — sizning ixtiyoringiz. Qaysi biri qulay bo‘lsa, o‘shandan ayiring. Faqat ayirish mumkin bo‘lgan qo‘shiluvchini tanlang: (30 + 8) − 5 da 5 ni 8 dan olish qulay.', 'Из какого слагаемого вычитать — решать тебе. Выбирай то, из которого удобнее. Только выбирай слагаемое, из которого можно вычесть: в (30 + 8) − 5 удобно вычесть 5 из 8.', 'Which addend to subtract from is your choice. Pick the one that is handiest. Just choose an addend you can subtract from: in (30 + 8) − 5 it is handy to take 5 from 8.')
    ] },
    { kind: 'steps', h: L('Qadamma-qadam', 'Шаг за шагом', 'Step by step'), p: [
      L('<b>(60 + 9) − 4</b> ni hisoblaymiz:', 'Вычислим <b>(60 + 9) − 4</b>:', 'Let’s work out <b>(60 + 9) − 4</b>:')
    ], list: [
      L('1-qadam. Qo‘shiluvchilarga qaraymiz: 60 va 9. Ayriluvchi — 4.', 'Шаг 1. Смотрим на слагаемые: 60 и 9. Вычитаемое — 4.', 'Step 1. Look at the addends: 60 and 9. The number taken away is 4.'),
      L('2-qadam. 4 ni qaysi qo‘shiluvchidan ayirish qulay? 9 dan: 9 − 4 = 5.', 'Шаг 2. Из какого слагаемого удобно вычесть 4? Из 9: 9 − 4 = 5.', 'Step 2. Which addend is handiest to take 4 from? The 9: 9 − 4 = 5.'),
      L('3-qadam. Ikkinchi qo‘shiluvchini qo‘shamiz: 60 + 5 = 65.', 'Шаг 3. Прибавляем другое слагаемое: 60 + 5 = 65.', 'Step 3. Add the other addend: 60 + 5 = 65.'),
      L('<b>50 − (20 + 7)</b> ni hisoblaymiz:', 'Вычислим <b>50 − (20 + 7)</b>:', 'Let’s work out <b>50 − (20 + 7)</b>:'),
      L('1-qadam. Avval birinchi qo‘shiluvchini ayiramiz: 50 − 20 = 30.', 'Шаг 1. Сначала вычитаем первое слагаемое: 50 − 20 = 30.', 'Step 1. First subtract the first addend: 50 − 20 = 30.'),
      L('2-qadam. Keyin ikkinchisini: 30 − 7 = 23.', 'Шаг 2. Потом второе: 30 − 7 = 23.', 'Step 2. Then the second: 30 − 7 = 23.')
    ], after: [
      L('Tekshirish: qavslarni oddiy usulda hisoblaymiz. (60 + 9) − 4 = 69 − 4 = 65. 50 − (20 + 7) = 50 − 27 = 23. Javoblar bir xil!', 'Проверка: посчитаем обычным способом. (60 + 9) − 4 = 69 − 4 = 65. 50 − (20 + 7) = 50 − 27 = 23. Ответы совпали!', 'Check the ordinary way: (60 + 9) − 4 = 69 − 4 = 65. 50 − (20 + 7) = 50 − 27 = 23. The answers match!')
    ] },
    { kind: 'example', h: L('Yechilgan namunalar', 'Разобранные примеры', 'Worked examples'), p: [
      L('Har birida eng qulay yo‘lni tanlang.', 'В каждом выбирай самый удобный путь.', 'Choose the handiest way in each one.')
    ], ex: [
      { q: L('(40 + 7) − 4 = ?', '(40 + 7) − 4 = ?', '(40 + 7) − 4 = ?'), s: L('4 ni 7 dan ayiramiz: 7 − 4 = 3. 40 + 3 = <b>43</b>.', 'Вычитаем 4 из 7: 7 − 4 = 3. 40 + 3 = <b>43</b>.', 'Take 4 from 7: 7 − 4 = 3. 40 + 3 = <b>43</b>.') },
      { q: L('(30 + 6) − 20 = ?', '(30 + 6) − 20 = ?', '(30 + 6) − 20 = ?'), s: L('20 ni 30 dan ayirish qulay: 30 − 20 = 10. 10 + 6 = <b>16</b>.', '20 удобно вычесть из 30: 30 − 20 = 10. 10 + 6 = <b>16</b>.', 'It is handy to take 20 from 30: 30 − 20 = 10. 10 + 6 = <b>16</b>.') },
      { q: L('50 − (20 + 5) = ?', '50 − (20 + 5) = ?', '50 − (20 + 5) = ?'), s: L('50 − 20 = 30, 30 − 5 = <b>25</b>.', '50 − 20 = 30, 30 − 5 = <b>25</b>.', '50 − 20 = 30, 30 − 5 = <b>25</b>.') },
      { q: L('(60 + 9) − 9 = ?', '(60 + 9) − 9 = ?', '(60 + 9) − 9 = ?'), s: L('9 − 9 = 0. 60 + 0 = <b>60</b>. Qo‘shgan sonimizni o‘zini ayirsak, boshlang‘ich son qoladi.', '9 − 9 = 0. 60 + 0 = <b>60</b>. Если вычесть то же число, которое прибавили, останется исходное.', '9 − 9 = 0. 60 + 0 = <b>60</b>. Take away the same number you added and you are back where you started.') },
      { q: L('Kutubxonada 35 ta ertak va 14 ta she’rlar kitobi bor edi. 12 ta ertak kitobi olindi. Nechta kitob qoldi?', 'В библиотеке было 35 книг сказок и 14 книг стихов. Взяли 12 книг сказок. Сколько книг осталось?', 'A library had 35 fairy-tale books and 14 poetry books. 12 fairy-tale books were borrowed. How many books are left?'), s: L('(35 + 14) − 12 = (35 − 12) + 14 = 23 + 14 = <b>37 ta kitob</b>.', '(35 + 14) − 12 = (35 − 12) + 14 = 23 + 14 = <b>37 книг</b>.', '(35 + 14) − 12 = (35 − 12) + 14 = 23 + 14 = <b>37 books</b>.') }
    ] },
    { kind: 'table', h: L('Uch yo‘l — bitta javob', 'Три пути — один ответ', 'Three ways, one answer'), p: [
      L('Jadvalda bir xil misol uch xil usulda yechilgan. Hammasida javob bir xil — lekin qaysi yo‘l osonroq?', 'В таблице один и тот же пример решён тремя способами. Ответ везде одинаковый — но какой путь легче?', 'In the table the same sum is solved three ways. The answer is always the same — but which way is easiest?')
    ], table: { head: [L('Misol', 'Пример', 'Sum'), L('Avval qavs', 'Сначала скобки', 'Brackets first'), L('1-qo‘shiluvchidan', 'Из 1-го слагаемого', 'From the 1st addend'), L('2-qo‘shiluvchidan', 'Из 2-го слагаемого', 'From the 2nd addend')], rows: [
      ['(30 + 8) − 5', '38 − 5 = 33', '25 + 8 = 33', '30 + 3 = 33'],
      ['(40 + 6) − 20', '46 − 20 = 26', '20 + 6 = 26', L('6 − 20 bo‘lmaydi', '6 − 20 нельзя', '6 − 20 not possible')],
      ['(25 + 9) − 4', '34 − 4 = 30', '21 + 9 = 30', '25 + 5 = 30'],
      ['60 − (10 + 3)', '60 − 13 = 47', '60 − 10 − 3 = 47', '60 − 3 − 10 = 47'],
      ['80 − (20 + 5)', '80 − 25 = 55', '80 − 20 − 5 = 55', '80 − 5 − 20 = 55']
    ] }, after: [
      L('Ikkinchi qatorga qarang: 6 dan 20 ni ayirib bo‘lmaydi, shuning uchun bu yo‘l yaramaydi. Har doim ayirish mumkin bo‘lgan qo‘shiluvchini tanlang.', 'Посмотри на вторую строку: из 6 нельзя вычесть 20, поэтому этот путь не годится. Всегда выбирай слагаемое, из которого можно вычесть.', 'Look at the second row: you cannot take 20 from 6, so that way does not work. Always choose an addend you can subtract from.')
    ] },
    { kind: 'mistake', h: L('Tipik xatolar', 'Типичные ошибки', 'Common mistakes'), p: [
      L('Bu qoidalarni qo‘llaganda ko‘p uchraydigan xatolar:', 'Частые ошибки при применении этих правил:', 'Common mistakes when using these rules:')
    ], list: [
      L('<b>Ikkala qo‘shiluvchidan ayirish.</b> (30 + 8) − 5 = 25 + 3 = 28? Yo‘q! 5 ni faqat <b>bitta</b> qo‘shiluvchidan ayiramiz: 33.', '<b>Вычитать из обоих слагаемых.</b> (30 + 8) − 5 = 25 + 3 = 28? Нет! 5 вычитаем только из <b>одного</b> слагаемого: 33.', '<b>Subtracting from both addends.</b> (30 + 8) − 5 = 25 + 3 = 28? No! Take 5 from only <b>one</b> addend: 33.'),
      L('<b>Sondan yig‘indini ayirishda qo‘shib yuborish.</b> 40 − (10 + 6) = 40 − 10 + 6 = 36? Ikkala sonni ham ayirish kerak: 40 − 10 − 6 = 24.', '<b>Прибавлять при вычитании суммы.</b> 40 − (10 + 6) = 40 − 10 + 6 = 36? Нужно вычесть оба числа: 40 − 10 − 6 = 24.', '<b>Adding when subtracting a sum.</b> 40 − (10 + 6) = 40 − 10 + 6 = 36? Both numbers must be subtracted: 40 − 10 − 6 = 24.'),
      L('<b>Qavslarni e’tiborsiz qoldirish.</b> 20 − (5 + 3) ni 20 − 5 + 3 = 18 deb hisoblash. To‘g‘risi 12.', '<b>Не замечать скобки.</b> Считать 20 − (5 + 3) как 20 − 5 + 3 = 18. Правильно 12.', '<b>Ignoring the brackets.</b> Working out 20 − (5 + 3) as 20 − 5 + 3 = 18. The right answer is 12.'),
      L('<b>Noqulay qo‘shiluvchini tanlash.</b> (40 + 6) − 20 da 20 ni 6 dan ayirishga urinish. 20 ni 40 dan ayiring!', '<b>Выбирать неудобное слагаемое.</b> В (40 + 6) − 20 пытаться вычесть 20 из 6. Вычитай 20 из 40!', '<b>Choosing the wrong addend.</b> In (40 + 6) − 20 trying to take 20 from 6. Take 20 from 40!')
    ] },
    { kind: 'life', h: L('Hayotda qayerda kerak?', 'Где это нужно в жизни?', 'Where is this used in life?'), p: [
      L('<b>Cho‘ntak puli.</b> Sizda 20 ming so‘mlik va 5 ming so‘mlik pul bor. Muzqaymoq 3 ming turadi. Qaysi pulni berasiz? 5 minglikni! (20 + 5) − 3 = 20 + 2 = 22 ming qoladi.', '<b>Карманные деньги.</b> У тебя купюры в 20 тысяч и 5 тысяч сумов. Мороженое стоит 3 тысячи. Какую купюру дашь? 5 тысяч! (20 + 5) − 3 = 20 + 2 = 22 тысячи останется.', '<b>Pocket money.</b> You have a 20-thousand and a 5-thousand som note. An ice cream costs 3 thousand. Which note do you hand over? The 5-thousand! (20 + 5) − 3 = 20 + 2 = 22 thousand left.'),
      L('<b>Meva savati.</b> Savatda 30 ta olma va 9 ta nok bor. Bolalar 6 ta nok yeyishdi. (30 + 9) − 6 = 30 + 3 = 33 ta meva qoldi.', '<b>Корзина с фруктами.</b> В корзине 30 яблок и 9 груш. Дети съели 6 груш. (30 + 9) − 6 = 30 + 3 = 33 фрукта осталось.', '<b>A fruit basket.</b> A basket holds 30 apples and 9 pears. The children ate 6 pears. (30 + 9) − 6 = 30 + 3 = 33 pieces of fruit left.'),
      L('<b>Sinf xonasi.</b> Sinfda 30 ta stul bor. 10 tasini zalga, 4 tasini oshxonaga olib ketishdi. 30 − (10 + 4) = 30 − 10 − 4 = 16 ta stul qoldi.', '<b>Класс.</b> В классе 30 стульев. 10 унесли в зал, 4 — в столовую. 30 − (10 + 4) = 30 − 10 − 4 = 16 стульев осталось.', '<b>A classroom.</b> A classroom has 30 chairs. 10 were taken to the hall and 4 to the canteen. 30 − (10 + 4) = 30 − 10 − 4 = 16 chairs left.'),
      L('<b>Yo‘l.</b> Uydan bog‘gacha 60 km. Biz 20 km avtobusda va 5 km piyoda yurdik. Qancha qoldi? 60 − 20 − 5 = 35 km.', '<b>Дорога.</b> От дома до дачи 60 км. Мы проехали 20 км на автобусе и прошли 5 км пешком. Сколько осталось? 60 − 20 − 5 = 35 км.', '<b>A journey.</b> It is 60 km from home to the dacha. We went 20 km by bus and walked 5 km. How far is left? 60 − 20 − 5 = 35 km.')
    ] },
    { kind: 'fact', h: L('Qiziqarli faktlar', 'Интересные факты', 'Fun facts'), list: [
      L('«Plyus» lotincha «ko‘proq», «minus» esa «kamroq» degan ma’noni bildiradi.', '«Плюс» по-латыни значит «больше», а «минус» — «меньше».', '“Plus” is Latin for “more”, and “minus” means “less”.'),
      L('Ba’zi kalkulyatorlar qavslarni tushunmaydi va amallarni faqat ketma-ket bajaradi. Shuning uchun aqlli odam avval o‘ylab, keyin tugmalarni bosadi!', 'Некоторые простые калькуляторы не понимают скобок и выполняют действия только по порядку. Поэтому умный человек сначала думает, а потом нажимает кнопки!', 'Some simple calculators do not understand brackets and just do the operations in order. So a smart person thinks first and presses buttons second!'),
      L('Robert Rekord «=» belgisini ixtiro qilgan kitob «Aql charxi» deb atalgan.', 'Книга, в которой Роберт Рекорд ввёл знак «=», называлась «Точило остроумия».', 'The book in which Robert Recorde introduced the “=” sign was called “The Whetstone of Witte”.'),
      L('Qavslarning har xil turlari bor: oddiy ( ), kvadrat [ ] va figurali { }. Katta sinflarda ularning hammasi bilan tanishasiz.', 'Бывают разные скобки: круглые ( ), квадратные [ ] и фигурные { }. В старших классах ты познакомишься со всеми.', 'There are different kinds of brackets: round ( ), square [ ] and curly { }. You will meet all of them in higher grades.')
    ] },
    { kind: 'practice', h: L('O‘ylab ko‘ring', 'Подумай', 'Think about it'), p: [
      L('Eng qulay yo‘l bilan hisoblang.', 'Вычисли самым удобным способом.', 'Work these out the handiest way.')
    ], list: [
      L('(50 + 8) − 6 = ?   (70 + 4) − 30 = ?', '(50 + 8) − 6 = ?   (70 + 4) − 30 = ?', '(50 + 8) − 6 = ?   (70 + 4) − 30 = ?'),
      L('90 − (40 + 7) = ?   60 − (30 + 9) = ?', '90 − (40 + 7) = ?   60 − (30 + 9) = ?', '90 − (40 + 7) = ?   60 − (30 + 9) = ?'),
      L('Qaysi javob katta: 30 − 10 + 5 yoki 30 − (10 + 5)?', 'Какой ответ больше: 30 − 10 + 5 или 30 − (10 + 5)?', 'Which answer is bigger: 30 − 10 + 5 or 30 − (10 + 5)?'),
      L('Sharfda 40 ta qizil va 7 ta oq chiziq bor edi. Buvim 3 ta oq chiziqni o‘zgartirdi. Nechta chiziq qoldi o‘sha rangda?', 'На шарфе было 40 красных и 7 белых полосок. Бабушка перекрасила 3 белые полоски. Сколько полосок осталось прежнего цвета?', 'A scarf had 40 red and 7 white stripes. Grandma changed the colour of 3 white stripes. How many stripes kept their colour?')
    ], after: [
      L('Javoblar: 52, 44; 43, 21; 30 − 10 + 5 = 25 katta (30 − 15 = 15); (40 + 7) − 3 = 40 + 4 = 44 ta chiziq.', 'Ответы: 52, 44; 43, 21; больше 30 − 10 + 5 = 25 (а 30 − 15 = 15); (40 + 7) − 3 = 40 + 4 = 44 полоски.', 'Answers: 52, 44; 43, 21; 30 − 10 + 5 = 25 is bigger (30 − 15 = 15); (40 + 7) − 3 = 40 + 4 = 44 stripes.')
    ] },
    { kind: 'summary', h: L('Xulosa', 'Итог', 'Summary'), list: [
      L('Qavslar — «avval buni hisobla» degan belgi.', 'Скобки — знак «сначала посчитай это».', 'Brackets mean “work this out first”.'),
      L('Yig‘indidan sonni ayirish: sonni bitta qo‘shiluvchidan ayirib, ikkinchisini qo‘shamiz. (30 + 8) − 5 = 30 + 3 = 33.', 'Вычитание числа из суммы: вычитаем из одного слагаемого и прибавляем другое. (30 + 8) − 5 = 30 + 3 = 33.', 'Subtracting from a sum: take the number from one addend and add the other. (30 + 8) − 5 = 30 + 3 = 33.'),
      L('Sondan yig‘indini ayirish: qo‘shiluvchilarni birin-ketin ayiramiz. 40 − (10 + 6) = 40 − 10 − 6 = 24.', 'Вычитание суммы из числа: вычитаем слагаемые по очереди. 40 − (10 + 6) = 40 − 10 − 6 = 24.', 'Subtracting a sum: take away the addends one after the other. 40 − (10 + 6) = 40 − 10 − 6 = 24.'),
      L('Ayirish mumkin bo‘lgan va qulay qo‘shiluvchini tanlang.', 'Выбирай слагаемое, из которого можно и удобно вычитать.', 'Choose an addend you can subtract from and that is handy.'),
      L('Ikkala qo‘shiluvchidan ayirmang!', 'Не вычитай из обоих слагаемых!', 'Do not subtract from both addends!'),
      L('«+», «−» va «=» belgilari atigi 450–550 yil oldin paydo bo‘lgan.', 'Знаки «+», «−» и «=» появились всего 450–550 лет назад.', 'The “+”, “−” and “=” signs appeared only 450–550 years ago.')
    ] }
  ] });

  // ---------- t12. Masalalar yechish va amaliy topshiriqlar ----------
  T.add(P, 't12', { sections: [
    { kind: 'intro', h: L('Matematik detektiv bo‘lamiz', 'Становимся математическими сыщиками', 'Becoming maths detectives'), p: [
      L('Masala — bu kichik hikoya, uning ichida savol yashiringan. Uni yechish uchun detektiv kabi ishlash kerak: dalillarni (sonlarni) topish, ular nima haqida ekanini tushunish va to‘g‘ri amalni tanlash.', 'Задача — это маленький рассказ, внутри которого спрятан вопрос. Чтобы её решить, нужно работать как сыщик: найти улики (числа), понять, о чём они, и выбрать правильное действие.', 'A word problem is a little story with a question hidden inside. To solve it you work like a detective: find the clues (the numbers), understand what they are about and choose the right operation.'),
      L('Bu mavzuda biz I qismda o‘rganganlarimizni — o‘nlikdan o‘tib qo‘shish va ayirish, ustun usuli, og‘zaki hisoblash sirlarini — masalalarda qo‘llaymiz. Shuningdek, «… ta ko‘p», «… ta kam» va «necha ta ko‘p?» kabi masalalarni farqlashni o‘rganamiz.', 'В этой теме мы применим в задачах всё, что изучили в первой части: сложение и вычитание с переходом, столбик, секреты устного счёта. А ещё научимся различать задачи «на … больше», «на … меньше» и «на сколько больше?».', 'In this topic we use everything from Part 1 — adding and subtracting across a ten, the column method, mental maths tricks — in word problems. We also learn to tell apart problems like “… more”, “… fewer” and “how many more?”.'),
      L('Yaxshi yechilgan masala — bu nafaqat to‘g‘ri javob, balki aniq fikrlash. Bu ko‘nikma sizga matematikada ham, hayotda ham kerak bo‘ladi.', 'Хорошо решённая задача — это не только верный ответ, но и ясное мышление. Это умение пригодится и в математике, и в жизни.', 'A well-solved problem is not just a right answer but clear thinking. You will need this skill in maths and in life.')
    ] },
    { kind: 'def', h: L('Masalaning qismlari', 'Части задачи', 'The parts of a problem'), p: [
      L('Har bir masala uch qismdan iborat:', 'Каждая задача состоит из трёх частей:', 'Every word problem has three parts:')
    ], list: [
      L('<b>Shart</b> — nima ma’lum: «Akmal 45 ta marka yig‘di, Madina 17 ta kam».', '<b>Условие</b> — что известно: «Акмаль собрал 45 марок, Мадина на 17 меньше».', '<b>The condition</b> — what we know: “Akmal collected 45 stamps, Madina 17 fewer.”'),
      L('<b>Savol</b> — nimani topish kerak: «Madina nechta marka yig‘di?»', '<b>Вопрос</b> — что нужно найти: «Сколько марок собрала Мадина?»', '<b>The question</b> — what we must find: “How many stamps did Madina collect?”'),
      L('<b>Yechim va javob</b> — amal va natija: 45 − 17 = 28. Javob: 28 ta marka.', '<b>Решение и ответ</b> — действие и результат: 45 − 17 = 28. Ответ: 28 марок.', '<b>Solution and answer</b> — the operation and result: 45 − 17 = 28. Answer: 28 stamps.')
    ], after: [
      L('Kalit so‘zlar yordam beradi, lekin ehtiyot bo‘ling! «… ta ko‘p» odatda qo‘shishni, «… ta kam» ayirishni, «necha ta ko‘p (kam)?» esa doim ayirishni bildiradi — katta sondan kichigini ayiramiz.', 'Ключевые слова помогают, но будь внимателен! «на … больше» обычно означает сложение, «на … меньше» — вычитание, а «на сколько больше (меньше)?» — всегда вычитание: из большего числа вычитаем меньшее.', 'Key words help, but be careful! “… more” usually means adding, “… fewer” means subtracting, and “how many more (fewer)?” always means subtracting — take the smaller number from the bigger one.')
    ] },
    { kind: 'history', h: L('Qadimgi masalalar', 'Древние задачи', 'Ancient word problems'), p: [
      L('Dunyodagi eng qadimgi matematik masalalar Misrning <b>Rind papirusi</b>da yozilgan — taxminan 3600 yil oldin. Ularda non va pivo taqsimlash, don omborlari va piramidalar haqida savollar bor. Demak, masalalar har doim hayotdan olingan!', 'Самые древние математические задачи записаны в египетском <b>папирусе Ринда</b> — около 3600 лет назад. В них есть вопросы о делении хлеба, о зерновых амбарах и пирамидах. Значит, задачи всегда брали из жизни!', 'The oldest known maths word problems are written in Egypt’s <b>Rhind Papyrus</b> — about 3 600 years ago. They ask about sharing bread, grain stores and pyramids. So problems have always come from real life!'),
      L('Bobilda sopol lavhalarga yer maydoni va hosil haqidagi masalalar yozilgan. Al-Xorazmiy esa o‘z kitobida meros taqsimlash, savdo va yer o‘lchash bo‘yicha ko‘plab amaliy masalalarni yechib ko‘rsatgan.', 'В Вавилоне на глиняных табличках записывали задачи о полях и урожае. А аль-Хорезми в своей книге показал решения множества практических задач — о разделе наследства, торговле и измерении земли.', 'In Babylon problems about fields and harvests were written on clay tablets. Al-Khwarizmi in his book showed how to solve many practical problems about dividing inheritances, trade and measuring land.'),
      L('<b>Beruniy</b> ham amaliy masalalarni yaxshi ko‘rgan: u shaharlar orasidagi masofani va hatto Makka qaysi tomonda ekanini hisoblash usullarini ishlab chiqqan. Matematika — bu hayotiy savollarga javob topish san’ati.', '<b>Беруни</b> тоже любил практические задачи: он разработал способы вычислять расстояния между городами и даже направление на Мекку. Математика — это искусство находить ответы на жизненные вопросы.', '<b>Biruni</b> loved practical problems too: he worked out ways to calculate distances between cities and even the direction of Mecca. Maths is the art of finding answers to real-life questions.')
    ] },
    { kind: 'rule', h: L('Masala yechish algoritmi', 'Алгоритм решения задачи', 'An algorithm for solving problems'), p: [
      L('Al-Xorazmiy nomidan kelib chiqqan «algoritm» — bu aniq qadamlar ketma-ketligi. Masalalar uchun ham algoritm bor:', '«Алгоритм» — слово от имени аль-Хорезми — это чёткая последовательность шагов. Есть алгоритм и для задач:', 'An “algorithm” — a word from al-Khwarizmi’s name — is a clear sequence of steps. There is one for word problems too:')
    ], list: [
      L('<b>O‘qi.</b> Masalani diqqat bilan, kerak bo‘lsa ikki marta o‘qing.', '<b>Прочитай.</b> Внимательно прочитай задачу, если нужно — дважды.', '<b>Read.</b> Read the problem carefully, twice if needed.'),
      L('<b>Sxema chiz.</b> Kesmalar yoki qisqa yozuv bilan shartni ko‘rsating.', '<b>Нарисуй схему.</b> Покажи условие отрезками или краткой записью.', '<b>Draw a diagram.</b> Show the condition with bars or a short note.'),
      L('<b>Amalni tanla.</b> Butunni topyapmizmi (qo‘shish) yoki qismni/farqni (ayirish)?', '<b>Выбери действие.</b> Ищем целое (сложение) или часть/разницу (вычитание)?', '<b>Choose the operation.</b> Are we finding the whole (add) or a part or difference (subtract)?'),
      L('<b>Hisobla.</b> Og‘zaki yoki ustun usulida.', '<b>Вычисли.</b> Устно или в столбик.', '<b>Calculate.</b> In your head or in a column.'),
      L('<b>Javob yoz va tekshir.</b> Javob savolga mosmi? Mantiqiymi?', '<b>Запиши ответ и проверь.</b> Отвечает ли он на вопрос? Разумен ли?', '<b>Write the answer and check.</b> Does it answer the question? Is it sensible?')
    ] },
    { kind: 'steps', h: L('Masala turlari: qadamma-qadam', 'Виды задач: шаг за шагом', 'Types of problem: step by step'), p: [
      L('2-sinfda eng ko‘p uchraydigan masala turlari va ularni tanib olish yo‘llari:', 'Самые частые виды задач во 2 классе и как их узнать:', 'The most common types of problem in Grade 2 and how to recognise them:')
    ], list: [
      L('<b>Butunni topish.</b> «Bir qism va ikkinchi qism. Jami nechta?» → qo‘shish: 25 + 18.', '<b>Найти целое.</b> «Одна часть и другая часть. Сколько всего?» → сложение: 25 + 18.', '<b>Finding the whole.</b> “One part and another part. How many in all?” → add: 25 + 18.'),
      L('<b>Qismni topish.</b> «Hammasi shuncha, bir qismi shuncha. Qolgani nechta?» → ayirish: 60 − 24.', '<b>Найти часть.</b> «Всего столько, одна часть столько. Сколько другая?» → вычитание: 60 − 24.', '<b>Finding a part.</b> “This many in all, this many in one part. How many in the other?” → subtract: 60 − 24.'),
      L('<b>«… ta ko‘p».</b> «Dushanba 34 ta, seshanba 12 ta ko‘p. Seshanba nechta?» → qo‘shish: 34 + 12.', '<b>«На … больше».</b> «В понедельник 34, во вторник на 12 больше. Сколько во вторник?» → сложение: 34 + 12.', '<b>“… more”.</b> “Monday 34, Tuesday 12 more. How many on Tuesday?” → add: 34 + 12.'),
      L('<b>«… ta kam».</b> «Akmal 45 ta, Madina 17 ta kam. Madina nechta?» → ayirish: 45 − 17.', '<b>«На … меньше».</b> «Акмаль 45, Мадина на 17 меньше. Сколько у Мадины?» → вычитание: 45 − 17.', '<b>“… fewer”.</b> “Akmal 45, Madina 17 fewer. How many does Madina have?” → subtract: 45 − 17.'),
      L('<b>«Necha ta ko‘p?»</b> «Birida 62, ikkinchisida 37. Birinchisida necha ta ko‘p?» → ayirish: 62 − 37.', '<b>«На сколько больше?»</b> «В одном 62, в другом 37. На сколько больше в первом?» → вычитание: 62 − 37.', '<b>“How many more?”</b> “One has 62, the other 37. How many more does the first have?” → subtract: 62 − 37.')
    ] },
    { kind: 'example', h: L('Yechilgan masalalar', 'Разобранные задачи', 'Worked problems'), p: [
      L('Har bir masalada avval turini aniqlang.', 'В каждой задаче сначала определи её вид.', 'In each problem, first work out its type.')
    ], ex: [
      { q: L('Dushanba kuni do‘konga 38 ta non keltirildi, seshanba kuni esa 15 ta ko‘p. Seshanba kuni nechta non keltirildi?', 'В понедельник в магазин привезли 38 батонов, а во вторник — на 15 больше. Сколько батонов привезли во вторник?', 'On Monday 38 loaves were delivered to a shop, and on Tuesday 15 more. How many loaves were delivered on Tuesday?'), s: L('«15 ta ko‘p» — qo‘shish. 38 + 15: 30 + 10 = 40, 8 + 5 = 13, 40 + 13 = 53. Javob: <b>53 ta non</b>.', '«На 15 больше» — сложение. 38 + 15: 30 + 10 = 40, 8 + 5 = 13, 40 + 13 = 53. Ответ: <b>53 батона</b>.', '“15 more” means adding. 38 + 15: 30 + 10 = 40, 8 + 5 = 13, 40 + 13 = 53. Answer: <b>53 loaves</b>.') },
      { q: L('Akmal 52 ta marka yig‘di, Madina undan 18 ta kam. Madina nechta marka yig‘di?', 'Акмаль собрал 52 марки, а Мадина на 18 меньше. Сколько марок у Мадины?', 'Akmal collected 52 stamps and Madina 18 fewer. How many stamps does Madina have?'), s: L('«18 ta kam» — ayirish. 52 − 18: 52 − 10 = 42, 42 − 2 = 40, 40 − 6 = 34. Javob: <b>34 ta marka</b>.', '«На 18 меньше» — вычитание. 52 − 18: 52 − 10 = 42, 42 − 2 = 40, 40 − 6 = 34. Ответ: <b>34 марки</b>.', '“18 fewer” means subtracting. 52 − 18: 52 − 10 = 42, 42 − 2 = 40, 40 − 6 = 34. Answer: <b>34 stamps</b>.') },
      { q: L('Bog‘da 47 tup olma va 29 tup o‘rik bor. Olma o‘rikdan necha tup ko‘p?', 'В саду 47 яблонь и 29 абрикосов. На сколько яблонь больше, чем абрикосов?', 'An orchard has 47 apple trees and 29 apricot trees. How many more apple trees are there?'), s: L('«Necha tup ko‘p?» — ayirish. 47 − 29: 47 − 30 = 17, 17 + 1 = 18. Javob: <b>18 tup ko‘p</b>.', '«На сколько больше?» — вычитание. 47 − 29: 47 − 30 = 17, 17 + 1 = 18. Ответ: <b>на 18 больше</b>.', '“How many more?” means subtracting. 47 − 29: 47 − 30 = 17, 17 + 1 = 18. Answer: <b>18 more</b>.') },
      { q: L('Avtobusda 48 kishi bor edi. Bekatda 16 kishi tushdi va 20 kishi chiqdi. Endi avtobusda nechta kishi?', 'В автобусе было 48 человек. На остановке 16 вышли и 20 вошли. Сколько человек теперь в автобусе?', 'There were 48 people on a bus. At a stop 16 got off and 20 got on. How many are on the bus now?'), s: L('Ikki amal: 48 − 16 = 32, 32 + 20 = 52. Javob: <b>52 kishi</b>.', 'Два действия: 48 − 16 = 32, 32 + 20 = 52. Ответ: <b>52 человека</b>.', 'Two steps: 48 − 16 = 32, 32 + 20 = 52. Answer: <b>52 people</b>.') },
      { q: L('Sinf 100 ta daraxt ekishni rejalashtirdi. Birinchi kuni 35 ta, ikkinchi kuni 45 ta ekildi. Yana nechta ekish kerak?', 'Класс решил посадить 100 деревьев. В первый день посадили 35, во второй — 45. Сколько ещё нужно посадить?', 'A class planned to plant 100 trees. They planted 35 on day one and 45 on day two. How many more must they plant?'), s: L('100 − (35 + 45) = 100 − 80 = 20. Javob: <b>20 ta daraxt</b>.', '100 − (35 + 45) = 100 − 80 = 20. Ответ: <b>20 деревьев</b>.', '100 − (35 + 45) = 100 − 80 = 20. Answer: <b>20 trees</b>.') }
    ] },
    { kind: 'table', h: L('Masala turlari jadvali', 'Таблица видов задач', 'A table of problem types'), p: [
      L('Bu jadval qaysi amalni tanlashni eslab qolishga yordam beradi.', 'Эта таблица поможет запомнить, какое действие выбрать.', 'This table helps you remember which operation to choose.')
    ], table: { head: [L('Savol', 'Вопрос', 'Question'), L('Amal', 'Действие', 'Operation'), L('Misol', 'Пример', 'Example')], rows: [
      [L('Jami nechta?', 'Сколько всего?', 'How many in all?'), L('qo‘shish', 'сложение', 'add'), '25 + 18 = 43'],
      [L('Nechta qoldi?', 'Сколько осталось?', 'How many are left?'), L('ayirish', 'вычитание', 'subtract'), '60 − 24 = 36'],
      [L('… ta ko‘p bo‘lsa, nechta?', 'Сколько, если на … больше?', 'How many if … more?'), L('qo‘shish', 'сложение', 'add'), '34 + 12 = 46'],
      [L('… ta kam bo‘lsa, nechta?', 'Сколько, если на … меньше?', 'How many if … fewer?'), L('ayirish', 'вычитание', 'subtract'), '45 − 17 = 28'],
      [L('Necha ta ko‘p (kam)?', 'На сколько больше (меньше)?', 'How many more (fewer)?'), L('ayirish', 'вычитание', 'subtract'), '62 − 37 = 25']
    ] }, after: [
      L('Diqqat: oxirgi qatorda «ko‘p» so‘zi bor, lekin amal — ayirish! Kalit so‘zga emas, masala ma’nosiga qarang.', 'Внимание: в последней строке есть слово «больше», но действие — вычитание! Смотри не на ключевое слово, а на смысл задачи.', 'Careful: the last row has the word “more”, yet the operation is subtraction! Look at what the problem means, not just the key word.')
    ] },
    { kind: 'mistake', h: L('Tipik xatolar', 'Типичные ошибки', 'Common mistakes'), p: [
      L('Masala yechishda bolalar ko‘pincha shunday xato qiladi:', 'Решая задачи, дети часто ошибаются так:', 'When solving problems children often make these mistakes:')
    ], list: [
      L('<b>Faqat kalit so‘zga qarash.</b> «Necha ta ko‘p?» savolida «ko‘p» so‘zini ko‘rib qo‘shish. Bu ayirish masalasi!', '<b>Смотреть только на ключевое слово.</b> Увидеть «больше» в вопросе «на сколько больше?» и сложить. Это задача на вычитание!', '<b>Looking only at the key word.</b> Seeing “more” in “how many more?” and adding. That is a subtraction problem!'),
      L('<b>Savolni o‘qimaslik.</b> Shartdagi sonlarni ko‘rib, darrov hisoblash. Avval nimani topish kerakligini aniqlang.', '<b>Не читать вопрос.</b> Увидеть числа в условии и сразу считать. Сначала пойми, что нужно найти.', '<b>Not reading the question.</b> Seeing the numbers and calculating at once. First work out what you need to find.'),
      L('<b>Javobda birlikni unutish.</b> «34» emas, «34 ta marka». Javob savolga to‘liq javob berishi kerak.', '<b>Забыть наименование в ответе.</b> Не «34», а «34 марки». Ответ должен полностью отвечать на вопрос.', '<b>Forgetting the unit in the answer.</b> Not “34” but “34 stamps”. The answer must fully answer the question.'),
      L('<b>Ikki amalli masalada to‘xtab qolish.</b> Avtobus masalasida faqat 48 − 16 = 32 ni hisoblab qo‘yish. Yana 20 kishi chiqqan edi!', '<b>Остановиться на полпути в задаче в два действия.</b> В задаче про автобус посчитать только 48 − 16 = 32. Ведь ещё 20 человек вошли!', '<b>Stopping halfway in a two-step problem.</b> In the bus problem doing only 48 − 16 = 32. But 20 more people got on!'),
      L('<b>Mantiqni tekshirmaslik.</b> «Madina 17 ta kam» bo‘lsa, javob Akmalnikidan kichik bo‘lishi kerak. Katta chiqsa — xato bor.', '<b>Не проверять смысл.</b> Если «у Мадины на 17 меньше», ответ должен быть меньше, чем у Акмаля. Получилось больше — есть ошибка.', '<b>Not checking if it makes sense.</b> If “Madina has 17 fewer”, her answer must be smaller than Akmal’s. If it is bigger, something is wrong.')
    ] },
    { kind: 'life', h: L('Hayotda qayerda kerak?', 'Где это нужно в жизни?', 'Where is this used in life?'), p: [
      L('<b>Xarid rejasi.</b> Sizda 50 ming so‘m bor. Kitob 32 ming, qalam 9 ming. Ikkalasini olishga yetadimi? 32 + 9 = 41, 50 − 41 = 9 ming qoladi — yetadi!', '<b>План покупок.</b> У тебя 50 тысяч сумов. Книга стоит 32 тысячи, ручка — 9 тысяч. Хватит ли на обе? 32 + 9 = 41, 50 − 41 = 9 тысяч останется — хватит!', '<b>Planning a purchase.</b> You have 50 thousand som. A book costs 32 thousand and a pen 9 thousand. Is it enough for both? 32 + 9 = 41, 50 − 41 = 9 thousand left — yes!'),
      L('<b>Sport musobaqasi.</b> «Paxtakor» 45 ochko, «Bunyodkor» 38 ochko to‘pladi. Farqi necha ochko? 45 − 38 = 7 ochko.', '<b>Спортивное соревнование.</b> «Пахтакор» набрал 45 очков, «Бунёдкор» — 38. На сколько очков разница? 45 − 38 = 7 очков.', '<b>A sports contest.</b> Pakhtakor scored 45 points and Bunyodkor 38. What is the difference? 45 − 38 = 7 points.'),
      L('<b>Oilaviy sayohat.</b> Toshkentdan Samarqandgacha taxminan 300 km — bu katta son. Lekin har kuni 2-sinf bilimlari bilan kichikroq masalalarni yechamiz: yo‘lda 27 km o‘tdik, keyingi bekatgacha yana 18 km — jami 45 km.', '<b>Семейная поездка.</b> От Ташкента до Самарканда около 300 км — это большое число. Но каждый день мы решаем задачи поменьше: проехали 27 км, до следующей остановки ещё 18 — всего 45 км.', '<b>A family trip.</b> It is about 300 km from Tashkent to Samarkand — a big number. But every day we solve smaller problems with Grade 2 skills: we have driven 27 km and the next stop is 18 km further — 45 km in all.'),
      L('<b>Maktab bog‘i.</b> 2-sinflar 64 ta gul ko‘chati ekishdi, 3-sinflar 19 ta kam. 3-sinflar nechta ekishdi? 64 − 19 = 45 ta.', '<b>Школьный сад.</b> Вторые классы посадили 64 цветочные рассады, третьи — на 19 меньше. Сколько посадили третьи? 64 − 19 = 45.', '<b>The school garden.</b> The Grade 2 classes planted 64 flower seedlings and the Grade 3 classes 19 fewer. How many did Grade 3 plant? 64 − 19 = 45.')
    ] },
    { kind: 'fact', h: L('Qiziqarli faktlar', 'Интересные факты', 'Fun facts'), list: [
      L('Rind papirusining uzunligi 5 metrdan ortiq! Uni Ahmes ismli kotib ko‘chirib yozgan — bu ismi ma’lum bo‘lgan eng qadimgi matematiklardan biri.', 'Длина папируса Ринда — больше 5 метров! Его переписал писец по имени Ахмес — один из самых древних математиков, чьё имя мы знаем.', 'The Rhind Papyrus is more than 5 metres long! It was copied by a scribe named Ahmes — one of the oldest mathematicians whose name we know.'),
      L('Rind papirusidagi bir masala bunday boshlanadi: «7 ta uy, har bir uyda 7 ta mushuk…» — bu dunyodagi eng qadimgi qiziqarli masalalardan biri.', 'Одна из задач папируса Ринда начинается так: «7 домов, в каждом доме по 7 кошек…» — это одна из древнейших занимательных задач в мире.', 'One problem in the Rhind Papyrus begins: “7 houses, in each house 7 cats…” — one of the oldest puzzle problems in the world.'),
      L('Har yili dunyoning ko‘plab mamlakatlarida bolalar uchun «Kenguru» matematika tanlovi o‘tkaziladi. Unda millionlab o‘quvchi qiziqarli masalalar yechadi.', 'Каждый год во многих странах мира проходит математический конкурс «Кенгуру» для детей. В нём миллионы школьников решают занимательные задачи.', 'Every year the “Kangaroo” maths contest is held for children in many countries. Millions of pupils solve fun problems in it.'),
      L('Masalani chizib ko‘rish — olimlar ham foydalanadigan usul. Rasm yoki sxema ko‘pincha javobni o‘zi ko‘rsatib beradi!', 'Рисовать задачу — приём, которым пользуются и учёные. Рисунок или схема часто сами подсказывают ответ!', 'Drawing a problem is a trick scientists use too. A picture or diagram often shows you the answer by itself!')
    ] },
    { kind: 'practice', h: L('O‘ylab ko‘ring', 'Подумай', 'Think about it'), p: [
      L('Algoritm bo‘yicha yeching: o‘qi, sxema, amal, javob, tekshir.', 'Решай по алгоритму: прочитай, схема, действие, ответ, проверь.', 'Solve using the algorithm: read, diagram, operation, answer, check.')
    ], list: [
      L('Ra’noda 35 ta rangli qalam bor, Dilshodda 17 ta ko‘p. Dilshodda nechta?', 'У Раъно 35 цветных карандашей, у Дильшода на 17 больше. Сколько у Дильшода?', 'Rano has 35 coloured pencils and Dilshod 17 more. How many does Dilshod have?'),
      L('Sinfda 28 o‘quvchi bor. 13 tasi qiz. O‘g‘il bolalar qizlardan necha ta ko‘p?', 'В классе 28 учеников. 13 из них девочки. На сколько мальчиков больше, чем девочек?', 'A class has 28 pupils. 13 are girls. How many more boys than girls are there?'),
      L('Omborda 90 kg kartoshka bor edi. Birinchi kuni 25 kg, ikkinchi kuni 30 kg sotildi. Qancha qoldi?', 'На складе было 90 кг картофеля. В первый день продали 25 кг, во второй — 30 кг. Сколько осталось?', 'A store had 90 kg of potatoes. 25 kg were sold on day one and 30 kg on day two. How much is left?'),
      L('O‘zingiz «… ta kam» turidagi masala tuzing va yeching.', 'Составь сам задачу вида «на … меньше» и реши её.', 'Make up your own “… fewer” problem and solve it.')
    ], after: [
      L('Javoblar: 35 + 17 = 52 ta; o‘g‘il bolalar 28 − 13 = 15, 15 − 13 = 2 ta ko‘p; 90 − (25 + 30) = 35 kg.', 'Ответы: 35 + 17 = 52; мальчиков 28 − 13 = 15, на 15 − 13 = 2 больше; 90 − (25 + 30) = 35 кг.', 'Answers: 35 + 17 = 52; boys 28 − 13 = 15, so 15 − 13 = 2 more; 90 − (25 + 30) = 35 kg.')
    ] },
    { kind: 'summary', h: L('Xulosa', 'Итог', 'Summary'), list: [
      L('Masala: shart, savol, yechim va javob.', 'Задача: условие, вопрос, решение и ответ.', 'A problem has a condition, a question, a solution and an answer.'),
      L('Algoritm: o‘qi → sxema → amal → javob → tekshir.', 'Алгоритм: прочитай → схема → действие → ответ → проверь.', 'Algorithm: read → diagram → operation → answer → check.'),
      L('Butunni topish — qo‘shish; qismni topish — ayirish.', 'Найти целое — сложение; найти часть — вычитание.', 'Finding the whole means adding; finding a part means subtracting.'),
      L('«… ta ko‘p» — qo‘shish, «… ta kam» — ayirish.', '«На … больше» — сложение, «на … меньше» — вычитание.', '“… more” means adding, “… fewer” means subtracting.'),
      L('«Necha ta ko‘p (kam)?» — doim ayirish: kattadan kichigini.', '«На сколько больше (меньше)?» — всегда вычитание: из большего меньшее.', '“How many more (fewer)?” is always subtraction: the smaller from the bigger.'),
      L('Javobni mantiq bilan tekshiring va birligini yozing.', 'Проверяй ответ по смыслу и пиши наименование.', 'Check the answer makes sense and write the unit.'),
      L('Masalalar 3600 yildan beri yechib kelinmoqda — Misr, Bobil, al-Xorazmiy va Beruniy ham yechgan.', 'Задачи решают уже 3600 лет — в Египте, Вавилоне, их решали аль-Хорезми и Беруни.', 'People have solved word problems for 3 600 years — in Egypt and Babylon, and so did al-Khwarizmi and Biruni.')
    ] }
  ] });
})(this);
// --END--
