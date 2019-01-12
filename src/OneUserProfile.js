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
            <div>
                <h3>THIS MA FRIEND {this.state.username}</h3>
                <ul>
                    {/* <li>{this.state.home}</li> */}
                    <li>{this.state.username}'s shows:</li>
                    <ul><GetMemberShows
                        userID={this.props.showPal} /></ul>
                    <li>{this.state.username}'s artists:</li>
                    <ul><GetMemberArtists
                        userId={this.props.showPal} /></ul>
                    <li>{this.state.username}'s friends:</li>
                    <ul><GetMemberFriends
                        userID={this.props.showPal} /></ul>
                </ul>
                <button link='mailto: {this.state.email}'> email me!</button>
            </div >
        )

    }
}

export default OneUserProfile;