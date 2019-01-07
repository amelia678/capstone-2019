import React from 'react';

// const API_KEY = process.env.REACT_APP_EVENTFUL_API_KEY;

class EventfulCall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventArray: [],
            // artistName: '',
            // venue: '',
            // location: '',
            // date: ''
        }
    }

    componentDidMount() {
        fetch('/APIEventList')
            //     // const keyword = this.props.match.searchTerm;
            //     fetch(`http://my-little-cors-proxy.herokuapp.com/http://api.eventful.com/json/events/search?app_key=${API_KEY}&keywords=concert+music&location=Atlanta+GA&date=This+Weekend`)
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

        const eventList = this.state.eventArray.map(event => {
            console.log(event);
            return (
                <li>{event.artist} at {event.venue} in {event.city}, {event.state} on {event.date}<button>I'm going!</button></li>
            )
        })

        return (
            <ul>
                {eventList}
            </ul >
        )
    }

}

export default EventfulCall;