import React from 'react';

class DeleteFriend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myFriends: []
        }
    }


    componentDidMount() {
        console.log(this.props.friend_id)
        console.log('^^ sending this friend id to BE DELETED')
        fetch('/deleteFriend', {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                friend_id: this.props.friend_id
            }),
        })
    }

    render() {

        return (
            <p> Sometimes it just doesn't work out.!</p>
        )
    }
}

export default DeleteFriend;