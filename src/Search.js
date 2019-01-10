import React from 'react';
import TheWholeAPIEnchilada from './TheWholeAPIEnchilada'

const Search = (props) => {
    return (
        <div>
            <div className="searchDB">
            <h2>Search events by artist, genre, or city:</h2>
            <input
                value={props.searchTerm}
                onChange={(event) => {
                    props.handleInput(event.target.value)
                }}
            ></input>
            </div>
        <div className="APIenchilada">
        <TheWholeAPIEnchilada />

            {/* <div className="OneEventPlacehoder">
                <img className="eventImage" src="https://assets.rbl.ms/19048490/980x.jpg" alt="gaga rockin the keytar"></img>
            </div> */}
        </div>


        </div>


    )
}

export default Search;