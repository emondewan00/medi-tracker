import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";

type ScrollAbleDatesProps = {
  dates: Array<{
    id: number;
    day: string;
    date: number;
    month: number;
    year: number;
    fullDate: string;
  }>;
  onPress: (date: string) => void;
  selectedDate: string;
};

const ScrollAbleDates: React.FC<ScrollAbleDatesProps> = ({
  dates,
  onPress,
  selectedDate,
}) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={dates}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => onPress(item.fullDate)}
          className={` py-4 px-7 border-lightGrayBorder border rounded-md ${
            item.fullDate === selectedDate ? "bg-primary" : "bg-gray-50"
          }`}
        >
          <Text
            className={`text-lg font-medium ${
              item.fullDate === selectedDate ? "text-white" : "text-black"
            }`}
          >
            {item.day}
          </Text>
          <Text
            className={`text-xl font-semibold text-center ${
              item.fullDate === selectedDate ? "text-white" : "text-black"
            }`}
          >
            {item.date}
          </Text>
        </TouchableOpacity>
      )}
      contentContainerClassName="gap-x-4 my-3"
    />
  );
};

export default ScrollAbleDates;
