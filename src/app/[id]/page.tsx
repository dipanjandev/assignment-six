import { IworkoutType } from "@/types/workout.type";
import Image from "next/image";
import React from "react";

interface fitDitailsType {
  params: Promise<{
    id: string;
  }>;
}

const libraryData = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  return await res.json();
};

const fitDitailsPage = async ({ params }: fitDitailsType) => {
  const { id } = await params;
  const data = await libraryData();
  const library = data.find(
    (singleData: IworkoutType) => String(singleData.id) === String(id),
  ) as IworkoutType;
  // console.log(library);

  return (
    <div className="min-h-screen text-white flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Side: Exercise Image */}
        <div className="w-full aspect-4/5 rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src={library.image}
            alt={library.name}
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Details & Stats */}
        <div className="flex flex-col space-y-5">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-black uppercase tracking-wider text-white">
            {library.name}
          </h1>

          {/* Description */}
          <p className="text-sm text-gray-400 leading-relaxed">
            {library.description}
          </p>

          {/* Muscle Groups Badges */}
          <div className="flex flex-wrap gap-2">
            {library.muscleGroups?.map((group) => (
              <span
                key={group}
                className="badge badge-sm border-none bg-[#ccff00] text-black font-semibold px-3 py-2 text-xs"
              >
                {group}
              </span>
            ))}
          </div>

          {/* Details Table / Box */}
          <div className="bg-[#141824] rounded-2xl p-4 divide-y divide-gray-800 text-xs">
            <div className="flex justify-between py-2">
              <span className="font-bold text-gray-400 uppercase tracking-wider">
                Equipment
              </span>
              <span className="font-medium text-gray-200">
                {library.equipment}
              </span>
            </div>
            <div className="flex justify-between py-2">
              <span className="font-bold text-gray-400 uppercase tracking-wider">
                Difficulty
              </span>
              <span className="font-medium text-gray-200">
                {library.difficulty}
              </span>
            </div>
            <div className="flex justify-between py-2">
              <span className="font-bold text-gray-400 uppercase tracking-wider">
                Sets
              </span>
              <span className="font-medium text-gray-200">{library.sets}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="font-bold text-gray-400 uppercase tracking-wider">
                Reps
              </span>
              <span className="font-medium text-gray-200">{library.reps}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="font-bold text-gray-400 uppercase tracking-wider">
                Duration
              </span>
              <span className="font-medium text-gray-200">
                {library.duration} min
              </span>
            </div>
            <div className="flex justify-between py-2">
              <span className="font-bold text-gray-400 uppercase tracking-wider">
                Calories
              </span>
              <span className="font-medium text-gray-200">
                {library.caloriesBurned} kcal
              </span>
            </div>
            <div className="flex justify-between py-2">
              <span className="font-bold text-gray-400 uppercase tracking-wider">
                Rating
              </span>
              <span className="font-medium text-gray-200">
                {library.rating}
              </span>
            </div>
          </div>

          {/* Instructions */}
          <div>
            <h3 className="text-xs font-black tracking-wider uppercase text-white mb-2">
              Instructions
            </h3>
            <ol className="space-y-1.5 text-xs text-gray-300">
              {library.instructions?.map((instruction, index) => (
                <li key={index} className="flex gap-2 leading-relaxed">
                  <span className="text-gray-400 font-semibold">
                    {index + 1}.
                  </span>
                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            {/* Add to Plan Button */}
            <button className="btn btn-sm h-10 px-4 rounded-xl bg-[#ccff00] hover:bg-[#b8e600] text-black font-semibold border-none normal-case flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Add to today&apos;s plan
            </button>

            {/* Save for Later Button */}
            <button className="btn btn-sm h-10 px-4 rounded-xl bg-[#141824] hover:bg-[#1d2233] text-gray-200 border border-gray-700 normal-case flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
              </svg>
              Save for later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default fitDitailsPage;
