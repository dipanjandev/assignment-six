"use client";
import MyPlanCount from "@/components/shared/MyPlanCount";
import PlanList from "@/components/shared/PlanList";
import { GymProvider, GymContextType } from "@/context/GymContext";
import { useContext } from "react";

const MyPlanPage = () => {
  const { activeTab = "today", setActiveTab } = useContext(
    GymProvider,
  ) as GymContextType;

  return (
    <div className="min-h-screen text-white pb-12 sm:pb-16">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12 mt-6 sm:mt-10">
        {/* হেডিং ও সাবটাইটেল: মোবাইলে সেন্টারে, ট্যাবলেট/ডেস্কটপে বামে */}
        <div className="space-y-2 sm:space-y-3 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white">
            MY PLAN
          </h1>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto sm:mx-0">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* কাউন্ট সেকশন */}
        <MyPlanCount activeTab={activeTab} />

        {/* প্ল্যান সেকশন */}
        <PlanList activeTab={activeTab} setActiveTab={setActiveTab} />
      </section>
    </div>
  );
};

export default MyPlanPage;
