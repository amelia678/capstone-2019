import React, {Component} from 'react';
import Search from './Search';
import Profile from './Profile';
import EventList from './EventList'

class MusicPal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            events : [
                {
                    artist: 'Drake',
                    location: 'Atlanta, GA'
                },
                {
                    artist: 'Sylvan Esso',
                    location: 'Portland, OR'},
                {
                    artist: 'Amelia',
                    location: 'Los Angeles, CA'},
                {
                    artist: 'Migos',
                    location: 'Atlanta, GA'}
            ],

        }
    }

    render() {
        return (
            <div className="userView">
            <Search
            searchTerm={this.state.searchTerm}
            handleInput = {this._setSearchTerm}/>
            <Profile />
            <EventList
            events = {this._searchEvents(this.state.searchTerm)} />
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
            const termMatchesLocation = event.location.includes(term)

            return termMatchesArtist || termMatchesLocation
        });
        return filteredEvents
    }
}

export default MusicPal;