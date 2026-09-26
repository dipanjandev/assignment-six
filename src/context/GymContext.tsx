"use client";

import { createContext, useState } from "react";
import type { ReactNode } from "react";
import { IworkoutType } from "@/types/workout.type";

export interface GymContextType {
  todaysPlan: IworkoutType[];
  setTodaysPlan: React.Dispatch<React.SetStateAction<IworkoutType[]>>;
  saveLater: IworkoutType[];
  setSaveLater: React.Dispatch<React.SetStateAction<IworkoutType[]>>;
  activeTab: "today" | "saved";
  setActiveTab: React.Dispatch<React.SetStateAction<"today" | "saved">>;
}

export const GymProvider = createContext<GymContextType | Record<string, unknown>>({});

const GymContext = ({ children }: { children: ReactNode }) => {
  const [todaysPlan, setTodaysPlan] = useState<IworkoutType[]>([]);
  const [saveLater, setSaveLater] = useState<IworkoutType[]>([]);
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  const SharedData: GymContextType = {
    todaysPlan,
    setTodaysPlan,
    saveLater,
    setSaveLater,
    activeTab,
    setActiveTab,
  };

  return (
    <GymProvider.Provider value={SharedData}>{children}</GymProvider.Provider>
  );
};

export default GymContext;

