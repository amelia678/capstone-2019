import React, { Component } from 'react';
import './App.css';
import MusicPal from './MusicPal';





class App extends Component {
  // constructor(props) {
  //   super(props);

  // }
  render() {
    return (
      <div className="App">
        <h1>MusicPal</h1>
        <h2>Find your music... find your pals</h2>
        <MusicPal />

      </div>
    );
  }
}

export default App;
