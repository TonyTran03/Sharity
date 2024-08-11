import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import AuthLayout from "./AuthLayout"; // Import the client-only wrapper

export const metadata = {
  title: "Sharity",
  description: "Give, Donate, Share to charities",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <AuthLayout>{children}</AuthLayout>
        </UserProvider>
      </body>
    </html>
  );
}
