'use client'
import React from 'react';
import { useUser } from "@auth0/nextjs-auth0/client";
import Nav from "./components/Nav";
import LandingNav from "./components/LandingNav";



function Preloader() {
  return (
    <div id="preloader" className="hidden">
      <img
        src="/lHeart.svg"
        alt="Heart 1"
        className="heart-large"
        style={{
          margin: '10px 0',
          width: '100px',
          animation: 'heartPulse 2s infinite',
      }}
    />


      <style jsx>{`
        #preloader {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 9999; /* Ensures the preloader is on top */
          visibility: hidden; /* Start hidden */
        }

        #preloader.visible {
          visibility: visible; /* Make visible when ready */
        }

        @keyframes heartPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  );
}

export default function AuthLayout({ children }) {
  const { user, isLoading } = useUser();

  React.useEffect(() => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      preloader.classList.add('visible');
    }
  }, []);

  if (isLoading) return <Preloader />;

  return (
    <>
      {user ? <Nav /> : <LandingNav/>}
      {children}
    </>
  );
}
