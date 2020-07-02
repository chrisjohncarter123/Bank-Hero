import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function Account() {
  return (
    <div className="account">
        <h3>Bank of Truth</h3>
        <span className="cash">$1432</span>
    </div>
  );
}

export default Account;
