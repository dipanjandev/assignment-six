"use client";

import Link from "next/link";
import React, { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    // কনসোলে এরর লগ করে দেখার জন্য
    console.error("Runtime Error:", error);
  }, [error]);

  return (
    <div className="relative min-h-screen bg-[#07090e] text-white flex flex-col items-center justify-center px-4 overflow-hidden select-none">
      {/* ব্যাকগ্রাউন্ড লালচে/অরেঞ্জ গ্লো ইফেক্ট */}
      <div className="absolute w-72 sm:w-96 h-72 sm:h-96 bg-red-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
        {/* বড় ব্যাকগ্রাউন্ড ওয়াটারমার্ক */}
        <span className="absolute -top-16 sm:-top-24 text-[120px] sm:text-[180px] md:text-[220px] font-black text-white/3 tracking-widest pointer-events-none leading-none">
          ERROR
        </span>

        {/* মডার্ন এরর টাইটেল */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-linear-to-b from-white via-gray-200 to-gray-500 leading-none">
          OOPS!
        </h1>

        <p className="mt-3 text-base sm:text-xl md:text-2xl font-extrabold tracking-[0.2em] text-[#ff4d4d] uppercase">
          SOMETHING WENT WRONG
        </p>

        <p className="mt-2 text-xs sm:text-sm text-gray-400 max-w-sm">
          An unexpected error occurred while loading this page. You can try
          refreshing or head back to base.
        </p>

        {/* অ্যাকশন বাটনসমূহ */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
          {/* Try Again বাটন (পেজ রিলোড না করে রি-রেন্ডার করবে) */}
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 rounded-full bg-[#ccff00] px-6 sm:px-8 py-3 text-xs sm:text-sm font-extrabold tracking-wider text-black uppercase transition-all duration-300 hover:bg-[#b8e600] hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(204,255,0,0.3)] cursor-pointer"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
            Try Again
          </button>

          {/* Back to Home বাটন */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-gray-800 bg-[#121622] px-6 sm:px-8 py-3 text-xs sm:text-sm font-semibold tracking-wider text-gray-200 uppercase transition-all duration-300 hover:border-gray-600 hover:text-white hover:scale-105 active:scale-95"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
