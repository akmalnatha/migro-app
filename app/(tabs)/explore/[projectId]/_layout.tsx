import { MaterialTopTabs } from "@/components/navigation/TopTabNavigation";
import { Project } from "@/constants/Types";
import { useLocalSearchParams, usePathname, useRouter } from "expo-router";
import { useState } from "react";
import { TouchableOpacity, Text } from "react-native";

const TopTabLayout = () => {
  const router = useRouter()
  const pathname = usePathname()
  // console.log(pathname)
  const { projectId } = useLocalSearchParams()
  // console.log(projectId)
  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState<Project>();
  return (
    <>
      <MaterialTopTabs
        screenOptions={{
          tabBarLabelStyle: { textTransform: "capitalize", fontWeight: "bold" },
          tabBarIndicatorStyle: { borderColor: "#49CCB4" },
        }}
      >
        <MaterialTopTabs.Screen name="index" options={{ title: "Overview" }} />
        <MaterialTopTabs.Screen
          name="campaign"
          options={{ title: "Campaign" }}
        />
        <MaterialTopTabs.Screen name="faq" options={{ title: "FAQ" }} />
      </MaterialTopTabs>
      <TouchableOpacity
        className={`w-full p-3 rounded-3xl items-center justify-center mt-2 mb-9 bg-[#008E8A]`}
        onPress={() => router.push(`/(tabs)/explore/back-project/${projectId}`)}
      >
        <Text className="text-white">Back This Project!</Text>
      </TouchableOpacity>
    </>
  );
};

export default TopTabLayout;
