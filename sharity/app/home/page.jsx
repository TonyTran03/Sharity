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
        <div className="dashboard">
          <SharityLogo />
        </div>
      </div>

  );
}
