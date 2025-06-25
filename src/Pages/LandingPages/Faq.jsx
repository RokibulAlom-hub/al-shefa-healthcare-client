import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "What insurance plans do you accept?",
      answer:
        "We accept most major insurance plans including Medicare, Medicaid, Blue Cross Blue Shield, Aetna, and others. Contact our office to verify your coverage.",
    },
    {
      question: "How do I schedule an appointment?",
      answer:
        "Schedule online via our website, call our office, or use our mobile app. Same-day appointments are available for urgent care.",
    },
    {
      question: "What should I bring to my first visit?",
      answer:
        "Bring a valid ID, insurance card, list of current medications, and any relevant medical records.",
    },
    {
      question: "Do you offer telemedicine services?",
      answer:
        "Yes, we provide virtual consultations for appropriate medical conditions, offering quality care from home.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 bg-section-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-text mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-secondary-text max-w-xl mx-auto">
            Find answers to common questions about our services and policies
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.length ? (
            faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="bg-card-bg rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
                role="article"
                aria-labelledby={`faq-${index}-question`}
              >
                <button
                  className="w-full flex justify-between items-center text-left"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-${index}-answer`}
                >
                  <h3
                    id={`faq-${index}-question`}
                    className="text-base sm:text-lg font-semibold text-primary-text"
                  >
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 text-secondary-text transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <p
                    id={`faq-${index}-answer`}
                    className="mt-3 text-sm text-secondary-text"
                  >
                    {faq.answer}
                  </p>
                )}
              </div>
            ))
          ) : (
            <p className="text-center text-secondary-text">
              No FAQs available
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Faq;