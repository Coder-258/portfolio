
export default function About() {
    return (
        <section id="about" className="py-16 bg-gray-50 text-center animate-fadeIn">
        <h2 className="text-4xl font-bold mb-6 text-indigo-600">About Me</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex justify-center items-center">
            <img src="profile.jpg" alt="Your Name" className="w-56 h-56 rounded-full border-8 border-indigo-600 shadow-xl transform hover:scale-105 transition duration-300" />
          </div>
          <div className="flex flex-col justify-center items-center md:items-start">
            <p className="text-lg leading-relaxed mb-4 text-slate-600">I’m a passionate developer with a love for building impactful applications. My journey in tech started with curiosity, and today, I specialize in Full-Stack Development and AI-driven solutions.</p>
            <p className="text-lg leading-relaxed text-slate-600">I'm constantly learning, and my goal is to solve real-world problems through technology. I love working on projects that improve people's lives and bring new ideas to life.</p>
            
          </div>
        </div>
      </section>
    );
  }
  