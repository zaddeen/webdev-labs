import React from 'react';
import {getHeaders} from './utils'

class AddComment extends React.Component {  

    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.comment = this.comment.bind(this);
    }

    comment() {
        const commentText = document.getElementById("add-comment-input-" + this.props.postIndex).value
        document.getElementById("add-comment-input-" + this.props.postIndex).value = ""
        console.log("Posting comment.")
        const postData = {
            "post_id": this.props.postId,
            "text": commentText
        };

        fetch("http://127.0.0.1:5000/api/comments", {
                method: "POST",
                headers: getHeaders(),
                body: JSON.stringify(postData)
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.props.requeryPost({});
                this.textInput.current.focus();
            });
    }

    _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.comment();
    }
  }

    render () {
        const index = this.props.postIndex
        return (
            <div className="add-comment-container">
                <div className="smile-and-input">
                    <i className="fa fa-smile-o fa-xl"></i>
                    <label htmlFor={"add-comment-input-" + index.toString()} className="add-comment-label"> Add a Comment (Input) </label>
                    <input id={"add-comment-input-" + index.toString()} 
                           placeholder="Add a comment..." 
                           ref={this.textInput}
                           onKeyDown={this._handleKeyDown}/>
                </div>
                <button className="post-button"
                        onClick={this.comment}>Post</button>
            </div>
        )
    }
}

export default AddComment;