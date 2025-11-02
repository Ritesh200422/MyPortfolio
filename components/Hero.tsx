import { Spotlight } from "./ui/spotlight"
import React from 'react'
import { TextGenerateEffect } from "./ui/text-generate-effect"
import MagicButtons from "./ui/MagicButtons"
import { FaLocationArrow } from "react-icons/fa"

const Hero = () => {
  return (
    <div className='pb-20 pt-36 '>
      <div>
        <Spotlight
          className="top-40 -left-10 md:-left-32 md:-top-20 min-h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div
        className="h-screen w-full absolute top-0 left-0  items-center justify-center 
        "
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black
    mask-[radial-gradient(ellipse_at_center,transparent_30%,black)]"
        />
      </div>


      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest  text-center text-blue-100 max-w-80 text-xs">
            Dynamic Web Magic with Next.js
          </p>
          <TextGenerateEffect
            className="text-2xl"
            words="Transforming Concepts into Seamless User Experiences" />
          <p className="text-center
          md:tracking-wider mb-4 text-sm md:text-lg lg:text-4xl">
            Hi, I&apos;m Ritesh, an Engineer based in India.
          </p>
          <a href="#projects">
            <MagicButtons
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>

    </div>
  )
}
export default Hero
