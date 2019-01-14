import React, { Component } from 'react';
import TheWholeAPIEnchilada from './TheWholeAPIEnchilada'
import EventList from './EventList';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            events: [],
            event: null
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
            <div className="login">
                <div className="searchDB ">
                    <h3>Search events by artist, genre, or city:</h3>
                    <input
                        value={this.state.searchTerm}
                        onChange={(event) => {
                            this._setSearchTerm(event.target.value)
                        }}
                    ></input>
                    <EventList events={this._searchEvents(this.state.searchTerm)} />
                    <div className="APIenchilada">
                        <TheWholeAPIEnchilada />
                    </div>

                </div>

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

            const termMatchesArtist = event.artist.includes(term)
            const termMatchesLocation = event.city.includes(term)

            return termMatchesArtist || termMatchesLocation

        });
        if (this.state.searchTerm.length === 0) {
            return [];
        } else {
            return filteredEvents
        }
    }
}

export default Search;