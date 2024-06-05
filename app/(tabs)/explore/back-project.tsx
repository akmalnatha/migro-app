import BackProjectCard from "@/components/BackProjectCard";
import ProjectCard from "@/components/ProjectCard";
import React, { useState } from "react";
import { TouchableOpacity, ScrollView, Text, View } from "react-native";
import { FlatList } from "react-native-reanimated/lib/typescript/Animated";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Overview() {
  const [loading, setLoading] = useState(false);
  return (
    <ScrollView className="w-screen pt-8 p-4">
      <ScrollView horizontal>
        <SafeAreaView>
          <View style={{flexDirection: "row", gap: 32}}>
            <BackProjectCard
              cost={"15.000"}
              title={"DONATE WITHOUT BENEFITS"}
              description={"Donate only if you believe in this project."}
            />
            <BackProjectCard
              cost={"50.000"}
              title={"SIGNED PHYSICAL COPY OF THE BOOK"}
              description={"You will get the special edition hard-cover of the book with a signature and special figurine of the characters."}
              benefits={
                `- Special Edition Hard-Cover Copy\n - Signature\n - Hand-crafted FIgurine`
              }
            />
            <BackProjectCard
              cost={"100.000"}
              title={"SIGNED PHYSICAL COPY OF THE BOOK"}
              description={"You will get the special edition hard-cover of the book with a signature and special figurine of the characters."}
              benefits={
                `- Special Edition Hard-Cover Copy\n - Signature\n - Hand-crafted FIgurine`
              }
            />
          </View>
        </SafeAreaView>
      </ScrollView>
    </ScrollView>
  );
}
