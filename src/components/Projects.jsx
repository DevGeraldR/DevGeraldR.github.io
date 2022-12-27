import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/nearby_app.jpg";
import project2 from "../assets/nearby_web.png";
import project3 from "../assets/booking_web.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

function Projects() {
  const projects = [
    {
      img: project1,
      name: "Neaby App",
      link: "https://expo.dev/accounts/goodman_22/projects/nearby/builds/03d27f0b-16b7-4285-a86c-762d1d40654c",
    },
    {
      img: project2,
      name: "Nearby Website",
      link: "https://devgeraldr.github.io/nearby-web-preview/",
    },
    {
      img: project3,
      name: "Booking Website",
      link: "https://devgeraldr.github.io/booking_website_preview/",
    },
  ];

  return (
    <section className="p-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold p-10">
          Sample <span className="text-blue-500">Projects</span>
        </h3>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <Swiper
          slidesperview={1.2}
          spaceBetween={20}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
          }}
          loop={true}
          autoplay={{
            delay: 3000,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
        >
          {projects.map((project_info, i) => (
            <SwiperSlide key={i}>
              <div className="h-fit w-full p-4 bg-slate-700 rounded-xl mb-10">
                <img src={project_info.img} alt="" className="rounded-lg" />
                <h3 className="text-xl my-4">{project_info.name}</h3>
                <a
                  href={project_info.link}
                  className="bg-gradient-to-r from-blue-500 hover:to-blue-500 text-white px-4 py-2 border-none rounded-md"
                >
                  Live Demo
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Projects;
