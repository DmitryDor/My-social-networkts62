import React from "react";
import userPhoto from "../../assets/images/kapyushon_14725.jpg";
import styles from "./Users.module.css";
import {UserType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";


type PropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    toggleFollowingProgress: (isFeatching: boolean, userId: number) => void
    followingInProgress: []
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}


export const Users = (props: PropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {
                    pages.map(p => {
                        return <span className={props.currentPage === p ? `${
                            styles.selectedPage} ${styles.coursor}` : `'' ${styles.coursor} `}
                                     onClick={() => {
                                         props.onPageChanged(p)
                                     }}
                        >{p}</span>
                    })
                }
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.large !== null ? u.photos.large : userPhoto} alt="foto user"
                                 className={styles.userPhoto}/>
                                 </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.unfollow(u.id)

                                   /* props.toggleFollowingProgress(true, u.id)
                                    usersAPI.followUsers(u.id)
                                        .then(res => {
                                            if (res.data.resultCode === 0) {
                                                props.unfollowSuccess(u.id)
                                            }
                                            props.toggleFollowingProgress(false, u.id)
                                        })*/
                                }}>Unfollow</button>

                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {

                                    props.follow(u.id)
                                   /* props.toggleFollowingProgress(true, u.id)
                                    usersAPI.unfolloewrUsers(u.id)
                                        .then(res => {
                                            if (res.data.resultCode === 0) {
                                                props.followSuccess(u.id)
                                            }
                                            props.toggleFollowingProgress(false, u.id)
                                        })*/
                                }}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )

}


export default Users