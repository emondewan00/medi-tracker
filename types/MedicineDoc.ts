type InputValue = {
  name: string;
  type: { name: string; icon: string };
  whenToTake: string;
  frequency: string;
  email: string;
  dateRange: string[];
};

interface MedicineDoc extends InputValue {
  startTime: number;
  endTime: undefined | number;
  reminder: undefined | Date;
  status: "pending" | "taken" | "missed";
}

export default MedicineDoc;
