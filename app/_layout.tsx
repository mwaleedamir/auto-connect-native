import React from 'react';
// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '../hooks/useColorScheme';

export default function RootLayout(): React.ReactElement | null {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return null; // Prevent app from rendering until font is loaded
  }

  return (
    <>
    <Stack>
        {/* Tab layout route */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        {/* Optional: Catch-all not-found screen */}
        <Stack.Screen name="+not-found" options={{ title: 'Not Found' }} />
      </Stack>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    </>
    );
  }
  
  //     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
  // </ThemeProvider>