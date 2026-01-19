import React from "react";

function CTA() {
  return (
    <section className="m-auto mt-8 max-w-[90%] lg:max-w-[75%] py-20 bg-blue-600 rounded-4xl flex flex-col lg:flex-row justify-center items-center px-4 lg:px-0 gap-4 lg:gap-2">
      <div className="text-center max-w-150 m-auto mb-5 text-white px-4">
        <h2 className="text-[24px] lg:text-3xl font-semibold mb-3">
          Ready to hit the road ?
        </h2>
        <p className="text-[14px] lg:text-base  ">
          Book your first lesson today and get a discount on your first package
        </p>
      </div>

      <div className="w-full lg:w-[50%] text-center">
        <button className="text-base font-semibold px-6 py-4 bg-white text-blue-600 rounded-4xl">
          Book a lesson now
        </button>
      </div>
    </section>
  );
}

export default CTA;
