import React from 'react';
import MatchingButton from './MatchingButton';
import "../globals.css";

const Navbar = () => {
  return (
    <div className="relative">
      <div className="navbar bg-base-100 flex items-center p-10">
        <div className="flex-1 flex justify-center space-x-10">
          <button className="button">Profile</button>
          <button className="button">Charity Map 🗺️</button>
          <button className="button">Charity Search 🔎</button>
          <div className="fixed top-10 right-1000 flex justify-center space-x-10 z-50">
        <MatchingButton link="/api/auth/logout">Logout</MatchingButton>
        </div>
        
      </div>
      </div>
      
    </div>
  );
};

export default Navbar;
