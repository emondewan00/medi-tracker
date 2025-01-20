import { View, Text } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import useAuth from "@/hooks/useAuth";

const HomeHeader = () => {
  const { user } = useAuth();
  return (
    <View className="flex-row items-center justify-between p-4 border-b border-grayCS">
      <Text className="text-2xl font-bold" numberOfLines={1}>
        {user?.displayName ? user.displayName : "Anonymous"}
      </Text>
      <AntDesign name="setting" size={24} color="gray" />
    </View>
  );
};

export default HomeHeader;
