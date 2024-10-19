import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BiHome, BiShield, BiUser } from 'react-icons/bi';
import { MdForum } from 'react-icons/md';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../styles/Profile.css';  // Profile-specific CSS

const Profile = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  return (
    <div className="profile-layout">
      {/* Sidebar */}
      <div className={`side-nav ${isNavOpen ? 'open' : 'collapsed'}`}>
        <div className="nav-header">
          {isNavOpen ? (
            <AiOutlineClose className="close-icon" onClick={() => setIsNavOpen(false)} />
          ) : (
            <AiOutlineMenu className="menu-icon" onClick={() => setIsNavOpen(true)} />
          )}
        </div>
        <div className="nav-item">
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
        <div className="nav-item active">
          <BiUser size={24} />
          {isNavOpen && <span>Profile</span>}
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="profile-header">
          <img src="https://via.placeholder.com/50" alt="User Profile" className="profile-pic" />
          <div>
            <h2>John Doe</h2>
            <p className="edit-profile">Edit Profile &gt;</p>
          </div>
        </div>

        <div className="profile-options">
          <div className="option-box">
            <h3>General</h3>
            <ul>
              <li>Help Centre</li>
              <li>Your Post Feed</li>
              <li>Send Feedback</li>
            </ul>
          </div>

          <div className="option-box">
            <h3>SOS Message</h3>
            <ul>
              <li>Enable SOS Menu bar <span className="toggle-switch"><input type="checkbox" defaultChecked /></span></li>
              <li>Edit SOS Message Content</li>
              <li>Additional SOS Settings</li>
            </ul>
          </div>

          <div className="option-box">
            <h3>Emergency Contacts</h3>
            <ul>
              <li>Add Emergency Contact <span className="add-icon">+</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
