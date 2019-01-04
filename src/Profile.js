import React, { Component } from 'react';
import UpcomingShows from './UpcomingShows';
import FavoriteArtists from './FavoriteArtists';
import MyFriends from './MyFriends';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            username: ""
        }
    }

    componentDidMount() {
        fetch('/myInfo')
            .then(r => r.json())
            .then(user => {
                // console.log(infoObj)
                this.setState({

                    username: user.username,
                    location: (user.city)
                })
            })
    };

    render() {

        return (
            <div className="userProfile">
                <h1>My Profile</h1>
                <p>About Me:</p>
                <ul>
                    <li>{this.state.username}</li>
                    <li>{this.state.location}</li>
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