import "../globals.css";
import MatchingButton from "./MatchingButton";

function LoginPrompt() {
  return (
    <div className="m-4 w-full signup-prompt">
      <h3>Sign up or log in to get started.</h3>
      <MatchingButton link="/api/auth/login">Login</MatchingButton>     
    </div>
  )
}

export default LoginPrompt;