"use client";

import { GymProvider } from "@/context/GymContext";
import { IworkoutType } from "@/types/workout.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const AddToPlan = ({ library }: { library: IworkoutType }) => {
  const workoutProvider = useContext(GymProvider);
  // console.log(workoutProvider, "workoutProvider");
  const { todaysPlan, setTodaysPlan } = workoutProvider as {
    todaysPlan: IworkoutType[];
    setTodaysPlan: React.Dispatch<React.SetStateAction<IworkoutType[]>>;
  };

  const handleAddToPlan = () => {
    // console.log("handle button worked", library);
    setTodaysPlan([...todaysPlan, library]);
    toast.success(`${library.name} Successfully add your today's Plan`);
  };
  return (
    <button
      onClick={() => handleAddToPlan()}
      className="btn btn-sm h-10 px-4 rounded-xl bg-[#ccff00] hover:bg-[#b8e600] text-black font-semibold border-none normal-case flex items-center gap-2"
    >
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
  );
};

export default AddToPlan;
