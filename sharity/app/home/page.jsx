import Image from "next/image";
import '../globals.css';
import Navbar from "../components/Navbar";

function SharityLogo() {
  return <img src={"Sharity.png"} alt="Sharity Logo" />;
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f0f4f8]">
      <Navbar />
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Sharity</h1>
          <SharityLogo />
        </div>
      </main>
    </div>

  );
}
