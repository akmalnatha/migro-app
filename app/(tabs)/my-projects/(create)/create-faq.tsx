import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProjectCard from "@/components/ProjectCard";
import BoxPhotoInput from "@/components/BoxPhotoInput";
import { TextInput } from "react-native-paper";
import { Link } from "expo-router";

export default function CreateFaq() {
  return (
    <ScrollView className="p-4 min-h-screen">
      <View style={{ flex: 1, gap: 16 }}>
        <Text className="text-[20px] font-bold text-black">Overview</Text>
        <BoxPhotoInput />
        <TextInput
          mode="outlined"
          placeholder="Description"
          style={{ flexGrow: 1 }}
          contentStyle={{ height: 52 }}
          outlineStyle={{ height: 52 }}
        />
        <View className="flex flex-row justify-between items-center w-full">
          <Text className="text-[16px] font-bold text-black">BACK</Text>
          <View className="flex flex-row items-center gap-4">
            <Link
              href={"./create-backing"}
              style={{ fontSize: 16, fontWeight: "700" }}
            >
              SKIP
            </Link>
            <Link
              href={"./create-backing"}
              style={{ fontSize: 16, fontWeight: "700" }}
            >
              NEXT
            </Link>
          </View>
        </View>
      </View>
      <SafeAreaView edges={["bottom"]} />
    </ScrollView>
  );
}
