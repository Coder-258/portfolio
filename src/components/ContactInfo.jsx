import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white text-center animate-fadeIn">
      <h2 className="text-4xl font-bold mb-6 text-indigo-600">Contact Me</h2>
      <p className="mb-4 text-gray-700">
        Feel free to reach out through email or connect with me on social media.
      </p>
      <div className="flex justify-center gap-6 text-gray-700">
        <a
          href="https://github.com/Coder-258"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-indigo-500 transition duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/rishu-sondhi-174b11246"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-indigo-500 transition duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:rishusondhi2@gmail.com"
          className="text-3xl hover:text-indigo-500 transition duration-300"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
}
