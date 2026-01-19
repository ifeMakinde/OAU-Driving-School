import React from "react";

// import { MoveUp } from "lucide-react";
import { ArrowUp } from "lucide-react";

function Top() {
  return (
    <div className="absolute right-5 bottom-[10%]">
      <button className="rounded-full bg-blue-600 p-2 cursor-pointer">
        <a href="#nav">
          <ArrowUp size={44} color="white" strokeWidth={1} />
        </a>
      </button>
    </div>
  );
}

export default Top;
