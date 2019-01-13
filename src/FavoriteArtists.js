import React from 'react';

class FavoriteArtists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myArtists: [],
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
    };

    render() {

        const artistList = this.state.myArtists.map(artist => {
            return (
                <li key={artist.id}>{artist.name}</li>
            )
        })

        return (
            <div>

                <ul>
                    {artistList}
                </ul>
            </div>
        )
    }
}

export default FavoriteArtists;