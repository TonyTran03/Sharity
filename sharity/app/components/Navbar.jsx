import React from 'react';
import MatchingButton from './MatchingButton';
import "../globals.css";
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="relative">
      <div className="navbar bg-base-100 flex items-center p-10">
        <div className="flex-1 flex justify-center space-x-10">

          <Link href="/profile">
          <button className="button">Profile</button>
          </Link>
          <button className="button">Charity Map 🗺️</button>


          <button className="button">Charity Search 🔎</button>
          <div className="fixed top-10 right-10 flex justify-center space-x-10 z-50">
        <MatchingButton link="/api/auth/logout">Logout</MatchingButton>
        </div>
        
      </div>
      </div>
      
    </div>
  );
};

export default Navbar;
