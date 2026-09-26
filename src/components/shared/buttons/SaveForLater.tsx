"use client";
import { GymProvider } from "@/context/GymContext";
import { IworkoutType } from "@/types/workout.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const SaveForLater = ({ library }: { library: IworkoutType }) => {
  const workoutProvider = useContext(GymProvider);

  const { saveLater = [], setSaveLater } = workoutProvider as {
    saveLater: IworkoutType[];
    setSaveLater: React.Dispatch<React.SetStateAction<IworkoutType[]>>;
  };

  const handleSaveForLater = () => {
    // ডুপ্লিকেট চেক: আগেই সেভ করা থাকলে পুনরায় ঢুকবে না
    const isAlreadySaved = saveLater.some((item) => item.id === library.id);

    if (isAlreadySaved) {
      toast.info(`${library.name} is already in saved list!`);
      return;
    }

    // ফাংশনাল আপডেট (prev state থেকে সঠিক ডেটা নেওয়া)
    setSaveLater((prev) => [...prev, library]);
    toast.success(`${library.name} added to Saved list!`);
  };

  return (
    <button
      onClick={handleSaveForLater}
      className="btn btn-sm h-10 px-4 rounded-xl bg-[#141824] hover:bg-[#1d2233] text-gray-200 border border-gray-700 normal-case flex items-center gap-2"
    >
      <svg
        className="w-4 h-4 text-[#ccff00]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
      </svg>
      Save for later
    </button>
  );
};

export default SaveForLater;
