"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import Nav from "./components/Nav";

export default function AuthLayout({ children }) {
  const { user, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      {user && <Nav />}
      {children}
    </>
  );
}
