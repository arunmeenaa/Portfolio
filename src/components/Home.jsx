import React from "react";
import { ArrowRight, Download } from "lucide-react";

function Home() {
  const socialLinks = [
    {
      id: 1,
      img: "/linkedin (1).png",
      alt: "LinkedIn",
      link: "https://www.linkedin.com/in/arunmeena0312?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      id: 2,
      img: "/instagram.png",
      alt: "Instagram",
      link: "https://www.instagram.com/arunmeenaa___?igsh=MXIycmxwbHU2ZnZuMw==",
    },
    {
      id: 3,
      img: "/telegram.png",
      alt: "Telegram",
      link: "https://t.me/arunmeena_17",
    },
    {
      id: 4,
      img: "/whatsapp.png",
      alt: "WhatsApp",
      link: "https://wa.me/",
    },
  ];

  const techStack = [
    "/mongodb.png",
    "/expressjs.svg",
    "/reactt.png",
    "/programing.png",
  ];

  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white font-montserrat flex items-center px-4 md:px-10 lg:px-20 py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="order-2 lg:order-1">
          {/* Small Intro */}
          <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-5 py-2 rounded-full text-sm text-green-400 mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Available for Opportunities
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="text-green-500">Arun Meena</span>
          </h1>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-zinc-300 mt-4">
            MERN Stack Developer
          </h2>

          {/* Description */}
          <p className="text-zinc-400 leading-8 text-lg mt-8 max-w-2xl">
            Passionate Web Developer focused on building responsive,
            user-friendly, and scalable web applications using modern MERN Stack
            technologies. I enjoy turning ideas into real digital experiences
            with clean UI and efficient backend architecture.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">
            <a
              href="#contact"
              className="bg-green-500 hover:bg-green-400 text-black font-semibold px-7 py-3 rounded-2xl flex items-center gap-2 transition-all duration-300"
            >
              Contact Me
              <ArrowRight size={18} />
            </a>

            <a
  href="/Arun Meena Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="border border-zinc-700 hover:border-green-500 text-white px-7 py-3 rounded-2xl flex items-center gap-2 transition-all duration-300 hover:text-green-400"
>
  Resume
  <Download size={18} />
</a>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-16">
            {/* Socials */}
            <div>
              <h3 className="text-xl font-semibold mb-5">
                Connect With Me
              </h3>

              <div className="flex items-center gap-4">
                {socialLinks.map((item) => (
                  <a
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-900 border border-zinc-800 hover:border-green-500/50 p-4 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="w-6 h-6 object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-xl font-semibold mb-5">
                Tech Stack
              </h3>

              <div className="flex items-center gap-4 flex-wrap">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-zinc-900 border border-zinc-800 hover:border-green-500/50 p-4 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <img
                      src={tech}
                      alt="tech"
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
          {/* Glow */}
          <div className="absolute w-72 h-72 md:w-[420px] md:h-[420px] bg-green-500/20 blur-[120px] rounded-full"></div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 rounded-[40px] border border-green-500/20"></div>

            <img
              src="/home..jpg"
              alt="Arun Meena"
              className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[430px] lg:h-[500px] object-cover rounded-[40px] border border-zinc-800 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;