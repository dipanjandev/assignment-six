import { IworkoutType } from "@/types/workout.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LibraryCard = ({ workout }: { workout: IworkoutType }) => {
  return (
    <Link href={`./${workout.id}`}>
      <div className="card h-auto bg-[#141721] text-white shadow-xl rounded-2xl overflow-hidden cursor-pointer hover:border-[#ccff00] hover:border">
        {/* Exercise Image */}
        <figure className="w-full h-70">
          <Image
            src={workout.image}
            alt={workout.name}
            width={800}
            height={800}
            className="w-full h-full object-cover"
          />
        </figure>

        <div className="card-body p-4">
          {/* Muscle Groups (DaisyUI Badges) */}
          <div className="flex gap-2">
            {workout.muscleGroups?.map((group: string) => (
              <span
                key={group}
                className="badge badge-sm border-none bg-[#ccff00] text-black font-semibold"
              >
                {group}
              </span>
            ))}
          </div>

          {/* Title */}
          <h2 className="card-title text-base font-black uppercase tracking-wide mt-2">
            {workout.name}
          </h2>

          {/* Equipment */}
          <p className="text-xs text-gray-400 -mt-1">{workout.equipment}</p>

          {/* Stats */}
          <div className="flex items-center gap-4 text-xs font-semibold mt-3 text-gray-200">
            {/* Duration */}
            <span className="flex items-center gap-1">
              <svg
                className="w-4 h-4 text-[#ccff00]"
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
                className="w-4 h-4 text-[#ccff00]"
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
                className="w-4 h-4 text-[#ccff00]"
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
