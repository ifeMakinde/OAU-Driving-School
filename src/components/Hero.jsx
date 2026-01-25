import React from "react";
import { Link } from "react-router-dom";
import { BadgeCheck } from "lucide-react";
import heroImage from "../assets/heroImage.webp";

// bg-[#f8fafc]

function Hero() {
  return (
    <section className="w-full pt-6 flex flex-col ">
      <div className="text-center m-auto max-w-[90%]">
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl lg:text-6xl font-bold tracking-wide ">
            Master the Road <br />
            <span className="text-blue-600"> With Confidence</span>
          </h2>

          <p className="m-auto text-center text-[14px] lg:text-lg lg:max-w-[70%]  tracking-wider wrap-normal">
            Join thousands of students who passed their test first time. Expert
            instructors, dual-control modern cars, and a curriculum designed for
            safety.
          </p>

          <div className="flex flex-col lg:flex-row gap-3 lg:gap-4  justify-center pt-2">
            <button className="text-base lg:text-lg bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold shadow-md shadow-blue-600/30 transition-all hover:-translate-y-1 cursor-pointer">
              <Link>Start Learning </Link>
            </button>

            <button className="text-base lg:text-lg px-8 py-4 rounded-full font-bold shadow-md shadow-blue-600/30 border hover:border-blue-100 transition-all hover:-translate-y-1 cursor-pointer">
              <a href="#pricing">View Prices</a>
            </button>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8 ">
            <p className="text-[14px] lg:text-base flex justify-center items-center gap-2">
              <span>
                <BadgeCheck color="#ff3333" size={24} strokeWidth={1} />
              </span>
              98% Pass Rate
            </p>
            <p className="text-[14px] lg:text-base flex justify-center items-center gap-1">
              <span>
                <BadgeCheck color="#73ca70" size={24} strokeWidth={1} />
              </span>
              Cerfiied Professionals
            </p>
          </div>
        </div>

        {/* hero image */}
        <div className="m-auto my-8 flex justify-center items-center transition-all ease-in duration-700 hover:scale-95 w-full lg:max-w-[90%] h-auto text-center  ">
          <img
            src={heroImage}
            className="rounded-3xl border-4 object-cover "
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
