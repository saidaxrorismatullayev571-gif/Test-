Vazifa: A. Rejabboyevning B variant portretini uning klon ovoziga moslab GAPIRTIRISH — lablar, jag‘ va bosh tabiiy harakatlansin, odam haqiqatan gapirayotgandek ko‘rinsin. Bepul usul: SadTalker (Google Colab, T4 GPU). Hech narsa sotib olma. Rozilik bor.

## Kirish fayllari
- Portret: Drive → Klon/avatar_B/B_kvadrat_1024.png (kesilmagan kvadrat; dumaloq fayllarni ishlatma).
- Ovoz: rejabboyev_kirish.wav (o‘zing yasagan klon ovoz, ~75 soniya).

## 1. Drive’ni tayyorlash
- B_kvadrat_1024.png dan nusxa olib, Klon/portret.png deb nomla (eski portret.png bo‘lsa, almashtir).
- rejabboyev_kirish.wav ni Klon/natija/diktor_klon.wav deb nomlab qo‘y (daftar shu nomni o‘qiydi).

## 2. Colab
- colab.research.google.com → File → Upload notebook → Diktor_klon.ipynb.
- Runtime → Change runtime type → T4 GPU → Save.
- Faqat quyidagi kataklarni tartib bilan ishga tushir: 0 → B1 → B2 → B3. A qismini ishlatma, ovoz tayyor.
  - B1 — SadTalker o‘rnatiladi (~6 daqiqa). Oxirida checkpoints ro‘yxati chiqishi kerak.
  - B2 — portret 512×512 ko‘rinadi. Yuz to‘liq, markazda va kesilmagan bo‘lishi kerak.
  - B3 — gapiradigan video yasaladi (75 soniyalik audio uchun ~15–25 daqiqa). Natija: Klon/natija/yuz_video.mp4.

## 3. Sifatni oshirish (B3 dan oldin bitta o‘zgartirish)
B3 katagidagi inference.py qatorida `--size 256` ni `--size 512` ga almashtir va oxiriga ` --enhancer gfpgan` qo‘sh. Yuz aniqroq chiqadi. Vaqt taxminan ikki baravar oshadi, bu normal.
Agar "CUDA out of memory" chiqsa, `--size 256` ga qaytar, `--enhancer gfpgan` qolsin.

## 4. Sinov — TO‘XTAB ko‘rsat
To‘liq videodan oldin 10 soniyalik sinov qil:
- yangi katak qo‘sh: `!ffmpeg -y -t 10 -i /content/drive/MyDrive/Klon/natija/diktor_klon.wav /content/sinov10.wav`
- B3 ni bir marta faqat shu fayl bilan ishga tushir. Buning uchun B3 dagi `diktor_klon.wav` yo‘lini vaqtincha `/content/sinov10.wav` ga almashtir.
- Natijani menga yubor va to‘xta. Tekshiradigan narsalar:
  - lablar ovozga mos ochilib-yopiladimi;
  - yuz buzilmayaptimi (ko‘z, tish, iyak);
  - bosh harakati tabiiymi.
Men «davom et» desam, B3 ni asl yo‘l bilan to‘liq ishga tushir.

## 5. Xatolar
- `No module named 'torchvision.transforms.functional_tensor'` — yangi katakda:
  `!sed -i 's/torchvision.transforms.functional_tensor/torchvision.transforms.functional/' /content/st_venv/lib/python3.10/site-packages/basicsr/data/degradations.py`
  so‘ng B3 ni qayta ishga tushir.
- Sessiya uzilsa — 0, B1, B2 ni qayta ishga tushir, keyin B3. Tayyor bo‘laklar Drive’da saqlangan, ular qayta ishlanmaydi.
- GPU limiti tugasa, menga ayt. Pullik yo‘lga o‘tma.
- Tushunarsiz xato chiqsa, xatoning oxirgi 30 qatorini va skrinshotni ko‘rsat.

## 6. Natija talablari
- Fayl: Klon/natija/yuz_video.mp4.
- Davomiyligi audio bilan bir xil (~75,5 soniya). ffprobe bilan tekshir.
- Kvadrat format, yuz markazda.
- Ovoz bo‘lsa ham, bo‘lmasa ham farqi yo‘q — men asl audiodan foydalanaman.
- yuz_video.mp4 ni menga yubor. Hajmi katta bo‘lsa, Drive havolasi orqali yubor.
- Qisqa hisobot ber: qancha vaqt ketdi, qaysi o‘lcham ishlatildi (512 yoki 256), qanday xatolar chiqdi.
