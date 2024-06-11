import { View, Text, ScrollView } from "react-native";
import { Link, useRouter } from "expo-router";
import ProjectCard from "@/components/ProjectCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { Project } from "@/constants/Types";
import { useCategory } from "@/context/CategoryContext";
import { SearchContext } from "@/context/SearchContext";
import { fetchProjects } from "@/services/ProjectService";
import { useContext, useState, useEffect } from "react";

export default function All() {
  const router = useRouter();
  const { category } = useCategory();
  const { searchQuery } = useContext(SearchContext);
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  useEffect(() => {
    const getProjects = async () => {
      const data = await fetchProjects();
      setProjects(data);
    };

    getProjects();
  }, []);

  useEffect(() => {
    const filtered = projects.filter((project) => {
      const matchesSearchQuery =
        searchQuery === "" ||
        project.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = category === "" || project.category === category;
      return matchesSearchQuery && matchesCategory;
    });
    console.log(filtered);
    setFilteredProjects(filtered);
  }, [projects, searchQuery, category]);
  return (
    <ScrollView className="p-4">
      <View style={{ flex: 1, gap: 12 }}>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              projectTitle={project.name}
              projectDesc={project.description}
              owner={project.owner}
              category={project.category}
              isWishlist={project.is_wishlisted}
              backers={project.backers}
              current_funding={project.current_funding}
              target_funding={project.target_funding}
              daysToGo={Math.ceil(
                (new Date(project.deadline_date).getTime() -
                  new Date().getTime()) /
                  (1000 * 60 * 60 * 24)
              )}
              type={index == 0 ? "explore-first" : "explore"}
              onPress={() => router.push(`/(tabs)/explore/${project.id}`)}
            />
          ))
        ) : (
          <View className="flex justify-center items-center">
            <Text className="text-[20px] text-black">No Project Available</Text>
          </View>
        )}
        {/* <ProjectCard
          projectTitle={"Test Projects"}
          projectDesc={"Nice banget banf"}
          owner={"Akmalkomeng"}
          category={"Category"}
          isWishlist={true}
          backers={12}
          daysToGo={4}
          type="explore-first"
        />
        <ProjectCard
          projectTitle={"Test Projects"}
          projectDesc={"Nice banget banf"}
          owner={"Akmalkomeng"}
          category={"Category"}
          isWishlist={true}
          backers={12}
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
          daysToGo={4}
          type="explore"
        /> */}
      </View>
      <SafeAreaView edges={["bottom"]} />
    </ScrollView>
  );
}
