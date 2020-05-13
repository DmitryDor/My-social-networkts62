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
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <DialogItem name="Dimych" id="1"/>
                <DialogItem name="Andrey" id="2"/>
                <DialogItem name="Sveta" id="3"/>
                <DialogItem name="Sasha" id="4"/>
                <DialogItem name="Victor" id="5"/>
                <DialogItem name="Valera" id="6"/>
            </div>
            <div className={styles.messages}>
                <Message message={"Hi"}/>
                <Message message={"How are you"}/>
                <Message message={"I'm fine"}/>
                <Message message={"I'm happy"}/>
                <Message message={"Happy new year"}/>
            </div>
        </div>
    );
}
export default Dialogs;