# Nazariya fayllari — yozish qo‘llanmasi

Har bir qism uchun bitta fayl: `js/theory/g<sinf>-<qism>.js`. Fayl ichida har bir mavzu uchun
`NMTheory.add('<sinf>-<qism>', '<mavzu id>', { sections: [...] })` chaqiruvi bo‘ladi.
Namuna: `js/theory/g1-1.js` (t1 mavzusi). Mavzu id lari va sarlavhalari `js/curriculum/g<sinf>-<qism>.js` da.

## Talablar (test/theory-check.js tekshiradi)
- Har bir mavzuda **kamida 10 ta sahifa** (`sections` elementi). Ko‘proq (12–14) yaxshi.
- So‘zlar soni: **uz ≥ 1000, ru ≥ 800, en ≥ 800** (barcha sahifalar yig‘indisi). Maqsad: uz ≈ 1200–1600.
- Har bir matn **uch tilda**: `L('uz', 'ru', 'en')`. Bitta tilli satr bo‘lmasin.
- Har mavzuda bo‘lishi shart: `ex` (yechilgan namunalar, kamida 3 ta), `kind: 'mistake'`, `kind: 'life'`, `kind: 'summary'`.
- `kind` qiymatlari: `intro, def, history, rule, example, steps, mistake, life, fact, summary, practice, table`.
- Sahifa tuzilmasi: `{ kind, h: L(...), p: [L(...), ...], list: [L(...)], table: { head: [L], rows: [[L|'3', ...]] }, ex: [{ q: L(...), s: L(...) }], after: [L(...)] }`.
  `p` — xatboshilar (HTML ruxsat: `<b> <i> <u> <sup> <sub> <br>`; kasr uchun `<sup>a</sup>/<sub>b</sub>` yoki `fr(a, b)`).
- O‘zbek matnida apostrof sifatida faqat **‘ ’** (U+2018/2019) ishlating: o‘, g‘, ta’rif. Oddiy `'` belgisi JS satrini buzadi.
  Satr ichida `'` kerak bo‘lsa — `\'` deb yozing. Ruscha ё, inglizcha ’ (U+2019) ishlatish mumkin.
- Matnlar **mustaqil yozilgan** bo‘lsin: darslikdan ko‘chirmang, lekin darslik mavzusi va tartibiga mos bo‘lsin.

## Tavsiya etilgan sahifa ketma-ketligi (10–14 sahifa)
1. `intro` — nima o‘rganamiz, nega kerak (bolaga qiziqarli kirish, kichik hikoya).
2. `def` — asosiy tushuncha(lar) ta’rifi, atamalar.
3. `history` — tarixdan: qachon, kim, qanday (haqiqiy faktlar: Xorazmiy, Beruniy, Yevklid, Misr, Bobil, Hind raqamlari…).
4. `rule` — qoida/formula va uning izohi.
5. `steps` — bosqichma-bosqich algoritm.
6. `example` — 3–5 ta yechilgan namuna (`ex`), oddiydan murakkabga, har birida to‘liq yechim.
7. `example`/`table` — yana namunalar yoki jadval (masalan, ko‘paytirish jadvali qismi, birliklar).
8. `mistake` — tipik xatolar va ularni oldini olish (3–5 ta).
9. `life` — hayotda qo‘llanishi (bozor, oshxona, sport, qurilish, kosmos…).
10. `fact` — qiziqarli faktlar, rekordlar, o‘yin.
11. `practice` — o‘ylab ko‘rish uchun savollar (javoblari `ex` ichida yoki `after` da).
12. `summary` — xulosa: 5–7 ta asosiy gap (`list`).

## Uslub
- Sinf yoshiga mos: 1–2-sinf — qisqa gaplar, ko‘p misol, mehr bilan; 5–7-sinf — aniq ta’riflar, isbot g‘oyasi, formulalar.
- Har sahifa 100–200 so‘z (uz). Quruq bo‘lmasin: misollar, savollar, taqqoslashlar.
- Ruscha va inglizcha matn — to‘laqonli tarjima (qisqartirilgan emas), lekin biroz qisqaroq bo‘lishi mumkin.

## Tekshirish
```
node test/theory-check.js 1-1
```
Barcha mavzular `✓` bo‘lguncha to‘ldiring.
