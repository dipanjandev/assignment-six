import React from "react";
import LibraryCard from "../shared/LibraryCard";
import { IworkoutType } from "@/types/workout.type";

const libraryData = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  return await res.json();
};

const WorkoutList = async () => {
  const workoutList = await libraryData();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10 my-8 sm:my-12">
      {/* টাইটেল ও সাবটাইটেল: মোবাইলে সেন্টারে, ট্যাবলেট/পিসিতে বামে */}
      <div className="space-y-2 sm:space-y-3 text-center sm:text-left">
        <h4 className="font-semibold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
          THE LIBRARY
        </h4>
        <p className="font-normal text-sm sm:text-base md:text-lg text-gray-400">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* রেসপনসিভ কার্ড গ্রিড: মোবাইল ১ কলাম, ট্যাবলেট ২ কলাম, পিসি ৩ কলাম */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
        {workoutList.map((workout: IworkoutType) => {
          return <LibraryCard key={workout.id} workout={workout} />;
        })}
      </div>
    </div>
  );
};

export default WorkoutList;
