import React from 'react';
import Account from './account'

function Home() {
  return (
    <div className="Home">

      <h2>Bank Accounts:</h2>

      <a href="AddBank">Add Bank</a>

      <Account />
      <Account />
      <Account />
      <Account />
      <Account />
      
    </div>
  );
}

export default Home;
