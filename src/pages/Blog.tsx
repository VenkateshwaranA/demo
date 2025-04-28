
import { useState, useEffect } from "react";
import QuoteForm from "@/components/QuoteForm";
import { LayoutGrid, LayoutList, BookOpen, MessageSquare, Users, Image } from "lucide-react";

interface UserQuote {
  name: string;
  email: string;
  quote: string;
  date: string;
}

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
  const [userQuotes, setUserQuotes] = useState<UserQuote[]>([]);
  // Load user quotes from localStorage on component mount
  useEffect(() => {
    const savedQuotes = localStorage.getItem('userQuotes');
    if (savedQuotes) {
      setUserQuotes(JSON.parse(savedQuotes));
    }
  }, []);

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quoteData.length);
  };

  const prevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + quoteData.length) % quoteData.length);
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const posts = [
    {
      id: '1',
      title: 'Getting Started with React',
      excerpt: 'Learn the basics of React in this beginner-friendly post.',
      content: `React is a powerful JavaScript library for building dynamic user interfaces. 
  It encourages component-based architecture and is maintained by Meta.
  
  Key concepts include:
  - JSX: Syntax extension for JavaScript
  - Components: Reusable UI blocks
  - Props & State: For passing data and managing component behavior
  
  Start with 'create-react-app' or frameworks like Vite for faster setup.`,
      date: '2025-04-22',
      author: 'John Doe',
    },
    {
      id: '2',
      title: 'Styling with Tailwind CSS',
      excerpt: 'Tailwind CSS offers utility-first classes for rapid UI development.',
      content: `Tailwind CSS is a utility-first CSS framework packed with classes like \`p-4\`, \`text-center\`, and \`bg-blue-500\`.
  
  Why Tailwind?
  - Faster styling
  - Better maintainability
  - Fully customizable via config
  
  It works seamlessly with React and can be installed via npm or CDN.`,
      date: '2025-04-20',
      author: 'Jane Smith',
    },
    {
      id: '3',
      title: 'Understanding useState and useEffect',
      excerpt: 'React Hooks simplify state and lifecycle management in function components.',
      content: `React Hooks introduced a cleaner way to manage component logic.
  
  - \`useState\` lets you manage local state
  - \`useEffect\` replaces lifecycle methods like componentDidMount
  - Hooks eliminate the need for class components in most cases
  
  Example:
  \`\`\`js
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('Component mounted');
  }, []);
  \`\`\``,
      date: '2025-04-18',
      author: 'Alex Turner',
    },
    {
      id: '4',
      title: 'Deploying React Apps with Vercel',
      excerpt: 'Learn how to quickly deploy your React app using Vercel.',
      content: `Vercel makes deploying React (and Next.js) apps effortless.
  
  Steps:
  1. Push your code to GitHub
  2. Sign in at vercel.com and import the repo
  3. Configure build settings (Vite or CRA)
  4. Deploy with one click
  
  It auto-detects your framework and provides a global CDN.`,
      date: '2025-04-15',
      author: 'Sarah Nguyen',
    },
  ];

  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <>
      {/* Hero Section */}
      {/* <section className="bg-gradient-to-br from-green-700 to-secondary text-white pt-32 pb-20 md:pt-40">
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
      </section> */}

      {/* Page Layout Section */}
      {/* <section className="bg-white py-8 border-b">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-center font-semibold text-lg mb-6">Blog Layout & Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 flex flex-col items-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium">Daily Motivation</h3>
              <p className="text-sm text-gray-500 mt-1">Quotes and inspiration for your daily life</p>
            </div>
            
            <div className="p-4 flex flex-col items-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <LayoutGrid className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium">Latest Articles</h3>
              <p className="text-sm text-gray-500 mt-1">Browse our collection of motivational content</p>
            </div>
            
            <div className="p-4 flex flex-col items-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium">Share Your Quote</h3>
              <p className="text-sm text-gray-500 mt-1">Contribute your own inspiring messages</p>
            </div>
            
            <div className="p-4 flex flex-col items-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium">Community</h3>
              <p className="text-sm text-gray-500 mt-1">Connect with like-minded individuals</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Templete of the Blog */}

      {/* <section className="bg-white py-8 border-b">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-center mb-3">
          </div>
          <div className="flex flex-1 justify-center text-center w-full h-auto mb-8">
            <img src="/assets/structure-blog.jpg" className="h-[600px] w-[600px]" alt="blog" />


          </div>


        </div>






      </section> */}






      {/* Blog Structure Explanation
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="heading-underline text-2xl font-bold mb-6">Blog Structure & Components</h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-primary">
                  <h3 className="font-medium text-lg">Motivational Content</h3>
                  <p className="text-gray-600">Our blog features daily quotes, inspiring articles, and success stories to fuel your motivation.</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-secondary">
                  <h3 className="font-medium text-lg">Interactive Features</h3>
                  <p className="text-gray-600">Share your own quotes, browse through our collection, and connect with a community of like-minded individuals.</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-accent">
                  <h3 className="font-medium text-lg">Resource Library</h3>
                  <p className="text-gray-600">Access a growing library of articles, videos, and resources on personal development and motivation.</p>
                </div>
              </div>
            </div>
            
            <div className="hidden md:block relative">
              <div className="absolute -bottom-6 -right-6 h-64 w-64 rounded-full bg-primary opacity-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Blog Structure" 
                className="rounded-lg shadow-lg relative z-10"
              />
            </div>
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                <LayoutList className="h-6 w-6" />
              </div>
              <h3 className="font-medium text-lg mb-2">Browse By Category</h3>
              <p className="text-gray-600">Explore content organized by topics like Personal Growth, Leadership, Success Stories, and more.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="font-medium text-lg mb-2">Community Contributions</h3>
              <p className="text-gray-600">Read quotes shared by our community members and contribute your own inspiring thoughts.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="font-medium text-lg mb-2">Daily Quote Rotation</h3>
              <p className="text-gray-600">Get a new dose of inspiration every day with our rotating collection of motivational quotes.</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Main Content */}
      <section className="py-16 bg-gray-50 mt-9">
        <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-bold text-center mb-8">Stay motivated, Stay in trend</h2>
        <div className="grid gap-12 md:grid-cols-3">
            {/* Left Sidebar */}
            <div className="md:col-span-2">
              <div className="animate-fade-in mb-12">
                <h2 className="heading-underline mb-6 text-2xl font-bold">Why Motivation Matters?</h2>
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
                      <div className="relative z-10 mt-4">
                        <blockquote className="mb-4 text-xl font-medium italic text-gray-800">
                          <span>{quoteData[currentQuote].id} .</span>
                          {quoteData[currentQuote].text}
                        </blockquote>
                        <cite className="block text-right text-gray-600">— {quoteData[currentQuote].author}</cite>
                      </div>
                    </div>

                    {/* Navigation */}
                    {/* <div className="flex justify-between items-center mt-6">
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
                    </div> */}
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-6">
                      <button
                        onClick={prevQuote}
                        className="w-full sm:w-auto btn border border-gray-300 px-4 py-2 hover:bg-gray-50"
                      >
                        Previous Quote
                      </button>
                      <button
                        onClick={nextQuote}
                        className="w-full sm:w-auto btn btn-primary"
                      >
                        Next Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* User Submitted Quotes */}
              {userQuotes.length > 0 && (
                <div className="animate-fade-in-delay-1 mt-12">
                  <h2 className="heading-underline mb-6 text-2xl font-bold">Community Quotes</h2>
                  <div className="space-y-4">
                    {userQuotes.map((quote, index) => (<>
                      {/* <div key={index} className="rounded-lg bg-white p-6 shadow-md"> */}
                      {/* <blockquote className="mb-2 text-lg font-medium italic text-gray-800">
                        "{quote.quote}"
                      </blockquote>
                      <div className="flex items-center justify-between">
                        <cite className="text-gray-600">— {quote.name}</cite>
                        <p className="text-sm text-gray-500">{formatDate(quote.date)}</p>
                      </div>
                    </div> */}
                      <div
                        key={index}
                        className="relative rounded-lg bg-white p-6 shadow-md"
                      >
                        <div className="relative z-10 mt-4">
                          <blockquote className="mb-4 text-xl font-medium italic text-gray-800">
                            "{quote.quote}"
                          </blockquote>
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-500">{formatDate(quote.date)}</p>
                            <cite className="text-gray-600">— {quote.name}</cite>
                          </div>
                        </div>
                      </div>
                    </>

                    ))}
                  </div>
                </div>
              )}

              {/* Recent Blog Posts */}

            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
              <QuoteForm setUserQuotes={setUserQuotes} />

              {/* Categories */}
              {/* <div className="animate-fade-in-delay-1 mt-8 rounded-lg bg-white p-6 shadow">
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
              </div> */}

              {/* Popular Posts */}
              {/* <div className="animate-fade-in-delay-2 mt-8 rounded-lg bg-white p-6 shadow">
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
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
