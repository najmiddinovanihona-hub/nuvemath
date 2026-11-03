// Nuvemath — 1-sinf, II qism nazariyasi. Format: js/theory/GUIDE.md
(function (root) {
  'use strict';
  var L = root.NMCurriculum.H.L, T = root.NMTheory, P = '1-2';

  // ---------- t1. 11 dan 20 gacha sonlar va ularning o'nlikda yozilishi ----------
  T.add(P, 't1', { sections: [
    { kind: 'intro', h: L('O‘ndan katta sonlar olami', 'Мир чисел больше десяти', 'The world beyond ten'), p: [
      L('Salom, do‘stim! Birinchi qismda biz 1 dan 10 gacha sanashni o‘rgandik. Ikki qo‘limizdagi barmoqlar — roppa-rosa 10 ta. Lekin dunyoda 10 dan ko‘p narsalar juda ko‘p! Sinfdagi bolalar, daraxtdagi olmalar, osmondagi yulduzlar… Ularni qanday sanaymiz?', 'Привет, друг! В первой части мы научились считать от 1 до 10. На двух руках у нас ровно 10 пальцев. Но в мире очень много вещей, которых больше десяти! Дети в классе, яблоки на дереве, звёзды на небе… Как их сосчитать?', 'Hello, friend! In part one we learned to count from 1 to 10. On two hands we have exactly 10 fingers. But the world is full of things that come in more than ten! Children in a class, apples on a tree, stars in the sky… How do we count them?'),
      L('Bir kuni Alisher bobosi bilan bog‘dan olma terdi. U olmalarni sanadi: bir, ikki, uch… o‘n. Barmoqlari tugadi! Bobosi kulib dedi: «O‘nta olmani bitta savatchaga sol. Endi savatcha — bu <b>bir o‘nlik</b>. Qolganini esa alohida sana». Alisher savatchaga 10 ta olma soldi, yonida yana 4 ta olma qoldi. «Bir o‘nlik va to‘rt birlik — bu o‘n to‘rt!» — dedi bobosi.', 'Однажды Алишер с дедушкой собирал яблоки в саду. Он считал: один, два, три… десять. Пальцы кончились! Дедушка улыбнулся: «Положи десять яблок в корзинку. Теперь корзинка — это <b>один десяток</b>. А остальные считай отдельно». Алишер положил в корзинку 10 яблок, рядом осталось ещё 4. «Один десяток и четыре единицы — это четырнадцать!» — сказал дедушка.', 'One day Alisher was picking apples in the orchard with his grandfather. He counted: one, two, three… ten. He ran out of fingers! Grandfather smiled: “Put ten apples in a little basket. Now the basket is <b>one ten</b>. Count the rest separately.” Alisher put 10 apples in the basket and 4 apples were left beside it. “One ten and four ones — that is fourteen!” said Grandfather.'),
      L('Bu mavzuda biz xuddi Alisher kabi o‘nliklar va birliklar bilan sanashni, 11 dan 20 gacha sonlarni yozishni va o‘qishni o‘rganamiz.', 'В этой теме мы, как Алишер, научимся считать десятками и единицами, записывать и читать числа от 11 до 20.', 'In this topic, just like Alisher, we will learn to count with tens and ones and to write and read the numbers from 11 to 20.')
    ] },
    { kind: 'def', h: L('O‘nlik va birlik', 'Десяток и единица', 'Tens and ones'), p: [
      L('<b>Birlik</b> — bu bitta narsa: bitta olma, bitta kubcha, bitta barmoq. <b>O‘nlik</b> — bu 10 ta birlik birga: bitta savatcha olma, bitta tayoqcha 10 ta kubchadan, ikki qo‘l barmoqlari.', '<b>Единица</b> — это один предмет: одно яблоко, один кубик, один палец. <b>Десяток</b> — это 10 единиц вместе: одна корзинка яблок, одна палочка из 10 кубиков, пальцы двух рук.', 'A <b>one</b> is a single thing: one apple, one cube, one finger. A <b>ten</b> is 10 ones together: one basket of apples, one rod made of 10 cubes, the fingers of two hands.'),
      L('11 dan 20 gacha bo‘lgan sonlar ikkita raqam bilan yoziladi. Shuning uchun ular <b>ikki xonali sonlar</b> deyiladi. Chapdagi raqam nechta o‘nlik borligini, o‘ngdagi raqam nechta birlik borligini ko‘rsatadi.', 'Числа от 11 до 20 записываются двумя цифрами. Поэтому они называются <b>двузначными числами</b>. Левая цифра показывает, сколько десятков, правая — сколько единиц.', 'The numbers from 11 to 20 are written with two digits. That is why they are called <b>two-digit numbers</b>. The left digit shows how many tens there are, the right digit shows how many ones.')
    ], list: [
      L('<b>14</b> = 1 o‘nlik va 4 birlik = 10 + 4', '<b>14</b> = 1 десяток и 4 единицы = 10 + 4', '<b>14</b> = 1 ten and 4 ones = 10 + 4'),
      L('<b>17</b> = 1 o‘nlik va 7 birlik = 10 + 7', '<b>17</b> = 1 десяток и 7 единиц = 10 + 7', '<b>17</b> = 1 ten and 7 ones = 10 + 7'),
      L('<b>20</b> = 2 o‘nlik va 0 birlik = 10 + 10', '<b>20</b> = 2 десятка и 0 единиц = 10 + 10', '<b>20</b> = 2 tens and 0 ones = 10 + 10')
    ], after: [
      L('Diqqat: 20 sonida birliklar yo‘q, shuning uchun o‘ng tomonda <b>0</b> turadi. Nol — «bo‘sh joy» degani emas, u «bu xonada hech narsa yo‘q» deb aytib turadi.', 'Внимание: в числе 20 единиц нет, поэтому справа стоит <b>0</b>. Ноль — не «пустое место», он сообщает: «в этом разряде ничего нет».', 'Notice: 20 has no ones, so a <b>0</b> stands on the right. Zero is not an “empty space” — it tells us “there is nothing in this place”.')
    ] },
    { kind: 'history', h: L('Odamlar nega o‘ntalab sanaydi?', 'Почему люди считают десятками?', 'Why do people count in tens?'), p: [
      L('Javob juda oddiy: chunki qo‘limizda <b>10 ta barmoq</b> bor! Qadimgi odamlar barmoqlarida sanashgan. Barmoqlar tugagach, ular «bir qo‘l to‘ldi» deb belgilashgan va yana boshidan sanashgan. Shuning uchun deyarli butun dunyo o‘ntalab sanaydi.', 'Ответ очень простой: потому что у нас <b>10 пальцев</b>! Древние люди считали на пальцах. Когда пальцы заканчивались, они отмечали «одна пара рук заполнена» и считали заново. Поэтому почти весь мир считает десятками.', 'The answer is simple: because we have <b>10 fingers</b>! Ancient people counted on their fingers. When the fingers ran out, they marked “two hands full” and started again. That is why almost the whole world counts in tens.'),
      L('Qadimgi Misrda, bundan 5 ming yil oldin, o‘nlik uchun alohida belgi bor edi — u sigir oyog‘idagi kishanga o‘xshardi. Bir chiziqcha — bir, kishancha — o‘n. Misrliklar 14 ni bitta kishancha va to‘rtta chiziqcha bilan yozgan!', 'В Древнем Египте, 5 тысяч лет назад, для десятка был особый знак — он напоминал путы на ноге коровы. Одна чёрточка — один, путы — десять. Египтяне записывали 14 одними путами и четырьмя чёрточками!', 'In Ancient Egypt, 5 000 years ago, there was a special sign for ten — it looked like a hobble on a cow’s leg. One stroke meant one; the hobble meant ten. The Egyptians wrote 14 as one hobble and four strokes!'),
      L('Biz hozir ishlatayotgan raqamlar — 0, 1, 2, … 9 — Hindistonda paydo bo‘lgan. Buyuk olim <b>Muhammad al-Xorazmiy</b> (taxminan 783–850) ularni o‘z kitobida tushuntirib bergan. Uning kitobi butun dunyoga tarqaldi, shuning uchun bu raqamlar «arab raqamlari» deb ham ataladi. Xorazmiy Xorazmda tug‘ilgan — bu O‘zbekistonda!', 'Цифры, которыми мы пользуемся сейчас, — 0, 1, 2, … 9 — появились в Индии. Великий учёный <b>Мухаммад аль-Хорезми</b> (около 783–850) объяснил их в своей книге. Книга разошлась по всему миру, поэтому эти цифры называют ещё «арабскими». Хорезми родился в Хорезме — это в Узбекистане!', 'The digits we use today — 0, 1, 2, … 9 — were born in India. The great scholar <b>Muhammad al-Khwarizmi</b> (about 783–850) explained them in his book. His book spread all over the world, which is why these digits are also called “Arabic numerals”. Al-Khwarizmi was born in Khorezm — that is in Uzbekistan!')
    ] },
    { kind: 'rule', h: L('Sonni o‘nlik va birlikka ajratish qoidasi', 'Правило: число = десятки + единицы', 'The rule: a number = tens + ones'), p: [
      L('11 dan 19 gacha har qanday sonni shunday yozish mumkin:', 'Любое число от 11 до 19 можно записать так:', 'Any number from 11 to 19 can be written like this:'),
      L('<b>son = 10 + birliklar</b>', '<b>число = 10 + единицы</b>', '<b>number = 10 + ones</b>')
    ], list: [
      L('11 = 10 + 1', '11 = 10 + 1', '11 = 10 + 1'),
      L('13 = 10 + 3', '13 = 10 + 3', '13 = 10 + 3'),
      L('16 = 10 + 6', '16 = 10 + 6', '16 = 10 + 6'),
      L('19 = 10 + 9', '19 = 10 + 9', '19 = 10 + 9')
    ], after: [
      L('Bu qoida teskari tomonga ham ishlaydi. Agar 10 ga biror birlik qo‘shsak, ikki xonali son hosil bo‘ladi: 10 + 5 = 15. Agar ikki xonali sondan 10 ni ayirsak, faqat birliklar qoladi: 15 − 10 = 5. Agar birliklarni ayirsak, faqat o‘nlik qoladi: 15 − 5 = 10.', 'Это правило работает и в обратную сторону. Если к 10 прибавить единицы, получится двузначное число: 10 + 5 = 15. Если из двузначного числа вычесть 10, останутся только единицы: 15 − 10 = 5. Если вычесть единицы, останется десяток: 15 − 5 = 10.', 'The rule works backwards too. Add some ones to 10 and you get a two-digit number: 10 + 5 = 15. Take 10 away from a two-digit number and only the ones are left: 15 − 10 = 5. Take the ones away and the ten is left: 15 − 5 = 10.'),
      L('Yodda tuting: <b>o‘nlik chapda, birlik o‘ngda</b>. Raqamlarning o‘rnini almashtirib bo‘lmaydi — 14 va 41 butunlay boshqa sonlar!', 'Запомни: <b>десятки слева, единицы справа</b>. Менять цифры местами нельзя — 14 и 41 совсем разные числа!', 'Remember: <b>tens on the left, ones on the right</b>. You cannot swap the digits — 14 and 41 are completely different numbers!')
    ] },
    { kind: 'steps', h: L('Qadamma-qadam: narsalarni sanaymiz', 'Шаг за шагом: считаем предметы', 'Step by step: counting objects'), p: [
      L('Oldingizda ko‘p kubchalar bor. Ularni 10 dan ortiq ekanini bilasiz. Qanday qilib tez va to‘g‘ri sanash mumkin?', 'Перед тобой много кубиков. Ты знаешь, что их больше десяти. Как сосчитать быстро и правильно?', 'There are lots of cubes in front of you. You know there are more than ten. How can you count them quickly and correctly?')
    ], list: [
      L('1-qadam. 10 ta kubchani sanab, ularni bitta qatorga tering. Bu — <b>bir o‘nlik</b>.', 'Шаг 1. Отсчитай 10 кубиков и выложи их в один ряд. Это <b>один десяток</b>.', 'Step 1. Count out 10 cubes and put them in one row. That is <b>one ten</b>.'),
      L('2-qadam. Qolgan kubchalarni alohida sanang. Bu — <b>birliklar</b>.', 'Шаг 2. Отдельно сосчитай оставшиеся кубики. Это <b>единицы</b>.', 'Step 2. Count the remaining cubes separately. Those are the <b>ones</b>.'),
      L('3-qadam. Sonni ayting: «bir o‘nlik va olti birlik — o‘n olti».', 'Шаг 3. Назови число: «один десяток и шесть единиц — шестнадцать».', 'Step 3. Say the number: “one ten and six ones — sixteen”.'),
      L('4-qadam. Sonni yozing: avval o‘nliklar soni (1), keyin birliklar soni (6) — <b>16</b>.', 'Шаг 4. Запиши число: сначала количество десятков (1), потом единиц (6) — <b>16</b>.', 'Step 4. Write the number: first the number of tens (1), then the ones (6) — <b>16</b>.')
    ], after: [
      L('Agar birlik qolmasa va ikkita to‘liq qator hosil bo‘lsa — bu 2 o‘nlik, ya’ni <b>20</b>.', 'Если единиц не осталось и получилось два полных ряда — это 2 десятка, то есть <b>20</b>.', 'If no ones are left and you have two full rows — that is 2 tens, which is <b>20</b>.')
    ] },
    { kind: 'example', h: L('Yechilgan namunalar', 'Разобранные примеры', 'Worked examples'), p: [
      L('Avval o‘zingiz o‘ylab ko‘ring, keyin yechimni oching.', 'Сначала подумай сам, потом открой решение.', 'Think first, then open the solution.')
    ], ex: [
      { q: L('Stolda 1 ta tayoqcha (10 kubcha) va 3 ta alohida kubcha bor. Qaysi son tasvirlangan?', 'На столе 1 палочка (10 кубиков) и 3 отдельных кубика. Какое число показано?', 'On the table there is 1 rod (10 cubes) and 3 loose cubes. Which number is shown?'), s: L('Tayoqcha — 1 o‘nlik, kubchalar — 3 birlik. 10 + 3 = <b>13</b>. O‘qiymiz: o‘n uch.', 'Палочка — 1 десяток, кубики — 3 единицы. 10 + 3 = <b>13</b>. Читаем: тринадцать.', 'The rod is 1 ten, the cubes are 3 ones. 10 + 3 = <b>13</b>. We read it: thirteen.') },
      { q: L('18 sonida nechta o‘nlik va nechta birlik bor?', 'Сколько десятков и единиц в числе 18?', 'How many tens and ones are in 18?'), s: L('Chapdagi raqam — 1, demak 1 o‘nlik. O‘ngdagi raqam — 8, demak 8 birlik. 18 = 10 + 8.', 'Левая цифра — 1, значит 1 десяток. Правая цифра — 8, значит 8 единиц. 18 = 10 + 8.', 'The left digit is 1, so 1 ten. The right digit is 8, so 8 ones. 18 = 10 + 8.') },
      { q: L('10 + 7 = ?', '10 + 7 = ?', '10 + 7 = ?'), s: L('O‘nlikka 7 birlik qo‘shamiz. 1 o‘nlik va 7 birlik — <b>17</b>.', 'К десятку прибавляем 7 единиц. 1 десяток и 7 единиц — <b>17</b>.', 'We add 7 ones to the ten. 1 ten and 7 ones — <b>17</b>.') },
      { q: L('15 − 5 = ?', '15 − 5 = ?', '15 − 5 = ?'), s: L('15 — bu 1 o‘nlik va 5 birlik. Barcha 5 birlikni ayiramiz, faqat o‘nlik qoladi: <b>10</b>.', '15 — это 1 десяток и 5 единиц. Вычитаем все 5 единиц, остаётся только десяток: <b>10</b>.', '15 is 1 ten and 5 ones. Take all 5 ones away and only the ten is left: <b>10</b>.') },
      { q: L('Malika 10 ta qizil va 9 ta sariq bargni yig‘di. Jami nechta barg?', 'Малика собрала 10 красных и 9 жёлтых листьев. Сколько всего листьев?', 'Malika gathered 10 red leaves and 9 yellow leaves. How many leaves in total?'), s: L('10 ta qizil barg — bu bir o‘nlik. 9 ta sariq — birliklar. 10 + 9 = <b>19</b>. Javob: 19 ta barg.', '10 красных листьев — это один десяток. 9 жёлтых — единицы. 10 + 9 = <b>19</b>. Ответ: 19 листьев.', '10 red leaves make one ten. 9 yellow ones are the ones. 10 + 9 = <b>19</b>. Answer: 19 leaves.') }
    ] },
    { kind: 'table', h: L('11 dan 20 gacha sonlar jadvali', 'Таблица чисел от 11 до 20', 'Table of numbers 11 to 20'), p: [
      L('Jadvalda har bir son, uning o‘nlik va birliklari ko‘rsatilgan. Diqqat bilan qarang: o‘nliklar ustuni deyarli hamma joyda 1, faqat 20 da 2.', 'В таблице показано каждое число, его десятки и единицы. Присмотрись: в столбце десятков почти везде 1, и только у 20 — 2.', 'The table shows each number with its tens and ones. Look closely: the tens column is 1 almost everywhere, and only 20 has 2.')
    ], table: { head: [L('Son', 'Число', 'Number'), L('O‘nliklar', 'Десятки', 'Tens'), L('Birliklar', 'Единицы', 'Ones'), L('Yig‘indi', 'Сумма', 'Sum')], rows: [
      ['11', '1', '1', '10 + 1'],
      ['12', '1', '2', '10 + 2'],
      ['13', '1', '3', '10 + 3'],
      ['15', '1', '5', '10 + 5'],
      ['17', '1', '7', '10 + 7'],
      ['19', '1', '9', '10 + 9'],
      ['20', '2', '0', '10 + 10']
    ] }, after: [
      L('Jadvalda yo‘q sonlarni o‘zingiz to‘ldiring: 14, 16 va 18 ni o‘nlik va birlikka ajrating.', 'Заполни пропущенные числа сам: разложи 14, 16 и 18 на десятки и единицы.', 'Fill in the missing numbers yourself: split 14, 16 and 18 into tens and ones.')
    ] },
    { kind: 'mistake', h: L('Tipik xatolar', 'Типичные ошибки', 'Common mistakes'), p: [
      L('Bu mavzuda bolalar ko‘pincha shunday adashadi. Ularni bilib oling — takrorlamaysiz!', 'В этой теме дети часто ошибаются вот так. Узнай об этих ошибках — и не повторишь!', 'Children often slip up like this in this topic. Learn the mistakes and you will not repeat them!')
    ], list: [
      L('<b>Raqamlarni almashtirish.</b> «Bir o‘nlik va to‘rt birlik» ni 41 deb yozish. To‘g‘risi — 14: o‘nlik doim chapda.', '<b>Менять цифры местами.</b> «Один десяток и четыре единицы» записать как 41. Правильно — 14: десятки всегда слева.', '<b>Swapping the digits.</b> Writing “one ten and four ones” as 41. The right answer is 14: tens are always on the left.'),
      L('<b>10 + 5 = 105.</b> Ba’zi bolalar raqamlarni yonma-yon yozib qo‘yadi. Yo‘q! 10 + 5 — bu 1 o‘nlik va 5 birlik, ya’ni 15.', '<b>10 + 5 = 105.</b> Некоторые дети просто пишут цифры рядом. Нет! 10 + 5 — это 1 десяток и 5 единиц, то есть 15.', '<b>10 + 5 = 105.</b> Some children just write the digits side by side. No! 10 + 5 is 1 ten and 5 ones, which is 15.'),
      L('<b>20 da birlik bor deb o‘ylash.</b> 20 = 2 o‘nlik, birliklar 0 ta. Nolni unutmang!', '<b>Думать, что в 20 есть единицы.</b> 20 = 2 десятка, единиц 0. Не забывай ноль!', '<b>Thinking 20 has ones.</b> 20 = 2 tens and 0 ones. Don’t forget the zero!'),
      L('<b>O‘nlikni to‘liq sanamaslik.</b> Qatorda 9 ta kubcha bo‘lsa, bu hali o‘nlik emas. O‘nlik — aynan 10 ta.', '<b>Недосчитать десяток.</b> Если в ряду 9 кубиков — это ещё не десяток. Десяток — ровно 10.', '<b>Not counting a full ten.</b> A row of 9 cubes is not a ten yet. A ten is exactly 10.')
    ] },
    { kind: 'life', h: L('Hayotda qayerda kerak?', 'Где это нужно в жизни?', 'Where is this used in life?'), p: [
      L('<b>Do‘konda.</b> Tuxumlar 10 talik qutida sotiladi. Onangiz bitta quti va yana 2 ta tuxum olsa — jami 12 ta tuxum. O‘nlik va birlik — tayyor!', '<b>В магазине.</b> Яйца продают в коробках по 10 штук. Если мама купила одну коробку и ещё 2 яйца — всего 12 яиц. Десяток и единицы — готово!', '<b>At the shop.</b> Eggs are sold in boxes of 10. If Mum buys one box and 2 more eggs — that is 12 eggs. A ten and some ones — done!'),
      L('<b>Sinfda.</b> O‘qituvchi daftarlarni 10 tadan bog‘lab qo‘yadi. Bir bog‘lam va 7 ta daftar — 17 ta daftar. Sanash juda tez bo‘ladi.', '<b>В классе.</b> Учитель связывает тетради по 10 штук. Одна пачка и 7 тетрадей — 17 тетрадей. Считать получается очень быстро.', '<b>In class.</b> The teacher ties exercise books in bundles of 10. One bundle and 7 loose books — 17 books. Counting becomes very fast.'),
      L('<b>Uyda.</b> Tug‘ilgan kuningizga 10 ta shar sotib olindi, yana 5 tasini do‘stingiz olib keldi. Xonada 15 ta shar! Yoshingiz ham tez orada ikki xonali bo‘ladi — 10, 11, 12…', '<b>Дома.</b> На день рождения купили 10 шариков, ещё 5 принёс друг. В комнате 15 шариков! И твой возраст скоро станет двузначным — 10, 11, 12…', '<b>At home.</b> 10 balloons were bought for your birthday and your friend brought 5 more. There are 15 balloons in the room! Your age will soon be a two-digit number too — 10, 11, 12…'),
      L('<b>Sportda.</b> Futbol jamoasida 11 ta o‘yinchi bor: 10 ta maydonda yuguradigan va 1 ta darvozabon. Mana sizga 10 + 1!', '<b>В спорте.</b> В футбольной команде 11 игроков: 10 бегают по полю и 1 вратарь. Вот тебе 10 + 1!', '<b>In sport.</b> A football team has 11 players: 10 running on the pitch and 1 goalkeeper. There is your 10 + 1!')
    ] },
    { kind: 'fact', h: L('Qiziqarli faktlar', 'Интересные факты', 'Fun facts'), list: [
      L('Qadimgi Bobil odamlari 10 talab emas, <b>60 talab</b> sanashgan! Shuning uchun hozir ham bir soatda 60 daqiqa, bir daqiqada 60 soniya bor.', 'Жители Древнего Вавилона считали не десятками, а <b>шестидесятками</b>! Поэтому до сих пор в часе 60 минут, а в минуте 60 секунд.', 'The people of ancient Babylon counted not in tens but in <b>sixties</b>! That is why an hour still has 60 minutes and a minute has 60 seconds.'),
      L('Ba’zi xalqlar barmoq va oyoq barmoqlarini birga sanab, <b>20 talab</b> sanashgan. Fransuz tilida 80 soni hozir ham «to‘rtta yigirma» deb aytiladi!', 'Некоторые народы считали пальцы на руках и ногах вместе — <b>двадцатками</b>. Во французском языке число 80 до сих пор называют «четыре двадцатки»!', 'Some peoples counted fingers and toes together — in <b>twenties</b>. In French, 80 is still said as “four twenties”!'),
      L('Ingliz tilida 11 va 12 ning nomlari (eleven, twelve) boshqa sonlarga o‘xshamaydi — ular juda qadimgi so‘zlar bo‘lib, «bitta ortiq» va «ikkita ortiq» degan ma’noni bildirgan.', 'В английском языке названия 11 и 12 (eleven, twelve) не похожи на другие — это очень старые слова, означавшие «один сверх» и «два сверх».', 'In English the names of 11 and 12 (eleven, twelve) do not look like the other numbers — they are very old words that meant “one left over” and “two left over”.'),
      L('Odamning umurtqa pog‘onasi chap va o‘ng tomonida 12 juft qovurg‘a bor — har tomonda bir o‘nlik va ikki birlik!', 'У человека 12 пар рёбер — с каждой стороны один десяток и две единицы!', 'A person has 12 pairs of ribs — one ten and two ones on each side!')
    ] },
    { kind: 'practice', h: L('O‘ylab ko‘ring', 'Подумай', 'Think about it'), p: [
      L('Javob berishdan oldin eslang: chapda o‘nlik, o‘ngda birlik.', 'Перед ответом вспомни: слева десятки, справа единицы.', 'Before answering, remember: tens on the left, ones on the right.')
    ], list: [
      L('Uyingizdagi qoshiqlarni sanang. Avval 10 tasini bir tomonga qo‘ying, qolganini alohida sanang. Nechta chiqdi?', 'Сосчитай ложки у себя дома. Сначала отложи 10, остальные сосчитай отдельно. Сколько получилось?', 'Count the spoons at home. First put 10 to one side, then count the rest. How many are there?'),
      L('Qaysi sonda 1 o‘nlik va 1 birlik bor?', 'В каком числе 1 десяток и 1 единица?', 'Which number has 1 ten and 1 one?'),
      L('12 − 10 = ? va 12 − 2 = ? Nega javoblar har xil?', '12 − 10 = ? и 12 − 2 = ? Почему ответы разные?', '12 − 10 = ? and 12 − 2 = ? Why are the answers different?'),
      L('Ikki xonali sonlar ichida eng kichigi qaysi? Eng kattasi (20 gacha) qaysi?', 'Какое самое маленькое двузначное число? Какое самое большое (до 20)?', 'What is the smallest two-digit number? What is the largest (up to 20)?')
    ], after: [
      L('Javoblar: 2) 11; 3) 12 − 10 = 2 (birliklar qoldi), 12 − 2 = 10 (o‘nlik qoldi); 4) eng kichigi 10, eng kattasi 20.', 'Ответы: 2) 11; 3) 12 − 10 = 2 (остались единицы), 12 − 2 = 10 (остался десяток); 4) самое маленькое 10, самое большое 20.', 'Answers: 2) 11; 3) 12 − 10 = 2 (the ones are left), 12 − 2 = 10 (the ten is left); 4) the smallest is 10, the largest is 20.')
    ] },
    { kind: 'summary', h: L('Xulosa', 'Итог', 'Summary'), list: [
      L('10 ta birlik birlashsa — <b>1 o‘nlik</b> bo‘ladi.', '10 единиц вместе — это <b>1 десяток</b>.', '10 ones together make <b>1 ten</b>.'),
      L('11 dan 20 gacha sonlar ikki raqam bilan yoziladi — ular <b>ikki xonali</b>.', 'Числа от 11 до 20 пишутся двумя цифрами — они <b>двузначные</b>.', 'Numbers from 11 to 20 are written with two digits — they are <b>two-digit</b> numbers.'),
      L('Chapdagi raqam — <b>o‘nliklar</b>, o‘ngdagi raqam — <b>birliklar</b>.', 'Левая цифра — <b>десятки</b>, правая — <b>единицы</b>.', 'The left digit is the <b>tens</b>, the right digit is the <b>ones</b>.'),
      L('14 = 10 + 4, 17 = 10 + 7, 20 = 10 + 10.', '14 = 10 + 4, 17 = 10 + 7, 20 = 10 + 10.', '14 = 10 + 4, 17 = 10 + 7, 20 = 10 + 10.'),
      L('20 da 2 o‘nlik va 0 birlik bor.', 'В 20 — 2 десятка и 0 единиц.', '20 has 2 tens and 0 ones.'),
      L('Odamlar o‘ntalab sanaydi, chunki qo‘lda 10 ta barmoq bor.', 'Люди считают десятками, потому что на руках 10 пальцев.', 'People count in tens because we have 10 fingers.')
    ] }
  ] });

  // ---------- t2. 11 dan 20 gacha sonlar bilan tanishuv ----------
  T.add(P, 't2', { sections: [
    { kind: 'intro', h: L('Sonlar qatorida sayohat', 'Путешествие по числовому ряду', 'A journey along the number line'), p: [
      L('Salom! O‘tgan safar biz o‘nlik va birlik nima ekanini bildik. Endi 11 dan 20 gacha bo‘lgan har bir son bilan yaqindan tanishamiz. Ularning har birining o‘z nomi, o‘z o‘rni va o‘z qo‘shnilari bor.', 'Привет! В прошлый раз мы узнали, что такое десяток и единица. Теперь познакомимся поближе с каждым числом от 11 до 20. У каждого из них есть своё имя, своё место и свои соседи.', 'Hello! Last time we found out what tens and ones are. Now let’s get to know each number from 11 to 20 up close. Each of them has its own name, its own place and its own neighbours.'),
      L('Tasavvur qiling: sonlar — bu bir qatorda turgan uylar. 10-uyda Bobo O‘nlik yashaydi. Undan keyin 11-uy, keyin 12-uy va hokazo 20-uygacha. Har bir uyning o‘ng va chap tomonida qo‘shnisi bor. 15-uyning chap qo‘shnisi — 14, o‘ng qo‘shnisi — 16. Qiziq, a?', 'Представь: числа — это дома, стоящие в один ряд. В доме 10 живёт Дедушка Десяток. За ним дом 11, потом 12 и так далее до дома 20. У каждого дома есть сосед справа и слева. У дома 15 левый сосед — 14, правый — 16. Интересно, правда?', 'Imagine the numbers are houses standing in a row. Grandpa Ten lives at house 10. After him comes house 11, then 12 and so on up to house 20. Every house has a neighbour on the left and on the right. House 15 has 14 on its left and 16 on its right. Interesting, isn’t it?'),
      L('Bugun biz bu sonlarni to‘g‘ri nomlashni, tartib bilan sanashni (oldinga ham, orqaga ham), «oldingi» va «keyingi» sonni topishni o‘rganamiz.', 'Сегодня мы научимся правильно называть эти числа, считать по порядку (вперёд и назад), находить «предыдущее» и «следующее» число.', 'Today we will learn to name these numbers correctly, count in order (forwards and backwards) and find the number “before” and “after”.')
    ] },
    { kind: 'def', h: L('Sonlarning nomlari', 'Имена чисел', 'The names of the numbers'), p: [
      L('O‘zbek tilida 11 dan 19 gacha sonlar juda oson tuziladi: avval «o‘n», keyin birlik nomi. <b>O‘n bir, o‘n ikki, o‘n uch, o‘n to‘rt, o‘n besh, o‘n olti, o‘n yetti, o‘n sakkiz, o‘n to‘qqiz</b>. Nom o‘zi aytib turibdi: o‘nlik va yana nechta birlik!', 'В узбекском языке числа от 11 до 19 образуются очень просто: сначала «о‘н» (десять), потом название единиц. В русском языке похоже: <b>один-на-дцать, две-на-дцать, три-на-дцать…</b> «На-дцать» — это старинное «на десять»: один на десять, два на десять.', 'In Uzbek the numbers from 11 to 19 are built very simply: first “o‘n” (ten), then the name of the ones. In English it is similar for most of them: four-teen, six-teen, seven-teen — “teen” comes from “ten”. Only eleven and twelve are special old words.'),
      L('<b>20</b> — «yigirma». Bu alohida so‘z: 2 o‘nlik, birlik yo‘q.', '<b>20</b> — «двадцать»: «два десятка». Единиц нет.', '<b>20</b> is “twenty” — two tens, no ones.')
    ], list: [
      L('<b>Keyingi son</b> — berilgan sondan 1 ta katta son. 13 dan keyingi son — 14.', '<b>Следующее число</b> — на 1 больше данного. После 13 идёт 14.', 'The <b>next number</b> is 1 more than the given one. After 13 comes 14.'),
      L('<b>Oldingi son</b> — berilgan sondan 1 ta kichik son. 13 dan oldingi son — 12.', '<b>Предыдущее число</b> — на 1 меньше данного. Перед 13 стоит 12.', 'The number <b>before</b> is 1 less than the given one. Before 13 stands 12.'),
      L('<b>Qo‘shni sonlar</b> — sonning oldingi va keyingisi. 13 ning qo‘shnilari — 12 va 14.', '<b>Соседи числа</b> — предыдущее и следующее. Соседи 13 — это 12 и 14.', 'A number’s <b>neighbours</b> are the one before and the one after. The neighbours of 13 are 12 and 14.')
    ] },
    { kind: 'history', h: L('Sonlarni qanday yozishgan?', 'Как записывали числа раньше?', 'How were numbers written long ago?'), p: [
      L('Juda qadimda odamlar sonlarni tayoqchaga chiziqcha tortib belgilashgan. Olimlar Afrikada 20 ming yillik <b>Ishango suyagi</b>ni topishgan — unda chiziqchalar guruh-guruh qilib tortilgan. Bu — eng qadimgi «sanoq daftari»!', 'В глубокой древности люди отмечали числа зарубками на палочке. В Африке учёные нашли <b>кость Ишанго</b>, которой 20 тысяч лет, — на ней зарубки сделаны группами. Это самая древняя «счётная тетрадь»!', 'Long ago people marked numbers with notches on a stick. In Africa scientists found the <b>Ishango bone</b>, 20 000 years old — its notches are cut in groups. It is the oldest “counting notebook”!'),
      L('Qadimgi Rimda sonlar harflar bilan yozilgan: X — o‘n, I — bir. 11 — XI, 12 — XII, 15 — XV (V — besh), 20 — XX. Bu belgilarni hozir ham soat siferblatlarida va kitob boblarida ko‘rish mumkin.', 'В Древнем Риме числа записывали буквами: X — десять, I — один. 11 — XI, 12 — XII, 15 — XV (V — пять), 20 — XX. Эти знаки и сейчас можно увидеть на циферблатах часов и в номерах глав книг.', 'In Ancient Rome numbers were written with letters: X was ten, I was one. 11 was XI, 12 was XII, 15 was XV (V is five), 20 was XX. You can still see these signs on clock faces and in book chapter numbers.'),
      L('Bizning sonlar qatori — 0, 1, 2 … 20 — xona qoidasiga asoslangan. Buyuk vatandoshimiz <b>Abu Rayhon Beruniy</b> (973–1048) hind sanoq usulini juda yaxshi bilgan va o‘z asarlarida katta-katta sonlar bilan hisob-kitob qilgan: u Yer shari o‘lchamini hisoblab topgan!', 'Наш числовой ряд — 0, 1, 2 … 20 — основан на правиле разрядов. Наш великий соотечественник <b>Абу Райхан Беруни</b> (973–1048) прекрасно знал индийский счёт и в своих трудах вычислял огромные числа: он рассчитал размер земного шара!', 'Our number line — 0, 1, 2 … 20 — is based on the place-value rule. The great scholar <b>Abu Rayhan Biruni</b> (973–1048) knew the Indian way of counting very well and worked with huge numbers: he calculated the size of the Earth!')
    ] },
    { kind: 'rule', h: L('Oldingi va keyingi son qoidasi', 'Правило: предыдущее и следующее', 'The rule: before and after'), p: [
      L('Sonlar qatorida har bir son o‘zidan oldingisidan <b>1 ta ko‘p</b>, keyingisidan <b>1 ta kam</b>.', 'В числовом ряду каждое число на <b>1 больше</b> предыдущего и на <b>1 меньше</b> следующего.', 'On the number line each number is <b>1 more</b> than the one before it and <b>1 less</b> than the one after it.'),
      L('<b>Keyingi son = son + 1</b><br><b>Oldingi son = son − 1</b>', '<b>Следующее = число + 1</b><br><b>Предыдущее = число − 1</b>', '<b>Next = number + 1</b><br><b>Before = number − 1</b>')
    ], list: [
      L('16 + 1 = 17 — 16 dan keyin 17 keladi.', '16 + 1 = 17 — после 16 идёт 17.', '16 + 1 = 17 — after 16 comes 17.'),
      L('16 − 1 = 15 — 16 dan oldin 15 turadi.', '16 − 1 = 15 — перед 16 стоит 15.', '16 − 1 = 15 — before 16 stands 15.'),
      L('19 + 1 = 20 — o‘n to‘qqizdan keyin yigirma.', '19 + 1 = 20 — после девятнадцати идёт двадцать.', '19 + 1 = 20 — after nineteen comes twenty.'),
      L('11 − 1 = 10 — o‘n birdan oldin o‘n.', '11 − 1 = 10 — перед одиннадцатью стоит десять.', '11 − 1 = 10 — before eleven stands ten.')
    ], after: [
      L('Bitta qo‘shsak, birliklar raqami 1 ga oshadi: 14 → 15 → 16. Faqat 19 dan 20 ga o‘tganda birliklar 0 bo‘ladi, o‘nliklar esa 2 ta bo‘lib qoladi — go‘yo birliklar savati to‘lib, yangi o‘nlikka aylanadi!', 'Если прибавить один, цифра единиц увеличится на 1: 14 → 15 → 16. Только при переходе от 19 к 20 единицы становятся 0, а десятков — 2: будто корзинка единиц наполнилась и превратилась в новый десяток!', 'Add one and the ones digit goes up by 1: 14 → 15 → 16. Only when we go from 19 to 20 do the ones become 0 and the tens become 2 — as if the basket of ones filled up and turned into a new ten!')
    ] },
    { kind: 'steps', h: L('Qadamma-qadam: orqaga sanash', 'Шаг за шагом: считаем в обратном порядке', 'Step by step: counting backwards'), p: [
      L('Oldinga sanash oson: 11, 12, 13… Orqaga sanash esa sal qiyinroq, lekin juda foydali. Raketani uchirishdan oldin ham orqaga sanashadi: o‘n, to‘qqiz, sakkiz…', 'Считать вперёд легко: 11, 12, 13… Считать назад чуть сложнее, зато очень полезно. Перед запуском ракеты тоже считают назад: десять, девять, восемь…', 'Counting forwards is easy: 11, 12, 13… Counting backwards is a little harder but very useful. Before a rocket launches they count backwards too: ten, nine, eight…')
    ], list: [
      L('1-qadam. Boshlang‘ich sonni ayting: «yigirma».', 'Шаг 1. Назови начальное число: «двадцать».', 'Step 1. Say the starting number: “twenty”.'),
      L('2-qadam. Har safar 1 ta kamaytiring: 20 − 1 = 19, 19 − 1 = 18.', 'Шаг 2. Каждый раз уменьшай на 1: 20 − 1 = 19, 19 − 1 = 18.', 'Step 2. Take 1 away each time: 20 − 1 = 19, 19 − 1 = 18.'),
      L('3-qadam. Birliklar raqamiga qarang: u 9, 8, 7… deb kamayib boradi.', 'Шаг 3. Смотри на цифру единиц: она уменьшается 9, 8, 7…', 'Step 3. Watch the ones digit: it goes down 9, 8, 7…'),
      L('4-qadam. 11 dan keyin 10 keladi — o‘nlik chegarasiga yetdik!', 'Шаг 4. После 11 идёт 10 — мы дошли до границы десятка!', 'Step 4. After 11 comes 10 — we have reached the edge of the ten!')
    ], after: [
      L('Mashq qiling: 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10. Ko‘zingizni yumib ayta olasizmi?', 'Потренируйся: 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10. Сможешь сказать с закрытыми глазами?', 'Practise: 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10. Can you say it with your eyes closed?')
    ] },
    { kind: 'example', h: L('Yechilgan namunalar', 'Разобранные примеры', 'Worked examples'), p: [
      L('Har bir misolni avval o‘zingiz yeching, keyin tekshiring.', 'Каждый пример сначала реши сам, потом проверь.', 'Solve each one yourself first, then check.')
    ], ex: [
      { q: L('15 dan keyingi son qaysi?', 'Какое число следует за 15?', 'Which number comes after 15?'), s: L('Keyingi son = 15 + 1 = <b>16</b>. O‘n besh, o‘n olti.', 'Следующее = 15 + 1 = <b>16</b>. Пятнадцать, шестнадцать.', 'Next = 15 + 1 = <b>16</b>. Fifteen, sixteen.') },
      { q: L('18 dan oldingi son qaysi?', 'Какое число стоит перед 18?', 'Which number comes before 18?'), s: L('Oldingi son = 18 − 1 = <b>17</b>.', 'Предыдущее = 18 − 1 = <b>17</b>.', 'Before = 18 − 1 = <b>17</b>.') },
      { q: L('12 ning qo‘shnilarini toping.', 'Найди соседей числа 12.', 'Find the neighbours of 12.'), s: L('Chap qo‘shni: 12 − 1 = 11. O‘ng qo‘shni: 12 + 1 = 13. Javob: <b>11 va 13</b>.', 'Левый сосед: 12 − 1 = 11. Правый сосед: 12 + 1 = 13. Ответ: <b>11 и 13</b>.', 'Left neighbour: 12 − 1 = 11. Right neighbour: 12 + 1 = 13. Answer: <b>11 and 13</b>.') },
      { q: L('Tushirib qoldirilgan sonlarni yozing: 13, 14, __, 16, __, 18.', 'Запиши пропущенные числа: 13, 14, __, 16, __, 18.', 'Write the missing numbers: 13, 14, __, 16, __, 18.'), s: L('14 dan keyin 15, 16 dan keyin 17. Qator: 13, 14, <b>15</b>, 16, <b>17</b>, 18.', 'После 14 идёт 15, после 16 — 17. Ряд: 13, 14, <b>15</b>, 16, <b>17</b>, 18.', 'After 14 comes 15, after 16 comes 17. The row: 13, 14, <b>15</b>, 16, <b>17</b>, 18.') },
      { q: L('Dilnoza 19-uyda yashaydi. Uning o‘ng qo‘shnisi necha-uyda yashaydi?', 'Дильноза живёт в доме 19. В каком доме живёт её сосед справа?', 'Dilnoza lives at house 19. Which house does her right-hand neighbour live in?'), s: L('O‘ng qo‘shni — keyingi son: 19 + 1 = <b>20</b>. Bu yerda birliklar 9 dan 0 ga o‘tdi, o‘nliklar 2 bo‘ldi.', 'Сосед справа — следующее число: 19 + 1 = <b>20</b>. Здесь единицы перешли с 9 на 0, а десятков стало 2.', 'The right-hand neighbour is the next number: 19 + 1 = <b>20</b>. Here the ones went from 9 to 0 and the tens became 2.') }
    ] },
    { kind: 'table', h: L('Sonlar va qo‘shnilari', 'Числа и их соседи', 'Numbers and their neighbours'), p: [
      L('Jadvalda ba’zi sonlar va ularning qo‘shnilari ko‘rsatilgan. Qoidani tekshiring: o‘rta ustundagi sondan chapda 1 ta kam, o‘ngda 1 ta ko‘p.', 'В таблице показаны некоторые числа и их соседи. Проверь правило: слева от числа в среднем столбце на 1 меньше, справа — на 1 больше.', 'The table shows some numbers with their neighbours. Check the rule: on the left is 1 less than the middle number, on the right is 1 more.')
    ], table: { head: [L('Oldingi', 'Предыдущее', 'Before'), L('Son', 'Число', 'Number'), L('Keyingi', 'Следующее', 'After'), L('Nomi', 'Название', 'Name')], rows: [
      ['10', '11', '12', L('o‘n bir', 'одиннадцать', 'eleven')],
      ['12', '13', '14', L('o‘n uch', 'тринадцать', 'thirteen')],
      ['14', '15', '16', L('o‘n besh', 'пятнадцать', 'fifteen')],
      ['16', '17', '18', L('o‘n yetti', 'семнадцать', 'seventeen')],
      ['18', '19', '20', L('o‘n to‘qqiz', 'девятнадцать', 'nineteen')],
      ['19', '20', '21', L('yigirma', 'двадцать', 'twenty')]
    ] }, after: [
      L('20 dan keyingi son — 21. Bu sonni keyinroq o‘rganamiz, lekin uning ham xuddi shu qoidaga bo‘ysunishini hozirdanoq bilib qo‘ying.', 'После 20 идёт 21. Это число мы изучим позже, но уже сейчас знай, что оно подчиняется тому же правилу.', 'After 20 comes 21. We will study it later, but know right now that it obeys the very same rule.')
    ] },
    { kind: 'mistake', h: L('Tipik xatolar', 'Типичные ошибки', 'Common mistakes'), p: [
      L('Mana shu xatolarga e’tibor bering:', 'Обрати внимание на эти ошибки:', 'Watch out for these mistakes:')
    ], list: [
      L('<b>Sonni tushirib qoldirish.</b> «11, 12, 14, 15…» — 13 qayerda? Sanashda shoshilmang, har bir sonni ayting.', '<b>Пропускать число.</b> «11, 12, 14, 15…» — а где 13? Не спеши, называй каждое число.', '<b>Skipping a number.</b> “11, 12, 14, 15…” — where is 13? Don’t rush; say every number.'),
      L('<b>Oldingi va keyingini chalkashtirish.</b> «17 dan oldingi son 18» — yo‘q! Oldingi — kichikroq, ya’ni 16.', '<b>Путать предыдущее и следующее.</b> «Перед 17 стоит 18» — нет! Предыдущее меньше, то есть 16.', '<b>Mixing up before and after.</b> “Before 17 comes 18” — no! The one before is smaller: 16.'),
      L('<b>19 dan keyin 110 deyish.</b> Ba’zi bolalar «o‘n to‘qqiz, o‘n o‘n» deydi. 19 dan keyin yigirma — <b>20</b> keladi.', '<b>После 19 говорить «десять-десять».</b> Некоторые дети так ошибаются. После 19 идёт двадцать — <b>20</b>.', '<b>Saying “ten-ten” after 19.</b> Some children do this. After 19 comes twenty — <b>20</b>.'),
      L('<b>Orqaga sanashda adashish.</b> 15, 14, 12… — 13 tushib qoldi. Orqaga sanaganda birliklar raqami 1 tadan kamayishini kuzating.', '<b>Сбиваться при обратном счёте.</b> 15, 14, 12… — потерялось 13. При счёте назад следи, что цифра единиц уменьшается на 1.', '<b>Getting lost counting backwards.</b> 15, 14, 12… — 13 got lost. When counting back, watch the ones digit go down by 1 each time.')
    ] },
    { kind: 'life', h: L('Hayotda qayerda kerak?', 'Где это нужно в жизни?', 'Where is this used in life?'), p: [
      L('<b>Uyda.</b> Ko‘p qavatli uyda liftga chiqasiz: 10, 11, 12… 16-qavat. Tugmalar tartib bilan joylashgan — sonlar qatorini bilsangiz, adashmaysiz.', '<b>Дома.</b> В многоэтажном доме ты едешь в лифте: 10, 11, 12… 16-й этаж. Кнопки расположены по порядку — зная числовой ряд, не запутаешься.', '<b>At home.</b> In a tall building you ride the lift: 10, 11, 12… floor 16. The buttons are in order — if you know the number line, you won’t get lost.'),
      L('<b>Kalendarda.</b> Oyning kunlari ham qatorda: 13-sentyabrdan keyin 14-sentyabr keladi. «Ertaga necha-sana?» — bu keyingi sonni topish degani!', '<b>В календаре.</b> Дни месяца тоже идут по порядку: после 13 сентября наступает 14 сентября. «Какое число завтра?» — это и есть поиск следующего числа!', '<b>On the calendar.</b> The days of the month are in a row too: after 13 September comes 14 September. “What date is tomorrow?” means finding the next number!'),
      L('<b>Sinfda.</b> Jurnalda o‘quvchilar tartib raqami bilan yozilgan. Agar siz 12-raqam bo‘lsangiz, sizdan oldin 11-raqamli, keyin 13-raqamli o‘quvchi turadi.', '<b>В классе.</b> В журнале ученики записаны по номерам. Если ты номер 12, перед тобой — номер 11, за тобой — номер 13.', '<b>In class.</b> Pupils are listed by number in the register. If you are number 12, number 11 is before you and number 13 is after you.'),
      L('<b>Navbatda.</b> Shifoxonada yoki bankda navbat raqami beriladi. Tablo 17 ni ko‘rsatsa, 18-raqamli odam keyingi!', '<b>В очереди.</b> В поликлинике или банке выдают номерок. Если на табло 17 — следующий человек с номером 18!', '<b>In a queue.</b> At the clinic or the bank you get a ticket number. If the board shows 17, the person with 18 is next!')
    ] },
    { kind: 'fact', h: L('Qiziqarli faktlar', 'Интересные факты', 'Fun facts'), list: [
      L('Ko‘p mamlakatlarda 13 soni «omadsiz» hisoblanadi, shuning uchun ba’zi mehmonxonalarda 13-qavat yo‘q: 12 dan keyin darhol 14 keladi! Albatta, bu shunchaki e’tiqod — matematikada hamma sonlar teng.', 'Во многих странах число 13 считают «несчастливым», поэтому в некоторых отелях нет 13-го этажа: после 12 сразу идёт 14! Конечно, это просто поверье — в математике все числа равны.', 'In many countries 13 is thought to be “unlucky”, so some hotels have no 13th floor: after 12 comes 14 straight away! Of course that is just a superstition — in maths all numbers are equal.'),
      L('Asalari uyasining katakchalari olti burchakli. Bitta ishchi asalari butun umri davomida choy qoshiqning atigi o‘n ikkidan bir qismicha asal to‘playdi. Bitta qoshiq asal uchun esa 12 ta asalari butun umr ishlashi kerak!', 'Ячейки пчелиных сот шестиугольные. Одна рабочая пчела за всю жизнь собирает всего около двенадцатой части чайной ложки мёда. Чтобы набрать одну ложку, 12 пчёлам нужно трудиться всю жизнь!', 'Honeycomb cells are hexagons. One worker bee makes only about one twelfth of a teaspoon of honey in its whole life. To fill one teaspoon, 12 bees must work for their whole lives!'),
      L('Bir yilda 12 oy, kunda 24 soat, soatda 60 daqiqa. Qadimgi odamlar 12 ni yaxshi ko‘rgan, chunki uni 2, 3, 4 va 6 ga teng bo‘lib bo‘ladi.', 'В году 12 месяцев, в сутках 24 часа, в часе 60 минут. Древние люди любили число 12, потому что его можно поровну разделить на 2, 3, 4 и 6.', 'A year has 12 months, a day has 24 hours, an hour has 60 minutes. Ancient people liked 12 because it splits evenly into 2, 3, 4 and 6.'),
      L('Raketa uchirilishidan oldin «o‘n, to‘qqiz, sakkiz… bir, start!» deb orqaga sanashadi. Bu usul birinchi marta 1929-yilda bir kinofilmda ko‘rsatilgan, keyin haqiqiy kosmodromlarda qo‘llanila boshlangan.', 'Перед стартом ракеты считают назад: «десять, девять, восемь… один, пуск!» Этот приём впервые показали в кинофильме 1929 года, а потом он стал применяться на настоящих космодромах.', 'Before a rocket launch they count down: “ten, nine, eight… one, go!” This idea was first shown in a film in 1929 and was later used at real launch sites.')
    ] },
    { kind: 'practice', h: L('O‘ylab ko‘ring', 'Подумай', 'Think about it'), p: [
      L('Qo‘shnilarni topishda eslang: chapda 1 ta kam, o‘ngda 1 ta ko‘p.', 'Ища соседей, помни: слева на 1 меньше, справа на 1 больше.', 'When finding neighbours, remember: 1 less on the left, 1 more on the right.')
    ], list: [
      L('11 dan 20 gacha ovoz chiqarib sanang, keyin 20 dan 11 gacha orqaga sanang.', 'Посчитай вслух от 11 до 20, потом назад от 20 до 11.', 'Count out loud from 11 to 20, then backwards from 20 to 11.'),
      L('Qaysi sonning qo‘shnilari 16 va 18?', 'У какого числа соседи 16 и 18?', 'Which number has 16 and 18 as neighbours?'),
      L('14 dan 2 ta katta son qaysi? 14 dan 2 ta kichik son qaysi?', 'Какое число на 2 больше 14? Какое на 2 меньше 14?', 'Which number is 2 more than 14? Which is 2 less than 14?'),
      L('Sonlarni tartib bilan yozing: 17, 12, 20, 15, 11.', 'Запиши числа по порядку: 17, 12, 20, 15, 11.', 'Write the numbers in order: 17, 12, 20, 15, 11.')
    ], after: [
      L('Javoblar: 2) 17; 3) 16 va 12; 4) 11, 12, 15, 17, 20.', 'Ответы: 2) 17; 3) 16 и 12; 4) 11, 12, 15, 17, 20.', 'Answers: 2) 17; 3) 16 and 12; 4) 11, 12, 15, 17, 20.')
    ] },
    { kind: 'summary', h: L('Xulosa', 'Итог', 'Summary'), list: [
      L('11 dan 19 gacha sonlar — <b>1 o‘nlik va bir necha birlik</b>; 20 — <b>2 o‘nlik</b>.', 'Числа от 11 до 19 — это <b>1 десяток и несколько единиц</b>; 20 — <b>2 десятка</b>.', 'Numbers 11 to 19 are <b>1 ten and some ones</b>; 20 is <b>2 tens</b>.'),
      L('Sonlar qatorida har keyingi son oldingisidan 1 ta ko‘p.', 'В числовом ряду каждое следующее число на 1 больше.', 'On the number line each next number is 1 more.'),
      L('<b>Keyingi son = son + 1</b>, <b>oldingi son = son − 1</b>.', '<b>Следующее = число + 1</b>, <b>предыдущее = число − 1</b>.', '<b>Next = number + 1</b>, <b>before = number − 1</b>.'),
      L('Sonning qo‘shnilari — undan oldingi va keyingi sonlar.', 'Соседи числа — предыдущее и следующее.', 'A number’s neighbours are the numbers before and after it.'),
      L('19 + 1 = 20: birliklar 0 ga qaytadi, o‘nliklar 2 ta bo‘ladi.', '19 + 1 = 20: единицы возвращаются к 0, десятков становится 2.', '19 + 1 = 20: the ones go back to 0 and the tens become 2.'),
      L('Orqaga sanash ham muhim: 20, 19, 18 … 10.', 'Обратный счёт тоже важен: 20, 19, 18 … 10.', 'Counting backwards matters too: 20, 19, 18 … 10.')
    ] }
  ] });
})(this);
(function (root) {
  'use strict';
  var L = root.NMCurriculum.H.L, T = root.NMTheory, P = '1-2';

  // ---------- t3. Sonlarni taqqoslash ----------
  T.add(P, 't3', { sections: [
    { kind: 'intro', h: L('Kim ko‘proq yig‘di?', 'Кто собрал больше?', 'Who collected more?'), p: [
      L('Bir kuni aka-uka Sardor va Jasur bog‘da yong‘oq terishdi. Sardor 17 ta, Jasur esa 13 ta yong‘oq terdi. Ular bahslashib qolishdi: «Men ko‘p terdim!» — «Yo‘q, men!» Onalari kulib: «Keling, taqqoslaymiz», — dedi.', 'Однажды братья Сардор и Жасур собирали орехи в саду. Сардор собрал 17 орехов, а Жасур — 13. Они заспорили: «Я собрал больше!» — «Нет, я!» Мама улыбнулась: «Давайте сравним».', 'One day the brothers Sardor and Jasur were gathering walnuts in the garden. Sardor gathered 17 and Jasur gathered 13. They started to argue: “I got more!” — “No, I did!” Their mother smiled: “Let’s compare.”'),
      L('Onasi har birining yong‘oqlarini o‘ntadan qatorga terdi. Ikkalasida ham bitta to‘liq qator — bir o‘nlik chiqdi. Keyin qolganlariga qarashdi: Sardorda 7 ta, Jasurda 3 ta. «Demak, Sardor ko‘proq terdi, chunki 7 ta 3 tadan ko‘p», — dedi onasi. Bahs tugadi, aka-uka esa yong‘oqlarni teng bo‘lishib yeyishdi.', 'Мама выложила орехи каждого рядами по десять. У обоих получилось по одному полному ряду — по одному десятку. Потом посмотрели на остаток: у Сардора 7, у Жасура 3. «Значит, Сардор собрал больше, потому что 7 больше 3», — сказала мама. Спор закончился, а братья поделили орехи поровну.', 'Mum laid out each boy’s walnuts in rows of ten. Both had one full row — one ten. Then they looked at what was left: Sardor had 7, Jasur had 3. “So Sardor gathered more, because 7 is more than 3,” said Mum. The argument was over, and the brothers shared the walnuts equally.'),
      L('Bu mavzuda biz ham xuddi shunday qilamiz: 11 dan 20 gacha sonlarni taqqoslashni, «katta», «kichik» va «teng» belgilarini qo‘yishni o‘rganamiz.', 'В этой теме мы поступим так же: научимся сравнивать числа от 11 до 20 и ставить знаки «больше», «меньше» и «равно».', 'In this topic we will do the same: learn to compare the numbers from 11 to 20 and use the signs for “greater”, “less” and “equal”.')
    ] },
    { kind: 'def', h: L('Taqqoslash belgilari', 'Знаки сравнения', 'The comparison signs'), p: [
      L('Ikki sonni taqqoslaganda uchta javob bo‘lishi mumkin. Har biri uchun o‘z belgisi bor:', 'Сравнивая два числа, можно получить один из трёх ответов. Для каждого есть свой знак:', 'When we compare two numbers there are three possible answers. Each one has its own sign:')
    ], list: [
      L('<b>&gt;</b> — «katta». 17 &gt; 13 o‘qiladi: «o‘n yetti o‘n uchdan katta».', '<b>&gt;</b> — «больше». 17 &gt; 13 читается: «семнадцать больше тринадцати».', '<b>&gt;</b> — “greater than”. 17 &gt; 13 reads: “seventeen is greater than thirteen”.'),
      L('<b>&lt;</b> — «kichik». 13 &lt; 17 o‘qiladi: «o‘n uch o‘n yettidan kichik».', '<b>&lt;</b> — «меньше». 13 &lt; 17 читается: «тринадцать меньше семнадцати».', '<b>&lt;</b> — “less than”. 13 &lt; 17 reads: “thirteen is less than seventeen”.'),
      L('<b>=</b> — «teng». 15 = 15 o‘qiladi: «o‘n besh o‘n beshga teng».', '<b>=</b> — «равно». 15 = 15 читается: «пятнадцать равно пятнадцати».', '<b>=</b> — “equals”. 15 = 15 reads: “fifteen equals fifteen”.')
    ], after: [
      L('Belgini qanday eslab qolish mumkin? Uni och qolgan timsohning og‘zi deb tasavvur qiling. Timsoh doim <b>kattaroq</b> songa og‘zini ochadi — u ko‘proq ovqat yemoqchi! Uchli tomoni esa kichik songa qaraydi.', 'Как запомнить знак? Представь, что это рот голодного крокодила. Крокодил всегда открывает пасть на <b>большее</b> число — он хочет съесть побольше! А острый конец смотрит на меньшее число.', 'How do you remember the sign? Imagine it is the mouth of a hungry crocodile. The crocodile always opens its mouth towards the <b>bigger</b> number — it wants to eat more! The pointed end faces the smaller number.')
    ] },
    { kind: 'history', h: L('Belgilar qachon paydo bo‘lgan?', 'Когда появились знаки?', 'When did the signs appear?'), p: [
      L('Qadimda odamlar sonlarni taqqoslashni bilishgan, lekin buni so‘z bilan yozishgan: «bu undan ko‘p». Qadimgi Misrda omborchilar qaysi omborda don ko‘pligini taqqoslab, uni yozib borishgan.', 'В древности люди умели сравнивать числа, но записывали это словами: «это больше того». В Древнем Египте кладовщики сравнивали, в каком амбаре больше зерна, и записывали это.', 'Long ago people knew how to compare numbers, but they wrote it in words: “this is more than that”. In Ancient Egypt storekeepers compared which granary held more grain and wrote it down.'),
      L('«Teng» belgisi (=) ni 1557-yilda Uelslik olim <b>Robert Rekord</b> o‘ylab topgan. U yozgan: «ikkita parallel chiziqdan ko‘ra tengroq narsa yo‘q». Shu sababli «teng» belgisi ikkita bir xil uzunlikdagi chiziqdan iborat.', 'Знак «равно» (=) придумал в 1557 году валлийский учёный <b>Роберт Рекорд</b>. Он написал, что нет ничего более равного, чем две параллельные черты. Поэтому знак «равно» — это две одинаковые черточки.', 'The equals sign (=) was invented in 1557 by the Welsh scholar <b>Robert Recorde</b>. He wrote that nothing is more equal than two parallel lines. That is why the equals sign is two lines of the same length.'),
      L('«Katta» va «kichik» belgilari (&gt; va &lt;) ni 1631-yilda ingliz matematigi <b>Tomas Harriot</b>ning kitobida birinchi bo‘lib ishlatishgan. Undan oldin ham buyuk olim <b>al-Xorazmiy</b> o‘z kitoblarida sonlarni taqqoslashni so‘z bilan juda aniq tushuntirgan edi.', 'Знаки «больше» и «меньше» (&gt; и &lt;) впервые использовали в 1631 году в книге английского математика <b>Томаса Хэрриота</b>. А ещё раньше великий учёный <b>аль-Хорезми</b> очень точно объяснял сравнение чисел словами в своих книгах.', 'The “greater than” and “less than” signs (&gt; and &lt;) first appeared in 1631 in a book by the English mathematician <b>Thomas Harriot</b>. Even earlier, the great scholar <b>al-Khwarizmi</b> explained comparing numbers very clearly in words in his books.')
    ] },
    { kind: 'rule', h: L('Taqqoslash qoidasi', 'Правило сравнения', 'The rule for comparing'), p: [
      L('Ikki xonali sonlarni taqqoslashda doim bir xil tartibga amal qilamiz:', 'Сравнивая двузначные числа, всегда соблюдаем один и тот же порядок:', 'When comparing two-digit numbers we always follow the same order:')
    ], list: [
      L('<b>Avval o‘nliklarni</b> taqqoslaymiz. Qaysi sonda o‘nlik ko‘p bo‘lsa, o‘sha son katta. 20 &gt; 19, chunki 2 o‘nlik 1 o‘nlikdan ko‘p.', '<b>Сначала сравниваем десятки.</b> В каком числе больше десятков, то и больше. 20 &gt; 19, потому что 2 десятка больше 1 десятка.', '<b>First compare the tens.</b> The number with more tens is bigger. 20 &gt; 19 because 2 tens are more than 1 ten.'),
      L('<b>O‘nliklar teng bo‘lsa</b>, birliklarni taqqoslaymiz. 17 va 13: o‘nliklar teng (1 va 1), birliklar 7 &gt; 3, demak 17 &gt; 13.', '<b>Если десятки равны</b>, сравниваем единицы. 17 и 13: десятки равны (1 и 1), единицы 7 &gt; 3, значит 17 &gt; 13.', '<b>If the tens are equal</b>, compare the ones. 17 and 13: the tens are equal (1 and 1), the ones 7 &gt; 3, so 17 &gt; 13.'),
      L('<b>O‘nliklar ham, birliklar ham teng bo‘lsa</b> — sonlar teng: 14 = 14.', '<b>Если равны и десятки, и единицы</b> — числа равны: 14 = 14.', '<b>If both the tens and the ones are equal</b>, the numbers are equal: 14 = 14.')
    ], after: [
      L('Yana bir sir: sonlar qatorida o‘ngroqda turgan son doim kattaroq. 18 son 12 dan o‘ngda turadi, demak 18 &gt; 12. Har qanday ikki xonali son har qanday bir xonali sondan katta: 11 &gt; 9.', 'Ещё один секрет: в числовом ряду число, стоящее правее, всегда больше. 18 стоит правее 12, значит 18 &gt; 12. Любое двузначное число больше любого однозначного: 11 &gt; 9.', 'One more secret: on the number line the number further to the right is always bigger. 18 is to the right of 12, so 18 &gt; 12. Any two-digit number is bigger than any one-digit number: 11 &gt; 9.')
    ] },
    { kind: 'steps', h: L('Qadamma-qadam: belgini qo‘yamiz', 'Шаг за шагом: ставим знак', 'Step by step: choosing the sign'), p: [
      L('Masalan, 16 ◻ 19 da qaysi belgini qo‘yish kerak? Mana bu qadamlar bizga yordam beradi:', 'Например, какой знак поставить в 16 ◻ 19? Нам помогут такие шаги:', 'For example, which sign goes in 16 ◻ 19? These steps will help:')
    ], list: [
      L('1-qadam. Har ikki sonning o‘nliklarini toping: 16 da 1, 19 da 1. Teng!', 'Шаг 1. Найди десятки обоих чисел: в 16 — 1, в 19 — 1. Равны!', 'Step 1. Find the tens of both numbers: 16 has 1, 19 has 1. Equal!'),
      L('2-qadam. O‘nliklar teng bo‘lgani uchun birliklarga qarang: 6 va 9.', 'Шаг 2. Раз десятки равны, смотри на единицы: 6 и 9.', 'Step 2. Since the tens are equal, look at the ones: 6 and 9.'),
      L('3-qadam. 6 &lt; 9, demak 16 &lt; 19.', 'Шаг 3. 6 &lt; 9, значит 16 &lt; 19.', 'Step 3. 6 &lt; 9, so 16 &lt; 19.'),
      L('4-qadam. Tekshiring: timsoh og‘zi katta son — 19 ga ochilganmi? Ha! Javob: <b>16 &lt; 19</b>.', 'Шаг 4. Проверь: пасть крокодила открыта к большему числу — 19? Да! Ответ: <b>16 &lt; 19</b>.', 'Step 4. Check: is the crocodile’s mouth open towards the bigger number, 19? Yes! Answer: <b>16 &lt; 19</b>.')
    ], after: [
      L('Agar ikkala son ham bir xil bo‘lsa, timsoh hech qaysisini tanlamaydi — biz «=» qo‘yamiz.', 'Если оба числа одинаковые, крокодил ни одно не выбирает — ставим «=».', 'If both numbers are the same, the crocodile cannot choose — we write “=”.')
    ] },
    { kind: 'example', h: L('Yechilgan namunalar', 'Разобранные примеры', 'Worked examples'), p: [
      L('Har bir misolni avval o‘zingiz yechib ko‘ring.', 'Каждый пример сначала попробуй решить сам.', 'Try each example yourself first.')
    ], ex: [
      { q: L('Belgi qo‘ying: 18 ◻ 12', 'Поставь знак: 18 ◻ 12', 'Put in the sign: 18 ◻ 12'), s: L('O‘nliklar teng (1 va 1). Birliklar: 8 &gt; 2. Javob: <b>18 &gt; 12</b>.', 'Десятки равны (1 и 1). Единицы: 8 &gt; 2. Ответ: <b>18 &gt; 12</b>.', 'The tens are equal (1 and 1). The ones: 8 &gt; 2. Answer: <b>18 &gt; 12</b>.') },
      { q: L('Belgi qo‘ying: 11 ◻ 19', 'Поставь знак: 11 ◻ 19', 'Put in the sign: 11 ◻ 19'), s: L('O‘nliklar teng. Birliklar: 1 &lt; 9. Javob: <b>11 &lt; 19</b>.', 'Десятки равны. Единицы: 1 &lt; 9. Ответ: <b>11 &lt; 19</b>.', 'The tens are equal. The ones: 1 &lt; 9. Answer: <b>11 &lt; 19</b>.') },
      { q: L('Belgi qo‘ying: 20 ◻ 19', 'Поставь знак: 20 ◻ 19', 'Put in the sign: 20 ◻ 19'), s: L('20 da 2 o‘nlik, 19 da 1 o‘nlik. 2 &gt; 1, birliklarga qarash shart emas. Javob: <b>20 &gt; 19</b>.', 'В 20 — 2 десятка, в 19 — 1 десяток. 2 &gt; 1, на единицы можно не смотреть. Ответ: <b>20 &gt; 19</b>.', '20 has 2 tens, 19 has 1 ten. 2 &gt; 1, so we don’t need to look at the ones. Answer: <b>20 &gt; 19</b>.') },
      { q: L('Belgi qo‘ying: 10 + 5 ◻ 15', 'Поставь знак: 10 + 5 ◻ 15', 'Put in the sign: 10 + 5 ◻ 15'), s: L('Avval chap tomonni hisoblaymiz: 10 + 5 = 15. Endi 15 va 15 — teng. Javob: <b>10 + 5 = 15</b>.', 'Сначала считаем левую часть: 10 + 5 = 15. Теперь 15 и 15 — равны. Ответ: <b>10 + 5 = 15</b>.', 'First work out the left side: 10 + 5 = 15. Now 15 and 15 are equal. Answer: <b>10 + 5 = 15</b>.') },
      { q: L('14, 20, 17 — eng kattasi qaysi?', '14, 20, 17 — какое самое большое?', '14, 20, 17 — which is the largest?'), s: L('20 da 2 o‘nlik bor, qolganlarida 1 ta. Demak, eng kattasi — <b>20</b>. Qolgan ikkitasi: 17 &gt; 14.', 'В 20 — 2 десятка, в остальных — по одному. Значит, самое большое — <b>20</b>. Из оставшихся: 17 &gt; 14.', '20 has 2 tens, the others have 1. So the largest is <b>20</b>. Of the other two: 17 &gt; 14.') }
    ] },
    { kind: 'table', h: L('Taqqoslash jadvali', 'Таблица сравнения', 'Comparison table'), p: [
      L('Jadvalda sonlar juftlari va ularni qanday taqqoslaganimiz ko‘rsatilgan.', 'В таблице показаны пары чисел и то, как мы их сравнили.', 'The table shows pairs of numbers and how we compared them.')
    ], table: { head: [L('Juftlik', 'Пара', 'Pair'), L('O‘nliklar', 'Десятки', 'Tens'), L('Birliklar', 'Единицы', 'Ones'), L('Javob', 'Ответ', 'Answer')], rows: [
      [L('13 ◻ 16', '13 ◻ 16', '13 ◻ 16'), L('1 = 1', '1 = 1', '1 = 1'), L('3 &lt; 6', '3 &lt; 6', '3 &lt; 6'), L('13 &lt; 16', '13 &lt; 16', '13 &lt; 16')],
      [L('19 ◻ 14', '19 ◻ 14', '19 ◻ 14'), L('1 = 1', '1 = 1', '1 = 1'), L('9 &gt; 4', '9 &gt; 4', '9 &gt; 4'), L('19 &gt; 14', '19 &gt; 14', '19 &gt; 14')],
      [L('20 ◻ 18', '20 ◻ 18', '20 ◻ 18'), L('2 &gt; 1', '2 &gt; 1', '2 &gt; 1'), L('kerak emas', 'не нужно', 'not needed'), L('20 &gt; 18', '20 &gt; 18', '20 &gt; 18')],
      [L('15 ◻ 15', '15 ◻ 15', '15 ◻ 15'), L('1 = 1', '1 = 1', '1 = 1'), L('5 = 5', '5 = 5', '5 = 5'), L('15 = 15', '15 = 15', '15 = 15')],
      [L('12 ◻ 9', '12 ◻ 9', '12 ◻ 9'), L('1 &gt; 0', '1 &gt; 0', '1 &gt; 0'), L('kerak emas', 'не нужно', 'not needed'), L('12 &gt; 9', '12 &gt; 9', '12 &gt; 9')]
    ] }, after: [
      L('Oxirgi qatorga qarang: 9 ning o‘nligi yo‘q (0 ta), shuning uchun 12 undan katta, garchi 9 raqami 2 dan katta bo‘lsa ham!', 'Посмотри на последнюю строку: у 9 нет десятков (0), поэтому 12 больше, хотя цифра 9 больше цифры 2!', 'Look at the last row: 9 has no tens (0), so 12 is bigger, even though the digit 9 is bigger than the digit 2!')
    ] },
    { kind: 'mistake', h: L('Tipik xatolar', 'Типичные ошибки', 'Common mistakes'), p: [
      L('Taqqoslashda bolalar ko‘pincha mana shunday adashadi:', 'При сравнении дети часто ошибаются так:', 'Children often go wrong like this when comparing:')
    ], list: [
      L('<b>Belgini teskari qo‘yish.</b> 17 &lt; 13 deb yozish. Esingizda bo‘lsin: timsoh og‘zi katta songa ochiladi.', '<b>Ставить знак наоборот.</b> Писать 17 &lt; 13. Помни: пасть крокодила открыта к большему числу.', '<b>Writing the sign backwards.</b> Writing 17 &lt; 13. Remember: the crocodile’s mouth opens towards the bigger number.'),
      L('<b>Faqat birliklarga qarash.</b> «19 &gt; 20, chunki 9 &gt; 0». Yo‘q! Avval o‘nliklar: 1 &lt; 2, demak 19 &lt; 20.', '<b>Смотреть только на единицы.</b> «19 &gt; 20, потому что 9 &gt; 0». Нет! Сначала десятки: 1 &lt; 2, значит 19 &lt; 20.', '<b>Looking only at the ones.</b> “19 &gt; 20 because 9 &gt; 0.” No! Tens first: 1 &lt; 2, so 19 &lt; 20.'),
      L('<b>Raqamlar sonini unutish.</b> «9 &gt; 11, chunki 9 katta raqam». Ikki xonali son har doim bir xonalidan katta.', '<b>Забывать про количество цифр.</b> «9 &gt; 11, потому что 9 — большая цифра». Двузначное число всегда больше однозначного.', '<b>Forgetting how many digits there are.</b> “9 &gt; 11 because 9 is a big digit.” A two-digit number is always bigger than a one-digit one.'),
      L('<b>Ifodani hisoblamaslik.</b> 10 + 4 ◻ 15 da avval 10 + 4 = 14 ni toping, keyin taqqoslang: 14 &lt; 15.', '<b>Не вычислить выражение.</b> В 10 + 4 ◻ 15 сначала найди 10 + 4 = 14, потом сравнивай: 14 &lt; 15.', '<b>Not working out the expression.</b> In 10 + 4 ◻ 15, first find 10 + 4 = 14, then compare: 14 &lt; 15.')
    ] },
    { kind: 'life', h: L('Hayotda qayerda kerak?', 'Где это нужно в жизни?', 'Where is this used in life?'), p: [
      L('<b>Do‘konda.</b> Bitta o‘yinchoq 15 ming so‘m, boshqasi 18 ming so‘m. Qaysi biri arzonroq? 15 &lt; 18, demak birinchisi arzonroq. Pulni tejash uchun sonlarni taqqoslash kerak!', '<b>В магазине.</b> Одна игрушка стоит 15 тысяч сумов, другая — 18 тысяч. Какая дешевле? 15 &lt; 18, значит первая. Чтобы экономить деньги, надо уметь сравнивать числа!', '<b>At the shop.</b> One toy costs 15 thousand sum, another costs 18 thousand. Which is cheaper? 15 &lt; 18, so the first one. To save money you need to compare numbers!'),
      L('<b>O‘yinda.</b> Ikki jamoa futbol o‘ynadi: biri 12 ochko, ikkinchisi 11 ochko to‘pladi. Kim g‘olib? 12 &gt; 11 — birinchi jamoa!', '<b>В игре.</b> Две команды сыграли в футбол: одна набрала 12 очков, другая 11. Кто победил? 12 &gt; 11 — первая команда!', '<b>In games.</b> Two teams played: one scored 12 points, the other 11. Who won? 12 &gt; 11 — the first team!'),
      L('<b>Ob-havoda.</b> Bugun havo 17 daraja, kecha 14 daraja edi. Bugun issiqroq, chunki 17 &gt; 14.', '<b>В погоде.</b> Сегодня 17 градусов, вчера было 14. Сегодня теплее, потому что 17 &gt; 14.', '<b>With the weather.</b> Today it is 17 degrees, yesterday it was 14. Today is warmer because 17 &gt; 14.'),
      L('<b>Oilada.</b> Opangiz 16 yoshda, akangiz 13 yoshda. Kim katta? Taqqoslang va ayting!', '<b>В семье.</b> Сестре 16 лет, брату 13. Кто старше? Сравни и скажи!', '<b>In the family.</b> Your sister is 16 and your brother is 13. Who is older? Compare and say!')
    ] },
    { kind: 'fact', h: L('Qiziqarli faktlar', 'Интересные факты', 'Fun facts'), list: [
      L('Qarg‘alar va asalarilar ham oz-ko‘pni ajrata oladi! Olimlar asalarilar 0 dan 4 gacha bo‘lgan narsalarni taqqoslay olishini tajribada ko‘rsatishgan.', 'Вороны и пчёлы тоже различают «мало» и «много»! Учёные показали в опытах, что пчёлы умеют сравнивать количества от 0 до 4.', 'Crows and bees can tell “few” from “many” too! Scientists have shown in experiments that bees can compare amounts from 0 to 4.'),
      L('Chaqaloqlar ham taqqoslaydi: 6 oylik bola 8 ta nuqta bilan 16 ta nuqtani ajrata oladi.', 'Младенцы тоже сравнивают: шестимесячный малыш отличает 8 точек от 16.', 'Babies compare too: a six-month-old baby can tell 8 dots from 16 dots.'),
      L('Ot 20 yilgacha, mushuk 15 yilgacha, it esa taxminan 13 yilgacha yashaydi. Kim uzoq yashaydi? Taqqoslang: 20 &gt; 15 &gt; 13.', 'Лошадь живёт до 20 лет, кошка — до 15, собака — около 13. Кто живёт дольше? Сравни: 20 &gt; 15 &gt; 13.', 'A horse lives up to 20 years, a cat up to 15 and a dog about 13. Who lives longest? Compare: 20 &gt; 15 &gt; 13.'),
      L('Timsohning og‘zida 60 dan ortiq tish bor — u haqiqatan ham katta narsalarni yaxshi ko‘radi!', 'Во рту у крокодила больше 60 зубов — он и правда любит всё большое!', 'A crocodile has more than 60 teeth — it really does like big things!')
    ] },
    { kind: 'practice', h: L('O‘ylab ko‘ring', 'Подумай', 'Think about it'), p: [
      L('Avval o‘nliklar, keyin birliklar — shu qoidani unutmang.', 'Сначала десятки, потом единицы — не забывай правило.', 'Tens first, then ones — don’t forget the rule.')
    ], list: [
      L('Belgi qo‘ying: 14 ◻ 11, 17 ◻ 20, 16 ◻ 16.', 'Поставь знак: 14 ◻ 11, 17 ◻ 20, 16 ◻ 16.', 'Put in the sign: 14 ◻ 11, 17 ◻ 20, 16 ◻ 16.'),
      L('15 dan katta, lekin 18 dan kichik sonlarni ayting.', 'Назови числа больше 15, но меньше 18.', 'Name the numbers bigger than 15 but smaller than 18.'),
      L('Sonlarni kattasidan kichigiga tering: 12, 19, 15, 20.', 'Расставь числа от большего к меньшему: 12, 19, 15, 20.', 'Order from largest to smallest: 12, 19, 15, 20.'),
      L('Oilangiz a’zolarining yoshini taqqoslang. Kim eng katta?', 'Сравни возраст членов семьи. Кто самый старший?', 'Compare the ages of your family. Who is the oldest?')
    ], after: [
      L('Javoblar: 1) 14 &gt; 11, 17 &lt; 20, 16 = 16; 2) 16 va 17; 3) 20, 19, 15, 12.', 'Ответы: 1) 14 &gt; 11, 17 &lt; 20, 16 = 16; 2) 16 и 17; 3) 20, 19, 15, 12.', 'Answers: 1) 14 &gt; 11, 17 &lt; 20, 16 = 16; 2) 16 and 17; 3) 20, 19, 15, 12.')
    ] },
    { kind: 'summary', h: L('Xulosa', 'Итог', 'Summary'), list: [
      L('Taqqoslashda uchta belgi bor: <b>&gt;</b> (katta), <b>&lt;</b> (kichik), <b>=</b> (teng).', 'Есть три знака сравнения: <b>&gt;</b> (больше), <b>&lt;</b> (меньше), <b>=</b> (равно).', 'There are three comparison signs: <b>&gt;</b> (greater), <b>&lt;</b> (less), <b>=</b> (equal).'),
      L('Belgining ochiq tomoni doim katta songa qaraydi.', 'Открытая сторона знака всегда смотрит на большее число.', 'The open side of the sign always faces the bigger number.'),
      L('Avval <b>o‘nliklarni</b>, ular teng bo‘lsa — <b>birliklarni</b> taqqoslaymiz.', 'Сначала сравниваем <b>десятки</b>, если они равны — <b>единицы</b>.', 'Compare the <b>tens</b> first; if they are equal, compare the <b>ones</b>.'),
      L('Sonlar qatorida o‘ngdagi son kattaroq.', 'В числовом ряду правее стоит большее число.', 'On the number line the number further right is bigger.'),
      L('Ikki xonali son har qanday bir xonali sondan katta.', 'Двузначное число больше любого однозначного.', 'A two-digit number is bigger than any one-digit number.'),
      L('Ifoda bo‘lsa — avval uni hisoblang, keyin taqqoslang.', 'Если есть выражение — сначала вычисли его, потом сравнивай.', 'If there is an expression, work it out first, then compare.')
    ] }
  ] });

  // ---------- t4. Qavslar ----------
  T.add(P, 't4', { sections: [
    { kind: 'intro', h: L('«Avval meni hisobla!»', '«Сначала посчитай меня!»', '“Work me out first!”'), p: [
      L('Tasavvur qiling: oshxonada buvingiz palov pishiryapti. U aytadi: «Avval sabzini to‘g‘ra, keyin qozonga sol». Agar tartibni almashtirsangiz — butun sabzi qozonga tushib ketadi! Ishlarni to‘g‘ri tartibda qilish juda muhim.', 'Представь: на кухне бабушка готовит плов. Она говорит: «Сначала нарежь морковь, потом положи в казан». Если перепутать порядок — в казан попадёт целая морковка! Делать дела в правильном порядке очень важно.', 'Imagine Grandma is cooking plov in the kitchen. She says: “First chop the carrots, then put them in the pot.” If you mix up the order, whole carrots end up in the pot! Doing things in the right order really matters.'),
      L('Matematikada ham shunday. Ba’zan misolda ikkita amal bo‘ladi va qaysi birini avval bajarish kerakligini bilishimiz kerak. Buning uchun maxsus belgi bor — <b>qavslar ( )</b>. Qavslar xuddi ikki qo‘l kabi sonlarni quchoqlab olib: «Avval bizni hisobla!» deydi.', 'В математике так же. Иногда в примере два действия, и нужно знать, какое выполнить первым. Для этого есть особый знак — <b>скобки ( )</b>. Скобки, как две руки, обнимают числа и говорят: «Сначала посчитай нас!»', 'Maths is the same. Sometimes an example has two operations and we need to know which one to do first. There is a special sign for this — <b>brackets ( )</b>. Like two arms, brackets hug the numbers and say: “Work us out first!”'),
      L('Bu mavzuda biz qavslarni o‘qishni, qavsli misollarni yechishni va qavslar javobni qanday o‘zgartirishini o‘rganamiz.', 'В этой теме мы научимся читать скобки, решать примеры со скобками и узнаем, как скобки меняют ответ.', 'In this topic we will learn to read brackets, solve examples with brackets and see how brackets change the answer.')
    ] },
    { kind: 'def', h: L('Qavs nima?', 'Что такое скобки?', 'What are brackets?'), p: [
      L('<b>Qavslar</b> — bu ikki yoy shaklidagi belgi: ochiluvchi qavs «(» va yopiluvchi qavs «)». Ular har doim juft bo‘lib keladi. Ularning ichidagi amal birinchi bajariladi.', '<b>Скобки</b> — это знак из двух дужек: открывающая скобка «(» и закрывающая «)». Они всегда идут парой. Действие внутри них выполняется первым.', '<b>Brackets</b> are a sign made of two curves: an opening bracket “(” and a closing bracket “)”. They always come in pairs. The operation inside them is done first.'),
      L('<b>Ifoda</b> — sonlar va amal belgilaridan iborat yozuv, masalan 10 − (3 + 2). Qavsli ifoda shunday o‘qiladi: «o‘ndan uch va ikkining yig‘indisini ayirish».', '<b>Выражение</b> — запись из чисел и знаков действий, например 10 − (3 + 2). Выражение со скобками читается так: «из десяти вычесть сумму трёх и двух».', 'An <b>expression</b> is a line of numbers and operation signs, such as 10 − (3 + 2). An expression with brackets is read like this: “ten minus the sum of three and two”.')
    ], list: [
      L('(3 + 2) — «uch va ikkining yig‘indisi».', '(3 + 2) — «сумма трёх и двух».', '(3 + 2) — “the sum of three and two”.'),
      L('(9 − 4) — «to‘qqiz va to‘rtning ayirmasi».', '(9 − 4) — «разность девяти и четырёх».', '(9 − 4) — “the difference of nine and four”.'),
      L('12 − (4 + 3) — «o‘n ikkidan to‘rt va uchning yig‘indisini ayirish».', '12 − (4 + 3) — «из двенадцати вычесть сумму четырёх и трёх».', '12 − (4 + 3) — “twelve minus the sum of four and three”.')
    ], after: [
      L('Agar qavs bo‘lmasa, amallarni oddiy kitob o‘qigandek — chapdan o‘ngga bajaramiz.', 'Если скобок нет, действия выполняем как при чтении книги — слева направо.', 'If there are no brackets, we do the operations the way we read a book — from left to right.')
    ] },
    { kind: 'history', h: L('Qavslar tarixi', 'История скобок', 'The story of brackets'), p: [
      L('Qadimgi matematiklar qavs ishlatmagan. Ular amallar tartibini so‘z bilan yozishgan: «avval uchni ikkiga qo‘sh, keyin natijani o‘ndan ayir». Bu juda uzun bo‘lgan! <b>Al-Xorazmiy</b> ham o‘z kitobida masalalarni so‘zlar bilan, bosqichma-bosqich tushuntirgan.', 'Древние математики скобками не пользовались. Они записывали порядок действий словами: «сначала прибавь к трём два, потом результат вычти из десяти». Это было очень длинно! <b>Аль-Хорезми</b> тоже объяснял задачи в своей книге словами, шаг за шагом.', 'Ancient mathematicians did not use brackets. They wrote the order of operations in words: “first add two to three, then take the result away from ten”. It was very long! <b>Al-Khwarizmi</b> also explained problems in his book in words, step by step.'),
      L('Matematikada qavslar taxminan 500 yil oldin, Yevropada paydo bo‘lgan. Birinchi bo‘lib italiyalik olimlar 1500-yillarda ulardan foydalanishgan. Ular hammaga yoqib qoldi, chunki yozuvni qisqa va tushunarli qildi.', 'Скобки в математике появились примерно 500 лет назад в Европе. Первыми ими стали пользоваться итальянские учёные в 1500-х годах. Скобки всем понравились, потому что сделали запись короткой и понятной.', 'Brackets appeared in maths about 500 years ago in Europe. Italian scholars began using them in the 1500s. Everyone liked them because they made writing short and clear.'),
      L('Bugun qavslar nafaqat matematikada, balki kompyuter dasturlarida ham ishlatiladi. Kalkulyator ham qavslarni tushunadi — 10 − (3 + 2) ni yozsangiz, u avval qavs ichini hisoblaydi.', 'Сегодня скобки используются не только в математике, но и в компьютерных программах. Калькулятор тоже понимает скобки — если набрать 10 − (3 + 2), он сначала посчитает то, что в скобках.', 'Today brackets are used not only in maths but in computer programs too. A calculator understands brackets — type 10 − (3 + 2) and it works out the inside first.')
    ] },
    { kind: 'rule', h: L('Qavs qoidasi', 'Правило скобок', 'The bracket rule'), p: [
      L('<b>Ifodada qavs bo‘lsa, avval qavs ichidagi amal bajariladi, keyin qolgan amal.</b>', '<b>Если в выражении есть скобки, сначала выполняют действие в скобках, потом остальное.</b>', '<b>If an expression has brackets, do the operation inside the brackets first, then the rest.</b>'),
      L('Qavslar javobni o‘zgartirishi mumkin! Ikkita misolni solishtiring:', 'Скобки могут изменить ответ! Сравни два примера:', 'Brackets can change the answer! Compare two examples:')
    ], list: [
      L('10 − (3 + 2) = 10 − 5 = <b>5</b>. Avval 3 + 2 = 5, keyin 10 − 5.', '10 − (3 + 2) = 10 − 5 = <b>5</b>. Сначала 3 + 2 = 5, потом 10 − 5.', '10 − (3 + 2) = 10 − 5 = <b>5</b>. First 3 + 2 = 5, then 10 − 5.'),
      L('(10 − 3) + 2 = 7 + 2 = <b>9</b>. Avval 10 − 3 = 7, keyin 7 + 2.', '(10 − 3) + 2 = 7 + 2 = <b>9</b>. Сначала 10 − 3 = 7, потом 7 + 2.', '(10 − 3) + 2 = 7 + 2 = <b>9</b>. First 10 − 3 = 7, then 7 + 2.')
    ], after: [
      L('Sonlar bir xil — 10, 3 va 2, amallar ham bir xil — ayirish va qo‘shish. Lekin javoblar har xil: 5 va 9! Hamma farq qavslarning qayerda turganida.', 'Числа одинаковые — 10, 3 и 2, действия тоже одинаковые — вычитание и сложение. А ответы разные: 5 и 9! Вся разница в том, где стоят скобки.', 'The numbers are the same — 10, 3 and 2 — and so are the operations, subtraction and addition. But the answers are different: 5 and 9! The whole difference is where the brackets are.'),
      L('Faqat qo‘shish bo‘lsa, qavslar javobni o‘zgartirmaydi: (2 + 3) + 4 = 9 va 2 + (3 + 4) = 9.', 'Если есть только сложение, скобки ответ не меняют: (2 + 3) + 4 = 9 и 2 + (3 + 4) = 9.', 'If there is only addition, brackets do not change the answer: (2 + 3) + 4 = 9 and 2 + (3 + 4) = 9.')
    ] },
    { kind: 'steps', h: L('Qadamma-qadam: qavsli misolni yechamiz', 'Шаг за шагом: решаем пример со скобками', 'Step by step: solving with brackets'), p: [
      L('15 − (4 + 6) misolini birga yechamiz:', 'Решим вместе пример 15 − (4 + 6):', 'Let’s solve 15 − (4 + 6) together:')
    ], list: [
      L('1-qadam. Qavslarni toping. Ular ichida nima bor? 4 + 6.', 'Шаг 1. Найди скобки. Что в них? 4 + 6.', 'Step 1. Find the brackets. What is inside? 4 + 6.'),
      L('2-qadam. Qavs ichini hisoblang: 4 + 6 = 10. Qavs ostiga kichkina qilib 10 deb yozib qo‘ying.', 'Шаг 2. Посчитай то, что в скобках: 4 + 6 = 10. Подпиши под скобками маленькое 10.', 'Step 2. Work out the inside: 4 + 6 = 10. Write a small 10 under the brackets.'),
      L('3-qadam. Misolni qayta yozing: 15 − 10.', 'Шаг 3. Перепиши пример: 15 − 10.', 'Step 3. Rewrite the example: 15 − 10.'),
      L('4-qadam. Qolgan amalni bajaring: 15 − 10 = <b>5</b>.', 'Шаг 4. Выполни оставшееся действие: 15 − 10 = <b>5</b>.', 'Step 4. Do the remaining operation: 15 − 10 = <b>5</b>.')
    ], after: [
      L('Maslahat: amallar ustiga kichik raqamlar yozing — «1» birinchi amal ustiga, «2» ikkinchisi ustiga. Shunda hech qachon adashmaysiz.', 'Совет: пиши над действиями маленькие цифры — «1» над первым, «2» над вторым. Тогда никогда не запутаешься.', 'Tip: write small numbers over the operations — “1” over the first and “2” over the second. Then you will never get mixed up.')
    ] },
    { kind: 'example', h: L('Yechilgan namunalar', 'Разобранные примеры', 'Worked examples'), p: [
      L('Har bir misolda avval qavsni toping.', 'В каждом примере сначала найди скобки.', 'In each example, find the brackets first.')
    ], ex: [
      { q: '12 − (4 + 3) = ?', s: L('Qavs ichi: 4 + 3 = 7. Keyin 12 − 7 = <b>5</b>.', 'В скобках: 4 + 3 = 7. Потом 12 − 7 = <b>5</b>.', 'Inside: 4 + 3 = 7. Then 12 − 7 = <b>5</b>.') },
      { q: '(9 − 4) + 5 = ?', s: L('Qavs ichi: 9 − 4 = 5. Keyin 5 + 5 = <b>10</b>.', 'В скобках: 9 − 4 = 5. Потом 5 + 5 = <b>10</b>.', 'Inside: 9 − 4 = 5. Then 5 + 5 = <b>10</b>.') },
      { q: '18 − (10 − 2) = ?', s: L('Qavs ichi: 10 − 2 = 8. Keyin 18 − 8 = <b>10</b>. Diqqat: qavssiz 18 − 10 − 2 = 6 bo‘lardi!', 'В скобках: 10 − 2 = 8. Потом 18 − 8 = <b>10</b>. Внимание: без скобок 18 − 10 − 2 = 6!', 'Inside: 10 − 2 = 8. Then 18 − 8 = <b>10</b>. Careful: without brackets 18 − 10 − 2 would be 6!') },
      { q: '(2 + 3) + 10 = ?', s: L('Qavs ichi: 2 + 3 = 5. Keyin 5 + 10 = <b>15</b>.', 'В скобках: 2 + 3 = 5. Потом 5 + 10 = <b>15</b>.', 'Inside: 2 + 3 = 5. Then 5 + 10 = <b>15</b>.') },
      { q: L('Nodirada 14 ta qalam bor edi. U 2 tasini ukasiga, 3 tasini singlisiga berdi. Nechta qalam qoldi? Bitta ifoda tuzing.', 'У Нодиры было 14 карандашей. 2 она отдала брату, 3 — сестре. Сколько осталось? Составь одно выражение.', 'Nodira had 14 pencils. She gave 2 to her brother and 3 to her sister. How many are left? Write one expression.'), s: L('Jami berilgan qalamlar: (2 + 3). Ifoda: 14 − (2 + 3) = 14 − 5 = <b>9</b>. Javob: 9 ta qalam qoldi.', 'Всего отдала: (2 + 3). Выражение: 14 − (2 + 3) = 14 − 5 = <b>9</b>. Ответ: осталось 9 карандашей.', 'Pencils given away in total: (2 + 3). Expression: 14 − (2 + 3) = 14 − 5 = <b>9</b>. Answer: 9 pencils are left.') }
    ] },
    { kind: 'table', h: L('Qavslar javobni o‘zgartiradi', 'Скобки меняют ответ', 'Brackets change the answer'), p: [
      L('Bir xil sonlar, lekin qavslar boshqa joyda. Javoblarni solishtiring:', 'Одинаковые числа, но скобки в разных местах. Сравни ответы:', 'The same numbers, but the brackets are in different places. Compare the answers:')
    ], table: { head: [L('Ifoda', 'Выражение', 'Expression'), L('1-amal', '1-е действие', '1st step'), L('2-amal', '2-е действие', '2nd step'), L('Javob', 'Ответ', 'Answer')], rows: [
      ['10 − (3 + 2)', '3 + 2 = 5', '10 − 5', '5'],
      ['(10 − 3) + 2', '10 − 3 = 7', '7 + 2', '9'],
      ['16 − (6 − 2)', '6 − 2 = 4', '16 − 4', '12'],
      ['(16 − 6) − 2', '16 − 6 = 10', '10 − 2', '8'],
      ['(4 + 5) + 6', '4 + 5 = 9', '9 + 6', '15'],
      ['4 + (5 + 6)', '5 + 6 = 11', '4 + 11', '15']
    ] }, after: [
      L('Oxirgi ikki qatorga qarang: faqat qo‘shish bo‘lganda javob bir xil — 15. Ayirish bo‘lganda esa qavslarga juda ehtiyot bo‘ling!', 'Посмотри на две последние строки: когда только сложение, ответ одинаковый — 15. А когда есть вычитание, будь очень внимателен к скобкам!', 'Look at the last two rows: with only addition the answer is the same — 15. But when there is subtraction, be very careful with brackets!')
    ] },
    { kind: 'mistake', h: L('Tipik xatolar', 'Типичные ошибки', 'Common mistakes'), p: [
      L('Qavsli misollarda ko‘p uchraydigan xatolar:', 'Частые ошибки в примерах со скобками:', 'Frequent mistakes with brackets:')
    ], list: [
      L('<b>Qavsni e’tiborsiz qoldirish.</b> 10 − (3 + 2) ni chapdan boshlab: 10 − 3 = 7, 7 + 2 = 9. Noto‘g‘ri! To‘g‘ri javob — 5.', '<b>Не замечать скобки.</b> Решать 10 − (3 + 2) слева: 10 − 3 = 7, 7 + 2 = 9. Неверно! Правильный ответ — 5.', '<b>Ignoring the brackets.</b> Doing 10 − (3 + 2) from the left: 10 − 3 = 7, 7 + 2 = 9. Wrong! The right answer is 5.'),
      L('<b>Qavs ichini hisoblab, keyin unutib qo‘yish.</b> 12 − (4 + 3): 4 + 3 = 7 ni topdi-yu, javob deb 7 ni yozdi. Hali ikkinchi amal bor: 12 − 7 = 5.', '<b>Посчитать скобки и забыть про остальное.</b> 12 − (4 + 3): нашли 4 + 3 = 7 и записали 7 в ответ. А ведь есть ещё второе действие: 12 − 7 = 5.', '<b>Working out the brackets and stopping.</b> 12 − (4 + 3): found 4 + 3 = 7 and wrote 7 as the answer. There is still a second step: 12 − 7 = 5.'),
      L('<b>Qavsni yopishni unutish.</b> Yozganda «(» ochilsa, albatta «)» bilan yopilishi kerak.', '<b>Забывать закрыть скобку.</b> Если открыли «(», обязательно закройте «)».', '<b>Forgetting to close the bracket.</b> If you open “(”, you must close it with “)”.'),
      L('<b>Raqamni qayta yozishda o‘zgartirib yuborish.</b> 15 − (4 + 6) → 15 − 10. Birinchi sonni ko‘chirishda ehtiyot bo‘ling.', '<b>Переписывать число с ошибкой.</b> 15 − (4 + 6) → 15 − 10. Будь внимателен, переписывая первое число.', '<b>Copying a number wrongly.</b> 15 − (4 + 6) → 15 − 10. Be careful when you copy the first number.')
    ] },
    { kind: 'life', h: L('Hayotda qayerda kerak?', 'Где это нужно в жизни?', 'Where is this used in life?'), p: [
      L('<b>Do‘konda.</b> Sizda 20 ming so‘m bor. Siz 5 ming so‘mlik non va 3 ming so‘mlik sut oldingiz. Qancha pul qoldi? 20 − (5 + 3) = 20 − 8 = 12 ming so‘m. Avval xaridlarni qo‘shamiz — bu qavs!', '<b>В магазине.</b> У тебя 20 тысяч сумов. Ты купил хлеб за 5 тысяч и молоко за 3 тысячи. Сколько денег осталось? 20 − (5 + 3) = 20 − 8 = 12 тысяч. Сначала складываем покупки — это и есть скобки!', '<b>At the shop.</b> You have 20 thousand sum. You buy bread for 5 thousand and milk for 3 thousand. How much is left? 20 − (5 + 3) = 20 − 8 = 12 thousand. First we add up the shopping — that is the bracket!'),
      L('<b>Avtobusda.</b> Avtobusda 15 kishi bor edi. Bekatda 4 kishi tushdi, keyin 2 kishi chiqdi. (15 − 4) + 2 = 11 + 2 = 13 kishi.', '<b>В автобусе.</b> В автобусе было 15 человек. На остановке 4 вышли, потом 2 вошли. (15 − 4) + 2 = 11 + 2 = 13 человек.', '<b>On the bus.</b> There were 15 people on the bus. At a stop 4 got off, then 2 got on. (15 − 4) + 2 = 11 + 2 = 13 people.'),
      L('<b>Oshxonada.</b> Retseptlarda ham tartib muhim: avval xamir qorish, keyin pishirish. Matematikada bu tartibni qavslar ko‘rsatadi.', '<b>На кухне.</b> В рецептах тоже важен порядок: сначала замесить тесто, потом печь. В математике этот порядок показывают скобки.', '<b>In the kitchen.</b> Order matters in recipes too: first knead the dough, then bake it. In maths, brackets show that order.'),
      L('<b>Kompyuterda.</b> Dasturchilar har kuni qavslardan foydalanadi. Siz o‘ynaydigan o‘yinlar ham qavsli hisob-kitoblar bilan ishlaydi!', '<b>В компьютере.</b> Программисты каждый день пользуются скобками. Игры, в которые ты играешь, тоже работают на вычислениях со скобками!', '<b>On the computer.</b> Programmers use brackets every day. The games you play also run on calculations with brackets!')
    ] },
    { kind: 'fact', h: L('Qiziqarli faktlar', 'Интересные факты', 'Fun facts'), list: [
      L('Qavslarning turlari ko‘p: oddiy ( ), kvadrat [ ] va figurali { }. Katta sinflarda siz ularning hammasi bilan tanishasiz.', 'Скобки бывают разные: круглые ( ), квадратные [ ] и фигурные { }. В старших классах ты познакомишься со всеми.', 'There are many kinds of brackets: round ( ), square [ ] and curly { }. In higher grades you will meet them all.'),
      L('«Qavs» so‘zi arab tilidan kelgan bo‘lib, «yoy» degan ma’noni bildiradi. Haqiqatan ham, qavs kamon yoyiga o‘xshaydi!', 'Узбекское слово «qavs» пришло из арабского и означает «дуга». И правда, скобка похожа на дугу лука!', 'The Uzbek word for bracket, “qavs”, comes from Arabic and means “arc” or “bow”. And indeed, a bracket looks like an archer’s bow!'),
      L('Qavslar matnda ham ishlatiladi — qo‘shimcha gapni ajratish uchun (xuddi mana shunday).', 'Скобки используются и в тексте — чтобы выделить дополнительную мысль (вот так).', 'Brackets are used in writing too — to set apart an extra thought (just like this).'),
      L('Smaylik :) ham aslida ikki nuqta va yopiluvchi qavsdan iborat!', 'Смайлик :) на самом деле состоит из двоеточия и закрывающей скобки!', 'The smiley :) is actually just a colon and a closing bracket!')
    ] },
    { kind: 'practice', h: L('O‘ylab ko‘ring', 'Подумай', 'Think about it'), p: [
      L('Har doim so‘rang: qavs qayerda? Avval uni hisoblayman!', 'Всегда спрашивай: где скобки? Сначала посчитаю их!', 'Always ask: where are the brackets? I work them out first!')
    ], list: [
      L('Hisoblang: 13 − (5 + 3).', 'Вычисли: 13 − (5 + 3).', 'Work out: 13 − (5 + 3).'),
      L('Hisoblang: (13 − 5) + 3. Javob birinchisidan nega farq qiladi?', 'Вычисли: (13 − 5) + 3. Почему ответ отличается от первого?', 'Work out: (13 − 5) + 3. Why is the answer different from the first?'),
      L('Qavsni shunday qo‘yingki, javob 4 bo‘lsin: 10 − 4 + 2.', 'Поставь скобки так, чтобы получилось 4: 10 − 4 + 2.', 'Put in brackets so the answer is 4: 10 − 4 + 2.'),
      L('O‘zingiz qavsli masala o‘ylab toping: oilangiz, o‘yinchoqlaringiz yoki mevalar haqida.', 'Придумай сам задачу со скобками: о семье, игрушках или фруктах.', 'Make up your own bracket problem: about your family, toys or fruit.')
    ], after: [
      L('Javoblar: 1) 13 − 8 = 5; 2) 8 + 3 = 11 — qavs boshqa joyda, shuning uchun amallar tartibi o‘zgardi; 3) 10 − (4 + 2) = 4.', 'Ответы: 1) 13 − 8 = 5; 2) 8 + 3 = 11 — скобки в другом месте, поэтому изменился порядок действий; 3) 10 − (4 + 2) = 4.', 'Answers: 1) 13 − 8 = 5; 2) 8 + 3 = 11 — the brackets moved, so the order of operations changed; 3) 10 − (4 + 2) = 4.')
    ] },
    { kind: 'summary', h: L('Xulosa', 'Итог', 'Summary'), list: [
      L('Qavslar ( ) — «avval meni hisobla!» degan belgi.', 'Скобки ( ) — знак «сначала посчитай меня!»', 'Brackets ( ) are a sign that says “work me out first!”'),
      L('Qavs bo‘lsa — <b>avval qavs ichidagi amal</b>, keyin qolgani.', 'Если есть скобки — <b>сначала действие в скобках</b>, потом остальное.', 'With brackets — <b>do the inside first</b>, then the rest.'),
      L('Qavs bo‘lmasa — chapdan o‘ngga hisoblaymiz.', 'Если скобок нет — считаем слева направо.', 'Without brackets — work from left to right.'),
      L('Qavslar javobni o‘zgartirishi mumkin: 10 − (3 + 2) = 5, (10 − 3) + 2 = 9.', 'Скобки могут изменить ответ: 10 − (3 + 2) = 5, (10 − 3) + 2 = 9.', 'Brackets can change the answer: 10 − (3 + 2) = 5, (10 − 3) + 2 = 9.'),
      L('Faqat qo‘shishda qavslar javobni o‘zgartirmaydi.', 'При одном сложении скобки ответ не меняют.', 'With only addition, brackets do not change the answer.'),
      L('Qavslar doim juft bo‘ladi: ochildimi — yopilishi shart.', 'Скобки всегда парные: открыл — закрой.', 'Brackets always come in pairs: if you open one, close it.')
    ] }
  ] });
})(this);
(function (root) {
  'use strict';
  var L = root.NMCurriculum.H.L, T = root.NMTheory, P = '1-2';

  // ---------- t5. Bir xonali sonlarni o'nlikdan o'tib qo'shish ----------
  T.add(P, 't5', { sections: [
    { kind: 'intro', h: L('O‘nlik ko‘prigidan o‘tamiz', 'Переходим через мост десятка', 'Crossing the bridge of ten'), p: [
      L('Zarina tuxum qutisini to‘ldirmoqda. Qutida 10 ta joy bor. Unda allaqachon 8 ta tuxum turibdi. Onasi yana 5 ta tuxum berdi. Zarina avval qutini to‘ldirdi: 2 ta tuxum qo‘ydi — quti to‘ldi! Qo‘lida yana 3 ta tuxum qoldi. «Bitta to‘la quti va 3 ta tuxum — bu 13!» — dedi Zarina xursand bo‘lib.', 'Зарина заполняет коробку для яиц. В коробке 10 мест. Там уже лежат 8 яиц. Мама дала ещё 5. Зарина сначала заполнила коробку: положила 2 яйца — коробка полная! В руках осталось ещё 3 яйца. «Одна полная коробка и 3 яйца — это 13!» — радостно сказала Зарина.', 'Zarina is filling an egg box. The box has 10 places. There are already 8 eggs in it. Mum gives her 5 more. First Zarina fills the box: she puts in 2 eggs — the box is full! She still has 3 eggs in her hand. “One full box and 3 eggs — that makes 13!” said Zarina happily.'),
      L('Zarina hozirgina juda aqlli usuldan foydalandi. Bu usulni <b>«10 gacha to‘ldirish»</b> yoki <b>«o‘nlikdan o‘tib qo‘shish»</b> deyishadi. 10 — bu xuddi ko‘prik: avval unga chiqamiz, keyin narigi tomonga o‘tamiz.', 'Зарина только что применила очень умный способ. Его называют <b>«дополнить до 10»</b> или <b>«сложение с переходом через десяток»</b>. Число 10 — как мост: сначала поднимаемся на него, потом переходим на другую сторону.', 'Zarina has just used a very clever method. It is called <b>“making 10”</b> or <b>“adding across ten”</b>. The number 10 is like a bridge: first we climb onto it, then we cross to the other side.'),
      L('Bu mavzuda biz 8 + 5, 7 + 6, 9 + 4 kabi misollarni barmoq bilan sanamasdan, tez va oson yechishni o‘rganamiz.', 'В этой теме мы научимся решать примеры вроде 8 + 5, 7 + 6, 9 + 4 быстро и легко, не считая на пальцах.', 'In this topic we will learn to solve sums like 8 + 5, 7 + 6 and 9 + 4 quickly and easily, without counting on our fingers.')
    ] },
    { kind: 'def', h: L('O‘nlikdan o‘tish nima?', 'Что такое переход через десяток?', 'What is crossing ten?'), p: [
      L('Ikki bir xonali sonni qo‘shganda yig‘indi 10 dan katta chiqsa, biz <b>o‘nlikdan o‘tdik</b> deymiz. Masalan, 8 + 5 = 13: javob 10 dan oshib ketdi.', 'Если при сложении двух однозначных чисел сумма получается больше 10, мы говорим, что <b>перешли через десяток</b>. Например, 8 + 5 = 13: ответ больше 10.', 'When we add two one-digit numbers and the sum is bigger than 10, we say we have <b>crossed ten</b>. For example, 8 + 5 = 13: the answer is past 10.'),
      L('Buning uchun ikkita muhim bilim kerak:', 'Для этого нужны два важных умения:', 'For this you need two important skills:')
    ], list: [
      L('<b>10 ning tarkibi</b> — 10 ni qaysi ikki son hosil qiladi: 1 + 9, 2 + 8, 3 + 7, 4 + 6, 5 + 5.', '<b>Состав числа 10</b> — из каких двух чисел получается 10: 1 + 9, 2 + 8, 3 + 7, 4 + 6, 5 + 5.', '<b>The pairs that make 10</b>: 1 + 9, 2 + 8, 3 + 7, 4 + 6, 5 + 5.'),
      L('<b>Sonning tarkibi</b> — sonni ikki bo‘lakka ajratish: 5 = 2 + 3, 6 = 4 + 2, 7 = 1 + 6.', '<b>Состав числа</b> — умение разложить число на две части: 5 = 2 + 3, 6 = 4 + 2, 7 = 1 + 6.', '<b>Splitting a number</b> into two parts: 5 = 2 + 3, 6 = 4 + 2, 7 = 1 + 6.'),
      L('<b>10 + birliklar</b> — 10 ga bir xonali sonni qo‘shish: 10 + 3 = 13, 10 + 6 = 16.', '<b>10 + единицы</b> — прибавить к 10 однозначное число: 10 + 3 = 13, 10 + 6 = 16.', '<b>10 + ones</b> — adding a one-digit number to 10: 10 + 3 = 13, 10 + 6 = 16.')
    ], after: [
      L('Agar shu uch narsani bilsangiz — o‘nlikdan o‘tib qo‘shish siz uchun o‘yinchoq bo‘ladi!', 'Если ты знаешь эти три вещи — сложение с переходом станет для тебя игрой!', 'If you know these three things, adding across ten will be child’s play!')
    ] },
    { kind: 'history', h: L('Cho‘tlar va barmoqlar', 'Счёты и пальцы', 'Abacus and fingers'), p: [
      L('Qadimgi savdogarlar ko‘p qo‘shishga majbur bo‘lishgan. Ular <b>cho‘t</b> (abak) ishlatishgan — simlarga terilgan munchoqlar. Har bir simda 10 ta munchoq bor. Sim to‘lsa, keyingi simga bitta munchoq o‘tkaziladi. Bu aynan «o‘nlikdan o‘tish»!', 'Древним купцам приходилось много складывать. Они пользовались <b>счётами</b> (абаком) — бусинами на проволоке. На каждой проволоке 10 бусин. Когда проволока заполнялась, на следующую передвигали одну бусину. Это и есть «переход через десяток»!', 'Ancient merchants had to add a lot. They used an <b>abacus</b> — beads on wires. Each wire held 10 beads. When a wire was full, one bead was moved on the next wire. That is exactly “crossing ten”!'),
      L('Qadimgi Xitoy va Rimda abaklar 2 ming yildan ko‘proq vaqt oldin ishlatilgan. Buxoro va Samarqand bozorlarida ham savdogarlar cho‘t bilan tez hisoblashgan. Hozir ham ba’zi do‘konlarda yog‘och cho‘tlarni ko‘rish mumkin.', 'В Древнем Китае и Риме абак применяли больше 2 тысяч лет назад. На базарах Бухары и Самарканда купцы тоже быстро считали на счётах. И сейчас кое-где в магазинах можно увидеть деревянные счёты.', 'In ancient China and Rome the abacus was used more than 2 000 years ago. Merchants in the bazaars of Bukhara and Samarkand also counted quickly on an abacus. Even today you can sometimes see a wooden abacus in a shop.'),
      L('<b>Al-Xorazmiy</b> o‘z kitobida hind raqamlari bilan qo‘shishni tushuntirib bergan: agar birliklar 10 dan oshsa, bitta o‘nlikni keyingi xonaga «ko‘chiramiz». Bu qoidadan hozir ham butun dunyo maktablarida foydalaniladi.', '<b>Аль-Хорезми</b> в своей книге объяснил сложение индийскими цифрами: если единиц больше 10, один десяток «переносим» в следующий разряд. Этим правилом и сейчас пользуются школы всего мира.', '<b>Al-Khwarizmi</b> explained in his book how to add with Indian digits: if the ones go past 10, we “carry” one ten to the next place. Schools all over the world still use this rule today.')
    ] },
    { kind: 'rule', h: L('10 gacha to‘ldirish qoidasi', 'Правило «дополни до 10»', 'The make-10 rule'), p: [
      L('Bir xonali sonlarni o‘nlikdan o‘tib qo‘shish uchun:', 'Чтобы сложить однозначные числа с переходом через десяток:', 'To add one-digit numbers across ten:'),
      L('<b>1) birinchi sonni 10 gacha to‘ldiramiz;<br>2) ikkinchi sondan qolganini 10 ga qo‘shamiz.</b>', '<b>1) дополняем первое число до 10;<br>2) остаток второго числа прибавляем к 10.</b>', '<b>1) make the first number up to 10;<br>2) add what is left of the second number to 10.</b>'),
      L('Masalan: 8 + 5 = 8 + 2 + 3 = 10 + 3 = 13.', 'Например: 8 + 5 = 8 + 2 + 3 = 10 + 3 = 13.', 'For example: 8 + 5 = 8 + 2 + 3 = 10 + 3 = 13.')
    ], list: [
      L('9 ni to‘ldirish uchun 1 kerak.', 'Чтобы дополнить 9, нужно 1.', 'To make 9 up to 10 you need 1.'),
      L('8 ni to‘ldirish uchun 2 kerak.', 'Чтобы дополнить 8, нужно 2.', 'To make 8 up to 10 you need 2.'),
      L('7 ni to‘ldirish uchun 3 kerak.', 'Чтобы дополнить 7, нужно 3.', 'To make 7 up to 10 you need 3.'),
      L('6 ni to‘ldirish uchun 4 kerak.', 'Чтобы дополнить 6, нужно 4.', 'To make 6 up to 10 you need 4.')
    ], after: [
      L('Maslahat: kattaroq sonni to‘ldirish osonroq. 4 + 9 ni 9 + 4 deb hisoblang: 9 + 1 + 3 = 13. Qo‘shiluvchilarning o‘rnini almashtirsak, yig‘indi o‘zgarmaydi!', 'Совет: дополнять большее число легче. Вместо 4 + 9 посчитай 9 + 4: 9 + 1 + 3 = 13. От перестановки слагаемых сумма не меняется!', 'Tip: it is easier to make the bigger number up to 10. Instead of 4 + 9 work out 9 + 4: 9 + 1 + 3 = 13. Swapping the numbers does not change the sum!')
    ] },
    { kind: 'steps', h: L('Qadamma-qadam: 7 + 6', 'Шаг за шагом: 7 + 6', 'Step by step: 7 + 6'), p: [
      L('Keling, 7 + 6 ni birga yechamiz.', 'Давай решим 7 + 6 вместе.', 'Let’s solve 7 + 6 together.')
    ], list: [
      L('1-qadam. 7 ni 10 gacha to‘ldirish uchun nechta kerak? 7 + 3 = 10, demak <b>3</b>.', 'Шаг 1. Сколько нужно, чтобы дополнить 7 до 10? 7 + 3 = 10, значит <b>3</b>.', 'Step 1. How many make 7 up to 10? 7 + 3 = 10, so <b>3</b>.'),
      L('2-qadam. 6 ni ikki bo‘lakka ajratamiz: 3 va qolgani. 6 = 3 + <b>3</b>.', 'Шаг 2. Раскладываем 6 на две части: 3 и остаток. 6 = 3 + <b>3</b>.', 'Step 2. Split 6 into two parts: 3 and the rest. 6 = 3 + <b>3</b>.'),
      L('3-qadam. 7 + 3 = 10. Ko‘prikka chiqdik!', 'Шаг 3. 7 + 3 = 10. Мы на мосту!', 'Step 3. 7 + 3 = 10. We are on the bridge!'),
      L('4-qadam. 10 ga qolgan 3 ni qo‘shamiz: 10 + 3 = <b>13</b>.', 'Шаг 4. Прибавляем к 10 оставшиеся 3: 10 + 3 = <b>13</b>.', 'Step 4. Add the remaining 3 to 10: 10 + 3 = <b>13</b>.')
    ], after: [
      L('Qisqa yozuv: 7 + 6 = 7 + 3 + 3 = 10 + 3 = 13. Biroz mashq qilsangiz, bularni ichingizda, bir zumda bajarasiz.', 'Короткая запись: 7 + 6 = 7 + 3 + 3 = 10 + 3 = 13. Немного потренируйся — и будешь делать это в уме за секунду.', 'Short form: 7 + 6 = 7 + 3 + 3 = 10 + 3 = 13. With a little practice you will do it in your head in a flash.')
    ] },
    { kind: 'example', h: L('Yechilgan namunalar', 'Разобранные примеры', 'Worked examples'), p: [
      L('Har birida avval «10 gacha nechta yetmaydi?» deb so‘rang.', 'В каждом сначала спроси: «Сколько не хватает до 10?»', 'In each one, first ask: “How many are missing to make 10?”')
    ], ex: [
      { q: L('Hisoblang: 9 + 4', 'Вычисли: 9 + 4', 'Work out: 9 + 4'), s: L('9 ga 1 yetmaydi. 4 = 1 + 3. 9 + 1 = 10, 10 + 3 = <b>13</b>.', 'До 10 не хватает 1. 4 = 1 + 3. 9 + 1 = 10, 10 + 3 = <b>13</b>.', '9 needs 1 more. 4 = 1 + 3. 9 + 1 = 10, 10 + 3 = <b>13</b>.') },
      { q: L('Hisoblang: 8 + 6', 'Вычисли: 8 + 6', 'Work out: 8 + 6'), s: L('8 ga 2 yetmaydi. 6 = 2 + 4. 8 + 2 = 10, 10 + 4 = <b>14</b>.', 'До 10 не хватает 2. 6 = 2 + 4. 8 + 2 = 10, 10 + 4 = <b>14</b>.', '8 needs 2 more. 6 = 2 + 4. 8 + 2 = 10, 10 + 4 = <b>14</b>.') },
      { q: L('Hisoblang: 6 + 7', 'Вычисли: 6 + 7', 'Work out: 6 + 7'), s: L('Kattarog‘ini to‘ldiramiz: 7 + 6. 7 ga 3 yetmaydi. 6 = 3 + 3. 10 + 3 = <b>13</b>.', 'Дополняем большее: 7 + 6. До 10 не хватает 3. 6 = 3 + 3. 10 + 3 = <b>13</b>.', 'Make the bigger one up: 7 + 6. 7 needs 3. 6 = 3 + 3. 10 + 3 = <b>13</b>.') },
      { q: L('Hisoblang: 5 + 8', 'Вычисли: 5 + 8', 'Work out: 5 + 8'), s: L('8 + 5 deb olamiz. 8 ga 2 yetmaydi. 5 = 2 + 3. 10 + 3 = <b>13</b>.', 'Берём 8 + 5. До 10 не хватает 2. 5 = 2 + 3. 10 + 3 = <b>13</b>.', 'Take 8 + 5. 8 needs 2. 5 = 2 + 3. 10 + 3 = <b>13</b>.') },
      { q: L('Savatda 9 ta olma bor edi. Bobom yana 7 ta olma soldi. Savatda nechta olma bo‘ldi?', 'В корзине было 9 яблок. Дедушка положил ещё 7. Сколько яблок стало в корзине?', 'A basket had 9 apples. Grandpa put in 7 more. How many apples are in the basket now?'), s: L('9 + 7. 9 ga 1 yetmaydi. 7 = 1 + 6. 10 + 6 = <b>16</b>. Javob: 16 ta olma.', '9 + 7. До 10 не хватает 1. 7 = 1 + 6. 10 + 6 = <b>16</b>. Ответ: 16 яблок.', '9 + 7. 9 needs 1. 7 = 1 + 6. 10 + 6 = <b>16</b>. Answer: 16 apples.') }
    ] },
    { kind: 'table', h: L('9 va 8 ni qo‘shish jadvali', 'Таблица прибавления к 9 и 8', 'Adding to 9 and 8'), p: [
      L('Jadvalga qarang va qonuniyatni toping: 9 ga qo‘shganda javob ikkinchi sondan bitta kam birlikka ega.', 'Посмотри на таблицу и найди закономерность: при прибавлении к 9 в ответе единиц на одну меньше, чем второе число.', 'Look at the table and find the pattern: when adding to 9, the answer has one fewer ones than the second number.')
    ], table: { head: [L('Misol', 'Пример', 'Sum'), L('To‘ldirish', 'Дополнение', 'Make 10'), L('Qolgan', 'Остаток', 'Left over'), L('Javob', 'Ответ', 'Answer')], rows: [
      ['9 + 2', '9 + 1', '1', '11'],
      ['9 + 5', '9 + 1', '4', '14'],
      ['9 + 8', '9 + 1', '7', '17'],
      ['8 + 3', '8 + 2', '1', '11'],
      ['8 + 7', '8 + 2', '5', '15'],
      ['8 + 9', '8 + 2', '7', '17']
    ] }, after: [
      L('Sir: 9 ga qo‘shish — bu 10 ga qo‘shib, keyin 1 ni ayirish bilan bir xil. 9 + 6 = 16 − 1 = 15. Sinab ko‘ring!', 'Секрет: прибавить 9 — то же самое, что прибавить 10 и отнять 1. 9 + 6 = 16 − 1 = 15. Попробуй!', 'Secret: adding 9 is the same as adding 10 and taking away 1. 9 + 6 = 16 − 1 = 15. Try it!')
    ] },
    { kind: 'mistake', h: L('Tipik xatolar', 'Типичные ошибки', 'Common mistakes'), p: [
      L('O‘nlikdan o‘tib qo‘shishda mana shunday xatolar uchraydi:', 'При сложении с переходом встречаются такие ошибки:', 'These mistakes happen when adding across ten:')
    ], list: [
      L('<b>Qolgan qismni unutish.</b> 8 + 5: 8 + 2 = 10 deb javobni 10 deb yozish. Yo‘q, yana 3 qolgan edi! Javob — 13.', '<b>Забывать остаток.</b> 8 + 5: 8 + 2 = 10 — и написать в ответ 10. Нет, оставалось ещё 3! Ответ — 13.', '<b>Forgetting the leftover.</b> 8 + 5: 8 + 2 = 10 and writing 10 as the answer. No, there were 3 more left! The answer is 13.'),
      L('<b>Noto‘g‘ri ajratish.</b> 7 + 5 da 5 ni 2 + 3 ga ajratish. 7 ga 3 kerak, demak 5 = 3 + 2. Javob 12.', '<b>Неверно разложить.</b> В 7 + 5 разложить 5 как 2 + 3. Для 7 нужно 3, значит 5 = 3 + 2. Ответ 12.', '<b>Splitting the wrong way.</b> In 7 + 5, splitting 5 as 2 + 3. 7 needs 3, so 5 = 3 + 2. Answer 12.'),
      L('<b>10 + 3 ni 103 deb yozish.</b> 10 + 3 — bu bir o‘nlik va uch birlik, ya’ni 13.', '<b>Писать 10 + 3 как 103.</b> 10 + 3 — это один десяток и три единицы, то есть 13.', '<b>Writing 10 + 3 as 103.</b> 10 + 3 is one ten and three ones, which is 13.'),
      L('<b>Barmoqlarda sanab adashish.</b> Uzoq sanash xatoga olib keladi. «10 gacha to‘ldirish» tezroq va ishonchliroq.', '<b>Сбиваться при счёте на пальцах.</b> Долгий счёт ведёт к ошибкам. «Дополнить до 10» — быстрее и надёжнее.', '<b>Losing track on your fingers.</b> Long counting leads to mistakes. “Making 10” is faster and more reliable.')
    ] },
    { kind: 'life', h: L('Hayotda qayerda kerak?', 'Где это нужно в жизни?', 'Where is this used in life?'), p: [
      L('<b>Oshxonada.</b> Onangiz idishga 8 ta pishiriq qo‘ydi, keyin yana 4 tasini pishirdi. Mehmonlarga nechta pishiriq bor? 8 + 4 = 8 + 2 + 2 = 12.', '<b>На кухне.</b> Мама положила на блюдо 8 пирожков, потом испекла ещё 4. Сколько пирожков для гостей? 8 + 4 = 8 + 2 + 2 = 12.', '<b>In the kitchen.</b> Mum put 8 pastries on a plate, then baked 4 more. How many pastries for the guests? 8 + 4 = 8 + 2 + 2 = 12.'),
      L('<b>Hovlida.</b> Tovuqlar 9 ta tuxum qo‘ydi, ertasiga yana 3 ta. Jami: 9 + 3 = 12 ta tuxum.', '<b>Во дворе.</b> Куры снесли 9 яиц, на следующий день ещё 3. Всего: 9 + 3 = 12 яиц.', '<b>In the yard.</b> The hens laid 9 eggs and 3 more the next day. Total: 9 + 3 = 12 eggs.'),
      L('<b>O‘yinda.</b> Birinchi raundda 7 ochko, ikkinchisida 8 ochko to‘pladingiz. Jami 15 ochko! Kompyuter o‘yinlarida ham ochkolar shunday qo‘shiladi.', '<b>В игре.</b> В первом раунде ты набрал 7 очков, во втором 8. Всего 15 очков! В компьютерных играх очки тоже складываются так.', '<b>In games.</b> You scored 7 points in round one and 8 in round two. That is 15 points! Computer games add up points the same way.'),
      L('<b>Yo‘lda.</b> Mashinada 9 daqiqa yurdingiz, piyoda yana 5 daqiqa. Yo‘lga 14 daqiqa ketdi.', '<b>В дороге.</b> Ты ехал на машине 9 минут и шёл пешком ещё 5. Дорога заняла 14 минут.', '<b>On the way.</b> You rode in the car for 9 minutes and walked for 5 more. The trip took 14 minutes.')
    ] },
    { kind: 'fact', h: L('Qiziqarli faktlar', 'Интересные факты', 'Fun facts'), list: [
      L('Yaponiyada bolalar «soroban» degan cho‘tda hisoblashni o‘rganadi. Tajribali bolalar cho‘tni ko‘z oldiga keltirib, ichida juda tez qo‘shadi — ba’zan kalkulyatorli odamdan ham tezroq!', 'В Японии дети учатся считать на счётах «соробан». Опытные ребята представляют счёты в уме и складывают очень быстро — иногда быстрее человека с калькулятором!', 'In Japan children learn to count on an abacus called a “soroban”. Skilled children picture the abacus in their heads and add very fast — sometimes faster than a person using a calculator!'),
      L('Sakkizoyoqning 8 ta oyog‘i, o‘rgimchakning ham 8 ta oyog‘i bor. Ikkalasini birga olsak: 8 + 8 = 16 ta oyoq!', 'У осьминога 8 щупалец, у паука тоже 8 ног. Вместе: 8 + 8 = 16!', 'An octopus has 8 arms and a spider has 8 legs. Together: 8 + 8 = 16!'),
      L('Kamalakda 7 ta rang bor. Ikkita kamalak — 7 + 7 = 14 ta rang chizig‘i! Ba’zan osmonda haqiqatan ham qo‘sh kamalak ko‘rinadi.', 'В радуге 7 цветов. Две радуги — 7 + 7 = 14 цветных полос! Иногда на небе и правда видна двойная радуга.', 'A rainbow has 7 colours. Two rainbows make 7 + 7 = 14 coloured stripes! Sometimes you really can see a double rainbow in the sky.'),
      L('Haftada 7 kun bor. Ikki hafta — 7 + 7 = 14 kun.', 'В неделе 7 дней. Две недели — 7 + 7 = 14 дней.', 'A week has 7 days. Two weeks are 7 + 7 = 14 days.')
    ] },
    { kind: 'practice', h: L('O‘ylab ko‘ring', 'Подумай', 'Think about it'), p: [
      L('Har bir misolda «10 ko‘prigi»dan foydalaning.', 'В каждом примере пользуйся «мостом через 10».', 'Use the “bridge of 10” in every sum.')
    ], list: [
      L('Hisoblang: 9 + 6, 8 + 8, 7 + 5.', 'Вычисли: 9 + 6, 8 + 8, 7 + 5.', 'Work out: 9 + 6, 8 + 8, 7 + 5.'),
      L('6 ga qanday sonni qo‘shsak, 10 dan o‘tamiz?', 'Какое число надо прибавить к 6, чтобы перейти через 10?', 'What number added to 6 takes us past 10?'),
      L('Qaysi biri katta: 8 + 5 mi yoki 9 + 3 mi?', 'Что больше: 8 + 5 или 9 + 3?', 'Which is bigger: 8 + 5 or 9 + 3?'),
      L('Uyda 2 ta qutiga o‘yinchoqlarni sanang va ularni «10 gacha to‘ldirish» usulida qo‘shing.', 'Дома сосчитай игрушки в двух коробках и сложи их способом «дополни до 10».', 'At home, count the toys in two boxes and add them using “make 10”.')
    ], after: [
      L('Javoblar: 1) 15, 16, 12; 2) 5, 6, 7, 8 yoki 9; 3) 8 + 5 = 13 katta, chunki 9 + 3 = 12.', 'Ответы: 1) 15, 16, 12; 2) 5, 6, 7, 8 или 9; 3) 8 + 5 = 13 больше, потому что 9 + 3 = 12.', 'Answers: 1) 15, 16, 12; 2) 5, 6, 7, 8 or 9; 3) 8 + 5 = 13 is bigger, because 9 + 3 = 12.')
    ] },
    { kind: 'summary', h: L('Xulosa', 'Итог', 'Summary'), list: [
      L('Yig‘indi 10 dan oshsa — biz <b>o‘nlikdan o‘tamiz</b>.', 'Если сумма больше 10 — мы <b>переходим через десяток</b>.', 'If the sum is more than 10, we <b>cross ten</b>.'),
      L('Avval birinchi sonni <b>10 gacha to‘ldiramiz</b>, keyin qolganini qo‘shamiz.', 'Сначала <b>дополняем первое число до 10</b>, потом прибавляем остаток.', 'First <b>make the first number up to 10</b>, then add the rest.'),
      L('8 + 5 = 8 + 2 + 3 = 10 + 3 = 13.', '8 + 5 = 8 + 2 + 3 = 10 + 3 = 13.', '8 + 5 = 8 + 2 + 3 = 10 + 3 = 13.'),
      L('10 ning tarkibini yod bilish kerak: 1 + 9, 2 + 8, 3 + 7, 4 + 6, 5 + 5.', 'Состав числа 10 нужно знать наизусть: 1 + 9, 2 + 8, 3 + 7, 4 + 6, 5 + 5.', 'Learn the pairs that make 10 by heart: 1 + 9, 2 + 8, 3 + 7, 4 + 6, 5 + 5.'),
      L('Kattaroq sonni to‘ldirish osonroq: o‘rinlarini almashtirsa bo‘ladi.', 'Дополнять большее число легче: слагаемые можно переставить.', 'It is easier to make the bigger number up to 10: you may swap the numbers.'),
      L('Qolgan qismni qo‘shishni unutmang!', 'Не забывай прибавить остаток!', 'Don’t forget to add the leftover!')
    ] }
  ] });

  // ---------- t6. Sonlarni ayirish. Bo'laklab ayirish ----------
  T.add(P, 't6', { sections: [
    { kind: 'intro', h: L('Zinadan pastga tushamiz', 'Спускаемся по лестнице', 'Going down the stairs'), p: [
      L('Bekzod 13-qavatda yashaydi. Bir kuni lift buzildi va u 5 qavat pastga — do‘stinikiga zinadan tushdi. U o‘yladi: «Avval 10-qavatgacha tushaman — bu 3 qavat. Keyin yana 2 qavat. 10 dan 2 ni ayirsam — 8. Demak, do‘stim 8-qavatda yashaydi!» Bekzod to‘g‘ri topdi.', 'Бекзод живёт на 13-м этаже. Однажды лифт сломался, и он спустился по лестнице на 5 этажей вниз — к другу. Он подумал: «Сначала спущусь до 10-го этажа — это 3 этажа. Потом ещё 2. 10 минус 2 — это 8. Значит, мой друг живёт на 8-м этаже!» Бекзод не ошибся.', 'Bekzod lives on the 13th floor. One day the lift broke, so he walked 5 floors down the stairs to his friend’s flat. He thought: “First I’ll go down to floor 10 — that is 3 floors. Then 2 more. 10 take away 2 is 8. So my friend lives on floor 8!” Bekzod was right.'),
      L('Bekzod 5 ni ikki bo‘lakka — 3 va 2 ga bo‘lib, ularni navbat bilan ayirdi. Bu usul <b>bo‘laklab ayirish</b> deyiladi. Bu mavzuda biz 13 − 5, 15 − 7, 12 − 4 kabi misollarni shu usulda yechishni o‘rganamiz.', 'Бекзод разделил 5 на две части — 3 и 2 — и вычел их по очереди. Этот способ называется <b>вычитание по частям</b>. В этой теме мы научимся решать так примеры вроде 13 − 5, 15 − 7, 12 − 4.', 'Bekzod split 5 into two parts — 3 and 2 — and took them away one after the other. This method is called <b>subtracting in parts</b>. In this topic we will learn to solve sums like 13 − 5, 15 − 7 and 12 − 4 this way.'),
      L('O‘tgan mavzuda biz 10 ko‘prigidan yuqoriga chiqqan edik. Endi esa xuddi shu ko‘prik orqali pastga tushamiz!', 'В прошлой теме мы поднимались через мост 10. А теперь по тому же мосту спустимся вниз!', 'In the last topic we climbed up over the bridge of 10. Now we will come back down over the same bridge!')
    ] },
    { kind: 'def', h: L('Ayirish va uning qismlari', 'Вычитание и его части', 'Subtraction and its parts'), p: [
      L('<b>Ayirish</b> — bir sondan bir qismini olib tashlash. 13 − 5 = 8 misolida:', '<b>Вычитание</b> — это когда от числа отнимают часть. В примере 13 − 5 = 8:', '<b>Subtraction</b> means taking part of a number away. In 13 − 5 = 8:')
    ], list: [
      L('<b>13</b> — kamayuvchi (bundan ayiramiz);', '<b>13</b> — уменьшаемое (из него вычитаем);', '<b>13</b> — the number we start with (we subtract from it);'),
      L('<b>5</b> — ayriluvchi (shuncha olib tashlaymiz);', '<b>5</b> — вычитаемое (столько отнимаем);', '<b>5</b> — the number we take away;'),
      L('<b>8</b> — ayirma (qolgani).', '<b>8</b> — разность (то, что осталось).', '<b>8</b> — the difference (what is left).')
    ], after: [
      L('<b>Bo‘laklab ayirish</b> — bu ayriluvchini ikkita qulay bo‘lakka bo‘lib, avval birini, keyin ikkinchisini ayirish. Birinchi bo‘lak shunday tanlanadiki, ayirgandan keyin roppa-rosa <b>10</b> qolsin.', '<b>Вычитание по частям</b> — это когда вычитаемое делят на две удобные части и вычитают сначала одну, потом другую. Первую часть выбирают так, чтобы после вычитания получилось ровно <b>10</b>.', '<b>Subtracting in parts</b> means splitting the number you take away into two handy parts and taking away first one, then the other. The first part is chosen so that exactly <b>10</b> is left.'),
      L('Nega aynan 10? Chunki 10 dan ayirish juda oson: 10 − 2 = 8, 10 − 4 = 6. Buni hammamiz yoddan bilamiz!', 'Почему именно 10? Потому что из 10 вычитать очень легко: 10 − 2 = 8, 10 − 4 = 6. Это мы все знаем наизусть!', 'Why exactly 10? Because subtracting from 10 is very easy: 10 − 2 = 8, 10 − 4 = 6. We all know these by heart!')
    ] },
    { kind: 'history', h: L('Ayirish tarixidan', 'Из истории вычитания', 'From the history of subtraction'), p: [
      L('Qadimgi Misrda ayirishni ko‘pincha qo‘shish orqali bajarishgan: «8 ga nechta qo‘shsam, 13 bo‘ladi?» deb so‘rashgan. Bu usul hozir ham bozorlarda qaytim berishda ishlatiladi.', 'В Древнем Египте вычитание часто выполняли через сложение: спрашивали «сколько надо прибавить к 8, чтобы получить 13?» Этот способ и сейчас используют на базаре, когда дают сдачу.', 'In Ancient Egypt subtraction was often done by adding: people asked “how many must I add to 8 to get 13?” This method is still used at markets when giving change.'),
      L('Minus belgisi (−) taxminan 500 yil oldin Germaniyada paydo bo‘lgan. Aytishlaricha, savdogarlar bochkalarga chiziq chizib, unda nechta mahsulot kam ekanini belgilashgan.', 'Знак минус (−) появился примерно 500 лет назад в Германии. Говорят, купцы рисовали черту на бочках, чтобы отметить, сколько товара не хватает.', 'The minus sign (−) appeared about 500 years ago in Germany. It is said that merchants drew a line on barrels to mark how much was missing.'),
      L('Buyuk olim <b>Abu Rayhon Beruniy</b> astronomik jadvallar tuzganda minglab ayirish amallarini qo‘lda bajargan. U murakkab hisoblarni kichik, qulay bo‘laklarga bo‘lib yechgan — xuddi biz bo‘laklab ayirganimiz kabi!', 'Великий учёный <b>Абу Райхан Беруни</b>, составляя астрономические таблицы, выполнил вручную тысячи вычитаний. Сложные вычисления он разбивал на маленькие удобные части — точно так же, как мы вычитаем по частям!', 'When the great scholar <b>Abu Rayhan Biruni</b> made his astronomy tables, he did thousands of subtractions by hand. He broke hard calculations into small, handy parts — just as we subtract in parts!')
    ] },
    { kind: 'rule', h: L('Bo‘laklab ayirish qoidasi', 'Правило вычитания по частям', 'The subtract-in-parts rule'), p: [
      L('O‘nlikdan o‘tib ayirish uchun:', 'Чтобы вычесть с переходом через десяток:', 'To subtract across ten:'),
      L('<b>1) kamayuvchidan uning birliklarini ayirib, 10 ga tushamiz;<br>2) 10 dan ayriluvchining qolgan qismini ayiramiz.</b>', '<b>1) вычитаем из уменьшаемого его единицы и получаем 10;<br>2) из 10 вычитаем оставшуюся часть вычитаемого.</b>', '<b>1) take away the ones of the first number to get down to 10;<br>2) take the rest of the second number away from 10.</b>'),
      L('Masalan: 13 − 5 = 13 − 3 − 2 = 10 − 2 = 8.', 'Например: 13 − 5 = 13 − 3 − 2 = 10 − 2 = 8.', 'For example: 13 − 5 = 13 − 3 − 2 = 10 − 2 = 8.')
    ], list: [
      L('12 dan 10 ga tushish uchun 2 ni ayiramiz.', 'Чтобы из 12 получить 10, вычитаем 2.', 'To get from 12 down to 10, take away 2.'),
      L('15 dan 10 ga tushish uchun 5 ni ayiramiz.', 'Чтобы из 15 получить 10, вычитаем 5.', 'To get from 15 down to 10, take away 5.'),
      L('17 dan 10 ga tushish uchun 7 ni ayiramiz.', 'Чтобы из 17 получить 10, вычитаем 7.', 'To get from 17 down to 10, take away 7.')
    ], after: [
      L('Birinchi bo‘lak — har doim kamayuvchining birliklari. Uni topish oson: 14 da 4 ta birlik, 16 da 6 ta birlik.', 'Первая часть — всегда единицы уменьшаемого. Найти её легко: в 14 — 4 единицы, в 16 — 6 единиц.', 'The first part is always the ones of the first number. It is easy to find: 14 has 4 ones, 16 has 6 ones.')
    ] },
    { kind: 'steps', h: L('Qadamma-qadam: 15 − 7', 'Шаг за шагом: 15 − 7', 'Step by step: 15 − 7'), p: [
      L('Keling, 15 − 7 ni birga yechamiz.', 'Давай решим 15 − 7 вместе.', 'Let’s solve 15 − 7 together.')
    ], list: [
      L('1-qadam. 15 da nechta birlik bor? <b>5</b> ta. 10 ga tushish uchun 5 ni ayiramiz.', 'Шаг 1. Сколько единиц в 15? <b>5</b>. Чтобы получить 10, вычтем 5.', 'Step 1. How many ones are in 15? <b>5</b>. To get to 10, take away 5.'),
      L('2-qadam. 7 ni bo‘laklarga ajratamiz: 7 = 5 + <b>2</b>.', 'Шаг 2. Разложим 7 на части: 7 = 5 + <b>2</b>.', 'Step 2. Split 7 into parts: 7 = 5 + <b>2</b>.'),
      L('3-qadam. 15 − 5 = 10. Ko‘prikka tushdik!', 'Шаг 3. 15 − 5 = 10. Мы на мосту!', 'Step 3. 15 − 5 = 10. We are on the bridge!'),
      L('4-qadam. 10 − 2 = <b>8</b>. Javob: 15 − 7 = 8.', 'Шаг 4. 10 − 2 = <b>8</b>. Ответ: 15 − 7 = 8.', 'Step 4. 10 − 2 = <b>8</b>. Answer: 15 − 7 = 8.')
    ], after: [
      L('Tekshiruv: javobga ayriluvchini qo‘shsak, kamayuvchi chiqishi kerak. 8 + 7 = 15. To‘g‘ri!', 'Проверка: если к ответу прибавить вычитаемое, должно получиться уменьшаемое. 8 + 7 = 15. Верно!', 'Check: add the number you took away to the answer and you should get the starting number. 8 + 7 = 15. Correct!'),
      L('Buni kubchalar bilan ham ko‘rsatish mumkin. Stolga bitta tayoqcha (10 kubcha) va 5 ta alohida kubcha qo‘ying — bu 15. Avval 5 ta alohida kubchani olib tashlang: faqat tayoqcha qoldi. Keyin tayoqchadan yana 2 ta kubchani sindirib oling. Tayoqchada 8 ta kubcha qoldi. Qo‘llaringiz bilan ko‘rsangiz, qoidani hech qachon unutmaysiz!', 'Это можно показать и на кубиках. Положи на стол одну палочку (10 кубиков) и 5 отдельных кубиков — это 15. Сначала убери 5 отдельных кубиков: осталась только палочка. Потом отломи от палочки ещё 2 кубика. В палочке осталось 8 кубиков. Если увидишь это своими руками, правило никогда не забудешь!', 'You can show this with cubes too. Put one rod (10 cubes) and 5 loose cubes on the table — that is 15. First remove the 5 loose cubes: only the rod is left. Then break 2 more cubes off the rod. The rod now has 8 cubes. Once you have done it with your own hands, you will never forget the rule!')
    ] },
    { kind: 'example', h: L('Yechilgan namunalar', 'Разобранные примеры', 'Worked examples'), p: [
      L('Har birida avval 10 ga tushamiz, keyin qolganini ayiramiz.', 'В каждом сначала спускаемся до 10, потом вычитаем остаток.', 'In each one, first go down to 10, then take away the rest.')
    ], ex: [
      { q: L('Hisoblang: 14 − 6', 'Вычисли: 14 − 6', 'Work out: 14 − 6'), s: L('14 da 4 birlik. 6 = 4 + 2. 14 − 4 = 10, 10 − 2 = <b>8</b>.', 'В 14 — 4 единицы. 6 = 4 + 2. 14 − 4 = 10, 10 − 2 = <b>8</b>.', '14 has 4 ones. 6 = 4 + 2. 14 − 4 = 10, 10 − 2 = <b>8</b>.') },
      { q: L('Hisoblang: 12 − 5', 'Вычисли: 12 − 5', 'Work out: 12 − 5'), s: L('12 da 2 birlik. 5 = 2 + 3. 12 − 2 = 10, 10 − 3 = <b>7</b>.', 'В 12 — 2 единицы. 5 = 2 + 3. 12 − 2 = 10, 10 − 3 = <b>7</b>.', '12 has 2 ones. 5 = 2 + 3. 12 − 2 = 10, 10 − 3 = <b>7</b>.') },
      { q: L('Hisoblang: 11 − 4', 'Вычисли: 11 − 4', 'Work out: 11 − 4'), s: L('11 da 1 birlik. 4 = 1 + 3. 11 − 1 = 10, 10 − 3 = <b>7</b>.', 'В 11 — 1 единица. 4 = 1 + 3. 11 − 1 = 10, 10 − 3 = <b>7</b>.', '11 has 1 one. 4 = 1 + 3. 11 − 1 = 10, 10 − 3 = <b>7</b>.') },
      { q: L('Hisoblang: 16 − 9', 'Вычисли: 16 − 9', 'Work out: 16 − 9'), s: L('16 da 6 birlik. 9 = 6 + 3. 16 − 6 = 10, 10 − 3 = <b>7</b>.', 'В 16 — 6 единиц. 9 = 6 + 3. 16 − 6 = 10, 10 − 3 = <b>7</b>.', '16 has 6 ones. 9 = 6 + 3. 16 − 6 = 10, 10 − 3 = <b>7</b>.') },
      { q: L('Daraxtda 13 ta qush o‘tirgan edi. 6 tasi uchib ketdi. Nechta qush qoldi?', 'На дереве сидели 13 птиц. 6 улетели. Сколько птиц осталось?', '13 birds were sitting in a tree. 6 flew away. How many birds are left?'), s: L('13 − 6. 6 = 3 + 3. 13 − 3 = 10, 10 − 3 = <b>7</b>. Javob: 7 ta qush qoldi.', '13 − 6. 6 = 3 + 3. 13 − 3 = 10, 10 − 3 = <b>7</b>. Ответ: осталось 7 птиц.', '13 − 6. 6 = 3 + 3. 13 − 3 = 10, 10 − 3 = <b>7</b>. Answer: 7 birds are left.') }
    ] },
    { kind: 'table', h: L('Bo‘laklab ayirish jadvali', 'Таблица вычитания по частям', 'Subtracting in parts — table'), p: [
      L('Jadvalda ayriluvchi qanday bo‘laklarga ajratilgani ko‘rsatilgan.', 'В таблице показано, как раскладывается вычитаемое.', 'The table shows how the number taken away is split.')
    ], table: { head: [L('Misol', 'Пример', 'Sum'), L('1-bo‘lak', '1-я часть', 'Part 1'), L('2-bo‘lak', '2-я часть', 'Part 2'), L('Javob', 'Ответ', 'Answer')], rows: [
      ['11 − 3', '1', '2', '8'],
      ['12 − 4', '2', '2', '8'],
      ['13 − 7', '3', '4', '6'],
      ['14 − 5', '4', '1', '9'],
      ['15 − 8', '5', '3', '7'],
      ['17 − 9', '7', '2', '8']
    ] }, after: [
      L('E’tibor bering: birinchi bo‘lak har doim kamayuvchining oxirgi raqamiga teng.', 'Обрати внимание: первая часть всегда равна последней цифре уменьшаемого.', 'Notice: part 1 is always the last digit of the first number.')
    ] },
    { kind: 'mistake', h: L('Tipik xatolar', 'Типичные ошибки', 'Common mistakes'), p: [
      L('Bo‘laklab ayirishda shunday xatolar uchraydi:', 'При вычитании по частям бывают такие ошибки:', 'These mistakes happen when subtracting in parts:')
    ], list: [
      L('<b>Ikkinchi bo‘lakni unutish.</b> 13 − 5: 13 − 3 = 10 deb to‘xtab qolish. Hali 2 ni ayirish kerak! Javob — 8.', '<b>Забыть вторую часть.</b> 13 − 5: остановиться на 13 − 3 = 10. Нужно ещё вычесть 2! Ответ — 8.', '<b>Forgetting part 2.</b> 13 − 5: stopping at 13 − 3 = 10. You still need to take away 2! The answer is 8.'),
      L('<b>Bo‘laklarni noto‘g‘ri tanlash.</b> 14 − 6 da 6 = 3 + 3 deb olish. 14 dan 3 ni ayirsak, 10 emas, 11 chiqadi. Birinchi bo‘lak 4 bo‘lishi kerak.', '<b>Неверно выбрать части.</b> В 14 − 6 разложить 6 = 3 + 3. Тогда 14 − 3 = 11, а не 10. Первая часть должна быть 4.', '<b>Choosing the wrong parts.</b> In 14 − 6, splitting 6 = 3 + 3. Then 14 − 3 = 11, not 10. Part 1 must be 4.'),
      L('<b>Ayirish o‘rniga qo‘shish.</b> 10 − 2 o‘rniga 10 + 2 = 12 deb yozish. Biz pastga tushyapmiz — son kamayishi kerak!', '<b>Сложить вместо вычитания.</b> Вместо 10 − 2 написать 10 + 2 = 12. Мы спускаемся — число должно уменьшаться!', '<b>Adding instead of subtracting.</b> Writing 10 + 2 = 12 instead of 10 − 2. We are going down — the number must get smaller!'),
      L('<b>Tekshirmaslik.</b> Har doim qo‘shish bilan tekshiring: javob + ayriluvchi = kamayuvchi.', '<b>Не проверять.</b> Всегда проверяй сложением: ответ + вычитаемое = уменьшаемое.', '<b>Not checking.</b> Always check with addition: answer + number taken away = starting number.')
    ] },
    { kind: 'life', h: L('Hayotda qayerda kerak?', 'Где это нужно в жизни?', 'Where is this used in life?'), p: [
      L('<b>Bozorda.</b> Sizda 15 ming so‘m bor, 7 ming so‘mlik meva oldingiz. Qancha qoldi? 15 − 5 − 2 = 8 ming so‘m.', '<b>На базаре.</b> У тебя 15 тысяч сумов, ты купил фрукты за 7 тысяч. Сколько осталось? 15 − 5 − 2 = 8 тысяч.', '<b>At the market.</b> You have 15 thousand sum and buy fruit for 7 thousand. How much is left? 15 − 5 − 2 = 8 thousand.'),
      L('<b>Sinfda.</b> Sinfda 14 ta o‘quvchi bor, 5 tasi kasal bo‘lib qoldi. Darsda 14 − 4 − 1 = 9 ta o‘quvchi.', '<b>В классе.</b> В классе 14 учеников, 5 заболели. На уроке 14 − 4 − 1 = 9 учеников.', '<b>At school.</b> A class has 14 pupils and 5 are ill. There are 14 − 4 − 1 = 9 pupils in the lesson.'),
      L('<b>Uyda.</b> Kitobingizda 12 ta ertak bor, 5 tasini o‘qidingiz. Yana 12 − 2 − 3 = 7 ta ertak qoldi.', '<b>Дома.</b> В твоей книге 12 сказок, ты прочитал 5. Осталось ещё 12 − 2 − 3 = 7 сказок.', '<b>At home.</b> Your book has 12 fairy tales and you have read 5. There are 12 − 2 − 3 = 7 left.'),
      L('<b>Vaqtda.</b> Multfilm 16 daqiqa davom etadi, siz 8 daqiqasini ko‘rdingiz. Qolgani: 16 − 6 − 2 = 8 daqiqa.', '<b>Со временем.</b> Мультфильм идёт 16 минут, ты посмотрел 8. Осталось: 16 − 6 − 2 = 8 минут.', '<b>With time.</b> A cartoon lasts 16 minutes and you have watched 8. What is left: 16 − 6 − 2 = 8 minutes.')
    ] },
    { kind: 'fact', h: L('Qiziqarli faktlar', 'Интересные факты', 'Fun facts'), list: [
      L('Qishda ko‘p qushlar janubga uchib ketadi. O‘zbekistonga esa qishlash uchun shimoldan boshqa qushlar uchib keladi — tabiat ham qo‘shadi, ham ayiradi!', 'Зимой многие птицы улетают на юг. А в Узбекистан на зимовку прилетают другие птицы с севера — природа и складывает, и вычитает!', 'In winter many birds fly south. Other birds fly into Uzbekistan from the north to spend the winter — nature both adds and subtracts!'),
      L('Bolaning 20 ta sut tishi bo‘ladi. 6–7 yoshda ular birin-ketin tushib, o‘rniga doimiy tishlar chiqadi. Sizda nechta tish tushdi?', 'У ребёнка 20 молочных зубов. В 6–7 лет они выпадают один за другим, а на их место растут постоянные. Сколько зубов выпало у тебя?', 'A child has 20 baby teeth. At 6–7 years old they fall out one by one and grown-up teeth replace them. How many have you lost?'),
      L('Daraxt kuzda barglarini to‘kadi, lekin bahorda yana shuncha barg chiqaradi. Katta eman daraxtida 200 mingdan ortiq barg bo‘lishi mumkin!', 'Осенью дерево сбрасывает листья, а весной отращивает столько же. На большом дубе может быть больше 200 тысяч листьев!', 'A tree drops its leaves in autumn and grows as many again in spring. A big oak can have more than 200 000 leaves!'),
      L('Kalendarda kunlar ham ayiriladi: «Tug‘ilgan kunimga 13 kun qoldi, bugun yana bir kun o‘tdi — 12 kun qoldi!»', 'В календаре тоже вычитают дни: «До дня рождения 13 дней, прошёл ещё день — осталось 12!»', 'Calendars subtract days too: “13 days to my birthday, one more day has passed — 12 days left!”')
    ] },
    { kind: 'practice', h: L('O‘ylab ko‘ring', 'Подумай', 'Think about it'), p: [
      L('Har birida avval 10 ga tushing.', 'В каждом сначала спустись до 10.', 'In each one, first go down to 10.')
    ], list: [
      L('Hisoblang: 13 − 4, 16 − 8, 11 − 5.', 'Вычисли: 13 − 4, 16 − 8, 11 − 5.', 'Work out: 13 − 4, 16 − 8, 11 − 5.'),
      L('17 − 8 ni bo‘laklab ayiring. Birinchi bo‘lak nechaga teng?', 'Вычти 17 − 8 по частям. Чему равна первая часть?', 'Do 17 − 8 in parts. What is part 1?'),
      L('12 − 5 = 7 ekanini qo‘shish orqali tekshiring.', 'Проверь сложением, что 12 − 5 = 7.', 'Check by adding that 12 − 5 = 7.'),
      L('O‘zingiz bo‘laklab ayirishga masala o‘ylab toping.', 'Придумай сам задачу на вычитание по частям.', 'Make up your own subtract-in-parts problem.')
    ], after: [
      L('Javoblar: 1) 9, 8, 6; 2) birinchi bo‘lak 7: 17 − 7 = 10, 10 − 1 = 9; 3) 7 + 5 = 12, to‘g‘ri.', 'Ответы: 1) 9, 8, 6; 2) первая часть 7: 17 − 7 = 10, 10 − 1 = 9; 3) 7 + 5 = 12, верно.', 'Answers: 1) 9, 8, 6; 2) part 1 is 7: 17 − 7 = 10, 10 − 1 = 9; 3) 7 + 5 = 12, correct.')
    ] },
    { kind: 'summary', h: L('Xulosa', 'Итог', 'Summary'), list: [
      L('Kamayuvchi − ayriluvchi = ayirma.', 'Уменьшаемое − вычитаемое = разность.', 'Starting number − number taken away = difference.'),
      L('Bo‘laklab ayirishda ayriluvchini <b>ikki bo‘lakka</b> ajratamiz.', 'При вычитании по частям вычитаемое делим на <b>две части</b>.', 'In subtracting in parts we split the number taken away into <b>two parts</b>.'),
      L('Birinchi bo‘lak bilan <b>10 ga tushamiz</b>, ikkinchisini 10 dan ayiramiz.', 'Первой частью <b>спускаемся до 10</b>, вторую вычитаем из 10.', 'Part 1 takes us <b>down to 10</b>; part 2 is taken from 10.'),
      L('13 − 5 = 13 − 3 − 2 = 10 − 2 = 8.', '13 − 5 = 13 − 3 − 2 = 10 − 2 = 8.', '13 − 5 = 13 − 3 − 2 = 10 − 2 = 8.'),
      L('Birinchi bo‘lak — kamayuvchining birliklari.', 'Первая часть — единицы уменьшаемого.', 'Part 1 is the ones of the starting number.'),
      L('Javobni qo‘shish bilan tekshiramiz: 8 + 5 = 13.', 'Ответ проверяем сложением: 8 + 5 = 13.', 'Check the answer by adding: 8 + 5 = 13.')
    ] }
  ] });
})(this);
(function (root) {
  'use strict';
  var L = root.NMCurriculum.H.L, T = root.NMTheory, P = '1-2';

  // ---------- t7. O'nlikdan ayirish usuli ----------
  T.add(P, 't7', { sections: [
    { kind: 'intro', h: L('Qutidan olamiz', 'Берём из коробки', 'Taking from the box'), p: [
      L('Madina qandolatchilik do‘konida ishlaydigan xolasinikiga mehmonga bordi. Xolasining stolida bitta to‘la quti — 10 ta pishiriq va yonida yana 2 ta pishiriq turardi. Jami 12 ta. Mehmonlar 7 ta pishiriq so‘rashdi.', 'Мадина пришла в гости к тёте, которая работает в кондитерской. На тётином столе стояла одна полная коробка — 10 пирожных, а рядом ещё 2. Всего 12. Гости попросили 7 пирожных.', 'Madina went to visit her aunt, who works in a sweet shop. On the table there was one full box of 10 cakes and 2 more cakes beside it. 12 in all. The guests asked for 7 cakes.'),
      L('Xolasi yondagi 2 ta pishiriqqa tegmadi. U to‘g‘ridan-to‘g‘ri qutini ochdi va undan 7 tasini oldi. Qutida 3 ta qoldi. Keyin u qutidagi 3 ta va yondagi 2 tasini birga sanadi: 3 + 2 = 5. «Bizda 5 ta pishiriq qoldi», — dedi xolasi.', 'Тётя не стала трогать 2 пирожных рядом. Она сразу открыла коробку и взяла из неё 7. В коробке осталось 3. Потом она посчитала вместе 3 в коробке и 2 рядом: 3 + 2 = 5. «У нас осталось 5 пирожных», — сказала тётя.', 'Her aunt did not touch the 2 loose cakes. She opened the box straight away and took 7 out of it. 3 were left in the box. Then she counted the 3 in the box and the 2 beside it together: 3 + 2 = 5. “We have 5 cakes left,” said her aunt.'),
      L('Bu ayirishning yana bir aqlli usuli — <b>o‘nlikdan ayirish</b>. Biz ayriluvchini to‘g‘ridan-to‘g‘ri 10 dan olamiz, keyin qolgan birliklarni qo‘shamiz. Bu mavzuda shu usulni o‘rganamiz va uni bo‘laklab ayirish bilan taqqoslaymiz.', 'Это ещё один умный способ вычитания — <b>вычитание из десятка</b>. Мы сразу отнимаем вычитаемое от 10, а потом прибавляем оставшиеся единицы. В этой теме мы изучим этот способ и сравним его с вычитанием по частям.', 'This is another clever way to subtract — <b>taking from the ten</b>. We take the number straight away from 10, then add on the ones that were left. In this topic we will learn this method and compare it with subtracting in parts.')
    ] },
    { kind: 'def', h: L('O‘nlikdan ayirish nima?', 'Что такое вычитание из десятка?', 'What is taking from the ten?'), p: [
      L('11 dan 19 gacha bo‘lgan har bir son — bir o‘nlik va bir necha birlik. 12 = 10 + 2. Agar ayriluvchi birliklardan ko‘p bo‘lsa (masalan, 12 − 7 da 7 &gt; 2), biz uni birliklardan emas, <b>o‘nlikdan</b> ayiramiz.', 'Каждое число от 11 до 19 — это один десяток и несколько единиц. 12 = 10 + 2. Если вычитаемое больше единиц (например, в 12 − 7 число 7 больше 2), мы отнимаем его не от единиц, а <b>от десятка</b>.', 'Every number from 11 to 19 is one ten and some ones. 12 = 10 + 2. If the number to take away is bigger than the ones (for example, in 12 − 7, 7 is bigger than 2), we take it not from the ones but <b>from the ten</b>.'),
      L('O‘nlikdan ayirish uchun ikkita narsani bilish kerak:', 'Для вычитания из десятка нужно знать две вещи:', 'To take from the ten you need to know two things:')
    ], list: [
      L('<b>10 dan ayirish</b>: 10 − 1 = 9, 10 − 3 = 7, 10 − 7 = 3, 10 − 9 = 1.', '<b>Вычитание из 10</b>: 10 − 1 = 9, 10 − 3 = 7, 10 − 7 = 3, 10 − 9 = 1.', '<b>Subtracting from 10</b>: 10 − 1 = 9, 10 − 3 = 7, 10 − 7 = 3, 10 − 9 = 1.'),
      L('<b>Sonning o‘nlik va birliklari</b>: 14 = 10 + 4, 17 = 10 + 7.', '<b>Десятки и единицы числа</b>: 14 = 10 + 4, 17 = 10 + 7.', '<b>The tens and ones of a number</b>: 14 = 10 + 4, 17 = 10 + 7.')
    ], after: [
      L('Usulning nomi o‘zi hammasini aytib turibdi: biz ayriluvchini o‘nlikdan ayiramiz, birliklar esa o‘z joyida qoladi va oxirida qo‘shiladi.', 'Название способа говорит само за себя: вычитаемое отнимаем от десятка, а единицы остаются на месте и прибавляются в конце.', 'The name says it all: we take the number from the ten, while the ones stay where they are and are added at the end.')
    ] },
    { kind: 'history', h: L('Qadimgi hisobchilar usuli', 'Способ древних счетоводов', 'The ancient counters’ way'), p: [
      L('Qadimgi Bobil va Misrda hisobchilar ko‘pincha «to‘la idishlar» bilan ishlashgan. Agar to‘la idishdan bir qismini olishsa, avval bitta idishni ochishgan, keyin qolganini boshqa idishlar bilan birga sanashgan. Bu aynan biz o‘rganayotgan o‘nlikdan ayirish usuli!', 'В Древнем Вавилоне и Египте счетоводы часто работали с «полными сосудами». Если нужно было взять часть, они открывали один сосуд, а потом остаток считали вместе с другими. Это и есть способ вычитания из десятка, который мы изучаем!', 'In ancient Babylon and Egypt counters often worked with “full jars”. If they needed to take some out, they opened one jar and then counted what was left together with the others. That is exactly the taking-from-ten method we are learning!'),
      L('Rus cho‘tlarida (schyotlarda) ham shunday hisoblashgan: agar pastki simda munchoq yetmasa, yuqoridagi o‘nlik simidan bitta munchoq «ochilib», 10 ta birlikka aylantirilgan.', 'На русских счётах считали так же: если на нижней проволоке не хватало бусин, одну бусину на проволоке десятков «разменивали» на 10 единиц.', 'On Russian abacuses people counted the same way: if there were not enough beads on the lower wire, one bead on the tens wire was “changed” into 10 ones.'),
      L('Bugungi kunda ham do‘kondorlar shunday qiladi. Agar siz 10 ming so‘mlik pul bilan 7 ming so‘mlik narsa olsangiz, sotuvchi 10 dan 7 ni ayiradi va 3 ming so‘m qaytim beradi. Bu ham o‘nlikdan ayirish!', 'И сегодня продавцы делают так же. Если ты платишь купюрой в 10 тысяч за покупку в 7 тысяч, продавец вычитает 7 из 10 и даёт 3 тысячи сдачи. Это тоже вычитание из десятка!', 'Shopkeepers still do it today. If you pay with a 10 thousand note for something that costs 7 thousand, the seller takes 7 from 10 and gives you 3 thousand change. That is taking from the ten too!')
    ] },
    { kind: 'rule', h: L('O‘nlikdan ayirish qoidasi', 'Правило вычитания из десятка', 'The take-from-ten rule'), p: [
      L('<b>1) ayriluvchini 10 dan ayiramiz;<br>2) natijaga kamayuvchining birliklarini qo‘shamiz.</b>', '<b>1) вычитаем вычитаемое из 10;<br>2) к результату прибавляем единицы уменьшаемого.</b>', '<b>1) take the second number away from 10;<br>2) add the ones of the first number to the result.</b>'),
      L('Masalan: 12 − 7 = (10 − 7) + 2 = 3 + 2 = 5.', 'Например: 12 − 7 = (10 − 7) + 2 = 3 + 2 = 5.', 'For example: 12 − 7 = (10 − 7) + 2 = 3 + 2 = 5.')
    ], list: [
      L('11 − 8 = (10 − 8) + 1 = 2 + 1 = 3', '11 − 8 = (10 − 8) + 1 = 2 + 1 = 3', '11 − 8 = (10 − 8) + 1 = 2 + 1 = 3'),
      L('14 − 9 = (10 − 9) + 4 = 1 + 4 = 5', '14 − 9 = (10 − 9) + 4 = 1 + 4 = 5', '14 − 9 = (10 − 9) + 4 = 1 + 4 = 5'),
      L('16 − 7 = (10 − 7) + 6 = 3 + 6 = 9', '16 − 7 = (10 − 7) + 6 = 3 + 6 = 9', '16 − 7 = (10 − 7) + 6 = 3 + 6 = 9')
    ], after: [
      L('Bu usul ayniqsa 8 yoki 9 ni ayirganda qulay: 10 − 9 = 1, 10 − 8 = 2 — juda oson sonlar! Masalan, 15 − 9: 1 + 5 = 6. Bir zumda!', 'Этот способ особенно удобен, когда вычитаем 8 или 9: 10 − 9 = 1, 10 − 8 = 2 — очень простые числа! Например, 15 − 9: 1 + 5 = 6. В одно мгновение!', 'This method is especially handy when taking away 8 or 9: 10 − 9 = 1 and 10 − 8 = 2 — very easy numbers! For example, 15 − 9: 1 + 5 = 6. In a flash!'),
      L('Endi bizda ikkita usul bor: bo‘laklab ayirish va o‘nlikdan ayirish. Ikkalasi ham bir xil javob beradi. Qaysi biri sizga qulay bo‘lsa — o‘shanisini tanlang.', 'Теперь у нас два способа: вычитание по частям и вычитание из десятка. Оба дают одинаковый ответ. Выбирай тот, что тебе удобнее.', 'Now we have two methods: subtracting in parts and taking from the ten. Both give the same answer. Choose whichever you find easier.')
    ] },
    { kind: 'steps', h: L('Qadamma-qadam: 13 − 8', 'Шаг за шагом: 13 − 8', 'Step by step: 13 − 8'), p: [
      L('Keling, 13 − 8 ni o‘nlikdan ayirish usulida yechamiz.', 'Давай решим 13 − 8 способом вычитания из десятка.', 'Let’s solve 13 − 8 by taking from the ten.')
    ], list: [
      L('1-qadam. 13 ni o‘nlik va birlikka ajratamiz: 13 = 10 + 3.', 'Шаг 1. Разложим 13 на десяток и единицы: 13 = 10 + 3.', 'Step 1. Split 13 into a ten and ones: 13 = 10 + 3.'),
      L('2-qadam. 8 ni o‘nlikdan ayiramiz: 10 − 8 = 2.', 'Шаг 2. Вычитаем 8 из десятка: 10 − 8 = 2.', 'Step 2. Take 8 from the ten: 10 − 8 = 2.'),
      L('3-qadam. Qolgan birliklarni qo‘shamiz: 2 + 3 = <b>5</b>.', 'Шаг 3. Прибавляем оставшиеся единицы: 2 + 3 = <b>5</b>.', 'Step 3. Add the ones that were left: 2 + 3 = <b>5</b>.'),
      L('4-qadam. Tekshiramiz: 5 + 8 = 13. To‘g‘ri!', 'Шаг 4. Проверяем: 5 + 8 = 13. Верно!', 'Step 4. Check: 5 + 8 = 13. Correct!')
    ], after: [
      L('Endi xuddi shu misolni bo‘laklab ayirish usulida yeching: 13 − 3 − 5 = 10 − 5 = 5. Javob bir xil chiqdi!', 'А теперь реши этот же пример по частям: 13 − 3 − 5 = 10 − 5 = 5. Ответ тот же!', 'Now solve the same sum in parts: 13 − 3 − 5 = 10 − 5 = 5. The answer is the same!')
    ] },
    { kind: 'example', h: L('Yechilgan namunalar', 'Разобранные примеры', 'Worked examples'), p: [
      L('Har birida ayriluvchini 10 dan ayiring, keyin birliklarni qo‘shing.', 'В каждом вычти из 10, потом прибавь единицы.', 'In each one, take from 10, then add the ones.')
    ], ex: [
      { q: L('Hisoblang: 11 − 8', 'Вычисли: 11 − 8', 'Work out: 11 − 8'), s: L('10 − 8 = 2, keyin 2 + 1 = <b>3</b>.', '10 − 8 = 2, потом 2 + 1 = <b>3</b>.', '10 − 8 = 2, then 2 + 1 = <b>3</b>.') },
      { q: L('Hisoblang: 16 − 9', 'Вычисли: 16 − 9', 'Work out: 16 − 9'), s: L('10 − 9 = 1, keyin 1 + 6 = <b>7</b>.', '10 − 9 = 1, потом 1 + 6 = <b>7</b>.', '10 − 9 = 1, then 1 + 6 = <b>7</b>.') },
      { q: L('Hisoblang: (10 − 6) + 3', 'Вычисли: (10 − 6) + 3', 'Work out: (10 − 6) + 3'), s: L('Avval qavs: 10 − 6 = 4. Keyin 4 + 3 = <b>7</b>. Bu aslida 13 − 6 ning yechimi!', 'Сначала скобки: 10 − 6 = 4. Потом 4 + 3 = <b>7</b>. Это на самом деле решение 13 − 6!', 'Brackets first: 10 − 6 = 4. Then 4 + 3 = <b>7</b>. This is really the solution of 13 − 6!') },
      { q: L('Hisoblang: 12 − 9', 'Вычисли: 12 − 9', 'Work out: 12 − 9'), s: L('10 − 9 = 1, keyin 1 + 2 = <b>3</b>.', '10 − 9 = 1, потом 1 + 2 = <b>3</b>.', '10 − 9 = 1, then 1 + 2 = <b>3</b>.') },
      { q: L('Bayramda 14 ta shar bor edi. 8 tasi yorilib ketdi. Nechta shar qoldi?', 'На празднике было 14 шаров. 8 лопнули. Сколько шаров осталось?', 'There were 14 balloons at the party. 8 popped. How many are left?'), s: L('14 − 8. 10 − 8 = 2, 2 + 4 = <b>6</b>. Javob: 6 ta shar qoldi.', '14 − 8. 10 − 8 = 2, 2 + 4 = <b>6</b>. Ответ: осталось 6 шаров.', '14 − 8. 10 − 8 = 2, 2 + 4 = <b>6</b>. Answer: 6 balloons are left.') }
    ] },
    { kind: 'table', h: L('Ikki usulni taqqoslaymiz', 'Сравниваем два способа', 'Comparing the two methods'), p: [
      L('Bir xil misollar ikki usulda yechilgan. Javoblar doim bir xil!', 'Одни и те же примеры решены двумя способами. Ответы всегда одинаковые!', 'The same sums solved two ways. The answers are always the same!')
    ], table: { head: [L('Misol', 'Пример', 'Sum'), L('Bo‘laklab', 'По частям', 'In parts'), L('O‘nlikdan', 'Из десятка', 'From the ten'), L('Javob', 'Ответ', 'Answer')], rows: [
      ['12 − 7', '12 − 2 − 5', '3 + 2', '5'],
      ['13 − 9', '13 − 3 − 6', '1 + 3', '4'],
      ['15 − 8', '15 − 5 − 3', '2 + 5', '7'],
      ['17 − 9', '17 − 7 − 2', '1 + 7', '8'],
      ['11 − 6', '11 − 1 − 5', '4 + 1', '5']
    ] }, after: [
      L('Qaysi usul sizga yoqdi? Ko‘p bolalarga 9 va 8 ni ayirishda o‘nlikdan ayirish usuli, 3 yoki 4 ni ayirishda esa bo‘laklab ayirish qulayroq tuyuladi.', 'Какой способ тебе понравился? Многим детям при вычитании 9 и 8 удобнее вычитание из десятка, а при вычитании 3 или 4 — по частям.', 'Which method did you like? Many children find taking from the ten easier for 9 and 8, and subtracting in parts easier for 3 or 4.')
    ] },
    { kind: 'mistake', h: L('Tipik xatolar', 'Типичные ошибки', 'Common mistakes'), p: [
      L('O‘nlikdan ayirishda ehtiyot bo‘ling:', 'При вычитании из десятка будь внимателен:', 'Be careful when taking from the ten:')
    ], list: [
      L('<b>Birliklarni qo‘shishni unutish.</b> 12 − 7: 10 − 7 = 3 deb javobni 3 deb yozish. Yo‘q, yana 2 ta birlik bor! Javob — 5.', '<b>Забыть прибавить единицы.</b> 12 − 7: 10 − 7 = 3 — и ответ 3. Нет, есть ещё 2 единицы! Ответ — 5.', '<b>Forgetting to add the ones.</b> 12 − 7: 10 − 7 = 3 and writing 3. No, there are still 2 ones! The answer is 5.'),
      L('<b>Birliklarni ayirib yuborish.</b> 3 − 2 = 1 deb yozish. Birliklar qo‘shiladi, ayirilmaydi: 3 + 2 = 5.', '<b>Вычесть единицы вместо сложения.</b> Написать 3 − 2 = 1. Единицы прибавляются, а не вычитаются: 3 + 2 = 5.', '<b>Taking the ones away.</b> Writing 3 − 2 = 1. The ones are added, not taken away: 3 + 2 = 5.'),
      L('<b>Kichikdan kattani ayirishga urinish.</b> 12 − 7 da «2 − 7» deb hisoblash mumkin emas. Shuning uchun o‘nlikdan olamiz!', '<b>Пытаться вычесть большее из меньшего.</b> В 12 − 7 нельзя считать «2 − 7». Поэтому и берём из десятка!', '<b>Trying to take a big number from a small one.</b> In 12 − 7 you cannot do “2 − 7”. That is why we take from the ten!'),
      L('<b>10 dan ayirishni bilmaslik.</b> Bu usul uchun 10 − 6 = 4, 10 − 7 = 3 kabilarni yoddan bilish shart.', '<b>Не знать вычитание из 10.</b> Для этого способа нужно знать наизусть 10 − 6 = 4, 10 − 7 = 3 и так далее.', '<b>Not knowing subtraction from 10.</b> For this method you must know 10 − 6 = 4, 10 − 7 = 3 and the rest by heart.')
    ] },
    { kind: 'life', h: L('Hayotda qayerda kerak?', 'Где это нужно в жизни?', 'Where is this used in life?'), p: [
      L('<b>Do‘konda.</b> 10 ming so‘mlik pul bilan 8 ming so‘mlik daftar oldingiz, yoningizda yana 3 ming so‘m tanga bor edi. Endi sizda (10 − 8) + 3 = 5 ming so‘m.', '<b>В магазине.</b> Ты купил тетрадь за 8 тысяч, заплатив купюрой в 10 тысяч, а в кармане было ещё 3 тысячи монетами. Теперь у тебя (10 − 8) + 3 = 5 тысяч.', '<b>At the shop.</b> You buy a notebook for 8 thousand with a 10 thousand note, and you also had 3 thousand in coins. Now you have (10 − 8) + 3 = 5 thousand.'),
      L('<b>Oshxonada.</b> Qutida 10 ta tuxum va stolda yana 4 ta bor. Onam pirog uchun 9 ta tuxum oldi. Qolgani: (10 − 9) + 4 = 5 ta.', '<b>На кухне.</b> В коробке 10 яиц и ещё 4 на столе. Мама взяла 9 яиц для пирога. Осталось: (10 − 9) + 4 = 5.', '<b>In the kitchen.</b> There are 10 eggs in a box and 4 more on the table. Mum takes 9 eggs for a pie. Left: (10 − 9) + 4 = 5.'),
      L('<b>Maktabda.</b> Sinfda 10 ta qizil va 5 ta ko‘k qalam bor. Bolalar 7 ta qizil qalamni olishdi. Qolgan qalamlar: (10 − 7) + 5 = 8 ta.', '<b>В школе.</b> В классе 10 красных и 5 синих карандашей. Дети взяли 7 красных. Осталось: (10 − 7) + 5 = 8 карандашей.', '<b>At school.</b> The class has 10 red and 5 blue pencils. The children took 7 red ones. Left: (10 − 7) + 5 = 8 pencils.')
    ] },
    { kind: 'fact', h: L('Qiziqarli faktlar', 'Интересные факты', 'Fun facts'), list: [
      L('Har bir qo‘lda 5 ta barmoq bor. Agar 10 ta barmoqdan 7 tasini bukib qo‘ysangiz, 3 tasi qoladi — barmoqlaringiz «10 dan ayirish» jadvalini doim yodida tutadi!', 'На каждой руке 5 пальцев. Если из 10 пальцев загнуть 7, останется 3 — твои пальцы всегда помнят таблицу «вычитания из 10»!', 'Each hand has 5 fingers. If you fold down 7 of your 10 fingers, 3 are left — your fingers always remember the “take from 10” table!'),
      L('Bowling o‘yinida 10 ta kegli bor. Agar to‘p 7 tasini yiqitsa, 3 tasi tik qoladi: 10 − 7 = 3.', 'В боулинге 10 кеглей. Если шар сбил 7, стоять остались 3: 10 − 7 = 3.', 'In bowling there are 10 pins. If the ball knocks down 7, 3 are still standing: 10 − 7 = 3.'),
      L('Dengiz yulduzining odatda 5 ta qo‘li bo‘ladi. Agar qo‘li uzilib qolsa, u yangisini o‘stirib oladi!', 'У морской звезды обычно 5 лучей. Если она потеряет луч, то сможет вырастить новый!', 'A starfish usually has 5 arms. If it loses one, it can grow a new one!'),
      L('Bir yilda 12 oy bor. Agar 9 oy maktabda o‘qisak, ta’til va dam olish uchun (10 − 9) + 2 = 3 oy qoladi — yozgi ta’til taxminan shuncha!', 'В году 12 месяцев. Если 9 месяцев учимся, на каникулы остаётся (10 − 9) + 2 = 3 месяца — летние каникулы примерно столько и длятся!', 'A year has 12 months. If we study for 9 of them, (10 − 9) + 2 = 3 months are left for holidays — summer holidays last about that long!')
    ] },
    { kind: 'practice', h: L('O‘ylab ko‘ring', 'Подумай', 'Think about it'), p: [
      L('Avval 10 dan ayiring, keyin birliklarni qo‘shing.', 'Сначала вычти из 10, потом прибавь единицы.', 'First take from 10, then add the ones.')
    ], list: [
      L('Hisoblang: 13 − 9, 15 − 7, 11 − 6.', 'Вычисли: 13 − 9, 15 − 7, 11 − 6.', 'Work out: 13 − 9, 15 − 7, 11 − 6.'),
      L('14 − 8 ni ikki usulda yeching. Javoblar bir xil chiqdimi?', 'Реши 14 − 8 двумя способами. Ответы совпали?', 'Solve 14 − 8 both ways. Did you get the same answer?'),
      L('Qaysi misol (10 − 5) + 7 ga mos keladi: 17 − 5 mi yoki 12 − 5 mi?', 'Какому примеру соответствует (10 − 5) + 7: 17 − 5 или 12 − 5?', 'Which sum matches (10 − 5) + 7: 17 − 5 or 12 − 5?'),
      L('Barmoqlaringiz yordamida 10 dan 6 ni ayiring. Nechta barmoq qoldi?', 'С помощью пальцев вычти 6 из 10. Сколько пальцев осталось?', 'Use your fingers to take 6 from 10. How many fingers are left?')
    ], after: [
      L('Javoblar: 1) 4, 8, 5; 2) ikkalasida ham 6; 3) 17 − 5 = 12 (chunki 5 + 7 = 12); 4) 4 ta barmoq.', 'Ответы: 1) 4, 8, 5; 2) в обоих случаях 6; 3) 17 − 5 = 12 (так как 5 + 7 = 12); 4) 4 пальца.', 'Answers: 1) 4, 8, 5; 2) 6 both ways; 3) 17 − 5 = 12 (because 5 + 7 = 12); 4) 4 fingers.')
    ] },
    { kind: 'summary', h: L('Xulosa', 'Итог', 'Summary'), list: [
      L('O‘nlikdan ayirish: ayriluvchini <b>10 dan</b> ayiramiz, keyin <b>birliklarni qo‘shamiz</b>.', 'Вычитание из десятка: вычитаемое отнимаем <b>от 10</b>, потом <b>прибавляем единицы</b>.', 'Taking from the ten: take the number <b>from 10</b>, then <b>add the ones</b>.'),
      L('12 − 7 = (10 − 7) + 2 = 3 + 2 = 5.', '12 − 7 = (10 − 7) + 2 = 3 + 2 = 5.', '12 − 7 = (10 − 7) + 2 = 3 + 2 = 5.'),
      L('Usul 8 va 9 ni ayirganda ayniqsa qulay.', 'Способ особенно удобен при вычитании 8 и 9.', 'The method is especially handy for taking away 8 and 9.'),
      L('Bo‘laklab ayirish va o‘nlikdan ayirish bir xil javob beradi.', 'Вычитание по частям и из десятка дают одинаковый ответ.', 'Subtracting in parts and taking from the ten give the same answer.'),
      L('10 dan ayirish jadvalini yoddan bilish kerak.', 'Таблицу вычитания из 10 нужно знать наизусть.', 'You need to know subtraction from 10 by heart.'),
      L('Javobni qo‘shish bilan tekshiramiz.', 'Ответ проверяем сложением.', 'We check the answer by adding.')
    ] }
  ] });

  // ---------- t8. Yaxlit sonlar ----------
  T.add(P, 't8', { sections: [
    { kind: 'intro', h: L('Tayoqchalar bog‘lami', 'Пучки палочек', 'Bundles of sticks'), p: [
      L('Bog‘bon bobo qishga o‘tin tayyorlayapti. U shoxchalarni o‘ntadan qilib bog‘laydi. Bitta bog‘lam — 10 ta shoxcha. Ikki bog‘lam — 20 ta. Bobo kun bo‘yi ishladi va kechqurun 5 ta bog‘lam tayyor bo‘ldi. «Nechta shoxcha yig‘dingiz?» — so‘radi nevarasi. «Besh o‘nlik — ellikta!» — dedi bobo.', 'Дедушка-садовник готовит дрова на зиму. Он связывает ветки по десять. Один пучок — 10 веток. Два пучка — 20. Дедушка работал весь день, и к вечеру было готово 5 пучков. «Сколько веток ты собрал?» — спросил внук. «Пять десятков — пятьдесят!» — ответил дедушка.', 'Grandpa the gardener is getting firewood ready for winter. He ties twigs in bundles of ten. One bundle is 10 twigs. Two bundles are 20. He worked all day, and by evening there were 5 bundles. “How many twigs did you gather?” asked his grandson. “Five tens — fifty!” said Grandpa.'),
      L('10, 20, 30, 40, 50 … 100 — faqat to‘la o‘nliklardan iborat sonlar. Ular <b>yaxlit sonlar</b> deyiladi. Ularda birlik yo‘q, shuning uchun oxirida doim 0 turadi.', '10, 20, 30, 40, 50 … 100 — числа, состоящие только из полных десятков. Они называются <b>круглыми числами</b>. У них нет единиц, поэтому в конце всегда стоит 0.', '10, 20, 30, 40, 50 … 100 are numbers made only of whole tens. They are called <b>round numbers</b>. They have no ones, so there is always a 0 at the end.'),
      L('Bu mavzuda biz yaxlit sonlarni sanashni, nomlashni, ularni qo‘shish va ayirishni o‘rganamiz. Eng muhimi — biz <b>100</b> soni bilan tanishamiz!', 'В этой теме мы научимся считать и называть круглые числа, складывать и вычитать их. А самое главное — познакомимся с числом <b>100</b>!', 'In this topic we will learn to count and name round numbers and to add and subtract them. Best of all, we will meet the number <b>100</b>!')
    ] },
    { kind: 'def', h: L('Yaxlit son nima?', 'Что такое круглое число?', 'What is a round number?'), p: [
      L('<b>Yaxlit son</b> — faqat o‘nliklardan iborat son. Uning birliklar xonasida <b>0</b> turadi. Nechta o‘nlik bo‘lsa, son o‘shancha o‘nta bo‘ladi:', '<b>Круглое число</b> — число, состоящее только из десятков. В разряде единиц у него стоит <b>0</b>. Сколько десятков — столько раз по десять:', 'A <b>round number</b> is a number made only of tens. Its ones place holds a <b>0</b>. However many tens there are, that is how many times ten:')
    ], list: [
      L('1 o‘nlik — 10 (o‘n), 2 o‘nlik — 20 (yigirma), 3 o‘nlik — 30 (o‘ttiz)', '1 десяток — 10 (десять), 2 — 20 (двадцать), 3 — 30 (тридцать)', '1 ten — 10 (ten), 2 tens — 20 (twenty), 3 tens — 30 (thirty)'),
      L('4 o‘nlik — 40 (qirq), 5 o‘nlik — 50 (ellik), 6 o‘nlik — 60 (oltmish)', '4 десятка — 40 (сорок), 5 — 50 (пятьдесят), 6 — 60 (шестьдесят)', '4 tens — 40 (forty), 5 tens — 50 (fifty), 6 tens — 60 (sixty)'),
      L('7 o‘nlik — 70 (yetmish), 8 o‘nlik — 80 (sakson), 9 o‘nlik — 90 (to‘qson)', '7 десятков — 70 (семьдесят), 8 — 80 (восемьдесят), 9 — 90 (девяносто)', '7 tens — 70 (seventy), 8 tens — 80 (eighty), 9 tens — 90 (ninety)'),
      L('<b>10 o‘nlik — 100 (yuz)</b>', '<b>10 десятков — 100 (сто)</b>', '<b>10 tens — 100 (one hundred)</b>')
    ], after: [
      L('100 — birinchi <b>uch xonali</b> son. U uchta raqam bilan yoziladi: 1, 0 va 0. 100 da 10 ta o‘nlik yoki 100 ta birlik bor.', '100 — первое <b>трёхзначное</b> число. Оно записывается тремя цифрами: 1, 0 и 0. В 100 — 10 десятков, или 100 единиц.', '100 is the first <b>three-digit</b> number. It is written with three digits: 1, 0 and 0. 100 has 10 tens, or 100 ones.'),
      L('Diqqat: o‘zbek tilida «qirq», «ellik», «sakson», «to‘qson» so‘zlari o‘ziga xos — ularni yod olish kerak.', 'Внимание: в русском языке слова «сорок» и «девяносто» особенные — их надо запомнить.', 'Note: in English, “twenty”, “thirty” and “fifty” are a little irregular — learn them by heart.')
    ] },
    { kind: 'history', h: L('Yuzlik va o‘nliklar tarixi', 'История десятков и сотни', 'The story of tens and a hundred'), p: [
      L('Qadimgi Misrda har bir o‘nlik uchun kishan belgisi chizilgan. 50 sonini yozish uchun 5 ta kishan chizish kerak edi! 100 uchun esa alohida belgi — o‘ralgan arqon chizilgan.', 'В Древнем Египте каждый десяток рисовали знаком пут. Чтобы записать 50, надо было нарисовать 5 знаков! А для 100 был особый знак — свёрнутая верёвка.', 'In Ancient Egypt each ten was drawn as a hobble sign. To write 50 you had to draw 5 of them! For 100 there was a special sign — a coiled rope.'),
      L('Qadimgi Rimda 50 — L, 100 esa — C harfi bilan yozilgan. C — lotincha «centum», ya’ni «yuz» so‘zining bosh harfi. «Sent», «senteyma», «santimetr» so‘zlari ham shundan kelib chiqqan.', 'В Древнем Риме 50 обозначали буквой L, а 100 — буквой C. C — первая буква латинского слова «centum», то есть «сто». От него произошли слова «цент», «центнер», «сантиметр».', 'In Ancient Rome 50 was written as L and 100 as C. C is the first letter of the Latin word “centum”, meaning a hundred. Words like “cent”, “century” and “centimetre” come from it.'),
      L('Hindistonda nol (0) belgisi paydo bo‘lgach, yaxlit sonlarni yozish juda oson bo‘ldi: 50 — bu 5 va 0. <b>Al-Xorazmiy</b> o‘z kitobida nolning ahamiyatini tushuntirib bergan: nol bo‘lmasa, 5 bilan 50 ni farqlab bo‘lmaydi!', 'Когда в Индии появился знак нуля (0), записывать круглые числа стало очень легко: 50 — это 5 и 0. <b>Аль-Хорезми</b> объяснил в своей книге важность нуля: без него нельзя отличить 5 от 50!', 'When the zero sign (0) appeared in India, writing round numbers became very easy: 50 is just 5 and 0. <b>Al-Khwarizmi</b> explained the importance of zero in his book: without it you could not tell 5 from 50!')
    ] },
    { kind: 'rule', h: L('Yaxlit sonlarni qo‘shish va ayirish', 'Сложение и вычитание круглых чисел', 'Adding and subtracting round numbers'), p: [
      L('<b>Yaxlit sonlarni o‘nliklar kabi qo‘shamiz va ayiramiz.</b> Oxiridagi nolni bir chetga qo‘yib, o‘nliklarni hisoblaymiz, keyin nolni qaytarib qo‘yamiz.', '<b>Круглые числа складываем и вычитаем как десятки.</b> Откладываем ноль в сторону, считаем десятки, потом возвращаем ноль.', '<b>Add and subtract round numbers as tens.</b> Put the zero aside, work with the tens, then put the zero back.')
    ], list: [
      L('30 + 20: 3 o‘nlik + 2 o‘nlik = 5 o‘nlik = <b>50</b>.', '30 + 20: 3 десятка + 2 десятка = 5 десятков = <b>50</b>.', '30 + 20: 3 tens + 2 tens = 5 tens = <b>50</b>.'),
      L('80 − 30: 8 o‘nlik − 3 o‘nlik = 5 o‘nlik = <b>50</b>.', '80 − 30: 8 десятков − 3 десятка = 5 десятков = <b>50</b>.', '80 − 30: 8 tens − 3 tens = 5 tens = <b>50</b>.'),
      L('60 + 40: 6 o‘nlik + 4 o‘nlik = 10 o‘nlik = <b>100</b>.', '60 + 40: 6 десятков + 4 десятка = 10 десятков = <b>100</b>.', '60 + 40: 6 tens + 4 tens = 10 tens = <b>100</b>.')
    ], after: [
      L('Ko‘rdingizmi? 3 + 2 = 5 ni bilsangiz, 30 + 20 = 50 ni ham bilasiz. 8 − 3 = 5 ni bilsangiz, 80 − 30 = 50 ni ham bilasiz. Bir xonali sonlar bilan hisoblashni bilish yaxlit sonlarda ham yordam beradi!', 'Видишь? Если знаешь, что 3 + 2 = 5, то знаешь и 30 + 20 = 50. Если знаешь 8 − 3 = 5, то знаешь и 80 − 30 = 50. Умение считать с однозначными числами помогает и с круглыми!', 'See? If you know 3 + 2 = 5, you also know 30 + 20 = 50. If you know 8 − 3 = 5, you also know 80 − 30 = 50. Knowing how to work with one-digit numbers helps with round numbers too!')
    ] },
    { kind: 'steps', h: L('Qadamma-qadam: o‘ntalab sanaymiz', 'Шаг за шагом: считаем десятками', 'Step by step: counting in tens'), p: [
      L('O‘ntalab sanash — katta sonlarga tez yetib borishning eng oson yo‘li.', 'Счёт десятками — самый простой способ быстро добраться до больших чисел.', 'Counting in tens is the easiest way to reach big numbers quickly.')
    ], list: [
      L('1-qadam. 10 dan boshlang: «o‘n».', 'Шаг 1. Начни с 10: «десять».', 'Step 1. Start at 10: “ten”.'),
      L('2-qadam. Har safar bitta o‘nlik qo‘shing: 10, 20, 30, 40, 50.', 'Шаг 2. Каждый раз прибавляй один десяток: 10, 20, 30, 40, 50.', 'Step 2. Add one ten each time: 10, 20, 30, 40, 50.'),
      L('3-qadam. Davom eting: 60, 70, 80, 90.', 'Шаг 3. Продолжай: 60, 70, 80, 90.', 'Step 3. Keep going: 60, 70, 80, 90.'),
      L('4-qadam. 90 ga yana bitta o‘nlik qo‘shsak — <b>100</b>! O‘nta o‘nlik — bitta yuzlik.', 'Шаг 4. Прибавим к 90 ещё один десяток — <b>100</b>! Десять десятков — одна сотня.', 'Step 4. Add one more ten to 90 — <b>100</b>! Ten tens make one hundred.')
    ], after: [
      L('Orqaga ham sanang: 100, 90, 80, 70 … 10. Har safar bitta o‘nlik kamayadi. Bu mashq yaxlit sonlarni ayirishga juda yordam beradi.', 'Посчитай и назад: 100, 90, 80, 70 … 10. Каждый раз уменьшается один десяток. Это упражнение очень помогает вычитать круглые числа.', 'Count backwards too: 100, 90, 80, 70 … 10. One ten goes away each time. This exercise really helps with subtracting round numbers.')
    ] },
    { kind: 'example', h: L('Yechilgan namunalar', 'Разобранные примеры', 'Worked examples'), p: [
      L('Har birida o‘nliklarni sanang.', 'В каждом считай десятки.', 'Count the tens in each one.')
    ], ex: [
      { q: L('Stolda 6 ta tayoqcha bor, har biri 10 ta kubchadan. Jami nechta kubcha?', 'На столе 6 палочек, в каждой 10 кубиков. Сколько всего кубиков?', 'There are 6 rods on the table, each made of 10 cubes. How many cubes in all?'), s: L('6 o‘nlik = <b>60</b>. Javob: 60 ta kubcha.', '6 десятков = <b>60</b>. Ответ: 60 кубиков.', '6 tens = <b>60</b>. Answer: 60 cubes.') },
      { q: L('Hisoblang: 40 + 30', 'Вычисли: 40 + 30', 'Work out: 40 + 30'), s: L('4 o‘nlik + 3 o‘nlik = 7 o‘nlik = <b>70</b>.', '4 десятка + 3 десятка = 7 десятков = <b>70</b>.', '4 tens + 3 tens = 7 tens = <b>70</b>.') },
      { q: L('Hisoblang: 90 − 50', 'Вычисли: 90 − 50', 'Work out: 90 − 50'), s: L('9 o‘nlik − 5 o‘nlik = 4 o‘nlik = <b>40</b>.', '9 десятков − 5 десятков = 4 десятка = <b>40</b>.', '9 tens − 5 tens = 4 tens = <b>40</b>.') },
      { q: L('100 da nechta o‘nlik bor?', 'Сколько десятков в 100?', 'How many tens are in 100?'), s: L('O‘ntalab sanaymiz: 10, 20, … 100 — <b>10 ta</b> o‘nlik.', 'Считаем десятками: 10, 20, … 100 — <b>10</b> десятков.', 'Count in tens: 10, 20, … 100 — <b>10</b> tens.') },
      { q: L('Dilshodda 50 so‘mlik tanga yo‘q, lekin 10 so‘mlik tangalari bor. 50 so‘m to‘plash uchun nechta tanga kerak?', 'У Дилшода нет монеты в 50, но есть монеты по 10. Сколько монет нужно, чтобы набрать 50?', 'Dilshod has no 50 coin, but he has 10 coins. How many coins does he need to make 50?'), s: L('50 = 5 o‘nlik. Demak, <b>5 ta</b> o‘n so‘mlik tanga kerak.', '50 = 5 десятков. Значит, нужно <b>5</b> монет по 10.', '50 = 5 tens. So he needs <b>5</b> ten-coins.') }
    ] },
    { kind: 'table', h: L('Yaxlit sonlar jadvali', 'Таблица круглых чисел', 'Table of round numbers'), p: [
      L('Har bir yaxlit son, uning o‘nliklari va nomi.', 'Каждое круглое число, его десятки и название.', 'Each round number, its tens and its name.')
    ], table: { head: [L('O‘nliklar', 'Десятки', 'Tens'), L('Son', 'Число', 'Number'), L('Nomi', 'Название', 'Name')], rows: [
      ['1', '10', L('o‘n', 'десять', 'ten')],
      ['2', '20', L('yigirma', 'двадцать', 'twenty')],
      ['3', '30', L('o‘ttiz', 'тридцать', 'thirty')],
      ['4', '40', L('qirq', 'сорок', 'forty')],
      ['5', '50', L('ellik', 'пятьдесят', 'fifty')],
      ['6', '60', L('oltmish', 'шестьдесят', 'sixty')],
      ['7', '70', L('yetmish', 'семьдесят', 'seventy')],
      ['8', '80', L('sakson', 'восемьдесят', 'eighty')],
      ['9', '90', L('to‘qson', 'девяносто', 'ninety')],
      ['10', '100', L('yuz', 'сто', 'one hundred')]
    ] }, after: [
      L('Qonuniyatni ko‘rdingizmi? O‘nliklar soni sonning birinchi raqamiga teng, oxirida esa doim 0.', 'Видишь закономерность? Количество десятков равно первой цифре числа, а в конце всегда 0.', 'Do you see the pattern? The number of tens equals the first digit, and there is always a 0 at the end.')
    ] },
    { kind: 'mistake', h: L('Tipik xatolar', 'Типичные ошибки', 'Common mistakes'), p: [
      L('Yaxlit sonlar bilan ishlashda ehtiyot bo‘ling:', 'Работая с круглыми числами, будь внимателен:', 'Be careful when working with round numbers:')
    ], list: [
      L('<b>Nolni unutish.</b> 40 + 30 = 7 deb yozish. Biz o‘nliklarni qo‘shdik — javob 7 o‘nlik, ya’ni 70!', '<b>Забыть ноль.</b> Написать 40 + 30 = 7. Мы складывали десятки — ответ 7 десятков, то есть 70!', '<b>Forgetting the zero.</b> Writing 40 + 30 = 7. We added tens — the answer is 7 tens, which is 70!'),
      L('<b>Ortiqcha nol qo‘shish.</b> 6 o‘nlikni 600 deb yozish. 6 o‘nlik — 60, bitta nol yetarli.', '<b>Добавить лишний ноль.</b> Записать 6 десятков как 600. 6 десятков — это 60, достаточно одного нуля.', '<b>Adding an extra zero.</b> Writing 6 tens as 600. 6 tens is 60 — one zero is enough.'),
      L('<b>40 + 3 ni 70 deb hisoblash.</b> 3 — bu 3 birlik, 3 o‘nlik emas! 40 + 3 = 43.', '<b>Считать 40 + 3 как 70.</b> 3 — это 3 единицы, а не 3 десятка! 40 + 3 = 43.', '<b>Working out 40 + 3 as 70.</b> 3 is 3 ones, not 3 tens! 40 + 3 = 43.'),
      L('<b>100 ni 1000 bilan chalkashtirish.</b> 100 da ikkita nol, uch raqam bor.', '<b>Путать 100 и 1000.</b> В 100 два нуля и три цифры.', '<b>Mixing up 100 and 1000.</b> 100 has two zeros and three digits.')
    ] },
    { kind: 'life', h: L('Hayotda qayerda kerak?', 'Где это нужно в жизни?', 'Where is this used in life?'), p: [
      L('<b>Pulda.</b> Pullar ko‘pincha yaxlit: 10, 20, 50, 100 ming so‘m. 50 ming so‘mlik va 20 ming so‘mlik pul — jami 70 ming so‘m.', '<b>С деньгами.</b> Деньги часто круглые: 10, 20, 50, 100 тысяч сумов. Купюры в 50 и 20 тысяч — всего 70 тысяч.', '<b>With money.</b> Money is often round: 10, 20, 50, 100 thousand sum. A 50 thousand note and a 20 thousand note make 70 thousand.'),
      L('<b>Sportda.</b> Yugurish masofalari yaxlit: 60 metr, 100 metr. 100 metrga yugurish — eng mashhur poyga!', '<b>В спорте.</b> Дистанции бега круглые: 60 метров, 100 метров. Забег на 100 метров — самая известная гонка!', '<b>In sport.</b> Running distances are round: 60 metres, 100 metres. The 100-metre sprint is the most famous race!'),
      L('<b>Maktabda.</b> Daftarlar ko‘pincha 12 yoki 48 varaqli, lekin qalamlar 10 talab qutilarda sotiladi. 3 quti — 30 ta qalam.', '<b>В школе.</b> Карандаши продают в коробках по 10. 3 коробки — 30 карандашей.', '<b>At school.</b> Pencils are sold in boxes of 10. 3 boxes make 30 pencils.'),
      L('<b>Vaqtda.</b> Bir soatda 60 daqiqa bor. Yarim soat — 30 daqiqa. Dars 40 daqiqa davom etadi.', '<b>Со временем.</b> В часе 60 минут. Полчаса — 30 минут. Урок длится 40 минут.', '<b>With time.</b> An hour has 60 minutes. Half an hour is 30 minutes. A lesson lasts 40 minutes.'),
      L('<b>Bog‘da.</b> Bobongiz bahorda 20 tup olma va 30 tup o‘rik ko‘chati ekdi. Bog‘da jami 50 tup yosh daraxt bo‘ldi. Kuzda esa har bir savatga 10 tadan olma terib, savatlarni sanash orqali hosilni tez hisoblash mumkin: 7 savat — 70 ta olma. Ko‘rdingizmi, yaxlit sonlar katta ishni ham oson qiladi!', '<b>В саду.</b> Весной дедушка посадил 20 саженцев яблонь и 30 саженцев абрикосов. В саду стало 50 молодых деревьев. А осенью, раскладывая яблоки по 10 в корзину, урожай легко посчитать по корзинам: 7 корзин — 70 яблок. Видишь, круглые числа облегчают даже большую работу!', '<b>In the orchard.</b> In spring Grandpa planted 20 apple saplings and 30 apricot saplings. The orchard now has 50 young trees. In autumn, if you put 10 apples in each basket, you can count the harvest quickly by counting baskets: 7 baskets make 70 apples. You see, round numbers make even big jobs easy!')
    ] },
    { kind: 'fact', h: L('Qiziqarli faktlar', 'Интересные факты', 'Fun facts'), list: [
      L('Ko‘p maktablarda «100-kun bayrami» o‘tkaziladi: o‘quv yilining 100-kunida bolalar 100 ta narsani — tugma, makaron, qalamni yig‘ib, o‘ntalab teradi.', 'Во многих школах отмечают «праздник 100-го дня»: в 100-й день учёбы дети собирают 100 предметов — пуговиц, макаронин, карандашей — и раскладывают их десятками.', 'Many schools celebrate a “100th day party”: on the 100th day of school children collect 100 things — buttons, pasta, pencils — and lay them out in tens.'),
      L('Qirqoyoq degan hasharotning oyoqlari aslida 40 ta emas — turiga qarab 30 dan 350 tagacha bo‘lishi mumkin!', 'У сороконожки на самом деле не 40 ног — в зависимости от вида их может быть от 30 до 350!', 'A centipede (“hundred-legs”) does not really have 100 legs — depending on the kind, it can have from 30 to 350!'),
      L('Toshbaqalar 100 yildan ko‘proq yashashi mumkin. Ba’zi gigant toshbaqalar 150 yilgacha umr ko‘radi!', 'Черепахи могут жить больше 100 лет. Некоторые гигантские черепахи доживают до 150 лет!', 'Tortoises can live for more than 100 years. Some giant tortoises live to 150!'),
      L('Suv 100 darajada qaynaydi. Bu yaxlit son tasodifan emas: olimlar harorat shkalasini maxsus shunday tuzishgan.', 'Вода кипит при 100 градусах. Это круглое число не случайно: учёные специально так построили шкалу температуры.', 'Water boils at 100 degrees. That round number is no accident: scientists built the temperature scale that way on purpose.')
    ] },
    { kind: 'practice', h: L('O‘ylab ko‘ring', 'Подумай', 'Think about it'), p: [
      L('O‘nliklarni sanang va nolni unutmang.', 'Считай десятки и не забывай ноль.', 'Count the tens and don’t forget the zero.')
    ], list: [
      L('10 dan 100 gacha o‘ntalab sanang, keyin orqaga sanang.', 'Посчитай десятками от 10 до 100, потом назад.', 'Count in tens from 10 to 100, then backwards.'),
      L('Hisoblang: 20 + 50, 70 − 40, 30 + 70.', 'Вычисли: 20 + 50, 70 − 40, 30 + 70.', 'Work out: 20 + 50, 70 − 40, 30 + 70.'),
      L('8 o‘nlik qaysi son? 80 da nechta o‘nlik bor?', '8 десятков — какое число? Сколько десятков в 80?', 'Which number is 8 tens? How many tens are in 80?'),
      L('Uydagi qoshiq yoki qalamlarni o‘ntalab guruhlab sanang.', 'Посчитай ложки или карандаши дома, группируя их по десять.', 'Count the spoons or pencils at home in groups of ten.')
    ], after: [
      L('Javoblar: 2) 70, 30, 100; 3) 80; 8 ta o‘nlik.', 'Ответы: 2) 70, 30, 100; 3) 80; 8 десятков.', 'Answers: 2) 70, 30, 100; 3) 80; 8 tens.')
    ] },
    { kind: 'summary', h: L('Xulosa', 'Итог', 'Summary'), list: [
      L('Faqat o‘nliklardan iborat sonlar — <b>yaxlit sonlar</b>: 10, 20, 30 … 100.', 'Числа только из десятков — <b>круглые</b>: 10, 20, 30 … 100.', 'Numbers made only of tens are <b>round numbers</b>: 10, 20, 30 … 100.'),
      L('Yaxlit sonning oxirida doim <b>0</b> turadi.', 'В конце круглого числа всегда стоит <b>0</b>.', 'A round number always ends in <b>0</b>.'),
      L('<b>10 o‘nlik = 100</b> — birinchi uch xonali son.', '<b>10 десятков = 100</b> — первое трёхзначное число.', '<b>10 tens = 100</b> — the first three-digit number.'),
      L('Yaxlit sonlarni o‘nliklar kabi qo‘shamiz va ayiramiz: 30 + 20 = 50.', 'Круглые числа складываем и вычитаем как десятки: 30 + 20 = 50.', 'Add and subtract round numbers as tens: 30 + 20 = 50.'),
      L('Javobda nolni unutmang!', 'Не забывай ноль в ответе!', 'Don’t forget the zero in the answer!'),
      L('O‘ntalab sanash — katta sonlarga tez yetishning eng oson yo‘li.', 'Счёт десятками — самый простой путь к большим числам.', 'Counting in tens is the quickest way to big numbers.')
    ] }
  ] });
})(this);
(function (root) {
  'use strict';
  var L = root.NMCurriculum.H.L, T = root.NMTheory, P = '1-2';

  // ---------- t9. 21 dan 100 gacha sonlar: o'qilishi va yozilishi ----------
  T.add(P, 't9', { sections: [
    { kind: 'intro', h: L('Katta sonlar shahri', 'Город больших чисел', 'The city of big numbers'), p: [
      L('Tasavvur qiling, siz «Sonlar shahri»ga sayohatga chiqdingiz. Shaharda 10 ta ko‘cha bor. Har bir ko‘chada 10 ta uy. Birinchi ko‘chada 1 dan 10 gacha uylar, ikkinchisida 11 dan 20 gacha. Biz bu ikki ko‘chani allaqachon yaxshi bilamiz. Endi qolgan ko‘chalarga — 21 dan 100 gacha sayohat qilamiz!', 'Представь, что ты отправился в путешествие в «Город чисел». В городе 10 улиц. На каждой улице 10 домов. На первой улице дома от 1 до 10, на второй — от 11 до 20. Эти две улицы мы уже хорошо знаем. Теперь отправимся на остальные — от 21 до 100!', 'Imagine you are travelling to the “City of Numbers”. The city has 10 streets. Each street has 10 houses. The first street has houses 1 to 10, the second has 11 to 20. We already know these two streets well. Now let’s visit the rest — from 21 to 100!'),
      L('Sizning do‘stingiz 46-uyda yashaydi. Uni qanday topasiz? Juda oson: 46 da 4 ta o‘nlik bor — demak, siz 4 ta to‘la ko‘chadan o‘tib, beshinchi ko‘chaga kirasiz va u yerdan 6-uyni topasiz. Har bir sonning o‘z «manzili» bor: o‘nliklar — ko‘cha, birliklar — uy raqami.', 'Твой друг живёт в доме 46. Как его найти? Очень просто: в 46 — 4 десятка, значит, ты проходишь 4 полные улицы, сворачиваешь на пятую и находишь там дом номер 6. У каждого числа есть свой «адрес»: десятки — улица, единицы — номер дома.', 'Your friend lives at house 46. How do you find it? Easy: 46 has 4 tens, so you walk past 4 full streets, turn into the fifth and find house number 6. Every number has its own “address”: the tens are the street and the ones are the house number.'),
      L('Bu mavzuda biz 21 dan 100 gacha bo‘lgan sonlarni o‘qishni, yozishni va ularni o‘nlik va birliklarga ajratishni o‘rganamiz.', 'В этой теме мы научимся читать и записывать числа от 21 до 100 и раскладывать их на десятки и единицы.', 'In this topic we will learn to read and write the numbers from 21 to 100 and split them into tens and ones.')
    ] },
    { kind: 'def', h: L('Xonalar: o‘nliklar va birliklar', 'Разряды: десятки и единицы', 'Places: tens and ones'), p: [
      L('Ikki xonali sonda har bir raqam o‘z joyida — <b>xonasida</b> turadi. Chapdagi joy — <b>o‘nliklar xonasi</b>, o‘ngdagi joy — <b>birliklar xonasi</b>. Bitta raqam turli xonada turli qiymatga ega bo‘ladi.', 'В двузначном числе каждая цифра стоит на своём месте — в своём <b>разряде</b>. Левое место — <b>разряд десятков</b>, правое — <b>разряд единиц</b>. Одна и та же цифра в разных разрядах значит разное.', 'In a two-digit number each digit stands in its own <b>place</b>. The left place is the <b>tens place</b>, the right place is the <b>ones place</b>. The same digit means different things in different places.'),
      L('Masalan, 46 va 64 sonlarida bir xil raqamlar — 4 va 6. Lekin 46 da 4 — bu 4 o‘nlik (40), 64 da esa 4 — faqat 4 birlik. Shuning uchun bu sonlar umuman boshqa!', 'Например, в числах 46 и 64 одни и те же цифры — 4 и 6. Но в 46 четвёрка — это 4 десятка (40), а в 64 — всего 4 единицы. Поэтому это совсем разные числа!', 'For example, 46 and 64 use the same digits, 4 and 6. But in 46 the 4 means 4 tens (40), while in 64 it means just 4 ones. That is why they are completely different numbers!')
    ], list: [
      L('46 = 4 o‘nlik va 6 birlik = 40 + 6', '46 = 4 десятка и 6 единиц = 40 + 6', '46 = 4 tens and 6 ones = 40 + 6'),
      L('83 = 8 o‘nlik va 3 birlik = 80 + 3', '83 = 8 десятков и 3 единицы = 80 + 3', '83 = 8 tens and 3 ones = 80 + 3'),
      L('70 = 7 o‘nlik va 0 birlik = 70', '70 = 7 десятков и 0 единиц = 70', '70 = 7 tens and 0 ones = 70')
    ], after: [
      L('40 + 6 kabi yozuv sonning <b>xona qo‘shiluvchilari yig‘indisi</b> deyiladi. U son nimalardan tuzilganini ko‘rsatadi.', 'Запись вида 40 + 6 называется <b>суммой разрядных слагаемых</b>. Она показывает, из чего состоит число.', 'Writing a number as 40 + 6 is called its <b>expanded form</b>. It shows what the number is made of.')
    ] },
    { kind: 'history', h: L('Xona qoidasining tarixi', 'История разрядной записи', 'The story of place value'), p: [
      L('Qadimgi Misrda 46 sonini yozish uchun 4 ta o‘nlik belgisi va 6 ta chiziqcha chizish kerak edi — jami 10 ta belgi! 99 ni yozish uchun esa 18 ta belgi kerak bo‘lgan. Bu juda uzun va noqulay edi.', 'В Древнем Египте, чтобы записать 46, нужно было нарисовать 4 знака десятка и 6 чёрточек — всего 10 знаков! А для 99 требовалось 18 знаков. Это было очень долго и неудобно.', 'In Ancient Egypt, to write 46 you had to draw 4 ten-signs and 6 strokes — 10 signs in all! Writing 99 took 18 signs. That was long and awkward.'),
      L('Hindistonlik olimlar ajoyib g‘oyani topishdi: raqamning <b>o‘rni</b> uning qiymatini ko‘rsatsin! Endi 46 ni faqat ikki belgi bilan yozish mumkin. Bu g‘oya taxminan 1500 yil oldin paydo bo‘lgan.', 'Индийские учёные придумали замечательную идею: пусть <b>место</b> цифры показывает её значение! Теперь 46 можно записать всего двумя знаками. Эта идея появилась примерно 1500 лет назад.', 'Indian scholars came up with a wonderful idea: let the <b>place</b> of a digit show its value! Now 46 can be written with just two signs. This idea appeared about 1500 years ago.'),
      L('Bu usulni butun dunyoga Xorazmlik olim <b>Muhammad al-Xorazmiy</b> tanitdi. Uning hind hisobi haqidagi kitobi lotin tiliga tarjima qilindi va Yevropada ko‘p asrlar davomida darslik bo‘lib xizmat qildi. «Algoritm» so‘zi ham uning ismidan kelib chiqqan!', 'Всему миру этот способ представил учёный из Хорезма <b>Мухаммад аль-Хорезми</b>. Его книгу об индийском счёте перевели на латынь, и в Европе она много веков служила учебником. Слово «алгоритм» тоже произошло от его имени!', 'The scholar from Khorezm, <b>Muhammad al-Khwarizmi</b>, introduced this method to the whole world. His book on Indian arithmetic was translated into Latin and served as a textbook in Europe for centuries. The word “algorithm” comes from his name too!')
    ] },
    { kind: 'rule', h: L('O‘qish va yozish qoidasi', 'Правило чтения и записи', 'The rule for reading and writing'), p: [
      L('<b>Son qanday o‘qilsa, shunday yoziladi: avval o‘nliklar, keyin birliklar.</b>', '<b>Как число читается, так и пишется: сначала десятки, потом единицы.</b>', '<b>We write a number the way we read it: tens first, then ones.</b>'),
      L('«Qirq olti» deb o‘qiymiz: «qirq» — bu 4 o‘nlik, «olti» — 6 birlik. Yozamiz: chapga 4, o‘ngga 6 — <b>46</b>.', 'Читаем «сорок шесть»: «сорок» — это 4 десятка, «шесть» — 6 единиц. Пишем: слева 4, справа 6 — <b>46</b>.', 'We read “forty-six”: “forty” is 4 tens and “six” is 6 ones. We write 4 on the left and 6 on the right — <b>46</b>.')
    ], list: [
      L('<b>Son = o‘nliklar + birliklar</b>: 57 = 50 + 7.', '<b>Число = десятки + единицы</b>: 57 = 50 + 7.', '<b>Number = tens + ones</b>: 57 = 50 + 7.'),
      L('Birliklarni olib tashlasak, yaxlit son qoladi: 57 − 7 = 50.', 'Если убрать единицы, останется круглое число: 57 − 7 = 50.', 'Take away the ones and a round number is left: 57 − 7 = 50.'),
      L('O‘nliklarni olib tashlasak, birliklar qoladi: 57 − 50 = 7.', 'Если убрать десятки, останутся единицы: 57 − 50 = 7.', 'Take away the tens and the ones are left: 57 − 50 = 7.'),
      L('99 dan keyin 100 keladi: 99 + 1 = 100.', 'После 99 идёт 100: 99 + 1 = 100.', 'After 99 comes 100: 99 + 1 = 100.')
    ], after: [
      L('Agar birliklar 0 bo‘lsa, nolni albatta yozamiz: 7 o‘nlik — 70, 7 emas! Nol birliklar xonasini band qilib turadi.', 'Если единиц 0, ноль обязательно пишем: 7 десятков — это 70, а не 7! Ноль занимает место единиц.', 'If there are 0 ones, we must write the zero: 7 tens is 70, not 7! The zero holds the ones place.')
    ] },
    { kind: 'steps', h: L('Qadamma-qadam: sonni yig‘amiz', 'Шаг за шагом: собираем число', 'Step by step: building a number'), p: [
      L('Stolda 3 ta tayoqcha (har biri 10 kubcha) va 8 ta alohida kubcha bor. Qaysi son?', 'На столе 3 палочки (по 10 кубиков) и 8 отдельных кубиков. Какое это число?', 'There are 3 rods (10 cubes each) and 8 loose cubes on the table. Which number is it?')
    ], list: [
      L('1-qadam. Tayoqchalarni sanang — bu o‘nliklar: <b>3</b>.', 'Шаг 1. Посчитай палочки — это десятки: <b>3</b>.', 'Step 1. Count the rods — these are the tens: <b>3</b>.'),
      L('2-qadam. Alohida kubchalarni sanang — bu birliklar: <b>8</b>.', 'Шаг 2. Посчитай отдельные кубики — это единицы: <b>8</b>.', 'Step 2. Count the loose cubes — these are the ones: <b>8</b>.'),
      L('3-qadam. Chapga o‘nliklarni, o‘ngga birliklarni yozing: <b>38</b>.', 'Шаг 3. Слева напиши десятки, справа единицы: <b>38</b>.', 'Step 3. Write the tens on the left and the ones on the right: <b>38</b>.'),
      L('4-qadam. Ovoz chiqarib o‘qing: «o‘ttiz sakkiz». Tekshiring: 30 + 8 = 38.', 'Шаг 4. Прочитай вслух: «тридцать восемь». Проверь: 30 + 8 = 38.', 'Step 4. Read it aloud: “thirty-eight”. Check: 30 + 8 = 38.')
    ], after: [
      L('Teskari mashq ham foydali: «To‘qson ikki» sonini kubchalar bilan yig‘ing. Nechta tayoqcha va nechta kubcha kerak? 9 ta tayoqcha va 2 ta kubcha.', 'Полезно и обратное упражнение: собери из кубиков число «девяносто два». Сколько нужно палочек и кубиков? 9 палочек и 2 кубика.', 'The reverse exercise is useful too: build “ninety-two” with cubes. How many rods and cubes do you need? 9 rods and 2 cubes.')
    ] },
    { kind: 'example', h: L('Yechilgan namunalar', 'Разобранные примеры', 'Worked examples'), p: [
      L('Har bir sonni o‘nlik va birlikka ajrating.', 'Каждое число разложи на десятки и единицы.', 'Split each number into tens and ones.')
    ], ex: [
      { q: L('7 o‘nlik va 5 birlik — qaysi son?', '7 десятков и 5 единиц — какое число?', '7 tens and 5 ones — which number?'), s: L('Chapga 7, o‘ngga 5: <b>75</b> (yetmish besh). 70 + 5 = 75.', 'Слева 7, справа 5: <b>75</b> (семьдесят пять). 70 + 5 = 75.', '7 on the left, 5 on the right: <b>75</b> (seventy-five). 70 + 5 = 75.') },
      { q: L('Hisoblang: 60 + 8', 'Вычисли: 60 + 8', 'Work out: 60 + 8'), s: L('6 o‘nlik va 8 birlik: <b>68</b>. Diqqat: 14 ham emas, 608 ham emas!', '6 десятков и 8 единиц: <b>68</b>. Внимание: не 14 и не 608!', '6 tens and 8 ones: <b>68</b>. Careful: not 14 and not 608!') },
      { q: L('Hisoblang: 83 − 3', 'Вычисли: 83 − 3', 'Work out: 83 − 3'), s: L('83 = 80 + 3. Birliklarni olib tashlaymiz: <b>80</b>.', '83 = 80 + 3. Убираем единицы: <b>80</b>.', '83 = 80 + 3. Take away the ones: <b>80</b>.') },
      { q: L('Hisoblang: 54 − 50', 'Вычисли: 54 − 50', 'Work out: 54 − 50'), s: L('54 = 50 + 4. O‘nliklarni olib tashlaymiz: <b>4</b>.', '54 = 50 + 4. Убираем десятки: <b>4</b>.', '54 = 50 + 4. Take away the tens: <b>4</b>.') },
      { q: L('Hisoblang: 99 + 1', 'Вычисли: 99 + 1', 'Work out: 99 + 1'), s: L('9 birlikka 1 qo‘shsak — 10 birlik, ya’ni yana bitta o‘nlik. 9 o‘nlik + 1 o‘nlik = 10 o‘nlik = <b>100</b>.', 'К 9 единицам прибавим 1 — получится 10 единиц, то есть ещё один десяток. 9 десятков + 1 десяток = 10 десятков = <b>100</b>.', 'Add 1 to 9 ones and you get 10 ones, which is one more ten. 9 tens + 1 ten = 10 tens = <b>100</b>.') }
    ] },
    { kind: 'table', h: L('Sonlarning tarkibi', 'Состав чисел', 'What numbers are made of'), p: [
      L('Jadvalda turli sonlar va ularning xonalari ko‘rsatilgan.', 'В таблице показаны разные числа и их разряды.', 'The table shows different numbers and their places.')
    ], table: { head: [L('Son', 'Число', 'Number'), L('O‘nliklar', 'Десятки', 'Tens'), L('Birliklar', 'Единицы', 'Ones'), L('Yig‘indi', 'Сумма', 'Expanded')], rows: [
      ['24', '2', '4', '20 + 4'],
      ['39', '3', '9', '30 + 9'],
      ['46', '4', '6', '40 + 6'],
      ['64', '6', '4', '60 + 4'],
      ['81', '8', '1', '80 + 1'],
      ['97', '9', '7', '90 + 7'],
      ['100', '10', '0', '90 + 10']
    ] }, after: [
      L('46 va 64 ni solishtiring: raqamlar bir xil, lekin xonalari boshqa — sonlar ham boshqa.', 'Сравни 46 и 64: цифры одинаковые, а разряды разные — и числа разные.', 'Compare 46 and 64: the same digits in different places — different numbers.')
    ] },
    { kind: 'mistake', h: L('Tipik xatolar', 'Типичные ошибки', 'Common mistakes'), p: [
      L('Katta sonlarni yozishda ko‘p uchraydigan xatolar:', 'Частые ошибки при записи больших чисел:', 'Frequent mistakes when writing bigger numbers:')
    ], list: [
      L('<b>Raqamlarni almashtirish.</b> «Yetmish besh» ni 57 deb yozish. Avval o‘nliklar: 75.', '<b>Переставлять цифры.</b> «Семьдесят пять» записать как 57. Сначала десятки: 75.', '<b>Swapping digits.</b> Writing “seventy-five” as 57. Tens first: 75.'),
      L('<b>Eshitganini yozish.</b> «Oltmish sakkiz» ni 608 deb yozish. Oltmish — bu 6 o‘nlik, 60 emas, faqat 6 raqami chap tomonda: 68.', '<b>Писать «как слышится».</b> «Шестьдесят восемь» записать как 608. Шестьдесят — это 6 десятков: слева пишем только цифру 6: 68.', '<b>Writing what you hear.</b> Writing “sixty-eight” as 608. Sixty is 6 tens: only the digit 6 goes on the left: 68.'),
      L('<b>Nolni unutish.</b> «Sakson» ni 8 deb yozish. Sakson — 80, nol albatta kerak.', '<b>Забыть ноль.</b> Записать «восемьдесят» как 8. Восемьдесят — 80, ноль обязателен.', '<b>Forgetting the zero.</b> Writing “eighty” as 8. Eighty is 80 — the zero is a must.'),
      L('<b>99 dan keyin 910 deyish.</b> 99 dan keyin 100 keladi — o‘nta o‘nlik.', '<b>Говорить, что после 99 идёт 910.</b> После 99 идёт 100 — десять десятков.', '<b>Saying 910 comes after 99.</b> After 99 comes 100 — ten tens.')
    ] },
    { kind: 'life', h: L('Hayotda qayerda kerak?', 'Где это нужно в жизни?', 'Where is this used in life?'), p: [
      L('<b>Uyda.</b> Uy va xonadon raqamlari: «Navoiy ko‘chasi, 47-uy». Raqamni to‘g‘ri o‘qimasangiz, boshqa uyga borib qolasiz!', '<b>Дома.</b> Номера домов и квартир: «улица Навои, дом 47». Если неправильно прочитать номер, попадёшь в другой дом!', '<b>At home.</b> House and flat numbers: “Navoi Street, house 47”. Read the number wrongly and you will end up at a different house!'),
      L('<b>Kitobda.</b> Kitob sahifalari raqamlangan. «58-sahifani oching» desa, siz 50 dan keyingi o‘nlikda, 8-sahifani topasiz.', '<b>В книге.</b> Страницы книги пронумерованы. Если сказали «откройте страницу 58», ищешь её в десятке после 50, восьмую.', '<b>In a book.</b> The pages are numbered. If you are told “open page 58”, you look in the ten after 50 for the eighth page.'),
      L('<b>Avtobusda.</b> Avtobus raqamlari: 34-avtobus, 67-avtobus. To‘g‘ri avtobusga chiqish uchun raqamni to‘g‘ri o‘qish kerak.', '<b>В автобусе.</b> Номера автобусов: автобус 34, автобус 67. Чтобы сесть в нужный автобус, надо правильно прочитать номер.', '<b>On the bus.</b> Bus numbers: bus 34, bus 67. To catch the right bus you must read the number correctly.'),
      L('<b>Do‘konda.</b> Narxlar: 25 ming so‘m, 90 ming so‘m. Bobongizning yoshi ham ikki xonali son bo‘lishi mumkin — masalan, 72 yosh!', '<b>В магазине.</b> Цены: 25 тысяч сумов, 90 тысяч. И возраст дедушки тоже может быть двузначным — например, 72 года!', '<b>At the shop.</b> Prices: 25 thousand sum, 90 thousand sum. Your grandpa’s age may be a two-digit number too — 72, for example!'),
      L('<b>Telefonda.</b> Onangizning telefon raqamini yodlaganda ham uni ikki xonali bo‘laklarga bo‘lib aytish qulay: «to‘qson bir, qirq besh, oltmish ikki». Shunday qilib uzun raqamni eslab qolish ancha oson bo‘ladi. Sinab ko‘ring!', '<b>По телефону.</b> Запоминая мамин номер телефона, удобно делить его на двузначные части: «девяносто один, сорок пять, шестьдесят два». Так длинный номер запомнить гораздо легче. Попробуй!', '<b>On the phone.</b> When you learn Mum’s phone number, it helps to say it in two-digit chunks: “ninety-one, forty-five, sixty-two”. That makes a long number much easier to remember. Try it!')
    ] },
    { kind: 'fact', h: L('Qiziqarli faktlar', 'Интересные факты', 'Fun facts'), list: [
      L('Fransuz tilida 97 soni «to‘rtta yigirma, o‘n yetti» deb aytiladi — bu qadimgi yigirmatalab sanash izi.', 'Во французском языке 97 произносится как «четыре двадцать семнадцать» — это след древнего счёта двадцатками.', 'In French, 97 is said as “four twenty seventeen” — a trace of ancient counting in twenties.'),
      L('Inson tanasida 206 ta suyak bor, lekin chaqaloq taxminan 300 ta suyak bilan tug‘iladi — o‘sgan sari ular birlashib ketadi.', 'В теле взрослого человека 206 костей, а младенец рождается примерно с 300 — по мере роста они срастаются.', 'An adult body has 206 bones, but a baby is born with about 300 — they join together as the child grows.'),
      L('Shaxmat taxtasida 64 ta katak bor: 8 qator, har birida 8 tadan.', 'На шахматной доске 64 клетки: 8 рядов по 8.', 'A chessboard has 64 squares: 8 rows of 8.'),
      L('Pianinoning klavishlari soni — 88 ta: 52 ta oq va 36 ta qora.', 'У пианино 88 клавиш: 52 белые и 36 чёрных.', 'A piano has 88 keys: 52 white and 36 black.')
    ] },
    { kind: 'practice', h: L('O‘ylab ko‘ring', 'Подумай', 'Think about it'), p: [
      L('Avval o‘nliklar, keyin birliklar — shunday o‘qiymiz va yozamiz.', 'Сначала десятки, потом единицы — так читаем и пишем.', 'Tens first, then ones — that is how we read and write.')
    ], list: [
      L('Raqamlar bilan yozing: qirq yetti, to‘qson, yigirma uch.', 'Запиши цифрами: сорок семь, девяносто, двадцать три.', 'Write in digits: forty-seven, ninety, twenty-three.'),
      L('59 ni xona qo‘shiluvchilari yig‘indisi shaklida yozing.', 'Запиши 59 в виде суммы разрядных слагаемых.', 'Write 59 in expanded form.'),
      L('3 va 8 raqamlaridan qanday ikki xonali sonlar yozish mumkin?', 'Какие двузначные числа можно записать цифрами 3 и 8?', 'Which two-digit numbers can you write with the digits 3 and 8?'),
      L('Uyingiz yoki xonadoningiz raqamini o‘nlik va birlikka ajrating.', 'Разложи номер своего дома или квартиры на десятки и единицы.', 'Split your house or flat number into tens and ones.')
    ], after: [
      L('Javoblar: 1) 47, 90, 23; 2) 50 + 9; 3) 38 va 83 (yana 33 va 88 ham).', 'Ответы: 1) 47, 90, 23; 2) 50 + 9; 3) 38 и 83 (а также 33 и 88).', 'Answers: 1) 47, 90, 23; 2) 50 + 9; 3) 38 and 83 (and also 33 and 88).')
    ] },
    { kind: 'summary', h: L('Xulosa', 'Итог', 'Summary'), list: [
      L('Ikki xonali sonda chapda — <b>o‘nliklar</b>, o‘ngda — <b>birliklar</b>.', 'В двузначном числе слева — <b>десятки</b>, справа — <b>единицы</b>.', 'In a two-digit number the <b>tens</b> are on the left and the <b>ones</b> on the right.'),
      L('Son qanday o‘qilsa, shunday yoziladi: 46 = 40 + 6.', 'Как читается, так и пишется: 46 = 40 + 6.', 'Write it as you read it: 46 = 40 + 6.'),
      L('Raqamning o‘rni uning qiymatini belgilaydi: 46 ≠ 64.', 'Место цифры определяет её значение: 46 ≠ 64.', 'A digit’s place sets its value: 46 ≠ 64.'),
      L('Birliklar bo‘lmasa, o‘rniga 0 yozamiz: 70.', 'Если единиц нет, пишем 0: 70.', 'If there are no ones, we write 0: 70.'),
      L('99 + 1 = 100 — o‘nta o‘nlik.', '99 + 1 = 100 — десять десятков.', '99 + 1 = 100 — ten tens.'),
      L('Bu yozuv usulini dunyoga al-Xorazmiy tanitgan.', 'Этот способ записи миру представил аль-Хорезми.', 'Al-Khwarizmi introduced this way of writing to the world.')
    ] }
  ] });

  // ---------- t10. Ikki xonali sonlarni taqqoslash ----------
  T.add(P, 't10', { sections: [
    { kind: 'intro', h: L('Qaysi tog‘ baland?', 'Какая гора выше?', 'Which mountain is higher?'), p: [
      L('Laylo va Aziz kutubxonadan kitob olishdi. Laylonikida 52 sahifa, Azizdagisida 48 sahifa bor. Aziz: «Mening kitobimda 8 raqami bor, u 2 dan katta, demak mening kitobim qalinroq!» — dedi. Laylo kulib yubordi: «Yo‘q, Aziz, avval o‘nliklarga qarash kerak!»', 'Лайло и Азиз взяли книги в библиотеке. В книге Лайло 52 страницы, у Азиза — 48. Азиз сказал: «В моём числе есть цифра 8, а она больше 2, значит, моя книга толще!» Лайло засмеялась: «Нет, Азиз, сначала надо смотреть на десятки!»', 'Laylo and Aziz borrowed books from the library. Laylo’s book has 52 pages and Aziz’s has 48. Aziz said: “My number has an 8 in it, and 8 is bigger than 2, so my book is thicker!” Laylo laughed: “No, Aziz, you have to look at the tens first!”'),
      L('Kim haq? Laylo! 52 da 5 ta o‘nlik, 48 da esa faqat 4 ta. Besh o‘nlik har doim to‘rt o‘nlikdan ko‘p, birliklar qancha bo‘lishidan qat’i nazar. Ya’ni 52 &gt; 48.', 'Кто прав? Лайло! В 52 — 5 десятков, а в 48 — только 4. Пять десятков всегда больше четырёх, сколько бы ни было единиц. То есть 52 &gt; 48.', 'Who is right? Laylo! 52 has 5 tens and 48 has only 4. Five tens are always more than four tens, however many ones there are. So 52 &gt; 48.'),
      L('Bu mavzuda biz 100 gacha bo‘lgan har qanday ikkita sonni to‘g‘ri taqqoslashni va sonlarni tartib bilan terishni o‘rganamiz.', 'В этой теме мы научимся правильно сравнивать любые два числа до 100 и расставлять числа по порядку.', 'In this topic we will learn to compare any two numbers up to 100 correctly and to put numbers in order.')
    ] },
    { kind: 'def', h: L('Taqqoslash nimani bildiradi?', 'Что значит сравнить?', 'What does comparing mean?'), p: [
      L('Ikki sonni <b>taqqoslash</b> — qaysi biri katta, qaysi biri kichik yoki ular tengligini aniqlash. Natijani belgi bilan yozamiz:', '<b>Сравнить</b> два числа — значит выяснить, какое из них больше, какое меньше или равны ли они. Результат записываем знаком:', 'To <b>compare</b> two numbers means to find out which is bigger, which is smaller, or whether they are equal. We write the result with a sign:')
    ], list: [
      L('<b>&gt;</b> — katta: 52 &gt; 48.', '<b>&gt;</b> — больше: 52 &gt; 48.', '<b>&gt;</b> — greater: 52 &gt; 48.'),
      L('<b>&lt;</b> — kichik: 63 &lt; 67.', '<b>&lt;</b> — меньше: 63 &lt; 67.', '<b>&lt;</b> — less: 63 &lt; 67.'),
      L('<b>=</b> — teng: 75 = 75.', '<b>=</b> — равно: 75 = 75.', '<b>=</b> — equal: 75 = 75.')
    ], after: [
      L('1-sinfning boshida biz 20 gacha sonlarni taqqoslagan edik. Endi esa sonlar 100 gacha. Lekin qoida o‘zgarmaydi — u faqat yanada muhimroq bo‘ladi, chunki o‘nliklar endi 1 yoki 2 emas, 1 dan 9 gacha bo‘lishi mumkin.', 'В начале первого класса мы сравнивали числа до 20. Теперь числа до 100. Но правило не меняется — оно становится только важнее, ведь десятков теперь может быть не 1 или 2, а от 1 до 9.', 'Earlier we compared numbers up to 20. Now the numbers go up to 100. But the rule does not change — it just becomes more important, because now there can be anything from 1 to 9 tens, not just 1 or 2.'),
      L('Sonlarni tartiblash ikki xil bo‘ladi: <b>o‘sish tartibida</b> (kichigidan kattasiga) va <b>kamayish tartibida</b> (kattasidan kichigiga).', 'Упорядочивать числа можно двумя способами: <b>по возрастанию</b> (от меньшего к большему) и <b>по убыванию</b> (от большего к меньшему).', 'Numbers can be ordered two ways: <b>ascending</b> (smallest to largest) and <b>descending</b> (largest to smallest).')
    ] },
    { kind: 'history', h: L('Taqqoslash va o‘lchash tarixidan', 'Из истории сравнения и измерения', 'From the history of comparing and measuring'), p: [
      L('Qadimgi Bobilda olimlar yulduzlarni kuzatib, qaysi biri yorqinroq, qaysi biri osmonda balandroq ekanini taqqoslashgan va loy taxtachalarga yozib qo‘yishgan. Bu taxtachalar hozir ham muzeylarda saqlanadi.', 'В Древнем Вавилоне учёные наблюдали звёзды, сравнивали, какая ярче и какая выше на небе, и записывали это на глиняных табличках. Эти таблички и сейчас хранятся в музеях.', 'In ancient Babylon scholars watched the stars, compared which were brighter and higher in the sky, and wrote it on clay tablets. These tablets are still kept in museums today.'),
      L('Buyuk vatandoshimiz <b>Mirzo Ulug‘bek</b> (1394–1449) Samarqandda ulkan rasadxona qurdirdi. U yerda olimlar 1000 dan ortiq yulduzning o‘rnini o‘lchab, ularni bir-biri bilan taqqoslashdi. Ulug‘bek jadvallari o‘z davrining eng aniq jadvallari edi!', 'Наш великий соотечественник <b>Мирзо Улугбек</b> (1394–1449) построил в Самарканде огромную обсерваторию. Там учёные измерили положение более 1000 звёзд и сравнили их между собой. Таблицы Улугбека были самыми точными в своё время!', 'The great astronomer <b>Mirzo Ulugbek</b> (1394–1449) built a huge observatory in Samarkand. There scholars measured the positions of more than 1000 stars and compared them with one another. Ulugbek’s tables were the most accurate of their time!'),
      L('<b>Beruniy</b> esa turli shaharlar orasidagi masofalarni o‘lchab, ularni taqqoslagan. Uning hisoblari shunchalik aniq ediki, ularni bugun ham hayrat bilan o‘rganishadi.', 'А <b>Беруни</b> измерял расстояния между разными городами и сравнивал их. Его расчёты были такими точными, что их до сих пор изучают с восхищением.', '<b>Biruni</b> measured the distances between different cities and compared them. His calculations were so accurate that people still study them with admiration today.')
    ] },
    { kind: 'rule', h: L('Ikki xonali sonlarni taqqoslash qoidasi', 'Правило сравнения двузначных чисел', 'The rule for comparing two-digit numbers'), p: [
      L('<b>Avval o‘nliklarni taqqoslaymiz. O‘nliklar teng bo‘lsa — birliklarni taqqoslaymiz.</b>', '<b>Сначала сравниваем десятки. Если десятки равны — сравниваем единицы.</b>', '<b>Compare the tens first. If the tens are equal, compare the ones.</b>')
    ], list: [
      L('O‘nliklar har xil: 71 va 39. 7 &gt; 3, demak <b>71 &gt; 39</b>. Birliklarga qaramaymiz!', 'Десятки разные: 71 и 39. 7 &gt; 3, значит <b>71 &gt; 39</b>. На единицы не смотрим!', 'Different tens: 71 and 39. 7 &gt; 3, so <b>71 &gt; 39</b>. We don’t even look at the ones!'),
      L('O‘nliklar teng: 63 va 67. 6 = 6, birliklar 3 &lt; 7, demak <b>63 &lt; 67</b>.', 'Десятки равны: 63 и 67. 6 = 6, единицы 3 &lt; 7, значит <b>63 &lt; 67</b>.', 'Equal tens: 63 and 67. 6 = 6, ones 3 &lt; 7, so <b>63 &lt; 67</b>.'),
      L('Hammasi teng: 45 va 45 — <b>45 = 45</b>.', 'Всё равно: 45 и 45 — <b>45 = 45</b>.', 'Everything equal: 45 and 45 — <b>45 = 45</b>.')
    ], after: [
      L('Nega o‘nliklar muhimroq? Chunki bitta o‘nlik — bu 10 ta birlik. Hatto 9 ta birlik ham bitta o‘nlikdan kam. Shuning uchun 40 &gt; 39: 4 o‘nlik 3 o‘nlik va 9 birlikdan ko‘p.', 'Почему десятки важнее? Потому что один десяток — это 10 единиц. Даже 9 единиц меньше одного десятка. Поэтому 40 &gt; 39: 4 десятка больше, чем 3 десятка и 9 единиц.', 'Why are the tens more important? Because one ten is 10 ones. Even 9 ones are less than one ten. That is why 40 &gt; 39: 4 tens are more than 3 tens and 9 ones.'),
      L('Sonlar qatorida ham tekshirish mumkin: o‘ngroqdagi son doim kattaroq.', 'Можно проверить и по числовому ряду: число правее всегда больше.', 'You can check on the number line too: the number further right is always bigger.'),
      L('Buni kubchalar bilan ham ko‘rish oson. 40 ni yig‘ish uchun 4 ta tayoqcha kerak. 39 ni yig‘ish uchun esa 3 ta tayoqcha va 9 ta alohida kubcha kerak. Agar 9 ta kubchani bir qatorga tersangiz, u hali to‘liq tayoqcha bo‘lmaydi — bitta kubcha yetmaydi. Demak, 4 ta tayoqcha ko‘proq!', 'Это легко увидеть и на кубиках. Чтобы собрать 40, нужно 4 палочки. А чтобы собрать 39 — 3 палочки и 9 отдельных кубиков. Если выложить 9 кубиков в ряд, это ещё не полная палочка — не хватает одного кубика. Значит, 4 палочки — больше!', 'It is easy to see with cubes too. To build 40 you need 4 rods. To build 39 you need 3 rods and 9 loose cubes. If you line up the 9 cubes, they still do not make a full rod — one cube is missing. So 4 rods are more!')
    ] },
    { kind: 'steps', h: L('Qadamma-qadam: sonlarni tartiblaymiz', 'Шаг за шагом: упорядочиваем числа', 'Step by step: ordering numbers'), p: [
      L('61, 16, 66, 60 sonlarini kichigidan kattasiga teramiz.', 'Расставим числа 61, 16, 66, 60 от меньшего к большему.', 'Let’s put 61, 16, 66 and 60 in order from smallest to largest.')
    ], list: [
      L('1-qadam. Har bir sonning o‘nliklarini yozing: 61 — 6, 16 — 1, 66 — 6, 60 — 6.', 'Шаг 1. Выпиши десятки каждого числа: 61 — 6, 16 — 1, 66 — 6, 60 — 6.', 'Step 1. Write down the tens of each number: 61 — 6, 16 — 1, 66 — 6, 60 — 6.'),
      L('2-qadam. O‘nligi eng kam son — eng kichik: <b>16</b>.', 'Шаг 2. Число с наименьшим количеством десятков — самое маленькое: <b>16</b>.', 'Step 2. The number with the fewest tens is the smallest: <b>16</b>.'),
      L('3-qadam. Qolganlarida o‘nliklar teng (6), birliklarni taqqoslaymiz: 0 &lt; 1 &lt; 6.', 'Шаг 3. У остальных десятки равны (6), сравниваем единицы: 0 &lt; 1 &lt; 6.', 'Step 3. The others have equal tens (6), so compare the ones: 0 &lt; 1 &lt; 6.'),
      L('4-qadam. Javob: <b>16, 60, 61, 66</b>.', 'Шаг 4. Ответ: <b>16, 60, 61, 66</b>.', 'Step 4. Answer: <b>16, 60, 61, 66</b>.')
    ], after: [
      L('Kattasidan kichigiga terish kerak bo‘lsa, shu qatorni teskari o‘qing: 66, 61, 60, 16.', 'Если нужно от большего к меньшему, прочитай ряд в обратном порядке: 66, 61, 60, 16.', 'For largest to smallest, just read the row backwards: 66, 61, 60, 16.'),
      L('Buni o‘yin qilib ham o‘ynash mumkin. Do‘stlaringiz bilan har biringiz bitta kartochkaga ikki xonali son yozing. Keyin hammangiz qatorga turib, kartochkalaringizni kichigidan kattasiga qarab tartiblang. Kim o‘z joyini birinchi bo‘lib to‘g‘ri topsa — o‘sha g‘olib! Bu o‘yinda har safar o‘nliklarga birinchi bo‘lib qarashni unutmang.', 'В это можно и поиграть. Вместе с друзьями каждый пишет на карточке двузначное число. Потом все встают в ряд и упорядочивают карточки от меньшего к большему. Кто первым правильно найдёт своё место — тот и победил! В этой игре не забывай каждый раз первым делом смотреть на десятки.', 'You can turn this into a game. With your friends, each of you writes a two-digit number on a card. Then everyone lines up and puts the cards in order from smallest to largest. Whoever finds the right place first wins! In this game, always remember to look at the tens first.')
    ] },
    { kind: 'example', h: L('Yechilgan namunalar', 'Разобранные примеры', 'Worked examples'), p: [
      L('Avval o‘nliklarga qarang!', 'Сначала смотри на десятки!', 'Look at the tens first!')
    ], ex: [
      { q: L('Belgi qo‘ying: 47 ◻ 74', 'Поставь знак: 47 ◻ 74', 'Put in the sign: 47 ◻ 74'), s: L('O‘nliklar: 4 va 7. 4 &lt; 7, demak <b>47 &lt; 74</b>.', 'Десятки: 4 и 7. 4 &lt; 7, значит <b>47 &lt; 74</b>.', 'Tens: 4 and 7. 4 &lt; 7, so <b>47 &lt; 74</b>.') },
      { q: L('Belgi qo‘ying: 85 ◻ 58', 'Поставь знак: 85 ◻ 58', 'Put in the sign: 85 ◻ 58'), s: L('O‘nliklar: 8 va 5. 8 &gt; 5, demak <b>85 &gt; 58</b>.', 'Десятки: 8 и 5. 8 &gt; 5, значит <b>85 &gt; 58</b>.', 'Tens: 8 and 5. 8 &gt; 5, so <b>85 &gt; 58</b>.') },
      { q: L('Belgi qo‘ying: 92 ◻ 97', 'Поставь знак: 92 ◻ 97', 'Put in the sign: 92 ◻ 97'), s: L('O‘nliklar teng (9). Birliklar: 2 &lt; 7. Demak <b>92 &lt; 97</b>.', 'Десятки равны (9). Единицы: 2 &lt; 7. Значит <b>92 &lt; 97</b>.', 'Equal tens (9). Ones: 2 &lt; 7. So <b>92 &lt; 97</b>.') },
      { q: L('Belgi qo‘ying: 50 + 3 ◻ 35', 'Поставь знак: 50 + 3 ◻ 35', 'Put in the sign: 50 + 3 ◻ 35'), s: L('Avval hisoblaymiz: 50 + 3 = 53. O‘nliklar: 5 &gt; 3. Demak <b>50 + 3 &gt; 35</b>.', 'Сначала считаем: 50 + 3 = 53. Десятки: 5 &gt; 3. Значит <b>50 + 3 &gt; 35</b>.', 'First work it out: 50 + 3 = 53. Tens: 5 &gt; 3. So <b>50 + 3 &gt; 35</b>.') },
      { q: L('Qaysi sinfda o‘quvchilar ko‘p: 1«A» da 28 ta, 1«B» da 31 ta?', 'В каком классе больше учеников: в 1 «А» — 28, в 1 «Б» — 31?', 'Which class has more pupils: 1A has 28 and 1B has 31?'), s: L('O‘nliklar: 2 va 3. 2 &lt; 3, demak 28 &lt; 31. Javob: <b>1«B» sinfida</b> ko‘p.', 'Десятки: 2 и 3. 2 &lt; 3, значит 28 &lt; 31. Ответ: больше в <b>1 «Б»</b>.', 'Tens: 2 and 3. 2 &lt; 3, so 28 &lt; 31. Answer: <b>1B</b> has more.') }
    ] },
    { kind: 'table', h: L('Taqqoslash jadvali', 'Таблица сравнения', 'Comparison table'), p: [
      L('Har bir juftlikda qaysi xona qaror qabul qilganiga e’tibor bering.', 'Обрати внимание, какой разряд решил исход в каждой паре.', 'Notice which place decided each pair.')
    ], table: { head: [L('Juftlik', 'Пара', 'Pair'), L('O‘nliklar', 'Десятки', 'Tens'), L('Birliklar', 'Единицы', 'Ones'), L('Javob', 'Ответ', 'Answer')], rows: [
      [L('52 va 48', '52 и 48', '52 and 48'), L('5 &gt; 4', '5 &gt; 4', '5 &gt; 4'), L('kerak emas', 'не нужно', 'not needed'), L('52 &gt; 48', '52 &gt; 48', '52 &gt; 48')],
      [L('63 va 67', '63 и 67', '63 and 67'), L('6 = 6', '6 = 6', '6 = 6'), L('3 &lt; 7', '3 &lt; 7', '3 &lt; 7'), L('63 &lt; 67', '63 &lt; 67', '63 &lt; 67')],
      [L('29 va 31', '29 и 31', '29 and 31'), L('2 &lt; 3', '2 &lt; 3', '2 &lt; 3'), L('kerak emas', 'не нужно', 'not needed'), L('29 &lt; 31', '29 &lt; 31', '29 &lt; 31')],
      [L('80 va 79', '80 и 79', '80 and 79'), L('8 &gt; 7', '8 &gt; 7', '8 &gt; 7'), L('kerak emas', 'не нужно', 'not needed'), L('80 &gt; 79', '80 &gt; 79', '80 &gt; 79')],
      [L('44 va 44', '44 и 44', '44 and 44'), L('4 = 4', '4 = 4', '4 = 4'), L('4 = 4', '4 = 4', '4 = 4'), L('44 = 44', '44 = 44', '44 = 44')]
    ] }, after: [
      L('Ko‘p hollarda o‘nliklarning o‘zi yetarli. Birliklarga faqat o‘nliklar teng bo‘lganda qaraymiz.', 'Чаще всего хватает одних десятков. На единицы смотрим, только когда десятки равны.', 'Most of the time the tens are enough. We look at the ones only when the tens are equal.')
    ] },
    { kind: 'mistake', h: L('Tipik xatolar', 'Типичные ошибки', 'Common mistakes'), p: [
      L('Taqqoslashda bolalar ko‘pincha mana shunday adashadi:', 'При сравнении дети часто ошибаются так:', 'Children often go wrong like this when comparing:')
    ], list: [
      L('<b>Birliklardan boshlash.</b> «48 &gt; 52, chunki 8 &gt; 2». Yo‘q! Avval o‘nliklar: 4 &lt; 5, demak 48 &lt; 52.', '<b>Начинать с единиц.</b> «48 &gt; 52, потому что 8 &gt; 2». Нет! Сначала десятки: 4 &lt; 5, значит 48 &lt; 52.', '<b>Starting with the ones.</b> “48 &gt; 52 because 8 &gt; 2.” No! Tens first: 4 &lt; 5, so 48 &lt; 52.'),
      L('<b>Raqamlar yig‘indisiga qarash.</b> «39 &gt; 50, chunki 3 + 9 = 12, 5 + 0 = 5». Bu noto‘g‘ri usul! Xonalarni taqqoslash kerak.', '<b>Складывать цифры.</b> «39 &gt; 50, потому что 3 + 9 = 12, а 5 + 0 = 5». Это неверный способ! Надо сравнивать разряды.', '<b>Adding up the digits.</b> “39 &gt; 50 because 3 + 9 = 12 and 5 + 0 = 5.” That is the wrong method! Compare the places.'),
      L('<b>Belgini teskari qo‘yish.</b> Esingizda bo‘lsin: belgining ochiq tomoni katta songa qaraydi.', '<b>Ставить знак наоборот.</b> Помни: открытая сторона знака смотрит на большее число.', '<b>Writing the sign backwards.</b> Remember: the open side faces the bigger number.'),
      L('<b>Ifodani hisoblamasdan taqqoslash.</b> 40 + 9 ◻ 50 da avval 49 ni toping.', '<b>Сравнивать, не вычислив выражение.</b> В 40 + 9 ◻ 50 сначала найди 49.', '<b>Comparing without working out the expression.</b> In 40 + 9 ◻ 50, first find 49.')
    ] },
    { kind: 'life', h: L('Hayotda qayerda kerak?', 'Где это нужно в жизни?', 'Where is this used in life?'), p: [
      L('<b>Do‘konda.</b> Bitta sharbat 12 ming so‘m, boshqasi 21 ming so‘m. Qaysi biri arzon? 12 &lt; 21 — birinchisi. Raqamlar bir xil, lekin narxi boshqa!', '<b>В магазине.</b> Один сок стоит 12 тысяч, другой — 21 тысячу. Какой дешевле? 12 &lt; 21 — первый. Цифры одинаковые, а цена разная!', '<b>At the shop.</b> One juice costs 12 thousand, another 21 thousand. Which is cheaper? 12 &lt; 21 — the first. Same digits, different price!'),
      L('<b>Sportda.</b> Ikki basketbol jamoasi: 68 va 72 ochko. G‘olib — 72 ochko to‘plagan jamoa.', '<b>В спорте.</b> Две баскетбольные команды: 68 и 72 очка. Победила команда, набравшая 72.', '<b>In sport.</b> Two basketball teams: 68 and 72 points. The team with 72 wins.'),
      L('<b>Tabiatda.</b> Tuya 40 yilgacha, ot 30 yilgacha yashaydi. Kim uzoq yashaydi? 40 &gt; 30 — tuya.', '<b>В природе.</b> Верблюд живёт до 40 лет, лошадь — до 30. Кто живёт дольше? 40 &gt; 30 — верблюд.', '<b>In nature.</b> A camel lives up to 40 years and a horse up to 30. Who lives longer? 40 &gt; 30 — the camel.'),
      L('<b>Oilada.</b> Buvingiz 67 yoshda, bobongiz 71 yoshda. Kim katta? Taqqoslang!', '<b>В семье.</b> Бабушке 67 лет, дедушке 71. Кто старше? Сравни!', '<b>In the family.</b> Grandma is 67 and Grandpa is 71. Who is older? Compare!')
    ] },
    { kind: 'fact', h: L('Qiziqarli faktlar', 'Интересные факты', 'Fun facts'), list: [
      L('Gepard soatiga taxminan 100 km tezlikda yuguradi, ot esa 70 km atrofida. Gepard — eng tez quruqlik hayvoni!', 'Гепард бегает со скоростью около 100 км в час, а лошадь — около 70. Гепард — самое быстрое сухопутное животное!', 'A cheetah runs at about 100 km an hour and a horse at about 70. The cheetah is the fastest land animal!'),
      L('Ko‘k kit yuragi 1 daqiqada atigi taxminan 10 marta, sichqonning yuragi esa 600 martadan ko‘p uradi.', 'Сердце синего кита бьётся всего около 10 раз в минуту, а сердце мыши — больше 600 раз.', 'A blue whale’s heart beats only about 10 times a minute, while a mouse’s beats more than 600 times.'),
      L('Ulug‘bek rasadxonasidagi ulkan asbob — sekstantning yoyi 40 metrdan uzunroq bo‘lgan.', 'Огромный инструмент в обсерватории Улугбека — секстант — имел дугу длиннее 40 метров.', 'The huge instrument in Ulugbek’s observatory — the sextant — had an arc more than 40 metres long.'),
      L('Bir yilda 52 hafta bor. Bir oyda esa ko‘pi bilan 31 kun. Qaysi biri ko‘p? 52 &gt; 31!', 'В году 52 недели. А в месяце не больше 31 дня. Что больше? 52 &gt; 31!', 'A year has 52 weeks. A month has at most 31 days. Which is more? 52 &gt; 31!')
    ] },
    { kind: 'practice', h: L('O‘ylab ko‘ring', 'Подумай', 'Think about it'), p: [
      L('Avval o‘nliklar, keyin birliklar!', 'Сначала десятки, потом единицы!', 'Tens first, then ones!')
    ], list: [
      L('Belgi qo‘ying: 36 ◻ 63, 70 ◻ 69, 88 ◻ 88.', 'Поставь знак: 36 ◻ 63, 70 ◻ 69, 88 ◻ 88.', 'Put in the sign: 36 ◻ 63, 70 ◻ 69, 88 ◻ 88.'),
      L('Kichigidan kattasiga tering: 54, 45, 50, 59.', 'Расставь от меньшего к большему: 54, 45, 50, 59.', 'Order from smallest to largest: 54, 45, 50, 59.'),
      L('Qaysi ikki xonali sonlar 95 dan katta?', 'Какие двузначные числа больше 95?', 'Which two-digit numbers are bigger than 95?'),
      L('Oilangiz a’zolarining yoshini kattasidan kichigiga tering.', 'Расставь возраст членов семьи от большего к меньшему.', 'Put your family’s ages in order from oldest to youngest.')
    ], after: [
      L('Javoblar: 1) 36 &lt; 63, 70 &gt; 69, 88 = 88; 2) 45, 50, 54, 59; 3) 96, 97, 98, 99.', 'Ответы: 1) 36 &lt; 63, 70 &gt; 69, 88 = 88; 2) 45, 50, 54, 59; 3) 96, 97, 98, 99.', 'Answers: 1) 36 &lt; 63, 70 &gt; 69, 88 = 88; 2) 45, 50, 54, 59; 3) 96, 97, 98, 99.')
    ] },
    { kind: 'summary', h: L('Xulosa', 'Итог', 'Summary'), list: [
      L('Ikki xonali sonlarni taqqoslashda <b>avval o‘nliklarni</b> solishtiramiz.', 'Сравнивая двузначные числа, <b>сначала сравниваем десятки</b>.', 'When comparing two-digit numbers, <b>compare the tens first</b>.'),
      L('O‘nliklar teng bo‘lsa — <b>birliklarni</b> solishtiramiz.', 'Если десятки равны — сравниваем <b>единицы</b>.', 'If the tens are equal, compare the <b>ones</b>.'),
      L('Bitta o‘nlik 9 ta birlikdan ham ko‘p: 40 &gt; 39.', 'Один десяток больше даже 9 единиц: 40 &gt; 39.', 'One ten is more than even 9 ones: 40 &gt; 39.'),
      L('Raqamlar yig‘indisi emas, xonalar muhim.', 'Важна не сумма цифр, а разряды.', 'It is the places that matter, not the sum of the digits.'),
      L('Sonlarni o‘sish yoki kamayish tartibida terish mumkin.', 'Числа можно расставлять по возрастанию или по убыванию.', 'Numbers can be put in ascending or descending order.'),
      L('Ifoda bo‘lsa — avval hisoblang, keyin taqqoslang.', 'Если есть выражение — сначала вычисли, потом сравнивай.', 'If there is an expression, work it out first, then compare.')
    ] }
  ] });
})(this);
(function (root) {
  'use strict';
  var L = root.NMCurriculum.H.L, T = root.NMTheory, P = '1-2';

  // ---------- t11. Ikki xonali sonlarni qo'shish ----------
  T.add(P, 't11', { sections: [
    { kind: 'intro', h: L('Kutubxonadagi kitoblar', 'Книги в библиотеке', 'Books in the library'), p: [
      L('Maktab kutubxonasiga yangi kitoblar keldi. Kutubxonachi opa ularni ikki javonga terdi: birinchi javonga 34 ta, ikkinchisiga 25 ta. Direktor so‘radi: «Jami nechta yangi kitob keldi?» Kutubxonachi opa bir zumda javob berdi: «59 ta!» Qanday qilib u buncha tez hisobladi?', 'В школьную библиотеку привезли новые книги. Библиотекарь расставила их на две полки: на первую 34, на вторую 25. Директор спросил: «Сколько всего новых книг?» Библиотекарь мгновенно ответила: «59!» Как она так быстро посчитала?', 'New books arrived at the school library. The librarian put them on two shelves: 34 on the first and 25 on the second. The head teacher asked: “How many new books came in total?” The librarian answered at once: “59!” How did she count so fast?'),
      L('Uning siri oddiy. Kitoblar 10 tadan dastalab bog‘langan edi. Birinchi javonda 3 dasta va 4 ta alohida kitob, ikkinchisida 2 dasta va 5 ta alohida kitob. U avval dastalarni sanadi: 3 + 2 = 5 dasta, ya’ni 50 ta kitob. Keyin alohida kitoblarni: 4 + 5 = 9 ta. Jami: 50 + 9 = 59!', 'Её секрет прост. Книги были связаны пачками по 10. На первой полке 3 пачки и 4 отдельные книги, на второй — 2 пачки и 5 отдельных. Сначала она посчитала пачки: 3 + 2 = 5 пачек, то есть 50 книг. Потом отдельные книги: 4 + 5 = 9. Всего: 50 + 9 = 59!', 'Her secret is simple. The books were tied in bundles of 10. The first shelf had 3 bundles and 4 loose books; the second had 2 bundles and 5 loose books. First she counted the bundles: 3 + 2 = 5 bundles, which is 50 books. Then the loose books: 4 + 5 = 9. Total: 50 + 9 = 59!'),
      L('Bu mavzuda biz xuddi shunday — o‘nliklarni o‘nliklarga, birliklarni birliklarga qo‘shib — ikki xonali sonlarni qo‘shishni o‘rganamiz. Bu usul bilan siz 100 gacha bo‘lgan katta sonlarni ham oson qo‘sha olasiz.', 'В этой теме мы научимся складывать двузначные числа точно так же — десятки с десятками, единицы с единицами. Этим способом ты легко сложишь даже большие числа до 100.', 'In this topic we will learn to add two-digit numbers in exactly this way — tens with tens and ones with ones. With this method you can easily add even big numbers up to 100.')
    ] },
    { kind: 'def', h: L('Qo‘shish va uning qismlari', 'Сложение и его компоненты', 'Addition and its parts'), p: [
      L('34 + 25 = 59 misolida har bir sonning o‘z nomi bor:', 'В примере 34 + 25 = 59 у каждого числа своё название:', 'In 34 + 25 = 59 each number has its own name:')
    ], list: [
      L('<b>34</b> va <b>25</b> — qo‘shiluvchilar (qo‘shiladigan sonlar);', '<b>34</b> и <b>25</b> — слагаемые (числа, которые складываем);', '<b>34</b> and <b>25</b> — the addends (the numbers we add);'),
      L('<b>59</b> — yig‘indi (qo‘shish natijasi).', '<b>59</b> — сумма (результат сложения).', '<b>59</b> — the sum (the result of adding).')
    ], after: [
      L('Ikki xonali sonlarni qo‘shishda biz har bir sonni o‘nlik va birlikka ajratamiz: 34 = 30 + 4, 25 = 20 + 5. Keyin bir xil xonalarni birga qo‘shamiz. Xuddi olmalarni olmalar bilan, nokni nok bilan qo‘shgandek — o‘nliklarni birliklar bilan aralashtirmaymiz!', 'При сложении двузначных чисел мы раскладываем каждое число на десятки и единицы: 34 = 30 + 4, 25 = 20 + 5. Потом складываем одинаковые разряды. Как яблоки с яблоками, а груши с грушами — десятки с единицами не смешиваем!', 'When adding two-digit numbers, we split each number into tens and ones: 34 = 30 + 4, 25 = 20 + 5. Then we add the matching places together. Just like adding apples to apples and pears to pears — we never mix tens with ones!'),
      L('Bu mavzuda biz faqat birliklar yig‘indisi 10 dan oshmaydigan misollarni ko‘ramiz. Masalan, 4 + 5 = 9 — bu 10 dan kam. Bunday qo‘shishni «o‘nlikdan o‘tmasdan qo‘shish» deyishadi.', 'В этой теме мы разберём только примеры, где сумма единиц не больше 9. Например, 4 + 5 = 9 — меньше 10. Такое сложение называют «сложением без перехода через десяток».', 'In this topic we only look at sums where the ones add up to 9 or less. For example, 4 + 5 = 9 — less than 10. This is called “adding without crossing ten”.')
    ] },
    { kind: 'history', h: L('Qo‘shish tarixidan', 'Из истории сложения', 'From the history of addition'), p: [
      L('Odamlar qo‘shishni yozuvdan ham oldin bilishgan. Cho‘ponlar har bir qo‘y uchun xaltaga bitta tosh solib qo‘yishgan. Ikki podani birlashtirganda, ikki xaltadagi toshlarni bir joyga to‘kishgan — mana sizga qo‘shish!', 'Люди умели складывать ещё до появления письменности. Пастухи клали в мешочек по камешку за каждую овцу. Объединяя два стада, высыпали камешки из двух мешочков в один — вот и сложение!', 'People could add before they could write. Shepherds put one pebble in a bag for each sheep. When two flocks were joined, they poured the pebbles from both bags together — and there you have addition!'),
      L('Plyus belgisi (+) lotincha «et» so‘zidan kelib chiqqan, u «va» degan ma’noni bildiradi. Yozuvchilar «et» so‘zini tez-tez yozib, uni qisqartira-qisqartira kichik xochchaga aylantirishgan. Taxminan 500 yil oldin bu belgi kitoblarda paydo bo‘lgan.', 'Знак плюс (+) произошёл от латинского слова «et», что значит «и». Писцы так часто писали «et», что сократили его до маленького крестика. Примерно 500 лет назад этот знак появился в книгах.', 'The plus sign (+) comes from the Latin word “et”, meaning “and”. Scribes wrote “et” so often that they shortened it into a little cross. It appeared in printed books about 500 years ago.'),
      L('<b>Al-Xorazmiy</b> ustun qilib qo‘shish usulini tushuntirgan: o‘nliklar o‘nliklar ostida, birliklar birliklar ostida yoziladi. Bu usul bugun ham butun dunyo maktablarida o‘rgatiladi.', '<b>Аль-Хорезми</b> объяснил способ сложения столбиком: десятки пишутся под десятками, единицы под единицами. Этому способу и сегодня учат в школах всего мира.', '<b>Al-Khwarizmi</b> explained how to add in columns: tens are written under tens and ones under ones. Schools all over the world still teach this method today.')
    ] },
    { kind: 'rule', h: L('Ikki xonali sonlarni qo‘shish qoidasi', 'Правило сложения двузначных чисел', 'The rule for adding two-digit numbers'), p: [
      L('<b>O‘nliklarni o‘nliklarga, birliklarni birliklarga qo‘shamiz. Keyin natijalarni birlashtiramiz.</b>', '<b>Складываем десятки с десятками, единицы с единицами. Потом объединяем результаты.</b>', '<b>Add tens to tens and ones to ones. Then put the results together.</b>'),
      L('34 + 25 = (30 + 20) + (4 + 5) = 50 + 9 = 59', '34 + 25 = (30 + 20) + (4 + 5) = 50 + 9 = 59', '34 + 25 = (30 + 20) + (4 + 5) = 50 + 9 = 59')
    ], list: [
      L('Ikki xonali + ikki xonali: 23 + 45 = (20 + 40) + (3 + 5) = 60 + 8 = 68.', 'Двузначное + двузначное: 23 + 45 = (20 + 40) + (3 + 5) = 60 + 8 = 68.', 'Two-digit + two-digit: 23 + 45 = (20 + 40) + (3 + 5) = 60 + 8 = 68.'),
      L('Ikki xonali + yaxlit: 50 + 34 = 84 (faqat o‘nliklar qo‘shiladi: 5 + 3 = 8).', 'Двузначное + круглое: 50 + 34 = 84 (складываются только десятки: 5 + 3 = 8).', 'Two-digit + round: 50 + 34 = 84 (only the tens are added: 5 + 3 = 8).'),
      L('Ikki xonali + bir xonali: 41 + 6 = 47 (faqat birliklar qo‘shiladi: 1 + 6 = 7).', 'Двузначное + однозначное: 41 + 6 = 47 (складываются только единицы: 1 + 6 = 7).', 'Two-digit + one-digit: 41 + 6 = 47 (only the ones are added: 1 + 6 = 7).')
    ], after: [
      L('Diqqat bilan qarang: bir xonali sonni qo‘shganda o‘nliklar o‘zgarmaydi, yaxlit sonni qo‘shganda esa birliklar o‘zgarmaydi. Bu juda foydali sir!', 'Посмотри внимательно: когда прибавляем однозначное число, десятки не меняются, а когда круглое — не меняются единицы. Это очень полезный секрет!', 'Look carefully: when you add a one-digit number the tens stay the same, and when you add a round number the ones stay the same. That is a very useful secret!')
    ] },
    { kind: 'steps', h: L('Qadamma-qadam: ustun qilib qo‘shamiz', 'Шаг за шагом: складываем столбиком', 'Step by step: adding in columns'), p: [
      L('Sonlarni bir-birining ostiga yozib qo‘shish ham qulay. 52 + 36 ni shunday yechamiz:', 'Удобно складывать, записывая числа друг под другом. Решим так 52 + 36:', 'It is handy to add by writing the numbers one under the other. Let’s do 52 + 36 this way:')
    ], list: [
      L('1-qadam. 52 ni yozing, uning ostiga 36 ni yozing: o‘nliklar o‘nliklar ostida (5 ostida 3), birliklar birliklar ostida (2 ostida 6).', 'Шаг 1. Запиши 52, под ним 36: десятки под десятками (3 под 5), единицы под единицами (6 под 2).', 'Step 1. Write 52 and put 36 under it: tens under tens (3 under 5), ones under ones (6 under 2).'),
      L('2-qadam. O‘ngdan boshlang — birliklarni qo‘shing: 2 + 6 = 8. Birliklar ostiga 8 yozing.', 'Шаг 2. Начни справа — сложи единицы: 2 + 6 = 8. Запиши 8 под единицами.', 'Step 2. Start on the right — add the ones: 2 + 6 = 8. Write 8 under the ones.'),
      L('3-qadam. O‘nliklarni qo‘shing: 5 + 3 = 8. O‘nliklar ostiga 8 yozing.', 'Шаг 3. Сложи десятки: 5 + 3 = 8. Запиши 8 под десятками.', 'Step 3. Add the tens: 5 + 3 = 8. Write 8 under the tens.'),
      L('4-qadam. Javobni o‘qing: <b>88</b>.', 'Шаг 4. Прочитай ответ: <b>88</b>.', 'Step 4. Read the answer: <b>88</b>.')
    ], after: [
      L('Nega o‘ngdan boshlaymiz? Katta sinflarda birliklar yig‘indisi 10 dan oshib ketadigan misollar uchraydi. Shunda ortiqcha o‘nlik o‘nliklar xonasiga o‘tadi. Hozirdanoq to‘g‘ri odatni o‘rganib qo‘yish foydali.', 'Почему начинаем справа? В старших классах встретятся примеры, где сумма единиц больше 10. Тогда лишний десяток переходит в разряд десятков. Полезно уже сейчас привыкнуть к правильному порядку.', 'Why start on the right? In later grades you will meet sums where the ones add up to more than 10. Then the extra ten moves into the tens place. It is good to learn the right habit now.')
    ] },
    { kind: 'example', h: L('Yechilgan namunalar', 'Разобранные примеры', 'Worked examples'), p: [
      L('O‘nliklar — o‘nliklar bilan, birliklar — birliklar bilan!', 'Десятки — с десятками, единицы — с единицами!', 'Tens with tens, ones with ones!')
    ], ex: [
      { q: L('Hisoblang: 23 + 45', 'Вычисли: 23 + 45', 'Work out: 23 + 45'), s: L('O‘nliklar: 20 + 40 = 60. Birliklar: 3 + 5 = 8. Javob: 60 + 8 = <b>68</b>.', 'Десятки: 20 + 40 = 60. Единицы: 3 + 5 = 8. Ответ: 60 + 8 = <b>68</b>.', 'Tens: 20 + 40 = 60. Ones: 3 + 5 = 8. Answer: 60 + 8 = <b>68</b>.') },
      { q: L('Hisoblang: 50 + 34', 'Вычисли: 50 + 34', 'Work out: 50 + 34'), s: L('O‘nliklar: 50 + 30 = 80. Birliklar: 0 + 4 = 4. Javob: <b>84</b>.', 'Десятки: 50 + 30 = 80. Единицы: 0 + 4 = 4. Ответ: <b>84</b>.', 'Tens: 50 + 30 = 80. Ones: 0 + 4 = 4. Answer: <b>84</b>.') },
      { q: L('Hisoblang: 41 + 6', 'Вычисли: 41 + 6', 'Work out: 41 + 6'), s: L('O‘nliklar o‘zgarmaydi: 40. Birliklar: 1 + 6 = 7. Javob: <b>47</b>.', 'Десятки не меняются: 40. Единицы: 1 + 6 = 7. Ответ: <b>47</b>.', 'The tens stay the same: 40. Ones: 1 + 6 = 7. Answer: <b>47</b>.') },
      { q: L('Hisoblang: 62 + 37', 'Вычисли: 62 + 37', 'Work out: 62 + 37'), s: L('O‘nliklar: 60 + 30 = 90. Birliklar: 2 + 7 = 9. Javob: <b>99</b>.', 'Десятки: 60 + 30 = 90. Единицы: 2 + 7 = 9. Ответ: <b>99</b>.', 'Tens: 60 + 30 = 90. Ones: 2 + 7 = 9. Answer: <b>99</b>.') },
      { q: L('Bog‘da 21 tup olma va 16 tup nok daraxti bor. Jami nechta daraxt?', 'В саду 21 яблоня и 16 груш. Сколько всего деревьев?', 'An orchard has 21 apple trees and 16 pear trees. How many trees in all?'), s: L('21 + 16: o‘nliklar 20 + 10 = 30, birliklar 1 + 6 = 7. Javob: <b>37</b> tup daraxt.', '21 + 16: десятки 20 + 10 = 30, единицы 1 + 6 = 7. Ответ: <b>37</b> деревьев.', '21 + 16: tens 20 + 10 = 30, ones 1 + 6 = 7. Answer: <b>37</b> trees.') }
    ] },
    { kind: 'table', h: L('Qo‘shish jadvali', 'Таблица сложения', 'Addition table'), p: [
      L('Har bir misol ikki qismga bo‘lingan: o‘nliklar va birliklar.', 'Каждый пример разбит на две части: десятки и единицы.', 'Each sum is split into two parts: tens and ones.')
    ], table: { head: [L('Misol', 'Пример', 'Sum'), L('O‘nliklar', 'Десятки', 'Tens'), L('Birliklar', 'Единицы', 'Ones'), L('Javob', 'Ответ', 'Answer')], rows: [
      ['34 + 25', '30 + 20 = 50', '4 + 5 = 9', '59'],
      ['12 + 73', '10 + 70 = 80', '2 + 3 = 5', '85'],
      ['45 + 32', '40 + 30 = 70', '5 + 2 = 7', '77'],
      ['26 + 3', '20', '6 + 3 = 9', '29'],
      ['40 + 56', '40 + 50 = 90', '0 + 6 = 6', '96']
    ] }, after: [
      L('Har doim ikkita kichik qo‘shishni bajaramiz — bu katta qo‘shishdan ancha oson!', 'Мы всегда делаем два маленьких сложения — это гораздо проще одного большого!', 'We always do two small additions — much easier than one big one!')
    ] },
    { kind: 'mistake', h: L('Tipik xatolar', 'Типичные ошибки', 'Common mistakes'), p: [
      L('Ikki xonali sonlarni qo‘shishda ehtiyot bo‘ling:', 'При сложении двузначных чисел будь внимателен:', 'Be careful when adding two-digit numbers:')
    ], list: [
      L('<b>O‘nlikni birlikka qo‘shish.</b> 41 + 6 = 101 yoki 41 + 6 = 47 o‘rniga 4 + 6 = 10 deb hisoblash. 6 — bu birlik, u faqat 1 ga qo‘shiladi: 47.', '<b>Прибавлять единицы к десяткам.</b> Считать 41 + 6 как 4 + 6 = 10 и получить 101. 6 — это единицы, их прибавляем только к 1: 47.', '<b>Adding ones to tens.</b> Treating 41 + 6 as 4 + 6 = 10 and getting 101. 6 is ones, so it only adds to the 1: 47.'),
      L('<b>Ustunda noto‘g‘ri yozish.</b> 52 + 6 ni yozganda 6 ni 5 ning ostiga qo‘yish. 6 birliklar ostida, ya’ni 2 ning ostida bo‘lishi kerak.', '<b>Неверно записать столбиком.</b> Записывая 52 + 6, поставить 6 под 5. 6 должно стоять под единицами, то есть под 2.', '<b>Lining up wrongly.</b> Writing 52 + 6 with the 6 under the 5. The 6 must go under the ones, under the 2.'),
      L('<b>Natijalarni yonma-yon yozish.</b> 34 + 25: o‘nliklar 5, birliklar 9 — javob 59. Lekin ba’zilar 50 va 9 ni «509» deb yozadi. Yo‘q: 50 + 9 = 59.', '<b>Записывать результаты рядом.</b> 34 + 25: десятки 5, единицы 9 — ответ 59. Но некоторые пишут 50 и 9 как «509». Нет: 50 + 9 = 59.', '<b>Writing the results side by side.</b> 34 + 25: 5 tens and 9 ones — 59. Some write 50 and 9 as “509”. No: 50 + 9 = 59.'),
      L('<b>Tekshirmaslik.</b> Javobni taxminan tekshiring: 34 + 25 — bu 30 va 20 dan sal ko‘p, ya’ni 50 dan sal ko‘p. 59 — to‘g‘ri ko‘rinadi.', '<b>Не проверять.</b> Прикинь ответ: 34 + 25 — это чуть больше, чем 30 + 20, то есть чуть больше 50. 59 — похоже на правду.', '<b>Not checking.</b> Estimate: 34 + 25 is a bit more than 30 + 20, so a bit more than 50. 59 looks right.')
    ] },
    { kind: 'life', h: L('Hayotda qayerda kerak?', 'Где это нужно в жизни?', 'Where is this used in life?'), p: [
      L('<b>Do‘konda.</b> Siz 32 ming so‘mlik o‘yinchoq va 15 ming so‘mlik kitob oldingiz. Jami: 30 + 10 = 40, 2 + 5 = 7, ya’ni 47 ming so‘m. Kassaga borishdan oldin hisoblab qo‘yish juda foydali!', '<b>В магазине.</b> Ты купил игрушку за 32 тысячи и книгу за 15 тысяч. Всего: 30 + 10 = 40, 2 + 5 = 7, то есть 47 тысяч. Очень полезно посчитать заранее, ещё до кассы!', '<b>At the shop.</b> You buy a toy for 32 thousand and a book for 15 thousand. Total: 30 + 10 = 40, 2 + 5 = 7, so 47 thousand. It is very useful to work it out before you reach the till!'),
      L('<b>Maktabda.</b> 1«A» sinfida 26 ta, 1«B» sinfida 23 ta o‘quvchi bor. Ikkala sinf birga sayohatga chiqsa — 49 ta o‘quvchi. Avtobusda shuncha joy bo‘lishi kerak.', '<b>В школе.</b> В 1 «А» 26 учеников, в 1 «Б» 23. Если оба класса едут на экскурсию — 49 учеников. В автобусе должно быть столько мест.', '<b>At school.</b> Class 1A has 26 pupils and 1B has 23. If both classes go on a trip, that is 49 pupils. The bus needs that many seats.'),
      L('<b>Oshxonada.</b> Onangiz 40 ta chuchvara tugdi, buvingiz yana 35 ta. Jami 75 ta chuchvara — butun oilaga yetadi!', '<b>На кухне.</b> Мама слепила 40 чучвары, бабушка ещё 35. Всего 75 штук — хватит на всю семью!', '<b>In the kitchen.</b> Mum made 40 dumplings and Grandma made 35 more. 75 dumplings in all — enough for the whole family!'),
      L('<b>Sportda.</b> Birinchi kuni 24 marta, ikkinchi kuni 31 marta arqondan sakradingiz. Ikki kunda 55 marta!', '<b>В спорте.</b> В первый день ты прыгнул через скакалку 24 раза, во второй — 31. За два дня — 55 раз!', '<b>In sport.</b> You skipped 24 times on day one and 31 times on day two. That is 55 times in two days!')
    ] },
    { kind: 'fact', h: L('Qiziqarli faktlar', 'Интересные факты', 'Fun facts'), list: [
      L('Odam tanasida 32 ta doimiy tish bo‘ladi. Agar unga bolalikdagi 20 ta sut tishini qo‘shsak, odam umri davomida 52 ta tishga ega bo‘ladi!', 'У взрослого человека 32 постоянных зуба. Если прибавить 20 молочных, за жизнь у человека бывает 52 зуба!', 'An adult has 32 permanent teeth. Add the 20 baby teeth and a person has 52 teeth in a lifetime!'),
      L('Futbol maydonida ikki jamoa — har birida 11 tadan o‘yinchi. 11 + 11 = 22 ta o‘yinchi to‘p ortidan yuguradi.', 'На футбольном поле две команды по 11 игроков. 11 + 11 = 22 игрока бегут за мячом.', 'On a football pitch there are two teams of 11 players. 11 + 11 = 22 players chase the ball.'),
      L('Arabcha alifboda 28 ta harf, lotin yozuvidagi o‘zbek alifbosida esa 29 ta harf bor.', 'В арабском алфавите 28 букв, а в узбекском латинском алфавите — 29.', 'The Arabic alphabet has 28 letters and the Uzbek Latin alphabet has 29.'),
      L('Kompyuterlar ham qo‘shishni aynan shunday — xonama-xona bajaradi, faqat juda tez: sekundiga milliardlab marta!', 'Компьютеры тоже складывают поразрядно, только очень быстро — миллиарды раз в секунду!', 'Computers add place by place in the same way, only very fast — billions of times a second!')
    ] },
    { kind: 'practice', h: L('O‘ylab ko‘ring', 'Подумай', 'Think about it'), p: [
      L('O‘nliklarni o‘nliklarga, birliklarni birliklarga qo‘shing.', 'Складывай десятки с десятками, единицы с единицами.', 'Add tens to tens and ones to ones.')
    ], list: [
      L('Hisoblang: 31 + 47, 60 + 25, 72 + 5.', 'Вычисли: 31 + 47, 60 + 25, 72 + 5.', 'Work out: 31 + 47, 60 + 25, 72 + 5.'),
      L('Qaysi son 43 ga qo‘shilsa, 68 hosil bo‘ladi?', 'Какое число надо прибавить к 43, чтобы получить 68?', 'What number added to 43 gives 68?'),
      L('Ikki xonali ikkita son o‘ylang, ularning yig‘indisi 99 bo‘lsin.', 'Придумай два двузначных числа, сумма которых 99.', 'Think of two two-digit numbers that add up to 99.'),
      L('Oilangizdagi ikki kishining yoshini qo‘shing.', 'Сложи возраст двух членов своей семьи.', 'Add the ages of two people in your family.')
    ], after: [
      L('Javoblar: 1) 78, 85, 77; 2) 25 (chunki 40 + 20 = 60, 3 + 5 = 8); 3) masalan, 45 + 54 yoki 23 + 76.', 'Ответы: 1) 78, 85, 77; 2) 25 (так как 40 + 20 = 60, 3 + 5 = 8); 3) например, 45 + 54 или 23 + 76.', 'Answers: 1) 78, 85, 77; 2) 25 (because 40 + 20 = 60 and 3 + 5 = 8); 3) for example 45 + 54 or 23 + 76.')
    ] },
    { kind: 'summary', h: L('Xulosa', 'Итог', 'Summary'), list: [
      L('Qo‘shiluvchi + qo‘shiluvchi = yig‘indi.', 'Слагаемое + слагаемое = сумма.', 'Addend + addend = sum.'),
      L('<b>O‘nliklar o‘nliklarga, birliklar birliklarga</b> qo‘shiladi.', '<b>Десятки складываем с десятками, единицы с единицами.</b>', '<b>Tens add to tens, ones add to ones.</b>'),
      L('34 + 25 = (30 + 20) + (4 + 5) = 59.', '34 + 25 = (30 + 20) + (4 + 5) = 59.', '34 + 25 = (30 + 20) + (4 + 5) = 59.'),
      L('Bir xonali son qo‘shilsa — o‘nliklar o‘zgarmaydi; yaxlit son qo‘shilsa — birliklar o‘zgarmaydi.', 'Прибавляем однозначное — десятки не меняются; круглое — единицы не меняются.', 'Add a one-digit number and the tens stay the same; add a round number and the ones stay the same.'),
      L('Ustunda: o‘nliklar o‘nliklar ostida, birliklar birliklar ostida; o‘ngdan boshlaymiz.', 'Столбиком: десятки под десятками, единицы под единицами; начинаем справа.', 'In columns: tens under tens, ones under ones; start on the right.'),
      L('Javobni taxminan tekshiring.', 'Прикидывай ответ.', 'Estimate to check your answer.')
    ] }
  ] });

  // ---------- t12. Ikki xonali sonlarni ayirish ----------
  T.add(P, 't12', { sections: [
    { kind: 'intro', h: L('Bog‘dagi daraxtlar', 'Деревья в саду', 'Trees in the orchard'), p: [
      L('Bobomning katta bog‘i bor. Unda 58 tup daraxt o‘sadi. Ulardan 23 tupi olma, qolganlari o‘rik. Men bobomdan so‘radim: «Bobojon, o‘rik daraxtlari nechta?» Bobom: «Keling, birga hisoblaymiz», — dedi va yerga tayoqcha bilan yozdi.', 'У моего дедушки большой сад. В нём растут 58 деревьев. Из них 23 — яблони, остальные — абрикосы. Я спросил дедушку: «Дедушка, а сколько абрикосовых деревьев?» Дедушка сказал: «Давай посчитаем вместе» — и написал палочкой на земле.', 'My grandpa has a big orchard. 58 trees grow there. 23 of them are apple trees and the rest are apricots. I asked: “Grandpa, how many apricot trees are there?” Grandpa said, “Let’s work it out together,” and wrote with a stick on the ground.'),
      L('«58 — bu 5 o‘nlik va 8 birlik. 23 — bu 2 o‘nlik va 3 birlik. O‘nliklardan o‘nliklarni ayiramiz: 5 − 2 = 3 o‘nlik. Birliklardan birliklarni: 8 − 3 = 5 birlik. Demak, 35 tup o‘rik!» Bobomning usuli juda oson ekan!', '«58 — это 5 десятков и 8 единиц. 23 — это 2 десятка и 3 единицы. Из десятков вычитаем десятки: 5 − 2 = 3 десятка. Из единиц единицы: 8 − 3 = 5 единиц. Значит, 35 абрикосов!» Дедушкин способ оказался очень простым!', '“58 is 5 tens and 8 ones. 23 is 2 tens and 3 ones. Take tens from tens: 5 − 2 = 3 tens. Take ones from ones: 8 − 3 = 5 ones. So there are 35 apricot trees!” Grandpa’s method turned out to be very easy!'),
      L('Bu mavzuda biz ikki xonali sonlarni xuddi shu usulda ayirishni o‘rganamiz. Agar siz qo‘shishni yaxshi o‘zlashtirgan bo‘lsangiz, ayirish ham juda oson bo‘ladi — qoida deyarli bir xil!', 'В этой теме мы научимся вычитать двузначные числа этим же способом. Если ты хорошо освоил сложение, вычитание тоже будет очень лёгким — правило почти такое же!', 'In this topic we will learn to subtract two-digit numbers the same way. If you have mastered adding, subtracting will be easy too — the rule is almost the same!')
    ] },
    { kind: 'def', h: L('Ayirish va uning qismlari', 'Вычитание и его компоненты', 'Subtraction and its parts'), p: [
      L('58 − 23 = 35 misolida:', 'В примере 58 − 23 = 35:', 'In 58 − 23 = 35:')
    ], list: [
      L('<b>58</b> — kamayuvchi (undan ayiramiz);', '<b>58</b> — уменьшаемое (из него вычитаем);', '<b>58</b> — the number we start with;'),
      L('<b>23</b> — ayriluvchi (shuncha olib tashlaymiz);', '<b>23</b> — вычитаемое (столько отнимаем);', '<b>23</b> — the number we take away;'),
      L('<b>35</b> — ayirma (qolgani).', '<b>35</b> — разность (то, что осталось).', '<b>35</b> — the difference (what is left).')
    ], after: [
      L('Ayirishda ham har bir sonni o‘nlik va birlikka ajratamiz: 58 = 50 + 8, 23 = 20 + 3. Keyin o‘nliklardan o‘nliklarni, birliklardan birliklarni ayiramiz.', 'При вычитании тоже раскладываем каждое число на десятки и единицы: 58 = 50 + 8, 23 = 20 + 3. Потом из десятков вычитаем десятки, из единиц — единицы.', 'In subtraction we also split each number into tens and ones: 58 = 50 + 8, 23 = 20 + 3. Then we take tens from tens and ones from ones.'),
      L('Bu mavzuda kamayuvchining birliklari ayriluvchining birliklaridan kam bo‘lmagan misollarni ko‘ramiz. Masalan, 58 − 23 da 8 ≥ 3. Bunday ayirishni «o‘nlikdan o‘tmasdan ayirish» deyishadi.', 'В этой теме мы разберём примеры, где единиц в уменьшаемом не меньше, чем в вычитаемом. Например, в 58 − 23: 8 ≥ 3. Такое вычитание называют «вычитанием без перехода через десяток».', 'In this topic we only look at sums where the first number has at least as many ones as the second. For example, in 58 − 23: 8 ≥ 3. This is called “subtracting without crossing ten”.')
    ] },
    { kind: 'history', h: L('Ayirish va qaytim tarixi', 'История вычитания и сдачи', 'The story of subtraction and change'), p: [
      L('Qadimgi Xitoyda, 2 ming yildan ko‘proq vaqt oldin, olimlar hisoblash uchun maxsus tayoqchalardan foydalanishgan. Qizil tayoqchalar qo‘shiladigan sonlarni, qora tayoqchalar esa ayiriladigan sonlarni bildirgan. Ular bu tayoqchalarni stolga o‘nliklar va birliklar bo‘yicha alohida terishgan.', 'В Древнем Китае, более 2 тысяч лет назад, учёные считали с помощью особых палочек. Красные палочки обозначали прибавляемые числа, а чёрные — вычитаемые. Их раскладывали на столе отдельно по десяткам и единицам.', 'In ancient China, more than 2 000 years ago, scholars counted with special rods. Red rods stood for numbers to add and black rods for numbers to take away. They laid the rods out on a table separately by tens and ones.'),
      L('Buyuk Ipak yo‘lidagi savdogarlar — Samarqand, Buxoro va Xivada — har kuni qaytim hisoblashardi. Ular ayirishni juda tez bajarishgan, chunki xatoga yo‘l qo‘ysa, pul yo‘qotishardi!', 'Купцы на Великом шёлковом пути — в Самарканде, Бухаре и Хиве — каждый день считали сдачу. Вычитали они очень быстро, ведь ошибка стоила денег!', 'Merchants on the Great Silk Road — in Samarkand, Bukhara and Khiva — counted change every day. They subtracted very quickly, because a mistake cost them money!'),
      L('<b>Al-Xorazmiy</b> o‘z kitobida ayirishni ham xonalar bo‘yicha bajarishni o‘rgatgan: birliklardan birliklar, o‘nliklardan o‘nliklar. Bu qoida 1200 yildan beri o‘zgarmagan!', '<b>Аль-Хорезми</b> в своей книге учил вычитать тоже по разрядам: единицы из единиц, десятки из десятков. Это правило не меняется уже 1200 лет!', '<b>Al-Khwarizmi</b> taught in his book to subtract place by place as well: ones from ones, tens from tens. That rule has not changed for 1 200 years!')
    ] },
    { kind: 'rule', h: L('Ikki xonali sonlarni ayirish qoidasi', 'Правило вычитания двузначных чисел', 'The rule for subtracting two-digit numbers'), p: [
      L('<b>O‘nliklardan o‘nliklarni, birliklardan birliklarni ayiramiz. Keyin natijalarni birlashtiramiz.</b>', '<b>Из десятков вычитаем десятки, из единиц — единицы. Потом объединяем результаты.</b>', '<b>Take tens from tens and ones from ones. Then put the results together.</b>'),
      L('58 − 23 = (50 − 20) + (8 − 3) = 30 + 5 = 35', '58 − 23 = (50 − 20) + (8 − 3) = 30 + 5 = 35', '58 − 23 = (50 − 20) + (8 − 3) = 30 + 5 = 35')
    ], list: [
      L('Ikki xonalidan ikki xonali: 76 − 24 = (70 − 20) + (6 − 4) = 50 + 2 = 52.', 'Двузначное минус двузначное: 76 − 24 = (70 − 20) + (6 − 4) = 50 + 2 = 52.', 'Two-digit minus two-digit: 76 − 24 = (70 − 20) + (6 − 4) = 50 + 2 = 52.'),
      L('Yaxlit sonni ayirish: 87 − 30 = 57 (faqat o‘nliklar: 8 − 3 = 5).', 'Вычитание круглого числа: 87 − 30 = 57 (только десятки: 8 − 3 = 5).', 'Taking a round number: 87 − 30 = 57 (tens only: 8 − 3 = 5).'),
      L('Bir xonali sonni ayirish: 68 − 5 = 63 (faqat birliklar: 8 − 5 = 3).', 'Вычитание однозначного: 68 − 5 = 63 (только единицы: 8 − 5 = 3).', 'Taking a one-digit number: 68 − 5 = 63 (ones only: 8 − 5 = 3).')
    ], after: [
      L('Javobni qo‘shish bilan tekshiramiz: ayirma + ayriluvchi = kamayuvchi. 35 + 23 = 58. To‘g‘ri! Qo‘shish va ayirish — aka-uka kabi bir-birini tekshirib turadi.', 'Ответ проверяем сложением: разность + вычитаемое = уменьшаемое. 35 + 23 = 58. Верно! Сложение и вычитание, как братья, проверяют друг друга.', 'Check the answer by adding: difference + number taken away = starting number. 35 + 23 = 58. Correct! Like brothers, addition and subtraction check each other.')
    ] },
    { kind: 'steps', h: L('Qadamma-qadam: ustun qilib ayiramiz', 'Шаг за шагом: вычитаем столбиком', 'Step by step: subtracting in columns'), p: [
      L('79 − 46 ni ustun qilib yechamiz:', 'Решим 79 − 46 столбиком:', 'Let’s work out 79 − 46 in columns:')
    ], list: [
      L('1-qadam. 79 ni yozing, ostiga 46 ni yozing: o‘nliklar o‘nliklar ostida, birliklar birliklar ostida.', 'Шаг 1. Запиши 79, под ним 46: десятки под десятками, единицы под единицами.', 'Step 1. Write 79 and put 46 under it: tens under tens, ones under ones.'),
      L('2-qadam. O‘ngdan boshlang — birliklar: 9 − 6 = 3.', 'Шаг 2. Начни справа — единицы: 9 − 6 = 3.', 'Step 2. Start on the right — ones: 9 − 6 = 3.'),
      L('3-qadam. O‘nliklar: 7 − 4 = 3.', 'Шаг 3. Десятки: 7 − 4 = 3.', 'Step 3. Tens: 7 − 4 = 3.'),
      L('4-qadam. Javob: <b>33</b>. Tekshiruv: 33 + 46 = 79.', 'Шаг 4. Ответ: <b>33</b>. Проверка: 33 + 46 = 79.', 'Step 4. Answer: <b>33</b>. Check: 33 + 46 = 79.')
    ], after: [
      L('Ayirishda tartib muhim: doim kattaroq sondan (kamayuvchidan) ayiramiz. Ustunda kamayuvchi tepada, ayriluvchi pastda turadi.', 'В вычитании важен порядок: всегда вычитаем из большего числа (уменьшаемого). Столбиком уменьшаемое пишем сверху, вычитаемое — снизу.', 'Order matters in subtraction: we always take away from the bigger number (the starting number). In columns, the starting number goes on top and the number taken away underneath.'),
      L('Buni tayoqcha va kubchalar bilan ham ko‘rsatish mumkin. Stolga 7 ta tayoqcha va 9 ta kubcha qo‘ying — bu 79. Endi 4 ta tayoqchani va 6 ta kubchani olib tashlang. Stolda 3 ta tayoqcha va 3 ta kubcha qoladi — bu 33. Qo‘lingiz bilan bajarsangiz, qoida yanada tushunarli bo‘ladi!', 'Это можно показать и на палочках с кубиками. Положи на стол 7 палочек и 9 кубиков — это 79. Теперь убери 4 палочки и 6 кубиков. На столе останется 3 палочки и 3 кубика — это 33. Когда делаешь руками, правило становится ещё понятнее!', 'You can show this with rods and cubes too. Put 7 rods and 9 cubes on the table — that is 79. Now remove 4 rods and 6 cubes. 3 rods and 3 cubes are left — that is 33. When you do it with your hands, the rule becomes even clearer!')
    ] },
    { kind: 'example', h: L('Yechilgan namunalar', 'Разобранные примеры', 'Worked examples'), p: [
      L('O‘nliklardan o‘nliklar, birliklardan birliklar!', 'Десятки из десятков, единицы из единиц!', 'Tens from tens, ones from ones!')
    ], ex: [
      { q: L('Hisoblang: 76 − 24', 'Вычисли: 76 − 24', 'Work out: 76 − 24'), s: L('O‘nliklar: 70 − 20 = 50. Birliklar: 6 − 4 = 2. Javob: <b>52</b>.', 'Десятки: 70 − 20 = 50. Единицы: 6 − 4 = 2. Ответ: <b>52</b>.', 'Tens: 70 − 20 = 50. Ones: 6 − 4 = 2. Answer: <b>52</b>.') },
      { q: L('Hisoblang: 90 − 40', 'Вычисли: 90 − 40', 'Work out: 90 − 40'), s: L('9 o‘nlik − 4 o‘nlik = 5 o‘nlik = <b>50</b>.', '9 десятков − 4 десятка = 5 десятков = <b>50</b>.', '9 tens − 4 tens = 5 tens = <b>50</b>.') },
      { q: L('Hisoblang: 68 − 5', 'Вычисли: 68 − 5', 'Work out: 68 − 5'), s: L('O‘nliklar o‘zgarmaydi: 60. Birliklar: 8 − 5 = 3. Javob: <b>63</b>.', 'Десятки не меняются: 60. Единицы: 8 − 5 = 3. Ответ: <b>63</b>.', 'The tens stay the same: 60. Ones: 8 − 5 = 3. Answer: <b>63</b>.') },
      { q: L('Hisoblang: 47 − 47', 'Вычисли: 47 − 47', 'Work out: 47 − 47'), s: L('Sondan o‘zini ayirsak, hech narsa qolmaydi: <b>0</b>.', 'Если из числа вычесть его само, ничего не останется: <b>0</b>.', 'Take a number away from itself and nothing is left: <b>0</b>.') },
      { q: L('Avtobusda 45 kishi bor edi. Bekatda 21 kishi tushdi. Nechta kishi qoldi?', 'В автобусе было 45 человек. На остановке вышли 21. Сколько осталось?', 'A bus had 45 people. 21 got off at a stop. How many are left?'), s: L('45 − 21: o‘nliklar 40 − 20 = 20, birliklar 5 − 1 = 4. Javob: <b>24</b> kishi.', '45 − 21: десятки 40 − 20 = 20, единицы 5 − 1 = 4. Ответ: <b>24</b> человека.', '45 − 21: tens 40 − 20 = 20, ones 5 − 1 = 4. Answer: <b>24</b> people.') }
    ] },
    { kind: 'table', h: L('Ayirish jadvali', 'Таблица вычитания', 'Subtraction table'), p: [
      L('Har bir misol o‘nliklar va birliklarga bo‘lingan.', 'Каждый пример разбит на десятки и единицы.', 'Each sum is split into tens and ones.')
    ], table: { head: [L('Misol', 'Пример', 'Sum'), L('O‘nliklar', 'Десятки', 'Tens'), L('Birliklar', 'Единицы', 'Ones'), L('Javob', 'Ответ', 'Answer')], rows: [
      ['58 − 23', '50 − 20 = 30', '8 − 3 = 5', '35'],
      ['97 − 52', '90 − 50 = 40', '7 − 2 = 5', '45'],
      ['84 − 31', '80 − 30 = 50', '4 − 1 = 3', '53'],
      ['69 − 7', '60', '9 − 7 = 2', '62'],
      ['75 − 40', '70 − 40 = 30', '5', '35']
    ] }, after: [
      L('Har bir qatorni qo‘shish bilan tekshirib ko‘ring: masalan, 45 + 52 = 97.', 'Проверь каждую строку сложением: например, 45 + 52 = 97.', 'Check each row by adding: for example, 45 + 52 = 97.')
    ] },
    { kind: 'mistake', h: L('Tipik xatolar', 'Типичные ошибки', 'Common mistakes'), p: [
      L('Ayirishda mana bu xatolarga ehtiyot bo‘ling:', 'При вычитании остерегайся таких ошибок:', 'Watch out for these mistakes when subtracting:')
    ], list: [
      L('<b>Birliklarni o‘nliklardan ayirish.</b> 68 − 5 = 18 (6 − 5 = 1 deb). Yo‘q! 5 — birlik, uni 8 dan ayiramiz: 63.', '<b>Вычитать единицы из десятков.</b> 68 − 5 = 18 (считая 6 − 5 = 1). Нет! 5 — единицы, вычитаем их из 8: 63.', '<b>Taking ones from the tens.</b> 68 − 5 = 18 (doing 6 − 5 = 1). No! 5 is ones, so take it from the 8: 63.'),
      L('<b>Ayirish o‘rniga qo‘shish.</b> 76 − 24 = 100 deb yozish. Belgiga diqqat bilan qarang!', '<b>Сложить вместо вычитания.</b> Написать 76 − 24 = 100. Внимательно смотри на знак!', '<b>Adding instead of subtracting.</b> Writing 76 − 24 = 100. Look carefully at the sign!'),
      L('<b>Kichikdan kattani ayirish.</b> 58 − 23 da birliklarni «3 − 8» deb hisoblash. Doim kamayuvchining raqamidan ayiramiz: 8 − 3.', '<b>Вычитать большее из меньшего.</b> В 58 − 23 считать единицы как «3 − 8». Всегда вычитаем из цифры уменьшаемого: 8 − 3.', '<b>Taking the bigger from the smaller.</b> In 58 − 23, working out the ones as “3 − 8”. Always subtract from the top number’s digit: 8 − 3.'),
      L('<b>Nolni unutish.</b> 90 − 40 = 5 deb yozish. 5 o‘nlik — bu 50.', '<b>Забыть ноль.</b> Написать 90 − 40 = 5. 5 десятков — это 50.', '<b>Forgetting the zero.</b> Writing 90 − 40 = 5. 5 tens is 50.')
    ] },
    { kind: 'life', h: L('Hayotda qayerda kerak?', 'Где это нужно в жизни?', 'Where is this used in life?'), p: [
      L('<b>Do‘konda.</b> Sizda 50 ming so‘m bor, 35 ming so‘mlik koptok oldingiz. Qaytim: 50 − 35 = 15 ming so‘m. Sotuvchi to‘g‘ri qaytim berganini o‘zingiz tekshira olasiz!', '<b>В магазине.</b> У тебя 50 тысяч сумов, ты купил мяч за 35 тысяч. Сдача: 50 − 35 = 15 тысяч. Ты сам можешь проверить, правильно ли дали сдачу!', '<b>At the shop.</b> You have 50 thousand sum and buy a ball for 35 thousand. Change: 50 − 35 = 15 thousand. You can check for yourself that the change is right!'),
      L('<b>Kitob o‘qishda.</b> Kitobda 86 sahifa bor, siz 42 sahifani o‘qidingiz. Yana 86 − 42 = 44 sahifa qoldi.', '<b>При чтении.</b> В книге 86 страниц, ты прочитал 42. Осталось ещё 86 − 42 = 44 страницы.', '<b>Reading.</b> A book has 86 pages and you have read 42. There are 86 − 42 = 44 pages left.'),
      L('<b>Yoshda.</b> Bobongiz 75 yoshda, siz 7 yoshdasiz. Bobongiz sizdan 75 − 7 = 68 yosh katta.', '<b>С возрастом.</b> Дедушке 75 лет, тебе 7. Дедушка старше тебя на 75 − 7 = 68 лет.', '<b>With ages.</b> Grandpa is 75 and you are 7. Grandpa is 75 − 7 = 68 years older than you.'),
      L('<b>Ob-havoda.</b> Kunduzi 28 daraja, kechasi 15 daraja. Farq: 28 − 15 = 13 daraja. Kechasi issiq kiyim kerak!', '<b>В погоде.</b> Днём 28 градусов, ночью 15. Разница: 28 − 15 = 13 градусов. Ночью нужна тёплая одежда!', '<b>Weather.</b> 28 degrees by day, 15 at night. The difference: 28 − 15 = 13 degrees. You need warm clothes at night!')
    ] },
    { kind: 'fact', h: L('Qiziqarli faktlar', 'Интересные факты', 'Fun facts'), list: [
      L('Fil bolasi tug‘ilganda taxminan 90 kg keladi, kattalar esa 5000 kg dan ham og‘ir bo‘ladi. Fil har kuni 100 kg dan ortiq o‘t yeydi!', 'Слонёнок при рождении весит около 90 кг, а взрослые слоны — больше 5000 кг. Слон каждый день съедает больше 100 кг травы!', 'A baby elephant weighs about 90 kg at birth, and adults weigh over 5 000 kg. An elephant eats more than 100 kg of grass every day!'),
      L('To‘lin oy taxminan har 29–30 kunda bir marta takrorlanadi. Agar oxirgi to‘lin oydan beri 12 kun o‘tgan bo‘lsa, keyingisigacha taxminan 30 − 12 = 18 kun qolganini ayirish orqali topish mumkin.', 'Полнолуние повторяется примерно каждые 29–30 дней. Если с последнего полнолуния прошло 12 дней, то до следующего осталось около 30 − 12 = 18 дней — это находим вычитанием.', 'A full moon comes round about every 29–30 days. If 12 days have passed since the last one, about 30 − 12 = 18 days are left until the next — we find that by subtracting.'),
      L('Toshkent teleminorasining balandligi 375 metr. Bu O‘rta Osiyodagi eng baland inshootlardan biri!', 'Высота Ташкентской телебашни — 375 метров. Это одно из самых высоких сооружений Средней Азии!', 'The Tashkent TV Tower is 375 metres tall. It is one of the tallest structures in Central Asia!'),
      L('Ayirish natijasi 0 ham bo‘lishi mumkin: 47 − 47 = 0. Nolni hindistonlik olimlar o‘ylab topishgan, al-Xorazmiy esa uni dunyoga tanitgan.', 'Разность может быть и нулём: 47 − 47 = 0. Ноль придумали индийские учёные, а аль-Хорезми рассказал о нём миру.', 'A difference can be zero: 47 − 47 = 0. Indian scholars invented zero, and al-Khwarizmi told the world about it.')
    ] },
    { kind: 'practice', h: L('O‘ylab ko‘ring', 'Подумай', 'Think about it'), p: [
      L('Javobni har doim qo‘shish bilan tekshiring.', 'Всегда проверяй ответ сложением.', 'Always check your answer by adding.')
    ], list: [
      L('Hisoblang: 87 − 53, 60 − 20, 49 − 6.', 'Вычисли: 87 − 53, 60 − 20, 49 − 6.', 'Work out: 87 − 53, 60 − 20, 49 − 6.'),
      L('Qaysi sonni 95 dan ayirsak, 61 qoladi?', 'Какое число надо вычесть из 95, чтобы осталось 61?', 'What number taken from 95 leaves 61?'),
      L('34 + 25 = 59 bo‘lsa, 59 − 25 nechaga teng? Hisoblamasdan ayting!', 'Если 34 + 25 = 59, то чему равно 59 − 25? Скажи, не вычисляя!', 'If 34 + 25 = 59, what is 59 − 25? Say it without working it out!'),
      L('Uyingizdagi biror narsaning narxi va sizdagi puldan masala tuzing.', 'Составь задачу о цене какой-нибудь вещи дома и о твоих деньгах.', 'Make up a problem about the price of something at home and the money you have.')
    ], after: [
      L('Javoblar: 1) 34, 40, 43; 2) 34; 3) 34 — chunki qo‘shish va ayirish bog‘langan!', 'Ответы: 1) 34, 40, 43; 2) 34; 3) 34 — потому что сложение и вычитание связаны!', 'Answers: 1) 34, 40, 43; 2) 34; 3) 34 — because adding and subtracting are linked!')
    ] },
    { kind: 'summary', h: L('Xulosa', 'Итог', 'Summary'), list: [
      L('Kamayuvchi − ayriluvchi = ayirma.', 'Уменьшаемое − вычитаемое = разность.', 'Starting number − number taken away = difference.'),
      L('<b>O‘nliklardan o‘nliklar, birliklardan birliklar</b> ayiriladi.', '<b>Десятки вычитаем из десятков, единицы из единиц.</b>', '<b>Take tens from tens and ones from ones.</b>'),
      L('58 − 23 = (50 − 20) + (8 − 3) = 35.', '58 − 23 = (50 − 20) + (8 − 3) = 35.', '58 − 23 = (50 − 20) + (8 − 3) = 35.'),
      L('Bir xonali son ayirilsa — o‘nliklar o‘zgarmaydi; yaxlit son ayirilsa — birliklar o‘zgarmaydi.', 'Вычитаем однозначное — десятки не меняются; круглое — единицы не меняются.', 'Take away a one-digit number and the tens stay the same; take away a round number and the ones stay the same.'),
      L('Ustunda kamayuvchi tepada, ayriluvchi pastda; o‘ngdan boshlaymiz.', 'Столбиком уменьшаемое сверху, вычитаемое снизу; начинаем справа.', 'In columns, the starting number is on top; start on the right.'),
      L('Tekshiruv: ayirma + ayriluvchi = kamayuvchi.', 'Проверка: разность + вычитаемое = уменьшаемое.', 'Check: difference + number taken away = starting number.')
    ] }
  ] });
})(this);
(function (root) {
  'use strict';
  var L = root.NMCurriculum.H.L, T = root.NMTheory, P = '1-2';

  // ---------- t13. Qo'shish va ayirish bog'lanishi. Guruhlash xossasi ----------
  T.add(P, 't13', { sections: [
    { kind: 'intro', h: L('Aqlli hisobchi', 'Умный счетовод', 'The clever counter'), p: [
      L('Kamola onasiga bozorda yordam berdi. Ular uchta savatga meva solishdi: birinchisiga 3 ta anor, ikkinchisiga 8 ta nok, uchinchisiga 7 ta shaftoli. «Jami nechta meva?» — so‘radi onasi. Kamola o‘yladi: «3 + 8 — bu 11, keyin 11 + 7 … biroz qiyin». Keyin u kulib yubordi: «Shoshmang! 3 va 7 — bu 10! 10 + 8 = 18!»', 'Камола помогала маме на базаре. Они разложили фрукты в три корзины: в первую 3 граната, во вторую 8 груш, в третью 7 персиков. «Сколько всего фруктов?» — спросила мама. Камола подумала: «3 + 8 — это 11, потом 11 + 7 … немного сложно». А потом засмеялась: «Подождите! 3 и 7 — это 10! 10 + 8 = 18!»', 'Kamola was helping her mother at the market. They put fruit into three baskets: 3 pomegranates in the first, 8 pears in the second and 7 peaches in the third. “How many pieces of fruit in all?” asked Mum. Kamola thought: “3 + 8 is 11, then 11 + 7 … that’s a bit hard.” Then she laughed: “Wait! 3 and 7 make 10! 10 + 8 = 18!”'),
      L('Kamola juda aqlli ish qildi: u sonlarni qulay qilib <b>guruhladi</b>. Sonlarni qaysi tartibda qo‘shsak ham, yig‘indi o‘zgarmaydi — shuning uchun avval «do‘st» sonlarni, ya’ni birga 10 beradigan sonlarni qo‘shish mumkin.', 'Камола поступила очень умно: она удобно <b>сгруппировала</b> числа. В каком порядке ни складывай, сумма не меняется, поэтому можно сначала сложить числа-«друзья», которые вместе дают 10.', 'Kamola did something very clever: she <b>grouped</b> the numbers in a handy way. Whatever order we add in, the sum stays the same — so we can first add the “friendly” numbers that make 10 together.'),
      L('Bu mavzuda biz ikkita muhim narsani o‘rganamiz: qo‘shish va ayirish bir-biri bilan qanday bog‘langanini va bir nechta sonni qulay usulda qo‘shishni.', 'В этой теме мы узнаем две важные вещи: как связаны сложение и вычитание и как удобно складывать несколько чисел.', 'In this topic we will learn two important things: how addition and subtraction are linked, and how to add several numbers the smart way.')
    ] },
    { kind: 'def', h: L('Asosiy tushunchalar', 'Основные понятия', 'Key ideas'), p: [
      L('<b>Qo‘shish va ayirish bog‘lanishi.</b> Agar ikki sonni qo‘shib yig‘indi topsak, yig‘indidan bitta qo‘shiluvchini ayirsak, ikkinchi qo‘shiluvchi chiqadi. Qo‘shish va ayirish — bir-birining teskarisi.', '<b>Связь сложения и вычитания.</b> Если из суммы двух чисел вычесть одно слагаемое, получится другое слагаемое. Сложение и вычитание — обратные действия.', '<b>Addition and subtraction are linked.</b> If you take one addend away from a sum, you get the other addend. Addition and subtraction undo each other.'),
      L('<b>Guruhlash xossasi.</b> Uchta sonni qo‘shganda, avval qaysi ikkitasini qo‘shishimiz muhim emas — yig‘indi bir xil chiqadi.', '<b>Сочетательное свойство.</b> Складывая три числа, неважно, какие два сложить первыми, — сумма получится одна и та же.', '<b>The grouping (associative) property.</b> When adding three numbers, it does not matter which two you add first — the sum is the same.')
    ], list: [
      L('35 + 12 = 47, demak 47 − 12 = 35 va 47 − 35 = 12.', '35 + 12 = 47, значит 47 − 12 = 35 и 47 − 35 = 12.', '35 + 12 = 47, so 47 − 12 = 35 and 47 − 35 = 12.'),
      L('(2 + 8) + 5 = 2 + (8 + 5) = 15.', '(2 + 8) + 5 = 2 + (8 + 5) = 15.', '(2 + 8) + 5 = 2 + (8 + 5) = 15.'),
      L('Harflar bilan: <b>(a + b) + c = a + (b + c)</b>.', 'Буквами: <b>(a + b) + c = a + (b + c)</b>.', 'With letters: <b>(a + b) + c = a + (b + c)</b>.')
    ], after: [
      L('Qavslar bu yerda qaysi ikki son birinchi qo‘shilishini ko‘rsatadi. Qo‘shishda qavslarni xohlagan joyga ko‘chirish mumkin — javob o‘zgarmaydi.', 'Скобки здесь показывают, какие два числа складываем первыми. При сложении скобки можно переставлять как угодно — ответ не изменится.', 'Here the brackets show which two numbers are added first. In addition you can move the brackets wherever you like — the answer does not change.')
    ] },
    { kind: 'history', h: L('Bu xossalarni kim kashf etgan?', 'Кто открыл эти свойства?', 'Who discovered these properties?'), p: [
      L('Qo‘shish va ayirish bog‘lanishini qadimgi misrliklar yaxshi bilishgan. Ular ayirishni ko‘pincha qo‘shish orqali bajarishgan: «12 ga nechta qo‘shsam 47 bo‘ladi?» Hozir ham bozorda sotuvchilar qaytimni shunday sanaydi.', 'Связь сложения и вычитания хорошо знали древние египтяне. Они часто выполняли вычитание через сложение: «Сколько прибавить к 12, чтобы получить 47?» И сейчас продавцы на базаре так считают сдачу.', 'The ancient Egyptians knew well that adding and subtracting are linked. They often subtracted by adding: “How much do I add to 12 to get 47?” Market sellers still count change this way.'),
      L('<b>Al-Xorazmiy</b> o‘zining mashhur «Al-jabr» kitobida tenglamalarni yechish uchun aynan shu bog‘lanishdan foydalangan. «Algebra» fanining nomi ham shu kitob nomidan kelib chiqqan! «Al-jabr» — «tiklash» degani: noma’lum sonni qo‘shish va ayirish yordamida tiklash.', '<b>Аль-Хорезми</b> в своей знаменитой книге «Аль-джабр» использовал именно эту связь для решения уравнений. Название науки «алгебра» произошло от названия этой книги! «Аль-джабр» означает «восстановление»: восстановить неизвестное число с помощью сложения и вычитания.', '<b>Al-Khwarizmi</b> used exactly this link to solve equations in his famous book “Al-jabr”. The name of the subject “algebra” comes from the title of that book! “Al-jabr” means “restoring”: finding a missing number with the help of addition and subtraction.'),
      L('Guruhlash xossasiga nom esa ancha keyin, taxminan 200 yil oldin berilgan. Lekin odamlar undan har doim foydalanishgan — xuddi Kamola kabi!', 'Название сочетательному свойству дали гораздо позже, примерно 200 лет назад. Но люди пользовались им всегда — точно как Камола!', 'The grouping property was given its name much later, about 200 years ago. But people have always used it — just like Kamola!')
    ] },
    { kind: 'rule', h: L('Ikki qoida', 'Два правила', 'Two rules'), p: [
      L('<b>1-qoida. Yig‘indidan bitta qo‘shiluvchini ayirsak, ikkinchi qo‘shiluvchi qoladi.</b>', '<b>Правило 1. Если из суммы вычесть одно слагаемое, получится другое.</b>', '<b>Rule 1. Take one addend from the sum and the other addend is left.</b>'),
      L('Bitta qo‘shish misolidan ikkita ayirish misolini «tug‘dirish» mumkin: 6 + 4 = 10 → 10 − 4 = 6 va 10 − 6 = 4. Bu uch misol bir oila!', 'Из одного примера на сложение можно «родить» два примера на вычитание: 6 + 4 = 10 → 10 − 4 = 6 и 10 − 6 = 4. Эти три примера — одна семья!', 'One addition fact gives birth to two subtraction facts: 6 + 4 = 10 → 10 − 4 = 6 and 10 − 6 = 4. These three facts are one family!'),
      L('<b>2-qoida. Bir nechta sonni qo‘shganda ularni istalgancha guruhlash va o‘rnini almashtirish mumkin — yig‘indi o‘zgarmaydi.</b>', '<b>Правило 2. Складывая несколько чисел, их можно как угодно группировать и переставлять — сумма не изменится.</b>', '<b>Rule 2. When adding several numbers, you can group and reorder them however you like — the sum stays the same.</b>')
    ], list: [
      L('Avval 10 beradigan juftlikni qidiring: 1 + 9, 2 + 8, 3 + 7, 4 + 6, 5 + 5.', 'Сначала ищи пару, дающую 10: 1 + 9, 2 + 8, 3 + 7, 4 + 6, 5 + 5.', 'First look for a pair that makes 10: 1 + 9, 2 + 8, 3 + 7, 4 + 6, 5 + 5.'),
      L('Yaxlit sonlar uchun ham: 20 + 80, 30 + 70, 40 + 60 — bular 100 beradi.', 'Для круглых чисел тоже: 20 + 80, 30 + 70, 40 + 60 — дают 100.', 'For round numbers too: 20 + 80, 30 + 70, 40 + 60 make 100.')
    ], after: [
      L('Diqqat: guruhlash xossasi faqat qo‘shishda ishlaydi! Ayirishda qavsni ko‘chirsak, javob o‘zgarishi mumkin: (10 − 3) − 2 = 5, lekin 10 − (3 − 2) = 9.', 'Внимание: сочетательное свойство работает только для сложения! При вычитании перенос скобок может изменить ответ: (10 − 3) − 2 = 5, а 10 − (3 − 2) = 9.', 'Careful: the grouping property works only for addition! In subtraction, moving the brackets can change the answer: (10 − 3) − 2 = 5, but 10 − (3 − 2) = 9.')
    ] },
    { kind: 'steps', h: L('Qadamma-qadam: qulay usulda qo‘shamiz', 'Шаг за шагом: складываем удобным способом', 'Step by step: adding the smart way'), p: [
      L('6 + 9 + 4 ni qulay usulda hisoblaymiz:', 'Вычислим удобным способом 6 + 9 + 4:', 'Let’s work out 6 + 9 + 4 the smart way:')
    ], list: [
      L('1-qadam. Barcha qo‘shiluvchilarga qarang: 6, 9, 4.', 'Шаг 1. Посмотри на все слагаемые: 6, 9, 4.', 'Step 1. Look at all the addends: 6, 9, 4.'),
      L('2-qadam. 10 beradigan juftlikni toping: 6 + 4 = 10!', 'Шаг 2. Найди пару, дающую 10: 6 + 4 = 10!', 'Step 2. Find the pair that makes 10: 6 + 4 = 10!'),
      L('3-qadam. Ularni guruhlang: (6 + 4) + 9.', 'Шаг 3. Сгруппируй их: (6 + 4) + 9.', 'Step 3. Group them: (6 + 4) + 9.'),
      L('4-qadam. Hisoblang: 10 + 9 = <b>19</b>.', 'Шаг 4. Вычисли: 10 + 9 = <b>19</b>.', 'Step 4. Work it out: 10 + 9 = <b>19</b>.')
    ], after: [
      L('Taqqoslang: chapdan o‘ngga hisoblasak, 6 + 9 = 15, keyin 15 + 4 = 19. Javob bir xil, lekin birinchi usul ancha oson — o‘nlikdan o‘tib qo‘shish kerak bo‘lmadi!', 'Сравни: если считать слева направо, 6 + 9 = 15, потом 15 + 4 = 19. Ответ тот же, но первый способ гораздо проще — не пришлось переходить через десяток!', 'Compare: working left to right, 6 + 9 = 15, then 15 + 4 = 19. Same answer, but the first way is much easier — no crossing ten needed!')
    ] },
    { kind: 'example', h: L('Yechilgan namunalar', 'Разобранные примеры', 'Worked examples'), p: [
      L('Har birida «do‘st» sonlarni qidiring.', 'В каждом ищи числа-«друзья».', 'Look for the “friendly” numbers in each one.')
    ], ex: [
      { q: L('Qulay usulda hisoblang: 3 + 8 + 7', 'Вычисли удобным способом: 3 + 8 + 7', 'Work out the smart way: 3 + 8 + 7'), s: L('(3 + 7) + 8 = 10 + 8 = <b>18</b>.', '(3 + 7) + 8 = 10 + 8 = <b>18</b>.', '(3 + 7) + 8 = 10 + 8 = <b>18</b>.') },
      { q: L('Qulay usulda hisoblang: 5 + 9 + 1 + 5', 'Вычисли удобным способом: 5 + 9 + 1 + 5', 'Work out the smart way: 5 + 9 + 1 + 5'), s: L('(5 + 5) + (9 + 1) = 10 + 10 = <b>20</b>.', '(5 + 5) + (9 + 1) = 10 + 10 = <b>20</b>.', '(5 + 5) + (9 + 1) = 10 + 10 = <b>20</b>.') },
      { q: L('Qulay usulda hisoblang: 30 + 6 + 70', 'Вычисли удобным способом: 30 + 6 + 70', 'Work out the smart way: 30 + 6 + 70'), s: L('(30 + 70) + 6 = 100 + 6 = <b>106</b>.', '(30 + 70) + 6 = 100 + 6 = <b>106</b>.', '(30 + 70) + 6 = 100 + 6 = <b>106</b>.') },
      { q: L('35 + 12 = 47 ekanini bilib, 47 − 12 ni toping.', 'Зная, что 35 + 12 = 47, найди 47 − 12.', 'Knowing that 35 + 12 = 47, find 47 − 12.'), s: L('Yig‘indidan bitta qo‘shiluvchini (12) ayirsak, ikkinchisi qoladi: <b>35</b>.', 'Если из суммы вычесть одно слагаемое (12), останется другое: <b>35</b>.', 'Take one addend (12) from the sum and the other is left: <b>35</b>.') },
      { q: L('Tushirib qoldirilgan sonni toping: (2 + 8) + 5 = 2 + (8 + ?)', 'Найди пропущенное число: (2 + 8) + 5 = 2 + (8 + ?)', 'Find the missing number: (2 + 8) + 5 = 2 + (8 + ?)'), s: L('Guruhlash xossasiga ko‘ra sonlar bir xil, faqat qavslar ko‘chdi. Javob: <b>5</b>.', 'По сочетательному свойству числа те же, перенесли только скобки. Ответ: <b>5</b>.', 'By the grouping property the numbers are the same; only the brackets moved. Answer: <b>5</b>.') }
    ] },
    { kind: 'table', h: L('Misollar oilasi', 'Семья примеров', 'Fact families'), p: [
      L('Har bir qatorda bitta qo‘shish va ikkita ayirish misoli — ular bir oila.', 'В каждой строке один пример на сложение и два на вычитание — это одна семья.', 'Each row has one addition fact and two subtraction facts — one family.')
    ], table: { head: [L('Qo‘shish', 'Сложение', 'Addition'), L('1-ayirish', '1-е вычитание', 'Subtraction 1'), L('2-ayirish', '2-е вычитание', 'Subtraction 2')], rows: [
      ['7 + 5 = 12', '12 − 5 = 7', '12 − 7 = 5'],
      ['9 + 6 = 15', '15 − 6 = 9', '15 − 9 = 6'],
      ['20 + 30 = 50', '50 − 30 = 20', '50 − 20 = 30'],
      ['35 + 12 = 47', '47 − 12 = 35', '47 − 35 = 12'],
      ['41 + 26 = 67', '67 − 26 = 41', '67 − 41 = 26']
    ] }, after: [
      L('Bitta misolni bilsangiz, uchtasini bilasiz! Bu yodlashni uch marta osonlashtiradi.', 'Знаешь один пример — знаешь три! Это в три раза облегчает запоминание.', 'Know one fact and you know three! That makes remembering three times easier.')
    ] },
    { kind: 'mistake', h: L('Tipik xatolar', 'Типичные ошибки', 'Common mistakes'), p: [
      L('Bu mavzuda ko‘p uchraydigan xatolar:', 'Частые ошибки в этой теме:', 'Frequent mistakes in this topic:')
    ], list: [
      L('<b>Ayirishda ham guruhlash.</b> 10 − 3 − 2 ni 10 − (3 − 2) = 9 deb hisoblash. Noto‘g‘ri! To‘g‘risi: 10 − 3 − 2 = 5.', '<b>Группировать при вычитании.</b> Считать 10 − 3 − 2 как 10 − (3 − 2) = 9. Неверно! Правильно: 10 − 3 − 2 = 5.', '<b>Grouping in subtraction.</b> Treating 10 − 3 − 2 as 10 − (3 − 2) = 9. Wrong! Correct: 10 − 3 − 2 = 5.'),
      L('<b>Qo‘shiluvchini tushirib qoldirish.</b> 3 + 8 + 7 da 3 va 7 ni qo‘shib, 8 ni unutish. Har bir sonni belgilab chiqing.', '<b>Потерять слагаемое.</b> В 3 + 8 + 7 сложить 3 и 7 и забыть 8. Отмечай каждое число.', '<b>Losing an addend.</b> In 3 + 8 + 7, adding 3 and 7 and forgetting the 8. Tick off every number.'),
      L('<b>Noto‘g‘ri ayirish misolini tuzish.</b> 7 + 5 = 12 dan «7 − 5 = 12» deb yozish. Ayirishda doim yig‘indidan boshlaymiz: 12 − 5 = 7.', '<b>Неверно составить пример на вычитание.</b> Из 7 + 5 = 12 написать «7 − 5 = 12». При вычитании всегда начинаем с суммы: 12 − 5 = 7.', '<b>Building the subtraction wrongly.</b> From 7 + 5 = 12 writing “7 − 5 = 12”. Always start subtraction with the sum: 12 − 5 = 7.'),
      L('<b>«Do‘st» sonlarni ko‘rmaslik.</b> 4 + 7 + 6 ni chapdan hisoblash qiyin. 4 + 6 = 10 ni ko‘ring!', '<b>Не замечать чисел-«друзей».</b> Считать 4 + 7 + 6 слева направо трудно. Заметь 4 + 6 = 10!', '<b>Missing the friendly numbers.</b> Adding 4 + 7 + 6 left to right is hard. Spot 4 + 6 = 10!')
    ] },
    { kind: 'life', h: L('Hayotda qayerda kerak?', 'Где это нужно в жизни?', 'Where is this used in life?'), p: [
      L('<b>Bozorda.</b> Siz 3 ming, 8 ming va 7 ming so‘mlik narsalar oldingiz. Aqlli hisob: (3 + 7) + 8 = 18 ming so‘m. Kalkulyatorsiz, bir zumda!', '<b>На базаре.</b> Ты купил вещи за 3, 8 и 7 тысяч. Умный счёт: (3 + 7) + 8 = 18 тысяч. Без калькулятора, в одно мгновение!', '<b>At the market.</b> You buy things for 3, 8 and 7 thousand. Smart counting: (3 + 7) + 8 = 18 thousand. No calculator, in a flash!'),
      L('<b>Qaytimni tekshirish.</b> 50 ming so‘m berdingiz, xarid 35 ming. Sotuvchi 15 ming qaytardi. Tekshirish: 35 + 15 = 50. To‘g‘ri — qo‘shish ayirishni tekshirdi!', '<b>Проверка сдачи.</b> Ты дал 50 тысяч, покупка стоит 35. Продавец вернул 15. Проверка: 35 + 15 = 50. Верно — сложение проверило вычитание!', '<b>Checking change.</b> You paid 50 thousand for something costing 35. The seller gave back 15. Check: 35 + 15 = 50. Correct — addition checked subtraction!'),
      L('<b>Uyda.</b> Mehmonlar keldi: 4 ta qo‘shni, 7 ta qarindosh va 6 ta do‘st. Nechta piyola kerak? (4 + 6) + 7 = 17 ta piyola.', '<b>Дома.</b> Пришли гости: 4 соседа, 7 родственников и 6 друзей. Сколько нужно пиал? (4 + 6) + 7 = 17 пиал.', '<b>At home.</b> Guests arrive: 4 neighbours, 7 relatives and 6 friends. How many tea bowls are needed? (4 + 6) + 7 = 17 bowls.'),
      L('<b>Maktabda.</b> Uyga vazifani tekshirishda: agar 47 − 12 = 35 deb yozgan bo‘lsangiz, 35 + 12 ni hisoblang. 47 chiqsa — javobingiz to‘g‘ri!', '<b>В школе.</b> Проверяя домашнее задание: если ты написал 47 − 12 = 35, посчитай 35 + 12. Получилось 47 — ответ верный!', '<b>At school.</b> Checking homework: if you wrote 47 − 12 = 35, work out 35 + 12. If you get 47, your answer is right!')
    ] },
    { kind: 'fact', h: L('Qiziqarli faktlar', 'Интересные факты', 'Fun facts'), list: [
      L('Mashhur nemis matematigi Karl Gauss bolaligida o‘qituvchisi bergan 1 dan 100 gacha sonlarni qo‘shish masalasini bir necha daqiqada yechgan. U sonlarni juftlab guruhlagan: 1 + 100, 2 + 99, 3 + 98 … har bir juftlik 101 beradi!', 'Знаменитый немецкий математик Карл Гаусс в детстве за несколько минут сложил все числа от 1 до 100. Он сгруппировал их парами: 1 + 100, 2 + 99, 3 + 98 … каждая пара даёт 101!', 'The famous German mathematician Carl Gauss, as a boy, added all the numbers from 1 to 100 in a few minutes. He grouped them in pairs: 1 + 100, 2 + 99, 3 + 98 … each pair makes 101!'),
      L('«Algebra» so‘zi al-Xorazmiyning «Al-jabr» kitobidan, «algoritm» so‘zi esa uning ismidan kelib chiqqan. Ikkala so‘z ham butun dunyo tillarida ishlatiladi!', 'Слово «алгебра» произошло от книги аль-Хорезми «Аль-джабр», а слово «алгоритм» — от его имени. Оба слова используются во всех языках мира!', 'The word “algebra” comes from al-Khwarizmi’s book “Al-jabr”, and “algorithm” comes from his name. Both words are used in languages all over the world!'),
      L('Domino toshlarida nuqtalar soni qo‘shish va ayirishni mashq qilish uchun juda qulay: har bir toshda ikki son va ularning yig‘indisi yashiringan.', 'Кости домино очень удобны для тренировки сложения и вычитания: на каждой спрятаны два числа и их сумма.', 'Dominoes are great for practising adding and subtracting: every tile hides two numbers and their sum.'),
      L('Qo‘lingizdagi 10 ta barmoq — «do‘st» juftliklarning eng yaxshi jadvali: 3 tasini bukib, qolgan 7 tasini ko‘ring!', 'Твои 10 пальцев — лучшая таблица пар-«друзей»: загни 3 и увидишь оставшиеся 7!', 'Your 10 fingers are the best table of friendly pairs: fold down 3 and you see the other 7!')
    ] },
    { kind: 'practice', h: L('O‘ylab ko‘ring', 'Подумай', 'Think about it'), p: [
      L('«Do‘st» sonlarni qidiring va misollar oilasini tuzing.', 'Ищи числа-«друзья» и составляй семьи примеров.', 'Look for friendly numbers and build fact families.')
    ], list: [
      L('Qulay usulda hisoblang: 7 + 4 + 3, 2 + 9 + 8, 60 + 5 + 40.', 'Вычисли удобным способом: 7 + 4 + 3, 2 + 9 + 8, 60 + 5 + 40.', 'Work out the smart way: 7 + 4 + 3, 2 + 9 + 8, 60 + 5 + 40.'),
      L('8 + 6 = 14 misolidan ikkita ayirish misolini tuzing.', 'Составь два примера на вычитание из 8 + 6 = 14.', 'Make two subtraction facts from 8 + 6 = 14.'),
      L('52 + 23 = 75 bo‘lsa, 75 − 52 nechaga teng?', 'Если 52 + 23 = 75, то 75 − 52 = ?', 'If 52 + 23 = 75, what is 75 − 52?'),
      L('Barmoqlaringiz yordamida 10 ning barcha «do‘st» juftliklarini toping.', 'С помощью пальцев найди все пары-«друзья» числа 10.', 'Use your fingers to find all the friendly pairs that make 10.')
    ], after: [
      L('Javoblar: 1) 14, 19, 105; 2) 14 − 6 = 8, 14 − 8 = 6; 3) 23; 4) 1 + 9, 2 + 8, 3 + 7, 4 + 6, 5 + 5.', 'Ответы: 1) 14, 19, 105; 2) 14 − 6 = 8, 14 − 8 = 6; 3) 23; 4) 1 + 9, 2 + 8, 3 + 7, 4 + 6, 5 + 5.', 'Answers: 1) 14, 19, 105; 2) 14 − 6 = 8, 14 − 8 = 6; 3) 23; 4) 1 + 9, 2 + 8, 3 + 7, 4 + 6, 5 + 5.')
    ] },
    { kind: 'summary', h: L('Xulosa', 'Итог', 'Summary'), list: [
      L('Qo‘shish va ayirish — <b>teskari amallar</b>.', 'Сложение и вычитание — <b>обратные действия</b>.', 'Addition and subtraction are <b>inverse operations</b>.'),
      L('Yig‘indidan bitta qo‘shiluvchini ayirsak, ikkinchisi qoladi: 47 − 12 = 35.', 'Из суммы вычли одно слагаемое — осталось другое: 47 − 12 = 35.', 'Take one addend from the sum and the other is left: 47 − 12 = 35.'),
      L('Bitta qo‘shish misoli = ikkita ayirish misoli (misollar oilasi).', 'Один пример на сложение = два на вычитание (семья примеров).', 'One addition fact = two subtraction facts (a fact family).'),
      L('<b>Guruhlash xossasi:</b> (a + b) + c = a + (b + c).', '<b>Сочетательное свойство:</b> (a + b) + c = a + (b + c).', '<b>Grouping property:</b> (a + b) + c = a + (b + c).'),
      L('Avval 10 yoki 100 beradigan «do‘st» sonlarni qo‘shing.', 'Сначала складывай числа-«друзья», дающие 10 или 100.', 'Add the friendly numbers that make 10 or 100 first.'),
      L('Guruhlash faqat qo‘shishda ishlaydi, ayirishda emas!', 'Группировать можно только при сложении, не при вычитании!', 'Grouping works only for addition, not subtraction!')
    ] }
  ] });

  // ---------- t14. Tarkibli ifodalar. Misol va masalalar ----------
  T.add(P, 't14', { sections: [
    { kind: 'intro', h: L('Avtobus sayohati', 'Поездка на автобусе', 'A bus journey'), p: [
      L('Shahar avtobusi bekatdan jo‘nadi. Unda 45 ta yo‘lovchi bor edi. Birinchi bekatda 20 kishi tushdi, 6 kishi chiqdi. Haydovchi amaki o‘ylab qoldi: «Endi avtobusda nechta yo‘lovchi bor?» Siz unga yordam bera olasizmi?', 'Городской автобус отъехал от остановки. В нём было 45 пассажиров. На первой остановке вышли 20 человек и вошли 6. Водитель задумался: «Сколько теперь пассажиров в автобусе?» Сможешь ему помочь?', 'A city bus pulled away from the stop with 45 passengers. At the first stop 20 people got off and 6 got on. The driver wondered: “How many passengers are on the bus now?” Can you help him?'),
      L('Bu yerda bitta amal yetmaydi — ikkita amal kerak: avval ayirish (tushganlar), keyin qo‘shish (chiqqanlar). 45 − 20 = 25, keyin 25 + 6 = 31. Bitta yozuvda: 45 − 20 + 6 = 31. Bunday bir nechta amalli yozuv <b>tarkibli ifoda</b> deyiladi.', 'Здесь одного действия мало — нужно два: сначала вычитание (вышли), потом сложение (вошли). 45 − 20 = 25, потом 25 + 6 = 31. Одной записью: 45 − 20 + 6 = 31. Такая запись с несколькими действиями называется <b>составным выражением</b>.', 'One operation is not enough here — we need two: first subtract (people got off), then add (people got on). 45 − 20 = 25, then 25 + 6 = 31. In one line: 45 − 20 + 6 = 31. A line like this with several operations is called a <b>multi-step expression</b>.'),
      L('Bu mavzu — butun qismning yakuni. Biz o‘rgangan hamma narsani — o‘nlik va birliklar, qavslar, qo‘shish va ayirish — bitta joyda qo‘llaymiz va ikki amalli masalalarni yechamiz.', 'Эта тема — итог всей части. Мы применим всё, чему научились, — десятки и единицы, скобки, сложение и вычитание — и будем решать задачи в два действия.', 'This topic wraps up the whole part. We will use everything we have learned — tens and ones, brackets, adding and subtracting — and solve two-step problems.')
    ] },
    { kind: 'def', h: L('Tarkibli ifoda nima?', 'Что такое составное выражение?', 'What is a multi-step expression?'), p: [
      L('<b>Ifoda</b> — sonlar va amal belgilaridan tuzilgan yozuv. Bitta amalli ifoda <b>oddiy</b>: 45 − 20. Ikki yoki undan ko‘p amalli ifoda <b>tarkibli</b>: 45 − 20 + 6.', '<b>Выражение</b> — запись из чисел и знаков действий. Выражение с одним действием — <b>простое</b>: 45 − 20. С двумя и более действиями — <b>составное</b>: 45 − 20 + 6.', 'An <b>expression</b> is a line made of numbers and operation signs. One operation makes a <b>simple</b> expression: 45 − 20. Two or more make a <b>multi-step</b> expression: 45 − 20 + 6.'),
      L('<b>Ifodaning qiymati</b> — barcha amallarni bajargandan keyin chiqqan son. 45 − 20 + 6 ifodaning qiymati — 31.', '<b>Значение выражения</b> — число, которое получается после выполнения всех действий. Значение выражения 45 − 20 + 6 — это 31.', 'The <b>value</b> of an expression is the number you get after doing all the operations. The value of 45 − 20 + 6 is 31.')
    ], list: [
      L('Qavssiz tarkibli ifoda: 50 − 20 + 4.', 'Составное выражение без скобок: 50 − 20 + 4.', 'Multi-step expression without brackets: 50 − 20 + 4.'),
      L('Qavsli tarkibli ifoda: 45 − (20 + 5).', 'Составное выражение со скобками: 45 − (20 + 5).', 'Multi-step expression with brackets: 45 − (20 + 5).'),
      L('Uch amalli ifoda: 10 + 20 + 30 − 5.', 'Выражение с тремя действиями: 10 + 20 + 30 − 5.', 'Three-step expression: 10 + 20 + 30 − 5.')
    ], after: [
      L('<b>Masala</b> — bu hayotiy voqea haqida savol. Uni yechish uchun masaladan ifoda tuzamiz va uning qiymatini topamiz.', '<b>Задача</b> — это вопрос о жизненной ситуации. Чтобы её решить, составляем по задаче выражение и находим его значение.', 'A <b>word problem</b> is a question about a real situation. To solve it, we write an expression from the problem and find its value.')
    ] },
    { kind: 'history', h: L('Masalalar tarixidan', 'Из истории задач', 'From the history of word problems'), p: [
      L('Dunyodagi eng qadimgi matematik masalalar to‘plamlaridan biri — <b>Rind papirusi</b>. U Misrda taxminan 3600 yil oldin yozilgan. Unda non va pivoni ishchilar orasida bo‘lish, don omborlarini hisoblash haqida 80 dan ortiq masala bor.', 'Один из древнейших сборников математических задач в мире — <b>папирус Ринда</b>. Его написали в Египте примерно 3600 лет назад. В нём больше 80 задач — о том, как разделить хлеб между работниками, как подсчитать зерно в амбарах.', 'One of the oldest collections of maths problems in the world is the <b>Rhind Papyrus</b>. It was written in Egypt about 3 600 years ago. It has more than 80 problems — about sharing bread among workers and counting grain in storehouses.'),
      L('<b>Al-Xorazmiy</b> o‘z kitobida meros taqsimlash, yer o‘lchash va savdo haqida ko‘plab masalalarni yechib ko‘rsatgan. U har bir masalani bosqichma-bosqich, amallar tartibini aniq ko‘rsatib yechgan.', '<b>Аль-Хорезми</b> в своей книге показал решения многих задач о разделе наследства, измерении земли и торговле. Каждую задачу он решал шаг за шагом, чётко указывая порядок действий.', '<b>Al-Khwarizmi</b> solved many problems in his book about sharing an inheritance, measuring land and trade. He solved each one step by step, showing the order of operations clearly.'),
      L('<b>Beruniy</b> esa masalalarni hayotdan olgan: shaharlar orasidagi masofa, kunning uzunligi, yulduzlarning harakati. U har doim aytgan: «Hisob aniq bo‘lishi uchun tartib aniq bo‘lishi kerak».', 'А <b>Беруни</b> брал задачи из жизни: расстояние между городами, длина дня, движение звёзд. Он считал, что для точного счёта нужен точный порядок.', '<b>Biruni</b> took his problems from real life: distances between cities, the length of the day, the movement of the stars. He believed that exact counting needs an exact order.')
    ] },
    { kind: 'rule', h: L('Amallar tartibi', 'Порядок действий', 'Order of operations'), p: [
      L('Tarkibli ifodada amallarni to‘g‘ri tartibda bajarish kerak:', 'В составном выражении действия нужно выполнять в правильном порядке:', 'In a multi-step expression the operations must be done in the right order:')
    ], list: [
      L('<b>Qavs bo‘lsa — avval qavs ichidagi amal.</b> 45 − (20 + 5) = 45 − 25 = 20.', '<b>Если есть скобки — сначала действие в скобках.</b> 45 − (20 + 5) = 45 − 25 = 20.', '<b>If there are brackets, do the inside first.</b> 45 − (20 + 5) = 45 − 25 = 20.'),
      L('<b>Qavs bo‘lmasa — chapdan o‘ngga.</b> 45 − 20 + 5 = 25 + 5 = 30.', '<b>Если скобок нет — слева направо.</b> 45 − 20 + 5 = 25 + 5 = 30.', '<b>If there are no brackets, work left to right.</b> 45 − 20 + 5 = 25 + 5 = 30.')
    ], after: [
      L('Ko‘rdingizmi? Sonlar bir xil — 45, 20, 5 — lekin javoblar har xil: 20 va 30! Shuning uchun tartib juda muhim.', 'Видишь? Числа одинаковые — 45, 20, 5, — а ответы разные: 20 и 30! Поэтому порядок очень важен.', 'See? The numbers are the same — 45, 20, 5 — but the answers differ: 20 and 30! That is why order matters so much.'),
      L('Masala yechishda ham tartibni aniqlaymiz: avval nima bo‘ldi, keyin nima bo‘ldi. Masalaning matni bizga amallar tartibini aytib beradi.', 'При решении задачи тоже определяем порядок: что случилось сначала, что потом. Текст задачи подсказывает порядок действий.', 'When solving a word problem we also work out the order: what happened first and what happened next. The story tells us the order of operations.')
    ] },
    { kind: 'steps', h: L('Qadamma-qadam: masalani yechamiz', 'Шаг за шагом: решаем задачу', 'Step by step: solving a word problem'), p: [
      L('Masala: «Savatda 30 ta olma bor edi. Oyim 10 tasini qo‘shnimizga berdi, 5 tasini kompot uchun oldi. Savatda nechta olma qoldi?»', 'Задача: «В корзине было 30 яблок. Мама отдала 10 соседке и взяла 5 на компот. Сколько яблок осталось в корзине?»', 'Problem: “There were 30 apples in a basket. Mum gave 10 to the neighbour and took 5 for compote. How many apples are left in the basket?”')
    ], list: [
      L('1-qadam. Masalani diqqat bilan o‘qing. Nima ma’lum? 30 ta olma, 10 tasi berildi, 5 tasi olindi.', 'Шаг 1. Внимательно прочитай задачу. Что известно? 30 яблок, 10 отдали, 5 взяли.', 'Step 1. Read the problem carefully. What do we know? 30 apples, 10 given away, 5 taken.'),
      L('2-qadam. Nima so‘ralyapti? Nechta olma <u>qoldi</u> — demak, ayirish kerak.', 'Шаг 2. Что спрашивают? Сколько яблок <u>осталось</u> — значит, нужно вычитание.', 'Step 2. What is being asked? How many apples are <u>left</u> — so we need to subtract.'),
      L('3-qadam. Ifoda tuzing: 30 − 10 − 5 yoki 30 − (10 + 5).', 'Шаг 3. Составь выражение: 30 − 10 − 5 или 30 − (10 + 5).', 'Step 3. Write an expression: 30 − 10 − 5 or 30 − (10 + 5).'),
      L('4-qadam. Hisoblang: 30 − 10 = 20, 20 − 5 = 15. Javob: <b>15 ta olma</b>.', 'Шаг 4. Вычисли: 30 − 10 = 20, 20 − 5 = 15. Ответ: <b>15 яблок</b>.', 'Step 4. Work it out: 30 − 10 = 20, 20 − 5 = 15. Answer: <b>15 apples</b>.')
    ], after: [
      L('5-qadam — tekshiruv: 15 + 10 + 5 = 30. To‘g‘ri! Javobni har doim to‘liq gap bilan yozing: «Savatda 15 ta olma qoldi».', 'Шаг 5 — проверка: 15 + 10 + 5 = 30. Верно! Ответ всегда записывай полным предложением: «В корзине осталось 15 яблок».', 'Step 5 — check: 15 + 10 + 5 = 30. Correct! Always write the answer as a full sentence: “There are 15 apples left in the basket.”')
    ] },
    { kind: 'example', h: L('Yechilgan namunalar', 'Разобранные примеры', 'Worked examples'), p: [
      L('Avval qavsni qidiring. Qavs yo‘q bo‘lsa — chapdan o‘ngga.', 'Сначала ищи скобки. Нет скобок — слева направо.', 'Look for brackets first. No brackets — left to right.')
    ], ex: [
      { q: L('Hisoblang: 60 − (10 + 5)', 'Вычисли: 60 − (10 + 5)', 'Work out: 60 − (10 + 5)'), s: L('Qavs: 10 + 5 = 15. Keyin 60 − 15 = <b>45</b>.', 'Скобки: 10 + 5 = 15. Потом 60 − 15 = <b>45</b>.', 'Brackets: 10 + 5 = 15. Then 60 − 15 = <b>45</b>.') },
      { q: L('Hisoblang: 50 − 20 + 4', 'Вычисли: 50 − 20 + 4', 'Work out: 50 − 20 + 4'), s: L('Chapdan o‘ngga: 50 − 20 = 30, 30 + 4 = <b>34</b>.', 'Слева направо: 50 − 20 = 30, 30 + 4 = <b>34</b>.', 'Left to right: 50 − 20 = 30, 30 + 4 = <b>34</b>.') },
      { q: L('Hisoblang: (30 + 7) − 7', 'Вычисли: (30 + 7) − 7', 'Work out: (30 + 7) − 7'), s: L('Qavs: 30 + 7 = 37. Keyin 37 − 7 = <b>30</b>. Bitta sonni qo‘shib, keyin ayirsak, boshlang‘ich son qaytadi!', 'Скобки: 30 + 7 = 37. Потом 37 − 7 = <b>30</b>. Если прибавить и вычесть одно и то же число, вернёмся к началу!', 'Brackets: 30 + 7 = 37. Then 37 − 7 = <b>30</b>. Add a number and take it away again and you are back where you started!') },
      { q: L('Avtobusda 45 kishi bor edi. Bekatda 20 kishi tushdi, 6 kishi chiqdi. Nechta yo‘lovchi bo‘ldi?', 'В автобусе было 45 человек. На остановке 20 вышли, 6 вошли. Сколько стало пассажиров?', 'A bus had 45 people. At a stop 20 got off and 6 got on. How many passengers are there now?'), s: L('45 − 20 + 6: 45 − 20 = 25, 25 + 6 = <b>31</b>. Javob: avtobusda 31 ta yo‘lovchi.', '45 − 20 + 6: 45 − 20 = 25, 25 + 6 = <b>31</b>. Ответ: в автобусе 31 пассажир.', '45 − 20 + 6: 45 − 20 = 25, 25 + 6 = <b>31</b>. Answer: there are 31 passengers.') },
      { q: L('Sevaraning 40 ming so‘mi bor edi. U 12 ming so‘mlik daftar va 7 ming so‘mlik qalam oldi. Qancha pul qoldi?', 'У Севары было 40 тысяч сумов. Она купила тетрадь за 12 тысяч и ручку за 7 тысяч. Сколько денег осталось?', 'Sevara had 40 thousand sum. She bought a notebook for 12 thousand and a pen for 7 thousand. How much money is left?'), s: L('Avval xaridlar: 12 + 7 = 19. Keyin 40 − 19 = 21. Ifoda: 40 − (12 + 7) = <b>21</b> ming so‘m.', 'Сначала покупки: 12 + 7 = 19. Потом 40 − 19 = 21. Выражение: 40 − (12 + 7) = <b>21</b> тысяча.', 'First the shopping: 12 + 7 = 19. Then 40 − 19 = 21. Expression: 40 − (12 + 7) = <b>21</b> thousand.') }
    ] },
    { kind: 'table', h: L('Qavslar va tartib', 'Скобки и порядок', 'Brackets and order'), p: [
      L('Bir xil sonlar, lekin har xil tartib — har xil javob.', 'Одинаковые числа, но разный порядок — разный ответ.', 'The same numbers in a different order give a different answer.')
    ], table: { head: [L('Ifoda', 'Выражение', 'Expression'), L('1-amal', '1-е действие', '1st step'), L('2-amal', '2-е действие', '2nd step'), L('Qiymati', 'Значение', 'Value')], rows: [
      ['45 − (20 + 5)', '20 + 5 = 25', '45 − 25', '20'],
      ['45 − 20 + 5', '45 − 20 = 25', '25 + 5', '30'],
      ['80 − (30 − 10)', '30 − 10 = 20', '80 − 20', '60'],
      ['80 − 30 − 10', '80 − 30 = 50', '50 − 10', '40'],
      ['(25 + 4) − 4', '25 + 4 = 29', '29 − 4', '25']
    ] }, after: [
      L('Har bir ifodada qaysi amal birinchi bajarilganiga e’tibor bering. Amal ustiga kichik «1» va «2» yozib qo‘yish odati xatolardan saqlaydi.', 'Обращай внимание, какое действие выполнено первым. Привычка писать над действиями маленькие «1» и «2» спасает от ошибок.', 'Notice which operation came first in each one. The habit of writing a small “1” and “2” over the operations saves you from mistakes.')
    ] },
    { kind: 'mistake', h: L('Tipik xatolar', 'Типичные ошибки', 'Common mistakes'), p: [
      L('Tarkibli ifoda va masalalarda ko‘p uchraydigan xatolar:', 'Частые ошибки в составных выражениях и задачах:', 'Frequent mistakes with multi-step expressions and problems:')
    ], list: [
      L('<b>Qavssiz ifodada o‘ngdan boshlash.</b> 50 − 20 + 4 ni 50 − 24 = 26 deb hisoblash. Qavs yo‘q — chapdan o‘ngga: 34.', '<b>Начинать справа в выражении без скобок.</b> Считать 50 − 20 + 4 как 50 − 24 = 26. Скобок нет — слева направо: 34.', '<b>Starting on the right without brackets.</b> Doing 50 − 20 + 4 as 50 − 24 = 26. No brackets — left to right: 34.'),
      L('<b>Masalada noto‘g‘ri amal tanlash.</b> «Chiqdi» — qo‘shish, «tushdi», «berdi», «yedi» — ayirish. So‘zlarga diqqat qiling!', '<b>Выбрать не то действие в задаче.</b> «Вошли» — сложение; «вышли», «отдали», «съели» — вычитание. Внимательно читай слова!', '<b>Picking the wrong operation.</b> “Got on” means add; “got off”, “gave away”, “ate” mean subtract. Read the words carefully!'),
      L('<b>Faqat birinchi amalni bajarish.</b> Masala ikki amalli bo‘lsa, ikkala amalni ham bajaring.', '<b>Выполнить только первое действие.</b> Если задача в два действия — выполни оба.', '<b>Doing only the first step.</b> If the problem has two steps, do both.'),
      L('<b>Javobni to‘liq yozmaslik.</b> Faqat «31» emas, «Avtobusda 31 ta yo‘lovchi bor» deb yozing.', '<b>Не записать полный ответ.</b> Не просто «31», а «В автобусе 31 пассажир».', '<b>Not writing a full answer.</b> Not just “31” but “There are 31 passengers on the bus.”')
    ] },
    { kind: 'life', h: L('Hayotda qayerda kerak?', 'Где это нужно в жизни?', 'Where is this used in life?'), p: [
      L('<b>Do‘konda.</b> Har bir xarid — ikki amalli masala: «Menda 50 ming bor, 20 ming va 15 ming so‘mlik narsa olsam, qancha qoladi?» 50 − (20 + 15) = 15 ming so‘m.', '<b>В магазине.</b> Каждая покупка — задача в два действия: «У меня 50 тысяч; если куплю вещи за 20 и 15 тысяч, сколько останется?» 50 − (20 + 15) = 15 тысяч.', '<b>At the shop.</b> Every shopping trip is a two-step problem: “I have 50 thousand; if I buy things for 20 and 15 thousand, how much is left?” 50 − (20 + 15) = 15 thousand.'),
      L('<b>Oshxonada.</b> Onangiz 24 ta somsa pishirdi. Oilangiz 10 tasini yedi, keyin buvingiz yana 12 ta olib keldi. Endi stolda: 24 − 10 + 12 = 26 ta somsa.', '<b>На кухне.</b> Мама испекла 24 самсы. Семья съела 10, потом бабушка принесла ещё 12. Теперь на столе: 24 − 10 + 12 = 26 самс.', '<b>In the kitchen.</b> Mum baked 24 samsas. The family ate 10, then Grandma brought 12 more. Now on the table: 24 − 10 + 12 = 26 samsas.'),
      L('<b>Sinfda.</b> Sinfda 28 ta o‘quvchi bor. 3 tasi kasal, 2 tasi musobaqada. Darsda: 28 − (3 + 2) = 23 ta o‘quvchi.', '<b>В классе.</b> В классе 28 учеников. 3 болеют, 2 на соревнованиях. На уроке: 28 − (3 + 2) = 23 ученика.', '<b>In class.</b> A class has 28 pupils. 3 are ill and 2 are at a competition. In the lesson: 28 − (3 + 2) = 23 pupils.'),
      L('<b>Bog‘da.</b> Daraxtda 50 ta o‘rik pishdi. Birinchi kuni 20 tasini, ikkinchi kuni 15 tasini terdik. Daraxtda yana 15 ta qoldi.', '<b>В саду.</b> На дереве созрело 50 абрикосов. В первый день сорвали 20, во второй 15. На дереве осталось ещё 15.', '<b>In the garden.</b> 50 apricots ripened on a tree. We picked 20 on the first day and 15 on the second. 15 are still on the tree.')
    ] },
    { kind: 'fact', h: L('Qiziqarli faktlar', 'Интересные факты', 'Fun facts'), list: [
      L('Rind papirusi uzunligi 5 metrdan ortiq — bu sinf xonasining uzunligiga teng! Hozir u Londondagi Britaniya muzeyida saqlanadi.', 'Папирус Ринда длиной больше 5 метров — почти с классную комнату! Сейчас он хранится в Британском музее в Лондоне.', 'The Rhind Papyrus is more than 5 metres long — about the length of a classroom! Today it is kept in the British Museum in London.'),
      L('Kalkulyatorlar ham amallar tartibiga rioya qiladi. Agar qavslarni to‘g‘ri yozmasangiz, kalkulyator ham noto‘g‘ri javob beradi!', 'Калькуляторы тоже соблюдают порядок действий. Если неправильно поставить скобки, и калькулятор ошибётся!', 'Calculators follow the order of operations too. Put the brackets in wrongly and even a calculator gives the wrong answer!'),
      L('Ba’zi qadimgi masalalar hozir ham mashhur: «Ettita uyda yettitadan mushuk bor…» kabi masala 3600 yil oldin Rind papirusida yozilgan edi.', 'Некоторые древние задачи известны до сих пор: задача вроде «В семи домах по семь кошек…» записана в папирусе Ринда 3600 лет назад.', 'Some ancient puzzles are still famous: a riddle like “Seven houses, each with seven cats…” was written in the Rhind Papyrus 3 600 years ago.'),
      L('Siz endi 100 gacha bo‘lgan sonlar bilan ishlay olasiz — bu birinchi sinf uchun katta yutuq! Qadimgi Misrda bunga faqat maxsus o‘qitilgan kotiblar qodir edi.', 'Ты теперь умеешь работать с числами до 100 — это большое достижение для первого класса! В Древнем Египте так умели только специально обученные писцы.', 'You can now work with numbers up to 100 — a big achievement for Grade 1! In Ancient Egypt only specially trained scribes could do that.')
    ] },
    { kind: 'practice', h: L('O‘ylab ko‘ring', 'Подумай', 'Think about it'), p: [
      L('Avval tartibni aniqlang, keyin hisoblang.', 'Сначала определи порядок, потом считай.', 'Decide the order first, then work it out.')
    ], list: [
      L('Hisoblang: 70 − (20 + 8), 70 − 20 + 8, (40 + 9) − 9.', 'Вычисли: 70 − (20 + 8), 70 − 20 + 8, (40 + 9) − 9.', 'Work out: 70 − (20 + 8), 70 − 20 + 8, (40 + 9) − 9.'),
      L('Masala: Javonda 36 ta kitob bor edi. 12 tasini o‘quvchilar oldi, 5 tasini qaytarib keltirishdi. Javonda nechta kitob bo‘ldi?', 'Задача: на полке было 36 книг. 12 взяли ученики, 5 вернули. Сколько книг стало на полке?', 'Problem: a shelf had 36 books. Pupils took 12 and brought 5 back. How many books are on the shelf now?'),
      L('O‘zingiz «tushdi» va «chiqdi» so‘zlari bilan ikki amalli masala tuzing.', 'Сам составь задачу в два действия со словами «вышли» и «вошли».', 'Make up your own two-step problem with “got off” and “got on”.'),
      L('Qavsni shunday qo‘yingki, javob 10 bo‘lsin: 30 − 15 + 5.', 'Поставь скобки так, чтобы получилось 10: 30 − 15 + 5.', 'Put in brackets so the answer is 10: 30 − 15 + 5.')
    ], after: [
      L('Javoblar: 1) 42, 58, 40; 2) 36 − 12 + 5 = 29 ta kitob; 4) 30 − (15 + 5) = 10.', 'Ответы: 1) 42, 58, 40; 2) 36 − 12 + 5 = 29 книг; 4) 30 − (15 + 5) = 10.', 'Answers: 1) 42, 58, 40; 2) 36 − 12 + 5 = 29 books; 4) 30 − (15 + 5) = 10.')
    ] },
    { kind: 'summary', h: L('Xulosa', 'Итог', 'Summary'), list: [
      L('Ikki yoki undan ko‘p amalli ifoda — <b>tarkibli ifoda</b>.', 'Выражение с двумя и более действиями — <b>составное</b>.', 'An expression with two or more operations is a <b>multi-step expression</b>.'),
      L('Qavs bo‘lsa — <b>avval qavs ichi</b>; qavs bo‘lmasa — <b>chapdan o‘ngga</b>.', 'Есть скобки — <b>сначала скобки</b>; нет скобок — <b>слева направо</b>.', 'Brackets — <b>inside first</b>; no brackets — <b>left to right</b>.'),
      L('Bir xil sonlar har xil tartibda har xil javob berishi mumkin.', 'Одни и те же числа в разном порядке могут дать разный ответ.', 'The same numbers in a different order can give a different answer.'),
      L('Masalani yechish: o‘qing → nima ma’lum → nima so‘ralyapti → ifoda tuzing → hisoblang → tekshiring.', 'Решение задачи: прочитай → что известно → что спрашивают → составь выражение → вычисли → проверь.', 'Solving a problem: read → what we know → what is asked → write an expression → work it out → check.'),
      L('«Chiqdi», «keltirdi» — qo‘shish; «tushdi», «berdi», «yedi» — ayirish.', '«Вошли», «принесли» — сложение; «вышли», «отдали», «съели» — вычитание.', '“Got on”, “brought” mean add; “got off”, “gave away”, “ate” mean subtract.'),
      L('Javobni to‘liq gap bilan yozing.', 'Записывай ответ полным предложением.', 'Write the answer as a full sentence.')
    ] }
  ] });
})(this);
// --END--
