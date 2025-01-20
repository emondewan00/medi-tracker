import { View, Text, TextInput } from "react-native";
import React from "react";

type TextInputProps = {
  icon: React.ReactNode;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

const InputWithIcon: React.FC<TextInputProps> = ({
  icon,
  onChangeText,
  value,
  placeholder = "",
}) => {
  return (
    <View className="border border-lightGrayBorder flex-row items-center gap-x-2 p-2 rounded-md bg-white">
      {icon}
      <TextInput
        className="flex-1 pl-2 text-xl"
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default InputWithIcon;
