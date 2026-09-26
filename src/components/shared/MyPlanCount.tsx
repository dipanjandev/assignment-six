import { GymProvider } from "@/context/GymContext";
import { IworkoutType } from "@/types/workout.type";
import { useContext } from "react";

interface GymContextType {
  todaysPlan: IworkoutType[];
}

const MyPlanCount = () => {
  const { todaysPlan = [] } = useContext(GymProvider) as GymContextType;
  const totalExercise = todaysPlan.length;
  const minutesTotal = todaysPlan.reduce((acc, crnt) => acc + crnt.duration, 0);
  const caloriesTotal = todaysPlan.reduce(
    (acc, crnt) => acc + crnt.caloriesBurned,
    0,
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 bg-[#13161D] p-5 sm:p-8 lg:p-10 rounded-2xl border border-gray-800/80 gap-6 sm:gap-0">
      {/* Exercises */}
      <div className="text-center sm:text-left">
        <p className="text-xs sm:text-sm font-medium text-gray-400 uppercase tracking-wider">
          Exercises
        </p>
        <h4 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#CCFF00] mt-1">
          {totalExercise}
        </h4>
      </div>

      {/* Minutes */}
      <div className="text-center sm:text-left pt-4 sm:pt-0 border-t sm:border-t-0 sm:border-l-2 border-white/10 sm:px-6 lg:px-8">
        <p className="text-xs sm:text-sm font-medium text-gray-400 uppercase tracking-wider">
          Minutes
        </p>
        <h4 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-1">
          {minutesTotal}
        </h4>
      </div>

      {/* Calories */}
      <div className="text-center sm:text-left pt-4 sm:pt-0 border-t sm:border-t-0 sm:border-l-2 border-white/10 sm:px-6 lg:px-8">
        <p className="text-xs sm:text-sm font-medium text-gray-400 uppercase tracking-wider">
          Calories
        </p>
        <h4 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-1">
          {caloriesTotal}
        </h4>
      </div>
    </div>
  );
};

export default MyPlanCount;
