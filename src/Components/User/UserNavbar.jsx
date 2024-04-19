import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './UserMenu.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
    return(
    <div>
    <nav className="navbar">
    <div className="navbar-brand" >
      <Link to="/UserMenu"><span className="navbar-brand-text"  >Menu</span></Link>
    </div>
    <button className="navbar-toggle" onClick={toggleMenu}>
      <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
    </button>
    <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
      <ul className="navbar-list">
        <li>
          <Link to="/User">Staff Management</Link>
        </li>
    
        <li>
          <Link to="/staff">Staff Profile</Link>
        </li>
        <li>
          <Link to="/messages">Send Messages</Link>
        </li>
        <li>
          <Link to="/ActivityLog">Activity Logs</Link>
        </li>
      </ul>
    </div>
    </nav>
    </div>
    )
  };
  
  export default Navbar;

