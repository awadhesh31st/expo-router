import React, { useCallback } from "react";
import { Stack, useRouter } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, Image } from "react-native";
import { useFonts } from "expo-font";

import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const RootLayout: React.FC = () => {
  const router = useRouter();
  const [fontsLoaded, fontError] = useFonts({
    "font-Light": require("../assets/fonts/Merriweather-Light.ttf"),
    "font-Regular": require("../assets/fonts/Merriweather-Regular.ttf"),
    "font-Bold": require("../assets/fonts/Merriweather-Bold.ttf"),
    "font-Black": require("../assets/fonts/Merriweather-Black.ttf"),
  });

  const onLayoutRootView = useCallback(async (): Promise<void> => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Stack
      onLayout={() => onLayoutRootView()}
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
            <Image
              source={require("../assets/icon-logo.png")}
              style={{ width: 25, height: 25 }}
            />
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
