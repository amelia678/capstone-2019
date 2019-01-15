import React from 'react';

const APISearchLocation = (props) => {

    return (
        <div>
            <label>location</label>
            <input
                value={props.searchLocation}
                onChange={(event) => {
                    props.handleInput(event.target.value)
                }}
            ></input>
        </div>
    )
}

export default APISearchLocation;