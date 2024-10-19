import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BiHome, BiShield, BiUser } from 'react-icons/bi';
import { MdForum } from 'react-icons/md';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { IoIosPeople, IoMdTrophy } from 'react-icons/io';
import { AiOutlineFieldTime, AiOutlineWarning } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../styles/EditProfile.css'; // Import the new CSS file

const EditProfile = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    username: 'JohnDoe254',
    contactNumber: '1234567890',
    email: 'user@gmail.com',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  return (
    <div className="edit-profile-layout">
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
          {isNavOpen && <Link to="/">Home</Link>}
        </div>
        <div className="nav-item">
          <AiOutlineFieldTime size={24} />
          {isNavOpen && <Link to="/alerts">Alerts</Link>}
        </div>
        <div className="nav-item">
          <BiShield size={24} />
          {isNavOpen && <Link to="/report">Report</Link>}
        </div>
        <div className="nav-item">
          <MdForum size={24} />
          {isNavOpen && <Link to="/feed">Feed</Link>}
        </div>
        <div className="nav-item active">
          <BiUser size={24} />
          {isNavOpen && <Link to="/profile">Profile</Link>}
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="profile-header">
          <img
            src="https://via.placeholder.com/100"
            alt="User Avatar"
            className="profile-avatar"
          />
          <h2>John Doe</h2>
        </div>
        <form className="edit-form">
          <div className="input-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={profileData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={profileData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={profileData.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Contact Number</label>
            <input
              type="text"
              name="contactNumber"
              value={profileData.contactNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleInputChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
