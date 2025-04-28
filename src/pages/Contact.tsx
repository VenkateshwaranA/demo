
import { useState, FormEvent, ChangeEvent } from "react";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear errors when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      toast.success("Thank you for your message! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-700 to-secondary text-white pt-32 pb-16 md:pt-40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="animate-fade-in text-4xl font-bold md:text-5xl lg:text-6xl">
              Let's Discuss Your Website
            </h1>
            <p className="animate-fade-in-delay-1 mx-auto mt-4 max-w-2xl text-xl text-gray-100">
              Reach Out & Let's Build Something Amazing Together!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact Info */}
            <div>
              <div className="animate-fade-in mb-8">
                <h2 className="heading-underline mb-6 text-2xl font-bold">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mr-3 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-light/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="mt-1 text-gray-600">
                        123 aaa area, yyy City, zzzz
                      </p>
                    </div>
                  </div>

                  {/* <div className="flex items-start">
                    <div className="mr-3 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-light/10 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="mt-1 text-gray-600">
                        (555) 123-4567
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-3 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-light/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="mt-1 text-gray-600">
                        hello@DIGITAL SOLUTION.com
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>

              {/* Social Media */}
              <div className="animate-fade-in-delay-1">
                <h2 className="heading-underline mb-6 text-2xl font-bold">
                  Connect With Us
                </h2>
                <div className="flex space-x-4">
                  <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white transition-transform hover:scale-110">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1DA1F2] text-white transition-transform hover:scale-110">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white transition-transform hover:scale-110">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0A66C2] text-white transition-transform hover:scale-110">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Map */}
              {/* <div className="animate-fade-in-delay-2 mt-8 h-60 w-full rounded-lg bg-gray-200 shadow-md">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596552044!2d-122.41941550000001!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1625320330531!5m2!1sen!2sin" 
                  className="h-full w-full rounded-lg"
                  title="Location Map" 
                  loading="lazy"
                  style={{ border: 0 }}
                ></iframe>
              </div> */}


              {/* Map */}
              <div className="animate-fade-in-delay-2 mt-8 h-60 w-full rounded-lg bg-gray-200 shadow-md">
                <iframe
                  // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0198448199!2d77.59792147496595!3d12.970763987332674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sin!4v1682147721893!5m2!1sen!2sin"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125323.44912435693!2d76.89719864052727!3d11.016844535379693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sin!4v1682147721893!5m2!1sen!2sin"

                  className="h-full w-full rounded-lg"
                  title="Location Map"
                  loading="lazy"
                  style={{ border: 0 }}
                  allowFullScreen
                ></iframe>
              </div>


            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-right">
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <h2 className="mb-6 text-2xl font-bold">Send Us a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="form-input"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && <p className="form-error">{errors.name}</p>}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-input"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <p className="form-error">{errors.email}</p>}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="mb-2 block text-sm font-medium">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="form-textarea"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                    {errors.message && <p className="form-error">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-full cursor-not-allowed"
                    disabled={true}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8 text-center">
            <h2 className="animate-fade-in heading-underline mx-auto inline-block text-3xl font-bold">
              Frequently Asked Questions
            </h2>
            <p className="animate-fade-in-delay-1 mx-auto mt-4 max-w-2xl text-gray-600">
              Find answers to common questions about our services
            </p>
          </div>

          <div className="mx-auto grid max-w-3xl gap-6">
            {/* FAQ Item 1 */}
            <div className="animate-fade-in rounded-lg bg-white p-6 shadow">
              <h3 className="text-lg font-semibold">How long does it take to build a website?</h3>
              <p className="mt-2 text-gray-600">
                The timeline varies depending on the complexity and requirements of your project.
                {/* A simple portfolio or blog can be completed in 2-3 weeks, while a more complex e-commerce
                site might take 1-2 months. */}
                We'll provide a detailed timeline during our initial consultation.
              </p>
            </div>
              
              
              {/* FAQ Item 21.1 */}
            <div className="animate-fade-in-delay-2 rounded-lg bg-white p-6 shadow">
              <h3 className="text-lg font-semibold">Can you explain about your demo website?</h3>
              <p className="mt-2 text-gray-600">
                Our demo website is created to give you a clear idea of different website styles. It does not have any active features. You can see examples of how a blog, an e-commerce store, or a portfolio site can look. We are ready to turn your ideas into a fully functional, customized website that meets your exact needs.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="animate-fade-in-delay-1 rounded-lg bg-white p-6 shadow">
              <h3 className="text-lg font-semibold">What information do you need to get started?</h3>
              <p className="mt-2 text-gray-600">
                To begin, we'll need to understand your business goals, target audience, and any specific
                functionalities you want in your website. We'll also ask for any brand assets like logos,
                colors, and content. Don't worry if you don't have everything ready—we can guide you
                through the process.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="animate-fade-in-delay-2 rounded-lg bg-white p-6 shadow">
              <h3 className="text-lg font-semibold">Do you offer website maintenance services?</h3>
              <p className="mt-2 text-gray-600">
                Yes, we offer various maintenance packages to keep your website secure, updated, and
                performing optimally. Our maintenance services include regular updates, security checks,
                backups, and technical support. We'll recommend the best package based on your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
