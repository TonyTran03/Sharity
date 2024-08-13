'use client'

import "./globals.css";
import LoginPrompt from "./components/LoginPrompt";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import Head from 'next/head';

import {createContext, useContext, useState, useEffect} from 'react';
import NewEntry from "./components/NewEntry";

import { Box, Typography, Button } from "@mui/material";


function SharityLogo() {
  return <img src={"Sharity.png"} alt="Sharity Logo" style={{ maxWidth: '100%', height: 'auto' }} />;
}

export function BulletPointList() {
  const bulletPointStyle = {
    marginBottom: '10px',
    fontSize: '18px',
  };

  return (
    <div>
      <ul style={{  paddingLeft: '20px' }}>
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



function Home() {


  const { user, error, loading } = useUser();
  const router = useRouter();

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>{error.message}</h1>

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center', // Centers the Box horizontally
      alignItems: 'center', // Centers the Box vertically (optional)
      minHeight: '50vh', // Optional: Ensures the content is vertically centered on the full viewport height
      padding: '20px', // Adds some padding around the content
      }}>

      <Box sx={{ maxWidth: '100vw', textAlign: 'center' }}>
        <Typography
          variant="h1"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '4rem', sm: '4.5rem', md: '5rem' },
            lineHeight: 1.2,
            margin: '20px 0',
            alignContent: 'center'
          }}
        >
          Connecting charities to{' '}
          <span style={{       
            background: 'linear-gradient(100deg, rgba(255,178,193,1) 0%, rgba(255,198,248,1) 40%, rgba(255,178,193,1) 100%)',
            backgroundSize: '200% 200%',
            animation: 'gradientAnimation 10s ease infinite',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold',

            }}><br /> streamline donations</span>
        </Typography>


        <style jsx>{`
          @keyframes gradientAnimation {
            0% {
              background-position: 100% 0%;
            }
            50% {
              background-position: 0% 100%;
            }
            100% {
              background-position: 100% 0%;
            }
          }
`}</style>


        <BulletPointList />
      </Box>
    </Box>
  );
}

export default Home;