import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import MusicPal from './MusicPal';
import NavBar from './NavBar';
import Search from './Search';
import Profile from './Profile';





class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }

  }
  render() {
    return (
      <Router>
      <div className="App">
        <NavBar />
        <h1>MusicPal</h1>
        <h2>Find your music... find your pals</h2>
        <Route path="/search" render = { (props) => {
          return <Search 
          searchTerm={(this.state.searchTerm)} {...props}
          handleInput = {this._setSearchTerm} {...props}/>
        }} />
        <Route path="/profile" component={Profile} />
        
        <MusicPal />

      </div>
      </Router>
    );
  }



  _setSearchTerm = (term) => {
    this.setState({
        searchTerm: term
    })
}

  
}


export default App;
