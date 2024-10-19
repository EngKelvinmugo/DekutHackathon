import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaEdit } from 'react-icons/fa';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BiShield, BiHome, BiUser } from 'react-icons/bi';
import { MdForum } from 'react-icons/md';
import { IoIosPeople, IoMdTrophy } from 'react-icons/io';
import { AiOutlineFieldTime, AiOutlineWarning } from 'react-icons/ai';
import { Link } from 'react-router-dom'; // Import Link
import '../styles/Home.css';

const Home = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  return (
    <div className="home-layout">
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
        <div className="nav-item">
          <BiUser size={24} />
          {isNavOpen && <Link to="/profile">Profile</Link>}
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Centered Location Bar */}
        <div className="location-bar">
          <FaMapMarkerAlt size={18} />
          <span>Murang'a, Township</span>
          <FaEdit size={16} className="edit-icon" />
        </div>

        {/* Grid of Options */}
        <div className="grid-container">
          <Link to="/alerts" className="grid-item"> {/* Link to Alerts */}
            <AiOutlineFieldTime size={50} color="green" />
            <span>Alerts</span>
          </Link>
          <Link to="/emergency" className="grid-item">
            <AiOutlineWarning size={50} color="green" />
            <span>SOS Call Emergency</span>
          </Link>
          <Link to="/report" className="grid-item">
            <IoIosPeople size={50} color="green" />
            <span>Report</span>
          </Link>
          <Link to="/feed" className="grid-item">
            <MdForum size={50} color="green" />
            <span>Forum/Feed</span>
          </Link>
          <Link to="/rewards" className="grid-item">
            <IoMdTrophy size={50} color="green" />
            <span>Rewards</span>
          </Link>
          <Link to="/profile" className="grid-item">
            <BiUser size={50} color="green" />
            <span>Profile</span>
          </Link>
        </div>

        {/* Contact Information */}
        <div className="contact-info">
          <p>For Any Queries Contact Murang'a Police Department Through:</p>
          <p><FaPhone /> Tel: 0716549814</p>
          <p><FaEnvelope /> Email: info.policemurang'a.co.ke</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
