import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function BasicInfo() {
  return (
    <section className="h-screen bg-gradient-to-r from-indigo-600 to-purple-600 flex justify-center items-center text-white text-center bg-cover bg-center animate-fadeIn">
    <div className="text-center">
      <h1 className="text-6xl font-extrabold mb-4">Hi, I'm <span className="text-yellow-400">Rishu Sondhi</span></h1>
      <p className="text-xl mb-6">Full-Stack Developer |  Problem Solver</p>
      <a href="#about" className="text-lg font-semibold py-2 px-6 bg-white text-indigo-600 rounded-md hover:bg-indigo-600 hover:text-white transition duration-300">
        Get to Know Me
      </a>
    </div>
  </section>
);
}
