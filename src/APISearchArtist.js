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
            {/* <button onClick={() => { this._showList() }}>artist</button> */}

        </div>
    )

}

export default APISearchArtist;