import { Link, router } from "expo-router";
import {
  Button,
  FlatList,
  Image,
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

export default function Index() {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toLocaleDateString()
  );
  const [medicines, setMedicines] = useState<DocumentData[]>([]);
  const [loading, setLoading] = useState(false);
  const { logout, user } = useAuth();

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
          data.push(medication.data());
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

  console.log(medicines.length,"selected")
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
          <View>
            <Text className="text-2xl font-bold">Your Medication Reminder</Text>

            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={sevenDayTime()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => setSelectedDate(item.fullDate)}
                  className={` py-4 px-7 border-lightGrayBorder border rounded-md ${
                    item.fullDate === selectedDate ? "bg-primary" : "bg-gray-50"
                  }`}
                >
                  <Text
                    className={`text-lg font-medium ${
                      item.fullDate === selectedDate
                        ? "text-white"
                        : "text-black"
                    }`}
                  >
                    {item.day}
                  </Text>
                  <Text
                    className={`text-xl font-semibold text-center ${
                      item.fullDate === selectedDate
                        ? "text-white"
                        : "text-black"
                    }`}
                  >
                    {item.date}
                  </Text>
                </TouchableOpacity>
              )}
              contentContainerClassName="gap-x-4 my-3"
            />
            <View className="gap-y-4">
              <View className="bg-blue-400 rounded-xl flex-row p-4 gap-x-4 border border-lightGrayBorder">
                <View className="p-4 bg-white rounded-lg items-center ">
                  <Image
                    source={{
                      uri: "https://cdn-icons-png.flaticon.com/128/2002/2002580.png",
                    }}
                    className="w-12 h-12"
                    resizeMode="contain"
                    alt="capsule"
                  />
                </View>
                <View>
                  <Text className="text-xl font-semibold text-white">
                    Ibrupain
                  </Text>
                  <Text className="font-medium text-white">Before Diner</Text>
                  <Text className="text-white">2 Capsules</Text>
                </View>
                <View className="bg-white rounded-md p-2 items-center justify-center ml-auto">
                  <Ionicons name="timer-outline" size={24} />
                  <Text className="font-semibold">5 minutes</Text>
                </View>
              </View>
              <View className="bg-blue-400 rounded-xl flex-row p-4 gap-x-4 border border-lightGrayBorder">
                <View className="p-4 bg-white rounded-lg items-center ">
                  <Image
                    source={{
                      uri: "https://cdn-icons-png.flaticon.com/128/2002/2002580.png",
                    }}
                    className="w-12 h-12"
                    resizeMode="contain"
                    alt="capsule"
                  />
                </View>
                <View>
                  <Text className="text-xl font-semibold text-white">
                    Ibrupain
                  </Text>
                  <Text className="font-medium text-white">Before Diner</Text>
                  <Text className="text-white">2 Capsules</Text>
                </View>
                <View className="bg-white rounded-md p-2 items-center justify-center ml-auto">
                  <Ionicons name="timer-outline" size={24} />
                  <Text className="font-semibold">5 minutes</Text>
                </View>
              </View>
            </View>
          </View>

          {/* <EmptyMedication /> */}

          <Link href={"/on-boarding"} className="">
            On boarding
          </Link>

          <Link href={"/notify"}>notify </Link>
          <Link href={"/sign-up"}>sign up </Link>
          <Link href={"/add-medicine"}>Add medicine</Link>
          <Button title="Logout" onPress={logout} />
        </View>
      </View>
    </ScrollView>
  );
}
