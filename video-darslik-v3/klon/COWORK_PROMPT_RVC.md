Vazifa: A. Rejabboyevning ovozini (u rozilik bergan) videodarslik diktor audiosiga qo‘yish. Usul — RVC (Applio dasturi), mening kompyuterimda, GTX 1650 GPU bilan. Hammasi bepul, hech narsa sotib olma.

## 0. Avvalgi ish bo‘yicha
- Chatterbox yo‘lini to‘xtat: u o‘zbek tilini qo‘llamaydi va CPU’da juda sekin. Undagi fayllarni o‘chirma, lekin endi ishlatma.
- D:\MotionCourse ichidagi eski Python muhitiga tegma. Applio o‘z muhitini alohida o‘rnatadi.
- Arabboy-reference*.wav fayllarini ishlatma. Ular o‘rniga quyida keltirilgan 29 daqiqalik tozalangan namuna ishlatiladi.

## 1. Fayllar (Downloads ichidagi Klon_toplam papkasi yoki zip)
- Klon\dataset\ — 4 ta FLAC fayl, jami ~29 daqiqa, tozalangan ovoz namunalari.
- Klon\diktor.mp3 — Gemini diktor audiosi, 24:41 (1480 soniya).
Ikkalasini ko‘chir:
- 4 ta FLAC → D:\MotionCourse\dataset_rejabboyev\
- diktor.mp3 → D:\MotionCourse\diktor.mp3
Topilmasa, mendan so‘ra.

## 2. Applio’ni o‘rnatish
1. https://github.com/IAHispano/Applio → Releases’dagi oxirgi Windows versiyasini yukla. Yoki repo’ni klonla: D:\MotionCourse\Applio.
2. Hamma narsa D diskda bo‘lsin: C disk to‘lmasin.
3. run-install.bat ni ishga tushir. CUDA/GPU (NVIDIA) varianti so‘ralsa, shuni tanla.
4. run-applio.bat ni ishga tushir. Brauzerda http://127.0.0.1:6969 ochiladi.
5. Applio terminalida yoki sozlamalarida GPU ko‘rinishini tekshir: «NVIDIA GeForce GTX 1650» / «cuda» yozuvi chiqishi kerak. Faqat CPU ko‘rinsa — TO‘XTA, terminalning oxirgi 30 qatorini menga ko‘rsat.

## 3. Modelni o‘qitish (Applio → Train)
Ishlayotgan paytda kompyuter uyquga ketmasin. Windows: Sozlamalar → Tizim → Quvvat → Uyqu = «Hech qachon». Applio oynasini va terminalni yopma.
- Model name: rejabboyev
- Dataset path: D:\MotionCourse\dataset_rejabboyev
- Sample rate: 40k
- Preprocess Dataset → «tugadi» yozuvini kut.
- Extract: F0 method = rmvpe, Embedder model = contentvec → Extract → tugashini kut.
- Train sozlamalari:
  - Batch size = 4
  - Total epoch = 200
  - Save every epoch = 10
  - Pretrained = yoqilgan
  - GPU = 0
  Keyin Start Training.
  - Boshlanganidan 2–3 daqiqa o‘tib, Vazifa menejeri → Unumdorlik → GPU yuklanishini tekshir. Yuklanish deyarli 0% bo‘lsa (o‘qitish CPU’da ketyapti), to‘xtat va menga ayt.
  - «CUDA out of memory» chiqsa: Batch size = 2 qilib qayta boshlab yubor.
  - Har 30–40 daqiqada holatini tekshir: nechanchi epochda ekanini va taxminan qancha vaqt qolganini menga qisqa yoz.
- O‘qitish tugagach: Generate Index (Train bo‘limida).
- Natijada D:\MotionCourse\Applio\logs\rejabboyev\ ichida rejabboyev*.pth va *.index fayllari bo‘lishi kerak.

## 4. Sinov (Applio → Inference)
1. Sinov uchun bo‘lak kes: diktor.mp3 ning 60-soniyasidan 40 soniya.
   ffmpeg -ss 60 -t 40 -i D:\MotionCourse\diktor.mp3 D:\MotionCourse\sinov_kirish.wav
2. Sozlamalar:
   - Voice model: rejabboyev (eng oxirgi .pth)
   - Index file: rejabboyev’ning .index fayli
   - Audio: sinov_kirish.wav
   - Pitch: -5 — Gemini diktori ~157 Hz, Rejabboyev ~118 Hz, farqi taxminan 5 yarim ton.
   - F0 method: rmvpe
   - Search feature ratio (index rate): 0.75
   - Protect voiceless consonants: 0.33
   - Volume envelope: 1
   - Export format: WAV
   So‘ng Convert.
3. Natijani D:\MotionCourse\Rejabboyev_RVC_sinov_p-5.wav deb saqla.
4. Taqqoslash uchun yana ikkita variant yasa: Pitch = -4 va Pitch = -6. Nomlari: ..._p-4.wav, ..._p-6.wav.
5. TO‘XTA. Uchala faylni menga yubor va qaysi biri yoqqanini so‘ra. Men tanlamagunimcha to‘liq audioni aylantirma.
   - Agar men «metall tovush» yoki «shivirlash» bor desam: Protect = 0.4 qilib, index rate = 0.5 bilan qayta urin.

## 5. To‘liq audio (faqat men tasdiqlagandan keyin)
1. Butun D:\MotionCourse\diktor.mp3 ni men tanlagan Pitch va yuqoridagi boshqa sozlamalar bilan aylantir.
2. Natija: D:\MotionCourse\diktor_klon.wav
3. Tekshir: davomiyligi 1480 soniya ± 1 bo‘lishi kerak.
   ffprobe -v error -show_entries format=duration -of csv=p=0 D:\MotionCourse\diktor_klon.wav
4. Natijaning 3 joyini (boshi, o‘rtasi, oxiri) qisqa tinglab ko‘r: uzilish, jimlik yoki shovqin yo‘qligini tekshir.
5. diktor_klon.wav ni menga yubor. Hajmi katta bo‘lsa, Google Drive orqali yubor (Klon/natija papkasi).

## 6. Qoidalar
- Hech narsa sotib olma, pullik xizmatga o‘tma, karta ma’lumotini kiritma.
- Tushunarsiz xato chiqsa, o‘zing taxmin qilib katta o‘zgarish qilma. Xato matnining oxirgi 30 qatorini va skrinshotni menga ko‘rsat.
- Oxirida qisqa hisobot ber:
  - har qadam qancha vaqt oldi;
  - GPU ishladimi;
  - qaysi Pitch tanlandi;
  - qanday xatolar chiqdi va qanday hal qilinding.
