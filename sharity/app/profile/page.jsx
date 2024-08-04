// app/profile/page.js
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

const Profile = ({ user }) => {
  return (
    <div>
      <img src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};

export const getServerSideProps = withPageAuthRequired();

export default Profile;
