export async function loader({ params }) {
  const response = await fetch("https://senpai-dummy-backend-repo.onrender.com/posts" + params.postId);
  const resData = await response.json();

  return resData.post;
}
