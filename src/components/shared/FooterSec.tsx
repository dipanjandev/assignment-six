import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";

const FooterSec = () => {
  return (
    <div className="bg-gray-950 mt-10">
      <div className="border-t border-gray-800/80"></div>
      <footer className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left">
        {/* লোগো অংশ */}
        <div className="flex items-center gap-2 font-bold text-lg sm:text-xl text-white">
          <Image
            src={logo}
            height={22}
            width={22}
            alt="Gym Center Logo"
            priority
          />
          <span className="tracking-wider">FITLOG</span>
        </div>

        {/* কপিরাইট টেক্সট অংশ */}
        <div>
          <h5 className="text-xs sm:text-sm text-gray-400 font-normal leading-relaxed">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </h5>
        </div>
      </footer>
    </div>
  );
};

export default FooterSec;
