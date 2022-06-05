import React from 'react';
import NavBar from './NavBar';
import Profile from './Profile';
import Stories from './Stories';
import Suggestions from './Suggestions';
import Posts from './Posts';
import {getHeaders} from './utils'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            profile : undefined
        }
        this.fetchProfile = this.fetchProfile.bind(this);
    }

    componentDidMount() {
        this.fetchProfile()
    }

    fetchProfile () {
        fetch('/api/profile', {
                headers: getHeaders()
            })
            .then(response => response.json())
            .then(profileData => {
                console.log(profileData)
                this.setState({profile: profileData})
            })
    }

    render () {
        let username;
        if (this.state.profile) {
            username = this.state.profile.username
        }
        else {
            username = ""
        }
        
        return (
            <div>
                <NavBar title="Photo App" username={username} />
                <main>
                    <div id="main-and-recs"> 
                        <div id="stories-and-posts">
                            <Stories />
                            <Posts />
                        </div>
                        <div id="recommendations">
                            <Profile profile={this.state.profile} />
                            <Suggestions />
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default App;