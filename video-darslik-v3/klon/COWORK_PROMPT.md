Sen mening kompyuterimda ishlaysan. Vazifa: o‘quv videodarsligimiz uchun diktor ovozini klon qilish va uning gapiradigan dumaloq videosini yasash. Hammasi bepul, Google Drive + Google Colab (T4 GPU) orqali. Ovoz va rasm egasi bunga rozilik bergan.

## Qo‘limdagi fayllar (Downloads papkasida qidir)
1. `dataset.zip` — diktorning tozalangan ovoz namunalari (4 ta FLAC, jami 29 daqiqa).
2. `Diktor_klon.ipynb` — tayyor Colab daftari.
3. `YORIQNOMA.md` — yo‘riqnoma (portret uchun AI Studio buyrug‘i shu yerda).
4. Diktor audiosi — Google AI Studio’da yasalgan, nomi `Generated_Audio_October_29__2026_-_9_31AM.mp3` ga o‘xshash (≈24 daqiqa). Topilmasa, mendan so‘ra.
5. Diktorning rasmlari (oq kostyumdagi va qora ko‘ylakdagi portretlar). Topilmasa, mendan so‘ra.

## 1-qadam. Google Drive
- drive.google.com → `MyDrive` ichida `Klon` papkasini och (bor bo‘lsa, o‘shani ishlat).
- `dataset.zip` ni kompyuterda och, ichidagi `dataset` papkasini to‘liq `Klon/` ichiga yukla → `Klon/dataset/*.flac` (4 ta fayl).
- Diktor audiosini `Klon/` ga yukla va nomini aniq `diktor.mp3` qil.

## 2-qadam. Portret (Google AI Studio)
- aistudio.google.com → rasm tahrirlaydigan Gemini modelini tanla (Gemini Image / «Nano Banana»).
- Oq kostyumdagi, kameraga to‘g‘ri qaragan rasmni yukla va `YORIQNOMA.md` dagi 2-bo‘limdagi inglizcha buyruqni aynan shunday yoz.
- 3–4 variant yasat. Yuzi asl rasmdagidan farq qilmaydigan, og‘zi yopiq, kameraga qaragan, eng tabiiyini tanla.
- Tanlashdan oldin 2–3 eng yaxshi variantni menga ko‘rsat va qaysi biri ekanini so‘ra.
- Tanlanganini yuklab ol, `portret.png` deb nomla va `Klon/` ga yukla.

## 3-qadam. Colab — ovoz klon (A qism)
- colab.research.google.com → File → Upload notebook → `Diktor_klon.ipynb`.
- Runtime → Change runtime type → **T4 GPU** → Save.
- Kataklarni tartib bilan ishga tushir, har biri tugashini kut va natijasini o‘qi:
  - **0** — Drive’ga ruxsat so‘raydi, ruxsat ber. `dataset fayllari: 4`, `diktor.mp3 ✓`, `portret.png ✓` chiqishi kerak.
  - **A1** — o‘rnatish (~5 daqiqa). Oxirida `✓ tayyor`.
  - **A2** — `JAMI: ~29 daqiqa ✓`.
  - **A3** — bo‘laklash va xususiyatlar (~5–10 daqiqa).
  - **A4** — o‘qitish, 1–2 soat. Tugaganda `.pth` va `.index` fayllari ro‘yxati chiqadi.
- **A5 (sinov):** `SINOV = True`, `PITCH`:
  - diktor.mp3 dagi ovoz ayolniki bo‘lsa `-12`, erkakniki bo‘lsa `0`. Buni bilish uchun diktor.mp3 ni 10 soniya tingla.
  - Natija `Klon/natija/sinov_klon.wav`.
  - **TO‘XTA va menga yubor/eshittir**, «davom etaymi?» deb so‘ra. Men rozi bo‘lmagunimcha to‘liq aylantirishni boshlama.
- Men rozi bo‘lsam: A5 ni `SINOV = False` bilan qayta ishga tushir → `Klon/natija/diktor_klon.wav` (~24 daqiqa).

## 4-qadam. Colab — gapiradigan yuz (B qism)
- **B1** — o‘rnatish (~6 daqiqa).
- **B2** — portret 512×512 ko‘rinadi. Yuz kesilib qolmaganini tekshir.
- **B3** — bo‘laklab video yasaydi (1–2 soat). Har bo‘lak `Klon/natija/yuz_bolaklar/` ga saqlanadi. Oxirida `Klon/natija/yuz_video.mp4`.

## Colab bilan ishlash qoidalari
- Bepul Colab brauzer yorlig‘i harakatsiz qolsa uziladi. Yorliqni ochiq va faol tut, har 20–30 daqiqada holatini tekshir.
- Sessiya uzilsa yoki «Runtime disconnected» chiqsa: GPU’ni qayta tanla. Keyin **0** va kerakli o‘rnatish katagini (A1 yoki B1) qayta ishga tushir. So‘ng to‘xtagan katakdan davom et — ish Drive’da saqlangan.
  - A4 qayta ishga tushirilsa, oxirgi saqlangan joyidan davom etadi.
  - B3 qayta ishga tushirilsa, tayyor bo‘laklarni o‘tkazib yuboradi.
- GPU limiti tugasa («cannot connect to GPU backend»), menga ayt. Bir necha soatdan keyin yoki ertaga davom etamiz, boshqa pullik yo‘lga o‘tma.
- Hech narsa sotib olma, Colab Pro’ga o‘tma, kredit karta kiritma.

## Xatolar bo‘lsa
- **`No module named 'torchvision.transforms.functional_tensor'`** (B3 da) — yangi katak qo‘shib ishga tushir:
  `!sed -i 's/torchvision.transforms.functional_tensor/torchvision.transforms.functional/' /content/st_venv/lib/python3.10/site-packages/basicsr/data/degradations.py`
  Keyin B3 ni qayta ishga tushir.
- **`CUDA out of memory`** — A4 da `--batch-size 8` ni `4` ga, B3 da `--batch_size 4` ni `2` ga o‘zgartir.
- **A1 yoki B1 da paket o‘rnatish xatosi** — xatoning oxirgi 30 qatorini nusxalab, menga yubor. O‘zing taxmin qilib kodni katta o‘zgartirma.
- Boshqa har qanday tushunarsiz xato — skrinshot va xato matnini menga ko‘rsat.

## Yakunda
Menga quyidagilarni ber (Drive havolasi yoki yuklab olingan fayl):
1. `Klon/natija/diktor_klon.wav`
2. `Klon/natija/yuz_video.mp4`
3. Qisqa hisobot: har qadam qancha vaqt oldi, PITCH qiymati, qanday xatolar chiqdi va qanday hal qilinding.
