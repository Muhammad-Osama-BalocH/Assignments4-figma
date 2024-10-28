import React from 'react';

const Content = () => {
  return (
    <div className="px-5 py-10 bg-pink-50">
      <section className="container mx-auto max-w-4xl">
 
            <div className="flex justify-between items-center mb-6 p-4 bg-white rounded-t-lg shadow-md"> {/* Added padding and styling for the frame */}
          <h2 className="text-2xl font-bold text-gray-800">Recent Post</h2>
          <a href="#view-all" className="text-red-500 font-semibold">
            View all
          </a>
        </div>

        {/* Centered Post Cards */}
        <div className="flex justify-center space-x-4 bg-white p-4 rounded-b-lg shadow-md"> {/* Added padding and rounded bottom corners for frame */}
          <div className="w-full md:w-1/3 max-w-sm p-2">
            <div className="bg-gray-50 p-6 rounded-lg shadow h-full"> {/* Slightly different background */}
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Making a design system from scratch
              </h3>
              <p className="text-gray-500 text-sm mb-4">12 Feb 2020 | Design, Pattern</p>
              <p className="text-gray-700 text-base">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 max-w-sm p-2">
            <div className="bg-gray-50 p-6 rounded-lg shadow h-full">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Making a design system from scratch
              </h3>
              <p className="text-gray-500 text-sm mb-4">12 Feb 2020 | Design, Pattern</p>
              <p className="text-gray-700 text-base">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;
