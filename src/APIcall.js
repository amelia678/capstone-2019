import React from 'react';

const API_KEY = process.env.REACT_APP_EVENTFUL_API_KEY;

class APIcall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        const keyword = this.props.match.searchTerm;
        fetch(`http://api.eventful.com/json/events/search?app_key=${API_KEY}&keywords=concert+music&location=Atlanta+GA&date=This+Weekend`)
            .then(r => r.json)
            .then(what => {
                console.log(what)
            })
    }

}

export default APIcall;