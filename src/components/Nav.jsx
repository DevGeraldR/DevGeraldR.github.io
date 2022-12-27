import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

function Nav() {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <section
      className={`${bg ? "bg-gray-800" : " "} sticky top-0 px-10 py-5 z-10`}
    >
      <nav className="flex justify-between">
        <h1 className="font-burtons text-xl text-white self-center">
          Dev Gerald
        </h1>
        <ul className="flex items-center">
          <li>
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
      </nav>
    </section>
  );
}

export default Nav;
