import ProjectCard from "@/components/ProjectCard";
import React, { useEffect, useState } from "react";
import { TouchableOpacity, ScrollView, Text } from "react-native";
import { useLocalSearchParams, usePathname, useRouter } from "expo-router";
import { Project } from "@/constants/Types";
import { supabase } from "@/lib/supabase";

export default function Overview() {
  const pathname = usePathname()
  console.log(pathname)
  const { projectId } = useLocalSearchParams()
  console.log(projectId)
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [project, setProject] = useState<Project>();

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const { data, error } = await supabase
          .from("projects")
          .select(`
            id,
            name,
            category,
            created_at,
            description,
            owner,
            backers,
            target_funding,
            deadline_date,
            overview_image,
            current_funding,
            is_recommended
          `)
          .eq("id", projectId)
          .single();

        if (error) {
          console.error(error);
        } else {
          setProject({ ...data, is_wishlisted: false });
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProject();
  }, []);
  return (
    <ScrollView className=" bg-[#F9F9F9] px-4 pt-6">
      {project && <ProjectCard
        backers={project.backers}
        current_funding={project.current_funding}
        target_funding={project.target_funding}
        bannerImageUrl={project.overview_image}
        category={project.category}
        daysToGo={Math.ceil((new Date(project.deadline_date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))}
        isProjectDetail
        isWishlist={false}
        projectTitle={project.name}
        projectDesc={project.description}
        owner={project.owner}
      />}
    </ScrollView>
  );
}
