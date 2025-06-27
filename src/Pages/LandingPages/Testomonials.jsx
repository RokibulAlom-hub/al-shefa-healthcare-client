import { Star } from "lucide-react";
import Marquee from "react-fast-marquee";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      text: "The care I received was exceptional. The staff was professional, caring, and made me feel comfortable throughout my treatment.",
      rating: 5,
      role: "Patient",
    },
    {
      name: "John Roberts",
      text: "Outstanding medical services! The doctors are knowledgeable and the facilities are top-notch. Highly recommend!",
      rating: 5,
      role: "Patient",
    },
    {
      name: "Maria Garcia",
      text: "Quick response time and excellent emergency care. They truly saved my life. Forever grateful to this amazing team.",
      rating: 5,
      role: "Emergency Patient",
    },
    {
      name: "David Lee",
      text: "The cardiology team was phenomenal. They explained everything clearly and supported me every step of the way.",
      rating: 4,
      role: "Cardiology Patient",
    },
    {
      name: "Emma Brown",
      text: "Amazing family medicine services. My whole family feels confident in the care we receive here.",
      rating: 5,
      role: "Family Medicine Patient",
    },
    {
      name: "Ahmed Khan",
      text: "The preventive care program helped me stay on top of my health. Highly professional and caring staff!",
      rating: 4,
      role: "Patient",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-section-bg overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-text mb-3">
            What Our Patients Say
          </h2>
          <p className="text-base sm:text-lg text-secondary-text max-w-xl mx-auto">
            Read testimonials from our satisfied patients who trust us with their health
          </p>
        </div>
        <Marquee pauseOnHover gradient={false} speed={40} aria-label="Patient testimonials">
          {testimonials.map((testimonial, idx) => (
            <div
              key={`${testimonial.name}-${idx}`}
              className="w-[250px] bg-card-bg rounded-xl p-5 shadow-md transition-shadow mx-3"
              role="article"
              aria-labelledby={`${testimonial.name}-title`}
            >
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-primary-btn fill-current"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="text-secondary-text text-sm italic mb-3 line-clamp-3">
                "{testimonial.text}"
              </p>
              <div>
                <h4
                  id={`${testimonial.name}-title`}
                  className="text-base font-semibold text-primary-text"
                >
                  {testimonial.name}
                </h4>
                <p className="text-link text-xs">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Testimonials;