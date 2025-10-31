"use client";

import React from "react";
import { workExperience } from "@/app/data";
import { Button } from "@/components/ui/moving-border";

const Experience = () => {
  return (
    <div className="py-20 w-full" id="experience">
      <h1 className="heading text-center font-bold text-3xl md:text-4xl lg:text-5xl">
        My <span className="text-purple-500">work experience</span>
      </h1>

      <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {workExperience.map((card) => (
          <div key={card.id} className="w-full h-full min-h-[300px]">
            <Button
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="2rem"
              className="w-full h-full text-white dark:text-white bg-slate-900 dark:bg-slate-900 border-none"
              containerClassName="w-full h-full"
            >
              <div className="flex flex-col p-6 h-full w-full">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={card.thumbnail}
                    alt={card.title}
                    className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-lg"
                  />
                  <h2 className="text-xl md:text-2xl font-bold text-white">
                    {card.title}
                  </h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed flex-grow">
                  {card.desc}
                </p>
              </div>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;