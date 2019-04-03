import React, { Component } from 'react';

import './App.css';
import FriendsList from './components/FriendsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Friends
          </h1>
        </header>
        <div className="friends-list">
          <FriendsList />
        </div>
      </div>
    );
  }
}

export default App;
