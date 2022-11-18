import AOS from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";

import Footer from "../Footer/Footer";

const Banner = () => {
  // useEffect(() => {
  //   AOS.init({
  //     offset: 100,
  //     duration: 2000,
  //     easing: "ease",
  //   });
  // });
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className=" ">
      <div className="  bg-gray-900 bg-opacity-96">
        <div className="container mx-auto py-28 " data-aos="zoom-in-up">
          <div className=" ">
            <h2 className=" md:text-7xl lg:text-7xl text-4xl font-medium text-white text-center  ">
              MD <span className=" text-red-600">MINHAZ</span>
            </h2>
            <h2 className=" text-center text-2xl font-medium text-white">
              MERN Stack Developer || Reactjs Developer
            </h2>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Banner;
