import { MaterialTopTabs } from "@/components/navigation/TopTabNavigation";

const TopTabMyProject = () => {
  return (
    <MaterialTopTabs
        screenOptions={{
            tabBarLabelStyle: { textTransform: "capitalize", fontWeight: "bold"},
            tabBarIndicatorStyle: {borderColor: "#49CCB4"}

        }}>
      <MaterialTopTabs.Screen name="index" options={{ title: "Ongoing" }} />
      <MaterialTopTabs.Screen name="draft" options={{ title: "Draft" }} />
      <MaterialTopTabs.Screen name="ended" options={{ title: "Ended" }} />
    </MaterialTopTabs>
  );
};

export default TopTabMyProject;
