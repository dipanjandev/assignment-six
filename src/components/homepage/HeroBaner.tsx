import Image from "next/image";
import React from "react";
import HeroImage from "@/assets/banner.png";

const HeroBaner = () => {
  return (
    <div className="container mx-auto">
      <section className="bg-gray-950 flex justify-between p-20 rounded-3xl items-center">
        <div className="space-y-6">
          <p className="text-sm font-light text-[#C2F800]">WORKOUT LIBRARY</p>
          <h1 className="font-bold text-6xl">
            TRAIN WITH INTENT. LOG <br /> EVERY SET.
          </h1>
          <p className="font-normal text-lg text-[#9CA3AF]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it{" "}
            <br /> into today&apos;s plan, and watch the week&apos;s work add
            up.
          </p>
          <button className="bg-[#C2F800] py-2 px-5 text-black font-medium rounded-sm cursor-pointer">
            BROWSE WORKOUTS
          </button>
        </div>
        <div>
          <Image
            src={HeroImage}
            className="h-130 w-auto"
            alt="This is the picture about exercise"
          />
        </div>
      </section>
    </div>
  );
};

export default HeroBaner;
