import { MaterialTopTabs } from "@/components/navigation/TopTabNavigation";
import { MaterialTopTabBar } from "@react-navigation/material-top-tabs";
import { Link } from "expo-router";
import { View, Image } from "react-native";
import { Text, TextInput } from "react-native-paper";

const TopTabUser = () => {
  return (
    <MaterialTopTabs
      tabBar={(props) => (
        <View className="w-full bg-white">
          <View className="flex flex-row justify-between px-4">
            <View className="flex flex-row gap-5">
              <Image
                source={require("@/assets/images/profile.png")}
                className="w-[100px] aspect-square rounded-full"
                style={{ resizeMode: "contain" }}
              />
              <View>            
                <Text className="text-[14px]">Name</Text>
                <Text className="text-[14px] font-bold">Komeng</Text>
                <Text className="text-[14px] mt-2">Email</Text>
                <Text className="text-[14px] font-bold">komeng@gmail.com</Text>
              </View>
            </View>
            <Link href={"/(tabs)/profil/(edit-profile)"} className="text-[16px] font-bold">EDIT</Link>
          </View>
          <View className="w-1/2">
            <MaterialTopTabBar {...props} />
          </View>
        </View>
      )}
      screenOptions={{
        tabBarLabelStyle: { textTransform: "capitalize", fontWeight: "bold" },
        tabBarStyle: { elevation: 0 },
        tabBarIndicatorStyle: {borderColor: "#49CCB4"}
      }}
    >
      <MaterialTopTabs.Screen name="index" options={{ title: "Saved" }} />
      <MaterialTopTabs.Screen
        name="user-backed"
        options={{ title: "Backed" }}
      />
    </MaterialTopTabs>
  );
};

export default TopTabUser;
