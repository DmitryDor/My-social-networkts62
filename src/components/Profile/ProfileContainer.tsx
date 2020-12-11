import React from 'react';
import {ActionTypeMessage, ActionTypePost, ProfilePageType} from "../../redux/store";
import Profile from "./Profile";
import {StateType} from "../../redux/redux-store";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfileAC} from "../../redux/profileReducer";
import {withRouter, RouteComponentProps} from 'react-router-dom';


// type OwnPropsType = {}
type MapStateToPropsType = {
    profile: ProfileType | null
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

type PathParamsType = {
    userId: string
}

type CommonPropsType = RouteComponentProps<PathParamsType> & PropsType

class ProfileContainer extends React.Component<CommonPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
       /* if (!userId) {
            userId = '2'
        }*/
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(res => {
                this.props.setUserProfile(res.data)
            })
    }

    render() {

        return (
            <Profile profile={this.props.profile} {...this.props}/>
        );
    }
}


const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    setUserProfile: setUserProfileAC
})(WithUrlDataContainerComponent)