import AddToPlan from "@/components/shared/buttons/AddToPlan";
import SaveForLater from "@/components/shared/buttons/SaveForLater";
import { IworkoutType } from "@/types/workout.type";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

interface fitDitailsType {
  params: Promise<{
    id: string;
  }>;
}

const libraryData = async () => {
  const res = await fetch("https://api.api-store.workers.dev/api/fitlog");
  return await res.json();
};

const fitDitailsPage = async ({ params }: fitDitailsType) => {
  const { id } = await params;
  const data = await libraryData();
  const library = data?.find(
    (singleData: IworkoutType) => String(singleData.id) === String(id),
  ) as IworkoutType;

  if (!library) {
    notFound();
  }

  return (
    <div className="text-white flex items-center justify-center px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
        {/* Left Side: Exercise Image (উচ্চতা নিয়ন্ত্রণে রেখে রেসপনসিভ) */}
        <div className="w-full aspect-4/3 sm:aspect-square md:aspect-4/5 max-h-80 sm:max-h-105 md:max-h-none rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl relative border border-gray-800">
          <Image
            src={library.image}
            alt={library.name}
            fill
            priority
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Details & Stats (কম্প্যাক্ট স্পেসিং) */}
        <div className="flex flex-col space-y-3.5 sm:space-y-4">
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-wider text-white">
            {library.name}
          </h1>

          {/* Description */}
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
            {library.description}
          </p>

          {/* Muscle Groups Badges */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {library.muscleGroups?.map((group) => (
              <span
                key={group}
                className="badge badge-sm border-none bg-[#ccff00] text-black font-semibold px-2.5 py-1 text-[11px] sm:text-xs"
              >
                {group}
              </span>
            ))}
          </div>

          {/* Details Table / Box (উপর-নিচের প্যাডিং py-1.5 দিয়ে উচ্চতা কমানো হয়েছে) */}
          <div className="bg-[#141824] rounded-2xl p-3.5 sm:p-4 divide-y divide-gray-800 text-xs">
            <div className="flex justify-between py-1.5">
              <span className="font-bold text-gray-400 uppercase tracking-wider text-[11px] sm:text-xs">
                Equipment
              </span>
              <span className="font-medium text-gray-200">
                {library.equipment}
              </span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="font-bold text-gray-400 uppercase tracking-wider text-[11px] sm:text-xs">
                Difficulty
              </span>
              <span className="font-medium text-gray-200">
                {library.difficulty}
              </span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="font-bold text-gray-400 uppercase tracking-wider text-[11px] sm:text-xs">
                Sets
              </span>
              <span className="font-medium text-gray-200">{library.sets}</span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="font-bold text-gray-400 uppercase tracking-wider text-[11px] sm:text-xs">
                Reps
              </span>
              <span className="font-medium text-gray-200">{library.reps}</span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="font-bold text-gray-400 uppercase tracking-wider text-[11px] sm:text-xs">
                Duration
              </span>
              <span className="font-medium text-gray-200">
                {library.duration} min
              </span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="font-bold text-gray-400 uppercase tracking-wider text-[11px] sm:text-xs">
                Calories
              </span>
              <span className="font-medium text-gray-200">
                {library.caloriesBurned} kcal
              </span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="font-bold text-gray-400 uppercase tracking-wider text-[11px] sm:text-xs">
                Rating
              </span>
              <span className="font-medium text-gray-200">
                {library.rating}
              </span>
            </div>
          </div>

          {/* Instructions */}
          <div>
            <h3 className="text-xs font-black tracking-wider uppercase text-white mb-1.5">
              Instructions
            </h3>
            <ol className="space-y-1 text-xs text-gray-300">
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
          <div className="flex flex-wrap gap-3 pt-1">
            <AddToPlan library={library} />
            <SaveForLater library={library} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default fitDitailsPage;
