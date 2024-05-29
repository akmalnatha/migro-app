import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  ScrollView,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import ProjectCard from "@/components/ProjectCard";
import { Chip } from "react-native-paper";

export default function HomeScreen() {
  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      style={{ backgroundColor: "#F9F9F9" }}
    >
      <View className="pt-3 px-4 bg-[#F9F9F9]">
        <Image
          source={require("@/assets/images/migro-text.png")}
          className="w-[108px] h-[44px] mx-auto"
          style={{ resizeMode: "contain" }}
        />
      </View>
      <ScrollView className="mt-2 px-4 bg-[#F9F9F9] pb-40">
        <Text className="text-[20px] font-bold text-black mb-3">
          Featured Projects
        </Text>
        <ProjectCard
          bannerImageUrl={"@/assets/images/migro-text.png"}
          projectTitle={"Kontol"}
          projectDesc={"Nice banget banf"}
          owner={"Akmalkomeng"}
          category={"koool"}
          isWishlist={true}
          backers={12}
          daysToGo={4}
        />
        <View className="w-full flex flex-row items-center justify-between">
          <Text className="text-[20px] font-bold text-black mt-4 mb-3">
            Categories
          </Text>
          <Text className="text-[14px] text-black mt-4 mb-3">
            See All
          </Text>
        </View>
        <View className="flex flex-row flex-wrap gap-4 w-full">
          <Chip
            textStyle={{ fontSize: 14 }}
            style={{ backgroundColor: "#F9FAF5" }}
            elevated
          >
            Art
          </Chip>
          <Chip
            textStyle={{ fontSize: 14 }}
            style={{ backgroundColor: "#F9FAF5" }}
            elevated
          >
            Games
          </Chip>
          <Chip
            textStyle={{ fontSize: 14 }}
            style={{ backgroundColor: "#F9FAF5" }}
            elevated
          >
            Food
          </Chip>
          <Chip
            textStyle={{ fontSize: 14 }}
            style={{ backgroundColor: "#F9FAF5" }}
            elevated
          >
            Food
          </Chip>
          <Chip
            textStyle={{ fontSize: 14 }}
            style={{ backgroundColor: "#F9FAF5" }}
            elevated
          >
            Film & Video
          </Chip>
          <Chip
            textStyle={{ fontSize: 14 }}
            style={{ backgroundColor: "#F9FAF5" }}
            elevated
          >
            Music
          </Chip>
          <Chip
            textStyle={{ fontSize: 14 }}
            style={{ backgroundColor: "#F9FAF5" }}
            elevated
          >
            Fashion
          </Chip>
          <Chip
            textStyle={{ fontSize: 14 }}
            style={{ backgroundColor: "#F9FAF5" }}
            elevated
          >
            Photography
          </Chip>
          <Chip
            textStyle={{ fontSize: 14 }}
            style={{ backgroundColor: "#F9FAF5" }}
            elevated
          >
            Shop & Commercial
          </Chip>
        </View>
        <Text className="text-[20px] font-bold text-black mt-4 mb-3">
          Recommended For You
        </Text>
        <ProjectCard
          bannerImageUrl={"@/assets/images/migro-text.png"}
          projectTitle={"Kontol"}
          projectDesc={"Nice banget banf"}
          owner={"Akmalkomeng"}
          category={"koool"}
          isWishlist={true}
          backers={12}
          daysToGo={4}
        />
        <SafeAreaView/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
