import { Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ScrollAbleDates from "@/components/ScrollAbleDates";
import sevenDayTime from "@/utils/sevenDayTime";
import historyImg from "@/assets/images/med-history.png";
import MedicineContent from "@/components/MedicineContent";

const History = () => {
  const sevenDaysBefore = new Date();
  sevenDaysBefore.setDate(sevenDaysBefore.getDate() - 7);
  const [selectedDate, setSelectedDate] = useState(
    sevenDaysBefore.toLocaleDateString()
  );

  return (
    <SafeAreaView>
      <ScrollView className="h-full bg-white px-6">
        <Image
          source={historyImg}
          alt="medi history image "
          resizeMode="cover"
          className="w-full h-60 rounded-xl my-6"
        />
        <Text className="text-2xl font-bold mt-2">
          Your Medication Reminder
        </Text>

        <ScrollAbleDates
          dates={sevenDayTime(sevenDaysBefore)}
          onPress={setSelectedDate}
          selectedDate={selectedDate}
        />
        <MedicineContent selectedDate={selectedDate} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default History;
