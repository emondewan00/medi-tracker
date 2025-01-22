import { View, Text } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import useAuth from "@/hooks/useAuth";
import { Link } from "expo-router";

const HomeHeader = () => {
  const { user } = useAuth();
  return (
    <View className="flex-row items-center justify-between p-4 border-b border-grayCS">
      <Text className="text-2xl font-bold" numberOfLines={1}>
        {user?.displayName ? user.displayName : "Anonymous"}
      </Text>
      <Link href={"/add-medicine"}>
        <AntDesign name="medicinebox" size={24} color="blue" />
      </Link>
    </View>
  );
};

export default HomeHeader;
