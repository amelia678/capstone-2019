import React from 'react';

const APISearchKeyword = (props) => {
    return (

        <div>
            <label>keyword</label>
            <input
                value={props.searchKeyword}
                onChange={(event) => {
                    props.handleInput(event.target.value)
                }}
            ></input>
        </div>
    )
}

export default APISearchKeyword;