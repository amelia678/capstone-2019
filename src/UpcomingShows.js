import React from 'react';

const UpcomingShows = (props) => {
    const showList = props.myShows.map(show => {
        return (
            <li>{show}</li>
        )
    })
    return (
        <div>
            <p>My Shows:</p>
            <ul>
              
                {showList}
            </ul>
        </div>
    )
}

export default UpcomingShows;