import { View, Text } from "react-native";
import { Link, Stack } from "expo-router";
import { Chip, TextInput } from "react-native-paper";

export default function ProfileLayout() {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="[user]"
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
                User
              </Text>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="(edit-profile)/index"
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
              <Text className="text-[20px] font-bold text-black">
                Edit Profile
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
