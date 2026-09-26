"use client";
import Image from "next/image";
import React, { useContext, useState } from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GymProvider } from "@/context/GymContext";
import { IworkoutType } from "@/types/workout.type";

interface GymContextType {
  todaysPlan: IworkoutType[];
  saveLater: IworkoutType[];
  setActiveTab?: React.Dispatch<React.SetStateAction<"today" | "saved">>;
}

const NavBar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const {
    todaysPlan = [],
    saveLater = [],
    setActiveTab,
  } = useContext(GymProvider) as GymContextType;

  return (
    <header className="sticky top-0 z-50 w-full bg-gray-950/80 backdrop-blur-md border-b border-gray-800/80">
      <nav className="flex justify-between items-center container mx-auto px-4 sm:px-6 py-3.5">
        {/* লোগো: ক্লিক করলে হোমপেজে ('/') নিয়ে যাবে */}
        <Link
          href="/"
          className="flex items-center gap-1.5 font-semibold text-lg sm:text-xl"
        >
          <Image src={logo} height={20} alt="Gym Center Logo" priority />
          <span className="text-white tracking-wider">FITLOG</span>
        </Link>

        {/* ট্যাবলেট ও পিসির জন্য পিল/ক্যাপসুল বাটন (মোবাইলে hidden, sm থেকে flex) */}
        <div className="hidden sm:flex items-center gap-1 sm:gap-2">
          <Link
            href="/"
            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
              pathname === "/"
                ? "bg-[#C2F800]/15 text-[#C2F800] border border-[#C2F800]/30 shadow-[0_0_15px_rgba(194,248,0,0.15)]"
                : "text-gray-400 hover:text-white hover:bg-gray-800/40"
            }`}
          >
            Workouts
          </Link>
          <Link
            href="/my-plan"
            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
              pathname === "/my-plan"
                ? "bg-[#C2F800]/15 text-[#C2F800] border border-[#C2F800]/30 shadow-[0_0_15px_rgba(194,248,0,0.15)]"
                : "text-gray-400 hover:text-white hover:bg-gray-800/40"
            }`}
          >
            My Plan
          </Link>
        </div>

        {/* কাউন্টার ব্যাজ এবং মোবাইলের থ্রি-লাইন মেনু বাটন */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          <Link
            href="/my-plan"
            onClick={() => setActiveTab?.("today")}
            className="flex items-center gap-1.5 cursor-pointer text-xs sm:text-sm text-gray-300 hover:text-white"
          >
            <span className="hidden md:block">Plan</span>
            <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-[#C2F800] text-xs sm:text-sm font-bold text-black shadow-[0_0_10px_rgba(194,248,0,0.25)]">
              {todaysPlan.length}
            </span>
          </Link>

          <Link
            href="/my-plan"
            onClick={() => setActiveTab?.("saved")}
            className="flex items-center gap-1.5 cursor-pointer text-xs sm:text-sm text-gray-300 hover:text-white"
          >
            <span className="hidden md:block">Saved</span>
            <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/60 text-zinc-300 text-xs sm:text-sm font-semibold">
              {saveLater.length}
            </span>
          </Link>

          {/* মোবাইল স্ক্রিনের জন্য হ্যামবার্গার / থ্রি-লাইন বাটন */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="sm:hidden p-2 text-gray-400 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              // ক্রস আইকন (মেনু ওপেন থাকলে)
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // থ্রি-লাইন আইকন
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* মোবাইল ড্রপডাউন মেনু */}
      {isMenuOpen && (
        <div className="sm:hidden px-4 pb-4 pt-2 border-t border-gray-800/80 bg-gray-950/95 flex flex-col gap-2">
          <Link
            href="/library"
            onClick={() => setIsMenuOpen(false)}
            className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              pathname === "/library"
                ? "bg-[#C2F800]/15 text-[#C2F800] border border-[#C2F800]/30"
                : "text-gray-400 hover:text-white hover:bg-gray-900"
            }`}
          >
            Workouts
          </Link>
          <Link
            href="/my-plan"
            onClick={() => setIsMenuOpen(false)}
            className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              pathname === "/my-plan"
                ? "bg-[#C2F800]/15 text-[#C2F800] border border-[#C2F800]/30"
                : "text-gray-400 hover:text-white hover:bg-gray-900"
            }`}
          >
            My Plan
          </Link>
        </div>
      )}
    </header>
  );
};

export default NavBar;
