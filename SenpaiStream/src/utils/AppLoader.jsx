export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      const resData = await response.json();
      return resData.posts;
}
