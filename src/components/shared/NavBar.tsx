import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="bg-gray-950 mb-5">
      <nav className="flex justify-between items-center container mx-auto my-5">
        <div className="flex items-center gap-1 font-semibold text-xl">
          <Image src={logo} height={20} alt="Gym Center Logo" />
          <span>FITLOG</span>
        </div>
        <ul className="flex gap-5">
          <li>
            <Link href="/">Workouts</Link>
          </li>
          <li>
            <Link href="/my-plan">My Plan</Link>
          </li>
        </ul>
        <div className="flex items-center gap-6">
          <Link
            href="/my-plan"
            className="flex items-center gap-2 cursor-pointer"
          >
            <span>Plan</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#C2F800] text-sm font-semibold text-black">
              0
            </span>
          </Link>
          <Link
            href="/my-plan"
            className="flex items-center gap-2 cursor-pointer"
          >
            <span>Saved</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-zinc-700 text-zinc-300 text-sm font-semibold">
              0
            </span>
          </Link>
        </div>
      </nav>
      <div className="border border-gray-700"></div>
    </div>
  );
};

export default NavBar;
