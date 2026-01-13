import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "../constants";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "py-4 glass-effect shadow-xl" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform bg-black/20">
              <img
                src="/assets/logo1.png"
                alt="DIGIXEA Logo"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>

            <span className="text-2xl font-bold tracking-tighter">DIGIXEA</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                  location.pathname === item.path
                    ? "text-cyan-400"
                    : "text-gray-400"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/book-demo"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-2.5 rounded-full text-sm font-bold hover:opacity-90 transition-opacity"
            >
              Book Demo
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-effect border-t border-white/10 p-6 flex flex-col gap-6 animate-fade-in-down">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-lg font-medium ${
                location.pathname === item.path
                  ? "text-cyan-400"
                  : "text-gray-300"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 rounded-xl text-center font-bold"
          >
            Book Demo
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
