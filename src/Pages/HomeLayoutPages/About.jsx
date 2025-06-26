import { Heart, Target, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    { icon: Heart, title: "Compassion", description: "We care deeply for every patient." },
    { icon: Target, title: "Excellence", description: "Delivering top-quality healthcare." },
    { icon: Shield, title: "Integrity", description: "Upholding trust and ethics." },
    { icon: Users, title: "Community", description: "Serving with inclusivity." },
  ];

  return (
    <div className="bg-section-bg min-h-screen flex flex-col">
      <main className="flex-grow">
        <section className="py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-text mb-3">
              About HealthCare+
            </h1>
            <p className="text-base sm:text-lg text-secondary-text max-w-2xl mx-auto mb-8">
              Since 2010, HealthCare+ has been dedicated to providing exceptional medical services with compassion and innovation.
            </p>
          </div>
        </section>

        <section className="py-12 bg-card-bg">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-section-bg rounded-lg shadow-sm">
                <h2 className="text-lg sm:text-xl font-semibold text-primary-text mb-3">
                  Our Mission
                </h2>
                <p className="text-sm text-secondary-text">
                  To improve lives through accessible, high-quality healthcare delivered with care and respect.
                </p>
              </div>
              <div className="p-6 bg-section-bg rounded-lg shadow-sm">
                <h2 className="text-lg sm:text-xl font-semibold text-primary-text mb-3">
                  Our Vision
                </h2>
                <p className="text-sm text-secondary-text">
                  To be a trusted leader in healthcare, fostering healthier communities worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-text text-center mb-8">
              Our Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="p-5 bg-card-bg rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
                  role="article"
                  aria-labelledby={`${value.title}-title`}
                >
                  <div className="flex justify-center mb-3">
                    <value.icon className="h-8 w-8 text-primary-btn" aria-hidden="true" />
                  </div>
                  <h3
                    id={`${value.title}-title`}
                    className="text-base font-semibold text-primary-text mb-2"
                  >
                    {value.title}
                  </h3>
                  <p className="text-sm text-secondary-text">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-section-bg">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-text mb-3">
              Meet Our Team
            </h2>
            <p className="text-base sm:text-lg text-secondary-text max-w-2xl mx-auto mb-6">
              Our dedicated professionals are here to serve you. Learn more about our expert physicians.
            </p>
            <Link
              to="/ourDoctors"
              className="inline-block bg-primary-btn text-btn-text py-2 px-6 rounded hover:bg-hover transition"
            >
              Meet Our Doctors
            </Link>
          </div>
        </section>
      </main>
      
    </div>
  );
};

export default About;