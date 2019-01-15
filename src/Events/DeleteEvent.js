import React from 'react';

class DeleteEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // eventArray: [],
        }
    }

    componentDidMount() {
        fetch('/deleteEventFromUser', {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                eventID: this.props.eventID
            }),
        })
    }

    render() {
        return (
            <p>Too bad! You have successfully deleted the {this.props.artist} show from your shows.</p>
        )
    }
}

export default DeleteEvent;