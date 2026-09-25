const MyPlanCount = () => {
  return (
    <div className="grid grid-cols-3 bg-[#13161D] p-10 rounded-2xl">
      <div>
        <p>Exercises</p>
        <h4 className="text-5xl font-bold text-[#CCFF00]">0</h4>
      </div>
      <div className="border-l-2 px-5 border-white/10">
        <p>Minutes</p>
        <h4 className="text-5xl font-bold">0</h4>
      </div>
      <div className="border-l-2 px-5 border-white/10">
        <p>Calories</p>
        <h4 className="text-5xl font-bold">0</h4>
      </div>
    </div>
  );
};

export default MyPlanCount;
