import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunkMiddleWare from 'redux-thunk'
import {reducer as formReducer} from "redux-form";
import {appReducer} from "./appReducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer

})

type RootReduserType = typeof rootReducer

export type AppStateType = ReturnType<RootReduserType>


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleWare)))

// export const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare))

// @ts-ignore
window.store = store