import React, { Component } from 'react';
import UpcomingShows from './UpcomingShows';
import FavoriteArtists from './FavoriteArtists';
import MyFriends from './MyFriends';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myInfo: []
        }
    }

    componentDidMount() {
        fetch('/myInfo')
            .then(r => r.json())
            .then(infoArray => {
                this.setState({
                    myInfo: infoArray
                })
            })
    };

    render() {

        const infoList = this.state.myInfo.map(user => {
            return (
                <li key={user.id}>{user.username, user.city, user.state}</li>
            )
        })

        return (
            <div className="userProfile">
                <h1>My Profile</h1>
                <p>About Me:</p>
                <ul>
                    {infoArray}
                </ul>
                <UpcomingShows
                    myShows={this.state.myShows} />
                <FavoriteArtists
                    myArtists={this.state.myArtists} />
                <MyFriends
                    myFriends={this.state.myFriends} />
            </div>
        )
    }

}




export default Profile;