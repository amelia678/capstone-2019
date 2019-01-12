import React from 'react';

class GetMemberShows extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myShows: []
        }
    }

    componentDidMount() {
        fetch('/otherShows', {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                userID: this.props.userID
            })
        }).then(r => r.json())
            .then(showArray => {
                this.setState({
                    myShows: showArray
                })
            })
    }

    render() {
        console.log(this.props.userID)
        const showList = this.state.myShows.map(show => {

            return (
                <li key={show.id}>
                    {show.artist} at {show.venue} in {show.city}, {show.state} on {show.date}
                </li>
            )
        })

        return (
            <div><ul>
                {showList}</ul></div>
        )
    }
}

export default GetMemberShows;