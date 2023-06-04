import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/nearby-app.png";
import project2 from "../assets/nearby-web.png";
import project3 from "../assets/booking-web.png";
import project4 from "../assets/trap-game.png";
import project5 from "../assets/calculator.png";
import project6 from "../assets/notation-converter.png";
import project7 from "../assets/word-guessing-game.png";
import project8 from "../assets/number-guessing-game.png";
import project9 from "../assets/rock-paper-scissor-game.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

function Projects() {
  const projects = [
    {
      img: project1,
      name: "Neaby App",
      demoLink:
        "https://expo.dev/accounts/goodman_22/projects/nearby/builds/03d27f0b-16b7-4285-a86c-762d1d40654c",
      description:
        "A mobile application in react native. This helps find the nearest location.",
      codeLink: "",
    },
    {
      img: project2,
      name: "Nearby Website",
      demoLink: "https://devgeraldr.github.io/nearby-web-preview/",
      description:
        "A website built in react and tailwind. It is use by admin of Nearby app.",
      codeLink: "",
    },
    {
      img: project3,
      name: "Booking Website",
      demoLink: "https://devgeraldr.github.io/booking_website_preview/",
      description:
        "A website built in react and tailwind css. It is use for reservation of a time.",
      codeLink: "",
    },
    {
      img: project4,
      name: "Trap Game",
      demoLink:
        "https://drive.google.com/file/d/13zMcKxqpPVTJYyhw6Gm5DUuGuz7p1GFH/view?usp=sharing",
      description:
        "A game built in c# with Unity. The idea of the game is to avoid traps.",
      codeLink: "https://github.com/DevGeraldR/trap-game",
    },
    {
      img: project5,
      name: "Calculator",
      demoLink: "",
      description:
        "A calculator desktop app built with Java, Java swing and Java AWT.",
      codeLink: "https://github.com/DevGeraldR/calculator",
    },
    {
      img: project6,
      name: "Notation Converter",
      demoLink: "",
      description:
        "This is an app that will convert notations. This is made with Java Swing.",
      codeLink: "https://github.com/DevGeraldR/notation_converter",
    },
    {
      img: project7,
      name: "Word Guessing Game",
      demoLink: "",
      description:
        "A desktop game built with Java with the use of Java swing and awt.",
      codeLink: "https://github.com/DevGeraldR/word_guessing_game",
    },
    {
      img: project8,
      name: "Number Guessing Game",
      demoLink: "",
      description:
        "A game made with java swing. The idea is to guess the number within the specified range.",
      codeLink: "https://github.com/DevGeraldR/number_guessing_game_java_swing",
    },
    {
      img: project9,
      name: "Rock, Paper and Scissors Game",
      demoLink: "",
      description:
        "A game made with Java Swing. This is a rock paper scissor game.",
      codeLink: "https://github.com/DevGeraldR/rock_paper_scissors_game",
    },
  ];

  return (
    <section className="p-10 text-white">
      <h1 className="text-3xl py-1 text-white text-center">
        Sample <span className="text-blue-500">Projects</span>
      </h1>
      <br />
      <div className="flex max-w-6xl mx-auto items-center relative">
        <Swiper
          slidesperview={1}
          spaceBetween={40}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 2,
            },
          }}
          loop={true}
          autoplay={{
            delay: 5000,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
        >
          {projects.map((project_info, i) => (
            <SwiperSlide key={i}>
              <div className="h-fit w-full p-4 bg-slate-700 rounded-xl mb-10">
                <img
                  src={project_info.img}
                  alt=""
                  className="rounded-lg w-[500px] h-[300px]"
                />
                <h3 className="text-xl mt-2 text-blue-500">
                  {project_info.name}
                </h3>
                <p className="mb-4">{project_info.description}</p>

                {project_info.demoLink !== "" ? (
                  <a
                    href={project_info.demoLink}
                    className="bg-gradient-to-r from-blue-500 hover:to-blue-500 text-white px-4 py-2 border-none rounded-md"
                  >
                    Demo
                  </a>
                ) : (
                  ""
                )}
                {project_info.codeLink !== "" ? (
                  <a
                    href={project_info.codeLink}
                    className="bg-gradient-to-r from-gray-500 hover:to-gray-500 text-white px-4 py-2 border-none rounded-md"
                  >
                    Code
                  </a>
                ) : (
                  ""
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Projects;
