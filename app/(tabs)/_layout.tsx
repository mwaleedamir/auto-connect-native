import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { colors } from '../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.secondary,
        headerShown: false,
        animation: 'shift',
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopWidth: 1,
          borderTopColor: colors.gray[200],
          height: Platform.OS === 'ios' ? 90 : 60,
          paddingBottom: Platform.OS === 'ios' ? 20 : 0,
        },
      }}
      >

      <Tabs.Screen 
        name="home" 
        options={{ 
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }} 
      />
        <Tabs.Screen name="explore" options={{ title: 'Explore',
         tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),}} />
    </Tabs>
  );
}
