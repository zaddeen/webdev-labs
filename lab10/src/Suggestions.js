import React from 'react';
import Suggestion from './Suggestion';
import { getHeaders } from './utils';

class Suggestions extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            suggestions: []
        }
        this.fetchSuggestions = this.fetchSuggestions.bind(this);
        console.log("Suggestions component initialized.")
    }

    componentDidMount() {
        // fetch posts and then set the state...
        console.log("Suggestions component mounted.")
        this.fetchSuggestions()
    }

    fetchSuggestions() {
        fetch('/api/suggestions', {
                headers: getHeaders()
            })
            .then(response => response.json())
            .then(suggestionsData => {
                console.log(suggestionsData)
                this.setState({suggestions : suggestionsData})
            })
    }

     render () {
        return (
            <div>
                <p id="reco-suggestions-title"> <strong> Suggestions for you </strong> </p>
                {
                    this.state.suggestions.map((suggestion, index) => {
                        return (
                            <Suggestion model={suggestion} key={'suggestion-' + index} />
                        )
                    })
                }
            </div>
            
        );     
    }
}

export default Suggestions;