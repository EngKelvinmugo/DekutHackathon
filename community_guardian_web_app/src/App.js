import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Feed from './components/Feed'; 
import Alerts from './components/Alerts';
import Profile from './components/Profile'; 
import Emergency from './components/Emergency'; 
import Rewards from './components/Rewards';
import Report from './components/Report'; 
import Login from './components/Login'; 
import EditProfile from './components/EditProfile';
import SignUp from './components/SignUp'; // Import the Report component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/report" element={<Report />} /> {/* Route to Report */}
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
