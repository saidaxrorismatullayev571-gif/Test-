# Reel 01: «Biznesingiz sizsiz ishlaydimi?» (@tizimli.biznes, qadaladigan post №1)

- **Format:** 9:16, ~40 s, diktor (AI Studio) + kinetik matn + 3 ta sahna rasmi + neon UI.
- **Manba g‘oyasi:** `audio__59_` (3 ta savol). Matn **o‘z so‘zlarimiz bilan**, aynan iqtibos emas.

## Ovoz: Google AI Studio → Generate speech
- **Model:** `Gemini 2.5 Pro Preview TTS` (bo‘lmasa Flash TTS).
- **Mode:** Single-speaker.
- **Ovoz:** **Charon** (asosiy). Zaxira: **Orus**, keyin **Iapetus**.
- **Style instructions** maydoniga (TTS matnining ichiga emas):
```
Read in Uzbek language. A calm, confident, warm male business mentor talking directly to a business owner. Medium-low pitch, clear articulation, natural pace (not fast). Short dramatic pause after the first question. Slightly serious tone on the problem, warm and encouraging tone on "tabriklayman" and the final call to action.
```
- **Text** maydoniga: `matn.txt` mazmuni (faqat aytiladigan matn).
- Natija: WAV/MP3 → menga yuboriladi (`ovoz.wav`).

## Kadrlar (ovozga keyin so‘zma-so‘z bog‘lanadi)
| Vaqt (taxm.) | Matn bo‘lagi | Vizual | Ekrandagi yozuv |
|---|---|---|---|
| 0–3 s | «Bir oyga yo‘qolib qolsangiz…» | `direktor_charchagan`, tez zoom-in + glitch, impact SFX | **1 OY SIZSIZ?** |
| 3–5 s | «uchta savol bilan…» | 3 ta bo‘sh katakcha □□□ paydo bo‘ladi | **3 TA SAVOL** |
| 5–9 s | 1-savol | charchagan rasm, qizil «⏸ ish to‘xtadi» belgisi | **1. Siz aralashmasangiz, ish to‘xtaydimi?** |
| 9–17 s | 2-savol | `direktor_telefon_band`, bildirishnomalar uchib keladi: «Chegirma?», «Erta ketsam?», «Ta’til?» | **2. Har mayda ishga sizdan ruxsatmi?** |
| 17–25 s | 3-savol | Kalendar «30 kun» varaqlanadi → 3 ta yo‘l: ↗ / → / ↘ grafik | **3. 1 oy siz yo‘q — savdo?** |
| 25–31 s | «tushib ketsa… tizim yo‘q» | grafik ↘ qizil, keyin rasmlar qorayadi | **Aybdor xodim emas → TIZIM YO‘Q** |
| 31–35 s | «tabriklayman…» | `direktor_xotirjam`, yashil ✓, iliq yorug‘ | **✓ Biznesingiz tizimli** |
| 35–40 s | CTA | logo (av2) + @tizimli.biznes | **Nechta «HA»? Izohda yozing 👇** |

## Caption (joylash uchun)
```
1 oyga yo‘qolib qolsangiz, biznesingiz nima bo‘ladi? 🤔

3 ta savol bilan tekshiring:
1️⃣ Siz aralashmasangiz, ish to‘xtaydimi?
2️⃣ Har bir mayda ish uchun sizdan ruxsat so‘rashadimi?
3️⃣ 1 oy siz yo‘q bo‘lsangiz, savdo o‘sadimi, joyida qoladimi yoki tushadimi?

Savdo tushsa — muammo xodimlarda emas, tizim yo‘qligida.

👇 Nechta savolga «HA» dedingiz? Izohda yozing.
Har kuni 1 ta amaliy qoida — @tizimli.biznes

#biznes #tizimlashtirish #biznesuz #tadbirkor #rahbar
```
- Joylashda: **AI label** yoqiladi (rasmlardagi odam AI), keyin **Profilga qadash**.
