import { Heart, Shield, Users, Clock } from "lucide-react";

const Service = () => {
  const services = [
    { icon: Heart, title: "Cardiology", desc: "Comprehensive heart care and treatment" },
    { icon: Shield, title: "Emergency Care", desc: "24/7 emergency medical services" },
    { icon: Users, title: "Family Medicine", desc: "Complete family healthcare solutions" },
    { icon: Clock, title: "Preventive Care", desc: "Regular checkups and health screenings" },
  ];

  return (
    <section className="py-12 sm:py-16 bg-section-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-text mb-3">
            Our Medical Services
          </h2>
          <p className="text-base sm:text-lg text-secondary-text max-w-xl mx-auto">
            Comprehensive healthcare services designed to meet all your medical needs
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.length ? (
            services.map((service) => (
              <div
                key={service.title}
                className="bg-card-bg rounded-xl p-6 hover:shadow-lg transition-shadow group"
                role="article"
                aria-labelledby={`${service.title}-title`}
              >
                <div className="bg-section-bg rounded-full p-3 w-fit mx-auto mb-4 group-hover:bg-primary-btn transition-colors">
                  <service.icon
                    className="h-6 w-6 text-primary-btn group-hover:text-btn-text"
                    aria-hidden="true"
                  />
                </div>
                <h3
                  id={`${service.title}-title`}
                  className="text-lg font-semibold text-primary-text text-center mb-2"
                >
                  {service.title}
                </h3>
                <p className="text-secondary-text text-center text-sm">
                  {service.desc}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-secondary-text col-span-full">
              No services available
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Service;