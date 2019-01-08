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
        // fetch('/myInfo')
        //     .then(r => r.json())
        //     .then(user => {
        //         // console.log(infoObj)
        //         this.setState({

        //             username: user.username,
        //             city: user.city,
        //             state: user.state
        //         })
        //     })
        fetch('/profile')
        
        .then(r => r.text())
            .then(username => {
                console.log(username)
                this.setState({
                    username: username
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
            </div>
        )
    }
};






export default Profile;