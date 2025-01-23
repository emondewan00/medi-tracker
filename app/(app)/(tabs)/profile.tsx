import { View, Text, ScrollView, Image, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import useAuth from "@/hooks/useAuth";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const navigationItems = [
  {
    id: 1,
    title: "Add New Medication",
    path: "/add-medication",
    icon: (
      <AntDesign
        name="pluscircle"
        size={20}
        color={"#60a5fa"}
        className="bg-lightPrimary rounded-xl p-4"
      />
    ),
  },
  {
    id: 2,
    title: "My Medication",
    path: "/",
    icon: (
      <AntDesign
        name="medicinebox"
        size={20}
        color={"#60a5fa"}
        className="bg-lightPrimary rounded-xl p-4"
      />
    ),
  },
  {
    id: 3,
    title: "History",
    path: "/",
    icon: (
      <FontAwesome5
        name="history"
        size={20}
        color={"#60a5fa"}
        className="bg-lightPrimary rounded-xl p-4"
      />
    ),
  },
];

const Profile = () => {
  const { logout, user } = useAuth();
  return (
    <SafeAreaView>
      <ScrollView className="bg-white h-full p-4">
        <Text className="text-3xl">Profile</Text>
        <View className="items-center my-10">
          <Image
            source={{
              uri: "https://tinyurl.com/5n72xdvv",
            }}
            className="size-40 rounded-full mb-2"
            resizeMode="cover"
            alt="profile picture"
          />
          <Text className="font-semibold text-2xl">
            {user?.displayName ? user.displayName : "Anonymous"}
          </Text>
          <Text className=" text-gray-600">{user?.email}</Text>
        </View>
        <View className="gap-y-6 px-8">
          {navigationItems.map((item) => (
            <View key={item.id} className="flex flex-row items-center gap-x-4">
              {item.icon}
              <Text className="text-xl font-medium">{item.title}</Text>
            </View>
          ))}
          <Pressable
            onPress={logout}
            className="flex flex-row items-center gap-x-4"
          >
            <AntDesign
              name={"logout"}
              size={20}
              color={"#60a5fa"}
              className="bg-lightPrimary rounded-xl p-4"
            />
            <Text className="text-xl font-medium">Logout</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
