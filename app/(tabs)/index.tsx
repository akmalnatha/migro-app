import {
  Image,
  StyleSheet,
  Platform,
  View,
  ScrollView,
  FlatList,
  ListRenderItem,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";
import ProjectCard from "@/components/ProjectCard";
import { Chip, Text } from "react-native-paper";
import { useState, useEffect } from "react";
import { fetchProjects } from "@/services/ProjectService";
import { Category, Project } from "@/constants/Types";
import { fetchCategories } from "@/services/CategoryService";
import { useCategory } from "@/context/CategoryContext";

export default function HomeScreen() {
  const router = useRouter();
  const category_context = useCategory()
  const [projects, setProjects] = useState<Project[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  function onPressChip(category: string) {
    category_context.setCategoryPreference(category)
    router.push("/(tabs)/explore/(content-explore)");
  }

  useEffect(() => {
    const getProjects = async () => {
      const data = await fetchProjects();
      setProjects(data);
    };
    const getCategories = async () => {
      const data = await fetchCategories();
      setCategories(data);
    };

    getProjects();
    getCategories();
  }, []);
  const featuredProject = projects.find((project) => project.is_recommended);
  const renderRecommendedProjects: ListRenderItem<Project> = ({ item, index }) => (
    <View className={index != 0 ? "ml-3" : ""}>
      {item.is_recommended ? (
        <ProjectCard
          backers={item.backers}
          current_funding={item.current_funding}
          target_funding={item.target_funding}
          bannerImageUrl={item.overview_image}
          category={item.category}
          daysToGo={Math.ceil(
            (new Date(item.deadline_date).getTime() - new Date().getTime()) /
              (1000 * 60 * 60 * 24)
          )}
          isWishlist={false}
          owner={item.owner}
          projectDesc={item.description}
          projectTitle={item.name}
          isProjectDetail={false}
          type="featured"
        />
      ) : (
        <></>
      )}
    </View>
  );

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
      <ScrollView className="mt-2 bg-[#F9F9F9]">
        <View className="px-4">
          <Text className="text-[20px] font-bold text-black mb-3">
            Featured Projects
          </Text>
          {featuredProject && (
            <ProjectCard
              backers={featuredProject.backers}
              current_funding={featuredProject.current_funding}
              target_funding={featuredProject.target_funding}
              bannerImageUrl={featuredProject.overview_image}
              category={featuredProject.category}
              daysToGo={Math.ceil(
                (new Date(featuredProject.deadline_date).getTime() -
                  new Date().getTime()) /
                  (1000 * 60 * 60 * 24)
              )}
              isWishlist={false}
              owner={featuredProject.owner}
              projectDesc={featuredProject.description}
              projectTitle={featuredProject.name}
              isProjectDetail={false}
              type="featured"
            />
          )}
        </View>
        <View className="w-full px-4">
          <Text className="text-[20px] font-bold text-black mt-4 mb-3">
            Categories
          </Text>
        </View>
        <View className="px-4 flex flex-row flex-wrap gap-3 w-full">
          {categories.map((category, index) => (
            <Chip
              key={index}
              textStyle={{ fontSize: 14 }}
              style={{
                backgroundColor: "#F9FAF5",
              }}
              elevated
              onPress={() => onPressChip(category.name)}
            >
              {category.name}
            </Chip>
          ))}
        </View>
        <Text className="text-[20px] px-4 font-bold text-black mt-4 mb-3">
          Recommended For You
        </Text>
        <FlatList
          data={projects}
          renderItem={renderRecommendedProjects}
          contentContainerStyle={{paddingHorizontal: 16, paddingVertical: 8}}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <SafeAreaView />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
