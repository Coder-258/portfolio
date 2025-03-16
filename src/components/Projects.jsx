export default function Projects() {
    const projects = [
      { title: 'P2P Rental Platform', description: 'A decentralized platform for renting assets directly between users.',githubURL:'https://github.com/Coder-258/Rental_System' },
      { title: 'Meals Web App', description: 'Platform to view different types of meals according to their categories.',githubURL:'https://github.com/Coder-258/Meal_Website' },
      { title: 'Library Management System', description: 'An application where users can issue different types of books.',githubURL:'https://github.com/Coder-258/Library-Management-System' },
    ];
  
    return (
      <section id="projects" className="py-16  text-center animate-fadeIn bg-gray-100">
        <h2 className="text-4xl font-bold mb-6 text-indigo-600">Projects</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-indigo-100 p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-indigo-800">{project.title}</h3>
            <p className="text-gray-700">{project.description}</p>
            <a href={project.githubURL} className="text-blue-600 underline hover:text-blue-800">View Source Code</a>
            </div>
          ))}
        </div>
      </section>
    );
  }