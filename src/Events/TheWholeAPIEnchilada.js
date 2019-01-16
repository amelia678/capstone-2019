import React from 'react';
import APISearchLocation from './APISearchLocation';
import APISearchArtist from './APISearchArtist';
import APISearchKeyword from './APISearchKeyword';
import EventfulCall from './EventfulCall';

class TheWholeAPIEnchilada extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchLocation: '',
            searchArtist: '',
            searchkeyword: '',
            showAPIList: false,
            eventArray: []
        }
    }

    render() {
        return (

            <div className="APIenchilada">
                <p>don't see what you're looking for? <br /> search for more events from eventful.com</p>

                <APISearchLocation
                    searchLocation={(this.state.searchLocation)}
                    handleInput={(this._setSearchLocation)}
                />
                <APISearchArtist
                    searchArtist={(this.state.searchArtist)}
                    handleInput={(this._setSearchArtist)}
                />
                <APISearchKeyword
                    searchKeyword={(this.state.searchKeyword)}
                    handleInput={(this._setSearchKeyword)}
                />
                <button onClick={this._showList}>search</button>
                {this.state.showAPIList ? <EventfulCall
                    eventArray={this.state.eventArray}
                /> : null}
            </div>
        )
    }

    _setSearchLocation = (term) => {
        this.setState({
            searchLocation: term
        })
    }
    _setSearchArtist = (term) => {
        this.setState({
            searchArtist: term
        })
    }
    _setSearchKeyword = (term) => {
        this.setState({
            searchKeyword: term
        })
    }

    _showList = () => {
        // e.preventDefault();
        this.setState({
            showAPIList: false
        })
        console.log('enchilada launch sequence commenced');

        fetch('/APIEventList', {
            method: 'post', //so it knows it's a post on this side
            headers: { 'Content-type': 'application/json' }, //automatically set these
            body: JSON.stringify({
                searchLocation: this.state.searchLocation,
                searchArtist: this.state.searchArtist,
                searchKeyword: this.state.searchKeyword || ''
            }), //whatever i want to send back

        })
            .then(r => {
                return r.json()
            })
            .then(data => {
                console.log(data);
                this.setState({
                    eventArray: data,
                    showAPIList: true
                })
            })
    }
}

export default TheWholeAPIEnchilada;