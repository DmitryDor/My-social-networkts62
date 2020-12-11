import React from "react";
import {DialogsPageType} from "../../redux/store";
import {addMessageAC, updateMessageAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


/*type PropsType = {
    dialogsPage: DialogsPageType
    // dispatch: (action: ActionTypePost | ActionTypeMessage) => void

}*/
type mapStateToPropsType = {
    dialogsPage: DialogsPageType
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


let mapStateToProps = (state: StateType) => {
    return {
        dialogsPage: state.dialogsPage
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer;