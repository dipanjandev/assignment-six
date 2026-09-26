import Image from "next/image";
import React from "react";
import HeroImage from "@/assets/banner.png";

const HeroBaner = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <section className="bg-gray-950 flex flex-col lg:flex-row justify-between p-6 sm:p-10 md:p-14 lg:p-16 xl:p-20 rounded-2xl sm:rounded-3xl items-center gap-8 lg:gap-12">
        {/* টেক্সট অংশ: মোবাইল ও ট্যাবলেটে সুন্দর সাইজ এবং ডেস্কটপে বড় মাপ */}
        <div className="space-y-4 sm:space-y-6 text-left w-full lg:w-1/2">
          <p className="text-xs sm:text-sm font-light text-[#C2F800]">
            WORKOUT LIBRARY
          </p>
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            TRAIN WITH INTENT. LOG <br className="hidden sm:inline" /> EVERY
            SET.
          </h1>
          <p className="font-normal text-sm sm:text-base md:text-lg text-[#9CA3AF] max-w-xl">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it{" "}
            <br className="hidden md:inline" /> into today&apos;s plan, and
            watch the week&apos;s work add up.
          </p>
          <div className="pt-2">
            <button className="bg-[#C2F800] py-2 sm:py-2.5 px-5 sm:px-6 text-black font-medium text-xs sm:text-sm rounded-sm cursor-pointer hover:bg-[#b5e600] active:scale-95 transition-all">
              BROWSE WORKOUTS
            </button>
          </div>
        </div>

        {/* ইমেজ অংশ: মোবাইল ও ট্যাবলেটে মাপ অনুযায়ী স্কেল হবে */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <Image
            src={HeroImage}
            priority
            className="w-full max-w-70 sm:max-w-sm md:max-w-md lg:max-w-none h-auto max-h-85 sm:max-h-105 lg:max-h-130 object-contain"
            alt="This is the picture about exercise"
          />
        </div>
      </section>
    </div>
  );
};

export default HeroBaner;
