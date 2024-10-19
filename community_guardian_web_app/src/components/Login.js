import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BiHome, BiShield, BiUser } from 'react-icons/bi';
import { MdForum } from 'react-icons/md';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../styles/SignUp.css'; // Importing custom CSS for the sign-up page

const SignUp = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  return (
    <div className="sign-up-layout">
      {/* Sidebar */}
      <div className={`side-nav ${isNavOpen ? 'open' : 'collapsed'}`}>
        <div className="nav-header">
          {isNavOpen ? (
            <AiOutlineClose className="close-icon" onClick={() => setIsNavOpen(false)} />
          ) : (
            <AiOutlineMenu className="menu-icon" onClick={() => setIsNavOpen(true)} />
          )}
        </div>
        <div className="nav-item active">
          <BiHome size={24} />
          {isNavOpen && <span>Home</span>}
        </div>
        <div className="nav-item">
          <AiOutlineFieldTime size={24} />
          {isNavOpen && <span>Alerts</span>}
        </div>
        <div className="nav-item">
          <BiShield size={24} />
          {isNavOpen && <span>Report</span>}
        </div>
        <div className="nav-item">
          <MdForum size={24} />
          {isNavOpen && <span>Feed</span>}
        </div>
        <div className="nav-item">
          <BiUser size={24} />
          {isNavOpen && <span>Profile</span>}
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="sign-up-container">
          {/* Welcome image */}
          {/* <div className="welcome-image">
            <img
              src="https://via.placeholder.com/800x400"
              alt="Welcome"
            />
          </div> */}

          {/* Welcome message */}
          <h2>Welcome Back</h2>
          <p>Login to your account</p>

          {/* Sign-up form */}
          <div className="sign-up-form">
            <label>Username</label>
            <input type="text" placeholder="JohnDoe254" />

            <label>Password</label>
            <input type="password" placeholder="user12345" />

            

            <button className="sign-up-btn">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
