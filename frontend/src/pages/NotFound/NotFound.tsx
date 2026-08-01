import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>404</h1>

      <h2>Page Not Found</h2>

      <Link to="/">Go Home</Link>
    </div>
  );
}

export default NotFound;