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
            username: "",
            name: "",
            email: "",
            home: ""
        }
    }

    componentDidMount() {

        fetch('/profile')

            .then(r => r.json())
            .then(user => {

                this.setState({
                    id: user.id,
                    username: user.username,
                    name: user.name,
                    email: user.email,
                    home: user.home

                })
            })
    }


    render() {

        return (
            <div>
                <h1>{this.state.name}'s Profile</h1>
                <p>About Me:</p>
                <ul >
                    <li>{this.state.username}</li>
                    <li>{this.state.home}</li>
                </ul>
                <p>My Shows:</p>
                <UpcomingShows
                    myShows={this.state.myShows} />
                <Link to="/home">Search More Shows</Link>
                <p>My Artists:</p>
                <FavoriteArtists
                    myArtists={this.state.myArtists} />
                <Link to="/search-artists">Search More Artists</Link>
                <p>My Friends:</p>
                <MyFriends
                    myFriends={this.state.myFriends} />
                <Link className="logout" to="/logout">Logout</Link>
            </div>
        )
    }
};






export default Profile;