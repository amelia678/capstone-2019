import React from 'react';
import TheWholeAPIEnchilada from './TheWholeAPIEnchilada'


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
        <TheWholeAPIEnchilada />

        </div>


    )
}

export default Search;