import { Link } from "react-router-dom";
import { FaRobot } from "react-icons/fa";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-blue-600"
        >
          <FaRobot className="text-3xl" />
          SkillForge AI
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <a href="#features" className="hover:text-blue-600 transition">Features</a>
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <Link to="/login">
            <button className="px-5 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition">
              Login
            </button>
          </Link>

          <Link to="/register">
            <button className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;