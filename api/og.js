export const config = {
  runtime: 'edge',
};

export default async function handler(request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "ai-mikuji";
  const body = `
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#ff6ec7"/>
      <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle"
            font-size="72" font-family="sans-serif" fill="#fff">${title}</text>
    </svg>
  `;
  return new Response(body, {
    headers: {
      'Content-Type': 'image/svg+xml'
    }
  });
}