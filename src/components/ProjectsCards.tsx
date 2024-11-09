"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `Here is my github account to know more about the updated projects and connect with me there :)
`;

export function ProjectsCards() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
      <TextGenerateEffect words={words} />
      {/* <GoogleGeminiEffectDemo />*/}

      <div className="h-[20rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="text-3xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          <a
            href="https://github.com/inder-dev-pro"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/inder-dev-pro
          </a>
        </p>
      </div>
    </div>
  );
}
export const projects = [
  {
    title: "Rain_Prediction Model",
    description:
      "Accurate Rain Forecasting Powered by Machine Learning – Be Ready for Every Drop!",
    link: "https://github.com/inder-dev-pro/Rain_Prediction",
  },
   {
    title: "Quiz Application",
    description:
      "An interactive quiz application built with Python and MySQL, delivering dynamic questions, instant scoring, and real-time data management for a seamless learning experience." ,
      link:""
  }

];
