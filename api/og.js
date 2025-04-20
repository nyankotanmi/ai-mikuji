
import { readFileSync } from "fs";
import path from "path";

export const config = {
  runtime: "edge",
};

export default async function handler(req) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "Sunshine Idol";
  const lang = searchParams.get("lang") || "ja";

  const jsonPath = path.resolve(process.cwd(), "ai_mikuji_character_data.json");
  const characters = JSON.parse(readFileSync(jsonPath, "utf8"));

  const char = characters.find(c => c.title === title);
  if (!char) {
    return new Response("Character not found", { status: 404 });
  }

  const bg = char.color || "#ff90c2";
  const name = char[lang] || char.title;
  const role = char.role || "";

  const imageUrl = `https://ai-mikuji.vercel.app/${char.file}`;
  const svg = \`
  <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&family=Poppins:wght@700&display=swap');
      .bg { fill: ${bg}; }
      .title { font-size: 60px; font-family: 'Poppins', sans-serif; fill: white; font-weight: bold; }
      .role { font-size: 36px; font-family: 'Nanum Pen Script', cursive; fill: white; }
    </style>
    <rect class="bg" width="100%" height="100%"/>
    <image href="\${imageUrl}" x="100" y="100" height="430" width="350" preserveAspectRatio="xMidYMid slice" clip-path="circle(175px at 275px 315px)" />
    <text x="520" y="260" class="title">\${name}</text>
    <text x="520" y="330" class="role">\${role}</text>
  </svg>
  \`;

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
    },
  });
}
