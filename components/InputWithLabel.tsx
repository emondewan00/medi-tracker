import { View, Text, TextInput } from "react-native";
import React from "react";

type Props = {
  label: string;
  placeholder?: string;
  inputStyle?: string;
};

const InputWithLabel: React.FC<Props> = ({
  label,
  placeholder = "",
  inputStyle,
}) => {
  return (
    <View className={`mb-4 `}>
      <Text className="text-lg">{label}</Text>
      <TextInput
        placeholder={placeholder}
        className={`border  rounded-md border-grayCS p-4 mt-2 ${inputStyle}`}
      />
    </View>
  );
};

export default InputWithLabel;
