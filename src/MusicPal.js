import React, { Component } from 'react';
import Search from './Search';
import Profile from './Profile';
import EventList from './EventList'
import EventfulCall from './EventfulCall';

class MusicPal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            events: [],
        }
    }

    componentDidMount() {
        fetch('/eventList')
            .then(r => r.json())
            .then(eventsArray => {
                this.setState({
                    events: eventsArray
                })
            })
    }

    render() {


        return (
            <div className="userView">
                <div className="searchBar">
                    <Search
                        searchTerm={this.state.searchTerm}
                        handleInput={this._setSearchTerm}
                    />
                    <EventList
                        events={this._searchEvents(this.state.searchTerm)}
                    />
                    <EventfulCall />
                </div>
                <Profile />
            </div>
        )
    }

    _setSearchTerm = (term) => {
        this.setState({
            searchTerm: term
        })
    }

    _searchEvents = (term) => {
        const filteredEvents = this.state.events.filter(event => {

            const termMatchesArtist = event.name.includes(term)
            const termMatchesLocation = event.location.includes(term)

            return termMatchesArtist || termMatchesLocation

        });
        if (this.state.searchTerm.length === 0) {
            return [];
        } else {
            return filteredEvents
        }
    }
}

export default MusicPal;