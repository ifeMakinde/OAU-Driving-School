import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import { Award } from "lucide-react";
import { Badge } from "../components/ui/badge";
import Hero from "../components/Hero";
import Why from "../components/Why";
import Pricing from "../components/Pricing/Pricing";
import CTA from "../CTA";
import Footer from "../components/Footer/Footer";

function Homepage() {
  return (
    <>
      <Navigation />

      <div className="w-full text-center pt-20  ">
        <Badge className="bg-white text-[14px] lg:text-md text-blue-600 px-4 py-1 font-bold border hover:border-blue-100 shadow-md transition-all duration-300 hover:scale-90  ">
          <span>
            <Award size={28} strokeWidth={1} />
          </span>
          #1 Rated Driving School 2024
        </Badge>
      </div>
      <Hero />
      <Why />
      <Pricing />
      <CTA />
      <Footer />
    </>
  );
}

export default Homepage;
