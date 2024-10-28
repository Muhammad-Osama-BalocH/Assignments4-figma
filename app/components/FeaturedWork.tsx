import React from 'react';
import Image from 'next/image';

const FeaturedWorks = () => {
  const works = [
    {
      id: 1,
      title: "Designing Dashboards",
      year: "2020",
      category: "Dashboard",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      imageUrl: "/Rectangle30.png", // Correct path with leading slash
    },
    {
      id: 2,
      title: "Analytics Tool",
      year: "2021",
      category: "Analytics",
      description:
        "Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageUrl: "/Rectangle32.png", // Correct path with leading slash
    },
    {
      id: 3,
      title: "Project Management App",
      year: "2022",
      category: "Productivity",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      imageUrl: "/Rectangle34.png", 
    },
  ];

  return (
    <div className="px-5 py-10 bg-gray-100">
      <section className="container mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Featured Works</h2>
        
        <div className="flex flex-col gap-6 items-center">
          {works.map((work) => (
            <div
              key={work.id}
              className="flex items-center max-w-lg w-full border border-gray-200 p-4 rounded-lg bg-white shadow-sm"
            >
              <Image
                src={work.imageUrl} 
                alt={work.title}
                width={96}
                height={96}
                className="object-cover rounded mr-4"
              />
              
              <div>
                <div className="flex items-center mb-2">
                  <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded mr-2">
                    {work.year}
                  </span>
                  <span className="text-gray-500 text-xs">{work.category}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800">{work.title}</h3>
                <p className="text-gray-700 text-sm mt-2">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeaturedWorks;
