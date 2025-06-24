const Faq = () => {
  const faqs = [
    {
      question: "What insurance plans do you accept?",
      answer:
        "We accept most major insurance plans including Medicare, Medicaid, Blue Cross Blue Shield, Aetna, and many others. Please contact our office to verify your specific coverage.",
    },
    {
      question: "How do I schedule an appointment?",
      answer:
        "You can schedule an appointment online through our website, call our office directly, or use our mobile app. We offer same-day appointments for urgent care needs.",
    },
    {
      question: "What should I bring to my first visit?",
      answer:
        "Please bring a valid ID, insurance card, list of current medications, and any relevant medical records from previous healthcare providers.",
    },
    {
      question: "Do you offer telemedicine services?",
      answer:
        "Yes, we offer virtual consultations for appropriate medical conditions. This allows you to receive quality care from the comfort of your home.",
    },
  ];
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services and policies
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
