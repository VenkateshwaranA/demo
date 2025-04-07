
import { useState } from "react";
import QuoteForm from "@/components/QuoteForm";

const quoteData = [
  {
    id: 1,
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    id: 2,
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt"
  },
  {
    id: 3,
    text: "The best way to predict the future is to create it.",
    author: "Abraham Lincoln"
  },
  {
    id: 4,
    text: "Success is walking from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill"
  },
  {
    id: 5,
    text: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs"
  },
  {
    id: 6,
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  }
];

const Blog = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  
  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quoteData.length);
  };
  
  const prevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + quoteData.length) % quoteData.length);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white pt-32 pb-20 md:pt-40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="animate-fade-in text-4xl font-bold md:text-5xl lg:text-6xl">
              Inspire and Get Inspired
            </h1>
            <p className="animate-fade-in-delay-1 mx-auto mt-6 max-w-2xl text-xl">
              A Few Words Can Change Lives – Read & Share Motivation!
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-3">
            {/* Left Sidebar */}
            <div className="md:col-span-2">
              <div className="animate-fade-in mb-12">
                <h2 className="heading-underline mb-6 text-2xl font-bold">Why Motivation Matters</h2>
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed">
                    Motivation is the driving force that helps us achieve our goals and overcome challenges. 
                    It fuels our determination, enhances our focus, and empowers us to push through difficult times. 
                    Studies have shown that motivated individuals are more productive, resilient, and generally happier.
                  </p>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Whether it's a simple quote or an inspiring story, positive reinforcement can significantly 
                    impact our mindset and approach to work and life. This blog aims to provide that spark 
                    of motivation when you need it most.
                  </p>
                </div>
              </div>

              {/* Quote of the Day */}
              <div className="animate-fade-in-delay-1">
                <h2 className="heading-underline mb-6 text-2xl font-bold">Quote of the Day</h2>
                <div className="relative overflow-hidden rounded-lg bg-white p-8 shadow-md">
                  <div className="absolute top-0 left-0 h-2 w-full bg-gradient-to-r from-primary to-accent"></div>
                  <div className="flex flex-col space-y-8">
                    {/* Quote Card */}
                    <div 
                      key={quoteData[currentQuote].id}
                      className="relative"
                    >
                      <div className="absolute -top-4 -left-2 text-6xl text-primary opacity-20">"</div>
                      <div className="relative z-10">
                        <blockquote className="mb-4 text-xl font-medium italic text-gray-800">
                          {quoteData[currentQuote].text}
                        </blockquote>
                        <cite className="block text-right text-gray-600">— {quoteData[currentQuote].author}</cite>
                      </div>
                    </div>
                    
                    {/* Navigation */}
                    <div className="flex justify-between">
                      <button 
                        onClick={prevQuote}
                        className="btn border border-gray-300 px-4 py-2 hover:bg-gray-50"
                      >
                        Previous Quote
                      </button>
                      <button 
                        onClick={nextQuote}
                        className="btn btn-primary"
                      >
                        Next Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Recent Blog Posts */}
              <div className="animate-fade-in-delay-2 mt-12">
                <h2 className="heading-underline mb-6 text-2xl font-bold">Recent Articles</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Blog Post 1 */}
                  <div className="card-hover rounded-lg bg-white overflow-hidden shadow">
                    <div className="h-40 bg-gray-200">
                      <img 
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                        alt="Productivity Tips" 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-500">April 2, 2025</p>
                      <h3 className="mt-1 text-lg font-semibold">10 Productivity Hacks for Remote Workers</h3>
                      <p className="mt-2 text-gray-600 line-clamp-2">
                        Discover practical strategies to boost your productivity when working from home...
                      </p>
                      <button className="mt-3 inline-flex items-center text-sm font-medium text-primary">
                        Read More
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  {/* Blog Post 2 */}
                  <div className="card-hover rounded-lg bg-white overflow-hidden shadow">
                    <div className="h-40 bg-gray-200">
                      <img 
                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                        alt="Team Success" 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-500">March 28, 2025</p>
                      <h3 className="mt-1 text-lg font-semibold">Building a Positive Team Culture</h3>
                      <p className="mt-2 text-gray-600 line-clamp-2">
                        Learn how to foster a motivating and supportive environment for your team members...
                      </p>
                      <button className="mt-3 inline-flex items-center text-sm font-medium text-primary">
                        Read More
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="md:col-span-1">
              <QuoteForm />
              
              {/* Categories */}
              <div className="animate-fade-in-delay-1 mt-8 rounded-lg bg-white p-6 shadow">
                <h3 className="mb-4 text-xl font-semibold">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="flex items-center text-gray-700 hover:text-primary">
                      <span className="mr-2">→</span>
                      <span>Motivation</span>
                      <span className="ml-auto rounded-full bg-gray-100 px-2 py-1 text-xs">12</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-gray-700 hover:text-primary">
                      <span className="mr-2">→</span>
                      <span>Productivity</span>
                      <span className="ml-auto rounded-full bg-gray-100 px-2 py-1 text-xs">8</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-gray-700 hover:text-primary">
                      <span className="mr-2">→</span>
                      <span>Leadership</span>
                      <span className="ml-auto rounded-full bg-gray-100 px-2 py-1 text-xs">6</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-gray-700 hover:text-primary">
                      <span className="mr-2">→</span>
                      <span>Personal Growth</span>
                      <span className="ml-auto rounded-full bg-gray-100 px-2 py-1 text-xs">9</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-gray-700 hover:text-primary">
                      <span className="mr-2">→</span>
                      <span>Success Stories</span>
                      <span className="ml-auto rounded-full bg-gray-100 px-2 py-1 text-xs">5</span>
                    </a>
                  </li>
                </ul>
              </div>
              
              {/* Popular Posts */}
              <div className="animate-fade-in-delay-2 mt-8 rounded-lg bg-white p-6 shadow">
                <h3 className="mb-4 text-xl font-semibold">Popular Posts</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="h-16 w-16 flex-shrink-0 rounded bg-gray-200">
                      <img 
                        src="https://images.unsplash.com/photo-1495314736934-49f5223d0d3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60" 
                        alt="Popular Post" 
                        className="h-full w-full object-cover rounded"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">How to Stay Motivated During Tough Times</h4>
                      <p className="text-xs text-gray-500">March 15, 2025</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="h-16 w-16 flex-shrink-0 rounded bg-gray-200">
                      <img 
                        src="https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60" 
                        alt="Popular Post" 
                        className="h-full w-full object-cover rounded"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">5 Daily Habits of Successful Entrepreneurs</h4>
                      <p className="text-xs text-gray-500">March 10, 2025</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="h-16 w-16 flex-shrink-0 rounded bg-gray-200">
                      <img 
                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60" 
                        alt="Popular Post" 
                        className="h-full w-full object-cover rounded"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">The Power of Positive Thinking at Work</h4>
                      <p className="text-xs text-gray-500">March 5, 2025</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
