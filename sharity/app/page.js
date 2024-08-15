'use client'

import "./globals.css";
import LoginPrompt from "./components/LoginPrompt";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import Head from 'next/head';

import {createContext, useContext, useState, useEffect} from 'react';
import NewEntry from "./components/NewEntry";

import { Box, Typography, Button } from "@mui/material";
import CharityCarousel from "./components/CharityCarousel";


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

  const { user, error, loading } = useUser();
  const router = useRouter();

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>{error.message}</h1>

  return (
    <div>
      
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '50vh', 
      padding: '20px', 
      flexDirection: 'column', // Allow content to stack vertically
      
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





        <BulletPointList />
      </Box>
      

    </Box>
    <CharityCarousel/>


    <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            width: '100%',
            height: '100vh',
            padding: '20px',
            background: 'linear-gradient(90deg, rgba(235,238,250,1) 0%, rgba(255,241,251,1) 50%, rgba(235,249,255,1) 100%)', // Add background if needed
            
           
          }}
    >



<Box sx={{ padding: '2rem', borderRadius: '8px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',  background: 'linear-gradient(90deg, rgba(235,238,250,1) 0%, rgba(255,241,251,1) 50%, rgba(235,249,255,1) 100%)',  paddingTop:'5rem' }}>
 
  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'start', justifyContent: { xs: '', md: 'space-between' }, height:'100vh',}}>
    
    {/*Box for text*/}
    <Box sx={{ 
      width: { xs: '100%', md: '45%' }, 
      animation: 'gradientAnimation 7s ease infinite', 
      backgroundSize: '200% 200%',
      background: 'linear-gradient(90deg, rgba(241,238,250,1) 0%, rgba(255,241,251,1) 50%, rgba(255,249,255,1) 100%)', 
      padding: '2rem',
      borderRadius: '8px', 
     }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#333' }}>
        Live Map
      </Typography>
      <Typography variant="h6" sx={{ marginTop: '1rem', color: '#666' }}>
        Make the search easier by using 'Donation Map'
      </Typography>
      <Typography variant="body1" sx={{ marginTop: '1rem', color: '#666' }}>
        View charities that are in demand for supplies
      </Typography>
    </Box>
    {/* Map Section */}
    <Box sx={{ width: { xs: '100%', md: '45%' }, backgroundColor: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'  }}>
      <img src="/mapPhoto.png" alt="Map" style={{ width: '100%', height: 'auto' }} />
    </Box>
  </Box>
</Box>







    </Box>
    </div>
  );
}

export default Home;