import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { id: 1, name: "Home", href: "#home" },
    { id: 2, name: "About", href: "#about" },
    { id: 3, name: "Projects", href: "#project" },
    { id: 4, name: "Experience", href: "#experience" },
    { id: 5, name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-zinc-800 font-montserrat">
        <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#home"
              className="flex items-center gap-3 group"
            >
              <div className="relative">
                <img
                  src="/home..jpg"
                  alt="Arun"
                  className="w-11 h-11 rounded-full object-cover border-2 border-zinc-700 group-hover:border-green-500 transition-all duration-300"
                />

                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-black rounded-full"></span>
              </div>

              <div>
                <h1 className="text-white text-lg font-bold tracking-wide">
                  Arun <span className="text-green-500">Meena</span>
                </h1>

                <p className="text-zinc-400 text-xs">
                  MERN Stack Developer
                </p>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-2">
              {navLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="relative px-5 py-2 text-zinc-300 hover:text-green-400 transition-all duration-300 rounded-xl hover:bg-zinc-900"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden bg-zinc-900 border border-zinc-800 p-3 rounded-xl text-white hover:border-green-500 transition-all duration-300"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-20 left-0 w-full bg-black/95 backdrop-blur-xl border-b border-zinc-800 z-40 transition-all duration-300 ${
          menuOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-5 invisible"
        }`}
      >
        <nav className="flex flex-col px-6 py-6 gap-3">
          {navLinks.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-zinc-300 hover:text-green-400 hover:bg-zinc-900 px-4 py-3 rounded-xl transition-all duration-300"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}

export default Navbar;