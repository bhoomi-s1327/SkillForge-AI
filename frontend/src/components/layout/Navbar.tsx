import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-lg shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold text-blue-600"
        >
          🚀 SkillForge AI
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">

          <a href="#features" className="hover:text-blue-600 duration-300">
            Features
          </a>

          <a href="#about" className="hover:text-blue-600 duration-300">
            About
          </a>

          <a href="#contact" className="hover:text-blue-600 duration-300">
            Contact
          </a>

        </nav>

        {/* Buttons */}
        <div className="flex gap-4">

          <Link to="/login">
            <button className="px-5 py-2 rounded-lg text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white transition">
              Login
            </button>
          </Link>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;