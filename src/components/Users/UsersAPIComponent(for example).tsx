 export let q = 1/*


import React from "react";
import axios from "axios";
import {UserType} from "../../redux/usersReducer";
import {StateType} from "../../redux/redux-store";
import Users from "./Users";


type PropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (userCount: number) => void
}


class UsersAPIComponent extends React.Component<PropsType, StateType> {
    // constructor(props: PropsType) {
    //     super(props)
    // }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)

            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      users={this.props.users} pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage} unFollow={this.props.unFollow}
                      follow={this.props.follow} setTotalUsersCount={this.props.setTotalUsersCount}
                      onPageChanged={this.onPageChanged}
        />
    }
}

export default UsersAPIComponent

*/
