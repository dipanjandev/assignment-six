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
    <div className="container mx-auto space-y-10 mt-10 mb-10">
      <div className="space-y-3">
        <h4 className="font-semibold text-5xl">The Library</h4>
        <p className="font-normal text-lg">
          Twelve lifts covering every major muscle group.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-20">
        {workoutList.map((workout: IworkoutType) => {
          return <LibraryCard key={workout.id} workout={workout} />;
        })}
      </div>
    </div>
  );
};

export default WorkoutList;
