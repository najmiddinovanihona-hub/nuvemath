<p align="center"><img src="assets/logo-full.png" alt="Nuvemath" width="360"></p>

# Nuvemath — See Math. Explore Dimensions.

O‘zbek tilidagi (rus va ingliz tillari bilan) interaktiv matematika platformasi.
**Kolvo** (kimyo) va **Zenithra** (astronomiya) loyihalarining hamrohi — xuddi shu uslubda, statik sayt.

## Imkoniyatlar

- **Kirish animatsiyasi (intro, ~14 s)** — birinchi tashrifda: formulalar va 3D jismlar orbitada aylanadi, ko‘zoynakli odamcha ularni kuzatadi; π orbitadan ajralib uchadi, odamcha uni ushlaydi, so‘ng π logotipdagi joyiga uchib, logotip qismma-qism (π → kitob → orbita → yulduz) yig‘iladi va odamcha qo‘l silkitadi. Three.js + GSAP, «O‘tkazib yuborish» (yoki Esc), `prefers-reduced-motion` da yengil versiya. Qayta ko‘rish: «Introni qayta ko‘rish» yoki `?intro`.

- **Darslik** — sinf → qism → bo‘lim → mavzu tuzilmasida (1–11-sinf). Hozir tayyor: **1-sinf, III qism** (I.V. Repyova, 2024 darsligi asosida): 5 bo‘lim, 19 mavzu, 54 ta interaktiv topshiriq (3D sahnada sanash, masala sxemalari va to‘ldirish joylari, sonli zanjir, sehrli kvadrat, jadval, chizg‘ich, pallali tarozi, idishlar, tartiblash), har bir mavzu, bo‘lim va qism uchun testlar. Topshiriqlar har safar yangi sonlar bilan yaratiladi.
- **Grafiklar** — istalgan funksiya grafigi: bir nechta funksiya, kattalashtirish/siljitish (sichqoncha va barmoq), koordinata ko‘rsatkichi, nollar, ekstremumlar va kesishish nuqtalari avtomatik topiladi (π/6 kabi aniq ko‘rinishda), hosila, `a` parametri slayderi.
- **Yechuvchi**
  - Tenglama: ko‘phadni standart ko‘rinishga keltirib, chiziqli va kvadrat tenglamalarni qadam-baqadam yechadi (diskriminant, aniq radikal javob `(3 ± √17)/4`, Viyet, tekshirish); yuqori darajali va transsendent tenglamalarni (sin, 2^x, ln, √, |x|) sonli usulda yechadi.
  - Sistema: 2–5 noma’lumli chiziqli sistemani Gauss usulida **kasrlar bilan** har bir qadamini ko‘rsatib yechadi; determinant, cheksiz/yechimsiz holatlar.
  - Kalkulyator: `sqrt(2)*sin(pi/4) + 3!` kabi ifodalar.
- **Chizma** — sudraladigan geometrik konstruksiyalar: uchburchak (mediana, balandlik, bissektrisa, tashqi/ichki aylana, Eyler chizig‘i, turi, yuzi, R, r), aylana (markaziy va ichki chizilgan burchak), to‘rtburchak (turini avtomatik aniqlaydi), koordinatalar (masofa, o‘rta nuqta, tenglama).
- **3D jismlar** — kub, parallelepiped, prizma, piramida, silindr, konus, kesik konus, shar: parametr slayderlari, hajm/sirt formulalari, karkas va **yoyilma** (SVG).
- **Mashq** — 14 mavzu × 3 daraja bo‘yicha cheksiz yangi masalalar, darhol tekshiruv, yordam, to‘liq yechim, ball va ketma-ketlik.
- Uch til (UZ/RU/EN), qorong‘i va yorug‘ rejim, telefonga moslashgan.

## Ishga tushirish

Hech qanday o‘rnatish shart emas — `index.html` ni brauzerda ochish kifoya (3D jismlar uchun internet kerak: Three.js CDN'dan yuklanadi).

Mahalliy server bilan (tavsiya etiladi):

```bash
npm start          # http://localhost:8080
npm test           # avtomatik testlar
```

## Tuzilma

| Fayl | Vazifasi |
|---|---|
| `index.html`, `css/style.css` | Sahifa va uslublar |
| `js/expr.js` | Xavfsiz matematik ifoda parseri (`eval` ishlatilmaydi): yashirin ko‘paytirish, funksiyalar, `|x|`, `5!`, `√`, `²` |
| `js/solver.js` | Kasrlar, ko‘phadlar, qadam-baqadam tenglama yechish, sonli ildiz qidirish, Gauss, determinant |
| `js/plotter.js` | Funksiya grafiklari va tahlil |
| `js/geometry.js` | Jonli 2D chizmalar |
| `js/solids.js` | 3D jismlar (Three.js) va yoyilmalar |
| `js/practice.js` | Masala generatori va javob tekshiruvi |
| `js/kids.js`, `css/kids.css` | Interaktiv dars dvigateli: 3D sahna, topshiriq turlari, testlar |
| `js/curriculum/index.js` | Sinf/qism tuzilmasi; `js/curriculum/g1-3.js` — 1-sinf III qism mazmuni |
| `js/i18n.js` | Interfeys tarjimalari |
| `js/intro.js`, `css/intro.css` | Mustaqil intro komponenti (`NuvemathIntro.play({ force: true })`) |
| `assets/` | Logotip: asl rasm, shaffof emblema (yorug' va qorong'i fon uchun), favicon |
| `js/app.js` | Marshrutlash, sahifalar, progress (localStorage) |
| `test/run.js` | 26 ta avtomatik test (shu jumladan 16 800 ta tasodifiy masala tekshiruvi) |

GitHub Pages'ga joylash uchun: repozitoriyaga yuklang → Settings → Pages → `main` / root.
