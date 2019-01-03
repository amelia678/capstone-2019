import React, { Component } from 'react';
import UpcomingShows from './UpcomingShows';
import FavoriteArtists from './FavoriteArtists';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myArtists: [
                'Drake',
                'Grimes',
                'The strokes',
                'Sza'
            ],
            myShows: [
                'Drake: StateFarm Arena',
                'Noname: Masquerade',
                'BloodOrange: Variety Playhouse'

            ]
        }
    }
    render() {
        return (
            <div className="userProfile">
                <h1>My Profile</h1>
                <UpcomingShows
                    myShows={this.state.myShows} />
                <FavoriteArtists
                    myArtists={this.state.myArtists} />
            </div>
        )
    }

}




export default Profile;