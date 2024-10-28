// components/Footer.js

import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 text-center">
      {/* Footer Image */}

      {/* Social Media Icons */}
      <div className="flex justify-center gap-4 mb-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-gray-600 hover:text-blue-600 text-2xl" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-gray-600 hover:text-pink-500 text-2xl" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-gray-600 hover:text-blue-400 text-2xl" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-gray-600 hover:text-blue-700 text-2xl" />
        </a>
      </div>

      {/* Copyright Text */}
      <p className="text-gray-600 text-sm">&copy; 2020 All rights reserved</p>
    </footer>
  );
};

export default Footer;
