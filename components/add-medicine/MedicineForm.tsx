import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import InputWithIcon from "./InputWithIcon";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "@/constant/Colors";
import { TypeList, WhenToTake } from "@/constant/Options";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Picker } from "@react-native-picker/picker";

import { collection, addDoc } from "firebase/firestore";
import { fireStore } from "@/firebase.config";
import useAuth from "@/hooks/useAuth";
import DateInput from "./DateInput";
import { MedicineDoc } from "@/types";
import dateRangeArray from "@/utils/dateRangeArray";

const MedicineForm = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const [formValue, setFormValue] = useState<MedicineDoc>({
    name: "",
    type: {
      name: "Tablet",
      icon: "https://cdn-icons-png.flaticon.com/128/2002/2002580.png",
    },
    whenToTake: "When To Take",
    frequency: "",
    startTime: Date.now(),
    endTime: undefined,
    reminder: undefined,
    status: "pending",
    email: user?.email as string,
    dateRange: [],
  });

  const changeFormValue = (name: string, value: any) => {
    setFormValue({ ...formValue, [name]: value });
  };

  const onPress = async (data: any) => {
    try {
      setLoading(true);
      await addDoc(collection(fireStore, "medicine"), {
        ...data,
        email: user?.email,
        dateRange: dateRangeArray(
          formValue.startTime,
          formValue.endTime as number
        ),
      });
    } catch (error) {
      console.error(error, "error writing document");
    } finally {
      setLoading(false);
    }
  };

  const formateDate = (value: Date | undefined | number) => {
    if (value === undefined) return undefined;

    const date = new Date(value);

    return date.toLocaleDateString([], {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const formateTime = (value: Date | undefined) => {
    if (value === undefined) return undefined;
    return value.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <View className="mt-8 px-6 gap-y-4">
      <Text className="text-2xl font-bold">Add New Medication</Text>

      {/* medicine name  */}
      <InputWithIcon
        icon={<Ionicons style={styles.icon} name="medkit-outline" size={20} />}
        onChangeText={(text) => changeFormValue("name", text)}
        value={formValue.name}
        placeholder="Medicine Name"
      />

      {/* medicine type */}
      <FlatList
        data={TypeList}
        renderItem={({ item }) => (
          <TouchableOpacity
            className={`py-3 px-4 border border-lightGrayBorder rounded ${
              formValue.type.name === item.name ? "bg-primary" : "bg-white"
            }`}
            onPress={() => changeFormValue("type", item)}
          >
            <Text
              className={`${
                formValue.type.name === item.name ? "text-white" : "text-black"
              }`}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="gap-2"
      />

      {/* dose */}
      <InputWithIcon
        value={formValue.frequency}
        icon={<Ionicons style={styles.icon} name="eyedrop-outline" size={20} />}
        onChangeText={(text) => changeFormValue("frequency", text)}
        placeholder="Dose EX.2,5ml"
      />

      {/* when to take  dropdown */}
      <View className="border border-lightGrayBorder flex-row items-center p-2 rounded-md bg-white">
        <AntDesign name="clockcircleo" style={styles.icon} size={20} />
        <Picker
          selectedValue={formValue.whenToTake}
          onValueChange={(itemValue) =>
            changeFormValue("whenToTake", itemValue)
          }
          style={{
            flex: 1,
          }}
        >
          {WhenToTake.map((whenToTake, i) => (
            <Picker.Item key={i} label={whenToTake} value={whenToTake} />
          ))}
        </Picker>
      </View>

      {/* start and End date */}
      <View className="flex flex-row gap-x-4">
        <DateInput
          icon={
            <Ionicons style={styles.icon} name="calendar-outline" size={20} />
          }
          isIcon={true}
          value={new Date(formValue.startTime)}
          formattedValue={formateDate(formValue.startTime)}
          changeFormValue={(date) => changeFormValue("startTime", date)}
          placeholder="Start date"
          mode="date"
        />

        <DateInput
          icon={
            <Ionicons style={styles.icon} name="calendar-outline" size={20} />
          }
          isIcon={true}
          value={
            typeof formValue.endTime === "number"
              ? new Date(formValue.endTime)
              : undefined
          }
          formattedValue={formateDate(formValue.endTime)}
          changeFormValue={(date) => changeFormValue("endTime", date)}
          placeholder="End date"
          mode="date"
        />
      </View>

      {/* reminder */}
      <DateInput
        changeFormValue={(date) => changeFormValue("reminder", date)}
        icon={<Ionicons style={styles.icon} name="timer-outline" size={20} />}
        isIcon={true}
        value={formValue.reminder}
        placeholder="Reminder"
        mode="time"
        formattedValue={formateTime(formValue.reminder)}
      />

      <TouchableOpacity
        onPress={() => onPress(formValue)}
        disabled={loading}
        className="flex-row items-center bg-primary justify-center rounded-md gap-x-2"
      >
        {loading ? (
          <ActivityIndicator size={"large"} color="white" className="py-2" />
        ) : (
          <>
            <AntDesign
              name="pluscircle"
              size={20}
              style={{
                color: "white",
              }}
            />
            <Text className="text-xl font-bold  py-4 text-center text-white ">
              Add Medication
            </Text>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default MedicineForm;

const styles = StyleSheet.create({
  icon: {
    color: Colors.PRIMARY,
    borderRightWidth: 1,
    borderColor: Colors.LIGHT_GRAY_BORDER,
    paddingRight: 12,
  },
});
