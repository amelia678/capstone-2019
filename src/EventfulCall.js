import React from 'react';

const API_KEY = process.env.REACT_APP_EVENTFUL_API_KEY;

class EventfulCall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        // const keyword = this.props.match.searchTerm;
        fetch(`http://my-little-cors-proxy.herokuapp.com/http://api.eventful.com/json/events/search?app_key=${API_KEY}&keywords=concert+music&location=Atlanta+GA&date=This+Weekend`)
            .then(r => r.json())
            .then(data => {
                console.log(data.events.event[0].title);
            })
    }

    render() {
        return (
            <p>more events</p>
        )
    }

}

export default EventfulCall;