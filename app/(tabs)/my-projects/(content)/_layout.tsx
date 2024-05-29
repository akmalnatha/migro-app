import { MaterialTopTabs } from "@/components/navigation/TopTabNavigation";

const TopTabMyProject = () => {
  return (
    <MaterialTopTabs
        screenOptions={{
            tabBarLabelStyle: { textTransform: "capitalize", fontWeight: "bold"}
        }}>
      <MaterialTopTabs.Screen name="index" options={{ title: "All" }} />
      <MaterialTopTabs.Screen name="draft" options={{ title: "Draft" }} />
      <MaterialTopTabs.Screen name="ended" options={{ title: "Ended" }} />
    </MaterialTopTabs>
  );
};

export default TopTabMyProject;
