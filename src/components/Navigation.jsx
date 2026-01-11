import React from "react";
import { useState } from "react";
import { Car, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

import MobileNav from "./MobileNav";
// import { X } from "lucide-react";

const navLinks = ["About", "Courses", "Review", "FAQ"];

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function handleClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="w-full h-15 bg-[#f8fafc] fixed top-0 left-0  right-0 lg:right-5 z-10  ">
      <div className=" max-w-[95%] lg:max-w-[90%] m-auto flex justify-between items-center p-4 ">
        {/* logo */}
        <Link to="/">
          <div className="flex justify-center items-center gap-2">
            <span className="bg-blue-600 p-2 rounded-md">
              <Car color="white" size={28} strokeWidth={1} />
            </span>
            <h2 className="font-bold text-base lg:text-lg no-wrap tracking-wide">
              OAU <span className=" text-blue-600 font-bold">DRIVING </span>
              SCHOOL
            </h2>
          </div>
        </Link>

        {/* desktop navlinks */}
        <nav className=" hidden lg:flex justify-between items-center gap-4  ">
          {navLinks.map((navLink) => (
            <li
              key={navLink}
              className="list-none transition-all hover:scale-110 "
            >
              <Link to={`/${navLink}`}>{navLink}</Link>
            </li>
          ))}
        </nav>

        <div className="block lg:hidden">
          {isMenuOpen && <MobileNav nav={navLinks} />}
        </div>

        <button
          className="lg:hidden p-2 rounded-md border-gray-400 cursor-pointer"
          onClick={handleClick}
        >
          {!isMenuOpen ? (
            <Menu size={28} strokeWidth={1} />
          ) : (
            <X size={28} strokeWidth={1} />
          )}
        </button>

        {/* <MobileNav /> */}
      </div>
    </div>
  );
}

export default Navigation;
