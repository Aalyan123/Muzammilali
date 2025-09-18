import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Navbar background based on scroll/page
  const isHome = location.pathname === "/";
  const navbarStyle = isHome
    ? isScrolled
      ? "bg-white shadow-md"
      : "bg-transparent"
    : "bg-white shadow-md";

  const textColor = "text-black";
  const hoverColor = "hover:text-blue-400";

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navbarStyle}`}
    >
      <div className="flex justify-between items-center px-6 md:px-28 py-4 relative">
        {/* Logo */}
        <Link to='/'>
        <h1
          className={`text-2xl font-bold transition-colors duration-300 ${textColor}`}
          style={{ fontFamily: "Poppins" }}
        >
          Muzammil Ali
        </h1>
        </Link>

        {/* Desktop Nav */}
        <ul
          className="hidden md:flex items-center gap-12"
          style={{ fontFamily: "Poppins" }}
        >
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`transition-colors duration-300 ${
                  location.pathname === link.path
                    ? "text-blue-500 font-semibold"
                    : textColor
                } ${hoverColor}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link to='/contact'>
            <button className="bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 font-semibold text-white px-6 py-2 rounded-3xl hover:scale-105 duration-200 hover:shadow-2xl shadow-gray-900">
              Let's Work Together
            </button>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className={`md:hidden text-3xl transition-colors duration-300 ${textColor}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white p-6 flex flex-col gap-4 rounded-b-xl shadow-md animate-slideDown md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`block w-full px-4 py-2 rounded-md text-center transition ${
                  location.pathname === link.path
                    ? "bg-blue-100 text-blue-600 font-semibold"
                    : "text-gray-800 hover:bg-gray-100"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Button at the bottom */}
            <button className="mt-4 w-full bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 font-semibold text-white py-3 rounded-xl hover:scale-105 duration-200 hover:shadow-2xl shadow-gray-300">
              Let's Work Together
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
