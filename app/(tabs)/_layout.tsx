import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Icon } from 'react-native-paper';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            // <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
            <Image source={focused ? require('@/assets/images/icon_home_active.png') : require('@/assets/images/icon_home_inactive.png')} style={{height: 28, objectFit: "contain"}}/>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name='search' size={28} style={{marginBottom: -3}} color={color}/>
            // <Icon size={32} source='magnify' color={color}/>
          ),
        }}
      />
      <Tabs.Screen
        name="my-projects"
        options={{
          title: 'My Projects',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name='grid-outline' size={28} style={{marginBottom: -3}} color={color}/>
            // <Icon size={32} source='view-dashboard-outline' color={color}/>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name='person-outline' size={28} style={{marginBottom: -3}} color={color}/>
            // <Icon size={32} source='account-outline' color={color}/>
          ),
        }}
      />
    </Tabs>
  );
}
