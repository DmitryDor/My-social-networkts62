import React from "react";
import styles from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsType, MessagesType} from "../../redux/state";


type PropsType = {
    dialogsData: Array<DialogsType>
    messagesData: Array<MessagesType>
}

const Dialogs = (props: PropsType) => {


    let dialogsElements = props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.messagesData.map(message => <Message message={message.message}/>);


    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
        </div>
    );
}
export default Dialogs;