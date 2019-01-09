import React, {Component} from 'react';

class SearchbyArtist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAPIList: false
        }
    }

    componentDidMount() {
        fetch('/APIartistList', {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                
            })
        })
    }
    render()  {
    return (
        <div>
            <p>search for artists here from last.fm</p>
            <input
            value={this.props.searchTerm}
            onChange={(event) => {
                this.props.handleInput(event.target.value)
            }}
            ></input>
            <button>search</button>
        </div>
    )
}


 
}
export default SearchbyArtist;