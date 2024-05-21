import { View, Text } from "react-native";
import { Link, Stack } from "expo-router";

export default function MyProjectLayout() {
  return (
    <Stack screenOptions={{ headerShadowVisible: false }}>
      <Stack.Screen name="(content)" />
    </Stack>
  );
}
