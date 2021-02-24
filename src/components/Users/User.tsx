import React from "react";
import userPhoto from "../../assets/images/kapyushon_14725.jpg";
import styles from "./Users.module.css";
import {UserType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";


type PropsType = {
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    user: UserType
}

export const User = (props: PropsType) => {
    return (
        <div>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + props.user.id}>
                            <img src={props.user.photos.large !== null ? props.user.photos.large : userPhoto}
                                 alt="foto user"
                                 className={styles.userPhoto}/>
                                 </NavLink>
                        </div>
                        <div>
                            {props.user.followed
                                ? <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                          onClick={() => {
                                              props.unfollow(props.user.id)
                                          }}>Unfollow</button>

                                : <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                          onClick={() => {
                                              props.follow(props.user.id)
                                          }}>Follow</button>
                            }
                        </div>
                    </span>
            <span>
                        <span>
                            <div>{props.user.name}</div>
                            <div>{props.user.status}</div>
                        </span>
                        <span>
                            <div>{'user.location.country'}</div>
                            <div>{'user.location.city'}</div>
                        </span>
                    </span>
        </div>)

}

