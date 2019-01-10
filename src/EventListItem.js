import React from 'react';

import OneEvent from './OneEvent';

class EventListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // eventArray: [],
            event: null
        }
    }
    render() {
        return (
            const eventList = this.props.eventArray.map(event => {

            <li onClick={() => {
                this._showEvent(event.id)
            }}
                key={event.id}>
                {event.artist} at {event.venue} in {event.city}, {event.state} on {event.date}
            </li>
        }))

        return (
            <div>
                {content}
                {
                    this.state.event ? <OneEvent
                        event={(this.state.event)}
                    /> : null
                }
            </div >
        );
    }

    _showEvent = (id) => {
        console.log(`this id ${id} was clicked`)
        let clickedEvent = this.state.eventArray.find(oneEvent => {

            return id === oneEvent.id
        })
        this.setState({
            event: clickedEvent
        })

    }
}

export default EventListItem;