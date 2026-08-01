import { Link } from "react-router-dom";

function Login() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Login Page</h1>

      <input
        type="email"
        placeholder="Email"
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Password"
      />

      <br />
      <br />

      <button>Login</button>

      <br />
      <br />

      <Link to="/">Go Home</Link>
    </div>
  );
}

export default Login;