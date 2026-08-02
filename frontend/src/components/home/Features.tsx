import {
  FaRobot,
  FaCode,
  FaFileAlt,
  FaGithub,
} from "react-icons/fa";

const features = [
  {
    icon: <FaFileAlt size={40} />,
    title: "AI Resume Analyzer",
    description:
      "Analyze your resume and get AI-powered suggestions.",
  },
  {
    icon: <FaCode size={40} />,
    title: "DSA Roadmap",
    description:
      "Follow a personalized roadmap and track your coding progress.",
  },
  {
    icon: <FaRobot size={40} />,
    title: "AI Mock Interview",
    description:
      "Practice interviews with AI and receive instant feedback.",
  },
  {
    icon: <FaGithub size={40} />,
    title: "GitHub Analyzer",
    description:
      "Analyze repositories and improve your developer profile.",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center">
          Powerful Features
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Everything you need to become placement ready.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div className="text-blue-600 mb-5">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="text-gray-600 mt-4">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;