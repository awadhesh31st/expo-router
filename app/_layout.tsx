import React from "react";
import { Link, Stack, useRouter } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";

const RootLayout = () => {
  const router = useRouter();
  return (
    <Stack
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
