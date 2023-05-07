/* eslint-disable react/jsx-no-target-blank */
import Aos from "aos";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./project.css";
import { Link } from "react-router-dom";

const Projects = () => {
  useEffect(() => {
    Aos.init();
  });
  const project = [
    {
      id: 1,
      img: "https://i.ibb.co/g4hjqZ3/frncOne.png",
      img2: "https://i.ibb.co/tLtDhqQ/frnctwo.png",
      desc: "Freelance Marketplace related like seller & buyer.Seller can create a gig and can publish for service.admin can manage seller and buyer.",
      title: "Workfleek Freelance  (Team Project)",
      live: "https://freelance-marketplace-project-client.vercel.app/",
      client:
        "https://github.com/minhazpro3/freelance-marketplace-project-client",
      server:
        "https://github.com/minhazpro3/freelance-marketplace-project-server",
      technology: "Next.js, Tailwindcss. Node.js, Mongodb",
    },
    {
      id: 2,
      img: "https://i.ibb.co/Mfc7zVn/dpn.png",
      img2: "https://i.ibb.co/J7Hjb8x/dpn-two.png",
      desc: "Responsive MERN Stack Project with firebase authentication. There are also admin site, products management and order conditions with make a new admin, update, delete, add, it will have admin facility. It has a user dashboard and admin dashboard.",
      title: "Life Care Service & shop",
      live: "https://life-care-web.netlify.app/",
      client: "https://github.com/minhazpro3/doctors-appointment-shop-client",
      server: "https://github.com/minhazpro3/doctors-appointment-shop-server",
      technology: "React.js, Tailwindcss. Node.js, Mongodb",
    },
    {
      id: 3,
      img: "https://i.ibb.co/fMv4dLg/honda.png",
      img2: "https://i.ibb.co/w0dmwCX/bike-2.png",
      desc: "Responsive MERN Stack Project with firebase authentication. user can order, cancel order, and admin can update, delete, add, it will have admin facility. ",
      title: "Bike Bazar Shop",
      live: "https://friendly-wescoff-18e7cf.netlify.app/",
      client: "https://github.com/minhazpro3/modern-bike-bazar-Client-site",
      server: "https://github.com/minhazpro3/modern-bike-bazar-server-site",
      technology: "React.js, Bootstrap. Node.js, Mongodb",
    },

    {
      id: 4,
      img: "https://i.ibb.co/wc4V56X/React-App.png",
      img2: "",
      desc: "It's job portal website. candidate can be apply also HR can be Post for Hire candidate for Hired a candidate. so you can try it. ",
      title: "Will Jobs",
      live: "https://gentle-beijinho-70e4e6.netlify.app/login",
      client: "https://github.com/minhazpro3/find-dream-job-client",
      server: "https://github.com/minhazpro3/power-hack-server",
      technology:
        "React.js, Redux-RTK, MeterialUi, node.js, express.js, mongodb ",
    },
    {
      id: 5,
      img: "https://i.ibb.co/vXvYc3C/berg.png",
      img2: "https://i.ibb.co/TB3gR2f/berger-f-2.png",
      desc: "Responsive Psd to html Berger Hunt template. altho It's has used Bootstrap, Css3, Html5. It was a task for responsive. so that I can understand about responsive.",
      title: "Berger Hunt",
      live: "https://agitated-wright-fd42a7.netlify.app/",
      client:
        "https://github.com/minhazpro3/web-template-burger-resturent-html",
      server: "No",
      technology: "Html5, Css3. Bootstrap",
    },
    {
      id: 6,
      img: "https://i.ibb.co/RHZNtY4/React-App-1.png",
      img2: "",
      desc: "By using Cropper. js library you can do live crop of image, resize of image at the time of upload of image. In this post we have use Cropper. js jQuery plugin for Crop and Resize image",
      title: "Image Crop and upload",
      live: "https://whimsical-mermaid-7a73d5.netlify.app/",
      client: "https://github.com/minhazpro3/image-upload-front-end-react",
      server: "No",
      technology: "React, Bootstrap, react-easy-crop",
    },
    {
      id: 7,
      img: "https://i.ibb.co/xmR8QrC/React-App-2.png",
      img2: "",
      desc: "Temp description: is an online volunteer management solution that helps non-profit organizations streamline employee scheduling. ",
      title: " Signup progress",
      live: "https://musical-bavarois-4c489d.netlify.app/",
      client: "https://github.com/minhazpro3/signup-progress-client",
      server: "https://github.com/minhazpro3/signup-progress-server",
      technology: "React, css, node, mongodb, express, axios",
    },
    {
      id: 7,
      img: "https://i.ibb.co/dgYkHP8/Learn-with-5-G-1.png",
      img2: "",
      desc: "Temp description: is an online volunteer management solution that helps non-profit organizations streamline employee scheduling.",
      title: " Signup progress",
      live: "https://romantic-education-06c0bc.netlify.app/home",
      client: "https://github.com/minhazpro3/Assignment-Eight",
      server: "No",
      technology: "React, Css, React-router ",
    },
  ];
  const navigate = useLocation();
  if (navigate.pathname === "/") {
    return (
      <div className=" bg-gray-900">
        <div className="container mx-auto px-8 md:px-0  pt-10">
          <div>
            <div className="flex justify-center " data-aos="zoom-in-up">
              <h2 className="text-center text-5xl my-12 text-white font-medium border-b-4 border-red-800 inline-block">
                My <span className="text-red-600">Projects </span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2   pb-16 justify-center">
              {project.slice(0, 4).map((x) => (
                <div data-aos="zoom-in-up" className=" 2  ">
                  <div className="flex justify-center mt-12">
                    <div
                      style={{ height: "500px" }}
                      className="max-w-sm bg-gray-800 text-white rounded overflow-hidden shadow-lg "
                    >
                      <div className="flex justify-center hover:pro_img_div">
                        <img
                          className="w-full h-60 pro_img"
                          src={x.img}
                          alt="Sunset in the mountains"
                        />
                      </div>
                      <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{x.title}</div>
                        <p className="text-white text-base">
                          {x.desc.slice(0, 130)}
                        </p>
                        <p className="text-blue-400 font-medium">
                          {" "}
                          Uses: {x.technology}
                        </p>
                      </div>
                      <div className=" border-2 border-white mx-5"></div>
                      <div className="px-6 pt-4 pb-2">
                        <a href={x.live} target="_blank">
                          <button className="inline-block bg-gray-200 rounded-full px-6 py-1 text-sm font-semibold text-black mr-2 mb-2">
                            Live
                          </button>
                        </a>
                        {x.server === "No" ? (
                          // eslint-disable-next-line react/jsx-no-target-blank
                          <a href={x.client} target="_blank">
                            <button className="inline-block bg-gray-200 rounded-full px-4 py-1 text-sm font-semibold text-black mr-2 mb-2">
                              Code
                            </button>
                          </a>
                        ) : (
                          // eslint-disable-next-line react/jsx-no-target-blank
                          <a target="_blank" href={x.client}>
                            <button className="inline-block bg-gray-200 rounded-full px-4 py-1 text-sm font-semibold text-black mr-2 mb-2">
                              Client
                            </button>
                          </a>
                        )}
                        {x.server === "No" ? (
                          " "
                        ) : (
                          // eslint-disable-next-line react/jsx-no-target-blank
                          <a target="_blank" href={x.server}>
                            {" "}
                            <button className="inline-block bg-gray-200 rounded-full px-4 py-1 text-sm font-semibold text-black mr-2 mb-2">
                              Server
                            </button>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-right mx-5 md:mx-10">
            <Link
              to="/projects"
              className="text-white decoration-none hover:bg-blue-400  transition-all duration-300  bg-blue-600 px-8 py-2 text-xl"
            >
              More Projects
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className=" bg-gray-900 sticky top-0">
        <div className="container mx-auto px-8 md:px-0  pt-10">
          <div>
            <div className="flex justify-center " data-aos="zoom-in-up">
              <h2 className="text-center text-5xl my-12 text-white font-medium border-b-4 border-red-800 inline-block">
                My <span className="text-red-600">Projects </span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2   pb-16 justify-center">
              {project.map((x) => (
                <div data-aos="zoom-in-up" className=" 2 ">
                  <div className="flex justify-center mt-12">
                    <div
                      style={{ height: "500px" }}
                      className="max-w-sm bg-gray-800 text-white rounded overflow-hidden shadow-lg"
                    >
                      <div className="flex justify-center hover:pro_img_div">
                        <img
                          className="w-full h-60 pro_img"
                          src={x.img}
                          alt="Sunset in the mountains"
                        />
                      </div>
                      <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{x.title}</div>
                        <p className="text-white text-base">
                          {x.desc.slice(0, 130)}
                        </p>
                        <p className="text-blue-400 font-medium">
                          {" "}
                          Uses: {x.technology}
                        </p>
                      </div>
                      <div className=" border-2 border-white mx-5"></div>
                      <div className="px-6 pt-4 pb-2">
                        <a href={x.live} target="_blank">
                          <button className="inline-block bg-gray-200 rounded-full px-6 py-1 text-sm font-semibold text-black mr-2 mb-2">
                            Live
                          </button>
                        </a>
                        {x.server === "No" ? (
                          // eslint-disable-next-line react/jsx-no-target-blank
                          <a href={x.client} target="_blank">
                            <button className="inline-block bg-gray-200 rounded-full px-4 py-1 text-sm font-semibold text-black mr-2 mb-2">
                              Code
                            </button>
                          </a>
                        ) : (
                          // eslint-disable-next-line react/jsx-no-target-blank
                          <a target="_blank" href={x.client}>
                            <button className="inline-block bg-gray-200 rounded-full px-4 py-1 text-sm font-semibold text-black mr-2 mb-2">
                              Client
                            </button>
                          </a>
                        )}
                        {x.server === "No" ? (
                          " "
                        ) : (
                          // eslint-disable-next-line react/jsx-no-target-blank
                          <a target="_blank" href={x.server}>
                            {" "}
                            <button className="inline-block bg-gray-200 rounded-full px-4 py-1 text-sm font-semibold text-black mr-2 mb-2">
                              Server
                            </button>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
