import { Slot, Stack } from "expo-router";
import "./global.css";
import AuthProvider from "@/provider/AuthProvider";
import Toast from "react-native-toast-message";

export default function RootLayout() {
  return (
    <AuthProvider>
      {/* <Stack screenOptions={{ headerShown: false }} /> */}
      <Slot />
      <Toast />
    </AuthProvider>
  );
}
