import React from 'react';
import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";
/*import {PostType} from "./../../index";*/


type PropsType = {
    profilePage: ProfilePageType
}

  const Profile = (props: PropsType) => {


    return (
        <div >
            <ProfileInfo/>
            <MyPosts postData={props.profilePage.postData}/>
        </div>
    );
}

export default Profile;