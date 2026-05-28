import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, FolderCode } from "lucide-react";


import supply from "/supplyy.png";

import helpNet from "/helpNet.png"

function Project() {
  const cardItem = [
   

    {
      id: 1,
      golink: "https://supply-chain-gilt.vercel.app/",
      logo: supply,
      name: "Supply Chain Management",
      detail:
        "A web-based supply chain management platform designed to streamline the movement of goods, suppliers, and customer operations efficiently.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/arunmeenaa/Supply-Chain",
    },

    {
      id: 2,
      golink: "https://help-net-chi.vercel.app/",
      logo: helpNet,
      name: "HelpNet",
      detail:
        "HelpNet is a community-driven web application designed to connect apartment complex residents for mutual assistance, allowing neighbors to post and fulfill local requests or help offers.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/arunmeenaa/helpNet",
    },
  ];

  return (
    <section
      id="project"
      className="bg-black text-white py-24 px-4 md:px-10 lg:px-20 font-montserrat"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-green-500 uppercase tracking-widest font-semibold mb-3">
            My Work
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Featured <span className="text-green-500">Projects</span>
          </h1>

          <p className="text-zinc-400 text-lg max-w-3xl leading-8">
            Here are some of the projects I’ve built using modern web
            technologies. These projects reflect my skills in frontend
            development, backend integration, and responsive UI design.
          </p>

          <div className="w-24 h-1 bg-green-500 rounded-full mt-6"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {cardItem.map(
            ({ id, logo, name, detail, link, golink, tech }, index) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-green-500/40 transition-all duration-300 shadow-2xl"
              >
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <div className="absolute top-4 right-4 z-10 bg-black/70 backdrop-blur-md p-3 rounded-2xl border border-zinc-700">
                    <FolderCode className="text-green-500" size={20} />
                  </div>

                  <img
                    src={logo}
                    alt={name}
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h2 className="text-2xl font-bold mb-4">
                    {name}
                  </h2>

                  <p className="text-zinc-400 leading-7 text-sm md:text-base mb-6">
                    {detail}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {tech.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-sm text-zinc-300 hover:border-green-500 hover:text-green-400 transition-all duration-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.a
                      href={golink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-green-500 hover:bg-green-400 text-black font-semibold py-3 rounded-2xl flex items-center justify-center gap-2 transition-all duration-300"
                    >
                      Live Demo
                      <ExternalLink size={18} />
                    </motion.a>

                    <motion.a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 border border-zinc-700 hover:border-green-500 text-white hover:text-green-400 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all duration-300"
                    >
                      Source Code
                     <img
  src="/github.svg"
  alt="GitHub"
  className="w-4 h-4 object-contain invert"
/>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Project;