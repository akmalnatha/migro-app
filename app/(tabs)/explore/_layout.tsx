import { View, Text } from "react-native";
import { Link, Stack } from "expo-router";
import { Chip, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ExploreLayout() {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="(content-explore)"
        options={{
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 8,
                backgroundColor: "#FFFFFFF",
              }}
            >
              <Text className="text-[20px] font-bold text-black">Explore</Text>
              <Chip textStyle={{ fontSize: 14 }} icon={"chevron-down"}>
                All
              </Chip>
            </View>
          ),
        }}
      />
    </Stack>
    // <View>
    //   <Text className='text-white mt-8'>About</Text>
    //   {/* ...other links */}
    //   <Link href="/user/bacon" className='text-white mt-4'>View user</Link>
    // </View>
  );
}
