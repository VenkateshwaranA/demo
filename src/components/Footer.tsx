
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation()
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 ">
          <div className="animate-fade-in">
            <h3 className="mb-4 text-lg font-bold">DIGITAL SOLUTION</h3>
            <p className="text-sm text-gray-300">
              One Website, Multiple Possibilities - We Bring Your Ideas to Life! Your partner for creating stunning digital experiences.
            </p>
          </div>
          <div className="animate-fade-in-delay-1  md:pl-24 ">
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {location.pathname !== "/" ? <li><Link to="/" onClick={scrollToTop} className="hover:text-accent">Home</Link></li> : ""}
              <li><Link to="/blog" onClick={scrollToTop} className="hover:text-accent">Blog</Link></li>
              <li><Link to="/ecommerce" onClick={scrollToTop} className="hover:text-accent">E-commerce</Link></li>
              <li><Link to="/portfolio" onClick={scrollToTop} className="hover:text-accent">Portfolio</Link></li>
              <li><Link to="/contact" onClick={scrollToTop} className="hover:text-accent">Contact Us</Link></li>
            </ul>
          </div>
          <div className="animate-fade-in-delay-2">
            <h3 className="mb-4 text-lg font-bold">Contact Us</h3>
            <address className="not-italic text-sm text-gray-300">
              <p>aaaa, xyz</p>
              <p>aaaa, xyz</p>
              {/* <p className="mt-2">Phone: (555) 123-4567</p> */}
              {/* <p>Email: exmp@DIGITAL SOLUTION.com</p> */}
            </address>
          </div>
        </div>
        <div className="mt-8 -mb-10 border-t border-primary-light pt-5 text-center text-sm text-gray-300">
          <p>This is a Sample demo Website for your information</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
