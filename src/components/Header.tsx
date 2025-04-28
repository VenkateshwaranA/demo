
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart, BookOpen, Briefcase, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

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
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled
        ? "bg-white/90 shadow-md backdrop-blur-sm"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6 ">
        <Link
          to="/"
          className="animate-fade-in-left text-2xl font-bold tracking-tight"
        >
          <div className="flex items-center">
            <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
              <span className="text-xl font-bold">DS</span>
            </div>
            {/* <span className="hidden sm:inline">DIGITAL SOLUTION</span> */}
            <span className="block text-base md:text-2xl">DIGITAL SOLUTION</span>
            {/* <span className="hidden md:block text-xs text-gray-500 ml-2">
          this is demo-sit back and explore
        </span> */}
          </div>
        </Link>
       
        {/* Desktop Navigation with Hover Dropdown */}
        <nav className="hidden space-x-1 md:flex">
          {location.pathname !== "/" && (
            <Link
              to="/"
              className={`nav-link animate-fade-in ${isActive("/") ? "nav-link-active" : ""
                }`}
            >
              Home
            </Link>
          )}

          <div
            className="relative"
            onClick={() => setIsServicesOpen(!isServicesOpen)}
          // onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              className={`nav-link animate-fade-in-delay-1 flex items-center ${isActive("/services") ? "nav-link-active" : ""
                }`}
            >
              Services
              <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200"
                style={{ transform: isServicesOpen ? 'rotate(180deg)' : 'rotate(0)' }}
              />
            </button>
            {isServicesOpen && (
              <div className="absolute left-0 mt-1 min-w-[180px] rounded-md  bg-white py-2 shadow-lg">
                <Link
                  to="/blog"
                  className="flex w-full items-center gap-2 px-4 py-2 hover:text-white hover:bg-primary"
                >
                  <BookOpen className="h-4 w-4" />
                  <span>Blog</span>
                </Link>
                <Link
                  to="/ecommerce"
                  className="flex w-full items-center gap-2 px-4 py-2 hover:text-white hover:bg-primary"
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span>E-Commerce</span>
                </Link>
                <Link
                  to="/portfolio"
                  className="flex w-full items-center gap-2 px-4 py-2 hover:text-white hover:bg-primary"
                >
                  <Briefcase className="h-4 w-4" />
                  <span>Portfolio</span>
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className={`nav-link animate-fade-in-delay-3 ${isActive("/contact") ? "nav-link-active" : ""
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
            to="/blog"
            className="ml-4 block py-2"
            onClick={() => setIsOpen(false)}
          >
            - Blog
          </Link>
          <Link
            to="/portfolio"
            className="ml-4 block py-2"
            onClick={() => setIsOpen(false)}
          >
            - Portfolio
          </Link>
          <Link
            to="/ecommerce"
            className="ml-4 block py-2"
            onClick={() => setIsOpen(false)}
          >
            - E-Commerce
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
