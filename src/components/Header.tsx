
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-md py-3"
          : "bg-white py-5"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-primary text-xl font-bold">
            Yellow Mountain
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <NavLink to="/" active={isActive("/")}>
              Home
            </NavLink>
            <NavLink to="/solutions" active={isActive("/solutions")}>
              Solutions
            </NavLink>
            <NavLink to="/#about" active={false}>
              About
            </NavLink>
            <NavLink to="/#contact" active={false}>
              Contact
            </NavLink>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" className="px-4">
              Sign In
            </Button>
            <Button size="sm" className="px-4">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-gray-100 shadow-lg"
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            <MobileNavLink to="/" active={isActive("/")}>
              Home
            </MobileNavLink>
            <MobileNavLink to="/solutions" active={isActive("/solutions")}>
              Solutions
            </MobileNavLink>
            <MobileNavLink to="/#about" active={false}>
              About
            </MobileNavLink>
            <MobileNavLink to="/#contact" active={false}>
              Contact
            </MobileNavLink>

            <div className="pt-4 grid grid-cols-2 gap-3 border-t border-gray-100">
              <Button variant="outline" size="sm" className="w-full">
                Sign In
              </Button>
              <Button size="sm" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

// Navigation link component for desktop
const NavLink = ({ 
  children, 
  to, 
  active 
}: { 
  children: React.ReactNode; 
  to: string; 
  active: boolean;
}) => {
  return (
    <Link
      to={to}
      className={cn(
        "px-4 py-2 rounded-md text-sm font-medium transition-colors",
        active 
          ? "text-primary font-semibold" 
          : "text-gray-600 hover:text-primary hover:bg-gray-50"
      )}
    >
      {children}
    </Link>
  );
};

// Navigation link component for mobile
const MobileNavLink = ({ 
  children, 
  to, 
  active 
}: { 
  children: React.ReactNode; 
  to: string; 
  active: boolean;
}) => {
  return (
    <Link
      to={to}
      className={cn(
        "block px-4 py-2 rounded-md text-sm font-medium transition-all",
        active 
          ? "bg-primary/10 text-primary font-semibold" 
          : "text-gray-600 hover:bg-gray-50 hover:text-primary"
      )}
    >
      {children}
    </Link>
  );
};

export default Header;
