import { View, Text } from "react-native";
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
        }}
      />
      <Stack.Screen name="details" options={{ headerTitle: "Details" }} />
    </Stack>
    // <View>
    //   <Text className='text-white mt-8'>About</Text>
    //   {/* ...other links */}
    //   <Link href="/user/bacon" className='text-white mt-4'>View user</Link>
    // </View>
  );
}
