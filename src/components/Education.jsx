export default function Education() {
    return (
      <section id="education" className="py-16 text-center bg-gray-100  animate-fadeIn">
        <h2 className="text-4xl font-bold mb-6 text-slate-600">Education</h2>
        <div className="max-w-lg mx-auto p-6 shadow-md bg-indigo-100">
          <h3 className="text-2xl font-semibold text-gray-800">Diploma in Computer Programming</h3>
          <p className="text-blue-600 hover:text-blue-800 mt-2">Sheridan College </p>
          <p className="text-blue-600 hover:text-blue-800 mt-2">Expected Graduation: April 2025</p>
        </div>
        <div className="max-w-lg mx-auto p-6 shadow-md bg-indigo-100 mt-6">
        {/* <div className="max-w-lg mx-auto p-6 shadow-md bg-indigo-100 mt-6"> */}
          <h3 className="text-2xl font-semibold text-gray-800">High School</h3>
          <p className="text-blue-600 hover:text-blue-800 mt-2">Doraha Public School </p>
          <p className="text-blue-600 hover:text-blue-800 mt-2">Passed Out: June 2022 </p>
        </div>
      </section>
    );
  }
  