import ProjectCard from "@/components/ProjectCard";
import React, { useState } from "react";
import { TouchableOpacity, ScrollView, Text } from "react-native";
import { useRouter } from "expo-router";

export default function Overview() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  return (
    <ScrollView className=" bg-[#F9F9F9] px-4 pt-6">
      <ProjectCard
        backers={20}
        bannerImageUrl="dsdsa"
        category="Sport"
        daysToGo={3}
        isProjectDetail={true}
        isWishlist={false}
        projectTitle="CRYPTID"
        owner={"ONE"}
        projectDesc={
          '"Cryptid" follows a team of unlikely heroes as they navigate a world where myths and legends are real. Set against the backdrop of a hidden society of cryptids, creatures thought to be merely folklore, the comic explores themes of acceptance, identity, and the blurred lines between the natural and supernatural worlds. As the team unravels mysteries and confronts ancient evils, they must also confront their own inner demons, forging bonds that transcend species and facing threats that challenge the very fabric of reality.'
        }
      />
      <TouchableOpacity
        className={`w-full p-3 rounded-3xl items-center justify-center mt-2 mb-9 ${
          loading ? "bg-[#707181]" : "bg-[#008E8A]"
        }`}
        disabled={loading}
        onPress={() => router.push("/(tabs)/explore/back-project")}
      >
        <Text className=" text-white">Back This Project!</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
