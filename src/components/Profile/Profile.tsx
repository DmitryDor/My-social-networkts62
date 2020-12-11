import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionTypeMessage, ActionTypePost, ProfilePageType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type PropsType = {
/*    profilePage: ProfilePageType
    dispatch: (action: ActionTypePost | ActionTypeMessage) => void*/
    profile: any
}

const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;