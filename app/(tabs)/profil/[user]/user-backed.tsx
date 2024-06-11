import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProjectCard from "@/components/ProjectCard";
import BoxPhotoInput from "@/components/BoxPhotoInput";
import { TextInput } from "react-native-paper";
import { Link } from "expo-router";

export default function CreateOverview() {
  return (
    <ScrollView className="p-4 min-h-screen">
      <View style={{ flex: 1, gap: 16 }}>
        <ProjectCard
          projectTitle={"Test Projects"}
          projectDesc={"Nice banget banf"}
          owner={"Akmalkomeng"}
          category={"Category"}
          isWishlist={true}
          backers={12}
          current_funding={0}
          target_funding={0}
          daysToGo={4}
          type="explore"
        />
        <ProjectCard
          projectTitle={"Test Projects"}
          projectDesc={"Nice banget banf"}
          owner={"Akmalkomeng"}
          category={"Category"}
          isWishlist={true}
          backers={12}
          current_funding={0}
          target_funding={0}
          daysToGo={4}
          type="explore"
        />
        <ProjectCard
          projectTitle={"Test Projects"}
          projectDesc={"Nice banget banf"}
          owner={"Akmalkomeng"}
          category={"Category"}
          isWishlist={true}
          backers={12}
          current_funding={0}
          target_funding={0}
          daysToGo={4}
          type="explore"
        />
      </View>
      <SafeAreaView edges={["bottom"]} />
    </ScrollView>
  );
}
