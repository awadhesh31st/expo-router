import React, { useCallback } from "react";
import { Stack, useRouter } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ActivityIndicator, Pressable } from "react-native";
import { useFonts } from "expo-font";

import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const router = useRouter();
  const [fontsLoaded, fontError] = useFonts({
    "Playfair-Regular": require("../assets/fonts/Playfair-Regular.ttf"),
    "Playfair-Medium": require("../assets/fonts/Playfair-Medium.ttf"),
    "Playfair-Bold": require("../assets/fonts/Playfair-Bold.ttf"),
    "Playfair-SemiBold": require("../assets/fonts/Playfair-SemiBold.ttf"),
    "Playfair-Black": require("../assets/fonts/Playfair-Black.ttf"),
    "Playfair-ExtraBold": require("../assets/fonts/Playfair-ExtraBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return <ActivityIndicator />;
  }

  return (
    <Stack
      onLayout={onLayoutRootView}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#d1ffde",
        },
        headerRight: () => (
          <Pressable onPress={() => router.push("/menu")}>
            <MaterialCommunityIcons name="menu" size={24} color="black" />
          </Pressable>
        ),
        headerLeft: () => (
          <Pressable onPress={() => router.push("/")}>
            <MaterialCommunityIcons name="spotlight" size={24} color="black" />
          </Pressable>
        ),
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "",
        }}
      />
    </Stack>
  );
};

export default RootLayout;
