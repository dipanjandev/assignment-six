import { IworkoutType } from "@/types/workout.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LibraryCard = ({ workout }: { workout: IworkoutType }) => {
  return (
    <Link href={`./${workout.id}`} className="group block h-full">
      <div className="card h-full bg-[#141721] text-white shadow-xl rounded-2xl overflow-hidden cursor-pointer border border-transparent hover:border-[#ccff00] transition-all duration-300 hover:-translate-y-1">
        {/* Exercise Image: ফিক্সড h-70 এর বদলে রেসপনসিভ এসপেক্ট রেশিও এবং হাইট */}
        <figure className="relative w-full aspect-16/10 sm:aspect-4/3 md:h-56 overflow-hidden">
          <Image
            src={workout.image}
            alt={workout.name}
            width={800}
            height={800}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </figure>

        <div className="card-body p-4 sm:p-5 flex flex-col justify-between">
          <div>
            {/* Muscle Groups (DaisyUI Badges) */}
            <div className="flex flex-wrap gap-1.5">
              {workout.muscleGroups?.map((group: string) => (
                <span
                  key={group}
                  className="badge badge-sm border-none bg-[#ccff00] text-black font-semibold text-[10px] sm:text-xs px-2 py-0.5"
                >
                  {group}
                </span>
              ))}
            </div>

            {/* Title */}
            <h2 className="card-title text-sm sm:text-base font-black uppercase tracking-wide mt-2 line-clamp-1">
              {workout.name}
            </h2>

            {/* Equipment */}
            <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">
              {workout.equipment}
            </p>
          </div>

          {/* Stats: ছোট স্ক্রিনে যেন র‍্যাপ হয়ে না ভাঙে */}
          <div className="flex flex-wrap items-center justify-between sm:justify-start gap-2.5 sm:gap-4 text-[11px] sm:text-xs font-semibold mt-4 pt-2 border-t border-gray-800/60 text-gray-200">
            {/* Duration */}
            <span className="flex items-center gap-1">
              <svg
                className="w-3.5 h-3.5 text-[#ccff00] shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6l4 2"
                />
              </svg>
              {workout.duration} min
            </span>

            {/* Calories */}
            <span className="flex items-center gap-1">
              <svg
                className="w-3.5 h-3.5 text-[#ccff00] shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2c0 4-4 6-4 10a6 6 0 0 0 12 0c0-4-4-6-4-10z"
                />
              </svg>
              {workout.caloriesBurned} kcal
            </span>

            {/* Rating */}
            <span className="flex items-center gap-1">
              <svg
                className="w-3.5 h-3.5 text-[#ccff00] shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              {workout.rating}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LibraryCard;
