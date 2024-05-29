import { View, Text } from "react-native";
import { Link, Stack } from "expo-router";

export default function MyProjectLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" options={{ title: "Log In" }} />
      <Stack.Screen name="register" options={{ title: "Register" }} />
    </Stack>
  );
}
