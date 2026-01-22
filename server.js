import { serve } from 'bun';

serve({
  async fetch(req) {
    const url = new URL(req.url);
    let filepath = url.pathname === '/' ? '/index.html' : url.pathname;
    
    try {
      const file = Bun.file(`.${filepath}`);
      return new Response(file);
    } catch {
      return new Response('404 - Page not found', { status: 404 });
    }
  },
  port: 4321,
});

console.log(`🚀 Server running at http://localhost:4321`);