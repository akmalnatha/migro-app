import { View, Text, Pressable } from "react-native";
import { Link, Stack } from "expo-router";

export default function MyProjectLayout() {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerTitleAlign: "center",
        title: "centered",
      }}
    >
      <Stack.Screen
        name="(content)"
        options={{
          headerTitle: (props) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Text className="text-[20px] font-bold text-black">
                My Projects
              </Text>
            </View>
          ),
          headerRight: () => (
            <Link href={"/(tabs)/my-projects/(create)"} style={{fontSize: 16, fontWeight: "700"}}>
              CREATE
            </Link>
          )
        }}
      />
      <Stack.Screen
        name="(create)"
        options={{
          headerTitle: (props) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Text className="text-[20px] font-bold text-black">
                Create Project
              </Text>
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
