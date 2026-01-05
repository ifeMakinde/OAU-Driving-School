import React from "react";
import { Link } from "react-router-dom";

function MobileNav({ nav }) {
  return (
    <div className=" flex-col justify-center items-center absolute top-20 left-20 ">
      {nav.map((nav) => (
        <li className="list-none">
          <Link to={`/${nav}`} key={nav}>
            {nav}
          </Link>
        </li>
      ))}
    </div>
  );
}

export default MobileNav;
