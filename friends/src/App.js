import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={(props) => (
          <Home
            {...props}
          />
        )}/>
        <Route path="/friends" render={(props) => (
          <FriendsList
            {...props}
          />
        )}/>
        <Route path="/new" render={(props) => (
          <FriendForm
            {...props}
          />
        )}/>
      </div>
    );
  }
}

export default App;
