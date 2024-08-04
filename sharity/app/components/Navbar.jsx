import React from 'react';
import MatchingButton from './MatchingButton';
import NavBarButton from './NavBarButton';
import "../globals.css";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMap, faSearch, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className="relative">
      <div className="navbar">
      <NavBarButton link="/profile">
        Profile <FontAwesomeIcon icon={faUser} className="icon-small" />
      </NavBarButton>
      <NavBarButton link="/map">
        Charity Map <FontAwesomeIcon icon={faMap} className="icon-small" />
      </NavBarButton>
      <NavBarButton link="/search">
        Charity Search <FontAwesomeIcon icon={faSearch} className="icon-small" />
      </NavBarButton>
      <NavBarButton link="/api/auth/logout">
        Logout <FontAwesomeIcon icon={faSignOutAlt} className="icon-small" />
      </NavBarButton>

    </div> </div>
  );
};

export default Navbar;
