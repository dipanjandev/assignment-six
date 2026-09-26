"use client";

import { GymProvider } from "@/context/GymContext";
import { IworkoutType } from "@/types/workout.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const AddToPlan = ({ library }: { library: IworkoutType }) => {
  const workoutProvider = useContext(GymProvider);

  const { todaysPlan = [], setTodaysPlan } = workoutProvider as {
    todaysPlan: IworkoutType[];
    setTodaysPlan: React.Dispatch<React.SetStateAction<IworkoutType[]>>;
  };

  const handleAddToPlan = () => {
    // ডুপ্লিকেট চেক: ওয়ার্কআউটটি আগেই যুক্ত করা আছে কিনা
    const isAlreadyAdded = todaysPlan.some((item) => item.id === library.id);

    if (isAlreadyAdded) {
      toast.info(`${library.name} is already in today's plan!`);
      return;
    }

    // ৫টি ওয়ার্কআউটের লিমিট চেক (আপনার প্ল্যান অনুযায়ী Cap of 5)
    if (todaysPlan.length >= 5) {
      toast.warning(
        "You have reached the maximum limit of 5 workouts for today!",
      );
      return;
    }

    // ফাংশনাল স্টেট আপডেট
    setTodaysPlan((prev) => [...prev, library]);
    toast.success(`${library.name} successfully added to today's plan!`);
  };

  return (
    <button
      onClick={handleAddToPlan}
      className="btn btn-sm h-10 px-4 rounded-xl bg-[#ccff00] hover:bg-[#b8e600] active:scale-95 transition-all text-black font-semibold border-none normal-case flex items-center gap-2 shadow-[0_0_15px_rgba(204,255,0,0.2)]"
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
