"use client"
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-end p-4 bg-pink-50 shadow-md z-10 ">
      <nav className="flex space-x-6 text-black">
        <a href="#work" className="text-gray-700 hover:text-gray-900 font-medium">Work</a>
        <a href="#blog" className="text-gray-700 hover:text-gray-900 font-medium">Blog</a>
        <a href="#contact" className="text-gray-700 hover:text-gray-900 font-medium">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
