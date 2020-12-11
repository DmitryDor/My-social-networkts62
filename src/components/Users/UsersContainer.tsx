import React from "react";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC, setIsFeatchingAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UsersType, UserType
} from "../../redux/usersReducer";
import axios from "axios";
import Users from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";


type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFeatching: boolean

}

type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (userCount: number) => void
    setIsFeatching: (isFeatching: boolean) => void

}

type PropsType = MapStatePropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<PropsType, StateType> {
    // constructor(props: PropsType) {
    //     super(props)
    // }

    componentDidMount() {
        this.props.setIsFeatching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
            .then(res => {
                this.props.setIsFeatching(false)
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)

            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setIsFeatching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,{
            withCredentials: true
        })
            .then(res => {
                this.props.setIsFeatching(false)
                this.props.setUsers(res.data.items)
            })
    }

    render() {
        return <>
            {this.props.isFeatching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   users={this.props.users} pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage} unFollow={this.props.unFollow}
                   follow={this.props.follow} setTotalUsersCount={this.props.setTotalUsersCount}
                   onPageChanged={this.onPageChanged}
            />
        </>
    }
}


let mapStateToProps = (state: StateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFeatching: state.usersPage.isFeatching
    }
}


export default connect(mapStateToProps, {
    follow: followAC,
    unFollow: unFollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    setIsFeatching: setIsFeatchingAC,
})(UsersContainer)