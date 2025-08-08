import { useState } from "react";
import classes from "./NewPost.module.css";

// This component can be used to create a new post
function NewPost({ onCancel, onAddPost }) {
  const [enteredText, setEnteredText] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function changeTextHandler(e) {
    setEnteredText(e.target.value);
  }
  function changeAuthorHandler(e) {
    setEnteredAuthor(e.target.value);
  }
  function submitHandler(e) {
    e.preventDefault();
    const postData = {
      text: enteredText,
      author: enteredAuthor,
      createdAt: new Date().toISOString(), // Add a timestamp for the post
    };
    onAddPost(postData); // Pass the post data to the parent component
    onCancel(); // Close the modal after submission
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeTextHandler} />
      </p>

      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={changeAuthorHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
