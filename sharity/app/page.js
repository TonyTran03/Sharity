'use client'

import "./index.css";
import LoginPrompt from "./components/LoginPrompt";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";

function Dashboard() {

  const { user, error, loading } = useUser();
  const router = useRouter();

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>{error.message}</h1>

  if (user) router.push("home");

  return (
    <div className="w-full dashboard">

      <LoginPrompt />
    </div>
  );
}

export default Dashboard;
