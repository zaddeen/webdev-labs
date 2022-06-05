import React from 'react';
import {getHeaders} from './utils'

class BookmarkButton extends React.Component {  

    constructor(props) {
        super(props);
        this.toggleBookmark = this.toggleBookmark.bind(this);
        this.bookmark = this.bookmark.bind(this);
        this.unbookmark = this.unbookmark.bind(this);
    }

    toggleBookmark(ev) {
        if (!this.props.bookmarkId) {
            this.bookmark()
        }
        else {
            this.unbookmark()
        }
    }

    bookmark() {
        console.log("Bookmarking post.")
        const postData = {
            "post_id": this.props.postId
        };
        fetch("http://127.0.0.1:5000/api/bookmarks/", {
                method: "POST",
                headers: getHeaders(),
                body: JSON.stringify(postData)
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.props.requeryPost({
                    bookmarkId: data.id
                });
            });
    }

    unbookmark() {
        console.log("Deleting bookmark from post.")
        fetch("http://127.0.0.1:5000/api/bookmarks/" + this.props.bookmarkId, {
            method: "DELETE",
            headers: getHeaders()
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
                this.props.requeryPost({
                    bookmarkId: undefined
                });
        });
    }

    render () {
        const bookmarkId = this.props.bookmarkId;
        return (
            <button role="switch"
                className={bookmarkId ? "post-action bookmarked" : "post-action"} 
                aria-label="Bookmark Button" 
                aria-checked={bookmarkId ? true : false}
                onClick={this.toggleBookmark}>
                <i className={bookmarkId ? "fa fa-bookmark fa-xl" : "fa fa-bookmark-o fa-xl"}></i>                        
            </button>
        ) 
    }
}

export default BookmarkButton;