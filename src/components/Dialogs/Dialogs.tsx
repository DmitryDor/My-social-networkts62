import React from "react";
import styles from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

type PropsType = {
    name: string,
    id: string
}

const DialogItem = (props: PropsType) => {
    return (
        <div className={styles.dialog + ' ' + styles.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    );
}

type PropsType1 = {
    message: string
}

const Message = (props: PropsType1) => {
    return (
        <div className={styles.message}>{props.message}</div>
    );
}

const Dialogs = () => {

    let dialogsData = [
        {id: "1", name: "Dimych"},
        {id: "2", name: "Andrey"},
        {id: "3", name: "Sveta"},
        {id: "4", name: "Sasha"},
        {id: "5", name: "Victor"},
        {id: "6", name: "Valera"}
    ];

    let messagesData = [
        {id: "1", message: "Hi"},
        {id: "2", message: "How are you?"},
        {id: "3", message: "I'm fine"},
        {id: "4", message: "I'm happy"},
        {id: "5", message: "Happy new year"}
    ];

    /* let dialogsElements = dialogsData.map((dialog) => {
         return (
             <DialogItem name={dialog.name} id={dialog.id}/>
         );
     }); Ниже представленна сокращённая запись

     let messagesElements = messagesData.map((message) => {
         return (
             <Message message={message.message}/>
         );
     }) Ниже представленна сокращённая запись*/
    let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = messagesData.map(message => <Message message={message.message}/>);


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