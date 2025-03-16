import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaPython,FaJava } from 'react-icons/fa';

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-50 text-center animate-fadeIn text-gray-800">
      <h2 className="text-4xl font-bold mb-6 text-indigo-600">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
          <FaReact className="text-5xl text-blue-500 mb-4" />
          <p>React.js</p>
        </div>
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
          <FaNodeJs className="text-5xl text-green-500 mb-4" />
          <p>Node.js</p>
        </div>
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
          <FaJava className="text-5xl text-yellow-500 mb-4" />
          <p>Java</p>
        </div>
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
          <FaPython className="text-5xl text-yellow-500 mb-4" />
          <p>Python</p>
        </div>
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
          <FaDatabase className="text-5xl text-gray-600 mb-4" />
          <p>MongoDb</p>
        </div>
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
          <FaDatabase className="text-5xl text-gray-600 mb-4" />
          <p>MySql</p>
        </div>
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
          <FaHtml5 className="text-5xl text-orange-500 mb-4" />
          <p>HTML5</p>
        </div>
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
          <FaCss3Alt className="text-5xl text-blue-500 mb-4" />
          <p>CSS3</p>
        </div>
      </div>
    </section>
  );
}