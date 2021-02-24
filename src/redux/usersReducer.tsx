import {Dispatch} from "redux";
import {usersAPI} from "../api/api";
import {AppStateType} from "./redux-store";


let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFeatching: true,
    followingInProgress: [] as number []
}

export type InitialStateType = typeof initialState

export const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'USERS/FOLLOW': {
            return {
                ...state,
                users: state.users.map(el => {
                    if (el.id === action.userId) {
                        return {
                            ...el,
                            followed: true
                        }
                    }
                    return el
                })
            }
        }
        case "USERS/UNFOLLOW": {
            return {
                ...state,
                users: state.users.map(el => {
                    if (el.id === action.userId) {
                        return {
                            ...el,
                            followed: false
                        }
                    }
                    return el
                })
            }
        }
        case "USERS/SET-USERS": {
            return {
                ...state,
                users: action.users
            }
            return state
        }
        case "USERS/SET-CURRENT_PAGE": {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case "USERS/SET-TOTAL-USERS-COUNT": {
            return {
                ...state,
                totalUsersCount: action.userCount
            }
        }
        case "USERS/TOOGLE-IS-FEATCHING": {
            return {
                ...state,
                isFeatching: action.isFeatching
            }
        }
        case "USERS/TOOGLE-IS-PROGRESS": {
            debugger
            return {
                ...state,
                followingInProgress: action.isFeatching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default: {
            return state
        }
    }
}

// AC

export const followSuccessAC = (userId: number) => ({type: "USERS/FOLLOW", userId} as const)
export const unfollowSuccessAC = (userId: number) => ({type: "USERS/UNFOLLOW", userId} as const)
export const setUsersAC = (users: UsersType) => ({type: "USERS/SET-USERS", users} as const)
export const setCurrentPageAC = (currentPage: number) => ({
    type: "USERS/SET-CURRENT_PAGE",
    currentPage
} as const)
export const setTotalUsersCountAC = (userCount: number) => ({
    type: "USERS/SET-TOTAL-USERS-COUNT",
    userCount
} as const)
export const setIsFeatchingAC = (isFeatching: boolean) => ({
    type: "USERS/TOOGLE-IS-FEATCHING",
    isFeatching
} as const)
export const toggleFollowingProgressAC = (isFeatching: boolean, userId: number) => ({
    type: "USERS/TOOGLE-IS-PROGRESS",
    isFeatching,
    userId
} as const)

// TC

export const getUsersThunkCreater = (currentPage: number, pageSize: number) => {
    return async (dispatch: Dispatch<ActionsType>) => {
        dispatch(setIsFeatchingAC(true))
        const data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setCurrentPageAC(currentPage))
        dispatch(setIsFeatchingAC(false))
        dispatch(setUsersAC(data.items))
        dispatch(setTotalUsersCountAC(data.totalCount))
    }
}

export const followTC = (id: number) => {
    return async (dispatch: Dispatch<ActionsType>) => {
        dispatch(toggleFollowingProgressAC(true, id))
        const res = await usersAPI.unfolloewrUsers(id)
        if (res.data.resultCode === 0) {
            dispatch(followSuccessAC(id))
        }
        dispatch(toggleFollowingProgressAC(false, id))
    }
}

export const unfollowTC = (id: number) => {
    return async (dispatch: Dispatch<ActionsType>) => {
        dispatch(toggleFollowingProgressAC(true, id))
        const res = await usersAPI.followUsers(id)
        if (res.data.resultCode === 0) {
            dispatch(unfollowSuccessAC(id))
        }
        dispatch(toggleFollowingProgressAC(false, id))
    }
}

// type

export type UsersType = Array<UserType>

type ActionsType =
    | ReturnType<typeof followSuccessAC>
    | ReturnType<typeof unfollowSuccessAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>
    | ReturnType<typeof setIsFeatchingAC>
    | ReturnType<typeof toggleFollowingProgressAC>


export type UserType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: {
        small: null | string,
        large: null | string
    },
    status: null | string
    followed: boolean
    followingInProgress: []
}