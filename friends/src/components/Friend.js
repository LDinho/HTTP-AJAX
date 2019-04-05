import React, { Component } from 'react';
import axios from 'axios';

class Friend extends Component  {
  constructor(props) {
    super(props);
    // console.log("FRIEND", this.props.friend);

    this.state = {
      name: this.props.friend.name,
      age: this.props.friend.age,
      email: this.props.friend.email,
      isEditing: false,
      hasErrors: false,
    }
  }

  deleteFriend = () => {
    const {friend: {id}, updateFriends} = this.props;

    axios.delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        updateFriends(response.data);
      })
      .catch(err => console.log(err));
  }

  editFriend = () => {
    this.setState({
      isEditing: true,
    })
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    console.log("VALUE", value);

    this.setState({
      [event.target.name]: value ,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {friend} = this.props;

    const updatedFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
    };

    axios
      .put(`http://localhost:5000/friends/${friend.id}`, updatedFriend)
      .then(response => {
        this.setState({
          isEditing: false,
        })
      })
      .catch(err => console.log(err));
  }

  render () {
    const {name, age, email} = this.state;

    if (this.state.isEditing) {
      return (
        <div className="friend-card">
          <form className="form-edit" onSubmit={this.handleSubmit}>
            <label> Name:
              <input
                type="text"
                name="name"
                onChange={this.handleInputChange}
                placeholder="Enter name"
                value={this.state.name}
              />
            </label>

            <label> Age:
              <input
                type="number"
                name="age"
                onChange={this.handleInputChange}
                placeholder="Enter age"
                value={this.state.age}
              />
            </label>

            <label> Email:
              <input
                type="string"
                name="email"
                onChange={this.handleInputChange}
                placeholder="Enter email"
                value={this.state.email}
              />
            </label>
            { this.state.hasErrors &&
            <p>
              Please fill out all fields!
            </p>
            }

            <button type="submit">Save</button>
          </form>
        </div>
      )
    } else {

      return (
        <div className="friend-card">
          <button className='button-delete'
                  onClick={this.deleteFriend}>
            Delete
          </button>
          <button className='button-edit'
                  onClick={this.editFriend}>
            Edit
          </button>
          <p>Name: {name}</p>
          <p>Age: {age}</p>
          <p>Email: {email}</p>
        </div>
      )
    }
  }
}

export default Friend;
