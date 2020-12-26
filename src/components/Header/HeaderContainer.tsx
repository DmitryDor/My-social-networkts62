import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import { logoutTC} from "../../redux/authReducer";

type PropsType = {
    logout: () => void

}
type MapStateToPropsType = {
    isAuth: boolean
    login: null | string
}
type CommonProps = PropsType & MapStateToPropsType


class HeaderContainer extends React.Component<CommonProps, AppStateType> {


    render() {
        return <Header {...this.props}/>;
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


export default connect(mapStateToProps, {
    logout: logoutTC
})(HeaderContainer);