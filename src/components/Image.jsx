import React from 'react';

export default function Image({ user }) {
  return (
    <div className="picture">
      <img src={user.pic} alt="image" />
      {console.log(user.pic)}
    </div>
  );
}
