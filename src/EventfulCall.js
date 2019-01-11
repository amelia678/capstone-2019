import React from 'react';

// import AddAPItoDB from './AddAPItoDB';
import OneAPIEvent from './OneAPIEvent';

// let onLoadingGIF = [
//     {< iframe src = "https://giphy.com/embed/2r04CWsFWwixW" width = "480" height = "360" frameBorder = "0" class= "giphy-embed" allowFullScreen ></iframe > <p><a href="https://giphy.com/gifs/kermit-the-frog-jim-henson-muppet-movie-2r04CWsFWwixW">via GIPHY</a></p>},
// { <iframe src="https://giphy.com/embed/fcLWUVsaAkxUc" width="480" height="357" frameBorder="0" className="giphy-embed" allowFullScreen></iframe> <p><a href="https://giphy.com/gifs/fatty-fcLWUVsaAkxUc">via GIPHY</a></p>},
// { <iframe src="https://giphy.com/embed/w5eFyOHmkS8uc" width="480" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> <p><a href="https://giphy.com/gifs/dancing-party-w5eFyOHmkS8uc">via GIPHY</a></p>}
// ]

class EventfulCall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventArray: this.props.eventArray,
            event: null,

        }
    }

    render() {
        console.log(this.state.eventArray);
        let content;

        // NOT WORKING
        // console.log(this.state.eventArray.artist);
        // console.log("^^ title bitches");
        if (this.state.eventArray.length === 0) {
            content = (
                <div>
                    <h1>Loading...</h1>
                    <iframe src="https://giphy.com/embed/2r04CWsFWwixW" width="480" height="360" frameBorder="0" className="giphy-embed" title="1" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/kermit-the-frog-jim-henson-muppet-movie-2r04CWsFWwixW">via GIPHY</a></p>
                </div>
            )

        }
        else if (
            !this.state.eventArray[0].artist) {
            content = (
                <div>
                    <h2>no concerts for you</h2>
                </div>
            )
        }

        else {
            const eventList = this.state.eventArray.map(event => {

                return (
                    <ul>
                    <li className="eventList"
                     onClick={() => {
                        this._showEvent(event.id)
                    }}
                        key={event.id}>
                        {event.artist} at {event.venue} in {event.city}, {event.state} on {event.date}
                    </li>
                    </ul>
                )
            })
            content = (

                < div   >
                    <ul className="list-overflow">
                        {eventList}
                    </ul>
                </div >

            )
        }

        return (
            <div className="APIbundle">
                <div className="oneAPIEvent">
                {this.state.event ? <OneAPIEvent
                    event={(this.state.event)}
                /> : null}
                </div>
                <div className="APIevents">
                    {content}
                </div>
                
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

    }
}


export default EventfulCall;