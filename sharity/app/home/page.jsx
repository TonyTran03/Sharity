import Image from "next/image";
import '../globals.css';
import Navbar from "../components/Navbar";

function SharityLogo() {
  return <img src={"Sharity.png"} alt="Sharity Logo"/>;
}

export function BulletPointList() {

  return (
    <div>
      <ul style={{ listStyleType: 'disc', paddingLeft: '30px' }}>
      <li style={{ marginBottom: '10px', paddingLeft: '10px' }}>
        <span style={{ fontWeight: 'bold', color: '#c77593' }}>Live Map:</span> see what donations charities need
      </li>

        <li style={{ marginBottom: '10px' , padding: '10px'}}>
          <span style={{ fontWeight: 'bold', color: '#c77593' }}>Track</span> your donations
        </li>

        <li style={{ marginBottom: '10px', padding: '10px'}}>
          <span style={{ fontWeight: 'bold', color: '#c77593' }}>Optimize Resources:</span> charities can see each other's stocks, helping them work better together</li>
      </ul>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Navbar />
        <div className="side-by-side">
          <SharityLogo />
          <div className="rectangle" style={{width: '400px', height: '400px'}}>
          <h1 style={{ fontSize: '20px', marginBottom: '20px', paddingTop:'50px', fontWeight:'bold',  color: '#c77593', padding: '20px'}}>Connecting charities and communities to streamline donations</h1>
          <BulletPointList/>
          </div>
        </div>
      </div>

  );
}
