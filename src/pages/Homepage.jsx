import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import { Award } from "lucide-react";
import { Badge } from "../components/ui/badge";
import Hero from "../components/Hero";

function Homepage() {
  return (
    <>
      <Navigation />

      <div className="text-center mt-6 ">
        <Badge className="bg-white text-[14px] lg:text-md text-blue-600 px-4 py-1 font-bold border border-blue-100 shadow-md transition-all hover:scale-90  ">
          <span>
            <Award size={28} strokeWidth={1} />
          </span>
          #1 Rated Driving School 2024
        </Badge>
      </div>
      <Hero />
    </>
  );
}

export default Homepage;
