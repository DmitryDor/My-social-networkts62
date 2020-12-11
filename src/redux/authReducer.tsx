export type DataType = {
    id: null | number
    login: null | string
    email: null | string
    isAuth: boolean
}

type SetUserData = {
    type: 'SER-USER-DATA'
    data: DataType
}

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
} as DataType

export type InitialStateType = typeof initialState

type ActionsType = SetUserData

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SER-USER-DATA": {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default: {
            return state
        }
    }
}


export const setAuthUserDataAC = (data: DataType): SetUserData => ({type: "SER-USER-DATA", data})
