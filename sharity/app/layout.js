import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export const metadata = {
  title: "Sharity",
  description: "Give, Donate, Share to charities",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <UserProvider> */}
        <body>{children}</body>
      {/* </UserProvider> */}
    </html>
  );
}
