import React from 'react';
import UserProfileBadge from './userProfileBadge'


function Header() {
  return (
    <div align="center" className="header">

      
      <div className="block">
        <h1 id="logo">Bank Hero</h1>
      </div>

      <UserProfileBadge />
      
      
    </div>
  );
}

export default Header;
