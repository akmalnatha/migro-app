import { MaterialTopTabs } from "@/components/navigation/TopTabNavigation";
import { SearchContext, SearchProvider } from "@/context/SearchContext";
import { MaterialTopTabBar } from "@react-navigation/material-top-tabs";
import { useContext, useEffect } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useContext(SearchContext);

  useEffect(() => {
    console.log(searchQuery)
  },[searchQuery])

  return (
    <TextInput
      mode="outlined"
      placeholder="Find Projects"
      value={searchQuery}
      onChangeText={setSearchQuery}
      style={{ flexGrow: 1 }}
      contentStyle={{ height: 52 }}
      outlineStyle={{ height: 52 }}
      left={<TextInput.Icon icon="magnify" />}
    />
  );
};

const TopTabExplore = () => {
  return (
    <SearchProvider>
      <MaterialTopTabs
        tabBar={(props) => (
          <>
            <View className="bg-white h-fit px-4">
              <SearchBar/>
            </View>
            <MaterialTopTabBar {...props} />
          </>
        )}
        screenOptions={{
          tabBarLabelStyle: { textTransform: "capitalize", fontWeight: "bold" },
          tabBarStyle: {elevation: 0},
          tabBarIndicatorStyle: {borderColor: "#49CCB4"}
        }}
      >
        <MaterialTopTabs.Screen name="index" options={{ title: "All" }} />
        <MaterialTopTabs.Screen name="popular" options={{ title: "Popular" }} />
        <MaterialTopTabs.Screen name="newest" options={{ title: "Newest" }} />
        <MaterialTopTabs.Screen name="ending" options={{ title: "Ending" }} />
      </MaterialTopTabs>
    </SearchProvider>
  );
};

export default TopTabExplore;
