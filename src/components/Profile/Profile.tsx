import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionTypeMessage, ActionTypePost, ProfilePageType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { Redirect } from 'react-router-dom';
import {ProfileType} from "../../redux/profileReducer";

type PropsType = {
/*    profilePage: ProfilePageType
    dispatch: (action: ActionTypePost | ActionTypeMessage) => void*/
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void

}

const Profile = (props: PropsType) => {


    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;