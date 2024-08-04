import React from 'react';
import MatchingButton from './MatchingButton';
import NavBarButton from './NavBarButton';
import "../globals.css";
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="relative">
      <div className="navbar">
      <NavBarButton link="/profile">Profile</NavBarButton>
      <NavBarButton link="/map">Charity Map 🗺️</NavBarButton>
      <NavBarButton link = "/search">Charity Search 🔎</NavBarButton>
      <NavBarButton link="/api/auth/logout">Logout</NavBarButton>
    </div> </div>
  );
};

export default Navbar;
