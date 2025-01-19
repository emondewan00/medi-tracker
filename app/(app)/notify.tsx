import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import notification from "@/assets/images/notification.gif";
import Ionicons from "@expo/vector-icons/Ionicons";

const Notify = () => {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Image
        className="w-40 h-40"
        source={notification}
        alt="notification image "
        resizeMode="contain"
      />
      <Text className="text-base font-medium">12/02/2025</Text>
      <Text className="text-3xl font-bold text-primary">7:00 PM</Text>
      <Text className="font-medium text-base">It's time to take </Text>

      {/* medicine card  */}
      <View className="bg-white rounded-xl flex-row p-4 gap-x-4 border border-lightGrayBorder my-4">
        <View className="p-4 bg-white rounded-lg items-center ">
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/2002/2002580.png",
            }}
            className="w-12 h-12"
            resizeMode="contain"
            alt="capsule"
          />
        </View>
        <View>
          <Text className="text-xl font-semibold text-primary">Ibrupain</Text>
          <Text className="font-medium">Before Diner</Text>
          <Text className="">2 Capsules</Text>
        </View>
        <View className="bg-white rounded-md p-2 items-center justify-center ml-auto border border-lightGrayBorder">
          <Ionicons name="timer-outline" size={24} />
          <Text className="font-bold">5 minutes</Text>
        </View>
      </View>

      <View className="flex flex-row gap-x-4">
        <TouchableOpacity className="flex flex-row items-center gap-x-2 border-2 border-red-400 rounded py-2 px-4">
          <Ionicons
            style={{
              color: "#f87171",
            }}
            name="close"
            size={24}
          />
          <Text className="text-red-400 font-medium">Missed</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex flex-row items-center gap-x-2 rounded py-2 px-4 bg-green-500">
          <Ionicons name="checkmark-done-outline" size={24} color={"white"} />
          <Text className="text-white ">Taken</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Notify;
