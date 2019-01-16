import React from 'react';

const APISearchArtist = (props) => {
    return (
        <div>
            <label>artist</label>
            <input
                value={props.searchArtist}
                onChange={(event) => {
                    props.handleInput(event.target.value)
                }}
            ></input>
        </div>
    )
}

export default APISearchArtist;