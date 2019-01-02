import React from 'react';
import UpcomingShows from './UpcomingShows';
import FavoriteArtists from './FavoriteArtists';

const Profile = (props) => {
    return (
        <div className="userProfile">
            <h1>My  Profile</h1>
            <UpcomingShows />
            <FavoriteArtists />
        </div>

    )
}

export default Profile;