/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import About from "../About/About";
import Blogs from "../Blogs/Blogs";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Home = () => {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 2000,
      easing: "ease",
    });
  });
  return (
    <div className=" overflow-hidden" id="section1">
      <div data-aos="zoom-in-up">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/md-minhaz/"
          className=" mt-32 m-1 fixed   "
        >
          <i
            style={{ color: "#2867B2" }}
            className="fab fa-linkedin text-3xl "
          ></i>
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/minhazpro3"
          className=" mt-40 m-1 fixed   "
          style={{ color: "#ffffffff" }}
        >
          <i className="fab fa-github-square text-3xl "></i>
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/minhaz.moyna/"
          className=" mt-48 m-1 fixed   "
        >
          <i
            className="fab fa-facebook-square text-3xl "
            style={{ color: "#4267B2" }}
          ></i>
        </a>
      </div>
      <nav className="w-full bg-indigo-800	 ">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 ">
          <div>
            <div className="flex items-center justify-between py-4 md:py-4 md:block">
              <a href="https://minhaz-web.netlify.app/">
                <h2 className="text-2xl font-bold text-white">MD MINHAZ</h2>
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center">
              <div
                className={`pb-3 mt-4 md:block md:pb-0 md:mt-0    ${
                  navbar ? "block" : "hidden"
                }`}
              >
                <ul className="     space-y-8 md:flex md:space-x-6 md:space-y-0">
                  <li className="text-white text-center hover:text-indigo-200">
                    <a className="font-medium" href="#home">
                      Home
                    </a>
                  </li>
                  <li className="text-white text-center hover:text-indigo-200">
                    <a className="font-medium" href="#projects">
                      Projects
                    </a>
                  </li>

                  <li className="text-white text-center hover:text-indigo-200">
                    <a className="font-medium" href="#blogs">
                      Blogs
                    </a>
                  </li>
                  <li className="text-white text-center hover:text-indigo-200">
                    <a className="font-medium" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>

                <div className="mt-3 space-y-2 py-4 lg:hidden md:inline-block">
                  <a
                    className="rounded-full bg-red-800 text-white  py-3 px-8 "
                    href="https://drive.google.com/file/d/1Lmwgm2vYZblFfTocGtT8GgvxXJe8-GpA/view?usp=sharing"
                    target="_blank"
                  >
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden space-x-2 md:inline-block">
            <a
              className="rounded-full bg-blue-400 hover:text-indigo-700 hover:bg-white font-medium text-white  py-3 px-8 "
              href="https://drive.google.com/file/d/1Lmwgm2vYZblFfTocGtT8GgvxXJe8-GpA/view?usp=sharing"
              target="_blank"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>
      <div>
        <div>
          <About navbar={navbar} />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="blogs">
          <Blogs />
        </div>
        <div id="contact">
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
