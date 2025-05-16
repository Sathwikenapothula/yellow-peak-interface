
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to close mobile menu when a link is clicked
  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 shadow-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-primary text-2xl font-bold">Yellow Mountain</h1>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-6">
            <Link to="/" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                Solutions <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">All Solutions</Link>
                <Link to="/solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Business Solutions</Link>
                <Link to="/solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">IT Solutions</Link>
                <Link to="/solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Products</Link>
              </div>
            </div>
            <a href="/#about" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
              About
            </a>
            <a href="/#contact" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
              Contact
            </a>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-3">
            <div className="relative group">
              <Button variant="outline" className="flex items-center gap-1">
                Client Area <ChevronDown className="h-4 w-4" />
              </Button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link to="/user-login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Login</Link>
                <Link to="/user-signup" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Create Account</Link>
              </div>
            </div>
            <div className="relative group">
              <Button className="flex items-center gap-1">
                Agent Portal <ChevronDown className="h-4 w-4" />
              </Button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link to="/agent-login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Login</Link>
                <Link to="/agent-signup" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Create Account</Link>
              </div>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={handleMobileLinkClick} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md">Home</Link>
            <Link to="/solutions" onClick={handleMobileLinkClick} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md">Solutions</Link>
            <a href="/#about" onClick={handleMobileLinkClick} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md">About</a>
            <a href="/#contact" onClick={handleMobileLinkClick} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md">Contact</a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="grid grid-cols-2 gap-4 px-4">
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-500">Clients</p>
                <Link to="/user-login" onClick={handleMobileLinkClick} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md">Login</Link>
                <Link to="/user-signup" onClick={handleMobileLinkClick} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md">Sign Up</Link>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-500">Agents</p>
                <Link to="/agent-login" onClick={handleMobileLinkClick} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md">Login</Link>
                <Link to="/agent-signup" onClick={handleMobileLinkClick} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md">Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
