import React from 'react';

import DeleteEvent from './DeleteEvent';

class OneUserEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deleteFromList: false,
            friends: [],
            members: []
        }
    }

    componentDidMount() {
        console.log('you are here');
        console.log(this.props.event.id)
        fetch('/showUsers', {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                eventID: this.props.event.id
            }),
        })
            .then(r => r.json())
            .then(userArray => {
                this.setState({
                    friends: userArray
                })
            })
    };

    render() {

        let attendeeList =
            this.state.friends.map(pal => {
                return (
                    <li key={pal.id}>{pal.username} from {pal.home}</li>
                )
            })
        //determine here how long the attendee list, and if it is just this req.session.user, then need to call deletefromeventstable also

        return (
            <div className="oneEvent">
                <div>
                    <ul>
                        <li>Artist: {this.props.event.artist} </li>
                        <li>Venue: {this.props.event.venue} in {this.props.event.city}, {this.props.event.state}</li>
                        <li>Date: {this.props.event.date}</li>
                        <li>Musicpal members going to this concert: <ul>{attendeeList}</ul> </li>
                        <li>I'm going!</li>
                        <button onClick={() => {
                            this._deleteEvent()
                        }}>I have to cancel. <span role="img" alt="frowny face emoji">☹️ </span></button>
                        {this.state.deleteFromList ? <DeleteEvent
                            eventID={(this.props.event.id)}
                            artist={(this.props.event.artist)}
                        /> : null}
                    </ul>
                </div>
            </div>
        )
    }

    _deleteEvent = (e) => {
        this.setState({
            deleteFromList: true
        }, () => {
            console.log('the life-changing magic of deleting events')
        })
    }
}

export default OneUserEvent;