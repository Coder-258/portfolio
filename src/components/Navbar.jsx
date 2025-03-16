import React, { useState } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const sections = ['About', 'Skills', 'Projects', 'Education', 'Contact'];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-800 shadow-md z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            {sections.map((section) => (
              <a key={section} href={`#${section.toLowerCase()}`} className="hover:text-blue-500 transition">
                {section}
              </a>
            ))}
          </div>
          <button onClick={toggleMenu} className="md:hidden text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-md">
          <div className="flex flex-col items-center gap-4 py-4">
            {sections.map((section) => (
              <a key={section} href={`#${section.toLowerCase()}`} className="hover:text-blue-500 transition">
                {section}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}