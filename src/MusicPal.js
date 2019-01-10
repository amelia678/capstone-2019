import React, { Component } from 'react';
import Search from './Search';
import Profile from './Profile';
import EventList from './EventList'
// import EventfulCall from './EventfulCall';
import NavBar from './NavBar';
import OneEvent from './OneEvent';
import Login from './Login';
import Register from './Register';
// import TheWholeAPIEnchilada from './TheWholeAPIEnchilada';
import Logout from './Logout';
import SearchbyArtist from './SearchbyArtist';
import Placeholder from './Placeholder';


import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'


class MusicPal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // showAPIList: false,
            // searchTerm: '',
            artistSearch: '',
            // events: [],
            users: [],
        }
    }

    // componentDidMount() {
    //     fetch('/eventList')
    //         .then(r => r.json())
    //         .then(eventsArray => {
    //             this.setState({
    //                 events: eventsArray
    //             })
    //         })
    // }

    render() {

        return (

            <Router>
                <div>
                    <div className="musicpal-home">
                        <div className="navBar-container">
                            <NavBar />
                        </div>
                        <h1>MusicPal</h1>
                        <h2>Find your music... find your pals</h2>
                        <div className="eventInfo">
                            <div className="searchBar">


                                <Route path="/login" render={(props) => {
                                    return <Login {...props} />
                                }}
                                />
                                <Route path="/register" render={(props) => {
                                    return <Register  {...props} />

                                }}
                                />
                                <Route path="/home" render={(props) => {
                                    return <Search
                                        searchTerm={(this.state.searchTerm)} {...props}
                                        handleInput={(this._setSearchTerm)} {...props} />
                                }}

                                />
                                <Route path="/search-artists" render={(props) => {
                                    return <SearchbyArtist 
                                        searchTerm ={(this.state.artistSearch)}{...props}
                                        handleInput={(this._setArtistSearch)}{...props} />
                                }}
                                />
                                {/* <EventList
                                    events={this._searchEvents(this.state.searchTerm)} /> */}
                            <div className="userProfile">
                            <Route path="/profile" render={(props) => {
                                return <Profile {...props} />
                            }} />
                        </div>

                            </div>
                            <Placeholder />
            
                        </div>
                        
                        <Route path="/logout" render={(props) => {
                            return <Logout {...props} />
                        }} />
                    
                    </div>
                    
                </div>
            </Router>
        )
    }

    // _setSearchTerm = (term) => {
    //     this.setState({
    //         searchTerm: term
    //     })
    // }

    // _searchEvents = (term) => {
    //     const filteredEvents = this.state.events.filter(event => {

    //         const termMatchesArtist = event.name.includes(term)
    //         const termMatchesLocation = event.city.includes(term)

    //         return termMatchesArtist || termMatchesLocation

    //     });
    //     if (this.state.searchTerm.length === 0) {
    //         return [];
    //     } else {
    //         return filteredEvents
    //     }
    // }

    _setArtistSearch = (term) => {
        this.setState({
            artistSearch : term
        })
    }
}

export default MusicPal;