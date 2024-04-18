import React from 'react';
import { FaBell, FaSignOutAlt,FaHome } from 'react-icons/fa';
import './Navbar.css';
import '../../ClaimManage/ClaimForm.css'
import '../../UpdateClaim/UpdateForm.css'

import { IoPersonOutline } from "react-icons/io5";
function Navbar() {

  return (
    <section className="navbar">
       
      <a href="/dashboard" className="navbar-item">
        <FaHome className="fa-bell"  /></a>
     
      
        <a href="/notifi" className="navbar-item">
        <FaBell className="fa-bell" /> {/* Apply the CSS class for FaBell icon */}
        
      </a>
      
      <a href="/singout" className="navbar-item">
        <FaSignOutAlt className="fa-sign-out-alt" /> {/* Apply the CSS class for FaSignOutAlt icon */}
        
      </a>
      <a href="/singout" className="navbar-item">
              <div className="profile-icon-container">
            <IoPersonOutline className="fa-sign-out-alt" />
              </div>
      </a>

    </section>
  );
}

export default Navbar;
