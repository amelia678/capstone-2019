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
            showAPIList: false
        }
    }

    render() {
        return (
            <div>
                <p>no results? search for more events from eventful.com</p>
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
                    searchLocation={(this.state.searchLocation)}
                    searchArtist={(this.state.searchArtist)}
                    searchKeyword={(this.state.searchKeyword)}
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

    // _searchEvents = (term) => {
    //     const filteredEvents = this.state.events.filter(event => {

    //         const termMatchesArtist = event.name.includes(term)
    //         const termMatchesLocation = event.location.includes(term)

    //         return termMatchesArtist || termMatchesLocation

    //     });
    //     if (this.state.searchTerm.length === 0) {
    //         return [];
    //     } else {
    //         return filteredEvents
    //     }
    // }

    _showList = (e) => {
        // e.preventDefault();

        this.setState({
            showAPIList: true
        });
        console.log('clicked');
    }

}

export default TheWholeAPIEnchilada;