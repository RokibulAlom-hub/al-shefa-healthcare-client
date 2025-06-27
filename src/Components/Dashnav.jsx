import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";
import { Heart, Menu, X } from "lucide-react";

const Dashnav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const { role, isLoading } = useRole();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen((data) => !data);
  };

  const handleLogout = async () => {
    try {
      await logout();
      console.log("Logged out successfully");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      console.log("Logout failed");
    }
  };

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive ? "text-link underline" : "text-navbar-text"
    } hover:text-hover`;

  const navLinks = {
    admin: [
      { to: "/dash/admin", label: "All Users" },
      { to: "/dash/doctors", label: "Doctors" },
      { to: "/dash/pharmacists", label: "Pharmacists" },
      { to: "/dash/appoinments", label: "Appointments" },
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
    <nav className="sticky top-0 bg-white/80 backdrop-blur-md shadow-md border-b border-gray-200 z-50 text-black">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex justify-center items-center">
            <Heart className="h-6 w-6 text-primary-btn mr-2" />
            <h2 className="text-xl font-bold">HealthCare+</h2>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
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
                  aria-current={({ isActive }) => (isActive ? "page" : undefined)}
                >
                  {link.label}
                </NavLink>
              ))
            )}
            {user?.email ? (
              <button
                onClick={handleLogout}
                className="text-sm font-medium text-error hover:text-hover transition-colors"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="text-sm font-medium text-success hover:text-hover transition-colors"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-navbar-text focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-navbar-bg py-2">
            <NavLink to="/" className={`${navLinkClass} block px-3 py-2 text-sm`} onClick={toggleMenu}>
              Home
            </NavLink>
            {isLoading ? (
              <span className="text-sm block px-3 py-2">Loading...</span>
            ) : (
              navLinks[role]?.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={`${navLinkClass} block px-3 py-2 text-sm`}
                  onClick={toggleMenu}
                  aria-current={({ isActive }) => (isActive ? "page" : undefined)}
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
                className="block px-3 py-2 text-sm font-medium text-error hover:text-hover w-full text-left"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="block px-3 py-2 text-sm font-medium text-success hover:text-hover"
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