import classes from "./Post.module.css";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

function Post({ id, author, text, createdAt }) {
  return (
    <div className={classes.post}>
      <Link to={id}>
        <h2 className={classes.author}>{author}</h2>
        <p className={classes.text}>{text}</p>
        <br />
        <span
          style={{
            position: "absolute",
            bottom: "0.5rem",
            right: "0.5rem",
            fontSize: "0.8rem",
            color: "#fff",
          }}
        >
          {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
        </span>
      </Link>
    </div>
  );
}

export default Post;
