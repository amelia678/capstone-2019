import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MusicPal from './MusicPal';





class App extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <div className="App">
        <h1>MusicPal</h1>
        <MusicPal />
        
      </div>
    );
  }
}

export default App;
