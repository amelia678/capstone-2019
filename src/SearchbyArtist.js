import React, {Component} from 'react';

class SearchbyArtist extends Component {
    constructor(props) {
        super(props);
   
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