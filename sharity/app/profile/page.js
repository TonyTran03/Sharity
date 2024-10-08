"use client"
import Image from "next/image";
import '../globals.css';

import { useUser } from '@auth0/nextjs-auth0/client'
import UserName from "@/components/UserName";
import NewEntry from "@/components/NewEntry";



function SharityLogo() {
  return <img src={"Sharity.png"} alt="Sharity Logo" />;
}

function Rectangle() {
  return (
    <div className = "dashboard">
      <div className = "rectangle"></div>
    </div>
  );
};


// need to pass in objects
export function Info({s1, s2, s3}) {
  return (
  <div style={{ display: 'flex', alignItems: 'center' }}>
        <h1 style={{margin: '50px 50px 0', fontWeight: 'bold'}}>{s1}</h1>
        <h1 style={{margin: '50px 50px 0', fontWeight: 'bold'}}>{s2}</h1>
        <h1 style={{margin: '50px 50px 0', fontWeight: 'bold'}}>{s3}</h1>
  </div>
  )
}

function Profile() {


  const {user, error} = useUser();
  if(error) return <div>{error.message}</div>;

  return (
    <div className = "full-height">


     
      <div className="dashboard">
    
      <div className="rectangle">
      
      <div>
        <Info s1="Date" s2 = "Charity" s3="Donation"/>
      </div>

      <div>
        <Info s1="July 1, 2024" s2 = "Salvation Army" s3="$100.00"/>
      </div>


      

      <div>
        <Info s1="Aug 1, 2024" s2 = "Canadian Red Cross" s3="1 kg canned food"/>
      </div>


      </div>
      </div>
    </div>
  );
}

export default Profile;
