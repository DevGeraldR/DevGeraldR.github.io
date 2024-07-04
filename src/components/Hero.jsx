import React from "react";
import { SiUpwork } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import profile from "../assets/profile-hero.jpg";

function Hero() {
  return (
    <section className="text-center pt-3">
      <h2 className="text-5xl py-2 text-blue-500 font-medium md:text-6xl">
        Gerald Romero
      </h2>
      <h3 className="text-2xl py-2 text-white md:text-3xl">
        Software Developer
      </h3>
      <p className="text-md py-5 leading-8 text-gray-300 max-w-xl mx-auto md:text-xl">
        This website is my e-portfolio. If you are interested <br />
        message me below!
      </p>
      <div className="text-5xl flex justify-center gap-5 py-3 text-gray-600">
        <a
          href="https://github.com/DevGeraldR"
          className="cursor-pointer hover:text-blue-500"
        >
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/gerald-romero-732424279/"
          className="cursor-pointer hover:text-blue-500"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.upwork.com/freelancers/~01e42b59d829d990a2"
          className="cursor-pointer hover:text-blue-500"
        >
          <SiUpwork />
        </a>
      </div>
      <div className="mx-auto rounded-full w-80 h-80 overflow-hidden mt-5 md:h-96 md:w-96">
        <img src={profile} alt="" />
      </div>
    </section>
  );
}

export default Hero;
