import React from "react";
import styles from "./Users.module.css"
import {UserType} from "../../redux/usersReducer";
import axios from 'axios'
import userPhoto from '../../assets/images/kapyushon_14725.jpg'

type PropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

const UsersFC_forExample = (props: PropsType) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(res => {
                    props.setUsers(res.data.items)
                })
        }
    }

    /* if(props.users.length === 0){
         props.setUsers( [
             {id: 1, photoUrl: "https://avatarko.ru/img/kartinka/5/devushka_4426.jpg"  , fullName: 'Dmitry', followed: true, status: 'I am a man', location: {country: 'BLR', city: 'Minsk'}},
             {id: 2, photoUrl: "https://avatarko.ru/img/kartinka/5/devushka_4426.jpg"  , fullName: 'Tatsiana', followed: false, status: 'I am a woman', location: {country: 'BLR', city: 'Minsk-city'}
             },
             {id: 3,  photoUrl: "https://avatarko.ru/img/kartinka/5/devushka_4426.jpg"  ,fullName: 'Julija', followed: true, status: 'I am a girl', location: {country: 'BLR', city: 'Minsk'}}
         ]
         )
     }*/

    return (
        <div>
            <button onClick={getUsers}>Get users</button>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.large !== null ? u.photos.large : userPhoto} alt="foto user"
                                 className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => props.unFollow(u.id)}>Unfollow</button>
                                : <button onClick={() => props.follow(u.id)}>Follow</button>
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
    );
}
export default UsersFC_forExample;