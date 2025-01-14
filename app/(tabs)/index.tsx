import { Link } from "expo-router";
import {
  FlatList,
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import HomeHeader from "@/components/HomeHeader";
import EmptyMedication from "@/components/EmptyMedication";
import consult from "@/assets/images/consult.png";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TypeList } from "@/constant/Options";

export default function Index() {
  return (
    <View className="bg-white flex-1 ">
      <HomeHeader />

      <View>
        <View className="relative">
          <Image
            className="w-full h-60
          "
            source={consult}
            resizeMode="cover"
            alt="consult image"
          />

          <Pressable className="absolute top-4 left-4">
            <FontAwesome5 name={"arrow-left"} size={24} />
          </Pressable>
        </View>
        <View className="mt-8 px-4 gap-y-4">
          <Text className="text-2xl font-bold">Add New Medication</Text>
          <View>
            <Text className="text-grayCS mb-1">Medication Name</Text>
            <View className="border border-grayCS flex-row items-center gap-x-2 p-2 rounded-md">
              <Ionicons name="bag-add" size={20} />
              <TextInput
                className="flex-1 border-l pl-2 border-grayCS text-xl"
                placeholder="Name"
              />
            </View>
          </View>
          <View>
            <Text className="text-grayCS mb-2">Type</Text>
            <FlatList
              data={TypeList}
              renderItem={({ item }) => (
                <View>
                  <TouchableOpacity className="py-3 px-4 border border-grayCS rounded">
                    <Text>{item.name}</Text>
                  </TouchableOpacity>
                </View>
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerClassName="gap-2"
            />
          </View>
          <View>
            <Text className="text-grayCS mb-2">Dose</Text>
            <TextInput
              className="border border-grayCS rounded-md"
              placeholder="Ex. 2, 15ml etc"
            />
          </View>
          <View>
            <Text className="text-grayCS mb-2">When to Take </Text>
            <TextInput
              className="border border-grayCS rounded-md"
              placeholder="Ex. Daily, Twice a Day etc"
            />
          </View>
          <View>
            <View>
              <Text>Start</Text>
              <TextInput />
            </View>
          </View>
          <View>
            <Text>Get Reminder</Text>
            <Pressable className="flex-row items-center">
              <Ionicons name="alarm-outline" size={24} />
              <Text className="ml-2 text-lg">Add Reminder</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View className="px-4">
        {/* <EmptyMedication /> */}

        <Link href={"/on-boarding"} className="">
          On boarding
        </Link>
      </View>
    </View>
  );
}
