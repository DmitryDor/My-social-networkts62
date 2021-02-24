import {AppStateType} from "./redux-store";
import {ThunkAction} from "redux-thunk";
import {setAuthUserTC} from "./authReducer";


let initialState = {
    initialazed: false
}

export type InitialStateType = typeof initialState


export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-INITIALIZED-SUCCESS": {
            return {
                ...state,
                initialazed: true
            }
        }
        default: {
            return state
        }
    }
}

// AC

export const initialazedSuccessAC = () => ({type: "SET-INITIALIZED-SUCCESS"})

// TC

export const initialazedAppTC = (): ThunkActionType => (dispatch) => {
    let promise = dispatch(setAuthUserTC())
    /* let promise = new Promise(() => dispatch(setAuthUserTC()))
     promise.then( () => dispatch(initialazedSuccessAC()))*/
    Promise.all([promise]).then(() => {
        dispatch(initialazedSuccessAC())
    })
}

// types

type ActionsType = ReturnType<typeof initialazedSuccessAC>

type ThunkActionType = ThunkAction<void, AppStateType, unknown, ActionsType>

