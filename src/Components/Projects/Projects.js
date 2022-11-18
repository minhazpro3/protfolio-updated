/* eslint-disable react/jsx-no-target-blank */
import Aos from "aos";
import React, { useEffect } from "react";
import "./project.css";

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
      title: "Workfleek Freelance Marketplace",
      live: "https://freelance-marketplace-project-client.vercel.app/",
      client:
        "https://github.com/minhazpro3/freelance-marketplace-project-client",
      server:
        "https://github.com/minhazpro3/freelance-marketplace-project-server",
      technology: "Next.js, Tailwindcss. Node.js, Mongodb, Socket.io",
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
  ];
  return (
    <div>
      <div className=" bg-gray-900">
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
                    <div className="max-w-sm bg-gray-800 text-white rounded overflow-hidden shadow-lg">
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
