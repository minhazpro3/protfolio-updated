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
    <div className=" overflow-hidden " id="section1">
      <div data-aos="zoom-in-up" className=" fixed mt-24 md:mt-36">
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

      <div>
        <div>
          <About />
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
