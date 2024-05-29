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
    <SafeAreaView>
      <ScrollView className="pt-3 px-4">
        <Image
          source={require("@/assets/images/migro-text.png")}
          className="w-[108px] h-[44px] mx-auto"
          style={{ resizeMode: "contain" }}
        />
        <Text className="text-[20px] font-bold text-black mt-2">
          Featured Projects
        </Text>
        <ProjectCard
          bannerImageUrl={"@/assets/images/migro-text.png"}
          projectTitle={"Kontol"}
          projectDesc={"Nice banget banf"}
          organization={"Akmalkomeng"}
          category={"koool"}
          isWishlist={true}
          backers={12}
          daysToGo={4}
          isProjectDetail={false}
          isFeaturedProject={true}
          isExploreCard={false}
        />
        <Text className="text-[20px] font-bold text-black mt-4">
          Categories
        </Text>
        <View className="flex flex-row flex-wrap gap-4 w-full">
          <Chip textStyle={{ fontSize: 14 }} >
            All
          </Chip>
          <Chip textStyle={{ fontSize: 14 }} >
            All
          </Chip>
          <Chip textStyle={{ fontSize: 14 }} >
            All
          </Chip>
          <Chip textStyle={{ fontSize: 14 }} >
            All
          </Chip>
          <Chip textStyle={{ fontSize: 14 }} >
            All
          </Chip>
          <Chip textStyle={{ fontSize: 14 }} >
            All
          </Chip>
          <Chip textStyle={{ fontSize: 14 }} >
            All
          </Chip>
        </View>
        <Text className="text-[20px] font-bold text-black mt-4">
          Categories
        </Text>
      <ProjectCard
        bannerImageUrl={"@/assets/images/migro-text.png"}
        projectTitle={"Kontol"}
        projectDesc={"Nice banget banf"}
        organization={"Akmalkomeng"}
        category={"koool"}
        isWishlist={true}
        backers={12}
        daysToGo={4}
        isProjectDetail={false}
        isFeaturedProject={true}
        isExploreCard={false}
      />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
