import {AppStateType} from "./redux-store";
import {authAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {FormAction, stopSubmit} from "redux-form";


let initialState = {
    id: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isAuth: false
} as DataType

export type InitialStateType = typeof initialState


export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "AUTH/SER-USER-DATA": {
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

// AC

export const setAuthUserDataAC = (payload: DataType, isAuth: boolean) => ({
    type: "AUTH/SER-USER-DATA",
    payload,
    isAuth
} as const)


// TC

export const setAuthUserTC = (): ThunkActionType =>
    async (dispatch) => {
        let res = await authAPI.authMe()
        if (res.data.resultCode === 0) {
            dispatch(setAuthUserDataAC(res.data.data, true))
        }
    }


export const loginTC = (login: string, password: string, rememberMe: boolean): ThunkAction<void, AppStateType, unknown, ActionsType | FormAction> => async (dispatch) => {
    const res = await authAPI.login(login, password, rememberMe)
    if (res.data.resultCode === 0) {
        dispatch(setAuthUserTC())
    } else {
        let message = res.data.messages.legend > 0 ? res.data.messages[0] : 'Some message'
        dispatch(stopSubmit('login', {_error: message}))
    }
}


export const logoutTC = (): ThunkActionType => async (dispatch) => {
    const res = await authAPI.logout()
    if (res.data.resultCode === 0) {
        dispatch(setAuthUserDataAC(res.data.data, false))
    }
}


export   type DataType = {
    id: null | number
    login: null | string
    email: null | string
    isAuth: boolean
}
type ActionsType = ReturnType<typeof setAuthUserDataAC> & FormAction

export type ThunkActionType = ThunkAction<void, AppStateType, unknown, ActionsType>