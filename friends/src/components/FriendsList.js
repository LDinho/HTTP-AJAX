import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Friend from './Friend';
// import FriendForm from './FriendForm';

class FriendsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then( (res) => {
        console.log('RESPONSE.DATA:', res.data);
        this.setState({
          friends: res.data,
        })
      })
      .catch( (error) => {
        console.error('Server Error', error);
      });
  }

  updateFriends = newFriends => {
    this.setState({ friends: newFriends });
  };

  render() {
    return (
      <section className="friends-list">
        {/*<FriendForm updateFriends={this.updateFriends} />*/}

        <Link to="/">
          <div className="button-home">
            Home
          </div>
        </Link>

        <Link to="/new">
          <div className="button-add">
            Add New Friend
          </div>
        </Link>

        {this.state.friends.reverse().map( (friend) => {
          return <Friend key={friend.id}
                         friend={friend}
                         updateFriends={this.updateFriends}
          />
        })}
      </section>
    )
  }
}

export default FriendsList;
