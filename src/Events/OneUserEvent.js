import React from 'react';

import DeleteEvent from './DeleteEvent';
import OneUserProfile from '../Users/OneUserProfile';

class OneUserEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deleteFromList: null,
            friends: [],
            members: [],
            showPal: null
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

                    <div>
                        < li
                            onClick={() => {
                                this._showPal(pal.id)
                            }
                            }
                            key={pal.id} > {pal.username} from {pal.home}</li >
                    </div>

                )
            })

        return (
            <div className="event-profileContainer">
                <div className="oneEvent profile-event">
                    <div>
                        <ul>
                            <li>Artist: {this.props.event.artist} </li>
                            <li>Venue: {this.props.event.venue} in {this.props.event.city}, {this.props.event.state}</li>
                            <li>Date: {this.props.event.date}</li>
                            <li>Musicpal members going to this concert: <ul>{attendeeList}</ul> </li>
                            <li>I'm going!</li>
                            <button onClick={() => {
                                this._deleteEvent()
                            }}>I have to cancel. <span role="img" aria-label="frowny face emoji">☹️ </span></button>
                            {this.state.deleteFromList ? <DeleteEvent
                                eventID={(this.props.event.id)}
                                artist={(this.props.event.artist)}
                            /> : null}
                        </ul>
                    </div>
                    <div class="eventful-badge eventful-small">
                        <a href="http://eventful.com/"> <img src="http://api.eventful.com/images/powered/eventful_58x20.gif"
                            alt="Local Events, Concerts, Tickets" />
                        </a>
                    </div>
                </div>
                <div >
                    {this.state.showPal ? <OneUserProfile
                        showPal={(this.state.showPal)}
                    /> : null
                    }
                </div>
            </div>
        )
    }

    _showPal = (id) => {
        console.log(`look at one friend with id ${id}`)
        this.setState({
            showPal: id
        })
        // console.log(this.state)
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