import "../globals.css";
import MatchingButton from "./MatchingButton";

function LoginPrompt() {
  return (
    <div className="m-2 w-full signup-prompt">
      <h3>Sign up or log in to get started.</h3>
      <a href="/api/auth/login">Login</a>     
    </div>
  )
}

export default LoginPrompt;