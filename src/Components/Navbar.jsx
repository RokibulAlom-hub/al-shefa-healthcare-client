import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { Menu, X } from "lucide-react";

const HealthcareNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = async () => {
    try {
      await logout();
     alert.success("Logged out successfully");
      navigate("/login");
      setIsOpen(false);
    } catch (error) {
      alert.error("Logout failed");
    }
  };

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive ? "text-link underline" : "text-navbar-text"
    } hover:text-hover`;

  const links = [
    { to: "/", label: "Home" },
    ...(user?.email ? [{ to: "/dash", label: "Dashboard" }] : []),
    { to: "/ourDoctors", label: "Doctors" },
    { to: "/medicinestore", label: "Medicine Store" },
  ];

  return (
    <nav className="bg-navbar-bg shadow-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex flex-col">
            <span className="text-lg font-bold text-primary-text">Al Shefa Healthcare</span>
            <span className="text-xs text-secondary-text">Your Health Partner</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={navLinkClass}
                aria-current={({ isActive }) => (isActive ? "page" : undefined)}
              >
                {link.label}
              </NavLink>
            ))}
            {user?.email ? (
              <button
                onClick={handleLogout}
                className="text-sm font-medium text-error hover:text-hover transition-colors"
              >
                Logout
              </button>
            ) : (
              <Link to="/login" className="text-sm font-medium text-link hover:text-hover transition-colors">
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
           <Menu/>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-navbar-bg py-2">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={`${navLinkClass} block px-3 py-2 text-sm`}
                onClick={toggleMenu}
                aria-current={({ isActive }) => (isActive ? "page" : undefined)}
              >
                {link.label}
              </NavLink>
            ))}
            {user?.email ? (
              <button
                onClick={handleLogout}
                className="block px-3 py-2 text-sm font-medium text-error hover:text-hover w-full text-left"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="block px-3 py-2 text-sm font-medium text-link hover:text-hover"
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

export default HealthcareNavbar;