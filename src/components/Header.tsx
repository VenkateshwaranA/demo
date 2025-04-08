
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-md backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6">
        <Link
          to="/"
          className="animate-fade-in-left text-2xl font-bold tracking-tight"
        >
          <div className="flex items-center">
            <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
              <span className="text-xl font-bold">DS</span>
            </div>
            <span className="hidden sm:inline">Company Name</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-1 md:flex">
          {location.pathname !== "/" && (
            <Link
              to="/"
              className={`nav-link animate-fade-in ${
                isActive("/") ? "nav-link-active" : ""
              }`}
            >
              Home
            </Link>
          )}
          <Link
            to="/services"
            className={`nav-link animate-fade-in-delay-1 ${
              isActive("/services") ? "nav-link-active" : ""
            }`}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className={`nav-link animate-fade-in-delay-3 ${
              isActive("/contact") ? "nav-link-active" : ""
            }`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="animate-slide-in-top bg-white px-4 py-4 shadow-lg md:hidden">
          {location.pathname !== "/" && (
            <Link
              to="/"
              className="block py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          )}
          <Link
            to="/services"
            className="block py-2"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="block py-2"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
