import React from 'react';

class DeleteArtist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        fetch('/deleteArtistFromUser', {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                artist_id: this.props.artist
            })
        })
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default DeleteArtist;