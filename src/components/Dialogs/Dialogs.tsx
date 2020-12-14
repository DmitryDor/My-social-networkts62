import React, {ChangeEvent, KeyboardEvent} from "react";
import styles from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsContainerPropsType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";



const Dialogs = (props: DialogsContainerPropsType) => {

    let dialogsElements = props.dialogsPage.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}
                                                                                  key={dialog.id}/>);
    let messagesElements = props.dialogsPage.messagesData.map(message => <Message message={message.message}
                                                                                  key={message.id}/>);


    const addMessage = () => {
        props.addMessage()
        // props.dispatch({type: 'ADD-MESSAGE'})
        // props.dispatch(addMessageAC())
    }

    const updateMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newMessage = e.currentTarget.value
        props.updateMessage(newMessage)
        // props.dispatch({type: 'UPDATE-MESSAGE-TEXT', newMessage})
        // props.dispatch(updateMessageAC(newMessage))
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            addMessage()
        }
    }

    // if(!props.asAuth) return <Redirect to={'/login'} />

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
                <div>
                    <textarea value={props.dialogsPage.newMessage}
                              onChange={updateMessage}
                              onKeyPress={onKeyPressHandler}
                              placeholder={'Enter your message'}
                    />
                </div>
                <div>
                    <button onClick={addMessage}>Add</button>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;