"use client";

import Link from "next/link";

const PlanAddRemove = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-800/80 bg-[#0e131f]/40 px-4 sm:px-6 py-12 sm:py-20 md:py-24 text-center">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wider text-white">
        NOTHING HERE YET
      </h2>
      <p className="mt-2 text-xs sm:text-sm text-gray-400 max-w-xs sm:max-w-md">
        Browse the library and add a lift to get today moving.
      </p>
      <Link
        href={"/"}
        className="mt-5 sm:mt-6 rounded-full bg-[#c8ff00] px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-black shadow-[0_0_20px_rgba(200,255,0,0.35)] transition-all hover:bg-[#b8eb00] hover:shadow-[0_0_25px_rgba(200,255,0,0.5)] active:scale-95"
      >
        Go to workouts
      </Link>
    </div>
  );
};

export default PlanAddRemove;
