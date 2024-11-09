"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";

export function ExperienceInfo() {
  return (
    <TracingBeam className="">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-4xl font-bold w-fit py-2 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge("text-xl mb-4 px-6 font-bold")}>{item.title}</p>

            <div className="text-2-1 prose prose-sm dark:prose-invert">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "AI/ML Developer with Geek Room (Oct 24-Present)",
    description: (
      <ul className="list-disc ml-6">
        <li>
        "Developed and implemented AI/ML models at Geek Room, enhancing predictive accuracy and contributing to innovative data-driven solutions."
        </li>
      </ul>
    ),
    badge: "✦ Experience",
    image: "",
  },
  {
    title: "Co-Founder at Energie Clothing Brand (Sep 23-Present)",
    description: (
      <ul className="list-disc ml-6">
        <li>
        "Co-founded Energie Clothing, a brand focused on delivering customized and personalized apparel, ensuring unique, customer-centric fashion solutions."
        </li>
      </ul>
    ),
    badge: "",
    image: "",
  },
  {
    title: "Cantilever - Machine Learning Intern ( Jul 24 - Aug 24 )",
    description: (
      <ul className="list-disc ml-6">
        <li>
          "Learning and mastering technologies essential for Machine Learning, including MongoDB, Supervised Learning, Unsupervised Learning, and Neural Networks. Actively contributing to the development of a project, gaining hands-on experience in building scalable and efficient solutions. Collaborating with experienced developers to implement features, troubleshoot issues, and enhance project functionality within an agile development environment."
        </li>
      </ul>
    ),
    badge: "",
    image: "",
  },
  {
    title: "Publicity Manager at IEEE ( Nov 23 - Present )",
    description: (
      <ul className="list-disc ml-6">
        <li>
          Helped in organizing various tech events and seminars. Hosted events at large scales and audience interaction
        </li>
      </ul>
    ),
    badge: "",
    image: "",
  },
];
