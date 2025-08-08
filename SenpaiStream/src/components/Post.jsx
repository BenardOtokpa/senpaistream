import classes from "./Post.module.css";
import { formatDistanceToNow } from "date-fns";

function Post({ author, text, createdAt }) {
  return (
    <div className={classes.post}>
      <h2 className={classes.author}>{author}</h2>
      <p className={classes.text}>{text}</p>
      <br />
      <span style={{ float: "right" }}>
        {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
      </span>
    </div>
  );
}

export default Post;
