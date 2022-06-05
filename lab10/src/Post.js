import React from 'react';
import LikeButton from './LikeButton';
import BookmarkButton from './BookmarkButton';
import {getHeaders} from './utils';
import AddComment from './AddComment';

class Post extends React.Component {  

    constructor(props) {
        super(props);
        this.state = {
            post: this.props.model,
            index: this.props.index

        }

        this.requeryPost = this.requeryPost.bind(this);
    }

    requeryPost(requeryData) {
        fetch(`/api/posts/${this.state.post.id}`, {
                headers: getHeaders()
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (requeryData.likeId) {
                    data.current_user_like_id = requeryData.likeId
                }
                if (requeryData.bookmarkId) {
                    data.current_user_bookmark_id = requeryData.bookmarkId
                }
                this.setState({ 
                    post: data
                });
            });
    }
    
    render () {
        const post = this.state.post;
        const index = this.state.index;
        if (!post) {
            return (
                <div></div>  
            );
        }
        else {
            return (
                <div className="post" id={"post_" + post.id}>
                    <div className="user-and-ellipsis">
                        <h2 className="post-username"> {post.user.username} </h2>
                        <i className="fa fa-ellipsis-h"></i>
                    </div>
                    <img className="post-picture" src={post.image_url} alt={"Post by " + post.user.username} />
                    <div className="post-actions-and-bookmark">
                        <div className="main-post-actions">
                            <LikeButton 
                                postId={post.id}
                                likeId={post.current_user_like_id}
                                requeryPost={this.requeryPost}/>
                            <i className="fa fa-comment-o fa-xl"></i>
                            <i className="fa fa-paper-plane-o fa-xl"></i>
                            
                        </div>
                        <BookmarkButton 
                            postId={post.id}
                            bookmarkId={post.current_user_bookmark_id}
                            requeryPost={this.requeryPost}/>
                    </div>
                    <div className="likes-and-caption">
                        <p id="like-number"> <strong> {post.likes.length} likes </strong> </p>
                        <p className="caption"> <strong> {post.user.username} </strong> {post.caption}... <a className="more-button" href="/"> more </a></p>
                        {post.comments.length >= 2 ? <button className="view-button"> View all {post.comments.length} comments </button> : null}
                        {post.comments.length >= 1 ? 
                            <p className="comment"> <strong> {post.comments[post.comments.length - 1].user.username} </strong> {post.comments[post.comments.length - 1].text} </p>
                            :
                            null                       
                        }
                        <p> {post.display_time.toUpperCase()} </p>
                    </div>
                    <hr />
                    <AddComment 
                        postId={post.id}
                        postIndex={index}
                        requeryPost={this.requeryPost}/>
                </div>
            )

        }
    }
}

export default Post;
