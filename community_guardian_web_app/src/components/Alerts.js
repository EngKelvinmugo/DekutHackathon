import React, { useState } from 'react';
import { AiOutlineMenu,AiOutlineFieldTime , AiOutlineClose } from 'react-icons/ai';
import { BiHome, BiShield, BiUser } from 'react-icons/bi';
import { MdForum } from 'react-icons/md';
import { Link } from 'react-router-dom'; 
// import { AiOutlineFieldTime } from 'react-icons/ai';
import '../styles/Alerts.css'; // Importing CSS

const Alerts = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  return (
    <div className="alerts-layout">
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

      {/* Main Content: Full-Screen Map */}
      <div className="map-fullscreen">
        <iframe
          title="Murang'a Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.260800331245!2d37.1426419927207!3d-0.7324936466195359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1b6cf353dcbf%3A0x6fc03e6c009e9828!2sMurang&#39;a!5e0!3m2!1sen!2ske!4v1637192065332!5m2!1sen!2ske"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Alerts;