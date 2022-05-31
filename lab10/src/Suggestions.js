import React from 'react';

class Suggestions extends React.Component {
  
    constructor(props) {
        super(props);
        console.log("Suggestions component initialized.")
    }

    componentDidMount() {
        // fetch posts and then set the state...
        console.log("Suggestions component mounted.")
    }

     render () {
        return (
            <div id="recommendations">
            </div>
        );     
    }
}

export default Suggestions;