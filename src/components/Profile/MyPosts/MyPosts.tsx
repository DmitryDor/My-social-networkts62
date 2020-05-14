import React from 'react';
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

type PropsType = {
    message: string,
    likesCount: number,
    id?: string
}

const MyPosts = () => {
    let postData = [
        {id: "1", message: "Dimych", likesCount: 10},
        {id: "2", message: "Andrey", likesCount: 5 },
        {id: "3", message: "Sveta", likesCount:  7 },
        {id: "4", message: "Sasha", likesCount:  8},
        {id: "5", message: "Victor", likesCount:  5},
        {id: "6", message: "Valera", likesCount: 18}
    ];

/*let postElements = postData.map( (post) => {
    return (
        <Post message={post.message} likesCount={post.likesCount} id={post.id}/>
    )
}) Ниже эта же запись в сокращённром варианте*/

let postElements =  postData.map(post => <Post message={post.message} likesCount={post.likesCount} id={post.id}/> );
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