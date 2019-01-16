import React from 'react';

import AddAPItoDB from './AddAPItoDB';
import Placeholder from '../Placeholder';
import OneUserProfile from '../Users/OneUserProfile';

class OneAPIEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addToList: false,
            friends: [],
            showPal: null
        }
    }

    componentDidMount() {
        console.log('looking to fetch');
        console.log(this.props.event.id)
        fetch('/showUsers', {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                eventID: this.props.event.id
            }),
        })
            .then(r => {
                return r.json()
            })

            .then(userArray => {
                this.setState({
                    friends: userArray
                })
            })
    };

    render() {

        console.log(this.props.event);
        console.log(this.state.friends)

        let attendeeList;
        if (this.state.friends.length === 0) {
            attendeeList = (
                <li>none so far!</li>
            )
        } else {
            attendeeList =
                this.state.friends.map(pal => {
                    return (
                        <li
                            onClick={() => {
                                this._showPal(pal.id)
                            }}
                            key={pal.id}>{pal.username} from {pal.home}</li>
                    )
                })
        }

        return (
            <div className="oneEvent" >

                <div>
                    <ul>
                        <li>Artist: {this.props.event.artist} </li>
                        <li>Venue: {this.props.event.venue} in {this.props.event.city}, {this.props.event.state}</li>
                        <li>Date: {this.props.event.date}</li>
                        <li>Musicpal members going to this concert: <ul>{attendeeList}</ul> </li>
                    </ul>
                </div>

                <button onClick={() => {
                    this._addEvent()
                }}>I want to go!</button>

                {this.state.addToList ? <AddAPItoDB
                    attendeeList={(this.state.attendeeList)}
                    eventID={(this.props.event.id)}
                    artist={(this.props.event.artist)}
                    venue={(this.props.event.venue)}
                    city={(this.props.event.city)}
                    state={(this.props.event.state)}
                    date={(this.props.event.date)}
                /> : null}

                {this.state.addToList ? <Placeholder /> : null}

                <div class="eventful-badge eventful-small">
                    <a href="http://eventful.com/"> <img src="http://api.eventful.com/images/powered/eventful_58x20.gif"
                        alt="Local Events, Concerts, Tickets" />
                    </a>
                </div>

                {this.state.showPal ? <OneUserProfile
                    showPal={(this.state.showPal)}
                /> : null}

            </div >
        )
    }

    _addEvent = (e) => {
        this.setState({
            addToList: true
        }, () => {
            console.log('clicked yo');
            console.log(this.state.addToList);
            console.log(this.props.event.artist);
        })
    }

    _showPal = (id) => {
        console.log(`look at one friend with id ${id}`)
        this.setState({
            showPal: id
        })
        // console.log(this.state)
    }
}

export default OneAPIEvent;