import React from 'react';

import GetMemberShows from './GetMemberShows';
import GetMemberArtists from './GetMemberArtists';
import GetMemberFriends from './GetMemberFriends';
import AddFriend from './AddFriend';
import DeleteFriend from './DeleteFriend';

class OneUserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            username: '',
            email: '',
            likes: '',
            dislikes: '',
            pal: '',
            addFriend: false,
            deleteFriend: false
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
                    email: user.email,
                    likes: user.likes,
                    dislikes: user.dislikes,
                    pal: user.pal
                })
            })
    };

    render() {
        console.log(this.state)
        console.log('^^ oneuserprofile state')
        return (
            <div className="friendProfile" >
                <h3>all about {this.state.username}</h3>
                <ul>
                    {/* <li>{this.state.home}</li> */}
                    <h4>{this.state.username}'s likes:</h4>
                    <p>{this.state.likes}</p>
                    <h4>{this.state.username}'s dislikes:</h4>
                    <p>{this.state.dislikes}</p>
                    <h4>{this.state.username} is interested in pals for event attendance? </h4>
                    <p>{this.state.pal} </p>
                    <h4>{this.state.username}'s shows:</h4>
                    <ul><GetMemberShows
                        userID={this.props.showPal} /></ul>
                    <h4>{this.state.username}'s artists:</h4>
                    <ul><GetMemberArtists
                        userID={this.props.showPal} /></ul>
                    <h4>{this.state.username}'s friends:</h4>
                    <ul><GetMemberFriends
                        userID={this.props.showPal} /></ul >
                </ul>
                <div className="profile-options">
                    <a className="logout"
                        href={`mailto: (${this.state.email})`}>
                        <label> email me!</label></a>
                    <label className="logout"
                        onClick={() => {
                            this.setState({
                                addFriend: true
                            })
                        }}>add as friend</label>
                    {this.state.addFriend ? <AddFriend
                        friend_id={(this.state.id)}
                    /> : null}
                    <label className="logout"
                        onClick={() => {
                            this.setState({
                                deleteFriend: true
                            })
                        }}> This isn't working for me any more. Remove friend.</label>
                    {this.state.deleteFriend ? <DeleteFriend
                        friend_id={(this.state.id)}
                    /> : null}
                </div>
            </div >
        )
    }
}

export default OneUserProfile;