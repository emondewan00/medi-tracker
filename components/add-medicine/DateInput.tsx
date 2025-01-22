import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

type DateInputProps = {
  value: undefined | Date;
  changeFormValue: (value: any) => void;
  icon: React.ReactNode;
  isIcon: boolean;
  formattedValue: string | undefined;
  placeholder?: string;
  mode: "time" | "date";
};

const DateInput: React.FC<DateInputProps> = ({
  value,
  changeFormValue,
  icon,
  isIcon,
  formattedValue,
  placeholder = "Select date",
  mode,
}) => {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <Pressable
      onPress={() => setShowTimer(true)}
      className="border border-lightGrayBorder flex-row items-center gap-x-2 p-2 rounded-md bg-white flex-1"
    >
      {isIcon && icon}
      {showTimer && (
        <DateTimePicker
          minimumDate={new Date()}
          value={value || new Date()}
          mode={mode}
          onChange={(e, date) => {
            if (mode === "date") {
              setShowTimer(false);
              changeFormValue(e.nativeEvent.timestamp);
            } else {
              setShowTimer(false);
              changeFormValue(date);
            }
          }}
        />
      )}

      <Text className="text-lg p-[10]">
        {formattedValue ? formattedValue : placeholder}
      </Text>
    </Pressable>
  );
};

export default DateInput;
