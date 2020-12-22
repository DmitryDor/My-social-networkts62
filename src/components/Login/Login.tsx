import React from "react";
import styles from "./Login.module.css"
import {InjectedFormProps, reduxForm} from "redux-form";
import {Field} from "redux-form";
import {maxLengthCreater, required} from "../../utils(validator)/validators";
import {Input, Textarea} from "../../assets/formsControls/FormsControls";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean

}

export const Login = () => {

    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>
                Login
            </h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
}
const maxLength5 = maxLengthCreater(5)
const maxLength10 = maxLengthCreater(10)

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Login' component={Input} name='login' validate={[required, maxLength10]}

                />
            </div>
            <div>
                <Field type={'password'} placeholder='Password' component={Input} name='password' validate={[required, maxLength5]}/>
            </div>
            <div>
                <Field type='checkbox' component='input' name='rememberMe'/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
}

export const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)