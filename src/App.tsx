import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {LoginCont} from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initialazedAppTC} from "./redux/appReducer";
import {AppStateType} from "./redux/redux-store";
import {setAuthUserTC} from "./redux/authReducer";
import {Preloader} from "./components/Common/Preloader/Preloader";


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
        if(!this.props.initialazed){
           return  <Preloader/>
        }  else {
            return (
                    <div className="app-wrapper">
                        <HeaderContainer/>
                        <Navbar/>
                        <div className='app-wrapper-content'>
                            <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                            <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
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
    connect(mapStateToProps, { initialazedApp: initialazedAppTC})
)(App);
