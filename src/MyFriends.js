import React from 'react';

class MyFriends extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myFriends: [],
        }
    }

    componentDidMount() {
        fetch('/myFriends')
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
                <li key={friend.id}>{friend.name}</li>
            )
        })

        return (
            <div>
                <p>My Friends:</p>
                <ul>
                    {friendsList}
                </ul>
            </div>
        )
    }
}