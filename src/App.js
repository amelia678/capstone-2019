import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import Search from './Search';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>MusicPal</h1>
        <Search />
      </div>
    );
  }
}

export default App;
