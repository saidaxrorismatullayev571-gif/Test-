Ovoz klonlash ishing bo‘yicha xulosa va keyingi aniq vazifa.

## Nima uchun V1 va V2 o‘xshamadi
Ikkala sinovni o‘lchab, A. Rejabboyevning asl dars yozuvlari bilan solishtirdim:

| Ovoz | Asosiy ton (F0, median) | Spektr markazi (tembr) | Asl ovozdan MFCC masofasi |
|---|---|---|---|
| Asl ovoz | 118 Hz | 565 Hz (to‘q, iliq) | 0 |
| Asl ovozning boshqa bo‘laklari | — | — | 0,30–0,46 (tabiiy farq) |
| V1 | 119 Hz | 763 Hz | 0,80 |
| V2 | 129 Hz | 846 Hz | 0,60 |

Ikkala klon ham asl ovoz doirasidan tashqarida. Ular yorqinroq va ingichkaroq; V2 ning ovozi biroz baland ham.

Asosiy sabablar:
1. **Model o‘zbek tilini bilmaydi.** Chatterbox-TTS 0.1.7 inglizcha model, uning ko‘p tilli versiyasida ham o‘zbek tili yo‘q. Shuning uchun model o‘zbekcha matnni ingliz fonetikasi bilan o‘qiydi: talaffuz chet elliknikiday chiqadi. Bu muammo etalon parchani almashtirish yoki pauza sozlamalarini o‘zgartirish bilan tuzalmaydi. Shuning uchun V3 rejasi (boshqa 20–30 soniyalik parcha, talaffuz va pauza sozlamalari) natijani tubdan yaxshilamaydi.
2. **Zero-shot klon tembrni taxminan nusxalaydi.** 30 soniyalik etalondan ovozning to‘qligi va xarakteri to‘liq ko‘chmaydi. Doimiy o‘qitilgan model kerak.
3. **GPU ishlamagan, chunki PyTorch CPU versiyasida o‘rnatilgan.** Windows’da oddiy `pip install torch` GPU’siz versiyani o‘rnatadi. GTX 1650 CUDA’ni qo‘llab-quvvatlaydi (compute 7.5, 4 GB VRAM). Shu tufayli 12 soniyaga 14 daqiqa ketgan: 24 daqiqalik darsga ~28 soat ketadi.
4. **Namuna kam olingan.** Faqat 3 daqiqa material va undan 30 soniya ishlatilgan. Holbuki 4 ta darsdan tozalangan **29 daqiqalik** namuna tayyor.

## Yangi usul: RVC (ovozni ovozga aylantirish)
- O‘zbekcha talaffuzni Google AI Studio (Gemini TTS) diktori to‘g‘ri qiladi. Diktor audiosi tayyor: diktor.mp3, 24:41.
- RVC bu audioning faqat tembrini A. Rejabboyevning ovoziga almashtiradi. Model 29 daqiqalik namunada bir marta o‘qitiladi, keyin doimiy ishlatiladi.
- Diktor audiosidagi so‘zlarning vaqti o‘zgarmaydi. Video animatsiyasi shu vaqtlarga moslangani uchun bu juda muhim.

## Vazifa

### 1. GPU’ni tuzat (Chatterbox muhitida, keyinchalik kerak bo‘lsa)
```
D:\MotionCourse\<venv>\Scripts\python -m pip uninstall -y torch torchaudio
D:\MotionCourse\<venv>\Scripts\python -m pip install torch==2.6.0 torchaudio==2.6.0 --index-url https://download.pytorch.org/whl/cu124
D:\MotionCourse\<venv>\Scripts\python -c "import torch;print(torch.cuda.is_available(), torch.cuda.get_device_name(0))"
```
Oxirgi buyruq `True NVIDIA GeForce GTX 1650` chiqarishi kerak. NVIDIA drayveri eski bo‘lsa, `nvidia-smi` dagi «CUDA Version» ni ko‘rsat.

### 2. Applio (RVC) o‘rnat
- https://github.com/IAHispano/Applio → oxirgi Windows release yoki `git clone`, joyi D:\MotionCourse\Applio.
- `run-install.bat` ni ishga tushir; CUDA so‘ralsa, CUDA (NVIDIA) ni tanla. Keyin `run-applio.bat` → http://127.0.0.1:6969.
- Applio o‘z muhitini o‘zi o‘rnatadi. Chatterbox muhitiga tegma.

### 3. Ma’lumot
- Klon_toplam.zip → Klon\dataset\ ichidagi 4 ta FLAC faylni (jami ~29 daqiqa, allaqachon tozalangan va ovoz balandligi tenglangan) D:\MotionCourse\dataset_rejabboyev\ ga ko‘chir.
- Bu fayllarni qayta kesma va 24 kHz ga tushirma. arabboy-reference* fayllarini ishlatma.
- Klon\diktor.mp3 → D:\MotionCourse\diktor.mp3.

### 4. O‘qitish (Applio → Train)
- Model name: rejabboyev
- Dataset path: D:\MotionCourse\dataset_rejabboyev
- Sample rate: 40k
- Preprocess
- Extract: rmvpe, contentvec
- Train:
  - Batch size 4 (CUDA out of memory chiqsa — 2)
  - Total epoch 200
  - Save every epoch 10
  - Pretrained yoqilgan
  - GPU 0
- Train boshlangach Vazifa menejerida GPU yuklanishini tekshir. Yuklanish 0% bo‘lsa, to‘xta va xabar ber.
- Oxirida Generate Index.
- Kompyuter uyquga ketmasin.

### 5. Sinov (Applio → Inference)
- Kirish: `ffmpeg -ss 60 -t 40 -i D:\MotionCourse\diktor.mp3 D:\MotionCourse\sinov_kirish.wav`
- Sozlamalar:
  - Model: rejabboyev (oxirgi .pth) + .index
  - F0: rmvpe
  - Index rate: 0.75
  - Protect: 0.33
  - Volume envelope: 1
  - WAV
- Pitch uchun 3 variant: **-5**, -4, -6. Gemini diktori ~157 Hz, Rejabboyev ~118 Hz, farqi ≈ 5 yarim ton.
- Natijalar: Rejabboyev_RVC_sinov_p-5.wav, _p-4.wav, _p-6.wav.
- Uchalasini menga yubor va to‘xta. Men tanlamagunimcha to‘liq audioni aylantirma.
- Metall tovush yoki shivirlash eshitilsa: Protect 0.4, index rate 0.5.

### 6. To‘liq audio (men tasdiqlagandan keyin)
- Butun diktor.mp3 ni tanlangan Pitch bilan aylantir → D:\MotionCourse\diktor_klon.wav.
- Davomiyligi 1480 ± 1 soniya ekanini ffprobe bilan tekshir.
- Boshi, o‘rtasi va oxirini tinglab ko‘r, keyin menga yubor.

## Qoidalar
- Hech narsa sotib olma.
- Natijani menga «tayyor» deb ko‘rsatishdan oldin o‘zing tekshir: fayl ochiladimi, davomiyligi to‘g‘rimi, GPU ishladimi.
- Xato bo‘lsa, taxmin qilib katta o‘zgarish qilma. Xato matnining oxirgi 30 qatorini ko‘rsat.
- Har bosqichdan keyin qisqa hisobot ber: qancha vaqt ketdi, nima chiqdi.
