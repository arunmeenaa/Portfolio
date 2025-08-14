import React from "react";
import soonn from "../../public/soonn.png";
import spotify from "../../public/favicon.ico";
import { motion } from "framer-motion";

function Project() {
  const cardItem = [
    { 
      id: 1, 
      golink:"https://spotify-clone-byarun.vercel.app/",
      logo: spotify, 
      name: "Spotify Clone", 
      detail: "Made with react+tailwind",
      link: "https://github.com/arunmeenaa/SpotifyClone" 
    },
    // { 
    //   id: 2, 
    //   logo: soonn, 
    //   name: "Coming Soon", 
    //   detail: "Will be added on works on under Construction",
    //   // link: ""
    // },
    // { 
    //   id: 3, 
    //   logo: soonn, 
    //   name: "Coming Soon", 
    //   detail: "Will be added on works on under Construction",
    //   // link: ""
    // },
    // { 
    //   id: 4, 
    //   logo: soonn, 
    //   name: "Coming Soon", 
    //   detail: "Will be added on works on under Construction",
    //   // link: ""
    // },
    // { 
    //   id: 5, 
    //   logo: soonn, 
    //   name: "Coming Soon", 
    //   detail: "Will be added on works on under Construction",
    //   // link: ""
    // }
  ];

  return (
    <div
      id="project"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 pt-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl font-bold mb-5">Project</h1>
        <span className="underline font-semibold">Featured Projects</span>
      </motion.div>

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-3 my-5 justify-items-center">
          {cardItem.map(({ id, logo, name, detail, link ,golink }) => (
            <motion.div
              key={id}
              className="w-full sm:w-64 md:w-[300px] h-auto md:h-[300px] border-[2px] rounded-lg shadow-lg p-2 cursor-pointer hover:scale-105 duration-300 flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.img
                src={logo}
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-[120px] md:h-[120px] p-1 rounded-full border-[2px]"
                alt=""
                initial={{ rotate: -5 }}
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.3 }}
              />
              <div className="text-center w-full">
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700 text-sm sm:text-base">{detail}</p>
              </div>
              <div className="px-2 sm:px-6 py-4 flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center w-full">
              <motion.a
                  href={golink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-800 text-white font-bold px-4 py-2 rounded w-full sm:w-auto text-center"
                  whileTap={{ scale: 0.9 }}
                >
                  Try
                </motion.a>
                <motion.a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-800 text-white font-bold px-4 py-2 rounded w-full sm:w-auto text-center"
                  whileTap={{ scale: 0.9 }}
                >
                  Source code
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
