"use client";
import Image from "next/image";
import '../globals.css';
import Navbar from "../components/Navbar";

import { useUser } from '@auth0/nextjs-auth0';


function SharityLogo() {
  return <img src={"Sharity.png"} alt="Sharity Logo" />;
}

export default function Home() {
  const { user, error, isLoading } = useUser();
  return (
    <div>
      <Navbar />
      <div className="dashboard">

        <h2>user.name</h2>
        <SharityLogo />
     
      </div>
    </div>
  );
}
