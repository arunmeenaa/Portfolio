import React from "react";
import { motion } from "framer-motion";
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
    {  id: 1,
       logo: html,
       name: "HTML"
      },
    { id: 2,
      logo: css,
      name: "CSS"
    },
    { id: 3,
      logo: javascript,
      name: "JavaScript" 
    },
    { id: 4,
      logo: nodejs,
      name: "NodeJS"
    },
    { id: 5,
      logo: c,
      name: "C" 
    },
    { id: 6,
      logo: cc,
      name: "C++" 
    },
    { id: 7,
      logo: java,
      name: "Java" 
    },
    { id: 8,
      logo: sql,
      name: "SQL" 
    },
  ];

  return (
    <div
      id="experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 pt-28"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <span>I have more than 2 years of experience in the below Technologies</span>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }, index) => (
            <motion.div
              key={id}
              className="flex flex-col items-center justify-center md:w-[200px] md:h-[200px] border-[2px] rounded-full p-1 cursor-pointer hover:scale-105 duration-300"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={logo}
                className="w-[150px] p-1 rounded-full"
                alt={name}
              />
              <div className="font-semibold">{name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
