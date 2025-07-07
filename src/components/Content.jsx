import React, { useState } from "react";
import Share from './images/icon-share.svg';
import Facebook from '../../images/icon-facebook.svg';
import Pinterest from '../../images/icon-pinterest.svg';

export default function Content({ user }) {
  const [showShare, setShowShare] = useState(false);

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
          <div className='reaction' onClick={() => setShowShare(s => !s)} tabIndex={0} role="button" aria-label="Share">
            <img src={Share} alt='share' />
          </div>
        </div>
        {showShare && (
          <div className="share-popup">
            <span className="share-label">SHARE</span>
            <img src={Facebook} alt="facebook" className="share-icon" />
            <img src={Pinterest} alt="pinterest" className="share-icon" />
            <img src={Share} alt="share" className="share-icon" />
          </div>
        )}
      </div>
    </div>
  );
}

