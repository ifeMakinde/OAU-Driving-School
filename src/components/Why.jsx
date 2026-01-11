import React from "react";
import { Calendar, HandCoins, UserStar } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";

const whyChooseUs = [
  {
    icon: (
      <HandCoins
        size={38}
        color="#3B82F6"
        strokeWidth={1}
        className="bg-[#ebf3fe] p-1 rounded-md"
      />
    ),
    head: "Affordable Price",
    paragraph: "Our driving lessons are friendly and affordable for all.",
  },
  {
    icon: (
      <UserStar
        size={36}
        strokeWidth={1}
        color="#F59E0B"
        className="bg-[#fef5e7] p-1 rounded-md"
      />
    ),
    head: "Experienced Instructors",
    paragraph:
      "Friendly expert trainers with over 10 years experience in manual driving",
  },
  {
    icon: (
      <Calendar
        size={36}
        color="#10B981"
        strokeWidth={1}
        className="bg-[#e7f8f2] p-1 rounded-md"
      />
    ),
    head: "Flexible scheduling",
    paragraph:
      "Book lessons online 24/7. We offer early morning, evening, and weekend slots at no extra cost.",
  },
];

function Why() {
  return (
    <section className="w-full">
      <div className="py-25 m-auto max-w-[90%]">
        <div className=" text-center m-auto mb-12">
          <h3 className="text-[24px] lg:text-3xl font-semibold mb-3 capitalize">
            why choose OAU Driving School
          </h3>
          <p className="text-[14px] lg:text-base">
            We don't just help you pass your driving, we teach your safe driving
            skill, for life !
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 ">
          {whyChooseUs.map((card, index) => (
            <Card
              key={index}
              className="p-4 border-0 rounded-xl transition-all duration-700 ease-in-out hover:translate-y-2 hover:shadow-md"
              style={{ backgroundColor: card.color }}
            >
              <CardHeader className="p-0">{card.icon} </CardHeader>
              <CardTitle className="text-[18px] lg:text-[22px] ">
                {card.head}
              </CardTitle>
              <CardDescription>{card.paragraph}</CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Why;
