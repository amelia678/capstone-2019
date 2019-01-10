import React, {Component} from 'react';

class SearchbyArtist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artistArray: [],
            showAPIList: false
        }
    }

    componentDidMount() {
        fetch('/APIartistList', {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            // body: JSON.stringify({
            //     artistSearch : this.props.searchTerm
            // })
        })
        .then(r => r.json())    
        .then(artists => {
            console.log(artists)
            const artistList = artists.map(grimes => {
                return(
                    <li
                    key={grimes.id}>
                    {grimes.name}</li>
                )
            })
            this.setState({
                artistArray: artistList
            })
        } )
        

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
            <button
            onClick={this._showList}
            >search</button>
            <div>{this.state.artistArray}</div>
        </div>
    )


}

_showList = () => {
    this.setState({
        showAPIList: true
    });
    console.log('we appreciate power')
}


 
}
export default SearchbyArtist;