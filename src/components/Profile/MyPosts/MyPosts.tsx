import React, {ChangeEvent, KeyboardEvent} from 'react';
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {ActionType, AddPostAC, AddPostActionType, PostType, UpdateNewPostTextAC} from "../../../redux/state";
import {log} from "util";


type PropsType = {
    postData: Array<PostType>
    newPostText: string
    dispatch: (action: ActionType) => void
}


const MyPosts = (props: PropsType) => {


    let postElements = props.postData.map(post => <Post message={post.message} likesCount={post.likesCount}
                                                        id={post.id} key={post.id}/>);


    const addPost = () => {
        // props.addPost()
        // props.dispatch({type: "ADD-POST"})
        props.dispatch(AddPostAC())
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.currentTarget.value
        // props.updateNewPostText(newText)
        props.dispatch(UpdateNewPostTextAC(newText))
    }


    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            addPost()
        }
    }

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.newPostText} onChange={onPostChange}
                              placeholder={'Enter your post'} onKeyPress={onKeyPressHandler}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;