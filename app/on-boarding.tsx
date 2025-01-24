import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import onBoarding from "@/assets/images/home-medi-track.jpg";
import { Link } from "expo-router";

const OnBoarding = () => {
  return (
    <View className="flex-1">
      <View className="flex flex-row justify-center h-1/2">
        <Image
          source={onBoarding}
          resizeMode="contain"
          className="w-52 h-full rounded-3xl "
        />
      </View>
      <View className="bg-primary flex-1 p-6 justify-center">
        <Text className="text-center text-4xl text-white font-semibold">
          Stay on Track ,Stay Healthy !
        </Text>
        <Text className="text-white text-xl text-center mt-3">
          Track your medi, take control of your health. Stay consistent , stay
          confident.
        </Text>
        <Link
          href={"/sign-in"}
          asChild
          className="bg-white flex flex-row items-center justify-center py-4 rounded-full mt-4"
        >
          <TouchableOpacity>
            <Text className="text-primary text-xl text-center">Continue</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default OnBoarding;
