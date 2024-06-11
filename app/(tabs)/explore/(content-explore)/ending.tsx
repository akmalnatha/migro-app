import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProjectCard from "@/components/ProjectCard";
import { Project, Category } from "@/constants/Types";
import { fetchCategories } from "@/services/CategoryService";
import { fetchProjects } from "@/services/ProjectService";
import { useState, useEffect, useContext } from "react";
import { SearchContext } from "@/context/SearchContext";
import { useCategory } from "@/context/CategoryContext";

export default function Ending() {
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
    const filteredAndSortedProjects = projects
      .filter((project) => {
        const matchesSearchQuery =
          searchQuery === "" ||
          project.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory =
          category === "" || project.category === category;
        return matchesSearchQuery && matchesCategory;
      })
      .sort(
        (a, b) =>
          new Date(a.deadline_date).getTime() -
          new Date(b.deadline_date).getTime()
      );

    setFilteredProjects(filteredAndSortedProjects);
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
