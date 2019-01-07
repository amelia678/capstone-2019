import React from 'react';
// import EventList from './EventList';
// import logo from './logo.svg';
// const API_KEY = process.env.REACT_APP_EVENTFUL_API_KEY;

class EventfulCall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventArray: [],
            addToList: false
        }
    }

    componentDidMount() {
        fetch('/APIEventList')
            //     // const keyword = this.props.match.searchTerm;
            .then(r => r.json())
            // .then(data => {
            //     // this.setState({
            //     console.log(data)
            //     const apiList =
            //     {
            //         artist: data.artist,
            //         venue: data.venue,
            //         location: (data.city, data.state),
            //         date: data.date
            //     }
            //         ;
            //     return apiList
            //     // })
            // })
            .then(apiList => {
                this.setState({
                    eventArray: apiList
                })
                //         })
            })
    }



    render() {

        let content;

        const eventList = this.state.eventArray.map(event => {
            console.log(event);
            return (
                <li>{event.artist} at {event.venue} in {event.city}, {event.state} on {event.date}
                    <button onClick={() => {
                        this._addEvent()
                    }}>I'm going!</button>
                </li>
            )
        })


        if (this.state.eventArray.length === 0) {
            content = (
                <div>
                    <h1>Loading...</h1>
                    <iframe src="https://giphy.com/embed/fcLWUVsaAkxUc" width="480" height="357" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/fatty-fcLWUVsaAkxUc">via GIPHY</a></p> />
                </div>
            )
        } else {
            content = (

                <div>

                    <ul>
                        {eventList}
                    </ul>
                </div >
            )
        }

        return (
            <div>
                {content}
            </div>
        );
    }

    _addEvent = (e) => {
        this.setState({
            addToList: true
        })
        console.log('clicked yo');
    }

}


export default EventfulCall;