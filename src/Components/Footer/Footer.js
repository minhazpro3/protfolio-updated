/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from "react";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import AOS from "aos";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className=" flex justify-center  bg-gray-900 bg-opacity-96">
      <div className=" container mx-auto md:px-0 px-8">
        <div className="my-20" data-aos="zoom-in-up">
          <div className="  md:flex justify-evenly   gap-x-36 space-y-16 md:space-y-0 items-stretch">
            <div className=" space-y-2 text-white ">
              <h5 className="flex space-x-4 text-xl ">
                <BsTelephoneFill /> <span>+8801737-833726</span>
              </h5>
              <h5 className=" flex space-x-4 text-xl ">
                <MdEmail /> <span>minhazpro1@gmail</span>
              </h5>
              <h5 className=" flex space-x-4 text-xl ">
                <ImLocation2 />
                <span> Bogura, Bangladesh</span>
              </h5>
            </div>
            <div className="self-end">
              <div className="flex justify-around items-center space-x-6 pt-2">
                <h5 className="text-xl font-medium text-white hover:text-blue-400 hover:cursor-pointer">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/minhaz.moyna/"
                  >
                    <BsFacebook />
                  </a>
                </h5>
                <h5 className="text-xl font-medium text-white hover:text-blue-400 hover:cursor-pointer">
                  <a target="_blank" href="https://github.com/minhazpro3">
                    <BsGithub />
                  </a>
                </h5>
                <h5 className="text-xl font-medium text-white hover:text-blue-400 hover:cursor-pointer">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/md-minhaz/"
                  >
                    <BsLinkedin />
                  </a>
                </h5>
                <h5 className="text-xl font-medium text-white hover:text-blue-400 hover:cursor-pointer">
                  <a
                    target="_blank"
                    href="https://www.instagram.com/minhaz_dev/"
                  >
                    <BsInstagram />
                  </a>
                </h5>
                <h5 className="text-xl font-medium text-white hover:text-blue-400 hover:cursor-pointer">
                  <BsTwitter />
                </h5>
              </div>

              <h3 className="text-center hidden md:block my-4 underline text-white font-medium   ">
                Term && Condition
              </h3>
              <h3 className="text-center hidden md:block   text-white font-medium   ">
                Copyright ©Md Minhaz-2023
              </h3>
            </div>
            <div>
              <input
                className="w-full outline-none py-2 px-2 rounded-full"
                type="email"
                placeholder="E-mail"
                require
              />
              <button className="text-white px-3   text-center py-2 w-full rounded-full my-2 bg-green-600">
                Subscribe
              </button>
            </div>
          </div>

          <h3 className="text-center md:hidden text-white font-medium mb-8 md:mb-0 ">
            Copyright ©Md Minhaz-2023
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
