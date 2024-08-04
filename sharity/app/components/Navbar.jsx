import React, { useContext } from 'react';
import NavBarButton from './NavBarButton';
import "../globals.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMap, faSearch, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { GlobalContext } from '../context/GlobalContext';


const Navbar = () => {
  const { isCharityProfileVisible } = useContext(GlobalContext);

  return (
    <div className="relative">
      <div className="navbar">
        <NavBarButton link="/profile">
          Profile <FontAwesomeIcon icon={faUser} className="icon-small" />
        </NavBarButton>

        <NavBarButton>
        <a href="https://maps-lilac.vercel.app/" target="_blank" className="nav-bar-button">
  Charity Map <FontAwesomeIcon icon={faMap} className="icon-small" />
</a>


        </NavBarButton>


        {isCharityProfileVisible && (
          <NavBarButton link="/charityProfile">
            Charity Profile <FontAwesomeIcon icon={faSearch} className="icon-small" />
          </NavBarButton>
        )}

        <NavBarButton link="/api/auth/logout">
          Logout <FontAwesomeIcon icon={faSignOutAlt} className="icon-small" />
        </NavBarButton>
      </div>
    </div>
  );
};

export default Navbar;
