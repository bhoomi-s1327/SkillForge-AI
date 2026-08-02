const features = [
  {
    icon: "📄",
    title: "AI Resume Analyzer",
    desc: "Improve your resume with AI suggestions."
  },
  {
    icon: "💻",
    title: "DSA Roadmap",
    desc: "Track your coding journey."
  },
  {
    icon: "🤖",
    title: "Mock Interviews",
    desc: "Practice with AI Interviewer."
  },
  {
    icon: "📊",
    title: "GitHub Analyzer",
    desc: "Analyze repositories and coding skills."
  }
];

function Features() {
  return (
    <section
      id="features"
      className="py-24 bg-gray-100"
    >
      <h2 className="text-5xl font-bold text-center mb-14">
        Why SkillForge AI?
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {features.map((feature) => (

          <div
            key={feature.title}
            className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-3 hover:shadow-2xl transition"
          >
            <div className="text-5xl mb-5">
              {feature.icon}
            </div>

            <h3 className="text-2xl font-bold mb-3">
              {feature.title}
            </h3>

            <p className="text-gray-600">
              {feature.desc}
            </p>

          </div>

        ))}

      </div>
    </section>
  );
}

export default Features;