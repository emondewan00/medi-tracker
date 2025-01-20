import { View, Pressable, Image } from "react-native";
import React from "react";
import consult from "@/assets/images/consult.png";
import { router } from "expo-router";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const MedicineHeader = () => {
  return (
    <View className="relative">
      <Image
        className="w-full h-60
    "
        source={consult}
        resizeMode="cover"
        alt="consult image"
      />

      <Pressable
        onPress={() => router.back()}
        className="absolute top-4 left-4"
      >
        <FontAwesome5 name={"arrow-left"} size={24} />
      </Pressable>
    </View>
  );
};

export default MedicineHeader;
