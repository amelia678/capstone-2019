import React, {Component} from 'react';

class SearchbyArtist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artistArray: [],
            showAPIList: false
        }
    }

    render()  {
      
    return (
        <div>
            <h3>Search an Artist</h3>
            <input
            value={this.props.searchTerm}
            onChange={(event) => {
                this.props.handleInput(event.target.value)
            }}
            ></input>
            <button
            onClick={this._showList}
            >search</button>
            <div >
             {this.state.artistArray}
            </div>
        </div>
    )


}

_showList = () => {
    fetch('/APIartistList', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
            searchArtist: this.props.searchTerm
        })
        
    })
    .then(r => r.json())    
    .then(artists => {
        console.log(artists)
        const artistList = artists.map(grimes => {
            return(
                <ul className="eventList"
                key={grimes.id}>
                {grimes.name}<button>Add to my list</button>
                </ul>
            )
        })
        if (artistList.length === 0) {
            this.setState({
                artistArray : 'No results found'
            })
        } else {
        this.setState({
            artistArray: artistList
        })
    }
    } )
    
    this.setState({
        showAPIList: true
    });
}


 
}
export default SearchbyArtist;