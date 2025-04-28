
import ProductCard from "@/components/ProductCard";

const products = [
  {
    id: 1,
    title: "Badminton Racquet",
    price: "Rs. 5,000",
    description: "Professional grade carbon-fiber badminton racquet with premium string tension for competitive play.",
    image: "/assets/badminton.jpg"
  },
  {
    id: 2,
    title: "Cricket Kit",
    price: "Rs. 10,000",
    description: "Complete cricket kit including bat, pads, gloves, and helmet. Perfect for aspiring cricketers.",
    image: "/assets/cricket-kit.jpg"
  },
  {
    id: 3,
    title: "Running Shoes",
    price: "Rs. 1,800",
    description: "Lightweight, breathable running shoes with advanced cushioning technology for comfort and performance.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"
  },
  {
    id: 4,
    title: "Fitness Tracker",
    price: "Rs. 2,500",
    description: "Smart fitness band with heart rate monitoring, step counting, and sleep tracking features.",
    image: "/assets/fitnes.jpg"
  },
  {
    id: 5,
    title: "Yoga Mat",
    price: "Rs. 1,200",
    description: "Premium eco-friendly yoga mat with non-slip surface and perfect thickness for comfort.",
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&q=80"
  },
  {
    id: 6,
    title: "Basketball",
    price: "Rs. 999",
    description: "Competition grade football with durable stitching and weather-resistant material.",
    image: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?w=800&q=80"
  },
  // {
  //   id: 7,
  //   title: "Tennis Racket",
  //   price: "Rs. 3,000",
  //   description: "High-performance tennis racket designed for power and control on the court.",
  //   image: "https://images.unsplash.com/photo-1593642532784-d0a6f3e4b1e1?w=800&q=80"
  // },
  // {
  //   id: 8,
  //   title: "Basketball",
  //   price: "Rs. 1,500",
  //   description: "Durable basketball suitable for both indoor and outdoor play.",
  //   image: "https://images.unsplash.com/photo-1518033979608-4b8a3c6e1c9a?w=800&q=80"
  // }
];



// const Ecommerce = () => {
//   return (
//     <>
//       {/* Hero Section */}
//       <section className="bg-gray-50 pt-32 pb-16 md:pt-40">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="grid items-center gap-8 md:grid-cols-2">
//             <div>
//               <span className="animate-fade-in inline-block rounded-full bg-primary-light px-3 py-1 text-sm font-medium text-white">
//                 NEW COLLECTION
//               </span>
//               <h1 className="animate-fade-in mt-4 text-4xl font-bold md:text-5xl">
//                 Sports & Fitness Collection
//               </h1>
//               <p className="animate-fade-in-delay-1 mt-4 text-xl text-gray-600">
//                 A Sneak Peek into Your Future Online Store!
//               </p>
//               <p className="animate-fade-in-delay-2 mt-4 text-gray-600">
//                 Discover top-quality sports gear and fitness equipment that helps you achieve peak performance. 
//                 Our curated collection features the best products for athletes and fitness enthusiasts alike.
//               </p>
//               <div className="animate-fade-in-delay-3 mt-8 flex space-x-4">
//                 <button className="btn btn-primary">
//                   Shop Now
//                 </button>
//                 <button className="btn btn-outline">
//                   View Categories
//                 </button>
//               </div>
//             </div>
//             <div className="hidden animate-fade-in-right md:block">
//               <div className="relative">
//                 <div className="absolute -top-6 -left-6 h-64 w-64 rounded-full bg-primary opacity-10"></div>
//                 <img 
//                   src="https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
//                   alt="Sports Equipment" 
//                   className="relative z-10 rounded-lg shadow-lg"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Featured Products */}
//       <section className="py-16">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="mb-12 text-center">
//             <h2 className="animate-fade-in heading-underline mx-auto inline-block text-3xl font-bold">
//               Featured Products
//             </h2>
//             <p className="animate-fade-in-delay-1 mx-auto mt-4 max-w-2xl text-gray-600">
//               Check out our selection of high-quality sports and fitness equipment
//             </p>
//           </div>

//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {products.slice(0, 3).map((product) => (
//               <ProductCard
//                 key={product.id}
//                 title={product.title}
//                 price={product.price}
//                 description={product.description}
//                 image={product.image}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Promotion Banner */}
//       <section className="bg-primary text-white py-16">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="flex flex-col items-center text-center">
//             <h2 className="animate-fade-in text-3xl font-bold md:text-4xl">
//               Special Offer
//             </h2>
//             <p className="animate-fade-in-delay-1 mt-4 max-w-2xl text-lg text-gray-100">
//               Sign up now and get 15% off your first purchase!
//             </p>
//             <form className="animate-fade-in-delay-2 mt-8 flex w-full max-w-md flex-col sm:flex-row">
//               <input 
//                 type="email" 
//                 placeholder="Enter your email" 
//                 className="w-full rounded-l-md border-0 px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent sm:w-96"
//               />
//               <button 
//                 type="submit" 
//                 className="mt-2 rounded-md bg-accent px-4 py-2 font-medium text-white hover:bg-accent-dark sm:mt-0 sm:rounded-l-none"
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* More Products */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="mb-12">
//             <h2 className="animate-fade-in text-3xl font-bold">
//               More Products
//             </h2>
//             <p className="animate-fade-in-delay-1 mt-2 text-gray-600">
//               Discover our extensive range of sports and fitness equipment
//             </p>
//           </div>

//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {products.slice(3).map((product) => (
//               <ProductCard
//                 key={product.id}
//                 title={product.title}
//                 price={product.price}
//                 description={product.description}
//                 image={product.image}
//               />
//             ))}
//           </div>

//           <div className="mt-12 text-center">
//             <button className="btn btn-primary px-8">
//               View All Products
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Features */}
//       <section className="py-16 border-t border-gray-200">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="grid gap-8 md:grid-cols-3">
//             <div className="animate-fade-in flex flex-col items-center text-center">
//               <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-light/10">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
//                 </svg>
//               </div>
//               <h3 className="mb-2 text-xl font-semibold">Free Shipping</h3>
//               <p className="text-gray-600">On all orders above Rs. 2,000</p>
//             </div>

//             <div className="animate-fade-in-delay-1 flex flex-col items-center text-center">
//               <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-light/10">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
//                 </svg>
//               </div>
//               <h3 className="mb-2 text-xl font-semibold">Easy Returns</h3>
//               <p className="text-gray-600">30-day return policy</p>
//             </div>

//             <div className="animate-fade-in-delay-2 flex flex-col items-center text-center">
//               <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-light/10">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                 </svg>
//               </div>
//               <h3 className="mb-2 text-xl font-semibold">Secure Payments</h3>
//               <p className="text-gray-600">Multiple payment options</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };


const Ecommerce = () => {
  return (
    <div className="min-h-screen bg-gray-100 mt-16">
      {/* Header */}
      <header className="bg-gray-900 text-white p-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">MyShop</h1>
        <div className="flex-1 mx-4">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full px-4 py-2 rounded-md text-black"
          />
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row p-4 gap-4">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          <div className="space-y-2 text-sm">
            <label className="block">
              <input type="checkbox" className="mr-2" />
              Electronics
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" />
              Clothing
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" />
              Mobile Phones
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" />
              Shoes
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" />
              Price: Low to High
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" />
              Price: High to Low
            </label>
          </div>
        </aside>

        {/* Product Grid */}
        {/* <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4"> */}
        <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

          {/* {[
            { name: 'Smartphone', price: '$299.99' },
            { name: 'Running Shoes', price: '$79.99' },
            { name: 'Wireless Headphones', price: '$59.99' },
            { name: 'Casual T-Shirt', price: '$19.99' },
            { name: 'Casual T-Shirt', price: '$19.99' },
            { name: 'Casual T-Shirt', price: '$19.99' },
            { name: 'Casual T-Shirt', price: '$19.99' },
            { name: 'Casual T-Shirt', price: '$19.99' },
          ].map((product, idx) => (
            <div key={idx} className="bg-white rounded shadow p-4 text-center">
              <img
                src="https://via.placeholder.com/150"
                alt={product.name}
                className="w-full h-40 object-contain mb-3"
              />
              <h3 className="text-md font-medium">{product.name}</h3>
              <p className="text-green-600 font-bold">{product.price}</p>
            </div>
          ))} */}
          {products.map((product) => (
            <div key={product.id} className="flex h-full w-full">

              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                image={product.image}
              />
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

// export default EcommercePage;


export default Ecommerce;
