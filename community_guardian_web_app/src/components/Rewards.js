import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BiHome, BiShield, BiUser } from 'react-icons/bi';
import { MdForum } from 'react-icons/md';
import { IoMdTrophy } from 'react-icons/io';
import '../styles/Rewards.css'; // Import the custom CSS for rewards

const Rewards = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  // Dummy data for rewards
  const rewards = [
    { name: 'John Doe', reward: 'Ksh5000' },
    { name: 'Jane Doe', reward: 'Ksh5000' },
    { name: 'Sam Doe', reward: 'Ksh5000' },
    { name: 'Peter Doe', reward: 'Ksh5000' },
    { name: 'Dan Doe', reward: 'Ksh5000' },
    { name: 'Joy Doe', reward: 'Ksh5000' },
    { name: 'Joy Doe', reward: 'Ksh5000' },
    { name: 'Joy Doe', reward: 'Ksh5000' },
  ];

  return (
    <div className="rewards-layout">
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
          <BiShield size={24} />
          {isNavOpen && <span>Report</span>}
        </div>
        <div className="nav-item">
          <MdForum size={24} />
          {isNavOpen && <span>Feed</span>}
        </div>
        <div className="nav-item">
          <IoMdTrophy size={24} />
          {isNavOpen && <span>Rewards</span>}
        </div>
        <div className="nav-item">
          <BiUser size={24} />
          {isNavOpen && <span>Profile</span>}
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Search bar */}
        <div className="search-bar">
          <input type="text" placeholder="Enter Area City or State" />
          <button>🔍</button>
        </div>

        {/* Instruction text */}
        <p className="instruction-text">
          Relevant information regarding the whereabouts of the persons of interest will be rewarded as per terms.
        </p>

        {/* Rewards Grid */}
        <div className="rewards-grid">
          {rewards.map((reward, index) => (
            <div key={index} className="reward-card">
              <div className="reward-image">
                <img
                  src="data:image/jpeg;base64,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"
                  alt={`${reward.name}`}
                />
              </div>
              <div className="reward-info">
                <p className="reward-name">{reward.name}</p>
                <p className="reward-amount">{reward.reward}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rewards;
