import React from "react";
import Share from './images/icon-share.svg';

export default function Content({ user }) {
  return (
    <div className='content'>
      <div className='info'>
        <span className='head-text'>{user.htext}</span>
        <p>{user.text}</p>
        <div className='profile'>
          <div className='profile-box'>
            <img className='profile-pic' src={user.propic} alt='profile' />
            <div>
              <p>{user.name}</p>
              <p>{user.date}</p>
            </div>
          </div>
          <div className='reaction'>
            <img src={Share} alt='img' />
          </div>
        </div>
      </div>
    </div>
  );
}
