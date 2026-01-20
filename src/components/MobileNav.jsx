import React from "react";
import { Link } from "react-router-dom";

function MobileNav({ nav }) {
  const mobileNav = [...nav, "Book a lesson now"];
  return (
    <div className="w-[90%] m-auto flex-col justify-center items-center absolute top-18 right-3 left-3 bg-white text-center p-6">
      {mobileNav.map((nav) => {
        const ctaStyle =
          nav === "Book a lesson now"
            ? "text-base font-semibold px-6 py-4 bg-white text-blue-600 rounded-4xl hover:text-white hover:bg-blue-600"
            : "text-black ";

        return (
          <li
            key={nav}
            className={` list-none p-2 text-base hover:rounded-xl transition-all ease-in-out duration-400 hover:scale-105 ${ctaStyle}`}
          >
            <Link to={`/${nav}`}>{nav}</Link>
          </li>
        );
      })}
    </div>
  );
}

export default MobileNav;
