import { MaterialTopTabs } from "@/components/navigation/TopTabNavigation";

const TopTabLayout = () => {
  return (
    <MaterialTopTabs
      screenOptions={{
        tabBarLabelStyle: { textTransform: "capitalize", fontWeight: "bold" },
        tabBarIndicatorStyle: {borderColor: "#49CCB4"}
      }}
    >
      <MaterialTopTabs.Screen name="overview" options={{ title: "Overview" }} />
      <MaterialTopTabs.Screen name="campaign" options={{ title: "Campaign" }} />
      <MaterialTopTabs.Screen name="faq" options={{ title: "FAQ" }} />
    </MaterialTopTabs>
  );
};

export default TopTabLayout;
