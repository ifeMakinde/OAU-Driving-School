import React from "react";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

function Top() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false);
    };
    window.addEventListener("scroll", handleScroll);

    // clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollTo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="fixed right-3 bottom-[5%] transition-all duration-300 ease-in-out hover:-translate-y-5">
      {isVisible && (
        <button
          className="rounded-full bg-blue-600 p-2 cursor-pointer z-1000 shadow-xl"
          onClick={scrollTo}
        >
          
            <ArrowUp size={28} color="white" strokeWidth={1} />
          {/* </a> */}
        </button>
      )}
    </div>
  );
}

export default Top;
