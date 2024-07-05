import React from "react";
function Services() {
  return (
    <section className="px-10 pt-20">
      <div className="text-center">
        <h3 className="text-3xl pb-2 pt-1 text-white ">Skills & Services</h3>
        <p className="text-md leading-8 text-gray-200">
          I offer <span className="text-blue-500"> web</span>,
          <span className="text-blue-500"> mobile</span>, and
          <span className="text-blue-500"> desktop app</span> development
          services.
        </p>
      </div>
      <div className="lg:flex gap-10">
        <div className="text-center p-10 rounded-xl my-10 bg-gray-800 border border-gray-700 shadow lg:flex-1">
          <h3 className="text-lg font-medium pb-2 text-white">
            Web Application
          </h3>
          <p className="text-gray-200 py-1">React JS</p>
          <p className="text-gray-200 py-1">Node JS</p>
          <p className="text-gray-200 py-1">Tailwind CSS</p>
          <p className="text-gray-200 py-1">Bootstrap</p>
          <p className="text-gray-200 py-1">MySQL</p>
          <p className="text-gray-200 py-1">NoSQL</p>
        </div>
        <div className="text-center p-10 rounded-xl my-10 bg-gray-800 border border-gray-700 shadow lg:flex-1">
          <h3 className="text-lg font-medium pb-2 text-white">
            Mobile Application
          </h3>
          <p className="text-gray-200 py-1">React Native</p>
          <p className="text-gray-200 py-1">Redux</p>
          <p className="text-gray-200 py-1">Tailwind CSS</p>
          <p className="text-gray-200 py-1">Firebase</p>
          <p className="text-gray-200 py-1">NoSQL</p>
        </div>
        <div className="text-center p-10 rounded-xl my-10 bg-gray-800 border border-gray-700 shadow lg:flex-1">
          <h3 className="text-lg font-medium pb-2 text-white">
            Desktop Application
          </h3>

          <p className="text-gray-200 py-1">Java</p>
          <p className="text-gray-200 py-1">Java Swing</p>
          <p className="text-gray-200 py-1">Java AWT</p>
          <p className="text-gray-200 py-1">C#</p>
          <p className="text-gray-200 py-1">Unity</p>
        </div>
        <div className="text-center p-10 rounded-xl my-10 bg-gray-800 border border-gray-700 shadow lg:flex-1">
          <h3 className="text-lg font-medium pb-2 text-white">Other Skills</h3>

          <p className="text-gray-200 py-1">C++</p>
          <p className="text-gray-200 py-1">C</p>
          <p className="text-gray-200 py-1">Python</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
