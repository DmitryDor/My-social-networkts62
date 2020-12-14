import React from 'react';

import Profile from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {ProfileType, setUserProfileAC, setUsersProfileTC} from "../../redux/profileReducer";
import {withRouter, RouteComponentProps} from 'react-router-dom';


// type OwnPropsType = {}
type MapStateToPropsType = {
    profile: ProfileType | null
}
type MapDispatchToPropsType = {
    // setUserProfile: (profile: ProfileType) => void
    setUsersProfile: (userId: string) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

type PathParamsType = {
    userId: string
}

type CommonPropsType = RouteComponentProps<PathParamsType> & PropsType

class ProfileContainer extends React.Component<CommonPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.setUsersProfile(userId)


        /*  let userId = this.props.match.params.userId
          /!* if (!userId) {
               userId = '2'
           }*!/
          profileAPI.getProfiles(userId)
              .then(res => {

                  this.props.setUserProfile(res.data)
              })*/
    }

    render() {

        return (
            <Profile profile={this.props.profile} {...this.props}/>
        );
    }
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    // setUserProfile: setUserProfileAC
    setUsersProfile: setUsersProfileTC
})(WithUrlDataContainerComponent)