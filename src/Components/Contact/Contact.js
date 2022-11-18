import emailjs from "emailjs-com";
import AOS from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import ScrollToTop from "react-scroll-to-top";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  });

  function onSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmailMessage",
        "template_n7s66zn",
        e.target,
        "user_JYf3GchBoPDlzJ5tKJYqC"
      )
      .then(
        (result) => {
          alert("message send successful !");
        },
        (error) => {}
      );
    e.target.reset();
  }
  return (
    <div className="bg-gray-900 "  >
      <div className="container mx-auto md:px-0  ">
        <ScrollToTop smooth top="20" style={{ paddingLeft: "5px" }} />
        <div className="pt-5">
        <div className="flex justify-center " data-aos="zoom-in-up">
            <h2 className="text-center text-5xl pt-8 text-white font-medium border-b-4 border-red-800 inline-block">
             Contact <span className="text-red-600">with me </span>
            </h2>
           </div>
        </div>

        <div data-aos="zoom-in-up" className="grid  sm:grid-cols-1 md:grid-cols-2 gap-2 mt-8 py-16">
          <div  >
           <div className="flex justify-center">
           <img
             className="w-72" src="https://i.ibb.co/C0hKvw1/rvb-de-base-185361734-removebg-preview.png"
              alt=""
            />
           </div>
           <h4 className="text-2xl text-center mt-12 font-medium text-white ">Email: minhazpro1@gmail.com</h4>
       
          </div>
          <div   className="   p-8">
            <form onSubmit={onSubmit}>
              <input
                className=" border-4 w-full px-1 rounded-3xl  "
                name="name"
                required
                type="text"
                placeholder="Name"
              />
              <br />
              <input
                className="my-3 border-4 w-full px-1 rounded-3xl "
                name="email"
                required
                type="email"
                placeholder="Email"
              />
              <br />
              <textarea
                className="mb-3 border-4 w-full px-1  rounded-3xl "
                style={{ height: "160px" }}
                type="text"
                name="message"
                placeholder="Message"
                required
              />
              <br />
              <input
                className="w-full bg-green-400 rounded-3xl text-white  py-1 rounded cursor-allowed cursor-pointer"
                type="submit"
                value="Send message"
              />
            </form>
          </div>
       
        </div>
        
        
      </div>
    
    </div>
  );
};

export default Contact;
