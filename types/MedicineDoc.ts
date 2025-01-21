type InputValue = {
  name: string;
  type: string;
  whenToTake: string;
  frequency: string;
};

interface MedicineDoc extends InputValue {
  startTime: Date;
  endTime: undefined | Date;
  reminder: undefined | Date;
  status: "pending" | "taken" | "missed";
}

export default MedicineDoc;
