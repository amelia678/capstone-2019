import React, { Component } from 'react';
import Search from './Search';
import Profile from './Profile';
import EventList from './EventList'
import EventfulCall from './EventfulCall';
import NavBar from './NavBar';
import OneEvent from './OneEvent';
import Login from './Login';
import Register from './Register';
import Logout from './Logout';


import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
  
  



class MusicPal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAPIList: false,
            searchTerm: '',
            events: [],
            users: []
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


                <Route path="/login" render = {(props) => {
                    return <Login {...props} />
                }}
                />
                <Route path="/register" render = {(props) => {
                    return <Register  {...props} />
                    
                }}
                />
                <Route path= "/home" render = {(props) => {
                return <Search
                searchTerm={(this.state.searchTerm)} {...props}
                handleInput = {(this._setSearchTerm)} {...props} />
                }}
                
                />
                <EventList
                events = {this._searchEvents(this.state.searchTerm)} />
                <button onClick={() => { this._showList() }}>search for more events from eventful.com</button>
                    {this.state.showAPIList ? <EventfulCall /> : null}

                </div>
                <OneEvent />
                </div>
                <div className="userProfile">
                <Route path="/profile" render={(props) => {
                    return <Profile {...props} />
                }} />
                </div>
                <Route path="/logout" render={(props) => {
                    return <Logout {...props}/>
                }}
                />
                {/* <Link  className ="logout" to="/logout">Logout</Link> */}
                </div>
           </div>
            </Router>
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

    _showList = (e) => {
        // e.preventDefault();

        this.setState({
            showAPIList: true
        });
        console.log('clicked');
        // if (isShowingList === false)
        //     return <EventfulCall />;
    }

}

export default MusicPal;