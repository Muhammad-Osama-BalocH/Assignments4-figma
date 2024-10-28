// import Image from 'next/image';
// import React from 'react';
// import profileImage from '../public/image.png'; // Import the image directly

// const HeroSection: React.FC = () => {
//   return (
//     <section className="flex items-center justify-center px-8 py-16 bg-pink-50">
//       <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-8 md:space-y-0 w-full max-w-4xl">
        
//         {/* Content Section */}
//         <div className="text-left md:w-1/2">
//           <h1 className="text-4xl font-bold mb-4">
//             Hi, I am John,<br /> Creative Technologist
//           </h1>
//           <p className="text-gray-600 mb-6">
//             Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
//           </p>
//           <button className="px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition duration-300">
//             Download Resume
//           </button>
//         </div>

//         {/* Image Section */}
//         <div className="flex-shrink-0 w-72 h-72 rounded-full overflow-hidden shadow-lg">
//           <Image 
//             src={profileImage} // Use the imported image variable
//             alt="John's Profile" 
//             width={282} 
//             height={297} 
//             className="object-cover w-full h-full"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
import Image from 'next/image';
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="flex items-center justify-center px-8 py-16 bg-pink-50">
      <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-8 md:space-y-0 w-full max-w-4xl">
        
        {/* Content Section */}
        <div className="text-left md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">
            Hi, I am John,<br /> Creative Technologist
          </h1>
          <p className="text-gray-600 mb-6">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
          <button className="px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition duration-300">
            Download Resume
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0 w-72 h-72 rounded-full overflow-hidden shadow-lg">
          <Image 
            src="/image.png" // Directly use the path from the public folder
            alt="John's Profile" 
            width={282} 
            height={297} 
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
