// "use client";

// import React from "react";
// import { companies, testimonials } from "../app/data";
// import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

// const Clients = () => {
//   return (
//     <section id="testimonials" className="py-20">
//       <h1 className="heading text-center text-3xl font-bold">
//         Kind words from
//         <span className="text-purple-500"> satisfied clients</span>
//       </h1>

//       <div className="flex flex-col items-center max-lg:mt-10">
//         {/* Testimonials Carousel */}
//         <div
//           className="h-[50vh] md:h-120 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
//         >
//           <InfiniteMovingCards
//             items={testimonials}
//             direction="right"
//             speed="slow"
//           />
//         </div>

//         {/* Company Logos */}
//         <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
//           {companies.map((company) => (
//             <div
//               key={company.id}
//               className="flex md:max-w-60 max-w-32 items-center gap-2"
//             >
//               <img
//                 src={company.img}
//                 alt={`${company.name} logo`}
//                 className="md:w-10 w-5 object-contain"
//               />
//               <img
//                 src={company.nameImg}
//                 alt={`${company.name} name`}
//                 width={company.id === 4 || company.id === 5 ? 100 : 150}
//                 className="md:w-24 w-20 object-contain"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Clients;
