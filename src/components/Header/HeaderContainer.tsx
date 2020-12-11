import React from 'react';
import Header from "./Header";
import axios from 'axios'
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {DataType, setAuthUserDataAC} from "../../redux/authReducer";

type PropsType = {
    setAuthUserData: (data: DataType) => void

}
type MapStateToPropsType = {
    isAuth: boolean
    login: null | string
}
type CommonProps = PropsType & MapStateToPropsType


class HeaderContainer extends React.Component<CommonProps, StateType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(res => {
            if (res.data.resultCode === 0) {
                this.props.setAuthUserData(res.data.data)
            }
        })
    }

    render() {
        return <Header {...this.props}/>;
    }
}

let mapStateToProps = (state: StateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


export default connect(mapStateToProps, {
    setAuthUserData: setAuthUserDataAC
})(HeaderContainer);