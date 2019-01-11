
import React from 'react';

import EventListItem from './EventListItem';


class EventList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // events: this.props.events,
            event: null
        }
    }

    render() {
        console.log(this.props.events)
        return (
            <div>
                <ul>
                    {this.props.events.map(event => {
                        return (

                            <li
                                onClick={() => {
                                    this._showEvent(event.id)
                                }}
                                key={event.id}>
                                {event.artist} at
                                    {event.venue} in
                                    {event.city}, {event.state} on
                                    {event.date}
                            </li>

                        )
                    })}

                </ul>
                {this.state.event ? <EventListItem
                    event={(this.state.event)}
                /> : null}
            </div>
        )
    }

    _showEvent = (id) => {
        console.log(`this id ${id} was clicked`)
        let clickedEvent = this.props.events.find(oneEvent => {


             return id === oneEvent.id
      })
        this.setState({
            event: clickedEvent
        })

     }

 }


export default EventList;


