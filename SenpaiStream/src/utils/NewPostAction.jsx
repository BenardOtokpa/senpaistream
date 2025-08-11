import { redirect } from "react-router-dom";

export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  postData.createdAt = new Date().toISOString(); // Add a timestamp for the post
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return redirect("/"); // Redirect to the home page after creating a post
}
