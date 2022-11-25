import AOS from "aos";
import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import Modal from "../Modal/Modal";
import { BsArrowRight } from "react-icons/bs";
import "./About.css";

const About = ({ navbar }) => {
  useEffect(() => {
    AOS.init();
  });
  const [show, setShowModal] = useState(false);

  return (
    <div className=" bg-gray-900 bg-opacity-96">
      <div className="container mx-auto px-8 md:px-0 md:pt-32 pt-4 ">
        {show ? <Modal setShowModal={setShowModal} /> : null}
        <div data-aos="zoom-in-up" className="absolute md:ml-32 sm:ml-24 ">
          <img
            width="300px"
            className="  "
            src="https://i.ibb.co/S75VLGZ/graph-3.png"
            alt=""
          />
        </div>
        <div className="grid mt-2 pb-44 sm:grid-cols-1 md:grid-cols-2  mx-24  items-center justify-around relative z-10">
          <div data-aos="zoom-in-up" className={`px-5 mb-6`}>
            <img
              className="w-[400] "
              src="https://i.ibb.co/dQTk2t7/cs-2-removebg-preview.png"
              alt=""
            />
          </div>

          <div data-aos="zoom-in-up" className=" text-white  ">
            <div>
              <h5 className=" md:text-5xl text-4xl text-white font-medium">
                MD <span className=" text-red-600">MINHAZ</span>
              </h5>
              <h4 className="md:text-2xl text-xl font-medium">
                MERN STACK DEVELOPER
              </h4>
              <h3>
                ...................................................................................................
              </h3>
              <p className="mt-8 font-medium">
                I have 2 years of experience working in the Web Development
                field. I have achieved recommendation, with very inquisitive and
                dedicated., and I am confident I can achieve similar results for
                your Company. I am a natural curiosity and Patience. I am
                looking for an opportunity to Constantly learn and improve, keep
                up to date with the industry, and develop MERN Stack and near
                future updated technology, while offering expertise in Web
                development.
              </p>
              <button
                className="text-base font-medium focus:bg-gray-900 text-white flex items-center gap-3 bg-red-600 px-10 py-2 rounded-3xl mt-6 hover:bg-blue-600 duration-500 "
                type="button"
                onClick={() => setShowModal(true)}
              >
                Find more <BsArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
