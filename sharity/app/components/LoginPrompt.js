import "../globals.css";


function LoginPrompt() {
  return (
    <div style={{ width: '100%', height: '35vh', backgroundColor: '#fbbfbc' }} className="flex items-center justify-center">
      <div className="text-center">

      <br />
      <h1 style={{ fontSize: '2rem' }}>Sign up or log in to get started!</h1>
      <button link="/api/auth/login">Login</button>
      </div>     
    </div>
  )
}

export default LoginPrompt;
