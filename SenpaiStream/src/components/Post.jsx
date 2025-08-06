import classes from './Post.module.css'

function Post(props) {
 
  return (
    <div className={classes.post}>
      <h2 className={classes.author}>{props.author}</h2>
      <p className={classes.text}>{props.text}</p>
      <span>Posted by benzy</span>
    </div>
  );
}

export default Post;
