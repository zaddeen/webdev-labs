import React from 'react';

class Profile extends React.Component {
  
    constructor(props) {
        super(props);
        console.log("Profile component initialized.")
    }

    componentDidMount() {
        console.log("Profile component mounted.")
    }

     render () {
        if (!this.props.profile) {
            return (<div></div>)
        }
        return (
            <div id="current-user">
                <img src={this.props.profile.image_url} alt={"Profile Pic for " + this.props.profile.username + "."} id="user_profile_pic" />
                <h2 className="reco-main-username"> <strong> {this.props.profile.username} </strong> </h2>
            </div>
        );     
    }
}

export default Profile;