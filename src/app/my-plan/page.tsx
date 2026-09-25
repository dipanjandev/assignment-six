"use client";
import MyPlanCount from "@/components/shared/MyPlanCount";
import PlanList from "@/components/shared/PlanList";
import { GymProvider } from "@/context/GymContext";
import React, { useContext } from "react";

const MyPlanPage = () => {
  const { todaysPlan, saveLater } = useContext(GymProvider);
  // console.log(todaysPlan, "todaysPlan");
  // console.log(saveLater, "saveLater");
  return (
    <div>
      <section className="container mx-auto space-y-15 mt-8">
        <div>
          <h1 className="text-5xl font-semibold">MY PLAN</h1>
          <p>Cap of five lifts for today. Finish them, then load more.</p>
        </div>
        <MyPlanCount />
        <PlanList />
      </section>
    </div>
  );
};

export default MyPlanPage;
