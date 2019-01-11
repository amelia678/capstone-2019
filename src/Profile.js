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
                    home: user.userHome
                })
            })
    }


    render() {

        return (
            <div>
                <h1>{this.state.username}'s Profile</h1>
                <p>About Me:</p>
                <ul >
                    <li>{this.state.username}</li>
                    <li>{this.state.home}</li>
                </ul>
                <UpcomingShows
                    myShows={this.state.myShows} />
                <Link to="/home">Search More Shows</Link>
                <FavoriteArtists
                    myArtists={this.state.myArtists} />
                <Link to="/search-artists">Search More Artists</Link>
                <MyFriends
                    myFriends={this.state.myFriends} />
                <Link className="logout" to="/logout">Logout</Link>
            </div>
        )
    }
};






export default Profile;