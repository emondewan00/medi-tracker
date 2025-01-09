import { Tabs } from "expo-router";
import { Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome5";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        // tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          borderTopColor: "#0061FF1A",
          borderTopWidth: 1,
          minHeight: 70,
          padding: 0,
          paddingTop: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome name={"home"} size={24} color={color} />
          ),
          tabBarLabel: "Home",
        }}
      />
      <Tabs.Screen name="addNew" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
