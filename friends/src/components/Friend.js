import React from 'react';

// import axios from 'axios';

const Friend = ({friend}) => {
  const {name, age, email} = friend;

  return (
    <div className="friend-card">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  )
}

export default Friend;
