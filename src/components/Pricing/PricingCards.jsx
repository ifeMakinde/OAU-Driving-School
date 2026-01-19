import React from "react";
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from "../ui/card";
import { BadgeCheckIcon } from "lucide-react";

const icon = <BadgeCheckIcon size={26} strokeWidth={1} color="blue" />;

const pricing = [
  {
    name: "Basic",
    price: "₦15,000",
    details: "Ideal for beginners starting their driving journey.",
    features: [
      "3 Hours of Instruction",
      "Highway Driving",
      "Parking Perfection",
    ],
  },
  {
    name: "Learner",
    price: "₦35,000",
    details: "Everything a beginner needs to pass the test confidently",
    features: [
      "10 Hours of Instruction",
      "Mock Driving Test",
      "Theory Prep Support",
      "Pick-up & Drop-off",
      "Use of Car for Test",
    ],
  },
  {
    name: "Pro",
    price: "₦45,000",
    details: "Zero to hero. The ultimate package for nervous beginners..",
    features: [
      "20 Hours of Instruction",
      "Unlimited Mock Tests",
      "Defensive Driving Module",
      "Highway Night Driving",
      "Priority Scheduling",
    ],
  },
];

function PricingCards() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-8 ">
      {pricing.map((plan) => {
        const cardStyle =
          plan.name == "Learner" ? "bg-blue-600 border-2" : "bg-transparent ";

        return (
          <Card
            key={plan.name}
            className={`border border-transparent  w-full max-w-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:translate-y-3 duration-600 ${cardStyle}`}
          >
            <CardHeader className=" text-white border-b border-[#444]">
              <CardTitle className="text-base text-[#444] font-bold uppercase">
                {plan.name}
              </CardTitle>
              <CardDescription className="text-5xl  text-white font-bold mb-4 ">
                {plan.price}
              </CardDescription>
              <CardDescription className="text-white">
                {plan.details}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-white">
              <ul className="mb-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="mb-2 flex items-center gap-2">
                    <span>{icon}</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export default PricingCards;
