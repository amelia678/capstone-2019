import React, { Component } from 'react';
import './App.css';



import MusicPal from './MusicPal';
import NavBar from './NavBar';
import Profile from './Profile';





class App extends Component {
  constructor(props) {
    super(props);
   

  }
  render() {
    return (
      
      <div className="App">
        
        
        {/* <Route path="/" render = {(props) => { 
          return <Search 
           searchTerm={(this.state.searchTerm)} {...props}
          handleInput = {this._setSearchTerm} {...props}/>

        }} /> */}
        
        <MusicPal />
        

      </div>
     
    );
  }

}


export default App;
