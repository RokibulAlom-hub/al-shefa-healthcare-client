import  { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const HealthcareNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg border-b-2 border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mother div or container of desktop navigation menu */}
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2">
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-800">
                Al Shefa Healtcare
              </span>
              <span className="text-xs text-gray-500 text-center">
                Your Health Partner
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink>Home</NavLink>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">Login</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 ">
              {isOpen ? "not open" : "open"}
            </button>
          </div>
        </div>

        {/*Mother div or container of Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <NavLink>Home</NavLink>

              {/* Mobile CTA Buttons */}
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <Link to="/login">Login</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default HealthcareNavbar;
