import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  FileCode2,
  Server,
  Braces,
} from "lucide-react";

import java from "../../public/java.svg";
import c from "../../public/c.svg";
import cc from "../../public/c++.svg";
import html from "../../public/html.svg";
import css from "../../public/css.svg";
import javascript from "../../public/javascript.svg";
import nodejs from "../../public/nodejs.svg";
import sql from "../../public/sql.png";

function Experience() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
      icon: <FileCode2 size={18} />,
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
      icon: <FileCode2 size={18} />,
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
      icon: <Braces size={18} />,
    },
    {
      id: 4,
      logo: nodejs,
      name: "NodeJS",
      icon: <Server size={18} />,
    },
    {
      id: 5,
      logo: c,
      name: "C",
      icon: <Code2 size={18} />,
    },
    {
      id: 6,
      logo: cc,
      name: "C++",
      icon: <Code2 size={18} />,
    },
    {
      id: 7,
      logo: java,
      name: "Java",
      icon: <Code2 size={18} />,
    },
    {
      id: 8,
      logo: sql,
      name: "SQL",
      icon: <Database size={18} />,
    },
  ];

  return (
    <section
      id="experience"
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
            Technical Skills
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            My <span className="text-green-500">Experience</span>
          </h1>

          <p className="text-zinc-400 text-lg max-w-3xl leading-8">
            Over the past 2+ years, I have worked with various programming
            languages and web technologies to build responsive, scalable, and
            modern applications.
          </p>

          <div className="w-24 h-1 bg-green-500 rounded-full mt-6"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {cardItem.map(({ id, logo, name, icon }, index) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex flex-col items-center justify-center overflow-hidden hover:border-green-500/40 transition-all duration-300 shadow-lg"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-b from-green-500/5 to-transparent"></div>

              {/* Icon Badge */}
              <div className="absolute top-4 right-4 bg-green-500/10 text-green-500 p-2 rounded-xl">
                {icon}
              </div>

              {/* Tech Logo */}
              <div className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center mb-5">
                <img
                  src={logo}
                  alt={name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Skill Name */}
              <h2 className="text-lg md:text-xl font-semibold text-center">
                {name}
              </h2>

              {/* Bottom Accent */}
              <div className="w-0 group-hover:w-16 h-1 bg-green-500 rounded-full mt-4 transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;