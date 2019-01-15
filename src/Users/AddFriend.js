import React from 'react';

class AddFriend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        console.log(this.props.friend_id)
        console.log('^^ sending this friend id to add')
        fetch('/addToUserFriends', {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                friend_id: this.props.friend_id
            }),
        })
    }

    render() {
        return (
            <p>Yay! You have a new MusicPal!</p>
        )
    }

}

export default AddFriend;