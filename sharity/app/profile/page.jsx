import Image from "next/image";
import '../globals.css';
import Navbar from "../components/Navbar";

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

function Button() {
  return (
    <button className="navbar-button" style={{fontSize: '1rem', fontWeight: 'bold'}}>Receipt</button>
  )
}

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
  return (
    <div>
      <Navbar/>
      <div className="dashboard p-4">
      <h1 style={{ fontSize: '2rem', marginBottom: '20px', paddingTop:'30px'}}>Hi _______, view your donations here</h1>
      <div className="rectangle">
      
      <div>
        <Info s1="Date" s2 = "Charity" s3="Donation"/>
      </div>

      <div>
        <Info s1="July 1, 2024" s2 = "Salvation Army" s3="$100.00"/>
      </div>

      <Button/>

      <div>
        <Info s1="Aug 1, 2024" s2 = "Canadian Red Cross" s3="1 kg canned food"/>
      </div>

      <Button/>

      </div>
      </div>
    </div>
  );
}

export default Profile;
