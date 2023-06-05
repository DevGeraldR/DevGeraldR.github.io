import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import resume from "../assets/gerald-romero-resume.pdf";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Nav() {
  const [bg, setBg] = useState(false);
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  function handleResumeClick() {
    window.open(resume);
  }

  return (
    <section
      className={`${bg ? "bg-gray-800" : " "} sticky top-0 px-10 py-5 z-10`}
    >
      <nav className="flex justify-between">
        <h1 className="font-burtons text-xl text-white self-center">
          Dev Gerald
        </h1>
        <ul className="flex items-center hidden md:flex">
          <li>
            <button
              onClick={handleResumeClick}
              className="bg-gradient-to-r from-gray-500 hover:to-gray-500 text-white px-4 py-2 border-none rounded-md ml-8"
            >
              Resume
            </button>
            <button className="bg-gradient-to-r from-blue-500 hover:to-blue-500 text-white px-4 py-2 border-none rounded-md ml-8">
              <Link
                to="contact_us"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="transition-all duration-300"
              >
                Contact
              </Link>
            </button>
          </li>
        </ul>
        <div
          onClick={handleNav}
          className="md:hidden cursor-pointer font-white self-center"
        >
          {nav ? (
            <AiOutlineClose size={20} color="white" />
          ) : (
            <AiOutlineMenu size={20} color="white" />
          )}
        </div>
        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full bg-black text-white ease-in-out duration-500 md:hidden"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold text-blue-500 m-4">
            Dev Gerald
          </h1>
          <li className="m-10 flex flex-col gap-5">
            <button
              onClick={() => handleResumeClick()}
              className="bg-gradient-to-r from-gray-500 hover:to-gray-500 text-white px-4 py-2 border-none rounded-md"
            >
              Resume
            </button>
            <button className="bg-gradient-to-r from-blue-500 hover:to-blue-500 text-white px-4 py-2 border-none rounded-md">
              <Link
                onClick={() => handleNav()}
                to="contact_us"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="transition-all duration-300"
              >
                Contact
              </Link>
            </button>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Nav;
