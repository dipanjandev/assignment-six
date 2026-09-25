import AddToPlan from "@/components/shared/buttons/AddToPlan";
import SaveForLater from "@/components/shared/buttons/SaveForLater";
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
            <AddToPlan library={library} />

            {/* Save for Later Button */}
            <SaveForLater library={library} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default fitDitailsPage;
