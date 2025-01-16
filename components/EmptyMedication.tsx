import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import medicine from "@/assets/images/medicine.png";
import { router } from "expo-router";

const EmptyMedication = () => {
  return (
    <View className="items-center justify-center">
      <View className="items-center my-8">
        <Image
          className="w-40 h-40"
          source={medicine}
          resizeMode="contain"
          alt="medicine"
        />
      </View>
      <Text className="font-bold text-3xl text-center ">No Medications!</Text>
      <Text className="text-base text-grayCS mt-2">
        You have 0 Medication Setup,please setup a new one.
      </Text>
      <TouchableOpacity
        onPress={() => router.push("/add-medicine")}
        className="bg-primary p-4 rounded-md mt-4 w-full"
      >
        <Text className="text-white text-center">+ Add New Medication</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmptyMedication;
