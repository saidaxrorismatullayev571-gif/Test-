# 9 ta ochiq repozitoriy — yuklash manifesti

Bu fayl manba kodlarini video loyiha ichiga nusxalash o'rniga ularning rasmiy GitHub manbasi, vazifasi va o'rnatish nuqtasini saqlaydi. Har loyiha o'z repozitoriyida versiyalanadi; shu sabab ularni alohida papkaga clone qilish to'g'ri yo'l.

## To'liq ro'yxat

| # | Pullik muqobil | Ochiq repo | Vazifa | Bepul chegarasi |
|---|---|---|---|---|
| 1 | Higgsfield | [Open Generative AI](https://github.com/Anil-matcha/Open-Generative-AI) | AI rasm, video, audio, lipsync | Kod ochiq. Bulut modeli uchun API/kredit kerak bo'lishi mumkin. |
| 2 | ElevenLabs | [VoiceStudio](https://github.com/debpalash/VoiceStudio) | TTS, voice clone, dub, transkript | Kod/model ochiq bo'lishi mumkin; GPU, model va ovoz ruxsati kerak. |
| 3 | Semrush | [OpenSEO](https://github.com/every-app/open-seo) | SEO, kalit so'z, sayt auditi | Kod ochiq; ayrim data/API xizmatlari pullik bo'lishi mumkin. |
| 4 | Notion | [AppFlowy](https://github.com/AppFlowy-IO/AppFlowy) | Hujjat, reja, bilim bazasi | Lokal foydalanish ochiq; cloud qo'shimchalari alohida. |
| 5 | Wispr Flow | [OpenWhispr](https://github.com/OpenWhispr/openwhispr) | Ovozdan matn | Lokal model/kompyuter resursi talab qilinadi. |
| 6 | Asana | [OpenProject](https://github.com/opf/openproject) | Vazifa va loyiha boshqaruvi | Self-host mumkin; server va administratsiya siz tomonda. |
| 7 | Calendly | [Cal.diy](https://github.com/calcom/cal.diy) | Uchrashuvga yozilish | Self-host mumkin; hosting va kalendar integratsiyasi alohida. |
| 8 | Intercom | [Chatwoot](https://github.com/chatwoot/chatwoot) | Mijoz supporti va yozishma | Self-host mumkin; server, email/WhatsApp kabi integratsiyalar alohida. |
| 9 | Loom | [Cap](https://github.com/CapSoftware/Cap) | Ekran yozuvi va video ulashish | Desktop yozuv usuli uchun qulay; serverli ulashish alohida. |

## Lokal kompyuterga yuklash

Quyidagi buyruqlar Git o'rnatilgan kompyuter terminalida ishlaydi:

```bash
mkdir ochiq-repolar
cd ochiq-repolar

git clone https://github.com/Anil-matcha/Open-Generative-AI.git
git clone https://github.com/debpalash/VoiceStudio.git
git clone https://github.com/every-app/open-seo.git
git clone https://github.com/AppFlowy-IO/AppFlowy.git
git clone https://github.com/OpenWhispr/openwhispr.git
git clone https://github.com/opf/openproject.git
git clone https://github.com/calcom/cal.diy.git
git clone https://github.com/chatwoot/chatwoot.git
git clone https://github.com/CapSoftware/Cap.git
```

Bir yo'la hammasini o'rnatish tavsiya qilinmaydi. Ular katta va texnik talablari har xil. Avval video loyiha uchun kerak bo'ladiganlari:

1. **Cap** — ekran darsini yozish.
2. **OpenWhispr** — audio → matn → subtitr.
3. **VoiceStudio** — ruxsatli ovoz kloni/TTS sinovi.
4. **Open Generative AI** — rasm va qisqa B-roll sinovi.

## Video loyiha uchun tanlangan tartib

| Bosqich | Repo | Aniq foydalanish |
|---|---|---|
| 1 | Cap | QGIS, CRM yoki dasturdagi amaliy ekran yozuvi |
| 2 | OpenWhispr | Diktor audio vaqtlarini matnga bog'lash va subtitr qoralamasi |
| 3 | VoiceStudio | Ovoz sinovi; faqat egasining ruxsati bor ovozlar |
| 4 | Open Generative AI | Fon, ikonka, B-roll yoki portrait test |
| 5 | AppFlowy | Ssenariy, storyboard va tasdiqlashlar bazasi |

## GitHub loyihasiga nima qo'shildi

- Barcha 9 repo havolasi va texnik xaritasi: `texnologiyalar/OPEN_GENERATIVE_AI_VA_9_REPO_XARITASI.md`.
- Bepul/ochiq kod/API kredit chegaralari: `uslub_namunalar/FREE_VA_OCHIQ_MANBALAR_9_VIDEO_XARITASI.md`.
- Ushbu manifest: lokal kompyuterga kerak bo'lganda to'g'ri yuklash uchun.

Asl repolar alohida manbada qoladi. Ularning kodini video loyiha repozitoriyiga nusxalash versiyalarni chalkashtiradi, loyiha hajmini oshiradi va kelajakdagi yangilanishni qiyinlashtiradi.
