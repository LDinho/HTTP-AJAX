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
        console.log('RESPONSE:', res);
      })
      .catch( (error) => {
        console.error('Server Error', error);
      });
  }

  render() {
    return (
      <div>
        List here
      </div>
    )
  }
}

export default FriendsList;

