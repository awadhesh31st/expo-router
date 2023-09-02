import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BasicProps } from "../types/common";

const MainHeading: React.FC<BasicProps> = ({ content }) => {
  return (
    <View style={styles.heading}>
      <Text style={styles.headingText}>{content}</Text>
    </View>
  );
};

export default MainHeading;

const styles = StyleSheet.create({
  heading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 28,
    paddingTop: 28,
    marginBottom: 20,
  },
  headingText: {
    fontSize: 36,
    fontWeight: "800",
    textAlign: "center",
  },
});
