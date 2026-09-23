import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";

const FooterSec = () => {
  return (
    <div className="bg-gray-950 mt-15">
      <div className="border border-gray-700"></div>
      <footer className="container mx-auto flex justify-between py-10">
        <div className="flex items-center gap-1 font-semibold text-xl">
          <Image src={logo} height={20} alt="Gym Center Logo" />
          <span>FITLOG</span>
        </div>
        <div>
          <h5>© 2026 FitLog — Workout Library. Train hard, log honest.</h5>
        </div>
      </footer>
    </div>
  );
};

export default FooterSec;
