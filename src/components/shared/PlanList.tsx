import React from "react";
import PlanAddRemove from "./PlanAddRemove";

const PlanList = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        {/* বাম পাশের ট্যাব বাটন */}
        <div className="flex items-center rounded-xl border border-gray-800 bg-[#0e131f] p-1">
          <button className="rounded-lg px-4 py-1.5 text-sm font-medium text-gray-400 transition-colors hover:text-white">
            Today&apos;s Plan
          </button>
          <button className="rounded-lg bg-[#1f2638] px-4 py-1.5 text-sm font-semibold text-white shadow-sm">
            Saved
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
      <PlanAddRemove />
    </div>
  );
};

export default PlanList;
