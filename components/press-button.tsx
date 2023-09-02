import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { BasicProps } from "../types/common";

const PressButton: React.FC<BasicProps> = ({
  content = "Press",
  subContent = "Button",
}) => {
  return (
    <View style={styles.button}>
      <Pressable style={styles.buttonWrapper}>
        <Text style={styles.buttonText}>{content}</Text>
        <Text style={styles.buttonSubText}>{subContent}</Text>
      </Pressable>
    </View>
  );
};

export default PressButton;

const styles = StyleSheet.create({
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 28,
    marginBottom: 20,
  },
  buttonWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: "#0f0d0e",
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#f9f4da",
  },
  buttonSubText: {
    fontSize: 16,
    fontWeight: "normal",
    color: "#f9f4da",
  },
});
