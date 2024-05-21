import { MaterialTopTabs } from "@/components/navigation/TopTabNavigation";
import { MaterialTopTabBar } from "@react-navigation/material-top-tabs";
import { View } from "react-native";
import { TextInput } from "react-native-paper";

const TopTabExplore = () => {
  return (
    <MaterialTopTabs
      tabBar={(props) => (
        <>
          <View className="bg-white h-fit px-4">
            <TextInput
              mode="outlined"
              placeholder="Find Projects"
              style={{ flexGrow: 1 }}
              contentStyle={{ height: 52}}
              outlineStyle={{ height: 52}}
              left={<TextInput.Icon icon="magnify" />}
            />
          </View>
          <MaterialTopTabBar {...props} />
        </>
      )}
      screenOptions={{
        tabBarLabelStyle: { textTransform: "capitalize", fontWeight: "bold" },
        tabBarStyle: {elevation: 0}
      }}
    >
      <MaterialTopTabs.Screen name="index" options={{ title: "All" }} />
      <MaterialTopTabs.Screen name="popular" options={{ title: "Popular" }} />
      <MaterialTopTabs.Screen name="newest" options={{ title: "Newest" }} />
      <MaterialTopTabs.Screen name="ending" options={{ title: "Ending" }} />
    </MaterialTopTabs>
  );
};

export default TopTabExplore;
