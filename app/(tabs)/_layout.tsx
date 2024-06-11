import { Tabs, useSegments } from "expo-router";
import React, { useEffect, useState } from "react";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Chip,
  Text,
} from "react-native-paper";
import { View } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const segment = useSegments();
  // get the current page from the segment
  const currentSegment = segment[segment.length - 1]
  useEffect(()=> {
    // console.log(currentSegment)
  },[currentSegment])
  // create an array of list pages you want to hide the tab bar in
  const pagesToHideTabBar = ['[projectId]', '[paymentID]', '[backProjectID]', 'campaign', 'faq', '(create)', 'create-campaign', 'create-faq', 'create-backing', '(edit-profile)']

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: true,
        headerTitleAlign: "center",
        tabBarStyle: {
          // check if the current page is in the list then hide the tab bar
          display: pagesToHideTabBar.includes(currentSegment) ? 'none' : 'flex',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ focused }) => (
            // <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
            <Image
              source={
                focused
                  ? require("@/assets/images/icon_home_active.png")
                  : require("@/assets/images/icon_home_inactive.png")
              }
              style={{ height: 28, objectFit: "contain" }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          headerShadowVisible: false,
          headerShown: false,
          title: "Explore",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name="search"
              size={28}
              style={{ marginBottom: -3 }}
              color={color}
            />
            // <Icon size={32} source='magnify' color={color}/>
          ),
        }}
      />
      <Tabs.Screen
        name="my-projects"
        options={{
          headerShown: false,
          title: "My Projects",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name="grid-outline"
              size={28}
              style={{ marginBottom: -3 }}
              color={color}
            />
            // <Icon size={32} source='view-dashboard-outline' color={color}/>
          ),
        }}
      />
      <Tabs.Screen
        name="profil"
        options={{
          headerShown: false,
          title: "Profil",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name="person-outline"
              size={28}
              style={{ marginBottom: -3 }}
              color={color}
            />
            // <Icon size={32} source='account-outline' color={color}/>
          ),
        }}
      />
    </Tabs>
  );
}
