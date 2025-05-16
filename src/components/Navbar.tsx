
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
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
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Investment Planning</Link>
                <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Wealth Management</Link>
                <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Retirement</Link>
              </div>
            </div>
            <Link to="/" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
              About
            </Link>
            <Link to="/" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
              Contact
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-3">
            <Link to="/user-login">
              <Button variant="outline">Client Login</Button>
            </Link>
            <Link to="/agent-login">
              <Button>Agent Login</Button>
            </Link>
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
            <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md">Home</Link>
            <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md">Solutions</Link>
            <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md">About</Link>
            <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md">Contact</Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4 space-x-2">
              <Link to="/user-login" className="w-full">
                <Button variant="outline" className="w-full justify-center">Client Login</Button>
              </Link>
              <Link to="/agent-login" className="w-full">
                <Button className="w-full justify-center">Agent Login</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
