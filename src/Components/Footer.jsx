import { Heart, Users, Phone, Mail, MapPin } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Heart className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">HealthCare+</span>
            </div>
            <p className="text-gray-400 mb-6">
              Providing exceptional healthcare services with compassion and
              excellence since 2010.
            </p>
            <div className="flex space-x-4">
              <div className="bg-blue-600 p-2 rounded-full">
                <Heart className="h-5 w-5" />
              </div>
              <div className="bg-blue-600 p-2 rounded-full">
                <Users className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Doctors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Appointments
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Emergency Care
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Cardiology
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Family Medicine
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Preventive Care
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-blue-400" />
                <span>info@healthcare.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-blue-400" />
                <span>123 Medical Center Dr.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 HealthCare+. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
