import React from "react";
import {UserType} from "../../redux/usersReducer";
import {Paginator} from "../Common/Paginator/Paginator";
import {User} from "./User";


type PropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    toggleFollowingProgress: (isFeatching: boolean, userId: number) => void
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void

}

export const Users = (props: PropsType) => {

    return (
        <div>
            <div>
                <Paginator totalItemsCount={props.totalUsersCount}
                           pageSize={props.pageSize} currentPage={props.currentPage}
                           onPageChanged={props.onPageChanged}
                           portionSize={20}/>
        </div>

    {
        props.users.map(u => {
                return <User user={u} key={u.id}
                             follow={props.follow}
                             unfollow={props.unfollow}
                             followingInProgress={props.followingInProgress}/>
            }
        )
    }

</div>
)
}


