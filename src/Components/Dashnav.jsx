import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";
import { Menu, X } from "lucide-react";

const Dashnav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const { role, isLoading } = useRole(); // Assume useRole returns isLoading
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen((data) => !data);
  };

  const handleLogout = async () => {
    try {
      await logout();
      // Replace alert with a toast notification (e.g., react-toastify)
      // toast.success("Logged out successfully");
      console.log("Logged out successfully"); // Temporary placeholder
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      // toast.error("Logout failed");
      console.log("Logout failed"); // Temporary placeholder
    }
  };

  // Common NavLink styling with active state
  const navLinkClass = ({ isActive }) =>
    `text-base font-medium hover:text-primary transition-colors ${
      isActive ? "text-red-600 underline font-semibold" : "text-navbar-text"
    }`;

  // Navigation links by role (shared for desktop and mobile)
  const navLinks = {
    admin: [
      { to: "/dash/admin", label: "All Users" },
      { to: "/dash/doctors", label: "Doctors" },
      { to: "/dash/pharmacists", label: "Pharmacists" },
      { to: "/dash/appointments", label: "Appointments" },
      { to: "/dash/orders", label: "Orders" },
    ],
    doctor: [
      { to: "/dash/doctorAppoinments", label: "Records" },
      { to: "/dash/appointmentRecord", label: "Current Appointment" },
    ],
    patient: [
      { to: "/dash/patient", label: "My Appointments" },
      { to: "/dash/myorders", label: "Orders" },
    ],
    pharmacist: [
      { to: "/dash/orders", label: "Orders" },
      { to: "/dash/addmedicine", label: "Add Medicine" },
      { to: "/dash/medicine", label: "All Medicine" },
    ],
  };

  return (
    <nav className="bg-navbar-bg shadow-lg text-navbar-text">
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2">
            <div className="flex flex-col">
              <span className="text-xl font-bold">Al Shefa Healthcare</span>
              <span className="text-xs">Your Health Partner</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            {isLoading ? (
              <span className="text-sm">Loading...</span>
            ) : (
              navLinks[role]?.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={navLinkClass}
                  aria-current={({ isActive }) =>
                    isActive ? "page" : undefined
                  }
                >
                  {link.label}
                </NavLink>
              ))
            )}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user?.email ? (
              <button
                onClick={handleLogout}
                className="text-base font-medium text-red-600 hover:text-red-800 transition-colors"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="text-base font-medium hover:text-primary transition-colors"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden px-2 pt-2 pb-3 space-y-2 flex flex-col">
            <NavLink to="/" className={navLinkClass} onClick={toggleMenu}>
              Home
            </NavLink>
            {isLoading ? (
              <span className="text-sm">Loading...</span>
            ) : (
              navLinks[role]?.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={navLinkClass}
                  onClick={toggleMenu}
                  aria-current={({ isActive }) =>
                    isActive ? "page" : undefined
                  }
                >
                  {link.label}
                </NavLink>
              ))
            )}
            {user?.email ? (
              <button
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }}
                className="text-base font-medium text-red-600 hover:text-red-800 transition-colors text-left"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="text-base font-medium hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Login
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Dashnav;
