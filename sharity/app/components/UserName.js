// components/UserName.js
import { useUser } from '@auth0/nextjs-auth0/client';

export default function UserName() {
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error: {error.message}
      </div>
    );
  }

  if (user) {
    return <span>{user.name}</span>;
  }

  return <a href="/api/auth/login">Login</a>;
}
