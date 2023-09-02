import { Stack } from "expo-router";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#d1ffde",
        },
        headerRight: () => (
          <MaterialCommunityIcons name="menu" size={24} color="black" />
        ),
        headerLeft: () => (
          <MaterialCommunityIcons name="simple-icons" size={24} color="black" />
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
