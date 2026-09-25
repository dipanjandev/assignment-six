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
  const { todaysPlan, saveLater, setTodaysPlan } = useContext(
    GymProvider,
  ) as GymContextType;
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  const handleMarkDone = (id: number) => {
    setTodaysPlan((prev) => prev.filter((item) => item.id !== id));

    toast.success("Workout logged — nice work");
  };

  const currentList = activeTab === "today" ? todaysPlan : saveLater;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        {/* বাম পাশের ট্যাব বাটন */}
        <div className="flex items-center rounded-xl border border-gray-800 bg-[#0e131f] p-1">
          <button
            onClick={() => setActiveTab("today")}
            className={`rounded-lg px-4 py-1.5 text-sm font-medium transition-all ${
              activeTab === "today"
                ? "bg-[#1f2638] font-semibold text-white shadow-sm"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Today&apos;s Plan{" "}
            <span className="text-[#CCFF00]">{todaysPlan.length}</span>
          </button>
          <button
            onClick={() => setActiveTab("saved")}
            className={`rounded-lg px-4 py-1.5 text-sm font-medium transition-all ${
              activeTab === "saved"
                ? "bg-[#1f2638] font-semibold text-white shadow-sm"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Saved <span className="text-[#CCFF00]">{saveLater.length}</span>
          </button>
        </div>

        {/* ডান পাশের Sort By ড্রপডাউন */}
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-400">Sort By</span>
          <div className="dropdown dropdown-bottom dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="flex items-center gap-2 rounded-xl border border-gray-800 bg-[#0e131f] px-3.5 py-1.5 text-sm font-medium text-white transition-colors hover:border-gray-700"
            >
              Duration
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu z-20 mt-2 w-40 rounded-xl border border-gray-800 bg-[#0e131f] p-1.5 text-sm shadow-xl"
            >
              <li>
                <a className="rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white">
                  Duration
                </a>
              </li>
              <li>
                <a className="rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white">
                  Calories
                </a>
              </li>
              <li>
                <a className="rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white">
                  Exercises
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {currentList.length === 0 ? (
        <PlanAddRemove />
      ) : (
        <div>
          {currentList.map((workout) => (
            <TodayPlanCard
              key={workout.id}
              workout={workout}
              activeTab={activeTab}
              onDelete={() => {}}
              onMarkDone={handleMarkDone}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PlanList;
