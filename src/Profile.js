import React, { Component } from 'react';
import UpcomingShows from './UpcomingShows';
import FavoriteArtists from './FavoriteArtists';
import MyFriends from './MyFriends';


import {
    Link
} from 'react-router-dom';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            username: ""
        }
    }

    componentDidMount() {

        fetch('/profile')

            .then(r => r.json())
            .then(user => {

                this.setState({
                    username: user.username,
                    city: user.userCity
                })
            })
    }


    render() {

        return (
            <div>
                <h2>My Profile</h2>
                <p>About Me:</p>
                <ul>
                    <li>{this.state.username}</li>
                    <li>{this.state.city}, {this.state.state}</li>
                </ul>
                <UpcomingShows
                    myShows={this.state.myShows} />
                <FavoriteArtists
                    myArtists={this.state.myArtists} />
                <MyFriends
                    myFriends={this.state.myFriends} />
                <Link className="logout" to="/logout">Logout</Link>
            </div>
        )
    }
};






export default Profile;