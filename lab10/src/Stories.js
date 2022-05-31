import React from 'react';

class Stories extends React.Component {
  
    constructor(props) {
        super(props);
        console.log("Stories component initialized.")
    }

    componentDidMount() {
        // fetch posts and then set the state...
        console.log("Stories component mounted.")
    }

     render () {
        return (
            <div id="stories">
            </div>
        );     
    }
}

export default Stories;