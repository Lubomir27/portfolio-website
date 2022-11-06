import React from "react";
import timisCooking from "../assets/timis-cooking.png";
import medicPage from "../assets/medic-page.png";
import mobis from "../assets/mobis-page.png";
const Work = () => {
  return (
    <div className="w-full md:h-screen text-gray-300 ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>

          <p>
            I would highlight the project{" "}
            <strong className="text-pink-600">timis-cooking</strong> that is a
            small e-shop with dining menus, where I built a complete admin
            platform on which the customer can change package photos,
            description, price, see all orders and other great features. This
            project is still not finished, but it was an excellent experience
            with next.js, redux and firebase
          </p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            data-aos="zoom-out-left"
            style={{ backgroundImage: `url(${mobis})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Mobis s.r.o
              </span>
              <div className="pt-8 text-center">
                <a href="https://mobis.cz/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            data-aos="zoom-out-left"
            style={{ backgroundImage: `url(${medicPage})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Medic s.r.o.
              </span>
              <div className="pt-8 text-center">
                <a href="https://medicsro.sk/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-out-left"
            style={{ backgroundImage: `url(${timisCooking})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Timis Cooking
              </span>
              <div className="pt-8 text-center">
                <a href="https://www.timiscooking.sk/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Work;
