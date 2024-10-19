import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BiHome, BiShield, BiUser } from 'react-icons/bi';
import { MdForum, MdLocalPolice, MdLocalFireDepartment, MdLocalHospital } from 'react-icons/md';
import { AiOutlineFieldTime, AiOutlineWarning } from 'react-icons/ai';
import { FaCarCrash, FaChild, FaFemale, FaLock } from 'react-icons/fa';
import { RiFirstAidKitLine } from 'react-icons/ri'; // Emergency icon
import { Link } from 'react-router-dom';
import '../styles/Emergency.css'; // Custom CSS for the Emergency page

const Emergency = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  return (
    <div className="emergency-layout">
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
        <div className="sos-container">
          <p className="sos-instructions">Touch in case of Emergency</p>
          <div className="sos-button">
            <p>SOS</p>
          </div>
          <p className="emergency-text">Make an Emergency Call</p>

          <div className="emergency-options">
            <div className="emergency-item"> 
              <RiFirstAidKitLine size={50} color="red" />
              <span>Emergency 112</span>
            </div>
            <div className="emergency-item"> 
              <MdLocalPolice size={50} color="blue" />
              <span>Police</span>
            </div>
            <div className="emergency-item">
              <MdLocalHospital size={50} color="pink" />
              <span>Ambulance</span>
            </div>
            <div className="emergency-item"> 
              <MdLocalFireDepartment size={50} color="orange" />
              <span>Fire Station</span>
            </div>
            <div className="emergency-item">
              <MdLocalFireDepartment size={50} color="brown" />
              <span>Wildlife Support</span>
            </div>
            <div className="emergency-item">
              <FaChild size={50} color="green" />
              <span>Child Helpline</span>
            </div>
            <div className="emergency-item">
              <FaFemale size={50} color="purple" />
              <span>Women Helpline</span>
            </div>
            <div className="emergency-item">
              <FaCarCrash size={50} color="red" />
              <span>Car Accident</span>
            </div>
            <div className="emergency-item">
              <FaLock size={50} color="cyan" />
              <span>Private</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergency;
