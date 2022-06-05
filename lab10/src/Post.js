import React from 'react';
import LikeButton from './LikeButton';
import BookmarkButton from './BookmarkButton';
import {getHeaders} from './utils';

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
                            <button className="post-action"> <i className="fa fa-comment-o fa-xl"></i> </button>
                            <button className="post-action"> <i className="fa fa-paper-plane-o fa-xl"></i> </button>
                            
                        </div>
                        <BookmarkButton 
                            postId={post.id}
                            bookmarkId={post.current_user_bookmark_id}
                            requeryPost={this.requeryPost}/>
                    </div>
                </div>
            )

        }
    }
}

export default Post;
