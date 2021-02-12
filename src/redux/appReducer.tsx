import {AppStateType} from "./redux-store";
import {ThunkAction} from "redux-thunk";
import {setAuthUserTC} from "./authReducer";
import {Dispatch} from "redux";


type InitialazedSuccsessActionType = {
    type: "SET-INITIALIZED-SUCCESS"
}

let initialState = {
    initialazed: false
}

export type InitialStateType = typeof initialState


type ActionsType = InitialazedSuccsessActionType

type ThunkActionType = ThunkAction<void, AppStateType, unknown, ActionsType>

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


export const initialazedSuccessAC = (): InitialazedSuccsessActionType => ({type: "SET-INITIALIZED-SUCCESS"})

export const initialazedAppTC = (): ThunkActionType => (dispatch) => {
    let promise = dispatch(setAuthUserTC())

    /* let promise = new Promise(() => dispatch(setAuthUserTC()))
     promise.then( () => dispatch(initialazedSuccessAC()))*/
    Promise.all([promise]).then(() => {
        dispatch(initialazedSuccessAC())
    })
}

