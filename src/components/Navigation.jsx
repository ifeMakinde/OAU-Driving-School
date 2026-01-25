import React from "react";
import { useState } from "react";
import { Car, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

import MobileNav from "./MobileNav";
import Logo from "./Logo";

// const navLinks = ["About", "Courses", "Review", "FAQ"];
const navLinks = [
  { link: "About", href: "#" },
  { link: "Courses", href: "#pricing" },
  { link: "Review", href: "#review" },
  { link: "FAQ", href: "#faq" },
];

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function handleClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div
      className="w-full h-16 fixed top-0 left-0  right-0 lg:right-5 z-10 bg-[#f9fbfd] "
      id="nav"
    >
      <div className=" max-w-[95%] lg:max-w-[90%] m-auto flex justify-between items-center p-4 border-transparent ">
        {/* logo */}
        <Link to="/">
          <Logo />
        </Link>

        {/* desktop navlinks */}
        <nav className=" hidden lg:flex justify-between items-center gap-4  ">
          {navLinks.map((navLink) => (
            <li
              key={navLink.link}
              className="list-none transition-all text-gray-600 hover:text-blue-600 duration-200 hover:scale-110 "
            >
              <a href={navLink.href}>{navLink.link}</a>
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
