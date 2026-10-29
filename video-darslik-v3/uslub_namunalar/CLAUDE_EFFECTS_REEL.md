# «8 ta Claude effekti» reel — tahlil

**Manba:** foydalanuvchining 3-namunasi. 720×1280, 30 fps, 31,7 s, ovozli (≈ −12,8 dB, musiqa/ovoz). Bu birinchi yuborilgan @IAMAJENE reeli bilan bir oiladan: «Claude Code skill’lari bilan montaj» seriyasi.
**Kadrlar:** `claude_effects_1.jpg`, `claude_effects_2.jpg` (0,5 s qadam bilan).

## 1. Tuzilma — «buyruq → render → natija» halqasi
Asosiy klip bitta: ayol mikrofon bilan kameraga gapiradi; qorong‘i xona, ko‘k lampa, binafsha nur. Uning ustiga 8 xil overlay effekt navbat bilan qo‘yiladi. Har effekt ~3,5 s va bir xil qolipda:
1. **Buyruq (~0,8 s):** Claude ilovasi (Chat/Code), qorong‘i UI. Klaviaturada `/effects <nom>` yoziladi, skill taklif kartasi chiqadi, yuborish tugmasi bosiladi.
2. **Render (~0,7 s):** chat ichida kichik preview. Unda **piksel-mozaika dissolve** — kvadratlar shovqindan tasvirga yig‘iladi. Tepada coral yozuv «● Editing with <nom>…».
3. **Natija (~1,5–2 s):** effekt qo‘yilgan klip butun ekranda.

Oxirida yakun kadri: **«Comment "claude"»** + coral plashka «for all 8 Claude effects» + 4×2 to‘r — har effektning kichik kadri, ostida nomi.

**Formula:** bitta oddiy klip → ko‘p xil «qiymat» namoyishi → CTA (izohga so‘z yozing, hammasini yuboraman).

## 2. Sakkiz effekt — har biri alohida overlay retsepti
| Buyruq | Ko‘rinishi | Harakat |
|---|---|---|
| `/mascot` | Pastki uchdan birida katta **piksel maskot** (coral `#D97757`, 8-bit, ko‘zlari kvadrat), ostida coral chiziq | Maskot pastdan sakrab chiqadi, piksel qadamlar bilan chayqaladi |
| `/checklist` | Pastda qorong‘i shaffof karta: sarlavha «✳ Claude is editing your clip · 5 of 5». Qatorlar yashil ✓ bilan: Found your face / Cut the silences / Added captions / Graded the colour / Rendered in 4K. O‘ngda mono shrift qiymatlar: `face lock`, `−4.2s`, `24 words`, `warm`, `2160p` | Qatorlar ketma-ket belgilanadi: doira → ✓ |
| `/glass-widgets` | 4 ta **muzli shisha** (frosted glass) vidjet, yuz atrofida burchaklarda: «Today **36** K views ↗», «**4K** Rendering» halqa progress (yashil), «Top reels 197K» ustunli diagramma (birinchisi qizil), «Followers **+2,184**» (yashil) | Vidjetlar pop bo‘ladi, raqamlar sanaladi, halqa to‘ladi |
| `/search-bar` | Oq, yumaloq **qidiruv qatori** (Google uslubi): «how to edit reels with AI», ostida takliflar ro‘yxati, qo‘shimcha qismi qalin: «… **for free**», «… **in Claude**», «… **fast**». Faol qator och fon | Matn harflab yoziladi, takliflar tushadi, kursor «in Claude» ga o‘tadi |
| `/notifications` | iOS uslubidagi **bildirishnomalar** to‘plami: Claude «Your reel is rendered in 4K ⚡», Instagram «lena.creates and 214 others liked your reel», «maria.makes started following you», «Your reel just passed 100K views 🎉» | Har biri yuqoridan siljib tushadi, ustma-ust yig‘iladi |
| `/pixel-title` | Ekranning yuqori yarmi: qora fon, **matritsa yomg‘iri**, terminal ramka «✳ Welcome to Claude Code!», katta **piksel shrift** «CLAUDE / CODE» (coral), maskot. Pastki yarmida klip | Sarlavha piksel bo‘lib yig‘iladi, maskot yuradi |
| `/timeline` | Yuqori yarmi och krem fon: sarlavha «Claude *renders it*» (2-qism coral kursiv serif). Ostida qorong‘i **montaj oynasi** `reel-final.mp4`: video kadr lentasi, coral subtitr bloklari, audio to‘lqin, playhead, foiz 72% → 100% | Playhead yuradi, foiz sanaladi |
| `/comment-reply` | Pastda qorong‘i Instagram **izohlar paneli**: lena.creates «how do you edit like this?? the effects are insane» ❤, javob: «it’s all Claude, comment CLAUDE and I’ll send them» | Panel pastdan chiqadi, javob yoziladi |

## 3. Vizual tizim
- **Rang:** Claude coral `#D97757` (aksent, maskot, piksel shrift, yozuvlar), qorong‘i ko‘mir UI `#262624` / `#1F1E1D`, oq matn, yashil ✓ `#3FB950`. Klipning o‘zi qorong‘i, binafsha-ko‘k.
- **Shrift:** UI uchun Inter/SF; qiymatlar mono (JetBrains Mono); sarlavhalarda piksel shrift (Press Start 2P kabi) va kursiv serif.
- **O‘tishlar:** piksel-mozaika dissolve (imzo o‘tish), qattiq kesish. Sekin o‘tishlar yo‘q.

## 4. Bizga foydali xulosalar
1. **Overlay effektlar kutubxonasi** — bu 8 ta effektni bizning HTML dvigatelda alohida komponent qilib yasash mumkin: checklist, glass-widgets, search-bar, notifications, timeline, comment-reply, pixel-title, mascot. O‘zbekcha matnlar bilan ular har qanday reelga (spiker klipi ustiga) qo‘yiladi. `reel-uslublari` skill’ida retseptlar bor.
2. **«Buyruq → render → natija» halqasi** — AI vositasini namoyish qilish uchun kuchli format. Masalan: «Claude’ga /maosh-hisob yozaman → natija» yoki o‘zimizning skill’larni ko‘rsatish.
3. **Piksel-mozaika dissolve** — arzon va effektli o‘tish: canvas’da blok o‘lchami 48→1 px kichrayadi va tasodifiy bloklar ochiladi (deterministik).
4. **CTA** — oldingi namunalardagi kabi «izohga so‘z yozing» + barcha natijalar to‘ri.
