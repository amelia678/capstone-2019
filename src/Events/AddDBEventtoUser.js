import React from 'react';

class AddDBEventtoUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventArray: [],
        }
    }

    componentDidMount() {

        fetch('/addUserGoingToShow', {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                eventID: this.props.eventID
            }),
        })
    };

    render() {
        return (
            <div>
                <p>Awesome! You are going to have a blast attending this show!</p>
            </div>
        )
    }
}


export default AddDBEventtoUser;