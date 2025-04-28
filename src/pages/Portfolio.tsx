
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Modern Web App Design",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Mobile Banking App",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Brand Identity System",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1493421419110-74f4e85ba126?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Content Management System",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Marketing Analytics Dashboard",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "UI/UX Design", "Web Development", "Mobile App", "Branding"];

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br text-white pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h1 className="animate-fade-in text-4xl text-primary font-bold leading-tight md:text-5xl lg:text-6xl">
                Your Professional Identity
              </h1>
              <p className="animate-fade-in-delay-1 mt-6 text-xl text-primary">
                A Portfolio Website That Speaks for You!
              </p>
              <div className="animate-fade-in-delay-2 mt-8">
                <a href="#portfolio" className="btn bg-primary text-white hover:bg-gray-500">
                  View My Work
                </a>
              </div>
            </div>
            <div className="hidden animate-fade-in-delay-3 md:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-lg blur-lg"></div>
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Portfolio"
                  className="relative rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="animate-fade-in">
              <img
                src="/assets/portfolio-aboutme.jpg"
                alt="About Me"
                className="rounded-lg shadow-lg"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div>
              <h2 className="animate-fade-in heading-underline mb-6 text-3xl font-bold">
                About Me
              </h2>
              <p className="animate-fade-in-delay-1 mb-4 text-gray-700">
                I'm a passionate web developer and designer with over 5 years of experience creating
                beautiful, functional websites and applications. My approach combines clean code,
                intuitive user interfaces, and modern design principles.
              </p>
              <p className="animate-fade-in-delay-2 mb-6 text-gray-700">
                With expertise in front-end and back-end development, I deliver complete solutions
                that help businesses achieve their digital goals. I'm committed to ongoing learning
                and staying updated with the latest technologies and trends.
              </p>
              <div className="animate-fade-in-delay-3 grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-bold">Skills</h3>
                  <ul className="mt-2 space-y-1 text-gray-600">
                    <li>- Web Development</li>
                    <li>- UI/UX Design</li>
                    <li>- React/Next.js</li>
                    <li>- Node.js</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold">Education</h3>
                  <ul className="mt-2 space-y-1 text-gray-600">
                    <li>- B.Tech in Computer Science</li>
                    <li>- UI/UX Design Certification</li>
                    <li>- Full Stack Development</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="animate-fade-in heading-underline mx-auto inline-block text-3xl font-bold">
              My Portfolio
            </h2>
            <p className="animate-fade-in-delay-1 mx-auto mt-4 max-w-2xl text-gray-600">
              Here's a showcase of my recent work and projects
            </p>
          </div>

          {/* Filter */}
          <div className="animate-fade-in-delay-2 mb-8 flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`rounded-full px-4 py-1 text-sm ${filter === category
                    ? "bg-primary text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-sm font-medium text-accent">{project.category}</p>
                  <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                  <button className="inline-flex items-center text-sm font-medium text-white">
                    View Details
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="animate-fade-in heading-underline mx-auto inline-block text-3xl font-bold">
              Client Feedback
            </h2>
            <p className="animate-fade-in-delay-1 mx-auto mt-4 max-w-2xl text-gray-600">
              What my clients say about working with me
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="animate-fade-in rounded-lg bg-white p-6 shadow">
              <div className="mb-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mb-4 text-gray-700">
                "Working with this developer was a fantastic experience. They delivered exactly what we needed, on time and within budget. The communication throughout the process was excellent."
              </blockquote>
              <div className="flex items-center">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                  <img
                    src="https://randomuser.me/api/portraits/women/68.jpg"
                    alt="Client"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-3">
                  <p className="font-medium">Sarah Johnson</p>
                  <p className="text-sm text-gray-500">Marketing Director, TechCorp</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="animate-fade-in-delay-1 rounded-lg bg-white p-6 shadow">
              <div className="mb-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mb-4 text-gray-700">
                "The website redesign completely transformed our online presence. We've seen a significant increase in user engagement and conversions since launch. Highly recommended!"
              </blockquote>
              <div className="flex items-center">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                  <img
                    src="https://randomuser.me/api/portraits/men/34.jpg"
                    alt="Client"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-3">
                  <p className="font-medium">Michael Rodriguez</p>
                  <p className="text-sm text-gray-500">CEO, StartupBrand</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="animate-fade-in-delay-2 rounded-lg bg-white p-6 shadow">
              <div className="mb-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mb-4 text-gray-700">
                "The attention to detail and understanding of our brand was impressive. The portfolio site perfectly captures our company's vision and has helped us attract new clients."
              </blockquote>
              <div className="flex items-center">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                  <img
                    src="https://randomuser.me/api/portraits/women/46.jpg"
                    alt="Client"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-3">
                  <p className="font-medium">Emily Chang</p>
                  <p className="text-sm text-gray-500">Creative Director, DesignLab</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4 md:px-6">
          <p className="animate-fade-in text-center italic">
            This demo showcase the structure. Your actual portfolio will be customized for your career.          </p>
        </div>
      </section>
    </>
  );
};
export default Portfolio;
// import React from 'react';

// const Portfolio = () => {
//   const projects = [
//     {
//       title: 'E-Commerce Website',
//       description: 'A full-stack e-commerce site using React and Node.js.',
//       img: '/assets/ecom.jpg',
//     },
//     {
//       title: 'Portfolio Site',
//       description: 'My personal portfolio built with Tailwind and React.',
//       img: '/assets/portfolio.jpg',
//     },
//     {
//       title: 'Blog Platform',
//       description: 'A simple blog using Markdown and static site generation.',
//       img: '/assets/blog.jpg',
//     },
//   ];

//   return (
//     // <div className="min-h-screen bg-gray-100 text-gray-800 mt-16">
//     //   {/* Header */}
//     //   <header className="bg-white shadow p-4 flex justify-between items-center ">
//     //     <h1 className="text-xl font-bold">MyPortfolio</h1>
//     //     <nav className="space-x-4 text-sm font-medium">
//     //       <a href="" className="hover:text-blue-600">About</a>
//     //       <a href="" className="hover:text-blue-600">Projects</a>
//     //       <a href="" className="hover:text-blue-600">Contact</a>
//     //     </nav>
//     //   </header>

//     //   {/* Hero Section */}
//     //   <section className="text-center py-16 bg-gradient-to-b from-blue-50 to-white">
//     //     <h2 className="text-4xl font-bold mb-4">Hi, I'm Alex 👋</h2>
//     //     <p className="text-lg text-gray-600">Frontend Developer | React Enthusiast | UI/UX Explorer</p>
//     //   </section>

//     //   {/* Projects Section */}
//     //   <section id="projects" className="p-6 md:p-12">
//     //     <h3 className="text-2xl font-semibold mb-6 text-center">Projects</h3>
//     //     <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//     //       {projects.map((project, idx) => (
//     //         <div key={idx} className="bg-white shadow rounded-lg overflow-hidden">
//     //           <img src={project.img} alt={project.title} className="h-48 w-full object-cover" />
//     //           <div className="p-4">
//     //             <h4 className="font-semibold text-lg mb-1">{project.title}</h4>
//     //             <p className="text-sm text-gray-600">{project.description}</p>
//     //           </div>
//     //         </div>
//     //       ))}
//     //     </div>
//     //   </section>

//     //   {/* Contact Section */}
//     //   <section id="contact" className="bg-white py-12 px-6 text-center">
//     //     <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
//     //     <p className="mb-6 text-gray-600">Have a project idea or want to collaborate? Let's chat!</p>
//     //     <a
//     //       // href="mailto:youremail@example.com"
//     //       className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
//     //     >
//     //       Contact Me
//     //     </a>
//     //   </section>

//     //   {/* Footer */}
//     //   {/* <footer className="text-center text-sm text-gray-500 py-4">
//     //     © {new Date().getFullYear()} Alex. All rights reserved.
//     //   </footer> */}
//     // </div>

// <div className="max-w-4xl  mx-auto  py-32 text-gray-800">
//       <h1 className="text-4xl md:text-5xl font-bold mb-6">
//         Interior Design Digital Portfolio Example
//       </h1>

//       <p className="text-lg leading-relaxed mb-6">
//         Interior designers know the power of a well-crafted portfolio—it's not just a collection of beautiful spaces, but a key tool in attracting new clients. Your interior design portfolio should therefore be more than a gallery of images; it should serve as a reflection of your creativity and expertise.
//       </p>

//       <p className="text-lg leading-relaxed mb-6">
//         The site for <strong>Casa Vilora Interiors</strong> does so much more than just show off beautiful images. From the get-go, it shines a spotlight on <strong>Veronica Solomon</strong>, the mastermind behind Casa Vilora who has earned a number of awards and recognition. The site devotes plenty of space to talk about Solomon's personal journey, philosophy, and design tips so visitors can get to know the person behind the work.
//       </p>

//       <p className="text-lg leading-relaxed mb-6">
//         While photos of your projects are essential, remember they can be space-hungry in your portfolio. To keep your portfolio sleek yet informative, take a page from Casa Vilora's playbook. Be selective of the images you choose to display, selecting ones that represent your signature style while still showing your range of experience. Use full-width slideshows to display multiple images without overwhelming the viewer.
//       </p>

//       <div className="my-10">
//         <img
//           src="/assets/image.png"
//           alt="Interior Design Portfolio Example"
//           className="w-full rounded-2xl shadow-md"
//         />
//       </div>

//       {/* <p className="text-lg leading-relaxed mb-6">
//         Find Wix interior design website templates that put your best work forward. */}
//       {/* </p> */}

//       <div className="mt-10 bg-gray-100 p-6 rounded-xl text-center">
//         <p className="text-md font-semibold">
//           ✨ Tip: Let your portfolio tell a story — not just show a project. Clients want to know *how* you think, not just what you’ve done.
//         </p>
//       </div>
//     </div>


//   );
// };

// // export default Portfolio;

// export default Portfolio;
