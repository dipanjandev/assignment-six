"use client";

import { createContext, useState } from "react";
import type { ReactNode } from "react";

export const GymProvider = createContext({});

const GymContext = ({ children }: { children: ReactNode }) => {
  const [todaysPlan, setTodaysPlan] = useState([]);
  const [saveLater, setSaveLater] = useState([]);
  const SharedData = {
    todaysPlan,
    setTodaysPlan,
    saveLater,
    setSaveLater,
  };

  return (
    <GymProvider.Provider value={SharedData}>{children}</GymProvider.Provider>
  );
};

export default GymContext;
