import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from '@auth0/nextjs-auth0';
import Auth0ProviderWithHistory from './auth0-provider-with-history';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sharity",
  description: "Give, Donate, Share to charities",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
        <body><Auth0ProviderWithHistory>{children} </Auth0ProviderWithHistory></body>
      
    </html>
  );
}
