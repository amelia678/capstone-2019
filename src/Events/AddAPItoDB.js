import React from 'react';
// import EventList from './EventList';
// import logo from './logo.svg';
// const API_KEY = process.env.REACT_APP_EVENTFUL_API_KEY;

class AddAPItoDB extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventArray: [],
        }
    }

    componentDidMount() {

        fetch('/addShowToDb', {
            method: 'post', //so it knows it's a post on this side
            headers: { 'Content-type': 'application/json' }, //automatically set these
            body: JSON.stringify({
                eventID: this.props.eventID,
                artist: this.props.artist,
                venue: this.props.venue,
                city: this.props.city,
                state: this.props.state,
                date: this.props.date
            }), //whatever i want to send back
        }).then(result => {
            console.log(result)
        })

        // }


        // fetch('/isInDb', {
        //     method: 'post',
        //     headers: { 'Content-type': 'application/json' },
        //     body: JSON.stringify({
        //         eventID: this.props.eventID
        //     })
        // }).then(r => {
        //     return r.json()

        // }).then(data => {
        //     console.log(data);
        // if (data.eventID !== this.props.eventID) {
        //     fetch('/addShowToDb', {
        //         method: 'post', //so it knows it's a post on this side
        //         headers: { 'Content-type': 'application/json' }, //automatically set these
        //         body: JSON.stringify({
        //             eventID: this.props.eventID,
        //             artist: this.props.artist,
        //             venue: this.props.venue,
        //             city: this.props.city,
        //             state: this.props.state,
        //             date: this.props.date
        //         }), //whatever i want to send back
        //     })
        // } else if (data.eventID === this.props.eventID) {
        //     fetch('/addUserGoingToShow', {
        //         method: 'post',
        //         headers: { 'Content-type': 'application/json' },
        //         body: JSON.stringify({
        //             eventID: this.props.eventID
        //         }),
        //     })
        // }
    };


    render() {
        return (
            <div>
                <p>Awesome! You are going to have a blast attending this show!</p>
            </div>
        )
    }
}


export default AddAPItoDB;