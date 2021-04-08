import React, {ChangeEvent, KeyboardEvent} from "react";
import styles from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsContainerPropsType} from "./DialogsContainer";
import {Field, FormSubmitHandler, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../assets/formsControls/FormsControls";
import {maxLengthCreater, required} from "../../utils(validator)/validators";

type FormDataType = {
    newMessageBody: string
}

const Dialogs = (props: DialogsContainerPropsType) => {

    let dialogsElements = props.dialogsPage.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}
                                                                                  key={dialog.id}/>);
    let messagesElements = props.dialogsPage.messagesData.map(message => <Message message={message.message}
                                                                                  key={message.id}/>);


   /* const addMessage = () => {
        props.addMessage()
        // props.dispatch({type: 'ADD-MESSAGE'})
        // props.dispatch(addMessageAC())
    }*/

   /* const updateMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newMessage = e.currentTarget.value
        props.updateMessage(newMessage)
        // props.dispatch({type: 'UPDATE-MESSAGE-TEXT', newMessage})
        // props.dispatch(updateMessageAC(newMessage))
    }*/

  /*  const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            addMessage()
        }
    }*/
    const addNewMessage = (values: FormDataType) => {
      props.addMessage(values.newMessageBody)
    }

    // if(!props.asAuth) return <Redirect to={'/login'} />

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
                <DialogsFormRedux onSubmit={addNewMessage} />

                {/* <div>
                    <textarea value={props.dialogsPage.newMessage}
                              onChange={updateMessage}
                              onKeyPress={onKeyPressHandler}
                              placeholder={'Enter your message'}
                    />
                </div>
                <div>
                    <button onClick={addMessage}>Add</button>
                </div>*/}


            </div>
        </div>
    );
}
const maxLength20 = maxLengthCreater(20)

export const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Enter your message'} component={Textarea}
                   name={'newMessageBody'}  validate={[required, maxLength20]}/>
        </div>
        <div>
            <button>Add</button>
        </div>

    </form>
}

export const DialogsFormRedux = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)


export default Dialogs;

// до 76 урока
/*import React, {ChangeEvent, KeyboardEvent} from "react";
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
export default Dialogs;*/
