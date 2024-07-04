import React from "react";
import project1 from "../assets/it-scheduler.png";
import project2 from "../assets/booking-web.png";
import project3 from "../assets/chatnb.png";
import project4 from "../assets/trap-game.png";
import project5 from "../assets/nearby-app.png";
import project6 from "../assets/nearby-web.png";

function Projects() {
  const projects = [
    {
      img: project1,
      name: "IT Scheduler",
      demoLink: "https://it-scheduler-fcf53.firebaseapp.com/",
      description:
        "An IT scheduling system built with JavaScript. Use these credentials to log in: admin@gmail.com and P@ssw0rd12345!",
    },
    {
      img: project2,
      name: "Booking Website",
      demoLink: "https://devgeraldr.github.io/booking_website_preview/",
      description:
        "A website built with React and Tailwind CSS. It allows users to book dates in a landscape.",
    },
    {
      img: project3,
      name: "ChatNB",
      demoLink:
        "https://drive.google.com/file/d/1W6A-7Jux0UcG7usMBxMWFqGdI1AMesb2/view?usp=sharing",
      description:
        "An AI Chatbot built with React JS and Node JS to facilitate a conversation with an AI Model, Notable Batangueño.",
    },
    {
      img: project4,
      name: "Trap Game",
      demoLink:
        "https://drive.google.com/file/d/13zMcKxqpPVTJYyhw6Gm5DUuGuz7p1GFH/view?usp=sharing",
      description:
        "A game built with C# and Unity. The concept of the game is to avoid traps.",
    },
    {
      img: project5,
      name: "Neaby App",
      demoLink:
        "https://expo.dev/accounts/goodman_22/projects/nearby/builds/03d27f0b-16b7-4285-a86c-762d1d40654c",
      description:
        "A mobile application built with React Native to find the nearest location of a facility.",
    },
    {
      img: project6,
      name: "Nearby Website",
      demoLink: "https://devgeraldr.github.io/nearby-web-preview/",
      description:
        "A website built with React and Tailwind. The admin of the Nearby app uses it.",
    },
  ];

  return (
    <section className="p-10 text-white">
      <h1 className="text-3xl py-1 text-white text-center">
        Sample <span className="text-blue-500">Projects</span>
      </h1>
      <br />
      <div className="flex flex-wrap max-w-6xl mx-auto items-center relative">
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
