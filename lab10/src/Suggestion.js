import React from 'react';
import {getHeaders} from './utils'

class Suggestion extends React.Component {  

    constructor(props) {
        super(props);
        this.state = {
            suggestion: this.props.model,
            followingId: undefined
        }
        this.toggleFollow = this.toggleFollow.bind(this);
        this.follow = this.follow.bind(this);
        this.unfollow = this.unfollow.bind(this);
    }

    toggleFollow(ev) {
        if (!this.state.followingId) {
            this.follow()
        }
        else {
            this.unfollow()
        }
    }

    follow() {
        console.log("Following user.")
        const postData = {
            "user_id": this.state.suggestion.id
        };

        fetch("http://127.0.0.1:5000/api/following/", {
                method: "POST",
                headers: getHeaders(),
                body: JSON.stringify(postData)
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({followingId : data.id})
            });
    }

    unfollow() {
        fetch("http://127.0.0.1:5000/api/following/" + this.state.followingId, {
            method: "DELETE",
            headers: getHeaders()
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({followingId : undefined})
        });
    }

    render () {
        const suggestion = this.state.suggestion;
        return (
            <div className="recommendation">
                <img src={suggestion.thumb_url} alt={"Profile Pic for " + suggestion.username + "."} className="rec-profile-pic" />
                <div className="name-and-suggested">
                    <p className="recommendation_username"> <strong> {suggestion.username} </strong> </p>
                    <p className="suggested-for-you">suggested for you</p>
                </div>
                <button id="follow_link"
                        role="switch" 
                        onClick={this.toggleFollow}
                        aria-label="Follow Button"
                        aria-checked={this.state.followingId ? true : false}>
                            {this.state.followingId ? "unfollow" : "follow"}
                </button>
            </div>
        ) 
    }
}

export default Suggestion;