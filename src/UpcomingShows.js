import React from 'react';

class UpcomingShows extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myShows: [],
        }
    }

    componentDidMount() {
        fetch('/upcomingShows')
            .then(r => r.json())
            .then(showArray => {
                // console.log(showArray);
                this.setState({
                    myShows: showArray
                })
            })
    };

    render() {

        const showList = this.state.myShows.map(show => {
            console.log(show);
            return (
                <li key={show.id}>{show.artist_id}</li>
            )
        })
        // console.log(this.state.myShows);
        return (
            <div>
                <p>My Shows:</p>
                <ul>
                    {showList}
                </ul>
            </div>
        )
    }
}

export default UpcomingShows;