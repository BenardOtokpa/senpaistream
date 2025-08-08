import { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostList.module.css";

function PostList() {
  const [enteredText, setEnteredText] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function changeBodyHandler(e) {
    setEnteredText(e.target.value);
  }
  function changeAuthorHandler(e) {
    setEnteredAuthor(e.target.value);
  }
  // This function will handle changes to the post body

  return (
    <>
      <Modal>
        <NewPost
          onTextChange={changeBodyHandler}
          onAuthorChange={changeAuthorHandler}
        />
      </Modal>
      
      <ul className={classes.posts}>
        <Post author={enteredAuthor} text={enteredText} />

        <Post author="Victor Ototkpa" text="Nextjs IS so Awesome!!" />
      </ul>
    </>
  );
}
export default PostList;
