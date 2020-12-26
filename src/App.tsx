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
import {logoutTC, setAuthUserTC} from "./redux/authReducer";
import {compose} from "redux";

type PropsType = {
    setAuthUser: () => void
}

class App extends React.Component<PropsType> {
    componentDidMount() {
        this.props.setAuthUser()
    }

    render() {

        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path="/dialogs" render={() => <DialogsContainer/>}/>

                        <Route path="/profile/:userId?" render={() => <ProfileContainer
                        />}/>
                        <Route path="/users" render={() => <UsersContainer/>}/>
                        <Route path="/login" render={() => <LoginCont/>}/>
                        <Route path="/news" render={() => <News/>}/>
                        <Route path="/music" render={() => <Music/>}/>
                        <Route path="/settings" render={() => <Settings/>}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default compose<React.ComponentClass>(
    withRouter,
    connect(null, {setAuthUser: setAuthUserTC,})
)(App);
