import React from 'react';

const API_KEY = process.env.REACT_APP_EVENTFUL_API_KEY;

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
        // const keyword = this.props.match.searchTerm;
        fetch(`http://my-little-cors-proxy.herokuapp.com/http://api.eventful.com/json/events/search?app_key=${API_KEY}&keywords=concert+music&location=Atlanta+GA&date=This+Weekend`)
            .then(r => r.json())
            .then(data => {
                // this.setState({
                const apiList = [
                    {
                        artist: data.events.event[0].title,
                        venue: data.events.event[0].venue_name,
                        city: data.events.event[0].city_name,
                        state: data.events.event[0].region_abbr,
                        date: data.events.event[0].start_time
                    }
                ];
                return apiList
                // })
            })
            .then(apiList => {
                this.setState({
                    eventArray: apiList
                })
            })
    }

    render() {

        const eventList = this.state.eventArray.map(event => {
            console.log(event);
            return (
                <li>{event.artist} {event.venue} {event.city} {event.state} {event.date}</li>
            )
        })

        return (
            <ul>
                {eventList}
            </ul>
        )
    }

}

export default EventfulCall;