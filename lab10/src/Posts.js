import React from 'react';
import Post from './Post';
import {getHeaders} from './utils'

class Posts extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
        this.fetchPosts = this.fetchPosts.bind(this);
        console.log("Posts component initialized.")
    }

    componentDidMount() {
        // fetch posts and then set the state...
        this.fetchPosts()
    }

    fetchPosts() {
        fetch('/api/posts', {
                // authentication headers added using 
                // getHeaders() function from src/utils.js
                headers: getHeaders()
            })
        .then(response => response.json())
        .then(postData => {
            console.log(postData)
            this.setState({posts: postData})
            //const html = posts.map((post, index) => post2Html(post, index)).join('\n');
            //document.querySelector('#posts').innerHTML = html;
        })
    }

     render () {
        return (
            <div id="posts">
                {
                    this.state.posts.map(post => {
                        return (
                            <Post model={post} key={'post-' + post.id} />
                        )
                    })
                }
            </div>
        );     
    }
}

export default Posts;