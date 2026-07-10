import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function startServer() {
  const app = express();
  app.use(express.json());

  // Lazy initialize Gemini safely so that missing key doesn't crash the server startup
  let aiClient: GoogleGenAI | null = null;
  function getGeminiClient(): GoogleGenAI {
    if (!aiClient) {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
        throw new Error('GEMINI_API_KEY sozlanmagan. Iltimos, AI Studio Secrets bo\'limida kalitni o\'rnating.');
      }
      aiClient = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });
    }
    return aiClient;
  }

  // API endpoint for AI Career & Medical Advisor
  app.post('/api/gemini/advisor', async (req, res) => {
    try {
      const { prompt } = req.body;
      if (!prompt) {
        return res.status(400).json({ error: 'Sarlavha yoki savol matni bo\'sh bo\'lishi mumkin emas' });
      }

      const ai = getGeminiClient();
      
      const chat = ai.chats.create({
        model: 'gemini-3.5-flash',
        config: {
          systemInstruction: `Siz iMed Team tibbiy ta'lim platformasining yetakchi sun'iy intellekt maslahatchisiz.
Ismingiz: "iMed AI Maslahat".
Vazifangiz: Shifokorlar, tibbiyot talabalari va rezidenturaga tayyorgarlik ko'rayotganlarga iMed Team platformasidagi kurslar, darsliklar va tibbiy karyera bo'yicha yo'nalish berish, savollariga javob berish va ularning klinik fikrlashini rivojlantirish.
Til: FAQAT o'zbek tilida, juda xushmuomala, professional va yuqori darajadagi tonda muloqot qiling.
iMed Team haqidagi asosiy ma'lumotlar:
- 2021-yilda O'zbekistonda tashkil etilgan.
- Maqsad: O'zbekistonda dalillarga asoslangan tibbiyotni (Evidence-Based Medicine) o'rgatish va malakali shifokorlarni tayyorlash.
- Kurslar: Anatomiya, Fiziologiya, Biokimyo, Farmakologiya, Kardiologiya, Nevrologiya, Pediatriya, Endokrinologiya, Radiologiya, Shoshilinch tibbiy yordam va UTT.
- Kurslarda amaliyotchi mutaxassislar va xalqaro tajribaga ega shifokorlar dars berishadi.
- Talabalar soni: 10,000 dan ortiq.
- Mobil ilova va qulay onlayn platforma mavjud.
Javobni doimo chiroyli formatlangan, paragraflar, emoji belgilaridan (faqat kerakli joylarda) foydalangan holda, o'qishga oson ko'rinishda bering. Savol egasini har doim professional rivojlanishga va iMed Team kurslarida o'qishga ruhlantiring.`,
          temperature: 0.7,
        },
      });

      const response = await chat.sendMessage({ message: prompt });
      return res.json({ text: response.text });
    } catch (error: any) {
      console.error('Gemini API Error:', error);
      return res.status(500).json({ error: error.message || 'Xatolik yuz berdi' });
    }
  });

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    // Dev mode with Vite middleware
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  const port = 3000;
  app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

startServer();
