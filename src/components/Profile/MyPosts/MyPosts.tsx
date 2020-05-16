import React from 'react';
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostType} from "./../../../index";




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
    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;