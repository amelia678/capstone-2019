import React from 'react';

import DeleteArtist from './DeleteArtist';

class FavoriteArtists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myArtists: [],
            artist: null
        }
    }

    componentDidMount() {
        fetch('/myArtists')
            .then(r => r.json()
            )
            .then(artistArray => {
                this.setState({
                    myArtists: artistArray
                })
            })
            .catch(err => {
                console.log(err)
            })
    };

    render() {

        const artistList = this.state.myArtists.map(artist => {
            return (
                <li className="artistList"
                    key={artist.id}>{artist.name}
                    <button
                        onClick={() => {
                            this._deleteArtist(artist.id)
                        }}>Remove from My Artists</button></li>
            )
        })

        return (
            <div>

                <ul className="artistSection" >
                    {artistList}
                </ul>
                <div>
                    {this.state.event ? <DeleteArtist
                        artist={(this.state.artist)}
                    /> : null}
                </div>
            </div>
        )
    }

    _deleteArtist = (id) => {
        console.log(`this artist ${id} was clicked`)
        // let clickedArtist = this.state.myArtists.find(thisOne => {
        //     return id === thisOne.key
        // })
        this.setState({
            artist: id
        }, () => { console.log(this.state) })

    }

}

export default FavoriteArtists;