
import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { GlobalProvider } from './context/GlobalContext'; // Adjusted import path

export const metadata = {
  title: "Sharity",
  description: "Give, Donate, Share to charities",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GlobalProvider>
        <UserProvider>
          <body>{children}</body>
        </UserProvider>
      </GlobalProvider>
    </html>
  );
}
