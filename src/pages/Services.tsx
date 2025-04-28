
import { CheckCircle, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

type QuoteFormValues = {
  name: string;
  email?: string;
  quote: string;
};

const Services = () => {
  const [quoteText, setQuoteText] = useState("");
  
  const form = useForm<QuoteFormValues>({
    defaultValues: {
      name: "",
      email: "",
      quote: "",
    },
  });
  
  const onSubmit = (data: QuoteFormValues) => {
    // Create new quote object
    const newQuote = {
      name: data.name,
      email: data.email || "",
      quote: data.quote,
      date: new Date().toISOString()
    };
    
    // Get existing quotes from localStorage
    const existingQuotes = JSON.parse(localStorage.getItem('userQuotes') || '[]');
    
    // Add new quote to the array
    const updatedQuotes = [newQuote, ...existingQuotes];
    
    // Save back to localStorage
    localStorage.setItem('userQuotes', JSON.stringify(updatedQuotes));
    
    toast.success("Quote submitted successfully!");
    form.reset();
    setQuoteText("");
  };
  
  const handleQuoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuoteText(e.target.value);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="animate-fade-in text-4xl font-bold md:text-5xl">Our Services</h1>
            <p className="animate-fade-in-delay-1 mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Comprehensive digital solutions tailored for your unique needs
            </p>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Blog Card */}
            <Card className="animate-fade-in overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <CardHeader className="bg-primary/5">
                <CardTitle className="text-2xl">Blog</CardTitle>
                <CardDescription className="text-gray-600">Inspire and Get Inspired</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-6">
                  <h3 className="mb-2 font-semibold">Why Motivation Matters?</h3>
                  <p className="text-gray-600">
                    Motivation is the driving force behind all great achievements. It pushes us beyond our comfort zones, helps us overcome obstacles, and fuels our passion. When we stay motivated, we can transform challenges into opportunities and reach our full potential.
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="mb-4 font-semibold">Quote of the Day</h3>
                  <div className="space-y-3">
                    <div className="rounded-md bg-primary/5 p-3">
                      <p className="italic text-gray-700">"The future belongs to those who believe in the beauty of their dreams."</p>
                      <p className="text-right text-sm text-gray-500">- Eleanor Roosevelt</p>
                    </div>
                    <div className="rounded-md bg-primary/5 p-3">
                      <p className="italic text-gray-700">"Success is not final, failure is not fatal: It is the courage to continue that counts."</p>
                      <p className="text-right text-sm text-gray-500">- Winston Churchill</p>
                    </div>
                    <div className="rounded-md bg-primary/5 p-3">
                      <p className="italic text-gray-700">"The only way to do great work is to love what you do."</p>
                      <p className="text-right text-sm text-gray-500">- Steve Jobs</p>
                    </div>
                    <div className="rounded-md bg-primary/5 p-3">
                      <p className="italic text-gray-700">"Your time is limited, don't waste it living someone else's life."</p>
                      <p className="text-right text-sm text-gray-500">- Steve Jobs</p>
                    </div>
                    <div className="rounded-md bg-primary/5 p-3">
                      <p className="italic text-gray-700">"Believe you can and you're halfway there."</p>
                      <p className="text-right text-sm text-gray-500">- Theodore Roosevelt</p>
                    </div>
                    <div className="rounded-md bg-primary/5 p-3">
                      <p className="italic text-gray-700">"The best way to predict the future is to create it."</p>
                      <p className="text-right text-sm text-gray-500">- Peter Drucker</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col border-t pt-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
                    <FormField
                      control={form.control}
                      name="name"
                      rules={{ required: "Name is required" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email (optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your email" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="quote"
                      rules={{ required: "Quote is required" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Quote</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Share your motivational quote" 
                              className="min-h-[100px]" 
                              {...field} 
                              onChange={(e) => {
                                field.onChange(e);
                                handleQuoteChange(e);
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex justify-end space-x-2">
                      <Button 
                        variant="outline" 
                        type="button" 
                        onClick={() => {
                          form.reset();
                          setQuoteText("");
                        }}
                      >
                        Cancel
                      </Button>
                      <Button 
                        type="submit" 
                        disabled={quoteText.trim().length === 0}
                      >
                        Submit Quote
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardFooter>
            </Card>

            {/* E-Commerce Card */}
            <Card className="animate-fade-in-delay-1 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <CardHeader className="bg-secondary/5">
                <CardTitle className="text-2xl">E-Commerce</CardTitle>
                <CardDescription className="text-gray-600">Sports & Fitness Collection</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                {/* Product 1 */}
                <div className="rounded-lg border p-4">
                  <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-100 mb-4">
                    <div className="flex h-full items-center justify-center bg-secondary/5 text-secondary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                        <line x1="4" y1="22" x2="4" y2="15"></line>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Badminton Racquet Pro</h3>
                    <p className="mt-1 text-sm text-gray-500">Lightweight carbon fiber racquet with excellent balance</p>
                    <p className="mt-2 font-semibold">Rs. 5,000</p>
                    <div className="mt-4 flex space-x-2">
                      <Button className="flex-1">
                        <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                      </Button>
                      <Button variant="outline">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Product 2 */}
                <div className="rounded-lg border p-4">
                  <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-100 mb-4">
                    <div className="flex h-full items-center justify-center bg-secondary/5 text-secondary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                        <path d="M2 12h20"></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Cricket Kit Premium</h3>
                    <p className="mt-1 text-sm text-gray-500">Complete kit with bat, pads, gloves and helmet</p>
                    <p className="mt-2 font-semibold">Rs. 10,000</p>
                    <div className="mt-4 flex space-x-2">
                      <Button className="flex-1">
                        <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                      </Button>
                      <Button variant="outline">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Product 3 */}
                <div className="rounded-lg border p-4">
                  <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-100 mb-4">
                    <div className="flex h-full items-center justify-center bg-secondary/5 text-secondary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.5 16a2.5 2.5 0 0 1-2.5-2.5V6.8a2 2 0 0 0-1-1.73l-8-4.5a2 2 0 0 0-2 0l-8 4.5a2 2 0 0 0-1 1.73V13a2 2 0 0 0 1 1.73l8 4.5a2 2 0 0 0 2 0l5.5-3.2"></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Running Shoes Ultra</h3>
                    <p className="mt-1 text-sm text-gray-500">Breathable material with cushioned soles for comfort</p>
                    <p className="mt-2 font-semibold">Rs. 1,800</p>
                    <div className="mt-4 flex space-x-2">
                      <Button className="flex-1">
                        <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                      </Button>
                      <Button variant="outline">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Portfolio Card */}
            <Card className="animate-fade-in-delay-2 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <CardHeader className="bg-accent/5">
                <CardTitle className="text-2xl">Portfolio</CardTitle>
                <CardDescription className="text-gray-600">Your Professional Identity</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <div className="rounded-lg bg-gray-50 p-5">
                  <div className="flex items-center space-x-4">
                    <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-xl">JS</div>
                    <div>
                      <h3 className="text-lg font-medium">John Smith</h3>
                      <p className="text-gray-500">UX/UI Designer</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold">About Me</h3>
                  <p className="text-gray-600">
                    Passionate designer with over 5 years of experience creating user-centered digital experiences. Specializing in clean, intuitive interfaces that solve real problems.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-sm text-accent">UI Design</span>
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-sm text-accent">User Research</span>
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-sm text-accent">Prototyping</span>
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-sm text-accent">Figma</span>
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-sm text-accent">Adobe XD</span>
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold">Recent Projects</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="aspect-video rounded bg-accent/5 flex items-center justify-center">
                      <img src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Project 1" className="h-full w-full object-cover rounded" />
                    </div>
                    <div className="aspect-video rounded bg-accent/5 flex items-center justify-center">
                      <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Project 2" className="h-full w-full object-cover rounded" />
                    </div>
                    <div className="aspect-video rounded bg-accent/5 flex items-center justify-center">
                      <img src="https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Project 3" className="h-full w-full object-cover rounded" />
                    </div>
                    <div className="aspect-video rounded bg-accent/5 flex items-center justify-center">
                      <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Project 4" className="h-full w-full object-cover rounded" />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold">Awards & Certifications</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-accent" />
                      <span>Best UX Design Award 2024</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-accent" />
                      <span>Google UX Design Professional Certificate</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-accent" />
                      <span>Adobe Certified Professional</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="border-t p-6 text-center text-sm text-gray-500">
                This is a Sample. Your Portfolio will be customized based on your profession
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
