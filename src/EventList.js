import React from 'react';

const EventList = (props) => {
    console.log(props.events)
    return (
        <div>
            <ul>
                {props.events.map(event => {
                    return (
                        <li href='#'>{event.name}, {event.venue}, {event.location}, {event.date}</li>
                    )
                })}

            </ul>

        </div>
    )
}


export default EventList;