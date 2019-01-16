import React from 'react';

import OneUserProfile from './OneUserProfile';

class MyFriends extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myFriends: [],
            showPal: null
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
            .catch(err => {
                console.log(err)
            })
    };

    render() {

        const friendsList = this.state.myFriends.map(friend => {
            return (
                <li onClick={() => {
                    this._showPal(friend.id)
                }}
                    key={friend.id}>{
                        friend.username} in {friend.home} </li >
            )
        })

        return (
            <div>
                <ul>
                    {friendsList}
                </ul>
                {this.state.showPal ? <OneUserProfile
                    showPal={(this.state.showPal)}
                /> : null}
            </div >
        )
    }

    _showPal = (id) => {
        console.log(`look at one friend with id ${id}`)
        this.setState({
            showPal: id
        })
    }
}

export default MyFriends;