import React from "react";
import { Car } from "lucide-react";

function Logo() {
  return (
    <div className="flex justify-center items-center gap-2">
      <span className="bg-blue-600 p-2 rounded-md">
        <Car color="white" size={28} strokeWidth={1} />
      </span>
      <h2 className="font-bold text-base lg:text-lg no-wrap tracking-wide">
        OAU <span className=" text-blue-600 font-bold">DRIVING </span>
        SCHOOL
      </h2>
    </div>
  );
}

export default Logo;
