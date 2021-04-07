import React, {Suspense} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {LoginCont} from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initialazedAppTC} from "./redux/appReducer";
import {AppStateType} from "./redux/redux-store";
import {Preloader} from "./components/Common/Preloader/Preloader";
import {WithSuspense} from "./hok/withSuspense";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";

const DialogsContainer = React.lazy<React.ComponentClass | React.FC>(() => import('./components/Dialogs/DialogsContainer'));


// import ProfileContainer from "./components/Profile/ProfileContainer";
const ProfileContainer = React.lazy<React.ComponentClass | React.FC>(() => import('./components/Profile/ProfileContainer'));


type MapStateToPropsType = {
    initialazed: boolean
}

type MapDispatchToPropsType = {
    initialazedApp: () => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

class App extends React.Component<PropsType> {
    componentDidMount() {
        this.props.initialazedApp()
    }

    render() {
        if (!this.props.initialazed) {
            return <Preloader/>
        } else {
            return (
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path="/dialogs" render={WithSuspense(DialogsContainer)}/>
                        <Route path="/profile/:userId?" render={WithSuspense(ProfileContainer)}/>
                        <Route path="/users" render={() => <UsersContainer/>}/>
                        <Route path="/login" render={() => <LoginCont/>}/>
                        <Route path="/news" render={() => <News/>}/>
                        <Route path="/music" render={() => <Music/>}/>
                        <Route path="/settings" render={() => <Settings/>}/>
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = (state: AppStateType) => ({initialazed: state.app.initialazed})

export default compose<React.ComponentClass>(
    withRouter,
    connect(mapStateToProps, {initialazedApp: initialazedAppTC})
)(App);






