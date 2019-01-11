import React from 'react';

class AddArtistToUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {

        fetch('/addUserGoingToShow', {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                artist: this.props.artist
            }),
        })
    }

    render() {
        return (
            <p>Man, you have awesome taste in music!</p>
        )
    }
}

export default AddArtistToUser;