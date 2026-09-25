import React from "react";

const GlobalLoading = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07090e]/80 backdrop-blur-md">
      <div className="relative flex items-center justify-center">
        <div className="h-20 w-20 animate-spin rounded-full border-4 border-gray-800 border-t-[#ccff00] border-r-[#ccff00]/60 shadow-[0_0_25px_rgba(204,255,0,0.3)]" />

        <div className="absolute h-6 w-6 animate-ping rounded-full bg-[#ccff00]/40" />
        <div className="absolute h-3 w-3 rounded-full bg-[#ccff00] shadow-[0_0_10px_#ccff00]" />
      </div>

      <div className="mt-6 flex flex-col items-center gap-1">
        <h2 className="text-sm font-bold tracking-widest text-white uppercase">
          Loading... Please Wait
        </h2>
      </div>
    </div>
  );
};

export default GlobalLoading;
