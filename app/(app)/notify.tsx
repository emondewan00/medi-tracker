import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import notification from "@/assets/images/notification.gif";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useLocalSearchParams } from "expo-router";
import { fireStore } from "@/firebase.config";
import { getDoc, doc, DocumentData, updateDoc } from "firebase/firestore";
import Toast from "react-native-toast-message";

const Notify = () => {
  const { id, selectedDate } = useLocalSearchParams();
  const [medicine, setMedicine] = useState<DocumentData>();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"pending" | "taken" | "missed">(
    "pending"
  );
  const isDisabled = status === "missed" || status === "taken";

  useEffect(() => {
    const getMedicine = async () => {
      try {
        setLoading(true);
        const medicineRef = doc(fireStore, "medicine", id as string);
        const medicineDoc = await getDoc(medicineRef);
        setMedicine(medicineDoc.data());
        setStatus(medicineDoc?.data()?.status);
      } catch (error) {
        console.error(error, "Error getting document");
      } finally {
        setLoading(false);
      }
    };
    if (id) {
      getMedicine();
    }
  }, [id]);

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  const updateStatus = async (status: "missed" | "taken") => {
    try {
      const medicineRef = doc(fireStore, "medicine", id as string);
      await updateDoc(medicineRef, {
        status,
      });

      setMedicine({ ...medicine, status: status });
      setStatus(status);
      Toast.show({
        text1: `Medicine ${status}`,
        type: "success",
      });
    } catch (error) {
      console.error(error, "Error updating document");
    }
  };



  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Image
        className="w-40 h-40"
        source={notification}
        alt="notification image "
        resizeMode="contain"
      />
      <Text className="text-base font-medium">{selectedDate}</Text>
      <Text className="text-3xl font-bold text-primary">
        {new Date(medicine?.reminder).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </Text>
      <Text className="font-medium text-base">It's time to take </Text>

      {/* medicine card  */}
      <View className="bg-white rounded-xl flex-row p-4 gap-x-4 border border-lightGrayBorder my-4">
        <View className="p-4 bg-white rounded-lg items-center ">
          <Image
            source={{
              uri: medicine?.type?.icon,
            }}
            className="w-12 h-12"
            resizeMode="contain"
            alt="capsule"
          />
        </View>
        <View>
          <Text className="text-xl font-semibold text-primary">
            {medicine?.name}
          </Text>
          <Text className="font-medium">{medicine?.whenToTake}</Text>
          <Text className="">{medicine?.frequency}</Text>
        </View>
        <View className="bg-white rounded-md p-2 items-center justify-center ml-auto border border-lightGrayBorder">
          <Ionicons name="timer-outline" size={24} />
          <Text className="font-bold">
            {new Date(medicine?.reminder).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Text>
        </View>
      </View>

      <View className="flex flex-row gap-x-4">
        <TouchableOpacity
          disabled={isDisabled}
          onPress={() => updateStatus("missed")}
          className={`flex flex-row items-center gap-x-2 border-2 border-red-400 rounded py-2 px-4 `}
        >
          <Ionicons
            style={{
              color: "#f87171",
            }}
            name="close"
            size={24}
          />
          <Text className="text-red-400 font-medium">Missed</Text>
        </TouchableOpacity>

        <TouchableOpacity
          disabled={isDisabled}
          onPress={() => updateStatus("taken")}
          className={`flex flex-row items-center gap-x-2 rounded py-2 px-4 bg-green-500 `}
        >
          <Ionicons name="checkmark-done-outline" size={24} color={"white"} />
          <Text className="text-white ">Taken</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Notify;
