import { View, ScrollView } from "react-native";
import React from "react";
import MedicineHeader from "@/components/add-medicine/MedicineHeader";
import MedicineForm from "@/components/add-medicine/MedicineForm";

const AddMedicine = () => {
  return (
    <ScrollView>
      <View>
        <MedicineHeader />
        <MedicineForm />
      </View>
    </ScrollView>
  );
};

export default AddMedicine;
