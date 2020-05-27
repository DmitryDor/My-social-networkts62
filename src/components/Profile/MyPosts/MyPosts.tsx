import React, {DetailedHTMLProps, TextareaHTMLAttributes} from 'react';
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";





type PropsType = {
    postData: Array<PostType>
}


const MyPosts = (props: PropsType) => {

/*let postElements = postData.map( (post) => {
    return (
        <Post message={post.message} likesCount={post.likesCount} id={post.id}/>
    )
}) Ниже эта же запись в сокращённром варианте*/

let postElements =  props.postData.map(post => <Post message={post.message} likesCount={post.likesCount} id={post.id}/> );

let newPostElement: any = React.createRef();

let addPost = () => {
    let text = newPostElement.current.value;
   alert(text);
}

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}/>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;