import React from 'react';
import MatchingButton from './MatchingButton';
import NavBarButton from './NavBarButton';
import "../globals.css";
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="relative">
      <NavBarButton link="/profile">Profile</NavBarButton>
      <NavBarButton link="/map">Charity Map 🗺️</NavBarButton>
      <NavBarButton link = "/search">Charity Search 🔎</NavBarButton>
      <MatchingButton link="/api/auth/logout">Logout</MatchingButton>
    </div>
  );
};

export default Navbar;
