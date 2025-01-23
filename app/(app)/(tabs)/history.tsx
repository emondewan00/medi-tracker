import {
  View,
  Text,
  ScrollView,
  Image,
  ActivityIndicator,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ScrollAbleDates from "@/components/ScrollAbleDates";
import sevenDayTime from "@/utils/sevenDayTime";
import historyImg from "@/assets/images/med-history.png";
import {
  collection,
  DocumentData,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import useAuth from "@/hooks/useAuth";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import EmptyMedication from "@/components/EmptyMedication";
import { fireStore } from "@/firebase.config";
const History = () => {
  const sevenDaysBefore = new Date();
  sevenDaysBefore.setDate(sevenDaysBefore.getDate() - 7);
  const [selectedDate, setSelectedDate] = useState(
    sevenDaysBefore.toLocaleDateString()
  );

  const [medicines, setMedicines] = useState<DocumentData[]>([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const getMedications = async () => {
      try {
        setLoading(true);
        const medicineRef = collection(fireStore, "medicine");

        const documents = query(
          medicineRef,
          where("email", "==", user?.email),
          where("dateRange", "array-contains", selectedDate)
        );

        const medications = await getDocs(documents);

        const data: DocumentData[] = [];
        medications.forEach((medication) => {
          data.push({ ...medication.data(), id: medication.id });
        });
        setMedicines(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getMedications();
  }, [selectedDate, user?.email]);

  let content = null;

  if (loading) {
    content = (
      <View style={{ flex: 1 }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  } else if (medicines.length > 0) {
    content = (
      <View className="gap-y-4 pb-4">
        {medicines.map((medicine) => (
          <Pressable
            onPress={() =>
              router.push({
                pathname: "/notify",
                params: { id: medicine.id, selectedDate },
              })
            }
            key={medicine.id}
            className="bg-blue-400 rounded-xl flex-row p-4 gap-x-4 border border-lightGrayBorder"
          >
            <View className="p-4 bg-white rounded-lg items-center ">
              <Image
                source={{
                  uri: medicine.type.icon,
                }}
                className="w-12 h-12"
                resizeMode="contain"
                alt="capsule"
              />
            </View>
            <View>
              <Text className="text-xl font-semibold text-white">
                {medicine.name}
              </Text>
              <Text className="font-medium text-white">
                {medicine.whenToTake}
              </Text>
              <Text className="text-white">{medicine.frequency}</Text>
            </View>
            <View className="bg-white rounded-md p-2 items-center justify-center ml-auto">
              <Ionicons name="timer-outline" size={24} />
              <Text className="font-semibold">
                {new Date(medicine.reminder).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </Text>
            </View>
          </Pressable>
        ))}
      </View>
    );
  } else {
    content = <EmptyMedication />;
  }

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

        {content}
      </ScrollView>
    </SafeAreaView>
  );
};

export default History;
