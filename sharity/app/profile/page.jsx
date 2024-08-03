import Image from "next/image";
import '../globals.css';
import Navbar from "../components/Navbar";

function SharityLogo() {
  return <img src={"Sharity.png"} alt="Sharity Logo" />;
}

function Profile() {
  return (
    <div>
      <Navbar/>
      <div className="p-4 text-center">
        <h1>Hi There,</h1>
      </div>
      {/* <Navbar />
      <div className="p-4 text-right">
        <h1>Hi There,</h1>
      </div>
      <div className="flex justify-center p-4">
        <SharityLogo />
      </div> */}
    </div>
  );
}

export default Profile;
