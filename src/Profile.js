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
            home: "",
            likes: "",
            dislikes: "",
            pal: "",
            isLoggedIn: false
        }
    }

    componentDidMount() {

        fetch('/API/user/isValid')
        .then(r => {
            return r.json()
        })
        
            .then (({user, isLoggedIn}) => {
                console.log(user)
                if (isLoggedIn === false) {
                    this.props.history.push('/login')
                }
                
                this.setState({
                    id: user.id,
                    username: user.username,
                    name: user.name,
                    email: user.email,
                    home: user.home,
                    likes: user.likes,
                    dislikes: user.dislikes,
                    pal: user.pal,
                    isLoggedIn: true
                })


            
       
                // console.log(r)
                // return r.json()
                
            
            
            // .catch(data => {
            //     console.log(data)
            //     if (data.isLoggedIn === false) {

                    
            //     }
                    // })
      
        
            })
            .catch(err => {
                console.log(err)
            })

        }

    render() {

        return (
            <div>
                <h1>{this.state.name}'s Profile</h1>
                <p>About Me:</p>
                <ul >
                    <li className="eventList">My Username: {this.state.username}</li>
                    <li className="eventList">My home: {this.state.home}</li>
                    <li className="eventList">My likes: {this.state.likes}</li>
                    <li className="eventList">My dislikes: {this.state.dislikes}</li>
                    <li className="eventList">I am interested in finding pals to go to events with: {this.state.pal}</li>
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
                <div className="profile-options">
                <Link className="logout" to="/update">Update my Info</Link>
                <Link className="logout" to="/logout">Logout</Link>
                <Link className="logout" to="/delete">Delete my Account</Link>
                </div>
            </div>
        )
    }
};
export default Profile;