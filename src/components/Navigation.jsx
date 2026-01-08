import React from "react";
import { useState } from "react";
import { Car, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

import MobileNav from "./MobileNav";
// import { X } from "lucide-react";

const navLinks = ["About", "Courses", "Review", "FAQ"];

console.log(navLinks);
function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function handleClick() {
    console.log("clicked");
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="flex justify-between items-center pt-4  relative ">
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
  );
}

export default Navigation;
