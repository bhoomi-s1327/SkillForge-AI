import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 flex items-center">

      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-white font-semibold mb-3">
            🚀 AI Powered Career Platform
          </p>

          <h1 className="text-6xl font-extrabold text-white leading-tight">
            Build Your Dream Career
            <span className="block text-yellow-300">
              With AI
            </span>
          </h1>

          <p className="text-blue-100 mt-6 text-lg leading-8">
            Master DSA, improve your resume, practice AI mock interviews,
            and receive personalized career guidance—all in one place.
          </p>

          <div className="flex gap-4 mt-10">
            <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
              Get Started
            </button>

            <button className="border border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-700 transition">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8">

            <h2 className="text-2xl font-bold text-gray-800">
              📊 AI Dashboard
            </h2>

            <div className="space-y-5 mt-8">

              <div className="bg-blue-100 p-5 rounded-xl">
                📄 Resume Score
                <h3 className="text-3xl font-bold">92%</h3>
              </div>

              <div className="bg-green-100 p-5 rounded-xl">
                💻 DSA Progress
                <h3 className="text-3xl font-bold">145 / 450</h3>
              </div>

              <div className="bg-purple-100 p-5 rounded-xl">
                🤖 AI Interview
                <h3 className="text-3xl font-bold">Ready</h3>
              </div>

            </div>

          </div>
        </motion.div>

      </div>

    </section>
  );
}

export default Hero;