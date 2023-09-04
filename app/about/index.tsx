import { Stack } from "expo-router";
import React from "react";
import { View, StyleSheet } from "react-native";
import GoBack from "../../components/go-back";
import Pills from "../../components/pills";
import { StatusBar } from "expo-status-bar";

const About = () => {
  return (
    <View style={styles.about}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#c8bfff",
          },
          title: "",
        }}
      />
      <StatusBar style="dark" />
      <GoBack content="Go Back" uri="/" />
      <View style={styles.mainHeading} />
      <Pills content="Project" alignSelf="flex-start" bgColor="#0f0d0e" />
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  about: {
    flex: 1,
    backgroundColor: "#c8bfff",
  },
  mainHeading: {
    paddingTop: 28,
  },
});
