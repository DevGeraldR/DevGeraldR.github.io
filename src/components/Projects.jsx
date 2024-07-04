import React, { useState } from "react";
import project1 from "../assets/chatnb.png";
import project2 from "../assets/it-scheduler.png";
import project3 from "../assets/booking-web.png";
import project4 from "../assets/trap-game.png";
import chatnbDemo from "../assets/chatnb-demo.mp4";

function Projects() {
  const projects = [
    {
      img: project2,
      name: "IT Scheduler",
      demoLink: "https://it-scheduler-fcf53.firebaseapp.com/",
      description:
        "An IT scheduling system built with JavaScript. Use these credentials to log in: admin@gmail.com and P@ssw0rd12345!",
    },
    {
      img: project3,
      name: "Booking Website",
      demoLink: "https://devgeraldr.github.io/booking_website_preview/",
      description:
        "A website built with React and Tailwind CSS. It allows users to book dates in a landscape.",
    },
    {
      img: project4,
      name: "Trap Game",
      demoLink:
        "https://drive.google.com/file/d/13zMcKxqpPVTJYyhw6Gm5DUuGuz7p1GFH/view?usp=sharing",
      description:
        "A game built with C# and Unity. The concept of the game is to avoid traps.",
    },
  ];

  const [showVideo, setShowVideo] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setShowVideo(true);
    setTimeout(() => setIsVisible(true), 10); // Slight delay for transition effect
    // Prevent scrolling when video is shown
    document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setShowVideo(false), 300); // Delay to allow transition to finish
    // Re-enable scrolling when video is closed
    document.body.style.overflow = "auto";
  };

  return (
    <section className="p-10 text-white">
      <h1 className="text-3xl py-1 text-white text-center">
        Sample <span className="text-blue-500">Projects</span>
      </h1>
      <br />
      {showVideo && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div
            className={`bg-gray-700 rounded-lg overflow-hidden shadow-xl w-4/5 max-w-4xl p-6 relative transform transition-transform duration-300 pointer-events-auto ${
              isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            <button
              onClick={handleClose}
              className="absolute top-0 right-0 mr-2 text-white hover:text-blue-500 text-2xl"
            >
              x
            </button>
            <video controls autoPlay className="w-full rounded-lg">
              <source src={chatnbDemo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
      <div className="flex flex-wrap max-w-6xl mx-auto items-center relative">
        <button
          onClick={handleClick}
          className="h-fit w-full md:w-[calc(50%-1rem)] lg:w-[calc(50%-1rem)] flex flex-col bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-4 mx-2"
          title="Click to open"
        >
          <div className="flex flex-col md:flex-row">
            <img
              className="object-cover rounded-t-lg w-full h-64 md:h-[250px] md:w-1/2 md:rounded-none md:rounded-tl-lg md:rounded-bl-lg"
              src={project1}
              alt="ChatNB"
            />
            <div className="flex flex-col gap-5 p-4 leading-normal w-full md:w-2/3">
              <h5 className="mb-2 text-2xl text-left tracking-tight text-gray-900 dark:text-white">
                ChatNB
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left ">
                An AI Chatbot built with React JS and Node JS to facilitate a
                conversation with an AI Model, Notable Batangueño.
              </p>
            </div>
          </div>
        </button>

        {projects.map((project_info, i) => (
          <a
            key={i}
            href={project_info.demoLink}
            className="h-fit w-full md:w-[calc(50%-1rem)] lg:w-[calc(50%-1rem)] flex flex-col bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-4 mx-2"
            title="Click to open"
          >
            <div className="flex flex-col md:flex-row">
              <img
                className="object-cover rounded-t-lg w-full h-64 md:h-[250px] md:w-1/2 md:rounded-none md:rounded-tl-lg md:rounded-bl-lg"
                src={project_info.img}
                alt={project_info.name}
              />
              <div className="flex flex-col gap-5 p-4 leading-normal w-full md:w-2/3">
                <h5 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">
                  {project_info.name}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {project_info.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
