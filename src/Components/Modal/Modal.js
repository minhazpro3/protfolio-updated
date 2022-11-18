/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { BsArrowRight } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { MdLocationPin } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { BsDownload } from "react-icons/bs";

const Modal = ({ setShowModal }) => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div>
      <div
        data-aos="zoom-in-up"
        className="justify-center items-center top-0 left-0  w-full h-full outline-none  overflow-y-auto inset-0 z-50   focus:outline-none modal fade fixed "
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl ">
          <div className=" bg-black opacity-90 flex   ">
            <div className=" container mx-auto px-8 md:px-0 ">
              <div className=" grid md:grid-cols-12 gap-8 mx-8 my-4 pt-4 pb-6 ">
                <div className="md:col-span-5">
                  <div>
                    <div>
                      <img
                        className=" rounded-3xl w-36"
                        src="https://i.ibb.co/dQTk2t7/cs-2-removebg-preview.png"
                        alt=""
                      />
                    </div>
                    <h3 className=" text-white font-medium text-4xl">
                      MD <span className=" text-red-600">MINHAZ</span>
                    </h3>
                    <h4 className="text-white text-xl font-medium">
                      Web Developer
                    </h4>
                    <div>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/md-minhaz/"
                        className=" "
                      >
                        <i
                          style={{ color: "#2867B2" }}
                          className="fab fa-linkedin text-xl "
                        ></i>
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/minhazpro3"
                        className=" m-3"
                        style={{ color: "#ffffffff" }}
                      >
                        <i className="fab fa-github-square text-xl "></i>
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.facebook.com/minhaz.moyna/"
                        className=""
                      >
                        <i
                          className="fab fa-facebook-square text-xl "
                          style={{ color: "#4267B2" }}
                        ></i>
                      </a>
                    </div>
                    <div className="mt-3">
                      <h3 className=" text-white font-medium text-base flex items-center gap-2 opacity-70">
                        <span className=" text-red-600">
                          {" "}
                          <CgProfile />
                        </span>{" "}
                        Md Minhaz
                      </h3>
                      <p className="text-white text-base font-medium opacity-50">
                        ------------------------------------
                      </p>
                      <h3 className=" text-white font-medium text-base flex items-center gap-2 opacity-70">
                        <span className=" text-red-600">
                          {" "}
                          <MdLocationPin />
                        </span>{" "}
                        Sherpur, Bogra, Rajshahi
                      </h3>
                      <p className="text-white text-base font-medium opacity-50">
                        ------------------------------------
                      </p>
                      <h3 className=" text-white font-medium text-base flex items-center gap-2 opacity-70">
                        <span className=" text-red-600">
                          {" "}
                          <IoIosCall />
                        </span>{" "}
                        (+88) 01737-833726
                      </h3>
                      <p className="text-white text-base font-medium opacity-50">
                        ------------------------------------
                      </p>
                      <h3 className=" text-white font-medium mb-12 text-base flex items-center gap-2 opacity-70">
                        <span className=" text-red-600">
                          {" "}
                          <HiOutlineMail />
                        </span>{" "}
                        minhazpro1@gmail.com
                      </h3>

                      <a
                        className="rounded-full flex items-center justify-center gap-4 bg-red-600 hover:text-indigo-700 hover:bg-white font-medium text-white  py-3  "
                        href="https://drive.google.com/file/d/1Lmwgm2vYZblFfTocGtT8GgvxXJe8-GpA/view?usp=sharing"
                        target="_blank"
                      >
                        Resume <BsDownload />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-7">
                  <div>
                    <h2 className="text-white font-medium text-2xl ">
                      About <span className="text-red-600">Me</span>
                    </h2>
                    <p className="text-white text-base font-medium opacity-70">
                      -----------------------------------------------------------
                    </p>
                    <p className="text-white text-base font-medium opacity-70">
                      {" "}
                      My name is Md Minhaz. I am a Web Developer, and I'm very
                      passionate and dedicated to my work. With 2 years
                      experience as a professional a Web Developer , I have
                      acquired the skills and knowledge.
                    </p>
                  </div>
                  <div className="mt-12">
                    <h3 className="text-white font-medium text-2xl ">
                      Quality <span className="text-red-600">Services</span>
                    </h3>
                    <p className="text-white text-base font-medium opacity-70">
                      -----------------------------------------------------------
                    </p>

                    <h4 className="text-white font-medium text-xl flex items-center gap-3">
                      <BsArrowRight /> ReactJs Development
                    </h4>
                    <h4 className="text-white font-medium text-xl flex items-center gap-3">
                      <BsArrowRight /> Front End Development
                    </h4>
                    <h4 className="text-white font-medium text-xl flex items-center gap-3">
                      <BsArrowRight /> Mern Stack Development
                    </h4>
                  </div>
                  <div className="mt-12">
                    <h3 className="text-white font-medium text-2xl ">Skills</h3>
                    <p className="text-white text-base font-medium opacity-70">
                      -----------------------------------------------------------
                    </p>
                    <p className="text-white font-medium text-base">
                      Html5, Css3, React Bootstrap, TailwindCss, JavaScript,
                      React.js, Node.js, Mongodb, Express.js, Firebase, RestApi,
                      MsWord, MsExcel, Photoshop, Illustrator.
                    </p>
                  </div>
                  <div className="relative">
                    <button
                      className="text-red-500 background-transparent font-bold  uppercase  py-2 text-sm outline-none focus:outline-none absolute md:right-4   mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
