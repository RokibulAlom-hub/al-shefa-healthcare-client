import { Heart, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/ourDoctors", label: "Doctors" },
    { to: "/appointments", label: "Appointments" },
  ];
  const contactInfo = [
    { icon: Phone, value: "+1 (555) 123-4567" },
    { icon: Mail, value: "info@healthcare.com" },
    { icon: MapPin, value: "123 Medical Center Dr, HC 12345" },
  ];

  return (
    <footer className="bg-navbar-bg py-8 text-primary-text border-t border-primary-btn">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="flex items-center mb-3">
              <Heart className="h-6 w-6 text-primary-btn mr-2" aria-hidden="true" />
              <span className="text-xl font-bold">HealthCare+</span>
            </div>
            <p className="text-sm text-secondary-text">
              Exceptional healthcare since 2010.
            </p>
          </div>
          <nav>
            <h3 className="text-sm font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-secondary-text">
              {links.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-link transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <address className="not-italic">
            <h3 className="text-sm font-semibold mb-3">Contact Info</h3>
            <div className="space-y-2 text-sm text-secondary-text">
              {contactInfo.map((item) => (
                <div key={item.value} className="flex items-center">
                  <item.icon className="h-4 w-4 text-primary-btn mr-2" aria-hidden="true" />
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </address>
        </div>
        <div className="border-t border-border mt-6 pt-4 text-center text-sm text-secondary-text">
          © 2025 HealthCare+. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;