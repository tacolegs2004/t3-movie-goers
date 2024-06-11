import { getComments } from "~/server/queries";

export default async function POST(request: Request) {
  const formData = await request.formData();
  const comments = await getComments();

  const comment = {
    name: formData.get("name") as string,
    avatar: formData.get("avatar") as string,
    body: formData.get("body") as string,
  };

  return new Response(JSON.stringify(comment), {
    status: 200,
  });
}
