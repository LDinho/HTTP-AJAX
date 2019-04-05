import React, { Component } from 'react';
import axios from 'axios';

class FriendForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newFriend: {
        name: '',
        age: '',
        email: '',
      },
    }
  }

  handleInputChange = (event) => {
    event.persist();
    const value = event.target.value;

    this.setState(prevState => ({
      newFriend: { ...prevState.newFriend, [event.target.name]: value }
    }));
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.post("http://localhost:5000/friends", this.state.newFriend)
      .then(response => {
        this.props.updateFriends(response.data);

      })
      .then(() =>{
        this.setState({newFriend: {
          name: '',
          age: '',
          email: '',
        }})
      })
      .catch(err => console.log(err));
    // need to prevent adding empty friend
  };

  render () {
    return (
     <div className="friend-form">
       <h2>Add a new friend</h2>
       <form onSubmit={this.handleSubmit}>
         <label> Name:
         <input
           type="text"
           name="name"
           onChange={this.handleInputChange}
           placeholder="Enter name"
           value={this.state.newFriend.name}
         />
         </label>
         <div className="separator-line" />

         <label> Age:
         <input
           type="number"
           name="age"
           onChange={this.handleInputChange}
           placeholder="Enter age"
           value={this.state.newFriend.age}
         />
         </label>
         <div className="separator-line" />

         <label> Email:
         <input
           type="string"
           name="email"
           onChange={this.handleInputChange}
           placeholder="Enter email"
           value={this.state.newFriend.email}
         />
         </label>
         <div className="separator-line" />
         <button type="submit">Add New Friend</button>
       </form>
     </div>

    )
  }

}

export default FriendForm;
