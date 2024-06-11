import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProjectCard from "@/components/ProjectCard";
import BoxPhotoInput from "@/components/BoxPhotoInput";
import { TextInput } from "react-native-paper";
import { Link, useLocalSearchParams } from "expo-router";
import { supabase } from "@/lib/supabase";
import { useState, useEffect } from "react";
import { Profile } from "@/constants/Types";

export default function CreateOverview() {
  const { user } = useLocalSearchParams<{ user: string }>();
  console.log(user)
  const [profile, setProfile] = useState<Profile|null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data, error } = await supabase
          .from("profiles")
          .select("id, username, full_name, avatar_url")
          .eq("username", user)
          .single();

        if (error) {
          console.error(error);
        } else {
          setProfile(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (user) {
      fetchProfile();
    }
  }, [user]);

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
