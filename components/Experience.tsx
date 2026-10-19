"use client";

import React from "react";
import Image from "next/image";
import { workExperience } from "../app/data";
import { Button } from "../components/ui/moving-border";

const Experience = () => {
  return (
    <section className="w-full min-w-0 py-20" id="experience">
      <div className="mx-auto w-full max-w-3xl px-2 text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-purple-300">
          Career highlights
        </p>
        <h2 className="heading text-center text-3xl font-bold md:text-4xl lg:text-5xl">
          My <span className="text-purple-500">work experience</span>
        </h2>
        <p className="mt-5 text-sm leading-7 text-slate-300 md:text-base">
          A selection of the teams and products I have contributed to.
        </p>
      </div>

      <div className="mx-auto mt-12 grid w-full max-w-6xl grid-cols-1 items-stretch gap-6 md:grid-cols-2 md:gap-8">
        {workExperience.map((card, index) => (
          <div key={card.id} className="w-full min-w-0">
            <Button
              duration={12000 + index * 1500}
              borderRadius="2rem"
              className="flex min-h-[300px] w-full flex-col items-start justify-between gap-8 border-slate-800 bg-slate-950/90 p-6 text-left text-white sm:p-8"
              containerClassName="h-full w-full"
            >
              <div className="flex w-full flex-col gap-8">
                <div className="flex items-start gap-5">
                  <Image
                    src={card.thumbnail}
                    width={80}
                    height={80}
                    alt=""
                    aria-hidden="true"
                    className="h-16 w-16 shrink-0 rounded-2xl border border-white/10 bg-white/5 p-3 object-contain sm:h-20 sm:w-20"
                  />
                  <div className="min-w-0 pt-1">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">
                      {card.project}
                    </p>
                    <h3 className="text-xl font-bold leading-snug text-white md:text-2xl">
                      {card.title}
                    </h3>
                  </div>
                </div>
                <p className="text-base leading-7 text-slate-300 md:text-lg">
                  {card.desc}
                </p>
                <div className="flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-sm text-slate-400">Experience</span>
                  <span className="text-sm font-semibold tracking-[0.2em] text-purple-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;