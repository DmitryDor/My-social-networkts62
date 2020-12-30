import {AppStateType} from "./redux-store";


export const getUsers = (state: AppStateType) => {
    return state.usersPage.users
}
export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}
export const gettotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}
export const getcurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}
export const getisFeatching = (state: AppStateType) => {
    return state.usersPage.isFeatching
}
export const getfollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}
