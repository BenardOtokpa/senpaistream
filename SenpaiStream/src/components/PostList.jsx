import { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostList.module.css";
function PostList() {
  const [textData, setTextData] = useState("");
  const [authorData, setAuthorData] = useState("");

  function changeBodyHandler(e) {
    setTextData(e.target.value);
  }
  function changeAuthorHandler(e) {
    setAuthorData(e.target.value);
  }
  // This function will handle changes to the post body

  return (
    <>
      <NewPost
        onTextChange={changeBodyHandler}
        onAuthorChange={changeAuthorHandler}
      />
      <ul className={classes.posts}>
        <Post author={authorData} text={textData} />

        <Post author="Victoer Ototkpa" text="Nextjs IS so Awesome!!" />
      </ul>
    </>
  );
}
export default PostList;
