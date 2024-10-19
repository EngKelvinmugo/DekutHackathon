import React, { useState } from 'react';
import { AiOutlineMenu,AiOutlineFieldTime, AiOutlineClose, AiOutlineClockCircle } from 'react-icons/ai';
import { BiHome, BiShield, BiUser, BiCalendar } from 'react-icons/bi';
import { MdForum } from 'react-icons/md';
import { Link } from 'react-router-dom'; 
import '../styles/Report.css'; // Importing custom styles for Report page

const Report = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [mediaFile, setMediaFile] = useState(null);

  const currentDate = new Date().toISOString().substring(0, 10); // Get current date
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Get current time

  const handleFileUpload = (event) => {
    setMediaFile(event.target.files[0]);
  };

  return (
    <div className="report-layout">
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
      <div className="report-content">
        {/* Location Bar */}
        <div className="location-bar">
          <span className="location-icon">📍</span>
          <span>Muranga, Township</span>
        </div>

        {/* Form */}
        <form className="report-form">
          <div className="form-row">
            <div className="input-group">
              <label>Select Time</label>
              <div className="icon-input">
                <AiOutlineClockCircle size={20} />
                <input type="text" value={currentTime} readOnly />
              </div>
            </div>
            <div className="input-group">
              <label>Select Date</label>
              <div className="icon-input">
                <BiCalendar size={20} />
                <input type="date" value={currentDate} readOnly />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Select Crime Type</label>
              <select>
                <option value="Assault">Assault</option>
                <option value="Robbery">Robbery</option>
                <option value="Theft">Theft</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="input-group">
              <label>Enter Description</label>
              <textarea placeholder="Enter details of the crime"></textarea>
            </div>
          </div>

          <div className="input-group role-selection">
            <label>Please Select, I am the:</label>
            <div className="radio-group">
              <label>
                <input type="radio" name="role" value="victim" /> Victim
              </label>
              <label>
                <input type="radio" name="role" value="witness" /> Witness
              </label>
              <label>
                <input type="radio" name="role" value="perpetrator" /> Perpetrator
              </label>
              <label>
                <input type="radio" name="role" value="anonymous" /> Anonymous
              </label>
            </div>
          </div>

          {/* Media Button for File Upload */}
          <div className="input-group">
            <label>Enter Media Evidence</label>
            <label className="media-btn">
              <span role="img" aria-label="camera">
                📷
              </span>
              {mediaFile ? mediaFile.name : "Enter Media Evidence"}
              <input
                type="file"
                style={{ display: 'none' }}
                onChange={handleFileUpload}
              />
            </label>
          </div>

          <div className="input-group terms">
            <label>
              <input type="checkbox" required /> By submitting this form I hereby acknowledge that I have read and agree to
              the terms and conditions.
            </label>
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Report;
