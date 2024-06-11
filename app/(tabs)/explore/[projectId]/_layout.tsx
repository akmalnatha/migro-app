import { MaterialTopTabs } from "@/components/navigation/TopTabNavigation";
import { useRouter } from "expo-router";
import { TouchableOpacity, Text } from "react-native";

const TopTabLayout = () => {
  const router = useRouter()
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
        onPress={() => router.push("/(tabs)/explore/back-project")}
      >
        <Text className="text-white">Back This Project!</Text>
      </TouchableOpacity>
    </>
  );
};

export default TopTabLayout;
