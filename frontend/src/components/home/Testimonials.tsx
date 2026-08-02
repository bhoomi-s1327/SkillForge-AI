const testimonials = [
  {
    name: "Rahul",
    role: "Software Engineer",
    review:
      "SkillForge AI helped me improve my DSA skills and crack interviews.",
  },
  {
    name: "Ananya",
    role: "Student",
    review:
      "The AI Resume Analyzer gave me valuable feedback before placements.",
  },
  {
    name: "Kiran",
    role: "Full Stack Developer",
    review:
      "The GitHub Analyzer and Mock Interviews are amazing features.",
  },
];

function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center">
          What Users Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {testimonials.map((item) => (

            <div
              key={item.name}
              className="bg-white rounded-2xl shadow-lg p-8"
            >

              <p className="text-gray-600 italic">
                "{item.review}"
              </p>

              <h3 className="mt-6 font-bold text-xl">
                {item.name}
              </h3>

              <p className="text-blue-600">
                {item.role}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;