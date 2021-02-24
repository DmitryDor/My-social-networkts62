import React from "react";
import styles from '../../assets/formsControls/FormsControls.module.css'
import {InjectedFormProps, reduxForm} from "redux-form";
import {Field} from "redux-form";
import {maxLengthCreater, required} from "../../utils(validator)/validators";
import {Input, Textarea} from "../../assets/formsControls/FormsControls";
import {connect} from "react-redux";
import {loginTC} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}
type MapDispatchToPropsType = {
    login: (login: string, password: string, rememberMe: boolean) => void
}
type MapStateToPropsType = {
    isAuth: boolean
}
type PropsType = MapDispatchToPropsType & MapStateToPropsType

export const Login = (props: PropsType) => {

    const onSubmit = (formData: FormDataType) => {
        props.login(formData.login, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    } else {
        return (
            <div>
                <h1>
                    Login
                </h1>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        );
    }
}

const maxLength10 = maxLengthCreater(10)
const maxLength25 = maxLengthCreater(25)

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Login' component={Input} name='login' validate={[required, maxLength25]}
                />
            </div>
            <div>
                <Field type={'password'} placeholder='Password' component={Input} name='password'
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <Field type='checkbox' component='input' name='rememberMe'/> remember me
            </div>
            { props.error &&
            <div className={styles.formSummaryError}>
                {props.error}
            </div> }
            <div>
                <button>Login</button>
            </div>
        </form>
    );
}

export const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const LoginCont = connect(mapStateToProps, {login: loginTC})(Login)