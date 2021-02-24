import React from 'react';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import MyPostsClass from "./MyPostsClass";
import {addPostAC} from "../../../redux/profileReducer";


/*type PropsType = {
    postData: Array<PostType>
    newPostText: string
    dispatch: (action: ActionTypePost | ActionTypeMessage) => void
}


const MyPostsContainer = (props: PropsType) => {

    const addPost = () => {
        // props.addPost()
        // props.dispatch({type: "ADD-POST"})
        props.dispatch(AddPostAC())
    }

    const onPostChange = (newText: string) => {
        // const newText = e.currentTarget.value
        // props.updateNewPostText(newText)
        props.dispatch(UpdateNewPostTextAC(newText))
    }

    return (
        <MyPosts postData={props.postData} newPostText={props.newPostText}
                 addPost={addPost} updateNewPostText={onPostChange}/>
    );
}*/

let mapStateToProps = (state: AppStateType) => {
    return ({
        postData: state.profilePage.postData
        // newPostText: state.profilePage.newPostText
    })
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return ({
        addPost: (post: string) => {
            dispatch(addPostAC(post))
        }
        /*updateNewPostText: (newText: string) => {
            dispatch(UpdateNewPostTextAC(newText))
        }*/
    })
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;