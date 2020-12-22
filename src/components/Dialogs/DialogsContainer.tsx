import React from "react";
import {addMessageAC, InitialStateType} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hok/withAuthRedirect";


/*type PropsType = {
    dialogsPage: DialogsPageType
    // dispatch: (action: ActionTypePost | ActionTypeMessage) => void

}*/
type mapStateToPropsType = {
    dialogsPage: InitialStateType
    // asAuth: boolean

}

type mapDispatchToPropsType = {
    addMessage: (newMessageBody: string) => void
    // updateMessage: (newMessage: string) => void
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
        addMessage: (newMessageBody: string) => {
            dispatch(addMessageAC(newMessageBody))
        },
       /* updateMessage: (newMessage: string) => {
            dispatch(updateMessageAC(newMessage))
        }*/
    }
}

// let AuthRedirectComponent = withAuthRedirect(Dialogs)

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)


export default compose<React.ComponentClass>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)