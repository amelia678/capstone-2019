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
            <div className="login">
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
            
            <div>
                {this.state.addToList ?  <AddArtistToUser
                artist={this.state.addToList}
                /> : null }
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
                        
                        <ul className="eventList"
                            key={grimes.name}>
                            {grimes.name}
                            <button onClick={() => {
                                this._addEvent(grimes.name)
                            }}
                            >Add to My Artists!</button>

                        </ul>
                        
                     
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
            // console.log(thisOne)
            return jeff === thisOne.key
        })
        this.setState({
            addToList: jeff
            
        }, () => {
            console.log(this.state.addToList)
            console.log(clickedArtist)
            console.log(jeff)
        })

        
    }

}
export default SearchbyArtist;