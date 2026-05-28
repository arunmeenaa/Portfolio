import React from "react";
import {
  Code2,
  GraduationCap,
  Target,
  Sparkles,
  Users,
} from "lucide-react";

function About() {
  return (
    <section
      id="about"
      className="font-montserrat py-20 px-4 md:px-10 lg:px-20 bg-black text-white"
    >
      {/* Heading */}
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-green-500 font-semibold tracking-widest uppercase mb-3">
            Get To Know Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            About <span className="text-green-500">Me</span>
          </h2>

          <div className="w-24 h-1 bg-green-500 rounded-full mt-5"></div>
        </div>

        {/* Intro Card */}
        <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 md:p-10 shadow-2xl backdrop-blur-sm hover:border-green-500/40 transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-green-500/10 rounded-2xl">
              <Sparkles className="text-green-500" size={28} />
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Passionate MERN Stack Developer
              </h3>

              <p className="text-zinc-300 leading-8 text-[15px] md:text-base">
                Hello, I'm Arun — a passionate Web Developer focused on building
                modern, responsive, and impactful digital experiences using the
                MERN Stack. With a strong background in Information Technology,
                I enjoy transforming ideas into scalable and visually engaging
                software solutions while continuously improving my technical and
                creative skills.
              </p>
            </div>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Education */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-7 hover:-translate-y-1 hover:border-green-500/40 transition-all duration-300">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-3 rounded-xl bg-green-500/10">
                <GraduationCap className="text-green-500" size={24} />
              </div>

              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <p className="text-zinc-300 leading-7">
              Pursuing B.Tech in Information Technology at{" "}
              <span className="text-white font-medium">
                Indore Institute of Science and Technology
              </span>
              , affiliated with{" "}
              <span className="text-white font-medium">
                Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal
              </span>
              . Currently in 3rd Year with a strong focus on software
              development and problem solving.
            </p>
          </div>

          {/* Skills */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-7 hover:-translate-y-1 hover:border-green-500/40 transition-all duration-300">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-3 rounded-xl bg-green-500/10">
                <Code2 className="text-green-500" size={24} />
              </div>

              <h3 className="text-2xl font-bold">Skills & Expertise</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                "C",
                "C++",
                "Java",
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Node.js",
                "MongoDB",
                "SQL",
                "Git",
                "VS Code",
                "Tailwind CSS",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-zinc-800 text-zinc-200 border border-zinc-700 hover:border-green-500 hover:text-green-400 transition-all duration-300 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Mission */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-7 hover:-translate-y-1 hover:border-green-500/40 transition-all duration-300">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-3 rounded-xl bg-green-500/10">
                <Target className="text-green-500" size={24} />
              </div>

              <h3 className="text-2xl font-bold">Mission</h3>
            </div>

            <p className="text-zinc-300 leading-7">
              My goal is to build innovative and user-friendly digital products
              that solve real-world problems. I aim to continuously learn,
              explore modern technologies, and contribute meaningful solutions
              that create a positive impact.
            </p>
          </div>

          {/* Strengths */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-7 hover:-translate-y-1 hover:border-green-500/40 transition-all duration-300">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-3 rounded-xl bg-green-500/10">
                <Users className="text-green-500" size={24} />
              </div>

              <h3 className="text-2xl font-bold">Core Strengths</h3>
            </div>

            <ul className="space-y-4 text-zinc-300">
              {[
                "Problem-solving mindset",
                "Team collaboration",
                "Adaptability & quick learning",
                "Effective communication",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 border-b border-zinc-800 pb-3"
                >
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;