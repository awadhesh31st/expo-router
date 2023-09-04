import React from "react";
import { Stack, useRouter } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const RootLayout = () => {
  const router = useRouter()
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
          <TouchableOpacity onPress={() => router.push('/')}>
            <MaterialCommunityIcons name="simple-icons" size={24} color="black" />
          </TouchableOpacity>
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
