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

function Profile() {
  return (
    <div>
      <Navbar/>
      <div className="dashboard p-4">
      <h1 style={{ fontSize: '2rem', marginBottom: '20px', paddingTop:'30px'}}>Hi there, view your donations here</h1>
      <div className="rectangle">

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h1 style={{margin: '50px 50px 0', fontWeight: 'bold'}}>Date</h1>
        <h1 style={{margin: '50px 50px 0', fontWeight: 'bold'}}>Charity</h1>
        <h1 style={{margin: '50px 50px 0', fontWeight: 'bold'}}>Amount</h1>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h1 style={{ margin: '20px 20px 0' , paddingLeft:'15px'}}>July 1, 2024</h1>
        <h1 style={{ margin: '20px 30px 0' }}>Salvation Army</h1>
        <h1 style={{ margin: '20px 50px 0' }}>$100.00</h1>
      </div>
        <button className="navbar-button" style={{fontSize: '1rem', fontWeight: 'bold'}}>Receipt</button>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h1 style={{ margin: '20px 10px 0' , paddingLeft:'15px'}}>Aug 1, 2024</h1>
        <h1 style={{ margin: '20px 30px 0' }}>Canadian Red Cross</h1>
        <h1 style={{ margin: '20px 50px 0' }}>$100.00</h1>
      </div>
      <button className="navbar-button" style={{fontSize: '1rem', fontWeight: 'bold'}}>Receipt</button>

      </div>
      </div>
    </div>
  );
}

export default Profile;
