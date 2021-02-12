import {AppStateType} from "./redux-store";
import {authAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {FormAction, stopSubmit} from "redux-form";

export type DataType = {
    id: null | number
    login: null | string
    email: null | string
    isAuth: boolean
}

export type SetUserDataActionType = {
    type: 'SER-USER-DATA'
    payload: DataType
    isAuth: boolean
}

let initialState = {
    id: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isAuth: false
} as DataType

export type InitialStateType = typeof initialState

type ActionsType = SetUserDataActionType & FormAction

export type ThunkActionType = ThunkAction<void, AppStateType, unknown, ActionsType>

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SER-USER-DATA": {
            return {
                ...state,
                ...action.payload,
                isAuth: action.isAuth
            }
        }
        default: {
            return state
        }
    }
}


export const setAuthUserDataAC = (payload: DataType, isAuth: boolean): SetUserDataActionType => {
    return {
        type: "SER-USER-DATA",
        payload,
        isAuth
    }
}

export const setAuthUserTC = (): ThunkActionType => {
    return ((dispatch) => {
        return  authAPI.authMe()
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setAuthUserDataAC(res.data.data, true))
                }
            })
    })
}


export const loginTC = (login: string, password: string, rememberMe: boolean): ThunkAction<void, AppStateType, unknown, ActionsType | FormAction> => {
    return ((dispatch) => {
        return  authAPI.login(login, password, rememberMe)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setAuthUserTC())
                } else {
                    let message = res.data.messages.legend > 0 ? res.data.messages[0] : 'Some message'
                    dispatch(stopSubmit('login', {_error: message}))
                }
            })
    })
}


export const logoutTC = (): ThunkActionType => {
    return ((dispatch) => {
        authAPI.logout()
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setAuthUserDataAC(res.data.data, false))
                }
            })
    })
}