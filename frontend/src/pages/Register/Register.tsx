import { Link } from "react-router-dom";

function Register() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Register Page</h1>

      <input
        type="text"
        placeholder="Full Name"
      />

      <br />
      <br />

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

      <button>Register</button>

      <br />
      <br />

      <Link to="/">Go Home</Link>
    </div>
  );
}

export default Register;