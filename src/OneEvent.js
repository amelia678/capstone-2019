import React from 'react';

import AddEventtoDB from './AddEventtoDB';

class OneEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // artist: '',
            // venue: '',
            // city: '',
            // state: '',
            // date: '',
            addToList: false,
            friends: [],
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

        const attendeeList = this.state.friends.map(pal => {
            return (
                <li key={pal.id}>{pal.username} from {pal.city}, {pal.state}</li>
            )
        })

        return (
            <div className="oneEvent" >
            
                <div>
                    <ul>
                        {/* <p>an event goes here</p> */}
                        <li>Artist: {this.props.event.artist} </li>
                        <li>Venue: {this.props.event.venue} in {this.props.event.city}, {this.props.event.state}</li>
                        <li>Date: {this.props.event.date}</li>
                        <li>Musicpal members going to this concert: <ul>{attendeeList}</ul> </li>
                    </ul>
                    {/* <img className="eventImage" src="https://assets.rbl.ms/19048490/980x.jpg"></img> */}
                </div>

                <button onClick={() => {
                    this._addEvent()
                }}>I'm going!</button>
                {this.state.addToList ? <AddEventtoDB
                    artist={(this.props.event.artist)}
                    venue={(this.props.event.venue)}
                    city={(this.props.event.city)}
                    state={(this.props.event.state)}
                    date={(this.props.event.date)}
                /> : null}

            </div >
        )
    }

    _addEvent = (e) => {
        this.setState({
            addToList: true
        })
        console.log('clicked yo');
        console.log(this.props.event.artist);
    }


}

export default OneEvent;