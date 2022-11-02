import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen home-bg">
      {/*Container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
        <p className="text-[#fa3939] text-2xl">Hi my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#F6ECCC]">
          Ľubomír Bučko
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          {" "}
          I'm a Front-end Developer.
        </h2>
        <p className=" text-2xl text-gray-300 py-4 max-w-[700px]">
          I’m a front-end developer specializing in building and designing
          exceptional digital experiences.
        </p>
        <div>
          <Link to="work" smooth={true} duration={800}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:border-pink-600 hover:bg-pink-600 ">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-4" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
