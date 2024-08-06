'use client'

import "./globals.css";
import LoginPrompt from "./components/LoginPrompt";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import Head from 'next/head';

import {createContext, useContext, useState, useEffect} from 'react';
import NewEntry from "./components/NewEntry";


function SharityLogo() {
  return <img src={"Sharity.png"} alt="Sharity Logo" />;
}
function Dashboard() {

  const handleClick = () => {
      

  }

  const { user, error, loading } = useUser();
  const router = useRouter();

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>{error.message}</h1>

  if (user){
    router.push("adobe");
  } 


  return (
    <div className="w-full dashboard">
      <Head> 
        <link rel="icon"/>
        
      </Head>
      <SharityLogo />
      <LoginPrompt />

    </div>
  );
}

export default Dashboard;