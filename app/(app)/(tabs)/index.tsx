import { Image, ScrollView, Text, View } from "react-native";
import HomeHeader from "@/components/HomeHeader";
import medicine from "@/assets/images/medication.jpeg";
import { useState } from "react";
import sevenDayTime from "@/utils/sevenDayTime";

import ScrollAbleDates from "@/components/ScrollAbleDates";
import MedicineContent from "@/components/MedicineContent";

export default function Index() {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toLocaleDateString()
  );

  return (
    <ScrollView className=" flex-1 bg-white h-full">
      <View>
        <HomeHeader />
        <View className="px-4">
          <Image
            className="w-full h-60 rounded-xl my-6"
            source={medicine}
            resizeMode="cover"
            alt="medicine"
          />

          <Text className="text-2xl font-bold">Your Medication Reminder</Text>
          <ScrollAbleDates
            dates={sevenDayTime()}
            onPress={setSelectedDate}
            selectedDate={selectedDate}
          />

          <MedicineContent selectedDate={selectedDate} />
        </View>
      </View>
    </ScrollView>
  );
}
