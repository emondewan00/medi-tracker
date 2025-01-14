import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import HomeHeader from "@/components/HomeHeader";
import medicine from "@/assets/images/medicine.png";
import EmptyMedication from "@/components/EmptyMedication";

export default function Index() {
  return (
    <View className="bg-white flex-1 ">
      <HomeHeader />

      <View className="px-4">
        <EmptyMedication />

        <Link href={"/on-boarding"} className="">
          On boarding
        </Link>
      </View>
    </View>
  );
}
