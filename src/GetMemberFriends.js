import React from 'react';

class GetMemberFriends extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myFriends: [],
        }
    }

    componentDidMount() {
        fetch('/palFriends', {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                userID: this.props.userID
            }),
        })
            .then(r => r.json())
            .then(friendArray => {
                this.setState({
                    myFriends: friendArray
                })
            })
    };

    render() {

        const friendsList = this.state.myFriends.map(friend => {
            return (
                <li key={friend.id}>{friend.username} in {friend.home} </li >
            )
        })

        return (
            <div>


                <ul>
                    {friendsList}
                </ul>
            </div >
        )
    }
}

export default GetMemberFriends;