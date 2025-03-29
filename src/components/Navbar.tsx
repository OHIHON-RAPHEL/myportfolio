import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center px-4 sm:px-8 md:px-16 lg:px-32 relative">
      <h1 className="text-lg sm:text-xl font-bold">Portfolio</h1>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-4">
        <a href="/" className="hover:text-gray-400">Home</a>
        <a href="/projects" className="hover:text-gray-400">Projects</a>
        <a href="/about" className="hover:text-gray-400">About</a>
        <a href="/contact" className="hover:text-gray-400">Contact</a>
      </div>
      
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-white focus:outline-none" 
        aria-label="Toggle menu"
        onClick={() => {
          console.log("Menu toggled", !isOpen);
          setIsOpen(!isOpen);
        }}
      >
        ☰
      </button>
      
      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 right-0 bg-gray-800 text-white flex flex-col items-start space-y-2 py-2 px-4 shadow-lg rounded-md md:hidden">
          <a href="/" className="hover:text-gray-400">Home</a>
          <a href="/projects" className="hover:text-gray-400">Projects</a>
          <a href="/about" className="hover:text-gray-400">About</a>
          <a href="/contact" className="hover:text-gray-400">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
