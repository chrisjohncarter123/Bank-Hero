import React from 'react';
import './App.css';
import Account from './Account'

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
