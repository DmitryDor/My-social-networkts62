import React from 'react';
import styles from "./ProfileInfo.module.css";
import {Preloader} from "../../Common/Preloader/Preloader";
import {ProfileType} from "../../../redux/profileReducer";
import {ProfileStatus} from "../ProfileStatus";

type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo = (props: PropsType) => {
    if (props.profile === null) {
        return <Preloader/>
    }

    return (
        <div>
           {/* <div>
                <img src="https://www.w3schools.com/howto/img_snow_wide.jpg"/>
            </div>*/}
            <div className={styles.descriptionBlock}>
                <img src={props.profile.photos.large ? props.profile.photos.large : "" } alt={'Your photo'} />
                <ProfileStatus status={props.status } updateStatus={props.updateStatus }/>
                <div>{props.profile.contacts.facebook}</div>
                <div>{props.profile.contacts.github}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
            </div>
        </div>
    );


}

export default ProfileInfo;