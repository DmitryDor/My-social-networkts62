import React from "react";
import {DialogsPageType} from "../../redux/store";
import {addMessageAC, updateMessageAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {withAuthRedirect} from "../../hok/withAuthRedirect";


/*type PropsType = {
    dialogsPage: DialogsPageType
    // dispatch: (action: ActionTypePost | ActionTypeMessage) => void

}*/
type mapStateToPropsType = {
    dialogsPage: DialogsPageType
    // asAuth: boolean

}

type mapDispatchToPropsType = {
    addMessage: () => void
    updateMessage: (newMessage: string) => void
}


export type DialogsContainerPropsType = mapStateToPropsType & mapDispatchToPropsType
/*const DialogsContainer = (props: PropsType) => {

    const addMessage = () => {
        props.dispatch(addMessageAC())
    }

    const updateMessage = (newMessage: string) => {
        props.dispatch(updateMessageAC(newMessage))
    }

    return (
        <Dialogs dialogsPage={props.dialogsPage} addMessage={addMessage} updateMessage={updateMessage}/>
    );
}*/


let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        // asAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageAC())
        },
        updateMessage: (newMessage: string) => {
            dispatch(updateMessageAC(newMessage))
        }
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)


export default DialogsContainer;