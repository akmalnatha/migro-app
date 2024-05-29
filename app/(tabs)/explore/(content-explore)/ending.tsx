import { View, Text, ScrollView } from "react-native";
import { Link } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import ProjectCard from "@/components/ProjectCard";

export default function Ending() {
  return (
    <ScrollView className="p-4">
      <View style={{ flex: 1, gap: 12 }}>
        <ProjectCard
          bannerImageUrl={"@/assets/images/migro-text.png"}
          projectTitle={"Kontol"}
          projectDesc={"Nice banget banf"}
          owner={"Akmalkomeng"}
          category={"koool"}
          isWishlist={true}
          backers={12}
          daysToGo={4}
          type="explore-first"
        />
        <ProjectCard
          bannerImageUrl={"@/assets/images/migro-text.png"}
          projectTitle={"Kontol"}
          projectDesc={"Nice banget banf"}
          owner={"Akmalkomeng"}
          category={"koool"}
          isWishlist={true}
          backers={12}
          daysToGo={4}
          type="explore"
        />
        <ProjectCard
          bannerImageUrl={"@/assets/images/migro-text.png"}
          projectTitle={"Kontol"}
          projectDesc={"Nice banget banf"}
          owner={"Akmalkomeng"}
          category={"koool"}
          isWishlist={true}
          backers={12}
          daysToGo={4}
          type="explore"
        />
        <ProjectCard
          bannerImageUrl={"@/assets/images/migro-text.png"}
          projectTitle={"Kontol"}
          projectDesc={"Nice banget banf"}
          owner={"Akmalkomeng"}
          category={"koool"}
          isWishlist={true}
          backers={12}
          daysToGo={4}
          type="explore"
        />
        <ProjectCard
          bannerImageUrl={"@/assets/images/migro-text.png"}
          projectTitle={"Kontol"}
          projectDesc={"Nice banget banf"}
          owner={"Akmalkomeng"}
          category={"koool"}
          isWishlist={true}
          backers={12}
          daysToGo={4}
          type="explore"
        />
      </View>
      <SafeAreaView edges={["bottom"]}/>
    </ScrollView>
  );
}
