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
            friends: []
        }
    }

    componentDidMount() {
        fetch('/myFriendsGoing')
    }

    render() {
        console.log(this.props.event)
        return (
            <div className="oneEvent" >
                <div>
                    <ul>
                        {/* <p>an event goes here</p> */}
                        <li>Artist: {this.props.event.artist} </li>
                        <li>Venue: {this.props.event.venue} in {this.props.event.city}, {this.props.event.state}</li>
                        <li>Date: {this.props.event.date}</li>
                        <li>My pals also going to this concert:</li>
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
        console.log(this.artist);
    }

}

export default OneEvent;