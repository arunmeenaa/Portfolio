import React from "react";

function Navbar() {
  return (
    <div>
      <div className=" fixed left-0 w-full bg-white  font-montserrat flex justify-between shadow-sm  border-b p-3">

         <div className="flex items-center gap-1">
          <img className="  rounded-full object-cover w-8 h-8" src="/home..jpg" alt="Logo" />
          <h2 className=" font-bold flex font-montserrat">Arun</h2>
         </div>

         <ul className=" items-center gap-6 flex flex-row pr-6 ">
         <li><a href="#home" className="hover:text-blue-500">Home</a></li>
        <li><a href="#about" className="hover:text-blue-500">About</a></li>
        <li><a href="#project" className="hover:text-blue-500">Projects</a></li>
        <li><a href="#experience" className="hover:text-blue-500">Experience</a></li>
        <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
         </ul>
      </div>
    </div>
  );
}

export default Navbar;
