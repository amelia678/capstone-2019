import React from 'react';

import GetMemberShows from './GetMemberShows';
import GetMemberArtists from './GetMemberArtists';
import GetMemberFriends from './GetMemberFriends';

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
            <div className="friendProfile" >
                <h3>THIS MA FRIEND {this.state.username}</h3>
                <ul>
                    {/* <li>{this.state.home}</li> */}
                    <h4>{this.state.username}'s likes:</h4>
                    <ul></ul>
                    <h4>{this.state.username}'s dislikes:</h4>
                    <ul></ul>
                    <h4>{this.state.username}'s shows:</h4>
                    <ul><GetMemberShows
                        userID={this.props.showPal} /></ul>
                    <h4>{this.state.username}'s artists:</h4>
                    <h4><GetMemberArtists
                        userID={this.props.showPal} /></h4>
                    <h4>{this.state.username}'s friends:</h4>
                    <ul><GetMemberFriends
                        userID={this.props.showPal} /></ul >
                </ul>
                <a href='mailto: {this.state.email}'><label> email me!</label></a>
            </div >
        )

    }
}

export default OneUserProfile;