import { View, Text } from "react-native";
import { Link, Stack, useSegments } from "expo-router";
import { Chip, TextInput } from "react-native-paper";
import { supabase } from "@/lib/supabase";
import { useState, useEffect } from "react";

export default function ProfileLayout() {
  const [id, setId] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data, error } = await supabase
          .from("profiles")
          .select("id, username")
          .eq("id", (await supabase.auth.getUser()).data.user?.id)
          .single();

        if (error) {
          console.error(error);
        } else {
          setId(data.id);
          setUsername(data.username);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name={"[user]"}
        options={{
          title: username,
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
                {username}
              </Text>
            </View>
          ),
        }}
        // listeners={{
          
        //   tabPress: (e) => {
        //     e.preventDefault();
        //     router.push(`/(tabs)/${slug}/`);
        //   },
        // }}
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
