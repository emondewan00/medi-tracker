import { Link, router } from "expo-router";
import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import HomeHeader from "@/components/HomeHeader";
import EmptyMedication from "@/components/EmptyMedication";
import medicine from "@/assets/images/medication.jpeg";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useEffect, useState } from "react";
import useAuth from "@/hooks/useAuth";
import sevenDayTime from "@/utils/sevenDayTime";
import {
  collection,
  DocumentData,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { fireStore } from "@/firebase.config";
import ScrollAbleDates from "@/components/ScrollAbleDates";

export default function Index() {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toLocaleDateString()
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

          {content}
        </View>
      </View>
    </ScrollView>
  );
}
