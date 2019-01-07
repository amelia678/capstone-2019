import React from 'react';
// import EventfulCall from './EventfulCall';

const EventList = (props) => {
    // console.log(props.events)
    return (
        <div>
            <ul>
                {props.events.map(event => {
                    return (
                        <li href='#'>{event.name} at {event.venue} in {event.location} on {event.date} <button>I'm going!</button></li>
                    )
                })}

            </ul>


        </div>
    )
}


export default EventList;