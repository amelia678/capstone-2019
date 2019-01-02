import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import Search from './Search';
import Profile from './Profile';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>MusicPal</h1>
        <Search />
        <Profile />
      </div>
    );
  }
}

export default App;
