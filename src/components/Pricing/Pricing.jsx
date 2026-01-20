import React from "react";
import PricingCard from "./PricingCards";
function Pricing() {
  return (
    <section className="w-full bg-[#0F172A] py-20" id="prices">
      <div className="m-auto max-w-[90%] p-4 text-white">
        <div className="text-center py-8">
          <h3 className="text-[24px] lg:text-3xl font-semibold mb-3 capitalize  ">
            Transparent Pricing
          </h3>
          <p className="text-[14px] lg:text-base">
            Choose the package that fits your experience level.
          </p>
        </div>

        {/* pricing cards */}

        <div>
          <PricingCard />
        </div>
      </div>
    </section>
  );
}

export default Pricing;
