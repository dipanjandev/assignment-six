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
    <div className="grid grid-cols-3 bg-[#13161D] p-10 rounded-2xl">
      <div>
        <p>Exercises</p>
        <h4 className="text-5xl font-bold text-[#CCFF00]">{totalExercise}</h4>
      </div>
      <div className="border-l-2 px-5 border-white/10">
        <p>Minutes</p>
        <h4 className="text-5xl font-bold">{minutesTotal}</h4>
      </div>
      <div className="border-l-2 px-5 border-white/10">
        <p>Calories</p>
        <h4 className="text-5xl font-bold">{caloriesTotal}</h4>
      </div>
    </div>
  );
};

export default MyPlanCount;
