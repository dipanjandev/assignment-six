import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="relative min-h-screen bg-[#07090e] text-white flex flex-col items-center justify-center px-4 overflow-hidden select-none">
      {/* ব্যাকগ্রাউন্ড নিয়ন গ্লো ইফেক্ট */}
      <div className="absolute w-72 sm:w-96 h-72 sm:h-96 bg-[#ccff00]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* বড় ব্যাকগ্রাউন্ড ওয়াটারমার্ক 404 */}
        <span className="absolute -top-16 sm:-top-24 text-[120px] sm:text-[180px] md:text-[220px] font-black text-white/3 tracking-widest pointer-events-none leading-none">
          404
        </span>

        {/* মডার্ন বোল্ড 404 টাইটেল */}
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tight text-transparent bg-clip-text bg-linear-to-b from-white via-gray-200 to-gray-600 drop-shadow-sm leading-none">
          404
        </h1>

        {/* NOT FOUND সাব-হেডিং */}
        <p className="mt-2 sm:mt-3 text-lg sm:text-2xl md:text-3xl font-extrabold tracking-[0.25em] text-[#ccff00] uppercase">
          NOT FOUND
        </p>

        {/* Back to Home বাটন */}
        <div className="mt-8 sm:mt-10">
          <Link
            href="/"
            className="group relative inline-flex items-center gap-2 rounded-full bg-[#ccff00] px-7 sm:px-9 py-3 sm:py-3.5 text-xs sm:text-sm font-extrabold tracking-wider text-black uppercase transition-all duration-300 hover:bg-[#b8e600] hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(204,255,0,0.35)] hover:shadow-[0_0_40px_rgba(204,255,0,0.55)]"
          >
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
