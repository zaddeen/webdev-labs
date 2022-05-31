import React from 'react';

class Profile extends React.Component {
  
    constructor(props) {
        super(props);
        console.log("Profile component initialized.")
    }

    componentDidMount() {
        // fetch posts and then set the state...
        console.log("Profile component mounted.")
    }

     render () {
        return (
            <div id="current-user">
            </div>
        );     
    }
}

export default Profile;