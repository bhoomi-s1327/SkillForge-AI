function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 flex items-center">

      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12">

        {/* Left */}

        <div className="text-white">

          <h1 className="text-6xl font-extrabold leading-tight">

            Build Your

            <br />

            Dream Career

            <br />

            With AI

          </h1>

          <p className="mt-8 text-xl text-blue-100">

            Learn DSA

            •

            Build Projects

            •

            Crack Interviews

            •

            AI Guidance

          </p>

          <div className="mt-10 flex gap-5">

            <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">

              Get Started

            </button>

            <button className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-700 transition">

              Explore

            </button>

          </div>

        </div>

        {/* Right */}

        <div className="hidden md:flex justify-center items-center">

          <div className="bg-white rounded-3xl shadow-2xl p-10 w-[420px]">

            <h2 className="text-3xl font-bold text-blue-700">

              AI Dashboard

            </h2>

            <div className="mt-8 space-y-4">

              <div className="bg-blue-100 p-4 rounded-xl">

                📄 Resume Score

                <br />

                <b>92%</b>

              </div>

              <div className="bg-green-100 p-4 rounded-xl">

                💻 DSA Progress

                <br />

                <b>145 Problems Solved</b>

              </div>

              <div className="bg-purple-100 p-4 rounded-xl">

                🤖 Mock Interview

                <br />

                <b>Ready</b>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;