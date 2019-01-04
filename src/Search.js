import React from 'react';
import OneEvent from './OneEvent'

const Search = (props) => {
    return (
        <div>

            <h2>Search events by artist, genre, or city:</h2>
            <input
                value={props.searchTerm}
                onChange={(event) => {
                    props.handleInput(event.target.value)
                }}
            ></input>
            <button
            >Find</button>
            
        </div>


    )
}

export default Search;