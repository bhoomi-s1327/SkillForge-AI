import { Link } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";

function Register() {
  return (
    <AuthLayout
      title="Create Account"
      subtitle="Start your AI learning journey"
    >
      <form className="space-y-5">

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border rounded-lg px-4 py-3"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-lg px-4 py-3"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-lg px-4 py-3"
        />

        <button
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
        >
          Create Account
        </button>

        <p className="text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-semibold"
          >
            Login
          </Link>
        </p>

      </form>
    </AuthLayout>
  );
}

export default Register;