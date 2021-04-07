import {Dispatch} from "redux";
import {AppStateType} from "./redux-store";
import {profileAPI} from "../api/api";


export type InitialStateType = typeof initialState

export let initialState = {
    postData: [] as Array<PostType>,
    profile: null as null | ProfileType,
    status: '' as string
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "PROFILE/ADD-POST": {
            return {
                ...state,
                // postData: state.postData.map(el => ({...el}))
                postData: [...state.postData, {id: "5", message: action.post, likesCount: 0}],
                // newPostText: ''
            }

        }

        case "PROFILE/SET-USER-PROFILE": {
            return {
                ...state,
                profile: action.profile
            }
        }
        case "PROFILE/SET-STATUS": {
            return {
                ...state,
                status: action.status
            }
        }

        default : {
            return state
        }
    }
}

//AC

export const addPostAC = (post: string) => ({type: "PROFILE/ADD-POST", post} as const)
export const setUserProfileAC = (profile: ProfileType) => ({
    type: "PROFILE/SET-USER-PROFILE",
    profile
} as const)
export const setStatusAC = (status: string) => ({
    type: "PROFILE/SET-STATUS", status
} as const)

// TC

export const setUsersProfileTC = (userId: string) => async (dispatch: Dispatch<ActionType>, getState: AppStateType) => {
    const res = await profileAPI.getProfiles(userId)
    dispatch(setUserProfileAC(res.data))
}

export const setStatusTC = (userId: string) => async (dispatch: Dispatch<ActionType>) => {
    const res = await profileAPI.getStatus(userId)
    dispatch(setStatusAC(res.data))
}

export const updateStatusTC = (status: string) => async (dispatch: Dispatch<ActionType>) => {
    const res = await profileAPI.updateStatus(status)
    if (res.data.resultCode === 0) {
        dispatch(setStatusAC(status))
    }
}


// types

export type PostType = {
    id: string,
    message: string,
    likesCount: number
}

export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string | null
        website: null | string
        vk: null | string
        twitter: null | string
        instagram: null | string
        youtube: null | string
        github: null | string
        mainLink: null
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: null | string
        large: null | string
    }
}


type ActionType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setStatusAC>