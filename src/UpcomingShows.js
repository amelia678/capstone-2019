import React from 'react';

import OneUserEvent from './OneUserEvent';

class UpcomingShows extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myShows: [],
            event: null
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
            // console.log(show);
            return (
                <li onClick={() => {
                    this._showEvent(show.id)
                }}
                    key={show.id}>
                    {show.artist} at
                {show.venue} in
                {show.city}, {show.state} on
                {show.date}
                </li>
            )
        })
        // console.log(this.state.myShows);
        return (
            <div>
                <p>My Shows:</p>
                <ul>
                    {showList}
                </ul>
                {this.state.event ? <OneUserEvent
                    event={(this.state.event)}
                /> : null}
            </div>
        );
    }

    _showEvent = (id) => {
        console.log(`this id ${id} was clicked`)
        let clickedEvent = this.state.myShows.find(thisOne => {

            return id === thisOne.id
        })
        this.setState({
            event: clickedEvent
        })
    }
}

export default UpcomingShows;