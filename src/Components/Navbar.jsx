import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const HealthcareNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  //logut function
  const handleLogout = () => {
    logout().then((res) => {
      // console.log(res);
      alert("logout successfully");
      navigate("/login");
    });
  };
  // console.log(user);

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
            <NavLink to="/">Home</NavLink>
            <NavLink to="/dash">Dashboard</NavLink>
            <NavLink to="/ourDoctors">Doctors</NavLink>
            <NavLink to="/medicinestore">MedicineStore</NavLink>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user?.email ? (
              <button
                onClick={handleLogout}
                className="hidden md:flex items-center space-x-4"
              >
                Logout
              </button>
            ) : (
              <Link to="/login">Login</Link>
            )}
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
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t grid grid-cols-1">
              <NavLink to="/dashboard">Dashboard</NavLink>

              {/* Mobile CTA Buttons */}
              {user?.email ? (
                <button onClick={handleLogout} className="md:hidden  space-x-4">
                  Logout
                </button>
              ) : (
                <div className="pt-4 border-t border-gray-200 space-y-2">
                  <Link to="/login">Login</Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default HealthcareNavbar;
