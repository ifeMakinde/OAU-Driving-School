import React from "react";
import { Link } from "react-router-dom";

function MobileNav({ nav }) {
  const mobileNav = [...nav, "book a session"];

  return (
    <div className="w-full flex-col justify-center items-center absolute top-20 right-30 left-3 bg-white text-center p-6">
      {mobileNav.map((nav) => (
        <li
          key={nav}
          className="list-none p-2 lg:text-[18px] hover:bg-blue-200 hover:rounded-xl transition-all hover:translate-y-1"
        >
          <Link to={`/${nav}`}>{nav}</Link>
        </li>
      ))}
    </div>
  );
}

export default MobileNav;
