import { Heart, Shield, Users, Clock } from "lucide-react";
const Service = () => {
  const services = [
    {
      icon: Heart,
      title: "Cardiology",
      desc: "Comprehensive heart care and treatment",
    },
    {
      icon: Shield,
      title: "Emergency Care",
      desc: "24/7 emergency medical services",
    },
    {
      icon: Users,
      title: "Family Medicine",
      desc: "Complete family healthcare solutions",
    },
    {
      icon: Clock,
      title: "Preventive Care",
      desc: "Regular checkups and health screenings",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Medical Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive healthcare services designed to meet all your medical
            needs
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow group"
            >
              <div className="bg-blue-100 rounded-full p-4 w-fit mx-auto mb-6 group-hover:bg-blue-600 transition">
                <service.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
