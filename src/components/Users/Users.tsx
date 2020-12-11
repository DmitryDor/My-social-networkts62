import React from "react";
import userPhoto from "../../assets/images/kapyushon_14725.jpg";
import styles from "./Users.module.css";
import {UserType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";
import axios from "axios";


type PropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setTotalUsersCount: (userCount: number) => void
    onPageChanged: (pageNumber: number) => void
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
                                ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': "85f5b2d8-12c7-48ad-9f88-79f9075e9df3"
                                        }
                                    })
                                        .then(res => {
                                           if(res.data.resultCode === 0){
                                               props.unFollow(u.id)
                                           }
                                        })


                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{}, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': "85f5b2d8-12c7-48ad-9f88-79f9075e9df3"
                                        }
                                    })
                                        .then(res => {
                                            if(res.data.resultCode === 0){
                                                props.follow(u.id)
                                            }
                                        })


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
                </div>,)
            }
        </div>
    )

}


export default Users