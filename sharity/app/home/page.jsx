import Image from "next/image";
import '../globals.css';
import Navbar from "../components/Navbar";

function SharityLogo() {
  return <img src={"Sharity.png"} alt="Sharity Logo"/>;
}

export default function Home() {
  return (
    <div>
      <Navbar />
        <div className="side-by-side">
          <SharityLogo />
          <div className="rectangle" style={{width: '400px', height: '400px'}}>
          <h1 style={{ fontSize: '20px', marginBottom: '20px', paddingTop:'60px', fontWeight:'bold'}}>Connecting charities and communities</h1>
          </div>
        </div>
      </div>

  );
}
