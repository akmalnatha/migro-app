import { View, Text, Pressable } from "react-native";
import { Link, Stack } from "expo-router";

export default function CreateProjectLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Create Overview"
        }}
      />
      <Stack.Screen
        name="create-campaign"
        options={{
          title: "Create Campaign"
        }}
      />
      <Stack.Screen
        name="create-faq"
        options={{
          title: "Create FAQ"
        }}
      />
      <Stack.Screen
        name="create-backing"
        options={{
          title: "Create Backing"
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
