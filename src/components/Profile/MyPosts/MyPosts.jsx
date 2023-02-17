import Post from './Post/Post';
import s from './MyPosts.module.css';
import React from "react";

const MyPosts = (props) => {

    let postsElements = props.posts
        .map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onChangePost = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText();
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onChangePost} value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;