import React from "react";
import {
  Send,
  MessageCircle,
  Heart,
} from "lucide-react";

function Footer() {
  const socialLinks = [
   {
  id: 1,
  icon: (
    <img
      src="/ig.svg"
      alt="Instagram"
      className="w-5 h-5 object-contain invert"
    />
  ),
  link: "https://www.instagram.com/arunmeenaa___?igsh=MXIycmxwbHU2ZnZuMw==",
  name: "Instagram",
},
    {
    id: 2,
    icon: (
      <img
        src="/tg.svg"
        alt="Telegram"
        className="w-5 h-5 object-contain invert"
      />
    ),
    link: "https://t.me/arunmeena_17",
    name: "Telegram",
  },

  {
    id: 3,
    icon: (
      <img
        src="/wp.svg"
        alt="WhatsApp"
        className="w-5 h-5 object-contain invert"
      />
    ),
    link: "https://wa.me/",
    name: "WhatsApp",
  },
   {
  id: 4,
  icon: (
    <img
      src="/lkdn.svg"
      alt="LinkedIn"
      className="w-5 h-5 object-contain invert"
    />
  ),
  link: "https://www.linkedin.com/in/arunmeena0312",
  name: "LinkedIn",
},
  ];

  return (
    <footer className="bg-black text-white border-t border-zinc-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 py-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">
              Arun <span className="text-green-500">Meena</span>
            </h2>

            <p className="text-zinc-400 mt-3 max-w-md leading-7">
              Passionate MERN Stack Developer focused on building responsive,
              modern, and user-friendly web applications.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ id, icon, link, name }) => (
              <a
                key={id}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="group p-4 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-green-500/50 hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-zinc-300 group-hover:text-green-500 transition-colors duration-300">
                  {icon}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-zinc-800 my-10"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
          <p>
            © 2026 Arun Meena. All rights reserved.
          </p>

          <p className="flex items-center gap-2">
            Built with <Heart size={16} className="text-green-500" /> using
            React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;