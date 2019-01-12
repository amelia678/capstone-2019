import React, { Component } from 'react';

import AddArtistToUser from './AddArtistToUser';

class SearchbyArtist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artistArray: [],
            showAPIList: false,
            addToList: null
        }
    }


    render() {

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
                    return (
                        <li
                            key={grimes.id}>
                            {grimes.name}
                            <button onClick={() => {
                                this._addEvent(grimes.name)
                            }}
                            >Add to My Artists!</button>
                            {this.state.addToList ? <AddArtistToUser
                                artist={(grimes.name)}
                            /> : null}
                        </li>
                    )
                })
                if (artistList.length === 0) {
                    this.setState({
                        artistArray: 'No results found'
                    })
                } else {
                    this.setState({
                        artistArray: artistList
                    })
                }
            })

        this.setState({
            showAPIList: true
        });




    }

    _addEvent = (jeff) => {
        console.log('is this jeff?')
        console.log(jeff)
        let clickedArtist = this.state.artistArray.find(thisOne => {
            return jeff === thisOne.name
        })
        this.setState({
            addToList: clickedArtist
        })
    }

}
export default SearchbyArtist;