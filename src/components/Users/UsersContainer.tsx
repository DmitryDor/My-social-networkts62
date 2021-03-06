import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    followTC,
    getUsersThunkCreater,
    setCurrentPageAC,
    toggleFollowingProgressAC,
    unfollowTC,
    UserType
} from "../../redux/usersReducer";
import {Users} from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {
    getcurrentPage,
    getfollowingInProgress,
    getisFeatching,
    getPageSize,
    gettotalUsersCount,
    getUsers
} from "../../redux/usersSelectors";


type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFeatching: boolean
    followingInProgress: Array<number>
}

type MapDispatchToPropsType = {
    setCurrentPage: (currentPage: number) => void
    toggleFollowingProgress: (isFeatching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

type PropsType = MapStatePropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<PropsType, AppStateType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage,  this.props.pageSize)
       /* this.props.setIsFeatching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setIsFeatching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })*/
    }

    onPageChanged = (pageNumber: number) => {
        // this.props.setIsFeatching(true)
        // this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber, this.props.pageSize)


       /* usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setIsFeatching(false)
                this.props.setUsers(data.items)
            })*/
    }

    render() {
        // if(!this.props.isAuth ) return <Redirect to={'/login'} />
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


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: gettotalUsersCount(state),
        currentPage: getcurrentPage(state),
        isFeatching: getisFeatching(state),
        followingInProgress: getfollowingInProgress(state),
    }
}

export default compose<React.ComponentClass>(
    connect(mapStateToProps, {
        setCurrentPage: setCurrentPageAC,
        toggleFollowingProgress: toggleFollowingProgressAC,
        getUsers: getUsersThunkCreater,
        follow: followTC,
        unfollow: unfollowTC
    }),
    // withAuthRedirect
)(UsersContainer)
/*let AuthRedirectComponent = withAuthRedirect(UsersContainer)


export default connect(mapStateToProps, {
    setCurrentPage: setCurrentPageAC,
    toggleFollowingProgress: toggleFollowingProgressAC,
    getUsers: getUsersThunkCreater,
    follow: followTC,
    unfollow: unfollowTC


})(AuthRedirectComponent)*/

