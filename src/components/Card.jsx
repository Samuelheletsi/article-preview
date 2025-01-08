import React from 'react';
import Image from './Image';
import Content from './Content';

function Card({ user }) {
  return (
    <div className="card">
      <Image user={user} />
      <Content user={user} />
    </div>
  );
}

export default Card;
