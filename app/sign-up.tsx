import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import InputWithLabel from "@/components/InputWithLabel";
import { Link, router } from "expo-router";
import useAuth from "@/hooks/useAuth";

const SignUp = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { createUserEmailPass, user } = useAuth();

  const onPressSignUp = async () => {
    try {
      await createUserEmailPass(email, password, name);
      setEmail("");
      setName("");
      setPassword("");
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  console.log(user, "sign up page ");

  return (
    <View className="bg-white flex-1 p-8 flex flex-col justify-center">
      <Text className="text-3xl font-bold my-4 text-center ">
        Let's Sign You Up
      </Text>

      <View>
        <InputWithLabel
          value={name}
          onChangeText={setName}
          label="Full Name"
          placeholder="Full Name"
        />
        <InputWithLabel
          value={email}
          onChangeText={setEmail}
          label="Email"
          placeholder="Enter your email"
        />
        <InputWithLabel
          value={password}
          onChangeText={setPassword}
          label="Password"
          placeholder="Enter your password"
        />
        <TouchableOpacity
          onPress={onPressSignUp}
          className="bg-primary p-4 rounded-full mt-4"
        >
          <Text className="text-white text-lg font-bold text-center">
            Sign Up
          </Text>
        </TouchableOpacity>
        <Text className="mt-4 text-lg">
          Already hove you account?{" "}
          <Link href={"/sign-in"} className="text-primary">
            Sign In
          </Link>{" "}
          instead.
        </Text>
      </View>
    </View>
  );
};

export default SignUp;
