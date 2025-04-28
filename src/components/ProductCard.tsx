
// // import { useState } from "react";
// // import { Heart } from "lucide-react";

// // interface ProductCardProps {
// //   title: string;
// //   price: string;
// //   description: string;
// //   image: string;
// // }

// // const ProductCard = ({ title, price, description, image }: ProductCardProps) => {
// //   const [isHovered, setIsHovered] = useState(false);

// //   return (
// //     <div 
// //       className="card-hover group relative overflow-hidden rounded-lg bg-white shadow"
// //       onMouseEnter={() => setIsHovered(true)}
// //       onMouseLeave={() => setIsHovered(false)}
// //     >
// //       <div className="relative h-48 overflow-hidden bg-gray-200">
// //         <img 
// //           src={image} 
// //           alt={title} 
// //           className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
// //         />
// //         <div className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`}></div>
// //       </div>
// //       <div className="p-4">
// //         <div className="mb-2 flex items-center justify-between">
// //           <h3 className="text-lg font-semibold">{title}</h3>
// //           <span className="font-medium text-primary">{price}</span>
// //         </div>
// //         <p className="mb-4 text-sm text-gray-600">{description}</p>
// //         <div className="flex items-center justify-between">
// //           <button className="btn btn-primary text-sm">Add to Cart</button>
// //           <button className="ml-2 rounded-full p-2 transition-colors duration-200 hover:bg-gray-100">
// //             <Heart className="h-5 w-5" />
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductCard;

// import { useState } from "react";
// import { Heart } from "lucide-react";

// interface ProductCardProps {
//   title: string;
//   price: string;
//   description: string;
//   image: string;
// }

// const ProductCard = ({ title, price, description, image }: ProductCardProps) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div 
//       className="card-hover group relative flex h-full flex-col overflow-hidden rounded-lg bg-white shadow"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div className="relative h-48 overflow-hidden bg-gray-200">
//         <img 
//           src={image} 
//           alt={title} 
//           className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
//         />
//         <div className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`}></div>
//       </div>
//       <div className="flex flex-1 flex-col justify-between p-4">
//         <div>
//           <div className="mb-2 flex items-center justify-between">
//             <h3 className="text-lg font-semibold line-clamp-1">{title}</h3>
//             <span className="font-medium text-primary">{price}</span>
//           </div>
//           <p className="mb-4 text-sm text-gray-600 line-clamp-2">{description}</p>
//         </div>
//         <div className="flex items-center justify-between">
//           <button className="btn btn-primary text-sm">Add to Cart</button>
//           <button className="ml-2 rounded-full p-2 transition-colors duration-200 hover:bg-gray-100">
//             <Heart className="h-5 w-5" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;



import { useState } from "react";
import { Heart } from "lucide-react";

interface ProductCardProps {
  title: string;
  price: string;
  description: string;
  image: string;
}

const ProductCard = ({ title, price, description, image }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="card-hover group relative flex h-full flex-col overflow-hidden rounded-lg bg-white shadow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden bg-gray-200">
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`}></div>
      </div>
      <div className="flex flex-1 flex-col justify-between p-4">
        <div>
          <div className="mb-2 flex items-start justify-between gap-4">
            <h3 className="text-lg font-semibold line-clamp-1 flex-1">{title}</h3>
            <span className="font-medium text-primary whitespace-nowrap">{price}</span>
          </div>
          <p className="mb-4 text-sm text-gray-600 line-clamp-2">{description}</p>
        </div>
        <div className="flex items-center justify-between mt-auto">
          <button className="btn btn-primary text-sm">Add to Cart</button>
          <button className="ml-2 rounded-full p-2 transition-colors duration-200 hover:bg-gray-100">
            <Heart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;