import React, { Component }from 'react';

import axios from 'axios';

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

  render() {
    return (
      <div>
        {this.state.friends.map( (friend) => {
          return (
            <div key={friend.id}>{friend.name}</div>
          )
        })}
      </div>
    )
  }
}

export default FriendsList;

