import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      
      <div className=" top-0 fixed left-0 w-full bg-white font-montserrat flex justify-between shadow-sm border-b p-3 z-50">
        <div className="flex items-center gap-1">
          <img
            className="rounded-full object-cover w-8 h-8"
            src="/home..jpg"
            alt="Logo"
          />
          <h2 className="font-bold flex font-montserrat">Arun</h2>
        </div>

        <ul className="hidden md:flex items-center gap-6 pr-6">
          <li><a href="#home" className="hover:text-blue-500">Home</a></li>
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#project" className="hover:text-blue-500">Projects</a></li>
          <li><a href="#experience" className="hover:text-blue-500">Experience</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>

        
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1 pr-4"
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      <div className={`md:hidden flex flex-col gap-4 bg-white shadow-md p-4 border-t fixed top-14 left-0 w-full z-40 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}>
      <ul
        
      >
        <li>
          <a
            href="#home"
            className="hover:text-blue-500"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="hover:text-blue-500"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#project"
            className="hover:text-blue-500"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className="hover:text-blue-500"
            onClick={() => setMenuOpen(false)}
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="hover:text-blue-500"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </li>
      </ul>
      </div>
    </div>
  );
}

export default Navbar;
