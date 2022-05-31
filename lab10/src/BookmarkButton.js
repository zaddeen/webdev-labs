import React from 'react';

class BookmarkButton extends React.Component {  

    constructor(props) {
        super(props);
        this.togglebookmark = this.toggleBookmark.bind(this);
        this.bookmark = this.bookmark.bind(this);
        this.unbookmark = this.unbookmark.bind(this);
    }

    toggleBookmark(ev) {
        if (this.props.Id) {
            console.log('unbookmark');
            this.unbookmark();
        } else {
            console.log('bookmark');
            this.bookmark();
        }
    }

    bookmark() {
        console.log('code to bookmark the post');
        // issue fetch request and then afterwards requery for the post:
        // this.props.requeryPost();
    }

    unbookmark() {
        console.log('code to unbookmark the post');
        // issue fetch request and then afterwards requery for the post:
        // this.props.requeryPost();
    }

    render () {
        const bookmarkId = this.props.bookmarkId;
        return (
            <button role="switch"
                className="bookmark" 
                aria-label="bookmark Button" 
                aria-checked={bookmarkId ? true : false}
                onClick={this.togglebookmark}>
                <i className={bookmarkId ? 'fas fa-bookmark' : 'far fa-bookmark'}></i>                        
            </button>
        ) 
    }
}

export default BookmarkButton;