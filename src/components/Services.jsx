import React from "react";
function Services() {
  return (
    <section className="px-10 pt-10">
      <div className="text-center">
        <h3 className="text-3xl py-1 text-white ">Skills & Services</h3>
        <p className="text-md py-1 leading-8 text-gray-800 text-gray-200">
          I offer services in{" "}
          <span className="text-blue-500"> web development </span>,{" "}
          <span className="text-blue-500">mobile development </span> and also
          <span className="text-blue-500">
            {" "}
            assistance for your assignment{" "}
          </span>{" "}
          if you are a student.
        </p>
      </div>
      <div className="lg:flex gap-10">
        <div className="text-center p-10 rounded-xl my-10 bg-white lg:flex-1">
          <h3 className="text-lg font-medium pb-2 ">Web Developer</h3>
          <p className="text-gray-800 py-1">React</p>
          <p className="text-gray-800 py-1">Javascript</p>
          <p className="text-gray-800 py-1">Tailwind CSS</p>
          <p className="text-gray-800 py-1">Html5</p>
          <p className="text-gray-800 py-1">CSS</p>
        </div>
        <div className="text-center p-10 rounded-xl my-10 bg-white lg:flex-1">
          <h3 className="text-lg font-medium pb-2 ">Application Developer</h3>
          <p className="text-gray-800 py-1">React Native</p>
          <p className="text-gray-800 py-1">Redux</p>
          <p className="text-gray-800 py-1">Tailwind CSS</p>
          <p className="text-gray-800 py-1">Firebase</p>
        </div>
        <div className="text-center p-10 rounded-xl my-10 bg-white lg:flex-1">
          <h3 className="text-lg font-medium pb-2 ">
            Assistant <span className="text-blue-500">(For students)</span>
          </h3>

          <p className="text-gray-800 py-1">JAVA</p>
          <p className="text-gray-800 py-1">C++</p>
          <p className="text-gray-800 py-1">C</p>
          <p className="text-gray-800 py-1">Python</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
