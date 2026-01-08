import React from "react";
import { Link } from "react-router-dom";

function MobileNav({ nav }) {
  const mobileNav = [...nav, "Book a Session"];

  return (
    <div className="w-full flex-col justify-center items-center absolute top-18 right-5 left-0 bg-white text-center p-6">
      {mobileNav.map((nav) => (
        <li
          key={nav}
          className="list-none p-2 lg:text-[18px] hover:bg-blue-200 hover:rounded-xl transition-all ease-in-out hover:translate-y-3"
        >
          <Link to={`/${nav}`}>{nav}</Link>
        </li>
      ))}
    </div>
  );
}

export default MobileNav;
