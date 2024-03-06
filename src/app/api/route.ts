export async function GET(request: Request) {
  return Response.json({
    message: `The time is ${new Date().toLocaleTimeString()}`,
  });
}
