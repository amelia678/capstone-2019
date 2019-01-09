import React from 'react';

// import AddAPItoDB from './AddAPItoDB';
import OneEvent from './OneEvent';

import { Link } from 'react-router-dom'

// let onLoadingGIF = [
//     {< iframe src = "https://giphy.com/embed/2r04CWsFWwixW" width = "480" height = "360" frameBorder = "0" class= "giphy-embed" allowFullScreen ></iframe > <p><a href="https://giphy.com/gifs/kermit-the-frog-jim-henson-muppet-movie-2r04CWsFWwixW">via GIPHY</a></p>},
// { <iframe src="https://giphy.com/embed/fcLWUVsaAkxUc" width="480" height="357" frameBorder="0" className="giphy-embed" allowFullScreen></iframe> <p><a href="https://giphy.com/gifs/fatty-fcLWUVsaAkxUc">via GIPHY</a></p>},
// { <iframe src="https://giphy.com/embed/w5eFyOHmkS8uc" width="480" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> <p><a href="https://giphy.com/gifs/dancing-party-w5eFyOHmkS8uc">via GIPHY</a></p>}
// ]

class EventfulCall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventArray: [],
            event: null
            // addToList: false
        }
    }

    componentDidMount() {
        fetch('/APIEventList', {
            method: 'post', //so it knows it's a post on this side
            headers: { 'Content-type': 'application/json' }, //automatically set these
            body: JSON.stringify({
                searchLocation: this.props.searchLocation,
                searchArtist: this.props.searchArtist,
                searchKeyword: this.props.searchKeyword || ''
            }), //whatever i want to send back

        })
            .then(r => {
                return r.json()
            })
            .then(data => {
                console.log(data);
                this.setState({
                    eventArray: data,
                })
            })
    }

    render() {
        console.log(this.state.eventArray);
        let content;


        // console.log(this.state.eventArray.artist);
        // console.log("^^ title bitches");
        if (this.state.eventArray.length === 0) {
            content = (
                <div>
                    <h1>Loading...</h1>
                    <iframe src="https://giphy.com/embed/2r04CWsFWwixW" width="480" height="360" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/kermit-the-frog-jim-henson-muppet-movie-2r04CWsFWwixW">via GIPHY</a></p>
                </div>
            )

        }
        else if (
            !this.state.eventArray[0].artist) {
            content = (
                <div>
                    <h1>no concerts for you</h1>
                </div>
            )
        }

        else {
            const eventList = this.state.eventArray.map(event => {
                // console.log(event);


                return (
                    // <Link to={'/oneEvent'}>
                    <li onClick={() => {
                        this._showEvent(event.id)
                    }}
                        key={event.id}>
                        {event.artist} at {event.venue} in {event.city}, {event.state} on {event.date}

                        {/* <button onClick={() => {
                            this._addEvent()
                        }}>I'm going!</button>
                        {this.state.addToList ? <AddAPItoDB
                            artist={(this.state.artist)}
                            venue={(this.props.venue)}
                            city={(this.props.city)}
                            state={(this.props.state)}
                            date={(this.props.date)}
                        /> : null} */}

                    </li>
                    // </Link>
                )
            })
            content = (

                < div >
                    <ul>
                        {eventList}
                    </ul>
                </div >

            )
        }

        return (
            <div>
                {content}
                {this.state.event ? <OneEvent
                    event={(this.state.event)}
                /> : null}
            </div>
        );
    }

    _showEvent = (id) => {
        console.log(`this id ${id} was clicked`)
        let clickedEvent = this.state.eventArray.find(oneEvent => {

            return id === oneEvent.id
        })
        this.setState({
            event: clickedEvent
        })


        // console.log('ONE EVENT HAS BEEN CLICKED ON')
        // }
        // _addEvent = (e) => {
        //     this.setState({
        //         addToList: true
        //     })
        //     console.log('clicked yo');
        //     console.log(this.artist);
        // }

    }
}


export default EventfulCall;