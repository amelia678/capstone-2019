import React from 'react';

import GetMemberShows from './GetMemberShows';
// import FavoriteArtists from './FavoriteArtists';
// import MyFriends from './MyFriends';

class OneUserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            username: '',
        }
    }

    componentDidMount() {
        fetch('/palProfile', {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                userID: this.props.showPal
            }),
        })

            .then(r => r.json())
            .then(user => {

                this.setState({
                    id: user.id,
                    username: user.username,

                })
            })
    };



    render() {
        console.log(this.state)
        return (
            <div>
                <h3>THIS MA FRIEND {this.state.username}</h3>
                <ul>
                    {/* <li>{this.state.home}</li> */}
                    <li>{this.state.username}'s shows:</li>
                    <ul><GetMemberShows
                        userID={this.props.showPal} /></ul>
                    {/* <li>{this.state.username}'s artists:</li>
                    <ul><FavoriteArtists
                        myArtists={this.state.myArtists} /></ul>
                    <li>{this.state.username}'s friends:</li>
                    <ul><MyFriends
                        myFriends={this.state.myFriends} /></ul> */}
                </ul>
            </div>
        )
    }
}

export default OneUserProfile;