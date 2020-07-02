import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function Header() {
  return (
    <div align="center" className="header">
      <div className="block">
        <h1 id="logo">Bank Hero</h1>
      </div>
      <div className="block">
        <ul id="menu">
          <li>
            <a href="/home">Dashboard</a>
          </li>
          <li>
            <a href="/home">Accounts</a>
          </li>
          <li>
            <a href="/profile">Profile</a>
          </li>
          <li>
            <a href="/profile">Contact</a>
          </li>
        </ul>
      </div>
      
    </div>
  );
}

export default Header;
