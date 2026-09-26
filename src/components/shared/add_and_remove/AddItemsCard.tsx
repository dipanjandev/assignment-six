const AddItemsCard = ({ workout }: { workout: { name: string } }) => {
  return (
    <div>
      <h2>{workout.name}</h2>
    </div>
  );
};

export default AddItemsCard;
