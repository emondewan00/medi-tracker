import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import InputWithLabel from "@/components/InputWithLabel";
import { Link } from "expo-router";

const SignIn = () => {
  return (
    <View className="bg-white flex-1 p-8 flex flex-col justify-center">
      <Text className="text-3xl font-bold my-4 text-center ">
        Let's Sign You In
      </Text>
      <Text className="text-3xl font-semibold  text-center text-primary">
        Welcome Back You've been missed
      </Text>

      <View>
        <InputWithLabel label="Email" placeholder="Enter your email" />
        <InputWithLabel label="Password" placeholder="Enter your password" />
        <TouchableOpacity className="bg-primary p-4 rounded-full mt-4">
          <Text className="text-white text-lg font-bold text-center">
            Sign In
          </Text>
        </TouchableOpacity>
        <Text className="mt-4 text-lg">
          Have not any account?{" "}
          <Link href={"/"} className="text-primary">
            Create
          </Link>{" "}
          instead.
        </Text>
      </View>
    </View>
  );
};

export default SignIn;
