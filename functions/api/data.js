export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.pathname === "/api/data") {

    if (context.request.method === "GET") {
      return Response.json({
        api: "nadeZX.a",
        message: "API working"
      });
    }

    if (context.request.method === "POST") {
      const data = await context.request.json();

      return Response.json({
        received: data
      });
    }
  }

  return new Response("404 not found", { status: 404 });
}
