export async function onRequest(context) {

  if (context.request.method !== "POST") {
    return new Response("Method not allowed", {
      status: 405
    });
  }

  const key = "NZXA-" + crypto.randomUUID();

  return Response.json({
    api: "nadeZX.a",
    key: key
  });
}
