import React from 'react';
import axios from 'axios';

const Friend = ({friend, updateFriends}) => {
  const {id, name, age, email} = friend;

  const deleteFriend = () => {
    axios.delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        updateFriends(response.data);
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="friend-card">
      <button className='button-delete'
              onClick={deleteFriend}>
        Delete
      </button>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  )
}

export default Friend;
