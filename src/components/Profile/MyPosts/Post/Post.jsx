import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://f.vividscreen.info/soft/4633733f90be75b21e7095f40c05f924/Road-Side-Grass-2048x2048.jpg' />
      {props.message}
      <div>
        <span>Likes: {props.likesCount}</span>
      </div>
    </div>
  )
}

export default Post;