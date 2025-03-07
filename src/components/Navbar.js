import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        <div className="title-logo">
          <span className="nav-subpre">F,</span>
        </div>
        <div className="nav-title">
          financial <br />
          <span className="nav-subtext">dashboard</span>
        </div>
      </div>

      <ul className="navbar-list">
        <li>
          <Link to="/">
            <span className="material-symbols-outlined">home</span> 
            Home
          </Link>
        </li>
        <li>
          <Link to="/portfolio">
            <span className="material-symbols-outlined">folder</span> 
            Portfolio
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
