"use client"
import React, { useContext, useEffect } from 'react';
import Navbar from "../components/Navbar";
import { GlobalContext } from '../context/GlobalContext.js';
import '../globals.css';

function SharityLogo() {
  return <img src={"Sharity.png"} alt="Sharity Logo"/>;
}

export function BulletPointList() {
  const bulletPointStyle = {
    marginBottom: '20px',
    paddingLeft: '10px',
    fontSize: '18px',
  };

  return (
    <div>
      <ul style={{ listStyleType: 'disc', paddingLeft: '30px' }}>
        <li style={bulletPointStyle}>
          <span style={{ fontWeight: 'bold', color: '#c77593' }}>Live Map:</span> see what donations charities need
        </li>
        <li style={bulletPointStyle}>
          <span style={{ fontWeight: 'bold', color: '#c77593' }}>Track</span> your donations
        </li>
        <li style={bulletPointStyle}>
          <span style={{ fontWeight: 'bold', color: '#c77593' }}>Optimize Resources:</span> charities can see each other's resources, helping them work better together
        </li>
      </ul>
    </div>
  );
}

export default function Home() {
  const { updateVisibility } = useContext(GlobalContext);

  useEffect(() => {
    const storedValue = localStorage.getItem('isCharityProfileVisible');
    if (!storedValue) {
      const userConfirmed = window.confirm('Do you want to enable the Charity Profile?');
      updateVisibility(userConfirmed);
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className="side-by-side">
        <SharityLogo />
        <div className="rectangle" style={{ width: '500px', height: '345px' }}>
          <h1 style={{ fontSize: '20px', marginBottom: '20px', paddingTop: '60px', fontWeight: 'bold', color: '#a6496b', padding: '20px' }}>
            Connecting charities and communities to streamline donations
          </h1>
          <BulletPointList />
        </div>
      </div>
    </div>
  );
}
