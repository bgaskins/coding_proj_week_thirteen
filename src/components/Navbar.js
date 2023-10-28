import React from 'react';
import '../App.css';

// Navbar component with brand name and nav links
const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/home">Login Land</a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Login</a>
          </li>
        </ul>
      </nav>
    );
  }
  
  // exports the Navbar component 
  export default Navbar;