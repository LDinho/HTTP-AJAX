import React, { Component } from 'react';

import './App.css';
import FriendsList from './components/FriendsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="app-header">
          <h1>
            Friends
          </h1>
        </header>
        <FriendsList />
      </div>
    );
  }
}

export default App;
