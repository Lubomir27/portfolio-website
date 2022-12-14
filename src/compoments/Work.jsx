import React from "react";
import timisCooking from "../assets/timis.png";
import stavky from "../assets/stavky.png";
import mobis from "../assets/mobis-page.png";
import forex from "../assets/forex.png";
const Work = () => {
  return (
    <div name="work" className="w-full h-100 text-gray-300 my-8">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8" data-aos="fade-up">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>

          {/*           <p>
            From my projects that I created, I would like to highlight{" "}
            <strong className="text-pink-600">Yama</strong> and{" "}
            <strong className="text-pink-600">TimisCooking </strong>, although{" "}
            <strong className="text-pink-600">TimisCooking</strong> it is not
            finished yet, it has a very interesting admin page and it is an
            excellent experience with React Redux and Firebase, and{" "}
            <strong className="text-pink-600">Yama</strong> because it is my
            first real fullstack project where I created a functional payment
            gateway together with generating a ticket as a QR code and then
            sending it to the customer's email.
          </p> */}
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2  gap-8">
          {/* Grid Item */}
          {/* <div
            style={{ backgroundImage: `url(${timisCooking})` }}
            className="order-1 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
  
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
          
          <div className="order-2">
            <p className="py-2">
              <strong className="text-pink-600">TimisCooking</strong> is a small
              e-shop with dining menus, where the customer can choose from a
              menu of healthy meals with different durations, this project also
              includes an admin where the client can change pictures, names,
              prices, see all orders and much more.
            </p>
            <p>
              <strong className="text-pink-600">Used Technology: </strong>Next /
              React / Redux / Bootstrap / Javascript / Typescript / Firebase
            </p>
          </div>
          */}
          <div className="order-4 sm:order-3 ">
            <p className="py-2">
              The project for the{" "}
              <strong className="text-pink-600">Forex</strong> consulting client
              is a full stack application in React together with a Node.js
              backend that allows the customer to buy a product and after
              successful payment an email with a generated invoice is
              automatically sent to the customer.
            </p>
            <p>
              <strong className="text-pink-600">Used Technology: </strong>React
              / Javascript / Typescript / Node / Firebase / Stripe
            </p>
          </div>

          <div
            style={{ backgroundImage: `url(${forex})` }}
            className="order-3 sm:order-4 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                FOREX
              </span>
              <div className="pt-8 text-center">
                <a href="https://www.forexporadenstvo.sk/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${mobis})` }}
            className="order-5  shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Mobis
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
          <div className="order-6 ">
            <p>
              Project for a company{" "}
              <strong className="text-pink-600">Mobis</strong> selling
              photovoltaics, this is a fully functional and responsive React app
              where customers can see the order process, use the loan
              calculator, and send a report through the contact form for more
              information.
            </p>
            <p className="py-2">
              <strong className="text-pink-600">Used Technology: </strong>React
              / Javascript / Typescript / Firebase / Bootstrap
            </p>
          </div>
          <div
            style={{ backgroundImage: `url(${stavky})` }}
            className="order-7 sm:order-8  shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Betting Types
              </span>
              <div className="pt-8 text-center">
                <a href="https://www.stavkoveporadenstvo.sk/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="order-8 sm:order-7 ">
            <p>
              The project for a{" "}
              <strong className="text-pink-600">Betting</strong> consulting
              client is a full stack project that utilizes ternary operators
              (ES6) in order to create two almost identical pages, one for Forex
              and another for Betting, using a single codebase
            </p>
            <p className="py-2">
              <strong className="text-pink-600">Used Technology: </strong>React
              / Javascript / Typescript / Bootstrap / Stripe
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Work;
