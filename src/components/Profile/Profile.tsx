import React from 'react';
import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
/*import {PostType} from "./../../index";*/

type ArrayType = {
    id: string,
    message: string,
    likesCount: number
}
type PropsType = {
    postData: Array<ArrayType>
}

  const Profile = (props: PropsType) => {


    return (
        <div >
            <ProfileInfo/>
            <MyPosts postData={props.postData}/>
        </div>
    );
}

export default Profile;