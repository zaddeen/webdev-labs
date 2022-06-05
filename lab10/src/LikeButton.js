import React from 'react';
import {getHeaders} from './utils'

class LikeButton extends React.Component {  

    constructor(props) {
        super(props);
        this.toggleLike = this.toggleLike.bind(this);
        this.like = this.like.bind(this);
        this.unlike = this.unlike.bind(this);
    }

    toggleLike(ev) {
        console.log(this.props)
        if (!this.props.likeId) {
            this.like()
        }
        else {
            this.unlike()
        }
    }

    like() {
        console.log("Liking post.")
        const postData = {
            "post_id": this.props.postId
        };
        fetch("http://127.0.0.1:5000/api/posts/likes/", {
                method: "POST",
                headers: getHeaders(),
                body: JSON.stringify(postData)
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.props.requeryPost({
                    likeId: data.id
                });
            });
    }

    unlike() {
        console.log("Deleting like from post.")
        fetch("http://127.0.0.1:5000/api/posts/likes/" + this.props.likeId, {
            method: "DELETE",
            headers: getHeaders()
        })
        .then(response => response.json())
        .then(data => {
                console.log(data);
                this.props.requeryPost({
                    likeId: undefined
            });
        });
    }

    render () {
        const likeId = this.props.likeId;
        console.log("Post " + this.props.postId + ": " + likeId)
        return (
            <button role="switch"
                className={likeId ? "post-action liked" : "post-action"} 
                aria-label="Like Button" 
                aria-checked={likeId ? true : false}
                onClick={this.toggleLike}>
                <i className={likeId ? "fa fa-heart fa-xl" : "fa fa-heart-o fa-xl"}></i>                        
            </button>
        ) 
    }
}

export default LikeButton;