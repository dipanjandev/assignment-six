import React, { useContext, useState } from "react";
import PlanAddRemove from "./add_and_remove/PlanAddRemove";
import { GymProvider } from "@/context/GymContext";
import TodayPlanCard from "./add_and_remove/TodayPlanCard";
import { IworkoutType } from "@/types/workout.type";
import { toast } from "react-toastify";

interface GymContextType {
  todaysPlan: IworkoutType[];
  saveLater: IworkoutType[];
  setTodaysPlan: React.Dispatch<React.SetStateAction<IworkoutType[]>>;
  setSaveLater: React.Dispatch<React.SetStateAction<IworkoutType[]>>;
}

const PlanList = () => {
  const { todaysPlan, saveLater, setTodaysPlan, setSaveLater } = useContext(
    GymProvider,
  ) as GymContextType;
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  const handleMarkDone = (id: number) => {
    setTodaysPlan((prev) => prev.filter((item) => item.id !== id));

    toast.success("Workout logged — nice work");
  };

  const handleDelete = (id: number) => {
    if (activeTab === "today") {
      setTodaysPlan((prev) => prev.filter((item) => item.id !== id));
    } else {
      setSaveLater((prev) => prev.filter((item) => item.id !== id));
    }

    toast.success("Item removed successfully!");
  };

  const currentList = activeTab === "today" ? todaysPlan : saveLater;

  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">(
    "duration",
  );

  const sortedList = [...currentList].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }
    if (sortBy === "calories") {
      return b.caloriesBurned - a.caloriesBurned;
    }
    if (sortBy === "rating") {
      return b.rating - a.rating;
    }
    return 0;
  });

  return (
    <div className="w-full space-y-6">
      {/* ফিল্টার ও সর্টিং বার: মোবাইলে উপর-নিচ (flex-col), ট্যাব/পিসিতে পাশাপাশি (sm:flex-row) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* ট্যাব সুইচ বাটন */}
        <div className="flex items-center justify-center sm:justify-start rounded-xl border border-gray-800 bg-[#0e131f] p-1 w-full sm:w-auto">
          <button
            onClick={() => setActiveTab("today")}
            className={`flex-1 sm:flex-initial text-center rounded-lg px-3 sm:px-4 py-2 sm:py-1.5 text-xs sm:text-sm font-medium transition-all ${
              activeTab === "today"
                ? "bg-[#1f2638] font-semibold text-white shadow-sm"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Today&apos;s Plan{" "}
            <span className="text-[#CCFF00] font-bold">
              {todaysPlan.length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab("saved")}
            className={`flex-1 sm:flex-initial text-center rounded-lg px-3 sm:px-4 py-2 sm:py-1.5 text-xs sm:text-sm font-medium transition-all ${
              activeTab === "saved"
                ? "bg-[#1f2638] font-semibold text-white shadow-sm"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Saved{" "}
            <span className="text-[#CCFF00] font-bold">{saveLater.length}</span>
          </button>
        </div>

        {/* সর্ট ড্রপডাউন এরিয়া */}
        <div className="flex items-center justify-end w-full sm:w-auto">
          <fieldset className="fieldset w-full sm:w-auto flex items-center justify-between sm:justify-end gap-2">
            <legend className="fieldset-legend text-xs sm:text-sm text-gray-400">
              Sort By
            </legend>
            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as "duration" | "calories" | "rating")
              }
              className="select select-sm sm:select-md w-full sm:w-44 border border-gray-800 bg-[#0e131f] text-white rounded-xl focus:border-gray-700"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </fieldset>
        </div>
      </div>

      {/* কার্ড লিস্ট এরিয়া */}
      {sortedList.length === 0 ? (
        <PlanAddRemove />
      ) : (
        <div className="space-y-4">
          {sortedList.map((workout) => (
            <TodayPlanCard
              key={workout.id}
              workout={workout}
              activeTab={activeTab}
              onDelete={handleDelete}
              onMarkDone={handleMarkDone}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PlanList;
