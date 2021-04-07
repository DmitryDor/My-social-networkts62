import React from "react";
import styles from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType, DialogsType, MessagesType} from "../../redux/state";


type PropsType = {
    dialogsPage: DialogsPageType
    addMessage: Function
    updateNewMessageText: Function
}

const Dialogs = (props: PropsType) => {


    let dialogsElements = props.dialogsPage.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.dialogsPage.messagesData.map(message => <Message message={message.message}/>);

    let newMessgeElement: any= React.createRef();

    let addMessage = () => {
        props.addMessage();
    }
    let onMessageChange = () => {
        let text =  newMessgeElement.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea
                    onChange={onMessageChange}
                    ref={newMessgeElement}
                value={props.dialogsPage.newMessageText}
                />
            </div>
            <div>
                <button onClick={addMessage}>Add post</button>
            </div>
        </div>
    );
}
export default Dialogs;