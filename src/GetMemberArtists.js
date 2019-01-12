import React from 'react';

class GetMemberArtists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myArtists: [],
        }
    }

    componentDidMount() {
        fetch('/palArtists', {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                userID: this.props.userID
            }),
        })
            .then(r => r.json())
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

export default GetMemberArtists;