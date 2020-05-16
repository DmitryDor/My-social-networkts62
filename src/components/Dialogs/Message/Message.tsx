import React from "react";
import styles from "./../Dialogs.module.css"





type PropsType1 = {
    message: string
}

const Message = (props: PropsType1) => {
    return (
        <div className={styles.message}>{props.message}</div>
    );
}


export default Message;