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
                {/* <li>Drake: StateFarm Arena</li>
                <li>Noname: Masquerade</li>
                <li>BloodOrange: Variety Playhouse</li> */}
                {showList}
            </ul>
        </div>
    )
}

export default UpcomingShows;