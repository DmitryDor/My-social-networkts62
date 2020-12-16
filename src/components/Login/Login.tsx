import React from "react";
import styles from "./Login.module.css"
import {InjectedFormProps, reduxForm} from "redux-form";
import {Field} from "redux-form";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean

}

export const Login = () => {

    const onSubmit = (formData: any) => {
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

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Login' component={'input'} name='login'/>
            </div>
            <div>
                <Field type={'password'} placeholder='Password' component={'input'} name='password'/>
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