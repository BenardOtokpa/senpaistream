import classes from './Post.module.css'

function Post({author, text}) {
 
  return (
    <div className={classes.post}>
      <h2 className={classes.author}>{author}</h2>
      <p className={classes.text}>{text}</p>
      <span>Posted by benzy</span>
    </div>
  );
}

export default Post;
