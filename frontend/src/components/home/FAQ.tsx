const faqs = [
  {
    question: "Is SkillForge AI free?",
    answer: "Yes. You can start using the basic features for free.",
  },
  {
    question: "Can I track my DSA progress?",
    answer: "Yes. Your dashboard will show solved problems and progress.",
  },
  {
    question: "Does it provide AI mock interviews?",
    answer: "Yes. AI will ask questions and give instant feedback.",
  },
];

function FAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">

          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="border rounded-xl p-6"
            >
              <h3 className="font-bold text-lg">
                {faq.question}
              </h3>

              <p className="text-gray-600 mt-2">
                {faq.answer}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;