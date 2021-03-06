import React from 'react';

class AddAPItoDB extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventArray: [],
        }
    }

    componentDidMount() {

        fetch('/addShowToDb', {
            method: 'post', //so it knows it's a post on this side
            headers: { 'Content-type': 'application/json' }, //automatically set these
            body: JSON.stringify({
                eventID: this.props.eventID,
                artist: this.props.artist,
                venue: this.props.venue,
                city: this.props.city,
                state: this.props.state,
                date: this.props.date
            }), //whatever i want to send back
        }).then(result => {
            console.log(result)
        })
    };

    render() {
        return (
            <div>
                <p>Awesome! You are going to have a blast attending this show!</p>
            </div>
        )
    }
}

export default AddAPItoDB;