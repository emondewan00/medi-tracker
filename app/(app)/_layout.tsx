import useAuth from "@/hooks/useAuth";
import { Stack, Redirect } from "expo-router";
import { ActivityIndicator } from "react-native";

const AppLayout = () => {
  const { user, status } = useAuth();
  if (status === "loading") return <ActivityIndicator />;

  if (!user) return <Redirect href={"/on-boarding"} />;
  return <Stack screenOptions={{ headerShown: false }} />;
};

export default AppLayout;
