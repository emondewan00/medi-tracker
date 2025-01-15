import { Link } from "expo-router";
import { ScrollView, View } from "react-native";
import HomeHeader from "@/components/HomeHeader";
import EmptyMedication from "@/components/EmptyMedication";

export default function Index() {
  return (
    <ScrollView>
      <View className=" flex-1 ">
        <HomeHeader />
        <View className="px-4">
          <EmptyMedication />

          <Link href={"/on-boarding"} className="">
            On boarding
          </Link>
          <Link href={"/add-medicine"} className="">
            Add Medicine
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}
