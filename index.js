export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/api/hello") {
      return new Response(JSON.stringify({ message: "Hello from Cloudflare Worker!" }), {
        headers: { "Content-Type": "application/json" }
      });
    }
    if (url.pathname === "/api/message" && request.method === "POST") {
      const body = await request.json();
      return new Response(JSON.stringify({ name: body.name, message: body.message }), {
        headers: { "Content-Type": "application/json" }
      });
    }
    return new Response("Not found", { status: 404 });
  }
};
