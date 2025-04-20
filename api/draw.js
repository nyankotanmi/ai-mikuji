import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async (req, res) => {
  const { name = "Guest" } = req.query;
  const today = new Date().toISOString().split("T")[0];
  const seed = `${name}-${today}-${Date.now()}`;

  const prompt = `
  あなたは黒衣のAI占い師。
  以下のフォーマットでおみくじを書け。
  ---
  # 運勢: （大吉/中吉/小吉/凶/大凶）
  # 詩句: 4-7-5 の韻文（漢字多め）
  # 行動: 50字以内で具体的アドバイス
  ---
  ユーザー名: ${name}
  日付: ${today}
  シード: ${seed}
  `;

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-2024-04-09",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.9
  });

  res.status(200).json({ result: completion.choices[0].message.content.trim() });
};
