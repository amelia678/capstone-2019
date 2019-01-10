import React from 'react';
// import EventfulCall from './EventfulCall';

const EventList = (props) => {
    // console.log(props.events)
    return (
        <div>
            <ul>
                {/* {props.events.map(event => { */}
                const eventList = this.props.events.map(event => {
                    return (

                        // <li href='#'>{event.name} at {event.venue} in {event.location} on {event.date} <button>I'm going!</button></li>

                <li
                    onClick={() => {
                        this._showEvent(event.id)
                    }}
                    key={event.id}>
                    {event.artist} at {event.venue} in {event.city}, {event.state} on {event.date}
                </li>
                )
            })}

            </ul>


        </div>
    )

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


export default EventList;