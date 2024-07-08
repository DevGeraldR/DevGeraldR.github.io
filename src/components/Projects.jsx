import React, { useState, Fragment } from "react";
import project1 from "../assets/chatnb.png";
import project2 from "../assets/it-scheduler.png";
import project3 from "../assets/booking-web.png";
import project4 from "../assets/trap-game.png";
import chatnbDemo from "../assets/chatnb-demo.mp4";
import { Transition, Dialog } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";

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

  const [download, setDowload] = useState(false);

  const showDownloadWarning = () => {
    setDowload(!download);
  };

  const handleDownload = () => {
    // Assuming the file is located in the assets folder
    const fileUrl = process.env.PUBLIC_URL + "/trap-game-installer-1.0.exe";

    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "trap-game-installer-1.0.exe");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDowload(false);
  };

  return (
    <section className="pt-12 pl-10 pr-10 pb-7 text-white">
      <h1 className="text-3xl pb-4 pt-1 text-white text-center">
        Sample <span className="text-blue-500">Projects</span>
      </h1>
      <br />
      {showVideo && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-25 z-50">
          <div
            className={`bg-gray-900 rounded-lg overflow-hidden shadow border border-gray-700 w-4/5 max-w-4xl p-6 relative transform transition-transform duration-300 pointer-events-auto ${
              isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            <button
              onClick={handleClose}
              className="absolute top-0 right-0 text-white m-1 hover:bg-red-500 text-2xl"
            >
              <AiOutlineClose size={20} />
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

        <button
          onClick={showDownloadWarning}
          className="h-fit w-full md:w-[calc(50%-1rem)] lg:w-[calc(50%-1rem)] flex flex-col bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-4 mx-2"
          title="Click to open"
        >
          <div className="flex flex-col md:flex-row">
            <img
              className="object-cover rounded-t-lg w-full h-64 md:h-[250px] md:w-1/2 md:rounded-none md:rounded-tl-lg md:rounded-bl-lg"
              src={project4}
              alt="Trap Game"
            />
            <div className="flex flex-col gap-5 p-4 leading-normal w-full md:w-2/3">
              <h5 className="mb-2 text-2xl text-left tracking-tight text-gray-900 dark:text-white">
                Trap Game
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left ">
                A simple game built with C# and Unity. The concept of the game
                is to avoid traps.
              </p>
            </div>
          </div>
        </button>
      </div>
      <Transition appear show={download} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            setDowload(false);
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-800 bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-900 border border-gray-700 shadow p-6 text-left align-middle transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-white"
                  >
                    Trap Game Installer Download
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-200">
                      Do you want to download the trap game installer?
                    </p>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <button
                      type="button"
                      className="bg-gradient-to-r from-blue-500 hover:to-blue-500 text-white px-4 py-2 border-none rounded-md"
                      onClick={handleDownload}
                    >
                      Proceed
                    </button>
                    <button
                      type="button"
                      className="bg-gradient-to-r from-red-500 hover:to-red-500 text-white px-4 py-2 border-none rounded-md"
                      onClick={() => {
                        setDowload(false);
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
}

export default Projects;
