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

export default function Index() {
  const [selectedDate, setSelectedDate] = useState(1);
  const { user, status, logout } = useAuth();

  useEffect(() => {
    if (!user && status === "idle") {
      // router.push("/on-boarding");
    }
  }, [user]);

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
              data={[1, 2, 3]}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => setSelectedDate(item)}
                  className={` py-4 px-7 border-lightGrayBorder border rounded-md ${
                    item === selectedDate ? "bg-primary" : "bg-gray-50"
                  }`}
                >
                  <Text
                    className={`text-lg font-medium ${
                      item === selectedDate ? "text-white" : "text-black"
                    }`}
                  >
                    Fr
                  </Text>
                  <Text
                    className={`text-xl font-semibold ${
                      item === selectedDate ? "text-white" : "text-black"
                    }`}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
              contentContainerClassName="gap-x-4 my-3"
            />
            <View className="gap-y-4">
              <View className="bg-[#C5C9FF] rounded-xl flex-row p-4 gap-x-4 border border-lightGrayBorder">
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
                  <Text className="text-xl font-semibold">Ibrupain</Text>
                  <Text className="font-medium">Before Diner</Text>
                  <Text className="text-white">2 Capsules</Text>
                </View>
                <View className="bg-white rounded-md p-2 items-center justify-center ml-auto">
                  <Ionicons name="timer-outline" size={24} />
                  <Text className="font-semibold">5 minutes</Text>
                </View>
              </View>
              <View className="bg-[#C5C9FF] rounded-xl flex-row p-4 gap-x-4 border border-lightGrayBorder">
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
                  <Text className="text-xl font-semibold">Ibrupain</Text>
                  <Text className="font-medium">Before Diner</Text>
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
          <Button onPress={logout} title="Logout" />
        </View>
      </View>
    </ScrollView>
  );
}
