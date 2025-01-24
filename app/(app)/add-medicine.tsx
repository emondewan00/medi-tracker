import { View, ScrollView } from "react-native";
import React from "react";
import MedicineHeader from "@/components/add-medicine/MedicineHeader";
import MedicineForm from "@/components/add-medicine/MedicineForm";

const AddMedicine = () => {
  return (
    <ScrollView>
      <View className="pb-10">
        <MedicineHeader />
        <MedicineForm />
      </View>
    </ScrollView>
  );
};

export default AddMedicine;
