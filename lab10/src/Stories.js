import React from 'react';
import {getHeaders} from './utils'

class Stories extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            stories: []
        }
        this.fetchStories = this.fetchStories.bind(this)
        console.log("Stories component initialized.")
    }

    componentDidMount() {
        // fetch posts and then set the state...
        console.log("Stories component mounted.")
        this.fetchStories()
    }

    fetchStories() {
        fetch('/api/stories', {
                headers: getHeaders()
            })
        .then(response => response.json())
        .then(storiesData => {
            console.log(storiesData)
            this.setState({stories: storiesData})
        })
    }

     render () {
        return (
            <div id="stories">
                {
                    this.state.stories.map((story, index) => {
                        return (
                            <div className="story" key={index}>
                                <img className="story-profile-pic" src={story.user.thumb_url} alt={"Profile Pic for " + story.user.username + "."} />
                                <p className="story-username"> {story.user.username} </p>
                            </div>
                        )
                    })
                }
            </div>
        );     
    }
}

export default Stories;