import React from 'react';
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

type PropsType = {
    message: string,
    likesCount: number
}

const MyPosts = () => {
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
                <Post message={"Hi, how are you"} likesCount={10}/>
                <Post message={"It's my first post!"} likesCount={30}/>

            </div>
        </div>
    );
}

export default MyPosts;