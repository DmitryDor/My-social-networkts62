import {Dispatch} from "redux";
import {usersAPI} from "../api/api";
import {AppStateType} from "./redux-store";

type FollowActionType = {
    type: 'FOLLOW'
    userId: number
}
type UnFollowActionType = {
    type: 'UNFOLLOW'
    userId: number
}

export type UsersType = Array<UserType>

type SetUsersActionType = {
    type: 'SET-USERS'
    users: UsersType
}

type SetCurrentPageActionType = {
    type: 'SET-CURRENT_PAGE'
    currentPage: number
}
type SetTotalUsersCountActionType = {
    type: 'SET-TOTAL-USERS-COUNT'
    userCount: number
}
type ToogleIsFeatching = {
    type: 'TOOGLE-IS-FEATCHING'
    isFeatching: boolean
}
type ToggleIsProgress = {
    type: 'TOOGLE-IS-PROGRESS'
    isFeatching: boolean
    userId: number
}

type ActionsType =
    FollowActionType
    | UnFollowActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetTotalUsersCountActionType
    | ToogleIsFeatching
    | ToggleIsProgress

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


let initialState = {
    /* users: [
         {id: 1, photoUrl: "https://avatarko.ru/img/kartinka/5/devushka_4426.jpg"  , fullName: 'Dmitry', followed: true, status: 'I am a man', location: {country: 'BLR', city: 'Minsk'}},
         {id: 2, photoUrl: "https://avatarko.ru/img/kartinka/5/devushka_4426.jpg"  , fullName: 'Tatsiana', followed: false, status: 'I am a woman', location: {country: 'BLR', city: 'Minsk-city'}
         },
         {id: 3,  photoUrl: "https://avatarko.ru/img/kartinka/5/devushka_4426.jpg"  ,fullName: 'Julija', followed: true, status: 'I am a girl', location: {country: 'BLR', city: 'Minsk'}},
     ] as Array<UserType>*/
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
        case 'FOLLOW': {
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
        case "UNFOLLOW": {
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
        case "SET-USERS": {
            return {
                ...state,
                users: action.users
            }
            return state
        }
        case "SET-CURRENT_PAGE": {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case "SET-TOTAL-USERS-COUNT": {
            return {
                ...state,
                totalUsersCount: action.userCount
            }
        }
        case "TOOGLE-IS-FEATCHING": {
            return {
                ...state,
                isFeatching: action.isFeatching
            }
        }
        case "TOOGLE-IS-PROGRESS": {
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


export const followSuccessAC = (userId: number): FollowActionType => ({type: "FOLLOW", userId})
export const unfollowSuccessAC = (userId: number): UnFollowActionType => ({type: "UNFOLLOW", userId})
export const setUsersAC = (users: UsersType): SetUsersActionType => ({type: "SET-USERS", users})
export const setCurrentPageAC = (currentPage: number): SetCurrentPageActionType => ({
    type: "SET-CURRENT_PAGE",
    currentPage
})
export const setTotalUsersCountAC = (userCount: number): SetTotalUsersCountActionType => ({
    type: "SET-TOTAL-USERS-COUNT",
    userCount
})
export const setIsFeatchingAC = (isFeatching: boolean): ToogleIsFeatching => ({
    type: "TOOGLE-IS-FEATCHING",
    isFeatching
})
export const toggleFollowingProgressAC = (isFeatching: boolean, userId: number): ToggleIsProgress => ({
    type: "TOOGLE-IS-PROGRESS",
    isFeatching,
    userId
})

export const getUsersThunkCreater = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<ActionsType>, getState: AppStateType) => {
        dispatch(setIsFeatchingAC(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setCurrentPageAC(currentPage))
                dispatch(setIsFeatchingAC(false))
                dispatch(setUsersAC(data.items))
                dispatch(setTotalUsersCountAC(data.totalCount))
            })
    }
}

export const followTC = (id: number) => {
    return ((dispatch: Dispatch<ActionsType>, getState: AppStateType) => {
        dispatch(toggleFollowingProgressAC(true, id))
        usersAPI.unfolloewrUsers(id)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(followSuccessAC(id))
                }
                dispatch(toggleFollowingProgressAC(false, id))
            })
    })
}


export const unfollowTC = (id: number) => {
    return ((dispatch: Dispatch<ActionsType>, getState: AppStateType) => {
        dispatch(toggleFollowingProgressAC(true, id))
        usersAPI.followUsers(id)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(unfollowSuccessAC(id))
                }
               dispatch(toggleFollowingProgressAC(false, id))
            })
    })
}