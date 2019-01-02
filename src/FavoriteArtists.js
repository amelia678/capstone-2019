import React from 'react';

const FavoriteArtists = (props) => {
    const artistList = props.myArtists.map(artist => {
        return (
            <li>{artist}</li>
        )
    })
    return (
        <div>
            <p>My Artists:</p>
            <ul>
                {/* <li>Drake</li>
                <li>Grimes</li>
                <li>The Strokes</li> */}
                {artistList}
            </ul>
        </div>
    )
}

export default FavoriteArtists;