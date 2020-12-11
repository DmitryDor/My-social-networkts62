import React from "react";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC, setIsFeatchingAC,
    setTotalUsersCountAC,
    setUsersAC, toggleFollowingProgressAC,
    unFollowAC,
    UserType
} from "../../redux/usersReducer";
import Users from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";
import {usersAPI} from "../../api/api";



type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFeatching: boolean
    followingInProgress: any

}

type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (userCount: number) => void
    setIsFeatching: (isFeatching: boolean) => void
    toggleFollowingProgress: (isFeatching: boolean, userId: number) => void

}

type PropsType = MapStatePropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<PropsType, StateType> {
    // constructor(props: PropsType) {
    //     super(props)
    // }

    componentDidMount() {
        this.props.setIsFeatching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setIsFeatching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setIsFeatching(true)
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setIsFeatching(false)
                this.props.setUsers(data.items)
            })
    }

    render() {
        return <div>
            {this.props.isFeatching ? <Preloader/> : null}
            {/*<Users totalUsersCount={this.props.totalUsersCount}
                   users={this.props.users} pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage} unFollow={this.props.unFollow}
                   follow={this.props.follow} setTotalUsersCount={this.props.setTotalUsersCount}
                   onPageChanged={this.onPageChanged} toggleFollowingProgress={this.props.toggleFollowingProgress}
            />*/}
            <Users {...this.props} onPageChanged={this.onPageChanged}/>
        </div>
    }
}


let mapStateToProps = (state: StateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFeatching: state.usersPage.isFeatching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export default connect(mapStateToProps, {
    follow: followAC,
    unFollow: unFollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    setIsFeatching: setIsFeatchingAC,
    toggleFollowingProgress: toggleFollowingProgressAC
})(UsersContainer)