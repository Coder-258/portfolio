import React from 'react';
import Navbar from './components/Navbar';
import BasicInfo from './components/BasicInfo';
import About from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/ContactInfo';
import Footer from './components/Footer';
import './index.css';
export default function App() {

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <BasicInfo />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}