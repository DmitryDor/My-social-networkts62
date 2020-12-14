import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {DataType, setAuthUserDataAC, setAuthUserTC} from "../../redux/authReducer";
import {authAPI} from "../../api/api";

type PropsType = {
    // setAuthUserData: (data: DataType) => void
    setAuthUser: () => void

}
type MapStateToPropsType = {
    isAuth: boolean
    login: null | string
}
type CommonProps = PropsType & MapStateToPropsType


class HeaderContainer extends React.Component<CommonProps, AppStateType> {
    componentDidMount() {

        this.props.setAuthUser()
       /* authAPI.authMe()
            .then(res => {
                if (res.data.resultCode === 0) {
                    this.props.setAuthUserData(res.data.data)
                }
            })*/
    }

    render() {
        return <Header {...this.props}/>;
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


export default connect(mapStateToProps, {
    // setAuthUserData: setAuthUserDataAC,
    setAuthUser: setAuthUserTC
})(HeaderContainer);