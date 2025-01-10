import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-green-500">hi there</Text>
      <Link href={"/on-boarding"} className="">
        On boarding
      </Link>
    </View>
  );
}
