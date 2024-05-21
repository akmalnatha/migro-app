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
import ProjectCard from "@/components/ProjectCard";

const categories = [
  "Art",
  "Shop & Commercial",
  "Games",
  "Crafts",
  "Design",
  "Comic & Illustration",
  "Food",
  "Music",
  "Fashion",
];

export default function HomeScreen() {
  return (
    <ScrollView className=" flex-col bg-white">
      <View className=" w-full flex-col items-center pt-20 px-4">
        <Image
          source={require("../../assets/images/migro-text.png")}
          className="h-11 mb-6"
          style={{ resizeMode: "contain" }}
        />
        <Text className=" font-bold text-base w-full items-start mb-3">
          Featured Projects
        </Text>
        <ProjectCard
          backers={20}
          bannerImageUrl="dsdsa"
          category="Sport"
          daysToGo={3}
          isWishlist={false}
          projectTitle="CRYPTID"
          organization={"ONE"}
          projectDesc={
            '"Cryptid" follows a team of unlikely heroes as they navigate a world where myths and legends are real. Set against the backdrop of a hidden society of cryptids, creatures thought to be merely folklore, the comic explores themes of acceptance, identity, and the blurred lines between the natural and supernatural worlds. As the team unravels mysteries and confronts ancient evils, they must also confront their own inner demons, forging bonds that transcend species and facing threats that challenge the very fabric of reality.'
          }
          isProjectDetail={false}
          isFeaturedProject={true}
          isExploreCard={false}
        />
        <Text className=" font-bold text-base w-full items-start mt-4">
          Categories
        </Text>
        <View className=" flex-row flex-wrap gap-4 mt-[0px]">
          {categories.map((category, index) => (
            <View
              style={{ elevation: 2 }}
              className=" p-2 rounded bg-[#F9FAF5]"
            >
              <Text key={index.toString()}>{category}</Text>
            </View>
          ))}
        </View>
        <Text className=" font-bold text-base w-full items-start mt-4">
          Recommended For You
        </Text>
      </View>
      <ScrollView horizontal className=" pl-4 pb-10 pt-2">
        <View className=" w-80 object-fill mr-3">
          <ProjectCard
            backers={20}
            bannerImageUrl="dsdsa"
            category="Sport"
            daysToGo={3}
            isWishlist={true}
            projectTitle="CRYPTID"
            organization={"ONE"}
            projectDesc={
              '"Cryptid" follows a team of unlikely heroes as they navigate a world where myths and legends are real. Set against the backdrop of a hidden society of cryptids, creatures thought to be merely folklore, the comic explores themes of acceptance, identity, and the blurred lines between the natural and supernatural worlds. As the team unravels mysteries and confronts ancient evils, they must also confront their own inner demons, forging bonds that transcend species and facing threats that challenge the very fabric of reality.'
            }
            isProjectDetail={false}
            isFeaturedProject={true}
            isExploreCard={false}
          />
        </View>
        <View className=" w-80 object-fill mr-3">
          <ProjectCard
            backers={20}
            bannerImageUrl="dsdsa"
            category="Sport"
            daysToGo={3}
            isWishlist={false}
            projectTitle="CRYPTID"
            organization={"ONE"}
            projectDesc={
              '"Cryptid" follows a team of unlikely heroes as they navigate a world where myths and legends are real. Set against the backdrop of a hidden society of cryptids, creatures thought to be merely folklore, the comic explores themes of acceptance, identity, and the blurred lines between the natural and supernatural worlds. As the team unravels mysteries and confronts ancient evils, they must also confront their own inner demons, forging bonds that transcend species and facing threats that challenge the very fabric of reality.'
            }
            isProjectDetail={false}
            isFeaturedProject={true}
            isExploreCard={false}
          />
        </View>
        <View className=" w-80 object-fill mr-3">
          <ProjectCard
            backers={20}
            bannerImageUrl="dsdsa"
            category="Sport"
            daysToGo={3}
            isWishlist={true}
            projectTitle="CRYPTID"
            organization={"ONE"}
            projectDesc={
              '"Cryptid" follows a team of unlikely heroes as they navigate a world where myths and legends are real. Set against the backdrop of a hidden society of cryptids, creatures thought to be merely folklore, the comic explores themes of acceptance, identity, and the blurred lines between the natural and supernatural worlds. As the team unravels mysteries and confronts ancient evils, they must also confront their own inner demons, forging bonds that transcend species and facing threats that challenge the very fabric of reality.'
            }
            isProjectDetail={false}
            isFeaturedProject={true}
            isExploreCard={false}
          />
        </View>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
