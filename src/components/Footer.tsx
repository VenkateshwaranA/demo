
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="animate-fade-in">
            <h3 className="mb-4 text-lg font-bold">DigiSpark</h3>
            <p className="text-sm text-gray-300">
              One Website, Multiple Possibilities - We Bring Your Ideas to Life! Your partner for creating stunning digital experiences.
            </p>
          </div>
          <div className="animate-fade-in-delay-1">
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-accent">Home</Link></li>
              <li><Link to="/services" className="hover:text-accent">Services</Link></li>
              <li><Link to="/blog" className="hover:text-accent">Blog</Link></li>
              <li><Link to="/ecommerce" className="hover:text-accent">E-Commerce</Link></li>
              <li><Link to="/portfolio" className="hover:text-accent">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-accent">Contact Us</Link></li>
            </ul>
          </div>
          <div className="animate-fade-in-delay-2">
            <h3 className="mb-4 text-lg font-bold">Contact</h3>
            <address className="not-italic text-sm text-gray-300">
              <p>123 Digital Drive</p>
              <p>Web City, WC 12345</p>
              <p className="mt-2">Phone: (555) 123-4567</p>
              <p>Email: hello@digispark.com</p>
            </address>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-light pt-8 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} DigiSpark. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
