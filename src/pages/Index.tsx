
import { Link } from "react-router-dom";
import { ArrowRight, PenSquare, ShoppingCart, UserCircle } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-pattern pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h1 className="animate-fade-in text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                All-in-One Digital Solution
              </h1>
              <p className="animate-fade-in-delay-1 mt-6 text-xl text-gray-600">
                One Website, Multiple Possibilities - We Bring Your Ideas to Life!
              </p>
              <p className="animate-fade-in-delay-2 mt-4 text-gray-600">
                At DIGITAL SOLUTION, we specialize in creating versatile digital platforms that adapt to your needs. 
                From engaging blogs to powerful e-commerce stores and professional portfolios - we build websites 
                that grow with your ambitions and connect you with your audience.
              </p>
              <div className="animate-fade-in-delay-3 mt-8 flex flex-wrap gap-4">
                {/* <Link to="/services" className="btn btn-primary">
                  Explore Our Services
                </Link> */}
                <Link to="/contact" className="btn btn-outline">
                  Get Started
                </Link>
              </div>
            </div>
            <div className="hidden animate-fade-in-right shadow-orange-400 md:block">
              <img 
                // src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                src="/assets/one.png" 
                alt="Digital Solutions" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="animate-fade-in heading-underline mx-auto inline-block text-3xl font-bold md:text-4xl">
              Our Services
            </h2>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard 
              title="Blog"
              description="Write, Inspire, and Share Motivational Thoughts"
              icon={<PenSquare className="h-7 w-7" />}
              href="/blog"
            />
            
            <ServiceCard 
              title="E-Commerce"
              description="Turn Your Passion into an Online Store"
              icon={<ShoppingCart className="h-7 w-7" />}
              href="/ecommerce"
            />
            
            <ServiceCard 
              title="Portfolio"
              description="Your Personal Brand, Professionally Designed"
              icon={<UserCircle className="h-7 w-7" />}
              href="/portfolio"
            />
          </div>
          
          {/* <div className="mt-12 text-center">
            <Link to="/services" className="btn btn-primary inline-flex items-center">
              Explore Our Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div> */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="animate-fade-in text-3xl font-bold md:text-4xl">
              Ready to Start Your Digital Journey?
            </h2>
            <p className="animate-fade-in-delay-1 mx-auto mt-4 max-w-2xl text-lg text-gray-200">
              <Link to="/contact" className="underline hover:text-accent">Contact us to build your Website</Link> and transform your online presence today.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
