function Stats() {
  const stats = [
    { number: "10K+", label: "Students" },
    { number: "500+", label: "Companies" },
    { number: "95%", label: "Placement Success" },
    { number: "24/7", label: "AI Mentor" },
  ];

  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

        {stats.map((item) => (
          <div key={item.label}>
            <h2 className="text-5xl font-bold">
              {item.number}
            </h2>

            <p className="mt-3 text-lg">
              {item.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Stats;