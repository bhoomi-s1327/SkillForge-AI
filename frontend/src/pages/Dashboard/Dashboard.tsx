import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Dashboard</h1>

      <h3>Welcome Bhoomi 👋</h3>

      <p>This is your future AI Dashboard.</p>

      <Link to="/">Go Home</Link>
    </div>
  );
}

export default Dashboard;