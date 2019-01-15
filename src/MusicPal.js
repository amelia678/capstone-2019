import React, { Component } from 'react';
import Search from './Search';
import Profile from './Profile';

import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Logout from './Logout';
import SearchbyArtist from './SearchbyArtist';
// import Placeholder from './Placeholder';
// import OneEvent from './OneEvent';
import Delete from './Delete';
import Update from './Update';

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fagithub } from '@fortawesome/free-solid-svg-icons'

// library.add(fagithub)



class MusicPal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artistSearch: '',
            users: [],
        }
    }


    render() {

        return (

            <Router>
                <div>
                    <div className="musicpal-home">
                        <div className="top-of-page">
                            <div className="navBar-container">
                                <NavBar />
                            </div>
                            <div className="title">
                                
                                <h1>MusicPal</h1>
                            </div>
                            
                        </div>
                        <div className="eventInfo">
                            <div className="searchBar">
                                <Route path="/" exact render={() => {
                                    return <h2>Find your music... find your pals</h2>
                                }} />
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
                                        searchTerm={(this.state.artistSearch)}{...props}
                                        handleInput={(this._setArtistSearch)}{...props} />
                                }}
                                />


                                <div className="userProfile">


                                    <Route path="/profile" render={(props) => {
                                        return <Profile {...props} />
                                    }}
                                    />

                                </div>

                            </div>
                            {/* <Placeholder /> */}

                        
                        </div>


                        <Route path="/logout" render={(props) => {
                            return <Logout {...props} />
                        }} />
                        <Route path="/delete" render={(props) => {
                            return <Delete {...props} />
                        }} />
                        <Route path="/update" render={(props) => {
                            return <Update {...props} />
                        }} />


                    <footer>
                        &copy;
                        <a href="https://github.com/amelia678">Amelia Schulz</a> & 
                        <a href="https://github.com/CB987/">Clare Barton</a>
                        

                    </footer>
                    </div>
                </div>
            </Router>
        )
    }



    _setArtistSearch = (term) => {
        this.setState({
            artistSearch: term
        })
    }
}

export default MusicPal;