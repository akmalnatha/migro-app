import { Image, StyleSheet, Platform, View, Text } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Login from "./login";

export default function HomeScreen() {
  return (
    <View>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({});
