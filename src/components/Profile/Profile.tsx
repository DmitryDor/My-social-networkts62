import React from 'react';
import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionType, ProfilePageType} from "../../redux/state";
/*import {PostType} from "./../../index";*/


type PropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionType) => void
}

const Profile = (props: PropsType) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.profilePage.postData}
                     dispatch={props.dispatch}
                     newPostText={props.profilePage.newPostText}

            />
        </div>
    );
}

export default Profile;