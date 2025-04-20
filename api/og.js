
// /api/og.js  (Vercel Edge Function sample for dynamic OGP card)
export const config = { runtime: "edge" };
export default async function handler(req) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "ai‑mikuji";
  const svg = \`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs><style>@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700');</style></defs>
  <rect width="100%" height="100%" fill="#ff6ec7"/>
  <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="72" font-family="Poppins" fill="#fff">\${title}</text>
  </svg>\`;
  return new Response(svg,{headers:{'content-type':'image/svg+xml'}});
}
