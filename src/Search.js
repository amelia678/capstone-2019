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


            <div>
                <div className="searchDB">
                    <h2>Search events by artist, keyword, or city:</h2>
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

            </div >

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

export default Search;