const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Infosys",
  "TCS",
  "Wipro",
];

function Trusted() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-center text-2xl font-semibold text-gray-600">
          Trusted by Students Preparing for
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mt-10">

          {companies.map((company) => (
            <div
              key={company}
              className="bg-gray-100 rounded-xl py-6 text-center font-bold text-gray-700 hover:bg-blue-100 transition"
            >
              {company}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Trusted;