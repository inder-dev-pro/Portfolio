"use client";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

export function QuoteWithBackground() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center  overflow-hidden ">
      <MaskContainer
        revealText={
          <p className="max-w-4xl mx-auto text-white text-opacity-50 text-center  text-4xl font-bold">
            Fueled by a love for AI and a foundation in C++, I strive to innovate, learn, and push boundaries in technology.
          </p>
        }
        className="h-[40rem]"
      >
      Lifelong <span className="text-red-500">learner</span><span className="text-red-500">, Embracing</span>Innovation <span className="text-red-500"></span>.
      </MaskContainer>
    </div>
  );
}
